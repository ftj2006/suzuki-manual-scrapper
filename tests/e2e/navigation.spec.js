// tests/e2e/navigation.spec.js
// End-to-end tests for navigation and UI interactions

import { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the app
    await page.goto('/?dataset=swift-a2l310-a2l412-a2l414&submodel=AENKSB0A&model=K10C');
    // Wait for the app to load
    await page.waitForSelector('[data-testid="viewer"] || .viewer', { timeout: 5000 });
  });

  test('should load the main interface', async ({ page }) => {
    // Check for key UI elements
    const sidebar = await page.locator('.sidebar').isVisible();
    expect(sidebar).toBe(true);

    const viewer = await page.locator('.viewer').isVisible();
    expect(viewer).toBe(true);

    const breadcrumb = await page.locator('#breadcrumb').isVisible();
    expect(breadcrumb).toBe(true);
  });

  test('should display breadcrumb navigation', async ({ page }) => {
    const breadcrumbNav = await page.locator('#breadcrumbNav');
    const breadcrumbText = await breadcrumbNav.textContent();
    expect(breadcrumbText).toBeTruthy();
  });

  test('should toggle breadcrumb visibility', async ({ page }) => {
    const toggleButton = page.locator('#breadcrumbToggle');
    const breadcrumbNav = page.locator('#breadcrumbNav');

    // Initially visible
    let visible = await breadcrumbNav.isVisible();
    expect(visible).toBe(true);

    // Click toggle
    await toggleButton.click();
    await page.waitForTimeout(300); // Wait for animation

    // Should be hidden
    visible = await breadcrumbNav.isVisible();
    expect(visible).toBe(false);

    // Click again to show
    await toggleButton.click();
    await page.waitForTimeout(300);

    visible = await breadcrumbNav.isVisible();
    expect(visible).toBe(true);
  });

  test('should respond to keyboard shortcut for help', async ({ page }) => {
    // Press '?' to show keyboard help
    await page.keyboard.press('?');
    await page.waitForTimeout(500);

    // Look for keyboard help modal
    const dialog = page.locator('dialog');
    const isVisible = await dialog.isVisible();
    expect(isVisible).toBe(true);

    // Check for keyboard shortcuts content
    const shortcutsText = await page.locator('dialog').textContent();
    expect(shortcutsText).toContain('Keyboard');
  });

  test('should close keyboard help modal', async ({ page }) => {
    // Open help
    await page.keyboard.press('?');
    await page.waitForTimeout(500);

    let dialog = page.locator('dialog');
    expect(await dialog.isVisible()).toBe(true);

    // Press Escape to close
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);

    // Dialog should be gone or hidden
    const dialogs = await page.locator('dialog').count();
    expect(dialogs).toBe(0);
  });

  test('should toggle sidebar on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    const menuToggle = page.locator('#menuToggle');
    const sidebar = page.locator('.sidebar');

    // Toggle sidebar open
    await menuToggle.click();
    await page.waitForTimeout(300);

    // Sidebar should be visible
    const visible = await sidebar.isVisible();
    expect(visible).toBe(true);

    // Close sidebar
    await menuToggle.click();
    await page.waitForTimeout(300);
  });

  test('should persist breadcrumb state across navigation', async ({ page }) => {
    // Toggle breadcrumb closed
    const toggleButton = page.locator('#breadcrumbToggle');
    await toggleButton.click();
    await page.waitForTimeout(300);

    // The state should persist (this would need to be verified in localStorage
    // or by checking if the breadcrumb remains hidden after reload)
    const breadcrumbNav = page.locator('#breadcrumbNav');
    let visible = await breadcrumbNav.isVisible();
    expect(visible).toBe(false);

    // Navigate to a different page
    await page.goto('/?tab=bookmarks');
    await page.waitForTimeout(500);

    // Breadcrumb should still be hidden
    visible = await breadcrumbNav.isVisible();
    expect(visible).toBe(false);
  });

  test('should handle theme toggle', async ({ page }) => {
    const themeToggle = page.locator('#themeToggle');
    const layout = page.locator('.layout');

    // Get initial theme
    let classes = await layout.getAttribute('class');
    const initialTheme = classes;

    // Toggle theme
    await themeToggle.click();
    await page.waitForTimeout(300);

    // Theme should change
    classes = await layout.getAttribute('class');
    expect(classes).not.toBe(initialTheme);
  });
});
