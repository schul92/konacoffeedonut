import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Shaved Ice in Korean: Bingsu (빙수) — Meaning, Pronunciation & Where to Try It (2026)',
    description:
      'Shaved ice in Korean is called bingsu (빙수), pronounced "BING-soo" — literally "ice water." Learn what bingsu means, bingsu vs bingsoo spelling, key menu words like patbingsu, how to order in Korean, and where to try real Korean bingsu in Waikiki.',
  },
  ja: {
    title: '韓国語でかき氷は「ビンス（빙수）」— 意味・発音・注文フレーズまで（2026年版）',
    description:
      '韓国のかき氷は「ビンス（빙수 / bingsu）」。氷＋水に由来する言葉の意味、発音、パッピンスなどメニューの読み方、韓国語での注文フレーズ、ワイキキで本場のビンスが味わえるお店まで解説します。',
  },
  ko: {
    title: '빙수 영어로? Korean Shaved Ice — 뜻·유래·외국인에게 소개하는 법 (2026)',
    description:
      '빙수는 영어로 "Korean shaved ice", 고유명사로는 bingsu입니다. 빙수라는 단어의 뜻과 유래, bingsu와 bingsoo 표기 차이, 외국인 친구에게 소개하는 표현, 와이키키에서 빙수 파는 곳까지 정리했습니다.',
  },
  zh: {
    title: '刨冰的韩语怎么说？雪冰（빙수/Bingsu）的含义、发音与点单用语（2026）',
    description:
      '刨冰的韩语是빙수（bingsu），中文称"雪冰"，字面意思是"冰水"。详解bingsu的含义与发音、bingsu与bingsoo的写法区别、红豆雪冰等菜单词汇、韩语点单句，以及在威基基哪里能吃到正宗韩式雪冰。',
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
      'shaved ice in korean', 'what is shaved ice in korean', 'korean shaved ice name',
      'korean shaved ice', 'bingsu meaning', 'what does bingsu mean',
      'bingsu pronunciation', 'how to pronounce bingsu', 'bingsu vs bingsoo',
      'bingsu in korean', 'bingsu', 'bingsoo', 'patbingsu meaning',
      'korean shaved ice waikiki', 'bingsu waikiki',
      '빙수 영어로', '빙수 뜻', 'かき氷 韓国語', 'ビンス 意味', '刨冰 韩语', '雪冰 意思',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/shaved-ice-in-korean`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/what-is-bingsu.png',
          width: 1200,
          height: 630,
          alt: 'Shaved Ice in Korean - Bingsu (빙수) Meaning and Pronunciation',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/what-is-bingsu.png'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/shaved-ice-in-korean`,
      languages: {
        'en-US': `${siteUrl}/en/blog/shaved-ice-in-korean`,
        'ja-JP': `${siteUrl}/ja/blog/shaved-ice-in-korean`,
        'ko-KR': `${siteUrl}/ko/blog/shaved-ice-in-korean`,
        'zh-CN': `${siteUrl}/zh/blog/shaved-ice-in-korean`,
        'x-default': `${siteUrl}/en/blog/shaved-ice-in-korean`,
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

export default function ShavedIceInKoreanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
