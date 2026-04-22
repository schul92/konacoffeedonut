import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.konacoffeedonut.com';
  const currentDate = new Date();

  const routes = [
    '',
    '/menu',
    '/about-kona-coffee',
    '/careers',
    '/faq',
    '/privacy-policy',
    '/terms-of-service',
    // SEO landing pages for high-value keywords
    '/fresh-donuts',
    '/gourmet-donuts',
    '/breakfast-waikiki',
    '/farm-to-donut',
    '/malasada-hawaii',
    '/bingsu-waikiki',
    '/korean-corn-dog-waikiki',
    '/mochi-donuts-waikiki',
    // Blog pages
    '/blog',
    '/blog/best-donuts-waikiki',
    '/blog/what-is-bingsu',
    '/blog/kona-coffee-guide',
    '/blog/korean-food-waikiki',
    '/blog/cheap-eats-waikiki',
    '/blog/malasada-vs-mochi-donut',
    '/blog/kona-coffee-chinese-guide',
    '/blog/best-desserts-waikiki',
    '/blog/waikiki-food-guide-korean',
    '/blog/waikiki-cafe-guide-japanese',
    // Individual menu item pages for SEO
    '/menu/mochi-donuts',
    '/menu/kona-coffee',
    '/menu/malasada',
    '/menu/bingsu',
    '/menu/acai-bowl',
    '/menu/korean-corn-dog',
  ];
  const sitemap: MetadataRoute.Sitemap = [];

  // Priority map for different routes
  const priorityMap: Record<string, number> = {
    '': 1.0,
    '/about-kona-coffee': 0.9,
    '/careers': 0.95, // Higher priority for job postings
    '/faq': 0.8,
    '/privacy-policy': 0.3,
    '/terms-of-service': 0.3,
    '/fresh-donuts': 0.85, // High-value SEO keyword page
    '/gourmet-donuts': 0.85, // High-value SEO keyword page
    '/breakfast-waikiki': 0.85, // High-value local SEO keyword page
    '/farm-to-donut': 0.8, // Story/brand page
    '/malasada-hawaii': 0.85, // High-value product SEO keyword page
    '/bingsu-waikiki': 0.85, // High-value product SEO keyword page
    '/korean-corn-dog-waikiki': 0.85, // High-value product SEO keyword page
    '/mochi-donuts-waikiki': 0.85, // High-value product SEO keyword page
    '/blog': 0.8,
    '/blog/best-donuts-waikiki': 0.85, // Blog post
    '/blog/what-is-bingsu': 0.85, // Blog post
    '/blog/kona-coffee-guide': 0.85,
    '/blog/korean-food-waikiki': 0.85,
    '/blog/cheap-eats-waikiki': 0.85,
    '/blog/malasada-vs-mochi-donut': 0.85,
    '/blog/kona-coffee-chinese-guide': 0.85,
    '/blog/best-desserts-waikiki': 0.85,
    '/blog/waikiki-food-guide-korean': 0.85,
    '/blog/waikiki-cafe-guide-japanese': 0.85,
    '/menu': 0.8,
    '/menu/mochi-donuts': 0.85,
    '/menu/kona-coffee': 0.85,
    '/menu/malasada': 0.85,
    '/menu/bingsu': 0.8,
    '/menu/acai-bowl': 0.8,
    '/menu/korean-corn-dog': 0.8,
  };

  // Change frequency map
  const changeFreqMap: Record<string, 'daily' | 'weekly' | 'monthly'> = {
    '': 'daily',
    '/about-kona-coffee': 'weekly',
    '/careers': 'daily', // Job postings change frequently
    '/faq': 'monthly',
    '/privacy-policy': 'monthly',
    '/terms-of-service': 'monthly',
    '/fresh-donuts': 'weekly',
    '/gourmet-donuts': 'weekly',
    '/breakfast-waikiki': 'weekly',
    '/farm-to-donut': 'monthly',
    '/malasada-hawaii': 'weekly',
    '/bingsu-waikiki': 'weekly',
    '/korean-corn-dog-waikiki': 'weekly',
    '/mochi-donuts-waikiki': 'weekly',
    '/blog': 'weekly',
    '/blog/best-donuts-waikiki': 'weekly',
    '/blog/what-is-bingsu': 'weekly',
    '/blog/kona-coffee-guide': 'weekly',
    '/blog/korean-food-waikiki': 'weekly',
    '/blog/cheap-eats-waikiki': 'weekly',
    '/blog/malasada-vs-mochi-donut': 'weekly',
    '/blog/kona-coffee-chinese-guide': 'weekly',
    '/blog/best-desserts-waikiki': 'weekly',
    '/blog/waikiki-food-guide-korean': 'weekly',
    '/blog/waikiki-cafe-guide-japanese': 'weekly',
    '/menu': 'weekly',
    '/menu/mochi-donuts': 'weekly',
    '/menu/kona-coffee': 'weekly',
    '/menu/malasada': 'weekly',
    '/menu/bingsu': 'weekly',
    '/menu/acai-bowl': 'weekly',
    '/menu/korean-corn-dog': 'weekly',
  };

  // Add all routes for each locale with enhanced metadata
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: currentDate,
        changeFrequency: changeFreqMap[route] || 'weekly',
        priority: priorityMap[route] || 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [loc, `${baseUrl}/${loc}${route}`])
          ),
        },
      });
    });
  });

  // Note: Anchor-linked sections (#menu, #location, #about) are NOT included
  // in sitemap as they share the same canonical URL as their parent pages,
  // which causes SEO issues (non-canonical pages in sitemap).

  return sitemap;
}
