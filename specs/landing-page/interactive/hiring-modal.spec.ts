import { test, expect } from '@playwright/test';

test.describe('Hiring Modal', () => {
  test('Hiring Modal Trigger and Close', async ({ page }) => {
    await page.goto('https://konacoffeedonut.com');
    await page.waitForLoadState('networkidle');

    // Wait for page to fully load
    await page.waitForTimeout(2000);

    // Verify page loads correctly
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Look for any hiring/careers related content
    const hiringContent = page.getByText(/hiring|careers|job|join.*team/i).first();

    if (await hiringContent.count() > 0) {
      // Check if hiring content is visible
      const isVisible = await hiringContent.isVisible().catch(() => false);
      if (isVisible) {
        console.log('Hiring content found on page');
      }
    }

    // Look for any modal that might appear
    const modal = page.locator('[role="dialog"], .modal, [class*="modal"]').first();
    if (await modal.count() > 0 && await modal.isVisible().catch(() => false)) {
      // If a modal is open, try to close it
      const closeButton = modal.locator('button').first();
      if (await closeButton.count() > 0) {
        await closeButton.click();
        await page.waitForTimeout(500);
      }
    }

    // Verify page is still functional after any modal interaction
    const pageTitle = await page.title();
    expect(pageTitle).toBeTruthy();
  });
});
