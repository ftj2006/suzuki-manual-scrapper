# Handover

## Current Goal

This repository mirrors the Suzuki service manual site into a static tree that works both locally and on GitHub Pages. The main recent work focused on project-path hosting under `/suzuki-manual-scrapper/` and on understanding the manual rendering pipeline.

## Important Context

- Local testing should use `http://localhost:8000/suzuki-manual-scrapper/suzuki-manual/index.html`.
- The repository contains both source-like assets under `config8/` and the mirrored deployed tree under `suzuki-manual/dcs.suzukiauto.co.za/...`.
- The scraper reads XML/XSL pages, captures frame documents, rewrites relative links, and downloads referenced assets into the output tree.
- `scrape.py` is the main orchestrator.

## Pipeline Summary

1. Seed the manual structure from `webdocstructure.xml` and related structure files.
2. Fetch and save frame documents for `CTL`, `TOP`, `NAVI`, and `MAIN`.
3. Rewrite links so XML pages, frames, and assets remain local.
4. Download referenced CSS/JS/images/SVGs and mirrored tool graphics.
5. Build the static shell page that points at the local frame files.

## File Areas to Know

- `scrape.py`: crawling, rewriting, asset downloading, shell generation.
- `README.md`: user-facing setup and pipeline documentation.
- `serve_github_pages_local.py` and `serve-github-pages-local.sh`: local GitHub Pages path emulator.
- `suzuki-manual/`: generated manual mirror and related runtime assets.
- `config8/`: source assets and XSLT/JS used by the manual.
- `suzuki-manual/dcs.suzukiauto.co.za/...`: mirrored manual tree that matches the live site structure.

## Working Notes

- The manual is frame-based, so problems often come from base URLs inside the generated frame documents rather than the outer shell.
- Tool graphics are usually referenced through `<graphic graphicname="...">` entries and end up as files under `image/TOOL/` or mirrored XML-tree image folders.
- If a future issue looks like a rendering bug, inspect the generated frame HTML first, then the XML/XSL that produced it.

## Validation Habit

- Run the local emulator and test the manual through the extended project URL.
- When changing the scraper, validate the generated tree and inspect the frame URLs in a browser.
