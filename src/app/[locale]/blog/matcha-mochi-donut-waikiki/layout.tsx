import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Matcha Mochi Donut in Waikiki (2026): Where to Get the Green One',
    description: 'Craving a matcha mochi donut in Waikiki? Get a chewy rice-flour pon-de-ring with real matcha glaze + 100% Kona coffee at Kona Coffee Donut?, ~5 min from the beach.',
  },
  ja: {
    title: 'ワイキキの抹茶モチドーナツ（2026）：あの緑のドーナツはどこで買える？',
    description: 'ワイキキで抹茶モチドーナツを探すなら。本格抹茶グレーズのもちもち米粉ポンデリング＋100%コナコーヒーをKona Coffee Donut?で。ビーチから徒歩約5分。',
  },
  ko: {
    title: '와이키키 말차 모찌 도넛 (2026): 그 초록 도넛, 어디서 먹지?',
    description: '와이키키에서 말차 모찌 도넛이 당긴다면? 진짜 말차 글레이즈를 입힌 쫀득한 쌀가루 폰데링과 100% 코나 커피를 Kona Coffee Donut?에서. 해변에서 도보 약 5분.',
  },
  zh: {
    title: '威基基抹茶麻糬甜甜圈（2026）：那颗绿色的去哪买？',
    description: '在威基基想吃抹茶麻糬甜甜圈？到 Kona Coffee Donut? 品尝裹有正宗抹茶糖霜的Q弹米粉Pon-de-ring，搭配100%科纳咖啡，距海滩约5分钟。',
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
      'matcha mochi donut', 'matcha donut waikiki', 'matcha mochi donut hawaii',
      'green tea donut waikiki', 'matcha mochi donut waikiki', 'matcha donut hawaii',
      'mochi donut waikiki', 'mochi donut hawaii', 'pon de ring waikiki',
      'matcha donut honolulu', 'green tea mochi donut', 'kona coffee donut',
      'matcha glaze donut', 'best matcha donut waikiki', 'matcha donut near me',
      '抹茶ドーナツ', 'モチドーナツ', '말차 도넛', '모찌 도넛', '抹茶麻糬甜甜圈',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/matcha-mochi-donut-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/matcha-mochi-donut-waikiki.jpeg',
          width: 1200,
          height: 630,
          alt: 'Matcha mochi donut in Waikiki — chewy pon-de-ring with real matcha glaze',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/matcha-mochi-donut-waikiki.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/matcha-mochi-donut-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/matcha-mochi-donut-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/matcha-mochi-donut-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/matcha-mochi-donut-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/matcha-mochi-donut-waikiki`,
        'x-default': `${siteUrl}/en/blog/matcha-mochi-donut-waikiki`,
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

export default function MatchaMochiDonutWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
