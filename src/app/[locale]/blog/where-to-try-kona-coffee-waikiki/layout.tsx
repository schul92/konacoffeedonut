import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Where to Try Real Kona Coffee in Waikiki 2026',
    ja: 'ワイキキで本物のコナコーヒーを飲める場所 | Kona Coffee Donut',
    ko: '와이키키에서 정통 코나커피 마시는 곳 | Kona Coffee Donut',
    zh: '威基基哪里能喝到真正的科纳咖啡 | Kona Coffee Donut',
    es: 'Dónde Probar Café Kona Real en Waikiki | Kona Coffee Donut',
  };
  const descriptions: Record<string, string> = {
    en: "Skip the chains — find Kona coffee in Waikiki at Kona Coffee Donut on Kalākaua Avenue. Pour-over, espresso, lattes, and beans to take home. Open 7 AM–9 PM.",
    ja: '大手チェーンを超えて — カラカウア通りでホノルルコーヒーを。ハワイ島コナ地区で育った世界的に有名なコナコーヒー。観光地で売られている「コナブレンド」の多くは実際には10%しかコナ豆を含まないこともあります。',
    ko: '대형 체인을 넘어 — 칼라카우아 거리에서 호놀룰루 커피를. 하와이 빅아일랜드 코나 지역에서 자란 세계적인 코나커피. 관광지의 "코나 블렌드"는 실제로는 10%만 진짜 코나일 수 있습니다.',
    zh: '超越大型连锁 — 在卡拉考阿大道找到檀香山咖啡。世界闻名的科纳咖啡产自夏威夷大岛。许多旅游地的"科纳混合咖啡"实际只含10%科纳豆。',
    es: 'Más allá de las cadenas — Honolulu Coffee en Kalākaua. El famoso café Kona se cultiva en la Isla Grande de Hawái.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title,
    description,
    keywords: [
      'kona coffee waikiki',
      'where to get kona coffee',
      'best kona coffee in waikiki',
      'real kona coffee',
      'honolulu coffee waikiki',
      'kona coffee shop near me',
      'authentic hawaiian coffee',
      'pour over kona coffee',
      'kona coffee beans waikiki',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/where-to-try-kona-coffee-waikiki`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [{ url: '/images/blog/where-to-try-kona-coffee-waikiki.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/where-to-try-kona-coffee-waikiki.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/where-to-try-kona-coffee-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/where-to-try-kona-coffee-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/where-to-try-kona-coffee-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/where-to-try-kona-coffee-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/where-to-try-kona-coffee-waikiki`,
        'x-default': `${siteUrl}/en/blog/where-to-try-kona-coffee-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
