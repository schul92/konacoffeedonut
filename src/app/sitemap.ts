import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.konacoffeedonut.com';
  const defaultLastModified = new Date('2026-06-06T00:00:00.000Z');
  const routeLastModified: Record<string, Date> = {
    '': new Date('2026-06-09T00:00:00.000Z'),
    '/menu': new Date('2026-06-09T00:00:00.000Z'),
    '/menu/kona-coffee': new Date('2026-06-09T00:00:00.000Z'),
    '/menu/bingsu': new Date('2026-06-09T00:00:00.000Z'),
    '/blog/what-is-bingsu': new Date('2026-06-09T00:00:00.000Z'),
  };

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
    // New revenue-focused blog posts (May 2026)
    '/blog/best-bingsu-waikiki',
    '/blog/mochi-donut-flavors-waikiki',
    '/blog/best-smoothies-waikiki',
    '/blog/where-to-try-kona-coffee-waikiki',
    '/blog/malasada-vs-mochi-donut-waikiki',
    '/blog/kona-affogato-waikiki',
    // Third batch (June 2026)
    '/blog/best-mochi-donuts-waikiki',
    // Menu-explainer batch (June 2026)
    '/blog/hawaiian-shave-ice',
    '/blog/what-is-a-malasada',
    '/blog/what-is-a-mochi-donut',
    '/blog/what-is-kona-coffee',
    '/blog/is-kona-coffee-worth-it',
    '/blog/best-kona-coffee-waikiki',
    '/blog/buy-kona-coffee-waikiki',
    '/blog/kona-coffee-and-donut-waikiki',
    // Second batch (May 2026)
    '/blog/how-to-eat-bingsu',
    '/blog/best-budget-eats-waikiki',
    '/blog/best-acai-bowls-waikiki',
    '/blog/korean-corn-dog-waikiki-guide',
    '/blog/ube-mochi-donut-waikiki',
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
    '/blog/best-bingsu-waikiki': 0.9, // High-priority revenue post
    '/blog/mochi-donut-flavors-waikiki': 0.9,
    '/blog/best-smoothies-waikiki': 0.85,
    '/blog/where-to-try-kona-coffee-waikiki': 0.9,
    '/blog/malasada-vs-mochi-donut-waikiki': 0.85,
    '/blog/kona-affogato-waikiki': 0.8,
    '/blog/best-mochi-donuts-waikiki': 0.9, // buyer-intent: "best mochi donuts waikiki"
    '/blog/hawaiian-shave-ice': 0.85,
    '/blog/what-is-a-malasada': 0.85,
    '/blog/what-is-a-mochi-donut': 0.85,
    '/blog/what-is-kona-coffee': 0.85,
    '/blog/is-kona-coffee-worth-it': 0.85,
    '/blog/best-kona-coffee-waikiki': 0.9,
    '/blog/buy-kona-coffee-waikiki': 0.85,
    '/blog/kona-coffee-and-donut-waikiki': 0.9,
    '/blog/how-to-eat-bingsu': 0.9, // captures 1,464 mo "how to eat bingsu" impressions
    '/blog/best-budget-eats-waikiki': 0.9, // pos #1 for "best places to eat in waikiki on a budget"
    '/blog/best-acai-bowls-waikiki': 0.85,
    '/blog/korean-corn-dog-waikiki-guide': 0.85,
    '/blog/ube-mochi-donut-waikiki': 0.85,
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
    '/blog/best-bingsu-waikiki': 'weekly',
    '/blog/mochi-donut-flavors-waikiki': 'weekly',
    '/blog/best-smoothies-waikiki': 'weekly',
    '/blog/where-to-try-kona-coffee-waikiki': 'weekly',
    '/blog/malasada-vs-mochi-donut-waikiki': 'weekly',
    '/blog/kona-affogato-waikiki': 'weekly',
    '/blog/best-mochi-donuts-waikiki': 'weekly',
    '/blog/how-to-eat-bingsu': 'weekly',
    '/blog/best-budget-eats-waikiki': 'weekly',
    '/blog/best-acai-bowls-waikiki': 'weekly',
    '/blog/korean-corn-dog-waikiki-guide': 'weekly',
    '/blog/ube-mochi-donut-waikiki': 'weekly',
    '/menu': 'weekly',
    '/menu/mochi-donuts': 'weekly',
    '/menu/kona-coffee': 'weekly',
    '/menu/malasada': 'weekly',
    '/menu/bingsu': 'weekly',
    '/menu/acai-bowl': 'weekly',
    '/menu/korean-corn-dog': 'weekly',
  };

  // Blog POST bodies are translated only into en/ja/ko/zh — the /blog index and
  // every other route (home, /menu, /menu/*, landing pages) are fully localized
  // incl. Spanish. So /es/blog/<slug> falls back to English and would be a
  // duplicate of /en/blog/<slug>. Don't list those es URLs (the post pages
  // already omit es from their hreflang); this keeps the sitemap and the pages'
  // canonical/hreflang signals consistent and avoids duplicate-content flags.
  const isBlogPost = (route: string) => route.startsWith('/blog/');
  const localesForRoute = (route: string) =>
    isBlogPost(route) ? locales.filter((loc) => loc !== 'es') : [...locales];

  // Add all routes for each (translated) locale with enhanced metadata
  routes.forEach((route) => {
    const routeLocales = localesForRoute(route);
    const languageAlternates = Object.fromEntries(
      routeLocales.map((loc) => [loc, `${baseUrl}/${loc}${route}`])
    );
    languageAlternates['x-default'] = `${baseUrl}/en${route}`;

    routeLocales.forEach((locale) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: routeLastModified[route] || defaultLastModified,
        changeFrequency: changeFreqMap[route] || 'weekly',
        priority: priorityMap[route] || 0.8,
        alternates: {
          languages: languageAlternates,
        },
      });
    });
  });

  // Note: Anchor-linked sections (#menu, #location, #about) are NOT included
  // in sitemap as they share the same canonical URL as their parent pages,
  // which causes SEO issues (non-canonical pages in sitemap).

  return sitemap;
}
