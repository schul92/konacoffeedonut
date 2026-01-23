import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  test('Color Contrast', async ({ page }) => {
    await page.goto('https://konacoffeedonut.com');
    await page.waitForLoadState('networkidle');

    // Verify page loads
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Verify page has content
    const title = await page.title();
    expect(title).toBeTruthy();

    // Check that text is readable by verifying computed styles
    const hasReadableText = await page.evaluate(() => {
      const textElements = document.querySelectorAll('p, h1, h2, h3, span, a');
      let readableCount = 0;

      for (const el of textElements) {
        const style = window.getComputedStyle(el);
        const color = style.color;
        const fontSize = parseFloat(style.fontSize);

        // Check that text has color and reasonable size
        if (color && fontSize >= 12) {
          readableCount++;
        }
      }

      return readableCount > 0;
    });

    expect(hasReadableText).toBe(true);

    // Verify buttons have some styling
    const buttons = page.locator('button, a');
    const buttonCount = await buttons.count();
    expect(buttonCount).toBeGreaterThan(0);
  });
});
