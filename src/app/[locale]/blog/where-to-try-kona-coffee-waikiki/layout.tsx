import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Where to Try Real Kona Coffee in Waikiki 2026';
  const description =
    "Skip the chains — find authentic Honolulu Coffee in Waikiki at Kona Coffee Donut on Kalākaua Avenue. Pour-over, espresso, lattes, and beans to take home. Open 7 AM–9 PM.";
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title,
    description,
    keywords: [
      'kona coffee waikiki',
      'where to get kona coffee',
      'best kona coffee in waikiki',
      'real kona coffee',
      'honolulu coffee waikiki',
      'kona coffee shop near me',
      'authentic hawaiian coffee',
      'pour over kona coffee',
      'kona coffee beans waikiki',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/where-to-try-kona-coffee-waikiki`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [{ url: '/images/blog/where-to-try-kona-coffee-waikiki.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/where-to-try-kona-coffee-waikiki.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/where-to-try-kona-coffee-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/where-to-try-kona-coffee-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/where-to-try-kona-coffee-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/where-to-try-kona-coffee-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/where-to-try-kona-coffee-waikiki`,
        'x-default': `${siteUrl}/en/blog/where-to-try-kona-coffee-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
