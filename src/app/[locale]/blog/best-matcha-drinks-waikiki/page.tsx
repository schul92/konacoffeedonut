'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Globe, IceCreamCone, MapPin, Snowflake, Utensils, Users } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import SubpageNav from '@/components/SubpageNav';

// ────────────────────────────────────────────
// Translations (en, ja, ko, zh)
// ────────────────────────────────────────────
const content = {
  en: {
    hero: {
      title: 'Best Matcha Drinks in Waikiki',
      subtitle: 'Every Flavor Ranked — Find Your Perfect Cup (2026 Guide)',
      updated: 'Updated June 2026',
      readTime: '6 min read',
    },
    definition: {
      title: 'What\'s the Best Matcha in Waikiki?',
      text: 'The <strong>best matcha in Waikiki</strong> is real, stone-ground Japanese matcha <strong>whisked fresh to order</strong> — not a sugary instant powder — in a flavor you love. At <strong>Kona Coffee Donut?</strong>, our most popular pick is the <strong>Strawberry Matcha ($10.95)</strong>: creamy, sweet-tart, and impossibly photogenic. Prefer it pure? The <strong>Classic Matcha Latte ($8.95)</strong> is the truest taste. Add tropical mango, coconut, guava, banana, or lilikoi, get any of them <strong>iced</strong>, or swap to a <strong>caffeine-free hojicha base</strong> — all just about 5 minutes from Waikiki Beach.',
    },
    history: {
      title: 'What Makes a Great Matcha Drink',
      subtitle: 'Real Whisked Matcha, the Right Balance, and a Flavor You\'ll Love',
      p1: 'A great matcha starts with <strong>real, stone-ground Japanese matcha whisked fresh to order</strong> — not a sugary instant powder. That\'s what gives you the vivid green color, the smooth earthy-umami flavor, and the calm, steady caffeine matcha is famous for. Every matcha on our Waikiki menu is built on that same real base.',
      p2: 'The second thing that makes a matcha great is <strong>balance</strong>. Too much sugar buries the tea; too little and it can taste harsh. Our flavored matchas layer just enough fruit or cream to complement the grassy matcha underneath, so you taste both — bright on top, earthy below. That balance is exactly why our <strong>Strawberry Matcha has become our most popular drink</strong>.',
      p3: 'Flavor choice matters too. Some people want the pure, classic taste; others want tropical fruit, creamy coconut, or a dessert-like banana. That\'s why we pour a <strong>full lineup</strong> — so whether it\'s your first matcha ever or your daily ritual, there\'s one with your name on it. Below we rank them to help you choose.',
      p4: 'Finally, a great matcha fits the moment. <strong>Iced</strong> on a hot Waikiki afternoon, hot on an early morning, or swapped to a <strong>caffeine-free hojicha base</strong> when you want something toasty and gentle. Pair any of them with a fresh mochi donut and a quick coffee run becomes the best few minutes of your day.',
    },
    comparison: {
      title: 'Which Matcha Flavor Is Right for You?',
      subtitle: 'A Quick Guide to Picking Your Perfect Cup',
      intro: 'Not sure which to order? Match your mood to a flavor — every one is made with real whisked matcha, and can be served hot or iced:',
      headers: {
        feature: 'If you want…',
        bingsu: 'Order this',
        shavedIce: 'Tastes like',
        kakigori: 'Price',
      },
      rows: [
        {
          feature: 'The bestseller / crowd-pleaser',
          bingsu: 'Strawberry Matcha ⭐',
          shavedIce: 'Creamy, sweet-tart strawberry',
          kakigori: '$10.95',
        },
        {
          feature: 'The pure, classic taste',
          bingsu: 'Classic Matcha Latte',
          shavedIce: 'Stone-ground matcha + milk',
          kakigori: '$8.95',
        },
        {
          feature: 'Bright & tropical',
          bingsu: 'Mango Matcha',
          shavedIce: 'Juicy tropical mango',
          kakigori: '$8.95',
        },
        {
          feature: 'Creamy island richness',
          bingsu: 'Coconut Matcha',
          shavedIce: 'Smooth Hawaiian coconut',
          kakigori: '$8.95',
        },
        {
          feature: 'A local island fruit',
          bingsu: 'Guava Matcha',
          shavedIce: 'Sweet island guava',
          kakigori: '$8.95',
        },
        {
          feature: 'Something fun & mellow',
          bingsu: 'Banana Matcha',
          shavedIce: 'Green-tea banana shake',
          kakigori: '$8.95',
        },
        {
          feature: 'Tart & refreshing',
          bingsu: 'Lilikoi Matcha',
          shavedIce: 'Tangy passion fruit',
          kakigori: '$8.95',
        },
        {
          feature: 'Traditional & cozy',
          bingsu: 'Azuki Red Bean Latte',
          shavedIce: 'Sweet red bean',
          kakigori: '$10.95',
        },
        {
          feature: 'Caffeine-free & roasted',
          bingsu: 'Any flavor, hojicha base',
          shavedIce: 'Toasty, nutty caramel',
          kakigori: '$8.95',
        },
      ],
      note: 'Every drink can be made iced, and any flavor can be built on a caffeine-free hojicha base instead of matcha. When in doubt, start with the Strawberry Matcha — it\'s our most popular for a reason.',
    },
    types: {
      title: 'Our Matcha Lineup, Ranked',
      subtitle: 'Every Flavor We Pour in Waikiki — All Great, One Bestseller',
      items: [
        {
          name: 'Strawberry Matcha',
          korean: '#1 · $10.95 · most popular ⭐',
          description: 'Our bestseller and most-ordered matcha. A sweet layer of strawberry over freshly whisked matcha and milk — creamy, sweet-tart, and impossibly photogenic. The berry brightens the grassy matcha while the milk keeps it smooth. If you order one matcha in Waikiki, make it this.',
          icon: '🍓',
        },
        {
          name: 'Classic Matcha Latte',
          korean: '#2 · $8.95',
          description: 'Pure stone-ground Japanese matcha whisked into your choice of milk. Earthy, smooth, and lightly sweet — the truest taste of real matcha and the perfect baseline for the whole menu. Order it hot or iced, and pair it with a mochi donut.',
          icon: '🍵',
        },
        {
          name: 'Mango Matcha',
          korean: '#3 · $8.95 · tropical',
          description: 'Our island twist. Juicy tropical mango layered over real whisked matcha — bright, refreshing, and best served iced in the Waikiki sun. A fruity crowd-pleaser that\'s hard to find back on the mainland.',
          icon: '🥭',
        },
        {
          name: 'Coconut Matcha',
          korean: '$8.95 · Hawaiian',
          description: 'Creamy island richness meets earthy matcha. Coconut rounds out the tea with a smooth, dessert-like sweetness — a mellow, tropical pick that first-time matcha drinkers love.',
          icon: '🥥',
        },
        {
          name: 'Guava Matcha',
          korean: '$8.95 · island fruit',
          description: 'Sweet, fragrant island guava over whisked matcha. Guava is a true Hawaiian favorite, and layered with grassy matcha it turns into something you can only really enjoy here in the islands.',
          icon: '🍈',
        },
        {
          name: 'Banana Matcha',
          korean: '$8.95',
          description: 'Like a green-tea banana milkshake. Creamy banana softens matcha\'s earthy edge into something smooth and dessert-like — a fun, mellow option that\'s a hit with kids and matcha newcomers alike.',
          icon: '🍌',
        },
        {
          name: 'Lilikoi (Passion Fruit) Matcha',
          korean: '$8.95 · island fruit',
          description: 'Tangy Hawaiian passion fruit brightens the matcha with a tart, tropical zing. Refreshing and a little exotic, lilikoi is the island fruit flavor to try if you like your matcha bright and lively.',
          icon: '🌺',
        },
        {
          name: 'Azuki (Red Bean) Latte',
          korean: '$10.95 · traditional',
          description: 'For fans of classic Japanese-Korean café flavor. Sweet azuki red bean blended into a creamy latte — comforting, nutty, and lightly sweet. Order it alongside a matcha latte to taste two sides of café culture in one visit.',
          icon: '🫘',
        },
      ],
    },
    whyHawaii: {
      title: 'Matcha or Hojicha? Choose Your Base',
      points: [
        {
          title: 'Real Matcha Base — Vivid & Grassy',
          description: 'The classic. Every flavor is built on real stone-ground Japanese matcha, whisked fresh — vivid green, earthy-sweet, with matcha\'s signature calm caffeine. This is what most people picture when they order a matcha latte, and it\'s the base for our bestselling Strawberry Matcha.',
        },
        {
          title: 'Hojicha Base — Roasted & Caffeine-Free-Friendly',
          description: 'Prefer something toasty and mellow? Ask for any flavor on a hojicha (roasted green tea) base instead. Hojicha is nutty, caramel-like, and naturally very low in caffeine — the perfect pick for the evening, or for anyone avoiding a caffeine kick.',
        },
        {
          title: 'Get Any of Them Iced',
          description: 'Every matcha and hojicha drink can be made iced — and on a warm Waikiki day, that\'s how most guests order. The cold smooths the flavor and makes the color pop. Hot works beautifully too when you want something cozy.',
        },
        {
          title: 'Same Great Flavors, Your Way',
          description: 'Strawberry, mango, coconut, guava, banana, lilikoi — pair any flavor with either base, hot or iced. It\'s an easy way to make your drink exactly yours, and to find a new favorite on every visit.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Get the Best Matcha in Waikiki',
      intro: 'Craving matcha near Waikiki Beach? Kona Coffee Donut? is your spot.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Right on Kalākaua Avenue in the heart of Waikiki, Kona Coffee Donut? whisks real Japanese matcha to order in a full lineup of flavors — led by our bestselling Strawberry Matcha — plus caffeine-free hojicha and 100% Kona coffee. Get any of them hot or iced, and pair one with a fresh mochi donut. We\'re about a 5-minute walk from Waikiki Beach and open daily from 7AM to 9PM.',
        highlights: [
          'Bestselling Strawberry Matcha + a full flavor lineup',
          'Real whisked matcha or caffeine-free hojicha — hot or iced',
          'Pairs perfectly with a fresh mochi donut',
          '~5 min from Waikiki Beach · open daily 7AM–9PM · (808) 260-1835',
        ],
      },
      cta: 'See Our Matcha Menu',
    },
    howToEat: {
      title: 'Tips for the Best Matcha',
      subtitle: 'How to Order and Enjoy Yours',
      tips: [
        {
          title: 'Iced vs Hot — How to Choose',
          description: 'On a warm Waikiki afternoon, order it iced: the cold smooths the umami and makes the green even more refreshing. In the cooler early morning, hot matcha is cozy and comforting. Both use the same real whisked matcha, so you can\'t go wrong.',
        },
        {
          title: 'Start with Strawberry or Classic',
          description: 'New to our matcha? Order the Strawberry Matcha for the crowd-pleasing bestseller, or the Classic Matcha Latte for the pure, true taste. From there, branch into the tropical flavors on your next visit.',
        },
        {
          title: 'Pair It with a Mochi Donut',
          description: 'Matcha and mochi are a match made in heaven. Add a fresh mochi donut — we even make a matcha one — and the chewy, lightly sweet donut balances the earthy tea perfectly. It\'s the combo our regulars come back for.',
        },
        {
          title: 'Go Caffeine-Free with Hojicha',
          description: 'Want the treat without the buzz? Ask for your flavor on a hojicha base. It\'s roasted, nutty, and naturally very low in caffeine, so you can enjoy a warm or iced cup any time of day — even in the evening.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About Matcha in Waikiki',
      items: [
        {
          question: 'What is the best matcha drink at Kona Coffee Donut?',
          answer: 'Our most popular matcha is the Strawberry Matcha ($10.95) — a creamy, sweet-tart layer of strawberry over freshly whisked matcha and milk. It\'s the crowd favorite and the one we recommend ordering first. If you want the pure taste of matcha, the Classic Matcha Latte ($8.95) is the best place to start.',
        },
        {
          question: 'Do you have strawberry matcha in Waikiki?',
          answer: 'Yes. Strawberry Matcha ($10.95) is our bestselling matcha drink, made with real whisked Japanese matcha, milk, and a sweet layer of strawberry. You\'ll find it at Kona Coffee Donut? on Kalākaua Ave, about a 5-minute walk from Waikiki Beach — hot or iced.',
        },
        {
          question: 'Can I get iced matcha?',
          answer: 'Absolutely. Every matcha (and hojicha) drink on our menu can be made iced — including the Strawberry Matcha, Classic Matcha Latte, and all the tropical flavors. Iced is how most guests order on a warm Waikiki day.',
        },
        {
          question: 'Is there a caffeine-free option?',
          answer: 'Yes. Ask for any flavor on a hojicha (roasted green tea) base instead of matcha. Hojicha is naturally very low in caffeine, with a toasty, nutty, caramel-like flavor — perfect for the evening or anyone avoiding a caffeine kick.',
        },
        {
          question: 'How much is matcha in Waikiki?',
          answer: 'Most of our matcha lattes are $8.95 (Classic, Mango, Coconut, Guava, Banana, and Lilikoi Matcha). The Strawberry Matcha and Azuki Red Bean Latte are $10.95. All are made with real whisked matcha and can be ordered hot or iced at 2142 Kalakaua Ave.',
        },
      ],
    },
    cta: {
      title: 'Come Taste the Best Matcha in Waikiki',
      text: 'Visit Kona Coffee Donut? at 2142 Kalakaua Ave and try our bestselling Strawberry Matcha and the whole lineup — whisked fresh, hot or iced, just minutes from the beach.',
      menuButton: 'View Matcha Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'Best Matcha Drinks in Waikiki',
    },
  },
  ja: {
    hero: {
      title: 'ワイキキで一番おいしい抹茶ドリンク',
      subtitle: '全フレーバー人気ランキング — あなたにぴったりの一杯を（2026年版ガイド）',
      updated: '2026年6月更新',
      readTime: '6分で読める',
    },
    definition: {
      title: 'ワイキキで一番おいしい抹茶は？',
      text: '<strong>ワイキキで一番おいしい抹茶</strong>とは、既製の甘いインスタント粉ではなく、<strong>注文ごとに点てたて</strong>の本格的な石臼挽き日本産抹茶を、あなた好みのフレーバーで味わうことです。<strong>Kona Coffee Donut?</strong> の一番人気は<strong>ストロベリー抹茶（$10.95）</strong>。クリーミーで甘酸っぱく、写真映えも抜群です。純粋な味がお好みなら<strong>抹茶ラテ（クラシック・$8.95）</strong>が一番。マンゴー、ココナッツ、グァバ、バナナ、リリコイなどのトロピカルも、どれも<strong>アイス</strong>に、あるいは<strong>カフェインフリーのほうじ茶ベース</strong>にも変更可能 — すべてワイキキビーチから徒歩約5分です。',
    },
    history: {
      title: 'おいしい抹茶ドリンクの条件',
      subtitle: '本格点てたて抹茶、絶妙なバランス、そして好きなフレーバー',
      p1: 'おいしい抹茶は、<strong>既製の甘い粉ではなく、注文ごとに点てたての本格石臼挽き日本産抹茶</strong>から始まります。だからこそ鮮やかな緑色、なめらかで大地のうまみ豊かな味わい、そして抹茶ならではの穏やかで持続的なカフェインが生まれるのです。ワイキキのメニューの抹茶は、すべてこの本物のベースからできています。',
      p2: '二つ目の条件は<strong>バランス</strong>です。甘すぎるとお茶が埋もれ、甘さが足りないと角が立ちます。当店のフレーバー抹茶は、下の草の香りの抹茶を引き立てるのにちょうどよいフルーツやクリームを重ねているので、両方の味が楽しめます — 上はフルーティー、下は大地の風味。このバランスこそ、<strong>ストロベリー抹茶が一番人気になった</strong>理由です。',
      p3: 'フレーバー選びも大切です。純粋なクラシックの味が好きな人もいれば、南国フルーツ、クリーミーなココナッツ、デザートのようなバナナを求める人も。だから当店は<strong>豊富なラインナップ</strong>をご用意 — 抹茶が初めての方にも、毎日の習慣にしている方にも、あなたにぴったりの一杯があります。以下でランキングしてお選びをお手伝いします。',
      p4: '最後に、おいしい抹茶はその瞬間に寄り添います。暑いワイキキの午後には<strong>アイス</strong>、早朝にはホット、香ばしく穏やかなものが欲しいときは<strong>カフェインフリーのほうじ茶ベース</strong>に。どれも点てたてのモチドーナツと合わせれば、さっとのコーヒータイムが一日で最高の数分になります。',
    },
    comparison: {
      title: 'あなたにぴったりの抹茶フレーバーは？',
      subtitle: '最高の一杯を選ぶクイックガイド',
      intro: 'どれを注文するか迷ったら、気分にフレーバーを合わせて。どれも本格点てたて抹茶で、ホットでもアイスでもお作りできます：',
      headers: {
        feature: 'こんな気分なら…',
        bingsu: 'これを注文',
        shavedIce: '味わい',
        kakigori: '価格',
      },
      rows: [
        {
          feature: '一番人気・みんな大好き',
          bingsu: 'ストロベリー抹茶 ⭐',
          shavedIce: 'クリーミーで甘酸っぱいストロベリー',
          kakigori: '$10.95',
        },
        {
          feature: '純粋でクラシックな味',
          bingsu: '抹茶ラテ（クラシック）',
          shavedIce: '石臼挽き抹茶＋ミルク',
          kakigori: '$8.95',
        },
        {
          feature: '明るくトロピカル',
          bingsu: 'マンゴー抹茶',
          shavedIce: 'ジューシーな南国マンゴー',
          kakigori: '$8.95',
        },
        {
          feature: 'クリーミーな南国のコク',
          bingsu: 'ココナッツ抹茶',
          shavedIce: 'なめらかなハワイアンココナッツ',
          kakigori: '$8.95',
        },
        {
          feature: '地元の島フルーツ',
          bingsu: 'グァバ抹茶',
          shavedIce: '甘い島のグァバ',
          kakigori: '$8.95',
        },
        {
          feature: '楽しくてまろやか',
          bingsu: 'バナナ抹茶',
          shavedIce: '緑茶バナナシェイク',
          kakigori: '$8.95',
        },
        {
          feature: '甘酸っぱくて爽やか',
          bingsu: 'リリコイ抹茶',
          shavedIce: '酸味のあるパッションフルーツ',
          kakigori: '$8.95',
        },
        {
          feature: '伝統的でほっとする',
          bingsu: 'あずき（小豆）ラテ',
          shavedIce: '甘い小豆',
          kakigori: '$10.95',
        },
        {
          feature: 'カフェインフリーで香ばしい',
          bingsu: 'お好きなフレーバー・ほうじ茶ベース',
          shavedIce: '香ばしくナッツのようなキャラメル',
          kakigori: '$8.95',
        },
      ],
      note: 'どのドリンクもアイスにでき、どのフレーバーも抹茶の代わりにカフェインフリーのほうじ茶ベースでお作りできます。迷ったらまずストロベリー抹茶を — 一番人気にはちゃんと理由があります。',
    },
    types: {
      title: '当店の抹茶ラインナップ・ランキング',
      subtitle: 'ワイキキで味わえる全フレーバー — どれも絶品、人気No.1はひとつ',
      items: [
        {
          name: 'ストロベリー抹茶',
          korean: '第1位 · $10.95 · 一番人気 ⭐',
          description: '一番人気で最も注文される抹茶。点てたての抹茶とミルクの上に甘いストロベリーの層 — クリーミーで甘酸っぱく、写真映えも抜群です。ベリーが草の香りの抹茶を明るくし、ミルクがなめらかにまとめます。ワイキキで抹茶を一杯選ぶなら、迷わずこれを。',
          icon: '🍓',
        },
        {
          name: '抹茶ラテ（クラシック）',
          korean: '第2位 · $8.95',
          description: 'お好みのミルクに点てた、純粋な石臼挽き日本産抹茶。大地の風味、なめらかさ、ほのかな甘さ — 本格抹茶を最も忠実に表現した一杯で、メニュー全体の基準になります。ホットでもアイスでも、モチドーナツと一緒にどうぞ。',
          icon: '🍵',
        },
        {
          name: 'マンゴー抹茶',
          korean: '第3位 · $8.95 · トロピカル',
          description: '当店の島風アレンジ。ジューシーな南国マンゴーを本格点てたて抹茶に重ねた、明るく爽やかな一杯。ワイキキの日差しの下、アイスがおすすめ。本土ではなかなか出会えないフルーティーな人気メニューです。',
          icon: '🥭',
        },
        {
          name: 'ココナッツ抹茶',
          korean: '$8.95 · ハワイアン',
          description: 'クリーミーな南国のコクと大地の抹茶の出会い。ココナッツがお茶をなめらかでデザートのような甘さに包みます。抹茶が初めての方にも愛される、まろやかでトロピカルな一杯。',
          icon: '🥥',
        },
        {
          name: 'グァバ抹茶',
          korean: '$8.95 · 島フルーツ',
          description: '甘く香り高い島のグァバを点てた抹茶に。グァバはハワイで愛される定番の味で、草の香りの抹茶と重なると、この島でしか味わえない一杯になります。',
          icon: '🍈',
        },
        {
          name: 'バナナ抹茶',
          korean: '$8.95',
          description: 'まるで緑茶バナナミルクシェイク。クリーミーなバナナが抹茶の大地の風味をなめらかでデザートのような味わいに。お子様にも抹茶初心者にも人気の、楽しくてまろやかな一杯です。',
          icon: '🍌',
        },
        {
          name: 'リリコイ（パッションフルーツ）抹茶',
          korean: '$8.95 · 島フルーツ',
          description: '爽やかなハワイのパッションフルーツが、酸味のあるトロピカルな刺激で抹茶を明るく彩ります。爽快で少しエキゾチック。抹茶を明るく生き生きと楽しみたい方に試してほしい島フルーツフレーバーです。',
          icon: '🌺',
        },
        {
          name: 'あずき（小豆）ラテ',
          korean: '$10.95 · 伝統',
          description: '日韓おなじみのクラシックなカフェの味を愛する方へ。甘い小豆をクリーミーなラテに溶かし込んだ、ほっとする香ばしくほのかな甘さ。抹茶ラテと並べて味わえば、一度の来店でカフェ文化の二つの顔を楽しめます。',
          icon: '🫘',
        },
      ],
    },
    whyHawaii: {
      title: '抹茶？ それともほうじ茶？ ベースを選ぼう',
      points: [
        {
          title: '抹茶ベース — 鮮やかで草の香り',
          description: 'クラシックなベース。どのフレーバーも本格石臼挽き日本産抹茶を点てたてで — 鮮やかな緑、大地の甘み、そして抹茶ならではの穏やかなカフェイン。抹茶ラテと聞いて多くの人が思い浮かべる味であり、一番人気のストロベリー抹茶のベースでもあります。',
        },
        {
          title: 'ほうじ茶ベース — 香ばしくカフェイン控えめ',
          description: '香ばしくまろやかなものがお好みなら、どのフレーバーもほうじ茶（焙煎緑茶）ベースに変更できます。ほうじ茶はナッツのようなキャラメル風味で、カフェインが自然にとても少なめ — 夜や、カフェインを控えたい方にぴったりです。',
        },
        {
          title: 'どれもアイスに',
          description: 'すべての抹茶・ほうじ茶ドリンクはアイスにできます。暖かいワイキキの日には、ほとんどのお客様がこの飲み方。冷たさが味をなめらかにし、色を鮮やかに引き立てます。ホットも、ほっとしたいときに最高です。',
        },
        {
          title: '同じおいしさ、あなた好みに',
          description: 'ストロベリー、マンゴー、ココナッツ、グァバ、バナナ、リリコイ — どのフレーバーもどちらのベースでも、ホットでもアイスでも。自分だけの一杯に仕上げ、来店のたびに新しいお気に入りを見つける、簡単な方法です。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキで一番の抹茶を飲むなら',
      intro: 'ワイキキビーチ近くで抹茶が飲みたくなったら、Kona Coffee Donut? へ。',
      shop: {
        name: 'Kona Coffee Donut?（コナコーヒードーナツ）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心、カラカウア通り沿いにあるKona Coffee Donut? では、本格日本産抹茶を注文ごとに点て、豊富なフレーバーでご用意 — 一番人気のストロベリー抹茶を筆頭に、カフェインフリーのほうじ茶、100%コナコーヒーも。どれもホットでもアイスでも、点てたてのモチドーナツと一緒にどうぞ。ワイキキビーチから徒歩約5分、毎日朝7時から夜9時まで営業です。',
        highlights: [
          '一番人気のストロベリー抹茶＋豊富なフレーバー',
          '本格点てたて抹茶、またはカフェインフリーのほうじ茶 — ホット＆アイス',
          '点てたてのモチドーナツとの相性抜群',
          'ワイキキビーチから徒歩約5分・毎日朝7時〜夜9時・(808) 260-1835',
        ],
      },
      cta: '抹茶メニューを見る',
    },
    howToEat: {
      title: '最高の抹茶のためのコツ',
      subtitle: '注文と楽しみ方のヒント',
      tips: [
        {
          title: 'アイス？ ホット？ 選び方',
          description: '暖かいワイキキの午後には、ぜひアイスで。冷たさがうまみをなめらかにし、緑をさらに爽やかにします。涼しい早朝には、ホット抹茶がほっとする一杯。どちらも同じ本格点てたて抹茶なので、失敗はありません。',
        },
        {
          title: 'まずはストロベリーかクラシックから',
          description: '当店の抹茶が初めてなら、一番人気のストロベリー抹茶か、純粋な本来の味の抹茶ラテ（クラシック）を。そこから、次回はトロピカルフレーバーへと広げてみてください。',
        },
        {
          title: 'モチドーナツと合わせて',
          description: '抹茶とモチは天国の組み合わせ。点てたてのモチドーナツを添えて — 抹茶モチドーナツもあります。もちもちでほんのり甘いドーナツが、大地の抹茶を完璧に引き立てます。常連さんが何度も戻ってくる人気のコンビです。',
        },
        {
          title: 'ほうじ茶でカフェインフリーに',
          description: 'カフェインなしでご褒美を楽しみたい？ お好きなフレーバーをほうじ茶ベースで。香ばしくナッツのような風味で、カフェインが自然にとても少なめ。夜でも、いつでもホットやアイスで楽しめます。',
        },
      ],
    },
    faq: {
      title: 'ワイキキの抹茶に関するよくある質問',
      items: [
        {
          question: 'Kona Coffee Donut? で一番おいしい抹茶ドリンクは？',
          answer: '一番人気の抹茶はストロベリー抹茶（$10.95）— 点てたての抹茶とミルクの上に、クリーミーで甘酸っぱいストロベリーの層。みんなに愛される一番人気で、最初に注文するのにおすすめの一杯です。純粋な抹茶の味をお求めなら、抹茶ラテ（クラシック・$8.95）から始めるのが一番です。',
        },
        {
          question: 'ワイキキでストロベリー抹茶はありますか？',
          answer: 'はい。ストロベリー抹茶（$10.95）は当店で一番人気の抹茶ドリンクで、本格点てたて日本産抹茶、ミルク、そして甘いストロベリーの層で作ります。カラカウア通りのKona Coffee Donut?、ワイキキビーチから徒歩約5分でお楽しみいただけます — ホットでもアイスでも。',
        },
        {
          question: 'アイス抹茶はできますか？',
          answer: 'もちろんです。メニューのすべての抹茶（およびほうじ茶）ドリンクはアイスにできます — ストロベリー抹茶、抹茶ラテ（クラシック）、すべてのトロピカルフレーバーも。暖かいワイキキの日には、ほとんどのお客様がアイスで注文されます。',
        },
        {
          question: 'カフェインフリーの選択肢はありますか？',
          answer: 'はい。どのフレーバーも抹茶の代わりにほうじ茶（焙煎緑茶）ベースでお作りできます。ほうじ茶はカフェインが自然にとても少なく、香ばしくナッツのようなキャラメル風味 — 夜や、カフェインを控えたい方にぴったりです。',
        },
        {
          question: 'ワイキキで抹茶はいくらですか？',
          answer: 'ほとんどの抹茶ラテは$8.95（クラシック、マンゴー、ココナッツ、グァバ、バナナ、リリコイ抹茶）。ストロベリー抹茶とあずきラテは$10.95です。すべて本格点てたて抹茶で作り、2142 Kalakaua Ave でホットでもアイスでもご注文いただけます。',
        },
      ],
    },
    cta: {
      title: 'ワイキキで一番の抹茶を味わおう',
      text: '2142 Kalakaua Ave のKona Coffee Donut? で、一番人気のストロベリー抹茶と全ラインナップを — 点てたて、ホットでもアイスでも、ビーチからわずか数分。',
      menuButton: '抹茶メニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'ワイキキで一番の抹茶ドリンク',
    },
  },
  ko: {
    hero: {
      title: '와이키키 최고의 말차 음료',
      subtitle: '모든 플레이버 인기 랭킹 — 나에게 딱 맞는 한 잔 찾기 (2026 가이드)',
      updated: '2026년 6월 업데이트',
      readTime: '6분 소요',
    },
    definition: {
      title: '와이키키 최고의 말차는?',
      text: '<strong>와이키키 최고의 말차</strong>는 달콤한 기성 인스턴트 가루가 아니라, <strong>주문 즉시 갓 격불한</strong> 진짜 맷돌 간 일본 말차를 내가 좋아하는 플레이버로 즐기는 것입니다. <strong>Kona Coffee Donut?</strong> 의 가장 인기 메뉴는 <strong>딸기 말차($10.95)</strong> — 크리미하고 새콤달콤하며 사진발도 최고입니다. 순수한 맛을 원하신다면 <strong>클래식 말차 라테($8.95)</strong>가 정답. 망고, 코코넛, 구아바, 바나나, 리리코이 같은 트로피컬도, 무엇이든 <strong>아이스</strong>로, 혹은 <strong>카페인 프리 호지차 베이스</strong>로 바꿀 수 있습니다 — 모두 와이키키 비치에서 도보 약 5분.',
    },
    history: {
      title: '맛있는 말차 음료의 조건',
      subtitle: '진짜 갓 격불한 말차, 알맞은 균형, 그리고 좋아하는 플레이버',
      p1: '맛있는 말차는 <strong>달콤한 기성 가루가 아닌, 주문 즉시 갓 격불한 진짜 맷돌 간 일본 말차</strong>에서 시작됩니다. 그래야 선명한 초록색, 부드럽고 고소한 감칠맛, 그리고 말차 특유의 차분하고 꾸준한 카페인이 나오죠. 와이키키 메뉴의 모든 말차는 바로 이 진짜 베이스로 만듭니다.',
      p2: '두 번째 조건은 <strong>균형</strong>입니다. 설탕이 너무 많으면 차가 묻히고, 너무 적으면 거칠어질 수 있습니다. 저희 플레이버 말차는 아래의 풀향 말차를 살려줄 딱 알맞은 만큼의 과일이나 크림을 얹어, 두 가지 맛을 모두 느끼게 합니다 — 위는 상큼하게, 아래는 고소하게. 이 균형이야말로 <strong>딸기 말차가 가장 인기 있는 음료가 된</strong> 이유입니다.',
      p3: '플레이버 선택도 중요합니다. 순수한 클래식 맛을 원하는 분도 있고, 트로피컬 과일, 크리미한 코코넛, 디저트 같은 바나나를 원하는 분도 있죠. 그래서 저희는 <strong>풍성한 라인업</strong>을 준비했습니다 — 말차가 처음이든, 매일의 루틴이든, 당신을 위한 한 잔이 있습니다. 아래에서 랭킹으로 선택을 도와드릴게요.',
      p4: '마지막으로, 맛있는 말차는 그 순간에 어울립니다. 더운 와이키키 오후엔 <strong>아이스</strong>, 이른 아침엔 따뜻하게, 고소하고 부드러운 걸 원할 땐 <strong>카페인 프리 호지차 베이스</strong>로. 무엇이든 갓 만든 모찌 도넛과 곁들이면, 잠깐의 커피 타임이 하루 중 가장 좋은 몇 분이 됩니다.',
    },
    comparison: {
      title: '나에게 맞는 말차 플레이버는?',
      subtitle: '완벽한 한 잔을 고르는 빠른 가이드',
      intro: '무엇을 주문할지 모르겠다면, 기분에 플레이버를 맞춰보세요 — 모두 진짜 갓 격불한 말차로 만들며, 따뜻하게든 차갑게든 드립니다:',
      headers: {
        feature: '이런 걸 원한다면…',
        bingsu: '이걸 주문하세요',
        shavedIce: '이런 맛',
        kakigori: '가격',
      },
      rows: [
        {
          feature: '베스트셀러 · 누구나 좋아하는',
          bingsu: '딸기 말차 ⭐',
          shavedIce: '크리미하고 새콤달콤한 딸기',
          kakigori: '$10.95',
        },
        {
          feature: '순수하고 클래식한 맛',
          bingsu: '클래식 말차 라테',
          shavedIce: '맷돌 간 말차 + 우유',
          kakigori: '$8.95',
        },
        {
          feature: '상큼하고 트로피컬한',
          bingsu: '망고 말차',
          shavedIce: '즙 많은 트로피컬 망고',
          kakigori: '$8.95',
        },
        {
          feature: '크리미한 섬의 풍미',
          bingsu: '코코넛 말차',
          shavedIce: '부드러운 하와이안 코코넛',
          kakigori: '$8.95',
        },
        {
          feature: '현지 섬 과일',
          bingsu: '구아바 말차',
          shavedIce: '달콤한 섬 구아바',
          kakigori: '$8.95',
        },
        {
          feature: '재미있고 부드러운',
          bingsu: '바나나 말차',
          shavedIce: '녹차 바나나 셰이크',
          kakigori: '$8.95',
        },
        {
          feature: '새콤하고 상큼한',
          bingsu: '리리코이 말차',
          shavedIce: '새콤한 패션프루트',
          kakigori: '$8.95',
        },
        {
          feature: '전통적이고 포근한',
          bingsu: '아즈키(단팥) 라테',
          shavedIce: '달콤한 단팥',
          kakigori: '$10.95',
        },
        {
          feature: '카페인 프리 · 구수한',
          bingsu: '아무 플레이버, 호지차 베이스',
          shavedIce: '구수한 견과 캐러멜',
          kakigori: '$8.95',
        },
      ],
      note: '모든 음료는 아이스로 만들 수 있고, 어떤 플레이버든 말차 대신 카페인 프리 호지차 베이스로 만들 수 있습니다. 고민된다면 딸기 말차부터 — 가장 인기 있는 데는 다 이유가 있으니까요.',
    },
    types: {
      title: '우리의 말차 라인업, 랭킹',
      subtitle: '와이키키에서 선보이는 모든 플레이버 — 다 훌륭하지만, 베스트셀러는 하나',
      items: [
        {
          name: '딸기 말차',
          korean: '1위 · $10.95 · 가장 인기 ⭐',
          description: '가장 인기 있고 가장 많이 주문되는 말차. 갓 격불한 말차와 우유 위에 달콤한 딸기 층 — 크리미하고 새콤달콤하며 사진발도 최고입니다. 베리가 풀향의 말차를 밝혀주고, 우유가 부드럽게 잡아줍니다. 와이키키에서 말차 한 잔을 고른다면, 망설임 없이 이걸로.',
          icon: '🍓',
        },
        {
          name: '클래식 말차 라테',
          korean: '2위 · $8.95',
          description: '원하는 우유에 격불한 순수한 맷돌 간 일본 말차. 고소하고 부드러우며 은은하게 달콤한 — 진짜 말차를 가장 충실하게 표현한 한 잔이자 전체 메뉴의 기준입니다. 따뜻하게든 차갑게든, 모찌 도넛과 함께 즐기세요.',
          icon: '🍵',
        },
        {
          name: '망고 말차',
          korean: '3위 · $8.95 · 트로피컬',
          description: '저희의 섬 변주. 즙 많은 트로피컬 망고를 진짜 갓 격불한 말차에 얹은, 상큼하고 청량한 한 잔. 와이키키 햇살 아래 아이스로 즐기세요. 본토에서는 찾기 힘든 과일 향의 인기 메뉴입니다.',
          icon: '🥭',
        },
        {
          name: '코코넛 말차',
          korean: '$8.95 · 하와이안',
          description: '크리미한 섬의 풍미와 고소한 말차의 만남. 코코넛이 차를 부드럽고 디저트 같은 단맛으로 감싸줍니다. 말차가 처음인 분들도 좋아하는, 부드럽고 트로피컬한 한 잔.',
          icon: '🥥',
        },
        {
          name: '구아바 말차',
          korean: '$8.95 · 섬 과일',
          description: '달콤하고 향긋한 섬 구아바를 격불한 말차에. 구아바는 하와이에서 사랑받는 정통 맛이며, 풀향의 말차와 겹쳐지면 이 섬에서만 제대로 즐길 수 있는 한 잔이 됩니다.',
          icon: '🍈',
        },
        {
          name: '바나나 말차',
          korean: '$8.95',
          description: '마치 녹차 바나나 밀크셰이크. 크리미한 바나나가 말차의 고소한 끝맛을 부드럽고 디저트 같은 맛으로 다듬어줍니다. 아이들에게도 말차 입문자에게도 인기인, 재미있고 부드러운 선택.',
          icon: '🍌',
        },
        {
          name: '리리코이(패션프루트) 말차',
          korean: '$8.95 · 섬 과일',
          description: '새콤한 하와이 패션프루트가 새콤한 트로피컬 자극으로 말차를 밝혀줍니다. 상큼하고 살짝 이국적인 리리코이는, 말차를 밝고 생기 있게 즐기고 싶은 분께 권하는 섬 과일 플레이버입니다.',
          icon: '🌺',
        },
        {
          name: '아즈키(단팥) 라테',
          korean: '$10.95 · 전통',
          description: '한일 모두에게 친숙한 클래식 카페 맛을 사랑하는 분께. 달콤한 아즈키 단팥을 크리미한 라테에 녹여낸, 포근하고 고소하며 은은하게 단 음료. 말차 라테와 나란히 주문하면 한 번의 방문으로 카페 문화의 두 얼굴을 맛볼 수 있습니다.',
          icon: '🫘',
        },
      ],
    },
    whyHawaii: {
      title: '말차? 아니면 호지차? 베이스를 고르세요',
      points: [
        {
          title: '말차 베이스 — 선명하고 풀향 가득',
          description: '클래식한 베이스. 모든 플레이버는 진짜 맷돌 간 일본 말차를 갓 격불해 만듭니다 — 선명한 초록, 고소한 단맛, 말차 특유의 차분한 카페인. 말차 라테 하면 대부분이 떠올리는 맛이자, 베스트셀러 딸기 말차의 베이스이기도 합니다.',
        },
        {
          title: '호지차 베이스 — 구수하고 카페인 걱정 적게',
          description: '구수하고 부드러운 걸 원하신다면, 어떤 플레이버든 호지차(볶은 녹차) 베이스로 바꿔보세요. 호지차는 고소한 캐러멜 풍미에 카페인이 자연적으로 아주 낮습니다 — 저녁이나, 카페인을 피하고 싶은 분께 딱입니다.',
        },
        {
          title: '무엇이든 아이스로',
          description: '모든 말차와 호지차 음료는 아이스로 만들 수 있습니다 — 따뜻한 와이키키 날엔 대부분의 손님이 이렇게 주문하시죠. 차가움이 맛을 부드럽게 하고 색을 돋보이게 합니다. 포근함을 원할 땐 따뜻하게도 훌륭합니다.',
        },
        {
          title: '같은 맛, 당신의 방식대로',
          description: '딸기, 망고, 코코넛, 구아바, 바나나, 리리코이 — 어떤 플레이버든 두 베이스 중 하나로, 따뜻하게든 차갑게든. 나만의 한 잔으로 만들고, 방문할 때마다 새로운 최애를 찾는 쉬운 방법입니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 최고의 말차 마시는 곳',
      intro: '와이키키 비치 근처에서 말차가 당긴다면, Kona Coffee Donut? 이 정답입니다.',
      shop: {
        name: 'Kona Coffee Donut? (코나커피도넛)',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키의 중심, 칼라카우아 애비뉴에 자리한 Kona Coffee Donut? 은 진짜 일본 말차를 주문 즉시 격불해 다양한 플레이버로 선보입니다 — 베스트셀러 딸기 말차를 필두로, 카페인 프리 호지차와 100% 코나 커피까지. 무엇이든 따뜻하게든 차갑게든, 갓 만든 모찌 도넛과 함께 즐기세요. 와이키키 비치에서 도보 약 5분, 매일 오전 7시부터 밤 9시까지 영업합니다.',
        highlights: [
          '베스트셀러 딸기 말차 + 풍성한 플레이버 라인업',
          '진짜 갓 격불 말차 또는 카페인 프리 호지차 — 핫 & 아이스',
          '갓 만든 모찌 도넛과 찰떡궁합',
          '와이키키 비치에서 도보 약 5분 · 매일 오전 7시~밤 9시 · (808) 260-1835',
        ],
      },
      cta: '말차 메뉴 보기',
    },
    howToEat: {
      title: '최고의 말차를 위한 팁',
      subtitle: '주문하고 즐기는 법',
      tips: [
        {
          title: '아이스 vs 핫 — 고르는 법',
          description: '따뜻한 와이키키 오후엔 아이스로: 차가움이 감칠맛을 부드럽게 하고 초록을 더 상큼하게 만듭니다. 서늘한 이른 아침엔 따뜻한 말차가 포근합니다. 둘 다 같은 진짜 갓 격불 말차라 실패가 없습니다.',
        },
        {
          title: '딸기 또는 클래식부터',
          description: '저희 말차가 처음이라면, 누구나 좋아하는 베스트셀러 딸기 말차나, 순수한 본연의 맛 클래식 말차 라테를 주문하세요. 그다음 방문 때 트로피컬 플레이버로 넓혀보세요.',
        },
        {
          title: '모찌 도넛과 함께',
          description: '말차와 모찌는 천생연분. 갓 만든 모찌 도넛을 곁들이세요 — 말차 모찌 도넛도 있습니다. 쫄깃하고 은은하게 단 도넛이 고소한 차를 완벽하게 받쳐줍니다. 단골들이 다시 찾는 바로 그 콤보죠.',
        },
        {
          title: '호지차로 카페인 프리하게',
          description: '카페인 없이 즐기고 싶으세요? 원하는 플레이버를 호지차 베이스로 주문하세요. 구수하고 고소하며 카페인이 자연적으로 아주 낮아, 저녁에도 언제든 따뜻하게든 차갑게든 즐길 수 있습니다.',
        },
      ],
    },
    faq: {
      title: '와이키키 말차에 대해 자주 묻는 질문',
      items: [
        {
          question: 'Kona Coffee Donut? 에서 가장 맛있는 말차 음료는?',
          answer: '가장 인기 있는 말차는 딸기 말차($10.95) — 갓 격불한 말차와 우유 위에 크리미하고 새콤달콤한 딸기 층입니다. 누구나 좋아하는 인기 메뉴이자 가장 먼저 주문하기를 추천하는 한 잔이죠. 순수한 말차 맛을 원하신다면, 클래식 말차 라테($8.95)로 시작하는 것이 가장 좋습니다.',
        },
        {
          question: '와이키키에서 딸기 말차가 있나요?',
          answer: '네. 딸기 말차($10.95)는 저희 베스트셀러 말차 음료로, 진짜 갓 격불한 일본 말차, 우유, 그리고 달콤한 딸기 층으로 만듭니다. 칼라카우아 애비뉴의 Kona Coffee Donut?, 와이키키 비치에서 도보 약 5분 거리에서 만나보세요 — 따뜻하게든 차갑게든.',
        },
        {
          question: '아이스 말차가 되나요?',
          answer: '물론입니다. 메뉴의 모든 말차(및 호지차) 음료는 아이스로 만들 수 있습니다 — 딸기 말차, 클래식 말차 라테, 모든 트로피컬 플레이버까지. 따뜻한 와이키키 날엔 대부분의 손님이 아이스로 주문하십니다.',
        },
        {
          question: '카페인 프리 옵션이 있나요?',
          answer: '네. 어떤 플레이버든 말차 대신 호지차(볶은 녹차) 베이스로 주문하세요. 호지차는 카페인이 자연적으로 아주 낮고, 구수하고 고소한 캐러멜 풍미입니다 — 저녁이나 카페인을 피하고 싶은 분께 딱입니다.',
        },
        {
          question: '와이키키에서 말차는 얼마인가요?',
          answer: '대부분의 말차 라테는 $8.95입니다(클래식, 망고, 코코넛, 구아바, 바나나, 리리코이 말차). 딸기 말차와 아즈키 단팥 라테는 $10.95입니다. 모두 진짜 갓 격불한 말차로 만들며, 2142 Kalakaua Ave에서 따뜻하게든 차갑게든 주문하실 수 있습니다.',
        },
      ],
    },
    cta: {
      title: '와이키키 최고의 말차를 맛보러 오세요',
      text: '2142 Kalakaua Ave의 Kona Coffee Donut? 에서 베스트셀러 딸기 말차와 전 라인업을 — 갓 격불해, 따뜻하게든 차갑게든, 해변에서 단 몇 분 거리에서.',
      menuButton: '말차 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '와이키키 최고의 말차 음료',
    },
  },
  zh: {
    hero: {
      title: '威基基最好喝的抹茶饮品',
      subtitle: '全口味人气排行 — 找到最适合你的那一杯（2026指南）',
      updated: '2026年6月更新',
      readTime: '阅读约6分钟',
    },
    definition: {
      title: '威基基最好喝的抹茶是哪款？',
      text: '<strong>威基基最好喝的抹茶</strong>，是用真正的石磨日本抹茶<strong>现点现打</strong>——而非加糖的速溶粉——调成你喜欢的口味。在 <strong>Kona Coffee Donut?</strong>，我们最人气的一款是<strong>草莓抹茶（$10.95）</strong>：奶香浓郁、酸甜可口，还格外上镜。想要纯粹的味道？<strong>经典抹茶拿铁（$8.95）</strong>最正宗。再加上芒果、椰子、番石榴、香蕉或百香果等热带口味，任意一款都能做成<strong>冰饮</strong>，或换成<strong>无咖啡因的焙茶底</strong>——全都距威基基海滩约5分钟。',
    },
    history: {
      title: '一杯好抹茶的秘诀',
      subtitle: '真正现打的抹茶、恰到好处的平衡，以及你喜爱的口味',
      p1: '一杯好抹茶，始于<strong>真正现点现打的石磨日本抹茶</strong>，而非加糖的速溶粉。正因如此，才有那鲜亮的绿色、顺滑醇厚的鲜味，以及抹茶著称的平静持久咖啡因。我们威基基菜单上的每一款抹茶，都建立在这同一个正宗基底之上。',
      p2: '第二个秘诀是<strong>平衡</strong>。糖太多会埋没茶味，太少又会显得生涩。我们的风味抹茶只叠加恰到好处的果味或奶香，来衬托下层的草本抹茶，让你两种味道都尝得到——上层明亮，下层醇厚。正是这份平衡，让<strong>草莓抹茶成为我们最人气的饮品</strong>。',
      p3: '口味选择同样重要。有人想要纯粹的经典味，有人想要热带水果、奶香椰子，或像甜点般的香蕉。所以我们供应<strong>完整的口味阵容</strong>——无论是你人生第一杯抹茶，还是每日必点，总有一杯专属于你。下面我们为你排行，帮你挑选。',
      p4: '最后，一杯好抹茶要契合当下。炎热的威基基午后来杯<strong>冰饮</strong>，清晨来杯热的，想要香醇温和时就换成<strong>无咖啡因的焙茶底</strong>。任意一款配上现做麻糬甜甜圈，随手一杯咖啡便成了一天中最惬意的几分钟。',
    },
    comparison: {
      title: '哪款抹茶口味适合你？',
      subtitle: '挑选你完美一杯的快速指南',
      intro: '不知道点哪款？按心情来选口味吧——每一款都用真正现打的抹茶制作，冷热皆可：',
      headers: {
        feature: '如果你想要…',
        bingsu: '就点这款',
        shavedIce: '口感',
        kakigori: '价格',
      },
      rows: [
        {
          feature: '招牌 · 人人爱',
          bingsu: '草莓抹茶 ⭐',
          shavedIce: '奶香酸甜的草莓',
          kakigori: '$10.95',
        },
        {
          feature: '纯粹的经典味',
          bingsu: '经典抹茶拿铁',
          shavedIce: '石磨抹茶 + 牛奶',
          kakigori: '$8.95',
        },
        {
          feature: '明亮又热带',
          bingsu: '芒果抹茶',
          shavedIce: '多汁热带芒果',
          kakigori: '$8.95',
        },
        {
          feature: '奶香海岛醇厚',
          bingsu: '椰子抹茶',
          shavedIce: '顺滑夏威夷椰子',
          kakigori: '$8.95',
        },
        {
          feature: '本地海岛水果',
          bingsu: '番石榴抹茶',
          shavedIce: '香甜海岛番石榴',
          kakigori: '$8.95',
        },
        {
          feature: '有趣又柔和',
          bingsu: '香蕉抹茶',
          shavedIce: '绿茶香蕉奶昔',
          kakigori: '$8.95',
        },
        {
          feature: '酸爽清新',
          bingsu: '百香果抹茶',
          shavedIce: '酸香百香果',
          kakigori: '$8.95',
        },
        {
          feature: '传统又暖心',
          bingsu: '红豆拿铁',
          shavedIce: '香甜红豆',
          kakigori: '$10.95',
        },
        {
          feature: '无咖啡因 · 焙烤香',
          bingsu: '任意口味 · 焙茶底',
          shavedIce: '焙香坚果焦糖',
          kakigori: '$8.95',
        },
      ],
      note: '每款饮品都能做成冰饮，任意口味都能用无咖啡因的焙茶底代替抹茶。拿不定主意时，就从草莓抹茶开始——它成为最人气自有道理。',
    },
    types: {
      title: '我们的抹茶阵容 · 排行',
      subtitle: '威基基供应的每一款口味——款款出色，招牌只有一个',
      items: [
        {
          name: '草莓抹茶',
          korean: '第1名 · $10.95 · 最人气 ⭐',
          description: '我们最人气、点单率最高的抹茶。现打抹茶与牛奶之上，铺一层香甜草莓——奶香浓郁、酸甜可口，还格外上镜。莓果点亮草本抹茶，牛奶让口感顺滑。在威基基只点一杯抹茶，就选它。',
          icon: '🍓',
        },
        {
          name: '经典抹茶拿铁',
          korean: '第2名 · $8.95',
          description: '纯正石磨日本抹茶打入你选择的牛奶。醇厚、顺滑、微甜——正宗抹茶最真实的表达，也是整个菜单的基准。可点热饮或冰饮，配一个麻糬甜甜圈更佳。',
          icon: '🍵',
        },
        {
          name: '芒果抹茶',
          korean: '第3名 · $8.95 · 热带',
          description: '我们的海岛演绎。多汁的热带芒果叠在真正现打的抹茶上——明亮、清爽，最适合在威基基阳光下做成冰饮。这款果香人气之选，在本土可不容易找到。',
          icon: '🥭',
        },
        {
          name: '椰子抹茶',
          korean: '$8.95 · 夏威夷',
          description: '奶香海岛醇厚遇上醇厚抹茶。椰子把茶味裹进顺滑、甜点般的甜香里——是初次尝试抹茶者钟爱的柔和热带之选。',
          icon: '🥥',
        },
        {
          name: '番石榴抹茶',
          korean: '$8.95 · 海岛水果',
          description: '香甜芬芳的海岛番石榴，融入现打抹茶。番石榴是夏威夷人钟爱的味道，与草本抹茶层叠，便化作只有在海岛才能真正享受的一杯。',
          icon: '🍈',
        },
        {
          name: '香蕉抹茶',
          korean: '$8.95',
          description: '宛如一杯绿茶香蕉奶昔。奶香香蕉把抹茶的醇厚尾韵化得顺滑而甜点般——是深受孩子和抹茶新手喜爱的有趣柔和之选。',
          icon: '🍌',
        },
        {
          name: '百香果（Lilikoi）抹茶',
          korean: '$8.95 · 海岛水果',
          description: '酸香的夏威夷百香果，以酸爽的热带气息点亮抹茶。清爽又带点异国风情，若你喜欢明亮活泼的抹茶，百香果就是要试的那款海岛水果口味。',
          icon: '🌺',
        },
        {
          name: '红豆（Azuki）拿铁',
          korean: '$10.95 · 传统',
          description: '献给钟爱经典日韩咖啡厅风味的你。香甜红豆融入奶香拿铁——温暖、坚果香、淡淡的甜。与抹茶拿铁并排点，一次就能品味咖啡厅文化的两种面貌。',
          icon: '🫘',
        },
      ],
    },
    whyHawaii: {
      title: '抹茶还是焙茶？选择你的茶底',
      points: [
        {
          title: '抹茶底——鲜亮又草本',
          description: '经典之选。每款口味都以真正石磨日本抹茶现打而成——鲜绿、醇甜，带有抹茶标志性的平静咖啡因。这是大多数人点抹茶拿铁时想到的味道，也是我们招牌草莓抹茶的基底。',
        },
        {
          title: '焙茶底——焙烤香，适合避开咖啡因',
          description: '偏爱香醇温和？可把任意口味换成焙茶（烘焙绿茶）底。焙茶带坚果焦糖香，咖啡因天然极低——是夜晚或想避开咖啡因者的完美之选。',
        },
        {
          title: '任意一款都能做冰饮',
          description: '每款抹茶和焙茶饮品都能做成冰饮——在温暖的威基基，大多数客人都这么点。冰凉能柔化风味、让颜色更亮眼。想要暖心时，热饮同样出色。',
        },
        {
          title: '同样的好味道，随你定制',
          description: '草莓、芒果、椰子、番石榴、香蕉、百香果——任意口味搭配任一茶底，冷热皆可。这是把饮品调成专属于你、并在每次到访都发现新最爱的简单方式。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基哪里能喝到最好的抹茶',
      intro: '在威基基海滩附近想喝抹茶？Kona Coffee Donut? 就是你的去处。',
      shop: {
        name: 'Kona Coffee Donut?（科纳咖啡甜甜圈）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '就在威基基中心的卡拉卡瓦大道上，Kona Coffee Donut? 现点现打正宗日本抹茶，口味阵容齐全——以招牌草莓抹茶领衔，还有无咖啡因焙茶和100%科纳咖啡。任意一款都可点热饮或冰饮，再配一个现做麻糬甜甜圈。我们距威基基海滩约5分钟步行，每天早上7点至晚上9点营业。',
        highlights: [
          '招牌草莓抹茶 + 齐全的口味阵容',
          '真正现打抹茶或无咖啡因焙茶——冷热皆有',
          '与现做麻糬甜甜圈绝配',
          '距威基基海滩约5分钟 · 每日早7点至晚9点 · (808) 260-1835',
        ],
      },
      cta: '查看抹茶菜单',
    },
    howToEat: {
      title: '喝到最好抹茶的小贴士',
      subtitle: '如何点单与享用',
      tips: [
        {
          title: '冰还是热——如何选',
          description: '在温暖的威基基午后，就点冰的：冰凉柔化鲜味，让绿色更清爽。凉爽的清晨，热抹茶暖心舒适。两者都用同样真正现打的抹茶，怎么点都不会错。',
        },
        {
          title: '先从草莓或经典入手',
          description: '初次尝我们的抹茶？点招牌草莓抹茶感受人气之选，或点经典抹茶拿铁品味纯正本味。之后再在下次到访时拓展到热带口味。',
        },
        {
          title: '配一个麻糬甜甜圈',
          description: '抹茶与麻糬是天作之合。加一个现做麻糬甜甜圈——我们还做抹茶味的——Q弹微甜的甜甜圈与醇厚的茶香完美平衡。这正是常客一次次回来的组合。',
        },
        {
          title: '用焙茶实现无咖啡因',
          description: '想享受美味又不摄入咖啡因？把你喜欢的口味换成焙茶底。它焙香、坚果味，咖啡因天然极低，所以一天中任何时候——甚至晚上——都能来杯热的或冰的。',
        },
      ],
    },
    faq: {
      title: '关于威基基抹茶的常见问题',
      items: [
        {
          question: 'Kona Coffee Donut? 最好喝的抹茶饮品是哪款？',
          answer: '我们最人气的抹茶是草莓抹茶（$10.95）——现打抹茶与牛奶之上，铺一层奶香酸甜的草莓。它是大众最爱，也是我们建议你最先点的一杯。如果想要纯粹的抹茶味，经典抹茶拿铁（$8.95）是最好的起点。',
        },
        {
          question: '威基基有草莓抹茶吗？',
          answer: '有。草莓抹茶（$10.95）是我们最畅销的抹茶饮品，用真正现打的日本抹茶、牛奶和一层香甜草莓制成。你可以在卡拉卡瓦大道的 Kona Coffee Donut? 找到它，距威基基海滩约5分钟步行——冷热皆有。',
        },
        {
          question: '可以点冰抹茶吗？',
          answer: '当然可以。菜单上每款抹茶（和焙茶）饮品都能做成冰饮——包括草莓抹茶、经典抹茶拿铁和所有热带口味。在温暖的威基基，大多数客人都点冰的。',
        },
        {
          question: '有无咖啡因的选择吗？',
          answer: '有。把任意口味换成焙茶（烘焙绿茶）底代替抹茶即可。焙茶咖啡因天然极低，带焙香、坚果、焦糖般的味道——是夜晚或想避开咖啡因者的完美之选。',
        },
        {
          question: '威基基的抹茶多少钱？',
          answer: '大多数抹茶拿铁是 $8.95（经典、芒果、椰子、番石榴、香蕉和百香果抹茶）。草莓抹茶和红豆拿铁是 $10.95。全部用真正现打的抹茶制作，可在 2142 Kalakaua Ave 点热饮或冰饮。',
        },
      ],
    },
    cta: {
      title: '来品尝威基基最好的抹茶',
      text: '前往 2142 Kalakaua Ave 的 Kona Coffee Donut?，尝尝我们招牌的草莓抹茶和整个系列——现打现做，冷热皆有，距海滩仅几分钟。',
      menuButton: '查看抹茶菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '威基基最好喝的抹茶饮品',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Best Matcha Drinks in Waikiki (2026): Every Flavor Ranked',
  description: 'A buyer\'s guide to the best matcha drinks in Waikiki — our flavors ranked, led by the bestselling Strawberry Matcha, plus classic, tropical, hojicha, iced options and prices.',
  image: 'https://www.konacoffeedonut.com/images/blog/best-matcha-drinks-waikiki.jpeg',
  author: {
    '@type': 'Organization',
    name: 'Kona Coffee Donut?',
    url: 'https://www.konacoffeedonut.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Kona Coffee Donut?',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.konacoffeedonut.com/logo.png',
    },
  },
  datePublished: '2026-06-30',
  dateModified: '2026-06-30',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/en/blog/best-matcha-drinks-waikiki',
  },
  keywords: 'best matcha waikiki, matcha waikiki, matcha flavors, strawberry matcha waikiki, iced matcha latte waikiki, best matcha drinks waikiki',
  wordCount: 1500,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best matcha drink at Kona Coffee Donut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our most popular matcha is the Strawberry Matcha ($10.95) — a creamy, sweet-tart layer of strawberry over freshly whisked matcha and milk. It\'s the crowd favorite and the one we recommend ordering first. If you want the pure taste of matcha, the Classic Matcha Latte ($8.95) is the best place to start.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have strawberry matcha in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Strawberry Matcha ($10.95) is our bestselling matcha drink, made with real whisked Japanese matcha, milk, and a sweet layer of strawberry. You\'ll find it at Kona Coffee Donut? on Kalākaua Ave, about a 5-minute walk from Waikiki Beach — hot or iced.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get iced matcha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Every matcha (and hojicha) drink on our menu can be made iced — including the Strawberry Matcha, Classic Matcha Latte, and all the tropical flavors. Iced is how most guests order on a warm Waikiki day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a caffeine-free option?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ask for any flavor on a hojicha (roasted green tea) base instead of matcha. Hojicha is naturally very low in caffeine, with a toasty, nutty, caramel-like flavor — perfect for the evening or anyone avoiding a caffeine kick.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much is matcha in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most of our matcha lattes are $8.95 (Classic, Mango, Coconut, Guava, Banana, and Lilikoi Matcha). The Strawberry Matcha and Azuki Red Bean Latte are $10.95. All are made with real whisked matcha and can be ordered hot or iced at 2142 Kalakaua Ave.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.konacoffeedonut.com/en',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://www.konacoffeedonut.com/en/blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Best Matcha Drinks in Waikiki',
      item: 'https://www.konacoffeedonut.com/en/blog/best-matcha-drinks-waikiki',
    },
  ],
};

// ────────────────────────────────────────────
// Component
// ────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function BestMatchaDrinksWaikikiPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = content[locale as keyof typeof content] || content.en;

  return (
    <>
      <script
        id="blogposting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-white">
      <SubpageNav locale={locale} />

      {/* Hero Image */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/images/blog/best-matcha-drinks-waikiki.jpeg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
        {/* Breadcrumbs */}
        <nav className="max-w-4xl mx-auto px-4 pt-6 pb-2" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href={`/${locale}`} className="hover:text-sky-600 transition-colors">{t.breadcrumbs.home}</Link></li>
            <li>/</li>
            <li><Link href={`/${locale}/blog`} className="hover:text-sky-600 transition-colors">{t.breadcrumbs.blog}</Link></li>
            <li>/</li>
            <li className="text-sky-700 font-medium">{t.breadcrumbs.current}</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-indigo-50 to-purple-100" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-72 h-72 bg-sky-300 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6 text-sm text-sky-700">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {t.hero.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  {t.hero.updated}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-sky-800/80 max-w-3xl mx-auto">
                {t.hero.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Definition — Featured Snippet Optimized */}
        <section className="py-12 px-4">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-sky-50 to-indigo-50 border-l-4 border-sky-500 rounded-r-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Snowflake className="w-6 h-6 text-sky-500" />
                {t.definition.title}
              </h2>
              <p
                className="text-lg text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.definition.text }}
              />
            </div>
          </motion.div>
        </section>

        {/* What Makes a Great Matcha */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-indigo-500" />
                {t.history.title}
              </h2>
              <p className="text-lg text-indigo-600 mb-8">{t.history.subtitle}</p>
            </motion.div>
            <div className="space-y-6">
              {[t.history.p1, t.history.p2, t.history.p3, t.history.p4].map((p, i) => (
                <motion.p
                  key={i}
                  className="text-gray-700 leading-relaxed text-lg"
                  dangerouslySetInnerHTML={{ __html: p }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Ranked Flavor Cards */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
                <IceCreamCone className="w-8 h-8 text-sky-500" />
                {t.types.title}
              </h2>
              <p className="text-lg text-sky-600">{t.types.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.types.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-br from-white to-sky-50 p-6 rounded-2xl shadow-md border border-sky-100 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-indigo-500 font-medium mb-3">{item.korean}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Which Flavor for You — Comparison Table */}
        <section className="py-16 px-4 bg-gradient-to-b from-sky-50/50 to-purple-50/50">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
                <Globe className="w-8 h-8 text-purple-500" />
                {t.comparison.title}
              </h2>
              <p className="text-lg text-purple-600">{t.comparison.subtitle}</p>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto">{t.comparison.intro}</p>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="overflow-x-auto rounded-2xl shadow-lg"
            >
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-gradient-to-r from-sky-600 to-indigo-600 text-gray-900">
                    <th className="p-4 text-left font-semibold">{t.comparison.headers.feature}</th>
                    <th className="p-4 text-left font-semibold">{t.comparison.headers.bingsu}</th>
                    <th className="p-4 text-left font-semibold">{t.comparison.headers.shavedIce}</th>
                    <th className="p-4 text-left font-semibold">{t.comparison.headers.kakigori}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.comparison.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-sky-50/50' : 'bg-white'}>
                      <td className="p-4 font-semibold text-gray-900 border-b border-gray-100">{row.feature}</td>
                      <td className="p-4 text-sky-800 border-b border-gray-100 font-medium">{row.bingsu}</td>
                      <td className="p-4 text-gray-600 border-b border-gray-100">{row.shavedIce}</td>
                      <td className="p-4 text-gray-600 border-b border-gray-100">{row.kakigori}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.p
              {...fadeUp}
              className="mt-6 text-gray-600 text-center italic"
            >
              {t.comparison.note}
            </motion.p>
          </div>
        </section>

        {/* Matcha vs Hojicha Base */}
        <section className="py-16 px-4 bg-gradient-to-b from-indigo-50/50 to-sky-50/50">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {t.whyHawaii.title}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {t.whyHawaii.points.map((point, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h3 className="text-lg font-bold text-indigo-800 mb-3">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Where to Get Matcha in Waikiki */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-sky-500" />
                {t.whereToGet.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">{t.whereToGet.intro}</p>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="bg-gradient-to-br from-sky-600 to-indigo-700 rounded-3xl p-8 md:p-10 text-gray-900"
            >
              <h3 className="text-2xl font-bold mb-2">{t.whereToGet.shop.name}</h3>
              <p className="text-sky-200 mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {t.whereToGet.shop.address}
              </p>
              <p className="text-sky-100 leading-relaxed mb-6">{t.whereToGet.shop.description}</p>
              <ul className="space-y-2 mb-8">
                {t.whereToGet.shop.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sky-100">
                    <Snowflake className="w-4 h-4 mt-1 text-sky-300 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/menu/kona-coffee`}
                className="inline-block bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-sky-100 transition-colors"
              >
                {t.whereToGet.cta}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Tips for the Best Matcha */}
        <section className="py-16 px-4 bg-gradient-to-b from-purple-50/30 to-sky-50/30">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
                <Utensils className="w-8 h-8 text-purple-500" />
                {t.howToEat.title}
              </h2>
              <p className="text-lg text-purple-600">{t.howToEat.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {t.howToEat.tips.map((tip, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4 bg-white p-6 rounded-2xl shadow-md"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {t.faq.title}
              </h2>
            </motion.div>

            <div className="space-y-4">
              {t.faq.items.map((item, i) => (
                <motion.details
                  key={i}
                  className="group bg-gradient-to-r from-sky-50 to-indigo-50 rounded-2xl overflow-hidden border border-sky-100"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <summary className="p-6 cursor-pointer font-semibold text-gray-900 hover:text-sky-700 transition-colors list-none flex items-center justify-between">
                    {item.question}
                    <span className="text-sky-500 ml-2 group-open:rotate-180 transition-transform">
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
            <Link
              href={`/${locale}/blog/strawberry-matcha-latte-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 font-semibold transition-colors"
            >
              → Strawberry Matcha Latte in Waikiki
            </Link>
            <Link
              href={`/${locale}/blog/matcha-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              What Is Matcha?
            </Link>
            <Link
              href={`/${locale}/menu/kona-coffee`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Matcha Menu
            </Link>
            <Link
              href={`/${locale}/blog`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              {t.breadcrumbs.blog}
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 text-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Users className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-xl mb-8 opacity-90">{t.cta.text}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/${locale}/menu/kona-coffee`}
                  className="inline-block bg-white text-sky-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-sky-100 transition-colors"
                >
                  {t.cta.menuButton}
                </Link>
                <a
                  href="https://maps.google.com/?q=2142+Kalakaua+Ave+Honolulu+HI+96815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-transparent border-2 border-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-colors"
                >
                  {t.cta.directionsButton}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
