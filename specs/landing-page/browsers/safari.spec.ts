import { test, expect } from '@playwright/test';

test.describe('Cross-browser Desktop', () => {
  test('WebKit/Safari Compatibility', async ({ page }) => {
    await page.goto('https://konacoffeedonut.com');
    await page.waitForLoadState('load');

    // Verify page loads correctly
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Verify title exists
    const title = await page.title();
    expect(title).toBeTruthy();

    // Verify navigation is visible
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();

    // Verify footer is present
    const footer = page.locator('footer').first();
    await expect(footer).toBeVisible();

    // Verify some images load
    const images = page.locator('img');
    const imageCount = await images.count();
    expect(imageCount).toBeGreaterThan(0);

    // Verify no horizontal scroll
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalScroll).toBe(false);
  });
});
