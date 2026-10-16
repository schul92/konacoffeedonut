import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';
const slug = 'family-kids-cafe-waikiki';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Family-Friendly Cafe in Waikiki: Kid Favorites From $2.95',
    ja: 'ワイキキの子連れカフェ：モチドーナツ・かき氷・スムージー | Kona Coffee Donut',
    ko: '와이키키 아이랑 가기 좋은 카페: 모찌도넛·빙수·스무디 | Kona Coffee Donut',
    zh: '威基基亲子咖啡店：麻糬甜甜圈・刨冰・冰沙 | Kona Coffee Donut',
    es: 'Cafetería familiar en Waikiki: favoritos de niños desde $2.95',
  };
  const descriptions: Record<string, string> = {
    en: 'Bringing kids to Waikiki? Mochi donuts $3.95, shave ice $8.95, fruit smoothies, corn dogs $6.99 and Spam musubi $2.95 at 2142 Kalākaua Ave, open 7 AM–9 PM daily.',
    ja: '子連れのワイキキに。モチドーナツ$3.95、かき氷$8.95、フルーツスムージー、ホットドッグ$6.99、スパムむすび$2.95。カラカウア通り2142、毎日7時〜21時。',
    ko: '아이와 와이키키 여행 중이라면. 모찌도넛 $3.95, 빙수 $8.95, 과일 스무디, 핫도그 $6.99, 스팸 무스비 $2.95. 칼라카우아 2142, 매일 7시–21시.',
    zh: '带孩子游威基基：麻糬甜甜圈$3.95、刨冰$8.95、水果冰沙、热狗$6.99、午餐肉饭团$2.95。卡拉考阿大道2142号，每天7点至21点。',
    es: '¿Waikiki con niños? Mochi donuts $3.95, raspados $8.95, smoothies de fruta, corn dogs $6.99 y Spam musubi $2.95. 2142 Kalākaua Ave, 7 AM–9 PM.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'family friendly cafe waikiki', 'kid friendly restaurant waikiki', 'where to eat with kids waikiki',
      'waikiki with kids', 'kids snacks waikiki', 'mochi donuts near me', 'shave ice waikiki',
      'family breakfast waikiki', 'dessert near me waikiki',
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
