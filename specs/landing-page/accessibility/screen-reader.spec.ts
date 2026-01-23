import { test, expect } from '@playwright/test';

test.describe('Accessibility Passive', () => {
  test('Screen Reader Compatibility', async ({ page }) => {
    await page.goto('https://konacoffeedonut.com');
    await page.waitForLoadState('networkidle');

    // Verify page loads
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Check for headings (important for screen readers)
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
    expect(headings.length).toBeGreaterThan(0);

    // Verify page title exists
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);

    // Check language attribute is set on html element
    const htmlLang = await page.locator('html').getAttribute('lang');
    expect(htmlLang).toBeTruthy();

    // Check that most images have alt attributes
    const images = await page.locator('img').all();
    let imagesWithAlt = 0;
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      if (alt !== null) {
        imagesWithAlt++;
      }
    }

    // Most images should have alt attributes
    if (images.length > 0) {
      const altPercentage = (imagesWithAlt / images.length) * 100;
      console.log(`Images with alt attributes: ${altPercentage.toFixed(1)}%`);
      expect(altPercentage).toBeGreaterThan(50);
    }

    console.log('Accessibility check completed');
    console.log(`- Headings found: ${headings.length}`);
    console.log(`- Images checked: ${images.length}`);
    console.log(`- Language: ${htmlLang}`);
  });
});
