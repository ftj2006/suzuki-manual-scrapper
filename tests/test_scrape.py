from pathlib import Path

from bs4 import BeautifulSoup

import importlib.util

spec = importlib.util.spec_from_file_location("scrape", Path(__file__).resolve().parent.parent / "scrape.py")
scrape = importlib.util.module_from_spec(spec)
spec.loader.exec_module(scrape)


def test_frame_output_path_for_navi_frame_uses_existing_navi_path(tmp_path):
    start_url = "https://example.com/Upload/Downloads/Service/ServiceManuals/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/navi/navi.html"

    local_path = scrape.frame_output_path(start_url, "NAVI", tmp_path, "https://example.com")

    assert local_path == (
        tmp_path
        / "example.com"
        / "Upload"
        / "Downloads"
        / "Service"
        / "ServiceManuals"
        / "SWIFT_A2L310_A2L412_A2L414"
        / "xml"
        / "AENLSB0A"
        / "navi"
        / "navi.html"
    )


def test_rewrite_navigation_links_to_local_content(tmp_path, monkeypatch):
    def fake_save_html_document(url, output_dir, origin, url_map):
        local_path = (
            output_dir
            / "example.com"
            / "Upload"
            / "Downloads"
            / "Service"
            / "ServiceManuals"
            / "SWIFT_A2L310_A2L412_A2L414"
            / "xml"
            / "AENLSB0A"
            / "Foreword01"
            / "Foreword01.htm"
        )
        local_path.parent.mkdir(parents=True, exist_ok=True)
        local_path.write_text("<html></html>", encoding="utf-8")
        return local_path

    monkeypatch.setattr(scrape, "save_html_document", fake_save_html_document)

    current_page = (
        tmp_path
        / "example.com"
        / "Upload"
        / "Downloads"
        / "Service"
        / "ServiceManuals"
        / "SWIFT_A2L310_A2L412_A2L414"
        / "xml"
        / "AENLSB0A"
        / "navi"
        / "navi.html"
    )
    current_page.parent.mkdir(parents=True, exist_ok=True)
    current_page.write_text("<html></html>", encoding="utf-8")

    soup = BeautifulSoup(
        "<a href=\"javascript:%20loadSIE('Foreword01')\">IMPORTANT</a>",
        "html.parser",
    )

    scrape.rewrite_navigation_links(
        soup,
        "https://example.com/Upload/Downloads/Service/ServiceManuals/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/index.html",
        current_page,
        tmp_path,
        {},
        "https://example.com",
    )

    link = soup.find("a")
    assert link["href"] == "../Foreword01/Foreword01.htm"
    assert link["target"] == "MAIN"


def test_rewrite_navigation_links_to_local_popup_content(tmp_path, monkeypatch):
    def fake_save_html_document(url, output_dir, origin, url_map):
        local_path = (
            output_dir
            / "example.com"
            / "Upload"
            / "Downloads"
            / "Service"
            / "ServiceManuals"
            / "SWIFT_A2L310_A2L412_A2L414"
            / "xml"
            / "AENLSB0A"
            / "Popup01"
            / "Popup01.htm"
        )
        local_path.parent.mkdir(parents=True, exist_ok=True)
        local_path.write_text("<html></html>", encoding="utf-8")
        return local_path

    monkeypatch.setattr(scrape, "save_html_document", fake_save_html_document)

    current_page = (
        tmp_path
        / "example.com"
        / "Upload"
        / "Downloads"
        / "Service"
        / "ServiceManuals"
        / "SWIFT_A2L310_A2L412_A2L414"
        / "xml"
        / "AENLSB0A"
        / "navi"
        / "navi.html"
    )
    current_page.parent.mkdir(parents=True, exist_ok=True)
    current_page.write_text("<html></html>", encoding="utf-8")

    soup = BeautifulSoup(
        "<a href=\"javascript:window.open('Popup01.htm', 'popup', 'width=600,height=400')\">POPUP</a>",
        "html.parser",
    )

    scrape.rewrite_navigation_links(
        soup,
        "https://example.com/Upload/Downloads/Service/ServiceManuals/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/index.html",
        current_page,
        tmp_path,
        {},
        "https://example.com",
    )

    link = soup.find("a")
    assert link["href"] == "../Popup01/Popup01.htm"
    assert link["target"] == "_blank"


def test_build_load_sie_url_from_navi_page_prefers_parent_content_path():
    base_url = "https://example.com/Upload/Downloads/Service/ServiceManuals/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/navi/navi.html"

    resolved = scrape.build_load_sie_url(base_url, "Foreword01")

    assert resolved == (
        "https://example.com/Upload/Downloads/Service/ServiceManuals/"
        "SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/Foreword01/Foreword01.htm"
    )


def test_build_content_url_from_navi_page_points_to_manual_xml(tmp_path):
    base_url = "https://example.com/Upload/Downloads/Service/ServiceManuals/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/navi/navi.html"

    resolved = scrape.build_content_url(base_url, "AENLSB0A0000001")

    assert resolved == (
        "https://example.com/Upload/Downloads/Service/ServiceManuals/"
        "SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A/AENLSB0A0000001.xml"
    )


def test_rewrite_html_links_rewrites_srcset_and_downloads_same_origin_resources(tmp_path, monkeypatch):
    downloaded = []
    url_map = {}

    def fake_download_url(url, local_path):
        downloaded.append((url, local_path))
        return True

    monkeypatch.setattr(scrape, "download_url", fake_download_url)

    output_dir = tmp_path
    current_page = output_dir / "example.com" / "manual" / "page.html"
    current_page.parent.mkdir(parents=True, exist_ok=True)
    current_page.write_text("<html></html>", encoding="utf-8")

    soup = BeautifulSoup(
        '<img srcset="images/a.jpg 1x, /assets/b.jpg 2x" src="images/c.jpg">',
        "html.parser",
    )

    scrape.rewrite_html_links(
        soup,
        "https://example.com/manual/page.html",
        current_page,
        output_dir,
        url_map,
        "https://example.com",
    )

    img = soup.find("img")
    assert img["srcset"] == "images/a.jpg 1x, ../assets/b.jpg 2x"
    assert img["src"] == "images/c.jpg"

    assert set(url_map.keys()) == {
        "https://example.com/manual/images/a.jpg",
        "https://example.com/assets/b.jpg",
        "https://example.com/manual/images/c.jpg",
    }
    assert {url for url, _ in downloaded} == {"https://example.com/manual/images/c.jpg"}


def test_extract_graphic_references_parses_graphic_names_and_extensions():
    xml = '''
    <root>
      <graphic graphicname="I123450001.jpg" />
      <graphic graphicname="T9999A" />
    </root>
    '''

    graphics = scrape.extract_graphic_references(xml)

    assert graphics == [("I123450001", "jpg"), ("T9999A", "jpg")]
