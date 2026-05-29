import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'What Is Bingsu? Korean Shaved Ice + Where to Try It in Waikiki (2026)',
    description: "What is bingsu? Learn how to eat Korean shaved ice, popular toppings, and where to try bingsu in Waikiki near Kalākaua Ave and Waikiki Beach.",
  },
  ja: {
    title: 'ビンスとは？韓国かき氷の食べ方とワイキキで食べられる場所',
    description: 'ビンス(빙수)とは？ふわふわミルク氷に新鮮なフルーツ・餅・あずきを乗せた韓国発デザート。種類・歴史・正しい食べ方、そしてワイキキで本場のビンスが食べられる場所まで徹底解説。',
  },
  ko: {
    title: '빙수란? 종류·먹는 법·와이키키에서 즐기는 곳 (2026)',
    description: '빙수는 우유 얼음을 곱게 갈아 과일·떡·팥을 올린 한국 대표 디저트. 종류, 역사, 제대로 먹는 법, 와이키키에서 정통 빙수를 즐길 수 있는 곳까지 완벽 정리.',
  },
  zh: {
    title: '什么是雪冰 (Bingsu)？韩国刨冰种类·吃法·威基基品尝指南',
    description: '雪冰是韩国传统冰品，将冷冻牛奶刨成绵密雪花，再加水果、年糕、红豆。本指南介绍雪冰的种类、历史、正确吃法，以及在威基基哪里能品尝到正宗韩式雪冰。',
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
      'what is bingsu', 'bingsu', 'korean shaved ice', 'patbingsu',
      'bingsu vs kakigori', 'bingsu vs shaved ice', 'types of bingsu',
      'korean dessert', 'bingsu hawaii', 'bingsu waikiki',
      'injeolmi bingsu', 'fruit bingsu', 'bingsu history',
      'korean ice dessert', 'bingsu near me',
      '빙수', '빙수란', '팥빙수', 'ビンス', 'かき氷', '韩式刨冰',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/what-is-bingsu`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'What is Bingsu - Korean Shaved Ice Dessert Guide',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/what-is-bingsu`,
      languages: {
        'en-US': `${siteUrl}/en/blog/what-is-bingsu`,
        'ja-JP': `${siteUrl}/ja/blog/what-is-bingsu`,
        'ko-KR': `${siteUrl}/ko/blog/what-is-bingsu`,
        'zh-CN': `${siteUrl}/zh/blog/what-is-bingsu`,
        'x-default': `${siteUrl}/en/blog/what-is-bingsu`,
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

export default function WhatIsBingsuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
