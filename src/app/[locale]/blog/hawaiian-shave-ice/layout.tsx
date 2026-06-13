import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'What Is Hawaiian Shave Ice? History, Toppings & The Korean Bingsu Upgrade in Waikiki (2026)',
    description: 'Hawaiian shave ice is fluffy snow drenched in tropical syrup — an island icon. Learn its plantation-era history, snow cap & li hing mui, and why Korean bingsu is the creamy premium version we serve in Waikiki.',
  },
  ja: {
    title: 'ハワイアンシェイブアイスとは？歴史・トッピングとワイキキの韓国ビンス進化版（2026）',
    description: 'ハワイアンシェイブアイスは、ふわふわの氷にトロピカルシロップをかけた島のアイコン。プランテーション時代の歴史、スノーキャップやリヒムイを解説し、ワイキキで味わえるクリーミーな韓国ビンス（プレミアム版）までご案内します。',
  },
  ko: {
    title: '하와이안 셰이브 아이스란? 역사·토핑과 와이키키의 한국 빙수 업그레이드 (2026)',
    description: '하와이안 셰이브 아이스는 곱게 간 눈꽃 얼음에 열대 시럽을 듬뿍 뿌린 하와이의 상징. 플랜테이션 시대의 역사, 스노우 캡과 리힝무이를 정리하고, 와이키키에서 즐기는 크리미한 프리미엄 한국 빙수까지 알려드립니다.',
  },
  zh: {
    title: '什么是夏威夷刨冰 (Shave Ice)？历史、配料与威基基的韩式雪冰升级版（2026）',
    description: '夏威夷刨冰是浇满热带糖浆的蓬松雪花冰，是夏威夷的标志。了解它的种植园时代历史、雪盖与话梅，以及为什么我们在威基基供应的韩式雪冰（Bingsu）是更绵密的高端升级版。',
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
      'hawaiian shave ice', 'shave ice', 'what is shave ice', 'shave ice vs snow cone',
      'shave ice hawaii', 'shave ice waikiki', 'shave ice toppings', 'snow cap shave ice',
      'li hing mui', 'rainbow shave ice', 'matsumoto shave ice', 'shave ice history',
      'korean bingsu', 'bingsu waikiki', 'shave ice near me', 'ice cream shave ice',
      'かき氷', 'ハワイアンシェイブアイス', '하와이안 셰이브 아이스', '夏威夷刨冰', '빙수',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/hawaiian-shave-ice`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/hawaiian-shave-ice.jpeg',
          width: 1200,
          height: 630,
          alt: 'What is Hawaiian Shave Ice - History, Toppings & Korean Bingsu Guide',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/hawaiian-shave-ice.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/hawaiian-shave-ice`,
      languages: {
        'en-US': `${siteUrl}/en/blog/hawaiian-shave-ice`,
        'ja-JP': `${siteUrl}/ja/blog/hawaiian-shave-ice`,
        'ko-KR': `${siteUrl}/ko/blog/hawaiian-shave-ice`,
        'zh-CN': `${siteUrl}/zh/blog/hawaiian-shave-ice`,
        'x-default': `${siteUrl}/en/blog/hawaiian-shave-ice`,
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

export default function HawaiianShaveIceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
