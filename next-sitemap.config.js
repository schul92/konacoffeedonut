/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.konacoffeedonut.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.konacoffeedonut.com/sitemap.xml',
    ],
  },
  exclude: [
    '/api/*',
    '/_next/*',
    // Exclude hash fragments (non-canonical)
    '*#*',
    // Exclude pages that canonicalize to homepage
    '/*/menu',
    '/*/about-kona-coffee',
  ],
  transform: async (config, path) => {
    // Skip paths with hash fragments
    if (path.includes('#')) {
      return null;
    }

    // Set priority based on page type
    let priority = 0.7;
    let changefreq = 'weekly';

    // Homepage and locale homepages get highest priority
    if (path === '/' || /^\/[a-z]{2}$/.test(path)) {
      priority = 1.0;
      changefreq = 'daily';
    }
    // Menu item pages
    else if (path.includes('/menu/')) {
      priority = 0.8;
      changefreq = 'weekly';
    }
    // Careers page
    else if (path.includes('/careers')) {
      priority = 0.6;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
