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
      title: 'Hojicha Latte in Waikiki',
      subtitle: 'Roasted Green Tea, Benefits & Where to Try It (2026 Guide)',
      updated: 'Updated June 2026',
      readTime: '7 min read',
    },
    definition: {
      title: 'What Is a Hojicha Latte?',
      text: 'A <strong>hojicha latte</strong> is a warm, creamy drink made from <strong>hojicha (ほうじ茶)</strong> — a Japanese green tea that has been <strong>roasted over charcoal</strong> — whisked and poured over steamed milk. Roasting turns the leaves a <strong>reddish-brown</strong> and gives the drink a <strong>toasty, nutty, caramel</strong> flavor that is smooth and never grassy or bitter. Best of all, hojicha is <strong>naturally low in caffeine</strong>, so a hojicha latte is the perfect cozy pick-me-up for the afternoon, the evening, or anyone who wants a comforting cup without the jitters. In Waikiki, you can order one fresh — hot or iced — just minutes from the beach.',
    },
    history: {
      title: 'How Hojicha Is Made & What Makes It Special',
      subtitle: 'Roasted Over Charcoal in Kyoto — Now Poured Fresh in Waikiki',
      p1: 'Hojicha starts as ordinary Japanese green tea — usually <strong>bancha or kukicha</strong> (later-harvest leaves and stems). What makes it special is the final step: the leaves are <strong>roasted over charcoal or high heat</strong> until they turn a rich reddish-brown. This roasting was first done in <strong>1920s Kyoto</strong>, when tea merchants roasted leftover leaves and stems rather than waste them — and discovered something warm, toasty, and delicious.',
      p2: 'The roast transforms the tea completely. Grassy, vegetal notes give way to deep <strong>nutty, toasty, caramel</strong> aromas, and the harsh edge disappears — hojicha is <strong>smooth and mellow</strong>, easy to drink black or with milk. In the cup it pours a warm <strong>reddish-brown</strong> rather than the vivid green of matcha, and its comforting, roasted character is exactly why it makes such a satisfying latte.',
      p3: 'Just as importantly, roasting <strong>burns off much of the caffeine</strong>. Hojicha is one of the <strong>lowest-caffeine teas you can order</strong> — gentle enough that in Japan it is traditionally served after meals and offered to children and the elderly. That makes a hojicha latte the drink to reach for in the afternoon or evening, when a coffee would keep you up but you still want something warm and satisfying.',
      p4: 'From Kyoto tea houses, hojicha crossed the Pacific. Hawaii — with its deep Japanese-American roots and love of tea — took to the toasty roasted flavor naturally, and today you can enjoy a fresh hojicha latte in <strong>Waikiki</strong> just steps from the sand. If you already love matcha, hojicha is the next Japanese tea to fall for — cozier, smoother, and easier on the caffeine.',
    },
    comparison: {
      title: 'Hojicha vs Matcha vs Coffee',
      subtitle: 'How a Hojicha Latte Compares',
      intro: 'Hojicha, matcha, and coffee are three very different ways to enjoy your café drink. Here is how a hojicha latte stacks up — especially if you are watching your caffeine:',
      headers: {
        feature: 'Feature',
        bingsu: 'Hojicha',
        shavedIce: 'Matcha',
        kakigori: 'Coffee',
      },
      rows: [
        {
          feature: 'What it is',
          bingsu: 'Roasted green tea (bancha/kukicha)',
          shavedIce: 'Stone-ground green tea leaf',
          kakigori: 'Roasted coffee beans',
        },
        {
          feature: 'Caffeine',
          bingsu: 'Low — the lowest of the three',
          shavedIce: 'Moderate',
          kakigori: 'High',
        },
        {
          feature: 'Taste',
          bingsu: 'Toasty, nutty, caramel, smooth',
          shavedIce: 'Grassy, vegetal, umami',
          kakigori: 'Bitter, roasty',
        },
        {
          feature: 'Color',
          bingsu: 'Reddish-brown, warm',
          shavedIce: 'Vivid green',
          kakigori: 'Dark brown',
        },
        {
          feature: 'Best time',
          bingsu: 'Afternoon or evening',
          shavedIce: 'Morning to midday',
          kakigori: 'Morning',
        },
        {
          feature: 'Who it\'s for',
          bingsu: 'Anyone wanting a cozy, low-caffeine cup',
          shavedIce: 'Fans of bright, earthy green tea',
          kakigori: 'Those who want a strong caffeine kick',
        },
      ],
      note: 'The takeaway: hojicha is the lowest-caffeine of the three and the only one with a roasted, caramel-like flavor — which makes a hojicha latte the easy choice when you want something warm and comforting without the jitters. Curious how it stacks up head-to-head? See our hojicha vs matcha guide below.',
    },
    types: {
      title: 'Hojicha Benefits & Why People Love It',
      subtitle: 'Five Reasons to Order a Hojicha Latte',
      items: [
        {
          name: 'Naturally Low Caffeine',
          korean: 'gentle, any time of day',
          description: 'Because the leaves are roasted, hojicha has far less caffeine than matcha or coffee — one of the lowest of any tea. That makes a hojicha latte perfect for the afternoon, the evening, caffeine-sensitive drinkers, and anyone who wants something warm without staying up all night.',
          icon: '🌙',
        },
        {
          name: 'Toasty, Comforting Flavor',
          korean: 'nutty · caramel · smooth',
          description: 'Roasting gives hojicha a warm, nutty, caramel-like taste with none of the bitterness of green tea. It is soothing and cozy — the kind of drink you sip slowly. Over steamed milk it becomes a creamy, toasted-nut latte that is easy to love from the first sip.',
          icon: '☕',
        },
        {
          name: 'Antioxidants',
          korean: 'from green tea leaves',
          description: 'Hojicha is still green tea at heart, so it carries the antioxidants (catechins) green tea is known for. You get the goodness of tea in a form that tastes toasty and comforting rather than sharp or grassy — a feel-good cup you can enjoy every day.',
          icon: '🍃',
        },
        {
          name: 'Easy on the Stomach',
          korean: 'low tannins, gentle',
          description: 'The roasting process lowers the tannins and bitterness, so hojicha is famously gentle and easy to drink — even after a meal. That is why it has long been a comforting everyday tea in Japan, served to all ages, from kids to grandparents.',
          icon: '🫖',
        },
        {
          name: 'Calm, Not Jittery',
          korean: 'cozy without the crash',
          description: 'With its low caffeine and mellow roasted flavor, a hojicha latte gives you a calm, comforting lift instead of a coffee jolt. It is the drink to order when you want to relax, unwind, or enjoy a treat later in the day without a caffeine crash.',
          icon: '😌',
        },
      ],
    },
    whyHawaii: {
      title: 'Why Order a Hojicha Latte in Waikiki',
      points: [
        {
          title: 'The Perfect Low-Caffeine Afternoon Drink',
          description: 'Already had your morning coffee? Hojicha is the ideal second drink. Its naturally low caffeine means you can enjoy a warm, satisfying latte in the afternoon or evening — great after the beach, after dinner, or any time you want a cozy cup without staying up at night.',
        },
        {
          title: 'A Japanese Tea Beyond Matcha',
          description: 'Everyone knows matcha, but hojicha is the roasted green tea worth discovering. Toasty, nutty, and mellow, it is a completely different experience — smoother, cozier, and lower in caffeine. If you love matcha, hojicha is the next Japanese tea to try. See our hojicha vs matcha guide to choose.',
        },
        {
          title: 'Hot or Iced, Steps From the Beach',
          description: 'A hojicha latte is delicious hot on a breezy morning and just as good iced on a warm Waikiki afternoon — the reddish-brown tea over milk looks beautiful in the cup. At Kona Coffee Donut? you can order it fresh either way, about a 5-minute walk from Waikiki Beach.',
        },
        {
          title: 'Made for a Mochi Donut',
          description: 'Hojicha\'s caramel and toasted-nut notes are a perfect match for a warm, chewy mochi donut. The roasted tea cuts through the sweetness and turns a quick stop into a cozy little treat — exactly the kind of pairing a Waikiki afternoon is made for.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Try a Hojicha Latte in Waikiki',
      intro: 'If you want to taste roasted green tea near Waikiki Beach, Kona Coffee Donut? is a great place to start.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Right on Kalākaua Avenue in the heart of Waikiki, Kona Coffee Donut? serves a smooth, toasty Hojicha Latte for $8.95 — made fresh, hot or iced. Our whole flavored line can be made on a hojicha base, so you can customize your roasted-tea drink, and it pairs beautifully with a warm mochi donut. We are about a 5-minute walk from Waikiki Beach and open daily, so it is easy to swing by for a cozy, low-caffeine cup.',
        highlights: [
          'Hojicha Latte $8.95 — roasted green tea, hot or iced',
          'Flavored drinks can be made on a hojicha base',
          'Pairs perfectly with fresh mochi donuts',
          'Open daily, 7AM–9PM · about 5 min from Waikiki Beach',
        ],
      },
      cta: 'View Our Coffee & Tea Menu',
    },
    howToEat: {
      title: 'Tips for the Best Hojicha Latte',
      subtitle: 'Get the Most Out of Your Roasted Green Tea',
      tips: [
        {
          title: 'Hot for Cozy, Iced for Refreshing',
          description: 'Order it hot when you want something warm and comforting — the toasty aroma really comes through. Order it iced on a warm Waikiki afternoon for a smooth, refreshing drink that keeps all of hojicha\'s nutty, caramel character. Both are delicious, so go with the weather.',
        },
        {
          title: 'Save It for the Afternoon or Evening',
          description: 'Because hojicha is naturally low in caffeine, it is the perfect drink for later in the day. Have your coffee in the morning, then switch to a hojicha latte in the afternoon or after dinner for a warm treat that won\'t keep you up at night.',
        },
        {
          title: 'Pair It With a Mochi Donut',
          description: 'Hojicha\'s roasted, caramel-nut flavor is made for something sweet. Order it alongside a chewy mochi donut — chocolate or ube are favorites — and let the toasty tea balance the sweetness. It is the easy, cozy combo that makes a Waikiki break feel special.',
        },
        {
          title: 'New to Hojicha? Try It Next to Matcha',
          description: 'If you are curious how roasted green tea compares to the bright green kind, order a hojicha latte next to a matcha latte and taste the difference. Many guests share both. Hojicha is toasty, mellow, and lower in caffeine; matcha is grassy and bright.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About Hojicha',
      items: [
        {
          question: 'Is hojicha caffeine-free?',
          answer: 'Hojicha is not completely caffeine-free, but it is very low in caffeine — one of the lowest of any tea. The roasting process burns off much of the caffeine, so a hojicha latte has far less than coffee or matcha. That makes it a great choice for the afternoon, the evening, and caffeine-sensitive drinkers, though it is not fully decaf.',
        },
        {
          question: 'What does hojicha taste like?',
          answer: 'Hojicha tastes toasty, nutty, and caramel-like, with a smooth, mellow finish and almost none of the bitterness or grassiness of regular green tea. That roasted flavor comes from roasting the leaves over charcoal. Over steamed milk it becomes a creamy, comforting latte that tastes a little like toasted nuts and brown sugar.',
        },
        {
          question: 'Is hojicha good for you?',
          answer: 'Hojicha is green tea at heart, so it still contains antioxidants (catechins). The roasting lowers the tannins and caffeine, which makes it gentle and easy on the stomach — one reason it is traditionally enjoyed after meals and by all ages in Japan. As part of a balanced diet, a hojicha latte is a comforting, feel-good drink.',
        },
        {
          question: 'Where can I get a hojicha latte in Waikiki?',
          answer: 'You can get a fresh hojicha latte at Kona Coffee Donut?, 2142 Kalakaua Ave, right on Kalākaua Avenue in the heart of Waikiki — about a 5-minute walk from Waikiki Beach. Our Hojicha Latte is $8.95, available hot or iced, and pairs perfectly with a fresh mochi donut. We are open daily, 7AM–9PM.',
        },
        {
          question: 'What is the difference between hojicha and matcha?',
          answer: 'Matcha is a bright green, stone-ground green tea powder with a grassy, vegetal flavor and moderate caffeine. Hojicha is a roasted green tea that pours reddish-brown, tastes toasty and caramel-like, and is much lower in caffeine. Hojicha is cozier and gentler; matcha is bolder and brighter. See our hojicha vs matcha guide to decide which is right for you.',
        },
      ],
    },
    cta: {
      title: 'Try a Roasted Green Tea Hojicha Latte in Waikiki',
      text: 'Visit Kona Coffee Donut? at 2142 Kalakaua Ave and order a smooth, toasty Hojicha Latte ($8.95), hot or iced, paired with a warm mochi donut — just minutes from Waikiki Beach.',
      menuButton: 'View Coffee & Tea Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'Hojicha Latte in Waikiki',
    },
  },
  ja: {
    hero: {
      title: 'ワイキキのほうじ茶ラテ',
      subtitle: '焙じた緑茶、その効能と味わえる場所（2026年版ガイド）',
      updated: '2026年6月更新',
      readTime: '7分で読める',
    },
    definition: {
      title: 'ほうじ茶ラテとは？',
      text: '<strong>ほうじ茶ラテ</strong>とは、<strong>炭火で焙じた</strong>日本の緑茶＝<strong>ほうじ茶</strong>を点て、スチームミルクに注いだ温かくクリーミーな一杯です。焙じることで茶葉は<strong>赤褐色</strong>に変わり、<strong>香ばしくナッツのような、キャラメルのような</strong>まろやかな風味に。緑茶特有の青臭さや苦味はほとんどありません。さらにほうじ茶は<strong>カフェインが自然に少ない</strong>ので、午後や夜、カフェインが気になる方にもぴったりの癒しの一杯です。ワイキキなら、ビーチから数分でホットもアイスも淹れたてを楽しめます。',
    },
    history: {
      title: 'ほうじ茶の作り方と特別な理由',
      subtitle: '京都の炭火焙煎から、ワイキキの淹れたて一杯まで',
      p1: 'ほうじ茶は、もともとふつうの日本の緑茶——多くは<strong>番茶や茎茶（くき茶）</strong>——から作られます。特別なのは最後の工程。茶葉を<strong>炭火や高温で焙じ</strong>、赤みを帯びた茶色になるまで焙煎します。この焙じる製法は<strong>1920年代の京都</strong>で生まれました。茶商が売れ残った茶葉や茎を捨てずに焙じたところ、香ばしく美味しいお茶が生まれたのです。',
      p2: '焙煎はお茶を一変させます。青々とした草のような風味は、深い<strong>香ばしさ、ナッツ、キャラメル</strong>の香りへと変わり、とがった苦味は消えて<strong>まろやかで穏やか</strong>に。ブラックでもミルクと合わせても飲みやすくなります。カップに注ぐと抹茶の鮮やかな緑ではなく温かい<strong>赤褐色</strong>で、その香ばしくほっとする味わいこそ、ラテにぴったりな理由です。',
      p3: '同じくらい大切なのが、焙煎で<strong>カフェインの多くが飛ぶ</strong>こと。ほうじ茶は<strong>注文できるお茶の中でも特にカフェインが少なく</strong>、日本では昔から食後に出され、子どもやお年寄りにも親しまれてきました。だからこそ、コーヒーだと眠れなくなる午後や夜でも、温かく満たされる一杯が欲しいときに選びたいのがほうじ茶ラテです。',
      p4: '京都の茶屋から、ほうじ茶は太平洋を越えました。日系の歴史が深くお茶を愛するハワイは、この香ばしい焙煎の味を自然と受け入れ、今では<strong>ワイキキ</strong>のビーチのすぐそばで淹れたてのほうじ茶ラテが楽しめます。抹茶が好きな方にこそ、次に試してほしい日本茶——もっとほっとして、まろやかで、カフェイン控えめです。',
    },
    comparison: {
      title: 'ほうじ茶 vs 抹茶 vs コーヒー',
      subtitle: 'ほうじ茶ラテを比べてみると',
      intro: 'ほうじ茶、抹茶、コーヒーは、カフェの一杯を楽しむまったく違う三つの選択肢。特にカフェインが気になる方に、ほうじ茶ラテがどう位置づくかを見てみましょう：',
      headers: {
        feature: '項目',
        bingsu: 'ほうじ茶',
        shavedIce: '抹茶',
        kakigori: 'コーヒー',
      },
      rows: [
        {
          feature: '正体',
          bingsu: '焙じた緑茶（番茶・茎茶）',
          shavedIce: '石臼で挽いた緑茶葉',
          kakigori: '焙煎したコーヒー豆',
        },
        {
          feature: 'カフェイン',
          bingsu: '少ない——三つの中で最も低い',
          shavedIce: '中程度',
          kakigori: '多い',
        },
        {
          feature: '味わい',
          bingsu: '香ばしくナッツ、キャラメル、まろやか',
          shavedIce: '青々しい、植物的、うま味',
          kakigori: '苦味、焙煎香',
        },
        {
          feature: '色',
          bingsu: '温かい赤褐色',
          shavedIce: '鮮やかな緑',
          kakigori: '濃い茶色',
        },
        {
          feature: '飲むのに良い時間',
          bingsu: '午後や夜',
          shavedIce: '朝から昼',
          kakigori: '朝',
        },
        {
          feature: 'おすすめの人',
          bingsu: 'ほっとする低カフェインの一杯が欲しい人',
          shavedIce: '爽やかで土のような緑茶が好きな人',
          kakigori: 'しっかりカフェインを効かせたい人',
        },
      ],
      note: 'ポイントは、ほうじ茶が三つの中で最もカフェインが少なく、唯一の香ばしくキャラメルのような味わいだということ。だから、そわそわせず温かくほっとしたいときにはほうじ茶ラテが手軽な選択です。じっくり比べたい方は、下のほうじ茶 vs 抹茶ガイドもどうぞ。',
    },
    types: {
      title: 'ほうじ茶の効能と愛される理由',
      subtitle: 'ほうじ茶ラテを頼みたくなる5つの理由',
      items: [
        {
          name: '自然にカフェイン控えめ',
          korean: '穏やか・いつでも',
          description: '茶葉を焙じるため、ほうじ茶は抹茶やコーヒーよりずっとカフェインが少なく、お茶の中でも屈指の低さです。だからほうじ茶ラテは午後や夜、カフェインに敏感な方、夜更かししたくない方にぴったりの温かい一杯です。',
          icon: '🌙',
        },
        {
          name: '香ばしくほっとする味',
          korean: 'ナッツ・キャラメル・まろやか',
          description: '焙煎によって、ほうじ茶は緑茶の苦味がなく、温かく香ばしいキャラメルのような味わいに。ゆっくり味わいたくなる、心なごむ一杯です。スチームミルクと合わせれば、香ばしいナッツのようなクリーミーなラテになり、ひと口目から好きになります。',
          icon: '☕',
        },
        {
          name: '抗酸化成分',
          korean: '緑茶の葉から',
          description: 'ほうじ茶も本質は緑茶なので、緑茶で知られる抗酸化成分（カテキン）を含みます。とがった青臭さではなく、香ばしくほっとする味わいでお茶の良さを楽しめる——毎日でも飲みたくなる、うれしい一杯です。',
          icon: '🍃',
        },
        {
          name: '胃にやさしい',
          korean: 'タンニン控えめ',
          description: '焙煎の工程でタンニンや苦味が抑えられるため、ほうじ茶は食後でも飲みやすいことで知られます。だからこそ日本では昔から、子どもからお年寄りまで親しまれる日常のお茶として愛されてきました。',
          icon: '🫖',
        },
        {
          name: 'そわそわしない穏やかさ',
          korean: 'ほっと、でもクラッシュなし',
          description: '低カフェインでまろやかな焙煎の風味のほうじ茶ラテは、コーヒーのような刺激ではなく、穏やかでほっとする心地よさをくれます。リラックスしたいとき、一日の後半にご褒美が欲しいときに選びたい一杯です。',
          icon: '😌',
        },
      ],
    },
    whyHawaii: {
      title: 'ワイキキでほうじ茶ラテを頼むべき理由',
      points: [
        {
          title: '午後の低カフェインにぴったり',
          description: '朝のコーヒーはもう飲んだ？ならほうじ茶が二杯目に最適です。自然にカフェインが少ないので、午後や夜でも温かく満たされるラテを楽しめます。ビーチの後、夕食の後、夜更かししたくないときにぴったりです。',
        },
        {
          title: '抹茶の先にある日本茶',
          description: '抹茶は誰もが知っていますが、ほうじ茶は発見する価値のある焙じ緑茶。香ばしくナッツのようでまろやか、まったく違う体験です——より滑らかで、ほっとして、カフェインも控えめ。抹茶好きの次の一杯に。下のほうじ茶 vs 抹茶ガイドで選んでみて。',
        },
        {
          title: 'ホットもアイスも、ビーチのすぐそばで',
          description: 'ほうじ茶ラテは涼しい朝にはホットで、暖かいワイキキの午後にはアイスで美味しく——赤褐色のお茶とミルクの見た目も素敵です。Kona Coffee Donut? では、ワイキキビーチから徒歩約5分で、どちらも淹れたてを注文できます。',
        },
        {
          title: 'モチドーナツと相性抜群',
          description: 'ほうじ茶のキャラメルと香ばしいナッツの風味は、温かくもちもちのモチドーナツと完璧な相性。焙じたお茶が甘さを引き締め、さっと立ち寄る時間をほっとするご褒美に変えます——ワイキキの午後にぴったりの組み合わせです。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキでほうじ茶ラテを味わうなら',
      intro: 'ワイキキビーチ近くで焙じ緑茶を味わうなら、Kona Coffee Donut? が最適なスタート地点です。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心、カラカウア通り沿いに位置する Kona Coffee Donut? では、まろやかで香ばしいほうじ茶ラテを$8.95でご提供——ホットでもアイスでも淹れたてです。フレーバードリンクはすべてほうじ茶ベースにもでき、焙じ茶の一杯を自由にカスタマイズ。温かいモチドーナツとも相性抜群です。ワイキキビーチから徒歩約5分、毎日営業なので、ほっとする低カフェインの一杯に気軽に立ち寄れます。',
        highlights: [
          'ほうじ茶ラテ $8.95——焙じ緑茶、ホット＆アイス',
          'フレーバードリンクはほうじ茶ベースにも',
          '淹れたてのモチドーナツと相性抜群',
          '毎日営業、午前7時〜午後9時・ワイキキビーチから約5分',
        ],
      },
      cta: 'コーヒー＆ティーメニューを見る',
    },
    howToEat: {
      title: '最高のほうじ茶ラテのためのコツ',
      subtitle: '焙じ緑茶を最大限に楽しむために',
      tips: [
        {
          title: 'ほっとしたいならホット、爽やかにアイス',
          description: '温かくほっとしたいときはホットで——香ばしい香りが引き立ちます。暖かいワイキキの午後には、ほうじ茶のナッツやキャラメルの風味をそのままに、まろやかで爽やかなアイスを。どちらも美味しいので、天気で選んでください。',
        },
        {
          title: '午後や夜にとっておく',
          description: 'ほうじ茶は自然にカフェインが少ないので、一日の後半にぴったり。朝はコーヒー、午後や夕食後はほうじ茶ラテに切り替えれば、夜眠れなくならない温かなご褒美になります。',
        },
        {
          title: 'モチドーナツと合わせる',
          description: 'ほうじ茶の焙じたキャラメルとナッツの風味は、甘いものにぴったり。もちもちのモチドーナツ——チョコやウベが人気——と一緒に頼んで、香ばしいお茶に甘さを引き締めてもらいましょう。ワイキキの休憩を特別にする、手軽でほっとする組み合わせです。',
        },
        {
          title: 'ほうじ茶が初めて？抹茶と並べてみて',
          description: '焙じ緑茶が鮮やかな緑のお茶とどう違うか気になるなら、ほうじ茶ラテと抹茶ラテを並べて飲み比べを。多くのお客様が両方をシェアします。ほうじ茶は香ばしくまろやかで低カフェイン、抹茶は青々しく鮮やかです。',
        },
      ],
    },
    faq: {
      title: 'ほうじ茶に関するよくある質問',
      items: [
        {
          question: 'ほうじ茶はカフェインゼロですか？',
          answer: 'ほうじ茶は完全にカフェインゼロではありませんが、非常に少なく、お茶の中でも屈指の低さです。焙煎の過程でカフェインの多くが飛ぶため、ほうじ茶ラテはコーヒーや抹茶よりずっと少なめ。午後や夜、カフェインに敏感な方にも良い選択ですが、完全なカフェインレスではありません。',
        },
        {
          question: 'ほうじ茶はどんな味ですか？',
          answer: 'ほうじ茶は香ばしく、ナッツやキャラメルのような味わいで、まろやかな後味。ふつうの緑茶のような苦味や青臭さはほとんどありません。この焙じた風味は、茶葉を炭火で焙煎することから生まれます。スチームミルクと合わせると、香ばしいナッツと黒糖のようなクリーミーで心なごむラテになります。',
        },
        {
          question: 'ほうじ茶は体に良いですか？',
          answer: 'ほうじ茶は本質的に緑茶なので、抗酸化成分（カテキン）を含みます。焙煎によってタンニンとカフェインが抑えられ、胃にやさしく飲みやすいのが特徴——日本で食後に、また幅広い年齢で親しまれてきた理由のひとつです。バランスの良い食生活の一部として、ほうじ茶ラテは心なごむうれしい一杯です。',
        },
        {
          question: 'ワイキキでほうじ茶ラテはどこで飲めますか？',
          answer: 'ワイキキの中心、カラカウア通り沿いの 2142 Kalakaua Ave にある Kona Coffee Donut? で淹れたてのほうじ茶ラテが飲めます——ワイキキビーチから徒歩約5分。ほうじ茶ラテは$8.95、ホットでもアイスでも、淹れたてのモチドーナツと相性抜群です。毎日午前7時〜午後9時営業。',
        },
        {
          question: 'ほうじ茶と抹茶の違いは？',
          answer: '抹茶は鮮やかな緑色の石臼挽き緑茶パウダーで、青々しく植物的な風味と中程度のカフェイン。ほうじ茶は焙じた緑茶で、赤褐色に注がれ、香ばしくキャラメルのような味わいで、カフェインはずっと少なめです。ほうじ茶はほっとして穏やか、抹茶は力強く鮮やか。下のほうじ茶 vs 抹茶ガイドで、あなたに合う方を選んでみてください。',
        },
      ],
    },
    cta: {
      title: 'ワイキキで焙じ緑茶のほうじ茶ラテを',
      text: '2142 Kalakaua Ave の Kona Coffee Donut? で、まろやかで香ばしいほうじ茶ラテ（$8.95）をホットまたはアイスで、温かいモチドーナツと一緒に——ワイキキビーチからわずか数分です。',
      menuButton: 'コーヒー＆ティーメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'ワイキキのほうじ茶ラテ',
    },
  },
  ko: {
    hero: {
      title: '와이키키 호지차 라떼',
      subtitle: '볶은 녹차, 효능, 그리고 마실 수 있는 곳 (2026 가이드)',
      updated: '2026년 6월 업데이트',
      readTime: '7분 소요',
    },
    definition: {
      title: '호지차 라떼란?',
      text: '<strong>호지차 라떼</strong>는 <strong>숯불에 볶은</strong> 일본 녹차, 즉 <strong>호지차(ほうじ茶)</strong>를 저어 스팀 밀크에 부은 따뜻하고 크리미한 음료입니다. 볶는 과정에서 찻잎은 <strong>붉은 갈색</strong>으로 변하고, <strong>고소하고 견과류 같으며 카라멜 같은</strong> 부드러운 풍미가 생깁니다. 녹차 특유의 풋내나 쓴맛은 거의 없죠. 무엇보다 호지차는 <strong>카페인이 자연스럽게 적어서</strong>, 오후나 저녁, 카페인에 민감한 분에게 딱 맞는 편안한 한 잔입니다. 와이키키에서는 해변에서 몇 분 거리에서 핫이든 아이스든 갓 만든 걸 즐길 수 있습니다.',
    },
    history: {
      title: '호지차를 만드는 법과 특별한 이유',
      subtitle: '교토의 숯불 로스팅에서 와이키키의 갓 내린 한 잔까지',
      p1: '호지차는 원래 평범한 일본 녹차——주로 <strong>반차나 쿠키차(줄기차)</strong>——에서 시작됩니다. 특별한 건 마지막 단계. 찻잎을 <strong>숯불이나 고온으로 볶아</strong> 붉은 갈색이 될 때까지 로스팅합니다. 이 볶는 방식은 <strong>1920년대 교토</strong>에서 처음 생겨났습니다. 차 상인들이 팔리지 않은 찻잎과 줄기를 버리지 않고 볶았더니, 따뜻하고 고소하며 맛있는 차가 탄생한 것이죠.',
      p2: '로스팅은 차를 완전히 바꿔놓습니다. 풋풋하고 채소 같은 향은 깊은 <strong>고소함, 견과류, 카라멜</strong> 향으로 바뀌고, 날카로운 쓴맛은 사라져 <strong>부드럽고 은은해집니다</strong>——블랙으로도, 우유와 함께도 마시기 좋죠. 잔에 부으면 말차의 선명한 초록이 아니라 따뜻한 <strong>붉은 갈색</strong>이 되고, 이 고소하고 편안한 특성이야말로 라떼에 잘 어울리는 이유입니다.',
      p3: '똑같이 중요한 건, 로스팅이 <strong>카페인의 상당 부분을 날려버린다</strong>는 점입니다. 호지차는 <strong>주문할 수 있는 차 중에서도 카페인이 가장 적은 축</strong>——일본에서는 예로부터 식후에 내오고, 아이와 어르신에게도 권할 만큼 순합니다. 그래서 커피를 마시면 잠 못 자는 오후나 저녁, 그래도 따뜻하고 만족스러운 한 잔이 필요할 때 손이 가는 게 호지차 라떼입니다.',
      p4: '교토의 찻집에서 호지차는 태평양을 건넜습니다. 일본계 뿌리가 깊고 차를 사랑하는 하와이는 이 고소한 로스팅 풍미를 자연스럽게 받아들였고, 오늘날 <strong>와이키키</strong> 해변 바로 옆에서 갓 만든 호지차 라떼를 즐길 수 있습니다. 이미 말차를 좋아한다면, 다음으로 빠져들 일본차가 바로 호지차——더 편안하고, 부드럽고, 카페인은 더 적습니다.',
    },
    comparison: {
      title: '호지차 vs 말차 vs 커피',
      subtitle: '호지차 라떼를 비교하면',
      intro: '호지차, 말차, 커피는 카페 음료를 즐기는 아주 다른 세 가지 방법입니다. 특히 카페인을 신경 쓴다면, 호지차 라떼가 어디에 자리하는지 살펴보세요:',
      headers: {
        feature: '항목',
        bingsu: '호지차',
        shavedIce: '말차',
        kakigori: '커피',
      },
      rows: [
        {
          feature: '정체',
          bingsu: '볶은 녹차 (반차/쿠키차)',
          shavedIce: '맷돌로 간 녹찻잎',
          kakigori: '볶은 커피 원두',
        },
        {
          feature: '카페인',
          bingsu: '적음 — 셋 중 가장 낮음',
          shavedIce: '보통',
          kakigori: '높음',
        },
        {
          feature: '맛',
          bingsu: '고소하고 견과류·카라멜, 부드러움',
          shavedIce: '풋풋하고 채소 같은 감칠맛',
          kakigori: '쓰고 로스팅 향',
        },
        {
          feature: '색',
          bingsu: '따뜻한 붉은 갈색',
          shavedIce: '선명한 초록',
          kakigori: '진한 갈색',
        },
        {
          feature: '마시기 좋은 때',
          bingsu: '오후나 저녁',
          shavedIce: '아침에서 낮',
          kakigori: '아침',
        },
        {
          feature: '어울리는 사람',
          bingsu: '편안한 저카페인 한 잔을 원하는 사람',
          shavedIce: '산뜻하고 흙내음 나는 녹차 애호가',
          kakigori: '강한 카페인을 원하는 사람',
        },
      ],
      note: '핵심은, 호지차가 셋 중 카페인이 가장 적고, 유일하게 볶은 카라멜 같은 풍미를 지녔다는 것. 그래서 두근거림 없이 따뜻하고 편안한 걸 원할 때 호지차 라떼가 손쉬운 선택입니다. 정면으로 비교하고 싶다면 아래 호지차 vs 말차 가이드를 확인하세요.',
    },
    types: {
      title: '호지차의 효능과 사랑받는 이유',
      subtitle: '호지차 라떼를 주문할 다섯 가지 이유',
      items: [
        {
          name: '자연스럽게 낮은 카페인',
          korean: '순하게 · 언제든',
          description: '찻잎을 볶기 때문에 호지차는 말차나 커피보다 카페인이 훨씬 적고, 차 중에서도 가장 낮은 축입니다. 그래서 호지차 라떼는 오후와 저녁, 카페인에 민감한 분, 밤새우고 싶지 않은 분에게 딱 맞는 따뜻한 한 잔입니다.',
          icon: '🌙',
        },
        {
          name: '고소하고 편안한 맛',
          korean: '견과류 · 카라멜 · 부드러움',
          description: '로스팅 덕분에 호지차는 녹차의 쓴맛 없이 따뜻하고 고소한 카라멜 같은 맛을 냅니다. 천천히 음미하고 싶은, 마음이 편안해지는 한 잔이죠. 스팀 밀크와 만나면 고소한 견과류 같은 크리미한 라떼가 되어 첫 모금부터 반하게 됩니다.',
          icon: '☕',
        },
        {
          name: '항산화 성분',
          korean: '녹찻잎에서',
          description: '호지차도 본질은 녹차라, 녹차로 잘 알려진 항산화 성분(카테킨)을 담고 있습니다. 날카로운 풋내가 아니라 고소하고 편안한 풍미로 차의 이로움을 즐길 수 있죠——매일 마셔도 좋은, 기분 좋은 한 잔입니다.',
          icon: '🍃',
        },
        {
          name: '속에 편안함',
          korean: '타닌 적고 순함',
          description: '로스팅 과정이 타닌과 쓴맛을 낮춰줘서, 호지차는 식후에도 마시기 편하기로 유명합니다. 그래서 일본에서는 오래도록 아이부터 어르신까지 즐기는 일상의 차로 사랑받아 왔습니다.',
          icon: '🫖',
        },
        {
          name: '두근거림 없이 잔잔하게',
          korean: '편안하되 크래시 없이',
          description: '낮은 카페인과 은은한 로스팅 풍미의 호지차 라떼는, 커피 같은 자극 대신 잔잔하고 편안한 기운을 줍니다. 쉬고 싶을 때, 하루 후반에 여유로운 한 잔을 즐기고 싶을 때 카페인 크래시 없이 손이 가는 음료입니다.',
          icon: '😌',
        },
      ],
    },
    whyHawaii: {
      title: '와이키키에서 호지차 라떼를 주문해야 하는 이유',
      points: [
        {
          title: '완벽한 저카페인 오후 음료',
          description: '아침 커피는 이미 마셨나요? 그렇다면 호지차가 두 번째 음료로 제격입니다. 자연스럽게 낮은 카페인 덕분에 오후나 저녁에도 따뜻하고 만족스러운 라떼를 즐길 수 있죠. 해변 후, 저녁 식사 후, 밤에 잠 설치기 싫을 때 좋습니다.',
        },
        {
          title: '말차 너머의 일본차',
          description: '말차는 다들 알지만, 호지차는 발견할 가치가 있는 볶은 녹차입니다. 고소하고 견과류 같으며 은은해서 완전히 다른 경험이죠——더 부드럽고, 편안하고, 카페인은 더 적습니다. 말차를 좋아한다면 다음으로 시도할 일본차. 아래 호지차 vs 말차 가이드로 골라보세요.',
        },
        {
          title: '핫이든 아이스든, 해변 바로 옆에서',
          description: '호지차 라떼는 선선한 아침엔 핫으로, 따뜻한 와이키키 오후엔 아이스로 맛있습니다——우유 위 붉은 갈색 차의 모습도 예쁘죠. Kona Coffee Donut? 에서는 와이키키 해변에서 도보 약 5분 거리에서 둘 다 갓 만들어 주문할 수 있습니다.',
        },
        {
          title: '모찌 도넛과 찰떡',
          description: '호지차의 카라멜과 고소한 견과류 향은 따뜻하고 쫄깃한 모찌 도넛과 완벽한 짝입니다. 볶은 차가 단맛을 잡아주며 잠깐의 방문을 편안한 작은 호사로 바꿔주죠——와이키키 오후에 딱 어울리는 조합입니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 호지차 라떼를 맛보는 곳',
      intro: '와이키키 해변 근처에서 볶은 녹차를 맛보고 싶다면, Kona Coffee Donut? 가 시작하기 좋은 곳입니다.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키의 중심, 칼라카우아 애비뉴에 자리한 Kona Coffee Donut? 는 부드럽고 고소한 호지차 라떼를 $8.95에 제공합니다——핫이든 아이스든 갓 만들어 드리죠. 플레이버 음료는 모두 호지차 베이스로도 만들 수 있어 볶은 차 음료를 취향껏 맞춤할 수 있고, 따뜻한 모찌 도넛과도 잘 어울립니다. 와이키키 해변에서 도보 약 5분, 매일 영업하니 편안한 저카페인 한 잔을 가볍게 들르기 좋습니다.',
        highlights: [
          '호지차 라떼 $8.95 — 볶은 녹차, 핫 & 아이스',
          '플레이버 음료를 호지차 베이스로도',
          '갓 만든 모찌 도넛과 완벽한 궁합',
          '매일 영업, 오전 7시~오후 9시 · 와이키키 해변에서 약 5분',
        ],
      },
      cta: '커피 & 티 메뉴 보기',
    },
    howToEat: {
      title: '최고의 호지차 라떼를 위한 팁',
      subtitle: '볶은 녹차를 200% 즐기는 법',
      tips: [
        {
          title: '편안하게 핫, 상쾌하게 아이스',
          description: '따뜻하고 편안한 걸 원할 땐 핫으로——고소한 향이 제대로 살아납니다. 따뜻한 와이키키 오후엔 호지차의 견과류·카라멜 풍미를 그대로 살린 부드럽고 상쾌한 아이스로. 둘 다 맛있으니 날씨 따라 고르세요.',
        },
        {
          title: '오후나 저녁을 위해 남겨두기',
          description: '호지차는 자연스럽게 카페인이 적어 하루 후반에 딱입니다. 아침엔 커피, 오후나 저녁 식사 후엔 호지차 라떼로 바꾸면 밤잠을 방해하지 않는 따뜻한 호사가 됩니다.',
        },
        {
          title: '모찌 도넛과 곁들이기',
          description: '호지차의 볶은 카라멜·견과류 풍미는 달콤한 것과 제격입니다. 쫄깃한 모찌 도넛——초콜릿이나 우베가 인기——과 함께 주문해 고소한 차가 단맛을 잡아주게 하세요. 와이키키의 쉼표를 특별하게 만드는 쉽고 편안한 조합입니다.',
        },
        {
          title: '호지차가 처음? 말차와 나란히 맛보기',
          description: '볶은 녹차가 선명한 초록 녹차와 어떻게 다른지 궁금하다면, 호지차 라떼를 말차 라떼와 나란히 놓고 맛의 차이를 느껴보세요. 많은 손님이 둘을 나눠 마십니다. 호지차는 고소하고 은은하며 저카페인, 말차는 풋풋하고 산뜻하죠.',
        },
      ],
    },
    faq: {
      title: '호지차에 대해 자주 묻는 질문',
      items: [
        {
          question: '호지차는 카페인이 전혀 없나요?',
          answer: '호지차는 카페인이 완전히 없는 건 아니지만 아주 적어서, 차 중에서도 가장 낮은 축입니다. 로스팅 과정에서 카페인의 상당 부분이 날아가기 때문에 호지차 라떼는 커피나 말차보다 훨씬 적죠. 그래서 오후, 저녁, 카페인에 민감한 분에게 좋은 선택이지만 완전한 디카페인은 아닙니다.',
        },
        {
          question: '호지차는 어떤 맛인가요?',
          answer: '호지차는 고소하고 견과류·카라멜 같은 맛에, 부드럽고 은은한 끝맛을 냅니다. 일반 녹차의 쓴맛이나 풋내는 거의 없죠. 이 볶은 풍미는 찻잎을 숯불에 로스팅하는 데서 나옵니다. 스팀 밀크와 만나면 고소한 견과류와 흑설탕 같은 크리미하고 편안한 라떼가 됩니다.',
        },
        {
          question: '호지차는 몸에 좋은가요?',
          answer: '호지차는 본질이 녹차라 항산화 성분(카테킨)을 함유합니다. 로스팅이 타닌과 카페인을 낮춰줘 순하고 속에 편안하죠——일본에서 식후에, 또 모든 연령이 즐겨온 이유 중 하나입니다. 균형 잡힌 식생활의 일부로서, 호지차 라떼는 편안하고 기분 좋은 음료입니다.',
        },
        {
          question: '와이키키에서 호지차 라떼는 어디서 마실 수 있나요?',
          answer: '와이키키의 중심, 칼라카우아 애비뉴의 2142 Kalakaua Ave에 있는 Kona Coffee Donut? 에서 갓 만든 호지차 라떼를 마실 수 있습니다——와이키키 해변에서 도보 약 5분. 호지차 라떼는 $8.95, 핫이든 아이스든 가능하며 갓 만든 모찌 도넛과 완벽하게 어울립니다. 매일 오전 7시~오후 9시 영업합니다.',
        },
        {
          question: '호지차와 말차의 차이는 무엇인가요?',
          answer: '말차는 선명한 초록의 맷돌로 간 녹차 가루로, 풋풋하고 채소 같은 풍미에 보통 수준의 카페인을 지닙니다. 호지차는 볶은 녹차로 붉은 갈색으로 우러나며, 고소하고 카라멜 같은 맛에 카페인은 훨씬 적죠. 호지차는 더 편안하고 순하며, 말차는 더 진하고 산뜻합니다. 아래 호지차 vs 말차 가이드에서 나에게 맞는 걸 골라보세요.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 볶은 녹차 호지차 라떼를 맛보세요',
      text: '2142 Kalakaua Ave의 Kona Coffee Donut? 에 들러 부드럽고 고소한 호지차 라떼($8.95)를 핫이든 아이스든, 따뜻한 모찌 도넛과 함께 즐겨보세요——와이키키 해변에서 단 몇 분 거리입니다.',
      menuButton: '커피 & 티 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '와이키키 호지차 라떼',
    },
  },
  zh: {
    hero: {
      title: '威基基的焙茶拿铁',
      subtitle: '烘焙绿茶、功效与品尝地点（2026指南）',
      updated: '2026年6月更新',
      readTime: '阅读约7分钟',
    },
    definition: {
      title: '什么是焙茶拿铁？',
      text: '<strong>焙茶拿铁</strong>是一款温热顺滑的饮品，用<strong>经炭火烘焙</strong>的日本绿茶——<strong>焙茶（ほうじ茶）</strong>——搅打后注入蒸奶而成。烘焙让茶叶变成<strong>红褐色</strong>，赋予饮品<strong>烘香、坚果、焦糖</strong>般的顺滑风味，几乎没有绿茶常见的青涩或苦味。最棒的是，焙茶<strong>天然低咖啡因</strong>，所以焙茶拿铁是午后、傍晚，或任何想要暖心一杯却不想心悸者的理想之选。在威基基，你可以点一杯现做的——热饮或冰饮——离海滩只有几分钟。',
    },
    history: {
      title: '焙茶如何制成，为何特别',
      subtitle: '从京都的炭火烘焙，到威基基的现做一杯',
      p1: '焙茶最初是普通的日本绿茶——多为<strong>番茶或茎茶（kukicha）</strong>。它的特别之处在于最后一步：把茶叶<strong>用炭火或高温烘焙</strong>，直到变成浓郁的红褐色。这种烘焙做法最早出现在<strong>1920年代的京都</strong>，当时茶商没有丢弃卖剩的茶叶和茎梗，而是拿去烘焙——结果发现了一款温暖、烘香又美味的茶。',
      p2: '烘焙彻底改变了茶叶。青草般的植物气息化作深沉的<strong>烘香、坚果、焦糖</strong>芳香，尖锐的苦味消失，焙茶变得<strong>顺滑而柔和</strong>——纯饮或加奶都易于入口。倒进杯中不是抹茶的鲜绿，而是温暖的<strong>红褐色</strong>，正是这份烘香而抚慰的特质，让它成为绝佳的拿铁基底。',
      p3: '同样重要的是，烘焙<strong>去除了大部分咖啡因</strong>。焙茶是<strong>你能点到的咖啡因最低的茶之一</strong>——在日本，它历来于饭后奉上，也适合孩子和长者饮用。这让焙茶拿铁成为午后或傍晚的理想选择：喝咖啡会睡不着，但你仍想要一杯温暖满足的饮品时，它正合适。',
      p4: '从京都茶屋出发，焙茶跨越了太平洋。拥有深厚日裔渊源、又爱喝茶的夏威夷，自然而然接纳了这份烘香风味，如今你可以在<strong>威基基</strong>海滩旁几步之遥，享用一杯现做的焙茶拿铁。如果你已经爱上抹茶，焙茶就是下一款值得倾心的日本茶——更暖心、更顺滑、咖啡因更低。',
    },
    comparison: {
      title: '焙茶 vs 抹茶 vs 咖啡',
      subtitle: '焙茶拿铁如何相比',
      intro: '焙茶、抹茶和咖啡，是享受咖啡馆饮品的三种截然不同的方式。尤其若你在意咖啡因，来看看焙茶拿铁的位置：',
      headers: {
        feature: '项目',
        bingsu: '焙茶',
        shavedIce: '抹茶',
        kakigori: '咖啡',
      },
      rows: [
        {
          feature: '本质',
          bingsu: '烘焙绿茶（番茶/茎茶）',
          shavedIce: '石磨绿茶粉',
          kakigori: '烘焙咖啡豆',
        },
        {
          feature: '咖啡因',
          bingsu: '低——三者中最低',
          shavedIce: '中等',
          kakigori: '高',
        },
        {
          feature: '口感',
          bingsu: '烘香、坚果、焦糖、顺滑',
          shavedIce: '青草、植物、鲜味',
          kakigori: '苦、烘焙味',
        },
        {
          feature: '颜色',
          bingsu: '温暖的红褐色',
          shavedIce: '鲜艳的绿色',
          kakigori: '深褐色',
        },
        {
          feature: '适合时段',
          bingsu: '午后或傍晚',
          shavedIce: '早晨到中午',
          kakigori: '早晨',
        },
        {
          feature: '适合的人',
          bingsu: '想要暖心低咖啡因一杯的人',
          shavedIce: '喜欢清新泥土味绿茶的人',
          kakigori: '想要强劲咖啡因的人',
        },
      ],
      note: '要点是：焙茶是三者中咖啡因最低的，也是唯一带有烘焙焦糖风味的——所以当你想要温暖抚慰又不想心悸时，焙茶拿铁是轻松之选。想正面对比？请看下方的焙茶 vs 抹茶指南。',
    },
    types: {
      title: '焙茶的功效与人人喜爱的理由',
      subtitle: '点一杯焙茶拿铁的五个理由',
      items: [
        {
          name: '天然低咖啡因',
          korean: '温和 · 随时可饮',
          description: '因为茶叶经过烘焙，焙茶的咖啡因远低于抹茶或咖啡，是所有茶里最低的之一。这让焙茶拿铁成为午后、傍晚、对咖啡因敏感者，以及不想熬夜者的理想暖心一杯。',
          icon: '🌙',
        },
        {
          name: '烘香抚慰的风味',
          korean: '坚果 · 焦糖 · 顺滑',
          description: '烘焙让焙茶带有温暖、坚果、焦糖般的味道，全无绿茶的苦涩。它舒缓而暖心，是那种让你慢慢啜饮的饮品。注入蒸奶后，化作一杯烘香坚果般的顺滑拿铁，一口就爱上。',
          icon: '☕',
        },
        {
          name: '抗氧化成分',
          korean: '源自绿茶叶',
          description: '焙茶本质仍是绿茶，因此含有绿茶著名的抗氧化成分（儿茶素）。你能以烘香抚慰而非尖锐青涩的方式，享受茶的益处——一杯天天都想喝的暖心之选。',
          icon: '🍃',
        },
        {
          name: '对肠胃温和',
          korean: '单宁低、温和',
          description: '烘焙过程降低了单宁和苦味，因此焙茶以温和易饮著称——饭后也能喝。这正是它在日本长期作为老少皆宜的日常茶而广受喜爱的原因。',
          icon: '🫖',
        },
        {
          name: '平静而不心悸',
          korean: '暖心却无骤降',
          description: '凭借低咖啡因与柔和的烘焙风味，一杯焙茶拿铁带来的是平静抚慰的提振，而非咖啡般的刺激。想放松、想在一天后半段享用一份不心悸的小确幸时，就点它。',
          icon: '😌',
        },
      ],
    },
    whyHawaii: {
      title: '为什么要在威基基点一杯焙茶拿铁',
      points: [
        {
          title: '完美的低咖啡因午后饮品',
          description: '早上的咖啡已经喝过？那焙茶就是理想的第二杯。天然低咖啡因意味着你可以在午后或傍晚享用一杯温暖满足的拿铁——海滩后、晚餐后，或任何不想熬夜的时刻都很合适。',
        },
        {
          title: '抹茶之外的日本茶',
          description: '人人都知道抹茶，但焙茶是值得发现的烘焙绿茶。烘香、坚果、柔和，是完全不同的体验——更顺滑、更暖心、咖啡因更低。若你爱抹茶，焙茶就是下一款该试的日本茶。看下方焙茶 vs 抹茶指南来选择。',
        },
        {
          title: '冷热皆宜，就在海滩旁',
          description: '焙茶拿铁在微风的清晨热饮很美味，在温暖的威基基午后冰饮同样出色——红褐色的茶浮在奶上，杯中也很好看。在 Kona Coffee Donut?，你可以现做点两种，距威基基海滩步行约5分钟。',
        },
        {
          title: '为麻糬甜甜圈而生',
          description: '焙茶的焦糖与烘香坚果风味，与温热有嚼劲的麻糬甜甜圈是完美搭配。烘焙茶化解甜腻，把匆匆一停变成暖心的小享受——正是威基基午后该有的组合。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基品尝焙茶拿铁的地方',
      intro: '如果你想在威基基海滩附近品尝烘焙绿茶，Kona Coffee Donut? 是一个很好的起点。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '就在威基基中心地段的卡拉卡瓦大道上，Kona Coffee Donut? 提供顺滑烘香的焙茶拿铁，售价$8.95——冷热皆现做。我们所有风味饮品都可用焙茶做基底，让你自由定制这杯烘焙茶饮，并与温热的麻糬甜甜圈绝配。我们距威基基海滩步行约5分钟，每天营业，随时可来一杯暖心的低咖啡因饮品。',
        highlights: [
          '焙茶拿铁 $8.95——烘焙绿茶，冷热皆有',
          '风味饮品可用焙茶做基底',
          '与现做麻糬甜甜圈完美搭配',
          '每天营业，上午7点至晚上9点·距威基基海滩约5分钟',
        ],
      },
      cta: '查看我们的咖啡与茶饮菜单',
    },
    howToEat: {
      title: '冲出最佳焙茶拿铁的小贴士',
      subtitle: '充分享受你的烘焙绿茶',
      tips: [
        {
          title: '暖心选热，清爽选冰',
          description: '想要温暖抚慰时点热的——烘香的气息更突出。温暖的威基基午后点冰的，保留焙茶所有坚果、焦糖的风味，顺滑又清爽。两种都好喝，看天气来选。',
        },
        {
          title: '留到午后或傍晚',
          description: '因为焙茶天然低咖啡因，最适合一天的后半段。早上喝咖啡，午后或晚餐后换成焙茶拿铁，享受一份不会让你夜里难眠的温暖小确幸。',
        },
        {
          title: '搭配一个麻糬甜甜圈',
          description: '焙茶烘焙的焦糖坚果风味，天生适合配甜食。点它搭一个有嚼劲的麻糬甜甜圈——巧克力或芋头（ube）是人气之选——让烘香的茶平衡甜味。这是让威基基小憩格外特别的轻松暖心组合。',
        },
        {
          title: '初尝焙茶？和抹茶并排试试',
          description: '若你好奇烘焙绿茶与鲜绿那种有何不同，把焙茶拿铁和抹茶拿铁并排点来，尝尝差别。许多客人会两杯分享。焙茶烘香、柔和、低咖啡因；抹茶青草、鲜亮。',
        },
      ],
    },
    faq: {
      title: '关于焙茶的常见问题',
      items: [
        {
          question: '焙茶不含咖啡因吗？',
          answer: '焙茶并非完全不含咖啡因，但含量很低——是所有茶里最低的之一。烘焙过程去除了大部分咖啡因，所以焙茶拿铁远低于咖啡或抹茶。这让它成为午后、傍晚以及对咖啡因敏感者的好选择，但它并非完全脱咖啡因。',
        },
        {
          question: '焙茶是什么味道？',
          answer: '焙茶尝起来烘香、带坚果与焦糖味，尾韵顺滑柔和，几乎没有普通绿茶的苦涩或青草味。这份烘焙风味来自把茶叶用炭火烘焙。注入蒸奶后，化作一杯有点像烘烤坚果和红糖的顺滑抚慰拿铁。',
        },
        {
          question: '焙茶对身体好吗？',
          answer: '焙茶本质是绿茶，因此仍含抗氧化成分（儿茶素）。烘焙降低了单宁和咖啡因，使它温和、对肠胃友好——这也是它在日本历来于饭后、并被各年龄段喜爱的原因之一。作为均衡饮食的一部分，焙茶拿铁是一杯抚慰又愉悦的饮品。',
        },
        {
          question: '在威基基哪里能喝到焙茶拿铁？',
          answer: '你可以在位于威基基中心卡拉卡瓦大道上的 Kona Coffee Donut?（2142 Kalakaua Ave）喝到现做的焙茶拿铁——距威基基海滩步行约5分钟。我们的焙茶拿铁售价$8.95，冷热皆有，与现做麻糬甜甜圈完美搭配。我们每天上午7点至晚上9点营业。',
        },
        {
          question: '焙茶和抹茶有什么区别？',
          answer: '抹茶是鲜绿色的石磨绿茶粉，风味青草而植物，咖啡因中等。焙茶是烘焙绿茶，冲出来呈红褐色，口感烘香焦糖，咖啡因低得多。焙茶更暖心温和，抹茶更浓郁鲜亮。看下方焙茶 vs 抹茶指南，选出最适合你的那一杯。',
        },
      ],
    },
    cta: {
      title: '在威基基品尝烘焙绿茶焙茶拿铁',
      text: '前往 2142 Kalakaua Ave 的 Kona Coffee Donut?，点一杯顺滑烘香的焙茶拿铁（$8.95），冷热皆可，配上温热的麻糬甜甜圈——距威基基海滩仅几分钟。',
      menuButton: '查看咖啡与茶饮菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '威基基的焙茶拿铁',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Hojicha Latte in Waikiki: Roasted Green Tea, Benefits & Where to Try It (2026)',
  description: 'A local guide to the hojicha latte in Waikiki — what roasted green tea is, its benefits, why it\'s naturally low in caffeine, and where to try one fresh near Waikiki Beach.',
  image: 'https://www.konacoffeedonut.com/images/blog/hojicha-latte-waikiki.jpeg',
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
    '@id': 'https://www.konacoffeedonut.com/en/blog/hojicha-latte-waikiki',
  },
  keywords: 'hojicha latte, hojicha benefits, hojicha caffeine, what is hojicha, hojicha near me, roasted green tea latte, hojicha waikiki',
  wordCount: 1500,
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
        text: 'Hojicha is not completely caffeine-free, but it is very low in caffeine — one of the lowest of any tea. The roasting process burns off much of the caffeine, so a hojicha latte has far less than coffee or matcha. That makes it a great choice for the afternoon, the evening, and caffeine-sensitive drinkers, though it is not fully decaf.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does hojicha taste like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hojicha tastes toasty, nutty, and caramel-like, with a smooth, mellow finish and almost none of the bitterness or grassiness of regular green tea. That roasted flavor comes from roasting the leaves over charcoal. Over steamed milk it becomes a creamy, comforting latte that tastes a little like toasted nuts and brown sugar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is hojicha good for you?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hojicha is green tea at heart, so it still contains antioxidants (catechins). The roasting lowers the tannins and caffeine, which makes it gentle and easy on the stomach — one reason it is traditionally enjoyed after meals and by all ages in Japan. As part of a balanced diet, a hojicha latte is a comforting, feel-good drink.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I get a hojicha latte in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can get a fresh hojicha latte at Kona Coffee Donut?, 2142 Kalakaua Ave, right on Kalākaua Avenue in the heart of Waikiki — about a 5-minute walk from Waikiki Beach. Our Hojicha Latte is $8.95, available hot or iced, and pairs perfectly with a fresh mochi donut. We are open daily, 7AM–9PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between hojicha and matcha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Matcha is a bright green, stone-ground green tea powder with a grassy, vegetal flavor and moderate caffeine. Hojicha is a roasted green tea that pours reddish-brown, tastes toasty and caramel-like, and is much lower in caffeine. Hojicha is cozier and gentler; matcha is bolder and brighter.',
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
      name: 'Hojicha Latte in Waikiki',
      item: 'https://www.konacoffeedonut.com/en/blog/hojicha-latte-waikiki',
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

export default function HojichaLatteWaikikiPage() {
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
          src="/images/blog/hojicha-latte-waikiki.jpeg"
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

        {/* History of Hojicha */}
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

        {/* Types — Hojicha Benefits */}
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

        {/* Why Order Hojicha in Waikiki */}
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

        {/* Where to Try Hojicha in Waikiki */}
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

        {/* Tips for the Best Hojicha Latte */}
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
              href={`/${locale}/blog/matcha-vs-hojicha-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Hojicha vs Matcha
            </Link>
            <Link
              href={`/${locale}/menu/kona-coffee`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Coffee & Tea Menu
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
