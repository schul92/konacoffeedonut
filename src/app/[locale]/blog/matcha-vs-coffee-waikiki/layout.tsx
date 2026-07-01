import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Matcha vs Coffee: Which Should You Drink? (Waikiki 2026)',
    description: 'Matcha vs coffee compared — caffeine (~60–70mg vs ~95–120mg), calm focus vs quick lift, antioxidants, and flavor. Plus where to try both real 100% Kona and matcha in Waikiki.',
  },
  ja: {
    title: '抹茶 vs コーヒー：どっちを飲むべき？（ワイキキ2026）',
    description: '抹茶とコーヒーを比較 — カフェイン（約60〜70mg vs 約95〜120mg）、穏やかな集中 vs 速い高揚、抗酸化物質、味わい。さらにワイキキで本物の100%コナと抹茶を両方試せる場所も。',
  },
  ko: {
    title: '말차 vs 커피: 어떤 걸 마셔야 할까? (와이키키 2026)',
    description: '말차와 커피 비교 — 카페인(약 60~70mg vs 약 95~120mg), 차분한 집중 vs 빠른 상승, 항산화 물질, 풍미. 게다가 와이키키에서 진짜 100% 코나와 말차를 둘 다 맛보는 곳까지.',
  },
  zh: {
    title: '抹茶 vs 咖啡：该喝哪一个？（威基基2026）',
    description: '抹茶与咖啡对比——咖啡因（约60～70mg vs 约95～120mg）、平稳专注 vs 快速提神、抗氧化物、风味。还有在威基基同时试到正宗100%科纳和抹茶的地方。',
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
      'matcha vs coffee', 'matcha or coffee', 'is matcha better than coffee',
      'matcha vs coffee caffeine', 'matcha benefits vs coffee', 'matcha vs coffee waikiki',
      'matcha or coffee healthier', 'matcha caffeine', 'coffee caffeine',
      'matcha vs coffee energy', 'l-theanine matcha', 'matcha waikiki', 'kona coffee waikiki',
      'matcha latte waikiki', 'where to try matcha and coffee waikiki',
      '抹茶 コーヒー', '抹茶 vs コーヒー', '말차 커피', '抹茶 咖啡', '科纳咖啡',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/matcha-vs-coffee-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/matcha-vs-coffee-waikiki.jpeg',
          width: 1200,
          height: 630,
          alt: 'Matcha vs Coffee: Which Should You Drink? - Waikiki 2026',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/matcha-vs-coffee-waikiki.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/matcha-vs-coffee-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/matcha-vs-coffee-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/matcha-vs-coffee-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/matcha-vs-coffee-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/matcha-vs-coffee-waikiki`,
        'x-default': `${siteUrl}/en/blog/matcha-vs-coffee-waikiki`,
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

export default function MatchaVsCoffeeWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
