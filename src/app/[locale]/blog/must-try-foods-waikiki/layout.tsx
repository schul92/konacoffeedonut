import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';
const slug = 'must-try-foods-waikiki';
const image = '/images/blog/must-try-foods-waikiki.jpg';

const meta = {
  en: {
    title: "10 Must-Try Foods in Waikiki (2026 Local's List): Malasadas, Poke, Shave Ice & More",
    description:
      'The 10 foods you actually need to eat in Waikiki — malasadas, poke, plate lunch, garlic shrimp, shave ice, bingsu, mochi donuts, 100% Kona coffee, açaí bowls & Korean corn dogs — with where to get each near the beach.',
  },
  ja: {
    title: 'ワイキキで絶対食べたい10品（2026年ローカル版）：マラサダ・ポケ・シェイブアイスほか',
    description:
      'マラサダ、ポケ、プレートランチ、ガーリックシュリンプ、シェイブアイス、ビンス、モチドーナツ、100%コナコーヒー、アサイーボウル、韓国コーンドッグ。ビーチ徒歩圏で食べられる店つき。',
  },
  ko: {
    title: '와이키키 필수 음식 10가지 (2026 로컬 리스트): 말라사다·포케·셰이브 아이스 외',
    description:
      '말라사다, 포케, 플레이트 런치, 갈릭 쉬림프, 셰이브 아이스, 빙수, 모찌도넛, 100% 코나 커피, 아사이볼, 한국 핫도그 — 비치 도보 거리에서 먹을 수 있는 곳까지.',
  },
  zh: {
    title: '威基基必吃10种美食（2026本地版）：马拉萨达、Poke、刨冰等',
    description:
      '马拉萨达、poke、餐盘午餐、蒜香虾、刨冰、雪冰、麻糬甜甜圈、100%科纳咖啡、巴西莓碗、韩式热狗——附海滩步行可达的店铺。',
  },
  es: {
    title: '10 comidas imperdibles en Waikiki (lista local 2026): malasadas, poke, shave ice y más',
    description:
      'Las 10 comidas que sí hay que probar en Waikiki — malasadas, poke, plate lunch, camarones al ajo, shave ice, bingsu, mochi donuts, café 100% Kona, açaí y corn dogs coreanos — y dónde comerlas cerca de la playa.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = meta[locale as keyof typeof meta] || meta.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title: t.title,
    description: t.description,
    keywords: [
      'must try foods waikiki', 'what to eat in waikiki', 'waikiki food guide', 'best food in waikiki',
      'hawaii must eat', 'waikiki famous food', 'malasadas waikiki', 'poke waikiki', 'shave ice waikiki',
      'bingsu waikiki', 'mochi donuts waikiki', 'kona coffee waikiki', 'korean corn dog waikiki',
      'ワイキキ グルメ', '와이키키 맛집', '威基基 美食',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/${slug}`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      publishedTime: '2026-09-09T00:00:00+00:00',
      images: [{ url: image, width: 1376, height: 768, alt: t.title }],
    },
    twitter: { card: 'summary_large_image', title: t.title, description: t.description, images: [image] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/${slug}`,
      languages: {
        'en-US': `${siteUrl}/en/blog/${slug}`,
        'ja-JP': `${siteUrl}/ja/blog/${slug}`,
        'ko-KR': `${siteUrl}/ko/blog/${slug}`,
        'zh-CN': `${siteUrl}/zh/blog/${slug}`,
        'es-ES': `${siteUrl}/es/blog/${slug}`,
        'x-default': `${siteUrl}/en/blog/${slug}`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
