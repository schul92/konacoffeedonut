'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'best-smoothies-waikiki',
  imageSrc: '/images/blog/best-smoothies-waikiki.jpeg',
  imageAlt: 'Best smoothies in Waikiki — Mochi Land Hawaiian smoothies in tropical flavors',
  schemaHeadline: 'Best Smoothies in Waikiki 2026: 10 Hawaiian Flavors at Mochi Land',
  schemaDescription:
    "A guide to the best smoothies in Waikiki, featuring 10 Hawaiian-style Mochi Land smoothies at Kona Coffee Donut on Kalākaua Avenue, all priced at $8.95.",
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Best Smoothies in Waikiki 2026',
      subtitle: '10 Hawaiian smoothie flavors at Mochi Land — all $8.95, all walking distance from Waikiki Beach.',
      date: 'Updated May 2026',
      readTime: '5 min read',
      badge: 'Smoothie Guide',
    },
    intro:
      "After a morning surf, an afternoon walk down Kalākaua, or a sunny afternoon at the beach, nothing hits like a cold tropical smoothie. The challenge in Waikiki: a lot of smoothie spots use frozen concentrates and pre-mix bases that taste like syrup. At Mochi Land — the smoothie counter inside Kona Coffee Donut — every smoothie is blended to order using real fruit and authentic Asian-Hawaiian flavors. All 10 flavors are priced at $8.95, no upsells, no surprises. Here's the lineup, what each tastes like, and which ones to try first.",
    visitCTA: {
      headline: '10 Hawaiian Smoothies, All $8.95, On Kalākaua',
      body:
        "Mochi Land at Kona Coffee Donut blends every smoothie fresh to order. From classic mango to brown sugar boba and ube cream, there's something for every craving. Walking distance from Waikiki Beach. Open daily 7 AM to 9 PM.",
      menuLabel: 'See Full Smoothie Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'The Mochi Land Smoothie Lineup',
        body: "Each smoothie is blended fresh to order with real fruit, ice, and our house base. Some come with toppings like tapioca pearls or brown sugar boba — those are noted below.",
        bullets: [
          'Pina Colada Smoothie — pineapple + coconut, the classic beach drink in smoothie form',
          'Strawberry Smoothie — fresh strawberry, bright and tart, a top pick on hot days',
          'Mango Smoothie — ripe Hawaiian mango, the most-ordered tropical flavor',
          'Lychee Smoothie — delicate floral sweetness, refreshing and light',
          'Brown Sugar Smoothie — caramelized brown sugar with chewy boba pearls',
          'Ube Smoothie — purple Filipino yam, sweet, earthy, and very Instagrammable',
          'Coffee Smoothie — made with our 100% Kona coffee, perfect afternoon pick-me-up',
          'Thai Tea Smoothie — bold Thai tea with creamy texture and boba pearls',
          'Taro Smoothie — Hawaiian-grown taro, nutty and lightly sweet',
          'Milk Tea Smoothie — classic Asian milk tea with chewy tapioca pearls',
        ],
        pullout: {
          title: 'Best for first-timers',
          body:
            "If it's your first visit, go Mango or Pina Colada — they're the safest entry into Hawaiian smoothie flavors. If you're feeling adventurous, Ube or Brown Sugar Boba give you something distinctly Asian-Hawaiian.",
        },
      },
      {
        h2: 'Smoothie or Boba Smoothie? What\'s the Difference?',
        body:
          "At Mochi Land, some flavors come with chewy tapioca pearls (\"boba\") at the bottom. The pearls are cooked in brown sugar syrup and add a chewy, slightly sweet texture that you sip up through a wide straw. Pina Colada, Strawberry, Mango, Lychee, and Ube are typically blended without pearls. Brown Sugar, Thai Tea, Taro, Coffee, and Milk Tea typically come with pearls. If you want pearls (or want to skip them) on any flavor, just ask at the counter.",
      },
      {
        h2: 'Best Smoothie Pairings',
        body: "Smoothies pair beautifully with our other menu items. Here's what regulars order together:",
        bullets: [
          'Pina Colada Smoothie + Hawaiian Mochi Donut — both tropical, both Instagram-perfect',
          'Brown Sugar Boba Smoothie + Black Sesame Mochi Donut — the classic Asian dessert combo',
          'Mango Smoothie + Mango Bingsu — for the mango maximalist',
          'Coffee Smoothie + Affogato — yes, double coffee, and yes, it works',
          'Ube Smoothie + Ube Mochi Donut — full purple aesthetic',
        ],
      },
      {
        h2: 'Why Mochi Land Smoothies Stand Out',
        body:
          "We've all had the disappointing smoothie that tastes mostly like ice and sugar. Mochi Land smoothies are blended thick (you'll need a wide straw), use real fruit and real Asian-Hawaiian flavor bases (not just syrups), and stay flavorful all the way to the bottom of the cup. We also keep the price flat at $8.95 across all 10 flavors — no upcharges for boba, no surprise add-ons.",
      },
      {
        h2: 'Best Smoothies for Different Vibes',
        body:
          "Different occasions call for different smoothies. Here's our cheat sheet:",
        bullets: [
          'Post-beach refresh — Pina Colada or Mango',
          'Afternoon caffeine fix — Coffee Smoothie',
          'Late-night dessert sub — Brown Sugar Boba or Milk Tea',
          'Instagram moment — Ube (purple) or Brown Sugar (caramel layers)',
          'Healthy-feeling option — Strawberry or Lychee',
          'Taro lovers — straight to Taro Smoothie',
        ],
      },
    ],
    faq: [
      {
        q: 'How much do smoothies cost at Mochi Land Waikiki?',
        a: 'All 10 Mochi Land smoothie flavors at Kona Coffee Donut are priced flat at $8.95. No upsells for boba pearls or premium flavors.',
      },
      {
        q: 'Do the smoothies have boba (tapioca pearls)?',
        a: 'Some do, some don\'t. Brown Sugar, Thai Tea, Taro, Coffee, and Milk Tea typically come with chewy tapioca pearls. Pina Colada, Strawberry, Mango, Lychee, and Ube are usually blended without pearls. You can request pearls (or skip them) on any flavor.',
      },
      {
        q: 'Where can I get a real fruit smoothie in Waikiki?',
        a: 'Mochi Land at Kona Coffee Donut, 2142 Kalākaua Ave, blends smoothies fresh to order using real fruit and authentic Asian-Hawaiian bases (not pre-mix syrups). Walking distance from Waikiki Beach.',
      },
      {
        q: 'What is the most popular smoothie flavor at Mochi Land?',
        a: 'Mango is the most-ordered classic. For more adventurous customers, Brown Sugar Boba and Ube are the top "different" picks. Coffee Smoothie is the favorite for caffeine lovers.',
      },
      {
        q: 'Are the smoothies dairy-free?',
        a: 'Some flavors are naturally dairy-free (pina colada, fruit-based smoothies). Others use a milk or cream base. Ask staff for the current ingredient list if you have a dietary restriction.',
      },
      {
        q: 'What are the hours for Mochi Land smoothies in Waikiki?',
        a: 'Mochi Land at Kona Coffee Donut is open daily from 7 AM to 9 PM at 2142 Kalākaua Ave, Waikiki. Smoothies are available all hours.',
      },
    ],
    finalCTA: {
      headline: 'Your Next Smoothie Is on Kalākaua',
      body: '10 Hawaiian flavors, $8.95 across the board, blended fresh. Walking distance from the beach.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: { title: 'ワイキキで美味しいスムージー10選', subtitle: 'Mochi Landの全10フレーバー、すべて$8.95。', date: '2026年5月更新', readTime: '読了5分', badge: 'スムージーガイド' },
    intro: 'Mochi Land（コナコーヒードーナツ内）では、本物のフルーツと本格的なアジアン・ハワイアンの味を使い、その場でブレンド。10種類すべて$8.95均一でわかりやすい価格設定。',
    visitCTA: { headline: 'カラカウア通りでハワイアンスムージーを', body: 'すべて$8.95、その場でブレンド。マンゴー、ウベ、ブラウンシュガーボバなど10種類。毎日7時〜21時。', menuLabel: 'メニューを見る', directionsLabel: '行き方を確認' },
    sections: [
      { h2: 'スムージー全10フレーバー', body: 'ボバ（タピオカ）入りのものはお店で確認できます。', bullets: ['ピニャコラーダ', 'ストロベリー', 'マンゴー', 'ライチ', 'ブラウンシュガーボバ', 'ウベ（紫芋）', 'コーヒー（コナ豆使用）', 'タイティー', 'タロ', 'ミルクティー'], pullout: { title: '初めての方', body: 'マンゴーかピニャコラーダが定番。冒険したいならウベかブラウンシュガー。' } },
      { h2: 'スムージーとボバスムージーの違い', body: 'タピオカパールが入ったタイプは太いストローで吸い上げる楽しさが特徴。ご希望に応じて入れる/抜くが可能です。' },
      { h2: 'おすすめペアリング', body: 'ドーナツやアフォガートとの組み合わせも◎', bullets: ['ピニャコラーダ + マンゴーモチドーナツ', 'ブラウンシュガー + 黒ごまドーナツ', 'コーヒースムージー + アフォガート', 'ウベスムージー + ウベドーナツ'] },
      { h2: 'Mochi Landの強み', body: 'シロップではなく本物のフルーツ、均一$8.95価格、注文ごとにブレンド。' },
    ],
    faq: [
      { q: '価格は？', a: '全10種類$8.95均一。追加料金なし。' },
      { q: 'ボバ（タピオカ）は入っていますか？', a: 'フレーバーによります。ご希望で追加・除外可能。' },
      { q: '営業時間は？', a: '毎日朝7時〜夜9時。' },
      { q: '人気フレーバーは？', a: 'マンゴーが定番、ウベやブラウンシュガーも人気。' },
    ],
    finalCTA: { headline: '今日のスムージーをカラカウア通りで', body: '10種類$8.95、ビーチから徒歩圏内。', visitLabel: '今日来店', callLabel: '電話 (808) 304-1808' },
  },
  ko: {
    hero: { title: '와이키키 베스트 스무디 10선', subtitle: 'Mochi Land 전 메뉴 균일가 $8.95.', date: '2026년 5월 업데이트', readTime: '5분 분량', badge: '스무디 가이드' },
    intro: 'Mochi Land(코나커피도넛 내)는 시럽 베이스가 아닌 진짜 과일과 정통 아시안·하와이안 베이스로 주문 즉시 블렌딩. 전 메뉴 $8.95 균일가.',
    visitCTA: { headline: '칼라카우아 거리의 하와이안 스무디', body: '모두 $8.95, 즉석 블렌딩. 망고, 우베, 흑당 보바 등 10종. 매일 7시–21시.', menuLabel: '메뉴 보기', directionsLabel: '길찾기' },
    sections: [
      { h2: '스무디 전 메뉴', body: '보바(타피오카) 추가/제외 가능.', bullets: ['피냐콜라다', '딸기', '망고', '리치', '흑당 보바', '우베(자색 얌)', '커피(코나)', '타이티', '타로', '밀크티'], pullout: { title: '처음이라면', body: '망고나 피냐콜라다가 무난, 모험하려면 우베나 흑당.' } },
      { h2: '일반 스무디 vs 보바 스무디', body: '보바는 굵은 빨대로 빨아 마시는 쫀득함이 매력. 원하는 대로 추가·제외 가능.' },
      { h2: '추천 조합', body: '도넛이나 아포가토와도 잘 어울림.', bullets: ['피냐콜라다 + 망고 모치도넛', '흑당 + 검은깨 도넛', '커피 스무디 + 아포가토', '우베 + 우베 도넛'] },
      { h2: 'Mochi Land가 다른 이유', body: '진짜 과일, 균일가, 즉석 블렌딩.' },
    ],
    faq: [
      { q: '가격은?', a: '전 메뉴 $8.95 균일.' },
      { q: '보바 들어가나요?', a: '메뉴마다 다름, 요청 시 변경 가능.' },
      { q: '영업시간은?', a: '매일 오전 7시 – 오후 9시.' },
      { q: '인기 메뉴는?', a: '망고가 베스트, 우베·흑당도 인기.' },
    ],
    finalCTA: { headline: '오늘의 스무디는 칼라카우아에서', body: '10종 $8.95, 비치 도보 거리.', visitLabel: '오늘 방문', callLabel: '전화 (808) 304-1808' },
  },
  zh: {
    hero: { title: '威基基最佳奶昔10选', subtitle: 'Mochi Land 全部口味均价 $8.95。', date: '2026年5月更新', readTime: '5分钟', badge: '奶昔指南' },
    intro: 'Mochi Land（位于 Kona Coffee Donut 内）使用真实水果和正宗亚洲·夏威夷风味，现点现打。10种口味均一价 $8.95。',
    visitCTA: { headline: '卡拉考阿大道的夏威夷奶昔', body: '全部 $8.95，现点现打。芒果、紫薯、黑糖珍珠等10种。每天7点–21点。', menuLabel: '查看菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '全部口味', body: '可加/不加珍珠。', bullets: ['椰林飘香', '草莓', '芒果', '荔枝', '黑糖珍珠', '紫薯', '咖啡（科纳豆）', '泰式奶茶', '芋头', '奶茶'], pullout: { title: '新手推荐', body: '芒果或椰林飘香最经典，紫薯和黑糖最具特色。' } },
      { h2: '普通奶昔 vs 珍珠奶昔', body: '珍珠奶昔需用粗吸管，QQ口感增加。可根据喜好调整。' },
      { h2: '推荐搭配', body: '与甜甜圈、阿芙佳朵搭配也很棒。', bullets: ['椰林 + 芒果麻糬', '黑糖 + 黑芝麻麻糬', '咖啡奶昔 + 阿芙佳朵', '紫薯奶昔 + 紫薯麻糬'] },
      { h2: 'Mochi Land 的优势', body: '真实水果、均一价格、现点现打。' },
    ],
    faq: [
      { q: '价格？', a: '全部$8.95均价。' },
      { q: '有珍珠吗？', a: '部分口味含珍珠，可调整。' },
      { q: '营业时间？', a: '每天早7点至晚9点。' },
      { q: '最受欢迎口味？', a: '芒果是经典，紫薯和黑糖最有特色。' },
    ],
    finalCTA: { headline: '今天的奶昔在卡拉考阿', body: '10种$8.95，海滩步行可达。', visitLabel: '立即到店', callLabel: '致电 (808) 304-1808' },
  },
  es: {
    hero: { title: 'Mejores Smoothies en Waikiki', subtitle: '10 sabores Mochi Land, todos a $8.95.', date: 'Mayo 2026', readTime: '5 min', badge: 'Guía de Smoothies' },
    intro: 'Mochi Land en Kona Coffee Donut prepara cada smoothie al momento con fruta real y sabores asiático-hawaianos. Los 10 sabores cuestan $8.95 cada uno.',
    visitCTA: { headline: 'Smoothies Hawaianos en Kalākaua', body: 'Todos a $8.95, batidos al momento. Mango, ube, té con leche y boba. Abierto 7 AM a 9 PM.', menuLabel: 'Ver Menú', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Sabores Disponibles', body: 'Algunos vienen con perlas de tapioca (boba).', bullets: ['Piña Colada', 'Fresa', 'Mango', 'Lichi', 'Azúcar Morena Boba', 'Ube', 'Café Kona', 'Té Tailandés', 'Taro', 'Té con Leche'] },
      { h2: '¿Smoothie con boba o sin?', body: 'Algunos sabores incluyen perlas de tapioca masticables. Pídelo como prefieras.' },
      { h2: 'Maridajes Recomendados', body: 'Combina con donuts o affogato.', bullets: ['Piña Colada + Mochi Donut Mango', 'Azúcar Morena + Mochi Donut Sésamo Negro', 'Café Smoothie + Affogato'] },
    ],
    faq: [
      { q: '¿Precio?', a: 'Todos a $8.95.' },
      { q: '¿Tienen boba?', a: 'Algunos sí, otros no. Se puede ajustar.' },
      { q: '¿Horario?', a: '7 AM a 9 PM diariamente.' },
    ],
    finalCTA: { headline: 'Tu Próximo Smoothie en Kalākaua', body: '10 sabores, $8.95, a pasos de la playa.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 304-1808' },
  },
};

export default function BestSmoothiesPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
