'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'malasada-vs-mochi-donut-waikiki',
  imageSrc: '/images/blog/malasada-vs-mochi-donut-waikiki.jpeg',
  imageAlt: 'Malasadas and mochi donuts side by side at Kona Coffee Donut Waikiki',
  schemaHeadline: 'Malasada vs Mochi Donut in Waikiki: Which Should You Try First?',
  schemaDescription:
    'A side-by-side guide to malasadas and mochi donuts in Waikiki — the difference in flavor and texture, and where to try both at Kona Coffee Donut on Kalākaua Avenue.',
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Malasada vs Mochi Donut',
      subtitle: 'Hawaii\'s two most-loved donuts compared — and where to try both on Kalākaua Avenue.',
      date: 'Updated May 2026',
      readTime: '5 min read',
      badge: 'Comparison Guide',
    },
    intro:
      "Visiting Hawaii and you have time for one donut stop? You'll see two options dominating Waikiki: malasadas (Portuguese-style sugar-dusted fried dough) and mochi donuts (Japanese-Hawaiian chewy ring donuts). They're completely different desserts despite both being called \"donuts.\" This guide compares them side by side — flavor, texture, when to eat each, and where to get both without making two stops.",
    visitCTA: {
      headline: 'Try Both at Kona Coffee Donut',
      body:
        "On Kalākaua Avenue, we serve both fresh malasadas and pon-de-ring mochi donuts under one roof. Compare them side by side, pair with Honolulu Coffee, and walk back to Waikiki Beach. Open daily 7 AM to 9 PM.",
      menuLabel: 'See Donut Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'Quick Comparison: At a Glance',
        body: "Here's the cheat sheet if you're picking between the two for the first time.",
        bullets: [
          'Malasada — Portuguese, wheat flour, fried, dusted in sugar, eaten warm and fresh',
          'Mochi Donut — Japanese-Hawaiian, rice flour, fried, glazed in colors, chewy texture',
          'Malasada texture: pillowy, soft, melt-in-mouth',
          'Mochi donut texture: chewy, slightly bouncy, slight crunch on outside',
          'Malasada flavor: mostly sugar + dough, sometimes filled (haupia, custard)',
          'Mochi donut flavor: dramatic glazes (ube, matcha, chocolate, strawberry)',
        ],
      },
      {
        h2: 'The Malasada — Hawaii\'s Portuguese Tradition',
        body:
          "Malasadas came to Hawaii in the 1800s with Portuguese sugar plantation workers. They've been a Hawaii tradition ever since, especially around Mardi Gras (Fat Tuesday) when families traditionally fried up batches before Lent. A great malasada has a golden crust, an airy and pillowy interior, and a generous coating of granulated sugar. Best eaten fresh and warm — within 30 minutes of frying is ideal. Filled versions (haupia coconut cream, custard, dobash chocolate) became popular in modern bakeries.",
        pullout: {
          title: 'Best with',
          body: 'Coffee. The bitterness of a hot Kona pour-over balances the sweet sugar coating perfectly.',
        },
      },
      {
        h2: 'The Mochi Donut — Japanese-Hawaiian Innovation',
        body:
          "Mochi donuts are a much newer creation, born from the fusion of Japanese mochi-making technique and American donut culture. Made with glutinous rice flour (mochiko) instead of wheat, they have a distinctively chewy, slightly bouncy texture — closer to mochi than to bread. The pon-de-ring shape (8 connected balls in a circle) is fun and Instagram-friendly. Glazes are dramatic and colorful: ube purple, matcha green, strawberry pink. Mochi donuts hold up better than malasadas — they're still good 24 hours later in a sealed container.",
        pullout: {
          title: 'Best with',
          body: 'Iced latte, smoothies, or matcha. The chewy texture and bright glazes pair well with cold drinks.',
        },
      },
      {
        h2: 'Which Should You Try First?',
        body:
          "Honest answer: both, ideally on the same visit. They're different enough that comparing them tells you a lot about Hawaiian dessert culture. If you absolutely must pick one for your first try, consider:",
        bullets: [
          'Want a traditional, must-do Hawaii experience? → Malasada',
          'Want something modern, photogenic, and chewy? → Mochi Donut',
          'Want to taste real Hawaiian flavors (ube, taro, etc.)? → Mochi Donut',
          'Want the simplest, most universally loved donut? → Malasada',
          'Want to bring some back to your hotel for tomorrow? → Mochi Donut (holds up better)',
        ],
      },
      {
        h2: 'Where to Get Both Without Two Stops',
        body:
          "Most Waikiki spots specialize in one or the other. Leonard's Bakery (a 10-minute drive on Kapahulu) is the iconic malasada destination. For mochi donuts in Waikiki specifically, Kona Coffee Donut on Kalākaua Avenue is the only spot that hand-makes them daily. We also serve malasadas — so you can try both side by side in one visit, walking distance from Waikiki Beach.",
      },
    ],
    faq: [
      { q: 'What is the difference between malasada and mochi donut?', a: 'Malasadas are Portuguese-style fried dough made with wheat flour, dusted in sugar, with a soft pillowy texture. Mochi donuts are Japanese-Hawaiian fusion made with glutinous rice flour, ring-shaped, with a chewy bouncy texture and colorful glazes.' },
      { q: 'Which is better, malasada or mochi donut?', a: 'They\'re different desserts — neither is "better." Malasadas are the traditional Hawaii experience. Mochi donuts are the modern, photogenic, chewy alternative. Try both if you can.' },
      { q: 'Where can I get both malasadas and mochi donuts in Waikiki?', a: 'Kona Coffee Donut at 2142 Kalākaua Ave serves both fresh daily — the only walking-distance spot in central Waikiki for both. Open 7 AM to 9 PM.' },
      { q: 'Are malasadas Hawaiian or Portuguese?', a: 'Both. Malasadas originated in Portugal (specifically the Azores) but became a Hawaiian tradition after Portuguese sugar plantation workers brought them to the islands in the 1800s.' },
      { q: 'Are mochi donuts gluten-free?', a: 'Mochi donuts are made with glutinous rice flour, which is naturally gluten-free. However, recipes may include small amounts of wheat flour. Ask staff for the current ingredient list.' },
      { q: 'Which donut holds up better as a takeaway?', a: 'Mochi donuts hold up better — they\'re still good 24 hours later in a sealed container. Malasadas are best eaten within 30 minutes of frying for the best texture.' },
    ],
    finalCTA: {
      headline: 'Try Both — In One Stop on Kalākaua',
      body: 'Fresh malasadas and pon-de-ring mochi donuts under one roof, paired with Honolulu Coffee.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: { title: 'マラサダ vs モチドーナツ', subtitle: 'ハワイで愛される2大ドーナツを徹底比較。', date: '2026年5月更新', readTime: '読了5分', badge: '比較ガイド' },
    intro: 'ワイキキで滞在中、マラサダとモチドーナツのどちらを選ぶべきか迷う方へ。同じ「ドーナツ」と呼ばれていても、まったく別物。本記事ではフレーバー・食感・どこで食べるかを比較します。',
    visitCTA: { headline: '両方コナコーヒードーナツで', body: 'カラカウア通りで、揚げたてマラサダと手作りモチドーナツを同時に楽しめます。ホノルルコーヒーともペアリング可能。毎日朝7時〜夜9時。', menuLabel: 'ドーナツメニュー', directionsLabel: '行き方を確認' },
    sections: [
      { h2: '一目でわかる違い', body: '初めての方向けの早見表。', bullets: ['マラサダ — ポルトガル系、小麦粉、砂糖まぶし、ふわふわ', 'モチドーナツ — 日本×ハワイ、もち米粉、もちもち、グレーズ', 'マラサダの食感：ふわふわで口でとろける', 'モチドーナツの食感：もちもちで弾力あり', 'マラサダの味：シンプルな砂糖、フィリング入りも', 'モチドーナツの味：ウベ・抹茶・チョコなど多彩'] },
      { h2: 'マラサダ — ポルトガル発祥のハワイ伝統', body: '19世紀にポルトガル系移民が持ち込んだ伝統。揚げたて30分以内が一番美味しい。', pullout: { title: '相性◎', body: 'コーヒー。ホットコナとの相性は抜群です。' } },
      { h2: 'モチドーナツ — 日本×ハワイの新時代', body: 'もち米粉のもちもち食感、ポンデリングの8つ玉、鮮やかなグレーズ。24時間後でも美味しい。', pullout: { title: '相性◎', body: 'アイスラテ、スムージー、抹茶など冷たいドリンク。' } },
      { h2: 'どちらを先に試すべき？', body: '理想は両方。1つだけ選ぶなら：', bullets: ['伝統的なハワイ体験 → マラサダ', '映える×もちもち → モチドーナツ', 'ハワイらしい独特の味 → モチドーナツ（ウベ等）', 'シンプル＆万人向け → マラサダ', '翌日も楽しみたい → モチドーナツ'] },
      { h2: '両方食べられる場所', body: 'コナコーヒードーナツ（カラカウア通り 2142）なら、両方を一度に楽しめます。徒歩でビーチからすぐ。' },
    ],
    faq: [
      { q: 'マラサダとモチドーナツの違いは？', a: 'マラサダはポルトガル系で小麦粉ふわふわ、モチドーナツは日本×ハワイのもち米粉でもちもち。' },
      { q: 'どちらが美味しい？', a: '別物です。両方試すのがおすすめ。' },
      { q: '両方食べられるお店は？', a: 'コナコーヒードーナツ（カラカウア通り）。' },
      { q: 'マラサダはハワイ料理？', a: 'ポルトガル発祥ですがハワイで定着。' },
      { q: 'モチドーナツは持ち帰り可？', a: 'はい、24時間以内なら美味しさキープ。' },
    ],
    finalCTA: { headline: '一度の来店で両方', body: 'カラカウア通り 2142、ワイキキ中心部。', visitLabel: '今日来店', callLabel: '電話 (808) 304-1808' },
  },
  ko: {
    hero: { title: '말라사다 vs 모치도넛', subtitle: '하와이의 두 명물 도넛 비교.', date: '2026년 5월', readTime: '5분 분량', badge: '비교 가이드' },
    intro: '하와이 여행 중 말라사다와 모치도넛 중 무엇을 먹을지 고민이라면. 둘 다 도넛이라 부르지만 완전히 다른 디저트입니다.',
    visitCTA: { headline: '코나커피도넛에서 둘 다', body: '칼라카우아 거리, 말라사다와 모치도넛을 한 자리에서. 매일 7시–21시.', menuLabel: '도넛 메뉴', directionsLabel: '길찾기' },
    sections: [
      { h2: '한눈에 보는 차이', body: '처음이라면 참고하세요.', bullets: ['말라사다 — 포르투갈식, 밀가루, 설탕, 폭신', '모치도넛 — 일본·하와이, 찹쌀가루, 쫀득, 컬러풀 글레이즈', '말라사다 식감: 폭신', '모치도넛 식감: 쫀득', '말라사다 맛: 심플한 설탕', '모치도넛 맛: 우베·말차·딸기 등'] },
      { h2: '말라사다 — 하와이의 포르투갈 전통', body: '1800년대 포르투갈 이민자가 들여온 전통. 갓 튀긴 30분 이내가 최고.', pullout: { title: '잘 어울리는 음료', body: '핫 코나커피.' } },
      { h2: '모치도넛 — 일본·하와이 융합', body: '찹쌀가루의 쫀득함, 폰데링 8개 공, 화려한 글레이즈. 24시간 후에도 OK.', pullout: { title: '잘 어울리는 음료', body: '아이스 라테, 스무디, 말차.' } },
      { h2: '무엇을 먼저 먹을까?', body: '둘 다 추천. 하나만 고른다면:', bullets: ['하와이 전통 → 말라사다', '인스타·쫀득 → 모치도넛', '하와이 풍미 → 모치도넛(우베)', '심플 → 말라사다'] },
      { h2: '두 가지 모두 파는 곳', body: '코나커피도넛(2142 칼라카우아)이 도보 거리에서 둘 다 제공.' },
    ],
    faq: [
      { q: '둘의 차이는?', a: '말라사다는 밀가루·폭신, 모치도넛은 찹쌀·쫀득.' },
      { q: '어느게 더 맛있나요?', a: '서로 다른 디저트. 가능하면 둘 다 시도하세요.' },
      { q: '둘 다 파는 곳은?', a: '코나커피도넛(칼라카우아 2142).' },
      { q: '말라사다는 하와이 음식?', a: '포르투갈에서 왔지만 하와이에 정착.' },
    ],
    finalCTA: { headline: '한 번에 둘 다', body: '와이키키 중심부 2142 칼라카우아.', visitLabel: '오늘 방문', callLabel: '전화 (808) 304-1808' },
  },
  zh: {
    hero: { title: '玛拉萨达 vs 麻糬甜甜圈', subtitle: '夏威夷两大甜甜圈对比。', date: '2026年5月', readTime: '5分钟', badge: '比较指南' },
    intro: '在威基基不知道选哪个甜甜圈？玛拉萨达和麻糬甜甜圈虽然都叫"donut"，但完全是两种甜点。',
    visitCTA: { headline: 'Kona Coffee Donut 同时供应两种', body: '卡拉考阿大道，新鲜玛拉萨达与手作麻糬甜甜圈一站式。每天7点–21点。', menuLabel: '甜甜圈菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '一图对比', body: '快速参考。', bullets: ['玛拉萨达 — 葡萄牙式、小麦粉、糖粉、蓬松', '麻糬甜甜圈 — 日式×夏威夷、糯米粉、Q弹、彩色釉', '玛拉萨达口感：松软如云', '麻糬甜甜圈口感：Q弹有嚼劲', '玛拉萨达味道：简单糖香', '麻糬甜甜圈味道：紫薯、抹茶、巧克力等多彩'] },
      { h2: '玛拉萨达 — 夏威夷的葡萄牙传统', body: '19世纪葡萄牙移民引入。现做30分钟内最美味。', pullout: { title: '最佳搭配', body: '科纳热咖啡。' } },
      { h2: '麻糬甜甜圈 — 日式·夏威夷创新', body: '糯米粉Q弹，波堤8颗形，鲜艳釉色。24小时后仍美味。', pullout: { title: '最佳搭配', body: '冰拿铁、奶昔、抹茶。' } },
      { h2: '应该先尝哪个？', body: '理想是两个都尝。只能选一个：', bullets: ['传统体验 → 玛拉萨达', '上镜+Q弹 → 麻糬甜甜圈', '夏威夷风味 → 麻糬（紫薯）', '简单普世 → 玛拉萨达'] },
      { h2: '一站式品尝两种', body: 'Kona Coffee Donut（2142 卡拉考阿）是威基基中心唯一同时供应两种的店。' },
    ],
    faq: [
      { q: '两者区别？', a: '玛拉萨达小麦粉松软，麻糬甜甜圈糯米粉Q弹。' },
      { q: '哪个更好吃？', a: '两种不同的甜点，建议都尝。' },
      { q: '哪里能同时买到？', a: 'Kona Coffee Donut（卡拉考阿2142）。' },
    ],
    finalCTA: { headline: '一站式两种甜甜圈', body: '威基基中心 2142 卡拉考阿。', visitLabel: '立即到店', callLabel: '致电 (808) 304-1808' },
  },
  es: {
    hero: { title: 'Malasada vs Mochi Donut', subtitle: 'Los dos donuts más famosos de Hawái comparados.', date: 'Mayo 2026', readTime: '5 min', badge: 'Guía Comparativa' },
    intro: '¿Visitas Waikiki y dudas entre malasadas y mochi donuts? Ambos se llaman "donut" pero son postres muy diferentes.',
    visitCTA: { headline: 'Prueba Ambos en Kona Coffee Donut', body: 'Kalākaua Avenue. Malasadas frescas y mochi donuts pon-de-ring bajo el mismo techo. 7 AM a 9 PM.', menuLabel: 'Ver Menú', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Comparación Rápida', body: 'Vista general.', bullets: ['Malasada — portuguesa, harina de trigo, azúcar, esponjosa', 'Mochi Donut — japonesa-hawaiana, harina de arroz, masticable, glaseados coloridos'] },
      { h2: 'Malasada — Tradición Portuguesa de Hawái', body: 'Llegada con inmigrantes portugueses en el siglo XIX. Mejor recién hecha.' },
      { h2: 'Mochi Donut — Innovación Japonesa-Hawaiana', body: 'Harina de arroz da textura única. Forma pon-de-ring (8 bolas).' },
      { h2: '¿Cuál Probar Primero?', body: 'Idealmente ambos. Si solo uno: malasada para tradición, mochi donut para textura única.' },
    ],
    faq: [
      { q: '¿Diferencia?', a: 'Malasada es trigo y esponjosa; mochi donut es arroz glutinoso y masticable.' },
      { q: '¿Cuál es mejor?', a: 'Distintos postres. Prueba ambos.' },
      { q: '¿Dónde encuentro ambos?', a: 'Kona Coffee Donut, 2142 Kalākaua Ave.' },
    ],
    finalCTA: { headline: 'Prueba Ambos en Una Visita', body: '2142 Kalākaua Ave, Waikiki.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 304-1808' },
  },
};

export default function MalasadaVsMochiPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
