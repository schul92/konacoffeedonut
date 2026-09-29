import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Kona Affogato in Waikiki: Why Coffee Lovers Should Try This',
    ja: 'ワイキキで楽しむコナアフォガート | Kona Coffee Donut',
    ko: '와이키키 코나 아포가토 | Kona Coffee Donut',
    zh: '威基基的科纳阿芙佳朵 | Kona Coffee Donut',
    es: 'Affogato Kona en Waikiki | Kona Coffee Donut',
  };
  const descriptions: Record<string, string> = {
    en: "Kona affogato — espresso poured over vanilla bean ice cream — is the perfect Waikiki dessert pairing. Try it at Kona Coffee Donut on Kalākaua Avenue. Open 7 AM–9 PM.",
    ja: 'ホノルルコーヒーが魔法に変わるシンプルなイタリアンデザート。アフォガートはバニラアイスに熱いエスプレッソをかけて即食べる、シンプルなのに最高のコーヒーデザート。',
    ko: '호놀룰루 커피를 마법처럼 만드는 단순한 이탈리아 디저트. 아포가토는 바닐라 아이스크림에 뜨거운 에스프레소를 부어 바로 먹는 단순하지만 완벽한 디저트.',
    zh: '让檀香山咖啡变神奇的简单意式甜品。阿芙佳朵是把热浓缩咖啡倒在香草冰淇淋上立即享用的简单完美甜品。用檀香山咖啡制作，味道升级。',
    es: 'El postre italiano simple que transforma el espresso Honolulu Coffee en algo mágico.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title,
    description,
    keywords: [
      'affogato waikiki',
      'kona affogato',
      'best affogato hawaii',
      'where to get affogato in waikiki',
      'coffee dessert waikiki',
      'kona coffee dessert',
      'italian dessert hawaii',
      'espresso ice cream waikiki',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/kona-affogato-waikiki`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [{ url: '/images/blog/kona-affogato-waikiki.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/kona-affogato-waikiki.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/kona-affogato-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/kona-affogato-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/kona-affogato-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/kona-affogato-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/kona-affogato-waikiki`,
        'x-default': `${siteUrl}/en/blog/kona-affogato-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
