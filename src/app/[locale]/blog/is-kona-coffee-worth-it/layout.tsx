import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Is Kona Coffee Worth It? 100% Kona vs. Kona Blend (Honest 2026 Guide)',
    description: 'Is Kona coffee worth the price? Learn the real difference between 100% Kona and a "Kona Blend" (as little as 10% Kona) — and where to taste real Kona coffee in Waikiki.',
  },
  ja: {
    title: 'コナコーヒーは価値ある？100%コナ vs コナブレンド徹底比較（2026年版）',
    description: 'コナコーヒーは値段に見合う価値があるのか？「100%コナ」と、わずか10%しかコナを含まない「コナブレンド」の本当の違いを解説。ワイキキで本物のコナコーヒーが味わえる場所もご案内します。',
  },
  ko: {
    title: '코나 커피, 비싼 값을 할까? 100% 코나 vs 코나 블렌드 (2026 정직 가이드)',
    description: '코나 커피는 가격만큼의 가치가 있을까? 100% 코나와, 코나가 10%밖에 안 들어간 "코나 블렌드"의 진짜 차이를 알려드립니다. 와이키키에서 진짜 코나 커피를 맛볼 수 있는 곳까지.',
  },
  zh: {
    title: '科纳咖啡值得买吗？100% 科纳 vs 科纳混合（2026诚实指南）',
    description: '科纳咖啡值不值这个价？了解 100% 科纳与"科纳混合"（科纳含量低至10%）的真正区别，以及在威基基哪里能喝到正宗科纳咖啡。',
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
      'is kona coffee worth it', '100% kona coffee', 'kona blend',
      'real kona coffee', 'kona coffee waikiki', 'kona coffee price',
      'why is kona coffee expensive', 'kona coffee vs blend',
      'best kona coffee', 'hawaiian coffee', 'kona coffee hawaii',
      'kona coffee honolulu', 'kona coffee taste', 'single origin coffee',
      'kona coffee near me',
      'コナコーヒー', '100%コナ', '코나 커피', '코나 블렌드', '科纳咖啡',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/is-kona-coffee-worth-it`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/is-kona-coffee-worth-it.jpeg',
          width: 1200,
          height: 630,
          alt: 'Is Kona Coffee Worth It - 100% Kona vs Kona Blend Guide',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/is-kona-coffee-worth-it.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/is-kona-coffee-worth-it`,
      languages: {
        'en-US': `${siteUrl}/en/blog/is-kona-coffee-worth-it`,
        'ja-JP': `${siteUrl}/ja/blog/is-kona-coffee-worth-it`,
        'ko-KR': `${siteUrl}/ko/blog/is-kona-coffee-worth-it`,
        'zh-CN': `${siteUrl}/zh/blog/is-kona-coffee-worth-it`,
        'x-default': `${siteUrl}/en/blog/is-kona-coffee-worth-it`,
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

export default function IsKonaCoffeeWorthItLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
