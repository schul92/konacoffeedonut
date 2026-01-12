import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

// Target keyword: "fresh donuts" (Volume: 1,900, Difficulty: 3)
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  // SEO-optimized title (without site name - parent template adds it)
  const title = 'Fresh Donuts in Waikiki | Made Daily';

  // SEO-optimized description: Keywords + Value proposition + Call to action
  const description = 'Fresh donuts made daily in Waikiki, Hawaii. Handcrafted mochi donuts & malasadas baked fresh every morning. Paired with 100% Kona coffee. Visit us at 2142 Kalakaua Ave!';

  return {
    title,
    description,
    keywords: [
      'fresh donuts', 'fresh donuts near me', 'fresh donuts waikiki',
      'gourmet donuts', 'gourmet donuts hawaii', 'artisan donuts',
      'mochi donuts fresh', 'malasadas fresh', 'hawaiian donuts',
      'donuts made daily', 'handcrafted donuts', 'best donuts waikiki',
      'fresh pastries hawaii', 'waikiki bakery', 'honolulu donuts'
    ],
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : locale,
      url: `${siteUrl}/${locale}/fresh-donuts`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [
        {
          url: '/images/menu/donut.webp',
          width: 1200,
          height: 630,
          alt: 'Fresh Donuts at Kona Coffee Donut Waikiki'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/menu/donut.webp']
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/fresh-donuts`,
      languages: {
        'en-US': `${siteUrl}/en/fresh-donuts`,
        'ja-JP': `${siteUrl}/ja/fresh-donuts`,
        'ko-KR': `${siteUrl}/ko/fresh-donuts`,
        'zh-CN': `${siteUrl}/zh/fresh-donuts`,
        'es-ES': `${siteUrl}/es/fresh-donuts`,
        'x-default': `${siteUrl}/en/fresh-donuts`
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

export default function FreshDonutsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
