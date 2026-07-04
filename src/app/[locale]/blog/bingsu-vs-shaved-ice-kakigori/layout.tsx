import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Bingsu vs Shaved Ice vs Kakigori: Korean, Hawaiian & Japanese Iced Desserts Compared (2026)',
    description: 'Bingsu vs shaved ice vs kakigori — Korean shaved ice is called bingsu (빙수). See how creamy milk-snow bingsu, Hawaiian shave ice & Japanese kakigori differ, and where to try real Korean bingsu in Waikiki.',
  },
  ja: {
    title: 'ビンス vs シェイブアイス vs かき氷：韓国・ハワイ・日本の氷デザートを徹底比較（2026年版）',
    description: 'ビンス・シェイブアイス・かき氷の違いを解説。韓国のかき氷は「ビンス(빙수)」と呼ばれます。クリーミーなミルク氷ビンス、ハワイアンシェイブアイス、日本のかき氷の違いと、ワイキキで本場の韓国ビンスが味わえる場所をご紹介。',
  },
  ko: {
    title: '빙수 vs 셰이브 아이스 vs 가키고리: 한국·하와이·일본 얼음 디저트 완벽 비교 (2026)',
    description: '빙수, 하와이안 셰이브 아이스, 일본 가키고리의 차이를 정리했습니다. 한국식 빙수는 우유 얼음을, 셰이브 아이스와 가키고리는 물 얼음을 사용합니다. 와이키키에서 진짜 한국 빙수를 맛볼 수 있는 곳까지 알려드립니다.',
  },
  zh: {
    title: '雪冰 vs 刨冰 vs 日式刨冰：韩国、夏威夷与日本冰品全方位对比（2026）',
    description: '雪冰、夏威夷刨冰与日式刨冰有何不同？韩式刨冰称为雪冰(빙수)，使用牛奶冰；夏威夷刨冰与日式刨冰用水冰。详解三者区别，并告诉你在威基基哪里能吃到正宗韩式雪冰。',
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
      'bingsu vs shaved ice', 'korean shaved ice name', 'what is shaved ice in korean',
      'bingsu vs kakigori', 'shaved ice vs bingsu', 'is bingsu korean',
      'bingsu', 'korean shaved ice', 'kakigori', 'hawaiian shave ice',
      'bingsu meaning', 'bingsu vs shave ice', 'korean bingsu waikiki',
      'bingsu hawaii', 'patbingsu',
      '빙수', '빙수 셰이브 아이스 차이', 'ビンス かき氷 違い', '韩式刨冰 区别', '刨冰',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/bingsu-vs-shaved-ice-kakigori`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/bingsu-vs-shaved-ice-kakigori.jpeg',
          width: 1200,
          height: 630,
          alt: 'Bingsu vs Shaved Ice vs Kakigori - Korean, Hawaiian and Japanese Iced Desserts Compared',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/bingsu-vs-shaved-ice-kakigori.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/bingsu-vs-shaved-ice-kakigori`,
      languages: {
        'en-US': `${siteUrl}/en/blog/bingsu-vs-shaved-ice-kakigori`,
        'ja-JP': `${siteUrl}/ja/blog/bingsu-vs-shaved-ice-kakigori`,
        'ko-KR': `${siteUrl}/ko/blog/bingsu-vs-shaved-ice-kakigori`,
        'zh-CN': `${siteUrl}/zh/blog/bingsu-vs-shaved-ice-kakigori`,
        'x-default': `${siteUrl}/en/blog/bingsu-vs-shaved-ice-kakigori`,
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

export default function BingsuVsShavedIceKakigoriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
