import { filterTree } from "./lib/tree.js?v=3";
import { parseXml, renderXmlDocument } from "./lib/xml-utils.js?v=6";

const els = {
  datasetSelect: document.getElementById("datasetSelect"),
  submodelField: document.getElementById("submodelField"),
  submodelSelect: document.getElementById("submodelSelect"),
  modelField: document.getElementById("modelField"),
  modelSelect: document.getElementById("modelSelect"),
  layout: document.querySelector(".layout"),
  sidebar: document.querySelector(".sidebar"),
  sidebarToggle: document.getElementById("sidebarToggle"),
  sidebarResizer: document.getElementById("sidebarResizer"),
  tree: document.getElementById("tree"),
  treeTabs: document.getElementById("treeTabs"),
  viewer: document.getElementById("viewer"),
  treeFilter: document.getElementById("treeFilter"),
  themeToggle: document.getElementById("themeToggle"),
  globalSearch: document.getElementById("globalSearch"),
  searchResults: document.getElementById("searchResults"),
};

const state = {
  datasets: [],
  activeDataset: null,
  activeSubmodel: null,
  activeDatasetIndex: null,
  selectedPath: null,
  treeFilter: "",
  expandedFolders: new Set(),
  pendingTreeScrollTop: null,
  activeTreeNodes: [],
  refToPath: new Map(),
  refToTitle: new Map(),
  modelVariants: [],
  activeModel: "",
  datasetLoadToken: 0,
  fileLoadToken: 0,
  activeTreeTab: "bookmarks",
  availableTreeTabs: [],
  searchIndex: [],
  searchResults: [],
  searchQuery: "",
  activeSearchResultIndex: -1,
};

const TREE_TABS = [
  { id: "bookmarks", label: "Bookmarks" },
  { id: "dtc", label: "DTC" },
  { id: "symptoms", label: "Symptoms" },
];

const SEARCH_RESULT_LIMIT = 24;

function modelStorageKey(datasetId) {
  return `manual-next-model:${datasetId}`;
}

function submodelStorageKey(datasetId) {
  return `manual-next-submodel:${datasetId}`;
}

const datasetStorageKey = "manual-next-dataset";
const sidebarCollapsedStorageKey = "manual-next-content-expanded";
const sidebarWidthStorageKey = "manual-next-sidebar-width";
const sidebarHeightStorageKey = "manual-next-sidebar-height";
const activeTreeTabStorageKey = "manual-next-active-tree-tab";

function isPortraitSidebarLayout() {
  return window.matchMedia("(max-width: 980px) and (orientation: portrait)").matches;
}

function clampSidebarWidth(width) {
  const minWidth = 240;
  const maxWidth = Math.max(minWidth, window.innerWidth - 460);
  return Math.min(maxWidth, Math.max(minWidth, width));
}

function applySidebarWidth(width, persist = true) {
  if (!els.layout || !Number.isFinite(width)) {
    return;
  }

  const clamped = clampSidebarWidth(width);
  els.layout.style.setProperty("--sidebar-width", `${Math.round(clamped)}px`);
  if (persist) {
    localStorage.setItem(sidebarWidthStorageKey, String(Math.round(clamped)));
  }
}

function clampSidebarHeight(height) {
  const minHeight = 170;
  const maxHeight = Math.max(minHeight, window.innerHeight - 300);
  return Math.min(maxHeight, Math.max(minHeight, height));
}

function applySidebarHeight(height, persist = true) {
  if (!els.layout || !Number.isFinite(height)) {
    return;
  }

  const clamped = clampSidebarHeight(height);
  els.layout.style.setProperty("--sidebar-height", `${Math.round(clamped)}px`);
  if (persist) {
    localStorage.setItem(sidebarHeightStorageKey, String(Math.round(clamped)));
  }
}

function updateSidebarTogglePresentation(expanded) {
  if (!els.sidebarToggle) {
    return;
  }

  els.sidebarToggle.textContent = expanded ? "Collapse" : "Expand";
  els.sidebarToggle.setAttribute("aria-expanded", expanded ? "true" : "false");
  els.sidebarToggle.setAttribute("aria-label", expanded ? "Collapse to show manual pages" : "Expand content to full view");
  els.sidebarToggle.setAttribute("title", expanded ? "Collapse to show manual pages" : "Expand content to full view");
}

function setupSidebarResizer() {
  if (!els.sidebarResizer || !els.layout || !els.sidebar) {
    return;
  }

  let dragging = false;
  let startPrimary = 0;
  let startSize = 0;
  let portraitMode = false;

  const endDrag = () => {
    dragging = false;
    portraitMode = false;
    document.body.classList.remove("sidebar-resizing");
    document.body.classList.remove("sidebar-resizing-vertical");
  };

  els.sidebarResizer.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || els.layout.classList.contains("content-expanded")) {
      return;
    }

    portraitMode = isPortraitSidebarLayout();
    dragging = true;
    startPrimary = portraitMode ? event.clientY : event.clientX;
    startSize = portraitMode
      ? els.sidebar.getBoundingClientRect().height
      : els.sidebar.getBoundingClientRect().width;
    document.body.classList.add("sidebar-resizing");
    if (portraitMode) {
      document.body.classList.add("sidebar-resizing-vertical");
    }
    els.sidebarResizer.setPointerCapture?.(event.pointerId);
    event.preventDefault();
  });

  window.addEventListener("pointermove", (event) => {
    if (!dragging) {
      return;
    }
    if (portraitMode) {
      const next = startSize + (event.clientY - startPrimary);
      applySidebarHeight(next);
      return;
    }
    const next = startSize + (event.clientX - startPrimary);
    applySidebarWidth(next);
  });

  window.addEventListener("pointerup", () => {
    if (!dragging) {
      return;
    }
    endDrag();
  });

  window.addEventListener("pointercancel", () => {
    if (!dragging) {
      return;
    }
    endDrag();
  });

  window.addEventListener("resize", () => {
    if (isPortraitSidebarLayout()) {
      const currentHeight = Number.parseInt(getComputedStyle(els.layout).getPropertyValue("--sidebar-height"), 10);
      if (Number.isFinite(currentHeight)) {
        applySidebarHeight(currentHeight, false);
      }
    } else {
      const currentWidth = Number.parseInt(getComputedStyle(els.layout).getPropertyValue("--sidebar-width"), 10);
      if (Number.isFinite(currentWidth)) {
        applySidebarWidth(currentWidth, false);
      }
    }

    const expanded = els.layout?.classList.contains("content-expanded") || false;
    updateSidebarTogglePresentation(expanded);
  });
}

function setContentExpanded(expanded) {
  if (els.layout) {
    els.layout.classList.toggle("content-expanded", expanded);
  }
  updateSidebarTogglePresentation(expanded);
  localStorage.setItem(sidebarCollapsedStorageKey, expanded ? "1" : "0");
}

function treeStateStorageKey(datasetId, submodelId, model, tab) {
  return `manual-next-tree:${datasetId}:${submodelId}:${model || "default"}:${tab || "bookmarks"}`;
}

function activeTreeStateKey() {
  if (!state.activeDataset?.id || !state.activeSubmodel?.id) {
    return "";
  }
  return treeStateStorageKey(
    state.activeDataset.id,
    state.activeSubmodel.id,
    state.activeModel || "",
    state.activeTreeTab || "bookmarks",
  );
}

function saveTreeState() {
  const key = activeTreeStateKey();
  if (!key) {
    return;
  }

  const payload = {
    selectedPath: state.selectedPath || "",
    expandedFolders: Array.from(state.expandedFolders),
    treeScrollTop: els.tree.scrollTop || 0,
  };

  localStorage.setItem(key, JSON.stringify(payload));
}

function restoreTreeState() {
  state.expandedFolders = new Set();
  state.pendingTreeScrollTop = null;

  const key = activeTreeStateKey();
  if (!key) {
    return;
  }

  const raw = localStorage.getItem(key);
  if (!raw) {
    return;
  }

  try {
    const payload = JSON.parse(raw);
    if (typeof payload.selectedPath === "string" && payload.selectedPath) {
      state.selectedPath = payload.selectedPath;
    }
    if (Array.isArray(payload.expandedFolders)) {
      state.expandedFolders = new Set(payload.expandedFolders.filter((item) => typeof item === "string"));
    }
    if (Number.isFinite(payload.treeScrollTop)) {
      state.pendingTreeScrollTop = Math.max(0, payload.treeScrollTop);
    }
  } catch {
    // Ignore malformed saved tree state and continue with defaults.
  }
}

function htmlEscape(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function normalizedLabel(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function tabLabelForId(tabId) {
  return TREE_TABS.find((tab) => tab.id === tabId)?.label || "Bookmarks";
}

function searchPathTabMap(indexData) {
  const map = new Map();
  const trees = indexData?.trees || {};

  const walk = (nodes, tabId) => {
    for (const node of nodes || []) {
      if (node.type === "file") {
        if (node.path && !map.has(node.path)) {
          map.set(node.path, tabId);
        }
        continue;
      }
      walk(node.children || [], tabId);
    }
  };

  for (const tab of TREE_TABS) {
    walk(trees[tab.id] || [], tab.id);
  }

  return map;
}

function buildSearchIndex(indexData) {
  const files = indexData?.files || {};
  const pathTab = searchPathTabMap(indexData);
  const entries = [];

  for (const [path, meta] of Object.entries(files)) {
    const title = String(meta?.title || "").trim();
    const fileName = path.split("/").pop() || path;
    const nameNoExt = fileName.replace(/\.[^.]+$/, "");
    const tabId = pathTab.get(path) || "bookmarks";
    const searchable = `${title} ${nameNoExt} ${path}`.toLowerCase();
    entries.push({
      path,
      title: title || nameNoExt || path,
      tabId,
      searchable,
    });
  }

  return entries;
}

function scoreSearchResult(entry, query) {
  const q = query.toLowerCase();
  const title = entry.title.toLowerCase();
  const path = entry.path.toLowerCase();
  if (title === q) {
    return 200;
  }
  if (title.startsWith(q)) {
    return 120;
  }
  if (title.includes(q)) {
    return 90;
  }
  if (path.includes(q)) {
    return 60;
  }
  return 20;
}

function computeSearchResults(query) {
  const q = String(query || "").trim().toLowerCase();
  if (!q) {
    return [];
  }

  return state.searchIndex
    .filter((entry) => entry.searchable.includes(q))
    .map((entry) => ({ ...entry, score: scoreSearchResult(entry, q) }))
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.title.localeCompare(b.title);
    })
    .slice(0, SEARCH_RESULT_LIMIT);
}

function hideSearchResults() {
  if (!els.searchResults) {
    return;
  }
  els.searchResults.hidden = true;
  els.searchResults.innerHTML = "";
}

function renderSearchResults() {
  if (!els.searchResults) {
    return;
  }

  const hasQuery = !!state.searchQuery;
  if (!hasQuery) {
    hideSearchResults();
    return;
  }

  if (!state.searchResults.length) {
    els.searchResults.hidden = false;
    els.searchResults.innerHTML = '<div class="search-results-empty">No matching documents.</div>';
    return;
  }

  const html = state.searchResults
    .map((result, index) => {
      const activeClass = index === state.activeSearchResultIndex ? " active" : "";
      return `
        <button type="button" class="search-result-item${activeClass}" data-search-index="${index}">
          <span class="search-result-title">${htmlEscape(result.title)}</span>
          <span class="search-result-meta">
            <span class="search-result-tab">${htmlEscape(tabLabelForId(result.tabId))}</span>
          </span>
        </button>
      `;
    })
    .join("");

  els.searchResults.hidden = false;
  els.searchResults.innerHTML = html;
}

function setActiveSearchResultIndex(nextIndex) {
  if (!state.searchResults.length) {
    state.activeSearchResultIndex = -1;
    renderSearchResults();
    return;
  }

  const last = state.searchResults.length - 1;
  if (nextIndex < 0) {
    state.activeSearchResultIndex = 0;
  } else if (nextIndex > last) {
    state.activeSearchResultIndex = last;
  } else {
    state.activeSearchResultIndex = nextIndex;
  }

  renderSearchResults();

  const active = els.searchResults?.querySelector(".search-result-item.active");
  active?.scrollIntoView({ block: "nearest" });
}

function openSearchResult(result) {
  if (!result || !result.path || !state.activeDatasetIndex?.files?.[result.path]) {
    return;
  }

  if (result.tabId && result.tabId !== state.activeTreeTab) {
    switchTreeTab(result.tabId);
  }

  navigateToPath(result.path, { clearTreeFilter: true });
  state.searchQuery = "";
  state.searchResults = [];
  state.activeSearchResultIndex = -1;
  if (els.globalSearch) {
    els.globalSearch.value = "";
    els.globalSearch.blur();
  }
  hideSearchResults();
}

function updateSearch(query) {
  state.searchQuery = String(query || "").trim();
  state.searchResults = computeSearchResults(state.searchQuery);
  state.activeSearchResultIndex = state.searchResults.length ? 0 : -1;
  renderSearchResults();
}

function clearSearchUi() {
  state.searchIndex = [];
  state.searchQuery = "";
  state.searchResults = [];
  state.activeSearchResultIndex = -1;
  if (els.globalSearch) {
    els.globalSearch.value = "";
  }
  hideSearchResults();
}

function openCurrentSearchSelection() {
  const selected =
    (state.activeSearchResultIndex >= 0 && state.searchResults[state.activeSearchResultIndex])
      ? state.searchResults[state.activeSearchResultIndex]
      : state.searchResults[0];

  if (!selected) {
    return false;
  }

  openSearchResult(selected);
  return true;
}

function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("manual-next-theme", theme);
  updateThemeToggle(theme);
}

function updateThemeToggle(theme) {
  const nextMode = theme === "dark" ? "light" : "dark";
  const icon = theme === "dark" ? "&#9788;" : "&#9790;";
  const label = `Switch to ${nextMode} theme`;
  els.themeToggle.innerHTML = `<span class="theme-icon" aria-hidden="true">${icon}</span>`;
  els.themeToggle.setAttribute("aria-label", label);
  els.themeToggle.setAttribute("title", label);
}

function initializeColumnResizing() {
  // Observe for new tables and add resize handles
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        const tables = mutation.target.querySelectorAll?.("table.xml-diagtest, table.xml-diagcond");
        for (const table of tables || []) {
          if (!table.dataset.resizeInitialized) {
            setupTableColumnResizing(table);
            table.dataset.resizeInitialized = "true";
          }
        }
      }
    }
  });
  
  observer.observe(els.viewer, { childList: true, subtree: true });
}

function setupTableColumnResizing(table) {
  const thead = table.querySelector("thead");
  if (!thead) return;
  
  const headerRow = thead.querySelector("tr");
  if (!headerRow) return;
  
  const headers = headerRow.querySelectorAll("th");
  const tableId = `table-${Math.random().toString(36).slice(2, 9)}`;
  const storageKey = `column-widths-${tableId}`;
  
  // Load saved widths
  const savedWidths = localStorage.getItem(storageKey);
  const widths = savedWidths ? JSON.parse(savedWidths) : null;
  
  headers.forEach((header, index) => {
    // Create resize handle
    const handle = document.createElement("div");
    handle.className = "column-resize-handle";
    header.appendChild(handle);
    
    // Restore saved width if available
    if (widths && widths[index]) {
      header.style.width = widths[index];
    }
    
    // Handle dragging
    handle.addEventListener("mousedown", (e) => {
      e.preventDefault();
      const startX = e.clientX;
      const startWidth = header.offsetWidth;
      
      const handleMouseMove = (moveEvent) => {
        const diff = moveEvent.clientX - startX;
        const newWidth = Math.max(60, startWidth + diff);
        header.style.width = newWidth + "px";
      };
      
      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        
        // Save widths to localStorage
        const colWidths = Array.from(headers).map(h => h.style.width || "");
        localStorage.setItem(storageKey, JSON.stringify(colWidths));
      };
      
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    });
  });
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
  els.viewer.innerHTML = `<p>${htmlEscape(message)}</p>`;
  attachExpandButtonToViewer(isError ? "Error" : currentPageHeadingText());
}

function currentPageHeadingText() {
  if (!state.selectedPath) {
    return "Manual Section";
  }

  if (isManualLandingPath(state.selectedPath)) {
    return "Landing Page";
  }

  const fileMeta = state.activeDatasetIndex?.files?.[state.selectedPath];
  const title = String(fileMeta?.title || "").trim();
  if (title) {
    return title;
  }

  const fileName = String(state.selectedPath).split("/").pop() || "";
  return fileName || "Manual Section";
}

function attachExpandButtonToViewer(defaultHeadingText = "Manual Section") {
  if (!els.viewer || !els.sidebarToggle) {
    return;
  }

  let heading = els.viewer.querySelector("h3");
  if (!heading) {
    heading = document.createElement("h3");
    heading.className = "viewer-fallback-heading xml-title";
    heading.textContent = defaultHeadingText;
    els.viewer.prepend(heading);
  }

  if (!heading.querySelector(".viewer-heading-text")) {
    const textWrap = document.createElement("span");
    textWrap.className = "viewer-heading-text";

    while (heading.firstChild && heading.firstChild !== els.sidebarToggle) {
      textWrap.appendChild(heading.firstChild);
    }

    if (!textWrap.textContent?.trim()) {
      textWrap.textContent = defaultHeadingText;
    }

    heading.prepend(textWrap);
  }

  heading.classList.add("viewer-heading-row");
  heading.appendChild(els.sidebarToggle);
}

function manualLandingPath(datasetId, submodelId) {
  if (!datasetId || !submodelId) {
    return "";
  }
  return `manual-landing://${datasetId}/${submodelId}`;
}

function isManualLandingPath(path) {
  return String(path || "").startsWith("manual-landing://");
}

function treeWithManualLanding(nodes) {
  const datasetId = state.activeDataset?.id || "";
  const submodelId = state.activeSubmodel?.id || "";
  const landingPath = manualLandingPath(datasetId, submodelId);
  if (!landingPath) {
    return nodes || [];
  }

  const landingNode = {
    type: "file",
    label: "Landing Page",
    title: "Landing Page",
    path: landingPath,
    isLanding: true,
  };

  return [landingNode, ...(nodes || [])];
}

function renderManualLanding() {
  const wrap = document.createElement("section");
  wrap.className = "manual-landing";

  const datasetName = String(state.activeDataset?.name || "Suzuki").trim();
  const submodelName = String(state.activeSubmodel?.name || "").trim();

  const headline = datasetName
    .replace(/^Suzuki\s+/i, "")
    .replace(/\s+\/\s+/g, " / ")
    .toUpperCase();

  const modelText = submodelName || "SERVICE MANUAL";

  wrap.innerHTML = `
    <p class="manual-landing-brand">SUZUKI</p>
    <h2 class="manual-landing-headline">${htmlEscape(headline)}</h2>
    <p class="manual-landing-subtitle">SERVICE MANUAL</p>
    <p class="manual-landing-code">${htmlEscape(modelText)}</p>
  `;

  return wrap;
}

function repoRootUrl() {
  const currentDir = new URL("./", window.location.href);
  if (currentDir.pathname.endsWith("/modern-manual-site/")) {
    return new URL("../", currentDir).toString();
  }
  return currentDir.toString();
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

function normalizeSectionCode(value) {
  return String(value || "")
    .toUpperCase()
    .replace(/[^0-9A-Z]/g, "")
    .trim();
}

function isLikelySectionCode(value) {
  return /^[0-9]{1,2}[A-Z]?$/.test(normalizeSectionCode(value));
}

function normalizeTocTitle(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[^a-z0-9 ]/g, "")
    .trim();
}

function titleFromFolderLabel(label) {
  return String(label || "")
    .replace(/^\s*[0-9A-Z]{1,3}\s*-\s*/i, "")
    .trim();
}

function codeFromFolderLabel(label) {
  const match = String(label || "").trim().match(/^([0-9A-Z]{1,3})\s*-/i);
  return normalizeSectionCode(match?.[1] || "");
}

function titleFromNode(node) {
  if (!node) {
    return "";
  }
  if (node.type === "folder") {
    return titleFromFolderLabel(node.label || "");
  }
  return String(node.title || node.label || "").trim();
}

function firstPathInNode(node) {
  if (!node) {
    return "";
  }
  if (node.type === "file") {
    return node.path || "";
  }
  return firstFilePath(node.children || []);
}

function collectFoldersByCode(nodes, targetCode) {
  const found = [];
  const walk = (items, depth) => {
    for (const node of items || []) {
      if (node.type !== "folder") {
        continue;
      }

      if (codeFromFolderLabel(node.label || "") === targetCode) {
        found.push({ node, depth });
      }

      walk(node.children || [], depth + 1);
    }
  };

  walk(nodes, 0);
  return found;
}

function findPathByTitleInNodes(nodes, rawTitle) {
  const targetTitle = normalizeTocTitle(rawTitle);
  if (!targetTitle) {
    return "";
  }

  const walk = (items) => {
    for (const node of items || []) {
      const nodeTitle = normalizeTocTitle(titleFromNode(node));
      if (nodeTitle && nodeTitle === targetTitle) {
        return firstPathInNode(node);
      }

      if (node.type === "folder") {
        const nested = walk(node.children || []);
        if (nested) {
          return nested;
        }
      }
    }
    return "";
  };

  return walk(nodes);
}

function findPathForTocRow(nodes, rawCode, rawTitle) {
  const code = normalizeSectionCode(rawCode);
  const title = normalizeTocTitle(rawTitle);

  if (isLikelySectionCode(code)) {
    const codeFolders = collectFoldersByCode(nodes, code)
      .sort((a, b) => a.depth - b.depth)
      .map((entry) => entry.node);

    if (codeFolders.length) {
      if (title) {
        const exactFolder = codeFolders.find((node) => normalizeTocTitle(titleFromFolderLabel(node.label || "")) === title);
        if (exactFolder) {
          return firstPathInNode(exactFolder);
        }

        for (const folder of codeFolders) {
          const nested = findPathByTitleInNodes(folder.children || [], rawTitle);
          if (nested) {
            return nested;
          }
        }

        const partialFolder = codeFolders.find((node) => {
          const folderTitle = normalizeTocTitle(titleFromFolderLabel(node.label || ""));
          return folderTitle && (folderTitle.includes(title) || title.includes(folderTitle));
        });
        if (partialFolder) {
          return firstPathInNode(partialFolder);
        }
      }

      return firstPathInNode(codeFolders[0]);
    }
  }

  return findPathByTitleInNodes(nodes, rawTitle);
}

function navigateToPath(path, options = {}) {
  if (!path || !state.activeDatasetIndex?.files?.[path]) {
    return false;
  }

  if (options.clearTreeFilter) {
    state.treeFilter = "";
    els.treeFilter.value = "";
  }

  state.selectedPath = path;
  loadSelectedFile();
  renderTree();
  saveTreeState();
  return true;
}

function wireHtmlTocRows(wrap) {
  const titleText = normalizedLabel(wrap.querySelector(".servinfo > .title")?.textContent || "");
  if (titleText !== "table of contents") {
    return;
  }

  const searchNodes = state.activeDatasetIndex?.tree || [];

  for (const row of wrap.querySelectorAll("table.frame tr")) {
    if (row.querySelector("table")) {
      continue;
    }

    const cells = Array.from(row.querySelectorAll("td"));
    if (cells.length < 2) {
      continue;
    }

    const sectionTitle = String(cells[0].textContent || "").replace(/\s+/g, " ").trim();
    const codeCell = cells[cells.length - 1];
    const code = normalizeSectionCode(codeCell.textContent || "");
    const targetPath = findPathForTocRow(searchNodes, code, sectionTitle);

    if (!targetPath) {
      continue;
    }

    row.classList.add("toc-clickable");
    row.dataset.targetPath = targetPath;
    row.tabIndex = 0;
    row.setAttribute("role", "link");
    row.setAttribute("aria-label", `Open ${sectionTitle || `section ${code}`}`);
  }
}

function shouldEnableDiagramPopup(img) {
  if (!img || img.dataset.popupEnhanced === "true") {
    return false;
  }
  if (img.classList.contains("xml-symbol-icon")) {
    return false;
  }

  const width = Number(img.getAttribute("width") || 0) || img.clientWidth || 0;
  const height = Number(img.getAttribute("height") || 0) || img.clientHeight || 0;
  const naturalWidth = img.naturalWidth || 0;
  const naturalHeight = img.naturalHeight || 0;

  const isLargeByClass = img.classList.contains("xml-graphic");
  const isLargeBySize = width >= 260 || height >= 180 || naturalWidth >= 520 || naturalHeight >= 360;
  return isLargeByClass || isLargeBySize;
}

const diagramLightboxState = {
  scale: 1,
  minScale: 0.5,
  maxScale: 5,
  baseWidth: 0,
};

function applyDiagramZoom(lightbox) {
  const image = lightbox.querySelector(".diagram-lightbox-image");
  const zoomValue = lightbox.querySelector(".diagram-lightbox-zoom-value");
  if (!image || !zoomValue) {
    return;
  }

  const sourceWidth = diagramLightboxState.baseWidth || image.naturalWidth || image.clientWidth || 800;
  const pixelWidth = Math.max(220, Math.round(sourceWidth * diagramLightboxState.scale));
  image.style.width = `${pixelWidth}px`;
  image.style.maxWidth = "none";
  zoomValue.textContent = `${Math.round(diagramLightboxState.scale * 100)}%`;
}

function updateDiagramZoom(lightbox, nextScale) {
  const clamped = Math.min(diagramLightboxState.maxScale, Math.max(diagramLightboxState.minScale, nextScale));
  if (clamped === diagramLightboxState.scale) {
    return;
  }
  diagramLightboxState.scale = clamped;
  applyDiagramZoom(lightbox);
}

function ensureDiagramLightbox() {
  let lightbox = document.getElementById("diagramLightbox");
  if (lightbox) {
    return lightbox;
  }

  lightbox = document.createElement("div");
  lightbox.id = "diagramLightbox";
  lightbox.className = "diagram-lightbox";
  lightbox.hidden = true;
  lightbox.innerHTML = `
    <div class="diagram-lightbox-panel" role="dialog" aria-modal="true" aria-label="Enlarged diagram view">
      <div class="diagram-lightbox-toolbar">
        <button type="button" class="diagram-lightbox-zoom-out" aria-label="Zoom out">−</button>
        <button type="button" class="diagram-lightbox-zoom-in" aria-label="Zoom in">+</button>
        <button type="button" class="diagram-lightbox-reset" aria-label="Reset zoom">100%</button>
        <span class="diagram-lightbox-zoom-value" aria-live="polite">100%</span>
        <button type="button" class="diagram-lightbox-close" aria-label="Close image dialog">×</button>
      </div>
      <div class="diagram-lightbox-viewport">
        <img class="diagram-lightbox-image" alt="" />
      </div>
    </div>
  `;

  const viewport = lightbox.querySelector(".diagram-lightbox-viewport");
  const image = lightbox.querySelector(".diagram-lightbox-image");
  const closeButton = lightbox.querySelector(".diagram-lightbox-close");
  const zoomIn = lightbox.querySelector(".diagram-lightbox-zoom-in");
  const zoomOut = lightbox.querySelector(".diagram-lightbox-zoom-out");
  const reset = lightbox.querySelector(".diagram-lightbox-reset");

  const close = () => {
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
  };

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      close();
    }
  });

  closeButton.addEventListener("click", close);
  zoomIn.addEventListener("click", () => updateDiagramZoom(lightbox, diagramLightboxState.scale * 1.2));
  zoomOut.addEventListener("click", () => updateDiagramZoom(lightbox, diagramLightboxState.scale / 1.2));
  reset.addEventListener("click", () => {
    diagramLightboxState.scale = 1;
    applyDiagramZoom(lightbox);
    viewport.scrollTop = 0;
    viewport.scrollLeft = 0;
  });

  viewport.addEventListener("wheel", (event) => {
    if (!event.ctrlKey && !event.metaKey) {
      return;
    }
    event.preventDefault();
    const factor = event.deltaY < 0 ? 1.1 : 1 / 1.1;
    updateDiagramZoom(lightbox, diagramLightboxState.scale * factor);
  }, { passive: false });

  image.addEventListener("load", () => {
    diagramLightboxState.baseWidth = image.naturalWidth || image.clientWidth || 800;
    applyDiagramZoom(lightbox);
  });

  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) {
      return;
    }
    if (event.key === "Escape") {
      close();
      return;
    }
    if (event.key === "+" || event.key === "=") {
      event.preventDefault();
      updateDiagramZoom(lightbox, diagramLightboxState.scale * 1.2);
      return;
    }
    if (event.key === "-") {
      event.preventDefault();
      updateDiagramZoom(lightbox, diagramLightboxState.scale / 1.2);
    }
  });

  document.body.appendChild(lightbox);
  return lightbox;
}

function openDiagramLightbox(src, alt) {
  if (!src) {
    return;
  }

  const lightbox = ensureDiagramLightbox();
  const image = lightbox.querySelector(".diagram-lightbox-image");
  const viewport = lightbox.querySelector(".diagram-lightbox-viewport");
  diagramLightboxState.scale = 1;
  diagramLightboxState.baseWidth = 0;
  image.src = src;
  image.alt = alt || "diagram";
  lightbox.hidden = false;
  document.body.classList.add("lightbox-open");
  viewport.scrollTop = 0;
  viewport.scrollLeft = 0;
}

function addDiagramPopupButtons(root) {
  for (const img of Array.from(root.querySelectorAll("img"))) {
    if (!shouldEnableDiagramPopup(img)) {
      continue;
    }

    img.dataset.popupEnhanced = "true";
    img.classList.add("diagram-popup-target");
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => openDiagramLightbox(img.currentSrc || img.src, img.alt));
  }
}

function scrollToXmlAnchor(refId) {
  const target = String(refId || "").trim();
  if (!target) {
    return false;
  }

  const escaped = window.CSS?.escape ? window.CSS.escape(target) : target.replace(/(["\\])/g, "\\$1");
  const anchor = els.viewer.querySelector(`[data-xml-id="${escaped}"]`);
  if (!anchor) {
    return false;
  }

  anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  anchor.classList.add("xml-anchor-highlight");
  window.setTimeout(() => anchor.classList.remove("xml-anchor-highlight"), 1200);
  return true;
}

function imageUrlCandidates(rawUrl, sourceUrl) {
  const primary = rewriteAssetUrl(rawUrl, sourceUrl);
  const candidates = [];
  const root = repoRootUrl();

  const raw = String(rawUrl || "");
  const fileName = raw
    .split(/[\\/]/)
    .pop();

  // Prefer shared icon root first to avoid noisy source-mirror and legacy fallbacks.
  if (fileName && /(^|\/)icon\//i.test(raw)) {
    candidates.push(`${root}icon/${fileName}`);
  }

  candidates.push(primary);

  // Foreword and similar legacy HTML pages sometimes reference images that only
  // exist under the old upload tree, not in source-mirror.
  try {
    const primaryUrl = new URL(primary);
    const sourceMirrorMarker = "/modern-manual-site/source-mirror/";
    const markerIndex = primaryUrl.pathname.indexOf(sourceMirrorMarker);
    if (markerIndex >= 0) {
      const relativeLegacyPath = primaryUrl.pathname.slice(markerIndex + sourceMirrorMarker.length);
      candidates.push(`${root}suzuki-manual/dcs.suzukiauto.co.za/Upload/Downloads/Service/ServiceManuals/${relativeLegacyPath}`);
    }
  } catch {
    // Ignore invalid candidate derivation and keep other candidates.
  }

  return candidates.filter((value, index, list) => value && list.indexOf(value) === index);
}

function applyImageFallback(img, candidates) {
  const unique = (candidates || []).filter(Boolean);
  if (!unique.length) {
    return;
  }

  const setCandidate = (index) => {
    if (index >= unique.length) {
      img.onerror = null;
      return;
    }
    img.onerror = () => setCandidate(index + 1);
    img.src = unique[index];
  };

  setCandidate(0);
}

function renderHtmlDocument(contentText, sourcePath) {
  const parser = new DOMParser();
  const sourceUrl = new URL(sourcePath, window.location.href).toString();
  const doc = parser.parseFromString(contentText, "text/html");

  doc.querySelectorAll("script, link, meta, title, base").forEach((node) => node.remove());

  for (const el of doc.querySelectorAll("[src], [href]")) {
    if (el.hasAttribute("src")) {
      const rawSrc = el.getAttribute("src") || "";
      if (el.tagName.toLowerCase() === "img") {
        applyImageFallback(el, imageUrlCandidates(rawSrc, sourceUrl));
      } else {
        el.setAttribute("src", rewriteAssetUrl(rawSrc, sourceUrl));
      }
    }
    if (el.hasAttribute("href")) {
      el.setAttribute("href", rewriteAssetUrl(el.getAttribute("href") || "", sourceUrl));
    }
  }

  const wrap = document.createElement("div");
  wrap.className = "html-view";
  wrap.append(...Array.from(doc.body.childNodes));
  wireHtmlTocRows(wrap);
  addDiagramPopupButtons(wrap);

  wrap.addEventListener("click", (event) => {
    const tocRow = event.target.closest("tr.toc-clickable[data-target-path]");
    if (tocRow && wrap.contains(tocRow) && !event.target.closest("a[href]")) {
      event.preventDefault();
      navigateToPath(tocRow.dataset.targetPath || "", { clearTreeFilter: true });
      return;
    }

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
    navigateToPath(normalizedPath);
  });

  wrap.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const tocRow = event.target.closest("tr.toc-clickable[data-target-path]");
    if (!tocRow || !wrap.contains(tocRow)) {
      return;
    }

    event.preventDefault();
    navigateToPath(tocRow.dataset.targetPath || "", { clearTreeFilter: true });
  });
  return wrap;
}

function graphicPathCandidates(graphicName) {
  const fileName = String(graphicName || "").split(/[\\/]/).pop() || "";
  const stem = fileName.replace(/\.[^.]+$/, "");
  const ext = fileName.includes(".") ? fileName.slice(fileName.lastIndexOf(".")).toLowerCase() : ".jpg";
  const prefixes = [stem.slice(0, 6), stem.slice(0, 4)].filter(Boolean);
  const preferredExt = ext === ".swf" ? ".jpg" : ext;
  const extensions = [preferredExt, ".jpg", ".jpeg", ".svg"].filter((value, index, arr) => arr.indexOf(value) === index);
  const candidates = [];
  const rootPrefix = repoRootUrl().replace(/\/$/, "");
  for (const prefix of prefixes) {
    for (const extension of extensions) {
      candidates.push(`${rootPrefix}/image/${prefix}/${stem}${extension}`);
    }
  }
  return candidates;
}

function symbolPathCandidates(symbolName) {
  const raw = String(symbolName || "").trim();
  if (!raw) {
    return [];
  }

  const stem = raw.split(/[\\/]/).pop() || raw;
  const rootPrefix = repoRootUrl().replace(/\/$/, "");
  const variants = [stem];
  if (!stem.toUpperCase().startsWith("MA")) {
    variants.push(`MA${stem}`);
  }

  const extensions = [".png", ".svg", ".gif", ".jpg", ".jpeg"];
  const candidates = [];
  for (const name of variants) {
    for (const extension of extensions) {
      candidates.push(`${rootPrefix}/symbol/${name}${extension}`);
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

function treeContainsPath(nodes, path) {
  return (nodes || []).some((node) => subtreeContainsPath(node, path));
}

function firstFilePath(nodes) {
  for (const node of nodes || []) {
    if (node.type === "file") {
      return node.path;
    }
    const nested = firstFilePath(node.children || []);
    if (nested) {
      return nested;
    }
  }
  return "";
}

function treeNodesByTab(tabId) {
  const trees = state.activeDatasetIndex?.trees;
  if (trees && Array.isArray(trees[tabId])) {
    return tabId === "bookmarks" ? treeWithManualLanding(trees[tabId]) : trees[tabId];
  }
  if (tabId === "bookmarks") {
    return treeWithManualLanding(state.activeDatasetIndex?.tree || []);
  }
  return [];
}

function firstFilePathForTab(tabId) {
  const map = state.activeDatasetIndex?.firstFilePathByTab;
  const fromMap = map?.[tabId];
  if (fromMap) {
    return fromMap;
  }
  return firstFilePath(treeNodesByTab(tabId));
}

function datasetAvailableTreeTabs() {
  const available = TREE_TABS.filter((tab) => treeNodesByTab(tab.id).length > 0);
  return available.length ? available : [TREE_TABS[0]];
}

function renderTreeTabs() {
  const tabs = state.availableTreeTabs;
  els.treeTabs.innerHTML = "";

  for (const tab of tabs) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "tree-tab";
    button.dataset.treeTab = tab.id;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(tab.id === state.activeTreeTab));
    button.textContent = tab.label;
    els.treeTabs.appendChild(button);
  }

  els.treeTabs.hidden = tabs.length < 2;
}

function switchTreeTab(tabId) {
  if (!tabId || tabId === state.activeTreeTab) {
    return;
  }
  if (!state.availableTreeTabs.some((tab) => tab.id === tabId)) {
    return;
  }

  saveTreeState();
  state.activeTreeTab = tabId;
  localStorage.setItem(activeTreeTabStorageKey, tabId);
  restoreTreeState();

  const nextPath = state.selectedPath && state.activeDatasetIndex?.files?.[state.selectedPath]
    ? state.selectedPath
    : firstFilePathForTab(tabId);
  state.selectedPath = nextPath || null;

  renderTreeTabs();
  renderTree();
  loadSelectedFile();
  saveTreeState();
}

function isLikelyModelLabel(label) {
  return /^[A-Z0-9][A-Z0-9-]{1,15}$/.test(String(label || ""));
}

function inferModelVariants(nodes) {
  const variants = new Set();

  function walk(list) {
    for (const node of list || []) {
      if (node.type !== "folder") {
        continue;
      }

      const childFolders = (node.children || []).filter((child) => child.type === "folder");
      if (node.label === "Models") {
        for (const child of childFolders) {
          if (isLikelyModelLabel(child.label)) {
            variants.add(child.label);
          }
        }
      } else {
        const candidateLabels = childFolders.map((child) => child.label).filter(isLikelyModelLabel);
        if (candidateLabels.length >= 2) {
          for (const label of candidateLabels) {
            variants.add(label);
          }
        }
      }

      walk(node.children || []);
    }
  }

  walk(nodes);
  return Array.from(variants).sort();
}

function datasetModelVariants() {
  const declared = state.activeDatasetIndex?.modelVariants || [];
  return declared.length ? declared : inferModelVariants(state.activeDatasetIndex?.tree || []);
}

function applyModelFilter(nodes, activeModel, modelVariants) {
  if (!activeModel) {
    return nodes;
  }

  const variantSet = new Set(modelVariants);

  function walk(list) {
    const result = [];

    for (const node of list || []) {
      if (node.type === "file") {
        result.push(node);
        continue;
      }

      if (node.label === "Models") {
        const selected = (node.children || []).find((child) => child.type === "folder" && child.label === activeModel);
        if (selected) {
          result.push(...walk(selected.children || []));
        }
        continue;
      }

      if (variantSet.has(node.label)) {
        if (node.label === activeModel) {
          result.push(...walk(node.children || []));
        }
        continue;
      }

      const children = walk(node.children || []);
      if (children.length || node.preserveEmpty) {
        result.push({ ...node, children });
      }
    }

    return result;
  }

  return walk(nodes);
}

function normalizeAllModelsTree(nodes, modelVariants) {
  const variantSet = new Set(modelVariants);

  function mergeChildren(children) {
    const merged = [];

    for (const child of children) {
      if (child.type !== "folder" || !variantSet.has(child.label)) {
        merged.push(child);
        continue;
      }

      const existing = merged.find((node) => node.type === "folder" && node.label === child.label);
      if (!existing) {
        merged.push(child);
        continue;
      }

      existing.children = mergeChildren([...(existing.children || []), ...(child.children || [])]);
    }

    return merged;
  }

  function walk(list) {
    const flattened = [];

    for (const node of list || []) {
      if (node.type === "file") {
        flattened.push(node);
        continue;
      }

      const children = walk(node.children || []);
      if (node.label === "Models") {
        flattened.push(...children);
        continue;
      }

      flattened.push({ ...node, children });
    }

    return mergeChildren(
      flattened.filter((node) => node.type === "file" || (node.children || []).length || node.preserveEmpty)
    );
  }

  return walk(nodes);
}

function removePlaceholderChapterFolders(nodes) {
  const isPlaceholderChapter = (label) => /^\s*a\s*-\s*chapter\s*a\s*$/i.test(String(label || ""));

  function walk(list) {
    const result = [];

    for (const node of list || []) {
      if (node.type === "file") {
        result.push(node);
        continue;
      }

      const children = walk(node.children || []);
      if (isPlaceholderChapter(node.label)) {
        result.push(...children);
        continue;
      }

      result.push({ ...node, children });
    }

    return result;
  }

  return walk(nodes);
}

function visibleTree() {
  const baseNodes = treeNodesByTab(state.activeTreeTab);
  const modelNodes = applyModelFilter(baseNodes, state.activeModel, state.modelVariants);
  const normalizedNodes = normalizeAllModelsTree(modelNodes, state.modelVariants);
  const cleanedNodes = removePlaceholderChapterFolders(normalizedNodes);
  return filterTree(cleanedNodes, state.treeFilter);
}

function syncVisibleSelection() {
  const nodes = visibleTree();
  if (!treeContainsPath(nodes, state.selectedPath)) {
    state.selectedPath = firstFilePath(nodes) || null;
  }
  return nodes;
}

function renderModelSelect() {
  const variants = state.modelVariants;
  els.modelSelect.innerHTML = "";

  if (variants.length < 2) {
    els.modelField.hidden = true;
    state.activeModel = "";
    return;
  }

  for (const variant of variants) {
    const option = document.createElement("option");
    option.value = variant;
    option.textContent = variant;
    els.modelSelect.appendChild(option);
  }

  els.modelSelect.value = state.activeModel;
  els.modelField.hidden = false;
}

function renderSubmodelSelect() {
  const submodels = state.activeDataset?.submodels || [];
  els.submodelSelect.innerHTML = "";

  if (!submodels.length) {
    els.submodelField.hidden = true;
    els.submodelSelect.disabled = true;
    return;
  }

  for (const submodel of submodels) {
    const option = document.createElement("option");
    option.value = submodel.id;
    option.textContent = submodel.name;
    els.submodelSelect.appendChild(option);
  }

  els.submodelSelect.value = state.activeSubmodel?.id || submodels[0].id;
  els.submodelField.hidden = false;
  els.submodelSelect.disabled = submodels.length < 2;
}

function buildTreeNodes(nodes, trail = "") {
  const frag = document.createDocumentFragment();

  for (const node of nodes || []) {
    if (node.type === "folder") {
      const folderKey = `${trail}/${node.label}`;
      const details = document.createElement("details");
      const childNodes = node.children || [];
      details.open = !!state.treeFilter || state.expandedFolders.has(folderKey) || subtreeContainsPath(node, state.selectedPath);
      details.dataset.folderKey = folderKey;
      details.addEventListener("toggle", () => {
        if (details.open) {
          state.expandedFolders.add(folderKey);
        } else {
          state.expandedFolders.delete(folderKey);
        }
        saveTreeState();
      });
      const summary = document.createElement("summary");
      summary.textContent = node.label;
      details.appendChild(summary);
      details.appendChild(buildTreeNodes(childNodes, folderKey));
      if (!childNodes.length) {
        const emptyHint = document.createElement("div");
        emptyHint.className = "tree-empty-hint";
        emptyHint.textContent = "No documents in this submodel.";
        details.appendChild(emptyHint);
      }
      frag.appendChild(details);
      continue;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("tree-leaf");
    const labelText = String(node.label || "").trim();
    const titleText = String(node.title || "").trim();
    const buttonText = titleText && normalizedLabel(titleText) !== normalizedLabel(labelText)
      ? `${labelText} - ${titleText}`
      : labelText;
    const icon = document.createElement("span");
    icon.className = "tree-leaf-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = node.isLanding ? "⌂" : "🗎";
    const text = document.createElement("span");
    text.className = "tree-leaf-text";
    text.textContent = buttonText;
    button.append(icon, text);
    button.dataset.path = node.path;
    if (node.path === state.selectedPath) {
      button.classList.add("active");
    }
    button.addEventListener("click", () => {
      state.selectedPath = node.path;
      loadSelectedFile();
      renderTree();
      saveTreeState();
    });
    frag.appendChild(button);
  }

  return frag;
}

function renderTree() {
  const nodes = syncVisibleSelection();
  state.activeTreeNodes = nodes;
  const previousScrollTop = els.tree.scrollTop;
  els.tree.innerHTML = "";
  els.tree.appendChild(buildTreeNodes(nodes));

  const scrollTop = state.pendingTreeScrollTop;
  state.pendingTreeScrollTop = null;
  const targetScrollTop = Number.isFinite(scrollTop) ? scrollTop : previousScrollTop;
  requestAnimationFrame(() => {
    els.tree.scrollTop = targetScrollTop;
  });
}

async function loadSelectedFile() {
  const fileLoadToken = ++state.fileLoadToken;

  if (!state.selectedPath) {
    renderViewerPlaceholder("Pick an XML node to render.");
    return;
  }

  if (isManualLandingPath(state.selectedPath)) {
    els.viewer.className = "viewer";
    els.viewer.innerHTML = "";
    els.viewer.appendChild(renderManualLanding());
    attachExpandButtonToViewer(currentPageHeadingText());
    return;
  }

  try {
    const res = await fetch(state.selectedPath, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} while loading ${state.selectedPath}`);
    }

    const contentText = await res.text();
    if (fileLoadToken !== state.fileLoadToken) {
      return;
    }

    const lowerPath = String(state.selectedPath || "").toLowerCase();

    els.viewer.className = "viewer";
    els.viewer.innerHTML = "";

    if (lowerPath.endsWith(".htm") || lowerPath.endsWith(".html")) {
      els.viewer.appendChild(renderHtmlDocument(contentText, state.selectedPath));
    } else {
      const doc = parseXml(contentText);
      const selectedDir = state.selectedPath.slice(0, state.selectedPath.lastIndexOf("/") + 1);
      const rendered = renderXmlDocument(doc, {
        resolveRef: (refId) => state.refToPath.get(refId) || `${selectedDir}${refId}.xml`,
        resolveRefLabel: (refId) => state.refToTitle.get(refId) || refId,
        resolveGraphic: (graphicName) => graphicPathCandidates(graphicName),
        resolveSymbol: (symbolName) => symbolPathCandidates(symbolName),
        onNavigateInternal: (refId) => scrollToXmlAnchor(refId),
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
      addDiagramPopupButtons(els.viewer);
    }

    attachExpandButtonToViewer(currentPageHeadingText());
  } catch (err) {
    if (fileLoadToken !== state.fileLoadToken) {
      return;
    }
    renderViewerPlaceholder(err.message, true);
  }
}

async function loadDatasetIndex(submodel) {
  if (!submodel) {
    return;
  }

  state.activeSubmodel = submodel;
  state.activeDatasetIndex = null;
  state.selectedPath = null;
  state.expandedFolders = new Set();
  state.refToPath = new Map();
  state.refToTitle = new Map();
  state.modelVariants = [];
  state.activeModel = "";
  state.availableTreeTabs = [];
  clearSearchUi();
  renderViewerPlaceholder("Loading dataset index...");
  const datasetLoadToken = ++state.datasetLoadToken;

  try {
    const res = await fetch(submodel.indexUrl);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} while loading ${submodel.indexUrl}`);
    }
    const datasetIndex = await res.json();
    if (datasetLoadToken !== state.datasetLoadToken) {
      return;
    }

    state.activeDatasetIndex = datasetIndex;
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

    state.modelVariants = datasetModelVariants();
    state.availableTreeTabs = datasetAvailableTreeTabs();
    state.searchIndex = buildSearchIndex(state.activeDatasetIndex);
    
    // Restore the previously active tab, or default to the first available tab
    const savedTreeTab = localStorage.getItem(activeTreeTabStorageKey);
    const defaultTab = state.availableTreeTabs[0]?.id || "bookmarks";
    state.activeTreeTab = (savedTreeTab && state.availableTreeTabs.some((tab) => tab.id === savedTreeTab)) 
      ? savedTreeTab 
      : defaultTab;
    
    const savedModel = localStorage.getItem(modelStorageKey(`${state.activeDataset.id}:${submodel.id}`)) || "";
    state.activeModel = state.modelVariants.includes(savedModel) ? savedModel : (state.modelVariants[0] || "");
    renderModelSelect();
    renderTreeTabs();
    restoreTreeState();
    state.selectedPath = state.selectedPath || firstFilePathForTab(state.activeTreeTab) || state.activeDatasetIndex?.firstFilePath || null;
    renderTree();
    await loadSelectedFile();
    if (datasetLoadToken !== state.datasetLoadToken) {
      return;
    }
    saveTreeState();
  } catch (err) {
    if (datasetLoadToken !== state.datasetLoadToken) {
      return;
    }
    renderViewerPlaceholder(err.message, true);
  }
}

async function loadDataset(datasetId) {
  const dataset = state.datasets.find((item) => item.id === datasetId);
  if (!dataset) {
    return;
  }

  state.activeDataset = dataset;
  localStorage.setItem(datasetStorageKey, dataset.id);
  const submodels = dataset.submodels || [];
  const savedSubmodelId = localStorage.getItem(submodelStorageKey(dataset.id)) || "";
  const selectedSubmodel = submodels.find((item) => item.id === savedSubmodelId) || submodels[0] || null;
  state.activeSubmodel = selectedSubmodel;
  renderSubmodelSelect();
  await loadDatasetIndex(selectedSubmodel);
}

async function bootstrap() {
  setupTheme();
  initializeColumnResizing();

  const contentExpanded = localStorage.getItem(sidebarCollapsedStorageKey) === "1";
  const savedSidebarWidth = Number.parseInt(localStorage.getItem(sidebarWidthStorageKey) || "", 10);
  const savedSidebarHeight = Number.parseInt(localStorage.getItem(sidebarHeightStorageKey) || "", 10);
  if (Number.isFinite(savedSidebarWidth)) {
    applySidebarWidth(savedSidebarWidth, false);
  }
  if (Number.isFinite(savedSidebarHeight)) {
    applySidebarHeight(savedSidebarHeight, false);
  }
  setContentExpanded(contentExpanded);
  setupSidebarResizer();

  els.themeToggle.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });

  els.sidebarToggle?.addEventListener("click", () => {
    const nextExpanded = !els.layout?.classList.contains("content-expanded");
    setContentExpanded(nextExpanded);
  });

  els.tree.addEventListener("scroll", () => {
    saveTreeState();
  });

  window.addEventListener("beforeunload", () => {
    saveTreeState();
  });

  els.treeFilter.addEventListener("input", (evt) => {
    state.treeFilter = evt.target.value.trim();
    renderTree();
  });

  els.treeTabs.addEventListener("click", (evt) => {
    const button = evt.target.closest("button[data-tree-tab]");
    if (!button) {
      return;
    }
    switchTreeTab(button.dataset.treeTab || "");
  });

  els.globalSearch?.addEventListener("input", (evt) => {
    updateSearch(evt.target.value);
  });

  els.globalSearch?.addEventListener("focus", () => {
    if (state.searchQuery) {
      renderSearchResults();
    }
  });

  els.globalSearch?.addEventListener("keydown", (evt) => {
    if (evt.key === "ArrowDown") {
      evt.preventDefault();
      setActiveSearchResultIndex(state.activeSearchResultIndex + 1);
      return;
    }

    if (evt.key === "ArrowUp") {
      evt.preventDefault();
      setActiveSearchResultIndex(state.activeSearchResultIndex - 1);
      return;
    }

    if (evt.key === "Enter") {
      if (openCurrentSearchSelection()) {
        evt.preventDefault();
      }
      return;
    }

    if (evt.key === "Escape") {
      hideSearchResults();
      return;
    }
  });

  els.globalSearch?.addEventListener("keyup", (evt) => {
    if (evt.key !== "Enter") {
      return;
    }

    if (openCurrentSearchSelection()) {
      evt.preventDefault();
    }
  });

  els.globalSearch?.addEventListener("search", () => {
    openCurrentSearchSelection();
  });

  document.addEventListener("keydown", (evt) => {
    if (evt.key !== "Enter") {
      return;
    }
    if (document.activeElement !== els.globalSearch) {
      return;
    }

    if (openCurrentSearchSelection()) {
      evt.preventDefault();
      evt.stopPropagation();
    }
  }, true);

  els.searchResults?.addEventListener("click", (evt) => {
    const button = evt.target.closest("button[data-search-index]");
    if (!button) {
      return;
    }

    const index = Number.parseInt(button.dataset.searchIndex || "", 10);
    if (!Number.isFinite(index) || !state.searchResults[index]) {
      return;
    }

    openSearchResult(state.searchResults[index]);
  });

  document.addEventListener("pointerdown", (evt) => {
    const target = evt.target;
    if (!(target instanceof Element)) {
      return;
    }

    if (target.closest(".topbar-search")) {
      return;
    }

    hideSearchResults();
  });

  els.modelSelect.addEventListener("change", (evt) => {
    saveTreeState();
    state.activeModel = evt.target.value;
    if (state.activeDataset?.id && state.activeSubmodel?.id) {
      localStorage.setItem(modelStorageKey(`${state.activeDataset.id}:${state.activeSubmodel.id}`), state.activeModel);
    }
    restoreTreeState();
    renderTree();
    loadSelectedFile();
    saveTreeState();
  });

  els.submodelSelect.addEventListener("change", (evt) => {
    const submodel = (state.activeDataset?.submodels || []).find((item) => item.id === evt.target.value) || null;
    if (state.activeDataset?.id && submodel?.id) {
      localStorage.setItem(submodelStorageKey(state.activeDataset.id), submodel.id);
    }
    loadDatasetIndex(submodel);
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

  const savedDatasetId = localStorage.getItem(datasetStorageKey) || "";
  const initialDataset = state.datasets.find((item) => item.id === savedDatasetId) || state.datasets[0];
  els.datasetSelect.value = initialDataset.id;
  await loadDataset(initialDataset.id);
}

bootstrap().catch((err) => {
  renderViewerPlaceholder(err.message, true);
});
// trigger redeploy
