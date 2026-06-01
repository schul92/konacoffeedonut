import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default rule for all crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // ===== AI SEARCH ENGINE CRAWLERS =====
      // OpenAI/ChatGPT - Critical for GEO
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: ['/api/'],
      },
      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/'],
      },
      // Anthropic/Claude
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/api/'],
      },
      // Google AI (Gemini/Bard)
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/'],
      },
      // Microsoft Copilot (uses Bing)
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/'],
      },
      // Common Crawl - used for AI training data
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/api/'],
      },
      // Cohere AI
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: ['/api/'],
      },
      // Meta AI
      {
        userAgent: 'FacebookBot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'meta-externalagent',
        allow: '/',
        disallow: ['/api/'],
      },
      // You.com AI
      {
        userAgent: 'YouBot',
        allow: '/',
        disallow: ['/api/'],
      },
      // Apple AI (Siri, etc.)
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: [
      'https://www.konacoffeedonut.com/sitemap.xml',
      'https://www.konacoffeedonut.com/image-sitemap.xml',
    ],
    host: 'https://www.konacoffeedonut.com',
  };
}
