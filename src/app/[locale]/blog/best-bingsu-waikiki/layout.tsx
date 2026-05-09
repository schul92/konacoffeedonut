import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title = 'Best Bingsu in Waikiki 2026: Korean Shaved Ice Worth the Trip';
  const description =
    'Looking for authentic Korean bingsu in Waikiki? Try Kona Coffee Donut on Kalākaua Ave — fresh mango, strawberry, and matcha bingsu, snow-soft milk ice, generous toppings. Open 7 AM–9 PM.';

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
      'bingsu waikiki',
      'best bingsu waikiki',
      'korean shaved ice waikiki',
      'bingsu honolulu',
      'where to get bingsu in waikiki',
      'korean dessert waikiki',
      'mango bingsu waikiki',
      'matcha bingsu waikiki',
      'bingsu near me',
      'korean shaved ice hawaii',
      'ワイキキ ビンス',
      '와이키키 빙수',
      '威基基 雪冰',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/best-bingsu-waikiki`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [
        {
          url: '/images/blog/best-bingsu-waikiki.jpeg',
          width: 1200,
          height: 675,
          alt: 'Best Bingsu in Waikiki — Korean shaved ice with mango, strawberry, and red bean',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/blog/best-bingsu-waikiki.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/best-bingsu-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/best-bingsu-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/best-bingsu-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/best-bingsu-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/best-bingsu-waikiki`,
        'x-default': `${siteUrl}/en/blog/best-bingsu-waikiki`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function BestBingsuWaikikiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
