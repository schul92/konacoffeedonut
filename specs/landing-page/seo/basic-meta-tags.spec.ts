import { test, expect } from '@playwright/test';

test.describe('SEO and Meta Tags', () => {
  test('Basic Meta Tags', async ({ page }) => {
    await page.goto('https://konacoffeedonut.com');
    await page.waitForLoadState('networkidle');

    // Verify page loads
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Verify title tag is present and non-empty
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);

    // Verify page content is present
    const bodyContent = await body.textContent();
    expect(bodyContent).toBeTruthy();
    expect(bodyContent!.length).toBeGreaterThan(100);

    // Verify HTML structure is present
    const htmlElement = await page.locator('html').count();
    expect(htmlElement).toBe(1);
  });
});
