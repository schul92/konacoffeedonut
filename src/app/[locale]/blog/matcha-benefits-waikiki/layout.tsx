import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Matcha Benefits & Caffeine (2026): Is Matcha Good for You?',
    description: 'Is matcha good for you? Matcha benefits explained — antioxidants (EGCG), L-theanine for calm focus, metabolism & skin, plus how much caffeine matcha has vs coffee. Taste real matcha in Waikiki.',
  },
  ja: {
    title: '抹茶の効能とカフェイン（2026）｜抹茶は体にいい？',
    description: '抹茶は体にいい？抹茶の効能を解説——抗酸化物質（EGCG）、集中を支えるL-テアニン、代謝や肌、そしてコーヒーと比べた抹茶のカフェイン量。ワイキキで本物の抹茶を。',
  },
  ko: {
    title: '말차의 효능과 카페인 (2026)｜말차는 몸에 좋을까?',
    description: '말차는 몸에 좋을까? 말차 효능 정리 — 항산화 물질(EGCG), 집중을 돕는 L-테아닌, 신진대사와 피부, 그리고 커피와 비교한 말차 카페인. 와이키키에서 진짜 말차를.',
  },
  zh: {
    title: '抹茶的功效与咖啡因（2026）：抹茶对身体好吗？',
    description: '抹茶对身体好吗？抹茶功效全解析——抗氧化物质（EGCG）、助你专注的L-茶氨酸、新陈代谢与肌肤，以及抹茶与咖啡的咖啡因对比。在威基基品尝正宗抹茶。',
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
      'matcha benefits', 'is matcha good for you', 'does matcha have caffeine',
      'is matcha healthy', 'matcha benefits for skin', 'matcha caffeine',
      'is matcha healthier than coffee', 'matcha vs coffee', 'matcha health benefits',
      'l-theanine', 'egcg matcha', 'matcha antioxidants', 'how much caffeine in matcha',
      'matcha waikiki', 'matcha latte waikiki', 'hojicha',
      '抹茶 効能', '抹茶 カフェイン', '말차 효능', '말차 카페인', '抹茶 功效', '抹茶 咖啡因',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/matcha-benefits-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/matcha-benefits-waikiki.jpeg',
          width: 1200,
          height: 630,
          alt: 'Matcha Benefits & Caffeine - Is Matcha Good for You?',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/matcha-benefits-waikiki.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/matcha-benefits-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/matcha-benefits-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/matcha-benefits-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/matcha-benefits-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/matcha-benefits-waikiki`,
        'x-default': `${siteUrl}/en/blog/matcha-benefits-waikiki`,
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

export default function MatchaBenefitsWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
