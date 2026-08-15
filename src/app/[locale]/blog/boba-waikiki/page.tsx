'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'boba-waikiki',
  imageSrc: '/images/blog/boba-waikiki.jpeg',
  imageAlt: 'Boba milk tea in Waikiki — canned bubble tea in classic, ube and brown sugar flavors at Mochi Land',
  schemaHeadline: 'Boba in Waikiki: Canned Milk Tea, Brown Sugar & Ube at Mochi Land',
  schemaDescription:
    'Where to get boba in Waikiki: Mochi Land canned boba milk teas ($8.95, six flavors), boba smoothies, and $1.95 boba add-ons at Kona Coffee Donut, 2142 Kalākaua Ave.',
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Boba in Waikiki: The Mochi Land Guide',
      subtitle: 'Six canned boba milk teas at $8.95, boba smoothies, and chewy pearls on almost anything — steps from Waikiki Beach.',
      date: 'Published August 2026',
      readTime: '4 min read',
      badge: 'Boba Guide',
    },
    intro:
      "Finding good boba in Waikiki is harder than it should be — most of the strip is shave ice and mai tais. Mochi Land, the drink counter inside Kona Coffee Donut on Kalākaua, runs a full boba program: six canned boba milk teas, boba smoothies, and $1.95 boba add-ons for almost any drink. The cans are the signature — tall, clear, sealed to go, with a thick layer of brown-sugar tapioca pearls at the bottom. Here's the full lineup and what to order first.",
    visitCTA: {
      headline: 'Six Boba Milk Teas, One Price: $8.95',
      body:
        "Classic, Brown Sugar, Ube, Coffee, Thai Tea, and Matcha — every canned boba milk tea is $8.95, made with chewy brown-sugar pearls. Walking distance from Waikiki Beach, open 7 AM to 9 PM daily.",
      menuLabel: 'See the Drink Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'The Canned Boba Milk Tea Lineup — All $8.95',
        body:
          "Our boba comes in a tall sealed can-style cup: drink layer on top, glossy tapioca pearls settled at the bottom, wide straw through the top. Six flavors, one price:",
        bullets: [
          'Classic Milk Tea — smooth Hong Kong–style milk tea, the benchmark order',
          'Brown Sugar — creamy milk with tiger-stripe caramel syrup down the walls',
          'Ube — pastel-purple Filipino yam, sweet and earthy, the most photographed can',
          'Coffee — iced coffee latte with pearls, the caffeine-plus-chew combo',
          'Thai Tea — bright orange, bold and creamy',
          'Matcha — soft green matcha latte over pearls',
        ],
        pullout: {
          title: 'First time?',
          body:
            "Go Brown Sugar if you want the classic viral boba experience, or Ube if you want the can everyone at the beach asks about. Classic Milk Tea is the safe bet that never misses.",
        },
      },
      {
        h2: 'Boba Smoothies & Boba on Anything',
        body:
          "Beyond the cans, the Mochi Land smoothie lineup ($10.95) includes flavors that come loaded with pearls — Brown Sugar, Thai Tea, Taro, Coffee, and Milk Tea. And if you're ordering any other smoothie, you can add boba to it for $1.95. Yes, that includes the mango.",
      },
      {
        h2: 'What Makes Good Boba (and Why Ours Qualifies)',
        body:
          "Boba lives or dies on the pearls. Stale pearls turn hard; over-held pearls turn to mush. Ours are cooked through the day in brown-sugar syrup so they stay chewy — the texture Taiwanese tea shops call Q. The cans are sealed to order, which means they travel: to the beach, to the pool, back to the hotel lanai.",
      },
      {
        h2: 'Boba + Donut Pairings',
        body: "The counter next to the boba is full of mochi donuts. Regulars' favorite combos:",
        bullets: [
          'Brown Sugar boba + Black Sesame mochi donut — the full Asian dessert experience',
          'Ube boba + Ube mochi donut — commit to the purple',
          'Matcha boba + Injeolmi donut — green tea meets roasted soybean',
          'Coffee boba + Plain glazed — breakfast, technically',
        ],
      },
    ],
    faq: [
      {
        q: 'Where can I get boba in Waikiki?',
        a: 'Mochi Land at Kona Coffee Donut, 2142 Kalākaua Ave, serves six canned boba milk teas at $8.95 each, plus boba smoothies — about a 5-minute walk from Waikiki Beach, open 7 AM to 9 PM daily.',
      },
      {
        q: 'How much is boba milk tea at Mochi Land?',
        a: 'Every canned boba milk tea is $8.95 — Classic, Brown Sugar, Ube, Coffee, Thai Tea, and Matcha. Boba smoothies are $10.95, and adding boba to any other smoothie is $1.95.',
      },
      {
        q: 'What is the best boba flavor for a first-timer?',
        a: 'Brown Sugar is the classic viral order; Classic Milk Tea is the safest bet; Ube is the most Instagrammed. All six are the same price, so there is no wrong answer.',
      },
      {
        q: 'Can I take the boba to the beach?',
        a: 'Yes — the can-style cups are sealed to order, so they travel well. Taking one to Waikiki Beach (5 minutes away) is the most popular way to drink them.',
      },
      {
        q: 'Do you have non-caffeinated boba options?',
        a: 'Ube and Brown Sugar are caffeine-free choices. Thai Tea, Matcha, Classic Milk Tea, and Coffee contain caffeine.',
      },
    ],
    finalCTA: {
      headline: 'Your Boba Is Waiting on Kalākaua',
      body: 'Six flavors, $8.95, sealed to go. Open 7 AM – 9 PM daily, steps from the beach.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: { title: 'ワイキキでボバ（タピオカ）ならMochi Land', subtitle: '缶入りボバミルクティー6種類、すべて$8.95。', date: '2026年8月公開', readTime: '読了4分', badge: 'ボバガイド' },
    intro: 'ワイキキで本格タピオカは意外と見つからないもの。Mochi Land（コナコーヒードーナツ内）は缶入りボバミルクティー6種、ボバスムージー、$1.95のボバ追加まで揃うボバ専門カウンターです。',
    visitCTA: { headline: '6種類、すべて$8.95', body: 'クラシック、黒糖、ウベ、コーヒー、タイティー、抹茶。密封缶入りでビーチへの持ち運びも◎。毎日7時〜21時。', menuLabel: 'ドリンクメニュー', directionsLabel: '行き方を確認' },
    sections: [
      { h2: '缶入りボバミルクティー全6種', body: '底にはもちもちの黒糖タピオカ。', bullets: ['クラシックミルクティー', '黒糖（タイガーストライプ）', 'ウベ（紫芋）', 'コーヒー', 'タイティー', '抹茶'], pullout: { title: '初めてなら', body: '定番体験なら黒糖、映え重視ならウベ、迷ったらクラシック。' } },
      { h2: 'ボバスムージーと追加ボバ', body: 'スムージー($10.95)にも黒糖・タイティー・タロなどボバ入りが揃い、他のスムージーにも$1.95でボバ追加可能。' },
      { h2: 'ドーナツとのペアリング', body: '隣はモチドーナツのショーケース。', bullets: ['黒糖ボバ + 黒ごまドーナツ', 'ウベボバ + ウベドーナツ', '抹茶ボバ + きなこドーナツ'] },
    ],
    faq: [
      { q: '価格は？', a: '缶入りボバミルクティーは全種$8.95。スムージーは$10.95。' },
      { q: 'ビーチに持って行ける？', a: '密封缶なので持ち運びに最適。ビーチまで徒歩5分。' },
      { q: 'カフェインなしは？', a: 'ウベと黒糖はカフェインフリー。' },
    ],
    finalCTA: { headline: 'カラカウア通りでボバを', body: '6種類$8.95、密封テイクアウト。毎日7時〜21時。', visitLabel: '今日来店', callLabel: '電話 (808) 304-1808' },
  },
  ko: {
    hero: { title: '와이키키 보바는 Mochi Land', subtitle: '캔 보바 밀크티 6종, 전부 $8.95.', date: '2026년 8월 발행', readTime: '4분 분량', badge: '보바 가이드' },
    intro: '와이키키에서 제대로 된 보바 찾기가 은근 어렵죠. Mochi Land(코나커피도넛 내)는 캔 보바 밀크티 6종, 보바 스무디, $1.95 보바 추가까지 갖춘 보바 카운터입니다.',
    visitCTA: { headline: '6종 전부 $8.95', body: '클래식, 흑당, 우베, 커피, 타이티, 말차. 밀봉 캔이라 비치 테이크아웃에 최적. 매일 7시–21시.', menuLabel: '음료 메뉴 보기', directionsLabel: '길찾기' },
    sections: [
      { h2: '캔 보바 밀크티 6종', body: '바닥엔 쫀득한 흑당 타피오카.', bullets: ['클래식 밀크티', '흑당(타이거 스트라이프)', '우베(자색 얌)', '커피', '타이티', '말차'], pullout: { title: '처음이라면', body: '정석은 흑당, 사진은 우베, 안전빵은 클래식.' } },
      { h2: '보바 스무디 & 보바 추가', body: '스무디($10.95)에도 흑당·타이티·타로 등 보바 들어간 메뉴가 있고, 어떤 스무디든 $1.95에 보바 추가 가능.' },
      { h2: '도넛 페어링', body: '보바 옆이 바로 모치도넛 쇼케이스.', bullets: ['흑당 보바 + 검은깨 도넛', '우베 보바 + 우베 도넛', '말차 보바 + 인절미 도넛'] },
    ],
    faq: [
      { q: '가격은?', a: '캔 보바 밀크티 전 종류 $8.95, 보바 스무디 $10.95.' },
      { q: '비치에 들고 갈 수 있나요?', a: '밀봉 캔이라 최적. 비치까지 도보 5분.' },
      { q: '카페인 없는 메뉴는?', a: '우베와 흑당이 카페인프리.' },
    ],
    finalCTA: { headline: '칼라카우아에서 보바 한 캔', body: '6종 $8.95, 밀봉 테이크아웃. 매일 7시–21시.', visitLabel: '오늘 방문', callLabel: '전화 (808) 304-1808' },
  },
  zh: {
    hero: { title: '威基基珍珠奶茶指南 — Mochi Land', subtitle: '罐装珍珠奶茶6种口味，均价$8.95。', date: '2026年8月发布', readTime: '4分钟', badge: '奶茶指南' },
    intro: '在威基基找一杯正宗珍珠奶茶并不容易。Mochi Land（位于Kona Coffee Donut内）提供6种罐装珍珠奶茶、珍珠奶昔，任意饮品还可$1.95加珍珠。',
    visitCTA: { headline: '6种口味，均价$8.95', body: '经典、黑糖、紫薯、咖啡、泰式、抹茶。密封罐装，海滩外带首选。每天7点–21点。', menuLabel: '查看饮品菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '罐装珍珠奶茶全6种', body: '罐底是Q弹黑糖珍珠。', bullets: ['经典奶茶', '黑糖（虎纹）', '紫薯', '咖啡', '泰式奶茶', '抹茶'], pullout: { title: '第一次点？', body: '经典体验选黑糖，拍照选紫薯，稳妥选经典奶茶。' } },
      { h2: '珍珠奶昔与加珍珠', body: '奶昔($10.95)中黑糖、泰式、芋头等自带珍珠，其他奶昔也可$1.95加珍珠。' },
      { h2: '甜甜圈搭配', body: '奶茶旁边就是麻糬甜甜圈柜。', bullets: ['黑糖珍珠 + 黑芝麻甜甜圈', '紫薯珍珠 + 紫薯甜甜圈', '抹茶珍珠 + 黄豆粉甜甜圈'] },
    ],
    faq: [
      { q: '价格？', a: '罐装珍珠奶茶全部$8.95，珍珠奶昔$10.95。' },
      { q: '能带去海滩吗？', a: '密封罐装最适合外带，海滩步行5分钟。' },
      { q: '有无咖啡因选择吗？', a: '紫薯和黑糖不含咖啡因。' },
    ],
    finalCTA: { headline: '卡拉考阿大道的珍珠奶茶', body: '6种口味$8.95，密封外带。每天7点–21点。', visitLabel: '立即到店', callLabel: '致电 (808) 304-1808' },
  },
  es: {
    hero: { title: 'Boba en Waikiki: Guía Mochi Land', subtitle: 'Seis tés con boba en lata, todos a $8.95.', date: 'Agosto 2026', readTime: '4 min', badge: 'Guía de Boba' },
    intro: 'Mochi Land, dentro de Kona Coffee Donut en Kalākaua, ofrece seis boba milk teas en lata, smoothies con boba y perlas extra por $1.95.',
    visitCTA: { headline: 'Seis sabores, un precio: $8.95', body: 'Clásico, azúcar morena, ube, café, té tailandés y matcha. Lata sellada, perfecta para la playa. 7 AM – 9 PM.', menuLabel: 'Ver Menú de Bebidas', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Los seis sabores — todos $8.95', body: 'Perlas de tapioca con azúcar morena al fondo.', bullets: ['Milk tea clásico', 'Azúcar morena', 'Ube (ñame morado)', 'Café', 'Té tailandés', 'Matcha'] },
      { h2: 'Smoothies con boba', body: 'Los smoothies ($10.95) de azúcar morena, té tailandés y taro vienen con perlas; agrega boba a cualquier otro por $1.95.' },
    ],
    faq: [
      { q: '¿Precio?', a: 'Todos los boba milk teas en lata cuestan $8.95.' },
      { q: '¿Puedo llevarlo a la playa?', a: 'Sí — la lata sellada viaja perfecto. La playa está a 5 minutos.' },
    ],
    finalCTA: { headline: 'Tu boba te espera en Kalākaua', body: 'Seis sabores, $8.95, sellado para llevar.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 304-1808' },
  },
};

export default function BobaWaikikiPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
