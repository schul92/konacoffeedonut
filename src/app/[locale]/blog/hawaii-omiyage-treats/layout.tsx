import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';
const slug = 'hawaii-omiyage-treats';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Hawaii Omiyage Ideas: 100% Kona Coffee Beans From $44.95',
    ja: 'ハワイのお土産に100%コナコーヒー豆｜ワイキキで$44.95 | Kona Coffee Donut',
    ko: '하와이 기념품 추천: 100% 코나 커피 원두 $44.95 | Kona Coffee Donut',
    zh: '夏威夷伴手礼推荐：100%科纳咖啡豆$44.95 | Kona Coffee Donut',
    es: 'Regalos de Hawái: café 100% Kona en grano desde $44.95',
  };
  const descriptions: Record<string, string> = {
    en: 'Omiyage that survives the flight: 7 oz bags of 100% Kona coffee $44.95, Lokahi blend $18.95. Fresh mochi donuts and malasadas for the last morning. 2142 Kalākaua Ave, 7 AM–9 PM.',
    ja: '日持ちするハワイのお土産。100%コナコーヒー豆7oz $44.95、ロカヒブレンド$18.95。モチドーナツとマラサダは帰国前に。ワイキキ・カラカウア通り2142、毎日7時〜21時。',
    ko: '비행기를 타도 괜찮은 하와이 기념품. 100% 코나 원두 7oz $44.95, 로카히 블렌드 $18.95. 모찌도넛·말라사다는 떠나기 전에. 와이키키 칼라카우아 2142, 매일 7시–21시.',
    zh: '耐放的夏威夷伴手礼：100%科纳咖啡豆7oz $44.95，Lokahi混合豆$18.95。麻糬甜甜圈和马拉萨达请在回程前享用。威基基卡拉考阿大道2142号，每天7点至21点。',
    es: 'Regalos que aguantan el vuelo: café 100% Kona 7 oz $44.95, mezcla Lokahi $18.95. 2142 Kalākaua Ave, Waikiki, 7 AM–9 PM.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'omiyage hawaii', 'hawaii omiyage ideas', 'hawaii souvenirs food', 'kona coffee beans waikiki',
      'buy kona coffee waikiki', 'hawaii gifts to bring home', 'ハワイ お土産 コナコーヒー', '하와이 기념품 코나커피',
      'kona coffee gift',
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
