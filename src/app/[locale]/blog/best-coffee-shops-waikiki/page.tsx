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
      title: 'Best Coffee Shops in Waikiki',
      subtitle: 'Where to Get Great Coffee Near Waikiki Beach (2026 Guide)',
      updated: 'Updated June 2026',
      readTime: '8 min read',
    },
    definition: {
      title: 'What Makes a Great Waikiki Coffee Shop',
      text: 'A great <strong>Waikiki coffee shop</strong> does a few things well: it pours genuinely good coffee — ideally <strong>real 100% Kona</strong>, not a "Kona blend" — brews it fresh, sits within an easy walk of the beach, and gives you something worth pairing it with. The best spots are also welcoming, multilingual, and good value. In this 2026 guide we rank six of the best coffee shops in Waikiki, with <strong>Kona Coffee Donut?</strong> at the top for anyone who wants real 100% Kona plus a fresh donut to go with it.',
    },
    history: {
      title: 'Why 100% Kona Matters',
      subtitle: 'The One Thing That Separates Great Waikiki Coffee From the Rest',
      p1: 'When you\'re picking a coffee shop in Waikiki, the single biggest quality signal is whether they pour <strong>100% Kona</strong>. Kona coffee grows only on the volcanic slopes of the Big Island\'s Kona district — a tiny region that produces <strong>less than 1% of the world\'s coffee</strong>. That rarity is exactly why a real cup is worth seeking out.',
      p2: 'The catch is the label. A coffee marked <strong>"Kona blend"</strong> can legally contain as little as 10% real Kona beans — the rest is cheaper filler. Only <strong>"100% Kona"</strong> guarantees you\'re drinking the genuine article. So as you read this ranking, watch the wording: the cafes that proudly say "100% Kona" are the ones delivering the real Hawaii experience.',
      p3: 'Real Kona is <strong>hand-picked</strong> and sun-dried, which gives it a smooth, <strong>naturally low-acid</strong> cup with notes of brown sugar and nuts. It\'s easy to drink black and forgiving over ice — perfect for a warm Waikiki afternoon. Once you\'ve tasted true 100% Kona side by side with an ordinary blend, the difference is obvious.',
      p4: 'And here\'s the best part: <strong>Waikiki is one of the easiest places on earth to taste it</strong>. You don\'t need to drive hours to the Big Island — several cafes along Kalākaua Avenue pour fresh, authentic Kona within a short walk of the sand. The shops below are our picks for doing exactly that.',
    },
    comparison: {
      title: 'Best Coffee Shops in Waikiki at a Glance',
      subtitle: 'Six Top Picks, Compared',
      intro: 'Here\'s a quick comparison of six of the best coffee spots in Waikiki — what each one does best, whether they pour real 100% Kona, and the overall vibe. Full write-ups follow below.',
      headers: {
        feature: 'Coffee Shop',
        bingsu: 'Best For',
        shavedIce: '100% Kona?',
        kakigori: 'Vibe & Value',
      },
      rows: [
        {
          feature: '1. Kona Coffee Donut?',
          bingsu: 'Real 100% Kona + a donut to pair',
          shavedIce: 'Yes — 100% Kona (Honolulu Coffee beans)',
          kakigori: 'Casual, multilingual, great value',
        },
        {
          feature: '2. Kona Coffee Purveyors',
          bingsu: 'Upscale specialty Kona + kouign-amann',
          shavedIce: 'Yes — 100% Kona',
          kakigori: 'Premium, refined, pricier',
        },
        {
          feature: '3. Island Vintage Coffee',
          bingsu: 'Açaí bowls + Kona coffee',
          shavedIce: 'Kona coffee available',
          kakigori: 'Popular, lively, often busy',
        },
        {
          feature: '4. Honolulu Coffee',
          bingsu: 'Classic Hawaii cafe + own roast',
          shavedIce: 'Established Kona roaster (est. 1992)',
          kakigori: 'Comfortable, dependable, mid-range',
        },
        {
          feature: '5. ARVO',
          bingsu: 'Trendy, photogenic lattes',
          shavedIce: 'Specialty coffee',
          kakigori: 'Hip, design-forward, stylish',
        },
        {
          feature: '6. Kai Coffee Hawaii',
          bingsu: 'Quick quality espresso near hotels',
          shavedIce: 'Kona options available',
          kakigori: 'Convenient, fast, local favorite',
        },
      ],
      note: 'Every shop on this list is worth a stop. We rank Kona Coffee Donut? first because it combines real 100% Kona with fresh donuts at an easy, walkable price — the most well-rounded pick for a visitor who wants the authentic Hawaii cup without the splurge.',
    },
    types: {
      title: 'The 6 Best Coffee Shops in Waikiki',
      subtitle: 'Our Ranked Picks — Each With Its Own Genuine Strength',
      items: [
        {
          name: '1. Kona Coffee Donut?',
          korean: 'Top pick — 100% Kona + donuts',
          description: 'Our top pick for visitors who want the real thing without the splurge. We pour 100% Kona — Honolulu Coffee\'s Big Island Kona beans, not a blend — hot or iced, and pair it with mochi donuts, malasadas, Korean bingsu, Korean corn dogs, and a matcha/hojicha latte line. About a 5-minute walk from Waikiki Beach at 2142 Kalākaua Ave, open daily 7AM–9PM, with multilingual staff and great value.',
          icon: '🥇',
        },
        {
          name: '2. Kona Coffee Purveyors',
          korean: 'Upscale specialty Kona',
          description: 'An upscale specialty cafe in International Market Place, beloved for its 100% Kona and famous kouign-amann pastries. If you want a refined, third-wave coffee experience and don\'t mind premium prices, it\'s a genuine standout.',
          icon: '🥈',
        },
        {
          name: '3. Island Vintage Coffee',
          korean: 'Açaí bowls + Kona',
          description: 'A Waikiki institution famous for its açaí bowls and Kona coffee, with multiple locations. Expect a lively, often-busy scene — a great one-stop when you want a coffee alongside a hearty, photogenic bowl.',
          icon: '🥉',
        },
        {
          name: '4. Honolulu Coffee',
          korean: 'Classic Hawaii roaster',
          description: 'An established Hawaii Kona roaster (est. 1992) with a classic, comfortable cafe experience. We\'re proud to pour their beans at Kona Coffee Donut? — a dependable name with deep local roots and a reliably good cup.',
          icon: '☕',
        },
        {
          name: '5. ARVO',
          korean: 'Trendy & photogenic',
          description: 'A trendy, minimalist cafe known for photogenic lattes and a hip, design-forward vibe. A favorite for specialty drinks and a stylish coffee break when aesthetics are part of the appeal.',
          icon: '☕',
        },
        {
          name: '6. Kai Coffee Hawaii',
          korean: 'Quick & convenient',
          description: 'A local favorite with convenient spots near Waikiki hotels, known for quick, quality espresso drinks. Handy when you want a solid cup close to the beach without a long wait.',
          icon: '☕',
        },
      ],
    },
    whyHawaii: {
      title: 'Why Kona Coffee Donut? Tops Our List',
      points: [
        {
          title: 'Real 100% Kona — Not a Blend',
          description: 'We pour genuine 100% Kona using Honolulu Coffee\'s Big Island Kona beans — never a "Kona blend." That means every cup, hot or iced, delivers the smooth, naturally low-acid taste that makes Kona worth seeking out in the first place.',
        },
        {
          title: 'A Donut (and More) to Pair',
          description: 'Great coffee is even better with something fresh beside it. Alongside our Kona, you can grab mochi donuts, malasadas, Korean bingsu, Korean corn dogs, and matcha or hojicha lattes — turning a quick coffee stop into a memorable little Waikiki treat.',
        },
        {
          title: 'Walkable From the Beach, Open Late',
          description: 'At 2142 Kalākaua Avenue we\'re about a 5-minute walk from Waikiki Beach, and we\'re open daily from 7AM to 9PM. That makes us easy to reach for a morning cup, an afternoon pick-me-up, or an evening treat after dinner.',
        },
        {
          title: 'Great Value & Multilingual',
          description: 'You get the authentic 100% Kona experience without the premium-cafe price tag, served by multilingual staff who are happy to help in English, Japanese, Korean, and more. It\'s the most well-rounded, welcoming pick on this list.',
        },
      ],
    },
    whereToGet: {
      title: 'Visit Kona Coffee Donut? in Waikiki',
      intro: 'If you want real 100% Kona near Waikiki Beach — paired with a fresh donut — Kona Coffee Donut? is the easiest place to start.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Right on Kalākaua Avenue in the heart of Waikiki, Kona Coffee Donut? serves real 100% Kona coffee — we pour Honolulu Coffee\'s Kona beans — brewed fresh, hot or iced. Pair it with a freshly made mochi donut, malasada, Korean bingsu, or Korean corn dog for the perfect Waikiki break. We\'re about a 5-minute walk from Waikiki Beach and open daily, so it\'s easy to swing by for a smooth, low-acid cup of the real thing.',
        highlights: [
          'Real 100% Kona coffee (Honolulu Coffee beans), hot or iced',
          'Mochi donuts, malasadas, Korean bingsu & Korean corn dogs',
          'About 5 minutes from Waikiki Beach · multilingual staff',
          'Open daily, 7AM–9PM · (808) 260-1835',
        ],
      },
      cta: 'View Our Kona Coffee Menu',
    },
    howToEat: {
      title: 'Tips for the Best Waikiki Coffee Run',
      subtitle: 'Get the Most Out of Your Cup',
      tips: [
        {
          title: 'Ask for 100% Kona',
          description: 'Whichever shop you choose, look for or ask about "100% Kona." It\'s the one detail that separates a special cup from an ordinary one. At Kona Coffee Donut?, that means real 100% Kona from Honolulu Coffee, every time.',
        },
        {
          title: 'Pair Kona With a Mochi Donut',
          description: 'Kona\'s mellow, low-acid sweetness is a perfect match for something fresh and chewy. A warm mochi donut or malasada next to your cup turns a quick coffee run into a little Waikiki ritual worth slowing down for.',
        },
        {
          title: 'Taste It Black First',
          description: 'Give your first sip a chance without milk or sugar — that\'s where Kona\'s naturally low acidity and smooth, nutty-sweet character really come through. Then dress it up as a latte or over ice however you like.',
        },
        {
          title: 'Go Early or Take It to the Beach',
          description: 'The best coffee moment is an unhurried one. Grab your cup before the crowds, or take it to go for a walk near Waikiki Beach. Sipping real 100% Kona with an ocean view is one of the simplest pleasures on the island.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About Waikiki Coffee Shops',
      items: [
        {
          question: 'What is the best coffee shop in Waikiki?',
          answer: 'For most visitors, the best coffee shop in Waikiki is Kona Coffee Donut? on Kalākaua Avenue — it pours real 100% Kona (Honolulu Coffee beans), pairs it with fresh donuts, and is great value and walkable from the beach. Other excellent options include Kona Coffee Purveyors for upscale specialty Kona, Island Vintage Coffee for açaí bowls, and Honolulu Coffee for a classic cafe.',
        },
        {
          question: 'Where can I get 100% Kona coffee in Waikiki?',
          answer: 'You can get real 100% Kona at cafes along Kalākaua Avenue. Kona Coffee Donut? at 2142 Kalakaua Ave pours 100% Kona (Honolulu Coffee beans) hot or iced and is open daily 7AM–9PM. Kona Coffee Purveyors also serves 100% Kona in a more upscale setting. Always check that the menu says "100% Kona" rather than "Kona blend," which only needs about 10% real Kona beans.',
        },
        {
          question: 'Where is the best coffee near Waikiki Beach?',
          answer: 'The best coffee near Waikiki Beach is along Kalākaua Avenue, the main street running parallel to the sand. Kona Coffee Donut? is about a 5-minute walk from the beach and serves real 100% Kona plus fresh donuts, making it an easy stop before or after a swim. Kai Coffee Hawaii also has convenient locations near the hotels.',
        },
        {
          question: 'Which Waikiki coffee shops serve real Kona coffee?',
          answer: 'Several do. Kona Coffee Donut? pours 100% Kona (Honolulu Coffee beans), Kona Coffee Purveyors specializes in 100% Kona, Honolulu Coffee is an established Kona roaster, and Island Vintage Coffee offers Kona coffee too. The key is to confirm "100% Kona" on the menu — a "Kona blend" can be as little as 10% real Kona.',
        },
        {
          question: 'What is the best coffee and food pairing in Waikiki?',
          answer: 'A smooth cup of 100% Kona with a fresh donut is one of the best pairings in Waikiki — the low-acid coffee balances the sweetness perfectly. At Kona Coffee Donut?, you can pair Kona with mochi donuts, malasadas, Korean bingsu, or Korean corn dogs, which is exactly why it tops our list for a coffee-plus-treat stop.',
        },
      ],
    },
    cta: {
      title: 'Taste the Best Coffee in Waikiki',
      text: 'Visit Kona Coffee Donut? at 2142 Kalakaua Ave for real 100% Kona coffee, brewed fresh and paired with a warm donut — just minutes from Waikiki Beach.',
      menuButton: 'View Kona Coffee Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'Best Coffee Shops in Waikiki',
    },
  },
  ja: {
    hero: {
      title: 'ワイキキで一番のコーヒーショップ',
      subtitle: 'ワイキキビーチ近くで美味しいコーヒーを飲める場所（2026年版ガイド）',
      updated: '2026年6月更新',
      readTime: '8分で読める',
    },
    definition: {
      title: '良いワイキキのコーヒーショップとは',
      text: '良い<strong>ワイキキのコーヒーショップ</strong>には共通点があります。本当に美味しいコーヒー——できれば「コナブレンド」ではなく<strong>本物の100%コナ</strong>——を淹れたてで提供し、ビーチから歩いて行ける場所にあり、合わせたくなる一品があること。最高の店は親しみやすく、多言語対応で、コスパも良いものです。この2026年版ガイドでは、ワイキキで最高のコーヒーショップ6軒をランキング。本物の100%コナに淹れたてのドーナツを添えたい人には、<strong>Kona Coffee Donut?</strong> が堂々の1位です。',
    },
    history: {
      title: 'なぜ100%コナが重要なのか',
      subtitle: '最高のワイキキコーヒーを、その他から分ける唯一のポイント',
      p1: 'ワイキキでコーヒーショップを選ぶとき、最大の品質の目安は<strong>100%コナ</strong>を提供しているかどうかです。コナコーヒーはハワイ島コナ地区の火山斜面だけで栽培される——<strong>世界のコーヒーのわずか1%未満</strong>を生産する小さな地域です。この希少性こそ、本物の一杯を探し求める価値がある理由です。',
      p2: '落とし穴はラベルにあります。<strong>「コナブレンド」</strong>と表記されたコーヒーは、法律上わずか10%の本物のコナ豆しか入っていなくても名乗れます——残りは安価な詰め物です。<strong>「100% Kona」</strong>だけが本物を飲んでいる保証になります。このランキングを読むときは表記に注目を。「100%コナ」と誇らしげに掲げる店こそ、本物のハワイ体験を届けてくれます。',
      p3: '本物のコナは<strong>手摘み</strong>で天日干しされ、まろやかで<strong>自然に酸味の低い</strong>、黒糖やナッツの風味を持つ一杯になります。ブラックでも飲みやすく、アイスにしても穏やか——暖かいワイキキの午後にぴったりです。本物の100%コナを普通のブレンドと飲み比べれば、その違いは一目瞭然です。',
      p4: 'そして最高なのは、<strong>ワイキキは世界でも有数の、それを手軽に味わえる場所</strong>だということ。何時間もかけてハワイ島まで行く必要はありません。カラカウア通り沿いのいくつものカフェが、砂浜から徒歩圏内で淹れたての本格コナを提供しています。以下の店は、まさにそれを叶える私たちのおすすめです。',
    },
    comparison: {
      title: 'ワイキキで最高のコーヒーショップ一覧',
      subtitle: '厳選トップ6を比較',
      intro: 'ワイキキで最高のコーヒースポット6軒を簡単に比較します——各店の得意分野、本物の100%コナを提供しているか、そして全体の雰囲気。詳しい紹介は下に続きます。',
      headers: {
        feature: 'コーヒーショップ',
        bingsu: 'おすすめポイント',
        shavedIce: '100%コナ？',
        kakigori: '雰囲気＆コスパ',
      },
      rows: [
        {
          feature: '1. Kona Coffee Donut?',
          bingsu: '本物の100%コナ＋合わせるドーナツ',
          shavedIce: 'はい — 100%コナ（ホノルルコーヒーの豆）',
          kakigori: 'カジュアル、多言語、コスパ良し',
        },
        {
          feature: '2. Kona Coffee Purveyors',
          bingsu: '高級スペシャルティコナ＋クイニーアマン',
          shavedIce: 'はい — 100%コナ',
          kakigori: 'プレミアム、洗練、やや高め',
        },
        {
          feature: '3. Island Vintage Coffee',
          bingsu: 'アサイーボウル＋コナコーヒー',
          shavedIce: 'コナコーヒーあり',
          kakigori: '人気で活気あり、混雑しがち',
        },
        {
          feature: '4. Honolulu Coffee',
          bingsu: '王道ハワイカフェ＋自家焙煎',
          shavedIce: '老舗コナ焙煎所（1992年創業）',
          kakigori: '快適で安定、中価格帯',
        },
        {
          feature: '5. ARVO',
          bingsu: 'トレンディで写真映えするラテ',
          shavedIce: 'スペシャルティコーヒー',
          kakigori: 'おしゃれでデザイン性高い',
        },
        {
          feature: '6. Kai Coffee Hawaii',
          bingsu: 'ホテル近くで手早く本格エスプレッソ',
          shavedIce: 'コナの選択肢あり',
          kakigori: '便利で早い、地元の人気店',
        },
      ],
      note: 'このリストのどの店も立ち寄る価値があります。Kona Coffee Donut? を1位にしたのは、本物の100%コナと淹れたてのドーナツを、歩いて行ける手頃な価格で楽しめるから——奮発せずに本物のハワイの一杯を味わいたい旅行者にとって、最もバランスの取れた選択です。',
    },
    types: {
      title: 'ワイキキで最高のコーヒーショップ6選',
      subtitle: '私たちのランキング——それぞれに本物の強みがあります',
      items: [
        {
          name: '1. Kona Coffee Donut?',
          korean: '1位 — 100%コナ＋ドーナツ',
          description: '奮発せずに本物を味わいたい旅行者に、私たちの一番のおすすめ。100%コナ——ブレンドではなくホノルルコーヒーのハワイ島コナ豆——をホットでもアイスでも提供し、モチドーナツ、マラサダ、韓国のピンス、韓国式ホットドッグ、抹茶／ほうじ茶ラテと合わせられます。2142 Kalākaua Ave、ワイキキビーチから徒歩約5分、毎日午前7時〜午後9時営業、多言語スタッフでコスパも抜群。',
          icon: '🥇',
        },
        {
          name: '2. Kona Coffee Purveyors',
          korean: '高級スペシャルティコナ',
          description: 'インターナショナルマーケットプレイス内の高級スペシャルティカフェ。100%コナと名物のクイニーアマンで愛されています。洗練されたサードウェーブのコーヒー体験を求め、プレミアム価格を気にしないなら、本物の逸品です。',
          icon: '🥈',
        },
        {
          name: '3. Island Vintage Coffee',
          korean: 'アサイーボウル＋コナ',
          description: 'アサイーボウルとコナコーヒーで有名なワイキキの名店。複数の店舗があります。活気があり混雑しがちですが、コーヒーとボリューム満点で写真映えするボウルを一度に楽しみたいときに最適です。',
          icon: '🥉',
        },
        {
          name: '4. Honolulu Coffee',
          korean: '王道ハワイ焙煎所',
          description: '1992年創業の老舗ハワイコナ焙煎所で、王道で居心地の良いカフェ体験。Kona Coffee Donut? では誇りを持ってこの豆を使っています——地元に深く根ざした、信頼できる安定の一杯です。',
          icon: '☕',
        },
        {
          name: '5. ARVO',
          korean: 'トレンディで写真映え',
          description: '写真映えするラテと、おしゃれでデザイン性の高い雰囲気で知られるトレンディなミニマルカフェ。見た目も魅力のひとつ、スペシャルティドリンクとスタイリッシュな休憩におすすめです。',
          icon: '☕',
        },
        {
          name: '6. Kai Coffee Hawaii',
          korean: '手早く便利',
          description: 'ワイキキのホテル近くに便利な店舗を構える地元の人気店。手早く本格的なエスプレッソドリンクが楽しめます。長く待たずにビーチ近くでしっかりした一杯が欲しいときに便利です。',
          icon: '☕',
        },
      ],
    },
    whyHawaii: {
      title: 'なぜ Kona Coffee Donut? が1位なのか',
      points: [
        {
          title: '本物の100%コナ——ブレンドではない',
          description: 'ホノルルコーヒーのハワイ島コナ豆を使い、本物の100%コナを提供——「コナブレンド」は一切使いません。だからホットでもアイスでも、毎杯がコナならではのまろやかで自然に酸味の低い味わい。探し求める価値があるのは、まさにこの味です。',
        },
        {
          title: '合わせるドーナツ（とそれ以上）',
          description: '美味しいコーヒーは、隣に淹れたての一品があるとさらに格別。コナと一緒に、モチドーナツ、マラサダ、韓国のピンス、韓国式ホットドッグ、抹茶やほうじ茶ラテも楽しめます——さっとのコーヒーが、忘れられないワイキキのご褒美に。',
        },
        {
          title: 'ビーチから歩いて行けて、夜まで営業',
          description: '2142 Kalākaua Avenue、ワイキキビーチから徒歩約5分。毎日午前7時から午後9時まで営業しています。朝の一杯、午後の活力チャージ、夕食後のご褒美——どんなタイミングでも気軽に立ち寄れます。',
        },
        {
          title: '抜群のコスパと多言語対応',
          description: '高級カフェの価格を払わずに本物の100%コナ体験ができ、英語・日本語・韓国語などに対応する多言語スタッフがお手伝いします。このリストで最もバランスが良く、親しみやすい一軒です。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキの Kona Coffee Donut? へ',
      intro: 'ワイキキビーチ近くで本物の100%コナを——淹れたてのドーナツと一緒に——お探しなら、Kona Coffee Donut? が最も手軽なスタート地点です。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心、カラカウア通り沿いに位置する Kona Coffee Donut? は、本物の100%コナコーヒーを提供——ホノルルコーヒーのコナ豆を使い、ホットでもアイスでも淹れたてで。できたてのモチドーナツ、マラサダ、韓国のピンス、韓国式ホットドッグと合わせれば、完璧なワイキキの休憩に。ワイキキビーチから徒歩約5分、毎日営業なので、まろやかで酸味の低い本物の一杯に気軽に立ち寄れます。',
        highlights: [
          '本物の100%コナコーヒー（ホノルルコーヒーの豆）、ホット＆アイス',
          'モチドーナツ、マラサダ、韓国のピンス＆韓国式ホットドッグ',
          'ワイキキビーチから約5分・多言語スタッフ',
          '毎日営業、午前7時〜午後9時・(808) 260-1835',
        ],
      },
      cta: 'コナコーヒーメニューを見る',
    },
    howToEat: {
      title: '最高のワイキキコーヒータイムのコツ',
      subtitle: '一杯を最大限に楽しむために',
      tips: [
        {
          title: '「100%コナ」を尋ねる',
          description: 'どの店を選んでも、「100% Kona」を探すか尋ねましょう。特別な一杯と普通の一杯を分ける、たったひとつの決め手です。Kona Coffee Donut? なら、毎回ホノルルコーヒーの本物の100%コナです。',
        },
        {
          title: 'コナをモチドーナツと合わせる',
          description: 'コナの穏やかで酸味の低い甘さは、淹れたてでもちもちした一品と相性抜群。温かいモチドーナツやマラサダを一杯のそばに添えれば、さっとのコーヒーが、立ち止まる価値のあるワイキキの小さな儀式になります。',
        },
        {
          title: 'まずブラックで味わう',
          description: '最初のひと口は、ミルクや砂糖なしで。そこにこそ、コナの自然な酸味の低さと、まろやかでナッツのような甘さが現れます。そのあとはお好みでラテやアイスにアレンジを。',
        },
        {
          title: '早めに、またはビーチへ持って行く',
          description: '最高のコーヒーの瞬間は、ゆったりとしたもの。混雑前に一杯を手にするか、テイクアウトしてワイキキビーチ近くを散歩しましょう。オーシャンビューと一緒に本物の100%コナを味わうのは、島で最もシンプルな喜びのひとつです。',
        },
      ],
    },
    faq: {
      title: 'ワイキキのコーヒーショップに関するよくある質問',
      items: [
        {
          question: 'ワイキキで一番のコーヒーショップは？',
          answer: 'ほとんどの旅行者にとって、ワイキキで一番のコーヒーショップはカラカウア通りの Kona Coffee Donut? です——本物の100%コナ（ホノルルコーヒーの豆）を提供し、淹れたてのドーナツと合わせられ、コスパが良くビーチから歩いて行けます。ほかにも、高級スペシャルティコナの Kona Coffee Purveyors、アサイーボウルの Island Vintage Coffee、王道カフェの Honolulu Coffee なども優れた選択肢です。',
        },
        {
          question: 'ワイキキで100%コナコーヒーを飲める場所は？',
          answer: 'カラカウア通り沿いのカフェで本物の100%コナが飲めます。2142 Kalakaua Ave の Kona Coffee Donut? は100%コナ（ホノルルコーヒーの豆）をホットでもアイスでも提供し、毎日午前7時〜午後9時営業。Kona Coffee Purveyors もより高級な空間で100%コナを提供しています。メニューが「コナブレンド」ではなく「100% Kona」と書かれているか必ず確認を——ブレンドは約10%のコナ豆でも名乗れます。',
        },
        {
          question: 'ワイキキビーチ近くで一番のコーヒーは？',
          answer: 'ワイキキビーチ近くで一番のコーヒーは、砂浜と平行に走るメインストリート、カラカウア通り沿いにあります。Kona Coffee Donut? はビーチから徒歩約5分で、本物の100%コナと淹れたてのドーナツを提供——海水浴の前後に立ち寄りやすい一軒です。Kai Coffee Hawaii もホテル近くに便利な店舗があります。',
        },
        {
          question: 'ワイキキで本物のコナコーヒーを出すのはどの店？',
          answer: 'いくつもあります。Kona Coffee Donut? は100%コナ（ホノルルコーヒーの豆）を、Kona Coffee Purveyors は100%コナを専門に、Honolulu Coffee は老舗のコナ焙煎所として、Island Vintage Coffee もコナコーヒーを提供しています。大切なのはメニューで「100% Kona」を確認すること——「コナブレンド」は本物のコナがわずか10%でも名乗れます。',
        },
        {
          question: 'ワイキキで一番のコーヒーとフードの組み合わせは？',
          answer: 'まろやかな100%コナと淹れたてのドーナツは、ワイキキで最高の組み合わせのひとつ——酸味の低いコーヒーが甘さを完璧に引き立てます。Kona Coffee Donut? では、コナをモチドーナツ、マラサダ、韓国のピンス、韓国式ホットドッグと合わせられ、まさにこれがコーヒー＋ご褒美の一軒として1位の理由です。',
        },
      ],
    },
    cta: {
      title: 'ワイキキで一番のコーヒーを味わおう',
      text: '2142 Kalakaua Ave の Kona Coffee Donut? で、淹れたての本物の100%コナコーヒーと温かいドーナツを——ワイキキビーチからわずか数分です。',
      menuButton: 'コナコーヒーメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'ワイキキで一番のコーヒーショップ',
    },
  },
  ko: {
    hero: {
      title: '와이키키 최고의 커피숍',
      subtitle: '와이키키 해변 근처에서 맛있는 커피를 마실 수 있는 곳 (2026 가이드)',
      updated: '2026년 6월 업데이트',
      readTime: '8분 소요',
    },
    definition: {
      title: '좋은 와이키키 커피숍이란',
      text: '좋은 <strong>와이키키 커피숍</strong>에는 몇 가지 공통점이 있습니다. 정말로 맛있는 커피——이왕이면 "코나 블렌드"가 아닌 <strong>진짜 100% 코나</strong>——를 갓 내려 제공하고, 해변에서 걸어갈 수 있는 거리에 있으며, 곁들일 만한 무언가가 있다는 것. 최고의 곳은 친절하고 다국어가 되며 가성비도 좋습니다. 이 2026 가이드에서는 와이키키 최고의 커피숍 6곳을 순위로 정리했습니다. 진짜 100% 코나에 갓 내린 도넛까지 곁들이고 싶은 분께는 <strong>Kona Coffee Donut?</strong> 가 당당히 1위입니다.',
    },
    history: {
      title: '왜 100% 코나가 중요한가',
      subtitle: '최고의 와이키키 커피를 나머지와 가르는 단 하나의 차이',
      p1: '와이키키에서 커피숍을 고를 때 가장 큰 품질 신호는 <strong>100% 코나</strong>를 내리는지 여부입니다. 코나 커피는 빅아일랜드 코나 지역의 화산 경사면에서만 자라며——<strong>전 세계 커피의 1% 미만</strong>을 생산하는 아주 좁은 지역입니다. 바로 이 희소성이 진짜 한 잔을 찾아 마실 가치가 있는 이유입니다.',
      p2: '함정은 라벨에 있습니다. <strong>"코나 블렌드"</strong>라고 표기된 커피는 법적으로 진짜 코나 원두가 단 10%만 들어가도 됩니다——나머지는 더 저렴한 충전재죠. 오직 <strong>"100% Kona"</strong>만이 진짜를 마시고 있다는 보장입니다. 이 순위를 읽을 때 표기를 눈여겨보세요. "100% 코나"라고 당당히 내세우는 카페가 진짜 하와이 경험을 선사합니다.',
      p3: '진짜 코나는 <strong>손으로 수확</strong>해 햇볕에 말려, 부드럽고 <strong>자연스럽게 산미가 낮은</strong>, 흑설탕과 견과류 향이 나는 한 잔이 됩니다. 블랙으로도 마시기 편하고 얼음에도 부드럽게 어울려——따뜻한 와이키키 오후에 안성맞춤입니다. 진짜 100% 코나를 평범한 블렌드와 나란히 맛보면 그 차이는 분명해집니다.',
      p4: '그리고 가장 좋은 점: <strong>와이키키는 지구상에서 그것을 가장 쉽게 맛볼 수 있는 곳 중 하나</strong>라는 것입니다. 빅아일랜드까지 몇 시간씩 운전할 필요가 없습니다. 칼라카우아 애비뉴의 여러 카페가 모래사장에서 도보 거리에 갓 내린 정통 코나를 제공하니까요. 아래 소개하는 곳들이 바로 그걸 위한 저희의 추천입니다.',
    },
    comparison: {
      title: '와이키키 최고의 커피숍 한눈에 보기',
      subtitle: '엄선한 6곳 비교',
      intro: '와이키키 최고의 커피 명소 6곳을 간단히 비교합니다——각 곳이 가장 잘하는 것, 진짜 100% 코나를 내리는지, 그리고 전체적인 분위기. 자세한 소개는 아래에 이어집니다.',
      headers: {
        feature: '커피숍',
        bingsu: '추천 포인트',
        shavedIce: '100% 코나?',
        kakigori: '분위기 & 가성비',
      },
      rows: [
        {
          feature: '1. Kona Coffee Donut?',
          bingsu: '진짜 100% 코나 + 곁들일 도넛',
          shavedIce: '네 — 100% 코나 (호놀룰루 커피 원두)',
          kakigori: '캐주얼, 다국어, 가성비 우수',
        },
        {
          feature: '2. Kona Coffee Purveyors',
          bingsu: '고급 스페셜티 코나 + 쿠인아망',
          shavedIce: '네 — 100% 코나',
          kakigori: '프리미엄, 세련됨, 다소 비쌈',
        },
        {
          feature: '3. Island Vintage Coffee',
          bingsu: '아사이 볼 + 코나 커피',
          shavedIce: '코나 커피 제공',
          kakigori: '인기 많고 활기참, 자주 붐빔',
        },
        {
          feature: '4. Honolulu Coffee',
          bingsu: '클래식 하와이 카페 + 자가 로스팅',
          shavedIce: '오래된 코나 로스터 (1992년 설립)',
          kakigori: '편안하고 믿음직, 중간 가격대',
        },
        {
          feature: '5. ARVO',
          bingsu: '트렌디하고 사진 잘 받는 라테',
          shavedIce: '스페셜티 커피',
          kakigori: '힙하고 디자인 감각적',
        },
        {
          feature: '6. Kai Coffee Hawaii',
          bingsu: '호텔 근처에서 빠르고 좋은 에스프레소',
          shavedIce: '코나 옵션 있음',
          kakigori: '편리하고 빠름, 현지 인기',
        },
      ],
      note: '이 목록의 모든 곳이 들를 가치가 있습니다. Kona Coffee Donut? 를 1위로 꼽은 건 진짜 100% 코나와 갓 내린 도넛을, 걸어갈 수 있는 부담 없는 가격에 함께 즐길 수 있기 때문입니다——크게 쓰지 않고 정통 하와이 한 잔을 원하는 여행자에게 가장 균형 잡힌 선택입니다.',
    },
    types: {
      title: '와이키키 최고의 커피숍 6곳',
      subtitle: '저희가 매긴 순위 — 각자 고유한 진짜 강점이 있습니다',
      items: [
        {
          name: '1. Kona Coffee Donut?',
          korean: '1위 — 100% 코나 + 도넛',
          description: '크게 쓰지 않고 진짜를 원하는 여행자께 드리는 저희의 1순위. 100% 코나——블렌드가 아닌 호놀룰루 커피의 빅아일랜드 코나 원두——를 핫이든 아이스든 내리고, 모찌 도넛, 말라사다, 한국식 빙수, 한국식 핫도그, 말차/호지차 라테와 곁들일 수 있습니다. 2142 Kalākaua Ave, 와이키키 해변에서 도보 약 5분, 매일 오전 7시~오후 9시 영업, 다국어 직원에 가성비도 훌륭합니다.',
          icon: '🥇',
        },
        {
          name: '2. Kona Coffee Purveyors',
          korean: '고급 스페셜티 코나',
          description: '인터내셔널 마켓 플레이스 안의 고급 스페셜티 카페로, 100% 코나와 유명한 쿠인아망 페이스트리로 사랑받습니다. 세련된 서드웨이브 커피 경험을 원하고 프리미엄 가격이 부담되지 않는다면, 진짜 돋보이는 곳입니다.',
          icon: '🥈',
        },
        {
          name: '3. Island Vintage Coffee',
          korean: '아사이 볼 + 코나',
          description: '아사이 볼과 코나 커피로 유명한 와이키키의 명소로, 여러 지점이 있습니다. 활기차고 자주 붐비지만, 커피와 푸짐하고 사진 잘 받는 볼을 한 번에 즐기고 싶을 때 안성맞춤입니다.',
          icon: '🥉',
        },
        {
          name: '4. Honolulu Coffee',
          korean: '클래식 하와이 로스터',
          description: '1992년 설립된 오래된 하와이 코나 로스터로, 클래식하고 편안한 카페 경험을 제공합니다. Kona Coffee Donut? 에서 자랑스럽게 이 원두를 사용합니다——현지에 깊이 뿌리내린, 믿음직하고 한결같이 좋은 한 잔입니다.',
          icon: '☕',
        },
        {
          name: '5. ARVO',
          korean: '트렌디하고 사진 맛집',
          description: '사진 잘 받는 라테와 힙하고 디자인 감각적인 분위기로 알려진 트렌디한 미니멀 카페. 비주얼도 매력의 일부인, 스페셜티 음료와 스타일리시한 커피 휴식에 좋은 곳입니다.',
          icon: '☕',
        },
        {
          name: '6. Kai Coffee Hawaii',
          korean: '빠르고 편리한',
          description: '와이키키 호텔 근처에 편리한 매장을 둔 현지 인기 카페로, 빠르고 좋은 에스프레소 음료로 알려져 있습니다. 오래 기다리지 않고 해변 근처에서 든든한 한 잔이 필요할 때 편리합니다.',
          icon: '☕',
        },
      ],
    },
    whyHawaii: {
      title: '왜 Kona Coffee Donut? 가 1위인가',
      points: [
        {
          title: '진짜 100% 코나 — 블렌드 아님',
          description: '호놀룰루 커피의 빅아일랜드 코나 원두로 진짜 100% 코나를 내립니다——절대 "코나 블렌드"를 쓰지 않습니다. 그래서 핫이든 아이스든 매 잔이 코나 특유의 부드럽고 자연스럽게 낮은 산미를 담아냅니다. 굳이 찾아 마실 가치가 있는 건 바로 이 맛입니다.',
        },
        {
          title: '곁들일 도넛 (그리고 그 이상)',
          description: '맛있는 커피는 옆에 갓 만든 한 입이 있으면 더 좋습니다. 코나와 함께 모찌 도넛, 말라사다, 한국식 빙수, 한국식 핫도그, 말차나 호지차 라테까지 즐길 수 있어——잠깐의 커피가 잊지 못할 와이키키의 작은 호사가 됩니다.',
        },
        {
          title: '해변에서 걸어갈 수 있고, 늦게까지 영업',
          description: '2142 Kalākaua Avenue, 와이키키 해변에서 도보 약 5분이며 매일 오전 7시부터 오후 9시까지 영업합니다. 아침 한 잔, 오후의 활력 충전, 저녁 식사 후 디저트——어느 때든 부담 없이 들르기 좋습니다.',
        },
        {
          title: '훌륭한 가성비와 다국어',
          description: '고급 카페 가격을 내지 않고도 정통 100% 코나 경험을 누릴 수 있고, 영어·일본어·한국어 등으로 기꺼이 도와드리는 다국어 직원이 맞이합니다. 이 목록에서 가장 균형 잡히고 친근한 한 곳입니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키 Kona Coffee Donut? 방문하기',
      intro: '와이키키 해변 근처에서 진짜 100% 코나를——갓 내린 도넛과 함께——원하신다면, Kona Coffee Donut? 가 가장 쉬운 시작점입니다.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키의 중심, 칼라카우아 애비뉴에 자리한 Kona Coffee Donut? 는 진짜 100% 코나 커피를 제공합니다——호놀룰루 커피의 코나 원두를 사용해 핫이든 아이스든 갓 내려 드리죠. 갓 만든 모찌 도넛, 말라사다, 한국식 빙수, 한국식 핫도그와 곁들이면 완벽한 와이키키의 쉼표가 됩니다. 와이키키 해변에서 도보 약 5분, 매일 영업하니 부드럽고 산미 낮은 진짜 한 잔을 가볍게 들르기 좋습니다.',
        highlights: [
          '진짜 100% 코나 커피 (호놀룰루 커피 원두), 핫 & 아이스',
          '모찌 도넛, 말라사다, 한국식 빙수 & 한국식 핫도그',
          '와이키키 해변에서 약 5분 · 다국어 직원',
          '매일 영업, 오전 7시~오후 9시 · (808) 260-1835',
        ],
      },
      cta: '코나 커피 메뉴 보기',
    },
    howToEat: {
      title: '최고의 와이키키 커피 나들이를 위한 팁',
      subtitle: '한 잔을 200% 즐기는 법',
      tips: [
        {
          title: '"100% 코나" 물어보기',
          description: '어느 곳을 고르든 "100% Kona"를 찾거나 물어보세요. 특별한 한 잔과 평범한 한 잔을 가르는 단 하나의 디테일입니다. Kona Coffee Donut? 에서는 매번 호놀룰루 커피의 진짜 100% 코나라는 뜻이죠.',
        },
        {
          title: '코나를 모찌 도넛과 곁들이기',
          description: '코나의 은은하고 산미 낮은 단맛은 갓 만든 쫄깃한 한 입과 완벽한 궁합입니다. 따뜻한 모찌 도넛이나 말라사다를 한 잔 옆에 두면, 잠깐의 커피가 천천히 누릴 가치가 있는 와이키키의 작은 의식이 됩니다.',
        },
        {
          title: '먼저 블랙으로 맛보기',
          description: '첫 모금은 우유나 설탕 없이 즐겨보세요——거기서 코나의 자연스럽게 낮은 산미와 부드럽고 고소한 단맛이 제대로 드러납니다. 그다음 취향대로 라테나 아이스로 즐기세요.',
        },
        {
          title: '이른 시간에, 또는 해변으로 들고 가기',
          description: '최고의 커피 순간은 여유로운 순간입니다. 붐비기 전에 한 잔 들거나, 테이크아웃해서 와이키키 해변 근처를 산책하세요. 오션뷰와 함께 진짜 100% 코나를 마시는 건 이 섬에서 가장 단순한 즐거움 중 하나입니다.',
        },
      ],
    },
    faq: {
      title: '와이키키 커피숍에 대해 자주 묻는 질문',
      items: [
        {
          question: '와이키키 최고의 커피숍은 어디인가요?',
          answer: '대부분의 여행자에게 와이키키 최고의 커피숍은 칼라카우아 애비뉴의 Kona Coffee Donut? 입니다——진짜 100% 코나(호놀룰루 커피 원두)를 내리고, 갓 만든 도넛과 곁들일 수 있으며, 가성비가 좋고 해변에서 걸어갈 수 있습니다. 이 외에도 고급 스페셜티 코나의 Kona Coffee Purveyors, 아사이 볼의 Island Vintage Coffee, 클래식 카페 Honolulu Coffee 도 훌륭한 선택지입니다.',
        },
        {
          question: '와이키키에서 100% 코나 커피를 마실 수 있는 곳은?',
          answer: '칼라카우아 애비뉴의 카페들에서 진짜 100% 코나를 마실 수 있습니다. 2142 Kalakaua Ave의 Kona Coffee Donut? 는 100% 코나(호놀룰루 커피 원두)를 핫이든 아이스든 제공하며 매일 오전 7시~오후 9시 영업합니다. Kona Coffee Purveyors 도 더 고급스러운 공간에서 100% 코나를 제공합니다. 메뉴가 "코나 블렌드"가 아니라 "100% Kona"라고 적혀 있는지 꼭 확인하세요——블렌드는 진짜 코나가 약 10%만 들어가도 됩니다.',
        },
        {
          question: '와이키키 해변 근처에서 가장 좋은 커피는?',
          answer: '와이키키 해변 근처 최고의 커피는 모래사장과 평행하게 뻗은 중심 거리인 칼라카우아 애비뉴에 있습니다. Kona Coffee Donut? 는 해변에서 도보 약 5분 거리이며 진짜 100% 코나와 갓 만든 도넛을 제공해, 수영 전후로 들르기 좋습니다. Kai Coffee Hawaii 도 호텔 근처에 편리한 매장이 있습니다.',
        },
        {
          question: '와이키키에서 진짜 코나 커피를 내는 곳은 어디인가요?',
          answer: '여러 곳이 있습니다. Kona Coffee Donut? 는 100% 코나(호놀룰루 커피 원두)를, Kona Coffee Purveyors 는 100% 코나를 전문으로, Honolulu Coffee 는 오래된 코나 로스터로서, Island Vintage Coffee 도 코나 커피를 제공합니다. 핵심은 메뉴에서 "100% Kona"를 확인하는 것——"코나 블렌드"는 진짜 코나가 10%만 들어가도 됩니다.',
        },
        {
          question: '와이키키 최고의 커피와 음식 조합은?',
          answer: '부드러운 100% 코나 한 잔과 갓 만든 도넛은 와이키키 최고의 조합 중 하나입니다——산미 낮은 커피가 단맛을 완벽하게 균형 잡아주죠. Kona Coffee Donut? 에서는 코나를 모찌 도넛, 말라사다, 한국식 빙수, 한국식 핫도그와 곁들일 수 있어, 커피+간식 한 곳으로 1위에 오른 이유가 바로 이것입니다.',
        },
      ],
    },
    cta: {
      title: '와이키키 최고의 커피를 맛보세요',
      text: '2142 Kalakaua Ave의 Kona Coffee Donut? 에 들러 갓 내린 진짜 100% 코나 커피와 따뜻한 도넛을 즐겨보세요 — 와이키키 해변에서 단 몇 분 거리입니다.',
      menuButton: '코나 커피 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '와이키키 최고의 커피숍',
    },
  },
  zh: {
    hero: {
      title: '威基基最好的咖啡店',
      subtitle: '在威基基海滩附近喝到好咖啡的地方（2026指南）',
      updated: '2026年6月更新',
      readTime: '阅读约8分钟',
    },
    definition: {
      title: '什么才算一家好的威基基咖啡店',
      text: '一家好的<strong>威基基咖啡店</strong>有几个共同点：提供真正好喝的咖啡——最好是<strong>正宗100%科纳</strong>，而非"科纳混合"——现冲现做，位于海滩步行可达之处，并有值得搭配的小食。最好的店还亲切、支持多语言、且物有所值。在这份2026指南中，我们为威基基最好的六家咖啡店排了名，其中 <strong>Kona Coffee Donut?</strong> 高居榜首——最适合想喝正宗100%科纳、再配一个新鲜甜甜圈的人。',
    },
    history: {
      title: '为什么100%科纳很重要',
      subtitle: '把最好的威基基咖啡与其他区分开的唯一关键',
      p1: '在威基基挑选咖啡店时，最大的品质信号就是他们是否提供<strong>100%科纳</strong>。科纳咖啡只生长在大岛科纳产区的火山斜坡上——一片产量<strong>不到全球咖啡1%</strong>的狭小区域。正是这份稀有，让一杯真品值得专程寻味。',
      p2: '陷阱在于标签。标着<strong>"科纳混合"</strong>的咖啡，按法律只需含10%的真科纳豆即可——其余都是更便宜的填充料。只有<strong>"100% Kona"</strong>才能保证你喝的是真品。所以读这份榜单时请留意字眼：那些自豪标明"100%科纳"的咖啡馆，才是带来正宗夏威夷体验的店。',
      p3: '真正的科纳是<strong>手工采摘</strong>、日晒处理的，造就一杯顺滑、<strong>天然低酸</strong>、带有红糖与坚果香气的咖啡。它易于纯黑入口，冰镇也依旧柔和——非常适合温暖的威基基午后。把正宗100%科纳和普通混合咖啡并排一尝，差别一目了然。',
      p4: '而最棒的是：<strong>威基基是全世界最容易品尝它的地方之一</strong>。你不必驱车数小时前往大岛——卡拉卡瓦大道沿线的多家咖啡馆，在离沙滩步行可达的范围内就能提供现冲的正宗科纳。下面这几家，正是我们为此精选的推荐。',
    },
    comparison: {
      title: '威基基最好的咖啡店一览',
      subtitle: '精选六大推荐对比',
      intro: '下面快速对比威基基最好的六家咖啡店——各自最擅长什么、是否提供正宗100%科纳，以及整体氛围。详细介绍见下文。',
      headers: {
        feature: '咖啡店',
        bingsu: '推荐亮点',
        shavedIce: '100%科纳？',
        kakigori: '氛围与性价比',
      },
      rows: [
        {
          feature: '1. Kona Coffee Donut?',
          bingsu: '正宗100%科纳＋可搭配的甜甜圈',
          shavedIce: '是——100%科纳（檀香山咖啡豆）',
          kakigori: '休闲、多语言、超值',
        },
        {
          feature: '2. Kona Coffee Purveyors',
          bingsu: '高端精品科纳＋焦糖酥饼',
          shavedIce: '是——100%科纳',
          kakigori: '高端、精致、偏贵',
        },
        {
          feature: '3. Island Vintage Coffee',
          bingsu: '巴西莓碗＋科纳咖啡',
          shavedIce: '提供科纳咖啡',
          kakigori: '人气高、热闹、常排队',
        },
        {
          feature: '4. Honolulu Coffee',
          bingsu: '经典夏威夷咖啡馆＋自家烘焙',
          shavedIce: '老牌科纳烘焙商（1992年创立）',
          kakigori: '舒适可靠、价格中等',
        },
        {
          feature: '5. ARVO',
          bingsu: '时髦、上镜的拿铁',
          shavedIce: '精品咖啡',
          kakigori: '潮流、设计感十足',
        },
        {
          feature: '6. Kai Coffee Hawaii',
          bingsu: '酒店附近快捷优质浓缩',
          shavedIce: '有科纳选项',
          kakigori: '便利快捷、本地人气',
        },
      ],
      note: '榜上每一家都值得一去。我们把 Kona Coffee Donut? 排在第一，是因为它把正宗100%科纳与新鲜甜甜圈，以步行可达的实惠价格结合在一起——对于想不必大手笔就能喝到正宗夏威夷咖啡的游客来说，是最全面的选择。',
    },
    types: {
      title: '威基基最好的6家咖啡店',
      subtitle: '我们的排名——每家都有自己真正的强项',
      items: [
        {
          name: '1. Kona Coffee Donut?',
          korean: '榜首——100%科纳＋甜甜圈',
          description: '对于想不必大手笔就喝到真品的游客，这是我们的首选。我们提供100%科纳——檀香山咖啡的大岛科纳豆，而非混合——无论热饮还是冰饮，并可搭配麻糬甜甜圈、马拉萨达、韩式刨冰、韩式热狗，以及抹茶／焙茶拿铁系列。位于 2142 Kalākaua Ave，距威基基海滩步行约5分钟，每天上午7点至晚上9点营业，多语言店员，性价比超高。',
          icon: '🥇',
        },
        {
          name: '2. Kona Coffee Purveyors',
          korean: '高端精品科纳',
          description: '位于国际市场（International Market Place）的高端精品咖啡馆，以100%科纳和招牌焦糖酥饼（kouign-amann）深受喜爱。如果你想要精致的第三波咖啡体验，又不介意高端价位，它确实出众。',
          icon: '🥈',
        },
        {
          name: '3. Island Vintage Coffee',
          korean: '巴西莓碗＋科纳',
          description: '以巴西莓碗和科纳咖啡闻名的威基基名店，拥有多家分店。场面热闹、常常排队——想一次同时享用咖啡和一份丰盛上镜的果碗时，是绝佳之选。',
          icon: '🥉',
        },
        {
          name: '4. Honolulu Coffee',
          korean: '经典夏威夷烘焙商',
          description: '创立于1992年的老牌夏威夷科纳烘焙商，提供经典而舒适的咖啡馆体验。我们在 Kona Coffee Donut? 自豪地使用他们的豆子——一个深耕本地、可靠且始终好喝的名字。',
          icon: '☕',
        },
        {
          name: '5. ARVO',
          korean: '时髦又上镜',
          description: '以上镜拿铁和潮流、设计感十足的氛围著称的时髦极简咖啡馆。当颜值也是吸引力的一部分时，这里是品尝精品饮品、享受时尚咖啡时光的热门之选。',
          icon: '☕',
        },
        {
          name: '6. Kai Coffee Hawaii',
          korean: '快捷又便利',
          description: '在威基基酒店附近设有便利门店的本地人气店，以快捷优质的浓缩饮品著称。当你想在海滩附近不久等就来一杯扎实好咖啡时，十分方便。',
          icon: '☕',
        },
      ],
    },
    whyHawaii: {
      title: '为什么 Kona Coffee Donut? 名列榜首',
      points: [
        {
          title: '正宗100%科纳——不是混合',
          description: '我们使用檀香山咖啡的大岛科纳豆，提供正宗100%科纳——绝不用"科纳混合"。所以无论热饮还是冰饮，每一杯都呈现科纳特有的顺滑、天然低酸的口感。值得专程寻味的，正是这个味道。',
        },
        {
          title: '可搭配的甜甜圈（以及更多）',
          description: '好咖啡若旁边有新鲜小食会更出色。在科纳之外，你还能搭配麻糬甜甜圈、马拉萨达、韩式刨冰、韩式热狗，以及抹茶或焙茶拿铁——把匆匆一杯变成一份难忘的威基基小确幸。',
        },
        {
          title: '从海滩步行可达，营业到晚上',
          description: '我们位于 2142 Kalākaua Avenue，距威基基海滩步行约5分钟，每天上午7点至晚上9点营业。无论清晨一杯、午后提神，还是晚餐后的小享受，都能轻松光临。',
        },
        {
          title: '超值且多语言',
          description: '你无需支付高端咖啡馆的价格，就能享受正宗100%科纳体验，并由乐于用英语、日语、韩语等提供帮助的多语言店员接待。这是榜单上最全面、最亲切的一家。',
        },
      ],
    },
    whereToGet: {
      title: '到访威基基的 Kona Coffee Donut?',
      intro: '如果你想在威基基海滩附近喝到正宗100%科纳——还能配一个新鲜甜甜圈——Kona Coffee Donut? 是最方便的起点。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '就在威基基中心地段的卡拉卡瓦大道上，Kona Coffee Donut? 提供正宗100%科纳咖啡——我们使用檀香山咖啡（Honolulu Coffee）的科纳豆，无论热饮还是冰饮都现冲现做。再配上一个现做的麻糬甜甜圈、马拉萨达、韩式刨冰或韩式热狗，就是完美的威基基小憩。我们距威基基海滩步行约5分钟，每天营业，随时可以来一杯顺滑低酸的正宗咖啡。',
        highlights: [
          '正宗100%科纳咖啡（檀香山咖啡豆），冷热皆有',
          '麻糬甜甜圈、马拉萨达、韩式刨冰与韩式热狗',
          '距威基基海滩约5分钟 · 多语言店员',
          '每天营业，上午7点至晚上9点 · (808) 260-1835',
        ],
      },
      cta: '查看我们的科纳咖啡菜单',
    },
    howToEat: {
      title: '畅享威基基咖啡之行的小贴士',
      subtitle: '充分享受你的那一杯',
      tips: [
        {
          title: '主动询问"100%科纳"',
          description: '无论选哪家，都留意或询问"100% Kona"。这是区分一杯特别咖啡与普通咖啡的唯一细节。在 Kona Coffee Donut?，那意味着每一次都是檀香山咖啡的正宗100%科纳。',
        },
        {
          title: '科纳配麻糬甜甜圈',
          description: '科纳柔和、低酸的甜味，与新鲜有嚼劲的小食是绝配。在杯旁放一个温热的麻糬甜甜圈或马拉萨达，就能把匆匆一杯咖啡变成一段值得放慢脚步的威基基小仪式。',
        },
        {
          title: '先纯黑品尝',
          description: '第一口不妨不加奶不加糖——那里才能真正尝出科纳天然的低酸和顺滑、坚果般的甜味。之后再随你喜好做成拿铁或加冰。',
        },
        {
          title: '趁早，或带到海滩边',
          description: '最好的咖啡时刻是从容不迫的。在人潮涌来前来一杯，或外带到威基基海滩边散步。伴着海景品尝正宗100%科纳，是岛上最简单的享受之一。',
        },
      ],
    },
    faq: {
      title: '关于威基基咖啡店的常见问题',
      items: [
        {
          question: '威基基最好的咖啡店是哪家？',
          answer: '对大多数游客而言，威基基最好的咖啡店是卡拉卡瓦大道上的 Kona Coffee Donut?——它提供正宗100%科纳（檀香山咖啡豆），可搭配现做甜甜圈，性价比高且从海滩步行可达。其他优秀选择还包括主打高端精品科纳的 Kona Coffee Purveyors、以巴西莓碗闻名的 Island Vintage Coffee，以及经典咖啡馆 Honolulu Coffee。',
        },
        {
          question: '在威基基哪里能喝到100%科纳咖啡？',
          answer: '你可以在卡拉卡瓦大道沿线的咖啡馆喝到正宗100%科纳。位于 2142 Kalakaua Ave 的 Kona Coffee Donut? 提供冷热皆有的100%科纳（檀香山咖啡豆），每天上午7点至晚上9点营业。Kona Coffee Purveyors 也在更高端的环境中提供100%科纳。请务必确认菜单写的是"100% Kona"而非"科纳混合"——后者只需约10%的真科纳豆。',
        },
        {
          question: '威基基海滩附近哪里的咖啡最好？',
          answer: '威基基海滩附近最好的咖啡集中在与沙滩平行的主街卡拉卡瓦大道上。Kona Coffee Donut? 距海滩步行约5分钟，提供正宗100%科纳和现做甜甜圈，是下海前后顺路一停的好去处。Kai Coffee Hawaii 在酒店附近也有便利门店。',
        },
        {
          question: '威基基哪些咖啡店供应真正的科纳咖啡？',
          answer: '有好几家。Kona Coffee Donut? 提供100%科纳（檀香山咖啡豆），Kona Coffee Purveyors 专攻100%科纳，Honolulu Coffee 是老牌科纳烘焙商，Island Vintage Coffee 也供应科纳咖啡。关键是在菜单上确认"100% Kona"——"科纳混合"可能只含10%的真科纳。',
        },
        {
          question: '威基基最好的咖啡与美食搭配是什么？',
          answer: '一杯顺滑的100%科纳配一个新鲜甜甜圈，是威基基最佳搭配之一——低酸的咖啡能完美平衡甜味。在 Kona Coffee Donut?，你可以让科纳搭配麻糬甜甜圈、马拉萨达、韩式刨冰或韩式热狗，这正是它在咖啡＋小食一站式中名列榜首的原因。',
        },
      ],
    },
    cta: {
      title: '品尝威基基最好的咖啡',
      text: '前往 2142 Kalakaua Ave 的 Kona Coffee Donut?，品尝现冲的正宗100%科纳咖啡，配上温热的甜甜圈——距威基基海滩仅几分钟。',
      menuButton: '查看科纳咖啡菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '威基基最好的咖啡店',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Best Coffee Shops in Waikiki (2026): Where to Get Great Coffee Near the Beach',
  description: 'A ranked guide to the best coffee shops in Waikiki — six top picks compared, why "100% Kona" matters, and where to get real 100% Kona near Waikiki Beach.',
  image: 'https://www.konacoffeedonut.com/images/blog/best-coffee-shops-waikiki.jpeg',
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
  datePublished: '2026-06-25',
  dateModified: '2026-06-25',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/en/blog/best-coffee-shops-waikiki',
  },
  keywords: 'best coffee shops waikiki, best coffee waikiki, coffee shops near me waikiki, best cafe waikiki, where to get coffee in waikiki, 100% kona coffee waikiki',
  wordCount: 1600,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best coffee shop in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most visitors, the best coffee shop in Waikiki is Kona Coffee Donut? on Kalākaua Avenue — it pours real 100% Kona (Honolulu Coffee beans), pairs it with fresh donuts, and is great value and walkable from the beach. Other excellent options include Kona Coffee Purveyors for upscale specialty Kona, Island Vintage Coffee for açaí bowls, and Honolulu Coffee for a classic cafe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I get 100% Kona coffee in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can get real 100% Kona at cafes along Kalākaua Avenue. Kona Coffee Donut? at 2142 Kalakaua Ave pours 100% Kona (Honolulu Coffee beans) hot or iced and is open daily 7AM–9PM. Kona Coffee Purveyors also serves 100% Kona in a more upscale setting. Always check that the menu says "100% Kona" rather than "Kona blend," which only needs about 10% real Kona beans.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the best coffee near Waikiki Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best coffee near Waikiki Beach is along Kalākaua Avenue, the main street running parallel to the sand. Kona Coffee Donut? is about a 5-minute walk from the beach and serves real 100% Kona plus fresh donuts, making it an easy stop before or after a swim. Kai Coffee Hawaii also has convenient locations near the hotels.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Waikiki coffee shops serve real Kona coffee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Several do. Kona Coffee Donut? pours 100% Kona (Honolulu Coffee beans), Kona Coffee Purveyors specializes in 100% Kona, Honolulu Coffee is an established Kona roaster, and Island Vintage Coffee offers Kona coffee too. The key is to confirm "100% Kona" on the menu — a "Kona blend" can be as little as 10% real Kona.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best coffee and food pairing in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A smooth cup of 100% Kona with a fresh donut is one of the best pairings in Waikiki — the low-acid coffee balances the sweetness perfectly. At Kona Coffee Donut?, you can pair Kona with mochi donuts, malasadas, Korean bingsu, or Korean corn dogs, which is exactly why it tops our list for a coffee-plus-treat stop.',
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
      name: 'Best Coffee Shops in Waikiki',
      item: 'https://www.konacoffeedonut.com/en/blog/best-coffee-shops-waikiki',
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

export default function BestCoffeeShopsWaikikiPage() {
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
          src="/images/blog/best-coffee-shops-waikiki.jpeg"
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

        {/* Why 100% Kona Matters */}
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

        {/* Types — The 6 Best Coffee Shops */}
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

        {/* Why Kona Coffee Donut? Tops Our List */}
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

        {/* Where to Visit Us */}
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
              href={`/${locale}/blog/where-to-try-kona-coffee-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Where to Try Kona Coffee in Waikiki
            </Link>
            <Link
              href={`/${locale}/menu/kona-coffee`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Kona Coffee Menu
            </Link>
            <Link
              href={`/${locale}/menu`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Full Menu
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
