'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'thai-tea-waikiki',
  imageSrc: '/images/blog/thai-tea-waikiki.jpeg',
  imageAlt: 'A sealed Thai tea boba can between a milk tea can, a brown sugar boba can and two mochi donuts at Kona Coffee Donut in Waikiki',
  schemaHeadline: 'Thai Tea in Waikiki: Boba Cans $8.95 & Thai Tea Smoothie $10.95',
  schemaDescription:
    'Where to get Thai tea in Waikiki: a sealed Thai tea boba can ($8.95) or a blended Thai tea smoothie ($10.95, boba +$1.95) at Kona Coffee Donut, 2142 Kalākaua Ave, open 7 AM to 9 PM.',
  datePublished: '2026-11-02',
  related: [
    {
      path: '/blog/boba-waikiki',
      label: { en: 'Boba in Waikiki: every canned flavor', ja: 'ワイキキのボバ全フレーバー', ko: '와이키키 보바 전 메뉴', zh: '威基基珍珠奶茶全口味', es: 'Boba en Waikiki' },
    },
    {
      path: '/blog/best-smoothies-waikiki',
      label: { en: 'Best smoothies in Waikiki', ja: 'ワイキキのおすすめスムージー', ko: '와이키키 스무디 추천', zh: '威基基最佳冰沙', es: 'Mejores smoothies en Waikiki' },
    },
    {
      path: '/blog/best-iced-drinks-waikiki',
      label: { en: 'Iced drinks near Waikiki Beach', ja: 'ワイキキのアイスドリンク', ko: '와이키키 아이스 음료', zh: '威基基冰饮', es: 'Bebidas frías en Waikiki' },
    },
  ],
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Thai Tea in Waikiki: Two Ways to Get Your Orange Fix',
      subtitle: 'A sealed Thai tea boba can for the beach or a blended Thai tea smoothie for the walk — both on Kalākaua Avenue.',
      date: 'Published November 2026',
      readTime: '4 min read',
      badge: 'Drink Guide',
    },
    intro:
      "Thai iced tea — cha yen in Thailand — is strong black tea, spiced and sweetened, finished with milk and poured over ice. That bright orange color is the giveaway, and it is one of the most-ordered boba flavors anywhere. At Kona Coffee Donut on Kalākaua Avenue you can get it two ways: as a Thai tea boba milk tea sealed in a can ($8.95) or as a blended Thai tea smoothie ($10.95). Here's what each one is like, how much caffeine to expect and what to eat with it.",
    visitCTA: {
      headline: 'Thai Tea From $8.95',
      body: 'Thai tea boba can $8.95, Thai tea smoothie $10.95 (add boba +$1.95). 2142 Kalākaua Ave, about 5 minutes from Waikiki Beach, open 7 AM to 9 PM daily.',
      menuLabel: 'See the Full Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'What Is Thai Tea?',
        body:
          "Thai tea starts with a strongly brewed black tea, usually blended with spices, then sweetened and mixed with milk. It tastes like a richer, sweeter, slightly spiced milk tea — creamy, a little caramel-like, never bitter. The orange color usually comes from the tea mix itself, not from fruit.",
      },
      {
        h2: 'Two Ways to Order It',
        body: 'Every price below is from our register this month:',
        bullets: [
          'Thai Tea boba can — $8.95: milk tea with boba, sealed in a can at the counter, so it travels in a beach bag',
          'Thai Tea smoothie — $10.95: blended icy and thick; add boba for +$1.95',
          'Want a different milk tea? The cans also come in Classic, Brown Sugar, Ube, Coffee and Matcha',
        ],
        pullout: {
          title: 'Can or smoothie?',
          body: 'Heading to the sand: get the sealed can. Walking Kalākaua on a hot afternoon: the smoothie is colder and thicker.',
        },
      },
      {
        h2: 'Caffeine and Sweetness',
        body:
          "Thai tea is made with black tea, so it does contain caffeine — less than a coffee, but enough that it is not a late-night drink for everyone. It is also a sweet drink. If you want something without tea or coffee, a fruit smoothie ($10.95) or a lemonade ($8.95) is the better pick.",
      },
      {
        h2: 'What to Eat With It',
        body:
          'The sweet, creamy tea pairs well with something chewy or savory: a mochi donut ($3.95), a Korean rice corn dog (from $6.99) or a Spam musubi ($2.95).',
      },
    ],
    faq: [
      {
        q: 'Where can I get Thai tea in Waikiki?',
        a: 'Kona Coffee Donut, 2142 Kalākaua Ave, about a 5-minute walk from Waikiki Beach, sells a Thai tea boba can for $8.95 and a Thai tea smoothie for $10.95, open 7 AM to 9 PM daily.',
      },
      {
        q: 'How much is Thai tea boba in Waikiki?',
        a: 'At Kona Coffee Donut in Waikiki, the Thai tea boba milk tea can is $8.95. The blended Thai tea smoothie is $10.95, and boba can be added for $1.95.',
      },
      {
        q: 'Does Thai tea have caffeine?',
        a: 'Yes. Thai tea is made with black tea, so it contains caffeine — usually less than a cup of coffee.',
      },
      {
        q: 'What is the difference between Thai tea and milk tea?',
        a: 'Both are black tea with milk. Thai tea is brewed stronger, spiced, sweeter and orange in color; classic milk tea is milder. Kona Coffee Donut in Waikiki has both as sealed boba cans for $8.95.',
      },
      {
        q: 'Can I take Thai tea boba to the beach?',
        a: 'Yes. At Kona Coffee Donut the Thai tea boba is sealed in a can ($8.95), so it will not spill in a beach bag.',
      },
    ],
    finalCTA: {
      headline: 'Get Your Thai Tea on Kalākaua',
      body: 'Thai tea boba can $8.95, Thai tea smoothie $10.95. Open 7 AM – 9 PM daily.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 260-1835',
    },
  },
  ja: {
    hero: { title: 'ワイキキでタイティー：2つの楽しみ方', subtitle: 'ビーチには密封のタイティーボバ缶、街歩きにはタイティースムージー。どちらもカラカウア通りで。', date: '2026年11月公開', readTime: '読了4分', badge: 'ドリンクガイド' },
    intro: 'タイティー（チャーイェン）は、濃く淹れてスパイスを効かせた紅茶に甘さとミルクを加えた、鮮やかなオレンジ色のドリンク。カラカウア通りのKona Coffee Donutでは、密封缶のタイティーボバ（$8.95）と、ブレンドしたタイティースムージー（$10.95）の2種類で楽しめます。',
    visitCTA: { headline: 'タイティー $8.95〜', body: 'タイティーボバ缶$8.95、タイティースムージー$10.95（ボバ追加+$1.95）。ワイキキビーチから徒歩約5分、毎日朝7時〜夜9時。', menuLabel: 'メニューを見る', directionsLabel: '行き方を確認' },
    sections: [
      { h2: '注文の仕方', body: '今月のレジ価格です。', bullets: ['タイティーボバ缶 $8.95（密封なのでビーチに最適）', 'タイティースムージー $10.95（ボバ追加 +$1.95）', '缶はクラシック、黒糖、ウベ、コーヒー、抹茶もあり'] },
      { h2: 'カフェインと甘さ', body: 'タイティーは紅茶なのでカフェイン入り。甘めのドリンクです。お茶・コーヒーなしならフルーツスムージー（$10.95）やレモネード（$8.95）を。' },
    ],
    faq: [
      { q: 'ワイキキでタイティーが飲めるのは？', a: 'Kona Coffee Donut（2142 Kalākaua Ave、ワイキキビーチから徒歩約5分）。タイティーボバ缶$8.95、タイティースムージー$10.95。毎日朝7時〜夜9時。' },
      { q: 'タイティーにカフェインは入っていますか？', a: 'はい。紅茶ベースなのでカフェインが入っています（コーヒーよりは少なめ）。' },
    ],
    finalCTA: { headline: 'タイティーはカラカウア通りで', body: 'ボバ缶$8.95、スムージー$10.95。毎日朝7時〜夜9時。', visitLabel: '今日来店', callLabel: '電話 (808) 260-1835' },
  },
  ko: {
    hero: { title: '와이키키 타이티: 두 가지로 즐기기', subtitle: '해변엔 밀봉 타이티 보바 캔, 산책엔 타이티 스무디. 모두 칼라카우아에서.', date: '2026년 11월 발행', readTime: '4분 분량', badge: '음료 가이드' },
    intro: '타이티(차옌)는 진하게 우린 홍차에 향신료와 단맛, 우유를 더한 선명한 주황색 음료입니다. 칼라카우아 거리 Kona Coffee Donut에서는 밀봉 캔 타이티 보바($8.95)와 갈아 만든 타이티 스무디($10.95) 두 가지로 즐길 수 있습니다.',
    visitCTA: { headline: '타이티 $8.95부터', body: '타이티 보바 캔 $8.95, 타이티 스무디 $10.95 (보바 추가 +$1.95). 와이키키 비치에서 도보 약 5분, 매일 아침 7시–밤 9시.', menuLabel: '메뉴 보기', directionsLabel: '길찾기' },
    sections: [
      { h2: '주문 방법', body: '이번 달 매장 가격입니다.', bullets: ['타이티 보바 캔 $8.95 (밀봉이라 해변용으로 딱)', '타이티 스무디 $10.95 (보바 추가 +$1.95)', '캔은 클래식, 흑당, 우베, 커피, 말차도 있어요'] },
      { h2: '카페인과 단맛', body: '타이티는 홍차라 카페인이 있고 단 편입니다. 차·커피 없는 음료를 원하면 과일 스무디($10.95)나 레모네이드($8.95)를 고르세요.' },
    ],
    faq: [
      { q: '와이키키에서 타이티 마실 수 있는 곳은?', a: 'Kona Coffee Donut(2142 Kalākaua Ave, 와이키키 비치에서 도보 약 5분). 타이티 보바 캔 $8.95, 타이티 스무디 $10.95. 매일 아침 7시–밤 9시.' },
      { q: '타이티에 카페인이 있나요?', a: '네. 홍차 베이스라 카페인이 들어 있습니다(커피보다는 적은 편).' },
    ],
    finalCTA: { headline: '타이티는 칼라카우아에서', body: '보바 캔 $8.95, 스무디 $10.95. 매일 아침 7시–밤 9시.', visitLabel: '오늘 방문', callLabel: '전화 (808) 260-1835' },
  },
  zh: {
    hero: { title: '威基基泰式奶茶：两种喝法', subtitle: '去海滩带密封泰式奶茶罐，逛街来一杯泰式奶茶冰沙。都在卡拉考阿大道。', date: '2026年11月发布', readTime: '4分钟', badge: '饮品指南' },
    intro: '泰式奶茶（cha yen）是用浓红茶加香料、糖和牛奶调成的亮橙色饮品。卡拉考阿大道的Kona Coffee Donut有两种：密封罐装泰式珍珠奶茶（$8.95）和泰式奶茶冰沙（$10.95）。',
    visitCTA: { headline: '泰式奶茶 $8.95起', body: '泰式珍珠奶茶罐$8.95，泰式奶茶冰沙$10.95（加珍珠+$1.95）。距威基基海滩步行约5分钟，每天早7点至晚9点。', menuLabel: '查看菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '怎么点', body: '以下为本月门店价格：', bullets: ['泰式珍珠奶茶罐 $8.95（密封，适合带去海滩）', '泰式奶茶冰沙 $10.95（加珍珠 +$1.95）'] },
      { h2: '咖啡因和甜度', body: '泰式奶茶是红茶做的，含咖啡因，而且偏甜。想要不含茶和咖啡的，可选水果冰沙（$10.95）或柠檬水（$8.95）。' },
    ],
    faq: [
      { q: '威基基哪里能喝到泰式奶茶？', a: 'Kona Coffee Donut（2142 Kalākaua Ave，距威基基海滩步行约5分钟）：泰式珍珠奶茶罐$8.95，泰式奶茶冰沙$10.95，每天早7点至晚9点。' },
      { q: '泰式奶茶有咖啡因吗？', a: '有。泰式奶茶以红茶为底，含咖啡因（一般比咖啡少）。' },
    ],
    finalCTA: { headline: '来卡拉考阿大道喝泰式奶茶', body: '奶茶罐$8.95，冰沙$10.95。每天早7点至晚9点。', visitLabel: '立即到店', callLabel: '致电 (808) 260-1835' },
  },
  es: {
    hero: { title: 'Té tailandés en Waikiki: dos formas de pedirlo', subtitle: 'En lata sellada con boba o en smoothie, en Kalākaua Avenue.', date: 'Noviembre 2026', readTime: '4 min', badge: 'Bebidas' },
    intro: 'El té tailandés es té negro fuerte, especiado, endulzado y con leche, de color naranja intenso. En Kona Coffee Donut lo tienes como boba en lata sellada ($8.95) o como smoothie ($10.95).',
    visitCTA: { headline: 'Té tailandés desde $8.95', body: 'Boba de té tailandés en lata $8.95, smoothie $10.95 (boba +$1.95). De 7 AM a 9 PM.', menuLabel: 'Ver Menú', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Cómo pedirlo', body: 'Precios de este mes:', bullets: ['Boba de té tailandés en lata $8.95', 'Smoothie de té tailandés $10.95 (boba +$1.95)'] },
    ],
    faq: [
      { q: '¿Dónde tomar té tailandés en Waikiki?', a: 'En Kona Coffee Donut, 2142 Kalākaua Ave: boba en lata $8.95 y smoothie $10.95, de 7 AM a 9 PM.' },
      { q: '¿El té tailandés tiene cafeína?', a: 'Sí, se hace con té negro, aunque suele tener menos que un café.' },
    ],
    finalCTA: { headline: 'Tu té tailandés en Kalākaua', body: 'Lata $8.95, smoothie $10.95. De 7 AM a 9 PM.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 260-1835' },
  },
};

export default function ThaiTeaWaikikiPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
