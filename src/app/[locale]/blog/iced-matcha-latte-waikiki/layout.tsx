import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Iced Matcha Latte in Waikiki (2026): The Perfect Beach-Day Drink',
    description: 'Where to get the best iced matcha latte in Waikiki — real stone-ground matcha (not syrup), not too sweet, with strawberry, mango & oat/almond/soy options near Waikiki Beach.',
  },
  ja: {
    title: 'ワイキキのアイス抹茶ラテ（2026）｜ビーチデーに最高の一杯',
    description: 'ワイキキで美味しいアイス抹茶ラテを飲むなら。本物の石臼挽き抹茶（シロップではなく）、甘すぎず、ストロベリーやマンゴー、オーツ・アーモンド・ソイも。ワイキキビーチ近く。',
  },
  ko: {
    title: '와이키키 아이스 말차 라테 (2026)｜해변의 날에 완벽한 한 잔',
    description: '와이키키에서 최고의 아이스 말차 라테 마시는 곳. 진짜 맷돌로 간 말차(시럽 아님), 너무 달지 않고, 딸기·망고와 귀리·아몬드·두유 옵션까지. 와이키키 해변 근처.',
  },
  zh: {
    title: '威基基冰抹茶拿铁（2026）：完美的海滩日饮品',
    description: '在威基基喝到最好的冰抹茶拿铁——真正石磨抹茶（而非糖浆）、不太甜，还有草莓、芒果与燕麦奶/杏仁奶/豆奶可选，就在威基基海滩附近。',
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
      'iced matcha latte', 'iced matcha', 'iced matcha latte near me', 'iced matcha waikiki',
      'best iced matcha', 'iced matcha near me', 'matcha latte waikiki', 'strawberry matcha waikiki',
      'iced strawberry matcha', 'stone ground matcha', 'real matcha waikiki', 'matcha near waikiki beach',
      'iced hojicha waikiki', 'dairy free matcha waikiki', 'oat milk matcha', 'best matcha waikiki',
      'アイス抹茶ラテ', 'アイス抹茶', 'ワイキキ 抹茶', '아이스 말차 라테', '와이키키 말차', '冰抹茶拿铁', '威基基 抹茶',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/iced-matcha-latte-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/iced-matcha-latte-waikiki.jpeg',
          width: 1200,
          height: 630,
          alt: 'Iced Matcha Latte in Waikiki - Real Stone-Ground Matcha Near Waikiki Beach',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/iced-matcha-latte-waikiki.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/iced-matcha-latte-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/iced-matcha-latte-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/iced-matcha-latte-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/iced-matcha-latte-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/iced-matcha-latte-waikiki`,
        'x-default': `${siteUrl}/en/blog/iced-matcha-latte-waikiki`,
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

export default function IcedMatchaLatteWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
