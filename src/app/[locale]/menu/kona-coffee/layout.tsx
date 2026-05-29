import type { Metadata } from "next";

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  // Titles without site name - parent template adds "| Kona Coffee Donut®..."
  const metadata: Record<string, { title: string; description: string }> = {
    en: {
      title: "100% Kona Coffee Available in Waikiki",
      description: "Order Kona coffee in Waikiki — espresso, drip, iced coffee, and lattes. 100% Kona coffee available with fresh donuts near Waikiki Beach on Kalākaua Ave.",
    },
    ja: {
      title: "ワイキキで100%コナコーヒーも楽しめるカフェ",
      description: "ワイキキでコナコーヒー、アイスコーヒー、ラテを。100% Kona coffee available。カラカウア通り近くでドーナツと一緒にどうぞ。",
    },
    ko: {
      title: "와이키키 100% 코나 커피도 가능한 카페",
      description: "와이키키에서 코나 커피, 아이스커피, 라떼를 즐기세요. 100% Kona coffee available. 칼라카우아 애비뉴 근처 도넛 카페입니다.",
    },
    zh: {
      title: "威基基可选100%科纳咖啡的咖啡店",
      description: "在威基基享用科纳咖啡、冰咖啡和拿铁。100% Kona coffee available。卡拉卡瓦大道附近，适合搭配新鲜甜甜圈。",
    },
    es: {
      title: "100% Kona Coffee Available in Waikiki",
      description: "Coffee in Waikiki with espresso, iced coffee, lattes, and 100% Kona coffee available. Pair your cup with fresh donuts near Waikiki Beach.",
    },
  };

  const currentMeta = metadata[locale] || metadata.en;

  // Keywords targeting tourists and coffee lovers
  const keywords = [
    // English
    '100% kona coffee available', '100% kona coffee waikiki', 'kona coffee waikiki', 'kona coffee hawaii', 'best coffee waikiki',
    'hawaiian coffee shop', 'kona coffee near me', 'coffee waikiki',
    'best kona coffee honolulu', 'honolulu coffee waikiki', 'kona coffee cafe',
    'coffee shop kalakaua', 'hawaii coffee', 'big island coffee',
    'kona coffee oahu', 'honolulu coffee', 'kona coffee beans',
    // Japanese
    'コナコーヒー ワイキキ', 'コナコーヒー ハワイ', 'ワイキキ カフェ',
    'ハワイ コーヒー おすすめ', 'コナコーヒー 本格', 'ホノルル コーヒー',
    'ワイキキ コーヒーショップ', 'ハワイ カフェ 人気',
    // Korean
    '코나 커피 와이키키', '코나 커피 하와이', '와이키키 카페',
    '하와이 커피 추천', '호놀룰루 카페', '와이키키 커피숍',
    // Chinese
    '科纳咖啡 威基基', '科纳咖啡 夏威夷', '威基基 咖啡店',
    '夏威夷 咖啡推荐', '檀香山 咖啡厅',
  ];

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    keywords: keywords,
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : locale === 'ja' ? 'ja_JP' : locale === 'ko' ? 'ko_KR' : 'zh_CN',
      url: `${siteUrl}/${locale}/menu/kona-coffee`,
      siteName: 'Kona Coffee Donut',
      title: currentMeta.title,
      description: currentMeta.description,
      images: [
        {
          url: '/images/menu/coffee.webp',
          width: 1200,
          height: 630,
          alt: 'Kona Coffee at Kona Coffee Donut Waikiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMeta.title,
      description: currentMeta.description,
      images: ['/images/menu/coffee.webp'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/menu/kona-coffee`,
      languages: {
        'en-US': `${siteUrl}/en/menu/kona-coffee`,
        'ja-JP': `${siteUrl}/ja/menu/kona-coffee`,
        'ko-KR': `${siteUrl}/ko/menu/kona-coffee`,
        'zh-CN': `${siteUrl}/zh/menu/kona-coffee`,
        'es-ES': `${siteUrl}/es/menu/kona-coffee`,
        'x-default': `${siteUrl}/en/menu/kona-coffee`,
      },
    },
  };
}

export default function KonaCoffeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
