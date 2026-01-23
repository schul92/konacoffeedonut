import { test, expect } from '@playwright/test';

test.describe('Responsive Mobile', () => {
  test('Mobile Portrait - 375x667 (iPhone SE)', async ({ page }) => {
    // Set viewport to 375x667
    await page.setViewportSize({ width: 375, height: 667 });

    // Navigate to site
    await page.goto('https://konacoffeedonut.com');
    await page.waitForLoadState('load');

    // Verify page loads
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Verify no horizontal scrolling (with tolerance)
    const bodyScrollWidth = await page.evaluate(() => document.body.scrollWidth);
    const bodyClientWidth = await page.evaluate(() => document.body.clientWidth);
    expect(bodyScrollWidth).toBeLessThanOrEqual(bodyClientWidth + 10);

    // Scroll through page
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(300);

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);

    // Scroll back to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);

    // Verify images scale properly (don't exceed viewport)
    const images = page.locator('img:visible');
    const imageCount = await images.count();

    for (let i = 0; i < Math.min(imageCount, 5); i++) {
      const img = images.nth(i);
      if (await img.isVisible()) {
        const imgWidth = await img.evaluate((el) => el.getBoundingClientRect().width);
        expect(imgWidth).toBeLessThanOrEqual(400); // Allow some tolerance
      }
    }

    // Verify page title exists
    const title = await page.title();
    expect(title).toBeTruthy();
  });
});
