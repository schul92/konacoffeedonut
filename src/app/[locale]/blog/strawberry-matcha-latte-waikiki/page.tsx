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
      title: 'Strawberry Matcha Latte in Waikiki',
      subtitle: 'The Pink-and-Green Drink Everyone Wants (2026 Guide)',
      updated: 'Updated June 2026',
      readTime: '7 min read',
    },
    definition: {
      title: 'What is a Strawberry Matcha Latte?',
      text: 'A <strong>strawberry matcha latte</strong> is a <strong>layered iced drink</strong>: sweet-tart strawberry purée sits on the bottom, cold milk fills the middle, and a vivid layer of <strong>green matcha</strong> is poured on top. The magic is in the contrast — bright, fruity strawberry against earthy, umami matcha — and in the look. That famous <strong>pink-and-green ombré</strong> is why it has become one of the most photographed drinks of 2026. Served over ice, it is refreshing, lightly sweet, and made for sipping on a warm Waikiki afternoon.',
    },
    history: {
      title: 'The Story of the Strawberry Matcha Latte',
      subtitle: 'From Kyoto Tea Houses to Your Instagram Feed',
      p1: 'Matcha — finely stone-ground green tea — has been part of Japanese tea ceremony for centuries, but its life as a <strong>café drink</strong> is much newer. Over the last two decades, the matcha latte spread from Tokyo and Kyoto to specialty cafés worldwide, turning a ceremonial powder into an everyday iced order. As more people fell in love with its grassy, umami flavor, cafés began experimenting with ways to soften matcha\'s bitterness and make it more approachable.',
      p2: 'The <strong>strawberry matcha latte</strong> was born from that experimentation — and it exploded thanks to social media. The drink\'s naturally layered look, with a pink fruit base bleeding into a green matcha top, was tailor-made for <strong>TikTok and Instagram</strong>. A single photo tells the whole story, and the slow-motion pour clips went viral. What started as a niche café special quickly became one of the most-requested drinks of the year.',
      p3: 'Beyond the aesthetics, strawberry and matcha simply <strong>work together</strong>. Strawberry brings a bright, sweet-tart juiciness; matcha brings a deep, slightly bitter, umami earthiness. One lifts the other — the fruit keeps the matcha from feeling heavy, and the matcha keeps the strawberry from feeling like candy. It is the same balance that makes salted caramel or chili-chocolate so satisfying: two opposites that complete each other.',
      p4: 'It was only a matter of time before the trend reached <strong>Waikiki</strong>. With year-round sunshine, a beach-going crowd, and visitors from Japan, Korea, and across Asia who already know and love matcha, Honolulu is the perfect home for a photogenic iced strawberry matcha. Today you can order one just minutes from Waikiki Beach — pink, green, ice-cold, and ready for its close-up.',
    },
    comparison: {
      title: 'Strawberry Matcha vs Other Matcha Drinks',
      subtitle: 'How Does the Pink-and-Green One Compare?',
      intro: 'A strawberry matcha latte, a classic matcha latte, and a tropical fruit matcha all start with the same real green tea — but they look, taste, and photograph very differently. Here is how they stack up:',
      headers: {
        feature: 'Feature',
        bingsu: 'Strawberry Matcha',
        shavedIce: 'Classic Matcha',
        kakigori: 'Tropical (Mango/Guava)',
      },
      rows: [
        {
          feature: 'Flavor',
          bingsu: 'Sweet-tart strawberry + earthy matcha',
          shavedIce: 'Pure earthy umami',
          kakigori: 'Tropical sweet + earthy matcha',
        },
        {
          feature: 'Look',
          bingsu: 'Pink + green layered ombré',
          shavedIce: 'Solid vivid green',
          kakigori: 'Fruit-colored + green',
        },
        {
          feature: 'Sweetness',
          bingsu: 'Medium, fruity',
          shavedIce: 'Low — matcha-forward',
          kakigori: 'Medium-sweet, tropical',
        },
        {
          feature: 'Photogenic',
          bingsu: 'Extremely — the star of the menu',
          shavedIce: 'Clean and classic',
          kakigori: 'Colorful and bright',
        },
        {
          feature: 'Best For',
          bingsu: 'Photos + a fruity-earthy combo',
          shavedIce: 'Matcha purists',
          kakigori: 'Fruit lovers',
        },
        {
          feature: 'Price',
          bingsu: '$10.95',
          shavedIce: '$8.95',
          kakigori: '$8.95',
        },
      ],
      note: 'The key difference is the layered strawberry base. It turns a single-note matcha latte into a sweet-tart-meets-earthy drink — and gives you that pink-and-green look no other matcha order can match.',
    },
    types: {
      title: 'Matcha Fruit Lattes to Try in Waikiki',
      subtitle: 'Start With the Strawberry — Then Explore the Island Flavors',
      items: [
        {
          name: 'Strawberry Matcha',
          korean: '$10.95 · the star',
          description: 'The viral pink-and-green layered latte. Sweet-tart strawberry purée on the bottom, cold milk in the middle, and a bright cap of real ceremonial-style matcha on top. It is the most photogenic drink we make and the one people come in asking for by name. Served iced.',
          icon: '🍓',
        },
        {
          name: 'Mango Matcha',
          korean: '$8.95 · tropical',
          description: 'Golden Hawaiian-style mango meets earthy matcha for a sunset-colored layered latte. Sweeter and more tropical than the strawberry, with the same satisfying fruit-and-matcha balance. A favorite for anyone who loves island fruit.',
          icon: '🥭',
        },
        {
          name: 'Guava Matcha',
          korean: '$8.95 · island favorite',
          description: 'Guava is a true Hawaiian classic, and its floral-sweet flavor pairs beautifully with grassy matcha. The pink-coral fruit layer under bright green makes this one nearly as photogenic as the strawberry — and unmistakably local.',
          icon: '🍈',
        },
        {
          name: 'Lilikoi Matcha',
          korean: '$8.95 · passion fruit',
          description: 'Lilikoi (Hawaiian passion fruit) brings a tangy, tropical punch that cuts through matcha\'s richness. Bright, a little tart, and refreshing — this is the order for anyone who likes their fruit lattes on the zingy side.',
          icon: '🌺',
        },
        {
          name: 'Coconut / Banana Matcha',
          korean: '$8.95 · creamy',
          description: 'For a softer, creamier take, coconut or banana smooths matcha into a mellow, dessert-like latte. Less tart than the berry and citrus options, with a rich tropical finish that pairs perfectly with a mochi donut.',
          icon: '🥥',
        },
      ],
    },
    whyHawaii: {
      title: 'Why Get a Strawberry Matcha in Waikiki',
      points: [
        {
          title: 'The Most Photogenic Drink for the Beach',
          description: 'Few drinks photograph as well as a layered strawberry matcha against Waikiki\'s blue water and palm trees. The pink-and-green ombré pops in any light, and it is practically made for a beach-day photo. If you want one shot that says "Hawaii vacation," this is it.',
        },
        {
          title: 'Real Matcha, Real Strawberry',
          description: 'This is not a syrupy imitation. We use genuine ceremonial-style matcha and a real strawberry purée, so you get authentic grassy, umami green tea balanced against bright, juicy fruit — not just sugar and color. The flavor lives up to the photo.',
        },
        {
          title: 'The Layered Pink-Green Look',
          description: 'The drink arrives in its signature two-tone layers, so you get the full effect before you even stir it. Photograph it layered, then mix it together for the perfect sip. It is the rare order that is as fun to look at as it is to drink.',
        },
        {
          title: 'Pair It With a Mochi Donut — 5 Minutes From the Sand',
          description: 'A strawberry matcha is even better next to a strawberry or matcha mochi donut, and we are only about a 5-minute walk from Waikiki Beach on Kalākaua Avenue. Grab your drink, grab a donut, and you are back on the sand in minutes.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Get a Strawberry Matcha in Waikiki',
      intro: 'If you are craving that pink-and-green latte in Waikiki, Kona Coffee Donut? is your spot.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Right on Kalākaua Avenue in the heart of Waikiki, Kona Coffee Donut? makes our layered Strawberry Matcha ($10.95) plus eight more matcha and hojicha lattes — including mango, guava, lilikoi, coconut, banana, azuki, and classic matcha. We also pour 100% Kona coffee and serve fresh mochi donuts, and we are about a 5-minute walk from Waikiki Beach. Open daily, 7AM–9PM.',
        highlights: [
          'Layered Strawberry Matcha ($10.95) — the pink-and-green star',
          '8 more matcha & hojicha lattes to choose from',
          '100% Kona coffee and fresh mochi donuts',
          'About 5 minutes from Waikiki Beach — open daily 7AM–9PM',
        ],
      },
      cta: 'See Our Matcha Menu',
    },
    howToEat: {
      title: 'How to Drink a Strawberry Matcha',
      subtitle: 'Get the Photo, Then Get the Perfect Sip',
      tips: [
        {
          title: 'Photo It Layered First',
          description: 'The drink arrives with its signature pink strawberry base and green matcha top still separated. That is the money shot — take your photo before you touch the straw, ideally with the ocean or a palm tree in the background.',
        },
        {
          title: 'Then Stir to Blend',
          description: 'Once you have the photo, give it a good stir. Mixing the strawberry purée up through the milk and matcha is what creates the balanced sweet-tart-meets-earthy flavor. Unmixed, you taste the layers one at a time; stirred, they come together.',
        },
        {
          title: 'Get It Iced',
          description: 'Strawberry matcha is meant to be iced. The cold keeps the fruit bright and the matcha crisp, and it is exactly what you want on a warm Waikiki afternoon. Sip it slowly so the layers stay distinct a little longer.',
        },
        {
          title: 'Pair It With a Strawberry Mochi Donut',
          description: 'Double down on the strawberry by ordering a strawberry mochi donut alongside — or a matcha one to echo the green. The chewy donut and the fruity-earthy latte make a perfect Waikiki treat.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What is a strawberry matcha latte?',
          answer: 'A strawberry matcha latte is a layered iced drink made with sweet-tart strawberry purée on the bottom, milk in the middle, and real green matcha poured on top. The result is a pink-and-green ombré drink that balances fruity strawberry against earthy, umami matcha. It is served over ice and is one of the most photographed café drinks of 2026.',
        },
        {
          question: 'How much is the strawberry matcha in Waikiki?',
          answer: 'At Kona Coffee Donut? on Kalākaua Avenue, the Strawberry Matcha is $10.95. Our other matcha fruit lattes — mango, guava, lilikoi, coconut, and banana — are $8.95 each, as is the classic matcha latte. We are about a 5-minute walk from Waikiki Beach and open daily from 7AM to 9PM.',
        },
        {
          question: 'Is strawberry matcha sweet?',
          answer: 'It is lightly to medium sweet — fruitier than a plain matcha latte but not as sugary as a candy drink. The strawberry purée adds a sweet-tart juiciness, while the matcha keeps it grounded with an earthy, slightly bitter edge. The two balance each other, so it tastes refreshing rather than cloying.',
        },
        {
          question: 'Does strawberry matcha have caffeine?',
          answer: 'Yes. Matcha is made from real green tea, so a strawberry matcha latte contains caffeine — typically around 60–70mg per serving, similar to a cup of brewed green tea and less than a standard coffee. It gives a gentle, steady lift without the jolt of espresso.',
        },
        {
          question: 'Where can I get a strawberry matcha near Waikiki Beach?',
          answer: 'Kona Coffee Donut? at 2142 Kalakaua Ave in Waikiki makes a layered Strawberry Matcha ($10.95) along with eight other matcha and hojicha lattes, 100% Kona coffee, and fresh mochi donuts. It is about a 5-minute walk from Waikiki Beach and open daily, 7AM–9PM.',
        },
      ],
    },
    cta: {
      title: 'Try the Strawberry Matcha in Waikiki',
      text: 'Visit Kona Coffee Donut? at 2142 Kalakaua Ave and order the pink-and-green Strawberry Matcha — then pair it with a fresh mochi donut, just minutes from the beach.',
      menuButton: 'See Our Matcha Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'Strawberry Matcha Latte in Waikiki',
    },
  },
  ja: {
    hero: {
      title: 'ワイキキのストロベリー抹茶ラテ',
      subtitle: 'みんなが欲しがるピンク＆グリーンの一杯（2026年ガイド）',
      updated: '2026年6月更新',
      readTime: '7分で読める',
    },
    definition: {
      title: 'ストロベリー抹茶ラテとは？',
      text: '<strong>ストロベリー抹茶ラテ</strong>は<strong>層になったアイスドリンク</strong>です。底に甘酸っぱいストロベリーピューレ、真ん中に冷たいミルク、その上に鮮やかな<strong>グリーンの抹茶</strong>を注ぎます。魅力はそのコントラスト — フルーティーなイチゴと、深いうま味のある抹茶 — そして見た目です。あの有名な<strong>ピンク＆グリーンのグラデーション</strong>こそ、2026年に最も写真に撮られたドリンクの一つになった理由。氷の上で提供され、爽やかでほんのり甘く、暖かいワイキキの午後にぴったりの一杯です。',
    },
    history: {
      title: 'ストロベリー抹茶ラテの物語',
      subtitle: '京都の茶室からあなたのインスタグラムへ',
      p1: '抹茶 — 石臼で細かく挽いた緑茶 — は何世紀もの間、日本の茶道の一部でした。しかし<strong>カフェドリンク</strong>としての歴史はずっと新しいものです。この20年ほどで、抹茶ラテは東京や京都から世界中のスペシャルティカフェへと広がり、儀式の粉末を日常のアイスメニューへと変えました。その草のようなうま味の風味を愛する人が増えるにつれ、カフェは抹茶の苦みを和らげ、より親しみやすくする方法を試し始めました。',
      p2: '<strong>ストロベリー抹茶ラテ</strong>はその試行錯誤から生まれ、SNSのおかげで爆発的に広まりました。ピンクのフルーツベースがグリーンの抹茶に溶け込む、自然に層をなすその見た目は、<strong>TikTokやInstagram</strong>のために作られたようなもの。一枚の写真がすべてを物語り、スローモーションで注ぐ動画はバズりました。ニッチなカフェの限定メニューだったものが、瞬く間に今年最も注文されるドリンクの一つになったのです。',
      p3: '見た目だけでなく、イチゴと抹茶は単純に<strong>相性が良い</strong>のです。イチゴは明るく甘酸っぱいジューシーさを、抹茶は深く、ほろ苦く、うま味のある土の香りをもたらします。一方が他方を引き立て — フルーツが抹茶を重く感じさせず、抹茶がイチゴをただのお菓子に感じさせません。塩キャラメルやチリチョコレートを満足させるのと同じバランス。正反対の二つが互いを完成させるのです。',
      p4: 'このトレンドが<strong>ワイキキ</strong>に届くのは時間の問題でした。一年中続く太陽、ビーチに集まる人々、そして日本・韓国・アジア各国からの、すでに抹茶を知り愛する旅行者たち。ホノルルは写真映えするアイスストロベリー抹茶にとって完璧な舞台です。今では、ワイキキビーチからわずか数分で注文できます — ピンク、グリーン、キンキンに冷えて、撮影の準備は万端です。',
    },
    comparison: {
      title: 'ストロベリー抹茶 vs ほかの抹茶ドリンク',
      subtitle: 'ピンク＆グリーンの一杯は何が違う？',
      intro: 'ストロベリー抹茶ラテ、定番の抹茶ラテ、トロピカルフルーツ抹茶は、すべて同じ本物の緑茶から始まります。でも見た目も、味も、写真映えも大きく異なります。比べてみましょう：',
      headers: {
        feature: '特徴',
        bingsu: 'ストロベリー抹茶',
        shavedIce: '定番の抹茶',
        kakigori: 'トロピカル（マンゴー/グァバ）',
      },
      rows: [
        {
          feature: '味わい',
          bingsu: '甘酸っぱいイチゴ＋うま味の抹茶',
          shavedIce: '純粋なうま味の土の香り',
          kakigori: 'トロピカルな甘さ＋抹茶',
        },
        {
          feature: '見た目',
          bingsu: 'ピンク＋グリーンの層',
          shavedIce: '鮮やかな単色グリーン',
          kakigori: 'フルーツの色＋グリーン',
        },
        {
          feature: '甘さ',
          bingsu: '中程度、フルーティー',
          shavedIce: '控えめ — 抹茶が主役',
          kakigori: 'ほどよく甘い、トロピカル',
        },
        {
          feature: '写真映え',
          bingsu: '抜群 — メニューの主役',
          shavedIce: 'すっきりと定番',
          kakigori: 'カラフルで鮮やか',
        },
        {
          feature: 'こんな人に',
          bingsu: '写真＋フルーティーと抹茶の両方',
          shavedIce: '抹茶純粋派',
          kakigori: 'フルーツ好き',
        },
        {
          feature: '価格',
          bingsu: '$10.95',
          shavedIce: '$8.95',
          kakigori: '$8.95',
        },
      ],
      note: '最大の違いは層になったストロベリーベース。単調になりがちな抹茶ラテを、甘酸っぱさとうま味が出会う一杯に変え、ほかのどの抹茶メニューにもない、あのピンク＆グリーンの見た目を生み出します。',
    },
    types: {
      title: 'ワイキキで試したい抹茶フルーツラテ',
      subtitle: 'まずはストロベリーから — そして島のフレーバーへ',
      items: [
        {
          name: 'ストロベリー抹茶',
          korean: '$10.95・主役',
          description: 'バズったピンク＆グリーンの層ラテ。底に甘酸っぱいストロベリーピューレ、真ん中に冷たいミルク、上に本格的な抹茶を鮮やかに。当店で最も写真映えする一杯で、名指しで注文される人気者。アイスで提供します。',
          icon: '🍓',
        },
        {
          name: 'マンゴー抹茶',
          korean: '$8.95・トロピカル',
          description: '黄金色のハワイ風マンゴーと抹茶が出会う、サンセットカラーの層ラテ。ストロベリーより甘くトロピカルで、フルーツと抹茶の満足感あるバランスは同じ。島のフルーツが好きな方に人気です。',
          icon: '🥭',
        },
        {
          name: 'グァバ抹茶',
          korean: '$8.95・島の定番',
          description: 'グァバはまさにハワイの定番。その花のような甘さが、草のような抹茶と美しく調和します。グリーンの下のピンクコーラルのフルーツ層は、ストロベリーに迫る写真映え — そして紛れもなくローカルな一杯。',
          icon: '🍈',
        },
        {
          name: 'リリコイ抹茶',
          korean: '$8.95・パッションフルーツ',
          description: 'リリコイ（ハワイのパッションフルーツ）が、抹茶のコクを切る爽やかでトロピカルなパンチを。明るく、少し酸っぱく、リフレッシュできる — フルーツラテはキリッとした酸味が好き、という方にぴったりです。',
          icon: '🌺',
        },
        {
          name: 'ココナッツ / バナナ抹茶',
          korean: '$8.95・クリーミー',
          description: 'よりまろやかでクリーミーな一杯なら、ココナッツやバナナが抹茶を穏やかでデザートのようなラテに。ベリーや柑橘より酸味が控えめで、リッチなトロピカルの後味はモチドーナツと相性抜群です。',
          icon: '🥥',
        },
      ],
    },
    whyHawaii: {
      title: 'ワイキキでストロベリー抹茶を飲むべき理由',
      points: [
        {
          title: 'ビーチで最も写真映えするドリンク',
          description: 'ワイキキの青い海とヤシの木を背景に、層になったストロベリー抹茶ほど美しく撮れるドリンクはそうありません。ピンク＆グリーンのグラデーションはどんな光でも映え、ビーチデイの一枚にうってつけ。「ハワイ旅行」を物語る一枚が欲しいなら、これです。',
        },
        {
          title: '本物の抹茶、本物のイチゴ',
          description: 'シロップだけの偽物ではありません。本格的な抹茶と本物のストロベリーピューレを使用しているので、草のようなうま味のある緑茶と、明るくジューシーなフルーツの本物のバランスが味わえます — 砂糖と色だけではありません。味は写真に負けません。',
        },
        {
          title: '層になったピンク＆グリーンの見た目',
          description: '象徴的な二層のまま届くので、混ぜる前に最高の見た目を楽しめます。まず層のまま撮影し、それからかき混ぜて完璧な一口に。見て楽しく、飲んで楽しい、めずらしい一杯です。',
        },
        {
          title: 'モチドーナツと一緒に — 砂浜から5分',
          description: 'ストロベリー抹茶は、ストロベリーや抹茶のモチドーナツと一緒ならさらに格別。カラカウア通りの当店は、ワイキキビーチから徒歩約5分。ドリンクとドーナツを手に、数分で砂浜に戻れます。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキでストロベリー抹茶を買うなら',
      intro: 'ワイキキであのピンク＆グリーンのラテが飲みたいなら、Kona Coffee Donut? へ。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心、カラカウア通り沿いのKona Coffee Donut? では、層になったストロベリー抹茶（$10.95）に加え、マンゴー、グァバ、リリコイ、ココナッツ、バナナ、あずき、定番抹茶など、さらに8種類の抹茶・ほうじ茶ラテをご用意。100%コナコーヒーや作りたてのモチドーナツも提供し、ワイキキビーチから徒歩約5分です。毎日7時〜21時営業。',
        highlights: [
          '層になったストロベリー抹茶（$10.95）— ピンク＆グリーンの主役',
          'さらに8種類の抹茶・ほうじ茶ラテから選べる',
          '100%コナコーヒーと作りたてモチドーナツ',
          'ワイキキビーチから約5分 — 毎日7時〜21時営業',
        ],
      },
      cta: '抹茶メニューを見る',
    },
    howToEat: {
      title: 'ストロベリー抹茶の飲み方',
      subtitle: 'まず写真を、それから完璧な一口を',
      tips: [
        {
          title: 'まず層のまま撮影',
          description: '象徴的なピンクのストロベリーベースとグリーンの抹茶トップが分かれた状態で届きます。それが決定的な一枚。ストローに触れる前に、できれば海やヤシの木を背景に撮影しましょう。',
        },
        {
          title: 'それからかき混ぜて',
          description: '写真を撮ったら、しっかりかき混ぜて。ストロベリーピューレをミルクと抹茶に混ぜ込むことで、甘酸っぱさとうま味が出会うバランスの取れた味が生まれます。混ぜないと層を一つずつ、混ぜれば一体となって味わえます。',
        },
        {
          title: 'アイスで',
          description: 'ストロベリー抹茶はアイスで楽しむもの。冷たさがフルーツを明るく、抹茶をキリッと保ち、暖かいワイキキの午後にまさにぴったり。層がもう少し長く分かれているよう、ゆっくり飲みましょう。',
        },
        {
          title: 'ストロベリーモチドーナツと一緒に',
          description: 'ストロベリーモチドーナツを一緒に頼んでイチゴを重ねるも良し、抹茶のドーナツでグリーンを響かせるも良し。もちもちのドーナツとフルーティーで抹茶のラテは、最高のワイキキのおやつです。',
        },
      ],
    },
    faq: {
      title: 'よくある質問',
      items: [
        {
          question: 'ストロベリー抹茶ラテとは？',
          answer: 'ストロベリー抹茶ラテは、底に甘酸っぱいストロベリーピューレ、真ん中にミルク、その上に本物の抹茶を注いだ層になったアイスドリンクです。フルーティーなイチゴとうま味のある抹茶のバランスが取れた、ピンク＆グリーンのグラデーションが特徴。氷の上で提供され、2026年最も写真に撮られたカフェドリンクの一つです。',
        },
        {
          question: 'ワイキキのストロベリー抹茶はいくら？',
          answer: 'カラカウア通りのKona Coffee Donut? では、ストロベリー抹茶は$10.95です。マンゴー、グァバ、リリコイ、ココナッツ、バナナなど、ほかの抹茶フルーツラテは各$8.95、定番の抹茶ラテも同様です。ワイキキビーチから徒歩約5分、毎日7時〜21時営業です。',
        },
        {
          question: 'ストロベリー抹茶は甘い？',
          answer: 'ほんのり〜ほどよい甘さ — プレーンな抹茶ラテよりフルーティーですが、お菓子ほど甘くはありません。ストロベリーピューレが甘酸っぱいジューシーさを加え、抹茶が土のようなほろ苦さで引き締めます。二つが互いを引き立て合うので、くどさはなく爽やかな味わいです。',
        },
        {
          question: 'ストロベリー抹茶にカフェインは？',
          answer: 'はい。抹茶は本物の緑茶から作られるので、ストロベリー抹茶ラテにはカフェインが含まれます — 通常1杯あたり約60〜70mgで、淹れた緑茶ほどで、標準的なコーヒーより少なめ。エスプレッソのような刺激なしに、穏やかで持続的な活力を与えてくれます。',
        },
        {
          question: 'ワイキキビーチ近くでストロベリー抹茶が飲める場所は？',
          answer: 'ワイキキの2142 Kalakaua AveにあるKona Coffee Donut? では、層になったストロベリー抹茶（$10.95）に加え、ほか8種類の抹茶・ほうじ茶ラテ、100%コナコーヒー、作りたてモチドーナツをご用意。ワイキキビーチから徒歩約5分、毎日7時〜21時営業です。',
        },
      ],
    },
    cta: {
      title: 'ワイキキでストロベリー抹茶を',
      text: '2142 Kalakaua AveのKona Coffee Donut? で、ピンク＆グリーンのストロベリー抹茶を — そしてビーチからわずか数分、作りたてのモチドーナツと一緒にどうぞ。',
      menuButton: '抹茶メニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'ストロベリー抹茶ラテ',
    },
  },
  ko: {
    hero: {
      title: '와이키키 딸기 말차 라떼',
      subtitle: '모두가 찾는 핑크 앤 그린 한 잔 (2026 가이드)',
      updated: '2026년 6월 업데이트',
      readTime: '7분 소요',
    },
    definition: {
      title: '딸기 말차 라떼란?',
      text: '<strong>딸기 말차 라떼</strong>는 <strong>층층이 쌓인 아이스 음료</strong>입니다. 맨 아래에 새콤달콤한 딸기 퓌레, 중간에 차가운 우유, 그 위에 선명한 <strong>초록빛 말차</strong>를 부어 완성합니다. 매력은 바로 그 대비 — 상큼하고 과일 향 가득한 딸기와, 깊고 감칠맛 나는 말차 — 그리고 비주얼에 있습니다. 그 유명한 <strong>핑크 앤 그린 그라데이션</strong>이야말로 2026년 가장 많이 찍힌 음료 중 하나가 된 이유죠. 얼음 위에 제공되며, 상쾌하고 은은하게 달콤해 따뜻한 와이키키 오후에 딱 맞는 한 잔입니다.',
    },
    history: {
      title: '딸기 말차 라떼 이야기',
      subtitle: '교토 찻집에서 당신의 인스타그램까지',
      p1: '말차 — 맷돌로 곱게 간 녹차 — 는 수 세기 동안 일본 다도의 일부였지만, <strong>카페 음료</strong>로서의 역사는 훨씬 짧습니다. 지난 20여 년간 말차 라떼는 도쿄와 교토에서 전 세계 스페셜티 카페로 퍼져나가며, 의례용 가루를 일상의 아이스 메뉴로 바꿔놓았습니다. 풀 향 가득한 감칠맛에 빠지는 사람이 늘면서, 카페들은 말차의 쓴맛을 부드럽게 하고 더 친근하게 만드는 방법을 실험하기 시작했습니다.',
      p2: '<strong>딸기 말차 라떼</strong>는 바로 그 실험에서 탄생했고, SNS 덕분에 폭발적으로 퍼졌습니다. 핑크빛 과일 베이스가 초록 말차로 번지는 자연스러운 층의 비주얼은 그야말로 <strong>틱톡과 인스타그램</strong>을 위해 만들어진 듯했죠. 사진 한 장이 모든 것을 말해주고, 슬로우 모션으로 붓는 영상은 바이럴이 되었습니다. 틈새 카페의 한정 메뉴로 시작한 것이 순식간에 올해 가장 많이 주문되는 음료 중 하나가 된 것입니다.',
      p3: '비주얼을 넘어, 딸기와 말차는 그저 <strong>잘 어울립니다</strong>. 딸기는 밝고 새콤달콤한 과즙을, 말차는 깊고 살짝 쌉싸름한 흙내음 감칠맛을 더합니다. 하나가 다른 하나를 살려주죠 — 과일은 말차가 무겁게 느껴지지 않게 하고, 말차는 딸기가 그저 사탕처럼 느껴지지 않게 합니다. 솔티드 캐러멜이나 칠리 초콜릿을 만족스럽게 만드는 바로 그 균형. 정반대의 둘이 서로를 완성합니다.',
      p4: '이 트렌드가 <strong>와이키키</strong>에 닿는 건 시간문제였습니다. 일 년 내내 쏟아지는 햇살, 해변을 즐기는 사람들, 그리고 이미 말차를 알고 사랑하는 일본·한국·아시아 각지의 여행객들. 호놀룰루는 사진 잘 받는 아이스 딸기 말차에게 완벽한 무대입니다. 이제 와이키키 비치에서 단 몇 분 거리에서 한 잔 주문할 수 있습니다 — 핑크, 그린, 시원하게 얼음 가득, 촬영 준비 완료입니다.',
    },
    comparison: {
      title: '딸기 말차 vs 다른 말차 음료',
      subtitle: '핑크 앤 그린 한 잔은 무엇이 다를까?',
      intro: '딸기 말차 라떼, 클래식 말차 라떼, 열대 과일 말차는 모두 같은 진짜 녹차에서 출발합니다. 하지만 비주얼도, 맛도, 사진발도 크게 다르죠. 비교해 봅시다:',
      headers: {
        feature: '특징',
        bingsu: '딸기 말차',
        shavedIce: '클래식 말차',
        kakigori: '열대 (망고/구아바)',
      },
      rows: [
        {
          feature: '맛',
          bingsu: '새콤달콤 딸기 + 흙내음 말차',
          shavedIce: '순수한 감칠맛의 흙내음',
          kakigori: '열대의 단맛 + 말차',
        },
        {
          feature: '비주얼',
          bingsu: '핑크 + 그린 층 그라데이션',
          shavedIce: '선명한 단색 그린',
          kakigori: '과일 색 + 그린',
        },
        {
          feature: '단맛',
          bingsu: '중간, 과일 향',
          shavedIce: '약함 — 말차 중심',
          kakigori: '적당히 달콤, 열대',
        },
        {
          feature: '사진발',
          bingsu: '최고 — 메뉴의 주인공',
          shavedIce: '깔끔하고 클래식',
          kakigori: '화려하고 밝음',
        },
        {
          feature: '추천 대상',
          bingsu: '사진 + 과일과 말차 둘 다',
          shavedIce: '말차 순수파',
          kakigori: '과일 애호가',
        },
        {
          feature: '가격',
          bingsu: '$10.95',
          shavedIce: '$8.95',
          kakigori: '$8.95',
        },
      ],
      note: '가장 큰 차이는 층층이 쌓인 딸기 베이스입니다. 단조로울 수 있는 말차 라떼를 새콤달콤함과 감칠맛이 만나는 한 잔으로 바꾸고, 다른 어떤 말차 메뉴도 따라올 수 없는 핑크 앤 그린 비주얼을 선사합니다.',
    },
    types: {
      title: '와이키키에서 맛볼 말차 과일 라떼',
      subtitle: '먼저 딸기부터 — 그다음 섬의 풍미로',
      items: [
        {
          name: '딸기 말차',
          korean: '$10.95 · 주인공',
          description: '바이럴 된 핑크 앤 그린 층 라떼. 맨 아래 새콤달콤한 딸기 퓌레, 중간에 차가운 우유, 위에 진짜 격식 있는 말차를 선명하게 올립니다. 저희가 만드는 가장 사진발 좋은 한 잔이자, 이름 대고 찾는 인기 메뉴. 아이스로 제공합니다.',
          icon: '🍓',
        },
        {
          name: '망고 말차',
          korean: '$8.95 · 열대',
          description: '황금빛 하와이안 망고와 흙내음 말차가 만나는 선셋 컬러 층 라떼. 딸기보다 달콤하고 열대적이지만, 과일과 말차의 만족스러운 균형은 그대로. 섬 과일을 좋아하는 분께 인기입니다.',
          icon: '🥭',
        },
        {
          name: '구아바 말차',
          korean: '$8.95 · 섬의 인기 메뉴',
          description: '구아바는 진짜 하와이의 클래식. 그 꽃향 단맛이 풀 향 말차와 아름답게 어우러집니다. 그린 아래 핑크 코랄빛 과일 층은 딸기에 버금가는 사진발 — 그리고 누가 봐도 로컬한 한 잔이죠.',
          icon: '🍈',
        },
        {
          name: '릴리코이 말차',
          korean: '$8.95 · 패션프루트',
          description: '릴리코이(하와이 패션프루트)가 말차의 진함을 가르는 톡 쏘는 열대의 펀치를 더합니다. 밝고, 살짝 새콤하고, 상쾌한 — 과일 라떼는 톡 쏘는 산미가 좋다는 분께 딱 맞는 주문입니다.',
          icon: '🌺',
        },
        {
          name: '코코넛 / 바나나 말차',
          korean: '$8.95 · 크리미',
          description: '더 부드럽고 크리미한 한 잔이라면, 코코넛이나 바나나가 말차를 은은하고 디저트 같은 라떼로 만들어줍니다. 베리나 시트러스보다 산미가 적고, 진한 열대 여운이 모찌 도넛과 환상의 궁합입니다.',
          icon: '🥥',
        },
      ],
    },
    whyHawaii: {
      title: '와이키키에서 딸기 말차를 마셔야 하는 이유',
      points: [
        {
          title: '해변에서 가장 사진발 좋은 음료',
          description: '와이키키의 푸른 바다와 야자수를 배경으로, 층층이 쌓인 딸기 말차만큼 잘 나오는 음료는 드뭅니다. 핑크 앤 그린 그라데이션은 어떤 빛에서도 돋보이고, 해변 인생샷에 그야말로 안성맞춤. "하와이 여행"을 말해주는 한 컷을 원한다면, 바로 이것입니다.',
        },
        {
          title: '진짜 말차, 진짜 딸기',
          description: '시럽뿐인 가짜가 아닙니다. 진짜 격식 있는 말차와 진짜 딸기 퓌레를 사용하기에, 풀 향 감칠맛 나는 녹차와 밝고 과즙 가득한 과일의 진짜 균형을 느낄 수 있습니다 — 설탕과 색소뿐이 아니죠. 맛이 사진에 뒤지지 않습니다.',
        },
        {
          title: '층층이 쌓인 핑크 앤 그린 비주얼',
          description: '상징적인 투톤 층 그대로 나오기 때문에, 젓기 전에 완벽한 비주얼을 즐길 수 있습니다. 먼저 층진 채로 찍고, 그다음 섞어서 완벽한 한 모금을. 보는 재미와 마시는 재미를 다 주는, 흔치 않은 한 잔입니다.',
        },
        {
          title: '모찌 도넛과 함께 — 모래사장에서 5분',
          description: '딸기 말차는 딸기나 말차 모찌 도넛 곁에서 더욱 맛있습니다. 칼라카우아 애비뉴의 저희 매장은 와이키키 비치에서 도보 약 5분. 음료 한 잔, 도넛 하나 들고 몇 분 만에 모래사장으로 돌아갈 수 있습니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 딸기 말차 사는 곳',
      intro: '와이키키에서 그 핑크 앤 그린 라떼가 당긴다면, Kona Coffee Donut? 으로 오세요.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키의 중심, 칼라카우아 애비뉴에 자리한 Kona Coffee Donut? 에서는 층층이 쌓인 딸기 말차($10.95)에 더해 망고, 구아바, 릴리코이, 코코넛, 바나나, 아즈키, 클래식 말차까지 8가지 말차·호지차 라떼를 준비했습니다. 100% 코나 커피와 갓 만든 모찌 도넛도 제공하며, 와이키키 비치에서 도보 약 5분 거리입니다. 매일 오전 7시–오후 9시 영업.',
        highlights: [
          '층층이 쌓인 딸기 말차($10.95) — 핑크 앤 그린 주인공',
          '8가지 말차·호지차 라떼 중에서 선택',
          '100% 코나 커피와 갓 만든 모찌 도넛',
          '와이키키 비치에서 약 5분 — 매일 오전 7시–오후 9시 영업',
        ],
      },
      cta: '말차 메뉴 보기',
    },
    howToEat: {
      title: '딸기 말차 마시는 법',
      subtitle: '사진 먼저, 그다음 완벽한 한 모금',
      tips: [
        {
          title: '먼저 층진 채로 찍기',
          description: '상징적인 핑크 딸기 베이스와 그린 말차 탑이 아직 분리된 상태로 나옵니다. 그게 바로 인생샷. 빨대에 손대기 전에, 되도록 바다나 야자수를 배경으로 찍으세요.',
        },
        {
          title: '그다음 잘 저어주기',
          description: '사진을 찍었다면, 잘 저어주세요. 딸기 퓌레를 우유와 말차 사이로 섞어 올려야 새콤달콤함과 감칠맛이 만나는 균형 잡힌 맛이 완성됩니다. 섞지 않으면 층을 하나씩, 섞으면 하나로 어우러져 맛볼 수 있습니다.',
        },
        {
          title: '아이스로 즐기기',
          description: '딸기 말차는 아이스로 즐기는 음료입니다. 차가움이 과일을 밝게, 말차를 산뜻하게 유지해, 따뜻한 와이키키 오후에 딱이죠. 층이 조금 더 오래 분리돼 있도록 천천히 마셔보세요.',
        },
        {
          title: '딸기 모찌 도넛과 함께',
          description: '딸기 모찌 도넛을 함께 주문해 딸기를 더하거나, 말차 도넛으로 그린을 맞춰보세요. 쫄깃한 도넛과 과일 향 가득한 말차 라떼는 완벽한 와이키키 간식입니다.',
        },
      ],
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        {
          question: '딸기 말차 라떼란 무엇인가요?',
          answer: '딸기 말차 라떼는 맨 아래 새콤달콤한 딸기 퓌레, 중간에 우유, 그 위에 진짜 녹차 말차를 부어 만든 층층이 쌓인 아이스 음료입니다. 과일 향 딸기와 흙내음 감칠맛 말차가 균형을 이루는 핑크 앤 그린 그라데이션이 특징이죠. 얼음 위에 제공되며, 2026년 가장 많이 찍힌 카페 음료 중 하나입니다.',
        },
        {
          question: '와이키키 딸기 말차는 얼마인가요?',
          answer: '칼라카우아 애비뉴의 Kona Coffee Donut? 에서 딸기 말차는 $10.95입니다. 망고, 구아바, 릴리코이, 코코넛, 바나나 등 다른 말차 과일 라떼는 각 $8.95, 클래식 말차 라떼도 동일합니다. 와이키키 비치에서 도보 약 5분, 매일 오전 7시부터 오후 9시까지 영업합니다.',
        },
        {
          question: '딸기 말차는 단가요?',
          answer: '은은하게서 적당히 달콤합니다 — 플레인 말차 라떼보다는 과일 향이 나지만, 사탕처럼 달지는 않죠. 딸기 퓌레가 새콤달콤한 과즙을 더하고, 말차가 흙내음 나는 살짝 쌉싸름한 무게감으로 잡아줍니다. 둘이 서로를 받쳐줘서, 느끼하기보다 상쾌한 맛입니다.',
        },
        {
          question: '딸기 말차에 카페인이 있나요?',
          answer: '네. 말차는 진짜 녹차로 만들기 때문에 딸기 말차 라떼에는 카페인이 들어 있습니다 — 보통 한 잔당 약 60~70mg으로, 우려낸 녹차 한 잔 정도이며 일반 커피보다는 적습니다. 에스프레소 같은 자극 없이 은은하고 꾸준한 활력을 줍니다.',
        },
        {
          question: '와이키키 비치 근처에서 딸기 말차를 어디서 살 수 있나요?',
          answer: '와이키키 2142 Kalakaua Ave의 Kona Coffee Donut? 에서 층층이 쌓인 딸기 말차($10.95)와 함께 8가지 말차·호지차 라떼, 100% 코나 커피, 갓 만든 모찌 도넛을 만나보세요. 와이키키 비치에서 도보 약 5분, 매일 오전 7시–오후 9시 영업입니다.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 딸기 말차를 즐기세요',
      text: '2142 Kalakaua Ave의 Kona Coffee Donut? 에서 핑크 앤 그린 딸기 말차를 — 그리고 해변에서 단 몇 분 거리, 갓 만든 모찌 도넛과 함께 즐겨보세요.',
      menuButton: '말차 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '딸기 말차 라떼',
    },
  },
  zh: {
    hero: {
      title: '威基基草莓抹茶拿铁',
      subtitle: '人人都想要的粉绿一杯（2026指南）',
      updated: '2026年6月更新',
      readTime: '阅读约7分钟',
    },
    definition: {
      title: '什么是草莓抹茶拿铁？',
      text: '<strong>草莓抹茶拿铁</strong>是一款<strong>分层冰饮</strong>：底部是酸甜的草莓果泥，中间是冰牛奶，顶部浇上一层鲜艳的<strong>绿色抹茶</strong>。它的魔力在于对比——明亮果香的草莓与醇厚鲜味的抹茶——更在于颜值。那标志性的<strong>粉绿渐层</strong>正是它成为2026年最上镜饮品之一的原因。加冰享用，清爽微甜，是温暖威基基午后的完美一杯。',
    },
    history: {
      title: '草莓抹茶拿铁的故事',
      subtitle: '从京都茶室到你的Instagram',
      p1: '抹茶——石磨细研的绿茶——数百年来一直是日本茶道的一部分，但它作为<strong>咖啡馆饮品</strong>的历史要新得多。过去二十年间，抹茶拿铁从东京和京都走向世界各地的精品咖啡馆，把这种仪式用的粉末变成了日常的冰饮。随着越来越多人爱上它青草般的鲜味，咖啡馆开始尝试各种方法来柔化抹茶的苦味，让它更易入口。',
      p2: '<strong>草莓抹茶拿铁</strong>正是从这种尝试中诞生，并因社交媒体而爆红。这款饮品天然的分层外观——粉色果底晕染入绿色抹茶顶层——简直是为<strong>TikTok和Instagram</strong>量身定做。一张照片就道尽一切，慢动作浇注的短片也纷纷走红。原本小众的咖啡馆特调，迅速成为年度最受欢迎的饮品之一。',
      p3: '抛开颜值不谈，草莓和抹茶本就<strong>相得益彰</strong>。草莓带来明亮、酸甜的多汁感；抹茶带来深沉、略苦、鲜味十足的土壤气息。两者彼此提携——果香让抹茶不显厚重，抹茶让草莓不至于像糖果。这正是让海盐焦糖或辣味巧克力如此迷人的平衡：两个对立面互相成全。',
      p4: '这股潮流抵达<strong>威基基</strong>只是时间问题。全年阳光、海滩人潮，以及来自日本、韩国和亚洲各地、早已熟悉并热爱抹茶的游客——檀香山正是上镜冰草莓抹茶的完美归宿。如今，你在距威基基海滩仅几分钟的地方就能点上一杯——粉的、绿的、冰凉的，随时准备出镜。',
    },
    comparison: {
      title: '草莓抹茶 vs 其他抹茶饮品',
      subtitle: '这杯粉绿有何不同？',
      intro: '草莓抹茶拿铁、经典抹茶拿铁和热带水果抹茶，都以同样真正的绿茶为起点——但它们的外观、口味和上镜程度大不相同。来对比一下：',
      headers: {
        feature: '特点',
        bingsu: '草莓抹茶',
        shavedIce: '经典抹茶',
        kakigori: '热带（芒果/番石榴）',
      },
      rows: [
        {
          feature: '口味',
          bingsu: '酸甜草莓 + 醇厚抹茶',
          shavedIce: '纯粹鲜味的土壤气息',
          kakigori: '热带甜味 + 抹茶',
        },
        {
          feature: '外观',
          bingsu: '粉 + 绿分层渐变',
          shavedIce: '纯一色鲜绿',
          kakigori: '水果色 + 绿',
        },
        {
          feature: '甜度',
          bingsu: '中等，果香',
          shavedIce: '低——以抹茶为主',
          kakigori: '适中偏甜，热带',
        },
        {
          feature: '上镜度',
          bingsu: '极高——菜单的主角',
          shavedIce: '干净经典',
          kakigori: '缤纷明亮',
        },
        {
          feature: '适合',
          bingsu: '拍照 + 果香与抹茶兼得',
          shavedIce: '抹茶纯粹派',
          kakigori: '水果爱好者',
        },
        {
          feature: '价格',
          bingsu: '$10.95',
          shavedIce: '$8.95',
          kakigori: '$8.95',
        },
      ],
      note: '关键区别在于那层分层的草莓果底。它把单调的抹茶拿铁变成酸甜与醇厚交融的一杯，并带来其他任何抹茶都无法比拟的粉绿外观。',
    },
    types: {
      title: '威基基值得一试的抹茶水果拿铁',
      subtitle: '先从草莓开始——再探索海岛风味',
      items: [
        {
          name: '草莓抹茶',
          korean: '$10.95 · 主角',
          description: '走红的粉绿分层拿铁。底部酸甜草莓果泥，中间冰牛奶，顶部鲜艳浇上正宗仪式级抹茶。这是我们最上镜的一杯，也是顾客点名要的人气款。加冰供应。',
          icon: '🍓',
        },
        {
          name: '芒果抹茶',
          korean: '$8.95 · 热带',
          description: '金黄夏威夷风芒果遇上醇厚抹茶，化作夕阳色的分层拿铁。比草莓更甜更热带，却有着同样令人满足的水果与抹茶平衡。喜爱海岛水果的人的最爱。',
          icon: '🥭',
        },
        {
          name: '番石榴抹茶',
          korean: '$8.95 · 海岛人气款',
          description: '番石榴是地道的夏威夷经典，其花香甜味与青草抹茶完美相配。绿色之下的粉珊瑚果层，让它几乎与草莓一样上镜——而且一望便知是本地味道。',
          icon: '🍈',
        },
        {
          name: '百香果抹茶',
          korean: '$8.95 · 百香果',
          description: 'Lilikoi（夏威夷百香果）带来酸爽热带的冲击，切开抹茶的浓郁。明亮、微酸、清爽——这是给喜欢果香拿铁带点酸劲的人的那一杯。',
          icon: '🌺',
        },
        {
          name: '椰子 / 香蕉抹茶',
          korean: '$8.95 · 绵密',
          description: '想要更柔滑绵密的一杯，椰子或香蕉能把抹茶化作温润、甜点般的拿铁。比莓果和柑橘款更少酸味，浓郁的热带尾韵与麻糬甜甜圈堪称绝配。',
          icon: '🥥',
        },
      ],
    },
    whyHawaii: {
      title: '为什么要在威基基喝草莓抹茶',
      points: [
        {
          title: '海滩最上镜的饮品',
          description: '很少有饮品能像分层草莓抹茶那样，在威基基的碧海与棕榈树前拍得这么美。粉绿渐变在任何光线下都抢眼，几乎就是为海滩日的照片而生。如果你想要一张写满"夏威夷度假"的照片，就是它了。',
        },
        {
          title: '真抹茶，真草莓',
          description: '这不是糖浆勾兑的仿品。我们使用真正的仪式级抹茶和真正的草莓果泥，所以你尝到的是青草鲜味的绿茶与明亮多汁果香的真实平衡——而非徒有糖和色素。味道配得上照片。',
        },
        {
          title: '分层的粉绿外观',
          description: '饮品以标志性的双色分层送达，所以搅拌前就能尽享视觉效果。先拍下分层的样子，再搅匀成完美一口。它是那种既好看又好喝的难得一杯。',
        },
        {
          title: '搭配麻糬甜甜圈——离沙滩5分钟',
          description: '草莓抹茶配上草莓或抹茶麻糬甜甜圈更美味，而我们就在卡拉卡瓦大道，距威基基海滩步行约5分钟。点杯饮品、拿个甜甜圈，几分钟内就能回到沙滩。',
        },
      ],
    },
    whereToGet: {
      title: '威基基哪里能买到草莓抹茶',
      intro: '如果你在威基基想喝那杯粉绿拿铁，Kona Coffee Donut? 就是你的去处。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '就在威基基核心地带的卡拉卡瓦大道上，Kona Coffee Donut? 制作分层草莓抹茶（$10.95），外加芒果、番石榴、百香果、椰子、香蕉、红豆和经典抹茶等8款抹茶与焙茶拿铁。我们还供应100%科纳咖啡和新鲜麻糬甜甜圈，距威基基海滩步行约5分钟。每日营业，上午7点至晚上9点。',
        highlights: [
          '分层草莓抹茶（$10.95）——粉绿主角',
          '另有8款抹茶与焙茶拿铁可选',
          '100%科纳咖啡与新鲜麻糬甜甜圈',
          '距威基基海滩约5分钟——每日7:00–21:00营业',
        ],
      },
      cta: '查看抹茶菜单',
    },
    howToEat: {
      title: '草莓抹茶怎么喝',
      subtitle: '先拍照，再享受完美一口',
      tips: [
        {
          title: '先拍下分层的样子',
          description: '饮品送到时，标志性的粉色草莓底和绿色抹茶顶还分得清清楚楚。那就是黄金一拍——在碰吸管之前先拍照，最好以海洋或棕榈树为背景。',
        },
        {
          title: '再搅拌融合',
          description: '拍好照后，好好搅拌一下。把草莓果泥搅入牛奶和抹茶之间，才能造就酸甜与醇厚交融的平衡口味。不搅拌，你是一层层地尝；搅拌后，它们融为一体。',
        },
        {
          title: '记得加冰',
          description: '草莓抹茶就该加冰喝。冰凉让果香明亮、抹茶清爽，正是温暖威基基午后的最佳选择。慢慢啜饮，让分层多保持一会儿。',
        },
        {
          title: '搭配草莓麻糬甜甜圈',
          description: '加点一个草莓麻糬甜甜圈，把草莓味叠满——或来个抹茶口味呼应那抹绿。Q弹的甜甜圈配上果香醇厚的抹茶拿铁，是完美的威基基小食。',
        },
      ],
    },
    faq: {
      title: '常见问题',
      items: [
        {
          question: '什么是草莓抹茶拿铁？',
          answer: '草莓抹茶拿铁是一款分层冰饮，底部是酸甜草莓果泥，中间是牛奶，顶部浇上真正的绿茶抹茶。成品是一杯粉绿渐变的饮品，平衡了果香草莓与醇厚鲜味的抹茶。它加冰供应，是2026年最上镜的咖啡馆饮品之一。',
        },
        {
          question: '威基基的草莓抹茶多少钱？',
          answer: '在卡拉卡瓦大道的 Kona Coffee Donut?，草莓抹茶为 $10.95。我们其他的抹茶水果拿铁——芒果、番石榴、百香果、椰子和香蕉——每杯 $8.95，经典抹茶拿铁也是如此。我们距威基基海滩步行约5分钟，每日上午7点至晚上9点营业。',
        },
        {
          question: '草莓抹茶甜吗？',
          answer: '微甜到适中——比纯抹茶拿铁更有果香，但不像糖果那么甜。草莓果泥增添酸甜多汁感，而抹茶以醇厚、略苦的质感把它稳住。两者彼此平衡，所以喝起来清爽而不腻。',
        },
        {
          question: '草莓抹茶含咖啡因吗？',
          answer: '含。抹茶由真正的绿茶制成，所以草莓抹茶拿铁含咖啡因——通常每杯约60–70毫克，与一杯冲泡绿茶相近，比一杯标准咖啡少。它能带来温和而持续的提神，没有浓缩咖啡那般刺激。',
        },
        {
          question: '威基基海滩附近哪里能买到草莓抹茶？',
          answer: '威基基2142 Kalakaua Ave的 Kona Coffee Donut? 制作分层草莓抹茶（$10.95），还有另外8款抹茶与焙茶拿铁、100%科纳咖啡和新鲜麻糬甜甜圈。它距威基基海滩步行约5分钟，每日上午7点至晚上9点营业。',
        },
      ],
    },
    cta: {
      title: '来威基基品尝草莓抹茶',
      text: '前往2142 Kalakaua Ave的 Kona Coffee Donut?，点一杯粉绿草莓抹茶——再配上一个新鲜麻糬甜甜圈，离海滩只需几分钟。',
      menuButton: '查看抹茶菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '草莓抹茶拿铁',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Strawberry Matcha Latte in Waikiki (2026): The Pink-and-Green Drink Everyone Wants',
  description: 'What a strawberry matcha latte is, why the pink-and-green layered drink went viral, and where to get one in Waikiki — Kona Coffee Donut?\'s Strawberry Matcha ($10.95), minutes from the beach.',
  image: 'https://www.konacoffeedonut.com/images/blog/strawberry-matcha-latte-waikiki.jpeg',
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
  datePublished: '2026-06-23',
  dateModified: '2026-06-23',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/en/blog/strawberry-matcha-latte-waikiki',
  },
  keywords: 'strawberry matcha, strawberry matcha latte waikiki, strawberry matcha near me, pink matcha latte, matcha waikiki',
  wordCount: 1200,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a strawberry matcha latte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A strawberry matcha latte is a layered iced drink made with sweet-tart strawberry purée on the bottom, milk in the middle, and real green matcha poured on top. The result is a pink-and-green ombré drink that balances fruity strawberry against earthy, umami matcha. It is served over ice and is one of the most photographed café drinks of 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much is the strawberry matcha in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At Kona Coffee Donut? on Kalākaua Avenue, the Strawberry Matcha is $10.95. Our other matcha fruit lattes — mango, guava, lilikoi, coconut, and banana — are $8.95 each, as is the classic matcha latte. We are about a 5-minute walk from Waikiki Beach and open daily from 7AM to 9PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is strawberry matcha sweet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is lightly to medium sweet — fruitier than a plain matcha latte but not as sugary as a candy drink. The strawberry purée adds a sweet-tart juiciness, while the matcha keeps it grounded with an earthy, slightly bitter edge. The two balance each other, so it tastes refreshing rather than cloying.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does strawberry matcha have caffeine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Matcha is made from real green tea, so a strawberry matcha latte contains caffeine — typically around 60–70mg per serving, similar to a cup of brewed green tea and less than a standard coffee. It gives a gentle, steady lift without the jolt of espresso.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I get a strawberry matcha near Waikiki Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut? at 2142 Kalakaua Ave in Waikiki makes a layered Strawberry Matcha ($10.95) along with eight other matcha and hojicha lattes, 100% Kona coffee, and fresh mochi donuts. It is about a 5-minute walk from Waikiki Beach and open daily, 7AM–9PM.',
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

export default function StrawberryMatchaLatteWaikikiPage() {
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
          src="/images/blog/strawberry-matcha-latte-waikiki.jpeg"
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
                href={`/${locale}/menu`}
                className="inline-block bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-sky-100 transition-colors"
              >
                {t.whereToGet.cta}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* How to Drink */}
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
              href={`/${locale}/blog/matcha-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 font-semibold transition-colors"
            >
              → Matcha in Waikiki
            </Link>
            <Link
              href={`/${locale}/blog/what-is-hojicha-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              What is Hojicha?
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
              {t.whereToGet.cta}
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
