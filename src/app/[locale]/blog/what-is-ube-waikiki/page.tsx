'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'what-is-ube-waikiki',
  imageSrc: '/images/blog/what-is-ube-waikiki.jpeg',
  imageAlt: 'Ube desserts in Waikiki — purple ube mochi donut, ube malasada, ube milk bingsu and an ube latte at Kona Coffee Donut',
  schemaHeadline: 'What Is Ube? Purple Yam Flavor Explained, Ube vs Taro, and Where to Try It in Waikiki',
  schemaDescription:
    'Ube is a purple yam from the Philippines — not taro, not purple sweet potato — with a mellow vanilla, coconut and pistachio-like flavor. Why it is everywhere in Hawaii, how it differs from taro, and the full ube lineup (mochi donut, malasada, bingsu, latte, boba) at Kona Coffee Donut, 2142 Kalākaua Ave, Waikiki.',
  datePublished: '2026-09-15',
  dateModified: '2026-09-15',
  related: [
    { path: '/blog/ube-mochi-donut-waikiki', label: { en: 'The ube mochi donut in Waikiki', ja: 'ワイキキのウベモチドーナツ', ko: '와이키키 우베 모찌도넛', zh: '威基基的紫山药麻糬甜甜圈', es: 'La dona mochi de ube en Waikiki' } },
    { path: '/blog/best-bingsu-waikiki', label: { en: 'Best bingsu in Waikiki', ja: 'ワイキキのビンスおすすめ', ko: '와이키키 빙수 맛집', zh: '威基基最好的雪冰', es: 'El mejor bingsu de Waikiki' } },
    { path: '/blog/boba-waikiki', label: { en: 'Boba in Waikiki: the canned milk tea guide', ja: 'ワイキキのボバガイド', ko: '와이키키 보바 가이드', zh: '威基基珍珠奶茶指南', es: 'Boba en Waikiki: guía' } },
  ],
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'What Is Ube? The Purple Yam Explained (and Where to Taste It in Waikiki)',
      subtitle:
        'Not taro. Not sweet potato. Ube is a Filipino purple yam with a mellow vanilla-coconut flavor — and in Hawaii it is on everything from donuts to lattes.',
      date: 'September 15, 2026',
      readTime: '6 min read',
      badge: 'Explainer',
    },
    intro:
      "Ube (pronounced OO-beh) is a purple yam native to the Philippines, prized for its naturally violet flesh and a soft, nutty sweetness that tastes somewhere between vanilla, coconut and pistachio. If you have spent more than a day in Hawaii you have already seen it: purple ice cream, purple pancakes, purple donuts, purple lattes. Ube arrived with the islands' large Filipino community and never left. It is also the single most-asked-about word at our counter on Kalākaua — usually phrased as \"is that taro?\" (it isn't). This guide answers what ube actually is, how it differs from taro and purple sweet potato, what it tastes like, why Hawaii loves it, and exactly which ube items you can try at Kona Coffee Donut in Waikiki.",
    visitCTA: {
      headline: 'Taste Ube Five Ways in Waikiki',
      body:
        'Ube mochi donut, ube malasada, ube milk bingsu, ube latte and canned ube boba — all at Kona Coffee Donut, 2142 Kalākaua Ave, about 5 minutes from Waikiki Beach. Open 7 AM to 9 PM daily, walk-in only.',
      menuLabel: 'See the Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'What is ube? (The 40-word answer)',
        body:
          'Ube is a purple yam (Dioscorea alata) native to the Philippines. Its flesh is naturally deep violet, and when cooked it has a mellow, nutty sweetness often compared to vanilla, coconut and pistachio. It is a yam, not taro and not a purple sweet potato.',
        pullout: {
          title: 'How to say it',
          body:
            'OO-beh, two syllables. In the Philippines it is traditionally boiled, grated and cooked down with milk and sugar into ube halaya, a thick purple jam — the base for almost every modern ube dessert, including ours.',
        },
      },
      {
        h2: 'Ube vs taro vs purple sweet potato',
        body:
          'These three get mixed up constantly because they are all starchy roots and all show up in Asian desserts. They are different plants with different flavors:',
        bullets: [
          'Ube — a yam. Naturally vivid purple all the way through. Sweet, nutty, vanilla-coconut flavor. Used almost entirely for desserts.',
          'Taro — a corm from the taro plant (kalo in Hawaiian). Pale white or lavender-grey flesh with tiny purple flecks. Mild, earthy, more starchy than sweet. Poi is made from taro, and our Taro mochi donut is a distinctly different (gentler, less sweet) flavor from Ube.',
          'Purple sweet potato — Okinawan sweet potato, common in Hawaii plate lunches. Purple flesh but a classic sweet-potato taste; drier, more savory, less floral than ube.',
        ],
      },
      {
        h2: 'What does ube taste like?',
        body:
          "Mild and sweet, with a nutty, almost floral finish. Most people land on the same three comparisons: vanilla for the roundness, coconut for the creamy sweetness, and pistachio for the nutty undertone. It is never sharp or bitter, which is why it pairs so well with milk — ube latte, ube milk tea and ube bingsu all work because dairy amplifies that soft flavor. The color is the other half of the experience: real ube is naturally purple, no dye required, and the shade deepens as it cooks.",
      },
      {
        h2: 'Why Hawaii loves ube',
        body:
          "Filipinos are one of the largest ethnic groups in Hawaii, and ube came over with the food culture — ube halaya at family parties, ube in halo-halo, ube ice cream at neighborhood shops. Over the last decade it crossed over into mainstream island dessert menus, and now purple is simply part of the Hawaii sweets palette alongside coconut, lilikoi and Kona coffee. For visitors it has become a must-taste: an Instagram-native color and a flavor most mainland travelers have never had. Hawaii is one of the easiest places in the United States to eat ube in a dozen forms within a few blocks.",
      },
      {
        h2: 'Ube at Kona Coffee Donut in Waikiki',
        body:
          "Ube is our most popular flavor family, and you can taste it as a donut, a filled pastry, a shaved-milk dessert, a coffee drink or a boba — all at 2142 Kalākaua Ave, made in-house every morning. The current ube lineup:",
        bullets: [
          'Ube mochi donut — $3.95. Chewy tapioca-rice mochi ring with a lavender ube glaze; the signature. Mix any flavors: 3 for $11.25, 6 for $22.50, dozen $45.',
          'Ube malasada — $3.95. Hawaii-style fried yeast dough, rolled in sugar, ube-flavored.',
          'Ube Cream filled malasada — $4.95. Same malasada, piped full of ube cream. The richest bite on the counter.',
          'Ube milk bingsu — $15.95. Korean shaved-milk snow with ube sauce and toppings; built for two people to share.',
          'Ube Latte — $7.95, hot or iced. Espresso over ube milk; sweet, nutty, purple-and-tan layers.',
          'Ube boba milk tea (can) — $8.95. Sealed can-style cup with brown-sugar pearls, grab-and-go for the beach.',
        ],
      },
      {
        h2: 'Which ube item should you order first?',
        body:
          'Depends on what you want out of it:',
        bullets: [
          'Tasting ube for the first time → Ube mochi donut. Cleanest expression of the flavor, $3.95, and you can pair it with Taro to taste the difference side by side.',
          'Want a drink to walk with → Ube Latte iced. Coffee plus ube is the combination visitors photograph most.',
          'Two people, afternoon heat → Ube milk bingsu. One bowl, two spoons, 15 minutes in the shade.',
          'Heading to the beach → Ube boba can. Sealed, travels, no spill.',
          'Comparing flavors → a 3-pack: Ube, Taro, Black Sesame. That trio explains the whole Asian-dessert spectrum in one box.',
        ],
      },
    ],
    faq: [
      {
        q: 'What is ube?',
        a: 'Ube is a purple yam (Dioscorea alata) native to the Philippines. Its flesh is naturally violet and, when cooked, has a mellow, nutty sweetness similar to vanilla, coconut and pistachio. It is used mainly in desserts — ube halaya jam, ice cream, donuts and lattes.',
      },
      {
        q: 'Is ube the same as taro?',
        a: 'No. Ube is a yam with vivid purple flesh and a sweet vanilla-coconut flavor. Taro is a corm with pale, purple-flecked flesh and a mild, earthy, starchy taste. At Kona Coffee Donut in Waikiki both are sold as mochi donuts ($3.95 each), so you can taste the difference side by side.',
      },
      {
        q: 'What does ube taste like?',
        a: 'Ube tastes gently sweet and nutty, usually described as vanilla plus coconut with a pistachio-like finish. It is not bitter or earthy, which is why it pairs so well with milk in lattes, boba and bingsu.',
      },
      {
        q: 'Is ube naturally purple?',
        a: 'Yes. Real ube is purple all the way through; the color comes from natural anthocyanin pigments in the yam, the same family of pigments found in blueberries. No dye is needed to get the violet shade.',
      },
      {
        q: 'Where can I try ube in Waikiki?',
        a: 'Kona Coffee Donut at 2142 Kalākaua Ave, Honolulu, HI 96815 serves ube five ways: ube mochi donut ($3.95), ube malasada ($3.95), ube cream filled malasada ($4.95), ube milk bingsu ($15.95), ube latte ($7.95) and a canned ube boba milk tea ($8.95). It is about a 5-minute walk from Waikiki Beach, open 7 AM to 9 PM daily, walk-in only.',
      },
      {
        q: 'Why is ube so popular in Hawaii?',
        a: 'Hawaii has one of the largest Filipino communities in the United States, and ube desserts like ube halaya and halo-halo have been part of island food culture for generations. Over the past decade the flavor crossed into mainstream bakeries, coffee shops and dessert counters, making Hawaii one of the easiest places to try ube in many forms.',
      },
    ],
    finalCTA: {
      headline: 'Come Taste the Purple',
      body: 'Ube mochi donuts, malasadas, bingsu, lattes and boba at 2142 Kalākaua Ave. Open 7 AM – 9 PM daily, 5 minutes from the beach.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: {
      title: 'ウベとは？紫芋との違いとワイキキで味わえる店',
      subtitle: 'タロでもサツマイモでもない、フィリピン原産の紫ヤムイモ。バニラとココナッツのようなやさしい甘さ。',
      date: '2026年9月15日公開',
      readTime: '読了4分',
      badge: '解説',
    },
    intro:
      'ウベ（ube）はフィリピン原産の紫色のヤムイモ。加熱すると自然な濃い紫色になり、バニラ・ココナッツ・ピスタチオを合わせたようなナッツ感のある甘さが特徴です。ハワイではフィリピン系コミュニティの食文化から広まり、今やアイス・パンケーキ・ドーナツ・ラテまで「紫のスイーツ」の定番。この記事ではウベの正体、タロとの違い、味、そしてワイキキのKona Coffee Donutで味わえるウベメニューを紹介します。',
    visitCTA: {
      headline: 'ワイキキでウベを5通りに',
      body: 'ウベモチドーナツ、ウベマラサダ、ウベミルクビンス、ウベラテ、缶入りウベボバ。カラカウア通り2142、ワイキキビーチから徒歩約5分。毎日7時〜21時、予約不要。',
      menuLabel: 'メニューを見る',
      directionsLabel: '行き方を確認',
    },
    sections: [
      {
        h2: 'ウベとは？',
        body: 'ウベはフィリピン原産の紫ヤムイモ（学名 Dioscorea alata）。果肉は天然の紫色で、加熱するとバニラとココナッツを思わせるまろやかな甘みに。フィリピンではミルクと砂糖で煮詰めた「ウベハラヤ」というジャムにするのが伝統で、現代のウベスイーツはほぼこれがベースです。',
        pullout: { title: 'ウベ vs タロ vs 紫芋', body: 'ウベ＝ヤムイモ、鮮やかな紫、甘くナッツ感。タロ＝サトイモの仲間、白〜薄紫、素朴で甘さ控えめ。紫芋（オキナワンスイートポテト）＝サツマイモ、ホクホクで甘い。全部別の植物です。' },
      },
      {
        h2: 'Kona Coffee Donutのウベメニュー',
        body: '毎朝店内で手作り。現在のウベラインナップ：',
        bullets: ['ウベモチドーナツ $3.95（3個$11.25 / 6個$22.50 / 12個$45、味はミックス可）', 'ウベマラサダ $3.95 ／ ウベクリーム入りマラサダ $4.95', 'ウベミルクビンス $15.95（2人でシェア）', 'ウベラテ $7.95（ホット／アイス）', '缶入りウベボバミルクティー $8.95'],
      },
      {
        h2: '最初に頼むなら',
        body: '初めてなら味が一番わかりやすいウベモチドーナツ。タロと食べ比べると違いが一目瞭然。ビーチに持って行くなら密封缶のウベボバ、2人なら暑い午後にウベビンスがおすすめ。',
      },
    ],
    faq: [
      { q: 'ウベはタロと同じ？', a: '別物です。ウベは鮮やかな紫のヤムイモで甘くナッツ感のある味、タロは白っぽく素朴で甘さ控えめ。Kona Coffee Donut（2142 Kalākaua Ave）では両方のモチドーナツ（各$3.95）があるので食べ比べできます。' },
      { q: 'ウベはどんな味？', a: 'やさしい甘さで、バニラ＋ココナッツ＋ピスタチオのようなナッツ感。苦味や土っぽさはなく、ミルクとの相性が抜群です。' },
      { q: '紫色は着色料？', a: 'いいえ。本物のウベはアントシアニン色素で自然に紫色になります。' },
      { q: 'ワイキキでウベはどこで食べられる？', a: 'Kona Coffee Donut（2142 Kalākaua Ave, Honolulu）でウベモチドーナツ、マラサダ、ビンス、ラテ、ボバの5種類。ワイキキビーチから徒歩約5分、毎日7時〜21時。' },
    ],
    finalCTA: { headline: '紫のスイーツを食べに', body: 'カラカウア通り2142。毎日7時〜21時、ビーチから徒歩5分。', visitLabel: '今日来店', callLabel: '電話 (808) 304-1808' },
  },
  ko: {
    hero: {
      title: '우베란? 타로와의 차이, 그리고 와이키키에서 맛보는 법',
      subtitle: '타로도, 고구마도 아닌 필리핀산 보라색 참마. 바닐라와 코코넛 같은 부드러운 단맛.',
      date: '2026년 9월 15일 발행',
      readTime: '4분 분량',
      badge: '설명',
    },
    intro:
      '우베(ube)는 필리핀이 원산지인 보라색 참마입니다. 익히면 자연스럽게 짙은 보라색이 되고, 바닐라·코코넛·피스타치오를 섞은 듯한 고소하고 부드러운 단맛이 납니다. 하와이에서는 필리핀계 커뮤니티의 음식 문화에서 퍼져 지금은 아이스크림, 팬케이크, 도넛, 라떼까지 "보라색 디저트"의 대명사가 됐죠. 우베의 정체, 타로와의 차이, 맛, 그리고 와이키키 Kona Coffee Donut에서 맛볼 수 있는 우베 메뉴를 정리했습니다.',
    visitCTA: {
      headline: '와이키키에서 우베 5가지',
      body: '우베 모찌도넛, 우베 말라사다, 우베 밀크빙수, 우베 라떼, 캔 우베 보바. 칼라카우아 2142, 와이키키 비치에서 도보 약 5분. 매일 7시–21시, 예약 없이 방문.',
      menuLabel: '메뉴 보기',
      directionsLabel: '길찾기',
    },
    sections: [
      {
        h2: '우베란?',
        body: '우베는 필리핀 원산의 보라색 참마(학명 Dioscorea alata)입니다. 속살이 천연 보라색이고, 익히면 바닐라와 코코넛을 떠올리게 하는 부드러운 단맛이 납니다. 필리핀에서는 우유와 설탕에 졸인 "우베 할라야" 잼이 전통이고, 요즘 우베 디저트는 대부분 이걸 베이스로 합니다.',
        pullout: { title: '우베 vs 타로 vs 자색고구마', body: '우베=참마, 선명한 보라, 달고 고소함. 타로=토란류, 흰색~연보라, 담백하고 덜 달콤함. 자색고구마(오키나와 고구마)=고구마, 포슬포슬 달콤. 전부 다른 식물입니다.' },
      },
      {
        h2: 'Kona Coffee Donut 우베 메뉴',
        body: '매일 아침 매장에서 직접 만듭니다. 현재 우베 라인업:',
        bullets: ['우베 모찌도넛 $3.95 (3개 $11.25 / 6개 $22.50 / 12개 $45, 맛 믹스 가능)', '우베 말라사다 $3.95 / 우베 크림 말라사다 $4.95', '우베 밀크빙수 $15.95 (2인 셰어)', '우베 라떼 $7.95 (핫/아이스)', '캔 우베 보바 밀크티 $8.95'],
      },
      {
        h2: '뭘 먼저 시킬까',
        body: '처음이면 맛이 제일 또렷한 우베 모찌도넛. 타로랑 같이 먹어보면 차이가 확실합니다. 비치에 들고 갈 거면 밀봉 캔 우베 보바, 둘이라면 더운 오후에 우베 빙수.',
      },
    ],
    faq: [
      { q: '우베와 타로는 같은 건가요?', a: '아닙니다. 우베는 선명한 보라색 참마로 달고 고소하고, 타로는 희끄무레하고 담백하며 덜 달아요. Kona Coffee Donut(2142 Kalākaua Ave)에는 두 가지 모찌도넛(각 $3.95)이 모두 있어 비교해볼 수 있습니다.' },
      { q: '우베는 무슨 맛인가요?', a: '부드러운 단맛에 바닐라+코코넛+피스타치오 같은 고소함. 쓴맛이나 흙맛이 없어 우유와 특히 잘 어울립니다.' },
      { q: '보라색은 색소인가요?', a: '아니요. 진짜 우베는 안토시아닌 색소 덕분에 자연적으로 보라색입니다.' },
      { q: '와이키키에서 우베는 어디서 먹나요?', a: 'Kona Coffee Donut(2142 Kalākaua Ave, Honolulu)에서 우베 모찌도넛, 말라사다, 빙수, 라떼, 보바 5종. 와이키키 비치에서 도보 약 5분, 매일 7시–21시.' },
    ],
    finalCTA: { headline: '보라색 디저트 먹으러', body: '칼라카우아 2142. 매일 7시–21시, 비치에서 도보 5분.', visitLabel: '오늘 방문', callLabel: '전화 (808) 304-1808' },
  },
  zh: {
    hero: {
      title: '什么是Ube（紫山药）？与香芋的区别及威基基哪里能吃到',
      subtitle: '不是香芋，也不是紫薯。Ube是菲律宾的紫山药，有香草加椰子般的柔和甜香。',
      date: '2026年9月15日发布',
      readTime: '4分钟',
      badge: '科普',
    },
    intro:
      'Ube（读作"乌贝"）是原产菲律宾的紫山药。煮熟后呈天然深紫色，味道像香草、椰子和开心果的混合，带坚果香的柔和甜味。在夏威夷，ube随菲律宾裔社区的饮食文化传开，如今冰淇淋、松饼、甜甜圈、拿铁上到处是这抹紫色。本文解释ube到底是什么、和香芋（taro）有什么区别、味道如何，以及在威基基Kona Coffee Donut能吃到哪些ube甜品。',
    visitCTA: {
      headline: '在威基基尝ube的5种方式',
      body: 'Ube麻糬甜甜圈、ube马拉萨达、ube牛奶雪冰、ube拿铁、罐装ube珍珠奶茶。卡拉考阿大道2142号，距威基基海滩步行约5分钟。每天7点–21点，无需预订。',
      menuLabel: '查看菜单',
      directionsLabel: '获取路线',
    },
    sections: [
      {
        h2: '什么是Ube？',
        body: 'Ube是原产菲律宾的紫山药（学名 Dioscorea alata）。果肉天然呈紫色，煮熟后有香草和椰子般的柔和甜味。菲律宾传统做法是用牛奶和糖熬成"ube halaya"紫山药酱，现代几乎所有ube甜品都以此为基础。',
        pullout: { title: 'Ube vs 香芋 vs 紫薯', body: 'Ube=紫山药，通体鲜紫，甜且带坚果香。香芋（taro）=芋头，白色或淡紫带紫点，清淡偏粉、甜度低。紫薯（冲绳紫薯）=番薯，粉糯香甜。三者是完全不同的植物。' },
      },
      {
        h2: 'Kona Coffee Donut的ube菜单',
        body: '每天早上店内现做。目前的ube系列：',
        bullets: ['Ube麻糬甜甜圈 $3.95（3个$11.25 / 6个$22.50 / 12个$45，口味可混搭）', 'Ube马拉萨达 $3.95 / Ube奶油夹心马拉萨达 $4.95', 'Ube牛奶雪冰 $15.95（两人分享）', 'Ube拿铁 $7.95（热/冰）', '罐装Ube珍珠奶茶 $8.95'],
      },
      {
        h2: '第一次点什么',
        body: '初次尝试选ube麻糬甜甜圈，风味最纯粹；和香芋口味一起吃，差别一目了然。去海滩就带密封罐装ube珍珠奶茶；两个人在炎热的下午，点一碗ube雪冰。',
      },
    ],
    faq: [
      { q: 'Ube和香芋一样吗？', a: '不一样。Ube是鲜紫色的山药，甜而带坚果香；香芋（芋头）颜色发白、口感清淡、甜度低。Kona Coffee Donut（2142 Kalākaua Ave）两种麻糬甜甜圈都有（各$3.95），可以对比着吃。' },
      { q: 'Ube是什么味道？', a: '柔和的甜味，像香草+椰子+开心果的坚果香。没有苦味或土味，和牛奶特别搭。' },
      { q: '紫色是色素吗？', a: '不是。真正的ube因含花青素而天然呈紫色。' },
      { q: '威基基哪里能吃到ube？', a: 'Kona Coffee Donut（2142 Kalākaua Ave, Honolulu）有ube麻糬甜甜圈、马拉萨达、雪冰、拿铁和珍珠奶茶5种。距威基基海滩步行约5分钟，每天7点–21点。' },
    ],
    finalCTA: { headline: '来尝一口紫色', body: '卡拉考阿大道2142号。每天7点–21点，海滩步行5分钟。', visitLabel: '立即到店', callLabel: '致电 (808) 304-1808' },
  },
  es: {
    hero: {
      title: '¿Qué es el ube? El ñame morado explicado (y dónde probarlo en Waikiki)',
      subtitle: 'No es taro ni camote. El ube es un ñame morado filipino con un sabor suave a vainilla y coco.',
      date: '15 de septiembre de 2026',
      readTime: '4 min',
      badge: 'Explicación',
    },
    intro:
      'El ube (se pronuncia "u-be") es un ñame morado originario de Filipinas. Su pulpa es naturalmente violeta y, al cocinarse, tiene un dulzor suave con notas de vainilla, coco y pistacho. En Hawái llegó con la comunidad filipina y hoy está en helados, pancakes, donas y lattes. Aquí te explicamos qué es, en qué se diferencia del taro, a qué sabe y qué ube puedes probar en Kona Coffee Donut en Waikiki.',
    visitCTA: {
      headline: 'Ube de cinco formas en Waikiki',
      body: 'Dona mochi de ube, malasada de ube, bingsu de ube, latte de ube y boba de ube en lata. 2142 Kalākaua Ave, a 5 minutos de la playa. 7 AM – 9 PM todos los días, sin reserva.',
      menuLabel: 'Ver Menú',
      directionsLabel: 'Cómo llegar',
    },
    sections: [
      {
        h2: '¿Qué es el ube?',
        body: 'El ube es un ñame morado (Dioscorea alata) originario de Filipinas. Su pulpa es violeta de forma natural y, cocido, sabe suave y dulce, como vainilla con coco. No es taro ni camote morado: son plantas distintas. El taro es más pálido, terroso y menos dulce.',
      },
      {
        h2: 'Ube en Kona Coffee Donut',
        body: 'Hecho en casa cada mañana. La línea de ube:',
        bullets: ['Dona mochi de ube $3.95 (3 por $11.25 / 6 por $22.50 / docena $45, mezcla sabores)', 'Malasada de ube $3.95 / Malasada rellena de crema de ube $4.95', 'Bingsu de leche con ube $15.95 (para dos)', 'Latte de ube $7.95 (caliente o frío)', 'Boba milk tea de ube en lata $8.95'],
      },
    ],
    faq: [
      { q: '¿El ube es lo mismo que el taro?', a: 'No. El ube es un ñame morado, dulce y con notas de coco; el taro es pálido, terroso y menos dulce. En Kona Coffee Donut (2142 Kalākaua Ave) hay donas mochi de ambos ($3.95) para compararlos.' },
      { q: '¿A qué sabe el ube?', a: 'Dulce y suave, como vainilla, coco y pistacho. Combina muy bien con leche.' },
      { q: '¿Dónde pruebo ube en Waikiki?', a: 'Kona Coffee Donut, 2142 Kalākaua Ave, Honolulu: dona, malasada, bingsu, latte y boba de ube. A 5 minutos de la playa, 7 AM – 9 PM.' },
    ],
    finalCTA: { headline: 'Ven a probar el morado', body: '2142 Kalākaua Ave. 7 AM – 9 PM todos los días, a 5 minutos de la playa.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 304-1808' },
  },
};

export default function WhatIsUbeWaikikiPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
