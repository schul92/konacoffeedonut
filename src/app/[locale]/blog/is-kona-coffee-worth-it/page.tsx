'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Globe, IceCreamCone, MapPin, Snowflake, Utensils, Users } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Script from 'next/script';
import SubpageNav from '@/components/SubpageNav';

// ────────────────────────────────────────────
// Translations (en, ja, ko, zh)
// ────────────────────────────────────────────
const content = {
  en: {
    hero: {
      title: 'Is Kona Coffee Worth It?',
      subtitle: '100% Kona vs. Kona Blend — and Where to Taste the Real Thing in Waikiki',
      updated: 'Updated June 2026',
      readTime: '8 min read',
    },
    definition: {
      title: 'Is Kona Coffee Worth It?',
      text: '<strong>Kona coffee</strong> is a rare arabica grown only on the volcanic slopes of <strong>Kona, on Hawaii\'s Big Island</strong>. Because the growing region is tiny and the supply is limited, real Kona commands a premium price. So is it worth it? For most visitors, the honest answer is <strong>yes — but only if it\'s actually 100% Kona</strong>. The real question isn\'t "Kona or not Kona," it\'s <strong>"100% Kona" vs. "Kona Blend"</strong> — and that single distinction is where most people unknowingly overpay for very little real Kona.',
    },
    history: {
      title: 'Why Kona Coffee Costs So Much',
      subtitle: 'And Why "Kona Blend" Exists',
      p1: 'Real Kona coffee is expensive for simple reasons of supply and geography. It grows in just a <strong>narrow strip of land</strong> on the western slopes of the Big Island\'s Hualālai and Mauna Loa volcanoes. The mineral-rich volcanic soil, sunny mornings, gentle afternoon cloud cover, and mild island nights create a microclimate that is almost impossible to replicate. Add the fact that the cherries are <strong>hand-picked on small family farms</strong> across steep terrain, and you have one of the most labor-intensive, limited-supply coffees in the world.',
      p2: 'That scarcity is exactly why <strong>"Kona Blend"</strong> exists. Demand for the Kona name far exceeds how much true Kona can actually be grown each year. Under Hawaii labeling law, a bag can legally be sold as a <strong>"Kona Blend" with as little as 10% real Kona coffee</strong> — the other 90% can be cheap, ordinary beans from anywhere in the world.',
      p3: 'This is the trap most souvenir shoppers fall into. A bargain-priced "Kona" bag at the airport or a grocery store is almost never 100% Kona. It is usually a 10% blend, which means you are paying a Kona-adjacent price for a cup that is <strong>90% filler beans</strong>. It tastes like ordinary coffee because, mostly, it is. The Kona name is doing the marketing; the beans inside are not.',
      p4: 'So how do you make sure you\'re getting the real thing? The rule is short and strict: look for the words <strong>"100% Kona"</strong> on the label or menu. If it only says "Kona Blend," "Kona Roast," or "Kona Style," assume it is mostly not Kona. Better yet, drink it <strong>freshly brewed near the source in Hawaii</strong>, where reputable cafes are proud to tell you exactly what they pour.',
    },
    comparison: {
      title: '100% Kona vs. Kona Blend vs. Regular Coffee',
      subtitle: 'What Are You Actually Paying For?',
      intro: 'The word "Kona" on a label can mean wildly different things. Here\'s an honest, side-by-side look at what you actually get:',
      headers: {
        feature: 'Feature',
        bingsu: '100% Kona Coffee',
        shavedIce: 'Kona Blend (10%)',
        kakigori: 'Regular Coffee',
      },
      rows: [
        {
          feature: 'Kona Content',
          bingsu: '100% genuine Kona',
          shavedIce: 'As low as 10% Kona',
          kakigori: '0% Kona',
        },
        {
          feature: 'Price',
          bingsu: 'Premium',
          shavedIce: 'Mid (priced near Kona)',
          kakigori: 'Low',
        },
        {
          feature: 'Flavor',
          bingsu: 'Smooth, bright, low-acid, clean',
          shavedIce: 'Diluted, ordinary',
          kakigori: 'Varies widely',
        },
        {
          feature: 'Who It\'s For',
          bingsu: 'Anyone wanting the real Kona experience',
          shavedIce: 'Shoppers fooled by the label',
          kakigori: 'Everyday coffee drinkers',
        },
        {
          feature: 'Label to Look For',
          bingsu: '"100% Kona"',
          shavedIce: '"Kona Blend" (check the fine print)',
          kakigori: 'n/a',
        },
        {
          feature: 'Worth It?',
          bingsu: 'Yes — for the real cup',
          shavedIce: 'Usually not',
          kakigori: 'Fine for everyday',
        },
      ],
      note: 'The single rule that protects you: insist on "100% Kona." If a label just says "Kona Blend," it can legally be 90% filler beans — you\'re paying a premium for a name, not for Kona.',
    },
    types: {
      title: 'How to Know You\'re Getting Real Kona',
      subtitle: 'Five Quick Checks Before You Pay a Premium',
      items: [
        {
          name: 'Look for "100% Kona" on the Label',
          korean: 'Label',
          description: 'This is the only phrase that guarantees pure Kona. It must say "100% Kona" — not "Kona," not "from Kona," not "Kona region." If those three numbers and the word are missing, treat it as a blend. Reputable roasters and cafes will state it clearly and proudly.',
          icon: '🏷️',
        },
        {
          name: 'Beware "Kona Blend" or "Kona Roast"',
          korean: 'Warning',
          description: 'These are the words to watch for. "Kona Blend," "Kona Roast," and "Kona Style" can contain as little as 10% real Kona by law. The big "KONA" on the front of the bag is marketing — flip it over and read the small print for the actual percentage.',
          icon: '⚠️',
        },
        {
          name: 'Check the Price',
          korean: 'Price',
          description: 'Real Kona is never cheap. The tiny growing region and hand-picked harvest make genuine 100% Kona one of the priciest coffees in the world. If a "Kona" bag is suspiciously affordable, it is almost certainly a low-percentage blend, not the real thing.',
          icon: '💰',
        },
        {
          name: 'Buy or Drink Near the Source',
          korean: 'Source',
          description: 'The closer you are to Hawaii, the easier it is to find authentic Kona and people who can vouch for it. Buying or drinking it on the islands — from a farm, roaster, or honest cafe — beats grabbing a mystery souvenir bag at the airport on your way out.',
          icon: '🌺',
        },
        {
          name: 'Taste the Difference',
          korean: 'Taste',
          description: 'Real 100% Kona is smooth, bright, and clean, with naturally low acidity and no harsh bitterness. A 10% blend tastes like ordinary coffee because it mostly is. Once you taste the genuine cup side by side, the difference is hard to un-notice.',
          icon: '☕',
        },
      ],
    },
    whyHawaii: {
      title: 'Is It Actually Worth It? — Yes, If It\'s Real',
      points: [
        {
          title: 'You Can Taste the Difference',
          description: 'With genuine 100% Kona, the premium actually shows up in the cup — smooth body, bright but gentle acidity, and a clean finish without bitterness. This is the experience people are paying for, and a watered-down 10% blend simply can\'t deliver it. When it\'s real, the quality is obvious.',
        },
        {
          title: 'A True Single-Origin Experience',
          description: 'Kona is one of the few American single-origin coffees, grown in a place you can only find in Hawaii. Drinking real Kona isn\'t just buying a beverage — it\'s tasting a specific volcanic slope, climate, and farming tradition. That sense of place is a big part of what makes it worth it.',
        },
        {
          title: 'Freshly Brewed Beats a Souvenir Bag',
          description: 'A freshly brewed cup of 100% Kona, made by people who know how to handle it, will almost always taste better than a souvenir bag that sat on a shelf. If you want to know whether Kona is worth it, taste it fresh first — then decide whether to take beans home.',
        },
        {
          title: 'Pairing It Turns It Into an Experience',
          description: 'Real Kona shines next to something sweet. Pairing a fresh cup with warm donuts or malasadas turns a simple coffee into a memorable Hawaii moment. That combination — great coffee plus fresh donuts — is exactly what makes a stop worth the premium.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Drink Real Kona Coffee in Waikiki',
      intro: 'If you want to taste genuine Hawaiian Kona coffee in Waikiki, Kona Coffee Donut is an honest place to start.',
      shop: {
        name: 'Kona Coffee Donut',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Located in the heart of Waikiki on Kalākaua Avenue, Kona Coffee Donut serves real Hawaiian Kona coffee — we pour Honolulu Coffee — freshly brewed and served alongside fresh donuts and Korean bingsu. Instead of guessing about a souvenir bag, you can taste a proper cup first and decide for yourself whether Kona is worth it.',
        highlights: [
          'Real Hawaiian Kona coffee, freshly brewed',
          'We pour Honolulu Coffee — no mystery souvenir bags',
          'Walking distance from Waikiki Beach',
          'Open daily — pair it with fresh donuts or bingsu',
        ],
      },
      cta: 'View Our Kona Coffee Menu',
    },
    howToEat: {
      title: 'How to Get Your Money\'s Worth',
      subtitle: 'Tips for Tasting Kona Like You Mean It',
      tips: [
        {
          title: 'Drink It Black First',
          description: 'Before adding milk or sugar, take a sip black. Real 100% Kona is smooth and low in acidity, with a clean, naturally sweet finish — qualities that get buried under cream and syrup. Tasting it plain first is the fastest way to tell whether you\'re drinking the real thing.',
        },
        {
          title: 'Ask If It\'s 100% Kona',
          description: 'Don\'t be shy — just ask. An honest cafe will happily tell you whether they pour 100% Kona or a blend. The answer tells you a lot about what you\'re paying for, and reputable places are proud to confirm the real thing.',
        },
        {
          title: 'Try It as a Pour-Over or Latte',
          description: 'A clean pour-over lets the bright, delicate character of genuine Kona come through. Prefer something creamier? A Kona latte keeps the smoothness while softening the edges. Either way, freshly brewed beats a bag that\'s been sitting on a shelf.',
        },
        {
          title: 'Pair It With a Malasada or Mochi Donut',
          description: 'Kona\'s clean, low-acid profile is made for pairing. A warm malasada or a chewy mochi donut balances the coffee\'s brightness and turns a single cup into a proper Hawaii treat — and makes that premium feel completely worth it.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About Kona Coffee',
      items: [
        {
          question: 'Is Kona coffee worth the price?',
          answer: 'If it\'s genuine 100% Kona, yes — for most people it\'s worth trying at least once. You get a smooth, bright, low-acid cup that you simply can\'t find anywhere else, grown on a tiny volcanic region in Hawaii. Where people waste money is on cheap "Kona Blend" bags that contain as little as 10% real Kona. Taste a proper 100% Kona cup fresh and you\'ll understand what the premium is for.',
        },
        {
          question: 'What\'s the difference between 100% Kona and Kona Blend?',
          answer: '"100% Kona" means every bean in the bag or cup is genuine Kona coffee. "Kona Blend" means it can legally contain as little as 10% Kona, with the other 90% being cheaper beans from anywhere in the world. The two can look almost identical on a shelf and cost similar amounts, but they are very different products — always read for the words "100% Kona."',
        },
        {
          question: 'Why is Kona coffee so expensive?',
          answer: 'Kona grows in a very small region on the volcanic slopes of Hawaii\'s Big Island, where the soil, climate, and elevation create ideal but limited growing conditions. The cherries are hand-picked on small family farms across steep terrain, which is labor-intensive. Tiny supply plus high demand and costly hand harvesting make real 100% Kona one of the priciest coffees in the world.',
        },
        {
          question: 'How can I tell if it\'s real Kona?',
          answer: 'Look for the exact words "100% Kona" on the label or menu — not just "Kona," "Kona Blend," or "Kona Roast," which can be mostly filler beans. Be suspicious of low prices, since real Kona is never cheap. The most reliable approach is to buy or drink it near the source in Hawaii from a farm, roaster, or honest cafe that clearly states what they serve.',
        },
        {
          question: 'Where can I drink real Kona coffee in Waikiki?',
          answer: 'Kona Coffee Donut at 2142 Kalākaua Ave in Waikiki serves real Hawaiian Kona coffee — we pour Honolulu Coffee — freshly brewed alongside fresh donuts and bingsu. It\'s an easy, honest way to taste a proper cup before deciding whether to buy beans, and it\'s within walking distance of Waikiki Beach.',
        },
      ],
    },
    cta: {
      title: 'Taste Real Kona Coffee in Waikiki',
      text: 'Visit Kona Coffee Donut at 2142 Kalākaua Ave and taste real 100% Hawaiian Kona coffee, freshly brewed and paired with fresh donuts.',
      menuButton: 'View Kona Coffee Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'Is Kona Coffee Worth It?',
    },
  },
  ja: {
    hero: {
      title: 'コナコーヒーは価値ある？',
      subtitle: '100%コナ vs コナブレンド — ワイキキで本物を味わえる場所',
      updated: '2026年6月更新',
      readTime: '8分で読める',
    },
    definition: {
      title: 'コナコーヒーは価値ある？',
      text: '<strong>コナコーヒー</strong>は、<strong>ハワイ島（ビッグアイランド）のコナ地区</strong>の火山斜面でのみ栽培される希少なアラビカ種です。栽培地域が非常に狭く生産量が限られているため、本物のコナは高価で取引されます。では、その価値はあるのか？多くの旅行者にとって正直な答えは<strong>「イエス、ただし本当に100%コナである場合に限る」</strong>です。本当の問題は「コナかどうか」ではなく、<strong>「100%コナ」か「コナブレンド」か</strong>。そして、この一点の違いこそ、多くの人が知らないうちにわずかなコナに高い代金を払ってしまう落とし穴なのです。',
    },
    history: {
      title: 'コナコーヒーが高い理由',
      subtitle: 'そして「コナブレンド」が存在する理由',
      p1: '本物のコナコーヒーが高価なのは、供給と地理という単純な理由からです。コナはビッグアイランド西側、フアラライ火山とマウナロア火山の斜面の<strong>ごく狭い帯状の土地</strong>でのみ栽培されます。ミネラル豊富な火山性土壌、晴れた朝、午後の穏やかな雲、温暖な夜が、再現がほぼ不可能な微気候を生み出します。さらに、コーヒーチェリーは急斜面に点在する<strong>小規模な家族農園で手摘み</strong>されるため、世界で最も手間がかかり供給量の限られたコーヒーの一つとなっています。',
      p2: 'まさにこの希少性こそが<strong>「コナブレンド」</strong>が存在する理由です。コナという名前への需要は、実際に毎年栽培できる本物のコナの量をはるかに上回ります。ハワイの表示法では、<strong>本物のコナをわずか10%しか含まなくても「コナブレンド」</strong>として合法的に販売できます。残りの90%は、世界中どこから来た安価な普通の豆でも構わないのです。',
      p3: 'これが、お土産を買う多くの人が陥る罠です。空港やスーパーで売られている格安の「コナ」の袋は、ほぼ間違いなく100%コナではありません。たいていは10%のブレンドで、つまりあなたはコナ並みの価格を払って<strong>90%は安い豆</strong>のコーヒーを買っていることになります。普通のコーヒーの味がするのは、実際ほとんどがそうだからです。コナの名前が宣伝の役目を果たし、中身の豆はそうではないのです。',
      p4: 'では、どうすれば本物を確実に手に入れられるのか？ルールは短く厳格です。ラベルやメニューに<strong>「100% Kona（100%コナ）」</strong>の表記があるかを確認すること。「コナブレンド」「コナロースト」「コナスタイル」としか書かれていなければ、ほとんどコナではないと考えましょう。さらに良いのは、<strong>ハワイの産地近くで淹れたてを飲む</strong>こと。信頼できるカフェは、自分たちが何を提供しているかを誇りを持って正確に教えてくれます。',
    },
    comparison: {
      title: '100%コナ vs コナブレンド vs 普通のコーヒー',
      subtitle: 'あなたは何にお金を払っている？',
      intro: 'ラベルの「コナ」という言葉は、まったく異なるものを意味することがあります。実際に何が手に入るのか、正直に比較してみましょう：',
      headers: {
        feature: '特徴',
        bingsu: '100%コナコーヒー',
        shavedIce: 'コナブレンド（10%）',
        kakigori: '普通のコーヒー',
      },
      rows: [
        {
          feature: 'コナ含有量',
          bingsu: '100%本物のコナ',
          shavedIce: 'わずか10%のコナ',
          kakigori: 'コナ0%',
        },
        {
          feature: '価格',
          bingsu: 'プレミアム',
          shavedIce: '中（コナに近い価格）',
          kakigori: '安い',
        },
        {
          feature: '風味',
          bingsu: 'なめらか、明るい、低酸味、クリーン',
          shavedIce: '薄められた、平凡',
          kakigori: 'ばらつきが大きい',
        },
        {
          feature: '向いている人',
          bingsu: '本物のコナ体験を求める人',
          shavedIce: 'ラベルに騙される人',
          kakigori: '普段使いの人',
        },
        {
          feature: '探すべき表記',
          bingsu: '「100% Kona」',
          shavedIce: '「コナブレンド」（小さな字を確認）',
          kakigori: '該当なし',
        },
        {
          feature: '価値はある？',
          bingsu: 'はい — 本物の一杯なら',
          shavedIce: 'たいてい無い',
          kakigori: '普段使いには十分',
        },
      ],
      note: 'あなたを守る唯一のルール：「100% Kona」にこだわること。ラベルに「コナブレンド」としか書かれていなければ、法的には90%が安い豆でも構いません。あなたは名前にプレミアムを払っているのであって、コナにではないのです。',
    },
    types: {
      title: '本物のコナを手に入れる見分け方',
      subtitle: 'プレミアムを払う前の5つの簡単チェック',
      items: [
        {
          name: 'ラベルの「100% Kona」を探す',
          korean: 'ラベル',
          description: '純粋なコナを保証する唯一の表記です。「100% Kona」と書かれていなければなりません。「Kona」「from Kona」「Kona region」では不十分です。この数字と言葉が無ければブレンドと考えましょう。信頼できる焙煎業者やカフェは、はっきりと誇りを持って表示します。',
          icon: '🏷️',
        },
        {
          name: '「コナブレンド」「コナロースト」に注意',
          korean: '警告',
          description: '警戒すべき言葉です。「コナブレンド」「コナロースト」「コナスタイル」は、法的には本物のコナをわずか10%しか含まないことがあります。袋の正面の大きな「KONA」は宣伝。裏返して、実際の含有率が書かれた小さな字を読みましょう。',
          icon: '⚠️',
        },
        {
          name: '価格を確認する',
          korean: '価格',
          description: '本物のコナは決して安くありません。栽培地域が狭く手摘みのため、本物の100%コナは世界で最も高価なコーヒーの一つです。「コナ」の袋が不自然に手頃なら、ほぼ確実に低含有率のブレンドであり、本物ではありません。',
          icon: '💰',
        },
        {
          name: '産地の近くで買う・飲む',
          korean: '産地',
          description: 'ハワイに近いほど、本物のコナと、それを保証してくれる人を見つけやすくなります。島で農園や焙煎業者、正直なカフェから買ったり飲んだりする方が、帰り際に空港で正体不明のお土産の袋を掴むよりずっと確実です。',
          icon: '🌺',
        },
        {
          name: '味の違いを確かめる',
          korean: '味',
          description: '本物の100%コナはなめらかで明るくクリーン。自然な低酸味で、きつい苦味がありません。10%のブレンドが普通のコーヒーの味がするのは、ほとんどがそうだからです。本物を飲み比べれば、その違いに気づかずにはいられません。',
          icon: '☕',
        },
      ],
    },
    whyHawaii: {
      title: '本当に価値はある？ — 本物ならイエス',
      points: [
        {
          title: '味の違いがわかる',
          description: '本物の100%コナなら、プレミアムは確かに一杯に表れます。なめらかなボディ、明るくも穏やかな酸味、苦味のないクリーンな後味。これこそ人々がお金を払う体験であり、薄められた10%のブレンドでは決して味わえません。本物なら、その品質は一目瞭然です。',
        },
        {
          title: '真のシングルオリジン体験',
          description: 'コナは数少ないアメリカ産シングルオリジンコーヒーの一つで、ハワイでしか見つからない場所で栽培されます。本物のコナを飲むことは、ただ飲み物を買うのではなく、特定の火山斜面、気候、農業の伝統を味わうこと。この「土地の感覚」こそ、価値がある理由の大きな部分です。',
        },
        {
          title: '淹れたてはお土産の袋に勝る',
          description: '扱いを知る人が淹れた100%コナの一杯は、棚に置かれていたお土産の袋よりほぼ必ず美味しい。コナに価値があるか知りたいなら、まず淹れたてを味わい、それから豆を持ち帰るか決めましょう。',
        },
        {
          title: 'ペアリングで体験になる',
          description: '本物のコナは甘いものの隣で輝きます。淹れたての一杯を温かいドーナツやマラサダと合わせれば、ただのコーヒーが忘れられないハワイのひとときに。この「最高のコーヒー＋焼きたてドーナツ」の組み合わせこそ、プレミアムを払う価値のある理由です。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキで本物のコナコーヒーを飲むなら',
      intro: 'ワイキキで本物のハワイアン・コナコーヒーを味わいたいなら、コナコーヒードーナツが正直な出発点です。',
      shop: {
        name: 'Kona Coffee Donut（コナコーヒードーナツ）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心部、カラカウア通りに位置するコナコーヒードーナツは、本物のハワイアン・コナコーヒー（ホノルルコーヒーを使用）を淹れたてで提供し、焼きたてドーナツや韓国ビンスと一緒に楽しめます。お土産の袋を当てずっぽうで選ぶ代わりに、まずきちんとした一杯を味わって、コナに価値があるか自分で判断できます。',
        highlights: [
          '本物のハワイアン・コナコーヒーを淹れたてで',
          'ホノルルコーヒーを使用 — 正体不明のお土産袋ではありません',
          'ワイキキビーチから徒歩圏内',
          '毎日営業 — 焼きたてドーナツやビンスと一緒に',
        ],
      },
      cta: 'コナコーヒーメニューを見る',
    },
    howToEat: {
      title: '元を取る飲み方',
      subtitle: '本気でコナを味わうためのコツ',
      tips: [
        {
          title: 'まずはブラックで飲む',
          description: 'ミルクや砂糖を加える前に、まずブラックで一口。本物の100%コナはなめらかで酸味が低く、クリーンで自然な甘みのある後味が特徴です。これらはクリームやシロップに埋もれてしまいます。まずそのまま味わうのが、本物かどうかを見分ける一番の近道です。',
        },
        {
          title: '「100%コナですか？」と尋ねる',
          description: '遠慮せず、ただ尋ねてみましょう。正直なカフェなら、100%コナかブレンドかを喜んで教えてくれます。その答えは、あなたが何にお金を払っているかを多く物語ります。信頼できる店は、本物であることを誇りを持って確認してくれます。',
        },
        {
          title: 'プアオーバーやラテで試す',
          description: 'クリーンなプアオーバーは、本物のコナの明るく繊細な個性を引き出します。もっとクリーミーがお好みなら、コナラテがなめらかさを保ちつつ角を和らげます。いずれにしても、淹れたては棚に置かれた袋に勝ります。',
        },
        {
          title: 'マラサダやモチドーナツと合わせる',
          description: 'コナのクリーンで低酸味なプロファイルは、ペアリングのために生まれたよう。温かいマラサダやもちもちのモチドーナツがコーヒーの明るさを引き立て、一杯を本格的なハワイのご褒美に変えます。プレミアムが完全に価値あるものに感じられます。',
        },
      ],
    },
    faq: {
      title: 'コナコーヒーに関するよくある質問',
      items: [
        {
          question: 'コナコーヒーは値段に見合う価値がありますか？',
          answer: '本物の100%コナなら、はい。多くの人にとって一度は試す価値があります。ハワイの狭い火山地帯で栽培された、他では決して味わえないなめらかで明るく低酸味の一杯が楽しめます。お金を無駄にするのは、本物のコナをわずか10%しか含まない安い「コナブレンド」の袋です。きちんとした100%コナを淹れたてで味わえば、プレミアムの理由がわかります。',
        },
        {
          question: '100%コナとコナブレンドの違いは何ですか？',
          answer: '「100%コナ」は、袋やカップの中の豆がすべて本物のコナコーヒーであることを意味します。「コナブレンド」は、法的にはコナをわずか10%しか含まなくてよく、残りの90%は世界中どこから来た安い豆でも構いません。棚に並ぶと見た目はほぼ同じで価格も近いですが、まったく別物です。必ず「100% Kona」の表記を確認してください。',
        },
        {
          question: 'なぜコナコーヒーはこんなに高いのですか？',
          answer: 'コナはハワイ島の火山斜面のごく狭い地域で栽培され、その土壌、気候、標高が理想的だが限られた栽培条件を生みます。コーヒーチェリーは急斜面の小規模な家族農園で手摘みされ、非常に手間がかかります。少ない供給量に高い需要、そしてコストのかかる手摘みが、本物の100%コナを世界で最も高価なコーヒーの一つにしています。',
        },
        {
          question: '本物のコナかどうかどう見分けますか？',
          answer: 'ラベルやメニューに「100% Kona」という正確な表記があるかを確認しましょう。単なる「Kona」「コナブレンド」「コナロースト」では、ほとんどが安い豆かもしれません。本物のコナは決して安くないので、低価格には疑いを持ってください。最も確実なのは、提供するものを明確に示す農園・焙煎業者・正直なカフェから、ハワイの産地近くで買ったり飲んだりすることです。',
        },
        {
          question: 'ワイキキで本物のコナコーヒーを飲める場所は？',
          answer: 'ワイキキの2142 Kalākaua Aveにあるコナコーヒードーナツは、本物のハワイアン・コナコーヒー（ホノルルコーヒーを使用）を淹れたてで提供し、焼きたてドーナツやビンスと一緒に楽しめます。豆を買うか決める前にきちんとした一杯を味わえる、手軽で正直な方法です。ワイキキビーチからも徒歩圏内です。',
        },
      ],
    },
    cta: {
      title: 'ワイキキで本物のコナコーヒーを',
      text: '2142 Kalākaua Aveのコナコーヒードーナツで、淹れたての本物の100%ハワイアン・コナコーヒーを焼きたてドーナツと一緒に味わってください。',
      menuButton: 'コナコーヒーメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'コナコーヒーは価値ある？',
    },
  },
  ko: {
    hero: {
      title: '코나 커피, 비싼 값을 할까?',
      subtitle: '100% 코나 vs 코나 블렌드 — 와이키키에서 진짜를 맛보는 곳',
      updated: '2026년 6월 업데이트',
      readTime: '8분 소요',
    },
    definition: {
      title: '코나 커피, 비싼 값을 할까?',
      text: '<strong>코나 커피</strong>는 <strong>하와이 빅아일랜드의 코나 지역</strong> 화산 경사면에서만 재배되는 희귀한 아라비카 품종입니다. 재배 지역이 매우 좁고 생산량이 한정되어 있어, 진짜 코나는 프리미엄 가격에 거래됩니다. 그렇다면 그만한 값어치가 있을까요? 대부분의 여행자에게 정직한 대답은 <strong>"그렇다 — 단, 정말로 100% 코나일 때만"</strong>입니다. 진짜 질문은 "코나냐 아니냐"가 아니라 <strong>"100% 코나냐, 코나 블렌드냐"</strong>입니다. 그리고 바로 이 한 끗 차이에서, 대부분의 사람들이 자기도 모르게 아주 적은 양의 코나에 비싼 값을 치르게 됩니다.',
    },
    history: {
      title: '코나 커피가 비싼 이유',
      subtitle: '그리고 "코나 블렌드"가 존재하는 이유',
      p1: '진짜 코나 커피가 비싼 이유는 공급과 지리라는 단순한 사실에 있습니다. 코나는 빅아일랜드 서쪽, 후알랄라이 화산과 마우나로아 화산 경사면의 <strong>아주 좁은 띠 모양 지역</strong>에서만 자랍니다. 미네랄이 풍부한 화산토, 맑은 아침, 오후의 부드러운 구름, 온화한 섬의 밤이 어우러져 거의 재현이 불가능한 미기후를 만들어냅니다. 게다가 커피 체리는 가파른 지형에 흩어진 <strong>소규모 가족 농장에서 일일이 손으로 수확</strong>되기 때문에, 코나는 세계에서 가장 손이 많이 가고 공급이 한정된 커피 중 하나입니다.',
      p2: '바로 이 희소성이 <strong>"코나 블렌드"</strong>가 존재하는 이유입니다. 코나라는 이름에 대한 수요는 매년 실제로 재배할 수 있는 진짜 코나의 양을 훨씬 뛰어넘습니다. 하와이 표기법상 한 봉지에 <strong>진짜 코나가 10%만 들어 있어도 "코나 블렌드"</strong>로 합법적으로 팔 수 있습니다. 나머지 90%는 전 세계 어디서 온 값싼 일반 원두여도 상관없습니다.',
      p3: '이것이 바로 기념품을 사는 많은 사람들이 빠지는 함정입니다. 공항이나 마트에서 파는 저렴한 "코나" 봉지는 거의 절대 100% 코나가 아닙니다. 대개는 10% 블렌드이고, 결국 여러분은 코나에 준하는 값을 내고 <strong>90%는 싸구려 원두</strong>인 커피를 사는 셈입니다. 평범한 커피 맛이 나는 건, 실제로 대부분이 그렇기 때문입니다. 코나라는 이름이 마케팅을 하고 있을 뿐, 봉지 안의 원두는 그렇지 않습니다.',
      p4: '그렇다면 어떻게 진짜를 확실히 손에 넣을 수 있을까요? 규칙은 짧고 엄격합니다. 라벨이나 메뉴에서 <strong>"100% Kona(100% 코나)"</strong>라는 글자를 확인하세요. "코나 블렌드", "코나 로스트", "코나 스타일"이라고만 적혀 있다면 대부분 코나가 아니라고 보면 됩니다. 더 좋은 방법은 <strong>하와이 산지 근처에서 갓 내린 커피를 마시는</strong> 것입니다. 믿을 만한 카페는 자신들이 무엇을 내리는지 자랑스럽게 정확히 알려줍니다.',
    },
    comparison: {
      title: '100% 코나 vs 코나 블렌드 vs 일반 커피',
      subtitle: '당신은 무엇에 돈을 내고 있나?',
      intro: '라벨에 적힌 "코나"라는 단어는 전혀 다른 것을 의미할 수 있습니다. 실제로 무엇을 얻게 되는지 정직하게 나란히 비교해 봅시다:',
      headers: {
        feature: '특징',
        bingsu: '100% 코나 커피',
        shavedIce: '코나 블렌드 (10%)',
        kakigori: '일반 커피',
      },
      rows: [
        {
          feature: '코나 함량',
          bingsu: '100% 진짜 코나',
          shavedIce: '코나 10%까지 낮을 수도',
          kakigori: '코나 0%',
        },
        {
          feature: '가격',
          bingsu: '프리미엄',
          shavedIce: '중간 (코나에 가까운 가격)',
          kakigori: '저렴함',
        },
        {
          feature: '풍미',
          bingsu: '부드럽고, 밝고, 산미 낮고, 깔끔함',
          shavedIce: '희석된, 평범한 맛',
          kakigori: '편차가 큼',
        },
        {
          feature: '추천 대상',
          bingsu: '진짜 코나를 경험하고 싶은 누구나',
          shavedIce: '라벨에 속는 소비자',
          kakigori: '매일 마시는 사람',
        },
        {
          feature: '찾아야 할 라벨',
          bingsu: '"100% Kona"',
          shavedIce: '"코나 블렌드" (작은 글씨 확인)',
          kakigori: '해당 없음',
        },
        {
          feature: '값어치 있나?',
          bingsu: '그렇다 — 진짜 한 잔이라면',
          shavedIce: '대개 없음',
          kakigori: '일상용으로는 충분',
        },
      ],
      note: '당신을 지켜줄 단 하나의 규칙: "100% Kona"를 고집하세요. 라벨에 "코나 블렌드"라고만 적혀 있으면 법적으로 90%가 싸구려 원두여도 됩니다. 당신은 코나가 아니라 이름값에 프리미엄을 내고 있는 것입니다.',
    },
    types: {
      title: '진짜 코나를 받고 있는지 아는 법',
      subtitle: '프리미엄을 내기 전 다섯 가지 빠른 체크',
      items: [
        {
          name: '라벨의 "100% Kona" 찾기',
          korean: '라벨',
          description: '순수 코나를 보장하는 유일한 문구입니다. 반드시 "100% Kona"라고 적혀 있어야 합니다. 그냥 "Kona", "from Kona", "Kona region"으로는 부족합니다. 이 숫자와 단어가 없다면 블렌드로 보세요. 믿을 만한 로스터와 카페는 이를 분명하고 당당하게 표기합니다.',
          icon: '🏷️',
        },
        {
          name: '"코나 블렌드", "코나 로스트" 주의',
          korean: '경고',
          description: '경계해야 할 단어들입니다. "코나 블렌드", "코나 로스트", "코나 스타일"은 법적으로 진짜 코나를 10%만 담아도 됩니다. 봉지 앞면의 커다란 "KONA"는 마케팅입니다. 뒤집어서 실제 함량이 적힌 작은 글씨를 읽어보세요.',
          icon: '⚠️',
        },
        {
          name: '가격을 확인하기',
          korean: '가격',
          description: '진짜 코나는 결코 싸지 않습니다. 좁은 재배 지역과 손 수확 덕분에 진짜 100% 코나는 세계에서 가장 비싼 커피 중 하나입니다. "코나" 봉지가 의심스러울 만큼 저렴하다면, 거의 확실히 함량이 낮은 블렌드이지 진짜가 아닙니다.',
          icon: '💰',
        },
        {
          name: '산지 근처에서 사거나 마시기',
          korean: '산지',
          description: '하와이에 가까울수록 진짜 코나와, 그것을 보증해 줄 사람을 찾기가 쉽습니다. 떠나는 길에 공항에서 정체불명의 기념품 봉지를 집어 드는 것보다, 섬에서 농장·로스터·정직한 카페에서 사거나 마시는 편이 훨씬 확실합니다.',
          icon: '🌺',
        },
        {
          name: '맛의 차이를 느끼기',
          korean: '맛',
          description: '진짜 100% 코나는 부드럽고 밝고 깔끔하며, 자연스럽게 산미가 낮고 거친 쓴맛이 없습니다. 10% 블렌드가 평범한 커피 맛이 나는 건 대부분이 그렇기 때문입니다. 진짜 한 잔을 나란히 맛보면, 그 차이를 모른 척하기 어렵습니다.',
          icon: '☕',
        },
      ],
    },
    whyHawaii: {
      title: '정말 값어치가 있을까? — 진짜라면 그렇다',
      points: [
        {
          title: '맛의 차이가 느껴진다',
          description: '진짜 100% 코나라면 프리미엄이 실제로 한 잔에 드러납니다. 부드러운 바디, 밝지만 온화한 산미, 쓴맛 없는 깔끔한 끝맛. 바로 이것이 사람들이 값을 치르는 경험이며, 희석된 10% 블렌드로는 결코 줄 수 없습니다. 진짜일 때 그 품질은 한눈에 분명합니다.',
        },
        {
          title: '진정한 싱글 오리진 경험',
          description: '코나는 몇 안 되는 미국산 싱글 오리진 커피 중 하나로, 오직 하와이에서만 찾을 수 있는 곳에서 자랍니다. 진짜 코나를 마시는 것은 그저 음료를 사는 게 아니라, 특정한 화산 경사면과 기후, 농사 전통을 맛보는 일입니다. 이 "장소의 감각"이야말로 값어치의 큰 부분입니다.',
        },
        {
          title: '갓 내린 커피가 기념품 봉지를 이긴다',
          description: '제대로 다룰 줄 아는 사람이 갓 내린 100% 코나 한 잔은, 선반에 놓여 있던 기념품 봉지보다 거의 항상 더 맛있습니다. 코나가 값어치 있는지 알고 싶다면, 먼저 갓 내린 잔을 맛보고 나서 원두를 집에 가져갈지 정하세요.',
        },
        {
          title: '페어링하면 하나의 경험이 된다',
          description: '진짜 코나는 달콤한 것 옆에서 빛납니다. 갓 내린 한 잔을 따뜻한 도넛이나 말라사다와 곁들이면, 평범한 커피가 잊지 못할 하와이의 한순간이 됩니다. 바로 이 "훌륭한 커피 + 갓 만든 도넛" 조합이, 프리미엄을 낼 가치를 만들어 줍니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 진짜 코나 커피를 마시는 곳',
      intro: '와이키키에서 진짜 하와이안 코나 커피를 맛보고 싶다면, 코나커피도넛이 정직한 출발점입니다.',
      shop: {
        name: 'Kona Coffee Donut (코나커피도넛)',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키의 중심, 칼라카우아 애비뉴에 위치한 코나커피도넛은 진짜 하와이안 코나 커피(호놀룰루 커피를 사용)를 갓 내려, 갓 만든 도넛과 한국식 빙수와 함께 제공합니다. 기념품 봉지를 짐작으로 고르는 대신, 먼저 제대로 된 한 잔을 맛보고 코나가 값어치 있는지 직접 판단할 수 있습니다.',
        highlights: [
          '진짜 하와이안 코나 커피를 갓 내려서',
          '호놀룰루 커피 사용 — 정체불명의 기념품 봉지가 아닙니다',
          '와이키키 비치에서 도보 거리',
          '매일 영업 — 갓 만든 도넛이나 빙수와 함께',
        ],
      },
      cta: '코나 커피 메뉴 보기',
    },
    howToEat: {
      title: '제값 뽑는 법',
      subtitle: '제대로 코나를 맛보기 위한 팁',
      tips: [
        {
          title: '먼저 블랙으로 마시기',
          description: '우유나 설탕을 넣기 전에, 먼저 블랙으로 한 모금. 진짜 100% 코나는 부드럽고 산미가 낮으며, 깔끔하고 자연스럽게 달콤한 끝맛이 특징입니다. 이런 매력은 크림과 시럽에 묻혀버리죠. 그냥 먼저 맛보는 것이 진짜인지 가려내는 가장 빠른 방법입니다.',
        },
        {
          title: '"100% 코나인가요?"라고 묻기',
          description: '부끄러워 말고 그냥 물어보세요. 정직한 카페라면 100% 코나인지 블렌드인지 기꺼이 알려줍니다. 그 답은 당신이 무엇에 값을 내는지를 많이 말해줍니다. 믿을 만한 곳은 진짜라는 사실을 당당하게 확인해 줍니다.',
        },
        {
          title: '푸어오버나 라떼로 즐기기',
          description: '깔끔한 푸어오버는 진짜 코나의 밝고 섬세한 개성을 그대로 살려줍니다. 좀 더 크리미한 게 좋다면, 코나 라떼가 부드러움을 지키면서 모서리를 부드럽게 다듬어 줍니다. 어느 쪽이든, 갓 내린 커피가 선반에 놓여 있던 봉지를 이깁니다.',
        },
        {
          title: '말라사다나 모찌 도넛과 곁들이기',
          description: '코나의 깔끔하고 산미 낮은 프로필은 페어링을 위해 태어난 듯합니다. 따뜻한 말라사다나 쫄깃한 모찌 도넛이 커피의 밝은 맛을 받쳐주며, 한 잔을 제대로 된 하와이의 간식으로 바꿔줍니다. 그러면 그 프리미엄이 완전히 값어치 있게 느껴집니다.',
        },
      ],
    },
    faq: {
      title: '코나 커피에 대해 자주 묻는 질문',
      items: [
        {
          question: '코나 커피는 가격만큼의 값어치가 있나요?',
          answer: '진짜 100% 코나라면, 네 — 대부분의 사람에게 적어도 한 번은 맛볼 가치가 있습니다. 하와이의 좁은 화산 지역에서 재배된, 다른 어디서도 찾을 수 없는 부드럽고 밝고 산미 낮은 한 잔을 즐길 수 있습니다. 사람들이 돈을 낭비하는 건 진짜 코나가 10%밖에 안 들어간 싼 "코나 블렌드" 봉지입니다. 제대로 된 100% 코나를 갓 내려 맛보면, 그 프리미엄이 무엇을 위한 것인지 알게 됩니다.',
        },
        {
          question: '100% 코나와 코나 블렌드의 차이는 무엇인가요?',
          answer: '"100% 코나"는 봉지나 잔 속의 모든 원두가 진짜 코나 커피라는 뜻입니다. "코나 블렌드"는 법적으로 코나가 10%만 들어 있어도 되고, 나머지 90%는 전 세계 어디서 온 더 싼 원두여도 됩니다. 선반에서 보면 거의 똑같아 보이고 값도 비슷하지만, 전혀 다른 제품입니다. 항상 "100% Kona"라는 글자를 확인하세요.',
        },
        {
          question: '코나 커피는 왜 이렇게 비싼가요?',
          answer: '코나는 하와이 빅아일랜드 화산 경사면의 아주 좁은 지역에서 자라는데, 그곳의 토양·기후·고도가 이상적이지만 한정된 재배 조건을 만듭니다. 커피 체리는 가파른 지형의 소규모 가족 농장에서 손으로 수확되어 손이 많이 갑니다. 적은 공급량에 높은 수요, 비용이 많이 드는 손 수확이 더해져 진짜 100% 코나를 세계에서 가장 비싼 커피 중 하나로 만듭니다.',
        },
        {
          question: '진짜 코나인지 어떻게 알 수 있나요?',
          answer: '라벨이나 메뉴에서 정확히 "100% Kona"라는 글자를 찾으세요. 그냥 "Kona", "코나 블렌드", "코나 로스트"는 대부분이 싸구려 원두일 수 있습니다. 진짜 코나는 결코 싸지 않으니 낮은 가격은 의심하세요. 가장 확실한 방법은, 무엇을 제공하는지 분명히 밝히는 농장·로스터·정직한 카페에서 하와이 산지 근처에서 사거나 마시는 것입니다.',
        },
        {
          question: '와이키키에서 진짜 코나 커피를 마실 수 있는 곳은?',
          answer: '와이키키 2142 Kalākaua Ave에 있는 코나커피도넛은 진짜 하와이안 코나 커피(호놀룰루 커피 사용)를 갓 내려 갓 만든 도넛, 빙수와 함께 제공합니다. 원두를 살지 정하기 전에 제대로 된 한 잔을 맛볼 수 있는 쉽고 정직한 방법이며, 와이키키 비치에서도 도보 거리입니다.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 진짜 코나 커피를 맛보세요',
      text: '2142 Kalākaua Ave 코나커피도넛에서 갓 내린 진짜 100% 하와이안 코나 커피를 갓 만든 도넛과 함께 맛보세요.',
      menuButton: '코나 커피 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '코나 커피, 비싼 값을 할까?',
    },
  },
  zh: {
    hero: {
      title: '科纳咖啡值得买吗？',
      subtitle: '100% 科纳 vs 科纳混合 — 以及在威基基哪里能喝到正宗的',
      updated: '2026年6月更新',
      readTime: '阅读约8分钟',
    },
    definition: {
      title: '科纳咖啡值得买吗？',
      text: '<strong>科纳咖啡</strong>是一种稀有的阿拉比卡咖啡，只生长在<strong>夏威夷大岛科纳地区</strong>的火山斜坡上。由于种植区域极小、产量有限，正宗科纳卖的是高价。那么它值得吗？对大多数游客来说，诚实的答案是<strong>"值得——但前提是它真的是100%科纳"</strong>。真正的问题不是"是不是科纳"，而是<strong>"100%科纳"还是"科纳混合"</strong>。正是这一点区别，让许多人在不知不觉中为极少量的科纳付了高价。',
    },
    history: {
      title: '科纳咖啡为何如此昂贵',
      subtitle: '以及"科纳混合"为何存在',
      p1: '正宗科纳咖啡昂贵，原因很简单：供给与地理。它只生长在大岛西侧、胡阿拉莱火山和冒纳罗亚火山斜坡的<strong>一条狭长地带</strong>。富含矿物质的火山土、晴朗的清晨、午后温和的云层和岛屿温暖的夜晚，造就了几乎无法复制的微气候。再加上咖啡樱桃是在陡峭地形上的<strong>小型家庭农场手工采摘</strong>，使科纳成为世界上最费工、供给最有限的咖啡之一。',
      p2: '正是这种稀缺造就了<strong>"科纳混合"</strong>的存在。对科纳之名的需求，远远超过每年实际能种出的真科纳数量。根据夏威夷标签法，一袋咖啡只要含有<strong>低至10%的真科纳，就可以合法标为"科纳混合"</strong>，其余90%可以是来自世界任何地方的廉价普通豆。',
      p3: '这正是大多数买纪念品的人会掉进去的陷阱。机场或超市里低价的"科纳"袋装咖啡，几乎绝不可能是100%科纳。它通常是10%的混合，也就是说你花了接近科纳的价钱，买的却是<strong>90%是填充豆</strong>的咖啡。它喝起来像普通咖啡，因为它大部分确实就是。科纳这个名字在做营销，袋子里的豆子却不是。',
      p4: '那么如何确保买到真货？规则简短而严格：在标签或菜单上寻找<strong>"100% Kona（100%科纳）"</strong>字样。如果只写"科纳混合""科纳烘焙"或"科纳风味"，就当它大部分不是科纳。更好的做法是<strong>在夏威夷产地附近喝现煮的</strong>，可靠的咖啡馆会自豪地准确告诉你他们用的是什么。',
    },
    comparison: {
      title: '100%科纳 vs 科纳混合 vs 普通咖啡',
      subtitle: '你究竟在为什么付钱？',
      intro: '标签上的"科纳"一词可能意味着天差地别的东西。下面诚实地并排看看你实际得到的是什么：',
      headers: {
        feature: '特点',
        bingsu: '100%科纳咖啡',
        shavedIce: '科纳混合（10%）',
        kakigori: '普通咖啡',
      },
      rows: [
        {
          feature: '科纳含量',
          bingsu: '100%正宗科纳',
          shavedIce: '低至10%科纳',
          kakigori: '0%科纳',
        },
        {
          feature: '价格',
          bingsu: '高端',
          shavedIce: '中等（定价接近科纳）',
          kakigori: '低',
        },
        {
          feature: '风味',
          bingsu: '顺滑、明亮、低酸、干净',
          shavedIce: '被稀释、平庸',
          kakigori: '差异很大',
        },
        {
          feature: '适合人群',
          bingsu: '想体验正宗科纳的任何人',
          shavedIce: '被标签误导的消费者',
          kakigori: '日常饮用者',
        },
        {
          feature: '应找的标签',
          bingsu: '"100% Kona"',
          shavedIce: '"科纳混合"（看清小字）',
          kakigori: '无',
        },
        {
          feature: '值得吗？',
          bingsu: '值得——若是真货一杯',
          shavedIce: '通常不值',
          kakigori: '日常足够',
        },
      ],
      note: '保护你的唯一规则：坚持"100% Kona"。如果标签只写"科纳混合"，法律上它可以90%都是填充豆——你为的是一个名字，而不是科纳，付了高价。',
    },
    types: {
      title: '如何确认你买到的是真科纳',
      subtitle: '付高价之前的五个快速检查',
      items: [
        {
          name: '在标签上寻找"100% Kona"',
          korean: '标签',
          description: '这是唯一能保证纯科纳的字样。必须写"100% Kona"——不是"Kona"，不是"产自科纳"，也不是"科纳产区"。若缺了这三个数字和这个词，就当它是混合。可靠的烘焙商和咖啡馆都会清楚而自豪地标明。',
          icon: '🏷️',
        },
        {
          name: '警惕"科纳混合"或"科纳烘焙"',
          korean: '警告',
          description: '这些是要留心的字眼。"科纳混合""科纳烘焙""科纳风味"在法律上可以只含10%真科纳。袋子正面大大的"KONA"是营销——翻到背面，读印着实际百分比的小字。',
          icon: '⚠️',
        },
        {
          name: '看价格',
          korean: '价格',
          description: '真科纳从不便宜。狭小的种植区和手工采摘，使正宗的100%科纳成为世界上最贵的咖啡之一。如果一袋"科纳"便宜得可疑，那它几乎肯定是低含量的混合，而非真货。',
          icon: '💰',
        },
        {
          name: '在产地附近购买或饮用',
          korean: '产地',
          description: '越靠近夏威夷，越容易找到正宗科纳和能为它作保的人。在岛上从农场、烘焙商或诚实的咖啡馆购买或饮用，远胜于离开时在机场随手抓一袋来历不明的纪念品。',
          icon: '🌺',
        },
        {
          name: '品尝差别',
          korean: '味道',
          description: '真正的100%科纳顺滑、明亮、干净，天然低酸，没有刺鼻的苦味。10%的混合喝起来像普通咖啡，因为它大部分就是。一旦把真货并排品尝，那差别就让你很难再忽视。',
          icon: '☕',
        },
      ],
    },
    whyHawaii: {
      title: '它真的值得吗？——若是真货，值得',
      points: [
        {
          title: '你能尝出差别',
          description: '若是正宗的100%科纳，那份溢价真的会体现在杯中——顺滑的醇厚、明亮却温和的酸度、毫无苦味的干净尾韵。这正是人们付钱想要的体验，而被稀释的10%混合根本无法呈现。当它是真的，品质一目了然。',
        },
        {
          title: '真正的单一产地体验',
          description: '科纳是少数几种美国单一产地咖啡之一，生长在只有夏威夷才有的地方。喝真科纳不只是买一杯饮料——而是在品尝一片特定的火山斜坡、气候和农耕传统。这种"地域感"正是它值得的重要原因。',
        },
        {
          title: '现煮胜过纪念品袋',
          description: '由懂得处理它的人现煮的一杯100%科纳，几乎总比摆在货架上的纪念品袋更好喝。想知道科纳是否值得，先尝现煮的，再决定是否把豆子带回家。',
        },
        {
          title: '搭配让它成为一种体验',
          description: '真科纳在甜点旁边最出彩。把现煮的一杯配上温热的甜甜圈或马拉萨达，就把一杯简单的咖啡变成难忘的夏威夷时刻。正是这种"好咖啡＋新鲜甜甜圈"的组合，让那份溢价物有所值。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基哪里能喝到正宗科纳咖啡',
      intro: '如果你想在威基基品尝正宗的夏威夷科纳咖啡，科纳咖啡甜甜圈是个诚实的起点。',
      shop: {
        name: 'Kona Coffee Donut（科纳咖啡甜甜圈）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '位于威基基卡拉卡瓦大道中心地段，科纳咖啡甜甜圈提供正宗的夏威夷科纳咖啡（我们用的是檀香山咖啡），现煮供应，搭配新鲜甜甜圈和韩式刨冰。与其凭猜测买一袋纪念品，不如先尝一杯地道的，再自己判断科纳值不值。',
        highlights: [
          '正宗夏威夷科纳咖啡，现煮供应',
          '我们用檀香山咖啡——不是来历不明的纪念品袋',
          '距威基基海滩步行可达',
          '每天营业——搭配新鲜甜甜圈或刨冰',
        ],
      },
      cta: '查看我们的科纳咖啡菜单',
    },
    howToEat: {
      title: '如何花得值',
      subtitle: '认真品尝科纳的小贴士',
      tips: [
        {
          title: '先喝黑咖啡',
          description: '在加牛奶或糖之前，先喝一口黑的。真正的100%科纳顺滑、低酸，有干净而天然回甘的尾韵——这些特质都会被奶和糖浆掩盖。先尝原味，是判断你喝的是不是真货最快的方法。',
        },
        {
          title: '问一句"是100%科纳吗？"',
          description: '别不好意思——直接问。诚实的咖啡馆会乐意告诉你他们用的是100%科纳还是混合。这个答案能透露很多你付钱买的是什么，而可靠的店家会自豪地确认那是真货。',
        },
        {
          title: '试试手冲或拿铁',
          description: '干净的手冲能让正宗科纳明亮、细腻的个性充分展现。喜欢更顺滑的？科纳拿铁在保留顺滑的同时柔化了棱角。无论哪种，现煮都胜过摆在货架上的袋装。',
        },
        {
          title: '配一个马拉萨达或麻糬甜甜圈',
          description: '科纳干净、低酸的特质天生适合搭配。一个温热的马拉萨达或Q弹的麻糬甜甜圈能衬托咖啡的明亮，把一杯咖啡变成地道的夏威夷享受——也让那份溢价感觉完全值得。',
        },
      ],
    },
    faq: {
      title: '关于科纳咖啡的常见问题',
      items: [
        {
          question: '科纳咖啡值这个价吗？',
          answer: '如果是正宗的100%科纳，那么值——对大多数人来说至少值得尝一次。你能喝到一杯顺滑、明亮、低酸、别处找不到的咖啡，它产自夏威夷一小片火山区域。人们浪费钱的地方，是只含低至10%真科纳的廉价"科纳混合"袋装。把一杯地道的100%科纳现煮品尝，你就会明白这份溢价是为了什么。',
        },
        {
          question: '100%科纳和科纳混合有什么区别？',
          answer: '"100%科纳"意味着袋中或杯中的每一颗豆子都是正宗科纳咖啡。"科纳混合"在法律上可以只含10%科纳，其余90%是来自世界任何地方的更廉价豆子。两者在货架上几乎看起来一样、价格也相近，却是非常不同的产品——务必认准"100% Kona"字样。',
        },
        {
          question: '科纳咖啡为什么这么贵？',
          answer: '科纳生长在夏威夷大岛火山斜坡上一片很小的区域，那里的土壤、气候和海拔造就了理想却有限的种植条件。咖啡樱桃在陡峭地形的小型家庭农场手工采摘，非常费工。极少的供给、加上高需求和成本高昂的手工采摘，使正宗的100%科纳成为世界上最贵的咖啡之一。',
        },
        {
          question: '我怎么辨别它是不是真科纳？',
          answer: '在标签或菜单上寻找确切的"100% Kona"字样——而不是只写"Kona""科纳混合"或"科纳烘焙"，那些可能大部分是填充豆。对低价要保持怀疑，因为真科纳从不便宜。最可靠的办法，是在夏威夷产地附近，从清楚说明自己卖什么的农场、烘焙商或诚实咖啡馆购买或饮用。',
        },
        {
          question: '在威基基哪里能喝到正宗科纳咖啡？',
          answer: '位于威基基2142 Kalākaua Ave的科纳咖啡甜甜圈，提供正宗的夏威夷科纳咖啡（我们用檀香山咖啡），现煮供应，搭配新鲜甜甜圈和刨冰。在决定是否买豆之前，这是品尝一杯地道科纳的轻松而诚实的方式，而且距威基基海滩步行即达。',
        },
      ],
    },
    cta: {
      title: '在威基基品尝正宗科纳咖啡',
      text: '前往2142 Kalākaua Ave的科纳咖啡甜甜圈，品尝现煮的正宗100%夏威夷科纳咖啡，搭配新鲜甜甜圈。',
      menuButton: '查看科纳咖啡菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '科纳咖啡值得买吗？',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Is Kona Coffee Worth It? 100% Kona vs. Kona Blend',
  description: 'Is Kona coffee worth the price? The honest difference between 100% Kona and a Kona Blend (as little as 10% Kona), why real Kona is expensive, and where to taste it in Waikiki.',
  image: 'https://www.konacoffeedonut.com/images/blog/is-kona-coffee-worth-it.jpeg',
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
  datePublished: '2026-06-14',
  dateModified: '2026-06-14',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/en/blog/is-kona-coffee-worth-it',
  },
  keywords: 'is kona coffee worth it, 100% kona coffee, kona blend, real kona coffee, kona coffee waikiki, why is kona coffee expensive',
  wordCount: 1300,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Kona coffee worth the price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If it\'s genuine 100% Kona, yes — for most people it\'s worth trying at least once. You get a smooth, bright, low-acid cup that you simply can\'t find anywhere else, grown on a tiny volcanic region in Hawaii. Where people waste money is on cheap "Kona Blend" bags that contain as little as 10% real Kona. Taste a proper 100% Kona cup fresh and you\'ll understand what the premium is for.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the difference between 100% Kona and Kona Blend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '"100% Kona" means every bean in the bag or cup is genuine Kona coffee. "Kona Blend" means it can legally contain as little as 10% Kona, with the other 90% being cheaper beans from anywhere in the world. The two can look almost identical on a shelf and cost similar amounts, but they are very different products — always read for the words "100% Kona".',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is Kona coffee so expensive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona grows in a very small region on the volcanic slopes of Hawaii\'s Big Island, where the soil, climate, and elevation create ideal but limited growing conditions. The cherries are hand-picked on small family farms across steep terrain, which is labor-intensive. Tiny supply plus high demand and costly hand harvesting make real 100% Kona one of the priciest coffees in the world.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I tell if it\'s real Kona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Look for the exact words "100% Kona" on the label or menu — not just "Kona," "Kona Blend," or "Kona Roast," which can be mostly filler beans. Be suspicious of low prices, since real Kona is never cheap. The most reliable approach is to buy or drink it near the source in Hawaii from a farm, roaster, or honest cafe that clearly states what they serve.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I drink real Kona coffee in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut at 2142 Kalākaua Ave in Waikiki serves real Hawaiian Kona coffee — we pour Honolulu Coffee — freshly brewed alongside fresh donuts and bingsu. It\'s an easy, honest way to taste a proper cup before deciding whether to buy beans, and it\'s within walking distance of Waikiki Beach.',
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

export default function IsKonaCoffeeWorthItPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = content[locale as keyof typeof content] || content.en;

  return (
    <>
      <Script
        id="blogposting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white">
      <SubpageNav locale={locale} />

      {/* Hero Image */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/images/blog/is-kona-coffee-worth-it.jpeg"
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

        {/* How to Know You're Getting Real Kona */}
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

        {/* Is It Actually Worth It */}
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

        {/* Where to Drink Real Kona in Waikiki */}
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

        {/* How to Get Your Money's Worth */}
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
              href={`/${locale}/blog/kona-coffee-guide`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Kona Coffee Guide
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
