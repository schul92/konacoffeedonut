import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';
const slug = 'malasada-ice-cream-sandwich-waikiki';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Malasada Ice Cream Sandwich in Waikiki: 8 Flavors, $8.95',
    ja: 'ワイキキのマラサダ・アイスサンド：8種類$8.95 | Kona Coffee Donut',
    ko: '와이키키 말라사다 아이스크림 샌드위치: 8가지 맛 $8.95 | Kona Coffee Donut',
    zh: '威基基马拉萨达冰淇淋三明治：8种口味$8.95 | Kona Coffee Donut',
    es: 'Sándwich de helado con malasada en Waikiki: 8 sabores, $8.95',
  };
  const descriptions: Record<string, string> = {
    en: 'New at Kona Coffee Donut: a sugar-coated malasada filled with ice cream. 8 flavors, $8.95, toppings $1.50. 2142 Kalākaua Ave, Waikiki, open 7 AM–9 PM daily.',
    ja: 'Kona Coffee Donutの新メニュー。シュガーをまぶしたマラサダにアイスをはさんだサンドイッチ、8種類すべて$8.95、トッピング各$1.50。ワイキキ・カラカウア通り2142、毎日7時〜21時。',
    ko: 'Kona Coffee Donut 신메뉴. 설탕 입힌 말라사다에 아이스크림을 넣은 샌드위치, 8가지 맛 모두 $8.95, 토핑 $1.50. 와이키키 칼라카우아 2142, 매일 7시–21시.',
    zh: 'Kona Coffee Donut新品：裹糖马拉萨达夹冰淇淋，8种口味均价$8.95，配料$1.50。威基基卡拉考阿大道2142号，每天7点至21点。',
    es: 'Nuevo en Kona Coffee Donut: una malasada azucarada rellena de helado. 8 sabores a $8.95, toppings $1.50. 2142 Kalākaua Ave, Waikiki, 7 AM–9 PM.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'malasada ice cream sandwich', 'malasada ice cream sandwich waikiki', 'ice cream sandwich waikiki',
      'malasada ice cream', 'malasadas near me', 'malasada waikiki', 'ice cream near me waikiki',
      'dessert near me waikiki', 'new dessert waikiki',
    ],
    openGraph: {
      type: 'article', locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/${slug}`,
      siteName: 'Kona Coffee Donut', title, description,
      images: [{ url: `/images/blog/${slug}.jpeg`, width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [`/images/blog/${slug}.jpeg`] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/${slug}`,
      languages: {
        'en-US': `${siteUrl}/en/blog/${slug}`,
        'ja-JP': `${siteUrl}/ja/blog/${slug}`,
        'ko-KR': `${siteUrl}/ko/blog/${slug}`,
        'zh-CN': `${siteUrl}/zh/blog/${slug}`,
        'es-ES': `${siteUrl}/es/blog/${slug}`,
        'x-default': `${siteUrl}/en/blog/${slug}`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
