import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Bingsu Origin & History: Where Korean Shaved Ice Came From (2026)',
    description: 'Where did bingsu come from? Bingsu (빙수) originated in Korea — from Joseon-era royal ice houses to patbingsu and today\'s milk-snow dessert. Full history + where to try authentic bingsu in Waikiki.',
  },
  ja: {
    title: 'ビンスの起源と歴史：韓国かき氷はどこで生まれた？（2026年版）',
    description: 'ビンス(빙수)はどこで生まれた？答えは韓国。朝鮮王朝の氷庫からパッビンス、そして現代のミルク雪氷まで、ビンスの起源と歴史を完全解説。ワイキキで本場のビンスが味わえる場所もご案内します。',
  },
  ko: {
    title: '빙수의 기원과 역사: 한국 빙수는 어디서 시작됐나 (2026)',
    description: '빙수는 어디서 왔을까? 빙수(빙수)는 한국에서 시작됐습니다. 조선시대 빙고부터 팥빙수, 오늘날의 우유 눈꽃 빙수까지 빙수의 기원과 역사를 총정리하고, 와이키키에서 정통 빙수를 맛볼 수 있는 곳까지 알려드립니다.',
  },
  zh: {
    title: '雪冰的起源与历史：韩式刨冰从何而来（2026）',
    description: '雪冰从哪里来？雪冰(빙수)起源于韩国——从朝鲜王朝的皇家冰库到红豆刨冰，再到今天的牛奶雪花甜品。完整历史解析，以及在威基基哪里能吃到正宗雪冰。',
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
      'bingsu origin', 'bingsu history', 'bingsu meaning', 'bingsu origin country',
      'where did bingsu come from', 'who invented bingsu', 'patbingsu history',
      'bingsu', 'patbingsu', 'korean shaved ice', 'korean dessert history',
      'joseon ice house', 'binggo', 'bingsu hawaii', 'bingsu waikiki',
      '빙수 기원', '빙수 역사', '팥빙수 유래', 'ビンスの起源', 'ビンスの歴史', '雪冰起源', '雪冰历史',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/bingsu-origin-history`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/bingsu-origin-history.jpeg',
          width: 1200,
          height: 630,
          alt: 'Bingsu Origin and History - Where Korean Shaved Ice Came From',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/bingsu-origin-history.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/bingsu-origin-history`,
      languages: {
        'en-US': `${siteUrl}/en/blog/bingsu-origin-history`,
        'ja-JP': `${siteUrl}/ja/blog/bingsu-origin-history`,
        'ko-KR': `${siteUrl}/ko/blog/bingsu-origin-history`,
        'zh-CN': `${siteUrl}/zh/blog/bingsu-origin-history`,
        'x-default': `${siteUrl}/en/blog/bingsu-origin-history`,
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

export default function BingsuOriginHistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
