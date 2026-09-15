import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';
const slug = 'what-is-ube-waikiki';
const image = '/images/blog/what-is-ube-waikiki.jpeg';

const meta = {
  en: {
    title: 'What Is Ube? Flavor, Ube vs Taro & Where to Try It in Waikiki',
    description:
      'What is ube? A Filipino purple yam — not taro, not sweet potato — with a nutty vanilla-coconut flavor. Where to try ube donuts, bingsu and lattes in Waikiki.',
  },
  ja: {
    title: 'ウベとは？紫芋との違い・味・ワイキキで食べられる店',
    description:
      'ウベ（ube）はフィリピン原産の紫色のヤムイモ。タロやサツマイモとは別物で、バニラとココナッツのような甘い味。ハワイで人気の理由と、ワイキキでウベドーナツ・ビンス・ラテを味わえる店を紹介。',
  },
  ko: {
    title: '우베란? 타로와의 차이·맛·와이키키에서 먹을 수 있는 곳',
    description:
      '우베(ube)는 필리핀산 보라색 참마. 타로도 고구마도 아니며 바닐라·코코넛 같은 고소한 단맛이 특징. 하와이에서 인기인 이유와 와이키키에서 우베 도넛·빙수·라떼를 맛볼 수 있는 곳.',
  },
  zh: {
    title: '什么是Ube（紫山药）？与香芋的区别、味道及威基基哪里能吃到',
    description:
      'Ube是菲律宾的紫山药，不是香芋也不是紫薯，味道像香草加椰子的坚果甜香。为什么夏威夷这么爱ube，以及在威基基哪里能尝到ube甜甜圈、雪冰和拿铁。',
  },
  es: {
    title: '¿Qué es el ube? El ñame morado explicado y dónde probarlo en Waikiki',
    description:
      'El ube es un ñame morado de Filipinas — no es taro ni camote — con sabor a vainilla, coco y pistacho. Por qué Hawái lo adora y dónde probar donas, bingsu y lattes de ube en Waikiki.',
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
      'what is ube', 'ube flavor', 'ube dessert hawaii', 'ube donut waikiki',
      'ube vs taro', 'what does ube taste like', 'ube latte waikiki', 'ube bingsu', 'purple yam',
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
