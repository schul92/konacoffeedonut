'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'ube-mochi-donut-waikiki',
  imageSrc: '/images/blog/mochi-donut-flavors-waikiki.jpeg',
  imageAlt: 'Ube mochi donut — vibrant purple Filipino yam glazed pon-de-ring donut at Kona Coffee Donut Waikiki',
  schemaHeadline: 'Ube Mochi Donut: Hawaii\'s Most Photogenic Donut',
  schemaDescription:
    'A guide to ube mochi donuts — what ube tastes like, why it\'s purple, and where to try authentic ube mochi donuts in Waikiki.',
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Ube Mochi Donut',
      subtitle: "Hawaii's most photogenic donut. Vibrant purple, chewy mochi texture, distinctly sweet and earthy — here's what ube tastes like and where to try it in Waikiki.",
      date: 'Updated May 2026',
      readTime: '4 min read',
      badge: 'Mochi Donut Spotlight',
    },
    intro:
      "Ube (pronounced OO-beh) is Filipino purple yam — naturally vibrant purple, distinctly sweet, with earthy and slightly nutty notes. When it gets glazed onto a chewy pon-de-ring mochi donut, you end up with Hawaii's most Instagram-worthy donut: brilliant purple color, chewy bouncy texture, and a flavor profile that's unlike anything in a typical American donut case. This guide covers what ube actually tastes like, why it's everywhere in Hawaii right now, and where to find the best ube mochi donut in Waikiki.",
    visitCTA: {
      headline: 'Ube Mochi Donuts — Made Fresh Daily on Kalākaua',
      body:
        "Kona Coffee Donut hand-makes ube mochi donuts every morning. Vibrant purple glaze on chewy rice-flour pon-de-ring, optional coconut flakes on top. Walking distance from Waikiki Beach. Open 7 AM to 9 PM.",
      menuLabel: 'See Mochi Donut Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'What Does Ube Taste Like',
        body:
          "Ube tastes earthy-sweet, kind of like vanilla and pistachio had a baby with sweet potato. It's not aggressively sweet like a regular donut glaze — there's a vegetal undertone (because it's a root vegetable) and a slight nuttiness that makes it more interesting than just \"purple = grape.\" The color comes naturally from anthocyanins in the yam, not artificial dyes (in well-made ube products).",
        bullets: [
          'Sweet but earthy — not candy-sweet',
          'Vegetal undertone (it\'s a root vegetable)',
          'Hints of vanilla, coconut, pistachio',
          'Naturally purple from anthocyanins',
          'Pairs well with milk-based drinks',
        ],
        pullout: {
          title: 'Common confusion',
          body: 'Ube is NOT taro. Both are purple root vegetables, but taro is lighter and starchier; ube is darker, sweeter, and more dessert-friendly.',
        },
      },
      {
        h2: 'Why Ube Mochi Donut Is the Best Mochi Donut Flavor',
        body:
          "Hot take, but it's earned. The chewy mochi donut texture absorbs glaze beautifully, and ube's vibrant color makes the visual unmatched. The flavor combination of slightly bouncy rice-flour donut + earthy-sweet ube + occasional coconut flake topping is genuinely unique — you can't get this from a Krispy Kreme or Dunkin. It's also the donut your Instagram will thank you for.",
      },
      {
        h2: 'How Ube Mochi Donut Pairs With Drinks',
        body:
          "Ube is mellow but earthy, so it pairs best with drinks that don't fight it. Top pairings:",
        bullets: [
          'Matcha Latte — earthy + earthy = perfect harmony (and the purple-green visual is gorgeous)',
          'Ube Smoothie — full purple aesthetic, doubles down on the ube flavor',
          'Iced Latte (100% Kona) — mellow coffee lets ube shine',
          'Hot Chocolate — surprising combo, the sweetness levels balance',
          'Avoid: super-bitter espresso or sour drinks (they overpower the ube)',
        ],
      },
      {
        h2: 'Why Ube Is Everywhere in Hawaii Right Now',
        body:
          "Hawaii has a large Filipino-American population (one of the largest in the US), and ube has been a Filipino dessert staple for generations. The mainstream food world finally caught up around 2018–2020 with ube ice cream and ube lattes, but in Hawaii ube has always been on local bakery menus. The mochi donut format (Japanese-Hawaiian fusion) plus ube glaze (Filipino-Hawaiian) is a uniquely Hawaiian combination — try it at the source.",
      },
      {
        h2: 'Where to Get the Best Ube Mochi Donut in Waikiki',
        body:
          "Most Waikiki bakeries focus on malasadas or chain donuts. For ube mochi donut specifically, Kona Coffee Donut on Kalākaua is the only walking-distance option in central Waikiki that hand-makes them daily. The ube glaze is real ube paste (not artificial flavoring), and the pon-de-ring texture is chewy and bouncy as it should be.",
      },
      {
        h2: 'Other Mochi Donut Flavors to Try at the Same Time',
        body:
          "Since you're getting an ube, make it a flight. Best combos to order together:",
        bullets: [
          'Ube + Matcha — purple + green, the K-cafe aesthetic',
          'Ube + Black Sesame — earthy and nutty, both dessert-friendly',
          'Ube + Original Glazed — sweet meets earthy',
          'Ube + Strawberry — Filipino + American, classic combo',
        ],
      },
    ],
    faq: [
      { q: 'What is ube?', a: 'Ube (pronounced OO-beh) is a Filipino purple yam. Naturally vibrant purple color, sweet but earthy flavor, common in Filipino desserts. Different from taro despite the similar purple color.' },
      { q: 'Where can I get an ube mochi donut in Waikiki?', a: 'Kona Coffee Donut at 2142 Kalākaua Ave hand-makes ube mochi donuts daily. Walking distance from Waikiki Beach. Open 7 AM to 9 PM.' },
      { q: 'What does ube mochi donut taste like?', a: 'Chewy bouncy texture from the rice-flour mochi base, topped with sweet-earthy ube glaze. The flavor is like vanilla + sweet potato + pistachio, with a vegetal undertone. Not aggressively sweet.' },
      { q: 'Is ube the same as taro?', a: 'No. Both are purple root vegetables but they\'re different. Ube is darker, sweeter, more dessert-friendly. Taro is lighter, starchier, and often used in savory dishes (also in bubble tea).' },
      { q: 'Is ube naturally purple?', a: 'Yes. The purple color comes from anthocyanins (natural plant pigments) in the yam itself. Well-made ube products don\'t need artificial coloring.' },
      { q: 'Why is ube so popular in Hawaii?', a: 'Hawaii has one of the largest Filipino-American populations in the US, and ube has been a Filipino dessert staple for generations. Local bakeries embraced it before mainland trends caught up.' },
    ],
    finalCTA: {
      headline: 'Hawaii\'s Most Photogenic Donut Awaits',
      body: 'Fresh ube mochi donuts daily, walking distance from Waikiki Beach.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: { title: 'ウベモチドーナツ — ハワイで最も映えるドーナツ', subtitle: '鮮やかな紫、もちもち食感、独特の甘さ。', date: '2026年5月', readTime: '読了4分', badge: 'モチドーナツ特集' },
    intro: 'ウベはフィリピンの紫芋。鮮やかな紫色と、甘くて土の香りのする独特の風味。もちもちポンデリングと組み合わせると、ハワイで最も写真映えするドーナツに。',
    visitCTA: { headline: 'カラカウア通りで毎日手作りウベモチドーナツ', body: '鮮やかな紫グレーズ、もちもちポンデリング、ココナッツトッピング。毎日7時〜21時。', menuLabel: 'メニュー', directionsLabel: '行き方を確認' },
    sections: [
      { h2: 'ウベの味は？', body: 'バニラとピスタチオとサツマイモの混ざったような、土の香りのある優しい甘さ。', bullets: ['甘いけど土の風味', '根菜の風味', 'バニラ・ココナッツ・ピスタチオの香り', '天然の紫色', 'ミルク系ドリンクと相性◎'], pullout: { title: '混同注意', body: 'ウベ ≠ タロ。どちらも紫の根菜ですが、ウベの方が濃く甘く、デザート向き。' } },
      { h2: 'なぜモチドーナツで最高？', body: 'もち米粉の食感とウベの相性、鮮やかな色合いが唯一無二。' },
      { h2: 'おすすめペアリング', body: '抹茶ラテ、ウベスムージー、アイスコナラテなど。' },
      { h2: 'なぜハワイで人気？', body: 'ハワイにはフィリピン系移民が多く、ウベは伝統的なデザート食材。' },
      { h2: 'ワイキキで食べられる場所', body: 'コナコーヒードーナツ（カラカウア通り 2142）。' },
      { h2: '他のフレーバーとの組み合わせ', body: 'ウベ+抹茶、ウベ+黒ごまなど。' },
    ],
    faq: [
      { q: 'ウベとは？', a: 'フィリピン産の紫芋。' },
      { q: 'ワイキキで買える？', a: 'コナコーヒードーナツ。' },
      { q: '味は？', a: '甘くて土の香りのある優しい味。' },
      { q: 'タロと同じ？', a: 'いいえ、別物です。' },
    ],
    finalCTA: { headline: 'ハワイで最も映えるドーナツ', body: '毎日手作り、ビーチから徒歩。', visitLabel: '今日来店', callLabel: '電話 (808) 304-1808' },
  },
  ko: {
    hero: { title: '우베 모치도넛 — 하와이 최고의 비주얼 도넛', subtitle: '선명한 보라색, 쫀득한 식감.', date: '2026년 5월', readTime: '4분', badge: '모치도넛 스포트라이트' },
    intro: '우베는 필리핀 자색 얌. 선명한 보라색과 달콤하면서도 흙내음이 나는 독특한 풍미. 쫀득한 폰데링과 만나면 인스타 최고의 도넛.',
    visitCTA: { headline: '칼라카우아 매일 직접 만드는 우베 모치도넛', body: '선명한 보라색 글레이즈, 쫀득한 폰데링. 매일 7시–21시.', menuLabel: '메뉴', directionsLabel: '길찾기' },
    sections: [
      { h2: '우베 맛은?', body: '바닐라+피스타치오+고구마가 섞인 듯한 흙내음 단맛.', pullout: { title: '주의', body: '우베 ≠ 타로. 비슷한 보라색이지만 다릅니다.' } },
      { h2: '왜 최고 모치도넛?', body: '쫀득 식감과 우베의 조화, 화려한 색감이 유일무이.' },
      { h2: '음료 페어링', body: '말차 라테, 우베 스무디, 아이스 코나 라테.' },
      { h2: '하와이서 인기 이유', body: '필리핀계 미국인이 많아 우베는 전통 디저트 재료.' },
      { h2: '와이키키 추천', body: '코나커피도넛.' },
      { h2: '다른 맛과 조합', body: '우베+말차, 우베+검은깨.' },
    ],
    faq: [
      { q: '우베란?', a: '필리핀 자색 얌.' },
      { q: '와이키키 어디서?', a: '코나커피도넛.' },
      { q: '맛은?', a: '달콤하면서 흙내음.' },
      { q: '타로와 같나요?', a: '아니요.' },
    ],
    finalCTA: { headline: '하와이 최고 비주얼 도넛', body: '매일 직접 만듦.', visitLabel: '오늘 방문', callLabel: '전화 (808) 304-1808' },
  },
  zh: {
    hero: { title: '紫薯麻糬甜甜圈 — 夏威夷最上镜的甜甜圈', subtitle: '鲜艳紫色，Q弹口感。', date: '2026年5月', readTime: '4分钟', badge: '麻糬甜甜圈聚焦' },
    intro: '紫薯（Ube）是菲律宾紫山药。鲜艳紫色与独特的香甜土味，加上Q弹波堤，造就夏威夷最上镜的甜甜圈。',
    visitCTA: { headline: '卡拉考阿大道每日现做紫薯麻糬甜甜圈', body: '鲜艳紫釉，Q弹波堤。每天7点–21点。', menuLabel: '菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '紫薯什么味道？', body: '类似香草、开心果与红薯的混合，带土香的甜味。', pullout: { title: '注意', body: '紫薯（Ube）≠ 芋头（Taro）。' } },
      { h2: '为什么是最佳麻糬甜甜圈？', body: 'Q弹口感与紫薯的搭配，色彩鲜艳独一无二。' },
      { h2: '饮料搭配', body: '抹茶拿铁、紫薯奶昔、冰科纳拿铁。' },
      { h2: '为什么在夏威夷流行', body: '夏威夷有大量菲律宾裔，紫薯是传统甜品食材。' },
      { h2: '威基基哪里', body: 'Kona Coffee Donut。' },
      { h2: '其他口味组合', body: '紫薯+抹茶、紫薯+黑芝麻。' },
    ],
    faq: [
      { q: '紫薯是什么?', a: '菲律宾紫山药。' },
      { q: '威基基哪里?', a: 'Kona Coffee Donut。' },
      { q: '味道?', a: '香甜带土香。' },
      { q: '与芋头一样吗?', a: '不一样。' },
    ],
    finalCTA: { headline: '夏威夷最上镜的甜甜圈', body: '每日现做。', visitLabel: '立即到店', callLabel: '致电 (808) 304-1808' },
  },
  es: {
    hero: { title: 'Ube Mochi Donut — El Donut Más Fotogénico de Hawái', subtitle: 'Morado vibrante, textura masticable.', date: 'Mayo 2026', readTime: '4 min', badge: 'Especial Mochi Donut' },
    intro: 'El ube es ñame morado filipino. Color vibrante, sabor dulce-terroso. Combinado con pon-de-ring resulta en el donut más fotogénico de Hawái.',
    visitCTA: { headline: 'Ube Mochi Donuts Frescos en Kalākaua', body: 'Glaseado morado vibrante, textura masticable. 7 AM a 9 PM.', menuLabel: 'Ver Menú', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: '¿A qué Sabe el Ube?', body: 'Como vainilla, pistacho y batata con notas terrosas.', pullout: { title: 'Confusión común', body: 'Ube ≠ Taro. Ambos morados pero diferentes.' } },
      { h2: 'Por Qué Es el Mejor Sabor', body: 'Textura masticable + sabor dulce-terroso + color vibrante.' },
      { h2: 'Maridajes', body: 'Matcha latte, ube smoothie, latte Kona.' },
      { h2: 'Por Qué Popular en Hawái', body: 'Gran población filipino-americana, ube es tradicional.' },
      { h2: 'Dónde Probarlo', body: 'Kona Coffee Donut.' },
    ],
    faq: [
      { q: '¿Qué es ube?', a: 'Ñame morado filipino.' },
      { q: '¿Dónde en Waikiki?', a: 'Kona Coffee Donut.' },
      { q: '¿Sabor?', a: 'Dulce-terroso.' },
      { q: '¿Igual que taro?', a: 'No.' },
    ],
    finalCTA: { headline: 'El Donut Más Fotogénico', body: 'Fresco diariamente.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 304-1808' },
  },
};

export default function UbeMochiDonutPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
