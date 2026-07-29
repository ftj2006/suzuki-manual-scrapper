# NotebookLM Source Pack: Swift AENLSB0A (K14C-focused)

Purpose: provide a model-specific, relationship-preserving markdown corpus for NotebookLM.

## Dataset Metadata
- Dataset id: swift-a2l310-a2l412-a2l414--aenlsb0a
- Dataset name: AENLSB0A
- Source type: semantic-structure
- XML root: /home/paul/git/suzuki-manual-scrapper/modern-manual-site/source-mirror/SWIFT_A2L310_A2L412_A2L414/xml/AENLSB0A
- Declared model variants in source index: K14C, K14D
- Source index file count: 2831
- Files included in this NotebookLM pack after K14D-title filtering: 2757
- Excluded files with explicit K14D in title: 5
- Excluded K14D lines from retained files: 1551

## Relationship Coverage
- Tree tabs exported: bookmarks, dtc, symptoms
- Total outgoing cross-reference edges exported: 3588
- Files containing torque-related values/snippets: 129

## File Set
- 01_navigation_bookmarks.md: hierarchy from bookmarks tree
- 02_navigation_dtc.md: hierarchy from DTC tree
- 03_navigation_symptoms.md: hierarchy from Symptoms tree
- 04_file_catalog.md: complete file catalogue with tree memberships and reference counts
- 05_cross_reference_graph.md: source-to-target cross-file references (intxref/intxrefpoff)
- 06_torque_spec_lookup.md: extracted torque values and lookup anchors
- content/content_XXXX.md: full text chunks of XML/HTML content with metadata

## Notes on K14D Exclusion
- Any file whose indexed title includes K14D is excluded from content and graph export.
- Any line containing K14D is removed from retained textual content.
- Any cross-reference whose anchor text or target title includes K14D is excluded.
