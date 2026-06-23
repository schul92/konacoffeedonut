import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Strawberry Matcha Latte in Waikiki (2026): The Pink-and-Green Drink Everyone Wants',
    description: 'The viral pink-and-green strawberry matcha latte has arrived in Waikiki. What it is, why it works, and where to get one — Kona Coffee Donut?\'s Strawberry Matcha ($10.95), 5 min from the beach.',
  },
  ja: {
    title: 'ワイキキのストロベリー抹茶ラテ（2026）｜みんなが欲しがるピンク＆グリーンの一杯',
    description: 'バズったピンク＆グリーンのストロベリー抹茶ラテがワイキキに。その正体、相性の理由、買える場所まで — Kona Coffee Donut? のストロベリー抹茶（$10.95）、ビーチから徒歩5分。',
  },
  ko: {
    title: '와이키키 딸기 말차 라떼 (2026) | 모두가 찾는 핑크 앤 그린 한 잔',
    description: '바이럴 된 핑크 앤 그린 딸기 말차 라떼가 와이키키에 왔습니다. 정체, 어울리는 이유, 사는 곳까지 — Kona Coffee Donut? 딸기 말차($10.95), 해변에서 도보 5분.',
  },
  zh: {
    title: '威基基草莓抹茶拿铁（2026）｜人人都想要的粉绿一杯',
    description: '走红的粉绿草莓抹茶拿铁来到威基基。它是什么、为何好喝、在哪能买到——Kona Coffee Donut? 草莓抹茶（$10.95），距海滩步行5分钟。',
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
      'strawberry matcha', 'strawberry matcha latte', 'strawberry matcha latte waikiki',
      'strawberry matcha near me', 'pink matcha latte', 'strawberry matcha waikiki',
      'matcha waikiki', 'matcha latte hawaii', 'strawberry matcha honolulu',
      'pink and green latte', 'iced strawberry matcha', 'best matcha waikiki',
      'matcha near waikiki beach', 'strawberry matcha kona coffee donut',
      'ストロベリー抹茶', 'いちご抹茶ラテ', '딸기 말차', '딸기 말차 라떼', '草莓抹茶', '草莓抹茶拿铁',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/strawberry-matcha-latte-waikiki`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/images/blog/strawberry-matcha-latte-waikiki.jpeg',
          width: 1200,
          height: 630,
          alt: 'Strawberry Matcha Latte in Waikiki - the pink-and-green layered drink',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/images/blog/strawberry-matcha-latte-waikiki.jpeg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/strawberry-matcha-latte-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/strawberry-matcha-latte-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/strawberry-matcha-latte-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/strawberry-matcha-latte-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/strawberry-matcha-latte-waikiki`,
        'x-default': `${siteUrl}/en/blog/strawberry-matcha-latte-waikiki`,
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

export default function StrawberryMatchaLatteWaikikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
