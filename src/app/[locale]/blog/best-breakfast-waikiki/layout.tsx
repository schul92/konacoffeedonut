import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Breakfast in Waikiki Open at 7 AM: Donuts, Musubi & Kona Coffee (Under $10)';
  const description =
    'Breakfast in Waikiki from 7 AM daily: spam musubi from $2.95, fresh mochi donuts and malasadas, and 100% Kona coffee — 5 minutes from Waikiki Beach at 2142 Kalākaua Ave.';
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'breakfast waikiki', 'breakfast near waikiki beach', 'waikiki breakfast open early',
      'cheap breakfast waikiki', 'spam musubi waikiki', 'coffee shop open 7am waikiki',
      'best breakfast honolulu', 'grab and go breakfast waikiki',
    ],
    openGraph: {
      type: 'article', locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/best-breakfast-waikiki`,
      siteName: 'Kona Coffee Donut', title, description,
      images: [{ url: '/images/blog/best-breakfast-waikiki.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/best-breakfast-waikiki.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/best-breakfast-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/best-breakfast-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/best-breakfast-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/best-breakfast-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/best-breakfast-waikiki`,
        'x-default': `${siteUrl}/en/blog/best-breakfast-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
