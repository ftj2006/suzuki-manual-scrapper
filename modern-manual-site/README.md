# Modern Manual Site

Frame-free manual viewer that renders mirrored Suzuki service content as a modern static web app.

## Documentation

- Technical architecture, XML relationships, and Mermaid diagrams:
  [TECHNICAL_ARCHITECTURE.md](TECHNICAL_ARCHITECTURE.md)

## Quick Start

1. Build the dataset indexes:

```bash
python3 modern-manual-site/scripts/build_dataset_index.py
```

2. Serve the repository root (example):

```bash
python3 -m http.server 8000
```

3. Open the app:

```text
http://localhost:8000/suzuki-manual-scrapper/modern-manual-site/index.html
```

## What This App Does

- Loads dataset manifests from `modern-manual-site/data/*.json`.
- Renders XML and HTML manual pages in one viewer.
- Provides tree navigation, dataset/submodel/model switching, TOC row navigation, and image lightbox support.

## Project Layout

- `index.html`: app shell.
- `app.js`: state management, loading, and navigation logic.
- `styles.css`: visual styling.
- `lib/`: tree and XML rendering helpers.
- `scripts/`: dataset configuration and index builder.
- `data/`: generated manifests and per-submodel indexes.
- `source-mirror/`: mirrored source manual content.

## Notes

- The site is designed for static hosting (including GitHub Pages).
- If tree content looks stale or missing, rebuild the indexes.
