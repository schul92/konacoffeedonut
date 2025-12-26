import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

// Target keyword: "gourmet donuts" (Volume: 1,700, Difficulty: 1 - VERY EASY!)
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  // SEO-optimized title: Primary keyword + Location + Brand (under 60 chars ideal)
  const title = 'Gourmet Donuts Waikiki | Artisan Mochi Donuts | Kona Coffee Donut';

  // SEO-optimized description: Primary + secondary keywords + CTA (150-160 chars ideal)
  const description = 'Gourmet donuts handcrafted daily in Waikiki. Artisan mochi donuts & Hawaiian malasadas with premium ingredients. Paired with 100% Kona coffee. Visit us today!';

  return {
    title,
    description,
    keywords: [
      'gourmet donuts', 'gourmet donuts near me', 'gourmet donuts hawaii',
      'artisan donuts', 'artisan donuts waikiki', 'premium donuts',
      'gourmet mochi donuts', 'luxury donuts', 'handcrafted donuts',
      'best gourmet donuts', 'gourmet donut shop', 'fancy donuts hawaii',
      'gourmet pastries waikiki', 'upscale donuts', 'boutique donuts'
    ],
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : locale,
      url: `${siteUrl}/${locale}/gourmet-donuts`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [
        {
          url: '/images/menu/donut.webp',
          width: 1200,
          height: 630,
          alt: 'Gourmet Donuts at Kona Coffee Donut Waikiki'
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
      canonical: `${siteUrl}/${locale}/gourmet-donuts`,
      languages: {
        'en-US': `${siteUrl}/en/gourmet-donuts`,
        'ja-JP': `${siteUrl}/ja/gourmet-donuts`,
        'ko-KR': `${siteUrl}/ko/gourmet-donuts`,
        'zh-CN': `${siteUrl}/zh/gourmet-donuts`,
        'es-ES': `${siteUrl}/es/gourmet-donuts`,
        'x-default': `${siteUrl}/en/gourmet-donuts`
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

export default function GourmetDonutsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
