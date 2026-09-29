import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  // The [locale] layout title template appends the brand, so titles here omit it.
  const titles: Record<string, string> = {
    en: 'Waikiki Food & Coffee Blog: Donuts, Bingsu & Kona Guides',
    ja: 'ワイキキ グルメ＆コーヒーブログ | ドーナツ・ビンス・コナコーヒー',
    ko: '와이키키 맛집·커피 블로그 | 도넛·빙수·코나커피 가이드',
    zh: '威基基美食与咖啡博客 | 甜甜圈・雪冰・科纳咖啡指南',
    es: 'Blog de Comida y Café en Waikiki: Donuts, Bingsu y Kona',
  };
  const descriptions: Record<string, string> = {
    en: 'Local guides to Waikiki donuts, 100% Kona coffee, Korean bingsu, malasadas and Hawaiian food — written by our cafe on Kalakaua Ave, 5 minutes from the beach.',
    ja: 'ワイキキのドーナツ、100%コナコーヒー、韓国かき氷ビンス、マラサダ、ハワイグルメを地元カフェが解説。ワイキキビーチから徒歩5分、カラカウア通りのカフェから。',
    ko: '와이키키 도넛, 100% 코나커피, 한국 빙수, 말라사다와 하와이 음식을 현지 카페가 직접 소개합니다. 와이키키 비치에서 도보 5분, 칼라카우아 거리 카페의 가이드.',
    zh: '威基基本地咖啡店带你了解甜甜圈、100%科纳咖啡、韩式雪冰、马拉萨达与夏威夷美食。位于卡拉考阿大道，距海滩步行5分钟。',
    es: 'Guías locales de donuts, café 100% Kona, bingsu coreano, malasadas y comida hawaiana en Waikiki, escritas por nuestra cafetería en Kalakaua Ave.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;

  const localeMap: Record<string, string> = {
    en: 'en_US',
    ja: 'ja_JP',
    ko: 'ko_KR',
    zh: 'zh_CN',
    es: 'es_ES',
  };

  return {
    title,
    description,
    keywords: [
      'kona coffee blog', 'waikiki food guide', 'hawaii donuts blog',
      'best donuts waikiki', 'kona coffee guide', 'bingsu hawaii',
      'hawaiian food culture', 'waikiki cafe blog', 'mochi donuts guide',
      'korean desserts hawaii',
    ],
    openGraph: {
      type: 'website',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Kona Coffee Donut Blog - Hawaiian Food Guides',
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
      canonical: `${siteUrl}/${locale}/blog`,
      languages: {
        'en-US': `${siteUrl}/en/blog`,
        'ja-JP': `${siteUrl}/ja/blog`,
        'ko-KR': `${siteUrl}/ko/blog`,
        'zh-CN': `${siteUrl}/zh/blog`,
        'es-ES': `${siteUrl}/es/blog`,
        'x-default': `${siteUrl}/en/blog`,
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

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
