import type { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'Menu | Kona Coffee, Mochi Donuts & Hawaiian Shaved Ice Waikiki',
    ja: 'メニュー | コナコーヒー・モチドーナツ・ハワイアンかき氷 ワイキキ',
    ko: '메뉴 | 코나 커피, 모찌 도넛, 하와이안 빙수 와이키키',
    zh: '菜单 | 科纳咖啡、麻糬甜甜圈、夏威夷刨冰 威基基',
    es: 'Menú | Café Kona, Mochi Donuts y Raspado Hawaiano Waikiki',
  };

  const descriptions: Record<string, string> = {
    en: 'Explore our menu: Hawaiian shaved ice, fresh mochi donuts, premium Kona coffee, malasadas, bingsu, acai bowls & Korean corn dogs. Made fresh daily in Waikiki, Honolulu.',
    ja: 'ハワイアンかき氷、モチドーナツ、プレミアムコナコーヒー、マラサダ、ビングス、アサイーボウル、韓国コーンドッグ。ワイキキで毎日新鮮にお作りしています。',
    ko: '하와이안 빙수, 신선한 모찌 도넛, 프리미엄 코나 커피, 말라사다, 빙수, 아사이 볼, 한국 핫도그. 와이키키에서 매일 신선하게 만듭니다.',
    zh: '夏威夷刨冰、新鲜麻糬甜甜圈、优质科纳咖啡、马拉萨达、韩式刨冰、巴西莓碗、韩式热狗。威基基每日新鲜制作。',
    es: 'Explora nuestro menú: raspado hawaiano, mochi donuts frescos, café Kona premium, malasadas, bingsu, bowls de açaí y corn dogs coreanos. Hecho fresco en Waikiki.',
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
      url: `${siteUrl}/${locale}/menu`,
      siteName: 'Kona Coffee Donut',
      locale: localeMap[locale] || 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/menu`,
      languages: {
        'en-US': `${siteUrl}/en/menu`,
        'ja-JP': `${siteUrl}/ja/menu`,
        'ko-KR': `${siteUrl}/ko/menu`,
        'zh-CN': `${siteUrl}/zh/menu`,
        'es-ES': `${siteUrl}/es/menu`,
        'x-default': `${siteUrl}/en/menu`,
      },
    },
  };
}

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
