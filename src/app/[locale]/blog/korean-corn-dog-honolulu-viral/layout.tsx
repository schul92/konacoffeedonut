import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';
const slug = 'korean-corn-dog-honolulu-viral';
const image = '/images/blog/korean-corn-dog-honolulu-viral.jpg';

const meta = {
  en: {
    title: 'Korean Corn Dogs in Honolulu: Why They Went Viral & Where to Get One (2026)',
    description:
      'Why Korean corn dogs took over TikTok, how the rice-flour batter and mozzarella cheese pull differ from a US corn dog, all 6 styles explained, and where to get one fried to order in Honolulu & Waikiki.',
  },
  ja: {
    title: 'ホノルルで韓国コーンドッグ（ハットグ）：なぜバズったのか・どこで食べられるか（2026）',
    description:
      '米粉の衣と伸びるモッツァレラ、砂糖がけ。TikTokで世界一撮影された韓国コーンドッグの人気の理由、6種類の違い、ホノルル・ワイキキで揚げたてが食べられる場所を解説。',
  },
  ko: {
    title: '호놀룰루 한국 핫도그: 왜 바이럴이 됐고 어디서 먹을까 (2026)',
    description:
      '쌀가루 튀김옷과 늘어나는 모짜렐라, 설탕 토핑. 한국 핫도그가 틱톡에서 터진 이유, 6가지 스타일 차이, 호놀룰루·와이키키에서 갓 튀긴 핫도그를 먹을 수 있는 곳.',
  },
  zh: {
    title: '檀香山韩式玉米热狗：为什么爆红、去哪里吃（2026）',
    description:
      '米粉外皮、拉丝马苏里拉、撒糖粉。韩式热狗在TikTok爆红的原因、6种款式区别，以及檀香山和威基基现炸热狗的地点。',
  },
  es: {
    title: 'Korean Corn Dogs en Honolulu: por qué son virales y dónde comerlos (2026)',
    description:
      'Por qué el corn dog coreano conquistó TikTok, en qué se diferencia del americano, los 6 estilos y dónde comerlo recién frito en Honolulu y Waikiki.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = meta[locale as keyof typeof meta] || meta.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title: t.title,
    description: t.description,
    keywords: [
      'korean corn dog honolulu', 'korean corn dogs viral', 'why are korean corn dogs popular',
      'korean corn dog waikiki', 'korean corn dog near me', 'mozzarella corn dog honolulu',
      'potato corn dog', 'ramen corn dog', 'sugar corn dog', 'korean hotdog hawaii',
      '핫도그 호놀룰루', '韓国 ハットグ ホノルル', '韩式热狗 檀香山',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/${slug}`,
      siteName: 'Kona Coffee Donut',
      title: t.title,
      description: t.description,
      publishedTime: '2026-09-09T00:00:00+00:00',
      images: [{ url: image, width: 1376, height: 768, alt: t.title }],
    },
    twitter: { card: 'summary_large_image', title: t.title, description: t.description, images: [image] },
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
