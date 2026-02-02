import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'breakfast' });

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
      'breakfast waikiki', 'breakfast honolulu', 'best breakfast waikiki',
      'breakfast near me waikiki', 'waikiki breakfast spots', 'morning coffee waikiki',
      'breakfast hawaii', 'waikiki cafe breakfast', 'early breakfast waikiki',
      'breakfast in waikiki beach', 'cheap breakfast waikiki', 'local breakfast honolulu',
      'ワイキキ 朝食', 'ワイキキ モーニング', '와이키키 아침식사', '와이키키 브런치',
      '威基基早餐', 'desayuno waikiki'
    ],
    openGraph: {
      type: 'website',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/breakfast-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: t('meta.title'),
      description: t('meta.description'),
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Best Breakfast in Waikiki - Kona Coffee Donut',
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
      canonical: `${siteUrl}/${locale}/breakfast-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/breakfast-waikiki`,
        'ja-JP': `${siteUrl}/ja/breakfast-waikiki`,
        'ko-KR': `${siteUrl}/ko/breakfast-waikiki`,
        'zh-CN': `${siteUrl}/zh/breakfast-waikiki`,
        'es-ES': `${siteUrl}/es/breakfast-waikiki`,
        'x-default': `${siteUrl}/en/breakfast-waikiki`,
      },
    },
  };
}

export default function BreakfastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
