import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';
const slug = 'best-poke-waikiki';
const image = '/images/blog/best-poke-waikiki.jpg';

const meta = {
  en: {
    title: 'Best Poke in Waikiki (2026): Where Locals Actually Buy Ahi Poke',
    description:
      'The best poke in Waikiki and Kapahulu — Maguro Brothers, Ono Seafood, Foodland counters — plus what real Hawaiian poke is, how to order by the pound, 2026 prices, and where to get dessert after.',
  },
  ja: {
    title: 'ワイキキのポケおすすめ（2026）：ローカルが実際に買う店・注文の仕方・相場',
    description:
      'ワイキキとカパフルで美味しいポケが買える店（Maguro Brothers、Ono Seafood、Foodland）、本物のハワイアンポケとは、量り売りの注文方法、2026年の相場、食後のデザートまで。',
  },
  ko: {
    title: '와이키키 포케 맛집 (2026): 로컬이 실제로 사는 곳·주문법·가격',
    description:
      '와이키키·카파훌루에서 진짜 포케를 파는 곳(Maguro Brothers, Ono Seafood, Foodland), 하와이안 포케란 무엇인지, 무게 단위 주문법, 2026 가격대, 식후 디저트까지.',
  },
  zh: {
    title: '威基基最好的Poke（2026）：本地人真正去买的地方、怎么点、价格',
    description:
      '威基基和Kapahulu哪里买真正的夏威夷poke（Maguro Brothers、Ono Seafood、Foodland），什么是正宗poke，按磅怎么点，2026年价格，以及饭后甜品去哪。',
  },
  es: {
    title: 'El mejor poke de Waikiki (2026): dónde lo compran los locales',
    description:
      'Dónde comprar poke de verdad en Waikiki y Kapahulu (Maguro Brothers, Ono Seafood, Foodland), qué es el poke hawaiano, cómo pedirlo por libra, precios 2026 y dónde ir de postre.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = meta[locale as keyof typeof meta] || meta.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title: t.title,
    description: t.description,
    keywords: [
      'best poke waikiki', 'poke waikiki', 'poke near me waikiki', 'best poke honolulu', 'ahi poke waikiki',
      'poke bowl waikiki', 'hawaiian poke vs poke bowl', 'ono seafood', 'maguro brothers', 'foodland poke',
      'ワイキキ ポケ', '와이키키 포케', '威基基 poke',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/${slug}`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      publishedTime: '2026-09-09T00:00:00+00:00',
      images: [{ url: image, width: 1376, height: 768, alt: t.title }],
    },
    twitter: { card: 'summary_large_image', title: t.title, description: t.description, images: [image] },
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
