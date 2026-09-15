'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'late-night-dessert-waikiki',
  imageSrc: '/images/blog/late-night-dessert-waikiki.jpeg',
  imageAlt: 'Late night dessert in Waikiki — mochi donuts, bingsu and canned boba on the counter at Kona Coffee Donut after dark',
  schemaHeadline: 'Late Night Dessert in Waikiki: Open Until 9 PM Daily at Kona Coffee Donut',
  schemaDescription:
    'Dessert open late in Waikiki: Kona Coffee Donut, 2142 Kalākaua Ave, serves mochi donuts, malasadas, bingsu, sealed boba cans and Korean corn dogs until 9 PM every day — 5 minutes from Waikiki Beach.',
  datePublished: '2026-09-15',
  related: [
    {
      path: '/blog/best-bingsu-waikiki',
      label: {
        en: 'Best Bingsu in Waikiki: every flavor, ranked',
        ja: 'ワイキキのビンス（かき氷）全種ガイド',
        ko: '와이키키 빙수 전 메뉴 가이드',
        zh: '威基基刨冰（Bingsu）全口味指南',
        es: 'El mejor bingsu de Waikiki: todos los sabores',
      },
    },
    {
      path: '/blog/boba-waikiki',
      label: {
        en: 'Boba in Waikiki: the six $8.95 canned milk teas',
        ja: 'ワイキキのボバ：缶入りミルクティー6種',
        ko: '와이키키 보바: 캔 밀크티 6종',
        zh: '威基基珍珠奶茶：6种罐装奶茶',
        es: 'Boba en Waikiki: seis tés en lata a $8.95',
      },
    },
    {
      path: '/blog/must-try-foods-waikiki',
      label: {
        en: 'Must-try foods in Waikiki (with prices)',
        ja: 'ワイキキで絶対食べたいもの',
        ko: '와이키키 꼭 먹어야 할 음식',
        zh: '威基基必吃美食清单',
        es: 'Qué comer en Waikiki: imprescindibles',
      },
    },
  ],
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Late Night Dessert in Waikiki: Open Until 9 PM',
      subtitle: 'Mochi donuts, bingsu, malasadas, sealed boba cans and Korean corn dogs — still on the counter when the rest of the strip has gone dark.',
      date: 'Published September 15, 2026',
      readTime: '5 min read',
      badge: 'Open Late',
    },
    intro:
      "It's 8 PM in Waikiki. Dinner is done, the sun is gone, and someone at the table says the word dessert. Then you check your phone: the bakeries closed at five, the malasada spots closed at six, and what's left is a hotel lobby cookie or a $19 slice at a steakhouse. Kona Coffee Donut on Kalākaua Avenue is the exception. We stay open until 9 PM every single day, with the full counter running — mochi donuts, malasadas, milk bingsu, sealed boba milk tea cans, Korean rice corn dogs, and Kona coffee for anyone who needs to stay up. Here's exactly what's waiting for you tonight, how much it costs, and how to time the walk so you get the best of it.",
    visitCTA: {
      headline: 'Dessert Open Until 9 PM — Every Day',
      body:
        "Kona Coffee Donut, 2142 Kalākaua Ave, about 5 minutes on foot from Waikiki Beach. Walk-in counter service, no reservations, open 7 AM to 9 PM daily — including Sundays and holidays.",
      menuLabel: 'See the Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'Why Waikiki dessert options disappear after 6 PM',
        body:
          "Waikiki runs on a beach schedule. Bakeries and coffee shops open at dawn for the surf crowd and wind down by late afternoon; most malasada and shave-ice counters follow the sun and close between 5 and 6 PM. After that, dessert means a restaurant dessert menu — a full sit-down, a wait, and a check that looks like a second dinner. Searching “dessert near me open now” at 8 PM usually turns up convenience stores and ice-cream chains. We built our hours around that gap. Being open until 9 PM daily means the post-dinner walk down Kalākaua actually ends somewhere worth stopping.",
      },
      {
        h2: "What's on the counter at 8 PM",
        body:
          "Everything on the menu is available until close — we don't switch to a reduced evening list. What people actually order after dinner:",
        bullets: [
          'Mochi donuts — $3.95 each, 3 for $11.25, 6 for $22.50, a dozen for $45. Twenty-four flavors including Ube, Matcha, Nutella, Cookies & Creme, Black Sesame, Yuzu, Injeolmi, Taro, Milk Tea, Pistachio, Strawberry and Mango',
          'Malasadas — Original, Cinnamon or Ube at $3.95; filled Custard, Ube Cream, Nutella, Macadamia, Coconut or Red Bean at $4.95',
          'Milk bingsu — Azuki, Strawberry, Pineapple, Mango, Ube, Kona Coffee or Green Tea, $15.95, built for sharing',
          'Hawaiian bingsu — Waikiki Rainbow, Paradise Lilikoi, Volcano Island, Coco Head, Tropical Jungle, $12.95',
          'Boba milk tea cans — Brown Sugar, Ube, Milk Tea, Coffee, Thai Tea or Matcha, $8.95, sealed to go',
          'Korean rice corn dogs — from $6.99; Whole Mozzarella $8.99, Potato Mozzarella $9.99, fried to order',
          'Kona coffee $7, Kona cold brew $6.95, Kona affogato $8.50, hot chocolate $6.50, smoothies $12.95',
        ],
        pullout: {
          title: 'The 8 PM order that never misses',
          body:
            "One milk bingsu for the table ($15.95), a three-pack of mochi donuts to walk back with ($11.25), and a Brown Sugar boba can for whoever is still thirsty ($8.95). Dessert for three or four people, no reservation, out the door in ten minutes.",
        },
      },
      {
        h2: 'Bingsu for two after dinner',
        body:
          "If you've had a big dinner, bingsu is the dessert that makes sense: a bowl of shaved milk snow that's mostly air, topped with fruit, azuki, or Kona coffee, with condensed milk on the side. One $15.95 milk bingsu is genuinely enough for two people — most couples share one and finish it. The Kona Coffee bingsu is the evening favorite (sweet, cold, a little bitter), and Mango or Strawberry is the pick if you want something that tastes like the beach you just left. The Hawaiian line at $12.95 — Waikiki Rainbow, Paradise Lilikoi, Volcano Island, Coco Head, Tropical Jungle — leans tropical and fruity. Mochi Land, the drink and dessert counter inside the shop, builds each bowl to order, so give it a few minutes and grab a table.",
      },
      {
        h2: 'Grab-and-go for the hotel room',
        body:
          "A lot of our late-night business is people picking up dessert for the lanai. Three things travel best:",
        bullets: [
          'A dozen mochi donuts ($45) — mix all 24 flavors; they hold up fine on the walk and still taste right in the morning with hotel coffee',
          'Boba milk tea cans ($8.95) — sealed at the counter, so nothing spills in the bag on the walk back; Ube and Brown Sugar are caffeine-free if you actually want to sleep',
          'Filled malasadas ($4.95) — Custard, Ube Cream or Nutella, boxed to order; Original and Cinnamon are $3.95',
        ],
      },
      {
        h2: 'How to time it: last call and freshness',
        body:
          "We close at 9 PM sharp, and the last bingsu and corn-dog orders go in a few minutes before that, so aim to be at the counter by 8:45 PM if you want anything made to order. Mochi donuts and malasadas are made in-house every morning, never frozen, and by evening the case is whatever is left of that day's batch — which means the popular flavors (Ube, Matcha, Nutella) can sell through on busy nights. If you have your heart set on a specific flavor, earlier is safer; if you're flexible, the case at 8 PM is still deep. Corn dogs and affogatos are always fried and pulled to order, so those are as fresh at 8:50 PM as they are at noon. It's walk-in counter service only — no reservations, no app, no line-skipping — and in the evening the line is usually short.",
      },
    ],
    faq: [
      {
        q: 'Is there a dessert place in Waikiki open late?',
        a: 'Yes. Kona Coffee Donut at 2142 Kalākaua Ave, Honolulu, HI 96815 is open 7 AM to 9 PM every day, serving mochi donuts, malasadas, bingsu, sealed boba milk tea cans and Korean corn dogs until close. It is about a 5-minute walk from Waikiki Beach; call (808) 304-1808.',
      },
      {
        q: 'What time does Kona Coffee Donut close?',
        a: 'Kona Coffee Donut closes at 9 PM daily and opens at 7 AM. The full menu is served until close; made-to-order items like bingsu and corn dogs should be ordered by about 8:45 PM. Address: 2142 Kalākaua Ave, Waikiki.',
      },
      {
        q: 'Where can I get bingsu in Waikiki at night?',
        a: 'Mochi Land, the dessert counter inside Kona Coffee Donut (2142 Kalākaua Ave), makes milk bingsu until 9 PM daily. Milk bingsu is $15.95 in Azuki, Strawberry, Pineapple, Mango, Ube, Kona Coffee and Green Tea; Hawaiian bingsu is $12.95. One bowl comfortably serves two.',
      },
      {
        q: 'How much are mochi donuts at Kona Coffee Donut?',
        a: 'Mochi donuts are $3.95 each, 3 for $11.25, 6 for $22.50, or a dozen for $45 at Kona Coffee Donut, 2142 Kalākaua Ave, Waikiki. There are 24 flavors, including Ube, Matcha, Nutella, Cookies & Creme, Black Sesame and Yuzu, available until 9 PM daily.',
      },
      {
        q: 'Can I get boba in Waikiki after 8 PM?',
        a: 'Yes. Kona Coffee Donut (2142 Kalākaua Ave) sells sealed boba milk tea cans for $8.95 until 9 PM every day, in Brown Sugar, Ube, Milk Tea, Coffee, Thai Tea and Matcha. The cans are sealed to go, so they travel well back to a hotel.',
      },
      {
        q: 'Do I need a reservation for dessert at Kona Coffee Donut?',
        a: 'No. Kona Coffee Donut is walk-in counter service only, with no reservations. It is at 2142 Kalākaua Ave in Waikiki, open 7 AM to 9 PM daily, and evening lines are usually short.',
      },
    ],
    finalCTA: {
      headline: 'Still Open. Come Now.',
      body: 'Kona Coffee Donut, 2142 Kalākaua Ave — dessert until 9 PM every day, 5 minutes from the beach, no reservation needed.',
      visitLabel: 'Visit Tonight',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: {
      title: 'ワイキキで夜9時まで開いているデザート店',
      subtitle: 'モチドーナツ、ビンス、マラサダ、缶入りボバ。ディナーの後でも間に合います。',
      date: '2026年9月15日公開',
      readTime: '読了3分',
      badge: '夜まで営業',
    },
    intro:
      'ワイキキのベーカリーやマラサダ店は夕方5〜6時に閉まるところがほとんど。夕食後に「甘いものが食べたい」と思っても選択肢は少ないのが現実です。カラカウア通りのKona Coffee Donutは毎日夜9時まで営業。閉店までフルメニューを提供しているので、ディナー帰りの散歩の途中に立ち寄れます。',
    visitCTA: {
      headline: '毎日7時〜21時、年中無休',
      body: '2142 Kalākaua Ave、ワイキキビーチから徒歩約5分。予約不要のカウンター注文です。',
      menuLabel: 'メニューを見る',
      directionsLabel: '行き方を確認',
    },
    sections: [
      {
        h2: '夜8時のショーケースにあるもの',
        body: '閉店まで全メニューを提供。夕食後によく出るのはこちら。',
        bullets: [
          'モチドーナツ — 1個$3.95、3個$11.25、6個$22.50、12個$45。ウベ、抹茶、ヌテラ、黒ごま、柚子、きなこなど24種',
          'マラサダ — オリジナル・シナモン・ウベ$3.95、カスタード・ウベクリーム・ヌテラなどフィリング入り$4.95',
          'ミルクビンス — 小豆・いちご・パイナップル・マンゴー・ウベ・コナコーヒー・抹茶、$15.95',
          'ハワイアンビンス — Waikiki Rainbow、Paradise Lilikoiなど5種、$12.95',
          '缶入りボバミルクティー — 黒糖・ウベ・ミルクティー・コーヒー・タイティー・抹茶、$8.95',
          '韓国式ライスコーンドッグ — $6.99〜、注文後に揚げたて',
        ],
        pullout: {
          title: 'ディナー後の定番',
          body: 'テーブルにビンス1つ（$15.95）、持ち帰り用にモチドーナツ3個（$11.25）、缶ボバ1本（$8.95）。3〜4人分のデザートが10分で揃います。',
        },
      },
      {
        h2: '夕食後のビンスは2人で1つ',
        body: 'ミルクビンスは空気を含んだミルク雪氷なので、満腹でも入ります。$15.95で2人分十分。夜の人気はコナコーヒー味、南国気分ならマンゴーやいちご。店内のドリンク＆デザートカウンター「Mochi Land」で注文ごとに作ります。',
      },
      {
        h2: 'ホテルへの持ち帰りと時間の目安',
        body: '閉店は21時ちょうど。ビンスやコーンドッグなど作りたてメニューは20:45までに注文を。ドーナツとマラサダは毎朝店内で作る当日分なので、夜は人気フレーバーが売り切れることも。缶ボバは密封されているのでバッグに入れても安心。ウベと黒糖はカフェインフリーです。',
      },
    ],
    faq: [
      {
        q: 'ワイキキで夜遅くまで開いているデザート店は？',
        a: 'Kona Coffee Donut（2142 Kalākaua Ave, Honolulu）は毎日7時〜21時営業。モチドーナツ、マラサダ、ビンス、缶ボバ、コーンドッグを閉店まで提供。ワイキキビーチから徒歩約5分、電話 (808) 304-1808。',
      },
      {
        q: '夜にビンスは食べられる？',
        a: 'はい。店内のMochi Landカウンターで21時まで作っています。ミルクビンス$15.95、ハワイアンビンス$12.95。1つで2人分。',
      },
      {
        q: 'ラストオーダーは何時？',
        a: '閉店は21時。ビンスやコーンドッグなど作りたてメニューは20:45頃までにご注文ください。',
      },
      {
        q: '予約は必要？',
        a: '不要です。カウンターでの注文のみで、夜は行列も短めです。',
      },
    ],
    finalCTA: {
      headline: 'まだ開いています',
      body: 'Kona Coffee Donut、2142 Kalākaua Ave。毎日21時まで、ビーチから徒歩5分。',
      visitLabel: '今夜立ち寄る',
      callLabel: '電話 (808) 304-1808',
    },
  },
  ko: {
    hero: {
      title: '와이키키 밤 9시까지 여는 디저트 가게',
      subtitle: '모찌도넛, 빙수, 말라사다, 캔 보바 — 저녁 먹고 나와도 늦지 않아요.',
      date: '2026년 9월 15일 발행',
      readTime: '3분 분량',
      badge: '늦게까지 영업',
    },
    intro:
      '와이키키 베이커리와 말라사다 가게는 대부분 오후 5–6시면 문을 닫습니다. 저녁 먹고 "디저트 먹을까?" 하면 갈 데가 없는 게 현실이죠. 칼라카우아 애비뉴의 Kona Coffee Donut은 매일 밤 9시까지 영업하고, 문 닫을 때까지 전 메뉴를 그대로 팝니다. 저녁 산책 코스에 그냥 넣으세요.',
    visitCTA: {
      headline: '매일 7시–21시, 연중무휴',
      body: '2142 Kalākaua Ave, 와이키키 비치에서 도보 약 5분. 예약 없이 카운터 주문.',
      menuLabel: '메뉴 보기',
      directionsLabel: '길찾기',
    },
    sections: [
      {
        h2: '밤 8시 쇼케이스에 있는 것',
        body: '마감까지 전 메뉴 판매. 저녁 이후 실제로 많이 나가는 순서로.',
        bullets: [
          '모찌도넛 — 1개 $3.95, 3개 $11.25, 6개 $22.50, 12개 $45. 우베·말차·누텔라·검은깨·유자·인절미 등 24가지',
          '말라사다 — 오리지널·시나몬·우베 $3.95, 커스터드·우베크림·누텔라 등 필링 $4.95',
          '밀크 빙수 — 팥·딸기·파인애플·망고·우베·코나커피·녹차, $15.95',
          '하와이안 빙수 — Waikiki Rainbow, Paradise Lilikoi 등 5종, $12.95',
          '캔 보바 밀크티 — 흑당·우베·밀크티·커피·타이티·말차, $8.95',
          '한국식 쌀 핫도그 — $6.99부터, 주문 즉시 튀김',
        ],
        pullout: {
          title: '저녁 후 국룰 조합',
          body: '테이블에 빙수 하나($15.95), 들고 갈 모찌도넛 3개($11.25), 캔 보바 하나($8.95). 서너 명 디저트가 10분이면 끝.',
        },
      },
      {
        h2: '저녁 먹고 빙수는 둘이 하나',
        body: '밀크 빙수는 우유 눈꽃이라 배불러도 들어갑니다. $15.95 한 그릇이면 둘이 충분. 밤엔 코나커피 빙수가 인기, 열대 느낌 원하면 망고나 딸기. 매장 안 음료·디저트 카운터 Mochi Land에서 주문받고 바로 만듭니다.',
      },
      {
        h2: '호텔로 포장 & 시간 맞추기',
        body: '마감은 밤 9시 정각. 빙수·핫도그처럼 바로 만드는 메뉴는 8:45까지 주문하세요. 도넛과 말라사다는 매일 아침 매장에서 만드는 당일분이라 밤엔 인기 맛(우베·말차·누텔라)이 먼저 빠질 수 있어요. 캔 보바는 밀봉이라 가방에 넣어도 안 새고, 우베·흑당은 카페인 없어서 밤에도 부담 없습니다.',
      },
    ],
    faq: [
      {
        q: '와이키키에서 밤늦게 여는 디저트 가게는?',
        a: 'Kona Coffee Donut(2142 Kalākaua Ave, Honolulu)이 매일 7시–21시 영업. 모찌도넛, 말라사다, 빙수, 캔 보바, 핫도그를 마감까지 판매. 와이키키 비치에서 도보 5분, 전화 (808) 304-1808.',
      },
      {
        q: '밤에 빙수 되나요?',
        a: '네. 매장 내 Mochi Land 카운터에서 21시까지 만듭니다. 밀크 빙수 $15.95, 하와이안 빙수 $12.95. 한 그릇에 2인분.',
      },
      {
        q: '라스트오더는 몇 시?',
        a: '마감 21시. 빙수·핫도그 같은 즉석 메뉴는 20:45쯤까지 주문하시면 됩니다.',
      },
      {
        q: '예약 필요한가요?',
        a: '아니요. 워크인 카운터 주문만 받고, 저녁엔 줄도 짧은 편입니다.',
      },
    ],
    finalCTA: {
      headline: '아직 열려 있어요',
      body: 'Kona Coffee Donut, 2142 Kalākaua Ave. 매일 21시까지, 비치에서 도보 5분.',
      visitLabel: '오늘 밤 방문',
      callLabel: '전화 (808) 304-1808',
    },
  },
  zh: {
    hero: {
      title: '威基基晚上9点还开门的甜品店',
      subtitle: '麻糬甜甜圈、刨冰、马拉萨达、罐装珍珠奶茶——晚饭后来也来得及。',
      date: '2026年9月15日发布',
      readTime: '3分钟',
      badge: '营业到晚上',
    },
    intro:
      '威基基的面包店和马拉萨达店大多下午5–6点就关门，晚饭后想吃甜品往往找不到地方。位于卡拉考阿大道的Kona Coffee Donut每天营业到晚上9点，关门前全菜单照常供应，饭后散步顺路就能到。',
    visitCTA: {
      headline: '每天7点–21点，全年无休',
      body: '2142 Kalākaua Ave，距威基基海滩步行约5分钟。无需预订，柜台点单。',
      menuLabel: '查看菜单',
      directionsLabel: '获取路线',
    },
    sections: [
      {
        h2: '晚上8点柜台上有什么',
        body: '营业到关门都是全菜单。晚饭后最常点的：',
        bullets: [
          '麻糬甜甜圈 — 单个$3.95、3个$11.25、6个$22.50、12个$45。紫薯、抹茶、Nutella、黑芝麻、柚子、黄豆粉等24种口味',
          '马拉萨达 — 原味/肉桂/紫薯$3.95，卡仕达、紫薯奶油、Nutella等夹心$4.95',
          '牛奶刨冰 — 红豆、草莓、菠萝、芒果、紫薯、Kona咖啡、绿茶，$15.95',
          '夏威夷刨冰 — Waikiki Rainbow、Paradise Lilikoi等5款，$12.95',
          '罐装珍珠奶茶 — 黑糖、紫薯、奶茶、咖啡、泰式、抹茶，$8.95',
          '韩式米热狗 — $6.99起，现点现炸',
        ],
        pullout: {
          title: '饭后经典组合',
          body: '一碗刨冰分享（$15.95），3个麻糬甜甜圈带走（$11.25），再加一罐珍珠奶茶（$8.95）。三四个人的甜品，10分钟搞定。',
        },
      },
      {
        h2: '饭后刨冰两人一碗',
        body: '牛奶刨冰是蓬松的牛奶雪花冰，吃饱了也吃得下。$15.95一碗两人分刚好。晚上最受欢迎的是Kona咖啡口味，想要热带感就选芒果或草莓。店内饮品甜品柜台Mochi Land现点现做。',
      },
      {
        h2: '带回酒店与时间安排',
        body: '晚上9点准时关门，刨冰、热狗等现做品请在8:45前下单。甜甜圈和马拉萨达每天早上店内现做、当天售完，晚上热门口味（紫薯、抹茶、Nutella）可能先卖完。罐装奶茶密封包装，放包里不会洒；紫薯和黑糖不含咖啡因，晚上喝也放心。',
      },
    ],
    faq: [
      {
        q: '威基基有晚上开到很晚的甜品店吗？',
        a: '有。Kona Coffee Donut（2142 Kalākaua Ave, Honolulu）每天7点–21点营业，麻糬甜甜圈、马拉萨达、刨冰、罐装珍珠奶茶、韩式热狗供应到关门。距威基基海滩步行5分钟，电话 (808) 304-1808。',
      },
      {
        q: '晚上能吃到刨冰吗？',
        a: '能。店内Mochi Land柜台做到21点。牛奶刨冰$15.95，夏威夷刨冰$12.95，一碗够两人。',
      },
      {
        q: '最后点单几点？',
        a: '21点关门，刨冰、热狗等现做品请在20:45左右前点单。',
      },
      {
        q: '需要预订吗？',
        a: '不需要。仅柜台点单，晚上排队通常很短。',
      },
    ],
    finalCTA: {
      headline: '现在还开着',
      body: 'Kona Coffee Donut，2142 Kalākaua Ave。每天到21点，离海滩步行5分钟。',
      visitLabel: '今晚就来',
      callLabel: '致电 (808) 304-1808',
    },
  },
  es: {
    hero: {
      title: 'Postres en Waikiki hasta las 9 PM',
      subtitle: 'Mochi donuts, bingsu, malasadas y boba en lata cuando el resto de la zona ya cerró.',
      date: '15 de septiembre de 2026',
      readTime: '3 min',
      badge: 'Abierto hasta tarde',
    },
    intro:
      'La mayoría de panaderías y puestos de malasadas en Waikiki cierran entre las 5 y las 6 PM. Kona Coffee Donut, en Kalākaua Avenue, abre todos los días hasta las 9 PM con el menú completo: ideal para el paseo después de cenar.',
    visitCTA: {
      headline: 'Todos los días de 7 AM a 9 PM',
      body: '2142 Kalākaua Ave, a unos 5 minutos a pie de Waikiki Beach. Sin reserva, pedido en mostrador.',
      menuLabel: 'Ver Menú',
      directionsLabel: 'Cómo llegar',
    },
    sections: [
      {
        h2: 'Qué hay en el mostrador a las 8 PM',
        body: 'Menú completo hasta el cierre. Lo más pedido después de cenar:',
        bullets: [
          'Mochi donuts — $3.95 c/u, 3 por $11.25, 6 por $22.50, docena $45; 24 sabores como ube, matcha, Nutella, sésamo negro y yuzu',
          'Malasadas — original, canela o ube $3.95; rellenas (custard, crema de ube, Nutella) $4.95',
          'Bingsu de leche — azuki, fresa, piña, mango, ube, café Kona o té verde, $15.95, para compartir',
          'Boba milk tea en lata — azúcar morena, ube, clásico, café, té tailandés o matcha, $8.95',
          'Corn dogs coreanos de arroz — desde $6.99, fritos al momento',
        ],
      },
      {
        h2: 'Cuándo llegar',
        body: 'Cerramos a las 9 PM en punto; pide bingsu o corn dogs antes de las 8:45 PM. Los donuts y malasadas se hacen cada mañana en la tienda, así que los sabores populares pueden agotarse de noche. Las latas de boba van selladas: perfectas para llevar al hotel.',
      },
    ],
    faq: [
      {
        q: '¿Hay postres abiertos hasta tarde en Waikiki?',
        a: 'Sí. Kona Coffee Donut (2142 Kalākaua Ave, Honolulu) abre todos los días de 7 AM a 9 PM con mochi donuts, malasadas, bingsu y boba en lata hasta el cierre. A 5 minutos de Waikiki Beach; tel. (808) 304-1808.',
      },
      {
        q: '¿Puedo pedir bingsu de noche?',
        a: 'Sí, el mostrador Mochi Land dentro de la tienda prepara bingsu hasta las 9 PM. Bingsu de leche $15.95, bingsu hawaiano $12.95; un bol alcanza para dos.',
      },
      {
        q: '¿Necesito reserva?',
        a: 'No. Solo pedido en mostrador, sin reservas, y de noche la fila suele ser corta.',
      },
    ],
    finalCTA: {
      headline: 'Todavía abierto',
      body: 'Kona Coffee Donut, 2142 Kalākaua Ave. Hasta las 9 PM todos los días, a 5 minutos de la playa.',
      visitLabel: 'Ven esta noche',
      callLabel: 'Llama (808) 304-1808',
    },
  },
};

export default function LateNightDessertWaikikiPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
