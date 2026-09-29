import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Best Smoothies in Waikiki 2026: 10 Hawaiian Flavors at Mochi Land',
    ja: 'ワイキキで美味しいスムージー10選 | Kona Coffee Donut',
    ko: '와이키키 베스트 스무디 10선 | Kona Coffee Donut',
    zh: '威基基最佳奶昔10选 | Kona Coffee Donut',
    es: 'Mejores Smoothies en Waikiki | Kona Coffee Donut',
  };
  const descriptions: Record<string, string> = {
    en: "Looking for smoothies near Waikiki Beach? Mochi Land at Kona Coffee Donut serves 10 Hawaiian smoothies — pina colada, mango, ube, taro, brown sugar, lychee — all $10.95. Open 7 AM–9 PM.",
    ja: 'Mochi Landの全10フレーバー、すべて$10.95。Mochi Land（コナコーヒードーナツ内）では、本物のフルーツと本格的なアジアン・ハワイアンの味を使い、その場でブレンド。',
    ko: 'Mochi Land 전 메뉴 균일가 $10.95. Mochi Land(코나커피도넛 내)는 시럽 베이스가 아닌 진짜 과일과 정통 아시안·하와이안 베이스로 주문 즉시 블렌딩.',
    zh: 'Mochi Land 全部口味均价 $10.95。Mochi Land（位于 Kona Coffee Donut 内）使用真实水果和正宗亚洲·夏威夷风味，现点现打。',
    es: '10 sabores Mochi Land, todos a $10.95. Mochi Land en Kona Coffee Donut prepara cada smoothie al momento con fruta real y sabores asiático-hawaianos.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title,
    description,
    keywords: [
      'best smoothies waikiki',
      'smoothies in waikiki',
      'hawaiian smoothies',
      'smoothie near me waikiki',
      'pina colada smoothie waikiki',
      'mango smoothie hawaii',
      'ube smoothie',
      'taro smoothie',
      'boba smoothie waikiki',
      'mochi land smoothies',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/best-smoothies-waikiki`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [{ url: '/images/blog/best-smoothies-waikiki.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/best-smoothies-waikiki.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/best-smoothies-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/best-smoothies-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/best-smoothies-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/best-smoothies-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/best-smoothies-waikiki`,
        'x-default': `${siteUrl}/en/blog/best-smoothies-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
