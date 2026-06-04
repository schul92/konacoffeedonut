import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Best Mochi Donuts in Waikiki (2026): 24 Fresh Rice-Flour Flavors',
    description:
      'Where to get the best mochi donuts in Waikiki — fresh rice-flour pon-de-ring donuts, crispy outside and chewy inside, in 24 flavors. On Kalākaua Ave, paired with 100% Kona coffee. Open 7 AM–9 PM.',
  },
  ja: {
    title: 'ワイキキで人気のモチドーナツ｜米粉の本格24フレーバー (2026)',
    description:
      'ワイキキでモチドーナツを食べるならここ。米粉(もち粉)で作る外はカリッ・中はモチモチのポンデリング系ドーナツが24種類。カラカウア通りで100%コナコーヒーと一緒にどうぞ。7時〜21時営業。',
  },
  ko: {
    title: '와이키키 모찌도넛 맛집｜쌀가루 24가지 맛 (2026)',
    description:
      '와이키키에서 모찌도넛 먹는 곳 — 쌀가루(찹쌀가루)로 만들어 겉은 바삭, 속은 쫄깃한 폰데링 도넛 24가지 맛. 칼라카우아 애비뉴에서 100% 코나커피와 함께 즐기세요. 오전 7시–오후 9시 영업.',
  },
  zh: {
    title: '威基基最好吃的麻糬甜甜圈｜米粉24种口味 (2026)',
    description:
      '在威基基哪里能吃到最好的麻糬甜甜圈？用米粉(糯米粉)制作、外酥内Q的pon-de-ring甜甜圈，共24种口味。位于卡拉卡瓦大道，可搭配100%科纳咖啡。营业时间7点–21点。',
  },
  es: {
    title: 'Mejores Mochi Donuts en Waikiki (2026): 24 Sabores de Harina de Arroz',
    description:
      'Dónde comer los mejores mochi donuts en Waikiki — donas pon-de-ring de harina de arroz, crujientes por fuera y masticables por dentro, en 24 sabores. En Kalākaua Ave con café 100% Kona. Abierto 7 AM–9 PM.',
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
    es: 'es_ES',
  };

  return {
    title: t.title,
    description: t.description,
    keywords: [
      'best mochi donuts waikiki', 'mochi donuts waikiki', 'mochi donuts near me',
      'mochi donuts honolulu', 'pon de ring waikiki', 'rice flour donuts hawaii',
      'mochi donut flavors', 'ube mochi donut waikiki', 'chewy donuts waikiki',
      'モチドーナツ ワイキキ', 'ポンデリング ハワイ',
      '모찌도넛 와이키키', '와이키키 도넛 맛집', '麻糬甜甜圈 威基基',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/best-mochi-donuts-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/best-mochi-donuts-waikiki.jpeg',
          width: 1200,
          height: 675,
          alt: 'Best mochi donuts in Waikiki — fresh rice-flour pon-de-ring donuts in ube, matcha, cookies and creme, and more',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/best-mochi-donuts-waikiki.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/best-mochi-donuts-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/best-mochi-donuts-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/best-mochi-donuts-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/best-mochi-donuts-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/best-mochi-donuts-waikiki`,
        'es-ES': `${siteUrl}/es/blog/best-mochi-donuts-waikiki`,
        'x-default': `${siteUrl}/en/blog/best-mochi-donuts-waikiki`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function BestMochiDonutsWaikikiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
