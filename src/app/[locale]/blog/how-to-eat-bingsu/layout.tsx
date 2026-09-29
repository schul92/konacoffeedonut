import { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    en: 'How to Eat Bingsu the Right Way (Korean Style, 2026)',
    ja: 'ビンスの正しい食べ方（韓国式） | Kona Coffee Donut',
    ko: '빙수 제대로 먹는 법 | Kona Coffee Donut',
    zh: '雪冰的正确吃法（韩国式） | Kona Coffee Donut',
    es: 'Cómo Comer Bingsu (Al Estilo Coreano) | Kona Coffee Donut',
  };
  const descriptions: Record<string, string> = {
    en: "How do you eat bingsu? The Korean way: mix the toppings into the snow ice with your spoon, then share with a friend. Full guide + where to try authentic bingsu in Waikiki.",
    ja: '上からすくわず混ぜる。60秒でわかる本場の食べ方とワイキキで食べられる場所。初めてのビンス。雪山のような氷の上に新鮮なフルーツ、餅、あずき、練乳。',
    ko: '위에서 떠 먹지 말고 비벼 먹으세요. 60초 만에 배우는 정통 빙수 먹는 법 + 와이키키에서 즐기는 곳. 처음 빙수를 주문하면 눈산 같은 얼음 위에 신선한 과일, 떡, 팥, 연유가 올라옵니다.',
    zh: '不要从上面挖 — 要拌匀。60秒学会正宗雪冰吃法，加上威基基品尝指南。第一次点雪冰，碗里像座雪山，上面铺着新鲜水果、年糕、红豆、炼乳。',
    es: 'No cucharees desde arriba — mezcla. Guía de 60 segundos al estilo coreano.',
  };
  const title = titles[locale] || titles.en;
  const description = descriptions[locale] || descriptions.en;
  const localeMap: Record<string, string> = { en: 'en_US', ja: 'ja_JP', ko: 'ko_KR', zh: 'zh_CN', es: 'es_ES' };
  return {
    title,
    description,
    keywords: [
      'how to eat bingsu', 'how do you eat bingsu', 'bingsu eating guide',
      'how to eat bingsu in korea', 'how to eat patbingsu', 'bingsu spoon',
      'eating bingsu the right way', 'bingsu etiquette', 'bingsu mix or scoop',
      '빙수 먹는 법', 'ビンス 食べ方', '雪冰 吃法',
    ],
    openGraph: {
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}/blog/how-to-eat-bingsu`,
      siteName: 'Kona Coffee Donut',
      title, description,
      images: [{ url: '/images/blog/how-to-eat-bingsu.jpeg', width: 1200, height: 675, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/images/blog/how-to-eat-bingsu.jpeg'] },
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/how-to-eat-bingsu`,
      languages: {
        'en-US': `${siteUrl}/en/blog/how-to-eat-bingsu`,
        'ja-JP': `${siteUrl}/ja/blog/how-to-eat-bingsu`,
        'ko-KR': `${siteUrl}/ko/blog/how-to-eat-bingsu`,
        'zh-CN': `${siteUrl}/zh/blog/how-to-eat-bingsu`,
        'x-default': `${siteUrl}/en/blog/how-to-eat-bingsu`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
