import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Best Places to Eat in Waikiki on a Budget 2026 (Under $15)',
    ja: 'ワイキキで安く美味しく食べる場所 | Kona Coffee Donut',
    ko: '와이키키 가성비 맛집 | Kona Coffee Donut',
    zh: '威基基平价美食指南 | Kona Coffee Donut',
    es: 'Comer en Waikiki con Presupuesto | Kona Coffee Donut',
  };
  const descriptions: Record<string, string> = {
    en: "Eating cheap in Waikiki is possible. The best budget-friendly cafes, food trucks, and local spots — all under $15. Mochi donuts, malasadas, plate lunches, and Kona coffee that won't break the bank.",
    ja: '$15以下で楽しめるベストスポット。リゾート価格のワイキキでも、$15以下で美味しく食べられる場所はたくさん。地元民が通う本場の店を紹介します。',
    ko: '$15 이하로 즐기는 와이키키 베스트. 리조트 가격의 와이키키에서도 $15 이하 맛집은 많습니다. 현지인이 가는 진짜 맛집을 소개합니다.',
    zh: '$15以下的威基基最佳餐厅。威基基虽然以度假区价格闻名，但$15以下的美食选择并不少。本指南介绍当地人光顾的实惠餐厅。',
    es: 'Los mejores spots bajo $15. Aunque Waikiki tiene fama de caro, hay muchas opciones bajo $15. Esta es la guía local.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
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
