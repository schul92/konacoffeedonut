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
      title: "Mochi Donuts in Waikiki | Best Japanese Donuts Hawaii | Kona Coffee Donut",
      description: "Try the best mochi donuts in Waikiki! Our signature Japanese-style donuts are crispy outside, chewy inside. Made fresh daily with premium rice flour. Visit us on Kalakaua Ave!",
    },
    ja: {
      title: "ワイキキのモチドーナツ | ハワイで人気の日本式ドーナツ | Kona Coffee Donut",
      description: "ワイキキで最高のモチドーナツを！外はサクサク、中はもちもちの日本式ドーナツ。毎日新鮮な米粉で手作り。カラカウア通りでお待ちしています！",
    },
    ko: {
      title: "와이키키 모찌 도넛 | 하와이 최고의 일본식 도넛 | Kona Coffee Donut",
      description: "와이키키 최고의 모찌 도넛을 맛보세요! 겉은 바삭, 속은 쫄깃한 일본식 도넛. 매일 신선한 쌀가루로 만듭니다. 칼라카우아 애비뉴에서 만나요!",
    },
    zh: {
      title: "威基基麻糬甜甜圈 | 夏威夷最好吃的日式甜甜圈 | Kona Coffee Donut",
      description: "来威基基品尝最好的麻糬甜甜圈！外酥内软的日式甜甜圈，每日新鲜制作。卡拉卡瓦大道等你来！",
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
        'en': `${siteUrl}/en/menu/mochi-donuts`,
        'ja': `${siteUrl}/ja/menu/mochi-donuts`,
        'ko': `${siteUrl}/ko/menu/mochi-donuts`,
        'zh': `${siteUrl}/zh/menu/mochi-donuts`,
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
