'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'waikiki-snacks-grab-and-go',
  imageSrc: '/images/blog/waikiki-snacks-grab-and-go.jpeg',
  imageAlt:
    'Grab-and-go snacks from Kona Coffee Donut on Waikiki Beach: sealed brown sugar and Thai tea boba cans, mochi donuts, a Korean corn dog and a sugar malasada',
  schemaHeadline: 'Grab-and-Go Food in Waikiki: Beach Snacks From $2.95',
  schemaDescription:
    'One-handed grab-and-go food near Waikiki Beach at Kona Coffee Donut, 2142 Kalākaua Ave: Spam musubi $2.95, mochi donuts $3.95, malasadas $3.95, Korean corn dogs from $6.99 and sealed boba cans $8.95, open 7 AM to 9 PM.',
  datePublished: '2026-10-31',
  related: [
    {
      path: '/blog/musubi-waikiki',
      label: {
        en: 'Spam musubi in Waikiki',
        ja: 'ワイキキのスパムむすび',
        ko: '와이키키 스팸 무스비',
        zh: '威基基午餐肉饭团',
        es: 'Spam musubi en Waikiki',
      },
    },
    {
      path: '/blog/boba-waikiki',
      label: {
        en: 'Boba in Waikiki: sealed cans you can carry',
        ja: 'ワイキキのボバ（密封缶）',
        ko: '와이키키 보바 (밀봉 캔)',
        zh: '威基基珍珠奶茶（密封罐）',
        es: 'Boba en Waikiki',
      },
    },
    {
      path: '/blog/korean-corn-dog-waikiki-guide',
      label: {
        en: 'Korean corn dogs in Waikiki: every style',
        ja: 'ワイキキの韓国式ホットドッグ',
        ko: '와이키키 한국식 핫도그',
        zh: '威基基韩式热狗指南',
        es: 'Corn dogs coreanos en Waikiki',
      },
    },
  ],
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Grab-and-Go Food in Waikiki: One-Handed Beach Snacks',
      subtitle: 'Spam musubi, mochi donuts, Korean corn dogs and sealed boba cans — order at the counter, walk five minutes, eat on the sand.',
      date: 'Published October 2026',
      readTime: '4 min read',
      badge: 'Beach Food',
    },
    intro:
      "The best Waikiki beach lunch is the one you can carry in one hand while the other holds a towel. Kona Coffee Donut at 2142 Kalākaua Ave is a counter-service shop about five minutes' walk from Waikiki Beach, open 7 AM to 9 PM, and most of the menu is built to travel: Spam musubi from $2.95, mochi donuts and malasadas at $3.95, Korean rice corn dogs from $6.99 and boba milk tea sealed in a can for $8.95. Here's what packs best, what to eat on the spot, and a few combos that keep a beach day under $10 a person.",
    visitCTA: {
      headline: 'Beach Snacks From $2.95',
      body:
        'Spam musubi $2.95, mochi donuts $3.95, corn dogs from $6.99, sealed boba cans $8.95. 2142 Kalākaua Ave, about 5 minutes from Waikiki Beach, open 7 AM to 9 PM daily.',
      menuLabel: 'See the Full Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'The One-Handed Lineup (With Prices)',
        body: 'Every price below is from our register this month:',
        bullets: [
          'Spam musubi — $2.95 (classic or teriyaki), Egg Spam $3.50, Shrimp Avocado Spam $4.50',
          'Shiso Wakame musubi — $2.95, the no-Spam option',
          'Mochi donuts — $3.95 each, 3 for $11.25, 6 for $22.50',
          'Malasadas — classic sugar $3.95, cream-filled $4.95',
          'Korean rice corn dogs — Original $6.99; Potato, Hot Cheetos or Crispy Ramen $7.99; mozzarella versions $7.99–$9.99',
          'Boba milk tea cans — $8.95: Classic, Brown Sugar, Ube, Coffee, Thai Tea or Matcha',
          'Kona Cold Brew — $6.95; lemonade $8.95; Hawaiian Springs bottled water $2.95',
        ],
        pullout: {
          title: 'Beach-bag rule',
          body: 'Musubi and sealed boba cans travel. Eat the corn dog and the malasada right away, while they are still crisp and sugary.',
        },
      },
      {
        h2: 'What Packs Best for the Sand',
        body:
          "Musubi is the original Hawaii beach food: rice, Spam and nori in a block that doesn't fall apart. Boba cans are sealed at the counter, so they don't leak in a bag. Mochi donuts ride well in a box for an hour or two. Corn dogs and malasadas are at their best in the first few minutes — eat them on the walk down Kalākaua and save the sand for the musubi.",
      },
      {
        h2: 'Combos That Stay Under $10',
        body: 'A few easy orders, before tax:',
        bullets: [
          'Spam musubi + Kona Cold Brew — $9.90',
          'Two musubi + a mochi donut — $9.85',
          'Spam musubi + mochi donut + bottled water — $9.85',
        ],
      },
      {
        h2: 'Early Beach Run? We Open at 7 AM',
        body:
          "Surfers and sunrise walkers: the counter opens at 7 AM every day, so you can grab musubi and a hot 100% Kona coffee ($7.00) before the beach fills up. Coming back at sunset? We're open until 9 PM.",
      },
    ],
    faq: [
      {
        q: 'Where can I get grab-and-go food near Waikiki Beach?',
        a: 'Kona Coffee Donut, 2142 Kalākaua Ave, about a 5-minute walk from Waikiki Beach: Spam musubi from $2.95, mochi donuts and malasadas from $3.95, Korean rice corn dogs from $6.99 and sealed boba cans $8.95. Open 7 AM to 9 PM daily.',
      },
      {
        q: 'How much is Spam musubi in Waikiki?',
        a: 'At Kona Coffee Donut in Waikiki, Spam and Teriyaki Spam musubi are $2.95, Shiso Wakame $2.95, Egg Spam $3.50 and Shrimp Avocado Spam $4.50.',
      },
      {
        q: 'Can I take boba to the beach?',
        a: 'Yes. Kona Coffee Donut seals its boba milk tea in cans ($8.95) — Classic, Brown Sugar, Ube, Coffee, Thai Tea or Matcha — so it travels in a beach bag without spilling.',
      },
      {
        q: 'What is open early for a beach breakfast in Waikiki?',
        a: 'Kona Coffee Donut on Kalākaua Avenue opens at 7 AM daily with Spam musubi ($2.95), mochi donuts ($3.95) and hot 100% Kona coffee ($7.00), about 5 minutes from the sand.',
      },
      {
        q: 'Is there anything under $5?',
        a: 'Yes: Spam musubi $2.95, Hawaiian Springs bottled water $2.95, mochi donuts $3.95, classic malasadas $3.95 and cream malasadas $4.95 at Kona Coffee Donut in Waikiki.',
      },
    ],
    finalCTA: {
      headline: 'Grab It and Go to the Beach',
      body: 'Musubi from $2.95, mochi donuts $3.95, sealed boba cans $8.95. 2142 Kalākaua Ave, open 7 AM – 9 PM daily.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 260-1835',
    },
  },
  ja: {
    hero: { title: 'ワイキキのテイクアウトグルメ：片手で食べるビーチおやつ', subtitle: 'スパムむすび、モチドーナツ、韓国式ホットドッグ、密封ボバ缶。カウンターで買ってビーチまで徒歩5分。', date: '2026年10月公開', readTime: '読了4分', badge: 'ビーチごはん' },
    intro: 'ビーチでのランチは、片手で持てるものが一番。カラカウア通り2142のKona Coffee Donutはカウンター注文式で、ワイキキビーチから徒歩約5分、毎日朝7時〜夜9時営業。スパムむすび$2.95〜、モチドーナツ・マラサダ$3.95、韓国式ホットドッグ$6.99〜、缶入りボバ$8.95と、持ち運びやすいメニューがそろっています。',
    visitCTA: { headline: 'ビーチおやつ $2.95〜', body: 'スパムむすび$2.95、モチドーナツ$3.95、ホットドッグ$6.99〜、密封ボバ缶$8.95。ワイキキビーチから徒歩約5分、毎日朝7時〜夜9時。', menuLabel: 'メニューを見る', directionsLabel: '行き方を確認' },
    sections: [
      { h2: '片手で食べられるメニュー', body: '今月のレジ価格です。', bullets: ['スパムむすび $2.95（エッグスパム$3.50、シュリンプアボカド$4.50）', 'しそわかめむすび $2.95', 'モチドーナツ $3.95（3個$11.25、6個$22.50）', 'マラサダ $3.95／クリーム入り$4.95', '韓国式ホットドッグ $6.99〜', '缶入りボバミルクティー $8.95'] },
      { h2: 'ビーチに持っていくなら', body: 'スパムむすびと密封ボバ缶は持ち運びに最適。ホットドッグとマラサダは買ってすぐが一番おいしいので、カラカウア通りを歩きながらどうぞ。' },
      { h2: '朝7時オープン', body: 'サーフィン前や朝の散歩に。毎日朝7時から、スパムむすびと100%コナコーヒー（$7.00）が買えます。' },
    ],
    faq: [
      { q: 'ワイキキビーチ近くでテイクアウトできるお店は？', a: 'Kona Coffee Donut（2142 Kalākaua Ave、ワイキキビーチから徒歩約5分）。スパムむすび$2.95〜、モチドーナツ・マラサダ$3.95〜、韓国式ホットドッグ$6.99〜、密封ボバ缶$8.95。毎日朝7時〜夜9時。' },
      { q: 'ワイキキのスパムむすびはいくら？', a: 'Kona Coffee Donutではスパム・照り焼きスパム$2.95、エッグスパム$3.50、シュリンプアボカドスパム$4.50です。' },
      { q: 'ボバをビーチに持っていけますか？', a: 'はい。Kona Coffee Donutのボバミルクティーは缶で密封（$8.95）されているので、バッグに入れてもこぼれません。' },
    ],
    finalCTA: { headline: '買ってそのままビーチへ', body: 'むすび$2.95〜、モチドーナツ$3.95、ボバ缶$8.95。毎日朝7時〜夜9時。', visitLabel: '今日来店', callLabel: '電話 (808) 260-1835' },
  },
  ko: {
    hero: { title: '와이키키 테이크아웃 먹거리: 한 손으로 먹는 비치 간식', subtitle: '스팸 무스비, 모찌도넛, 한국식 핫도그, 밀봉 보바 캔. 카운터에서 사서 해변까지 도보 5분.', date: '2026년 10월 발행', readTime: '4분 분량', badge: '비치 푸드' },
    intro: '해변 점심은 한 손으로 들 수 있는 게 최고입니다. 칼라카우아 2142 Kona Coffee Donut은 카운터 주문 매장으로 와이키키 비치에서 도보 약 5분, 매일 아침 7시–밤 9시 영업합니다. 스팸 무스비 $2.95부터, 모찌도넛·말라사다 $3.95, 한국식 핫도그 $6.99부터, 캔 보바 $8.95까지 들고 다니기 좋은 메뉴가 많습니다.',
    visitCTA: { headline: '비치 간식 $2.95부터', body: '스팸 무스비 $2.95, 모찌도넛 $3.95, 핫도그 $6.99부터, 밀봉 보바 캔 $8.95. 와이키키 비치에서 도보 약 5분, 매일 아침 7시–밤 9시.', menuLabel: '메뉴 보기', directionsLabel: '길찾기' },
    sections: [
      { h2: '한 손 메뉴 (가격 포함)', body: '이번 달 매장 가격입니다.', bullets: ['스팸 무스비 $2.95 (에그 스팸 $3.50, 새우 아보카도 $4.50)', '시소 와카메 무스비 $2.95', '모찌도넛 $3.95 (3개 $11.25, 6개 $22.50)', '말라사다 $3.95 / 크림 $4.95', '한국식 핫도그 $6.99부터', '캔 보바 밀크티 $8.95'] },
      { h2: '해변에 가져가기 좋은 것', body: '무스비와 밀봉 보바 캔은 들고 가기 딱 좋습니다. 핫도그와 말라사다는 바로 먹을 때가 제일 맛있으니 칼라카우아를 걸으면서 드세요.' },
      { h2: '아침 7시 오픈', body: '서핑 전이나 아침 산책길에. 매일 아침 7시부터 스팸 무스비와 100% 코나 커피($7.00)를 살 수 있습니다.' },
    ],
    faq: [
      { q: '와이키키 비치 근처 테이크아웃 맛집은?', a: 'Kona Coffee Donut(2142 Kalākaua Ave, 와이키키 비치에서 도보 약 5분). 스팸 무스비 $2.95부터, 모찌도넛·말라사다 $3.95부터, 한국식 핫도그 $6.99부터, 밀봉 보바 캔 $8.95. 매일 아침 7시–밤 9시.' },
      { q: '와이키키 스팸 무스비 가격은?', a: 'Kona Coffee Donut에서 스팸·데리야키 스팸 $2.95, 에그 스팸 $3.50, 새우 아보카도 스팸 $4.50입니다.' },
      { q: '보바를 해변에 가져갈 수 있나요?', a: '네. Kona Coffee Donut의 보바 밀크티는 캔으로 밀봉($8.95)돼 가방에 넣어도 새지 않습니다.' },
    ],
    finalCTA: { headline: '사서 바로 해변으로', body: '무스비 $2.95부터, 모찌도넛 $3.95, 보바 캔 $8.95. 매일 아침 7시–밤 9시.', visitLabel: '오늘 방문', callLabel: '전화 (808) 260-1835' },
  },
  zh: {
    hero: { title: '威基基外带美食：单手就能吃的海滩小吃', subtitle: '午餐肉饭团、麻糬甜甜圈、韩式热狗、密封珍珠奶茶罐。柜台买好，步行5分钟到海滩。', date: '2026年10月发布', readTime: '4分钟', badge: '海滩美食' },
    intro: '海滩午餐，最好是一只手就能拿着吃。卡拉考阿大道2142号的Kona Coffee Donut是柜台点餐店，距威基基海滩步行约5分钟，每天早7点至晚9点营业：午餐肉饭团$2.95起、麻糬甜甜圈和马拉萨达$3.95、韩式热狗$6.99起、罐装珍珠奶茶$8.95，都方便带走。',
    visitCTA: { headline: '海滩小吃 $2.95起', body: '午餐肉饭团$2.95、麻糬甜甜圈$3.95、热狗$6.99起、密封珍珠奶茶罐$8.95。距威基基海滩步行约5分钟，每天早7点至晚9点。', menuLabel: '查看菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '单手小吃（附价格）', body: '以下为本月门店价格：', bullets: ['午餐肉饭团 $2.95（鸡蛋午餐肉$3.50、鲜虾牛油果$4.50）', '紫苏裙带菜饭团 $2.95', '麻糬甜甜圈 $3.95（3个$11.25，6个$22.50）', '马拉萨达 $3.95／奶油夹心$4.95', '韩式热狗 $6.99起', '罐装珍珠奶茶 $8.95'] },
      { h2: '哪些适合带去海滩', body: '饭团和密封奶茶罐最适合带走；热狗和马拉萨达刚买时最好吃，边走边吃最合适。' },
    ],
    faq: [
      { q: '威基基海滩附近哪里能买外带小吃？', a: 'Kona Coffee Donut（2142 Kalākaua Ave，距威基基海滩步行约5分钟）：午餐肉饭团$2.95起、麻糬甜甜圈和马拉萨达$3.95起、韩式热狗$6.99起、密封珍珠奶茶罐$8.95。每天早7点至晚9点。' },
      { q: '威基基的午餐肉饭团多少钱？', a: 'Kona Coffee Donut的午餐肉、照烧午餐肉饭团$2.95，鸡蛋午餐肉$3.50，鲜虾牛油果$4.50。' },
      { q: '珍珠奶茶能带去海滩吗？', a: '可以。Kona Coffee Donut的珍珠奶茶以罐装密封（$8.95），放包里也不会洒。' },
    ],
    finalCTA: { headline: '买了就去海滩', body: '饭团$2.95起，麻糬甜甜圈$3.95，奶茶罐$8.95。每天早7点至晚9点。', visitLabel: '立即到店', callLabel: '致电 (808) 260-1835' },
  },
  es: {
    hero: { title: 'Comida para llevar en Waikiki: snacks de playa', subtitle: 'Spam musubi, mochi donuts, corn dogs coreanos y boba en lata sellada. A 5 minutos de la playa.', date: 'Octubre 2026', readTime: '4 min', badge: 'Comida de playa' },
    intro: 'El mejor almuerzo de playa en Waikiki se come con una mano. Kona Coffee Donut, 2142 Kalākaua Ave, es un local de mostrador a unos 5 minutos de la playa, abierto de 7 AM a 9 PM: Spam musubi desde $2.95, mochi donuts y malasadas a $3.95, corn dogs coreanos desde $6.99 y boba sellado en lata por $8.95.',
    visitCTA: { headline: 'Snacks de playa desde $2.95', body: 'Spam musubi $2.95, mochi donuts $3.95, corn dogs desde $6.99, boba en lata $8.95. A unos 5 minutos de la playa de Waikiki, de 7 AM a 9 PM.', menuLabel: 'Ver Menú', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Para llevar (con precios)', body: 'Precios de este mes:', bullets: ['Spam musubi $2.95', 'Mochi donuts $3.95 (6 por $22.50)', 'Malasadas $3.95; con crema $4.95', 'Corn dog coreano desde $6.99', 'Boba en lata $8.95'] },
      { h2: 'Qué llevar a la arena', body: 'El musubi y las latas de boba viajan bien; el corn dog y la malasada se comen al momento.' },
    ],
    faq: [
      { q: '¿Dónde comprar comida para llevar cerca de la playa de Waikiki?', a: 'En Kona Coffee Donut, 2142 Kalākaua Ave, a unos 5 minutos a pie: Spam musubi desde $2.95, mochi donuts $3.95, corn dogs desde $6.99 y boba en lata $8.95. De 7 AM a 9 PM.' },
      { q: '¿Puedo llevar boba a la playa?', a: 'Sí. En Kona Coffee Donut el boba viene sellado en lata ($8.95), así que no se derrama.' },
    ],
    finalCTA: { headline: 'Cómpralo y a la playa', body: 'Musubi desde $2.95, mochi donuts $3.95, boba en lata $8.95. De 7 AM a 9 PM.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 260-1835' },
  },
};

export default function WaikikiSnacksGrabAndGoPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
