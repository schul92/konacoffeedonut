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
      title: 'Matcha Mochi Donut in Waikiki',
      subtitle: 'Where to Get the Green One — Chewy Pon-de-Ring with Real Matcha Glaze',
      updated: 'Updated June 2026',
      readTime: '7 min read',
    },
    definition: {
      title: 'What is a Matcha Mochi Donut?',
      text: 'A <strong>matcha mochi donut</strong> is a <strong>chewy rice-flour (mochiko) pon-de-ring donut</strong> finished with a real Japanese <strong>green-tea (matcha) glaze</strong>. Instead of a fluffy, cakey crumb, you get that signature <strong>bouncy, "QQ" chew</strong> — eight little dough balls joined in a ring that pull apart one by one. The earthy, slightly bitter matcha balances the gentle sweetness of the glaze, making it the <strong>grown-up pick among mochi donut flavors</strong>: photogenic, not too sweet, and impossible to stop at one.',
    },
    history: {
      title: 'The Story Behind the Matcha Mochi Donut',
      subtitle: 'From Japan\'s Pon-de-Ring to Hawaii\'s Mochi Donut Craze',
      p1: 'The mochi donut was born when Japan\'s beloved <strong>pon-de-ring</strong> — a ring of connected dough balls made chewy with tapioca and rice flour — met the American donut. The result was a donut with a completely different texture: light on the outside, irresistibly bouncy and chewy inside. As the style spread to Hawaii and the mainland, shops leaned into <strong>mochiko (sweet rice flour)</strong> to make that springy bite the star of the show.',
      p2: 'At the same time, <strong>matcha</strong> was having a moment far beyond the tea ceremony. Stone-ground Japanese green tea moved from the cup into lattes, soft serve, cheesecake, and glaze — prized for its vivid green color and its grassy, umami-rich, slightly bitter edge. For a generation that loves desserts that are flavorful but not cloying, matcha became the go-to "less sweet" flavor.',
      p3: 'Matcha and mochi are a natural match. The <strong>gentle bitterness of real matcha</strong> cuts through the sweetness of the glaze, while the <strong>chewy mochi texture</strong> gives every bite something to hold onto. It is the same balance that makes matcha + red bean or matcha + mochi work in Japanese sweets — just reimagined in donut form, and built for sharing and photographing.',
      p4: 'In <strong>Waikiki and across Hawaii</strong>, mochi donuts have become a fixture of the islands\' Asian-fusion dessert scene. Visitors from Japan, Korea, and the mainland come looking for that chewy pon-de-ring shape and bright flavors — ube purple, classic glazed, and, of course, that <strong>striking matcha green</strong>. Paired with 100% Kona coffee, a matcha mochi donut is a true taste of modern Hawaii.',
    },
    comparison: {
      title: 'Matcha Mochi Donut vs Other Mochi Donut Flavors',
      subtitle: 'How Does the Green One Compare?',
      intro: 'Matcha, ube, and classic glazed all share the same chewy pon-de-ring base — but they deliver very different experiences. Here\'s how they stack up:',
      headers: {
        feature: 'Flavor',
        bingsu: 'Matcha',
        shavedIce: 'Ube',
        kakigori: 'Classic',
      },
      rows: [
        {
          feature: 'Taste',
          bingsu: 'Earthy green tea, gentle bitterness, umami',
          shavedIce: 'Sweet, nutty, vanilla-like yam',
          kakigori: 'Pure sweet glaze, buttery',
        },
        {
          feature: 'Color',
          bingsu: 'Vivid matcha green',
          shavedIce: 'Bright purple',
          kakigori: 'Golden glazed',
        },
        {
          feature: 'Sweetness',
          bingsu: 'Low — balanced and grown-up',
          shavedIce: 'Medium — sweet but mellow',
          kakigori: 'High — classic sugar hit',
        },
        {
          feature: 'Who it\'s for',
          bingsu: 'Matcha lovers who like less-sweet treats',
          shavedIce: 'Fans of fun color and mellow sweetness',
          kakigori: 'Purists who want the OG donut taste',
        },
        {
          feature: 'Best pairing',
          bingsu: 'Iced 100% Kona latte',
          shavedIce: 'Kona latte',
          kakigori: 'Hot 100% Kona coffee',
        },
        {
          feature: 'Photogenic?',
          bingsu: 'Extremely — that green pops',
          shavedIce: 'Extremely — purple stunner',
          kakigori: 'Classic and clean',
        },
      ],
      note: 'If you like earthy, less-sweet desserts, matcha is the one to get. If you want a fun color with mellow sweetness, go ube — or just get a mixed box and try them side by side.',
    },
    types: {
      title: 'Matcha Treats & Pairings to Try',
      subtitle: 'Make the Most of the Green One',
      items: [
        {
          name: 'Matcha Mochi Donut',
          korean: 'The star',
          description: 'The chewy pon-de-ring with real matcha glaze. Earthy, not too sweet, and that unmistakable green color. Best eaten fresh the same day, while the glaze is glossy and the mochi is at its bounciest.',
          icon: '🍵',
        },
        {
          name: 'Matcha Donut + Iced Kona Latte',
          korean: 'Perfect pair',
          description: 'Matcha\'s grassy bitterness loves a smooth, chocolatey 100% Kona coffee. An iced Kona latte keeps things refreshing in the Waikiki heat and makes the whole thing feel like a proper treat.',
          icon: '🧋',
        },
        {
          name: 'Matcha in a Mixed Mochi Box',
          korean: 'Share it',
          description: 'Get matcha alongside ube, classic, and other flavors in one box. It\'s the most fun way to taste the lineup, perfect for a group, and the prettiest thing on the table for photos.',
          icon: '🍩',
        },
        {
          name: 'Matcha Donut To-Go for the Beach',
          korean: 'Grab & go',
          description: 'We\'re about 5 minutes from Waikiki Beach, so grab a matcha mochi donut and a coffee to go and enjoy them with an ocean view. The chewy texture travels well for a short walk.',
          icon: '🏖️',
        },
        {
          name: 'Seasonal Matcha Specials',
          korean: 'Limited time',
          description: 'Keep an eye out for rotating matcha specials and seasonal twists. Flavors come and go, so if you spot a special matcha mochi donut, it\'s worth grabbing while it lasts.',
          icon: '✨',
        },
      ],
    },
    whyHawaii: {
      title: 'Why Get a Matcha Mochi Donut in Waikiki',
      points: [
        {
          title: 'Chewy Mochi Texture You Can\'t Get on the Mainland',
          description: 'That bouncy, "QQ" pon-de-ring chew is the whole point of a mochi donut — and it\'s hard to find done well outside of Hawaii and Asia. Made fresh with rice flour, it\'s a texture experience most mainland donuts simply can\'t match.',
        },
        {
          title: 'Real Matcha, Not Too Sweet',
          description: 'A great matcha mochi donut leads with the earthy, umami flavor of real Japanese green tea, not just sugar and food coloring. The result is a donut that tastes grown-up and balanced — flavorful without the sugar crash.',
        },
        {
          title: 'Super Photogenic Green',
          description: 'That vivid matcha green against a chewy ring of dough is made for photos. Whether it\'s for the group chat or the feed, a matcha mochi donut with a Waikiki backdrop is one of the most shareable treats on the island.',
        },
        {
          title: 'Pairs with 100% Kona Coffee, ~5 Min from the Beach',
          description: 'Matcha and 100% Kona coffee are a dream pairing, and you can enjoy both just about 5 minutes from Waikiki Beach. It\'s the perfect mid-stroll stop for a chewy, photogenic, less-sweet treat.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Get a Matcha Mochi Donut in Waikiki',
      intro: 'If you\'re craving the green one in Waikiki, Kona Coffee Donut? is your spot.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Right on Kalakaua Avenue in the heart of Waikiki, Kona Coffee Donut? makes fresh rice-flour mochi donuts — matcha, ube, and more — paired with smooth 100% Kona coffee. Our matcha mochi donut brings together a chewy pon-de-ring and a real green-tea glaze, and we\'re only about 5 minutes from Waikiki Beach.',
        highlights: [
          'Fresh rice-flour mochi donuts in matcha, ube & more',
          'Made with real matcha glaze — earthy, not too sweet',
          'Paired with smooth 100% Kona coffee',
          'About 5 minutes from Waikiki Beach — open daily 7AM–9PM',
        ],
      },
      cta: 'View the Mochi Donut Menu',
    },
    howToEat: {
      title: 'Tips for the Best Matcha Mochi Donut',
      subtitle: 'Get the Most Out of the Green One',
      tips: [
        {
          title: 'Eat It Fresh, Same Day',
          description: 'Mochi donuts are best the day they\'re made, while the glaze is glossy and the rice-flour dough is at its chewiest. The signature bounce starts to fade after a day, so don\'t save it for later — enjoy it fresh.',
        },
        {
          title: 'Pair It with an Iced Kona Latte',
          description: 'Matcha\'s earthy, slightly bitter edge is made for a smooth 100% Kona coffee. An iced Kona latte keeps it refreshing in the Waikiki sun and rounds out the less-sweet matcha perfectly.',
        },
        {
          title: 'Try Matcha Next to Ube for Contrast',
          description: 'Tasting the earthy matcha right after the sweet, nutty ube makes both flavors pop. It\'s the best way to appreciate what makes matcha special — and the green-and-purple combo is unbeatable for photos.',
        },
        {
          title: 'Get a Mixed Box to Share',
          description: 'A mixed mochi donut box lets your group sample matcha, ube, classic, and more in one go. It\'s more fun, more photogenic, and the easiest way to find your new favorite flavor.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'Where can I get a matcha mochi donut in Waikiki?',
          answer: 'Kona Coffee Donut? at 2142 Kalakaua Ave, in the heart of Waikiki, makes fresh rice-flour matcha mochi donuts paired with 100% Kona coffee. It\'s only about 5 minutes from Waikiki Beach and open daily from 7AM to 9PM.',
        },
        {
          question: 'What is a mochi donut?',
          answer: 'A mochi donut is a donut made with rice flour (mochiko), which gives it a chewy, bouncy "QQ" texture instead of the soft, cakey crumb of a regular donut. It\'s usually shaped as a pon-de-ring — eight connected dough balls in a ring that pull apart one by one.',
        },
        {
          question: 'Is the matcha real and strong?',
          answer: 'Our matcha mochi donut is made with a real green-tea matcha glaze, so you get genuine earthy, umami flavor with a gentle bitterness — not just sweetness and food coloring. It\'s balanced and not too sweet, which is exactly why matcha fans love it.',
        },
        {
          question: 'How much is a mochi donut?',
          answer: 'Mochi donuts are an affordable treat, and prices are clearly listed on our mochi donut menu. The best value is a mixed box, which lets you try matcha, ube, classic, and other flavors together — perfect for sharing.',
        },
        {
          question: 'What coffee pairs with a matcha mochi donut?',
          answer: 'An iced 100% Kona latte is the ideal pairing. The smooth, chocolatey notes of Kona coffee complement matcha\'s earthy bitterness, and an iced drink keeps everything refreshing in the Waikiki heat.',
        },
      ],
    },
    cta: {
      title: 'Try the Matcha Mochi Donut in Waikiki',
      text: 'Visit Kona Coffee Donut? at 2142 Kalakaua Ave and treat yourself to a chewy matcha mochi donut with real green-tea glaze and 100% Kona coffee — about 5 minutes from Waikiki Beach.',
      menuButton: 'View Mochi Donut Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'Matcha Mochi Donut in Waikiki',
    },
  },
  ja: {
    hero: {
      title: 'ワイキキの抹茶モチドーナツ',
      subtitle: 'あの緑のドーナツはどこで？本格抹茶グレーズのもちもちポンデリング',
      updated: '2026年6月更新',
      readTime: '7分で読める',
    },
    definition: {
      title: '抹茶モチドーナツとは？',
      text: '<strong>抹茶モチドーナツ</strong>とは、<strong>米粉（もち粉）で作るもちもちのポンデリング</strong>に、本格的な日本の<strong>抹茶グレーズ</strong>をかけたドーナツです。ふんわりケーキ生地とは違い、<strong>あの弾むような「QQ（モチモチ）」食感</strong>が特徴。輪っか状につながった8つの生地玉を、ひとつずつちぎって楽しめます。抹茶のほろ苦さと土のような旨みが、グレーズのやさしい甘さと絶妙に調和。<strong>モチドーナツの中でも「大人な一品」</strong>で、写真映えし、甘すぎず、一個では止まりません。',
    },
    history: {
      title: '抹茶モチドーナツの物語',
      subtitle: '日本のポンデリングから、ハワイのモチドーナツブームへ',
      p1: 'モチドーナツは、日本で愛される<strong>ポンデリング</strong>——タピオカと米粉でもちもちにした、つながった生地玉の輪っか——とアメリカのドーナツが出会って生まれました。その結果、外は軽く、中はたまらなくもちもちの、まったく新しい食感のドーナツに。スタイルがハワイや本土に広がるにつれ、各店は<strong>もち粉</strong>を使い、あの弾力ある食感を主役に押し上げていきました。',
      p2: '同じ頃、<strong>抹茶</strong>は茶道の枠を超えて大ブームに。石臼で挽いた日本の緑茶は、ラテ、ソフトクリーム、チーズケーキ、そしてグレーズへと広がり、鮮やかな緑色と、草のような旨み、ほろ苦さで愛されました。美味しくても甘ったるくないデザートを好む世代にとって、抹茶は<strong>「甘さ控えめ」の定番フレーバー</strong>となったのです。',
      p3: '抹茶とモチは相性抜群です。<strong>本格抹茶のやさしい苦み</strong>がグレーズの甘さを引き締め、<strong>もちもちのモチ食感</strong>が一口ごとに満足感を与えてくれます。抹茶＋あんこ、抹茶＋お餅が和菓子で美味しいのと同じバランスを、ドーナツの形に再構築したもの。シェアにも写真にもぴったりです。',
      p4: '<strong>ワイキキ、そしてハワイ全土</strong>で、モチドーナツは島のアジアンフュージョン・デザートの定番になりました。日本、韓国、本土からの旅行者が、あのもちもちのポンデリング形と鮮やかなフレーバー——紫のウベ、定番グレーズ、そしてもちろん<strong>あの鮮烈な抹茶グリーン</strong>——を求めて訪れます。100%コナコーヒーと合わせれば、抹茶モチドーナツは現代ハワイの味そのものです。',
    },
    comparison: {
      title: '抹茶モチドーナツ vs 他のモチドーナツフレーバー',
      subtitle: '緑のドーナツは何が違う？',
      intro: '抹茶、ウベ、定番グレーズはどれも同じもちもちのポンデリング生地ですが、味わいはまったく異なります。比べてみましょう：',
      headers: {
        feature: 'フレーバー',
        bingsu: '抹茶',
        shavedIce: 'ウベ',
        kakigori: '定番',
      },
      rows: [
        {
          feature: '味わい',
          bingsu: '土のような抹茶、やさしい苦み、旨み',
          shavedIce: '甘くてナッツ感、バニラのような紫芋',
          kakigori: '純粋に甘いグレーズ、バター感',
        },
        {
          feature: '色',
          bingsu: '鮮やかな抹茶グリーン',
          shavedIce: '鮮やかな紫',
          kakigori: '黄金色のグレーズ',
        },
        {
          feature: '甘さ',
          bingsu: '控えめ——バランスの良い大人の味',
          shavedIce: '中くらい——甘いがまろやか',
          kakigori: '高め——定番の甘さ',
        },
        {
          feature: 'こんな人に',
          bingsu: '甘さ控えめが好きな抹茶ラバー',
          shavedIce: '楽しい色とまろやかな甘さが好きな人',
          kakigori: '王道の味を求めるドーナツ純粋派',
        },
        {
          feature: 'おすすめペア',
          bingsu: 'アイス100%コナラテ',
          shavedIce: 'コナラテ',
          kakigori: 'ホット100%コナコーヒー',
        },
        {
          feature: '写真映え？',
          bingsu: '抜群——緑が映える',
          shavedIce: '抜群——紫の美しさ',
          kakigori: '定番できれい',
        },
      ],
      note: '土っぽく甘さ控えめのデザートが好きなら、抹茶が一番。楽しい色とまろやかな甘さが欲しいならウベを。迷ったらミックスボックスで食べ比べるのがおすすめです。',
    },
    types: {
      title: '試したい抹茶メニュー＆ペアリング',
      subtitle: '緑のドーナツを最大限に楽しむ',
      items: [
        {
          name: '抹茶モチドーナツ',
          korean: '主役',
          description: '本格抹茶グレーズをかけたもちもちのポンデリング。土のような風味で甘さ控えめ、そしてあの間違いない緑色。グレーズがつやつやでモチが一番弾むその日のうちに食べるのが最高です。',
          icon: '🍵',
        },
        {
          name: '抹茶ドーナツ＋アイスコナラテ',
          korean: '黄金ペア',
          description: '抹茶の草のような苦みは、なめらかでチョコのような100%コナコーヒーと相性抜群。アイスコナラテならワイキキの暑さでも爽やかで、ぐっとご褒美感が増します。',
          icon: '🧋',
        },
        {
          name: 'ミックスモチボックスの抹茶',
          korean: 'シェア',
          description: '抹茶をウベや定番など他のフレーバーと一緒に一箱で。ラインナップを味わう一番楽しい方法で、グループにもぴったり。テーブルの上で一番フォトジェニックです。',
          icon: '🍩',
        },
        {
          name: 'ビーチ用テイクアウト抹茶ドーナツ',
          korean: '持ち帰り',
          description: 'ワイキキビーチまで徒歩約5分。抹茶モチドーナツとコーヒーを持ち帰って、オーシャンビューと一緒に楽しめます。もちもち食感は短い散歩にもよく持ちます。',
          icon: '🏖️',
        },
        {
          name: '季節限定の抹茶スペシャル',
          korean: '期間限定',
          description: '入れ替わる抹茶スペシャルや季節のアレンジにも注目を。フレーバーは登場しては消えるので、特別な抹茶モチドーナツを見つけたら、ある内にぜひ。',
          icon: '✨',
        },
      ],
    },
    whyHawaii: {
      title: 'ワイキキで抹茶モチドーナツを食べるべき理由',
      points: [
        {
          title: '本土では味わえないもちもち食感',
          description: 'あの弾む「QQ（モチモチ）」のポンデリング食感こそモチドーナツの真骨頂。ハワイやアジア以外で上手に作っているお店はなかなかありません。米粉で作りたてのこの食感は、本土の多くのドーナツでは再現できません。',
        },
        {
          title: '本格抹茶、甘すぎない',
          description: '美味しい抹茶モチドーナツは、砂糖と着色料ではなく、本物の日本の緑茶の土のような旨みが主役。だからこそ、大人っぽくバランスの取れた味わいに。甘さでくどくならず、しっかり風味が楽しめます。',
        },
        {
          title: '抜群に写真映えする緑',
          description: 'もちもちの生地の輪に映える、鮮やかな抹茶グリーンはまさに写真向き。グループチャット用でもSNS用でも、ワイキキを背景にした抹茶モチドーナツは島で一番シェアしたくなるスイーツのひとつです。',
        },
        {
          title: '100%コナコーヒーと、ビーチから徒歩約5分',
          description: '抹茶と100%コナコーヒーは夢の組み合わせ。しかもワイキキビーチから徒歩約5分で両方楽しめます。もちもちで写真映え、甘さ控えめのご褒美に、散歩の途中の立ち寄りスポットとして最適です。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキで抹茶モチドーナツを買うなら',
      intro: 'ワイキキで緑のドーナツが食べたいなら、Kona Coffee Donut? へ。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心、カラカウア通り沿いにあるKona Coffee Donut? では、米粉のモチドーナツ——抹茶、ウベ、その他いろいろ——をなめらかな100%コナコーヒーと一緒に提供しています。抹茶モチドーナツは、もちもちのポンデリングに本格抹茶グレーズを合わせた一品。ワイキキビーチから徒歩約5分です。',
        highlights: [
          '抹茶・ウベなど、米粉の作りたてモチドーナツ',
          '本格抹茶グレーズ——土っぽく、甘すぎない',
          'なめらかな100%コナコーヒーと一緒に',
          'ワイキキビーチから徒歩約5分——毎日7時〜21時営業',
        ],
      },
      cta: 'モチドーナツメニューを見る',
    },
    howToEat: {
      title: '最高の抹茶モチドーナツのためのコツ',
      subtitle: '緑のドーナツを味わい尽くす',
      tips: [
        {
          title: '作りたて、その日のうちに食べる',
          description: 'モチドーナツは作られたその日が一番。グレーズがつやつやで、米粉生地が一番もちもちの状態です。あの弾力は一日経つと薄れていくので、後回しにせず作りたてを楽しんで。',
        },
        {
          title: 'アイスコナラテと合わせる',
          description: '抹茶の土っぽくほろ苦い風味は、なめらかな100%コナコーヒーにぴったり。アイスコナラテならワイキキの日差しの中でも爽やかで、甘さ控えめの抹茶を完璧に引き立てます。',
        },
        {
          title: 'ウベと並べて食べ比べる',
          description: '甘くてナッツ感のあるウベの直後に土っぽい抹茶を味わうと、どちらの風味も際立ちます。抹茶の魅力を一番感じられる食べ方で、緑と紫の組み合わせは写真にも最強です。',
        },
        {
          title: 'ミックスボックスでシェア',
          description: 'ミックスモチドーナツボックスなら、抹茶、ウベ、定番などを一度に味わえます。より楽しく、より写真映えし、新しいお気に入りフレーバーを見つける一番簡単な方法です。',
        },
      ],
    },
    faq: {
      title: 'よくある質問',
      items: [
        {
          question: 'ワイキキで抹茶モチドーナツはどこで買えますか？',
          answer: 'ワイキキの中心、2142 Kalakaua Ave にある Kona Coffee Donut? で、米粉の抹茶モチドーナツを作りたてで提供しています。100%コナコーヒーと一緒にどうぞ。ワイキキビーチから徒歩約5分、毎日7時〜21時営業です。',
        },
        {
          question: 'モチドーナツとは何ですか？',
          answer: 'モチドーナツは米粉（もち粉）で作るドーナツで、普通のドーナツのふんわりケーキ生地ではなく、もちもち弾む「QQ」食感が特徴です。通常はポンデリング型——輪っか状につながった8つの生地玉で、ひとつずつちぎって食べられます。',
        },
        {
          question: '抹茶は本物で、しっかりしていますか？',
          answer: '当店の抹茶モチドーナツは本格的な抹茶グレーズを使用。砂糖や着色料だけでなく、本物の土っぽい旨みとやさしい苦みが感じられます。バランスが良く甘すぎないので、抹茶好きにこそ人気です。',
        },
        {
          question: 'モチドーナツの値段はいくらですか？',
          answer: 'モチドーナツはお手頃なご褒美で、価格はモチドーナツメニューに分かりやすく記載しています。一番お得なのはミックスボックスで、抹茶、ウベ、定番などをまとめて楽しめてシェアにも最適です。',
        },
        {
          question: '抹茶モチドーナツに合うコーヒーは？',
          answer: 'アイスの100%コナラテが理想のペアリングです。コナコーヒーのなめらかでチョコのような風味が抹茶の土っぽい苦みを引き立て、アイスならワイキキの暑さでも爽やかに楽しめます。',
        },
      ],
    },
    cta: {
      title: 'ワイキキで抹茶モチドーナツを',
      text: '2142 Kalakaua Ave の Kona Coffee Donut? で、本格抹茶グレーズのもちもち抹茶モチドーナツと100%コナコーヒーをどうぞ。ワイキキビーチから徒歩約5分です。',
      menuButton: 'モチドーナツメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'ワイキキの抹茶モチドーナツ',
    },
  },
  ko: {
    hero: {
      title: '와이키키 말차 모찌 도넛',
      subtitle: '그 초록 도넛, 어디서 먹지? — 진짜 말차 글레이즈를 입힌 쫀득 폰데링',
      updated: '2026년 6월 업데이트',
      readTime: '7분 소요',
    },
    definition: {
      title: '말차 모찌 도넛이란?',
      text: '<strong>말차 모찌 도넛</strong>은 <strong>쌀가루(모찌코)로 만든 쫀득한 폰데링 도넛</strong>에 진짜 일본 <strong>녹차(말차) 글레이즈</strong>를 입힌 도넛입니다. 폭신한 케이크 식감이 아니라, 바로 그 <strong>탱글탱글한 "쫀득(QQ)" 식감</strong>이 특징이죠. 링 모양으로 이어진 여덟 개의 반죽 볼을 하나씩 떼어 먹는 재미가 있습니다. 말차의 흙내음 같은 감칠맛과 은은한 쌉쌀함이 글레이즈의 부드러운 단맛과 절묘하게 어우러져, <strong>모찌 도넛 중에서도 가장 "어른스러운" 선택</strong>이 됩니다. 사진도 잘 받고, 너무 달지 않으며, 하나로는 절대 멈출 수 없습니다.',
    },
    history: {
      title: '말차 모찌 도넛 이야기',
      subtitle: '일본의 폰데링에서 하와이의 모찌 도넛 열풍까지',
      p1: '모찌 도넛은 일본인이 사랑하는 <strong>폰데링</strong>——타피오카와 쌀가루로 쫀득하게 만든, 이어 붙인 반죽 볼의 링——이 미국식 도넛과 만나며 탄생했습니다. 그 결과 겉은 가볍고 속은 거부할 수 없이 쫀득한, 완전히 새로운 식감의 도넛이 됐죠. 이 스타일이 하와이와 미국 본토로 퍼지면서 가게들은 <strong>찹쌀가루(모찌코)</strong>를 적극 활용해 그 쫀득한 식감을 주인공으로 끌어올렸습니다.',
      p2: '같은 시기, <strong>말차</strong>는 다도(茶道)를 훨씬 넘어선 대유행을 맞이했습니다. 맷돌로 곱게 간 일본 녹차는 라떼, 소프트아이스크림, 치즈케이크, 그리고 글레이즈로까지 영역을 넓히며 선명한 초록빛과 풀향 가득한 감칠맛, 은은한 쌉쌀함으로 사랑받았습니다. 맛있으면서도 과하게 달지 않은 디저트를 좋아하는 세대에게, 말차는 <strong>"덜 단" 디저트의 대표 플레이버</strong>가 되었습니다.',
      p3: '말차와 모찌는 천생연분입니다. <strong>진짜 말차의 은은한 쌉쌀함</strong>이 글레이즈의 단맛을 잡아주고, <strong>쫀득한 모찌 식감</strong>이 한 입 한 입 씹는 즐거움을 더합니다. 말차+팥, 말차+찹쌀떡이 일본 화과자에서 잘 어울리는 것과 같은 균형을, 도넛 형태로 재해석한 것이죠. 나눠 먹기에도, 사진 찍기에도 완벽합니다.',
      p4: '<strong>와이키키와 하와이 전역</strong>에서 모찌 도넛은 섬의 아시안 퓨전 디저트 신을 대표하는 메뉴가 됐습니다. 일본, 한국, 미국 본토에서 온 여행객들이 그 쫀득한 폰데링 모양과 선명한 색감——보라색 우베, 클래식 글레이즈, 그리고 물론 <strong>강렬한 말차 그린</strong>——을 찾아옵니다. 100% 코나 커피와 함께라면, 말차 모찌 도넛은 현대 하와이의 맛 그 자체입니다.',
    },
    comparison: {
      title: '말차 모찌 도넛 vs 다른 모찌 도넛 맛',
      subtitle: '그 초록 도넛은 뭐가 다를까?',
      intro: '말차, 우베, 클래식 글레이즈는 모두 같은 쫀득한 폰데링 반죽을 쓰지만, 맛의 경험은 완전히 다릅니다. 한눈에 비교해 보세요:',
      headers: {
        feature: '맛',
        bingsu: '말차',
        shavedIce: '우베',
        kakigori: '클래식',
      },
      rows: [
        {
          feature: '풍미',
          bingsu: '흙내음 녹차, 은은한 쌉쌀함, 감칠맛',
          shavedIce: '달콤하고 고소한, 바닐라 같은 자색고구마',
          kakigori: '순수하게 달콤한 글레이즈, 버터 풍미',
        },
        {
          feature: '색',
          bingsu: '선명한 말차 그린',
          shavedIce: '화사한 보라색',
          kakigori: '황금빛 글레이즈',
        },
        {
          feature: '단맛',
          bingsu: '낮음 — 균형 잡힌 어른의 맛',
          shavedIce: '중간 — 달지만 부드러움',
          kakigori: '높음 — 클래식한 단맛',
        },
        {
          feature: '이런 분께',
          bingsu: '덜 단 디저트를 좋아하는 말차 러버',
          shavedIce: '예쁜 색과 부드러운 단맛을 좋아하는 분',
          kakigori: '정통 도넛 맛을 원하는 클래식파',
        },
        {
          feature: '추천 페어링',
          bingsu: '아이스 100% 코나 라떼',
          shavedIce: '코나 라떼',
          kakigori: '따뜻한 100% 코나 커피',
        },
        {
          feature: '사진 잘 받나요?',
          bingsu: '아주 잘 — 초록이 톡 튀어요',
          shavedIce: '아주 잘 — 보라색 미모',
          kakigori: '클래식하고 깔끔',
        },
      ],
      note: '흙내음 나는 덜 단 디저트를 좋아한다면 말차가 정답입니다. 예쁜 색에 부드러운 단맛을 원한다면 우베로. 고민된다면 믹스 박스로 나란히 맛보는 걸 추천해요.',
    },
    types: {
      title: '함께 즐기면 좋은 말차 메뉴 & 페어링',
      subtitle: '그 초록 도넛을 200% 즐기는 법',
      items: [
        {
          name: '말차 모찌 도넛',
          korean: '주인공',
          description: '진짜 말차 글레이즈를 입힌 쫀득한 폰데링. 흙내음 풍미에 너무 달지 않고, 누가 봐도 알아보는 초록빛. 글레이즈가 반질반질하고 모찌가 가장 쫀득한 당일에 먹는 게 최고입니다.',
          icon: '🍵',
        },
        {
          name: '말차 도넛 + 아이스 코나 라떼',
          korean: '환상의 짝',
          description: '말차의 풀향 쌉쌀함은 부드럽고 초콜릿 같은 100% 코나 커피와 찰떡입니다. 아이스 코나 라떼는 와이키키 더위에도 시원하고, 제대로 된 디저트 타임처럼 느껴지게 해줍니다.',
          icon: '🧋',
        },
        {
          name: '믹스 모찌 박스 속 말차',
          korean: '나눠 먹기',
          description: '말차를 우베, 클래식 등 여러 맛과 한 박스에. 라인업을 맛보는 가장 즐거운 방법이자 여럿이 나눠 먹기 딱 좋고, 테이블 위에서 가장 예쁜 사진 주인공이 됩니다.',
          icon: '🍩',
        },
        {
          name: '해변용 테이크아웃 말차 도넛',
          korean: '포장 고고',
          description: '와이키키 비치에서 도보 약 5분. 말차 모찌 도넛과 커피를 포장해 오션뷰와 함께 즐겨보세요. 쫀득한 식감은 짧은 산책길에도 잘 버팁니다.',
          icon: '🏖️',
        },
        {
          name: '시즌 한정 말차 스페셜',
          korean: '한정판',
          description: '돌아가며 나오는 말차 스페셜과 시즌 메뉴도 눈여겨보세요. 맛은 왔다 가니, 특별한 말차 모찌 도넛을 발견하면 있을 때 꼭 잡으세요.',
          icon: '✨',
        },
      ],
    },
    whyHawaii: {
      title: '와이키키에서 말차 모찌 도넛을 먹어야 하는 이유',
      points: [
        {
          title: '본토에선 못 먹는 쫀득한 모찌 식감',
          description: '탱글탱글 "쫀득(QQ)"한 폰데링 식감이야말로 모찌 도넛의 핵심인데, 하와이와 아시아 밖에서는 제대로 만드는 곳을 찾기 어렵습니다. 쌀가루로 갓 만든 이 식감은 본토의 일반 도넛으로는 흉내 내기 힘든 경험입니다.',
        },
        {
          title: '진짜 말차, 너무 달지 않게',
          description: '맛있는 말차 모찌 도넛은 설탕과 색소가 아니라 진짜 일본 녹차의 흙내음 감칠맛이 주인공입니다. 그래서 어른스럽고 균형 잡힌 맛이 나고, 단맛에 물리지 않으면서 풍미를 제대로 즐길 수 있습니다.',
        },
        {
          title: '사진 진짜 잘 받는 초록빛',
          description: '쫀득한 반죽 링 위에 선명한 말차 그린은 그야말로 사진용입니다. 단톡방용이든 피드용이든, 와이키키를 배경으로 한 말차 모찌 도넛은 섬에서 가장 공유하고 싶은 디저트 중 하나예요.',
        },
        {
          title: '100% 코나 커피와, 해변에서 도보 약 5분',
          description: '말차와 100% 코나 커피는 꿈의 조합이고, 와이키키 비치에서 도보 약 5분이면 둘 다 즐길 수 있습니다. 쫀득하고 사진 잘 받고 덜 단 디저트가 당길 때, 산책 중간에 들르기 딱 좋은 곳입니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 말차 모찌 도넛 사는 곳',
      intro: '와이키키에서 그 초록 도넛이 당긴다면, Kona Coffee Donut? 으로 오세요.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키 중심 칼라카우아 애비뉴에 자리한 Kona Coffee Donut? 은 쌀가루 모찌 도넛——말차, 우베 등——을 부드러운 100% 코나 커피와 함께 갓 만들어 냅니다. 말차 모찌 도넛은 쫀득한 폰데링에 진짜 녹차 글레이즈를 입힌 메뉴로, 와이키키 비치에서 도보 약 5분 거리입니다.',
        highlights: [
          '말차·우베 등 쌀가루로 갓 만든 모찌 도넛',
          '진짜 말차 글레이즈 — 흙내음 풍미, 너무 달지 않게',
          '부드러운 100% 코나 커피와 함께',
          '와이키키 비치에서 도보 약 5분 — 매일 오전 7시~오후 9시 영업',
        ],
      },
      cta: '모찌 도넛 메뉴 보기',
    },
    howToEat: {
      title: '가장 맛있는 말차 모찌 도넛을 위한 팁',
      subtitle: '그 초록 도넛을 제대로 즐기는 법',
      tips: [
        {
          title: '만든 당일, 신선할 때 먹기',
          description: '모찌 도넛은 만든 그날이 가장 맛있습니다. 글레이즈가 반질반질하고 쌀가루 반죽이 가장 쫀득할 때죠. 그 특유의 탱글함은 하루만 지나도 줄어드니, 미루지 말고 신선할 때 즐기세요.',
        },
        {
          title: '아이스 코나 라떼와 페어링',
          description: '말차의 흙내음 나는 은은한 쌉쌀함은 부드러운 100% 코나 커피와 천생연분입니다. 아이스 코나 라떼는 와이키키 햇살 속에서도 시원하고, 덜 단 말차를 완벽하게 마무리해 줍니다.',
        },
        {
          title: '우베와 나란히 두고 맛 비교하기',
          description: '달고 고소한 우베 바로 다음에 흙내음 나는 말차를 맛보면 두 맛이 모두 살아납니다. 말차의 매력을 가장 잘 느끼는 방법이자, 초록-보라 조합은 사진용으로 최강입니다.',
        },
        {
          title: '믹스 박스로 나눠 먹기',
          description: '믹스 모찌 도넛 박스면 말차, 우베, 클래식 등을 한 번에 맛볼 수 있습니다. 더 즐겁고, 더 사진 잘 받고, 나만의 새 최애 맛을 찾는 가장 쉬운 방법이에요.',
        },
      ],
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        {
          question: '와이키키에서 말차 모찌 도넛은 어디서 살 수 있나요?',
          answer: '와이키키 중심 2142 Kalakaua Ave에 있는 Kona Coffee Donut? 에서 쌀가루 말차 모찌 도넛을 갓 만들어 100% 코나 커피와 함께 제공합니다. 와이키키 비치에서 도보 약 5분 거리이고, 매일 오전 7시부터 오후 9시까지 영업합니다.',
        },
        {
          question: '모찌 도넛이 뭔가요?',
          answer: '모찌 도넛은 쌀가루(모찌코)로 만든 도넛으로, 일반 도넛의 폭신한 케이크 식감 대신 쫀득하고 탱글한 "쫀득(QQ)" 식감이 특징입니다. 보통 폰데링 모양——링으로 이어진 여덟 개의 반죽 볼——이라 하나씩 떼어 먹을 수 있습니다.',
        },
        {
          question: '말차는 진짜인가요? 진하나요?',
          answer: '저희 말차 모찌 도넛은 진짜 녹차 말차 글레이즈로 만들어, 설탕과 색소만이 아니라 진짜 흙내음 감칠맛과 은은한 쌉쌀함이 살아 있습니다. 균형 잡히고 너무 달지 않아서, 바로 그 점 때문에 말차 팬들이 좋아합니다.',
        },
        {
          question: '모찌 도넛은 얼마인가요?',
          answer: '모찌 도넛은 부담 없는 가격의 디저트이며, 가격은 모찌 도넛 메뉴에 알기 쉽게 표기돼 있습니다. 가장 가성비 좋은 선택은 믹스 박스로, 말차·우베·클래식 등을 한 번에 맛볼 수 있어 나눠 먹기에 좋습니다.',
        },
        {
          question: '말차 모찌 도넛에는 어떤 커피가 어울리나요?',
          answer: '아이스 100% 코나 라떼가 최고의 페어링입니다. 코나 커피의 부드럽고 초콜릿 같은 풍미가 말차의 흙내음 쌉쌀함을 살려주고, 아이스 음료라 와이키키 더위에도 시원하게 즐길 수 있습니다.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 말차 모찌 도넛을 즐기세요',
      text: '2142 Kalakaua Ave의 Kona Coffee Donut? 에서 진짜 녹차 글레이즈를 입힌 쫀득한 말차 모찌 도넛과 100% 코나 커피를 만나보세요. 와이키키 비치에서 도보 약 5분입니다.',
      menuButton: '모찌 도넛 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '와이키키 말차 모찌 도넛',
    },
  },
  zh: {
    hero: {
      title: '威基基抹茶麻糬甜甜圈',
      subtitle: '那颗绿色的去哪买？——裹有正宗抹茶糖霜的Q弹Pon-de-ring',
      updated: '2026年6月更新',
      readTime: '阅读约7分钟',
    },
    definition: {
      title: '什么是抹茶麻糬甜甜圈？',
      text: '<strong>抹茶麻糬甜甜圈</strong>是一种<strong>用米粉（mochiko）制成的Q弹Pon-de-ring甜甜圈</strong>，外层裹上正宗的日式<strong>绿茶（抹茶）糖霜</strong>。它没有蓬松的蛋糕口感，取而代之的是标志性的<strong>弹牙"QQ"嚼劲</strong>——由八个相连的小面团围成一圈，可以一颗一颗掰着吃。抹茶醇厚微苦的风味与糖霜温和的甜味完美平衡，使它成为<strong>麻糬甜甜圈口味中最"成熟"的一款</strong>：上镜、不太甜，而且一颗根本停不下来。',
    },
    history: {
      title: '抹茶麻糬甜甜圈的故事',
      subtitle: '从日本Pon-de-ring到夏威夷的麻糬甜甜圈热潮',
      p1: '麻糬甜甜圈诞生于日本广受喜爱的<strong>Pon-de-ring</strong>——用木薯粉和米粉制成、相连成圈的Q弹面团球——与美式甜甜圈的相遇。结果是一款口感截然不同的甜甜圈：外层轻盈，内里弹牙到让人欲罢不能。随着这种风格传到夏威夷和美国本土，店家纷纷采用<strong>糯米粉（mochiko）</strong>，把那份弹牙嚼劲推到了主角的位置。',
      p2: '与此同时，<strong>抹茶</strong>正掀起远超茶道的热潮。石磨研磨的日本绿茶从茶杯走进拿铁、霜淇淋、芝士蛋糕，乃至糖霜，因其鲜艳的绿色和草香浓郁、富含鲜味又微带苦涩的风味而备受喜爱。对于喜欢有风味却不腻口甜点的一代人来说，抹茶成了<strong>"少甜"口味的首选</strong>。',
      p3: '抹茶与麻糬堪称天作之合。<strong>正宗抹茶温和的苦味</strong>中和了糖霜的甜，而<strong>Q弹的麻糬口感</strong>让每一口都更有嚼头。这正是抹茶+红豆、抹茶+麻糬在日式甜点中相得益彰的同款平衡——只是以甜甜圈的形式重新呈现，更适合分享和拍照。',
      p4: '在<strong>威基基乃至整个夏威夷</strong>，麻糬甜甜圈已成为岛上亚洲融合甜点的招牌。来自日本、韩国和美国本土的游客都来寻找那Q弹的Pon-de-ring造型和鲜亮色彩——紫色的ube、经典糖霜，当然还有那<strong>抢眼的抹茶绿</strong>。搭配100%科纳咖啡，一颗抹茶麻糬甜甜圈就是现代夏威夷的真味。',
    },
    comparison: {
      title: '抹茶麻糬甜甜圈 vs 其他麻糬甜甜圈口味',
      subtitle: '那颗绿色的有何不同？',
      intro: '抹茶、ube和经典糖霜都用同一款Q弹的Pon-de-ring面团，但带来的体验大不相同。一起来对比一下：',
      headers: {
        feature: '口味',
        bingsu: '抹茶',
        shavedIce: 'Ube（紫薯）',
        kakigori: '经典款',
      },
      rows: [
        {
          feature: '风味',
          bingsu: '醇厚绿茶、温和苦味、鲜味',
          shavedIce: '香甜坚果味、近似香草的紫薯',
          kakigori: '纯粹的甜糖霜、黄油香',
        },
        {
          feature: '颜色',
          bingsu: '鲜艳的抹茶绿',
          shavedIce: '亮眼的紫色',
          kakigori: '金黄糖霜',
        },
        {
          feature: '甜度',
          bingsu: '低——平衡而成熟',
          shavedIce: '中——甜而柔和',
          kakigori: '高——经典甜味',
        },
        {
          feature: '适合谁',
          bingsu: '爱抹茶、喜欢少甜甜点的人',
          shavedIce: '喜欢趣味色彩和柔和甜味的人',
          kakigori: '想要正宗甜甜圈味的纯粹派',
        },
        {
          feature: '最佳搭配',
          bingsu: '冰镇100%科纳拿铁',
          shavedIce: '科纳拿铁',
          kakigori: '热的100%科纳咖啡',
        },
        {
          feature: '上镜吗？',
          bingsu: '非常——绿色超抢眼',
          shavedIce: '非常——紫色惊艳',
          kakigori: '经典又干净',
        },
      ],
      note: '如果你喜欢醇厚、少甜的甜点，抹茶就是首选。想要趣味色彩配柔和甜味，就选ube——或者直接来个混合盒，并排尝个够。',
    },
    types: {
      title: '值得一试的抹茶甜点 & 搭配',
      subtitle: '把那颗绿色的发挥到极致',
      items: [
        {
          name: '抹茶麻糬甜甜圈',
          korean: '主角',
          description: '裹有正宗抹茶糖霜的Q弹Pon-de-ring。风味醇厚、不太甜，还有那一眼认出的绿色。趁糖霜亮泽、麻糬最弹的当天吃最棒。',
          icon: '🍵',
        },
        {
          name: '抹茶甜甜圈 + 冰科纳拿铁',
          korean: '黄金搭档',
          description: '抹茶的草香微苦最配顺滑、带巧克力香的100%科纳咖啡。冰科纳拿铁在威基基的炎热里格外清爽，让整份甜点更有仪式感。',
          icon: '🧋',
        },
        {
          name: '混合麻糬盒里的抹茶',
          korean: '一起分享',
          description: '把抹茶和ube、经典等多种口味装进一盒。这是品尝整条产品线最有趣的方式，适合多人分享，也是桌上最上镜的主角。',
          icon: '🍩',
        },
        {
          name: '海滩外带抹茶甜甜圈',
          korean: '打包带走',
          description: '我们距威基基海滩约5分钟，打包一颗抹茶麻糬甜甜圈和一杯咖啡，伴着海景享用吧。Q弹口感很耐放，短途散步也没问题。',
          icon: '🏖️',
        },
        {
          name: '季节限定抹茶特别款',
          korean: '限时',
          description: '留意轮换的抹茶特别款和季节新意。口味来来去去，若遇到特别的抹茶麻糬甜甜圈，趁还有就赶紧入手。',
          icon: '✨',
        },
      ],
    },
    whyHawaii: {
      title: '为什么要在威基基吃抹茶麻糬甜甜圈',
      points: [
        {
          title: '本土吃不到的Q弹麻糬口感',
          description: '那弹牙的"QQ"Pon-de-ring嚼劲正是麻糬甜甜圈的精髓——而在夏威夷和亚洲以外，很难找到做得好的。用米粉新鲜制作的这种口感，是本土大多数甜甜圈都无法媲美的体验。',
        },
        {
          title: '正宗抹茶，不会太甜',
          description: '出色的抹茶麻糬甜甜圈以正宗日本绿茶醇厚的鲜味为主角，而非只靠糖和色素。因此口味成熟而平衡——有风味，又不会甜到发腻。',
        },
        {
          title: '超级上镜的绿色',
          description: '在Q弹面团圈上的那抹鲜艳抹茶绿，简直是为拍照而生。无论发群聊还是发动态，以威基基为背景的抹茶麻糬甜甜圈都是岛上最值得分享的甜点之一。',
        },
        {
          title: '搭配100%科纳咖啡，距海滩约5分钟',
          description: '抹茶与100%科纳咖啡是梦幻组合，而且在距威基基海滩约5分钟的地方就能同时享用。想来份Q弹、上镜又少甜的小确幸，散步途中顺道一停最合适。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基哪里能买到抹茶麻糬甜甜圈',
      intro: '如果你在威基基想吃那颗绿色的，Kona Coffee Donut? 就是你的去处。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '位于威基基核心的卡拉卡瓦大道，Kona Coffee Donut? 现做米粉麻糬甜甜圈——抹茶、ube等——搭配顺滑的100%科纳咖啡。我们的抹茶麻糬甜甜圈把Q弹的Pon-de-ring与正宗绿茶糖霜融为一体，而且距威基基海滩仅约5分钟。',
        highlights: [
          '抹茶、ube等米粉现做麻糬甜甜圈',
          '采用正宗抹茶糖霜——醇厚，不太甜',
          '搭配顺滑的100%科纳咖啡',
          '距威基基海滩约5分钟——每日上午7点至晚上9点营业',
        ],
      },
      cta: '查看麻糬甜甜圈菜单',
    },
    howToEat: {
      title: '吃出最佳抹茶麻糬甜甜圈的小贴士',
      subtitle: '把那颗绿色的吃到极致',
      tips: [
        {
          title: '当天趁新鲜吃',
          description: '麻糬甜甜圈在制作当天最好吃，糖霜亮泽、米粉面团最Q弹。标志性的弹牙感过一天就会减退，所以别留到以后——趁新鲜享用吧。',
        },
        {
          title: '搭配冰科纳拿铁',
          description: '抹茶醇厚微苦的风味天生适合顺滑的100%科纳咖啡。冰科纳拿铁在威基基的阳光下格外清爽，把少甜的抹茶衬托得恰到好处。',
        },
        {
          title: '把抹茶和ube并排对比着吃',
          description: '在香甜坚果味的ube之后立刻品尝醇厚的抹茶，两种风味都会更突出。这是体会抹茶魅力的最佳方式，而绿配紫的组合用来拍照更是无敌。',
        },
        {
          title: '来个混合盒一起分享',
          description: '一个混合麻糬甜甜圈盒能让大家一次尝到抹茶、ube、经典等多种口味。更有趣、更上镜，也是找到你新欢口味最轻松的方式。',
        },
      ],
    },
    faq: {
      title: '常见问题',
      items: [
        {
          question: '在威基基哪里能买到抹茶麻糬甜甜圈？',
          answer: '位于威基基核心地段2142 Kalakaua Ave的Kona Coffee Donut? 现做米粉抹茶麻糬甜甜圈，搭配100%科纳咖啡。这里距威基基海滩仅约5分钟，每日上午7点至晚上9点营业。',
        },
        {
          question: '什么是麻糬甜甜圈？',
          answer: '麻糬甜甜圈是用米粉（mochiko）制成的甜甜圈，口感不是普通甜甜圈那种蓬松的蛋糕感，而是Q弹有嚼劲的"QQ"口感。通常做成Pon-de-ring造型——由八个相连的面团球围成一圈，可以一颗一颗掰着吃。',
        },
        {
          question: '抹茶是真的吗？味道浓吗？',
          answer: '我们的抹茶麻糬甜甜圈采用正宗绿茶抹茶糖霜，因此能尝到真正醇厚的鲜味和温和的苦味，而不只是甜味和色素。它平衡而不太甜，这正是抹茶爱好者钟爱它的原因。',
        },
        {
          question: '麻糬甜甜圈多少钱？',
          answer: '麻糬甜甜圈是平价的小确幸，价格在我们的麻糬甜甜圈菜单上清楚标示。最划算的是混合盒，能把抹茶、ube、经典等口味一起尝个遍，非常适合分享。',
        },
        {
          question: '抹茶麻糬甜甜圈配什么咖啡？',
          answer: '冰镇100%科纳拿铁是绝配。科纳咖啡顺滑、带巧克力香的风味衬托出抹茶醇厚的苦味，冰饮又能在威基基的炎热中保持清爽。',
        },
      ],
    },
    cta: {
      title: '来威基基品尝抹茶麻糬甜甜圈',
      text: '前往2142 Kalakaua Ave的Kona Coffee Donut?，犒赏自己一颗裹有正宗绿茶糖霜的Q弹抹茶麻糬甜甜圈，搭配100%科纳咖啡——距威基基海滩约5分钟。',
      menuButton: '查看麻糬甜甜圈菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '威基基抹茶麻糬甜甜圈',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Matcha Mochi Donut in Waikiki (2026): Where to Get the Green One',
  description: 'A local guide to the matcha mochi donut in Waikiki — a chewy rice-flour pon-de-ring with real green-tea glaze. What it is, how it compares to ube, and where to get one with 100% Kona coffee.',
  image: 'https://www.konacoffeedonut.com/images/blog/matcha-mochi-donut-waikiki.jpeg',
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
  datePublished: '2026-06-22',
  dateModified: '2026-06-22',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/en/blog/matcha-mochi-donut-waikiki',
  },
  keywords: 'matcha mochi donut, matcha donut waikiki, matcha mochi donut hawaii, green tea donut waikiki, mochi donut waikiki, kona coffee donut',
  wordCount: 1300,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I get a matcha mochi donut in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut? at 2142 Kalakaua Ave, in the heart of Waikiki, makes fresh rice-flour matcha mochi donuts paired with 100% Kona coffee. It is only about 5 minutes from Waikiki Beach and open daily from 7AM to 9PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a mochi donut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mochi donut is a donut made with rice flour (mochiko), which gives it a chewy, bouncy "QQ" texture instead of the soft, cakey crumb of a regular donut. It is usually shaped as a pon-de-ring — eight connected dough balls in a ring that pull apart one by one.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the matcha real and strong?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our matcha mochi donut is made with a real green-tea matcha glaze, so you get genuine earthy, umami flavor with a gentle bitterness — not just sweetness and food coloring. It is balanced and not too sweet, which is exactly why matcha fans love it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much is a mochi donut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mochi donuts are an affordable treat, and prices are clearly listed on our mochi donut menu. The best value is a mixed box, which lets you try matcha, ube, classic, and other flavors together — perfect for sharing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What coffee pairs with a matcha mochi donut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An iced 100% Kona latte is the ideal pairing. The smooth, chocolatey notes of Kona coffee complement matcha\'s earthy bitterness, and an iced drink keeps everything refreshing in the Waikiki heat.',
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

export default function MatchaMochiDonutWaikikiPage() {
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
          src="/images/blog/matcha-mochi-donut-waikiki.jpeg"
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

        {/* Types */}
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

        {/* Why Waikiki */}
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
                href={`/${locale}/menu/mochi-donuts`}
                className="inline-block bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-sky-100 transition-colors"
              >
                {t.whereToGet.cta}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* How to Eat / Tips */}
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
              href={`/${locale}/blog/ube-mochi-donut-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 font-semibold transition-colors"
            >
              → Ube Mochi Donut in Waikiki
            </Link>
            <Link
              href={`/${locale}/blog/best-mochi-donuts-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Best Mochi Donuts in Waikiki
            </Link>
            <Link
              href={`/${locale}/blog/what-is-a-mochi-donut`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              What is a Mochi Donut?
            </Link>
            <Link
              href={`/${locale}/menu/mochi-donuts`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Mochi Donut Menu
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
                  href={`/${locale}/menu/mochi-donuts`}
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
