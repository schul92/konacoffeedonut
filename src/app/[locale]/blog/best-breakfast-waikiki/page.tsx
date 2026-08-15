'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'best-breakfast-waikiki',
  imageSrc: '/images/blog/best-breakfast-waikiki.jpeg',
  imageAlt: 'Breakfast in Waikiki — mochi donut, malasada, spam musubi and Kona coffee latte at Kona Coffee Donut',
  schemaHeadline: 'Breakfast in Waikiki: Open 7 AM Daily — Donuts, Musubi & 100% Kona Coffee',
  schemaDescription:
    'Where to get breakfast in Waikiki from 7 AM: fresh mochi donuts, warm malasadas, spam musubi from $2.95, and 100% Kona coffee at Kona Coffee Donut, 2142 Kalākaua Ave.',
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Breakfast in Waikiki, Open at 7 AM',
      subtitle: 'Fresh donuts, warm malasadas, spam musubi from $2.95, and real 100% Kona coffee — right on Kalākaua Avenue.',
      date: 'Published August 2026',
      readTime: '5 min read',
      badge: 'Breakfast Guide',
    },
    intro:
      "Jet lag has one upside in Waikiki: you're up early enough to beat the crowds. The problem is that most of the strip doesn't wake up with you — plenty of cafes don't open until 8 or 9, and hotel breakfast buffets will happily charge $40 a head. Kona Coffee Donut opens at 7 AM every single day, steps from Waikiki Beach at 2142 Kalākaua Ave. Here's what a real Hawaii-style breakfast looks like here — and why you can eat well for under $10.",
    visitCTA: {
      headline: 'Open 7 AM Daily on Kalākaua',
      body:
        "Mochi donuts and malasadas made fresh daily, spam musubi from $2.95, espresso from $4.75, and 100% Kona coffee. Grab it to go for the beach or eat in. Open 7 AM – 9 PM, every day.",
      menuLabel: 'See the Full Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'The Under-$10 Waikiki Breakfast',
        body:
          "A full breakfast on the most famous street in Hawaii doesn't have to cost resort prices. Here's the math:",
        bullets: [
          'Spam Musubi ($2.95) + drip coffee — the classic local grab-and-go, well under $10',
          'Egg Spam Musubi ($3.50) + Americano ($5.35) — protein, rice, caffeine: $8.85',
          'Fresh malasada ($3.95) + latte ($6.35) — the plantation-days pastry, about $10',
          'Mochi donut ($3.95) + espresso ($4.75) — crispy-chewy donut plus a proper shot: $8.70',
        ],
        pullout: {
          title: 'Local tip',
          body:
            "Musubi is how Hawaii actually does breakfast — warm grilled spam on pressed rice, wrapped in nori. Ours start at $2.95, which is one of the cheapest hot breakfasts anywhere in Waikiki.",
        },
      },
      {
        h2: 'What to Order for Breakfast',
        body: "Everything is made in-store, and the morning batches come out around opening time:",
        bullets: [
          'Spam Musubi ($2.95) — the Hawaii classic; also Teriyaki Spam ($2.95), Egg Spam ($3.50), Shiso Wakame ($2.95), and Shrimp Avocado ($4.50)',
          'Malasadas (from $3.95) — Portuguese-Hawaiian fried dough rolled in sugar, best eaten warm; cream-filled versions available',
          'Mochi Donuts (from $3.95, 3 for $11.25) — crispy outside, chewy inside, in flavors like ube, matcha, and black sesame',
          '100% Kona Coffee ($7.00) — the real thing, not a 10% blend',
          'Espresso drinks — espresso $4.75, americano $5.35, latte $6.35, matcha latte $9.95',
        ],
      },
      {
        h2: 'Why 7 AM Matters in Waikiki',
        body:
          "Sunrise at Waikiki Beach is one of the best free things on Oahu — and it happens before most cafes open. We're a 5-minute walk from the sand, so the move is: grab a musubi and a coffee at 7, walk to the beach, and have breakfast with your feet in the sand before the morning rush. If you're heading to Diamond Head for the sunrise hike, we're on your way back for the post-hike malasada you will absolutely have earned.",
      },
      {
        h2: 'Breakfast for Groups & Families',
        body:
          "Feeding a family without a $150 hotel-buffet bill: a dozen mochi donuts ($45) covers dessert-for-breakfast for everyone, musubi at $2.95 each keeps it savory, and the kids' favorites (plain and cookies & cream donuts) are always in the case. Everything packs well for a beach picnic.",
      },
    ],
    faq: [
      {
        q: 'What time does Kona Coffee Donut open for breakfast?',
        a: 'We open at 7 AM every day of the week at 2142 Kalākaua Ave, Waikiki — earlier than most cafes on the strip. Open until 9 PM.',
      },
      {
        q: 'What is the cheapest breakfast in Waikiki?',
        a: 'Spam musubi at Kona Coffee Donut is $2.95 — one of the cheapest hot breakfasts in Waikiki. Add a coffee and you are still under $10.',
      },
      {
        q: 'Where can I get breakfast near Waikiki Beach at 7 AM?',
        a: 'Kona Coffee Donut at 2142 Kalākaua Ave opens at 7 AM daily, about a 5-minute walk from Waikiki Beach. Fresh donuts, malasadas, spam musubi, and 100% Kona coffee.',
      },
      {
        q: 'Do you serve real Kona coffee at breakfast?',
        a: 'Yes — 100% Kona coffee ($7.00), not a 10% blend, plus a full espresso bar with lattes, americanos, and matcha.',
      },
      {
        q: 'What is a spam musubi?',
        a: 'Spam musubi is Hawaii\'s favorite grab-and-go food: grilled spam on a block of pressed rice, wrapped with a band of nori seaweed. Ours start at $2.95, with egg, teriyaki, shiso wakame, and shrimp avocado versions too.',
      },
      {
        q: 'Can I take breakfast to go for the beach?',
        a: 'Absolutely — musubi, donuts, malasadas, and drinks all pack to go. We are a short walk from Waikiki Beach, so beach-picnic breakfast is the most popular order of the morning.',
      },
    ],
    finalCTA: {
      headline: 'Breakfast Is Ready at 7',
      body: 'Musubi from $2.95, fresh donuts, real Kona coffee. 2142 Kalākaua Ave, every day from 7 AM.',
      visitLabel: 'Visit Us Tomorrow Morning',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: { title: 'ワイキキの朝ごはん、朝7時オープン', subtitle: 'モチドーナツ、マラサダ、スパムむすび$2.95〜、100%コナコーヒー。', date: '2026年8月公開', readTime: '読了5分', badge: '朝食ガイド' },
    intro: '時差ボケで早起きしたら、それはチャンス。Kona Coffee Donutは毎日朝7時オープン、ワイキキビーチから徒歩5分。$10以下でハワイらしい朝ごはんが揃います。',
    visitCTA: { headline: 'カラカウア通りで毎朝7時から', body: 'スパムむすび$2.95〜、作りたてドーナツとマラサダ、100%コナコーヒー。テイクアウトでビーチ朝食も。毎日7時〜21時。', menuLabel: 'メニューを見る', directionsLabel: '行き方を確認' },
    sections: [
      { h2: '$10以下の朝食セット', body: '組み合わせ例：', bullets: ['スパムむすび($2.95) + コーヒー', 'エッグスパムむすび($3.50) + アメリカーノ($5.35)', 'マラサダ($3.95) + ラテ($6.35)', 'モチドーナツ($3.95) + エスプレッソ($4.75)'], pullout: { title: 'ローカル流', body: 'ハワイの朝はむすび。焼きスパム＋ご飯＋海苔で$2.95はワイキキ最安級の温かい朝食です。' } },
      { h2: '朝のおすすめメニュー', body: 'すべて店内で手作り：', bullets: ['スパムむすび各種 $2.95〜$4.50', 'マラサダ $3.95〜（クリーム入りあり）', 'モチドーナツ $3.95〜 / 3個 $11.25', '100%コナコーヒー $7.00', 'エスプレッソ $4.75、ラテ $6.35'] },
      { h2: '朝7時オープンの意味', body: 'ワイキキの日の出はほとんどのカフェが開く前。7時にむすびとコーヒーを買って、ビーチで朝食が正解です。ダイヤモンドヘッド朝ハイクの帰り道にも。' },
    ],
    faq: [
      { q: '営業時間は？', a: '毎日朝7時〜夜9時。2142 Kalakaua Ave。' },
      { q: 'ワイキキで一番安い朝食は？', a: 'スパムむすび$2.95。コーヒーを付けても$10以下。' },
      { q: 'テイクアウトできる？', a: 'すべて可能。ビーチ朝食が朝の人気No.1です。' },
    ],
    finalCTA: { headline: '朝7時、朝ごはんできてます', body: 'むすび$2.95〜、作りたてドーナツ、本物のコナコーヒー。', visitLabel: '明日の朝どうぞ', callLabel: '電話 (808) 304-1808' },
  },
  ko: {
    hero: { title: '와이키키 아침식사, 아침 7시 오픈', subtitle: '모치도넛, 말라사다, 스팸무스비 $2.95부터, 100% 코나커피.', date: '2026년 8월 발행', readTime: '5분 분량', badge: '아침 가이드' },
    intro: '시차로 일찍 깼다면 오히려 기회. Kona Coffee Donut은 매일 아침 7시에 열고, 와이키키 비치에서 도보 5분. $10 이하로 하와이식 아침이 해결됩니다.',
    visitCTA: { headline: '칼라카우아에서 매일 아침 7시', body: '스팸무스비 $2.95부터, 갓 만든 도넛과 말라사다, 100% 코나커피. 테이크아웃으로 비치 아침도. 매일 7시–21시.', menuLabel: '메뉴 보기', directionsLabel: '길찾기' },
    sections: [
      { h2: '$10 이하 아침 조합', body: '추천 조합:', bullets: ['스팸무스비($2.95) + 커피', '에그스팸 무스비($3.50) + 아메리카노($5.35)', '말라사다($3.95) + 라떼($6.35)', '모치도넛($3.95) + 에스프레소($4.75)'], pullout: { title: '로컬 팁', body: '하와이 아침의 정석은 무스비. 구운 스팸+밥+김이 $2.95 — 와이키키 최저가급 따뜻한 아침입니다.' } },
      { h2: '아침 추천 메뉴', body: '전부 매장에서 직접 만듭니다:', bullets: ['스팸무스비 $2.95–$4.50 (테리야키/에그/시소와카메/쉬림프아보카도)', '말라사다 $3.95부터 (크림 버전 있음)', '모치도넛 $3.95 / 3개 $11.25', '100% 코나커피 $7.00', '에스프레소 $4.75, 라떼 $6.35'] },
      { h2: '아침 7시 오픈이 중요한 이유', body: '와이키키 일출은 대부분 카페가 열기 전. 7시에 무스비+커피 사서 비치에서 아침 먹는 게 정답입니다. 다이아몬드헤드 일출 하이킹 복귀길에도 딱.' },
    ],
    faq: [
      { q: '영업시간은?', a: '매일 오전 7시 – 오후 9시. 2142 Kalakaua Ave.' },
      { q: '와이키키 최저가 아침은?', a: '스팸무스비 $2.95. 커피 추가해도 $10 이하.' },
      { q: '테이크아웃 되나요?', a: '전부 가능. 비치 피크닉 아침이 아침 시간대 인기 1위.' },
    ],
    finalCTA: { headline: '아침 7시, 준비 완료', body: '무스비 $2.95부터, 갓 만든 도넛, 진짜 코나커피.', visitLabel: '내일 아침 방문', callLabel: '전화 (808) 304-1808' },
  },
  zh: {
    hero: { title: '威基基早餐，早上7点开门', subtitle: '麻糬甜甜圈、马拉萨达、午餐肉饭团$2.95起、100%科纳咖啡。', date: '2026年8月发布', readTime: '5分钟', badge: '早餐指南' },
    intro: '倒时差早醒反而是机会。Kona Coffee Donut每天早上7点开门，距威基基海滩步行5分钟，$10以内吃到地道夏威夷早餐。',
    visitCTA: { headline: '卡拉考阿大道，每天早7点', body: '午餐肉饭团$2.95起、现做甜甜圈和马拉萨达、100%科纳咖啡。可外带去海滩。每天7点–21点。', menuLabel: '查看菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '$10以内的早餐组合', body: '推荐组合：', bullets: ['午餐肉饭团($2.95) + 咖啡', '鸡蛋午餐肉饭团($3.50) + 美式($5.35)', '马拉萨达($3.95) + 拿铁($6.35)', '麻糬甜甜圈($3.95) + 浓缩($4.75)'], pullout: { title: '本地吃法', body: '夏威夷人的早餐就是饭团：烤午餐肉+米饭+海苔，$2.95是威基基最便宜的热早餐之一。' } },
      { h2: '早餐推荐', body: '全部店内现做：', bullets: ['饭团 $2.95–$4.50', '马拉萨达 $3.95起', '麻糬甜甜圈 $3.95 / 3个$11.25', '100%科纳咖啡 $7.00', '浓缩 $4.75、拿铁 $6.35'] },
      { h2: '为什么7点开门很重要', body: '威基基的日出在大多数咖啡店开门之前。7点买好饭团和咖啡去海滩吃早餐，才是正确打开方式。' },
    ],
    faq: [
      { q: '营业时间？', a: '每天早7点至晚9点。2142 Kalakaua Ave。' },
      { q: '威基基最便宜的早餐？', a: '午餐肉饭团$2.95，加咖啡也不到$10。' },
      { q: '可以外带吗？', a: '全部可以，海滩野餐早餐是早晨最热门的吃法。' },
    ],
    finalCTA: { headline: '早上7点，早餐已就绪', body: '饭团$2.95起、现做甜甜圈、真正的科纳咖啡。', visitLabel: '明早来店', callLabel: '致电 (808) 304-1808' },
  },
  es: {
    hero: { title: 'Desayuno en Waikiki desde las 7 AM', subtitle: 'Mochi donuts, malasadas, spam musubi desde $2.95 y café 100% Kona.', date: 'Agosto 2026', readTime: '5 min', badge: 'Guía de Desayuno' },
    intro: 'Kona Coffee Donut abre a las 7 AM todos los días, a 5 minutos a pie de la playa de Waikiki. Un desayuno hawaiano real por menos de $10.',
    visitCTA: { headline: 'Todos los días a las 7 AM en Kalākaua', body: 'Spam musubi desde $2.95, donuts y malasadas recién hechos, café 100% Kona. Para llevar a la playa. 7 AM – 9 PM.', menuLabel: 'Ver Menú', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Desayuno por menos de $10', body: 'Combinaciones:', bullets: ['Spam musubi ($2.95) + café', 'Musubi de huevo ($3.50) + americano ($5.35)', 'Malasada ($3.95) + latte ($6.35)', 'Mochi donut ($3.95) + espresso ($4.75)'] },
      { h2: 'Qué pedir', body: 'Todo hecho en casa:', bullets: ['Musubi $2.95–$4.50', 'Malasadas desde $3.95', 'Mochi donuts $3.95 / 3 por $11.25', 'Café 100% Kona $7.00'] },
    ],
    faq: [
      { q: '¿Horario?', a: '7 AM a 9 PM todos los días. 2142 Kalakaua Ave.' },
      { q: '¿El desayuno más barato de Waikiki?', a: 'Spam musubi a $2.95 — con café, menos de $10.' },
    ],
    finalCTA: { headline: 'El desayuno está listo a las 7', body: 'Musubi desde $2.95, donuts frescos, café Kona real.', visitLabel: 'Visítanos mañana', callLabel: 'Llama (808) 304-1808' },
  },
};

export default function BestBreakfastWaikikiPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
