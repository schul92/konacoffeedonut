import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'Best Donuts in Waikiki 2026: Top 7 Donut Shops | Local Guide',
    ja: '2026年ワイキキのベストドーナツ | Kona Coffee Donut',
    ko: '2026년 와이키키 베스트 도넛 | Kona Coffee Donut',
    zh: '2026年威基基最佳甜甜圈 | Kona Coffee Donut',
  };
  const descriptions: Record<string, string> = {
    en: 'Discover the 7 best donut shops in Waikiki for 2026. From mochi donuts and malasadas to classic glazed, a local guide to the sweetest spots near Waikiki Beach. Insider tips, prices, and must-try flavors.',
    ja: '2026年版ワイキキのドーナツ店ベスト7。モチドーナツやマラサダから定番のグレーズドまで、ワイキキビーチ近くの人気店を地元民が価格とおすすめフレーバー付きで紹介。',
    ko: '2026년 와이키키 도넛 맛집 베스트 7. 모찌도넛과 말라사다부터 클래식 글레이즈드까지, 와이키키 비치 근처 인기 매장을 가격과 추천 맛까지 현지인이 소개합니다.',
    zh: '2026年威基基7家最佳甜甜圈店：从麻糬甜甜圈、马拉萨达到经典糖霜甜甜圈，本地人带你逛遍威基基海滩附近的人气店，附价格与必吃口味。',
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
      'best donuts waikiki',
      'donuts near me waikiki',
      'mochi donuts hawaii',
      'malasada waikiki',
      'best donut shop honolulu',
      'waikiki donuts 2026',
      'best donuts in hawaii',
      'donut shops near waikiki beach',
      'hawaiian donuts',
      'mochi donuts waikiki',
      'malasadas near me',
      'best malasadas oahu',
      'vegan donuts waikiki',
      'taro donuts hawaii',
      'kona coffee donuts',
      'ワイキキ ドーナツ',
      '와이키키 도넛',
      '威基基甜甜圈',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/best-donuts-waikiki`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Best Donuts in Waikiki 2026 - Top 7 Donut Shops Guide',
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
      canonical: `${siteUrl}/${locale}/blog/best-donuts-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/best-donuts-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/best-donuts-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/best-donuts-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/best-donuts-waikiki`,
        'x-default': `${siteUrl}/en/blog/best-donuts-waikiki`,
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

export default function BestDonutsWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
