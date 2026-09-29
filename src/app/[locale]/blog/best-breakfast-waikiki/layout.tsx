import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Breakfast in Waikiki Open at 7 AM: Donuts, Musubi & Kona Coffee (Under $10)',
    ja: 'ワイキキの朝ごはん、朝7時オープン | Kona Coffee Donut',
    ko: '와이키키 아침식사, 아침 7시 오픈 | Kona Coffee Donut',
    zh: '威基基早餐，早上7点开门 | Kona Coffee Donut',
    es: 'Desayuno en Waikiki desde las 7 AM | Kona Coffee Donut',
  };
  const descriptions: Record<string, string> = {
    en: 'Breakfast in Waikiki from 7 AM daily: spam musubi from $2.95, fresh mochi donuts and malasadas, and 100% Kona coffee — 5 minutes from Waikiki Beach at 2142 Kalākaua Ave.',
    ja: 'モチドーナツ、マラサダ、スパムむすび$2.95〜、100%コナコーヒー。時差ボケで早起きしたら、それはチャンス。Kona Coffee Donutは毎日朝7時オープン、ワイキキビーチから徒歩5分。',
    ko: '모치도넛, 말라사다, 스팸무스비 $2.95부터, 100% 코나커피. 시차로 일찍 깼다면 오히려 기회. Kona Coffee Donut은 매일 아침 7시에 열고, 와이키키 비치에서 도보 5분.',
    zh: '麻糬甜甜圈、马拉萨达、午餐肉饭团$2.95起、100%科纳咖啡。倒时差早醒反而是机会。Kona Coffee Donut每天早上7点开门，距威基基海滩步行5分钟，$10以内吃到地道夏威夷早餐。',
    es: 'Mochi donuts, malasadas, spam musubi desde $2.95 y café 100% Kona. Kona Coffee Donut abre a las 7 AM todos los días, a 5 minutos a pie de la playa de Waikiki.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'breakfast waikiki', 'breakfast near waikiki beach', 'waikiki breakfast open early',
      'cheap breakfast waikiki', 'spam musubi waikiki', 'coffee shop open 7am waikiki',
      'best breakfast honolulu', 'grab and go breakfast waikiki',
    ],
    openGraph: {
      type: 'article', locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/best-breakfast-waikiki`,
      siteName: 'Kona Coffee Donut', title, description,
      images: [{ url: '/images/blog/best-breakfast-waikiki.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/best-breakfast-waikiki.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/best-breakfast-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/best-breakfast-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/best-breakfast-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/best-breakfast-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/best-breakfast-waikiki`,
        'x-default': `${siteUrl}/en/blog/best-breakfast-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
