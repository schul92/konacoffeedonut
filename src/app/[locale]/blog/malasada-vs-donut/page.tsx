'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

// Prices checked against the Clover POS on 2026-11-17:
// classic malasada 1pc 3.95 / 3pc 11.25 / 6pc 22.50 / 12pc 45.00; cream malasada 4.95 / 14.25 / 28.50 / 57.00;
// malasada ice cream sandwich 8.95; mochi donut 1pc 3.95; Kona Coffee 7.00.
const config = {
  slug: 'malasada-vs-donut',
  imageSrc: '/images/blog/malasada-vs-donut.jpeg',
  imageAlt: 'A sugar-coated malasada with no hole next to a ring-shaped mochi donut, side by side',
  schemaHeadline: 'Malasada vs Donut: What Is the Difference?',
  schemaDescription:
    'A malasada is a Portuguese-Hawaiian fried dough: an egg-rich yeast dough with no hole, rolled in sugar instead of glazed. How it differs from a regular donut in shape, dough, coating and how it is eaten, and where to try one in Waikiki from $3.95.',
  datePublished: '2026-11-17',
  related: [
    {
      path: '/blog/what-is-a-malasada',
      label: { en: 'What is a malasada? The full story', ja: 'マラサダとは？', ko: '말라사다란?', zh: '什么是马拉萨达？', es: '¿Qué es una malasada?' },
    },
    {
      path: '/blog/malasada-vs-mochi-donut',
      label: { en: 'Malasada vs mochi donut', ja: 'マラサダとモチドーナツの違い', ko: '말라사다 vs 모찌도넛', zh: '马拉萨达 vs 麻糬甜甜圈', es: 'Malasada vs mochi donut' },
    },
    {
      path: '/blog/mochi-donut-vs-regular-donut',
      label: { en: 'Mochi donut vs regular donut', ja: 'モチドーナツと普通のドーナツの違い', ko: '모찌도넛 vs 일반 도넛', zh: '麻糬甜甜圈 vs 普通甜甜圈', es: 'Mochi donut vs donut normal' },
    },
    {
      path: '/blog/best-malasadas-waikiki',
      label: { en: 'Best malasadas in Waikiki', ja: 'ワイキキのおすすめマラサダ', ko: '와이키키 말라사다 추천', zh: '威基基最佳马拉萨达', es: 'Mejores malasadas en Waikiki' },
    },
  ],
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Malasada vs Donut: What Is the Difference?',
      subtitle: 'Same fryer, different pastry. Shape, dough, coating and how each one is eaten.',
      date: 'Published November 2026',
      readTime: '5 min read',
      badge: 'Explainer',
    },
    intro:
      'A malasada is a Portuguese-Hawaiian fried dough: a round of egg-rich yeast dough with no hole, fried until golden and rolled in sugar. A regular American donut is usually a ring, or a filled round, finished with a glaze or frosting. So a malasada is a kind of donut in the broad sense, but it is its own pastry, with a different shape, a richer dough, a sugar coat instead of a glaze, and a habit of being eaten the day it is fried. Here is how the two compare, and where to try a malasada in Waikiki.',
    visitCTA: {
      headline: 'Malasadas From $3.95',
      body: 'Classic $3.95, cream-filled $4.95, on Kalākaua Avenue. About 5 minutes from Waikiki Beach, open 7 AM to 9 PM daily.',
      menuLabel: 'See the Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'The Short Answer',
        body: 'If you only read one part, read this:',
        bullets: [
          'Shape — a malasada is a round with no hole; the classic donut is a ring',
          'Dough — a malasada is always a yeast dough enriched with eggs; a donut can be yeast-raised or a cake batter',
          'Coating — a malasada is rolled in granulated sugar; a donut is usually glazed, iced or frosted',
          'Filling — a classic malasada is plain inside; Hawaii added cream-filled versions',
          'Origin — the malasada came from Portugal to Hawaii; the ring donut is an American bakery staple',
        ],
        pullout: {
          title: 'Is a malasada a donut?',
          body: 'Loosely, yes: both are fried sweet dough. In Hawaii nobody calls it a donut, though. It is a malasada.',
        },
      },
      {
        h2: 'Shape and Dough',
        body:
          'A regular donut is cut as a ring, which fries evenly and gives a lot of surface for glaze. Bakeries make them two ways: yeast-raised, which is light and chewy, or cake-style, which is denser and crumbly. A malasada skips the hole. The dough is a yeast dough with more egg in it than a typical donut dough, shaped into a round and fried whole, so the outside turns thin and golden while the inside stays soft, airy and a little eggy. That richer, bread-like interior is the part people remember.',
      },
      {
        h2: 'Sugar, Not Glaze',
        body:
          'Most donuts are finished wet: a sugar glaze, chocolate icing, sprinkles. A malasada is finished dry. It is rolled in granulated sugar, so the first bite has a light crunch from the sugar before you reach the soft dough. Cinnamon sugar is the most common variation. The traditional malasada has nothing inside; filled malasadas are a Hawaii habit, with the filling piped in after frying.',
        bullets: [
          'Classic at Kona Coffee Donut: Original, Cinnamon, Ube — $3.95',
          'Cream-filled: Custard, Ube Cream, Nutella, Macadamia Nut, Coconut, Red Bean — $4.95',
        ],
      },
      {
        h2: 'Where Each One Comes From',
        body:
          'The malasada comes from Portugal, from the islands of Madeira and the Azores. Portuguese families who came to work on Hawaii\'s sugar plantations in the late 1800s brought the recipe with them. It was a Shrove Tuesday treat, a way to use up eggs, sugar and fat before Lent, and Hawaii still calls that day Malasada Day. Over the generations it became a local staple that visitors now look for by name. The ring donut took a different road, growing up in American bakeries and coffee shops into the glazed and frosted dozen most people picture.',
      },
      {
        h2: 'Which One Should You Try in Hawaii?',
        body:
          'If you are visiting, try the malasada, because it is the one that belongs to Hawaii. Start with a classic so you can taste the dough and the sugar, then a cream-filled one if you want something richer. We do not make regular ring donuts at Kona Coffee Donut. Our case holds malasadas and mochi donuts, which are a third thing again: a ring of eight chewy balls made with rice flour. Many people get one of each and compare.',
        bullets: [
          'Classic Malasada — $3.95 (3 for $11.25, 6 for $22.50, 12 for $45.00)',
          'Cream Malasada — $4.95 (3 for $14.25, 6 for $28.50, 12 for $57.00)',
          'Malasada Ice Cream Sandwich — $8.95',
          'Mochi donut — $3.95, 24 flavors',
          'Kona Coffee — $7.00',
        ],
        pullout: {
          title: 'Eat it the same day',
          body: 'A malasada is at its best the day it is made, while the sugar is still crisp. Buy it when you plan to eat it.',
        },
      },
    ],
    faq: [
      {
        q: 'What is the difference between a malasada and a donut?',
        a: 'A malasada is a Portuguese-Hawaiian fried dough made from an egg-rich yeast dough, shaped as a round with no hole and rolled in granulated sugar. A regular donut is usually a ring, can be yeast-raised or cake-style, and is typically glazed or frosted.',
      },
      {
        q: 'Is a malasada just a donut without a hole?',
        a: 'Not quite. Besides the shape, the dough has more egg, which makes the inside richer and more bread-like, and it is coated in dry sugar rather than a glaze.',
      },
      {
        q: 'Do malasadas have filling?',
        a: 'The traditional malasada is plain inside. In Hawaii, cream-filled versions are popular. Kona Coffee Donut has classic malasadas for $3.95 and cream-filled ones (Custard, Ube Cream, Nutella, Macadamia Nut, Coconut, Red Bean) for $4.95.',
      },
      {
        q: 'Where do malasadas come from?',
        a: 'From Portugal. Portuguese immigrants from Madeira and the Azores brought them to Hawaii in the late 1800s, when they came to work on the sugar plantations.',
      },
      {
        q: 'Is a malasada the same as a mochi donut?',
        a: 'No. A malasada is a yeast dough round rolled in sugar. A mochi donut is a ring of eight small balls made with rice flour, with a chewy, bouncy texture and a glaze on top.',
      },
      {
        q: 'Where can I try a malasada in Waikiki?',
        a: 'Kona Coffee Donut at 2142 Kalākaua Ave, about a 5-minute walk from Waikiki Beach, sells classic malasadas for $3.95 and cream-filled malasadas for $4.95, 7 AM to 9 PM daily.',
      },
    ],
    finalCTA: {
      headline: 'Try a Malasada on Kalākaua',
      body: 'Classic $3.95, cream-filled $4.95. Open 7 AM – 9 PM daily.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 260-1835',
    },
  },
  ja: {
    hero: { title: 'マラサダとドーナツの違いは？', subtitle: '形、生地、仕上げ、食べ方。同じ揚げ菓子でも別のお菓子です。', date: '2026年11月公開', readTime: '読了4分', badge: '解説' },
    intro: 'マラサダは、ポルトガルからハワイに伝わった揚げ菓子です。卵を多く使ったイースト生地を穴のない丸い形で揚げ、グラニュー糖をまぶします。一般的なアメリカのドーナツはリング形で、グレーズやアイシングで仕上げます。広い意味ではマラサダもドーナツの仲間ですが、形も生地も仕上げも違う別のお菓子です。',
    visitCTA: { headline: 'マラサダ $3.95〜', body: 'クラシック$3.95、クリーム入り$4.95。ワイキキビーチから徒歩約5分、毎日朝7時〜夜9時。', menuLabel: 'メニューを見る', directionsLabel: '行き方を確認' },
    sections: [
      { h2: 'ひと目でわかる違い', body: '主な違いは次のとおりです。', bullets: ['形：マラサダは穴のない丸形、ドーナツはリング形が基本', '生地：マラサダは卵の多いイースト生地、ドーナツはイースト生地またはケーキ生地', '仕上げ：マラサダは砂糖をまぶす、ドーナツはグレーズやアイシング', '中身：伝統的なマラサダは何も入れない。クリーム入りはハワイで広まったスタイル'] },
      { h2: '生地と食感', body: 'マラサダは卵の多い生地を丸ごと揚げるので、外は薄くきつね色、中はふんわりとパンのように軽い食感です。表面の砂糖が最初のひと口にシャリッとした食感を加えます。' },
      { h2: 'どこから来たお菓子？', body: 'マラサダはポルトガルのマデイラ島とアゾレス諸島が発祥です。1800年代後半、砂糖きび農園で働くためにハワイへ渡ったポルトガル系移民がレシピを持ち込みました。四旬節前の火曜日に食べる習慣があり、ハワイでは今もその日を「マラサダ・デー」と呼びます。' },
      { h2: 'ワイキキで食べるなら', body: 'ハワイに来たら、まずマラサダを。Kona Coffee Donutでは普通のリングドーナツは作っておらず、マラサダとモチドーナツをご用意しています。', bullets: ['Classic Malasada $3.95（3個$11.25、6個$22.50、12個$45.00）', 'Cream Malasada $4.95（Custard、Ube Cream、Nutella、Macadamia Nut、Coconut、Red Bean）', 'Malasada Ice Cream Sandwich $8.95', 'モチドーナツ $3.95（24種類）'] },
    ],
    faq: [
      { q: 'マラサダとドーナツの違いは何ですか？', a: 'マラサダは卵の多いイースト生地を穴のない丸形で揚げ、砂糖をまぶしたポルトガル発祥・ハワイ名物の揚げ菓子です。一般的なドーナツはリング形で、グレーズやアイシングで仕上げます。' },
      { q: 'マラサダに中身は入っていますか？', a: '伝統的なマラサダは中に何も入っていません。ハワイではクリーム入りも人気で、Kona Coffee Donutではクラシック$3.95、クリーム入り$4.95です。' },
      { q: 'マラサダとモチドーナツは同じですか？', a: 'いいえ。マラサダはイースト生地の丸い揚げ菓子、モチドーナツは米粉を使った8つの玉がつながったリング形で、もちもちした食感です。' },
      { q: 'ワイキキでマラサダはどこで食べられますか？', a: 'Kona Coffee Donut（2142 Kalākaua Ave、ワイキキビーチから徒歩約5分）で、毎日朝7時〜夜9時に販売しています。' },
    ],
    finalCTA: { headline: 'カラカウア通りでマラサダを', body: 'クラシック$3.95、クリーム入り$4.95。毎日朝7時〜夜9時。', visitLabel: '今日来店', callLabel: '電話 (808) 260-1835' },
  },
  ko: {
    hero: { title: '말라사다와 도넛, 뭐가 다를까?', subtitle: '모양, 반죽, 마무리, 먹는 법까지. 같은 튀김 과자지만 다른 디저트입니다.', date: '2026년 11월 발행', readTime: '4분 분량', badge: '가이드' },
    intro: '말라사다는 포르투갈에서 하와이로 건너온 튀김 과자입니다. 달걀이 많이 들어간 이스트 반죽을 구멍 없이 둥글게 튀겨 설탕에 굴립니다. 일반적인 미국식 도넛은 링 모양이고 글레이즈나 아이싱으로 마무리합니다. 넓게 보면 말라사다도 도넛의 한 종류지만, 모양도 반죽도 마무리도 다른 별개의 디저트입니다.',
    visitCTA: { headline: '말라사다 $3.95부터', body: '클래식 $3.95, 크림 $4.95. 와이키키 비치에서 도보 약 5분, 매일 오전 7시–오후 9시.', menuLabel: '메뉴 보기', directionsLabel: '길찾기' },
    sections: [
      { h2: '한눈에 보는 차이', body: '핵심만 정리하면 이렇습니다.', bullets: ['모양: 말라사다는 구멍 없는 둥근 모양, 도넛은 링 모양이 기본', '반죽: 말라사다는 달걀이 많이 들어간 이스트 반죽, 도넛은 이스트 반죽 또는 케이크 반죽', '마무리: 말라사다는 설탕에 굴리고, 도넛은 글레이즈나 아이싱', '속: 전통 말라사다는 속이 비어 있고, 크림을 넣는 방식은 하와이에서 퍼진 스타일'] },
      { h2: '반죽과 식감', body: '말라사다는 달걀이 많은 반죽을 통째로 튀기기 때문에 겉은 얇고 노릇하며 속은 빵처럼 폭신합니다. 겉에 묻은 설탕이 첫입에 바삭한 식감을 더합니다.' },
      { h2: '어디에서 왔을까', body: '말라사다는 포르투갈의 마데이라와 아조레스 제도에서 시작됐습니다. 1800년대 후반 하와이 사탕수수 농장에서 일하러 온 포르투갈 이민자들이 레시피를 가져왔습니다. 사순절 전 화요일에 먹던 음식이라 하와이에서는 지금도 그날을 "말라사다 데이"라고 부릅니다.' },
      { h2: '와이키키에서 먹는다면', body: '하와이에 왔다면 말라사다부터 드셔 보세요. Kona Coffee Donut에서는 일반 링 도넛은 만들지 않고, 말라사다와 모찌도넛을 판매합니다.', bullets: ['Classic Malasada $3.95 (3개 $11.25, 6개 $22.50, 12개 $45.00)', 'Cream Malasada $4.95 (Custard, Ube Cream, Nutella, Macadamia Nut, Coconut, Red Bean)', 'Malasada Ice Cream Sandwich $8.95', '모찌도넛 $3.95 (24가지 맛)'] },
    ],
    faq: [
      { q: '말라사다와 도넛의 차이는 무엇인가요?', a: '말라사다는 달걀이 많이 들어간 이스트 반죽을 구멍 없이 둥글게 튀겨 설탕에 굴린, 포르투갈에서 유래한 하와이 명물입니다. 일반 도넛은 링 모양이고 글레이즈나 아이싱으로 마무리합니다.' },
      { q: '말라사다에는 속이 들어 있나요?', a: '전통 말라사다는 속이 없습니다. 하와이에서는 크림을 넣은 것도 인기이며, Kona Coffee Donut에서는 클래식 $3.95, 크림 $4.95입니다.' },
      { q: '말라사다와 모찌도넛은 같은 건가요?', a: '아니요. 말라사다는 이스트 반죽을 둥글게 튀긴 것이고, 모찌도넛은 쌀가루로 만든 작은 공 8개가 이어진 링 모양으로 쫀득한 식감입니다.' },
      { q: '와이키키에서 말라사다는 어디서 먹을 수 있나요?', a: 'Kona Coffee Donut (2142 Kalākaua Ave, 와이키키 비치에서 도보 약 5분)에서 매일 오전 7시부터 오후 9시까지 판매합니다.' },
    ],
    finalCTA: { headline: '칼라카우아에서 말라사다 한 입', body: '클래식 $3.95, 크림 $4.95. 매일 오전 7시–오후 9시.', visitLabel: '오늘 방문하기', callLabel: '전화 (808) 260-1835' },
  },
  zh: {
    hero: { title: '马拉萨达和甜甜圈有什么区别？', subtitle: '形状、面团、外层和吃法都不一样。', date: '2026年11月发布', readTime: '阅读约3分钟', badge: '科普' },
    intro: '马拉萨达（Malasada）是从葡萄牙传到夏威夷的油炸甜点：用鸡蛋含量较高的酵母面团做成没有洞的圆形，炸到金黄后裹上砂糖。常见的美式甜甜圈是环形的，表面淋糖霜或巧克力酱。广义上马拉萨达也算甜甜圈的一种，但形状、面团和外层都不同。',
    visitCTA: { headline: '马拉萨达 $3.95起', body: '经典款$3.95，奶油夹心$4.95。距威基基海滩步行约5分钟，每天早7点至晚9点。', menuLabel: '查看菜单', directionsLabel: '查看路线' },
    sections: [
      { h2: '主要区别', body: '简单来说：', bullets: ['形状：马拉萨达是没有洞的圆形，甜甜圈多为环形', '面团：马拉萨达用鸡蛋较多的酵母面团，甜甜圈有酵母款和蛋糕款', '外层：马拉萨达裹砂糖，甜甜圈多淋糖霜', '内馅：传统马拉萨达没有馅，奶油夹心是夏威夷流行的做法'] },
      { h2: '它从哪里来', body: '马拉萨达源自葡萄牙的马德拉岛和亚速尔群岛。19世纪后期，前往夏威夷甘蔗种植园工作的葡萄牙移民把配方带了过来，如今已成为夏威夷的代表性甜点。' },
      { h2: '在威基基哪里吃', body: 'Kona Coffee Donut 不做普通的环形甜甜圈，店里有马拉萨达和麻糬甜甜圈。', bullets: ['Classic Malasada $3.95（3个$11.25，6个$22.50，12个$45.00）', 'Cream Malasada $4.95（Custard、Ube Cream、Nutella、Macadamia Nut、Coconut、Red Bean）', 'Malasada Ice Cream Sandwich $8.95', '麻糬甜甜圈 $3.95（24种口味）'] },
    ],
    faq: [
      { q: '马拉萨达和甜甜圈有什么区别？', a: '马拉萨达用鸡蛋较多的酵母面团做成没有洞的圆形，炸好后裹砂糖，源自葡萄牙，是夏威夷名点。普通甜甜圈多为环形，表面淋糖霜。' },
      { q: '马拉萨达有馅吗？', a: '传统款没有馅。夏威夷也流行奶油夹心款，Kona Coffee Donut 经典款$3.95，奶油夹心$4.95。' },
      { q: '在威基基哪里可以吃到马拉萨达？', a: 'Kona Coffee Donut（2142 Kalākaua Ave，距威基基海滩步行约5分钟），每天早7点至晚9点。' },
    ],
    finalCTA: { headline: '来卡拉考阿大道尝马拉萨达', body: '经典款$3.95，奶油夹心$4.95。每天早7点至晚9点。', visitLabel: '今天来店', callLabel: '致电 (808) 260-1835' },
  },
  es: {
    hero: { title: 'Malasada vs donut: ¿cuál es la diferencia?', subtitle: 'Forma, masa, cobertura y cómo se come cada una.', date: 'Publicado en noviembre de 2026', readTime: '3 min de lectura', badge: 'Guía' },
    intro: 'La malasada es una masa frita de origen portugués que llegó a Hawái: una masa de levadura rica en huevo, redonda y sin agujero, frita hasta dorarse y rebozada en azúcar. El donut americano suele ser un aro con glaseado. En sentido amplio la malasada es un tipo de donut, pero cambia la forma, la masa y la cobertura.',
    visitCTA: { headline: 'Malasadas desde $3.95', body: 'Clásica $3.95, rellena de crema $4.95. A unos 5 minutos de la playa de Waikiki, abierto de 7 AM a 9 PM todos los días.', menuLabel: 'Ver el menú', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Las diferencias principales', body: 'En pocas palabras:', bullets: ['Forma: la malasada es redonda y sin agujero; el donut suele ser un aro', 'Masa: la malasada lleva una masa de levadura con más huevo; el donut puede ser de levadura o tipo bizcocho', 'Cobertura: la malasada se reboza en azúcar; el donut se glasea', 'Relleno: la malasada tradicional no lleva relleno; las rellenas de crema son costumbre de Hawái'] },
      { h2: 'De dónde viene', body: 'La malasada nació en Madeira y las Azores, en Portugal. A finales del siglo XIX, los inmigrantes portugueses que llegaron a trabajar en las plantaciones de azúcar de Hawái trajeron la receta, y hoy es uno de los dulces más conocidos de las islas.' },
      { h2: 'Dónde probarla en Waikiki', body: 'En Kona Coffee Donut no hacemos donuts de aro normales: tenemos malasadas y mochi donuts.', bullets: ['Classic Malasada $3.95 (3 por $11.25, 6 por $22.50, 12 por $45.00)', 'Cream Malasada $4.95 (Custard, Ube Cream, Nutella, Macadamia Nut, Coconut, Red Bean)', 'Malasada Ice Cream Sandwich $8.95', 'Mochi donut $3.95 (24 sabores)'] },
    ],
    faq: [
      { q: '¿Cuál es la diferencia entre una malasada y un donut?', a: 'La malasada es una masa de levadura rica en huevo, redonda y sin agujero, frita y rebozada en azúcar; es de origen portugués y típica de Hawái. El donut normal suele ser un aro glaseado.' },
      { q: '¿Dónde puedo probar una malasada en Waikiki?', a: 'En Kona Coffee Donut, 2142 Kalākaua Ave, a unos 5 minutos a pie de la playa de Waikiki, de 7 AM a 9 PM todos los días. Clásica $3.95, rellena de crema $4.95.' },
    ],
    finalCTA: { headline: 'Prueba una malasada en Kalākaua', body: 'Clásica $3.95, rellena de crema $4.95. Abierto de 7 AM a 9 PM.', visitLabel: 'Visítanos hoy', callLabel: 'Llamar (808) 260-1835' },
  },
};

export default function MalasadaVsDonutPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
