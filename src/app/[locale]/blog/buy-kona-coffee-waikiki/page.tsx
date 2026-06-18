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
      title: 'Where to Buy Kona Coffee in Waikiki',
      subtitle: 'Sip It Fresh or Take Whole Beans Home — Your 2026 Guide to Real 100% Kona',
      updated: 'Updated June 2026',
      readTime: '7 min read',
    },
    definition: {
      title: 'Where to Buy Kona Coffee in Waikiki',
      text: 'There are <strong>two ways to "buy" Kona coffee in Waikiki</strong>: <strong>by the cup</strong> (a fresh hot or iced brew you drink right now) or <strong>by the bag</strong> (whole beans or ground coffee you take home as a gift or souvenir). The catch? Many "Kona" souvenir bags are actually <strong>"Kona Blend"</strong> — and Hawaii law lets a bag labeled that way contain as little as <strong>10% real Kona</strong>. To buy the real thing, look for the words <strong>"100% Kona"</strong> on the label. The easiest way to taste genuine 100% Kona is by the cup — which is exactly what we serve at Kona Coffee Donut? on Kalākaua Avenue.',
    },
    history: {
      title: 'Understanding Real Kona Coffee',
      subtitle: 'Why It Is Rare, What the Labels Mean, and How to Buy Smart',
      p1: 'Real Kona coffee is <strong>genuinely rare and genuinely pricey</strong> — and for good reason. It is grown only on the volcanic slopes of the Kona districts on Hawaii Island, a tiny strip of farmland just a few miles wide. Every cherry is hand-picked on family farms, and total annual production is a rounding error compared to global coffee. Scarcity plus American-wage hand labor is why a bag of 100% Kona often costs $40–$60 a pound. If a "Kona" bag is cheap, that is your first clue something is off.',
      p2: 'That brings us to the <strong>"Kona Blend" label trap</strong>. Hawaii law allows a coffee to be sold as "Kona Blend" while containing as little as <strong>10% actual Kona coffee</strong> — the other 90% can be cheap beans from anywhere in the world. Souvenir shops love these blends because they look local and sell cheap, but a 10% blend tastes almost nothing like the real thing. The word <strong>"Blend"</strong> on a bag is the single biggest red flag for visitors trying to buy a genuine Kona gift.',
      p3: 'So <strong>how do you read a bag of coffee</strong> and buy with confidence? Look for three things. First, the words <strong>"100% Kona"</strong> printed clearly — not "Kona Blend," not "Kona Roast," not "Kona Style." Second, an <strong>origin or estate name</strong> and ideally the specific farm or district. Third, a <strong>roast date</strong> on the bag — fresh-roasted beans (within the last few weeks) taste dramatically better than something that has sat on a shelf for a year. When in doubt, ask the seller point-blank: "Is this 100% Kona?"',
      p4: 'Finally, decide <strong>cup vs bag</strong> for your trip. If you just want to <em>experience</em> what real Kona tastes like, buying it <strong>by the cup</strong> is the smart move — you get it freshly brewed, you pay a few dollars instead of fifty, and you do not have to haul beans home. If you want a <strong>gift or souvenir</strong> that actually impresses, buy <strong>whole beans labeled "100% Kona"</strong> with a recent roast date. Many visitors do both: enjoy a cup now near Waikiki Beach, then pick up beans to take home.',
    },
    comparison: {
      title: '100% Kona vs Kona Blend vs Souvenir Coffee',
      subtitle: 'What Are You Actually Buying?',
      intro: 'The word "Kona" on a bag can mean wildly different things. Here is how the three most common options compare — so you know exactly what you are paying for:',
      headers: {
        feature: 'Feature',
        bingsu: '100% Kona',
        shavedIce: 'Kona Blend (10%)',
        kakigori: 'Generic souvenir',
      },
      rows: [
        {
          feature: 'Kona content',
          bingsu: '100% real Kona beans',
          shavedIce: 'As little as 10% Kona',
          kakigori: 'Often little to none',
        },
        {
          feature: 'Label to look for',
          bingsu: '"100% Kona"',
          shavedIce: '"Kona Blend"',
          kakigori: '"Kona Style" / "Hawaiian"',
        },
        {
          feature: 'Taste',
          bingsu: 'Smooth, bright, clean finish',
          shavedIce: 'Mostly tastes like the filler beans',
          kakigori: 'Generic, often stale',
        },
        {
          feature: 'Price',
          bingsu: '$40–$60+ per lb',
          shavedIce: '$10–$20 per lb',
          kakigori: 'Cheapest of all',
        },
        {
          feature: 'Best for',
          bingsu: 'A real gift you are proud of',
          shavedIce: 'Budget, with eyes open',
          kakigori: 'Avoid',
        },
        {
          feature: 'Worth buying?',
          bingsu: 'Yes — the real deal',
          shavedIce: 'Only if labeled honestly',
          kakigori: 'No',
        },
      ],
      note: 'Bottom line: only buy bags that clearly say "100% Kona." If a bag says "Blend" or just "Kona Style," you are mostly paying for ordinary coffee in a Hawaiian-looking package.',
    },
    types: {
      title: 'Ways to Buy Kona Coffee in Waikiki',
      subtitle: 'From a Fresh Cup to a Take-Home Gift',
      items: [
        {
          name: 'By the Cup — Freshly Brewed',
          korean: 'Drink it fresh',
          description: 'The simplest and cheapest way to actually taste real 100% Kona. Order it hot, freshly brewed, and you get the smooth, bright, clean flavor Kona is famous for — without committing to a $50 bag. This is the perfect way for a visitor to find out whether they love Kona before buying beans to take home.',
          icon: '☕',
        },
        {
          name: 'Whole Bean to Take Home',
          korean: 'Whole bean',
          description: 'The best option for a gift or souvenir. Whole beans stay fresh far longer than ground coffee, so they survive the trip home and still taste great weeks later. Look for a bag clearly labeled "100% Kona" with a recent roast date, and grind it fresh once you are back home for the best cup.',
          icon: '🫘',
        },
        {
          name: 'Ground (If You Have No Grinder)',
          korean: 'Pre-ground',
          description: 'If the person you are gifting does not own a grinder, pre-ground 100% Kona is a practical choice. It is a little less fresh than whole bean, so buy it close to your departure date and store it sealed. Still infinitely better than a cheap "Kona Blend" — as long as the label says 100% Kona.',
          icon: '⚙️',
        },
        {
          name: 'As a Gift / Souvenir',
          korean: 'Gift-ready',
          description: 'Kona coffee is one of the most genuinely Hawaiian gifts you can bring home — lightweight, packable, and prized by coffee lovers. A clearly labeled "100% Kona" bag tells the recipient you bought the real thing, not a tourist-shop blend. Pair it with a note about where it is grown for extra points.',
          icon: '🎁',
        },
        {
          name: 'Iced Kona To-Go',
          korean: 'Iced & to-go',
          description: 'Hawaii is hot, and iced 100% Kona is the move for walking around Waikiki. Grab a cup to-go, head toward the beach, and enjoy real Kona cold-brewed or iced. It is the most refreshing way to taste genuine Kona on a sunny afternoon — and it pairs perfectly with a fresh donut.',
          icon: '🧊',
        },
      ],
    },
    whyHawaii: {
      title: 'Why Buy Kona Coffee in Waikiki',
      points: [
        {
          title: 'You Are at the Source',
          description: 'Kona coffee comes from one place on Earth: the Kona districts of Hawaii Island. When you buy it in Waikiki, you are buying it where it is grown — not a re-export marked up in a mainland grocery store. There is no more authentic place to pick up real 100% Kona than right here in Hawaii.',
        },
        {
          title: 'Freshest Possible',
          description: 'Coffee is at its best within weeks of roasting, and in Hawaii you can buy Kona that was roasted close to home and close to now. That freshness is something you simply cannot get from a bag that shipped across an ocean and sat on a shelf. Fresh-roasted 100% Kona tastes noticeably brighter and cleaner.',
        },
        {
          title: 'A Great Edible Souvenir',
          description: 'Forget the fridge magnets — coffee is a souvenir people actually use and remember. A bag of genuine 100% Kona is lightweight, easy to pack, and beloved by anyone who appreciates good coffee. It is one of the few Hawaiian gifts that is both authentically local and genuinely useful.',
        },
        {
          title: 'Pair a Cup Now With a Donut',
          description: 'Buying beans for later is great, but you are on vacation now — so enjoy a cup of real Kona today. At Kona Coffee Donut? you can sip 100% Kona, hot or iced, alongside a fresh donut just minutes from Waikiki Beach. It is the easiest, tastiest way to experience Kona on your trip.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Drink 100% Kona in Waikiki',
      intro: 'If you want to taste real 100% Kona by the cup, Kona Coffee Donut? on Kalākaua Avenue is an easy, central spot.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Right on Kalākaua Avenue in the heart of Waikiki, Kona Coffee Donut? serves real 100% Kona coffee — brewed from Honolulu Coffee beans — by the cup, hot or iced, alongside fresh-made donuts. We are about a 5-minute walk from Waikiki Beach and open daily from 7AM to 9PM, so it is an easy stop whether you want a morning cup or an iced Kona to-go. Want beans to take home? Just ask us in store.',
        highlights: [
          'Real 100% Kona coffee by the cup, hot or iced',
          'Brewed from quality Honolulu Coffee beans',
          'About a 5-minute walk from Waikiki Beach',
          'Open daily 7AM–9PM — pair it with a fresh donut',
        ],
      },
      cta: 'View Our Kona Coffee Menu',
    },
    howToEat: {
      title: 'How to Buy the Real Thing',
      subtitle: 'Four Quick Rules So You Never Get Stuck With a Fake',
      tips: [
        {
          title: 'Insist on "100% Kona" on the Label',
          description: 'This is the only rule that really matters. If the bag does not clearly say "100% Kona," assume it is a blend. Ignore words like "Kona Roast," "Kona Style," or "Hawaiian" — they are marketing, not a guarantee. When the label is vague, ask the seller directly: "Is this 100 percent Kona?"',
        },
        {
          title: 'Check the Roast Date',
          description: 'Great coffee is fresh coffee. Look for a roast date printed on the bag and choose something roasted within the last few weeks. A beautiful "100% Kona" label means little if the beans have been sitting on a shelf for a year. Fresh roast date plus 100% Kona is the winning combination.',
        },
        {
          title: 'Taste Before You Buy a Bag, If You Can',
          description: 'The smartest move for a visitor is to taste Kona by the cup first. Buy a fresh-brewed 100% Kona cup, decide whether you love it, and only then commit to a $40–$60 bag. There is no reason to gamble fifty dollars on beans before you know you enjoy the flavor.',
        },
        {
          title: 'Pair a Fresh Cup With a Donut',
          description: 'The most enjoyable way to do your "Kona research" is over a cup and a snack. Sit down with a fresh-brewed 100% Kona and a donut, take your time, and you will quickly understand what real Kona tastes like — which makes you a much smarter buyer when you shop for beans.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About Buying Kona Coffee',
      items: [
        {
          question: 'Where can I buy Kona coffee in Waikiki?',
          answer: 'You can buy Kona coffee in Waikiki in two ways: by the cup at cafes, or by the bag at shops that sell whole beans. To taste real 100% Kona by the cup, stop by Kona Coffee Donut? at 2142 Kalakaua Ave — we brew 100% Kona, hot or iced, just minutes from Waikiki Beach. For beans to take home, look for any retailer whose bags clearly say "100% Kona" with a roast date.',
        },
        {
          question: 'What is the difference between 100% Kona and Kona Blend?',
          answer: '100% Kona is made entirely from coffee grown in the Kona districts of Hawaii Island. "Kona Blend" is allowed under Hawaii law to contain as little as 10% real Kona, with the other 90% being cheaper beans from elsewhere. A 100% Kona bag tastes smooth, bright, and clean; a 10% blend mostly tastes like its filler beans. Always look for the words "100% Kona" on the label.',
        },
        {
          question: 'Is Kona coffee a good souvenir or gift?',
          answer: 'Yes — Kona coffee is one of the best Hawaiian souvenirs. It is lightweight, easy to pack, genuinely local, and loved by anyone who appreciates good coffee. For a gift that truly impresses, buy whole beans clearly labeled "100% Kona" with a recent roast date, rather than a cheap "Kona Blend" from a tourist shop.',
        },
        {
          question: 'How much does Kona coffee cost?',
          answer: 'Real 100% Kona typically costs about $40–$60 per pound because it is rare and hand-picked on small family farms. "Kona Blend" is cheaper (often $10–$20 a pound) but contains as little as 10% Kona. If a "Kona" bag is surprisingly cheap, it is almost certainly a blend. By the cup, a fresh 100% Kona coffee costs just a few dollars — the most affordable way to taste the real thing.',
        },
        {
          question: 'Where can I drink Kona coffee near Waikiki Beach?',
          answer: 'Kona Coffee Donut? at 2142 Kalakaua Ave serves real 100% Kona coffee by the cup, hot or iced, about a 5-minute walk from Waikiki Beach. We are open daily from 7AM to 9PM, so you can grab a morning cup or an iced Kona to-go and enjoy it with a fresh donut.',
        },
      ],
    },
    cta: {
      title: 'Taste Real 100% Kona in Waikiki',
      text: 'Visit Kona Coffee Donut? at 2142 Kalakaua Ave and taste genuine 100% Kona coffee by the cup — hot or iced — with a fresh donut, just minutes from Waikiki Beach.',
      menuButton: 'View Kona Coffee Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'Where to Buy Kona Coffee in Waikiki',
    },
  },
  ja: {
    hero: {
      title: 'ワイキキでコナコーヒーを買うなら',
      subtitle: 'カップで味わう・豆で持ち帰る — 本物の100%コナを買うための2026年ガイド',
      updated: '2026年6月更新',
      readTime: '7分で読める',
    },
    definition: {
      title: 'ワイキキでコナコーヒーを買うなら',
      text: 'ワイキキでコナコーヒーを「買う」には、<strong>2つの方法</strong>があります。<strong>カップで買う</strong>（今すぐ飲める淹れたてのホットまたはアイス）か、<strong>袋で買う</strong>（お土産やギフトに持ち帰る豆や粉）か。落とし穴は何かというと、お土産用の「コナ」の袋の多くが実は<strong>「コナブレンド」</strong>だということ。ハワイの法律では、そう表示された袋に含まれる本物のコナは<strong>わずか10%</strong>でもよいのです。本物を買うには、ラベルに<strong>「100% Kona」</strong>と書かれているかを確認しましょう。本物の100%コナを最も手軽に味わう方法はカップで飲むこと — それこそが、カラカウア通りのKona Coffee Donut?で提供しているものです。',
    },
    history: {
      title: '本物のコナコーヒーを理解する',
      subtitle: 'なぜ希少なのか、ラベルの意味、賢い買い方',
      p1: '本物のコナコーヒーは<strong>本当に希少で、本当に高価</strong>です — それには理由があります。コナコーヒーは、ハワイ島コナ地区の火山の斜面、わずか数マイル幅の小さな農地でしか栽培されません。すべての実は家族経営の農園で手摘みされ、年間生産量は世界のコーヒーと比べればごくわずか。希少性に加え、アメリカの賃金水準での手作業労働 — だからこそ100%コナは1ポンドあたり40〜60ドルもするのです。「コナ」の袋が安すぎるなら、それが最初の警告サインです。',
      p2: 'ここで<strong>「コナブレンド」のラベルの罠</strong>です。ハワイの法律では、実際のコナがわずか<strong>10%</strong>しか入っていなくても「コナブレンド」として販売できます — 残りの90%は世界のどこからでも仕入れた安い豆でかまいません。お土産店がこうしたブレンドを好むのは、地元産に見えて安く売れるから。しかし10%ブレンドは本物とはまるで別物の味です。袋に書かれた<strong>「Blend（ブレンド）」</strong>の文字は、本物のコナをギフトに買いたい旅行者にとって最大の危険信号です。',
      p3: 'では<strong>コーヒーの袋をどう読めば</strong>、自信を持って買えるのでしょうか。3つを確認してください。1つ目は、<strong>「100% Kona」</strong>とはっきり印字されていること — 「Kona Blend」でも「Kona Roast」でも「Kona Style」でもなく。2つ目は、<strong>産地名やエステート（農園）名</strong>、できれば具体的な農園や地区の名前。3つ目は、袋に記載された<strong>焙煎日（ロースト日）</strong> — 数週間以内に焙煎された豆は、1年棚に置かれた豆より格段においしいです。迷ったら売り手にはっきり聞きましょう。「これは100%コナですか？」',
      p4: '最後に、旅行に合わせて<strong>カップか袋か</strong>を決めましょう。本物のコナの味を<em>体験</em>したいだけなら、<strong>カップで買う</strong>のが賢い選択 — 淹れたてが飲めて、50ドルではなく数ドルで済み、豆を持ち帰る手間もありません。本当に喜ばれる<strong>ギフトやお土産</strong>が欲しいなら、焙煎日が新しい<strong>「100% Kona」と表示された豆</strong>を買いましょう。両方楽しむ旅行者も多いです — まずワイキキビーチの近くで一杯、それから持ち帰り用の豆を。',
    },
    comparison: {
      title: '100%コナ vs コナブレンド vs お土産コーヒー',
      subtitle: 'あなたが本当に買っているのは？',
      intro: '袋に書かれた「Kona」の一語が、まったく違うものを意味することがあります。最もよくある3つの選択肢を比較してみましょう — 何にお金を払っているのかが、はっきりわかります：',
      headers: {
        feature: '特徴',
        bingsu: '100%コナ',
        shavedIce: 'コナブレンド (10%)',
        kakigori: '一般的なお土産品',
      },
      rows: [
        {
          feature: 'コナ含有率',
          bingsu: '100%本物のコナ豆',
          shavedIce: 'わずか10%のことも',
          kakigori: 'ほぼ、または全く入っていない',
        },
        {
          feature: '探すべきラベル',
          bingsu: '「100% Kona」',
          shavedIce: '「Kona Blend」',
          kakigori: '「Kona Style」/「Hawaiian」',
        },
        {
          feature: '味わい',
          bingsu: 'なめらか・明るい・クリーンな後味',
          shavedIce: 'ほぼ混ぜ物の豆の味',
          kakigori: '平凡、古いことも多い',
        },
        {
          feature: '価格',
          bingsu: '1ポンド40〜60ドル以上',
          shavedIce: '1ポンド10〜20ドル',
          kakigori: '最も安い',
        },
        {
          feature: 'こんな人に',
          bingsu: '胸を張れる本物のギフトに',
          shavedIce: '承知の上で予算重視なら',
          kakigori: '避けるべき',
        },
        {
          feature: '買う価値は？',
          bingsu: 'あり — 本物',
          shavedIce: '正直な表示の場合のみ',
          kakigori: 'なし',
        },
      ],
      note: '結論：「100% Kona」とはっきり書かれた袋だけを買いましょう。「Blend」や「Kona Style」としか書かれていなければ、ハワイ風のパッケージに入った普通のコーヒーにお金を払っているだけです。',
    },
    types: {
      title: 'ワイキキでコナコーヒーを買う方法',
      subtitle: '淹れたての一杯から、持ち帰りギフトまで',
      items: [
        {
          name: 'カップで — 淹れたて',
          korean: '淹れたてを飲む',
          description: '本物の100%コナを実際に味わう、最もシンプルで安い方法。淹れたてのホットを注文すれば、コナで有名ななめらかで明るくクリーンな味わいを、50ドルの袋を買わずに楽しめます。豆を持ち帰る前に、自分がコナを好きかどうかを確かめるのに最適な方法です。',
          icon: '☕',
        },
        {
          name: '持ち帰り用の豆（ホールビーン）',
          korean: 'ホールビーン',
          description: 'ギフトやお土産に最適な選択。豆のまま（ホールビーン）は粉よりずっと長く鮮度を保つので、持ち帰りの旅にも耐え、数週間後でもおいしく楽しめます。「100% Kona」と明記され、焙煎日が新しい袋を選び、帰宅後に挽きたてで淹れれば最高の一杯に。',
          icon: '🫘',
        },
        {
          name: '挽いた粉（グラインダーがない方に）',
          korean: '挽いた粉',
          description: '贈る相手がグラインダーを持っていないなら、挽いた100%コナが実用的。豆のままより鮮度はやや劣るので、出発日の近くに買い、密封して保存しましょう。それでも安い「コナブレンド」よりは断然おいしい — ラベルに100% Konaと書かれていればの話ですが。',
          icon: '⚙️',
        },
        {
          name: 'ギフト・お土産に',
          korean: 'ギフト向き',
          description: 'コナコーヒーは、持ち帰れる中でも最もハワイらしいギフトのひとつ — 軽くて荷物にならず、コーヒー好きに喜ばれます。「100% Kona」とはっきり表示された袋なら、観光地のブレンドではなく本物を買ったと相手に伝わります。産地の話を添えればさらに高ポイント。',
          icon: '🎁',
        },
        {
          name: 'アイスコナをテイクアウト',
          korean: 'アイス・持ち帰り',
          description: 'ハワイは暑いので、ワイキキ散策には100%コナのアイスが一番。テイクアウトで一杯手に入れてビーチへ向かい、コールドブリューやアイスで本物のコナを。晴れた午後に本物のコナを味わう、最も爽やかな方法です — 焼きたてのドーナツとの相性も抜群。',
          icon: '🧊',
        },
      ],
    },
    whyHawaii: {
      title: 'ワイキキでコナコーヒーを買う理由',
      points: [
        {
          title: '産地そのものにいる',
          description: 'コナコーヒーは地球上でただ一カ所、ハワイ島コナ地区から生まれます。ワイキキで買うということは、栽培地で買うということ — 本土のスーパーで値上げされた再輸出品ではありません。本物の100%コナを手に入れるのに、ここハワイ以上に本場らしい場所はありません。',
        },
        {
          title: '考えうる限り新鮮',
          description: 'コーヒーは焙煎から数週間以内が最もおいしく、ハワイなら産地に近く、焙煎したばかりのコナを買えます。その鮮度は、海を越えて届き棚に置かれた袋では決して得られないもの。焙煎したての100%コナは、明らかに明るくクリーンな味わいです。',
        },
        {
          title: '最高の「食べられるお土産」',
          description: '冷蔵庫のマグネットは忘れましょう — コーヒーは実際に使われ、記憶に残るお土産です。本物の100%コナの袋は軽くて荷造りも簡単、良いコーヒーを知る人なら誰もが喜びます。本場ならではでありながら、本当に役立つ数少ないハワイのギフトです。',
        },
        {
          title: '今、一杯をドーナツと一緒に',
          description: '後で飲む豆を買うのも素敵ですが、今は旅行中 — 今日は本物のコナを一杯どうぞ。Kona Coffee Donut?なら、ワイキキビーチからわずか数分で、100%コナをホットやアイスで、焼きたてドーナツと一緒に味わえます。旅でコナを体験する、最も手軽でおいしい方法です。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキで100%コナを飲むなら',
      intro: '本物の100%コナをカップで味わいたいなら、カラカウア通りのKona Coffee Donut?が手軽で便利な一軒です。',
      shop: {
        name: 'Kona Coffee Donut?（コナコーヒードーナツ）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心、カラカウア通り沿いに位置するKona Coffee Donut?は、本物の100%コナコーヒー — ホノルルコーヒーの豆で淹れたもの — をカップで、ホットまたはアイスで、焼きたてのドーナツとともに提供します。ワイキキビーチから徒歩約5分、毎日朝7時から夜9時まで営業。朝の一杯にも、アイスコナのテイクアウトにも立ち寄りやすいお店です。持ち帰り用の豆をご希望ですか？店頭でお気軽にお尋ねください。',
        highlights: [
          '本物の100%コナをカップで、ホットまたはアイスで',
          '上質なホノルルコーヒーの豆で抽出',
          'ワイキキビーチから徒歩約5分',
          '毎日朝7時〜夜9時 — 焼きたてドーナツと一緒に',
        ],
      },
      cta: 'コナコーヒーメニューを見る',
    },
    howToEat: {
      title: '本物を買う方法',
      subtitle: '偽物をつかまないための、4つの簡単なルール',
      tips: [
        {
          title: 'ラベルの「100% Kona」にこだわる',
          description: '本当に大切なのはこのルールだけ。袋に「100% Kona」とはっきり書かれていなければ、ブレンドだと考えましょう。「Kona Roast」「Kona Style」「Hawaiian」といった言葉は無視を — これらは宣伝文句であって保証ではありません。表示が曖昧なら、売り手に直接「これは100%コナですか？」と聞きましょう。',
        },
        {
          title: '焙煎日を確認する',
          description: '良いコーヒーとは新鮮なコーヒー。袋に印字された焙煎日を探し、過去数週間以内に焙煎されたものを選びましょう。「100% Kona」の美しいラベルも、豆が1年棚に置かれていてはほとんど意味がありません。新しい焙煎日と100%コナ、この組み合わせが勝ちです。',
        },
        {
          title: 'できれば、袋を買う前に味わう',
          description: '旅行者にとって一番賢いのは、まずカップでコナを味わうこと。淹れたての100%コナを一杯買い、好きかどうかを確かめ、そのうえで40〜60ドルの袋を買いましょう。味が気に入るかわからないうちに、50ドルを豆に賭ける理由はありません。',
        },
        {
          title: '淹れたての一杯をドーナツと一緒に',
          description: '「コナの下調べ」を一番楽しくする方法は、一杯と軽食をとりながら。淹れたての100%コナとドーナツを前に、ゆっくり時間をかければ、本物のコナの味がすぐにわかります — そうすれば豆を買うときも、ずっと賢い買い手になれます。',
        },
      ],
    },
    faq: {
      title: 'コナコーヒーの購入に関するよくある質問',
      items: [
        {
          question: 'ワイキキでコナコーヒーはどこで買えますか？',
          answer: 'ワイキキでコナコーヒーを買う方法は2つあります。カフェでカップで買うか、豆を売る店で袋で買うか。本物の100%コナをカップで味わうなら、2142 Kalakaua AveのKona Coffee Donut?へ。ワイキキビーチから数分の場所で、100%コナをホットまたはアイスで淹れています。持ち帰りの豆は、袋に「100% Kona」と焙煎日がはっきり書かれた販売店を探しましょう。',
        },
        {
          question: '100%コナとコナブレンドの違いは何ですか？',
          answer: '100%コナは、ハワイ島コナ地区で栽培されたコーヒーだけで作られます。「コナブレンド」はハワイの法律上、本物のコナがわずか10%でも認められ、残り90%は他産地の安い豆です。100%コナの袋はなめらかで明るくクリーンな味、10%ブレンドはほぼ混ぜ物の豆の味です。必ずラベルの「100% Kona」の表示を確認しましょう。',
        },
        {
          question: 'コナコーヒーはお土産やギフトに向いていますか？',
          answer: 'はい — コナコーヒーは最高のハワイ土産のひとつです。軽くて荷造りも簡単、本場ならではで、良いコーヒーを知る人なら誰もが喜びます。本当に喜ばれるギフトには、観光地の安い「コナブレンド」ではなく、「100% Kona」とはっきり表示され焙煎日の新しい豆を選びましょう。',
        },
        {
          question: 'コナコーヒーはいくらしますか？',
          answer: '本物の100%コナは、希少で小さな家族農園で手摘みされるため、通常1ポンド約40〜60ドルします。「コナブレンド」はより安い（1ポンド10〜20ドルが多い）ですが、コナはわずか10%しか入っていないことも。「コナ」の袋が驚くほど安ければ、ほぼ間違いなくブレンドです。カップなら淹れたての100%コナは数ドル — 本物を味わう最も手頃な方法です。',
        },
        {
          question: 'ワイキキビーチの近くでコナコーヒーを飲める場所は？',
          answer: '2142 Kalakaua AveのKona Coffee Donut?では、本物の100%コナコーヒーをカップで、ホットまたはアイスで提供しています。ワイキキビーチから徒歩約5分。毎日朝7時から夜9時まで営業しているので、朝の一杯やアイスコナのテイクアウトを、焼きたてドーナツと一緒にお楽しみいただけます。',
        },
      ],
    },
    cta: {
      title: 'ワイキキで本物の100%コナを味わおう',
      text: '2142 Kalakaua AveのKona Coffee Donut?で、本物の100%コナコーヒーをカップで — ホットまたはアイスで — 焼きたてドーナツとともに。ワイキキビーチから数分です。',
      menuButton: 'コナコーヒーメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'ワイキキでコナコーヒーを買うなら',
    },
  },
  ko: {
    hero: {
      title: '와이키키에서 코나커피 사는 곳',
      subtitle: '한 잔으로 즐기거나 원두로 가져가기 — 진짜 100% 코나를 위한 2026 가이드',
      updated: '2026년 6월 업데이트',
      readTime: '7분 소요',
    },
    definition: {
      title: '와이키키에서 코나커피 사는 곳',
      text: '와이키키에서 코나커피를 \'사는\' 방법은 <strong>두 가지</strong>입니다. <strong>한 잔으로 사기</strong>(지금 바로 마시는 갓 내린 따뜻한 또는 아이스 커피)와 <strong>봉지로 사기</strong>(선물이나 기념품으로 가져가는 원두 또는 분쇄 커피). 함정이 뭐냐고요? 기념품용 \'코나\' 봉지의 상당수가 사실은 <strong>\'코나 블렌드\'</strong>라는 점입니다. 하와이 법은 그렇게 표시된 봉지에 진짜 코나가 <strong>단 10%</strong>만 들어 있어도 허용합니다. 진짜를 사려면 라벨에 <strong>\'100% Kona\'</strong>라고 적혀 있는지 확인하세요. 진짜 100% 코나를 가장 손쉽게 맛보는 방법은 한 잔으로 마시는 것 — 바로 칼라카우아 애비뉴의 Kona Coffee Donut?에서 제공하는 것입니다.',
    },
    history: {
      title: '진짜 코나커피 이해하기',
      subtitle: '왜 희귀한지, 라벨이 뜻하는 것, 그리고 똑똑하게 사는 법',
      p1: '진짜 코나커피는 <strong>정말로 희귀하고 정말로 비쌉니다</strong> — 그럴 만한 이유가 있습니다. 코나커피는 오직 하와이 빅아일랜드 코나 지역의 화산 경사면, 폭이 몇 마일에 불과한 작은 농지에서만 재배됩니다. 모든 열매는 가족 농장에서 손으로 따고, 연간 총생산량은 전 세계 커피에 비하면 반올림 오차 수준이죠. 희소성에 미국 임금 수준의 수작업까지 더해지니 — 그래서 100% 코나 한 봉지가 파운드당 40~60달러나 하는 겁니다. \'코나\' 봉지가 싸다면, 그것이 뭔가 이상하다는 첫 번째 신호입니다.',
      p2: '여기서 <strong>\'코나 블렌드\' 라벨의 함정</strong>이 등장합니다. 하와이 법은 실제 코나가 <strong>단 10%</strong>만 들어 있어도 \'코나 블렌드\'로 판매하는 것을 허용합니다 — 나머지 90%는 세계 어디서든 들여온 저렴한 원두여도 됩니다. 기념품점이 이런 블렌드를 좋아하는 이유는 현지 제품처럼 보이면서 싸게 팔리기 때문이죠. 하지만 10% 블렌드는 진짜와는 전혀 다른 맛입니다. 봉지에 적힌 <strong>\'Blend(블렌드)\'</strong>라는 단어는, 진짜 코나를 선물로 사려는 여행자에게 가장 큰 위험 신호입니다.',
      p3: '그렇다면 <strong>커피 봉지를 어떻게 읽고</strong> 자신 있게 사야 할까요? 세 가지를 확인하세요. 첫째, <strong>\'100% Kona\'</strong>가 또렷하게 인쇄되어 있을 것 — \'Kona Blend\'도, \'Kona Roast\'도, \'Kona Style\'도 아닌. 둘째, <strong>원산지나 농장(에스테이트) 이름</strong>, 가능하면 구체적인 농장이나 지역명. 셋째, 봉지에 적힌 <strong>로스팅 날짜</strong> — 최근 몇 주 안에 볶은 원두가 1년 동안 진열대에 있던 것보다 훨씬 맛있습니다. 헷갈리면 판매자에게 단도직입적으로 물으세요. \'이거 100% 코나인가요?\'',
      p4: '마지막으로, 여행에 맞춰 <strong>한 잔이냐 봉지냐</strong>를 정하세요. 진짜 코나가 어떤 맛인지 <em>경험</em>하고 싶을 뿐이라면 <strong>한 잔으로 사는 것</strong>이 현명합니다 — 갓 내린 커피를 50달러가 아닌 몇 달러에 즐기고, 원두를 들고 다닐 필요도 없죠. 정말로 감동을 줄 <strong>선물이나 기념품</strong>을 원한다면, 로스팅 날짜가 최근인 <strong>\'100% Kona\' 표시 원두</strong>를 사세요. 많은 여행자가 둘 다 합니다 — 지금 와이키키 비치 근처에서 한 잔 즐기고, 집에 가져갈 원두를 챙기는 거죠.',
    },
    comparison: {
      title: '100% 코나 vs 코나 블렌드 vs 기념품 커피',
      subtitle: '당신이 진짜로 사는 것은 무엇일까?',
      intro: '봉지에 적힌 \'Kona\'라는 한 단어가 전혀 다른 것을 뜻할 수 있습니다. 가장 흔한 세 가지 선택지를 비교해 보세요 — 무엇에 돈을 내고 있는지 정확히 알 수 있도록:',
      headers: {
        feature: '항목',
        bingsu: '100% 코나',
        shavedIce: '코나 블렌드 (10%)',
        kakigori: '일반 기념품 커피',
      },
      rows: [
        {
          feature: '코나 함량',
          bingsu: '100% 진짜 코나 원두',
          shavedIce: '단 10%일 수도',
          kakigori: '거의 없거나 전혀 없음',
        },
        {
          feature: '확인할 라벨',
          bingsu: '\'100% Kona\'',
          shavedIce: '\'Kona Blend\'',
          kakigori: '\'Kona Style\' / \'Hawaiian\'',
        },
        {
          feature: '맛',
          bingsu: '부드럽고 산뜻하며 깔끔한 끝맛',
          shavedIce: '대부분 채움용 원두 맛',
          kakigori: '평범하고 묵은 경우 많음',
        },
        {
          feature: '가격',
          bingsu: '파운드당 40~60달러 이상',
          shavedIce: '파운드당 10~20달러',
          kakigori: '가장 저렴',
        },
        {
          feature: '이런 분께',
          bingsu: '자신 있게 줄 진짜 선물',
          shavedIce: '알고 사는 가성비용',
          kakigori: '피하세요',
        },
        {
          feature: '살 만한가?',
          bingsu: '네 — 진짜배기',
          shavedIce: '정직하게 표시된 경우만',
          kakigori: '아니요',
        },
      ],
      note: '결론: \'100% Kona\'라고 분명히 적힌 봉지만 사세요. \'Blend\'나 \'Kona Style\'이라고만 적혀 있다면, 하와이풍 포장에 담긴 평범한 커피에 돈을 내는 것일 뿐입니다.',
    },
    types: {
      title: '와이키키에서 코나커피 사는 방법',
      subtitle: '갓 내린 한 잔부터, 집에 가져갈 선물까지',
      items: [
        {
          name: '한 잔으로 — 갓 내린 커피',
          korean: '갓 내려 마시기',
          description: '진짜 100% 코나를 실제로 맛보는 가장 간단하고 저렴한 방법. 갓 내린 따뜻한 커피로 주문하면, 50달러짜리 봉지를 사지 않고도 코나 특유의 부드럽고 산뜻하며 깔끔한 맛을 즐길 수 있습니다. 원두를 사 가기 전에 자신이 코나를 좋아하는지 확인하기에 딱 좋은 방법입니다.',
          icon: '☕',
        },
        {
          name: '집에 가져갈 원두 (홀빈)',
          korean: '원두 그대로',
          description: '선물이나 기념품에 가장 좋은 선택. 원두는 분쇄 커피보다 신선도가 훨씬 오래 유지되어, 가져가는 여정을 견디고 몇 주 뒤에도 맛이 좋습니다. \'100% Kona\'라고 분명히 적히고 로스팅 날짜가 최근인 봉지를 고르고, 집에 돌아가 갈아서 내리면 최고의 한 잔이 됩니다.',
          icon: '🫘',
        },
        {
          name: '분쇄 (그라인더가 없다면)',
          korean: '분쇄 커피',
          description: '선물할 사람이 그라인더가 없다면, 분쇄된 100% 코나가 실용적입니다. 원두보다 신선도는 조금 떨어지니 출발일에 가깝게 사서 밀봉 보관하세요. 그래도 라벨에 100% Kona라고 적혀 있다면, 값싼 \'코나 블렌드\'보다는 비교할 수 없이 좋습니다.',
          icon: '⚙️',
        },
        {
          name: '선물 / 기념품으로',
          korean: '선물용',
          description: '코나커피는 가져갈 수 있는 것 중 가장 하와이다운 선물 중 하나입니다 — 가볍고 짐도 안 되며 커피 애호가들이 아주 좋아하죠. \'100% Kona\'라고 분명히 표시된 봉지라면, 관광지 블렌드가 아니라 진짜를 샀다는 걸 받는 사람에게 알려줍니다. 재배지 이야기를 곁들이면 점수가 더 올라갑니다.',
          icon: '🎁',
        },
        {
          name: '아이스 코나 테이크아웃',
          korean: '아이스 · 포장',
          description: '하와이는 덥습니다. 와이키키를 거닐 땐 100% 코나 아이스가 정답이죠. 한 잔 포장해서 비치 쪽으로 향하며, 진짜 코나를 콜드브루나 아이스로 즐겨 보세요. 화창한 오후에 진짜 코나를 맛보는 가장 시원한 방법이며 — 갓 만든 도넛과도 완벽하게 어울립니다.',
          icon: '🧊',
        },
      ],
    },
    whyHawaii: {
      title: '왜 와이키키에서 코나커피를 살까',
      points: [
        {
          title: '바로 산지에 와 있으니까',
          description: '코나커피는 지구상 단 한 곳, 하와이 빅아일랜드 코나 지역에서 납니다. 와이키키에서 산다는 건 재배지에서 산다는 것 — 본토 마트에서 값이 붙은 재수출품이 아니죠. 진짜 100% 코나를 손에 넣기에, 바로 이곳 하와이보다 더 본고장다운 곳은 없습니다.',
        },
        {
          title: '가능한 한 가장 신선하게',
          description: '커피는 로스팅 후 몇 주 안이 가장 맛있고, 하와이에서는 산지와 가까운 곳에서 갓 볶은 코나를 살 수 있습니다. 그 신선함은 바다를 건너와 진열대에 놓였던 봉지에서는 결코 얻을 수 없죠. 갓 볶은 100% 코나는 눈에 띄게 더 산뜻하고 깔끔한 맛입니다.',
        },
        {
          title: '훌륭한 \'먹는 기념품\'',
          description: '냉장고 자석은 잊으세요 — 커피는 사람들이 실제로 쓰고 기억하는 기념품입니다. 진짜 100% 코나 한 봉지는 가볍고 짐 싸기도 쉬우며, 좋은 커피를 아는 사람이라면 누구나 좋아합니다. 본고장 제품이면서 정말로 쓸모 있는, 몇 안 되는 하와이 선물입니다.',
        },
        {
          title: '지금 한 잔을 도넛과 함께',
          description: '나중에 마실 원두를 사는 것도 좋지만, 지금은 여행 중이잖아요 — 오늘은 진짜 코나를 한 잔 즐기세요. Kona Coffee Donut?에서는 와이키키 비치에서 단 몇 분 거리에서 100% 코나를 따뜻하게 또는 아이스로, 갓 만든 도넛과 함께 맛볼 수 있습니다. 여행에서 코나를 경험하는 가장 쉽고 맛있는 방법입니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 100% 코나 마시는 곳',
      intro: '진짜 100% 코나를 한 잔으로 맛보고 싶다면, 칼라카우아 애비뉴의 Kona Coffee Donut?이 쉽고 중심에 있는 곳입니다.',
      shop: {
        name: 'Kona Coffee Donut? (코나커피도넛)',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키 한복판 칼라카우아 애비뉴에 자리한 Kona Coffee Donut?은 진짜 100% 코나커피 — 호놀룰루 커피 원두로 내린 — 를 한 잔씩, 따뜻하게 또는 아이스로, 갓 만든 도넛과 함께 제공합니다. 와이키키 비치에서 도보 약 5분 거리이고 매일 오전 7시부터 밤 9시까지 영업하니, 아침 한 잔이든 아이스 코나 포장이든 들르기 편한 곳입니다. 집에 가져갈 원두를 원하시나요? 매장에서 편하게 문의해 주세요.',
        highlights: [
          '진짜 100% 코나를 한 잔으로, 따뜻하게 또는 아이스로',
          '품질 좋은 호놀룰루 커피 원두로 추출',
          '와이키키 비치에서 도보 약 5분',
          '매일 오전 7시~밤 9시 — 갓 만든 도넛과 함께',
        ],
      },
      cta: '코나커피 메뉴 보기',
    },
    howToEat: {
      title: '진짜를 사는 법',
      subtitle: '가짜에 걸리지 않기 위한 네 가지 간단한 규칙',
      tips: [
        {
          title: '라벨의 \'100% Kona\'를 고집하세요',
          description: '정말 중요한 규칙은 이것 하나뿐입니다. 봉지에 \'100% Kona\'라고 분명히 적혀 있지 않다면 블렌드라고 보세요. \'Kona Roast\', \'Kona Style\', \'Hawaiian\' 같은 말은 무시하세요 — 마케팅 문구일 뿐 보증이 아닙니다. 표시가 애매하면 판매자에게 직접 물으세요. \'이거 100퍼센트 코나 맞나요?\'',
        },
        {
          title: '로스팅 날짜를 확인하세요',
          description: '좋은 커피는 곧 신선한 커피입니다. 봉지에 인쇄된 로스팅 날짜를 찾아 최근 몇 주 안에 볶은 것을 고르세요. 아무리 멋진 \'100% Kona\' 라벨도 원두가 1년 동안 진열대에 있었다면 의미가 거의 없습니다. 최근 로스팅 날짜 더하기 100% 코나, 이 조합이 정답입니다.',
        },
        {
          title: '가능하면, 봉지를 사기 전에 맛보세요',
          description: '여행자에게 가장 똑똑한 방법은 먼저 코나를 한 잔으로 맛보는 것입니다. 갓 내린 100% 코나 한 잔을 사서 마음에 드는지 확인하고, 그제야 40~60달러짜리 봉지를 사세요. 맛이 좋은지도 모른 채 50달러를 원두에 거는 건 그럴 이유가 없습니다.',
        },
        {
          title: '갓 내린 한 잔을 도넛과 함께',
          description: '\'코나 사전 조사\'를 가장 즐겁게 하는 방법은 한 잔과 간식을 곁들이는 것입니다. 갓 내린 100% 코나와 도넛을 앞에 두고 천천히 시간을 들이면, 진짜 코나가 어떤 맛인지 금방 알게 되죠 — 그러면 원두를 살 때 훨씬 똑똑한 구매자가 됩니다.',
        },
      ],
    },
    faq: {
      title: '코나커피 구입에 관해 자주 묻는 질문',
      items: [
        {
          question: '와이키키에서 코나커피는 어디서 살 수 있나요?',
          answer: '와이키키에서 코나커피를 사는 방법은 두 가지입니다. 카페에서 한 잔으로 사거나, 원두를 파는 가게에서 봉지로 사거나. 진짜 100% 코나를 한 잔으로 맛보려면 2142 Kalakaua Ave의 Kona Coffee Donut?에 들르세요. 와이키키 비치에서 몇 분 거리에서 100% 코나를 따뜻하게 또는 아이스로 내립니다. 가져갈 원두는 봉지에 \'100% Kona\'와 로스팅 날짜가 분명히 적힌 판매처를 찾으세요.',
        },
        {
          question: '100% 코나와 코나 블렌드의 차이는 무엇인가요?',
          answer: '100% 코나는 전적으로 하와이 빅아일랜드 코나 지역에서 재배된 커피로만 만듭니다. \'코나 블렌드\'는 하와이 법상 진짜 코나가 단 10%만 들어가도 되고, 나머지 90%는 다른 곳의 더 저렴한 원두입니다. 100% 코나는 부드럽고 산뜻하며 깔끔한 맛이고, 10% 블렌드는 대부분 채움용 원두 맛이 납니다. 항상 라벨의 \'100% Kona\' 표시를 확인하세요.',
        },
        {
          question: '코나커피는 기념품이나 선물로 좋은가요?',
          answer: '네 — 코나커피는 최고의 하와이 기념품 중 하나입니다. 가볍고 짐 싸기 쉬우며 진짜 현지 제품이고, 좋은 커피를 아는 사람이라면 누구나 좋아합니다. 정말 감동을 주는 선물이라면, 관광지의 값싼 \'코나 블렌드\'가 아니라 \'100% Kona\'라고 분명히 표시되고 로스팅 날짜가 최근인 원두를 사세요.',
        },
        {
          question: '코나커피는 얼마인가요?',
          answer: '진짜 100% 코나는 희귀하고 작은 가족 농장에서 손으로 따기 때문에 보통 파운드당 약 40~60달러입니다. \'코나 블렌드\'는 더 저렴하지만(파운드당 10~20달러가 많음) 코나가 단 10%만 들어 있을 수 있습니다. \'코나\' 봉지가 놀랄 만큼 싸다면 거의 틀림없이 블렌드입니다. 한 잔으로는 갓 내린 100% 코나가 몇 달러면 되니 — 진짜를 맛보는 가장 저렴한 방법입니다.',
        },
        {
          question: '와이키키 비치 근처에서 코나커피를 마실 수 있는 곳은?',
          answer: '2142 Kalakaua Ave의 Kona Coffee Donut?에서 진짜 100% 코나커피를 한 잔으로, 따뜻하게 또는 아이스로 제공합니다. 와이키키 비치에서 도보 약 5분 거리이며 매일 오전 7시부터 밤 9시까지 영업하니, 아침 한 잔이나 아이스 코나 포장을 갓 만든 도넛과 함께 즐기실 수 있습니다.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 진짜 100% 코나를 맛보세요',
      text: '2142 Kalakaua Ave의 Kona Coffee Donut?에 들러 진짜 100% 코나커피를 한 잔으로 — 따뜻하게 또는 아이스로 — 갓 만든 도넛과 함께. 와이키키 비치에서 몇 분 거리입니다.',
      menuButton: '코나커피 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '와이키키에서 코나커피 사는 곳',
    },
  },
  zh: {
    hero: {
      title: '在威基基哪里买科纳咖啡',
      subtitle: '现喝一杯，或带咖啡豆回家——买到真正100%科纳的2026指南',
      updated: '2026年6月更新',
      readTime: '阅读约7分钟',
    },
    definition: {
      title: '在威基基哪里买科纳咖啡',
      text: '在威基基"买"科纳咖啡有<strong>两种方式</strong>：<strong>按杯买</strong>（现做的热饮或冰饮，马上就能喝）或<strong>按袋买</strong>（带回家当礼物或伴手礼的咖啡豆或咖啡粉）。陷阱在哪？许多伴手礼"科纳"袋装其实是<strong>"科纳混合（Kona Blend）"</strong>——夏威夷法律允许这样标注的袋子里真正的科纳只占<strong>10%</strong>。要买到真货，请认准标签上的<strong>"100% Kona"</strong>字样。品尝真正100%科纳最简单的方式就是按杯喝——这正是卡拉卡瓦大道上的Kona Coffee Donut?所提供的。',
    },
    history: {
      title: '认识真正的科纳咖啡',
      subtitle: '为何稀有、标签含义，以及如何聪明地购买',
      p1: '真正的科纳咖啡<strong>确实稀有、确实昂贵</strong>——这是有原因的。它只生长在夏威夷大岛科纳地区的火山坡上，那是一条仅几英里宽的小小农田带。每一颗果实都在家庭农场手工采摘，全年总产量与全球咖啡相比微不足道。稀缺加上按美国工资水平的手工劳作，正是一袋100%科纳常常要价每磅40~60美元的原因。如果一袋"科纳"很便宜，那就是第一个不对劲的信号。',
      p2: '这就引出了<strong>"科纳混合"标签陷阱</strong>。夏威夷法律允许真正的科纳仅占<strong>10%</strong>就能以"科纳混合"出售——其余90%可以是来自世界任何地方的廉价豆子。伴手礼店喜欢这种混合咖啡，因为它看起来很本地、卖得又便宜，但10%的混合咖啡尝起来几乎和真货毫无关系。袋子上的<strong>"Blend（混合）"</strong>一词，是想买真正科纳作礼物的游客最大的危险信号。',
      p3: '那么<strong>该如何看懂一袋咖啡</strong>、放心购买呢？看三样东西。第一，清楚印着<strong>"100% Kona"</strong>字样——不是"Kona Blend"，不是"Kona Roast"，也不是"Kona Style"。第二，<strong>产地或庄园名称</strong>，最好有具体的农场或地区。第三，袋子上的<strong>烘焙日期</strong>——最近几周内烘焙的豆子，比在货架上放了一年的好喝得多。拿不准时就直接问卖家："这是100%科纳吗？"',
      p4: '最后，根据你的行程决定<strong>买杯还是买袋</strong>。如果你只想<em>体验</em>真正科纳的味道，<strong>按杯买</strong>是聪明之选——现做现喝，只花几美元而不是五十美元，也不必把豆子大老远扛回家。如果你想要一份真正拿得出手的<strong>礼物或伴手礼</strong>，就买标注<strong>"100% Kona"</strong>、烘焙日期新鲜的<strong>咖啡豆</strong>。很多游客两样都做：现在在威基基海滩附近喝一杯，再带些豆子回家。',
    },
    comparison: {
      title: '100%科纳 vs 科纳混合 vs 伴手礼咖啡',
      subtitle: '你实际买到的是什么？',
      intro: '袋子上"Kona"这一个词，含义可能天差地别。以下是三种最常见选择的对比——让你清楚知道自己花的钱买到了什么：',
      headers: {
        feature: '项目',
        bingsu: '100%科纳',
        shavedIce: '科纳混合 (10%)',
        kakigori: '普通伴手礼咖啡',
      },
      rows: [
        {
          feature: '科纳含量',
          bingsu: '100%真正科纳豆',
          shavedIce: '可能仅10%',
          kakigori: '通常很少或没有',
        },
        {
          feature: '要认准的标签',
          bingsu: '"100% Kona"',
          shavedIce: '"Kona Blend"',
          kakigori: '"Kona Style" / "Hawaiian"',
        },
        {
          feature: '口味',
          bingsu: '顺滑、明亮、收尾干净',
          shavedIce: '基本是填充豆的味道',
          kakigori: '普通，常常不新鲜',
        },
        {
          feature: '价格',
          bingsu: '每磅40~60美元以上',
          shavedIce: '每磅10~20美元',
          kakigori: '最便宜',
        },
        {
          feature: '适合谁',
          bingsu: '拿得出手的真正礼物',
          shavedIce: '心里有数的预算之选',
          kakigori: '请避开',
        },
        {
          feature: '值得买吗？',
          bingsu: '值得——货真价实',
          shavedIce: '仅在如实标注时',
          kakigori: '不值得',
        },
      ],
      note: '一句话：只买清楚写着"100% Kona"的袋子。如果袋子写着"Blend"或只写"Kona Style"，你不过是在为夏威夷外包装里的普通咖啡买单。',
    },
    types: {
      title: '在威基基购买科纳咖啡的方式',
      subtitle: '从现做一杯，到带回家的礼物',
      items: [
        {
          name: '按杯买——现做现喝',
          korean: '现做现喝',
          description: '真正品尝100%科纳最简单、最便宜的方式。点一杯现做的热咖啡，无需花五十美元买一袋，就能尝到科纳闻名的顺滑、明亮、干净的味道。对游客来说，这是在买豆回家之前先确认自己是否喜欢科纳的绝佳方法。',
          icon: '☕',
        },
        {
          name: '整豆带回家',
          korean: '整豆',
          description: '送礼或伴手礼的最佳选择。整豆比咖啡粉保鲜更久，能撑过回家的旅途，几周后依然好喝。挑选清楚标注"100% Kona"、烘焙日期新鲜的袋子，回家后现磨现冲，就能得到最棒的一杯。',
          icon: '🫘',
        },
        {
          name: '咖啡粉（如果没有磨豆机）',
          korean: '咖啡粉',
          description: '如果你要送的人没有磨豆机，预磨好的100%科纳是实用之选。它比整豆稍欠新鲜，所以临近出发再买，并密封保存。但只要标签写着100% Kona，它仍然远胜过廉价的"科纳混合"。',
          icon: '⚙️',
        },
        {
          name: '作为礼物 / 伴手礼',
          korean: '适合送礼',
          description: '科纳咖啡是你能带回家的最具夏威夷特色的礼物之一——轻便、好打包，深受咖啡爱好者喜爱。一袋清楚标注"100% Kona"的咖啡，会让收礼人知道你买的是真货，而非旅游店的混合咖啡。再附上一句产地的故事，更添分。',
          icon: '🎁',
        },
        {
          name: '冰科纳外带',
          korean: '冰饮·外带',
          description: '夏威夷很热，逛威基基时来杯100%科纳冰饮最合适。外带一杯，朝海滩走去，用冷萃或冰饮享受真正的科纳。这是阳光午后品尝真科纳最清爽的方式——和一个新鲜甜甜圈更是绝配。',
          icon: '🧊',
        },
      ],
    },
    whyHawaii: {
      title: '为什么要在威基基买科纳咖啡',
      points: [
        {
          title: '你就在产地',
          description: '科纳咖啡只来自地球上一个地方：夏威夷大岛的科纳地区。在威基基购买，就是在产地购买——而非在美国本土超市加价的再出口商品。要买到真正的100%科纳，没有比夏威夷本地更正宗的地方了。',
        },
        {
          title: '尽可能新鲜',
          description: '咖啡在烘焙后的几周内最好喝，而在夏威夷你能买到就近烘焙、刚出炉不久的科纳。这种新鲜度，是一袋漂洋过海、又在货架上久放的咖啡根本给不了的。刚烘焙的100%科纳，味道明显更明亮、更干净。',
        },
        {
          title: '绝佳的"可食用伴手礼"',
          description: '别买冰箱贴了——咖啡是人们真正会用、会记住的伴手礼。一袋真正的100%科纳轻便好打包，懂咖啡的人无不喜爱。它是少数既正宗本地、又真正实用的夏威夷礼物之一。',
        },
        {
          title: '现在就配个甜甜圈来一杯',
          description: '买豆留着以后喝固然好，但你现在正在度假——今天就来一杯真正的科纳吧。在Kona Coffee Donut?，距威基基海滩仅几分钟，你就能喝到热的或冰的100%科纳，再配上一个新鲜甜甜圈。这是旅途中体验科纳最简单、最美味的方式。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基哪里能喝到100%科纳',
      intro: '如果你想按杯品尝真正的100%科纳，卡拉卡瓦大道上的Kona Coffee Donut?是个方便又居中的好去处。',
      shop: {
        name: 'Kona Coffee Donut?（科纳咖啡甜甜圈）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '位于威基基核心地段卡拉卡瓦大道上，Kona Coffee Donut?用檀香山咖啡的豆子，现冲真正的100%科纳咖啡，按杯供应，可热可冰，并搭配新鲜现做的甜甜圈。我们距威基基海滩步行约5分钟，每天上午7点到晚上9点营业，无论你想要一杯早晨咖啡，还是一杯外带冰科纳，都很顺路。想带豆子回家？在店里直接问我们就好。',
        highlights: [
          '按杯供应真正的100%科纳，可热可冰',
          '用优质檀香山咖啡豆冲煮',
          '距威基基海滩步行约5分钟',
          '每天上午7点至晚上9点营业——配个新鲜甜甜圈',
        ],
      },
      cta: '查看我们的科纳咖啡菜单',
    },
    howToEat: {
      title: '如何买到真货',
      subtitle: '四条速记法则，让你永远不会买到假货',
      tips: [
        {
          title: '坚持标签上要有"100% Kona"',
          description: '真正重要的只有这一条。如果袋子没有清楚写着"100% Kona"，就当它是混合咖啡。别理会"Kona Roast""Kona Style"或"Hawaiian"这类词——那是营销，不是保证。标注含糊时，就直接问卖家："这是百分之百科纳吗？"',
        },
        {
          title: '检查烘焙日期',
          description: '好咖啡就是新鲜咖啡。找一找袋子上印的烘焙日期，选最近几周内烘焙的。再漂亮的"100% Kona"标签，如果豆子在货架上放了一年，也没什么意义。新鲜的烘焙日期加上100%科纳，才是制胜组合。',
        },
        {
          title: '可以的话，买袋之前先尝一尝',
          description: '对游客来说最聪明的做法，是先按杯尝尝科纳。买一杯现冲的100%科纳，确定自己是否喜欢，然后再决定要不要花40~60美元买一袋。在还不知道自己是否喜欢这味道之前，没必要拿五十美元去赌一袋豆子。',
        },
        {
          title: '现冲一杯配个甜甜圈',
          description: '做"科纳功课"最享受的方式，就是配着一杯咖啡和一份点心。坐下来，面前摆着现冲的100%科纳和一个甜甜圈，慢慢品，你很快就会明白真正的科纳是什么味道——这会让你在买豆时成为聪明得多的买家。',
        },
      ],
    },
    faq: {
      title: '关于购买科纳咖啡的常见问题',
      items: [
        {
          question: '在威基基哪里可以买科纳咖啡？',
          answer: '在威基基买科纳咖啡有两种方式：在咖啡馆按杯买，或在卖咖啡豆的店里按袋买。想按杯品尝真正的100%科纳，可以去2142 Kalakaua Ave的Kona Coffee Donut?——我们现冲100%科纳，可热可冰，距威基基海滩仅几分钟。要带豆子回家，就找那些袋子上清楚写着"100% Kona"并标有烘焙日期的商家。',
        },
        {
          question: '100%科纳和科纳混合有什么区别？',
          answer: '100%科纳完全由夏威夷大岛科纳地区种植的咖啡制成。"科纳混合"在夏威夷法律下，真正的科纳可以仅占10%，其余90%是其他地方更便宜的豆子。100%科纳尝起来顺滑、明亮、干净；10%混合则基本是填充豆的味道。请始终认准标签上的"100% Kona"字样。',
        },
        {
          question: '科纳咖啡适合当伴手礼或礼物吗？',
          answer: '适合——科纳咖啡是最好的夏威夷伴手礼之一。它轻便、好打包、正宗本地，懂咖啡的人都会喜欢。想送一份真正拿得出手的礼物，就买清楚标注"100% Kona"、烘焙日期新鲜的咖啡豆，而不是旅游店里廉价的"科纳混合"。',
        },
        {
          question: '科纳咖啡多少钱？',
          answer: '真正的100%科纳通常约每磅40~60美元，因为它稀有、由小型家庭农场手工采摘。"科纳混合"更便宜（常为每磅10~20美元），但科纳含量可能仅10%。如果一袋"科纳"便宜得出奇，那几乎肯定是混合咖啡。按杯算，一杯现冲的100%科纳只要几美元——这是品尝真货最划算的方式。',
        },
        {
          question: '威基基海滩附近哪里能喝到科纳咖啡？',
          answer: '2142 Kalakaua Ave的Kona Coffee Donut?按杯供应真正的100%科纳咖啡，可热可冰，距威基基海滩步行约5分钟。我们每天上午7点至晚上9点营业，你可以点一杯早晨咖啡或一杯外带冰科纳，再配上一个新鲜甜甜圈一起享用。',
        },
      ],
    },
    cta: {
      title: '在威基基品尝真正的100%科纳',
      text: '前往2142 Kalakaua Ave的Kona Coffee Donut?，按杯品尝货真价实的100%科纳咖啡——可热可冰——再配个新鲜甜甜圈，距威基基海滩仅几分钟。',
      menuButton: '查看科纳咖啡菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '在威基基哪里买科纳咖啡',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Where to Buy Kona Coffee in Waikiki: Sip It or Take It Home',
  description: 'Two ways to buy Kona coffee in Waikiki — drink real 100% Kona by the cup, or take whole beans home as a gift. How to spot the "Kona Blend" trap and buy the real thing.',
  image: 'https://www.konacoffeedonut.com/images/blog/buy-kona-coffee-waikiki.jpeg',
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
    '@id': 'https://www.konacoffeedonut.com/en/blog/buy-kona-coffee-waikiki',
  },
  keywords: 'buy kona coffee waikiki, kona coffee beans waikiki, kona coffee souvenir, 100% kona coffee, kona blend, where to buy kona coffee',
  wordCount: 1300,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I buy Kona coffee in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can buy Kona coffee in Waikiki in two ways: by the cup at cafes, or by the bag at shops that sell whole beans. To taste real 100% Kona by the cup, stop by Kona Coffee Donut? at 2142 Kalakaua Ave — we brew 100% Kona, hot or iced, just minutes from Waikiki Beach. For beans to take home, look for any retailer whose bags clearly say "100% Kona" with a roast date.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between 100% Kona and Kona Blend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '100% Kona is made entirely from coffee grown in the Kona districts of Hawaii Island. "Kona Blend" is allowed under Hawaii law to contain as little as 10% real Kona, with the other 90% being cheaper beans from elsewhere. A 100% Kona bag tastes smooth, bright, and clean; a 10% blend mostly tastes like its filler beans. Always look for the words "100% Kona" on the label.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Kona coffee a good souvenir or gift?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — Kona coffee is one of the best Hawaiian souvenirs. It is lightweight, easy to pack, genuinely local, and loved by anyone who appreciates good coffee. For a gift that truly impresses, buy whole beans clearly labeled "100% Kona" with a recent roast date, rather than a cheap "Kona Blend" from a tourist shop.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Kona coffee cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Real 100% Kona typically costs about $40–$60 per pound because it is rare and hand-picked on small family farms. "Kona Blend" is cheaper (often $10–$20 a pound) but contains as little as 10% Kona. If a "Kona" bag is surprisingly cheap, it is almost certainly a blend. By the cup, a fresh 100% Kona coffee costs just a few dollars — the most affordable way to taste the real thing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I drink Kona coffee near Waikiki Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut? at 2142 Kalakaua Ave serves real 100% Kona coffee by the cup, hot or iced, about a 5-minute walk from Waikiki Beach. We are open daily from 7AM to 9PM, so you can grab a morning cup or an iced Kona to-go and enjoy it with a fresh donut.',
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

export default function BuyKonaCoffeeWaikikiPage() {
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
          src="/images/blog/buy-kona-coffee-waikiki.jpeg"
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

        {/* History / Understanding */}
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

        {/* Ways to Buy */}
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

        {/* Why Buy Kona Coffee in Waikiki */}
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

        {/* Where to Drink 100% Kona in Waikiki */}
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

        {/* How to Buy the Real Thing */}
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
              href={`/${locale}/blog/best-kona-coffee-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Best Kona Coffee in Waikiki
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
