import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const title = 'Blog | Kona Coffee Donut';
  const description = 'Explore our blog for guides on Waikiki donuts, Kona coffee, Hawaiian food culture, Korean shaved ice, and more. Tips and stories from our Waikiki cafe.';

  const localeMap: Record<string, string> = {
    en: 'en_US',
    ja: 'ja_JP',
    ko: 'ko_KR',
    zh: 'zh_CN',
    es: 'es_ES',
  };

  return {
    title,
    description,
    keywords: [
      'kona coffee blog', 'waikiki food guide', 'hawaii donuts blog',
      'best donuts waikiki', 'kona coffee guide', 'bingsu hawaii',
      'hawaiian food culture', 'waikiki cafe blog', 'mochi donuts guide',
      'korean desserts hawaii',
    ],
    openGraph: {
      type: 'website',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Kona Coffee Donut Blog - Hawaiian Food Guides',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog`,
      languages: {
        'en-US': `${siteUrl}/en/blog`,
        'ja-JP': `${siteUrl}/ja/blog`,
        'ko-KR': `${siteUrl}/ko/blog`,
        'zh-CN': `${siteUrl}/zh/blog`,
        'es-ES': `${siteUrl}/es/blog`,
        'x-default': `${siteUrl}/en/blog`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
