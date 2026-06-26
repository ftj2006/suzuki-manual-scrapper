# Suzuki Manual Scrapper

This repository builds an offline mirror of the Suzuki manual site and exposes it as a static GitHub Pages-friendly website.

## Run locally

Generate the mirror with:

```bash
python scrape.py --start-url "https://dcs.suzukiauto.co.za/Upload/Downloads/Service/ServiceManuals/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/index.html" --output-dir suzuki-manual
```

Then open [index.html](index.html) or serve the repo root with any static server.

## GitHub Pages

The repository root includes a static entry page that redirects to [suzuki-manual/index.html](suzuki-manual/index.html). The `.nojekyll` file ensures GitHub Pages serves the mirrored asset tree as-is.