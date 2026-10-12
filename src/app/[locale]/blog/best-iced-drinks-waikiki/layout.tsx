import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';
const slug = 'best-iced-drinks-waikiki';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Iced Drinks in Waikiki: Cold Brew, Boba & Shave Ice From $5.35',
    ja: 'ワイキキの冷たいドリンク：コールドブリュー・ボバ・かき氷 | Kona Coffee Donut',
    ko: '와이키키 아이스 음료: 콜드브루·보바·빙수 $5.35부터 | Kona Coffee Donut',
    zh: '威基基冰饮：冷萃、珍珠奶茶、刨冰 $5.35起 | Kona Coffee Donut',
    es: 'Bebidas frías en Waikiki: cold brew, boba y raspado desde $5.35',
  };
  const descriptions: Record<string, string> = {
    en: 'Cold drinks 5 min from Waikiki Beach: iced Americano $5.35, Kona Cold Brew $6.95, boba cans $8.95, smoothies $10.95, shave ice $12.95. Open 7 AM–9 PM daily.',
    ja: 'ワイキキビーチから徒歩5分：アイスアメリカーノ$5.35、コナ・コールドブリュー$6.95、缶ボバ$8.95、スムージー$10.95〜、ハワイアンかき氷$12.95。毎日朝7時〜夜9時。',
    ko: '와이키키 비치에서 도보 5분: 아이스 아메리카노 $5.35, 코나 콜드브루 $6.95, 캔 보바 $8.95, 스무디 $10.95부터, 하와이안 빙수 $12.95. 매일 7시–21시.',
    zh: '距威基基海滩步行5分钟：冰美式$5.35、科纳冷萃$6.95、罐装珍珠奶茶$8.95、奶昔$10.95起、夏威夷刨冰$12.95，每天7点至21点。',
    es: 'A 5 min de la playa de Waikiki: americano helado $5.35, Kona Cold Brew $6.95, boba en lata $8.95, smoothies $10.95, raspado $12.95. 7 AM–9 PM.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'iced drinks waikiki', 'cold drinks near waikiki beach', 'iced coffee waikiki', 'cold brew waikiki',
      'boba near me waikiki', 'smoothie near me waikiki', 'shave ice near me', 'iced matcha waikiki',
      'drinks near waikiki beach',
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
