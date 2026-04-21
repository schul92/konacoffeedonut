'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Star, ChevronRight, Flame, UtensilsCrossed, IceCreamCone, Drumstick, Soup, ShoppingBag, Cake, Sandwich, Trophy, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Script from 'next/script';
import SubpageNav from '@/components/SubpageNav';

// SEO-optimized content for "korean food waikiki" keyword (Volume: 1,800)
const content = {
  en: {
    hero: {
      title: 'Korean Food in Waikiki 2026: The Ultimate Guide to K-Food in Hawaii',
      subtitle: 'From sizzling BBQ to trendy corn dogs and creamy bingsu — discover the best Korean food experiences in and near Waikiki.',
      badge: 'Updated April 2026',
    },
    intro: {
      title: 'The Korean Food Explosion in Hawaii',
      p1: 'Korean food in Waikiki is having a major moment. In early 2026, four new Korean restaurants opened in the Honolulu area within just 12 days — a clear sign that K-food has become one of the hottest dining trends in Hawaii. Whether you are a Korean tourist craving a taste of home or a visitor eager to explore bold new flavors, Waikiki now offers an impressive range of Korean dining experiences.',
      p2: 'Hawaii has deep ties to Korean culture. The first Korean immigrants arrived in 1903, and today the state is home to one of the largest Korean-American communities in the U.S. Combine that heritage with the global K-wave, a surge in Korean tourism, and the strong military connection between Hawaii and South Korea, and you have the perfect recipe for a thriving Korean food scene.',
      p3: 'This guide covers the 10 best Korean food experiences you can find in and around Waikiki in 2026 — from our own Korean-Hawaiian fusion creations at Kona Coffee Donut to beloved BBQ joints, trendy dessert spots, and hidden gems.',
    },
    listTitle: '10 Best Korean Food Experiences in Waikiki (2026)',
    items: [
      {
        rank: 1,
        name: 'Kona Coffee Donut — Korean-Hawaiian Fusion',
        description: 'Our flagship Waikiki location at 2142 Kalakaua Ave brings together the best of Korean and Hawaiian food culture. Try our signature Korean corn dogs with crispy rice-flour batter and stretchy mozzarella, or cool down with a Hawaiian-style bingsu topped with fresh tropical fruit. We also serve premium 100% Kona coffee, mochi donuts, and malasadas — making us the perfect spot for a Korean-Hawaiian fusion snack steps from the beach.',
        tags: ['Corn Dogs', 'Bingsu', 'Fusion', 'Waikiki Beach'],
        highlight: true,
      },
      {
        rank: 2,
        name: 'Korean BBQ — Sizzling Tableside Grills',
        description: 'No Korean food guide is complete without BBQ. Waikiki and nearby Ala Moana offer several excellent Korean BBQ restaurants. I\'O Waikiki delivers a modern, upscale take on galbi and bulgogi with ocean views, while Sura Hawaii specializes in traditional banchan spreads and all-you-can-eat grilling. For a more local experience, drive 10 minutes to the Korean BBQ spots along Keeaumoku Street — Honolulu\'s unofficial Koreatown.',
        tags: ['BBQ', 'Galbi', 'Bulgogi', 'Dinner'],
      },
      {
        rank: 3,
        name: 'Korean Fried Chicken',
        description: 'Korean fried chicken (KFC — the other KFC) is a global phenomenon, and Hawaii has embraced it wholeheartedly. The double-fried technique creates an impossibly crunchy exterior while keeping the meat juicy inside. Look for spots serving yangnyeom (sweet-spicy glazed) and ganjang (soy garlic) varieties. Several restaurants near Waikiki offer late-night Korean fried chicken paired with draft beer — the classic chimaek experience.',
        tags: ['Fried Chicken', 'Chimaek', 'Late Night'],
      },
      {
        rank: 4,
        name: 'Bingsu — Korean Shaved Ice Dessert',
        description: 'Bingsu (Korean shaved ice) is the perfect dessert for Hawaii\'s warm climate. Unlike regular shaved ice, bingsu features finely shaved milk-ice that melts on your tongue like fresh snow. At Kona Coffee Donut, our Hawaiian-style bingsu combines this Korean classic with tropical mango, lilikoi, and coconut toppings. It is the ideal treat after a beach day.',
        tags: ['Dessert', 'Bingsu', 'Tropical'],
        link: { href: '/bingsu-waikiki', label: 'Read our Bingsu Guide' },
      },
      {
        rank: 5,
        name: 'Korean Corn Dogs — Crispy Street Food',
        description: 'Korean corn dogs (hotdog/hattu) have taken social media by storm, and Waikiki is one of the best places to try them in Hawaii. These are not your typical American corn dogs — they feature stretchy mozzarella cheese, crispy coatings of rice puffs or ramen crumbles, and a dusting of sugar for that signature sweet-savory contrast. Kona Coffee Donut offers six varieties made fresh to order right on Kalakaua Avenue.',
        tags: ['Street Food', 'Corn Dogs', 'Cheese'],
        link: { href: '/korean-corn-dog-waikiki', label: 'See our Korean Corn Dogs' },
      },
      {
        rank: 6,
        name: 'Bibimbap — The Iconic Rice Bowl',
        description: 'Bibimbap is arguably Korea\'s most famous dish abroad — a colorful bowl of rice topped with sauteed vegetables, gochujang (red pepper paste), and often a fried egg or sliced beef. Several Korean restaurants in the Waikiki and Ala Moana area serve excellent bibimbap, including dolsot (hot stone pot) versions where the rice develops a satisfying golden crust at the bottom.',
        tags: ['Rice Bowl', 'Healthy', 'Lunch'],
      },
      {
        rank: 7,
        name: 'Korean Street Food Snacks',
        description: 'Beyond corn dogs, Korean street food culture offers tteokbokki (spicy rice cakes), kimbap (Korean sushi rolls), mandu (dumplings), and bungeoppang (fish-shaped pastries filled with sweet red bean). Pop-up vendors and small eateries around Waikiki and the International Marketplace area have started offering these authentic snacks, giving visitors a true Seoul street-food vibe without the 9-hour flight.',
        tags: ['Street Food', 'Snacks', 'Tteokbokki'],
      },
      {
        rank: 8,
        name: 'K-Food at Ala Moana Food Court',
        description: 'Ala Moana Center, a short bus ride from Waikiki, houses one of the best food courts in Hawaii — and Korean food is well represented. You will find dedicated Korean stalls serving jjajangmyeon (black bean noodles), sundubu jjigae (soft tofu stew), japchae (glass noodles), and more. It is an affordable way to sample multiple Korean dishes in one visit, and the variety rivals food courts in Seoul.',
        tags: ['Food Court', 'Affordable', 'Variety'],
      },
      {
        rank: 9,
        name: 'Korean Bakeries & Cafes',
        description: 'The Korean bakery wave has reached Hawaii. Look for chestnut cream pastries, garlic cream cheese bread (the viral sensation), sweet red bean buns, and Korean-style croissants. Several Korean-inspired cafes near Waikiki also serve dalgona coffee, made famous by Korean social media. Pair your pastry with a classic Americano and enjoy the K-cafe aesthetic.',
        tags: ['Bakery', 'Cafe', 'Pastries'],
      },
      {
        rank: 10,
        name: 'Korean-Hawaiian Fusion Dishes',
        description: 'Hawaii\'s multicultural food scene has produced some brilliant Korean-Hawaiian crossovers. Try kimchi poke — fresh ahi tossed with kimchi, sesame oil, and gochugaru. Korean-style spam musubi adds gochujang glaze and pickled radish to the Hawaiian classic. Kalbi plate lunches are already a staple at local drive-ins. These fusion dishes represent the best of both culinary worlds and are uniquely Hawaiian.',
        tags: ['Fusion', 'Poke', 'Plate Lunch'],
      },
    ],
    boom: {
      title: 'Why Korean Food is Booming in Hawaii',
      reasons: [
        {
          title: 'Korean Tourism Surge',
          text: 'South Korea is now one of the top source markets for Hawaii tourism. Korean visitors seek familiar flavors alongside new experiences, driving demand for quality Korean restaurants.',
        },
        {
          title: 'The Global K-Wave',
          text: 'K-dramas, K-pop, and Korean beauty culture have created worldwide interest in Korean food. Non-Korean diners are actively seeking out bibimbap, fried chicken, and bingsu after seeing them on screen.',
        },
        {
          title: 'Military Connection',
          text: 'Hawaii hosts a significant U.S. military presence with deep ties to South Korea. Service members and their families who have been stationed in Korea bring their love for Korean food back to the islands.',
        },
        {
          title: 'Immigrant Heritage',
          text: 'Korean immigration to Hawaii dates back to 1903. Over a century of Korean-American community building has established authentic Korean cooking traditions that continue to evolve and innovate.',
        },
      ],
    },
    cheatSheet: {
      title: 'Korean Food Terms Cheat Sheet',
      subtitle: 'Ordering Korean food is easier when you know these key terms. Print this out or save it on your phone before your Waikiki food adventure.',
      headers: ['Korean', 'Pronunciation', 'What It Is'],
      terms: [
        { korean: '비빔밥', pronunciation: 'bee-bim-bap', english: 'Mixed rice bowl with vegetables and gochujang sauce' },
        { korean: '불고기', pronunciation: 'bool-go-gi', english: 'Marinated grilled beef, sweet and savory' },
        { korean: '갈비', pronunciation: 'gal-bi', english: 'Grilled short ribs, a BBQ staple' },
        { korean: '떡볶이', pronunciation: 'tteok-bok-ki', english: 'Spicy stir-fried rice cakes, classic street food' },
        { korean: '빙수', pronunciation: 'bing-su', english: 'Shaved ice dessert with toppings' },
        { korean: '핫도그 / 하뚜', pronunciation: 'hat-do-geu / hat-tu', english: 'Korean corn dog with cheese and crispy coating' },
        { korean: '치맥', pronunciation: 'chi-maek', english: 'Fried chicken + beer combo' },
        { korean: '김밥', pronunciation: 'gim-bap', english: 'Korean seaweed rice roll (like sushi)' },
        { korean: '김치', pronunciation: 'gim-chi', english: 'Fermented spicy cabbage, served with every meal' },
        { korean: '소주', pronunciation: 'so-ju', english: 'Korean distilled spirit, pairs with BBQ' },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'Where can I find the best Korean food in Waikiki?',
          a: 'The best Korean food in Waikiki ranges from full-service BBQ restaurants like I\'O Waikiki and Sura Hawaii to quick-service spots like Kona Coffee Donut on Kalakaua Ave, which offers Korean corn dogs, bingsu, and Korean-Hawaiian fusion snacks. For a wider selection, head to Keeaumoku Street near Ala Moana — Honolulu\'s unofficial Koreatown.',
        },
        {
          q: 'Is Korean food popular in Hawaii?',
          a: 'Extremely. Hawaii has one of the largest Korean-American communities in the U.S., dating back to 1903. Korean food is deeply woven into local culture — kalbi plate lunches, kimchi, and Korean BBQ are everyday staples, and the recent K-wave has only accelerated demand.',
        },
        {
          q: 'What Korean dishes should I try for the first time in Waikiki?',
          a: 'Start with Korean BBQ (bulgogi or galbi) for the full interactive grilling experience. For street food, try Korean corn dogs at Kona Coffee Donut — they are a viral sensation. Cool down with bingsu (Korean shaved ice), and do not miss bibimbap for a filling, flavorful lunch.',
        },
        {
          q: 'Are there vegetarian Korean food options in Waikiki?',
          a: 'Yes. Bibimbap can easily be made vegetarian, and many Korean restaurants offer tofu stew (sundubu jjigae), vegetable kimbap, and japchae (glass noodles with vegetables). Korean corn dogs also come in cheese-only versions without meat.',
        },
        {
          q: 'How much does Korean food cost in Waikiki?',
          a: 'Prices vary. Korean corn dogs and street snacks run $5 to $10. A bibimbap lunch is typically $15 to $20. Korean BBQ dinners range from $25 to $50+ per person depending on the restaurant. Bingsu desserts are usually $10 to $18. The Ala Moana food court offers the most budget-friendly Korean meals.',
        },
      ],
    },
    cta: {
      title: 'Try Korean-Hawaiian Fusion at Kona Coffee Donut',
      text: 'Visit us at 2142 Kalakaua Ave in Waikiki for Korean corn dogs, Hawaiian-style bingsu, premium Kona coffee, and more. Steps from the beach, open daily.',
      menuBtn: 'View Our Menu',
      cornDogBtn: 'Korean Corn Dogs',
      bingsuBtn: 'Bingsu Menu',
      directionsBtn: 'Get Directions',
    },
  },
  ja: {
    hero: {
      title: 'ワイキキの韓国料理2026：ハワイで楽しむK-FOOD完全ガイド',
      subtitle: '本場の韓国BBQからトレンドのコーンドッグ、クリーミーなビンスまで — ワイキキ周辺で味わえる最高のK-FOOD体験をご紹介。',
      badge: '2026年4月更新',
    },
    intro: {
      title: 'ハワイで韓国料理が大ブーム',
      p1: 'ワイキキの韓国料理が今、大きな注目を集めています。2026年初頭、ホノルル地域ではわずか12日間で4軒の韓国料理店が新規オープンしました。K-FOODがハワイで最もホットなダイニングトレンドの一つになっていることは明らかです。日本でも大人気のK-FOODですが、ハワイではまた違った楽しみ方ができます。',
      p2: 'ハワイと韓国文化には深い繋がりがあります。最初の韓国人移民は1903年にハワイに到着し、現在ハワイ州は全米最大級の韓国系アメリカ人コミュニティを擁しています。その伝統に加え、世界的なK-WAVEの影響、韓国人観光客の増加、そしてハワイと韓国の軍事的な結びつきが、活気ある韓国料理シーンを生み出しています。',
      p3: '日本でお馴染みのK-FOODをハワイのビーチサイドで楽しむ — このガイドでは、2026年にワイキキ周辺で体験できる韓国料理ベスト10をご紹介します。コナコーヒードーナツの韓国・ハワイアンフュージョンから、人気のBBQ店、トレンドのデザートスポットまで網羅しています。',
    },
    listTitle: 'ワイキキの韓国料理体験ベスト10（2026年版）',
    items: [
      {
        rank: 1,
        name: 'コナコーヒードーナツ — 韓国・ハワイアンフュージョン',
        description: 'カラカウア通り2142番地のワイキキ本店では、韓国とハワイの食文化を融合。サクサクの米粉バッターととろ〜りモッツァレラの韓国コーンドッグや、トロピカルフルーツをたっぷりのせたハワイアンスタイルビンスをぜひお試しください。プレミアム100%コナコーヒー、モチドーナツ、マラサダもご用意。ビーチから徒歩圏内の最高のK-FOODスポットです。',
        tags: ['コーンドッグ', 'ビンス', 'フュージョン', 'ワイキキビーチ'],
        highlight: true,
      },
      {
        rank: 2,
        name: '韓国BBQ — テーブルで焼く本格グリル',
        description: '韓国料理ガイドにBBQは外せません。ワイキキとアラモアナ周辺には優れた韓国BBQ店がいくつもあります。I\'O Waikikiはオーシャンビューでモダンなカルビとプルコギを楽しめ、Sura Hawaiiは伝統的なパンチャンと食べ放題グリルが自慢。もっとローカルな体験なら、車で10分のケアモク通り — ホノルルの非公式コリアタウンがおすすめです。',
        tags: ['BBQ', 'カルビ', 'プルコギ', 'ディナー'],
      },
      {
        rank: 3,
        name: '韓国フライドチキン',
        description: '韓国チキンは世界的なブームで、日本でも大人気ですよね。ハワイでも例外ではありません。二度揚げ技法で驚くほどカリカリの衣と、ジューシーなお肉を実現。ヤンニョム（甘辛ソース）やカンジャン（醤油ガーリック）味を提供するお店を探してみてください。ワイキキ近くのいくつかのレストランでは、深夜のチメク（チキン＋ビール）体験ができます。',
        tags: ['フライドチキン', 'チメク', '深夜'],
      },
      {
        rank: 4,
        name: 'ビンス — 韓国かき氷デザート',
        description: 'ビンス（韓国かき氷）はハワイの暖かい気候にぴったりのデザートです。普通のかき氷とは違い、ミルクアイスを細かく削った雪のような食感が特徴。コナコーヒードーナツのハワイアンスタイルビンスは、トロピカルマンゴー、リリコイ、ココナッツをトッピング。ビーチの後の最高のご褒美です。',
        tags: ['デザート', 'ビンス', 'トロピカル'],
        link: { href: '/bingsu-waikiki', label: 'ビンスガイドを読む' },
      },
      {
        rank: 5,
        name: '韓国コーンドッグ — サクサクストリートフード',
        description: '韓国コーンドッグ（ハットグ）はSNSで大バズり中。ワイキキはハワイで最高の場所の一つです。一般的なアメリカンコーンドッグとは全く違い、とろ〜りモッツァレラチーズ、ライスパフやラーメンクランブルのカリカリコーティング、そして砂糖の甘じょっぱいコントラストが特徴。コナコーヒードーナツではカラカウア通りで6種類を注文後すぐに揚げたてでご提供。',
        tags: ['ストリートフード', 'コーンドッグ', 'チーズ'],
        link: { href: '/korean-corn-dog-waikiki', label: '韓国コーンドッグを見る' },
      },
      {
        rank: 6,
        name: 'ビビンバ — 定番の韓国丼',
        description: 'ビビンバは海外で最も有名な韓国料理と言えるでしょう。ご飯の上にナムル、コチュジャン、目玉焼きや牛肉を載せた彩り豊かな一品。ワイキキとアラモアナのいくつかの韓国レストランでは、ご飯の底がパリパリになる石焼ビビンバ（ドルソッ）も楽しめます。',
        tags: ['丼もの', 'ヘルシー', 'ランチ'],
      },
      {
        rank: 7,
        name: '韓国屋台フード',
        description: 'コーンドッグ以外にも、トッポッキ（辛い餅炒め）、キンパ（韓国海苔巻き）、マンドゥ（餃子）、プンオパン（たい焼き風の餡入り菓子）など豊富な韓国屋台フードがあります。ワイキキやインターナショナルマーケットプレイス周辺にも、こうした本格的なスナックを提供する店が増えています。',
        tags: ['屋台フード', 'スナック', 'トッポッキ'],
      },
      {
        rank: 8,
        name: 'アラモアナフードコートのK-FOOD',
        description: 'ワイキキからバスですぐのアラモアナセンターには、ハワイ最高のフードコートがあります。ジャジャンミョン（ジャージャー麺）、スンドゥブチゲ、チャプチェなど、韓国料理の専門店が充実。リーズナブルに複数の韓国料理を一度に楽しめ、ソウルのフードコートに匹敵するバラエティです。',
        tags: ['フードコート', 'お手頃', 'バラエティ'],
      },
      {
        rank: 9,
        name: '韓国ベーカリー＆カフェ',
        description: '韓国ベーカリーの波がハワイにも到達。栗クリームペストリー、バズり中のガーリッククリームチーズパン、あんパン、韓国スタイルクロワッサンなど注目アイテムが満載。ダルゴナコーヒーを提供するK-カフェも増えています。アメリカーノとペストリーでK-カフェの雰囲気を楽しんでください。',
        tags: ['ベーカリー', 'カフェ', 'ペストリー'],
      },
      {
        rank: 10,
        name: '韓国・ハワイアンフュージョン料理',
        description: 'ハワイの多文化な食文化が生んだ韓国×ハワイの絶品クロスオーバー。キムチポケ（新鮮なアヒとキムチ、ごま油、コチュカルを和えたもの）、コチュジャングレーズのスパムむすび、カルビプレートランチなど。この融合料理は両方の食文化の最高の部分を代表する、ハワイならではの味です。',
        tags: ['フュージョン', 'ポケ', 'プレートランチ'],
      },
    ],
    boom: {
      title: 'なぜハワイで韓国料理がブームなのか',
      reasons: [
        {
          title: '韓国人観光客の急増',
          text: '韓国はハワイ観光の主要マーケットの一つに成長。韓国人旅行者は馴染みのある味と新しい体験の両方を求め、質の高い韓国レストランへの需要を押し上げています。',
        },
        {
          title: 'グローバルK-WAVE',
          text: '韓国ドラマ、K-POP、韓国ビューティー文化が世界中で韓国料理への関心を高めています。日本でも韓国グルメブームは続いていますよね。画面で見たビビンバやチキン、ビンスを実際に試したいという人が急増中。',
        },
        {
          title: '軍事的なつながり',
          text: 'ハワイには韓国と深い関係を持つ米軍施設があり、韓国に駐留した軍人とその家族が韓国料理への愛をハワイに持ち帰っています。',
        },
        {
          title: '移民の歴史',
          text: 'ハワイへの韓国移民は1903年に遡ります。1世紀以上にわたる韓国系アメリカ人コミュニティの形成が、正統な韓国料理の伝統を確立し、今も進化と革新を続けています。',
        },
      ],
    },
    cheatSheet: {
      title: '韓国料理用語チートシート',
      subtitle: 'これらのキーワードを知っておけば注文も簡単。ワイキキのグルメ冒険前にスクリーンショットしておきましょう。',
      headers: ['韓国語', '発音', '内容'],
      terms: [
        { korean: '비빔밥', pronunciation: 'ビビンバ', english: '野菜とコチュジャンソースの混ぜご飯' },
        { korean: '불고기', pronunciation: 'プルコギ', english: '甘辛い味付けの焼き肉' },
        { korean: '갈비', pronunciation: 'カルビ', english: '焼き骨付きカルビ、BBQの定番' },
        { korean: '떡볶이', pronunciation: 'トッポッキ', english: '辛い炒め餅、定番屋台フード' },
        { korean: '빙수', pronunciation: 'ビンス', english: 'トッピング付きかき氷デザート' },
        { korean: '핫도그 / 하뚜', pronunciation: 'ハットグ / ハッドゥ', english: 'チーズとカリカリ衣の韓国コーンドッグ' },
        { korean: '치맥', pronunciation: 'チメク', english: 'フライドチキン＋ビールのセット' },
        { korean: '김밥', pronunciation: 'キンパ', english: '韓国海苔巻き（寿司に似ている）' },
        { korean: '김치', pronunciation: 'キムチ', english: '発酵させた辛い白菜、毎食添えられる' },
        { korean: '소주', pronunciation: 'ソジュ', english: '韓国の蒸留酒、BBQのお供に' },
      ],
    },
    faq: {
      title: 'よくある質問',
      items: [
        {
          q: 'ワイキキで最高の韓国料理はどこで食べられますか？',
          a: 'I\'O WaikikiやSura Hawaiiなどのフルサービスの韓国BBQレストランから、カラカウア通りのコナコーヒードーナツ（韓国コーンドッグ、ビンス、韓国・ハワイアンフュージョンスナック）まで幅広い選択肢があります。より多くの選択肢を求めるなら、アラモアナ近くのケアモク通り — ホノルルの非公式コリアタウンがおすすめ。',
        },
        {
          q: 'ハワイで韓国料理は人気がありますか？',
          a: '非常に人気があります。ハワイは1903年から全米最大級の韓国系アメリカ人コミュニティを擁しています。カルビプレートランチ、キムチ、韓国BBQは日常的な定番で、最近のK-WAVEが需要をさらに加速させています。',
        },
        {
          q: 'ワイキキで初めての韓国料理、何を試すべきですか？',
          a: 'まずは韓国BBQ（プルコギやカルビ）で本格的な焼肉体験を。ストリートフードなら、コナコーヒードーナツの韓国コーンドッグがSNSでも話題。ビンス（韓国かき氷）でクールダウンし、ランチにはビビンバがおすすめです。',
        },
        {
          q: 'ワイキキにベジタリアン向けの韓国料理はありますか？',
          a: 'はい。ビビンバはベジタリアン向けに簡単にアレンジでき、多くの韓国レストランがスンドゥブチゲ（豆腐鍋）、野菜キンパ、チャプチェを提供。韓国コーンドッグも肉なしのチーズのみバージョンがあります。',
        },
        {
          q: 'ワイキキでの韓国料理の値段は？',
          a: '韓国コーンドッグやストリートスナックは5〜10ドル。ビビンバランチは通常15〜20ドル。韓国BBQディナーはレストランにより25〜50ドル以上。ビンスデザートは通常10〜18ドル。最も手頃なのはアラモアナフードコートです。',
        },
      ],
    },
    cta: {
      title: 'コナコーヒードーナツで韓国×ハワイアンフュージョンを体験',
      text: 'ワイキキ 2142 Kalakaua Ave。韓国コーンドッグ、ハワイアンスタイルビンス、プレミアムコナコーヒーなど。ビーチからすぐ、毎日営業。',
      menuBtn: 'メニューを見る',
      cornDogBtn: '韓国コーンドッグ',
      bingsuBtn: 'ビンスメニュー',
      directionsBtn: '道順を見る',
    },
  },
  ko: {
    hero: {
      title: '와이키키 한국 음식 2026: 하와이 K-푸드 완벽 가이드',
      subtitle: '뜨거운 바비큐부터 핫한 핫도그, 시원한 빙수까지 — 와이키키에서 만나는 최고의 한국 음식 총정리.',
      badge: '2026년 4월 업데이트',
    },
    intro: {
      title: '하와이 한국 음식 열풍',
      p1: '와이키키의 한식이 전성기를 맞이하고 있습니다. 2026년 초, 호놀룰루 일대에서 단 12일 만에 한국 식당 4곳이 새로 문을 열었습니다. K-푸드가 하와이에서 가장 핫한 외식 트렌드 중 하나로 자리 잡았다는 분명한 신호입니다. 익숙한 맛이 그리운 한국인 관광객이든, 새로운 맛을 탐험하고 싶은 여행자든, 와이키키에서 다양한 한식을 즐길 수 있습니다.',
      p2: '하와이와 한국 문화는 깊은 인연이 있습니다. 최초의 한인 이민자가 1903년에 하와이에 도착했고, 현재 하와이는 미국 내 최대 규모의 한인 커뮤니티를 보유하고 있습니다. 이러한 역사적 배경에 한류 열풍, 한국인 관광객 증가, 그리고 주한미군을 통한 유대감까지 더해져 하와이의 한식 신이 활발하게 성장하고 있습니다.',
      p3: '이 가이드에서는 2026년 와이키키와 그 주변에서 경험할 수 있는 한국 음식 베스트 10을 소개합니다. 코나커피도넛의 한국-하와이안 퓨전 메뉴부터 인기 바비큐 맛집, 트렌디한 디저트 카페, 숨은 맛집까지 모두 다룹니다.',
    },
    listTitle: '와이키키 한국 음식 체험 베스트 10 (2026년)',
    items: [
      {
        rank: 1,
        name: '코나커피도넛 — 한국-하와이안 퓨전',
        description: '칼라카우아 애비뉴 2142번지에 위치한 와이키키 매장은 한국과 하와이 음식 문화의 만남을 선보입니다. 바삭한 쌀가루 반죽에 쭉쭉 늘어나는 모짜렐라 치즈가 들어간 시그니처 한국식 핫도그, 신선한 열대 과일을 올린 하와이안 스타일 빙수를 맛보세요. 프리미엄 100% 코나 커피, 모찌 도넛, 말라사다까지 — 해변에서 몇 발자국 거리의 K-푸드 스팟입니다.',
        tags: ['핫도그', '빙수', '퓨전', '와이키키 비치'],
        highlight: true,
      },
      {
        rank: 2,
        name: '한국식 바비큐 — 테이블에서 즐기는 본격 그릴',
        description: '한식 가이드에서 바비큐는 빼놓을 수 없죠. 와이키키와 알라모아나 주변에는 훌륭한 한국 바비큐 식당이 여럿 있습니다. I\'O Waikiki는 오션뷰와 함께 모던한 갈비와 불고기를 제공하고, Sura Hawaii는 전통 반찬과 무한리필 그릴이 자랑입니다. 더 로컬한 경험을 원하시면 차로 10분 거리의 케아모쿠 스트리트 — 호놀룰루의 비공식 코리아타운으로 가세요.',
        tags: ['바비큐', '갈비', '불고기', '저녁'],
      },
      {
        rank: 3,
        name: '한국식 치킨',
        description: '한국 치킨은 세계적인 트렌드이며 하와이도 예외가 아닙니다. 두 번 튀겨 믿을 수 없을 만큼 바삭한 껍질과 촉촉한 속살을 자랑하는 한국식 치킨. 양념(달콤매콤)과 간장(간장마늘) 맛을 찾아보세요. 와이키키 근처 여러 식당에서 심야 치맥 체험도 가능합니다.',
        tags: ['치킨', '치맥', '야식'],
      },
      {
        rank: 4,
        name: '빙수 — 한국식 빙수 디저트',
        description: '빙수는 하와이의 따뜻한 날씨에 딱 맞는 디저트입니다. 일반 빙수와 달리 우유를 곱게 갈아 마치 눈처럼 입안에서 사르르 녹는 식감이 특징이죠. 코나커피도넛의 하와이안 스타일 빙수는 열대 망고, 릴리코이, 코코넛을 토핑하여 한국과 하와이의 맛을 동시에 즐길 수 있습니다. 해변 놀이 후 최고의 간식!',
        tags: ['디저트', '빙수', '트로피컬'],
        link: { href: '/bingsu-waikiki', label: '빙수 가이드 보기' },
      },
      {
        rank: 5,
        name: '한국식 핫도그 — 바삭한 길거리 음식',
        description: '한국식 핫도그(하뚜)가 SNS를 점령하고 있습니다. 와이키키는 하와이에서 이것을 맛볼 수 있는 최고의 장소 중 하나입니다. 미국식 콘도그와는 완전히 다릅니다 — 쭉 늘어나는 모짜렐라 치즈, 라이스 퍼프나 라면 크런치의 바삭한 코팅, 설탕을 뿌린 달짠 조합이 특징. 코나커피도넛에서는 칼라카우아 거리에서 6가지 종류를 즉석에서 튀겨 드립니다.',
        tags: ['길거리 음식', '핫도그', '치즈'],
        link: { href: '/korean-corn-dog-waikiki', label: '한국식 핫도그 보기' },
      },
      {
        rank: 6,
        name: '비빔밥 — 대표 한식 덮밥',
        description: '비빔밥은 해외에서 가장 유명한 한식이라 할 수 있습니다. 밥 위에 나물, 고추장, 계란후라이나 소고기를 올린 형형색색의 한 그릇. 와이키키와 알라모아나의 여러 한식당에서 밥 바닥이 고소하게 눌어붙는 돌솥비빔밥도 즐길 수 있습니다.',
        tags: ['덮밥', '건강식', '점심'],
      },
      {
        rank: 7,
        name: '한국 길거리 음식',
        description: '핫도그 외에도 떡볶이, 김밥, 만두, 붕어빵 등 다양한 한국 길거리 음식이 있습니다. 와이키키와 인터내셔널 마켓플레이스 주변에도 이런 정통 스낵을 파는 곳이 늘어나고 있어, 9시간 비행 없이도 서울 길거리 음식의 맛을 즐길 수 있습니다.',
        tags: ['길거리 음식', '스낵', '떡볶이'],
      },
      {
        rank: 8,
        name: '알라모아나 푸드코트의 K-푸드',
        description: '와이키키에서 버스로 금방인 알라모아나 센터에는 하와이 최고의 푸드코트가 있습니다. 짜장면, 순두부찌개, 잡채 등 한식 전문점이 잘 갖춰져 있어 한 번의 방문으로 다양한 한식을 저렴하게 맛볼 수 있습니다. 서울의 푸드코트에 뒤지지 않는 다양함입니다.',
        tags: ['푸드코트', '가성비', '다양한 메뉴'],
      },
      {
        rank: 9,
        name: '한국 베이커리 & 카페',
        description: '한국 베이커리 열풍이 하와이에도 상륙했습니다. 밤크림 페이스트리, 화제의 마늘크림치즈빵, 단팥빵, 한국식 크루아상까지 주목할 메뉴가 가득합니다. 달고나 커피를 제공하는 K-카페도 늘어나는 추세. 아메리카노와 빵으로 한국 카페 감성을 만끽하세요.',
        tags: ['베이커리', '카페', '빵'],
      },
      {
        rank: 10,
        name: '한국-하와이안 퓨전 요리',
        description: '하와이의 다문화 음식 문화가 만들어낸 한국과 하와이의 환상적인 크로스오버. 김치 포케(신선한 참치에 김치, 참기름, 고춧가루를 버무린 것), 고추장 글레이즈를 바른 스팸 무스비, 칼비 플레이트 런치 등. 두 음식 문화의 장점이 만난 하와이만의 독특한 맛입니다.',
        tags: ['퓨전', '포케', '플레이트 런치'],
      },
    ],
    boom: {
      title: '왜 하와이에서 한식이 대세인가',
      reasons: [
        {
          title: '한국인 관광객 급증',
          text: '한국은 현재 하와이 관광의 주요 시장 중 하나입니다. 한국인 관광객은 익숙한 맛과 새로운 경험을 동시에 원하며, 양질의 한식당에 대한 수요를 높이고 있습니다.',
        },
        {
          title: '글로벌 한류',
          text: '한국 드라마, K-팝, K-뷰티가 전 세계적으로 한식에 대한 관심을 불러일으키고 있습니다. 한국인이 아닌 외국인 손님들도 화면에서 본 비빔밥, 치킨, 빙수를 직접 맛보고 싶어 합니다.',
        },
        {
          title: '군사적 유대',
          text: '하와이에는 한국과 깊은 유대를 가진 미군 기지가 있으며, 한국에서 복무한 군인들과 그 가족들이 한식에 대한 사랑을 하와이로 가져옵니다.',
        },
        {
          title: '이민의 역사',
          text: '하와이 한인 이민 역사는 1903년으로 거슬러 올라갑니다. 한 세기가 넘는 한인 커뮤니티의 역사가 정통 한식 요리 전통을 확립했고, 지금도 끊임없이 진화하고 혁신하고 있습니다.',
        },
      ],
    },
    cheatSheet: {
      title: '한국 음식 용어 치트시트',
      subtitle: '하와이를 방문하는 외국인 친구에게 공유해 주세요! 한국 음식 주문이 쉬워지는 핵심 용어 모음입니다.',
      headers: ['한국어', '발음', '설명'],
      terms: [
        { korean: '비빔밥', pronunciation: 'bee-bim-bap', english: '나물과 고추장 소스를 넣은 혼합 밥' },
        { korean: '불고기', pronunciation: 'bool-go-gi', english: '달콤 짭조름한 양념 소고기 구이' },
        { korean: '갈비', pronunciation: 'gal-bi', english: '양념 소갈비구이, 바비큐의 꽃' },
        { korean: '떡볶이', pronunciation: 'tteok-bok-ki', english: '매콤한 떡볶이, 대표 길거리 음식' },
        { korean: '빙수', pronunciation: 'bing-su', english: '다양한 토핑의 팥빙수 디저트' },
        { korean: '핫도그 / 하뚜', pronunciation: 'hat-do-geu / hat-tu', english: '치즈와 바삭한 코팅의 한국식 핫도그' },
        { korean: '치맥', pronunciation: 'chi-maek', english: '치킨 + 맥주 조합' },
        { korean: '김밥', pronunciation: 'gim-bap', english: '김으로 만 밥과 재료의 한국식 롤' },
        { korean: '김치', pronunciation: 'gim-chi', english: '발효 매운 배추, 매 끼 나오는 반찬' },
        { korean: '소주', pronunciation: 'so-ju', english: '한국 대표 증류주, 바비큐의 단짝' },
      ],
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        {
          q: '와이키키에서 가장 맛있는 한국 음식은 어디서 먹을 수 있나요?',
          a: 'I\'O Waikiki, Sura Hawaii 같은 풀서비스 바비큐 레스토랑부터 칼라카우아 거리의 코나커피도넛(한국식 핫도그, 빙수, 한국-하와이안 퓨전 스낵)까지 다양한 선택지가 있습니다. 더 많은 옵션을 원한다면 알라모아나 근처의 케아모쿠 스트리트 — 호놀룰루의 비공식 코리아타운을 추천합니다.',
        },
        {
          q: '하와이에서 한국 음식이 인기가 있나요?',
          a: '매우 인기가 높습니다. 하와이는 1903년부터 미국 최대 규모의 한인 커뮤니티를 보유하고 있습니다. 칼비 플레이트 런치, 김치, 한국 바비큐는 일상적인 메뉴이며, 최근의 한류 열풍이 수요를 더욱 가속화하고 있습니다.',
        },
        {
          q: '와이키키에서 처음 한식을 먹는다면 뭘 추천하시나요?',
          a: '우선 한국 바비큐(불고기 또는 갈비)로 본격 그릴 체험을 해보세요. 간식으로는 코나커피도넛의 한국식 핫도그가 SNS에서 화제입니다. 빙수로 시원하게 마무리하고, 점심으로는 비빔밥을 추천합니다.',
        },
        {
          q: '와이키키에 채식주의자를 위한 한식 옵션이 있나요?',
          a: '네, 있습니다. 비빔밥은 쉽게 채식 버전으로 주문할 수 있고, 많은 한식당이 순두부찌개, 야채김밥, 잡채를 제공합니다. 한국식 핫도그도 고기 없이 치즈만 넣은 버전이 있습니다.',
        },
        {
          q: '와이키키에서 한국 음식 가격대는 어떤가요?',
          a: '한국식 핫도그와 길거리 스낵은 5~10달러, 비빔밥 점심은 보통 15~20달러, 한국 바비큐 저녁은 레스토랑에 따라 인당 25~50달러 이상입니다. 빙수 디저트는 보통 10~18달러. 가장 저렴하게 즐기려면 알라모아나 푸드코트를 추천합니다.',
        },
      ],
    },
    cta: {
      title: '코나커피도넛에서 한국-하와이안 퓨전을 맛보세요',
      text: '와이키키 2142 Kalakaua Ave. 한국식 핫도그, 하와이안 스타일 빙수, 프리미엄 코나 커피 등. 해변에서 가까운 거리, 매일 영업.',
      menuBtn: '메뉴 보기',
      cornDogBtn: '한국식 핫도그',
      bingsuBtn: '빙수 메뉴',
      directionsBtn: '길찾기',
    },
  },
  zh: {
    hero: {
      title: '威基基韩国美食2026：夏威夷K-Food终极指南',
      subtitle: '从滋滋作响的烤肉到潮流玉米热狗和绵密刨冰 — 发现威基基最佳韩国美食体验。',
      badge: '2026年4月更新',
    },
    intro: {
      title: '夏威夷韩国美食爆发',
      p1: '威基基的韩国美食正迎来高光时刻。2026年初，仅12天内就有4家韩国餐厅在檀香山地区开业 — 这清楚表明K-Food已成为夏威夷最热门的餐饮趋势之一。无论您是渴望家乡味道的韩国游客，还是想探索大胆新口味的旅行者，威基基现在都能提供丰富的韩式餐饮体验。',
      p2: '夏威夷与韩国文化有着深厚的渊源。第一批韩国移民于1903年抵达夏威夷，如今该州拥有美国最大的韩裔美国人社区之一。这份传承加上全球韩流、韩国旅游热潮以及夏威夷与韩国的军事联系，为繁荣的韩国美食场景创造了完美条件。',
      p3: '本指南涵盖2026年威基基及周边地区的10大韩国美食体验 — 从科纳咖啡甜甜圈的韩式-夏威夷融合创意到人气烤肉店、潮流甜品店和隐藏宝藏。',
    },
    listTitle: '威基基10大韩国美食体验（2026年）',
    items: [
      {
        rank: 1,
        name: '科纳咖啡甜甜圈 — 韩式-夏威夷融合',
        description: '位于卡拉卡瓦大道2142号的威基基旗舰店，将韩国与夏威夷美食文化完美融合。品尝我们的招牌韩式玉米热狗（酥脆米粉面糊配拉丝马苏里拉芝士），或来一碗夏威夷风格刨冰配新鲜热带水果。我们还提供优质100%科纳咖啡、麻糬甜甜圈和马拉萨达 — 海滩旁的完美K-Food站。',
        tags: ['玉米热狗', '刨冰', '融合', '威基基海滩'],
        highlight: true,
      },
      {
        rank: 2,
        name: '韩式烤肉 — 桌边现烤',
        description: '韩国美食指南少不了烤肉。威基基和附近的阿拉莫阿纳有多家优质韩式烤肉店。I\'O Waikiki提供现代高端的排骨和烤肉配海景，Sura Hawaii以传统小菜和自助烤肉著称。想体验更地道的，开车10分钟到Keeaumoku街 — 檀香山的非官方韩国城。',
        tags: ['烤肉', '排骨', '烤牛肉', '晚餐'],
      },
      {
        rank: 3,
        name: '韩式炸鸡',
        description: '韩式炸鸡是全球现象，夏威夷也不例外。双重油炸技术创造出极致酥脆的外壳，同时保持肉质多汁。寻找提供酱味（甜辣酱）和酱油蒜味品种的店铺。威基基附近多家餐厅提供深夜韩式炸鸡配扎啤 — 经典的炸鸡啤酒体验。',
        tags: ['炸鸡', '炸鸡啤酒', '夜宵'],
      },
      {
        rank: 4,
        name: '刨冰 — 韩式绵绵冰',
        description: '刨冰是夏威夷温暖气候的完美甜品。与普通刨冰不同，韩式刨冰将牛奶冰削成如雪般细腻的口感，入口即化。科纳咖啡甜甜圈的夏威夷风格刨冰融合热带芒果、百香果和椰子配料。海滩一天后的理想甜品。',
        tags: ['甜品', '刨冰', '热带'],
        link: { href: '/bingsu-waikiki', label: '阅读刨冰指南' },
      },
      {
        rank: 5,
        name: '韩式玉米热狗 — 酥脆街头小吃',
        description: '韩式玉米热狗（핫도그/하뚜）在社交媒体上爆红，威基基是夏威夷品尝它的最佳地点之一。这不是普通的美式玉米热狗 — 它有拉丝马苏里拉芝士、米泡芙或拉面碎的酥脆外壳，再撒上糖粉带来标志性的甜咸对比。科纳咖啡甜甜圈在卡拉卡瓦大道提供6种口味现点现炸。',
        tags: ['街头小吃', '玉米热狗', '芝士'],
        link: { href: '/korean-corn-dog-waikiki', label: '查看韩式玉米热狗' },
      },
      {
        rank: 6,
        name: '拌饭 — 标志性韩式饭碗',
        description: '拌饭可能是韩国在海外最知名的菜肴 — 米饭上铺满炒蔬菜、辣椒酱，通常还有煎蛋或牛肉片。威基基和阿拉莫阿纳地区多家韩式餐厅供应优质拌饭，包括石锅版本，米饭底部会形成令人满足的金黄锅巴。',
        tags: ['饭碗', '健康', '午餐'],
      },
      {
        rank: 7,
        name: '韩国街头小吃',
        description: '除了玉米热狗，韩国街头小吃还包括辣炒年糕、紫菜包饭、饺子和鲫鱼饼（鱼形红豆馅点心）。威基基和国际市场周围已有越来越多的小店和流动摊位提供这些正宗小吃，让游客无需9小时飞行就能体验首尔街头美食的氛围。',
        tags: ['街头小吃', '小食', '辣炒年糕'],
      },
      {
        rank: 8,
        name: '阿拉莫阿纳美食广场的K-Food',
        description: '从威基基乘公交即达的阿拉莫阿纳中心拥有夏威夷最好的美食广场之一，韩国美食占有重要位置。您可以找到专门的韩式摊位，供应炸酱面、嫩豆腐汤、杂菜等。这是一次品尝多种韩式菜肴的实惠方式，其品种丰富程度堪比首尔的美食广场。',
        tags: ['美食广场', '实惠', '多样化'],
      },
      {
        rank: 9,
        name: '韩式面包店与咖啡馆',
        description: '韩式烘焙潮流已到达夏威夷。栗子奶油糕点、爆红的蒜香奶油芝士面包、红豆包和韩式羊角面包等值得关注。威基基附近也有提供达尔戈纳咖啡的K-咖啡馆。配上一杯美式咖啡和糕点，享受K-咖啡馆的氛围。',
        tags: ['面包店', '咖啡馆', '糕点'],
      },
      {
        rank: 10,
        name: '韩式-夏威夷融合菜',
        description: '夏威夷的多元文化美食场景孕育了精彩的韩式-夏威夷跨界作品。试试泡菜波凯（新鲜金枪鱼配泡菜、芝麻油和辣椒粉），韩式午餐肉饭团加辣椒酱釉和腌萝卜，还有排骨便当。这些融合菜代表了两种美食文化的精华，是夏威夷独有的味道。',
        tags: ['融合', '波凯', '便当'],
      },
    ],
    boom: {
      title: '为什么韩国美食在夏威夷蓬勃发展',
      reasons: [
        {
          title: '韩国旅游激增',
          text: '韩国现在是夏威夷旅游的主要客源市场之一。韩国游客在寻求熟悉口味的同时也渴望新体验，推动了对优质韩式餐厅的需求。',
        },
        {
          title: '全球韩流',
          text: '韩剧、K-pop和韩国美妆文化在全球范围内引发了对韩国美食的兴趣。非韩国食客在屏幕上看到拌饭、炸鸡和刨冰后，也积极寻找这些美食。',
        },
        {
          title: '军事联系',
          text: '夏威夷拥有与韩国关系密切的大量美军驻地。曾驻扎韩国的军人及其家属将对韩国美食的热爱带回了岛上。',
        },
        {
          title: '移民传承',
          text: '韩国移民夏威夷的历史可追溯至1903年。一个多世纪的韩裔美国人社区建设确立了正宗的韩式烹饪传统，并持续演变创新。',
        },
      ],
    },
    cheatSheet: {
      title: '韩国美食术语速查表',
      subtitle: '了解这些关键词让点餐更轻松。在威基基美食探险前保存到手机上吧。',
      headers: ['韩语', '发音', '含义'],
      terms: [
        { korean: '비빔밥', pronunciation: 'bee-bim-bap', english: '蔬菜和辣椒酱的混合饭碗' },
        { korean: '불고기', pronunciation: 'bool-go-gi', english: '腌制烤牛肉，甜咸口味' },
        { korean: '갈비', pronunciation: 'gal-bi', english: '烤短肋排，烤肉必点' },
        { korean: '떡볶이', pronunciation: 'tteok-bok-ki', english: '辣炒年糕，经典街头小吃' },
        { korean: '빙수', pronunciation: 'bing-su', english: '加配料的刨冰甜品' },
        { korean: '핫도그 / 하뚜', pronunciation: 'hat-do-geu / hat-tu', english: '芝士酥脆外壳的韩式玉米热狗' },
        { korean: '치맥', pronunciation: 'chi-maek', english: '炸鸡+啤酒组合' },
        { korean: '김밥', pronunciation: 'gim-bap', english: '韩式紫菜饭卷（类似寿司）' },
        { korean: '김치', pronunciation: 'gim-chi', english: '发酵辣白菜，每餐必备' },
        { korean: '소주', pronunciation: 'so-ju', english: '韩国蒸馏酒，烤肉搭档' },
      ],
    },
    faq: {
      title: '常见问题',
      items: [
        {
          q: '威基基哪里能找到最好的韩国美食？',
          a: '从I\'O Waikiki和Sura Hawaii等全服务韩式烤肉餐厅，到卡拉卡瓦大道的科纳咖啡甜甜圈（韩式玉米热狗、刨冰和韩式-夏威夷融合小吃），选择丰富。更多选择可前往阿拉莫阿纳附近的Keeaumoku街 — 檀香山的非官方韩国城。',
        },
        {
          q: '韩国美食在夏威夷受欢迎吗？',
          a: '非常受欢迎。夏威夷自1903年起就拥有美国最大的韩裔社区之一。排骨便当、泡菜和韩式烤肉是日常主食，最近的韩流更加速了需求增长。',
        },
        {
          q: '在威基基第一次吃韩餐应该尝试什么？',
          a: '先从韩式烤肉（烤牛肉或排骨）开始体验互动烤肉。街头小吃推荐科纳咖啡甜甜圈的韩式玉米热狗。用刨冰降温，午餐别错过拌饭。',
        },
        {
          q: '威基基有素食韩餐选择吗？',
          a: '有的。拌饭可以轻松做成素食版，很多韩式餐厅提供嫩豆腐汤、蔬菜紫菜包饭和杂菜。韩式玉米热狗也有纯芝士无肉版本。',
        },
        {
          q: '威基基韩餐价格如何？',
          a: '韩式玉米热狗和街头小吃5到10美元，拌饭午餐通常15到20美元，韩式烤肉晚餐每人25到50美元以上不等。刨冰甜品通常10到18美元。最划算的是阿拉莫阿纳美食广场。',
        },
      ],
    },
    cta: {
      title: '在科纳咖啡甜甜圈体验韩式-夏威夷融合',
      text: '威基基2142 Kalakaua Ave。韩式玉米热狗、夏威夷风格刨冰、优质科纳咖啡等。靠近海滩，每日营业。',
      menuBtn: '查看菜单',
      cornDogBtn: '韩式玉米热狗',
      bingsuBtn: '刨冰菜单',
      directionsBtn: '获取路线',
    },
  },
};

// Icons for list items
const itemIcons = [Trophy, Flame, Drumstick, IceCreamCone, UtensilsCrossed, Soup, ShoppingBag, ShoppingBag, Cake, Sandwich];

// BlogPosting JSON-LD
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Korean Food in Waikiki 2026: The Ultimate Guide to K-Food in Hawaii',
  description: 'Discover the best Korean food in Waikiki for 2026. Korean BBQ, corn dogs, bingsu, fried chicken & more. 10 must-try K-food experiences near Waikiki Beach.',
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
      url: 'https://www.konacoffeedonut.com/og-image.jpg',
    },
  },
  datePublished: '2026-04-14',
  dateModified: '2026-04-14',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/en/blog/korean-food-waikiki',
  },
  keywords: 'korean food waikiki, korean restaurant waikiki, korean bbq hawaii, korean corn dog waikiki, bingsu waikiki',
};

// FAQPage JSON-LD
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I find the best Korean food in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best Korean food in Waikiki ranges from full-service BBQ restaurants like I\'O Waikiki and Sura Hawaii to quick-service spots like Kona Coffee Donut on Kalakaua Ave, which offers Korean corn dogs, bingsu, and Korean-Hawaiian fusion snacks. For a wider selection, head to Keeaumoku Street near Ala Moana.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Korean food popular in Hawaii?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Extremely. Hawaii has one of the largest Korean-American communities in the U.S., dating back to 1903. Korean food is deeply woven into local culture, and the recent K-wave has only accelerated demand.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Korean dishes should I try for the first time in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with Korean BBQ (bulgogi or galbi) for the full interactive grilling experience. For street food, try Korean corn dogs at Kona Coffee Donut. Cool down with bingsu (Korean shaved ice), and do not miss bibimbap for a filling, flavorful lunch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there vegetarian Korean food options in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Bibimbap can easily be made vegetarian, and many Korean restaurants offer tofu stew, vegetable kimbap, and japchae. Korean corn dogs also come in cheese-only versions without meat.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Korean food cost in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Korean corn dogs and street snacks run $5 to $10. A bibimbap lunch is typically $15 to $20. Korean BBQ dinners range from $25 to $50+ per person. Bingsu desserts are usually $10 to $18. The Ala Moana food court offers the most budget-friendly Korean meals.',
      },
    },
  ],
};

export default function KoreanFoodWaikikiPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = content[locale as keyof typeof content] || content.en;

  return (
    <>
      <Script
        id="blog-posting-schema"
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
        {/* Hero Section */}
        <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-orange-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(255,100,50,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(255,50,50,0.2) 0%, transparent 50%)' }} />
          </div>
          <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto py-20">
            <motion.span
              className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t.hero.badge}
            </motion.span>
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.hero.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-6">{t.intro.title}</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">{t.intro.p1}</p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">{t.intro.p2}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{t.intro.p3}</p>
          </motion.div>
        </section>

        {/* Top 10 List */}
        <section className="py-16 px-4 bg-red-50/50">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-red-900 mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t.listTitle}
            </motion.h2>

            <div className="space-y-8">
              {t.items.map((item, index) => {
                const Icon = itemIcons[index] || UtensilsCrossed;
                return (
                  <motion.div
                    key={index}
                    className={`rounded-2xl p-6 md:p-8 shadow-sm border ${item.highlight ? 'bg-gradient-to-r from-red-50 to-orange-50 border-red-200 ring-2 ring-red-200' : 'bg-white border-gray-100'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${item.highlight ? 'bg-red-600 text-white' : 'bg-red-100 text-red-700'}`}>
                        {item.rank}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className={`w-5 h-5 ${item.highlight ? 'text-red-600' : 'text-red-500'}`} />
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900">{item.name}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-3">{item.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {item.tags.map((tag, i) => (
                            <span key={i} className="inline-block bg-red-100 text-red-700 text-xs font-medium px-2.5 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        {item.link && (
                          <Link
                            href={`/${locale}${item.link.href}`}
                            className="inline-flex items-center gap-1 text-red-600 font-semibold hover:text-red-700 transition-colors"
                          >
                            {item.link.label}
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        )}
                        {item.highlight && (
                          <div className="mt-4 flex flex-wrap gap-3">
                            <Link
                              href={`/${locale}/menu/korean-corn-dog`}
                              className="inline-flex items-center gap-1 bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
                            >
                              <UtensilsCrossed className="w-4 h-4" />
                              {locale === 'ko' ? '핫도그 메뉴' : locale === 'ja' ? 'コーンドッグメニュー' : locale === 'zh' ? '玉米热狗菜单' : 'Corn Dog Menu'}
                            </Link>
                            <Link
                              href={`/${locale}/menu/bingsu`}
                              className="inline-flex items-center gap-1 bg-white text-red-600 border border-red-200 text-sm font-medium px-4 py-2 rounded-full hover:bg-red-50 transition-colors"
                            >
                              <IceCreamCone className="w-4 h-4" />
                              {locale === 'ko' ? '빙수 메뉴' : locale === 'ja' ? 'ビンスメニュー' : locale === 'zh' ? '刨冰菜单' : 'Bingsu Menu'}
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Korean Food is Booming */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-red-900 mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t.boom.title}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.boom.reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="bg-red-50 rounded-2xl p-6 border border-red-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-red-800 mb-2">{reason.title}</h3>
                <p className="text-gray-700 leading-relaxed">{reason.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Korean Food Terms Cheat Sheet */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <BookOpen className="w-6 h-6 text-red-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-red-900">{t.cheatSheet.title}</h2>
              </div>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">{t.cheatSheet.subtitle}</p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      {t.cheatSheet.headers.map((header, i) => (
                        <th key={i} className="px-4 md:px-6 py-4 text-left font-semibold text-sm md:text-base">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.cheatSheet.terms.map((term, index) => (
                      <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-red-50/30'}`}>
                        <td className="px-4 md:px-6 py-3 font-bold text-gray-900 text-lg">{term.korean}</td>
                        <td className="px-4 md:px-6 py-3 text-red-700 font-medium italic">{term.pronunciation}</td>
                        <td className="px-4 md:px-6 py-3 text-gray-700">{term.english}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-red-900 mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t.faq.title}
          </motion.h2>
          <div className="space-y-4">
            {t.faq.items.map((faq, index) => (
              <motion.details
                key={index}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <summary className="px-6 py-5 cursor-pointer font-semibold text-gray-900 hover:text-red-700 transition-colors list-none flex items-center justify-between">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-2" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-red-700 to-red-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-lg mb-8 opacity-90 flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                {t.cta.text}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href={`/${locale}/menu`}
                  className="inline-block bg-white text-red-800 px-6 py-3 rounded-full font-semibold hover:bg-red-100 transition-colors"
                >
                  {t.cta.menuBtn}
                </Link>
                <Link
                  href={`/${locale}/korean-corn-dog-waikiki`}
                  className="inline-block bg-red-600 text-white border border-white/30 px-6 py-3 rounded-full font-semibold hover:bg-red-500 transition-colors"
                >
                  {t.cta.cornDogBtn}
                </Link>
                <Link
                  href={`/${locale}/bingsu-waikiki`}
                  className="inline-block bg-red-600 text-white border border-white/30 px-6 py-3 rounded-full font-semibold hover:bg-red-500 transition-colors"
                >
                  {t.cta.bingsuBtn}
                </Link>
                <a
                  href="https://maps.google.com/?q=2142+Kalakaua+Ave+Honolulu+HI+96815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-transparent text-white border border-white/50 px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  <Clock className="w-4 h-4" />
                  {t.cta.directionsBtn}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
