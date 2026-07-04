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
      title: 'Bingsu Origin & History',
      subtitle: 'Where Korean Shaved Ice Came From — From Joseon Royal Ice to a National Dessert',
      updated: 'Updated June 2026',
      readTime: '9 min read',
    },
    definition: {
      title: 'Where Did Bingsu Come From?',
      text: '<strong>Bingsu (빙수) originated in Korea.</strong> The name literally means <strong>"ice water" (氷水), or finely shaved ice</strong>. Its original form is <strong>patbingsu (팥빙수)</strong> — shaved ice topped with sweet red beans. Bingsu evolved from a <strong>royal Joseon-era ice luxury</strong>, once reserved for kings, into <strong>Korea\'s national summer dessert</strong> enjoyed by millions today and now served worldwide, including Waikiki.',
    },
    history: {
      title: 'The History of Bingsu',
      subtitle: 'From Joseon Dynasty Ice Houses to a Global K-Dessert',
      p1: 'Bingsu\'s story begins in Korea\'s Joseon Dynasty (1392–1897), when ice was a royal luxury — not a dessert anyone could buy. The court operated dedicated ice houses called <strong>빙고 (binggo)</strong>, built along the Han River to harvest natural block ice in winter and preserve it through the heat of summer. Two of the most important, <strong>Seobinggo (서빙고)</strong> and <strong>Dongbinggo (동빙고)</strong>, were so central to royal life that their names survive today as Seoul neighborhood and place names. Receiving a share of this ice was a privilege handed out by the king himself.',
      p2: 'The earliest true bingsu was simple: shaved ice topped with sweet red bean paste (pat, 팥). That humble pairing gave the dessert its enduring name, <strong>patbingsu (팥빙수)</strong> — literally "red bean shaved ice." As ice slowly became more accessible beyond the palace, patbingsu spread from a royal indulgence toward something ordinary people could finally taste.',
      p3: 'During the Japanese colonial period (1910–1945), hand-cranked ice shavers arrived and patbingsu moved onto the streets. Vendors sold coarsely shaved ice topped with red bean and chewy rice cake (tteok) from stalls and small shops, and through the mid-20th century bingsu became Korea\'s familiar, affordable summer treat — a cooling reward on a hot afternoon.',
      p4: 'The real transformation came in the 1980s and 1990s. Korean cafés swapped coarse water ice for ultra-fine <strong>milk snow</strong> and piled on premium toppings — fresh fruit, injeolmi (soybean-powder rice cake), Oreo, cheesecake. Franchises like <strong>Sulbing (설빙)</strong> turned bingsu into a year-round café phenomenon, and the global Korean Wave (Hallyu) carried it far beyond Korea — to Japan, China, Southeast Asia, and across the Pacific to Hawaii and Waikiki, where it thrives today.',
    },
    comparison: {
      title: 'How Bingsu Evolved Over Time',
      subtitle: 'Six Centuries, One Dessert',
      intro: 'Bingsu didn\'t appear overnight. It transformed across centuries — from a guarded royal luxury to the milk-snow dessert you can order in Waikiki today. Here\'s how it changed:',
      headers: {
        feature: 'Era',
        bingsu: 'What bingsu was',
        shavedIce: 'Ice type',
        kakigori: 'Toppings',
      },
      rows: [
        {
          feature: 'Joseon Dynasty',
          bingsu: 'A royal ice treat for kings and nobles',
          shavedIce: 'Natural block ice from binggo',
          kakigori: 'Minimal — ice as the luxury itself',
        },
        {
          feature: 'Early 1900s',
          bingsu: 'Patbingsu sold as street food',
          shavedIce: 'Coarsely hand-shaved ice',
          kakigori: 'Sweet red bean (pat)',
        },
        {
          feature: 'Mid-1900s',
          bingsu: 'A popular, affordable summer treat',
          shavedIce: 'Machine-shaved ice',
          kakigori: 'Red bean + chewy rice cake (tteok)',
        },
        {
          feature: '1980s–90s',
          bingsu: 'The café bingsu boom begins',
          shavedIce: 'Fine milk ice',
          kakigori: 'Fruit, injeolmi, Oreo, condensed milk',
        },
        {
          feature: '2010s',
          bingsu: 'Premium franchise dessert',
          shavedIce: 'Ultra-fine milk snow',
          kakigori: 'Endless — fruit, matcha, cheesecake & more',
        },
        {
          feature: 'Today',
          bingsu: 'A global K-dessert, including Waikiki',
          shavedIce: 'Milk snow',
          kakigori: 'Creative, seasonal & tropical',
        },
      ],
      note: 'The through-line is the ice itself: bingsu went from precious natural block ice to fluffy milk snow, while the toppings grew richer at every step — yet patbingsu, the original red-bean form, has never gone out of style.',
    },
    types: {
      title: 'Classic Bingsu Types Born From This History',
      subtitle: 'The Varieties That Grew Out of Patbingsu',
      items: [
        {
          name: 'Patbingsu (The Original Red Bean)',
          korean: '팥빙수',
          description: 'The one that started it all. Finely shaved milk ice crowned with sweet red beans (pat), chewy rice cake (tteok), and a drizzle of condensed milk. Every other bingsu is a descendant of this Joseon-rooted classic — comforting, nostalgic, and still the benchmark.',
          icon: '🫘',
        },
        {
          name: 'Injeolmi Bingsu',
          korean: '인절미빙수',
          description: 'Named after injeolmi, the soft rice cake dusted in roasted soybean powder (konggomul). Cubes of chewy injeolmi, a nutty blanket of soybean powder, and condensed milk turn shaved ice into something earthy and deeply traditional — a modern café favorite with old-Korea roots.',
          icon: '🍡',
        },
        {
          name: 'Fruit / Mango Bingsu',
          korean: '과일빙수',
          description: 'The fresh, summery evolution — seasonal fruit piled high on milk snow. Mango bingsu is the global star, joined by strawberry, watermelon, and mixed tropical fruit. This is the bingsu that made the dessert Instagram-famous worldwide.',
          icon: '🥭',
        },
        {
          name: 'Oreo / Chocolate Bingsu',
          korean: '오레오빙수 / 초코빙수',
          description: 'The café-era indulgence: crushed Oreos, chocolate syrup, brownie pieces, and chocolate ice cream layered over milk ice. A child of the 1990s topping revolution, it remains a favorite of younger generations who love rich, decadent flavor.',
          icon: '🍫',
        },
        {
          name: 'Matcha (Green Tea) Bingsu',
          korean: '녹차빙수',
          description: 'A pan-Asian fusion that exploded with the premium café wave. Green tea powder is folded into or dusted over the snow, balanced with red bean and mochi. Its gentle bitterness cuts the sweetness — proof of how far bingsu has traveled from its red-bean origins.',
          icon: '🍵',
        },
      ],
    },
    whyHawaii: {
      title: 'From Joseon Ice Houses to Waikiki',
      points: [
        {
          title: 'Centuries of Korean Heritage in Every Bowl',
          description: 'When you eat bingsu in Waikiki, you\'re tasting six centuries of Korean history — from royal binggo ice houses to street-stall patbingsu to the milk-snow dessert in front of you. Few desserts carry this much story in a single bowl.',
        },
        {
          title: 'The Hallyu Wave Brought Bingsu Worldwide',
          description: 'The global Korean Wave (Hallyu) — K-pop, K-dramas, K-food — carried bingsu out of Korea and across the Pacific. Visitors from Japan, China, and across Asia arrive in Hawaii already knowing and craving it, making Waikiki a natural home for authentic bingsu.',
        },
        {
          title: 'Hawaii\'s Own Shave-Ice Love Makes It a Natural Fit',
          description: 'Hawaii already treasures shave ice as a local icon, so the islands instantly understand bingsu. Korea\'s milk-snow version simply elevates a beloved local concept with creamier ice, premium toppings, and a shareable bowl — a perfect cultural match.',
        },
        {
          title: 'Try Authentic Bingsu Fresh in Waikiki',
          description: 'History tastes best in person. You don\'t have to fly to Seoul to experience the real thing — authentic Korean bingsu, made with fine milk ice and fresh toppings, is waiting just minutes from Waikiki Beach.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Taste This History in Waikiki',
      intro: 'You can taste the end of this 600-year story right in Waikiki — at Kona Coffee Donut?.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'On Kalākaua Avenue in the heart of Waikiki, Kona Coffee Donut? serves authentic Korean bingsu alongside 100% Kona coffee. We pair the dessert\'s centuries of Korean heritage with the best of Hawaii — fine milk snow, fresh toppings, and rich island coffee in one stop.',
        highlights: [
          'Authentic Korean bingsu, from classic patbingsu to fruit',
          'Paired with 100% Kona coffee — Hawaii meets Korea',
          'About 5 minutes from Waikiki Beach',
          'Open daily 7AM–9PM — perfect any time of day',
        ],
      },
      cta: 'See Our Bingsu Menu',
    },
    howToEat: {
      title: 'How to Enjoy Authentic Bingsu',
      subtitle: 'Taste It the Way Koreans Have for Generations',
      tips: [
        {
          title: 'Start With Classic Patbingsu',
          description: 'To understand bingsu\'s history, begin where it began. Classic patbingsu — milk snow, sweet red bean, chewy rice cake, condensed milk — is the original blueprint every other flavor is built on. Try it first, then branch out.',
        },
        {
          title: 'Eat It Before It Melts',
          description: 'Fine milk snow starts melting the moment it\'s served. Snap your photo fast, then dig in while the ice is still fluffy and cloud-like. The texture — not just the toppings — is the whole point.',
        },
        {
          title: 'Mix the Toppings In',
          description: 'Don\'t eat straight down from the top. Gently fold the red bean, fruit, and condensed milk through the ice so every spoonful is balanced. The flavors were always meant to come together, not be eaten in layers.',
        },
        {
          title: 'Share It — and Pair It With Kona Coffee',
          description: 'Bingsu has always been a shared dessert in Korea; one big bowl is made for 2–3 people and a few spoons. In Waikiki, pair that shared bowl with a cup of 100% Kona coffee for the perfect Hawaii-meets-Korea finish.',
        },
      ],
    },
    faq: {
      title: 'Bingsu Origin & History FAQ',
      items: [
        {
          question: 'Where did bingsu come from?',
          answer: 'Bingsu came from Korea. It originated during the Joseon Dynasty (1392–1897), when ice harvested and stored in royal ice houses called binggo was a luxury reserved for kings and nobility. Over centuries it evolved from that royal ice treat into patbingsu and, eventually, the modern milk-snow dessert enjoyed worldwide today.',
        },
        {
          question: 'What does "bingsu" mean?',
          answer: 'The word bingsu (빙수, 氷水) literally means "ice water" — in practice, finely shaved or crushed ice. The original and most famous version is patbingsu (팥빙수), where "pat" (팥) means red bean, so patbingsu translates to "red bean shaved ice."',
        },
        {
          question: 'Who invented bingsu and how old is it?',
          answer: 'Bingsu wasn\'t invented by a single person — it evolved gradually in Korea over centuries. Its roots reach back to the Joseon Dynasty, more than 600 years ago, when ice was a royal luxury. Street-style patbingsu spread in the early 1900s, and the modern milk-snow bingsu we know today took shape in the café boom of the 1980s–1990s.',
        },
        {
          question: 'What was the original bingsu?',
          answer: 'The original bingsu was patbingsu (팥빙수): shaved ice topped simply with sweet red bean paste. Early versions used coarsely shaved natural ice and little else. Toppings like rice cake, fruit, and condensed milk were added later, but red-bean patbingsu remains the classic, foundational form.',
        },
        {
          question: 'Where can I try authentic bingsu in Waikiki?',
          answer: 'You can try authentic Korean bingsu at Kona Coffee Donut?, located at 2142 Kalakaua Ave in the heart of Waikiki — about 5 minutes from Waikiki Beach and open daily 7AM–9PM. We serve real Korean bingsu alongside 100% Kona coffee, so you can taste the end of bingsu\'s 600-year history paired with the best of Hawaii.',
        },
      ],
    },
    cta: {
      title: 'Taste 600 Years of History in Waikiki',
      text: 'Visit Kona Coffee Donut? at 2142 Kalakaua Ave and experience authentic Korean bingsu — the dessert that traveled from Joseon ice houses to Waikiki — paired with 100% Kona coffee.',
      menuButton: 'View Bingsu Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'Bingsu Origin & History',
    },
  },
  ja: {
    hero: {
      title: 'ビンスの起源と歴史',
      subtitle: '韓国かき氷はどこで生まれた？朝鮮王朝の王室の氷から国民的デザートへ',
      updated: '2026年6月更新',
      readTime: '9分で読める',
    },
    definition: {
      title: 'ビンスはどこで生まれた？',
      text: '<strong>ビンス（빙수）は韓国で生まれました。</strong>その名は文字通り<strong>「氷水（氷を細かく削ったもの）」</strong>を意味します。最初の形は<strong>パッビンス（팥빙수）</strong>、削った氷に甘いあずきをのせたものです。ビンスは<strong>かつて王だけが口にできた朝鮮王朝時代の贅沢な氷</strong>から、<strong>韓国の国民的な夏のデザート</strong>へと進化し、今では世界中、そしてワイキキでも楽しめるようになりました。',
    },
    history: {
      title: 'ビンスの歴史',
      subtitle: '朝鮮王朝の氷庫から世界のK-デザートへ',
      p1: 'ビンスの物語は、朝鮮王朝時代（1392〜1897年）に始まります。当時、氷は誰でも買えるデザートではなく、王室の贅沢品でした。宮廷は<strong>「氷庫（빙고・ビンゴ）」</strong>と呼ばれる専用の氷貯蔵庫を漢江沿いに設け、冬に天然の塊氷を採取し、夏の暑さの中まで保存していました。中でも重要だった<strong>西氷庫（서빙고・ソビンゴ）</strong>と<strong>東氷庫（동빙고・トンビンゴ）</strong>は王室の生活に欠かせず、その名は今もソウルの地名として残っています。この氷の分配を受けることは、王自らが与える特権でした。',
      p2: '最初の本当のビンスはシンプルでした。削った氷に甘いあずき（パッ・팥）をのせただけ。この素朴な組み合わせが、今に続く名前<strong>パッビンス（팥빙수）</strong>、文字通り「あずきのかき氷」を生みました。氷が宮廷の外へと少しずつ広まるにつれ、パッビンスは王室の贅沢品から、庶民もようやく味わえるものへと変わっていきました。',
      p3: '日本統治時代（1910〜1945年）には手回しのかき氷器が伝わり、パッビンスは街へと出ていきました。屋台や小さな店で、粗く削った氷にあずきともちもちの餅（トッ）をのせて売られ、20世紀中頃にはビンスは韓国の身近で手頃な夏の味、暑い午後のごほうびとなりました。',
      p4: '本当の変革は1980〜90年代に訪れます。韓国のカフェは粗い水の氷を極細の<strong>ミルク雪氷</strong>に変え、新鮮なフルーツ、インジョルミ（きな粉餅）、オレオ、チーズケーキなどのプレミアムなトッピングを重ねました。<strong>ソルビン（설빙）</strong>のようなチェーンがビンスを一年中楽しめるカフェ文化へと押し上げ、韓流（ハリュ）が韓国の外、日本、中国、東南アジア、そして太平洋を越えてハワイ・ワイキキまで運び、今も愛され続けています。',
    },
    comparison: {
      title: 'ビンスはどう進化してきたか',
      subtitle: '六世紀、一つのデザート',
      intro: 'ビンスは一夜にして生まれたものではありません。守られた王室の贅沢品から、今日ワイキキで注文できるミルク雪氷のデザートまで、何世紀もかけて変化してきました。その歩みを見てみましょう：',
      headers: {
        feature: '時代',
        bingsu: 'ビンスとは',
        shavedIce: '氷の種類',
        kakigori: 'トッピング',
      },
      rows: [
        {
          feature: '朝鮮王朝時代',
          bingsu: '王や貴族のための王室の氷菓',
          shavedIce: '氷庫の天然塊氷',
          kakigori: 'ほぼなし — 氷そのものが贅沢',
        },
        {
          feature: '1900年代初頭',
          bingsu: '屋台で売られるパッビンス',
          shavedIce: '手で粗く削った氷',
          kakigori: '甘いあずき（パッ）',
        },
        {
          feature: '1900年代半ば',
          bingsu: '人気の手頃な夏の味',
          shavedIce: '機械で削った氷',
          kakigori: 'あずき＋もちもちの餅（トッ）',
        },
        {
          feature: '1980〜90年代',
          bingsu: 'カフェビンスブームの始まり',
          shavedIce: '細かいミルク氷',
          kakigori: 'フルーツ、インジョルミ、オレオ、練乳',
        },
        {
          feature: '2010年代',
          bingsu: 'プレミアムなチェーンのデザート',
          shavedIce: '極細のミルク雪氷',
          kakigori: '無限 — フルーツ、抹茶、チーズケーキ他',
        },
        {
          feature: '現在',
          bingsu: 'ワイキキも含む世界のK-デザート',
          shavedIce: 'ミルク雪氷',
          kakigori: '創造的・季節・トロピカル',
        },
      ],
      note: '一貫しているのは氷そのものです。ビンスは貴重な天然塊氷からふわふわのミルク雪氷へと変わり、トッピングは段階ごとに豊かになりました。それでも原点であるあずきのパッビンスは、今も色あせることがありません。',
    },
    types: {
      title: 'この歴史から生まれた定番ビンス',
      subtitle: 'パッビンスから広がった種類たち',
      items: [
        {
          name: 'パッビンス（元祖あずき）',
          korean: '팥빙수',
          description: 'すべての始まり。細かく削ったミルク氷に甘いあずき（パッ）、もちもちの餅（トッ）、練乳をかけたもの。ほかのビンスはすべて、この朝鮮王朝にルーツを持つ定番の子孫です。懐かしく心温まる、今も基準となる一杯。',
          icon: '🫘',
        },
        {
          name: 'インジョルミビンス',
          korean: '인절미빙수',
          description: 'きな粉（コンゴムル）をまぶした柔らかい餅「インジョルミ」にちなんだ名前。もちもちのインジョルミ、香ばしいきな粉、練乳が、かき氷を素朴で伝統的な味に変えます。古い韓国にルーツを持つ、現代カフェの人気メニュー。',
          icon: '🍡',
        },
        {
          name: 'フルーツ / マンゴービンス',
          korean: '과일빙수',
          description: '爽やかで夏らしい進化形。季節のフルーツをミルク雪氷の上に山盛りに。マンゴービンスが世界的なスターで、イチゴ、スイカ、ミックストロピカルフルーツも人気。このビンスがデザートを世界中でインスタ映えの代名詞にしました。',
          icon: '🥭',
        },
        {
          name: 'オレオ / チョコビンス',
          korean: '오레오빙수 / 초코빙수',
          description: 'カフェ時代の贅沢。砕いたオレオ、チョコシロップ、ブラウニー、チョコアイスをミルク氷に重ねます。1990年代のトッピング革命の申し子で、リッチで濃厚な味を愛する若い世代に今も大人気。',
          icon: '🍫',
        },
        {
          name: '抹茶（緑茶）ビンス',
          korean: '녹차빙수',
          description: 'プレミアムカフェの波とともに広がった汎アジアの融合。抹茶パウダーを雪氷に混ぜるか振りかけ、あずきや白玉と合わせます。ほのかな苦みが甘さを引き締め、あずきの原点からビンスがどれほど旅をしてきたかを物語ります。',
          icon: '🍵',
        },
      ],
    },
    whyHawaii: {
      title: '朝鮮王朝の氷庫からワイキキへ',
      points: [
        {
          title: '一杯に込められた何世紀もの韓国の歴史',
          description: 'ワイキキでビンスを食べるとき、あなたは六世紀にわたる韓国の歴史を味わっています。王室の氷庫から屋台のパッビンス、そして目の前のミルク雪氷のデザートまで。これほどの物語を一杯に宿すデザートはそうありません。',
        },
        {
          title: '韓流がビンスを世界へ運んだ',
          description: 'K-pop、K-ドラマ、K-フードといった世界的な韓流（ハリュ）が、ビンスを韓国の外、太平洋を越えて運びました。日本、中国、アジア各国からの旅行者はすでにビンスを知り、求めてハワイにやって来ます。だからこそワイキキは本格ビンスにぴったりの場所なのです。',
        },
        {
          title: 'シェイブアイスを愛するハワイにこそ似合う',
          description: 'ハワイはすでにシェイブアイスを地元の象徴として大切にしているので、ビンスをすぐに理解します。韓国のミルク雪氷版は、よりクリーミーな氷、プレミアムなトッピング、シェアできる器で、愛される地元の概念をさらに格上げ。文化的にも完璧な相性です。',
        },
        {
          title: 'ワイキキで本場のビンスを味わおう',
          description: '歴史は実際に味わうのが一番。本物を体験するためにソウルまで飛ぶ必要はありません。細かいミルク氷と新鮮なトッピングで作る本格韓国ビンスが、ワイキキビーチからわずか数分のところで待っています。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキでこの歴史を味わうなら',
      intro: '600年の物語の最後を、ワイキキで味わえます — Kona Coffee Donut? で。',
      shop: {
        name: 'Kona Coffee Donut?（コナコーヒードーナツ）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心、カラカウア通りにあるKona Coffee Donut? は、本格韓国ビンスと100%コナコーヒーを提供します。何世紀もの韓国の伝統と、ハワイ最高の味を一度に。細かいミルク雪氷、新鮮なトッピング、芳醇な島のコーヒーをひとつのお店で楽しめます。',
        highlights: [
          '定番パッビンスからフルーツまで本格韓国ビンス',
          '100%コナコーヒーとのペアリング — ハワイと韓国の出会い',
          'ワイキキビーチから約5分',
          '毎日7時〜21時営業 — いつでも最適',
        ],
      },
      cta: 'ビンスメニューを見る',
    },
    howToEat: {
      title: '本場ビンスの楽しみ方',
      subtitle: '韓国で何世代も受け継がれてきた味わい方',
      tips: [
        {
          title: 'まずは定番パッビンスから',
          description: 'ビンスの歴史を知るなら、始まりの場所から。定番パッビンス（ミルク雪氷、甘いあずき、もちもちの餅、練乳）は、ほかのすべての味の原型です。まずはこれを試し、それから広げていきましょう。',
        },
        {
          title: '溶ける前に食べよう',
          description: '細かいミルク雪氷は提供された瞬間から溶け始めます。素早く写真を撮ったら、氷がまだふわふわで雲のような状態のうちにいただきましょう。トッピングだけでなく、この食感こそが肝心です。',
        },
        {
          title: 'トッピングを混ぜ込もう',
          description: '上から順に食べないで。あずき、フルーツ、練乳を氷に優しく混ぜ込み、一口ごとにバランスよく。これらの味は層で食べるのではなく、ひとつに溶け合うように作られています。',
        },
        {
          title: 'シェアして、コナコーヒーと一緒に',
          description: '韓国でビンスはいつもシェアするデザート。大きな器ひとつを2〜3人で、スプーンを持ち寄って楽しみます。ワイキキでは、その一杯に100%コナコーヒーを添えれば、ハワイと韓国が出会う完璧な締めくくりに。',
        },
      ],
    },
    faq: {
      title: 'ビンスの起源と歴史 よくある質問',
      items: [
        {
          question: 'ビンスはどこで生まれましたか？',
          answer: 'ビンスは韓国で生まれました。朝鮮王朝時代（1392〜1897年）に起源を持ち、当時は氷庫（빙고）と呼ばれる王室の貯蔵庫で採取・保存された氷が、王や貴族だけの贅沢品でした。何世紀もかけて、その王室の氷菓がパッビンスへ、そして今日世界中で楽しまれる現代のミルク雪氷デザートへと進化しました。',
        },
        {
          question: '「ビンス」とはどういう意味ですか？',
          answer: 'ビンス（빙수・氷水）は文字通り「氷水」、つまり細かく削った氷を意味します。最も有名な原型はパッビンス（팥빙수）で、「パッ（팥）」はあずきを意味するため、パッビンスは「あずきのかき氷」という意味になります。',
        },
        {
          question: '誰がビンスを発明し、どのくらい古いのですか？',
          answer: 'ビンスは特定の誰かが発明したものではなく、韓国で何世紀もかけて少しずつ進化しました。そのルーツは600年以上前の朝鮮王朝時代、氷が王室の贅沢品だった頃にさかのぼります。屋台のパッビンスが1900年代初頭に広まり、今日知られる現代のミルク雪氷ビンスは1980〜90年代のカフェブームで形づくられました。',
        },
        {
          question: '元祖のビンスはどんなものでしたか？',
          answer: '元祖のビンスはパッビンス（팥빙수）で、削った氷に甘いあずきをのせただけのシンプルなものでした。初期は粗く削った天然氷が使われ、ほかにほとんど何も加えられませんでした。餅、フルーツ、練乳などは後から加わりましたが、あずきのパッビンスは今も定番で原点となる形です。',
        },
        {
          question: 'ワイキキで本場のビンスはどこで食べられますか？',
          answer: 'ワイキキの中心、2142 Kalakaua Ave にある Kona Coffee Donut? で本格韓国ビンスを味わえます。ワイキキビーチから約5分、毎日7時〜21時営業。本物の韓国ビンスと100%コナコーヒーを提供しているので、600年のビンスの歴史の最後を、ハワイ最高の味と一緒に楽しめます。',
        },
      ],
    },
    cta: {
      title: 'ワイキキで600年の歴史を味わおう',
      text: '2142 Kalakaua Ave の Kona Coffee Donut? で、朝鮮王朝の氷庫からワイキキへと旅してきたデザート、本格韓国ビンスを100%コナコーヒーとともに体験してください。',
      menuButton: 'ビンスメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'ビンスの起源と歴史',
    },
  },
  ko: {
    hero: {
      title: '빙수의 기원과 역사',
      subtitle: '한국 빙수는 어디서 시작됐나 — 조선 왕실의 얼음에서 국민 디저트까지',
      updated: '2026년 6월 업데이트',
      readTime: '9분 소요',
    },
    definition: {
      title: '빙수는 어디서 시작됐을까?',
      text: '<strong>빙수(氷水)는 한국에서 시작됐습니다.</strong> 그 이름은 말 그대로 <strong>"얼음물", 즉 곱게 간 얼음</strong>을 뜻합니다. 가장 처음의 형태는 <strong>팥빙수(팥+氷水)</strong>, 간 얼음 위에 달콤한 팥을 올린 것입니다. 빙수는 <strong>한때 임금만 맛볼 수 있던 조선시대의 귀한 얼음</strong>에서 <strong>대한민국 국민 여름 디저트</strong>로 발전했고, 오늘날 전 세계, 그리고 와이키키에서도 즐길 수 있게 되었습니다.',
    },
    history: {
      title: '빙수의 역사',
      subtitle: '조선시대 빙고에서 세계적인 K-디저트까지',
      p1: '빙수의 이야기는 조선시대(1392~1897)에서 시작됩니다. 당시 얼음은 누구나 사 먹을 수 있는 디저트가 아니라 왕실의 귀한 사치품이었습니다. 조정은 <strong>「빙고(氷庫)」</strong>라 불리는 전용 얼음 저장고를 한강 변에 두어, 겨울에 천연 얼음을 채취해 한여름 더위까지 보관했습니다. 그중에서도 가장 중요했던 <strong>서빙고(西氷庫)</strong>와 <strong>동빙고(東氷庫)</strong>는 왕실 생활의 중심이어서, 그 이름이 지금도 서울의 동네·지명으로 남아 있습니다. 이 얼음을 나누어 받는 것은 임금이 직접 베푸는 특권이었습니다.',
      p2: '초기의 진짜 빙수는 단순했습니다. 간 얼음 위에 달콤한 팥(팥)을 올린 것이 전부였죠. 이 소박한 조합에서 오늘날까지 이어지는 이름 <strong>팥빙수(팥+氷水)</strong>, 말 그대로 "팥을 올린 얼음"이 탄생했습니다. 얼음이 궁궐 밖으로 조금씩 퍼지면서, 팥빙수는 왕실의 사치품에서 마침내 백성도 맛볼 수 있는 음식으로 바뀌어 갔습니다.',
      p3: '일제강점기(1910~1945)에는 손으로 돌리는 빙삭기가 들어오면서 팥빙수가 거리로 나왔습니다. 가판대와 작은 가게에서 굵게 간 얼음에 팥과 쫄깃한 떡을 올려 팔았고, 20세기 중반에 이르러 빙수는 한국의 친숙하고 저렴한 여름 별미, 더운 오후의 보상이 되었습니다.',
      p4: '진정한 변화는 1980~90년대에 찾아왔습니다. 한국 카페들은 투박한 물 얼음을 극세 <strong>우유 눈꽃</strong>으로 바꾸고, 신선한 과일, 인절미, 오레오, 치즈케이크 같은 프리미엄 토핑을 듬뿍 올렸습니다. <strong>설빙(설빙)</strong> 같은 프랜차이즈는 빙수를 사계절 즐기는 카페 문화로 끌어올렸고, 세계적인 한류(韓流)는 빙수를 한국 밖 일본·중국·동남아시아, 그리고 태평양 건너 하와이와 와이키키까지 실어 날라 오늘도 사랑받고 있습니다.',
    },
    comparison: {
      title: '빙수는 어떻게 변해왔나',
      subtitle: '여섯 세기, 하나의 디저트',
      intro: '빙수는 하루아침에 생긴 것이 아닙니다. 굳게 지켜진 왕실의 사치품에서 오늘날 와이키키에서 주문할 수 있는 우유 눈꽃 디저트까지, 수백 년에 걸쳐 변해왔습니다. 그 흐름을 살펴보세요:',
      headers: {
        feature: '시대',
        bingsu: '그때의 빙수',
        shavedIce: '얼음 종류',
        kakigori: '토핑',
      },
      rows: [
        {
          feature: '조선시대',
          bingsu: '임금과 양반을 위한 왕실 얼음 별미',
          shavedIce: '빙고의 천연 얼음덩이',
          kakigori: '거의 없음 — 얼음 자체가 사치',
        },
        {
          feature: '1900년대 초',
          bingsu: '길거리 음식으로 팔린 팥빙수',
          shavedIce: '손으로 굵게 간 얼음',
          kakigori: '달콤한 팥',
        },
        {
          feature: '1900년대 중반',
          bingsu: '인기 있고 저렴한 여름 별미',
          shavedIce: '기계로 간 얼음',
          kakigori: '팥 + 쫄깃한 떡',
        },
        {
          feature: '1980~90년대',
          bingsu: '카페 빙수 붐의 시작',
          shavedIce: '고운 우유 얼음',
          kakigori: '과일, 인절미, 오레오, 연유',
        },
        {
          feature: '2010년대',
          bingsu: '프리미엄 프랜차이즈 디저트',
          shavedIce: '극세 우유 눈꽃',
          kakigori: '무한 — 과일, 말차, 치즈케이크 등',
        },
        {
          feature: '오늘날',
          bingsu: '와이키키를 포함한 세계의 K-디저트',
          shavedIce: '우유 눈꽃',
          kakigori: '창의적·제철·열대 토핑',
        },
      ],
      note: '한결같은 것은 얼음 그 자체입니다. 빙수는 귀한 천연 얼음덩이에서 포슬포슬한 우유 눈꽃으로 바뀌었고, 토핑은 단계마다 풍성해졌습니다. 그럼에도 원조인 팥빙수는 단 한 번도 유행에서 밀려난 적이 없습니다.',
    },
    types: {
      title: '이 역사에서 태어난 클래식 빙수',
      subtitle: '팥빙수에서 뻗어 나온 종류들',
      items: [
        {
          name: '팥빙수 (원조 팥)',
          korean: '팥빙수',
          description: '모든 것의 시작. 곱게 간 우유 얼음 위에 달콤한 팥, 쫄깃한 떡(경단), 연유를 올린 빙수입니다. 다른 모든 빙수는 조선에 뿌리를 둔 이 클래식의 후손이죠. 정겹고 향수 어린, 지금도 기준이 되는 한 그릇입니다.',
          icon: '🫘',
        },
        {
          name: '인절미빙수',
          korean: '인절미빙수',
          description: '볶은 콩가루(콩고물)를 묻힌 부드러운 떡 "인절미"에서 이름을 따왔습니다. 쫄깃한 인절미 조각, 고소한 콩가루, 연유가 간 얼음을 구수하고 깊이 있는 전통의 맛으로 바꿔줍니다. 옛 한국에 뿌리를 둔, 현대 카페의 인기 메뉴.',
          icon: '🍡',
        },
        {
          name: '과일 / 망고빙수',
          korean: '과일빙수',
          description: '상큼하고 여름다운 진화형. 제철 과일을 우유 눈꽃 위에 풍성하게 올립니다. 망고빙수가 세계적인 스타이고, 딸기·수박·열대과일 믹스도 인기죠. 바로 이 빙수가 디저트를 전 세계 인스타 명물로 만들었습니다.',
          icon: '🥭',
        },
        {
          name: '오레오 / 초코빙수',
          korean: '오레오빙수 / 초코빙수',
          description: '카페 시대의 달콤한 사치. 부순 오레오, 초콜릿 시럽, 브라우니 조각, 초콜릿 아이스크림을 우유 얼음에 겹겹이 쌓습니다. 1990년대 토핑 혁명의 산물로, 진하고 달콤한 맛을 사랑하는 젊은 세대에게 지금도 인기입니다.',
          icon: '🍫',
        },
        {
          name: '녹차빙수 (말차빙수)',
          korean: '녹차빙수',
          description: '프리미엄 카페 열풍과 함께 퍼진 범아시아 퓨전. 녹차 가루를 눈꽃에 섞거나 뿌리고, 팥과 찹쌀떡을 곁들입니다. 은은한 쓴맛이 단맛을 잡아주며, 팥이라는 원점에서 빙수가 얼마나 멀리 여행해 왔는지를 보여줍니다.',
          icon: '🍵',
        },
      ],
    },
    whyHawaii: {
      title: '조선의 빙고에서 와이키키까지',
      points: [
        {
          title: '한 그릇에 담긴 수백 년의 한국 유산',
          description: '와이키키에서 빙수를 먹을 때, 당신은 여섯 세기에 걸친 한국의 역사를 맛보는 셈입니다. 왕실의 빙고에서 길거리 팥빙수, 그리고 눈앞의 우유 눈꽃 디저트까지. 한 그릇에 이만큼의 이야기를 담은 디저트는 흔치 않습니다.',
        },
        {
          title: '한류가 빙수를 세계로 실어 날랐다',
          description: 'K-pop, K-드라마, K-푸드로 대표되는 세계적인 한류(韓流)가 빙수를 한국 밖, 태평양 너머로 실어 날랐습니다. 일본·중국·아시아 각국에서 온 여행객들은 이미 빙수를 알고 그리워하며 하와이를 찾습니다. 그래서 와이키키는 정통 빙수에 더없이 잘 어울리는 곳입니다.',
        },
        {
          title: '셰이브 아이스를 사랑하는 하와이에 딱 맞다',
          description: '하와이는 이미 셰이브 아이스를 지역의 아이콘으로 아끼기에, 빙수를 단번에 이해합니다. 한국식 우유 눈꽃 빙수는 더 크리미한 얼음, 프리미엄 토핑, 함께 나눠 먹는 그릇으로, 사랑받는 지역의 개념을 한 단계 끌어올립니다. 문화적으로도 완벽한 궁합이죠.',
        },
        {
          title: '와이키키에서 정통 빙수를 갓 맛보세요',
          description: '역사는 직접 맛볼 때 가장 좋습니다. 진짜를 경험하려고 서울까지 날아갈 필요는 없습니다. 고운 우유 얼음과 신선한 토핑으로 만든 정통 한국 빙수가 와이키키 비치에서 단 몇 분 거리에서 기다리고 있으니까요.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 이 역사를 맛보는 곳',
      intro: '600년 이야기의 마지막을, 바로 와이키키에서 맛볼 수 있습니다 — Kona Coffee Donut? 에서요.',
      shop: {
        name: 'Kona Coffee Donut? (코나커피도넛)',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키의 중심, 칼라카우아 애비뉴에 자리한 Kona Coffee Donut? 은 정통 한국 빙수와 100% 코나 커피를 함께 선보입니다. 수백 년에 걸친 한국의 유산과 하와이 최고의 맛을 한자리에서 — 고운 우유 눈꽃, 신선한 토핑, 풍부한 섬 커피를 한 곳에서 즐기세요.',
        highlights: [
          '클래식 팥빙수부터 과일까지 정통 한국 빙수',
          '100% 코나 커피와의 페어링 — 하와이와 한국의 만남',
          '와이키키 비치에서 약 5분',
          '매일 오전 7시~오후 9시 영업 — 언제든 좋아요',
        ],
      },
      cta: '빙수 메뉴 보기',
    },
    howToEat: {
      title: '정통 빙수 즐기는 법',
      subtitle: '한국인이 대대로 즐겨온 방식 그대로',
      tips: [
        {
          title: '클래식 팥빙수부터 시작하기',
          description: '빙수의 역사를 이해하려면, 시작된 곳에서 출발하세요. 클래식 팥빙수(우유 눈꽃, 달콤한 팥, 쫄깃한 떡, 연유)는 다른 모든 맛의 원형입니다. 먼저 이것을 맛보고, 그다음 다양하게 넓혀가세요.',
        },
        {
          title: '녹기 전에 먹기',
          description: '고운 우유 눈꽃은 나오는 순간부터 녹기 시작합니다. 사진은 빠르게 찍고, 얼음이 아직 포슬포슬하고 구름처럼 보송할 때 바로 파먹으세요. 토핑만이 아니라 바로 이 식감이 핵심입니다.',
        },
        {
          title: '토핑을 섞어 먹기',
          description: '위에서부터 그대로 먹지 마세요. 팥, 과일, 연유를 얼음에 살살 섞어 한 숟가락마다 골고루 어우러지게 하세요. 이 맛들은 층층이 따로 먹는 게 아니라, 하나로 어우러지도록 만들어졌습니다.',
        },
        {
          title: '나눠 먹고, 코나 커피와 함께',
          description: '한국에서 빙수는 늘 나눠 먹는 디저트였습니다. 큰 그릇 하나에 숟가락 몇 개, 2~3명이 함께죠. 와이키키에서는 그 한 그릇에 100% 코나 커피를 곁들여, 하와이와 한국이 만나는 완벽한 마무리를 즐겨보세요.',
        },
      ],
    },
    faq: {
      title: '빙수의 기원과 역사 자주 묻는 질문',
      items: [
        {
          question: '빙수는 어디서 왔나요?',
          answer: '빙수는 한국에서 왔습니다. 조선시대(1392~1897)에 기원을 두며, 당시 빙고라 불리는 왕실 저장고에서 채취·보관한 얼음은 임금과 양반만 누리던 사치품이었습니다. 수백 년에 걸쳐 그 왕실의 얼음 별미가 팥빙수로, 그리고 마침내 오늘날 전 세계에서 즐기는 현대의 우유 눈꽃 디저트로 발전했습니다.',
        },
        {
          question: '"빙수"는 무슨 뜻인가요?',
          answer: '빙수(氷水)는 말 그대로 "얼음물", 실제로는 곱게 갈거나 부순 얼음을 뜻합니다. 가장 유명한 원형은 팥빙수(팥빙수)로, "팥"은 붉은 팥을 의미하므로 팥빙수는 "팥을 올린 간 얼음"이라는 뜻이 됩니다.',
        },
        {
          question: '빙수는 누가 발명했고 얼마나 오래됐나요?',
          answer: '빙수는 한 사람이 발명한 것이 아니라 한국에서 수백 년에 걸쳐 서서히 발전했습니다. 그 뿌리는 600년도 더 전인 조선시대, 얼음이 왕실의 사치품이던 시절로 거슬러 올라갑니다. 길거리식 팥빙수가 1900년대 초에 퍼졌고, 오늘날 우리가 아는 현대의 우유 눈꽃 빙수는 1980~90년대 카페 붐에서 모습을 갖췄습니다.',
        },
        {
          question: '원조 빙수는 어떤 것이었나요?',
          answer: '원조 빙수는 팥빙수(팥빙수)로, 간 얼음 위에 달콤한 팥만 올린 단순한 형태였습니다. 초기에는 굵게 간 천연 얼음을 쓰고 그 외에는 거의 없었죠. 떡, 과일, 연유 같은 토핑은 나중에 더해졌지만, 팥을 올린 팥빙수는 지금도 클래식이자 근본이 되는 형태입니다.',
        },
        {
          question: '와이키키에서 정통 빙수는 어디서 먹을 수 있나요?',
          answer: '와이키키의 중심, 2142 Kalakaua Ave에 있는 Kona Coffee Donut? 에서 정통 한국 빙수를 맛볼 수 있습니다. 와이키키 비치에서 약 5분, 매일 오전 7시~오후 9시 영업합니다. 진짜 한국 빙수를 100% 코나 커피와 함께 선보이므로, 빙수의 600년 역사의 마지막을 하와이 최고의 맛과 함께 즐길 수 있습니다.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 600년의 역사를 맛보세요',
      text: '2142 Kalakaua Ave의 Kona Coffee Donut? 에서 조선의 빙고에서 와이키키까지 여행해 온 디저트, 정통 한국 빙수를 100% 코나 커피와 함께 경험하세요.',
      menuButton: '빙수 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '빙수의 기원과 역사',
    },
  },
  zh: {
    hero: {
      title: '雪冰的起源与历史',
      subtitle: '韩式刨冰从何而来——从朝鲜王朝的皇家冰到国民甜品',
      updated: '2026年6月更新',
      readTime: '阅读约9分钟',
    },
    definition: {
      title: '雪冰从哪里来？',
      text: '<strong>雪冰（빙수，Bingsu）起源于韩国。</strong>其名字字面意思就是<strong>"冰水"，即细细刨成的冰</strong>。它最初的形式是<strong>红豆刨冰（팥빙수，Patbingsu）</strong>——刨冰上铺满甜红豆。雪冰从<strong>曾经只有君王才能享用的朝鲜王朝奢侈冰品</strong>，演变成<strong>韩国的国民夏季甜品</strong>，如今风靡全球，包括威基基在内。',
    },
    history: {
      title: '雪冰的历史',
      subtitle: '从朝鲜王朝冰库到全球K-甜品',
      p1: '雪冰的故事始于朝鲜王朝（1392–1897年），当时冰块并非人人可买的甜品，而是皇室的奢侈品。朝廷沿汉江设立了名为<strong>"冰库（빙고）"</strong>的专用储冰仓库，在冬天采集天然冰块，并保存到盛夏。其中最重要的<strong>西冰库（서빙고）</strong>和<strong>东冰库（동빙고）</strong>对皇室生活如此重要，以至于它们的名字至今仍是首尔的地名。能分到这些冰，是君王亲自赐予的特权。',
      p2: '最早真正的雪冰很简单：刨冰上放甜红豆（팥）。这一朴素的组合诞生了沿用至今的名字<strong>红豆刨冰（팥빙수）</strong>，字面意思就是"红豆刨冰"。随着冰块逐渐走出宫廷，红豆刨冰从皇室的奢侈享受，慢慢变成寻常百姓终于也能品尝的美味。',
      p3: '日据时期（1910–1945年），手摇刨冰器传入，红豆刨冰走上了街头。摊贩和小店把粗刨的冰块铺上红豆和Q弹年糕（떡）出售，到20世纪中叶，雪冰已成为韩国熟悉又实惠的夏日小吃——炎热午后的一份犒赏。',
      p4: '真正的蜕变发生在20世纪80至90年代。韩国咖啡厅把粗糙的水冰换成超细的<strong>牛奶雪花</strong>，再堆上高级配料——新鲜水果、年糕粉（인절미）、奥利奥、芝士蛋糕。<strong>雪冰（설빙，Sulbing）</strong>等连锁品牌把雪冰带成全年皆宜的咖啡厅风潮，而全球韩流（Hallyu）则把它带出韩国，传到日本、中国、东南亚，并越过太平洋抵达夏威夷和威基基，至今广受喜爱。',
    },
    comparison: {
      title: '雪冰是如何演变的',
      subtitle: '六个世纪，一道甜品',
      intro: '雪冰并非一夜之间出现。它历经数百年演变——从守卫森严的皇室奢侈品，变成今天你能在威基基点到的牛奶雪花甜品。来看看它的变化：',
      headers: {
        feature: '时代',
        bingsu: '当时的雪冰',
        shavedIce: '冰的类型',
        kakigori: '配料',
      },
      rows: [
        {
          feature: '朝鲜王朝',
          bingsu: '供君王贵族享用的皇家冰品',
          shavedIce: '冰库的天然冰块',
          kakigori: '几乎没有——冰本身即是奢侈',
        },
        {
          feature: '1900年代初',
          bingsu: '作为街头小吃的红豆刨冰',
          shavedIce: '手工粗刨的冰',
          kakigori: '甜红豆',
        },
        {
          feature: '1900年代中叶',
          bingsu: '受欢迎又实惠的夏日小吃',
          shavedIce: '机器刨的冰',
          kakigori: '红豆 + Q弹年糕（떡）',
        },
        {
          feature: '1980–90年代',
          bingsu: '咖啡厅雪冰热潮的开端',
          shavedIce: '细腻牛奶冰',
          kakigori: '水果、年糕粉、奥利奥、炼乳',
        },
        {
          feature: '2010年代',
          bingsu: '高端连锁甜品',
          shavedIce: '超细牛奶雪花',
          kakigori: '无穷无尽——水果、抹茶、芝士蛋糕等',
        },
        {
          feature: '今天',
          bingsu: '全球K-甜品，包括威基基',
          shavedIce: '牛奶雪花',
          kakigori: '创意、应季与热带配料',
        },
      ],
      note: '贯穿始终的是冰本身：雪冰从珍贵的天然冰块变成蓬松的牛奶雪花，配料则一步步愈发丰富——然而作为元祖的红豆刨冰，从未过时。',
    },
    types: {
      title: '从这段历史诞生的经典雪冰',
      subtitle: '由红豆刨冰衍生出的种类',
      items: [
        {
          name: '红豆刨冰（元祖红豆）',
          korean: '팥빙수',
          description: '开创一切的那一款。细腻牛奶冰上铺满甜红豆、Q弹年糕（경단）和炼乳。其他所有雪冰都是这道扎根朝鲜王朝的经典的后裔——温馨、怀旧，至今仍是标杆。',
          icon: '🫘',
        },
        {
          name: '年糕粉刨冰',
          korean: '인절미빙수',
          description: '以裹有烤黄豆粉（콩고물）的柔软年糕"인절미"命名。Q弹的年糕块、香浓的黄豆粉和炼乳，把刨冰变得醇厚而传统。这是一道根植于旧韩国、却深受现代咖啡厅喜爱的人气之选。',
          icon: '🍡',
        },
        {
          name: '水果 / 芒果刨冰',
          korean: '과일빙수',
          description: '清爽而夏日感十足的进化版——应季水果堆满牛奶雪花。芒果刨冰是全球明星，草莓、西瓜、混合热带水果也大受欢迎。正是这款雪冰，让这道甜品红遍全球社交媒体。',
          icon: '🥭',
        },
        {
          name: '奥利奥 / 巧克力刨冰',
          korean: '오레오빙수 / 초코빙수',
          description: '咖啡厅时代的甜蜜放纵：碎奥利奥、巧克力酱、布朗尼块和巧克力冰淇淋层层叠在牛奶冰上。它是1990年代配料革命的产物，至今深受喜爱浓郁口味的年轻一代欢迎。',
          icon: '🍫',
        },
        {
          name: '抹茶（绿茶）刨冰',
          korean: '녹차빙수',
          description: '随高端咖啡厅浪潮兴起的泛亚融合款。抹茶粉融入或撒在雪花上，搭配红豆和麻糬。淡淡的微苦平衡了甜味——印证了雪冰从红豆起点走出了多远。',
          icon: '🍵',
        },
      ],
    },
    whyHawaii: {
      title: '从朝鲜冰库到威基基',
      points: [
        {
          title: '每一碗都承载数百年韩国传承',
          description: '在威基基吃雪冰时，你品尝的是横跨六个世纪的韩国历史——从皇家冰库到街头红豆刨冰，再到眼前这碗牛奶雪花甜品。很少有甜品能在一碗之中承载如此厚重的故事。',
        },
        {
          title: '韩流把雪冰带向全世界',
          description: 'K-pop、韩剧、韩餐所代表的全球韩流（Hallyu），把雪冰带出韩国、越过太平洋。来自日本、中国和亚洲各地的游客抵达夏威夷时，早已认识并渴望它，这让威基基成为正宗雪冰的天然归宿。',
        },
        {
          title: '热爱刨冰的夏威夷与它天作之合',
          description: '夏威夷本就把刨冰视作本地标志，因此对雪冰一拍即合。韩国的牛奶雪花版本，以更绵密的冰、高级配料和适合分享的大碗，把这一深受喜爱的本地概念再度升级——文化上也是完美契合。',
        },
        {
          title: '在威基基品尝现做的正宗雪冰',
          description: '历史亲口品尝最美味。你无需飞往首尔就能体验真正的雪冰——用细腻牛奶冰和新鲜配料制作的正宗韩式雪冰，就在距威基基海滩仅几分钟的地方等着你。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基哪里能品尝这段历史',
      intro: '这段600年故事的结尾，就能在威基基品尝到——在 Kona Coffee Donut? 。',
      shop: {
        name: 'Kona Coffee Donut?（科纳咖啡甜甜圈）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '位于威基基中心卡拉卡瓦大道的 Kona Coffee Donut?，同时供应正宗韩式雪冰与100%科纳咖啡。我们把数百年的韩国传承与夏威夷的精华汇于一处——细腻牛奶雪花、新鲜配料、醇厚的海岛咖啡，一站尽享。',
        highlights: [
          '从经典红豆刨冰到水果的正宗韩式雪冰',
          '搭配100%科纳咖啡——夏威夷邂逅韩国',
          '距威基基海滩约5分钟',
          '每日上午7点至晚上9点营业——随时都合适',
        ],
      },
      cta: '查看雪冰菜单',
    },
    howToEat: {
      title: '如何享用正宗雪冰',
      subtitle: '用韩国人世代相传的方式品尝',
      tips: [
        {
          title: '从经典红豆刨冰开始',
          description: '要了解雪冰的历史，就从它开始的地方入手。经典红豆刨冰（牛奶雪花、甜红豆、Q弹年糕、炼乳）是其他所有口味的原型。先尝它，再慢慢拓展。',
        },
        {
          title: '趁融化前享用',
          description: '细腻的牛奶雪花从上桌那一刻就开始融化。快速拍照，趁冰还蓬松如云时立刻开吃。重点不仅在配料，更在于这份口感。',
        },
        {
          title: '把配料拌进去',
          description: '别只从顶上往下吃。把红豆、水果和炼乳轻轻拌入冰中，让每一勺都均衡。这些味道本就是为融合在一起而生，而非分层食用。',
        },
        {
          title: '分享，并搭配科纳咖啡',
          description: '在韩国，雪冰一向是分享的甜品；一大碗配几把勺子，供2-3人同享。在威基基，为这碗分享的雪冰配上一杯100%科纳咖啡，便是夏威夷邂逅韩国的完美收尾。',
        },
      ],
    },
    faq: {
      title: '雪冰起源与历史常见问题',
      items: [
        {
          question: '雪冰从哪里来？',
          answer: '雪冰来自韩国。它起源于朝鲜王朝（1392–1897年），当时在名为冰库（빙고）的皇家仓库中采集和储存的冰块，是仅供君王和贵族享用的奢侈品。历经数百年，这道皇家冰品演变为红豆刨冰，并最终成为如今风靡全球的现代牛奶雪花甜品。',
        },
        {
          question: '"雪冰（Bingsu）"是什么意思？',
          answer: '雪冰（빙수，氷水）字面意思就是"冰水"，实际指细细刨成或碾碎的冰。最著名的原型是红豆刨冰（팥빙수），其中"팥（pat）"意为红豆，所以팥빙수就是"红豆刨冰"的意思。',
        },
        {
          question: '雪冰是谁发明的，有多久历史？',
          answer: '雪冰并非由某一个人发明，而是在韩国历经数百年逐渐演变而成。它的根源可追溯到600多年前的朝鲜王朝，当时冰是皇室的奢侈品。街头风格的红豆刨冰在1900年代初普及，而我们今天熟知的现代牛奶雪花雪冰，则在1980至90年代的咖啡厅热潮中成型。',
        },
        {
          question: '最初的雪冰是什么样的？',
          answer: '最初的雪冰是红豆刨冰（팥빙수）：刨冰上只简单地放上甜红豆。早期使用粗刨的天然冰，几乎别无他物。年糕、水果、炼乳等配料是后来才加入的，但放红豆的红豆刨冰至今仍是经典和根本的形式。',
        },
        {
          question: '在威基基哪里能吃到正宗雪冰？',
          answer: '你可以在位于威基基中心2142 Kalakaua Ave的 Kona Coffee Donut? 品尝正宗韩式雪冰——距威基基海滩约5分钟，每日上午7点至晚上9点营业。我们供应真正的韩式雪冰与100%科纳咖啡，让你在品尝雪冰600年历史结尾的同时，享受夏威夷的精华。',
        },
      ],
    },
    cta: {
      title: '在威基基品尝600年的历史',
      text: '前往2142 Kalakaua Ave的 Kona Coffee Donut?，体验这道从朝鲜冰库一路旅行到威基基的甜品——正宗韩式雪冰，搭配100%科纳咖啡。',
      menuButton: '查看雪冰菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '雪冰的起源与历史',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Bingsu Origin & History: Where Korean Shaved Ice Came From',
  description: 'The full history of bingsu — Korea\'s beloved shaved ice dessert. From Joseon-era royal ice houses and patbingsu to the modern milk-snow dessert, and where to try authentic bingsu in Waikiki.',
  image: 'https://www.konacoffeedonut.com/images/blog/bingsu-origin-history.jpeg',
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
  datePublished: '2026-06-24',
  dateModified: '2026-06-24',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/en/blog/bingsu-origin-history',
  },
  keywords: 'bingsu origin, bingsu history, bingsu meaning, where did bingsu come from, who invented bingsu, patbingsu history',
  wordCount: 1400,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where did bingsu come from?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bingsu came from Korea. It originated during the Joseon Dynasty (1392–1897), when ice harvested and stored in royal ice houses called binggo was a luxury reserved for kings and nobility. Over centuries it evolved from that royal ice treat into patbingsu and, eventually, the modern milk-snow dessert enjoyed worldwide today.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does "bingsu" mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The word bingsu (빙수, 氷水) literally means "ice water" — in practice, finely shaved or crushed ice. The original and most famous version is patbingsu (팥빙수), where "pat" (팥) means red bean, so patbingsu translates to "red bean shaved ice."',
      },
    },
    {
      '@type': 'Question',
      name: 'Who invented bingsu and how old is it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bingsu was not invented by a single person — it evolved gradually in Korea over centuries. Its roots reach back to the Joseon Dynasty, more than 600 years ago, when ice was a royal luxury. Street-style patbingsu spread in the early 1900s, and the modern milk-snow bingsu we know today took shape in the café boom of the 1980s–1990s.',
      },
    },
    {
      '@type': 'Question',
      name: 'What was the original bingsu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The original bingsu was patbingsu (팥빙수): shaved ice topped simply with sweet red bean paste. Early versions used coarsely shaved natural ice and little else. Toppings like rice cake, fruit, and condensed milk were added later, but red-bean patbingsu remains the classic, foundational form.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I try authentic bingsu in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can try authentic Korean bingsu at Kona Coffee Donut?, located at 2142 Kalakaua Ave in the heart of Waikiki — about 5 minutes from Waikiki Beach and open daily 7AM–9PM. We serve real Korean bingsu alongside 100% Kona coffee, so you can taste the end of bingsu\'s 600-year history paired with the best of Hawaii.',
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

export default function BingsuOriginHistoryPage() {
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
          src="/images/blog/bingsu-origin-history.jpeg"
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

        {/* History of Bingsu */}
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

        {/* Types of Bingsu */}
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

        {/* From Joseon Ice Houses to Waikiki */}
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

        {/* Where to Get Bingsu in Waikiki */}
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
                href={`/${locale}/menu/bingsu`}
                className="inline-block bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-sky-100 transition-colors"
              >
                {t.whereToGet.cta}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* How to Enjoy Authentic Bingsu */}
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
              href={`/${locale}/blog/what-is-bingsu`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 font-semibold transition-colors"
            >
              → What Is Bingsu?
            </Link>
            <Link
              href={`/${locale}/blog/best-bingsu-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Best Bingsu in Waikiki
            </Link>
            <Link
              href={`/${locale}/blog/how-to-eat-bingsu`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              How to Eat Bingsu
            </Link>
            <Link
              href={`/${locale}/menu/bingsu`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Bingsu Menu
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
                  href={`/${locale}/menu/bingsu`}
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
