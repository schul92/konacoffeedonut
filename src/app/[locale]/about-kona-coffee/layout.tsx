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
    ko: '하와이 코나 커피 완벽 가이드 | 와이키키 코나커피 & 도넛',
    zh: '夏威夷科纳咖啡风味指南 | 威基基 Kona Coffee Donut',
    es: 'Sobre el Café Kona | Café Premium de Hawaii',
  };

  const descriptions: Record<string, string> = {
    en: 'Discover why Kona coffee is the world\'s premium Hawaiian coffee. Learn about volcanic soil growing conditions, hand-picked harvesting, and the unique flavor profile that makes Kona coffee special.',
    ja: 'コナコーヒーがなぜ世界最高のハワイアンコーヒーなのかをご紹介。火山土壌での栽培、手摘み収穫、そしてコナコーヒーを特別にするユニークな風味について。',
    ko: '하와이 코나 커피의 풍미, 화산 토양 재배, 수작업 수확 스토리를 확인하세요. 와이키키 Kona Coffee Donut의 코나커피 메뉴와 함께 여행 전 필수 정보를 한눈에.',
    zh: '了解夏威夷科纳咖啡风味、火山土壤种植与手工采摘特色。访问威基基 Kona Coffee Donut，查看科纳咖啡菜单与到店信息。',
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
