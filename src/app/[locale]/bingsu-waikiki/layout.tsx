import type { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const metaContent: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Best Bingsu in Waikiki | Korean Shaved Ice Hawaii - Kona Coffee Donut',
    description:
      'Try the best bingsu in Waikiki at Kona Coffee Donut. Authentic Korean shaved ice with premium milk ice, injeolmi, mango, strawberry, matcha & more. The top Korean dessert spot in Honolulu, steps from Waikiki Beach.',
  },
  ja: {
    title: 'ワイキキで最高のビンス | 韓国かき氷ハワイ - コナコーヒードーナツ',
    description:
      'ワイキキで本格的な韓国ビンス（かき氷）を。ミルク氷ベースのきな粉・マンゴー・いちご・抹茶など豊富なメニュー。日本でも大人気の韓国スイーツをハワイで楽しめます。',
  },
  ko: {
    title: '와이키키 최고의 빙수 | 하와이 한국 빙수 전문 - 코나커피도넛',
    description:
      '와이키키에서 만나는 정통 한국 빙수. 우유 얼음 베이스에 인절미, 망고, 딸기, 오레오, 녹차, 팥빙수까지. 호놀룰루 최고의 한국 디저트를 와이키키 비치 근처에서 즐기세요.',
  },
  zh: {
    title: '威基基最好的韩式刨冰 | 夏威夷韩式甜品 - 科纳咖啡甜甜圈',
    description:
      '在威基基品尝正宗韩式刨冰Bingsu。牛奶冰底，提供年糕、芒果、草莓、奥利奥、抹茶和经典红豆冰等多种口味。火奴鲁鲁最佳韩式甜品店。',
  },
  es: {
    title: 'Mejor Bingsu en Waikiki | Hielo Raspado Coreano Hawaii - Kona Coffee Donut',
    description:
      'Prueba el mejor bingsu en Waikiki en Kona Coffee Donut. Auténtico hielo raspado coreano con helado de leche premium y más de 6 sabores. El mejor postre coreano en Honolulu.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = metaContent[locale] || metaContent.en;

  const localeMap: Record<string, string> = {
    en: 'en_US',
    ja: 'ja_JP',
    ko: 'ko_KR',
    zh: 'zh_CN',
    es: 'es_ES',
  };

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      'bingsu waikiki',
      'bingsu hawaii',
      'korean shaved ice waikiki',
      'best bingsu honolulu',
      'korean dessert waikiki',
      'bingsu near me',
      'patbingsu hawaii',
      'korean shaved ice honolulu',
      'milk shaved ice waikiki',
      'injeolmi bingsu hawaii',
      'mango bingsu waikiki',
      'ワイキキ ビンス',
      '와이키키 빙수',
      '威基基刨冰',
      'bingsu honolulu',
    ],
    openGraph: {
      type: 'website',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/bingsu-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Best Bingsu in Waikiki - Korean Shaved Ice at Kona Coffee Donut',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/bingsu-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/bingsu-waikiki`,
        'ja-JP': `${siteUrl}/ja/bingsu-waikiki`,
        'ko-KR': `${siteUrl}/ko/bingsu-waikiki`,
        'zh-CN': `${siteUrl}/zh/bingsu-waikiki`,
        'es-ES': `${siteUrl}/es/bingsu-waikiki`,
        'x-default': `${siteUrl}/en/bingsu-waikiki`,
      },
    },
  };
}

export default function BingsuWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
