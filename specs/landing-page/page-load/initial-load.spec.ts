import { test, expect } from '@playwright/test';

test.describe('Read-Only Static Tests', () => {
  test('Initial Page Load', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://konacoffeedonut.com', { waitUntil: 'networkidle' });

    // Verify page title exists and is not empty
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);

    // Verify meta description is present
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toBeTruthy();
    expect(metaDescription!.length).toBeGreaterThan(10);

    // Verify page has loaded with content
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Verify favicon exists
    const faviconLink = await page.locator('link[rel*="icon"]').first();
    expect(await faviconLink.count()).toBeGreaterThan(0);
  });
});
