export function findNodeByPath(nodes, path) {
  for (const node of nodes || []) {
    if (node.type === "file" && node.path === path) {
      return node;
    }
    const found = findNodeByPath(node.children || [], path);
    if (found) {
      return found;
    }
  }
  return null;
}

export function filterTree(nodes, query) {
  if (!query) {
    return nodes;
  }

  const needle = query.toLowerCase();

  function walk(node) {
    const labelHit = String(node.label || "").toLowerCase().includes(needle);

    if (node.type === "file") {
      return labelHit ? { ...node } : null;
    }

    const children = (node.children || []).map(walk).filter(Boolean);
    if (labelHit || children.length) {
      return { ...node, children };
    }

    return null;
  }

  return (nodes || []).map(walk).filter(Boolean);
}
