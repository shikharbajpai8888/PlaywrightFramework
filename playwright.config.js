const { defineConfig, devices } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests',
  timeout: 30*1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'allure-playwright', //'html', 
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] ,
         headless : false,
         screenshot : 'off',
         trace: 'on' },// 'on-first-retry' }, //'retain-on-failure' },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'],
    //    headless : false,
    //    screenshot : 'off',
    //    trace: 'on-first-retry' },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'],
    //    headless : false,
    //    screenshot : 'off',
    //    trace: 'on-first-retry' },
    // },

    // /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] ,
    //    headless : false,
    //    screenshot : 'off',
    //    trace: 'on-first-retry' },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] ,
    //    headless : false,
    //    screenshot : 'off',
    //    trace: 'on-first-retry' },
    // },

    // /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' ,
    //    headless : false,
    //    screenshot : 'off',
    //    trace: 'on-first-retry' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' ,
    //    headless : false,
    //    screenshot : 'off',
    //    trace: 'on-first-retry' },
    // },
  ]
});

