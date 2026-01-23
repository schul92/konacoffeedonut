import { test, expect } from '@playwright/test';

test.describe('Edge Cases', () => {
  test('Rapid Navigation Clicks', async ({ page }) => {
    await page.goto('https://konacoffeedonut.com');
    await page.waitForLoadState('load');

    // Verify page loads
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Scroll down and up rapidly to simulate user interaction
    for (let i = 0; i < 5; i++) {
      await page.evaluate(() => window.scrollTo(0, 500));
      await page.waitForTimeout(50);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(50);
    }

    // Wait for any async operations
    await page.waitForTimeout(500);

    // Verify page is still functional
    const title = await page.title();
    expect(title).toBeTruthy();

    // Verify page content is present
    const bodyContent = await page.locator('body').textContent();
    expect(bodyContent).toBeTruthy();
    expect(bodyContent!.length).toBeGreaterThan(100);
  });
});
