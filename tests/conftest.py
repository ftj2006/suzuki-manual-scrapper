# tests/conftest.py
# pytest configuration and fixtures

import pytest
from pathlib import Path
import sys

# Add project root to path
project_root = Path(__file__).parent.parent
sys.path.insert(0, str(project_root))


@pytest.fixture
def temp_output_dir(tmp_path):
    """Fixture for temporary output directory."""
    return tmp_path


@pytest.fixture
def sample_html():
    """Fixture for sample HTML content."""
    return """
    <html>
        <head><title>Test Page</title></head>
        <body>
            <a href="javascript: loadSIE('section1')">Link</a>
            <img src="image.jpg" alt="Test"/>
        </body>
    </html>
    """


@pytest.fixture
def sample_xml():
    """Fixture for sample XML content."""
    return """<?xml version="1.0"?>
    <root>
        <section id="sec1">
            <title>Section 1</title>
        </section>
    </root>
    """


@pytest.fixture
def test_urls():
    """Fixture providing common test URLs."""
    return {
        'base': 'https://example.com',
        'manual': 'https://example.com/Upload/Downloads/Service/ServiceManuals/',
        'xml': 'https://example.com/Upload/Downloads/Service/ServiceManuals/SWIFT_A2L310/xml/AENLSB0A/',
    }


def pytest_configure(config):
    """Configure pytest with custom markers."""
    config.addinivalue_line(
        'markers', 'integration: mark test as an integration test'
    )
    config.addinivalue_line(
        'markers', 'scraping: mark test as related to web scraping'
    )
    config.addinivalue_line(
        'markers', 'performance: mark test as a performance test'
    )
    config.addinivalue_line(
        'markers', 'slow: mark test as slow (deselect with -m "not slow")'
    )


def pytest_collection_modifyitems(config, items):
    """Add markers to tests based on file names."""
    for item in items:
        # Mark scraping tests
        if 'scrape' in item.nodeid:
            item.add_marker(pytest.mark.scraping)
        
        # Mark slow tests
        if 'slow' in item.nodeid:
            item.add_marker(pytest.mark.slow)
