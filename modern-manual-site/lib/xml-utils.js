function isMeaningfulText(node) {
  return node && node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0;
}

function textContentOf(node) {
  return (node?.textContent || "").replace(/\s+/g, " ").trim();
}

export function parseXml(xmlText) {
  const parser = new DOMParser();
  const cleaned = String(xmlText)
    .replace(/<\?xml[^>]*\?>/gi, "")
    .replace(/<\?xml-stylesheet[^>]*\?>/gi, "")
    .replace(/<!DOCTYPE[^>]*\[[\s\S]*?\]>/gi, "")
    .replace(/<!DOCTYPE[^>]*>/gi, "")
    .replace(/%[a-z0-9_:-]+;/gi, "")
    // Remove SGML entities declared in external DTDs that are unavailable offline.
    .replace(/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|#x[0-9a-fA-F]+;)[A-Za-z0-9_.:-]+;/g, "");

  const xmlDoc = parser.parseFromString(cleaned, "application/xml");
  const xmlError = xmlDoc.querySelector("parsererror");
  if (!xmlError) {
    return xmlDoc;
  }

  // Fallback: allow browser HTML parser to recover malformed legacy XML.
  const htmlDoc = parser.parseFromString(cleaned, "text/html");
  if (!htmlDoc || !htmlDoc.body) {
    throw new Error(xmlError.textContent || "XML parse error");
  }

  const wrap = document.implementation.createDocument("", "suzuki", null);
  wrap.documentElement.innerHTML = htmlDoc.body.innerHTML;
  return wrap;
}

function renderInline(node, options) {
  const frag = document.createDocumentFragment();
  for (const child of node.childNodes || []) {
    if (child.nodeType === Node.TEXT_NODE) {
      const value = child.textContent || "";
      if (value.trim()) {
        frag.appendChild(document.createTextNode(value.replace(/\s+/g, " ")));
      }
      continue;
    }
    if (child.nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    const tag = child.tagName.toLowerCase();
    if (tag.startsWith("intxref")) {
      const refId = child.getAttribute("refid") || textContentOf(child);
      const targetPath = options.resolveRef?.(refId) || "";
      const link = document.createElement("a");
      link.href = "#";
      link.className = "xml-link";
      link.dataset.refId = refId;
      link.textContent = textContentOf(child) || options.resolveRefLabel?.(refId) || refId;
      link.addEventListener("click", (event) => {
        event.preventDefault();
        if (options.onNavigateInternal?.(refId)) {
          return;
        }
        if (targetPath) {
          options.onNavigate?.(targetPath);
        }
      });
      frag.appendChild(link);
      continue;
    }

    if (tag === "symbol") {
      const name = child.getAttribute("name") || "";
      const span = document.createElement("span");
      span.className = "xml-symbol";
      const candidates = options.resolveSymbol?.(name) || [];
      if (candidates.length) {
        const img = document.createElement("img");
        img.className = "xml-symbol-icon";
        img.alt = name || "symbol";
        const widthMm = Number.parseFloat(child.getAttribute("width") || "");
        const heightMm = Number.parseFloat(child.getAttribute("height") || "");
        if (Number.isFinite(widthMm) && widthMm > 0) {
          img.style.width = `${widthMm}mm`;
        }
        if (Number.isFinite(heightMm) && heightMm > 0) {
          img.style.height = `${heightMm}mm`;
        }

        const setCandidate = (index) => {
          if (index >= candidates.length) {
            span.textContent = name ? `[${name}]` : "[symbol]";
            return;
          }
          img.onerror = () => setCandidate(index + 1);
          img.onload = () => {
            img.onerror = null;
          };
          img.src = candidates[index];
        };

        setCandidate(0);
        span.appendChild(img);
      } else {
        span.textContent = name ? `[${name}]` : "[symbol]";
      }
      frag.appendChild(span);
      continue;
    }

    if (tag === "emph") {
      const strong = document.createElement("strong");
      strong.textContent = textContentOf(child);
      frag.appendChild(strong);
      continue;
    }

    const text = textContentOf(child);
    if (text) {
      frag.appendChild(document.createTextNode(text));
    }
  }
  return frag;
}

function renderChildrenFlat(node, options, depth) {
  const frag = document.createDocumentFragment();

  const directText = [];
  for (const child of node.childNodes || []) {
    if (isMeaningfulText(child)) {
      directText.push(child.textContent.trim());
    }
  }

  if (directText.length) {
    const p = document.createElement("p");
    p.className = "xml-text";
    p.textContent = directText.join(" ");
    frag.appendChild(p);
  }

  for (const child of Array.from(node.children || [])) {
    const rendered = renderNode(child, options, depth + 1);
    if (rendered) {
      frag.appendChild(rendered);
    }
  }

  return frag.childNodes.length ? frag : null;
}

const FLATTEN_CONTAINER_TAGS = new Set([
  "suzuki",
  "manual",
  "section",
  "servcat",
  "configtype",
  "servinfotype",
  "servinfo",
  "servinfosub",
  "topic",
  "s1",
  "s2",
  "s3",
  "deflist",
]);

function renderNode(node, options, depth = 0) {
  if (depth > 24) {
    return null;
  }

  const tag = node.tagName.toLowerCase();

  if (tag === "title") {
    const h = document.createElement(depth < 4 ? "h2" : "h3");
    h.className = "xml-title";
    h.textContent = textContentOf(node);
    return h;
  }

  if (tag === "ptxt") {
    const p = document.createElement("p");
    p.className = "xml-text";
    const content = renderInline(node, options);
    if (content.childNodes.length === 0) {
      const text = textContentOf(node);
      if (!text) {
        return null;
      }
      p.textContent = text;
    } else {
      p.appendChild(content);
    }
    return p;
  }

  if (tag === "deflist") {
    const wrap = document.createElement("section");
    wrap.className = "xml-deflist";

    let currentTerm = null;
    const children = Array.from(node.children || []);
    for (const child of children) {
      const childTag = child.tagName?.toLowerCase();
      if (childTag === "term") {
        currentTerm = child;
        continue;
      }
      if (childTag !== "def" || !currentTerm) {
        continue;
      }

      const termText = textContentOf(currentTerm);
      const defText = textContentOf(child);
      const isLetterHeading = !defText && !!currentTerm.querySelector("emph");

      if (isLetterHeading) {
        const heading = document.createElement("h3");
        heading.className = "xml-deflist-heading";
        heading.textContent = termText;
        wrap.appendChild(heading);
        currentTerm = null;
        continue;
      }

      const row = document.createElement("div");
      row.className = "xml-deflist-row";

      const dt = document.createElement("div");
      dt.className = "xml-deflist-term";
      const termInline = renderInline(currentTerm, options);
      if (termInline.childNodes.length) {
        dt.appendChild(termInline);
      } else {
        dt.textContent = termText;
      }

      const dd = document.createElement("div");
      dd.className = "xml-deflist-def";
      const defChildren = Array.from(child.children || []);
      if (defChildren.length) {
        for (const defChild of defChildren) {
          const rendered = renderNode(defChild, options, depth + 1);
          if (rendered) {
            dd.appendChild(rendered);
          }
        }
      }
      if (!dd.childNodes.length) {
        dd.textContent = defText;
      }

      row.append(dt, dd);
      wrap.appendChild(row);
      currentTerm = null;
    }

    return wrap.childNodes.length ? wrap : null;
  }

  if (tag === "term" || tag === "def") {
    const p = document.createElement("p");
    p.className = "xml-text";
    const content = renderInline(node, options);
    if (content.childNodes.length) {
      p.appendChild(content);
    } else {
      p.textContent = textContentOf(node);
    }
    return p;
  }

  if (/^attention\d+$/.test(tag)) {
    const level = Number.parseInt(tag.replace("attention", ""), 10);
    const section = document.createElement("section");
    section.className = "xml-node xml-attention";
    if (Number.isFinite(level)) {
      section.classList.add(`xml-attention-${level}`);
    }
    for (const child of Array.from(node.children || [])) {
      const rendered = renderNode(child, options, depth + 1);
      if (rendered) {
        section.appendChild(rendered);
      }
    }
    return section.childNodes.length ? section : null;
  }

  if (tag === "servinfosub") {
    const section = document.createElement("section");
    section.className = "xml-servinfosub";
    const xmlId = (node.getAttribute("id") || "").trim();
    if (xmlId) {
      section.dataset.xmlId = xmlId;
    }
    for (const child of Array.from(node.children || [])) {
      const rendered = renderNode(child, options, depth + 1);
      if (rendered) {
        section.appendChild(rendered);
      }
    }
    return section.childNodes.length ? section : null;
  }

  if (FLATTEN_CONTAINER_TAGS.has(tag)) {
    return renderChildrenFlat(node, options, depth);
  }

  if (tag === "spec") {
    const section = document.createElement("section");
    section.className = "xml-spec";
    for (const child of Array.from(node.children || [])) {
      const rendered = renderNode(child, options, depth + 1);
      if (rendered) {
        section.appendChild(rendered);
      }
    }
    return section.childNodes.length ? section : null;
  }

  if (tag === "callout") {
    const section = document.createElement("aside");
    section.className = "xml-callout";
    for (const child of Array.from(node.children || [])) {
      const rendered = renderNode(child, options, depth + 1);
      if (rendered) {
        section.appendChild(rendered);
      }
    }
    return section.childNodes.length ? section : null;
  }

  if (tag === "list1" || tag === "list2" || tag === "list3") {
    const list = document.createElement(node.getAttribute("type") === "ordered" ? "ol" : "ul");
    list.className = "xml-list";
    for (const item of Array.from(node.children || []).filter((child) => child.tagName?.toLowerCase() === "item")) {
      const li = document.createElement("li");
      const itemNodes = Array.from(item.children || []);
      if (!itemNodes.length) {
        li.textContent = textContentOf(item);
      } else {
        for (const child of itemNodes) {
          const rendered = renderNode(child, options, depth + 1);
          if (rendered) {
            li.appendChild(rendered);
          }
        }
      }
      list.appendChild(li);
    }
    return list;
  }

  if (tag === "table") {
    const wrap = document.createElement("div");
    wrap.className = "xml-table-wrap";
    const table = document.createElement("table");
    table.className = "xml-table";

    const colIndexByName = new Map();
    const colgroup = document.createElement("colgroup");
    let hasColWidth = false;
    for (const colspec of Array.from(node.querySelectorAll("tgroup > colspec"))) {
      const colName = (colspec.getAttribute("colname") || "").trim();
      const colNum = Number.parseInt(colspec.getAttribute("colnum") || "", 10);
      if (colName && Number.isFinite(colNum) && colNum > 0) {
        colIndexByName.set(colName, colNum);
      }

      const col = document.createElement("col");
      const colWidth = (colspec.getAttribute("colwidth") || "").trim();
      if (colWidth) {
        hasColWidth = true;
        col.style.width = colWidth;
      }
      colgroup.appendChild(col);
    }
    if (hasColWidth) {
      table.appendChild(colgroup);
    }

    for (const row of node.querySelectorAll("row")) {
      const tr = document.createElement("tr");
      const isHeader = row.closest("thead") !== null;
      for (const entry of Array.from(row.children || []).filter((child) => child.tagName?.toLowerCase() === "entry")) {
        const cell = document.createElement(isHeader ? "th" : "td");

        const namest = (entry.getAttribute("namest") || "").trim();
        const nameend = (entry.getAttribute("nameend") || "").trim();
        if (namest && nameend) {
          const start = colIndexByName.get(namest);
          const end = colIndexByName.get(nameend);
          if (Number.isFinite(start) && Number.isFinite(end) && end >= start) {
            cell.colSpan = end - start + 1;
          }
        }

        const morerows = Number.parseInt(entry.getAttribute("morerows") || "", 10);
        if (Number.isFinite(morerows) && morerows > 0) {
          cell.rowSpan = morerows + 1;
        }

        const align = (entry.getAttribute("align") || "").trim().toLowerCase();
        if (align === "left" || align === "right" || align === "center") {
          cell.style.textAlign = align;
        }

        const valign = (entry.getAttribute("valign") || "").trim().toLowerCase();
        if (valign === "top" || valign === "middle" || valign === "bottom") {
          cell.style.verticalAlign = valign;
        }

        const childNodes = Array.from(entry.children || []);
        if (!childNodes.length) {
          cell.textContent = textContentOf(entry);
        } else {
          for (const child of childNodes) {
            const rendered = renderNode(child, options, depth + 1);
            if (rendered) {
              cell.appendChild(rendered);
            }
          }
        }
        tr.appendChild(cell);
      }
      table.appendChild(tr);
    }

    wrap.appendChild(table);
    return wrap;
  }

  if (tag === "figure") {
    const figure = document.createElement("figure");
    figure.className = "xml-figure";
    for (const child of Array.from(node.children || [])) {
      const rendered = renderNode(child, options, depth + 1);
      if (rendered) {
        figure.appendChild(rendered);
      }
    }
    return figure.childNodes.length ? figure : null;
  }

  if (tag === "graphic") {
    const graphicName = node.getAttribute("graphicname") || "graphic";
    const candidates = options.resolveGraphic?.(graphicName) || [];
    const wrap = document.createElement("figure");
    wrap.className = "xml-figure";
    const img = document.createElement("img");
    img.className = "xml-graphic";
    img.alt = graphicName;

    const nextCandidate = (index) => {
      if (index >= candidates.length) {
        const note = document.createElement("figcaption");
        note.className = "xml-note";
        note.textContent = `Graphic: ${graphicName}`;
        wrap.replaceChildren(note);
        return;
      }
      img.onerror = () => nextCandidate(index + 1);
      img.onload = () => {
        img.onerror = null;
      };
      img.src = candidates[index];
    };

    if (candidates.length) {
      nextCandidate(0);
      wrap.appendChild(img);
      return wrap;
    }

    const note = document.createElement("figcaption");
    note.className = "xml-note";
    note.textContent = `Graphic: ${graphicName}`;
    wrap.appendChild(note);
    return wrap;
  }

  const container = document.createElement("section");
  container.className = "xml-node";
  if (!FLATTEN_CONTAINER_TAGS.has(tag)) {
    const tagLabel = document.createElement("div");
    tagLabel.className = "xml-tag";
    tagLabel.textContent = `<${tag}>`;
    container.appendChild(tagLabel);
  }

  const directText = [];
  for (const child of node.childNodes || []) {
    if (isMeaningfulText(child)) {
      directText.push(child.textContent.trim());
    }
  }
  if (directText.length) {
    const p = document.createElement("p");
    p.className = "xml-text";
    p.textContent = directText.join(" ");
    container.appendChild(p);
  }

  for (const child of Array.from(node.children || [])) {
    const rendered = renderNode(child, options, depth + 1);
    if (rendered) {
      container.appendChild(rendered);
    }
  }

  return container.childNodes.length ? container : null;
}

export function renderXmlDocument(doc, options = {}) {
  const root = doc.documentElement;
  const wrap = document.createElement("div");
  wrap.className = "xml-view";
  const rendered = renderNode(root, options, 0);
  if (rendered) {
    wrap.appendChild(rendered);
  }
  return wrap;
}
