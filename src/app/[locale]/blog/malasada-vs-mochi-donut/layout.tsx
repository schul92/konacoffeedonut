import type { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

const meta = {
  en: {
    title: 'Malasada vs Mochi Donut: Which Hawaiian Treat Should You Try?',
    description:
      'Malasadas are fluffy Portuguese fried dough rolled in sugar. Mochi donuts use rice flour for a crispy-chewy QQ texture with colorful glazes. Compare both Hawaiian favorites side by side at Kona Coffee Donut in Waikiki.',
  },
  ja: {
    title: 'マラサダ vs モチドーナツ：どちらのハワイスイーツを試すべき？',
    description:
      'マラサダはポルトガル由来のふわふわ揚げドーナツ。モチドーナツはもち米粉で作るサクサクもちもちのQQ食感。ワイキキのコナコーヒードーナツで両方を食べ比べ。',
  },
  ko: {
    title: '말라사다 vs 모찌 도넛: 어떤 하와이 디저트를 먹어볼까?',
    description:
      '말라사다는 포르투갈식 푹신한 튀김 도넛. 모찌 도넛은 쌀가루로 만든 바삭쫄깃 QQ 식감. 와이키키 코나커피도넛에서 두 가지 하와이 인기 디저트를 비교해보세요.',
  },
  zh: {
    title: '马拉萨达 vs 麻糬甜甜圈：哪种夏威夷美食更值得尝试？',
    description:
      '马拉萨达是蓬松的葡萄牙炸面团，裹着糖粉。麻糬甜甜圈用米粉制成，外酥内糯QQ口感。在威基基科纳咖啡甜甜圈店一站式品尝两大夏威夷人气甜点。',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = meta[locale as keyof typeof meta] || meta.en;

  const localeMap: Record<string, string> = {
    en: 'en_US',
    ja: 'ja_JP',
    ko: 'ko_KR',
    zh: 'zh_CN',
  };

  const slug = 'blog/malasada-vs-mochi-donut';

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/${slug}`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Malasada vs Mochi Donut comparison at Kona Coffee Donut Waikiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/${slug}`,
      languages: {
        'en-US': `${siteUrl}/en/${slug}`,
        'ja-JP': `${siteUrl}/ja/${slug}`,
        'ko-KR': `${siteUrl}/ko/${slug}`,
        'zh-CN': `${siteUrl}/zh/${slug}`,
        'x-default': `${siteUrl}/en/${slug}`,
      },
    },
  };
}

export default function MalasadaVsMochiDonutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
