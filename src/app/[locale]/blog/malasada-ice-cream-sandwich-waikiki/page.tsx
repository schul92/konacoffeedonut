'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'malasada-ice-cream-sandwich-waikiki',
  imageSrc: '/images/blog/malasada-ice-cream-sandwich-waikiki.jpeg',
  imageAlt:
    'Malasada ice cream sandwiches in eight flavors — vanilla, strawberry, ube, chocolate, coconut, matcha, cookies & cream and Kona coffee — at Kona Coffee Donut in Waikiki',
  schemaHeadline: 'Malasada Ice Cream Sandwich in Waikiki: 8 Flavors, $8.95',
  schemaDescription:
    'The new Malasada Ice Cream Sandwich at Kona Coffee Donut, 2142 Kalākaua Ave, Waikiki: a sugar-coated malasada filled with a scoop of ice cream, eight flavors at $8.95, toppings $1.50.',
  datePublished: '2026-10-11',
  related: [
    {
      path: '/blog/what-is-a-malasada',
      label: {
        en: "What is a malasada? Hawaii's Portuguese donut explained",
        ja: 'マラサダとは？ハワイのポルトガル風ドーナツ',
        ko: '말라사다란? 하와이의 포르투갈식 도넛',
        zh: '什么是马拉萨达？夏威夷的葡式甜甜圈',
        es: '¿Qué es una malasada?',
      },
    },
    {
      path: '/blog/late-night-dessert-waikiki',
      label: {
        en: 'Late-night dessert in Waikiki (open until 9 PM)',
        ja: 'ワイキキ夜のスイーツ（21時まで）',
        ko: '와이키키 야식 디저트 (밤 9시까지)',
        zh: '威基基深夜甜品（营业到晚上9点）',
        es: 'Postres de noche en Waikiki',
      },
    },
    {
      path: '/blog/best-desserts-waikiki',
      label: {
        en: 'Best desserts in Waikiki',
        ja: 'ワイキキのベストデザート',
        ko: '와이키키 베스트 디저트',
        zh: '威基基最佳甜点',
        es: 'Mejores postres en Waikiki',
      },
    },
  ],
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Malasada Ice Cream Sandwich in Waikiki',
      subtitle: 'A sugar-coated malasada split open and filled with a full scoop of ice cream — eight flavors, $8.95, new on Kalākaua Avenue.',
      date: 'Published October 2026',
      readTime: '4 min read',
      badge: 'New on the Menu',
    },
    intro:
      "The malasada — Hawaii's Portuguese-style sugared donut — usually comes out of a bakery box, plain or cream-filled. At Kona Coffee Donut on Kalākaua Avenue we split one open and set a full scoop of ice cream between the halves. That's the Malasada Ice Cream Sandwich: one price ($8.95), eight ice cream flavors, and five toppings at $1.50 each. It went on the counter at the end of September 2026; in its first ten days we sold more than fifty, and vanilla accounted for over half of them. Here's every flavor, how to order, what to drink with it, and how to eat it before the Waikiki sun gets to it first.",
    visitCTA: {
      headline: 'Eight Flavors, One Price: $8.95',
      body:
        'Vanilla, Strawberry, Ube, Chocolate, Coconut, Matcha, Cookie Oreo and Kona Coffee — pick a scoop, add a topping for $1.50. 2142 Kalākaua Ave, open 7 AM to 9 PM daily, about 5 minutes from Waikiki Beach.',
      menuLabel: 'See the Full Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'What Is a Malasada Ice Cream Sandwich?',
        body:
          "A malasada is fried yeast dough — airy and eggy inside, rolled in sugar outside, no hole. Instead of a custard or ube cream filling, we slice it like a bun and press a scoop of ice cream into the middle. You get the sugar crust, the soft dough and cold ice cream in the same bite. If you've had an Italian brioche con gelato or a Korean ice cream bun, it's the same idea — built on Hawaii's favorite donut.",
      },
      {
        h2: 'All 8 Ice Cream Flavors',
        body: 'Every flavor is the same $8.95, so order the one you actually want:',
        bullets: [
          'Vanilla — the early bestseller, more than half of the first fifty-plus sandwiches sold',
          'Strawberry — pink, fruity and bright',
          'Ube — Filipino purple yam, nutty and vanilla-sweet, the most photographed one',
          'Chocolate — rich and dark',
          'Coconut — the most island-tasting scoop on the board',
          'Matcha — green tea, not too sweet',
          'Cookie Oreo — cookies & cream with crushed cookie pieces',
          'Kona Coffee — a coffee scoop for the coffee crowd',
        ],
        pullout: {
          title: 'First time?',
          body: "Start with Vanilla — it lets the malasada itself shine, and it's what most people order. Want the photo? Get Ube.",
        },
      },
      {
        h2: 'Add a Topping (+$1.50 Each)',
        body: 'Five toppings at $1.50 each, and you can stack more than one:',
        bullets: ['Strawberry Pebble', 'Choco Pebble', 'Sprinkles', 'Frosted', 'M&M'],
      },
      {
        h2: 'How to Eat It Before It Melts',
        body:
          "Waikiki afternoons run warm, and a scoop between two halves of a donut waits for no one. Eat it in the first few minutes, hold it like a burger with the napkin wrapped around the bottom, and enjoy it at the counter or a nearby bench rather than on the walk to the sand. With a group, order it last so it isn't sitting while the drinks are made.",
      },
      {
        h2: 'What to Drink With It',
        body:
          "The sandwich is sweet, so cut it with something bitter. A hot 100% Kona coffee ($7.00) or an Americano ($5.35) is the classic pairing; Kona Cold Brew ($6.95) if you want everything cold. Matcha fans: the Matcha sandwich with an iced matcha latte ($9.95) is the full green-tea move.",
      },
    ],
    faq: [
      {
        q: 'Where can I get a malasada ice cream sandwich in Waikiki?',
        a: 'At Kona Coffee Donut, 2142 Kalākaua Ave, Honolulu — about a 5-minute walk from Waikiki Beach. The Malasada Ice Cream Sandwich is $8.95 in eight flavors and is served 7 AM to 9 PM daily.',
      },
      {
        q: 'How much is the malasada ice cream sandwich?',
        a: '$8.95 for any of the eight ice cream flavors at Kona Coffee Donut in Waikiki. Toppings — Strawberry Pebble, Choco Pebble, Sprinkles, Frosted or M&M — are $1.50 each.',
      },
      {
        q: 'What ice cream flavors can I choose?',
        a: 'Vanilla, Strawberry, Ube, Chocolate, Coconut, Matcha, Cookie Oreo (cookies & cream) and Kona Coffee. Vanilla has been the bestseller since the sandwich launched in late September 2026.',
      },
      {
        q: 'How is it different from a regular malasada?',
        a: 'A regular malasada is eaten plain or cream-filled — $3.95 classic or $4.95 cream-filled at Kona Coffee Donut. The ice cream sandwich splits a malasada and fills it with a full scoop of ice cream instead.',
      },
      {
        q: 'Can I get one at night?',
        a: 'Yes. Kona Coffee Donut on Kalākaua Avenue serves the Malasada Ice Cream Sandwich until 9 PM every day, later than most Waikiki bakeries.',
      },
    ],
    finalCTA: {
      headline: 'Try the New Malasada Sandwich Today',
      body: 'Eight flavors, $8.95, toppings $1.50. Open 7 AM – 9 PM on Kalākaua Avenue.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 260-1835',
    },
  },
  ja: {
    hero: { title: 'ワイキキのマラサダ・アイスクリームサンド', subtitle: 'シュガーをまぶしたマラサダにアイスをひとすくい。8種類、すべて$8.95。', date: '2026年10月公開', readTime: '読了4分', badge: '新メニュー' },
    intro: 'ハワイ名物のマラサダ（ポルトガル風の揚げドーナツ）を半分に切り、アイスクリームをひとすくいはさみました。カラカウア通りのKona Coffee Donutの新メニュー「マラサダ・アイスクリーム・サンドイッチ」は8種類すべて$8.95、トッピングは各$1.50。2026年9月末の発売から10日で50個以上売れ、その半分以上がバニラでした。',
    visitCTA: { headline: '8種類、すべて$8.95', body: 'バニラ、ストロベリー、ウベ、チョコレート、ココナッツ、抹茶、クッキーオレオ、コナコーヒー。毎日朝7時〜夜9時、ワイキキビーチから徒歩約5分。', menuLabel: 'メニューを見る', directionsLabel: '行き方を確認' },
    sections: [
      { h2: 'アイスは8種類', body: '迷ったらバニラ（一番人気）。写真映えならウベ（紫芋）。', bullets: ['バニラ', 'ストロベリー', 'ウベ（紫芋）', 'チョコレート', 'ココナッツ', '抹茶', 'クッキーオレオ', 'コナコーヒー'] },
      { h2: 'トッピング（各$1.50）', body: 'ストロベリーペブル、チョコペブル、スプリンクル、フロステッド、M&M。重ねがけもできます。' },
      { h2: '溶ける前に食べるコツ', body: 'ワイキキの午後は暑いので、受け取ったらすぐにどうぞ。ナプキンで下を包んでハンバーガーのように持つのがおすすめ。苦みのある100%コナコーヒー（$7.00）やアメリカーノ（$5.35）とよく合います。' },
    ],
    faq: [
      { q: 'ワイキキでマラサダのアイスサンドはどこで食べられますか？', a: 'Kona Coffee Donut（2142 Kalākaua Ave、ワイキキビーチから徒歩約5分）で、8種類すべて$8.95で販売しています。毎日朝7時〜夜9時。' },
      { q: '値段はいくらですか？', a: 'Kona Coffee Donutのマラサダ・アイスクリーム・サンドイッチは1個$8.95、トッピングは各$1.50です。' },
      { q: '夜でも買えますか？', a: 'はい。カラカウア通りのKona Coffee Donutでは毎日夜9時まで販売しています。' },
    ],
    finalCTA: { headline: '新メニューを今日カラカウア通りで', body: '8種類、$8.95。毎日朝7時〜夜9時。', visitLabel: '今日来店', callLabel: '電話 (808) 260-1835' },
  },
  ko: {
    hero: { title: '와이키키 말라사다 아이스크림 샌드위치', subtitle: '설탕 입힌 말라사다에 아이스크림 한 스쿱. 8가지 맛, 모두 $8.95.', date: '2026년 10월 발행', readTime: '4분 분량', badge: '신메뉴' },
    intro: '하와이 명물 말라사다(포르투갈식 튀긴 도넛)를 반으로 갈라 아이스크림 한 스쿱을 넣었습니다. 칼라카우아 거리 Kona Coffee Donut의 신메뉴 말라사다 아이스크림 샌드위치는 8가지 맛 모두 $8.95, 토핑은 하나에 $1.50입니다. 2026년 9월 말 출시 후 열흘 만에 50개 넘게 팔렸고, 그중 절반 이상이 바닐라였습니다.',
    visitCTA: { headline: '8가지 맛, 모두 $8.95', body: '바닐라, 딸기, 우베, 초콜릿, 코코넛, 말차, 쿠키 오레오, 코나커피. 매일 아침 7시–밤 9시, 와이키키 비치에서 도보 약 5분.', menuLabel: '메뉴 보기', directionsLabel: '길찾기' },
    sections: [
      { h2: '아이스크림 8가지', body: '고민되면 바닐라(판매 1위). 사진은 우베(보라색 얌)가 제일 잘 나옵니다.', bullets: ['바닐라', '딸기', '우베', '초콜릿', '코코넛', '말차', '쿠키 오레오', '코나커피'] },
      { h2: '토핑 추가 (하나에 $1.50)', body: '스트로베리 페블, 초코 페블, 스프링클, 프로스티드, M&M. 여러 개 올려도 됩니다.' },
      { h2: '녹기 전에 먹는 법', body: '와이키키 오후는 더워서 받자마자 드시는 게 좋습니다. 냅킨으로 아래를 감싸 햄버거처럼 잡으세요. 쌉쌀한 100% 코나커피($7.00)나 아메리카노($5.35)와 잘 어울립니다.' },
    ],
    faq: [
      { q: '와이키키에서 말라사다 아이스크림 샌드위치는 어디서 먹을 수 있나요?', a: 'Kona Coffee Donut(2142 Kalākaua Ave, 와이키키 비치에서 도보 약 5분)에서 8가지 맛 모두 $8.95에 판매합니다. 매일 아침 7시–밤 9시.' },
      { q: '가격은 얼마인가요?', a: 'Kona Coffee Donut의 말라사다 아이스크림 샌드위치는 1개 $8.95, 토핑은 하나당 $1.50입니다.' },
      { q: '밤에도 살 수 있나요?', a: '네. 칼라카우아 거리 Kona Coffee Donut에서 매일 밤 9시까지 판매합니다.' },
    ],
    finalCTA: { headline: '오늘 칼라카우아에서 신메뉴를', body: '8가지 맛, $8.95. 매일 아침 7시–밤 9시.', visitLabel: '오늘 방문', callLabel: '전화 (808) 260-1835' },
  },
  zh: {
    hero: { title: '威基基马拉萨达冰淇淋三明治', subtitle: '裹满砂糖的马拉萨达夹一球冰淇淋，8种口味，均价$8.95。', date: '2026年10月发布', readTime: '4分钟', badge: '新品' },
    intro: '把夏威夷名物马拉萨达（葡式炸甜甜圈）切开，夹进一大球冰淇淋——这就是卡拉考阿大道Kona Coffee Donut的新品马拉萨达冰淇淋三明治。8种口味均为$8.95，配料每份$1.50。2026年9月底上市后10天卖出50多个，其中一半以上是香草口味。',
    visitCTA: { headline: '8种口味，均价$8.95', body: '香草、草莓、紫山药（Ube）、巧克力、椰子、抹茶、奥利奥饼干、科纳咖啡。每天早7点至晚9点，距威基基海滩步行约5分钟。', menuLabel: '查看菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '8种冰淇淋口味', body: '不知道选什么就点香草（销量第一）；想拍照就选紫山药Ube。', bullets: ['香草', '草莓', '紫山药（Ube）', '巧克力', '椰子', '抹茶', '奥利奥饼干', '科纳咖啡'] },
      { h2: '加配料（每份$1.50）', body: '草莓脆片、巧克力脆片、彩色糖针、Frosted、M&M，可以叠加。' },
      { h2: '趁冰淇淋没化先吃', body: '威基基的下午很热，拿到后请尽快享用，用纸巾包住底部像汉堡一样拿。搭配微苦的100%科纳咖啡（$7.00）或美式（$5.35）最合适。' },
    ],
    faq: [
      { q: '在威基基哪里能吃到马拉萨达冰淇淋三明治？', a: 'Kona Coffee Donut（2142 Kalākaua Ave，距威基基海滩步行约5分钟），8种口味均为$8.95，每天早7点至晚9点。' },
      { q: '价格是多少？', a: 'Kona Coffee Donut的马拉萨达冰淇淋三明治每个$8.95，配料每份$1.50。' },
      { q: '晚上也能买到吗？', a: '可以。卡拉考阿大道的Kona Coffee Donut每天营业到晚上9点。' },
    ],
    finalCTA: { headline: '今天就来尝尝新品', body: '8种口味，$8.95。每天早7点至晚9点。', visitLabel: '立即到店', callLabel: '致电 (808) 260-1835' },
  },
  es: {
    hero: { title: 'Sándwich de helado con malasada en Waikiki', subtitle: 'Una malasada azucarada rellena con una bola de helado. Ocho sabores, todos a $8.95.', date: 'Octubre 2026', readTime: '4 min', badge: 'Nuevo' },
    intro: 'Partimos una malasada — la dona de estilo portugués típica de Hawái — y la rellenamos con una bola de helado. El nuevo Malasada Ice Cream Sandwich de Kona Coffee Donut, en Kalākaua Avenue, cuesta $8.95 en cualquiera de sus ocho sabores, y cada topping $1.50. En sus primeros diez días vendimos más de cincuenta, y más de la mitad fueron de vainilla.',
    visitCTA: { headline: 'Ocho sabores, un precio: $8.95', body: 'Vainilla, fresa, ube, chocolate, coco, matcha, galleta Oreo y café Kona. Abierto de 7 AM a 9 PM, a unos 5 minutos de la playa de Waikiki.', menuLabel: 'Ver Menú', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Los ocho sabores de helado', body: 'Si dudas, vainilla (el más vendido). Para la foto, ube.', bullets: ['Vainilla', 'Fresa', 'Ube (ñame morado)', 'Chocolate', 'Coco', 'Matcha', 'Galleta Oreo', 'Café Kona'] },
      { h2: 'Toppings ($1.50 cada uno)', body: 'Strawberry Pebble, Choco Pebble, chispas de colores, Frosted y M&M. Puedes combinar varios.' },
    ],
    faq: [
      { q: '¿Dónde comer un sándwich de helado con malasada en Waikiki?', a: 'En Kona Coffee Donut, 2142 Kalākaua Ave, a unos 5 minutos a pie de la playa de Waikiki. Cuesta $8.95 en ocho sabores, de 7 AM a 9 PM todos los días.' },
      { q: '¿Cuánto cuesta?', a: 'El Malasada Ice Cream Sandwich de Kona Coffee Donut cuesta $8.95; cada topping cuesta $1.50.' },
    ],
    finalCTA: { headline: 'Prueba el nuevo sándwich hoy', body: 'Ocho sabores, $8.95. De 7 AM a 9 PM en Kalākaua Avenue.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 260-1835' },
  },
};

export default function MalasadaIceCreamSandwichPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
