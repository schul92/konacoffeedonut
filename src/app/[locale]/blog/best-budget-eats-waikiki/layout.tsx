import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Best Places to Eat in Waikiki on a Budget 2026 (Under $15)';
  const description =
    "Eating cheap in Waikiki is possible. The best budget-friendly cafes, food trucks, and local spots — all under $15. Mochi donuts, malasadas, plate lunches, and Kona coffee that won't break the bank.";
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title,
    description,
    keywords: [
      'best places to eat in waikiki on a budget', 'cheap eats waikiki', 'budget food waikiki',
      'affordable waikiki restaurants', 'cheap food waikiki', 'budget waikiki',
      'waikiki under 15', 'cheap breakfast waikiki', 'budget hawaii food',
    ],
    openGraph: {
      type: 'article', locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/best-budget-eats-waikiki`,
      siteName: 'Kona Coffee Donut', title, description,
      images: [{ url: '/images/blog/cheap-eats-waikiki.png', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/cheap-eats-waikiki.png'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/best-budget-eats-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/best-budget-eats-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/best-budget-eats-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/best-budget-eats-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/best-budget-eats-waikiki`,
        'x-default': `${siteUrl}/en/blog/best-budget-eats-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
