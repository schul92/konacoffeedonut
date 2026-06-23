import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Best Malasadas in Waikiki (2026): Fresh Portuguese-Hawaiian Donuts',
    description: 'Where to get the best malasadas in Waikiki. What makes a great malasada (fresh-fried, light, sugar-rolled), flavors to try & fresh malasadas + 100% Kona coffee ~5 min from Waikiki Beach.',
  },
  ja: {
    title: 'ワイキキで美味しいマラサダ2026｜揚げたてポルトガル系ハワイドーナツ',
    description: 'ワイキキで美味しいマラサダが食べられる場所。最高のマラサダの条件（揚げたて・軽い食感・砂糖がけ）、人気のフレーバー、そしてワイキキビーチから約5分で味わえる揚げたてマラサダ＋100%コナコーヒーをご紹介します。',
  },
  ko: {
    title: '와이키키 말라사다 맛집 2026｜갓 튀긴 포르투갈식 하와이 도넛',
    description: '와이키키에서 말라사다를 맛볼 수 있는 곳. 최고의 말라사다 조건(갓 튀긴 따뜻함·가벼운 식감·설탕 코팅), 꼭 먹어봐야 할 종류, 그리고 와이키키 비치에서 약 5분 거리의 갓 튀긴 말라사다와 100% 코나 커피를 소개합니다.',
  },
  zh: {
    title: '威基基最好吃的马拉萨达2026｜现炸葡萄牙夏威夷甜甜圈',
    description: '在威基基哪里能吃到最好吃的马拉萨达。什么样的马拉萨达才算好（现炸温热、松软、裹糖），值得一试的口味，以及距威基基海滩约5分钟、现炸马拉萨达搭配100%科纳咖啡。',
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
      'best malasadas waikiki', 'best malasada waikiki', 'malasada waikiki',
      'where to get malasadas in waikiki', 'fresh malasadas waikiki',
      'malasada', 'malasadas honolulu', 'portuguese donut hawaii',
      'hawaiian malasada', 'malasada near me', 'haupia malasada',
      'custard malasada', 'malasada kalakaua', 'kona coffee donut',
      'best donuts waikiki', 'マラサダ', 'ワイキキ マラサダ', '말라사다', '马拉萨达',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/best-malasadas-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/best-malasadas-waikiki.jpeg',
          width: 1200,
          height: 630,
          alt: 'Best Malasadas in Waikiki - Fresh Portuguese-Hawaiian Donuts',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/best-malasadas-waikiki.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/best-malasadas-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/best-malasadas-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/best-malasadas-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/best-malasadas-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/best-malasadas-waikiki`,
        'x-default': `${siteUrl}/en/blog/best-malasadas-waikiki`,
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

export default function BestMalasadasWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
