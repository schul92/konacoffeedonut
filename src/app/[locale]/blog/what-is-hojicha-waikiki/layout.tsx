import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'What Is Hojicha? Roasted Green Tea Lattes in Waikiki (2026 Guide)',
    description: 'Hojicha is Japanese green tea, roasted until toasty, nutty, and naturally low in caffeine. Learn hojicha vs matcha — and where to get a hojicha latte in Waikiki.',
  },
  ja: {
    title: 'ほうじ茶とは？ワイキキの焙煎緑茶ラテ完全ガイド（2026年版）',
    description: 'ほうじ茶は緑茶を焙煎した日本茶で、香ばしくナッツのような風味、カフェインも控えめ。ほうじ茶と抹茶の違い、そしてワイキキでほうじ茶ラテが飲める場所までご案内します。',
  },
  ko: {
    title: '호지차란? 와이키키의 볶은 녹차 라떼 완벽 가이드 (2026)',
    description: '호지차는 녹차를 볶은 일본 차로, 고소하고 구수하며 카페인이 자연스럽게 낮습니다. 호지차와 말차의 차이, 그리고 와이키키에서 호지차 라떼를 마실 수 있는 곳을 알려드립니다.',
  },
  zh: {
    title: '什么是焙茶 (Hojicha)？威基基烘焙绿茶拿铁完全指南（2026）',
    description: '焙茶是经过烘焙的日本绿茶，香脆似坚果、天然低咖啡因。了解焙茶与抹茶的区别，以及在威基基哪里能喝到一杯焙茶拿铁。',
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
      'what is hojicha', 'hojicha', 'hojicha latte waikiki', 'hojicha vs matcha',
      'houjicha waikiki', 'roasted green tea waikiki', 'roasted green tea',
      'hojicha caffeine', 'hojicha taste', 'hojicha latte',
      'hojicha hawaii', 'japanese green tea waikiki', 'low caffeine latte waikiki',
      'matcha vs hojicha', 'hojicha near me',
      'ほうじ茶', 'ほうじ茶ラテ', '호지차', '호지차 라떼', '焙茶',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/what-is-hojicha-waikiki`,
      siteName: 'Kona Coffee Donut?',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/what-is-hojicha-waikiki.jpeg',
          width: 1200,
          height: 630,
          alt: 'What is Hojicha - Roasted Green Tea Latte Guide in Waikiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/what-is-hojicha-waikiki.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/what-is-hojicha-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/what-is-hojicha-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/what-is-hojicha-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/what-is-hojicha-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/what-is-hojicha-waikiki`,
        'x-default': `${siteUrl}/en/blog/what-is-hojicha-waikiki`,
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

export default function WhatIsHojichaWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
