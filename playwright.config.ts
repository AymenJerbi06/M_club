import { defineConfig } from "@playwright/test";

const baseURL = process.env.MCLUB_TEST_URL || "http://localhost:3100";

export default defineConfig({
  testDir: "./tests",
  timeout: 60000,
  workers: 2,
  reporter: "list",
  use: {
    baseURL,
    reducedMotion: "reduce",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  projects: [
    { name: "small-phone", use: { viewport: { width: 320, height: 740 }, isMobile: true, hasTouch: true } },
    { name: "phone", use: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } },
    { name: "phone-landscape", use: { viewport: { width: 844, height: 390 }, isMobile: true, hasTouch: true } },
    { name: "tablet", use: { viewport: { width: 768, height: 1024 }, hasTouch: true } },
    { name: "tablet-landscape", use: { viewport: { width: 1024, height: 768 }, hasTouch: true } },
    { name: "desktop", use: { viewport: { width: 1440, height: 960 } } },
    { name: "webkit-phone", use: { browserName: "webkit", viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } },
  ],
  webServer: process.env.MCLUB_TEST_URL ? undefined : {
    command: "npm run dev -- --port 3100",
    url: baseURL,
    reuseExistingServer: true,
    timeout: 120000,
  },
});
