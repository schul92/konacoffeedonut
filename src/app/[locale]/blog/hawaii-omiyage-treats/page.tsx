'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'hawaii-omiyage-treats',
  imageSrc: '/images/blog/hawaii-omiyage-treats.jpeg',
  imageAlt:
    'A gift box of six mochi donuts next to a cup of Kona coffee and two malasadas at Kona Coffee Donut in Waikiki',
  schemaHeadline: 'Hawaii Omiyage Ideas: Kona Coffee Beans From Waikiki ($44.95)',
  schemaDescription:
    'What to bring home from Hawaii as omiyage: 7 oz bags of 100% Kona coffee ($44.95) and Lokahi blend ($18.95) at Kona Coffee Donut, 2142 Kalākaua Ave — plus fresh mochi donut and malasada boxes to enjoy before you fly.',
  datePublished: '2026-10-31',
  related: [
    {
      path: '/blog/buy-kona-coffee-waikiki',
      label: {
        en: 'Where to buy Kona coffee in Waikiki (and how to read the label)',
        ja: 'ワイキキでコナコーヒーを買うなら',
        ko: '와이키키에서 코나 커피 사는 법',
        zh: '在威基基哪里买科纳咖啡',
        es: 'Dónde comprar café Kona en Waikiki',
      },
    },
    {
      path: '/blog/is-kona-coffee-worth-it',
      label: {
        en: 'Is Kona coffee worth it?',
        ja: 'コナコーヒーは高いだけの価値がある？',
        ko: '코나 커피, 그 값어치가 있을까?',
        zh: '科纳咖啡值得买吗？',
        es: '¿Vale la pena el café Kona?',
      },
    },
    {
      path: '/blog/what-is-a-malasada',
      label: {
        en: 'What is a malasada?',
        ja: 'マラサダとは？',
        ko: '말라사다란?',
        zh: '什么是马拉萨达？',
        es: '¿Qué es una malasada?',
      },
    },
  ],
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Omiyage From Hawaii: What Travels Home, and What to Eat Before You Fly',
      subtitle: '100% Kona coffee beans for the suitcase, fresh mochi donuts and malasadas for the last morning — all on Kalākaua Avenue.',
      date: 'Published October 2026',
      readTime: '5 min read',
      badge: 'Gift Guide',
    },
    intro:
      "Omiyage — the Japanese custom of bringing gifts home from a trip for family and coworkers — has a few unwritten rules: it should be local, easy to share and still good when you unpack it a week later. That rules out most fresh pastries and points straight at coffee. Kona Coffee Donut at 2142 Kalākaua Ave sells 7 oz bags of 100% Kona coffee ($44.95) and a lower-priced Lokahi blend ($18.95), a few minutes' walk from Waikiki Beach and open 7 AM to 9 PM. The fresh stuff — mochi donuts and malasadas made in-house every morning — is still worth buying; just eat it before the flight instead of packing it.",
    visitCTA: {
      headline: '100% Kona Coffee Beans: $44.95',
      body:
        'A 7 oz bag of 100% Kona, or our Lokahi blend for $18.95. Taste it first: a cup of 100% Kona is $7.00. 2142 Kalākaua Ave, open 7 AM to 9 PM daily.',
      menuLabel: 'See the Full Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'What Makes Good Omiyage',
        body: 'The best omiyage checks four boxes:',
        bullets: [
          'Local — something that says Hawaii, not airport duty-free',
          'Shelf-stable — fine after a week in a suitcase',
          'Light and flat enough to pack',
          'Easy to share, or a clear "special" gift for one person',
        ],
      },
      {
        h2: '100% Kona Coffee Beans ($44.95, 7 oz)',
        body:
          "Kona coffee is grown only on the slopes of Hawaii Island's Kona district, which is why a bag of the real thing costs more than supermarket coffee — and why it lands well as a gift. Look for the words \"100% Kona\" on the bag; a \"Kona blend\" can contain as little as 10% Kona. Not sure you'll like it? Order a cup of 100% Kona ($7.00) at the counter before you buy the bag.",
        pullout: {
          title: 'Office omiyage hack',
          body: 'One bag of 100% Kona for the person who matters most, Lokahi blend bags ($18.95) for the rest of the team.',
        },
      },
      {
        h2: 'A Lower-Priced Coffee Gift: Lokahi Blend ($18.95)',
        body:
          "Buying for a whole office? Our Lokahi blend comes in the same 7 oz size for $18.95. It is a blend, not 100% Kona — ask at the counter what's in it and pick the one that fits the person you're buying for.",
      },
      {
        h2: 'Fresh Treats Are for Today, Not the Suitcase',
        body:
          "Mochi donuts ($3.95 each, $22.50 for 6, $45.00 for 12) and malasadas ($3.95 classic, $4.95 cream; dozens $45.00 and $57.00) are made in-house every morning and taste best the day you buy them. Pick up a box for the hotel on your last night or the morning of your flight, and share it before you board. If you are carrying food across a border, check your home country's customs rules first.",
      },
      {
        h2: 'Packing Coffee for the Flight',
        body:
          'Keep the bag sealed until you are home, store it away from heat in your luggage and give it within a few weeks while the aroma is at its best.',
      },
    ],
    faq: [
      {
        q: 'What is a good omiyage from Hawaii?',
        a: 'Coffee beans travel best. Kona Coffee Donut, 2142 Kalākaua Ave in Waikiki, sells 7 oz bags of 100% Kona coffee for $44.95 and a Lokahi blend for $18.95, open 7 AM to 9 PM daily.',
      },
      {
        q: 'How much is 100% Kona coffee in Waikiki?',
        a: 'At Kona Coffee Donut in Waikiki, a 7 oz bag of 100% Kona coffee is $44.95 and a cup of 100% Kona coffee is $7.00.',
      },
      {
        q: 'Can I take mochi donuts or malasadas home on the plane?',
        a: 'They are made in-house every morning and taste best the same day, so buy a box (6 mochi donuts $22.50, 6 malasadas $22.50) for the hotel or the morning of your flight. Check your destination’s customs rules before carrying food across a border.',
      },
      {
        q: 'Is a Kona blend the same as 100% Kona?',
        a: 'No. Only coffee labeled "100% Kona" is entirely Kona-grown; a Kona blend can contain as little as 10% Kona. At Kona Coffee Donut the 100% Kona bag is $44.95 and the Lokahi blend is $18.95.',
      },
      {
        q: 'Where can I buy omiyage near Waikiki Beach?',
        a: 'Kona Coffee Donut on Kalākaua Avenue, about a 5-minute walk from Waikiki Beach, sells 100% Kona coffee beans ($44.95) and Lokahi blend ($18.95) from 7 AM to 9 PM daily.',
      },
    ],
    finalCTA: {
      headline: 'Pick Up Your Omiyage on Kalākaua',
      body: '100% Kona beans $44.95, Lokahi blend $18.95, a cup of Kona $7.00. Open 7 AM – 9 PM daily.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 260-1835',
    },
  },
  ja: {
    hero: { title: 'ハワイのお土産に：持って帰れるもの、帰る前に食べるもの', subtitle: 'スーツケースには100%コナコーヒー豆、最終日の朝にはできたてのモチドーナツとマラサダ。', date: '2026年10月公開', readTime: '読了5分', badge: 'お土産ガイド' },
    intro: 'お土産選びの条件は、ハワイらしいこと、配りやすいこと、そして帰国して1週間後でもおいしいこと。そうなると生菓子は難しく、答えはコーヒーです。カラカウア通り2142のKona Coffee Donutでは、100%コナコーヒー豆（7oz）が$44.95、お手頃なロカヒブレンド（7oz）が$18.95。ワイキキビーチから徒歩約5分、毎日朝7時〜夜9時。毎朝店内で作るモチドーナツやマラサダは、持ち帰りではなく帰国前に楽しむのがおすすめです。',
    visitCTA: { headline: '100%コナコーヒー豆 $44.95', body: '7ozの100%コナ、またはロカヒブレンド$18.95。まずは一杯（100%コナ $7.00）で味見を。カラカウア通り2142、毎日朝7時〜夜9時。', menuLabel: 'メニューを見る', directionsLabel: '行き方を確認' },
    sections: [
      { h2: '良いお土産の条件', body: 'ハワイらしさ、日持ち、軽さ、配りやすさ。コーヒー豆はこの4つを全部満たします。' },
      { h2: '100%コナコーヒー豆（$44.95・7oz）', body: 'コナコーヒーはハワイ島コナ地区でしか採れない希少な豆。袋に「100% Kona」と書かれているか確認を。「コナブレンド」はコナ豆が10%程度のこともあります。迷ったら、まず店頭で100%コナを一杯（$7.00）どうぞ。', pullout: { title: '職場へのお土産のコツ', body: '大切な一人には100%コナ、チームにはロカヒブレンド（$18.95）を。' } },
      { h2: 'お手頃なロカヒブレンド（$18.95）', body: '同じ7ozで$18.95。100%コナではなくブレンドなので、中身はスタッフにお尋ねください。' },
      { h2: '生菓子は「帰る前に」', body: 'モチドーナツ（1個$3.95、6個$22.50、12個$45.00）とマラサダ（$3.95、クリーム$4.95）は毎朝店内で作る当日分。最終日の夜や出発の朝にホテルで楽しんでください。食品を持ち帰る場合は、帰国先の検疫ルールを必ず確認しましょう。' },
    ],
    faq: [
      { q: 'ハワイのお土産に何がおすすめ？', a: '日持ちするコーヒー豆が一番。Kona Coffee Donut（2142 Kalākaua Ave、ワイキキ）では100%コナコーヒー豆7ozが$44.95、ロカヒブレンドが$18.95。毎日朝7時〜夜9時。' },
      { q: 'ワイキキで100%コナコーヒーはいくら？', a: 'Kona Coffee Donutでは100%コナコーヒー豆7ozが$44.95、店内の一杯は$7.00です。' },
      { q: 'モチドーナツやマラサダは日本に持って帰れますか？', a: '毎朝作る当日分なので、当日中に食べるのがおすすめです。6個入り（モチドーナツ$22.50、マラサダ$22.50）を最終日のホテル用に。食品の持ち込みは日本の検疫ルールを確認してください。' },
      { q: 'コナブレンドと100%コナの違いは？', a: '「100% Kona」表示の豆だけがすべてコナ産。コナブレンドはコナ豆が10%程度のこともあります。Kona Coffee Donutでは100%コナ$44.95、ロカヒブレンド$18.95です。' },
    ],
    finalCTA: { headline: 'お土産はカラカウア通りで', body: '100%コナ豆$44.95、ロカヒブレンド$18.95、コナコーヒー一杯$7.00。毎日朝7時〜夜9時。', visitLabel: '今日来店', callLabel: '電話 (808) 260-1835' },
  },
  ko: {
    hero: { title: '하와이 기념품: 가져갈 것과 떠나기 전에 먹을 것', subtitle: '캐리어엔 100% 코나 커피 원두, 마지막 날 아침엔 갓 만든 모찌도넛과 말라사다.', date: '2026년 10월 발행', readTime: '5분 분량', badge: '기념품 가이드' },
    intro: '좋은 기념품은 하와이다워야 하고, 나눠 주기 쉬워야 하고, 일주일 뒤에 풀어도 괜찮아야 합니다. 그래서 생과자보다 커피가 정답입니다. 칼라카우아 2142 Kona Coffee Donut에서 100% 코나 커피 원두(7oz)는 $44.95, 부담 없는 로카히 블렌드(7oz)는 $18.95입니다. 와이키키 비치에서 도보 약 5분, 매일 아침 7시–밤 9시. 매일 아침 만드는 모찌도넛과 말라사다는 가져가기보다 출국 전에 드세요.',
    visitCTA: { headline: '100% 코나 커피 원두 $44.95', body: '7oz 100% 코나, 또는 로카히 블렌드 $18.95. 먼저 한 잔(100% 코나 $7.00)으로 맛보세요. 칼라카우아 2142, 매일 아침 7시–밤 9시.', menuLabel: '메뉴 보기', directionsLabel: '길찾기' },
    sections: [
      { h2: '100% 코나 원두 ($44.95, 7oz)', body: '코나 커피는 하와이섬 코나 지역에서만 나는 원두입니다. 봉지에 "100% Kona"라고 적혀 있는지 확인하세요. "코나 블렌드"는 코나 원두가 10% 정도일 수도 있습니다.', pullout: { title: '회사 기념품 팁', body: '중요한 한 분께는 100% 코나, 팀원들에게는 로카히 블렌드($18.95).' } },
      { h2: '부담 없는 로카히 블렌드 ($18.95)', body: '같은 7oz에 $18.95. 100% 코나가 아닌 블렌드라 구성은 직원에게 물어보세요.' },
      { h2: '생과자는 떠나기 전에', body: '모찌도넛(개당 $3.95, 6개 $22.50)과 말라사다($3.95, 크림 $4.95)는 매일 아침 만드는 당일분입니다. 마지막 날 호텔에서 드세요. 음식을 가져갈 땐 입국 국가의 검역 규정을 꼭 확인하세요.' },
    ],
    faq: [
      { q: '하와이 기념품으로 뭐가 좋아요?', a: '오래 가는 커피 원두가 최고입니다. Kona Coffee Donut(2142 Kalākaua Ave, 와이키키)에서 100% 코나 원두 7oz $44.95, 로카히 블렌드 $18.95. 매일 아침 7시–밤 9시.' },
      { q: '와이키키에서 100% 코나 커피 가격은?', a: 'Kona Coffee Donut에서 100% 코나 원두 7oz는 $44.95, 매장 한 잔은 $7.00입니다.' },
      { q: '모찌도넛이나 말라사다를 한국에 가져갈 수 있나요?', a: '매일 아침 만드는 당일분이라 그날 드시는 게 가장 맛있습니다. 6개 박스(모찌도넛 $22.50, 말라사다 $22.50)를 마지막 날 호텔용으로 추천합니다. 반입 규정은 검역 기준을 확인하세요.' },
    ],
    finalCTA: { headline: '기념품은 칼라카우아에서', body: '100% 코나 원두 $44.95, 로카히 블렌드 $18.95, 코나 커피 한 잔 $7.00. 매일 아침 7시–밤 9시.', visitLabel: '오늘 방문', callLabel: '전화 (808) 260-1835' },
  },
  zh: {
    hero: { title: '夏威夷伴手礼：能带回家的，和临走前要吃的', subtitle: '行李箱里装100%科纳咖啡豆，最后一个早上吃现做的麻糬甜甜圈和马拉萨达。', date: '2026年10月发布', readTime: '5分钟', badge: '伴手礼指南' },
    intro: '好的伴手礼要有夏威夷特色、方便分送、回家一周后依然好吃——所以比起现做甜点，咖啡豆更合适。卡拉考阿大道2142号的Kona Coffee Donut出售100%科纳咖啡豆（7oz）$44.95，以及更实惠的Lokahi混合豆（7oz）$18.95。距威基基海滩步行约5分钟，每天早7点至晚9点。每天早上现做的麻糬甜甜圈和马拉萨达，建议在回程前吃掉。',
    visitCTA: { headline: '100%科纳咖啡豆 $44.95', body: '7oz的100%科纳，或Lokahi混合豆$18.95。先来一杯100%科纳（$7.00）尝尝。卡拉考阿大道2142号，每天早7点至晚9点。', menuLabel: '查看菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '100%科纳咖啡豆（$44.95，7oz）', body: '科纳咖啡只产自夏威夷大岛的科纳地区。购买时认准包装上的"100% Kona"字样；"科纳混合豆"可能只含10%左右的科纳豆。' },
      { h2: '现做甜点请在回程前享用', body: '麻糬甜甜圈（每个$3.95，6个$22.50）和马拉萨达（$3.95，奶油$4.95）每天早上店内现做，当天吃最好。携带食品出入境前请先确认目的地的检疫规定。' },
    ],
    faq: [
      { q: '夏威夷伴手礼买什么好？', a: '最推荐耐放的咖啡豆。Kona Coffee Donut（2142 Kalākaua Ave，威基基）出售100%科纳咖啡豆7oz $44.95，Lokahi混合豆$18.95，每天早7点至晚9点。' },
      { q: '威基基的100%科纳咖啡多少钱？', a: 'Kona Coffee Donut的100%科纳咖啡豆7oz为$44.95，店内一杯为$7.00。' },
      { q: '科纳混合豆和100%科纳一样吗？', a: '不一样。只有标注"100% Kona"的才是全部科纳豆；科纳混合豆可能只含10%左右。Kona Coffee Donut的100%科纳为$44.95，Lokahi混合豆为$18.95。' },
    ],
    finalCTA: { headline: '在卡拉考阿大道买伴手礼', body: '100%科纳咖啡豆$44.95，Lokahi混合豆$18.95，科纳咖啡一杯$7.00。每天早7点至晚9点。', visitLabel: '立即到店', callLabel: '致电 (808) 260-1835' },
  },
  es: {
    hero: { title: 'Regalos de Hawái: qué llevar a casa y qué comer antes del vuelo', subtitle: 'Café 100% Kona en grano para la maleta; mochi donuts y malasadas para la última mañana.', date: 'Octubre 2026', readTime: '5 min', badge: 'Guía de regalos' },
    intro: 'Un buen regalo de viaje debe ser local, fácil de compartir y aguantar una semana en la maleta: por eso el café es la mejor opción. En Kona Coffee Donut, 2142 Kalākaua Ave, la bolsa de 7 oz de café 100% Kona cuesta $44.95 y la mezcla Lokahi $18.95. Abierto de 7 AM a 9 PM, a unos 5 minutos de la playa de Waikiki.',
    visitCTA: { headline: 'Café 100% Kona en grano: $44.95', body: 'Bolsa de 7 oz 100% Kona, o mezcla Lokahi por $18.95. Una taza de 100% Kona cuesta $7.00. De 7 AM a 9 PM.', menuLabel: 'Ver Menú', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Café 100% Kona ($44.95, 7 oz)', body: 'Busca "100% Kona" en la etiqueta: una "Kona blend" puede tener solo un 10% de café Kona.' },
      { h2: 'Lo fresco, para hoy', body: 'Los mochi donuts y malasadas se hacen cada mañana y saben mejor el mismo día: cómpralos para el hotel o la mañana del vuelo.' },
    ],
    faq: [
      { q: '¿Qué regalo llevar de Hawái?', a: 'Café en grano: en Kona Coffee Donut, 2142 Kalākaua Ave, la bolsa de 7 oz 100% Kona cuesta $44.95 y la mezcla Lokahi $18.95. De 7 AM a 9 PM.' },
      { q: '¿Cuánto cuesta el café 100% Kona en Waikiki?', a: 'En Kona Coffee Donut, $44.95 la bolsa de 7 oz y $7.00 la taza.' },
    ],
    finalCTA: { headline: 'Tus regalos, en Kalākaua Avenue', body: 'Café 100% Kona $44.95, mezcla Lokahi $18.95. De 7 AM a 9 PM.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 260-1835' },
  },
};

export default function HawaiiOmiyageTreatsPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
