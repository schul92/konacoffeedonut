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
      title: 'Honolulu Coffee in Waikiki',
      subtitle: 'Where to Drink the Same 100% Kona Beans (2026 Guide)',
      updated: 'Updated June 2026',
      readTime: '7 min read',
    },
    definition: {
      title: 'Who Is Honolulu Coffee?',
      text: '<strong>Honolulu Coffee</strong> is a well-loved Hawaii roaster, founded in <strong>1992</strong>, known for its genuine <strong>100% Kona coffee</strong> — beans grown on the volcanic slopes of the Big Island\'s Kona district. Over three decades they\'ve built a strong reputation for quality Kona and run their own cafes around Honolulu and Waikiki. If you love their smooth, low-acid Kona and want another easy place to drink the <strong>very same 100% Kona beans</strong> near the beach, there\'s good news: <strong>Kona Coffee Donut?</strong> on Kalākaua Avenue proudly pours Honolulu Coffee\'s 100% Kona — freshly brewed, open late, and paired with warm mochi donuts.',
    },
    history: {
      title: 'Why Honolulu Coffee\'s Kona Is Worth Seeking Out',
      subtitle: 'What "100% Kona" Really Means',
      p1: 'Honolulu Coffee built its name on <strong>real 100% Kona</strong> — and that wording matters more than most visitors realize. Kona coffee grows only in a <strong>tiny strip of the Big Island</strong>, the North and South Kona districts, where volcanic soil, mountain elevation, and gentle afternoon clouds create near-perfect conditions. This narrow region produces <strong>less than 1% of the world\'s coffee</strong>, which is exactly why genuine Kona is so rare and prized.',
      p2: 'Here\'s the catch buyers should know: under Hawaii law, a coffee labeled a <strong>"Kona blend" only has to contain 10% real Kona beans</strong> — the other 90% can be cheaper coffee from anywhere. That\'s why the words on the bag matter. <strong>"100% Kona"</strong> means every bean is the real thing, while "Kona blend" is mostly filler. Honolulu Coffee is respected precisely because it stakes its name on genuine <strong>100% Kona</strong>, not a watered-down blend.',
      p3: 'For visitors, the easiest way to taste that quality is right here in <strong>Waikiki</strong>. You don\'t need to drive hours to the Big Island — Honolulu Coffee\'s 100% Kona is poured fresh within walking distance of the beach. Drinking it at the source islands means it\'s brewed to order rather than sitting in a souvenir bag for weeks. A great cup of real 100% Kona is one of the most memorable, low-cost things you can do in Waikiki.',
      p4: 'And it gets better when you <strong>pair it with something fresh</strong>. A smooth cup of Honolulu Coffee\'s Kona alongside a warm, just-made mochi donut turns a quick coffee run into a little ritual. The mellow, low-acid coffee balances the sweetness perfectly — exactly the kind of simple pleasure that makes a Waikiki morning (or late evening) feel like a real vacation.',
    },
    comparison: {
      title: '100% Kona vs. a Kona Blend',
      subtitle: 'Why the Words on the Label Matter',
      intro: 'Not every coffee with "Kona" on it is the same. Honolulu Coffee is genuine 100% Kona — here\'s how that compares to a blend, and what to skip entirely:',
      headers: {
        feature: 'What to look for',
        bingsu: '100% Kona (genuine)',
        shavedIce: 'Kona Blend (10% min)',
        kakigori: '"Kona Style" (0%)',
      },
      rows: [
        {
          feature: 'Kona content',
          bingsu: '100% real Kona beans',
          shavedIce: 'As little as 10% Kona, rest filler',
          kakigori: '0% — no real Kona at all',
        },
        {
          feature: 'Who pours it',
          bingsu: 'Honolulu Coffee; Kona Coffee Donut?',
          shavedIce: 'Many gift-shop labels',
          kakigori: 'Generic "Hawaiian" coffee',
        },
        {
          feature: 'Taste',
          bingsu: 'Smooth, low-acid, mellow finish',
          shavedIce: 'Diluted, uneven flavor',
          kakigori: 'Bitter, flat, or sour',
        },
        {
          feature: 'Label honesty',
          bingsu: 'Clearly says "100% Kona"',
          shavedIce: 'Says "Kona Blend" in small print',
          kakigori: 'Vague "Hawaiian," no detail',
        },
        {
          feature: 'Price',
          bingsu: 'Premium, but worth it',
          shavedIce: 'Mid-range',
          kakigori: 'Suspiciously cheap',
        },
        {
          feature: 'Verdict',
          bingsu: 'The real thing — seek it out',
          shavedIce: 'Fine in a pinch',
          kakigori: 'Not worth it',
        },
      ],
      note: 'The one rule that matters most: insist on "100% Kona." That\'s the line Honolulu Coffee is known for — and the same 100% Kona you can drink fresh at Kona Coffee Donut? in Waikiki.',
    },
    types: {
      title: 'Ways to Enjoy the Same 100% Kona in Waikiki',
      subtitle: 'Five Ways to Drink Honolulu Coffee\'s Kona at Kona Coffee Donut?',
      items: [
        {
          name: 'Hot Drip',
          korean: 'Classic & honest — $7',
          description: 'The purest way to taste 100% Kona. A fresh hot drip lets the brown-sugar sweetness and clean, low-acid finish come through with nothing in the way. This is the cup to try first if you want to understand why Honolulu Coffee\'s Kona has such a following.',
          icon: '☕',
        },
        {
          name: 'Kona Latte',
          korean: 'Smooth & creamy — $6.35',
          description: 'Real 100% Kona is rich enough to hold up beautifully with steamed milk. A Kona latte rounds out the coffee\'s mellow, nutty character into something silky and easy to sip — a crowd-pleaser, hot or iced, on a warm Waikiki afternoon.',
          icon: '🥛',
        },
        {
          name: 'Cold Brew',
          korean: 'Slow-steeped & refreshing — $6.95',
          description: 'Kona\'s naturally low acidity makes it perfect for cold brew. Steeped slow and served over ice, it stays smooth and never turns sharp or sour — exactly what you want walking back from Waikiki Beach on a sunny day.',
          icon: '🧊',
        },
        {
          name: 'Pour-Over',
          korean: 'Single-cup craft — $10.95',
          description: 'For the full experience, a hand-poured single cup brews the 100% Kona fresh, right then, to its peak. It\'s the most aromatic way to enjoy Honolulu Coffee\'s beans — a slow, deliberate cup worth lingering over.',
          icon: '💧',
        },
        {
          name: 'Affogato',
          korean: 'Coffee meets dessert',
          description: 'Pour a shot of 100% Kona over ice cream and you get an affogato — the mellow coffee cutting through the sweetness. Paired with a mochi donut on the side, it turns a coffee stop into a proper Waikiki treat.',
          icon: '🍨',
        },
      ],
    },
    whyHawaii: {
      title: 'Why Drink Honolulu Coffee\'s Kona at Kona Coffee Donut?',
      points: [
        {
          title: 'The Very Same 100% Kona Beans',
          description: 'Kona Coffee Donut? proudly pours Honolulu Coffee\'s 100% Kona — the same genuine Big Island beans you already love, brewed fresh to order. If you came to Waikiki hoping to drink real Honolulu Coffee Kona, this is an easy, honest place to find it.',
        },
        {
          title: 'Freshly Brewed Beats a Souvenir Bag',
          description: 'Many visitors buy a bag of Kona to take home, only to find it never quite tastes the same weeks later. A cup brewed fresh in Waikiki — within walking distance of the beach — captures that 100% Kona at its peak: smooth, aromatic, and full of flavor.',
        },
        {
          title: 'Open Late, Walkable From the Beach',
          description: 'You don\'t have to plan your day around it. At 2142 Kalākaua Avenue, Kona Coffee Donut? is about a 5-minute walk from Waikiki Beach and open 7AM–9PM daily — so you can drink the same 100% Kona morning, afternoon, or late evening.',
        },
        {
          title: 'Paired With Mochi Donuts',
          description: 'Honolulu Coffee\'s naturally low-acid Kona is a perfect partner for something sweet. Pairing it with a warm, just-made mochi donut, malasada, or a bowl of bingsu turns a simple coffee stop into a memorable little experience — the kind a vacation is made for.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Drink Honolulu Coffee\'s Kona in Waikiki',
      intro: 'If you want to drink genuine Honolulu Coffee 100% Kona near Waikiki Beach, Kona Coffee Donut? is an easy place to start.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Right on Kalākaua Avenue in the heart of Waikiki, Kona Coffee Donut? proudly pours Honolulu Coffee\'s 100% Kona — the very same Big Island beans — brewed fresh, hot or iced. Pair it with a freshly made mochi donut, malasada, or bingsu for the perfect Waikiki break. We\'re about a 5-minute walk from Waikiki Beach, open 7AM–9PM daily, and our team speaks several languages, so it\'s easy to swing by for a smooth, low-acid cup of the real thing.',
        highlights: [
          'Honolulu Coffee\'s 100% Kona, hot or iced',
          'Drip $7 · Kona latte $6.35 · cold brew $6.95 · pour-over $10.95',
          'About 5 minutes from Waikiki Beach',
          'Open daily, 7AM–9PM · (808) 260-1835',
        ],
      },
      cta: 'View Our Kona Coffee Menu',
    },
    howToEat: {
      title: 'Tips for the Best Cup',
      subtitle: 'Get the Most Out of Honolulu Coffee\'s Kona',
      tips: [
        {
          title: 'Ask for 100% Kona',
          description: 'It never hurts to confirm. A good cafe is proud to tell you exactly what they pour — at Kona Coffee Donut?, that means genuine Honolulu Coffee 100% Kona, every time, not a blend.',
        },
        {
          title: 'Taste It Black First',
          description: 'Give your first sip a chance without milk or sugar. That\'s where Honolulu Coffee\'s Kona shows its naturally low acidity and smooth, nutty-sweet character. Once you\'ve tasted it black, dress it up however you like.',
        },
        {
          title: 'Hot or Iced, Both Work',
          description: 'Kona\'s mellow, low-acid profile shines hot in the morning and just as well iced on a warm Waikiki afternoon. Iced Kona stays smooth instead of turning sharp, so don\'t hesitate to order it cold.',
        },
        {
          title: 'Pair It With a Warm Mochi Donut',
          description: 'A great cup is even better with a bite alongside. The smooth sweetness of 100% Kona pairs beautifully with a warm, freshly made mochi donut — order both and let a quick coffee run become a little Waikiki ritual.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About Honolulu Coffee in Waikiki',
      items: [
        {
          question: 'Is Honolulu Coffee 100% Kona?',
          answer: 'Yes — Honolulu Coffee is well known for its genuine 100% Kona coffee, grown on the Big Island\'s Kona slopes. Founded in 1992, it has built a strong reputation for quality Kona, as opposed to a "Kona blend," which by law only needs about 10% real Kona beans. Always look for the words "100% Kona" to be sure.',
        },
        {
          question: 'Where can I drink Honolulu Coffee\'s Kona beans in Waikiki?',
          answer: 'Honolulu Coffee runs its own cafes around Honolulu and Waikiki, and you can also drink the very same 100% Kona beans at Kona Coffee Donut?, 2142 Kalakaua Ave — about a 5-minute walk from Waikiki Beach, open 7AM–9PM daily, hot or iced.',
        },
        {
          question: 'Is Kona Coffee Donut?\'s coffee really Honolulu Coffee?',
          answer: 'Yes. Kona Coffee Donut? proudly pours Honolulu Coffee\'s 100% Kona — the same genuine Big Island beans — brewed fresh to order. So if you love Honolulu Coffee\'s Kona, you can drink it at Kona Coffee Donut? on Kalākaua Avenue, paired with mochi donuts.',
        },
        {
          question: 'What\'s the difference between 100% Kona and a Kona blend?',
          answer: '"100% Kona" means every bean is real Kona from the Big Island. A "Kona blend," by Hawaii law, only needs to contain about 10% Kona beans — the other 90% can be cheaper coffee from anywhere. That\'s why the wording on the label matters more than the price. Honolulu Coffee is genuine 100% Kona, not a blend.',
        },
        {
          question: 'How much is Honolulu Coffee\'s Kona at Kona Coffee Donut?',
          answer: 'At Kona Coffee Donut? in Waikiki, a hot drip of Honolulu Coffee\'s 100% Kona is $7, a Kona latte is $6.35, cold brew is $6.95, and a hand-poured pour-over is $10.95. Pair any of them with a freshly made mochi donut for the full Waikiki experience.',
        },
      ],
    },
    cta: {
      title: 'Drink the Same 100% Kona in Waikiki',
      text: 'Visit Kona Coffee Donut? at 2142 Kalakaua Ave and drink Honolulu Coffee\'s 100% Kona, brewed fresh and paired with a warm mochi donut — just minutes from Waikiki Beach.',
      menuButton: 'View Kona Coffee Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'Honolulu Coffee in Waikiki',
    },
  },
  ja: {
    hero: {
      title: 'ワイキキのホノルルコーヒー',
      subtitle: '同じ100%コナ豆を飲める場所（2026年版ガイド）',
      updated: '2026年6月更新',
      readTime: '7分で読める',
    },
    definition: {
      title: 'ホノルルコーヒーとは？',
      text: '<strong>ホノルルコーヒー（Honolulu Coffee）</strong>は<strong>1992年</strong>創業、ハワイで広く愛されるロースターです。ハワイ島コナ地区の火山斜面で育つ本物の<strong>100%コナコーヒー</strong>で知られています。30年以上にわたり高品質なコナで確かな評判を築き、ホノルルやワイキキに自社カフェを構えています。あのまろやかで酸味の低いコナがお好きで、ビーチ近くで<strong>まさに同じ100%コナ豆</strong>を気軽に飲める場所をお探しなら朗報です。カラカウア通りの<strong>Kona Coffee Donut?</strong>は、ホノルルコーヒーの100%コナを誇りを持って提供——淹れたて、夜遅くまで営業、温かいモチドーナツとの組み合わせも格別です。',
    },
    history: {
      title: 'ホノルルコーヒーのコナが探す価値のある理由',
      subtitle: '「100%コナ」が本当に意味すること',
      p1: 'ホノルルコーヒーは<strong>本物の100%コナ</strong>でその名を築きました——そしてこの表記は、多くの旅行者が思う以上に重要です。コナコーヒーが育つのは<strong>ハワイ島のごく狭い一帯</strong>、北コナと南コナ地区だけ。火山土壌、山の標高、午後の優しい雲が、ほぼ完璧な条件を生み出します。この狭い地域が生産するのは<strong>世界のコーヒーのわずか1%未満</strong>。だからこそ本物のコナは希少で珍重されるのです。',
      p2: '買う人が知っておくべき落とし穴があります。ハワイの法律では、<strong>「コナブレンド」はわずか10%のコナ豆しか含んでいなくてよい</strong>のです——残りの90%はどこの安いコーヒーでも構いません。だから袋の表記が大切。<strong>「100%コナ」</strong>はすべての豆が本物という意味で、「コナブレンド」はほとんど他の豆です。ホノルルコーヒーが信頼されるのは、まさに薄まったブレンドではなく本物の<strong>100%コナ</strong>に名を懸けているからです。',
      p3: '旅行者にとって、その品質を味わう一番簡単な方法は、ここ<strong>ワイキキ</strong>にあります。何時間もかけてハワイ島まで行く必要はありません。ホノルルコーヒーの100%コナが、ビーチから徒歩圏内で淹れたてで飲めるのです。産地であるハワイで飲むということは、何週間もお土産袋に入ったままではなく注文ごとに淹れられるということ。本物の100%コナの一杯は、ワイキキでできる最も思い出深く手頃な体験のひとつです。',
      p4: '<strong>淹れたての何かと合わせれば</strong>、さらに格別です。ホノルルコーヒーのまろやかなコナに、温かい作りたてのモチドーナツを添えれば、さっとのコーヒーが小さな儀式に。穏やかで酸味の低いコーヒーが甘さを完璧に引き立てます——まさにこのシンプルな喜びが、ワイキキの朝（や夜更け）を本物のバケーションに変えてくれます。',
    },
    comparison: {
      title: '100%コナ vs コナブレンド',
      subtitle: 'ラベルの言葉が大切な理由',
      intro: '「コナ」と書かれたコーヒーがすべて同じわけではありません。ホノルルコーヒーは本物の100%コナ——ブレンドとの違い、そして避けるべきものを比べてみましょう：',
      headers: {
        feature: 'チェックポイント',
        bingsu: '100%コナ（本物）',
        shavedIce: 'コナブレンド（最低10%）',
        kakigori: '「コナ風」（0%）',
      },
      rows: [
        {
          feature: 'コナ含有率',
          bingsu: '100%本物のコナ豆',
          shavedIce: 'わずか10%、残りは他の豆',
          kakigori: '0% — 本物のコナなし',
        },
        {
          feature: '提供元',
          bingsu: 'ホノルルコーヒー、Kona Coffee Donut?',
          shavedIce: '多くの土産物ラベル',
          kakigori: '曖昧な「ハワイアン」コーヒー',
        },
        {
          feature: '味わい',
          bingsu: 'まろやか、酸味控えめ、穏やかな後味',
          shavedIce: '薄く、味にムラ',
          kakigori: '苦い、平坦、または酸っぱい',
        },
        {
          feature: 'ラベルの正直さ',
          bingsu: '「100%コナ」と明記',
          shavedIce: '小さく「コナブレンド」と表記',
          kakigori: '曖昧な「ハワイアン」で詳細なし',
        },
        {
          feature: '価格',
          bingsu: '高めだが価値あり',
          shavedIce: '中くらい',
          kakigori: '怪しいほど安い',
        },
        {
          feature: '結論',
          bingsu: '本物 — 探してでも飲む価値あり',
          shavedIce: '困った時には',
          kakigori: 'おすすめしない',
        },
      ],
      note: '最も大切なルールはひとつ。「100%コナ」にこだわること。それがホノルルコーヒーの代名詞であり、ワイキキの Kona Coffee Donut? で淹れたてを飲める同じ100%コナなのです。',
    },
    types: {
      title: 'ワイキキで同じ100%コナを楽しむ方法',
      subtitle: 'Kona Coffee Donut? でホノルルコーヒーのコナを飲む5つの方法',
      items: [
        {
          name: 'ホットドリップ',
          korean: '王道で素直 — $7',
          description: '100%コナを最も純粋に味わう方法。淹れたてのホットドリップは、黒糖のような甘さとクリーンで酸味の低い後味を何にも邪魔されずに引き出します。ホノルルコーヒーのコナがなぜこれほど愛されるのか知りたいなら、まずこの一杯を。',
          icon: '☕',
        },
        {
          name: 'コナラテ',
          korean: 'まろやかでクリーミー — $6.35',
          description: '本物の100%コナは、スチームミルクにも見事に負けないコクがあります。コナラテは、まろやかでナッツのような風味をシルキーで飲みやすい一杯に。暖かいワイキキの午後に、ホットでもアイスでも誰もが喜ぶ一杯です。',
          icon: '🥛',
        },
        {
          name: 'コールドブリュー',
          korean: 'じっくり抽出で爽やか — $6.95',
          description: 'コナの自然な酸味の低さは、コールドブリューに最適。じっくり抽出して氷の上に注げば、尖ったり酸っぱくなったりせずまろやかなまま——晴れた日にワイキキビーチから戻る道にぴったりの一杯です。',
          icon: '🧊',
        },
        {
          name: 'プアオーバー',
          korean: '一杯ずつ丁寧に — $10.95',
          description: 'フル体験を求めるなら、ハンドドリップの一杯。その場で100%コナを淹れたて、ピークの状態で味わえます。ホノルルコーヒーの豆を最も香り高く楽しむ方法——じっくり味わう価値のある一杯です。',
          icon: '💧',
        },
        {
          name: 'アフォガート',
          korean: 'コーヒー×デザート',
          description: '100%コナのショットをアイスクリームに注げばアフォガート。まろやかなコーヒーが甘さを引き締めます。モチドーナツを添えれば、コーヒータイムが本格的なワイキキのご褒美に。',
          icon: '🍨',
        },
      ],
    },
    whyHawaii: {
      title: 'なぜ Kona Coffee Donut? でホノルルコーヒーのコナを飲むのか',
      points: [
        {
          title: 'まさに同じ100%コナ豆',
          description: 'Kona Coffee Donut? は、ホノルルコーヒーの100%コナを誇りを持って提供——あなたが既に愛する、まさに同じ本物のハワイ島の豆を、注文ごとに淹れたてで。ワイキキで本物のホノルルコーヒーのコナを飲みたかったなら、ここが気軽で正直な一軒です。',
        },
        {
          title: '淹れたてはお土産袋に勝る',
          description: '多くの旅行者がお土産にコナを一袋買いますが、数週間後には同じ味にならないと気づくことも。ワイキキで、ビーチから徒歩圏内で淹れたての一杯は、その100%コナを最高の状態で——まろやかで、香り高く、風味豊かに味わえます。',
        },
        {
          title: '夜遅くまで、ビーチから歩いて',
          description: '一日の予定を中心に組む必要はありません。2142 Kalakaua Ave の Kona Coffee Donut? はワイキキビーチから徒歩約5分、毎日午前7時〜午後9時営業——朝でも午後でも夜更けでも、同じ100%コナが飲めます。',
        },
        {
          title: 'モチドーナツとの組み合わせ',
          description: 'ホノルルコーヒーの自然に酸味の低いコナは、甘いものの完璧な相棒。温かい作りたてのモチドーナツやマラサダ、ビンスのボウルと合わせれば、シンプルなコーヒーが忘れられない小さな体験に——まさにバケーションのためのものです。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキでホノルルコーヒーのコナを飲むなら',
      intro: 'ワイキキビーチ近くで本物のホノルルコーヒー100%コナを飲みたいなら、Kona Coffee Donut? が気軽なスタート地点です。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心、カラカウア通り沿いの Kona Coffee Donut? は、ホノルルコーヒーの100%コナを誇りを持って提供——まさに同じハワイ島の豆を、ホットでもアイスでも淹れたてで。できたてのモチドーナツやマラサダ、ビンスと合わせれば完璧なワイキキの休憩に。ワイキキビーチから徒歩約5分、毎日午前7時〜午後9時営業、スタッフは複数言語に対応——まろやかで酸味の低い本物の一杯に気軽に立ち寄れます。',
        highlights: [
          'ホノルルコーヒーの100%コナ、ホット＆アイス',
          'ドリップ$7・コナラテ$6.35・コールドブリュー$6.95・プアオーバー$10.95',
          'ワイキキビーチから約5分',
          '毎日営業 午前7時〜午後9時・(808) 260-1835',
        ],
      },
      cta: 'コナコーヒーメニューを見る',
    },
    howToEat: {
      title: '最高の一杯のためのコツ',
      subtitle: 'ホノルルコーヒーのコナを最大限に楽しむ',
      tips: [
        {
          title: '「100%コナ」を尋ねる',
          description: '確認して損はありません。良いカフェは何を提供しているか誇りを持って教えてくれます——Kona Coffee Donut? なら、毎回ブレンドではなく本物のホノルルコーヒー100%コナです。',
        },
        {
          title: 'まずブラックで味わう',
          description: '最初のひと口は、ミルクや砂糖なしで。そこにこそ、ホノルルコーヒーのコナの自然な酸味の低さと、まろやかでナッツのような甘さが現れます。ブラックで味わったら、あとはお好みでアレンジを。',
        },
        {
          title: 'ホットでもアイスでも',
          description: 'コナの穏やかで酸味の低い味わいは、朝のホットでも、暖かいワイキキの午後のアイスでも輝きます。アイスのコナは尖らずまろやかなまま。だから迷わず冷たいのを注文してください。',
        },
        {
          title: '温かいモチドーナツと合わせる',
          description: '美味しい一杯は、隣にひと口あるとさらに格別。100%コナのまろやかな甘さは、温かい作りたてのモチドーナツと美しく調和します。両方注文すれば、さっとのコーヒーがワイキキの小さな儀式に。',
        },
      ],
    },
    faq: {
      title: 'ワイキキのホノルルコーヒーに関するよくある質問',
      items: [
        {
          question: 'ホノルルコーヒーは100%コナですか？',
          answer: 'はい——ホノルルコーヒーは、ハワイ島コナ斜面で育つ本物の100%コナコーヒーで広く知られています。1992年創業で、高品質なコナで確かな評判を築いてきました。法律上わずか10%のコナ豆しか必要ない「コナブレンド」とは別物です。確認するには必ず「100%コナ」の表記を探しましょう。',
        },
        {
          question: 'ワイキキでホノルルコーヒーのコナ豆を飲める場所は？',
          answer: 'ホノルルコーヒーはホノルルやワイキキに自社カフェを構えています。さらに、まさに同じ100%コナ豆を 2142 Kalakaua Ave の Kona Coffee Donut? でも飲めます——ワイキキビーチから徒歩約5分、毎日午前7時〜午後9時営業、ホットでもアイスでも。',
        },
        {
          question: 'Kona Coffee Donut? のコーヒーは本当にホノルルコーヒーですか？',
          answer: 'はい。Kona Coffee Donut? は、ホノルルコーヒーの100%コナ——まさに同じ本物のハワイ島の豆——を注文ごとに淹れたてで誇りを持って提供しています。ホノルルコーヒーのコナがお好きなら、カラカウア通りの Kona Coffee Donut? でモチドーナツと一緒に飲めます。',
        },
        {
          question: '100%コナとコナブレンドの違いは？',
          answer: '「100%コナ」はすべての豆がハワイ島産の本物のコナという意味です。「コナブレンド」はハワイの法律上わずか約10%のコナ豆を含めばよく、残りの90%はどこの安いコーヒーでも構いません。だから価格よりラベルの言葉が大切です。ホノルルコーヒーはブレンドではなく本物の100%コナです。',
        },
        {
          question: 'Kona Coffee Donut? のホノルルコーヒーのコナはいくら？',
          answer: 'ワイキキの Kona Coffee Donut? では、ホノルルコーヒーの100%コナのホットドリップが$7、コナラテが$6.35、コールドブリューが$6.95、ハンドドリップのプアオーバーが$10.95です。どれも作りたてのモチドーナツと合わせれば、フルのワイキキ体験に。',
        },
      ],
    },
    cta: {
      title: 'ワイキキで同じ100%コナを飲もう',
      text: '2142 Kalakaua Ave の Kona Coffee Donut? に立ち寄って、ホノルルコーヒーの100%コナを淹れたてで、温かいモチドーナツと一緒に——ワイキキビーチからわずか数分です。',
      menuButton: 'コナコーヒーメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'ワイキキのホノルルコーヒー',
    },
  },
  ko: {
    hero: {
      title: '와이키키의 호놀룰루 커피',
      subtitle: '똑같은 100% 코나 원두를 마실 수 있는 곳 (2026 가이드)',
      updated: '2026년 6월 업데이트',
      readTime: '7분 소요',
    },
    definition: {
      title: '호놀룰루 커피란?',
      text: '<strong>호놀룰루 커피(Honolulu Coffee)</strong>는 <strong>1992년</strong>에 설립된, 하와이에서 널리 사랑받는 로스터입니다. 빅아일랜드 코나 지역의 화산 경사면에서 자란 진짜 <strong>100% 코나 커피</strong>로 유명하죠. 30년 넘게 품질 좋은 코나로 탄탄한 명성을 쌓아 왔고, 호놀룰루와 와이키키에 직영 카페를 운영합니다. 그 부드럽고 산미 낮은 코나를 좋아하고, 해변 근처에서 <strong>바로 그 똑같은 100% 코나 원두</strong>를 편하게 마실 수 있는 곳을 찾고 계신다면 반가운 소식이 있습니다. 칼라카우아 애비뉴의 <strong>Kona Coffee Donut?</strong> 는 호놀룰루 커피의 100% 코나를 자랑스럽게 제공합니다 — 갓 내려, 늦게까지 영업, 따뜻한 모찌 도넛과 함께요.',
    },
    history: {
      title: '호놀룰루 커피의 코나를 찾아 마실 가치가 있는 이유',
      subtitle: '"100% 코나"가 진짜 의미하는 것',
      p1: '호놀룰루 커피는 <strong>진짜 100% 코나</strong>로 이름을 쌓았습니다 — 그리고 이 표기는 대부분의 여행자가 생각하는 것보다 더 중요합니다. 코나 커피가 자라는 곳은 <strong>빅아일랜드의 아주 좁은 일대</strong>, 북코나와 남코나 지역뿐입니다. 화산 토양, 산악 고도, 부드러운 오후 구름이 거의 완벽한 조건을 만듭니다. 이 좁은 지역의 생산량은 <strong>전 세계 커피의 1% 미만</strong>. 진짜 코나가 그토록 희귀하고 귀한 이유가 바로 여기에 있습니다.',
      p2: '구매자가 알아둬야 할 함정이 있습니다. 하와이 법에 따르면 <strong>"코나 블렌드"는 진짜 코나 원두를 단 10%만 함유하면 됩니다</strong> — 나머지 90%는 어디서 온 값싼 커피든 상관없습니다. 그래서 봉지의 표기가 중요합니다. <strong>"100% 코나"</strong>는 모든 원두가 진짜라는 뜻이고, "코나 블렌드"는 대부분 다른 원두입니다. 호놀룰루 커피가 존중받는 건 바로 묽어진 블렌드가 아니라 진짜 <strong>100% 코나</strong>에 이름을 걸기 때문입니다.',
      p3: '여행자에게 그 품질을 맛보는 가장 쉬운 방법은 바로 이곳 <strong>와이키키</strong>에 있습니다. 빅아일랜드까지 몇 시간씩 운전할 필요가 없습니다 — 호놀룰루 커피의 100% 코나를 해변에서 도보 거리에서 갓 내려 마실 수 있으니까요. 원산지인 하와이에서 마신다는 건, 몇 주씩 기념품 봉지에 담겨 있던 게 아니라 주문 즉시 내려 마신다는 뜻입니다. 진짜 100% 코나 한 잔은 와이키키에서 할 수 있는 가장 기억에 남으면서도 부담 없는 경험 중 하나입니다.',
      p4: '<strong>갓 만든 무언가와 곁들이면</strong> 더 좋아집니다. 호놀룰루 커피의 부드러운 코나에 따뜻하고 갓 만든 모찌 도넛을 더하면, 잠깐의 커피가 작은 의식이 됩니다. 은은하고 산미 낮은 커피가 단맛을 완벽하게 살려주죠 — 바로 이런 단순한 즐거움이 와이키키의 아침(혹은 늦은 밤)을 진짜 휴가처럼 만들어 줍니다.',
    },
    comparison: {
      title: '100% 코나 vs 코나 블렌드',
      subtitle: '라벨의 단어가 중요한 이유',
      intro: '"코나"가 붙은 커피가 모두 같은 건 아닙니다. 호놀룰루 커피는 진짜 100% 코나 — 블렌드와 어떻게 다른지, 그리고 아예 피해야 할 것을 비교해 봅니다:',
      headers: {
        feature: '확인할 점',
        bingsu: '100% 코나 (진짜)',
        shavedIce: '코나 블렌드 (최소 10%)',
        kakigori: '"코나 스타일" (0%)',
      },
      rows: [
        {
          feature: '코나 함량',
          bingsu: '100% 진짜 코나 원두',
          shavedIce: '단 10% 코나, 나머지는 다른 원두',
          kakigori: '0% — 진짜 코나 전혀 없음',
        },
        {
          feature: '제공하는 곳',
          bingsu: '호놀룰루 커피, Kona Coffee Donut?',
          shavedIce: '많은 기념품점 라벨',
          kakigori: '막연한 "하와이안" 커피',
        },
        {
          feature: '맛',
          bingsu: '부드럽고 산미 낮으며 은은한 끝맛',
          shavedIce: '묽고 맛이 들쭉날쭉',
          kakigori: '쓰거나 밋밋하거나 시큼함',
        },
        {
          feature: '라벨의 정직함',
          bingsu: '"100% 코나" 명확히 표기',
          shavedIce: '작은 글씨로 "코나 블렌드"',
          kakigori: '막연한 "하와이안", 설명 없음',
        },
        {
          feature: '가격',
          bingsu: '비싸지만 그만한 가치',
          shavedIce: '중간 정도',
          kakigori: '수상할 만큼 저렴',
        },
        {
          feature: '결론',
          bingsu: '진짜 — 찾아서라도 마실 만함',
          shavedIce: '아쉬운 대로 괜찮음',
          kakigori: '굳이 마실 필요 없음',
        },
      ],
      note: '가장 중요한 단 하나의 원칙: "100% 코나"를 고집하세요. 그게 바로 호놀룰루 커피의 대명사이고, 와이키키의 Kona Coffee Donut? 에서 갓 내려 마실 수 있는 바로 그 100% 코나입니다.',
    },
    types: {
      title: '와이키키에서 똑같은 100% 코나를 즐기는 법',
      subtitle: 'Kona Coffee Donut? 에서 호놀룰루 커피의 코나를 마시는 다섯 가지',
      items: [
        {
          name: '핫 드립',
          korean: '클래식하고 정직 — $7',
          description: '100% 코나를 가장 순수하게 맛보는 법. 갓 내린 핫 드립은 흑설탕 같은 단맛과 깔끔하고 산미 낮은 끝맛을 아무 방해 없이 드러냅니다. 호놀룰루 커피의 코나가 왜 그렇게 사랑받는지 알고 싶다면, 먼저 이 한 잔을.',
          icon: '☕',
        },
        {
          name: '코나 라테',
          korean: '부드럽고 크리미 — $6.35',
          description: '진짜 100% 코나는 스팀 밀크에도 멋지게 어우러질 만큼 진합니다. 코나 라테는 은은하고 고소한 풍미를 실키하고 마시기 편한 한 잔으로 만들어 줍니다 — 따뜻한 와이키키 오후에, 핫이든 아이스든 누구나 좋아하는 한 잔이죠.',
          icon: '🥛',
        },
        {
          name: '콜드브루',
          korean: '천천히 우려 시원하게 — $6.95',
          description: '코나의 자연스럽게 낮은 산미는 콜드브루에 안성맞춤입니다. 천천히 우려 얼음 위에 부으면 날카롭거나 시큼해지지 않고 부드러움을 유지합니다 — 화창한 날 와이키키 해변에서 돌아오는 길에 딱입니다.',
          icon: '🧊',
        },
        {
          name: '푸어오버',
          korean: '한 잔씩 정성껏 — $10.95',
          description: '온전한 경험을 원한다면, 핸드드립 한 잔. 그 자리에서 100% 코나를 갓 내려 정점의 상태로 즐깁니다. 호놀룰루 커피의 원두를 가장 향긋하게 즐기는 법 — 천천히 음미할 가치가 있는 한 잔이죠.',
          icon: '💧',
        },
        {
          name: '아포가토',
          korean: '커피와 디저트의 만남',
          description: '100% 코나 샷을 아이스크림 위에 부으면 아포가토 — 은은한 커피가 단맛을 잡아줍니다. 모찌 도넛을 곁들이면 커피 한 잔이 제대로 된 와이키키의 호사가 됩니다.',
          icon: '🍨',
        },
      ],
    },
    whyHawaii: {
      title: '왜 Kona Coffee Donut? 에서 호놀룰루 커피의 코나를 마실까',
      points: [
        {
          title: '바로 그 똑같은 100% 코나 원두',
          description: 'Kona Coffee Donut? 는 호놀룰루 커피의 100% 코나를 자랑스럽게 제공합니다 — 당신이 이미 좋아하는, 바로 그 진짜 빅아일랜드 원두를 주문 즉시 갓 내려서요. 와이키키에서 진짜 호놀룰루 커피의 코나를 마시고 싶었다면, 여기가 편하고 정직한 한 곳입니다.',
        },
        {
          title: '갓 내린 한 잔이 기념품 봉지를 이긴다',
          description: '많은 여행자가 코나 한 봉지를 사 가지만, 몇 주 뒤엔 그 맛이 안 난다는 걸 깨닫곤 합니다. 와이키키에서, 해변에서 도보 거리에서 갓 내린 한 잔은 그 100% 코나를 정점에서 담아냅니다 — 부드럽고, 향긋하고, 풍미 가득하게.',
        },
        {
          title: '늦게까지, 해변에서 걸어서',
          description: '하루 일정을 여기에 맞출 필요가 없습니다. 2142 Kalakaua Ave의 Kona Coffee Donut? 는 와이키키 해변에서 도보 약 5분, 매일 오전 7시~오후 9시 영업 — 그래서 아침이든 오후든 늦은 밤이든 똑같은 100% 코나를 마실 수 있습니다.',
        },
        {
          title: '모찌 도넛과 함께',
          description: '호놀룰루 커피의 자연스럽게 산미 낮은 코나는 달콤한 것과 완벽한 짝입니다. 따뜻하고 갓 만든 모찌 도넛, 말라사다, 빙수 한 그릇과 곁들이면 단순한 커피 한 잔이 잊지 못할 작은 경험이 됩니다 — 휴가에 딱 어울리는 것이죠.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 호놀룰루 커피의 코나를 마시는 곳',
      intro: '와이키키 해변 근처에서 진짜 호놀룰루 커피 100% 코나를 마시고 싶다면, Kona Coffee Donut? 가 시작하기 편한 곳입니다.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키의 중심, 칼라카우아 애비뉴에 자리한 Kona Coffee Donut? 는 호놀룰루 커피의 100% 코나를 자랑스럽게 제공합니다 — 바로 그 똑같은 빅아일랜드 원두를, 핫이든 아이스든 갓 내려서요. 갓 만든 모찌 도넛, 말라사다, 빙수와 곁들이면 완벽한 와이키키의 쉼표가 됩니다. 와이키키 해변에서 도보 약 5분, 매일 오전 7시~오후 9시 영업, 여러 언어가 가능한 직원이 있어 부드럽고 산미 낮은 진짜 한 잔을 가볍게 들르기 좋습니다.',
        highlights: [
          '호놀룰루 커피의 100% 코나, 핫 & 아이스',
          '드립 $7 · 코나 라테 $6.35 · 콜드브루 $6.95 · 푸어오버 $10.95',
          '와이키키 해변에서 약 5분',
          '매일 영업 오전 7시~오후 9시 · (808) 260-1835',
        ],
      },
      cta: '코나 커피 메뉴 보기',
    },
    howToEat: {
      title: '최고의 한 잔을 위한 팁',
      subtitle: '호놀룰루 커피의 코나를 200% 즐기는 법',
      tips: [
        {
          title: '"100% 코나"인지 물어보기',
          description: '확인해서 손해 볼 일은 없습니다. 좋은 카페는 무엇을 내리는지 자랑스럽게 알려줍니다 — Kona Coffee Donut? 에서는 매번 블렌드가 아닌 진짜 호놀룰루 커피 100% 코나라는 뜻이죠.',
        },
        {
          title: '먼저 블랙으로 맛보기',
          description: '첫 모금은 우유나 설탕 없이. 거기서 호놀룰루 커피의 코나가 지닌 자연스럽게 낮은 산미와 부드럽고 고소한 단맛이 제대로 드러납니다. 블랙으로 맛본 뒤엔 취향대로 즐기세요.',
        },
        {
          title: '핫이든 아이스든 다 좋다',
          description: '코나의 은은하고 산미 낮은 풍미는 아침의 핫에서도, 따뜻한 와이키키 오후의 아이스에서도 빛납니다. 아이스 코나는 날카로워지지 않고 부드러움을 유지하니, 망설이지 말고 시원하게 주문하세요.',
        },
        {
          title: '따뜻한 모찌 도넛과 곁들이기',
          description: '좋은 한 잔은 옆에 한 입 거리가 있으면 더 좋습니다. 100% 코나의 부드러운 단맛은 따뜻하고 갓 만든 모찌 도넛과 아름답게 어울립니다 — 둘 다 주문하면 잠깐의 커피가 와이키키의 작은 의식이 됩니다.',
        },
      ],
    },
    faq: {
      title: '와이키키 호놀룰루 커피에 대해 자주 묻는 질문',
      items: [
        {
          question: '호놀룰루 커피는 100% 코나인가요?',
          answer: '네 — 호놀룰루 커피는 빅아일랜드 코나 경사면에서 자란 진짜 100% 코나 커피로 널리 알려져 있습니다. 1992년에 설립되어 품질 좋은 코나로 탄탄한 명성을 쌓았습니다. 법적으로 진짜 코나 원두가 약 10%만 들어가면 되는 "코나 블렌드"와는 다릅니다. 확인하려면 항상 "100% 코나" 표기를 찾으세요.',
        },
        {
          question: '와이키키에서 호놀룰루 커피의 코나 원두를 마실 수 있는 곳은?',
          answer: '호놀룰루 커피는 호놀룰루와 와이키키에 직영 카페를 운영합니다. 그리고 바로 그 똑같은 100% 코나 원두를 2142 Kalakaua Ave의 Kona Coffee Donut? 에서도 마실 수 있습니다 — 와이키키 해변에서 도보 약 5분, 매일 오전 7시~오후 9시 영업, 핫이든 아이스든.',
        },
        {
          question: 'Kona Coffee Donut? 의 커피가 정말 호놀룰루 커피인가요?',
          answer: '네. Kona Coffee Donut? 는 호놀룰루 커피의 100% 코나 — 바로 그 똑같은 진짜 빅아일랜드 원두 — 를 주문 즉시 갓 내려 자랑스럽게 제공합니다. 그러니 호놀룰루 커피의 코나를 좋아한다면, 칼라카우아 애비뉴의 Kona Coffee Donut? 에서 모찌 도넛과 함께 마실 수 있습니다.',
        },
        {
          question: '100% 코나와 코나 블렌드의 차이는?',
          answer: '"100% 코나"는 모든 원두가 빅아일랜드산 진짜 코나라는 뜻입니다. "코나 블렌드"는 하와이 법상 코나 원두가 약 10%만 들어가면 되고, 나머지 90%는 어디서 온 값싼 커피든 상관없습니다. 그래서 가격보다 라벨의 단어가 더 중요합니다. 호놀룰루 커피는 블렌드가 아닌 진짜 100% 코나입니다.',
        },
        {
          question: 'Kona Coffee Donut? 에서 호놀룰루 커피의 코나는 얼마인가요?',
          answer: '와이키키의 Kona Coffee Donut? 에서 호놀룰루 커피 100% 코나의 핫 드립은 $7, 코나 라테는 $6.35, 콜드브루는 $6.95, 핸드드립 푸어오버는 $10.95입니다. 어느 것이든 갓 만든 모찌 도넛과 곁들이면 완전한 와이키키 경험이 됩니다.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 똑같은 100% 코나를 마셔보세요',
      text: '2142 Kalakaua Ave의 Kona Coffee Donut? 에 들러 호놀룰루 커피의 100% 코나를 갓 내려, 따뜻한 모찌 도넛과 함께 즐겨보세요 — 와이키키 해변에서 단 몇 분 거리입니다.',
      menuButton: '코나 커피 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '와이키키의 호놀룰루 커피',
    },
  },
  zh: {
    hero: {
      title: '威基基的檀香山咖啡',
      subtitle: '在哪里能喝到同样的100%科纳豆（2026指南）',
      updated: '2026年6月更新',
      readTime: '阅读约7分钟',
    },
    definition: {
      title: '檀香山咖啡（Honolulu Coffee）是谁？',
      text: '<strong>檀香山咖啡（Honolulu Coffee）</strong>是一家深受喜爱的夏威夷烘焙商，创立于<strong>1992年</strong>，以正宗的<strong>100%科纳咖啡</strong>闻名——咖啡豆产自大岛科纳产区的火山斜坡。三十多年来，他们凭借优质科纳建立了良好口碑，并在檀香山和威基基经营自己的咖啡馆。如果你喜爱那份顺滑、低酸的科纳，又想在海滩附近找一个能轻松喝到<strong>正是同样100%科纳豆</strong>的地方，好消息来了：卡拉卡瓦大道上的<strong>Kona Coffee Donut?</strong> 自豪地供应檀香山咖啡的100%科纳——现冲现做、营业到很晚，还能搭配温热的麻糬甜甜圈。',
    },
    history: {
      title: '为什么檀香山咖啡的科纳值得专程寻味',
      subtitle: '"100%科纳"究竟意味着什么',
      p1: '檀香山咖啡靠<strong>正宗的100%科纳</strong>立名——而这个字眼比大多数游客以为的更重要。科纳咖啡只生长在<strong>大岛极小的一带</strong>，即北科纳和南科纳产区，那里的火山土壤、山地海拔和午后温和的云层造就了近乎完美的条件。这片狭窄区域的产量<strong>不到全球咖啡的1%</strong>，这正是正宗科纳如此稀有珍贵的原因。',
      p2: '有一个买家该知道的陷阱：按夏威夷法律，标着<strong>"科纳混合（Kona blend）"的咖啡只需含10%的真科纳豆</strong>——其余90%可以是任何来源的廉价咖啡。所以袋上的字眼很关键。<strong>"100%科纳"</strong>意味着每一颗豆子都是真货，而"科纳混合"大多是填充豆。檀香山咖啡之所以受人尊重，正是因为它以正宗的<strong>100%科纳</strong>立名，而非被稀释的混合。',
      p3: '对游客而言，品尝这份品质最简单的方式就在<strong>威基基</strong>。你不必驱车数小时前往大岛——檀香山咖啡的100%科纳就在离海滩步行可达的地方现冲。在原产岛屿就地品尝，意味着它是现点现冲的，而不是在纪念品袋里放了几周的。一杯正宗的100%科纳，是你在威基基能享受的最难忘又实惠的体验之一。',
      p4: '若<strong>再搭配点新鲜的</strong>，体验会更好。一杯顺滑的檀香山咖啡科纳配上温热现做的麻糬甜甜圈，能把匆忙的喝咖啡变成一个小小的仪式。柔和低酸的咖啡完美衬托甜味——正是这种简单的愉悦，让威基基的清晨（或深夜）感觉像一场真正的度假。',
    },
    comparison: {
      title: '100%科纳 vs 科纳混合',
      subtitle: '为什么标签上的字眼很重要',
      intro: '并非每一款带"科纳"字样的咖啡都一样。檀香山咖啡是正宗100%科纳——下面看看它与混合咖啡的区别，以及该完全避开的：',
      headers: {
        feature: '查看要点',
        bingsu: '100%科纳（正宗）',
        shavedIce: '科纳混合（最低10%）',
        kakigori: '"科纳风味"（0%）',
      },
      rows: [
        {
          feature: '科纳含量',
          bingsu: '100%真科纳豆',
          shavedIce: '低至10%科纳，其余为填充豆',
          kakigori: '0%——完全没有真科纳',
        },
        {
          feature: '谁在供应',
          bingsu: '檀香山咖啡；Kona Coffee Donut?',
          shavedIce: '许多礼品店标签',
          kakigori: '笼统的"夏威夷"咖啡',
        },
        {
          feature: '口感',
          bingsu: '顺滑、低酸、尾韵柔和',
          shavedIce: '偏淡、风味不均',
          kakigori: '苦涩、平淡或发酸',
        },
        {
          feature: '标签诚信',
          bingsu: '清楚标明"100%科纳"',
          shavedIce: '小字注明"科纳混合"',
          kakigori: '含糊的"夏威夷"，无细节',
        },
        {
          feature: '价格',
          bingsu: '偏高，但物有所值',
          shavedIce: '中等',
          kakigori: '便宜得可疑',
        },
        {
          feature: '结论',
          bingsu: '真货——值得专程寻找',
          shavedIce: '应急时还行',
          kakigori: '不值得',
        },
      ],
      note: '最重要的一条原则：坚持要"100%科纳"。这正是檀香山咖啡为人称道之处——也是你能在威基基 Kona Coffee Donut? 喝到的现冲同款100%科纳。',
    },
    types: {
      title: '在威基基享用同款100%科纳的方式',
      subtitle: '在 Kona Coffee Donut? 喝檀香山咖啡科纳的五种方式',
      items: [
        {
          name: '热手冲（Hot Drip）',
          korean: '经典又真诚——$7',
          description: '品尝100%科纳最纯粹的方式。一杯现冲热滴漏，让红糖般的甜味与干净、低酸的尾韵毫无遮挡地展现。如果你想明白檀香山咖啡的科纳为何如此受欢迎，先从这一杯开始。',
          icon: '☕',
        },
        {
          name: '科纳拿铁',
          korean: '顺滑又奶香——$6.35',
          description: '正宗100%科纳浓郁到能与蒸奶完美相融。一杯科纳拿铁把它柔和、坚果般的特质化为丝滑易饮的一杯——在温暖的威基基午后，热饮冰饮都人见人爱。',
          icon: '🥛',
        },
        {
          name: '冷萃（Cold Brew）',
          korean: '慢萃清爽——$6.95',
          description: '科纳天然的低酸特别适合冷萃。慢慢萃取、浇在冰上，依旧顺滑，绝不变得尖锐或发酸——正是晴天从威基基海滩走回来时想要的那一杯。',
          icon: '🧊',
        },
        {
          name: '手冲单杯（Pour-Over）',
          korean: '单杯精冲——$10.95',
          description: '想要完整体验，就来一杯手冲单杯。当场把100%科纳冲到巅峰状态，是品味檀香山咖啡豆最香的方式——一杯值得慢慢享用的咖啡。',
          icon: '💧',
        },
        {
          name: '阿芙佳朵（Affogato）',
          korean: '咖啡邂逅甜点',
          description: '把一份100%科纳浓缩浇在冰淇淋上，就是阿芙佳朵——柔和的咖啡中和了甜腻。再配一个麻糬甜甜圈，喝咖啡就变成一份地道的威基基享受。',
          icon: '🍨',
        },
      ],
    },
    whyHawaii: {
      title: '为什么要在 Kona Coffee Donut? 喝檀香山咖啡的科纳',
      points: [
        {
          title: '正是同样的100%科纳豆',
          description: 'Kona Coffee Donut? 自豪地供应檀香山咖啡的100%科纳——正是你已经喜爱的那份正宗大岛豆，现点现冲。如果你来威基基就是想喝到真正的檀香山咖啡科纳，这里是一个轻松又真诚的去处。',
        },
        {
          title: '现冲胜过纪念品袋',
          description: '许多游客买一袋科纳带回家，几周后却发现味道不再那么好。在威基基现冲的一杯——离海滩步行可达——捕捉的是那份100%科纳的巅峰：顺滑、芳香、风味十足。',
        },
        {
          title: '营业到很晚，从海滩步行可达',
          description: '你不必围着它安排一天。位于 2142 Kalakaua Ave 的 Kona Coffee Donut? 距威基基海滩步行约5分钟，每天上午7点至晚上9点营业——所以无论清晨、午后还是深夜，都能喝到同样的100%科纳。',
        },
        {
          title: '搭配麻糬甜甜圈',
          description: '檀香山咖啡天然低酸的科纳，是甜食的完美搭档。配上温热现做的麻糬甜甜圈、马拉萨达或一碗刨冰，就能把简单的一杯咖啡变成难忘的小体验——正是度假该有的享受。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基喝檀香山咖啡科纳的地方',
      intro: '如果你想在威基基海滩附近喝到正宗的檀香山咖啡100%科纳，Kona Coffee Donut? 是一个轻松的起点。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '就在威基基中心地段的卡拉卡瓦大道上，Kona Coffee Donut? 自豪地供应檀香山咖啡的100%科纳——正是同样的大岛豆——无论热饮还是冰饮都现冲现做。再配上一个现做的麻糬甜甜圈、马拉萨达或刨冰，就是完美的威基基小憩。我们距威基基海滩步行约5分钟，每天上午7点至晚上9点营业，团队会说多种语言，随时可以来一杯顺滑低酸的正宗咖啡。',
        highlights: [
          '檀香山咖啡的100%科纳，冷热皆有',
          '手冲$7 · 科纳拿铁$6.35 · 冷萃$6.95 · 单杯手冲$10.95',
          '距威基基海滩约5分钟',
          '每天营业 上午7点至晚上9点 · (808) 260-1835',
        ],
      },
      cta: '查看我们的科纳咖啡菜单',
    },
    howToEat: {
      title: '冲出最佳一杯的小贴士',
      subtitle: '充分享受檀香山咖啡的科纳',
      tips: [
        {
          title: '问一句"100%科纳"',
          description: '确认一下从不吃亏。好的咖啡馆会自豪地告诉你冲的是什么——在 Kona Coffee Donut?，那意味着每一次都是正宗的檀香山咖啡100%科纳，而非混合。',
        },
        {
          title: '先纯黑品尝',
          description: '第一口不妨不加奶不加糖。那里才能真正尝出檀香山咖啡科纳天然的低酸和顺滑、坚果般的甜味。纯黑尝过之后，再随你喜好调味。',
        },
        {
          title: '冷热皆宜',
          description: '科纳柔和低酸的特质，清晨喝热的出彩，威基基温暖午后喝冰的同样精彩。冰科纳依旧顺滑，不会变得尖锐，所以尽管点杯冷的。',
        },
        {
          title: '搭配一个温热的麻糬甜甜圈',
          description: '好的一杯，旁边有一口小食会更出色。100%科纳顺滑的甜味与温热现做的麻糬甜甜圈相得益彰——两样都点，让匆匆一杯咖啡变成一段威基基小仪式。',
        },
      ],
    },
    faq: {
      title: '关于威基基檀香山咖啡的常见问题',
      items: [
        {
          question: '檀香山咖啡是100%科纳吗？',
          answer: '是的——檀香山咖啡以其正宗的100%科纳咖啡闻名，咖啡豆产自大岛科纳斜坡。创立于1992年，凭借优质科纳建立了良好口碑，与按法律只需约10%真科纳豆的"科纳混合"不同。要确认，请始终寻找"100%科纳"字样。',
        },
        {
          question: '在威基基哪里能喝到檀香山咖啡的科纳豆？',
          answer: '檀香山咖啡在檀香山和威基基经营自己的咖啡馆。此外，你还能在 2142 Kalakaua Ave 的 Kona Coffee Donut? 喝到正是同样的100%科纳豆——距威基基海滩步行约5分钟，每天上午7点至晚上9点营业，冷热皆有。',
        },
        {
          question: 'Kona Coffee Donut? 的咖啡真的是檀香山咖啡吗？',
          answer: '是的。Kona Coffee Donut? 自豪地供应檀香山咖啡的100%科纳——正是同样的正宗大岛豆——现点现冲。所以如果你喜爱檀香山咖啡的科纳，就能在卡拉卡瓦大道的 Kona Coffee Donut? 喝到它，还能搭配麻糬甜甜圈。',
        },
        {
          question: '100%科纳和科纳混合有什么区别？',
          answer: '"100%科纳"意味着每一颗豆子都是产自大岛的真科纳。按夏威夷法律，"科纳混合"只需含约10%的科纳豆，其余90%可以是任何来源的廉价咖啡。所以标签上的字眼比价格更重要。檀香山咖啡是正宗100%科纳，而非混合。',
        },
        {
          question: '在 Kona Coffee Donut? 檀香山咖啡的科纳多少钱？',
          answer: '在威基基的 Kona Coffee Donut?，一杯檀香山咖啡100%科纳的热手冲是$7，科纳拿铁$6.35，冷萃$6.95，手冲单杯$10.95。任选一款搭配现做的麻糬甜甜圈，就是完整的威基基体验。',
        },
      ],
    },
    cta: {
      title: '在威基基喝同样的100%科纳',
      text: '前往 2142 Kalakaua Ave 的 Kona Coffee Donut?，喝一杯现冲的檀香山咖啡100%科纳，配上温热的麻糬甜甜圈——距威基基海滩仅几分钟。',
      menuButton: '查看科纳咖啡菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '威基基的檀香山咖啡',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Honolulu Coffee in Waikiki (2026): Where to Drink the Same 100% Kona Beans',
  description: 'Love Honolulu Coffee\'s Kona? Learn what "100% Kona" really means and where to drink the very same 100% Kona beans in Waikiki — freshly brewed at Kona Coffee Donut?, paired with mochi donuts.',
  image: 'https://www.konacoffeedonut.com/images/blog/honolulu-coffee-waikiki.jpeg',
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
  datePublished: '2026-06-26',
  dateModified: '2026-06-26',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/en/blog/honolulu-coffee-waikiki',
  },
  keywords: 'honolulu coffee, honolulu coffee waikiki, honolulu coffee kona, where to drink honolulu coffee waikiki, 100% kona coffee waikiki',
  wordCount: 1400,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Honolulu Coffee 100% Kona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — Honolulu Coffee is well known for its genuine 100% Kona coffee, grown on the Big Island\'s Kona slopes. Founded in 1992, it has built a strong reputation for quality Kona, as opposed to a "Kona blend," which by law only needs about 10% real Kona beans. Always look for the words "100% Kona" to be sure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I drink Honolulu Coffee\'s Kona beans in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Honolulu Coffee runs its own cafes around Honolulu and Waikiki, and you can also drink the very same 100% Kona beans at Kona Coffee Donut?, 2142 Kalakaua Ave — about a 5-minute walk from Waikiki Beach, open 7AM–9PM daily, hot or iced.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Kona Coffee Donut?\'s coffee really Honolulu Coffee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Kona Coffee Donut? proudly pours Honolulu Coffee\'s 100% Kona — the same genuine Big Island beans — brewed fresh to order. So if you love Honolulu Coffee\'s Kona, you can drink it at Kona Coffee Donut? on Kalākaua Avenue, paired with mochi donuts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the difference between 100% Kona and a Kona blend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '"100% Kona" means every bean is real Kona from the Big Island. A "Kona blend," by Hawaii law, only needs to contain about 10% Kona beans — the other 90% can be cheaper coffee from anywhere. That\'s why the wording on the label matters more than the price. Honolulu Coffee is genuine 100% Kona, not a blend.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much is Honolulu Coffee\'s Kona at Kona Coffee Donut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At Kona Coffee Donut? in Waikiki, a hot drip of Honolulu Coffee\'s 100% Kona is $7, a Kona latte is $6.35, cold brew is $6.95, and a hand-poured pour-over is $10.95. Pair any of them with a freshly made mochi donut for the full Waikiki experience.',
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
      name: 'Honolulu Coffee in Waikiki',
      item: 'https://www.konacoffeedonut.com/en/blog/honolulu-coffee-waikiki',
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

export default function HonoluluCoffeeWaikikiPage() {
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
          src="/images/blog/honolulu-coffee-waikiki.jpeg"
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

        {/* History — What 100% Kona Means */}
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

        {/* Types — Ways to Enjoy the Kona */}
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

        {/* Why Drink Honolulu Coffee's Kona at Kona Coffee Donut? */}
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

        {/* Where to Drink Honolulu Coffee's Kona in Waikiki */}
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

        {/* Tips for the Best Cup */}
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
              href={`/${locale}/blog/best-kona-coffee-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 font-semibold transition-colors"
            >
              → Best Kona Coffee in Waikiki
            </Link>
            <Link
              href={`/${locale}/blog/is-kona-coffee-worth-it`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Is Kona Coffee Worth It?
            </Link>
            <Link
              href={`/${locale}/menu/kona-coffee`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Kona Coffee Menu
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
