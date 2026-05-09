import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Kona Affogato in Waikiki: Why Coffee Lovers Should Try This';
  const description =
    "Kona affogato — espresso poured over vanilla bean ice cream — is the perfect Waikiki dessert pairing. Try it at Kona Coffee Donut on Kalākaua Avenue. Open 7 AM–9 PM.";
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title,
    description,
    keywords: [
      'affogato waikiki',
      'kona affogato',
      'best affogato hawaii',
      'where to get affogato in waikiki',
      'coffee dessert waikiki',
      'kona coffee dessert',
      'italian dessert hawaii',
      'espresso ice cream waikiki',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/kona-affogato-waikiki`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [{ url: '/images/blog/kona-affogato-waikiki.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/kona-affogato-waikiki.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/kona-affogato-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/kona-affogato-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/kona-affogato-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/kona-affogato-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/kona-affogato-waikiki`,
        'x-default': `${siteUrl}/en/blog/kona-affogato-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
