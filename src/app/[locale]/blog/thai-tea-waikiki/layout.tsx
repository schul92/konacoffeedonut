import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';
const slug = 'thai-tea-waikiki';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Thai Tea in Waikiki: Boba Cans $8.95 & Thai Tea Smoothie $10.95',
    ja: 'ワイキキのタイティー｜ボバ缶$8.95・スムージー$10.95 | Kona Coffee Donut',
    ko: '와이키키 타이티 | 보바 캔 $8.95·스무디 $10.95 | Kona Coffee Donut',
    zh: '威基基泰式奶茶｜珍珠奶茶罐$8.95・冰沙$10.95 | Kona Coffee Donut',
    es: 'Té tailandés en Waikiki: boba en lata $8.95 y smoothie $10.95',
  };
  const descriptions: Record<string, string> = {
    en: 'Thai tea two ways in Waikiki: a sealed Thai tea boba can ($8.95) for the beach or a blended Thai tea smoothie ($10.95). 2142 Kalākaua Ave, open 7 AM–9 PM.',
    ja: 'ワイキキでタイティーを2通りで。ビーチ用の密封タイティーボバ缶$8.95、タイティースムージー$10.95。カラカウア通り2142、毎日7時〜21時。',
    ko: '와이키키에서 타이티를 두 가지로. 해변용 밀봉 타이티 보바 캔 $8.95, 타이티 스무디 $10.95. 칼라카우아 2142, 매일 7시–21시.',
    zh: '威基基泰式奶茶两种喝法：去海滩的密封泰式珍珠奶茶罐$8.95，或泰式奶茶冰沙$10.95。卡拉考阿大道2142号，每天7点至21点。',
    es: 'Té tailandés en Waikiki: boba en lata sellada $8.95 o smoothie $10.95. 2142 Kalākaua Ave, de 7 AM a 9 PM.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'thai tea waikiki',
      'thai tea near me',
      'thai tea boba waikiki',
      'thai iced tea honolulu',
      'boba waikiki',
      'thai tea smoothie',
      'milk tea waikiki',
      'does thai tea have caffeine',
      'boba near me waikiki',
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
