import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';
const slug = 'mochi-donut-box-waikiki';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Mochi Donut Box in Waikiki: 3, 6 or 12 (From $11.25)',
    ja: 'ワイキキのモチドーナツボックス｜3個・6個・12個（$11.25〜）',
    ko: '와이키키 모찌도넛 박스 | 3개·6개·12개 ($11.25부터)',
    zh: '威基基麻糬甜甜圈礼盒｜3个・6个・12个（$11.25起）',
    es: 'Caja de mochi donuts en Waikiki: 3, 6 o 12 (desde $11.25)',
  };
  const descriptions: Record<string, string> = {
    en: 'Mochi donut boxes in Waikiki: 3 for $11.25, 6 for $22.50, a dozen for $45. Mix any of 24 flavors, order ahead for pickup. 2142 Kalākaua Ave, 7 AM–9 PM.',
    ja: 'ワイキキのモチドーナツボックス：3個$11.25、6個$22.50、12個$45。24種類から自由に組み合わせ、事前注文も可能。カラカウア通り2142、毎日7時〜21時。',
    ko: '와이키키 모찌도넛 박스: 3개 $11.25, 6개 $22.50, 12개 $45. 24가지 맛을 자유롭게 섞고 미리 주문해 픽업. 칼라카우아 2142, 매일 7시–21시.',
    zh: '威基基麻糬甜甜圈礼盒：3个$11.25，6个$22.50，12个$45。24种口味任意搭配，可提前下单自取。卡拉考阿大道2142号，每天7点至21点。',
    es: 'Cajas de mochi donuts en Waikiki: 3 por $11.25, 6 por $22.50, docena $45. Combina 24 sabores y pide con antelación. 2142 Kalākaua Ave, 7 AM–9 PM.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'mochi donut box waikiki',
      'dozen donuts waikiki',
      'mochi donuts waikiki price',
      'donut box honolulu',
      'mochi donut dozen price',
      'donuts for a group waikiki',
      'order donuts online waikiki',
      'mochi donuts near me',
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
