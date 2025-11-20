
import { test, expect } from '@playwright/test';

test('homepage loads and shows correct title', async ({ page }) => {
  await page.goto('https://www.assessment.nedasmy.com/');
  await expect(page).toHaveTitle(/NxBAS/);

  // Capture screenshot
  await page.screenshot({ path: 'screenshots/homepage.png' });
});
