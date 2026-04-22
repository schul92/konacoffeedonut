import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    zh: '夏威夷科纳咖啡完全指南 | 风味介绍与冲泡方法 | Kona Coffee Donut',
    en: 'Hawaii Kona Coffee Complete Guide: Flavor, Brewing & Tasting | Kona Coffee Donut',
    ja: 'ハワイ コナコーヒー完全ガイド：風味・淹れ方・味わい方 | Kona Coffee Donut',
    ko: '하와이 코나 커피 완벽 가이드: 풍미, 브루잉 & 테이스팅 | Kona Coffee Donut',
  };

  const descriptions: Record<string, string> = {
    zh: '夏威夷科纳咖啡风味详细介绍：黑糖、巧克力、坚果的丰富层次。科纳适合冲美式吗？完全适合！了解科纳咖啡的产地、种植、烘焙、手冲与法压壶冲泡方法，以及在威基基哪里能喝到正宗100%科纳咖啡。',
    en: 'Complete guide to Hawaii Kona coffee flavor profile, brewing methods, and tasting notes. Learn why Kona is perfect for Americano, pour-over, and French press. Try authentic 100% Kona coffee in Waikiki.',
    ja: 'ハワイ コナコーヒーの風味プロファイル、淹れ方、テイスティングノートの完全ガイド。コナがアメリカーノ、ハンドドリップ、フレンチプレスに最適な理由を解説。ワイキキで本物の100%コナコーヒーを。',
    ko: '하와이 코나 커피 풍미 프로필, 브루잉 방법, 테이스팅 노트 완벽 가이드. 코나가 아메리카노, 핸드드립, 프렌치프레스에 완벽한 이유. 와이키키에서 정통 100% 코나 커피를 맛보세요.',
  };

  const title = titles[locale] || titles.zh;
  const description = descriptions[locale] || descriptions.zh;

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
      '夏威夷科纳咖啡',
      '夏威夷科纳咖啡风味',
      '夏威夷科纳咖啡介绍',
      '夏威夷科纳适合冲美式吗',
      '夏威夷咖啡',
      '科纳咖啡',
      '科纳咖啡风味',
      '科纳咖啡冲泡',
      'kona coffee flavor',
      'kona coffee americano',
      'kona coffee guide',
      'hawaii kona coffee',
      'コナコーヒー 風味',
      'コナコーヒー アメリカーノ',
      '코나 커피 풍미',
      '코나 커피 아메리카노',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'zh_CN',
      url: `${siteUrl}/${locale}/blog/kona-coffee-chinese-guide`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: '夏威夷科纳咖啡完全指南 - Hawaii Kona Coffee Complete Guide',
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
      canonical: `${siteUrl}/${locale}/blog/kona-coffee-chinese-guide`,
      languages: {
        'zh-CN': `${siteUrl}/zh/blog/kona-coffee-chinese-guide`,
        'en-US': `${siteUrl}/en/blog/kona-coffee-chinese-guide`,
        'ja-JP': `${siteUrl}/ja/blog/kona-coffee-chinese-guide`,
        'ko-KR': `${siteUrl}/ko/blog/kona-coffee-chinese-guide`,
        'x-default': `${siteUrl}/zh/blog/kona-coffee-chinese-guide`,
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

export default function KonaCoffeeChineseGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
