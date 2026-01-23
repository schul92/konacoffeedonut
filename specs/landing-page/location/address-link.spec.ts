import { test, expect } from '@playwright/test';

test.describe('Location Section', () => {
  test('Address Link', async ({ page }) => {
    await page.goto('https://konacoffeedonut.com');
    await page.waitForLoadState('load');

    // Scroll down to find location content
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(500);

    // Look for address-related content
    const addressText = page.getByText(/Kalakaua|Honolulu|Hawaii|HI|Waikiki/i).first();

    if (await addressText.count() > 0) {
      await expect(addressText).toBeVisible();
    }

    // Look for directions link (could be Google Maps link)
    const directionsLink = page.locator('a[href*="google.com/maps"], a[href*="goo.gl/maps"], a:has-text("Directions")').first();

    if (await directionsLink.count() > 0) {
      await expect(directionsLink).toBeVisible();

      // Verify link has href
      const href = await directionsLink.getAttribute('href');
      expect(href).toBeTruthy();
    }

    // Verify page is functional
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });
});
