#!/usr/bin/env python3
"""Staged Suzuki manual URL scanner.

Workflow:
1) Load model/code intelligence from model_code_sources.csv
2) Discover additional roots (root-first probing)
3) Run staged code scans (high -> medium -> deep)
4) Expand neighborhood around successful codes
5) Write cache, reports, delta, and regenerate working-urls.html
"""

from __future__ import annotations

import argparse
import csv
import itertools
import re
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, Iterable, List, Set, Tuple
from urllib.error import HTTPError
from urllib.request import Request, urlopen
import concurrent.futures


BASE_URL = "https://dcs.suzukiauto.co.za/Upload/Downloads/Service/ServiceManuals/"
ROOTS_FILE = Path("all_existing_roots.txt")
CACHE_FILE = Path("scan_cache.tsv")
SOURCES_FILE = Path("model_code_sources.csv")
REPORT_DIR = Path("scan_reports")
WORKING_HTML = Path("working-urls.html")

KNOWN_WORKING = {
    ("BREZZA", "AENLBA0C", "Vitara Brezza Service Manual"),
    ("IGNIS", "AENLJA0A", "IGNIS Service Manual"),
    ("SWIFT_A2L310_A2L412_A2L414", "AENKSB0A", "SWIFT Service Manual Type 1,2,3"),
    ("SWIFT_A2L310_A2L412_A2L414", "AENLSB0A", "SWIFT Sport Service Manual Type 4,5"),
    ("SWIFT_A2L310_A2L412_A2L414", "AENLSB0C", "SWIFT Service Manual Type 4,5"),
}

BASE_FAMILIES = ["AENL", "AENK", "AENM", "AENR", "AENH", "AENC", "AENB", "AENA"]
ROOT_FAMILY_HINTS = {
    "SWIFT_A2L310_A2L412_A2L414": ["AENS", "AENJ", "AENP"],
    "IGNIS": ["AENJ", "AENP"],
    "IGNIS_ATM412": ["AENJ", "AENP"],
    "BREZZA": ["AEND", "AENG"],
}


@dataclass(frozen=True)
class ProbeHit:
    status: int
    root: str
    code: str
    url: str


class ProbeCache:
    def __init__(self, path: Path):
        self.path = path
        self._data: Dict[str, int] = {}
        self._load()

    def _load(self) -> None:
        if not self.path.exists():
            return
        with self.path.open("r", encoding="utf-8", newline="") as f:
            reader = csv.DictReader(f, delimiter="\t")
            for row in reader:
                url = row.get("url", "")
                status = row.get("status", "")
                if url and status.isdigit():
                    self._data[url] = int(status)

    def get(self, url: str) -> int | None:
        return self._data.get(url)

    def set(self, url: str, status: int) -> None:
        self._data[url] = status

    def flush(self) -> None:
        now = datetime.now(timezone.utc).isoformat()
        with self.path.open("w", encoding="utf-8", newline="") as f:
            writer = csv.writer(f, delimiter="\t")
            writer.writerow(["url", "status", "checked_utc"])
            for url in sorted(self._data):
                writer.writerow([url, self._data[url], now])


def normalize_model_to_roots(model: str) -> Set[str]:
    model = model.strip().upper()
    if not model:
        return set()

    roots: Set[str] = set()
    parts = re.split(r"\s*/\s*|\s*-\s*", model)
    parts.append(model)

    for name in parts:
        name = name.strip().upper()
        if not name:
            continue
        roots.add(re.sub(r"[^A-Z0-9]+", "_", name).strip("_"))
        roots.add(re.sub(r"[^A-Z0-9]+", "", name))

    roots = {r for r in roots if len(r) >= 3}
    roots.discard("MODEL")
    roots.discard("DIESEL")
    return roots


def load_sources(path: Path) -> List[Dict[str, str]]:
    if not path.exists():
        return []
    with path.open("r", encoding="utf-8", newline="") as f:
        return list(csv.DictReader(f))


def build_root_candidates(rows: List[Dict[str, str]]) -> Set[str]:
    candidates: Set[str] = set()
    for row in rows:
        candidates |= normalize_model_to_roots(row.get("model", ""))
        code = row.get("code", "").strip().upper()
        if code:
            model = row.get("model", "").strip().upper()
            base_roots = normalize_model_to_roots(model)
            for root in base_roots:
                candidates.add(f"{root}_{code}")
                if "-" in code:
                    candidates.add(f"{root}_{code.replace('-', '_')}")
    candidates |= {
        "ALTO", "BALENO", "BREZZA", "CELERIO", "DZIRE", "EECO", "FRONX",
        "IGNIS", "JIMNY", "KIZASHI", "S-PRESSO", "SX4", "XL6", "SPLASH",
        "SUPER_CARRY", "SWIFT_A2L310_A2L412_A2L414", "IGNIS_ATM412",
    }
    return candidates


def request_status(url: str, timeout: int = 8) -> int:
    req = Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urlopen(req, timeout=timeout) as r:
            return r.status
    except HTTPError as e:
        return e.code
    except Exception:
        return -1


def scan_urls(url_jobs: Iterable[Tuple[str, str, str]], cache: ProbeCache, workers: int) -> List[ProbeHit]:
    """url_jobs yields (root, code, url)."""
    hits: List[ProbeHit] = []
    pending: List[Tuple[str, str, str]] = []

    for root, code, url in url_jobs:
        cached = cache.get(url)
        if cached is None:
            pending.append((root, code, url))
        elif cached in (200, 401, 403):
            hits.append(ProbeHit(cached, root, code, url))

    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as ex:
        future_map = {ex.submit(request_status, url): (root, code, url) for root, code, url in pending}
        for i, fut in enumerate(concurrent.futures.as_completed(future_map), 1):
            root, code, url = future_map[fut]
            status = fut.result()
            cache.set(url, status)
            if status in (200, 401, 403):
                hits.append(ProbeHit(status, root, code, url))
            if i % 50000 == 0:
                print(f"  progress: {i}/{len(pending)} checked, hits={len(hits)}")

    return sorted(hits, key=lambda h: (h.root, h.code, h.status))


def stage_code_set(stage: str, roots: List[str], source_rows: List[Dict[str, str]]) -> Dict[str, Set[str]]:
    codes_by_root: Dict[str, Set[str]] = {r: set() for r in roots}

    source_codes = {r.get("code", "").strip().upper() for r in source_rows if r.get("code", "").strip()}
    source_codes |= {c.replace("-", "_") for c in source_codes if "-" in c}

    known_codes = {k[1] for k in KNOWN_WORKING}

    if stage == "high":
        for r in roots:
            codes_by_root[r] |= source_codes
            codes_by_root[r] |= known_codes
    elif stage == "medium":
        for r in roots:
            fams = sorted(set(BASE_FAMILIES + ROOT_FAMILY_HINTS.get(r, [])))
            for pref in fams:
                for a in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":
                    for b in "AB":
                        for d in "012":
                            for z in "ABC":
                                codes_by_root[r].add(f"{pref}{a}{b}{d}{z}")
            codes_by_root[r] |= source_codes
            codes_by_root[r] |= known_codes
    elif stage == "deep":
        for r in roots:
            fams = sorted(set(BASE_FAMILIES + ROOT_FAMILY_HINTS.get(r, [])))
            for pref in fams:
                for a in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":
                    for b in "AB":
                        for d in "0123456789":
                            for z in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":
                                codes_by_root[r].add(f"{pref}{a}{b}{d}{z}")
            codes_by_root[r] |= source_codes
            codes_by_root[r] |= known_codes
    else:
        raise ValueError(f"Unknown stage: {stage}")

    return codes_by_root


def neighborhood_codes(codes: Set[str]) -> Set[str]:
    out: Set[str] = set()
    rx = re.compile(r"^([A-Z]{4})([A-Z])([A-Z])(\d)([A-Z])$")
    for c in codes:
        m = rx.match(c)
        if not m:
            continue
        pref, a, b, d, z = m.groups()
        # mutate each slot locally
        for nz in "ABC":
            out.add(f"{pref}{a}{b}{d}{nz}")
        for nd in [str(max(0, int(d) - 1)), d, str(min(9, int(d) + 1))]:
            out.add(f"{pref}{a}{b}{nd}{z}")
        for nb in "ABCDEFGHIJKLMNOPQRSTUVWXYZ":
            out.add(f"{pref}{a}{nb}{d}{z}")
    return out


def write_hits(path: Path, hits: List[ProbeHit]) -> None:
    with path.open("w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, delimiter="\t")
        w.writerow(["status", "root", "code", "url"])
        for h in hits:
            w.writerow([h.status, h.root, h.code, h.url])


def update_roots_file(path: Path, roots: Set[str]) -> None:
    path.write_text("\n".join(sorted(roots)) + "\n", encoding="utf-8")


def generate_html(roots: Set[str], hits_200: List[ProbeHit], out_path: Path, scan_summary: str) -> None:
    hit_rows = []
    title_map = {(r, c): t for r, c, t in KNOWN_WORKING}
    for h in sorted(hits_200, key=lambda x: (x.root, x.code)):
        title = title_map.get((h.root, h.code), "")
        hit_rows.append((h.root, h.code, title, h.url))

    roots_403 = sorted(r for r in roots if request_status(f"{BASE_URL}{r}/") == 403)

    lines = []
    lines.append("<!doctype html>")
    lines.append('<html lang="en">')
    lines.append("<head>")
    lines.append('  <meta charset="utf-8">')
    lines.append('  <meta name="viewport" content="width=device-width, initial-scale=1">')
    lines.append('  <title>Suzuki Service Manual Working URLs</title>')
    lines.append("</head>")
    lines.append("<body style=\"font-family:Segoe UI,Tahoma,Verdana,sans-serif;max-width:1100px;margin:24px auto;padding:0 12px;\">")
    lines.append("  <h1>Working Suzuki Manual URLs</h1>")
    lines.append(f"  <p>{scan_summary}</p>")
    lines.append("  <table border=\"1\" cellpadding=\"8\" cellspacing=\"0\" style=\"border-collapse:collapse;width:100%;\">")
    lines.append("    <tr><th>Status</th><th>Root</th><th>Code</th><th>Title</th><th>URL</th></tr>")
    for root, code, title, url in hit_rows:
        lines.append(f"    <tr><td>200</td><td>{root}</td><td>{code}</td><td>{title}</td><td><a href=\"{url}\" target=\"_blank\" rel=\"noopener noreferrer\">{url}</a></td></tr>")
    lines.append("  </table>")
    lines.append("  <h1 style=\"margin-top:28px;\">Existing Roots (Directory Blocked)</h1>")
    lines.append("  <table border=\"1\" cellpadding=\"8\" cellspacing=\"0\" style=\"border-collapse:collapse;width:100%;\">")
    lines.append("    <tr><th>Status</th><th>Root</th><th>URL</th></tr>")
    for root in roots_403:
        url = f"{BASE_URL}{root}/"
        lines.append(f"    <tr><td>403</td><td>{root}</td><td><a href=\"{url}\" target=\"_blank\" rel=\"noopener noreferrer\">{url}</a></td></tr>")
    lines.append("  </table>")
    lines.append("</body>")
    lines.append("</html>")

    out_path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def load_baseline_hits(path: Path) -> Set[Tuple[str, str, str]]:
    if not path.exists():
        return set()
    out: Set[Tuple[str, str, str]] = set()
    with path.open("r", encoding="utf-8", newline="") as f:
        r = csv.DictReader(f, delimiter="\t")
        for row in r:
            if row.get("status") == "200":
                out.add((row.get("root", ""), row.get("code", ""), row.get("url", "")))
    return out


def main() -> None:
    ap = argparse.ArgumentParser(description="Staged URL scanner for Suzuki manual roots")
    ap.add_argument("--workers", type=int, default=72)
    ap.add_argument("--include-deep", action="store_true", help="Include deep stage with larger code space")
    ap.add_argument("--update-roots", action="store_true", default=True)
    ap.add_argument("--skip-root-discovery", action="store_true")
    args = ap.parse_args()

    REPORT_DIR.mkdir(exist_ok=True)

    roots = set()
    if ROOTS_FILE.exists():
        roots = {ln.strip() for ln in ROOTS_FILE.read_text(encoding="utf-8").splitlines() if ln.strip()}

    source_rows = load_sources(SOURCES_FILE)
    if not source_rows:
        print("No model_code_sources.csv found or empty. Proceeding with existing roots only.")

    cache = ProbeCache(CACHE_FILE)

    # Stage 0: root discovery
    if not args.skip_root_discovery and source_rows:
        print("Stage 0: root discovery")
        candidates = build_root_candidates(source_rows)
        root_jobs = ((cand, "", f"{BASE_URL}{cand}/") for cand in sorted(candidates))
        root_hits = scan_urls(root_jobs, cache, args.workers)
        discovered = {h.root for h in root_hits if h.code == "" and h.status in (200, 401, 403)}
        new_roots = discovered - roots
        if new_roots:
            print(f"  discovered new roots: {sorted(new_roots)}")
        roots |= discovered

    roots = set(sorted(roots))
    if args.update_roots:
        update_roots_file(ROOTS_FILE, roots)

    # Baseline for delta
    baseline_path = Path("all_roots_full_rescan_combined_codes.tsv")
    baseline = load_baseline_hits(baseline_path)

    all_hits: List[ProbeHit] = []

    # Stage 1: high
    print("Stage 1: high-confidence codes")
    s1 = stage_code_set("high", sorted(roots), source_rows)
    s1_jobs = ((r, c, f"{BASE_URL}{r}/xml/{c}/index.html") for r in sorted(s1) for c in sorted(s1[r]))
    hits1 = scan_urls(s1_jobs, cache, args.workers)
    all_hits.extend(hits1)
    write_hits(REPORT_DIR / "stage1_hits.tsv", hits1)

    # Stage 2: medium
    print("Stage 2: medium expansion")
    s2 = stage_code_set("medium", sorted(roots), source_rows)
    s2_jobs = ((r, c, f"{BASE_URL}{r}/xml/{c}/index.html") for r in sorted(s2) for c in sorted(s2[r]))
    hits2 = scan_urls(s2_jobs, cache, args.workers)
    all_hits.extend(hits2)
    write_hits(REPORT_DIR / "stage2_hits.tsv", hits2)

    # Stage 3: neighborhood expansion around current 200 hits
    print("Stage 3: neighborhood expansion")
    current_200_codes = {h.code for h in all_hits if h.status == 200}
    n_codes = neighborhood_codes(current_200_codes)
    n_jobs = ((r, c, f"{BASE_URL}{r}/xml/{c}/index.html") for r in sorted(roots) for c in sorted(n_codes))
    hits3 = scan_urls(n_jobs, cache, args.workers)
    all_hits.extend(hits3)
    write_hits(REPORT_DIR / "stage3_neighborhood_hits.tsv", hits3)

    # Optional deep stage
    if args.include_deep:
        print("Stage 4: deep expansion")
        s4 = stage_code_set("deep", sorted(roots), source_rows)
        s4_jobs = ((r, c, f"{BASE_URL}{r}/xml/{c}/index.html") for r in sorted(s4) for c in sorted(s4[r]))
        hits4 = scan_urls(s4_jobs, cache, args.workers)
        all_hits.extend(hits4)
        write_hits(REPORT_DIR / "stage4_deep_hits.tsv", hits4)

    # Deduplicate hits
    dedup = {(h.status, h.root, h.code, h.url): h for h in all_hits}
    final_hits = sorted(dedup.values(), key=lambda h: (h.root, h.code, h.status))
    hits_200 = [h for h in final_hits if h.status == 200]

    write_hits(REPORT_DIR / "final_hits.tsv", final_hits)

    # Delta report vs baseline
    current_200 = {(h.root, h.code, h.url) for h in hits_200}
    new_only = sorted(current_200 - baseline)
    removed = sorted(baseline - current_200)

    with (REPORT_DIR / "delta_report.tsv").open("w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, delimiter="\t")
        w.writerow(["type", "root", "code", "url"])
        for r, c, u in new_only:
            w.writerow(["new", r, c, u])
        for r, c, u in removed:
            w.writerow(["removed", r, c, u])

    now = datetime.now(timezone.utc).isoformat()
    summary = (
        f"Latest staged scan: {now} | roots={len(roots)} | "
        f"final_hits={len(final_hits)} | hit200={len(hits_200)} | "
        f"new_vs_baseline={len(new_only)}"
    )
    (REPORT_DIR / "summary.txt").write_text(summary + "\n", encoding="utf-8")

    generate_html(roots, hits_200, WORKING_HTML, summary)
    cache.flush()

    print(summary)
    print("Reports written to scan_reports/")


if __name__ == "__main__":
    main()
