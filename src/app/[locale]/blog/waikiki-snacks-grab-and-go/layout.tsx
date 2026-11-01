import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';
const slug = 'waikiki-snacks-grab-and-go';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Grab-and-Go Food in Waikiki: Beach Snacks From $2.95',
    ja: 'ワイキキのテイクアウト：ビーチで食べるスパムむすび・ボバ缶 | Kona Coffee Donut',
    ko: '와이키키 테이크아웃: 해변에서 먹는 스팸 무스비·보바 캔 | Kona Coffee Donut',
    zh: '威基基外带小吃：海滩午餐肉饭团与罐装奶茶 | Kona Coffee Donut',
    es: 'Comida para llevar en Waikiki: snacks de playa desde $2.95',
  };
  const descriptions: Record<string, string> = {
    en: 'Beach food you can carry: Spam musubi $2.95, mochi donuts $3.95, Korean corn dogs from $6.99, sealed boba cans $8.95. 2142 Kalākaua Ave, 5 min from Waikiki Beach, 7 AM–9 PM.',
    ja: 'ビーチに持っていけるテイクアウト。スパムむすび$2.95、モチドーナツ$3.95、韓国式ホットドッグ$6.99〜、密封ボバ缶$8.95。カラカウア通り2142、ビーチから徒歩5分、毎日7時〜21時。',
    ko: '해변에 들고 가기 좋은 테이크아웃. 스팸 무스비 $2.95, 모찌도넛 $3.95, 한국식 핫도그 $6.99부터, 밀봉 보바 캔 $8.95. 칼라카우아 2142, 비치에서 도보 5분, 매일 7시–21시.',
    zh: '方便带去海滩的外带小吃：午餐肉饭团$2.95、麻糬甜甜圈$3.95、韩式热狗$6.99起、密封珍珠奶茶罐$8.95。卡拉考阿大道2142号，距海滩步行5分钟，每天7点至21点。',
    es: 'Comida de playa para llevar: Spam musubi $2.95, mochi donuts $3.95, corn dogs desde $6.99, boba en lata $8.95. 2142 Kalākaua Ave, 7 AM–9 PM.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'grab and go food waikiki', 'beach food waikiki', 'takeout waikiki', 'spam musubi waikiki',
      'snacks near waikiki beach', 'cheap eats waikiki', 'boba to go waikiki', 'food near me waikiki beach',
      'quick lunch waikiki',
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
