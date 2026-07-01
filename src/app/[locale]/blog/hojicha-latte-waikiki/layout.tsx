import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Hojicha Latte in Waikiki (2026): Roasted Green Tea, Benefits & Where to Try It',
    description: 'What is a hojicha latte? Learn about roasted green tea, its benefits, why it\'s naturally low in caffeine, and where to try one fresh in Waikiki — hot or iced, $8.95.',
  },
  ja: {
    title: 'ワイキキのほうじ茶ラテ（2026）｜焙じ緑茶・効能・味わえる場所',
    description: 'ほうじ茶ラテとは？焙じた緑茶とその効能、カフェインが少ない理由、そしてワイキキで淹れたてを味わえる場所をご紹介。ホットもアイスも、$8.95。',
  },
  ko: {
    title: '와이키키 호지차 라떼 (2026)｜볶은 녹차, 효능, 마실 수 있는 곳',
    description: '호지차 라떼란? 볶은 녹차와 그 효능, 카페인이 적은 이유, 그리고 와이키키에서 갓 만든 한 잔을 맛볼 수 있는 곳을 소개합니다. 핫이든 아이스든, $8.95.',
  },
  zh: {
    title: '威基基焙茶拿铁（2026）：烘焙绿茶、功效与品尝地点',
    description: '什么是焙茶拿铁？了解烘焙绿茶及其功效、为何天然低咖啡因，以及在威基基品尝现做焙茶拿铁的地方——冷热皆有，$8.95。',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const t = meta[locale as keyof typeof meta] || meta.en;

  const localeMap: Record<string, string> = {
    en: 'en_US',
    ja: 'ja_JP',
    ko: 'ko_KR',
    zh: 'zh_CN',
  };

  return {
    title: t.title,
    description: t.description,
    keywords: [
      'hojicha latte', 'hojicha benefits', 'hojicha caffeine', 'what is hojicha',
      'hojicha near me', 'roasted green tea latte', 'hojicha waikiki',
      'hojicha latte waikiki', 'is hojicha caffeine free', 'what does hojicha taste like',
      'hojicha vs matcha', 'roasted green tea', 'hojicha tea', 'low caffeine latte',
      'hojicha latte honolulu', 'green tea latte waikiki',
      'ほうじ茶ラテ', 'ほうじ茶 効能', 'ワイキキ ほうじ茶', '호지차 라떼', '焙茶拿铁',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/hojicha-latte-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/hojicha-latte-waikiki.jpeg',
          width: 1200,
          height: 630,
          alt: 'Hojicha Latte in Waikiki - Roasted Green Tea, Benefits & Where to Try It',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/hojicha-latte-waikiki.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/hojicha-latte-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/hojicha-latte-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/hojicha-latte-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/hojicha-latte-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/hojicha-latte-waikiki`,
        'x-default': `${siteUrl}/en/blog/hojicha-latte-waikiki`,
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

export default function HojichaLatteWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
