import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';
const slug = 'rainy-day-waikiki-cafe';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Rainy Day in Waikiki: Hot Kona Coffee & Malasadas, Open 7 AM–9 PM',
    ja: 'ワイキキ雨の日の過ごし方：コナコーヒーとマラサダで雨宿り | Kona Coffee Donut',
    ko: '와이키키 비 오는 날 코스: 코나 커피와 말라사다로 비 피하기 | Kona Coffee Donut',
    zh: '威基基下雨天去哪：科纳咖啡配马拉萨达躲雨 | Kona Coffee Donut',
    es: 'Día de lluvia en Waikiki: café Kona y malasadas, 7 AM–9 PM',
  };
  const descriptions: Record<string, string> = {
    en: 'Rain in Waikiki? Duck into Kona Coffee Donut, 5 min from the beach: hot 100% Kona coffee $7, malasadas $3.95, hot chocolate $6.50. 2142 Kalākaua Ave, 7 AM–9 PM.',
    ja: 'ワイキキで雨の日は、ビーチから徒歩約5分のKona Coffee Donutへ。100%コナコーヒー$7.00、マラサダ$3.95、ホットチョコ$6.50。カラカウア通り2142、毎日7時〜21時。',
    ko: '와이키키에 비 오면 비치에서 도보 5분 Kona Coffee Donut으로. 100% 코나 커피 $7.00, 말라사다 $3.95, 핫초코 $6.50. 칼라카우아 2142, 매일 7시–21시.',
    zh: '威基基下雨？到距海滩步行5分钟的Kona Coffee Donut躲雨：100%科纳咖啡$7.00、马拉萨达$3.95、热巧克力$6.50。卡拉考阿大道2142号，每天7点至21点。',
    es: '¿Llueve en Waikiki? Kona Coffee Donut, a 5 min de la playa: café 100% Kona $7, malasadas $3.95, chocolate caliente $6.50. 2142 Kalākaua Ave, 7 AM–9 PM.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'rainy day waikiki', 'what to do waikiki rainy day', 'things to do in waikiki when it rains',
      'waikiki rain', 'coffee near me waikiki', 'hot coffee waikiki', 'cafe waikiki rainy day',
      'malasadas near me', 'kona coffee waikiki',
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
