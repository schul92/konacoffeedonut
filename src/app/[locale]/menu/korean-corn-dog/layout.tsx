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
      title: "Korean Corn Dog | Best Cheese Hot Dog in Waikiki",
      description: "Try authentic Korean corn dogs in Waikiki! Crispy batter, stretchy mozzarella cheese, delicious toppings. The viral K-food sensation! Visit Kalakaua Ave!",
    },
    ja: {
      title: "韓国ホットドッグ | ワイキキで人気のチーズドッグ",
      description: "ワイキキで本格的な韓国ホットドッグを！カリカリ衣、伸び〜るモッツァレラチーズ。話題のK-フードをカラカウア通りで！",
    },
    ko: {
      title: "핫도그 | 와이키키 최고의 치즈 핫도그",
      description: "와이키키에서 정통 한국 핫도그를! 바삭한 반죽, 쭉쭉 늘어나는 모짜렐라 치즈. 바이럴 K-푸드를 칼라카우아에서!",
    },
    zh: {
      title: "韩式热狗 | 威基基最好的芝士热狗",
      description: "在威基基品尝正宗韩式热狗！酥脆面糊，拉丝马苏里拉芝士。网红K-美食在卡拉卡瓦！",
    },
    es: {
      title: "Korean Corn Dog | El Mejor Hot Dog con Queso en Waikiki",
      description: "¡Prueba los auténticos corn dogs coreanos en Waikiki! Masa crujiente, queso mozzarella elástico. ¡La sensación viral K-food! ¡Visítanos en Kalakaua Ave!",
    },
  };

  const currentMeta = metadata[locale] || metadata.en;

  const keywords = [
    // English
    'korean corn dog waikiki', 'korean corn dog hawaii', 'korean hot dog honolulu',
    'cheese corn dog waikiki', 'mozzarella corn dog', 'korean street food hawaii',
    'k-food waikiki', 'korean food hawaii', 'corn dog near me', 'cheese hot dog',
    'korean corn dog oahu', 'best corn dog hawaii', 'viral corn dog',
    // Japanese
    '韓国ホットドッグ ワイキキ', '韓国ホットドッグ ハワイ', 'チーズドッグ ワイキキ',
    'ハットグ ハワイ', 'モッツァレラ ホットドッグ', '韓国料理 ワイキキ',
    'K-フード ハワイ', 'ワイキキ 韓国フード',
    // Korean
    '핫도그 와이키키', '핫도그 하와이', '치즈 핫도그 호놀룰루',
    '한국 음식 와이키키', 'K-푸드 하와이', '와이키키 한국 음식',
    '모짜렐라 핫도그', '감자 핫도그',
    // Chinese
    '韩式热狗 威基基', '韩式热狗 夏威夷', '芝士热狗 威基基',
    '韩国街头美食 夏威夷', 'K-美食 威基基', '威基基 韩国美食',
  ];

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    keywords: keywords,
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : locale === 'ja' ? 'ja_JP' : locale === 'ko' ? 'ko_KR' : 'zh_CN',
      url: `${siteUrl}/${locale}/menu/korean-corn-dog`,
      siteName: 'Kona Coffee Donut',
      title: currentMeta.title,
      description: currentMeta.description,
      images: [
        {
          url: '/images/menu/hotdog.webp',
          width: 1200,
          height: 630,
          alt: 'Korean Corn Dog at Kona Coffee Donut Waikiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMeta.title,
      description: currentMeta.description,
      images: ['/images/menu/hotdog.webp'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/menu/korean-corn-dog`,
      languages: {
        'en-US': `${siteUrl}/en/menu/korean-corn-dog`,
        'ja-JP': `${siteUrl}/ja/menu/korean-corn-dog`,
        'ko-KR': `${siteUrl}/ko/menu/korean-corn-dog`,
        'zh-CN': `${siteUrl}/zh/menu/korean-corn-dog`,
        'es-ES': `${siteUrl}/es/menu/korean-corn-dog`,
        'x-default': `${siteUrl}/en/menu/korean-corn-dog`,
      },
    },
  };
}

export default function KoreanCornDogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
