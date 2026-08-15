import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Spam Musubi in Waikiki from $2.95: Made Fresh Daily on Kalākaua';
  const description =
    'Where to get spam musubi in Waikiki: five varieties made fresh daily from $2.95 — classic spam, teriyaki, egg, shiso wakame, shrimp avocado. 5 minutes from Waikiki Beach, open 7 AM–9 PM.';
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'spam musubi waikiki', 'musubi near me', 'musubi waikiki', 'spam musubi honolulu',
      'best spam musubi oahu', 'cheap eats waikiki', 'hawaiian snacks waikiki',
      'what is spam musubi', 'grab and go food waikiki',
    ],
    openGraph: {
      type: 'article', locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/musubi-waikiki`,
      siteName: 'Kona Coffee Donut', title, description,
      images: [{ url: '/images/blog/musubi-waikiki.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/musubi-waikiki.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/musubi-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/musubi-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/musubi-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/musubi-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/musubi-waikiki`,
        'x-default': `${siteUrl}/en/blog/musubi-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
