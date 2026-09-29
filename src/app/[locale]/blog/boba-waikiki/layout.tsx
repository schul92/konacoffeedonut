import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Boba in Waikiki: Canned Milk Tea, Brown Sugar & Ube ($8.95) at Mochi Land',
    ja: 'ワイキキでボバ（タピオカ）ならMochi Land | Kona Coffee Donut',
    ko: '와이키키 보바는 Mochi Land | Kona Coffee Donut',
    zh: '威基基珍珠奶茶指南 — Mochi Land | Kona Coffee Donut',
    es: 'Boba en Waikiki: Guía Mochi Land | Kona Coffee Donut',
  };
  const descriptions: Record<string, string> = {
    en: 'Where to get boba in Waikiki: six canned boba milk teas at $8.95 — classic, brown sugar, ube, coffee, Thai tea, matcha — plus boba smoothies. 5 minutes from Waikiki Beach, open 7 AM–9 PM.',
    ja: '缶入りボバミルクティー6種類、すべて$8.95。ワイキキで本格タピオカは意外と見つからないもの。Mochi Land（コナコーヒードーナツ内）は缶入りボバミルクティー6種、ボバスムージー、$1.',
    ko: '캔 보바 밀크티 6종, 전부 $8.95. 와이키키에서 제대로 된 보바 찾기가 은근 어렵죠. Mochi Land(코나커피도넛 내)는 캔 보바 밀크티 6종, 보바 스무디, $1.',
    zh: '罐装珍珠奶茶6种口味，均价$8.95。在威基基找一杯正宗珍珠奶茶并不容易。Mochi Land（位于Kona Coffee Donut内）提供6种罐装珍珠奶茶、珍珠奶昔，任意饮品还可$1.',
    es: 'Seis tés con boba en lata, todos a $8.95.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'boba waikiki', 'bubble tea waikiki', 'boba near me', 'milk tea waikiki',
      'brown sugar boba honolulu', 'ube milk tea hawaii', 'boba tea honolulu',
      'canned boba milk tea', 'tapioca pearls waikiki',
    ],
    openGraph: {
      type: 'article', locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/boba-waikiki`,
      siteName: 'Kona Coffee Donut', title, description,
      images: [{ url: '/images/blog/boba-waikiki.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/boba-waikiki.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/boba-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/boba-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/boba-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/boba-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/boba-waikiki`,
        'x-default': `${siteUrl}/en/blog/boba-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
