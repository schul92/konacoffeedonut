import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';
const slug = 'malasada-vs-donut';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Malasada vs Donut: What Is the Difference?',
    ja: 'マラサダとドーナツの違いは？形・生地・食べ方を解説',
    ko: '말라사다 vs 도넛: 차이점 한눈에 정리',
    zh: '马拉萨达和甜甜圈有什么区别？',
    es: 'Malasada vs donut: ¿cuál es la diferencia?',
  };
  const descriptions: Record<string, string> = {
    en: 'A malasada is a Portuguese-Hawaiian fried dough: egg-rich, no hole, rolled in sugar, not glazed. How it differs from a donut, and where to try one in Waikiki.',
    ja: 'マラサダは卵の多い生地を穴なしで揚げ、砂糖をまぶしたポルトガル発祥のハワイ名物。ドーナツとの違いと、ワイキキで食べられる場所を紹介します。',
    ko: '말라사다는 달걀이 많이 들어간 반죽을 구멍 없이 튀겨 설탕에 굴린 하와이 명물입니다. 도넛과의 차이, 와이키키에서 먹을 수 있는 곳을 정리했습니다.',
    zh: '马拉萨达是源自葡萄牙的夏威夷油炸甜点：鸡蛋含量高、没有洞、裹砂糖而不是淋糖霜。和甜甜圈的区别，以及在威基基哪里能吃到。',
    es: 'La malasada es una masa frita portuguesa-hawaiana: rica en huevo, sin agujero y rebozada en azúcar. En qué se diferencia de un donut y dónde probarla en Waikiki.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'malasada vs donut',
      'malasadas vs donuts',
      'difference between malasada and donut',
      'is a malasada a donut',
      'what is a malasada',
      'malasadas waikiki',
      'malasadas near me',
      'hawaiian donut',
    ],
    openGraph: {
      type: 'article', locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/${slug}`,
      siteName: 'Kona Coffee Donut', title, description,
      images: [{ url: `/images/blog/${slug}.jpeg`, width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [`/images/blog/${slug}.jpeg`] },
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

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
