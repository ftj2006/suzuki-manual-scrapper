# Quick Start - Testing Setup

## Installation

```bash
# Install Node.js dependencies (for JavaScript tests)
npm install

# Install Python test dependencies
pip install -r requirements-test.txt
```

## Running Tests

### All Tests
```bash
npm run test:all
```

### By Category

**JavaScript Unit Tests**
```bash
npm test              # Single run
npm run test:watch   # Watch mode
npm run test:coverage # With coverage report
```

**End-to-End Tests**
```bash
npm run test:e2e
```

**Python Tests**
```bash
npm run test:py
npm run test:py:coverage
```

## Test Coverage

The test suite includes:

### ✅ Unit Tests (JavaScript)
- **Validation**: Data structure validation (dataset, tree nodes)
- **Session Recovery**: Save/restore application state with localStorage
- **Performance Metrics**: Track and analyze operation timings
- Location: `tests/unit/`

### ✅ End-to-End Tests (Playwright)
- **Navigation**: UI interaction, breadcrumb toggle, state persistence
- **Accessibility**: Keyboard shortcuts, WCAG compliance, focus management
- **Error Handling**: Network failures, invalid data, recovery suggestions
- Location: `tests/e2e/`
- Browsers: Chromium, Firefox, WebKit

### ✅ Integration Tests (Python)
- **Scraping**: URL processing, HTML transformation, link rewriting
- Location: `tests/test_scrape.py`

## CI/CD Pipeline

Automated testing runs on:
- Every push to `main` and `develop` branches
- Every pull request

Tests run in parallel:
1. **Unit Tests** (~10-15s) - Jest tests with coverage
2. **E2E Tests** (~30-45s) - Playwright cross-browser
3. **Python Tests** (~15-20s) - pytest with coverage
4. **Linting** (~5s) - Code quality checks

Coverage reports uploaded to Codecov automatically.

## Key Test Features

### Mocking & Isolation
- localStorage mocked for session recovery tests
- performance API mocked for timing tests
- Each test isolated and independent

### Data Validation Tests
```javascript
validateDataset({ id: 'ds1', manuals: [...] }) // ✓
validateTreeNode({ type: 'file', label: 'Doc', path: './file.htm' }) // ✓
```

### Session Recovery Tests
- Saves state with timestamp and version
- Validates 24-hour window
- Detects version mismatch
- Handles corrupted data gracefully

### Performance Metrics Tests
- Records operation duration
- Tracks min/max/average per metric
- Caps samples at 100 per metric
- Prevents memory leaks

### E2E Navigation Tests
- Breadcrumb display and toggle
- Mobile sidebar interaction
- Theme switching
- State persistence

### E2E Accessibility Tests
- Keyboard navigation (arrow keys)
- Keyboard shortcuts (?, Ctrl+K, /)
- Focus indicators
- Screen reader support
- WCAG compliance

### E2E Error Handling Tests
- Invalid dataset handling
- Network failure recovery
- Session restoration
- XSS prevention
- Memory efficiency

## Test Files Structure

```
tests/
├── unit/
│   ├── validation.test.js           (Data validation)
│   ├── session-recovery.test.js     (Session state)
│   └── performance-metrics.test.js  (Performance tracking)
├── e2e/
│   ├── navigation.spec.js           (UI navigation)
│   ├── accessibility.spec.js        (Keyboard & WCAG)
│   └── error-handling.spec.js       (Error recovery)
├── test_scrape.py                   (Web scraping)
├── setup.js                         (Jest configuration)
├── conftest.py                      (pytest configuration)
└── .gitignore                       (Test artifacts ignored)
```

## Configuration Files

- `package.json` - npm scripts and dependencies
- `jest.config.js` - Unit test configuration
- `playwright.config.js` - E2E test configuration
- `pytest.ini` - Python test configuration
- `.babelrc` - JavaScript transpilation
- `.eslintignore` - Linting exclusions
- `.github/workflows/tests.yml` - CI/CD pipeline

## Coverage Goals

| Category | Target | Status |
|----------|--------|--------|
| Unit Tests | 80%+ | ✓ Ready |
| E2E Tests | Key workflows | ✓ Ready |
| Python Tests | 85%+ | ✓ Ready |

## Debugging

**Debug Unit Tests:**
```bash
node --inspect-brk node_modules/.bin/jest --runInBand
```

**Debug E2E Tests:**
```bash
PWDEBUG=1 npm run test:e2e
```

**Debug Python Tests:**
```bash
pytest tests/test_scrape.py --pdb -v
```

## Next Steps

1. Run `npm install` to set up dependencies
2. Run `npm run test:all` to verify setup
3. Check coverage reports in `coverage/` directory
4. Review `TESTING.md` for detailed documentation
5. Add tests for new features before implementing

## Troubleshooting

**Tests timeout**: Increase timeout in config files or check if server is running
**localStorage errors**: Verify mock is working in `tests/setup.js`
**E2E failures**: Ensure `./serve-github-pages-local.sh` is running
**Memory issues**: Check for event listener cleanup in tests

## Resources

- [TESTING.md](./TESTING.md) - Comprehensive testing guide
- [Jest Docs](https://jestjs.io/)
- [Playwright Docs](https://playwright.dev/)
- [pytest Docs](https://docs.pytest.org/)

---

Ready to run tests! 🚀

```bash
npm run test:all
```
