# Suzuki Manual Scrapper

This repository builds an offline mirror of the Suzuki manual site and exposes it as a static GitHub Pages-friendly website.

## Run locally

Generate the mirror with:

```bash
python scrape.py --start-url "https://dcs.suzukiauto.co.za/Upload/Downloads/Service/ServiceManuals/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/index.html" --output-dir suzuki-manual
```

Then open [index.html](index.html) or serve the repo root with any static server.

### Emulate GitHub Pages Locally

To test URLs under `/suzuki-manual-scrapper/suzuki-manual/` without deploying, serve the parent folder of the repository:

```bash
./serve-github-pages-local.sh
```

Then open:

```text
http://localhost:8000/suzuki-manual-scrapper/suzuki-manual/index.html
```

Use that extended URL for local testing going forward. It matches the GitHub Pages project-path layout closely enough to catch root-relative asset issues locally, and the local server maps the repository path prefix back onto the working tree so the manual frames load with their original URLs.

## Staged URL Scanner (Recommended)

Use the staged scanner to discover roots, probe model-relevant code patterns, cache results, and regenerate the clickable HTML output.

### Inputs

- `model_code_sources.csv`: external model/code intelligence (recalls, docs, catalog references)
- `all_existing_roots.txt`: known existing roots (updated automatically)

### Run (standard)

```bash
./.venv/bin/python staged_scanner.py
```

### Run (with deep stage)

```bash
./.venv/bin/python staged_scanner.py --include-deep
```

### Outputs

- `working-urls.html`: regenerated clickable summary page
- `scan_cache.tsv`: URL status cache to avoid duplicate probing
- `scan_reports/summary.txt`: latest scan summary
- `scan_reports/final_hits.tsv`: all hit URLs (`200/401/403`)
- `scan_reports/delta_report.tsv`: delta vs `all_roots_full_rescan_combined_codes.tsv` baseline

The scanner is root-first and staged (high-confidence -> medium expansion -> neighborhood expansion, optionally deep), so it prioritizes likely wins before expensive brute-force passes.

## GitHub Pages

The repository root includes a static entry page that redirects to [suzuki-manual/index.html](suzuki-manual/index.html). The `.nojekyll` file ensures GitHub Pages serves the mirrored asset tree as-is.

### Symlink Compatibility (Important)

GitHub Pages artifacts reject symlinks in many setups. This repository has root aliases (`config8`, `icon`, `image`, `symbol`) that may be symlinks locally.

The workflow `.github/workflows/deploy-pages.yml` stages the site with `cp -RL`, which dereferences symlinks and copies their real contents into the deploy artifact.

If you stage manually, use `cp -RL` (or `rsync -aL`) instead of plain `cp -R`.

Quick local check of staged output:

```bash
find _site -type l
```

The command above should print nothing.