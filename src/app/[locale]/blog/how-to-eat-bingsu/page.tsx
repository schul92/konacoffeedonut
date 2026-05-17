'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'how-to-eat-bingsu',
  imageSrc: '/images/blog/best-bingsu-waikiki.jpeg',
  imageAlt: 'How to eat bingsu — mixing the toppings into Korean shaved milk ice',
  schemaHeadline: 'How to Eat Bingsu the Right Way (Korean Style)',
  schemaDescription:
    'A step-by-step guide to eating bingsu the way Koreans do — mix the toppings into the snow ice, share with a friend, and savor slowly. Plus where to try authentic bingsu in Waikiki.',
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'How to Eat Bingsu (The Korean Way)',
      subtitle: "Don't scoop from the top — mix it. A 60-second guide to eating bingsu like a Korean, plus where to try it in Waikiki.",
      date: 'Updated May 2026',
      readTime: '4 min read',
      badge: 'Eating Guide',
    },
    intro:
      "You ordered your first bingsu and the bowl arrived looking like a snow mountain — fresh fruit on top, mochi pieces, red bean, condensed milk drizzle, ice cream maybe. Most first-timers grab a spoon and start scooping from the top like a snow cone. That's not how it's done in Korea. Bingsu is meant to be mixed, not scooped — and the difference in flavor is dramatic. Here's the right way, plus where to try authentic Korean bingsu in Waikiki.",
    visitCTA: {
      headline: 'Try Authentic Bingsu at Kona Coffee Donut',
      body:
        "On Kalākaua Avenue, walking distance from Waikiki Beach. Fresh Korean-style bingsu with snow-soft milk ice, generous toppings, and bowls perfect for sharing. Open daily 7 AM to 9 PM.",
      menuLabel: 'See Bingsu Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'Step 1 — Look, Don\'t Touch (Yet)',
        body:
          "When the bingsu arrives, take it in for a moment. The toppings are layered intentionally — the fruit, mochi, and red bean sit on top of the snow ice for visual impact. This is the time for a photo if you're going to take one. Don't dig in yet.",
      },
      {
        h2: 'Step 2 — Mix It All Together',
        body:
          "Grab your spoon and gently fold the toppings into the milk ice from the top. Don't be aggressive — you want to integrate, not destroy. Work in slow circles, lifting the bottom snow up and folding the toppings down. After about 15 seconds of mixing, the bingsu should look more uniform — the fruit, mochi, and red bean distributed throughout, the condensed milk slightly melted into the ice. This is the moment it becomes a complete dessert.",
        pullout: {
          title: 'Why mix?',
          body: 'Eating from the top means your first bites are pure fruit + cream, and your last bites are plain ice. Mixed bingsu means every spoonful has all the layers — and the texture becomes silkier as the ice picks up moisture from the toppings.',
        },
      },
      {
        h2: 'Step 3 — Eat Slowly and Share',
        body:
          "Korean bingsu bowls are designed for two people. Don't try to demolish it solo in 5 minutes — the bowl is big, the ice melts, and the experience is meant to be enjoyed over conversation. Take small spoonfuls, let the bingsu sit on your tongue for a second, taste how the milk ice meets the fruit. Most Korean cafes will give you two spoons by default. If you're solo, eat half and save the rest for 10 minutes later — the slightly melted bingsu hits different.",
        bullets: [
          'Use two spoons if sharing — both people mix and eat simultaneously',
          'Take small bites, not big scoops',
          'Don\'t rush — bingsu is meant to last 15–20 minutes',
          'If it melts too much, the bottom turns into a sweet milk soup — that\'s also delicious, sip it with a straw',
        ],
      },
      {
        h2: 'What NOT to Do',
        body: "These are the rookie mistakes most non-Koreans make on their first bingsu.",
        bullets: [
          "Don't eat only from the top like a snow cone — you'll miss the layered experience",
          "Don't add hot drinks immediately — bingsu is meant to be cold, sip your coffee separately",
          "Don't try to finish a single bingsu alone — they're sized for two; you'll regret it halfway through",
          "Don't ignore the condensed milk pool at the bottom — that's the bonus dessert",
        ],
      },
      {
        h2: 'Best Bingsu Flavors to Start With',
        body:
          "If you're new to bingsu, the easiest entries are mango (universally loved) or strawberry (familiar flavor profile). More adventurous options: injeolmi (toasted soybean powder — Korean classic), matcha (slightly bitter, very satisfying), or patbingsu (the original — sweet red bean).",
        bullets: [
          'Mango Bingsu — best entry point, fruity and tropical',
          'Strawberry Bingsu — familiar, refreshing, photo-friendly',
          'Matcha Bingsu — for matcha lovers',
          'Injeolmi (Soybean) Bingsu — Korean classic, nutty and earthy',
          'Patbingsu — the original red bean style',
        ],
      },
      {
        h2: 'Where to Try Bingsu in Waikiki',
        body:
          "Authentic bingsu spots in Waikiki are limited — most are 10–15 minutes inland in Ala Moana. Kona Coffee Donut on Kalākaua Avenue is the closest walking-distance bingsu cafe to Waikiki Beach, with multiple flavors including mango, matcha, and Hawaiian tropical (pineapple + coconut + mango).",
      },
    ],
    faq: [
      { q: 'How do you eat bingsu the right way?', a: "Mix the toppings into the snow ice with your spoon, then eat slowly with small bites. Don't scoop from the top like a snow cone — Korean bingsu is meant to be mixed so every spoonful has all the layers." },
      { q: 'Do you eat bingsu with a spoon or a straw?', a: "Use a spoon. Once the ice melts toward the end, you can sip the sweet condensed-milk pool at the bottom with a straw, but the main experience is spoon-eating." },
      { q: 'Is bingsu meant to be shared?', a: "Yes — traditional Korean bingsu bowls are sized for two people. Most Korean cafes will give you two spoons by default. Solo eaters typically can't finish a whole bowl in one sitting." },
      { q: 'How long do you take to eat bingsu?', a: "About 15–20 minutes is normal. Bingsu is a slow dessert meant to be enjoyed over conversation — not rushed like a soft serve." },
      { q: 'What do you drink with bingsu?', a: "Most Koreans pair bingsu with iced or hot coffee. The bitterness balances the sweetness. Matcha latte also works beautifully. Don't drink hot tea — it competes with the cold ice." },
      { q: 'Can you eat bingsu in Waikiki?', a: "Yes — Kona Coffee Donut at 2142 Kalākaua Ave serves authentic Korean-style bingsu within walking distance of Waikiki Beach." },
    ],
    finalCTA: {
      headline: 'Practice on a Real Bingsu — On Kalākaua',
      body: "Authentic Korean bingsu with snow-soft milk ice, two spoons, walking distance from Waikiki Beach.",
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: { title: 'ビンスの正しい食べ方（韓国式）', subtitle: '上からすくわず混ぜる。60秒でわかる本場の食べ方とワイキキで食べられる場所。', date: '2026年5月更新', readTime: '読了4分', badge: '食べ方ガイド' },
    intro: '初めてのビンス。雪山のような氷の上に新鮮なフルーツ、餅、あずき、練乳。多くの初心者はかき氷のように上から食べますが、韓国ではそうしません。本記事では本場の食べ方と、ワイキキで本格的なビンスが食べられる場所をご紹介します。',
    visitCTA: { headline: 'コナコーヒードーナツで本場のビンスを', body: 'カラカウア通り、ビーチから徒歩圏内。雪のようなミルク氷と豊富なトッピング、シェアにぴったりのサイズ。毎日朝7時〜夜9時。', menuLabel: 'ビンスメニュー', directionsLabel: '行き方を確認' },
    sections: [
      { h2: 'ステップ1：まず眺める', body: 'ビンスが運ばれてきたら、まずは見て楽しんで。トッピングは見た目重視で配置されています。写真を撮るならこのタイミング。' },
      { h2: 'ステップ2：全体を混ぜる', body: 'スプーンで上のトッピングを氷に優しく折り込みます。激しく混ぜず、ゆっくり円を描くように。15秒ほどで均等に行き渡ります。', pullout: { title: 'なぜ混ぜる？', body: '上だけ食べると最初は果物と生クリーム、最後はただの氷に。混ぜれば全スプーンで全層の味が楽しめます。' } },
      { h2: 'ステップ3：ゆっくり、シェアして食べる', body: '韓国のビンスは2人前サイズ。1人で5分で完食しようとせず、15〜20分かけて楽しむのが本場流。', bullets: ['シェアするなら2本のスプーンで', '一口は小さめに', '15〜20分かけてゆっくり', '溶けたら底のミルクスープも美味しい'] },
      { h2: 'やってはいけないこと', body: '初心者がやりがちなミス。', bullets: ['上だけすくって食べる', 'いきなり熱い飲み物を合わせる', '1人で完食しようとする', '底の練乳プールを残す'] },
      { h2: '初心者におすすめのフレーバー', body: 'まずはマンゴーかいちごから。慣れたら抹茶、インジョルミ（きな粉）、パッピンス（あずき）も。' },
      { h2: 'ワイキキで食べられる場所', body: 'コナコーヒードーナツ（カラカウア通り 2142）がワイキキビーチから徒歩圏内の本場ビンス。' },
    ],
    faq: [
      { q: 'ビンスの正しい食べ方は？', a: 'スプーンでトッピングと氷を混ぜてから食べます。上だけすくうのはNG。' },
      { q: 'スプーン？ストロー？', a: 'スプーンで。溶けてきたら底のミルクをストローで楽しむのもアリ。' },
      { q: 'シェアするもの？', a: 'はい、2人前サイズです。' },
      { q: '何分かける？', a: '15〜20分が理想。' },
      { q: 'ワイキキでビンス？', a: 'コナコーヒードーナツ（カラカウア通り 2142）で。' },
    ],
    finalCTA: { headline: '本場のビンスをカラカウアで', body: 'ビーチから徒歩圏内、毎日営業。', visitLabel: '今日来店', callLabel: '電話 (808) 304-1808' },
  },
  ko: {
    hero: { title: '빙수 제대로 먹는 법', subtitle: '위에서 떠 먹지 말고 비벼 먹으세요. 60초 만에 배우는 정통 빙수 먹는 법 + 와이키키에서 즐기는 곳.', date: '2026년 5월', readTime: '4분 분량', badge: '먹는 법 가이드' },
    intro: '처음 빙수를 주문하면 눈산 같은 얼음 위에 신선한 과일, 떡, 팥, 연유가 올라옵니다. 외국인들은 셰이브드 아이스처럼 위에서 떠 먹는 경우가 많지만, 한국에서는 그렇게 먹지 않습니다. 본 글에서 제대로 먹는 법과 와이키키 정통 빙수집을 알려드립니다.',
    visitCTA: { headline: '코나커피도넛에서 정통 빙수를', body: '칼라카우아 거리, 와이키키 비치에서 도보 거리. 부드러운 우유 얼음, 푸짐한 토핑. 매일 7시–21시.', menuLabel: '빙수 메뉴', directionsLabel: '길찾기' },
    sections: [
      { h2: '1단계 — 먼저 눈으로 즐기기', body: '빙수가 나오면 잠시 감상하세요. 토핑은 시각적으로 예쁘게 배치되어 있어 사진 찍기 좋습니다.' },
      { h2: '2단계 — 비비기', body: '스푼으로 토핑과 얼음을 부드럽게 섞으세요. 15초 정도 천천히 비비면 균등해집니다.', pullout: { title: '왜 비비나요?', body: '위에서만 먹으면 처음엔 과일, 끝엔 얼음만. 비비면 매 스푼마다 모든 층의 맛.' } },
      { h2: '3단계 — 천천히 나눠 먹기', body: '한국 빙수는 2인용 사이즈. 15–20분에 걸쳐 즐기세요.', bullets: ['스푼 2개로 나눠 먹기', '작은 한 입씩', '15–20분에 천천히', '녹은 우유는 빨대로 마시기'] },
      { h2: '하지 말아야 할 것', body: '초보자가 자주 하는 실수.', bullets: ['위에서만 떠 먹기', '뜨거운 차와 함께 마시기', '혼자 다 먹으려 하기', '바닥 연유 남기기'] },
      { h2: '추천 입문 메뉴', body: '망고나 딸기로 시작하세요. 익숙해지면 말차, 인절미, 팥빙수도.' },
      { h2: '와이키키에서 즐기는 곳', body: '코나커피도넛(2142 칼라카우아)이 와이키키 비치 도보 거리.' },
    ],
    faq: [
      { q: '빙수 어떻게 먹나요?', a: '스푼으로 비벼서 드세요. 위에서만 떠먹지 마세요.' },
      { q: '스푼? 빨대?', a: '스푼으로. 마지막에 녹은 우유는 빨대로.' },
      { q: '나눠 먹어야 하나요?', a: '네, 2인 사이즈입니다.' },
      { q: '얼마나 걸려요?', a: '15–20분이 적당합니다.' },
      { q: '와이키키 어디서?', a: '코나커피도넛(2142 칼라카우아).' },
    ],
    finalCTA: { headline: '칼라카우아에서 정통 빙수를', body: '비치 도보 거리, 매일 영업.', visitLabel: '오늘 방문', callLabel: '전화 (808) 304-1808' },
  },
  zh: {
    hero: { title: '雪冰的正确吃法（韩国式）', subtitle: '不要从上面挖 — 要拌匀。60秒学会正宗雪冰吃法，加上威基基品尝指南。', date: '2026年5月', readTime: '4分钟', badge: '吃法指南' },
    intro: '第一次点雪冰，碗里像座雪山，上面铺着新鲜水果、年糕、红豆、炼乳。许多人像吃刨冰一样从上往下挖，但韩国不这样吃。本文教您正确吃法和威基基的雪冰店。',
    visitCTA: { headline: '在 Kona Coffee Donut 享用正宗雪冰', body: '位于卡拉考阿大道，距威基基海滩仅几步之遥。绵密牛奶冰，丰富配料。每天7点–21点。', menuLabel: '雪冰菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '第一步 — 先用眼睛欣赏', body: '雪冰上桌时先欣赏。配料是精心摆放的，适合拍照。' },
      { h2: '第二步 — 拌匀', body: '用勺子将配料轻轻拌入雪冰中。15秒慢慢搅拌即可。', pullout: { title: '为什么要拌？', body: '只吃上面，开始是水果，最后是冰。拌匀后每一勺都有所有层次。' } },
      { h2: '第三步 — 慢慢享用、分享', body: '韩国雪冰是两人份。15–20分钟慢慢吃。', bullets: ['两人分享用两根勺子', '小口享用', '15–20分钟', '底部炼乳可用吸管喝'] },
      { h2: '不要做的事', body: '常见新手错误。', bullets: ['只从上面挖', '搭配热饮', '一人吃完整碗', '剩下底部炼乳'] },
      { h2: '入门推荐口味', body: '芒果或草莓最易接受。喜欢冒险可选抹茶、黄豆粉年糕、红豆。' },
      { h2: '威基基哪里能吃到', body: 'Kona Coffee Donut（卡拉考阿大道2142号）距威基基海滩步行可达。' },
    ],
    faq: [
      { q: '雪冰怎么吃？', a: '用勺子拌匀配料和冰，不要只从上面挖。' },
      { q: '用勺子还是吸管？', a: '用勺子。融化后底部炼乳可用吸管喝。' },
      { q: '要分享吃吗？', a: '是的，是两人份。' },
      { q: '吃多久？', a: '15–20分钟为佳。' },
      { q: '威基基哪里？', a: 'Kona Coffee Donut（卡拉考阿2142号）。' },
    ],
    finalCTA: { headline: '在卡拉考阿享受正宗雪冰', body: '距海滩步行可达，每日营业。', visitLabel: '立即到店', callLabel: '致电 (808) 304-1808' },
  },
  es: {
    hero: { title: 'Cómo Comer Bingsu (Al Estilo Coreano)', subtitle: 'No cucharees desde arriba — mezcla. Guía de 60 segundos al estilo coreano.', date: 'Mayo 2026', readTime: '4 min', badge: 'Guía de Consumo' },
    intro: 'Pediste tu primer bingsu y llegó como una montaña de nieve con fruta fresca, mochi, frijol rojo y leche condensada. La mayoría lo come desde arriba como un raspado, pero en Corea no se hace así.',
    visitCTA: { headline: 'Prueba Bingsu Auténtico en Kona Coffee Donut', body: 'Kalākaua Avenue, a pasos de la playa. 7 AM a 9 PM.', menuLabel: 'Ver Menú', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Paso 1 — Observa Primero', body: 'Cuando llegue, observa por un momento. Los toppings están dispuestos para la foto.' },
      { h2: 'Paso 2 — Mezcla', body: 'Con la cuchara, mezcla suavemente los toppings con el hielo. 15 segundos en círculos suaves.', pullout: { title: '¿Por qué mezclar?', body: 'Desde arriba comes solo fruta al inicio, hielo al final. Mezclado, cada cucharada tiene todas las capas.' } },
      { h2: 'Paso 3 — Come Despacio y Comparte', body: 'Bingsu coreano es para dos personas. Disfruta 15–20 minutos.' },
      { h2: 'Qué NO Hacer', body: 'Errores comunes.', bullets: ['Comer solo desde arriba', 'Combinar con bebidas calientes', 'Intentar terminar solo'] },
      { h2: 'Mejores Sabores para Empezar', body: 'Mango o fresa son buenos puntos de entrada.' },
    ],
    faq: [
      { q: '¿Cómo se come bingsu?', a: 'Mezcla los toppings con el hielo, luego come despacio.' },
      { q: '¿Se comparte?', a: 'Sí, es para dos personas.' },
      { q: '¿Dónde en Waikiki?', a: 'Kona Coffee Donut, 2142 Kalākaua Ave.' },
    ],
    finalCTA: { headline: 'Practica con un Bingsu Real', body: '2142 Kalākaua Ave, a pasos de la playa.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 304-1808' },
  },
};

export default function HowToEatBingsuPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
