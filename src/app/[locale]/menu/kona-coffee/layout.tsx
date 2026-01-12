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
      title: "Kona Coffee | Best Hawaiian Coffee in Waikiki",
      description: "Experience authentic 100% Kona Coffee in Waikiki! Hawaii's finest coffee from Big Island farms. Smooth, rich flavor with hints of chocolate. Visit us on Kalakaua Ave!",
    },
    ja: {
      title: "コナコーヒー | ワイキキ最高のハワイアンコーヒー",
      description: "ワイキキで本格的なコナコーヒーを！ビッグアイランド産100%コナ豆使用。チョコレートの香りが漂う滑らかで豊かな味わい。カラカウア通りでお待ちしています！",
    },
    ko: {
      title: "코나 커피 | 와이키키 최고의 하와이안 커피",
      description: "와이키키에서 정통 100% 코나 커피를! 빅 아일랜드 농장의 하와이 최고급 커피. 초콜릿 향이 나는 부드럽고 풍부한 맛. 칼라카우아 애비뉴에서 만나요!",
    },
    zh: {
      title: "科纳咖啡 | 威基基最好的夏威夷咖啡",
      description: "在威基基体验正宗100%科纳咖啡！来自大岛农场的夏威夷顶级咖啡。带有巧克力香气的顺滑浓郁风味。卡拉卡瓦大道等你来！",
    },
    es: {
      title: "Café Kona | El Mejor Café Hawaiano en Waikiki",
      description: "¡Experimenta el auténtico café Kona 100% en Waikiki! El mejor café de Hawaii de las granjas de Big Island. Sabor suave y rico con notas de chocolate. ¡Visítanos!",
    },
  };

  const currentMeta = metadata[locale] || metadata.en;

  // Keywords targeting tourists and coffee lovers
  const keywords = [
    // English
    'kona coffee waikiki', 'kona coffee hawaii', 'best coffee waikiki',
    'hawaiian coffee shop', 'kona coffee near me', 'coffee waikiki',
    'best kona coffee honolulu', '100% kona coffee', 'kona coffee cafe',
    'coffee shop kalakaua', 'hawaii coffee', 'big island coffee',
    'kona coffee oahu', 'authentic kona coffee', 'kona coffee beans',
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
