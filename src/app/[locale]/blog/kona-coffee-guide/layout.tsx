import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'Kona Coffee vs Regular Coffee: What Makes Hawaii\'s Famous Coffee Worth It',
    ja: 'コナコーヒー vs 普通のコーヒー：ハワイの名産コーヒーの価値とは',
    ko: '코나 커피 vs 일반 커피: 하와이 명품 커피의 가치',
    zh: '科纳咖啡 vs 普通咖啡：夏威夷名咖啡为何值得一试',
  };

  const descriptions: Record<string, string> = {
    en: 'Kona coffee vs regular coffee — what\'s the difference? Learn why 100% Kona coffee from Hawaii\'s volcanic slopes costs more, how to spot fakes, brewing tips, and where to try real Kona in Waikiki.',
    ja: 'コナコーヒーと普通のコーヒーの違いを徹底解説。ハワイ火山の斜面で栽培される100%コナコーヒーの価値、偽物の見分け方、淹れ方、ワイキキで本物を味わえる場所をご紹介。',
    ko: '코나 커피와 일반 커피의 차이점을 알아보세요. 하와이 화산 경사면에서 재배되는 100% 코나 커피의 가치, 가짜 구별법, 추출 팁, 와이키키에서 진짜 코나를 맛볼 수 있는 곳.',
    zh: '科纳咖啡与普通咖啡有什么区别？了解夏威夷火山斜坡上100%科纳咖啡的价值、如何辨别假货、冲泡技巧以及在威基基品尝正宗科纳咖啡的地方。',
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
      'kona coffee vs regular coffee',
      'what is kona coffee',
      'kona coffee price',
      'kona coffee taste',
      'kona coffee hawaii',
      '100% kona coffee',
      'kona coffee blend vs pure',
      'why is kona coffee expensive',
      'best kona coffee',
      'fake kona coffee',
      'how to brew kona coffee',
      'kona coffee waikiki',
      'コナコーヒー',
      'コナコーヒー 違い',
      '코나 커피',
      '코나 커피 차이',
      '科纳咖啡',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/kona-coffee-guide`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Kona Coffee vs Regular Coffee - Complete Guide',
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
      canonical: `${siteUrl}/${locale}/blog/kona-coffee-guide`,
      languages: {
        'en-US': `${siteUrl}/en/blog/kona-coffee-guide`,
        'ja-JP': `${siteUrl}/ja/blog/kona-coffee-guide`,
        'ko-KR': `${siteUrl}/ko/blog/kona-coffee-guide`,
        'zh-CN': `${siteUrl}/zh/blog/kona-coffee-guide`,
        'x-default': `${siteUrl}/en/blog/kona-coffee-guide`,
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

export default function KonaCoffeeGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
