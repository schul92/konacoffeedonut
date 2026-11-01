import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'Best Desserts in Waikiki (2026): 8 Sweet Spots, Prices & Hours',
    ja: 'ワイキキのデザート人気店8選（2026）｜価格・営業時間 | Kona Coffee Donut',
    ko: '와이키키 디저트 맛집 8곳 (2026) | 가격·영업시간 | Kona Coffee Donut',
    zh: '威基基甜点人气店8家（2026）｜价格与营业时间 | Kona Coffee Donut',
  };
  const descriptions: Record<string, string> = {
    en: 'The 8 best dessert spots in Waikiki for 2026: mochi donuts, malasadas, a malasada ice cream sandwich ($8.95), bingsu, shave ice and gelato, with prices and hours.',
    ja: '2026年版ワイキキのおすすめデザート8選。モチドーナツやビンスからシェイブアイス、ジェラートまで、価格・必食メニュー・地元民のコツをまとめました。',
    ko: '2026년 와이키키 디저트 베스트 8. 모찌도넛과 빙수부터 셰이브 아이스, 젤라또까지 — 가격, 꼭 먹어야 할 메뉴, 현지인 팁을 한 번에 정리했습니다.',
    zh: '2026年威基基8大必吃甜点：从麻糬甜甜圈、雪冰到刨冰和意式冰淇淋，价格、必点单品与本地人小贴士一次看懂。',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;

  const localeMap: Record<string, string> = {
    en: 'en_US',
    ja: 'ja_JP',
    ko: 'ko_KR',
    zh: 'zh_CN',
    es: 'es_ES',
  };

  return {
    title,
    description,
    keywords: [
      'best desserts waikiki',
      'dessert near me waikiki',
      'dessert in waikiki',
      'best sweets waikiki',
      'where to get dessert in waikiki',
      'dessert places near me',
      'waikiki dessert spots 2026',
      'best desserts in hawaii',
      'dessert shops near waikiki beach',
      'hawaiian desserts',
      'shaved ice waikiki',
      'bingsu waikiki',
      'mochi donuts waikiki',
      'malasada waikiki',
      'acai bowl waikiki',
      'gelato waikiki',
      'ワイキキ デザート',
      '와이키키 디저트',
      '威基基甜点',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/best-desserts-waikiki`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Best Desserts in Waikiki 2026 - Sweet Spots You Can\'t Miss',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/best-desserts-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/best-desserts-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/best-desserts-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/best-desserts-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/best-desserts-waikiki`,
        'x-default': `${siteUrl}/en/blog/best-desserts-waikiki`,
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

export default function BestDessertsWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
