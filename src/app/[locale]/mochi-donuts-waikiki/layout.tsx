import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'mochiDonutsWaikiki' });

  const localeMap: Record<string, string> = {
    en: 'en_US',
    ja: 'ja_JP',
    ko: 'ko_KR',
    zh: 'zh_CN',
    es: 'es_ES',
  };

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: [
      'mochi donuts waikiki', 'best mochi donuts hawaii', 'mochi donuts near me',
      'mochi donut honolulu', 'where to get mochi donuts in waikiki',
      'mochiland waikiki', 'mochi donut hawaii', 'japanese mochi donuts',
      'ube mochi donut', 'matcha mochi donut', 'mochi donuts oahu',
      'chewy donuts waikiki', 'rice flour donuts hawaii', 'viral mochi donuts',
      'モチドーナツ ワイキキ', 'もちもちドーナツ ハワイ',
      '모찌 도넛 와이키키', '모찌 도넛 하와이',
      '麻糬甜甜圈 威基基', 'donuts de mochi waikiki'
    ],
    openGraph: {
      type: 'website',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/mochi-donuts-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: t('meta.title'),
      description: t('meta.description'),
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Best Mochi Donuts in Waikiki - Kona Coffee Donut x MOCHILAND',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/mochi-donuts-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/mochi-donuts-waikiki`,
        'ja-JP': `${siteUrl}/ja/mochi-donuts-waikiki`,
        'ko-KR': `${siteUrl}/ko/mochi-donuts-waikiki`,
        'zh-CN': `${siteUrl}/zh/mochi-donuts-waikiki`,
        'es-ES': `${siteUrl}/es/mochi-donuts-waikiki`,
        'x-default': `${siteUrl}/en/mochi-donuts-waikiki`,
      },
    },
  };
}

export default function MochiDonutsWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
