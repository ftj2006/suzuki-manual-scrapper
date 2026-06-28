#!/usr/bin/env python3

from pathlib import Path
import re


BASE_TAG = '<base href="./" />'


def main() -> None:
    for html_path in Path('_site').rglob('*.html'):
        text = html_path.read_text(encoding='utf-8')
        if '<base href=' in text:
            continue
        updated_text, replacements = re.subn(
            r'<head([^>]*)>',
            r'<head\1>' + BASE_TAG,
            text,
            count=1,
            flags=re.IGNORECASE,
        )
        if replacements:
            html_path.write_text(updated_text, encoding='utf-8')


if __name__ == '__main__':
    main()