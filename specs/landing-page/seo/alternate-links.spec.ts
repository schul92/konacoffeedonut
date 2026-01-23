import { test, expect } from '@playwright/test';

test.describe('SEO and Meta Tags', () => {
  test('Multi-language Alternate Links', async ({ page }) => {
    await page.goto('https://konacoffeedonut.com');
    await page.waitForLoadState('networkidle');

    // Check for alternate language links (optional for some sites)
    const alternateLinks = await page.locator('link[rel="alternate"][hreflang]').all();

    // If the site has alternate links, verify they are properly formatted
    if (alternateLinks.length > 0) {
      for (const link of alternateLinks) {
        const hreflang = await link.getAttribute('hreflang');
        const href = await link.getAttribute('href');
        expect(hreflang).toBeTruthy();
        expect(href).toBeTruthy();
        // URLs should be absolute
        expect(href).toMatch(/^https?:\/\//);
      }
    }

    // Verify canonical link if present
    const canonical = await page.locator('link[rel="canonical"]');
    if (await canonical.count() > 0) {
      const href = await canonical.getAttribute('href');
      expect(href).toBeTruthy();
    }

    // Basic page load verification
    const title = await page.title();
    expect(title).toBeTruthy();
  });
});
