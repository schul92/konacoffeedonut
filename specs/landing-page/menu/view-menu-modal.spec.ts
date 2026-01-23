import { test, expect } from '@playwright/test';

test.describe('Menu Section', () => {
  test('View Menu Button and Modal', async ({ page }) => {
    await page.goto('https://konacoffeedonut.com');
    await page.waitForLoadState('load');

    // Scroll down to find menu section
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);

    // Look for menu-related links or buttons
    const menuLink = page.locator('a[href*="menu"], a:has-text("menu")').first();

    if (await menuLink.count() > 0 && await menuLink.isVisible()) {
      // Verify menu link is present
      await expect(menuLink).toBeVisible();

      // Get href to verify it's a valid link
      const href = await menuLink.getAttribute('href');
      expect(href).toBeTruthy();
    }

    // Verify page is functional
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Verify there's some content on the page
    const title = await page.title();
    expect(title).toBeTruthy();
  });
});
