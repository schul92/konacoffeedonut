import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'What Is Bingsu? The Korean Shaved Ice Taking Over Waikiki (2026 Guide + Photos)',
    description: 'Bingsu (빙수) is Korean shaved ice: fluffy milk-snow piled with red bean, mango & mochi. See every popular type with photos — and where to get fresh bingsu in Waikiki.',
  },
  ja: {
    title: 'ビンスとは？ワイキキで話題の韓国かき氷を写真で解説（2026年版）',
    description: 'ビンス(빙수)とは、ふわふわ練乳氷にあずき・マンゴー・餅をのせた韓国発デザート。人気の種類を写真付きで紹介し、ワイキキで本場の作りたてビンスが味わえる場所までご案内します。',
  },
  ko: {
    title: '빙수란? 와이키키에서 인기 폭발한 한국 빙수 (2026 사진 가이드)',
    description: '빙수는 우유 얼음을 곱게 갈아 팥·망고·떡을 올린 한국 대표 디저트. 인기 종류를 사진과 함께 정리하고, 와이키키에서 갓 만든 빙수를 맛볼 수 있는 곳까지 알려드립니다.',
  },
  zh: {
    title: '什么是雪冰 (Bingsu)？风靡威基基的韩式刨冰图文解析（2026）',
    description: '雪冰 (빙수) 是韩式刨冰：绵密牛奶雪花铺上红豆、芒果与年糕。图文介绍各种热门口味，并告诉你在威基基哪里能吃到新鲜现做的雪冰。',
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
