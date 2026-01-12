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
      title: "Acai Bowl | Best Superfood Bowls in Waikiki",
      description: "Try the best acai bowls in Waikiki! Fresh Brazilian acai with Hawaiian fruits, granola & toppings. Healthy breakfast near Kalakaua Ave. Visit us today!",
    },
    ja: {
      title: "アサイーボウル | ワイキキで人気のスーパーフード",
      description: "ワイキキで最高のアサイーボウルを！新鮮なブラジル産アサイーにハワイのフルーツ、グラノーラをトッピング。カラカウア通りでお待ちしています！",
    },
    ko: {
      title: "아사이 볼 | 와이키키 최고의 슈퍼푸드 볼",
      description: "와이키키 최고의 아사이 볼! 신선한 브라질 아사이에 하와이 과일, 그래놀라 토핑. 칼라카우아 애비뉴 근처 건강한 아침!",
    },
    zh: {
      title: "巴西莓果碗 | 威基基最好的超级食物碗",
      description: "品尝威基基最好的巴西莓果碗！新鲜巴西莓配夏威夷水果、格兰诺拉麦片。卡拉卡瓦大道附近的健康早餐！",
    },
    es: {
      title: "Acai Bowl | Los Mejores Bowls de Superalimentos en Waikiki",
      description: "¡Prueba los mejores acai bowls en Waikiki! Açaí brasileño fresco con frutas hawaianas, granola y toppings. ¡Desayuno saludable cerca de Kalakaua Ave!",
    },
  };

  const currentMeta = metadata[locale] || metadata.en;

  const keywords = [
    // English
    'acai bowl waikiki', 'acai bowl hawaii', 'acai bowl honolulu',
    'best acai bowl oahu', 'acai bowl near me', 'healthy breakfast waikiki',
    'superfood bowl hawaii', 'smoothie bowl waikiki', 'acai waikiki',
    'healthy food waikiki', 'breakfast waikiki', 'acai kalakaua',
    // Japanese
    'アサイーボウル ワイキキ', 'アサイーボウル ハワイ', 'アサイー ホノルル',
    'ハワイ 朝食 おすすめ', 'ワイキキ ヘルシーフード', 'スーパーフード ハワイ',
    'ワイキキ カフェ 朝食', 'ハワイ スムージー',
    // Korean
    '아사이볼 와이키키', '아사이볼 하와이', '아사이 호놀룰루',
    '와이키키 건강식', '하와이 아침식사 추천', '슈퍼푸드 하와이',
    '와이키키 카페 아침', '하와이 스무디',
    // Chinese
    '巴西莓碗 威基基', '巴西莓碗 夏威夷', '巴西莓 檀香山',
    '威基基 健康早餐', '夏威夷 超级食物', '威基基 早餐推荐',
  ];

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    keywords: keywords,
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : locale === 'ja' ? 'ja_JP' : locale === 'ko' ? 'ko_KR' : 'zh_CN',
      url: `${siteUrl}/${locale}/menu/acai-bowl`,
      siteName: 'Kona Coffee Donut',
      title: currentMeta.title,
      description: currentMeta.description,
      images: [
        {
          url: '/images/menu/acai.webp',
          width: 1200,
          height: 630,
          alt: 'Acai Bowl at Kona Coffee Donut Waikiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMeta.title,
      description: currentMeta.description,
      images: ['/images/menu/acai.webp'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/menu/acai-bowl`,
      languages: {
        'en-US': `${siteUrl}/en/menu/acai-bowl`,
        'ja-JP': `${siteUrl}/ja/menu/acai-bowl`,
        'ko-KR': `${siteUrl}/ko/menu/acai-bowl`,
        'zh-CN': `${siteUrl}/zh/menu/acai-bowl`,
        'es-ES': `${siteUrl}/es/menu/acai-bowl`,
        'x-default': `${siteUrl}/en/menu/acai-bowl`,
      },
    },
  };
}

export default function AcaiBowlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
