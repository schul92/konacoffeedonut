import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Coffee Near Waikiki Beach: 100% Kona, Open 7 AM, 5 Minutes From the Sand',
    ja: 'ワイキキビーチ近くのコーヒー、朝7時オープン | Kona Coffee Donut',
    ko: '와이키키 비치 근처 커피, 아침 7시 오픈 | Kona Coffee Donut',
    zh: '威基基海滩附近的咖啡，早上7点开门 | Kona Coffee Donut',
    es: 'Café cerca de Waikiki Beach, abierto a las 7 AM | Kona Coffee Donut',
  };
  const descriptions: Record<string, string> = {
    en: 'The closest real-coffee stop to Waikiki Beach: 100% Kona coffee ($7), a full espresso bar from $4.75, and fresh mochi donuts at Kona Coffee Donut, 2142 Kalākaua Ave. Open 7 AM–9 PM daily, 5-minute walk from the sand.',
    ja: '本物の100%コナコーヒーとエスプレッソバー、ビーチから徒歩5分。朝7時のワイキキビーチでコーヒーが欲しいとき。Kona Coffee Donutはビーチから約400m、毎日朝7時オープン。',
    ko: '진짜 100% 코나커피와 에스프레소 바, 비치에서 도보 5분. 아침 7시 와이키키 비치에서 커피가 필요할 때. Kona Coffee Donut은 비치에서 약 400m, 매일 아침 7시 오픈.',
    zh: '真正的100%科纳咖啡和意式咖啡吧，距海滩步行5分钟。早上7点在威基基海滩想喝咖啡？Kona Coffee Donut距海滩约400米，每天早7点开门，$7就能喝到非拼配的100%科纳咖啡。',
    es: 'Café 100% Kona de verdad y barra de espresso, a 5 minutos de la arena.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'coffee near waikiki beach', 'coffee near me waikiki', 'best coffee waikiki beach', 'kona coffee near waikiki beach',
      'coffee shop open 7am waikiki', 'espresso near waikiki beach', '100% kona coffee waikiki',
      'coffee on kalakaua avenue', 'early morning coffee waikiki',
    ],
    openGraph: {
      type: 'article', locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/coffee-near-waikiki-beach`,
      siteName: 'Kona Coffee Donut', title, description,
      images: [{ url: '/images/blog/coffee-near-waikiki-beach.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/coffee-near-waikiki-beach.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/coffee-near-waikiki-beach`,
      languages: {
        'en-US': `${siteUrl}/en/blog/coffee-near-waikiki-beach`,
        'ja-JP': `${siteUrl}/ja/blog/coffee-near-waikiki-beach`,
        'ko-KR': `${siteUrl}/ko/blog/coffee-near-waikiki-beach`,
        'zh-CN': `${siteUrl}/zh/blog/coffee-near-waikiki-beach`,
        'es-ES': `${siteUrl}/es/blog/coffee-near-waikiki-beach`,
        'x-default': `${siteUrl}/en/blog/coffee-near-waikiki-beach`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
