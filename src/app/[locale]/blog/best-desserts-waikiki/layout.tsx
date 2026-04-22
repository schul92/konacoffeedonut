import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const title = 'Best Desserts in Waikiki 2026: Sweet Spots You Can\'t Miss';
  const description =
    'Discover the 8 best desserts in Waikiki for 2026. From mochi donuts and bingsu to shaved ice and gelato — the ultimate guide to dessert near me in Waikiki. Prices, must-try items, and insider tips.';

  const localeMap: Record<string, string> = {
    en: 'en_US',
    ja: 'ja_JP',
    ko: 'ko_KR',
    zh: 'zh_CN',
    es: 'es_ES',
  };

  return {
    title,
    description,
    keywords: [
      'best desserts waikiki',
      'dessert near me waikiki',
      'dessert in waikiki',
      'best sweets waikiki',
      'where to get dessert in waikiki',
      'dessert places near me',
      'waikiki dessert spots 2026',
      'best desserts in hawaii',
      'dessert shops near waikiki beach',
      'hawaiian desserts',
      'shaved ice waikiki',
      'bingsu waikiki',
      'mochi donuts waikiki',
      'malasada waikiki',
      'acai bowl waikiki',
      'gelato waikiki',
      'ワイキキ デザート',
      '와이키키 디저트',
      '威基基甜点',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/best-desserts-waikiki`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Best Desserts in Waikiki 2026 - Sweet Spots You Can\'t Miss',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/best-desserts-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/best-desserts-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/best-desserts-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/best-desserts-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/best-desserts-waikiki`,
        'x-default': `${siteUrl}/en/blog/best-desserts-waikiki`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function BestDessertsWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
