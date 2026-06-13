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
      title: 'What is Kona Coffee?',
      subtitle: 'Why Hawaii\'s Legendary Coffee Is So Rare & Expensive',
      updated: 'Updated June 2026',
      readTime: '8 min read',
    },
    definition: {
      title: 'What is Kona Coffee?',
      text: '<strong>Kona coffee</strong> is premium <strong>arabica coffee grown only in the small Kona districts</strong> on the western slopes of <strong>Hualālai and Mauna Loa</strong> on Hawaii\'s Big Island. The rich volcanic soil, gentle morning sun, afternoon cloud cover, and warm island rain create a one-of-a-kind microclimate that yields a <strong>smooth, bright, low-acid cup</strong> with notes of nuts and brown sugar. By law, only beans grown in this tiny region can be called <strong>"Kona"</strong> — which is exactly why true Kona coffee is so rare and so prized.',
    },
    history: {
      title: 'The History of Kona Coffee',
      subtitle: 'From a Single Cutting in 1828 to a Protected World-Class Origin',
      p1: 'Coffee first arrived in Hawaii around <strong>1828</strong>, when the missionary Samuel Ruggles brought coffee cuttings to the Kona district on the Big Island. The plants thrived in the volcanic soil and unique mountain climate, and what began as a small experiment slowly grew into one of the most respected coffee origins in the world.',
      p2: 'The coffee flourished along a narrow strip of land now known as the <strong>"Kona Coffee Belt"</strong> — roughly 20 to 30 miles long on the slopes of Hualālai and Mauna Loa. This belt sits at the perfect elevation, where sunny mornings, cloudy afternoons, and steady rainfall give the cherries a long, even ripening that builds Kona\'s signature smooth flavor.',
      p3: 'For generations, Kona has been farmed on <strong>small family farms</strong> — many founded by Japanese immigrants in the early 1900s — where ripe cherries are still hand-picked one by one. These families survived global coffee market crashes and labor shortages, holding onto their land and their craft when larger plantations elsewhere turned to machines.',
      p4: 'Today, Kona coffee is a <strong>globally protected premium origin</strong>. Hawaii law strictly controls which beans may use the Kona name, and 100% Kona commands some of the highest prices of any coffee on earth. It has become a symbol of Hawaiian craftsmanship — a rare, single-origin coffee that drinkers seek out by name.',
    },
    comparison: {
      title: '100% Kona vs Kona Blend vs Regular Coffee',
      subtitle: 'What Are You Really Buying?',
      intro: 'Not all "Kona" coffee is created equal. The label can be misleading, so here is exactly how 100% Kona, Kona Blend, and ordinary coffee compare:',
      headers: {
        feature: 'Feature',
        bingsu: '100% Kona Coffee',
        shavedIce: 'Kona Blend (10%)',
        kakigori: 'Regular Coffee',
      },
      rows: [
        {
          feature: 'Origin',
          bingsu: 'Kona district, Big Island',
          shavedIce: 'Mostly cheaper beans + 10% Kona',
          kakigori: 'Anywhere in the world',
        },
        {
          feature: 'Kona Content',
          bingsu: '100%',
          shavedIce: 'As low as 10%',
          kakigori: '0%',
        },
        {
          feature: 'Harvest',
          bingsu: 'Hand-picked, cherry by cherry',
          shavedIce: 'Mixed sources',
          kakigori: 'Often machine-harvested',
        },
        {
          feature: 'Flavor',
          bingsu: 'Smooth, bright, low-acid, nutty',
          shavedIce: 'Diluted, inconsistent',
          kakigori: 'Varies widely',
        },
        {
          feature: 'Price',
          bingsu: 'Premium',
          shavedIce: 'Mid-range',
          kakigori: 'Low',
        },
        {
          feature: 'Label Honesty',
          bingsu: 'Protected origin name',
          shavedIce: 'Watch the fine print',
          kakigori: 'n/a',
        },
      ],
      note: 'Beware the "Kona Blend" label — by Hawaii law it can legally contain as little as 10% real Kona coffee, with the other 90% being far cheaper beans from elsewhere. If you want the true Kona experience, always insist on 100% Kona.',
    },
    types: {
      title: 'Types & Grades of Kona Coffee',
      subtitle: 'From Top Bean Grades to Your Cup in Waikiki',
      items: [
        {
          name: 'Extra Fancy',
          korean: 'Top Grade',
          description: 'The highest grade of Kona coffee — the largest beans with the fewest defects. Extra Fancy beans are carefully sorted by size and quality, producing the cleanest, most refined cup. This is the grade serious coffee lovers seek out, and it commands the highest prices.',
          icon: '🏆',
        },
        {
          name: 'Fancy',
          korean: 'Premium Grade',
          description: 'Just below Extra Fancy, Fancy grade features slightly smaller beans but the same beautiful Kona flavor profile. It offers excellent quality at a slightly more approachable price — a favorite for everyday premium brewing.',
          icon: '⭐',
        },
        {
          name: 'Kona Peaberry',
          korean: 'Peaberry',
          description: 'A natural rarity. Normally a coffee cherry holds two flat-sided beans, but in about 5% of the crop a single round bean forms instead — the peaberry. Many roasters believe peaberries deliver a sweeter, more intense flavor, making them especially prized.',
          icon: '🫘',
        },
        {
          name: 'Estate / Single-Origin',
          korean: 'Single-Origin',
          description: 'Coffee grown, harvested, and processed on a single Kona farm, fully traceable from tree to cup. Estate Kona lets you taste the character of one specific piece of volcanic land — the purest expression of what makes Kona coffee special.',
          icon: '🌱',
        },
        {
          name: 'In the Cup: Pour-Over, Latte & Affogato',
          korean: 'In the Cup',
          description: 'How most visitors experience Kona — freshly brewed. A clean Kona pour-over showcases its smooth, low-acid character; a Kona latte rounds it with milk; and a Kona affogato pours hot espresso over ice cream for a Hawaiian treat. Try all three on our Kona coffee menu.',
          icon: '☕',
        },
      ],
    },
    whyHawaii: {
      title: 'Why Kona Coffee Is So Special',
      points: [
        {
          title: 'Volcanic Soil & Perfect Microclimate',
          description: 'Kona\'s coffee grows in mineral-rich volcanic soil on the slopes of Hualālai and Mauna Loa. Sunny mornings, cloudy afternoons that shade the trees, and gentle island rain create an ideal microclimate found almost nowhere else — the foundation of Kona\'s smooth, balanced flavor.',
        },
        {
          title: 'The Only Coffee of Its Kind Grown in the USA',
          description: 'Hawaii is the only U.S. state that can commercially grow coffee, and Kona is its most famous region. That makes 100% Kona a genuinely American specialty coffee — grown, hand-picked, and roasted on home soil rather than imported, which adds to both its appeal and its price.',
        },
        {
          title: 'Hand-Picked, Small-Farm Quality',
          description: 'Most Kona comes from small family farms where ripe cherries are still picked by hand, one at a time, over a months-long harvest. This careful, labor-intensive work is expensive — but it is exactly why every cup of true Kona tastes so clean and consistent.',
        },
        {
          title: 'Limited Supply = Rarity & Price',
          description: 'The Kona Coffee Belt is tiny, so only a small amount of true Kona is produced each year. When demand far outstrips a fixed, limited supply, prices rise. That rarity is the core reason 100% Kona is one of the most expensive coffees in the world.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Drink Kona Coffee in Waikiki',
      intro: 'If you\'re craving real Hawaiian Kona coffee in Waikiki, Kona Coffee Donut is your destination.',
      shop: {
        name: 'Kona Coffee Donut',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Located in the heart of Waikiki on Kalākaua Avenue, Kona Coffee Donut serves real Hawaiian Kona coffee — we proudly pour Honolulu Coffee — alongside fresh donuts and Korean bingsu. Enjoy it as a smooth pour-over, a creamy latte, or a Kona affogato, all just steps from the beach.',
        highlights: [
          'Real Hawaiian Kona coffee, brewed fresh daily',
          'Served as pour-over, latte, or Kona affogato',
          'Walking distance from Waikiki Beach',
          'Open daily — fresh donuts and bingsu too',
        ],
      },
      cta: 'View Our Kona Coffee Menu',
    },
    howToEat: {
      title: 'How to Enjoy Kona Coffee',
      subtitle: 'Get the Most Out of Every Cup',
      tips: [
        {
          title: 'Taste It Black First',
          description: 'Before adding milk or sugar, take a sip of Kona black — ideally as a pour-over. Its low acidity and smooth, nutty sweetness shine on their own. Tasting it black is the best way to appreciate what makes real Kona coffee worth the price.',
        },
        {
          title: 'Insist on 100% Kona',
          description: 'Always check the label. "Kona Blend" can be as little as 10% Kona, so look for the words "100% Kona" to be sure you\'re getting the real thing. When in doubt, ask — a good cafe will be proud to tell you exactly what they pour.',
        },
        {
          title: 'Try It as an Affogato or Latte',
          description: 'Kona\'s smooth profile makes it a beautiful base for espresso drinks. A Kona latte is creamy and balanced, while a Kona affogato — hot espresso poured over cold ice cream — turns your coffee into a refreshing Hawaiian dessert. Both are perfect for a warm Waikiki afternoon.',
        },
        {
          title: 'Pair It with a Malasada or Mochi Donut',
          description: 'Kona\'s nutty, low-acid flavor pairs perfectly with something sweet. A warm malasada or a chewy mochi donut balances the coffee beautifully — the classic Hawaiian way to enjoy a cup of Kona with friends.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About Kona Coffee',
      items: [
        {
          question: 'What makes Kona coffee special?',
          answer: 'Kona coffee is special because of where and how it grows. It comes only from the small Kona districts on the volcanic slopes of Hualālai and Mauna Loa, where rich soil, sunny mornings, cloudy afternoons, and gentle rain create a rare microclimate. Combined with careful hand-picking on small family farms, this produces a smooth, bright, low-acid cup that\'s hard to find anywhere else.',
        },
        {
          question: 'Why is Kona coffee so expensive?',
          answer: 'Kona coffee is expensive because supply is small and the work is intensive. The Kona Coffee Belt is a tiny growing region, so only a limited amount is produced each year. The ripe cherries are hand-picked one at a time over a long harvest, and labor in Hawaii is costly. Limited supply plus high demand and labor-intensive farming all push the price of 100% Kona to among the highest of any coffee in the world.',
        },
        {
          question: 'What is the difference between 100% Kona and Kona Blend?',
          answer: '100% Kona coffee contains only beans grown in the Kona district. A "Kona Blend," by Hawaii law, can legally contain as little as 10% real Kona coffee — the other 90% is usually much cheaper beans from elsewhere. If you want the true Kona flavor and experience, always look for "100% Kona" on the label.',
        },
        {
          question: 'What does Kona coffee taste like?',
          answer: 'Kona coffee is known for being smooth, bright, and low in acidity, with a clean finish. Many people taste gentle notes of nuts, brown sugar, and a hint of fruit or chocolate. Because it\'s so balanced and not bitter, Kona is easy to enjoy black — which is the best way to appreciate its flavor.',
        },
        {
          question: 'Where can I drink real Kona coffee in Waikiki?',
          answer: 'You can drink real Hawaiian Kona coffee at Kona Coffee Donut, 2142 Kalakaua Ave in the heart of Waikiki. We pour Honolulu Coffee and serve it as a pour-over, latte, or Kona affogato, alongside fresh donuts and bingsu — all within walking distance of Waikiki Beach.',
        },
      ],
    },
    cta: {
      title: 'Taste Real Kona Coffee in Waikiki',
      text: 'Visit Kona Coffee Donut at 2142 Kalakaua Ave and taste authentic Hawaiian Kona coffee, poured fresh alongside our donuts and bingsu.',
      menuButton: 'View Kona Coffee Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'What is Kona Coffee?',
    },
  },
  ja: {
    hero: {
      title: 'コナコーヒーとは？',
      subtitle: 'ハワイ伝説のコーヒーが希少で高価な理由',
      updated: '2026年6月更新',
      readTime: '8分で読める',
    },
    definition: {
      title: 'コナコーヒーとは？',
      text: '<strong>コナコーヒー</strong>は、ハワイ島（ビッグアイランド）の<strong>フアラライ山とマウナロア山</strong>の西斜面にある<strong>小さなコナ地区だけで栽培される</strong>プレミアムなアラビカ種です。ミネラル豊富な火山性土壌、穏やかな朝日、午後の雲、そして温かい島の雨が、他に類を見ない独特のマイクロクライメット（微気候）を生み出し、ナッツや黒糖のような風味を持つ<strong>なめらかで明るく、酸味の少ない一杯</strong>を作り上げます。法律上、この狭い地域で育った豆だけが<strong>「コナ」</strong>と名乗ることができます。これこそが本物のコナコーヒーが希少で珍重される理由です。',
    },
    history: {
      title: 'コナコーヒーの歴史',
      subtitle: '1828年の一本の苗木から、世界に認められた産地へ',
      p1: 'ハワイにコーヒーが初めて伝わったのは<strong>1828年頃</strong>。宣教師サミュエル・ラグルスがビッグアイランドのコナ地区にコーヒーの苗木を持ち込みました。火山性土壌と独特の山岳気候の中でコーヒーの木はよく育ち、小さな実験として始まったものが、やがて世界で最も尊敬されるコーヒー産地の一つへと成長していきました。',
      p2: 'コーヒーは現在<strong>「コナコーヒーベルト」</strong>と呼ばれる細長い帯状の土地で繁栄しました。フアラライ山とマウナロア山の斜面に沿って、およそ20〜30マイル（約32〜48km）にわたります。このベルトは絶好の標高に位置し、晴れた朝、曇りの午後、安定した雨が、コーヒーチェリーをゆっくり均一に熟させ、コナならではのなめらかな風味を育みます。',
      p3: 'コナは何世代にもわたり<strong>小さな家族経営の農園</strong>で育てられてきました。その多くは1900年代初頭に日本人移民が開いた農園で、今も熟したチェリーを一粒ずつ手摘みしています。これらの家族は世界的なコーヒー市場の暴落や労働力不足を乗り越え、他の大規模農園が機械化に向かう中でも、自分たちの土地と職人技を守り続けてきました。',
      p4: '今日、コナコーヒーは<strong>世界的に保護されたプレミアム産地</strong>です。ハワイ州の法律はコナの名を使える豆を厳しく管理しており、100%コナは世界のコーヒーの中でも最高級の価格で取引されています。コナコーヒーはハワイの職人技の象徴となり、飲み手が名指しで求める希少なシングルオリジンコーヒーとなっています。',
    },
    comparison: {
      title: '100%コナ vs コナブレンド vs 普通のコーヒー',
      subtitle: 'あなたが本当に買っているものは？',
      intro: 'すべての「コナ」コーヒーが同じわけではありません。ラベルは誤解を招くことがあるので、100%コナ、コナブレンド、普通のコーヒーの違いを正確に比較してみましょう：',
      headers: {
        feature: '特徴',
        bingsu: '100%コナコーヒー',
        shavedIce: 'コナブレンド（10%）',
        kakigori: '普通のコーヒー',
      },
      rows: [
        {
          feature: '産地',
          bingsu: 'ビッグアイランドのコナ地区',
          shavedIce: '安価な豆 + コナ10%',
          kakigori: '世界中どこでも',
        },
        {
          feature: 'コナ含有率',
          bingsu: '100%',
          shavedIce: 'わずか10%のことも',
          kakigori: '0%',
        },
        {
          feature: '収穫',
          bingsu: '一粒ずつ手摘み',
          shavedIce: '産地の混合',
          kakigori: '機械収穫が多い',
        },
        {
          feature: '風味',
          bingsu: 'なめらか、明るい、低酸味、ナッツ感',
          shavedIce: '薄まって不安定',
          kakigori: 'まちまち',
        },
        {
          feature: '価格',
          bingsu: 'プレミアム',
          shavedIce: '中程度',
          kakigori: '安い',
        },
        {
          feature: 'ラベルの正直さ',
          bingsu: '保護された産地名',
          shavedIce: '小さな表示に注意',
          kakigori: '該当なし',
        },
      ],
      note: '「コナブレンド」という表示には要注意。ハワイ州の法律では、本物のコナをわずか10%しか含まなくても合法的に「コナブレンド」と名乗れ、残りの90%は他産地のはるかに安い豆ということもあります。本物のコナ体験を求めるなら、必ず「100%コナ」を選びましょう。',
    },
    types: {
      title: 'コナコーヒーの種類と等級',
      subtitle: '最高等級の豆から、ワイキキでの一杯まで',
      items: [
        {
          name: 'エクストラファンシー',
          korean: '最高等級',
          description: 'コナコーヒーの最高等級。最も大きく、欠点の最も少ない豆です。エクストラファンシーはサイズと品質で丁寧に選別され、最もクリーンで洗練された一杯を生み出します。コーヒー通が求める等級で、最も高い価格で取引されます。',
          icon: '🏆',
        },
        {
          name: 'ファンシー',
          korean: 'プレミアム等級',
          description: 'エクストラファンシーのすぐ下の等級。豆はやや小さめですが、コナならではの美しい風味は同じ。少し手の届きやすい価格で優れた品質を楽しめる、日常のプレミアムコーヒーに人気の等級です。',
          icon: '⭐',
        },
        {
          name: 'コナピーベリー',
          korean: 'ピーベリー',
          description: '自然が生んだ希少品。通常コーヒーチェリーには平らな面を持つ豆が2つ入っていますが、約5%の確率で丸い豆が1つだけ形成されます。これがピーベリーです。多くの焙煎家がピーベリーはより甘く濃厚な風味になると考えており、特に珍重されています。',
          icon: '🫘',
        },
        {
          name: 'エステート / シングルオリジン',
          korean: 'シングルオリジン',
          description: '単一のコナ農園で栽培・収穫・精製され、木から一杯まで完全に追跡できるコーヒー。エステートコナは、ある特定の火山の土地の個性を味わえる、コナコーヒーの魅力の最も純粋な表現です。',
          icon: '🌱',
        },
        {
          name: 'カップで楽しむ：プアオーバー・ラテ・アフォガート',
          korean: 'カップで',
          description: 'ほとんどの旅行者が体験するのは、淹れたてのコナ。クリーンなコナのプアオーバーはなめらかで低酸味の個性を引き立て、コナラテはミルクでまろやかに、コナアフォガートは熱いエスプレッソをアイスクリームに注いだハワイならではの一品です。コナコーヒーメニューで3つすべてをお試しください。',
          icon: '☕',
        },
      ],
    },
    whyHawaii: {
      title: 'コナコーヒーが特別な理由',
      points: [
        {
          title: '火山性土壌と完璧なマイクロクライメット',
          description: 'コナのコーヒーは、フアラライ山とマウナロア山の斜面にあるミネラル豊富な火山性土壌で育ちます。晴れた朝、木を日陰にする曇りの午後、優しい島の雨が、他ではほとんど見られない理想的な微気候を作り出します。これがコナのなめらかでバランスの取れた風味の土台です。',
        },
        {
          title: 'アメリカで唯一無二のコーヒー産地',
          description: 'ハワイはアメリカで商業的にコーヒーを栽培できる唯一の州であり、コナはその最も有名な地域です。つまり100%コナは、輸入ではなく自国の土地で栽培・手摘み・焙煎される、正真正銘のアメリカ産スペシャルティコーヒー。これが魅力と価格の両方を高めています。',
        },
        {
          title: '手摘み、小規模農園の品質',
          description: 'コナのほとんどは小さな家族農園で生まれ、熟したチェリーを数ヶ月にわたって一粒ずつ手摘みします。この丁寧で手間のかかる作業はコストがかかりますが、まさにそれが本物のコナの一杯がこれほどクリーンで安定した味になる理由です。',
        },
        {
          title: '限られた供給 = 希少性と価格',
          description: 'コナコーヒーベルトは非常に小さいため、本物のコナは毎年わずかしか生産されません。需要が固定された限られた供給をはるかに上回ると、価格は上昇します。この希少性こそが、100%コナが世界で最も高価なコーヒーの一つである核心的な理由です。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキでコナコーヒーを飲むなら',
      intro: 'ワイキキで本物のハワイアンコナコーヒーを楽しむなら、コナコーヒードーナツへ。',
      shop: {
        name: 'Kona Coffee Donut（コナコーヒードーナツ）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心部、カラカウア通りに位置するコナコーヒードーナツは、本物のハワイアンコナコーヒーを提供しています。私たちは誇りを持ってホノルルコーヒーを淹れ、焼きたてのドーナツや韓国ビンスと一緒にお楽しみいただけます。なめらかなプアオーバー、クリーミーなラテ、コナアフォガートとして、ビーチからすぐの場所でどうぞ。',
        highlights: [
          '本物のハワイアンコナコーヒーを毎日淹れたてで',
          'プアオーバー、ラテ、コナアフォガートで提供',
          'ワイキキビーチから徒歩圏内',
          '毎日営業 — 焼きたてドーナツとビンスも',
        ],
      },
      cta: 'コナコーヒーメニューを見る',
    },
    howToEat: {
      title: 'コナコーヒーの楽しみ方',
      subtitle: '一杯を最大限に味わうコツ',
      tips: [
        {
          title: 'まずはブラックで味わう',
          description: 'ミルクや砂糖を加える前に、まずはコナをブラックで一口。できればプアオーバーで。低い酸味となめらかでナッツのような甘さがそのまま引き立ちます。ブラックで味わうことが、本物のコナコーヒーが価格に見合う理由を実感する一番の方法です。',
        },
        {
          title: '「100%コナ」にこだわる',
          description: '必ずラベルを確認しましょう。「コナブレンド」はコナがわずか10%のこともあるので、本物を確実に手に入れるには「100%コナ」の表示を探してください。迷ったら聞いてみましょう。良いカフェなら、何を淹れているか誇りを持って教えてくれます。',
        },
        {
          title: 'アフォガートやラテで試す',
          description: 'コナのなめらかな風味は、エスプレッソドリンクの素晴らしいベースになります。コナラテはクリーミーでバランスが良く、コナアフォガート（熱いエスプレッソを冷たいアイスクリームに注いだもの）はコーヒーを爽やかなハワイアンデザートに変えます。暖かいワイキキの午後にぴったりです。',
        },
        {
          title: 'マラサダやモチドーナツと合わせる',
          description: 'コナのナッツのような低酸味の風味は、甘いものと相性抜群。温かいマラサダやもちもちのモチドーナツがコーヒーを美しく引き立てます。友達とコナの一杯を楽しむ、ハワイの定番スタイルです。',
        },
      ],
    },
    faq: {
      title: 'コナコーヒーに関するよくある質問',
      items: [
        {
          question: 'コナコーヒーは何が特別なのですか？',
          answer: 'コナコーヒーが特別なのは、どこでどのように育つかにあります。フアラライ山とマウナロア山の火山斜面にある小さなコナ地区だけで生まれ、豊かな土壌、晴れた朝、曇りの午後、優しい雨が希少な微気候を作り出します。小さな家族農園での丁寧な手摘みと相まって、他では見つけにくいなめらかで明るく酸味の少ない一杯が生まれます。',
        },
        {
          question: 'コナコーヒーはなぜそんなに高いのですか？',
          answer: 'コナコーヒーが高いのは、供給が少なく作業が手間のかかるものだからです。コナコーヒーベルトはごく小さな栽培地域なので、毎年わずかしか生産されません。熟したチェリーは長い収穫期にわたって一粒ずつ手摘みされ、ハワイの人件費も高くつきます。限られた供給に高い需要、そして手間のかかる栽培が重なり、100%コナの価格は世界のコーヒーの中でも最高クラスになっています。',
        },
        {
          question: '100%コナとコナブレンドの違いは何ですか？',
          answer: '100%コナコーヒーはコナ地区で育った豆だけを含みます。一方「コナブレンド」はハワイ州の法律上、本物のコナをわずか10%しか含まなくても合法で、残りの90%は通常もっと安い他産地の豆です。本物のコナの風味と体験を求めるなら、必ずラベルの「100%コナ」を確認してください。',
        },
        {
          question: 'コナコーヒーはどんな味ですか？',
          answer: 'コナコーヒーはなめらかで明るく、酸味が少なく、後味がクリーンなことで知られています。多くの人がナッツや黒糖、わずかにフルーツやチョコレートのような風味を感じます。バランスが良く苦すぎないため、ブラックでも飲みやすく、それがコナの風味を一番楽しめる方法です。',
        },
        {
          question: 'ワイキキで本物のコナコーヒーが飲めるのはどこですか？',
          answer: 'ワイキキの中心部、2142 Kalakaua Ave のコナコーヒードーナツで本物のハワイアンコナコーヒーが飲めます。ホノルルコーヒーを淹れ、プアオーバー、ラテ、コナアフォガートとして、焼きたてドーナツやビンスと一緒に提供しています。すべてワイキキビーチから徒歩圏内です。',
        },
      ],
    },
    cta: {
      title: 'ワイキキで本物のコナコーヒーを',
      text: '2142 Kalakaua Ave のコナコーヒードーナツで、本物のハワイアンコナコーヒーを、淹れたてのドーナツやビンスと一緒にお楽しみください。',
      menuButton: 'コナコーヒーメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'コナコーヒーとは？',
    },
  },
  ko: {
    hero: {
      title: '코나 커피란 무엇인가?',
      subtitle: '하와이 전설의 커피가 희귀하고 비싼 이유',
      updated: '2026년 6월 업데이트',
      readTime: '8분 소요',
    },
    definition: {
      title: '코나 커피란?',
      text: '<strong>코나 커피</strong>는 하와이 빅아일랜드의 <strong>후알랄라이산과 마우나로아산</strong> 서쪽 경사면에 자리한 <strong>작은 코나 지역에서만 재배되는</strong> 프리미엄 아라비카 커피입니다. 미네랄이 풍부한 화산토, 부드러운 아침 햇살, 오후의 구름, 그리고 따뜻한 섬의 비가 어우러져 세상 어디에도 없는 독특한 미기후(微氣候)를 만들어내며, 견과류와 흑설탕을 닮은 풍미의 <strong>부드럽고 산뜻하며 산미가 낮은 한 잔</strong>을 완성합니다. 법적으로 이 좁은 지역에서 자란 원두만이 <strong>"코나"</strong>라는 이름을 쓸 수 있습니다. 바로 이것이 진짜 코나 커피가 희귀하고 귀하게 여겨지는 이유입니다.',
    },
    history: {
      title: '코나 커피의 역사',
      subtitle: '1828년 한 그루의 묘목에서 세계가 인정한 원산지로',
      p1: '하와이에 커피가 처음 들어온 것은 <strong>1828년경</strong>입니다. 선교사 새뮤얼 러글스가 빅아일랜드의 코나 지역으로 커피 묘목을 가져왔죠. 커피나무는 화산토와 독특한 산악 기후 속에서 잘 자랐고, 작은 실험으로 시작된 것이 점차 세계에서 가장 존경받는 커피 산지 중 하나로 성장했습니다.',
      p2: '커피는 오늘날 <strong>"코나 커피 벨트"</strong>라 불리는 좁고 긴 띠 모양의 땅에서 번성했습니다. 후알랄라이산과 마우나로아산 경사면을 따라 약 20~30마일(32~48km)에 이르죠. 이 벨트는 완벽한 고도에 위치해, 맑은 아침과 구름 낀 오후, 꾸준한 비가 커피 체리를 오래도록 고르게 익혀 코나 특유의 부드러운 풍미를 길러냅니다.',
      p3: '코나는 여러 세대에 걸쳐 <strong>작은 가족 농장</strong>에서 재배되어 왔습니다. 그중 상당수는 1900년대 초 일본 이민자들이 일군 농장으로, 지금도 잘 익은 체리를 한 알 한 알 손으로 땁니다. 이 가족들은 세계 커피 시장의 폭락과 인력난을 이겨내고, 다른 지역의 대규모 농장들이 기계화로 돌아설 때에도 자신들의 땅과 장인 정신을 지켜냈습니다.',
      p4: '오늘날 코나 커피는 <strong>세계적으로 보호받는 프리미엄 원산지</strong>입니다. 하와이 주법은 코나라는 이름을 쓸 수 있는 원두를 엄격히 관리하며, 100% 코나는 전 세계 커피 중에서도 최고 수준의 가격에 거래됩니다. 코나 커피는 하와이 장인 정신의 상징이 되었고, 애호가들이 이름을 콕 집어 찾는 희귀한 싱글 오리진 커피로 자리매김했습니다.',
    },
    comparison: {
      title: '100% 코나 vs 코나 블렌드 vs 일반 커피',
      subtitle: '당신이 정말 사고 있는 것은?',
      intro: '모든 "코나" 커피가 같은 것은 아닙니다. 라벨은 오해를 부를 수 있으니, 100% 코나와 코나 블렌드, 일반 커피가 어떻게 다른지 정확히 비교해 보세요:',
      headers: {
        feature: '항목',
        bingsu: '100% 코나 커피',
        shavedIce: '코나 블렌드 (10%)',
        kakigori: '일반 커피',
      },
      rows: [
        {
          feature: '원산지',
          bingsu: '빅아일랜드 코나 지역',
          shavedIce: '값싼 원두 + 코나 10%',
          kakigori: '세계 어디든',
        },
        {
          feature: '코나 함량',
          bingsu: '100%',
          shavedIce: '최소 10%까지',
          kakigori: '0%',
        },
        {
          feature: '수확',
          bingsu: '한 알씩 손으로 수확',
          shavedIce: '여러 산지 혼합',
          kakigori: '기계 수확이 많음',
        },
        {
          feature: '풍미',
          bingsu: '부드럽고 산뜻, 낮은 산미, 견과류 풍미',
          shavedIce: '희석되고 일관성 부족',
          kakigori: '제각각',
        },
        {
          feature: '가격',
          bingsu: '프리미엄',
          shavedIce: '중간',
          kakigori: '저렴',
        },
        {
          feature: '라벨 신뢰도',
          bingsu: '보호받는 원산지 명칭',
          shavedIce: '작은 글씨 주의',
          kakigori: '해당 없음',
        },
      ],
      note: '"코나 블렌드" 표시는 주의하세요. 하와이 주법상 진짜 코나를 단 10%만 넣어도 합법적으로 "코나 블렌드"라고 부를 수 있으며, 나머지 90%는 다른 지역의 훨씬 저렴한 원두인 경우가 많습니다. 진짜 코나의 맛을 원한다면 반드시 "100% 코나"를 고집하세요.',
    },
    types: {
      title: '코나 커피의 종류와 등급',
      subtitle: '최고 등급 원두부터 와이키키의 한 잔까지',
      items: [
        {
          name: '엑스트라 팬시 (Extra Fancy)',
          korean: '최고 등급',
          description: '코나 커피의 최고 등급으로, 알이 가장 크고 결점이 가장 적은 원두입니다. 엑스트라 팬시는 크기와 품질로 꼼꼼히 선별되어 가장 깨끗하고 정제된 한 잔을 만들어냅니다. 진정한 커피 애호가들이 찾는 등급이며, 가장 높은 가격에 거래됩니다.',
          icon: '🏆',
        },
        {
          name: '팬시 (Fancy)',
          korean: '프리미엄 등급',
          description: '엑스트라 팬시 바로 아래 등급으로, 원두는 약간 작지만 코나 특유의 아름다운 풍미는 그대로입니다. 조금 더 부담 없는 가격에 뛰어난 품질을 즐길 수 있어, 일상의 프리미엄 커피로 사랑받는 등급입니다.',
          icon: '⭐',
        },
        {
          name: '코나 피베리 (Peaberry)',
          korean: '피베리',
          description: '자연이 만든 희귀품. 보통 커피 체리 안에는 한쪽 면이 평평한 원두 두 알이 들어 있지만, 약 5%의 확률로 둥근 원두 한 알만 형성됩니다. 이것이 피베리입니다. 많은 로스터가 피베리를 더 달고 진한 풍미로 여겨, 특히 귀하게 취급합니다.',
          icon: '🫘',
        },
        {
          name: '에스테이트 / 싱글 오리진',
          korean: '싱글 오리진',
          description: '단일 코나 농장에서 재배·수확·가공되어 나무에서 잔까지 완전히 추적 가능한 커피입니다. 에스테이트 코나는 특정 화산 토양 한 곳의 개성을 그대로 맛볼 수 있는, 코나 커피의 매력을 가장 순수하게 담아낸 표현입니다.',
          icon: '🌱',
        },
        {
          name: '한 잔으로: 푸어오버·라떼·아포가토',
          korean: '한 잔으로',
          description: '대부분의 여행자가 코나를 경험하는 방식은 갓 내린 커피입니다. 깔끔한 코나 푸어오버는 부드럽고 낮은 산미를 돋보이게 하고, 코나 라떼는 우유로 부드럽게, 코나 아포가토는 뜨거운 에스프레소를 아이스크림에 부은 하와이식 디저트입니다. 코나 커피 메뉴에서 세 가지 모두 즐겨보세요.',
          icon: '☕',
        },
      ],
    },
    whyHawaii: {
      title: '코나 커피가 특별한 이유',
      points: [
        {
          title: '화산토와 완벽한 미기후',
          description: '코나 커피는 후알랄라이산과 마우나로아산 경사면의 미네랄이 풍부한 화산토에서 자랍니다. 맑은 아침, 나무에 그늘을 드리우는 구름 낀 오후, 부드러운 섬의 비가 다른 곳에서는 찾아보기 힘든 이상적인 미기후를 만듭니다. 이것이 코나의 부드럽고 균형 잡힌 풍미의 토대입니다.',
        },
        {
          title: '미국에서 유일무이한 커피 산지',
          description: '하와이는 미국에서 상업적으로 커피를 재배할 수 있는 유일한 주이며, 코나는 그중 가장 유명한 지역입니다. 즉 100% 코나는 수입이 아니라 자국 땅에서 재배·수확·로스팅되는 진정한 미국산 스페셜티 커피입니다. 이 점이 매력과 가격을 동시에 높입니다.',
        },
        {
          title: '손으로 수확하는 소규모 농장의 품질',
          description: '코나의 대부분은 작은 가족 농장에서 나오며, 잘 익은 체리를 몇 달에 걸쳐 한 알씩 손으로 땁니다. 이 정성스럽고 손이 많이 가는 작업은 비용이 크지만, 바로 그것이 진짜 코나 한 잔이 그토록 깨끗하고 한결같은 맛을 내는 이유입니다.',
        },
        {
          title: '한정된 공급 = 희소성과 가격',
          description: '코나 커피 벨트는 매우 작아서 진짜 코나는 매년 소량만 생산됩니다. 수요가 고정된 한정 공급을 크게 웃돌면 가격은 오르기 마련이죠. 이 희소성이 바로 100% 코나가 세계에서 가장 비싼 커피 중 하나인 핵심 이유입니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 코나 커피 마시는 곳',
      intro: '와이키키에서 진짜 하와이안 코나 커피를 찾고 계시다면, 코나커피도넛으로 오세요.',
      shop: {
        name: 'Kona Coffee Donut (코나커피도넛)',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키의 중심, 칼라카우아 애비뉴에 위치한 코나커피도넛은 진짜 하와이안 코나 커피를 제공합니다. 저희는 자부심을 갖고 호놀룰루 커피를 내리며, 갓 만든 도넛과 한국식 빙수와 함께 즐기실 수 있습니다. 부드러운 푸어오버, 크리미한 라떼, 코나 아포가토로, 해변에서 단 몇 걸음 거리에서 만나보세요.',
        highlights: [
          '진짜 하와이안 코나 커피를 매일 갓 내려서',
          '푸어오버, 라떼, 코나 아포가토로 제공',
          '와이키키 비치에서 도보 거리',
          '매일 영업 — 갓 만든 도넛과 빙수도 함께',
        ],
      },
      cta: '코나 커피 메뉴 보기',
    },
    howToEat: {
      title: '코나 커피 즐기는 법',
      subtitle: '한 잔을 200% 즐기는 팁',
      tips: [
        {
          title: '먼저 블랙으로 맛보기',
          description: '우유나 설탕을 넣기 전에, 코나를 먼저 블랙으로 한 모금 — 되도록 푸어오버로 마셔보세요. 낮은 산미와 부드럽고 고소한 단맛이 그대로 살아납니다. 블랙으로 맛보는 것이 진짜 코나 커피가 그 값어치를 하는 이유를 가장 잘 느끼는 방법입니다.',
        },
        {
          title: '"100% 코나"를 고집하기',
          description: '항상 라벨을 확인하세요. "코나 블렌드"는 코나가 단 10%일 수도 있으니, 진짜를 확실히 손에 넣으려면 "100% 코나" 표시를 찾으세요. 헷갈리면 물어보세요. 좋은 카페라면 무엇을 내리는지 자랑스럽게 알려줄 겁니다.',
        },
        {
          title: '아포가토나 라떼로 즐기기',
          description: '코나의 부드러운 풍미는 에스프레소 음료의 훌륭한 베이스가 됩니다. 코나 라떼는 크리미하고 균형 잡혀 있고, 코나 아포가토(뜨거운 에스프레소를 차가운 아이스크림에 부은 것)는 커피를 상큼한 하와이안 디저트로 변신시킵니다. 둘 다 따뜻한 와이키키 오후에 딱입니다.',
        },
        {
          title: '말라사다나 모찌 도넛과 함께',
          description: '코나의 고소하고 산미 낮은 풍미는 달콤한 것과 환상의 궁합입니다. 따뜻한 말라사다나 쫄깃한 모찌 도넛이 커피를 아름답게 받쳐줍니다. 친구들과 코나 한 잔을 즐기는, 하와이식 클래식 조합이죠.',
        },
      ],
    },
    faq: {
      title: '코나 커피에 대해 자주 묻는 질문',
      items: [
        {
          question: '코나 커피는 무엇이 특별한가요?',
          answer: '코나 커피가 특별한 것은 어디서 어떻게 자라는지에 있습니다. 후알랄라이산과 마우나로아산 화산 경사면의 작은 코나 지역에서만 나며, 비옥한 토양과 맑은 아침, 구름 낀 오후, 부드러운 비가 희귀한 미기후를 만듭니다. 작은 가족 농장의 정성스러운 손 수확과 어우러져, 다른 곳에서는 찾기 힘든 부드럽고 산뜻하며 산미가 낮은 한 잔이 탄생합니다.',
        },
        {
          question: '코나 커피는 왜 그렇게 비싼가요?',
          answer: '코나 커피가 비싼 이유는 공급이 적고 작업이 손이 많이 가기 때문입니다. 코나 커피 벨트는 아주 작은 재배 지역이라 매년 소량만 생산됩니다. 잘 익은 체리를 긴 수확기에 걸쳐 한 알씩 손으로 따고, 하와이의 인건비도 높습니다. 한정된 공급에 높은 수요, 그리고 손이 많이 가는 재배가 더해져 100% 코나의 가격은 세계 커피 중에서도 최고 수준에 이릅니다.',
        },
        {
          question: '100% 코나와 코나 블렌드의 차이는 무엇인가요?',
          answer: '100% 코나 커피는 코나 지역에서 자란 원두만을 담습니다. 반면 "코나 블렌드"는 하와이 주법상 진짜 코나를 단 10%만 넣어도 합법이며, 나머지 90%는 보통 훨씬 저렴한 다른 지역 원두입니다. 진짜 코나의 풍미와 경험을 원한다면 반드시 라벨의 "100% 코나"를 확인하세요.',
        },
        {
          question: '코나 커피는 어떤 맛인가요?',
          answer: '코나 커피는 부드럽고 산뜻하며 산미가 낮고 끝맛이 깨끗한 것으로 유명합니다. 많은 사람이 은은한 견과류, 흑설탕, 약간의 과일이나 초콜릿 풍미를 느낍니다. 균형이 좋고 쓰지 않아서 블랙으로도 마시기 편하며, 이것이 코나의 풍미를 가장 잘 즐기는 방법입니다.',
        },
        {
          question: '와이키키에서 진짜 코나 커피를 마실 수 있는 곳은 어디인가요?',
          answer: '와이키키 중심, 2142 Kalakaua Ave의 코나커피도넛에서 진짜 하와이안 코나 커피를 마실 수 있습니다. 저희는 호놀룰루 커피를 내려 푸어오버, 라떼, 코나 아포가토로 제공하며, 갓 만든 도넛과 빙수도 함께 즐기실 수 있습니다. 모두 와이키키 비치에서 도보 거리입니다.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 진짜 코나 커피를 즐기세요',
      text: '2142 Kalakaua Ave 코나커피도넛에서 정통 하와이안 코나 커피를, 갓 만든 도넛과 빙수와 함께 맛보세요.',
      menuButton: '코나 커피 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '코나 커피란?',
    },
  },
  zh: {
    hero: {
      title: '什么是科纳咖啡？',
      subtitle: '夏威夷传奇咖啡为何如此稀有昂贵',
      updated: '2026年6月更新',
      readTime: '阅读约8分钟',
    },
    definition: {
      title: '什么是科纳咖啡？',
      text: '<strong>科纳咖啡（Kona Coffee）</strong>是一种<strong>仅在夏威夷大岛上小小的科纳地区种植</strong>的优质<strong>阿拉比卡咖啡</strong>，产区位于<strong>华拉莱火山和冒纳罗亚火山</strong>的西坡。富含矿物质的火山土壤、温和的晨光、午后的云层和温暖的岛屿降雨，共同造就了世上罕见的独特微气候，孕育出<strong>顺滑、明亮、低酸</strong>且带有坚果与红糖风味的一杯咖啡。依照法律，只有在这片狭小区域种植的咖啡豆才能被称为<strong>"科纳（Kona）"</strong>——这正是真正的科纳咖啡如此稀有珍贵的原因。',
    },
    history: {
      title: '科纳咖啡的历史',
      subtitle: '从1828年的一株插枝到受保护的世界级产区',
      p1: '咖啡大约在<strong>1828年</strong>首次传入夏威夷，当时传教士塞缪尔·拉格尔斯将咖啡插枝带到了大岛的科纳地区。咖啡树在火山土壤和独特的山地气候中茁壮成长，最初的小小试验逐渐发展成世界上最受尊敬的咖啡产区之一。',
      p2: '咖啡在如今被称为<strong>"科纳咖啡带"</strong>的狭长地带上繁荣生长——沿着华拉莱火山和冒纳罗亚火山的山坡，绵延约20至30英里（32至48公里）。这条咖啡带处于绝佳的海拔，晴朗的清晨、多云的午后和稳定的降雨让咖啡樱桃缓慢而均匀地成熟，造就了科纳标志性的顺滑风味。',
      p3: '世世代代以来，科纳咖啡都种植在<strong>小型家庭农场</strong>中——其中许多由20世纪初的日本移民创立——成熟的咖啡樱桃至今仍是一颗一颗手工采摘。这些家庭挺过了全球咖啡市场的崩盘和劳动力短缺，在别处的大型种植园转向机械化时，依然守护着自己的土地和工艺。',
      p4: '如今，科纳咖啡已是<strong>受全球保护的优质产区</strong>。夏威夷法律严格规定哪些咖啡豆可以使用科纳之名，100%科纳的价格位居全球咖啡前列。它已成为夏威夷匠心的象征——一款消费者会指名寻找的稀有单一产区咖啡。',
    },
    comparison: {
      title: '100%科纳 vs 科纳混合 vs 普通咖啡',
      subtitle: '你买到的究竟是什么？',
      intro: '并非所有"科纳"咖啡都一样。标签可能具有误导性，下面就准确对比一下100%科纳、科纳混合和普通咖啡：',
      headers: {
        feature: '项目',
        bingsu: '100%科纳咖啡',
        shavedIce: '科纳混合 (10%)',
        kakigori: '普通咖啡',
      },
      rows: [
        {
          feature: '产地',
          bingsu: '大岛科纳地区',
          shavedIce: '廉价豆 + 10%科纳',
          kakigori: '世界各地',
        },
        {
          feature: '科纳含量',
          bingsu: '100%',
          shavedIce: '低至10%',
          kakigori: '0%',
        },
        {
          feature: '采摘',
          bingsu: '一颗一颗手工采摘',
          shavedIce: '多产地混合',
          kakigori: '多为机器采收',
        },
        {
          feature: '风味',
          bingsu: '顺滑、明亮、低酸、坚果香',
          shavedIce: '被稀释、不稳定',
          kakigori: '参差不齐',
        },
        {
          feature: '价格',
          bingsu: '高端',
          shavedIce: '中等',
          kakigori: '低',
        },
        {
          feature: '标签可信度',
          bingsu: '受保护的产地名称',
          shavedIce: '当心小字说明',
          kakigori: '不适用',
        },
      ],
      note: '请当心"科纳混合（Kona Blend）"标签——依夏威夷法律，它合法地最低只需含10%真正的科纳咖啡，其余90%往往是别处便宜得多的咖啡豆。若想体验真正的科纳，请务必坚持选择100%科纳。',
    },
    types: {
      title: '科纳咖啡的种类与等级',
      subtitle: '从顶级豆到你在威基基的那一杯',
      items: [
        {
          name: '特优级 (Extra Fancy)',
          korean: '顶级',
          description: '科纳咖啡的最高等级——颗粒最大、瑕疵最少的咖啡豆。特优级豆经过严格的大小与品质分级，能冲煮出最干净、最精致的一杯。这是资深咖啡爱好者追寻的等级，价格也最高。',
          icon: '🏆',
        },
        {
          name: '优级 (Fancy)',
          korean: '优质等级',
          description: '仅次于特优级，优级豆颗粒略小，但拥有同样美妙的科纳风味。它以稍微亲民的价格提供出色品质，是日常优质冲煮的人气之选。',
          icon: '⭐',
        },
        {
          name: '科纳圆豆 (Peaberry)',
          korean: '圆豆',
          description: '大自然造就的稀有品。通常一颗咖啡樱桃里有两颗一面平整的豆子，但约5%的情况下只会形成一颗圆形的豆——这就是圆豆。许多烘焙师认为圆豆风味更甜更浓郁，因此格外珍视。',
          icon: '🫘',
        },
        {
          name: '庄园 / 单一产区',
          korean: '单一产区',
          description: '在单一科纳农场种植、采摘和处理的咖啡，从树到杯全程可追溯。庄园科纳让你品尝某一块特定火山土地的个性——是科纳咖啡魅力最纯粹的呈现。',
          icon: '🌱',
        },
        {
          name: '在杯中：手冲、拿铁与阿芙佳朵',
          korean: '在杯中',
          description: '大多数游客体验科纳的方式是现煮咖啡。干净的科纳手冲彰显其顺滑、低酸的个性；科纳拿铁以牛奶让它更圆润；科纳阿芙佳朵则把热浓缩咖啡浇在冰淇淋上，成为夏威夷风味甜点。来我们的科纳咖啡菜单一次尝遍三种吧。',
          icon: '☕',
        },
      ],
    },
    whyHawaii: {
      title: '科纳咖啡为何如此特别',
      points: [
        {
          title: '火山土壤与完美微气候',
          description: '科纳咖啡生长在华拉莱火山和冒纳罗亚火山山坡富含矿物质的火山土壤中。晴朗的清晨、为咖啡树遮荫的多云午后，以及温柔的岛屿降雨，共同造就了几乎别处难寻的理想微气候——这正是科纳顺滑、均衡风味的根基。',
        },
        {
          title: '美国独一无二的咖啡产区',
          description: '夏威夷是美国唯一能商业化种植咖啡的州，而科纳是其中最著名的产区。这使得100%科纳成为真正的美国本土精品咖啡——在本土种植、手工采摘和烘焙，而非进口，这既增添了它的吸引力，也推高了价格。',
        },
        {
          title: '手工采摘的小农场品质',
          description: '大多数科纳来自小型家庭农场，成熟的咖啡樱桃在长达数月的采收期里仍由人工一颗一颗采摘。这种精细而费力的工作成本高昂——但这正是每一杯真正的科纳都如此干净、稳定的原因。',
        },
        {
          title: '供应有限 = 稀有与高价',
          description: '科纳咖啡带非常小，因此每年只能生产少量真正的科纳。当需求远超固定而有限的供应时，价格自然上涨。这种稀有性正是100%科纳跻身世界最昂贵咖啡之列的核心原因。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基哪里可以喝到科纳咖啡',
      intro: '如果你在威基基想喝正宗的夏威夷科纳咖啡，科纳咖啡甜甜圈是你的首选。',
      shop: {
        name: 'Kona Coffee Donut（科纳咖啡甜甜圈）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '位于威基基卡拉卡瓦大道中心地段，科纳咖啡甜甜圈供应正宗的夏威夷科纳咖啡——我们自豪地冲煮檀香山咖啡，并搭配新鲜甜甜圈和韩式刨冰。可选顺滑的手冲、奶香拿铁或科纳阿芙佳朵，就在距海滩几步之遥的地方享用。',
        highlights: [
          '正宗夏威夷科纳咖啡，每日现煮',
          '提供手冲、拿铁或科纳阿芙佳朵',
          '距威基基海滩步行可达',
          '每天营业——还有新鲜甜甜圈和刨冰',
        ],
      },
      cta: '查看科纳咖啡菜单',
    },
    howToEat: {
      title: '如何品味科纳咖啡',
      subtitle: '让每一杯都物尽其味',
      tips: [
        {
          title: '先喝黑咖啡',
          description: '在加牛奶或糖之前，先尝一口纯黑的科纳——最好是手冲。它的低酸度和顺滑、坚果般的甜味会自然绽放。喝黑咖啡是体会真正科纳咖啡为何物有所值的最佳方式。',
        },
        {
          title: '坚持选择"100%科纳"',
          description: '一定要查看标签。"科纳混合"可能只含10%科纳，所以请寻找"100%科纳"字样，确保买到真品。拿不准时就开口问——好的咖啡馆会自豪地告诉你他们冲的究竟是什么。',
        },
        {
          title: '试试阿芙佳朵或拿铁',
          description: '科纳顺滑的风味是浓缩咖啡饮品的绝佳基底。科纳拿铁奶香均衡，而科纳阿芙佳朵——把热浓缩咖啡浇在冰淇淋上——能把咖啡变成清爽的夏威夷甜点。两者都非常适合温暖的威基基午后。',
        },
        {
          title: '搭配马拉萨达或麻糬甜甜圈',
          description: '科纳坚果般的低酸风味与甜点是绝配。温热的马拉萨达或Q弹的麻糬甜甜圈能完美衬托咖啡——这是与朋友共享一杯科纳的经典夏威夷方式。',
        },
      ],
    },
    faq: {
      title: '关于科纳咖啡的常见问题',
      items: [
        {
          question: '科纳咖啡有什么特别之处？',
          answer: '科纳咖啡的特别之处在于它生长的地方和方式。它只来自华拉莱火山和冒纳罗亚火山火山斜坡上小小的科纳地区，那里肥沃的土壤、晴朗的清晨、多云的午后和温柔的降雨造就了罕见的微气候。再加上小型家庭农场精心的手工采摘，便孕育出别处难寻的顺滑、明亮、低酸的一杯咖啡。',
        },
        {
          question: '科纳咖啡为什么这么贵？',
          answer: '科纳咖啡之所以昂贵，是因为供应有限且工序繁重。科纳咖啡带是一个很小的种植区，每年只能生产少量。成熟的咖啡樱桃在漫长的采收期里一颗一颗手工采摘，而夏威夷的人工成本又高。有限的供应加上旺盛的需求和费力的耕作，共同把100%科纳的价格推到了全球咖啡的前列。',
        },
        {
          question: '100%科纳和科纳混合有什么区别？',
          answer: '100%科纳咖啡只含产自科纳地区的咖啡豆。而"科纳混合"依夏威夷法律最低只需含10%真正的科纳，其余90%通常是便宜得多的其他产地咖啡豆。若想要真正的科纳风味与体验，请务必在标签上寻找"100%科纳"字样。',
        },
        {
          question: '科纳咖啡是什么味道？',
          answer: '科纳咖啡以顺滑、明亮、低酸和干净的余韵而闻名。许多人能尝到淡淡的坚果、红糖以及一丝水果或巧克力的风味。由于它均衡且不苦，科纳很适合纯饮黑咖啡——这也是品味其风味的最佳方式。',
        },
        {
          question: '在威基基哪里能喝到正宗的科纳咖啡？',
          answer: '你可以在威基基中心地段、2142 Kalakaua Ave的科纳咖啡甜甜圈喝到正宗的夏威夷科纳咖啡。我们冲煮檀香山咖啡，提供手冲、拿铁或科纳阿芙佳朵，并搭配新鲜甜甜圈和刨冰——都在威基基海滩步行可达的范围内。',
        },
      ],
    },
    cta: {
      title: '来威基基品尝正宗科纳咖啡',
      text: '前往2142 Kalakaua Ave的科纳咖啡甜甜圈，品尝正宗夏威夷科纳咖啡，搭配新鲜甜甜圈和刨冰。',
      menuButton: '查看科纳咖啡菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '什么是科纳咖啡？',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What is Kona Coffee? Why Hawaii\'s Legendary Coffee Is So Rare & Expensive',
  description: 'Learn everything about Kona coffee — what makes it special, why it\'s so expensive, 100% Kona vs Kona Blend, how it tastes, and where to drink real Kona coffee in Waikiki.',
  image: 'https://www.konacoffeedonut.com/images/blog/what-is-kona-coffee.jpeg',
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
  datePublished: '2026-06-13',
  dateModified: '2026-06-13',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/en/blog/what-is-kona-coffee',
  },
  keywords: 'kona coffee, what is kona coffee, why is kona coffee expensive, 100% kona coffee, kona blend, kona coffee waikiki, hawaiian coffee',
  wordCount: 1300,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes Kona coffee special?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona coffee is special because of where and how it grows. It comes only from the small Kona districts on the volcanic slopes of Hualālai and Mauna Loa, where rich soil, sunny mornings, cloudy afternoons, and gentle rain create a rare microclimate. Combined with careful hand-picking on small family farms, this produces a smooth, bright, low-acid cup that\'s hard to find anywhere else.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is Kona coffee so expensive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona coffee is expensive because supply is small and the work is intensive. The Kona Coffee Belt is a tiny growing region, so only a limited amount is produced each year. The ripe cherries are hand-picked one at a time over a long harvest, and labor in Hawaii is costly. Limited supply plus high demand and labor-intensive farming all push the price of 100% Kona to among the highest of any coffee in the world.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between 100% Kona and Kona Blend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '100% Kona coffee contains only beans grown in the Kona district. A "Kona Blend," by Hawaii law, can legally contain as little as 10% real Kona coffee — the other 90% is usually much cheaper beans from elsewhere. If you want the true Kona flavor and experience, always look for "100% Kona" on the label.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Kona coffee taste like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona coffee is known for being smooth, bright, and low in acidity, with a clean finish. Many people taste gentle notes of nuts, brown sugar, and a hint of fruit or chocolate. Because it\'s so balanced and not bitter, Kona is easy to enjoy black — which is the best way to appreciate its flavor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I drink real Kona coffee in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can drink real Hawaiian Kona coffee at Kona Coffee Donut, 2142 Kalakaua Ave in the heart of Waikiki. We pour Honolulu Coffee and serve it as a pour-over, latte, or Kona affogato, alongside fresh donuts and bingsu — all within walking distance of Waikiki Beach.',
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

export default function WhatIsKonaCoffeePage() {
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
          src="/images/blog/what-is-kona-coffee.jpeg"
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

        {/* Types of Kona Coffee */}
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

        {/* Why Kona Coffee is Special */}
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

        {/* Where to Get Kona Coffee in Waikiki */}
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

        {/* How to Enjoy Kona Coffee */}
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
              href={`/${locale}/blog/kona-coffee-guide`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 font-semibold transition-colors"
            >
              → Kona Coffee Guide
            </Link>
            <Link
              href={`/${locale}/blog/where-to-try-kona-coffee-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Where to Try Kona Coffee in Waikiki
            </Link>
            <Link
              href={`/${locale}/blog/kona-affogato-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Kona Affogato in Waikiki
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
