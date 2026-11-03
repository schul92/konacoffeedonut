import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';
const slug = 'what-is-lilikoi';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'What Is Lilikoi? Hawaii’s Passion Fruit (+ Where to Try It)',
    ja: 'リリコイとは？ハワイのパッションフルーツと味わえる店 | Kona Coffee Donut',
    ko: '릴리코이란? 하와이 패션프루트와 맛볼 수 있는 곳 | Kona Coffee Donut',
    zh: 'Lilikoi是什么？夏威夷百香果与品尝地点 | Kona Coffee Donut',
    es: '¿Qué es el lilikoi? La maracuyá de Hawái y dónde probarla',
  };
  const descriptions: Record<string, string> = {
    en: 'Lilikoi is the Hawaiian name for passion fruit: tart, sweet, tropical. Taste it in Waikiki: lilikoi lemonade $8.95, lilikoi matcha $9.95, Paradise Lilikoi bingsu $12.95.',
    ja: 'リリコイはパッションフルーツのハワイ名。甘酸っぱいトロピカルな味。ワイキキでリリコイレモネード$8.95、リリコイ抹茶$9.95、パラダイスリリコイ$12.95。',
    ko: '릴리코이는 패션프루트의 하와이 이름. 새콤달콤한 열대 맛. 와이키키에서 릴리코이 레모네이드 $8.95, 릴리코이 말차 $9.95, 파라다이스 릴리코이 $12.95.',
    zh: 'Lilikoi是百香果的夏威夷叫法，酸甜热带风味。在威基基可尝百香果柠檬水$8.95、百香果抹茶$9.95、Paradise Lilikoi刨冰$12.95。',
    es: 'Lilikoi es la maracuyá en Hawái. Pruébala en Waikiki: limonada $8.95, matcha $9.95, bingsu Paradise Lilikoi $12.95.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'what is lilikoi',
      'lilikoi',
      'lilikoi passion fruit',
      'lilikoi hawaii',
      'lilikoi waikiki',
      'passion fruit waikiki',
      'lilikoi lemonade',
      'リリコイ とは',
      '릴리코이',
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
