import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default rule for all crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/data/'],
      },
      // ===== AI SEARCH ENGINE CRAWLERS =====
      // OpenAI/ChatGPT - Critical for GEO
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/_next/data/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/api/', '/_next/data/'],
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: ['/api/', '/_next/data/'],
      },
      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/', '/_next/data/'],
      },
      // Anthropic/Claude
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/api/', '/_next/data/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/api/', '/_next/data/'],
      },
      // Google AI (Gemini/Bard)
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/', '/_next/data/'],
      },
      // Microsoft Copilot (uses Bing)
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/data/'],
      },
      // Common Crawl - used for AI training data
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/api/', '/_next/data/'],
      },
      // Cohere AI
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: ['/api/', '/_next/data/'],
      },
      // Meta AI
      {
        userAgent: 'FacebookBot',
        allow: '/',
        disallow: ['/api/', '/_next/data/'],
      },
      {
        userAgent: 'meta-externalagent',
        allow: '/',
        disallow: ['/api/', '/_next/data/'],
      },
      // You.com AI
      {
        userAgent: 'YouBot',
        allow: '/',
        disallow: ['/api/', '/_next/data/'],
      },
      // Apple AI (Siri, etc.)
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: ['/api/', '/_next/data/'],
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: ['/api/', '/_next/data/'],
      },
    ],
    sitemap: [
      'https://www.konacoffeedonut.com/sitemap.xml',
      'https://www.konacoffeedonut.com/image-sitemap.xml',
    ],
    host: 'https://www.konacoffeedonut.com',
  };
}
