'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  DollarSign,
  Coffee,
  ChevronDown,
  ChevronUp,
  Award,
  Heart,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Script from 'next/script';
import { useState } from 'react';
import SubpageNav from '@/components/SubpageNav';

type Locale = 'en' | 'ja' | 'ko' | 'zh';

const content = {
  en: {
    hero: {
      title: 'Best Desserts in Waikiki 2026',
      subtitle: 'Sweet Spots You Can\'t Miss',
      date: 'Updated April 2026',
      readTime: '10 min read',
    },
    intro: {
      text: 'Waikiki isn\'t just about the beach and sunsets — it\'s quietly become one of the best dessert destinations in Hawaii. From traditional Hawaiian malasadas to Korean bingsu, Japanese mochi donuts to tropical acai bowls, the dessert scene here rivals any major foodie city. Whether you just finished dinner at a Kalakaua Avenue restaurant or you\'re craving something sweet after a day of surfing, this guide covers the 8 best dessert spots in and around Waikiki for 2026. We\'ve included prices, must-try items, and exactly what makes each place special — so you can spend less time searching "dessert near me" and more time eating.',
    },
    shops: [
      {
        rank: 1,
        name: 'Kona Coffee Donut',
        badge: 'Best All-Around',
        location: '2142 Kalakaua Ave, Waikiki',
        hours: '7:00 AM - 9:00 PM Daily',
        priceRange: '$$',
        knownFor: 'Mochi donuts, malasadas, bingsu, and acai bowls paired with 100% Kona coffee',
        description: 'If you\'re looking for one dessert stop that covers all the bases, this is it. Kona Coffee Donut is Waikiki\'s newest cafe and the only place on Kalakaua Avenue where you can get chewy MOCHILAND mochi donuts, fresh-fried malasadas, Korean-style bingsu, and tropical acai bowls — all under one roof. Each mochi donut features the signature eight-ball shape with a satisfying crunch on the outside and an impossibly chewy center made from premium rice flour. Flavors rotate through 12+ options including Ube, Matcha, Black Sesame, Mango, and seasonal specials. The malasadas come out golden and pillowy every morning, filled with haupia cream, lilikoi custard, or dusted in cinnamon sugar. Their bingsu is a mountain of finely shaved milk ice topped with fresh fruit, mochi, and red bean — perfect for sharing on a hot Waikiki afternoon. Pair any dessert with their premium 100% Kona coffee from Honolulu Coffee for the full experience. The cafe sits steps from Waikiki Beach, making it an ideal post-beach or after-dinner dessert destination.',
        mustTry: 'Ube Mochi Donut + Mango Bingsu combo',
        whyVisit: 'The only spot in Waikiki offering mochi donuts, malasadas, bingsu, AND acai bowls in one location. Whether you want something chewy, icy, fruity, or fried, Kona Coffee Donut has you covered. The Kona coffee pairing elevates every dessert. Steps from the beach and open until 9 PM — perfect for an evening sweet treat.',
        menuLinks: true,
      },
      {
        rank: 2,
        name: 'Banan',
        badge: 'Healthiest Pick',
        location: '2301 Kalakaua Ave, Waikiki (multiple locations)',
        hours: '8:00 AM - 9:00 PM',
        priceRange: '$$',
        knownFor: 'Frozen banana soft serve made with local Oahu bananas',
        description: 'Banan has carved out a unique niche in Waikiki\'s dessert scene with their frozen banana-based soft serve. Using locally grown Oahu bananas that would otherwise go to waste, they blend frozen fruit into a creamy, dairy-free soft serve that tastes surprisingly rich and indulgent. The texture sits somewhere between ice cream and sorbet — smooth, cold, and naturally sweet without any added sugar. Toppings include local granola, cacao nibs, honey, lilikoi, and seasonal Hawaiian fruits. Their original Waikiki Beach location is right on the sand with unbeatable ocean views, making it one of the most Instagram-worthy dessert experiences on the island. It\'s also 100% plant-based, which appeals to vegan and health-conscious visitors. Banan isn\'t trying to be ice cream — it\'s doing its own thing, and doing it well.',
        mustTry: 'The Original (banana, granola, honey, cacao nibs)',
        whyVisit: 'A guilt-free tropical dessert experience with beachfront views. Perfect if you want something sweet and cold without the heaviness of ice cream. The sustainability story adds a feel-good factor.',
      },
      {
        rank: 3,
        name: 'Henry\'s Place',
        badge: 'Best Gelato',
        location: '234 Beach Walk, Waikiki',
        hours: '11:00 AM - 10:00 PM',
        priceRange: '$$',
        knownFor: 'Artisan gelato with Hawaiian tropical flavors',
        description: 'Henry\'s Place brings Italian gelato tradition to Waikiki with a Hawaiian twist. Their gelato is made in small batches daily using premium ingredients, and the tropical flavors are what set them apart from mainland gelato shops. Think haupia (coconut cream), li hing mango, Kona coffee, macadamia nut, and liliko\'i sorbet — flavors that taste like Hawaii in frozen form. The texture is dense, creamy, and incredibly smooth, with less air churned in than typical American ice cream. The shop itself has a warm, inviting atmosphere on Beach Walk, making it a great stop during an evening stroll through Waikiki. Portions are generous and the quality-to-price ratio is excellent for the area.',
        mustTry: 'Kona Coffee Gelato or Haupia Coconut Cream',
        whyVisit: 'The best gelato in the Waikiki area, with tropical flavors you won\'t find anywhere else. Perfect for a leisurely evening dessert walk.',
      },
      {
        rank: 4,
        name: 'Island Vintage Shave Ice',
        badge: 'Classic Hawaiian',
        location: '2301 Kalakaua Ave (Royal Hawaiian Center)',
        hours: '10:00 AM - 9:00 PM',
        priceRange: '$$',
        knownFor: 'Premium Hawaiian shaved ice with organic syrups and ice cream base',
        description: 'No dessert guide to Waikiki would be complete without Hawaiian shaved ice, and Island Vintage does it right. Unlike the cheap snow cone-style versions you\'ll find at tourist traps, Island Vintage uses finely shaved ice that has a snow-like texture — it practically melts on your tongue. Their syrups are made from real fruit and organic cane sugar, not artificial flavoring. The real game-changer is adding a scoop of ice cream at the base, which creates a creamy surprise at the bottom of every cup. Popular combinations include li hing mango, passion fruit, and the rainbow. They also add sweetened azuki beans, mochi, and fresh fruit as toppings. Located in the Royal Hawaiian Center, it\'s easy to find and consistently excellent. On hot Waikiki afternoons, the line can be long, but it moves quickly.',
        mustTry: 'Premium Shave Ice with ice cream base and mochi topping',
        whyVisit: 'The quintessential Hawaiian dessert experience, done at a premium level. If you\'re going to try shaved ice in Hawaii (and you should), do it here rather than at a random beach stand.',
      },
      {
        rank: 5,
        name: 'Uncle Tetsu\'s Cheesecake',
        badge: 'Japanese Specialty',
        location: 'Ala Moana Center, Honolulu',
        hours: '10:00 AM - 8:00 PM',
        priceRange: '$',
        knownFor: 'Japanese-style jiggly souffl\u00e9 cheesecake',
        description: 'Uncle Tetsu\'s is a Tokyo import that has developed a cult following in Honolulu. Their signature product is the Japanese souffl\u00e9 cheesecake — a light, airy, jiggly cheesecake that\'s nothing like the dense New York-style version most Americans know. Each cake wobbles like jelly when you shake it, yet has a delicate, creamy interior with a subtle sweetness that doesn\'t overwhelm. They\'re baked fresh throughout the day, and there\'s something deeply satisfying about watching the golden cakes come out of the oven. At around $10 for an entire cake, it\'s one of the best dessert values in Honolulu. The Ala Moana Center location is about 10 minutes from Waikiki by bus or car. Pro tip: eat it slightly warm for the best texture, or refrigerate it for a denser, more custard-like experience.',
        mustTry: 'Original Jiggly Cheesecake (eaten warm)',
        whyVisit: 'An affordable and unique Japanese dessert experience. The jiggly factor alone makes it worth the trip. Great to bring back to your hotel room for a late-night treat.',
      },
      {
        rank: 6,
        name: 'Leonard\'s Bakery',
        badge: 'Since 1952',
        location: '933 Kapahulu Ave, Honolulu',
        hours: '5:30 AM - 7:00 PM',
        priceRange: '$',
        knownFor: 'Hawaii\'s most legendary malasadas — Portuguese fried dough',
        description: 'Leonard\'s has been the gold standard for malasadas in Hawaii since 1952, and for good reason. Their Portuguese-style fried dough balls are a masterclass in simplicity: golden-brown exterior with a satisfying crunch, impossibly soft and airy interior, and a generous coating of granulated sugar. They\'re served piping hot, and the first bite is pure bliss. The filled versions are equally impressive — haupia (coconut cream), custard, and dobash (chocolate) are the most popular. Leonard\'s is located on Kapahulu Avenue, about a 10-minute drive from central Waikiki, and the line regularly wraps around the building on weekends. Despite the wait, the line moves fast and it\'s absolutely worth it. Malasadas are arguably Hawaii\'s most iconic dessert, and Leonard\'s is where the tradition lives.',
        mustTry: 'Original Sugar Malasada + Haupia Cream filled',
        whyVisit: 'A mandatory Hawaii dessert experience. If you only have time for one stop outside Waikiki, make it Leonard\'s. The malasadas are served hot and fresh — eat them immediately.',
      },
      {
        rank: 7,
        name: 'Via Gelato',
        badge: 'Most Creative',
        location: '1142 12th Ave, Kaimuki',
        hours: '12:00 PM - 9:00 PM',
        priceRange: '$$',
        knownFor: 'Artisan gelato with over 200 rotating creative flavors',
        description: 'Via Gelato in Kaimuki is where Honolulu\'s serious dessert lovers go for gelato. With over 200 rotating flavors that change daily, they push creative boundaries far beyond what most gelato shops attempt. You\'ll find flavors like goat cheese with fig, olive oil with sea salt, Thai tea, taro macadamia, and cardamom rose alongside classics like pistachio and dark chocolate. Everything is made from scratch using local and premium imported ingredients. The owner trained in Italy and brings authentic technique to these wildly creative combinations. The Kaimuki location is about 15 minutes from Waikiki, and the neighborhood itself is one of Honolulu\'s best foodie destinations. Servings are generous and the staff are happy to let you sample before committing.',
        mustTry: 'Ask for the flavor of the day — they\'re always experimenting',
        whyVisit: 'For gelato lovers who want more than vanilla and chocolate. The creative flavors are genuinely exciting and the quality is exceptional. Worth the drive to Kaimuki.',
      },
      {
        rank: 8,
        name: 'Jejubing Desserts',
        badge: 'Best Bingsu',
        location: 'Ala Moana Center, Honolulu',
        hours: '10:00 AM - 9:00 PM',
        priceRange: '$$-$$$',
        knownFor: 'Authentic Korean bingsu (shaved ice dessert) with premium toppings',
        description: 'Jejubing brings authentic Korean bingsu culture to Honolulu at Ala Moana Center. Named after Jeju Island in South Korea, they specialize in the towering Korean shaved ice dessert that\'s taken social media by storm. Their bingsu features impossibly fine, snow-like shaved milk ice (not just frozen water like basic shaved ice) topped with generous portions of fresh fruit, red bean, mochi, condensed milk, and specialty toppings. The Injeolmi (soybean powder mochi) bingsu and Mango bingsu are standouts — large enough to share between two people, beautifully presented, and incredibly refreshing. The texture of the shaved milk ice is silky and almost creamy, nothing like the crunchy ice in Western-style desserts. At $15-20 per bowl, it\'s not the cheapest dessert option, but the portion sizes are substantial. About 10 minutes from Waikiki at Ala Moana Center.',
        mustTry: 'Injeolmi (Soybean Mochi) Bingsu or Mango Bingsu',
        whyVisit: 'The most authentic Korean bingsu experience in Honolulu. If you\'re a K-dessert fan or curious about the bingsu trend, Jejubing is the real deal. Great for sharing.',
      },
    ],
    comparison: {
      title: 'Dessert Types in Waikiki: A Quick Comparison',
      subtitle: 'Not sure which Hawaiian dessert to try first? Here\'s how they stack up.',
      headers: ['Feature', 'Shaved Ice', 'Bingsu', 'Mochi Donut', 'Malasada', 'Acai Bowl'],
      rows: [
        ['Texture', 'Fluffy, snow-like', 'Silky, creamy ice', 'Chewy & crispy', 'Pillowy & soft', 'Smooth & thick'],
        ['Served', 'Ice cold', 'Ice cold', 'Room temp or warm', 'Hot & fresh', 'Cold'],
        ['Best For', 'Hot afternoons', 'Sharing with friends', 'Snack or treat', 'Breakfast or snack', 'Healthy dessert'],
        ['Origin', 'Hawaiian tradition', 'Korean', 'Japanese-Hawaiian', 'Portuguese-Hawaiian', 'Brazilian-Hawaiian'],
        ['Dairy-Free?', 'Usually yes', 'No (milk ice)', 'Usually yes', 'No', 'Yes'],
        ['Price Range', '$5 - $10', '$15 - $20', '$3.50 - $5', '$2 - $4', '$10 - $14'],
        ['Where to Try', 'Island Vintage', 'Kona Coffee Donut', 'Kona Coffee Donut', 'Leonard\'s Bakery', 'Kona Coffee Donut'],
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'What are the best desserts in Waikiki?',
          a: 'The best desserts in Waikiki include mochi donuts and bingsu from Kona Coffee Donut on Kalakaua Ave, shaved ice from Island Vintage at Royal Hawaiian Center, frozen banana soft serve from Banan, and gelato from Henry\'s Place. For malasadas, Leonard\'s Bakery on Kapahulu Ave is a must-visit just 10 minutes from Waikiki. Each spot offers a distinct style of dessert — from Hawaiian to Japanese to Korean.',
        },
        {
          q: 'Where can I find dessert near me in Waikiki at night?',
          a: 'For evening desserts in Waikiki, Kona Coffee Donut (open until 9 PM) on Kalakaua Ave serves mochi donuts, bingsu, and acai bowls. Henry\'s Place on Beach Walk has artisan gelato until 10 PM. Island Vintage Shave Ice at Royal Hawaiian Center is open until 9 PM. Most bakeries close earlier, so these are your best late-night dessert options within walking distance.',
        },
        {
          q: 'What is the most popular Hawaiian dessert?',
          a: 'Shaved ice is arguably the most iconic Hawaiian dessert, with origins dating back to Japanese immigrant plantation workers. Malasadas (Portuguese fried dough) are a close second and a must-try in Hawaii. Newer additions like mochi donuts (Japanese-Hawaiian fusion) and acai bowls have also become wildly popular. You can try all of these desserts in or near Waikiki.',
        },
        {
          q: 'Are there any Korean desserts available in Waikiki?',
          a: 'Yes! Korean bingsu (shaved milk ice dessert) is available at Kona Coffee Donut on Kalakaua Ave in Waikiki, featuring flavors like mango and injeolmi. For a dedicated bingsu experience, Jejubing at Ala Moana Center (10 minutes from Waikiki) specializes in authentic Korean-style bingsu with premium toppings and generous portions perfect for sharing.',
        },
        {
          q: 'What is the cheapest dessert option in Waikiki?',
          a: 'For budget-friendly desserts near Waikiki, Leonard\'s Bakery offers malasadas starting at around $2 each. Uncle Tetsu\'s sells an entire Japanese cheesecake for about $10 at Ala Moana Center. Mochi donuts at Kona Coffee Donut start at $3.50. For the best value, get a half-dozen malasadas from Leonard\'s to share, or split a bingsu between two people.',
        },
      ],
    },
    cta: {
      title: 'Satisfy Your Sweet Tooth at Kona Coffee Donut',
      address: '2142 Kalakaua Ave, Waikiki',
      text: 'Mochi donuts, malasadas, bingsu, and acai bowls — all paired with premium 100% Kona coffee. Steps from Waikiki Beach, open daily 7 AM to 9 PM.',
      menuButton: 'View Our Full Menu',
      directionsButton: 'Get Directions',
    },
  },
  ja: {
    hero: {
      title: '2026年ワイキキのベストデザート',
      subtitle: '見逃せないスイートスポット',
      date: '2026年4月更新',
      readTime: '読了10分',
    },
    intro: {
      text: 'ワイキキはビーチとサンセットだけではありません。実はハワイ有数のデザートスポットとして注目を集めています。伝統的なハワイアンマラサダから韓国のビンスまで、日本のモチドーナツからトロピカルアサイーボウルまで、ワイキキのデザートシーンはどの主要都市にも引けを取りません。カラカウア通りのレストランでの夕食後や、サーフィンの後に甘いものが恋しくなったときに、2026年ワイキキ周辺のベストデザートスポット8選をご紹介します。価格、おすすめメニュー、各店の魅力を詳しくお伝えしますので、「デザート 近く」で検索する時間を減らして、美味しいデザートを楽しむ時間を増やしましょう。',
    },
    shops: [
      {
        rank: 1,
        name: 'コナコーヒードーナツ',
        badge: '総合ベスト',
        location: '2142 Kalakaua Ave, ワイキキ',
        hours: '毎日 7:00 AM - 9:00 PM',
        priceRange: '$$',
        knownFor: 'モチドーナツ、マラサダ、ビンス、アサイーボウル、100%コナコーヒー',
        description: 'デザートを一箇所で全部楽しみたいなら、ここが最適です。コナコーヒードーナツはワイキキ最新のカフェで、カラカウア通りで唯一、もちもちのMOCHILANDモチドーナツ、揚げたてマラサダ、韓国式ビンス、トロピカルアサイーボウルのすべてが一つの屋根の下で楽しめるお店です。モチドーナツはプレミアム米粉を使用したシグネチャーの八つ玉形状で、外はサクサク、中はもちもち。紫芋、抹茶、黒ごま、マンゴー、季節限定など12種類以上のフレーバーが楽しめます。マラサダは毎朝黄金色にふわふわに揚げられ、ハウピアクリーム、リリコイカスタード、シナモンシュガーなどのバリエーションも。ビンスは細かく削ったミルク氷の山にフレッシュフルーツ、もち、あずきをトッピング — 暑いワイキキの午後のシェアにぴったり。すべてのデザートはホノルルコーヒーのプレミアム100%コナコーヒーとペアリングして、究極の体験を。ワイキキビーチからすぐの場所にあり、ビーチ帰りやディナー後のデザートスポットに最適です。',
        mustTry: '紫芋モチドーナツ + マンゴービンス セット',
        whyVisit: 'ワイキキで唯一、モチドーナツ、マラサダ、ビンス、アサイーボウルのすべてを一箇所で提供するスポット。もちもち、ひんやり、フルーティー、揚げたて — どんなデザートもコナコーヒードーナツにお任せ。コナコーヒーのペアリングがすべてのデザートを格上げ。ビーチからすぐ、夜9時まで営業 — 夕食後のスイーツに最適。',
        menuLinks: true,
      },
      {
        rank: 2,
        name: 'バナン',
        badge: 'ヘルシーNo.1',
        location: '2301 Kalakaua Ave, ワイキキ（複数店舗）',
        hours: '8:00 AM - 9:00 PM',
        priceRange: '$$',
        knownFor: 'オアフ島産バナナを使ったフローズンバナナソフトクリーム',
        description: 'バナンはオアフ島で栽培されたバナナを使ったフローズンソフトクリームで、ワイキキのデザートシーンに独自のポジションを築いています。廃棄されるはずだった地元産バナナを使用し、乳製品不使用でありながら驚くほどクリーミーで贅沢な味わいのソフトクリームに仕上げています。食感はアイスクリームとソルベの中間 — なめらかで冷たく、砂糖無添加でも自然な甘さ。トッピングはローカルグラノーラ、カカオニブ、はちみつ、リリコイなど。ワイキキビーチの砂浜にあるオリジナル店舗は海の眺めが最高で、島で最もインスタ映えするデザート体験のひとつ。100%プラントベースでヴィーガンやヘルスコンシャスな方にも。',
        mustTry: 'ザ・オリジナル（バナナ、グラノーラ、はちみつ、カカオニブ）',
        whyVisit: 'ビーチフロントの絶景と共にギルトフリーなトロピカルデザート体験。アイスクリームの重さなしに甘くて冷たいものが食べたい方に最適。',
      },
      {
        rank: 3,
        name: 'ヘンリーズプレイス',
        badge: 'ベストジェラート',
        location: '234 Beach Walk, ワイキキ',
        hours: '11:00 AM - 10:00 PM',
        priceRange: '$$',
        knownFor: 'ハワイアントロピカルフレーバーの職人ジェラート',
        description: 'ヘンリーズプレイスはイタリアンジェラートの伝統をハワイアンツイストでワイキキに届けています。毎日少量バッチで作られるジェラートはプレミアム素材を使用。ハウピア（ココナッツクリーム）、リーヒンマンゴー、コナコーヒー、マカダミアナッツ、リリコイソルベなど、ハワイを味わえるトロピカルフレーバーが特徴。食感は濃厚でクリーミー、アメリカンアイスクリームより空気が少なく、なめらか。ビーチウォークの温かい雰囲気の店内は夕方の散策にぴったり。',
        mustTry: 'コナコーヒージェラートまたはハウピアココナッツクリーム',
        whyVisit: 'ワイキキエリア最高のジェラート。他では味わえないトロピカルフレーバー。夕方のデザート散歩に最適。',
      },
      {
        rank: 4,
        name: 'アイランドヴィンテージシェイブアイス',
        badge: 'ハワイアンクラシック',
        location: '2301 Kalakaua Ave（ロイヤルハワイアンセンター）',
        hours: '10:00 AM - 9:00 PM',
        priceRange: '$$',
        knownFor: 'オーガニックシロップのプレミアムハワイアンかき氷',
        description: 'ワイキキのデザートガイドにハワイアンかき氷は欠かせません。アイランドヴィンテージは本格派です。観光客向けの安いスノーコーンとは違い、舌の上で溶けるような雪のような食感のきめ細かいかき氷を提供。シロップは本物の果物とオーガニックケーンシュガーから作られ、人工フレーバーは一切不使用。アイスクリームベースを底に入れるのがポイントで、カップの底でクリーミーなサプライズが待っています。リーヒンマンゴー、パッションフルーツ、レインボーが人気。甘いあずき、もち、フレッシュフルーツのトッピングも。ロイヤルハワイアンセンター内で見つけやすく、常に高品質。',
        mustTry: 'プレミアムかき氷 アイスクリームベース もちトッピング',
        whyVisit: 'プレミアムレベルの真のハワイアンデザート体験。ハワイでかき氷を食べるなら（ぜひ食べてください）、ランダムなビーチスタンドではなくここで。',
      },
      {
        rank: 5,
        name: 'アンクルテツのチーズケーキ',
        badge: '日本のスペシャリティ',
        location: 'アラモアナセンター, ホノルル',
        hours: '10:00 AM - 8:00 PM',
        priceRange: '$',
        knownFor: 'ふわふわ揺れる日本式スフレチーズケーキ',
        description: 'アンクルテツは東京からやってきた、ホノルルでカルト的人気を持つスイーツ店。看板商品の日本式スフレチーズケーキは、アメリカンが知っている濃厚なニューヨークスタイルとは全く違う、軽くてエアリーでぷるぷる揺れるチーズケーキ。揺らすとゼリーのように揺れるのに、中はデリケートでクリーミー、控えめな甘さ。一日を通して焼きたてが出てきます。ホール約$10という価格は、ホノルルで最もお得なデザートの一つ。アラモアナセンターはワイキキからバスまたは車で約10分。プロのアドバイス：ほんのり温かいうちに食べると最高の食感、冷蔵庫で冷やすとより濃厚なカスタード風に。',
        mustTry: 'オリジナルふわふわチーズケーキ（温かいうちに）',
        whyVisit: '手頃で独特な日本のデザート体験。ぷるぷる感だけでも行く価値あり。ホテルに持ち帰って夜食にも最適。',
      },
      {
        rank: 6,
        name: 'レナーズベーカリー',
        badge: '1952年創業',
        location: '933 Kapahulu Ave, ホノルル',
        hours: '5:30 AM - 7:00 PM',
        priceRange: '$',
        knownFor: 'ハワイで最も伝説的なマラサダ（ポルトガル揚げ生地）',
        description: 'レナーズは1952年以来、ハワイのマラサダのゴールドスタンダードです。ポルトガル式の揚げ生地ボールは、シンプルさの極致：黄金色の外側は心地よい歯ごたえ、中は驚くほどソフトでエアリー、たっぷりのグラニュー糖をまぶして提供。熱々で出され、最初の一口は至福のひととき。フィリング入りも絶品 — ハウピア（ココナッツクリーム）、カスタード、ドバシュ（チョコレート）が人気。カパフル通りにあり、ワイキキ中心部から車で約10分。週末は行列が建物を囲むことも。マラサダはハワイで最も象徴的なデザートと言えるでしょう。',
        mustTry: 'オリジナルシュガーマラサダ + ハウピアクリーム入り',
        whyVisit: 'ハワイ必須のデザート体験。ワイキキ外で一箇所だけ行くなら、レナーズを選んでください。マラサダは熱々 — すぐに食べましょう。',
      },
      {
        rank: 7,
        name: 'ヴィアジェラート',
        badge: '最もクリエイティブ',
        location: '1142 12th Ave, カイムキ',
        hours: '12:00 PM - 9:00 PM',
        priceRange: '$$',
        knownFor: '200種類以上の日替わりクリエイティブフレーバーの職人ジェラート',
        description: 'カイムキのヴィアジェラートは、ホノルルの本格デザートラバーが通うジェラート店。日替わりで変わる200種類以上のフレーバーは、大半のジェラート店が挑戦しないクリエイティブな境界を押し広げています。ゴートチーズ＆イチジク、オリーブオイル＆海塩、タイティー、タロマカダミア、カルダモンローズなど、ピスタチオやダークチョコレートなどのクラシックと並ぶ独創的な味。すべて地元産とプレミアム輸入素材を使い一から手作り。オーナーはイタリアで修行し、本格テクニックとワイルドな創造性を融合。カイムキはワイキキから約15分で、ホノルル有数のフードエリア。',
        mustTry: '本日のフレーバーを聞いてみて — 常に実験中',
        whyVisit: 'バニラとチョコレート以上のものを求めるジェラートラバーに。クリエイティブなフレーバーは本当にワクワクする品質。カイムキまでのドライブの価値あり。',
      },
      {
        rank: 8,
        name: 'チェジュビンデザート',
        badge: 'ベストビンス',
        location: 'アラモアナセンター, ホノルル',
        hours: '10:00 AM - 9:00 PM',
        priceRange: '$$-$$$',
        knownFor: 'プレミアムトッピングの本格韓国ビンス（かき氷デザート）',
        description: 'チェジュビンはアラモアナセンターで本格韓国ビンスカルチャーをホノルルに届けています。韓国の済州島にちなんで名付けられた、SNSで話題の韓国かき氷デザート専門店。信じられないほど細かい、雪のようなミルク氷（ただの氷水ではなく）にフレッシュフルーツ、あずき、もち、練乳、スペシャルトッピングをたっぷり。きなこもち（インジョルミ）ビンスとマンゴービンスが看板 — 2人でシェアできるサイズ、美しい盛り付け、驚くほどリフレッシング。ミルク氷の食感はシルキーでほぼクリーミー、西洋式のクランチーなかき氷とは全く別物。1杯$15〜20で最安ではありませんが、ボリュームは充分。ワイキキからアラモアナセンターまで約10分。',
        mustTry: 'きなこもち（インジョルミ）ビンスまたはマンゴービンス',
        whyVisit: 'ホノルルで最も本格的な韓国ビンス体験。K-デザートファンやビンスに興味がある方は、チェジュビンが本物。シェアに最適。',
      },
    ],
    comparison: {
      title: 'ワイキキのデザートタイプ：比較ガイド',
      subtitle: 'どのハワイアンデザートを最初に試すか迷っていますか？比較をどうぞ。',
      headers: ['特徴', 'かき氷', 'ビンス', 'モチドーナツ', 'マラサダ', 'アサイーボウル'],
      rows: [
        ['食感', 'ふわふわ、雪のよう', 'シルキー、クリーミーな氷', 'もちもち＆サクサク', 'ふわふわ＆ソフト', 'なめらか＆濃厚'],
        ['温度', '冷たい', '冷たい', '常温または温かい', '熱々＆揚げたて', '冷たい'],
        ['おすすめ', '暑い午後に', '友達とシェア', 'おやつに', '朝食やおやつに', 'ヘルシーデザート'],
        ['起源', 'ハワイの伝統', '韓国', '日本×ハワイ融合', 'ポルトガル×ハワイ', 'ブラジル×ハワイ'],
        ['乳製品フリー？', '通常Yes', 'No（ミルク氷）', '通常Yes', 'No', 'Yes'],
        ['価格帯', '$5 - $10', '$15 - $20', '$3.50 - $5', '$2 - $4', '$10 - $14'],
        ['おすすめ店', 'アイランドヴィンテージ', 'コナコーヒードーナツ', 'コナコーヒードーナツ', 'レナーズベーカリー', 'コナコーヒードーナツ'],
      ],
    },
    faq: {
      title: 'よくある質問',
      items: [
        {
          q: 'ワイキキで一番美味しいデザートは？',
          a: 'ワイキキのベストデザートは、カラカウア通りのコナコーヒードーナツのモチドーナツとビンス、ロイヤルハワイアンセンターのアイランドヴィンテージのかき氷、バナンのフローズンバナナソフトクリーム、ヘンリーズプレイスのジェラート。マラサダならワイキキから10分のカパフル通りのレナーズベーカリーが必訪。それぞれハワイアン、日本、韓国の異なるスタイルのデザートが楽しめます。',
        },
        {
          q: 'ワイキキで夜にデザートが食べられる場所は？',
          a: '夕方のデザートは、カラカウア通りのコナコーヒードーナツ（夜9時まで）でモチドーナツ、ビンス、アサイーボウル。ビーチウォークのヘンリーズプレイスは夜10時までジェラート。ロイヤルハワイアンセンターのアイランドヴィンテージシェイブアイスは夜9時まで。',
        },
        {
          q: 'ハワイで最も人気のあるデザートは？',
          a: 'かき氷はハワイで最も象徴的なデザートで、日本人移民のプランテーション労働者にルーツがあります。マラサダ（ポルトガル揚げ生地）も二番目に人気。モチドーナツ（日本×ハワイ融合）やアサイーボウルも近年大人気。ワイキキ周辺ですべて試せます。',
        },
        {
          q: 'ワイキキで韓国デザートは食べられますか？',
          a: 'はい！韓国ビンス（かき氷デザート）はワイキキのカラカウア通りのコナコーヒードーナツで、マンゴーやきなこもちなどのフレーバーが楽しめます。専門的なビンス体験なら、アラモアナセンター（ワイキキから10分）のチェジュビンが本格韓国式ビンスのプレミアムトッピングで充実。',
        },
        {
          q: 'ワイキキで一番安いデザートは？',
          a: '予算重視のデザートなら、レナーズベーカリーのマラサダが1個約$2から。アンクルテツのチーズケーキはアラモアナセンターでホール約$10。コナコーヒードーナツのモチドーナツは$3.50から。お得に楽しむなら、レナーズのマラサダをハーフダース購入するか、ビンスを2人でシェアするのがおすすめ。',
        },
      ],
    },
    cta: {
      title: 'コナコーヒードーナツで甘いひとときを',
      address: '2142 Kalakaua Ave, ワイキキ',
      text: 'モチドーナツ、マラサダ、ビンス、アサイーボウル — すべてプレミアム100%コナコーヒーと共に。ワイキキビーチからすぐ、毎日朝7時〜夜9時営業。',
      menuButton: 'フルメニューを見る',
      directionsButton: '道順を見る',
    },
  },
  ko: {
    hero: {
      title: '2026년 와이키키 베스트 디저트',
      subtitle: '놓칠 수 없는 스위트 스팟',
      date: '2026년 4월 업데이트',
      readTime: '10분 읽기',
    },
    intro: {
      text: '와이키키는 해변과 석양만의 장소가 아닙니다. 하와이 최고의 디저트 명소 중 하나로 조용히 자리잡았습니다. 전통 하와이안 말라사다부터 한국 빙수, 일본 모찌 도넛부터 트로피컬 아사이 볼까지, 와이키키의 디저트 씬은 어떤 대도시의 푸드 씬에도 뒤지지 않습니다. 칼라카우아 애비뉴 레스토랑에서 저녁을 마친 후든, 서핑 후 달콤한 것이 당길 때든, 이 가이드는 2026년 와이키키 주변 베스트 디저트 스팟 8곳을 소개합니다. 가격, 필수 메뉴, 각 매장의 특별한 점을 담았으니 "디저트 맛집" 검색하는 시간은 줄이고 맛있는 디저트를 즐기는 시간을 늘리세요. 한국의 디저트 문화를 사랑하는 분이라면, 와이키키에서도 빙수, 치즈케이크 등 익숙한 K-디저트를 만날 수 있습니다.',
    },
    shops: [
      {
        rank: 1,
        name: '코나커피도넛',
        badge: '종합 베스트',
        location: '2142 Kalakaua Ave, 와이키키',
        hours: '매일 7:00 AM - 9:00 PM',
        priceRange: '$$',
        knownFor: '모찌 도넛, 말라사다, 빙수, 아사이 볼 + 100% 코나 커피',
        description: '디저트를 한 곳에서 모두 즐기고 싶다면 바로 여기입니다. 코나커피도넛은 와이키키 최신 카페로, 칼라카우아 애비뉴에서 유일하게 쫄깃한 MOCHILAND 모찌 도넛, 갓 튀긴 말라사다, 한국식 빙수, 트로피컬 아사이 볼을 모두 한 지붕 아래에서 제공하는 곳입니다. 모찌 도넛은 프리미엄 쌀가루로 만든 시그니처 팔각 모양으로, 겉은 바삭 속은 쫄깃. 우베, 말차, 흑임자, 망고, 시즌 스페셜 등 12가지 이상의 맛이 있습니다. 말라사다는 매일 아침 황금빛으로 폭신하게 튀겨져 나오며, 하우피아 크림, 릴리코이 커스터드, 시나몬 슈가 등 다양한 버전을 제공합니다. 빙수는 곱게 간 밀크 아이스 위에 신선한 과일, 모찌, 팥을 올린 산 — 더운 와이키키 오후에 나눠 먹기 완벽합니다. 모든 디저트는 호놀룰루 커피의 프리미엄 100% 코나 커피와 페어링할 수 있습니다. 한국에서 즐기던 디저트 카페 감성을 와이키키에서 만날 수 있어 특히 한국 여행객들에게 인기입니다.',
        mustTry: '우베 모찌 도넛 + 망고 빙수 콤보',
        whyVisit: '와이키키에서 유일하게 모찌 도넛, 말라사다, 빙수, 아사이 볼을 한 곳에서 제공. 쫄깃한 것, 시원한 것, 과일 맛, 튀긴 것 — 코나커피도넛에 다 있습니다. 코나 커피 페어링이 모든 디저트를 격상. 해변에서 가깝고 밤 9시까지 영업 — 저녁 후 디저트로 완벽.',
        menuLinks: true,
      },
      {
        rank: 2,
        name: '바난',
        badge: '가장 건강한 선택',
        location: '2301 Kalakaua Ave, 와이키키 (여러 지점)',
        hours: '8:00 AM - 9:00 PM',
        priceRange: '$$',
        knownFor: '오아후산 바나나로 만든 프로즌 바나나 소프트서브',
        description: '바난은 오아후 섬에서 재배한 바나나로 만든 프로즌 소프트서브로 와이키키 디저트 씬에서 독보적인 위치를 차지하고 있습니다. 버려질 뻔한 현지산 바나나를 사용해 유제품 없이도 놀라울 정도로 크리미하고 진한 소프트서브를 만듭니다. 식감은 아이스크림과 셔벗 사이 — 부드럽고 차갑고, 설탕 무첨가에도 자연스러운 단맛. 토핑은 로컬 그래놀라, 카카오닙, 꿀, 릴리코이 등. 와이키키 비치 모래사장 위의 오리지널 매장은 바다 뷰가 최고로 인스타 감성 넘칩니다. 100% 플랜트 베이스로 비건 및 건강 의식적 방문객에게 인기.',
        mustTry: '오리지널 (바나나, 그래놀라, 꿀, 카카오닙)',
        whyVisit: '비치프론트 뷰와 함께하는 죄책감 없는 트로피컬 디저트. 아이스크림의 무거움 없이 달콤하고 시원한 것을 원할 때 완벽.',
      },
      {
        rank: 3,
        name: '헨리스 플레이스',
        badge: '베스트 젤라또',
        location: '234 Beach Walk, 와이키키',
        hours: '11:00 AM - 10:00 PM',
        priceRange: '$$',
        knownFor: '하와이안 트로피컬 맛의 장인 젤라또',
        description: '헨리스 플레이스는 이탈리안 젤라또 전통을 하와이안 트위스트로 와이키키에 선보입니다. 매일 소량으로 만드는 젤라또에 프리미엄 재료를 사용하며, 하우피아(코코넛 크림), 리힝 망고, 코나 커피, 마카다미아 넛, 릴리코이 셔벗 등 트로피컬 맛이 차별점. 식감은 진하고 크리미하며 매우 부드럽습니다. 비치 워크의 따뜻한 분위기 매장은 저녁 산책 중 들르기 좋습니다.',
        mustTry: '코나 커피 젤라또 또는 하우피아 코코넛 크림',
        whyVisit: '와이키키 최고의 젤라또. 다른 곳에서 맛볼 수 없는 트로피컬 맛. 여유로운 저녁 디저트 산책에 완벽.',
      },
      {
        rank: 4,
        name: '아일랜드 빈티지 셰이브 아이스',
        badge: '하와이안 클래식',
        location: '2301 Kalakaua Ave (로열 하와이안 센터)',
        hours: '10:00 AM - 9:00 PM',
        priceRange: '$$',
        knownFor: '오가닉 시럽의 프리미엄 하와이안 빙수',
        description: '와이키키 디저트 가이드에 하와이안 셰이브 아이스는 빠질 수 없으며, 아일랜드 빈티지가 제대로 합니다. 관광객 대상 싸구려 스노우콘과 달리, 혀 위에서 녹는 눈처럼 고운 빙수를 제공합니다. 시럽은 진짜 과일과 유기농 사탕수수로 만들며 인공 향료 불사용. 바닥에 아이스크림 한 스쿱을 넣으면 크리미한 서프라이즈가 됩니다. 리힝 망고, 패션프루트, 레인보우가 인기. 로열 하와이안 센터 내 위치로 찾기 쉽고 항상 높은 품질.',
        mustTry: '프리미엄 셰이브 아이스 아이스크림 베이스 + 모찌 토핑',
        whyVisit: '프리미엄 레벨의 진정한 하와이안 디저트. 하와이에서 빙수를 먹을 거라면(꼭 드세요) 랜덤 해변 가판대가 아닌 여기서.',
      },
      {
        rank: 5,
        name: '엉클 테츠 치즈케이크',
        badge: '일본 스페셜티',
        location: '알라모아나 센터, 호놀룰루',
        hours: '10:00 AM - 8:00 PM',
        priceRange: '$',
        knownFor: '폭신폭신 흔들리는 일본식 수플레 치즈케이크',
        description: '엉클 테츠는 도쿄에서 온 호놀룰루의 컬트적 인기 디저트 가게입니다. 시그니처 일본식 수플레 치즈케이크는 대부분의 미국인이 아는 진한 뉴욕 스타일과는 완전히 다릅니다 — 가볍고 에어리하며 흔들면 젤리처럼 흔들립니다. 섬세하고 크리미한 속에 부담 없는 단맛. 하루 종일 갓 구운 것이 나옵니다. 홀 하나에 약 $10으로 호놀룰루 최고의 디저트 가성비 중 하나. 알라모아나 센터는 와이키키에서 버스 또는 차로 약 10분. 프로 팁: 살짝 따뜻할 때 먹으면 최고의 식감, 냉장하면 더 진한 커스터드풍.',
        mustTry: '오리지널 흔들리는 치즈케이크 (따뜻할 때)',
        whyVisit: '합리적이고 독특한 일본 디저트 체험. 한국에서도 인기인 수플레 치즈케이크를 하와이에서 만나보세요. 호텔로 가져가 야식으로도 최고.',
      },
      {
        rank: 6,
        name: '레너즈 베이커리',
        badge: '1952년 창업',
        location: '933 Kapahulu Ave, 호놀룰루',
        hours: '5:30 AM - 7:00 PM',
        priceRange: '$',
        knownFor: '하와이에서 가장 전설적인 말라사다 — 포르투갈식 튀김 반죽',
        description: '레너즈는 1952년부터 하와이 말라사다의 골드 스탠다드입니다. 포르투갈식 튀김 반죽 볼은 심플함의 극치: 황금빛 겉면에 기분 좋은 바삭함, 속은 놀랍도록 부드럽고 에어리, 듬뿍 뿌린 설탕과 함께 뜨거운 상태로 제공됩니다. 첫 한입은 행복 그 자체. 필링 버전도 인상적 — 하우피아(코코넛 크림), 커스터드, 도바쉬(초콜릿)가 가장 인기. 카파훌루 애비뉴에 위치하며 와이키키 중심에서 차로 약 10분. 주말엔 줄이 건물을 감쌀 수도 있지만 빠르게 줄어듭니다. 말라사다는 하와이에서 가장 상징적인 디저트입니다.',
        mustTry: '오리지널 슈가 말라사다 + 하우피아 크림 필링',
        whyVisit: '하와이 필수 디저트 체험. 와이키키 밖에서 한 곳만 갈 수 있다면 레너즈를 선택하세요. 말라사다는 뜨거울 때 — 바로 드세요.',
      },
      {
        rank: 7,
        name: '비아 젤라또',
        badge: '가장 크리에이티브',
        location: '1142 12th Ave, 카이무키',
        hours: '12:00 PM - 9:00 PM',
        priceRange: '$$',
        knownFor: '200가지 이상 일일 크리에이티브 맛의 장인 젤라또',
        description: '카이무키의 비아 젤라또는 호놀룰루 진정한 디저트 러버들이 찾는 젤라또 매장입니다. 매일 바뀌는 200가지 이상의 맛으로 대부분의 젤라또 가게가 시도하지 않는 창의적 경계를 넘어섭니다. 고트 치즈 & 무화과, 올리브 오일 & 바다 소금, 타이 티, 타로 마카다미아, 카다몬 로즈 등 독창적인 맛과 피스타치오, 다크 초콜릿 같은 클래식이 함께합니다. 모두 현지 및 프리미엄 수입 재료로 처음부터 수제. 오너는 이탈리아에서 수련한 정통 테크닉. 카이무키는 와이키키에서 약 15분, 호놀룰루 최고의 푸드 지역 중 하나.',
        mustTry: '오늘의 맛을 물어보세요 — 항상 새로운 실험 중',
        whyVisit: '바닐라와 초콜릿 이상을 원하는 젤라또 러버에게. 창의적인 맛은 정말 흥미롭고 품질이 탁월. 카이무키까지 드라이브할 가치 충분.',
      },
      {
        rank: 8,
        name: '제주빙 디저트',
        badge: '베스트 빙수',
        location: '알라모아나 센터, 호놀룰루',
        hours: '10:00 AM - 9:00 PM',
        priceRange: '$$-$$$',
        knownFor: '프리미엄 토핑의 정통 한국 빙수',
        description: '제주빙은 알라모아나 센터에서 정통 한국 빙수 문화를 호놀룰루에 전하고 있습니다. 한국 제주도의 이름을 딴 이곳은 SNS를 뜨겁게 달군 한국식 빙수 디저트 전문점. 믿을 수 없이 곱게 간 눈같은 우유 얼음(일반 물 얼음이 아닌)에 신선한 과일, 팥, 떡, 연유, 스페셜 토핑을 듬뿍 올립니다. 인절미 빙수와 망고 빙수가 시그니처 — 2인이 나눠 먹기 충분한 크기, 아름다운 프레젠테이션, 놀라운 리프레싱함. 우유 얼음의 식감은 실키하고 거의 크리미해서, 서양식 크런치한 아이스와는 완전 별개. 1그릇 $15~20으로 가장 저렴하진 않지만 양이 충분합니다. 와이키키에서 알라모아나 센터까지 약 10분. 한국의 빙수 카페 분위기 그대로를 하와이에서 경험할 수 있습니다.',
        mustTry: '인절미 빙수 또는 망고 빙수',
        whyVisit: '호놀룰루에서 가장 정통 한국 빙수 체험. K-디저트 팬이거나 빙수 트렌드에 관심 있다면 제주빙이 진짜. 나눠 먹기 완벽.',
      },
    ],
    comparison: {
      title: '와이키키 디저트 종류: 비교 가이드',
      subtitle: '어떤 하와이안 디저트를 먼저 시도할지 고민되세요? 비교해 드립니다.',
      headers: ['특징', '셰이브 아이스', '빙수', '모찌 도넛', '말라사다', '아사이 볼'],
      rows: [
        ['식감', '폭신, 눈같은', '실키, 크리미한 얼음', '쫄깃 & 바삭', '폭신 & 부드러움', '부드럽고 진한'],
        ['온도', '차가움', '차가움', '상온 또는 따뜻', '뜨겁고 갓 튀긴', '차가움'],
        ['추천', '더운 오후에', '친구와 나눠 먹기', '간식이나 디저트', '아침이나 간식', '건강한 디저트'],
        ['기원', '하와이 전통', '한국', '일본-하와이 퓨전', '포르투갈-하와이', '브라질-하와이'],
        ['유제품 프리?', '보통 Yes', 'No (우유 얼음)', '보통 Yes', 'No', 'Yes'],
        ['가격대', '$5 - $10', '$15 - $20', '$3.50 - $5', '$2 - $4', '$10 - $14'],
        ['추천 매장', '아일랜드 빈티지', '코나커피도넛', '코나커피도넛', '레너즈 베이커리', '코나커피도넛'],
      ],
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        {
          q: '와이키키에서 가장 맛있는 디저트는?',
          a: '와이키키 베스트 디저트로는 칼라카우아 애비뉴 코나커피도넛의 모찌 도넛과 빙수, 로열 하와이안 센터 아일랜드 빈티지의 셰이브 아이스, 바난의 프로즌 바나나 소프트서브, 헨리스 플레이스의 젤라또가 있습니다. 말라사다는 와이키키에서 10분 거리 카파훌루 애비뉴의 레너즈 베이커리가 필수. 하와이안, 일본, 한국 등 다양한 스타일을 즐길 수 있습니다.',
        },
        {
          q: '와이키키에서 밤에 디저트 먹을 곳은?',
          a: '저녁 디저트는 칼라카우아 애비뉴 코나커피도넛(밤 9시까지)에서 모찌 도넛, 빙수, 아사이 볼. 비치 워크의 헨리스 플레이스는 밤 10시까지 젤라또. 로열 하와이안 센터의 아일랜드 빈티지 셰이브 아이스는 밤 9시까지. 대부분 베이커리는 일찍 닫으므로 이곳들이 도보 거리 최고의 야간 디저트 옵션.',
        },
        {
          q: '하와이에서 가장 인기 있는 디저트는?',
          a: '셰이브 아이스가 하와이에서 가장 상징적인 디저트로 일본인 이민 노동자에 뿌리를 두고 있습니다. 말라사다(포르투갈 튀김 반죽)가 두 번째. 모찌 도넛(일본-하와이 퓨전)과 아사이 볼도 최근 큰 인기. 와이키키 주변에서 모두 맛볼 수 있습니다.',
        },
        {
          q: '와이키키에서 한국 디저트를 먹을 수 있나요?',
          a: '네! 한국 빙수는 와이키키 칼라카우아 애비뉴의 코나커피도넛에서 망고, 인절미 등의 맛으로 즐길 수 있습니다. 전문적인 빙수 체험이라면 알라모아나 센터(와이키키에서 10분)의 제주빙이 정통 한국식 빙수를 프리미엄 토핑으로 제공합니다. 한국의 디저트 카페 문화를 하와이에서 만나보세요.',
        },
        {
          q: '와이키키에서 가장 저렴한 디저트는?',
          a: '가성비 디저트로는 레너즈 베이커리 말라사다가 개당 약 $2부터. 엉클 테츠 치즈케이크는 알라모아나 센터에서 홀 약 $10. 코나커피도넛 모찌 도넛은 $3.50부터. 가장 경제적으로 즐기려면 레너즈 말라사다 반 다스를 사거나 빙수를 2인이서 나눠 먹는 것을 추천.',
        },
      ],
    },
    cta: {
      title: '코나커피도넛에서 달콤한 시간을',
      address: '2142 Kalakaua Ave, 와이키키',
      text: '모찌 도넛, 말라사다, 빙수, 아사이 볼 — 모두 프리미엄 100% 코나 커피와 함께. 와이키키 비치에서 가까운 곳, 매일 오전 7시 ~ 오후 9시.',
      menuButton: '전체 메뉴 보기',
      directionsButton: '길찾기',
    },
  },
  zh: {
    hero: {
      title: '2026年威基基最佳甜点',
      subtitle: '不可错过的甜蜜好去处',
      date: '2026年4月更新',
      readTime: '10分钟阅读',
    },
    intro: {
      text: '威基基不仅仅是海滩和日落的代名词——它已悄然成为夏威夷最佳甜点目的地之一。从传统的夏威夷马拉萨达到韩国冰沙，从日式麻糬甜甜圈到热带巴西莓碗，这里的甜点场景可以与任何美食大城市相媲美。无论您是在卡拉卡瓦大道餐厅用完晚餐后，还是冲浪后想吃点甜的，本指南涵盖了2026年威基基及周边8家最佳甜点店。我们包含了价格、必尝项目以及每个地方的独特之处——让您少花时间搜索"附近甜点"，多花时间享受美味。',
    },
    shops: [
      {
        rank: 1,
        name: '科纳咖啡甜甜圈',
        badge: '综合最佳',
        location: '2142 Kalakaua Ave, 威基基',
        hours: '每天 7:00 AM - 9:00 PM',
        priceRange: '$$',
        knownFor: '麻糬甜甜圈、马拉萨达、冰沙、巴西莓碗配100%科纳咖啡',
        description: '如果您想在一个地方品尝所有类型的甜点，这里就是最佳选择。科纳咖啡甜甜圈是威基基最新的咖啡馆，也是卡拉卡瓦大道上唯一可以一站式品尝MOCHILAND麻糬甜甜圈、新鲜马拉萨达、韩式冰沙和热带巴西莓碗的地方。麻糬甜甜圈采用优质米粉制成的招牌八球形状，外酥里糯。口味轮换12种以上，包括紫薯、抹茶、黑芝麻、芒果和季节限定。马拉萨达每天早晨炸至金黄蓬松，有椰子奶油、百香果蛋奶和肉桂糖等多种口味。冰沙是一座细腻刨冰山，顶部放满新鲜水果、麻糬和红豆——非常适合在炎热的威基基午后分享。搭配来自檀香山咖啡的优质100%科纳咖啡，享受完整体验。咖啡馆距离威基基海滩仅几步之遥，是海滩归来或晚餐后的理想甜点目的地。',
        mustTry: '紫薯麻糬甜甜圈 + 芒果冰沙套餐',
        whyVisit: '威基基唯一在一个地点提供麻糬甜甜圈、马拉萨达、冰沙和巴西莓碗的地方。无论您想要嚼劲、冰爽、水果味还是油炸，科纳咖啡甜甜圈都能满足。科纳咖啡的搭配提升每一款甜点。距海滩几步，营业至晚上9点——完美的傍晚甜食之选。',
        menuLinks: true,
      },
      {
        rank: 2,
        name: 'Banan',
        badge: '最健康之选',
        location: '2301 Kalakaua Ave, 威基基（多个分店）',
        hours: '8:00 AM - 9:00 PM',
        priceRange: '$$',
        knownFor: '用瓦胡岛本地香蕉制作的冷冻香蕉软冰淇淋',
        description: 'Banan利用瓦胡岛本地种植的香蕉制成冷冻软冰淇淋，在威基基甜点界独树一帜。使用原本会被浪费的本地香蕉，搅拌成无乳制品却惊人地浓郁可口的软冰淇淋。口感介于冰淇淋和冰糕之间——顺滑、冰凉，无添加糖也有天然甜味。配料包括本地格兰诺拉、可可碎、蜂蜜和百香果等。威基基海滩沙滩上的原始店铺拥有无可比拟的海景，是岛上最适合拍照打卡的甜点体验之一。100%植物基，深受素食者和注重健康的游客欢迎。',
        mustTry: '经典款（香蕉、格兰诺拉、蜂蜜、可可碎）',
        whyVisit: '海滨美景伴随的无负罪感热带甜品体验。想要甜蜜冰凉又不想冰淇淋那么腻的完美选择。',
      },
      {
        rank: 3,
        name: 'Henry\'s Place',
        badge: '最佳冰淇淋',
        location: '234 Beach Walk, 威基基',
        hours: '11:00 AM - 10:00 PM',
        priceRange: '$$',
        knownFor: '夏威夷热带口味的手工意式冰淇淋',
        description: 'Henry\'s Place将意大利冰淇淋传统与夏威夷风味完美融合。每天少量制作的冰淇淋使用优质原料，热带口味是其与大陆冰淇淋店的最大差异——椰子奶油、话梅芒果、科纳咖啡、夏威夷果和百香果雪芭等，冻结了夏威夷的味道。质地浓密、细腻、极其顺滑。Beach Walk上温馨的店面氛围，非常适合威基基夜间散步时光顾。',
        mustTry: '科纳咖啡冰淇淋或椰子奶油',
        whyVisit: '威基基地区最好的冰淇淋，独特的热带口味其他地方找不到。适合悠闲的傍晚甜品散步。',
      },
      {
        rank: 4,
        name: 'Island Vintage Shave Ice',
        badge: '夏威夷经典',
        location: '2301 Kalakaua Ave（皇家夏威夷中心）',
        hours: '10:00 AM - 9:00 PM',
        priceRange: '$$',
        knownFor: '有机糖浆的高级夏威夷刨冰',
        description: '威基基甜点指南少不了夏威夷刨冰，Island Vintage做得正宗。不同于旅游陷阱的廉价冰沙，这里的刨冰质地如雪般细腻——几乎在舌尖融化。糖浆由真正的水果和有机蔗糖制成，不含人工香料。底部加一球冰淇淋是关键，能在杯底制造奶油般的惊喜。话梅芒果、百香果和彩虹是热门搭配。还有甜红豆、麻糬和新鲜水果作为配料。位于皇家夏威夷中心内，容易找到且品质始终如一。',
        mustTry: '高级刨冰配冰淇淋底和麻糬',
        whyVisit: '高级水准的经典夏威夷甜点体验。如果要在夏威夷尝试刨冰（强烈建议），请来这里而不是随便的海滩摊位。',
      },
      {
        rank: 5,
        name: 'Uncle Tetsu芝士蛋糕',
        badge: '日式特色',
        location: '阿拉莫阿纳中心, 檀香山',
        hours: '10:00 AM - 8:00 PM',
        priceRange: '$',
        knownFor: '日式摇摇舒芙蕾芝士蛋糕',
        description: 'Uncle Tetsu是从东京引进的、在檀香山拥有狂热粉丝的甜品店。招牌产品是日式舒芙蕾芝士蛋糕——轻盈、蓬松、摇晃时像果冻一样抖动，与大多数美国人熟知的浓厚纽约风格完全不同。每个蛋糕都有精致的奶油内芯和微妙的甜度。全天不断烤出新鲜的金色蛋糕。整个蛋糕约$10，是檀香山性价比最高的甜点之一。阿拉莫阿纳中心离威基基约10分钟车程。专业提示：稍微温热时吃口感最佳，冷藏后则是更浓郁的布丁口感。',
        mustTry: '经典摇摇芝士蛋糕（趁温热吃）',
        whyVisit: '实惠而独特的日式甜点体验。光是"摇摇"的效果就值得一去。非常适合带回酒店当宵夜。',
      },
      {
        rank: 6,
        name: 'Leonard\'s Bakery',
        badge: '1952年创立',
        location: '933 Kapahulu Ave, 檀香山',
        hours: '5:30 AM - 7:00 PM',
        priceRange: '$',
        knownFor: '夏威夷最传奇的马拉萨达——葡萄牙炸面团',
        description: '自1952年以来，Leonard\'s一直是夏威夷马拉萨达的金标准。他们的葡萄牙风格炸面团球是极简主义的典范：金棕色外皮带有令人满意的脆感，内部不可思议地柔软蓬松，裹上大量白砂糖。热腾腾端上来，第一口就是纯粹的幸福。填心款同样出色——椰子奶油、蛋奶和巧克力最受欢迎。位于卡帕胡卢大道，距威基基中心约10分钟车程。周末排队经常绕建筑物一圈，但队伍移动很快，绝对值得等待。',
        mustTry: '原味砂糖马拉萨达 + 椰子奶油馅',
        whyVisit: '夏威夷必做甜点体验。如果只能去威基基外一个地方，请选Leonard\'s。马拉萨达趁热吃——立刻享用。',
      },
      {
        rank: 7,
        name: 'Via Gelato',
        badge: '最具创意',
        location: '1142 12th Ave, Kaimuki',
        hours: '12:00 PM - 9:00 PM',
        priceRange: '$$',
        knownFor: '200多种轮换创意口味的手工冰淇淋',
        description: 'Kaimuki的Via Gelato是檀香山认真的甜品爱好者的冰淇淋圣地。每天轮换200多种口味，创意远超大多数冰淇淋店。羊奶芝士配无花果、橄榄油配海盐、泰式奶茶、芋头夏威夷果、豆蔻玫瑰等独创口味与开心果、黑巧克力等经典并存。全部使用本地和进口优质原料从零手工制作。老板在意大利受训，将正宗技术与大胆创意完美融合。Kaimuki距威基基约15分钟，本身也是檀香山最佳美食区之一。',
        mustTry: '问问今日特色口味——他们总在尝试新东西',
        whyVisit: '献给追求超越香草和巧克力的冰淇淋爱好者。创意口味令人兴奋且品质卓越。值得驱车前往Kaimuki。',
      },
      {
        rank: 8,
        name: 'Jejubing甜品',
        badge: '最佳冰沙',
        location: '阿拉莫阿纳中心, 檀香山',
        hours: '10:00 AM - 9:00 PM',
        priceRange: '$$-$$$',
        knownFor: '优质配料的正宗韩式冰沙（刨冰甜点）',
        description: 'Jejubing在阿拉莫阿纳中心将正宗韩国冰沙文化带到檀香山。以韩国济州岛命名，专注于在社交媒体上火爆的韩式刨冰甜点。他们的冰沙使用极其细腻的雪般牛奶刨冰（不是普通的冻水），顶部放满新鲜水果、红豆、麻糬、炼乳和特色配料。黄豆粉麻糬冰沙和芒果冰沙是招牌——足够两人分享，外观精美，令人难以置信地清爽。牛奶刨冰的口感如丝般顺滑近乎奶油般，与西式冰品完全不同。每碗$15-20不算最便宜，但份量十足。从威基基到阿拉莫阿纳中心约10分钟。',
        mustTry: '黄豆粉麻糬冰沙或芒果冰沙',
        whyVisit: '檀香山最正宗的韩式冰沙体验。如果您是K-甜点爱好者或对冰沙趋势感兴趣，Jejubing是正宗之选。非常适合分享。',
      },
    ],
    comparison: {
      title: '威基基甜点类型：快速比较',
      subtitle: '不确定先尝试哪种夏威夷甜点？看看它们的对比。',
      headers: ['特征', '刨冰', '冰沙', '麻糬甜甜圈', '马拉萨达', '巴西莓碗'],
      rows: [
        ['口感', '蓬松如雪', '丝滑奶油般冰', '嚼劲十足且酥脆', '松软柔嫩', '顺滑浓稠'],
        ['温度', '冰凉', '冰凉', '常温或温热', '热乎新鲜', '冰凉'],
        ['适合', '炎热午后', '与朋友分享', '零食或甜点', '早餐或零食', '健康甜品'],
        ['起源', '夏威夷传统', '韩国', '日式夏威夷融合', '葡式夏威夷', '巴西夏威夷'],
        ['无乳制品?', '通常是', '否（牛奶冰）', '通常是', '否', '是'],
        ['价格范围', '$5 - $10', '$15 - $20', '$3.50 - $5', '$2 - $4', '$10 - $14'],
        ['推荐店铺', 'Island Vintage', '科纳咖啡甜甜圈', '科纳咖啡甜甜圈', 'Leonard\'s', '科纳咖啡甜甜圈'],
      ],
    },
    faq: {
      title: '常见问题',
      items: [
        {
          q: '威基基最好的甜点是什么？',
          a: '威基基最佳甜点包括卡拉卡瓦大道科纳咖啡甜甜圈的麻糬甜甜圈和冰沙、皇家夏威夷中心Island Vintage的刨冰、Banan的冷冻香蕉软冰淇淋和Henry\'s Place的冰淇淋。马拉萨达首推威基基10分钟车程的卡帕胡卢大道Leonard\'s Bakery。每个地方提供不同风格——夏威夷、日式、韩式应有尽有。',
        },
        {
          q: '威基基晚上哪里有甜点？',
          a: '傍晚甜点，卡拉卡瓦大道的科纳咖啡甜甜圈（营业至晚9点）提供麻糬甜甜圈、冰沙和巴西莓碗。Beach Walk的Henry\'s Place有冰淇淋营业至晚10点。皇家夏威夷中心的Island Vintage Shave Ice营业至晚9点。大多数面包店关门较早，这些是步行距离内的最佳夜间甜点选择。',
        },
        {
          q: '最受欢迎的夏威夷甜点是什么？',
          a: '刨冰可以说是最具标志性的夏威夷甜点，起源于日本移民种植园工人。马拉萨达（葡萄牙炸面团）紧随其后。麻糬甜甜圈（日式夏威夷融合）和巴西莓碗等新成员也广受欢迎。在威基基及周边都能品尝到这些甜点。',
        },
        {
          q: '威基基有韩式甜点吗？',
          a: '有！韩式冰沙在威基基卡拉卡瓦大道的科纳咖啡甜甜圈供应，有芒果和黄豆粉麻糬等口味。如需专门的冰沙体验，阿拉莫阿纳中心（距威基基10分钟）的Jejubing专营正宗韩式冰沙，配料丰富份量大，非常适合分享。',
        },
        {
          q: '威基基最便宜的甜点选择是什么？',
          a: '预算友好的甜点首选Leonard\'s Bakery的马拉萨达，约$2一个起。Uncle Tetsu整个芝士蛋糕约$10。科纳咖啡甜甜圈的麻糬甜甜圈$3.50起。最划算的方式：买半打Leonard\'s马拉萨达分享，或两人分一份冰沙。',
        },
      ],
    },
    cta: {
      title: '在科纳咖啡甜甜圈满足您的味蕾',
      address: '2142 Kalakaua Ave, 威基基',
      text: '麻糬甜甜圈、马拉萨达、冰沙、巴西莓碗——全部搭配优质100%科纳咖啡。距威基基海滩几步之遥，每天上午7点至晚上9点营业。',
      menuButton: '查看完整菜单',
      directionsButton: '获取路线',
    },
  },
};

// BlogPosting JSON-LD Schema
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Best Desserts in Waikiki 2026: Sweet Spots You Can\'t Miss',
  description:
    'Discover the 8 best desserts in Waikiki for 2026. From mochi donuts and bingsu to shaved ice and gelato — the ultimate guide to dessert near me in Waikiki.',
  image: 'https://www.konacoffeedonut.com/og-image.jpg',
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
  datePublished: '2026-04-14',
  dateModified: '2026-04-14',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/en/blog/best-desserts-waikiki',
  },
  keywords:
    'best desserts waikiki, dessert near me waikiki, dessert in waikiki, best sweets waikiki, where to get dessert in waikiki, shaved ice waikiki, bingsu waikiki, mochi donuts waikiki',
  wordCount: 1300,
  inLanguage: 'en-US',
};

// FAQPage JSON-LD Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: content.en.faq.items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-amber-900/20 last:border-b-0"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 px-2 text-left hover:bg-amber-900/5 transition-colors rounded-lg"
      >
        <span className="text-lg font-semibold text-amber-100 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-amber-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-amber-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="px-2 pb-5"
        >
          <p className="text-gray-300 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function BestDessertsWaikikiPage() {
  const params = useParams();
  const locale = (params?.locale as Locale) || 'en';
  const t = content[locale] || content.en;

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-[#0a0a0a]">
        <SubpageNav locale={locale} />

        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0d08] via-[#0d0d0d] to-[#0a0d1a]" />
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 30% 40%, rgba(245,158,11,0.15) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 flex items-center justify-center gap-3 text-amber-300/80 text-sm"
            >
              <span>{t.hero.date}</span>
              <span className="w-1 h-1 rounded-full bg-amber-400" />
              <span>{t.hero.readTime}</span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-amber-200/90 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.hero.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 md:py-16 px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t.intro.text}
            </p>
          </motion.div>
        </section>

        {/* Ranked Dessert Spots */}
        <section className="py-8 md:py-12 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {t.shops.map((shop, index) => (
              <motion.article
                key={index}
                className={`rounded-2xl overflow-hidden shadow-lg ${
                  shop.rank === 1
                    ? 'border-2 border-amber-500/60 bg-gradient-to-br from-amber-950/40 to-[#1a1208]'
                    : 'border border-gray-800 bg-[#111111]'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {/* Shop Header */}
                <div
                  className={`px-6 py-4 flex items-center justify-between ${
                    shop.rank === 1
                      ? 'bg-gradient-to-r from-amber-700 to-orange-600 text-white'
                      : 'bg-gradient-to-r from-[#1a1a1a] to-[#222222] text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold opacity-80">#{shop.rank}</span>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold">{shop.name}</h2>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/15 text-white">
                    {shop.badge}
                  </span>
                </div>

                {/* Shop Details */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-amber-500" />
                      <span>{shop.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span>{shop.hours}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <DollarSign className="w-4 h-4 text-amber-500" />
                      <span>{shop.priceRange}</span>
                    </div>
                  </div>

                  {/* Known For */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400">
                      <Award className="w-4 h-4" />
                      {shop.knownFor}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-4">{shop.description}</p>

                  {/* Must Try */}
                  <div className="bg-amber-950/30 border border-amber-900/30 rounded-xl p-4 mb-4">
                    <div className="flex items-start gap-2">
                      <Heart className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-amber-200">Must-Try: </span>
                        <span className="text-gray-300">{shop.mustTry}</span>
                      </div>
                    </div>
                  </div>

                  {/* Why Visit */}
                  <p className="text-gray-400 text-sm italic">{shop.whyVisit}</p>

                  {/* Menu Links for Kona Coffee Donut */}
                  {shop.menuLinks && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link
                        href={`/${locale}/menu`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors underline decoration-amber-700 underline-offset-2"
                      >
                        <Coffee className="w-4 h-4" />
                        Full Menu
                      </Link>
                      <Link
                        href={`/${locale}/menu/mochi-donuts`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors underline decoration-amber-700 underline-offset-2"
                      >
                        Mochi Donuts
                      </Link>
                      <Link
                        href={`/${locale}/menu/malasada`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors underline decoration-amber-700 underline-offset-2"
                      >
                        Malasada
                      </Link>
                      <Link
                        href={`/${locale}/menu/bingsu`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors underline decoration-amber-700 underline-offset-2"
                      >
                        Bingsu
                      </Link>
                      <Link
                        href={`/${locale}/menu/acai-bowl`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors underline decoration-amber-700 underline-offset-2"
                      >
                        Acai Bowl
                      </Link>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 md:py-16 px-4 bg-[#111111]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {t.comparison.title}
              </h2>
              <p className="text-gray-400">{t.comparison.subtitle}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="overflow-x-auto"
            >
              <table className="w-full bg-[#1a1a1a] rounded-2xl shadow-lg overflow-hidden border border-gray-800">
                <thead>
                  <tr className="bg-gradient-to-r from-amber-800 to-amber-700 text-white">
                    {t.comparison.headers.map((header, i) => (
                      <th
                        key={i}
                        className="px-4 py-3 text-left text-sm font-semibold"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.comparison.rows.map((row, i) => (
                    <tr
                      key={i}
                      className={`${
                        i % 2 === 0 ? 'bg-[#1a1a1a]' : 'bg-[#151515]'
                      } border-b border-gray-800 last:border-b-0`}
                    >
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={`px-4 py-3 text-sm ${
                            j === 0
                              ? 'font-semibold text-amber-300'
                              : 'text-gray-300'
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t.faq.title}
            </motion.h2>
            <div className="bg-[#141414] rounded-2xl shadow-lg p-6 border border-gray-800">
              {t.faq.items.map((item, index) => (
                <FAQItem key={index} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-amber-800 via-orange-700 to-amber-800 text-white">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-8 h-8 text-amber-200 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{t.cta.title}</h2>
            <p className="text-lg text-amber-100 mb-2 flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              {t.cta.address}
            </p>
            <p className="text-amber-100 mb-8 max-w-xl mx-auto">{t.cta.text}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/menu`}
                className="inline-block bg-white text-amber-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-100 transition-colors"
              >
                {t.cta.menuButton}
              </Link>
              <a
                href="https://maps.google.com/?q=2142+Kalakaua+Ave+Honolulu+HI+96815"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1a1a1a] border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-900/50 transition-colors"
              >
                {t.cta.directionsButton}
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
