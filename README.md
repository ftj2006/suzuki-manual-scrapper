# Suzuki Manual Scrapper

This repository builds a static mirror of the Suzuki service manual site and publishes it as a GitHub Pages-friendly project site.

## Quick Start

Generate the mirror with:

```bash
python scrape.py --start-url "https://dcs.suzukiauto.co.za/Upload/Downloads/Service/ServiceManuals/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/index.html" --output-dir suzuki-manual
```

Start the local GitHub Pages emulator with:

```bash
./serve-github-pages-local.sh
```

Open:

```text
http://localhost:8000/suzuki-manual-scrapper/suzuki-manual/index.html
```

Use that extended URL for local testing. It matches the GitHub Pages project-path layout closely enough to catch root-relative asset issues before deployment.

## What Gets Generated

The scraper writes the mirrored manual under [suzuki-manual/](suzuki-manual/) and copies the runtime assets it needs into [config8/](config8/), [icon/](icon/), [image/](image/), and [symbol/](symbol/).

The manual is frame-based, so the output keeps the original `CTL`, `TOP`, `NAVI`, and `MAIN` documents and rewrites their links to local files.

## Technical Docs

The full pipeline explanation is in [ARCHITECTURE.md](ARCHITECTURE.md).

Agent handover notes are in [HANDOVER.md](HANDOVER.md).

## GitHub Pages Deployment

The repository root includes a static hub page with direct links to [suzuki-manual/index.html](suzuki-manual/index.html) and [manuals-index/index.html](manuals-index/index.html). The `.nojekyll` file ensures GitHub Pages serves the mirrored asset tree as-is.

For direct entry links from the base page, use `?go=manual` or `?go=index` on the repository root URL.

If you stage manually, use `cp -RL` or `rsync -aL` instead of plain `cp -R` so symlinks are dereferenced.

Quick local check of staged output:

```bash
find _site -type l
```

That command should print nothing.

## Staged URL Scanner

The staged scanner discovers roots, probes model-relevant code patterns, caches results, and regenerates the clickable HTML output.

Run it with:

```bash
./.venv/bin/python staged_scanner.py
```

With the deep stage enabled:

```bash
./.venv/bin/python staged_scanner.py --include-deep
```

Outputs include `working-urls.html`, `scan_cache.tsv`, and the reports under `scan_reports/`.
