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
      title: 'What Is Matcha?',
      subtitle: 'The Complete Guide to Japan\'s Iconic Green Tea — and Every Flavor We Pour in Waikiki',
      updated: 'Updated June 2026',
      readTime: '8 min read',
    },
    definition: {
      title: 'What is Matcha?',
      text: '<strong>Matcha (抹茶)</strong> is a <strong>finely stone-ground Japanese green tea</strong> made from shade-grown tea leaves. Unlike regular green tea, which is steeped and discarded, matcha is the <strong>whole leaf ground into a vivid green powder</strong> and <strong>whisked into water or milk</strong> — so you drink the entire leaf. The result is an <strong>earthy, umami-rich, smooth flavor</strong> with naturally bright green color, plus a calm, steady energy from caffeine paired with <strong>L-theanine</strong>. Matcha comes in two grades: <strong>ceremonial</strong> (smoother, for drinking straight) and <strong>culinary</strong> (bolder, for lattes and baking).',
    },
    history: {
      title: 'The History of Matcha',
      subtitle: 'From Tang Dynasty Tea to a Waikiki Café Favorite',
      p1: 'Powdered tea began in <strong>China during the Tang dynasty (618–907)</strong>, where tea leaves were steamed, pressed into bricks, and ground into powder before whisking. This early powdered-tea culture was refined during the Song dynasty, but it eventually faded in China as loose-leaf brewing took over.',
      p2: 'Powdered tea found its true home in <strong>Japan</strong>. The Zen monk <strong>Eisai brought tea seeds and the whisking method back from China in 1191</strong>, planting them near Kyoto. Buddhist monks embraced matcha because the L-theanine kept them calm yet alert during long hours of meditation — a perfect match for Zen practice.',
      p3: 'Over the following centuries matcha became the heart of the <strong>Japanese tea ceremony (chanoyu, 茶の湯)</strong>, refined by tea masters like Sen no Rikyū into a meditative ritual built on harmony, respect, purity, and tranquility. Every gesture — the whisk, the bowl, the bow — was deliberate.',
      p4: 'The undisputed heartland of matcha is <strong>Uji, near Kyoto</strong>, whose shaded gardens still produce some of the finest tea in the world. In the 2010s matcha exploded globally as a café drink — the matcha latte — spreading from Tokyo to Los Angeles to Honolulu. Today you can sip a freshly whisked matcha latte right here in <strong>Waikiki</strong>, just minutes from the beach.',
    },
    comparison: {
      title: 'Matcha vs Coffee vs Hojicha',
      subtitle: 'How Does Matcha Compare?',
      intro: 'Matcha, coffee, and hojicha are three very different ways to get your caffeine. Here\'s how they stack up so you can pick your perfect cup:',
      headers: {
        feature: 'Feature',
        bingsu: 'Matcha',
        shavedIce: 'Coffee',
        kakigori: 'Hojicha',
      },
      rows: [
        {
          feature: 'Caffeine',
          bingsu: 'Moderate, steady release',
          shavedIce: 'High, fast spike',
          kakigori: 'Low — gentle and mild',
        },
        {
          feature: 'Taste',
          bingsu: 'Grassy, sweet umami',
          shavedIce: 'Roasty, bold, bitter',
          kakigori: 'Nutty, toasty, caramel',
        },
        {
          feature: 'Color',
          bingsu: 'Vivid green',
          shavedIce: 'Deep brown',
          kakigori: 'Warm amber',
        },
        {
          feature: 'Energy',
          bingsu: 'Calm focus (L-theanine)',
          shavedIce: 'Jittery, can crash',
          kakigori: 'Soft, soothing lift',
        },
        {
          feature: 'Best For',
          bingsu: 'All-day focus, latte lovers',
          shavedIce: 'A quick morning kick',
          kakigori: 'Evening, low-caffeine sips',
        },
        {
          feature: 'Antioxidants',
          bingsu: 'Very high (whole leaf)',
          shavedIce: 'Moderate',
          kakigori: 'Moderate (roasted leaf)',
        },
      ],
      note: 'The key difference is that with matcha you drink the entire ground leaf whisked into your cup, so you get more antioxidants and that signature calm-energy from L-theanine — a steadier lift than coffee, with far more flavor than plain green tea.',
    },
    types: {
      title: 'Every Matcha Flavor We Pour in Waikiki',
      subtitle: 'Real Japanese Matcha, Whisked Fresh — with Hawaiian Tropical Twists',
      items: [
        {
          name: 'Classic Matcha Latte',
          korean: '$8.95',
          description: 'Where everyone should start. Real Japanese matcha whisked smooth and poured over your choice of milk for a balanced, earthy-sweet, vivid-green latte. Order it hot or iced. This is the purest way to taste our matcha — and the perfect partner for a mochi donut.',
          icon: '🍵',
        },
        {
          name: 'Strawberry Matcha',
          korean: '$10.95 · bestseller',
          description: 'Our most photogenic drink: a layer of sweet strawberry over whisked matcha and milk. The bright berry and grassy matcha play off each other beautifully — fruity on top, earthy underneath. Listed on our menu as the Strawberry Latte, and an instant favorite.',
          icon: '🍓',
        },
        {
          name: 'Tropical Matcha — Mango · Guava · Lilikoi',
          korean: '$8.95 each',
          description: 'Our Hawaiian twist on matcha. Choose Mango Matcha, Guava Matcha, or Lilikoi (passion fruit) Matcha — island fruit flavors layered with real whisked matcha. Tropical, refreshing, and impossible to find back home. Best served iced in the Waikiki sun.',
          icon: '🥭',
        },
        {
          name: 'Coconut & Banana Matcha',
          korean: '$8.95 each',
          description: 'Creamy, dessert-like takes on the classic. Coconut Matcha brings a smooth island richness, while Banana Matcha tastes like a green-tea milkshake. Both round out matcha\'s earthy edge with mellow sweetness — crowd-pleasers for first-time matcha drinkers.',
          icon: '🥥',
        },
        {
          name: 'Azuki (Red Bean) Latte',
          korean: '$10.95',
          description: 'A Japanese-Korean classic for fans of traditional flavor. Sweet azuki red bean blended into a creamy latte — comforting, nutty, and lightly sweet. Pairs perfectly alongside a matcha latte if you want to taste two sides of Japanese café culture in one visit.',
          icon: '🫘',
        },
      ],
    },
    whyHawaii: {
      title: 'Why Get Matcha in Waikiki',
      points: [
        {
          title: 'Real Japanese Matcha, Whisked Fresh',
          description: 'We use genuine Japanese matcha, whisked to order — not a sugary pre-mix powder. That means the true vivid-green color, earthy-umami flavor, and the calm, steady caffeine matcha is loved for. Order it hot or iced, exactly the way you like it.',
        },
        {
          title: '9 Flavors, Including Hawaiian Tropical Twists',
          description: 'From the classic matcha latte to Strawberry, Mango, Guava, Lilikoi, Coconut, and Banana matcha — plus a hojicha latte and azuki red bean latte. Our island fruit twists like lilikoi and guava are flavors you simply won\'t find at a mainland café.',
        },
        {
          title: 'Pairs with Our Matcha Mochi Donut',
          description: 'Matcha tastes even better with something to dip. Our chewy mochi donuts — including a matcha mochi donut — were made to go with a green tea latte. It\'s the ultimate Waikiki treat combo: earthy matcha and a soft, bouncy donut.',
        },
        {
          title: 'Calm Caffeine, ~5 Minutes from the Beach',
          description: 'Matcha\'s L-theanine gives you smooth, jitter-free energy — perfect fuel for a beach day. And we\'re only about a 5-minute walk from Waikiki Beach on Kalākaua Ave, so you can grab your matcha and have your toes in the sand minutes later.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Get Matcha in Waikiki',
      intro: 'If you\'re craving real matcha in Waikiki, Kona Coffee Donut? is your spot.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Right on Kalākaua Avenue in the heart of Waikiki, Kona Coffee Donut? pours real matcha and hojicha lattes in 9 flavors, brews 100% Kona coffee, and makes fresh mochi donuts daily. We\'re about a 5-minute walk from Waikiki Beach and open every day from 7AM to 9PM — perfect for a morning matcha or an afternoon pick-me-up.',
        highlights: [
          'Real Japanese matcha & hojicha lattes — 9 flavors',
          'Island twists: lilikoi, guava, mango, coconut & banana matcha',
          'Pairs perfectly with our matcha mochi donut',
          '~5 min from Waikiki Beach · open daily 7AM–9PM',
        ],
      },
      cta: 'See Our Matcha & Hojicha Menu',
    },
    howToEat: {
      title: 'How to Enjoy Matcha',
      subtitle: 'Tips for Your First (or Hundredth) Matcha',
      tips: [
        {
          title: 'Try the Classic Latte First',
          description: 'Before the fruit flavors, taste a classic matcha latte. It\'s the truest expression of real matcha — earthy, smooth, and lightly sweet — and gives you a baseline for everything else on the menu. Hot or iced, it\'s where every matcha journey should begin.',
        },
        {
          title: 'Go Tropical Next',
          description: 'Once you know the classic, branch out into our Hawaiian twists — Lilikoi, Mango, or Guava matcha. The island fruit brightens the grassy matcha and turns it into something you can only get in Waikiki. These are the ones to photograph for the feed.',
        },
        {
          title: 'Pair It with a Matcha Mochi Donut',
          description: 'Matcha and mochi are a match made in heaven. Order a matcha mochi donut alongside your latte — the chewy, lightly sweet donut balances the earthy tea perfectly. It\'s the combo our regulars come back for again and again.',
        },
        {
          title: 'Order It Iced for the Waikiki Heat',
          description: 'On a warm island afternoon, iced matcha is unbeatable. The cold smooths out the umami and makes the vivid green even more refreshing. Grab one to go and sip it on the short walk to the beach — it\'s the perfect Waikiki refresher.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About Matcha',
      items: [
        {
          question: 'What is matcha?',
          answer: 'Matcha is a finely stone-ground powder made from shade-grown Japanese green tea leaves. Instead of steeping and discarding the leaves like regular tea, you whisk the whole leaf into water or milk and drink it — giving matcha its vivid green color, earthy-umami flavor, and a calm, steady energy from caffeine combined with L-theanine.',
        },
        {
          question: 'Is matcha better than coffee?',
          answer: 'It depends on what you want. Matcha has less caffeine than coffee but releases it more slowly thanks to L-theanine, so you get calm, jitter-free focus without the crash. Coffee gives a faster, stronger kick. Many people switch to matcha for steadier all-day energy — and at Kona Coffee Donut? in Waikiki you can try both.',
        },
        {
          question: 'What matcha flavors do you have in Waikiki?',
          answer: 'We pour 9 matcha and hojicha flavors: the Classic Matcha Latte ($8.95), Strawberry Matcha ($10.95), Mango, Guava, Lilikoi, Coconut, and Banana Matcha ($8.95 each), an Azuki red bean latte ($10.95), and a Hojicha Latte ($8.95). We also make a matcha mochi donut and a green-tea (matcha) bingsu.',
        },
        {
          question: 'Does matcha have caffeine?',
          answer: 'Yes. Matcha contains a moderate amount of caffeine — generally less than a cup of coffee but more than steeped green tea, since you drink the whole leaf. The caffeine is paired with L-theanine, an amino acid that smooths the energy into a calm, focused lift rather than a jittery spike.',
        },
        {
          question: 'Where can I get matcha near Waikiki Beach?',
          answer: 'Kona Coffee Donut? at 2142 Kalakaua Ave is about a 5-minute walk from Waikiki Beach and pours real Japanese matcha and hojicha lattes in 9 flavors, plus 100% Kona coffee and fresh mochi donuts. We\'re open daily from 7AM to 9PM.',
        },
      ],
    },
    cta: {
      title: 'Try Matcha in Waikiki',
      text: 'Visit Kona Coffee Donut? at 2142 Kalakaua Ave and taste our full matcha & hojicha lineup — whisked fresh, just minutes from the beach.',
      menuButton: 'View Matcha Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'What Is Matcha?',
    },
  },
  ja: {
    hero: {
      title: '抹茶とは？',
      subtitle: '日本を代表する緑茶の完全ガイド — そしてワイキキで味わえる全フレーバー',
      updated: '2026年6月更新',
      readTime: '8分で読める',
    },
    definition: {
      title: '抹茶とは？',
      text: '<strong>抹茶（まっちゃ）</strong>は、覆いをかけて育てた茶葉を<strong>石臼で細かく挽いた日本の緑茶</strong>です。茶葉を湯に浸して捨てる通常の緑茶と違い、抹茶は<strong>茶葉まるごとを鮮やかな緑の粉末</strong>にし、<strong>湯やミルクで点てて</strong>飲みます。つまり茶葉そのものを丸ごといただくのです。<strong>うまみ豊かでまろやかな味わい</strong>と鮮やかな緑色が特徴で、カフェインと<strong>L-テアニン</strong>による穏やかで持続的なエネルギーをもたらします。抹茶には<strong>濃茶向きのセレモニアルグレード</strong>と、<strong>ラテや製菓向きのカリナリーグレード</strong>の2種類があります。',
    },
    history: {
      title: '抹茶の歴史',
      subtitle: '唐の時代の茶から、ワイキキのカフェの定番まで',
      p1: '粉末状のお茶は<strong>中国・唐の時代（618〜907年）</strong>に始まりました。茶葉を蒸して固め、点てる前に挽いて粉末にしていたのです。この粉茶文化は宋の時代に洗練されましたが、後に茶葉を煎じる方式が主流となり、中国では次第に廃れていきました。',
      p2: '粉茶が真の故郷を見出したのは<strong>日本</strong>でした。禅僧の<strong>栄西が1191年に中国から茶の種と点て方を持ち帰り</strong>、京都の近くに植えました。L-テアニンによって長時間の坐禅でも心穏やかに集中できることから、僧侶たちは抹茶を重んじました。まさに禅の修行にぴったりだったのです。',
      p3: 'その後の数世紀で抹茶は<strong>日本の茶道（茶の湯）</strong>の中心となりました。千利休らの茶人によって、和・敬・清・寂を重んじる瞑想的な儀式へと昇華されたのです。茶筅も、茶碗も、お辞儀も — すべての所作に意味が込められていました。',
      p4: '抹茶の本場として揺るぎないのが<strong>京都・宇治</strong>です。覆い下で育てられた宇治の茶園は、今も世界最高峰のお茶を生み出しています。2010年代には抹茶ラテとして世界的に大ブームとなり、東京からロサンゼルス、ホノルルへと広がりました。今では点てたての抹茶ラテを、ビーチからわずか数分の<strong>ワイキキ</strong>で味わうことができます。',
    },
    comparison: {
      title: '抹茶 vs コーヒー vs ほうじ茶',
      subtitle: '抹茶はどう違う？',
      intro: '抹茶、コーヒー、ほうじ茶は、カフェインを摂る三者三様の方法です。あなたにぴったりの一杯を選べるよう比較してみましょう：',
      headers: {
        feature: '特徴',
        bingsu: '抹茶',
        shavedIce: 'コーヒー',
        kakigori: 'ほうじ茶',
      },
      rows: [
        {
          feature: 'カフェイン',
          bingsu: '中程度・ゆっくり持続',
          shavedIce: '高い・急上昇',
          kakigori: '低め・穏やか',
        },
        {
          feature: '味わい',
          bingsu: '草の香り・甘いうまみ',
          shavedIce: '香ばしく力強い苦み',
          kakigori: '香ばしくナッツ・キャラメル風味',
        },
        {
          feature: '色',
          bingsu: '鮮やかな緑',
          shavedIce: '深い茶色',
          kakigori: '温かみのある琥珀色',
        },
        {
          feature: 'エネルギー',
          bingsu: '穏やかな集中（L-テアニン）',
          shavedIce: '高ぶり・反動あり',
          kakigori: 'やわらかく癒される高揚',
        },
        {
          feature: 'おすすめ',
          bingsu: '一日中の集中・ラテ好きに',
          shavedIce: '朝のシャキッと一杯に',
          kakigori: '夜・低カフェインで一服',
        },
        {
          feature: '抗酸化成分',
          bingsu: '非常に高い（茶葉まるごと）',
          shavedIce: '中程度',
          kakigori: '中程度（焙煎茶葉）',
        },
      ],
      note: '最大の違いは、抹茶は挽いた茶葉を丸ごと点てて飲むという点です。だから抗酸化成分をより多く摂れ、L-テアニンによる独特の穏やかなエネルギーが得られます。コーヒーより安定した高まりで、ただの緑茶よりもずっと豊かな味わいです。',
    },
    types: {
      title: 'ワイキキで味わえる抹茶フレーバー全種',
      subtitle: '本格日本産抹茶を点てたてで — ハワイアンなトロピカルアレンジも',
      items: [
        {
          name: '抹茶ラテ（クラシック）',
          korean: '$8.95',
          description: 'まず最初に飲むべき一杯。本格日本産の抹茶をなめらかに点て、お好みのミルクに注いだ、バランスのよい大地の甘みと鮮やかな緑のラテです。ホットでもアイスでも。抹茶を最も純粋に味わえる一杯で、モチドーナツとの相性も抜群です。',
          icon: '🍵',
        },
        {
          name: 'ストロベリー抹茶',
          korean: '$10.95・人気No.1',
          description: '一番フォトジェニックな一杯。甘いストロベリーの層が、点てた抹茶とミルクの上に重なります。明るいベリーと草の香りの抹茶が美しく響き合い、上はフルーティー、下は大地の風味。メニューにはストロベリーラテとして掲載、たちまち定番人気に。',
          icon: '🍓',
        },
        {
          name: 'トロピカル抹茶 — マンゴー・グァバ・リリコイ',
          korean: '各$8.95',
          description: '抹茶のハワイアンアレンジ。マンゴー抹茶、グァバ抹茶、リリコイ（パッションフルーツ）抹茶からお選びください。南国フルーツの風味と本格点てたて抹茶の重なり。トロピカルで爽やか、本土では見つからない味です。ワイキキの日差しの下、アイスがおすすめ。',
          icon: '🥭',
        },
        {
          name: 'ココナッツ＆バナナ抹茶',
          korean: '各$8.95',
          description: 'クリーミーでデザートのようなアレンジ。ココナッツ抹茶はなめらかな南国のコク、バナナ抹茶はまるで抹茶ミルクシェイク。どちらも抹茶の大地の風味をまろやかな甘さで包みます。抹茶が初めての方にもおすすめの一杯です。',
          icon: '🥥',
        },
        {
          name: 'あずき（小豆）ラテ',
          korean: '$10.95',
          description: '伝統の味を愛する方へ、日韓おなじみの一杯。甘い小豆をクリーミーなラテに溶かし込んだ、ほっとする香ばしくほのかな甘さ。抹茶ラテと並べて味わえば、日本のカフェ文化の二つの顔を一度に楽しめます。',
          icon: '🫘',
        },
      ],
    },
    whyHawaii: {
      title: 'ワイキキで抹茶を飲むべき理由',
      points: [
        {
          title: '本格日本産抹茶を点てたてで',
          description: '甘い既製のミックス粉ではなく、本物の日本産抹茶を一杯ずつ点てています。だからこそ本来の鮮やかな緑色、大地のうまみ、そして抹茶ならではの穏やかで持続的なカフェインが楽しめます。ホットでもアイスでも、お好みのままに。',
        },
        {
          title: 'ハワイアンアレンジを含む9種のフレーバー',
          description: 'クラシックな抹茶ラテから、ストロベリー、マンゴー、グァバ、リリコイ、ココナッツ、バナナ抹茶まで — さらにほうじ茶ラテとあずきラテも。リリコイやグァバなどの南国アレンジは、本土のカフェでは決して味わえません。',
        },
        {
          title: '抹茶モチドーナツとの相性抜群',
          description: '抹茶は、何かをひたして食べるとさらに美味しい。抹茶モチドーナツを含む、もちもちのモチドーナツは緑茶ラテのために生まれたような存在です。大地の抹茶とやわらかく弾力あるドーナツ — 究極のワイキキおやつコンビです。',
        },
        {
          title: '穏やかなカフェイン、ビーチから徒歩約5分',
          description: '抹茶のL-テアニンは、高ぶりのないなめらかなエネルギーをくれます。ビーチデーの燃料に最適。カラカウア通りのお店はワイキキビーチから徒歩約5分。抹茶を手に、数分後には足を砂浜に。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキで抹茶を飲むなら',
      intro: 'ワイキキで本格抹茶をお探しなら、Kona Coffee Donut? へ。',
      shop: {
        name: 'Kona Coffee Donut?（コナコーヒードーナツ）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心、カラカウア通り沿いにあるKona Coffee Donut? では、本格抹茶とほうじ茶のラテを9種類、100%コナコーヒー、そして毎日手作りのモチドーナツをご用意。ワイキキビーチから徒歩約5分、毎日朝7時から夜9時まで営業。朝の抹茶にも午後の一服にもぴったりです。',
        highlights: [
          '本格日本産の抹茶＆ほうじ茶ラテ — 9種類',
          '南国アレンジ：リリコイ・グァバ・マンゴー・ココナッツ・バナナ抹茶',
          '抹茶モチドーナツとの相性抜群',
          'ワイキキビーチから徒歩約5分・毎日朝7時〜夜9時営業',
        ],
      },
      cta: '抹茶＆ほうじ茶メニューを見る',
    },
    howToEat: {
      title: '抹茶の楽しみ方',
      subtitle: '初めての一杯にも、百杯目にも',
      tips: [
        {
          title: 'まずはクラシックなラテから',
          description: 'フルーツフレーバーの前に、まずは抹茶ラテを。大地の風味、なめらかさ、ほのかな甘さ — 本格抹茶を最も忠実に表現した一杯で、他のメニューを楽しむための基準になります。ホットでもアイスでも、抹茶の旅はここから。',
        },
        {
          title: '次はトロピカルへ',
          description: 'クラシックを知ったら、ハワイアンアレンジへ。リリコイ、マンゴー、グァバ抹茶を。南国フルーツが草の香りの抹茶を明るく彩り、ワイキキでしか味わえない一杯に。SNS映え間違いなしです。',
        },
        {
          title: '抹茶モチドーナツと一緒に',
          description: '抹茶とモチは天国の組み合わせ。ラテと一緒に抹茶モチドーナツをぜひ。もちもちでほんのり甘いドーナツが、大地の抹茶を完璧に引き立てます。常連さんが何度も戻ってくる人気のコンビです。',
        },
        {
          title: 'ワイキキの暑さにはアイスで',
          description: '暖かい島の午後には、アイス抹茶が最高。冷たさがうまみをまろやかにし、鮮やかな緑をさらに爽やかに。テイクアウトして、ビーチまでの短い道のりで一口 — 完璧なワイキキのリフレッシュです。',
        },
      ],
    },
    faq: {
      title: '抹茶に関するよくある質問',
      items: [
        {
          question: '抹茶とは何ですか？',
          answer: '抹茶は、覆い下で育てた日本の緑茶の茶葉を石臼で細かく挽いた粉末です。通常のお茶のように茶葉を浸して捨てるのではなく、茶葉まるごとを湯やミルクで点てて飲みます。だから鮮やかな緑色、大地のうまみ、そしてカフェインとL-テアニンによる穏やかで持続的なエネルギーが得られるのです。',
        },
        {
          question: '抹茶はコーヒーより良いですか？',
          answer: '何を求めるかによります。抹茶はコーヒーよりカフェインが少なめですが、L-テアニンのおかげでゆっくり放出されるため、高ぶりや反動なく穏やかに集中できます。コーヒーはより速く強い刺激。安定した一日中のエネルギーを求めて抹茶に切り替える人も多く、ワイキキのKona Coffee Donut? では両方をお試しいただけます。',
        },
        {
          question: 'ワイキキではどんな抹茶フレーバーがありますか？',
          answer: '抹茶とほうじ茶の9フレーバーをご用意：クラシック抹茶ラテ（$8.95）、ストロベリー抹茶（$10.95）、マンゴー・グァバ・リリコイ・ココナッツ・バナナ抹茶（各$8.95）、あずきラテ（$10.95）、ほうじ茶ラテ（$8.95）。さらに抹茶モチドーナツと緑茶（抹茶）ビンスもあります。',
        },
        {
          question: '抹茶にカフェインは含まれますか？',
          answer: 'はい。抹茶には中程度のカフェインが含まれます。一般的にコーヒー一杯より少なめですが、茶葉まるごとを飲むため煎じた緑茶よりは多めです。カフェインはL-テアニンというアミノ酸と組み合わさり、高ぶる急上昇ではなく穏やかで集中できる高まりへと整えられます。',
        },
        {
          question: 'ワイキキビーチの近くで抹茶はどこで買えますか？',
          answer: '2142 Kalakaua Ave のKona Coffee Donut? はワイキキビーチから徒歩約5分。本格日本産の抹茶とほうじ茶のラテを9種類、100%コナコーヒー、出来たてのモチドーナツをご用意しています。毎日朝7時から夜9時まで営業しています。',
        },
      ],
    },
    cta: {
      title: 'ワイキキで抹茶を楽しもう',
      text: '2142 Kalakaua Ave のKona Coffee Donut? で、抹茶＆ほうじ茶の全ラインナップを — 点てたて、ビーチからわずか数分。',
      menuButton: '抹茶メニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: '抹茶とは？',
    },
  },
  ko: {
    hero: {
      title: '말차(마차)란?',
      subtitle: '일본을 대표하는 녹차의 모든 것 — 그리고 와이키키에서 맛볼 수 있는 모든 플레이버',
      updated: '2026년 6월 업데이트',
      readTime: '8분 소요',
    },
    definition: {
      title: '말차란?',
      text: '<strong>말차(抹茶, 마차)</strong>는 그늘에서 재배한 찻잎을 <strong>맷돌로 곱게 갈아 만든 일본식 녹차</strong>입니다. 찻잎을 우려내고 버리는 일반 녹차와 달리, 말차는 <strong>찻잎 전체를 선명한 초록빛 가루</strong>로 만들어 <strong>물이나 우유에 격불(거품 내어 저음)</strong>해 마십니다. 즉, 찻잎 한 장을 통째로 마시는 셈이죠. <strong>고소하고 감칠맛이 풍부한 부드러운 맛</strong>과 선명한 초록색이 특징이며, 카페인과 <strong>L-테아닌</strong>이 어우러진 차분하고 꾸준한 에너지를 줍니다. 말차에는 그대로 마시기 좋은 <strong>세리머니얼(다도용) 등급</strong>과 라테·베이킹용인 <strong>컬리너리(요리용) 등급</strong>이 있습니다.',
    },
    history: {
      title: '말차의 역사',
      subtitle: '당나라의 차에서 와이키키 카페의 인기 메뉴까지',
      p1: '가루차는 <strong>중국 당나라(618~907년)</strong> 시대에 시작되었습니다. 찻잎을 쪄서 벽돌 모양으로 압축한 뒤, 격불하기 전에 갈아 가루로 만들었죠. 이 초기 가루차 문화는 송나라 때 더욱 정교해졌지만, 이후 잎차를 우려 마시는 방식이 주류가 되면서 중국에서는 점차 사라졌습니다.',
      p2: '가루차가 진정한 고향을 찾은 곳은 바로 <strong>일본</strong>이었습니다. 선승 <strong>에이사이가 1191년 중국에서 차 씨앗과 격불법을 가지고 돌아와</strong> 교토 근처에 심었습니다. L-테아닌 덕분에 오랜 좌선 중에도 마음이 차분하면서 또렷하게 깨어 있을 수 있어, 승려들은 말차를 귀하게 여겼습니다. 선 수행에 더없이 잘 맞았던 것이죠.',
      p3: '이후 수 세기에 걸쳐 말차는 <strong>일본 다도(茶の湯, 차노유)</strong>의 중심이 되었습니다. 센노 리큐 같은 다인들이 화(和)·경(敬)·청(淸)·적(寂)을 중시하는 명상적 의식으로 승화시켰죠. 차선(거품기)도, 다완(찻사발)도, 절도 — 모든 동작에 깊은 뜻이 담겨 있었습니다.',
      p4: '말차의 명실상부한 본고장은 <strong>교토 인근의 우지(宇治)</strong>입니다. 그늘에서 재배되는 우지의 차밭은 지금도 세계 최고 수준의 차를 길러냅니다. 2010년대에는 말차 라테로 전 세계적인 열풍이 불어 도쿄에서 로스앤젤레스, 호놀룰루까지 퍼졌습니다. 이제는 갓 격불한 말차 라테를 해변에서 단 몇 분 거리인 <strong>와이키키</strong>에서 즐길 수 있습니다.',
    },
    comparison: {
      title: '말차 vs 커피 vs 호지차',
      subtitle: '말차는 무엇이 다를까?',
      intro: '말차, 커피, 호지차는 카페인을 즐기는 세 가지 전혀 다른 방법입니다. 나에게 딱 맞는 한 잔을 고를 수 있도록 비교해 보았습니다:',
      headers: {
        feature: '특징',
        bingsu: '말차',
        shavedIce: '커피',
        kakigori: '호지차',
      },
      rows: [
        {
          feature: '카페인',
          bingsu: '중간, 천천히 꾸준하게',
          shavedIce: '높음, 빠르게 치솟음',
          kakigori: '낮음 — 부드럽고 순함',
        },
        {
          feature: '맛',
          bingsu: '풀향, 달콤한 감칠맛',
          shavedIce: '로스팅 향, 진하고 쌉쌀함',
          kakigori: '고소하고 구수한 캐러멜 풍미',
        },
        {
          feature: '색',
          bingsu: '선명한 초록',
          shavedIce: '진한 갈색',
          kakigori: '따뜻한 호박색',
        },
        {
          feature: '에너지',
          bingsu: '차분한 집중(L-테아닌)',
          shavedIce: '초조함, 급락 가능',
          kakigori: '부드럽고 편안한 상승',
        },
        {
          feature: '추천',
          bingsu: '하루 종일 집중, 라테 애호가',
          shavedIce: '아침의 빠른 각성',
          kakigori: '저녁, 저카페인 한 잔',
        },
        {
          feature: '항산화 성분',
          bingsu: '매우 높음(찻잎 통째)',
          shavedIce: '중간',
          kakigori: '중간(로스팅 찻잎)',
        },
      ],
      note: '가장 큰 차이는 말차는 갈아낸 찻잎 전체를 격불해 마신다는 점입니다. 그래서 항산화 성분을 더 많이 섭취하고, L-테아닌 특유의 차분한 에너지를 얻을 수 있죠. 커피보다 안정적인 상승감에, 일반 녹차보다 훨씬 풍부한 맛입니다.',
    },
    types: {
      title: '와이키키에서 맛볼 수 있는 모든 말차 플레이버',
      subtitle: '진짜 일본 말차를 갓 격불 — 하와이안 트로피컬 변주까지',
      items: [
        {
          name: '클래식 말차 라테',
          korean: '$8.95',
          description: '누구나 여기서 시작해야 합니다. 진짜 일본 말차를 부드럽게 격불해 원하는 우유에 부은, 균형 잡힌 고소한 단맛의 선명한 초록빛 라테. 따뜻하게도 차갑게도 즐기세요. 말차를 가장 순수하게 맛보는 방법이자, 모찌 도넛과 환상의 짝꿍입니다.',
          icon: '🍵',
        },
        {
          name: '딸기 말차',
          korean: '$10.95 · 베스트셀러',
          description: '가장 사진발 잘 받는 한 잔. 격불한 말차와 우유 위에 달콤한 딸기 층이 올라갑니다. 상큼한 베리와 풀향의 말차가 아름답게 어우러져, 위는 상큼하고 아래는 고소합니다. 메뉴에는 딸기 라테로 표기되며, 단숨에 인기 메뉴가 되었습니다.',
          icon: '🍓',
        },
        {
          name: '트로피컬 말차 — 망고·구아바·리리코이',
          korean: '각 $8.95',
          description: '말차의 하와이안 변주. 망고 말차, 구아바 말차, 리리코이(패션프루트) 말차 중 선택하세요. 섬 과일의 풍미가 진짜 갓 격불한 말차와 겹쳐집니다. 트로피컬하고 상큼하며, 본토에서는 찾을 수 없는 맛. 와이키키 햇살 아래 아이스로 즐기세요.',
          icon: '🥭',
        },
        {
          name: '코코넛 & 바나나 말차',
          korean: '각 $8.95',
          description: '크리미하고 디저트 같은 변주. 코코넛 말차는 부드러운 섬의 풍미를, 바나나 말차는 녹차 밀크셰이크 같은 맛을 냅니다. 둘 다 말차의 고소한 끝맛을 부드러운 단맛으로 감싸줘, 말차가 처음인 분께도 강력 추천합니다.',
          icon: '🥥',
        },
        {
          name: '아즈키(단팥) 라테',
          korean: '$10.95',
          description: '전통의 맛을 사랑하는 분께, 한일 모두에게 친숙한 한 잔. 달콤한 아즈키 단팥을 크리미한 라테에 녹여낸, 포근하고 고소하며 은은하게 단맛이 도는 음료. 말차 라테와 나란히 즐기면 일본 카페 문화의 두 얼굴을 한 번에 맛볼 수 있습니다.',
          icon: '🫘',
        },
      ],
    },
    whyHawaii: {
      title: '와이키키에서 말차를 마셔야 하는 이유',
      points: [
        {
          title: '진짜 일본 말차를 갓 격불',
          description: '달콤한 기성 믹스 가루가 아닌, 진짜 일본 말차를 주문 즉시 격불합니다. 그래서 본연의 선명한 초록색, 고소한 감칠맛, 그리고 말차 특유의 차분하고 꾸준한 카페인을 즐길 수 있죠. 따뜻하게든 차갑게든, 원하시는 대로.',
        },
        {
          title: '하와이안 변주를 포함한 9가지 플레이버',
          description: '클래식 말차 라테부터 딸기, 망고, 구아바, 리리코이, 코코넛, 바나나 말차까지 — 여기에 호지차 라테와 아즈키 단팥 라테도. 리리코이나 구아바 같은 섬 과일 변주는 본토 카페에서는 결코 맛볼 수 없는 맛입니다.',
        },
        {
          title: '말차 모찌 도넛과 찰떡궁합',
          description: '말차는 곁들일 무언가가 있을 때 더 맛있습니다. 말차 모찌 도넛을 포함한 쫄깃한 모찌 도넛은 녹차 라테를 위해 태어난 듯한 존재죠. 고소한 말차와 부드럽고 쫀득한 도넛 — 최고의 와이키키 간식 콤보입니다.',
        },
        {
          title: '차분한 카페인, 해변에서 도보 약 5분',
          description: '말차의 L-테아닌은 초조함 없는 부드러운 에너지를 줍니다. 해변에서 보내는 하루의 완벽한 연료죠. 그리고 칼라카우아 애비뉴의 저희 매장은 와이키키 비치에서 도보로 약 5분. 말차를 손에 들고 몇 분 뒤면 모래에 발을 담글 수 있습니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 말차 마시는 곳',
      intro: '와이키키에서 진짜 말차를 찾고 계신다면, Kona Coffee Donut? 으로 오세요.',
      shop: {
        name: 'Kona Coffee Donut? (코나커피도넛)',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키의 중심, 칼라카우아 애비뉴에 자리한 Kona Coffee Donut? 은 진짜 말차와 호지차 라테를 9가지 플레이버로, 100% 코나 커피를, 그리고 매일 갓 만든 모찌 도넛을 선보입니다. 와이키키 비치에서 도보 약 5분, 매일 오전 7시부터 밤 9시까지 영업 — 아침 말차로도, 오후의 활력 충전으로도 딱입니다.',
        highlights: [
          '진짜 일본 말차 & 호지차 라테 — 9가지 플레이버',
          '섬 과일 변주: 리리코이·구아바·망고·코코넛·바나나 말차',
          '말차 모찌 도넛과 찰떡궁합',
          '와이키키 비치에서 도보 약 5분 · 매일 오전 7시~밤 9시 영업',
        ],
      },
      cta: '말차 & 호지차 메뉴 보기',
    },
    howToEat: {
      title: '말차 즐기는 법',
      subtitle: '첫 잔에도, 백 번째 잔에도 좋은 팁',
      tips: [
        {
          title: '먼저 클래식 라테부터',
          description: '과일 플레이버에 앞서, 먼저 클래식 말차 라테를 맛보세요. 고소하고 부드러우며 은은하게 달콤한 — 진짜 말차를 가장 충실하게 표현한 한 잔으로, 메뉴의 나머지를 즐기는 기준이 됩니다. 따뜻하게든 차갑게든, 모든 말차 여정은 여기서 시작.',
        },
        {
          title: '다음은 트로피컬로',
          description: '클래식을 알았다면, 하와이안 변주로 넓혀 보세요 — 리리코이, 망고, 구아바 말차. 섬 과일이 풀향의 말차를 산뜻하게 밝혀, 와이키키에서만 만날 수 있는 한 잔으로 바꿔줍니다. 피드에 올릴 사진은 바로 이 메뉴들로.',
        },
        {
          title: '말차 모찌 도넛과 함께',
          description: '말차와 모찌는 천생연분. 라테와 함께 말차 모찌 도넛을 주문하세요 — 쫄깃하고 은은하게 단 도넛이 고소한 차를 완벽하게 받쳐줍니다. 단골들이 몇 번이고 다시 찾는 바로 그 콤보입니다.',
        },
        {
          title: '와이키키의 더위엔 아이스로',
          description: '따뜻한 섬의 오후엔 아이스 말차가 최고. 차가움이 감칠맛을 부드럽게 다듬어 선명한 초록을 더욱 상큼하게 만들어줍니다. 테이크아웃해서 해변까지 짧은 길을 걸으며 한 모금 — 완벽한 와이키키의 청량함입니다.',
        },
      ],
    },
    faq: {
      title: '말차에 대해 자주 묻는 질문',
      items: [
        {
          question: '말차란 무엇인가요?',
          answer: '말차는 그늘에서 재배한 일본 녹차 찻잎을 맷돌로 곱게 간 가루입니다. 일반 차처럼 찻잎을 우려내고 버리는 대신, 찻잎 전체를 물이나 우유에 격불해 마십니다. 그래서 선명한 초록색, 고소한 감칠맛, 그리고 카페인과 L-테아닌이 어우러진 차분하고 꾸준한 에너지를 얻을 수 있죠.',
        },
        {
          question: '말차가 커피보다 좋은가요?',
          answer: '무엇을 원하느냐에 따라 다릅니다. 말차는 커피보다 카페인이 적지만 L-테아닌 덕분에 더 천천히 방출되어, 초조함이나 급락 없이 차분하게 집중할 수 있습니다. 커피는 더 빠르고 강한 각성을 주죠. 하루 종일 안정적인 에너지를 위해 말차로 바꾸는 분이 많은데, 와이키키 Kona Coffee Donut? 에서 둘 다 직접 비교해 보실 수 있습니다.',
        },
        {
          question: '와이키키에서는 어떤 말차 플레이버가 있나요?',
          answer: '말차와 호지차 9가지를 선보입니다: 클래식 말차 라테($8.95), 딸기 말차($10.95), 망고·구아바·리리코이·코코넛·바나나 말차(각 $8.95), 아즈키 단팥 라테($10.95), 호지차 라테($8.95). 여기에 말차 모찌 도넛과 녹차(말차) 빙수도 있습니다.',
        },
        {
          question: '말차에 카페인이 있나요?',
          answer: '네. 말차에는 중간 정도의 카페인이 들어 있습니다. 보통 커피 한 잔보다는 적지만, 찻잎 전체를 마시기 때문에 우려낸 녹차보다는 많습니다. 카페인은 아미노산인 L-테아닌과 결합해, 초조하게 치솟는 대신 차분하고 집중되는 상승감으로 다듬어집니다.',
        },
        {
          question: '와이키키 비치 근처에서 말차는 어디서 살 수 있나요?',
          answer: '2142 Kalakaua Ave의 Kona Coffee Donut? 은 와이키키 비치에서 도보 약 5분 거리이며, 진짜 일본 말차와 호지차 라테를 9가지 플레이버로, 100% 코나 커피와 갓 만든 모찌 도넛과 함께 선보입니다. 매일 오전 7시부터 밤 9시까지 영업합니다.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 말차를 즐기세요',
      text: '2142 Kalakaua Ave Kona Coffee Donut? 에서 말차 & 호지차 전 라인업을 — 갓 격불해, 해변에서 단 몇 분 거리에서.',
      menuButton: '말차 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '말차란?',
    },
  },
  zh: {
    hero: {
      title: '什么是抹茶 (Matcha)？',
      subtitle: '日本经典绿茶完全指南 — 以及我们在威基基供应的每一款口味',
      updated: '2026年6月更新',
      readTime: '阅读约8分钟',
    },
    definition: {
      title: '什么是抹茶？',
      text: '<strong>抹茶（抹茶，Matcha）</strong>是一种<strong>用石磨细磨的日本绿茶</strong>，由遮荫栽培的茶叶制成。与冲泡后丢弃茶叶的普通绿茶不同，抹茶是<strong>将整片茶叶研磨成鲜绿色粉末</strong>，再<strong>用水或牛奶打发（点茶）</strong>饮用——也就是把整片茶叶都喝进去。因此抹茶具有<strong>醇厚、富含鲜味、口感顺滑的风味</strong>和天然鲜亮的绿色，并由咖啡因搭配<strong>L-茶氨酸</strong>带来平稳持久的能量。抹茶分为两种等级：<strong>仪式级（适合直接饮用，更顺滑）</strong>和<strong>烘焙级（味道更浓，适合做拿铁和烘焙）</strong>。',
    },
    history: {
      title: '抹茶的历史',
      subtitle: '从唐朝的茶到威基基咖啡厅的人气之选',
      p1: '粉末茶始于<strong>中国唐朝（618—907年）</strong>，当时人们将茶叶蒸制、压成茶砖，点茶前再研磨成粉。这种早期的点茶文化在宋代得到精进，但随着散叶冲泡逐渐流行，最终在中国式微。',
      p2: '粉末茶真正的归宿是<strong>日本</strong>。禅僧<strong>荣西于1191年从中国带回茶种和点茶法</strong>，种植在京都附近。由于L-茶氨酸能让人在长时间打坐中保持平静而清醒，僧侣们格外珍视抹茶——与禅修可谓天作之合。',
      p3: '在随后的数百年间，抹茶成为<strong>日本茶道（茶の湯）</strong>的核心，经千利休等茶人提炼为崇尚和、敬、清、寂的冥想仪式。茶筅、茶碗、行礼——每一个动作都饱含深意。',
      p4: '抹茶无可争议的核心产地是<strong>京都附近的宇治</strong>，其遮荫茶园至今仍出产世界顶级好茶。2010年代，抹茶以抹茶拿铁的形式风靡全球，从东京传到洛杉矶再到檀香山。如今，你在<strong>威基基</strong>就能喝到现打的抹茶拿铁——距离海滩仅几分钟。',
    },
    comparison: {
      title: '抹茶 vs 咖啡 vs 焙茶',
      subtitle: '抹茶有什么不同？',
      intro: '抹茶、咖啡和焙茶（Hojicha）是摄取咖啡因的三种截然不同的方式。以下对比帮你挑选最适合自己的那一杯：',
      headers: {
        feature: '特点',
        bingsu: '抹茶',
        shavedIce: '咖啡',
        kakigori: '焙茶',
      },
      rows: [
        {
          feature: '咖啡因',
          bingsu: '适中，平稳释放',
          shavedIce: '高，迅速飙升',
          kakigori: '低——温和柔顺',
        },
        {
          feature: '味道',
          bingsu: '草本香、甘甜鲜味',
          shavedIce: '烘焙香、浓郁微苦',
          kakigori: '坚果香、焙烤焦糖味',
        },
        {
          feature: '颜色',
          bingsu: '鲜亮绿色',
          shavedIce: '深褐色',
          kakigori: '温暖琥珀色',
        },
        {
          feature: '能量',
          bingsu: '平静专注（L-茶氨酸）',
          shavedIce: '易紧张，可能疲软',
          kakigori: '柔和舒缓的提神',
        },
        {
          feature: '适合',
          bingsu: '全天专注、拿铁爱好者',
          shavedIce: '早晨快速提神',
          kakigori: '夜晚、低咖啡因小酌',
        },
        {
          feature: '抗氧化物',
          bingsu: '极高（整片茶叶）',
          shavedIce: '适中',
          kakigori: '适中（烘焙茶叶）',
        },
      ],
      note: '最关键的区别在于，喝抹茶时你把研磨的整片茶叶都打入杯中饮下，因此能摄取更多抗氧化物，并获得L-茶氨酸带来的标志性平静能量——比咖啡更平稳，比普通绿茶风味浓郁得多。',
    },
    types: {
      title: '我们在威基基供应的每一款抹茶口味',
      subtitle: '正宗日本抹茶现打——还有夏威夷热带风味变化',
      items: [
        {
          name: '经典抹茶拿铁',
          korean: '$8.95',
          description: '每个人都该从这里开始。正宗日本抹茶打至顺滑，倒入你选择的牛奶，调成均衡、醇香微甜、鲜绿明亮的拿铁。可点热饮或冰饮。这是品味抹茶最纯粹的方式——也是麻糬甜甜圈的完美搭档。',
          icon: '🍵',
        },
        {
          name: '草莓抹茶',
          korean: '$10.95 · 招牌',
          description: '我们最上镜的一杯：一层香甜草莓覆于打发的抹茶与牛奶之上。明亮的莓果与草本抹茶相得益彰——上层果香，下层醇厚。菜单上列为草莓拿铁，瞬间成为人气之选。',
          icon: '🍓',
        },
        {
          name: '热带抹茶——芒果·番石榴·百香果',
          korean: '每杯 $8.95',
          description: '我们为抹茶注入的夏威夷风味。可选芒果抹茶、番石榴抹茶或百香果（Lilikoi）抹茶——海岛水果风味与正宗现打抹茶层层交融。热带、清爽，是家乡找不到的味道。在威基基的阳光下，最适合做成冰饮。',
          icon: '🥭',
        },
        {
          name: '椰子 & 香蕉抹茶',
          korean: '每杯 $8.95',
          description: '奶香浓郁、宛如甜点的演绎。椰子抹茶带来顺滑的海岛醇厚，香蕉抹茶则像一杯绿茶奶昔。两者都用柔和的甜味中和抹茶的醇厚尾韵——是初次尝试抹茶者的人气之选。',
          icon: '🥥',
        },
        {
          name: '红豆（Azuki）拿铁',
          korean: '$10.95',
          description: '献给钟爱传统风味的你，一杯日韩皆熟悉的经典。香甜红豆融入奶香拿铁——温暖、坚果香、淡淡的甜。若想一次品味日本咖啡厅文化的两种面貌，不妨与抹茶拿铁并排享用。',
          icon: '🫘',
        },
      ],
    },
    whyHawaii: {
      title: '为什么要在威基基喝抹茶',
      points: [
        {
          title: '正宗日本抹茶，现打现做',
          description: '我们使用正宗日本抹茶，现点现打——而非加糖的预拌粉。因此能呈现真正鲜亮的绿色、醇厚的鲜味，以及抹茶备受喜爱的平静持久咖啡因。热饮或冰饮，随你喜欢。',
        },
        {
          title: '9种口味，包含夏威夷热带风味',
          description: '从经典抹茶拿铁到草莓、芒果、番石榴、百香果、椰子和香蕉抹茶——还有焙茶拿铁和红豆拿铁。像百香果和番石榴这样的海岛风味，是你在本土咖啡厅绝对找不到的。',
        },
        {
          title: '与抹茶麻糬甜甜圈绝配',
          description: '抹茶配上可蘸食的小点更美味。我们Q弹的麻糬甜甜圈——包括抹茶麻糬甜甜圈——简直是为绿茶拿铁而生。醇厚抹茶搭配柔软弹牙的甜甜圈，是终极的威基基美食组合。',
        },
        {
          title: '平静的咖啡因，距海滩约5分钟',
          description: '抹茶中的L-茶氨酸带来顺滑、不紧张的能量——是海滩日的完美燃料。我们位于卡拉卡瓦大道，距威基基海滩仅约5分钟步行，买杯抹茶，几分钟后就能把脚埋进沙里。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基哪里可以喝到抹茶',
      intro: '如果你在威基基想喝正宗抹茶，Kona Coffee Donut? 就是你的去处。',
      shop: {
        name: 'Kona Coffee Donut?（科纳咖啡甜甜圈）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '就在威基基中心的卡拉卡瓦大道上，Kona Coffee Donut? 供应9种口味的正宗抹茶和焙茶拿铁，冲煮100%科纳咖啡，并每日现做麻糬甜甜圈。我们距威基基海滩约5分钟步行，每天早上7点至晚上9点营业——无论是清晨的抹茶还是午后的提神，都恰到好处。',
        highlights: [
          '正宗日本抹茶 & 焙茶拿铁——9种口味',
          '海岛风味：百香果、番石榴、芒果、椰子和香蕉抹茶',
          '与抹茶麻糬甜甜圈绝配',
          '距威基基海滩约5分钟 · 每日早7点至晚9点营业',
        ],
      },
      cta: '查看抹茶 & 焙茶菜单',
    },
    howToEat: {
      title: '如何享用抹茶',
      subtitle: '无论是第一杯还是第一百杯的小贴士',
      tips: [
        {
          title: '先从经典拿铁开始',
          description: '在尝试水果口味之前，先品一杯经典抹茶拿铁。它是正宗抹茶最真实的表达——醇厚、顺滑、微甜——也为你品鉴菜单上其他款式提供了基准。热饮或冰饮，每段抹茶之旅都该从这里启程。',
        },
        {
          title: '接着尝试热带口味',
          description: '熟悉经典之后，就探索我们的夏威夷风味吧——百香果、芒果或番石榴抹茶。海岛水果让草本抹茶变得明亮，化作只有在威基基才能喝到的一杯。这几款最适合拍照发帖。',
        },
        {
          title: '搭配一个抹茶麻糬甜甜圈',
          description: '抹茶与麻糬是天作之合。点拿铁时配一个抹茶麻糬甜甜圈——Q弹微甜的甜甜圈与醇厚的茶香完美平衡。这正是我们的常客一次次回来的那个组合。',
        },
        {
          title: '威基基的炎热就点冰饮',
          description: '在温暖的海岛午后，冰抹茶无可匹敌。冰凉能柔化鲜味，让鲜绿更加清爽。打包带走，在走向海滩的短短路上啜一口——这就是完美的威基基消暑之选。',
        },
      ],
    },
    faq: {
      title: '关于抹茶的常见问题',
      items: [
        {
          question: '什么是抹茶？',
          answer: '抹茶是用石磨将遮荫栽培的日本绿茶茶叶细磨而成的粉末。它不像普通茶那样冲泡后丢弃茶叶，而是把整片茶叶打入水或牛奶中饮用——因此抹茶呈鲜绿色，带有醇厚的鲜味，并由咖啡因结合L-茶氨酸带来平静而持久的能量。',
        },
        {
          question: '抹茶比咖啡好吗？',
          answer: '取决于你想要什么。抹茶的咖啡因比咖啡少，但因为L-茶氨酸而释放得更慢，所以能带来平静、不紧张的专注，且不会疲软。咖啡则提神更快更强。许多人为了全天平稳的能量而改喝抹茶——在威基基的Kona Coffee Donut? ，两者你都能亲自尝试。',
        },
        {
          question: '你们在威基基有哪些抹茶口味？',
          answer: '我们供应9种抹茶和焙茶口味：经典抹茶拿铁（$8.95）、草莓抹茶（$10.95）、芒果、番石榴、百香果、椰子和香蕉抹茶（每杯 $8.95）、红豆拿铁（$10.95）以及焙茶拿铁（$8.95）。我们还做抹茶麻糬甜甜圈和绿茶（抹茶）刨冰。',
        },
        {
          question: '抹茶含咖啡因吗？',
          answer: '含。抹茶含有适量咖啡因——通常少于一杯咖啡，但因为你喝下整片茶叶，所以比冲泡的绿茶多。咖啡因与氨基酸L-茶氨酸结合，把能量调和成平静、专注的提升，而非令人紧张的飙升。',
        },
        {
          question: '在威基基海滩附近哪里可以喝到抹茶？',
          answer: '位于2142 Kalakaua Ave的Kona Coffee Donut? 距威基基海滩约5分钟步行，供应9种口味的正宗日本抹茶和焙茶拿铁，以及100%科纳咖啡和新鲜麻糬甜甜圈。我们每天早上7点至晚上9点营业。',
        },
      ],
    },
    cta: {
      title: '来威基基品尝抹茶',
      text: '前往2142 Kalakaua Ave的Kona Coffee Donut? ，品尝我们完整的抹茶 & 焙茶系列——现打现做，距海滩仅几分钟。',
      menuButton: '查看抹茶菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '什么是抹茶？',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Matcha in Waikiki (2026): What It Is, the History & Every Flavor We Pour',
  description: 'Learn everything about matcha — what it is, its history from Tang dynasty China to Japan, how it compares to coffee and hojicha, and every matcha flavor we pour in Waikiki.',
  image: 'https://www.konacoffeedonut.com/images/blog/matcha-waikiki.jpeg',
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
  datePublished: '2026-06-23',
  dateModified: '2026-06-23',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/en/blog/matcha-waikiki',
  },
  keywords: 'matcha, what is matcha, matcha waikiki, matcha latte waikiki, best matcha waikiki, matcha vs coffee, hojicha',
  wordCount: 1400,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is matcha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Matcha is a finely stone-ground powder made from shade-grown Japanese green tea leaves. Instead of steeping and discarding the leaves like regular tea, you whisk the whole leaf into water or milk and drink it — giving matcha its vivid green color, earthy-umami flavor, and a calm, steady energy from caffeine combined with L-theanine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is matcha better than coffee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on what you want. Matcha has less caffeine than coffee but releases it more slowly thanks to L-theanine, so you get calm, jitter-free focus without the crash. Coffee gives a faster, stronger kick. Many people switch to matcha for steadier all-day energy — and at Kona Coffee Donut? in Waikiki you can try both.',
      },
    },
    {
      '@type': 'Question',
      name: 'What matcha flavors do you have in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We pour 9 matcha and hojicha flavors: the Classic Matcha Latte ($8.95), Strawberry Matcha ($10.95), Mango, Guava, Lilikoi, Coconut, and Banana Matcha ($8.95 each), an Azuki red bean latte ($10.95), and a Hojicha Latte ($8.95). We also make a matcha mochi donut and a green-tea (matcha) bingsu.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does matcha have caffeine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Matcha contains a moderate amount of caffeine — generally less than a cup of coffee but more than steeped green tea, since you drink the whole leaf. The caffeine is paired with L-theanine, an amino acid that smooths the energy into a calm, focused lift rather than a jittery spike.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I get matcha near Waikiki Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut? at 2142 Kalakaua Ave is about a 5-minute walk from Waikiki Beach and pours real Japanese matcha and hojicha lattes in 9 flavors, plus 100% Kona coffee and fresh mochi donuts. We are open daily from 7AM to 9PM.',
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

export default function MatchaWaikikiPage() {
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
          src="/images/blog/matcha-waikiki.jpeg"
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

        {/* History of Matcha */}
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

        {/* Types of Matcha */}
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

        {/* Why Get Matcha in Waikiki */}
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
                href={`/${locale}/menu`}
                className="inline-block bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-sky-100 transition-colors"
              >
                {t.whereToGet.cta}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* How to Enjoy Matcha */}
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
              href={`/${locale}/blog/what-is-hojicha-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 font-semibold transition-colors"
            >
              → What Is Hojicha?
            </Link>
            <Link
              href={`/${locale}/blog/strawberry-matcha-latte-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Strawberry Matcha Latte
            </Link>
            <Link
              href={`/${locale}/blog/matcha-mochi-donut-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Matcha Mochi Donut
            </Link>
            <Link
              href={`/${locale}/menu`}
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
                  href={`/${locale}/menu`}
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
