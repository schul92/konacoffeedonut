import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Best Coffee Shops in Waikiki (2026): Where to Get Great Coffee',
    description: 'Looking for the best coffee shops in Waikiki? Our 2026 guide ranks 6 top cafes, explains why 100% Kona matters, and shows where to get real Kona near Waikiki Beach.',
  },
  ja: {
    title: 'ワイキキで一番のコーヒーショップ（2026）｜美味しいコーヒーを飲める場所',
    description: 'ワイキキで最高のコーヒーショップをお探しですか？2026年版ガイドで人気カフェ6軒をランキング。100%コナが重要な理由と、ワイキキビーチ近くで本物のコナを飲める場所をご紹介。',
  },
  ko: {
    title: '와이키키 최고의 커피숍 (2026)｜맛있는 커피 마시는 곳',
    description: '와이키키 최고의 커피숍을 찾고 계신가요? 2026 가이드에서 인기 카페 6곳을 순위로 정리하고, 100% 코나가 중요한 이유와 와이키키 해변 근처에서 진짜 코나를 마실 수 있는 곳을 소개합니다.',
  },
  zh: {
    title: '威基基最好的咖啡店（2026）：哪里能喝到好咖啡',
    description: '在威基基寻找最好的咖啡店？我们的2026指南为6家热门咖啡馆排名，解释为何100%科纳很重要，并告诉你在威基基海滩附近哪里能喝到正宗科纳。',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const t = meta[locale as keyof typeof meta] || meta.en;

  const localeMap: Record<string, string> = {
    en: 'en_US',
    ja: 'ja_JP',
    ko: 'ko_KR',
    zh: 'zh_CN',
  };

  return {
    title: t.title,
    description: t.description,
    keywords: [
      'best coffee shops waikiki', 'best coffee waikiki', 'coffee shops near me waikiki',
      'best cafe waikiki', 'where to get coffee in waikiki', 'coffee shops in waikiki',
      'best coffee near waikiki beach', 'waikiki coffee', 'coffee waikiki',
      '100% kona coffee waikiki', 'kona coffee waikiki', 'where to get kona coffee waikiki',
      'best coffee oahu', 'cafe near waikiki beach', 'kona coffee and donuts',
      'ワイキキ コーヒー', 'ワイキキ カフェ', '와이키키 커피', '와이키키 카페', '威基基咖啡',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/best-coffee-shops-waikiki`,
      siteName: 'Kona Coffee Donut?',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/best-coffee-shops-waikiki.jpeg',
          width: 1200,
          height: 630,
          alt: 'Best Coffee Shops in Waikiki - Where to Get Great Coffee Near Waikiki Beach',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/best-coffee-shops-waikiki.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/best-coffee-shops-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/best-coffee-shops-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/best-coffee-shops-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/best-coffee-shops-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/best-coffee-shops-waikiki`,
        'x-default': `${siteUrl}/en/blog/best-coffee-shops-waikiki`,
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

export default function BestCoffeeShopsWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
