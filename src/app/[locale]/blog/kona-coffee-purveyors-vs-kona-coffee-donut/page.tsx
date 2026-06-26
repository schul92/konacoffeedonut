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
      title: 'Kona Coffee Purveyors vs Kona Coffee Donut?',
      subtitle: 'Where to Find the Best 100% Kona Coffee in Waikiki (2026 Guide)',
      updated: 'Updated June 2026',
      readTime: '8 min read',
    },
    definition: {
      title: 'Quick Answer: Which Should You Pick?',
      text: 'Short on time? <strong>Both serve real 100% Kona</strong>, so you genuinely can\'t go wrong. Choose <strong>Kona Coffee Purveyors</strong> at International Market Place for an upscale specialty-coffee experience paired with its renowned b. Patisserie kouign-amann pastries. Choose <strong>Kona Coffee Donut?</strong> at 2142 Kalākaua Ave if you want that same genuine 100% Kona at a friendlier price, <strong>open late until 9PM</strong>, paired with mochi donuts, malasadas, or Korean bingsu — about a 5-minute walk from Waikiki Beach.',
    },
    history: {
      title: 'What "100% Kona" Really Means (vs a Kona Blend)',
      subtitle: 'Why Both of These Cafes Pour the Real Thing',
      p1: 'Kona coffee is one of the rarest premium coffees on earth, grown only on the volcanic slopes of the Big Island\'s North and South Kona districts. This narrow region produces <strong>less than 1% of the world\'s coffee</strong>, which is why genuine Kona is both rare and prized — smooth, naturally low in acidity, with notes of brown sugar and nuts.',
      p2: 'Here\'s the catch most visitors miss: under Hawaii law, a coffee labeled a <strong>"Kona blend" can contain as little as 10% real Kona beans</strong> — the other 90% can be cheaper coffee from anywhere. That\'s why the exact wording matters far more than the price tag. The phrase you want is <strong>"100% Kona."</strong>',
      p3: 'The good news for this comparison: <strong>both Kona Coffee Purveyors and Kona Coffee Donut? serve genuine 100% Kona</strong>, not a blend. Kona Coffee Purveyors is a respected specialty roaster that takes its 100% Kona seriously. Kona Coffee Donut? pours real 100% Kona using Honolulu Coffee\'s Big Island beans. With either, you\'re drinking the authentic article — the choice comes down to experience, pairings, price, and hours.',
      p4: 'And both are best enjoyed <strong>fresh in Waikiki</strong>, at the source islands, rather than from a souvenir bag that\'s been sitting for weeks. A smooth cup of real 100% Kona — whether alongside a flaky kouign-amann or a warm mochi donut — is one of the simplest, most memorable things you can do on a Waikiki morning.',
    },
    comparison: {
      title: 'Kona Coffee Purveyors vs Kona Coffee Donut?',
      subtitle: 'An Honest, Side-by-Side Comparison',
      intro: 'Both cafes are real 100% Kona destinations in Waikiki, just with different personalities. Here\'s a fair, factual look at how they compare so you can pick the one that fits your visit:',
      headers: {
        feature: 'What you\'re comparing',
        bingsu: 'Kona Coffee Purveyors',
        shavedIce: 'Kona Coffee Donut?',
        kakigori: 'Best for',
      },
      rows: [
        {
          feature: 'The coffee',
          bingsu: 'Serious 100% Kona, specialty-roasted',
          shavedIce: '100% Kona (Honolulu Coffee Big Island beans), not a blend',
          kakigori: 'Both — genuine 100% Kona',
        },
        {
          feature: 'Brewing options',
          bingsu: 'Espresso, pour-over & specialty methods',
          shavedIce: 'Drip, Kona latte, cold brew & pour-over',
          kakigori: 'Either, by your style',
        },
        {
          feature: 'Food pairing',
          bingsu: 'Famous b. Patisserie kouign-amann & pastries',
          shavedIce: 'Mochi donuts, malasadas & Korean bingsu',
          kakigori: 'Pastry lovers vs dessert-cafe fans',
        },
        {
          feature: 'Price',
          bingsu: 'Premium',
          shavedIce: 'Friendly value (drip $7, latte $6.35)',
          kakigori: 'Budget-minded: Donut?',
        },
        {
          feature: 'Hours',
          bingsu: 'Daytime café hours',
          shavedIce: 'Open daily 7AM–9PM (late)',
          kakigori: 'Evening coffee: Donut?',
        },
        {
          feature: 'Location',
          bingsu: 'International Market Place, Waikiki',
          shavedIce: '2142 Kalākaua Ave (~5 min from the beach)',
          kakigori: 'Both central in Waikiki',
        },
        {
          feature: 'Vibe',
          bingsu: 'Upscale, specialty-minimal',
          shavedIce: 'Casual, Hawaiian dessert café',
          kakigori: 'Coffee purists vs casual treat',
        },
      ],
      note: 'Bottom line: this isn\'t a "better vs worse" call — both pour authentic 100% Kona. Kona Coffee Purveyors leans upscale specialty-coffee-and-pastry; Kona Coffee Donut? leans casual, affordable, open-late, and dessert-forward. Pick by the moment you\'re in.',
    },
    types: {
      title: 'Why People Love Kona Coffee Donut?',
      subtitle: 'Same Real 100% Kona — With a Few Easy Advantages',
      items: [
        {
          name: 'Real 100% Kona, Your Way',
          korean: 'Drip, latte, cold brew, pour-over',
          description: 'We pour genuine 100% Kona — Honolulu Coffee\'s Big Island beans, not a blend. Order it as fresh drip ($7), a Kona latte ($6.35), Kona cold brew ($6.95), or a single-origin Kona pour-over ($10.95). Smooth, naturally low-acid, hot or iced.',
          icon: '☕',
        },
        {
          name: 'Pair It With Dessert',
          korean: 'Mochi donuts, malasadas, bingsu',
          description: 'Where a specialty café pairs coffee with pastry, we pair our 100% Kona with warm mochi donuts, Portuguese-style malasadas, and Korean bingsu. It\'s a playful, dessert-forward way to enjoy a serious cup of Kona.',
          icon: '🍩',
        },
        {
          name: 'Open Late Until 9PM',
          korean: 'Open daily 7AM–9PM',
          description: 'Most Waikiki coffee spots wind down in the afternoon. We\'re open every day from 7AM to 9PM, so a real 100% Kona — or an evening dessert-and-coffee run after dinner or the beach — is always on the table.',
          icon: '🌙',
        },
        {
          name: 'Friendly Value',
          korean: 'Drip $7 · latte $6.35',
          description: 'Authentic 100% Kona usually comes at a premium. We keep it approachable: fresh Kona drip is $7 and a Kona latte is $6.35, so you can taste the real thing without a splurge — and add a donut for the full Waikiki treat.',
          icon: '💵',
        },
        {
          name: 'Walkable From the Beach',
          korean: '~5 min from Waikiki Beach',
          description: 'We\'re right on Kalākaua Avenue at 2142, about a 5-minute walk from Waikiki Beach. Easy to swing by before a swim, after a stroll, or any time you need a smooth, low-acid cup of the real thing. Multilingual and friendly, too.',
          icon: '🏖️',
        },
      ],
    },
    whyHawaii: {
      title: 'What Makes Kona Coffee Purveyors Special',
      points: [
        {
          title: 'A Serious Specialty Roaster',
          description: 'Kona Coffee Purveyors is a genuinely excellent, highly regarded specialty-coffee company. They take their 100% Kona seriously and present it with the craft and care of a true specialty roaster — if you love thoughtfully prepared coffee, it\'s a destination worth your time.',
        },
        {
          title: 'Famous b. Patisserie Kouign-Amann',
          description: 'Their tie to San Francisco\'s celebrated b. Patisserie means the pastry case is a draw all its own. The caramelized, flaky kouign-amann is a signature, and pairing one with a cup of 100% Kona is a memorable Waikiki experience that\'s hard to replicate elsewhere.',
        },
        {
          title: 'An Upscale Coffee Experience',
          description: 'The vibe is polished and specialty-minimal — the kind of place coffee enthusiasts seek out. You pay a premium, but you\'re getting a refined, carefully crafted cup and a setting built around appreciating great coffee. For a special-occasion coffee stop, it delivers.',
        },
        {
          title: 'Central at International Market Place',
          description: 'Located in International Market Place in the heart of Waikiki, it\'s easy to fold into a day of shopping and sightseeing. If you\'re already exploring that part of Kalākaua, it\'s a natural, convenient stop for a high-quality 100% Kona.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Find Us: Kona Coffee Donut?',
      intro: 'Want genuine 100% Kona at a friendly price, open late, and paired with dessert? Here\'s everything you need to find us.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Right on Kalākaua Avenue in the heart of Waikiki, Kona Coffee Donut? serves real 100% Kona coffee — Honolulu Coffee\'s Big Island beans, not a blend — brewed fresh, hot or iced. Choose from Kona drip ($7), Kona latte ($6.35), Kona cold brew ($6.95), or a single-origin Kona pour-over ($10.95), then pair it with a mochi donut, malasada, or Korean bingsu. We\'re about a 5-minute walk from Waikiki Beach, open daily 7AM–9PM, and easy to reach at (808) 260-1835.',
        highlights: [
          'Real 100% Kona (Honolulu Coffee Big Island beans), not a blend',
          'Drip $7 · Kona latte $6.35 · cold brew $6.95 · pour-over $10.95',
          'Paired with mochi donuts, malasadas & Korean bingsu',
          'Open daily 7AM–9PM · (808) 260-1835 · ~5 min from the beach',
        ],
      },
      cta: 'View Our Kona Coffee Menu',
    },
    howToEat: {
      title: 'How to Choose Between Them',
      subtitle: 'A Few Simple Ways to Decide',
      tips: [
        {
          title: 'Relax — Both Are Genuine 100% Kona',
          description: 'There\'s no wrong answer on the coffee itself. Kona Coffee Purveyors and Kona Coffee Donut? both pour authentic 100% Kona, not a 10%-Kona blend. So decide based on the experience you want, not on which one is "the real Kona" — they both are.',
        },
        {
          title: 'Pick by the Pairing',
          description: 'Craving a flaky, caramelized kouign-amann and a refined specialty cup? Go to Kona Coffee Purveyors. Want your Kona next to a warm mochi donut, a malasada, or shaved-ice bingsu? Kona Coffee Donut? is your spot. The pairing often decides it.',
        },
        {
          title: 'Pick by the Clock',
          description: 'If it\'s late afternoon or evening, hours matter. Kona Coffee Donut? is open until 9PM daily, making it the easy choice for an after-dinner coffee or a dessert run. For a leisurely daytime specialty experience, Purveyors fits the bill.',
        },
        {
          title: 'Taste the Kona Black First',
          description: 'Wherever you land, sip your 100% Kona black before adding milk or sugar. That\'s where its naturally low acidity and smooth, nutty-sweet finish come through — and where you\'ll really appreciate why genuine Kona is worth seeking out.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'Is Kona Coffee Purveyors worth it?',
          answer: 'Yes — Kona Coffee Purveyors is an excellent, highly regarded specialty-coffee company, and it\'s well worth a visit if you love carefully crafted coffee. It serves serious 100% Kona and is famous for its b. Patisserie kouign-amann pastries in an upscale setting at International Market Place. Expect a premium price for a premium experience. If you want that same genuine 100% Kona at a friendlier price and open later, Kona Coffee Donut? is a great alternative.',
        },
        {
          question: 'Where else can I get 100% Kona in Waikiki?',
          answer: 'Beyond Kona Coffee Purveyors, you can get genuine 100% Kona at Kona Coffee Donut?, 2142 Kalākaua Ave, which pours Honolulu Coffee\'s Big Island beans (not a blend) hot or iced and is open daily until 9PM. Several cafés along Kalākaua Avenue also serve real Kona — just look for the exact words "100% Kona" on the menu, since a "Kona blend" can legally be as little as 10% Kona.',
        },
        {
          question: 'What\'s the cheapest 100% Kona in Waikiki?',
          answer: 'Real 100% Kona usually carries a premium, but Kona Coffee Donut? keeps it approachable: a fresh Kona drip is $7 and a Kona latte is $6.35, with cold brew at $6.95 and a single-origin pour-over at $10.95. That makes it one of the friendlier-value ways to drink authentic 100% Kona — not a blend — near Waikiki Beach.',
        },
        {
          question: 'Kona Coffee Purveyors vs Kona Coffee Donut? — which is better?',
          answer: 'Neither is simply "better" — both serve authentic 100% Kona. Kona Coffee Purveyors is the pick for an upscale specialty-coffee experience with celebrated kouign-amann pastries. Kona Coffee Donut? is the pick for the same genuine 100% Kona at a friendlier price, open late until 9PM, paired with mochi donuts, malasadas, or Korean bingsu. Choose by your budget, the pairing you want, and the time of day.',
        },
        {
          question: 'Does Kona Coffee Donut? really serve 100% Kona?',
          answer: 'Yes. Kona Coffee Donut? serves real 100% Kona — Honolulu Coffee\'s Big Island beans, not a 10% "Kona blend." You can order it as fresh drip, a Kona latte, Kona cold brew, or a single-origin Kona pour-over, hot or iced, every day from 7AM to 9PM at 2142 Kalākaua Ave, about 5 minutes from Waikiki Beach.',
        },
      ],
    },
    cta: {
      title: 'Taste Real 100% Kona in Waikiki — Open Late',
      text: 'Visit Kona Coffee Donut? at 2142 Kalakaua Ave for genuine 100% Kona at a friendly price, open daily until 9PM and paired with a warm donut — just minutes from Waikiki Beach.',
      menuButton: 'View Kona Coffee Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'Kona Coffee Purveyors vs Kona Coffee Donut?',
    },
  },
  ja: {
    hero: {
      title: 'Kona Coffee Purveyors vs Kona Coffee Donut?',
      subtitle: 'ワイキキで最高の100%コナコーヒーが飲める場所（2026年版ガイド）',
      updated: '2026年6月更新',
      readTime: '8分で読める',
    },
    definition: {
      title: 'すぐ知りたい方へ：どちらを選ぶ？',
      text: '時間がない方へ。<strong>どちらも本物の100%コナを提供</strong>しているので、外れはありません。<strong>Kona Coffee Purveyors</strong>（インターナショナル マーケットプレイス内）は、名物の b.Patisserie のクイニーアマンと合わせて楽しむ上質なスペシャルティコーヒー体験。一方、<strong>Kona Coffee Donut?</strong>（2142 Kalākaua Ave）は、同じ本物の100%コナをより手頃な価格で、<strong>夜9時まで営業</strong>、モチドーナツ・マラサダ・韓国かき氷ピンスと一緒に——ワイキキビーチから徒歩約5分です。',
    },
    history: {
      title: '「100%コナ」の本当の意味（コナブレンドとの違い）',
      subtitle: 'なぜこの2店はどちらも本物なのか',
      p1: 'コナコーヒーは世界でも有数の希少なプレミアムコーヒーで、ハワイ島の北コナ・南コナ地区の火山斜面でのみ栽培されます。この狭い地域が生産するのは<strong>世界のコーヒーのわずか1%未満</strong>。だからこそ本物のコナは希少で珍重され、まろやかで自然に酸味が低く、黒糖やナッツのような風味を持ちます。',
      p2: '多くの旅行者が見落とす点があります。ハワイの法律では、<strong>「コナブレンド」は本物のコナ豆がわずか10%しか入っていなくても名乗れる</strong>のです——残り90%はどこの安いコーヒーでも構いません。だから値段より表記がはるかに重要。探すべき言葉は<strong>「100% Kona」</strong>です。',
      p3: 'この比較の朗報は、<strong>Kona Coffee Purveyors も Kona Coffee Donut? も本物の100%コナを提供</strong>しており、ブレンドではないこと。Kona Coffee Purveyors は100%コナを真剣に扱う評価の高いスペシャルティロースター。Kona Coffee Donut? はホノルルコーヒーのハワイ島産豆を使い本物の100%コナを淹れます。どちらも本物ですから、選ぶ基準は体験・組み合わせ・価格・営業時間になります。',
      p4: 'そして両店とも、何週間もお土産袋に入ったものではなく、産地であるハワイで<strong>ワイキキで淹れたて</strong>を味わうのが一番。サクサクのクイニーアマンでも温かいモチドーナツでも、まろやかな本物の100%コナの一杯は、ワイキキの朝にできる最もシンプルで思い出深いことのひとつです。',
    },
    comparison: {
      title: 'Kona Coffee Purveyors vs Kona Coffee Donut?',
      subtitle: '正直な、並べての比較',
      intro: 'どちらもワイキキで本物の100%コナが飲めるお店ですが、個性が違います。あなたの過ごし方に合う方を選べるよう、公平で事実に基づいた比較をどうぞ：',
      headers: {
        feature: '比較する項目',
        bingsu: 'Kona Coffee Purveyors',
        shavedIce: 'Kona Coffee Donut?',
        kakigori: 'こんな人に',
      },
      rows: [
        {
          feature: 'コーヒー',
          bingsu: '本格的な100%コナ、スペシャルティ焙煎',
          shavedIce: '100%コナ（ホノルルコーヒーのハワイ島産豆）、ブレンドではない',
          kakigori: 'どちらも本物の100%コナ',
        },
        {
          feature: '抽出方法',
          bingsu: 'エスプレッソ、プアオーバー、スペシャルティ各種',
          shavedIce: 'ドリップ、コナラテ、コールドブリュー、プアオーバー',
          kakigori: 'お好みで両方',
        },
        {
          feature: 'フードの組み合わせ',
          bingsu: '名物 b.Patisserie のクイニーアマン＆ペストリー',
          shavedIce: 'モチドーナツ、マラサダ、韓国かき氷ピンス',
          kakigori: 'ペストリー派 vs デザートカフェ派',
        },
        {
          feature: '価格',
          bingsu: 'プレミアム',
          shavedIce: '手頃（ドリップ$7、ラテ$6.35）',
          kakigori: '節約派：Donut?',
        },
        {
          feature: '営業時間',
          bingsu: '日中のカフェ営業',
          shavedIce: '毎日7AM〜9PM（夜遅くまで）',
          kakigori: '夜のコーヒー：Donut?',
        },
        {
          feature: '場所',
          bingsu: 'インターナショナル マーケットプレイス',
          shavedIce: '2142 Kalākaua Ave（ビーチから徒歩約5分）',
          kakigori: 'どちらもワイキキ中心',
        },
        {
          feature: '雰囲気',
          bingsu: '上質、スペシャルティでミニマル',
          shavedIce: 'カジュアルなハワイアン・デザートカフェ',
          kakigori: 'コーヒー通 vs 気軽なご褒美',
        },
      ],
      note: '結論：これは「優劣」の話ではありません——どちらも本物の100%コナです。Kona Coffee Purveyors は上質なスペシャルティコーヒー＆ペストリー寄り、Kona Coffee Donut? はカジュアルで手頃、夜遅くまで営業しデザートが充実。その時の気分で選びましょう。',
    },
    types: {
      title: 'Kona Coffee Donut? が愛される理由',
      subtitle: '同じ本物の100%コナ——いくつかの嬉しいポイント',
      items: [
        {
          name: '本物の100%コナを好きな形で',
          korean: 'ドリップ、ラテ、コールドブリュー、プアオーバー',
          description: '私たちが淹れるのは本物の100%コナ——ホノルルコーヒーのハワイ島産豆で、ブレンドではありません。淹れたてドリップ（$7）、コナラテ（$6.35）、コナコールドブリュー（$6.95）、シングルオリジンのコナプアオーバー（$10.95）から。まろやかで自然に酸味が低く、ホットでもアイスでも。',
          icon: '☕',
        },
        {
          name: 'デザートと合わせて',
          korean: 'モチドーナツ、マラサダ、ピンス',
          description: 'スペシャルティカフェがコーヒーにペストリーを合わせるのに対し、私たちは100%コナを温かいモチドーナツ、ポルトガル風マラサダ、韓国かき氷ピンスと合わせます。本格的なコナの一杯を、遊び心あるデザート感覚で楽しめます。',
          icon: '🍩',
        },
        {
          name: '夜9時まで営業',
          korean: '毎日7AM〜9PM',
          description: 'ワイキキのコーヒー店の多くは午後に閉まりますが、私たちは毎日午前7時から午後9時まで営業。本物の100%コナはもちろん、ディナーやビーチの後の夜のコーヒー＆デザートもいつでもどうぞ。',
          icon: '🌙',
        },
        {
          name: '手頃な価格',
          korean: 'ドリップ$7・ラテ$6.35',
          description: '本物の100%コナは通常プレミアム価格になりがち。でも私たちは手の届く価格に——淹れたてコナドリップは$7、コナラテは$6.35。奮発しなくても本物を味わえます。ドーナツを添えれば完璧なワイキキのご褒美に。',
          icon: '💵',
        },
        {
          name: 'ビーチから歩いて',
          korean: 'ワイキキビーチから徒歩約5分',
          description: 'カラカウア通り2142番地、ワイキキビーチから徒歩約5分。泳ぐ前、散歩の後、まろやかで酸味の低い本物の一杯が欲しい時に気軽に立ち寄れます。多言語対応でフレンドリーです。',
          icon: '🏖️',
        },
      ],
    },
    whyHawaii: {
      title: 'Kona Coffee Purveyors の魅力',
      points: [
        {
          title: '本格的なスペシャルティロースター',
          description: 'Kona Coffee Purveyors は本当に優れた、評価の高いスペシャルティコーヒー店です。100%コナを真剣に扱い、真のスペシャルティロースターの技と心で提供します。丁寧に淹れたコーヒーが好きなら、足を運ぶ価値のあるお店です。',
        },
        {
          title: '名物 b.Patisserie のクイニーアマン',
          description: 'サンフランシスコの名店 b.Patisserie とのつながりから、ペストリーケースそのものが大きな魅力。キャラメリゼされたサクサクのクイニーアマンは看板メニューで、100%コナと合わせれば、他では味わえない思い出深いワイキキ体験になります。',
        },
        {
          title: '上質なコーヒー体験',
          description: '雰囲気は洗練されたスペシャルティでミニマル——コーヒー愛好家が探し求める種類のお店です。価格はプレミアムですが、丁寧に作られた一杯と、素晴らしいコーヒーを味わうための空間が手に入ります。特別な日のコーヒーにぴったりです。',
        },
        {
          title: 'インターナショナル マーケットプレイスの中心地',
          description: 'ワイキキ中心部のインターナショナル マーケットプレイス内にあり、ショッピングや観光の合間に立ち寄りやすい立地。そのあたりのカラカウアを散策中なら、上質な100%コナを楽しむ自然で便利な一軒です。',
        },
      ],
    },
    whereToGet: {
      title: '私たちのお店：Kona Coffee Donut?',
      intro: '本物の100%コナを手頃な価格で、夜遅くまで、デザートと一緒に楽しみたいなら。お店の情報をすべてご紹介します。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心、カラカウア通り沿いの Kona Coffee Donut? は、本物の100%コナコーヒーを提供——ホノルルコーヒーのハワイ島産豆で、ブレンドではありません。ホットでもアイスでも淹れたてで。コナドリップ（$7）、コナラテ（$6.35）、コナコールドブリュー（$6.95）、シングルオリジンのコナプアオーバー（$10.95）から選び、モチドーナツやマラサダ、韓国かき氷ピンスと合わせて。ワイキキビーチから徒歩約5分、毎日7AM〜9PM営業、お電話は (808) 260-1835。',
        highlights: [
          '本物の100%コナ（ホノルルコーヒーのハワイ島産豆）、ブレンドではない',
          'ドリップ$7・コナラテ$6.35・コールドブリュー$6.95・プアオーバー$10.95',
          'モチドーナツ、マラサダ、韓国かき氷ピンスと一緒に',
          '毎日7AM〜9PM営業・(808) 260-1835・ビーチから約5分',
        ],
      },
      cta: 'コナコーヒーメニューを見る',
    },
    howToEat: {
      title: 'どちらを選ぶか',
      subtitle: '決めるための簡単なヒント',
      tips: [
        {
          title: 'ご安心を——どちらも本物の100%コナ',
          description: 'コーヒー自体に外れはありません。Kona Coffee Purveyors も Kona Coffee Donut? も、10%コナブレンドではなく本物の100%コナを提供します。だから「どちらが本物のコナか」ではなく、欲しい体験で選んでください——どちらも本物です。',
        },
        {
          title: '組み合わせで選ぶ',
          description: 'サクサクでキャラメリゼされたクイニーアマンと洗練された一杯が欲しいなら Kona Coffee Purveyors。温かいモチドーナツ、マラサダ、かき氷ピンスと一緒なら Kona Coffee Donut?。組み合わせで決まることが多いです。',
        },
        {
          title: '時間帯で選ぶ',
          description: '午後遅くや夜なら、営業時間が重要。Kona Coffee Donut? は毎日夜9時まで営業なので、食後のコーヒーやデザートに最適です。日中ゆったりスペシャルティ体験を楽しむなら Purveyors がぴったり。',
        },
        {
          title: 'まずコナをブラックで',
          description: 'どちらを選んでも、ミルクや砂糖を加える前に100%コナをブラックでひと口。そこで自然な酸味の低さと、まろやかでナッツのような甘い後味が現れます。本物のコナを探す価値を本当に実感できる瞬間です。',
        },
      ],
    },
    faq: {
      title: 'よくある質問',
      items: [
        {
          question: 'Kona Coffee Purveyors は行く価値がある？',
          answer: 'はい——Kona Coffee Purveyors は本当に優れた、評価の高いスペシャルティコーヒー店で、丁寧に淹れたコーヒーが好きなら訪れる価値が十分にあります。本格的な100%コナを提供し、インターナショナル マーケットプレイスの上質な空間で名物 b.Patisserie のクイニーアマンが楽しめます。プレミアムな体験にはプレミアムな価格が伴います。同じ本物の100%コナをより手頃な価格で、より遅くまで楽しみたいなら、Kona Coffee Donut? が良い代替案です。',
        },
        {
          question: 'ワイキキで他に100%コナが飲める場所は？',
          answer: 'Kona Coffee Purveyors のほか、2142 Kalākaua Ave の Kona Coffee Donut? でも本物の100%コナが飲めます。ホノルルコーヒーのハワイ島産豆（ブレンドではない）をホットでもアイスでも提供し、毎日夜9時まで営業。カラカウア通り沿いの他のカフェでも本物のコナが飲めます——ただしメニューに正確に「100% Kona」と書かれているか確認を。「コナブレンド」は法律上わずか10%のコナでも名乗れます。',
        },
        {
          question: 'ワイキキで一番安い100%コナは？',
          answer: '本物の100%コナは通常プレミアム価格ですが、Kona Coffee Donut? は手の届く価格を保っています——淹れたてコナドリップは$7、コナラテは$6.35、コールドブリューは$6.95、シングルオリジンのプアオーバーは$10.95。ワイキキビーチ近くで本物の100%コナ（ブレンドではない）を飲む、最も手頃な方法のひとつです。',
        },
        {
          question: 'Kona Coffee Purveyors と Kona Coffee Donut?、どちらが良い？',
          answer: 'どちらが単純に「良い」ということはありません——どちらも本物の100%コナです。Kona Coffee Purveyors は、名高いクイニーアマンと共に上質なスペシャルティコーヒー体験を求める方向け。Kona Coffee Donut? は、同じ本物の100%コナをより手頃な価格で、夜9時まで営業、モチドーナツやマラサダ、韓国かき氷ピンスと一緒に楽しみたい方向け。予算、欲しい組み合わせ、時間帯で選んでください。',
        },
        {
          question: 'Kona Coffee Donut? は本当に100%コナ？',
          answer: 'はい。Kona Coffee Donut? は本物の100%コナを提供します——ホノルルコーヒーのハワイ島産豆で、10%の「コナブレンド」ではありません。淹れたてドリップ、コナラテ、コナコールドブリュー、シングルオリジンのコナプアオーバーとして、ホットでもアイスでも、毎日午前7時から午後9時まで、2142 Kalākaua Ave（ワイキキビーチから約5分）でどうぞ。',
        },
      ],
    },
    cta: {
      title: 'ワイキキで本物の100%コナを——夜遅くまで',
      text: '2142 Kalakaua Ave の Kona Coffee Donut? へ。本物の100%コナを手頃な価格で、毎日夜9時まで営業、温かいドーナツと一緒に——ワイキキビーチからわずか数分です。',
      menuButton: 'コナコーヒーメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'Kona Coffee Purveyors vs Kona Coffee Donut?',
    },
  },
  ko: {
    hero: {
      title: 'Kona Coffee Purveyors vs Kona Coffee Donut?',
      subtitle: '와이키키에서 최고의 100% 코나 커피를 찾을 수 있는 곳 (2026 가이드)',
      updated: '2026년 6월 업데이트',
      readTime: '8분 소요',
    },
    definition: {
      title: '빠른 결론: 어디를 골라야 할까?',
      text: '시간이 없으신가요? <strong>두 곳 모두 진짜 100% 코나</strong>를 제공하니 어느 쪽이든 후회는 없습니다. <strong>Kona Coffee Purveyors</strong>(인터내셔널 마켓플레이스)는 명물 b.Patisserie 쿠인아망 페이스트리와 함께 즐기는 고급 스페셜티 커피 경험. <strong>Kona Coffee Donut?</strong>(2142 Kalākaua Ave)는 같은 진짜 100% 코나를 더 합리적인 가격에, <strong>밤 9시까지 영업</strong>, 모찌 도넛·말라사다·한국식 빙수와 함께 — 와이키키 해변에서 도보 약 5분입니다.',
    },
    history: {
      title: '"100% 코나"의 진짜 의미 (코나 블렌드와의 차이)',
      subtitle: '왜 이 두 카페 모두 진짜를 내리는가',
      p1: '코나 커피는 지구상에서 가장 희귀한 프리미엄 커피 중 하나로, 빅아일랜드의 북코나·남코나 지역 화산 경사면에서만 재배됩니다. 이 좁은 지역의 생산량은 <strong>전 세계 커피의 1% 미만</strong>. 그래서 진짜 코나는 희귀하고 귀하며, 부드럽고 자연스럽게 산미가 낮고 흑설탕과 견과류 같은 풍미를 지닙니다.',
      p2: '많은 여행자가 놓치는 점이 있습니다. 하와이 법상 <strong>"코나 블렌드"는 진짜 코나 원두가 단 10%만 들어가도</strong> 그 이름을 붙일 수 있습니다 — 나머지 90%는 어디서 온 저렴한 커피든 상관없죠. 그래서 가격보다 표기가 훨씬 중요합니다. 찾아야 할 문구는 <strong>"100% Kona"</strong>입니다.',
      p3: '이 비교의 좋은 소식: <strong>Kona Coffee Purveyors와 Kona Coffee Donut? 모두 블렌드가 아닌 진짜 100% 코나를 제공</strong>합니다. Kona Coffee Purveyors는 100% 코나를 진지하게 다루는 평판 좋은 스페셜티 로스터입니다. Kona Coffee Donut?는 호놀룰루 커피의 빅아일랜드 원두로 진짜 100% 코나를 내립니다. 어느 쪽이든 진짜를 마시는 셈이니, 선택은 경험·페어링·가격·영업시간으로 갈립니다.',
      p4: '그리고 두 곳 모두, 몇 주씩 기념품 봉지에 담겨 있던 게 아니라 원산지인 하와이에서 <strong>와이키키에서 갓 내린</strong> 걸로 즐기는 게 최고입니다. 바삭한 쿠인아망이든 따뜻한 모찌 도넛이든, 부드러운 진짜 100% 코나 한 잔은 와이키키 아침에 할 수 있는 가장 단순하고 기억에 남는 일 중 하나입니다.',
    },
    comparison: {
      title: 'Kona Coffee Purveyors vs Kona Coffee Donut?',
      subtitle: '솔직한 1:1 비교',
      intro: '두 곳 모두 와이키키의 진짜 100% 코나 명소지만 개성이 다릅니다. 당신의 방문에 맞는 곳을 고를 수 있도록 공정하고 사실에 근거한 비교를 정리했습니다:',
      headers: {
        feature: '비교 항목',
        bingsu: 'Kona Coffee Purveyors',
        shavedIce: 'Kona Coffee Donut?',
        kakigori: '이런 분께',
      },
      rows: [
        {
          feature: '커피',
          bingsu: '진지한 100% 코나, 스페셜티 로스팅',
          shavedIce: '100% 코나(호놀룰루 커피 빅아일랜드 원두), 블렌드 아님',
          kakigori: '둘 다 진짜 100% 코나',
        },
        {
          feature: '추출 옵션',
          bingsu: '에스프레소, 푸어오버, 스페셜티 방식',
          shavedIce: '드립, 코나 라테, 콜드브루, 푸어오버',
          kakigori: '취향대로 양쪽',
        },
        {
          feature: '음식 페어링',
          bingsu: '명물 b.Patisserie 쿠인아망 & 페이스트리',
          shavedIce: '모찌 도넛, 말라사다, 한국식 빙수',
          kakigori: '페이스트리파 vs 디저트카페파',
        },
        {
          feature: '가격',
          bingsu: '프리미엄',
          shavedIce: '합리적 (드립 $7, 라테 $6.35)',
          kakigori: '가성비: Donut?',
        },
        {
          feature: '영업시간',
          bingsu: '낮 시간 카페 운영',
          shavedIce: '매일 7AM–9PM (늦게까지)',
          kakigori: '저녁 커피: Donut?',
        },
        {
          feature: '위치',
          bingsu: '인터내셔널 마켓플레이스, 와이키키',
          shavedIce: '2142 Kalākaua Ave (해변에서 약 5분)',
          kakigori: '둘 다 와이키키 중심',
        },
        {
          feature: '분위기',
          bingsu: '고급스럽고 스페셜티 미니멀',
          shavedIce: '캐주얼한 하와이안 디저트 카페',
          kakigori: '커피 애호가 vs 가벼운 호사',
        },
      ],
      note: '결론: 이건 "어디가 더 나은가"의 문제가 아닙니다 — 두 곳 다 진짜 100% 코나입니다. Kona Coffee Purveyors는 고급 스페셜티 커피·페이스트리 쪽, Kona Coffee Donut?는 캐주얼하고 합리적이며 늦게까지 영업하고 디저트가 풍성한 쪽. 그 순간의 기분으로 고르세요.',
    },
    types: {
      title: '사람들이 Kona Coffee Donut?를 좋아하는 이유',
      subtitle: '같은 진짜 100% 코나 — 몇 가지 편한 장점과 함께',
      items: [
        {
          name: '진짜 100% 코나를 원하는 방식으로',
          korean: '드립, 라테, 콜드브루, 푸어오버',
          description: '저희가 내리는 건 진짜 100% 코나 — 호놀룰루 커피의 빅아일랜드 원두이며 블렌드가 아닙니다. 갓 내린 드립($7), 코나 라테($6.35), 코나 콜드브루($6.95), 싱글 오리진 코나 푸어오버($10.95) 중에서. 부드럽고 자연스럽게 산미가 낮으며 핫이든 아이스든.',
          icon: '☕',
        },
        {
          name: '디저트와 함께',
          korean: '모찌 도넛, 말라사다, 빙수',
          description: '스페셜티 카페가 커피에 페이스트리를 곁들인다면, 저희는 100% 코나에 따뜻한 모찌 도넛, 포르투갈식 말라사다, 한국식 빙수를 곁들입니다. 진지한 코나 한 잔을 즐거운 디저트 감성으로 즐기는 방법이죠.',
          icon: '🍩',
        },
        {
          name: '밤 9시까지 영업',
          korean: '매일 7AM–9PM',
          description: '와이키키 커피숍 대부분은 오후에 문을 닫습니다. 저희는 매일 오전 7시부터 밤 9시까지 영업하니, 진짜 100% 코나는 물론 저녁 식사나 해변 후의 커피·디저트도 언제든 가능합니다.',
          icon: '🌙',
        },
        {
          name: '합리적인 가격',
          korean: '드립 $7 · 라테 $6.35',
          description: '진짜 100% 코나는 보통 프리미엄 가격이 붙습니다. 저희는 부담 없게 유지합니다 — 갓 내린 코나 드립 $7, 코나 라테 $6.35. 무리하지 않고 진짜를 맛볼 수 있고, 도넛을 더하면 완벽한 와이키키 호사가 됩니다.',
          icon: '💵',
        },
        {
          name: '해변에서 걸어서',
          korean: '와이키키 해변에서 약 5분',
          description: '칼라카우아 애비뉴 2142번지, 와이키키 해변에서 도보 약 5분. 수영 전, 산책 후, 부드럽고 산미 낮은 진짜 한 잔이 필요할 때 가볍게 들르기 좋습니다. 다국어 응대에 친절합니다.',
          icon: '🏖️',
        },
      ],
    },
    whyHawaii: {
      title: 'Kona Coffee Purveyors의 특별함',
      points: [
        {
          title: '진지한 스페셜티 로스터',
          description: 'Kona Coffee Purveyors는 정말로 훌륭하고 평판 높은 스페셜티 커피 회사입니다. 100% 코나를 진지하게 다루며 진정한 스페셜티 로스터의 기술과 정성으로 선보입니다. 정성껏 내린 커피를 좋아한다면 시간을 들일 가치가 있는 곳입니다.',
        },
        {
          title: '명물 b.Patisserie 쿠인아망',
          description: '샌프란시스코의 유명한 b.Patisserie와의 인연 덕에 페이스트리 진열대 자체가 큰 매력입니다. 캐러멜라이즈된 바삭한 쿠인아망은 시그니처이고, 100% 코나 한 잔과 곁들이면 다른 곳에서 재현하기 어려운 기억에 남는 와이키키 경험이 됩니다.',
        },
        {
          title: '고급스러운 커피 경험',
          description: '분위기는 세련되고 스페셜티 미니멀 — 커피 애호가들이 찾는 종류의 공간입니다. 가격은 프리미엄이지만, 정교하게 만든 한 잔과 훌륭한 커피를 음미하기 위해 설계된 공간을 얻습니다. 특별한 날의 커피라면 충분히 만족스럽습니다.',
        },
        {
          title: '인터내셔널 마켓플레이스 중심',
          description: '와이키키 중심부 인터내셔널 마켓플레이스에 위치해 쇼핑과 관광 사이에 들르기 좋습니다. 이미 그쪽 칼라카우아를 둘러보는 중이라면, 고품질 100% 코나를 즐기기에 자연스럽고 편리한 한 곳입니다.',
        },
      ],
    },
    whereToGet: {
      title: '저희 매장: Kona Coffee Donut?',
      intro: '진짜 100% 코나를 합리적인 가격에, 늦게까지, 디저트와 함께 즐기고 싶으신가요? 찾아오시는 데 필요한 모든 정보를 드립니다.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키 중심 칼라카우아 애비뉴에 자리한 Kona Coffee Donut?는 진짜 100% 코나 커피를 제공합니다 — 호놀룰루 커피의 빅아일랜드 원두이며 블렌드가 아닙니다. 핫이든 아이스든 갓 내려 드리죠. 코나 드립($7), 코나 라테($6.35), 코나 콜드브루($6.95), 싱글 오리진 코나 푸어오버($10.95) 중에서 고르고, 모찌 도넛·말라사다·한국식 빙수와 함께. 와이키키 해변에서 도보 약 5분, 매일 7AM–9PM 영업, 전화 (808) 260-1835.',
        highlights: [
          '진짜 100% 코나(호놀룰루 커피 빅아일랜드 원두), 블렌드 아님',
          '드립 $7 · 코나 라테 $6.35 · 콜드브루 $6.95 · 푸어오버 $10.95',
          '모찌 도넛, 말라사다, 한국식 빙수와 함께',
          '매일 7AM–9PM · (808) 260-1835 · 해변에서 약 5분',
        ],
      },
      cta: '코나 커피 메뉴 보기',
    },
    howToEat: {
      title: '어떻게 고를까',
      subtitle: '결정을 돕는 간단한 방법',
      tips: [
        {
          title: '안심하세요 — 둘 다 진짜 100% 코나',
          description: '커피 자체에는 틀린 선택이 없습니다. Kona Coffee Purveyors와 Kona Coffee Donut? 모두 10% 코나 블렌드가 아닌 진짜 100% 코나를 내립니다. 그러니 "어디가 진짜 코나냐"가 아니라 원하는 경험으로 정하세요 — 둘 다 진짜입니다.',
        },
        {
          title: '페어링으로 고르기',
          description: '바삭하고 캐러멜라이즈된 쿠인아망과 세련된 한 잔이 당긴다면 Kona Coffee Purveyors. 코나를 따뜻한 모찌 도넛, 말라사다, 빙수와 함께라면 Kona Coffee Donut?. 페어링이 결정을 내려주는 경우가 많습니다.',
        },
        {
          title: '시간대로 고르기',
          description: '늦은 오후나 저녁이라면 영업시간이 중요합니다. Kona Coffee Donut?는 매일 밤 9시까지 영업해 식후 커피나 디저트 나들이에 안성맞춤. 낮에 여유로운 스페셜티 경험을 원한다면 Purveyors가 제격입니다.',
        },
        {
          title: '코나를 먼저 블랙으로',
          description: '어디로 가든, 우유나 설탕을 넣기 전에 100% 코나를 블랙으로 한 모금. 거기서 자연스럽게 낮은 산미와 부드럽고 고소한 단 끝맛이 드러납니다 — 진짜 코나를 찾을 가치가 있는 이유를 제대로 느끼게 되죠.',
        },
      ],
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        {
          question: 'Kona Coffee Purveyors는 갈 만한가요?',
          answer: '네 — Kona Coffee Purveyors는 정말 훌륭하고 평판 높은 스페셜티 커피 회사로, 정성껏 내린 커피를 좋아한다면 방문할 가치가 충분합니다. 진지한 100% 코나를 제공하며, 인터내셔널 마켓플레이스의 고급스러운 공간에서 명물 b.Patisserie 쿠인아망으로 유명합니다. 프리미엄 경험에는 프리미엄 가격이 따릅니다. 같은 진짜 100% 코나를 더 합리적인 가격에, 더 늦게까지 즐기고 싶다면 Kona Coffee Donut?가 좋은 대안입니다.',
        },
        {
          question: '와이키키에서 100% 코나를 또 어디서 마실 수 있나요?',
          answer: 'Kona Coffee Purveyors 외에도, 2142 Kalākaua Ave의 Kona Coffee Donut?에서 진짜 100% 코나를 마실 수 있습니다. 호놀룰루 커피의 빅아일랜드 원두(블렌드 아님)를 핫이든 아이스든 제공하고 매일 밤 9시까지 영업합니다. 칼라카우아 애비뉴의 여러 카페도 진짜 코나를 내립니다 — 다만 메뉴에 정확히 "100% Kona"라고 적혀 있는지 확인하세요. "코나 블렌드"는 법적으로 코나가 10%만 들어가도 됩니다.',
        },
        {
          question: '와이키키에서 가장 저렴한 100% 코나는?',
          answer: '진짜 100% 코나는 보통 프리미엄 가격이지만, Kona Coffee Donut?는 부담 없게 유지합니다 — 갓 내린 코나 드립 $7, 코나 라테 $6.35, 콜드브루 $6.95, 싱글 오리진 푸어오버 $10.95. 와이키키 해변 근처에서 진짜 100% 코나(블렌드 아님)를 마시는 가장 합리적인 방법 중 하나입니다.',
        },
        {
          question: 'Kona Coffee Purveyors와 Kona Coffee Donut?, 어디가 더 나은가요?',
          answer: '어느 쪽도 단순히 "더 낫다"고 할 수 없습니다 — 둘 다 진짜 100% 코나입니다. Kona Coffee Purveyors는 유명한 쿠인아망과 함께 고급 스페셜티 커피 경험을 원하는 분께. Kona Coffee Donut?는 같은 진짜 100% 코나를 더 합리적인 가격에, 밤 9시까지 영업하며 모찌 도넛·말라사다·한국식 빙수와 함께 즐기고 싶은 분께. 예산, 원하는 페어링, 시간대로 고르세요.',
        },
        {
          question: 'Kona Coffee Donut?는 정말 100% 코나인가요?',
          answer: '네. Kona Coffee Donut?는 진짜 100% 코나를 제공합니다 — 호놀룰루 커피의 빅아일랜드 원두이며 10% "코나 블렌드"가 아닙니다. 갓 내린 드립, 코나 라테, 코나 콜드브루, 싱글 오리진 코나 푸어오버로, 핫이든 아이스든, 매일 오전 7시부터 밤 9시까지, 2142 Kalākaua Ave(와이키키 해변에서 약 5분)에서 즐기세요.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 진짜 100% 코나를 — 늦게까지',
      text: '2142 Kalakaua Ave의 Kona Coffee Donut?에 들러 진짜 100% 코나를 합리적인 가격에, 매일 밤 9시까지 영업, 따뜻한 도넛과 함께 즐겨보세요 — 와이키키 해변에서 단 몇 분 거리입니다.',
      menuButton: '코나 커피 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: 'Kona Coffee Purveyors vs Kona Coffee Donut?',
    },
  },
  zh: {
    hero: {
      title: 'Kona Coffee Purveyors vs Kona Coffee Donut?',
      subtitle: '在威基基找到最好的100%科纳咖啡的地方（2026指南）',
      updated: '2026年6月更新',
      readTime: '阅读约8分钟',
    },
    definition: {
      title: '快速结论：该选哪家？',
      text: '时间不多？<strong>两家都提供正宗100%科纳</strong>，所以怎么选都不会错。想要高档的精品咖啡体验、再配上招牌的 b.Patisserie 焦糖酥（kouign-amann），就去国际市场（International Market Place）的 <strong>Kona Coffee Purveyors</strong>。想以更亲民的价格喝到同样正宗的100%科纳、<strong>营业到晚上9点</strong>，还能搭配麻糬甜甜圈、马拉萨达或韩式刨冰（bingsu），就来 <strong>Kona Coffee Donut?</strong>（2142 Kalākaua Ave）——距威基基海滩步行约5分钟。',
    },
    history: {
      title: '"100%科纳"到底是什么意思（与科纳混合的区别）',
      subtitle: '为什么这两家都是货真价实',
      p1: '科纳咖啡是地球上最稀有的优质咖啡之一，只生长在大岛北科纳和南科纳产区的火山斜坡上。这片狭窄的区域产量<strong>不到全球咖啡的1%</strong>，这正是正宗科纳既稀有又珍贵的原因——顺滑、天然低酸，带有红糖和坚果的香气。',
      p2: '多数游客忽略的关键在于：按夏威夷法律，标着<strong>"科纳混合（Kona blend）"的咖啡只需含10%真正的科纳豆</strong>即可——其余90%可以是任何地方的廉价咖啡。所以字眼远比价格重要。你要找的词是<strong>"100% Kona"</strong>。',
      p3: '这次比较的好消息是：<strong>Kona Coffee Purveyors 和 Kona Coffee Donut? 都提供正宗的100%科纳</strong>，而非混合。Kona Coffee Purveyors 是一家备受推崇、认真对待100%科纳的精品烘焙商。Kona Coffee Donut? 使用檀香山咖啡（Honolulu Coffee）的大岛豆，冲煮正宗的100%科纳。无论哪家，你喝到的都是真品——选择只取决于体验、搭配、价格和营业时间。',
      p4: '而且两家都最适合在原产岛屿、在<strong>威基基现冲现喝</strong>，而不是从放了几周的纪念品袋里取出。一杯顺滑的正宗100%科纳——无论是配一块酥脆的焦糖酥，还是一个温热的麻糬甜甜圈——都是威基基清晨最简单也最难忘的享受之一。',
    },
    comparison: {
      title: 'Kona Coffee Purveyors vs Kona Coffee Donut?',
      subtitle: '诚实的并排比较',
      intro: '两家都是威基基真正的100%科纳去处，只是个性不同。下面是一份公平、基于事实的对比，帮你挑出更适合此行的一家：',
      headers: {
        feature: '比较项目',
        bingsu: 'Kona Coffee Purveyors',
        shavedIce: 'Kona Coffee Donut?',
        kakigori: '适合谁',
      },
      rows: [
        {
          feature: '咖啡',
          bingsu: '认真的100%科纳，精品烘焙',
          shavedIce: '100%科纳（檀香山咖啡大岛豆），非混合',
          kakigori: '两者都是正宗100%科纳',
        },
        {
          feature: '冲煮方式',
          bingsu: '浓缩、手冲及精品方法',
          shavedIce: '滴滤、科纳拿铁、冷萃、手冲',
          kakigori: '随你喜好，皆可',
        },
        {
          feature: '食物搭配',
          bingsu: '招牌 b.Patisserie 焦糖酥及糕点',
          shavedIce: '麻糬甜甜圈、马拉萨达、韩式刨冰',
          kakigori: '糕点派 vs 甜品咖啡馆派',
        },
        {
          feature: '价格',
          bingsu: '高档',
          shavedIce: '亲民（滴滤$7，拿铁$6.35）',
          kakigori: '讲究性价比：Donut?',
        },
        {
          feature: '营业时间',
          bingsu: '白天咖啡馆营业',
          shavedIce: '每天7AM–9PM（到晚上）',
          kakigori: '晚间咖啡：Donut?',
        },
        {
          feature: '位置',
          bingsu: '国际市场，威基基',
          shavedIce: '2142 Kalākaua Ave（距海滩约5分钟）',
          kakigori: '两家都在威基基中心',
        },
        {
          feature: '氛围',
          bingsu: '高档、精品极简',
          shavedIce: '休闲的夏威夷甜品咖啡馆',
          kakigori: '咖啡纯粹派 vs 随性小享受',
        },
      ],
      note: '结论：这不是"谁更好"的问题——两家都提供正宗100%科纳。Kona Coffee Purveyors 偏向高档的精品咖啡与糕点；Kona Coffee Donut? 偏向休闲、实惠、营业到晚、甜品丰富。按你当下的心情来选。',
    },
    types: {
      title: '人们为何喜欢 Kona Coffee Donut?',
      subtitle: '同样正宗的100%科纳——再加几个贴心优势',
      items: [
        {
          name: '正宗100%科纳，随你喜欢',
          korean: '滴滤、拿铁、冷萃、手冲',
          description: '我们冲的是正宗100%科纳——檀香山咖啡的大岛豆，而非混合。可选现冲滴滤（$7）、科纳拿铁（$6.35）、科纳冷萃（$6.95）或单一产地科纳手冲（$10.95）。顺滑、天然低酸，冷热皆可。',
          icon: '☕',
        },
        {
          name: '与甜品搭配',
          korean: '麻糬甜甜圈、马拉萨达、刨冰',
          description: '精品咖啡馆把咖啡配糕点，我们则把100%科纳配上温热的麻糬甜甜圈、葡式马拉萨达和韩式刨冰。这是一种俏皮、以甜品为主角的方式来享受一杯认真的科纳。',
          icon: '🍩',
        },
        {
          name: '营业到晚上9点',
          korean: '每天7AM–9PM',
          description: '威基基大多数咖啡店午后就打烊了。我们每天从早上7点开到晚上9点，所以无论是正宗100%科纳，还是晚餐或海滩后的咖啡加甜品，随时都行。',
          icon: '🌙',
        },
        {
          name: '亲民价格',
          korean: '滴滤$7 · 拿铁$6.35',
          description: '正宗100%科纳通常价格偏高。我们让它触手可及：现冲科纳滴滤$7，科纳拿铁$6.35，不必破费就能尝到真品——再加个甜甜圈，就是完整的威基基享受。',
          icon: '💵',
        },
        {
          name: '从海滩步行可达',
          korean: '距威基基海滩约5分钟',
          description: '我们就在卡拉卡瓦大道2142号，距威基基海滩步行约5分钟。下海前、散步后，或任何想来一杯顺滑低酸真品的时刻都能顺路一停。还提供多语言服务，热情友好。',
          icon: '🏖️',
        },
      ],
    },
    whyHawaii: {
      title: 'Kona Coffee Purveyors 的特别之处',
      points: [
        {
          title: '认真的精品烘焙商',
          description: 'Kona Coffee Purveyors 是一家真正出色、备受推崇的精品咖啡公司。他们认真对待100%科纳，以真正精品烘焙商的工艺和用心呈现。如果你热爱用心冲煮的咖啡，这里值得你花时间专程一访。',
        },
        {
          title: '招牌 b.Patisserie 焦糖酥',
          description: '与旧金山著名的 b.Patisserie 的渊源，让它的糕点柜本身就是一大看点。焦糖化、层层酥脆的焦糖酥是招牌，配上一杯100%科纳，会成为一段别处难以复制的难忘威基基体验。',
        },
        {
          title: '高档的咖啡体验',
          description: '氛围精致、精品极简——正是咖啡爱好者会专程寻找的那种地方。价格偏高，但你换来的是一杯精心制作的咖啡，以及为品味好咖啡而打造的空间。作为特别场合的咖啡之选，它名副其实。',
        },
        {
          title: '坐落于国际市场中心',
          description: '位于威基基中心地段的国际市场内，很容易融入逛街观光的一天。如果你正好在那一带的卡拉卡瓦闲逛，这里是顺路享用高品质100%科纳的自然又便利之选。',
        },
      ],
    },
    whereToGet: {
      title: '找到我们：Kona Coffee Donut?',
      intro: '想以亲民价格喝到正宗100%科纳，营业到晚，还能搭配甜品？这里有你找到我们所需的一切。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '就在威基基中心地段的卡拉卡瓦大道上，Kona Coffee Donut? 提供正宗100%科纳咖啡——檀香山咖啡的大岛豆，而非混合——冷热皆现冲现做。可从科纳滴滤（$7）、科纳拿铁（$6.35）、科纳冷萃（$6.95）或单一产地科纳手冲（$10.95）中挑选，再配上麻糬甜甜圈、马拉萨达或韩式刨冰。我们距威基基海滩步行约5分钟，每天7AM–9PM营业，电话 (808) 260-1835。',
        highlights: [
          '正宗100%科纳（檀香山咖啡大岛豆），非混合',
          '滴滤$7 · 科纳拿铁$6.35 · 冷萃$6.95 · 手冲$10.95',
          '搭配麻糬甜甜圈、马拉萨达与韩式刨冰',
          '每天7AM–9PM · (808) 260-1835 · 距海滩约5分钟',
        ],
      },
      cta: '查看我们的科纳咖啡菜单',
    },
    howToEat: {
      title: '如何在两者之间选择',
      subtitle: '几个简单的决定方法',
      tips: [
        {
          title: '放心——两家都是正宗100%科纳',
          description: '在咖啡本身上没有错误答案。Kona Coffee Purveyors 和 Kona Coffee Donut? 都冲的是正宗100%科纳，而非10%科纳的混合。所以请按你想要的体验来定，而不是纠结"哪家才是真科纳"——两家都是。',
        },
        {
          title: '按搭配来选',
          description: '想要酥脆焦糖化的焦糖酥配一杯精致咖啡？去 Kona Coffee Purveyors。想让科纳搭配温热的麻糬甜甜圈、马拉萨达或刨冰？Kona Coffee Donut? 就是你的去处。搭配往往就能帮你做决定。',
        },
        {
          title: '按时间来选',
          description: '如果是傍晚或晚上，营业时间就很关键。Kona Coffee Donut? 每天营业到晚上9点，是餐后咖啡或甜品之行的省心之选。若想悠闲地享受白天的精品体验，Purveyors 正合适。',
        },
        {
          title: '先纯黑品尝科纳',
          description: '无论去哪家，加奶加糖前先纯黑啜一口100%科纳。那里能尝到它天然的低酸和顺滑、坚果般的甜尾韵——你也会真正体会到为何正宗科纳值得专程寻味。',
        },
      ],
    },
    faq: {
      title: '常见问题',
      items: [
        {
          question: 'Kona Coffee Purveyors 值得去吗？',
          answer: '值得——Kona Coffee Purveyors 是一家真正出色、备受推崇的精品咖啡公司，如果你热爱用心冲煮的咖啡，非常值得一访。它提供认真的100%科纳，并以国际市场内高档环境中的招牌 b.Patisserie 焦糖酥闻名。高档体验自然伴随高档价格。如果你想以更亲民的价格、更晚的时间喝到同样正宗的100%科纳，Kona Coffee Donut? 是很好的替代选择。',
        },
        {
          question: '在威基基还能在哪里喝到100%科纳？',
          answer: '除了 Kona Coffee Purveyors，你还可以在 2142 Kalākaua Ave 的 Kona Coffee Donut? 喝到正宗100%科纳。它使用檀香山咖啡的大岛豆（非混合），冷热皆有，每天营业到晚上9点。卡拉卡瓦大道沿线的多家咖啡馆也供应正宗科纳——只要在菜单上认准"100% Kona"字样即可，因为"科纳混合"按法律只需含10%科纳。',
        },
        {
          question: '威基基最便宜的100%科纳是哪家？',
          answer: '正宗100%科纳通常价格偏高，但 Kona Coffee Donut? 把它保持得很亲民：现冲科纳滴滤$7、科纳拿铁$6.35、冷萃$6.95、单一产地手冲$10.95。这让它成为在威基基海滩附近喝到正宗100%科纳（而非混合）最实惠的方式之一。',
        },
        {
          question: 'Kona Coffee Purveyors 与 Kona Coffee Donut?——哪家更好？',
          answer: '哪家都谈不上单纯"更好"——两家都提供正宗100%科纳。Kona Coffee Purveyors 适合想要高档精品咖啡体验、搭配著名焦糖酥的人。Kona Coffee Donut? 适合想以更亲民价格喝到同样正宗100%科纳、营业到晚上9点、并搭配麻糬甜甜圈、马拉萨达或韩式刨冰的人。按你的预算、想要的搭配和时间段来选。',
        },
        {
          question: 'Kona Coffee Donut? 真的提供100%科纳吗？',
          answer: '是的。Kona Coffee Donut? 提供正宗100%科纳——檀香山咖啡的大岛豆，而非10%的"科纳混合"。你可以点现冲滴滤、科纳拿铁、科纳冷萃或单一产地科纳手冲，冷热皆有，每天早上7点到晚上9点，地址 2142 Kalākaua Ave，距威基基海滩约5分钟。',
        },
      ],
    },
    cta: {
      title: '在威基基品尝正宗100%科纳——营业到晚',
      text: '前往 2142 Kalakaua Ave 的 Kona Coffee Donut?，以亲民价格品尝正宗100%科纳，每天营业到晚上9点，再配上温热的甜甜圈——距威基基海滩仅几分钟。',
      menuButton: '查看科纳咖啡菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: 'Kona Coffee Purveyors vs Kona Coffee Donut?',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Kona Coffee Purveyors vs Kona Coffee Donut?: Best 100% Kona Coffee in Waikiki (2026)',
  description: 'A fair, factual comparison of Kona Coffee Purveyors and Kona Coffee Donut? — both serve real 100% Kona in Waikiki. Compare coffee, pairings, price, hours, and vibe to pick the one that fits your visit.',
  image: 'https://www.konacoffeedonut.com/images/blog/kona-coffee-purveyors-vs-kona-coffee-donut.jpeg',
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
  datePublished: '2026-06-25',
  dateModified: '2026-06-25',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/en/blog/kona-coffee-purveyors-vs-kona-coffee-donut',
  },
  keywords: 'kona coffee purveyors, kona coffee purveyors waikiki, best kona coffee waikiki, 100% kona coffee waikiki, kona coffee purveyors vs',
  wordCount: 1600,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Kona Coffee Purveyors worth it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — Kona Coffee Purveyors is an excellent, highly regarded specialty-coffee company, and it\'s well worth a visit if you love carefully crafted coffee. It serves serious 100% Kona and is famous for its b. Patisserie kouign-amann pastries in an upscale setting at International Market Place. Expect a premium price for a premium experience. If you want that same genuine 100% Kona at a friendlier price and open later, Kona Coffee Donut? is a great alternative.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where else can I get 100% Kona in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beyond Kona Coffee Purveyors, you can get genuine 100% Kona at Kona Coffee Donut?, 2142 Kalākaua Ave, which pours Honolulu Coffee\'s Big Island beans (not a blend) hot or iced and is open daily until 9PM. Several cafés along Kalākaua Avenue also serve real Kona — just look for the exact words "100% Kona" on the menu, since a "Kona blend" can legally be as little as 10% Kona.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the cheapest 100% Kona in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Real 100% Kona usually carries a premium, but Kona Coffee Donut? keeps it approachable: a fresh Kona drip is $7 and a Kona latte is $6.35, with cold brew at $6.95 and a single-origin pour-over at $10.95. That makes it one of the friendlier-value ways to drink authentic 100% Kona — not a blend — near Waikiki Beach.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kona Coffee Purveyors vs Kona Coffee Donut? — which is better?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither is simply "better" — both serve authentic 100% Kona. Kona Coffee Purveyors is the pick for an upscale specialty-coffee experience with celebrated kouign-amann pastries. Kona Coffee Donut? is the pick for the same genuine 100% Kona at a friendlier price, open late until 9PM, paired with mochi donuts, malasadas, or Korean bingsu. Choose by your budget, the pairing you want, and the time of day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Kona Coffee Donut? really serve 100% Kona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Kona Coffee Donut? serves real 100% Kona — Honolulu Coffee\'s Big Island beans, not a 10% "Kona blend." You can order it as fresh drip, a Kona latte, Kona cold brew, or a single-origin Kona pour-over, hot or iced, every day from 7AM to 9PM at 2142 Kalākaua Ave, about 5 minutes from Waikiki Beach.',
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
      name: 'Kona Coffee Purveyors vs Kona Coffee Donut?',
      item: 'https://www.konacoffeedonut.com/en/blog/kona-coffee-purveyors-vs-kona-coffee-donut',
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

export default function KonaCoffeePurveyorsVsKonaCoffeeDonutPage() {
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
          src="/images/blog/kona-coffee-purveyors-vs-kona-coffee-donut.jpeg"
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

        {/* What 100% Kona Means */}
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

        {/* Why People Love Kona Coffee Donut? */}
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

        {/* What Makes Kona Coffee Purveyors Special */}
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

        {/* Where to Find Us */}
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

        {/* How to Choose */}
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
