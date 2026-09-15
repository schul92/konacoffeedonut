import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';
const slug = 'late-night-dessert-waikiki';
const image = '/images/blog/late-night-dessert-waikiki.jpeg';

const meta: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Late Night Dessert in Waikiki: Bingsu & Donuts Until 9 PM',
    description:
      'Dessert open late in Waikiki: Kona Coffee Donut, 2142 Kalākaua Ave, serves mochi donuts, bingsu, malasadas & boba cans until 9 PM daily, 5 min from the beach.',
  },
  ja: {
    title: 'ワイキキで夜9時まで開いているデザート店 | Kona Coffee Donut',
    description:
      'ワイキキで夜遅くまで営業するデザート店。Kona Coffee Donut（2142 Kalākaua Ave）は毎日7時〜21時、モチドーナツ・ビンス・マラサダ・缶ボバを閉店まで提供。ビーチから徒歩5分。',
  },
  ko: {
    title: '와이키키 밤 9시까지 여는 디저트 가게 | Kona Coffee Donut',
    description:
      '와이키키에서 밤늦게까지 하는 디저트 가게. Kona Coffee Donut(2142 Kalākaua Ave)은 매일 7시–21시 영업, 모찌도넛·빙수·말라사다·캔 보바를 마감까지 판매. 비치에서 도보 5분.',
  },
  zh: {
    title: '威基基晚上9点还开门的甜品店 | Kona Coffee Donut',
    description:
      '威基基营业到晚上的甜品店。Kona Coffee Donut（2142 Kalākaua Ave）每天7点–21点，麻糬甜甜圈、刨冰、马拉萨达、罐装珍珠奶茶供应到关门。距海滩步行5分钟。',
  },
  es: {
    title: 'Postres en Waikiki hasta las 9 PM | Kona Coffee Donut',
    description:
      'Postres abiertos hasta tarde en Waikiki: Kona Coffee Donut, 2142 Kalākaua Ave, sirve mochi donuts, bingsu, malasadas y boba en lata hasta las 9 PM todos los días, a 5 min de la playa.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const { title, description } = meta[locale] || meta.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title,
    description,
    keywords: [
      'late night dessert waikiki', 'dessert open late waikiki', 'dessert near me open now',
      'dessert waikiki open late', 'late night food waikiki', 'bingsu waikiki night',
      'mochi donuts waikiki open late', 'ワイキキ デザート 夜', '와이키키 디저트 밤', '威基基 甜品 晚上',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/${slug}`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      publishedTime: '2026-09-15T00:00:00+00:00',
      images: [{ url: image, width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
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
