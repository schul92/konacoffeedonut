'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'korean-corn-dog-honolulu-viral',
  imageSrc: '/images/blog/korean-corn-dog-honolulu-viral.jpg',
  imageAlt: 'Korean corn dog in Honolulu with a mozzarella cheese pull, next to a potato-coated corn dog',
  schemaHeadline: 'Korean Corn Dogs in Honolulu: Why They Went Viral & Where to Get One (2026)',
  schemaDescription:
    'Why Korean corn dogs took over TikTok, what makes the rice-flour batter and mozzarella cheese pull different, all 6 styles explained, and where to get a fresh-fried one in Honolulu and Waikiki.',
  datePublished: '2026-09-09',
  dateModified: '2026-09-09',
  related: [
    { path: '/blog/korean-corn-dog-waikiki-guide', label: { en: 'Korean Corn Dog in Waikiki: the 3 main styles & how to eat one', ja: 'ワイキキで韓国コーンドッグ（ハットグ）ガイド', ko: '와이키키 한국 핫도그 가이드', zh: '威基基韩国玉米热狗指南', es: 'Guía del Korean Corn Dog en Waikiki' } },
    { path: '/korean-corn-dog-waikiki', label: { en: 'Our Korean corn dog menu (6 styles)', ja: '韓国コーンドッグメニュー（6種）', ko: '한국 핫도그 메뉴 (6종)', zh: '韩式热狗菜单（6款）', es: 'Nuestro menú de corn dogs coreanos' } },
    { path: '/blog/korean-food-waikiki', label: { en: 'Korean food in Waikiki: what to eat', ja: 'ワイキキの韓国料理ガイド', ko: '와이키키 한식 가이드', zh: '威基基韩国美食', es: 'Comida coreana en Waikiki' } },
    { path: '/blog/must-try-foods-waikiki', label: { en: '10 must-try foods in Waikiki', ja: 'ワイキキで絶対食べたい10品', ko: '와이키키 필수 음식 10가지', zh: '威基基必吃10种美食', es: '10 comidas imperdibles en Waikiki' } },
  ],
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Korean Corn Dogs in Honolulu: Why They Went Viral (and Where to Get the Cheese Pull)',
      subtitle:
        'Rice-flour batter, a foot-long mozzarella stretch, sugar on a hot dog. Here is why the Korean corn dog became the most-filmed street food on the internet — and where to get one fresh out of the fryer in Honolulu.',
      date: 'September 9, 2026',
      readTime: '7 min read',
      badge: 'K-Food · Honolulu',
    },
    intro:
      'Search "Korean corn dog" on TikTok and you get billions of views of the same three seconds: a bite, a slow pull, and mozzarella stretching further than seems physically reasonable. The Korean corn dog (hotdog / 핫도그, often spelled "hatdog" or "hotteok-style corn dog" on menus) is not the cornmeal corn dog from a mainland state fair. It is a yeasted rice-flour batter, fried to a crackly shell, wrapped around cheese, sausage, or both, and finished with sugar, ketchup, and mustard. Honolulu — with the largest Korean community in Hawaiʻi and a constant stream of Japanese and Korean visitors — was always going to get it. This guide explains why it went viral, what the six styles actually are, how to spot a good one, and where to get a fresh-fried Korean corn dog in Honolulu without leaving Waikīkī.',
    visitCTA: {
      headline: 'Fresh-Fried Korean Corn Dogs on Kalākaua Ave',
      body:
        'Kona Coffee Donut fries Korean corn dogs to order in Waikīkī — Classic Sausage, Mozzarella Cheese, Half & Half, Potato Dog, Crispy Ramen and Sugar Dog. Two blocks from Waikīkī Beach, open 7 AM – 9 PM daily, walk-in only.',
      menuLabel: 'See Corn Dog Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'Why Korean Corn Dogs Went Viral',
        body:
          'Three things made the Korean corn dog the perfect short-video food. First, the cheese pull: low-moisture mozzarella melts into long, elastic strands that stay stretchy for a few minutes after frying, so the "pull" is repeatable on camera. Second, the visible texture: the batter is rolled in panko, diced potato, or crushed ramen before frying, so every stick looks different and audibly crunches. Third, the sweet-savory shock — sugar on a fried hot dog — which is exactly the kind of "wait, what?" reaction that gets a video shared.\n\nThe format took off in Seoul around 2016–2017 with chains like Myungrang Hotdog, reached Los Angeles and New York by 2019, and became a TikTok fixture during 2020–2021 when home cooks started filming their own cheese pulls. By 2023 "Korean corn dog near me" was a top-rising food search in the US, and it has not slowed down.',
        bullets: [
          'The mozzarella cheese pull is repeatable on camera — ideal for 3-second video hooks',
          'Panko, potato-cube and ramen coatings give each stick a visibly different crunch',
          'Sugar + ketchup + mustard on a hot dog triggers a "wait, what?" reaction',
          'Seoul (2016) → LA/NYC (2019) → TikTok (2020–21) → everywhere (2023+)',
        ],
      },
      {
        h2: 'What Makes It Different From an American Corn Dog',
        body:
          'An American corn dog is a hot dog dipped in cornmeal batter — sweet, cakey, uniform. A Korean corn dog uses a wheat-and-rice-flour batter (some shops proof it with yeast, which is why the crust puffs and gets chewy inside like a doughnut), and the filling is the star: full mozzarella, a sausage, or half of each. The batter is then rolled in a crunchy coating, fried at a higher temperature for a shattering shell, and dressed after frying. The sugar step is not optional in Korea — it is how the original street carts served it.',
        bullets: [
          'Batter: rice + wheat flour (often yeasted) vs plain cornmeal',
          'Filling: mozzarella, sausage, or half & half vs sausage only',
          'Coating: panko, potato cubes, crushed ramen vs none',
          'Finish: sugar dusting + ketchup + mustard vs mustard only',
          'Texture: crackly shell, chewy interior vs soft cake',
        ],
        pullout: {
          title: 'How to spot a good one',
          body:
            'Fried to order (not sitting under a lamp), an even golden shell with no dark patches, and a cheese pull that stretches without snapping. If the stick was fried more than 10 minutes ago, the mozzarella has already tightened up.',
        },
      },
      {
        h2: 'The 6 Korean Corn Dog Styles, Explained',
        body:
          'Menus in Honolulu tend to converge on the same six. Here is what each one actually is and who it is for.',
        bullets: [
          'Classic Sausage — a whole sausage in the rice-flour batter. The most "corn dog-like" one and the safest for kids.',
          'Mozzarella Cheese — a full stick of mozzarella, no sausage. This is the cheese-pull video. Eat it within 5 minutes.',
          'Half & Half — half mozzarella on top, half sausage on the bottom. The one to order if it is your first time.',
          'Potato Dog — batter rolled in diced potato before frying, so it is crunchy like fries on the outside. The most photogenic.',
          'Crispy Ramen — batter rolled in crushed instant ramen. Salty, craggy, extra loud crunch.',
          'Sugar Dog — the classic sausage dog finished with an extra-heavy sugar coating, hotteok-style. Sweet-savory at its purest.',
        ],
      },
      {
        h2: 'Where to Get Korean Corn Dogs in Honolulu',
        body:
          'Honolulu has more Korean corn dog options than any other city in Hawaiʻi, but most of them are in Kakaʻako, Ala Moana, Keʻeaumoku (Honolulu\'s Koreatown strip) or Kapahulu — a 10–20 minute drive or bus ride from Waikīkī hotels. If you are staying in Waikīkī, the closest fresh-fried option is Kona Coffee Donut at 2142 Kalākaua Ave, across from the beach side of Kalākaua near Saratoga Rd. All six styles above are fried to order, and the same counter does mochi donuts, malasadas, bingsu and 100% Kona coffee, so it works as a one-stop snack run.',
        bullets: [
          'Waikīkī: Kona Coffee Donut, 2142 Kalākaua Ave — fried to order, 6 styles, 7 AM–9 PM daily',
          'Keʻeaumoku St / Koreatown: several Korean snack shops and marts within a few blocks of Ala Moana Center',
          'Kakaʻako & Kapahulu: pop-ups and food-hall stalls — quality varies, check that they fry to order',
          'Tip: order before 9 PM — most Waikīkī snack spots close earlier than the bars',
        ],
      },
      {
        h2: 'How to Eat One (So the Cheese Pull Works)',
        body:
          'Eat it immediately. The mozzarella only stretches while it is hot, and the shell only stays crisp for a few minutes. Hold the stick at the base with the napkin, bite from the top so you break the crust first, then pull the stick slowly away from your mouth for the stretch. Film it on the first bite — by the third the cheese is already firming up. Use all three condiments: the sugar is what makes the ketchup and mustard taste right.',
        bullets: [
          'Eat within 5 minutes of frying',
          'First bite from the top, pull slowly for the stretch',
          'Sugar + ketchup + mustard together, not one at a time',
          'Pair with something cold and bitter — an iced Americano or Kona cold brew cuts the richness',
        ],
      },
      {
        h2: 'Korean Corn Dog + Kona Coffee: The Waikīkī Pairing',
        body:
          'A Korean corn dog is rich, salty and sweet all at once, which is exactly why it goes so well with an iced 100% Kona coffee or a cold brew — bitter, clean and cold. If you want to lean into the sweetness instead, a brown sugar boba or a strawberry matcha latte is the classic K-cafe pairing. Either way, you are eating it on Kalākaua Ave two minutes from the sand, which is not something Seoul can offer.',
      },
    ],
    faq: [
      {
        q: 'Where can I get a Korean corn dog in Honolulu?',
        a: 'In Waikīkī, Kona Coffee Donut at 2142 Kalākaua Ave fries Korean corn dogs to order (Classic Sausage, Mozzarella, Half & Half, Potato, Crispy Ramen, Sugar Dog), 7 AM–9 PM daily. Elsewhere in Honolulu, look along Keʻeaumoku St near Ala Moana and in Kakaʻako food halls.',
      },
      {
        q: 'Why are Korean corn dogs so popular on TikTok?',
        a: 'The mozzarella cheese pull is a reliable, dramatic visual that fits a 3-second video hook, the potato and ramen coatings crunch audibly, and sugar on a hot dog gets a "wait, what?" reaction that drives shares.',
      },
      {
        q: 'What is the difference between a Korean corn dog and a regular corn dog?',
        a: 'Korean corn dogs use a rice-and-wheat-flour batter (often yeasted) instead of cornmeal, can be filled with mozzarella, sausage or both, are rolled in panko, potato cubes or crushed ramen before frying, and are finished with sugar plus ketchup and mustard.',
      },
      {
        q: 'What are the different types of Korean corn dogs?',
        a: 'The six common styles are Classic Sausage, Mozzarella Cheese, Half & Half (cheese + sausage), Potato Dog (diced-potato coating), Crispy Ramen (crushed-ramen coating) and Sugar Dog (extra sugar coating).',
      },
      {
        q: 'Why do Koreans put sugar on corn dogs?',
        a: 'The original Seoul street carts dusted the fried batter with sugar the way hotteok and twisted doughnuts are — the sweet crust against the salty sausage or cheese is the signature flavor, and ketchup and mustard are added on top of it.',
      },
      {
        q: 'Is a Korean corn dog the same as a "hotdog" or "hatdog"?',
        a: 'Yes. In Korean the item is simply called hotdog (핫도그), which is why menus sometimes spell it "hatdog" or "K-hotdog". It refers to the battered, fried stick — not a bun-style hot dog.',
      },
      {
        q: 'How long does the cheese pull last?',
        a: 'About 3–5 minutes after frying. Mozzarella tightens as it cools, so order it fried fresh and take the first bite right away.',
      },
    ],
    finalCTA: {
      headline: 'Get the Cheese Pull on Kalākaua Ave',
      body: 'Six Korean corn dog styles fried to order, two blocks from Waikīkī Beach. Walk in — no reservation, no app.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: {
      title: 'ホノルルで韓国コーンドッグ（ハットグ）：なぜバズったのか、どこで食べられるか',
      subtitle: '米粉の衣、伸びるモッツァレラ、砂糖がけ。TikTokで世界一撮影されたストリートフードをワイキキで揚げたてで。',
      date: '2026年9月9日',
      readTime: '読了6分',
      badge: 'Kフード・ホノルル',
    },
    intro:
      '韓国コーンドッグ（핫도그／ハットグ）はアメリカのコーンミール衣とは別物。米粉と小麦粉の衣をカリッと揚げ、中はモッツァレラかソーセージ、仕上げに砂糖・ケチャップ・マスタード。ソウル発（2016年頃）→LA・NY（2019年）→TikTok（2020〜21年）で世界に広まりました。ホノルルではワイキキのカラカウア通りで揚げたてが食べられます。',
    visitCTA: {
      headline: 'カラカウア通りで揚げたてハットグ',
      body: 'コナコーヒードーナツでは6種類（クラシック・モッツァレラ・ハーフ&ハーフ・ポテト・クリスピーラーメン・シュガー）を注文ごとに揚げています。ワイキキビーチから2ブロック、毎日7時〜21時。',
      menuLabel: 'ハットグメニュー',
      directionsLabel: '行き方を確認',
    },
    sections: [
      { h2: 'なぜバズったのか', body: 'チーズが何度でも伸びる（動画映え）、ポテトやラーメン衣で見た目と音が違う、ホットドッグに砂糖という意外性。この3つが短尺動画に完璧でした。', bullets: ['再現できるチーズプル', '衣ごとに違う食感', '甘じょっぱい驚き'] },
      { h2: 'アメリカ式との違い', body: '衣は米粉+小麦粉（発酵させる店も）、中身はモッツァレラ／ソーセージ／ハーフ、パン粉・ポテト・ラーメンをまぶして高温で揚げ、砂糖をかけて仕上げます。', bullets: ['米粉衣 vs コーンミール', 'チーズ入り vs ソーセージのみ', '砂糖+ケチャップ+マスタード'] },
      { h2: '6種類のスタイル', body: 'ホノルルのメニューはほぼこの6種に集約されます。', bullets: ['クラシックソーセージ', 'モッツァレラ — チーズプルの本命', 'ハーフ&ハーフ — 初めてならこれ', 'ポテトドッグ — 角切りポテト衣', 'クリスピーラーメン — 砕いたラーメン衣', 'シュガードッグ — 砂糖たっぷり'] },
      { h2: 'ホノルルで食べられる場所', body: 'ケエアウモク通り（コリアタウン）やカカアコにも店はありますが、ワイキキ滞在ならコナコーヒードーナツ（2142 Kalākaua Ave）が最寄り。6種すべて揚げたてです。' },
      { h2: '食べ方', body: '揚げてから5分以内に。上からかじって、ゆっくり引いてチーズを伸ばす。撮影は一口目で。' },
      { h2: 'コナコーヒーとの相性', body: '濃厚な味にはアイスの100%コナコーヒーやコールドブリューがよく合います。' },
    ],
    faq: [
      { q: 'ホノルルでハットグはどこで？', a: 'ワイキキならコナコーヒードーナツ（2142 Kalākaua Ave、7時〜21時）。他にケエアウモク通り周辺やカカアコのフードホール。' },
      { q: 'なぜTikTokで人気？', a: '伸びるチーズ、衣の食感、砂糖の意外性が短尺動画向きだから。' },
      { q: '普通のコーンドッグとの違いは？', a: '米粉衣、チーズ入り、ポテトやラーメンの衣、砂糖がけ。' },
      { q: 'なぜ砂糖をかける？', a: 'ソウルの屋台の伝統。甘い衣と塩気の対比が特徴です。' },
    ],
    finalCTA: { headline: 'カラカウア通りでチーズプル', body: 'ワイキキビーチから2ブロック。予約不要、直接どうぞ。', visitLabel: '今日来店', callLabel: '電話 (808) 304-1808' },
  },
  ko: {
    hero: {
      title: '호놀룰루 한국 핫도그: 왜 전 세계에서 터졌고, 어디서 먹을까',
      subtitle: '쌀가루 튀김옷, 길게 늘어나는 모짜렐라, 설탕 솔솔. 틱톡에서 가장 많이 찍힌 길거리 음식을 와이키키에서 갓 튀겨 드립니다.',
      date: '2026년 9월 9일',
      readTime: '6분',
      badge: 'K-푸드 · 호놀룰루',
    },
    intro:
      '한국식 핫도그는 미국 콘도그와 완전히 다릅니다. 쌀가루+밀가루 반죽을 바삭하게 튀기고, 속은 모짜렐라나 소시지, 마무리는 설탕·케첩·머스터드. 서울(2016년경)→LA·뉴욕(2019)→틱톡(2020~21)을 거쳐 전 세계로 퍼졌고, 호놀룰루에서는 와이키키 칼라카우아 애비뉴에서 갓 튀긴 핫도그를 먹을 수 있습니다.',
    visitCTA: {
      headline: '칼라카우아 애비뉴 갓 튀긴 한국 핫도그',
      body: '코나커피도넛은 6종(클래식 소시지·모짜렐라·반반·감자·크리스피 라면·설탕 핫도그)을 주문 즉시 튀깁니다. 와이키키 비치 두 블록, 매일 7AM–9PM.',
      menuLabel: '핫도그 메뉴 보기',
      directionsLabel: '길찾기',
    },
    sections: [
      { h2: '왜 바이럴이 됐나', body: '반복 가능한 치즈 늘리기, 감자·라면 튀김옷의 시각적·청각적 식감, 핫도그에 설탕이라는 반전. 숏폼에 완벽한 3요소였습니다.' },
      { h2: '미국 콘도그와 차이', body: '쌀가루 반죽(발효하는 곳도), 모짜렐라/소시지/반반 속, 빵가루·감자·라면 코팅, 설탕+케첩+머스터드 마무리.' },
      { h2: '6가지 스타일', body: '호놀룰루 메뉴는 대부분 이 6종.', bullets: ['클래식 소시지', '모짜렐라 — 치즈 늘리기 그 자체', '반반 — 처음이면 이것', '감자 핫도그', '크리스피 라면', '설탕 핫도그'] },
      { h2: '호놀룰루 어디서', body: '케에아우모쿠(코리아타운)나 카카아코에도 있지만 와이키키에 묵는다면 코나커피도넛(2142 Kalākaua Ave)이 가장 가깝고 6종 모두 즉석 튀김입니다.' },
      { h2: '먹는 법', body: '튀긴 후 5분 안에. 위부터 베어 물고 천천히 당겨서 늘리기. 촬영은 첫 입에.' },
      { h2: '코나 커피 페어링', body: '진한 맛엔 아이스 100% 코나 커피나 콜드브루가 잘 맞습니다.' },
    ],
    faq: [
      { q: '호놀룰루 한국 핫도그 어디서?', a: '와이키키 코나커피도넛(2142 Kalākaua Ave, 7AM–9PM). 그 외 케에아우모쿠 스트리트, 카카아코 푸드홀.' },
      { q: '왜 틱톡에서 유명한가?', a: '치즈 늘리기, 튀김옷 식감, 설탕 반전이 숏폼에 최적이라서.' },
      { q: '미국 콘도그와 차이?', a: '쌀가루 반죽, 치즈 속, 감자·라면 코팅, 설탕.' },
    ],
    finalCTA: { headline: '칼라카우아에서 치즈 늘리기', body: '와이키키 비치 두 블록. 예약 없이 바로 방문.', visitLabel: '오늘 방문', callLabel: '전화 (808) 304-1808' },
  },
  zh: {
    hero: {
      title: '檀香山韩式玉米热狗：为什么爆红，去哪里吃',
      subtitle: '米粉外皮、超长拉丝马苏里拉、撒糖粉。全网拍得最多的街头小吃，在威基基现炸现吃。',
      date: '2026年9月9日',
      readTime: '6分钟',
      badge: 'K-Food · 檀香山',
    },
    intro:
      '韩式玉米热狗与美式玉米面热狗完全不同：米粉+面粉面糊炸至酥脆，内馅是马苏里拉或香肠，最后撒糖、挤番茄酱和芥末。从首尔（2016年前后）到洛杉矶、纽约（2019年）再到TikTok（2020–21年）风靡全球。在檀香山，威基基卡拉卡瓦大道就能吃到现炸的。',
    visitCTA: {
      headline: '卡拉卡瓦大道现炸韩式热狗',
      body: 'Kona Coffee Donut 提供6款（经典香肠、马苏里拉、半半、薯块、脆拉面、糖粉热狗），下单现炸。距威基基海滩两个街区，每天7AM–9PM。',
      menuLabel: '查看热狗菜单',
      directionsLabel: '获取路线',
    },
    sections: [
      { h2: '为什么爆红', body: '可反复拍摄的拉丝、薯块和拉面外壳的视觉与声音、热狗撒糖的反差——三点正好适合短视频。' },
      { h2: '与美式的区别', body: '米粉面糊（部分店发酵）、马苏里拉/香肠/半半内馅、面包糠·薯块·拉面外壳、糖粉+番茄酱+芥末。' },
      { h2: '6种款式', body: '檀香山菜单基本就这6种。', bullets: ['经典香肠', '马苏里拉——拉丝本尊', '半半——第一次就点这个', '薯块热狗', '脆拉面热狗', '糖粉热狗'] },
      { h2: '檀香山哪里吃', body: 'Keʻeaumoku街（韩国城）和Kakaʻako也有，但住威基基的话 Kona Coffee Donut（2142 Kalākaua Ave）最近，6款全部现炸。' },
      { h2: '怎么吃', body: '出锅5分钟内吃。从顶部咬下，慢慢拉开拉丝，第一口就拍。' },
      { h2: '搭配科纳咖啡', body: '浓郁口味配冰的100%科纳咖啡或冷萃最解腻。' },
    ],
    faq: [
      { q: '檀香山哪里有韩式热狗？', a: '威基基 Kona Coffee Donut（2142 Kalākaua Ave，7AM–9PM）；另有 Keʻeaumoku 街、Kakaʻako 美食广场。' },
      { q: '为什么在TikTok上火？', a: '拉丝、外壳口感、撒糖反差都适合短视频。' },
      { q: '和美式玉米热狗的区别？', a: '米粉面糊、芝士内馅、薯块/拉面外壳、撒糖。' },
    ],
    finalCTA: { headline: '来卡拉卡瓦大道拉丝', body: '距威基基海滩两个街区，无需预约。', visitLabel: '立即到店', callLabel: '致电 (808) 304-1808' },
  },
  es: {
    hero: {
      title: 'Korean Corn Dogs en Honolulu: por qué se hicieron virales y dónde comerlos',
      subtitle: 'Masa de harina de arroz, mozzarella que se estira, azúcar encima. El street food más filmado de internet, recién frito en Waikīkī.',
      date: '9 de septiembre de 2026',
      readTime: '6 min',
      badge: 'K-Food · Honolulu',
    },
    intro:
      'El corn dog coreano no es el de feria: masa de arroz y trigo frita hasta quedar crujiente, relleno de mozzarella, salchicha o mitad y mitad, y terminado con azúcar, kétchup y mostaza. De Seúl (2016) a Los Ángeles y Nueva York (2019) y a TikTok (2020–21). En Honolulu, lo encuentras recién frito en Kalākaua Ave, Waikīkī.',
    visitCTA: {
      headline: 'Corn dogs coreanos recién fritos en Kalākaua Ave',
      body: 'Kona Coffee Donut fríe 6 estilos al momento (Salchicha clásica, Mozzarella, Mitad y mitad, Papa, Ramen crujiente, Sugar Dog). A dos cuadras de la playa, 7 AM–9 PM.',
      menuLabel: 'Ver menú',
      directionsLabel: 'Cómo llegar',
    },
    sections: [
      { h2: 'Por qué se hizo viral', body: 'El estiramiento de queso repetible, la textura visible de papa o ramen y la sorpresa del azúcar sobre un hot dog: perfecto para video corto.' },
      { h2: 'Diferencia con el americano', body: 'Masa de arroz (a veces con levadura), relleno de mozzarella o salchicha, cobertura de panko, papa o ramen, y azúcar + kétchup + mostaza.' },
      { h2: 'Los 6 estilos', body: 'Los menús de Honolulu coinciden en estos.', bullets: ['Salchicha clásica', 'Mozzarella', 'Mitad y mitad', 'Papa', 'Ramen crujiente', 'Sugar Dog'] },
      { h2: 'Dónde en Honolulu', body: 'Hay opciones en Keʻeaumoku St y Kakaʻako, pero desde Waikīkī lo más cercano es Kona Coffee Donut (2142 Kalākaua Ave), todo frito al momento.' },
      { h2: 'Cómo comerlo', body: 'En los 5 minutos siguientes a freírlo. Muerde desde arriba y tira despacio.' },
    ],
    faq: [
      { q: '¿Dónde comer corn dog coreano en Honolulu?', a: 'Kona Coffee Donut, 2142 Kalākaua Ave, Waikīkī, 7 AM–9 PM.' },
      { q: '¿Por qué es viral?', a: 'Por el estiramiento de mozzarella, la textura y el azúcar.' },
      { q: '¿Diferencia con el corn dog americano?', a: 'Masa de arroz, relleno de queso, cobertura de papa o ramen, azúcar.' },
    ],
    finalCTA: { headline: 'El cheese pull, en Kalākaua Ave', body: 'A dos cuadras de la playa. Sin reserva.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 304-1808' },
  },
};

export default function KoreanCornDogHonoluluViralPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
