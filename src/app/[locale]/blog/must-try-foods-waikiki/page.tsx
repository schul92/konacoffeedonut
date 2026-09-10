'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'must-try-foods-waikiki',
  imageSrc: '/images/blog/must-try-foods-waikiki.jpg',
  imageAlt: 'Waikiki must-try foods: mochi donuts, mango bingsu, iced Kona coffee, malasadas and a Korean corn dog on a bamboo table',
  schemaHeadline: '10 Must-Try Foods in Waikiki (2026 Local\'s List): Malasadas, Poke, Shave Ice, Mochi Donuts & More',
  schemaDescription:
    'The 10 foods you actually need to eat in Waikiki — malasadas, poke, plate lunch, garlic shrimp, shave ice, bingsu, mochi donuts, Kona coffee, acai bowls and Korean corn dogs — with what makes each one Hawaiian and where to get it near the beach.',
  datePublished: '2026-09-09',
  dateModified: '2026-09-09',
  related: [
    { path: '/blog/cheap-eats-waikiki', label: { en: 'Cheap eats in Waikiki: the best places to eat on a budget', ja: 'ワイキキの安くて美味しい店', ko: '와이키키 가성비 맛집', zh: '威基基平价美食', es: 'Comer barato en Waikiki' } },
    { path: '/blog/what-is-a-malasada', label: { en: 'What is a malasada?', ja: 'マラサダとは？', ko: '말라사다란?', zh: '什么是马拉萨达？', es: '¿Qué es una malasada?' } },
    { path: '/blog/bingsu-vs-shaved-ice-kakigori', label: { en: 'Bingsu vs Hawaiian shave ice vs kakigori', ja: 'ビンス vs シェイブアイス vs かき氷', ko: '빙수 vs 셰이브 아이스 vs 가키고리', zh: '雪冰 vs 刨冰 vs 日式刨冰', es: 'Bingsu vs shave ice vs kakigori' } },
    { path: '/blog/best-poke-waikiki', label: { en: 'Best poke in Waikiki', ja: 'ワイキキのポケおすすめ', ko: '와이키키 포케 맛집', zh: '威基基最好的Poke', es: 'El mejor poke de Waikiki' } },
    { path: '/blog/what-is-kona-coffee', label: { en: 'What is Kona coffee, and why does it cost more?', ja: 'コナコーヒーとは？', ko: '코나 커피란?', zh: '什么是科纳咖啡？', es: '¿Qué es el café Kona?' } },
  ],
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: '10 Must-Try Foods in Waikiki (2026 Local\'s List)',
      subtitle:
        'Skip the hotel buffet. These are the ten things visitors actually remember eating in Waikīkī — from a hot malasada at 7 AM to shave ice at sunset — and where to get each one within walking distance of the beach.',
      date: 'September 9, 2026',
      readTime: '9 min read',
      badge: 'Waikīkī Food Guide',
    },
    intro:
      'Waikīkī is two square miles with more restaurants than most cities, which makes it strangely easy to eat badly. The trick is to stop looking for "restaurants" and start looking for the handful of dishes that only make sense here: Portuguese-Hawaiian doughnuts, raw ahi that was swimming yesterday, shrimp from Kahuku, coffee from a single volcano slope, and the Korean and Japanese desserts that Honolulu\'s immigrant communities made their own. This list is in rough eating order for a day — breakfast to late dessert — and every item is available on or within a few blocks of Kalākaua Ave. Prices below are typical 2026 ranges, not menu quotes.',
    visitCTA: {
      headline: 'Five of the Ten, Under One Roof on Kalākaua',
      body:
        'Kona Coffee Donut at 2142 Kalākaua Ave makes malasadas, mochi donuts, bingsu, açaí bowls and Korean corn dogs fresh daily, and pours 100% Kona coffee — open 7 AM–9 PM, walk-in only, two blocks from the beach.',
      menuLabel: 'View Full Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: '1. Malasadas — the Hawaiian doughnut',
        body:
          'Portuguese plantation workers brought the malasada to Hawaiʻi in the 1880s; Leonard\'s Bakery on Kapahulu made it famous in 1952. It is a yeast-raised, hole-less doughnut fried to order and rolled in sugar while it is still too hot to hold. Eat it within minutes — a cold malasada is just bread. Look for shops that fry to order and offer filled versions (custard, ube cream, haupia/coconut, Nutella, macadamia).',
        bullets: [
          'Where: Kona Coffee Donut (2142 Kalākaua Ave, fried to order, 9 flavors) · Leonard\'s Bakery (Kapahulu, 10-min walk from east Waikīkī)',
          'Order: one original + one ube cream — the classic and the Hawaiian one',
          'Typical price: $3–5 each',
        ],
      },
      {
        h2: '2. Poke — raw ahi the way Hawaiians eat it',
        body:
          'Poke (POH-keh) is cubed raw fish — usually ahi tuna — seasoned with Hawaiian salt, limu seaweed, sweet onion and shoyu. The mainland "poke bowl" chain version with mango and Sriracha is a different food. The real thing is sold by the pound at fish markets and grocery counters, and the best bowls in Waikīkī are within a short walk or bus ride.',
        bullets: [
          'Where: Maguro Brothers (Waikīkī, evening counter), Ono Seafood (Kapahulu, take-out), Foodland Farms Ala Moana poke counter',
          'Order: shoyu ahi or spicy ahi over rice; limu ahi if you want the most traditional version',
          'Typical price: $14–20 per bowl',
        ],
      },
      {
        h2: '3. Plate lunch & loco moco',
        body:
          'Hawaiʻi\'s working lunch: two scoops of rice, a scoop of macaroni salad, and a protein — kalua pork, chicken katsu, teriyaki beef, or garlic shrimp. The loco moco is a plate-lunch cousin: rice, a hamburger patty, a fried egg, and brown gravy over everything, invented in Hilo in 1949. Rainbow Drive-In on Kapahulu has served it the same way since 1961.',
        bullets: [
          'Where: Rainbow Drive-In (Kapahulu) · Me BBQ (Waikīkī, Korean-run plate lunch)',
          'Order: mixed plate or loco moco; ask for "gravy all over"',
          'Typical price: $12–16',
        ],
      },
      {
        h2: '4. Garlic shrimp',
        body:
          'The North Shore shrimp-truck dish — a dozen shell-on shrimp sautéed in butter and an unreasonable amount of garlic, over rice with a lemon wedge. Giovanni\'s in Kahuku made it a pilgrimage, but you do not need to drive an hour: several Waikīkī plate-lunch counters and food-hall stalls now do a credible version. Bring napkins; you eat it with your hands.',
        bullets: [
          'Where: food-hall stalls in Waikīkī and Ala Moana; Giovanni\'s or Romy\'s if you go to the North Shore',
          'Order: original garlic; "hot & spicy" only if you mean it',
          'Typical price: $15–18',
        ],
      },
      {
        h2: '5. Hawaiian shave ice',
        body:
          'Not a snow cone. Hawaiian shave ice is shaved so fine it holds syrup like a sponge, and the Hawaiʻi move is to order it over vanilla ice cream with azuki beans, then have it "snow-capped" with condensed milk. Matsumoto\'s on the North Shore is the famous name; Waiola on Kapahulu is the locals\' pick. Rainbow (strawberry, pineapple, banana) is the classic; lilikoi and li hing mui are the island flavors.',
        bullets: [
          'Where: Waiola Shave Ice (Kapahulu), Island Vintage Shave Ice (Royal Hawaiian Center)',
          'Order: rainbow with ice cream + azuki + snow cap',
          'Typical price: $5–8',
        ],
      },
      {
        h2: '6. Bingsu — Korean milk shaved ice',
        body:
          'Honolulu\'s Korean community brought bingsu, and it has quietly become Waikīkī\'s other shaved-ice dessert. Instead of syrup over water ice, bingsu shaves frozen sweetened milk into powdery flakes and piles on fruit, azuki beans, mochi and condensed milk. It is richer, softer and meant to be shared. A Kona coffee bingsu — milk snow with Kona coffee syrup — is the version you can only get here.',
        bullets: [
          'Where: Kona Coffee Donut (2142 Kalākaua Ave) — mango, strawberry, azuki, ube, green tea, pineapple, Kona coffee',
          'Order: mango or Kona coffee bingsu, one bowl for two people',
          'Typical price: $13–16 (shared)',
        ],
        pullout: {
          title: 'Shave ice vs bingsu, in one line',
          body: 'Shave ice = water ice + syrup, crunchy-then-melting. Bingsu = milk ice + toppings, snow-soft and creamy. Try both; they are not the same dessert.',
        },
      },
      {
        h2: '7. Mochi donuts',
        body:
          'The pon-de-ring — a ring of eight connected dough balls made with glutinous rice flour — is a Japanese invention that Hawaiʻi adopted early because mochi was already everywhere here. It is chewy, light and far less sweet than an American doughnut. The island flavors are the point: ube, guava pineapple, lilikoi, coconut, taro, black sesame and matcha alongside the chocolate and strawberry.',
        bullets: [
          'Where: Kona Coffee Donut (2142 Kalākaua Ave) — 24 flavors, hand-piped and fried every morning',
          'Order: ube + guava pineapple + matcha for the Hawaiʻi trio; cookies & creme if you want the crowd-pleaser',
          'Typical price: sold in 3/6/12 packs',
        ],
      },
      {
        h2: '8. 100% Kona coffee',
        body:
          'Kona coffee grows on a 30-mile strip of the Hualālai and Mauna Loa slopes on the Big Island — one of the smallest named coffee regions in the world, which is why it costs what it does. The catch: "Kona blend" legally needs only 10% Kona beans. Look for "100% Kona" on the menu, and try it as a pour-over or cold brew first so you taste the bean rather than the milk. A Kona affogato (espresso over vanilla ice cream) is the dessert version.',
        bullets: [
          'Where: Kona Coffee Donut (100% Kona pour-over, cold brew, affogato) · Honolulu Coffee (Moana Surfrider) · Island Vintage Coffee',
          'Order: pour-over or cold brew, then a Kona affogato',
          'Typical price: $6–12 per cup for 100% Kona',
        ],
      },
      {
        h2: '9. Açaí bowl',
        body:
          'The açaí bowl went mainstream in Hawaiʻi before it did anywhere else in the US, and the Waikīkī version is its own thing: thick, frozen-blended açaí with banana, granola, honey and whatever tropical fruit is in season — papaya, mango, pineapple, lilikoi. Look for bowls that are spoon-thick rather than soupy, and for real fruit on top rather than just granola.',
        bullets: [
          'Where: Kona Coffee Donut (Açaí Oahu, Açaí Colada, papaya bowls) · Island Vintage Coffee · Tucker & Bevvy',
          'Order: a papaya or coconut-topped bowl for the Hawaiʻi version',
          'Typical price: $12–17',
        ],
      },
      {
        h2: '10. Korean corn dog',
        body:
          'The newest entry on the list and the one people film the most. A Korean corn dog is a rice-flour-battered stick of mozzarella (or sausage, or both), rolled in potato cubes or crushed ramen, fried, and dusted with sugar before the ketchup and mustard. Honolulu has a large Korean community and this is now firmly part of Waikīkī snack culture — eat it within five minutes so the cheese still pulls.',
        bullets: [
          'Where: Kona Coffee Donut (2142 Kalākaua Ave) — 6 styles fried to order',
          'Order: Half & Half if it is your first; Potato Dog for the photo',
          'Typical price: $6–9',
        ],
      },
      {
        h2: 'A one-day Waikīkī eating plan',
        body:
          'Morning: a hot malasada and a 100% Kona pour-over on Kalākaua (7–9 AM, before the beach). Lunch: a poke bowl or plate lunch on the Kapahulu side. Afternoon: shave ice or a mango bingsu when the sun is highest. Evening: garlic shrimp or loco moco, then a Korean corn dog and a box of mochi donuts to take back to the hotel. That covers all ten in one day without a car — everything above is on foot or a short bus ride from any Waikīkī hotel.',
      },
    ],
    faq: [
      {
        q: 'What food is Waikiki known for?',
        a: 'Malasadas, poke, plate lunch and loco moco, garlic shrimp, Hawaiian shave ice, 100% Kona coffee and açaí bowls — plus the Korean and Japanese desserts Honolulu made its own, like bingsu and mochi donuts.',
      },
      {
        q: 'What is the one food you must try in Hawaii?',
        a: 'If you only pick one, make it fresh poke — raw ahi seasoned with Hawaiian salt, limu and sweet onion. It is the dish most tied to Hawaiian food culture and very hard to get right anywhere else.',
      },
      {
        q: 'Where can I eat cheaply in Waikiki?',
        a: 'Plate-lunch counters on Kapahulu Ave, poke by the pound at grocery counters, and bakery-style spots on Kalākaua Ave — malasadas, mochi donuts and Korean corn dogs are all under $10. See our cheap eats in Waikiki guide for a full list.',
      },
      {
        q: 'What is the difference between shave ice and bingsu?',
        a: 'Hawaiian shave ice is finely shaved water ice with flavored syrup; bingsu is shaved frozen sweetened milk with fruit, azuki beans and mochi on top. Shave ice is lighter and syrupy; bingsu is creamy and soft.',
      },
      {
        q: 'Is Kona coffee worth the price?',
        a: 'If it is 100% Kona, yes — it is a small-region single-origin coffee with a smooth, low-acid profile. A "Kona blend" only needs 10% Kona beans, so check the menu wording.',
      },
      {
        q: 'Can I try these foods without a car?',
        a: 'Yes. Everything on this list is available on Kalākaua Ave, Kūhiō Ave or a 10-minute walk to Kapahulu Ave. The North Shore shrimp trucks and Matsumoto\'s are the only ones that need a drive, and Waikīkī has good local versions of both.',
      },
    ],
    finalCTA: {
      headline: 'Start the List on Kalākaua Ave',
      body: 'Malasadas, mochi donuts, bingsu, açaí bowls, Korean corn dogs and 100% Kona coffee — fresh daily, 7 AM–9 PM, two blocks from the beach.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: {
      title: 'ワイキキで絶対食べたい10品（2026年ローカル版）',
      subtitle: 'ホテルのビュッフェはスキップ。朝のマラサダから夕方のシェイブアイスまで、ビーチから徒歩圏で食べられる「ワイキキならでは」の10品。',
      date: '2026年9月9日',
      readTime: '読了8分',
      badge: 'ワイキキグルメ',
    },
    intro:
      'ワイキキは店が多すぎて逆に選びにくい街。「レストラン」ではなく「ここでしか意味のない料理」で選ぶのがコツです。ポルトガル系のドーナツ、獲れたてのアヒ、カフクのエビ、火山斜面のコーヒー、そしてホノルルの移民コミュニティが育てた韓国・日本のデザート。1日の食べる順に並べ、すべてカラカウア通り周辺で食べられます。',
    visitCTA: {
      headline: '10品のうち5品がカラカウア通りの1店舗に',
      body: 'コナコーヒードーナツ（2142 Kalākaua Ave）ではマラサダ、モチドーナツ、ビンス、アサイーボウル、韓国コーンドッグを毎日手作りし、100%コナコーヒーを提供。毎日7時〜21時、予約不要。',
      menuLabel: 'メニューを見る',
      directionsLabel: '行き方を確認',
    },
    sections: [
      { h2: '1. マラサダ', body: '1880年代にポルトガル系移民が持ち込んだ穴なし揚げドーナツ。揚げたてを砂糖で。カスタードやウベクリーム入りも。', bullets: ['コナコーヒードーナツ（揚げたて9種）／Leonard\'s Bakery（カパフル）'] },
      { h2: '2. ポケ', body: '角切りの生アヒにハワイアンソルト、リム（海藻）、甘い玉ねぎ、醤油。本土のポケボウルとは別物。', bullets: ['Maguro Brothers（ワイキキ）／Ono Seafood（カパフル）／Foodland Farms'] },
      { h2: '3. プレートランチ＆ロコモコ', body: 'ライス2スクープ、マカロニサラダ、メイン。ロコモコは1949年ヒロ生まれ。', bullets: ['Rainbow Drive-In（カパフル）'] },
      { h2: '4. ガーリックシュリンプ', body: 'ノースショアのフードトラック名物。ワイキキのフードホールでも食べられます。' },
      { h2: '5. ハワイアンシェイブアイス', body: '極細の氷にシロップ。バニラアイスとあずきを入れ、練乳の「スノーキャップ」が定番。', bullets: ['Waiola Shave Ice（カパフル）／Island Vintage Shave Ice'] },
      { h2: '6. ビンス（韓国ミルクかき氷）', body: '甘いミルクを凍らせて削った粉雪状の氷にフルーツ・あずき・餅。コナコーヒービンスはここだけ。', bullets: ['コナコーヒードーナツ — マンゴー、いちご、あずき、ウベ、抹茶、パイナップル、コナコーヒー'], pullout: { title: 'シェイブアイス vs ビンス', body: 'シェイブアイス＝水の氷+シロップ。ビンス＝ミルク氷+トッピング。別のデザートです。' } },
      { h2: '7. モチドーナツ', body: '米粉のポンデリング。もちもち軽く、甘さ控えめ。ウベ、グアバパイナップル、リリコイ、ココナッツ、タロ、黒ごま、抹茶。', bullets: ['コナコーヒードーナツ — 24種、毎朝手作り'] },
      { h2: '8. 100%コナコーヒー', body: 'ハワイ島の30マイルの斜面だけで育つ希少豆。「コナブレンド」は10%で名乗れるので「100% Kona」表記を確認。プアオーバーかコールドブリューで。', bullets: ['コナコーヒードーナツ／Honolulu Coffee／Island Vintage Coffee'] },
      { h2: '9. アサイーボウル', body: '濃厚なアサイーにバナナ、グラノーラ、ハチミツ、パパイヤやマンゴー。スプーンが立つ濃さが目安。', bullets: ['コナコーヒードーナツ／Island Vintage Coffee／Tucker & Bevvy'] },
      { h2: '10. 韓国コーンドッグ', body: '米粉衣のモッツァレラ（またはソーセージ）にポテトやラーメン衣、砂糖がけ。5分以内に。', bullets: ['コナコーヒードーナツ — 6種、注文ごとに揚げたて'] },
      { h2: '1日で10品を回るプラン', body: '朝：マラサダ+コナコーヒー。昼：ポケかプレートランチ。午後：シェイブアイスかビンス。夜：ガーリックシュリンプ、締めに韓国コーンドッグとモチドーナツを持ち帰り。車なしで全部回れます。' },
    ],
    faq: [
      { q: 'ワイキキの名物料理は？', a: 'マラサダ、ポケ、プレートランチ、ガーリックシュリンプ、シェイブアイス、コナコーヒー、アサイーボウル、ビンス、モチドーナツ、韓国コーンドッグ。' },
      { q: 'シェイブアイスとビンスの違いは？', a: 'シェイブアイスは水の氷+シロップ、ビンスはミルク氷+トッピングでクリーミー。' },
      { q: '車なしで回れる？', a: 'はい。すべてカラカウア通り、クヒオ通り、カパフル通り徒歩圏です。' },
    ],
    finalCTA: { headline: 'まずはカラカウア通りから', body: 'マラサダ、モチドーナツ、ビンス、アサイー、韓国コーンドッグ、100%コナコーヒー。毎日7時〜21時。', visitLabel: '今日来店', callLabel: '電話 (808) 304-1808' },
  },
  ko: {
    hero: {
      title: '와이키키 필수 음식 10가지 (2026 로컬 리스트)',
      subtitle: '호텔 뷔페는 건너뛰세요. 아침 말라사다부터 저녁 셰이브 아이스까지, 비치 도보 거리에서 먹을 수 있는 "와이키키에서만 의미 있는" 10가지.',
      date: '2026년 9월 9일',
      readTime: '8분',
      badge: '와이키키 맛집 가이드',
    },
    intro:
      '와이키키는 식당이 너무 많아 오히려 실패하기 쉽습니다. "식당"이 아니라 "여기서만 말이 되는 음식"으로 고르세요. 포르투갈식 도넛, 어제 잡은 참치, 카후쿠 새우, 화산 경사면 커피, 그리고 호놀룰루 이민자 커뮤니티가 키운 한국·일본 디저트. 하루 먹는 순서로 정리했고 전부 칼라카우아 애비뉴 근처입니다.',
    visitCTA: {
      headline: '10가지 중 5가지가 칼라카우아 한 곳에',
      body: '코나커피도넛(2142 Kalākaua Ave)은 말라사다, 모찌도넛, 빙수, 아사이볼, 한국 핫도그를 매일 만들고 100% 코나 커피를 내립니다. 매일 7AM–9PM, 예약 없이.',
      menuLabel: '전체 메뉴 보기',
      directionsLabel: '길찾기',
    },
    sections: [
      { h2: '1. 말라사다', body: '1880년대 포르투갈 이민자가 가져온 구멍 없는 튀김 도넛. 갓 튀겨 설탕에 굴린 것을 바로. 커스터드·우베 크림 필링도.', bullets: ['코나커피도넛(즉석 튀김 9종) / Leonard\'s Bakery(카파훌루)'] },
      { h2: '2. 포케', body: '생참치 깍둑썰기에 하와이 소금, 리무 해초, 단 양파, 간장. 본토 포케볼과는 다른 음식.', bullets: ['Maguro Brothers(와이키키) / Ono Seafood(카파훌루) / Foodland Farms'] },
      { h2: '3. 플레이트 런치 & 로코모코', body: '밥 두 스쿱, 마카로니 샐러드, 메인. 로코모코는 1949년 힐로에서 탄생.', bullets: ['Rainbow Drive-In(카파훌루)'] },
      { h2: '4. 갈릭 쉬림프', body: '노스쇼어 푸드트럭 명물. 와이키키 푸드홀에서도.' },
      { h2: '5. 하와이안 셰이브 아이스', body: '아주 곱게 간 얼음에 시럽. 바닐라 아이스크림+팥+연유 "스노우캡"이 정석.', bullets: ['Waiola Shave Ice(카파훌루) / Island Vintage Shave Ice'] },
      { h2: '6. 빙수', body: '단 우유를 얼려 눈처럼 간 얼음에 과일·팥·떡. 코나 커피 빙수는 여기서만.', bullets: ['코나커피도넛 — 망고, 딸기, 팥, 우베, 녹차, 파인애플, 코나 커피'], pullout: { title: '셰이브 아이스 vs 빙수', body: '셰이브 아이스=물 얼음+시럽, 빙수=우유 얼음+토핑. 다른 디저트입니다.' } },
      { h2: '7. 모찌도넛', body: '찹쌀가루 폰데링. 쫀득하고 가볍고 덜 달아요. 우베, 구아바 파인애플, 릴리코이, 코코넛, 타로, 흑임자, 말차.', bullets: ['코나커피도넛 — 24종, 매일 아침 수작업'] },
      { h2: '8. 100% 코나 커피', body: '빅아일랜드 30마일 경사면에서만 나는 원두. "코나 블렌드"는 10%만 넣어도 되니 "100% Kona" 표기 확인. 푸어오버나 콜드브루로.', bullets: ['코나커피도넛 / Honolulu Coffee / Island Vintage Coffee'] },
      { h2: '9. 아사이볼', body: '되직한 아사이에 바나나, 그래놀라, 꿀, 파파야·망고. 숟가락이 설 정도로 되직해야 정답.', bullets: ['코나커피도넛 / Island Vintage Coffee / Tucker & Bevvy'] },
      { h2: '10. 한국 핫도그', body: '쌀가루 반죽 모짜렐라(또는 소시지)에 감자·라면 코팅, 설탕. 5분 안에 드세요.', bullets: ['코나커피도넛 — 6종 즉석 튀김'] },
      { h2: '하루에 10가지 다 먹는 코스', body: '아침: 말라사다+코나 커피. 점심: 포케나 플레이트 런치. 오후: 셰이브 아이스나 빙수. 저녁: 갈릭 쉬림프, 마무리로 한국 핫도그와 모찌도넛 포장. 차 없이 전부 가능.' },
    ],
    faq: [
      { q: '와이키키 대표 음식은?', a: '말라사다, 포케, 플레이트 런치, 갈릭 쉬림프, 셰이브 아이스, 코나 커피, 아사이볼, 빙수, 모찌도넛, 한국 핫도그.' },
      { q: '셰이브 아이스와 빙수 차이?', a: '셰이브 아이스는 물 얼음+시럽, 빙수는 우유 얼음+토핑으로 크리미.' },
      { q: '차 없이 가능?', a: '네. 전부 칼라카우아, 쿠히오, 카파훌루 도보 거리.' },
    ],
    finalCTA: { headline: '칼라카우아에서 시작하세요', body: '말라사다, 모찌도넛, 빙수, 아사이, 한국 핫도그, 100% 코나 커피. 매일 7AM–9PM.', visitLabel: '오늘 방문', callLabel: '전화 (808) 304-1808' },
  },
  zh: {
    hero: {
      title: '威基基必吃10种美食（2026本地版）',
      subtitle: '跳过酒店自助餐。从早上7点的马拉萨达到日落时的刨冰，海滩步行范围内就能吃到的“只在威基基有意义”的10样。',
      date: '2026年9月9日',
      readTime: '8分钟',
      badge: '威基基美食指南',
    },
    intro:
      '威基基餐厅太多，反而容易吃错。诀窍是别找“餐厅”，找只有这里才说得通的食物：葡式甜甜圈、昨天还在游的金枪鱼、卡胡库的虾、火山坡上的咖啡，以及檀香山移民社区发扬光大的韩日甜品。按一天进食顺序排列，全部在卡拉卡瓦大道附近。',
    visitCTA: {
      headline: '10样中的5样，卡拉卡瓦大道一家店',
      body: 'Kona Coffee Donut（2142 Kalākaua Ave）每天现做马拉萨达、麻糬甜甜圈、雪冰、巴西莓碗和韩式热狗，并提供100%科纳咖啡。每天7AM–9PM，无需预约。',
      menuLabel: '查看全部菜单',
      directionsLabel: '获取路线',
    },
    sections: [
      { h2: '1. 马拉萨达', body: '1880年代葡萄牙移民带来的无洞炸甜甜圈，现炸裹糖趁热吃。有卡仕达、紫薯奶油等夹心。', bullets: ['Kona Coffee Donut（现炸9种）/ Leonard\'s Bakery（Kapahulu）'] },
      { h2: '2. Poke 生鱼', body: '生金枪鱼块配夏威夷盐、海藻、甜洋葱、酱油。和本土连锁的poke碗不是一回事。', bullets: ['Maguro Brothers（威基基）/ Ono Seafood（Kapahulu）/ Foodland Farms'] },
      { h2: '3. 餐盘午餐 & Loco Moco', body: '两勺饭、通心粉沙拉、主菜。Loco moco 1949年诞生于希洛。', bullets: ['Rainbow Drive-In（Kapahulu）'] },
      { h2: '4. 蒜香虾', body: '北岸餐车名菜，威基基美食广场也有。' },
      { h2: '5. 夏威夷刨冰', body: '极细冰配糖浆，本地吃法是加香草冰淇淋和红豆，再淋炼乳“雪顶”。', bullets: ['Waiola Shave Ice（Kapahulu）/ Island Vintage Shave Ice'] },
      { h2: '6. 韩式雪冰 Bingsu', body: '甜牛奶冻后刨成雪花，铺水果、红豆、年糕。科纳咖啡雪冰只有这里有。', bullets: ['Kona Coffee Donut — 芒果、草莓、红豆、紫薯、抹茶、菠萝、科纳咖啡'], pullout: { title: '刨冰 vs 雪冰', body: '刨冰=水冰+糖浆；雪冰=牛奶冰+配料，绵密奶香。是两种甜品。' } },
      { h2: '7. 麻糬甜甜圈', body: '糯米粉波堤圈，Q弹轻盈不太甜。紫薯、番石榴菠萝、百香果、椰子、芋头、黑芝麻、抹茶。', bullets: ['Kona Coffee Donut — 24种，每天早上手工现做'] },
      { h2: '8. 100%科纳咖啡', body: '只产于大岛30英里山坡。“Kona blend”只需10%科纳豆，认准“100% Kona”。先试手冲或冷萃。', bullets: ['Kona Coffee Donut / Honolulu Coffee / Island Vintage Coffee'] },
      { h2: '9. 巴西莓碗', body: '浓稠巴西莓加香蕉、燕麦、蜂蜜、木瓜或芒果。勺子能立住才对。', bullets: ['Kona Coffee Donut / Island Vintage Coffee / Tucker & Bevvy'] },
      { h2: '10. 韩式热狗', body: '米粉面糊裹马苏里拉（或香肠），薯块或拉面外壳，撒糖。5分钟内吃。', bullets: ['Kona Coffee Donut — 6款现炸'] },
      { h2: '一天吃完10样的路线', body: '早：马拉萨达+科纳咖啡。午：poke或餐盘午餐。下午：刨冰或雪冰。晚：蒜香虾，最后打包韩式热狗和麻糬甜甜圈。不用开车。' },
    ],
    faq: [
      { q: '威基基有什么特色美食？', a: '马拉萨达、poke、餐盘午餐、蒜香虾、刨冰、科纳咖啡、巴西莓碗、雪冰、麻糬甜甜圈、韩式热狗。' },
      { q: '刨冰和雪冰的区别？', a: '刨冰是水冰加糖浆，雪冰是牛奶冰加配料，更绵密。' },
      { q: '不开车能吃到吗？', a: '可以，全部在卡拉卡瓦、库希奥、Kapahulu步行范围内。' },
    ],
    finalCTA: { headline: '从卡拉卡瓦大道开始', body: '马拉萨达、麻糬甜甜圈、雪冰、巴西莓、韩式热狗、100%科纳咖啡。每天7AM–9PM。', visitLabel: '立即到店', callLabel: '致电 (808) 304-1808' },
  },
  es: {
    hero: {
      title: '10 comidas imperdibles en Waikiki (lista local 2026)',
      subtitle: 'Olvida el buffet del hotel. De una malasada caliente a las 7 AM a un shave ice al atardecer: las diez cosas que sí se recuerdan de Waikīkī, todas a pie de la playa.',
      date: '9 de septiembre de 2026',
      readTime: '8 min',
      badge: 'Guía gastronómica',
    },
    intro:
      'Waikīkī tiene demasiados restaurantes y por eso es fácil comer mal. El truco: buscar platos que solo tienen sentido aquí — donas portuguesas, atún crudo fresco, camarones de Kahuku, café de un solo volcán y los postres coreanos y japoneses que Honolulu hizo suyos. En orden de un día de comidas, todo cerca de Kalākaua Ave.',
    visitCTA: {
      headline: 'Cinco de las diez, bajo un mismo techo',
      body: 'Kona Coffee Donut (2142 Kalākaua Ave) hace malasadas, mochi donuts, bingsu, bowls de açaí y corn dogs coreanos cada día, y sirve café 100% Kona. 7 AM–9 PM, sin reserva.',
      menuLabel: 'Ver menú',
      directionsLabel: 'Cómo llegar',
    },
    sections: [
      { h2: '1. Malasadas', body: 'Dona portuguesa sin agujero, frita al momento y cubierta de azúcar. Con relleno de crema o ube.', bullets: ['Kona Coffee Donut / Leonard\'s Bakery'] },
      { h2: '2. Poke', body: 'Atún crudo en cubos con sal hawaiana, alga limu, cebolla dulce y shoyu.', bullets: ['Maguro Brothers / Ono Seafood / Foodland Farms'] },
      { h2: '3. Plate lunch y loco moco', body: 'Dos porciones de arroz, ensalada de macarrones y proteína. Loco moco: hamburguesa, huevo y gravy.', bullets: ['Rainbow Drive-In'] },
      { h2: '4. Camarones al ajo', body: 'El plato de los food trucks del North Shore, también en Waikīkī.' },
      { h2: '5. Shave ice hawaiano', body: 'Hielo finísimo con jarabe, helado de vainilla, azuki y leche condensada.', bullets: ['Waiola Shave Ice / Island Vintage Shave Ice'] },
      { h2: '6. Bingsu', body: 'Leche congelada rallada como nieve con fruta, azuki y mochi. El de café Kona solo existe aquí.', bullets: ['Kona Coffee Donut'] },
      { h2: '7. Mochi donuts', body: 'Anillo pon-de-ring de harina de arroz, masticable y poco dulce. Sabores isleños: ube, guayaba-piña, coco, taro, matcha.', bullets: ['Kona Coffee Donut — 24 sabores cada mañana'] },
      { h2: '8. Café 100% Kona', body: 'Solo crece en 30 millas de la Isla Grande. Un "Kona blend" solo necesita 10%; busca "100% Kona".', bullets: ['Kona Coffee Donut / Honolulu Coffee / Island Vintage Coffee'] },
      { h2: '9. Bowl de açaí', body: 'Açaí espeso con plátano, granola, miel y fruta tropical.', bullets: ['Kona Coffee Donut / Island Vintage Coffee'] },
      { h2: '10. Korean corn dog', body: 'Mozzarella o salchicha en masa de arroz, cobertura de papa o ramen, azúcar encima. Cómelo en 5 minutos.', bullets: ['Kona Coffee Donut — 6 estilos'] },
      { h2: 'Plan de un día', body: 'Mañana: malasada y café Kona. Mediodía: poke o plate lunch. Tarde: shave ice o bingsu. Noche: camarones al ajo, y corn dog + mochi donuts para llevar. Todo sin coche.' },
    ],
    faq: [
      { q: '¿Qué comida es típica de Waikiki?', a: 'Malasadas, poke, plate lunch, camarones al ajo, shave ice, café Kona, açaí, bingsu, mochi donuts y corn dogs coreanos.' },
      { q: '¿Shave ice o bingsu?', a: 'Shave ice: hielo de agua con jarabe. Bingsu: hielo de leche con toppings, cremoso.' },
      { q: '¿Se puede sin coche?', a: 'Sí, todo está a pie en Kalākaua, Kūhiō o Kapahulu.' },
    ],
    finalCTA: { headline: 'Empieza la lista en Kalākaua Ave', body: 'Malasadas, mochi donuts, bingsu, açaí, corn dogs coreanos y café 100% Kona. 7 AM–9 PM.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 304-1808' },
  },
};

export default function MustTryFoodsWaikikiPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
