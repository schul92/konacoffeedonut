import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Kona Coffee Purveyors vs Kona Coffee Donut? (2026): Best 100% Kona in Waikiki',
    description: 'A fair comparison of Kona Coffee Purveyors and Kona Coffee Donut? — both serve real 100% Kona in Waikiki. Compare coffee, pairings, price, hours & vibe to pick the best.',
  },
  ja: {
    title: 'Kona Coffee Purveyors vs Kona Coffee Donut?（2026）｜ワイキキ最高の100%コナ',
    description: 'Kona Coffee Purveyors と Kona Coffee Donut? を公平に比較。どちらもワイキキで本物の100%コナを提供。コーヒー、組み合わせ、価格、営業時間、雰囲気を比べて最適な一軒を。',
  },
  ko: {
    title: 'Kona Coffee Purveyors vs Kona Coffee Donut? (2026)｜와이키키 최고의 100% 코나',
    description: 'Kona Coffee Purveyors와 Kona Coffee Donut?를 공정하게 비교합니다. 두 곳 다 와이키키에서 진짜 100% 코나를 제공. 커피, 페어링, 가격, 영업시간, 분위기를 비교해 보세요.',
  },
  zh: {
    title: 'Kona Coffee Purveyors vs Kona Coffee Donut?（2026）：威基基最佳100%科纳',
    description: '公平比较 Kona Coffee Purveyors 与 Kona Coffee Donut?——两家都在威基基提供正宗100%科纳。对比咖啡、搭配、价格、营业时间与氛围，挑出最适合你的一家。',
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
      'kona coffee purveyors', 'kona coffee purveyors waikiki', 'kona coffee purveyors vs',
      'best kona coffee waikiki', '100% kona coffee waikiki', 'kona coffee purveyors review',
      'kona coffee waikiki', 'kona coffee near waikiki beach', '100% kona', 'kona blend',
      'best coffee waikiki', 'kona coffee donut', 'specialty coffee waikiki',
      'where to drink kona coffee', 'kona coffee and donuts',
      'コナコーヒー', '100%コナ', 'ワイキキ コーヒー', '코나 커피', '科纳咖啡',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/kona-coffee-purveyors-vs-kona-coffee-donut`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/kona-coffee-purveyors-vs-kona-coffee-donut.jpeg',
          width: 1200,
          height: 630,
          alt: 'Kona Coffee Purveyors vs Kona Coffee Donut - Best 100% Kona Coffee in Waikiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/kona-coffee-purveyors-vs-kona-coffee-donut.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/kona-coffee-purveyors-vs-kona-coffee-donut`,
      languages: {
        'en-US': `${siteUrl}/en/blog/kona-coffee-purveyors-vs-kona-coffee-donut`,
        'ja-JP': `${siteUrl}/ja/blog/kona-coffee-purveyors-vs-kona-coffee-donut`,
        'ko-KR': `${siteUrl}/ko/blog/kona-coffee-purveyors-vs-kona-coffee-donut`,
        'zh-CN': `${siteUrl}/zh/blog/kona-coffee-purveyors-vs-kona-coffee-donut`,
        'x-default': `${siteUrl}/en/blog/kona-coffee-purveyors-vs-kona-coffee-donut`,
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

export default function KonaCoffeePurveyorsVsKonaCoffeeDonutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
