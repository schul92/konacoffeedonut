import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    ko: '와이키키 맛집 완벽 가이드 2026: 코나 커피부터 말라사다까지 | Kona Coffee Donut',
    en: 'Waikiki Food Guide 2026 for Korean Tourists: Kona Coffee, Malasada & More',
    ja: 'ワイキキグルメガイド2026：コナコーヒーからマラサダまで完全攻略',
    zh: '威基基美食指南2026：从科纳咖啡到马拉萨达完全攻略',
  };

  const descriptions: Record<string, string> = {
    ko: '2026년 와이키키 맛집 추천! 하와이 코나 커피, 말라사다, 모찌 도넛, 빙수 등 꼭 먹어야 할 음식 총정리. 가격, 위치, 팁 문화까지 한국 관광객을 위한 완벽 가이드.',
    en: 'Complete Waikiki food guide for Korean tourists. Best Kona coffee, malasada, mochi donuts, bingsu & more. Prices, locations, and tips for 2026.',
    ja: '2026年ワイキキグルメ完全ガイド。コナコーヒー、マラサダ、モチドーナツ、ビンスなど必食グルメを網羅。韓国人観光客向けの価格・場所・チップ情報も。',
    zh: '2026年威基基美食完全指南。科纳咖啡、马拉萨达、麻糬甜甜圈、刨冰等必吃美食总汇。价格、位置、小费文化等韩国游客实用信息。',
  };

  const title = titles[locale] || titles.ko;
  const description = descriptions[locale] || descriptions.ko;

  const localeMap: Record<string, string> = {
    en: 'en_US',
    ja: 'ja_JP',
    ko: 'ko_KR',
    zh: 'zh_CN',
  };

  return {
    title,
    description,
    keywords: [
      '와이키키 맛집',
      '코나커피',
      '코나 커피',
      '말라사다',
      '하와이 코나 커피',
      '코나 카페',
      '하와이 커피',
      '하와이코나커피',
      '하와이 원두',
      'waikiki food guide korean',
      'kona coffee waikiki',
      'malasada hawaii',
      'mochi donut waikiki',
      'bingsu waikiki',
      '와이키키 카페',
      '하와이 맛집 추천',
      '와이키키 먹거리',
      '하와이 여행 음식',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'ko_KR',
      url: `${siteUrl}/${locale}/blog/waikiki-food-guide-korean`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: '와이키키 맛집 가이드 2026 - Waikiki Food Guide for Korean Tourists',
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
      canonical: `${siteUrl}/${locale}/blog/waikiki-food-guide-korean`,
      languages: {
        'ko-KR': `${siteUrl}/ko/blog/waikiki-food-guide-korean`,
        'en-US': `${siteUrl}/en/blog/waikiki-food-guide-korean`,
        'ja-JP': `${siteUrl}/ja/blog/waikiki-food-guide-korean`,
        'zh-CN': `${siteUrl}/zh/blog/waikiki-food-guide-korean`,
        'x-default': `${siteUrl}/ko/blog/waikiki-food-guide-korean`,
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

export default function WaikikiFoodGuideKoreanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
