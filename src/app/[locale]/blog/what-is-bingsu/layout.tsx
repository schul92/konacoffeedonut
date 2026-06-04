import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'What Is Bingsu? Korean Shaved Ice Explained — Types & How to Eat It',
    description: 'Bingsu (빙수) is Korean shaved ice — fluffy frozen-milk snow piled with red bean, fresh fruit, mochi, and condensed milk. See the popular types, how to eat it, and where to try fresh bingsu in Waikiki.',
  },
  ja: {
    title: 'ビンスとは？韓国かき氷を徹底解説 — 種類・トッピング・食べ方',
    description: 'ビンス(빙수)とは、ふわふわに削った練乳氷にあずき・フルーツ・餅・練乳をのせた韓国発のデザート。人気の種類や正しい食べ方、そしてワイキキで本場のビンスが味わえる場所まで分かりやすく解説します。',
  },
  ko: {
    title: '빙수란? 한국 빙수 완벽 정리 — 종류·토핑·먹는 법 (2026)',
    description: '빙수는 우유 얼음을 곱게 갈아 팥·생과일·떡·연유를 올린 한국 대표 디저트입니다. 인기 종류와 제대로 먹는 법, 와이키키에서 갓 만든 빙수를 맛볼 수 있는 곳까지 한눈에 정리했습니다.',
  },
  zh: {
    title: '什么是雪冰 (Bingsu)？韩式刨冰完全解析 — 种类·配料·吃法',
    description: '雪冰 (빙수) 是韩国经典冰品：把冷冻牛奶刨成绵密雪花，再铺上红豆、鲜果、年糕与炼乳。本文解析雪冰的种类与正确吃法，以及在威基基哪里能吃到新鲜雪冰。',
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
