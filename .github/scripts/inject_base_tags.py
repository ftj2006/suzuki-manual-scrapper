#!/usr/bin/env python3

from pathlib import Path
import re


BASE_TAG = '<base href="./" />'


def ensure_base_first_child(text: str) -> str:
    """Insert the BASE_TAG immediately after the <head...> start tag so it becomes the first child.

    This avoids cases where scripts inserted into head before the base tag can create requests
    that resolve against the wrong base.
    """
    # If head already contains a base tag anywhere, do nothing
    if re.search(r'<base\s+href=', text, flags=re.IGNORECASE):
        return text
    # Insert base tag right after the opening <head...> tag
    updated_text, replacements = re.subn(
        r'(<head(?:\s[^>]*)?>)\s*',
        r"\1" + BASE_TAG + "\n",
        text,
        count=1,
        flags=re.IGNORECASE,
    )
    return updated_text


def main() -> None:
    for html_path in Path('_site').rglob('*.html'):
        text = html_path.read_text(encoding='utf-8')
        new_text = ensure_base_first_child(text)
        if new_text != text:
            html_path.write_text(new_text, encoding='utf-8')


if __name__ == '__main__':
    main()