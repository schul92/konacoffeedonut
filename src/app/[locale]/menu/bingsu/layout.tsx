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
      title: "Bingsu | Best Korean Shaved Ice in Waikiki",
      description: "Try authentic Korean bingsu in Waikiki! Fluffy shaved ice with premium toppings - injeolmi, mango, strawberry & more. Perfect refreshing treat! Visit Kalakaua Ave!",
    },
    ja: {
      title: "ビンス | ワイキキで人気の韓国かき氷",
      description: "ワイキキで本格的な韓国ビンスを！ふわふわかき氷にプレミアムトッピング - インジョルミ、マンゴー、いちごなど。カラカウア通りでお待ちしています！",
    },
    ko: {
      title: "빙수 | 와이키키 최고의 한국 빙수",
      description: "와이키키에서 정통 한국 빙수를! 부드러운 빙수에 프리미엄 토핑 - 인절미, 망고, 딸기 등. 칼라카우아 애비뉴에서 만나요!",
    },
    zh: {
      title: "冰淇淋 | 威基基最好的韩式刨冰",
      description: "在威基基品尝正宗韩式冰淇淋！绵密刨冰配优质配料 - 豆粉、芒果、草莓等。卡拉卡瓦大道等你来！",
    },
    es: {
      title: "Bingsu | El Mejor Hielo Raspado Coreano en Waikiki",
      description: "¡Prueba el auténtico bingsu coreano en Waikiki! Hielo raspado esponjoso con toppings premium. ¡El postre refrescante perfecto! ¡Visítanos en Kalakaua Ave!",
    },
  };

  const currentMeta = metadata[locale] || metadata.en;

  const keywords = [
    // English
    'bingsu waikiki', 'bingsu hawaii', 'korean shaved ice waikiki',
    'korean shaved ice hawaii', 'bingsu near me', 'patbingsu hawaii',
    'korean dessert waikiki', 'shaved ice honolulu', 'best bingsu oahu',
    'injeolmi bingsu', 'mango bingsu', 'korean ice cream waikiki',
    // Japanese
    'ビンス ワイキキ', 'ビンス ハワイ', '韓国かき氷 ワイキキ',
    'パッビンス ハワイ', 'ワイキキ かき氷', 'ハワイ 韓国デザート',
    'インジョルミ ビンス', 'ホノルル ビンス',
    // Korean
    '빙수 와이키키', '빙수 하와이', '와이키키 한국 디저트',
    '팥빙수 하와이', '인절미 빙수', '호놀룰루 빙수',
    '하와이 빙수 맛집', '와이키키 빙수집',
    // Chinese
    '冰淇淋 威基基', '冰淇淋 夏威夷', '韩式刨冰 威基基',
    '红豆冰 夏威夷', '威基基 韩式甜点', '檀香山 冰淇淋',
  ];

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    keywords: keywords,
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : locale === 'ja' ? 'ja_JP' : locale === 'ko' ? 'ko_KR' : 'zh_CN',
      url: `${siteUrl}/${locale}/menu/bingsu`,
      siteName: 'Kona Coffee Donut',
      title: currentMeta.title,
      description: currentMeta.description,
      images: [
        {
          url: '/images/menu/bingsu.webp',
          width: 1200,
          height: 630,
          alt: 'Bingsu at Kona Coffee Donut Waikiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMeta.title,
      description: currentMeta.description,
      images: ['/images/menu/bingsu.webp'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/menu/bingsu`,
      languages: {
        'en-US': `${siteUrl}/en/menu/bingsu`,
        'ja-JP': `${siteUrl}/ja/menu/bingsu`,
        'ko-KR': `${siteUrl}/ko/menu/bingsu`,
        'zh-CN': `${siteUrl}/zh/menu/bingsu`,
        'es-ES': `${siteUrl}/es/menu/bingsu`,
        'x-default': `${siteUrl}/en/menu/bingsu`,
      },
    },
  };
}

export default function BingsuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
