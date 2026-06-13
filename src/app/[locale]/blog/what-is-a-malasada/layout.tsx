import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'What Is a Malasada? Hawaii\'s Famous Portuguese Donut Explained (2026 Guide)',
    description: 'A malasada is a Portuguese fried dough — eggy yeast dough, deep-fried, no hole, rolled in sugar. Learn its Hawaii history, fillings like haupia, and where to get fresh hot malasadas in Waikiki.',
  },
  ja: {
    title: 'マラサダとは？ハワイ名物ポルトガル発祥の揚げドーナツを解説（2026年版）',
    description: 'マラサダとは、ポルトガル発祥の揚げパン。卵たっぷりの生地を穴なしで揚げ、グラニュー糖をまぶしたハワイの名物スイーツ。ハウピアなどのフィリングやワイキキで揚げたてを味わえる場所までご案内します。',
  },
  ko: {
    title: '말라사다란? 하와이 명물 포르투갈식 도넛 완벽 가이드 (2026)',
    description: '말라사다는 포르투갈에서 온 튀김 도넛으로, 달걀이 풍부한 반죽을 구멍 없이 튀겨 설탕에 굴린 하와이 대표 간식입니다. 하우피아 같은 속재료와 와이키키에서 갓 튀긴 말라사다를 맛볼 수 있는 곳까지 알려드립니다.',
  },
  zh: {
    title: '什么是马拉萨达(Malasada)？夏威夷著名葡式甜甜圈图文解析（2026）',
    description: '马拉萨达是源自葡萄牙的炸面团——蛋香浓郁的酵母面团、油炸无孔、裹满砂糖。了解它的夏威夷历史、haupia等内馅，以及在威基基哪里能吃到新鲜热腾腾的马拉萨达。',
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
      'what is a malasada', 'malasada', 'portuguese donut', 'malasada hawaii',
      'malasada vs donut', 'haupia malasada', 'types of malasada',
      'portuguese fried dough', 'malasada waikiki', 'malasada honolulu',
      'leonards malasada', 'malasada day', 'malasada filling',
      'hawaiian donut', 'malasada near me',
      'マラサダ', 'マラサダとは', '말라사다', '하우피아', '葡式甜甜圈', '马拉萨达',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/what-is-a-malasada`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/what-is-a-malasada.jpeg',
          width: 1200,
          height: 630,
          alt: 'What is a Malasada - Hawaii Portuguese Donut Guide',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/what-is-a-malasada.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/what-is-a-malasada`,
      languages: {
        'en-US': `${siteUrl}/en/blog/what-is-a-malasada`,
        'ja-JP': `${siteUrl}/ja/blog/what-is-a-malasada`,
        'ko-KR': `${siteUrl}/ko/blog/what-is-a-malasada`,
        'zh-CN': `${siteUrl}/zh/blog/what-is-a-malasada`,
        'x-default': `${siteUrl}/en/blog/what-is-a-malasada`,
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

export default function WhatIsAMalasadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
