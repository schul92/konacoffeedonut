import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {
  test('Tablet Landscape - 1024x768 (iPad Landscape)', async ({ page }) => {
    // Set tablet landscape viewport
    await page.setViewportSize({ width: 1024, height: 768 });

    await page.goto('https://konacoffeedonut.com');
    await page.waitForLoadState('load');

    // Verify page loads
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Verify no horizontal scroll
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalScroll).toBe(false);

    // Scroll through page
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(300);

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);

    // Scroll back to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);

    // Verify content exists
    const title = await page.title();
    expect(title).toBeTruthy();

    // Verify headings are readable
    const headings = page.locator('h1, h2, h3');
    const headingCount = await headings.count();
    expect(headingCount).toBeGreaterThan(0);
  });
});
