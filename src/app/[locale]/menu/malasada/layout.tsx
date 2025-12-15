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
      title: "Malasada Waikiki | Best Portuguese Donuts Hawaii | Kona Coffee Donut",
      description: "Try authentic malasadas in Waikiki! Traditional Portuguese fried dough, crispy outside and fluffy inside. Made fresh daily with haupia, chocolate, and more. Visit Kalakaua Ave!",
    },
    ja: {
      title: "ワイキキのマラサダ | ハワイで人気のポルトガルドーナツ | Kona Coffee Donut",
      description: "ワイキキで本格マラサダを！外はカリッ、中はふわふわの伝統的なポルトガル風揚げドーナツ。ハウピア、チョコレートなど毎日新鮮に手作り！",
    },
    ko: {
      title: "와이키키 말라사다 | 하와이 최고의 포르투갈 도넛 | Kona Coffee Donut",
      description: "와이키키에서 정통 말라사다를! 겉은 바삭 속은 폭신한 전통 포르투갈식 튀김 도넛. 하우피아, 초콜릿 등 매일 신선하게!",
    },
    zh: {
      title: "威基基马拉萨达 | 夏威夷最好的葡萄牙甜甜圈 | Kona Coffee Donut",
      description: "在威基基品尝正宗马拉萨达！外酥内软的传统葡萄牙炸甜甜圈。椰奶、巧克力等口味每日新鲜制作！",
    },
  };

  const currentMeta = metadata[locale] || metadata.en;

  const keywords = [
    // English
    'malasada waikiki', 'malasada hawaii', 'malasada honolulu',
    'portuguese donuts waikiki', 'portuguese donuts hawaii', 'best malasada oahu',
    'leonard malasada', 'malasada near me', 'where to buy malasada hawaii',
    'hawaiian donuts', 'fried dough hawaii', 'malasada kalakaua',
    'haupia malasada', 'best donuts waikiki',
    // Japanese
    'マラサダ ワイキキ', 'マラサダ ハワイ', 'マラサダ ホノルル',
    'ハワイ ドーナツ', 'ワイキキ スイーツ', 'ハワイ スイーツ 人気',
    'ポルトガル ドーナツ ハワイ',
    // Korean
    '말라사다 와이키키', '말라사다 하와이', '말라사다 호놀룰루',
    '하와이 도넛 맛집', '와이키키 디저트', '포르투갈 도넛',
    // Chinese
    '马拉萨达 威基基', '马拉萨达 夏威夷', '葡萄牙甜甜圈',
    '威基基 甜点', '夏威夷 甜甜圈推荐',
  ];

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    keywords: keywords,
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : locale === 'ja' ? 'ja_JP' : locale === 'ko' ? 'ko_KR' : 'zh_CN',
      url: `${siteUrl}/${locale}/menu/malasada`,
      siteName: 'Kona Coffee Donut',
      title: currentMeta.title,
      description: currentMeta.description,
      images: [
        {
          url: '/images/menu/malasada.webp',
          width: 1200,
          height: 630,
          alt: 'Malasada at Kona Coffee Donut Waikiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMeta.title,
      description: currentMeta.description,
      images: ['/images/menu/malasada.webp'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/menu/malasada`,
      languages: {
        'en': `${siteUrl}/en/menu/malasada`,
        'ja': `${siteUrl}/ja/menu/malasada`,
        'ko': `${siteUrl}/ko/menu/malasada`,
        'zh': `${siteUrl}/zh/menu/malasada`,
      },
    },
  };
}

export default function MalasadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
