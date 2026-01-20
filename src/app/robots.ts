import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default rule for all crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // ===== AI SEARCH ENGINE CRAWLERS =====
      // OpenAI/ChatGPT - Critical for GEO
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Anthropic/Claude
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Google AI (Gemini/Bard)
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Microsoft Copilot (uses Bing)
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Common Crawl - used for AI training data
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Cohere AI
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Meta AI
      {
        userAgent: 'FacebookBot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'meta-externalagent',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // You.com AI
      {
        userAgent: 'YouBot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Apple AI (Siri, etc.)
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://www.konacoffeedonut.com/sitemap.xml',
    host: 'https://www.konacoffeedonut.com',
  };
}
