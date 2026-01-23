import { test, expect } from '@playwright/test';

test.describe('Performance', () => {
  test('Core Web Vitals - CLS', async ({ page }) => {
    // Navigate to site
    await page.goto('https://konacoffeedonut.com', {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    await page.waitForLoadState('load');
    await page.waitForTimeout(2000);

    // Verify page loads correctly
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Get layout shift score
    const clsScore = await page.evaluate(() => {
      return new Promise<number>((resolve) => {
        let cls = 0;

        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              cls += (entry as any).value;
            }
          }
        });

        try {
          observer.observe({ type: 'layout-shift', buffered: true });
        } catch (e) {
          // Layout shift API not supported
          resolve(0);
          return;
        }

        setTimeout(() => {
          observer.disconnect();
          resolve(cls);
        }, 1000);
      });
    });

    console.log(`CLS Score: ${clsScore.toFixed(4)}`);

    // Scroll through page
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(500);

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);

    // Scroll back to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    // Verify page is still functional
    const title = await page.title();
    expect(title).toBeTruthy();

    // Verify navigation is visible
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();

    // CLS should be below 0.25 (good is below 0.1, needs improvement is 0.1-0.25)
    expect(clsScore).toBeLessThan(0.25);
  });
});
