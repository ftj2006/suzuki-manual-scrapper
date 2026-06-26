import argparse
import os
import re
import shutil
import urllib.request
import xml.etree.ElementTree as ET
from html import escape
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from urllib.parse import urljoin, urlparse, urldefrag

from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright


TEXT_RESOURCE_SUFFIXES = (
    ".css",
    ".gif",
    ".htm",
    ".html",
    ".ico",
    ".jpeg",
    ".jpg",
    ".js",
    ".png",
    ".svg",
    ".swf",
    ".txt",
    ".xsl",
    ".xslt",
    ".xml",
)


def normalize_url(base_url: str, href: str) -> Optional[str]:
    if not href:
        return None
    href = href.strip()
    if href.startswith(("javascript:", "mailto:", "tel:")):
        return None
    if href.startswith("#"):
        return None
    resolved = urljoin(base_url, href)
    return urldefrag(resolved).url


def same_origin(url: str, origin: str) -> bool:
    return urlparse(url).scheme == urlparse(origin).scheme and urlparse(url).netloc == urlparse(origin).netloc


def ensure_parent(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)


def output_path_for_url(url: str, output_dir: Path, origin: Optional[str] = None) -> Path:
    parsed = urlparse(url)
    netloc = parsed.netloc or (urlparse(origin or "").netloc or "local")
    path = parsed.path or "/"
    if path.endswith("/"):
        path += "index.html"
    if not path.startswith("/"):
        path = "/" + path
    if not os.path.splitext(path)[1]:
        path += ".html"
    return output_dir / netloc / path.lstrip("/")


def is_legacy_placeholder(path: Path) -> bool:
    if not path.exists() or not path.is_file():
        return False
    suffix = path.suffix.lower()
    size = path.stat().st_size
    if suffix == ".svg" and size <= 1024:
        try:
            text = path.read_text(encoding="utf-8", errors="ignore")
        except Exception:
            return False
        return "viewBox=\"0 0 16 16\"" in text and "fill=\"#f0f0f0\"" in text
    if suffix in {".jpg", ".jpeg"} and 200 <= size <= 1200:
        return True
    return False


def download_url(url: str, local_path: Path) -> bool:
    if local_path.exists() and not is_legacy_placeholder(local_path):
        return True
    for _ in range(3):
        try:
            request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(request, timeout=30) as response:
                ensure_parent(local_path)
                local_path.write_bytes(response.read())
                return True
        except Exception:
            continue
    return False


def save_html_document(url: str, output_dir: Path, origin: str, url_map: Dict[str, Path]) -> Path:
    local_path = output_path_for_url(url, output_dir, origin)
    if local_path.exists():
        return local_path
    try:
        request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(request, timeout=30) as response:
            content_bytes = response.read()
            content_type = response.headers.get_content_type() or ""
            is_xml = url.endswith(".xml") or "xml" in content_type.lower()
            if is_xml:
                ensure_parent(local_path)
                local_path.write_bytes(content_bytes)
                return local_path
            html = content_bytes.decode(response.headers.get_content_charset() or "utf-8", errors="ignore")
    except Exception:
        return local_path

    soup = BeautifulSoup(html, "html.parser")
    rewrite_popup_handlers(soup, url, local_path, output_dir, url_map, origin)
    rewrite_html_links(soup, url, local_path, output_dir, url_map, origin)
    ensure_parent(local_path)
    local_path.write_text(str(soup), encoding="utf-8")
    return local_path


def remote_url_for_local_path(local_path: Path, output_dir: Path, origin: str) -> Optional[str]:
    try:
        relative_path = local_path.relative_to(output_dir)
    except ValueError:
        return None
    if len(relative_path.parts) < 2:
        return None
    return f"{origin}/{Path(*relative_path.parts[1:]).as_posix()}"


def extract_resource_references(text: str) -> List[str]:
    references: List[str] = []
    patterns = [
        r"url\(\s*['\"]?([^'\")]+)['\"]?\s*\)",
        r"@import\s+(?:url\(\s*)?['\"]?([^'\")\s;]+)['\"]?\s*\)?",
        r"(?:src|href)=['\"]([^'\"]+)['\"]",
        r"['\"]((?:\.{1,2}/|/|\.\\)[^'\"]+?(?:" + "|".join(re.escape(suffix) for suffix in TEXT_RESOURCE_SUFFIXES) + r"))(?:\?[^'\"]*)?['\"]",
    ]
    for pattern in patterns:
        for match in re.finditer(pattern, text, re.IGNORECASE):
            for group in match.groups():
                if group:
                    references.append(group)
                    break
    return references


def extract_graphic_references(text: str) -> List[Tuple[str, str]]:
    graphics: List[Tuple[str, str]] = []
    for match in re.finditer(r'<graphic\b[^>]*\bgraphicname\s*=\s*"([^"]+)"', text, re.IGNORECASE):
        graphic_name = match.group(1).strip()
        if not graphic_name:
            continue
        if "." in graphic_name:
            graphic_base, graphic_type = graphic_name.rsplit(".", 1)
        else:
            graphic_base, graphic_type = graphic_name, "jpg"
        graphics.append((graphic_base, graphic_type.lower()))
    return graphics


def extract_symbol_references(text: str) -> List[str]:
    symbols: List[str] = []
    for match in re.finditer(r"(?:\.\./|/)?symbol/([A-Za-z0-9_-]+\.png)", text, re.IGNORECASE):
        symbol_name = match.group(1)
        if symbol_name:
            symbols.append(symbol_name)
    return symbols


def build_graphic_urls(remote_base_url: str, graphic_folder: str, graphic_base: str, graphic_extension: str) -> List[str]:
    candidates: List[str] = []

    # Legacy/manual links sometimes resolve from NAVI pages and use this path shape.
    relative_candidate = normalize_url(remote_base_url, f"../../image/{graphic_folder}/{graphic_base}.{graphic_extension}")
    if relative_candidate:
        candidates.append(relative_candidate)

    parsed = urlparse(remote_base_url)
    if "/xml/" in parsed.path:
        path_before_xml = parsed.path.split("/xml/", 1)[0]
        xml_image_url = f"{parsed.scheme}://{parsed.netloc}{path_before_xml}/xml/image/{graphic_folder}/{graphic_base}.{graphic_extension}"
        root_image_url = f"{parsed.scheme}://{parsed.netloc}{path_before_xml}/image/{graphic_folder}/{graphic_base}.{graphic_extension}"
        candidates.insert(0, xml_image_url)
        candidates.append(root_image_url)

    deduped: List[str] = []
    seen: set[str] = set()
    for candidate in candidates:
        if candidate in seen:
            continue
        seen.add(candidate)
        deduped.append(candidate)
    return deduped


def graphic_folder_candidates(graphic_base: str) -> List[str]:
    candidates: List[str] = []
    if graphic_base.startswith("I"):
        if len(graphic_base) >= 6:
            candidates.append(graphic_base[:6])
        if len(graphic_base) >= 4:
            candidates.append(graphic_base[:4])
    elif graphic_base.startswith("T"):
        candidates.append("TOOL")
        if len(graphic_base) >= 4:
            candidates.append(graphic_base[:4])
    elif len(graphic_base) >= 4:
        candidates.append(graphic_base[:4])

    deduped: List[str] = []
    seen: set[str] = set()
    for candidate in candidates:
        if not candidate or candidate in seen:
            continue
        seen.add(candidate)
        deduped.append(candidate)
    return deduped


def graphic_extension_candidates(graphic_type: str) -> List[str]:
    normalized = (graphic_type or "").lower()
    candidates: List[str]
    if normalized == "swf":
        candidates = ["svg", "swf"]
    elif normalized in {"jpg", "jpeg"}:
        candidates = ["jpg", "jpeg"]
    else:
        candidates = [normalized] if normalized else []

    # Some manuals reference inconsistent graphic types; include practical fallbacks.
    for fallback in ["svg", "jpg"]:
        if fallback not in candidates:
            candidates.append(fallback)

    return [candidate for candidate in candidates if candidate]


def download_referenced_resources(output_dir: Path, origin: str, url_map: Dict[str, Path]) -> None:
    scanned_files: set[Path] = set()
    while True:
        downloaded_any = False
        for local_path in output_dir.rglob("*"):
            if not local_path.is_file() or local_path in scanned_files:
                continue
            if local_path.suffix.lower() not in {".css", ".htm", ".html", ".js", ".txt", ".xsl", ".xslt", ".xml"}:
                scanned_files.add(local_path)
                continue
            scanned_files.add(local_path)
            try:
                text = local_path.read_text(encoding="utf-8", errors="ignore")
            except Exception:
                continue
            remote_base_url = remote_url_for_local_path(local_path, output_dir, origin)
            if not remote_base_url:
                continue

            soup = BeautifulSoup(text, "html.parser")
            for tag in soup.find_all(True):
                for attr in ["href", "src", "srcset"]:
                    if not tag.has_attr(attr):
                        continue
                    value = tag.get(attr) or ""
                    if attr == "srcset":
                        for item in value.split(","):
                            item = item.strip()
                            if not item:
                                continue
                            segments = item.split()
                            if not segments:
                                continue
                            raw_reference = segments[0].replace("\\", "/")
                            resource_url = normalize_url(remote_base_url, raw_reference)
                            if not resource_url or not same_origin(resource_url, origin):
                                continue
                            resource_path = output_path_for_url(resource_url, output_dir, origin)
                            if resource_url not in url_map:
                                url_map[resource_url] = resource_path
                            if not resource_path.exists() and download_url(resource_url, resource_path):
                                downloaded_any = True
                        continue

                    raw_reference = value.replace("\\", "/")
                    resource_url = normalize_url(remote_base_url, raw_reference)
                    if not resource_url or not same_origin(resource_url, origin):
                        continue
                    resource_path = output_path_for_url(resource_url, output_dir, origin)
                    if resource_url not in url_map:
                        url_map[resource_url] = resource_path
                    if not resource_path.exists() and download_url(resource_url, resource_path):
                        downloaded_any = True

            for raw_reference in extract_resource_references(text):
                resource_url = normalize_url(remote_base_url, raw_reference.replace("\\", "/"))
                if not resource_url or not same_origin(resource_url, origin):
                    continue
                resource_path = output_path_for_url(resource_url, output_dir, origin)
                if resource_url not in url_map:
                    url_map[resource_url] = resource_path
                if not resource_path.exists() and download_url(resource_url, resource_path):
                    downloaded_any = True

            for graphic_base, graphic_type in extract_graphic_references(text):
                if graphic_base.startswith("I"):
                    graphic_folder = graphic_base[:6]
                elif graphic_base.startswith("T"):
                    graphic_folder = "TOOL"
                else:
                    graphic_folder = graphic_base[:4]
                if graphic_type == "swf":
                    graphic_extension = "svg"
                elif graphic_type in {"jpg", "jpeg"}:
                    graphic_extension = "jpg"
                else:
                    graphic_extension = graphic_type
                for graphic_url in build_graphic_urls(remote_base_url, graphic_folder, graphic_base, graphic_extension):
                    if not graphic_url or not same_origin(graphic_url, origin):
                        continue
                    graphic_path = output_path_for_url(graphic_url, output_dir, origin)
                    if graphic_url not in url_map:
                        url_map[graphic_url] = graphic_path
                    if graphic_path.exists():
                        break
                    if download_url(graphic_url, graphic_path):
                        downloaded_any = True
                        break

        if not downloaded_any:
            break


def download_all_graphic_assets(output_dir: Path, origin: str, url_map: Dict[str, Path]) -> None:
    for local_path in output_dir.rglob("*.xml"):
        if not local_path.is_file():
            continue
        remote_base_url = remote_url_for_local_path(local_path, output_dir, origin)
        if not remote_base_url:
            continue
        try:
            text = local_path.read_text(encoding="utf-8", errors="ignore")
        except Exception:
            continue

        for graphic_base, graphic_type in extract_graphic_references(text):
            downloaded = False
            for graphic_folder in graphic_folder_candidates(graphic_base):
                for graphic_extension in graphic_extension_candidates(graphic_type):
                    for graphic_url in build_graphic_urls(remote_base_url, graphic_folder, graphic_base, graphic_extension):
                        if not graphic_url or not same_origin(graphic_url, origin):
                            continue
                        graphic_path = output_path_for_url(graphic_url, output_dir, origin)
                        if graphic_url not in url_map:
                            url_map[graphic_url] = graphic_path
                        if graphic_path.exists() or download_url(graphic_url, graphic_path):
                            downloaded = True
                            break
                    if downloaded:
                        break
                if downloaded:
                    break


def ensure_required_static_assets(start_url: str, output_dir: Path, origin: str) -> None:
    required_assets = [
        (normalize_url(start_url, "../config8/suzukimain_e.css"), "config8/suzukimain_e.css"),
        (normalize_url(start_url, "../icon/attenmark.gif"), "icon/attenmark.gif"),
        (normalize_url(start_url, "../icon/closed.gif"), "icon/closed.gif"),
        (normalize_url(start_url, "../icon/doc.gif"), "icon/doc.gif"),
        (normalize_url(start_url, "../icon/help.gif"), "icon/help.gif"),
        (normalize_url(start_url, "../icon/intxreftitleoff.png"), "icon/intxreftitleoff.png"),
        (normalize_url(start_url, "../icon/next.gif"), "icon/next.gif"),
        (normalize_url(start_url, "../icon/open.gif"), "icon/open.gif"),
        (normalize_url(start_url, "../icon/precaution.gif"), "icon/precaution.gif"),
        (normalize_url(start_url, "../icon/prev.gif"), "icon/prev.gif"),
        (normalize_url(start_url, "../icon/print.gif"), "icon/print.gif"),
        (normalize_url(start_url, "../icon/return.gif"), "icon/return.gif"),
        (normalize_url(start_url, "../icon/sie_bg.gif"), "icon/sie_bg.gif"),
        (normalize_url(start_url, "../icon/top_back.gif"), "icon/top_back.gif"),
        (normalize_url(start_url, "../icon/undo.gif"), "icon/undo.gif"),
        (normalize_url(start_url, "../icon/zoom.gif"), "icon/zoom.gif"),
    ]

    for source_url, target_rel in required_assets:
        if not source_url:
            continue
        source_path = output_path_for_url(source_url, output_dir, origin)
        remote_bytes: Optional[bytes] = None
        try:
            request = urllib.request.Request(source_url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(request, timeout=30) as response:
                remote_bytes = response.read()
        except Exception:
            pass

        if remote_bytes is not None:
            ensure_parent(source_path)
            if not source_path.exists() or source_path.read_bytes() != remote_bytes:
                source_path.write_bytes(remote_bytes)
        elif not source_path.exists():
            download_url(source_url, source_path)

        if not source_path.exists():
            continue

        target_path = output_dir / target_rel
        ensure_parent(target_path)
        if target_path.exists():
            try:
                if target_path.stat().st_size == source_path.stat().st_size and target_path.read_bytes() == source_path.read_bytes():
                    continue
            except Exception:
                pass
        shutil.copy2(source_path, target_path)


def ensure_foreword_html_assets(start_url: str, output_dir: Path, origin: str, url_map: Dict[str, Path]) -> None:
    for index in range(1, 7):
        foreword_id = f"Foreword{index:02d}"
        foreword_url = normalize_url(start_url, f"./{foreword_id}/{foreword_id}.htm")
        if not foreword_url:
            continue
        foreword_path = output_path_for_url(foreword_url, output_dir, origin)
        if foreword_url not in url_map:
            url_map[foreword_url] = foreword_path
        if foreword_path.exists():
            continue
        download_url(foreword_url, foreword_path)


def ensure_symbol_assets(start_url: str, output_dir: Path, origin: str, url_map: Dict[str, Path]) -> None:
    common_symbols = {
        "MAALERT.png",
        "MAC366E.png",
        "MACONTACTBAN.png",
        "MADISASSEMBLEBAN.png",
        "MAGA.png",
        "MAGC.png",
        "MAGE.png",
        "MAGH.png",
        "MAGI.png",
        "MAG.png",
        "MAFLD.png",
        "MAL1322.png",
        "MAL1333B.png",
        "MAL1342.png",
        "MAMANUAL.png",
        "MANOTE.png",
        "MASI.png",
        "MAB1207B.png",
        "MAB1207F.png",
        "MAB1215.png",
        "MAB1216B.png",
        "MADONOT.png",
        "MAOIL.png",
        "MACIRCLE_W.png",
        "MAB1217G.png",
        "MATORQUE.png",
        "MATORQUE-A.png",
        "MATORQUE-B.png",
        "MATORQUE-C.png",
        "MATORQUE-D.png",
        "MATORQUE-E.png",
        "MATORQUE-F.png",
    }

    discovered_symbols = set(common_symbols)
    for local_path in output_dir.rglob("*"):
        if not local_path.is_file():
            continue
        if local_path.suffix.lower() not in {".css", ".htm", ".html", ".js", ".txt", ".xsl", ".xslt", ".xml"}:
            continue
        try:
            text = local_path.read_text(encoding="utf-8", errors="ignore")
        except Exception:
            continue
        discovered_symbols.update(extract_symbol_references(text))

    symbol_root = output_dir / "symbol"
    symbol_root.mkdir(parents=True, exist_ok=True)

    for symbol_name in sorted(discovered_symbols):
        source_url = normalize_url(start_url, f"../symbol/{symbol_name}")
        if not source_url:
            continue
        source_path = output_path_for_url(source_url, output_dir, origin)
        if source_url not in url_map:
            url_map[source_url] = source_path
        if not source_path.exists():
            download_url(source_url, source_path)
        if not source_path.exists():
            continue

        target_path = symbol_root / symbol_name
        if target_path.exists():
            try:
                if target_path.stat().st_size == source_path.stat().st_size and target_path.read_bytes() == source_path.read_bytes():
                    continue
            except Exception:
                pass
        ensure_parent(target_path)
        shutil.copy2(source_path, target_path)


def _looks_like_placeholder_svg(path: Path) -> bool:
    if path.suffix.lower() != ".svg":
        return False
    if path.stat().st_size > 1024:
        return False
    try:
        text = path.read_text(encoding="utf-8", errors="ignore")
    except Exception:
        return False
    return "viewBox=\"0 0 16 16\"" in text and "fill=\"#f0f0f0\"" in text


def _looks_like_placeholder_jpg(path: Path) -> bool:
    if path.suffix.lower() not in {".jpg", ".jpeg"}:
        return False
    size = path.stat().st_size
    return 200 <= size <= 1200


def hydrate_placeholder_images(start_url: str, output_dir: Path, origin: str) -> None:
    image_root = output_dir / "image"
    if not image_root.exists():
        return

    for local_image in image_root.rglob("*"):
        if not local_image.is_file():
            continue
        if not (_looks_like_placeholder_svg(local_image) or _looks_like_placeholder_jpg(local_image)):
            continue

        rel = local_image.relative_to(image_root).as_posix()
        remote_url = normalize_url(start_url, f"../image/{rel}")
        if not remote_url:
            continue

        canonical_path = output_path_for_url(remote_url, output_dir, origin)
        if not canonical_path.exists():
            download_url(remote_url, canonical_path)
        if not canonical_path.exists() or canonical_path == local_image:
            continue

        # Only replace placeholder files; leave non-placeholder local files untouched.
        if _looks_like_placeholder_svg(local_image) or _looks_like_placeholder_jpg(local_image):
            ensure_parent(local_image)
            shutil.copy2(canonical_path, local_image)


def relative_path_for(local_path: Path, current_page: Path) -> str:
    try:
        return os.path.relpath(local_path, current_page.parent)
    except ValueError:
        return local_path.name


def frame_output_path(start_url: str, frame_name: str, output_dir: Path, origin: str) -> Path:
    parsed = urlparse(start_url)
    path = Path(parsed.path or "/")
    if frame_name == "NAVI":
        if path.name.lower() == "navi.html" and path.parent.name.lower() == "navi":
            frame_path = path
        elif path.name.lower() in {"index.html", "index.htm"}:
            frame_path = path.parent / "navi" / "navi.html"
        else:
            frame_path = path.parent / "navi" / "navi.html"
    elif frame_name in {"CTL", "TOP", "MAIN"}:
        if path.name.lower() == "navi.html" and path.parent.name.lower() == "navi":
            frame_path = path.parent / f"{frame_name.lower()}.html"
        else:
            frame_path = path.parent / "navi" / f"{frame_name.lower()}.html"
    else:
        frame_path = path.parent / f"{frame_name.lower()}.html"
    return output_path_for_url(f"{origin}{frame_path.as_posix()}", output_dir, origin)


def frame_url_for(start_url: str, frame_name: str, origin: str) -> str:
    parsed = urlparse(start_url)
    path = Path(parsed.path or "/")
    if path.name.lower() in {"index.html", "index.htm"}:
        frame_path = path.parent / "navi" / f"{frame_name.lower()}.html"
    elif path.parent.name.lower() == "navi":
        frame_path = path.parent / f"{frame_name.lower()}.html"
    else:
        frame_path = path.parent / "navi" / f"{frame_name.lower()}.html"
    return f"{origin}{frame_path.as_posix()}"


def rewrite_srcset(value: str, current_page: Path, output_dir: Path, url_map: Dict[str, Path], origin: str) -> str:
    parts = []
    for item in value.split(","):
        item = item.strip()
        if not item:
            continue
        segments = item.split()
        if not segments:
            continue
        url = normalize_url(str(current_page), segments[0]) if False else None
        parts.append(item)
    return ", ".join(parts)


def rewrite_popup_handlers(soup: BeautifulSoup, base_url: str, current_page: Path, output_dir: Path, url_map: Dict[str, Path], origin: str) -> None:
    for element in soup.find_all(True):
        popup_url = None
        onclick = element.get("onclick")
        if onclick:
            match = re.search(r"window\.open\((?:'|\")([^'\")]+)(?:'|\")", onclick)
            if match:
                popup_url = normalize_url(base_url, match.group(1))
        if not popup_url:
            href = element.get("href", "")
            if href.lower().startswith("javascript:"):
                match = re.search(r"window\.open\((?:'|\")([^'\")]+)(?:'|\")", href)
                if match:
                    popup_url = normalize_url(base_url, match.group(1))
        if not popup_url or not same_origin(popup_url, origin):
            continue
        local_path = url_map.get(popup_url) or output_path_for_url(popup_url, output_dir, origin)
        if popup_url not in url_map:
            url_map[popup_url] = local_path
        element.attrs.pop("onclick", None)
        element["href"] = relative_path_for(local_path, current_page)
        element["target"] = "_blank"


def build_load_sie_url(base_url: str, sie_id: str) -> Optional[str]:
    parsed = urlparse(base_url)
    current_path = Path(parsed.path or "/")
    if current_path.name.lower() in {"navi.html", "index.html", "index.htm", "ctl.html", "top.html", "main.html"} and current_path.parent.name.lower() == "navi":
        relative_candidates = [f"../{sie_id}/{sie_id}.htm", f"../{sie_id}/{sie_id}.html"]
    else:
        relative_candidates = [f"{sie_id}/{sie_id}.htm", f"{sie_id}/{sie_id}.html"]

    for relative_candidate in relative_candidates:
        resolved = normalize_url(base_url, relative_candidate)
        if resolved:
            return resolved
    return None


def inject_navigation_behavior(soup: BeautifulSoup) -> None:
    if soup.find("script", attrs={"id": "offline-navigation-behavior"}):
        return
    script = """
<script id="offline-navigation-behavior" type="text/javascript">
if (typeof parent !== 'undefined' && parent.TOP && !parent.TOP.xmlloader) {
    parent.TOP.xmlloader = {
        loadWebdocVars1: function() { return ''; },
        loadWebdocVars2: function() { return ''; },
        rewriteByMode: function() {}
    };
}
if (typeof window.initNavi !== 'function') {
    window.initNavi = function() {};
}
if (typeof window.setModelInfo !== 'function') {
    window.setModelInfo = function() {};
}
function toggle(id) {
  var block = document.getElementById('blk' + id);
  if (!block) {
    return false;
  }
  block.style.display = block.style.display === 'none' ? '' : 'none';
  return false;
}
</script>
"""
    fragment = BeautifulSoup(script, "html.parser")
    if soup.head is not None:
        soup.head.append(fragment.script)
    elif soup.body is not None:
        soup.body.insert(0, fragment.script)


def build_content_url(base_url: str, content_id: str) -> Optional[str]:
    if not content_id:
        return None
    parsed = urlparse(base_url)
    path = Path(parsed.path or "/")
    if path.name.lower() in {"navi.html", "index.html", "index.htm", "ctl.html", "top.html", "main.html"} and path.parent.name.lower() == "navi":
        relative_candidates = [f"../{content_id}.xml", f"../../{content_id}.xml", f"{content_id}.xml"]
    else:
        relative_candidates = [f"../{content_id}.xml", f"{content_id}.xml"]
    for relative_candidate in relative_candidates:
        resolved = normalize_url(base_url, relative_candidate)
        if resolved:
            return resolved
    return None


def seed_manual_xml_tree(start_url: str, output_dir: Path, origin: str, url_map: Dict[str, Path]) -> None:
    xml_base_url = normalize_url(start_url, ".")
    if not xml_base_url:
        return

    structure_queue: List[str] = []
    seen_structures: set[str] = set()
    seen_content: set[str] = set()

    for name in [
        "webdocstructure.xml",
        "webdocstructure_vars1.xml",
        "webdocstructure_vars2.xml",
        "webdocstructure-dtc.xml",
        "webdocstructure-sym.xml",
    ]:
        structure_url = normalize_url(xml_base_url, name)
        if structure_url and same_origin(structure_url, origin) and structure_url not in seen_structures:
            seen_structures.add(structure_url)
            structure_queue.append(structure_url)

    while structure_queue:
        structure_url = structure_queue.pop()
        structure_path = save_html_document(structure_url, output_dir, origin, url_map)
        if not structure_path.exists():
            continue

        try:
            structure_text = structure_path.read_text(encoding="utf-8", errors="ignore")
        except Exception:
            continue

        entry_ids: set[str] = set()
        chapter_prefixes: set[str] = set()

        try:
            root = ET.fromstring(structure_text)
            for element in root.findall(".//*[@i]"):
                entry_id = (element.attrib.get("i") or "").strip()
                if entry_id:
                    entry_ids.add(entry_id)
                    if re.fullmatch(r"[0-9A-Z]{1,2}", entry_id):
                        chapter_prefixes.add(entry_id.zfill(2))
        except ET.ParseError:
            pass

        # Vars files include large comma-separated ID lists in text nodes.
        for entry_id in re.findall(r"\bAENLSB0A[0-9A-Z]{4,}\b", structure_text):
            entry_ids.add(entry_id)

        for section_id in re.findall(r"webdocstructure_([0-9A-Z]{1,4})\.xml", structure_text):
            chapter_prefixes.add(section_id.zfill(2) if len(section_id) == 1 else section_id)

        for entry_id in entry_ids:
            match = re.match(r"AENLSB0A([0-9A-Z]{2})", entry_id)
            if match:
                chapter_prefixes.add(match.group(1))

        for entry_id in entry_ids:
            content_url = normalize_url(xml_base_url, f"{entry_id}.xml")
            if content_url and same_origin(content_url, origin) and content_url not in seen_content:
                seen_content.add(content_url)
                save_html_document(content_url, output_dir, origin, url_map)

            nested_structure_url = normalize_url(xml_base_url, f"webdocstructure_{entry_id}.xml")
            if nested_structure_url and same_origin(nested_structure_url, origin) and nested_structure_url not in seen_structures:
                seen_structures.add(nested_structure_url)
                structure_queue.append(nested_structure_url)

            if entry_id.isdigit() and len(entry_id) == 1:
                padded_nested_url = normalize_url(xml_base_url, f"webdocstructure_0{entry_id}.xml")
                if padded_nested_url and same_origin(padded_nested_url, origin) and padded_nested_url not in seen_structures:
                    seen_structures.add(padded_nested_url)
                    structure_queue.append(padded_nested_url)

        for chapter_prefix in chapter_prefixes:
            chapter_structure_url = normalize_url(xml_base_url, f"webdocstructure_{chapter_prefix}.xml")
            if chapter_structure_url and same_origin(chapter_structure_url, origin) and chapter_structure_url not in seen_structures:
                seen_structures.add(chapter_structure_url)
                structure_queue.append(chapter_structure_url)


def build_navigation_block_html(section_id: str, base_url: str, current_page: Path, output_dir: Path, url_map: Dict[str, Path], origin: str) -> str:
    if not section_id:
        return ""
    doc_url = normalize_url(base_url, f"../webdocstructure_{section_id}.xml")
    if not doc_url:
        return ""

    local_doc_path = save_html_document(doc_url, output_dir, origin, url_map)
    if not local_doc_path.exists():
        return ""

    try:
        xml_text = local_doc_path.read_text(encoding="utf-8", errors="ignore")
        root = ET.fromstring(xml_text)
    except (ET.ParseError, UnicodeDecodeError):
        return ""

    fragments: List[str] = []
    for section in root.findall(".//t"):
        section_title = (section.attrib.get("t") or "").strip()
        if not section_title:
            continue
        item_fragments: List[str] = []
        for entry in section.findall("s"):
            entry_title = (entry.attrib.get("t") or "").strip()
            entry_id = (entry.attrib.get("i") or "").strip()
            if not entry_title or not entry_id:
                continue
            content_url = build_content_url(base_url, entry_id)
            if not content_url:
                continue
            local_content_path = save_html_document(content_url, output_dir, origin, url_map)
            href = relative_path_for(local_content_path, current_page)
            if not href.startswith(".") and not href.startswith("/"):
                href = f"./{href}"
            item_fragments.append(
                f'<a href="{href}" target="MAIN" title="{escape(entry_title)}"><div class="sie">{escape(entry_title)}</div></a>'
            )
        if item_fragments:
            fragments.append(
                f'<div class="subsection"><div class="subsection-title">{escape(section_title)}</div>{"".join(item_fragments)}</div>'
            )

    if fragments:
        return "".join(fragments)
    return ""


def build_navigation_document(start_url: str, navi_url: str, current_page: Path, output_dir: Path, url_map: Dict[str, Path], origin: str) -> str:
    def parse_xml_relaxed(xml_text: str) -> Optional[ET.Element]:
        # Suzuki structure XML includes xml-stylesheet + DOCTYPE/entity blocks
        # that ElementTree cannot parse directly.
        cleaned = re.sub(r"<\?xml-stylesheet[^>]*\?>", "", xml_text, flags=re.IGNORECASE)
        cleaned = re.sub(r"<!DOCTYPE[^>]*\[[\s\S]*?\]>", "", cleaned, flags=re.IGNORECASE)
        cleaned = re.sub(r"<!DOCTYPE[^>]*>", "", cleaned, flags=re.IGNORECASE)
        try:
            return ET.fromstring(cleaned)
        except ET.ParseError:
            return None

    structure_url = normalize_url(start_url, "./webdocstructure.xml")
    if not structure_url:
        return ""

    structure_path = save_html_document(structure_url, output_dir, origin, url_map)
    if not structure_path.exists():
        return ""

    root = parse_xml_relaxed(structure_path.read_text(encoding="utf-8", errors="ignore"))
    if root is None:
        return ""

    manual_title = (root.find("./manual").attrib.get("manualname") if root.find("./manual") is not None else "Suzuki Manual").strip()
    sections: List[str] = []

    def content_href(entry_id: str) -> Optional[str]:
        content_url = normalize_url(start_url, f"./{entry_id}.xml")
        if not content_url:
            return None
        local_content = save_html_document(content_url, output_dir, origin, url_map)
        return relative_path_for(local_content, current_page)

    def build_entry_link(entry_id: str, title: str) -> str:
        href = content_href(entry_id)
        if not href:
            return ""
        return (
            f'<a href="{href}" target="MAIN" title="{escape(title)}">'
            f'<div class="sie"><img class="mark" src="../../icon/doc.gif" alt="doc" />{escape(title)}</div>'
            f'</a>'
        )

    foreword = root.find("./a[@i='a']")
    if foreword is not None:
        foreword_items: List[str] = []
        for entry in foreword.findall("./s"):
            entry_id = (entry.attrib.get("i") or "").strip()
            entry_title = (entry.attrib.get("t") or entry_id).strip()
            if not entry_id:
                continue
            link_html = build_entry_link(entry_id, entry_title)
            if link_html:
                foreword_items.append(link_html)
        if foreword_items:
            sections.append(
                "".join(
                    [
                        '<a href="#" onclick="return toggle(\'a\');"><div class="sct"><img class="mark" id="imga" src="../../icon/open.gif" alt="toggle" />IMPORTANT / FOREWORD</div></a>',
                        '<div id="blka" style="display:block">',
                        *foreword_items,
                        "</div>",
                    ]
                )
            )

    for section in root.findall("./a"):
        section_id = (section.attrib.get("i") or "").strip()
        if not section_id or section_id == "a":
            continue

        section_url = normalize_url(start_url, f"./webdocstructure_{section_id}.xml")
        if not section_url:
            continue
        section_path = save_html_document(section_url, output_dir, origin, url_map)
        if not section_path.exists():
            continue
        section_root = parse_xml_relaxed(section_path.read_text(encoding="utf-8", errors="ignore"))
        if section_root is None:
            continue

        section_title = (section_root.attrib.get("t") or section_id).strip()
        section_children: List[str] = []
        for config in section_root.findall("./c"):
            config_title = (config.attrib.get("t") or "").strip()
            if config_title:
                section_children.append(f'<div class="sc">{escape(config_title)}</div>')
            for topic in config.findall("./t"):
                topic_title = (topic.attrib.get("t") or "").strip()
                if topic_title:
                    section_children.append(f'<div class="sit">{escape(topic_title)}</div>')
                for entry in topic.findall("./s"):
                    entry_id = (entry.attrib.get("i") or "").strip()
                    entry_title = (entry.attrib.get("t") or entry_id).strip()
                    if not entry_id:
                        continue
                    link_html = build_entry_link(entry_id, entry_title)
                    if link_html:
                        section_children.append(link_html)

        if not section_children:
            continue

        sections.append(
            "".join(
                [
                    f'<a href="#" onclick="return toggle(\'{escape(section_id)}\');"><div class="sct"><img class="mark" id="img{escape(section_id)}" src="../../icon/closed.gif" alt="toggle" />{escape(section_title)}</div></a>',
                    f'<div id="blk{escape(section_id)}" style="display:none">',
                    *section_children,
                    "</div>",
                ]
            )
        )

    if not sections:
        return ""

    return f"""<!doctype html>
<html lang=\"en\">
  <head>
    <meta charset=\"utf-8\" />
    <title>{escape(manual_title)}</title>
    <link rel=\"stylesheet\" href=\"../../config8/navi.css\" />
        <script>
            function toggle(id) {{
                var block = document.getElementById('blk' + id);
                var img = document.getElementById('img' + id);
                if (!block) {{
                    return false;
                }}
                var hidden = block.style.display === 'none';
                block.style.display = hidden ? '' : 'none';
                if (img) {{
                    img.src = hidden ? '../../icon/open.gif' : '../../icon/closed.gif';
                }}
                return false;
            }}
        </script>
  </head>
  <body>
    {''.join(sections)}
  </body>
</html>
"""


def populate_navigation_block(block: BeautifulSoup, section_id: str, base_url: str, current_page: Path, output_dir: Path, url_map: Dict[str, Path], origin: str) -> None:
    rendered = build_navigation_block_html(section_id, base_url, current_page, output_dir, url_map, origin)
    if not rendered:
        return
    block.clear()
    block.append(BeautifulSoup(rendered, "html.parser"))


def rewrite_navigation_links(soup: BeautifulSoup, base_url: str, current_page: Path, output_dir: Path, url_map: Dict[str, Path], origin: str) -> None:
    if current_page.name.lower() == "navi.html" or current_page.name.lower() == "navi.htm":
        inject_navigation_behavior(soup)

    for block in soup.find_all("div", id=re.compile(r"^blk")):
        section_id = block.get("id", "")[3:]
        if not section_id:
            continue
        if block.get_text(" ", strip=True) == "Loading...":
            populate_navigation_block(block, section_id, base_url, current_page, output_dir, url_map, origin)

    for element in soup.find_all("a"):
        href = element.get("href", "")
        if not href.lower().startswith("javascript:"):
            continue
        load_sie_match = re.search(r"loadSIE\s*\(\s*['\"]([^'\")]+)", href, re.IGNORECASE)
        if load_sie_match:
            target_url = build_load_sie_url(base_url, load_sie_match.group(1))
            if not target_url or not same_origin(target_url, origin):
                continue
            local_path = url_map.get(target_url)
            if local_path is None:
                local_path = save_html_document(target_url, output_dir, origin, url_map)
                url_map[target_url] = local_path
            element["href"] = relative_path_for(local_path, current_page)
            element["target"] = "MAIN"
            continue

        popup_match = re.search(r"window\.open\((?:'|\")([^'\")]+)(?:'|\")", href)
        if popup_match:
            target_url = normalize_url(base_url, popup_match.group(1))
            if not target_url or not same_origin(target_url, origin):
                continue
            local_path = url_map.get(target_url)
            if local_path is None:
                local_path = save_html_document(target_url, output_dir, origin, url_map)
                url_map[target_url] = local_path
            element["href"] = relative_path_for(local_path, current_page)
            element["target"] = "_blank"


def rewrite_html_links(soup: BeautifulSoup, base_url: str, current_page: Path, output_dir: Path, url_map: Dict[str, Path], origin: str) -> None:
    for tag in soup.find_all(["a", "img", "script", "link", "iframe", "audio", "video", "source", "frame"]):
        for attr in ["href", "src", "srcset"]:
            if not tag.has_attr(attr):
                continue
            value = tag[attr]
            if not value:
                continue
            if attr == "srcset":
                parts = []
                for item in value.split(","):
                    item = item.strip()
                    if not item:
                        continue
                    segments = item.split()
                    if not segments:
                        continue
                    resource_url = normalize_url(base_url, segments[0])
                    if resource_url and same_origin(resource_url, origin):
                        resource_path = url_map.get(resource_url) or output_path_for_url(resource_url, output_dir, origin)
                        if resource_url not in url_map:
                            url_map[resource_url] = resource_path
                        segments[0] = relative_path_for(resource_path, current_page)
                    parts.append(" ".join(segments))
                tag[attr] = ", ".join(parts)
                continue

            resource_url = normalize_url(base_url, value)
            if not resource_url or not same_origin(resource_url, origin):
                continue
            resource_path = url_map.get(resource_url) or output_path_for_url(resource_url, output_dir, origin)
            if resource_url not in url_map:
                url_map[resource_url] = resource_path
            if resource_path and not resource_path.exists():
                download_url(resource_url, resource_path)
            tag[attr] = relative_path_for(resource_path, current_page)


def save_page(page, url: str, output_dir: Path, origin: str, url_map: Dict[str, Path]) -> Path:
    local_path = output_path_for_url(url, output_dir, origin)
    if not local_path.exists():
        page.goto(url, wait_until="networkidle", timeout=60000)
    html = page.content()
    soup = BeautifulSoup(html, "html.parser")
    rewrite_popup_handlers(soup, url, local_path, output_dir, url_map, origin)
    rewrite_navigation_links(soup, url, local_path, output_dir, url_map, origin)
    rewrite_html_links(soup, url, local_path, output_dir, url_map, origin)
    ensure_parent(local_path)
    local_path.write_text(str(soup), encoding="utf-8")
    return local_path


def capture_frame_documents(page, start_url: str, output_dir: Path, origin: str, url_map: Dict[str, Path]) -> List[Tuple[str, Path]]:
    saved = []
    frame_names = ["CTL", "TOP", "NAVI", "MAIN"]

    def fetch_frame_html(frame_url: str) -> str:
        try:
            request = urllib.request.Request(frame_url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(request, timeout=30) as response:
                return response.read().decode(response.headers.get_content_charset() or "utf-8", errors="ignore")
        except Exception:
            return ""

    for frame_name in frame_names:
        local_path = frame_output_path(start_url, frame_name, output_dir, origin)
        if local_path.exists():
            frame_url = remote_url_for_local_path(local_path, output_dir, origin) or str(local_path)
            html = local_path.read_text(encoding="utf-8", errors="ignore") or ""
            if not html.strip() and frame_url.startswith("http"):
                html = fetch_frame_html(frame_url)
            html = html or ""
            soup = BeautifulSoup(html, "html.parser")
            rewrite_popup_handlers(soup, frame_url, local_path, output_dir, url_map, origin)
            rewrite_navigation_links(soup, frame_url, local_path, output_dir, url_map, origin)
            rewrite_html_links(soup, frame_url, local_path, output_dir, url_map, origin)
            ensure_parent(local_path)
            local_path.write_text(str(soup), encoding="utf-8")
            saved.append((frame_name, local_path))
            continue

        frame = page.frame(name=frame_name)
        frame_url = frame.url if frame is not None and frame.url and not frame.url.startswith("about:") else frame_url_for(start_url, frame_name, origin)
        if frame is not None and frame.url and not frame.url.startswith("about:"):
            html = frame.content() or ""
            if not html.strip():
                html = fetch_frame_html(frame_url)
        else:
            html = fetch_frame_html(frame_url)
        if frame_name == "NAVI" and not html.strip():
            html = build_navigation_document(start_url, frame_url, local_path, output_dir, url_map, origin)
        html = html or ""
        soup = BeautifulSoup(html, "html.parser")
        rewrite_popup_handlers(soup, frame_url, local_path, output_dir, url_map, origin)
        rewrite_navigation_links(soup, frame_url, local_path, output_dir, url_map, origin)
        rewrite_html_links(soup, frame_url, local_path, output_dir, url_map, origin)
        ensure_parent(local_path)
        local_path.write_text(str(soup), encoding="utf-8")
        saved.append((frame_name, local_path))
    return saved


def build_frame_shell(output_dir: Path, frame_files: List[Tuple[str, Path]]) -> Path:
    frame_map = {name: path for name, path in frame_files}
    shell = """<!doctype html>
<html lang=\"en\">
  <head>
    <meta charset=\"utf-8\" />
    <title>Local Suzuki Manual</title>
    <style>
      :root {{ color-scheme: light; }}
      html, body {{ height: 100%; margin: 0; padding: 0; font-family: Arial, sans-serif; background: #f3f3f3; }}
      body {{ display: grid; grid-template-rows: 56px 56px 1fr; }}
      iframe {{ border: 0; display: block; width: 100%; background: white; }}
      .ctl {{ height: 56px; }}
      .top {{ height: 56px; border-bottom: 1px solid #d0d0d0; }}
      .content {{ display: grid; grid-template-columns: 320px minmax(0, 1fr); min-height: 0; }}
      .nav {{ min-width: 320px; height: 100%; border-right: 1px solid #d0d0d0; }}
      .main {{ min-width: 0; height: 100%; }}
      @media (max-width: 960px) {{
        .content {{ grid-template-columns: 1fr; }}
        .nav {{ max-height: 35vh; border-right: 0; border-bottom: 1px solid #d0d0d0; }}
      }}
    </style>
        <script>
            (function () {{
                if (window.init && typeof window.init.join === 'function') {{
                    return;
                }}
                window.init = {{
                    childwindows: [],
                    join: function (win, fn) {{
                        this.childwindows.push(win);
                        if (typeof fn === 'function') {{
                            window.setTimeout(function () {{
                                try {{
                                    fn();
                                }} catch (error) {{
                                    console.error(error);
                                }}
                            }}, 0);
                        }}
                    }}
                }};
            }})();
        </script>
  </head>
  <body>
    <iframe class=\"ctl\" name=\"CTL\" src=\"{ctl}\"></iframe>
    <iframe class=\"top\" name=\"TOP\" src=\"{top}\"></iframe>
    <div class=\"content\">
      <iframe class=\"nav\" name=\"NAVI\" src=\"{navi}\"></iframe>
      <iframe class=\"main\" name=\"MAIN\" src=\"{main}\"></iframe>
    </div>
  </body>
</html>
"""
    ctl_path = frame_map.get("CTL")
    top_path = frame_map.get("TOP")
    navi_path = frame_map.get("NAVI")
    main_path = frame_map.get("MAIN")
    if not all([ctl_path, top_path, navi_path, main_path]):
        raise RuntimeError("Missing one or more required frames.")
    shell_path = output_dir / "index.html"
    shell_path.write_text(
        shell.format(
            ctl=relative_path_for(ctl_path, shell_path),
            top=relative_path_for(top_path, shell_path),
            navi=relative_path_for(navi_path, shell_path),
            main=relative_path_for(main_path, shell_path),
        ),
        encoding="utf-8",
    )
    return shell_path


def scrape_manual(start_url: str, output_dir: Path) -> Path:
    output_dir.mkdir(parents=True, exist_ok=True)
    origin = f"{urlparse(start_url).scheme}://{urlparse(start_url).netloc}"
    url_map: Dict[str, Path] = {}

    def seed_url(url: Optional[str]) -> None:
        if not url or not same_origin(url, origin):
            return
        local_path = save_html_document(url, output_dir, origin, url_map)
        if url not in url_map:
            url_map[url] = local_path
        if local_path.exists():
            return
        local_path = output_path_for_url(url, output_dir, origin)
        if url not in url_map:
            url_map[url] = local_path
        download_url(url, local_path)

    def alias_to_output_root(source_url: Optional[str], root_relative_path: str) -> None:
        if not source_url:
            return
        source_path = output_path_for_url(source_url, output_dir, origin)
        if not source_path.exists():
            return
        target_path = output_dir / Path(root_relative_path)
        ensure_parent(target_path)
        shutil.copy2(source_path, target_path)

    def mirror_asset(source_url: Optional[str], target_url: Optional[str]) -> None:
        if not source_url or not target_url:
            return
        source_path = output_path_for_url(source_url, output_dir, origin)
        if not source_path.exists():
            download_url(source_url, source_path)
        if not source_path.exists():
            return
        target_path = output_path_for_url(target_url, output_dir, origin)
        ensure_parent(target_path)
        shutil.copy2(source_path, target_path)

    def mirror_tree_to_output_root(source_relative_path: str, root_relative_path: str) -> None:
        source_root = output_dir / source_relative_path
        if not source_root.exists() or not source_root.is_dir():
            return
        target_root = output_dir / root_relative_path
        target_root.mkdir(parents=True, exist_ok=True)
        shutil.copytree(source_root, target_root, dirs_exist_ok=True)

    bootstrap_urls = [
        normalize_url(start_url, "./webdocstructure.xml"),
        normalize_url(start_url, "../webdocstructure.xml"),
        normalize_url(start_url, "../webdocstructure_vars1.xml"),
        normalize_url(start_url, "./webdocstructure_vars1.xml"),
        normalize_url(start_url, "../../config8/suzuki_all.xsl"),
        normalize_url(start_url, "../config8/suzuki_all.xsl"),
        normalize_url(start_url, "../../config8/navi-kousei-e.xslt"),
        normalize_url(start_url, "../config8/navi-kousei-e.xslt"),
        normalize_url(start_url, "../../config8/navi-dtc-e.xslt"),
        normalize_url(start_url, "../../config8/navi-sym-e.xslt"),
        normalize_url(start_url, "../../config8/navi-subdoc.xslt"),
        normalize_url(start_url, "../config8/navi-subdoc.xslt"),
        normalize_url(start_url, "../../config8/searchindex-e.xslt"),
        normalize_url(start_url, "../../config8/search-dtc-e.xslt"),
        normalize_url(start_url, "../../config8/search-sym-e.xslt"),
        normalize_url(start_url, "../../config8/mods-list-e.xslt"),
        normalize_url(start_url, "../../config8/main-dtc.xslt"),
        normalize_url(start_url, "../../config8/main-ttm.xslt"),
        normalize_url(start_url, "../../config8/prexns.xsl"),
        normalize_url(start_url, "../icon/top_back.gif"),
        normalize_url(start_url, "../../icon/top_back.gif"),
        normalize_url(start_url, "../icon/zoom.gif"),
        normalize_url(start_url, "../../icon/zoom.gif"),
        normalize_url(start_url, "../icon/intxreftitleoff.png"),
        normalize_url(start_url, "../../icon/intxreftitleoff.png"),
        normalize_url(start_url, "../../../icon/intxreftitleoff.png"),
        normalize_url(start_url, "../webdocstructure-dtc.xml"),
        normalize_url(start_url, "../webdocstructure-sym.xml"),
        normalize_url(start_url, "../webdocstructure_vars2.xml"),
        normalize_url(start_url, "./webdocstructure_vars2.xml"),
    ]
    for bootstrap_url in bootstrap_urls:
        seed_url(bootstrap_url)

    seed_manual_xml_tree(start_url, output_dir, origin, url_map)

    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        page.goto(start_url, wait_until="networkidle", timeout=60000)
        frame_files = capture_frame_documents(page, start_url, output_dir, origin, url_map)
        shell_path = build_frame_shell(output_dir, frame_files)
        browser.close()

    download_referenced_resources(output_dir, origin, url_map)

    for url, local_path in sorted(url_map.items()):
        if local_path.exists():
            continue
        download_url(url, local_path)

    download_all_graphic_assets(output_dir, origin, url_map)

    # A final crawl captures resources referenced by files fetched in the url_map pass above.
    download_referenced_resources(output_dir, origin, url_map)

    for url, local_path in sorted(url_map.items()):
        if local_path.exists():
            continue
        download_url(url, local_path)

    # Ensure core XML/XSL assets required by stdio/stdiodom are present.
    critical_assets = [
        normalize_url(start_url, "./webdocstructure.xml"),
        normalize_url(start_url, "../webdocstructure.xml"),
        normalize_url(start_url, "../../config8/suzuki_all.xsl"),
        normalize_url(start_url, "../config8/suzuki_all.xsl"),
        normalize_url(start_url, "../../config8/navi-kousei-e.xslt"),
        normalize_url(start_url, "../config8/navi-kousei-e.xslt"),
        normalize_url(start_url, "../config8/navi-subdoc.xslt"),
        normalize_url(start_url, "../config8/navi.css"),
        normalize_url(start_url, "../../config8/navi.css"),
        normalize_url(start_url, "../config8/stdio.js"),
        normalize_url(start_url, "../../config8/stdio.js"),
        normalize_url(start_url, "../config8/stdiodom.js"),
        normalize_url(start_url, "../../config8/stdiodom.js"),
        normalize_url(start_url, "../config8/ui.js"),
        normalize_url(start_url, "../../config8/ui.js"),
        normalize_url(start_url, "../config8/suzukimain_e.css"),
        normalize_url(start_url, "../../config8/suzukimain_e.css"),
        normalize_url(start_url, "../icon/doc.gif"),
        normalize_url(start_url, "../../icon/doc.gif"),
        normalize_url(start_url, "../icon/closed.gif"),
        normalize_url(start_url, "../../icon/closed.gif"),
        normalize_url(start_url, "../icon/open.gif"),
        normalize_url(start_url, "../../icon/open.gif"),
        normalize_url(start_url, "../icon/attenmark.gif"),
        normalize_url(start_url, "../../icon/attenmark.gif"),
        normalize_url(start_url, "../icon/precaution.gif"),
        normalize_url(start_url, "../../icon/precaution.gif"),
        normalize_url(start_url, "../icon/sie_bg.gif"),
        normalize_url(start_url, "../../icon/sie_bg.gif"),
    ]
    for critical_url in critical_assets:
        seed_url(critical_url)

    # Some legacy scripts request /config8/* and /icon/* from the server root.
    # Mirror key assets to output root so serving from output_dir remains functional.
    root_aliases = [
        (normalize_url(start_url, "../config8/navi.css"), "config8/navi.css"),
        (normalize_url(start_url, "../config8/stdio.js"), "config8/stdio.js"),
        (normalize_url(start_url, "../config8/stdiodom.js"), "config8/stdiodom.js"),
        (normalize_url(start_url, "../config8/ui.js"), "config8/ui.js"),
        (normalize_url(start_url, "../config8/suzukimain_e.css"), "config8/suzukimain_e.css"),
        (normalize_url(start_url, "../config8/navi-kousei-e.xslt"), "config8/navi-kousei-e.xslt"),
        (normalize_url(start_url, "../config8/navi-subdoc.xslt"), "config8/navi-subdoc.xslt"),
        (normalize_url(start_url, "../icon/top_back.gif"), "icon/top_back.gif"),
        (normalize_url(start_url, "../../icon/top_back.gif"), "icon/top_back.gif"),
        (normalize_url(start_url, "../icon/zoom.gif"), "icon/zoom.gif"),
        (normalize_url(start_url, "../../icon/zoom.gif"), "icon/zoom.gif"),
        (normalize_url(start_url, "../icon/intxreftitleoff.png"), "icon/intxreftitleoff.png"),
        (normalize_url(start_url, "../../icon/intxreftitleoff.png"), "icon/intxreftitleoff.png"),
        (normalize_url(start_url, "../../../icon/intxreftitleoff.png"), "icon/intxreftitleoff.png"),
        (normalize_url(start_url, "../icon/doc.gif"), "icon/doc.gif"),
        (normalize_url(start_url, "../icon/closed.gif"), "icon/closed.gif"),
        (normalize_url(start_url, "../icon/open.gif"), "icon/open.gif"),
        (normalize_url(start_url, "../icon/attenmark.gif"), "icon/attenmark.gif"),
        (normalize_url(start_url, "../icon/precaution.gif"), "icon/precaution.gif"),
        (normalize_url(start_url, "../icon/sie_bg.gif"), "icon/sie_bg.gif"),
    ]
    for source_url, target_rel in root_aliases:
        alias_to_output_root(source_url, target_rel)

    mirror_asset(
        normalize_url(start_url, "../icon/intxreftitleoff.png"),
        normalize_url(start_url, "../../../icon/intxreftitleoff.png"),
    )

    mirror_tree_to_output_root(
        "dcs.suzukiauto.co.za/Upload/Downloads/Service/ServiceManuals/SWIFT_A2L310_A2L412_A2L414/xml/config8",
        "config8",
    )

    mirror_tree_to_output_root(
        "dcs.suzukiauto.co.za/Upload/Downloads/Service/ServiceManuals/SWIFT_A2L310_A2L412_A2L414/xml/icon",
        "icon",
    )

    mirror_tree_to_output_root(
        "dcs.suzukiauto.co.za/Upload/Downloads/Service/ServiceManuals/SWIFT_A2L310_A2L412_A2L414/xml/image",
        "image",
    )

    ensure_required_static_assets(start_url, output_dir, origin)
    ensure_foreword_html_assets(start_url, output_dir, origin, url_map)
    ensure_symbol_assets(start_url, output_dir, origin, url_map)
    hydrate_placeholder_images(start_url, output_dir, origin)

    return shell_path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Create a local offline copy of the Suzuki manual frameset.")
    parser.add_argument("--start-url", required=True, help="The starting page URL")
    parser.add_argument("--output-dir", default="scraped", help="Where to save the offline copy")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    shell_path = scrape_manual(args.start_url, Path(args.output_dir))
    print(f"Offline copy created at {shell_path}")


if __name__ == "__main__":
    main()
