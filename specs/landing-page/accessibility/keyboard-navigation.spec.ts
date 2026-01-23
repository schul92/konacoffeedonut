import { test, expect } from '@playwright/test';

test.describe('Accessibility Interactive', () => {
  test('Keyboard Navigation', async ({ page }) => {
    await page.goto('https://konacoffeedonut.com');
    await page.waitForLoadState('domcontentloaded');

    // Verify page loads
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Tab through first few elements
    const focusedElements: string[] = [];

    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab');
      await page.waitForTimeout(100);

      const focusInfo = await page.evaluate(() => {
        const el = document.activeElement;
        if (!el || el === document.body) return null;
        return el.tagName.toLowerCase();
      });

      if (focusInfo) {
        focusedElements.push(focusInfo);
      }
    }

    // Verify we can tab through elements
    expect(focusedElements.length).toBeGreaterThan(0);
    console.log(`Focused elements: ${focusedElements.join(', ')}`);

    // Verify Shift+Tab works (no keyboard trap)
    await page.keyboard.press('Shift+Tab');
    await page.waitForTimeout(100);

    const backFocusInfo = await page.evaluate(() => {
      const el = document.activeElement;
      return el ? el.tagName.toLowerCase() : null;
    });

    expect(backFocusInfo).toBeTruthy();
  });
});
