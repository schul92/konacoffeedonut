'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

// Prices checked against the Clover POS on 2026-11-17:
// mochi 1pc 3.95 / 3pc 11.25 / 6pc 22.50 / 12pc 45.00; classic malasada dozen 45.00, cream dozen 57.00;
// Kona Coffee 7.00, Kona Cold Brew 6.95, House Coffee 5.00.
const config = {
  slug: 'mochi-donut-box-waikiki',
  imageSrc: '/images/blog/mochi-donut-box-waikiki.jpeg',
  imageAlt: 'An open box of twelve mochi donuts in mixed flavors, seen from above, at Kona Coffee Donut in Waikiki',
  schemaHeadline: 'Mochi Donut Box in Waikiki: 3, 6 or 12 (From $11.25)',
  schemaDescription:
    'Mochi donut box sizes and prices at Kona Coffee Donut in Waikiki: 3 for $11.25, 6 for $22.50, 12 for $45.00, any mix of 24 flavors. How many to get for a group and how to order ahead. 2142 Kalākaua Ave, open 7 AM to 9 PM.',
  datePublished: '2026-11-17',
  related: [
    {
      path: '/blog/mochi-donut-flavors-waikiki',
      label: { en: 'Every mochi donut flavor, explained', ja: 'モチドーナツ全フレーバー', ko: '모찌도넛 전 메뉴 맛 설명', zh: '麻糬甜甜圈全口味', es: 'Todos los sabores de mochi donut' },
    },
    {
      path: '/blog/best-mochi-donuts-waikiki',
      label: { en: 'Best mochi donuts in Waikiki', ja: 'ワイキキのおすすめモチドーナツ', ko: '와이키키 모찌도넛 추천', zh: '威基基最佳麻糬甜甜圈', es: 'Mejores mochi donuts en Waikiki' },
    },
    {
      path: '/blog/hawaii-omiyage-treats',
      label: { en: 'What to bring home from Hawaii', ja: 'ハワイのお土産ガイド', ko: '하와이 기념품 가이드', zh: '夏威夷伴手礼指南', es: 'Qué llevar de Hawái' },
    },
    { path: '/blog/malasada-vs-donut', label: { en: 'Malasada vs donut: what is the difference?', ja: 'マラサダとドーナツの違い', ko: '말라사다 vs 도넛 차이', zh: '马拉萨达和甜甜圈的区别', es: 'Malasada vs donut: la diferencia' } },
  ],
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Mochi Donut Boxes in Waikiki: 3, 6 or a Dozen',
      subtitle: 'What each box costs, how many to get for your group and how to fill it — on Kalākaua Avenue.',
      date: 'Published November 2026',
      readTime: '4 min read',
      badge: 'Ordering Guide',
    },
    intro:
      'One mochi donut is a snack. A box is how most people actually want to eat them: a few flavors on the table, everyone tearing off a piece of each. At Kona Coffee Donut on Kalākaua Avenue the boxes come in three sizes — 3 for $11.25, 6 for $22.50 and 12 for $45.00 — and you can fill any of them with whatever mix of our 24 flavors is in the case. This guide covers what each size costs per donut, how many to get for a couple, a family or an office, and how to order ahead.',
    visitCTA: {
      headline: 'Boxes From $11.25',
      body: '3 for $11.25, 6 for $22.50, 12 for $45.00 — any mix of flavors. 2142 Kalākaua Ave, about 5 minutes from Waikiki Beach, open 7 AM to 9 PM daily.',
      menuLabel: 'See All 24 Flavors',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'Box Sizes and Prices',
        body: 'Every price below is from our register this month. A single mochi donut is $3.95; in any box it works out to $3.75.',
        bullets: [
          'Box of 3 — $11.25 ($3.75 each)',
          'Box of 6 — $22.50 ($3.75 each)',
          'Box of 12 — $45.00 ($3.75 each)',
          'Single donut — $3.95',
        ],
        pullout: {
          title: 'The short version',
          body: 'Two people: box of 3. A family or a hotel room: box of 6. An office, a party or a big group: the dozen.',
        },
      },
      {
        h2: 'How Many Should You Get?',
        body:
          'A mochi donut is a ring of eight small balls, so it is built for pulling apart and sharing. As a rough guide, plan one to two donuts per person:',
        bullets: [
          '1–2 people: a box of 3 lets you try three flavors',
          '3–4 people or one family: a box of 6',
          '6 or more people, an office or a birthday: a box of 12',
          'Bigger group: two dozen gives you every flavor in the case',
        ],
      },
      {
        h2: 'How to Fill a Mixed Box',
        body:
          'You pick every donut, so a good box has contrast. One easy way is to take something from each group:',
        bullets: [
          'Chocolate and nutty: Dark Chocolate, Nutella, Cookies & Creme, Peanut Butter, Pistachio',
          'Fruity: Strawberry, Mango, Yuzu, Blueberry, Guava Pineapple, Banana',
          'Island and Asian flavors: Ube, Matcha, Black Sesame, Taro, Injeolmi, Milk Tea, Coconut',
          'Simple and kid-friendly: Plain, Churro, Ube Churro, Yogurt Pebble',
        ],
        pullout: {
          title: 'Come early for the full case',
          body: 'Everything is made in-house every morning. The widest choice of flavors is earlier in the day.',
        },
      },
      {
        h2: 'Ordering Ahead',
        body:
          'You can walk in and point at the case, or use the Order Online button on our site to pay ahead for a 3, 6 or 12 pack and pick it up at the counter. Mochi donuts taste best the day they are made, so buy the box the same day you plan to eat it — for the hotel that evening, the beach, or the morning of your flight.',
      },
      {
        h2: 'Add Coffee or Malasadas',
        body:
          'A box and a round of coffee is the easiest group breakfast in Waikiki: Kona Coffee is $7.00, Kona Cold Brew $6.95 and House Coffee $5.00. Malasadas come by the dozen too — classic for $45.00, cream-filled for $57.00.',
      },
    ],
    faq: [
      {
        q: 'How much is a box of mochi donuts in Waikiki?',
        a: 'At Kona Coffee Donut, 2142 Kalākaua Ave, a box of 3 mochi donuts is $11.25, a box of 6 is $22.50 and a box of 12 is $45.00. A single donut is $3.95.',
      },
      {
        q: 'Can I mix flavors in one box?',
        a: 'Yes. Every box at Kona Coffee Donut can be filled with any mix of the 24 mochi donut flavors available in the case that day.',
      },
      {
        q: 'How many mochi donuts should I order for a group?',
        a: 'Plan one to two per person. A box of 6 ($22.50) suits three or four people; a dozen ($45.00) suits six or more.',
      },
      {
        q: 'Can I order a mochi donut box ahead for pickup?',
        a: 'Yes. Kona Coffee Donut takes online orders for 3, 6 and 12 packs of mochi donuts for pickup at 2142 Kalākaua Ave, open 7 AM to 9 PM daily.',
      },
      {
        q: 'Do mochi donuts keep until the next day?',
        a: 'They are made in-house every morning and taste best the same day, so buy the box on the day you plan to eat it.',
      },
      {
        q: 'Where can I buy a dozen donuts near Waikiki Beach?',
        a: 'Kona Coffee Donut at 2142 Kalākaua Ave is about a 5-minute walk from Waikiki Beach and sells mochi donuts by the dozen for $45.00 and malasadas by the dozen from $45.00, 7 AM to 9 PM daily.',
      },
    ],
    finalCTA: {
      headline: 'Pick Up a Box on Kalākaua',
      body: '3 for $11.25, 6 for $22.50, 12 for $45.00. Open 7 AM – 9 PM daily.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 260-1835',
    },
  },
  ja: {
    hero: { title: 'ワイキキのモチドーナツボックス：3個・6個・12個', subtitle: 'ボックスの値段、人数別の選び方、フレーバーの組み合わせ方。カラカウア通りで。', date: '2026年11月公開', readTime: '読了4分', badge: '注文ガイド' },
    intro: 'モチドーナツは、いくつかの味をみんなでちぎって分けるのがいちばんおいしい食べ方です。カラカウア通りのKona Coffee Donutでは、3個$11.25、6個$22.50、12個$45.00のボックスがあり、ケースに並ぶ24種類から自由に組み合わせられます。',
    visitCTA: { headline: 'ボックス $11.25〜', body: '3個$11.25、6個$22.50、12個$45.00。フレーバーは自由に組み合わせ。ワイキキビーチから徒歩約5分、毎日朝7時〜夜9時。', menuLabel: '全24種類を見る', directionsLabel: '行き方を確認' },
    sections: [
      { h2: 'ボックスのサイズと価格', body: '今月のレジ価格です。単品は$3.95、ボックスなら1個あたり$3.75です。', bullets: ['3個入り $11.25', '6個入り $22.50', '12個入り $45.00', '単品 $3.95'] },
      { h2: '何個買えばいい？', body: '目安は1人1〜2個です。', bullets: ['1〜2人：3個入り', '3〜4人・ご家族：6個入り', '6人以上・職場やお祝い：12個入り'] },
      { h2: '事前注文', body: '店頭でケースから選ぶか、サイトの「Order Online」から3個・6個・12個パックを事前に注文してカウンターで受け取れます。毎朝店内で作っており、当日中がいちばんおいしいので、食べる日にお買い求めください。' },
      { h2: 'コーヒーやマラサダと一緒に', body: 'Kona Coffee $7.00、Kona Cold Brew $6.95、House Coffee $5.00。マラサダも12個入りがあります（クラシック$45.00、クリーム$57.00）。' },
    ],
    faq: [
      { q: 'ワイキキでモチドーナツのボックスはいくらですか？', a: 'Kona Coffee Donut（2142 Kalākaua Ave）では3個$11.25、6個$22.50、12個$45.00です。単品は$3.95です。' },
      { q: '1つのボックスで味を組み合わせられますか？', a: 'はい。その日ケースにある24種類のフレーバーから自由に選べます。' },
      { q: '事前に注文して受け取れますか？', a: 'はい。オンラインで3個・6個・12個パックを注文し、店頭で受け取れます。毎日朝7時〜夜9時。' },
      { q: '翌日まで持ちますか？', a: '毎朝店内で作っており、当日中がいちばんおいしいです。食べる日にお買い求めください。' },
    ],
    finalCTA: { headline: 'ボックスはカラカウア通りで', body: '3個$11.25、6個$22.50、12個$45.00。毎日朝7時〜夜9時。', visitLabel: '今日来店', callLabel: '電話 (808) 260-1835' },
  },
  ko: {
    hero: { title: '와이키키 모찌도넛 박스: 3개·6개·12개', subtitle: '박스 가격, 인원별 추천, 맛 고르는 법. 칼라카우아 거리에서.', date: '2026년 11월 발행', readTime: '4분 분량', badge: '주문 가이드' },
    intro: '모찌도넛은 여러 맛을 놓고 조금씩 떼어 나눠 먹을 때 가장 맛있습니다. 칼라카우아 거리 Kona Coffee Donut에서는 3개 $11.25, 6개 $22.50, 12개 $45.00 박스를 판매하고, 진열대에 있는 24가지 맛 중에서 자유롭게 섞어 담을 수 있습니다.',
    visitCTA: { headline: '박스 $11.25부터', body: '3개 $11.25, 6개 $22.50, 12개 $45.00. 맛은 자유롭게 선택. 와이키키 비치에서 도보 약 5분, 매일 아침 7시–밤 9시.', menuLabel: '24가지 맛 보기', directionsLabel: '길찾기' },
    sections: [
      { h2: '박스 크기와 가격', body: '이번 달 매장 가격입니다. 낱개는 $3.95, 박스로 사면 개당 $3.75입니다.', bullets: ['3개 박스 $11.25', '6개 박스 $22.50', '12개 박스 $45.00', '낱개 $3.95'] },
      { h2: '몇 개를 사야 할까요?', body: '1인당 1–2개를 기준으로 잡으세요.', bullets: ['1–2명: 3개 박스', '3–4명 또는 가족: 6개 박스', '6명 이상, 회사나 생일: 12개 박스'] },
      { h2: '미리 주문하기', body: '매장에서 진열대를 보고 고르거나, 사이트의 Order Online 버튼으로 3개·6개·12개 팩을 미리 결제하고 카운터에서 픽업할 수 있습니다. 매일 아침 매장에서 만들고 당일에 가장 맛있으니, 먹을 날에 구매하세요.' },
      { h2: '커피나 말라사다와 함께', body: 'Kona Coffee $7.00, Kona Cold Brew $6.95, House Coffee $5.00. 말라사다도 12개 박스가 있습니다(클래식 $45.00, 크림 $57.00).' },
    ],
    faq: [
      { q: '와이키키 모찌도넛 박스는 얼마인가요?', a: 'Kona Coffee Donut(2142 Kalākaua Ave)에서 3개 $11.25, 6개 $22.50, 12개 $45.00입니다. 낱개는 $3.95입니다.' },
      { q: '한 박스에 여러 맛을 섞을 수 있나요?', a: '네. 그날 진열대에 있는 24가지 맛 중에서 자유롭게 고를 수 있습니다.' },
      { q: '미리 주문하고 픽업할 수 있나요?', a: '네. 온라인으로 3개·6개·12개 팩을 주문하고 매장에서 픽업할 수 있습니다. 매일 아침 7시–밤 9시.' },
      { q: '다음 날까지 두고 먹어도 되나요?', a: '매일 아침 매장에서 만들고 당일에 가장 맛있습니다. 먹을 날에 구매하세요.' },
    ],
    finalCTA: { headline: '박스는 칼라카우아에서', body: '3개 $11.25, 6개 $22.50, 12개 $45.00. 매일 아침 7시–밤 9시.', visitLabel: '오늘 방문', callLabel: '전화 (808) 260-1835' },
  },
  zh: {
    hero: { title: '威基基麻糬甜甜圈礼盒：3个、6个、12个', subtitle: '每种盒装的价格、按人数怎么选、口味怎么搭配。就在卡拉考阿大道。', date: '2026年11月发布', readTime: '4分钟', badge: '点单指南' },
    intro: '麻糬甜甜圈最好吃的方式，是几种口味摆在一起，大家一颗一颗掰着分享。卡拉考阿大道的Kona Coffee Donut有3个$11.25、6个$22.50、12个$45.00三种盒装，可从柜台里的24种口味中任意搭配。',
    visitCTA: { headline: '盒装 $11.25起', body: '3个$11.25，6个$22.50，12个$45.00，口味任意搭配。距威基基海滩步行约5分钟，每天早7点至晚9点。', menuLabel: '查看全部24种口味', directionsLabel: '获取路线' },
    sections: [
      { h2: '盒装规格和价格', body: '以下为本月门店价格。单个$3.95，盒装每个合$3.75。', bullets: ['3个装 $11.25', '6个装 $22.50', '12个装 $45.00', '单个 $3.95'] },
      { h2: '买几个合适？', body: '按每人1到2个来算：', bullets: ['1–2人：3个装', '3–4人或一家人：6个装', '6人以上、办公室或生日：12个装'] },
      { h2: '提前下单', body: '可以到店在柜台前挑选，也可以在网站点击 Order Online 提前购买3个、6个或12个装，到店自取。每天早晨店内现做，当天吃最好，请在要吃的当天购买。' },
    ],
    faq: [
      { q: '威基基一盒麻糬甜甜圈多少钱？', a: 'Kona Coffee Donut（2142 Kalākaua Ave）：3个$11.25，6个$22.50，12个$45.00。单个$3.95。' },
      { q: '一盒可以混搭口味吗？', a: '可以。当天柜台里的24种口味可任意搭配。' },
      { q: '可以提前下单自取吗？', a: '可以。可在线购买3个、6个或12个装，到店自取。每天早7点至晚9点。' },
    ],
    finalCTA: { headline: '来卡拉考阿大道带一盒', body: '3个$11.25，6个$22.50，12个$45.00。每天早7点至晚9点。', visitLabel: '立即到店', callLabel: '致电 (808) 260-1835' },
  },
  es: {
    hero: { title: 'Cajas de mochi donuts en Waikiki: 3, 6 o una docena', subtitle: 'Cuánto cuesta cada caja, cuántos pedir y cómo combinarlos, en Kalākaua Avenue.', date: 'Noviembre 2026', readTime: '4 min', badge: 'Guía de pedido' },
    intro: 'Los mochi donuts se disfrutan más compartidos: varios sabores en la mesa y cada quien probando un poco. En Kona Coffee Donut hay cajas de 3 ($11.25), 6 ($22.50) y 12 ($45.00), y puedes combinar cualquiera de los 24 sabores que haya en la vitrina.',
    visitCTA: { headline: 'Cajas desde $11.25', body: '3 por $11.25, 6 por $22.50, 12 por $45.00, con los sabores que quieras. De 7 AM a 9 PM.', menuLabel: 'Ver los 24 sabores', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Tamaños y precios', body: 'Precios de este mes. Un donut suelto cuesta $3.95; en caja sale a $3.75.', bullets: ['Caja de 3 — $11.25', 'Caja de 6 — $22.50', 'Caja de 12 — $45.00', 'Unidad — $3.95'] },
      { h2: '¿Cuántos pedir?', body: 'Calcula uno o dos por persona:', bullets: ['1–2 personas: caja de 3', '3–4 personas o una familia: caja de 6', '6 o más, oficina o cumpleaños: caja de 12'] },
      { h2: 'Pedir con antelación', body: 'Puedes elegir en la vitrina o usar el botón Order Online del sitio para pagar un pack de 3, 6 o 12 y recogerlo en el mostrador. Se hacen aquí cada mañana y saben mejor el mismo día.' },
    ],
    faq: [
      { q: '¿Cuánto cuesta una caja de mochi donuts en Waikiki?', a: 'En Kona Coffee Donut, 2142 Kalākaua Ave: 3 por $11.25, 6 por $22.50 y 12 por $45.00. La unidad cuesta $3.95.' },
      { q: '¿Puedo combinar sabores en una caja?', a: 'Sí, cualquiera de los 24 sabores que haya ese día en la vitrina.' },
    ],
    finalCTA: { headline: 'Llévate una caja en Kalākaua', body: '3 por $11.25, 6 por $22.50, 12 por $45.00. De 7 AM a 9 PM.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 260-1835' },
  },
};

export default function MochiDonutBoxWaikikiPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
