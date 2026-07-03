# Release Notes

## Version 2.1.0 (Current)

### New Features
- **Collapsible Breadcrumbs**: Navigation breadcrumbs can now be toggled to expand/collapse. Click the "›" button to hide or show the full breadcrumb trail. Your preference is saved automatically.
- **Asset Failure Logging**: Failed image loads (symbols and graphics) are now logged to the browser console for debugging. Open your browser's developer tools (F12 → Console) to see which assets failed to load.
- **Release Notes Link**: Quick access to release information via the dropdown menu.

### Bug Fixes
- Fixed Note links not navigating to the correct pages with anchor fragments
- Fixed browser back button not working—now properly returns to previous pages

### Known Issues
- Some legacy SVG graphics may fail to load (typically .swf references)—these now display with graceful fallbacks

---

## Version 2.0.0

### Major Release
- Initial release of the modern manual viewer UI
- Vehicle selection with model variant filtering
- Multi-tab sidebar navigation (Bookmarks, DTC, Symptoms, Tightening Torque)
- Global search across manual sections
- Dark/Light theme toggle
- Collapsible sidebar with pinning support
- Responsive design for desktop viewing

---

## Planned Features

### Phase 2: Performance & Mobile
- Lazy loading of tree nodes for faster initial load
- Mobile-optimized interface and controls

### Phase 3: Robustness
- Error boundary improvements
- Externalized configuration file support

---

**Last Updated**: 2025-01-09  
**Current Version**: 2.1.0
