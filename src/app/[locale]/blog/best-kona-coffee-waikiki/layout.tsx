import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Best Kona Coffee in Waikiki (2026): Where to Drink Real 100% Kona',
    description: 'Looking for the best Kona coffee in Waikiki? Learn what real 100% Kona means, how to spot it, and where to drink it fresh near Waikiki Beach — paired with donuts.',
  },
  ja: {
    title: 'ワイキキで一番のコナコーヒー（2026）｜本物の100%コナが飲める場所',
    description: 'ワイキキで美味しいコナコーヒーをお探しですか？本物の100%コナの意味、見分け方、そしてワイキキビーチ近くで淹れたてを飲める場所をご紹介。ドーナツとの組み合わせも。',
  },
  ko: {
    title: '와이키키 최고의 코나 커피 (2026)｜진짜 100% 코나 마시는 곳',
    description: '와이키키에서 맛있는 코나 커피를 찾고 계신가요? 진짜 100% 코나의 의미, 구별법, 그리고 와이키키 해변 근처에서 갓 내린 코나를 마실 수 있는 곳을 도넛과 함께 소개합니다.',
  },
  zh: {
    title: '威基基最好的科纳咖啡（2026）：哪里能喝到正宗100%科纳',
    description: '在威基基寻找最好的科纳咖啡？了解正宗100%科纳的含义、辨别方法，以及在威基基海滩附近喝到现冲科纳的地方——还能搭配甜甜圈。',
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
      'best kona coffee waikiki', 'best coffee waikiki', 'where to drink kona coffee',
      '100% kona coffee waikiki', 'kona coffee waikiki', 'kona coffee near waikiki beach',
      'real kona coffee', 'kona coffee honolulu', '100% kona', 'kona blend',
      'best kona coffee', 'kona coffee hawaii', 'coffee near waikiki beach',
      'where to try kona coffee', 'kona coffee and donuts',
      'コナコーヒー', '100%コナ', 'ワイキキ コーヒー', '코나 커피', '科纳咖啡',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/best-kona-coffee-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/best-kona-coffee-waikiki.jpeg',
          width: 1200,
          height: 630,
          alt: 'Best Kona Coffee in Waikiki - Where to Drink Real 100% Kona',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/best-kona-coffee-waikiki.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/best-kona-coffee-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/best-kona-coffee-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/best-kona-coffee-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/best-kona-coffee-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/best-kona-coffee-waikiki`,
        'x-default': `${siteUrl}/en/blog/best-kona-coffee-waikiki`,
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

export default function BestKonaCoffeeWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
