// playwright.config.js
export default {
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:8000/suzuki-manual-scrapper/modern-manual-site/index.html',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  webServer: {
    command: './serve-github-pages-local.sh',
    url: 'http://localhost:8000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...{}, channel: 'chrome' },
    },
    {
      name: 'firefox',
      use: { ...{}, channel: 'firefox' },
    },
    {
      name: 'webkit',
      use: { ...{}, channel: 'webkit' },
    },
  ],
};
