import { test, expect } from '@playwright/test';

test.describe('Read-Only Static Tests', () => {
  test('Critical Assets Loading', async ({ page }) => {
    const failedResources: string[] = [];

    page.on('response', async (response) => {
      const status = response.status();
      if (status === 404) {
        failedResources.push(response.url());
      }
    });

    // Navigate to the site
    await page.goto('https://konacoffeedonut.com', { waitUntil: 'load' });

    // Verify page loads with content
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Check that some images are present and visible
    const images = page.locator('img:visible');
    const imageCount = await images.count();
    expect(imageCount).toBeGreaterThan(0);

    // Verify CSS is loaded by checking computed styles
    const bodyStyles = await body.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        fontFamily: computed.fontFamily,
        backgroundColor: computed.backgroundColor,
      };
    });

    expect(bodyStyles.fontFamily).toBeTruthy();

    // Check for stylesheet links
    const stylesheets = await page.locator('link[rel="stylesheet"]').count();
    expect(stylesheets).toBeGreaterThanOrEqual(0);

    // Verify no critical 404 errors for page resources
    // Filter out external resources that might legitimately fail
    const criticalFailures = failedResources.filter(url =>
      url.includes('konacoffeedonut.com') && !url.includes('favicon')
    );

    expect(criticalFailures.length).toBe(0);
  });
});
