import type { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const metaContent: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Bingsu in Waikiki & Honolulu: Korean Shaved Ice From $12.95',
    description:
      'Korean bingsu in Waikiki, Honolulu: milk bingsu $15.95 in 7 flavors (ube, mango, strawberry, Kona coffee and more) and Hawaiian bingsu $12.95. 2142 Kalākaua Ave, 7 AM–9 PM.',
  },
  ja: {
    title: 'ワイキキ・ホノルルのビンス｜韓国かき氷 $12.95〜',
    description:
      'ワイキキ（ホノルル）で本格韓国ビンス。ミルクビンス全7種$15.95（ウベ、マンゴー、いちご、コナコーヒーなど）、ハワイアンビンス$12.95。カラカウア通り2142、毎日7時〜21時。',
  },
  ko: {
    title: '와이키키·호놀룰루 빙수 | 한국 빙수 $12.95부터',
    description:
      '와이키키(호놀룰루)에서 즐기는 한국 빙수. 우유 빙수 7가지 $15.95(우베, 망고, 딸기, 코나커피 등), 하와이안 빙수 $12.95. 칼라카우아 2142, 매일 7시–21시.',
  },
  zh: {
    title: '威基基・檀香山韩式刨冰Bingsu｜$12.95起',
    description:
      '在威基基（檀香山）品尝韩式刨冰：牛奶Bingsu 7种口味$15.95（紫山药、芒果、草莓、科纳咖啡等），夏威夷Bingsu $12.95。卡拉考阿大道2142号，每天7点至21点。',
  },
  es: {
    title: 'Bingsu en Waikiki y Honolulu: hielo coreano desde $12.95',
    description:
      'Bingsu coreano en Waikiki, Honolulu: bingsu de leche $15.95 en 7 sabores y bingsu hawaiano $12.95. 2142 Kalākaua Ave, de 7 AM a 9 PM.',
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
      'ube bingsu hawaii',
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
