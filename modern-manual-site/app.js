import { filterTree } from "./lib/tree.js?v=3";
import { parseXml, renderXmlDocument } from "./lib/xml-utils.js?v=14";

const els = {
  layout: document.querySelector(".layout"),
  sidebar: document.querySelector(".sidebar"),
  sidebarMenu: document.querySelector(".sidebar-menu"),
  menuToggle: document.getElementById("menuToggle"),
  sidebarPin: document.getElementById("sidebarPin"),
  sidebarOverlay: document.getElementById("sidebarOverlay"),
  vehicleToggle: document.getElementById("vehicleToggle"),
  vehicleCode: document.getElementById("vehicleCode"),
  vehicleDropdown: document.getElementById("vehicleDropdown"),
  vehicleList: document.getElementById("vehicleList"),
  modelField: document.getElementById("modelField"),
  modelSelect: document.getElementById("modelSelect"),
  viewer: document.getElementById("viewer"),
  breadcrumb: document.getElementById("breadcrumb"),
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
  sidebarPinned: false,
  breadcrumbTrail: [], // Array of {label, path} objects
  pendingUrlState: null,
};

const TREE_TABS = [
  { id: "bookmarks", label: "Bookmarks" },
  { id: "dtc", label: "DTC" },
  { id: "symptoms", label: "Symptoms" },
  { id: "torque", label: "Tightening Torque" },
];

const SEARCH_RESULT_LIMIT = 24;
const SHARE_ICON_SVG = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7a2.98 2.98 0 0 0 0-1.39l7.02-4.11A2.99 2.99 0 1 0 15 5a3 3 0 0 0 .04.49L8.02 9.6a3 3 0 1 0 0 4.8l7.02 4.11c-.03.16-.04.32-.04.49a3 3 0 1 0 3-2.92Z" fill="currentColor"/>
  </svg>`;

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
const sidebarPinnedStorageKey = "manual-next-sidebar-pinned";

function activeTreeTabScopedStorageKey(datasetId, submodelId, model) {
  return `manual-next-active-tree-tab:${datasetId}:${submodelId}:${model || "default"}`;
}

function activeTreeTabScopedKey() {
  if (!state.activeDataset?.id || !state.activeSubmodel?.id) {
    return "";
  }
  return activeTreeTabScopedStorageKey(
    state.activeDataset.id,
    state.activeSubmodel.id,
    state.activeModel || "",
  );
}

function saveActiveTreeTab(tabId) {
  if (!tabId) {
    return;
  }

  localStorage.setItem(activeTreeTabStorageKey, tabId);
  const scopedKey = activeTreeTabScopedKey();
  if (scopedKey) {
    localStorage.setItem(scopedKey, tabId);
  }
}

function restoreActiveTreeTab(availableTabs, fallbackTab) {
  const scopedKey = activeTreeTabScopedKey();
  const scopedTab = scopedKey ? (localStorage.getItem(scopedKey) || "") : "";
  const globalTab = localStorage.getItem(activeTreeTabStorageKey) || "";
  const candidate = scopedTab || globalTab;
  if (candidate && availableTabs.some((tab) => tab.id === candidate)) {
    return candidate;
  }
  return fallbackTab;
}

function lastVisitedPathStorageKey(datasetId, submodelId, model) {
  return `manual-next-last-path:${datasetId}:${submodelId}:${model || "default"}`;
}

function activeLastVisitedPathKey() {
  if (!state.activeDataset?.id || !state.activeSubmodel?.id) {
    return "";
  }
  return lastVisitedPathStorageKey(
    state.activeDataset.id,
    state.activeSubmodel.id,
    state.activeModel || "",
  );
}

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

function syncTopbarOffset() {
  const topbar = document.querySelector(".topbar");
  if (!(topbar instanceof HTMLElement)) {
    document.documentElement.style.setProperty("--topbar-offset", "0px");
    return;
  }

  const styles = getComputedStyle(topbar);
  const marginBottom = Number.parseFloat(styles.marginBottom || "0") || 0;
  const offset = Math.ceil(topbar.getBoundingClientRect().height + marginBottom);
  document.documentElement.style.setProperty("--topbar-offset", `${offset}px`);
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
    syncTopbarOffset();
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


  });
}

function setContentExpanded(expanded) {
  if (els.layout) {
    els.layout.classList.toggle("content-expanded", expanded);
  }
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
    treeScrollTop: 0,  // No longer tracking scroll position with menu structure
  };

  localStorage.setItem(key, JSON.stringify(payload));

  const lastPathKey = activeLastVisitedPathKey();
  if (lastPathKey && payload.selectedPath) {
    localStorage.setItem(lastPathKey, payload.selectedPath);
  }
}

function restoreTreeState() {
  state.expandedFolders = new Set();
  state.pendingTreeScrollTop = null;
  const lastPathKey = activeLastVisitedPathKey();
  const fallbackSelectedPath = lastPathKey ? (localStorage.getItem(lastPathKey) || "") : "";

  const key = activeTreeStateKey();
  if (!key) {
    if (fallbackSelectedPath) {
      state.selectedPath = fallbackSelectedPath;
    }
    return;
  }

  const raw = localStorage.getItem(key);
  if (!raw) {
    if (fallbackSelectedPath) {
      state.selectedPath = fallbackSelectedPath;
    }
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
    if (fallbackSelectedPath) {
      state.selectedPath = fallbackSelectedPath;
    }
  }

  if (!state.selectedPath && fallbackSelectedPath) {
    state.selectedPath = fallbackSelectedPath;
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

function isTorqueFile(path, meta) {
  const title = String(meta?.title || "");
  const fileName = String(path || "").split("/").pop() || "";
  const haystack = `${title} ${fileName} ${path || ""}`.toLowerCase();
  return /tightening[\s_-]*torque/.test(haystack);
}

function collectTorquePaths(indexData) {
  const files = indexData?.files || {};
  const paths = new Set();
  for (const [path, meta] of Object.entries(files)) {
    if (isTorqueFile(path, meta)) {
      paths.add(path);
    }
  }
  return paths;
}

function buildFileAncestorMap(nodes, trail = [], map = new Map()) {
  for (const node of nodes || []) {
    if (node.type === "file") {
      if (node.path && !map.has(node.path)) {
        map.set(node.path, trail.slice());
      }
      continue;
    }
    buildFileAncestorMap(node.children || [], [...trail, String(node.label || "")], map);
  }
  return map;
}

function normalizeSectionLabel(label) {
  return String(label || "")
    .replace(/^\s*\d+[A-Z]?\s*-\s*/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function torqueLabelParts(ancestors) {
  const generic = new Set([
    "specification",
    "specifications",
    "tightening torque",
    "tightening torque specifications",
  ]);

  return (ancestors || [])
    .map(normalizeSectionLabel)
    .filter((label) => label && !generic.has(label.toLowerCase()));
}

function buildTorqueReferenceLabel(parts, depth, fallbackTitle) {
  if (!parts.length) {
    return normalizeSectionLabel(fallbackTitle) || "Tightening Torque";
  }

  const clampedDepth = Math.max(1, Math.min(depth, parts.length));
  return parts.slice(0, clampedDepth).join(" - ");
}

function disambiguateTorqueLabels(entries) {
  const depthByPath = new Map();
  for (const entry of entries) {
    const initialDepth = entry.parts.length ? Math.min(2, entry.parts.length) : 1;
    depthByPath.set(entry.path, initialDepth);
  }

  for (let i = 0; i < 10; i += 1) {
    const groups = new Map();

    for (const entry of entries) {
      const depth = depthByPath.get(entry.path) || 1;
      const label = buildTorqueReferenceLabel(entry.parts, depth, entry.fallbackTitle);
      if (!groups.has(label)) {
        groups.set(label, []);
      }
      groups.get(label).push(entry);
    }

    const duplicateGroups = Array.from(groups.values()).filter((group) => group.length > 1);
    if (!duplicateGroups.length) {
      break;
    }

    let expanded = false;
    for (const group of duplicateGroups) {
      for (const entry of group) {
        const currentDepth = depthByPath.get(entry.path) || 1;
        if (currentDepth < entry.parts.length) {
          depthByPath.set(entry.path, currentDepth + 1);
          expanded = true;
        }
      }
    }

    if (!expanded) {
      break;
    }
  }

  const labelsByPath = new Map();
  const groups = new Map();
  for (const entry of entries) {
    const depth = depthByPath.get(entry.path) || 1;
    const label = buildTorqueReferenceLabel(entry.parts, depth, entry.fallbackTitle);
    labelsByPath.set(entry.path, label);
    if (!groups.has(label)) {
      groups.set(label, []);
    }
    groups.get(label).push(entry);
  }

  for (const [label, group] of groups.entries()) {
    if (group.length <= 1) {
      continue;
    }

    for (const entry of group) {
      const fileName = String(entry.path || "").split("/").pop() || "";
      const slug = fileName.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").trim();
      const suffix = normalizeSectionLabel(slug) || fileName || entry.path;
      labelsByPath.set(entry.path, `${label} (${suffix})`);
    }
  }

  return labelsByPath;
}

function torqueEntryModels(parts, fallbackTitle, modelVariants) {
  const variantSet = new Set((modelVariants || []).map((value) => String(value || "").toUpperCase()));
  if (!variantSet.size) {
    return new Set();
  }

  const matches = new Set();
  const tokenPattern = /\b[A-Z][A-Z0-9]{2,}\b/g;
  const tokenSources = [...(parts || []), String(fallbackTitle || "")];

  for (const source of tokenSources) {
    const tokens = String(source || "").toUpperCase().match(tokenPattern) || [];
    for (const token of tokens) {
      if (variantSet.has(token)) {
        matches.add(token);
      }
    }
  }

  return matches;
}

function filterTreeByPaths(nodes, allowedPaths) {
  const filtered = [];

  for (const node of nodes || []) {
    if (node.type === "file") {
      if (allowedPaths.has(node.path)) {
        filtered.push({ ...node });
      }
      continue;
    }

    const children = filterTreeByPaths(node.children || [], allowedPaths);
    if (children.length) {
      filtered.push({ ...node, children });
    }
  }

  return filtered;
}

function buildTorqueTree(indexData, activeModel = "", modelVariants = []) {
  const torquePaths = collectTorquePaths(indexData);
  if (!torquePaths.size) {
    return [];
  }

  const sourceTree = indexData?.trees?.bookmarks || indexData?.tree || [];
  const ancestorMap = buildFileAncestorMap(sourceTree);
  const files = indexData?.files || {};
  const torqueEntries = [];

  for (const path of torquePaths) {
    const meta = files[path] || {};
    const ancestors = ancestorMap.get(path) || [];
    const parts = torqueLabelParts(ancestors);
    torqueEntries.push({
      path,
      parts,
      fallbackTitle: meta.title || path,
      models: torqueEntryModels(parts, meta.title || path, modelVariants),
    });
  }

  const filteredEntries = activeModel
    ? torqueEntries.filter((entry) => !entry.models.size || entry.models.has(activeModel))
    : torqueEntries;

  const labelsByPath = disambiguateTorqueLabels(filteredEntries);

  const groupMap = new Map();
  for (const entry of filteredEntries) {
    const path = entry.path;
    const fullLabel = labelsByPath.get(path) || "Tightening Torque";
    const groupLabel = entry.parts[0] || "Other";
    const groupPrefix = `${groupLabel} - `;
    const leafLabel = fullLabel.startsWith(groupPrefix)
      ? fullLabel.slice(groupPrefix.length)
      : fullLabel;

    if (!groupMap.has(groupLabel)) {
      groupMap.set(groupLabel, []);
    }

    groupMap.get(groupLabel).push({
      type: "file",
      path,
      label: leafLabel,
      title: leafLabel,
    });
  }

  const groups = [];
  for (const [groupLabel, children] of groupMap.entries()) {
    children.sort((a, b) => a.label.localeCompare(b.label));
    groups.push({
      type: "folder",
      label: groupLabel,
      children,
    });
  }

  groups.sort((a, b) => a.label.localeCompare(b.label));
  return groups;
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

function buildSearchIndex(indexData, modelVariants = []) {
  const files = indexData?.files || {};
  const pathTab = searchPathTabMap(indexData);
  const sourceTree = indexData?.trees?.bookmarks || indexData?.tree || [];
  const ancestorMap = buildFileAncestorMap(sourceTree);
  const variantSet = new Set((modelVariants || []).map((value) => String(value || "").toUpperCase()));
  const entries = [];

  for (const [path, meta] of Object.entries(files)) {
    const title = String(meta?.title || "").trim();
    const fileName = path.split("/").pop() || path;
    const nameNoExt = fileName.replace(/\.[^.]+$/, "");
    const isTorque = isTorqueFile(path, meta);
    const tabId = isTorque ? "torque" : (pathTab.get(path) || "bookmarks");
    const ancestors = ancestorMap.get(path) || [];
    const models = new Set(
      ancestors
        .map((label) => String(label || "").toUpperCase())
        .filter((label) => variantSet.has(label)),
    );
    const searchable = `${title} ${nameNoExt} ${path} ${isTorque ? "tightening torque torque specifications" : ""}`.toLowerCase();
    entries.push({
      path,
      title: title || nameNoExt || path,
      tabId,
      models,
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
    .filter((entry) => {
      if (!entry.searchable.includes(q)) {
        return false;
      }
      if (!state.activeModel) {
        return true;
      }
      return !entry.models?.size || entry.models.has(state.activeModel);
    })
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
    const escapedQuery = htmlEscape(state.searchQuery);
    const modelHint = state.activeModel ? ` for ${htmlEscape(state.activeModel)}` : "";
    els.searchResults.innerHTML = `
      <div class="search-results-empty">
        <strong>No matches for "${escapedQuery}".</strong>
        <span>Try a broader term or switch the model variant${modelHint ? `${modelHint}` : ""}.</span>
      </div>
    `;
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
  els.themeToggle.innerHTML = `<span class="theme-icon" aria-hidden="true">${icon}</span><span class="theme-label">${label}</span>`;
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

function renderViewerPlaceholder(message, config = {}) {
  const options = typeof config === "boolean" ? { isError: config } : config;
  const isError = !!options.isError;
  const normalizedMessage = String(message || "").trim();
  let title = String(options.title || "").trim();

  if (!title) {
    if (isError) {
      title = "Unable to load content";
    } else if (/loading/i.test(normalizedMessage)) {
      title = "Loading manuals";
    } else if (/pick an xml node/i.test(normalizedMessage)) {
      title = "Choose a document";
    } else if (/no datasets configured/i.test(normalizedMessage)) {
      title = "No manual datasets found";
    } else {
      title = "Manual viewer";
    }
  }

  const detail = String(options.detail || "").trim();

  els.viewer.className = isError ? "viewer error viewer-placeholder" : "viewer empty viewer-placeholder";
  els.viewer.innerHTML = `
    <section class="viewer-placeholder-card">
      <h3 class="viewer-placeholder-title">${htmlEscape(title)}</h3>
      <p class="viewer-placeholder-message">${htmlEscape(normalizedMessage)}</p>
      ${detail ? `<p class="viewer-placeholder-detail">${htmlEscape(detail)}</p>` : ""}
    </section>
  `;
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

function isTorqueSelection() {
  if (!state.selectedPath) {
    return false;
  }

  const fileMeta = state.activeDatasetIndex?.files?.[state.selectedPath];
  return state.activeTreeTab === "torque" && isTorqueFile(state.selectedPath, fileMeta);
}

function currentTorqueSectionHeadingText() {
  if (!isTorqueSelection()) {
    return "";
  }

  const trail = state.breadcrumbTrail || [];
  const currentLabel = String(trail[trail.length - 1]?.label || "").trim();
  return currentLabel ? `🔩 ${currentLabel}` : "🔩 Tightening Torque";
}

function currentViewerHeadingText() {
  return currentTorqueSectionHeadingText() || currentPageHeadingText();
}

function currentViewerTrailText() {
  if (!state.selectedPath || isManualLandingPath(state.selectedPath)) {
    return "";
  }

  return (state.breadcrumbTrail || [])
    .map((item) => String(item.label || "").trim())
    .filter(Boolean)
    .join(" › ");
}

function parseSharedViewFromUrl() {
  const params = new URLSearchParams(window.location.search || "");
  const datasetId = (params.get("dataset") || "").trim();
  const submodelId = (params.get("submodel") || "").trim();
  const model = (params.get("model") || "").trim();
  const tabId = (params.get("tab") || "").trim();
  const path = (params.get("path") || "").trim();

  if (!datasetId && !submodelId && !model && !tabId && !path) {
    return null;
  }

  return { datasetId, submodelId, model, tabId, path };
}

function currentViewerShareUrl() {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";

  if (state.activeDataset?.id) {
    url.searchParams.set("dataset", state.activeDataset.id);
  }
  if (state.activeSubmodel?.id) {
    url.searchParams.set("submodel", state.activeSubmodel.id);
  }
  if (state.activeModel) {
    url.searchParams.set("model", state.activeModel);
  }
  if (state.activeTreeTab) {
    url.searchParams.set("tab", state.activeTreeTab);
  }
  if (state.selectedPath && !isManualLandingPath(state.selectedPath)) {
    url.searchParams.set("path", state.selectedPath);
  }

  return url.toString();
}

function sidebarPreviewText(trail, label, renderTabId = "") {
  const parts = String(trail || "")
    .split("/")
    .map((part) => String(part || "").trim())
    .filter(Boolean);
  const currentLabel = String(label || "").trim();
  if (currentLabel) {
    parts.push(currentLabel);
  }

  const preview = parts.join(" > ");
  if (!preview) {
    return "";
  }

  return renderTabId && renderTabId !== "bookmarks"
    ? `${tabLabelForId(renderTabId)} > ${preview}`
    : preview;
}

async function copyTextToClipboard(text) {
  const value = String(text || "").trim();
  if (!value) {
    return false;
  }

  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return true;
  }

  const input = document.createElement("textarea");
  input.value = value;
  input.setAttribute("readonly", "readonly");
  input.style.position = "absolute";
  input.style.left = "-9999px";
  document.body.appendChild(input);
  input.select();
  const succeeded = document.execCommand("copy");
  document.body.removeChild(input);
  return succeeded;
}

function setCopyButtonFeedback(button, copied) {
  if (!button) {
    return;
  }

  const originalLabel = button.dataset.label || button.textContent || "Share";
  button.dataset.label = originalLabel;
  button.textContent = copied ? "Copied" : "Failed";
  button.disabled = true;
  window.setTimeout(() => {
    button.innerHTML = SHARE_ICON_SVG;
    button.disabled = false;
  }, copied ? 1200 : 1600);
}

function currentViewerShareText() {
  const title = currentViewerHeadingText();
  const trail = currentViewerTrailText();
  const sourcePath = String(state.selectedPath || "").trim();
  return [title, trail, sourcePath].filter(Boolean).join("\n");
}

async function shareCurrentViewerPage() {
  const title = currentViewerHeadingText();
  const text = currentViewerShareText();
  const url = currentViewerShareUrl();

  if (navigator.share) {
    await navigator.share({ title, text, url });
    return true;
  }

  return copyTextToClipboard(text || url);
}

function createViewerStickyHeader() {
  const title = currentViewerHeadingText();
  if (!title) {
    return null;
  }

  const wrap = document.createElement("details");
  wrap.className = "viewer-sticky-header";

  const summary = document.createElement("summary");
  summary.className = "viewer-sticky-summary";
  const heading = document.createElement("h2");
  heading.className = "viewer-sticky-title";
  heading.textContent = title;
  summary.appendChild(heading);

  const copyButton = document.createElement("button");
  copyButton.type = "button";
  copyButton.className = "viewer-context-copy";
  copyButton.innerHTML = SHARE_ICON_SVG;
  copyButton.dataset.label = "Share";
  copyButton.setAttribute("aria-label", "Share current page");
  copyButton.setAttribute("title", "Share current page");
  copyButton.addEventListener("click", async (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      const shared = await shareCurrentViewerPage();
      setCopyButtonFeedback(copyButton, shared);
    } catch {
      setCopyButtonFeedback(copyButton, false);
    }
  });
  summary.appendChild(copyButton);
  wrap.appendChild(summary);

  const trailText = currentViewerTrailText();
  if (trailText) {
    const meta = document.createElement("div");
    meta.className = "viewer-sticky-meta";
    meta.textContent = trailText;
    wrap.appendChild(meta);
  }
  return wrap;
}

function hideDuplicatePrimaryTitle(renderedContent) {
  if (!renderedContent) {
    return;
  }

  const title = currentViewerHeadingText();
  const primaryTitle = renderedContent.querySelector(":scope > .xml-title");
  if (!primaryTitle || normalizedLabel(primaryTitle.textContent) !== normalizedLabel(title)) {
    return;
  }

  primaryTitle.classList.add("viewer-inline-title-hidden");
}

function applyViewerContext(renderedContent = null) {
  const classes = ["viewer"];
  if (isTorqueSelection()) {
    classes.push("viewer-torque");
  }
  els.viewer.className = classes.join(" ");

  if (!renderedContent) {
    return;
  }

  const headingText = currentViewerHeadingText();
  if (!headingText) {
    return;
  }

  const heading = renderedContent.querySelector(".xml-title");
  if (heading) {
    heading.textContent = headingText;
  }

  hideDuplicatePrimaryTitle(renderedContent);
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

  // Tree filter removed in favor of global search
  // if (options.clearTreeFilter) {
  //   state.treeFilter = "";
  // }

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

function updateScrollableTableHints() {
  const wrappers = Array.from(document.querySelectorAll(".xml-table-wrap"));
  for (const wrap of wrappers) {
    if (!(wrap instanceof HTMLElement)) {
      continue;
    }

    const maxScroll = wrap.scrollWidth - wrap.clientWidth;
    const canScroll = maxScroll > 6;
    const atStart = wrap.scrollLeft <= 2;
    const atEnd = wrap.scrollLeft >= maxScroll - 2;

    wrap.classList.toggle("table-scrollable", canScroll);
    wrap.classList.toggle("table-at-start", canScroll && atStart);
    wrap.classList.toggle("table-at-end", canScroll && atEnd);
  }
}

function wireScrollableTableHints(root = document) {
  const wrappers = Array.from(root.querySelectorAll?.(".xml-table-wrap") || []);
  for (const wrap of wrappers) {
    if (!(wrap instanceof HTMLElement) || wrap.dataset.scrollHintBound === "1") {
      continue;
    }

    wrap.dataset.scrollHintBound = "1";
    wrap.addEventListener("scroll", () => updateScrollableTableHints(), { passive: true });
  }

  updateScrollableTableHints();
}

function ensureMobileQuickActions() {
  let wrap = document.querySelector(".mobile-quick-actions");
  if (!(wrap instanceof HTMLElement)) {
    wrap = document.createElement("div");
    wrap.className = "mobile-quick-actions";

    const topButton = document.createElement("button");
    topButton.type = "button";
    topButton.className = "mobile-quick-action";
    topButton.setAttribute("aria-label", "Scroll to top");
    topButton.setAttribute("title", "Top");
    topButton.textContent = "↑";
    topButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    wrap.append(topButton);
    document.body.appendChild(wrap);
  }

  const isMobile = window.matchMedia("(max-width: 980px)").matches;
  wrap.hidden = !isMobile;
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

function buildBreadcrumbTrailForNode(nodes, path, trail = []) {
  for (const node of nodes || []) {
    if (node.type === "file" && node.path === path) {
      // Found the file - return the complete trail with this file
      return [...trail, { label: node.label || node.title || node.path, path: node.path }];
    }
    if (node.type === "folder") {
      const nodeTrail = [...trail, { label: node.label, path: null }];
      const result = buildBreadcrumbTrailForNode(node.children || [], path, nodeTrail);
      if (result) {
        return result;
      }
    }
  }
  return null;
}

function updateBreadcrumbTrail() {
  if (!state.selectedPath || isManualLandingPath(state.selectedPath)) {
    state.breadcrumbTrail = [];
    return;
  }
  
  const nodes = visibleTree();
  const trail = buildBreadcrumbTrailForNode(nodes, state.selectedPath) || [];
  state.breadcrumbTrail = trail;
}


function treeNodesByTab(tabId) {
  const trees = state.activeDatasetIndex?.trees;
  if (tabId === "torque") {
    return buildTorqueTree(state.activeDatasetIndex, state.activeModel, state.modelVariants);
  }
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
  // Deprecated: kept for compatibility but now calls renderMenuStructure
  renderMenuStructure();
}

function renderVehicleDropdown() {
  if (!els.vehicleList) return;
  
  els.vehicleList.innerHTML = "";
  
  for (const dataset of state.datasets) {
    const submodels = dataset.submodels || [];
    for (const submodel of submodels) {
      const button = document.createElement("button");
      button.className = "vehicle-option";
      if (state.activeSubmodel?.id === submodel.id && state.activeDataset?.id === dataset.id) {
        button.classList.add("active");
      }
      
      const nameEl = document.createElement("span");
      nameEl.className = "vehicle-option-name";
      nameEl.textContent = dataset.name;
      
      const codeEl = document.createElement("span");
      codeEl.className = "vehicle-option-code";
      codeEl.textContent = submodel.name;
      
      button.appendChild(nameEl);
      button.appendChild(codeEl);
      
      button.addEventListener("click", async () => {
        localStorage.setItem(datasetStorageKey, dataset.id);
        localStorage.setItem(submodelStorageKey(dataset.id), submodel.id);
        state.activeDataset = dataset;
        state.selectedPath = null;
        state.expandedFolders = new Set();
        state.refToPath = new Map();
        state.refToTitle = new Map();
        state.modelVariants = [];
        state.activeModel = "";
        state.availableTreeTabs = [];
        
        await loadDatasetIndex(submodel);
        updateVehicleToggleDisplay();
        renderMenuStructure();
        renderVehicleDropdown();
        closeSidebar();
      });
      els.vehicleList.appendChild(button);
    }
  }
}

function updateVehicleToggleDisplay() {
  if (!els.vehicleCode) return;
  
  if (state.activeSubmodel?.name) {
    els.vehicleCode.textContent = state.activeSubmodel.name;
  } else {
    els.vehicleCode.textContent = "";
  }

  syncTopbarOffset();
}

function updateBreadcrumb() {
  if (!els.breadcrumb) return;
  
  els.breadcrumb.innerHTML = "";
  
  if (!state.breadcrumbTrail || state.breadcrumbTrail.length === 0) {
    return;
  }
  
  // Add breadcrumb items from the trail
  for (let i = 0; i < state.breadcrumbTrail.length; i++) {
    const item = state.breadcrumbTrail[i];
    const li = document.createElement("li");
    
    const isLast = i === state.breadcrumbTrail.length - 1;
    
    if (isLast) {
      // Last item (current file) - show as text
      const span = document.createElement("span");
      span.className = "breadcrumb-item current";
      span.textContent = item.label;
      li.appendChild(span);
    } else {
      const span = document.createElement("span");
      span.className = "breadcrumb-item";
      span.textContent = item.label;
      li.appendChild(span);
    }
    
    els.breadcrumb.appendChild(li);
  }
}

function renderTreeMenuSection(tabId) {
  const sections = document.querySelectorAll(".tree-tab-section");
  const section = Array.from(sections).find(s => s.dataset.tab === tabId);
  
  if (!section) return;
  
  const content = section.querySelector(".menu-section-content");
  if (!content) return;
  
  // Temporarily switch to this tab to get the tree nodes
  const savedTab = state.activeTreeTab;
  state.activeTreeTab = tabId;
  const nodes = visibleTree();
  state.activeTreeTab = savedTab;
  
  content.innerHTML = "";
  content.appendChild(buildTreeNodes(nodes, "", tabId));
}

function sidebarFocusableItems() {
  if (!els.sidebarMenu) {
    return [];
  }

  return Array.from(
    els.sidebarMenu.querySelectorAll(
      '.tree-tab-section:not([hidden]) > summary.menu-section-header, .tree-tab-section:not([hidden]) .menu-section-content summary, .tree-tab-section:not([hidden]) .menu-section-content button.tree-leaf'
    ),
  ).filter((el) => el instanceof HTMLElement && el.offsetParent !== null);
}

function focusSidebarRelative(current, delta) {
  const items = sidebarFocusableItems();
  if (!items.length) {
    return;
  }

  const index = Math.max(0, items.indexOf(current));
  const nextIndex = Math.min(items.length - 1, Math.max(0, index + delta));
  items[nextIndex]?.focus();
}

function firstSidebarChildItem(details) {
  if (!(details instanceof HTMLElement)) {
    return null;
  }

  return details.querySelector('.menu-section-content summary, .menu-section-content button.tree-leaf, :scope > details > summary');
}

function parentSidebarSummary(element) {
  const parentDetails = element?.closest('details')?.parentElement?.closest?.('details');
  return parentDetails?.querySelector?.(':scope > summary') || null;
}

function handleSidebarKeyboardNavigation(evt) {
  const target = evt.target instanceof Element
    ? evt.target.closest('summary, button.tree-leaf')
    : null;
  if (!(target instanceof HTMLElement) || !els.sidebarMenu?.contains(target)) {
    return;
  }

  if (evt.key === 'ArrowDown') {
    evt.preventDefault();
    focusSidebarRelative(target, 1);
    return;
  }

  if (evt.key === 'ArrowUp') {
    evt.preventDefault();
    focusSidebarRelative(target, -1);
    return;
  }

  if (evt.key === 'Home') {
    evt.preventDefault();
    sidebarFocusableItems()[0]?.focus();
    return;
  }

  if (evt.key === 'End') {
    evt.preventDefault();
    const items = sidebarFocusableItems();
    items[items.length - 1]?.focus();
    return;
  }

  if (evt.key === 'ArrowRight' && target.tagName === 'SUMMARY') {
    const details = target.parentElement;
    if (details instanceof HTMLDetailsElement && !details.open) {
      evt.preventDefault();
      details.open = true;
      return;
    }
    const child = firstSidebarChildItem(details);
    if (child instanceof HTMLElement) {
      evt.preventDefault();
      child.focus();
    }
    return;
  }

  if (evt.key === 'ArrowLeft') {
    if (target.tagName === 'SUMMARY') {
      const details = target.parentElement;
      if (details instanceof HTMLDetailsElement && details.open) {
        evt.preventDefault();
        details.open = false;
        return;
      }
    }

    const parentSummary = parentSidebarSummary(target);
    if (parentSummary instanceof HTMLElement) {
      evt.preventDefault();
      parentSummary.focus();
    }
  }
}

function renderMenuStructure() {
  const availableTabIds = new Set((state.availableTreeTabs || []).map((tab) => tab.id));
  document.querySelectorAll(".tree-tab-section").forEach((section) => {
    const tabId = section.dataset.tab;
    const isAvailable = availableTabIds.has(tabId);
    section.hidden = !isAvailable;
    section.open = isAvailable && tabId === state.activeTreeTab;
  });

  // Render tree content for each available tab
  for (const tab of state.availableTreeTabs) {
    renderTreeMenuSection(tab.id);
  }
}

function openSidebar() {
  if (!els.sidebar) return;
  els.sidebar.hidden = false;
  els.sidebar.setAttribute("aria-hidden", "false");
  if (els.sidebarOverlay) {
    els.sidebarOverlay.hidden = false;
  }
  if (els.menuToggle) {
    els.menuToggle.setAttribute("aria-expanded", "true");
  }
}

function closeSidebar() {
  // Don't close sidebar if it's pinned
  if (state.sidebarPinned) {
    return;
  }
  if (!els.sidebar) return;
  els.sidebar.hidden = true;
  els.sidebar.setAttribute("aria-hidden", "true");
  if (els.sidebarOverlay) {
    els.sidebarOverlay.hidden = true;
  }
  if (els.menuToggle) {
    els.menuToggle.setAttribute("aria-expanded", "false");
  }
}

function closeSidebarForNavigation() {
  if (!els.sidebar) return;
  els.sidebar.hidden = true;
  els.sidebar.setAttribute("aria-hidden", "true");
  if (els.sidebarOverlay) {
    els.sidebarOverlay.hidden = true;
  }
  if (els.menuToggle) {
    els.menuToggle.setAttribute("aria-expanded", "false");
  }
}

function togglePin() {
  if (!els.sidebarPin) return;
  
  state.sidebarPinned = !state.sidebarPinned;
  localStorage.setItem(sidebarPinnedStorageKey, state.sidebarPinned ? "1" : "");
  
  if (state.sidebarPinned) {
    els.sidebarPin.setAttribute("aria-pressed", "true");
    els.sidebar?.classList.add("pinned");
    els.layout?.classList.add("sidebar-pinned");
    // Show sidebar when pinned
    openSidebar();
  } else {
    els.sidebarPin.setAttribute("aria-pressed", "false");
    els.sidebar?.classList.remove("pinned");
    els.layout?.classList.remove("sidebar-pinned");
  }
}

function toggleSidebar() {
  if (els.sidebar?.hidden) {
    openSidebar();
  } else {
    closeSidebar();
  }
}

function toggleVehicleDropdown() {
  if (!els.vehicleDropdown) return;
  if (els.vehicleDropdown.hidden) {
    els.vehicleDropdown.hidden = false;
    if (els.vehicleToggle) {
      els.vehicleToggle.setAttribute("aria-expanded", "true");
    }
  } else {
    els.vehicleDropdown.hidden = true;
    if (els.vehicleToggle) {
      els.vehicleToggle.setAttribute("aria-expanded", "false");
    }
  }
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
  saveActiveTreeTab(tabId);
  restoreTreeState();

  const nextPath = state.selectedPath && state.activeDatasetIndex?.files?.[state.selectedPath]
    ? state.selectedPath
    : firstFilePathForTab(tabId);
  state.selectedPath = nextPath || null;

  renderMenuStructure();
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
  // Model select no longer exists in the UI - this function is kept for compatibility
  if (!els.modelSelect || !els.modelField) {
    return;
  }

  const variants = state.modelVariants || [];
  els.modelSelect.innerHTML = "";

  if (variants.length < 2) {
    els.modelField.hidden = true;
    return;
  }

  for (const variant of variants) {
    const option = document.createElement("option");
    option.value = variant;
    option.textContent = variant;
    els.modelSelect.appendChild(option);
  }

  els.modelSelect.value = variants.includes(state.activeModel) ? state.activeModel : variants[0];
  els.modelField.hidden = false;
}

function renderSubmodelSelect() {
  // Submodel select no longer exists in the UI - this function is kept for compatibility
}

function buildTreeNodes(nodes, trail = "", renderTabId = state.activeTreeTab) {
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
          // Close all sibling details elements at the same level (accordion behavior)
          const parent = details.parentElement;
          if (parent) {
            const siblingDetails = parent.querySelectorAll(':scope > details[open]');
            siblingDetails.forEach(sibling => {
              if (sibling !== details && sibling.open) {
                sibling.open = false;
              }
            });
          }
          
          state.expandedFolders.add(folderKey);
        } else {
          state.expandedFolders.delete(folderKey);
        }
        saveTreeState();
      });
      const summary = document.createElement("summary");
      summary.textContent = node.label;
      summary.title = sidebarPreviewText(trail, node.label, renderTabId);
      summary.addEventListener("keydown", handleSidebarKeyboardNavigation);
      details.appendChild(summary);
      details.appendChild(buildTreeNodes(childNodes, folderKey, renderTabId));
      if (!childNodes.length) {
        const emptyHint = document.createElement("div");
        emptyHint.className = "tree-empty-hint";
        emptyHint.textContent = state.activeModel
          ? `No documents available for ${state.activeModel} in this section.`
          : "No documents available in this section.";
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
    button.title = sidebarPreviewText(trail, buttonText, renderTabId);
    if (renderTabId === state.activeTreeTab && node.path === state.selectedPath) {
      button.classList.add("active");
    }
    button.addEventListener("click", () => {
      state.selectedPath = node.path;
      loadSelectedFile();
      renderTree();
      saveTreeState();
      closeSidebarForNavigation();
    });
    button.addEventListener("keydown", handleSidebarKeyboardNavigation);
    frag.appendChild(button);
  }

  return frag;
}

function renderTree() {
  const nodes = syncVisibleSelection();
  state.activeTreeNodes = nodes;
  
  // Re-render all menu sections to update active state
  renderMenuStructure();
}

async function loadSelectedFile() {
  const fileLoadToken = ++state.fileLoadToken;

  if (!state.selectedPath) {
    renderViewerPlaceholder("Choose a page from the sidebar to start reading.", {
      title: "Choose a document",
      detail: "Bookmarks, DTC, Symptoms, and Tightening Torque keep their own navigation context.",
    });
    updateBreadcrumbTrail();
    updateBreadcrumb();
    return;
  }

  updateBreadcrumbTrail();
  updateBreadcrumb();

  if (isManualLandingPath(state.selectedPath)) {
    applyViewerContext();
    els.viewer.innerHTML = "";
    els.viewer.appendChild(renderManualLanding());
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

    els.viewer.innerHTML = "";

    if (lowerPath.endsWith(".htm") || lowerPath.endsWith(".html")) {
      applyViewerContext();
      const stickyHeader = createViewerStickyHeader();
      const rendered = renderHtmlDocument(contentText, state.selectedPath);
      if (stickyHeader) {
        els.viewer.appendChild(stickyHeader);
      }
      els.viewer.appendChild(rendered);
      wireScrollableTableHints(els.viewer);
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
      applyViewerContext(rendered);
      const stickyHeader = createViewerStickyHeader();
      if (stickyHeader) {
        els.viewer.appendChild(stickyHeader);
      }
      els.viewer.appendChild(rendered);
      addDiagramPopupButtons(els.viewer);
      wireScrollableTableHints(els.viewer);
    }

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
  if (state.activeDataset?.id && submodel.id) {
    localStorage.setItem(datasetStorageKey, state.activeDataset.id);
    localStorage.setItem(submodelStorageKey(state.activeDataset.id), submodel.id);
  }
  state.activeDatasetIndex = null;
  state.selectedPath = null;
  state.expandedFolders = new Set();
  state.refToPath = new Map();
  state.refToTitle = new Map();
  state.modelVariants = [];
  state.activeModel = "";
  state.availableTreeTabs = [];
  clearSearchUi();
  renderViewerPlaceholder("Loading dataset index...", {
    title: "Loading manuals",
    detail: "Preparing navigation and search for the selected vehicle.",
  });
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
    const pendingUrlState = state.pendingUrlState;
    const savedModel = localStorage.getItem(modelStorageKey(`${state.activeDataset.id}:${submodel.id}`)) || "";
    const pendingModel = pendingUrlState?.model || "";
    state.activeModel = state.modelVariants.includes(pendingModel)
      ? pendingModel
      : (state.modelVariants.includes(savedModel) ? savedModel : (state.modelVariants[0] || ""));
    state.availableTreeTabs = datasetAvailableTreeTabs();
    state.searchIndex = buildSearchIndex(state.activeDatasetIndex, state.modelVariants);

    // Restore the previously active tab, preferring the model-scoped tab when available.
    const defaultTab = state.availableTreeTabs[0]?.id || "bookmarks";
    const pendingTab = pendingUrlState?.tabId || "";
    state.activeTreeTab = state.availableTreeTabs.some((tab) => tab.id === pendingTab)
      ? pendingTab
      : restoreActiveTreeTab(state.availableTreeTabs, defaultTab);
    saveActiveTreeTab(state.activeTreeTab);

    renderModelSelect();
    renderTreeTabs();
    restoreTreeState();
    if (pendingUrlState?.path && state.activeDatasetIndex?.files?.[pendingUrlState.path]) {
      state.selectedPath = pendingUrlState.path;
    }
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
  const pendingUrlState = state.pendingUrlState;
  const savedSubmodelId = localStorage.getItem(submodelStorageKey(dataset.id)) || "";
  const selectedSubmodel = submodels.find((item) => item.id === pendingUrlState?.submodelId)
    || submodels.find((item) => item.id === savedSubmodelId)
    || submodels[0]
    || null;
  state.activeSubmodel = selectedSubmodel;
  await loadDatasetIndex(selectedSubmodel);
}

async function bootstrap() {
  setupTheme();
  state.pendingUrlState = parseSharedViewFromUrl();
  ensureMobileQuickActions();
  window.addEventListener("resize", ensureMobileQuickActions);

  // Restore pinned state from localStorage
  const isPinned = localStorage.getItem(sidebarPinnedStorageKey) === "1";
  state.sidebarPinned = isPinned;
  if (els.sidebarPin) {
    els.sidebarPin.setAttribute("aria-pressed", isPinned ? "true" : "false");
  }
  if (isPinned) {
    els.sidebar?.classList.add("pinned");
    els.layout?.classList.add("sidebar-pinned");
  }

  els.themeToggle.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });

  // Hamburger menu toggle
  els.menuToggle?.addEventListener("click", () => {
    toggleSidebar();
  });

  // Sidebar overlay close
  els.sidebarOverlay?.addEventListener("click", () => {
    closeSidebar();
  });

  // Vehicle selector toggle
  els.vehicleToggle?.addEventListener("click", () => {
    toggleVehicleDropdown();
  });

  // Sidebar pin button
  els.sidebarPin?.addEventListener("click", () => {
    togglePin();
  });

  // Close vehicle dropdown when clicking outside
  document.addEventListener("click", (evt) => {
    if (!evt.target.closest(".vehicle-selector-wrapper")) {
      if (!els.vehicleDropdown?.hidden) {
        els.vehicleDropdown.hidden = true;
        els.vehicleToggle?.setAttribute("aria-expanded", "false");
      }
    }
  });

  // Handle tree tab section clicks for menu-based structure
  document.querySelectorAll(".tree-tab-section").forEach((section) => {
    const tabId = section.dataset.tab;
    if (!tabId) return;
    section.querySelector(':scope > summary')?.addEventListener("keydown", handleSidebarKeyboardNavigation);
    
    section.addEventListener("click", (evt) => {
      // Switch tab when clicking on tree items in this section
      if (evt.target.closest("button.tree-leaf")) {
        if (state.activeTreeTab !== tabId) {
          switchTreeTab(tabId);
        }
      }
    });
    
    // Auto-switch tab when section is opened, and close other sections (accordion behavior)
    section.addEventListener("toggle", () => {
      if (section.open) {
        // Close all other tree-tab-section elements
        document.querySelectorAll(".tree-tab-section").forEach((otherSection) => {
          if (otherSection !== section) {
            otherSection.open = false;
          }
        });
        // Switch to this tab
        if (state.activeTreeTab !== tabId) {
          switchTreeTab(tabId);
        }
      }
    });
  });

  window.addEventListener("beforeunload", () => {
    saveTreeState();
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

  els.modelSelect?.addEventListener("change", (evt) => {
    const nextModel = String(evt.target.value || "");
    if (!nextModel || nextModel === state.activeModel) {
      return;
    }

    saveTreeState();
    state.activeModel = nextModel;

    if (state.activeDataset?.id && state.activeSubmodel?.id) {
      localStorage.setItem(modelStorageKey(`${state.activeDataset.id}:${state.activeSubmodel.id}`), state.activeModel);
    }

    saveActiveTreeTab(state.activeTreeTab);

    restoreTreeState();
    updateSearch(state.searchQuery);
    renderTree();
    loadSelectedFile();
    saveTreeState();
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

  // Load the initial dataset and populate vehicle dropdown
  const savedDatasetId = localStorage.getItem(datasetStorageKey) || "";
  const initialDataset = state.datasets.find((item) => item.id === state.pendingUrlState?.datasetId)
    || state.datasets.find((item) => item.id === savedDatasetId)
    || state.datasets[0];
  await loadDataset(initialDataset.id);
  state.pendingUrlState = null;
  
  // Populate vehicle dropdown for the first time
  renderVehicleDropdown();
  updateVehicleToggleDisplay();
  syncTopbarOffset();
}

bootstrap().catch((err) => {
  renderViewerPlaceholder(err.message, true);
});
// trigger redeploy
