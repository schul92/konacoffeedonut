'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'spam-musubi-vs-onigiri',
  imageSrc: '/images/blog/spam-musubi-vs-onigiri.jpeg',
  imageAlt: 'Two Spam musubi, one with egg, on a ceramic plate — Hawaii’s take on the Japanese rice ball',
  schemaHeadline: 'Spam Musubi vs Onigiri: What’s the Difference? (Musubi From $2.95 in Waikiki)',
  schemaDescription:
    'Onigiri is a Japanese rice ball with the filling inside; Hawaii’s Spam musubi is a pressed block of rice topped with seared Spam and wrapped in nori. Try it at Kona Coffee Donut, 2142 Kalākaua Ave, from $2.95.',
  datePublished: '2026-11-02',
  related: [
    {
      path: '/blog/musubi-waikiki',
      label: { en: 'Where to get Spam musubi in Waikiki', ja: 'ワイキキのスパムむすび', ko: '와이키키 스팸 무스비', zh: '威基基午餐肉饭团', es: 'Spam musubi en Waikiki' },
    },
    {
      path: '/blog/waikiki-snacks-grab-and-go',
      label: { en: 'Grab-and-go beach food in Waikiki', ja: 'ワイキキのテイクアウト', ko: '와이키키 테이크아웃', zh: '威基基外带小吃', es: 'Comida para llevar en Waikiki' },
    },
    {
      path: '/blog/best-breakfast-waikiki',
      label: { en: 'Breakfast in Waikiki from 7 AM', ja: 'ワイキキの朝ごはん（7時から）', ko: '와이키키 아침 (7시부터)', zh: '威基基早餐（7点起）', es: 'Desayuno en Waikiki desde las 7 AM' },
    },
  ],
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Spam Musubi vs Onigiri: What’s the Difference?',
      subtitle: 'Same family, different islands: the Japanese rice ball and Hawaii’s favorite grab-and-go snack, explained — and where to eat one for $2.95.',
      date: 'Published November 2026',
      readTime: '4 min read',
      badge: 'Food Explainer',
    },
    intro:
      "Onigiri and Spam musubi are cousins. Onigiri is the Japanese rice ball — usually a triangle or a round, with the filling (salmon, pickled plum, tuna mayo) hidden inside and a sheet of nori around it. Musubi comes from omusubi, another Japanese word for the same rice ball, carried to Hawaii by Japanese immigrant families. In the islands it grew into its own thing: a rectangular block of rice pressed in a mold, topped with a slice of seared Spam and wrapped with a band of nori. At Kona Coffee Donut on Kalākaua Avenue, Spam musubi is $2.95 — here's how the two compare and which one to try first.",
    visitCTA: {
      headline: 'Spam Musubi: $2.95',
      body: 'Spam, Teriyaki Spam or Shiso Wakame $2.95, Egg Spam $3.50, Shrimp Avocado Spam $4.50. 2142 Kalākaua Ave, about 5 minutes from Waikiki Beach, open 7 AM to 9 PM daily.',
      menuLabel: 'See the Full Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'The Short Answer',
        body: 'Four quick differences:',
        bullets: [
          'Shape — onigiri is hand-formed into a triangle or ball; musubi is pressed into a rectangular block',
          'Filling — onigiri hides it inside; Spam musubi puts the Spam on top',
          'Protein — onigiri leans on fish, pickled plum or seaweed; Hawaii musubi leans on Spam, egg and teriyaki',
          'Where you find it — onigiri in Japanese convenience stores; musubi at Hawaii lunch counters, beach stands and cafes',
        ],
        pullout: {
          title: 'First time?',
          body: 'Start with the classic Spam musubi ($2.95). If you like it, the Egg Spam ($3.50) adds a layer of egg between the rice and the Spam.',
        },
      },
      {
        h2: 'Why Hawaii Loves Spam',
        body:
          "Spam became a pantry staple in the islands during and after World War II, and Hawaii still eats more of it per person than any other U.S. state. Pressing it onto rice with a strip of nori turned it into the perfect beach-and-lunchbox food: cheap, filling and easy to eat with one hand.",
      },
      {
        h2: 'Our Musubi Lineup (With Prices)',
        body: 'Every price below is from our register this month:',
        bullets: [
          'Spam musubi — $2.95',
          'Teriyaki Spam musubi — $2.95',
          'Shiso Wakame musubi — $2.95 (no Spam: rice with shiso and seaweed)',
          'Egg Spam musubi — $3.50',
          'Shrimp Avocado Spam musubi — $4.50',
        ],
      },
      {
        h2: 'How to Eat It',
        body:
          'Hold it by the nori band and eat it from the top down, ideally while it is still warm. For breakfast, a Spam musubi and a mochi donut is $6.90 before tax; add a hot 100% Kona coffee ($7.00) if you are starting the day early — we open at 7 AM.',
      },
    ],
    faq: [
      {
        q: 'What is the difference between Spam musubi and onigiri?',
        a: 'Onigiri is a Japanese rice ball, usually triangular, with the filling inside. Spam musubi is Hawaii’s version: rice pressed into a rectangular block, topped with seared Spam and wrapped in a band of nori. Kona Coffee Donut in Waikiki sells Spam musubi for $2.95.',
      },
      {
        q: 'Is musubi Japanese or Hawaiian?',
        a: 'Both. The word comes from omusubi, a Japanese name for a rice ball, brought to Hawaii by Japanese immigrant families; Spam musubi as a pressed rice block with Spam on top is a Hawaii creation.',
      },
      {
        q: 'How much is Spam musubi in Waikiki?',
        a: 'At Kona Coffee Donut, 2142 Kalākaua Ave in Waikiki: Spam and Teriyaki Spam musubi $2.95, Egg Spam $3.50 and Shrimp Avocado Spam $4.50, from 7 AM to 9 PM daily.',
      },
      {
        q: 'Is there a musubi without Spam?',
        a: 'Yes. The Shiso Wakame musubi at Kona Coffee Donut in Waikiki is rice with shiso and seaweed, no Spam, for $2.95.',
      },
      {
        q: 'Where can I get musubi near Waikiki Beach?',
        a: 'Kona Coffee Donut on Kalākaua Avenue, about a 5-minute walk from Waikiki Beach, has Spam musubi from $2.95 and opens at 7 AM every day.',
      },
    ],
    finalCTA: {
      headline: 'Try Hawaii’s Rice Ball Today',
      body: 'Spam musubi $2.95, Egg Spam $3.50. 2142 Kalākaua Ave, open 7 AM – 9 PM daily.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 260-1835',
    },
  },
  ja: {
    hero: { title: 'スパムむすびとおにぎりの違い', subtitle: '日本のおにぎりと、ハワイの定番スパムむすび。違いと、$2.95で食べられる場所。', date: '2026年11月公開', readTime: '読了4分', badge: 'フード解説' },
    intro: 'スパムむすびはおにぎりの親戚です。「むすび」は「おむすび」から来た言葉で、日系移民の家庭がハワイに持ち込みました。ハワイでは型で四角く押したご飯に焼いたスパムをのせ、海苔の帯で巻くスタイルに進化。具が中に入るおにぎりとは、そこが一番の違いです。カラカウア通りのKona Coffee Donutではスパムむすびが$2.95です。',
    visitCTA: { headline: 'スパムむすび $2.95', body: 'スパム・照り焼きスパム・しそわかめ$2.95、エッグスパム$3.50、シュリンプアボカドスパム$4.50。ワイキキビーチから徒歩約5分、毎日朝7時〜夜9時。', menuLabel: 'メニューを見る', directionsLabel: '行き方を確認' },
    sections: [
      { h2: '違いはこの4つ', body: '形、具の位置、具材、売っている場所。', bullets: ['形：おにぎりは三角や丸、むすびは四角いブロック', '具：おにぎりは中、スパムむすびは上', '具材：おにぎりは鮭・梅・ツナマヨ、ハワイのむすびはスパム・卵・照り焼き', '場所：おにぎりはコンビニ、むすびはハワイのランチカウンターやビーチ'] },
      { h2: 'メニューと価格', body: '今月のレジ価格です。', bullets: ['スパムむすび $2.95', '照り焼きスパム $2.95', 'しそわかめ（スパムなし） $2.95', 'エッグスパム $3.50', 'シュリンプアボカドスパム $4.50'] },
      { h2: '食べ方', body: '海苔の帯を持って、温かいうちに上から。朝ごはんならスパムむすび＋モチドーナツで$6.90、100%コナコーヒー（$7.00）もどうぞ。朝7時オープンです。' },
    ],
    faq: [
      { q: 'スパムむすびとおにぎりの違いは？', a: 'おにぎりは具が中に入った三角や丸のご飯。スパムむすびはハワイ版で、四角く押したご飯に焼いたスパムをのせ海苔の帯で巻いたもの。ワイキキのKona Coffee Donutでは$2.95です。' },
      { q: 'ワイキキのスパムむすびはいくら？', a: 'Kona Coffee Donut（2142 Kalākaua Ave）ではスパム・照り焼きスパム$2.95、エッグスパム$3.50、シュリンプアボカドスパム$4.50。毎日朝7時〜夜9時。' },
      { q: 'スパムなしのむすびはありますか？', a: 'はい。しそわかめむすび（$2.95）はスパムなしです。' },
    ],
    finalCTA: { headline: 'ハワイのむすびを今日', body: 'スパムむすび$2.95、エッグスパム$3.50。毎日朝7時〜夜9時。', visitLabel: '今日来店', callLabel: '電話 (808) 260-1835' },
  },
  ko: {
    hero: { title: '스팸 무스비와 오니기리, 뭐가 다를까?', subtitle: '일본 주먹밥과 하와이 명물 스팸 무스비의 차이, 그리고 $2.95에 먹을 수 있는 곳.', date: '2026년 11월 발행', readTime: '4분 분량', badge: '음식 설명' },
    intro: '스팸 무스비는 오니기리의 사촌입니다. "무스비"는 주먹밥을 뜻하는 일본어 "오무스비"에서 왔고, 일본계 이민자 가족이 하와이에 가져왔습니다. 하와이에선 틀로 네모나게 눌러 만든 밥 위에 구운 스팸을 올리고 김 띠로 감싸는 스타일로 발전했죠. 속이 안에 들어가는 오니기리와 가장 큰 차이입니다. 칼라카우아 거리 Kona Coffee Donut에서 스팸 무스비는 $2.95입니다.',
    visitCTA: { headline: '스팸 무스비 $2.95', body: '스팸·데리야키 스팸·시소 와카메 $2.95, 에그 스팸 $3.50, 새우 아보카도 스팸 $4.50. 와이키키 비치에서 도보 약 5분, 매일 아침 7시–밤 9시.', menuLabel: '메뉴 보기', directionsLabel: '길찾기' },
    sections: [
      { h2: '차이점 4가지', body: '모양, 속 위치, 재료, 파는 곳.', bullets: ['모양: 오니기리는 삼각·원형, 무스비는 네모난 블록', '속: 오니기리는 안에, 스팸 무스비는 위에', '재료: 오니기리는 연어·매실·참치마요, 하와이 무스비는 스팸·계란·데리야키', '파는 곳: 오니기리는 일본 편의점, 무스비는 하와이 런치 카운터와 해변'] },
      { h2: '메뉴와 가격', body: '이번 달 매장 가격입니다.', bullets: ['스팸 무스비 $2.95', '데리야키 스팸 $2.95', '시소 와카메 (스팸 없음) $2.95', '에그 스팸 $3.50', '새우 아보카도 스팸 $4.50'] },
    ],
    faq: [
      { q: '스팸 무스비와 오니기리 차이는?', a: '오니기리는 속을 안에 넣은 삼각·원형 주먹밥이고, 스팸 무스비는 하와이식으로 네모나게 누른 밥 위에 구운 스팸을 올리고 김 띠로 감싼 것입니다. 와이키키 Kona Coffee Donut에서 $2.95.' },
      { q: '와이키키 스팸 무스비 가격은?', a: 'Kona Coffee Donut(2142 Kalākaua Ave)에서 스팸·데리야키 스팸 $2.95, 에그 스팸 $3.50, 새우 아보카도 스팸 $4.50. 매일 아침 7시–밤 9시.' },
    ],
    finalCTA: { headline: '오늘 하와이 무스비를', body: '스팸 무스비 $2.95, 에그 스팸 $3.50. 매일 아침 7시–밤 9시.', visitLabel: '오늘 방문', callLabel: '전화 (808) 260-1835' },
  },
  zh: {
    hero: { title: '午餐肉饭团和日式饭团有什么不同？', subtitle: '日本饭团与夏威夷名物午餐肉饭团的区别，以及$2.95就能吃到的地方。', date: '2026年11月发布', readTime: '4分钟', badge: '美食解说' },
    intro: '夏威夷的午餐肉饭团（Spam musubi）是日式饭团的"表亲"。"musubi"来自日语"omusubi"（饭团），由日裔移民带到夏威夷，后来演变成用模具压成长方形的米饭，上面放一片煎过的午餐肉，再用一条海苔包起来。和把馅料包在里面的日式饭团相比，这是最大的不同。卡拉考阿大道的Kona Coffee Donut午餐肉饭团$2.95。',
    visitCTA: { headline: '午餐肉饭团 $2.95', body: '午餐肉、照烧午餐肉、紫苏裙带菜$2.95，鸡蛋午餐肉$3.50，鲜虾牛油果$4.50。距威基基海滩步行约5分钟，每天早7点至晚9点。', menuLabel: '查看菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '四点区别', body: '形状、馅料位置、食材、在哪里买。', bullets: ['形状：日式饭团是三角或圆形，musubi是长方块', '馅料：日式饭团包在里面，午餐肉饭团放在上面', '食材：日式饭团多用三文鱼、梅干、金枪鱼；夏威夷musubi多用午餐肉、鸡蛋、照烧', '在哪买：日式饭团在日本便利店，musubi在夏威夷午餐柜台和海滩'] },
    ],
    faq: [
      { q: '午餐肉饭团和日式饭团有什么区别？', a: '日式饭团馅料包在里面，多为三角形；午餐肉饭团是夏威夷版本，米饭压成长方块，上面放煎午餐肉，用海苔条包住。威基基Kona Coffee Donut售价$2.95。' },
      { q: '威基基的午餐肉饭团多少钱？', a: 'Kona Coffee Donut（2142 Kalākaua Ave）：午餐肉、照烧午餐肉$2.95，鸡蛋午餐肉$3.50，鲜虾牛油果$4.50，每天早7点至晚9点。' },
    ],
    finalCTA: { headline: '今天就来尝尝夏威夷饭团', body: '午餐肉饭团$2.95，鸡蛋午餐肉$3.50。每天早7点至晚9点。', visitLabel: '立即到店', callLabel: '致电 (808) 260-1835' },
  },
  es: {
    hero: { title: 'Spam musubi vs onigiri: ¿cuál es la diferencia?', subtitle: 'La bola de arroz japonesa y el snack favorito de Hawái, explicados — y dónde probarlo por $2.95.', date: 'Noviembre 2026', readTime: '4 min', badge: 'Explicación' },
    intro: 'El onigiri es la bola de arroz japonesa, con el relleno por dentro. El musubi llegó a Hawái con familias inmigrantes japonesas y allí se convirtió en un bloque rectangular de arroz con una lonja de Spam encima y una banda de alga nori. En Kona Coffee Donut, Kalākaua Avenue, el Spam musubi cuesta $2.95.',
    visitCTA: { headline: 'Spam musubi: $2.95', body: 'Spam, Teriyaki Spam o Shiso Wakame $2.95; Egg Spam $3.50. A unos 5 minutos de la playa de Waikiki, de 7 AM a 9 PM.', menuLabel: 'Ver Menú', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Las diferencias', body: 'Forma, relleno y dónde se vende.', bullets: ['Onigiri: triángulo o bola, relleno por dentro', 'Musubi: bloque rectangular, Spam encima', 'Onigiri en tiendas de Japón; musubi en mostradores y playas de Hawái'] },
    ],
    faq: [
      { q: '¿Qué diferencia hay entre Spam musubi y onigiri?', a: 'El onigiri lleva el relleno dentro; el Spam musubi es un bloque de arroz con Spam encima y una banda de nori. En Kona Coffee Donut, Waikiki, cuesta $2.95.' },
    ],
    finalCTA: { headline: 'Prueba el musubi hoy', body: 'Spam musubi $2.95. De 7 AM a 9 PM en Kalākaua Avenue.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 260-1835' },
  },
};

export default function SpamMusubiVsOnigiriPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
