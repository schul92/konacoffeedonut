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
      title: 'Matcha vs Hojicha: What\'s the Difference?',
      subtitle: 'A Clear Comparison of Two Japanese Green Teas — and Where to Try Both in Waikiki (2026)',
      updated: 'Updated June 2026',
      readTime: '8 min read',
    },
    definition: {
      title: 'Matcha vs Hojicha — The Quick Answer',
      text: 'Both <strong>matcha</strong> and <strong>hojicha</strong> are Japanese green teas, but they taste like opposites. <strong>Matcha</strong> is shade-grown green tea stone-ground into a fine powder — vibrant green, grassy and umami-rich, with <strong>higher caffeine</strong> and a "calm alert" energy from L-theanine. <strong>Hojicha</strong> is green tea that\'s been <strong>roasted over charcoal</strong> — reddish-brown, toasty, nutty and caramel-smooth, with <strong>naturally low caffeine</strong>, making it perfect for the afternoon, the evening, kids, or anyone caffeine-sensitive. At <strong>Kona Coffee Donut?</strong> in Waikiki you can try both: a Matcha Latte or a Hojicha Latte, each <strong>$8.95</strong>, just minutes from the beach.',
    },
    history: {
      title: 'What Is Hojicha? (The Underrated One)',
      subtitle: 'Roasted Green Tea — Toasty, Comforting, and Naturally Low in Caffeine',
      p1: 'Most people know matcha, but <strong>hojicha</strong> (焙じ茶) is the quiet star that deserves a spotlight. It starts as ordinary Japanese green tea — usually <strong>bancha or kukicha</strong> (leaves and stems from later harvests) — which is then <strong>roasted over high heat, traditionally over charcoal</strong>. That single step transforms everything.',
      p2: 'Roasting turns the leaves from green to a beautiful <strong>reddish-brown</strong> and completely rewrites the flavor. Instead of grassy and vegetal, hojicha becomes <strong>toasty, nutty, and lightly caramel-sweet</strong>, with a smooth, mellow, almost cozy finish. It\'s the tea equivalent of the warm, roasted aroma you love in fresh coffee — comforting rather than sharp.',
      p3: 'The best part for many people: the roasting process <strong>naturally lowers the caffeine</strong>. Hojicha is one of the lowest-caffeine teas you can order, which makes it a genuinely great choice for the <strong>afternoon, the evening, kids, or anyone who is caffeine-sensitive</strong>. You get the ritual and warmth of a latte without the jitters or the late-night wakefulness.',
      p4: 'If you\'ve never tried hojicha, Waikiki is an easy place to start. A <strong>hojicha latte</strong> tastes a little like toasted rice, roasted nuts, and caramel swirled into steamed milk — smooth, gently sweet, and endlessly drinkable. Pair it with a warm donut and it becomes one of the most comforting treats on the menu.',
    },
    comparison: {
      title: 'Matcha vs Hojicha, Side by Side',
      subtitle: 'Color, Flavor, Caffeine, and Who Each One Is For',
      intro: 'Both come from the Japanese tea plant, but they end up in very different places. Here\'s a simple side-by-side to help you pick the right one:',
      headers: {
        feature: 'What to compare',
        matcha: 'Matcha',
        hojicha: 'Hojicha',
      },
      rows: [
        {
          feature: 'Color',
          matcha: 'Vibrant, bright green',
          hojicha: 'Reddish-brown / amber',
        },
        {
          feature: 'Flavor',
          matcha: 'Grassy, umami, vegetal, slightly bitter',
          hojicha: 'Toasty, nutty, caramel, smooth & mellow',
        },
        {
          feature: 'Caffeine',
          matcha: 'Higher — a calm, focused energy from L-theanine',
          hojicha: 'Naturally low — roasting reduces the caffeine',
        },
        {
          feature: 'How it\'s made',
          matcha: 'Shade-grown leaves stone-ground into fine powder',
          hojicha: 'Bancha/kukicha green tea roasted over charcoal',
        },
        {
          feature: 'Best time to drink',
          matcha: 'Morning or early afternoon, for focus',
          hojicha: 'Afternoon, evening, or anytime you want to wind down',
        },
        {
          feature: 'Who it\'s for',
          matcha: 'Coffee drinkers who want energy and a green-tea kick',
          hojicha: 'Caffeine-sensitive folks, kids, and evening sippers',
        },
      ],
      note: 'The simplest way to decide: if you want an energizing, vivid green-tea flavor, go matcha. If you want something warm, roasted, comforting, and low in caffeine, go hojicha. There\'s no wrong answer — and at Kona Coffee Donut? you can try both.',
    },
    types: {
      title: 'Which Should You Choose?',
      subtitle: 'A Quick Guide to Picking Matcha or Hojicha',
      items: [
        {
          name: 'Choose Matcha if…',
          korean: 'You want energy & focus',
          description: 'Matcha has the highest caffeine of the two, balanced by L-theanine for a smooth, "calm alert" energy without a crash. If you\'re a coffee drinker looking for a bright, grassy, umami-rich green-tea lift in the morning, matcha is your pick.',
          icon: '🍵',
        },
        {
          name: 'Choose Hojicha if…',
          korean: 'You want low caffeine & comfort',
          description: 'Hojicha is roasted, toasty, and naturally low in caffeine — perfect for the afternoon or evening, for kids, or if caffeine keeps you up. It\'s warm, nutty, and caramel-smooth: all the cozy ritual of a latte, none of the jitters.',
          icon: '🔥',
        },
        {
          name: 'Love bold flavor?',
          korean: 'Matcha leans vivid & grassy',
          description: 'If you enjoy strong, vegetal, slightly bitter green-tea flavor — the kind that stands up to milk and even sweetness — matcha delivers that vibrant punch. It\'s the more intense, energizing of the two.',
          icon: '🌿',
        },
        {
          name: 'Prefer mellow & sweet?',
          korean: 'Hojicha is smooth & roasty',
          description: 'If grassy or bitter isn\'t your thing, hojicha is a revelation. Its roasted, nutty, caramel character is naturally softer and sweeter — an easy first step into the world of Japanese tea for almost anyone.',
          icon: '🤎',
        },
        {
          name: 'Can\'t decide?',
          korean: 'Try both — or go flavored',
          description: 'You don\'t have to choose. Order a Matcha Latte and a Hojicha Latte and compare them side by side. Or try our flavored line — strawberry, mango, coconut, guava, or banana — on a matcha OR hojicha base for a fun twist.',
          icon: '⚖️',
        },
      ],
    },
    whyHawaii: {
      title: 'Why Try Matcha & Hojicha in Waikiki',
      points: [
        {
          title: 'Two Teas, One Easy Stop',
          description: 'Instead of hunting all over town, you can taste both matcha and hojicha at one spot on Kalākaua Avenue. Order a Matcha Latte and a Hojicha Latte side by side and discover which Japanese green tea is your new favorite — all just minutes from the beach.',
        },
        {
          title: 'Hojicha You Can Actually Find',
          description: 'Hojicha is still hard to find on many menus, even though it\'s delicious and low in caffeine. In Waikiki, Kona Coffee Donut? pours it fresh as a hojicha latte, so you can finally try the roasted green tea everyone will soon be talking about.',
        },
        {
          title: 'Low-Caffeine Options for Everyone',
          description: 'Traveling with kids, sensitive to caffeine, or want a treat after dinner? A hojicha latte gives you all the warmth and ritual of a coffee stop without keeping you up. It\'s the crowd-pleaser that works for the whole family.',
        },
        {
          title: 'The Tea + Donut Combo',
          description: 'Both matcha\'s vivid green flavor and hojicha\'s roasted sweetness pair beautifully with a warm, freshly made mochi donut or malasada. Turning a quick tea run into a little Waikiki ritual is exactly what a vacation break is for.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Try Matcha & Hojicha in Waikiki',
      intro: 'Want to taste both side by side? Kona Coffee Donut? on Kalākaua Avenue pours real matcha and roasted hojicha lattes, fresh, hot or iced.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Right in the heart of Waikiki, Kona Coffee Donut? serves both a Matcha Latte and a Hojicha Latte — each $8.95, hot or iced. Curious about flavors? Our strawberry, mango, coconut, guava, and banana lattes can all be made on a matcha OR hojicha base, so you can mix and match. Pair either with a freshly made mochi donut or malasada for the perfect Waikiki break. We\'re about a 5-minute walk from Waikiki Beach and open daily.',
        highlights: [
          'Matcha Latte & Hojicha Latte — $8.95 each, hot or iced',
          'Flavored line (strawberry, mango, coconut, guava, banana) on a matcha OR hojicha base',
          'About 5 minutes from Waikiki Beach',
          'Open daily, 7AM–9PM · (808) 260-1835',
        ],
      },
      cta: 'View Our Matcha & Coffee Menu',
    },
    howToEat: {
      title: 'Tips for Your First Matcha or Hojicha',
      subtitle: 'Get the Most Out of Both Japanese Green Teas',
      tips: [
        {
          title: 'Try Hojicha If Matcha Is Too Grassy',
          description: 'If you\'ve tried matcha and found it too vegetal or bitter, don\'t give up on green tea — order hojicha instead. Its roasted, nutty, caramel-smooth character is much gentler and naturally sweeter, and it wins over almost everyone.',
        },
        {
          title: 'Save Hojicha for the Afternoon',
          description: 'Because hojicha is naturally low in caffeine, it\'s the smart order after lunch, in the evening, or when you\'re winding down. You get the warmth and ritual of a latte without losing sleep — perfect for a relaxed Waikiki night.',
        },
        {
          title: 'Go Matcha When You Need a Lift',
          description: 'Matcha has more caffeine, balanced by L-theanine for a steady, focused energy without the coffee crash. Reach for a matcha latte in the morning or early afternoon when you want a clean, calm boost.',
        },
        {
          title: 'Experiment With Flavors',
          description: 'Once you know which base you like, play with it. A strawberry or mango latte tastes bright and fruity on matcha, and warm and mellow on hojicha. Same fruit, two totally different drinks — half the fun is comparing.',
        },
      ],
    },
    faq: {
      title: 'Matcha vs Hojicha — Frequently Asked Questions',
      items: [
        {
          question: 'Is hojicha caffeine-free?',
          answer: 'Not quite caffeine-free, but very close. Hojicha is one of the lowest-caffeine Japanese teas because the roasting process naturally reduces the caffeine. It contains far less than matcha or coffee, which is why it\'s a popular choice for the afternoon, the evening, kids, and anyone caffeine-sensitive. If you need truly zero caffeine, ask about a decaf option.',
        },
        {
          question: 'Does hojicha taste like matcha?',
          answer: 'No — they taste like opposites even though both are green teas. Matcha is vibrant green, grassy, umami-rich, and slightly bitter. Hojicha is reddish-brown and roasted, with toasty, nutty, caramel-smooth flavor. If you find matcha too grassy or bitter, hojicha\'s mellow, roasted sweetness is often a much easier drink to love.',
        },
        {
          question: 'Which is healthier, matcha or hojicha?',
          answer: 'Both are green teas with antioxidants, so both can be part of a healthy routine. Matcha is more concentrated (you consume the whole ground leaf) and higher in caffeine and L-theanine, giving that "calm alert" focus. Hojicha is lower in caffeine and gentler on the stomach for some people, thanks to roasting. The "healthier" choice really depends on your caffeine needs and taste — there\'s no wrong pick.',
        },
        {
          question: 'Where can I try hojicha in Waikiki?',
          answer: 'Kona Coffee Donut? at 2142 Kalakaua Ave serves a fresh Hojicha Latte for $8.95, hot or iced, about a 5-minute walk from Waikiki Beach. We also pour a Matcha Latte at $8.95, so you can taste both side by side. Our flavored lattes (strawberry, mango, coconut, guava, banana) can be made on a matcha or hojicha base, too.',
        },
        {
          question: 'What is a hojicha latte?',
          answer: 'A hojicha latte is roasted Japanese green tea whisked or brewed and combined with steamed (or iced) milk. It tastes toasty, nutty, and lightly caramel-sweet — a bit like toasted rice and roasted nuts in milk — and it\'s naturally low in caffeine. At Kona Coffee Donut? in Waikiki it\'s $8.95, hot or iced, and pairs perfectly with a warm donut.',
        },
      ],
    },
    cta: {
      title: 'Taste Matcha & Hojicha in Waikiki',
      text: 'Visit Kona Coffee Donut? at 2142 Kalakaua Ave and try a Matcha Latte and a roasted Hojicha Latte — each $8.95, hot or iced, just minutes from Waikiki Beach.',
      menuButton: 'View Matcha & Coffee Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'Matcha vs Hojicha',
    },
  },
  ja: {
    hero: {
      title: '抹茶とほうじ茶の違いとは？',
      subtitle: '2つの日本茶をわかりやすく比較——そしてワイキキで両方を味わえる場所（2026年版）',
      updated: '2026年6月更新',
      readTime: '8分で読める',
    },
    definition: {
      title: '抹茶とほうじ茶——ひと目でわかる答え',
      text: '<strong>抹茶</strong>も<strong>ほうじ茶</strong>もどちらも日本の緑茶ですが、味わいはまるで正反対です。<strong>抹茶</strong>は日陰で育てた茶葉を石臼で挽いた微粉末で、鮮やかな緑色、青々とした旨みがあり、<strong>カフェインは高め</strong>。L-テアニンによる「穏やかな覚醒」のエネルギーが特徴です。<strong>ほうじ茶</strong>は緑茶を<strong>炭火で焙煎</strong>したもので、赤褐色、香ばしくナッツやカラメルのような滑らかさがあり、<strong>カフェインは自然に低い</strong>ため、午後や夜、お子様、カフェインに敏感な方にぴったりです。ワイキキの<strong>Kona Coffee Donut?</strong> では両方を味わえます——抹茶ラテもほうじ茶ラテも各<strong>$8.95</strong>、ビーチからわずか数分です。',
    },
    history: {
      title: 'ほうじ茶とは？（隠れた主役）',
      subtitle: '焙煎した緑茶——香ばしく、ほっとする、そして自然にカフェインが低い',
      p1: '抹茶は多くの人が知っていますが、<strong>ほうじ茶（焙じ茶）</strong>はもっと注目されるべき静かな主役です。もとは普通の日本の緑茶——たいてい<strong>番茶や茎茶</strong>（遅い時期に摘まれた葉や茎）——で、それを<strong>高温で、伝統的には炭火で焙煎</strong>します。このひと手間がすべてを変えるのです。',
      p2: '焙煎によって茶葉は緑から美しい<strong>赤褐色</strong>に変わり、味わいも一新されます。青々とした草っぽさの代わりに、ほうじ茶は<strong>香ばしく、ナッツのようで、ほんのりカラメルのように甘く</strong>なり、滑らかでまろやか、どこか温かい後味に。淹れたてコーヒーの香ばしい香りに似た、尖りのない安心感のある味わいです。',
      p3: '多くの人にとって一番嬉しいのは、焙煎によって<strong>カフェインが自然に下がる</strong>こと。ほうじ茶は注文できるお茶の中でも屈指の低カフェインで、<strong>午後や夜、お子様、カフェインに敏感な方</strong>に本当におすすめです。ラテの儀式感と温かさを、そわそわ感や夜の寝つきの悪さなしに楽しめます。',
      p4: 'ほうじ茶を試したことがないなら、ワイキキは始めるのに最適な場所です。<strong>ほうじ茶ラテ</strong>は、香ばしいお米、ローストしたナッツ、カラメルをスチームミルクに溶かしたような味わい——滑らかで、優しい甘さ、いくらでも飲めます。温かいドーナツと合わせれば、メニューでも指折りのほっとする一杯になります。',
    },
    comparison: {
      title: '抹茶 vs ほうじ茶、並べて比較',
      subtitle: '色、味、カフェイン、そしてそれぞれに向いている人',
      intro: 'どちらも日本の茶樹から生まれますが、行き着く先は大きく違います。あなたにぴったりの一杯を選ぶための、シンプルな早見表です：',
      headers: {
        feature: '比較ポイント',
        matcha: '抹茶',
        hojicha: 'ほうじ茶',
      },
      rows: [
        {
          feature: '色',
          matcha: '鮮やかな明るい緑',
          hojicha: '赤褐色・琥珀色',
        },
        {
          feature: '味わい',
          matcha: '青々しい、旨み、草のよう、ほのかな苦み',
          hojicha: '香ばしい、ナッツ、カラメル、滑らかでまろやか',
        },
        {
          feature: 'カフェイン',
          matcha: '高め——L-テアニンによる穏やかで集中したエネルギー',
          hojicha: '自然に低い——焙煎でカフェインが減る',
        },
        {
          feature: '作り方',
          matcha: '日陰で育てた茶葉を石臼で微粉末に',
          hojicha: '番茶・茎茶を炭火で焙煎',
        },
        {
          feature: '飲むのに最適な時間',
          matcha: '朝や昼過ぎ、集中したいときに',
          hojicha: '午後、夜、またはリラックスしたいとき',
        },
        {
          feature: '向いている人',
          matcha: 'エネルギーと緑茶らしさを求めるコーヒー好き',
          hojicha: 'カフェインに敏感な方、お子様、夜に飲みたい方',
        },
      ],
      note: '選び方はシンプル。元気が出る鮮やかな緑茶の味が欲しいなら抹茶。温かく香ばしく、ほっとする低カフェインが欲しいならほうじ茶。間違いはありません——Kona Coffee Donut? なら両方試せます。',
    },
    types: {
      title: 'あなたはどちらを選ぶ？',
      subtitle: '抹茶とほうじ茶、選び方のかんたんガイド',
      items: [
        {
          name: '抹茶を選ぶなら…',
          korean: 'エネルギーと集中が欲しい人',
          description: '抹茶は2つの中でカフェインが最も高く、L-テアニンによってバランスされ、失速のない滑らかな「穏やかな覚醒」を与えます。朝に鮮やかで青々しい旨みのある緑茶の目覚めを求めるコーヒー好きなら、抹茶が正解です。',
          icon: '🍵',
        },
        {
          name: 'ほうじ茶を選ぶなら…',
          korean: '低カフェインと安らぎが欲しい人',
          description: 'ほうじ茶は焙煎され、香ばしく、自然にカフェインが低い——午後や夜、お子様、カフェインで眠れなくなる方にぴったり。温かく、ナッツのようで、カラメルのように滑らか。ラテのほっとする儀式感を、そわそわ感なしで楽しめます。',
          icon: '🔥',
        },
        {
          name: '力強い味が好き？',
          korean: '抹茶は鮮やかで草っぽい',
          description: '力強く、青々しく、ほろ苦い緑茶の味——ミルクにも甘さにも負けないような味——が好きなら、抹茶がその鮮烈なパンチを届けます。2つの中でより濃厚で、より元気の出る一杯です。',
          icon: '🌿',
        },
        {
          name: 'まろやかで甘いのが好み？',
          korean: 'ほうじ茶は滑らかで香ばしい',
          description: '青々しさや苦みが苦手なら、ほうじ茶は新発見です。焙煎されたナッツやカラメルの風味は自然と柔らかく甘め——ほとんど誰にとっても、日本茶の世界への入りやすい第一歩になります。',
          icon: '🤎',
        },
        {
          name: '決められない？',
          korean: '両方、またはフレーバーで',
          description: '選ばなくても大丈夫。抹茶ラテとほうじ茶ラテを注文して並べて飲み比べましょう。あるいはフレーバーライン——ストロベリー、マンゴー、ココナッツ、グアバ、バナナ——を抹茶またはほうじ茶ベースで、楽しいアレンジも。',
          icon: '⚖️',
        },
      ],
    },
    whyHawaii: {
      title: 'ワイキキで抹茶とほうじ茶を味わうべき理由',
      points: [
        {
          title: '2つのお茶を、1か所で手軽に',
          description: '街中を探し回らなくても、カラカウア通りの1か所で抹茶もほうじ茶も味わえます。抹茶ラテとほうじ茶ラテを並べて注文し、どちらの日本茶が新しいお気に入りか見つけましょう——すべてビーチからわずか数分です。',
        },
        {
          title: '本当に見つかるほうじ茶',
          description: 'ほうじ茶は美味しくて低カフェインなのに、まだ多くのメニューで見つけにくいお茶です。ワイキキの Kona Coffee Donut? では、ほうじ茶ラテとして淹れたてを提供。近いうちに話題になる焙煎緑茶を、ついに試せます。',
        },
        {
          title: 'みんなに嬉しい低カフェイン',
          description: 'お子様連れ、カフェインに敏感、または夕食後の一杯が欲しい？ほうじ茶ラテなら、コーヒータイムの温かさと儀式感を、眠りを妨げずに楽しめます。家族みんなに嬉しい、誰もが喜ぶ一杯です。',
        },
        {
          title: 'お茶＋ドーナツの組み合わせ',
          description: '抹茶の鮮やかな味も、ほうじ茶の焙煎した甘さも、温かい作りたてのモチドーナツやマラサダと見事に合います。さっとのお茶タイムをワイキキの小さな儀式に変える——それこそバケーションの休憩の醍醐味です。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキで抹茶とほうじ茶を味わうなら',
      intro: '両方を並べて飲み比べたいなら、カラカウア通りの Kona Coffee Donut? が最適。本格的な抹茶と焙煎ほうじ茶のラテを、ホットでもアイスでも淹れたてで。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心に位置する Kona Coffee Donut? では、抹茶ラテもほうじ茶ラテも提供——各$8.95、ホットでもアイスでも。フレーバーが気になる？ストロベリー、マンゴー、ココナッツ、グアバ、バナナのラテは、すべて抹茶またはほうじ茶ベースで作れるので、自由に組み合わせられます。どちらも作りたてのモチドーナツやマラサダと合わせれば、完璧なワイキキの休憩に。ワイキキビーチから徒歩約5分、毎日営業です。',
        highlights: [
          '抹茶ラテ＆ほうじ茶ラテ——各$8.95、ホット＆アイス',
          'フレーバーライン（ストロベリー、マンゴー、ココナッツ、グアバ、バナナ）を抹茶またはほうじ茶ベースで',
          'ワイキキビーチから約5分',
          '毎日営業、午前7時〜午後9時 · (808) 260-1835',
        ],
      },
      cta: '抹茶＆コーヒーメニューを見る',
    },
    howToEat: {
      title: '初めての抹茶・ほうじ茶のためのコツ',
      subtitle: '2つの日本茶を最大限に楽しむために',
      tips: [
        {
          title: '抹茶が草っぽすぎたらほうじ茶を',
          description: '抹茶を試して青臭い、苦いと感じたなら、緑茶を諦めないで——代わりにほうじ茶を注文しましょう。焙煎されたナッツやカラメルのような滑らかさはずっと優しく、自然と甘め。ほとんどの人を虜にします。',
        },
        {
          title: 'ほうじ茶は午後にとっておく',
          description: 'ほうじ茶は自然にカフェインが低いので、昼食後や夜、くつろぎたいときの賢い注文です。ラテの温かさと儀式感を、睡眠を犠牲にせず楽しめます——リラックスしたワイキキの夜にぴったり。',
        },
        {
          title: '元気が欲しいときは抹茶',
          description: '抹茶はカフェインが多めで、L-テアニンによってバランスされ、コーヒーのような失速なしに安定した集中エネルギーを与えます。クリーンで穏やかな後押しが欲しい朝や昼過ぎには、抹茶ラテを。',
        },
        {
          title: 'フレーバーで実験を',
          description: '好きなベースがわかったら、遊んでみましょう。ストロベリーやマンゴーのラテは、抹茶なら明るくフルーティー、ほうじ茶なら温かくまろやか。同じフルーツでもまったく別の一杯——飲み比べも楽しみのひとつです。',
        },
      ],
    },
    faq: {
      title: '抹茶 vs ほうじ茶——よくある質問',
      items: [
        {
          question: 'ほうじ茶はカフェインゼロ？',
          answer: '完全にゼロではありませんが、かなり近いです。ほうじ茶は焙煎の過程でカフェインが自然に減るため、日本茶の中でも屈指の低カフェイン。抹茶やコーヒーよりずっと少なく、だからこそ午後や夜、お子様、カフェインに敏感な方に人気です。本当にカフェインゼロが必要なら、デカフェの選択肢についてお尋ねください。',
        },
        {
          question: 'ほうじ茶は抹茶に似た味？',
          answer: 'いいえ——どちらも緑茶ですが、味は正反対です。抹茶は鮮やかな緑色で、青々しく、旨みがあり、ほのかに苦い。ほうじ茶は赤褐色で焙煎され、香ばしくナッツやカラメルのように滑らか。抹茶が青臭い、苦いと感じるなら、ほうじ茶のまろやかで焙煎した甘さの方がずっと親しみやすいことが多いです。',
        },
        {
          question: '抹茶とほうじ茶、どちらが健康的？',
          answer: 'どちらも抗酸化物質を含む緑茶なので、両方とも健康的な習慣の一部になります。抹茶はより濃縮されており（挽いた葉をまるごと摂る）、カフェインとL-テアニンが多く、「穏やかな覚醒」の集中をもたらします。ほうじ茶はカフェインが低く、焙煎のおかげで人によっては胃に優しめ。「より健康的」な選択は、あなたのカフェインの必要性と好み次第——間違った選択はありません。',
        },
        {
          question: 'ワイキキでほうじ茶を試せる場所は？',
          answer: '2142 Kalakaua Ave の Kona Coffee Donut? では、ほうじ茶ラテを$8.95で、ホットでもアイスでも提供、ワイキキビーチから徒歩約5分です。抹茶ラテも$8.95で提供しているので、両方を並べて飲み比べられます。フレーバーラテ（ストロベリー、マンゴー、ココナッツ、グアバ、バナナ）も抹茶またはほうじ茶ベースで作れます。',
        },
        {
          question: 'ほうじ茶ラテとは？',
          answer: 'ほうじ茶ラテは、焙煎した日本の緑茶を点てるか淹れて、スチーム（またはアイス）ミルクと合わせたものです。香ばしく、ナッツのようで、ほんのりカラメルのように甘い——お米とローストしたナッツをミルクに溶かしたような味わいで、自然にカフェインが低い。ワイキキの Kona Coffee Donut? では$8.95、ホットでもアイスでも、温かいドーナツと相性抜群です。',
        },
      ],
    },
    cta: {
      title: 'ワイキキで抹茶とほうじ茶を味わおう',
      text: '2142 Kalakaua Ave の Kona Coffee Donut? で、抹茶ラテと焙煎ほうじ茶ラテを——各$8.95、ホットでもアイスでも、ワイキキビーチからわずか数分です。',
      menuButton: '抹茶＆コーヒーメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: '抹茶 vs ほうじ茶',
    },
  },
  ko: {
    hero: {
      title: '말차 vs 호지차: 무엇이 다를까?',
      subtitle: '두 일본 녹차를 명확하게 비교 — 그리고 와이키키에서 둘 다 맛보는 곳 (2026 가이드)',
      updated: '2026년 6월 업데이트',
      readTime: '8분 소요',
    },
    definition: {
      title: '말차 vs 호지차 — 한눈에 보는 답',
      text: '<strong>말차</strong>와 <strong>호지차</strong>는 둘 다 일본 녹차이지만, 맛은 정반대입니다. <strong>말차</strong>는 그늘에서 재배한 녹차 잎을 맷돌로 갈아 만든 고운 가루로, 선명한 초록색에 풀향과 감칠맛이 풍부하며 <strong>카페인이 더 높고</strong> L-테아닌 덕분에 "차분한 각성" 에너지를 줍니다. <strong>호지차</strong>는 녹차를 <strong>숯불에 로스팅</strong>한 것으로, 붉은 갈색을 띠며 고소하고 견과류·카라멜 같은 부드러움이 있고 <strong>카페인이 자연스럽게 낮아</strong> 오후나 저녁, 아이들, 카페인에 민감한 분에게 완벽합니다. 와이키키의 <strong>Kona Coffee Donut?</strong> 에서 둘 다 맛볼 수 있습니다 — 말차 라테와 호지차 라테 각 <strong>$8.95</strong>, 해변에서 단 몇 분 거리입니다.',
    },
    history: {
      title: '호지차란? (저평가된 주인공)',
      subtitle: '로스팅한 녹차 — 고소하고, 편안하며, 자연스럽게 카페인이 낮은',
      p1: '말차는 대부분 알지만, <strong>호지차(焙じ茶)</strong>는 조명받아 마땅한 조용한 주인공입니다. 시작은 평범한 일본 녹차 — 보통 <strong>반차나 쿠키차</strong>(늦게 수확한 잎과 줄기) — 이고, 이를 <strong>고온에서, 전통적으로는 숯불에 로스팅</strong>합니다. 이 한 단계가 모든 것을 바꿉니다.',
      p2: '로스팅은 잎을 초록에서 아름다운 <strong>붉은 갈색</strong>으로 바꾸고 풍미를 완전히 새로 씁니다. 풀향과 채소 같은 느낌 대신, 호지차는 <strong>고소하고, 견과류 같고, 은은하게 카라멜처럼 달콤해지며</strong> 부드럽고 순한, 거의 포근한 끝맛을 냅니다. 갓 내린 커피에서 좋아하는 그 따뜻하고 로스팅된 향의 차 버전 — 날카롭기보다 편안합니다.',
      p3: '많은 분에게 가장 좋은 점: 로스팅 과정이 <strong>카페인을 자연스럽게 낮춘다</strong>는 것. 호지차는 주문할 수 있는 차 중 카페인이 가장 낮은 편이라, <strong>오후, 저녁, 아이들, 카페인에 민감한 누구에게나</strong> 정말 훌륭한 선택입니다. 초조함이나 늦은 밤의 각성 없이 라테의 의식과 따뜻함을 누릴 수 있죠.',
      p4: '호지차를 한 번도 안 마셔봤다면, 와이키키가 시작하기 좋은 곳입니다. <strong>호지차 라테</strong>는 볶은 쌀, 로스팅한 견과류, 카라멜을 스팀 밀크에 녹인 듯한 맛 — 부드럽고, 은은하게 달콤하며, 끝없이 마실 수 있습니다. 따뜻한 도넛과 곁들이면 메뉴에서 가장 포근한 간식 중 하나가 됩니다.',
    },
    comparison: {
      title: '말차 vs 호지차, 나란히 비교',
      subtitle: '색, 맛, 카페인, 그리고 각각 어울리는 사람',
      intro: '둘 다 일본 차나무에서 나오지만, 도착지는 아주 다릅니다. 딱 맞는 한 잔을 고르는 데 도움이 되는 간단한 비교표입니다:',
      headers: {
        feature: '비교 항목',
        matcha: '말차',
        hojicha: '호지차',
      },
      rows: [
        {
          feature: '색',
          matcha: '선명하고 밝은 초록',
          hojicha: '붉은 갈색 / 호박색',
        },
        {
          feature: '맛',
          matcha: '풀향, 감칠맛, 채소 같음, 살짝 쌉쌀함',
          hojicha: '고소함, 견과류, 카라멜, 부드럽고 순함',
        },
        {
          feature: '카페인',
          matcha: '더 높음 — L-테아닌 덕분에 차분하고 집중된 에너지',
          hojicha: '자연스럽게 낮음 — 로스팅이 카페인을 줄임',
        },
        {
          feature: '만드는 법',
          matcha: '그늘 재배 잎을 맷돌로 곱게 갈아 가루로',
          hojicha: '반차·쿠키차 녹차를 숯불에 로스팅',
        },
        {
          feature: '마시기 좋은 시간',
          matcha: '집중이 필요한 아침이나 이른 오후',
          hojicha: '오후, 저녁, 또는 여유롭게 쉬고 싶을 때',
        },
        {
          feature: '어울리는 사람',
          matcha: '에너지와 녹차의 활력을 원하는 커피 애호가',
          hojicha: '카페인에 민감한 분, 아이들, 저녁에 마시는 분',
        },
      ],
      note: '고르는 가장 쉬운 방법: 활력을 주는 선명한 녹차 맛을 원하면 말차. 따뜻하고 로스팅되고 편안하며 카페인 낮은 걸 원하면 호지차. 틀린 답은 없습니다 — Kona Coffee Donut? 에서는 둘 다 맛볼 수 있으니까요.',
    },
    types: {
      title: '무엇을 골라야 할까?',
      subtitle: '말차 또는 호지차 고르기 간단 가이드',
      items: [
        {
          name: '말차를 고르세요…',
          korean: '에너지와 집중이 필요하다면',
          description: '말차는 둘 중 카페인이 가장 높고, L-테아닌이 균형을 잡아 크래시 없는 부드러운 "차분한 각성" 에너지를 줍니다. 아침에 밝고 풀향 가득한 감칠맛의 녹차 활력을 찾는 커피 애호가라면, 말차가 정답입니다.',
          icon: '🍵',
        },
        {
          name: '호지차를 고르세요…',
          korean: '낮은 카페인과 편안함을 원한다면',
          description: '호지차는 로스팅되어 고소하고 자연스럽게 카페인이 낮습니다 — 오후나 저녁, 아이들, 카페인 때문에 잠 못 드는 분에게 완벽하죠. 따뜻하고, 견과류 같고, 카라멜처럼 부드러워 라테의 포근한 의식은 그대로, 초조함은 없습니다.',
          icon: '🔥',
        },
        {
          name: '강렬한 맛을 좋아하나요?',
          korean: '말차는 선명하고 풀향 가득',
          description: '진하고, 채소 같고, 살짝 쌉쌀한 녹차 맛 — 우유나 단맛에도 밀리지 않는 그런 맛 — 을 즐긴다면, 말차가 그 선명한 한 방을 줍니다. 둘 중 더 진하고 활력을 주는 한 잔이죠.',
          icon: '🌿',
        },
        {
          name: '순하고 달콤한 걸 선호하나요?',
          korean: '호지차는 부드럽고 고소함',
          description: '풀향이나 쌉쌀함이 별로라면, 호지차는 새로운 발견입니다. 로스팅된 견과류·카라멜 풍미는 자연스럽게 더 부드럽고 달콤해 — 거의 누구에게나 일본 차의 세계로 들어서는 쉬운 첫걸음이 됩니다.',
          icon: '🤎',
        },
        {
          name: '못 정하겠다면?',
          korean: '둘 다, 또는 플레이버로',
          description: '고르지 않아도 됩니다. 말차 라테와 호지차 라테를 주문해 나란히 비교해 보세요. 아니면 플레이버 라인 — 딸기, 망고, 코코넛, 구아바, 바나나 — 를 말차 또는 호지차 베이스로 즐기는 재미난 변주도 있습니다.',
          icon: '⚖️',
        },
      ],
    },
    whyHawaii: {
      title: '왜 와이키키에서 말차와 호지차를 마셔야 할까',
      points: [
        {
          title: '두 가지 차, 한 번에 편하게',
          description: '온 동네를 뒤질 필요 없이, 칼라카우아 애비뉴 한 곳에서 말차도 호지차도 맛볼 수 있습니다. 말차 라테와 호지차 라테를 나란히 주문해 어느 일본 녹차가 새 최애인지 찾아보세요 — 모두 해변에서 단 몇 분 거리입니다.',
        },
        {
          title: '진짜로 찾을 수 있는 호지차',
          description: '호지차는 맛있고 카페인이 낮은데도 아직 많은 메뉴에서 찾기 어렵습니다. 와이키키의 Kona Coffee Donut? 에서는 호지차 라테로 갓 내려 드리니, 곧 모두가 이야기할 로스팅 녹차를 드디어 맛볼 수 있습니다.',
        },
        {
          title: '누구에게나 좋은 저카페인 선택',
          description: '아이들과 여행 중이거나, 카페인에 민감하거나, 저녁 후 한 잔이 필요하세요? 호지차 라테는 잠을 방해하지 않으면서 커피 타임의 따뜻함과 의식을 모두 줍니다. 온 가족 모두를 만족시키는 한 잔이죠.',
        },
        {
          title: '차 + 도넛 조합',
          description: '말차의 선명한 초록 맛도, 호지차의 로스팅된 단맛도 따뜻하고 갓 만든 모찌 도넛이나 말라사다와 아름답게 어울립니다. 잠깐의 차 한 잔을 와이키키의 작은 의식으로 바꾸는 것 — 바로 그게 휴가의 쉼표입니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 말차와 호지차 맛보는 곳',
      intro: '둘을 나란히 맛보고 싶으세요? 칼라카우아 애비뉴의 Kona Coffee Donut? 는 진짜 말차와 로스팅 호지차 라테를 핫이든 아이스든 갓 내려 드립니다.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키 중심에 자리한 Kona Coffee Donut? 는 말차 라테와 호지차 라테를 모두 제공합니다 — 각 $8.95, 핫이든 아이스든. 플레이버가 궁금하세요? 딸기, 망고, 코코넛, 구아바, 바나나 라테는 모두 말차 또는 호지차 베이스로 만들 수 있어 자유롭게 섞고 매치할 수 있습니다. 어느 쪽이든 갓 만든 모찌 도넛이나 말라사다와 곁들이면 완벽한 와이키키의 쉼표가 됩니다. 와이키키 해변에서 도보 약 5분, 매일 영업합니다.',
        highlights: [
          '말차 라테 & 호지차 라테 — 각 $8.95, 핫 & 아이스',
          '플레이버 라인(딸기, 망고, 코코넛, 구아바, 바나나)을 말차 또는 호지차 베이스로',
          '와이키키 해변에서 약 5분',
          '매일 영업, 오전 7시~오후 9시 · (808) 260-1835',
        ],
      },
      cta: '말차 & 커피 메뉴 보기',
    },
    howToEat: {
      title: '첫 말차 또는 호지차를 위한 팁',
      subtitle: '두 일본 녹차를 200% 즐기는 법',
      tips: [
        {
          title: '말차가 너무 풀향이면 호지차를',
          description: '말차를 마셔봤는데 너무 채소 같거나 쌉쌀했다면, 녹차를 포기하지 마세요 — 대신 호지차를 주문하세요. 로스팅된 견과류·카라멜 같은 부드러움은 훨씬 순하고 자연스럽게 달콤해 거의 모두를 사로잡습니다.',
        },
        {
          title: '호지차는 오후를 위해 아껴두기',
          description: '호지차는 자연스럽게 카페인이 낮아, 점심 후나 저녁, 혹은 여유롭게 쉴 때 현명한 주문입니다. 라테의 따뜻함과 의식을 잠을 잃지 않고 누릴 수 있어 — 편안한 와이키키의 밤에 완벽하죠.',
        },
        {
          title: '활력이 필요할 땐 말차',
          description: '말차는 카페인이 더 많고, L-테아닌이 균형을 잡아 커피 같은 크래시 없이 꾸준하고 집중된 에너지를 줍니다. 깔끔하고 차분한 부스트가 필요한 아침이나 이른 오후엔 말차 라테를 드세요.',
        },
        {
          title: '플레이버로 실험하기',
          description: '좋아하는 베이스를 알았다면, 가지고 놀아보세요. 딸기나 망고 라테는 말차에선 밝고 상큼하게, 호지차에선 따뜻하고 순하게. 같은 과일, 완전히 다른 두 음료 — 비교하는 재미가 절반입니다.',
        },
      ],
    },
    faq: {
      title: '말차 vs 호지차 — 자주 묻는 질문',
      items: [
        {
          question: '호지차는 카페인이 없나요?',
          answer: '완전히 없는 건 아니지만 아주 가깝습니다. 호지차는 로스팅 과정에서 카페인이 자연스럽게 줄어 일본 차 중 카페인이 가장 낮은 편입니다. 말차나 커피보다 훨씬 적어 오후, 저녁, 아이들, 카페인에 민감한 분에게 인기 있는 선택이죠. 정말 카페인 제로가 필요하다면 디카페인 옵션을 문의해 주세요.',
        },
        {
          question: '호지차는 말차 같은 맛인가요?',
          answer: '아니요 — 둘 다 녹차지만 맛은 정반대입니다. 말차는 선명한 초록에 풀향, 감칠맛이 풍부하고 살짝 쌉쌀합니다. 호지차는 붉은 갈색에 로스팅되어 고소하고 견과류·카라멜처럼 부드럽죠. 말차가 너무 풀향이 강하거나 쌉쌀하게 느껴진다면, 호지차의 순하고 로스팅된 단맛이 훨씬 좋아하기 쉬운 경우가 많습니다.',
        },
        {
          question: '말차와 호지차, 어느 것이 더 건강한가요?',
          answer: '둘 다 항산화 성분이 있는 녹차라 모두 건강한 루틴의 일부가 될 수 있습니다. 말차는 더 농축되어 있고(갈린 잎을 통째로 섭취) 카페인과 L-테아닌이 높아 "차분한 각성" 집중을 줍니다. 호지차는 카페인이 낮고 로스팅 덕분에 일부에겐 속에 더 부드럽죠. "더 건강한" 선택은 카페인 필요와 취향에 달렸습니다 — 틀린 선택은 없습니다.',
        },
        {
          question: '와이키키에서 호지차를 어디서 마실 수 있나요?',
          answer: '2142 Kalakaua Ave의 Kona Coffee Donut? 는 호지차 라테를 $8.95에 핫이든 아이스든 제공하며, 와이키키 해변에서 도보 약 5분입니다. 말차 라테도 $8.95에 제공해 둘을 나란히 맛볼 수 있죠. 플레이버 라테(딸기, 망고, 코코넛, 구아바, 바나나)도 말차 또는 호지차 베이스로 만들 수 있습니다.',
        },
        {
          question: '호지차 라테란 무엇인가요?',
          answer: '호지차 라테는 로스팅한 일본 녹차를 저어 풀거나 우려 스팀(또는 아이스) 밀크와 섞은 것입니다. 고소하고, 견과류 같고, 은은하게 카라멜처럼 달콤해 — 볶은 쌀과 로스팅한 견과류를 우유에 녹인 듯한 맛이며 자연스럽게 카페인이 낮습니다. 와이키키의 Kona Coffee Donut? 에서는 $8.95, 핫이든 아이스든, 따뜻한 도넛과 완벽하게 어울립니다.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 말차와 호지차를 맛보세요',
      text: '2142 Kalakaua Ave의 Kona Coffee Donut? 에 들러 말차 라테와 로스팅 호지차 라테를 즐겨보세요 — 각 $8.95, 핫이든 아이스든, 와이키키 해변에서 단 몇 분 거리입니다.',
      menuButton: '말차 & 커피 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '말차 vs 호지차',
    },
  },
  zh: {
    hero: {
      title: '抹茶 vs 焙茶：有什么区别？',
      subtitle: '两款日本绿茶的清晰对比——以及在威基基哪里能同时尝到（2026指南）',
      updated: '2026年6月更新',
      readTime: '阅读约8分钟',
    },
    definition: {
      title: '抹茶 vs 焙茶——一句话答案',
      text: '<strong>抹茶</strong>和<strong>焙茶（ほうじ茶）</strong>都是日本绿茶，但味道几乎相反。<strong>抹茶</strong>是遮荫栽培的绿茶叶用石磨研磨成的细粉——颜色鲜绿，草香与鲜味浓郁，<strong>咖啡因较高</strong>，因L-茶氨酸带来"平静而清醒"的能量。<strong>焙茶</strong>是把绿茶<strong>用炭火烘焙</strong>而成——呈红褐色，带烘烤香、坚果与焦糖的顺滑，<strong>咖啡因天然偏低</strong>，非常适合午后、傍晚、孩子，或对咖啡因敏感的人。在威基基的 <strong>Kona Coffee Donut?</strong>，两款你都能尝到——抹茶拿铁和焙茶拿铁各<strong>$8.95</strong>，离海滩只有几分钟。',
    },
    history: {
      title: '什么是焙茶？（被低估的那一款）',
      subtitle: '烘焙过的绿茶——烘烤香、令人安心、天然低咖啡因',
      p1: '大多数人都认识抹茶，但<strong>焙茶（ほうじ茶）</strong>是值得被聚光的低调主角。它一开始只是普通的日本绿茶——通常是<strong>番茶或茎茶</strong>（较晚采摘的叶与茎）——然后经过<strong>高温、传统上以炭火烘焙</strong>。就这一步，改变了一切。',
      p2: '烘焙让茶叶由绿变成美丽的<strong>红褐色</strong>，并彻底改写了风味。焙茶不再草香、青涩，而是变得<strong>烘烤香、带坚果味、微微焦糖甜</strong>，尾韵顺滑、柔和、近乎温暖。它就像你在新鲜咖啡里喜欢的那种温暖烘烤香气的茶版本——安心而不尖锐。',
      p3: '对许多人来说最棒的一点：烘焙过程会<strong>天然降低咖啡因</strong>。焙茶是你能点到的咖啡因最低的茶之一，因此对<strong>午后、傍晚、孩子，或任何对咖啡因敏感的人</strong>都是很棒的选择。你能享受拿铁的仪式感与温暖，却不会心悸或深夜难眠。',
      p4: '如果你从没试过焙茶，威基基是个轻松的起点。一杯<strong>焙茶拿铁</strong>尝起来有点像烤米、烤坚果和焦糖搅入蒸奶——顺滑、微甜、怎么喝都不腻。配上一个温热的甜甜圈，它就成了菜单上最令人安心的享受之一。',
    },
    comparison: {
      title: '抹茶 vs 焙茶，并排对比',
      subtitle: '颜色、风味、咖啡因，以及各自适合谁',
      intro: '两者都来自日本茶树，却走向了截然不同的方向。这里有一个简单的并排对比，帮你挑到对的那一杯：',
      headers: {
        feature: '对比项',
        matcha: '抹茶',
        hojicha: '焙茶',
      },
      rows: [
        {
          feature: '颜色',
          matcha: '鲜艳明亮的绿色',
          hojicha: '红褐色 / 琥珀色',
        },
        {
          feature: '风味',
          matcha: '草香、鲜味、青涩、略带苦味',
          hojicha: '烘烤香、坚果、焦糖、顺滑柔和',
        },
        {
          feature: '咖啡因',
          matcha: '较高——因L-茶氨酸带来平静专注的能量',
          hojicha: '天然偏低——烘焙降低了咖啡因',
        },
        {
          feature: '制作方式',
          matcha: '遮荫栽培的茶叶用石磨研磨成细粉',
          hojicha: '番茶/茎茶绿茶经炭火烘焙',
        },
        {
          feature: '最佳饮用时间',
          matcha: '需要专注的清晨或午前',
          hojicha: '午后、傍晚，或任何想放松的时候',
        },
        {
          feature: '适合谁',
          matcha: '想要能量与绿茶劲道的咖啡爱好者',
          hojicha: '对咖啡因敏感的人、孩子，以及晚间小酌的人',
        },
      ],
      note: '最简单的判断：想要提神、鲜绿浓郁的绿茶味，选抹茶；想要温暖、烘烤、令人安心又低咖啡因的，选焙茶。没有错的答案——而在 Kona Coffee Donut?，两款你都能尝。',
    },
    types: {
      title: '你该选哪一款？',
      subtitle: '挑选抹茶或焙茶的快速指南',
      items: [
        {
          name: '选抹茶，如果……',
          korean: '你想要能量与专注',
          description: '抹茶是两者中咖啡因最高的，由L-茶氨酸平衡，带来顺滑、不崩盘的"平静而清醒"能量。如果你是咖啡爱好者，想在早晨来一份鲜亮、草香、鲜味十足的绿茶提神，抹茶就是你的选择。',
          icon: '🍵',
        },
        {
          name: '选焙茶，如果……',
          korean: '你想要低咖啡因与安心',
          description: '焙茶经过烘焙，带烘烤香，天然低咖啡因——非常适合午后或傍晚、孩子，或咖啡因会让你失眠的人。它温暖、带坚果味、如焦糖般顺滑：拥有拿铁的全部温馨仪式，却没有心悸。',
          icon: '🔥',
        },
        {
          name: '喜欢浓烈风味？',
          korean: '抹茶偏鲜亮、青草',
          description: '如果你喜欢浓郁、青涩、略带苦味的绿茶味——那种能扛住牛奶甚至甜味的味道——抹茶能给你那份鲜明冲击。它是两者中更浓烈、更提神的一杯。',
          icon: '🌿',
        },
        {
          name: '偏爱柔和香甜？',
          korean: '焙茶顺滑又烘香',
          description: '如果青草味或苦味不是你的菜，焙茶会是惊喜。它烘烤过的坚果、焦糖气质天然更柔和、更甜——对几乎任何人来说，都是走进日本茶世界的轻松第一步。',
          icon: '🤎',
        },
        {
          name: '拿不定主意？',
          korean: '两款都试，或来点风味',
          description: '你不必二选一。点一杯抹茶拿铁和一杯焙茶拿铁，并排比较。或者试试我们的风味系列——草莓、芒果、椰子、番石榴、香蕉——用抹茶或焙茶做基底，玩出有趣的变化。',
          icon: '⚖️',
        },
      ],
    },
    whyHawaii: {
      title: '为什么要在威基基喝抹茶与焙茶',
      points: [
        {
          title: '两款茶，一站搞定',
          description: '不用满城寻找，你在卡拉卡瓦大道的一家店就能尝到抹茶和焙茶。并排点一杯抹茶拿铁和一杯焙茶拿铁，找出哪款日本绿茶是你的新最爱——全都离海滩只有几分钟。',
        },
        {
          title: '真的能找到的焙茶',
          description: '焙茶虽然美味又低咖啡因，却仍在许多菜单上难觅踪影。在威基基的 Kona Coffee Donut?，我们把它现做成焙茶拿铁，让你终于能尝到这款很快会被大家谈论的烘焙绿茶。',
        },
        {
          title: '人人适合的低咖啡因选择',
          description: '带着孩子旅行、对咖啡因敏感，或想在晚餐后来一杯？焙茶拿铁给你咖啡时光的全部温暖与仪式，却不会让你失眠。这是全家人都满意的那一杯。',
        },
        {
          title: '茶＋甜甜圈的组合',
          description: '无论抹茶鲜亮的绿茶味，还是焙茶烘烤的甜香，都与温热现做的麻糬甜甜圈或马拉萨达绝配。把匆匆一杯茶变成威基基的小仪式——这正是度假小憩的意义。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基哪里能尝到抹茶与焙茶',
      intro: '想并排品尝两款？卡拉卡瓦大道上的 Kona Coffee Donut? 提供正宗抹茶与烘焙焙茶拿铁，冷热皆有，现做新鲜。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '就在威基基中心地带，Kona Coffee Donut? 同时供应抹茶拿铁和焙茶拿铁——各$8.95，冷热皆有。想尝风味？我们的草莓、芒果、椰子、番石榴和香蕉拿铁，都能用抹茶或焙茶做基底，随你搭配。任选一款配上现做的麻糬甜甜圈或马拉萨达，就是完美的威基基小憩。我们距威基基海滩步行约5分钟，每天营业。',
        highlights: [
          '抹茶拿铁 & 焙茶拿铁——各$8.95，冷热皆有',
          '风味系列（草莓、芒果、椰子、番石榴、香蕉）可用抹茶或焙茶做基底',
          '距威基基海滩约5分钟',
          '每天营业，上午7点至晚上9点 · (808) 260-1835',
        ],
      },
      cta: '查看我们的抹茶与咖啡菜单',
    },
    howToEat: {
      title: '第一次喝抹茶或焙茶的小贴士',
      subtitle: '充分享受两款日本绿茶',
      tips: [
        {
          title: '抹茶太青涩就试焙茶',
          description: '如果你试过抹茶，觉得太青涩或太苦，别放弃绿茶——改点焙茶吧。它烘烤过的坚果、焦糖般的顺滑要温和得多，天然更甜，几乎能俘获所有人。',
        },
        {
          title: '把焙茶留到午后',
          description: '因为焙茶天然低咖啡因，午餐后、傍晚，或想放松时点它最聪明。你能享受拿铁的温暖与仪式，又不失眠——非常适合悠闲的威基基夜晚。',
        },
        {
          title: '需要提神时选抹茶',
          description: '抹茶咖啡因更高，由L-茶氨酸平衡，带来稳定专注的能量，没有喝咖啡后的崩盘。想要干净、平静的提振时，早晨或午前来一杯抹茶拿铁。',
        },
        {
          title: '用风味做实验',
          description: '一旦知道自己喜欢哪种基底，就可以玩起来。草莓或芒果拿铁在抹茶上明亮果香，在焙茶上温暖柔和。同样的水果，两杯截然不同的饮品——比较本身就是乐趣的一半。',
        },
      ],
    },
    faq: {
      title: '抹茶 vs 焙茶——常见问题',
      items: [
        {
          question: '焙茶不含咖啡因吗？',
          answer: '并非完全不含，但非常接近。焙茶因烘焙过程天然降低了咖啡因，是咖啡因最低的日本茶之一。它比抹茶或咖啡少得多，所以是午后、傍晚、孩子和对咖啡因敏感者的热门选择。如果你需要真正零咖啡因，可以询问无咖啡因选项。',
        },
        {
          question: '焙茶尝起来像抹茶吗？',
          answer: '不像——虽然都是绿茶，味道却几乎相反。抹茶鲜绿、草香、鲜味浓郁、略带苦味。焙茶呈红褐色、经过烘焙，带烘烤香、坚果与焦糖的顺滑。如果你觉得抹茶太青涩或太苦，焙茶柔和的烘烤甜味往往更容易入口、更讨喜。',
        },
        {
          question: '抹茶和焙茶哪个更健康？',
          answer: '两者都是含抗氧化物的绿茶，都可以是健康习惯的一部分。抹茶更浓缩（你摄入的是整片研磨的茶叶），咖啡因和L-茶氨酸更高，带来"平静而清醒"的专注。焙茶咖啡因更低，因烘焙对部分人的肠胃更温和。"更健康"的选择其实取决于你的咖啡因需求和口味——没有错的选择。',
        },
        {
          question: '在威基基哪里能尝到焙茶？',
          answer: '位于 2142 Kalakaua Ave 的 Kona Coffee Donut? 供应焙茶拿铁，$8.95，冷热皆有，距威基基海滩步行约5分钟。我们也供应$8.95的抹茶拿铁，你可以并排品尝两款。我们的风味拿铁（草莓、芒果、椰子、番石榴、香蕉）也能用抹茶或焙茶做基底。',
        },
        {
          question: '什么是焙茶拿铁？',
          answer: '焙茶拿铁是把烘焙过的日本绿茶打匀或冲泡后，与蒸奶（或冰奶）混合而成。它尝起来烘烤香、带坚果味、微微焦糖甜——有点像烤米和烤坚果溶入牛奶——并且天然低咖啡因。在威基基的 Kona Coffee Donut?，一杯$8.95，冷热皆有，与温热的甜甜圈绝配。',
        },
      ],
    },
    cta: {
      title: '在威基基品尝抹茶与焙茶',
      text: '前往 2142 Kalakaua Ave 的 Kona Coffee Donut?，尝一杯抹茶拿铁和一杯烘焙焙茶拿铁——各$8.95，冷热皆有，距威基基海滩仅几分钟。',
      menuButton: '查看抹茶与咖啡菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '抹茶 vs 焙茶',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Matcha vs Hojicha: What\'s the Difference? (Waikiki 2026)',
  description: 'Matcha vs hojicha explained — vibrant grassy matcha vs roasted, low-caffeine hojicha. A clear comparison of color, flavor, and caffeine, plus where to try both in Waikiki.',
  image: 'https://www.konacoffeedonut.com/images/blog/matcha-vs-hojicha-waikiki.jpeg',
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
    '@id': 'https://www.konacoffeedonut.com/en/blog/matcha-vs-hojicha-waikiki',
  },
  keywords: 'matcha vs hojicha, what is hojicha, hojicha benefits, hojicha latte, hojicha waikiki, roasted green tea',
  wordCount: 1600,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is hojicha caffeine-free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not quite caffeine-free, but very close. Hojicha is one of the lowest-caffeine Japanese teas because the roasting process naturally reduces the caffeine. It contains far less than matcha or coffee, which is why it\'s a popular choice for the afternoon, the evening, kids, and anyone caffeine-sensitive. If you need truly zero caffeine, ask about a decaf option.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does hojicha taste like matcha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — they taste like opposites even though both are green teas. Matcha is vibrant green, grassy, umami-rich, and slightly bitter. Hojicha is reddish-brown and roasted, with toasty, nutty, caramel-smooth flavor. If you find matcha too grassy or bitter, hojicha\'s mellow, roasted sweetness is often a much easier drink to love.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is healthier, matcha or hojicha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are green teas with antioxidants, so both can be part of a healthy routine. Matcha is more concentrated (you consume the whole ground leaf) and higher in caffeine and L-theanine, giving that "calm alert" focus. Hojicha is lower in caffeine and gentler on the stomach for some people, thanks to roasting. The "healthier" choice really depends on your caffeine needs and taste — there\'s no wrong pick.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I try hojicha in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut? at 2142 Kalakaua Ave serves a fresh Hojicha Latte for $8.95, hot or iced, about a 5-minute walk from Waikiki Beach. We also pour a Matcha Latte at $8.95, so you can taste both side by side. Our flavored lattes (strawberry, mango, coconut, guava, banana) can be made on a matcha or hojicha base, too.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a hojicha latte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A hojicha latte is roasted Japanese green tea whisked or brewed and combined with steamed (or iced) milk. It tastes toasty, nutty, and lightly caramel-sweet — a bit like toasted rice and roasted nuts in milk — and it\'s naturally low in caffeine. At Kona Coffee Donut? in Waikiki it\'s $8.95, hot or iced, and pairs perfectly with a warm donut.',
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
      name: 'Matcha vs Hojicha',
      item: 'https://www.konacoffeedonut.com/en/blog/matcha-vs-hojicha-waikiki',
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

export default function MatchaVsHojichaWaikikiPage() {
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
          src="/images/blog/matcha-vs-hojicha-waikiki.jpeg"
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

        {/* What Is Hojicha — Spotlight */}
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
                    <th className="p-4 text-left font-semibold">{t.comparison.headers.matcha}</th>
                    <th className="p-4 text-left font-semibold">{t.comparison.headers.hojicha}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.comparison.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-sky-50/50' : 'bg-white'}>
                      <td className="p-4 font-semibold text-gray-900 border-b border-gray-100">{row.feature}</td>
                      <td className="p-4 text-sky-800 border-b border-gray-100 font-medium">{row.matcha}</td>
                      <td className="p-4 text-gray-600 border-b border-gray-100">{row.hojicha}</td>
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

        {/* Which Should You Choose */}
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

        {/* Why Try in Waikiki */}
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

        {/* Where to Try in Waikiki */}
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

        {/* Tips */}
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
              href={`/${locale}/blog/matcha-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Matcha in Waikiki
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
