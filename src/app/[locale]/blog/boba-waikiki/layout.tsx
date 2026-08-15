import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Boba in Waikiki: Canned Milk Tea, Brown Sugar & Ube ($8.95) at Mochi Land';
  const description =
    'Where to get boba in Waikiki: six canned boba milk teas at $8.95 — classic, brown sugar, ube, coffee, Thai tea, matcha — plus boba smoothies. 5 minutes from Waikiki Beach, open 7 AM–9 PM.';
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'boba waikiki', 'bubble tea waikiki', 'boba near me', 'milk tea waikiki',
      'brown sugar boba honolulu', 'ube milk tea hawaii', 'boba tea honolulu',
      'canned boba milk tea', 'tapioca pearls waikiki',
    ],
    openGraph: {
      type: 'article', locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/boba-waikiki`,
      siteName: 'Kona Coffee Donut', title, description,
      images: [{ url: '/images/blog/boba-waikiki.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/boba-waikiki.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/boba-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/boba-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/boba-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/boba-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/boba-waikiki`,
        'x-default': `${siteUrl}/en/blog/boba-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
