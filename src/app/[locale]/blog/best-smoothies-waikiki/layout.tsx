import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Best Smoothies in Waikiki 2026: 10 Hawaiian Flavors at Mochi Land';
  const description =
    "Looking for smoothies near Waikiki Beach? Mochi Land at Kona Coffee Donut serves 10 Hawaiian smoothies — pina colada, mango, ube, taro, brown sugar, lychee — all $8.95. Open 7 AM–9 PM.";
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title,
    description,
    keywords: [
      'best smoothies waikiki',
      'smoothies in waikiki',
      'hawaiian smoothies',
      'smoothie near me waikiki',
      'pina colada smoothie waikiki',
      'mango smoothie hawaii',
      'ube smoothie',
      'taro smoothie',
      'boba smoothie waikiki',
      'mochi land smoothies',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/best-smoothies-waikiki`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [{ url: '/images/blog/best-smoothies-waikiki.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/best-smoothies-waikiki.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/best-smoothies-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/best-smoothies-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/best-smoothies-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/best-smoothies-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/best-smoothies-waikiki`,
        'x-default': `${siteUrl}/en/blog/best-smoothies-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
