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
      title: 'Best Kona Coffee in Waikiki',
      subtitle: 'Where to Drink Real 100% Kona Near Waikiki Beach (2026 Guide)',
      updated: 'Updated June 2026',
      readTime: '7 min read',
    },
    definition: {
      title: 'What Is the Best Kona Coffee?',
      text: 'The <strong>best Kona coffee</strong> is <strong>100% Kona</strong> — grown only on the volcanic slopes of the Big Island\'s Kona district — not a "Kona blend," which can legally contain as little as 10% real Kona beans. The best cup is <strong>freshly brewed to order</strong>, poured smooth and <strong>naturally low in acidity</strong> with notes of brown sugar, nuts, and a clean, mellow finish. And <strong>Waikiki is one of the easiest places in the world to try it</strong>: you\'re in Hawaii, steps from the beach, where real 100% Kona is poured fresh — best of all paired with a warm donut.',
    },
    history: {
      title: 'Why Kona Coffee Is So Special',
      subtitle: 'From Big Island Volcanic Slopes to Your Waikiki Cup',
      p1: 'Kona coffee is one of the rarest premium coffees on earth. It grows in a <strong>tiny strip of the Big Island</strong> — just the North and South Kona districts — where rich volcanic soil, mountain elevation, sunny mornings, and gentle afternoon clouds create near-perfect growing conditions. This narrow region produces <strong>less than 1% of the world\'s coffee</strong>, which is exactly why true Kona is both rare and prized.',
      p2: 'What makes it worth seeking out is the care behind every bean. Kona cherries are <strong>hand-picked</strong> in multiple passes as they ripen, then carefully processed and sun-dried. The result is a smooth, <strong>naturally low-acid</strong> cup with a clean, balanced flavor. The easiest way to recognize quality is the label: look for the words <strong>"100% Kona."</strong> A "Kona blend" can contain as little as 10% Kona beans, so the wording matters more than the price tag.',
      p3: 'For visitors, <strong>Waikiki is a perfect place to taste real Kona</strong>. You don\'t need to drive hours to the Big Island — cafes along Kalākaua Avenue pour fresh, authentic Kona within walking distance of the beach. Drinking it here, at the source islands, means it\'s brewed fresh rather than sitting in a souvenir bag for weeks. A great cup of 100% Kona is one of the most memorable, low-cost things you can do in Waikiki.',
      p4: 'The experience gets even better when you <strong>pair it with something fresh</strong>. A smooth cup of Kona alongside a warm, just-made donut turns a quick coffee run into a little ritual. The mellow, low-acid coffee balances the sweetness perfectly — it\'s the kind of simple, honest pleasure that makes a Waikiki morning (or afternoon) feel like a real vacation.',
    },
    comparison: {
      title: 'What Makes the Best Kona Coffee',
      subtitle: 'How to Tell Great Kona From the Rest',
      intro: 'Not every cup labeled "Kona" is the same. Here\'s a simple guide to what separates the best 100% Kona from a watered-down blend — and what to skip entirely:',
      headers: {
        feature: 'What to look for',
        bingsu: 'Best (100% Kona)',
        shavedIce: 'OK (Kona Blend)',
        kakigori: 'Skip',
      },
      rows: [
        {
          feature: 'Kona content',
          bingsu: '100% Kona beans',
          shavedIce: 'About 10% Kona, rest filler',
          kakigori: '0% — "Kona style" with no real Kona',
        },
        {
          feature: 'Freshness',
          bingsu: 'Brewed fresh to order',
          shavedIce: 'Sitting on a burner for hours',
          kakigori: 'Instant or stale pre-ground',
        },
        {
          feature: 'Acidity & taste',
          bingsu: 'Smooth, low-acid, mellow finish',
          shavedIce: 'Diluted, uneven flavor',
          kakigori: 'Bitter, flat, or sour',
        },
        {
          feature: 'Label honesty',
          bingsu: 'Clearly says "100% Kona"',
          shavedIce: 'Says "Kona Blend" in small print',
          kakigori: 'Vague "Hawaiian" with no detail',
        },
        {
          feature: 'Price',
          bingsu: 'Premium, but worth it',
          shavedIce: 'Mid-range',
          kakigori: 'Suspiciously cheap',
        },
        {
          feature: 'Verdict',
          bingsu: 'Seek it out',
          shavedIce: 'Fine in a pinch',
          kakigori: 'Not worth it',
        },
      ],
      note: 'The one rule that matters most: insist on "100% Kona." If a label or menu only says "Kona blend" or "Kona style," you\'re mostly drinking other beans. The price of real Kona reflects how rare it is — and the smooth, low-acid taste is what you\'re paying for.',
    },
    types: {
      title: 'How to Get the Best Kona Coffee in Waikiki',
      subtitle: 'Five Easy Ways to Make Sure You\'re Drinking the Real Thing',
      items: [
        {
          name: 'Ask for 100% Kona',
          korean: '100% Kona, not a blend',
          description: 'The single most important step. Ask the barista or check the menu for the words "100% Kona." If it just says "Kona blend," you\'re mostly drinking other beans. Real cafes are proud to tell you exactly what they pour — and they\'ll happily confirm it\'s the genuine 100% article.',
          icon: '☕',
        },
        {
          name: 'Drink it fresh-brewed',
          korean: 'Brewed to order',
          description: 'Kona shines when it\'s brewed fresh, not left sitting for hours. A pour-over, fresh drip, or freshly pulled shot brings out the smooth, brown-sugar sweetness that makes Kona special. Freshness beats a souvenir bag every time — this is the cup to drink in the moment.',
          icon: '🔥',
        },
        {
          name: 'Try it black first, then a latte',
          korean: 'Black, then milk',
          description: 'To really taste why Kona is worth it, sip it black first — that\'s where you notice its naturally low acidity and clean, nutty finish. Then order a latte or iced version if you like. Good Kona is smooth enough to enjoy on its own and rich enough to hold up with milk.',
          icon: '🥛',
        },
        {
          name: 'Pair it with a fresh donut',
          korean: 'Coffee + donut combo',
          description: 'The mellow, low-acid profile of Kona is a perfect match for something sweet. A warm, freshly made mochi donut or malasada next to your cup turns a quick coffee into a little treat. It\'s the easy, crowd-pleasing combo that makes a Waikiki break feel special.',
          icon: '🍩',
        },
        {
          name: 'Go early or near the beach',
          korean: 'Early + beachside',
          description: 'The best Kona moment is an unhurried one. Grab your cup in the morning before the crowds, or take it to go for a walk near Waikiki Beach. Sipping real 100% Kona with an ocean view is one of the simplest, most memorable things you can do on the island.',
          icon: '🌅',
        },
      ],
    },
    whyHawaii: {
      title: 'Why Drink Kona Coffee in Waikiki',
      points: [
        {
          title: 'You\'re at the Source — Hawaii',
          description: 'Kona coffee grows only in Hawaii, on the Big Island\'s Kona slopes. Drinking it here means you\'re tasting it where it belongs — fresh, authentic, and surrounded by the islands that make it. There\'s no more genuine place on earth to enjoy a cup of real 100% Kona than right here in Hawaii.',
        },
        {
          title: 'Freshly Brewed Beats a Souvenir Bag',
          description: 'Many visitors buy a bag of Kona to take home, only to find it never quite tastes as good weeks later. A cup brewed fresh in Waikiki — within walking distance of the beach — captures Kona at its peak: smooth, aromatic, and full of flavor. Taste it fresh first, then decide what to bring home.',
        },
        {
          title: 'The 100%-Kona + Donut Combo',
          description: 'Kona\'s naturally low acidity and mellow sweetness make it a perfect partner for a warm, fresh donut. Pairing a real 100% Kona pour with a just-made mochi donut or malasada turns a simple coffee stop into a memorable little experience — the kind of treat a vacation is made for.',
        },
        {
          title: 'Walkable From Waikiki Beach',
          description: 'You don\'t have to drive hours to the Big Island to taste great Kona. Cafes along Kalākaua Avenue pour real 100% Kona just minutes from the sand. That convenience — world-class coffee a short stroll from your hotel and the ocean — is exactly what makes Waikiki such a great place to enjoy it.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Drink Real Kona Coffee in Waikiki',
      intro: 'If you want genuine 100% Kona near Waikiki Beach, Kona Coffee Donut? is a great place to start.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Right on Kalākaua Avenue in the heart of Waikiki, Kona Coffee Donut? serves real 100% Kona coffee — we pour Honolulu Coffee\'s Kona beans — brewed fresh, hot or iced. Pair it with a freshly made mochi donut or malasada for the perfect Waikiki break. We\'re about a 5-minute walk from Waikiki Beach and open daily, so it\'s easy to swing by for a smooth, low-acid cup of the real thing.',
        highlights: [
          'Real 100% Kona coffee (Honolulu Coffee beans), hot or iced',
          'Brewed fresh and paired with mochi donuts & malasadas',
          'About 5 minutes from Waikiki Beach',
          'Open daily, 7AM–9PM',
        ],
      },
      cta: 'View Our Kona Coffee Menu',
    },
    howToEat: {
      title: 'Tips for the Best Cup',
      subtitle: 'Get the Most Out of Your Kona Coffee',
      tips: [
        {
          title: 'Confirm It\'s 100% Kona',
          description: 'Before you order, look for or ask about "100% Kona." It\'s the one detail that separates a special cup from an ordinary one. A good cafe will tell you exactly what they pour — at Kona Coffee Donut?, that means real 100% Kona from Honolulu Coffee, every time.',
        },
        {
          title: 'Taste It Black First',
          description: 'Give your first sip a chance without milk or sugar. That\'s where Kona\'s naturally low acidity and smooth, nutty-sweet character really come through. Once you\'ve tasted it black, you\'ll understand why people seek out real Kona — then dress it up however you like.',
        },
        {
          title: 'Hot or Iced, Both Work',
          description: 'Kona\'s mellow, low-acid profile shines hot in the morning and just as well iced on a warm Waikiki afternoon. Iced Kona stays smooth instead of turning sharp or sour, so don\'t hesitate to order it cold when the weather calls for it.',
        },
        {
          title: 'Pair It With Something Fresh',
          description: 'A great cup is even better with a bite alongside it. The smooth sweetness of Kona pairs beautifully with a warm, freshly made donut. Order both, find a seat, and let a quick coffee run become a little Waikiki ritual worth slowing down for.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About Kona Coffee in Waikiki',
      items: [
        {
          question: 'What is the best Kona coffee in Waikiki?',
          answer: 'The best Kona coffee in Waikiki is real 100% Kona, brewed fresh — not a "Kona blend." Look for cafes that clearly state "100% Kona" and brew to order. Kona Coffee Donut? on Kalākaua Avenue pours real 100% Kona (Honolulu Coffee beans), hot or iced, just minutes from Waikiki Beach, and pairs it with fresh donuts.',
        },
        {
          question: 'How do I know it\'s real 100% Kona?',
          answer: 'Check the label or menu for the exact words "100% Kona." By law, a "Kona blend" only needs about 10% real Kona beans, so the wording matters. A genuine cafe will happily confirm they pour 100% Kona and tell you the source — for example, Honolulu Coffee\'s Kona beans. If a menu only says "Kona blend" or "Kona style," you\'re mostly drinking other beans.',
        },
        {
          question: 'Where can I drink Kona coffee near Waikiki Beach?',
          answer: 'You can drink real Kona coffee at cafes along Kalākaua Avenue, the main street running through Waikiki. Kona Coffee Donut? at 2142 Kalakaua Ave is about a 5-minute walk from Waikiki Beach, serves real 100% Kona hot or iced, and is open daily — an easy stop before or after the beach.',
        },
        {
          question: 'Is Kona coffee worth it?',
          answer: 'Yes — if it\'s real 100% Kona. Kona is one of the rarest premium coffees in the world, grown in a tiny region of the Big Island and hand-picked, which is why it costs more. The payoff is a smooth, naturally low-acid cup that\'s easy to drink black. Trying it fresh in Waikiki, at the source islands, is the best way to decide for yourself.',
        },
        {
          question: 'What pairs well with Kona coffee?',
          answer: 'Kona\'s mellow, low-acid, lightly sweet character pairs beautifully with fresh donuts. A warm mochi donut or malasada next to a cup of real 100% Kona balances the sweetness without overwhelming the coffee. At Kona Coffee Donut?, the coffee-and-donut combo is exactly what makes a Waikiki break feel special.',
        },
      ],
    },
    cta: {
      title: 'Taste Real 100% Kona in Waikiki',
      text: 'Visit Kona Coffee Donut? at 2142 Kalakaua Ave and try real 100% Kona coffee, brewed fresh and paired with a warm donut — just minutes from Waikiki Beach.',
      menuButton: 'View Kona Coffee Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'Best Kona Coffee in Waikiki',
    },
  },
  ja: {
    hero: {
      title: 'ワイキキで一番美味しいコナコーヒー',
      subtitle: 'ワイキキビーチ近くで本物の100%コナを飲める場所（2026年版ガイド）',
      updated: '2026年6月更新',
      readTime: '7分で読める',
    },
    definition: {
      title: '美味しいコナコーヒーとは？',
      text: '<strong>美味しいコナコーヒー</strong>とは、<strong>100%コナ</strong>のことです。ハワイ島コナ地区の火山斜面だけで栽培される希少な豆で、法律上わずか10%のコナ豆しか入っていなくても名乗れる「コナブレンド」とは別物です。最高の一杯は<strong>注文ごとに淹れたて</strong>で、<strong>酸味がまろやか</strong>。黒糖やナッツのような風味とクリーンで穏やかな後味が特徴です。そして<strong>ワイキキは本物の100%コナを最も手軽に味わえる場所のひとつ</strong>。ハワイにいながらビーチのすぐそばで淹れたてが飲め、温かいドーナツとの組み合わせも格別です。',
    },
    history: {
      title: 'コナコーヒーが特別な理由',
      subtitle: 'ハワイ島の火山斜面から、ワイキキのあなたの一杯まで',
      p1: 'コナコーヒーは世界でも有数の希少なプレミアムコーヒーです。栽培されるのは<strong>ハワイ島のごく一部</strong>、北コナと南コナ地区だけ。豊かな火山土壌、山の標高、晴れた午前と午後の優しい雲が、ほぼ完璧な栽培条件を生み出します。この狭い地域が生産するのは<strong>世界のコーヒーのわずか1%未満</strong>。だからこそ本物のコナは希少で珍重されるのです。',
      p2: '探し求める価値があるのは、一粒一粒に込められた手間ゆえです。コナのチェリーは熟すたびに<strong>手摘み</strong>で何度も収穫され、丁寧に精製され天日干しされます。その結果が、まろやかで<strong>自然に酸味の低い</strong>、クリーンでバランスの良い一杯です。品質を見分ける一番簡単な方法はラベル。<strong>「100% Kona（100%コナ）」</strong>という言葉を探しましょう。「コナブレンド」はわずか10%のコナ豆でも名乗れるため、値段より表記が大切です。',
      p3: '旅行者にとって<strong>ワイキキは本物のコナを味わうのに最適な場所</strong>です。何時間もかけてハワイ島まで行く必要はありません。カラカウア通り沿いのカフェなら、ビーチから徒歩圏内で淹れたての本格コナが楽しめます。産地であるハワイで飲むということは、何週間もお土産袋に入ったままではなく淹れたてで味わえるということ。美味しい100%コナの一杯は、ワイキキでできる最も思い出深く、手頃な体験のひとつです。',
      p4: '<strong>淹れたての何かと合わせる</strong>と、体験はさらに格別になります。まろやかなコナの一杯に、温かい作りたてのドーナツを添えれば、ちょっとしたコーヒータイムが小さな儀式に変わります。穏やかで酸味の低いコーヒーが甘さを完璧に引き立てる——シンプルで素直なこの喜びこそ、ワイキキの朝（や午後）を本物のバケーションに変えてくれます。',
    },
    comparison: {
      title: '美味しいコナコーヒーの条件',
      subtitle: '本物のコナと、そうでないものの見分け方',
      intro: '「コナ」と書かれていても、すべての一杯が同じではありません。最高の100%コナと、薄まったブレンド、そして避けるべきものを見分ける簡単なガイドです：',
      headers: {
        feature: 'チェックポイント',
        bingsu: '最高（100%コナ）',
        shavedIce: 'まあまあ（コナブレンド）',
        kakigori: '避けたい',
      },
      rows: [
        {
          feature: 'コナ含有率',
          bingsu: '100%コナ豆',
          shavedIce: '約10%コナ、残りは他の豆',
          kakigori: '0% — 「コナ風」で本物のコナなし',
        },
        {
          feature: '鮮度',
          bingsu: '注文ごとに淹れたて',
          shavedIce: '何時間も保温されたまま',
          kakigori: 'インスタントや古い挽き置き',
        },
        {
          feature: '酸味と味わい',
          bingsu: 'まろやか、酸味控えめ、穏やかな後味',
          shavedIce: '薄く、味にムラがある',
          kakigori: '苦い、平坦、または酸っぱい',
        },
        {
          feature: 'ラベルの正直さ',
          bingsu: '「100% Kona」と明記',
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
          bingsu: '探してでも飲む価値あり',
          shavedIce: '困った時には',
          kakigori: 'おすすめしない',
        },
      ],
      note: '最も大切なルールはひとつ。「100% Kona」にこだわることです。ラベルやメニューに「コナブレンド」や「コナ風」としか書かれていなければ、ほとんど他の豆を飲んでいることになります。本物のコナの価格はその希少さの表れであり、まろやかで酸味の低い味わいこそが、その対価なのです。',
    },
    types: {
      title: 'ワイキキで美味しいコナコーヒーを飲む方法',
      subtitle: '本物を飲んでいると確認できる5つの簡単な方法',
      items: [
        {
          name: '「100%コナ」を確認する',
          korean: 'ブレンドではなく100%コナ',
          description: '最も重要なステップ。バリスタに尋ねるか、メニューで「100% Kona」の表記を探しましょう。「コナブレンド」とだけあれば、ほとんど他の豆です。良いカフェは何を提供しているか誇りを持って教えてくれますし、本物の100%コナだと喜んで確認してくれます。',
          icon: '☕',
        },
        {
          name: '淹れたてを飲む',
          korean: '注文ごとに抽出',
          description: 'コナは保温で何時間も置かれたものではなく、淹れたてでこそ輝きます。プアオーバー、淹れたてのドリップ、抽出したてのショットが、コナならではのまろやかな黒糖のような甘さを引き出します。鮮度はお土産袋に常に勝ります——その場で飲むべき一杯です。',
          icon: '🔥',
        },
        {
          name: 'まずブラック、それからラテ',
          korean: 'ブラック→ミルク',
          description: 'コナの価値を本当に味わうなら、まずブラックでひと口。そこで自然な酸味の低さとクリーンでナッツのような後味に気づきます。それからお好みでラテやアイスを。良いコナはそのまま楽しめるほどまろやかで、ミルクにも負けないコクがあります。',
          icon: '🥛',
        },
        {
          name: '淹れたてドーナツと合わせる',
          korean: 'コーヒー＋ドーナツ',
          description: 'コナの穏やかで酸味の低い味わいは、甘いものと相性抜群。温かい作りたてのモチドーナツやマラサダを一杯のそばに添えれば、さっとのコーヒーがちょっとしたご褒美に。誰もが喜ぶこの組み合わせが、ワイキキの休憩を特別にします。',
          icon: '🍩',
        },
        {
          name: '早めに、またはビーチ近くで',
          korean: '早朝＋ビーチサイド',
          description: '最高のコナの瞬間は、ゆったりとしたもの。混雑前の朝に一杯を手にするか、テイクアウトしてワイキキビーチ近くを散歩しましょう。オーシャンビューと一緒に本物の100%コナを味わうのは、島でできる最もシンプルで思い出深いことのひとつです。',
          icon: '🌅',
        },
      ],
    },
    whyHawaii: {
      title: 'ワイキキでコナコーヒーを飲むべき理由',
      points: [
        {
          title: '産地ハワイにいるから',
          description: 'コナコーヒーが栽培されるのはハワイだけ、ハワイ島のコナ斜面だけです。ここで飲むということは、本来あるべき場所で味わうということ——淹れたてで、本格的で、それを生み出す島々に囲まれて。本物の100%コナを楽しむのに、このハワイ以上に本物の場所は地球上にありません。',
        },
        {
          title: '淹れたてはお土産袋に勝る',
          description: '多くの旅行者がお土産にコナを一袋買いますが、数週間後には同じ味にならないと気づくことも。ワイキキで、ビーチから徒歩圏内で淹れたての一杯は、コナを最高の状態で味わえます——まろやかで、香り高く、風味豊か。まずは淹れたてを味わってから、何を持ち帰るか決めましょう。',
        },
        {
          title: '100%コナ＋ドーナツの組み合わせ',
          description: 'コナの自然な酸味の低さとまろやかな甘さは、温かい作りたてのドーナツの完璧な相棒です。本物の100%コナの一杯に、できたてのモチドーナツやマラサダを合わせれば、シンプルなコーヒータイムが忘れられない小さな体験に——まさにバケーションのためのご褒美です。',
        },
        {
          title: 'ワイキキビーチから歩いて行ける',
          description: '美味しいコナを味わうのに、何時間もかけてハワイ島まで行く必要はありません。カラカウア通り沿いのカフェなら、砂浜からほんの数分で本物の100%コナが飲めます。世界クラスのコーヒーがホテルや海から少し歩くだけ——その手軽さこそ、ワイキキが楽しむのに最適な理由です。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキで本物のコナコーヒーを飲むなら',
      intro: 'ワイキキビーチ近くで本物の100%コナをお探しなら、Kona Coffee Donut? が最適なスタート地点です。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心、カラカウア通り沿いに位置する Kona Coffee Donut? は、本物の100%コナコーヒーを提供——ホノルルコーヒーのコナ豆を使い、ホットでもアイスでも淹れたてで。できたてのモチドーナツやマラサダと合わせれば、完璧なワイキキの休憩に。ワイキキビーチから徒歩約5分、毎日営業なので、まろやかで酸味の低い本物の一杯に気軽に立ち寄れます。',
        highlights: [
          '本物の100%コナコーヒー（ホノルルコーヒーの豆）、ホット＆アイス',
          '淹れたてをモチドーナツ＆マラサダと一緒に',
          'ワイキキビーチから約5分',
          '毎日営業、午前7時〜午後9時',
        ],
      },
      cta: 'コナコーヒーメニューを見る',
    },
    howToEat: {
      title: '最高の一杯のためのコツ',
      subtitle: 'コナコーヒーを最大限に楽しむために',
      tips: [
        {
          title: '「100%コナ」か確認する',
          description: '注文前に「100% Kona」を探すか尋ねましょう。特別な一杯と普通の一杯を分ける、たったひとつの決め手です。良いカフェは何を提供しているか正確に教えてくれます——Kona Coffee Donut? なら、毎回ホノルルコーヒーの本物の100%コナです。',
        },
        {
          title: 'まずブラックで味わう',
          description: '最初のひと口は、ミルクや砂糖なしで試してみてください。そこにこそ、コナの自然な酸味の低さと、まろやかでナッツのような甘さが現れます。ブラックで味わえば、なぜ人々が本物のコナを求めるのか分かるはず。そのあとはお好みでアレンジを。',
        },
        {
          title: 'ホットでもアイスでも',
          description: 'コナの穏やかで酸味の低い味わいは、朝のホットでも、暖かいワイキキの午後のアイスでも輝きます。アイスのコナは尖ったり酸っぱくなったりせずまろやかなまま。だから天気が良ければ、迷わず冷たいのを注文してください。',
        },
        {
          title: '淹れたての何かと合わせる',
          description: '美味しい一杯は、隣にひと口あるとさらに格別。コナのまろやかな甘さは、温かい作りたてのドーナツと美しく調和します。両方注文して席を見つければ、さっとのコーヒーが、立ち止まる価値のあるワイキキの小さな儀式になります。',
        },
      ],
    },
    faq: {
      title: 'ワイキキのコナコーヒーに関するよくある質問',
      items: [
        {
          question: 'ワイキキで一番美味しいコナコーヒーは？',
          answer: 'ワイキキで一番美味しいコナコーヒーは、「コナブレンド」ではなく淹れたての本物の100%コナです。「100% Kona」と明記し、注文ごとに淹れるカフェを探しましょう。カラカウア通りの Kona Coffee Donut? は、本物の100%コナ（ホノルルコーヒーの豆）をホットでもアイスでも提供し、ワイキキビーチから数分、淹れたてのドーナツとも合わせられます。',
        },
        {
          question: '本物の100%コナだとどうやって分かる？',
          answer: 'ラベルやメニューで「100% Kona」という正確な表記を確認してください。法律上、「コナブレンド」は約10%のコナ豆しか必要ないため、表記が重要です。本物のカフェは100%コナを提供していると喜んで確認し、産地も教えてくれます——例えばホノルルコーヒーのコナ豆など。メニューに「コナブレンド」や「コナ風」とだけあれば、ほとんど他の豆です。',
        },
        {
          question: 'ワイキキビーチ近くでコナコーヒーを飲める場所は？',
          answer: 'ワイキキを通るメインストリート、カラカウア通り沿いのカフェで本物のコナコーヒーが飲めます。2142 Kalakaua Ave の Kona Coffee Donut? はワイキキビーチから徒歩約5分、本物の100%コナをホットでもアイスでも提供し、毎日営業——ビーチの前後に立ち寄りやすい場所です。',
        },
        {
          question: 'コナコーヒーはその価値がある？',
          answer: 'はい——本物の100%コナなら。コナは世界でも有数の希少なプレミアムコーヒーで、ハワイ島のごく一部で栽培され手摘みされるため、価格が高くなります。その見返りが、ブラックでも飲みやすいまろやかで自然に酸味の低い一杯です。産地であるハワイのワイキキで淹れたてを試すのが、自分で判断する一番の方法です。',
        },
        {
          question: 'コナコーヒーに合うものは？',
          answer: 'コナの穏やかで酸味が低く、ほんのり甘い味わいは、淹れたてのドーナツと見事に調和します。本物の100%コナの一杯のそばに温かいモチドーナツやマラサダを添えれば、コーヒーを邪魔せず甘さがバランスします。Kona Coffee Donut? では、このコーヒーとドーナツの組み合わせこそが、ワイキキの休憩を特別にしてくれます。',
        },
      ],
    },
    cta: {
      title: 'ワイキキで本物の100%コナを味わおう',
      text: '2142 Kalakaua Ave の Kona Coffee Donut? で、淹れたての本物の100%コナコーヒーと温かいドーナツを——ワイキキビーチからわずか数分です。',
      menuButton: 'コナコーヒーメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'ワイキキで一番のコナコーヒー',
    },
  },
  ko: {
    hero: {
      title: '와이키키 최고의 코나 커피',
      subtitle: '와이키키 해변 근처에서 진짜 100% 코나를 마실 수 있는 곳 (2026 가이드)',
      updated: '2026년 6월 업데이트',
      readTime: '7분 소요',
    },
    definition: {
      title: '가장 맛있는 코나 커피란?',
      text: '<strong>가장 맛있는 코나 커피</strong>는 바로 <strong>100% 코나</strong>입니다. 빅아일랜드 코나 지역의 화산 경사면에서만 재배되는 귀한 원두로, 실제 코나 원두가 단 10%만 들어가도 합법적으로 이름을 붙일 수 있는 "코나 블렌드"와는 전혀 다릅니다. 최고의 한 잔은 <strong>주문 즉시 갓 내린</strong> 커피로, <strong>산미가 부드럽고 낮으며</strong> 흑설탕과 견과류 같은 풍미에 깔끔하고 은은한 끝맛이 특징입니다. 그리고 <strong>와이키키는 진짜 100% 코나를 가장 쉽게 맛볼 수 있는 곳 중 하나</strong>입니다. 하와이에 있으면서 해변 바로 옆에서 갓 내린 커피를 마실 수 있고, 따뜻한 도넛과의 조합은 더할 나위 없죠.',
    },
    history: {
      title: '코나 커피가 특별한 이유',
      subtitle: '빅아일랜드 화산 경사면에서 와이키키의 당신 한 잔까지',
      p1: '코나 커피는 지구상에서 가장 희귀한 프리미엄 커피 중 하나입니다. 재배지는 <strong>빅아일랜드의 아주 좁은 지역</strong>, 북코나와 남코나 지역뿐입니다. 비옥한 화산 토양, 산악 고도, 맑은 오전과 부드러운 오후 구름이 거의 완벽한 재배 조건을 만들어냅니다. 이 좁은 지역이 생산하는 양은 <strong>전 세계 커피의 1% 미만</strong>. 진짜 코나가 희귀하고 귀하게 여겨지는 이유가 바로 여기에 있습니다.',
      p2: '굳이 찾아 마실 가치가 있는 건 원두 한 알 한 알에 담긴 정성 때문입니다. 코나 체리는 익는 대로 여러 번에 걸쳐 <strong>손으로 수확</strong>되고, 정성껏 가공해 햇볕에 말립니다. 그 결과가 부드럽고 <strong>자연스럽게 산미가 낮은</strong>, 깔끔하고 균형 잡힌 한 잔입니다. 품질을 알아보는 가장 쉬운 방법은 라벨. <strong>"100% Kona(100% 코나)"</strong>라는 표기를 찾으세요. "코나 블렌드"는 코나 원두가 10%만 들어가도 이름을 붙일 수 있으니, 가격보다 표기가 더 중요합니다.',
      p3: '여행자에게 <strong>와이키키는 진짜 코나를 맛보기에 완벽한 곳</strong>입니다. 빅아일랜드까지 몇 시간씩 운전할 필요가 없습니다. 칼라카우아 애비뉴의 카페들은 해변에서 도보 거리에 있으면서 갓 내린 정통 코나를 제공하니까요. 원산지인 하와이 제도에서 마신다는 건, 몇 주씩 기념품 봉지에 담겨 있던 게 아니라 갓 내려 마신다는 뜻입니다. 100% 코나 한 잔은 와이키키에서 할 수 있는 가장 기억에 남으면서도 부담 없는 경험 중 하나입니다.',
      p4: '<strong>갓 만든 무언가와 곁들이면</strong> 경험은 한층 더 좋아집니다. 부드러운 코나 한 잔에 따뜻하고 갓 만든 도넛을 더하면, 잠깐의 커피 타임이 작은 의식이 됩니다. 은은하고 산미가 낮은 커피가 단맛을 완벽하게 살려주죠. 이런 단순하고 진솔한 즐거움이야말로 와이키키의 아침(혹은 오후)을 진짜 휴가처럼 만들어 줍니다.',
    },
    comparison: {
      title: '가장 맛있는 코나 커피의 조건',
      subtitle: '진짜 코나와 나머지를 구별하는 법',
      intro: '"코나"라고 적혀 있어도 모든 한 잔이 같은 건 아닙니다. 최고의 100% 코나와 묽어진 블렌드, 그리고 아예 피해야 할 것을 구별하는 간단한 가이드입니다:',
      headers: {
        feature: '확인할 점',
        bingsu: '최고 (100% 코나)',
        shavedIce: '무난 (코나 블렌드)',
        kakigori: '피하세요',
      },
      rows: [
        {
          feature: '코나 함량',
          bingsu: '100% 코나 원두',
          shavedIce: '약 10% 코나, 나머지는 다른 원두',
          kakigori: '0% — 진짜 코나 없는 "코나 스타일"',
        },
        {
          feature: '신선도',
          bingsu: '주문 즉시 갓 내림',
          shavedIce: '몇 시간째 보온 중',
          kakigori: '인스턴트 또는 오래된 분쇄 원두',
        },
        {
          feature: '산미와 맛',
          bingsu: '부드럽고 산미 낮으며 은은한 끝맛',
          shavedIce: '묽고 맛이 들쭉날쭉',
          kakigori: '쓰거나 밋밋하거나 시큼함',
        },
        {
          feature: '라벨의 정직함',
          bingsu: '"100% Kona" 명확히 표기',
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
          bingsu: '찾아서라도 마실 만함',
          shavedIce: '아쉬운 대로 괜찮음',
          kakigori: '굳이 마실 필요 없음',
        },
      ],
      note: '가장 중요한 단 하나의 원칙: "100% 코나"를 고집하세요. 라벨이나 메뉴에 "코나 블렌드"나 "코나 스타일"이라고만 적혀 있다면, 대부분 다른 원두를 마시는 셈입니다. 진짜 코나의 가격은 그 희소성을 반영하며, 부드럽고 산미 낮은 그 맛이 바로 당신이 지불하는 값입니다.',
    },
    types: {
      title: '와이키키에서 맛있는 코나 커피 마시는 법',
      subtitle: '진짜를 마시고 있는지 확인하는 다섯 가지 쉬운 방법',
      items: [
        {
          name: '"100% 코나" 확인하기',
          korean: '블렌드 아닌 100% 코나',
          description: '가장 중요한 단계입니다. 바리스타에게 묻거나 메뉴에서 "100% Kona" 표기를 찾으세요. 그냥 "코나 블렌드"라고만 되어 있으면 대부분 다른 원두입니다. 좋은 카페는 무엇을 내리는지 자랑스럽게 알려주고, 진짜 100% 코나라는 걸 기꺼이 확인해 줍니다.',
          icon: '☕',
        },
        {
          name: '갓 내린 걸로 마시기',
          korean: '주문 즉시 추출',
          description: '코나는 몇 시간씩 보온해 둔 게 아니라 갓 내렸을 때 진가를 발휘합니다. 핸드드립, 갓 내린 드립, 막 뽑은 샷이 코나 특유의 부드러운 흑설탕 같은 단맛을 끌어냅니다. 신선함은 언제나 기념품 봉지를 이깁니다 — 그 자리에서 바로 마셔야 할 한 잔이죠.',
          icon: '🔥',
        },
        {
          name: '먼저 블랙, 그다음 라테',
          korean: '블랙 먼저, 우유는 나중',
          description: '코나가 왜 그만한 가치가 있는지 제대로 느끼려면, 먼저 블랙으로 한 모금. 거기서 자연스럽게 낮은 산미와 깔끔하고 고소한 끝맛이 느껴집니다. 그다음 원하시면 라테나 아이스로. 좋은 코나는 그대로 즐길 만큼 부드럽고, 우유에도 밀리지 않을 만큼 진합니다.',
          icon: '🥛',
        },
        {
          name: '갓 만든 도넛과 곁들이기',
          korean: '커피 + 도넛 조합',
          description: '은은하고 산미 낮은 코나의 풍미는 달콤한 것과 찰떡궁합입니다. 따뜻하고 갓 만든 모찌 도넛이나 말라사다를 한 잔 옆에 두면, 잠깐의 커피가 작은 호사가 됩니다. 누구나 좋아하는 이 조합이 와이키키의 쉼표를 특별하게 만들어 줍니다.',
          icon: '🍩',
        },
        {
          name: '이른 시간에, 또는 해변 근처에서',
          korean: '이른 아침 + 해변가',
          description: '최고의 코나 순간은 여유로운 순간입니다. 붐비기 전 아침에 한 잔 들거나, 테이크아웃해서 와이키키 해변 근처를 산책하세요. 오션뷰와 함께 진짜 100% 코나를 마시는 건, 이 섬에서 할 수 있는 가장 단순하면서도 기억에 남는 일 중 하나입니다.',
          icon: '🌅',
        },
      ],
    },
    whyHawaii: {
      title: '왜 와이키키에서 코나 커피를 마셔야 할까',
      points: [
        {
          title: '원산지 하와이에 있으니까',
          description: '코나 커피는 오직 하와이, 빅아일랜드 코나 경사면에서만 자랍니다. 여기서 마신다는 건 본래 있어야 할 곳에서 맛본다는 것 — 신선하고, 정통이며, 그 커피를 길러낸 섬들에 둘러싸여서요. 진짜 100% 코나 한 잔을 즐기기에 이곳 하와이보다 더 진짜인 곳은 지구상에 없습니다.',
        },
        {
          title: '갓 내린 한 잔이 기념품 봉지를 이긴다',
          description: '많은 여행자가 코나 한 봉지를 사 가지만, 몇 주 뒤엔 그 맛이 안 난다는 걸 깨닫곤 합니다. 와이키키에서, 해변에서 도보 거리에서 갓 내린 한 잔은 코나를 정점에서 담아냅니다 — 부드럽고, 향긋하고, 풍미 가득하게. 먼저 갓 내린 걸 맛보고, 무엇을 가져갈지는 그다음에 정하세요.',
        },
        {
          title: '100% 코나 + 도넛 조합',
          description: '코나의 자연스럽게 낮은 산미와 은은한 단맛은 따뜻하고 갓 만든 도넛과 완벽한 짝입니다. 진짜 100% 코나 한 잔에 갓 만든 모찌 도넛이나 말라사다를 곁들이면, 단순한 커피 한 잔이 잊지 못할 작은 경험이 됩니다 — 휴가에 딱 어울리는 호사죠.',
        },
        {
          title: '와이키키 해변에서 걸어갈 수 있다',
          description: '맛있는 코나를 맛보겠다고 빅아일랜드까지 몇 시간씩 운전할 필요가 없습니다. 칼라카우아 애비뉴의 카페들은 모래사장에서 단 몇 분 거리에서 진짜 100% 코나를 내립니다. 호텔과 바다에서 잠깐 걸으면 세계적 수준의 커피 — 바로 그 편리함이 와이키키를 즐기기 좋은 곳으로 만듭니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 진짜 코나 커피 마시는 곳',
      intro: '와이키키 해변 근처에서 진짜 100% 코나를 찾고 계시다면, Kona Coffee Donut? 가 시작하기 좋은 곳입니다.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키의 중심, 칼라카우아 애비뉴에 자리한 Kona Coffee Donut? 는 진짜 100% 코나 커피를 제공합니다 — 호놀룰루 커피의 코나 원두를 사용해 핫이든 아이스든 갓 내려 드리죠. 갓 만든 모찌 도넛이나 말라사다와 곁들이면 완벽한 와이키키의 쉼표가 됩니다. 와이키키 해변에서 도보 약 5분, 매일 영업하니 부드럽고 산미 낮은 진짜 한 잔을 가볍게 들르기 좋습니다.',
        highlights: [
          '진짜 100% 코나 커피 (호놀룰루 커피 원두), 핫 & 아이스',
          '갓 내린 커피를 모찌 도넛 & 말라사다와 함께',
          '와이키키 해변에서 약 5분',
          '매일 영업, 오전 7시~오후 9시',
        ],
      },
      cta: '코나 커피 메뉴 보기',
    },
    howToEat: {
      title: '최고의 한 잔을 위한 팁',
      subtitle: '코나 커피를 200% 즐기는 법',
      tips: [
        {
          title: '"100% 코나"인지 확인하기',
          description: '주문 전에 "100% Kona"를 찾거나 물어보세요. 특별한 한 잔과 평범한 한 잔을 가르는 단 하나의 디테일입니다. 좋은 카페는 무엇을 내리는지 정확히 알려줍니다 — Kona Coffee Donut? 에서는 매번 호놀룰루 커피의 진짜 100% 코나라는 뜻이죠.',
        },
        {
          title: '먼저 블랙으로 맛보기',
          description: '첫 모금은 우유나 설탕 없이 즐겨보세요. 거기서 코나의 자연스럽게 낮은 산미와 부드럽고 고소한 단맛이 제대로 드러납니다. 블랙으로 맛보고 나면 왜 사람들이 진짜 코나를 찾는지 알게 됩니다 — 그다음엔 취향대로 즐기세요.',
        },
        {
          title: '핫이든 아이스든 다 좋다',
          description: '코나의 은은하고 산미 낮은 풍미는 아침의 핫에서도, 따뜻한 와이키키 오후의 아이스에서도 빛납니다. 아이스 코나는 날카로워지거나 시큼해지지 않고 부드러움을 유지하니, 날씨가 좋으면 망설이지 말고 시원하게 주문하세요.',
        },
        {
          title: '갓 만든 무언가와 곁들이기',
          description: '좋은 한 잔은 옆에 한 입 거리가 있으면 더 좋습니다. 코나의 부드러운 단맛은 따뜻하고 갓 만든 도넛과 아름답게 어울립니다. 둘 다 주문하고 자리를 잡으면, 잠깐의 커피가 천천히 누릴 가치가 있는 와이키키의 작은 의식이 됩니다.',
        },
      ],
    },
    faq: {
      title: '와이키키 코나 커피에 대해 자주 묻는 질문',
      items: [
        {
          question: '와이키키 최고의 코나 커피는 무엇인가요?',
          answer: '와이키키 최고의 코나 커피는 "코나 블렌드"가 아니라 갓 내린 진짜 100% 코나입니다. "100% Kona"라고 명확히 적고 주문 즉시 내리는 카페를 찾으세요. 칼라카우아 애비뉴의 Kona Coffee Donut? 는 진짜 100% 코나(호놀룰루 커피 원두)를 핫이든 아이스든 제공하며, 와이키키 해변에서 몇 분 거리에 있고 갓 만든 도넛과도 곁들일 수 있습니다.',
        },
        {
          question: '진짜 100% 코나인지 어떻게 알 수 있나요?',
          answer: '라벨이나 메뉴에서 정확히 "100% Kona"라는 표기를 확인하세요. 법적으로 "코나 블렌드"는 진짜 코나 원두가 약 10%만 들어가면 되기 때문에 표기가 중요합니다. 진짜 카페는 100% 코나를 제공한다고 기꺼이 확인해 주고 원산지도 알려줍니다 — 예를 들어 호놀룰루 커피의 코나 원두처럼요. 메뉴에 "코나 블렌드"나 "코나 스타일"이라고만 있으면 대부분 다른 원두입니다.',
        },
        {
          question: '와이키키 해변 근처 어디서 코나 커피를 마실 수 있나요?',
          answer: '와이키키를 가로지르는 중심 거리인 칼라카우아 애비뉴의 카페들에서 진짜 코나 커피를 마실 수 있습니다. 2142 Kalakaua Ave의 Kona Coffee Donut? 는 와이키키 해변에서 도보 약 5분, 진짜 100% 코나를 핫이든 아이스든 제공하며 매일 영업합니다 — 해변 가기 전후로 들르기 좋은 곳이죠.',
        },
        {
          question: '코나 커피는 그만한 값어치를 하나요?',
          answer: '네 — 진짜 100% 코나라면요. 코나는 세계에서 가장 희귀한 프리미엄 커피 중 하나로, 빅아일랜드의 아주 좁은 지역에서 손으로 수확하기 때문에 값이 더 나갑니다. 그 대가는 블랙으로도 마시기 편한, 부드럽고 자연스럽게 산미 낮은 한 잔입니다. 원산지인 하와이 와이키키에서 갓 내린 걸 맛보는 게 직접 판단하는 가장 좋은 방법입니다.',
        },
        {
          question: '코나 커피와 잘 어울리는 건 무엇인가요?',
          answer: '코나의 은은하고 산미 낮으며 살짝 단 풍미는 갓 만든 도넛과 완벽하게 어울립니다. 진짜 100% 코나 한 잔 옆에 따뜻한 모찌 도넛이나 말라사다를 두면, 커피를 압도하지 않으면서 단맛이 균형을 이룹니다. Kona Coffee Donut? 에서는 바로 이 커피와 도넛의 조합이 와이키키의 쉼표를 특별하게 만들어 줍니다.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 진짜 100% 코나를 맛보세요',
      text: '2142 Kalakaua Ave의 Kona Coffee Donut? 에 들러 갓 내린 진짜 100% 코나 커피와 따뜻한 도넛을 즐겨보세요 — 와이키키 해변에서 단 몇 분 거리입니다.',
      menuButton: '코나 커피 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '와이키키 최고의 코나 커피',
    },
  },
  zh: {
    hero: {
      title: '威基基最好的科纳咖啡',
      subtitle: '在威基基海滩附近喝到正宗100%科纳咖啡的地方（2026指南）',
      updated: '2026年6月更新',
      readTime: '阅读约7分钟',
    },
    definition: {
      title: '什么才是最好的科纳咖啡？',
      text: '<strong>最好的科纳咖啡</strong>就是<strong>100%科纳</strong>——只在大岛科纳产区的火山斜坡上种植——而不是"科纳混合（Kona blend）"，后者在法律上只需含有10%的真正科纳豆即可。最好的一杯是<strong>现点现冲</strong>，口感顺滑、<strong>天然低酸</strong>，带有红糖与坚果的香气和干净柔和的尾韵。而<strong>威基基是全世界最容易品尝它的地方之一</strong>：你就在夏威夷，离海滩仅几步之遥，能喝到现冲的正宗100%科纳——若再配上一个温热的甜甜圈，更是绝配。',
    },
    history: {
      title: '科纳咖啡为何如此特别',
      subtitle: '从大岛火山斜坡到你在威基基的那一杯',
      p1: '科纳咖啡是地球上最稀有的优质咖啡之一。它只生长在<strong>大岛极小的一片区域</strong>——仅北科纳和南科纳产区——肥沃的火山土壤、山地海拔、晴朗的清晨和午后温和的云层，造就了近乎完美的种植条件。这片狭窄的区域产量<strong>不到全球咖啡的1%</strong>，这正是真正的科纳既稀有又珍贵的原因。',
      p2: '值得专程寻味的，是每一颗豆子背后的用心。科纳的咖啡果实在成熟时分多次<strong>手工采摘</strong>，再经过精心处理和日晒。最终成就一杯顺滑、<strong>天然低酸</strong>、干净均衡的咖啡。辨别品质最简单的方法就是看标签：寻找<strong>"100% Kona（100%科纳）"</strong>字样。"科纳混合"只需含10%科纳豆即可命名，所以字眼比价格更重要。',
      p3: '对游客而言，<strong>威基基是品尝正宗科纳的绝佳地点</strong>。你不必驱车数小时前往大岛——卡拉卡瓦大道沿线的咖啡馆，在离海滩步行可达的范围内就能提供现冲的正宗科纳。在原产岛屿就地品尝，意味着它是现冲的，而不是在纪念品袋里放了几周的。一杯出色的100%科纳，是你在威基基能享受的最难忘又实惠的体验之一。',
      p4: '如果<strong>再搭配点新鲜的东西</strong>，体验会更上一层楼。一杯顺滑的科纳配上温热的现做甜甜圈，能把匆忙的喝咖啡变成一个小小的仪式。柔和低酸的咖啡完美衬托甜味——正是这种简单而真诚的愉悦，让威基基的清晨（或午后）感觉像一场真正的度假。',
    },
    comparison: {
      title: '怎样才算最好的科纳咖啡',
      subtitle: '如何分辨上乘科纳与其他',
      intro: '并非每一杯标着"科纳"的咖啡都一样。下面是一个简单指南，教你分辨最好的100%科纳、被稀释的混合咖啡，以及该完全避开的：',
      headers: {
        feature: '查看要点',
        bingsu: '最佳（100%科纳）',
        shavedIce: '尚可（科纳混合）',
        kakigori: '避开',
      },
      rows: [
        {
          feature: '科纳含量',
          bingsu: '100%科纳豆',
          shavedIce: '约10%科纳，其余为其他豆',
          kakigori: '0%——无真科纳的"科纳风味"',
        },
        {
          feature: '新鲜度',
          bingsu: '现点现冲',
          shavedIce: '保温壶里放了数小时',
          kakigori: '速溶或久放的预磨粉',
        },
        {
          feature: '酸度与口感',
          bingsu: '顺滑、低酸、尾韵柔和',
          shavedIce: '偏淡、风味不均',
          kakigori: '苦涩、平淡或发酸',
        },
        {
          feature: '标签诚信',
          bingsu: '清楚标明"100% Kona"',
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
          bingsu: '值得专程寻找',
          shavedIce: '应急时还行',
          kakigori: '不值得',
        },
      ],
      note: '最重要的一条原则：坚持要"100%科纳"。如果标签或菜单只写"科纳混合"或"科纳风味"，那你喝的大多是其他豆子。真正科纳的价格反映了它的稀有，而那顺滑低酸的口感，正是你所付的价值所在。',
    },
    types: {
      title: '在威基基喝到最好科纳咖啡的方法',
      subtitle: '确认你喝的是真品的五个简单方法',
      items: [
        {
          name: '认准"100%科纳"',
          korean: '100%科纳，而非混合',
          description: '最重要的一步。向咖啡师询问，或在菜单上查找"100% Kona"字样。如果只写"科纳混合"，你喝的大多是其他豆子。真正用心的咖啡馆会自豪地告诉你冲的是什么——并乐意确认这是货真价实的100%科纳。',
          icon: '☕',
        },
        {
          name: '喝现冲的',
          korean: '现点现冲',
          description: '科纳在现冲时最出彩，而非搁置数小时。手冲、现滴或刚萃取的浓缩，能带出科纳特有的顺滑红糖甜味。新鲜永远胜过纪念品袋——这是要当场品尝的一杯。',
          icon: '🔥',
        },
        {
          name: '先喝黑咖啡，再点拿铁',
          korean: '先黑后奶',
          description: '想真正体会科纳的价值，先纯黑啜一口——那里能尝到它天然的低酸和干净的坚果尾韵。然后若喜欢，再点拿铁或冰版。好的科纳顺滑到可以单独享用，又浓郁到能与牛奶相得益彰。',
          icon: '🥛',
        },
        {
          name: '配一个新鲜甜甜圈',
          korean: '咖啡＋甜甜圈',
          description: '科纳柔和低酸的特质，与甜食堪称绝配。在杯旁放一个温热现做的麻糬甜甜圈或马拉萨达，就能把匆匆一杯变成一份小确幸。这个人人喜爱的组合，让威基基的小憩格外特别。',
          icon: '🍩',
        },
        {
          name: '趁早，或在海滩边',
          korean: '清晨＋海滩边',
          description: '最好的科纳时刻是从容不迫的。在人潮涌来前的清晨来一杯，或外带到威基基海滩边散步。伴着海景品尝正宗100%科纳，是你在岛上能做的最简单也最难忘的事情之一。',
          icon: '🌅',
        },
      ],
    },
    whyHawaii: {
      title: '为什么要在威基基喝科纳咖啡',
      points: [
        {
          title: '你就在原产地——夏威夷',
          description: '科纳咖啡只生长在夏威夷，在大岛的科纳斜坡上。在这里喝，意味着你在它所属之地品尝它——新鲜、正宗，被孕育它的岛屿环绕。要享受一杯真正的100%科纳，地球上没有比夏威夷更地道的地方了。',
        },
        {
          title: '现冲胜过纪念品袋',
          description: '许多游客买一袋科纳带回家，几周后却发现味道不再那么好。在威基基现冲的一杯——离海滩步行可达——捕捉的是科纳的巅峰：顺滑、芳香、风味十足。先尝现冲的，再决定带什么回家。',
        },
        {
          title: '100%科纳＋甜甜圈组合',
          description: '科纳天然的低酸和柔和甜味，是温热现做甜甜圈的完美搭档。一杯正宗100%科纳配上刚做好的麻糬甜甜圈或马拉萨达，能把简单的一杯咖啡变成难忘的小体验——正是度假该有的享受。',
        },
        {
          title: '从威基基海滩步行可达',
          description: '想品尝上乘科纳，不必驱车数小时前往大岛。卡拉卡瓦大道沿线的咖啡馆，离沙滩仅几分钟就能冲出正宗100%科纳。世界级咖啡离你的酒店和大海只有几步之遥——这份便利，正是威基基如此适合品味它的原因。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基喝正宗科纳咖啡的地方',
      intro: '如果你想在威基基海滩附近喝到正宗100%科纳，Kona Coffee Donut? 是一个很好的起点。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '就在威基基中心地段的卡拉卡瓦大道上，Kona Coffee Donut? 提供正宗100%科纳咖啡——我们使用檀香山咖啡（Honolulu Coffee）的科纳豆，无论热饮还是冰饮都现冲现做。再配上一个现做的麻糬甜甜圈或马拉萨达，就是完美的威基基小憩。我们距威基基海滩步行约5分钟，每天营业，随时可以来一杯顺滑低酸的正宗咖啡。',
        highlights: [
          '正宗100%科纳咖啡（檀香山咖啡豆），冷热皆有',
          '现冲，搭配麻糬甜甜圈与马拉萨达',
          '距威基基海滩约5分钟',
          '每天营业，上午7点至晚上9点',
        ],
      },
      cta: '查看我们的科纳咖啡菜单',
    },
    howToEat: {
      title: '冲出最佳一杯的小贴士',
      subtitle: '充分享受你的科纳咖啡',
      tips: [
        {
          title: '确认是"100%科纳"',
          description: '点单前，留意或询问"100% Kona"。这是区分一杯特别咖啡与普通咖啡的唯一细节。好的咖啡馆会准确告诉你冲的是什么——在 Kona Coffee Donut?，那意味着每一次都是檀香山咖啡的正宗100%科纳。',
        },
        {
          title: '先纯黑品尝',
          description: '第一口不妨不加奶不加糖。那里才能真正尝出科纳天然的低酸和顺滑、坚果般的甜味。纯黑尝过之后，你就会明白人们为何专程寻找正宗科纳——然后再随你喜好调味。',
        },
        {
          title: '冷热皆宜',
          description: '科纳柔和低酸的特质，清晨喝热的出彩，威基基温暖午后喝冰的同样精彩。冰科纳依旧顺滑，不会变得尖锐或发酸，所以天气合适时尽管点杯冷的。',
        },
        {
          title: '搭配点新鲜的',
          description: '好的一杯，旁边有一口小食会更出色。科纳顺滑的甜味与温热现做的甜甜圈相得益彰。两样都点，找个座位，让匆匆一杯咖啡变成一段值得放慢脚步的威基基小仪式。',
        },
      ],
    },
    faq: {
      title: '关于威基基科纳咖啡的常见问题',
      items: [
        {
          question: '威基基最好的科纳咖啡是哪家？',
          answer: '威基基最好的科纳咖啡是现冲的正宗100%科纳，而非"科纳混合"。寻找清楚标明"100% Kona"且现点现冲的咖啡馆。卡拉卡瓦大道上的 Kona Coffee Donut? 提供正宗100%科纳（檀香山咖啡豆），冷热皆有，距威基基海滩仅几分钟，还能搭配现做甜甜圈。',
        },
        {
          question: '我怎么知道它是真正的100%科纳？',
          answer: '在标签或菜单上查找确切的"100% Kona"字样。按法律规定，"科纳混合"只需约10%的真科纳豆，所以字眼很重要。真正的咖啡馆会乐意确认他们冲的是100%科纳，并告诉你来源——比如檀香山咖啡的科纳豆。如果菜单只写"科纳混合"或"科纳风味"，那你喝的大多是其他豆子。',
        },
        {
          question: '在威基基海滩附近哪里能喝到科纳咖啡？',
          answer: '你可以在贯穿威基基的主街卡拉卡瓦大道沿线的咖啡馆喝到正宗科纳咖啡。位于 2142 Kalakaua Ave 的 Kona Coffee Donut? 距威基基海滩步行约5分钟，提供冷热皆有的正宗100%科纳，每天营业——是去海滩前后顺路一停的好去处。',
        },
        {
          question: '科纳咖啡值得吗？',
          answer: '值得——如果是正宗100%科纳的话。科纳是世界上最稀有的优质咖啡之一，产于大岛极小的一片区域并手工采摘，所以价格更高。回报是一杯顺滑、天然低酸、连黑咖啡都易于入口的好咖啡。在原产岛屿的威基基现尝现冲的，是你亲自判断的最佳方式。',
        },
        {
          question: '什么和科纳咖啡最搭？',
          answer: '科纳柔和、低酸、微甜的特质，与现做甜甜圈搭配得天衣无缝。在一杯正宗100%科纳旁放一个温热的麻糬甜甜圈或马拉萨达，甜味恰到好处，又不会盖过咖啡。在 Kona Coffee Donut?，正是这份咖啡加甜甜圈的组合，让威基基的小憩格外特别。',
        },
      ],
    },
    cta: {
      title: '在威基基品尝正宗100%科纳',
      text: '前往 2142 Kalakaua Ave 的 Kona Coffee Donut?，品尝现冲的正宗100%科纳咖啡，配上温热的甜甜圈——距威基基海滩仅几分钟。',
      menuButton: '查看科纳咖啡菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '威基基最好的科纳咖啡',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Best Kona Coffee in Waikiki (2026): Where to Drink Real 100% Kona',
  description: 'A local guide to the best Kona coffee in Waikiki — what "100% Kona" really means, how to spot the real thing, and where to drink it fresh near Waikiki Beach.',
  image: 'https://www.konacoffeedonut.com/images/blog/best-kona-coffee-waikiki.jpeg',
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
  datePublished: '2026-06-18',
  dateModified: '2026-06-18',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/en/blog/best-kona-coffee-waikiki',
  },
  keywords: 'best kona coffee waikiki, best coffee waikiki, where to drink kona coffee, 100% kona coffee waikiki, kona coffee near waikiki beach',
  wordCount: 1400,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best Kona coffee in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best Kona coffee in Waikiki is real 100% Kona, brewed fresh — not a "Kona blend." Look for cafes that clearly state "100% Kona" and brew to order. Kona Coffee Donut? on Kalākaua Avenue pours real 100% Kona (Honolulu Coffee beans), hot or iced, just minutes from Waikiki Beach, and pairs it with fresh donuts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know it\'s real 100% Kona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Check the label or menu for the exact words "100% Kona." By law, a "Kona blend" only needs about 10% real Kona beans, so the wording matters. A genuine cafe will happily confirm they pour 100% Kona and tell you the source — for example, Honolulu Coffee\'s Kona beans. If a menu only says "Kona blend" or "Kona style," you\'re mostly drinking other beans.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I drink Kona coffee near Waikiki Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can drink real Kona coffee at cafes along Kalākaua Avenue, the main street running through Waikiki. Kona Coffee Donut? at 2142 Kalakaua Ave is about a 5-minute walk from Waikiki Beach, serves real 100% Kona hot or iced, and is open daily — an easy stop before or after the beach.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Kona coffee worth it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — if it\'s real 100% Kona. Kona is one of the rarest premium coffees in the world, grown in a tiny region of the Big Island and hand-picked, which is why it costs more. The payoff is a smooth, naturally low-acid cup that\'s easy to drink black. Trying it fresh in Waikiki, at the source islands, is the best way to decide for yourself.',
      },
    },
    {
      '@type': 'Question',
      name: 'What pairs well with Kona coffee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona\'s mellow, low-acid, lightly sweet character pairs beautifully with fresh donuts. A warm mochi donut or malasada next to a cup of real 100% Kona balances the sweetness without overwhelming the coffee. At Kona Coffee Donut?, the coffee-and-donut combo is exactly what makes a Waikiki break feel special.',
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

export default function BestKonaCoffeeWaikikiPage() {
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
          src="/images/blog/best-kona-coffee-waikiki.jpeg"
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

        {/* History of Kona Coffee */}
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

        {/* Types — How to Get the Best Kona */}
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

        {/* Why Drink Kona in Waikiki */}
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

        {/* Where to Drink Kona in Waikiki */}
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
              href={`/${locale}/blog/what-is-kona-coffee`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 font-semibold transition-colors"
            >
              → What Is Kona Coffee?
            </Link>
            <Link
              href={`/${locale}/blog/is-kona-coffee-worth-it`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Is Kona Coffee Worth It?
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
