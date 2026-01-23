import { test, expect } from '@playwright/test';

test.describe('Edge Cases', () => {
  test('Map Load Failure', async ({ page }) => {
    // Block Google Maps API
    await page.route('**/*maps.googleapis.com/**', route => route.abort());
    await page.route('**/*maps.google.com/**', route => route.abort());

    // Navigate to site
    await page.goto('https://konacoffeedonut.com', {
      waitUntil: 'domcontentloaded',
      timeout: 30000
    });

    await page.waitForTimeout(2000);

    // Verify page loads despite blocked maps
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Verify title exists
    const title = await page.title();
    expect(title).toBeTruthy();

    // Verify navigation still works
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();

    // Verify footer is present
    const footer = page.locator('footer').first();
    await expect(footer).toBeVisible();

    // Scroll through page to verify it's functional
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(500);

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);

    // Verify page remains functional
    const bodyContent = await page.locator('body').textContent();
    expect(bodyContent).toBeTruthy();
    expect(bodyContent!.length).toBeGreaterThan(100);
  });
});
