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

  // Add anchor-linked sections for better SEO (for all locales)
  const sections = ['#menu', '#location', '#about'];
  locales.forEach((locale) => {
    sections.forEach((section) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${section}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [loc, `${baseUrl}/${loc}${section}`])
          ),
        },
      });
    });
  });

  return sitemap;
}
