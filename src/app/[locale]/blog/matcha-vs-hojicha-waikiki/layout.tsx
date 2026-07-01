import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Matcha vs Hojicha: What\'s the Difference? (Waikiki 2026)',
    description: 'Matcha vs hojicha explained — vibrant, grassy matcha vs roasted, low-caffeine hojicha. Compare color, flavor, and caffeine, and find where to try both in Waikiki.',
  },
  ja: {
    title: '抹茶とほうじ茶の違いとは？（ワイキキ 2026）',
    description: '抹茶とほうじ茶をわかりやすく比較——鮮やかで青々しい抹茶と、焙煎して低カフェインのほうじ茶。色・味・カフェインの違い、そしてワイキキで両方を味わえる場所をご紹介。',
  },
  ko: {
    title: '말차 vs 호지차: 무엇이 다를까? (와이키키 2026)',
    description: '말차와 호지차를 명확하게 비교 — 선명하고 풀향 가득한 말차 vs 로스팅한 저카페인 호지차. 색·맛·카페인 차이와 와이키키에서 둘 다 맛보는 곳을 소개합니다.',
  },
  zh: {
    title: '抹茶 vs 焙茶：有什么区别？（威基基 2026）',
    description: '清晰对比抹茶与焙茶——鲜绿草香的抹茶 vs 烘焙低咖啡因的焙茶。比较颜色、风味与咖啡因，并找到在威基基同时尝到两款的地方。',
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
      'matcha vs hojicha', 'what is hojicha', 'hojicha benefits', 'hojicha latte',
      'hojicha waikiki', 'roasted green tea', 'hojicha vs matcha', 'matcha or hojicha',
      'hojicha caffeine', 'low caffeine latte waikiki', 'matcha latte waikiki',
      'japanese green tea waikiki', 'matcha vs hojicha waikiki', 'hojicha near waikiki beach',
      'matcha and hojicha lattes',
      '抹茶 ほうじ茶', 'ほうじ茶とは', 'ほうじ茶ラテ', '호지차', '말차 호지차', '焙茶', '抹茶 焙茶',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/matcha-vs-hojicha-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/matcha-vs-hojicha-waikiki.jpeg',
          width: 1200,
          height: 630,
          alt: 'Matcha vs Hojicha - What\'s the Difference? Two Japanese Green Teas in Waikiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/matcha-vs-hojicha-waikiki.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/matcha-vs-hojicha-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/matcha-vs-hojicha-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/matcha-vs-hojicha-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/matcha-vs-hojicha-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/matcha-vs-hojicha-waikiki`,
        'x-default': `${siteUrl}/en/blog/matcha-vs-hojicha-waikiki`,
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

export default function MatchaVsHojichaWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
