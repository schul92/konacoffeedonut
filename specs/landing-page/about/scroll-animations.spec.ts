import { test, expect } from '@playwright/test';

test.describe('About Section', () => {
  test('Scroll Animations', async ({ page }) => {
    await page.goto('https://konacoffeedonut.com');
    await page.waitForLoadState('networkidle');

    // Verify page loads
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Scroll to bottom to trigger any scroll-based animations
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);

    // Scroll back to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    // Scroll to middle of page
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(1000);

    // Verify page is still functional
    const title = await page.title();
    expect(title).toBeTruthy();

    // Verify no horizontal scrollbar (layout issue indicator)
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalScroll).toBe(false);
  });
});
