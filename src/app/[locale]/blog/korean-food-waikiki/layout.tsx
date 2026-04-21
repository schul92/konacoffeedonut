import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'Korean Food in Waikiki 2026: Complete Guide to K-Food in Hawaii',
    ja: 'ワイキキの韓国料理 2026：ハワイで楽しむK-FOODガイド',
    ko: '와이키키 한국 음식 2026: 하와이 K-푸드 완벽 가이드',
    zh: '威基基韩国美食2026：夏威夷K-Food完全指南',
  };

  const descriptions: Record<string, string> = {
    en: 'Discover the best Korean food in Waikiki for 2026. Korean BBQ, corn dogs, bingsu, fried chicken & more. 10 must-try K-food experiences near Waikiki Beach with insider tips.',
    ja: 'ワイキキで楽しめる韓国料理ガイド2026年版。韓国BBQ、コーンドッグ、ビンス、チキンなど、ワイキキビーチ近くのK-FOOD体験10選。日本でも大人気のK-FOODをハワイで！',
    ko: '2026년 와이키키 한국 음식 완벽 가이드. 한국식 바비큐, 핫도그, 빙수, 치킨 등 와이키키 비치 근처 K-푸드 체험 10선. 현지인 추천 맛집 정보.',
    zh: '2026年威基基韩国美食完全指南。韩国烤肉、玉米热狗、刨冰、炸鸡等，威基基海滩附近10大必尝K-Food体验，附内行人建议。',
  };

  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;

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
      'korean food waikiki',
      'korean restaurant waikiki',
      'korean bbq waikiki',
      'korean food honolulu',
      'korean corn dog waikiki',
      'bingsu waikiki',
      'korean fried chicken hawaii',
      'kfood hawaii',
      'korean food near waikiki beach',
      'best korean food oahu',
      'bibimbap waikiki',
      'korean street food hawaii',
      'korean dessert waikiki',
      'ワイキキ 韓国料理',
      '와이키키 한국 음식',
      '威基基韩国料理',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/korean-food-waikiki`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Korean Food in Waikiki 2026 - Complete K-Food Guide',
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
      canonical: `${siteUrl}/${locale}/blog/korean-food-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/korean-food-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/korean-food-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/korean-food-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/korean-food-waikiki`,
        'x-default': `${siteUrl}/en/blog/korean-food-waikiki`,
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

export default function KoreanFoodWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
