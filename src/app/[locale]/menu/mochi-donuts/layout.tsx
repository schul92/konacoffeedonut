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
      title: "Mochi Donuts | Best Japanese Donuts in Waikiki",
      description: "Try the best mochi donuts in Waikiki! Our signature Japanese-style donuts are crispy outside, chewy inside. Made fresh daily with premium rice flour. Visit us on Kalakaua Ave!",
    },
    ja: {
      title: "モチドーナツ | ワイキキで人気の日本式ドーナツ",
      description: "ワイキキで最高のモチドーナツを！外はサクサク、中はもちもちの日本式ドーナツ。毎日新鮮な米粉で手作り。カラカウア通りでお待ちしています！",
    },
    ko: {
      title: "모찌 도넛 | 와이키키 최고의 일본식 도넛",
      description: "와이키키 최고의 모찌 도넛을 맛보세요! 겉은 바삭, 속은 쫄깃한 일본식 도넛. 매일 신선한 쌀가루로 만듭니다. 칼라카우아 애비뉴에서 만나요!",
    },
    zh: {
      title: "麻糬甜甜圈 | 威基基最好吃的日式甜甜圈",
      description: "来威基基品尝最好的麻糬甜甜圈！外酥内软的日式甜甜圈，每日新鲜制作。卡拉卡瓦大道等你来！",
    },
    es: {
      title: "Mochi Donuts | Los Mejores Donuts Japoneses en Waikiki",
      description: "¡Prueba los mejores mochi donuts en Waikiki! Donuts japoneses crujientes por fuera, suaves por dentro. Hechos frescos diariamente. ¡Visítanos en Kalakaua Ave!",
    },
  };

  const currentMeta = metadata[locale] || metadata.en;

  // Keywords targeting tourists searching for mochi donuts
  const keywords = [
    // English
    'mochi donuts waikiki', 'mochi donuts hawaii', 'mochi donuts honolulu',
    'best donuts waikiki', 'best donuts hawaii', 'japanese donuts waikiki',
    'pon de ring hawaii', 'mochi donut near me', 'where to buy mochi donuts hawaii',
    'mochi donuts kalakaua', 'chewy donuts waikiki', 'rice flour donuts hawaii',
    'mochinut waikiki', 'best mochi donuts oahu',
    // Japanese
    'モチドーナツ ワイキキ', 'モチドーナツ ハワイ', 'ポンデリング ハワイ',
    'ワイキキ ドーナツ', 'ハワイ ドーナツ おすすめ', 'もちもちドーナツ ホノルル',
    'ワイキキ スイーツ', 'ハワイ スイーツ 人気',
    // Korean
    '모찌 도넛 와이키키', '모찌 도넛 하와이', '와이키키 도넛',
    '하와이 도넛 맛집', '호놀룰루 디저트', '와이키키 디저트',
    // Chinese
    '麻糬甜甜圈 威基基', '麻糬甜甜圈 夏威夷', '威基基 甜点',
    '夏威夷 甜甜圈', '檀香山 甜点推荐',
  ];

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    keywords: keywords,
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : locale === 'ja' ? 'ja_JP' : locale === 'ko' ? 'ko_KR' : 'zh_CN',
      url: `${siteUrl}/${locale}/menu/mochi-donuts`,
      siteName: 'Kona Coffee Donut',
      title: currentMeta.title,
      description: currentMeta.description,
      images: [
        {
          url: '/images/menu/donut.webp',
          width: 1200,
          height: 630,
          alt: 'Mochi Donuts at Kona Coffee Donut Waikiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMeta.title,
      description: currentMeta.description,
      images: ['/images/menu/donut.webp'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/menu/mochi-donuts`,
      languages: {
        'en-US': `${siteUrl}/en/menu/mochi-donuts`,
        'ja-JP': `${siteUrl}/ja/menu/mochi-donuts`,
        'ko-KR': `${siteUrl}/ko/menu/mochi-donuts`,
        'zh-CN': `${siteUrl}/zh/menu/mochi-donuts`,
        'es-ES': `${siteUrl}/es/menu/mochi-donuts`,
        'x-default': `${siteUrl}/en/menu/mochi-donuts`,
      },
    },
  };
}

export default function MochiDonutsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
