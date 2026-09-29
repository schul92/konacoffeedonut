import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Ube Mochi Donut: Hawaii\'s Most Photogenic Donut (Waikiki 2026)',
    ja: 'ウベモチドーナツ — ハワイで最も映えるドーナツ | Kona Coffee Donut',
    ko: '우베 모치도넛 — 하와이 최고의 비주얼 도넛 | Kona Coffee Donut',
    zh: '紫薯麻糬甜甜圈 — 夏威夷最上镜的甜甜圈 | Kona Coffee Donut',
    es: 'Ube Mochi Donut — El Donut Más Fotogénico de Hawái | Kona Coffee Donut',
  };
  const descriptions: Record<string, string> = {
    en: "What is ube mochi donut? The vibrant purple Filipino-yam-glazed donut taking over Hawaii. Where to try authentic ube mochi donuts in Waikiki. Open 7 AM–9 PM.",
    ja: '鮮やかな紫、もちもち食感、独特の甘さ。ウベはフィリピンの紫芋。鮮やかな紫色と、甘くて土の香りのする独特の風味。もちもちポンデリングと組み合わせると、ハワイで最も写真映えするドーナツに。',
    ko: '선명한 보라색, 쫀득한 식감. 우베는 필리핀 자색 얌. 선명한 보라색과 달콤하면서도 흙내음이 나는 독특한 풍미. 쫀득한 폰데링과 만나면 인스타 최고의 도넛.',
    zh: '鲜艳紫色，Q弹口感。紫薯（Ube）是菲律宾紫山药。鲜艳紫色与独特的香甜土味，加上Q弹波堤，造就夏威夷最上镜的甜甜圈。',
    es: 'Morado vibrante, textura masticable. El ube es ñame morado filipino. Color vibrante, sabor dulce-terroso.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'ube mochi donut', 'ube mochi donut waikiki', 'purple donut hawaii',
      'best ube donut waikiki', 'what is ube', 'ube flavor mochi donut',
      'instagram donut waikiki', 'most photogenic donut hawaii',
    ],
    openGraph: {
      type: 'article', locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/ube-mochi-donut-waikiki`,
      siteName: 'Kona Coffee Donut', title, description,
      images: [{ url: '/images/blog/mochi-donut-flavors-waikiki.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/mochi-donut-flavors-waikiki.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/ube-mochi-donut-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/ube-mochi-donut-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/ube-mochi-donut-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/ube-mochi-donut-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/ube-mochi-donut-waikiki`,
        'x-default': `${siteUrl}/en/blog/ube-mochi-donut-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
