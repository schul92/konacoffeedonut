import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'koreanCornDog' });

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
      'korean corn dog waikiki', 'korean corn dog hawaii', 'hotdog waikiki',
      'korean street food waikiki', 'cheese corn dog honolulu', 'best corn dog hawaii',
      'korean cheese dog waikiki', 'mozzarella corn dog hawaii', 'corn dog near waikiki beach',
      'korean food waikiki', 'street food honolulu', 'cheese pull corn dog',
      'potato corn dog hawaii', 'ramen corn dog waikiki', 'sugar corn dog',
      '韓国式チーズドッグ ワイキキ', 'ハットグ ハワイ', '한국식 핫도그 와이키키',
      '치즈핫도그 하와이', '威基基韩式热狗', 'corn dog coreano waikiki'
    ],
    openGraph: {
      type: 'website',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/korean-corn-dog-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: t('meta.title'),
      description: t('meta.description'),
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Korean Corn Dogs in Waikiki - Kona Coffee Donut',
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
      canonical: `${siteUrl}/${locale}/korean-corn-dog-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/korean-corn-dog-waikiki`,
        'ja-JP': `${siteUrl}/ja/korean-corn-dog-waikiki`,
        'ko-KR': `${siteUrl}/ko/korean-corn-dog-waikiki`,
        'zh-CN': `${siteUrl}/zh/korean-corn-dog-waikiki`,
        'es-ES': `${siteUrl}/es/korean-corn-dog-waikiki`,
        'x-default': `${siteUrl}/en/korean-corn-dog-waikiki`,
      },
    },
  };
}

export default function KoreanCornDogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
