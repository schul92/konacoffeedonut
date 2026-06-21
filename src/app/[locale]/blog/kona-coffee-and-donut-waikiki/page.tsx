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
      title: 'Kona Coffee & Mochi Donut',
      subtitle: 'Waikiki\'s Perfect Pairing — Real 100% Kona Coffee + Fresh Mochi Donuts Under One Roof',
      updated: 'Updated June 2026',
      readTime: '8 min read',
    },
    definition: {
      title: 'What Makes the Kona Coffee + Mochi Donut Pairing Special?',
      text: 'The <strong>Kona coffee and mochi donut combo</strong> is what <strong>Kona Coffee Donut?</strong> in Waikiki is built around. You get a cup of <strong>smooth, low-acid 100% Kona coffee</strong> — poured from Honolulu Coffee\'s prized Kona beans — alongside a <strong>chewy, not-too-sweet rice-flour mochi donut</strong>. The contrast is the magic: bright, clean coffee against a soft, springy "QQ" donut that pulls apart in your fingers. It\'s the ideal Waikiki morning or afternoon treat, made fresh and served just ~5 minutes from Waikiki Beach.',
    },
    history: {
      title: 'The Story Behind Kona Coffee & the Mochi Donut',
      subtitle: 'A Classic Coffee-and-Donut Tradition, Reinvented Hawaiian-Style',
      p1: 'Coffee and donuts have gone together for over a century — the warm, sweet bite that makes a cup of coffee feel complete. At <strong>Kona Coffee Donut?</strong> on Kalākaua Avenue, that tradition gets a Hawaiian remix: instead of a heavy, sugary fried ring, you get a light, chewy mochi donut, and instead of generic drip, you get real 100% Kona coffee grown right here in the islands.',
      p2: 'A <strong>mochi donut</strong> is not your usual donut. Shaped like a ring of connected dough balls — the famous <strong>pon-de-ring</strong> — it\'s made with <strong>mochiko (sweet rice flour)</strong> instead of wheat. That gives it a signature chewy, bouncy texture Koreans and Japanese call <strong>"QQ"</strong>: soft and springy, never dense or greasy. It\'s less sweet than a classic donut, which is exactly why it pairs so well with coffee.',
      p3: 'And the coffee is the real thing. <strong>Kona coffee</strong> is grown only on the volcanic slopes of Hawaii Island\'s Kona district, where rich soil, sun, and afternoon clouds create ideal growing conditions. True Kona makes up <strong>less than 1% of the world\'s coffee</strong>, and 100% Kona — not a "Kona blend" — is smooth, low in acidity, and naturally sweet, with no bitter edge.',
      p4: 'Bring the two together and you have something you can\'t get just anywhere: <strong>real 100% Kona coffee and fresh rice-flour mochi donuts at one Waikiki spot</strong>. That\'s the whole idea behind Kona Coffee Donut? — one easy stop, a few minutes from the sand, where the coffee and the donut are both worth the trip.',
    },
    comparison: {
      title: 'Which Mochi Donut Pairs With Which Kona Drink',
      subtitle: 'Find Your Perfect Combo',
      intro: 'Not sure what to order? Match your mood to a donut-and-coffee pairing. Here are six combos that just work:',
      headers: {
        feature: 'Mood',
        bingsu: 'Donut',
        shavedIce: 'Kona drink',
        kakigori: 'Why it works',
      },
      rows: [
        {
          feature: 'Classic morning',
          bingsu: 'Classic glazed mochi donut',
          shavedIce: 'Hot 100% Kona coffee',
          kakigori: 'Clean and comforting — the timeless pairing',
        },
        {
          feature: 'Indulgent',
          bingsu: 'Ube mochi donut',
          shavedIce: 'Iced Kona latte',
          kakigori: 'Creamy and nutty, with a smooth milky finish',
        },
        {
          feature: 'Bright',
          bingsu: 'Strawberry mochi donut',
          shavedIce: 'Kona pour-over',
          kakigori: 'Fruity contrast against clean black coffee',
        },
        {
          feature: 'Earthy',
          bingsu: 'Matcha mochi donut',
          shavedIce: 'Kona latte',
          kakigori: 'Balanced bitterness, mellowed by warm milk',
        },
        {
          feature: 'Nutty',
          bingsu: 'Black sesame mochi donut',
          shavedIce: 'Kona affogato',
          kakigori: 'Toasty and sweet, with a rich espresso pour',
        },
        {
          feature: 'Refreshing',
          bingsu: 'Lilikoi (passion fruit) mochi donut',
          shavedIce: 'Iced Kona coffee',
          kakigori: 'A tropical lift that wakes everything up',
        },
      ],
      note: 'Honestly, you can\'t go wrong: any 100% Kona coffee paired with a fresh mochi donut is a winning combo. Order two donuts and a couple of coffees and share the lot.',
    },
    types: {
      title: 'How to Build Your Perfect Kona Coffee + Donut Combo',
      subtitle: 'Five Easy Steps to Your Ideal Waikiki Order',
      items: [
        {
          name: 'Pick Your Kona Drink',
          korean: 'Hot · Iced · Latte · Pour-over',
          description: 'Start with the coffee. Go hot 100% Kona for a clean classic, an iced Kona latte for something creamy, or a Kona pour-over if you want to taste the bean at its purest. Every option is poured from real Kona coffee, not a blend.',
          icon: '☕',
        },
        {
          name: 'Pick a Mochi Donut Flavor',
          korean: 'Glazed · Ube · Matcha · Strawberry',
          description: 'Choose your chewy rice-flour mochi donut. Classic glazed is the safe favorite; ube, matcha, black sesame, and strawberry each bring their own character. They\'re less sweet than regular donuts, so the coffee always stays the star.',
          icon: '🍩',
        },
        {
          name: 'Add a Malasada If You Want Classic',
          korean: 'Hawaiian classic',
          description: 'Craving something more traditional? Add a warm Portuguese-Hawaiian malasada — pillowy, sugar-dusted, and fried fresh. It\'s the old-school donut counterpart to the chewy mochi, and it loves a cup of Kona just as much.',
          icon: '🍥',
        },
        {
          name: 'Share a Box + Coffees',
          korean: 'Made for sharing',
          description: 'Grab a mixed box of mochi donuts and a round of Kona coffees for the table. It\'s affordable, colorful, and perfect for a group — everyone gets to try a few flavors instead of committing to just one.',
          icon: '🎁',
        },
        {
          name: 'Get It To-Go for the Beach',
          korean: 'Beach-ready',
          description: 'Waikiki Beach is about a 5-minute walk away. Take your coffee and a box of donuts to-go and enjoy them with an ocean view. Mochi donuts travel well and stay chewy, making them the ideal beach-morning snack.',
          icon: '🏖️',
        },
      ],
    },
    whyHawaii: {
      title: 'Why the Kona Coffee + Mochi Donut Combo Is a Waikiki Must',
      points: [
        {
          title: 'Real Kona + Fresh Donuts, One Roof',
          description: 'Most places give you one or the other — good coffee, or good donuts. Kona Coffee Donut? does both: genuine 100% Kona coffee and fresh rice-flour mochi donuts made daily, under the same roof. No compromise, no second stop.',
        },
        {
          title: 'A Chewy Texture You Can\'t Get on the Mainland',
          description: 'Rice-flour mochi donuts have that springy, bouncy "QQ" chew that wheat donuts simply can\'t match. For a lot of visitors, that first pull-apart bite is a brand-new texture — light, satisfying, and surprisingly not too sweet.',
        },
        {
          title: '~5 Minutes from Waikiki Beach',
          description: 'You\'re right in the heart of Waikiki on Kalākaua Avenue, about a 5-minute walk from the sand. Grab your coffee and donuts on the way to the beach, or make it your morning ritual before a day in the water.',
        },
        {
          title: 'Affordable, Shareable, Instagrammable',
          description: 'A coffee-and-donut combo is one of the best-value treats in Waikiki, and a colorful box of mochi donuts photographs beautifully. It\'s an easy, feel-good stop that the whole group can share without breaking the budget.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Get Coffee & Donuts in Waikiki',
      intro: 'If you want real Kona coffee and fresh mochi donuts in one place, Kona Coffee Donut? is your spot.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Right on Kalākaua Avenue in the heart of Waikiki, Kona Coffee Donut? serves real 100% Kona coffee — poured from Honolulu Coffee\'s Kona beans — alongside fresh rice-flour mochi donuts, classic malasadas, and Korean bingsu. It\'s about a 5-minute walk from Waikiki Beach and open daily from 7AM to 9PM, so the perfect coffee-and-donut combo is always within reach.',
        highlights: [
          'Real 100% Kona coffee, not a blend',
          'Fresh rice-flour mochi donuts made daily',
          'Malasadas and Korean bingsu too',
          '~5 minutes from Waikiki Beach · open daily 7AM–9PM',
        ],
      },
      cta: 'View the Kona Coffee + Donut Menu',
    },
    howToEat: {
      title: 'Tips for the Perfect Pairing',
      subtitle: 'Get the Most Out of Your Kona Coffee & Mochi Donut',
      tips: [
        {
          title: 'Eat the Donut Fresh, Same Day',
          description: 'Mochi donuts are at their chewy best the day they\'re made. The rice-flour texture is springiest while fresh, so enjoy yours the same day rather than saving it — a fresh mochi donut and a hot Kona is hard to beat.',
        },
        {
          title: 'Sip the Coffee Black First',
          description: 'Before you add anything, take a sip of the 100% Kona on its own. It\'s smooth and low in acidity, so you\'ll taste its natural sweetness and clean finish. Then enjoy it with your donut — you\'ll appreciate the pairing even more.',
        },
        {
          title: 'Try a Chewy + a Glazed',
          description: 'Order at least two donuts — one plain glazed and one bolder flavor like ube or matcha. Alternating bites keeps every sip of coffee interesting and lets you find your own favorite combo.',
        },
        {
          title: 'Get a Mixed Box to Share',
          description: 'Coffee and donuts are made for sharing. Grab a mixed box of mochi donuts and a round of Kona coffees so everyone can sample a few flavors — it\'s the most fun (and best value) way to do it.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'Where can I get coffee and donuts in Waikiki?',
          answer: 'Kona Coffee Donut? at 2142 Kalakaua Ave serves real 100% Kona coffee and fresh rice-flour mochi donuts under one roof, right in the heart of Waikiki. It\'s about a 5-minute walk from Waikiki Beach and open daily from 7AM to 9PM, making it an easy stop for a morning or afternoon coffee-and-donut combo.',
        },
        {
          question: 'What is a mochi donut?',
          answer: 'A mochi donut is a donut made with mochiko (sweet rice flour) instead of wheat flour, usually shaped like a ring of connected dough balls called a pon-de-ring. The rice flour gives it a signature chewy, bouncy "QQ" texture that\'s soft and springy, and it\'s less sweet than a classic donut — which makes it a perfect match for coffee.',
        },
        {
          question: 'Is it real 100% Kona coffee?',
          answer: 'Yes. Kona Coffee Donut? pours real 100% Kona coffee from Honolulu Coffee\'s prized Kona beans — not a "Kona blend." True Kona coffee is grown only on the volcanic slopes of Hawaii Island and makes up less than 1% of the world\'s coffee. It\'s smooth, low in acidity, and naturally sweet, with no bitter edge.',
        },
        {
          question: 'What\'s the best donut to pair with Kona coffee?',
          answer: 'A classic glazed mochi donut with a hot 100% Kona coffee is the timeless combo — clean and comforting. For something richer, try an ube mochi donut with an iced Kona latte, or a strawberry mochi donut with a Kona pour-over for a bright, fruity contrast. Honestly, any fresh mochi donut works beautifully with Kona coffee.',
        },
        {
          question: 'How much is a coffee + donut?',
          answer: 'A coffee-and-donut combo is one of the best-value treats in Waikiki, which is why it\'s so easy to share a box of mochi donuts and a few coffees with the whole group. Prices vary by drink and flavor — check the current menu in store or online for exact pricing on Kona coffees, mochi donuts, and malasadas.',
        },
      ],
    },
    cta: {
      title: 'Try Waikiki\'s Perfect Pairing',
      text: 'Visit Kona Coffee Donut? at 2142 Kalakaua Ave and treat yourself to real 100% Kona coffee with a fresh mochi donut — just ~5 minutes from Waikiki Beach.',
      menuButton: 'View Coffee + Donut Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'Kona Coffee & Mochi Donut',
    },
  },
  ja: {
    hero: {
      title: 'コナコーヒー × モチドーナツ',
      subtitle: 'ワイキキ最高のペアリング — 本物の100%コナコーヒーと作りたてモチドーナツが一つの店で',
      updated: '2026年6月更新',
      readTime: '8分で読める',
    },
    definition: {
      title: 'コナコーヒー × モチドーナツのペアリングが特別な理由',
      text: '<strong>コナコーヒーとモチドーナツの組み合わせ</strong>こそ、ワイキキの<strong>Kona Coffee Donut?</strong>の原点です。<strong>なめらかで低酸味の100%コナコーヒー</strong>（ホノルルコーヒーの厳選コナ豆を使用）と、<strong>もちもちで甘さ控えめの米粉モチドーナツ</strong>を一緒に。この対比が魔法です。クリアで明るいコーヒーと、指でちぎれる柔らかく弾力のある「QQ」食感のドーナツ。ワイキキビーチから徒歩約5分、作りたてで味わえる、朝にも午後にも最高の一品です。',
    },
    history: {
      title: 'コナコーヒーとモチドーナツの物語',
      subtitle: '定番のコーヒー＆ドーナツを、ハワイ流に再発明',
      p1: 'コーヒーとドーナツは1世紀以上も親しまれてきた名コンビ。温かく甘い一口が、コーヒーを完成させてくれます。カラカウア通りの<strong>Kona Coffee Donut?</strong>では、この伝統にハワイのアレンジを。重くて甘い揚げドーナツの代わりに、軽くてもちもちのモチドーナツを。そして普通のドリップではなく、この島で育った本物の100%コナコーヒーを。',
      p2: '<strong>モチドーナツ</strong>は普通のドーナツとは違います。つながった生地玉のリング状 — 有名な<strong>ポンデリング</strong> — で、小麦ではなく<strong>もち粉（甘い米粉）</strong>で作られます。だから韓国や日本で<strong>「QQ」</strong>と呼ばれる、もちもちで弾力のある独特の食感に。柔らかく弾むようで、重くも脂っこくもありません。定番ドーナツより甘さ控えめだからこそ、コーヒーと相性抜群です。',
      p3: 'そしてコーヒーも本物。<strong>コナコーヒー</strong>はハワイ島コナ地区の火山斜面でのみ育ち、豊かな土壌、太陽、午後の雲が理想的な栽培環境を生みます。本物のコナは<strong>世界のコーヒーのわずか1%未満</strong>。「コナブレンド」ではない100%コナは、なめらかで酸味が少なく、自然な甘みがあり、苦味の角がありません。',
      p4: '二つを合わせれば、どこでも味わえるものではない一品に。<strong>本物の100%コナコーヒーと作りたての米粉モチドーナツが、ワイキキの一つの店で</strong>。これがKona Coffee Donut?の発想そのもの。砂浜から数分、コーヒーもドーナツもわざわざ行く価値のある、気軽な一軒です。',
    },
    comparison: {
      title: 'どのモチドーナツにどのコナドリンク？',
      subtitle: '自分だけの最高のコンボを見つけよう',
      intro: '何を頼むか迷ったら、気分でドーナツとコーヒーを合わせてみて。間違いない6つのコンボはこちら：',
      headers: {
        feature: '気分',
        bingsu: 'ドーナツ',
        shavedIce: 'コナドリンク',
        kakigori: '相性の理由',
      },
      rows: [
        {
          feature: '定番の朝',
          bingsu: 'クラシックグレーズドモチドーナツ',
          shavedIce: 'ホット100%コナコーヒー',
          kakigori: 'クリアで安心 — 永遠の定番ペアリング',
        },
        {
          feature: '贅沢気分',
          bingsu: 'ウベ（紫芋）モチドーナツ',
          shavedIce: 'アイスコナラテ',
          kakigori: 'クリーミーでナッティ、ミルキーな後味',
        },
        {
          feature: 'さわやか',
          bingsu: 'ストロベリーモチドーナツ',
          shavedIce: 'コナプアオーバー',
          kakigori: 'クリアなブラックコーヒーにフルーティーな対比',
        },
        {
          feature: 'アーシー',
          bingsu: '抹茶モチドーナツ',
          shavedIce: 'コナラテ',
          kakigori: 'ほろ苦さを温かいミルクがまろやかに',
        },
        {
          feature: 'ナッティ',
          bingsu: '黒ごまモチドーナツ',
          shavedIce: 'コナアフォガート',
          kakigori: '香ばしく甘い、リッチなエスプレッソがけ',
        },
        {
          feature: 'リフレッシュ',
          bingsu: 'リリコイ（パッションフルーツ）モチドーナツ',
          shavedIce: 'アイスコナコーヒー',
          kakigori: 'すべてを目覚めさせるトロピカルな爽快感',
        },
      ],
      note: '正直、どれを選んでも間違いなし。100%コナコーヒーと作りたてモチドーナツの組み合わせは鉄板です。ドーナツ2つとコーヒーを数杯頼んで、みんなでシェアしましょう。',
    },
    types: {
      title: '自分だけの最高のコナコーヒー＋ドーナツコンボの作り方',
      subtitle: '理想のワイキキオーダーへの簡単5ステップ',
      items: [
        {
          name: 'コナドリンクを選ぶ',
          korean: 'ホット・アイス・ラテ・プアオーバー',
          description: 'まずはコーヒーから。クリアな定番ならホット100%コナ、クリーミーならアイスコナラテ、豆そのものを味わうならコナプアオーバー。どれも「ブレンド」ではない本物のコナコーヒーで淹れます。',
          icon: '☕',
        },
        {
          name: 'モチドーナツの味を選ぶ',
          korean: 'グレーズド・ウベ・抹茶・いちご',
          description: 'もちもちの米粉モチドーナツを選びましょう。定番はクラシックグレーズド。ウベ、抹茶、黒ごま、いちごはそれぞれ個性たっぷり。普通のドーナツより甘さ控えめだから、コーヒーが常に主役です。',
          icon: '🍩',
        },
        {
          name: '定番が欲しいならマラサダを追加',
          korean: 'ハワイの定番',
          description: 'もっと伝統的なものが食べたい？温かいポルトガル系ハワイのマラサダを追加。ふわふわで砂糖をまぶした揚げたて。もちもちモチドーナツに対する昔ながらのドーナツで、コナコーヒーとの相性も抜群です。',
          icon: '🍥',
        },
        {
          name: 'ボックス＋コーヒーをシェア',
          korean: 'シェア向き',
          description: 'モチドーナツの詰め合わせボックスとコナコーヒーをみんなの分だけ。手頃でカラフル、グループにぴったり。一つに決めず、いろんな味を試せます。',
          icon: '🎁',
        },
        {
          name: 'ビーチへテイクアウト',
          korean: 'ビーチ仕様',
          description: 'ワイキキビーチは徒歩約5分。コーヒーとドーナツのボックスをテイクアウトして、海を眺めながら楽しみましょう。モチドーナツは持ち運びに強くもちもちが続くので、ビーチの朝のおやつに最適です。',
          icon: '🏖️',
        },
      ],
    },
    whyHawaii: {
      title: 'コナコーヒー＋モチドーナツがワイキキ必食の理由',
      points: [
        {
          title: '本物のコナと作りたてドーナツが一つの店に',
          description: 'たいていの店はどちらか一方 — 良いコーヒーか、良いドーナツか。Kona Coffee Donut?は両方。本物の100%コナコーヒーと、毎日作る米粉モチドーナツが同じ屋根の下に。妥協なし、もう一軒はしごする必要もありません。',
        },
        {
          title: '本土では味わえないもちもち食感',
          description: '米粉モチドーナツには、小麦のドーナツには出せない弾むような「QQ」食感があります。多くの旅行者にとって、最初のちぎれる一口はまったく新しい食感。軽くて満足感があり、意外と甘すぎません。',
        },
        {
          title: 'ワイキキビーチから徒歩約5分',
          description: 'カラカウア通りのワイキキ中心部、砂浜から徒歩約5分。ビーチへ向かう途中にコーヒーとドーナツを手に入れるもよし、海に入る前の朝のルーティンにするもよし。',
        },
        {
          title: '手頃で、シェアでき、映える',
          description: 'コーヒー＆ドーナツのコンボはワイキキでも屈指のコスパ。カラフルなモチドーナツのボックスは写真映えも抜群。予算を気にせずグループみんなでシェアできる、気軽でハッピーな一軒です。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキでコーヒー＆ドーナツを楽しむなら',
      intro: '本物のコナコーヒーと作りたてモチドーナツを一つの店で楽しむなら、Kona Coffee Donut?へ。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキ中心部のカラカウア通りに位置するKona Coffee Donut?は、本物の100%コナコーヒー（ホノルルコーヒーのコナ豆を使用）に加え、作りたての米粉モチドーナツ、定番のマラサダ、韓国ビンスを提供。ワイキキビーチから徒歩約5分、毎日朝7時から夜9時まで営業しているので、最高のコーヒー＆ドーナツのコンボがいつでも手の届くところに。',
        highlights: [
          'ブレンドではない本物の100%コナコーヒー',
          '毎日作る作りたて米粉モチドーナツ',
          'マラサダや韓国ビンスも',
          'ワイキキビーチから徒歩約5分・毎日朝7時〜夜9時営業',
        ],
      },
      cta: 'コナコーヒー＋ドーナツメニューを見る',
    },
    howToEat: {
      title: '完璧なペアリングのコツ',
      subtitle: 'コナコーヒー＆モチドーナツを最大限に楽しむために',
      tips: [
        {
          title: 'ドーナツは当日、作りたてを',
          description: 'モチドーナツは作った当日が一番もちもち。米粉の食感は新鮮なうちが最高に弾力的なので、取っておかずその日のうちに。作りたてのモチドーナツとホットのコナは、まさに至福です。',
        },
        {
          title: 'まずはコーヒーをブラックで一口',
          description: '何も加える前に、100%コナをそのまま一口。なめらかで酸味が少ないので、自然な甘みとクリアな後味が感じられます。それからドーナツと一緒に。ペアリングの良さがさらに分かります。',
        },
        {
          title: 'もちもち＋グレーズドを試す',
          description: 'ドーナツは最低2つ — プレーンなグレーズドと、ウベや抹茶など個性的な一つを。交互に食べれば、コーヒーの一口一口が楽しくなり、自分だけのお気に入りコンボが見つかります。',
        },
        {
          title: '詰め合わせボックスをシェア',
          description: 'コーヒーとドーナツはシェアのためにあるようなもの。モチドーナツの詰め合わせボックスとコナコーヒーを人数分頼んで、みんなでいろんな味を。一番楽しくて（一番お得な）楽しみ方です。',
        },
      ],
    },
    faq: {
      title: 'よくある質問',
      items: [
        {
          question: 'ワイキキでコーヒーとドーナツが買える場所は？',
          answer: '2142 Kalakaua AveのKona Coffee Donut?では、本物の100%コナコーヒーと作りたての米粉モチドーナツを一つの店で、ワイキキの中心で楽しめます。ワイキキビーチから徒歩約5分、毎日朝7時から夜9時まで営業しているので、朝でも午後でも気軽にコーヒー＆ドーナツのコンボを楽しめます。',
        },
        {
          question: 'モチドーナツとは何ですか？',
          answer: 'モチドーナツは、小麦粉ではなくもち粉（甘い米粉）で作るドーナツで、ポンデリングと呼ばれるつながった生地玉のリング状が一般的です。米粉が、もちもちで弾力のある独特の「QQ」食感を生み、柔らかく弾むよう。普通のドーナツより甘さ控えめで、コーヒーとの相性が抜群です。',
        },
        {
          question: '本物の100%コナコーヒーですか？',
          answer: 'はい。Kona Coffee Donut?は、ホノルルコーヒーの厳選コナ豆を使った本物の100%コナコーヒーを提供 —「コナブレンド」ではありません。本物のコナコーヒーはハワイ島の火山斜面でのみ育ち、世界のコーヒーのわずか1%未満。なめらかで酸味が少なく、自然な甘みがあり、苦味の角がありません。',
        },
        {
          question: 'コナコーヒーに合う一番のドーナツは？',
          answer: 'クラシックグレーズドのモチドーナツとホット100%コナコーヒーが永遠の定番 — クリアで安心の組み合わせです。もっとリッチにいくなら、ウベモチドーナツとアイスコナラテ、明るくフルーティーな対比ならストロベリーモチドーナツとコナプアオーバー。正直、作りたてのモチドーナツならどれもコナコーヒーと相性抜群です。',
        },
        {
          question: 'コーヒー＋ドーナツの値段は？',
          answer: 'コーヒー＆ドーナツのコンボはワイキキでも屈指のコスパ。だからこそ、モチドーナツのボックスとコーヒー数杯をグループ全員で気軽にシェアできます。価格はドリンクや味によって異なるので、コナコーヒー、モチドーナツ、マラサダの正確な価格は店頭またはオンラインの最新メニューでご確認ください。',
        },
      ],
    },
    cta: {
      title: 'ワイキキ最高のペアリングを',
      text: '2142 Kalakaua AveのKona Coffee Donut?で、本物の100%コナコーヒーと作りたてモチドーナツをご褒美に — ワイキキビーチから徒歩約5分。',
      menuButton: 'コーヒー＋ドーナツメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'コナコーヒー＆モチドーナツ',
    },
  },
  ko: {
    hero: {
      title: '코나 커피 & 모찌 도넛',
      subtitle: '와이키키 최고의 페어링 — 진짜 100% 코나 커피와 갓 구운 모찌 도넛을 한곳에서',
      updated: '2026년 6월 업데이트',
      readTime: '8분 소요',
    },
    definition: {
      title: '코나 커피 + 모찌 도넛 조합이 특별한 이유',
      text: '<strong>코나 커피와 모찌 도넛 조합</strong>은 와이키키 <strong>Kona Coffee Donut?</strong>의 출발점입니다. <strong>부드럽고 산미가 적은 100% 코나 커피</strong>(호놀룰루 커피의 엄선된 코나 원두로 추출)와 함께 <strong>쫀득하고 과하지 않게 단 쌀가루 모찌 도넛</strong>을 즐겨보세요. 이 대비가 바로 매력입니다. 깔끔하고 산뜻한 커피와, 손으로 쭉 찢어지는 부드럽고 쫄깃한 "QQ" 식감의 도넛. 와이키키 비치에서 도보 약 5분, 갓 만들어 내는 아침에도 오후에도 완벽한 한 끼입니다.',
    },
    history: {
      title: '코나 커피와 모찌 도넛 이야기',
      subtitle: '클래식한 커피 앤 도넛을 하와이 스타일로 재해석하다',
      p1: '커피와 도넛은 100년이 넘도록 함께해 온 명콤비입니다. 따뜻하고 달콤한 한 입이 커피 한 잔을 완성해 주죠. 칼라카우아 애비뉴의 <strong>Kona Coffee Donut?</strong>에서는 이 전통에 하와이만의 변주를 더했습니다. 무겁고 기름진 튀김 도넛 대신 가볍고 쫀득한 모찌 도넛을, 평범한 드립 대신 이 섬에서 자란 진짜 100% 코나 커피를.',
      p2: '<strong>모찌 도넛</strong>은 흔한 도넛이 아닙니다. 작은 반죽 구슬이 연결된 링 모양 — 그 유명한 <strong>폰데링</strong> — 으로, 밀가루가 아닌 <strong>찹쌀가루(모찌코)</strong>로 만듭니다. 그래서 한국과 일본에서 <strong>"쫀득쫀득(QQ)"</strong>이라 부르는 특유의 탱글탱글한 식감이 살아납니다. 부드럽고 탄력 있으며 절대 묵직하거나 느끼하지 않죠. 일반 도넛보다 덜 달기 때문에 커피와 더없이 잘 어울립니다.',
      p3: '커피도 진짜배기입니다. <strong>코나 커피</strong>는 오직 하와이 빅아일랜드 코나 지역의 화산 경사면에서만 자라며, 비옥한 토양과 햇살, 오후의 구름이 이상적인 재배 환경을 만들어 줍니다. 진짜 코나는 <strong>전 세계 커피의 1% 미만</strong>이며, "코나 블렌드"가 아닌 100% 코나는 부드럽고 산미가 낮으며 자연스러운 단맛이 있어 쓴맛의 거슬림이 없습니다.',
      p4: '이 둘을 한데 모으면 아무 데서나 만날 수 없는 조합이 완성됩니다. <strong>진짜 100% 코나 커피와 갓 구운 쌀가루 모찌 도넛을 와이키키 한곳에서</strong>. 이것이 바로 Kona Coffee Donut?의 발상입니다. 모래사장에서 몇 분 거리, 커피도 도넛도 일부러 찾아갈 가치가 있는 편안한 한 곳이죠.',
    },
    comparison: {
      title: '어떤 모찌 도넛에 어떤 코나 음료가 어울릴까',
      subtitle: '나만의 완벽한 조합 찾기',
      intro: '무엇을 주문할지 모르겠다면, 기분에 맞춰 도넛과 커피를 골라보세요. 실패 없는 6가지 조합을 소개합니다:',
      headers: {
        feature: '기분',
        bingsu: '도넛',
        shavedIce: '코나 음료',
        kakigori: '잘 어울리는 이유',
      },
      rows: [
        {
          feature: '클래식한 아침',
          bingsu: '클래식 글레이즈드 모찌 도넛',
          shavedIce: '따뜻한 100% 코나 커피',
          kakigori: '깔끔하고 편안한 — 변치 않는 정통 페어링',
        },
        {
          feature: '진하게',
          bingsu: '우베(보라색 고구마) 모찌 도넛',
          shavedIce: '아이스 코나 라떼',
          kakigori: '크리미하고 고소하며, 부드러운 우유의 마무리',
        },
        {
          feature: '산뜻하게',
          bingsu: '딸기 모찌 도넛',
          shavedIce: '코나 푸어오버',
          kakigori: '깔끔한 블랙 커피에 더해지는 상큼한 대비',
        },
        {
          feature: '구수하게',
          bingsu: '말차 모찌 도넛',
          shavedIce: '코나 라떼',
          kakigori: '은은한 쌉쌀함을 따뜻한 우유가 부드럽게',
        },
        {
          feature: '고소하게',
          bingsu: '흑임자 모찌 도넛',
          shavedIce: '코나 아포가토',
          kakigori: '고소하고 달콤하게, 진한 에스프레소를 부어',
        },
        {
          feature: '상큼한 활력',
          bingsu: '릴리코이(패션프루트) 모찌 도넛',
          shavedIce: '아이스 코나 커피',
          kakigori: '모든 걸 깨우는 트로피컬한 활력',
        },
      ],
      note: '솔직히 무엇을 골라도 실패가 없습니다. 100% 코나 커피와 갓 구운 모찌 도넛 조합은 그야말로 정답이죠. 도넛 두 개에 커피 몇 잔 시켜서 다 같이 나눠 드세요.',
    },
    types: {
      title: '나만의 완벽한 코나 커피 + 도넛 조합 만들기',
      subtitle: '이상적인 와이키키 주문을 위한 다섯 단계',
      items: [
        {
          name: '코나 음료 고르기',
          korean: '핫 · 아이스 · 라떼 · 푸어오버',
          description: '먼저 커피부터. 깔끔한 정통을 원한다면 따뜻한 100% 코나, 크리미한 걸 원한다면 아이스 코나 라떼, 원두 본연의 맛을 느끼고 싶다면 코나 푸어오버. 모든 메뉴는 블렌드가 아닌 진짜 코나 커피로 내립니다.',
          icon: '☕',
        },
        {
          name: '모찌 도넛 맛 고르기',
          korean: '글레이즈드 · 우베 · 말차 · 딸기',
          description: '쫀득한 쌀가루 모찌 도넛을 골라보세요. 무난한 인기 메뉴는 클래식 글레이즈드. 우베, 말차, 흑임자, 딸기는 저마다 개성이 가득합니다. 일반 도넛보다 덜 달아서 커피가 늘 주인공이 됩니다.',
          icon: '🍩',
        },
        {
          name: '정통이 당기면 말라사다 추가',
          korean: '하와이 클래식',
          description: '좀 더 전통적인 게 끌린다면, 따뜻한 포르투갈식 하와이 말라사다를 추가하세요. 폭신하고 설탕을 듬뿍 묻혀 갓 튀겨냅니다. 쫀득한 모찌에 대비되는 옛날식 도넛으로, 코나 한 잔과도 환상의 궁합입니다.',
          icon: '🍥',
        },
        {
          name: '박스 + 커피 함께 나누기',
          korean: '나눠 먹기 좋은',
          description: '모찌 도넛 모둠 박스와 코나 커피를 인원수만큼 주문하세요. 가격도 합리적이고 알록달록해서 여럿이 즐기기에 딱입니다. 하나만 정하지 않고 여러 맛을 골고루 맛볼 수 있죠.',
          icon: '🎁',
        },
        {
          name: '비치로 테이크아웃',
          korean: '비치 준비 완료',
          description: '와이키키 비치는 도보 약 5분 거리. 커피와 도넛 박스를 포장해서 바다를 보며 즐겨보세요. 모찌 도넛은 들고 다녀도 쫀득함이 유지돼서 해변의 아침 간식으로 안성맞춤입니다.',
          icon: '🏖️',
        },
      ],
    },
    whyHawaii: {
      title: '코나 커피 + 모찌 도넛 조합이 와이키키 필수인 이유',
      points: [
        {
          title: '진짜 코나 + 갓 구운 도넛을 한곳에서',
          description: '대부분은 둘 중 하나만 잘합니다 — 좋은 커피거나, 좋은 도넛이거나. Kona Coffee Donut?은 둘 다입니다. 진짜 100% 코나 커피와 매일 만드는 쌀가루 모찌 도넛이 한 지붕 아래에. 타협도, 두 번째 가게도 필요 없습니다.',
        },
        {
          title: '본토에서는 못 만나는 쫀득한 식감',
          description: '쌀가루 모찌 도넛에는 밀가루 도넛이 결코 따라올 수 없는 탱글탱글한 "QQ" 쫀득함이 있습니다. 많은 여행객에게 그 첫 한 입의 쭉 찢어지는 식감은 완전히 새로운 경험이죠. 가볍고 만족스러우면서 의외로 과하게 달지 않습니다.',
        },
        {
          title: '와이키키 비치에서 도보 약 5분',
          description: '칼라카우아 애비뉴 와이키키 한복판, 모래사장에서 도보 약 5분 거리입니다. 비치로 가는 길에 커피와 도넛을 챙기거나, 물놀이 전 아침 루틴으로 삼아보세요.',
        },
        {
          title: '합리적이고, 나눠 먹기 좋고, 인스타 감성',
          description: '커피 앤 도넛 조합은 와이키키에서 손꼽히는 가성비 간식이고, 알록달록한 모찌 도넛 박스는 사진도 예쁘게 나옵니다. 예산 부담 없이 모두가 나눠 먹을 수 있는, 부담 없고 기분 좋은 한 곳입니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 커피 & 도넛 즐기는 곳',
      intro: '진짜 코나 커피와 갓 구운 모찌 도넛을 한곳에서 즐기고 싶다면, Kona Coffee Donut?으로 오세요.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키 한복판 칼라카우아 애비뉴에 자리한 Kona Coffee Donut?은 진짜 100% 코나 커피(호놀룰루 커피의 코나 원두 사용)와 함께 갓 구운 쌀가루 모찌 도넛, 클래식 말라사다, 한국식 빙수까지 제공합니다. 와이키키 비치에서 도보 약 5분, 매일 오전 7시부터 밤 9시까지 영업해 완벽한 커피 앤 도넛 조합을 언제든 만날 수 있습니다.',
        highlights: [
          '블렌드가 아닌 진짜 100% 코나 커피',
          '매일 만드는 갓 구운 쌀가루 모찌 도넛',
          '말라사다와 한국식 빙수도',
          '와이키키 비치에서 도보 약 5분 · 매일 오전 7시~밤 9시 영업',
        ],
      },
      cta: '코나 커피 + 도넛 메뉴 보기',
    },
    howToEat: {
      title: '완벽한 페어링을 위한 팁',
      subtitle: '코나 커피 & 모찌 도넛을 200% 즐기는 법',
      tips: [
        {
          title: '도넛은 당일, 갓 구운 걸로',
          description: '모찌 도넛은 만든 그날이 가장 쫀득합니다. 쌀가루 식감은 신선할 때 가장 탱글탱글하니, 남겨두지 말고 그날 안에 드세요. 갓 구운 모찌 도넛과 따뜻한 코나 한 잔은 그야말로 최고입니다.',
        },
        {
          title: '커피는 먼저 블랙으로 한 모금',
          description: '무언가 더하기 전에, 100% 코나를 그대로 한 모금. 부드럽고 산미가 낮아 자연스러운 단맛과 깔끔한 여운이 느껴집니다. 그다음 도넛과 함께 즐기면 이 조합의 진가를 더 잘 알게 되죠.',
        },
        {
          title: '쫀득한 것 + 글레이즈드 함께',
          description: '도넛은 최소 두 개 — 플레인 글레이즈드 하나와 우베나 말차처럼 개성 있는 것 하나. 번갈아 먹으면 커피 한 모금 한 모금이 즐거워지고, 나만의 최애 조합도 찾게 됩니다.',
        },
        {
          title: '모둠 박스로 함께 나누기',
          description: '커피와 도넛은 나눠 먹으라고 있는 거죠. 모찌 도넛 모둠 박스와 코나 커피를 인원수만큼 주문해 여러 맛을 맛보세요. 가장 재미있고(그리고 가장 알뜰한) 방법입니다.',
        },
      ],
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        {
          question: '와이키키에서 커피와 도넛을 어디서 살 수 있나요?',
          answer: '2142 Kalakaua Ave의 Kona Coffee Donut?에서는 진짜 100% 코나 커피와 갓 구운 쌀가루 모찌 도넛을 와이키키 한복판 한곳에서 즐길 수 있습니다. 와이키키 비치에서 도보 약 5분, 매일 오전 7시부터 밤 9시까지 영업해 아침이든 오후든 부담 없이 커피 앤 도넛 조합을 맛볼 수 있습니다.',
        },
        {
          question: '모찌 도넛이 뭔가요?',
          answer: '모찌 도넛은 밀가루 대신 찹쌀가루(모찌코)로 만든 도넛으로, 보통 작은 반죽 구슬이 연결된 폰데링 모양입니다. 쌀가루가 특유의 쫀득하고 탱글탱글한 "QQ" 식감을 만들어 부드럽고 탄력 있으며, 일반 도넛보다 덜 달아 커피와 더없이 잘 어울립니다.',
        },
        {
          question: '진짜 100% 코나 커피인가요?',
          answer: '네. Kona Coffee Donut?은 호놀룰루 커피의 엄선된 코나 원두로 내린 진짜 100% 코나 커피를 제공합니다 — "코나 블렌드"가 아닙니다. 진짜 코나 커피는 오직 하와이 빅아일랜드의 화산 경사면에서만 자라며 전 세계 커피의 1% 미만입니다. 부드럽고 산미가 낮으며 자연스러운 단맛이 있어 쓴맛의 거슬림이 없습니다.',
        },
        {
          question: '코나 커피에 가장 잘 어울리는 도넛은?',
          answer: '클래식 글레이즈드 모찌 도넛과 따뜻한 100% 코나 커피가 변치 않는 정통 조합입니다 — 깔끔하고 편안하죠. 더 진하게 즐기려면 우베 모찌 도넛과 아이스 코나 라떼, 산뜻하고 상큼한 대비를 원하면 딸기 모찌 도넛과 코나 푸어오버를 추천합니다. 솔직히 갓 구운 모찌 도넛이라면 어떤 것이든 코나 커피와 환상의 궁합입니다.',
        },
        {
          question: '커피 + 도넛은 얼마인가요?',
          answer: '커피 앤 도넛 조합은 와이키키에서 손꼽히는 가성비 간식이라, 모찌 도넛 박스와 커피 몇 잔을 다 같이 나눠 먹기에 정말 좋습니다. 가격은 음료와 맛에 따라 다르니, 코나 커피·모찌 도넛·말라사다의 정확한 가격은 매장이나 온라인 최신 메뉴에서 확인해 주세요.',
        },
      ],
    },
    cta: {
      title: '와이키키 최고의 페어링을 즐겨보세요',
      text: '2142 Kalakaua Ave의 Kona Coffee Donut?에서 진짜 100% 코나 커피와 갓 구운 모찌 도넛으로 나를 위한 한 잔 — 와이키키 비치에서 도보 약 5분.',
      menuButton: '커피 + 도넛 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '코나 커피 & 모찌 도넛',
    },
  },
  zh: {
    hero: {
      title: '科纳咖啡 & 麻糬甜甜圈',
      subtitle: '威基基的完美搭配 — 正宗100%科纳咖啡与现做麻糬甜甜圈同在一处',
      updated: '2026年6月更新',
      readTime: '阅读约8分钟',
    },
    definition: {
      title: '科纳咖啡 + 麻糬甜甜圈的搭配为何如此特别？',
      text: '<strong>科纳咖啡与麻糬甜甜圈的组合</strong>正是威基基<strong>Kona Coffee Donut?</strong>的核心。你能享用一杯<strong>顺滑、低酸度的100%科纳咖啡</strong>（以檀香山咖啡精选科纳豆冲泡），搭配<strong>Q弹、甜度恰到好处的米粉麻糬甜甜圈</strong>。这种对比正是魔力所在：明亮干净的咖啡，配上柔软有弹性、能用手撕开的"QQ"口感甜甜圈。距威基基海滩仅约5分钟，新鲜现做，是威基基早晨或午后的理想之选。',
    },
    history: {
      title: '科纳咖啡与麻糬甜甜圈的故事',
      subtitle: '将经典的咖啡配甜甜圈，以夏威夷风格重新演绎',
      p1: '咖啡与甜甜圈相伴已逾百年——那温热香甜的一口，让一杯咖啡变得完整。在卡拉卡瓦大道的<strong>Kona Coffee Donut?</strong>，这一传统被赋予了夏威夷式的演绎：不是厚重甜腻的油炸甜甜圈，而是轻盈Q弹的麻糬甜甜圈；不是普通的滴滤咖啡，而是在这片岛屿上种植的正宗100%科纳咖啡。',
      p2: '<strong>麻糬甜甜圈</strong>与普通甜甜圈不同。它呈连珠环状——就是著名的<strong>"波堤"（pon-de-ring）</strong>——以<strong>糯米粉（mochiko）</strong>而非小麦粉制成。这赋予它标志性的Q弹有嚼劲口感，韩国人和日本人称之为<strong>"QQ"</strong>：柔软有弹性，绝不厚重油腻。它比经典甜甜圈甜度更低，正因如此才与咖啡如此相配。',
      p3: '而咖啡也是真材实料。<strong>科纳咖啡</strong>只生长在夏威夷大岛科纳地区的火山坡上，肥沃的土壤、阳光与午后云层共同造就了理想的生长环境。真正的科纳仅占<strong>全球咖啡产量的不到1%</strong>，而100%科纳——并非"科纳混合"——顺滑、酸度低、带有自然甜味，没有苦涩的边角。',
      p4: '将两者结合，你便拥有了别处难寻的体验：<strong>正宗100%科纳咖啡与现做米粉麻糬甜甜圈，同在威基基一处</strong>。这正是Kona Coffee Donut?的初衷——离沙滩几分钟之遥的一站，咖啡与甜甜圈都值得专程一访。',
    },
    comparison: {
      title: '哪款麻糬甜甜圈配哪款科纳饮品',
      subtitle: '找到属于你的完美组合',
      intro: '不知道点什么？按心情来搭配甜甜圈与咖啡吧。以下六组绝不会出错：',
      headers: {
        feature: '心情',
        bingsu: '甜甜圈',
        shavedIce: '科纳饮品',
        kakigori: '为何相配',
      },
      rows: [
        {
          feature: '经典早晨',
          bingsu: '经典糖霜麻糬甜甜圈',
          shavedIce: '热100%科纳咖啡',
          kakigori: '干净又暖心——永恒的经典搭配',
        },
        {
          feature: '浓郁享受',
          bingsu: '芋头（ube）麻糬甜甜圈',
          shavedIce: '冰科纳拿铁',
          kakigori: '绵密带坚果香，奶香顺滑收尾',
        },
        {
          feature: '清新',
          bingsu: '草莓麻糬甜甜圈',
          shavedIce: '科纳手冲',
          kakigori: '干净黑咖啡之上的果香对比',
        },
        {
          feature: '醇厚',
          bingsu: '抹茶麻糬甜甜圈',
          shavedIce: '科纳拿铁',
          kakigori: '微苦得宜，被温热牛奶柔化',
        },
        {
          feature: '坚果香',
          bingsu: '黑芝麻麻糬甜甜圈',
          shavedIce: '科纳阿芙佳朵',
          kakigori: '焦香微甜，浇上浓郁的浓缩咖啡',
        },
        {
          feature: '清爽提神',
          bingsu: '百香果（lilikoi）麻糬甜甜圈',
          shavedIce: '冰科纳咖啡',
          kakigori: '唤醒一切的热带活力',
        },
      ],
      note: '说实话，怎么选都不会错：任何100%科纳咖啡搭配一只现做麻糬甜甜圈都是绝配。点两只甜甜圈和几杯咖啡，大家一起分享吧。',
    },
    types: {
      title: '如何打造你的完美科纳咖啡 + 甜甜圈组合',
      subtitle: '通向理想威基基点单的简单五步',
      items: [
        {
          name: '选你的科纳饮品',
          korean: '热饮 · 冰饮 · 拿铁 · 手冲',
          description: '从咖啡开始。想要干净经典，选热100%科纳；想要绵密口感，选冰科纳拿铁；想品尝咖啡豆最纯粹的味道，就选科纳手冲。每一款都用正宗科纳咖啡冲泡，绝非混合豆。',
          icon: '☕',
        },
        {
          name: '选一款麻糬甜甜圈口味',
          korean: '糖霜 · 芋头 · 抹茶 · 草莓',
          description: '挑一只Q弹的米粉麻糬甜甜圈。经典糖霜是稳妥之选；芋头、抹茶、黑芝麻和草莓各有特色。它们比普通甜甜圈甜度更低，让咖啡始终是主角。',
          icon: '🍩',
        },
        {
          name: '想要经典就加一只马拉萨达',
          korean: '夏威夷经典',
          description: '想吃点更传统的？加一只温热的葡式夏威夷马拉萨达——蓬松、裹满糖粉、现炸出炉。它是Q弹麻糬之外的老派甜甜圈，同样钟爱一杯科纳咖啡。',
          icon: '🍥',
        },
        {
          name: '一盒甜甜圈 + 咖啡共享',
          korean: '适合分享',
          description: '点一盒什锦麻糬甜甜圈和几杯科纳咖啡给大家。实惠又缤纷，最适合一群人——不必只选一种，每种口味都能尝到。',
          icon: '🎁',
        },
        {
          name: '打包带去海滩',
          korean: '海滩必备',
          description: '威基基海滩步行约5分钟。把咖啡和一盒甜甜圈打包带走，伴着海景享用。麻糬甜甜圈耐携带、口感持久Q弹，是海滩早晨的理想小食。',
          icon: '🏖️',
        },
      ],
    },
    whyHawaii: {
      title: '为何科纳咖啡 + 麻糬甜甜圈组合是威基基必尝',
      points: [
        {
          title: '正宗科纳 + 现做甜甜圈，同在一处',
          description: '大多数店只擅长其一——要么好咖啡，要么好甜甜圈。Kona Coffee Donut?两者兼备：正宗100%科纳咖啡与每日现做的米粉麻糬甜甜圈，同在一个屋檐下。无需妥协，也无需再跑第二家。',
        },
        {
          title: '本土吃不到的Q弹口感',
          description: '米粉麻糬甜甜圈拥有那种弹牙的"QQ"嚼劲，是小麦甜甜圈无法企及的。对许多游客来说，第一口撕开的体验是全新的口感——轻盈、满足，而且意外地不太甜。',
        },
        {
          title: '距威基基海滩约5分钟',
          description: '就在卡拉卡瓦大道威基基的中心地带，距沙滩步行约5分钟。去海滩的路上顺手带上咖啡和甜甜圈，或把它作为下水前的晨间仪式。',
        },
        {
          title: '实惠、可分享、上镜',
          description: '咖啡配甜甜圈是威基基最超值的享受之一，而一盒缤纷的麻糬甜甜圈拍照也格外好看。这是一处轻松又愉悦的歇脚地，全家人都能分享，且不会超出预算。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基哪里能吃到咖啡 & 甜甜圈',
      intro: '如果你想在一处同时享用正宗科纳咖啡和现做麻糬甜甜圈，Kona Coffee Donut?就是你的选择。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '坐落于威基基中心卡拉卡瓦大道的Kona Coffee Donut?，供应正宗100%科纳咖啡（以檀香山咖啡的科纳豆冲泡），以及现做米粉麻糬甜甜圈、经典马拉萨达和韩式雪冰。距威基基海滩步行约5分钟，每天上午7点至晚上9点营业，让完美的咖啡配甜甜圈组合随时触手可及。',
        highlights: [
          '正宗100%科纳咖啡，绝非混合豆',
          '每日现做的米粉麻糬甜甜圈',
          '还有马拉萨达和韩式雪冰',
          '距威基基海滩约5分钟 · 每天上午7点至晚9点营业',
        ],
      },
      cta: '查看科纳咖啡 + 甜甜圈菜单',
    },
    howToEat: {
      title: '完美搭配的小贴士',
      subtitle: '尽享科纳咖啡 & 麻糬甜甜圈',
      tips: [
        {
          title: '甜甜圈当天趁新鲜吃',
          description: '麻糬甜甜圈在制作当天最为Q弹。米粉的口感在新鲜时弹性最佳，所以请当天享用，别留到隔天——一只新鲜麻糬甜甜圈配一杯热科纳，难以超越。',
        },
        {
          title: '先喝一口纯黑咖啡',
          description: '在加任何东西之前，先品一口纯粹的100%科纳。它顺滑且酸度低，你能尝到它的自然甜味与干净余韵。然后再配甜甜圈享用，你会更懂这份搭配的妙处。',
        },
        {
          title: '试一只Q弹 + 一只糖霜',
          description: '至少点两只甜甜圈——一只原味糖霜，一只更有个性的口味，比如芋头或抹茶。交替着吃，让每一口咖啡都保持新鲜感，也帮你找到专属的最爱组合。',
        },
        {
          title: '点一盒什锦一起分享',
          description: '咖啡和甜甜圈天生就是用来分享的。点一盒什锦麻糬甜甜圈和几杯科纳咖啡，让每个人都能尝几种口味——这是最有趣（也最划算）的吃法。',
        },
      ],
    },
    faq: {
      title: '常见问题',
      items: [
        {
          question: '在威基基哪里可以买到咖啡和甜甜圈？',
          answer: '位于2142 Kalakaua Ave的Kona Coffee Donut?在威基基中心一处即可享用正宗100%科纳咖啡和现做米粉麻糬甜甜圈。距威基基海滩步行约5分钟，每天上午7点至晚上9点营业，无论早晨还是午后，都能轻松享受咖啡配甜甜圈的组合。',
        },
        {
          question: '什么是麻糬甜甜圈？',
          answer: '麻糬甜甜圈是用糯米粉（mochiko）而非小麦粉制成的甜甜圈，通常呈连珠环状，称为"波堤"（pon-de-ring）。米粉赋予它标志性的Q弹有嚼劲"QQ"口感，柔软有弹性，且比经典甜甜圈甜度更低——因此与咖啡堪称绝配。',
        },
        {
          question: '是正宗的100%科纳咖啡吗？',
          answer: '是的。Kona Coffee Donut?以檀香山咖啡精选的科纳豆冲泡正宗100%科纳咖啡——并非"科纳混合"。真正的科纳咖啡只生长在夏威夷大岛的火山坡上，仅占全球咖啡产量的不到1%。它顺滑、酸度低、带有自然甜味，没有苦涩的边角。',
        },
        {
          question: '配科纳咖啡最好的甜甜圈是哪款？',
          answer: '经典糖霜麻糬甜甜圈配一杯热100%科纳咖啡，是永恒的经典组合——干净又暖心。想要更浓郁，可试芋头麻糬甜甜圈配冰科纳拿铁；想要明亮的果香对比，可选草莓麻糬甜甜圈配科纳手冲。说实话，任何现做麻糬甜甜圈都与科纳咖啡相得益彰。',
        },
        {
          question: '一份咖啡 + 甜甜圈多少钱？',
          answer: '咖啡配甜甜圈是威基基最超值的享受之一，所以一群人分享一盒麻糬甜甜圈和几杯咖啡非常划算。价格因饮品和口味而异——科纳咖啡、麻糬甜甜圈和马拉萨达的具体价格，请在店内或线上查看最新菜单。',
        },
      ],
    },
    cta: {
      title: '来体验威基基的完美搭配',
      text: '前往2142 Kalakaua Ave的Kona Coffee Donut?，用正宗100%科纳咖啡配一只现做麻糬甜甜圈犒赏自己——距威基基海滩仅约5分钟。',
      menuButton: '查看咖啡 + 甜甜圈菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '科纳咖啡 & 麻糬甜甜圈',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Kona Coffee & Mochi Donut: Waikiki\'s Perfect Pairing',
  description: 'Real 100% Kona coffee and fresh rice-flour mochi donuts under one roof in Waikiki. How to build the perfect coffee-and-donut combo at Kona Coffee Donut?, ~5 min from Waikiki Beach.',
  image: 'https://www.konacoffeedonut.com/images/blog/kona-coffee-and-donut-waikiki.jpeg',
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
  datePublished: '2026-06-21',
  dateModified: '2026-06-21',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/en/blog/kona-coffee-and-donut-waikiki',
  },
  keywords: 'kona coffee and donut, coffee and donuts waikiki, mochi donut and coffee waikiki, coffee donut pairing, best coffee and donut waikiki',
  wordCount: 1200,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I get coffee and donuts in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut? at 2142 Kalakaua Ave serves real 100% Kona coffee and fresh rice-flour mochi donuts under one roof, right in the heart of Waikiki. It is about a 5-minute walk from Waikiki Beach and open daily from 7AM to 9PM, making it an easy stop for a morning or afternoon coffee-and-donut combo.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a mochi donut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mochi donut is a donut made with mochiko (sweet rice flour) instead of wheat flour, usually shaped like a ring of connected dough balls called a pon-de-ring. The rice flour gives it a signature chewy, bouncy "QQ" texture that is soft and springy, and it is less sweet than a classic donut — which makes it a perfect match for coffee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it real 100% Kona coffee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Kona Coffee Donut? pours real 100% Kona coffee from Honolulu Coffee\'s prized Kona beans — not a "Kona blend." True Kona coffee is grown only on the volcanic slopes of Hawaii Island and makes up less than 1% of the world\'s coffee. It is smooth, low in acidity, and naturally sweet, with no bitter edge.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the best donut to pair with Kona coffee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A classic glazed mochi donut with a hot 100% Kona coffee is the timeless combo — clean and comforting. For something richer, try an ube mochi donut with an iced Kona latte, or a strawberry mochi donut with a Kona pour-over for a bright, fruity contrast. Any fresh mochi donut works beautifully with Kona coffee.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much is a coffee + donut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A coffee-and-donut combo is one of the best-value treats in Waikiki, which is why it is so easy to share a box of mochi donuts and a few coffees with the whole group. Prices vary by drink and flavor — check the current menu in store or online for exact pricing on Kona coffees, mochi donuts, and malasadas.',
      },
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

export default function KonaCoffeeAndDonutWaikikiPage() {
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

      <main className="min-h-screen bg-white">
      <SubpageNav locale={locale} />

      {/* Hero Image */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/images/blog/kona-coffee-and-donut-waikiki.jpeg"
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

        {/* History */}
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

        {/* Build Your Combo */}
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

        {/* Why It's a Waikiki Must */}
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

        {/* Where to Get */}
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

        {/* Tips for the Perfect Pairing */}
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
              href={`/${locale}/blog/best-mochi-donuts-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Best Mochi Donuts in Waikiki
            </Link>
            <Link
              href={`/${locale}/menu/kona-coffee`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Kona Coffee Menu
            </Link>
            <Link
              href={`/${locale}/menu/mochi-donuts`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Mochi Donuts Menu
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
