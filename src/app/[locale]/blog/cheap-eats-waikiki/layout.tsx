import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'Cheap Eats in Waikiki Under $15: Best Budget Food 2026 | Local Guide',
    ja: 'ワイキキの安くて美味しいグルメ15ドル以下｜2026年地元ガイド',
    ko: '와이키키 저렴한 맛집 $15 이하 | 2026 로컬 가이드',
    zh: '威基基15美元以下平价美食指南｜2026本地人推荐',
  };

  const descriptions: Record<string, string> = {
    en: 'Discover the 10 best cheap eats in Waikiki under $15. From mochi donuts and spam musubi to plate lunch and udon. A local\'s guide to budget-friendly food in Waikiki 2026 with prices, tips, and insider deals.',
    ja: 'ワイキキで15ドル以下の安くて美味しいグルメ10選。モチドーナツ、スパムむすび、プレートランチ、うどんなど。2026年版地元民おすすめのワイキキ格安グルメガイド。',
    ko: '와이키키에서 $15 이하로 즐기는 맛집 10곳. 모찌 도넛, 스팸 무스비, 플레이트 런치, 우동 등. 2026년 로컬이 추천하는 와이키키 가성비 맛집 가이드.',
    zh: '威基基15美元以下的10家平价美食。从麻糬甜甜圈、午餐肉饭团到日式乌冬面。2026年本地人推荐的威基基经济实惠美食指南。',
  };

  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;

  const localeMap: Record<string, string> = {
    en: 'en_US',
    ja: 'ja_JP',
    ko: 'ko_KR',
    zh: 'zh_CN',
  };

  return {
    title,
    description,
    keywords: [
      'cheap eats waikiki',
      'budget food waikiki',
      'cheap food waikiki',
      'waikiki food under $15',
      'affordable restaurants waikiki',
      'cheap lunch waikiki',
      'best cheap food honolulu',
      'waikiki on a budget',
      'cheap restaurants waikiki beach',
      'budget friendly waikiki food',
      'cheap breakfast waikiki',
      'food trucks waikiki',
      'plate lunch waikiki',
      'ワイキキ 安い ご飯',
      'ワイキキ 格安 グルメ',
      '와이키키 저렴한 맛집',
      '威基基便宜美食',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/cheap-eats-waikiki`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Cheap Eats in Waikiki Under $15 - 2026 Budget Food Guide',
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
      canonical: `${siteUrl}/${locale}/blog/cheap-eats-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/cheap-eats-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/cheap-eats-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/cheap-eats-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/cheap-eats-waikiki`,
        'x-default': `${siteUrl}/en/blog/cheap-eats-waikiki`,
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

export default function CheapEatsWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
