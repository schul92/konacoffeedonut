'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'mochi-donut-flavors-waikiki',
  imageSrc: '/images/blog/mochi-donut-flavors-waikiki.jpeg',
  imageAlt: 'Mochi donut flavors at Kona Coffee Donut Waikiki — ube, matcha, strawberry, mango, chocolate, taro, glazed, black sesame',
  schemaHeadline: 'Mochi Donut Flavors at Kona Coffee Donut Waikiki: A Visual Menu Guide',
  schemaDescription:
    'A visual guide to all mochi donut flavors at Kona Coffee Donut on Kalākaua Avenue, Waikiki. Pon-de-ring style chewy mochi donuts including ube, matcha, strawberry, mango, taro, and more.',
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Mochi Donut Flavors in Waikiki',
      subtitle: 'A complete visual guide to every mochi donut flavor at Kona Coffee Donut on Kalākaua Avenue.',
      date: 'Updated May 2026',
      readTime: '5 min read',
      badge: 'Menu Guide',
    },
    intro:
      "Mochi donuts — the chewy, ring-shaped Japanese-Hawaiian fusion treat that's taken Honolulu by storm — come in more flavors than most visitors realize. At Kona Coffee Donut on Kalākaua Avenue, we hand-make our pon-de-ring style mochi donuts daily using premium rice flour. The result is the signature 8-ball ring shape with a satisfying crunch on the outside and an impossibly chewy, slightly bouncy interior that you simply can't get from a regular wheat-flour donut. Here's the complete flavor lineup, what each tastes like, and which ones to grab first.",
    visitCTA: {
      headline: 'Mochi Donuts, Made Fresh Daily on Kalākaua',
      body:
        "Hand-made every morning. Chewy pon-de-ring style with rotating flavors. Try a mixed half-dozen to taste the lineup, or grab a single donut to pair with our Kona coffee. Open 7 AM to 9 PM daily.",
      menuLabel: 'See Full Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'What Makes a Mochi Donut Different',
        body:
          "If you've only had regular American donuts, mochi donuts are going to surprise you. They're made with glutinous rice flour (mochiko), which gives them their signature chewy, slightly bouncy texture — closer to mochi than to bread. The pon-de-ring shape (8 connected balls in a circle) is intentional: each ball pulls apart easily, so you can share or eat one section at a time. The exterior is lightly crisp from frying, and the glaze sits on top in vibrant colors that make every box look like a piece of art.",
        bullets: [
          'Made with glutinous rice flour (not wheat flour)',
          'Pon-de-ring shape — 8 balls connected in a circle',
          'Chewy and slightly bouncy interior, lightly crispy exterior',
          'Lower in fat than regular donuts because of the rice flour base',
          'Often gluten-free friendly (ask staff for current ingredient list)',
        ],
      },
      {
        h2: 'The Mochi Donut Flavor Lineup',
        body:
          "Our flavors rotate seasonally, but the core lineup stays consistent. Here's what you'll typically find in the case on any given day.",
        bullets: [
          'Original Glazed — classic vanilla glaze, the gateway flavor',
          'Ube — purple Filipino yam, sweet and earthy with a coconut undertone',
          'Matcha — Japanese green tea powder, slightly bitter and grassy with a sweet finish',
          'Strawberry — fresh strawberry glaze, bright and fruity, often topped with crushed freeze-dried berries',
          'Mango — tropical Hawaiian mango, sunny and vibrant',
          'Chocolate — rich dark chocolate glaze, the most-ordered crowd pleaser',
          'Taro — Hawaiian-grown taro root, nutty and lightly sweet',
          'Black Sesame — toasted Japanese black sesame, savory-sweet with a deep nutty flavor',
          'Cookies & Cream — vanilla glaze with crushed chocolate cookies',
          'Coffee — made with our own Kona coffee, perfect with an Americano',
        ],
        pullout: {
          title: 'Best for first-timers',
          body:
            'If you only get one, get the Original Glazed first — it lets you taste the actual mochi donut texture without flavor distractions. Pair it with the Ube or Matcha as your second to see how the flavors layer in.',
        },
      },
      {
        h2: 'How to Pick the Right Flavor',
        body:
          "Different flavors suit different cravings. If you want something fruity and bright, go strawberry or mango. If you want something rich and indulgent, go chocolate or cookies & cream. If you want to taste something distinctly Hawaiian, go ube or taro. If you want something Japanese-traditional, go matcha or black sesame. Most regulars eventually settle into a top-3 lineup — and most boxes leave with at least one of each color.",
      },
      {
        h2: 'Best Mochi Donut + Drink Pairings',
        body:
          "Mochi donuts and coffee are a classic combo, but the right pairing depends on the flavor. We recommend the following based on what tastes best together at the cafe:",
        bullets: [
          'Original Glazed + Kona Pour-Over — the cleanest expression of both',
          'Ube + Matcha Latte — the purple-and-green visual is also a flavor match',
          'Chocolate + Affogato — chocolate and espresso were made for each other',
          'Strawberry + Strawberry Smoothie — a fruity afternoon combo',
          'Black Sesame + Iced Americano — the deep nutty notes balance the bitter coffee',
        ],
      },
      {
        h2: 'How Many Should You Order?',
        body:
          "A single mochi donut is a satisfying snack on its own. A box of 6 (half-dozen) is the most popular order — perfect for sharing with one or two friends, or for trying multiple flavors yourself. A full dozen is the right call for a group, an office treat, or to take back to your hotel for the next day. Mochi donuts are best eaten fresh, but they hold up well overnight in a sealed container.",
      },
    ],
    faq: [
      {
        q: 'What is a mochi donut?',
        a: 'A mochi donut is a Japanese-Hawaiian fusion donut made with glutinous rice flour instead of wheat flour. It has a chewy, slightly bouncy texture and is typically shaped like a ring of 8 connected balls (pon-de-ring style). At Kona Coffee Donut in Waikiki, we hand-make ours fresh daily.',
      },
      {
        q: 'How many mochi donut flavors are there at Kona Coffee Donut?',
        a: 'We offer 10+ rotating mochi donut flavors including Original Glazed, Ube, Matcha, Strawberry, Mango, Chocolate, Taro, Black Sesame, Cookies & Cream, and Coffee. Seasonal specials change throughout the year.',
      },
      {
        q: 'Are mochi donuts gluten-free?',
        a: 'Mochi donuts are made with glutinous rice flour, which is naturally gluten-free. However, some recipes include small amounts of wheat flour. Ask our staff for the current ingredient list if you have a gluten allergy or sensitivity.',
      },
      {
        q: 'How much do mochi donuts cost in Waikiki?',
        a: 'Single mochi donuts at Kona Coffee Donut start at $3.50. A half-dozen is the most popular size and offers the best value for trying multiple flavors. Full menu and current pricing available in-store at 2142 Kalākaua Ave.',
      },
      {
        q: 'Where is the best place to get mochi donuts in Waikiki?',
        a: 'Kona Coffee Donut at 2142 Kalākaua Ave is the only spot in central Waikiki that hand-makes mochi donuts daily. Walking distance from major hotels and Waikiki Beach. Open 7 AM to 9 PM every day.',
      },
      {
        q: 'What is the most popular mochi donut flavor?',
        a: 'Chocolate and Original Glazed tie for the most-ordered flavors at Kona Coffee Donut. For visitors looking for distinctly Hawaiian flavors, Ube (purple yam) and Matcha are the favorites.',
      },
    ],
    finalCTA: {
      headline: 'Try the Whole Lineup — Made Fresh Daily',
      body: "Hand-made mochi donuts on Kalākaua Avenue, paired with 100% Kona coffee. Stop by today.",
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: {
      title: 'ワイキキのモチドーナツフレーバーガイド',
      subtitle: 'カラカウア通りのコナコーヒードーナツで楽しめる全フレーバーをビジュアルで紹介。',
      date: '2026年5月更新',
      readTime: '読了5分',
      badge: 'メニューガイド',
    },
    intro:
      'モチドーナツは、もち米粉を使ったもちもち食感が特徴の日本×ハワイのフュージョンスイーツ。コナコーヒードーナツでは毎朝手作りで、サクッとした外側ともちっとした中身、ポンデリング型の8つ玉の見た目が魅力です。本記事では全フレーバーと、おすすめの選び方を紹介します。',
    visitCTA: {
      headline: 'カラカウア通りで毎日手作り',
      body: '毎朝手作りのモチドーナツ。色とりどりの定番＋季節限定を取り揃え。ハーフダース（6個）でいろんな味を楽しむのがおすすめ。毎日朝7時〜夜9時営業。',
      menuLabel: 'メニューを見る',
      directionsLabel: '行き方を確認',
    },
    sections: [
      {
        h2: 'モチドーナツが他と違う理由',
        body:
          'もち米粉を使うことで、外はサクッ、中はもちもち、ふわふわとは違う独特の食感に。ポンデリングの8つ玉は、ちぎって食べやすく、シェアにも便利です。色鮮やかなグレーズで見た目もアート級。',
        bullets: ['もち米粉で作る独特のもちもち食感', 'ポンデリング型（8つ玉）', '小麦ドーナツより低脂質', 'グルテンフリーの場合あり（要確認）'],
      },
      {
        h2: 'フレーバー一覧',
        body: '季節限定はありますが、定番は通年でご用意。',
        bullets: [
          'オリジナルグレーズ — 定番バニラ',
          '紫芋（ウベ）— ほのかなココナッツ感',
          '抹茶 — 上質な日本産抹茶',
          'いちご — フレッシュなフルーティ感',
          'マンゴー — トロピカルでサニー',
          'チョコレート — 一番人気',
          'タロ — ハワイ産タロ芋のナッティな甘み',
          '黒ごま — 香ばしい和の味',
          'クッキー&クリーム — クッキーの食感プラス',
          'コーヒー — 自家製コナコーヒー使用',
        ],
        pullout: { title: '初めての方に', body: 'まずはオリジナルグレーズで本来のもちもち食感を。次にウベか抹茶でハワイらしさを。' },
      },
      {
        h2: 'フレーバーの選び方',
        body: 'フルーティ派はいちご・マンゴー、リッチ派はチョコレート・クッキー&クリーム、ハワイらしさはウベ・タロ、和テイストは抹茶・黒ごま。最終的には自分のトップ3が見つかります。',
      },
      {
        h2: 'ドリンクとのペアリング',
        body: '一緒に飲むドリンクで体験が変わります。',
        bullets: [
          'オリジナル + コナプアオーバー',
          'ウベ + 抹茶ラテ（紫×緑の見た目も◎）',
          'チョコレート + アフォガート',
          'いちご + ストロベリースムージー',
          '黒ごま + アイスアメリカーノ',
        ],
      },
      {
        h2: 'いくつ買うべき？',
        body:
          '1個でも十分満足感あり。一番人気はハーフダース（6個）で複数のフレーバーを楽しめます。グループならフルダース（12個）。新鮮さが命なので、当日中に食べるのがベスト。',
      },
    ],
    faq: [
      { q: 'モチドーナツとは？', a: '小麦粉ではなくもち米粉で作る日本×ハワイのドーナツ。もちもち食感と8つ玉のポンデリング型が特徴です。' },
      { q: 'いくつフレーバーがありますか？', a: '定番10種類以上＋季節限定。いつ来てもバリエーションが楽しめます。' },
      { q: 'グルテンフリー？', a: 'もち米粉ベースですが、レシピによって少量の小麦を含む場合があります。スタッフにご確認ください。' },
      { q: '価格は？', a: '1個$3.50〜。ハーフダースが一番お得で人気です。' },
      { q: 'どこで買えますか？', a: '2142 カラカウア通り、ワイキキ中心部。毎日朝7時〜夜9時。' },
      { q: '人気フレーバーは？', a: 'チョコレートとオリジナルが定番人気。観光客にはウベと抹茶が好評です。' },
    ],
    finalCTA: { headline: '毎日手作り。全フレーバーをぜひ', body: 'カラカウア通り 2142、ワイキキ中心部。今日お越しください。', visitLabel: '今日来店する', callLabel: '電話 (808) 304-1808' },
  },
  ko: {
    hero: {
      title: '와이키키 모치도넛 플레이버 가이드',
      subtitle: '칼라카우아 거리 코나커피도넛의 모든 모치도넛 맛을 한눈에.',
      date: '2026년 5월 업데이트',
      readTime: '5분 분량',
      badge: '메뉴 가이드',
    },
    intro:
      '모치도넛은 찹쌀가루로 만든 일본·하와이 퓨전 도넛입니다. 코나커피도넛에서는 매일 직접 만들어 쫀득한 식감과 폰데링 형태(8개 공이 연결된 원형)의 비주얼을 자랑합니다. 본 글에서 전 메뉴와 추천 조합을 확인하세요.',
    visitCTA: {
      headline: '칼라카우아 거리에서 매일 직접 제작',
      body: '매일 아침 직접 만드는 모치도넛. 다양한 시그니처 + 시즌 한정. 6개 박스로 여러 맛을 즐기세요. 매일 오전 7시 – 오후 9시.',
      menuLabel: '메뉴 보기',
      directionsLabel: '길찾기',
    },
    sections: [
      {
        h2: '모치도넛이 특별한 이유',
        body: '찹쌀가루를 사용해 겉은 바삭, 속은 쫀득한 독특한 식감을 냅니다. 폰데링 형태는 떼어 먹기 쉽고 비주얼도 화려합니다.',
        bullets: ['찹쌀가루 사용으로 쫀득한 식감', '폰데링 형태(8개 공 원형)', '일반 도넛보다 지방 함량 낮음', '글루텐 프리 가능성 (확인 필요)'],
      },
      {
        h2: '플레이버 라인업',
        body: '시그니처 메뉴는 연중 운영됩니다.',
        bullets: [
          '오리지널 글레이즈 — 클래식 바닐라',
          '우베 — 보라색 얌, 코코넛 향',
          '말차 — 프리미엄 말차',
          '스트로베리 — 신선한 딸기',
          '망고 — 트로피컬',
          '초콜릿 — 베스트셀러',
          '타로 — 하와이산 타로',
          '검은깨 — 고소한 일본식',
          '쿠키앤크림',
          '커피 — 자체 코나커피 사용',
        ],
        pullout: { title: '처음이신가요?', body: '오리지널 글레이즈로 식감을 먼저 경험한 뒤 우베·말차로 진행해보세요.' },
      },
      {
        h2: '플레이버 선택 팁',
        body: '과일 좋아하면 딸기·망고, 진한 맛은 초콜릿·쿠키앤크림, 하와이 느낌은 우베·타로, 일본 느낌은 말차·검은깨.',
      },
      {
        h2: '드링크 페어링',
        body: '함께 마시는 음료로 경험이 달라집니다.',
        bullets: ['오리지널 + 코나 푸어오버', '우베 + 말차 라테', '초콜릿 + 아포가토', '딸기 + 딸기 스무디', '검은깨 + 아이스 아메리카노'],
      },
      { h2: '몇 개를 주문할까?', body: '1개로도 충분하지만, 여러 맛을 즐기려면 6개 박스가 가장 인기. 단체는 12개. 신선도가 핵심이니 당일 소비를 추천합니다.' },
    ],
    faq: [
      { q: '모치도넛이란?', a: '찹쌀가루로 만든 일본·하와이 퓨전 도넛. 쫀득한 식감과 폰데링 형태가 특징.' },
      { q: '메뉴는 몇 가지?', a: '정규 10종 이상 + 시즌 한정 메뉴.' },
      { q: '글루텐 프리?', a: '찹쌀 기반이지만 일부 레시피는 소량의 밀가루 사용. 스태프에게 문의.' },
      { q: '가격은?', a: '낱개 $3.50부터. 6개 박스가 가장 인기.' },
      { q: '어디에서 구입?', a: '2142 칼라카우아 거리, 와이키키 중심부. 매일 오전 7시 – 오후 9시.' },
      { q: '베스트셀러는?', a: '초콜릿과 오리지널이 가장 인기. 관광객은 우베·말차 선호.' },
    ],
    finalCTA: { headline: '매일 직접 만든 모치도넛', body: '와이키키 중심부 2142 칼라카우아 거리.', visitLabel: '오늘 방문', callLabel: '전화 (808) 304-1808' },
  },
  zh: {
    hero: {
      title: '威基基麻糬甜甜圈口味指南',
      subtitle: '位于卡拉考阿大道的 Kona Coffee Donut 全部口味一览。',
      date: '2026年5月更新',
      readTime: '5分钟阅读',
      badge: '菜单指南',
    },
    intro:
      '麻糬甜甜圈用糯米粉制作，外脆内Q，是日本与夏威夷融合的特色甜点。Kona Coffee Donut 每天现做手工麻糬甜甜圈，呈现独特的8颗连环波堤形。本指南介绍所有口味与推荐搭配。',
    visitCTA: {
      headline: '卡拉考阿大道每日现做',
      body: '每天早晨手工制作。多种招牌+季节限定。半打装最受欢迎。每天早7点至晚9点营业。',
      menuLabel: '查看菜单',
      directionsLabel: '获取路线',
    },
    sections: [
      {
        h2: '麻糬甜甜圈的独特之处',
        body: '糯米粉带来Q弹有嚼劲的口感，外层酥脆。波堤形（8颗连环）易于分享，色彩缤纷。',
        bullets: ['糯米粉制作，独特Q弹', '波堤形（8颗）', '比传统甜甜圈低脂', '可能为无麸质（请确认）'],
      },
      {
        h2: '口味菜单',
        body: '招牌口味全年供应。',
        bullets: [
          '原味釉 — 经典香草',
          '紫薯（Ube）— 椰香尾韵',
          '抹茶 — 高级日本抹茶',
          '草莓 — 新鲜果香',
          '芒果 — 热带阳光',
          '巧克力 — 最受欢迎',
          '芋头 — 夏威夷芋头',
          '黑芝麻 — 香脆和风',
          '奥利奥饼干',
          '咖啡 — 自家科纳咖啡',
        ],
        pullout: { title: '新手推荐', body: '先点原味釉感受口感，再加紫薯或抹茶体验夏威夷风味。' },
      },
      {
        h2: '如何选择',
        body: '果香派：草莓、芒果；浓郁派：巧克力、奥利奥；夏威夷风：紫薯、芋头；日本风：抹茶、黑芝麻。',
      },
      {
        h2: '饮料搭配',
        body: '搭配不同饮料体验更佳。',
        bullets: ['原味 + 科纳手冲', '紫薯 + 抹茶拿铁', '巧克力 + 阿芙佳朵', '草莓 + 草莓奶昔', '黑芝麻 + 冰美式'],
      },
      { h2: '应该买几个？', body: '一颗即可满足，半打（6个）最受欢迎，团体可点一打。新鲜最重要，当日享用最佳。' },
    ],
    faq: [
      { q: '什么是麻糬甜甜圈？', a: '糯米粉制作的日式·夏威夷融合甜甜圈，独特Q弹口感，波堤形外观。' },
      { q: '有几种口味？', a: '招牌10种+季节限定。' },
      { q: '是无麸质吗？', a: '糯米基底，但部分配方含少量小麦。请询问店员。' },
      { q: '价格？', a: '单颗$3.50起。半打最受欢迎。' },
      { q: '在哪里购买？', a: '威基基中心 2142 卡拉考阿大道。每天早7点至晚9点。' },
      { q: '最受欢迎的口味？', a: '巧克力和原味釉，游客喜欢紫薯和抹茶。' },
    ],
    finalCTA: { headline: '每日现做麻糬甜甜圈', body: '威基基中心 2142 卡拉考阿大道。', visitLabel: '立即到店', callLabel: '致电 (808) 304-1808' },
  },
  es: {
    hero: { title: 'Sabores de Mochi Donut en Waikiki', subtitle: 'Guía visual del menú en Kalākaua Avenue.', date: 'Mayo 2026', readTime: '5 min', badge: 'Guía de Menú' },
    intro: 'Los mochi donuts son una fusión japonesa-hawaiana hecha con harina de arroz glutinoso, con textura masticable y forma de anillo (8 bolas conectadas). En Kona Coffee Donut los hacemos frescos cada mañana.',
    visitCTA: {
      headline: 'Mochi Donuts Frescos Cada Día',
      body: 'Hechos a mano cada mañana en Kalākaua Avenue. Sabores rotativos. Compra una media docena para probar varios.',
      menuLabel: 'Ver Menú',
      directionsLabel: 'Cómo llegar',
    },
    sections: [
      { h2: 'Qué hace al Mochi Donut diferente', body: 'Harina de arroz glutinoso (no de trigo) le da textura masticable y rebote único.', bullets: ['Harina de arroz glutinoso', 'Forma pon-de-ring (8 bolas)', 'Más bajo en grasa', 'Posible sin gluten — pregunta'] },
      {
        h2: 'Sabores Disponibles',
        body: 'Núcleo del menú durante todo el año.',
        bullets: ['Glaseado Original', 'Ube (ñame morado)', 'Matcha', 'Fresa', 'Mango', 'Chocolate', 'Taro', 'Sésamo Negro', 'Cookies & Cream', 'Café Kona'],
      },
      { h2: 'Cómo Elegir', body: 'Frutal: fresa, mango. Rico: chocolate, cookies. Hawaiano: ube, taro. Japonés: matcha, sésamo negro.' },
      { h2: 'Maridaje con Bebidas', body: 'Combinaciones recomendadas:', bullets: ['Original + Pour-Over Kona', 'Ube + Matcha Latte', 'Chocolate + Affogato'] },
    ],
    faq: [
      { q: '¿Qué es un mochi donut?', a: 'Donut japonés-hawaiano hecho con harina de arroz glutinoso. Textura masticable y forma de anillo de 8 bolas.' },
      { q: '¿Cuántos sabores hay?', a: '10+ sabores rotativos.' },
      { q: '¿Precio?', a: 'Desde $3.50 por unidad. Media docena es la opción más popular.' },
    ],
    finalCTA: { headline: 'Frescos Cada Día', body: '2142 Kalākaua Ave, Waikiki.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 304-1808' },
  },
};

export default function MochiDonutFlavorsPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
