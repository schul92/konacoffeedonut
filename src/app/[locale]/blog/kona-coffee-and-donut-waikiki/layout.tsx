import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Kona Coffee & Mochi Donut: Waikiki\'s Perfect Pairing (2026)',
    description: 'Real 100% Kona coffee + fresh rice-flour mochi donuts under one roof in Waikiki. Kona Coffee Donut? on Kalakaua Ave, ~5 min from the beach. The best coffee and donut combo.',
  },
  ja: {
    title: 'コナコーヒー×モチドーナツ：ワイキキ最高のペアリング（2026）',
    description: '本物の100%コナコーヒーと作りたての米粉モチドーナツが一つの店で。カラカウア通りの「Kona Coffee Donut?」はワイキキビーチから徒歩約5分。ワイキキ最高のコーヒー＆ドーナツ。',
  },
  ko: {
    title: '코나 커피 & 모찌 도넛: 와이키키 최고의 페어링 (2026)',
    description: '진짜 100% 코나 커피와 갓 구운 쌀가루 모찌 도넛을 한곳에서. 칼라카우아 애비뉴의 Kona Coffee Donut?, 와이키키 비치에서 도보 약 5분. 와이키키 최고의 커피와 도넛 조합.',
  },
  zh: {
    title: '科纳咖啡 & 麻糬甜甜圈：威基基的完美搭配（2026）',
    description: '正宗100%科纳咖啡 + 现做米粉麻糬甜甜圈，同在一处。卡拉卡瓦大道上的 Kona Coffee Donut?，距威基基海滩步行约5分钟。威基基最佳咖啡与甜甜圈组合。',
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
      'coffee and donuts waikiki', 'kona coffee and donut', 'mochi donut and coffee waikiki',
      'coffee donut pairing', 'best coffee and donut waikiki', 'kona coffee donut',
      'mochi donut waikiki', 'kona coffee waikiki', '100% kona coffee',
      'rice flour donut', 'pon de ring waikiki', 'waikiki breakfast',
      'coffee and donut hawaii', 'kona coffee donut waikiki',
      '코나 커피', '모찌 도넛', 'コナコーヒー', 'モチドーナツ', '科纳咖啡', '麻糬甜甜圈',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/kona-coffee-and-donut-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/kona-coffee-and-donut-waikiki.jpeg',
          width: 1200,
          height: 630,
          alt: 'Kona Coffee and Mochi Donut Pairing in Waikiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/kona-coffee-and-donut-waikiki.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/kona-coffee-and-donut-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/kona-coffee-and-donut-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/kona-coffee-and-donut-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/kona-coffee-and-donut-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/kona-coffee-and-donut-waikiki`,
        'x-default': `${siteUrl}/en/blog/kona-coffee-and-donut-waikiki`,
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

export default function KonaCoffeeAndDonutWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
