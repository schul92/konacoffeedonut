import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.konacoffeedonut.com';
  const currentDate = new Date();

  const routes = ['', '/menu', '/about-kona-coffee'];
  const sitemap: MetadataRoute.Sitemap = [];

  // Priority map for different routes
  const priorityMap: Record<string, number> = {
    '': 1.0,
    '/about-kona-coffee': 0.9,
    '/menu': 0.8,
  };

  // Change frequency map
  const changeFreqMap: Record<string, 'daily' | 'weekly' | 'monthly'> = {
    '': 'daily',
    '/about-kona-coffee': 'weekly',
    '/menu': 'weekly',
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

  // Add anchor-linked sections for better SEO
  const sections = ['#menu', '#location', '#about'];
  sections.forEach((section) => {
    sitemap.push({
      url: `${baseUrl}/en${section}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });

  return sitemap;
}
