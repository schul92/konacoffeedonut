import type { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'About Kona Coffee | Premium Hawaiian Coffee',
    ja: 'コナコーヒーについて | プレミアムハワイアンコーヒー',
    ko: '코나 커피 소개 | 프리미엄 하와이안 커피',
    zh: '关于科纳咖啡 | 优质夏威夷咖啡',
    es: 'Sobre el Café Kona | Café Premium de Hawaii',
  };

  const descriptions: Record<string, string> = {
    en: 'Discover why Kona coffee is the world\'s premium Hawaiian coffee. Learn about volcanic soil growing conditions, hand-picked harvesting, and the unique flavor profile that makes Kona coffee special.',
    ja: 'コナコーヒーがなぜ世界最高のハワイアンコーヒーなのかをご紹介。火山土壌での栽培、手摘み収穫、そしてコナコーヒーを特別にするユニークな風味について。',
    ko: '코나 커피가 왜 세계 최고의 하와이안 커피인지 알아보세요. 화산 토양 재배, 수작업 수확, 그리고 코나 커피를 특별하게 만드는 독특한 풍미에 대해.',
    zh: '了解为什么科纳咖啡是世界顶级的夏威夷咖啡。火山土壤种植条件、手工采摘以及使科纳咖啡与众不同的独特风味。',
    es: 'Descubre por qué el café Kona es el café premium de Hawaii. Conoce el cultivo en suelo volcánico, la cosecha manual y el perfil de sabor único.',
  };

  const localeMap: Record<string, string> = {
    en: 'en_US',
    ja: 'ja_JP',
    ko: 'ko_KR',
    zh: 'zh_CN',
    es: 'es_ES',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      url: `${siteUrl}/${locale}/about-kona-coffee`,
      siteName: 'Kona Coffee Donut',
      locale: localeMap[locale] || 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/about-kona-coffee`,
      languages: {
        'en-US': `${siteUrl}/en/about-kona-coffee`,
        'ja-JP': `${siteUrl}/ja/about-kona-coffee`,
        'ko-KR': `${siteUrl}/ko/about-kona-coffee`,
        'zh-CN': `${siteUrl}/zh/about-kona-coffee`,
        'es-ES': `${siteUrl}/es/about-kona-coffee`,
        'x-default': `${siteUrl}/en/about-kona-coffee`,
      },
    },
  };
}

export default function AboutKonaCoffeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
