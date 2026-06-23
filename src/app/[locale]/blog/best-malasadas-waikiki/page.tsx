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
      title: 'Best Malasadas in Waikiki',
      subtitle: 'Where to Find Fresh, Sugar-Rolled Portuguese-Hawaiian Donuts (2026)',
      updated: 'Updated June 2026',
      readTime: '7 min read',
    },
    definition: {
      title: 'What Makes the Best Malasada?',
      text: 'A <strong>malasada</strong> is a <strong>Portuguese-Hawaiian fried donut</strong> — a ball of light yeast dough fried until golden, then rolled in sugar. Unlike a classic ring donut, a malasada has <strong>no hole</strong> and is often <strong>filled</strong> with custard, haupia (coconut), or chocolate. The best malasadas share a few things: they are <strong>fried fresh and served warm</strong>, <strong>light and airy</strong> inside (never greasy), and finished with an even sugar coating. Waikiki is one of the best places to grab one — and at <strong>Kona Coffee Donut?</strong> you can enjoy a fresh malasada with 100% Kona coffee just about 5 minutes from Waikiki Beach.',
    },
    history: {
      title: 'A Short History of the Malasada',
      subtitle: 'From Madeira and the Azores to a Hawaii Icon',
      p1: 'The malasada arrived in Hawaii with <strong>Portuguese immigrants in the 1800s</strong>, many from the islands of Madeira and the Azores who came to work on Hawaii\'s sugar plantations. They brought their home recipe for "massa sovada" — soft, enriched fried dough dusted in sugar — and it quickly found a place in island kitchens.',
      p2: 'Traditionally, malasadas were made on <strong>Shrove Tuesday (Fat Tuesday)</strong>, the day before Lent, as a way to use up the butter, sugar, and eggs in the house before the fasting season. In Hawaii that custom became <strong>Malasada Day</strong>, and to this day bakeries see long lines every Fat Tuesday.',
      p3: 'Over generations the malasada moved from a once-a-year treat to an <strong>everyday Hawaii staple</strong>. Local bakeries and donut shops made them famous, and today the warm, sugar-rolled malasada is one of the most beloved sweets in the islands — right alongside shave ice and mochi.',
      p4: 'So what should you look for when buying one? A great malasada is <strong>fried to order or clearly fresh</strong>, still warm, golden (not dark or oily), light and airy when you bite in, and evenly coated in sugar. If you can pair it with good coffee, even better.',
    },
    comparison: {
      title: 'What Makes the Best Malasada',
      subtitle: 'A Quick Quality Checklist',
      intro: 'Not all malasadas are created equal. Here is what separates a great one from a forgettable one — use this when you are deciding where to stop:',
      headers: {
        feature: 'What to look for',
        bingsu: 'Best',
        shavedIce: 'OK',
        kakigori: 'Skip',
      },
      rows: [
        {
          feature: 'Freshness',
          bingsu: 'Fried to order, served warm',
          shavedIce: 'Made earlier, sitting out',
          kakigori: 'Cold and dense',
        },
        {
          feature: 'Texture',
          bingsu: 'Light and airy inside',
          shavedIce: 'A little doughy but ok',
          kakigori: 'Heavy or greasy',
        },
        {
          feature: 'Sugar',
          bingsu: 'Even, generous coating',
          shavedIce: 'Sparse or patchy',
          kakigori: 'Soggy, melted-in sugar',
        },
        {
          feature: 'Fillings',
          bingsu: 'Haupia / custard option',
          shavedIce: 'Plain sugar only',
          kakigori: 'No fresh options',
        },
        {
          feature: 'Pairing',
          bingsu: 'With 100% Kona coffee',
          shavedIce: 'Standard drip coffee',
          kakigori: 'No drink offered',
        },
        {
          feature: 'Verdict',
          bingsu: 'Eat it warm, on the spot',
          shavedIce: 'Fine in a pinch',
          kakigori: 'Worth waiting for a fresh one',
        },
      ],
      note: 'The single biggest factor is freshness. A malasada eaten warm, minutes after frying, beats a cold one every time — which is exactly why grabbing one fresh in Waikiki is the way to do it.',
    },
    types: {
      title: 'Malasada Flavors & Fillings to Try',
      subtitle: 'From Classic Sugar to Haupia and Beyond',
      items: [
        {
          name: 'Original Sugar',
          korean: 'The classic',
          description: 'The one that started it all — a plain malasada fried fresh and rolled in granulated sugar. No filling, nothing to hide behind: just warm, airy dough and a crackly sweet coating. If you only try one, make it this. It is the best test of whether a shop fries them right.',
          icon: '🍩',
        },
        {
          name: 'Custard-Filled',
          korean: 'Rich & creamy',
          description: 'A classic malasada injected with smooth vanilla custard. The warm dough and cool, creamy center are a perfect contrast, and it is the most popular filled flavor for a reason. Great with a strong coffee to balance the sweetness.',
          icon: '🍮',
        },
        {
          name: 'Haupia (Coconut)',
          korean: 'Island favorite',
          description: 'Filled with haupia — a silky Hawaiian coconut pudding. This is the most "local" of the fillings and a must-try if you want something that tastes like the islands. Light, fragrant, and not too sweet.',
          icon: '🥥',
        },
        {
          name: 'Chocolate',
          korean: 'Crowd-pleaser',
          description: 'A malasada filled with rich chocolate or chocolate cream. The kids\' favorite and an easy win for anyone with a sweet tooth. Pairs especially well with the chocolatey notes in a good Kona coffee.',
          icon: '🍫',
        },
        {
          name: 'Li Hing & Seasonal',
          korean: 'Limited / fun',
          description: 'From li hing mui sugar (the sweet-salty-tangy local favorite) to seasonal fruit and lilikoi (passion fruit) fillings, these rotating flavors are a fun way to taste something you cannot get on the mainland. Ask what is fresh that day.',
          icon: '🌺',
        },
      ],
    },
    whyHawaii: {
      title: 'Why Get Malasadas in Waikiki',
      points: [
        {
          title: 'A Hawaii Icon, At the Source',
          description: 'The malasada is a true Hawaii classic with deep Portuguese roots. Eating one in the islands — where it became famous — is part of the experience. Waikiki puts that icon within easy reach, no long drive required.',
        },
        {
          title: 'Best Eaten Warm and Fresh',
          description: 'Malasadas are at their absolute best minutes out of the fryer, when the inside is still warm and airy and the sugar is crackly. Grabbing one fresh nearby beats buying a box that has been sitting for hours.',
        },
        {
          title: 'Perfect with 100% Kona Coffee',
          description: 'A warm, sugary malasada and a cup of 100% Kona coffee is one of the great island pairings. The coffee\'s smooth, low-acid richness cuts the sweetness perfectly — and Kona coffee is grown right here in Hawaii.',
        },
        {
          title: 'About 5 Minutes from Waikiki Beach',
          description: 'You do not have to plan a special trip. A fresh malasada is a quick walk or short ride from the sand — easy to grab, easy to share, and the perfect shareable treat for a box on the way to or from the beach.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Get Fresh Malasadas in Waikiki',
      intro: 'Craving a fresh, warm malasada in Waikiki? Kona Coffee Donut? is an easy stop.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Right on Kalākaua Avenue in the heart of Waikiki, Kona Coffee Donut? serves fresh malasadas alongside mochi donuts and 100% Kona coffee. It is about a 5-minute walk from Waikiki Beach, so you can grab a warm, sugar-rolled malasada and a cup of real Hawaiian coffee without going out of your way.',
        highlights: [
          'Fresh malasadas — original sugar plus filled options',
          'Paired with smooth 100% Kona coffee',
          'About 5 minutes from Waikiki Beach',
          'Open daily 7AM–9PM — great for a treat any time',
        ],
      },
      cta: 'View the Malasada Menu',
    },
    howToEat: {
      title: 'How to Enjoy a Malasada',
      subtitle: 'Get the Most Out of Every Bite',
      tips: [
        {
          title: 'Eat It Warm, Same Day',
          description: 'A malasada is at its best within minutes of frying, while the inside is still warm and airy. Try to eat it the same day you buy it — ideally on the spot. A warm malasada and a cold one are almost two different desserts.',
        },
        {
          title: 'Get It with a Kona Coffee',
          description: 'The sweetness of a sugar-rolled malasada is made for coffee. A cup of smooth, low-acid 100% Kona coffee is the perfect partner — order them together and alternate bites and sips.',
        },
        {
          title: 'Try a Filled One',
          description: 'If you have only ever had plain, branch out. A haupia (coconut) or custard malasada adds a cool, creamy center that contrasts beautifully with the warm dough. It is an easy way to taste something new.',
        },
        {
          title: 'Share a Mixed Box',
          description: 'Malasadas are made for sharing. Grab a mixed box — a few original sugar plus a couple of filled flavors — so everyone can try a bite of each. Perfect for the beach, a picnic, or the hotel room.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About Malasadas in Waikiki',
      items: [
        {
          question: 'Where can I get the best malasadas in Waikiki?',
          answer: 'For fresh, warm malasadas in Waikiki, Kona Coffee Donut? on Kalākaua Avenue is an easy stop — about 5 minutes from Waikiki Beach. They serve original sugar and filled malasadas alongside mochi donuts and 100% Kona coffee. The most important thing with any malasada is freshness, so look for one fried fresh and served warm.',
        },
        {
          question: 'What is a malasada?',
          answer: 'A malasada is a Portuguese-Hawaiian fried donut: a ball of light yeast dough fried until golden and rolled in sugar. Unlike a classic ring donut, it has no hole and is often filled with custard, haupia (coconut), or chocolate. It was brought to Hawaii by Portuguese immigrants in the 1800s and is now a beloved island staple.',
        },
        {
          question: 'Are malasadas filled?',
          answer: 'They can be both. The original malasada is plain dough rolled in sugar with no filling. Many shops also offer filled malasadas with custard, haupia (coconut), chocolate, or seasonal fruit and lilikoi (passion fruit). If you are new to malasadas, try an original sugar first, then a filled one.',
        },
        {
          question: 'How much is a malasada?',
          answer: 'Prices vary by shop, size, and whether the malasada is filled, but they are generally an affordable treat — often just a few dollars each, with mixed boxes available for sharing. For exact current pricing, check the malasada menu or ask in store.',
        },
        {
          question: 'What pairs well with malasadas?',
          answer: 'Coffee is the classic pairing. A warm, sugar-rolled malasada with a cup of smooth, low-acid 100% Kona coffee is one of the great Hawaii combinations — the coffee balances the sweetness perfectly. At Kona Coffee Donut? you can order both together.',
        },
      ],
    },
    cta: {
      title: 'Try a Fresh Malasada in Waikiki',
      text: 'Visit Kona Coffee Donut? at 2142 Kalakaua Ave for a fresh, warm malasada paired with 100% Kona coffee — about 5 minutes from Waikiki Beach.',
      menuButton: 'View Malasada Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'Best Malasadas in Waikiki',
    },
  },
  ja: {
    hero: {
      title: 'ワイキキで美味しいマラサダ',
      subtitle: '揚げたて・砂糖がけのポルトガル系ハワイドーナツを探して（2026年版）',
      updated: '2026年6月更新',
      readTime: '7分で読める',
    },
    definition: {
      title: '最高のマラサダの条件とは？',
      text: '<strong>マラサダ</strong>は<strong>ポルトガル発祥のハワイ風揚げドーナツ</strong>。軽い発酵生地を黄金色に揚げ、砂糖をまぶしたものです。リング型の普通のドーナツと違い、マラサダには<strong>穴がなく</strong>、カスタード、ハウピア（ココナッツ）、チョコレートなどを<strong>詰めた</strong>ものも人気です。最高のマラサダにはいくつか共通点があります。<strong>揚げたてで温かい</strong>こと、中が<strong>軽くふわふわ</strong>（脂っこくない）であること、そして砂糖が均一にまぶされていること。ワイキキはマラサダを楽しむのに最高の場所のひとつで、<strong>Kona Coffee Donut?</strong>ではワイキキビーチから約5分の距離で、揚げたてマラサダと100%コナコーヒーを味わえます。',
    },
    history: {
      title: 'マラサダの歴史',
      subtitle: 'マデイラ島・アゾレス諸島からハワイの定番へ',
      p1: 'マラサダがハワイに伝わったのは<strong>1800年代、ポルトガル移民</strong>によってでした。多くはマデイラ島やアゾレス諸島の出身で、ハワイのサトウキビ農園で働くためにやって来ました。彼らは故郷のレシピ「マッサ・ソバーダ」（柔らかくリッチな揚げ生地に砂糖をまぶしたもの）を持ち込み、それはすぐに島の食卓に根付きました。',
      p2: '伝統的にマラサダは、四旬節前日の<strong>「告解の火曜日（ファットチューズデー）」</strong>に作られていました。断食期間が始まる前に、家にあるバター・砂糖・卵を使い切るためです。ハワイではこの習慣が<strong>「マラサダデー」</strong>となり、今でもこの日にはベーカリーに長い行列ができます。',
      p3: '世代を重ねるうちに、マラサダは年に一度のごちそうから<strong>ハワイの日常の定番</strong>へと変わっていきました。地元のベーカリーやドーナツ店がその名を広め、今では温かく砂糖をまぶしたマラサダは、シェイブアイスやモチドーナツと並ぶ島で最も愛されるスイーツのひとつです。',
      p4: 'では、買うときに何を見ればよいのでしょうか？良いマラサダは<strong>注文を受けてから揚げる、または明らかに揚げたて</strong>で、まだ温かく、黄金色（黒ずんでおらず脂っこくない）で、噛むと軽くふわっとし、砂糖が均一にまぶされています。美味しいコーヒーと合わせられれば、なお最高です。',
    },
    comparison: {
      title: '最高のマラサダの条件',
      subtitle: 'かんたん品質チェックリスト',
      intro: 'マラサダはどれも同じではありません。素晴らしい一品と、印象に残らない一品を分けるポイントはこちら。どこで立ち寄るか迷ったときの参考にどうぞ：',
      headers: {
        feature: 'チェックポイント',
        bingsu: '最高',
        shavedIce: 'まあまあ',
        kakigori: '避けたい',
      },
      rows: [
        {
          feature: '揚げたて感',
          bingsu: '注文後に揚げ、温かく提供',
          shavedIce: '少し前に揚げて置いてある',
          kakigori: '冷たくて密',
        },
        {
          feature: '食感',
          bingsu: '中が軽くふわふわ',
          shavedIce: 'やや生地っぽいが許容範囲',
          kakigori: '重い、または脂っこい',
        },
        {
          feature: '砂糖',
          bingsu: '均一でたっぷり',
          shavedIce: '少なめ・ムラあり',
          kakigori: '湿気て溶けている',
        },
        {
          feature: 'フィリング',
          bingsu: 'ハウピア／カスタードあり',
          shavedIce: 'プレーン（砂糖）のみ',
          kakigori: '新鮮な選択肢なし',
        },
        {
          feature: 'ペアリング',
          bingsu: '100%コナコーヒーと',
          shavedIce: '普通のドリップコーヒー',
          kakigori: 'ドリンクなし',
        },
        {
          feature: '結論',
          bingsu: 'その場で温かいうちに',
          shavedIce: '急ぎのときには十分',
          kakigori: '揚げたてを待つ価値あり',
        },
      ],
      note: '最も大切なのは揚げたてかどうか。揚げて数分の温かいマラサダは、冷めたものに毎回勝ります。だからこそ、ワイキキで揚げたてを手に入れるのが正解なのです。',
    },
    types: {
      title: '試したいマラサダのフレーバー＆フィリング',
      subtitle: '定番の砂糖からハウピアまで',
      items: [
        {
          name: 'オリジナル（砂糖）',
          korean: '定番',
          description: 'すべての原点。揚げたてのプレーンなマラサダにグラニュー糖をまぶしたもの。フィリングなし、ごまかしなし。温かくふわふわの生地とパリッと甘いコーティングだけ。ひとつだけ試すならこれ。店がきちんと揚げているかを試す最高の一品です。',
          icon: '🍩',
        },
        {
          name: 'カスタード入り',
          korean: '濃厚＆クリーミー',
          description: 'なめらかなバニラカスタードを詰めた定番マラサダ。温かい生地と冷たくクリーミーな中身のコントラストが絶妙で、フィリング系で一番人気なのも納得。甘さを引き締める濃いコーヒーとよく合います。',
          icon: '🍮',
        },
        {
          name: 'ハウピア（ココナッツ）',
          korean: '島の人気者',
          description: 'なめらかなハワイのココナッツプリン「ハウピア」入り。フィリングの中で最も「ローカル」で、島らしい味を求めるなら必食。軽やかで香り高く、甘すぎません。',
          icon: '🥥',
        },
        {
          name: 'チョコレート',
          korean: 'みんな大好き',
          description: '濃厚なチョコレートまたはチョコクリームを詰めたマラサダ。子どもに大人気で、甘いもの好きなら間違いなし。良質なコナコーヒーのチョコレートのような風味とも特に相性抜群です。',
          icon: '🍫',
        },
        {
          name: 'リヒン＆季節限定',
          korean: '限定／お楽しみ',
          description: 'リヒンムイシュガー（甘酸っぱくしょっぱいローカルの人気者）から、季節のフルーツやリリコイ（パッションフルーツ）入りまで。本土では味わえないものを楽しめる、入れ替わりのフレーバー。その日の揚げたてを聞いてみて。',
          icon: '🌺',
        },
      ],
    },
    whyHawaii: {
      title: 'ワイキキでマラサダを食べるべき理由',
      points: [
        {
          title: 'ハワイの定番を本場で',
          description: 'マラサダはポルトガルにルーツを持つハワイの名物。有名になったこの島で食べることも体験の一部です。ワイキキならその名物に手軽に出会え、長距離ドライブも不要です。',
        },
        {
          title: '温かい揚げたてが一番',
          description: 'マラサダは揚げて数分が最高。中がまだ温かくふわふわで、砂糖がパリッとしています。何時間も置かれた箱を買うより、近くで揚げたてを手に入れるのが断然おすすめです。',
        },
        {
          title: '100%コナコーヒーと完璧',
          description: '温かく甘いマラサダと100%コナコーヒーは、島の最高の組み合わせのひとつ。なめらかで低酸味の豊かなコーヒーが甘さを完璧に引き締めます。コナコーヒーはまさにこのハワイで育てられています。',
        },
        {
          title: 'ワイキキビーチから約5分',
          description: '特別な計画は不要。揚げたてマラサダはビーチから歩いてすぐ、または短い移動で手に入ります。気軽に買えてシェアもしやすく、ビーチへの行き帰りに箱で買うのにぴったりのお土産です。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキで揚げたてマラサダを食べるなら',
      intro: 'ワイキキで揚げたての温かいマラサダが食べたいなら、Kona Coffee Donut? が気軽な一軒です。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心、カラカウア通り沿いにあるKona Coffee Donut?は、揚げたてマラサダをモチドーナツや100%コナコーヒーとともに提供しています。ワイキキビーチから徒歩約5分なので、回り道せずに温かく砂糖をまぶしたマラサダと本物のハワイアンコーヒーを楽しめます。',
        highlights: [
          '揚げたてマラサダ — オリジナル（砂糖）とフィリング入り',
          'なめらかな100%コナコーヒーとペアリング',
          'ワイキキビーチから約5分',
          '毎日7時〜21時営業 — いつでもおやつに最適',
        ],
      },
      cta: 'マラサダメニューを見る',
    },
    howToEat: {
      title: 'マラサダの楽しみ方',
      subtitle: '一口ごとに最高を味わうコツ',
      tips: [
        {
          title: '温かいうちに、その日のうちに',
          description: 'マラサダは揚げて数分が最高。中がまだ温かくふわふわなうちに。買ったその日のうちに、できればその場で食べましょう。温かいマラサダと冷めたものは、ほとんど別のデザートです。',
        },
        {
          title: 'コナコーヒーと一緒に',
          description: '砂糖をまぶしたマラサダの甘さはコーヒーのためにあるよう。なめらかで低酸味の100%コナコーヒーが最高の相棒です。一緒に注文して、ひと口とひと口の合間に交互に味わって。',
        },
        {
          title: 'フィリング入りも試して',
          description: 'プレーンしか食べたことがないなら、ぜひ冒険を。ハウピア（ココナッツ）やカスタード入りは、冷たくクリーミーな中身が温かい生地と見事なコントラストに。新しい味を手軽に楽しめます。',
        },
        {
          title: 'ミックスボックスでシェア',
          description: 'マラサダはシェアにぴったり。オリジナル（砂糖）にフィリング入りを数個加えたミックスボックスなら、みんなでひと口ずつ楽しめます。ビーチやピクニック、ホテルの部屋にも最適です。',
        },
      ],
    },
    faq: {
      title: 'ワイキキのマラサダに関するよくある質問',
      items: [
        {
          question: 'ワイキキで美味しいマラサダはどこで食べられますか？',
          answer: 'ワイキキで揚げたての温かいマラサダなら、カラカウア通り沿いのKona Coffee Donut?が気軽な一軒です。ワイキキビーチから約5分。オリジナル（砂糖）とフィリング入りのマラサダを、モチドーナツや100%コナコーヒーとともに提供しています。マラサダで最も大切なのは揚げたてかどうかなので、揚げたてで温かいものを選びましょう。',
        },
        {
          question: 'マラサダとは何ですか？',
          answer: 'マラサダはポルトガル発祥のハワイ風揚げドーナツ。軽い発酵生地を黄金色に揚げ、砂糖をまぶしたものです。リング型の普通のドーナツと違い穴がなく、カスタード、ハウピア（ココナッツ）、チョコレートなどを詰めたものも多くあります。1800年代にポルトガル移民によってハワイに伝わり、今では愛される島の定番です。',
        },
        {
          question: 'マラサダには中身が入っていますか？',
          answer: '両方あります。オリジナルのマラサダは中身なしで、砂糖をまぶしたプレーン生地です。多くの店ではカスタード、ハウピア（ココナッツ）、チョコレート、季節のフルーツやリリコイ（パッションフルーツ）入りも用意しています。初めてなら、まずオリジナル（砂糖）、次にフィリング入りを試してみて。',
        },
        {
          question: 'マラサダの値段はどのくらいですか？',
          answer: '店、サイズ、フィリングの有無で異なりますが、基本的に手頃なおやつで、1個数ドル程度のことが多く、シェア用のミックスボックスもあります。正確な最新価格は、マラサダメニューを確認するか店頭でお尋ねください。',
        },
        {
          question: 'マラサダに合うものは？',
          answer: 'コーヒーが定番の組み合わせ。温かく砂糖をまぶしたマラサダと、なめらかで低酸味の100%コナコーヒーは、ハワイの最高の組み合わせのひとつ。コーヒーが甘さを完璧に引き締めます。Kona Coffee Donut?なら両方を一緒に注文できます。',
        },
      ],
    },
    cta: {
      title: 'ワイキキで揚げたてマラサダを',
      text: '2142 Kalakaua Ave のKona Coffee Donut?で、揚げたての温かいマラサダと100%コナコーヒーを。ワイキキビーチから約5分です。',
      menuButton: 'マラサダメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'ワイキキで美味しいマラサダ',
    },
  },
  ko: {
    hero: {
      title: '와이키키 말라사다 맛집',
      subtitle: '갓 튀긴 설탕 코팅 포르투갈식 하와이 도넛을 찾아서 (2026)',
      updated: '2026년 6월 업데이트',
      readTime: '7분 소요',
    },
    definition: {
      title: '최고의 말라사다란?',
      text: '<strong>말라사다(Malasada)</strong>는 <strong>포르투갈에서 건너온 하와이식 튀김 도넛</strong>입니다. 가벼운 발효 반죽을 황금빛으로 튀긴 뒤 설탕에 굴려 만들죠. 가운데 구멍이 뚫린 일반 도넛과 달리 말라사다는 <strong>구멍이 없고</strong>, 커스터드·하우피아(코코넛)·초콜릿 등을 <strong>속으로 채운</strong> 종류도 인기입니다. 최고의 말라사다에는 공통점이 있습니다. <strong>갓 튀겨 따뜻하게</strong> 나오고, 속이 <strong>가볍고 폭신</strong>하며(전혀 느끼하지 않고), 설탕이 고르게 입혀져 있다는 것. 와이키키는 말라사다를 즐기기 가장 좋은 곳 중 하나이며, <strong>Kona Coffee Donut?</strong>에서는 와이키키 비치에서 약 5분 거리에서 갓 튀긴 말라사다와 100% 코나 커피를 함께 맛볼 수 있습니다.',
    },
    history: {
      title: '말라사다의 짧은 역사',
      subtitle: '마데이라·아조레스 제도에서 하와이의 아이콘으로',
      p1: '말라사다는 <strong>1800년대 포르투갈 이민자들</strong>과 함께 하와이에 전해졌습니다. 그들 중 다수는 마데이라 섬과 아조레스 제도 출신으로, 하와이의 사탕수수 농장에서 일하기 위해 건너왔습니다. 이들은 고향의 조리법 "마사 소바다(massa sovada)" — 부드럽고 풍미 가득한 튀김 반죽에 설탕을 입힌 것 — 를 가져왔고, 곧 섬의 식탁에 자리 잡았습니다.',
      p2: '전통적으로 말라사다는 사순절 전날인 <strong>"참회의 화요일(팻 튜즈데이)"</strong>에 만들어졌습니다. 금식 기간이 시작되기 전, 집에 있는 버터·설탕·달걀을 다 쓰기 위해서였죠. 하와이에서는 이 풍습이 <strong>"말라사다 데이"</strong>가 되었고, 지금도 이날이면 베이커리마다 긴 줄이 늘어섭니다.',
      p3: '여러 세대를 거치며 말라사다는 일 년에 한 번 먹는 별미에서 <strong>하와이의 일상 간식</strong>으로 자리 잡았습니다. 동네 베이커리와 도넛 가게들이 그 이름을 널리 알렸고, 오늘날 따뜻하게 설탕을 입힌 말라사다는 셰이브 아이스, 모찌 도넛과 더불어 섬에서 가장 사랑받는 디저트 중 하나입니다.',
      p4: '그렇다면 살 때 무엇을 봐야 할까요? 좋은 말라사다는 <strong>주문 후 튀기거나 확실히 갓 튀긴 것</strong>으로, 아직 따뜻하고, 황금빛(거뭇하거나 기름지지 않음)이며, 한 입 베어 물면 가볍고 폭신하고, 설탕이 고르게 입혀져 있습니다. 좋은 커피와 곁들일 수 있다면 더할 나위 없죠.',
    },
    comparison: {
      title: '최고의 말라사다 조건',
      subtitle: '간단 품질 체크리스트',
      intro: '말라사다라고 다 같은 말라사다가 아닙니다. 훌륭한 한 개와 그저 그런 한 개를 가르는 기준은 다음과 같습니다. 어디에 들를지 고민될 때 참고하세요:',
      headers: {
        feature: '체크 포인트',
        bingsu: '최고',
        shavedIce: '보통',
        kakigori: '비추천',
      },
      rows: [
        {
          feature: '갓 튀긴 정도',
          bingsu: '주문 후 튀겨 따뜻하게',
          shavedIce: '미리 튀겨 놓아둠',
          kakigori: '차갑고 떡짐',
        },
        {
          feature: '식감',
          bingsu: '속이 가볍고 폭신',
          shavedIce: '약간 반죽 같지만 괜찮음',
          kakigori: '무겁거나 느끼함',
        },
        {
          feature: '설탕',
          bingsu: '고르고 넉넉한 코팅',
          shavedIce: '부족하거나 듬성듬성',
          kakigori: '눅눅하게 녹은 설탕',
        },
        {
          feature: '속 재료',
          bingsu: '하우피아／커스터드 선택 가능',
          shavedIce: '플레인(설탕)만',
          kakigori: '신선한 옵션 없음',
        },
        {
          feature: '페어링',
          bingsu: '100% 코나 커피와',
          shavedIce: '일반 드립 커피',
          kakigori: '음료 없음',
        },
        {
          feature: '결론',
          bingsu: '그 자리에서 따뜻할 때',
          shavedIce: '급할 땐 괜찮음',
          kakigori: '갓 튀긴 걸 기다릴 가치 있음',
        },
      ],
      note: '가장 중요한 단 하나의 요소는 갓 튀겼는가입니다. 튀긴 지 몇 분 된 따뜻한 말라사다는 식은 것을 언제나 이깁니다. 와이키키에서 갓 튀긴 걸 바로 맛보는 게 정답인 이유죠.',
    },
    types: {
      title: '꼭 먹어봐야 할 말라사다 종류',
      subtitle: '클래식 설탕부터 하우피아까지',
      items: [
        {
          name: '오리지널 (설탕)',
          korean: '기본 of 기본',
          description: '모든 것의 시작. 갓 튀긴 플레인 말라사다에 그래뉴당을 굴려 입힌 것. 속 재료도, 숨길 것도 없습니다. 그저 따뜻하고 폭신한 반죽과 바삭하게 달콤한 코팅뿐. 딱 하나만 먹는다면 이걸로. 가게가 제대로 튀기는지 확인하는 최고의 시험대입니다.',
          icon: '🍩',
        },
        {
          name: '커스터드',
          korean: '진하고 크리미',
          description: '부드러운 바닐라 커스터드를 채운 클래식 말라사다. 따뜻한 반죽과 시원하고 크리미한 속의 대비가 환상적이라, 속 재료 중 가장 인기 있는 데는 이유가 있습니다. 단맛을 잡아주는 진한 커피와 잘 어울려요.',
          icon: '🍮',
        },
        {
          name: '하우피아 (코코넛)',
          korean: '하와이 인기템',
          description: '실키한 하와이식 코코넛 푸딩 "하우피아"를 채운 말라사다. 속 재료 중 가장 "로컬"하며, 하와이다운 맛을 원한다면 꼭 먹어봐야 합니다. 가볍고 향긋하며 너무 달지 않아요.',
          icon: '🥥',
        },
        {
          name: '초콜릿',
          korean: '실패 없는 선택',
          description: '진한 초콜릿이나 초코 크림을 채운 말라사다. 아이들이 가장 좋아하고, 단것을 좋아하는 사람이라면 무난한 정답. 좋은 코나 커피의 초콜릿 같은 향과 특히 잘 어울립니다.',
          icon: '🍫',
        },
        {
          name: '리힝 & 시즌 한정',
          korean: '한정／재미',
          description: '리힝무이 설탕(달고 짭짤하고 새콤한 로컬 인기템)부터 제철 과일과 릴리코이(패션프루트) 속까지. 본토에서는 맛볼 수 없는 걸 즐기는 재미가 있는, 수시로 바뀌는 플레이버. 그날 갓 튀긴 게 뭔지 물어보세요.',
          icon: '🌺',
        },
      ],
    },
    whyHawaii: {
      title: '와이키키에서 말라사다를 먹어야 하는 이유',
      points: [
        {
          title: '본고장에서 즐기는 하와이 아이콘',
          description: '말라사다는 포르투갈에 뿌리를 둔 진정한 하와이 명물입니다. 유명해진 바로 이 섬에서 먹는 것 자체가 경험의 일부죠. 와이키키에서는 멀리 운전할 필요 없이 그 명물을 손쉽게 만날 수 있습니다.',
        },
        {
          title: '갓 튀겨 따뜻할 때가 최고',
          description: '말라사다는 튀긴 지 몇 분이 절정입니다. 속이 아직 따뜻하고 폭신하며 설탕이 바삭할 때죠. 몇 시간 놓여 있던 박스를 사는 것보다, 가까운 곳에서 갓 튀긴 걸 손에 넣는 편이 훨씬 낫습니다.',
        },
        {
          title: '100% 코나 커피와 완벽한 궁합',
          description: '따뜻하고 달콤한 말라사다와 100% 코나 커피 한 잔은 하와이 최고의 조합 중 하나입니다. 부드럽고 산미가 낮은 진한 커피가 단맛을 완벽하게 잡아주죠. 코나 커피는 바로 이곳 하와이에서 재배됩니다.',
        },
        {
          title: '와이키키 비치에서 약 5분',
          description: '특별히 일정을 잡을 필요도 없습니다. 갓 튀긴 말라사다는 해변에서 걸어서 잠깐, 혹은 짧은 거리에 있어요. 사기도 나누기도 쉬워, 해변을 오갈 때 박스로 사 가기 딱 좋은 간식입니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 갓 튀긴 말라사다 먹는 곳',
      intro: '와이키키에서 갓 튀긴 따뜻한 말라사다가 당긴다면, Kona Coffee Donut?이 부담 없이 들르기 좋은 곳입니다.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키 중심부 칼라카우아 애비뉴에 자리한 Kona Coffee Donut?은 갓 튀긴 말라사다를 모찌 도넛, 100% 코나 커피와 함께 선보입니다. 와이키키 비치에서 도보 약 5분 거리라, 돌아가지 않고도 따뜻하게 설탕을 입힌 말라사다와 진짜 하와이 커피 한 잔을 즐길 수 있습니다.',
        highlights: [
          '갓 튀긴 말라사다 — 오리지널(설탕)과 속 채운 옵션',
          '부드러운 100% 코나 커피와 페어링',
          '와이키키 비치에서 약 5분',
          '매일 오전 7시–오후 9시 영업 — 언제든 간식으로 딱',
        ],
      },
      cta: '말라사다 메뉴 보기',
    },
    howToEat: {
      title: '말라사다 맛있게 즐기는 법',
      subtitle: '한 입 한 입을 제대로 즐기는 팁',
      tips: [
        {
          title: '따뜻할 때, 당일에',
          description: '말라사다는 튀긴 지 몇 분, 속이 아직 따뜻하고 폭신할 때가 최고입니다. 산 당일에, 되도록 그 자리에서 드세요. 따뜻한 말라사다와 식은 말라사다는 거의 다른 디저트입니다.',
        },
        {
          title: '코나 커피와 함께',
          description: '설탕을 입힌 말라사다의 단맛은 커피를 위해 태어난 듯합니다. 부드럽고 산미 낮은 100% 코나 커피가 완벽한 짝꿍이죠. 함께 주문해서 한 입 베어 물고 한 모금 마셔가며 즐겨보세요.',
        },
        {
          title: '속 채운 것도 도전',
          description: '플레인만 먹어봤다면 시야를 넓혀보세요. 하우피아(코코넛)나 커스터드 말라사다는 시원하고 크리미한 속이 따뜻한 반죽과 멋진 대비를 이룹니다. 새로운 맛을 손쉽게 만나는 방법이에요.',
        },
        {
          title: '믹스 박스로 나눠 먹기',
          description: '말라사다는 나눠 먹기에 제격입니다. 오리지널(설탕)에 속 채운 몇 가지를 더한 믹스 박스를 골라, 다 같이 한 입씩 맛보세요. 해변, 피크닉, 호텔 방에서도 완벽합니다.',
        },
      ],
    },
    faq: {
      title: '와이키키 말라사다에 대해 자주 묻는 질문',
      items: [
        {
          question: '와이키키에서 말라사다 맛집은 어디인가요?',
          answer: '와이키키에서 갓 튀긴 따뜻한 말라사다라면, 칼라카우아 애비뉴의 Kona Coffee Donut?이 부담 없이 들르기 좋습니다. 와이키키 비치에서 약 5분 거리예요. 오리지널(설탕)과 속 채운 말라사다를 모찌 도넛, 100% 코나 커피와 함께 선보입니다. 말라사다에서 가장 중요한 건 갓 튀겼는가이니, 갓 튀겨 따뜻한 것을 고르세요.',
        },
        {
          question: '말라사다가 뭔가요?',
          answer: '말라사다는 포르투갈식 하와이 튀김 도넛입니다. 가벼운 발효 반죽을 황금빛으로 튀긴 뒤 설탕에 굴린 것이죠. 가운데 구멍이 뚫린 일반 도넛과 달리 구멍이 없고, 커스터드·하우피아(코코넛)·초콜릿 등을 속으로 채운 경우가 많습니다. 1800년대 포르투갈 이민자들이 하와이에 전했고, 지금은 사랑받는 섬의 대표 간식입니다.',
        },
        {
          question: '말라사다에는 속이 들어 있나요?',
          answer: '둘 다 있습니다. 오리지널 말라사다는 속 없이 설탕을 입힌 플레인 반죽입니다. 많은 가게가 커스터드, 하우피아(코코넛), 초콜릿, 제철 과일과 릴리코이(패션프루트) 속을 넣은 말라사다도 함께 팝니다. 처음이라면 오리지널(설탕)을 먼저, 그다음 속 채운 것을 드셔보세요.',
        },
        {
          question: '말라사다 가격은 얼마인가요?',
          answer: '가게, 크기, 속 유무에 따라 다르지만 대체로 부담 없는 간식으로, 보통 개당 몇 달러 수준이고 나눠 먹기 좋은 믹스 박스도 있습니다. 정확한 최신 가격은 말라사다 메뉴를 확인하거나 매장에 문의하세요.',
        },
        {
          question: '말라사다에는 무엇이 잘 어울리나요?',
          answer: '커피가 정석 궁합입니다. 따뜻하게 설탕을 입힌 말라사다와 부드럽고 산미 낮은 100% 코나 커피는 하와이 최고의 조합 중 하나로, 커피가 단맛을 완벽하게 잡아줍니다. Kona Coffee Donut?에서는 둘을 함께 주문할 수 있어요.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 갓 튀긴 말라사다를',
      text: '2142 Kalakaua Ave의 Kona Coffee Donut?에서 갓 튀긴 따뜻한 말라사다와 100% 코나 커피를. 와이키키 비치에서 약 5분 거리입니다.',
      menuButton: '말라사다 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '와이키키 말라사다 맛집',
    },
  },
  zh: {
    hero: {
      title: '威基基最好吃的马拉萨达',
      subtitle: '寻找现炸、裹糖的葡萄牙夏威夷甜甜圈（2026）',
      updated: '2026年6月更新',
      readTime: '阅读约7分钟',
    },
    definition: {
      title: '怎样才算最好的马拉萨达？',
      text: '<strong>马拉萨达（Malasada）</strong>是一种<strong>源自葡萄牙的夏威夷油炸甜甜圈</strong>——把轻盈的发酵面团炸至金黄，再裹上砂糖。与中间有孔的经典甜甜圈不同，马拉萨达<strong>没有孔</strong>，而且常常<strong>夹有馅料</strong>，如卡仕达、haupia（椰子）或巧克力。最好的马拉萨达有几个共同点：<strong>现炸、趁热上桌</strong>，内里<strong>轻盈松软</strong>（绝不油腻），并裹上均匀的砂糖。威基基是品尝马拉萨达的最佳地点之一——在<strong>Kona Coffee Donut?</strong>，你可以在距威基基海滩约5分钟的地方，享用现炸马拉萨达搭配100%科纳咖啡。',
    },
    history: {
      title: '马拉萨达简史',
      subtitle: '从马德拉、亚速尔群岛到夏威夷的标志',
      p1: '马拉萨达随<strong>19世纪的葡萄牙移民</strong>来到夏威夷，他们中许多人来自马德拉岛和亚速尔群岛，前来夏威夷的甘蔗种植园工作。他们带来了家乡的配方"massa sovada"——柔软浓郁、裹满砂糖的油炸面团，很快便在岛上的厨房扎下了根。',
      p2: '传统上，马拉萨达在四旬期前一天的<strong>"忏悔星期二（油腻星期二）"</strong>制作，目的是在斋戒季开始前用掉家里的黄油、糖和鸡蛋。在夏威夷，这一习俗演变成了<strong>"马拉萨达日"</strong>，时至今日，每逢这一天面包店门口都会排起长队。',
      p3: '历经几代，马拉萨达从一年一次的应节美食，变成了<strong>夏威夷的日常主食</strong>。本地面包店和甜甜圈店让它声名远播，如今温热、裹糖的马拉萨达已是岛上最受喜爱的甜点之一——与刨冰、麻糬甜甜圈齐名。',
      p4: '那么购买时该看什么？好的马拉萨达是<strong>现点现炸或明显新鲜</strong>的，依然温热，色泽金黄（不发黑也不油腻），咬下去轻盈松软，砂糖裹得均匀。如果还能配上一杯好咖啡，那就更完美了。',
    },
    comparison: {
      title: '最好的马拉萨达标准',
      subtitle: '快速品质清单',
      intro: '并非所有马拉萨达都一样。区分一个出色款和一个平庸款的，正是以下这些。在纠结去哪家时不妨参考：',
      headers: {
        feature: '看什么',
        bingsu: '最佳',
        shavedIce: '一般',
        kakigori: '略过',
      },
      rows: [
        {
          feature: '新鲜度',
          bingsu: '现点现炸，趁热上桌',
          shavedIce: '提前炸好，放着',
          kakigori: '冰冷而扎实',
        },
        {
          feature: '口感',
          bingsu: '内里轻盈松软',
          shavedIce: '略带面团感，尚可',
          kakigori: '厚重或油腻',
        },
        {
          feature: '砂糖',
          bingsu: '均匀、足量的糖衣',
          shavedIce: '偏少或不均',
          kakigori: '受潮、糖已化开',
        },
        {
          feature: '馅料',
          bingsu: '有haupia／卡仕达可选',
          shavedIce: '仅原味（砂糖）',
          kakigori: '没有新鲜选项',
        },
        {
          feature: '搭配',
          bingsu: '配100%科纳咖啡',
          shavedIce: '普通滴滤咖啡',
          kakigori: '不提供饮品',
        },
        {
          feature: '结论',
          bingsu: '当场趁热吃',
          shavedIce: '应急时尚可',
          kakigori: '值得等一个现炸的',
        },
      ],
      note: '最关键的单一因素就是新鲜度。一个炸好几分钟、仍然温热的马拉萨达，每次都胜过冷掉的——这也正是在威基基现买现吃才是正解的原因。',
    },
    types: {
      title: '值得一试的马拉萨达口味与馅料',
      subtitle: '从经典砂糖到haupia及更多',
      items: [
        {
          name: '原味（砂糖）',
          korean: '经典款',
          description: '开创一切的那一款——现炸的原味马拉萨达，裹上细砂糖。没有馅料，也无处藏拙：只有温热松软的面团和酥脆香甜的糖衣。如果只尝一种，就选它。它最能检验一家店是否炸得到位。',
          icon: '🍩',
        },
        {
          name: '卡仕达夹心',
          korean: '浓郁香滑',
          description: '注入顺滑香草卡仕达的经典马拉萨达。温热面团与冰凉香滑的内馅形成完美反差，作为最受欢迎的夹心口味自有道理。配一杯浓咖啡平衡甜度更佳。',
          icon: '🍮',
        },
        {
          name: 'Haupia（椰子）',
          korean: '本地最爱',
          description: '夹有haupia——丝滑的夏威夷椰子布丁。这是馅料中最"本地"的一款，想尝点岛屿风味绝不能错过。清爽、芳香，也不会太甜。',
          icon: '🥥',
        },
        {
          name: '巧克力',
          korean: '人人喜爱',
          description: '夹有浓郁巧克力或巧克力奶油的马拉萨达。孩子们的最爱，对爱吃甜的人也是稳妥之选。与优质科纳咖啡中的巧克力香气尤其相配。',
          icon: '🍫',
        },
        {
          name: 'Li Hing与季节限定',
          korean: '限定／趣味',
          description: '从li hing mui糖粉（甜咸酸兼具的本地最爱）到季节水果与lilikoi（百香果）馅，这些轮换口味是品尝本土吃不到之物的乐趣所在。问问当天现炸的是哪几款。',
          icon: '🌺',
        },
      ],
    },
    whyHawaii: {
      title: '为什么要在威基基吃马拉萨达',
      points: [
        {
          title: '在发源地品尝夏威夷标志',
          description: '马拉萨达是一款根植葡萄牙的地道夏威夷名物。在它成名的这片岛屿上品尝，本身就是体验的一部分。在威基基，这份名物触手可及，无需长途驾车。',
        },
        {
          title: '趁热现炸最好吃',
          description: '马拉萨达在出锅几分钟内最为绝佳，此时内里仍温热松软、糖衣酥脆。就近买一个现炸的，远胜过买一盒放了几个小时的。',
        },
        {
          title: '与100%科纳咖啡绝配',
          description: '一个温热香甜的马拉萨达配一杯100%科纳咖啡，是夏威夷的绝佳组合之一。咖啡顺滑、低酸而醇厚，恰好化解甜腻——而科纳咖啡正是在夏威夷本地种植的。',
        },
        {
          title: '距威基基海滩约5分钟',
          description: '无需特地安排行程。一个现炸的马拉萨达离沙滩只需步行片刻或一小段车程——好买、好分享，也是去海滩往返路上带一盒的完美甜点。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基哪里能吃到现炸马拉萨达',
      intro: '在威基基想来一个现炸温热的马拉萨达？Kona Coffee Donut? 是个轻松顺路的选择。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '坐落于威基基核心地段的卡拉卡瓦大道，Kona Coffee Donut? 供应现炸马拉萨达，以及麻糬甜甜圈和100%科纳咖啡。距威基基海滩步行约5分钟，让你无需绕路，就能享用温热、裹糖的马拉萨达和一杯真正的夏威夷咖啡。',
        highlights: [
          '现炸马拉萨达——原味（砂糖）及多种夹心可选',
          '搭配顺滑的100%科纳咖啡',
          '距威基基海滩约5分钟',
          '每天上午7点–晚上9点营业——随时都是好时机',
        ],
      },
      cta: '查看马拉萨达菜单',
    },
    howToEat: {
      title: '如何享用马拉萨达',
      subtitle: '把每一口吃到极致',
      tips: [
        {
          title: '趁热吃，当天吃',
          description: '马拉萨达在出锅几分钟内、内里仍温热松软时最好吃。尽量在购买当天食用，最好当场就吃。温热的与冷掉的，几乎是两种不同的甜点。',
        },
        {
          title: '配一杯科纳咖啡',
          description: '裹糖马拉萨达的甜，天生为咖啡而备。一杯顺滑、低酸的100%科纳咖啡是绝佳搭档——一起点，交替着咬一口、抿一口。',
        },
        {
          title: '试试夹心款',
          description: '如果你只吃过原味，不妨尝点新的。haupia（椰子）或卡仕达马拉萨达带来冰凉香滑的内馅，与温热面团形成绝妙反差。这是轻松尝鲜的好办法。',
        },
        {
          title: '点一盒拼盘分享',
          description: '马拉萨达天生适合分享。点一盒拼盘——几个原味（砂糖）加上几款夹心——大家就能每样咬一口。无论海滩、野餐还是酒店房间都很完美。',
        },
      ],
    },
    faq: {
      title: '关于威基基马拉萨达的常见问题',
      items: [
        {
          question: '在威基基哪里能吃到最好吃的马拉萨达？',
          answer: '想在威基基吃现炸温热的马拉萨达，卡拉卡瓦大道上的Kona Coffee Donut? 顺路又轻松——距威基基海滩约5分钟。这里供应原味（砂糖）和夹心马拉萨达，以及麻糬甜甜圈和100%科纳咖啡。马拉萨达最重要的就是新鲜，所以要选现炸、趁热上桌的。',
        },
        {
          question: '马拉萨达是什么？',
          answer: '马拉萨达是一种葡萄牙夏威夷油炸甜甜圈：把轻盈的发酵面团炸至金黄，再裹上砂糖。与中间有孔的经典甜甜圈不同，它没有孔，而且常夹有卡仕达、haupia（椰子）或巧克力。它由19世纪的葡萄牙移民带到夏威夷，如今是备受喜爱的岛屿主食。',
        },
        {
          question: '马拉萨达有夹心吗？',
          answer: '两种都有。原味马拉萨达是不带夹心、裹糖的原味面团。许多店也提供夹心马拉萨达，馅料有卡仕达、haupia（椰子）、巧克力，以及季节水果和lilikoi（百香果）。初次尝试的话，先来个原味（砂糖），再试一个夹心款。',
        },
        {
          question: '马拉萨达多少钱？',
          answer: '价格因店家、大小及是否夹心而异，但总体是平价小食——通常每个仅几美元，还有适合分享的拼盘盒。准确的最新价格请查看马拉萨达菜单或到店询问。',
        },
        {
          question: '马拉萨达适合搭配什么？',
          answer: '咖啡是经典搭配。一个温热裹糖的马拉萨达配一杯顺滑、低酸的100%科纳咖啡，是夏威夷的绝佳组合之一——咖啡恰好平衡甜度。在Kona Coffee Donut? 你可以把两者一起点。',
        },
      ],
    },
    cta: {
      title: '来威基基尝一个现炸马拉萨达',
      text: '前往2142 Kalakaua Ave的Kona Coffee Donut?，享用现炸温热的马拉萨达搭配100%科纳咖啡——距威基基海滩约5分钟。',
      menuButton: '查看马拉萨达菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '威基基马拉萨达',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Best Malasadas in Waikiki (2026): Fresh Portuguese-Hawaiian Donuts',
  description: 'Where to get the best malasadas in Waikiki. What makes a great malasada, flavors and fillings to try, and where to find fresh malasadas paired with 100% Kona coffee near Waikiki Beach.',
  image: 'https://www.konacoffeedonut.com/images/blog/best-malasadas-waikiki.jpeg',
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
    '@id': 'https://www.konacoffeedonut.com/en/blog/best-malasadas-waikiki',
  },
  keywords: 'best malasadas waikiki, malasada waikiki, fresh malasadas waikiki, where to get malasadas in waikiki, malasada, kona coffee donut',
  wordCount: 1200,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I get the best malasadas in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For fresh, warm malasadas in Waikiki, Kona Coffee Donut? on Kalākaua Avenue is an easy stop — about 5 minutes from Waikiki Beach. They serve original sugar and filled malasadas alongside mochi donuts and 100% Kona coffee. The most important thing with any malasada is freshness, so look for one fried fresh and served warm.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a malasada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A malasada is a Portuguese-Hawaiian fried donut: a ball of light yeast dough fried until golden and rolled in sugar. Unlike a classic ring donut, it has no hole and is often filled with custard, haupia (coconut), or chocolate. It was brought to Hawaii by Portuguese immigrants in the 1800s and is now a beloved island staple.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are malasadas filled?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They can be both. The original malasada is plain dough rolled in sugar with no filling. Many shops also offer filled malasadas with custard, haupia (coconut), chocolate, or seasonal fruit and lilikoi (passion fruit). If you are new to malasadas, try an original sugar first, then a filled one.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much is a malasada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prices vary by shop, size, and whether the malasada is filled, but they are generally an affordable treat — often just a few dollars each, with mixed boxes available for sharing. For exact current pricing, check the malasada menu or ask in store.',
      },
    },
    {
      '@type': 'Question',
      name: 'What pairs well with malasadas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Coffee is the classic pairing. A warm, sugar-rolled malasada with a cup of smooth, low-acid 100% Kona coffee is one of the great Hawaii combinations — the coffee balances the sweetness perfectly. At Kona Coffee Donut? you can order both together.',
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

export default function BestMalasadasWaikikiPage() {
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
          src="/images/blog/best-malasadas-waikiki.jpeg"
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

        {/* History of the Malasada */}
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

        {/* Types of Malasada */}
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

        {/* Why Get Malasadas in Waikiki */}
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

        {/* Where to Get Malasadas in Waikiki */}
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
                href={`/${locale}/menu/malasada`}
                className="inline-block bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-sky-100 transition-colors"
              >
                {t.whereToGet.cta}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* How to Enjoy a Malasada */}
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
              href={`/${locale}/blog/what-is-a-malasada`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 font-semibold transition-colors"
            >
              → What Is a Malasada?
            </Link>
            <Link
              href={`/${locale}/blog/malasada-vs-mochi-donut-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Malasada vs Mochi Donut
            </Link>
            <Link
              href={`/${locale}/menu/malasada`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Malasada Menu
            </Link>
            <Link
              href={`/${locale}/menu/kona-coffee`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Kona Coffee
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
                  href={`/${locale}/menu/malasada`}
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
