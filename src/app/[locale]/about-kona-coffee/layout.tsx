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
    ko: '코나커피란? 하와이 코나 커피 특징·등급·맛 (와이키키에서 마시는 곳)',
    zh: '夏威夷科纳咖啡(Kona咖啡)是什么？产地、等级、风味与威基基哪里喝',
    es: 'Sobre el Café Kona | Café Premium de Hawaii',
  };

  const descriptions: Record<string, string> = {
    en: 'Discover why Kona coffee is the world\'s premium Hawaiian coffee. Learn about volcanic soil growing conditions, hand-picked harvesting, and the unique flavor profile that makes Kona coffee special.',
    ja: 'コナコーヒーがなぜ世界最高のハワイアンコーヒーなのかをご紹介。火山土壌での栽培、手摘み収穫、そしてコナコーヒーを特別にするユニークな風味について。',
    ko: '하와이 코나 커피는 빅아일랜드 화산 경사면 30마일에서만 재배되는 희소 원두. 100% 코나와 코나 블렌드(10%)의 차이, 등급, 맛 특징, 그리고 와이키키 칼라카우아 애비뉴에서 100% 코나 커피를 마실 수 있는 곳.',
    zh: '夏威夷科纳(Kona)咖啡只产于大岛火山坡30英里地带。100%科纳与科纳拼配(仅需10%)的区别、等级、风味特点，以及在威基基卡拉卡瓦大道哪里能喝到100%科纳咖啡。',
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
    title: { absolute: `${titles[locale] || titles.en} | Kona Coffee Donut?` },
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
