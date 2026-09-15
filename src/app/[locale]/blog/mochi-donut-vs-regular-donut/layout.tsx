import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';
const slug = 'mochi-donut-vs-regular-donut';
const image = '/images/blog/mochi-donut-vs-regular-donut.jpeg';

const meta = {
  en: {
    title: "Mochi Donut vs Regular Donut: What's the Difference? (Waikiki)",
    description:
      'Mochi donut vs regular donut: rice flour vs wheat dough, chewy vs fluffy, the 8-ball ring, sweetness and freshness — plus where to try both in Waikiki.',
  },
  ja: {
    title: 'モチドーナツと普通のドーナツの違い｜ポンデリング型の食感解説（ワイキキ）',
    description:
      '米粉 vs 小麦粉、もちもち vs ふわふわ、8玉リング vs リング型。モチドーナツと普通のドーナツ・マラサダの違いを解説し、ワイキキで毎朝揚げたてを食べ比べできる店を紹介。',
  },
  ko: {
    title: '모찌도넛 vs 일반 도넛 차이 | 찹쌀도넛 식감 설명 (와이키키)',
    description:
      '찹쌀가루 vs 밀가루, 쫀득 vs 폭신, 8구슬 링 vs 일반 링. 모찌도넛과 일반 도넛·말라사다의 차이를 정리하고, 와이키키에서 매일 아침 갓 튀긴 둘을 비교할 수 있는 곳을 소개합니다.',
  },
  zh: {
    title: '麻糬甜甜圈和普通甜甜圈的区别｜Q弹口感科普（威基基）',
    description:
      '糯米粉 vs 小麦粉，Q弹 vs 松软，8球环 vs 普通圆环。解析麻糬甜甜圈与普通甜甜圈、马拉萨达的区别，并介绍威基基每天现炸、可一次尝遍的店。',
  },
  es: {
    title: 'Dona de mochi vs dona normal: ¿cuál es la diferencia? (Waikiki)',
    description:
      'Dona de mochi vs dona normal: harina de arroz vs trigo, chiclosa vs esponjosa, anillo de 8 bolitas, dulzor y frescura — y dónde probar ambas recién hechas en Waikiki.',
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
      'mochi donut vs regular donut', 'what is a mochi donut', 'why are mochi donuts chewy',
      'mochi donut calories', 'mochi donut vs malasada', 'pon de ring donut',
      'mochi donuts waikiki', 'glutinous rice flour donut', 'モチドーナツ 違い',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/${slug}`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      publishedTime: '2026-09-15T00:00:00+00:00',
      images: [{ url: image, width: 1200, height: 675, alt: t.title }],
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
