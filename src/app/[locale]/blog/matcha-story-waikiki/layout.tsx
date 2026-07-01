import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'The Story of Matcha (2026): From Japanese Tea Ceremony to Your Waikiki Cup',
    description: 'What is matcha? Discover matcha\'s history from Zen temples and the Japanese tea ceremony, ceremonial vs culinary grade, its benefits — and where to drink a freshly whisked cup in Waikiki.',
  },
  ja: {
    title: '抹茶の物語（2026）｜日本の茶道からワイキキの一杯まで',
    description: '抹茶とは？禅寺と日本の茶道から始まる抹茶の歴史、茶道用と製菓用の違い、その効能、そしてワイキキで点てたての一杯を飲める場所をご紹介します。',
  },
  ko: {
    title: '말차 이야기 (2026)｜일본 다도에서 와이키키의 한 잔까지',
    description: '말차란? 선 사찰과 일본 다도에서 시작된 말차의 역사, 의식용과 조리용의 차이, 그 효능, 그리고 와이키키에서 갓 저은 한 잔을 마실 수 있는 곳을 소개합니다.',
  },
  zh: {
    title: '抹茶的故事（2026）：从日本茶道到你在威基基的那一杯',
    description: '什么是抹茶？了解抹茶从禅寺与日本茶道而来的历史、仪式级与烘焙级的区别、它的益处，以及在威基基喝到一杯现搅抹茶的地方。',
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
      'what is matcha', 'matcha history', 'matcha benefits', 'is matcha good for you',
      'matcha tea ceremony', 'matcha waikiki', 'matcha latte waikiki', 'ceremonial grade matcha',
      'culinary grade matcha', 'does matcha have caffeine', 'is matcha healthier than coffee',
      'matcha vs coffee', 'matcha green tea', 'chanoyu', 'tencha', 'L-theanine matcha',
      'real matcha waikiki', 'where to get matcha waikiki', 'matcha and donuts',
      '抹茶', '抹茶とは', '茶道', 'ワイキキ 抹茶', '말차', '녹차', '科纳咖啡',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/matcha-story-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/matcha-story-waikiki.jpeg',
          width: 1200,
          height: 630,
          alt: 'The Story of Matcha - From Japanese Tea Ceremony to Your Waikiki Cup',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/matcha-story-waikiki.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/matcha-story-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/matcha-story-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/matcha-story-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/matcha-story-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/matcha-story-waikiki`,
        'x-default': `${siteUrl}/en/blog/matcha-story-waikiki`,
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

export default function MatchaStoryWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
