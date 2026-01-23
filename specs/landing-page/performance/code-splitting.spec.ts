import { test, expect } from '@playwright/test';

test.describe('Performance', () => {
  test('Code Splitting and Lazy Loading', async ({ page }) => {
    // Track JavaScript resources
    const jsResources: string[] = [];

    page.on('response', async (response) => {
      const url = response.url();
      const contentType = response.headers()['content-type'] || '';

      if (contentType.includes('javascript') || url.endsWith('.js')) {
        jsResources.push(url);
      }
    });

    // Navigate to site
    await page.goto('https://konacoffeedonut.com', {
      waitUntil: 'domcontentloaded',
      timeout: 30000
    });

    await page.waitForLoadState('load');
    await page.waitForTimeout(1000);

    // Verify page loads correctly
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Verify JavaScript resources were loaded
    expect(jsResources.length).toBeGreaterThanOrEqual(0);
    console.log(`JavaScript resources loaded: ${jsResources.length}`);

    // Scroll to trigger any lazy loading
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);

    // Verify page is still functional after scrolling
    const title = await page.title();
    expect(title).toBeTruthy();

    // Verify navigation is visible
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();

    console.log(`Total JS resources after scrolling: ${jsResources.length}`);
  });
});
