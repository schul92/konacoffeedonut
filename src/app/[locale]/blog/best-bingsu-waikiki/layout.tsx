import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'Best Bingsu in Waikiki 2026: Korean Shaved Ice Worth the Trip',
    ja: '2026年 ワイキキで食べられる絶品ビンス | Kona Coffee Donut',
    ko: '2026 와이키키 빙수 베스트 | Kona Coffee Donut',
    zh: '2026 威基基最佳雪冰 | Kona Coffee Donut',
    es: 'Mejor Bingsu en Waikiki 2026 | Kona Coffee Donut',
  };
  const descriptions: Record<string, string> = {
    en: 'Looking for authentic Korean bingsu in Waikiki? Try Kona Coffee Donut on Kalākaua Ave — fresh mango, strawberry, and matcha bingsu, snow-soft milk ice, generous toppings. Open 7 AM–9 PM.',
    ja: 'カラカウア通りで本格的な韓国かき氷ビンスはここで。暑いハワイの日にぴったり。ビンスとは、韓国式のミルク氷を細かく削って、新鮮なフルーツ、餅、あずき、練乳をトッピングした韓国伝統のデザートです。',
    ko: '와이키키 칼라카우아 거리에서 정통 한국 빙수를 찾는다면 — 무더운 하와이 날에 딱 맞는 디저트. 빙수는 우유 얼음을 곱게 갈아 신선한 과일, 떡, 팥, 연유를 올린 한국 전통 디저트입니다.',
    zh: '在卡拉考阿大道找到正宗的韩式雪冰 — 炎热夏威夷的最佳选择。雪冰（빙수）是韩国传统冰品，将冷冻牛奶刨成雪花状细冰，再加上新鲜水果、年糕、红豆和炼乳。',
    es: 'Dónde encontrar bingsu coreano auténtico en Kalākaua Avenue.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;

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
