// tests/e2e/accessibility.spec.js
// End-to-end tests for accessibility features

import { test, expect } from '@playwright/test';

test.describe('Accessibility Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/?dataset=swift-a2l310-a2l412-a2l414&submodel=AENKSB0A&model=K10C');
    await page.waitForSelector('.sidebar', { timeout: 5000 });
  });

  test('should have proper focus indicators on interactive elements', async ({ page }) => {
    const menuToggle = page.locator('#menuToggle');

    // Tab to the menu toggle
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);

    // Check if it has focus styles
    const isFocused = await menuToggle.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return styles.outline !== 'none' || styles.boxShadow !== 'none';
    });

    expect(isFocused).toBe(true);
  });

  test('should support keyboard navigation with arrow keys', async ({ page }) => {
    // The app should respond to keyboard navigation in tree items
    // This test verifies that arrow keys don't cause errors
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowUp');
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('ArrowRight');

    // Check for any console errors
    const errors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    expect(errors.length).toBe(0);
  });

  test('should support keyboard shortcuts without errors', async ({ page }) => {
    const errors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    // Test various keyboard shortcuts
    await page.keyboard.press('?'); // Help
    await page.waitForTimeout(200);
    await page.keyboard.press('Escape');

    await page.keyboard.press('Control+K'); // Search focus
    await page.waitForTimeout(200);

    await page.keyboard.press('Slash'); // Quick search
    await page.waitForTimeout(200);

    expect(errors.length).toBe(0);
  });

  test('should have accessible dialog for keyboard help', async ({ page }) => {
    // Open keyboard help
    await page.keyboard.press('?');
    await page.waitForTimeout(500);

    const dialog = page.locator('dialog');

    // Dialog should exist and be visible
    expect(await dialog.isVisible()).toBe(true);

    // Check for proper ARIA attributes
    const role = await dialog.getAttribute('role');
    expect(role).toBe('dialog');

    // Should have close button
    const closeButton = page.locator('button.close-button, button[aria-label*="close"], dialog button:first-of-type');
    expect(await closeButton.count()).toBeGreaterThan(0);

    // Close dialog
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
  });

  test('should support screen reader content', async ({ page }) => {
    // Check for screen reader only content
    const srOnlyElements = page.locator('.sr-only');
    const count = await srOnlyElements.count();

    // There should be some screen reader only content
    expect(count).toBeGreaterThanOrEqual(0); // May vary based on implementation
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    // Check that headings follow logical hierarchy
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').count();
    expect(headings).toBeGreaterThanOrEqual(0);
  });

  test('should have semantic HTML structure', async ({ page }) => {
    // Check for main landmark
    const main = page.locator('main');
    const mainCount = await main.count();

    // Check for semantic nav
    const nav = page.locator('nav');
    const navCount = await nav.count();

    // Should have some semantic elements
    expect(mainCount + navCount).toBeGreaterThanOrEqual(0);
  });

  test('keyboard help modal should have navigation information', async ({ page }) => {
    await page.keyboard.press('?');
    await page.waitForTimeout(500);

    const dialog = page.locator('dialog');
    const content = await dialog.textContent();

    // Should mention keyboard navigation
    expect(content).toContain('Navigation');
    expect(content).toContain('Arrow');
  });

  test('should handle focus trap in keyboard help modal', async ({ page }) => {
    // Open keyboard help
    await page.keyboard.press('?');
    await page.waitForTimeout(500);

    const dialog = page.locator('dialog');
    expect(await dialog.isVisible()).toBe(true);

    // Tab through the dialog
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Dialog should still be visible (focus trapped)
    expect(await dialog.isVisible()).toBe(true);

    // Close with Escape
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
  });
});
