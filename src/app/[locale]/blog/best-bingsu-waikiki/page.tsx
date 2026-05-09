'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'best-bingsu-waikiki',
  imageSrc: '/images/blog/best-bingsu-waikiki.jpeg',
  imageAlt: 'Best Bingsu in Waikiki — Korean shaved ice with mango, strawberry, and red bean toppings',
  schemaHeadline: 'Best Bingsu in Waikiki 2026: Korean Shaved Ice Worth the Trip',
  schemaDescription:
    'A guide to finding the best Korean bingsu in Waikiki, with flavors, prices, and where to try authentic shaved milk ice on Kalākaua Avenue.',
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Best Bingsu in Waikiki 2026',
      subtitle: 'Where to find authentic Korean shaved ice on Kalākaua Avenue — and why bingsu beats regular shaved ice on a hot Hawaii day.',
      date: 'Updated May 2026',
      readTime: '6 min read',
      badge: 'Korean Dessert Guide',
    },
    intro:
      "Bingsu — Korean shaved milk ice topped with fresh fruit, mochi, red bean, and condensed milk — has quietly become Waikiki's most-searched Korean dessert. It's snow-soft (not crunchy like Hawaiian shaved ice), generously portioned, and perfect for sharing on a humid afternoon. The challenge: there are only a handful of places in Waikiki where you can actually find it. This guide tells you exactly where to go, what to order, and why bingsu deserves a spot in your Waikiki dessert lineup.",
    visitCTA: {
      headline: 'Try Authentic Bingsu at Kona Coffee Donut',
      body:
        "On Kalākaua Avenue, steps from Waikiki Beach. We serve fresh Korean-style bingsu with snow-soft milk ice, premium toppings, and generous portions perfect for sharing. Open daily 7 AM to 9 PM — afternoon, post-dinner, or any time you need a tropical cool-down.",
      menuLabel: 'See Bingsu Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'What Makes Korean Bingsu Different',
        body: "If you've only had Hawaiian shaved ice, bingsu is going to surprise you. The difference starts with the ice itself: traditional Hawaiian shaved ice is made from frozen water, finely shaved into a fluffy texture. Bingsu is made from frozen milk, shaved into impossibly thin sheets that look and feel like fresh snow. The result is creamy, silky, and almost melts on contact — there's no crunchy crystal texture.\n\nThe second difference is the toppings. Hawaiian shaved ice typically uses bright fruit syrups poured over the ice. Bingsu uses fresh fruit, mochi, sweet red bean (patbingsu style), condensed milk, and ice cream — closer to a layered dessert than a syrupy treat. Each spoonful gets a different combination.",
        bullets: [
          'Snow-soft milk ice (not crunchy water ice)',
          'Fresh fruit, mochi, red bean, condensed milk',
          'Generous portions designed to share',
          'Less sweet, more layered, more refreshing',
        ],
      },
      {
        h2: 'Bingsu Flavors at Kona Coffee Donut',
        body:
          "We rotate our bingsu lineup based on what fruit is in season, but the core flavors are always available. Each bowl is built fresh to order with our signature snow-shaved milk ice base.",
        bullets: [
          'Mango Bingsu — fresh ripe mango cubes, mango sorbet, condensed milk drizzle',
          'Strawberry Bingsu — sliced strawberries, strawberry syrup, mochi pieces, sweet cream',
          'Matcha Bingsu — premium matcha powder, sweet red bean, mochi, vanilla ice cream',
          'Injeolmi (Soybean) Bingsu — Korean classic with toasted soybean powder and chewy mochi',
          'Hawaiian Tropical Bingsu — pineapple, coconut, lilikoi, mango — our island twist',
        ],
        pullout: {
          title: 'Best for sharing',
          body:
            'A single bowl easily feeds 2 people, and most groups order one to share alongside coffee or smoothies. Perfect after a beach day or a Kalākaua Avenue dinner.',
        },
      },
      {
        h2: 'Where to Get Bingsu in Waikiki',
        body:
          "Bingsu has not yet reached every corner of Honolulu, and within Waikiki specifically, the options are limited. Most authentic bingsu spots are 10–15 minutes away in Ala Moana or further inland. If you're staying in Waikiki and don't want to travel, Kona Coffee Donut on Kalākaua Avenue is the closest authentic option — and the only one walking-distance from Waikiki Beach.",
        pullout: {
          title: 'Address',
          body: '2142 Kalākaua Ave, Honolulu, HI 96815 — at the heart of Waikiki, walkable from any major hotel.',
        },
      },
      {
        h2: 'How to Eat Bingsu (The Right Way)',
        body:
          "First-timers often eat bingsu like a snow cone, working from the top down. That's not how it's done in Korea. Bingsu is meant to be mixed: take your spoon and gently fold the toppings into the milk ice from the top. The toppings distribute evenly, the ice picks up the flavors, and every spoonful tastes complete. Eat it slowly — bingsu is meant to be enjoyed over a conversation, not rushed.",
        bullets: [
          'Mix toppings into the ice with your spoon (don\'t just scoop from the top)',
          'Eat slowly — flavors layer as the ice slightly melts',
          'Pair with coffee or matcha latte to balance the sweetness',
          'Bring a friend — bowls are designed for two',
        ],
      },
      {
        h2: 'Bingsu vs Hawaiian Shaved Ice: Which Should You Try First?',
        body:
          "Honestly, you should try both — they're different desserts. If you want the classic Hawaiian beach experience with bright fruit syrups and ice cream, get Hawaiian shaved ice. If you want a creamy, layered, share-with-friends dessert with milk-based ice and fresh toppings, get bingsu. Most people who try bingsu after years of shaved ice end up adding it to their regular rotation — it's just that good. At Kona Coffee Donut we serve both, so you can compare side by side.",
      },
    ],
    faq: [
      {
        q: 'Where is the best bingsu in Waikiki?',
        a: 'Kona Coffee Donut at 2142 Kalākaua Ave is the closest authentic bingsu spot to Waikiki Beach — walking distance from major hotels. We serve fresh Korean-style bingsu with snow-soft milk ice and premium toppings, open daily 7 AM to 9 PM.',
      },
      {
        q: 'How much does bingsu cost in Waikiki?',
        a: 'Authentic Korean bingsu typically runs $14–$18 in Waikiki, with bowls large enough to share between two people. Kona Coffee Donut\'s bingsu is priced for sharing, making it an excellent value for groups.',
      },
      {
        q: 'What is the difference between bingsu and Hawaiian shaved ice?',
        a: 'Bingsu is made from shaved frozen milk (snow-soft, creamy texture) and topped with fresh fruit, mochi, and red bean. Hawaiian shaved ice is made from shaved frozen water (lighter, crunchier) and topped with fruit syrups. Both are great — bingsu is creamier and more layered.',
      },
      {
        q: 'Is bingsu Korean or Japanese?',
        a: 'Bingsu is Korean. The modern fruit-and-cream bingsu seen on social media is a Korean specialty — though it has roots tracing back to ancient ice desserts across East Asia. Japan has its own shaved-ice dessert called kakigori, which is similar but uses different toppings.',
      },
      {
        q: 'What does bingsu taste like?',
        a: 'Bingsu tastes like a layered dessert: the milk ice itself is mildly sweet and creamy, while the toppings (fresh fruit, mochi, red bean, condensed milk) add fruity, chewy, and rich notes. It\'s less sweet than American ice cream and more refreshing than Hawaiian shaved ice.',
      },
      {
        q: 'Can I get bingsu near Waikiki Beach?',
        a: 'Yes — Kona Coffee Donut on Kalākaua Avenue is the closest bingsu spot to Waikiki Beach, just steps from the sand. Open until 9 PM daily, perfect for an after-beach or after-dinner dessert.',
      },
    ],
    finalCTA: {
      headline: 'Skip the Search — Bingsu Is Right Here in Waikiki',
      body: "Authentic Korean bingsu, fresh ingredients, and the only walkable spot from Waikiki Beach. Stop by today.",
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: {
      title: '2026年 ワイキキで食べられる絶品ビンス',
      subtitle: 'カラカウア通りで本格的な韓国かき氷ビンスはここで。暑いハワイの日にぴったり。',
      date: '2026年5月更新',
      readTime: '読了6分',
      badge: '韓国スイーツガイド',
    },
    intro:
      'ビンスとは、韓国式のミルク氷を細かく削って、新鮮なフルーツ、餅、あずき、練乳をトッピングした韓国伝統のデザートです。ハワイのかき氷とは違い、雪のようにふわふわで、シェアにぴったりのボリュームがあります。ワイキキで本格的なビンスが食べられるお店は限られており、このガイドではどこで何を頼むべきか、なぜビンスがワイキキのデザート選びにおすすめなのかをご紹介します。',
    visitCTA: {
      headline: 'コナコーヒードーナツで本場のビンスを',
      body: 'ワイキキビーチからすぐのカラカウア通り。雪のようなミルク氷、こだわりのトッピング、シェアにぴったりのボリューム。毎日朝7時〜夜9時営業。',
      menuLabel: 'ビンスメニューを見る',
      directionsLabel: '行き方を確認',
    },
    sections: [
      {
        h2: 'ビンスとハワイのかき氷の違い',
        body:
          'ビンスは凍らせた牛乳を削って作る韓国デザートで、口に入れると雪のようにふわっと溶けます。ハワイのかき氷は水を凍らせて削るので、シャリッとした食感が特徴。トッピングもハワイのかき氷はシロップ中心ですが、ビンスは新鮮なフルーツ、餅、あずき、練乳など層になっています。',
        bullets: [
          'ふわふわのミルク氷（シャリッとした水氷ではない）',
          '生フルーツ、餅、あずき、練乳のトッピング',
          'シェアにぴったりのボリューム',
          '甘すぎず、爽やかで何層にも楽しめる味',
        ],
      },
      {
        h2: 'コナコーヒードーナツのビンスメニュー',
        body: '季節のフルーツに合わせてラインナップを変えていますが、定番フレーバーはいつでもご用意しています。',
        bullets: [
          'マンゴービンス — 完熟マンゴー、マンゴーソルベ、練乳',
          'いちごビンス — スライスいちご、いちごシロップ、餅、生クリーム',
          '抹茶ビンス — 上質な抹茶、あずき、餅、バニラアイス',
          'インジョルミ（きな粉）ビンス — 香ばしいきな粉と餅の韓国伝統味',
          'ハワイアントロピカルビンス — パイナップル、ココナッツ、リリコイ、マンゴー',
        ],
      },
      {
        h2: 'ワイキキでビンスが食べられる場所',
        body:
          'ワイキキ周辺で本格的なビンスを提供しているお店は意外と少なく、多くはアラモアナや内陸エリアにあります。コナコーヒードーナツはワイキキビーチから徒歩圏内で本場のビンスが楽しめる唯一のお店です。',
      },
      {
        h2: 'ビンスの正しい食べ方',
        body:
          '初めての方はかき氷のように上から食べがちですが、本場では混ぜて食べるのが正解です。スプーンで上のトッピングをミルク氷に軽く混ぜ込み、全体を均等に。各スプーンで全ての味が楽しめます。',
        bullets: [
          'スプーンでトッピングと氷を混ぜて食べる',
          'ゆっくり味わって、層になった味を楽しむ',
          'コーヒーや抹茶ラテと合わせると甘さが引き立つ',
          '2人でシェアするのがおすすめ',
        ],
      },
      {
        h2: 'ビンスとハワイアンかき氷、どちらがおすすめ？',
        body:
          '正直、両方試すのが一番です。ハワイらしいフルーツシロップとアイスのかき氷も最高ですし、クリーミーで層になったビンスも別物の美味しさ。コナコーヒードーナツでは両方ご用意していますので、食べ比べもできます。',
      },
    ],
    faq: [
      { q: 'ワイキキでビンスを食べられる場所は？', a: 'コナコーヒードーナツ（カラカウア通り 2142）がワイキキビーチから徒歩圏内で本格ビンスを楽しめる唯一のお店です。毎日朝7時〜夜9時営業。' },
      { q: 'ワイキキのビンスはいくらくらい？', a: '本格ビンスは$14〜$18が目安。1ボウルで2人でシェアできるサイズなのでコスパも良好です。' },
      { q: 'ビンスとハワイのかき氷の違いは？', a: 'ビンスはミルク氷を削るのでクリーミー、ハワイのかき氷は水氷でシャリッとしています。トッピングもビンスは生フルーツ・餅・あずき、ハワイは果物シロップが中心です。' },
      { q: 'ビンスは韓国発祥？', a: 'はい、ビンスは韓国発祥のデザートです。日本のかき氷とは別物で、ミルク氷とトッピング層が特徴です。' },
      { q: 'ビンスの味は？', a: 'ミルク氷自体は控えめな甘さでクリーミー、トッピングのフルーツや餅、あずきと合わさってデザートのような層のある味わいです。' },
    ],
    finalCTA: {
      headline: 'ワイキキで本場のビンスを',
      body: 'カラカウア通り 2142、ワイキキビーチから徒歩圏内。今日お越しください。',
      visitLabel: '今日来店する',
      callLabel: '電話 (808) 304-1808',
    },
  },
  ko: {
    hero: {
      title: '2026 와이키키 빙수 베스트',
      subtitle: '와이키키 칼라카우아 거리에서 정통 한국 빙수를 찾는다면 — 무더운 하와이 날에 딱 맞는 디저트.',
      date: '2026년 5월 업데이트',
      readTime: '6분 분량',
      badge: '한식 디저트 가이드',
    },
    intro:
      '빙수는 우유 얼음을 곱게 갈아 신선한 과일, 떡, 팥, 연유를 올린 한국 전통 디저트입니다. 하와이안 셰이브드 아이스와 달리 눈처럼 부드럽고, 둘이 나눠 먹기 좋은 사이즈입니다. 와이키키에서 정통 빙수를 맛볼 수 있는 곳은 많지 않으니, 이 가이드를 참고해 어디에서 무엇을 먹을지 정하세요.',
    visitCTA: {
      headline: '코나커피도넛에서 정통 빙수를',
      body: '와이키키 비치에서 도보 거리, 칼라카우아 거리에 위치. 눈처럼 부드러운 우유 얼음과 푸짐한 토핑, 둘이 나눠 먹기 좋은 사이즈. 매일 오전 7시 – 오후 9시 영업.',
      menuLabel: '빙수 메뉴 보기',
      directionsLabel: '길찾기',
    },
    sections: [
      {
        h2: '한국 빙수와 하와이안 셰이브드 아이스의 차이',
        body:
          '빙수는 얼린 우유를 깎아 만들어 입에 넣으면 눈처럼 사르르 녹습니다. 하와이안 셰이브드 아이스는 얼음을 갈아 만들어 사각거리는 식감이 특징입니다. 토핑도 빙수는 생과일, 떡, 팥, 연유 등 층층이 쌓이고, 하와이안은 과일 시럽 위주입니다.',
        bullets: [
          '눈처럼 부드러운 우유 얼음',
          '생과일, 떡, 팥, 연유 토핑',
          '둘이 나눠 먹기 좋은 사이즈',
          '덜 달고, 층층이 풍부한 맛',
        ],
      },
      {
        h2: '코나커피도넛 빙수 메뉴',
        body: '제철 과일에 따라 라인업이 바뀌지만, 시그니처 메뉴는 항상 준비되어 있습니다.',
        bullets: [
          '망고 빙수 — 신선한 망고, 망고 소르베, 연유',
          '딸기 빙수 — 딸기 슬라이스, 딸기 시럽, 떡, 생크림',
          '말차 빙수 — 프리미엄 말차 가루, 팥, 떡, 바닐라 아이스크림',
          '인절미 빙수 — 고소한 콩가루와 쫄깃한 떡',
          '하와이안 트로피컬 빙수 — 파인애플, 코코넛, 릴리코이, 망고',
        ],
      },
      {
        h2: '와이키키에서 빙수 먹는 곳',
        body:
          '와이키키 안에서 정통 빙수를 파는 곳은 손에 꼽습니다. 대부분은 알라모아나 쪽이나 내륙으로 이동해야 합니다. 코나커피도넛은 와이키키 비치에서 도보로 갈 수 있는 유일한 정통 빙수 가게입니다.',
      },
      {
        h2: '빙수 제대로 먹는 법',
        body:
          '처음 드시는 분들은 셰이브드 아이스처럼 위에서 떠 먹는 경우가 많은데, 한국에서는 비벼 먹는 것이 정석입니다. 스푼으로 토핑과 얼음을 살살 비벼 골고루 섞어 드세요.',
        bullets: [
          '스푼으로 토핑과 얼음 비벼 먹기',
          '천천히 즐기며 층층의 맛 음미',
          '커피나 말차 라테와 페어링',
          '둘이 나눠 먹기 좋음',
        ],
      },
      {
        h2: '빙수 vs 하와이안 셰이브드 아이스',
        body:
          '솔직히 둘 다 드셔보세요. 하와이 분위기를 즐기려면 하와이안 셰이브드 아이스, 크리미하고 풍부한 디저트를 원하시면 빙수입니다. 코나커피도넛에서는 두 가지 모두 제공하니 비교도 가능합니다.',
      },
    ],
    faq: [
      { q: '와이키키 어디에서 빙수를 먹을 수 있나요?', a: '코나커피도넛(2142 칼라카우아 거리)이 와이키키 비치에서 도보 거리의 유일한 정통 빙수 가게입니다. 매일 오전 7시 – 오후 9시.' },
      { q: '와이키키 빙수 가격은?', a: '$14–$18 정도이며, 한 그릇으로 둘이 나눠 먹을 수 있어 가성비가 좋습니다.' },
      { q: '빙수와 하와이안 셰이브드 아이스의 차이는?', a: '빙수는 우유 얼음으로 크리미하고 부드러우며, 하와이안은 물 얼음으로 사각거립니다. 토핑도 빙수는 생과일·떡·팥, 하와이안은 과일 시럽 위주입니다.' },
      { q: '빙수는 한국 디저트인가요?', a: '네, 빙수는 한국 디저트입니다. 일본의 카키고리와는 다른 우유 얼음 베이스가 특징입니다.' },
      { q: '빙수 맛이 어떤가요?', a: '우유 얼음 자체는 은은한 단맛에 크리미하고, 토핑과 어우러져 층층이 풍부한 맛을 냅니다.' },
    ],
    finalCTA: {
      headline: '와이키키에서 정통 빙수를 즐기세요',
      body: '2142 칼라카우아 거리, 와이키키 비치에서 도보 거리. 오늘 방문해보세요.',
      visitLabel: '오늘 방문하기',
      callLabel: '전화 (808) 304-1808',
    },
  },
  zh: {
    hero: {
      title: '2026 威基基最佳雪冰',
      subtitle: '在卡拉考阿大道找到正宗的韩式雪冰 — 炎热夏威夷的最佳选择。',
      date: '2026年5月更新',
      readTime: '6分钟阅读',
      badge: '韩式甜品指南',
    },
    intro:
      '雪冰（빙수）是韩国传统冰品，将冷冻牛奶刨成雪花状细冰，再加上新鲜水果、年糕、红豆和炼乳。和夏威夷刨冰不同，雪冰口感如雪花般绵密，分量足够两人分享。在威基基能吃到正宗雪冰的地方不多，本指南告诉您该去哪里、点什么。',
    visitCTA: {
      headline: '在 Kona Coffee Donut 享用正宗雪冰',
      body: '位于卡拉考阿大道，距威基基海滩仅几步之遥。绵密的牛奶雪冰、丰富配料、适合分享的份量。每天早7点至晚9点营业。',
      menuLabel: '查看雪冰菜单',
      directionsLabel: '获取路线',
    },
    sections: [
      {
        h2: '韩式雪冰与夏威夷刨冰的区别',
        body:
          '雪冰用冷冻牛奶制成，入口绵密如雪花。夏威夷刨冰用冷冻水制成，口感清脆。配料上雪冰以新鲜水果、年糕、红豆、炼乳层层叠加，夏威夷刨冰主要靠水果糖浆。',
        bullets: ['绵密牛奶雪冰', '新鲜水果、年糕、红豆、炼乳', '适合两人分享的份量', '甜度适中，层次丰富'],
      },
      {
        h2: 'Kona Coffee Donut 雪冰菜单',
        body: '依据当季水果调整菜单，但招牌口味全年供应。',
        bullets: [
          '芒果雪冰 — 新鲜芒果、芒果雪葩、炼乳',
          '草莓雪冰 — 草莓片、草莓糖浆、年糕、奶油',
          '抹茶雪冰 — 高级抹茶粉、红豆、年糕、香草冰淇淋',
          '黄豆粉年糕雪冰 — 韩国经典口味',
          '夏威夷热带雪冰 — 菠萝、椰子、百香果、芒果',
        ],
      },
      {
        h2: '威基基哪里能吃到雪冰',
        body:
          '威基基地区提供正宗雪冰的店家不多，大多在阿拉莫纳或内陆区域。Kona Coffee Donut 是威基基海滩步行可达的唯一正宗雪冰店。',
      },
      {
        h2: '正确吃雪冰的方法',
        body:
          '初次尝试的人常像吃刨冰一样从上往下挖，但韩国人的吃法是用勺子把配料和雪冰轻轻拌匀，让每一口都能尝到完整层次。',
        bullets: ['用勺子拌匀配料与冰', '慢慢享用，体验层次感', '搭配咖啡或抹茶拿铁', '推荐两人分享'],
      },
      {
        h2: '雪冰还是夏威夷刨冰？',
        body: '建议两个都试试。夏威夷刨冰带来海滩风情，雪冰则是绵密层次的甜品体验。Kona Coffee Donut 两种都提供，方便您比较。',
      },
    ],
    faq: [
      { q: '威基基哪里能吃到雪冰？', a: 'Kona Coffee Donut（卡拉考阿大道 2142 号）是威基基海滩步行可达的唯一正宗雪冰店，每天早7点至晚9点。' },
      { q: '威基基的雪冰价格？', a: '正宗雪冰约 $14–$18，份量足够两人分享，性价比高。' },
      { q: '雪冰和夏威夷刨冰有什么不同？', a: '雪冰是牛奶冰、绵密；夏威夷刨冰是水冰、清脆。配料上雪冰以新鲜水果、年糕、红豆为主。' },
      { q: '雪冰是韩国甜品吗？', a: '是的，雪冰源自韩国，与日本的刨冰（カキ氷）不同，特点是牛奶冰底。' },
      { q: '雪冰是什么味道？', a: '牛奶冰本身微甜绵密，搭配水果、年糕、红豆等配料层次丰富。' },
    ],
    finalCTA: {
      headline: '在威基基享受正宗雪冰',
      body: '卡拉考阿大道 2142 号，距威基基海滩仅几步之遥。今天就来吧。',
      visitLabel: '立即到店',
      callLabel: '致电 (808) 304-1808',
    },
  },
  es: {
    hero: {
      title: 'Mejor Bingsu en Waikiki 2026',
      subtitle: 'Dónde encontrar bingsu coreano auténtico en Kalākaua Avenue.',
      date: 'Actualizado mayo 2026',
      readTime: '6 min de lectura',
      badge: 'Guía de Postres Coreanos',
    },
    intro:
      'El bingsu — hielo de leche raspado al estilo coreano con fruta fresca, mochi, frijol rojo y leche condensada — se ha convertido en uno de los postres asiáticos más buscados en Waikiki. Suave como nieve, generosamente porcionado y perfecto para compartir.',
    visitCTA: {
      headline: 'Prueba Bingsu Auténtico en Kona Coffee Donut',
      body: 'En Kalākaua Avenue, a pasos de la playa de Waikiki. Bingsu coreano fresco con hielo de leche suave, ingredientes premium y porciones generosas para compartir. Abierto 7 AM – 9 PM diariamente.',
      menuLabel: 'Ver Menú',
      directionsLabel: 'Cómo llegar',
    },
    sections: [
      {
        h2: 'Diferencia entre Bingsu y Hielo Hawaiano',
        body:
          'El bingsu se hace con leche congelada raspada, suave como nieve. El hielo hawaiano se hace con agua congelada y tiene textura crujiente. Los toppings también son distintos: el bingsu lleva fruta fresca, mochi y frijol rojo; el hawaiano usa siropes.',
      },
      {
        h2: 'Sabores en Kona Coffee Donut',
        body: 'Rotamos sabores según temporada, pero los clásicos siempre están disponibles.',
        bullets: ['Mango Bingsu', 'Strawberry Bingsu', 'Matcha Bingsu', 'Injeolmi (Soybean) Bingsu', 'Hawaiian Tropical Bingsu'],
      },
      {
        h2: 'Dónde Encontrar Bingsu en Waikiki',
        body: 'Las opciones auténticas en Waikiki son limitadas. Kona Coffee Donut es el único spot caminable desde la playa.',
      },
      {
        h2: 'Cómo Comer Bingsu',
        body: 'Mezcla los toppings con el hielo usando la cuchara — no comas solo desde arriba como un raspado. Disfruta despacio.',
      },
    ],
    faq: [
      { q: '¿Dónde está el mejor bingsu en Waikiki?', a: 'Kona Coffee Donut en 2142 Kalākaua Ave — el único bingsu auténtico caminable desde la playa.' },
      { q: '¿Cuánto cuesta?', a: 'Aproximadamente $14–$18, suficiente para dos personas.' },
      { q: '¿Es bingsu coreano?', a: 'Sí, el bingsu es coreano. Es distinto al kakigori japonés.' },
    ],
    finalCTA: {
      headline: 'Bingsu Auténtico en Waikiki',
      body: 'Kalākaua Avenue 2142, a pasos de la playa.',
      visitLabel: 'Visítanos Hoy',
      callLabel: 'Llama (808) 304-1808',
    },
  },
};

export default function BestBingsuWaikikiPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
