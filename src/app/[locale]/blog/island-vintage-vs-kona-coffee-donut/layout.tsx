import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Island Vintage vs Kona Coffee Donut? (2026): Açaí & Kona in Waikiki',
    description: 'Island Vintage Coffee vs Kona Coffee Donut? — a fair comparison of açaí bowls and Kona coffee in Waikiki. 100% Kona vs Kona blend, prices, waits, and which fits you.',
  },
  ja: {
    title: 'アイランドヴィンテージ vs Kona Coffee Donut?（2026）｜ワイキキのアサイー＆コナ',
    description: 'アイランドヴィンテージコーヒー vs Kona Coffee Donut? — ワイキキのアサイーボウルとコナコーヒーを公平に比較。100%コナとブレンドの違い、価格、待ち時間、あなたに合うのはどっち。',
  },
  ko: {
    title: '아일랜드 빈티지 vs Kona Coffee Donut? (2026)｜와이키키 아사이 & 코나',
    description: '아일랜드 빈티지 커피 vs Kona Coffee Donut? — 와이키키의 아사이 볼과 코나 커피를 공정하게 비교. 100% 코나와 코나 블렌드 차이, 가격, 대기, 당신에게 맞는 곳.',
  },
  zh: {
    title: 'Island Vintage vs Kona Coffee Donut?（2026）：威基基阿萨伊与科纳',
    description: 'Island Vintage Coffee vs Kona Coffee Donut?——公平对比威基基的阿萨伊碗与科纳咖啡。100%科纳与科纳混合、价格、排队，以及哪家更适合你。',
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
      'island vintage coffee', 'island vintage waikiki', 'island vintage vs',
      'acai bowl waikiki', 'best acai waikiki', 'acai and kona coffee waikiki',
      'island vintage acai', 'acai waikiki', 'kona coffee donut',
      'best acai bowl waikiki', '100% kona coffee waikiki', 'kona blend vs 100% kona',
      'where to get acai waikiki', 'acai near waikiki beach', 'kona coffee waikiki',
      'アイランドヴィンテージ', 'アサイー ワイキキ', '아사이 와이키키', '科纳咖啡', '阿萨伊 威基基',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/island-vintage-vs-kona-coffee-donut`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/island-vintage-vs-kona-coffee-donut.jpeg',
          width: 1200,
          height: 630,
          alt: 'Island Vintage Coffee vs Kona Coffee Donut? - Açaí Bowls & Kona Coffee in Waikiki Compared',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/island-vintage-vs-kona-coffee-donut.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/island-vintage-vs-kona-coffee-donut`,
      languages: {
        'en-US': `${siteUrl}/en/blog/island-vintage-vs-kona-coffee-donut`,
        'ja-JP': `${siteUrl}/ja/blog/island-vintage-vs-kona-coffee-donut`,
        'ko-KR': `${siteUrl}/ko/blog/island-vintage-vs-kona-coffee-donut`,
        'zh-CN': `${siteUrl}/zh/blog/island-vintage-vs-kona-coffee-donut`,
        'x-default': `${siteUrl}/en/blog/island-vintage-vs-kona-coffee-donut`,
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

export default function IslandVintageVsKonaCoffeeDonutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
