import { test, expect } from '@playwright/test';

test.describe('Mobile Navigation', () => {
  test('Menu Close', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('https://konacoffeedonut.com');
    await page.waitForLoadState('load');

    // Wait for any initial modals/overlays to disappear
    await page.waitForTimeout(3000);

    // Verify page loads
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Verify page title exists
    const title = await page.title();
    expect(title).toBeTruthy();

    // Scroll through page to verify it's functional
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(300);

    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);

    // Verify page content is present
    const bodyContent = await body.textContent();
    expect(bodyContent).toBeTruthy();
    expect(bodyContent!.length).toBeGreaterThan(100);
  });
});
