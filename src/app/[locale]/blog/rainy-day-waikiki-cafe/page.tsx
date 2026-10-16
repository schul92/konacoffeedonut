'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'rainy-day-waikiki-cafe',
  imageSrc: '/images/blog/rainy-day-waikiki-cafe.jpeg',
  imageAlt:
    'Hot 100% Kona coffee, a classic and a cream-filled malasada, and hot chocolate on the counter under a rain-streaked window at Kona Coffee Donut in Waikiki',
  schemaHeadline: 'Rainy Day in Waikiki: Hot Kona Coffee & Malasadas, Open 7 AM–9 PM',
  schemaDescription:
    'What to do when it rains in Waikiki: duck into Kona Coffee Donut at 2142 Kalākaua Ave for hot 100% Kona coffee ($7.00), fresh malasadas ($3.95) and hot chocolate ($6.50), open 7 AM to 9 PM daily.',
  datePublished: '2026-10-15',
  related: [
    {
      path: '/blog/best-malasadas-waikiki',
      label: {
        en: 'Best malasadas in Waikiki (from $3.95)',
        ja: 'ワイキキのおすすめマラサダ',
        ko: '와이키키 말라사다 맛집',
        zh: '威基基最好吃的马拉萨达',
        es: 'Las mejores malasadas de Waikiki',
      },
    },
    {
      path: '/blog/what-is-kona-coffee',
      label: {
        en: 'What is Kona coffee? 100% Kona explained',
        ja: 'コナコーヒーとは？',
        ko: '코나 커피란?',
        zh: '什么是科纳咖啡？',
        es: '¿Qué es el café Kona?',
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
  ],
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Rainy Day in Waikiki? Warm Up on Kalākaua Avenue',
      subtitle: 'Hot 100% Kona coffee, fresh malasadas and a box to take back to the hotel — five minutes from the beach, open 7 AM to 9 PM.',
      date: 'Published October 2026',
      readTime: '4 min read',
      badge: 'Rainy-Day Plan',
    },
    intro:
      "Rain in Waikiki rarely ruins a whole day. The south shore of Oʻahu is one of the drier parts of the island, and even in the wetter months — roughly October through April — most showers blow through and leave the sidewalks steaming. The smart move is to get off the sand, find something hot, and give the cloud twenty minutes. Kona Coffee Donut at 2142 Kalākaua Ave is about a five-minute walk from Waikiki Beach and pours hot 100% Kona coffee ($7.00) next to fresh malasadas ($3.95) from 7 AM to 9 PM every day. Here's what to order while it pours, what to carry back to the hotel, and a short rainy-day loop along Kalākaua Avenue.",
    visitCTA: {
      headline: 'Hot Kona Coffee + a Malasada: $10.95',
      body:
        'A cup of 100% Kona coffee ($7.00) and a classic sugar malasada ($3.95). 2142 Kalākaua Ave, about 5 minutes from Waikiki Beach, open 7 AM to 9 PM daily.',
      menuLabel: 'See the Full Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'Waikiki Rain Is Usually a Short Break, Not a Lost Day',
        body:
          "Trade-wind showers tend to roll off the Koʻolau mountains, sprinkle Waikiki and move on — often with a rainbow over Mānoa behind them. Instead of retreating to the hotel room for the afternoon, plan a short indoor stop close to the beach. That's the whole strategy: something hot, something sweet, a few minutes, and you're back outside when the sun returns.",
      },
      {
        h2: 'The Warm-Up Order',
        body: 'Every price below is from our register this month:',
        bullets: [
          '100% Kona Coffee — $7.00, smooth and low in acidity, the cup Hawaii is famous for',
          'Kona Pour Over — $10.95, brewed one cup at a time; a good reason to wait out a shower',
          'Latte or Cappuccino — $6.35',
          'Hot Chocolate — $6.50, the easy pick for anyone who skips coffee',
          'Ube Latte — $7.95, purple yam and espresso',
          'Caramel Mocha or White Mocha — $8.95',
        ],
        pullout: {
          title: 'Rainy-day combo',
          body: 'Hot 100% Kona coffee ($7.00) + a classic malasada ($3.95) = $10.95 before tax. Add a cream-filled malasada ($4.95) if the rain looks serious.',
        },
      },
      {
        h2: 'Something Sweet (or Savory) While It Pours',
        body:
          "Malasadas are made for grey weather: sugar-rolled, soft and eggy inside. A classic is $3.95, cream-filled $4.95. Mochi donuts are $3.95 each with a chewy rice-flour bite. If you'd rather eat something savory, Korean rice corn dogs start at $6.99 and Spam musubi at $2.95.",
      },
      {
        h2: 'Take a Box Back to the Hotel',
        body:
          'If the forecast says the rain is settling in, turn it into a room picnic. Malasadas come in a 3-pack ($11.25), 6-pack ($22.50) or dozen ($45.00); cream-filled 6-packs are $28.50. Mochi donuts are $22.50 for six. For the coffee drinkers, a 7 oz bag of 100% Kona coffee ($44.95) or our Lokahi blend ($18.95) means hot coffee in the room the next morning, too.',
      },
      {
        h2: 'A Short Rainy-Day Loop on Kalākaua',
        body:
          "Start with coffee and malasadas on Kalākaua Avenue. When you're ready to move, the covered walkways of Royal Hawaiian Center and International Market Place are a short walk away for shopping out of the rain. Finish where you started — we're open until 9 PM, so a rainy evening can still end with a malasada ice cream sandwich ($8.95) or one more hot drink.",
      },
    ],
    faq: [
      {
        q: 'What can I do in Waikiki when it rains?',
        a: 'Most Waikiki showers pass quickly, so plan a short indoor stop near the beach. Kona Coffee Donut at 2142 Kalākaua Ave — about 5 minutes from Waikiki Beach — serves hot 100% Kona coffee ($7.00) and fresh malasadas ($3.95) from 7 AM to 9 PM daily, and the covered Royal Hawaiian Center is a short walk away.',
      },
      {
        q: 'Where can I get hot coffee in Waikiki on a rainy day?',
        a: 'Kona Coffee Donut, 2142 Kalākaua Ave, Waikiki: 100% Kona coffee $7.00, Kona pour over $10.95, lattes and cappuccinos $6.35 and hot chocolate $6.50, open 7 AM to 9 PM every day.',
      },
      {
        q: 'Is Kona Coffee Donut open when it rains?',
        a: 'Yes. Kona Coffee Donut on Kalākaua Avenue in Waikiki is open 7 AM to 9 PM every day, rain or shine. Call (808) 260-1835 with any questions.',
      },
      {
        q: 'Can I take malasadas back to my hotel?',
        a: 'Yes. At Kona Coffee Donut in Waikiki, classic malasadas are $11.25 for 3, $22.50 for 6 and $45.00 for a dozen; cream-filled malasadas are $28.50 for 6. Mochi donuts are $22.50 for 6.',
      },
      {
        q: 'When is the rainy season in Waikiki?',
        a: "Honolulu's wetter months run roughly October through April, but Waikiki sits on Oʻahu's drier south shore and most showers are brief. Plan a short indoor stop — like hot Kona coffee at Kona Coffee Donut, 2142 Kalākaua Ave — rather than cancelling the day.",
      },
    ],
    finalCTA: {
      headline: 'Wait Out the Rain With Us',
      body: 'Hot Kona coffee from $7.00, malasadas from $3.95. 2142 Kalākaua Ave, open 7 AM – 9 PM daily.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 260-1835',
    },
  },
  ja: {
    hero: { title: 'ワイキキで雨の日は？カラカウア通りで温まろう', subtitle: '100%コナコーヒーとマラサダで雨宿り。ビーチから徒歩約5分、朝7時〜夜9時。', date: '2026年10月公開', readTime: '読了4分', badge: '雨の日プラン' },
    intro: 'ワイキキの雨はたいてい短時間で上がります。オアフ島の南側は比較的雨が少なく、雨の多い10月〜4月でも、通り雨がほとんど。ビーチから上がって温かいものを飲みながら少し待つのが正解です。カラカウア通り2142のKona Coffee Donutなら、100%コナコーヒー（$7.00）とマラサダ（$3.95）を毎日朝7時から夜9時まで。',
    visitCTA: { headline: 'コナコーヒー＋マラサダで$10.95', body: '100%コナコーヒー（$7.00）とクラシックマラサダ（$3.95）。ワイキキビーチから徒歩約5分、毎日朝7時〜夜9時。', menuLabel: 'メニューを見る', directionsLabel: '行き方を確認' },
    sections: [
      { h2: '温まるドリンク', body: '今月のレジ価格です。', bullets: ['100%コナコーヒー $7.00', 'コナ・プアオーバー $10.95（一杯ずつ抽出）', 'ラテ・カプチーノ $6.35', 'ホットチョコレート $6.50', 'ウベラテ $7.95'] },
      { h2: 'ホテルへお持ち帰り', body: 'マラサダは3個$11.25、6個$22.50、12個$45.00。カスタード入り6個は$28.50。モチドーナツ6個$22.50。100%コナコーヒー豆（7oz）は$44.95です。' },
      { h2: '雨の日のカラカウア散歩', body: 'コーヒーとマラサダで一息ついたら、屋根のあるロイヤル・ハワイアン・センターやインターナショナル・マーケットプレイスへ。夜9時まで営業しているので、雨の夜の締めにも。' },
    ],
    faq: [
      { q: 'ワイキキで雨の日は何をすればいいですか？', a: 'ワイキキの雨は短時間のことが多いので、ビーチ近くで少し雨宿りを。Kona Coffee Donut（2142 Kalākaua Ave、ビーチから徒歩約5分）では100%コナコーヒー$7.00とマラサダ$3.95を毎日朝7時〜夜9時に提供しています。' },
      { q: '雨の日でも営業していますか？', a: 'はい。カラカウア通りのKona Coffee Donutは雨の日も毎日朝7時〜夜9時まで営業しています。' },
      { q: 'マラサダは持ち帰れますか？', a: 'はい。Kona Coffee Donutのマラサダは3個$11.25、6個$22.50、12個$45.00です。' },
    ],
    finalCTA: { headline: '雨宿りはカラカウア通りで', body: 'コナコーヒー$7.00〜、マラサダ$3.95〜。毎日朝7時〜夜9時。', visitLabel: '今日来店', callLabel: '電話 (808) 260-1835' },
  },
  ko: {
    hero: { title: '와이키키에 비 오는 날? 칼라카우아에서 몸 녹이기', subtitle: '100% 코나 커피와 말라사다로 비 피하기. 비치에서 도보 약 5분, 아침 7시–밤 9시.', date: '2026년 10월 발행', readTime: '4분 분량', badge: '비 오는 날 코스' },
    intro: '와이키키 비는 대부분 금방 그칩니다. 오아후 남쪽 해안은 섬에서 비가 적은 편이고, 비가 잦은 10월~4월에도 대부분 지나가는 소나기입니다. 해변에서 나와 따뜻한 걸 마시며 잠깐 기다리는 게 정답입니다. 칼라카우아 2142 Kona Coffee Donut에서 100% 코나 커피($7.00)와 말라사다($3.95)를 매일 아침 7시부터 밤 9시까지 드실 수 있습니다.',
    visitCTA: { headline: '코나 커피 + 말라사다 $10.95', body: '100% 코나 커피($7.00)와 클래식 말라사다($3.95). 와이키키 비치에서 도보 약 5분, 매일 아침 7시–밤 9시.', menuLabel: '메뉴 보기', directionsLabel: '길찾기' },
    sections: [
      { h2: '몸 녹이는 따뜻한 음료', body: '이번 달 매장 가격입니다.', bullets: ['100% 코나 커피 $7.00', '코나 푸어오버 $10.95 (한 잔씩 추출)', '라떼·카푸치노 $6.35', '핫초코 $6.50', '우베 라떼 $7.95'] },
      { h2: '호텔로 포장해 가기', body: '말라사다 3개 $11.25, 6개 $22.50, 12개 $45.00. 크림 말라사다 6개 $28.50. 모찌도넛 6개 $22.50. 100% 코나 원두(7oz)는 $44.95입니다.' },
      { h2: '비 오는 날 칼라카우아 코스', body: '커피와 말라사다로 쉬었다가 지붕 있는 로열 하와이안 센터나 인터내셔널 마켓플레이스로 이동하세요. 밤 9시까지 열려 있어 비 오는 저녁 마무리로도 좋습니다.' },
    ],
    faq: [
      { q: '와이키키에 비 오면 뭘 하면 좋나요?', a: '와이키키 비는 대부분 짧게 지나가니 해변 근처에서 잠깐 비를 피하세요. Kona Coffee Donut(2142 Kalākaua Ave, 비치에서 도보 약 5분)에서 100% 코나 커피 $7.00와 말라사다 $3.95를 매일 아침 7시–밤 9시에 판매합니다.' },
      { q: '비 오는 날에도 영업하나요?', a: '네. 칼라카우아 거리 Kona Coffee Donut은 비가 와도 매일 아침 7시–밤 9시 영업합니다.' },
      { q: '말라사다 포장되나요?', a: '네. Kona Coffee Donut 말라사다는 3개 $11.25, 6개 $22.50, 12개 $45.00입니다.' },
    ],
    finalCTA: { headline: '비는 칼라카우아에서 피하세요', body: '코나 커피 $7.00부터, 말라사다 $3.95부터. 매일 아침 7시–밤 9시.', visitLabel: '오늘 방문', callLabel: '전화 (808) 260-1835' },
  },
  zh: {
    hero: { title: '威基基下雨天？来卡拉考阿大道暖一暖', subtitle: '100%科纳咖啡配马拉萨达，躲雨好去处。距海滩步行约5分钟，早7点至晚9点。', date: '2026年10月发布', readTime: '4分钟', badge: '雨天攻略' },
    intro: '威基基的雨通常下不久。瓦胡岛南岸是岛上较干燥的地区，即使在较多雨的10月到4月，大多也是阵雨。离开沙滩，找个地方喝点热的，等一会儿就好。卡拉考阿大道2142号的Kona Coffee Donut每天早7点到晚9点供应100%科纳咖啡（$7.00）和马拉萨达（$3.95）。',
    visitCTA: { headline: '科纳咖啡+马拉萨达 $10.95', body: '100%科纳咖啡（$7.00）配经典马拉萨达（$3.95）。距威基基海滩步行约5分钟，每天早7点至晚9点。', menuLabel: '查看菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '暖身热饮', body: '以下为本月门店价格：', bullets: ['100%科纳咖啡 $7.00', '科纳手冲 $10.95（单杯冲煮）', '拿铁・卡布奇诺 $6.35', '热巧克力 $6.50', '紫山药拿铁 $7.95'] },
      { h2: '打包回酒店', body: '马拉萨达3个$11.25、6个$22.50、12个$45.00；奶油夹心6个$28.50；麻糬甜甜圈6个$22.50；100%科纳咖啡豆（7oz）$44.95。' },
    ],
    faq: [
      { q: '威基基下雨天可以做什么？', a: '威基基的雨多为短暂阵雨，可在海滩附近短暂躲雨。Kona Coffee Donut（2142 Kalākaua Ave，距海滩步行约5分钟）每天早7点至晚9点供应100%科纳咖啡$7.00和马拉萨达$3.95。' },
      { q: '下雨天也营业吗？', a: '是的。卡拉考阿大道的Kona Coffee Donut风雨无阻，每天早7点至晚9点营业。' },
      { q: '马拉萨达可以打包吗？', a: '可以。Kona Coffee Donut的马拉萨达3个$11.25、6个$22.50、12个$45.00。' },
    ],
    finalCTA: { headline: '来卡拉考阿大道躲雨', body: '科纳咖啡$7.00起，马拉萨达$3.95起。每天早7点至晚9点。', visitLabel: '立即到店', callLabel: '致电 (808) 260-1835' },
  },
  es: {
    hero: { title: '¿Día de lluvia en Waikiki? Entra en calor en Kalākaua', subtitle: 'Café 100% Kona caliente y malasadas recién hechas, a 5 minutos de la playa. De 7 AM a 9 PM.', date: 'Octubre 2026', readTime: '4 min', badge: 'Plan de lluvia' },
    intro: 'La lluvia en Waikiki casi nunca arruina el día: la costa sur de Oʻahu es de las zonas más secas de la isla y, aun entre octubre y abril, la mayoría son chubascos que pasan rápido. Lo mejor es salir de la arena, tomar algo caliente y esperar unos minutos. En Kona Coffee Donut, 2142 Kalākaua Ave, servimos café 100% Kona ($7.00) y malasadas ($3.95) de 7 AM a 9 PM todos los días.',
    visitCTA: { headline: 'Café Kona + malasada: $10.95', body: 'Un café 100% Kona ($7.00) y una malasada clásica ($3.95). A unos 5 minutos de la playa de Waikiki, de 7 AM a 9 PM.', menuLabel: 'Ver Menú', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Bebidas calientes', body: 'Precios de este mes:', bullets: ['Café 100% Kona $7.00', 'Kona Pour Over $10.95', 'Latte o cappuccino $6.35', 'Chocolate caliente $6.50'] },
      { h2: 'Para llevar al hotel', body: 'Malasadas: 3 por $11.25, 6 por $22.50, 12 por $45.00. Mochi donuts: 6 por $22.50.' },
    ],
    faq: [
      { q: '¿Qué hacer en Waikiki cuando llueve?', a: 'La mayoría de los chubascos en Waikiki son breves. Haz una parada cerca de la playa: Kona Coffee Donut, 2142 Kalākaua Ave, sirve café 100% Kona ($7.00) y malasadas ($3.95) de 7 AM a 9 PM todos los días.' },
      { q: '¿Abren cuando llueve?', a: 'Sí. Kona Coffee Donut en Kalākaua Avenue abre de 7 AM a 9 PM todos los días, llueva o no.' },
    ],
    finalCTA: { headline: 'Espera a que pase la lluvia con nosotros', body: 'Café Kona desde $7.00, malasadas desde $3.95. De 7 AM a 9 PM.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 260-1835' },
  },
};

export default function RainyDayWaikikiCafePage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
