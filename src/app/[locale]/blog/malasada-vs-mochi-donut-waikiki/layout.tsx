import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Malasada vs Mochi Donut in Waikiki: Which Should You Try First?';
  const description =
    "Visiting Waikiki and torn between malasadas and mochi donuts? A side-by-side guide to flavor, texture, and where to try both at Kona Coffee Donut on Kalākaua Ave.";
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title,
    description,
    keywords: [
      'malasada vs mochi donut',
      'malasada waikiki',
      'mochi donut waikiki',
      'best donut waikiki',
      'where to try malasada hawaii',
      'best mochi donuts hawaii',
      'hawaiian donuts comparison',
      'malasada hawaii guide',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/malasada-vs-mochi-donut-waikiki`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [{ url: '/images/blog/malasada-vs-mochi-donut-waikiki.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/malasada-vs-mochi-donut-waikiki.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/malasada-vs-mochi-donut-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/malasada-vs-mochi-donut-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/malasada-vs-mochi-donut-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/malasada-vs-mochi-donut-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/malasada-vs-mochi-donut-waikiki`,
        'x-default': `${siteUrl}/en/blog/malasada-vs-mochi-donut-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
