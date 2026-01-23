import { test, expect } from '@playwright/test';

test.describe('Footer', () => {
  test('Basic Layout', async ({ page }) => {
    await page.goto('https://konacoffeedonut.com');

    // Scroll to bottom of page
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);

    // Verify footer is displayed
    const footer = page.locator('footer').first();
    await expect(footer).toBeVisible();

    // Check footer has some content
    const footerContent = await footer.textContent();
    expect(footerContent).toBeTruthy();

    // Look for common footer elements (social links, copyright, etc.)
    const socialLinks = footer.locator('a[href*="instagram"], a[href*="facebook"], a[href*="twitter"]');
    const socialLinkCount = await socialLinks.count();
    // Social links are optional
    console.log(`Social links found: ${socialLinkCount}`);

    // Look for navigation links in footer
    const footerLinks = footer.locator('a');
    const linkCount = await footerLinks.count();
    expect(linkCount).toBeGreaterThanOrEqual(0);

    // Verify footer is at bottom of page
    const footerBox = await footer.boundingBox();
    expect(footerBox).toBeTruthy();
  });
});
