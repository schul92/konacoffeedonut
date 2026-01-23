// Simple script to check analytics scripts on the website
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('Navigating to https://www.imdonut.nyc...');
  await page.goto('https://www.imdonut.nyc', { waitUntil: 'load' });

  // Wait a bit for scripts to load
  await page.waitForTimeout(2000);

  // Check for Google Analytics
  const gaScripts = await page.locator('script[src*="googletagmanager.com/gtag/js"]').count();
  console.log(`\nGoogle Analytics scripts: ${gaScripts}`);

  if (gaScripts > 0) {
    const gaSrc = await page.locator('script[src*="googletagmanager.com/gtag/js"]').first().getAttribute('src');
    console.log(`  GA script src: ${gaSrc}`);
  }

  // Check for GA inline config script
  const gaConfigScript = await page.locator('script#google-analytics').count();
  console.log(`Google Analytics config script: ${gaConfigScript}`);

  // Check for Meta Pixel
  const metaPixelScript = await page.locator('script#meta-pixel').count();
  console.log(`Meta Pixel script: ${metaPixelScript}`);

  const metaPixelNoscript = await page.locator('noscript img[src*="facebook.com/tr"]').count();
  console.log(`Meta Pixel noscript: ${metaPixelNoscript}`);

  // Check for Ahrefs
  const ahrefsScript = await page.locator('script[src*="analytics.ahrefs.com"]').count();
  console.log(`Ahrefs Analytics script: ${ahrefsScript}`);

  if (ahrefsScript > 0) {
    const ahrefsKey = await page.locator('script[src*="analytics.ahrefs.com"]').getAttribute('data-key');
    console.log(`  Ahrefs data-key: ${ahrefsKey}`);
  }

  // Check for Vercel Analytics
  const scripts = await page.evaluate(() => {
    const allScripts = Array.from(document.querySelectorAll('script'));
    return {
      vercel: allScripts.some(s => s.src.includes('vercel') || s.src.includes('vitals')),
      allSrcs: allScripts.map(s => s.src).filter(src => src && !src.includes('localhost'))
    };
  });

  console.log(`Vercel Analytics: ${scripts.vercel}`);
  console.log(`\nAll script sources:`);
  scripts.allSrcs.forEach(src => console.log(`  - ${src}`));

  // Check preconnect links
  const preconnects = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('link[rel="preconnect"]'));
    return links.map(l => l.getAttribute('href'));
  });

  console.log(`\nPreconnect links:`);
  preconnects.forEach(href => console.log(`  - ${href}`));

  await browser.close();
})();
