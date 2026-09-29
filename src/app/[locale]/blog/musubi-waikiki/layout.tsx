import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Spam Musubi in Waikiki from $2.95: Made Fresh Daily on Kalākaua',
    ja: 'ワイキキのスパムむすび、$2.95〜 | Kona Coffee Donut',
    ko: '와이키키 스팸무스비, $2.95부터 | Kona Coffee Donut',
    zh: '威基基午餐肉饭团，$2.95起 | Kona Coffee Donut',
    es: 'Spam Musubi en Waikiki desde $2.95 | Kona Coffee Donut',
  };
  const descriptions: Record<string, string> = {
    en: 'Where to get spam musubi in Waikiki: five varieties made fresh daily from $2.95 — classic spam, teriyaki, egg, shiso wakame, shrimp avocado. 5 minutes from Waikiki Beach, open 7 AM–9 PM.',
    ja: 'ハワイの定番を毎日店内で手作り。5種類。ハワイの日常食といえばスパムむすび。ワイキキではABCストアの冷たいものが主流ですが、Kona Coffee Donutでは毎日店内で作りたてを$2.',
    ko: '하와이 국민 간식을 매일 매장에서 직접. 5종. 하와이 일상 음식의 대표는 스팸무스비. 와이키키에선 ABC스토어 랩 포장이 대부분이지만, Kona Coffee Donut은 매일 매장에서 갓 만들어 $2.',
    zh: '夏威夷国民小吃，每天店内现做，5种口味。夏威夷最有代表性的日常美食就是午餐肉饭团(Spam Musubi)。',
    es: 'El snack favorito de Hawái, hecho fresco a diario — cinco variedades.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'spam musubi waikiki', 'musubi near me', 'musubi waikiki', 'spam musubi honolulu',
      'best spam musubi oahu', 'cheap eats waikiki', 'hawaiian snacks waikiki',
      'what is spam musubi', 'grab and go food waikiki',
    ],
    openGraph: {
      type: 'article', locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/musubi-waikiki`,
      siteName: 'Kona Coffee Donut', title, description,
      images: [{ url: '/images/blog/musubi-waikiki.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/musubi-waikiki.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/musubi-waikiki`,
      languages: {
        'en-US': `${siteUrl}/en/blog/musubi-waikiki`,
        'ja-JP': `${siteUrl}/ja/blog/musubi-waikiki`,
        'ko-KR': `${siteUrl}/ko/blog/musubi-waikiki`,
        'zh-CN': `${siteUrl}/zh/blog/musubi-waikiki`,
        'x-default': `${siteUrl}/en/blog/musubi-waikiki`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
