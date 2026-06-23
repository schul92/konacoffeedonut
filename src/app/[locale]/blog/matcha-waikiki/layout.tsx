import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Matcha in Waikiki (2026): What It Is, the History & Every Flavor We Pour',
    description: 'What is matcha? A complete guide to Japan\'s iconic green tea — history, matcha vs coffee vs hojicha, and all 9 matcha & hojicha latte flavors we pour in Waikiki, ~5 min from the beach.',
  },
  ja: {
    title: '抹茶 in ワイキキ（2026）：抹茶とは？歴史と全フレーバー完全ガイド',
    description: '抹茶とは？日本を代表する緑茶の完全ガイド。歴史、抹茶 vs コーヒー vs ほうじ茶の違い、そしてワイキキで点てる抹茶＆ほうじ茶ラテ全9種をご紹介。ビーチから徒歩約5分。',
  },
  ko: {
    title: '와이키키 말차(2026): 말차란? 역사와 모든 플레이버 완벽 가이드',
    description: '말차란 무엇일까요? 일본 대표 녹차의 완벽 가이드 — 역사, 말차 vs 커피 vs 호지차, 그리고 와이키키에서 갓 격불하는 말차＆호지차 라테 9가지. 해변에서 도보 약 5분.',
  },
  zh: {
    title: '威基基抹茶（2026）：什么是抹茶、历史与我们供应的每款口味',
    description: '什么是抹茶？日本经典绿茶完全指南——历史、抹茶 vs 咖啡 vs 焙茶，以及我们在威基基现打的9款抹茶＆焙茶拿铁口味。距海滩约5分钟。',
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
      'matcha waikiki', 'matcha latte waikiki', 'what is matcha', 'best matcha waikiki',
      'matcha near me waikiki', 'matcha', 'matcha latte', 'matcha vs coffee',
      'hojicha waikiki', 'strawberry matcha waikiki', 'matcha history',
      'japanese green tea', 'matcha hawaii', 'iced matcha waikiki', 'matcha mochi donut',
      '抹茶', '抹茶とは', 'ワイキキ 抹茶', '말차', '말차란', '와이키키 말차', '抹茶', '威基基 抹茶',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/matcha-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/matcha-waikiki.jpeg',
          width: 1200,
          height: 630,
          alt: 'Matcha in Waikiki - What Is Matcha, History & Every Flavor We Pour',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/matcha-waikiki.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/matcha-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/matcha-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/matcha-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/matcha-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/matcha-waikiki`,
        'x-default': `${siteUrl}/en/blog/matcha-waikiki`,
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

export default function MatchaWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
