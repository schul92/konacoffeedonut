#!/usr/bin/env node
/**
 * Standalone validation script for assets loading test
 * This script validates that all the test assertions would pass
 */

import { chromium } from 'playwright';

async function validateAssetsTest() {
  console.log('🚀 Starting assets loading validation for https://www.imdonut.nyc\n');

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  const resourceRequests = new Map();
  const failedResources = [];
  let allTestsPassed = true;

  function assertTest(condition, message) {
    if (condition) {
      console.log(`✅ PASS: ${message}`);
    } else {
      console.log(`❌ FAIL: ${message}`);
      allTestsPassed = false;
    }
    return condition;
  }

  page.on('response', async (response) => {
    const url = response.url();
    const status = response.status();
    const resourceType = response.request().resourceType();

    resourceRequests.set(url, { status, resourceType });

    if (status === 404) {
      failedResources.push(url);
    }
  });

  try {
    // 1. Navigate
    console.log('📍 Navigating to https://www.imdonut.nyc...');
    await page.goto('https://www.imdonut.nyc', { waitUntil: 'load' });
    console.log('✅ Page loaded\n');

    // 3. Verify logo
    console.log('🖼️  Checking logo image...');
    const logoImage = page.locator('img[alt="Kona Coffee Donut"], img[src*="konacoffee"]').first();
    const logoVisible = await logoImage.isVisible({ timeout: 10000 }).catch(() => false);
    assertTest(logoVisible, 'Logo image is visible');

    if (logoVisible) {
      const logoBox = await logoImage.boundingBox();
      assertTest(logoBox !== null, 'Logo has bounding box');
      assertTest(logoBox && logoBox.width > 0, 'Logo width > 0');
      assertTest(logoBox && logoBox.height > 0, 'Logo height > 0');

      const logoRequest = Array.from(resourceRequests.entries()).find(([url]) =>
        url.includes('konacoffee.webp') || (url.includes('/_next/image') && url.includes('konacoffee'))
      );
      assertTest(logoRequest !== undefined, 'Logo request found in network requests');
      if (logoRequest) {
        assertTest(logoRequest[1].status === 200, `Logo loaded with status 200 (got ${logoRequest[1].status})`);
      }
    }

    // 4. Background elements
    console.log('\n🎨 Checking background elements...');
    const backgroundElements = page.locator('[style*="background"], [class*="bg-"]');
    const bgCount = await backgroundElements.count();
    assertTest(bgCount > 0, `Found ${bgCount} background elements`);

    // 5. Videos
    console.log('\n🎥 Checking video elements...');
    const videoCount = await page.locator('video, video source').count();
    console.log(`   Found ${videoCount} video/source elements`);

    if (videoCount > 0) {
      const firstVideo = page.locator('video').first();
      await firstVideo.waitFor({ state: 'attached', timeout: 5000 }).catch(() => {});

      const videoVisible = await firstVideo.isVisible().catch(() => false);
      if (videoVisible) {
        const videoSrc = await firstVideo.getAttribute('src');
        const videoSources = await page.locator('video source').count();
        assertTest(videoSrc || videoSources > 0, 'Video has source');

        const videoError = await firstVideo.evaluate((video) => video.error);
        assertTest(videoError === null, 'Video not in error state');
      } else {
        console.log('   ℹ️  Video exists but not visible (may be lazy loaded)');
      }
    }

    // 6. CSS and Fonts
    console.log('\n📝 Checking CSS and fonts...');
    const bodyStyles = await page.locator('body').evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return {
        fontFamily: computed.fontFamily,
        backgroundColor: computed.backgroundColor,
        fontSize: computed.fontSize
      };
    });

    assertTest(bodyStyles.fontFamily && bodyStyles.fontFamily.length > 0, 'Font family is set');
    assertTest(bodyStyles.backgroundColor !== 'rgba(0, 0, 0, 0)', 'Background color is set');
    assertTest(bodyStyles.fontSize && bodyStyles.fontSize.length > 0, 'Font size is set');

    const stylesheetCount = await page.locator('link[rel="stylesheet"]').count();
    assertTest(stylesheetCount > 0, `Found ${stylesheetCount} stylesheet links`);

    // Font requests
    const fontRequests = Array.from(resourceRequests.entries()).filter(([url, data]) =>
      data.resourceType === 'font' || url.includes('.woff') || url.includes('.woff2')
    );
    console.log(`   Found ${fontRequests.length} font requests`);
    for (const [url, data] of fontRequests) {
      const fontName = url.substring(url.lastIndexOf('/') + 1);
      assertTest(data.status === 200, `Font ${fontName} loaded successfully (status ${data.status})`);
    }

    // 404 Errors
    console.log('\n🔍 Checking for 404 errors...');
    assertTest(failedResources.length === 0, `No 404 errors (found ${failedResources.length})`);
    if (failedResources.length > 0) {
      console.log('   Failed resources:');
      failedResources.forEach(url => console.log(`   - ${url}`));
    }

    // CSS Requests
    console.log('\n🎨 Checking CSS requests...');
    const cssRequests = Array.from(resourceRequests.entries()).filter(([url, data]) =>
      data.resourceType === 'stylesheet' || url.endsWith('.css')
    );
    assertTest(cssRequests.length > 0, `Found ${cssRequests.length} CSS requests`);
    for (const [url, data] of cssRequests) {
      assertTest(data.status === 200, `CSS loaded successfully (status ${data.status})`);
    }

    // Image Requests
    console.log('\n🖼️  Checking image requests...');
    const imageRequests = Array.from(resourceRequests.entries()).filter(([url, data]) =>
      data.resourceType === 'image'
    );
    console.log(`   Found ${imageRequests.length} image requests`);
    for (const [url, data] of imageRequests) {
      const imgName = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('/') + 30);
      assertTest(data.status === 200, `Image ${imgName} loaded (status ${data.status})`);
    }

  } catch (error) {
    console.error('\n❌ Error during validation:', error.message);
    allTestsPassed = false;
  } finally {
    await browser.close();
  }

  console.log('\n' + '='.repeat(60));
  if (allTestsPassed) {
    console.log('✅ ALL TESTS PASSED!');
    console.log('The assets-loading.spec.ts test should work correctly.');
  } else {
    console.log('❌ SOME TESTS FAILED');
    console.log('Review the failures above to understand what needs fixing.');
  }
  console.log('='.repeat(60));

  process.exit(allTestsPassed ? 0 : 1);
}

validateAssetsTest();
