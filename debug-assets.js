const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const resourceRequests = new Map();
  const failedResources = [];

  page.on('response', async (response) => {
    const url = response.url();
    const status = response.status();
    const resourceType = response.request().resourceType();

    resourceRequests.set(url, { status, resourceType });

    if (status === 404) {
      failedResources.push(url);
    }
  });

  console.log('Navigating to https://www.imdonut.nyc...');
  await page.goto('https://www.imdonut.nyc', { waitUntil: 'load' });

  // Wait a bit for resources to load
  await page.waitForTimeout(2000);

  console.log('\n=== Checking Logo Image ===');
  const logoImage = page.locator('img[src*="konacoffee.webp"], img[alt*="logo" i]').first();
  const logoVisible = await logoImage.isVisible().catch(() => false);
  console.log('Logo visible:', logoVisible);

  if (logoVisible) {
    const logoSrc = await logoImage.getAttribute('src');
    console.log('Logo src:', logoSrc);
    const logoBox = await logoImage.boundingBox();
    console.log('Logo dimensions:', logoBox);
  }

  console.log('\n=== Checking for konacoffee.webp in network requests ===');
  const logoRequest = Array.from(resourceRequests.entries()).find(([url]) =>
    url.includes('konacoffee.webp')
  );
  if (logoRequest) {
    console.log('Logo request found:', logoRequest[0], 'Status:', logoRequest[1].status);
  } else {
    console.log('No konacoffee.webp found in network requests');
    console.log('Looking for any logo-related images:');
    Array.from(resourceRequests.entries())
      .filter(([url, data]) => data.resourceType === 'image' && (url.includes('logo') || url.includes('icon')))
      .forEach(([url, data]) => console.log('  -', url, 'Status:', data.status));
  }

  console.log('\n=== Checking Videos ===');
  const videoCount = await page.locator('video, video source').count();
  console.log('Video elements found:', videoCount);

  console.log('\n=== Checking Fonts ===');
  const fontRequests = Array.from(resourceRequests.entries()).filter(([url, data]) =>
    data.resourceType === 'font' || url.includes('.woff') || url.includes('.woff2')
  );
  console.log('Font requests:', fontRequests.length);
  fontRequests.forEach(([url, data]) => {
    console.log('  -', url.substring(url.lastIndexOf('/') + 1), 'Status:', data.status);
  });

  console.log('\n=== Checking CSS ===');
  const cssRequests = Array.from(resourceRequests.entries()).filter(([url, data]) =>
    data.resourceType === 'stylesheet' || url.endsWith('.css')
  );
  console.log('CSS requests:', cssRequests.length);

  console.log('\n=== Checking for 404 Errors ===');
  if (failedResources.length > 0) {
    console.log('Failed resources (404):', failedResources);
  } else {
    console.log('No 404 errors found!');
  }

  console.log('\n=== Checking Images ===');
  const imageRequests = Array.from(resourceRequests.entries()).filter(([url, data]) =>
    data.resourceType === 'image'
  );
  console.log('Image requests:', imageRequests.length);
  const failedImages = imageRequests.filter(([url, data]) => data.status !== 200);
  if (failedImages.length > 0) {
    console.log('Failed images:');
    failedImages.forEach(([url, data]) => {
      console.log('  -', url, 'Status:', data.status);
    });
  }

  await browser.close();
  console.log('\n=== Debug complete ===');
})();
