import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const title = 'Farm to Donut: Kona Coffee Journey | From Volcanic Slopes to Waikiki';

  const description = 'Discover the journey from Hawaii\'s volcanic farms to our Waikiki donut shop. Learn how 100% Kona coffee beans and fresh ingredients become our handcrafted mochi donuts and malasadas daily.';

  return {
    title,
    description,
    keywords: [
      'farm to cup', 'kona coffee origin', 'volcanic soil coffee',
      'hawaiian coffee farms', 'authentic kona', 'bean to cup',
      'kona coffee journey', 'coffee sourcing hawaii',
      'farm to table hawaii', 'kona coffee process'
    ],
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : locale,
      url: `${siteUrl}/${locale}/farm-to-donut`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [
        {
          url: '/images/menu/coffee.webp',
          width: 1200,
          height: 630,
          alt: 'Kona Coffee Farm to Donut Journey'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/menu/coffee.webp']
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/farm-to-donut`,
      languages: {
        'en-US': `${siteUrl}/en/farm-to-donut`,
        'ja-JP': `${siteUrl}/ja/farm-to-donut`,
        'ko-KR': `${siteUrl}/ko/farm-to-donut`,
        'zh-CN': `${siteUrl}/zh/farm-to-donut`,
        'es-ES': `${siteUrl}/es/farm-to-donut`,
        'x-default': `${siteUrl}/en/farm-to-donut`
      }
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  };
}

export default function FarmToDonutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
