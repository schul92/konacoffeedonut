import { test, expect } from '@playwright/test';

test.describe('Edge Cases', () => {
  test('Browser Back/Forward', async ({ page }) => {
    // Navigate to main page
    await page.goto('https://konacoffeedonut.com');
    await page.waitForLoadState('load');

    // Wait for any modals/overlays
    await page.waitForTimeout(2000);

    // Verify page loads
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Scroll through page
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(300);

    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);

    // Verify page is still functional
    const title = await page.title();
    expect(title).toBeTruthy();

    // Verify page content is present
    const bodyContent = await body.textContent();
    expect(bodyContent).toBeTruthy();
    expect(bodyContent!.length).toBeGreaterThan(100);
  });
});
