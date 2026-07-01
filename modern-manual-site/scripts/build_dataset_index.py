#!/usr/bin/env python3
"""Build dataset index files for the modern manual viewer."""

from __future__ import annotations

import json
import re
import html
from html.parser import HTMLParser
from dataclasses import dataclass
from pathlib import Path
import xml.etree.ElementTree as ET
from typing import Dict, List, Tuple

BASE_DIR = Path(__file__).resolve().parent
SITE_ROOT = BASE_DIR.parent
CONFIG_PATH = BASE_DIR / "datasets.config.json"
DATA_DIR = SITE_ROOT / "data"

TITLE_PATTERNS = [
    re.compile(r"<title>(.*?)</title>", re.IGNORECASE | re.DOTALL),
    re.compile(r"<name>(.*?)</name>", re.IGNORECASE | re.DOTALL),
    re.compile(r"<heading>(.*?)</heading>", re.IGNORECASE | re.DOTALL),
]


@dataclass
class DatasetConfig:
    dataset_id: str
    name: str
    xml_root: Path
    web_prefix: str
    flat_group_prefix: int
    navi_html: str
    structure_xml: str


def load_config() -> List[DatasetConfig]:
    payload = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
    datasets: List[DatasetConfig] = []
    for item in payload.get("datasets", []):
        datasets.append(
            DatasetConfig(
                dataset_id=item["id"],
                name=item["name"],
                xml_root=(SITE_ROOT / item["xml_root"]).resolve(),
                web_prefix=item["web_prefix"].rstrip("/"),
                flat_group_prefix=int(item.get("flat_group_prefix", 0)),
                navi_html=item.get("navi_html", "navi/navi.html"),
                structure_xml=item.get("structure_xml", "webdocstructure-sym.xml"),
            )
        )
    return datasets


def extract_title(xml_path: Path) -> str:
    try:
        text = xml_path.read_text(encoding="utf-8", errors="ignore")[:10000]
    except OSError:
        return ""

    for pattern in TITLE_PATTERNS:
        match = pattern.search(text)
        if match:
            value = re.sub(r"\s+", " ", match.group(1)).strip()
            if value:
                return value[:180]
    return ""


CONTENT_MODEL_CACHE: Dict[Path, List[str]] = {}


def detect_models(xml_path: Path, title: str = "") -> List[str]:
    cached = CONTENT_MODEL_CACHE.get(xml_path)
    if cached is not None:
        return cached

    try:
        text = xml_path.read_text(encoding="utf-8", errors="ignore")
    except OSError:
        CONTENT_MODEL_CACHE[xml_path] = []
        return []

    markers = []
    haystack = f"{title}\n{text}"
    if re.search(r"\bK14C\b", haystack):
        markers.append("K14C")
    if re.search(r"\bK14D\b", haystack):
        markers.append("K14D")

    CONTENT_MODEL_CACHE[xml_path] = markers
    return markers


def insert_tree(root: Dict, parts: Tuple[str, ...], file_meta: Dict) -> None:
    if len(parts) == 1:
        root.setdefault("children", []).append(
            {
                "type": "file",
                "label": parts[0],
                "path": file_meta["path"],
                "title": file_meta["title"],
            }
        )
        return

    head = parts[0]
    children = root.setdefault("children", [])
    folder = next((c for c in children if c.get("type") == "folder" and c.get("label") == head), None)
    if folder is None:
        folder = {"type": "folder", "label": head, "children": []}
        children.append(folder)

    insert_tree(folder, parts[1:], file_meta)


def insert_flat_grouped(root: Dict, filename: str, file_meta: Dict, prefix_len: int) -> None:
    if prefix_len <= 0:
        insert_tree(root, (filename,), file_meta)
        return

    prefix = filename[:prefix_len] if len(filename) > prefix_len else "misc"
    insert_tree(root, (prefix, filename), file_meta)


def strip_tags(text: str) -> str:
    text = re.sub(r"<[^>]+>", " ", text)
    text = html.unescape(text)
    return re.sub(r"\s+", " ", text).strip()


def navi_semantic_tree(dataset: DatasetConfig, file_index: Dict[str, Dict]) -> Tuple[List[Dict], List[str]]:
    navi_path = (dataset.xml_root / dataset.navi_html).resolve()
    if not navi_path.exists():
        return [], []

    source = navi_path.read_text(encoding="utf-8", errors="ignore")
    tree: List[Dict] = []
    seen: List[str] = []

    class NaviParser(HTMLParser):
        def __init__(self) -> None:
            super().__init__()
            self.sections: List[Tuple[str, str]] = []
            self.blocks: Dict[str, List[Tuple[str, str, str]]] = {}
            self.div_stack: List[str] = []
            self.current_block: str = ""
            self.capture_a = False
            self.a_attrs: Dict[str, str] = {}
            self.a_text: List[str] = []
            self.capture_div = False
            self.div_class = ""
            self.div_text: List[str] = []

        def handle_starttag(self, tag: str, attrs: List[Tuple[str, str]]) -> None:
            attr = {k: v for k, v in attrs}
            if tag == "div":
                div_id = attr.get("id", "")
                self.div_stack.append(div_id)
                if div_id.startswith("blk"):
                    self.current_block = div_id

                div_cls = attr.get("class", "")
                if div_cls in ("sit",):
                    self.capture_div = True
                    self.div_class = div_cls
                    self.div_text = []

            elif tag == "a":
                self.capture_a = True
                self.a_attrs = attr
                self.a_text = []

        def handle_endtag(self, tag: str) -> None:
            if tag == "a" and self.capture_a:
                text = re.sub(r"\s+", " ", "".join(self.a_text)).strip()
                onclick = self.a_attrs.get("onclick", "")
                href = self.a_attrs.get("href", "")
                title = self.a_attrs.get("title", "")

                toggle = re.search(r"toggle\('([^']+)'\)", onclick)
                if toggle:
                    self.sections.append((toggle.group(1), text or "Section"))
                elif href.lower().endswith(".xml") and self.current_block:
                    block_items = self.blocks.setdefault(self.current_block, [])
                    block_items.append(("xml", href, title or text or ""))

                self.capture_a = False

            elif tag == "div":
                if self.capture_div and self.div_class == "sit":
                    text = re.sub(r"\s+", " ", "".join(self.div_text)).strip()
                    if text and self.current_block:
                        block_items = self.blocks.setdefault(self.current_block, [])
                        block_items.append(("sit", text, ""))
                    self.capture_div = False

                if self.div_stack:
                    popped = self.div_stack.pop()
                    if popped.startswith("blk"):
                        for prev in reversed(self.div_stack):
                            if prev.startswith("blk"):
                                self.current_block = prev
                                break
                        else:
                            self.current_block = ""

        def handle_data(self, data: str) -> None:
            if self.capture_a:
                self.a_text.append(data)
            if self.capture_div:
                self.div_text.append(data)

    parser = NaviParser()
    parser.feed(source)

    def add_file_node(target_children: List[Dict], web_path: str, label: str) -> None:
        if web_path in seen:
            return
        seen.append(web_path)
        meta = file_index.get(web_path, {})
        target_children.append(
            {
                "type": "file",
                "label": label,
                "path": web_path,
                "title": meta.get("title", ""),
            }
        )

    for section_id, section_label in parser.sections:
        section_node: Dict = {"type": "folder", "label": section_label, "children": []}
        tree.append(section_node)

        block_id = f"blk{section_id}"
        entries = parser.blocks.get(block_id, [])
        current_subfolder: Dict | None = None

        for kind, value, aux in entries:
            if kind == "sit":
                sub_label = value
                existing = next((c for c in section_node["children"] if c.get("type") == "folder" and c.get("label") == sub_label), None)
                if existing is None:
                    existing = {"type": "folder", "label": sub_label, "children": []}
                    section_node["children"].append(existing)
                current_subfolder = existing
                continue

            href = value.strip()
            fs_target = (navi_path.parent / href).resolve()
            try:
                rel = fs_target.relative_to(dataset.xml_root)
            except ValueError:
                continue

            web_path = f"{dataset.web_prefix}/{str(rel).replace('\\', '/')}"
            if web_path not in file_index:
                continue

            label = aux.strip() or rel.name
            if current_subfolder is not None:
                add_file_node(current_subfolder["children"], web_path, label)
            else:
                add_file_node(section_node["children"], web_path, label)

    # Remove empty folders that may result from malformed/nav-only headings.
    def prune(nodes: List[Dict]) -> List[Dict]:
        kept: List[Dict] = []
        for node in nodes:
            if node.get("type") == "folder":
                node["children"] = prune(node.get("children", []))
                if node["children"]:
                    kept.append(node)
            else:
                kept.append(node)
        return kept

    return prune(tree), seen


CHAPTER_NAMES = {
    "00": "Precautions",
    "0": "General Information",
    "1": "Engine",
    "2": "Suspension",
    "3": "Driveline / Axle",
    "4": "Brakes",
    "5": "Transmission / Transaxle",
    "6": "Steering",
    "7": "HVAC",
    "8": "Restraint",
    "9": "Body, Cab and Accessories",
    "10": "Control Systems",
    "11": "Wiring",
}


def build_structure_file_lookup(dataset: DatasetConfig) -> Dict[str, Path]:
    lookup: Dict[str, Path] = {}
    for candidate in dataset.xml_root.glob("webdocstructure_*.xml"):
        suffix = candidate.stem.removeprefix("webdocstructure_").upper()
        if suffix:
            lookup[suffix] = candidate
    return lookup


def structure_file_tree(
    structure_path: Path,
    dataset: DatasetConfig,
    file_index: Dict[str, Dict],
    section_lookup: Dict[str, Path],
    seen: List[str],
) -> List[Dict]:
    if not structure_path.exists():
        return []

    root = ET.fromstring(structure_path.read_text(encoding="utf-8", errors="ignore"))
    group_nodes: List[Dict] = []

    def meaningful_container_label(element: ET.Element) -> str:
        label = (element.attrib.get("t", "") or "").strip()
        if not label or "none" in label.lower():
            return ""
        return label

    def add_plain_file_node(target_children: List[Dict], web_path: str, label: str, title: str) -> None:
        target_children.append(
            {
                "type": "file",
                "label": label or title,
                "path": web_path,
                "title": title,
            }
        )

    def add_modeled_file_node(target_children: List[Dict], web_path: str, label: str, title: str, xml_path: Path) -> None:
        models = detect_models(xml_path, title or label)
        if not models:
            add_plain_file_node(target_children, web_path, label, title)
            return

        if len(models) == 1:
            model_folder = next(
                (child for child in target_children if child.get("type") == "folder" and child.get("label") == models[0]),
                None,
            )
            if model_folder is None:
                model_folder = {"type": "folder", "label": models[0], "children": []}
                target_children.append(model_folder)
            add_plain_file_node(model_folder["children"], web_path, label, title)
            return

        models_folder = next(
            (child for child in target_children if child.get("type") == "folder" and child.get("label") == "Models"),
            None,
        )
        if models_folder is None:
            models_folder = {"type": "folder", "label": "Models", "children": []}
            target_children.append(models_folder)

        for model in models:
            model_folder = next(
                (child for child in models_folder["children"] if child.get("type") == "folder" and child.get("label") == model),
                None,
            )
            if model_folder is None:
                model_folder = {"type": "folder", "label": model, "children": []}
                models_folder["children"].append(model_folder)
            add_plain_file_node(model_folder["children"], web_path, label, title)

    def add_file_node(target_children: List[Dict], service_id: str, label: str, explicit_model: str = "") -> None:
        candidates = [
            f"{dataset.web_prefix}/{service_id}.xml",
            f"{dataset.web_prefix}/{service_id}/{service_id}.htm",
            f"{dataset.web_prefix}/{service_id}/{service_id}.html",
        ]
        web_path = next((candidate for candidate in candidates if candidate in file_index), "")
        if not web_path or web_path in seen:
            return

        seen.append(web_path)
        meta = file_index.get(web_path, {})
        xml_path = dataset.xml_root / Path(meta.get("relative", ""))
        if explicit_model:
            add_plain_file_node(
                target_children,
                web_path,
                label or meta.get("title", "") or service_id,
                meta.get("title", ""),
            )
            return
        add_modeled_file_node(
            target_children,
            web_path,
            label or meta.get("title", "") or service_id,
            meta.get("title", ""),
            xml_path,
        )

    def walk_container(element: ET.Element, target_children: List[Dict], section_code: str, explicit_model: str = "") -> None:
        model_children = [child for child in element if child.tag == "c" and meaningful_container_label(child)]
        if model_children and len(model_children) == len(list(element)):
            grouped: Dict[str, Dict] = {}
            ordered_groups: List[Dict] = []

            for container in model_children:
                model_label = meaningful_container_label(container)
                for child in container:
                    if child.tag != "t":
                        continue

                    group_label = (child.attrib.get("t", "") or "").strip() or f"Group {child.attrib.get('s', '').strip()}"
                    group_node = grouped.get(group_label)
                    if group_node is None:
                        group_node = {"type": "folder", "label": group_label, "children": []}
                        grouped[group_label] = group_node
                        ordered_groups.append(group_node)

                    model_node = next(
                        (item for item in group_node["children"] if item.get("type") == "folder" and item.get("label") == model_label),
                        None,
                    )
                    if model_node is None:
                        model_node = {"type": "folder", "label": model_label, "children": []}
                        group_node["children"].append(model_node)

                    walk_container(child, model_node["children"], section_code, model_label)

            target_children.extend([node for node in ordered_groups if node["children"]])
            return

        for child in element:
            if child.tag == "t":
                label = (child.attrib.get("t", "") or "").strip() or f"Group {child.attrib.get('s', '').strip()}"
                folder = {"type": "folder", "label": label, "children": []}
                walk_container(child, folder["children"], section_code, explicit_model)
                if folder["children"]:
                    target_children.append(folder)
                continue

            if child.tag == "s":
                service_id = (child.attrib.get("i", "") or "").strip()
                if not service_id:
                    continue
                label = (child.attrib.get("t", "") or "").strip()
                add_file_node(target_children, service_id, label, explicit_model)
                continue

            if child.tag == "c":
                nested_code = (child.attrib.get("i", "") or "").strip().upper()
                container_label = (child.attrib.get("t", "") or "").strip()
                if container_label and "none" not in container_label.lower():
                    folder = {"type": "folder", "label": container_label, "children": []}
                    walk_container(child, folder["children"], section_code, container_label)
                    if folder["children"]:
                        target_children.append(folder)
                    continue
                if nested_code and nested_code != "0":
                    nested_path = section_lookup.get(f"{section_code}{nested_code}") or section_lookup.get(nested_code)
                    if nested_path:
                        nested_nodes = structure_file_tree(nested_path, dataset, file_index, section_lookup, seen)
                        target_children.extend(nested_nodes)
                        continue
                walk_container(child, target_children, section_code, explicit_model)

    walk_container(root, group_nodes, structure_path.stem.removeprefix("webdocstructure_").upper())

    return group_nodes


def webdocstructure_tree(dataset: DatasetConfig, file_index: Dict[str, Dict]) -> Tuple[List[Dict], List[str]]:
    structure_path = (dataset.xml_root / dataset.structure_xml).resolve()
    if not structure_path.exists():
        return [], []

    root = ET.fromstring(structure_path.read_text(encoding="utf-8", errors="ignore"))
    section_lookup = build_structure_file_lookup(dataset)

    tree: List[Dict] = []
    seen: List[str] = []

    chapter_nodes: Dict[str, Dict] = {}

    def ensure_chapter(chapter_code: str) -> Dict:
        if chapter_code not in chapter_nodes:
            chapter_title = CHAPTER_NAMES.get(chapter_code, f"Chapter {chapter_code}")
            chapter_node = {"type": "folder", "label": f"{chapter_code} - {chapter_title}", "children": []}
            chapter_nodes[chapter_code] = chapter_node
            tree.append(chapter_node)
        return chapter_nodes[chapter_code]

    for section in root.findall("a"):
        section_id = (section.attrib.get("i", "") or "").strip()
        if not section_id:
            continue

        if section_id == "a":
            foreword_node = {"type": "folder", "label": "A - Foreword", "children": []}
            for doc in section.findall("s"):
                doc_id = (doc.attrib.get("i", "") or "").strip()
                if not doc_id:
                    continue
                candidate = [
                    f"{dataset.web_prefix}/{doc_id}/{doc_id}.htm",
                    f"{dataset.web_prefix}/{doc_id}/{doc_id}.html",
                    f"{dataset.web_prefix}/{doc_id}.xml",
                    f"{dataset.web_prefix}/{doc_id.replace('-', '')}.xml",
                ]
                web_path = next((c for c in candidate if c in file_index), "")
                if not web_path:
                    continue
                if web_path in seen:
                    continue
                seen.append(web_path)
                label = (doc.attrib.get("t", "") or doc_id).strip()
                foreword_node["children"].append(
                    {
                        "type": "file",
                        "label": label,
                        "path": web_path,
                        "title": file_index.get(web_path, {}).get("title", ""),
                    }
                )
            if foreword_node["children"]:
                tree.append(foreword_node)
            continue

        section_title = ""
        title_node = section.find("b")
        if title_node is not None:
            section_title = (title_node.attrib.get("t", "") or (title_node.text or "")).strip()

        chapter_code_match = re.match(r"^(\d+)", section_id)
        chapter_code = chapter_code_match.group(1) if chapter_code_match else section_id
        chapter_node = ensure_chapter(chapter_code)

        section_label = f"{section_id} - {section_title}" if section_title else section_id
        section_node = {"type": "folder", "label": section_label, "children": []}
        chapter_node["children"].append(section_node)

        file_prefix = (section.attrib.get("f", "") or "").strip()
        if file_prefix.endswith(".fm"):
            file_prefix = file_prefix[:-3]
        structure_suffix = file_prefix[-2:].upper() if len(file_prefix) >= 2 else ""
        structure_candidate = section_lookup.get(structure_suffix)
        if structure_candidate is not None:
            section_node["children"].extend(structure_file_tree(structure_candidate, dataset, file_index, section_lookup, seen))

    def prune(nodes: List[Dict]) -> List[Dict]:
        kept: List[Dict] = []
        for node in nodes:
            if node.get("type") == "folder":
                node["children"] = prune(node.get("children", []))
                if node["children"]:
                    kept.append(node)
            else:
                kept.append(node)
        return kept

    return prune(tree), seen


def sort_tree(node: Dict) -> None:
    children = node.get("children", [])
    children.sort(key=lambda item: (item.get("type") != "folder", item.get("label", "").lower()))
    for child in children:
        if child.get("type") == "folder":
            sort_tree(child)


def first_file_in_tree(nodes: List[Dict]) -> str:
    for node in nodes:
        if node.get("type") == "file":
            return node.get("path", "")
        if node.get("type") == "folder":
            nested = first_file_in_tree(node.get("children", []))
            if nested:
                return nested
    return ""


def build_dataset(dataset: DatasetConfig) -> Dict:
    if not dataset.xml_root.exists():
        raise FileNotFoundError(f"xml_root does not exist: {dataset.xml_root}")

    indexed_files = sorted(
        [
            *dataset.xml_root.rglob("*.xml"),
            *dataset.xml_root.rglob("*.htm"),
            *dataset.xml_root.rglob("*.html"),
        ]
    )
    root_node: Dict = {"children": []}
    file_index: Dict[str, Dict] = {}
    first_file_path = ""

    for source_path in indexed_files:
        rel = source_path.relative_to(dataset.xml_root)
        web_path = f"{dataset.web_prefix}/{str(rel).replace('\\\\', '/')}"
        title = extract_title(source_path)
        file_meta = {"path": web_path, "title": title}
        file_index[web_path] = {"title": title, "relative": str(rel).replace("\\", "/")}
        if not first_file_path:
            first_file_path = web_path

    semantic_tree, linked_paths = webdocstructure_tree(dataset, file_index)
    semantic_source = "semantic-structure"
    if not semantic_tree:
        semantic_tree, linked_paths = navi_semantic_tree(dataset, file_index)
        semantic_source = "semantic-navi"

    if semantic_tree:
        root_node["children"] = semantic_tree
        unlinked = [path for path in file_index.keys() if path not in set(linked_paths)]
        if unlinked:
            unlinked_folder = {"type": "folder", "label": "Unlinked XML", "children": []}
            for path in sorted(unlinked):
                rel_name = Path(file_index[path]["relative"]).name
                unlinked_folder["children"].append(
                    {
                        "type": "file",
                        "label": rel_name,
                        "path": path,
                        "title": file_index[path].get("title", ""),
                    }
                )
            root_node["children"].append(unlinked_folder)
        first_file_path = first_file_in_tree(root_node["children"]) or first_file_path
    else:
        for path, meta in file_index.items():
            rel = Path(meta["relative"])
            file_meta = {"path": path, "title": meta.get("title", "")}
            # Some manuals place all XML files in a single folder. Group them by prefix
            # so the UI still has a tree-shaped navigation instead of a 2k+ flat list.
            if len(rel.parts) == 1 and dataset.flat_group_prefix > 0:
                insert_flat_grouped(root_node, rel.parts[0], file_meta, dataset.flat_group_prefix)
            else:
                insert_tree(root_node, rel.parts, file_meta)

        sort_tree(root_node)

    return {
        "id": dataset.dataset_id,
        "name": dataset.name,
        "xmlRoot": str(dataset.xml_root),
        "tree": root_node.get("children", []),
        "files": file_index,
        "firstFilePath": first_file_path,
        "fileCount": len(file_index),
        "source": semantic_source if semantic_tree else "filesystem",
    }


def main() -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    datasets = load_config()

    manifest = {"datasets": []}

    for dataset in datasets:
        built = build_dataset(dataset)
        out_file = DATA_DIR / f"{dataset.dataset_id}.json"
        out_file.write_text(json.dumps(built, indent=2), encoding="utf-8")
        manifest["datasets"].append(
            {
                "id": dataset.dataset_id,
                "name": dataset.name,
                "indexUrl": f"./data/{dataset.dataset_id}.json",
                "fileCount": built["fileCount"],
            }
        )
        print(f"Built {dataset.dataset_id}: {built['fileCount']} files")

    (DATA_DIR / "datasets.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(f"Wrote manifest with {len(manifest['datasets'])} dataset(s)")


if __name__ == "__main__":
    main()
