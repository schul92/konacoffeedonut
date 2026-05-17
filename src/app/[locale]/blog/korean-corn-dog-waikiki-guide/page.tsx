'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'korean-corn-dog-waikiki-guide',
  imageSrc: '/images/blog/korean-food-waikiki.png',
  imageAlt: 'Korean corn dog in Waikiki — mozzarella-stretch, potato-coated, sugar dust',
  schemaHeadline: 'Korean Corn Dog in Waikiki: Best Mozzarella & Potato Dogs (2026)',
  schemaDescription:
    'A guide to finding the best Korean corn dogs in Waikiki — mozzarella varieties, potato-coated styles, sugar dust, and where to try them.',
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Korean Corn Dog in Waikiki',
      subtitle: "Crispy outside, stretchy mozzarella inside, dusted with sugar. The TikTok K-food staple is in Waikiki — here's where to find the real deal.",
      date: 'Updated May 2026',
      readTime: '5 min read',
      badge: 'K-Food Guide',
    },
    intro:
      "Korean corn dogs (hatdogu / 한국 핫도그) are nothing like the American county-fair version. The Korean style uses a thicker, slightly sweet rice-flour batter that fries up shatteringly crisp. Inside you'll find mozzarella that stretches a foot, or a half-mozzarella-half-hot-dog combo, or even potato-cube-coated versions that crunch differently. Then comes the optional sugar dusting and sauce drizzle on top. This is street food at peak engineering, and Waikiki finally has it.",
    visitCTA: {
      headline: 'Korean Corn Dogs at Kona Coffee Donut',
      body:
        "We serve fresh-fried Korean corn dogs daily — classic mozzarella, mozzarella + hot dog combo, and potato-coated. Crispy outside, stretchy cheese pull, optional sugar + ketchup + mustard drizzle. Walking distance from Waikiki Beach.",
      menuLabel: 'See Korean Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'What Makes Korean Corn Dogs Different',
        body:
          "The American version uses cornmeal batter and a single hot dog. The Korean version uses rice-flour-and-wheat batter (sometimes with yeast for extra puff), allows for cheese-only or mixed fillings, and gets the iconic crunchy potato cube coating in some styles. The sugar dusting + ketchup-mustard combo is the cultural signature.",
        bullets: [
          'Rice-flour batter (vs cornmeal in US version)',
          'Mozzarella-only, half-cheese-half-hotdog, or potato-coated',
          'Sugar dust on top for sweet-savory balance',
          'Ketchup + mustard drizzle finish',
          'Eaten fresh and hot — best within 5 minutes of frying',
        ],
      },
      {
        h2: 'The 3 Main Korean Corn Dog Styles',
        body:
          "Most Korean corn dog shops carry these three core varieties. Pick based on craving.",
        bullets: [
          'Original Mozzarella — full stick of pure stretchy mozzarella cheese, no hot dog. The cheese-pull TikTok video icon.',
          'Half & Half (Mozzarella + Hot Dog) — half cheese, half hot dog. Best of both worlds.',
          'Potato (Gamja) — coated in fried potato cubes for double crunch. Most photogenic.',
          'Squid Ink (Sometimes) — black batter, mozzarella inside, dramatic visual.',
        ],
        pullout: {
          title: 'First-timer pick',
          body: 'Go Half & Half. You get the cheese-pull moment AND the hot dog flavor — best introduction to the format.',
        },
      },
      {
        h2: 'How to Eat a Korean Corn Dog',
        body:
          "Eat it immediately while hot. The cheese pull only works within 3–5 minutes of frying. If it cools, the mozzarella firms up and the experience is gone. Hold the stick at the bottom (use the napkin), bite from the top to get the crispy outer batter first, then commit to the cheese-pull. Use ketchup + mustard + sugar combo — the sweet-savory contrast is the point.",
        bullets: [
          'Eat within 5 minutes — cheese pull is time-sensitive',
          'Hold the stick at the bottom with a napkin',
          'First bite from the top for crunch',
          'Use all three condiments (ketchup + mustard + sugar)',
          'Don\'t share — the cheese pull is a solo moment',
        ],
      },
      {
        h2: 'Where to Get Korean Corn Dogs in Waikiki',
        body:
          "Authentic Korean corn dogs are still rare in Waikiki proper. Most spots are 10–15 minutes inland. Kona Coffee Donut on Kalākaua serves fresh-fried Korean corn dogs daily — walking distance from any major hotel.",
        bullets: [
          'Kona Coffee Donut (2142 Kalākaua Ave) — fresh-fried, classic styles, walking distance',
          'Two Tone Korean Corn Dog (Honolulu, 10-min drive) — multiple varieties',
          'Various pop-ups at Ala Moana and Kapahulu — quality varies',
        ],
      },
      {
        h2: 'Korean Corn Dog + Drink Pairings',
        body:
          "Korean corn dogs are rich and salty. The right drink balances:",
        bullets: [
          'Iced Americano (100% Kona) — bitter coffee cuts through the fried richness',
          'Korean Milk Tea Smoothie — classic K-food pairing',
          'Brown Sugar Boba Smoothie — sweetness balances the savory',
          'Strawberry or Mango Smoothie — fruity contrast',
        ],
      },
      {
        h2: 'How Much Should a Korean Corn Dog Cost',
        body:
          "Fair pricing in Waikiki: $5–$8 per corn dog depending on style. Mozzarella-only and potato-coated are usually $1 more than the half-and-half. Anything above $10 is tourist pricing for the same product.",
      },
    ],
    faq: [
      { q: 'Where can I get a Korean corn dog in Waikiki?', a: 'Kona Coffee Donut at 2142 Kalākaua Ave serves fresh-fried Korean corn dogs walking distance from Waikiki Beach. Multiple styles including mozzarella, half-and-half, and potato.' },
      { q: 'What is a Korean corn dog?', a: 'A Korean street food: hot dog or mozzarella cheese on a stick, dipped in rice-flour batter, deep-fried until crispy, then dusted with sugar and drizzled with ketchup + mustard. Famous for the cheese-pull.' },
      { q: 'What\'s the difference between Korean and American corn dogs?', a: 'Korean uses rice-flour batter (vs cornmeal), often features mozzarella cheese instead of (or with) hot dog, includes potato-cube-coated versions, and gets sugar + ketchup + mustard topping.' },
      { q: 'How much do Korean corn dogs cost in Waikiki?', a: 'Fair pricing is $5–$8 per corn dog. Mozzarella-only and potato-coated styles usually run $1 more than half-and-half.' },
      { q: 'Is Korean corn dog the same as hatdogu?', a: 'Yes — hatdogu (핫도그) is the Korean word for hot dog, used to describe this corn dog format. Also written as "hatdog" in some menus.' },
      { q: 'Why is Korean corn dog famous on TikTok?', a: 'The cheese-pull moment when you bite into a mozzarella corn dog is dramatically visual — the cheese stretches over a foot. It became a viral food trend on TikTok and Instagram.' },
    ],
    finalCTA: {
      headline: 'Cheese-Pull Moment Awaits on Kalākaua',
      body: 'Fresh-fried Korean corn dogs, walking distance from Waikiki Beach.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: { title: 'ワイキキで韓国コーンドッグ', subtitle: 'カリッと衣、伸びるモッツァレラ、砂糖がけ。', date: '2026年5月', readTime: '読了5分', badge: 'Kフード' },
    intro: 'TikTokで話題の韓国式コーンドッグ（ハットグ）がワイキキでも食べられます。米粉ベースの衣でカリッと揚げ、中はとろけるモッツァレラ。',
    visitCTA: { headline: 'コナコーヒードーナツで韓国ハットグを', body: '揚げたて、モッツァレラ・ハーフ&ハーフ・ポテト衣の3種。ビーチから徒歩圏内。', menuLabel: 'メニュー', directionsLabel: '行き方を確認' },
    sections: [
      { h2: '韓国式とアメリカ式の違い', body: '米粉ベースの衣、モッツァレラ中心、砂糖がけが特徴。', bullets: ['米粉衣', 'モッツァレラ・ハーフ・ポテト3種', '砂糖がけ', 'ケチャップ&マスタード'] },
      { h2: '3種類のスタイル', body: '定番3種から選んで。', bullets: ['オリジナルモッツァレラ — 100%チーズ', 'ハーフ&ハーフ — チーズとホットドッグ', 'ポテト（カムジャ）— ジャガイモ衣でダブルクランチ'] },
      { h2: '食べ方', body: '揚げたて5分以内に食べるのがベスト。', bullets: ['すぐに食べる', '上からかじる', 'ケチャップ+マスタード+砂糖', '一人で食べる（チーズプル）'] },
      { h2: 'ワイキキで食べられる場所', body: 'コナコーヒードーナツが徒歩圏内。' },
      { h2: 'ドリンクとの組み合わせ', body: 'アイスアメリカーノ、ミルクティースムージーなど。' },
      { h2: '価格目安', body: '$5-8が標準。' },
    ],
    faq: [
      { q: 'ワイキキでハットグは？', a: 'コナコーヒードーナツ（カラカウア通り 2142）。' },
      { q: 'ハットグとは？', a: '韓国式コーンドッグ、米粉衣にチーズorホットドッグ。' },
      { q: 'アメリカ式との違い？', a: '米粉衣、モッツァレラ中心、砂糖がけ。' },
      { q: '値段は？', a: '$5-8/本。' },
    ],
    finalCTA: { headline: 'カリッと揚げたてハットグ', body: 'カラカウア通り、ビーチから徒歩。', visitLabel: '今日来店', callLabel: '電話 (808) 304-1808' },
  },
  ko: {
    hero: { title: '와이키키 한국 핫도그', subtitle: '겉바속쫀, 늘어나는 모짜렐라, 설탕 솔솔.', date: '2026년 5월', readTime: '5분', badge: 'K-푸드' },
    intro: 'TikTok에서 화제인 한국식 핫도그가 와이키키에서도! 쌀가루 베이스 튀김옷에 늘어나는 모짜렐라.',
    visitCTA: { headline: '코나커피도넛에서 정통 한국 핫도그를', body: '갓 튀긴 모짜렐라, 반반, 감자 핫도그 3종. 비치 도보 거리.', menuLabel: '메뉴', directionsLabel: '길찾기' },
    sections: [
      { h2: '한국식과 미국식 차이', body: '쌀가루 튀김옷, 모짜렐라 중심, 설탕 토핑이 특징.' },
      { h2: '3가지 스타일', body: '대표 3종.', bullets: ['오리지널 모짜렐라', '반반 (모짜+핫도그)', '감자 핫도그'] },
      { h2: '먹는 법', body: '튀긴 후 5분 이내가 베스트.' },
      { h2: '와이키키 추천', body: '코나커피도넛.' },
      { h2: '음료 추천', body: '아이스 아메리카노, 밀크티 스무디.' },
      { h2: '가격', body: '$5-8.' },
    ],
    faq: [
      { q: '와이키키 핫도그?', a: '코나커피도넛.' },
      { q: '한국 핫도그란?', a: '쌀가루 튀김에 모짜or핫도그.' },
      { q: '미국과 차이?', a: '쌀가루, 모짜렐라, 설탕.' },
      { q: '가격?', a: '$5-8.' },
    ],
    finalCTA: { headline: '갓 튀긴 한국 핫도그', body: '비치 도보, 매일 영업.', visitLabel: '오늘 방문', callLabel: '전화 (808) 304-1808' },
  },
  zh: {
    hero: { title: '威基基的韩国玉米热狗', subtitle: '外脆内拉丝，糖粉点缀。', date: '2026年5月', readTime: '5分钟', badge: 'K-Food' },
    intro: 'TikTok爆红的韩式玉米热狗在威基基。米粉外皮加上拉丝马苏里拉芝士。',
    visitCTA: { headline: 'Kona Coffee Donut 的韩式热狗', body: '现炸马苏里拉、半半、薯块3种。海滩步行可达。', menuLabel: '菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '韩式与美式区别', body: '米粉外皮、马苏里拉、糖粉。' },
      { h2: '3种主要款式', body: '经典3款。', bullets: ['原味马苏里拉', '半半', '薯块款'] },
      { h2: '怎么吃', body: '出炉5分钟内最佳。' },
      { h2: '威基基哪里', body: 'Kona Coffee Donut。' },
      { h2: '饮料搭配', body: '冰美式、奶茶奶昔。' },
      { h2: '价格', body: '$5-8。' },
    ],
    faq: [
      { q: '威基基哪里?', a: 'Kona Coffee Donut。' },
      { q: '什么是韩式玉米热狗?', a: '米粉炸皮，芝士或热狗内馅。' },
      { q: '价格?', a: '$5-8。' },
    ],
    finalCTA: { headline: '现炸韩式玉米热狗', body: '海滩步行可达。', visitLabel: '立即到店', callLabel: '致电 (808) 304-1808' },
  },
  es: {
    hero: { title: 'Korean Corn Dog en Waikiki', subtitle: 'Crujiente afuera, mozzarella stretch adentro.', date: 'Mayo 2026', readTime: '5 min', badge: 'K-Food' },
    intro: 'Los corn dogs coreanos virales de TikTok ahora en Waikiki — masa de harina de arroz, mozzarella elástica.',
    visitCTA: { headline: 'Corn Dogs Coreanos en Kalākaua', body: 'Frescos: mozzarella, mitad-y-mitad, papa. Cerca de la playa.', menuLabel: 'Ver Menú', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Diferencia con Americano', body: 'Masa de harina de arroz, mozzarella, azúcar arriba.' },
      { h2: '3 Estilos Principales', body: 'Clásicos:', bullets: ['Mozzarella Original', 'Mitad-y-Mitad', 'Papa (Gamja)'] },
      { h2: 'Cómo Comer', body: 'Inmediatamente, dentro de 5 min.' },
      { h2: 'Dónde en Waikiki', body: 'Kona Coffee Donut.' },
      { h2: 'Precio', body: '$5-8.' },
    ],
    faq: [
      { q: '¿Dónde?', a: 'Kona Coffee Donut.' },
      { q: '¿Qué es?', a: 'Hot dog coreano con masa de arroz, mozzarella o salchicha.' },
      { q: '¿Precio?', a: '$5-8.' },
    ],
    finalCTA: { headline: 'Corn Dogs Coreanos Frescos', body: 'Cerca de la playa.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 304-1808' },
  },
};

export default function KoreanCornDogPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
