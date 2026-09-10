'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'best-poke-waikiki',
  imageSrc: '/images/blog/best-poke-waikiki.jpg',
  imageAlt: 'Ahi poke bowl with avocado and limu on a picnic table by Waikiki Beach, with an iced Kona coffee',
  schemaHeadline: 'Best Poke in Waikiki (2026): Where Locals Actually Buy Ahi Poke',
  schemaDescription:
    'The best poke in Waikiki and next-door Kapahulu — fish counters, grab-and-go spots and evening bowls — plus what real Hawaiian poke is, how to order it, what it should cost, and where to get dessert after.',
  datePublished: '2026-09-09',
  dateModified: '2026-09-09',
  related: [
    { path: '/blog/must-try-foods-waikiki', label: { en: '10 must-try foods in Waikiki', ja: 'ワイキキで絶対食べたい10品', ko: '와이키키 필수 음식 10가지', zh: '威基基必吃10种美食', es: '10 comidas imperdibles en Waikiki' } },
    { path: '/blog/cheap-eats-waikiki', label: { en: 'Cheap eats in Waikiki', ja: 'ワイキキの安くて美味しい店', ko: '와이키키 가성비 맛집', zh: '威基基平价美食', es: 'Comer barato en Waikiki' } },
    { path: '/blog/best-bingsu-waikiki', label: { en: 'Best bingsu in Waikiki — dessert after poke', ja: 'ワイキキのビンス — ポケの後のデザートに', ko: '와이키키 빙수 — 포케 후 디저트', zh: '威基基雪冰——poke之后的甜品', es: 'El mejor bingsu de Waikiki' } },
    { path: '/blog/best-kona-coffee-waikiki', label: { en: 'Best Kona coffee in Waikiki', ja: 'ワイキキのコナコーヒー', ko: '와이키키 코나 커피', zh: '威基基科纳咖啡', es: 'El mejor café Kona de Waikiki' } },
  ],
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Best Poke in Waikiki (2026): Where Locals Actually Buy It',
      subtitle:
        'Real Hawaiian poke is sold by the pound at fish counters, not assembled from a topping bar. Here is where to get it in and around Waikīkī, how to order, and what to do about dessert.',
      date: 'September 9, 2026',
      readTime: '7 min read',
      badge: 'Waikīkī Food Guide',
    },
    intro:
      'Poke (POH-keh, "to cut crosswise") is Hawaiʻi\'s everyday raw-fish dish: cubed ahi tuna dressed with Hawaiian sea salt, limu (seaweed), sweet Maui onion and, since the plantation era, shoyu and sesame oil. It predates the mainland "poke bowl" chains by a century and tastes nothing like them. In Waikīkī the best poke is not in the tourist restaurants — it is at a handful of fish counters and take-out windows, most of them on the Kapahulu side or a short bus ride toward Ala Moana. This guide lists the places locals actually use, explains the varieties so you can order without guessing, and gives you a realistic price range. We are a doughnut and coffee shop, not a poke shop — but we are two blocks from the beach where you will eat it, and we are where people come for dessert after.',
    visitCTA: {
      headline: 'After the Poke: Dessert on Kalākaua',
      body:
        'Kona Coffee Donut at 2142 Kalākaua Ave — mochi donuts, malasadas, mango or Kona coffee bingsu and 100% Kona cold brew, fresh daily, 7 AM–9 PM. The natural second stop after a poke bowl on the beach.',
      menuLabel: 'View Dessert Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'What "Real" Poke Is (and What It Isn\'t)',
        body:
          'Traditional Hawaiian poke has three things: fresh raw fish cut into cubes, Hawaiian salt, and limu. Sweet onion, green onion, inamona (roasted kukui nut) and chili are the classic additions; shoyu and sesame oil came with Japanese plantation workers and are now standard. It is a side dish or a pūpū — eaten with rice, over rice, or straight from the container with a fork on a tailgate. A mainland "poke bowl" with mango, edamame, crispy onions and Sriracha mayo is a sushi-adjacent salad; it is fine, but it is not what this guide is about.',
        bullets: [
          'Shoyu ahi — the default: ahi, shoyu, sesame oil, onion, green onion. Order this first.',
          'Limu ahi — closest to the pre-contact original: salt, limu, inamona, no shoyu. Briny and clean.',
          'Spicy ahi — ahi bound with a spicy mayo. The most popular with visitors.',
          'Hawaiian-style — salt, chili pepper water, inamona, limu. Hotter and saltier than shoyu.',
          'Tako (octopus), salmon, and hamachi rotate in at most counters; ahi is the benchmark.',
        ],
      },
      {
        h2: 'Best Poke Spots in Waikīkī (Walkable)',
        body:
          'Inside Waikīkī proper the choices are fewer than you would expect, because the good poke is sold from counters that do not have dining rooms. These are the ones worth walking to.',
        bullets: [
          'Maguro Brothers — Japanese-run fish counter with a Waikīkī evening location on Kūhiō Ave. Poke bowls and chirashi made from the same fish they sell at their Chinatown market by day. The most consistent bowl inside Waikīkī.',
          'Ono Seafood (Kapahulu Ave, 12-min walk from east Waikīkī) — a take-out counter that has been a locals\' favorite for decades. Shoyu ahi and spicy ahi bowls, made when you order. Cash-friendly, lines at lunch.',
          'Da Hawaiian Poke Company (Kūhiō Ave area) — a Waikīkī-side option with several fish varieties and standard-sized bowls; good when you don\'t want to leave the neighborhood.',
          'Grocery counters — Foodland Farms at Ala Moana Center and the Waikīkī-side Food Pantry sell poke by the pound from a chilled case. Foodland\'s poke is a genuine local institution; ask for a "poke bowl" and they will scoop it over rice.',
        ],
        pullout: {
          title: 'Local rule',
          body: 'Buy it, then eat it within the hour — poke is a fresh-fish dish, not a leftover. Grab it on the way to the beach, not on the way back.',
        },
      },
      {
        h2: 'Worth the Short Trip: Kapahulu & Ala Moana',
        body:
          'Kapahulu Ave, which runs inland from the Honolulu Zoo, is where Waikīkī locals eat. Ono Seafood is the poke stop; Rainbow Drive-In and Leonard\'s are on the same street for plate lunch and malasadas. Toward Ala Moana, the Foodland Farms counter and the food-court poke stalls are a 10-minute bus ride on Route 8, 20 or 23 from Kūhiō Ave. If you have a car, Tamashiro Market (Kalihi) and the Chinatown fish markets are where restaurants source their ahi — worth it if you want to see poke sold the old way.',
        bullets: [
          'Kapahulu Ave: Ono Seafood, plus Rainbow Drive-In & Leonard\'s next door',
          'Ala Moana: Foodland Farms poke counter, food-court poke stalls (10 min by bus)',
          'Chinatown / Kalihi: Maguro Brothers (daytime), Tamashiro Market — with a car',
        ],
      },
      {
        h2: 'How to Order Poke Like a Local',
        body:
          'Counters sell poke by weight: a quarter pound is a snack, a half pound is a meal, a pound feeds three. Ask for it "over rice" to make it a bowl, or "on the side" to eat with chopsticks. Check the case for fish that looks translucent and deep red, not brown or grey at the edges. Ask what came in today — counters that sell a lot of poke will tell you. Skip the toppings bar if there is one; good ahi does not need crispy onions.',
        bullets: [
          '¼ lb snack · ½ lb meal · 1 lb feeds three',
          '"Over rice" = bowl; "on the side" = pūpū',
          'Look for translucent deep-red ahi with no grey edges',
          'Ask "what came in today?" — the honest answer tells you what to order',
        ],
      },
      {
        h2: 'What Poke Should Cost in Waikīkī',
        body:
          'Fresh ahi is not cheap, and 2026 prices reflect it: expect $14–20 for a standard bowl and $18–26 per pound at a counter. Anything under $12 for an ahi bowl in Waikīkī is usually previously frozen fish or a small portion; anything over $28 for a standard bowl is a hotel markup. Grocery counters are the best value per ounce; evening counters like Maguro Brothers are the best quality per dollar.',
      },
      {
        h2: 'Poke + Dessert: The Waikīkī Afternoon',
        body:
          'The classic local sequence is poke on the beach, then something cold and sweet. Two blocks from Kūhiō Beach on Kalākaua Ave, Kona Coffee Donut does the second half: mango, strawberry or Kona coffee bingsu (milk shaved ice, shareable), fresh malasadas, a box of mochi donuts for the room, or a 100% Kona cold brew to walk with. It is open until 9 PM, so it also works after an evening poke bowl from Maguro Brothers.',
      },
    ],
    faq: [
      {
        q: 'Where is the best poke in Waikiki?',
        a: 'For a bowl inside Waikīkī, Maguro Brothers\' evening counter on Kūhiō Ave; for the classic locals\' take-out, Ono Seafood on Kapahulu Ave (12-minute walk); for value by the pound, the Foodland Farms counter at Ala Moana.',
      },
      {
        q: 'What is the difference between Hawaiian poke and a poke bowl?',
        a: 'Hawaiian poke is cubed raw ahi seasoned with salt, limu, sweet onion and usually shoyu and sesame oil, sold by the pound. A mainland poke bowl is a build-your-own salad with rice, mixed toppings and sauces — a different dish inspired by the original.',
      },
      {
        q: 'How much does poke cost in Waikiki?',
        a: 'Around $14–20 for a standard bowl and $18–26 per pound at a fish counter in 2026. Grocery poke counters are the best value; hotel restaurants are the most expensive.',
      },
      {
        q: 'What kind of poke should I order first?',
        a: 'Shoyu ahi — the default style everyone in Hawaiʻi knows. Try limu ahi second for the most traditional flavor, and spicy ahi if you like spicy-mayo dishes.',
      },
      {
        q: 'Is poke safe to eat in Hawaii?',
        a: 'Yes, from any counter that sells a lot of it — turnover is what keeps it fresh. Eat it within an hour of buying and keep it cold if you are taking it to the beach.',
      },
      {
        q: 'Where can I get dessert near the poke spots?',
        a: 'Kona Coffee Donut at 2142 Kalākaua Ave — bingsu, malasadas, mochi donuts and 100% Kona coffee, two blocks from Kūhiō Beach, open 7 AM–9 PM daily.',
      },
    ],
    finalCTA: {
      headline: 'Poke on the Beach, Dessert on Kalākaua',
      body: 'Bingsu, malasadas, mochi donuts and 100% Kona coffee — the second stop after your poke bowl. Two blocks from the beach.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: {
      title: 'ワイキキのポケおすすめ（2026）：ローカルが実際に買う店',
      subtitle: '本物のハワイアンポケは魚屋のカウンターで量り売り。ワイキキ周辺で買える店、注文の仕方、そしてデザートまで。',
      date: '2026年9月9日',
      readTime: '読了6分',
      badge: 'ワイキキグルメ',
    },
    intro:
      'ポケはハワイの日常食。角切りのアヒ（マグロ）にハワイアンソルト、リム（海藻）、甘い玉ねぎ、醤油とごま油。本土の「ポケボウル」チェーンとは別物です。ワイキキで美味しいポケは観光レストランではなく、カパフル側やアラモアナ方面の魚カウンターにあります。私たちはドーナツとコーヒーの店ですが、ビーチから2ブロック、ポケの後のデザートに寄ってもらう場所です。',
    visitCTA: {
      headline: 'ポケの後はカラカウア通りでデザート',
      body: 'コナコーヒードーナツ（2142 Kalākaua Ave）— モチドーナツ、マラサダ、マンゴーやコナコーヒーのビンス、100%コナコールドブリュー。毎日7時〜21時。',
      menuLabel: 'デザートメニュー',
      directionsLabel: '行き方を確認',
    },
    sections: [
      { h2: '本物のポケとは', body: '生魚、ハワイアンソルト、リムが基本。玉ねぎ、イナモナ（ククイナッツ）、唐辛子が定番の追加。醤油とごま油は日系移民由来。', bullets: ['醤油アヒ — まずこれ', 'リムアヒ — 最も伝統的', 'スパイシーアヒ — 観光客に人気', 'ハワイアンスタイル — 塩と唐辛子水'] },
      { h2: 'ワイキキで歩いて行ける店', body: '', bullets: ['Maguro Brothers — クヒオ通りの夜営業カウンター。ワイキキ内で最も安定', 'Ono Seafood — カパフル通り、徒歩12分。ローカルの定番テイクアウト', 'Da Hawaiian Poke Company — クヒオ通り周辺', 'Foodland Farms（アラモアナ）/ Food Pantry — 量り売り'], pullout: { title: 'ローカルのルール', body: '買ったら1時間以内に。ビーチへ行く途中に買う。' } },
      { h2: 'カパフル＆アラモアナ', body: 'カパフル通りはローカルの食事エリア。Ono Seafoodの隣にRainbow Drive-InとLeonard\'s。アラモアナへはクヒオ通りからバス8・20・23番で10分。' },
      { h2: '注文の仕方', body: '量り売り：1/4ポンドはおやつ、1/2ポンドで1食。「over rice」でボウルに。赤く透明感のある魚を選ぶ。「今日入ったのは？」と聞くのが一番。' },
      { h2: '相場', body: '2026年の目安：ボウル$14〜20、量り売り1ポンド$18〜26。$12以下は冷凍魚か少量、$28以上はホテル価格。' },
      { h2: 'ポケ＋デザート', body: 'ビーチでポケ、その後カラカウア通りで冷たい甘いもの。ビンス、マラサダ、モチドーナツ、コナコールドブリュー。21時まで営業。' },
    ],
    faq: [
      { q: 'ワイキキで一番のポケは？', a: 'ワイキキ内ならMaguro Brothers（クヒオ通り夜）、ローカル定番はOno Seafood（カパフル）、コスパはFoodland Farms。' },
      { q: 'ハワイアンポケとポケボウルの違いは？', a: 'ハワイアンポケは塩・リム・醤油で味付けした角切りアヒの量り売り。ポケボウルは本土発のカスタムサラダ。' },
      { q: '値段は？', a: 'ボウル$14〜20、1ポンド$18〜26。' },
      { q: 'ポケの後のデザートは？', a: 'コナコーヒードーナツ（2142 Kalākaua Ave）でビンスやマラサダを。' },
    ],
    finalCTA: { headline: 'ビーチでポケ、カラカウアでデザート', body: 'ビンス、マラサダ、モチドーナツ、100%コナコーヒー。ビーチから2ブロック。', visitLabel: '今日来店', callLabel: '電話 (808) 304-1808' },
  },
  ko: {
    hero: {
      title: '와이키키 포케 맛집 (2026): 로컬이 실제로 사는 곳',
      subtitle: '진짜 하와이안 포케는 토핑바가 아니라 생선 카운터에서 무게로 팝니다. 와이키키 주변 어디서 사고, 어떻게 주문하고, 디저트는 어디서.',
      date: '2026년 9월 9일',
      readTime: '6분',
      badge: '와이키키 맛집 가이드',
    },
    intro:
      '포케는 하와이의 일상 음식. 참치 깍둑썰기에 하와이 소금, 리무(해초), 단 마우이 양파, 간장과 참기름. 본토 포케볼 체인과는 다릅니다. 와이키키의 진짜 포케는 관광 식당이 아니라 카파훌루 쪽이나 알라모아나 방향의 생선 카운터에 있습니다. 저희는 도넛·커피 가게지만 비치에서 두 블록, 포케 먹고 디저트 먹으러 오는 곳입니다.',
    visitCTA: {
      headline: '포케 다음엔 칼라카우아에서 디저트',
      body: '코나커피도넛(2142 Kalākaua Ave) — 모찌도넛, 말라사다, 망고·코나 커피 빙수, 100% 코나 콜드브루. 매일 7AM–9PM.',
      menuLabel: '디저트 메뉴 보기',
      directionsLabel: '길찾기',
    },
    sections: [
      { h2: '진짜 포케란', body: '생선, 하와이 소금, 리무가 기본. 양파, 이나모나(쿠쿠이넛), 고추가 전통 추가. 간장·참기름은 일본계 이민자 영향.', bullets: ['쇼유 아히 — 처음이면 이것', '리무 아히 — 가장 전통적', '스파이시 아히 — 관광객 인기', '하와이안 스타일 — 소금과 칠리워터'] },
      { h2: '와이키키 도보권', body: '', bullets: ['Maguro Brothers — 쿠히오 애비뉴 저녁 카운터. 와이키키 안에서 가장 안정적', 'Ono Seafood — 카파훌루, 도보 12분. 로컬 테이크아웃 정석', 'Da Hawaiian Poke Company — 쿠히오 근처', 'Foodland Farms(알라모아나) / Food Pantry — 무게 판매'], pullout: { title: '로컬 규칙', body: '사면 한 시간 안에. 비치 가는 길에 사세요.' } },
      { h2: '카파훌루 & 알라모아나', body: '카파훌루는 로컬 식사 거리. Ono Seafood 옆에 Rainbow Drive-In, Leonard\'s. 알라모아나는 쿠히오에서 8·20·23번 버스 10분.' },
      { h2: '주문법', body: '무게 판매: 1/4파운드 간식, 1/2파운드 한 끼. "over rice"면 볼. 붉고 투명한 생선 고르기. "오늘 뭐 들어왔어요?"가 최고의 질문.' },
      { h2: '가격대', body: '2026년 기준 볼 $14–20, 파운드당 $18–26. $12 이하는 냉동이거나 소량, $28 이상은 호텔 가격.' },
      { h2: '포케 + 디저트', body: '비치에서 포케, 그다음 칼라카우아에서 차갑고 단 것. 빙수, 말라사다, 모찌도넛, 코나 콜드브루. 9PM까지.' },
    ],
    faq: [
      { q: '와이키키 최고 포케는?', a: '와이키키 안은 Maguro Brothers(쿠히오 저녁), 로컬 정석은 Ono Seafood(카파훌루), 가성비는 Foodland Farms.' },
      { q: '하와이안 포케와 포케볼 차이?', a: '하와이안 포케는 소금·리무·간장 양념 참치 무게 판매. 포케볼은 본토식 커스텀 샐러드.' },
      { q: '가격?', a: '볼 $14–20, 파운드 $18–26.' },
      { q: '포케 후 디저트는?', a: '코나커피도넛(2142 Kalākaua Ave) 빙수·말라사다.' },
    ],
    finalCTA: { headline: '비치에서 포케, 칼라카우아에서 디저트', body: '빙수, 말라사다, 모찌도넛, 100% 코나 커피. 비치 두 블록.', visitLabel: '오늘 방문', callLabel: '전화 (808) 304-1808' },
  },
  zh: {
    hero: {
      title: '威基基最好的Poke（2026）：本地人真正去买的地方',
      subtitle: '真正的夏威夷poke在鱼档按磅卖，不是自选配料台。威基基周边哪里买、怎么点、甜品去哪。',
      date: '2026年9月9日',
      readTime: '6分钟',
      badge: '威基基美食指南',
    },
    intro:
      'Poke是夏威夷的日常菜：金枪鱼块配夏威夷海盐、海藻limu、甜洋葱，以及酱油和麻油。和本土的“poke碗”连锁完全不同。威基基最好的poke不在游客餐厅，而在Kapahulu一侧或往Ala Moana方向的鱼档。我们是甜甜圈和咖啡店，不卖poke，但离海滩两个街区，是吃完poke来吃甜品的地方。',
    visitCTA: {
      headline: 'Poke之后，来卡拉卡瓦吃甜品',
      body: 'Kona Coffee Donut（2142 Kalākaua Ave）— 麻糬甜甜圈、马拉萨达、芒果或科纳咖啡雪冰、100%科纳冷萃。每天7AM–9PM。',
      menuLabel: '查看甜品菜单',
      directionsLabel: '获取路线',
    },
    sections: [
      { h2: '什么是真正的Poke', body: '生鱼、夏威夷盐、limu海藻是基础；洋葱、inamona（石栗）、辣椒是经典加料；酱油和麻油来自日裔移民。', bullets: ['酱油金枪鱼 — 先点这个', 'Limu金枪鱼 — 最传统', '辣味金枪鱼 — 游客最爱', '夏威夷式 — 盐和辣椒水'] },
      { h2: '威基基步行可达', body: '', bullets: ['Maguro Brothers — 库希奥大道晚间档口，威基基内最稳定', 'Ono Seafood — Kapahulu大道，步行12分钟，本地人外卖首选', 'Da Hawaiian Poke Company — 库希奥附近', 'Foodland Farms（Ala Moana）/ Food Pantry — 按磅卖'], pullout: { title: '本地规矩', body: '买了一小时内吃完。去海滩路上买，别回程买。' } },
      { h2: 'Kapahulu 与 Ala Moana', body: 'Kapahulu是本地人吃饭的街，Ono Seafood旁边就是Rainbow Drive-In和Leonard\'s。去Ala Moana从库希奥坐8、20、23路公交10分钟。' },
      { h2: '怎么点', body: '按重量：1/4磅是零食，1/2磅一顿饭。“over rice”做成碗。选颜色深红透亮的鱼。问一句“今天来了什么鱼？”最管用。' },
      { h2: '价格', body: '2026年：一碗$14–20，按磅$18–26。低于$12多是冻鱼或量少，高于$28是酒店价。' },
      { h2: 'Poke + 甜品', body: '海滩吃poke，再去卡拉卡瓦吃冰的甜的：雪冰、马拉萨达、麻糬甜甜圈、科纳冷萃。营业到9PM。' },
    ],
    faq: [
      { q: '威基基哪家poke最好？', a: '威基基内Maguro Brothers（库希奥晚间），本地经典Ono Seafood（Kapahulu），性价比Foodland Farms。' },
      { q: '夏威夷poke和poke碗的区别？', a: '夏威夷poke是盐、limu、酱油调味的金枪鱼块按磅卖；poke碗是本土自选沙拉。' },
      { q: '价格？', a: '一碗$14–20，一磅$18–26。' },
      { q: 'poke之后的甜品？', a: 'Kona Coffee Donut（2142 Kalākaua Ave）雪冰、马拉萨达。' },
    ],
    finalCTA: { headline: '海滩吃Poke，卡拉卡瓦吃甜品', body: '雪冰、马拉萨达、麻糬甜甜圈、100%科纳咖啡。离海滩两个街区。', visitLabel: '立即到店', callLabel: '致电 (808) 304-1808' },
  },
  es: {
    hero: {
      title: 'El mejor poke de Waikiki (2026): donde lo compran los locales',
      subtitle: 'El poke hawaiano de verdad se vende por libra en pescaderías, no en una barra de toppings. Dónde comprarlo cerca de Waikīkī, cómo pedirlo y dónde ir de postre.',
      date: '9 de septiembre de 2026',
      readTime: '6 min',
      badge: 'Guía gastronómica',
    },
    intro:
      'El poke es el plato diario de pescado crudo de Hawaiʻi: atún ahi en cubos con sal marina hawaiana, alga limu, cebolla dulce, shoyu y aceite de sésamo. No se parece a las cadenas de "poke bowl" del continente. En Waikīkī, el mejor poke está en mostradores de pescado del lado de Kapahulu o hacia Ala Moana. Nosotros somos una tienda de donas y café, no de poke — pero estamos a dos cuadras de la playa y somos la parada de postre.',
    visitCTA: {
      headline: 'Después del poke: postre en Kalākaua',
      body: 'Kona Coffee Donut (2142 Kalākaua Ave) — mochi donuts, malasadas, bingsu de mango o café Kona y cold brew 100% Kona. 7 AM–9 PM.',
      menuLabel: 'Ver menú de postres',
      directionsLabel: 'Cómo llegar',
    },
    sections: [
      { h2: 'Qué es el poke de verdad', body: 'Pescado crudo, sal hawaiana y limu. Cebolla, inamona y chile son los añadidos clásicos; shoyu y sésamo llegaron con los inmigrantes japoneses.', bullets: ['Shoyu ahi — pide este primero', 'Limu ahi — el más tradicional', 'Spicy ahi — el favorito de los visitantes'] },
      { h2: 'Dónde en Waikīkī', body: '', bullets: ['Maguro Brothers — mostrador nocturno en Kūhiō Ave', 'Ono Seafood — Kapahulu Ave, 12 min a pie, clásico local', 'Da Hawaiian Poke Company — zona Kūhiō', 'Foodland Farms (Ala Moana) — por libra'], pullout: { title: 'Regla local', body: 'Cómelo en la hora siguiente. Cómpralo de camino a la playa.' } },
      { h2: 'Cómo pedir', body: '¼ lb es snack, ½ lb una comida. "Over rice" para bowl. Busca atún rojo translúcido. Pregunta qué llegó hoy.' },
      { h2: 'Precio', body: '$14–20 por bowl, $18–26 por libra en 2026.' },
      { h2: 'Poke + postre', body: 'Poke en la playa y luego bingsu, malasadas o mochi donuts en Kalākaua Ave, hasta las 9 PM.' },
    ],
    faq: [
      { q: '¿Dónde está el mejor poke de Waikiki?', a: 'Maguro Brothers (Kūhiō, noche), Ono Seafood (Kapahulu) y el mostrador de Foodland Farms.' },
      { q: '¿Poke hawaiano vs poke bowl?', a: 'El hawaiano es atún en cubos con sal, limu y shoyu por libra; el bowl es una ensalada personalizable.' },
      { q: '¿Precio?', a: '$14–20 por bowl.' },
      { q: '¿Postre cerca?', a: 'Kona Coffee Donut, 2142 Kalākaua Ave.' },
    ],
    finalCTA: { headline: 'Poke en la playa, postre en Kalākaua', body: 'Bingsu, malasadas, mochi donuts y café 100% Kona. A dos cuadras de la playa.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 304-1808' },
  },
};

export default function BestPokeWaikikiPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
