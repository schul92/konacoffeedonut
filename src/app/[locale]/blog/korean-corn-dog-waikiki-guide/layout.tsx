import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'Korean Corn Dog in Waikiki: Best Mozzarella & Potato Dogs (2026)',
    ja: 'ワイキキで韓国コーンドッグ | Kona Coffee Donut',
    ko: '와이키키 한국 핫도그 | Kona Coffee Donut',
    zh: '威基基的韩国玉米热狗 | Kona Coffee Donut',
    es: 'Korean Corn Dog en Waikiki | Kona Coffee Donut',
  };
  const descriptions: Record<string, string> = {
    en: "Where to try authentic Korean corn dogs in Waikiki — stretchy mozzarella, crispy potato coating, sugar dust. The K-food street snack everyone’s posting on TikTok. Open 7 AM–9 PM.",
    ja: 'カリッと衣、伸びるモッツァレラ、砂糖がけ。TikTokで話題の韓国式コーンドッグ（ハットグ）がワイキキでも食べられます。',
    ko: '겉바속쫀, 늘어나는 모짜렐라, 설탕 솔솔. TikTok에서 화제인 한국식 핫도그가 와이키키에서도! 쌀가루 베이스 튀김옷에 늘어나는 모짜렐라.',
    zh: '外脆内拉丝，糖粉点缀。TikTok爆红的韩式玉米热狗在威基基。米粉外皮加上拉丝马苏里拉芝士。',
    es: 'Crujiente afuera, mozzarella stretch adentro. Los corn dogs coreanos virales de TikTok ahora en Waikiki — masa de harina de arroz, mozzarella elástica.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title, description,
    keywords: [
      'korean corn dog waikiki', 'korean corn dog honolulu', 'mozzarella corn dog hawaii',
      'best korean corn dog waikiki', 'k-food waikiki', 'korean street food waikiki',
      'potato corn dog', 'hatdogu waikiki',
    ],
    openGraph: {
      type: 'article', locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/korean-corn-dog-waikiki-guide`,
      siteName: 'Kona Coffee Donut', title, description,
      images: [{ url: '/images/blog/korean-food-waikiki.png', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/korean-food-waikiki.png'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/korean-corn-dog-waikiki-guide`,
      languages: {
        'en-US': `${siteUrl}/en/blog/korean-corn-dog-waikiki-guide`,
        'ja-JP': `${siteUrl}/ja/blog/korean-corn-dog-waikiki-guide`,
        'ko-KR': `${siteUrl}/ko/blog/korean-corn-dog-waikiki-guide`,
        'zh-CN': `${siteUrl}/zh/blog/korean-corn-dog-waikiki-guide`,
        'x-default': `${siteUrl}/en/blog/korean-corn-dog-waikiki-guide`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
