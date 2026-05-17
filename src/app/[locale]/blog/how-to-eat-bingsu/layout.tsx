import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const title = 'How to Eat Bingsu the Right Way (Korean Style, 2026)';
  const description =
    "How do you eat bingsu? The Korean way: mix the toppings into the snow ice with your spoon, then share with a friend. Full guide + where to try authentic bingsu in Waikiki.";
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title,
    description,
    keywords: [
      'how to eat bingsu', 'how do you eat bingsu', 'bingsu eating guide',
      'how to eat bingsu in korea', 'how to eat patbingsu', 'bingsu spoon',
      'eating bingsu the right way', 'bingsu etiquette', 'bingsu mix or scoop',
      '빙수 먹는 법', 'ビンス 食べ方', '雪冰 吃法',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/how-to-eat-bingsu`,
      siteName: 'Kona Coffee Donut',
      title, description,
      images: [{ url: '/images/blog/how-to-eat-bingsu.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/how-to-eat-bingsu.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/how-to-eat-bingsu`,
      languages: {
        'en-US': `${siteUrl}/en/blog/how-to-eat-bingsu`,
        'ja-JP': `${siteUrl}/ja/blog/how-to-eat-bingsu`,
        'ko-KR': `${siteUrl}/ko/blog/how-to-eat-bingsu`,
        'zh-CN': `${siteUrl}/zh/blog/how-to-eat-bingsu`,
        'x-default': `${siteUrl}/en/blog/how-to-eat-bingsu`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
