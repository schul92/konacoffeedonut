import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';
const slug = 'spam-musubi-vs-onigiri';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Spam Musubi vs Onigiri: What’s the Difference? (From $2.95)',
    ja: 'スパムむすびとおにぎりの違い｜ハワイの定番を$2.95で | Kona Coffee Donut',
    ko: '스팸 무스비와 오니기리 차이 | 하와이 명물 $2.95 | Kona Coffee Donut',
    zh: '午餐肉饭团和日式饭团的区别｜夏威夷名物$2.95 | Kona Coffee Donut',
    es: 'Spam musubi vs onigiri: diferencias (desde $2.95)',
  };
  const descriptions: Record<string, string> = {
    en: 'Onigiri hides the filling inside; Hawaii’s Spam musubi puts seared Spam on a pressed block of rice. Try it in Waikiki for $2.95 at 2142 Kalākaua Ave, from 7 AM.',
    ja: 'おにぎりは具が中、ハワイのスパムむすびは四角いご飯の上にスパム。ワイキキのKona Coffee Donutで$2.95、カラカウア通り2142、朝7時から。',
    ko: '오니기리는 속이 안에, 하와이 스팸 무스비는 네모난 밥 위에 스팸. 와이키키 Kona Coffee Donut에서 $2.95, 칼라카우아 2142, 아침 7시부터.',
    zh: '日式饭团馅料在里面，夏威夷午餐肉饭团把煎午餐肉放在长方形米饭上。威基基Kona Coffee Donut售$2.95，卡拉考阿大道2142号，早7点起。',
    es: 'El onigiri lleva el relleno dentro; el Spam musubi hawaiano lleva Spam encima. Pruébalo en Waikiki por $2.95, 2142 Kalākaua Ave.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'spam musubi vs onigiri',
      'musubi vs onigiri',
      'what is spam musubi',
      'spam musubi waikiki',
      'musubi near me',
      'spam musubi price',
      'onigiri waikiki',
      'スパムむすび おにぎり 違い',
      '스팸 무스비 오니기리',
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
