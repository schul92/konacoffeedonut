import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Korean Corn Dog in Waikiki: Best Mozzarella & Potato Dogs (2026)';
  const description =
    "Where to try authentic Korean corn dogs in Waikiki — stretchy mozzarella, crispy potato coating, sugar dust. The K-food street snack everyone’s posting on TikTok. Open 7 AM–9 PM.";
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'korean corn dog waikiki', 'korean corn dog honolulu', 'mozzarella corn dog hawaii',
      'best korean corn dog waikiki', 'k-food waikiki', 'korean street food waikiki',
      'potato corn dog', 'hatdogu waikiki',
    ],
    openGraph: {
      type: 'article', locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/korean-corn-dog-waikiki-guide`,
      siteName: 'Kona Coffee Donut', title, description,
      images: [{ url: '/images/blog/korean-food-waikiki.png', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/korean-food-waikiki.png'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/korean-corn-dog-waikiki-guide`,
      languages: {
        'en-US': `${siteUrl}/en/blog/korean-corn-dog-waikiki-guide`,
        'ja-JP': `${siteUrl}/ja/blog/korean-corn-dog-waikiki-guide`,
        'ko-KR': `${siteUrl}/ko/blog/korean-corn-dog-waikiki-guide`,
        'zh-CN': `${siteUrl}/zh/blog/korean-corn-dog-waikiki-guide`,
        'x-default': `${siteUrl}/en/blog/korean-corn-dog-waikiki-guide`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
