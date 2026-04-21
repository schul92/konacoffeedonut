'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  DollarSign,
  Star,
  Coffee,
  ChevronDown,
  ChevronUp,
  Award,
  Camera,
  Utensils,
  Heart,
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
      title: 'Best Donuts in Waikiki 2026',
      subtitle: "A Local's Guide to the Sweetest Spots",
      date: 'Updated April 2026',
      readTime: '8 min read',
    },
    intro: {
      text: "As the team behind Kona Coffee Donut on Kalakaua Avenue, we know Waikiki's donut scene inside and out. We've spent years tasting, comparing, and perfecting our own recipes alongside some of the island's most iconic bakeries. Whether you're craving chewy mochi donuts, pillowy malasadas, or a classic glazed ring, Waikiki and greater Honolulu have world-class options. Here's our honest guide to the 7 best donut spots you need to visit in 2026.",
    },
    shops: [
      {
        rank: 1,
        name: 'Kona Coffee Donut',
        badge: "Editor's Pick",
        location: '2142 Kalakaua Ave, Waikiki',
        hours: '7:00 AM - 9:00 PM Daily',
        priceRange: '$$',
        knownFor: 'Mochi donuts, malasadas, and premium 100% Kona coffee',
        description:
          "Our home base and Waikiki's newest must-visit cafe. We've partnered with MOCHILAND to bring you the chewiest, crispiest mochi donuts on the island, paired with authentic 100% Kona coffee from Honolulu Coffee. Each mochi donut features the signature eight-ball shape with a satisfying crispy exterior and impossibly chewy center made from premium rice flour. Our malasadas are fried fresh every morning \u2014 golden, pillowy, and dusted in sugar or filled with haupia cream, lilikoi custard, or Nutella.",
        mustTry: 'Ube Mochi Donut + Kona Coffee Latte combo',
        whyVisit:
          "The only spot in Waikiki where you can pair artisan MOCHILAND mochi donuts with genuine premium Kona coffee. We're steps from the beach, making it the perfect first stop before a morning on the sand. With 12+ rotating mochi donut flavors including Matcha, Black Sesame, Mango, and seasonal specials, there's always something new to try.",
        menuLinks: true,
      },
      {
        rank: 2,
        name: 'Liliha Bakery',
        badge: 'Local Legend',
        location: '515 N Kuakini St, Honolulu (+ Ala Moana)',
        hours: '6:00 AM - 8:00 PM',
        priceRange: '$',
        knownFor: 'Coco Puffs, poi mochi donuts, 70+ year history',
        description:
          "A Honolulu institution since 1950, Liliha Bakery is where locals have gone for generations. Their famous Coco Puffs \u2014 chocolate-topped choux pastry filled with Chantilly cream \u2014 are legendary. The poi mochi donuts incorporate taro into the mochi batter for a uniquely Hawaiian twist with a beautiful purple hue and subtle sweetness. The original Liliha location has a nostalgic diner counter that feels like stepping back in time.",
        mustTry: 'Coco Puff + Poi Mochi Donut',
        whyVisit:
          "A piece of Honolulu history. The Ala Moana location is more accessible from Waikiki, but the original on Kuakini Street has unbeatable charm. Worth the 15-minute drive for the full experience.",
      },
      {
        rank: 3,
        name: "Leonard's Bakery",
        badge: 'Since 1952',
        location: '933 Kapahulu Ave, Honolulu',
        hours: '5:30 AM - 7:00 PM',
        priceRange: '$',
        knownFor: "Hawaii's most famous malasadas since 1952",
        description:
          "No list of Hawaiian donuts is complete without Leonard's. This Kapahulu Avenue landmark has been frying up Portuguese-style malasadas for over 70 years. The original sugar-coated malasada is perfection: crispy on the outside, cloud-soft inside, and served piping hot. Their filled malasadas come in flavors like haupia (coconut cream), custard, and dobash (chocolate). The line often wraps around the building, especially on weekends, but it moves fast.",
        mustTry: 'Original Sugar Malasada + Haupia Cream Malasada',
        whyVisit:
          "A mandatory Oahu experience. Just a 10-minute drive from Waikiki via Kapahulu Avenue. Go early morning for the shortest wait and the freshest batch.",
      },
      {
        rank: 4,
        name: 'Holey Grail Donuts',
        badge: 'Best Vegan',
        location: 'Ward Village, Honolulu',
        hours: '8:00 AM - 2:00 PM',
        priceRange: '$$$',
        knownFor: 'Taro-based, vegan, organic donuts',
        description:
          "Holey Grail brought the health-conscious donut revolution to Hawaii. Every donut starts with a taro base, making them naturally vegan and gluten-friendly. The texture is dense yet tender, almost cake-like, with vibrant natural coloring from the taro. Flavors rotate daily and lean creative \u2014 think lilikoi glaze, guava cream, and ube coconut. They're made to order, so you'll watch your donuts come together fresh. Originally from Kauai's food truck scene, their Ward Village location brings the experience to Honolulu.",
        mustTry: 'Taro Donut with Lilikoi Glaze',
        whyVisit:
          "The best option for vegan, plant-based, or health-conscious visitors. The made-to-order experience is worth the wait. Ward Village is a quick Uber or 15-minute bus from Waikiki.",
      },
      {
        rank: 5,
        name: "Penny's Malasadas",
        badge: 'Waikiki Convenient',
        location: 'Royal Hawaiian Center, Waikiki',
        hours: '10:00 AM - 9:00 PM',
        priceRange: '$$',
        knownFor: 'Malasadas made with Hawaiian cane sugar, right in Waikiki',
        description:
          "Located inside the Royal Hawaiian Center, Penny's makes getting great malasadas in Waikiki effortless. Their dough is made with locally sourced Hawaiian cane sugar, giving the malasadas a subtly richer sweetness compared to standard recipes. They offer both classic sugar-dusted and filled varieties. The convenience factor is unbeatable \u2014 you can grab malasadas between shopping or on your way back from the beach.",
        mustTry: 'Hawaiian Cane Sugar Malasada',
        whyVisit:
          "Can't leave Waikiki? Penny's is your best bet for quality malasadas without the drive. Perfect for a quick treat while shopping at Royal Hawaiian Center.",
      },
      {
        rank: 6,
        name: 'Pipeline Bakeshop & Creamery',
        badge: 'Most Creative',
        location: '3632 Waialae Ave, Kaimuki',
        hours: '7:00 AM - 6:00 PM',
        priceRange: '$$',
        knownFor: 'Gourmet donuts, unique rotating flavors, ice cream',
        description:
          "Pipeline brings mainland gourmet donut culture to Hawaii with an island twist. Their yeast-raised donuts are large, fluffy, and topped with creative flavor combinations that change regularly. Think crème brûlée, poi, Fruity Pebbles, and matcha white chocolate. They also do excellent ice cream, and you can get a donut ice cream sandwich that's the stuff of Instagram dreams. The Kaimuki neighborhood is a foodie destination in its own right.",
        mustTry: 'Crème Brûlée Donut or any seasonal special',
        whyVisit:
          "For donut lovers who want something beyond the classics. The Kaimuki food scene is worth exploring, and Pipeline is the anchor. About 20 minutes from Waikiki.",
      },
      {
        rank: 7,
        name: 'Donut King',
        badge: 'Classic Style',
        location: 'Multiple locations, Honolulu',
        hours: '5:00 AM - sold out (usually by noon)',
        priceRange: '$',
        knownFor: 'Family-owned, yeast-based, classic American donut styles',
        description:
          "Donut King is the no-frills neighborhood donut shop that every city needs. Family-owned and operated, they specialize in classic yeast-raised donuts \u2014 glazed, chocolate frosted, maple bars, and old-fashioned cake donuts. Everything is made from scratch in small batches. Prices are some of the lowest you'll find, and the quality punches well above its weight. They open early and sell out fast, so set your alarm.",
        mustTry: 'Glazed Yeast Donut + Maple Bar',
        whyVisit:
          "For the classic American donut experience at a great price. Get there early \u2014 once they're sold out, they're done for the day.",
      },
    ],
    comparison: {
      title: 'How to Choose: Mochi vs. Malasada vs. Regular Donut',
      subtitle: "Not sure which style to try? Here's a quick breakdown.",
      headers: ['Feature', 'Mochi Donut', 'Malasada', 'Regular Donut'],
      rows: [
        ['Texture', 'Chewy & crispy', 'Pillowy & soft', 'Fluffy or cakey'],
        ['Origin', 'Japanese-Hawaiian fusion', 'Portuguese-Hawaiian', 'American classic'],
        ['Shape', 'Eight-ball ring', 'Round ball (no hole)', 'Ring or filled'],
        ['Best For', 'Unique texture lovers', 'Traditional experience', 'Classic donut fans'],
        ['Gluten-Free Options', 'Some (rice flour base)', 'Rarely', 'Rarely'],
        ['Price Range', '$3.50 - $5', '$2 - $4', '$1.50 - $4'],
        ['Where to Try', 'Kona Coffee Donut', "Leonard's Bakery", 'Donut King'],
      ],
    },
    proTips: {
      title: 'Pro Tips for Donut Lovers in Waikiki',
      tips: [
        {
          icon: 'clock',
          title: 'Go Early Morning',
          text: "Most bakeries are at their best between 7-9 AM when everything is freshest. Leonard's and Donut King sell out early, so don't sleep in.",
        },
        {
          icon: 'camera',
          title: 'Best Instagram Spots',
          text: "Mochi donuts from Kona Coffee Donut photograph beautifully with the eight-ball shape and colorful glazes. Holey Grail's taro donuts have that natural purple aesthetic. Pipeline's over-the-top toppings are made for social media.",
        },
        {
          icon: 'dollar',
          title: 'Best Value Combos',
          text: "At Kona Coffee Donut, pair a mochi donut with a Kona coffee latte for the best value. Leonard's original malasadas are under $2 each \u2014 get a half-dozen to share.",
        },
        {
          icon: 'utensils',
          title: 'The Perfect Donut Day Itinerary',
          text: "Start at Kona Coffee Donut for mochi donuts and Kona coffee (7 AM), drive to Leonard's for malasadas (9 AM), then finish at Pipeline in Kaimuki for a gourmet lunch donut (11 AM). You'll have tasted the three pillars of Hawaii's donut scene in one morning.",
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'What are the best donuts in Waikiki?',
          a: "The best donuts in Waikiki include mochi donuts from Kona Coffee Donut on Kalakaua Ave, malasadas from Penny's at Royal Hawaiian Center, and for a short drive, Leonard's Bakery and Liliha Bakery are must-visits. Each offers a different style \u2014 mochi, malasada, and classic Hawaiian.",
        },
        {
          q: 'Where can I get mochi donuts in Waikiki?',
          a: "Kona Coffee Donut at 2142 Kalakaua Ave serves MOCHILAND mochi donuts with 12+ flavors including Ube, Matcha, Black Sesame, and seasonal specials. They're made fresh daily with premium rice flour for that signature chewy-crispy texture.",
        },
        {
          q: 'What is the difference between a malasada and a donut?',
          a: "A malasada is a Portuguese-Hawaiian fried dough pastry that's typically ball-shaped with no hole. It's lighter and more pillowy than a traditional donut, coated in sugar, and can be filled with custard, haupia, or chocolate. Traditional donuts are ring-shaped and can be yeast-raised or cake-style.",
        },
        {
          q: 'Are there vegan donuts in Waikiki?',
          a: "Yes! Holey Grail Donuts at Ward Village makes taro-based vegan donuts with organic ingredients. They're about 15 minutes from Waikiki. Kona Coffee Donut also offers select plant-based options \u2014 ask about current vegan flavors.",
        },
        {
          q: 'What time should I go for the best donuts?',
          a: "For the freshest donuts, arrive between 7-9 AM. Kona Coffee Donut opens at 7 AM daily. Leonard's Bakery opens at 5:30 AM and can sell out by early afternoon. Donut King is first-come-first-served and often sells out by noon. Weekend mornings are busiest, so weekday visits mean shorter waits.",
        },
      ],
    },
    cta: {
      title: 'Visit Kona Coffee Donut',
      address: '2142 Kalakaua Ave, Waikiki',
      text: 'Start your Waikiki morning with fresh MOCHILAND mochi donuts and premium 100% Kona coffee. Steps from the beach, open daily at 7 AM.',
      menuButton: 'View Our Full Menu',
      directionsButton: 'Get Directions',
    },
  },
  ja: {
    hero: {
      title: '2026年ワイキキのベストドーナツ',
      subtitle: '地元民が教えるスイートスポットガイド',
      date: '2026年4月更新',
      readTime: '読了8分',
    },
    intro: {
      text: 'カラカウア通りのコナコーヒードーナツのチームとして、私たちはワイキキのドーナツシーンを熟知しています。長年にわたり、島の象徴的なベーカリーと共に試食、比較、そして独自のレシピを磨いてきました。もちもちのモチドーナツ、ふわふわのマラサダ、クラシックなグレーズドドーナツなど、ワイキキと周辺のホノルルには世界クラスの選択肢があります。2026年に訪れるべき7つのベストドーナツスポットをご紹介します。',
    },
    shops: [
      {
        rank: 1,
        name: 'コナコーヒードーナツ',
        badge: '編集者のおすすめ',
        location: '2142 Kalakaua Ave, ワイキキ',
        hours: '毎日 7:00 AM - 9:00 PM',
        priceRange: '$$',
        knownFor: 'モチドーナツ、マラサダ、プレミアム100%コナコーヒー',
        description:
          '私たちのホームベースであり、ワイキキ最新の必訪カフェ。MOCHILANDと提携し、島で最もモチモチでサクサクのモチドーナツを、ホノルルコーヒーの本格100%コナコーヒーと共にお届けします。各モチドーナツは、プレミアム米粉で作られた満足感のあるサクサクの外側と驚くほどモチモチの中心を持つ、シグネチャーの八つ玉形状が特徴です。マラサダは毎朝揚げたて \u2014 黄金色でふわふわ、砂糖をまぶしたり、ハウピアクリーム、リリコイカスタード、ヌテラのフィリングも。',
        mustTry: '紫芋モチドーナツ + コナコーヒーラテ セット',
        whyVisit:
          'ワイキキで唯一、MOCHILANDの職人モチドーナツと本格プレミアムコナコーヒーのペアリングが楽しめるスポット。ビーチからすぐの場所にあり、朝の砂浜散歩の前の完璧な最初の立ち寄り先。抹茶、黒ごま、マンゴー、季節限定など12種類以上のモチドーナツフレーバーがあり、いつでも新しい味に出会えます。',
        menuLinks: true,
      },
      {
        rank: 2,
        name: 'リリハベーカリー',
        badge: 'ローカルレジェンド',
        location: '515 N Kuakini St, ホノルル（+アラモアナ）',
        hours: '6:00 AM - 8:00 PM',
        priceRange: '$',
        knownFor: 'ココパフ、ポイモチドーナツ、70年以上の歴史',
        description:
          '1950年創業のホノルルの名店。有名なココパフ \u2014 シャンティリークリーム入りチョコレートトップのシュー生地 \u2014 は伝説的。ポイモチドーナツはタロイモをモチ生地に練り込んだ、ハワイならではのツイストで美しい紫色と控えめな甘さが特徴。オリジナルのリリハロケーションはノスタルジックなダイナーカウンターがあり、タイムスリップした気分になれます。',
        mustTry: 'ココパフ + ポイモチドーナツ',
        whyVisit:
          'ホノルルの歴史の一部。アラモアナ店はワイキキからアクセスしやすいですが、クアキニストリートのオリジナル店は比類なき魅力。フル体験には15分のドライブの価値あり。',
      },
      {
        rank: 3,
        name: "レナーズベーカリー",
        badge: '1952年創業',
        location: '933 Kapahulu Ave, ホノルル',
        hours: '5:30 AM - 7:00 PM',
        priceRange: '$',
        knownFor: '1952年以来ハワイで最も有名なマラサダ',
        description:
          'ハワイアンドーナツリストにレナーズは欠かせません。カパフル通りのこのランドマークは70年以上ポルトガル式マラサダを揚げ続けています。オリジナルの砂糖まぶしマラサダは完璧：外はサクサク、中はふわふわ、熱々で提供。フィリング入りはハウピア（ココナッツクリーム）、カスタード、ドバシュ（チョコレート）など。特に週末は行列が建物を囲むこともありますが、進みは早いです。',
        mustTry: 'オリジナルシュガーマラサダ + ハウピアクリームマラサダ',
        whyVisit:
          'オアフ島必須の体験。カパフル通り経由でワイキキから車でわずか10分。最短の待ち時間と最も新鮮なバッチのために早朝に行きましょう。',
      },
      {
        rank: 4,
        name: 'ホーリーグレイルドーナツ',
        badge: 'ベストヴィーガン',
        location: 'ワードビレッジ, ホノルル',
        hours: '8:00 AM - 2:00 PM',
        priceRange: '$$$',
        knownFor: 'タロベース、ヴィーガン、オーガニックドーナツ',
        description:
          'ホーリーグレイルはハワイにヘルスコンシャスなドーナツ革命をもたらしました。すべてのドーナツはタロベースで、ナチュラルにヴィーガンでグルテンフレンドリー。タロの自然な色合いが鮮やかで、食感は密度がありながらもしっとり、ほぼケーキのよう。リリコイグレーズ、グアバクリーム、紫芋ココナッツなどクリエイティブなフレーバーが日替わりで登場。注文を受けてから作るので、ドーナツが出来上がる過程を見られます。',
        mustTry: 'タロドーナツ リリコイグレーズ',
        whyVisit:
          'ヴィーガン、プラントベース、ヘルスコンシャスな方に最適。注文を受けてから作る体験は待つ価値あり。ワードビレッジはワイキキからUberまたはバスで15分。',
      },
      {
        rank: 5,
        name: 'ペニーズマラサダ',
        badge: 'ワイキキで便利',
        location: 'ロイヤルハワイアンセンター, ワイキキ',
        hours: '10:00 AM - 9:00 PM',
        priceRange: '$$',
        knownFor: 'ハワイアンケーンシュガー使用のマラサダ、ワイキキ内',
        description:
          'ロイヤルハワイアンセンター内にあるペニーズは、ワイキキで手軽に美味しいマラサダが楽しめます。地元産のハワイアンケーンシュガーを使用した生地は、一般的なレシピよりもほんのりリッチな甘さ。クラシックなシュガーダストとフィリング入りの両方を提供。ショッピングの合間やビーチからの帰りに立ち寄れる便利さは抜群。',
        mustTry: 'ハワイアンケーンシュガーマラサダ',
        whyVisit:
          'ワイキキを離れられない方のベストチョイス。ロイヤルハワイアンセンターでのショッピング中に最適。',
      },
      {
        rank: 6,
        name: 'パイプラインベイクショップ',
        badge: '最もクリエイティブ',
        location: '3632 Waialae Ave, カイムキ',
        hours: '7:00 AM - 6:00 PM',
        priceRange: '$$',
        knownFor: 'グルメドーナツ、ユニークな日替わりフレーバー、アイスクリーム',
        description:
          'パイプラインはメインランドのグルメドーナツカルチャーをハワイアンツイストで展開。イースト発酵のドーナツは大きく、ふわふわで、クレームブリュレ、ポイ、フルーティーペブルズ、抹茶ホワイトチョコレートなど定期的に変わるクリエイティブなフレーバーがトッピング。アイスクリームも優秀で、ドーナツアイスクリームサンドイッチはインスタ映え間違いなし。',
        mustTry: 'クレームブリュレドーナツまたは季節限定スペシャル',
        whyVisit:
          'クラシック以上のものを求めるドーナツ愛好家に。カイムキのフードシーンは探索する価値あり。ワイキキから約20分。',
      },
      {
        rank: 7,
        name: 'ドーナツキング',
        badge: 'クラシックスタイル',
        location: 'ホノルル複数店舗',
        hours: '5:00 AM - 売り切れ次第終了（通常正午まで）',
        priceRange: '$',
        knownFor: '家族経営、イースト発酵、クラシックアメリカンスタイル',
        description:
          'ドーナツキングはどの街にも必要な飾らない地元のドーナツショップ。家族経営で、クラシックなイースト発酵ドーナツ \u2014 グレーズド、チョコレートフロスト、メープルバー、オールドファッションドケーキドーナツが専門。すべて少量バッチで一から手作り。価格は最安レベルながら、品質は価格以上。早朝オープンで完売も早いので、アラームをセットしましょう。',
        mustTry: 'グレーズドイーストドーナツ + メープルバー',
        whyVisit:
          'リーズナブルな価格でクラシックなアメリカンドーナツ体験。早めに行きましょう \u2014 売り切れたらその日は終了。',
      },
    ],
    comparison: {
      title: '選び方ガイド：モチ vs マラサダ vs レギュラードーナツ',
      subtitle: 'どのスタイルを試すか迷っていますか？簡単な比較をどうぞ。',
      headers: ['特徴', 'モチドーナツ', 'マラサダ', 'レギュラードーナツ'],
      rows: [
        ['食感', 'もちもち＆サクサク', 'ふわふわ＆ソフト', 'ふんわりまたはケーキ風'],
        ['起源', '日本×ハワイ融合', 'ポルトガル×ハワイ', 'アメリカンクラシック'],
        ['形状', '八つ玉リング', '丸型（穴なし）', 'リングまたはフィリング入り'],
        ['おすすめ', 'ユニークな食感好き', '伝統的体験を求める方', 'クラシックドーナツファン'],
        ['グルテンフリー', '一部あり（米粉ベース）', 'ほぼなし', 'ほぼなし'],
        ['価格帯', '$3.50 - $5', '$2 - $4', '$1.50 - $4'],
        ['おすすめ店', 'コナコーヒードーナツ', 'レナーズベーカリー', 'ドーナツキング'],
      ],
    },
    proTips: {
      title: 'ワイキキドーナツ愛好家のためのプロのヒント',
      tips: [
        {
          icon: 'clock',
          title: '早朝に行こう',
          text: 'ほとんどのベーカリーは朝7〜9時が最高。レナーズとドーナツキングは早めに売り切れるので、寝坊禁止です。',
        },
        {
          icon: 'camera',
          title: 'ベストインスタスポット',
          text: 'コナコーヒードーナツのモチドーナツは八つ玉形状とカラフルなグレーズで写真映え抜群。ホーリーグレイルのタロドーナツはナチュラルな紫色が美しい。パイプラインの豪華トッピングはSNS向き。',
        },
        {
          icon: 'dollar',
          title: 'ベストバリューコンボ',
          text: 'コナコーヒードーナツではモチドーナツとコナコーヒーラテのペアリングがベストバリュー。レナーズのオリジナルマラサダは1個$2以下 \u2014 シェア用にハーフダースがおすすめ。',
        },
        {
          icon: 'utensils',
          title: '完璧なドーナツデイプラン',
          text: 'コナコーヒードーナツでモチドーナツとコナコーヒー（7 AM）、レナーズでマラサダ（9 AM）、カイムキのパイプラインでグルメランチドーナツ（11 AM）。一朝でハワイのドーナツシーン三本柱を制覇。',
        },
      ],
    },
    faq: {
      title: 'よくある質問',
      items: [
        {
          q: 'ワイキキで一番美味しいドーナツは？',
          a: 'ワイキキのベストドーナツは、カラカウア通りのコナコーヒードーナツのモチドーナツ、ロイヤルハワイアンセンターのペニーズのマラサダ、少し足を延ばせばレナーズベーカリーとリリハベーカリーが必訪。それぞれモチ、マラサダ、クラシックハワイアンと異なるスタイルが楽しめます。',
        },
        {
          q: 'ワイキキでモチドーナツはどこで食べられますか？',
          a: '2142 Kalakaua Aveのコナコーヒードーナツでは、紫芋、抹茶、黒ごま、季節限定など12種類以上のMOCHILANDモチドーナツを提供。プレミアム米粉を使い毎日新鮮に作られる、シグネチャーのもちもちサクサク食感。',
        },
        {
          q: 'マラサダとドーナツの違いは？',
          a: 'マラサダはポルトガル系ハワイアンの揚げ生地ペストリーで、一般的にボール状で穴がありません。伝統的なドーナツよりも軽くふわふわで、砂糖をまぶし、カスタード、ハウピア、チョコレートなどのフィリングも。伝統的なドーナツはリング状で、イースト発酵またはケーキスタイル。',
        },
        {
          q: 'ワイキキにヴィーガンドーナツはありますか？',
          a: 'あります！ワードビレッジのホーリーグレイルドーナツがタロベースのヴィーガンドーナツをオーガニック素材で提供。ワイキキから約15分。コナコーヒードーナツも一部プラントベースオプションあり \u2014 現在のヴィーガンフレーバーについてお問い合わせください。',
        },
        {
          q: 'ベストなドーナツを食べるには何時に行くべき？',
          a: '最も新鮮なドーナツには朝7〜9時の到着がおすすめ。コナコーヒードーナツは毎日7時オープン。レナーズベーカリーは5:30 AMオープンで午後早くに売り切れることも。ドーナツキングは先着順で正午までに完売が多い。週末の朝が最も混むので、平日なら短い待ち時間。',
        },
      ],
    },
    cta: {
      title: 'コナコーヒードーナツを訪れよう',
      address: '2142 Kalakaua Ave, ワイキキ',
      text: '新鮮なMOCHILANDモチドーナツとプレミアム100%コナコーヒーでワイキキの朝を。ビーチからすぐ、毎日朝7時オープン。',
      menuButton: 'フルメニューを見る',
      directionsButton: '道順を見る',
    },
  },
  ko: {
    hero: {
      title: '2026년 와이키키 베스트 도넛',
      subtitle: '현지인이 알려주는 달콤한 명소 가이드',
      date: '2026년 4월 업데이트',
      readTime: '8분 읽기',
    },
    intro: {
      text: '칼라카우아 애비뉴 코나커피도넛 팀으로서, 우리는 와이키키의 도넛 씬을 속속들이 알고 있습니다. 수년간 섬의 상징적인 베이커리들과 함께 시식하고, 비교하고, 자체 레시피를 완성해 왔습니다. 쫄깃한 모찌 도넛, 폭신한 말라사다, 클래식 글레이즈드 도넛 등 와이키키와 호놀룰루에는 세계적 수준의 선택지가 있습니다. 2026년 방문해야 할 7곳의 베스트 도넛 스팟을 소개합니다.',
    },
    shops: [
      {
        rank: 1,
        name: '코나커피도넛',
        badge: '에디터 추천',
        location: '2142 Kalakaua Ave, 와이키키',
        hours: '매일 7:00 AM - 9:00 PM',
        priceRange: '$$',
        knownFor: '모찌 도넛, 말라사다, 프리미엄 100% 코나 커피',
        description:
          '저희의 홈베이스이자 와이키키 최신 필수 방문 카페. MOCHILAND와 파트너십을 맺어 섬에서 가장 쫄깃하고 바삭한 모찌 도넛을 호놀룰루 커피의 정통 100% 코나 커피와 함께 제공합니다. 각 모찌 도넛은 프리미엄 쌀가루로 만든 만족스러운 바삭한 겉면과 놀랍도록 쫄깃한 속을 가진 시그니처 팔각 모양이 특징입니다. 말라사다는 매일 아침 갓 튀겨 \u2014 황금빛, 폭신하고, 설탕을 뿌리거나 하우피아 크림, 릴리코이 커스터드, 누텔라 필링도 있습니다.',
        mustTry: '우베 모찌 도넛 + 코나 커피 라떼 콤보',
        whyVisit:
          '와이키키에서 유일하게 MOCHILAND 장인 모찌 도넛과 정통 프리미엄 코나 커피 페어링을 즐길 수 있는 곳. 해변에서 바로 가까워 아침 모래사장 산책 전 완벽한 첫 번째 들릴 곳. 말차, 흑임자, 망고, 시즌 스페셜 등 12가지 이상의 모찌 도넛 맛이 있어 항상 새로운 맛을 만날 수 있습니다.',
        menuLinks: true,
      },
      {
        rank: 2,
        name: '릴리하 베이커리',
        badge: '로컬 레전드',
        location: '515 N Kuakini St, 호놀룰루 (+알라모아나)',
        hours: '6:00 AM - 8:00 PM',
        priceRange: '$',
        knownFor: '코코 퍼프, 포이 모찌 도넛, 70년 이상 역사',
        description:
          '1950년 창업한 호놀룰루의 명소. 유명한 코코 퍼프 \u2014 샹틸리 크림이 들어간 초콜릿 톱 슈 \u2014 는 전설적. 포이 모찌 도넛은 타로를 모찌 반죽에 넣어 하와이만의 독특한 보라색과 은은한 단맛이 특징입니다.',
        mustTry: '코코 퍼프 + 포이 모찌 도넛',
        whyVisit:
          '호놀룰루 역사의 한 부분. 알라모아나점이 와이키키에서 접근이 쉽지만, 쿠아키니 스트리트 원조점의 매력은 비할 데 없습니다.',
      },
      {
        rank: 3,
        name: '레너즈 베이커리',
        badge: '1952년 창업',
        location: '933 Kapahulu Ave, 호놀룰루',
        hours: '5:30 AM - 7:00 PM',
        priceRange: '$',
        knownFor: '1952년부터 하와이에서 가장 유명한 말라사다',
        description:
          '하와이안 도넛 리스트에 레너즈는 빠질 수 없습니다. 카파훌루 애비뉴의 이 랜드마크는 70년 이상 포르투갈식 말라사다를 튀겨왔습니다. 오리지널 설탕 말라사다는 완벽합니다: 겉은 바삭, 속은 구름처럼 부드럽고, 뜨거운 상태로 제공. 필링 말라사다는 하우피아, 커스터드, 도바쉬(초콜릿) 등의 맛이 있습니다.',
        mustTry: '오리지널 슈가 말라사다 + 하우피아 크림 말라사다',
        whyVisit:
          '오아후 필수 경험. 카파훌루 애비뉴를 따라 와이키키에서 차로 10분. 가장 짧은 대기와 가장 신선한 배치를 위해 이른 아침에 가세요.',
      },
      {
        rank: 4,
        name: '홀리 그레일 도넛',
        badge: '베스트 비건',
        location: '워드 빌리지, 호놀룰루',
        hours: '8:00 AM - 2:00 PM',
        priceRange: '$$$',
        knownFor: '타로 베이스, 비건, 오가닉 도넛',
        description:
          '홀리 그레일은 하와이에 건강 의식적 도넛 혁명을 가져왔습니다. 모든 도넛이 타로 베이스로 자연스럽게 비건이며 글루텐 프렌들리. 타로의 자연 색감이 선명하고, 식감은 촘촘하면서도 촉촉합니다. 릴리코이 글레이즈, 구아바 크림, 우베 코코넛 등 창의적인 맛이 매일 바뀝니다.',
        mustTry: '타로 도넛 릴리코이 글레이즈',
        whyVisit:
          '비건, 식물 기반, 건강 의식적 방문객을 위한 최고의 옵션. 워드 빌리지는 와이키키에서 우버 또는 버스로 15분.',
      },
      {
        rank: 5,
        name: '페니스 말라사다',
        badge: '와이키키 내 편리함',
        location: '로열 하와이안 센터, 와이키키',
        hours: '10:00 AM - 9:00 PM',
        priceRange: '$$',
        knownFor: '하와이안 케인 슈가로 만든 말라사다, 와이키키 내',
        description:
          '로열 하와이안 센터 안에 위치한 페니스는 와이키키에서 간편하게 맛있는 말라사다를 즐길 수 있습니다. 현지산 하와이안 케인 슈가를 사용한 반죽은 일반 레시피보다 살짝 풍부한 단맛. 클래식 슈가 더스트와 필링 버전 모두 제공.',
        mustTry: '하와이안 케인 슈가 말라사다',
        whyVisit:
          '와이키키를 벗어나기 어려운 분들의 베스트 초이스. 로열 하와이안 센터 쇼핑 중 간식으로 완벽.',
      },
      {
        rank: 6,
        name: '파이프라인 베이크샵',
        badge: '가장 창의적',
        location: '3632 Waialae Ave, 카이무키',
        hours: '7:00 AM - 6:00 PM',
        priceRange: '$$',
        knownFor: '고메 도넛, 독특한 일일 플레이버, 아이스크림',
        description:
          '파이프라인은 본토의 고메 도넛 문화를 하와이안 트위스트로 전개. 이스트 발효 도넛은 크고 폭신하며, 크렘 브릴레, 포이, 프루티 페블스, 말차 화이트 초콜릿 등 주기적으로 바뀌는 창의적 맛. 아이스크림도 훌륭하고, 도넛 아이스크림 샌드위치는 인스타 감성 그 자체.',
        mustTry: '크렘 브릴레 도넛 또는 시즌 스페셜',
        whyVisit:
          '클래식 이상의 것을 원하는 도넛 애호가를 위해. 카이무키 푸드 씬은 탐험할 가치가 있습니다. 와이키키에서 약 20분.',
      },
      {
        rank: 7,
        name: '도넛 킹',
        badge: '클래식 스타일',
        location: '호놀룰루 여러 지점',
        hours: '5:00 AM - 품절시 마감 (보통 정오)',
        priceRange: '$',
        knownFor: '가족 경영, 이스트 발효, 클래식 아메리칸 스타일',
        description:
          '도넛 킹은 모든 도시에 필요한 소박한 동네 도넛 가게. 가족 경영으로 클래식 이스트 도넛 \u2014 글레이즈드, 초콜릿 프로스트, 메이플 바, 올드패션 케이크 도넛이 전문. 모두 소량 배치로 처음부터 수제. 가격은 최저 수준이지만 품질은 가격 이상. 일찍 열고 빨리 매진되니 알람을 맞추세요.',
        mustTry: '글레이즈드 이스트 도넛 + 메이플 바',
        whyVisit:
          '합리적인 가격으로 클래식 아메리칸 도넛 경험. 일찍 가세요 \u2014 매진되면 그날은 끝.',
      },
    ],
    comparison: {
      title: '선택 가이드: 모찌 vs 말라사다 vs 일반 도넛',
      subtitle: '어떤 스타일을 시도할지 고민이세요? 간단 비교입니다.',
      headers: ['특징', '모찌 도넛', '말라사다', '일반 도넛'],
      rows: [
        ['식감', '쫄깃 & 바삭', '폭신 & 부드러움', '푹신하거나 케이크풍'],
        ['기원', '일본-하와이 퓨전', '포르투갈-하와이', '아메리칸 클래식'],
        ['모양', '팔각 링', '둥근 볼 (구멍 없음)', '링 또는 필링'],
        ['추천', '독특한 식감 애호가', '전통 경험을 원하는 분', '클래식 도넛 팬'],
        ['글루텐프리', '일부 가능 (쌀가루)', '거의 없음', '거의 없음'],
        ['가격대', '$3.50 - $5', '$2 - $4', '$1.50 - $4'],
        ['추천 매장', '코나커피도넛', '레너즈 베이커리', '도넛 킹'],
      ],
    },
    proTips: {
      title: '와이키키 도넛 애호가를 위한 프로 팁',
      tips: [
        {
          icon: 'clock',
          title: '이른 아침에 가세요',
          text: '대부분의 베이커리는 아침 7~9시가 가장 신선합니다. 레너즈와 도넛 킹은 일찍 매진되니 늦잠은 금물.',
        },
        {
          icon: 'camera',
          title: '베스트 인스타 스팟',
          text: '코나커피도넛의 모찌 도넛은 팔각 모양과 컬러풀한 글레이즈로 사진이 잘 나옵니다. 홀리 그레일의 타로 도넛은 자연스러운 보라색이 아름답고, 파이프라인의 화려한 토핑은 SNS용.',
        },
        {
          icon: 'dollar',
          title: '베스트 밸류 콤보',
          text: '코나커피도넛에서 모찌 도넛과 코나 커피 라떼 페어링이 베스트 밸류. 레너즈 오리지널 말라사다는 개당 $2 이하 \u2014 나눠 먹을 하프 다즌 추천.',
        },
        {
          icon: 'utensils',
          title: '완벽한 도넛 데이 일정',
          text: '코나커피도넛에서 모찌 도넛과 코나 커피(7 AM), 레너즈에서 말라사다(9 AM), 카이무키 파이프라인에서 고메 런치 도넛(11 AM). 한 아침에 하와이 도넛 씬 3대장을 정복.',
        },
      ],
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        {
          q: '와이키키에서 가장 맛있는 도넛은?',
          a: '와이키키 베스트 도넛으로는 칼라카우아 애비뉴 코나커피도넛의 모찌 도넛, 로열 하와이안 센터 페니스의 말라사다, 짧은 드라이브로 레너즈 베이커리와 릴리하 베이커리가 필수 방문. 각각 모찌, 말라사다, 클래식 하와이안의 다른 스타일을 즐길 수 있습니다.',
        },
        {
          q: '와이키키에서 모찌 도넛은 어디서 먹을 수 있나요?',
          a: '2142 Kalakaua Ave의 코나커피도넛에서 우베, 말차, 흑임자, 시즌 스페셜 등 12가지 이상의 MOCHILAND 모찌 도넛을 제공합니다. 프리미엄 쌀가루로 매일 신선하게 만드는 시그니처 쫄깃-바삭 식감.',
        },
        {
          q: '말라사다와 도넛의 차이는?',
          a: '말라사다는 포르투갈계 하와이안 튀김 반죽 페이스트리로 일반적으로 구멍 없는 볼 모양. 전통 도넛보다 가볍고 폭신하며 설탕을 입히고 커스터드, 하우피아, 초콜릿 등 필링 가능. 전통 도넛은 링 모양으로 이스트 또는 케이크 스타일.',
        },
        {
          q: '와이키키에 비건 도넛이 있나요?',
          a: '네! 워드 빌리지의 홀리 그레일 도넛이 타로 베이스 비건 도넛을 오가닉 재료로 제공. 와이키키에서 약 15분. 코나커피도넛도 일부 식물 기반 옵션이 있으니 현재 비건 맛을 문의해 주세요.',
        },
        {
          q: '가장 좋은 도넛을 먹으려면 몇 시에 가야 하나요?',
          a: '가장 신선한 도넛은 아침 7~9시 도착 추천. 코나커피도넛은 매일 7시 오픈. 레너즈는 5:30 AM 오픈으로 오후 일찍 매진 가능. 도넛 킹은 선착순으로 정오까지 매진이 많음. 주말 아침이 가장 붐비니 평일 방문이 대기 시간 단축.',
        },
      ],
    },
    cta: {
      title: '코나커피도넛 방문하기',
      address: '2142 Kalakaua Ave, 와이키키',
      text: '신선한 MOCHILAND 모찌 도넛과 프리미엄 100% 코나 커피로 와이키키의 아침을. 해변에서 가까운 곳, 매일 오전 7시 오픈.',
      menuButton: '전체 메뉴 보기',
      directionsButton: '길찾기',
    },
  },
  zh: {
    hero: {
      title: '2026年威基基最佳甜甜圈',
      subtitle: '本地人带你找到最甜蜜的好去处',
      date: '2026年4月更新',
      readTime: '8分钟阅读',
    },
    intro: {
      text: '作为卡拉卡瓦大道科纳咖啡甜甜圈的团队，我们对威基基的甜甜圈行业了如指掌。多年来，我们一直在品尝、比较，并与岛上最具标志性的面包店一起完善自己的配方。无论你渴望的是Q弹的麻糬甜甜圈、松软的马拉萨达，还是经典的糖霜甜甜圈，威基基和大檀香山都有世界级的选择。以下是2026年你必须访问的7个最佳甜甜圈店。',
    },
    shops: [
      {
        rank: 1,
        name: '科纳咖啡甜甜圈',
        badge: '编辑推荐',
        location: '2142 Kalakaua Ave, 威基基',
        hours: '每天 7:00 AM - 9:00 PM',
        priceRange: '$$',
        knownFor: '麻糬甜甜圈、马拉萨达、优质100%科纳咖啡',
        description:
          '我们的大本营，威基基最新的必访咖啡馆。我们与MOCHILAND合作，为您带来岛上最Q弹、最酥脆的麻糬甜甜圈，搭配檀香山咖啡的正宗100%科纳咖啡。每个麻糬甜甜圈都采用优质米粉制成，具有标志性的八球形状，外层酥脆满足，内心Q弹得不可思议。马拉萨达每天早上新鲜油炸——金黄、松软，裹上糖粉或填充椰奶油、百香果卡仕达、或榛子巧克力酱。',
        mustTry: '紫薯麻糬甜甜圈 + 科纳拿铁套餐',
        whyVisit:
          '威基基唯一可以品尝MOCHILAND工匠麻糬甜甜圈搭配正宗优质科纳咖啡的地方。距离海滩仅几步之遥，是早晨去沙滩前的完美第一站。抹茶、黑芝麻、芒果、季节限定等12种以上麻糬甜甜圈口味，总有新口味等你发现。',
        menuLinks: true,
      },
      {
        rank: 2,
        name: '利利哈面包店',
        badge: '本地传奇',
        location: '515 N Kuakini St, 檀香山 (+阿拉莫阿纳)',
        hours: '6:00 AM - 8:00 PM',
        priceRange: '$',
        knownFor: '可可泡芙、芋头麻糬甜甜圈、70多年历史',
        description:
          '1950年创立的檀香山名店。著名的可可泡芙——填满香缇奶油的巧克力顶泡芙——堪称传奇。芋头麻糬甜甜圈将芋头融入麻糬面糊中，独具夏威夷特色，美丽的紫色和淡淡的甜味。原址有怀旧的餐厅柜台，仿佛时光倒流。',
        mustTry: '可可泡芙 + 芋头麻糬甜甜圈',
        whyVisit:
          '檀香山历史的一部分。阿拉莫阿纳分店从威基基更容易到达，但库阿基尼街的原店魅力无与伦比。15分钟车程值得完整体验。',
      },
      {
        rank: 3,
        name: '伦纳德面包店',
        badge: '1952年创立',
        location: '933 Kapahulu Ave, 檀香山',
        hours: '5:30 AM - 7:00 PM',
        priceRange: '$',
        knownFor: '自1952年以来夏威夷最著名的马拉萨达',
        description:
          '夏威夷甜甜圈名单少不了伦纳德。卡帕胡卢大道上的这个地标已经炸了70多年的葡萄牙式马拉萨达。原味糖衣马拉萨达堪称完美：外酥里软，热腾腾上桌。夹心马拉萨达有椰奶油、卡仕达、多巴什（巧克力）等口味。周末排队可能绕着建筑，但移动很快。',
        mustTry: '原味砂糖马拉萨达 + 椰奶油马拉萨达',
        whyVisit:
          '欧胡岛必体验。从威基基经卡帕胡卢大道开车仅10分钟。为了最短等待和最新鲜的一批，请早上去。',
      },
      {
        rank: 4,
        name: '圣杯甜甜圈',
        badge: '最佳纯素',
        location: '沃德村, 檀香山',
        hours: '8:00 AM - 2:00 PM',
        priceRange: '$$$',
        knownFor: '芋头基底、纯素、有机甜甜圈',
        description:
          '圣杯将健康意识的甜甜圈革命带到了夏威夷。每个甜甜圈都以芋头为基底，天然纯素且无麸质。芋头的自然色泽鲜艳，质地紧实而柔嫩，近似蛋糕。百香果糖霜、番石榴奶油、紫薯椰子等创意口味每日更换。现点现做，可以看着甜甜圈制作过程。',
        mustTry: '芋头甜甜圈 百香果糖霜',
        whyVisit:
          '纯素、植物基、注重健康的游客最佳选择。沃德村从威基基乘优步或巴士约15分钟。',
      },
      {
        rank: 5,
        name: "Penny's马拉萨达",
        badge: '威基基最便利',
        location: '皇家夏威夷中心, 威基基',
        hours: '10:00 AM - 9:00 PM',
        priceRange: '$$',
        knownFor: '用夏威夷甘蔗糖制作的马拉萨达，就在威基基',
        description:
          '位于皇家夏威夷中心内，Penny\'s让在威基基享用优质马拉萨达变得轻而易举。面团使用当地夏威夷甘蔗糖，比一般配方甜味更加醇厚。提供经典砂糖和夹心两种。便利性无与伦比——购物间隙或从海滩回来的路上都可以顺路。',
        mustTry: '夏威夷甘蔗糖马拉萨达',
        whyVisit:
          '无法离开威基基？Penny\'s是品质马拉萨达的最佳选择。在皇家夏威夷中心购物时的完美零食。',
      },
      {
        rank: 6,
        name: '管道烘焙坊',
        badge: '最具创意',
        location: '3632 Waialae Ave, 凯穆基',
        hours: '7:00 AM - 6:00 PM',
        priceRange: '$$',
        knownFor: '美食甜甜圈、独特日替口味、冰淇淋',
        description:
          '管道将大陆美食甜甜圈文化以夏威夷风格带到岛上。酵母发酵甜甜圈个大、蓬松，焦糖布丁、芋泥、水果圈圈、抹茶白巧克力等创意口味定期更换。冰淇淋也出色，甜甜圈冰淇淋三明治是Instagram梦想之作。凯穆基社区本身就是美食目的地。',
        mustTry: '焦糖布丁甜甜圈或任何季节特供',
        whyVisit:
          '为想要超越经典的甜甜圈爱好者。凯穆基的美食圈值得探索。距威基基约20分钟。',
      },
      {
        rank: 7,
        name: '甜甜圈大王',
        badge: '经典风格',
        location: '檀香山多家分店',
        hours: '5:00 AM - 售完即止（通常中午前）',
        priceRange: '$',
        knownFor: '家族经营、酵母发酵、经典美式风格',
        description:
          '甜甜圈大王是每个城市都需要的朴实无华的社区甜甜圈店。家族经营，专做经典酵母甜甜圈——糖霜、巧克力霜、枫糖条、老式蛋糕甜甜圈。全部小批量手工制作。价格是最实惠的，品质远超价格。早开门早卖完，记得设闹钟。',
        mustTry: '糖霜酵母甜甜圈 + 枫糖条',
        whyVisit:
          '以超值价格体验经典美式甜甜圈。早点去——卖完就结束了。',
      },
    ],
    comparison: {
      title: '选择指南：麻糬 vs 马拉萨达 vs 普通甜甜圈',
      subtitle: '不确定该尝试哪种？这里有个快速对比。',
      headers: ['特征', '麻糬甜甜圈', '马拉萨达', '普通甜甜圈'],
      rows: [
        ['口感', 'Q弹酥脆', '松软绵柔', '蓬松或蛋糕质地'],
        ['起源', '日本-夏威夷融合', '葡萄牙-夏威夷', '美式经典'],
        ['形状', '八球环形', '圆球（无孔）', '环形或夹心'],
        ['适合', '喜欢独特口感', '追求传统体验', '经典甜甜圈爱好者'],
        ['无麸质选项', '部分有（米粉基底）', '几乎没有', '几乎没有'],
        ['价格区间', '$3.50 - $5', '$2 - $4', '$1.50 - $4'],
        ['推荐店铺', '科纳咖啡甜甜圈', '伦纳德面包店', '甜甜圈大王'],
      ],
    },
    proTips: {
      title: '威基基甜甜圈爱好者的专业建议',
      tips: [
        {
          icon: 'clock',
          title: '清晨前往',
          text: '大多数面包店在早上7-9点最新鲜。伦纳德和甜甜圈大王很早就卖完，别睡懒觉。',
        },
        {
          icon: 'camera',
          title: '最佳拍照地点',
          text: '科纳咖啡甜甜圈的麻糬甜甜圈八球造型和彩色糖霜非常上镜。圣杯的芋头甜甜圈有天然紫色美感。管道的华丽装饰天生适合社交媒体。',
        },
        {
          icon: 'dollar',
          title: '最超值组合',
          text: '在科纳咖啡甜甜圈，麻糬甜甜圈搭配科纳拿铁最超值。伦纳德的原味马拉萨达每个不到$2——买半打分享。',
        },
        {
          icon: 'utensils',
          title: '完美甜甜圈日行程',
          text: '从科纳咖啡甜甜圈开始麻糬甜甜圈和科纳咖啡（7 AM），开车去伦纳德吃马拉萨达（9 AM），然后到凯穆基管道享用美食午间甜甜圈（11 AM）。一个上午尝遍夏威夷甜甜圈三大支柱。',
        },
      ],
    },
    faq: {
      title: '常见问题',
      items: [
        {
          q: '威基基最好吃的甜甜圈是什么？',
          a: '威基基最佳甜甜圈包括卡拉卡瓦大道科纳咖啡甜甜圈的麻糬甜甜圈、皇家夏威夷中心Penny\'s的马拉萨达，短途驾车可达伦纳德面包店和利利哈面包店。每家提供不同风格——麻糬、马拉萨达和经典夏威夷。',
        },
        {
          q: '在威基基哪里可以买到麻糬甜甜圈？',
          a: '2142 Kalakaua Ave的科纳咖啡甜甜圈提供MOCHILAND麻糬甜甜圈，12种以上口味包括紫薯、抹茶、黑芝麻和季节特供。使用优质米粉每日新鲜制作，拥有标志性的Q弹酥脆口感。',
        },
        {
          q: '马拉萨达和甜甜圈有什么区别？',
          a: '马拉萨达是葡萄牙-夏威夷油炸面团糕点，通常为球形无孔。比传统甜甜圈更轻盈松软，裹上糖粉，可填充卡仕达、椰奶油或巧克力。传统甜甜圈是环形，可以是酵母发酵或蛋糕式。',
        },
        {
          q: '威基基有纯素甜甜圈吗？',
          a: '有！沃德村的圣杯甜甜圈用芋头基底制作纯素有机甜甜圈。距威基基约15分钟。科纳咖啡甜甜圈也提供部分植物基选项——请询问当前纯素口味。',
        },
        {
          q: '什么时候去吃甜甜圈最好？',
          a: '最新鲜的甜甜圈建议早上7-9点到达。科纳咖啡甜甜圈每天7点开门。伦纳德5:30 AM开门，下午早些可能卖完。甜甜圈大王先到先得，中午前常售罄。周末早上最忙，工作日去等待更短。',
        },
      ],
    },
    cta: {
      title: '访问科纳咖啡甜甜圈',
      address: '2142 Kalakaua Ave, 威基基',
      text: '用新鲜的MOCHILAND麻糬甜甜圈和优质100%科纳咖啡开启威基基的早晨。海滩近在咫尺，每天早上7点营业。',
      menuButton: '查看完整菜单',
      directionsButton: '获取路线',
    },
  },
};

// BlogPosting JSON-LD Schema
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Best Donuts in Waikiki 2026: A Local\'s Guide to the Sweetest Spots',
  description:
    'Discover the 7 best donut shops in Waikiki for 2026. From mochi donuts and malasadas to classic glazed, a local guide to the sweetest spots near Waikiki Beach.',
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
    '@id': 'https://www.konacoffeedonut.com/en/blog/best-donuts-waikiki',
  },
  keywords:
    'best donuts waikiki, mochi donuts hawaii, malasada waikiki, best donut shop honolulu, donuts near me waikiki',
  wordCount: 1500,
  inLanguage: 'en-US',
};

// FAQPage JSON-LD Schema (built dynamically from English content)
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
      className="border-b border-amber-200 last:border-b-0"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 px-2 text-left hover:bg-amber-50/50 transition-colors rounded-lg"
      >
        <span className="text-lg font-semibold text-amber-900 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-amber-600 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="px-2 pb-5"
        >
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

function getTipIcon(icon: string) {
  switch (icon) {
    case 'clock':
      return <Clock className="w-6 h-6 text-amber-700" />;
    case 'camera':
      return <Camera className="w-6 h-6 text-amber-700" />;
    case 'dollar':
      return <DollarSign className="w-6 h-6 text-amber-700" />;
    case 'utensils':
      return <Utensils className="w-6 h-6 text-amber-700" />;
    default:
      return <Star className="w-6 h-6 text-amber-700" />;
  }
}

export default function BestDonutsWaikikiPage() {
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

      <main className="min-h-screen bg-white">
      <SubpageNav locale={locale} />
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-900" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 flex items-center justify-center gap-3 text-amber-200 text-sm"
            >
              <span>{t.hero.date}</span>
              <span className="w-1 h-1 rounded-full bg-amber-300" />
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
              className="text-xl md:text-2xl text-amber-100 font-medium"
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
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {t.intro.text}
            </p>
          </motion.div>
        </section>

        {/* Ranked Donut Shops */}
        <section className="py-8 md:py-12 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {t.shops.map((shop, index) => (
              <motion.article
                key={index}
                className={`rounded-2xl overflow-hidden shadow-lg ${
                  shop.rank === 1
                    ? 'border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50'
                    : 'border border-gray-200 bg-white'
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
                      ? 'bg-gradient-to-r from-amber-600 to-orange-500 text-white'
                      : 'bg-gradient-to-r from-amber-800 to-amber-700 text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold opacity-80">#{shop.rank}</span>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold">{shop.name}</h2>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      shop.rank === 1
                        ? 'bg-white/20 text-white'
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    {shop.badge}
                  </span>
                </div>

                {/* Shop Details */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-amber-600" />
                      <span>{shop.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span>{shop.hours}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <DollarSign className="w-4 h-4 text-amber-600" />
                      <span>{shop.priceRange}</span>
                    </div>
                  </div>

                  {/* Known For */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700">
                      <Award className="w-4 h-4" />
                      {shop.knownFor}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-4">{shop.description}</p>

                  {/* Must Try */}
                  <div className="bg-amber-50 rounded-xl p-4 mb-4">
                    <div className="flex items-start gap-2">
                      <Heart className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-amber-900">Must-Try: </span>
                        <span className="text-gray-700">{shop.mustTry}</span>
                      </div>
                    </div>
                  </div>

                  {/* Why Visit */}
                  <p className="text-gray-600 text-sm italic">{shop.whyVisit}</p>

                  {/* Menu Links for Kona Coffee Donut */}
                  {shop.menuLinks && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link
                        href={`/${locale}/menu`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-900 transition-colors underline decoration-amber-300 underline-offset-2"
                      >
                        <Coffee className="w-4 h-4" />
                        Full Menu
                      </Link>
                      <Link
                        href={`/${locale}/menu/mochi-donuts`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-900 transition-colors underline decoration-amber-300 underline-offset-2"
                      >
                        Mochi Donuts
                      </Link>
                      <Link
                        href={`/${locale}/menu/malasada`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700 hover:text-amber-900 transition-colors underline decoration-amber-300 underline-offset-2"
                      >
                        Malasada
                      </Link>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 md:py-16 px-4 bg-amber-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-3">
                {t.comparison.title}
              </h2>
              <p className="text-gray-600">{t.comparison.subtitle}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="overflow-x-auto"
            >
              <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-amber-700 to-amber-600 text-white">
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
                        i % 2 === 0 ? 'bg-white' : 'bg-amber-50/50'
                      } border-b border-amber-100 last:border-b-0`}
                    >
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={`px-4 py-3 text-sm ${
                            j === 0
                              ? 'font-semibold text-amber-900'
                              : 'text-gray-700'
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

        {/* Pro Tips */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-amber-900 mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t.proTips.title}
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.proTips.tips.map((tip, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      {getTipIcon(tip.icon)}
                    </div>
                    <h3 className="text-lg font-bold text-amber-900">{tip.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{tip.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 px-4 bg-amber-50">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t.faq.title}
            </motion.h2>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              {t.faq.items.map((item, index) => (
                <FAQItem key={index} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 text-white">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
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
                className="inline-block bg-amber-900/30 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-900/50 transition-colors"
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
