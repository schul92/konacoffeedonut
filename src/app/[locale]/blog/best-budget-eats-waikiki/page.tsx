'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'best-budget-eats-waikiki',
  imageSrc: '/images/blog/cheap-eats-waikiki.png',
  imageAlt: 'Best places to eat in Waikiki on a budget — affordable Hawaiian food and cafes',
  schemaHeadline: 'Best Places to Eat in Waikiki on a Budget 2026 (Under $15)',
  schemaDescription:
    'A guide to the best budget-friendly cafes, food trucks, and restaurants in Waikiki — all under $15 per person.',
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Best Places to Eat in Waikiki on a Budget',
      subtitle: 'You can eat well in Waikiki without spending $50+ per meal. Here are the best spots under $15 — cafes, plate lunches, food trucks, and snacks.',
      date: 'Updated May 2026',
      readTime: '6 min read',
      badge: 'Budget Guide',
    },
    intro:
      "Waikiki has a reputation for expensive resort food, but locals and savvy visitors know there's a whole budget food scene tucked between the hotels. Plate lunches for $10, mochi donuts for $3.50, malasadas for $2, real Kona coffee for under $5 — all walking distance from Waikiki Beach. This guide is the cheap eats playbook: where to go, what to order, how much it costs, and how to maximize value without sacrificing the Hawaii experience.",
    visitCTA: {
      headline: 'Cheap, Authentic, on Kalākaua',
      body:
        "Kona Coffee Donut is one of Waikiki's best budget food stops — mochi donuts from $3.50, malasadas from $2, real 100% Kona coffee, plus bingsu and smoothies. Open 7 AM to 9 PM daily.",
      menuLabel: 'See Full Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'How Much Should You Expect to Spend',
        body:
          "Resort restaurant entrees in Waikiki run $25–$45 per person. Mid-range sit-down meals are $18–$25. Budget meals — counter service, food trucks, cafes — fall in the $8–$15 range. The trick is knowing which spots are budget vs which are just hyping themselves with 'local' branding while charging tourist prices.",
        bullets: [
          'Cafe breakfast: $5–$10 (coffee + pastry or musubi)',
          'Plate lunch: $10–$14 (rice + mac + protein, feeds 1–2)',
          'Food truck meal: $10–$15 (Korean, Mexican, Hawaiian)',
          'Snacks / desserts: $2–$8 (malasada, mochi donut, shaved ice)',
          'Coffee drinks: $4–$7 (latte, pour-over, iced coffee)',
        ],
      },
      {
        h2: 'Best Budget Spots in Waikiki',
        body:
          "These are the actual cheap spots locals point to when out-of-town friends visit. Walking distance from major Waikiki hotels.",
        bullets: [
          "Kona Coffee Donut (2142 Kalākaua Ave) — Mochi donuts $3.50, malasadas $2, 100% Kona coffee, bingsu, smoothies. Open 7 AM–9 PM.",
          "Marukame Udon — Cafeteria-style fresh udon, $8–$12 a bowl. Often a line but it moves.",
          "Rainbow Drive-In — Classic plate lunch, $10–$14. Loco moco, mixed plate, breakfast.",
          "Leonard's Bakery (Kapahulu, 10 min drive) — Malasadas $2 each, the iconic Hawaiian fried dough.",
          "Aloha Mixed Plate — Hawaiian plate lunch, $14–$18, generous portions.",
          "Highway Inn — Local Hawaiian food, $12–$18, kalua pork plate is the move.",
          "ABC Stores — Sandwiches, musubi, snacks for $5–$10 when you just need fuel.",
        ],
        pullout: {
          title: 'Best value coffee + breakfast combo',
          body: "At Kona Coffee Donut: a malasada + 100% Kona iced coffee runs about $7. Comparable mainland coffee shops charge $10+ for the same with worse coffee.",
        },
      },
      {
        h2: 'Budget Breakfast Ideas',
        body:
          "Hotel buffets in Waikiki are $35–$50 per person. You can eat just as well for under $10:",
        bullets: [
          'Kona Coffee Donut: malasada + coffee = ~$7',
          'Marukame Udon (lunch hours): udon + tempura = ~$10',
          'ABC Stores: musubi + coffee = ~$6',
          'Rainbow Drive-In: breakfast plate + coffee = ~$12',
        ],
      },
      {
        h2: 'Budget Lunch Ideas',
        body:
          "Plate lunch is Hawaii's classic budget meal — two scoops rice, mac salad, and protein on one plate, usually $10–$14.",
        bullets: [
          'Rainbow Drive-In: loco moco plate = $12',
          'Aloha Mixed Plate: kalua pork plate = $14',
          'Highway Inn: kalua + cabbage = $14',
          'Korean Corn Dog stands: $5–$8 each',
        ],
      },
      {
        h2: 'Budget Dessert + Snack Ideas',
        body:
          "Sweet treats in Waikiki don't have to be expensive resort-priced. The best authentic options:",
        bullets: [
          'Mochi donut at Kona Coffee Donut: $3.50',
          'Malasada at Leonard\'s or Kona Coffee Donut: $2',
          'Bingsu (sized for 2 people): $14–$18 — split costs $8 each',
          'Hawaiian shaved ice: $5–$10',
          'Smoothie at Mochi Land: $8.95',
        ],
      },
      {
        h2: 'Tips to Save Even More',
        body:
          "Beyond just finding cheap spots, here's how to stretch your food budget further in Waikiki:",
        bullets: [
          'Walk inland 2–3 blocks — prices drop noticeably away from Kalākaua Avenue oceanfront',
          'Eat your biggest meal at lunch (cheaper menus than dinner)',
          'Share plate lunches and bingsu — portions are generous',
          'Hit Happy Hour at sit-down restaurants for half-price appetizers',
          'Grab breakfast from a cafe ($5–$7) instead of hotel buffet ($40+)',
          'ABC Stores has surprisingly decent ready-to-eat options for quick meals',
        ],
      },
    ],
    faq: [
      { q: 'What is the cheapest place to eat in Waikiki?', a: 'Mochi donuts and malasadas at Kona Coffee Donut start at $2–$3.50. Plate lunches at Rainbow Drive-In and Aloha Mixed Plate run $10–$14. ABC Stores have musubi and sandwiches for $5–$10.' },
      { q: 'Can you eat in Waikiki for under $15?', a: 'Yes, easily. Plate lunches, cafe breakfasts, food trucks, mochi donuts, and smoothies all fall under $15. Walking inland from the oceanfront drops prices significantly.' },
      { q: 'Where do locals eat in Waikiki on a budget?', a: 'Rainbow Drive-In, Aloha Mixed Plate, Marukame Udon, and Kona Coffee Donut on Kalākaua are popular with locals. Leonard\'s Bakery on Kapahulu (10 min drive) is the iconic budget malasada spot.' },
      { q: 'How much should I budget for food per day in Waikiki?', a: 'Budget travelers can eat well on $30–$45/day (coffee + pastry breakfast, plate lunch, mid-range dinner). Splurge meals at resorts can blow $100+ per person quickly.' },
      { q: 'Is Kona coffee expensive in Waikiki?', a: 'Real 100% Kona coffee is $4–$7 per cup at authentic spots like Kona Coffee Donut. Avoid "Kona blend" labels — those contain as little as 10% real Kona.' },
      { q: 'What\'s the best cheap breakfast in Waikiki?', a: 'A malasada or mochi donut + 100% Kona coffee at Kona Coffee Donut runs ~$7 total. Comparable to mainland coffee shop pricing but with better coffee and Hawaiian flavors.' },
    ],
    finalCTA: {
      headline: 'Cheap, Real Hawaiian Food on Kalākaua',
      body: '$3.50 mochi donuts, $2 malasadas, real Kona coffee. Walking distance from Waikiki Beach.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: { title: 'ワイキキで安く美味しく食べる場所', subtitle: '$15以下で楽しめるベストスポット。', date: '2026年5月', readTime: '読了6分', badge: '予算ガイド' },
    intro: 'リゾート価格のワイキキでも、$15以下で美味しく食べられる場所はたくさん。地元民が通う本場の店を紹介します。',
    visitCTA: { headline: 'カラカウア通りで安くて本物', body: 'コナコーヒードーナツはモチドーナツ$3.50〜、マラサダ$2〜、100%コナコーヒー。毎日7時〜21時。', menuLabel: 'メニューを見る', directionsLabel: '行き方を確認' },
    sections: [
      { h2: '予算の目安', body: 'リゾート$25-45、中級$18-25、予算$8-15。', bullets: ['カフェ朝食 $5-10', 'プレートランチ $10-14', 'フードトラック $10-15', 'スナック/デザート $2-8'] },
      { h2: 'おすすめスポット', body: 'ワイキキ徒歩圏内の安くて美味しい店。', bullets: ['コナコーヒードーナツ — モチドーナツ・マラサダ・コナコーヒー', '丸亀製麺 — うどん$8-12', 'レインボードライブイン — プレートランチ$10-14', "レナーズ — マラサダ$2", 'アロハミックスプレート — $14-18'] },
      { h2: '朝食アイデア', body: 'ホテルバッフェ$35-50の代わりに$10以下で。', bullets: ['コナコーヒードーナツ：マラサダ+コーヒー$7', '丸亀：うどん+天ぷら$10', 'ABCストア：おむすび+コーヒー$6'] },
      { h2: 'ランチアイデア', body: 'プレートランチがハワイの定番。', bullets: ['ロコモコ$12', 'カルアポーク$14'] },
      { h2: 'デザートアイデア', body: 'リゾート価格でない本格スイーツ。', bullets: ['モチドーナツ$3.50', 'マラサダ$2', 'ビンス（2人前）$14-18'] },
      { h2: '節約のコツ', body: '内陸に2-3ブロック歩くだけで価格が下がります。' },
    ],
    faq: [
      { q: 'ワイキキで一番安いお店は？', a: 'マラサダ$2、モチドーナツ$3.50。プレートランチ$10-14。' },
      { q: '$15以下で食べられる？', a: 'はい、簡単に。' },
      { q: '一日いくらかかる？', a: '$30-45で十分。' },
      { q: 'コナコーヒーは高い？', a: '本物の100%コナで$4-7/杯。' },
    ],
    finalCTA: { headline: 'カラカウア通りで本物のハワイ料理を', body: 'モチドーナツ$3.50、マラサダ$2、本物のコナコーヒー。', visitLabel: '今日来店', callLabel: '電話 (808) 304-1808' },
  },
  ko: {
    hero: { title: '와이키키 가성비 맛집', subtitle: '$15 이하로 즐기는 와이키키 베스트.', date: '2026년 5월', readTime: '6분', badge: '예산 가이드' },
    intro: '리조트 가격의 와이키키에서도 $15 이하 맛집은 많습니다. 현지인이 가는 진짜 맛집을 소개합니다.',
    visitCTA: { headline: '칼라카우아의 가성비 맛집', body: '코나커피도넛 모치도넛 $3.50, 말라사다 $2, 100% 코나커피. 매일 7시–21시.', menuLabel: '메뉴 보기', directionsLabel: '길찾기' },
    sections: [
      { h2: '예산 기준', body: '리조트 $25-45, 중급 $18-25, 가성비 $8-15.', bullets: ['카페 아침 $5-10', '플레이트 런치 $10-14', '푸드트럭 $10-15'] },
      { h2: '추천 가성비 맛집', body: '와이키키 도보 거리.', bullets: ['코나커피도넛', '마루카메 우동 $8-12', '레인보 드라이브인 $10-14', '레너즈 말라사다 $2', '알로하 믹스 플레이트 $14-18'] },
      { h2: '아침 아이디어', body: '호텔 뷔페 $35-50 대신 $10 이하로.', bullets: ['코나커피도넛 $7', '마루카메 $10'] },
      { h2: '점심 아이디어', body: '하와이 정통 플레이트 런치.', bullets: ['로코모코 $12', '칼루아 포크 $14'] },
      { h2: '디저트 아이디어', body: '리조트 가격이 아닌 본격 디저트.', bullets: ['모치도넛 $3.50', '말라사다 $2', '빙수(2인분) $14-18'] },
      { h2: '추가 절약 팁', body: '내륙으로 2-3블록만 가도 가격이 떨어집니다.' },
    ],
    faq: [
      { q: '와이키키 가장 저렴한 곳?', a: '말라사다 $2, 모치도넛 $3.50.' },
      { q: '$15 이하 가능?', a: '네, 쉽게.' },
      { q: '하루 예산은?', a: '$30-45.' },
      { q: '코나커피 비싸요?', a: '진품 100% 코나 $4-7/잔.' },
    ],
    finalCTA: { headline: '칼라카우아에서 진짜 하와이 음식을', body: '모치도넛 $3.50, 말라사다 $2, 진짜 코나커피.', visitLabel: '오늘 방문', callLabel: '전화 (808) 304-1808' },
  },
  zh: {
    hero: { title: '威基基平价美食指南', subtitle: '$15以下的威基基最佳餐厅。', date: '2026年5月', readTime: '6分钟', badge: '预算指南' },
    intro: '威基基虽然以度假区价格闻名，但$15以下的美食选择并不少。本指南介绍当地人光顾的实惠餐厅。',
    visitCTA: { headline: '卡拉考阿大道的平价美食', body: 'Kona Coffee Donut 麻糬甜甜圈$3.50、玛拉萨达$2、100%科纳咖啡。每天7点–21点。', menuLabel: '查看菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '预算参考', body: '度假村 $25-45，中等 $18-25，平价 $8-15。', bullets: ['咖啡早餐 $5-10', '便当 $10-14', '餐车 $10-15'] },
      { h2: '推荐平价餐厅', body: '威基基步行可达。', bullets: ['Kona Coffee Donut', 'Marukame Udon $8-12', 'Rainbow Drive-In $10-14', 'Leonard\'s 玛拉萨达 $2', 'Aloha Mixed Plate $14-18'] },
      { h2: '早餐选择', body: '酒店自助$35-50的替代方案：$10以下。', bullets: ['Kona Coffee Donut $7', 'Marukame $10'] },
      { h2: '午餐选择', body: '夏威夷传统便当。', bullets: ['Loco moco $12', 'Kalua pork $14'] },
      { h2: '甜品零食', body: '非度假村价格的正宗甜品。', bullets: ['麻糬甜甜圈$3.50', '玛拉萨达$2', '雪冰(双人份) $14-18'] },
      { h2: '更省钱的技巧', body: '从海滨往内陆走2-3个街区，价格明显下降。' },
    ],
    faq: [
      { q: '威基基最便宜的餐厅？', a: '玛拉萨达$2、麻糬甜甜圈$3.50。' },
      { q: '$15以下能吃饱吗？', a: '可以，很容易。' },
      { q: '每天预算多少？', a: '$30-45足够。' },
      { q: '科纳咖啡贵吗？', a: '正宗100%科纳 $4-7/杯。' },
    ],
    finalCTA: { headline: '卡拉考阿的真正夏威夷美食', body: '麻糬甜甜圈$3.50、玛拉萨达$2、真正的科纳咖啡。', visitLabel: '立即到店', callLabel: '致电 (808) 304-1808' },
  },
  es: {
    hero: { title: 'Comer en Waikiki con Presupuesto', subtitle: 'Los mejores spots bajo $15.', date: 'Mayo 2026', readTime: '6 min', badge: 'Guía de Presupuesto' },
    intro: 'Aunque Waikiki tiene fama de caro, hay muchas opciones bajo $15. Esta es la guía local.',
    visitCTA: { headline: 'Comida Real y Económica en Kalākaua', body: 'Kona Coffee Donut: mochi donuts $3.50, malasadas $2, café Kona auténtico. 7 AM a 9 PM.', menuLabel: 'Ver Menú', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Cuánto Esperar Gastar', body: 'Resort $25-45, medio $18-25, económico $8-15.' },
      { h2: 'Mejores Spots Económicos', body: 'Lugares accesibles caminando.', bullets: ['Kona Coffee Donut', 'Marukame Udon $8-12', 'Rainbow Drive-In $10-14', 'Leonard\'s $2 malasadas'] },
      { h2: 'Ideas de Desayuno Económico', body: 'Buffet de hotel $35-50 vs cafe $7.' },
      { h2: 'Almuerzo Económico', body: 'Plate lunch hawaiano $10-14.' },
    ],
    faq: [
      { q: '¿Lugar más barato?', a: 'Malasadas $2, mochi donuts $3.50.' },
      { q: '¿Bajo $15 posible?', a: 'Sí, fácilmente.' },
      { q: '¿Presupuesto diario?', a: '$30-45 está bien.' },
    ],
    finalCTA: { headline: 'Comida Real Económica en Kalākaua', body: 'Mochi donuts $3.50, café Kona real.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 304-1808' },
  },
};

export default function BestBudgetEatsPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
