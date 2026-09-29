import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Malasada vs Mochi Donut in Waikiki: Which Should You Try First?',
    ja: 'マラサダ vs モチドーナツ | Kona Coffee Donut',
    ko: '말라사다 vs 모치도넛 | Kona Coffee Donut',
    zh: '玛拉萨达 vs 麻糬甜甜圈 | Kona Coffee Donut',
    es: 'Malasada vs Mochi Donut | Kona Coffee Donut',
  };
  const descriptions: Record<string, string> = {
    en: "Visiting Waikiki and torn between malasadas and mochi donuts? A side-by-side guide to flavor, texture, and where to try both at Kona Coffee Donut on Kalākaua Ave.",
    ja: 'ハワイで愛される2大ドーナツを徹底比較。ワイキキで滞在中、マラサダとモチドーナツのどちらを選ぶべきか迷う方へ。同じ「ドーナツ」と呼ばれていても、まったく別物。',
    ko: '하와이의 두 명물 도넛 비교. 하와이 여행 중 말라사다와 모치도넛 중 무엇을 먹을지 고민이라면. 둘 다 도넛이라 부르지만 완전히 다른 디저트입니다.',
    zh: '夏威夷两大甜甜圈对比。在威基基不知道选哪个甜甜圈？玛拉萨达和麻糬甜甜圈虽然都叫"donut"，但完全是两种甜点。',
    es: 'Los dos donuts más famosos de Hawái comparados. ¿Visitas Waikiki y dudas entre malasadas y mochi donuts?',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title,
    description,
    keywords: [
      'malasada vs mochi donut',
      'malasada waikiki',
      'mochi donut waikiki',
      'best donut waikiki',
      'where to try malasada hawaii',
      'best mochi donuts hawaii',
      'hawaiian donuts comparison',
      'malasada hawaii guide',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/malasada-vs-mochi-donut-waikiki`,
      siteName: 'Kona Coffee Donut',
      title,
      description,
      images: [{ url: '/images/blog/malasada-vs-mochi-donut-waikiki.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/malasada-vs-mochi-donut-waikiki.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/malasada-vs-mochi-donut-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/malasada-vs-mochi-donut-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/malasada-vs-mochi-donut-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/malasada-vs-mochi-donut-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/malasada-vs-mochi-donut-waikiki`,
        'x-default': `${siteUrl}/en/blog/malasada-vs-mochi-donut-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
