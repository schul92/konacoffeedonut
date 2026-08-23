'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'coffee-near-waikiki-beach',
  imageSrc: '/images/blog/coffee-near-waikiki-beach.jpeg',
  imageAlt: 'Coffee near Waikiki Beach — 100% Kona coffee and mochi donuts at Kona Coffee Donut on Kalākaua Avenue',
  schemaHeadline: 'Coffee Near Waikiki Beach: 100% Kona, Open 7 AM, 5 Minutes From the Sand',
  schemaDescription:
    'The closest real-coffee stop to Waikiki Beach: 100% Kona coffee ($7), a full espresso bar from $4.75, and fresh mochi donuts at Kona Coffee Donut, 2142 Kalākaua Ave — open 7 AM daily.',
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Coffee Near Waikiki Beach, Open at 7 AM',
      subtitle: 'Real 100% Kona coffee, a full espresso bar, and fresh donuts — a 5-minute walk from the sand on Kalākaua Avenue.',
      date: 'Published August 2026',
      readTime: '4 min read',
      badge: 'Coffee Guide',
    },
    intro:
      "You're standing on Waikiki Beach at 7 in the morning, the water is glassy, and you need a coffee. Most of what's within reach is a hotel lobby pour-over at resort prices or a chain cup that tastes the same as it does in Ohio. Kona Coffee Donut is on Kalākaua Avenue, about 400 meters from the sand, and we open at 7 AM every day with the thing people actually come to Hawaii for: 100% Kona coffee, not a blend. Here's what to order, what it costs, and why the walk is worth it.",
    visitCTA: {
      headline: '100% Kona Coffee, 5 Minutes From the Beach',
      body:
        'Kona Coffee Donut at 2142 Kalākaua Ave — 100% Kona coffee, espresso bar, matcha lattes, and mochi donuts made fresh daily. Open 7 AM – 9 PM, every day. Grab it to go and walk back to the water.',
      menuLabel: 'See the Coffee Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'The Coffee Menu (and What It Costs)',
        body: "Every coffee is made to order. The Kona is the reason to come; the espresso bar is for when you want your usual:",
        bullets: [
          '100% Kona Coffee ($7.00) — brewed from Big Island Kona beans, smooth and low-acid. Not a 10% "Kona blend."',
          'Kona Pour Over ($10.95) — the single-cup, slow-brewed version for people who want the full Kona experience',
          'Kona Cold Brew ($6.95) — the beach order on a hot morning',
          'Espresso ($4.75) · Americano ($5.35) · Latte / Cappuccino ($6.35)',
          'Ube Latte ($7.95) — purple, creamy, and the most photographed cup in the shop',
          'Kona Affogato ($8.50) — espresso over ice cream, for the afternoon',
        ],
        pullout: {
          title: 'Why "100% Kona" matters',
          body:
            'Kona coffee grows only on the slopes of two volcanoes on the Big Island and is less than 1% of the world\'s coffee. Most "Kona" sold in Waikiki is a 10% blend. Ours is 100% — which is why a cup is $7 and why it tastes the way it does.',
        },
      },
      {
        h2: 'Why 7 AM Is the Whole Point',
        body:
          "Waikiki sunrise happens before most cafes on the strip open their doors. We're open at 7, which means you can grab a Kona coffee and a warm malasada, walk five minutes back to the beach, and drink it with your feet in the sand before the crowds arrive. If you're coming down from the Diamond Head sunrise hike, we're on your way back.",
      },
      {
        h2: 'What to Get With Your Coffee',
        body: "Coffee alone is fine. Coffee with one of these is the reason people come back:",
        bullets: [
          'Mochi Donut ($3.95) — crispy outside, chewy inside; the Kona coffee and black sesame donut is the house pairing',
          'Malasada ($3.95) — Portuguese-Hawaiian fried dough, best warm',
          'Spam Musubi ($2.95) — the local breakfast; musubi + coffee is under $10',
          'Not a coffee person? Matcha Latte ($9.95) or a canned boba milk tea ($8.95) to go',
        ],
      },
      {
        h2: 'Getting Here From the Beach',
        body:
          "We're at 2142 Kalākaua Ave — the main avenue that runs along Waikiki Beach. From the sand near the Duke Kahanamoku statue, walk inland one block to Kalākaua and head west (toward Ala Moana) about 5 minutes. Everything is to-go friendly, so most people walk straight back to the water.",
      },
    ],
    faq: [
      {
        q: 'Where is the closest coffee shop to Waikiki Beach?',
        a: 'Kona Coffee Donut at 2142 Kalākaua Ave is about a 5-minute (400 m) walk from Waikiki Beach, serving 100% Kona coffee ($7.00) and a full espresso bar from $4.75. Open 7 AM to 9 PM daily.',
      },
      {
        q: 'What time does Kona Coffee Donut open?',
        a: 'We open at 7 AM every day of the week, earlier than most cafes on Kalākaua Avenue, and close at 9 PM.',
      },
      {
        q: 'Is it real 100% Kona coffee?',
        a: 'Yes. Our Kona Coffee ($7.00) and Kona Pour Over ($10.95) are 100% Kona beans from the Big Island, supplied by Honolulu Coffee — not a 10% Kona blend.',
      },
      {
        q: 'How much is coffee near Waikiki Beach?',
        a: 'At Kona Coffee Donut: espresso $4.75, americano $5.35, latte $6.35, Kona cold brew $6.95, 100% Kona coffee $7.00, Kona pour over $10.95.',
      },
      {
        q: 'Can I take the coffee to the beach?',
        a: 'Yes — everything is served to go. Waikiki Beach is a 5-minute walk, and a Kona coffee with a mochi donut or musubi is the most common beach breakfast order.',
      },
    ],
    finalCTA: {
      headline: 'Your Kona Coffee Is 5 Minutes From the Sand',
      body: '100% Kona from $7, espresso from $4.75, fresh donuts. 2142 Kalākaua Ave, open 7 AM daily.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: { title: 'ワイキキビーチ近くのコーヒー、朝7時オープン', subtitle: '本物の100%コナコーヒーとエスプレッソバー、ビーチから徒歩5分。', date: '2026年8月公開', readTime: '読了4分', badge: 'コーヒーガイド' },
    intro: '朝7時のワイキキビーチでコーヒーが欲しいとき。Kona Coffee Donutはビーチから約400m、毎日朝7時オープン。ブレンドではない100%コナコーヒーが$7で飲めます。',
    visitCTA: { headline: 'ビーチから徒歩5分の100%コナコーヒー', body: '2142 Kalākaua Ave。100%コナ、エスプレッソ、抹茶ラテ、作りたてモチドーナツ。毎日7時〜21時、テイクアウトでビーチへ。', menuLabel: 'コーヒーメニュー', directionsLabel: '行き方を確認' },
    sections: [
      { h2: 'コーヒーメニューと価格', body: 'すべて注文後に淹れます：', bullets: ['100%コナコーヒー $7.00', 'コナ・プアオーバー $10.95', 'コナ・コールドブリュー $6.95', 'エスプレッソ $4.75 / アメリカーノ $5.35 / ラテ $6.35', 'ウベラテ $7.95', 'コナ・アフォガート $8.50'], pullout: { title: '「100%コナ」の意味', body: 'コナは世界のコーヒーの1%未満。ワイキキの多くは10%ブレンドですが、当店は100%です。' } },
      { h2: '朝7時が大事な理由', body: 'ワイキキの日の出は多くのカフェが開く前。7時にコーヒーとマラサダを買って、5分歩いてビーチで朝食を。ダイヤモンドヘッド朝ハイクの帰りにも。' },
      { h2: 'コーヒーに合わせるなら', body: '', bullets: ['モチドーナツ $3.95', 'マラサダ $3.95', 'スパムむすび $2.95（むすび＋コーヒーで$10以下）', '抹茶ラテ $9.95 / 缶入りボバ $8.95'] },
    ],
    faq: [
      { q: 'ワイキキビーチに一番近いコーヒー店は？', a: 'Kona Coffee Donut（2142 Kalākaua Ave）、ビーチから徒歩約5分。100%コナ$7.00、エスプレッソ$4.75〜。毎日7時〜21時。' },
      { q: '本物の100%コナ？', a: 'はい。ビッグアイランド産コナ豆100%、Honolulu Coffee供給。10%ブレンドではありません。' },
      { q: '営業時間は？', a: '毎日朝7時〜夜9時。' },
    ],
    finalCTA: { headline: 'コナコーヒーはビーチから5分', body: '100%コナ$7〜、エスプレッソ$4.75〜。毎日7時から。', visitLabel: '今日来店', callLabel: '電話 (808) 304-1808' },
  },
  ko: {
    hero: { title: '와이키키 비치 근처 커피, 아침 7시 오픈', subtitle: '진짜 100% 코나커피와 에스프레소 바, 비치에서 도보 5분.', date: '2026년 8월 발행', readTime: '4분 분량', badge: '커피 가이드' },
    intro: '아침 7시 와이키키 비치에서 커피가 필요할 때. Kona Coffee Donut은 비치에서 약 400m, 매일 아침 7시 오픈. 블렌드가 아닌 100% 코나커피가 $7입니다.',
    visitCTA: { headline: '비치에서 도보 5분, 100% 코나커피', body: '2142 Kalākaua Ave. 100% 코나, 에스프레소, 말차 라떼, 갓 만든 모치도넛. 매일 7시–21시, 테이크아웃해서 비치로.', menuLabel: '커피 메뉴 보기', directionsLabel: '길찾기' },
    sections: [
      { h2: '커피 메뉴와 가격', body: '전부 주문 후 제조:', bullets: ['100% 코나커피 $7.00', '코나 푸어오버 $10.95', '코나 콜드브루 $6.95', '에스프레소 $4.75 / 아메리카노 $5.35 / 라떼 $6.35', '우베 라떼 $7.95', '코나 아포가토 $8.50'], pullout: { title: '"100% 코나"의 의미', body: '코나는 전 세계 커피의 1% 미만. 와이키키 대부분은 10% 블렌드지만 우리는 100%입니다.' } },
      { h2: '아침 7시가 핵심인 이유', body: '와이키키 일출은 대부분 카페가 열기 전. 7시에 커피와 말라사다 사서 5분 걸어 비치에서 아침을. 다이아몬드헤드 일출 하이킹 복귀길에도.' },
      { h2: '커피와 같이 먹으면', body: '', bullets: ['모치도넛 $3.95', '말라사다 $3.95', '스팸무스비 $2.95 (무스비+커피 $10 이하)', '말차 라떼 $9.95 / 캔 보바 $8.95'] },
    ],
    faq: [
      { q: '와이키키 비치에서 가장 가까운 커피숍은?', a: 'Kona Coffee Donut (2142 Kalākaua Ave), 비치에서 도보 약 5분. 100% 코나 $7.00, 에스프레소 $4.75부터. 매일 7시–21시.' },
      { q: '진짜 100% 코나인가요?', a: '네. 빅아일랜드 코나 원두 100%, Honolulu Coffee 공급. 10% 블렌드 아님.' },
      { q: '영업시간은?', a: '매일 오전 7시 – 오후 9시.' },
    ],
    finalCTA: { headline: '코나커피는 비치에서 5분', body: '100% 코나 $7부터, 에스프레소 $4.75부터. 매일 7시.', visitLabel: '오늘 방문', callLabel: '전화 (808) 304-1808' },
  },
  zh: {
    hero: { title: '威基基海滩附近的咖啡，早上7点开门', subtitle: '真正的100%科纳咖啡和意式咖啡吧，距海滩步行5分钟。', date: '2026年8月发布', readTime: '4分钟', badge: '咖啡指南' },
    intro: '早上7点在威基基海滩想喝咖啡？Kona Coffee Donut距海滩约400米，每天早7点开门，$7就能喝到非拼配的100%科纳咖啡。',
    visitCTA: { headline: '距海滩5分钟的100%科纳咖啡', body: '2142 Kalākaua Ave。100%科纳、意式咖啡、抹茶拿铁、现做麻糬甜甜圈。每天7点–21点，外带去海滩。', menuLabel: '查看咖啡菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '咖啡菜单与价格', body: '全部现点现做：', bullets: ['100%科纳咖啡 $7.00', '科纳手冲 $10.95', '科纳冷萃 $6.95', '浓缩 $4.75 / 美式 $5.35 / 拿铁 $6.35', '紫薯拿铁 $7.95', '科纳阿芙佳朵 $8.50'], pullout: { title: '"100%科纳"的含义', body: '科纳咖啡不到全球咖啡的1%。威基基多数是10%拼配，我们是100%。' } },
      { h2: '为什么7点很重要', body: '威基基日出在多数咖啡店开门之前。7点买咖啡和马拉萨达，走5分钟到海滩吃早餐。钻石头山日出徒步回程也顺路。' },
      { h2: '配咖啡吃什么', body: '', bullets: ['麻糬甜甜圈 $3.95', '马拉萨达 $3.95', '午餐肉饭团 $2.95（饭团+咖啡不到$10）', '抹茶拿铁 $9.95 / 罐装珍珠奶茶 $8.95'] },
    ],
    faq: [
      { q: '离威基基海滩最近的咖啡店？', a: 'Kona Coffee Donut（2142 Kalākaua Ave），距海滩步行约5分钟。100%科纳$7.00，浓缩$4.75起。每天7点–21点。' },
      { q: '是真正的100%科纳吗？', a: '是。大岛科纳豆100%，由Honolulu Coffee供应，非10%拼配。' },
      { q: '营业时间？', a: '每天早7点至晚9点。' },
    ],
    finalCTA: { headline: '科纳咖啡距海滩5分钟', body: '100%科纳$7起，浓缩$4.75起。每天7点。', visitLabel: '立即到店', callLabel: '致电 (808) 304-1808' },
  },
  es: {
    hero: { title: 'Café cerca de Waikiki Beach, abierto a las 7 AM', subtitle: 'Café 100% Kona de verdad y barra de espresso, a 5 minutos de la arena.', date: 'Agosto 2026', readTime: '4 min', badge: 'Guía de Café' },
    intro: 'Kona Coffee Donut está a unos 400 m de Waikiki Beach y abre a las 7 AM todos los días con café 100% Kona (no mezcla) por $7.',
    visitCTA: { headline: 'Café 100% Kona a 5 minutos de la playa', body: '2142 Kalākaua Ave. Kona 100%, espresso, matcha latte y mochi donuts frescos. 7 AM – 9 PM todos los días.', menuLabel: 'Ver Menú de Café', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Menú y precios', body: '', bullets: ['Café 100% Kona $7.00', 'Kona pour over $10.95', 'Kona cold brew $6.95', 'Espresso $4.75 / Americano $5.35 / Latte $6.35', 'Ube latte $7.95'] },
      { h2: 'Qué pedir con el café', body: '', bullets: ['Mochi donut $3.95', 'Malasada $3.95', 'Spam musubi $2.95'] },
    ],
    faq: [
      { q: '¿Cafetería más cercana a Waikiki Beach?', a: 'Kona Coffee Donut, 2142 Kalākaua Ave, a 5 minutos a pie. Kona 100% $7.00, espresso desde $4.75. 7 AM – 9 PM.' },
      { q: '¿Es Kona 100% real?', a: 'Sí, granos Kona de Big Island, no mezcla al 10%.' },
    ],
    finalCTA: { headline: 'Tu café Kona a 5 minutos de la arena', body: 'Kona 100% desde $7, espresso desde $4.75. Abierto 7 AM.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 304-1808' },
  },
};

export default function CoffeeNearWaikikiBeachPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
