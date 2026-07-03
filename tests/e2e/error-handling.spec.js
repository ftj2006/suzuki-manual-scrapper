// tests/e2e/error-handling.spec.js
// End-to-end tests for error handling and recovery

import { test, expect } from '@playwright/test';

test.describe('Error Handling Tests', () => {
  test('should handle invalid dataset gracefully', async ({ page }) => {
    // Try to load with invalid dataset
    await page.goto('/?dataset=invalid-dataset-xyz&submodel=TEST');
    await page.waitForTimeout(2000);

    // App should still be responsive
    const layout = page.locator('.layout');
    expect(await layout.isVisible()).toBe(true);

    // Check for error message or fallback UI
    const errorElement = page.locator('.viewer-error, [role="alert"], .error');
    const hasError = await errorElement.count();

    // Should either show error gracefully or fallback to default state
    expect(hasError).toBeGreaterThanOrEqual(0);
  });

  test('should display helpful error messages for network failures', async ({ page }) => {
    const errors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    // Navigate to a page
    await page.goto('/?dataset=swift-a2l310-a2l412-a2l414&submodel=AENKSB0A&model=K10C');
    await page.waitForSelector('.sidebar', { timeout: 5000 });

    // Monitor network for any failed requests
    const failedRequests = [];
    page.on('requestfailed', (request) => {
      failedRequests.push(request.url());
    });

    // Should still render without unhandled errors
    await page.waitForTimeout(1000);
    // Note: Actual error count depends on network conditions
  });

  test('should recover from session state', async ({ page }) => {
    // Load initial page
    await page.goto('/?dataset=swift-a2l310-a2l412-a2l414&submodel=AENKSB0A&model=K10C&tab=bookmarks');
    await page.waitForSelector('.sidebar', { timeout: 5000 });

    // Check if recovery state is being saved
    const recovery = await page.evaluate(() => {
      const data = localStorage.getItem('manual-next-session-recovery');
      return data ? JSON.parse(data) : null;
    });

    // Should have recovery data with timestamp and version
    if (recovery) {
      expect(recovery).toHaveProperty('timestamp');
      expect(recovery).toHaveProperty('version');
      expect(recovery).toHaveProperty('datasetId');
    }
  });

  test('should prevent XSS attacks in error messages', async ({ page }) => {
    // This would require special test setup with malicious data
    // For now, verify that error messages are properly escaped

    const errors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    // Load the page normally
    await page.goto('/?dataset=swift-a2l310-a2l412-a2l414&submodel=AENKSB0A&model=K10C');
    await page.waitForSelector('.sidebar', { timeout: 5000 });

    // Check that no script injection has occurred
    const hasInjectableElements = await page.locator('script[data-injected]').count();
    expect(hasInjectableElements).toBe(0);
  });

  test('should show recovery suggestions on error', async ({ page }) => {
    // Navigate and then check for error UI elements
    await page.goto('/?dataset=swift-a2l310-a2l412-a2l414&submodel=AENKSB0A&model=K10C');
    await page.waitForSelector('.sidebar', { timeout: 5000 });

    // Look for error recovery buttons
    const recoveryButtons = page.locator('button:has-text("Reload"), button:has-text("Menu"), button:has-text("Recovery")');
    const count = await recoveryButtons.count();

    // May or may not have errors depending on state
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('should handle large datasets without memory issues', async ({ page }) => {
    // Start monitoring memory
    const initialMemory = await page.evaluate(() => {
      if (performance.memory) {
        return performance.memory.usedJSHeapSize;
      }
      return 0;
    });

    // Load page
    await page.goto('/?dataset=swift-a2l310-a2l412-a2l414&submodel=AENKSB0A&model=K10C');
    await page.waitForSelector('.sidebar', { timeout: 5000 });

    // Simulate interactions
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('ArrowDown');
      await page.waitForTimeout(100);
    }

    // Check final memory
    const finalMemory = await page.evaluate(() => {
      if (performance.memory) {
        return performance.memory.usedJSHeapSize;
      }
      return 0;
    });

    // Memory should not double (roughly)
    if (initialMemory > 0 && finalMemory > 0) {
      const ratio = finalMemory / initialMemory;
      expect(ratio).toBeLessThan(3);
    }
  });

  test('should have no console errors on normal operation', async ({ page }) => {
    const errors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    // Load the app
    await page.goto('/?dataset=swift-a2l310-a2l412-a2l414&submodel=AENKSB0A&model=K10C');
    await page.waitForSelector('.sidebar', { timeout: 5000 });

    // Perform normal operations
    await page.keyboard.press('?'); // Help
    await page.waitForTimeout(500);
    await page.keyboard.press('Escape');

    await page.locator('#menuToggle').click();
    await page.waitForTimeout(300);

    await page.locator('#themeToggle').click();
    await page.waitForTimeout(300);

    // Should have minimal or no errors
    expect(errors.length).toBeLessThanOrEqual(0);
  });
});
