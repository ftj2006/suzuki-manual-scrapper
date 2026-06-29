#!/usr/bin/env python3

from __future__ import annotations

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote
import os


REPO_DIR = Path(__file__).resolve().parent
PAGES_PREFIX = "/suzuki-manual-scrapper/"


class PagesPathHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path: str) -> str:
        path = unquote(path.split('?', 1)[0].split('#', 1)[0])

        if path.startswith(PAGES_PREFIX):
            path = path[len(PAGES_PREFIX):]

        if path.startswith('/'):
            path = path[1:]

        full_path = (REPO_DIR / path).resolve()
        if not str(full_path).startswith(str(REPO_DIR.resolve())):
            return str(REPO_DIR / '404.html')
        return str(full_path)

    def log_message(self, format: str, *args: object) -> None:
        pass


def main() -> None:
    os.chdir(REPO_DIR)
    server = ThreadingHTTPServer(("0.0.0.0", 8000), PagesPathHandler)
    print("Serving http://localhost:8000/suzuki-manual-scrapper/suzuki-manual/index.html")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()