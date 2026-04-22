import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    ja: 'ワイキキおすすめカフェ2026：コナコーヒーとモチドーナツの名店ガイド',
    en: 'Best Cafes in Waikiki 2026: Kona Coffee & Mochi Donut Guide',
    ko: '와이키키 추천 카페 2026: 코나 커피와 모찌 도넛 명소 가이드',
    zh: '2026威基基咖啡厅推荐：科纳咖啡与麻糬甜甜圈名店指南',
  };

  const descriptions: Record<string, string> = {
    ja: 'ワイキキのおすすめカフェを厳選紹介。100%コナコーヒー、モチドーナツ、マラサダ、ビンスなど、日本人旅行者に人気のハワイグルメを徹底ガイド。営業時間・場所・予算目安も。',
    en: 'Best cafes in Waikiki for 2026. Explore 100% Kona coffee, mochi donuts, malasadas, and bingsu. Complete guide with hours, locations, and budget tips.',
    ko: '2026 와이키키 추천 카페 가이드. 100% 코나 커피, 모찌 도넛, 말라사다, 빙수 등 인기 하와이 디저트를 소개합니다.',
    zh: '2026威基基最佳咖啡厅指南。100%科纳咖啡、麻糬甜甜圈、马拉萨达、冰沙等夏威夷美食完全攻略。',
  };

  const title = titles[locale] || titles.ja;
  const description = descriptions[locale] || descriptions.ja;

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
      'コナコーヒー メニュー',
      'ワイキキ ドーナツ',
      'コナコーヒー ワイキキ',
      'ワイキキ カフェ',
      'ワイキキ カフェ おすすめ',
      'ハワイ コナコーヒー',
      'モチドーナツ ハワイ',
      'ワイキキ スイーツ',
      'ハワイ カフェ巡り',
      'waikiki cafe',
      'kona coffee waikiki',
      'mochi donuts waikiki',
      'best cafes waikiki 2026',
      '와이키키 카페',
      '코나 커피 와이키키',
      '威基基咖啡',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'ja_JP',
      url: `${siteUrl}/${locale}/blog/waikiki-cafe-guide-japanese`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Waikiki Cafe Guide - Kona Coffee & Mochi Donuts',
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
      canonical: `${siteUrl}/${locale}/blog/waikiki-cafe-guide-japanese`,
      languages: {
        'ja-JP': `${siteUrl}/ja/blog/waikiki-cafe-guide-japanese`,
        'en-US': `${siteUrl}/en/blog/waikiki-cafe-guide-japanese`,
        'ko-KR': `${siteUrl}/ko/blog/waikiki-cafe-guide-japanese`,
        'zh-CN': `${siteUrl}/zh/blog/waikiki-cafe-guide-japanese`,
        'x-default': `${siteUrl}/ja/blog/waikiki-cafe-guide-japanese`,
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

export default function WaikikiCafeGuideJapaneseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
