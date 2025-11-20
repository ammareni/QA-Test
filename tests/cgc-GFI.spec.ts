import { test, expect } from '@playwright/test';

test('homepage loads and shows correct title', async ({ page }) => {
  await page.goto('https://www.cgc-png.gfi-test.com/');
  await expect(page).toHaveTitle(/GFI/);

  // Capture screenshot
  await page.screenshot({ path: 'screenshots/homepage-gfi.png' });
});
