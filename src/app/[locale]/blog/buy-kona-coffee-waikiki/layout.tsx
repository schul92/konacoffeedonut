import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Where to Buy Kona Coffee in Waikiki: Sip It or Take It Home (2026 Guide)',
    description: 'Two ways to buy Kona coffee in Waikiki — drink real 100% Kona by the cup, or take whole beans home as a gift. How to spot the "Kona Blend" trap and buy the real thing.',
  },
  ja: {
    title: 'ワイキキでコナコーヒーを買うなら：カップで味わう・豆で持ち帰る（2026年版）',
    description: 'ワイキキでコナコーヒーを買う2つの方法 — 本物の100%コナをカップで味わうか、コナ豆をお土産に持ち帰るか。「コナブレンド」の落とし穴を見抜き、本物を買うコツを解説。',
  },
  ko: {
    title: '와이키키 코나커피 구입 가이드: 한 잔으로 즐기거나 원두로 가져가기 (2026)',
    description: '와이키키에서 코나커피를 사는 두 가지 방법 — 진짜 100% 코나를 한 잔으로 즐기거나, 원두를 선물용으로 가져가기. "코나 블렌드" 함정을 피하고 진짜를 고르는 법.',
  },
  zh: {
    title: '在威基基哪里买科纳咖啡：现喝一杯或带豆回家（2026指南）',
    description: '在威基基购买科纳咖啡的两种方式——现场喝一杯正宗100%科纳，或把咖啡豆作为伴手礼带回家。教你识破"科纳混合"陷阱，买到真货。',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const t = meta[locale as keyof typeof meta] || meta.en;

  const localeMap: Record<string, string> = {
    en: 'en_US',
    ja: 'ja_JP',
    ko: 'ko_KR',
    zh: 'zh_CN',
  };

  return {
    title: t.title,
    description: t.description,
    keywords: [
      'buy kona coffee waikiki', 'kona coffee beans waikiki', 'kona coffee souvenir',
      'kona coffee gift', 'where to buy 100% kona coffee', '100% kona coffee',
      'kona blend', 'kona coffee waikiki', 'real kona coffee', 'kona coffee honolulu',
      'kona coffee whole bean', 'kona coffee to take home', 'kona coffee near waikiki beach',
      'best kona coffee waikiki', 'kona coffee by the cup',
      'コナコーヒー', 'コナコーヒー お土産', '100%コナ', '코나커피', '코나 원두', '科纳咖啡',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/buy-kona-coffee-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/buy-kona-coffee-waikiki.jpeg',
          width: 1200,
          height: 630,
          alt: 'Where to buy Kona coffee in Waikiki - 100% Kona by the cup or whole bean',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/buy-kona-coffee-waikiki.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/buy-kona-coffee-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/buy-kona-coffee-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/buy-kona-coffee-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/buy-kona-coffee-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/buy-kona-coffee-waikiki`,
        'x-default': `${siteUrl}/en/blog/buy-kona-coffee-waikiki`,
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

export default function BuyKonaCoffeeWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
