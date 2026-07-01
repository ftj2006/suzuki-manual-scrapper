# Modern Manual Site (Frame-Free)

This directory is an isolated, modern manual viewer that reads existing XML datasets without frames.

## Features

- Tree-style file navigation.
- XML rendering in a modern content pane.
- Light/dark theme support.
- Dataset switcher (supports multiple manual datasets).
- Build-time dataset index generation from existing XML directories.

## Directory Layout

- `index.html`: App shell.
- `app.js`: State, dataset switching, tree rendering, XML loading.
- `styles.css`: Component styling and theming.
- `lib/`: Tree and XML helper modules.
- `scripts/datasets.config.json`: Dataset roots.
- `scripts/build_dataset_index.py`: Builds `data/*.json` indexes.
- `data/`: Generated dataset manifests and indexes.
- `source-mirror/`: Separate downloaded resource tree for modern datasets.

## Add/Update Datasets

1. Edit `scripts/datasets.config.json` and add each dataset:
   - `id`: stable key
   - `name`: display name
   - `xml_root`: path from `modern-manual-site/` to XML root directory
   - `web_prefix`: browser path prefix used to fetch XML files
   - `structure_xml` (optional): semantic tree source file (defaults to `webdocstructure-sym.xml`)
   - `flat_group_prefix` (optional): groups flat filename-only datasets into folder-like prefixes for better tree navigation
1. Download the mirrored resources into `source-mirror/<dataset-id>/...` so the modern site stays isolated from the legacy `suzuki-manual/` tree.

```bash
python scrape.py --start-url "https://dcs.suzukiauto.co.za/Upload/Downloads/Service/ServiceManuals/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/index.html" --output-dir modern-manual-site/source-mirror/swift-a2l310-a2l412-a2l414
```

1. Run:

```bash
python3 modern-manual-site/scripts/build_dataset_index.py
```

1. Serve the repository and open:

```text
http://localhost:8000/suzuki-manual-scrapper/modern-manual-site/index.html
```

## Notes

- This is intentionally frame-free and independent from the legacy XSLT runtime.
- Tree generation order is: `structure_xml` -> `navi/navi.html` -> filesystem fallback.
- Long term, this can evolve into richer XML-to-HTML transforms and search facets.
