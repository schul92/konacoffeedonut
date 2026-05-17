import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Best Acai Bowls in Waikiki 2026: Where to Find Fresh Hawaiian Acai';
  const description =
    "The best acai bowls in Waikiki — fresh acai blended thick, topped with banana, granola, coconut, honey. Walking distance from Waikiki Beach. Open 7 AM–9 PM.";
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'best acai bowl waikiki', 'acai bowl waikiki', 'acai bowl honolulu',
      'acai near me waikiki', 'hawaiian acai bowl', 'fresh acai waikiki',
      'best acai hawaii', 'healthy breakfast waikiki',
    ],
    openGraph: {
      type: 'article', locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/best-acai-bowls-waikiki`,
      siteName: 'Kona Coffee Donut', title, description,
      images: [{ url: '/images/blog/best-desserts-waikiki.png', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/best-desserts-waikiki.png'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/best-acai-bowls-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/best-acai-bowls-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/best-acai-bowls-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/best-acai-bowls-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/best-acai-bowls-waikiki`,
        'x-default': `${siteUrl}/en/blog/best-acai-bowls-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
