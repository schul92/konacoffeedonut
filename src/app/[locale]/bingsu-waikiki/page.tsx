'use client';

import { motion } from 'framer-motion';
import {
  Snowflake,
  Cherry,
  Coffee,
  MapPin,
  Clock,
  Star,
  Sparkles,
  IceCreamCone,
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Script from 'next/script';

import JoinTeamCTA from '@/components/JoinTeamCTA';
import SubpageNav from '@/components/SubpageNav';

// SEO-optimized content for "bingsu waikiki" keyword (near-zero competition)
const content = {
  en: {
    hero: {
      badge: 'Now in Waikiki',
      title: 'Best Bingsu in Waikiki',
      subtitle:
        'Authentic Korean Shaved Ice with Premium Milk Ice & Handcrafted Toppings',
    },
    whatIs: {
      title: 'What is Bingsu?',
      text: 'Bingsu (also spelled bingsoo) is Korea\'s most beloved frozen dessert and a staple of Korean food culture. Unlike ordinary shaved ice, authentic bingsu starts with finely shaved milk ice that melts on your tongue like fresh snow. This silky, feather-light texture is what sets Korean bingsu apart from Hawaiian shave ice or Japanese kakigori. Originating from the Joseon Dynasty, bingsu has evolved from a simple treat of shaved ice with red bean paste (patbingsu) into an art form featuring endless creative toppings. Today, bingsu is enjoyed year-round in Korea and has become one of the most sought-after Korean desserts worldwide. At Kona Coffee Donut in Waikiki, we bring this authentic Korean shaved ice experience to Hawaii. Our bingsu is made with a specially designed milk-ice machine that produces the signature powdery, snow-like texture that bingsu lovers crave. Each bowl is generously topped with premium ingredients sourced locally and from Korea. Whether you\'re a first-time visitor curious about Korean desserts or a bingsu connoisseur looking for the best bingsu in Honolulu, our Waikiki cafe delivers the real deal.',
    },
    whyBest: {
      title: 'Why Our Bingsu is the Best in Waikiki',
      points: [
        {
          icon: 'snowflake',
          title: 'Real Milk-Based Ice',
          description:
            'We use a Korean-imported bingsu machine that shaves frozen milk into ultra-fine, snow-like flakes. No crushed ice, no syrup-soaked crystals — just pure, creamy milk snow.',
        },
        {
          icon: 'star',
          title: 'Premium Toppings',
          description:
            'From slow-cooked sweet red beans (pat) to hand-rolled injeolmi rice cakes, every topping is prepared fresh in-house. We never use canned fillings or artificial flavors.',
        },
        {
          icon: 'sparkles',
          title: 'Korean-Authentic Recipes',
          description:
            'Our recipes come straight from Seoul\'s top bingsu cafes. We stay true to the flavors and presentation that made Korean bingsu a global dessert phenomenon.',
        },
        {
          icon: 'cherry',
          title: 'Tropical Hawaii Twist',
          description:
            'We incorporate fresh Hawaiian fruits like mango and lilikoi alongside classic Korean flavors, creating unique bingsu combinations you can only find in Waikiki.',
        },
      ],
    },
    menu: {
      title: 'Our Bingsu Menu',
      subtitle: 'Six signature flavors of Korean shaved ice in Waikiki',
      items: [
        {
          name: 'Injeolmi Bingsu',
          description:
            'The #1 bestseller in Korea. Nutty roasted soybean powder, chewy rice cake cubes, and condensed milk drizzle over milk-snow ice.',
          price: 'from $14',
          tag: 'Most Popular',
        },
        {
          name: 'Mango Bingsu',
          description:
            'Fresh Hawaiian mango chunks, mango puree, and coconut flakes atop our signature milk ice. A tropical-Korean fusion exclusive.',
          price: 'from $15',
          tag: 'Hawaii Exclusive',
        },
        {
          name: 'Strawberry Bingsu',
          description:
            'Sliced fresh strawberries, strawberry sauce, and cheesecake crumbles layered with fluffy milk-snow ice.',
          price: 'from $15',
          tag: '',
        },
        {
          name: 'Oreo Bingsu',
          description:
            'Crushed Oreo cookies, chocolate sauce, and vanilla ice cream on a mountain of milk-snow. A favorite with kids and chocolate lovers.',
          price: 'from $14',
          tag: 'Kids\' Favorite',
        },
        {
          name: 'Green Tea Bingsu',
          description:
            'Premium matcha from Jeju Island, sweet red beans, and mochi balls. The perfect balance of bitter and sweet.',
          price: 'from $15',
          tag: '',
        },
        {
          name: 'Classic Patbingsu',
          description:
            'The original Korean shaved ice. Slow-simmered sweet red beans, rice cakes, and a touch of condensed milk. Timeless and traditional.',
          price: 'from $12',
          tag: 'Traditional',
        },
      ],
    },
    pairings: {
      title: 'Perfect Pairings',
      subtitle:
        'Elevate your bingsu experience with our signature Kona coffee and mochi donuts',
      combos: [
        {
          name: 'The Waikiki Chill',
          items: 'Injeolmi Bingsu + Iced Kona Latte',
          description:
            'The nutty sweetness of injeolmi meets the smooth richness of 100% Kona coffee. Our most popular pairing — the roasted soybean and coffee flavors complement each other beautifully.',
        },
        {
          name: 'Tropical Duo',
          items: 'Mango Bingsu + Mochi Donut (Lilikoi Glaze)',
          description:
            'Double down on Hawaiian tropical vibes. The fresh mango bingsu paired with our chewy lilikoi-glazed mochi donut is a taste of paradise.',
        },
        {
          name: 'Matcha Harmony',
          items: 'Green Tea Bingsu + Matcha Kona Latte',
          description:
            'For matcha enthusiasts — pair our Jeju matcha bingsu with a creamy matcha Kona latte for the ultimate green tea experience.',
        },
        {
          name: 'Classic Korean Set',
          items: 'Patbingsu + Hot Kona Americano',
          description:
            'The way Koreans enjoy it — traditional red bean bingsu with a strong, hot Americano. The contrast of icy and warm is deeply satisfying.',
        },
      ],
    },
    cta: {
      title: 'Find Us in the Heart of Waikiki',
      address: '2142 Kalakaua Ave, Honolulu, HI 96815',
      opening: 'Opening Late April 2026',
      note: 'The best Korean shaved ice in Hawaii is almost here!',
      directions: 'Get Directions',
    },
  },
  ja: {
    hero: {
      badge: 'ワイキキに登場',
      title: 'ワイキキで最高のビンス',
      subtitle:
        '本格韓国かき氷 — プレミアムミルク氷と手作りトッピング',
    },
    whatIs: {
      title: 'ビンス（韓国かき氷）とは？',
      text: 'ビンス（빙수）は韓国で最も愛されている冷たいデザートで、日本でも大人気の韓国スイーツです。日本のかき氷やハワイのシェイブアイスとは異なり、本格的なビンスは牛乳を凍らせて細かく削った「ミルク氷」がベース。まるで新雪のように舌の上でふわっと溶ける、きめ細やかでシルキーな食感が最大の魅力です。朝鮮王朝時代に氷に小豆をのせて食べたのが起源とされ、現代ではインジョルミ（きな粉餅）、マンゴー、いちご、抹茶など無限のバリエーションに進化。韓国旅行の定番グルメとして日本人観光客にも絶大な人気を誇るビンスが、ハワイ・ワイキキのコナコーヒードーナツで味わえます。韓国から直輸入した専用マシンで作る本物のミルク氷ビンスは、新大久保や明洞で食べるのと変わらないクオリティ。ハワイ旅行中に韓国の味が恋しくなったら、ぜひワイキキ店へお越しください。',
    },
    whyBest: {
      title: 'ワイキキで一番のビンスの理由',
      points: [
        {
          icon: 'snowflake',
          title: '本物のミルク氷',
          description:
            '韓国から輸入した専用ビンスマシンで、凍った牛乳を極細のパウダースノー状に。砕いた氷やシロップではない、本物のミルク氷です。',
        },
        {
          icon: 'star',
          title: 'プレミアムトッピング',
          description:
            'じっくり炊いた小豆、手作りのインジョルミ餅、すべて店内で手作り。缶詰や人工フレーバーは一切使いません。',
        },
        {
          icon: 'sparkles',
          title: '韓国本場のレシピ',
          description:
            'ソウルの人気ビンスカフェのレシピを忠実に再現。韓国の味と盛り付けをそのままハワイでお届けします。',
        },
        {
          icon: 'cherry',
          title: 'ハワイのトロピカルアレンジ',
          description:
            '新鮮なハワイ産マンゴーやリリコイなど、韓国の定番フレーバーにトロピカルな要素を加えた、ワイキキ限定の味わい。',
        },
      ],
    },
    menu: {
      title: 'ビンスメニュー',
      subtitle: 'ワイキキで味わう6種類の本格韓国かき氷',
      items: [
        {
          name: 'インジョルミビンス',
          description:
            '韓国で一番人気。香ばしいきな粉、もちもちのお餅、練乳がミルク氷にかかった定番の味。',
          price: '$14〜',
          tag: '一番人気',
        },
        {
          name: 'マンゴービンス',
          description:
            'ハワイ産の新鮮なマンゴーとマンゴーピューレ、ココナッツフレークをトッピング。ハワイ×韓国の限定フュージョン。',
          price: '$15〜',
          tag: 'ハワイ限定',
        },
        {
          name: 'いちごビンス',
          description:
            'フレッシュいちごのスライス、いちごソース、チーズケーキクランブルをふわふわミルク氷に。',
          price: '$15〜',
          tag: '',
        },
        {
          name: 'オレオビンス',
          description:
            '砕いたオレオ、チョコレートソース、バニラアイスをミルク氷の山にトッピング。お子様やチョコ好きに大人気。',
          price: '$14〜',
          tag: 'お子様に人気',
        },
        {
          name: '抹茶ビンス',
          description:
            '済州島産プレミアム抹茶、あずき、もち玉。ほろ苦さと甘さの絶妙なバランス。',
          price: '$15〜',
          tag: '',
        },
        {
          name: 'クラシック パッビンス',
          description:
            '韓国かき氷の原点。じっくり炊いた小豆、お餅、練乳のシンプルで伝統的な一品。',
          price: '$12〜',
          tag: '定番',
        },
      ],
    },
    pairings: {
      title: 'おすすめの組み合わせ',
      subtitle:
        'ビンスとコナコーヒー・モチドーナツの最高の組み合わせ',
      combos: [
        {
          name: 'ワイキキ チル',
          items: 'インジョルミビンス + アイスコナラテ',
          description:
            'きな粉の香ばしさと100%コナコーヒーの豊かな味わいが出会う、一番人気の組み合わせ。',
        },
        {
          name: 'トロピカルデュオ',
          items: 'マンゴービンス + モチドーナツ（リリコイグレーズ）',
          description:
            'ハワイのトロピカルフルーツを堪能。マンゴービンスとリリコイモチドーナツで南国気分を倍増。',
        },
        {
          name: '抹茶ハーモニー',
          items: '抹茶ビンス + 抹茶コナラテ',
          description:
            '抹茶好きのための究極セット。済州島の抹茶ビンスとクリーミーな抹茶コナラテの組み合わせ。',
        },
        {
          name: '韓国クラシックセット',
          items: 'パッビンス + ホットコナアメリカーノ',
          description:
            '韓国スタイルの楽しみ方。冷たいパッビンスと熱いアメリカーノのコントラストが癖になります。',
        },
      ],
    },
    cta: {
      title: 'ワイキキの中心でお待ちしています',
      address: '2142 Kalakaua Ave, Honolulu, HI 96815',
      opening: '2026年4月下旬オープン',
      note: 'ハワイ最高の韓国かき氷がまもなく登場！',
      directions: '道順を見る',
    },
  },
  ko: {
    hero: {
      badge: '와이키키에서 만나요',
      title: '와이키키 최고의 빙수',
      subtitle:
        '정통 한국 빙수 — 프리미엄 우유 얼음과 정성 가득한 토핑',
    },
    whatIs: {
      title: '빙수란?',
      text: '빙수는 대한민국을 대표하는 디저트로, 단순한 얼음 과자가 아닌 하나의 문화입니다. 일반 빙삭기로 간 얼음과는 차원이 다른, 우유를 얼려 곱게 깎아낸 우유 얼음이 빙수의 핵심입니다. 입안에서 살살 녹는 파우더 스노 같은 식감은 하와이안 셰이브 아이스나 일본 카키고리에서는 절대 경험할 수 없는 것이죠. 조선시대 빙고(氷庫)에서 얼음에 팥을 얹어 먹던 것이 시초가 되어, 오늘날에는 인절미, 망고, 딸기, 오레오, 녹차 등 무한한 변신을 거듭하며 한국인의 사계절 디저트로 자리 잡았습니다. 이제 하와이 와이키키의 코나커피도넛에서 서울 유명 카페 못지않은 정통 빙수를 만나보세요. 한국에서 직수입한 전용 빙수 기계로 만드는 진짜 우유 얼음 빙수, 국내산 팥과 직접 만든 인절미 떡, 하와이 현지의 신선한 열대 과일까지. 하와이 여행 중 한국의 맛이 그리울 때, 호놀룰루에서 제대로 된 빙수가 먹고 싶을 때, 와이키키 비치 근처 코나커피도넛이 정답입니다.',
    },
    whyBest: {
      title: '와이키키 최고의 빙수인 이유',
      points: [
        {
          icon: 'snowflake',
          title: '진짜 우유 얼음',
          description:
            '한국에서 직수입한 빙수 전용 머신으로 우유를 얼려 곱게 깎아냅니다. 얼음을 갈거나 시럽을 뿌린 것과는 차원이 다른, 진짜 우유 눈꽃 빙수입니다.',
        },
        {
          icon: 'star',
          title: '프리미엄 토핑',
          description:
            '정성껏 끓인 팥, 직접 만든 인절미 떡까지 모든 토핑을 매장에서 직접 준비합니다. 캔 재료나 인공 향료는 절대 사용하지 않습니다.',
        },
        {
          icon: 'sparkles',
          title: '한국 정통 레시피',
          description:
            '서울 유명 빙수 카페의 레시피를 그대로 재현합니다. 한국에서 먹던 바로 그 맛, 그 비주얼을 와이키키에서 만나보세요.',
        },
        {
          icon: 'cherry',
          title: '하와이 트로피컬 터치',
          description:
            '하와이 현지 망고, 릴리코이 등 신선한 열대 과일을 한국 전통 빙수에 접목한, 와이키키에서만 맛볼 수 있는 특별한 메뉴.',
        },
      ],
    },
    menu: {
      title: '빙수 메뉴',
      subtitle: '와이키키에서 즐기는 6가지 시그니처 빙수',
      items: [
        {
          name: '인절미 빙수',
          description:
            '한국 빙수 부동의 1위. 고소한 콩고물, 쫀득한 인절미 떡, 연유가 우유 눈꽃 얼음 위에 소복이. 한 입이면 서울 카페에 온 기분.',
          price: '$14~',
          tag: '인기 No.1',
        },
        {
          name: '망고 빙수',
          description:
            '하와이산 신선 망고 듬뿍, 망고 퓨레, 코코넛 플레이크까지. 한국 빙수와 하와이 열대 과일의 환상적인 만남.',
          price: '$15~',
          tag: '하와이 한정',
        },
        {
          name: '딸기 빙수',
          description:
            '신선한 딸기 슬라이스, 딸기 소스, 치즈케이크 크럼블이 우유 눈꽃 얼음과 어우러진 상큼한 맛.',
          price: '$15~',
          tag: '',
        },
        {
          name: '오레오 빙수',
          description:
            '부순 오레오, 초콜릿 소스, 바닐라 아이스크림을 눈꽃 얼음 위에. 아이들과 초코 덕후들의 원픽.',
          price: '$14~',
          tag: '어린이 인기',
        },
        {
          name: '녹차 빙수',
          description:
            '제주도산 프리미엄 말차, 달콤한 팥, 찰떡볼의 조합. 쌉싸름함과 달콤함의 완벽한 밸런스.',
          price: '$15~',
          tag: '',
        },
        {
          name: '클래식 팥빙수',
          description:
            '빙수의 원조. 정성껏 끓인 통팥, 떡, 연유 한 줄기. 어릴 적 그 맛 그대로, 심플하지만 깊은 전통의 맛.',
          price: '$12~',
          tag: '전통',
        },
      ],
    },
    pairings: {
      title: '환상의 조합',
      subtitle:
        '빙수와 코나 커피, 모찌 도넛의 완벽한 페어링',
      combos: [
        {
          name: '와이키키 칠',
          items: '인절미 빙수 + 아이스 코나 라떼',
          description:
            '인절미의 고소함과 100% 코나 커피의 깊은 풍미가 만나는 최고의 조합. 콩고물과 커피 향이 놀랍도록 잘 어울립니다.',
        },
        {
          name: '트로피컬 듀오',
          items: '망고 빙수 + 모찌 도넛 (릴리코이 글레이즈)',
          description:
            '하와이 열대 과일의 향연. 신선한 망고 빙수와 릴리코이 모찌 도넛으로 남국의 맛을 두 배로.',
        },
        {
          name: '말차 하모니',
          items: '녹차 빙수 + 말차 코나 라떼',
          description:
            '말차 덕후를 위한 궁극의 세트. 제주 말차 빙수와 크리미한 말차 코나 라떼의 꿈의 조합.',
        },
        {
          name: '한국 클래식 세트',
          items: '팥빙수 + 핫 코나 아메리카노',
          description:
            '한국인이 사랑하는 조합. 차가운 팥빙수와 뜨거운 아메리카노의 대비가 주는 깊은 만족감.',
        },
      ],
    },
    cta: {
      title: '와이키키 한복판에서 만나요',
      address: '2142 Kalakaua Ave, Honolulu, HI 96815',
      opening: '2026년 4월 말 오픈',
      note: '하와이 최고의 한국 빙수가 곧 찾아옵니다!',
      directions: '길찾기',
    },
  },
  zh: {
    hero: {
      badge: '威基基全新登场',
      title: '威基基最好的韩式刨冰',
      subtitle: '正宗韩式Bingsu — 优质牛奶冰与精致手工配料',
    },
    whatIs: {
      title: '什么是Bingsu（韩式刨冰）？',
      text: 'Bingsu（韩式刨冰）是韩国最受欢迎的冰品甜点，与普通刨冰截然不同。正宗的Bingsu以牛奶冰为基底，将冻结的牛奶削成极其细腻的雪花状薄片，入口即化，口感如同新雪般绵软丝滑。这种独特的质感是夏威夷刨冰或日本刨冰无法比拟的。Bingsu起源于朝鲜王朝时期，最初是在碎冰上加红豆的简单甜品（红豆刨冰），如今已发展出年糕、芒果、草莓、奥利奥、抹茶等无数创意口味，成为韩国四季皆宜的国民甜点。在威基基的科纳咖啡甜甜圈，我们使用韩国进口的专业刨冰机，制作出与首尔知名甜品店同等品质的正宗牛奶冰Bingsu。每一碗都搭配精心准备的优质配料，无论您是第一次尝试韩式甜品，还是寻找火奴鲁鲁最好的Bingsu，我们都能满足您的期待。',
    },
    whyBest: {
      title: '为什么我们的Bingsu是威基基最好的',
      points: [
        {
          icon: 'snowflake',
          title: '真正的牛奶冰',
          description:
            '使用韩国进口的专业Bingsu机器，将冻结的牛奶削成超细雪花状薄片。不是碎冰加糖浆，而是纯正的牛奶雪。',
        },
        {
          icon: 'star',
          title: '优质配料',
          description:
            '从慢火熬制的红豆到手工制作的年糕，所有配料均在店内新鲜制作。绝不使用罐头原料或人工香精。',
        },
        {
          icon: 'sparkles',
          title: '韩国正宗配方',
          description:
            '我们的配方源自首尔顶级甜品咖啡厅，忠实还原让韩式刨冰风靡全球的地道风味。',
        },
        {
          icon: 'cherry',
          title: '夏威夷热带风味',
          description:
            '融入新鲜夏威夷芒果和百香果等热带水果，打造只有在威基基才能品尝到的独特口味。',
        },
      ],
    },
    menu: {
      title: 'Bingsu菜单',
      subtitle: '威基基六款招牌韩式刨冰',
      items: [
        {
          name: '年糕黄豆粉Bingsu',
          description:
            '韩国人气第一名。香浓烤黄豆粉、Q弹年糕块、炼乳淋在绵密牛奶雪冰上。',
          price: '$14起',
          tag: '最受欢迎',
        },
        {
          name: '芒果Bingsu',
          description:
            '新鲜夏威夷芒果块、芒果泥和椰子片搭配招牌牛奶冰。夏威夷×韩国限定特色。',
          price: '$15起',
          tag: '夏威夷限定',
        },
        {
          name: '草莓Bingsu',
          description:
            '新鲜草莓切片、草莓酱和芝士蛋糕碎屑层叠在绵软牛奶雪冰上。',
          price: '$15起',
          tag: '',
        },
        {
          name: '奥利奥Bingsu',
          description:
            '碎奥利奥饼干、巧克力酱和香草冰淇淋堆叠在牛奶雪冰山上。孩子和巧克力爱好者的最爱。',
          price: '$14起',
          tag: '儿童最爱',
        },
        {
          name: '抹茶Bingsu',
          description:
            '济州岛优质抹茶、甜红豆和麻糬球。苦与甜的完美平衡。',
          price: '$15起',
          tag: '',
        },
        {
          name: '经典红豆Bingsu',
          description:
            '韩式刨冰的原点。慢火熬制红豆、年糕和炼乳。简单而经典的传统味道。',
          price: '$12起',
          tag: '传统',
        },
      ],
    },
    pairings: {
      title: '完美搭配',
      subtitle: 'Bingsu搭配科纳咖啡和麻糬甜甜圈，体验升级',
      combos: [
        {
          name: '威基基清凉组合',
          items: '年糕黄豆粉Bingsu + 冰科纳拿铁',
          description:
            '黄豆粉的醇香与100%科纳咖啡的浓郁完美交融。最受欢迎的搭配。',
        },
        {
          name: '热带双享',
          items: '芒果Bingsu + 麻糬甜甜圈（百香果糖霜）',
          description:
            '双重热带风情。新鲜芒果Bingsu搭配百香果麻糬甜甜圈，尽享天堂之味。',
        },
        {
          name: '抹茶和谐',
          items: '抹茶Bingsu + 抹茶科纳拿铁',
          description:
            '抹茶爱好者的终极组合。济州抹茶Bingsu配奶香抹茶科纳拿铁。',
        },
        {
          name: '韩式经典套餐',
          items: '红豆Bingsu + 热科纳美式',
          description:
            '韩国人最爱的吃法。冰凉红豆刨冰搭配滚烫美式咖啡，冰火交融的满足感。',
        },
      ],
    },
    cta: {
      title: '在威基基中心等您',
      address: '2142 Kalakaua Ave, Honolulu, HI 96815',
      opening: '2026年4月下旬开业',
      note: '夏威夷最好的韩式刨冰即将到来！',
      directions: '获取路线',
    },
  },
};

// FAQPage JSON-LD Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is bingsu and how is it different from shaved ice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bingsu (also called bingsoo or patbingsu) is a Korean shaved ice dessert made from finely shaved milk ice, not regular water ice. The milk-based ice creates an ultra-fine, snow-like texture that melts on your tongue, making it creamier and smoother than Hawaiian shave ice or Japanese kakigori. It is topped with various ingredients like sweet red beans, rice cakes, fruit, and condensed milk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I get bingsu in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut at 2142 Kalakaua Ave in Waikiki serves authentic Korean bingsu made with a Korean-imported milk-ice machine. We offer six signature flavors including Injeolmi, Mango, Strawberry, Oreo, Green Tea, and Classic Patbingsu. Our cafe is located steps from Waikiki Beach.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most popular bingsu flavors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most popular bingsu flavor in Korea is Injeolmi Bingsu, which features roasted soybean powder and chewy rice cakes. Other popular flavors include Mango Bingsu, Strawberry Bingsu, Oreo Bingsu, Green Tea (Matcha) Bingsu, and the classic Patbingsu with sweet red beans. At Kona Coffee Donut in Waikiki, our Mango Bingsu is a Hawaii exclusive featuring fresh local mangoes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does bingsu cost in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At Kona Coffee Donut in Waikiki, bingsu prices start from $12 for Classic Patbingsu and go up to $15 for premium flavors like Mango and Green Tea Bingsu. Each serving is generous and can be shared between two people.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is bingsu a good dessert to pair with coffee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Bingsu pairs wonderfully with coffee, especially hot Americano — the contrast between icy bingsu and hot coffee is a classic Korean combination. At Kona Coffee Donut, we recommend pairing Injeolmi Bingsu with an Iced Kona Latte or Classic Patbingsu with a Hot Kona Americano for the authentic Korean cafe experience.',
      },
    },
  ],
};

const iconMap: Record<string, React.ReactNode> = {
  snowflake: <Snowflake className="w-6 h-6" />,
  star: <Star className="w-6 h-6" />,
  sparkles: <Sparkles className="w-6 h-6" />,
  cherry: <Cherry className="w-6 h-6" />,
};

export default function BingsuWaikikiPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = content[locale as keyof typeof content] || content.en;

  return (
    <>
      <Script
        id="bingsu-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white">
      <SubpageNav locale={locale} />
        {/* Hero Section */}
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200">
          {/* Decorative floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 left-[10%] w-20 h-20 rounded-full bg-blue-200/40 blur-xl"
              animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute top-40 right-[15%] w-32 h-32 rounded-full bg-purple-200/40 blur-xl"
              animate={{ y: [0, 15, 0], scale: [1, 0.95, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-20 left-[20%] w-24 h-24 rounded-full bg-indigo-200/40 blur-xl"
              animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-indigo-200/50"
            >
              <Snowflake className="w-4 h-4" />
              {t.hero.badge}
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-indigo-800/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t.hero.subtitle}
            </motion.p>
          </div>
        </section>

        {/* What is Bingsu */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <IceCreamCone className="w-8 h-8 text-indigo-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {t.whatIs.title}
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
                {t.whatIs.text}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Our Bingsu is the Best */}
        <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t.whyBest.title}
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {t.whyBest.points.map((point, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-indigo-100 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                    {iconMap[point.icon]}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Preview */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {t.menu.title}
              </h2>
              <p className="text-gray-500 text-lg">{t.menu.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.menu.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative bg-gradient-to-br from-white to-blue-50/50 border border-blue-100 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  {item.tag && (
                    <span className="absolute top-4 right-4 bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 pr-20">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <p className="text-indigo-600 font-semibold">{item.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Perfect Pairings */}
        <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <Coffee className="w-7 h-7 text-purple-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {t.pairings.title}
                </h2>
              </div>
              <p className="text-gray-500 text-lg">{t.pairings.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {t.pairings.combos.map((combo, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {combo.name}
                  </h3>
                  <p className="text-indigo-600 font-medium text-sm mb-3">
                    {combo.items}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {combo.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Location */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.cta.title}
              </h2>

              <div className="flex flex-col items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-blue-100">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">{t.cta.address}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <Clock className="w-5 h-5" />
                  <span className="text-lg font-semibold text-white">
                    {t.cta.opening}
                  </span>
                </div>
                <p className="text-blue-200">{t.cta.note}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://maps.google.com/?q=2142+Kalakaua+Ave+Honolulu+HI+96815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors"
                >
                  {t.cta.directions}
                </a>
                <Link
                  href={`/${locale}/menu`}
                  className="inline-block border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  {locale === 'ko'
                    ? '전체 메뉴 보기'
                    : locale === 'ja'
                      ? 'メニューを見る'
                      : locale === 'zh'
                        ? '查看完整菜单'
                        : 'View Full Menu'}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Join Team CTA */}
        <JoinTeamCTA />
      </main>
    </>
  );
}
