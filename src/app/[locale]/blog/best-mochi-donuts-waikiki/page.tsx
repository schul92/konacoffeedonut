'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'best-mochi-donuts-waikiki',
  imageSrc: '/images/blog/best-mochi-donuts-waikiki.jpeg',
  imageAlt:
    'Best mochi donuts in Waikiki — fresh rice-flour pon-de-ring donuts in ube, matcha, cookies & creme, dark chocolate, and churro',
  schemaHeadline: 'Best Mochi Donuts in Waikiki (2026): 24 Fresh Rice-Flour Flavors',
  schemaDescription:
    'A guide to the best mochi donuts in Waikiki — fresh rice-flour pon-de-ring donuts in 24 flavors on Kalākaua Ave, paired with 100% Kona coffee.',
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Best Mochi Donuts in Waikiki',
      subtitle:
        'Fresh rice-flour pon-de-ring donuts — crispy on the outside, impossibly chewy inside — in 24 flavors on Kalākaua Ave.',
      date: 'Updated June 2026',
      readTime: '5 min read',
      badge: 'Mochi Donuts',
    },
    intro:
      'If you are walking Waikiki and craving something you cannot get back home, mochi donuts are it. Made with rice flour instead of regular wheat flour, they have a signature chewy "pull" and a light, crispy edge that a normal donut just cannot match. At Kona Coffee Donut on Kalākaua Avenue, every batch is made fresh daily in 24 flavors — from ube and matcha to cookies & creme and dark chocolate. Here is what makes them special and how to order like a local.',
    visitCTA: {
      headline: 'Fresh mochi donuts, 5 minutes from Waikiki Beach',
      body: 'Made fresh daily at 2142 Kalākaua Ave. Grab a box of 24 flavors and a 100% Kona coffee to go.',
      menuLabel: 'View Full Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'What makes a mochi donut different?',
        body:
          'The secret is the flour. A mochi donut is made with glutinous rice flour (mochiko) instead of wheat flour, which gives the dough its famously chewy, bouncy bite — closer to mochi than to cake. It is shaped like a "pon-de-ring," eight connected dough balls in a circle, so you can pull off one ball at a time. Fried fresh, the outside turns light and crispy while the inside stays soft and stretchy. That crispy-outside, chewy-inside contrast is the whole reason mochi donuts have taken over dessert feeds worldwide.',
        bullets: [
          'Rice flour (mochiko) = chewy, bouncy texture you cannot get from a regular donut',
          'Pon-de-ring shape — pull apart one ball at a time',
          'Fried fresh so the edges stay crispy',
          'Lighter and less greasy than a classic cake donut',
        ],
      },
      {
        h2: 'The flavors worth trying first',
        body:
          'We rotate 24 flavors, glazed and topped fresh. If it is your first visit, start with these crowd favorites — then build a box to share.',
        bullets: [
          'Ube — purple yam, our most popular flavor and the prettiest on the table',
          'Cookies & Creme — crushed Oreo over a vanilla glaze',
          'Matcha — stone-ground green tea, lightly sweet',
          'Dark Chocolate — rich cocoa glaze finished with a Ferrero Rocher',
          'Churro — cinnamon sugar, warm and nostalgic',
          'Black Sesame, Strawberry, Injeolmi, Guava Pineapple and more',
        ],
        pullout: {
          title: 'Best pick for first-timers',
          body: 'Get the Ube and the Cookies & Creme. They are the two flavors people come back for — and they look incredible in photos.',
        },
      },
      {
        h2: 'Mochi donuts + 100% Kona coffee = the perfect Waikiki pairing',
        body:
          'This is why we put both under one roof. A chewy, lightly sweet mochi donut next to a cup of smooth 100% Kona coffee is one of the best dessert-and-coffee combos in Honolulu. The clean, low-acidity Kona coffee cuts the sweetness, and the warm chew of a fresh donut is exactly what you want with a cold brew or a Kona latte. It is a five-minute treat after the beach or a slow afternoon pick-me-up.',
        pullout: {
          title: 'Our move',
          body: 'A 6-pack of mochi donuts + a Kona cold brew to share. Sweet, smooth, and very Waikiki.',
        },
      },
      {
        h2: 'How to order: packs and pricing',
        body:
          'Mochi donuts are sold by the box, and a half-dozen is the sweet spot for trying multiple flavors. Everything is made fresh daily, so flavors are best earlier in the day before popular ones sell out.',
        bullets: [
          '3 pieces — $11.25',
          '6 pieces — $22.50 (most popular, best for sharing)',
          '12 pieces — $45.00',
          'Mix and match any flavors in your box',
        ],
      },
      {
        h2: 'Where to find us',
        body:
          'We are at 2142 Kalākaua Avenue, about a 5-minute walk from Waikiki Beach, open daily 7 AM–9 PM. Come in the morning for the widest flavor selection, or swing by in the afternoon for a donut-and-coffee break. Dine in or grab a box to take to the beach.',
      },
    ],
    faq: [
      {
        q: 'What are mochi donuts made of?',
        a: 'Mochi donuts are made primarily with glutinous rice flour (mochiko), which gives them their signature chewy, bouncy texture. They are fried fresh so the outside is crispy while the inside stays soft and stretchy.',
      },
      {
        q: 'Do mochi donuts contain allergens?',
        a: 'Please ask our staff about current ingredients and possible cross-contact before ordering if you have any dietary restrictions or allergies.',
      },
      {
        q: 'How much are mochi donuts in Waikiki?',
        a: 'At Kona Coffee Donut, mochi donuts are $11.25 for 3 pieces, $22.50 for 6 pieces, and $45.00 for 12 pieces. You can mix and match any of the 24 flavors in your box.',
      },
      {
        q: 'What is the most popular mochi donut flavor?',
        a: 'Ube (purple yam) is our most popular flavor, followed by Cookies & Creme and Matcha. For a first visit, the Ube and Cookies & Creme are the two to start with.',
      },
      {
        q: 'Where can I get fresh mochi donuts near Waikiki Beach?',
        a: 'Kona Coffee Donut at 2142 Kalākaua Ave is about a 5-minute walk from Waikiki Beach, open daily 7 AM–9 PM, with mochi donuts made fresh every day.',
      },
    ],
    finalCTA: {
      headline: 'Come try them fresh today',
      body: 'Mochi donuts are best the day they are made. Stop by 2142 Kalākaua Ave for a box and a 100% Kona coffee.',
      visitLabel: 'Get Directions',
      callLabel: 'Call Us',
    },
  },

  ja: {
    hero: {
      title: 'ワイキキで人気のモチドーナツ',
      subtitle:
        '米粉で作る外はカリッ、中はモチモチのポンデリング系ドーナツ。カラカウア通りで24フレーバー。',
      date: '2026年6月更新',
      readTime: '5分で読めます',
      badge: 'モチドーナツ',
    },
    intro:
      'ワイキキ散策の合間に、日本では味わえない特別なスイーツを探しているなら、モチドーナツがおすすめです。小麦粉ではなく米粉(もち粉)で作るので、普通のドーナツにはないモチモチとした弾力と、軽くてカリッとした食感が楽しめます。カラカウア通りのKona Coffee Donutでは、ウベ(紫芋)や抹茶、クッキー&クリーム、ダークチョコレートなど24種類を毎日焼きたてでご用意。その魅力と、現地流の注文方法をご紹介します。',
    visitCTA: {
      headline: 'ワイキキビーチから徒歩5分、焼きたてのモチドーナツ',
      body: '2142 Kalākaua Aveで毎日手作り。24フレーバーのボックスと100%コナコーヒーをぜひテイクアウトで。',
      menuLabel: 'メニューを見る',
      directionsLabel: '行き方を確認',
    },
    sections: [
      {
        h2: 'モチドーナツは何が違うの？',
        body:
          '秘密は「粉」にあります。モチドーナツは小麦粉ではなく、もち米から作るもち粉を使うため、ケーキよりもお餅に近い、独特のモチモチ・もっちりとした食感になります。形は8つの生地玉がつながった「ポンデリング」状で、ひと玉ずつちぎって食べられます。揚げたては外側が軽くカリッと、中はやわらかく伸びる食感。この「外カリ・中モチ」のコントラストこそが、世界中でモチドーナツが人気になった理由です。',
        bullets: [
          '米粉(もち粉)= 普通のドーナツにはないモチモチ食感',
          'ポンデリング型 — ひと玉ずつちぎって楽しめる',
          '揚げたてだから縁はカリッ',
          '一般的なケーキドーナツより軽くて重たくない',
        ],
      },
      {
        h2: 'まず試したいフレーバー',
        body:
          '24種類のフレーバーを、グレーズもトッピングも毎日新しく仕上げています。初めてなら、まずは定番の人気フレーバーから。シェア用にボックスで揃えるのもおすすめです。',
        bullets: [
          'ウベ(紫芋)— 一番人気で見た目も華やか',
          'クッキー&クリーム — バニラグレーズに砕いたオレオ',
          '抹茶 — 石臼挽きの上品な甘さ',
          'ダークチョコレート — 濃厚ココアにフェレロロシェをトッピング',
          'チュロ — シナモンシュガーで懐かしい味わい',
          '黒ごま、ストロベリー、きなこ、グアバパイナップル など',
        ],
        pullout: {
          title: '初めての方へのおすすめ',
          body: 'ウベとクッキー&クリームを。リピーターが多い2種類で、写真映えも抜群です。',
        },
      },
      {
        h2: 'モチドーナツ × 100%コナコーヒー = ワイキキ最高の組み合わせ',
        body:
          '当店が両方を一つの店で提供する理由がこれです。モチモチで上品な甘さのドーナツと、すっきりなめらかな100%コナコーヒーの組み合わせは、ホノルルでも屈指のスイーツ&コーヒー体験。酸味の少ないクリーンなコナコーヒーが甘さを引き締め、焼きたてのモチモチ感はコールドブリューやコナラテと相性抜群です。ビーチ帰りの一息にも、午後のリフレッシュにもぴったり。',
        pullout: {
          title: '当店のおすすめ',
          body: 'モチドーナツ6個セット+コナコールドブリューをシェアで。甘く、なめらかで、とてもワイキキらしい組み合わせです。',
        },
      },
      {
        h2: '注文方法：セットと価格',
        body:
          'モチドーナツはボックス単位での販売です。いろいろなフレーバーを試すなら6個入りがちょうど良いサイズ。毎日手作りのため、人気フレーバーは売り切れることもあり、午前中ほど種類が豊富です。',
        bullets: [
          '3個 — $11.25',
          '6個 — $22.50(一番人気・シェアに最適)',
          '12個 — $45.00',
          'お好きなフレーバーを自由に組み合わせ可能',
        ],
      },
      {
        h2: '店舗情報',
        body:
          '場所は2142 Kalākaua Avenue、ワイキキビーチから徒歩約5分。毎日7時〜21時の営業です。フレーバーが一番豊富なのは午前中。午後はドーナツとコーヒーで一息つくのもおすすめです。イートインも、ビーチに持っていくテイクアウトもどうぞ。',
      },
    ],
    faq: [
      {
        q: 'モチドーナツは何でできていますか？',
        a: 'モチドーナツは主にもち米から作るもち粉を使用しており、これが独特のモチモチ・弾力のある食感を生みます。揚げたてで、外はカリッ、中はやわらかく伸びる食感です。',
      },
      {
        q: 'モチドーナツはグルテンフリーですか？',
        a: 'いいえ。米粉を使っていますが、当店のモチドーナツには小麦も含まれているため、グルテンフリーではなく、セリアック病の方には適していません。アレルギーや原材料については、ご注文前にスタッフへお気軽にお尋ねください。',
      },
      {
        q: 'ワイキキのモチドーナツの値段は？',
        a: 'Kona Coffee Donutでは、3個$11.25、6個$22.50、12個$45.00です。24種類のフレーバーから自由に組み合わせていただけます。',
      },
      {
        q: '一番人気のフレーバーは？',
        a: 'ウベ(紫芋)が一番人気で、続いてクッキー&クリーム、抹茶が人気です。初めての方はウベとクッキー&クリームから試すのがおすすめです。',
      },
      {
        q: 'ワイキキビーチ近くで焼きたてのモチドーナツが買える場所は？',
        a: '2142 Kalākaua AveのKona Coffee Donutは、ワイキキビーチから徒歩約5分。毎日7時〜21時の営業で、モチドーナツは毎日手作りしています。',
      },
    ],
    finalCTA: {
      headline: '今日、焼きたてをぜひ',
      body: 'モチドーナツは作りたてが一番。2142 Kalākaua Aveで、ボックスと100%コナコーヒーをどうぞ。',
      visitLabel: '行き方を確認',
      callLabel: '電話する',
    },
  },

  ko: {
    hero: {
      title: '와이키키 모찌도넛 맛집',
      subtitle:
        '쌀가루로 만들어 겉은 바삭, 속은 쫄깃한 폰데링 도넛 — 칼라카우아 애비뉴에서 24가지 맛으로.',
      date: '2026년 6월 업데이트',
      readTime: '5분 분량',
      badge: '모찌도넛',
    },
    intro:
      '와이키키를 걷다가 한국에서는 맛보기 어려운 특별한 디저트가 당긴다면, 정답은 모찌도넛입니다. 밀가루 대신 쌀가루(찹쌀가루)로 만들어 일반 도넛에서는 느낄 수 없는 쫄깃한 식감과 가볍고 바삭한 가장자리가 매력이죠. 칼라카우아 애비뉴의 Kona Coffee Donut에서는 우베(자색 고구마), 말차, 쿠키앤크림, 다크초콜릿 등 24가지 맛을 매일 갓 만들어 냅니다. 무엇이 특별한지, 그리고 현지처럼 주문하는 법을 알려드릴게요.',
    visitCTA: {
      headline: '와이키키 비치에서 도보 5분, 갓 만든 모찌도넛',
      body: '2142 Kalākaua Ave에서 매일 직접 만듭니다. 24가지 맛 한 박스와 100% 코나커피를 포장해 가세요.',
      menuLabel: '전체 메뉴 보기',
      directionsLabel: '길찾기',
    },
    sections: [
      {
        h2: '모찌도넛은 뭐가 다를까요?',
        body:
          '비밀은 가루에 있습니다. 모찌도넛은 밀가루가 아닌 찹쌀가루로 만들어, 케이크보다 떡에 가까운 쫄깃하고 탱글한 식감을 냅니다. 모양은 8개의 반죽 볼이 둥글게 이어진 "폰데링" 형태라 하나씩 떼어 먹을 수 있어요. 갓 튀겨내면 겉은 가볍고 바삭, 속은 부드럽고 쭉 늘어납니다. 이 "겉바속쫄"의 대비가 전 세계 디저트 피드를 점령한 바로 그 이유입니다.',
        bullets: [
          '쌀가루(찹쌀가루) = 일반 도넛에는 없는 쫄깃한 식감',
          '폰데링 모양 — 하나씩 떼어 먹는 재미',
          '갓 튀겨 가장자리는 바삭',
          '일반 케이크 도넛보다 가볍고 덜 느끼함',
        ],
      },
      {
        h2: '처음이라면 이 맛부터',
        body:
          '24가지 맛을 글레이즈와 토핑까지 매일 새로 마무리합니다. 첫 방문이라면 인기 맛부터 시작해, 나눠 먹을 박스를 만들어 보세요.',
        bullets: [
          '우베(자색 고구마) — 가장 인기 있고 비주얼도 최고',
          '쿠키앤크림 — 바닐라 글레이즈에 오레오 크럼블',
          '말차 — 곱게 간 녹차, 은은한 단맛',
          '다크초콜릿 — 진한 코코아 글레이즈에 페레로로쉐',
          '츄러스 — 시나몬 슈거의 추억의 맛',
          '흑임자, 딸기, 인절미, 구아바 파인애플 등',
        ],
        pullout: {
          title: '첫 방문 추천',
          body: '우베와 쿠키앤크림을 드세요. 재방문을 부르는 두 가지 맛이고, 사진도 정말 예쁘게 나옵니다.',
        },
      },
      {
        h2: '모찌도넛 + 100% 코나커피 = 와이키키 최고의 궁합',
        body:
          '저희가 두 가지를 한 곳에서 파는 이유가 바로 이것입니다. 쫄깃하고 은은하게 단 모찌도넛과 부드럽고 깔끔한 100% 코나커피의 조합은 호놀룰루에서도 손꼽히는 디저트 & 커피 경험이에요. 산미가 적고 깔끔한 코나커피가 단맛을 잡아주고, 갓 만든 도넛의 따뜻한 쫄깃함은 콜드브루나 코나 라떼와 환상의 궁합입니다. 해변 후 5분간의 디저트로도, 느긋한 오후의 충전으로도 완벽하죠.',
        pullout: {
          title: '저희 추천 조합',
          body: '모찌도넛 6개 세트 + 코나 콜드브루를 나눠 드세요. 달콤하고 부드러운, 아주 와이키키다운 조합입니다.',
        },
      },
      {
        h2: '주문 방법: 구성과 가격',
        body:
          '모찌도넛은 박스 단위로 판매합니다. 여러 맛을 맛보려면 6개입이 딱 좋아요. 매일 직접 만들기 때문에, 인기 맛은 일찍 소진될 수 있어 오전에 종류가 가장 많습니다.',
        bullets: [
          '3개 — $11.25',
          '6개 — $22.50 (가장 인기, 나눠 먹기 좋음)',
          '12개 — $45.00',
          '원하는 맛을 자유롭게 조합 가능',
        ],
      },
      {
        h2: '오시는 길',
        body:
          '주소는 2142 Kalākaua Avenue, 와이키키 비치에서 도보 약 5분 거리이며 매일 오전 7시–오후 9시 영업합니다. 맛 선택이 가장 다양한 오전에 오시거나, 오후에 도넛과 커피로 쉬어 가셔도 좋아요. 매장 이용도, 해변으로 가져갈 포장도 모두 가능합니다.',
      },
    ],
    faq: [
      {
        q: '모찌도넛은 무엇으로 만드나요?',
        a: '모찌도넛은 주로 찹쌀가루로 만들어 특유의 쫄깃하고 탱글한 식감을 냅니다. 갓 튀겨내어 겉은 바삭, 속은 부드럽고 쭉 늘어납니다.',
      },
      {
        q: '모찌도넛은 글루텐프리인가요?',
        a: '아니요. 쌀가루를 사용하지만 저희 모찌도넛에는 밀도 함께 들어가기 때문에 글루텐프리가 아니며, 셀리악병이 있는 분께는 적합하지 않습니다. 알레르기나 성분이 궁금하시면 주문 전 직원에게 문의해 주세요.',
      },
      {
        q: '와이키키 모찌도넛 가격은 얼마인가요?',
        a: 'Kona Coffee Donut에서 모찌도넛은 3개 $11.25, 6개 $22.50, 12개 $45.00입니다. 24가지 맛을 자유롭게 조합하실 수 있습니다.',
      },
      {
        q: '가장 인기 있는 맛은 무엇인가요?',
        a: '우베(자색 고구마)가 가장 인기 있고, 그 다음으로 쿠키앤크림과 말차가 인기입니다. 첫 방문이라면 우베와 쿠키앤크림을 추천합니다.',
      },
      {
        q: '와이키키 비치 근처에서 갓 만든 모찌도넛은 어디서 사나요?',
        a: '2142 Kalākaua Ave의 Kona Coffee Donut은 와이키키 비치에서 도보 약 5분 거리이며, 매일 오전 7시–오후 9시 영업하고 모찌도넛을 매일 직접 만듭니다.',
      },
    ],
    finalCTA: {
      headline: '오늘, 갓 만든 맛으로 만나보세요',
      body: '모찌도넛은 만든 당일이 가장 맛있습니다. 2142 Kalākaua Ave에서 박스와 100% 코나커피를 즐겨보세요.',
      visitLabel: '길찾기',
      callLabel: '전화하기',
    },
  },

  zh: {
    hero: {
      title: '威基基最好吃的麻糬甜甜圈',
      subtitle:
        '用米粉制作、外酥内Q的pon-de-ring甜甜圈 — 卡拉卡瓦大道上的24种口味。',
      date: '2026年6月更新',
      readTime: '约5分钟阅读',
      badge: '麻糬甜甜圈',
    },
    intro:
      '在威基基散步时想吃点家乡吃不到的特别甜点？那一定是麻糬甜甜圈。它用米粉(糯米粉)代替普通面粉制作，带来普通甜甜圈没有的Q弹嚼劲和轻盈酥脆的外缘。位于卡拉卡瓦大道的Kona Coffee Donut每天现做24种口味，从芋头(ube)、抹茶到奥利奥(cookies & creme)和黑巧克力应有尽有。下面就告诉你它的特别之处，以及如何像当地人一样点单。',
    visitCTA: {
      headline: '距威基基海滩步行5分钟，现做麻糬甜甜圈',
      body: '在2142 Kalākaua Ave每日手工现做。带一盒24种口味和一杯100%科纳咖啡走吧。',
      menuLabel: '查看全部菜单',
      directionsLabel: '获取路线',
    },
    sections: [
      {
        h2: '麻糬甜甜圈有什么不同？',
        body:
          '秘密在于面粉。麻糬甜甜圈用糯米粉而非小麦面粉制作，因此口感Q弹有嚼劲，更接近麻糬而非蛋糕。它呈"pon-de-ring"造型——八个面团球连成一圈，可以一颗一颗掰着吃。现炸出锅时外层轻盈酥脆，内里柔软又能拉丝。正是这种"外酥内Q"的反差，让麻糬甜甜圈红遍全球的甜点动态。',
        bullets: [
          '米粉(糯米粉)= 普通甜甜圈没有的Q弹口感',
          'pon-de-ring造型——一颗颗掰着吃',
          '现炸所以边缘酥脆',
          '比一般蛋糕甜甜圈更轻盈、不油腻',
        ],
      },
      {
        h2: '第一次来先试这些口味',
        body:
          '我们轮换24种口味，糖霜和配料每天新鲜制作。第一次来,先从人气口味开始,再配一盒和朋友分享。',
        bullets: [
          '芋头(Ube)——最受欢迎,颜值也最高',
          '奥利奥(Cookies & Creme)——香草糖霜配奥利奥碎',
          '抹茶——石磨绿茶,清甜不腻',
          '黑巧克力——浓郁可可糖霜,点缀费列罗',
          '吉事果(Churro)——肉桂糖,熟悉又温暖',
          '黑芝麻、草莓、黄豆粉(injeolmi)、芭乐凤梨等',
        ],
        pullout: {
          title: '新手推荐',
          body: '点芋头和奥利奥这两款。它们是回头客最多的口味,拍照也超好看。',
        },
      },
      {
        h2: '麻糬甜甜圈 + 100%科纳咖啡 = 威基基绝配',
        body:
          '这正是我们把两者放在同一家店的原因。Q弹微甜的麻糬甜甜圈,配一杯顺滑的100%科纳咖啡,是檀香山数一数二的甜点配咖啡体验。干净低酸的科纳咖啡能中和甜味,而现做甜甜圈温热的嚼劲,搭配冷萃或科纳拿铁正合适。无论是海滩后的小憩,还是午后的悠闲补给,都很完美。',
        pullout: {
          title: '我们的推荐',
          body: '一份6个装麻糬甜甜圈 + 一杯科纳冷萃,一起分享。香甜、顺滑,非常威基基。',
        },
      },
      {
        h2: '如何点单:套装与价格',
        body:
          '麻糬甜甜圈按盒销售,想多尝几种口味,半打(6个)最合适。所有产品每日现做,人气口味可能较早售罄,上午种类最齐全。',
        bullets: [
          '3个 — $11.25',
          '6个 — $22.50(最受欢迎,适合分享)',
          '12个 — $45.00',
          '可自由搭配任意口味',
        ],
      },
      {
        h2: '门店位置',
        body:
          '我们位于2142 Kalākaua Avenue,距威基基海滩步行约5分钟,每天7点至21点营业。上午口味最齐全;午后来一份甜甜圈配咖啡小憩也很惬意。可堂食,也可打包带去海滩。',
      },
    ],
    faq: [
      {
        q: '麻糬甜甜圈是用什么做的？',
        a: '麻糬甜甜圈主要用糯米粉制作,因而具有独特的Q弹有嚼劲口感。现炸出锅,外层酥脆,内里柔软能拉丝。',
      },
      {
        q: '麻糬甜甜圈是无麸质的吗？',
        a: '不是。虽然使用米粉,但我们的麻糬甜甜圈配方也含有小麦,因此并非无麸质,也不适合乳糜泻患者。点单前如对过敏原或成分有疑问,请随时询问店员。',
      },
      {
        q: '威基基的麻糬甜甜圈多少钱？',
        a: '在Kona Coffee Donut,麻糬甜甜圈3个$11.25、6个$22.50、12个$45.00。24种口味可自由搭配。',
      },
      {
        q: '最受欢迎的口味是哪个？',
        a: '芋头(Ube)最受欢迎,其次是奥利奥(Cookies & Creme)和抹茶。第一次来推荐先试芋头和奥利奥。',
      },
      {
        q: '威基基海滩附近哪里能买到现做麻糬甜甜圈？',
        a: '2142 Kalākaua Ave的Kona Coffee Donut距威基基海滩步行约5分钟,每天7点至21点营业,麻糬甜甜圈每日现做。',
      },
    ],
    finalCTA: {
      headline: '今天就来尝鲜',
      body: '麻糬甜甜圈当天现做最好吃。来2142 Kalākaua Ave带一盒,再配一杯100%科纳咖啡。',
      visitLabel: '获取路线',
      callLabel: '打电话',
    },
  },

  es: {
    hero: {
      title: 'Los Mejores Mochi Donuts en Waikiki',
      subtitle:
        'Donas pon-de-ring de harina de arroz — crujientes por fuera y masticables por dentro — en 24 sabores en Kalākaua Ave.',
      date: 'Actualizado junio 2026',
      readTime: '5 min de lectura',
      badge: 'Mochi Donuts',
    },
    intro:
      'Si caminas por Waikiki con ganas de algo que no encuentras en casa, los mochi donuts son la respuesta. Hechos con harina de arroz en lugar de harina de trigo, tienen ese característico mordisco masticable y un borde ligero y crujiente que una dona normal no logra. En Kona Coffee Donut, sobre la Avenida Kalākaua, cada tanda se hace fresca a diario en 24 sabores — desde ube y matcha hasta cookies & creme y chocolate oscuro. Aquí te contamos qué los hace especiales y cómo pedir como un local.',
    visitCTA: {
      headline: 'Mochi donuts frescos, a 5 minutos de la playa de Waikiki',
      body: 'Hechos frescos a diario en 2142 Kalākaua Ave. Llévate una caja de 24 sabores y un café 100% Kona.',
      menuLabel: 'Ver Menú',
      directionsLabel: 'Cómo llegar',
    },
    sections: [
      {
        h2: '¿Qué hace diferente a un mochi donut?',
        body:
          'El secreto está en la harina. Un mochi donut se hace con harina de arroz glutinoso (mochiko) en lugar de harina de trigo, lo que le da esa textura masticable y elástica tan característica — más parecida al mochi que a un pastel. Tiene forma de "pon-de-ring": ocho bolas de masa unidas en círculo, así que puedes arrancar una bolita a la vez. Recién frito, el exterior queda ligero y crujiente mientras el interior se mantiene suave y elástico. Ese contraste de fuera crujiente y dentro masticable es justo por lo que los mochi donuts conquistaron las redes.',
        bullets: [
          'Harina de arroz (mochiko) = textura masticable que una dona normal no tiene',
          'Forma pon-de-ring — se separa bolita por bolita',
          'Fritos frescos para que los bordes queden crujientes',
          'Más ligeros y menos grasosos que una dona de pastel clásica',
        ],
      },
      {
        h2: 'Los sabores que vale la pena probar primero',
        body:
          'Rotamos 24 sabores, glaseados y decorados frescos. Si es tu primera visita, empieza con los favoritos del público — y luego arma una caja para compartir.',
        bullets: [
          'Ube — camote morado, nuestro sabor más popular y el más bonito de la mesa',
          'Cookies & Creme — Oreo triturado sobre glaseado de vainilla',
          'Matcha — té verde molido, ligeramente dulce',
          'Chocolate Oscuro — glaseado de cacao intenso con un Ferrero Rocher',
          'Churro — azúcar con canela, cálido y nostálgico',
          'Ajonjolí negro, fresa, injeolmi, guayaba-piña y más',
        ],
        pullout: {
          title: 'La mejor opción para principiantes',
          body: 'Pide el Ube y el Cookies & Creme. Son los dos sabores por los que la gente vuelve — y se ven increíbles en fotos.',
        },
      },
      {
        h2: 'Mochi donuts + café 100% Kona = la combinación perfecta de Waikiki',
        body:
          'Por eso tenemos ambos bajo el mismo techo. Un mochi donut masticable y ligeramente dulce junto a una taza de suave café 100% Kona es una de las mejores combinaciones de postre y café en Honolulu. El café Kona, limpio y de baja acidez, corta el dulzor, y la textura cálida y elástica de una dona fresca es justo lo que pide un cold brew o un latte de Kona. Es un gusto de cinco minutos después de la playa o un respiro a media tarde.',
        pullout: {
          title: 'Nuestra recomendación',
          body: 'Una caja de 6 mochi donuts + un cold brew de Kona para compartir. Dulce, suave y muy de Waikiki.',
        },
      },
      {
        h2: 'Cómo pedir: cajas y precios',
        body:
          'Los mochi donuts se venden por caja, y la media docena es el punto ideal para probar varios sabores. Todo se hace fresco a diario, así que los sabores están mejor más temprano, antes de que se agoten los más populares.',
        bullets: [
          '3 piezas — $11.25',
          '6 piezas — $22.50 (el más popular, ideal para compartir)',
          '12 piezas — $45.00',
          'Combina los sabores que quieras en tu caja',
        ],
      },
      {
        h2: 'Dónde encontrarnos',
        body:
          'Estamos en 2142 Kalākaua Avenue, a unos 5 minutos a pie de la playa de Waikiki, abiertos todos los días de 7 AM a 9 PM. Ven por la mañana para la mayor variedad de sabores, o pásate por la tarde para un descanso de dona y café. Come aquí o llévate una caja a la playa.',
      },
    ],
    faq: [
      {
        q: '¿De qué están hechos los mochi donuts?',
        a: 'Los mochi donuts se hacen principalmente con harina de arroz glutinoso (mochiko), que les da su característica textura masticable y elástica. Se fríen frescos, por lo que el exterior queda crujiente y el interior suave y elástico.',
      },
      {
        q: '¿Los mochi donuts contienen alérgenos?',
        a: 'Pregunta a nuestro personal sobre ingredientes actuales y posible contacto cruzado antes de ordenar si tienes restricciones dietarias o alergias.',
      },
      {
        q: '¿Cuánto cuestan los mochi donuts en Waikiki?',
        a: 'En Kona Coffee Donut, los mochi donuts cuestan $11.25 por 3 piezas, $22.50 por 6 piezas y $45.00 por 12 piezas. Puedes combinar cualquiera de los 24 sabores en tu caja.',
      },
      {
        q: '¿Cuál es el sabor de mochi donut más popular?',
        a: 'El Ube (camote morado) es nuestro sabor más popular, seguido de Cookies & Creme y Matcha. Para una primera visita, empieza con Ube y Cookies & Creme.',
      },
      {
        q: '¿Dónde puedo conseguir mochi donuts frescos cerca de la playa de Waikiki?',
        a: 'Kona Coffee Donut en 2142 Kalākaua Ave está a unos 5 minutos a pie de la playa de Waikiki, abierto todos los días de 7 AM a 9 PM, con mochi donuts hechos frescos cada día.',
      },
    ],
    finalCTA: {
      headline: 'Ven a probarlos frescos hoy',
      body: 'Los mochi donuts saben mejor el día que se hacen. Pásate por 2142 Kalākaua Ave por una caja y un café 100% Kona.',
      visitLabel: 'Cómo llegar',
      callLabel: 'Llámanos',
    },
  },
};

export default function Page() {
  const params = useParams();
  const locale = (params?.locale as Locale) || 'en';
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
