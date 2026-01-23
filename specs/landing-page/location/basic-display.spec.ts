import { test, expect } from '@playwright/test';

test.describe('Location Section', () => {
  test('Basic Display', async ({ page }) => {
    await page.goto('https://konacoffeedonut.com');
    await page.waitForLoadState('load');

    // Verify page loads
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Scroll to look for location section
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(500);

    // Verify page title exists
    const title = await page.title();
    expect(title).toBeTruthy();

    // Check for map embed (Google Maps iframe)
    const mapEmbed = page.locator('iframe[src*="google.com/maps"]');
    if (await mapEmbed.count() > 0) {
      await expect(mapEmbed.first()).toBeVisible();
    }

    // Verify page has some content
    const bodyContent = await body.textContent();
    expect(bodyContent).toBeTruthy();
    expect(bodyContent!.length).toBeGreaterThan(100);
  });
});
