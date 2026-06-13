import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'What Is a Mochi Donut? The Chewy Pon-de-Ring Taking Over Waikiki (2026 Guide)',
    description: 'A mochi donut is a chewy rice-flour donut with a bouncy "QQ" texture and the iconic pon-de-ring shape. Learn what it is, how it differs from regular donuts — and where to get 24 fresh flavors in Waikiki.',
  },
  ja: {
    title: 'モチドーナツとは？ワイキキで話題のもちもちポン・デ・リングを解説（2026年版）',
    description: 'モチドーナツとは、米粉のもちもち食感が特徴のドーナツ。象徴的なポン・デ・リングの形と「QQ」食感の秘密、普通のドーナツとの違い、そしてワイキキで24種類の作りたてモチドーナツが味わえる場所までご案内します。',
  },
  ko: {
    title: '모찌 도넛이란? 와이키키에서 인기 폭발한 쫄깃 폰데링 (2026 가이드)',
    description: '모찌 도넛은 쌀가루로 만든 쫄깃한 도넛으로, 쫀득쫀득한 식감과 폰데링 모양이 특징입니다. 정체와 일반 도넛과의 차이를 알아보고, 와이키키에서 갓 만든 24가지 모찌 도넛을 맛볼 수 있는 곳을 알려드립니다.',
  },
  zh: {
    title: '什么是麻糬甜甜圈 (Mochi Donut)？风靡威基基的Q弹波提图文解析（2026）',
    description: '麻糬甜甜圈是用米粉制成的Q弹甜甜圈，拥有标志性的波提（pon-de-ring）造型和弹牙嚼劲。了解它是什么、与普通甜甜圈有何不同，以及在威基基哪里能吃到24种新鲜口味。',
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
      'what is a mochi donut', 'mochi donut', 'pon de ring', 'pon-de-ring',
      'mochi donut vs regular donut', 'rice flour donut', 'types of mochi donut',
      'japanese donut', 'mochi donut hawaii', 'mochi donut waikiki',
      'ube mochi donut', 'matcha mochi donut', 'mochi donut history',
      'chewy donut', 'mochi donut near me',
      'モチドーナツ', 'ポンデリング', '모찌 도넛', '폰데링', '麻糬甜甜圈', '波提',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/what-is-a-mochi-donut`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/what-is-a-mochi-donut.jpeg',
          width: 1200,
          height: 630,
          alt: 'What is a Mochi Donut - Chewy Rice Flour Donut Guide',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/what-is-a-mochi-donut.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/what-is-a-mochi-donut`,
      languages: {
        'en-US': `${siteUrl}/en/blog/what-is-a-mochi-donut`,
        'ja-JP': `${siteUrl}/ja/blog/what-is-a-mochi-donut`,
        'ko-KR': `${siteUrl}/ko/blog/what-is-a-mochi-donut`,
        'zh-CN': `${siteUrl}/zh/blog/what-is-a-mochi-donut`,
        'x-default': `${siteUrl}/en/blog/what-is-a-mochi-donut`,
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

export default function WhatIsAMochiDonutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
