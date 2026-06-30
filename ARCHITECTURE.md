# Architecture

This document explains how the Suzuki manual mirror is loaded, transformed, and rendered.

## End-to-End Flow

The scraper starts from a Suzuki manual entry URL and builds a local mirror in stages:

1. Seed the manual structure from `webdocstructure.xml` and related structure files.
2. Fetch the frame documents for `CTL`, `TOP`, `NAVI`, and `MAIN`.
3. Rewrite relative links so the pages work offline and under GitHub Pages.
4. Download referenced CSS, JavaScript, images, SVGs, and symbols.
5. Build a static shell page that opens the mirrored frame documents.

The implementation lives in [scrape.py](scrape.py).

## XML Loading

The source manual is a graph of XML structure files and content pages, not a single document.

The main structure files are:

- `webdocstructure.xml`: top-level manual index.
- `webdocstructure_vars1.xml` and `webdocstructure_vars2.xml`: runtime variable lists and lookup data.
- `webdocstructure-dtc.xml` and `webdocstructure-sym.xml`: diagnostic and symbol branches.
- `webdocstructure_XX.xml`: chapter and topic branches for a specific section.

The scraper reads those files with `seed_manual_xml_tree()` and `build_navigation_document()`. Those routines extract entry IDs, nested section IDs, and manual metadata so the crawler knows which pages to fetch next.

## HTML Generation

Once the structure is known, the scraper materializes the actual HTML pages.

- `save_html_document()` fetches a page, parses it with BeautifulSoup, rewrites links, and writes the local file.
- `capture_frame_documents()` loads the live frame set in a browser and saves the final frame HTML.
- `build_frame_shell()` creates the outer shell that points at the saved frame documents.

The frame model matters because Suzuki pages depend on browser state, target frames, and popups. The mirror preserves that behavior instead of flattening everything into one document.

## Link Rewriting

The scraper rewrites links so copied pages still resolve locally.

### Navigation links

`rewrite_navigation_links()` converts manual navigation actions like `loadSIE(...)` into local file references and preserves the `MAIN` target frame.

### Popup and cross-reference links

`rewrite_popup_handlers()` rewrites `window.open(...)` links to local paths while keeping the popup behavior.

### Generic asset links

`rewrite_html_links()` rewrites `href`, `src`, and `srcset` values on anchors, scripts, stylesheets, iframes, images, audio, and video elements. It only rewrites same-origin resources and maps them into the local output tree.

## Graphics, SVGs, and Images

The manual includes graphics through both XML metadata and ordinary HTML tags.

### XML graphic references

Suzuki XML pages often contain entries like `<graphic graphicname="TT09917-47020.swf">`. The scraper extracts those references with `extract_graphic_references()`.

The graphic resolver then does the following:

- `build_graphic_urls()` tries both the XML-tree image mirror and the root image mirror.
- `graphic_folder_candidates()` guesses the destination folder from the graphic ID prefix.
- `graphic_extension_candidates()` tries the most likely file types, including SVG fallbacks for legacy SWF-era graphics.

Tool graphics usually resolve into `image/TOOL/`, while model-specific drawings resolve into model-prefixed `image/` folders.

### Placeholder hydration

`hydrate_placeholder_images()` detects tiny placeholder SVG and JPEG files and replaces them with the real remote asset when possible.

### Symbol icons

`extract_symbol_references()` and `ensure_symbol_assets()` mirror inline symbol graphics into `symbol/` so the manual can load them locally.

### Required static assets

`ensure_required_static_assets()` copies the core CSS and icon files needed by the frame shell and the runtime widgets.

## Frame Relationships

The manual is organized around the four core frames:

- `CTL`: hidden control state and form fields.
- `TOP`: top bar, manual controls, and runtime loader.
- `NAVI`: expandable table of contents.
- `MAIN`: the current manual page.

The outer `index.html` opens those frames, and the scraper stores each frame as a separate file so the mirror keeps the original browser behavior.

## File Layout

The generated mirror keeps both the runtime assets and the extracted manual tree:

- `suzuki-manual/`: site entry point and mirrored manual pages.
- `config8/`: runtime CSS, JS, and XSLT assets.
- `icon/`: shared icon assets used by the runtime and navigation.
- `image/`: mirrored manual images.
- `symbol/`: mirrored symbol icons.
- `suzuki-manual/dcs.suzukiauto.co.za/...`: deployed-tree copy that matches the original site path.

## Local Hosting

The local GitHub Pages emulator serves the repository under `/suzuki-manual-scrapper/` so project-path issues appear locally before deployment.

The expected test URL is:

```text
http://localhost:8000/suzuki-manual-scrapper/suzuki-manual/index.html
```

## Where To Look First When Debugging

If a page renders incorrectly, check these in order:

1. The generated frame HTML.
2. The XML structure file that selected the page.
3. The rewritten `href` and `src` values.
4. The mirrored asset path under `image/`, `icon/`, or `symbol/`.

Most rendering bugs in this repository are base-path or asset-resolution problems rather than missing source content.