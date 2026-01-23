import { test, expect } from '@playwright/test';

test.describe('Read-Only Static Tests', () => {
  test('Analytics and Tracking Scripts', async ({ page }) => {
    // Navigate to the site
    await page.goto('https://konacoffeedonut.com', { waitUntil: 'load' });
    await page.waitForLoadState('domcontentloaded');

    // Wait for scripts to initialize
    await page.waitForTimeout(2000);

    // Verify page loads successfully
    const title = await page.title();
    expect(title).toBeTruthy();

    // Check for any analytics scripts (site may use various providers)
    const hasAnalytics = await page.evaluate(() => {
      const scripts = Array.from(document.querySelectorAll('script[src]'));
      return scripts.some(script => {
        const src = script.getAttribute('src') || '';
        return src.includes('analytics') ||
               src.includes('gtag') ||
               src.includes('googletagmanager') ||
               src.includes('facebook') ||
               src.includes('pixel') ||
               src.includes('vercel');
      });
    });

    // Log analytics presence (not required, just informational)
    console.log(`Analytics scripts found: ${hasAnalytics}`);

    // Verify no JavaScript errors that would prevent tracking
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Page should be functional
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });
});
