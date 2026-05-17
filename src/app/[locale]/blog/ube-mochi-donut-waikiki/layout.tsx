import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Ube Mochi Donut: Hawaii\'s Most Photogenic Donut (Waikiki 2026)';
  const description =
    "What is ube mochi donut? The vibrant purple Filipino-yam-glazed donut taking over Hawaii. Where to try authentic ube mochi donuts in Waikiki. Open 7 AM–9 PM.";
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'ube mochi donut', 'ube mochi donut waikiki', 'purple donut hawaii',
      'best ube donut waikiki', 'what is ube', 'ube flavor mochi donut',
      'instagram donut waikiki', 'most photogenic donut hawaii',
    ],
    openGraph: {
      type: 'article', locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/ube-mochi-donut-waikiki`,
      siteName: 'Kona Coffee Donut', title, description,
      images: [{ url: '/images/blog/mochi-donut-flavors-waikiki.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/mochi-donut-flavors-waikiki.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/ube-mochi-donut-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/ube-mochi-donut-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/ube-mochi-donut-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/ube-mochi-donut-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/ube-mochi-donut-waikiki`,
        'x-default': `${siteUrl}/en/blog/ube-mochi-donut-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
