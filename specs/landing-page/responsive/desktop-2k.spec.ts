import { test, expect } from '@playwright/test';

test.describe('Responsive', () => {
  test('Ultra-wide 2560x1440', async ({ page }) => {
    // Set viewport to 2560x1440
    await page.setViewportSize({ width: 2560, height: 1440 });

    // Navigate to site
    await page.goto('https://konacoffeedonut.com');
    await page.waitForLoadState('domcontentloaded');

    // Wait for any modals/overlays
    await page.waitForTimeout(2000);

    // Verify page loads correctly
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Verify no horizontal scroll (layout not broken)
    const hasHorizontalScroll = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    expect(hasHorizontalScroll).toBe(false);

    // Verify content exists
    const title = await page.title();
    expect(title).toBeTruthy();

    // Test headings exist
    const headings = page.locator('h1, h2, h3');
    const headingCount = await headings.count();
    expect(headingCount).toBeGreaterThan(0);

    // Verify page content is present
    const bodyContent = await body.textContent();
    expect(bodyContent).toBeTruthy();
    expect(bodyContent!.length).toBeGreaterThan(100);
  });
});
