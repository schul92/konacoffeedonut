import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'What is Bingsu? Complete Guide to Korean Shaved Ice Dessert | Kona Coffee Donut',
    description: 'What is bingsu? Learn everything about Korea\'s iconic shaved ice dessert — history, types (patbingsu, injeolmi, fruit), how it compares to kakigori, and where to get bingsu in Waikiki.',
  },
  ja: {
    title: 'ビンスとは？韓国かき氷デザート完全ガイド | Kona Coffee Donut',
    description: 'ビンス(빙수)とは？韓国発の人気かき氷デザートの歴史・種類・食べ方を徹底解説。新大久保で大人気のK-フードトレンド、ワイキキでも楽しめます。',
  },
  ko: {
    title: '빙수란? 한국 대표 빙수 완벽 가이드 | Kona Coffee Donut',
    description: '빙수의 역사부터 종류(팥빙수, 인절미빙수, 과일빙수), 먹는 법까지 완벽 정리. 조선시대 빙고에서 시작된 빙수의 모든 것. 와이키키에서 빙수를 즐기세요.',
  },
  zh: {
    title: '什么是韩式刨冰(Bingsu)？韩国刨冰甜品完全指南 | Kona Coffee Donut',
    description: '什么是韩式刨冰？了解韩国经典刨冰甜品的历史、种类（红豆刨冰、年糕刨冰、水果刨冰）、与日式刨冰的区别，以及在威基基哪里可以品尝到。',
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
