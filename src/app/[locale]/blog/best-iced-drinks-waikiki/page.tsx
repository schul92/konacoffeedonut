'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'best-iced-drinks-waikiki',
  imageSrc: '/images/blog/best-iced-drinks-waikiki.jpeg',
  imageAlt:
    'Iced drinks at Kona Coffee Donut in Waikiki — Kona cold brew, strawberry matcha latte, brown sugar boba can, mango coconut lilikoi smoothie and Waikiki Rainbow shave ice',
  schemaHeadline: 'Iced Drinks in Waikiki: Cold Brew, Boba & Shave Ice From $5.35',
  schemaDescription:
    'Every cold drink at Kona Coffee Donut, 2142 Kalākaua Ave, Waikiki: iced Americano $5.35, Kona Cold Brew $6.95, boba cans $8.95, smoothies from $10.95, lemonade $8.95, shave ice $12.95.',
  datePublished: '2026-10-11',
  linkKonaMenu: true,
  related: [
    {
      path: '/blog/boba-waikiki',
      label: {
        en: 'Boba in Waikiki: the Mochi Land guide',
        ja: 'ワイキキでボバならMochi Land',
        ko: '와이키키 보바는 Mochi Land',
        zh: '威基基珍珠奶茶指南',
        es: 'Boba en Waikiki',
      },
    },
    {
      path: '/blog/best-smoothies-waikiki',
      label: {
        en: 'Best smoothies in Waikiki',
        ja: 'ワイキキのベストスムージー',
        ko: '와이키키 베스트 스무디',
        zh: '威基基最佳奶昔',
        es: 'Mejores smoothies en Waikiki',
      },
    },
    {
      path: '/blog/iced-matcha-latte-waikiki',
      label: {
        en: 'Iced matcha latte in Waikiki',
        ja: 'ワイキキのアイス抹茶ラテ',
        ko: '와이키키 아이스 말차 라떼',
        zh: '威基基冰抹茶拿铁',
        es: 'Matcha latte helado en Waikiki',
      },
    },
  ],
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Iced Drinks in Waikiki: Cold Brew, Boba & Shave Ice From $5.35',
      subtitle: 'Every cold thing on our menu with real prices, ranked by how fast it cools you down — about 5 minutes from Waikiki Beach.',
      date: 'Published October 2026',
      readTime: '5 min read',
      badge: 'Drink Guide',
    },
    intro:
      "It's mid-afternoon on Kalākaua, you've been on the sand since ten, and what you want is cold, right now. The counter at Kona Coffee Donut (the drink side is called Mochi Land) runs a long cold menu in one place: Kona cold brew, iced lattes, iced matcha in a dozen flavors, sealed boba cans, smoothies, fresh lemonades and Hawaiian shave ice. Below is the whole cold lineup with the prices we actually charge, grouped from 'brain freeze' to 'cold caffeine', plus a cheat sheet for what to order on each kind of hot day. Everything here is served 7 AM to 9 PM daily at 2142 Kalākaua Ave.",
    visitCTA: {
      headline: 'Cold Drinks From $5.35, Open Until 9 PM',
      body:
        'Iced Americano $5.35, Kona Cold Brew $6.95, boba cans $8.95, smoothies from $10.95, shave ice $12.95. 2142 Kalākaua Ave, about 5 minutes from Waikiki Beach.',
      menuLabel: 'See the Drink Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'Coldest: Hawaiian Shave Ice ($12.95) and Milk Bingsu ($15.95)',
        body:
          "If the goal is pure temperature, nothing beats a mountain of shaved ice. Our Hawaiian shave ice comes in five island flavors — Waikiki Rainbow, Paradise Lilikoi, Volcano Island, Coco Head and Tropical Jungle — at $12.95. Korean-style milk bingsu ($15.95) is shaved from frozen milk instead of water, so it's creamier, and one bowl is easily enough for two.",
      },
      {
        h2: 'Most Refreshing: Smoothies and Lemonade',
        body:
          'Twelve classic smoothies are $10.95: mango, strawberry, piña colada, lychee, coconut, ube, taro, Thai tea, milk tea, brown sugar, chai and coffee. The four premium fruit smoothies — açaí berry, strawberry banana, coconut pineapple and mango coconut lilikoi — are $12.95. Add chewy boba to any smoothie for $1.95. For something lighter, our lemonades (classic, lilikoi, mango, strawberry) are $8.95.',
      },
      {
        h2: 'Easiest to Carry: Sealed Boba Cans ($8.95)',
        body:
          "Our boba milk teas come in tall cans sealed to order — Classic, Brown Sugar, Ube, Coffee, Thai Tea and Matcha, all $8.95. Sealed means no leaks in a beach bag, so it's the drink that travels best back to the sand, the pool or the hotel lanai.",
      },
      {
        h2: 'Cold Caffeine: Cold Brew, Iced Lattes and Iced Matcha',
        body: 'When you need the caffeine but not the heat:',
        bullets: [
          'Iced Americano — $5.35, the cheapest cold coffee on the menu',
          'Iced latte — $6.35 (oat, coconut, soy, almond or macadamia milk +$1)',
          'Kona Cold Brew — $6.95, smooth and low-acid',
          'Iced matcha latte — $9.95, or with mango, guava, lilikoi, coconut or banana for the same price',
          'Strawberry Matcha — $11.95, our bestselling matcha',
          'Kona Affogato — $8.50, espresso poured over ice cream',
        ],
        pullout: {
          title: 'Low-caffeine pick',
          body: "Hojicha (roasted green tea) lattes are $9.95 and naturally lower in caffeine than coffee or matcha — iced hojicha is the move for a late-afternoon drink that won't keep you up.",
        },
      },
      {
        h2: 'What to Order for Your Kind of Hot Day',
        bullets: [
          'Just off the beach and overheated → Waikiki Rainbow shave ice',
          'Need coffee but it is hot out → Kona Cold Brew',
          'Walking back to the hotel → a sealed boba can',
          'Want something fruity and filling → a premium smoothie with boba',
          'Kids in tow → a strawberry or mango smoothie, or a lemonade',
          'Still hungry → add a Malasada Ice Cream Sandwich ($8.95)',
        ],
        body: 'A quick cheat sheet:',
      },
    ],
    faq: [
      {
        q: 'Where can I get iced drinks near Waikiki Beach?',
        a: 'Kona Coffee Donut, 2142 Kalākaua Ave — about a 5-minute walk from Waikiki Beach — serves Kona Cold Brew ($6.95), iced lattes ($6.35), boba cans ($8.95), smoothies from $10.95, lemonades ($8.95) and Hawaiian shave ice ($12.95), 7 AM to 9 PM daily.',
      },
      {
        q: 'What is the cheapest iced coffee at Kona Coffee Donut?',
        a: 'The iced Americano at $5.35. An iced latte is $6.35 and the Kona Cold Brew is $6.95 at Kona Coffee Donut, 2142 Kalākaua Ave, Waikiki.',
      },
      {
        q: 'Is there boba near Waikiki Beach?',
        a: 'Yes. Mochi Land inside Kona Coffee Donut, 2142 Kalākaua Ave, sells six sealed boba milk tea cans at $8.95 each, and boba can be added to any smoothie for $1.95.',
      },
      {
        q: 'How much is shave ice at Kona Coffee Donut?',
        a: 'Hawaiian shave ice is $12.95 in five flavors and Korean milk bingsu is $15.95, served 7 AM to 9 PM daily at Kona Coffee Donut, 2142 Kalākaua Ave, Waikiki.',
      },
      {
        q: 'Which cold drinks are caffeine-free?',
        a: 'Fruit smoothies, lemonades and shave ice are caffeine-free choices at Kona Coffee Donut. Coffee, matcha, hojicha and tea-based drinks contain caffeine.',
      },
    ],
    finalCTA: {
      headline: 'Cool Off on Kalākaua Today',
      body: 'Cold drinks from $5.35, plus shave ice, boba and smoothies. Open 7 AM – 9 PM, about 5 minutes from the beach.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 260-1835',
    },
  },
  ja: {
    hero: { title: 'ワイキキの冷たいドリンク：コールドブリュー・ボバ・かき氷', subtitle: 'メニューの冷たいもの全部を実際の価格つきで。ワイキキビーチから徒歩約5分。', date: '2026年10月公開', readTime: '読了5分', badge: 'ドリンクガイド' },
    intro: 'カラカウア通りの午後、とにかく冷たいものが欲しいとき。Kona Coffee Donut（ドリンクカウンターはMochi Land）には、コナ・コールドブリュー、アイスラテ、アイス抹茶、缶入りボバ、スムージー、レモネード、ハワイアンかき氷がそろっています。毎日朝7時〜夜9時、2142 Kalākaua Ave。',
    visitCTA: { headline: '冷たいドリンク$5.35から、夜9時まで', body: 'アイスアメリカーノ$5.35、コナ・コールドブリュー$6.95、缶ボバ$8.95、スムージー$10.95〜、かき氷$12.95。', menuLabel: 'ドリンクメニュー', directionsLabel: '行き方を確認' },
    sections: [
      { h2: '一番冷たい：かき氷とミルクビンス', body: 'ハワイアンかき氷は5種類で$12.95（ワイキキレインボー、パラダイスリリコイ、ボルケーノアイランド、ココヘッド、トロピカルジャングル）。牛乳を凍らせて削る韓国式ミルクビンスは$15.95で、2人でシェアできるサイズです。' },
      { h2: 'さっぱり：スムージーとレモネード', body: 'スムージーは12種類$10.95、プレミアムフルーツスムージー4種は$12.95。どれにもボバ追加$1.95。レモネード（クラシック、リリコイ、マンゴー、ストロベリー）は$8.95。' },
      { h2: '冷たいカフェイン', body: 'アイスアメリカーノ$5.35、アイスラテ$6.35、コナ・コールドブリュー$6.95、アイス抹茶ラテ$9.95、ストロベリー抹茶$11.95（一番人気の抹茶）。缶入りボバミルクティー6種はすべて$8.95で、密封なのでビーチに持って行けます。' },
    ],
    faq: [
      { q: 'ワイキキビーチの近くで冷たいドリンクが買えるのは？', a: 'Kona Coffee Donut（2142 Kalākaua Ave、ワイキキビーチから徒歩約5分）で、コールドブリュー$6.95、アイスラテ$6.35、缶ボバ$8.95、スムージー$10.95〜、かき氷$12.95。毎日朝7時〜夜9時。' },
      { q: '一番安いアイスコーヒーは？', a: 'Kona Coffee Donutではアイスアメリカーノの$5.35です。' },
    ],
    finalCTA: { headline: '今日はカラカウア通りでひと休み', body: '冷たいドリンク$5.35から。毎日朝7時〜夜9時。', visitLabel: '今日来店', callLabel: '電話 (808) 260-1835' },
  },
  ko: {
    hero: { title: '와이키키 아이스 음료: 콜드브루·보바·빙수', subtitle: '메뉴의 시원한 음료 전부, 실제 가격으로. 와이키키 비치에서 도보 약 5분.', date: '2026년 10월 발행', readTime: '5분 분량', badge: '음료 가이드' },
    intro: '칼라카우아의 더운 오후, 당장 시원한 게 필요할 때. Kona Coffee Donut(음료 카운터 이름은 Mochi Land)에는 코나 콜드브루, 아이스 라떼, 아이스 말차, 캔 보바, 스무디, 레모네이드, 하와이안 빙수가 한곳에 있습니다. 매일 아침 7시–밤 9시, 2142 Kalākaua Ave.',
    visitCTA: { headline: '시원한 음료 $5.35부터, 밤 9시까지', body: '아이스 아메리카노 $5.35, 코나 콜드브루 $6.95, 캔 보바 $8.95, 스무디 $10.95부터, 빙수 $12.95.', menuLabel: '음료 메뉴 보기', directionsLabel: '길찾기' },
    sections: [
      { h2: '가장 시원한 것: 하와이안 빙수와 우유 빙수', body: '하와이안 셰이브 아이스는 5가지 맛 $12.95(와이키키 레인보우, 파라다이스 릴리코이, 볼케이노 아일랜드, 코코 헤드, 트로피컬 정글). 우유를 얼려 간 한국식 빙수는 $15.95로 둘이 나눠 먹기 좋습니다.' },
      { h2: '상큼한 것: 스무디와 레모네이드', body: '스무디 12가지 $10.95, 프리미엄 과일 스무디 4가지 $12.95. 어떤 스무디든 보바 추가 $1.95. 레모네이드(클래식, 릴리코이, 망고, 딸기)는 $8.95.' },
      { h2: '시원한 카페인', body: '아이스 아메리카노 $5.35, 아이스 라떼 $6.35, 코나 콜드브루 $6.95, 아이스 말차 라떼 $9.95, 딸기 말차 $11.95(말차 판매 1위). 캔 보바 밀크티 6가지는 모두 $8.95, 밀봉이라 비치에 들고 가기 좋습니다.' },
    ],
    faq: [
      { q: '와이키키 비치 근처에서 시원한 음료는 어디서 사나요?', a: 'Kona Coffee Donut(2142 Kalākaua Ave, 와이키키 비치에서 도보 약 5분)에서 콜드브루 $6.95, 아이스 라떼 $6.35, 캔 보바 $8.95, 스무디 $10.95부터, 빙수 $12.95. 매일 아침 7시–밤 9시.' },
      { q: '제일 저렴한 아이스 커피는?', a: 'Kona Coffee Donut의 아이스 아메리카노 $5.35입니다.' },
    ],
    finalCTA: { headline: '오늘 칼라카우아에서 더위 식히기', body: '시원한 음료 $5.35부터. 매일 아침 7시–밤 9시.', visitLabel: '오늘 방문', callLabel: '전화 (808) 260-1835' },
  },
  zh: {
    hero: { title: '威基基冰饮指南：冷萃咖啡、珍珠奶茶、刨冰', subtitle: '菜单上所有冰饮，附真实价格。距威基基海滩步行约5分钟。', date: '2026年10月发布', readTime: '5分钟', badge: '饮品指南' },
    intro: '卡拉考阿大道的炎热午后，只想马上来点冰的。Kona Coffee Donut（饮品柜台叫Mochi Land）一次备齐科纳冷萃、冰拿铁、冰抹茶、罐装珍珠奶茶、奶昔、柠檬水和夏威夷刨冰。每天早7点至晚9点，2142 Kalākaua Ave。',
    visitCTA: { headline: '冰饮$5.35起，营业到晚上9点', body: '冰美式$5.35、科纳冷萃$6.95、罐装珍珠奶茶$8.95、奶昔$10.95起、刨冰$12.95。', menuLabel: '查看饮品菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '最冰爽：夏威夷刨冰与牛奶雪冰', body: '夏威夷刨冰5种口味$12.95（Waikiki Rainbow、Paradise Lilikoi、Volcano Island、Coco Head、Tropical Jungle）。用冷冻牛奶刨成的韩式雪冰$15.95，两人分享刚好。' },
      { h2: '最清爽：奶昔与柠檬水', body: '经典奶昔12种$10.95，高级水果奶昔4种$12.95，任何奶昔加珍珠$1.95。柠檬水（原味、百香果、芒果、草莓）$8.95。' },
      { h2: '冰咖啡因', body: '冰美式$5.35、冰拿铁$6.35、科纳冷萃$6.95、冰抹茶拿铁$9.95、草莓抹茶$11.95（最畅销的抹茶）。6种罐装珍珠奶茶均为$8.95，密封包装方便带去海滩。' },
    ],
    faq: [
      { q: '威基基海滩附近哪里能买到冰饮？', a: 'Kona Coffee Donut（2142 Kalākaua Ave，距威基基海滩步行约5分钟）：冷萃$6.95、冰拿铁$6.35、罐装珍珠奶茶$8.95、奶昔$10.95起、刨冰$12.95，每天早7点至晚9点。' },
      { q: '最便宜的冰咖啡是哪款？', a: 'Kona Coffee Donut的冰美式，$5.35。' },
    ],
    finalCTA: { headline: '今天来卡拉考阿大道消暑', body: '冰饮$5.35起，每天早7点至晚9点。', visitLabel: '立即到店', callLabel: '致电 (808) 260-1835' },
  },
  es: {
    hero: { title: 'Bebidas frías en Waikiki: cold brew, boba y raspado', subtitle: 'Todo lo frío de nuestro menú con precios reales, a unos 5 minutos de la playa de Waikiki.', date: 'Octubre 2026', readTime: '5 min', badge: 'Guía de bebidas' },
    intro: 'Tarde de calor en Kalākaua y solo quieres algo frío. Kona Coffee Donut (el mostrador de bebidas se llama Mochi Land) tiene cold brew Kona, lattes helados, matcha helado, boba en lata, smoothies, limonadas y raspado hawaiano en un solo lugar. Todos los días de 7 AM a 9 PM en 2142 Kalākaua Ave.',
    visitCTA: { headline: 'Bebidas frías desde $5.35, hasta las 9 PM', body: 'Americano helado $5.35, Kona Cold Brew $6.95, boba en lata $8.95, smoothies desde $10.95, raspado $12.95.', menuLabel: 'Ver Menú de Bebidas', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Lo más frío: raspado hawaiano y bingsu de leche', body: 'Raspado hawaiano en cinco sabores por $12.95; bingsu coreano de leche por $15.95, perfecto para compartir.' },
      { h2: 'Lo más refrescante: smoothies y limonadas', body: 'Doce smoothies clásicos a $10.95, cuatro smoothies premium de fruta a $12.95 y boba extra por $1.95. Limonadas (clásica, lilikoi, mango, fresa) a $8.95.' },
    ],
    faq: [
      { q: '¿Dónde comprar bebidas frías cerca de la playa de Waikiki?', a: 'En Kona Coffee Donut, 2142 Kalākaua Ave, a unos 5 minutos a pie: cold brew $6.95, latte helado $6.35, boba en lata $8.95, smoothies desde $10.95 y raspado $12.95, de 7 AM a 9 PM.' },
      { q: '¿Cuál es el café helado más barato?', a: 'El americano helado de Kona Coffee Donut, a $5.35.' },
    ],
    finalCTA: { headline: 'Refréscate hoy en Kalākaua', body: 'Bebidas frías desde $5.35. De 7 AM a 9 PM.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 260-1835' },
  },
};

export default function BestIcedDrinksWaikikiPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
