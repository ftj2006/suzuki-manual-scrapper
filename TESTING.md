# Testing Guide

This document provides comprehensive information about the test suite for the Suzuki Manual Viewer project.

## Overview

The project uses a multi-layered testing approach:

- **Unit Tests**: Jest for JavaScript functions and utilities
- **End-to-End Tests**: Playwright for user interactions and UI workflows
- **Integration Tests**: pytest for Python backend components
- **Performance Tests**: Built-in performance metrics tracking

## Test Structure

```
tests/
├── unit/                          # Jest unit tests
│   ├── validation.test.js        # Data validation functions
│   ├── session-recovery.test.js  # Session recovery logic
│   └── performance-metrics.test.js # Performance monitoring
├── e2e/                          # Playwright end-to-end tests
│   ├── navigation.spec.js        # UI navigation and interactions
│   ├── accessibility.spec.js     # Keyboard and accessibility
│   └── error-handling.spec.js    # Error handling and recovery
├── test_scrape.py                # Python scraping tests
├── setup.js                      # Jest setup and mocks
└── conftest.py                   # pytest configuration
```

## Running Tests

### All Tests
```bash
npm run test:all
```

### JavaScript Unit Tests
```bash
npm test                    # Run once
npm run test:watch         # Watch mode
npm run test:coverage      # With coverage report
```

### End-to-End Tests
```bash
npm run test:e2e           # All browsers
```

### Python Tests
```bash
npm run test:py            # All Python tests
npm run test:py:coverage   # With coverage
```

## Unit Tests

### Validation Tests (`tests/unit/validation.test.js`)

Tests for data validation functions that ensure data integrity:

```bash
npm test -- validation.test.js
```

**Coverage:**
- `validateDataset()`: Checks for required `id` and `manuals` array
- `validateTreeNode()`: Validates folder/file node structure
- Edge cases: null, undefined, missing properties, invalid types

### Session Recovery Tests (`tests/unit/session-recovery.test.js`)

Tests for session state persistence and recovery:

```bash
npm test -- session-recovery.test.js
```

**Coverage:**
- `saveSessionRecovery()`: Saves state with timestamp
- `getSessionRecovery()`: Validates 24-hour window and version
- `clearSessionRecovery()`: Cleans up recovery state
- Expiration and version mismatch handling

### Performance Metrics Tests (`tests/unit/performance-metrics.test.js`)

Tests for performance monitoring infrastructure:

```bash
npm test -- performance-metrics.test.js
```

**Coverage:**
- `recordPerformanceMetric()`: Records timing data
- `getPerformanceMetrics()`: Retrieves accumulated metrics
- Min/max/average calculations
- Sample limit enforcement (100 per metric)
- Negative duration handling

## End-to-End Tests

### Navigation Tests (`tests/e2e/navigation.spec.js`)

Tests UI navigation and breadcrumb functionality:

```bash
npm run test:e2e -- navigation.spec.js
```

**Coverage:**
- Main interface loads correctly
- Breadcrumb display and toggle
- Sidebar toggle on mobile
- Theme switching
- State persistence
- Keyboard shortcuts

**Requirements:**
- Local server running on `http://localhost:8000`
- Dataset `swift-a2l310-a2l412-a2l414` available

### Accessibility Tests (`tests/e2e/accessibility.spec.js`)

Tests keyboard navigation and WCAG compliance:

```bash
npm run test:e2e -- accessibility.spec.js
```

**Coverage:**
- Focus indicators on interactive elements
- Arrow key navigation
- Keyboard shortcuts (?, Ctrl+K, /)
- Accessible keyboard help modal
- Screen reader content
- Semantic HTML structure
- Focus trapping in modals

**Requirements:**
- Keyboard shortcuts properly implemented
- ARIA attributes on interactive elements

### Error Handling Tests (`tests/e2e/error-handling.spec.js`)

Tests error recovery and resilience:

```bash
npm run test:e2e -- error-handling.spec.js
```

**Coverage:**
- Invalid dataset handling
- Network failure recovery
- Session state recovery
- XSS prevention
- Recovery suggestions
- Memory efficiency
- Console error detection

**Requirements:**
- Session recovery implemented
- Error UI with recovery buttons

## Python Tests

### Scraping Tests (`tests/test_scrape.py`)

Tests for web scraping functionality:

```bash
pytest tests/test_scrape.py -v
```

**Coverage:**
- Frame output path generation
- Navigation link rewriting
- HTML document processing
- Asset handling

**Run with coverage:**
```bash
pytest tests/test_scrape.py --cov=scrape --cov-report=html
```

## Configuration Files

### jest.config.js
Jest configuration for unit testing:
- testEnvironment: jsdom (DOM simulation)
- Transform: babel-jest for ES modules
- Coverage collection from app.js and lib/

### playwright.config.js
Playwright configuration for E2E testing:
- Multiple browser targets (Chromium, Firefox, WebKit)
- Local server integration
- Screenshot/video on failure
- HTML test report

### pytest.ini
pytest configuration:
- Test discovery patterns
- Markers for test categorization
- Verbose output
- Short traceback format

### .babelrc
Babel configuration for Node.js transformation

## Mocking Strategy

### localStorage Mock (tests/setup.js)
- Mock for session recovery and metrics storage
- Tracks calls: `getItem()`, `setItem()`, `removeItem()`, `clear()`
- Reset before each test

### performance Mock
- `performance.now()` tracked for timing tests

### console Mock
- Tracks `log()`, `error()`, `warn()`, `info()`, `debug()`
- Useful for error detection in E2E tests

## Coverage Goals

### Unit Tests
- **Target**: 80%+ coverage
- Focus areas:
  - Validation logic
  - Session recovery
  - Performance metrics

### E2E Tests
- **Target**: Key user workflows
- Focus areas:
  - Navigation and state persistence
  - Keyboard accessibility
  - Error recovery

### Python Tests
- **Target**: 85%+ coverage
- Focus areas:
  - Scraping logic
  - URL processing
  - HTML transformation

## Continuous Integration

Tests can be run in CI/CD pipelines:

```bash
# Full test suite with coverage
npm run test:all
npm run test:py:coverage
```

Environment variable `CI=true` will:
- Fail on console warnings
- Retry flaky tests twice
- Run with single worker
- Use headless browser

## Debugging Tests

### Unit Tests
```bash
# Run specific test file
npm test -- validation.test.js

# Run tests matching pattern
npm test -- --testNamePattern="validateDataset"

# Debug mode
node --inspect-brk node_modules/.bin/jest --runInBand
```

### E2E Tests
```bash
# Run specific test
npm run test:e2e -- navigation.spec.js

# Debug with headed browser
PWDEBUG=1 npm run test:e2e

# Generate test report after run
npm run test:e2e
npx playwright show-report
```

### Python Tests
```bash
# Run with verbose output
pytest tests/test_scrape.py -vv

# Run specific test function
pytest tests/test_scrape.py::test_frame_output_path_for_navi_frame_uses_existing_navi_path -v

# Debug with pdb on failure
pytest tests/test_scrape.py --pdb
```

## Writing New Tests

### Unit Test Template
```javascript
describe('Feature Name', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it('should do something', () => {
    const result = myFunction(input);
    expect(result).toBe(expected);
  });
});
```

### E2E Test Template
```javascript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/?dataset=...');
    await page.waitForSelector('.sidebar');
  });

  test('should do something', async ({ page }) => {
    await page.click('#button');
    await expect(page.locator('#result')).toBeVisible();
  });
});
```

## Troubleshooting

### Tests Failing Intermittently
- Check for timing issues in E2E tests
- Increase wait timeouts if network is slow
- Check server is running for E2E tests

### localStorage Tests Failing
- Verify mock is being used in setup.js
- Clear mocks between tests with `beforeEach`
- Check localStorage.clear() is called

### E2E Tests Timeout
- Verify `./serve-github-pages-local.sh` is executable
- Check server is accessible on localhost:8000
- Increase webServer timeout in playwright.config.js

### Memory Leak in Tests
- Verify `beforeEach()` cleanup
- Check for event listeners not removed
- Review mock cleanup

## Performance Metrics

The application exposes performance metrics via:

```javascript
// In browser console
window.getPerformanceMetrics()

// Returns: { metricName: { count, total, min, max }, ... }
```

Track key operations:
- `dataset_load` - Dataset loading time
- `tree_render` - Tree rendering time
- `file_load` - File content loading
- Custom metrics as needed

## Best Practices

1. **Isolation**: Each test should be independent
2. **Clarity**: Test names should describe what's being tested
3. **Coverage**: Aim for high coverage of critical paths
4. **Performance**: E2E tests should complete in <30s each
5. **Mocking**: Mock external dependencies (API calls, storage)
6. **Cleanup**: Reset state between tests
7. **Documentation**: Document complex test scenarios

## Resources

- [Jest Documentation](https://jestjs.io/)
- [Playwright Documentation](https://playwright.dev/)
- [pytest Documentation](https://docs.pytest.org/)
- [WCAG Accessibility Standards](https://www.w3.org/WAI/WCAG21/quickref/)

## Contributing

When adding new features:
1. Write tests first (TDD preferred)
2. Ensure new code maintains >80% coverage
3. Run full test suite: `npm run test:all`
4. Fix any accessibility or error handling issues
5. Document new test scenarios in this guide
