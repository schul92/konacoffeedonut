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
      title: 'Iced Matcha Latte in Waikiki',
      subtitle: 'The Perfect Beach-Day Drink — Real Stone-Ground Matcha Near Waikiki Beach (2026)',
      updated: 'Updated June 2026',
      readTime: '6 min read',
    },
    definition: {
      title: 'What Makes a Great Iced Matcha Latte?',
      text: 'A great <strong>iced matcha latte</strong> starts with <strong>real stone-ground matcha</strong> — finely milled green tea whisked into a smooth, vivid green — not a sugary "matcha-flavored" syrup. Poured over ice and cold milk, it should have that beautiful <strong>green-over-milk layered look</strong> and taste clean, grassy, and <strong>not too sweet</strong>, so the real tea flavor comes through. That balance is exactly what makes <strong>iced matcha</strong> so refreshing on a hot Waikiki day: cold, smooth, and genuinely good for you. And in Waikiki, you can grab one steps from the beach — best of all next to a warm mochi donut.',
    },
    history: {
      title: 'How We Make Our Iced Matcha — Real Matcha, Not Syrup',
      subtitle: 'Stone-Ground Green Tea, Whisked Fresh and Poured Over Ice',
      p1: 'The single biggest thing that separates a great iced matcha latte from a disappointing one is the matcha itself. We use <strong>real stone-ground matcha</strong> — whole green tea leaves milled into an ultra-fine powder — not a pre-sweetened green syrup or a candy-flavored mix. That\'s why our iced matcha tastes like actual tea: fresh, grassy, and smooth, with a naturally vivid green color you can see through the glass.',
      p2: 'To build the drink, the matcha is <strong>whisked until smooth</strong> so there are no clumps, then poured over ice and cold milk. The result is the classic <strong>green-over-milk layered look</strong> — bright green settling over pale milk — that makes an iced matcha latte as photogenic as it is refreshing. Give it a quick stir and every sip is cold, creamy, and balanced.',
      p3: 'We also keep it <strong>not too sweet</strong> on purpose. Syrup-based "matcha" drinks often bury the tea under sugar; ours lets the real matcha lead, with just enough sweetness to round it out. Prefer it sweeter or lighter? Just ask — we can <strong>adjust the sweetness</strong> and swap in the milk you like, so your iced matcha tastes exactly the way you want.',
      p4: 'Iced is how most people order matcha in Waikiki, but it\'s just as good <strong>hot</strong> if you prefer a warm cup. And if you love a toastier, lower-caffeine flavor, we also make <strong>iced hojicha</strong> — roasted green tea with a smooth, nutty character. Whichever you choose, it\'s real tea, made fresh, ready to sip on the way to the sand.',
    },
    comparison: {
      title: 'Real Matcha vs. Syrup: How to Spot the Real Thing',
      subtitle: 'Not Every Green Drink Is Real Matcha',
      intro: 'Plenty of "matcha" drinks are really just green syrup and sugar. Here\'s a simple guide to telling a real stone-ground iced matcha latte from a sweetened imitation — and what to skip:',
      headers: {
        feature: 'What to look for',
        bingsu: 'Best (real matcha)',
        shavedIce: 'OK (powder mix)',
        kakigori: 'Skip',
      },
      rows: [
        {
          feature: 'Base',
          bingsu: 'Real stone-ground matcha, whisked',
          shavedIce: 'Pre-sweetened matcha powder blend',
          kakigori: 'Green "matcha-flavored" syrup',
        },
        {
          feature: 'Color',
          bingsu: 'Vivid, natural green',
          shavedIce: 'Pale or dull green',
          kakigori: 'Neon or artificial green',
        },
        {
          feature: 'Taste',
          bingsu: 'Clean, grassy, balanced',
          shavedIce: 'Sweet, faint tea flavor',
          kakigori: 'Sugary, candy-like',
        },
        {
          feature: 'Sweetness',
          bingsu: 'Not too sweet, adjustable',
          shavedIce: 'Fixed, fairly sweet',
          kakigori: 'Very sweet, no control',
        },
        {
          feature: 'The look',
          bingsu: 'Green-over-milk layers',
          shavedIce: 'Flat, mixed color',
          kakigori: 'Uniform bright green',
        },
        {
          feature: 'Verdict',
          bingsu: 'Order it',
          shavedIce: 'Fine in a pinch',
          kakigori: 'Not worth it',
        },
      ],
      note: 'The rule that matters most: real matcha is a fine green powder whisked into the drink, not a syrup pumped from a bottle. If it looks neon and tastes like candy, it isn\'t real matcha. Ours is genuine stone-ground matcha — grassy, smooth, and not too sweet.',
    },
    types: {
      title: 'Our Iced Matcha Flavors',
      subtitle: 'From Classic to Fruity — Strawberry Matcha Is the Star',
      items: [
        {
          name: 'Strawberry Matcha',
          korean: 'Our most popular by far',
          description: 'The crowd favorite. Sweet strawberry layered under vivid green matcha over cold milk — as pretty as it is delicious, and easily our most-ordered iced matcha. If you try one thing, make it this. Iced Strawberry Matcha is $10.95.',
          icon: '🍓',
        },
        {
          name: 'Mango Matcha',
          korean: 'Tropical & bright',
          description: 'Juicy mango sweetness against grassy matcha — a sunny, tropical twist that tastes like a Waikiki afternoon. Refreshing over ice on a hot day.',
          icon: '🥭',
        },
        {
          name: 'Coconut Matcha',
          korean: 'Creamy & island-y',
          description: 'Smooth coconut rounds out the matcha for a mellow, beachy flavor. Creamy, cooling, and easy to sip while you\'re out in the sun.',
          icon: '🥥',
        },
        {
          name: 'Guava Matcha',
          korean: 'Sweet Hawaiian classic',
          description: 'Guava is a Hawaii favorite for a reason — its sweet-tart flavor plays beautifully with earthy matcha for a local-tasting iced treat.',
          icon: '🌺',
        },
        {
          name: 'Banana Matcha',
          korean: 'Smooth & mellow',
          description: 'Soft banana sweetness makes this one gentle and creamy, a comforting take on iced matcha that\'s great if you like things less tart.',
          icon: '🍌',
        },
        {
          name: 'Iced Hojicha',
          korean: 'Roasted & nutty',
          description: 'Not matcha, but a favorite alternative: iced hojicha is roasted green tea with a toasty, nutty flavor and less caffeine. Smooth and easy over ice.',
          icon: '🍵',
        },
      ],
    },
    whyHawaii: {
      title: 'Why Iced Matcha Is Perfect for a Waikiki Beach Day',
      points: [
        {
          title: 'Made for the Heat',
          description: 'Waikiki afternoons get hot, and nothing resets you like a cold iced matcha. Poured over plenty of ice, it stays cool and refreshing from the first sip to the last — the ideal drink to carry down to the sand.',
        },
        {
          title: 'Refreshing Without the Crash',
          description: 'Matcha gives a smooth, steady lift rather than a sharp coffee jolt, so an iced matcha keeps you going through a long beach day without the crash. Cool, clean, and easy to drink in the sun.',
        },
        {
          title: 'The Beach-Day Photo',
          description: 'That green-over-milk layered look is made for the ocean backdrop. An iced strawberry matcha in hand with Waikiki Beach behind you is one of the easiest, prettiest photos you\'ll take all trip.',
        },
        {
          title: 'Grab It on the Way',
          description: 'You\'re only about a 5-minute walk from Waikiki Beach, so it\'s easy to swing by, grab an iced matcha, and keep walking to the water. Cold drink, warm donut, ocean ahead — that\'s a perfect Waikiki morning.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Get an Iced Matcha Latte in Waikiki',
      intro: 'For a real stone-ground iced matcha latte near Waikiki Beach, Kona Coffee Donut? is an easy stop on the way to the sand.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Right on Kalākaua Avenue in the heart of Waikiki, Kona Coffee Donut? makes iced matcha lattes with real stone-ground matcha — whisked fresh, poured over ice, and never too sweet. Our Matcha Latte is $8.95 (iced available), and our most popular flavor, Strawberry Matcha, is $10.95. Choose oat, almond, or soy milk, add fruit flavors like mango, coconut, guava, or banana, or go for iced hojicha instead. We\'re about a 5-minute walk from Waikiki Beach and open daily — grab one on the way to the beach with a warm mochi donut. Call us at (808) 260-1835.',
        highlights: [
          'Real stone-ground iced matcha latte — $8.95 (iced available)',
          'Strawberry Matcha (our most popular) — $10.95',
          'Oat, almond & soy milk add-ons; iced hojicha too',
          'About 5 minutes from Waikiki Beach • Open daily 7AM–9PM',
        ],
      },
      cta: 'View Our Matcha & Coffee Menu',
    },
    howToEat: {
      title: 'Tips for the Best Iced Matcha',
      subtitle: 'Get Your Iced Matcha Latte Just Right',
      tips: [
        {
          title: 'Customize the Sweetness',
          description: 'Ours is made not too sweet so the real matcha shines, but it\'s completely up to you. Ask for less sweet if you want the tea to lead, or a little sweeter if you like it dessert-style — we\'ll dial it in to taste.',
        },
        {
          title: 'Pick Your Milk',
          description: 'Whole milk keeps it classic and creamy, but oat, almond, and soy are available as add-ons and each changes the vibe. Oat is smooth and naturally sweet, almond is light and nutty, soy is rich — great for a dairy-free iced matcha.',
        },
        {
          title: 'Try Strawberry First',
          description: 'If you\'re not sure where to start, order the Strawberry Matcha — it\'s our most popular for a reason. The sweet-tart strawberry and grassy matcha layered over milk is the perfect intro to iced matcha (and the best photo).',
        },
        {
          title: 'Pair It With a Mochi Donut',
          description: 'A cold iced matcha and a warm, chewy mochi donut is a match made for a beach day. The clean, grassy tea balances the sweet donut perfectly — order both and make your Waikiki break a little ritual.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About Iced Matcha in Waikiki',
      items: [
        {
          question: 'Where can I get an iced matcha latte in Waikiki?',
          answer: 'Kona Coffee Donut? at 2142 Kalakaua Ave makes real iced matcha lattes right in the heart of Waikiki, about a 5-minute walk from Waikiki Beach. We\'re open daily 7AM–9PM. Our Matcha Latte is $8.95 (iced available) and our most popular flavor, Strawberry Matcha, is $10.95 — an easy stop on the way to the sand.',
        },
        {
          question: 'Is your matcha real, stone-ground matcha?',
          answer: 'Yes. We use real stone-ground matcha — finely milled green tea whisked fresh — not a pre-made green syrup or candy-flavored mix. That\'s why our iced matcha has a vivid natural green color, a clean grassy taste, and isn\'t overly sweet. You can taste the difference between real matcha and syrup.',
        },
        {
          question: 'Do you have iced strawberry matcha?',
          answer: 'Yes — iced Strawberry Matcha is our most popular matcha drink. Sweet strawberry layered under real green matcha over cold milk, for $10.95. We also make mango, coconut, guava, and banana matcha, plus iced hojicha if you prefer roasted green tea.',
        },
        {
          question: 'Do you have dairy-free options for iced matcha?',
          answer: 'Absolutely. You can order any iced matcha latte with oat, almond, or soy milk as an add-on, so it\'s easy to make it dairy-free. Soy and oat are especially creamy, while almond keeps it light — just let us know when you order.',
        },
        {
          question: 'Iced or hot matcha — which is better?',
          answer: 'Both are great, and it comes down to preference and the weather. On a hot Waikiki beach day, iced matcha over plenty of ice is hard to beat — cold, refreshing, and photogenic. If you\'d rather have a warm cup, we make hot matcha too, and iced hojicha for a roasted, lower-caffeine option.',
        },
      ],
    },
    cta: {
      title: 'Grab an Iced Matcha on the Way to the Beach',
      text: 'Visit Kona Coffee Donut? at 2142 Kalakaua Ave for a real iced matcha latte — stone-ground, not too sweet, and just minutes from Waikiki Beach. Matcha Latte $8.95, Strawberry Matcha $10.95.',
      menuButton: 'View Matcha & Coffee Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'Iced Matcha Latte in Waikiki',
    },
  },
  ja: {
    hero: {
      title: 'ワイキキのアイス抹茶ラテ',
      subtitle: 'ビーチデーにぴったりの一杯 — ワイキキビーチ近くで本物の石臼挽き抹茶を（2026）',
      updated: '2026年6月更新',
      readTime: '6分で読める',
    },
    definition: {
      title: '美味しいアイス抹茶ラテとは？',
      text: '美味しい<strong>アイス抹茶ラテ</strong>は、<strong>本物の石臼挽き抹茶</strong>から始まります。緑茶を細かく挽いた粉を滑らかな鮮やかグリーンに点てたもので、砂糖たっぷりの「抹茶風味シロップ」とは別物です。氷と冷たいミルクに注げば、美しい<strong>グリーン・オン・ミルクの層</strong>ができ、クリーンで青々とした、<strong>甘すぎない</strong>味わいで本物のお茶の風味が引き立ちます。このバランスこそ、暑いワイキキの日に<strong>アイス抹茶</strong>が最高に爽やかな理由です。冷たく、滑らかで、体にも嬉しい一杯。ワイキキならビーチのすぐそばで手に入り、温かいモチドーナツと一緒なら最高です。',
    },
    history: {
      title: '私たちのアイス抹茶の作り方 — シロップではなく本物の抹茶',
      subtitle: '石臼挽きの緑茶を点てたてで氷に注ぐ',
      p1: '美味しいアイス抹茶ラテとがっかりする一杯を分ける最大の違いは、抹茶そのものです。私たちは<strong>本物の石臼挽き抹茶</strong>——緑茶の葉を極めて細かい粉に挽いたもの——を使い、甘味付きの緑シロップやキャンディ風味のミックスは使いません。だから私たちのアイス抹茶は本物のお茶の味がします。フレッシュで青々として滑らか、グラス越しに見える自然な鮮やかグリーンです。',
      p2: '作り方は、抹茶を<strong>ダマなく点てて</strong>から、氷と冷たいミルクに注ぎます。すると、鮮やかなグリーンが淡いミルクの上に沈む定番の<strong>グリーン・オン・ミルクの層</strong>ができあがり、爽やかさと同じくらいフォトジェニックな一杯に。さっとかき混ぜれば、ひと口ごとに冷たくクリーミーでバランスの取れた味わいです。',
      p3: 'そして意図的に<strong>甘すぎない</strong>ようにしています。シロップベースの「抹茶」ドリンクは砂糖でお茶を埋もれさせがちですが、私たちのは本物の抹茶を主役にし、まとめる程度の甘さだけを加えます。もっと甘く、または軽くしたいですか？ お声がけください——<strong>甘さを調整</strong>し、お好みのミルクに変えられます。あなた好みのアイス抹茶に。',
      p4: 'ワイキキではアイスで注文する人がほとんどですが、温かい一杯がお好みなら<strong>ホット</strong>も同じくらい美味しいです。香ばしくカフェイン控えめな味がお好きなら、<strong>アイスほうじ茶</strong>も——滑らかでナッツのような焙じ茶です。どれを選んでも本物のお茶を淹れたてで。ビーチへ向かう途中に片手にどうぞ。',
    },
    comparison: {
      title: '本物の抹茶 vs シロップ：見分け方',
      subtitle: '緑のドリンクがすべて本物の抹茶とは限らない',
      intro: '「抹茶」ドリンクの多くは、実は緑のシロップと砂糖です。本物の石臼挽きアイス抹茶ラテと甘い模造品を見分ける簡単なガイド、そして避けるべきものはこちら：',
      headers: {
        feature: 'チェックポイント',
        bingsu: '最高（本物の抹茶）',
        shavedIce: 'まあまあ（粉ミックス）',
        kakigori: '避けたい',
      },
      rows: [
        {
          feature: 'ベース',
          bingsu: '本物の石臼挽き抹茶を点てる',
          shavedIce: '甘味付き抹茶粉ブレンド',
          kakigori: '緑の「抹茶風味」シロップ',
        },
        {
          feature: '色',
          bingsu: '鮮やかで自然なグリーン',
          shavedIce: '淡いまたはくすんだ緑',
          kakigori: 'ネオンや人工的な緑',
        },
        {
          feature: '味わい',
          bingsu: 'クリーンで青々、バランス良い',
          shavedIce: '甘く、お茶の風味は薄い',
          kakigori: '砂糖っぽくキャンディのよう',
        },
        {
          feature: '甘さ',
          bingsu: '甘すぎず、調整可能',
          shavedIce: '固定でかなり甘い',
          kakigori: 'とても甘く調整不可',
        },
        {
          feature: '見た目',
          bingsu: 'グリーン・オン・ミルクの層',
          shavedIce: '平坦で混ざった色',
          kakigori: '均一な明るい緑',
        },
        {
          feature: '結論',
          bingsu: '注文する価値あり',
          shavedIce: '困った時には',
          kakigori: 'おすすめしない',
        },
      ],
      note: '最も大切なルール：本物の抹茶はボトルから注ぐシロップではなく、ドリンクに点てる細かい緑の粉です。ネオン色でキャンディのような味なら、本物の抹茶ではありません。私たちのは正真正銘の石臼挽き抹茶——青々として滑らか、甘すぎません。',
    },
    types: {
      title: '私たちのアイス抹茶フレーバー',
      subtitle: '定番からフルーティーまで — 主役はストロベリー抹茶',
      items: [
        {
          name: 'ストロベリー抹茶',
          korean: '断トツで一番人気',
          description: 'みんなのお気に入り。冷たいミルクの上に鮮やかグリーンの抹茶、その下に甘いストロベリー——見た目も味も抜群で、当店のアイス抹茶で最も注文されます。一つだけ試すならこれ。アイスストロベリー抹茶は$10.95。',
          icon: '🍓',
        },
        {
          name: 'マンゴー抹茶',
          korean: 'トロピカルで明るい',
          description: 'ジューシーなマンゴーの甘さと青々とした抹茶——ワイキキの午後のような、太陽を感じるトロピカルなひとひねり。暑い日に氷でさっぱり。',
          icon: '🥭',
        },
        {
          name: 'ココナッツ抹茶',
          korean: 'クリーミーで島らしい',
          description: '滑らかなココナッツが抹茶をまろやかにまとめ、穏やかでビーチらしい味わいに。クリーミーでひんやり、日差しの下でも飲みやすい一杯。',
          icon: '🥥',
        },
        {
          name: 'グァバ抹茶',
          korean: 'ハワイ定番の甘さ',
          description: 'グァバがハワイで愛されるのには理由があります。甘酸っぱい風味が土っぽい抹茶と見事に合い、地元らしいアイスの一杯に。',
          icon: '🌺',
        },
        {
          name: 'バナナ抹茶',
          korean: '滑らかで穏やか',
          description: '柔らかなバナナの甘さで、優しくクリーミーな一杯に。酸味控えめがお好きな方にぴったりの、ほっとするアイス抹茶です。',
          icon: '🍌',
        },
        {
          name: 'アイスほうじ茶',
          korean: '香ばしくナッツのよう',
          description: '抹茶ではありませんが人気の選択肢。アイスほうじ茶は焙じた緑茶で、香ばしくナッツのような風味、カフェインは控えめ。氷で滑らかに。',
          icon: '🍵',
        },
      ],
    },
    whyHawaii: {
      title: 'アイス抹茶がワイキキのビーチデーに最適な理由',
      points: [
        {
          title: '暑さのために生まれた一杯',
          description: 'ワイキキの午後は暑くなり、冷たいアイス抹茶ほどリセットしてくれるものはありません。たっぷりの氷に注げば、最初のひと口から最後まで冷たく爽やか——砂浜へ持って行くのに理想的なドリンクです。',
        },
        {
          title: 'クラッシュのない爽快感',
          description: '抹茶はコーヒーのような急な刺激ではなく、滑らかで穏やかな高揚感を与えます。だからアイス抹茶は長いビーチデーも急降下なしで支えてくれます。ひんやりクリーンで、日差しの下でも飲みやすい。',
        },
        {
          title: 'ビーチデーの一枚',
          description: 'あのグリーン・オン・ミルクの層は、海を背景にするためにあるようなもの。アイスストロベリー抹茶を手に、後ろにワイキキビーチ——旅で一番簡単で一番きれいな写真になります。',
        },
        {
          title: '途中で手に入る',
          description: 'ワイキキビーチから徒歩わずか約5分。さっと立ち寄ってアイス抹茶を手にし、そのまま海へ。冷たいドリンク、温かいドーナツ、目の前に海——完璧なワイキキの朝です。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキでアイス抹茶ラテを飲むなら',
      intro: 'ワイキキビーチ近くで本物の石臼挽きアイス抹茶ラテなら、Kona Coffee Donut? が砂浜へ向かう途中の立ち寄りにぴったりです。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心、カラカウア通り沿いの Kona Coffee Donut? では、本物の石臼挽き抹茶でアイス抹茶ラテを作ります——点てたてで氷に注ぎ、甘すぎません。抹茶ラテは$8.95（アイス可）、一番人気のストロベリー抹茶は$10.95。オーツ、アーモンド、ソイミルクを選べ、マンゴー、ココナッツ、グァバ、バナナなどのフルーツフレーバーを追加したり、アイスほうじ茶にしたりも。ワイキキビーチから徒歩約5分、毎日営業——ビーチへ向かう途中に温かいモチドーナツと一緒にどうぞ。お電話は (808) 260-1835。',
        highlights: [
          '本物の石臼挽きアイス抹茶ラテ — $8.95（アイス可）',
          'ストロベリー抹茶（一番人気）— $10.95',
          'オーツ・アーモンド・ソイミルク追加可、アイスほうじ茶も',
          'ワイキキビーチから約5分・毎日営業 午前7時〜午後9時',
        ],
      },
      cta: '抹茶＆コーヒーメニューを見る',
    },
    howToEat: {
      title: '最高のアイス抹茶のためのコツ',
      subtitle: 'アイス抹茶ラテをちょうど好みに',
      tips: [
        {
          title: '甘さをカスタマイズ',
          description: '本物の抹茶が引き立つよう甘すぎなく作っていますが、調整はあなた次第。お茶を主役にしたいなら甘さ控えめ、デザート風がお好きなら少し甘めに——お好みに合わせます。',
        },
        {
          title: 'ミルクを選ぶ',
          description: '普通のミルクは定番でクリーミーですが、オーツ、アーモンド、ソイも追加で選べ、それぞれ雰囲気が変わります。オーツは滑らかで自然な甘さ、アーモンドは軽くナッツ感、ソイは濃厚——乳製品なしのアイス抹茶に最適です。',
        },
        {
          title: 'まずストロベリーを',
          description: 'どれにするか迷ったら、ストロベリー抹茶を。一番人気には理由があります。甘酸っぱいストロベリーと青々とした抹茶をミルクの上に重ねた一杯は、アイス抹茶の入門に最適（そして写真も一番）。',
        },
        {
          title: 'モチドーナツと合わせる',
          description: '冷たいアイス抹茶と温かくもちもちのモチドーナツは、ビーチデーのための組み合わせ。クリーンで青々としたお茶が甘いドーナツを完璧に引き立てます。両方注文して、ワイキキの休憩を小さな儀式に。',
        },
      ],
    },
    faq: {
      title: 'ワイキキのアイス抹茶に関するよくある質問',
      items: [
        {
          question: 'ワイキキでアイス抹茶ラテを飲める場所は？',
          answer: '2142 Kalakaua Ave の Kona Coffee Donut? は、ワイキキの中心で本物のアイス抹茶ラテを作ります。ワイキキビーチから徒歩約5分、毎日午前7時〜午後9時営業。抹茶ラテは$8.95（アイス可）、一番人気のストロベリー抹茶は$10.95——砂浜へ向かう途中の立ち寄りにぴったりです。',
        },
        {
          question: '抹茶は本物の石臼挽きですか？',
          answer: 'はい。私たちは本物の石臼挽き抹茶——緑茶を細かく挽き点てたて——を使い、既製の緑シロップやキャンディ風味ミックスは使いません。だから私たちのアイス抹茶は自然な鮮やかグリーンで、クリーンで青々とした味わい、甘すぎません。本物の抹茶とシロップの違いを味わえます。',
        },
        {
          question: 'アイスのストロベリー抹茶はありますか？',
          answer: 'はい——アイスストロベリー抹茶は当店で一番人気の抹茶ドリンクです。冷たいミルクの上に本物の緑の抹茶、その下に甘いストロベリー、$10.95。マンゴー、ココナッツ、グァバ、バナナ抹茶もあり、焙じ茶がお好みならアイスほうじ茶も作ります。',
        },
        {
          question: 'アイス抹茶に乳製品なしの選択肢はありますか？',
          answer: 'もちろんです。どのアイス抹茶ラテもオーツ、アーモンド、ソイミルクを追加で選べるので、乳製品なしに簡単にできます。ソイとオーツは特にクリーミー、アーモンドは軽め——ご注文時にお申し付けください。',
        },
        {
          question: 'アイスとホット、どちらの抹茶がおすすめ？',
          answer: 'どちらも美味しく、お好みと天気次第です。暑いワイキキのビーチデーには、たっぷりの氷のアイス抹茶が格別——冷たく爽やかでフォトジェニック。温かい一杯がよければホット抹茶も作りますし、香ばしくカフェイン控えめならアイスほうじ茶もあります。',
        },
      ],
    },
    cta: {
      title: 'ビーチへ向かう途中にアイス抹茶を',
      text: '2142 Kalakaua Ave の Kona Coffee Donut? で、本物のアイス抹茶ラテを——石臼挽きで甘すぎず、ワイキキビーチからわずか数分。抹茶ラテ$8.95、ストロベリー抹茶$10.95。',
      menuButton: '抹茶＆コーヒーメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'ワイキキのアイス抹茶ラテ',
    },
  },
  ko: {
    hero: {
      title: '와이키키 아이스 말차 라테',
      subtitle: '완벽한 해변의 날 음료 — 와이키키 해변 근처에서 진짜 맷돌 간 말차를 (2026)',
      updated: '2026년 6월 업데이트',
      readTime: '6분 소요',
    },
    definition: {
      title: '맛있는 아이스 말차 라테란?',
      text: '맛있는 <strong>아이스 말차 라테</strong>는 <strong>진짜 맷돌로 간 말차</strong>에서 시작합니다. 녹차를 곱게 갈아 부드럽고 선명한 초록으로 저은 것으로, 설탕 가득한 "말차 맛 시럽"과는 전혀 다릅니다. 얼음과 차가운 우유 위에 부으면 아름다운 <strong>그린 오버 밀크 층</strong>이 생기고, 깔끔하고 풀향이 나며 <strong>너무 달지 않아</strong> 진짜 차 맛이 살아납니다. 바로 이 균형이 더운 와이키키의 날에 <strong>아이스 말차</strong>가 그토록 상쾌한 이유죠. 차갑고 부드럽고 몸에도 좋은 한 잔. 와이키키에서는 해변 바로 옆에서 살 수 있고, 따뜻한 모찌 도넛과 함께라면 더할 나위 없습니다.',
    },
    history: {
      title: '우리가 아이스 말차를 만드는 법 — 시럽이 아닌 진짜 말차',
      subtitle: '맷돌로 간 녹차를 갓 저어 얼음 위에 붓습니다',
      p1: '맛있는 아이스 말차 라테와 실망스러운 한 잔을 가르는 가장 큰 차이는 말차 그 자체입니다. 우리는 <strong>진짜 맷돌로 간 말차</strong>——녹찻잎을 아주 곱게 간 가루——를 쓰고, 미리 단맛을 넣은 초록 시럽이나 사탕 맛 믹스는 쓰지 않습니다. 그래서 우리 아이스 말차는 진짜 차 맛이 납니다. 신선하고 풀향이 나며 부드럽고, 잔 너머로 보이는 자연스러운 선명한 초록빛이죠.',
      p2: '만들 때는 말차를 <strong>덩어리 없이 곱게 저은</strong> 뒤 얼음과 차가운 우유 위에 붓습니다. 그러면 선명한 초록이 연한 우유 위에 가라앉는 클래식한 <strong>그린 오버 밀크 층</strong>이 생겨, 상쾌한 만큼이나 사진이 잘 나오는 한 잔이 됩니다. 살짝 저어주면 한 모금 한 모금이 차갑고 크리미하며 균형 잡혀 있습니다.',
      p3: '그리고 일부러 <strong>너무 달지 않게</strong> 만듭니다. 시럽 기반 "말차" 음료는 설탕에 차를 묻어버리기 일쑤지만, 우리는 진짜 말차를 주인공으로 두고 마무리할 정도의 단맛만 더합니다. 더 달게 혹은 더 가볍게? 말씀만 하세요——<strong>단맛을 조절</strong>하고 원하는 우유로 바꿔드립니다. 딱 취향대로의 아이스 말차로.',
      p4: '와이키키에서는 대부분 아이스로 주문하지만, 따뜻한 한 잔을 원하시면 <strong>핫</strong>도 똑같이 맛있습니다. 더 구수하고 카페인이 적은 맛을 좋아하신다면 <strong>아이스 호지차</strong>도 만듭니다——볶은 녹차로 부드럽고 고소하죠. 무엇을 고르든 진짜 차를 갓 만들어, 모래사장으로 가는 길에 손에 들기 좋습니다.',
    },
    comparison: {
      title: '진짜 말차 vs 시럽: 진짜를 알아보는 법',
      subtitle: '초록 음료가 다 진짜 말차는 아닙니다',
      intro: '많은 "말차" 음료가 실은 초록 시럽과 설탕입니다. 진짜 맷돌로 간 아이스 말차 라테와 달게 만든 모조품을 구별하는 간단한 가이드, 그리고 피해야 할 것은 이렇습니다:',
      headers: {
        feature: '확인할 점',
        bingsu: '최고 (진짜 말차)',
        shavedIce: '무난 (가루 믹스)',
        kakigori: '피하세요',
      },
      rows: [
        {
          feature: '베이스',
          bingsu: '진짜 맷돌 간 말차를 저음',
          shavedIce: '단맛 넣은 말차 가루 블렌드',
          kakigori: '초록 "말차 맛" 시럽',
        },
        {
          feature: '색',
          bingsu: '선명하고 자연스러운 초록',
          shavedIce: '연하거나 칙칙한 초록',
          kakigori: '네온빛 또는 인공적인 초록',
        },
        {
          feature: '맛',
          bingsu: '깔끔하고 풀향, 균형 잡힘',
          shavedIce: '달고 차 향은 희미함',
          kakigori: '설탕처럼 달고 사탕 같음',
        },
        {
          feature: '단맛',
          bingsu: '너무 달지 않고 조절 가능',
          shavedIce: '고정되고 꽤 달다',
          kakigori: '매우 달고 조절 불가',
        },
        {
          feature: '비주얼',
          bingsu: '그린 오버 밀크 층',
          shavedIce: '밋밋하고 섞인 색',
          kakigori: '균일한 밝은 초록',
        },
        {
          feature: '결론',
          bingsu: '주문할 만함',
          shavedIce: '아쉬운 대로 괜찮음',
          kakigori: '굳이 마실 필요 없음',
        },
      ],
      note: '가장 중요한 원칙: 진짜 말차는 병에서 짜내는 시럽이 아니라 음료에 저어 넣는 고운 초록 가루입니다. 네온빛에 사탕 맛이 난다면 진짜 말차가 아닙니다. 우리 것은 진짜 맷돌로 간 말차——풀향이 나고 부드러우며 너무 달지 않습니다.',
    },
    types: {
      title: '우리의 아이스 말차 플레이버',
      subtitle: '클래식부터 과일까지 — 주인공은 딸기 말차',
      items: [
        {
          name: '딸기 말차',
          korean: '단연 가장 인기',
          description: '모두의 최애. 차가운 우유 위에 선명한 초록 말차, 그 아래 달콤한 딸기——보기에도 맛에도 뛰어나 우리 아이스 말차 중 가장 많이 주문됩니다. 딱 하나만 맛본다면 이걸로. 아이스 딸기 말차는 $10.95.',
          icon: '🍓',
        },
        {
          name: '망고 말차',
          korean: '트로피컬하고 산뜻',
          description: '즙 많은 망고의 단맛과 풀향의 말차——와이키키 오후 같은, 햇살 가득한 트로피컬 변주. 더운 날 얼음과 함께 상쾌하게.',
          icon: '🥭',
        },
        {
          name: '코코넛 말차',
          korean: '크리미하고 섬 느낌',
          description: '부드러운 코코넛이 말차를 감싸 은은하고 해변 같은 맛으로. 크리미하고 시원해 햇볕 아래서 마시기 좋은 한 잔.',
          icon: '🥥',
        },
        {
          name: '구아바 말차',
          korean: '달콤한 하와이 클래식',
          description: '구아바가 하와이에서 사랑받는 데는 이유가 있죠. 새콤달콤한 풍미가 흙내음 나는 말차와 아름답게 어우러져 로컬 느낌의 아이스 한 잔이 됩니다.',
          icon: '🌺',
        },
        {
          name: '바나나 말차',
          korean: '부드럽고 은은',
          description: '부드러운 바나나의 단맛으로 순하고 크리미한 한 잔. 신맛이 덜한 걸 좋아하신다면 딱 좋은, 편안한 아이스 말차입니다.',
          icon: '🍌',
        },
        {
          name: '아이스 호지차',
          korean: '볶은 고소함',
          description: '말차는 아니지만 인기 대안. 아이스 호지차는 볶은 녹차로 구수하고 고소한 맛에 카페인이 적습니다. 얼음과 함께 부드럽게.',
          icon: '🍵',
        },
      ],
    },
    whyHawaii: {
      title: '아이스 말차가 와이키키 해변의 날에 완벽한 이유',
      points: [
        {
          title: '더위를 위해 태어난 한 잔',
          description: '와이키키 오후는 더워지고, 차가운 아이스 말차만큼 리셋해 주는 건 없습니다. 얼음을 가득 넣어 부으면 첫 모금부터 마지막까지 시원하고 상쾌하게——모래사장으로 들고 가기에 이상적인 음료죠.',
        },
        {
          title: '크래시 없는 상쾌함',
          description: '말차는 커피처럼 급격한 자극이 아니라 부드럽고 꾸준한 활력을 줍니다. 그래서 아이스 말차는 긴 해변의 날을 급격한 저하 없이 지켜줍니다. 시원하고 깔끔해 햇볕 아래서 마시기 좋습니다.',
        },
        {
          title: '해변의 날 인증샷',
          description: '그 그린 오버 밀크 층은 바다 배경을 위해 만들어진 듯합니다. 아이스 딸기 말차를 손에 들고 뒤로 와이키키 해변——이번 여행에서 가장 쉽고 예쁜 사진이 됩니다.',
        },
        {
          title: '가는 길에 픽업',
          description: '와이키키 해변에서 걸어서 약 5분. 잠깐 들러 아이스 말차를 손에 들고 그대로 바다로. 차가운 음료, 따뜻한 도넛, 앞엔 바다——완벽한 와이키키의 아침입니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 아이스 말차 라테 마시는 곳',
      intro: '와이키키 해변 근처에서 진짜 맷돌로 간 아이스 말차 라테라면, Kona Coffee Donut? 가 모래사장 가는 길에 들르기 좋습니다.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키 중심 칼라카우아 애비뉴에 자리한 Kona Coffee Donut? 는 진짜 맷돌로 간 말차로 아이스 말차 라테를 만듭니다——갓 저어 얼음 위에 붓고, 결코 너무 달지 않게. 말차 라테는 $8.95(아이스 가능), 가장 인기인 딸기 말차는 $10.95. 귀리, 아몬드, 두유 중에서 고르고, 망고·코코넛·구아바·바나나 같은 과일 플레이버를 더하거나 아이스 호지차로 바꿔도 됩니다. 와이키키 해변에서 도보 약 5분, 매일 영업——해변 가는 길에 따뜻한 모찌 도넛과 함께 하나 들르세요. 전화는 (808) 260-1835.',
        highlights: [
          '진짜 맷돌 간 아이스 말차 라테 — $8.95(아이스 가능)',
          '딸기 말차(가장 인기) — $10.95',
          '귀리·아몬드·두유 추가 가능, 아이스 호지차도',
          '와이키키 해변에서 약 5분 • 매일 영업 오전 7시~오후 9시',
        ],
      },
      cta: '말차 & 커피 메뉴 보기',
    },
    howToEat: {
      title: '최고의 아이스 말차를 위한 팁',
      subtitle: '아이스 말차 라테를 딱 취향대로',
      tips: [
        {
          title: '단맛을 커스텀하기',
          description: '진짜 말차가 살도록 너무 달지 않게 만들지만, 선택은 온전히 당신 몫입니다. 차를 앞세우고 싶으면 덜 달게, 디저트처럼 즐기고 싶으면 조금 더 달게——입맛에 맞춰 조절해 드립니다.',
        },
        {
          title: '우유 고르기',
          description: '일반 우유는 클래식하고 크리미하지만, 귀리·아몬드·두유도 추가로 고를 수 있고 각각 분위기가 달라집니다. 귀리는 부드럽고 자연스럽게 달며, 아몬드는 가볍고 고소하고, 두유는 진해서——유제품 없는 아이스 말차에 좋습니다.',
        },
        {
          title: '딸기부터 시작하기',
          description: '어디서 시작할지 모르겠다면 딸기 말차를 주문하세요——가장 인기인 데는 이유가 있습니다. 새콤달콤한 딸기와 풀향의 말차를 우유 위에 층층이 쌓은 이 한 잔이 아이스 말차 입문에 딱(그리고 사진도 최고)입니다.',
        },
        {
          title: '모찌 도넛과 곁들이기',
          description: '차가운 아이스 말차와 따뜻하고 쫀득한 모찌 도넛은 해변의 날을 위한 조합입니다. 깔끔한 풀향의 차가 달콤한 도넛을 완벽하게 살려주죠——둘 다 주문해 와이키키의 쉼표를 작은 의식으로 만드세요.',
        },
      ],
    },
    faq: {
      title: '와이키키 아이스 말차에 대해 자주 묻는 질문',
      items: [
        {
          question: '와이키키에서 아이스 말차 라테를 어디서 마실 수 있나요?',
          answer: '2142 Kalakaua Ave의 Kona Coffee Donut? 는 와이키키 중심에서 진짜 아이스 말차 라테를 만듭니다. 와이키키 해변에서 도보 약 5분, 매일 오전 7시~오후 9시 영업. 말차 라테는 $8.95(아이스 가능), 가장 인기인 딸기 말차는 $10.95——모래사장 가는 길에 들르기 좋습니다.',
        },
        {
          question: '말차가 진짜 맷돌로 간 말차인가요?',
          answer: '네. 우리는 진짜 맷돌로 간 말차——녹차를 곱게 갈아 갓 저은 것——를 쓰고, 기성 초록 시럽이나 사탕 맛 믹스는 쓰지 않습니다. 그래서 우리 아이스 말차는 자연스러운 선명한 초록빛에, 깔끔한 풀향이 나며 지나치게 달지 않습니다. 진짜 말차와 시럽의 차이를 맛으로 느낄 수 있습니다.',
        },
        {
          question: '아이스 딸기 말차가 있나요?',
          answer: '네——아이스 딸기 말차는 우리 매장에서 가장 인기인 말차 음료입니다. 차가운 우유 위에 진짜 초록 말차, 그 아래 달콤한 딸기, $10.95. 망고·코코넛·구아바·바나나 말차도 있고, 볶은 녹차를 좋아하시면 아이스 호지차도 만듭니다.',
        },
        {
          question: '아이스 말차에 유제품 없는 옵션이 있나요?',
          answer: '물론입니다. 어떤 아이스 말차 라테든 귀리·아몬드·두유를 추가로 주문할 수 있어 유제품 없이 만들기 쉽습니다. 두유와 귀리는 특히 크리미하고, 아몬드는 가볍게——주문 시 말씀만 해주세요.',
        },
        {
          question: '아이스와 핫 말차 중 뭐가 더 좋나요?',
          answer: '둘 다 훌륭하고, 취향과 날씨에 달렸습니다. 더운 와이키키 해변의 날엔 얼음 가득한 아이스 말차가 최고——시원하고 상쾌하며 사진도 잘 나옵니다. 따뜻한 한 잔을 원하시면 핫 말차도 만들고, 구수하고 카페인이 적은 걸 원하시면 아이스 호지차도 있습니다.',
        },
      ],
    },
    cta: {
      title: '해변 가는 길에 아이스 말차 한 잔',
      text: '2142 Kalakaua Ave의 Kona Coffee Donut? 에서 진짜 아이스 말차 라테를——맷돌로 갈아 너무 달지 않고, 와이키키 해변에서 단 몇 분. 말차 라테 $8.95, 딸기 말차 $10.95.',
      menuButton: '말차 & 커피 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '와이키키 아이스 말차 라테',
    },
  },
  zh: {
    hero: {
      title: '威基基冰抹茶拿铁',
      subtitle: '完美的海滩日饮品 — 在威基基海滩附近喝到真正石磨抹茶（2026）',
      updated: '2026年6月更新',
      readTime: '阅读约6分钟',
    },
    definition: {
      title: '什么才是一杯出色的冰抹茶拿铁？',
      text: '一杯出色的<strong>冰抹茶拿铁</strong>，始于<strong>真正的石磨抹茶</strong>——把绿茶研磨成极细的粉末，打成顺滑鲜绿的茶汤——而不是含糖的"抹茶风味糖浆"。倒在冰块和冷牛奶上，应呈现出美丽的<strong>绿在奶上的分层</strong>，口感干净、带草本清香、<strong>不会太甜</strong>，让真正的茶味凸显出来。正是这种平衡，让<strong>冰抹茶</strong>在炎热的威基基如此清爽：冰凉、顺滑，还对身体好。而在威基基，你离海滩几步就能买到——若再配一个温热的麻糬甜甜圈，更是完美。',
    },
    history: {
      title: '我们如何制作冰抹茶 — 真抹茶，而非糖浆',
      subtitle: '石磨绿茶，现打现倒于冰上',
      p1: '区分一杯出色的冰抹茶拿铁与一杯令人失望的，最大差别在于抹茶本身。我们使用<strong>真正的石磨抹茶</strong>——将整片绿茶叶研磨成超细粉末——而不是预先加糖的绿糖浆或糖果味调配粉。所以我们的冰抹茶尝起来是真正的茶：新鲜、带草本清香、顺滑，隔着杯子就能看到自然鲜亮的绿色。',
      p2: '制作时，先把抹茶<strong>打至顺滑无结块</strong>，再倒在冰块和冷牛奶上。于是便有了经典的<strong>绿在奶上的分层</strong>——鲜绿沉在淡奶之上——让一杯冰抹茶拿铁既清爽又上镜。轻轻一搅，每一口都冰凉、绵密、均衡。',
      p3: '我们也刻意做得<strong>不太甜</strong>。糖浆基底的"抹茶"饮品常把茶埋在糖里；我们让真抹茶当主角，只加恰到好处的甜味来收尾。想更甜或更清淡？尽管开口——我们可以<strong>调整甜度</strong>并换成你喜欢的奶，让你的冰抹茶正合口味。',
      p4: '在威基基大多数人点冰的，但若你偏爱温热，做成<strong>热</strong>的同样好喝。而如果你喜欢更焙香、咖啡因更少的风味，我们也做<strong>冰焙茶（hojicha）</strong>——烘焙绿茶，顺滑而带坚果香。无论你选哪种，都是真茶现做，正好在去沙滩的路上带上一杯。',
    },
    comparison: {
      title: '真抹茶 vs 糖浆：如何认出真货',
      subtitle: '并非每杯绿色饮品都是真抹茶',
      intro: '许多"抹茶"饮品其实只是绿糖浆加糖。下面是一个简单指南，教你分辨真正石磨的冰抹茶拿铁与加糖仿制品，以及该避开的：',
      headers: {
        feature: '查看要点',
        bingsu: '最佳（真抹茶）',
        shavedIce: '尚可（调配粉）',
        kakigori: '避开',
      },
      rows: [
        {
          feature: '基底',
          bingsu: '真正石磨抹茶，现打',
          shavedIce: '预加糖抹茶粉调配',
          kakigori: '绿色"抹茶风味"糖浆',
        },
        {
          feature: '颜色',
          bingsu: '鲜亮自然的绿',
          shavedIce: '偏淡或暗沉的绿',
          kakigori: '霓虹或人工的绿',
        },
        {
          feature: '口感',
          bingsu: '干净、草本清香、均衡',
          shavedIce: '偏甜、茶味淡',
          kakigori: '甜腻、像糖果',
        },
        {
          feature: '甜度',
          bingsu: '不太甜、可调整',
          shavedIce: '固定、相当甜',
          kakigori: '很甜、无法调整',
        },
        {
          feature: '外观',
          bingsu: '绿在奶上的分层',
          shavedIce: '平淡、颜色混合',
          kakigori: '均匀的鲜绿',
        },
        {
          feature: '结论',
          bingsu: '值得点',
          shavedIce: '应急时还行',
          kakigori: '不值得',
        },
      ],
      note: '最重要的一条原则：真抹茶是打进饮品里的细绿粉末，而不是从瓶子里泵出的糖浆。如果颜色霓虹、味道像糖果，那就不是真抹茶。我们的是货真价实的石磨抹茶——带草本清香、顺滑、不太甜。',
    },
    types: {
      title: '我们的冰抹茶口味',
      subtitle: '从经典到果味 — 主角是草莓抹茶',
      items: [
        {
          name: '草莓抹茶',
          korean: '遥遥领先的人气王',
          description: '大家的最爱。冷牛奶上是鲜绿抹茶，底下是香甜草莓——好看又好喝，是我们卖得最多的冰抹茶。只试一款的话，就选它。冰草莓抹茶$10.95。',
          icon: '🍓',
        },
        {
          name: '芒果抹茶',
          korean: '热带又明亮',
          description: '多汁芒果的甜与草本抹茶相映——阳光般的热带小变奏，尝起来就像威基基的午后。炎热天里加冰格外清爽。',
          icon: '🥭',
        },
        {
          name: '椰子抹茶',
          korean: '绵密又有海岛味',
          description: '顺滑椰香把抹茶衬得柔和，带来慵懒的海滩风味。绵密、清凉，在阳光下也好入口的一杯。',
          icon: '🥥',
        },
        {
          name: '番石榴抹茶',
          korean: '甜美的夏威夷经典',
          description: '番石榴在夏威夷备受喜爱不无道理——酸甜风味与醇厚抹茶相得益彰，成就一杯本地风味的冰饮。',
          icon: '🌺',
        },
        {
          name: '香蕉抹茶',
          korean: '顺滑又柔和',
          description: '柔和的香蕉甜味让这一杯温润绵密，若你偏好少一点酸，这款舒心的冰抹茶再合适不过。',
          icon: '🍌',
        },
        {
          name: '冰焙茶',
          korean: '烘焙的坚果香',
          description: '虽不是抹茶，却是人气之选：冰焙茶是烘焙绿茶，带焙香与坚果味，咖啡因更少。加冰顺滑好喝。',
          icon: '🍵',
        },
      ],
    },
    whyHawaii: {
      title: '为什么冰抹茶最适合威基基海滩日',
      points: [
        {
          title: '为炎热而生',
          description: '威基基的午后很热，没什么比一杯冰抹茶更能让你满血复活。倒在满满的冰块上，从第一口到最后一口都保持冰凉清爽——是带去沙滩的理想饮品。',
        },
        {
          title: '清爽而不"崩溃"',
          description: '抹茶给的是平稳、持续的提神，而非咖啡那种猛烈冲击，所以一杯冰抹茶能陪你度过漫长海滩日而不会"崩"。清凉、干净，在阳光下也好喝。',
        },
        {
          title: '海滩日的那张照片',
          description: '那绿在奶上的分层，简直是为海景背景而生。手握一杯冰草莓抹茶，身后是威基基海滩——这会是你整趟旅程里最容易拍、最好看的照片之一。',
        },
        {
          title: '顺路带一杯',
          description: '离威基基海滩只有约5分钟步行，顺路一停、拿上冰抹茶，接着往海边走。冰饮、热甜甜圈、前方是大海——这就是完美的威基基清晨。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基喝冰抹茶拿铁的地方',
      intro: '想在威基基海滩附近喝一杯真正石磨的冰抹茶拿铁，Kona Coffee Donut? 是去沙滩路上顺道一停的好去处。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '就在威基基中心地段的卡拉卡瓦大道上，Kona Coffee Donut? 用真正的石磨抹茶制作冰抹茶拿铁——现打现倒于冰上，绝不太甜。抹茶拿铁$8.95（可做冰），最受欢迎的草莓抹茶$10.95。可选燕麦奶、杏仁奶或豆奶，加芒果、椰子、番石榴、香蕉等果味，或改点冰焙茶。我们距威基基海滩步行约5分钟，每天营业——去海滩的路上顺手带一杯，再配个温热的麻糬甜甜圈。电话 (808) 260-1835。',
        highlights: [
          '真正石磨冰抹茶拿铁 — $8.95（可做冰）',
          '草莓抹茶（最受欢迎）— $10.95',
          '可加燕麦奶、杏仁奶、豆奶；也有冰焙茶',
          '距威基基海滩约5分钟 • 每天营业 上午7点至晚上9点',
        ],
      },
      cta: '查看我们的抹茶与咖啡菜单',
    },
    howToEat: {
      title: '冲出最佳冰抹茶的小贴士',
      subtitle: '把你的冰抹茶拿铁调到刚刚好',
      tips: [
        {
          title: '自定甜度',
          description: '我们做得不太甜，好让真抹茶凸显，但一切由你决定。想让茶味当主角就少甜，想像甜点一样享受就稍甜——我们会按你的口味调。',
        },
        {
          title: '选你的奶',
          description: '全脂奶经典又绵密，而燕麦奶、杏仁奶和豆奶都可加选，各有风味。燕麦奶顺滑且自然带甜，杏仁奶清爽带坚果香，豆奶浓郁——很适合做无乳的冰抹茶。',
        },
        {
          title: '先试草莓',
          description: '不知从哪款下手，就点草莓抹茶——它最受欢迎自有道理。酸甜草莓与草本抹茶层叠在牛奶上，是入门冰抹茶的绝佳选择（照片也最好看）。',
        },
        {
          title: '配一个麻糬甜甜圈',
          description: '一杯冰凉的冰抹茶配一个温热有嚼劲的麻糬甜甜圈，是为海滩日而生的组合。干净的草本茶味完美衬托甜甜圈的甜——两样都点，把威基基的小憩变成一个小仪式。',
        },
      ],
    },
    faq: {
      title: '关于威基基冰抹茶的常见问题',
      items: [
        {
          question: '在威基基哪里能喝到冰抹茶拿铁？',
          answer: '位于 2142 Kalakaua Ave 的 Kona Coffee Donut? 就在威基基中心制作真正的冰抹茶拿铁，距威基基海滩步行约5分钟，每天上午7点至晚上9点营业。抹茶拿铁$8.95（可做冰），最受欢迎的草莓抹茶$10.95——去沙滩的路上顺道一停正合适。',
        },
        {
          question: '你们的抹茶是真正的石磨抹茶吗？',
          answer: '是的。我们使用真正的石磨抹茶——将绿茶细细研磨、现打现做——而非现成的绿糖浆或糖果味调配粉。所以我们的冰抹茶有自然鲜亮的绿色、干净的草本清香，也不会过甜。真抹茶和糖浆的差别，你能尝得出来。',
        },
        {
          question: '你们有冰草莓抹茶吗？',
          answer: '有——冰草莓抹茶是我们最受欢迎的抹茶饮品。冷牛奶上是真正的绿抹茶，底下是香甜草莓，$10.95。我们还做芒果、椰子、番石榴和香蕉抹茶，若你偏爱烘焙绿茶，也有冰焙茶。',
        },
        {
          question: '冰抹茶有无乳（dairy-free）的选择吗？',
          answer: '当然有。任何冰抹茶拿铁都可加选燕麦奶、杏仁奶或豆奶，轻松做成无乳。豆奶和燕麦奶格外绵密，杏仁奶则更清爽——点单时告诉我们即可。',
        },
        {
          question: '冰抹茶和热抹茶，哪个更好？',
          answer: '两者都很棒，取决于口味和天气。在炎热的威基基海滩日，满冰的冰抹茶很难被超越——冰凉、清爽、上镜。若你更想要温热的一杯，我们也做热抹茶；想要焙香、咖啡因更少的，还有冰焙茶。',
        },
      ],
    },
    cta: {
      title: '去海滩的路上带一杯冰抹茶',
      text: '前往 2142 Kalakaua Ave 的 Kona Coffee Donut?，来一杯真正的冰抹茶拿铁——石磨、不太甜，距威基基海滩仅几分钟。抹茶拿铁$8.95，草莓抹茶$10.95。',
      menuButton: '查看抹茶与咖啡菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '威基基冰抹茶拿铁',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Iced Matcha Latte in Waikiki: The Perfect Beach-Day Drink (2026)',
  description: 'A local guide to the best iced matcha latte in Waikiki — real stone-ground matcha (not syrup), the green-over-milk look, strawberry matcha, milk options, and where to get one near Waikiki Beach.',
  image: 'https://www.konacoffeedonut.com/images/blog/iced-matcha-latte-waikiki.jpeg',
  author: {
    '@type': 'Organization',
    name: 'Kona Coffee Donut',
    url: 'https://www.konacoffeedonut.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Kona Coffee Donut',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.konacoffeedonut.com/logo.png',
    },
  },
  datePublished: '2026-06-30',
  dateModified: '2026-06-30',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/en/blog/iced-matcha-latte-waikiki',
  },
  keywords: 'iced matcha latte, iced matcha, iced matcha latte near me, iced matcha waikiki, best iced matcha, strawberry matcha waikiki',
  wordCount: 1300,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I get an iced matcha latte in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut? at 2142 Kalakaua Ave makes real iced matcha lattes right in the heart of Waikiki, about a 5-minute walk from Waikiki Beach. We\'re open daily 7AM–9PM. Our Matcha Latte is $8.95 (iced available) and our most popular flavor, Strawberry Matcha, is $10.95 — an easy stop on the way to the sand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is your matcha real, stone-ground matcha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We use real stone-ground matcha — finely milled green tea whisked fresh — not a pre-made green syrup or candy-flavored mix. That\'s why our iced matcha has a vivid natural green color, a clean grassy taste, and isn\'t overly sweet. You can taste the difference between real matcha and syrup.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have iced strawberry matcha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — iced Strawberry Matcha is our most popular matcha drink. Sweet strawberry layered under real green matcha over cold milk, for $10.95. We also make mango, coconut, guava, and banana matcha, plus iced hojicha if you prefer roasted green tea.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have dairy-free options for iced matcha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. You can order any iced matcha latte with oat, almond, or soy milk as an add-on, so it\'s easy to make it dairy-free. Soy and oat are especially creamy, while almond keeps it light — just let us know when you order.',
      },
    },
    {
      '@type': 'Question',
      name: 'Iced or hot matcha — which is better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are great, and it comes down to preference and the weather. On a hot Waikiki beach day, iced matcha over plenty of ice is hard to beat — cold, refreshing, and photogenic. If you\'d rather have a warm cup, we make hot matcha too, and iced hojicha for a roasted, lower-caffeine option.',
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
      name: 'Iced Matcha Latte in Waikiki',
      item: 'https://www.konacoffeedonut.com/en/blog/iced-matcha-latte-waikiki',
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

export default function IcedMatchaLatteWaikikiPage() {
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
          src="/images/blog/iced-matcha-latte-waikiki.jpeg"
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

        {/* How We Make It — Real Matcha vs Syrup */}
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

        {/* Comparison Table */}
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

        {/* Types — Iced Matcha Flavors */}
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

        {/* Why Iced Matcha in Waikiki */}
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

        {/* Where to Get Iced Matcha in Waikiki */}
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

        {/* Tips for the Best Iced Matcha */}
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
              href={`/${locale}/blog/best-matcha-drinks-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Best Matcha Drinks in Waikiki
            </Link>
            <Link
              href={`/${locale}/menu/kona-coffee`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Matcha & Coffee Menu
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
