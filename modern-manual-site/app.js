import { filterTree } from "./lib/tree.js?v=2";
import { parseXml, renderXmlDocument } from "./lib/xml-utils.js?v=2";

const els = {
  datasetSelect: document.getElementById("datasetSelect"),
  tree: document.getElementById("tree"),
  viewer: document.getElementById("viewer"),
  treeFilter: document.getElementById("treeFilter"),
  themeToggle: document.getElementById("themeToggle"),
};

const state = {
  datasets: [],
  activeDataset: null,
  activeDatasetIndex: null,
  selectedPath: null,
  treeFilter: "",
  expandedFolders: new Set(),
  activeTreeNodes: [],
  refToPath: new Map(),
  refToTitle: new Map(),
};

function htmlEscape(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("manual-next-theme", theme);
}

function setupTheme() {
  const saved = localStorage.getItem("manual-next-theme");
  if (saved) {
    applyTheme(saved);
    return;
  }

  if (!window.matchMedia) {
    applyTheme("dark");
    return;
  }

  applyTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function renderViewerPlaceholder(message, isError = false) {
  els.viewer.className = isError ? "viewer error" : "viewer empty";
  els.viewer.innerHTML = `<h2>${isError ? "Error" : "Select a file from the tree"}</h2><p>${htmlEscape(message)}</p>`;
}

function rewriteAssetUrl(rawUrl, sourceUrl) {
  if (!rawUrl || rawUrl.startsWith("data:") || rawUrl.startsWith("#") || /^javascript:/i.test(rawUrl)) {
    return rawUrl;
  }

  try {
    return new URL(rawUrl.replaceAll("\\", "/"), sourceUrl).toString();
  } catch {
    return rawUrl;
  }
}

function renderHtmlDocument(contentText, sourcePath) {
  const parser = new DOMParser();
  const sourceUrl = new URL(sourcePath, window.location.href).toString();
  const doc = parser.parseFromString(contentText, "text/html");

  doc.querySelectorAll("script, link, meta, title, base").forEach((node) => node.remove());

  for (const el of doc.querySelectorAll("[src], [href]")) {
    if (el.hasAttribute("src")) {
      el.setAttribute("src", rewriteAssetUrl(el.getAttribute("src") || "", sourceUrl));
    }
    if (el.hasAttribute("href")) {
      el.setAttribute("href", rewriteAssetUrl(el.getAttribute("href") || "", sourceUrl));
    }
  }

  const wrap = document.createElement("div");
  wrap.className = "html-view";
  wrap.append(...Array.from(doc.body.childNodes));
  wrap.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) {
      return;
    }

    const href = link.getAttribute("href") || "";
    if (!href) {
      return;
    }

    const resolved = rewriteAssetUrl(href, sourceUrl);
    const currentOrigin = window.location.origin;
    if (!resolved.startsWith(currentOrigin)) {
      return;
    }

    const normalizedPath = resolved.replace(`${currentOrigin}${window.location.pathname.replace(/\/modern-manual-site\/index\.html$/, "")}/`, "./");
    if (!state.activeDatasetIndex?.files?.[normalizedPath]) {
      return;
    }

    event.preventDefault();
    state.selectedPath = normalizedPath;
    loadSelectedFile();
    renderTree();
  });
  return wrap;
}

function graphicPathCandidates(graphicName) {
  const fileName = String(graphicName || "").split(/[\\/]/).pop() || "";
  const stem = fileName.replace(/\.[^.]+$/, "");
  const ext = fileName.includes(".") ? fileName.slice(fileName.lastIndexOf(".")) : ".jpg";
  const prefixes = [stem.slice(0, 6), stem.slice(0, 4)].filter(Boolean);
  const extensions = [ext, ".jpg", ".jpeg", ".svg"].filter((value, index, arr) => arr.indexOf(value) === index);
  const candidates = [];
  const rootPrefix = `${window.location.origin}/suzuki-manual-scrapper`;
  for (const prefix of prefixes) {
    for (const extension of extensions) {
      candidates.push(`${rootPrefix}/image/${prefix}/${stem}${extension}`);
    }
  }
  return candidates;
}

function subtreeContainsPath(node, path) {
  if (!node) {
    return false;
  }
  if (node.type === "file") {
    return node.path === path;
  }
  return (node.children || []).some((child) => subtreeContainsPath(child, path));
}

function buildTreeNodes(nodes, trail = "") {
  const frag = document.createDocumentFragment();

  for (const node of nodes || []) {
    if (node.type === "folder") {
      const folderKey = `${trail}/${node.label}`;
      const details = document.createElement("details");
      details.open = !!state.treeFilter || state.expandedFolders.has(folderKey) || subtreeContainsPath(node, state.selectedPath);
      details.dataset.folderKey = folderKey;
      details.addEventListener("toggle", () => {
        if (details.open) {
          state.expandedFolders.add(folderKey);
        } else {
          state.expandedFolders.delete(folderKey);
        }
      });
      const summary = document.createElement("summary");
      summary.textContent = node.label;
      details.appendChild(summary);
      details.appendChild(buildTreeNodes(node.children || [], folderKey));
      frag.appendChild(details);
      continue;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = node.title ? `${node.label} - ${node.title}` : node.label;
    button.dataset.path = node.path;
    button.className = node.path === state.selectedPath ? "active" : "";
    button.addEventListener("click", () => {
      state.selectedPath = node.path;
      loadSelectedFile();
      renderTree();
    });
    frag.appendChild(button);
  }

  return frag;
}

function renderTree() {
  const nodes = filterTree(state.activeDatasetIndex?.tree || [], state.treeFilter);
  state.activeTreeNodes = nodes;
  els.tree.innerHTML = "";
  els.tree.appendChild(buildTreeNodes(nodes));
}

async function loadSelectedFile() {
  if (!state.selectedPath) {
    renderViewerPlaceholder("Pick an XML node to render.");
    return;
  }

  const selectedMeta = state.activeDatasetIndex?.files?.[state.selectedPath] || {};

  try {
    const res = await fetch(state.selectedPath);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} while loading ${state.selectedPath}`);
    }

    const contentText = await res.text();
    const lowerPath = String(state.selectedPath || "").toLowerCase();

    els.viewer.className = "viewer";
    els.viewer.innerHTML = "";

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.innerHTML = `
      <div><strong>Dataset:</strong> ${htmlEscape(state.activeDataset?.name || "-")}</div>
      <div><strong>File:</strong> <code>${htmlEscape(state.selectedPath)}</code></div>
      <div><strong>Detected title:</strong> ${htmlEscape(selectedMeta.title || "(none)")}</div>
    `;
    els.viewer.appendChild(meta);

    if (lowerPath.endsWith(".htm") || lowerPath.endsWith(".html")) {
      els.viewer.appendChild(renderHtmlDocument(contentText, state.selectedPath));
    } else {
      const doc = parseXml(contentText);
      const selectedDir = state.selectedPath.slice(0, state.selectedPath.lastIndexOf("/") + 1);
      const rendered = renderXmlDocument(doc, {
        resolveRef: (refId) => state.refToPath.get(refId) || `${selectedDir}${refId}.xml`,
        resolveRefLabel: (refId) => state.refToTitle.get(refId) || refId,
        resolveGraphic: (graphicName) => graphicPathCandidates(graphicName),
        onNavigate: (targetPath) => {
          if (!state.activeDatasetIndex?.files?.[targetPath]) {
            return;
          }
          state.selectedPath = targetPath;
          loadSelectedFile();
          renderTree();
        },
      });
      els.viewer.appendChild(rendered);
    }
  } catch (err) {
    renderViewerPlaceholder(err.message, true);
  }
}

async function loadDataset(datasetId) {
  const dataset = state.datasets.find((item) => item.id === datasetId);
  if (!dataset) {
    return;
  }

  state.activeDataset = dataset;
  state.activeDatasetIndex = null;
  state.selectedPath = null;
  state.expandedFolders = new Set();
  state.refToPath = new Map();
  state.refToTitle = new Map();
  renderViewerPlaceholder("Loading dataset index...");

  try {
    const res = await fetch(dataset.indexUrl);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} while loading ${dataset.indexUrl}`);
    }
    state.activeDatasetIndex = await res.json();
    for (const filePath of Object.keys(state.activeDatasetIndex?.files || {})) {
      const fileName = filePath.split("/").pop() || "";
      if (!fileName.toLowerCase().endsWith(".xml")) {
        continue;
      }
      const refId = fileName.slice(0, -4);
      if (refId) {
        state.refToPath.set(refId, filePath);
        state.refToTitle.set(refId, state.activeDatasetIndex.files[filePath]?.title || refId);
      }
    }
    state.selectedPath = state.activeDatasetIndex?.firstFilePath || null;
    renderTree();
    await loadSelectedFile();
  } catch (err) {
    renderViewerPlaceholder(err.message, true);
  }
}

async function bootstrap() {
  setupTheme();

  els.themeToggle.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });

  els.treeFilter.addEventListener("input", (evt) => {
    state.treeFilter = evt.target.value.trim();
    renderTree();
  });

  const datasetsRes = await fetch("./data/datasets.json");
  if (!datasetsRes.ok) {
    renderViewerPlaceholder(`HTTP ${datasetsRes.status} while loading dataset manifest.`, true);
    return;
  }

  const payload = await datasetsRes.json();
  state.datasets = payload.datasets || [];

  if (!state.datasets.length) {
    renderViewerPlaceholder("No datasets configured. Run scripts/build_dataset_index.py first.", true);
    return;
  }

  els.datasetSelect.innerHTML = "";
  for (const dataset of state.datasets) {
    const option = document.createElement("option");
    option.value = dataset.id;
    option.textContent = dataset.name;
    els.datasetSelect.appendChild(option);
  }

  els.datasetSelect.addEventListener("change", (evt) => {
    loadDataset(evt.target.value);
  });

  await loadDataset(state.datasets[0].id);
}

bootstrap().catch((err) => {
  renderViewerPlaceholder(err.message, true);
});
