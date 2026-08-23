import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Coffee Near Waikiki Beach: 100% Kona, Open 7 AM, 5 Minutes From the Sand';
  const description =
    'The closest real-coffee stop to Waikiki Beach: 100% Kona coffee ($7), a full espresso bar from $4.75, and fresh mochi donuts at Kona Coffee Donut, 2142 Kalākaua Ave. Open 7 AM–9 PM daily, 5-minute walk from the sand.';
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'coffee near waikiki beach', 'coffee near me waikiki', 'best coffee waikiki beach', 'kona coffee near waikiki beach',
      'coffee shop open 7am waikiki', 'espresso near waikiki beach', '100% kona coffee waikiki',
      'coffee on kalakaua avenue', 'early morning coffee waikiki',
    ],
    openGraph: {
      type: 'article', locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/coffee-near-waikiki-beach`,
      siteName: 'Kona Coffee Donut', title, description,
      images: [{ url: '/images/blog/coffee-near-waikiki-beach.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/coffee-near-waikiki-beach.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/coffee-near-waikiki-beach`,
      languages: {
        'en-US': `${siteUrl}/en/blog/coffee-near-waikiki-beach`,
        'ja-JP': `${siteUrl}/ja/blog/coffee-near-waikiki-beach`,
        'ko-KR': `${siteUrl}/ko/blog/coffee-near-waikiki-beach`,
        'zh-CN': `${siteUrl}/zh/blog/coffee-near-waikiki-beach`,
        'es-ES': `${siteUrl}/es/blog/coffee-near-waikiki-beach`,
        'x-default': `${siteUrl}/en/blog/coffee-near-waikiki-beach`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
