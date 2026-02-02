import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'malasada' });

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
      'malasada hawaii', 'malasada waikiki', 'hawaiian malasada', 'best malasada hawaii',
      'malasada near me', 'portuguese donuts hawaii', 'malasada honolulu',
      'fresh malasada waikiki', 'authentic malasada hawaii', 'malasada oahu',
      'hawaiian donuts', 'leonard\'s malasada', 'malasada delivery',
      'マラサダ ハワイ', 'マラサダ ワイキキ', '말라사다 하와이', '말라사다 와이키키',
      'malasada 夏威夷', 'malasadas hawaii'
    ],
    openGraph: {
      type: 'website',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/malasada-hawaii`,
      siteName: 'Kona Coffee Donut',
      title: t('meta.title'),
      description: t('meta.description'),
      images: [
        {
          url: '/images/menu/malasada.webp',
          width: 1200,
          height: 630,
          alt: 'Fresh Hawaiian Malasada at Kona Coffee Donut Waikiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
      images: ['/images/menu/malasada.webp'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/malasada-hawaii`,
      languages: {
        'en-US': `${siteUrl}/en/malasada-hawaii`,
        'ja-JP': `${siteUrl}/ja/malasada-hawaii`,
        'ko-KR': `${siteUrl}/ko/malasada-hawaii`,
        'zh-CN': `${siteUrl}/zh/malasada-hawaii`,
        'es-ES': `${siteUrl}/es/malasada-hawaii`,
        'x-default': `${siteUrl}/en/malasada-hawaii`,
      },
    },
  };
}

export default function MalasadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
