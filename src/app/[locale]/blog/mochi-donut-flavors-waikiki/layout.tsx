import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Mochi Donut Flavors in Waikiki 2026: Visual Menu Guide',
    ja: 'ワイキキのモチドーナツフレーバーガイド | Kona Coffee Donut',
    ko: '와이키키 모치도넛 플레이버 가이드 | Kona Coffee Donut',
    zh: '威基基麻糬甜甜圈口味指南 | Kona Coffee Donut',
    es: 'Sabores de Mochi Donut en Waikiki | Kona Coffee Donut',
  };
  const descriptions: Record<string, string> = {
    en: "All the mochi donut flavors at Kona Coffee Donut, Waikiki. Ube, matcha, strawberry, taro, black sesame, and more — pon-de-ring style chewy mochi donuts on Kalākaua Ave. Open 7 AM–9 PM.",
    ja: 'カラカウア通りのコナコーヒードーナツで楽しめる全フレーバーをビジュアルで紹介。モチドーナツは、もち米粉を使ったもちもち食感が特徴の日本×ハワイのフュージョンスイーツ。',
    ko: '칼라카우아 거리 코나커피도넛의 모든 모치도넛 맛을 한눈에. 모치도넛은 찹쌀가루로 만든 일본·하와이 퓨전 도넛입니다. 코나커피도넛에서는 매일 직접 만들어 쫀득한 식감과 폰데링 형태(8개 공이 연결된 원형)의 비주얼을 자랑합니다.',
    zh: '位于卡拉考阿大道的 Kona Coffee Donut 全部口味一览。麻糬甜甜圈用糯米粉制作，外脆内Q，是日本与夏威夷融合的特色甜点。',
    es: 'Guía visual del menú en Kalākaua Avenue.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title,
    description,
    keywords: [
      'mochi donut flavors',
      'mochi donuts waikiki',
      'mochi donut menu',
      'pon de ring waikiki',
      'best mochi donuts honolulu',
      'mochi donut near me',
      'ube mochi donut',
      'matcha mochi donut',
      'モチドーナツ ワイキキ',
      '모치 도넛 와이키키',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/mochi-donut-flavors-waikiki`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [{ url: '/images/blog/mochi-donut-flavors-waikiki.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/mochi-donut-flavors-waikiki.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/mochi-donut-flavors-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/mochi-donut-flavors-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/mochi-donut-flavors-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/mochi-donut-flavors-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/mochi-donut-flavors-waikiki`,
        'x-default': `${siteUrl}/en/blog/mochi-donut-flavors-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
