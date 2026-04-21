import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const title = 'Best Donuts in Waikiki 2026: Top 7 Donut Shops | Local Guide';
  const description =
    'Discover the 7 best donut shops in Waikiki for 2026. From mochi donuts and malasadas to classic glazed, a local guide to the sweetest spots near Waikiki Beach. Insider tips, prices, and must-try flavors.';

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
      'best donuts waikiki',
      'donuts near me waikiki',
      'mochi donuts hawaii',
      'malasada waikiki',
      'best donut shop honolulu',
      'waikiki donuts 2026',
      'best donuts in hawaii',
      'donut shops near waikiki beach',
      'hawaiian donuts',
      'mochi donuts waikiki',
      'malasadas near me',
      'best malasadas oahu',
      'vegan donuts waikiki',
      'taro donuts hawaii',
      'kona coffee donuts',
      'ワイキキ ドーナツ',
      '와이키키 도넛',
      '威基基甜甜圈',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/best-donuts-waikiki`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Best Donuts in Waikiki 2026 - Top 7 Donut Shops Guide',
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
      canonical: `${siteUrl}/${locale}/blog/best-donuts-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/best-donuts-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/best-donuts-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/best-donuts-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/best-donuts-waikiki`,
        'x-default': `${siteUrl}/en/blog/best-donuts-waikiki`,
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

export default function BestDonutsWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
