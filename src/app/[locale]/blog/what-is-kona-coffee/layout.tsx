import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'What Is Kona Coffee? Why It\'s So Rare & Expensive (2026 Guide)',
    description: 'Kona coffee is arabica grown only on the volcanic slopes of Hawaii\'s Big Island. Learn what makes it special, why it costs so much, 100% Kona vs Kona Blend — and where to drink real Kona coffee in Waikiki.',
  },
  ja: {
    title: 'コナコーヒーとは？希少で高価な理由を徹底解説（2026年版）',
    description: 'コナコーヒーはハワイ島の火山斜面だけで育つアラビカ種。何が特別なのか、なぜ高価なのか、100%コナとコナブレンドの違い、そしてワイキキで本物のコナコーヒーが飲める場所までご案内します。',
  },
  ko: {
    title: '코나 커피란? 희귀하고 비싼 이유 완벽 정리 (2026 가이드)',
    description: '코나 커피는 하와이 빅아일랜드 화산 경사면에서만 자라는 아라비카. 무엇이 특별한지, 왜 비싼지, 100% 코나와 코나 블렌드의 차이, 그리고 와이키키에서 진짜 코나 커피를 마실 수 있는 곳까지 알려드립니다.',
  },
  zh: {
    title: '什么是科纳咖啡？为何如此稀有昂贵（2026指南）',
    description: '科纳咖啡是仅生长于夏威夷大岛火山斜坡的阿拉比卡咖啡。了解它的独特之处、为何如此昂贵、100%科纳与科纳混合的区别，以及在威基基哪里能喝到正宗科纳咖啡。',
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
      'what is kona coffee', 'kona coffee', 'why is kona coffee expensive',
      '100% kona coffee', 'kona blend', 'kona coffee vs regular coffee',
      'kona coffee taste', 'hawaiian coffee', 'kona coffee hawaii', 'kona coffee waikiki',
      'kona peaberry', 'extra fancy kona', 'kona coffee belt',
      'best kona coffee', 'kona coffee near me',
      'コナコーヒー', 'コナコーヒーとは', '코나 커피', '하와이 커피', '科纳咖啡',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/what-is-kona-coffee`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/what-is-kona-coffee.jpeg',
          width: 1200,
          height: 630,
          alt: 'What is Kona Coffee - Hawaiian Coffee Guide',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/what-is-kona-coffee.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/what-is-kona-coffee`,
      languages: {
        'en-US': `${siteUrl}/en/blog/what-is-kona-coffee`,
        'ja-JP': `${siteUrl}/ja/blog/what-is-kona-coffee`,
        'ko-KR': `${siteUrl}/ko/blog/what-is-kona-coffee`,
        'zh-CN': `${siteUrl}/zh/blog/what-is-kona-coffee`,
        'x-default': `${siteUrl}/en/blog/what-is-kona-coffee`,
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

export default function WhatIsKonaCoffeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
