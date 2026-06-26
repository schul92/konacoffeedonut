import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Honolulu Coffee in Waikiki (2026): Where to Drink the Same 100% Kona',
    description: 'Love Honolulu Coffee\'s Kona? See where to drink the very same 100% Kona beans in Waikiki — freshly brewed at Kona Coffee Donut?, open late, paired with mochi donuts.',
  },
  ja: {
    title: 'ワイキキのホノルルコーヒー（2026）｜同じ100%コナを飲める場所',
    description: 'ホノルルコーヒーのコナがお好きですか？ワイキキでまさに同じ100%コナ豆を飲める場所をご紹介。Kona Coffee Donut? で淹れたて、夜遅くまで営業、モチドーナツとの組み合わせも。',
  },
  ko: {
    title: '와이키키의 호놀룰루 커피 (2026)｜똑같은 100% 코나 마시는 곳',
    description: '호놀룰루 커피의 코나를 좋아하세요? 와이키키에서 바로 그 똑같은 100% 코나 원두를 마실 수 있는 곳을 소개합니다 — Kona Coffee Donut? 에서 갓 내려, 늦게까지, 모찌 도넛과 함께.',
  },
  zh: {
    title: '威基基的檀香山咖啡（2026）：在哪喝到同样的100%科纳',
    description: '喜爱檀香山咖啡的科纳？看看在威基基哪里能喝到正是同样的100%科纳豆——Kona Coffee Donut? 现冲现做、营业到很晚，还能搭配麻糬甜甜圈。',
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
      'honolulu coffee', 'honolulu coffee waikiki', 'honolulu coffee kona',
      'where to drink honolulu coffee waikiki', '100% kona coffee waikiki',
      'honolulu coffee 100% kona', 'honolulu coffee company', 'kona coffee waikiki',
      'kona coffee near waikiki beach', '100% kona', 'kona blend', 'real kona coffee',
      'kona coffee honolulu', 'where to drink kona coffee', 'kona coffee and donuts',
      'ホノルルコーヒー', '100%コナ', 'ワイキキ コーヒー', '호놀룰루 커피', '檀香山咖啡',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/honolulu-coffee-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/honolulu-coffee-waikiki.jpeg',
          width: 1200,
          height: 630,
          alt: 'Honolulu Coffee in Waikiki - Where to Drink the Same 100% Kona Beans',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/honolulu-coffee-waikiki.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/honolulu-coffee-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/honolulu-coffee-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/honolulu-coffee-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/honolulu-coffee-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/honolulu-coffee-waikiki`,
        'x-default': `${siteUrl}/en/blog/honolulu-coffee-waikiki`,
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

export default function HonoluluCoffeeWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
