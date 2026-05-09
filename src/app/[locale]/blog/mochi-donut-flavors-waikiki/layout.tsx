import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Mochi Donut Flavors in Waikiki 2026: Visual Menu Guide';
  const description =
    "All the mochi donut flavors at Kona Coffee Donut, Waikiki. Ube, matcha, strawberry, taro, black sesame, and more — pon-de-ring style chewy mochi donuts on Kalākaua Ave. Open 7 AM–9 PM.";
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title,
    description,
    keywords: [
      'mochi donut flavors',
      'mochi donuts waikiki',
      'mochi donut menu',
      'pon de ring waikiki',
      'best mochi donuts honolulu',
      'mochi donut near me',
      'ube mochi donut',
      'matcha mochi donut',
      'モチドーナツ ワイキキ',
      '모치 도넛 와이키키',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/mochi-donut-flavors-waikiki`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [{ url: '/images/blog/mochi-donut-flavors-waikiki.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/mochi-donut-flavors-waikiki.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/mochi-donut-flavors-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/mochi-donut-flavors-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/mochi-donut-flavors-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/mochi-donut-flavors-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/mochi-donut-flavors-waikiki`,
        'x-default': `${siteUrl}/en/blog/mochi-donut-flavors-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
