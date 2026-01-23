import { test, expect } from '@playwright/test';

test.describe('Twitter Card Tags', () => {
  test('Twitter Card Tags', async ({ page }) => {
    await page.goto('https://konacoffeedonut.com');
    await page.waitForLoadState('networkidle');

    // Verify twitter:card is present
    const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute('content');
    expect(twitterCard).toBeTruthy();

    // Verify twitter:title is present
    const twitterTitle = await page.locator('meta[name="twitter:title"]').getAttribute('content');
    expect(twitterTitle).toBeTruthy();

    // Verify twitter:image is present
    const twitterImage = await page.locator('meta[name="twitter:image"]').getAttribute('content');
    expect(twitterImage).toBeTruthy();
  });
});
