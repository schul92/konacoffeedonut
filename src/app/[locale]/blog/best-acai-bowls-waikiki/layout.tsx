import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Best Acai Bowls in Waikiki 2026: Where to Find Fresh Hawaiian Acai',
    ja: 'ワイキキで美味しいアサイーボウル | Kona Coffee Donut',
    ko: '와이키키 베스트 아사이볼 | Kona Coffee Donut',
    zh: '威基基最佳巴西莓碗 | Kona Coffee Donut',
    es: 'Mejores Acai Bowls en Waikiki | Kona Coffee Donut',
  };
  const descriptions: Record<string, string> = {
    en: "The best acai bowls in Waikiki — fresh acai blended thick, topped with banana, granola, coconut, honey. Walking distance from Waikiki Beach. Open 7 AM–9 PM.",
    ja: '新鮮ブレンドの濃厚アサイーとトッピング。ワイキキにアサイーボウルは多いですが、品質はピンキリ。本物の濃厚アサイーボウルの見分け方とおすすめスポットをご紹介。',
    ko: '신선하게 블렌딩한 진한 아사이. 와이키키 아사이볼은 많지만 품질은 천차만별. 진짜 진한 아사이볼 알아보는 법과 추천 매장.',
    zh: '新鲜调制的浓郁巴西莓。威基基的巴西莓碗很多，但品质参差。本指南教您辨别真正的浓郁巴西莓碗。',
    es: 'Acai mezclado fresco, espeso y con toppings. Los acai bowls en Waikiki varían mucho en calidad. Esta guía te ayuda a encontrar los reales.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'best acai bowl waikiki', 'acai bowl waikiki', 'acai bowl honolulu',
      'acai near me waikiki', 'hawaiian acai bowl', 'fresh acai waikiki',
      'best acai hawaii', 'healthy breakfast waikiki',
    ],
    openGraph: {
      type: 'article', locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/best-acai-bowls-waikiki`,
      siteName: 'Kona Coffee Donut', title, description,
      images: [{ url: '/images/blog/best-desserts-waikiki.png', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/best-desserts-waikiki.png'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/best-acai-bowls-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/best-acai-bowls-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/best-acai-bowls-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/best-acai-bowls-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/best-acai-bowls-waikiki`,
        'x-default': `${siteUrl}/en/blog/best-acai-bowls-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
