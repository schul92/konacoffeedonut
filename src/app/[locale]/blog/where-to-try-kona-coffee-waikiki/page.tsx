'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'where-to-try-kona-coffee-waikiki',
  imageSrc: '/images/blog/where-to-try-kona-coffee-waikiki.jpeg',
  imageAlt: 'Pour-over Kona coffee at Kona Coffee Donut Waikiki',
  schemaHeadline: 'Where to Try Real Kona Coffee in Waikiki 2026',
  schemaDescription:
    'A guide to finding authentic 100% Kona coffee in Waikiki — what to look for, how to spot real Kona, and where to taste pour-over and espresso on Kalākaua Avenue.',
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Where to Try Real Kona Coffee in Waikiki',
      subtitle: 'Beyond the big chains — finding authentic 100% Kona on Kalākaua Avenue.',
      date: 'Updated May 2026',
      readTime: '6 min read',
      badge: 'Coffee Guide',
    },
    intro:
      "Hawaii is the only US state that grows coffee, and Kona — on the Big Island's western slope — is where the legendary stuff comes from. The challenge: most \"Kona blend\" coffee in Waikiki tourist shops contains as little as 10% actual Kona coffee. The other 90% can be cheap commodity beans from Brazil or Vietnam. If you want to taste what real Kona coffee actually tastes like, you need to know where to find 100% Kona — and how to brew it right. This guide tells you exactly where to drink it in Waikiki and what to look for.",
    visitCTA: {
      headline: 'Authentic 100% Kona Coffee on Kalākaua Avenue',
      body:
        "We brew with 100% Kona coffee sourced through Honolulu Coffee — no blends, no fillers. Pour-over, espresso, lattes, and whole beans to take home. Walking distance from Waikiki Beach. Open daily 7 AM to 9 PM.",
      menuLabel: 'See Coffee Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'What Makes Kona Coffee Special',
        body:
          "Kona coffee grows on the volcanic slopes of Mauna Loa and Hualālai on the Big Island, between roughly 800 and 2,500 feet of elevation. The combination of rich volcanic soil, mild morning sun, afternoon cloud cover, and tropical rainfall creates ideal conditions for slow-ripened, complex coffee cherries. The result is a cup that's smooth, low in acidity, with notes ranging from bright citrus and brown sugar to nutty, chocolatey, and floral depending on the farm. Real Kona is one of the most expensive coffees in the world precisely because the growing area is so small (about 6 miles wide) and the harvesting is still done largely by hand.",
        bullets: [
          'Grown only in the Kona district of Hawaii Big Island',
          'Hand-picked at peak ripeness, not machine-harvested',
          'Smooth body, low acidity, complex flavor notes',
          'One of the most expensive coffees in the world',
          'Real 100% Kona is rare in tourist-area shops',
        ],
      },
      {
        h2: 'How to Spot Real 100% Kona vs. "Kona Blend"',
        body:
          "Hawaii state law currently allows a coffee to be labeled \"Kona Blend\" with as little as 10% actual Kona beans. The remaining 90% can be from anywhere. If you want the real thing, look for the words \"100% Kona\" on the label or ask the barista directly. If a shop is hesitant or vague about the percentage, it's probably a blend. Real Kona costs the shop more, so it's almost always priced accordingly — if a coffee menu has \"Kona\" at the same price as house drip, it's likely a blend.",
        pullout: {
          title: 'The 100% rule',
          body: "If the menu doesn't say \"100% Kona,\" assume it's a blend with as little as 10% real Kona beans. Always ask.",
        },
      },
      {
        h2: 'How We Brew Kona Coffee',
        body:
          "At Kona Coffee Donut we brew 100% Kona through several methods so you can taste the difference. Pour-over highlights the cleanest flavor and is our recommendation for first-timers — you taste exactly what the bean offers. Espresso pulls a more concentrated, syrupy version. Iced Americano is great on a hot Waikiki day and lets the floral notes shine through. Latte and cappuccino balance the coffee with steamed milk for a richer, smoother experience.",
        bullets: [
          'Pour-Over — cleanest expression, recommended for first-timers',
          'Espresso — concentrated and syrupy, perfect with our Affogato',
          'Iced Americano — floral notes shine on hot afternoons',
          'Latte / Cappuccino — milk-based for a smoother experience',
          'Cold Brew — slow-steeped, naturally sweet, low-acid',
        ],
      },
      {
        h2: 'Take Kona Coffee Home',
        body:
          "If you've fallen in love with the taste, take a bag home. Kona coffee makes one of the best Hawaii souvenirs — it travels well in beans, holds its flavor, and is something you can enjoy for weeks after the trip. We sell whole beans by the bag at the cafe, and our staff can recommend a roast level based on your preferred brew method.",
      },
      {
        h2: 'Best Coffee + Donut Pairings',
        body:
          "Kona coffee pairs beautifully with our mochi donut lineup. The clean, slightly sweet notes of Kona work especially well with rich or earthy donut flavors:",
        bullets: [
          'Pour-Over Kona + Original Glazed — purest expression of both',
          'Iced Americano + Black Sesame Donut — savory-sweet balance',
          'Latte + Ube Donut — milk softens both, the purple-cream visual is bonus',
          'Affogato + Chocolate Donut — pure indulgence',
          'Cold Brew + Strawberry Donut — sweet-tart afternoon combo',
        ],
      },
    ],
    faq: [
      { q: 'Where can I get authentic 100% Kona coffee in Waikiki?', a: 'Kona Coffee Donut at 2142 Kalākaua Ave brews 100% Kona coffee sourced through Honolulu Coffee. No blends or fillers. Walking distance from Waikiki Beach.' },
      { q: 'What is the difference between Kona blend and 100% Kona?', a: 'Hawaii law allows "Kona Blend" labels with as little as 10% real Kona beans. 100% Kona means the entire bag or cup is genuine Kona-grown coffee — significantly higher quality and more expensive.' },
      { q: 'Why is Kona coffee so expensive?', a: 'Kona is grown in a small region (about 6 miles wide) with limited yield, hand-picked at peak ripeness, and processed with care. The unique volcanic soil and microclimate produce a smooth, complex cup that\'s impossible to replicate elsewhere.' },
      { q: 'Can I take Kona coffee beans home from Waikiki?', a: 'Yes — Kona Coffee Donut sells whole-bean 100% Kona by the bag. Coffee travels well, holds flavor, and makes an excellent Hawaii souvenir.' },
      { q: 'What does Kona coffee taste like?', a: 'Smooth body, low acidity, notes of brown sugar, citrus, nuts, and sometimes chocolate or floral hints depending on the farm. Less bitter than commodity coffee, with a clean finish.' },
      { q: 'How should I brew Kona coffee?', a: 'Pour-over and Aeropress methods showcase Kona\'s clean flavor best. Espresso works for richer drinks. Avoid burning the beans — Kona is best at medium roast.' },
    ],
    finalCTA: {
      headline: 'Taste Real Kona Coffee on Kalākaua',
      body: '100% Kona, multiple brew methods, and beans to take home. The best authentic Kona experience in Waikiki.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: { title: 'ワイキキで本物のコナコーヒーを飲める場所', subtitle: '大手チェーンを超えて — カラカウア通りで100%コナを。', date: '2026年5月更新', readTime: '読了6分', badge: 'コーヒーガイド' },
    intro: 'ハワイ島コナ地区で育った世界的に有名なコナコーヒー。観光地で売られている「コナブレンド」の多くは実際には10%しかコナ豆を含まないこともあります。100%コナを味わいたいなら、どこに行くべきかを知ることが重要です。',
    visitCTA: { headline: 'カラカウア通りで100%コナコーヒー', body: 'ホノルルコーヒー経由の100%コナのみ使用。プアオーバー、エスプレッソ、ラテ、お持ち帰り豆も。毎日朝7時〜夜9時。', menuLabel: 'コーヒーメニュー', directionsLabel: '行き方を確認' },
    sections: [
      { h2: 'コナコーヒーが特別な理由', body: 'ハワイ島マウナロアとフアラライ山の火山性土壌、温暖な気候、手摘み収穫が独特の風味を生みます。', bullets: ['火山性土壌で栽培', '完熟豆を手摘み', 'スムースで酸味少なめ', '世界でも高価な部類', '観光地で本物に出会うのは難しい'] },
      { h2: '100%コナとブレンドの見分け方', body: 'ハワイ州法では10%でも「コナブレンド」と表示可能。「100% Kona」表記、または店員に確認することが重要です。', pullout: { title: '100%ルール', body: 'メニューに「100% Kona」とない限り、ブレンドの可能性が高いと考えてください。' } },
      { h2: '当店の抽出方法', body: '複数の方法で味わいの違いを楽しめます。', bullets: ['プアオーバー — 初めての方に', 'エスプレッソ — アフォガート向き', 'アイスアメリカーノ — 暑い日に', 'ラテ・カプチーノ — まろやか', 'コールドブリュー — 自然な甘み'] },
      { h2: 'お土産にも', body: '当店では100%コナの豆を袋売り。お土産に最適です。' },
    ],
    faq: [
      { q: 'ワイキキで100%コナはどこで？', a: 'コナコーヒードーナツ（2142 カラカウア通り）。ホノルルコーヒー経由の100%コナのみ使用。' },
      { q: 'ブレンドとの違いは？', a: 'ブレンドは10%しか本物のコナを含まない場合あり。100%コナははるかに高品質。' },
      { q: 'なぜ高価？', a: '栽培地域が狭く、手摘みで生産量が限られるため。' },
      { q: '豆を持ち帰れますか？', a: 'はい、100%コナ豆を袋売りしています。お土産に最適。' },
      { q: '味は？', a: 'スムース、酸味少なめ、ブラウンシュガー・柑橘・ナッツの香り。' },
    ],
    finalCTA: { headline: 'カラカウア通りで本物のコナを', body: '100%コナ、複数の抽出方法、豆のお持ち帰りも可能。', visitLabel: '今日来店', callLabel: '電話 (808) 304-1808' },
  },
  ko: {
    hero: { title: '와이키키에서 정통 코나커피 마시는 곳', subtitle: '대형 체인을 넘어 — 칼라카우아 거리에서 100% 코나를.', date: '2026년 5월 업데이트', readTime: '6분 분량', badge: '커피 가이드' },
    intro: '하와이 빅아일랜드 코나 지역에서 자란 세계적인 코나커피. 관광지의 "코나 블렌드"는 실제로는 10%만 진짜 코나일 수 있습니다. 100% 코나를 마시려면 정확히 어디로 가야 하는지 알아야 합니다.',
    visitCTA: { headline: '칼라카우아 거리의 100% 코나커피', body: '호놀룰루 커피의 100% 코나만 사용. 푸어오버, 에스프레소, 라테, 원두 판매. 매일 7시–21시.', menuLabel: '커피 메뉴', directionsLabel: '길찾기' },
    sections: [
      { h2: '코나커피가 특별한 이유', body: '화산토양, 손 수확 등이 독특한 풍미를 만듭니다.', bullets: ['화산토양 재배', '손으로 수확', '부드럽고 산미 낮음', '세계적으로 비싼 커피', '관광지에서는 진품 구하기 어려움'] },
      { h2: '100% 코나 vs 블렌드 구분법', body: '하와이 주법은 10%만으로도 "코나 블렌드" 라벨 허용. "100% Kona" 표시 확인 필수.', pullout: { title: '100% 규칙', body: '메뉴에 "100% Kona"가 없으면 블렌드로 간주.' } },
      { h2: '당점의 추출 방식', body: '여러 방식으로 차이를 즐길 수 있습니다.', bullets: ['푸어오버 — 처음 분께 추천', '에스프레소 — 아포가토에 적합', '아이스 아메리카노 — 더운 날', '라테/카푸치노 — 부드러움', '콜드 브루 — 자연스런 단맛'] },
      { h2: '원두로 가져가기', body: '100% 코나 원두 판매 — 하와이 기념품으로 최고.' },
    ],
    faq: [
      { q: '와이키키 어디에서 100% 코나?', a: '코나커피도넛(2142 칼라카우아 거리). 호놀룰루 커피 100% 코나 사용.' },
      { q: '블렌드와 차이?', a: '블렌드는 10%만 코나 함유 가능. 100%는 훨씬 고품질.' },
      { q: '왜 비싼가요?', a: '재배 지역이 좁고 손 수확이라 생산량이 제한적.' },
      { q: '원두 구매 가능?', a: '네, 100% 코나 원두 판매 중.' },
      { q: '맛은?', a: '부드럽고 산미 낮음, 흑설탕·시트러스·견과류 노트.' },
    ],
    finalCTA: { headline: '칼라카우아 거리에서 정통 코나를', body: '100% 코나, 다양한 추출, 원두 판매까지.', visitLabel: '오늘 방문', callLabel: '전화 (808) 304-1808' },
  },
  zh: {
    hero: { title: '威基基哪里能喝到真正的科纳咖啡', subtitle: '超越大型连锁 — 在卡拉考阿大道找到100%科纳。', date: '2026年5月更新', readTime: '6分钟', badge: '咖啡指南' },
    intro: '世界闻名的科纳咖啡产自夏威夷大岛。许多旅游地的"科纳混合咖啡"实际只含10%科纳豆。如果想喝到100%纯科纳，需要知道正确的地方。',
    visitCTA: { headline: '卡拉考阿大道的100%科纳咖啡', body: '通过 Honolulu Coffee 进口的100%科纳豆。手冲、浓缩、拿铁、咖啡豆销售。每天7点–21点。', menuLabel: '咖啡菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '科纳咖啡的特别之处', body: '火山土壤、人工采摘等条件造就独特风味。', bullets: ['火山土壤种植', '人工精选采摘', '顺滑低酸', '全球昂贵咖啡', '旅游区难找正宗'] },
      { h2: '辨别100%科纳与混合咖啡', body: '夏威夷法律允许只含10%科纳豆即可标"科纳混合"。务必确认"100% Kona"标识。', pullout: { title: '100%规则', body: '菜单未注明"100% Kona"很可能是混合。' } },
      { h2: '我们的萃取方式', body: '多种方式品鉴差异。', bullets: ['手冲 — 推荐初次体验', '浓缩 — 适合阿芙佳朵', '冰美式 — 炎热天气', '拿铁/卡布奇诺 — 顺滑', '冷萃 — 自然甜味'] },
      { h2: '带回家', body: '100%科纳豆袋装出售 — 夏威夷最佳伴手礼之一。' },
    ],
    faq: [
      { q: '威基基哪里有100%科纳？', a: 'Kona Coffee Donut（卡拉考阿大道2142号），使用 Honolulu Coffee 100%科纳豆。' },
      { q: '混合和100%的区别？', a: '混合可能只含10%，100%品质高得多。' },
      { q: '为什么那么贵？', a: '产区小、手工采摘、产量有限。' },
      { q: '可以买豆吗？', a: '可以，100%科纳豆袋装出售。' },
      { q: '味道如何？', a: '顺滑低酸，带黑糖、柑橘、坚果香气。' },
    ],
    finalCTA: { headline: '在卡拉考阿品尝真正的科纳', body: '100%科纳、多种萃取、咖啡豆销售。', visitLabel: '立即到店', callLabel: '致电 (808) 304-1808' },
  },
  es: {
    hero: { title: 'Dónde Probar Café Kona Real en Waikiki', subtitle: 'Más allá de las cadenas — 100% Kona en Kalākaua.', date: 'Mayo 2026', readTime: '6 min', badge: 'Guía de Café' },
    intro: 'El famoso café Kona se cultiva en la Isla Grande de Hawái. Muchas tiendas turísticas venden "mezcla Kona" con tan solo 10% de café Kona real. Para probar el auténtico, necesitas saber dónde ir.',
    visitCTA: { headline: 'Café Kona 100% Real en Kalākaua', body: 'Solo café Kona 100% a través de Honolulu Coffee. Pour-over, espresso, lattes, y granos para llevar. 7 AM a 9 PM diariamente.', menuLabel: 'Ver Menú de Café', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: '¿Por qué es especial el Kona?', body: 'Suelo volcánico, recolección manual, sabor único.', bullets: ['Cultivado solo en Kona', 'Recolectado a mano', 'Cuerpo suave, baja acidez', 'Uno de los cafés más caros del mundo'] },
      { h2: '100% Kona vs Mezcla', body: 'La ley permite etiquetar "Mezcla Kona" con solo 10% Kona. Busca "100% Kona" o pregunta.', pullout: { title: 'Regla 100%', body: 'Si no dice "100% Kona", asume que es mezcla.' } },
      { h2: 'Métodos de Preparación', body: 'Disfruta diferentes métodos.', bullets: ['Pour-Over — recomendado para primera vez', 'Espresso', 'Iced Americano', 'Latte / Cappuccino', 'Cold Brew'] },
      { h2: 'Llévalo a Casa', body: 'Vendemos granos 100% Kona — perfecto recuerdo de Hawái.' },
    ],
    faq: [
      { q: '¿Dónde encontrar 100% Kona en Waikiki?', a: 'Kona Coffee Donut, 2142 Kalākaua Ave.' },
      { q: '¿Diferencia con mezcla?', a: 'La mezcla puede tener solo 10% Kona. 100% es mucho mejor calidad.' },
      { q: '¿Por qué es caro?', a: 'Región de cultivo pequeña, cosecha manual, producción limitada.' },
    ],
    finalCTA: { headline: 'Café Kona Real en Kalākaua', body: '100% Kona, múltiples métodos, granos para llevar.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 304-1808' },
  },
};

export default function WhereToTryKonaCoffeePage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
