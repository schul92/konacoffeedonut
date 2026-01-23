import { test, expect } from '@playwright/test';

test.describe('Desktop Navigation', () => {
  test('Scroll Behavior', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Navigate to site
    await page.goto('https://konacoffeedonut.com', { waitUntil: 'networkidle' });

    // Wait for navigation to be visible
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();

    // Verify initial state at top of page
    const initialScrollY = await page.evaluate(() => window.scrollY);
    expect(initialScrollY).toBe(0);

    // Scroll down
    await page.evaluate(() => window.scrollTo({ top: 500, behavior: 'smooth' }));
    await page.waitForTimeout(500);

    // Verify we scrolled
    const scrolledPosition = await page.evaluate(() => window.scrollY);
    expect(scrolledPosition).toBeGreaterThan(100);

    // Verify navigation is still visible after scrolling
    await expect(nav).toBeVisible();

    // Scroll back to top
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
    await page.waitForTimeout(500);

    // Verify we're back at top
    const finalScrollY = await page.evaluate(() => window.scrollY);
    expect(finalScrollY).toBeLessThan(50);

    // Verify navigation is still visible
    await expect(nav).toBeVisible();
  });
});
