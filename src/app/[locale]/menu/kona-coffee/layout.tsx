import type { Metadata } from "next";

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const metadata: Record<string, { title: string; description: string }> = {
    en: {
      title: "Kona Coffee Waikiki | Best Hawaiian Coffee Shop | Kona Coffee Donut",
      description: "Experience authentic 100% Kona Coffee in Waikiki! Hawaii's finest coffee from Big Island farms. Smooth, rich flavor with hints of chocolate. Visit us on Kalakaua Ave!",
    },
    ja: {
      title: "ワイキキのコナコーヒー | ハワイ最高のコーヒーショップ | Kona Coffee Donut",
      description: "ワイキキで本格的なコナコーヒーを！ビッグアイランド産100%コナ豆使用。チョコレートの香りが漂う滑らかで豊かな味わい。カラカウア通りでお待ちしています！",
    },
    ko: {
      title: "와이키키 코나 커피 | 하와이 최고의 커피숍 | Kona Coffee Donut",
      description: "와이키키에서 정통 100% 코나 커피를! 빅 아일랜드 농장의 하와이 최고급 커피. 초콜릿 향이 나는 부드럽고 풍부한 맛. 칼라카우아 애비뉴에서 만나요!",
    },
    zh: {
      title: "威基基科纳咖啡 | 夏威夷最好的咖啡店 | Kona Coffee Donut",
      description: "在威基基体验正宗100%科纳咖啡！来自大岛农场的夏威夷顶级咖啡。带有巧克力香气的顺滑浓郁风味。卡拉卡瓦大道等你来！",
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
        'en': `${siteUrl}/en/menu/kona-coffee`,
        'ja': `${siteUrl}/ja/menu/kona-coffee`,
        'ko': `${siteUrl}/ko/menu/kona-coffee`,
        'zh': `${siteUrl}/zh/menu/kona-coffee`,
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
