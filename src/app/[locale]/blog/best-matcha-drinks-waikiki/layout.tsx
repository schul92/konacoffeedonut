import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Best Matcha in Waikiki (2026): Every Flavor Ranked, From $9.95',
    description: 'The best matcha in Waikiki, ranked: whisked Japanese matcha lattes from $9.95, bestselling Strawberry Matcha $11.95, tropical & hojicha. 2142 Kalākaua Ave, 7 AM–9 PM.',
  },
  ja: {
    title: 'ワイキキの抹茶おすすめ（2026）｜全フレーバーランキング・$9.95〜',
    description: 'ワイキキで一番おいしい抹茶をランキングで。本格点てたて日本産抹茶、人気No.1のストロベリー抹茶、クラシック、トロピカル、ほうじ茶、アイスまで。価格もご紹介。',
  },
  ko: {
    title: '와이키키 말차 맛집 (2026)｜전 메뉴 랭킹·$9.95부터',
    description: '와이키키 최고의 말차를 랭킹으로. 진짜 갓 격불한 일본 말차, 베스트셀러 딸기 말차부터 클래식·트로피컬·호지차·아이스까지. 가격 정보 포함.',
  },
  zh: {
    title: '威基基抹茶推荐（2026）：全口味排行，$9.95起',
    description: '威基基最好喝的抹茶排行榜。正宗现打日本抹茶，招牌草莓抹茶领衔，还有经典、热带、焙茶与冰饮选择。附价格。',
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
      'best matcha waikiki', 'matcha waikiki', 'matcha flavors', 'strawberry matcha waikiki',
      'iced matcha latte waikiki', 'best matcha drinks waikiki', 'matcha latte waikiki',
      'matcha near waikiki beach', 'mango matcha waikiki', 'coconut matcha waikiki',
      'guava matcha waikiki', 'lilikoi matcha waikiki', 'hojicha waikiki', 'matcha honolulu',
      'best matcha in waikiki', 'matcha flavors waikiki',
      '抹茶 ワイキキ', 'ストロベリー抹茶', '말차 와이키키', '딸기 말차', '抹茶 威基基', '草莓抹茶',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/best-matcha-drinks-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/best-matcha-drinks-waikiki.jpeg',
          width: 1200,
          height: 630,
          alt: 'Best Matcha Drinks in Waikiki - Every Flavor Ranked',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/best-matcha-drinks-waikiki.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/best-matcha-drinks-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/best-matcha-drinks-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/best-matcha-drinks-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/best-matcha-drinks-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/best-matcha-drinks-waikiki`,
        'x-default': `${siteUrl}/en/blog/best-matcha-drinks-waikiki`,
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

export default function BestMatchaDrinksWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
