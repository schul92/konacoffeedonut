'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { DollarSign, MapPin, Clock, Star, TrendingDown, Utensils, Coffee, ShoppingBag, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Script from 'next/script';
import SubpageNav from '@/components/SubpageNav';

// ── i18n content ──────────────────────────────────────────────────────
const content = {
  en: {
    hero: {
      title: 'Cheap Eats in Waikiki Under $15',
      subtitle: 'Best Budget Food 2026',
      badge: "A Local's Guide",
      description: 'You do not need to spend $40 per meal to eat well in Waikiki. Here are 10 budget-friendly spots where locals actually eat.',
    },
    intro: {
      title: 'Eating Well in Waikiki on a Budget',
      p1: "Let's be honest — Waikiki has a reputation for being expensive. A sit-down dinner for two can easily top $100, and even a casual lunch at a beachfront restaurant often runs $25-35 per person. But here is what most visitors do not realize: some of the best food in Waikiki costs under $15.",
      p2: "As locals, we know exactly where to find incredible food without the tourist-trap prices. From freshly made mochi donuts and authentic spam musubi to steaming bowls of handmade udon, Waikiki is full of hidden gems that deliver big flavor on a small budget. This guide covers our 10 favorite cheap eats — all under $15, all delicious, and all within walking distance of the main strip.",
      p3: "Whether you are visiting Hawaii for the first time or you are a resident looking for new affordable spots, this 2026 guide will help you eat like a local without emptying your wallet.",
    },
    spots: {
      title: '10 Best Cheap Eats in Waikiki (Under $15)',
      items: [
        {
          rank: 1,
          name: 'Kona Coffee Donut',
          type: 'Coffee & Donuts',
          price: '$3.50 - $10',
          location: '2142 Kalakaua Ave',
          description: "The newest addition to Waikiki's food scene, Kona Coffee Donut combines premium 100% Kona coffee with artisan mochi donuts from MOCHILAND — and the prices are surprisingly wallet-friendly. Mochi donuts start at just $3.50, fresh malasadas from $4, and a cup of genuine Kona coffee from $5. You would pay $8-12 for Kona coffee alone at most Waikiki cafes. For under $10, you can get a donut-and-coffee combo that rivals any $20 cafe breakfast. The quality-to-price ratio here is unbeatable — premium ingredients at donut-shop prices.",
          mustTry: 'Mochi donut + Kona coffee combo ($8.50)',
          tag: 'Best Value',
        },
        {
          rank: 2,
          name: 'Musubi Cafe Iyasume',
          type: 'Japanese-Hawaiian',
          price: '$3 - $6',
          location: 'Royal Hawaiian Center & Waikiki Beach Walk',
          description: "A Waikiki institution for quick, cheap, and satisfying eats. Their spam musubi — rice wrapped in nori with grilled Spam and various toppings — is the ultimate Hawaiian grab-and-go meal. At $3-4 per musubi, you can fill up for under $8. They have multiple locations throughout Waikiki, making it incredibly convenient. Locals often grab a couple of musubi on their way to the beach. The shrimp tempura and unagi versions are worth the slight upcharge.",
          mustTry: 'Spam musubi variety pack ($6)',
          tag: 'Local Favorite',
        },
        {
          rank: 3,
          name: 'Rainbow Drive-In',
          type: 'Plate Lunch',
          price: '$8 - $12',
          location: '3308 Kanaina Ave',
          description: "A Honolulu legend since 1961, Rainbow Drive-In serves classic Hawaiian plate lunch at old-school prices. Their loco moco — a mountain of rice topped with a hamburger patty, gravy, and a fried egg — is the definition of comfort food and costs around $8-10. Plate lunches come with two scoops of rice and macaroni salad. It is a short walk from Waikiki proper but absolutely worth the trip. Cash and card accepted, and the portions are generous.",
          mustTry: 'Loco moco plate ($9.50)',
          tag: 'Classic Hawaiian',
        },
        {
          rank: 4,
          name: 'Marukame Udon',
          type: 'Japanese Udon',
          price: '$5 - $10',
          location: '2310 Kuhio Ave',
          description: "Watch your udon noodles being made fresh right in front of you. Marukame Udon is a cafeteria-style Japanese noodle shop where a basic bowl of perfectly chewy udon starts at just $5. Add tempura toppings for $1-3 each. The line often stretches out the door, but it moves quickly and the food is worth the wait. A filling meal with udon and two tempura pieces runs about $8-10. This is easily one of the best value meals in all of Waikiki.",
          mustTry: 'Kake udon + shrimp tempura ($8)',
          tag: 'Best Noodles',
        },
        {
          rank: 5,
          name: 'Waikiki Food Trucks',
          type: 'Various',
          price: '$10 - $14',
          location: 'Kalakaua Ave & side streets',
          description: "Waikiki's food truck scene has exploded in recent years. You will find trucks serving everything from Korean BBQ and garlic shrimp to poke bowls and acai. Most plate lunches from food trucks run $10-12, which is significantly less than sitting down at a restaurant for the same food. Look for trucks parked along Kalakaua Ave and the side streets near Kuhio. Portions are generous and the food is made to order. Pro tip: trucks that cater to locals (not just tourists) tend to have better prices and bigger portions.",
          mustTry: 'Garlic shrimp plate ($12)',
          tag: 'Great Portions',
        },
        {
          rank: 6,
          name: '7-Eleven Hawaii',
          type: 'Convenience Store',
          price: '$3 - $7',
          location: 'Multiple locations throughout Waikiki',
          description: "Do not laugh — Hawaii's 7-Eleven stores are nothing like the ones on the mainland. Inspired by Japanese konbini culture, they stock surprisingly good poke bowls, fresh musubi, bento boxes, and onigiri. A poke bowl for $5-7 is legitimately tasty and uses fresh fish. Spam musubi for $2-3 is a reliable quick meal. There are multiple 7-Eleven locations within Waikiki, open 24 hours. This is the ultimate budget hack for visitors — especially for early morning bites or late-night snacks when restaurants are closed.",
          mustTry: 'Poke bowl + spam musubi ($7)',
          tag: 'Budget Hack',
        },
        {
          rank: 7,
          name: "Teddy's Bigger Burgers",
          type: 'Burgers',
          price: '$8 - $14',
          location: '134 Kapahulu Ave',
          description: "When you are craving a proper burger, Teddy's delivers hand-formed patties made with 100% Big Island beef. A classic burger starts around $8, and even their specialty burgers with premium toppings stay under $14. The fries are hand-cut and the milkshakes are thick. Located just outside the main Waikiki strip on Kapahulu Ave, Teddy's draws more locals than tourists — always a good sign. It is a no-frills burger joint where the quality speaks for itself.",
          mustTry: 'Original Teddy Burger ($9)',
          tag: 'Best Burger',
        },
        {
          rank: 8,
          name: 'Royal Hawaiian Center Food Court',
          type: 'Food Court',
          price: '$8 - $14',
          location: '2201 Kalakaua Ave, Level 1',
          description: "The food court at the Royal Hawaiian Center is an underrated gem right in the heart of Waikiki. You will find a mix of local and international options — poke, ramen, Thai food, and more — at prices significantly lower than the restaurants upstairs or across the street. Most meals run $8-14, and you get air conditioning, free seating, and clean restrooms. It is an especially good option on rainy days or when you just want a quick, affordable meal without the sit-down restaurant experience.",
          mustTry: 'Poke bowl combo ($11)',
          tag: 'Most Convenient',
        },
        {
          rank: 9,
          name: 'Acai Bowls & Smoothie Spots',
          type: 'Healthy/Acai',
          price: '$10 - $13',
          location: 'Various locations along Kalakaua Ave',
          description: "Acai bowls are practically a food group in Hawaii, and Waikiki has no shortage of spots serving them. While some tourist-oriented places charge $16+, plenty of local-friendly spots offer generous bowls for $10-13. Look for shops on the side streets off Kalakaua Ave rather than beachfront locations for better prices. Most bowls come loaded with fresh tropical fruit, granola, and honey. Add a smoothie for a complete healthy meal. These are perfect for a light lunch or post-beach refuel.",
          mustTry: 'Tropical acai bowl with granola ($11)',
          tag: 'Healthy Option',
        },
        {
          rank: 10,
          name: 'KCC Farmers Market',
          type: "Farmers' Market",
          price: '$5 - $12',
          location: 'Kapiolani Community College (Saturday mornings)',
          description: "Technically just outside Waikiki, the KCC Saturday Farmers Market is worth the short trip. Open Saturday mornings from 7:30 AM to 11 AM, you will find everything from fresh tropical fruit and local honey to plate lunches, pastries, and coffee — all at prices well below restaurant rates. A full breakfast or lunch here runs $8-12, and the quality is exceptional because everything comes directly from local farmers and small food producers. Get there early for the best selection. Take TheBus Route 22 or 24 from Waikiki.",
          mustTry: 'Local fruit plate + fresh pastry ($8)',
          tag: "Farmers' Market",
        },
      ],
    },
    tips: {
      title: 'Money-Saving Tips for Eating in Waikiki',
      items: [
        {
          title: 'Hit Happy Hours',
          description: "Many Waikiki restaurants offer happy hour specials between 3-6 PM with 30-50% off appetizers and drinks. Duke's Waikiki, Yard House, and Tommy Bahama all run great happy hour deals. You can eat well for $10-15 during these windows.",
        },
        {
          title: 'Eat Where Locals Eat',
          description: "If a restaurant is full of tourists in aloha shirts, you are probably paying a premium. Walk one or two blocks off the main Kalakaua strip and prices drop noticeably. Kuhio Ave and the side streets have significantly better value.",
        },
        {
          title: 'Food Trucks Over Restaurants',
          description: "For the same style of plate lunch or poke bowl, food trucks typically charge $3-5 less than sit-down restaurants. The food is often just as good — sometimes better — because trucks rely on repeat customers and word-of-mouth.",
        },
        {
          title: 'Combo Deals and Set Meals',
          description: "Look for combo deals at local spots. At Kona Coffee Donut, a donut-and-coffee combo saves you money versus ordering separately. Marukame Udon's tempura add-ons are cheaper than ordering a separate side at most places.",
        },
        {
          title: 'Breakfast is the Cheapest Meal',
          description: "Breakfast and brunch in Waikiki cost significantly less than lunch or dinner at the same establishments. A coffee-and-pastry breakfast for $8-10 sets you up for the morning without breaking the bank.",
        },
        {
          title: 'Grocery Stores and Convenience Stores',
          description: "Foodland, ABC Stores, and 7-Eleven Hawaii all stock surprisingly good prepared food. A poke bowl from Foodland rivals many restaurants at half the price. Stock up on snacks and breakfast items to save on at least one meal per day.",
        },
      ],
    },
    priceTable: {
      title: 'Waikiki Price Comparison: Common Items',
      headers: ['Item', 'Tourist Restaurant', 'Budget Spot', 'You Save'],
      rows: [
        ['Coffee (Kona)', '$8 - $12', '$5 (Kona Coffee Donut)', 'Up to $7'],
        ['Breakfast combo', '$18 - $25', '$8 - $10 (donut + coffee)', 'Up to $17'],
        ['Poke bowl', '$18 - $22', '$5 - $7 (7-Eleven / food truck)', 'Up to $17'],
        ['Plate lunch', '$18 - $24', '$8 - $12 (Rainbow / food truck)', 'Up to $16'],
        ['Udon noodles', '$14 - $18', '$5 - $8 (Marukame Udon)', 'Up to $13'],
        ['Burger meal', '$18 - $22', '$8 - $14 (Teddy\'s)', 'Up to $14'],
        ['Acai bowl', '$16 - $20', '$10 - $13 (local shops)', 'Up to $10'],
        ['Spam musubi', '$5 - $7', '$2 - $4 (Iyasume / 7-Eleven)', 'Up to $5'],
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'What is the cheapest meal you can get in Waikiki?',
          a: "Spam musubi from 7-Eleven or Musubi Cafe Iyasume starts at $2-3, making it the cheapest filling meal in Waikiki. For a more substantial meal, Marukame Udon's basic udon bowl at $5 is hard to beat. A mochi donut and Kona coffee combo at Kona Coffee Donut runs about $8.50 for a premium breakfast.",
        },
        {
          q: 'Is it possible to eat three meals a day in Waikiki for under $30?',
          a: "Absolutely. A sample budget day: breakfast at Kona Coffee Donut (donut + coffee, ~$9), lunch at Marukame Udon (~$8), and dinner at a food truck or Rainbow Drive-In (~$10-12). That is three solid meals for under $30. Supplement with fruit from ABC Store or 7-Eleven snacks to stay well under budget.",
        },
        {
          q: 'Where do locals eat in Waikiki to avoid tourist prices?',
          a: "Locals tend to eat on Kuhio Ave (one block back from Kalakaua), at food trucks on the side streets, and at no-frills spots like Marukame Udon and Rainbow Drive-In. Kona Coffee Donut on Kalakaua Ave is a local favorite for quality at fair prices. The KCC Farmers Market on Saturdays is another local go-to.",
        },
        {
          q: 'Are food trucks in Waikiki safe and good quality?',
          a: "Yes. Hawaii has strict health department regulations for food trucks, and they receive regular inspections. The food truck scene in Waikiki features experienced operators who have been serving locals for years. Look for trucks with lines — that is usually a sign of quality and freshness. Most accept credit cards.",
        },
        {
          q: 'What budget-friendly food is unique to Hawaii that I should try?',
          a: "Do not leave without trying: spam musubi (Hawaii's signature snack, $2-4), a plate lunch with two scoops of rice and mac salad ($8-12), mochi donuts (chewy-crispy texture unique to Hawaii, from $3.50 at Kona Coffee Donut), malasadas (Portuguese-Hawaiian fried dough, from $4), and poke (fresh raw fish, $5-7 at convenience stores). All are under $15 and unmissable.",
        },
      ],
    },
    cta: {
      title: 'Start Your Waikiki Food Adventure',
      text: 'Visit Kona Coffee Donut at 2142 Kalakaua Ave for premium Kona coffee and artisan mochi donuts at unbeatable prices.',
      menuBtn: 'View Our Menu',
      breakfastBtn: 'Breakfast Guide',
      directionsBtn: 'Get Directions',
    },
    publishedDate: 'April 14, 2026',
    updatedDate: 'April 14, 2026',
    readTime: '7 min read',
    author: 'Kona Coffee Donut Team',
  },
  ja: {
    hero: {
      title: 'ワイキキの安うまグルメ 15ドル以下',
      subtitle: '2026年版 格安フードガイド',
      badge: '地元民おすすめ',
      description: 'ワイキキで1食40ドルも払う必要はありません。地元の人が実際に食べている、お財布に優しい10スポットをご紹介。',
    },
    intro: {
      title: 'ワイキキで予算内に美味しく食べる方法',
      p1: '正直に言いましょう — ワイキキは物価が高いことで有名です。2人でディナーを食べれば簡単に100ドルを超え、ビーチフロントのレストランでカジュアルなランチでも1人25〜35ドルかかることが多いです。でも、ほとんどの観光客が気づいていないことがあります：ワイキキの最高の食事の中には、15ドル以下で食べられるものがたくさんあるのです。',
      p2: '地元民として、観光客向けの高い値段を避けて素晴らしい食事を見つける場所を熟知しています。焼きたてのモチドーナツ、本格スパムむすび、手打ちうどんまで、ワイキキには少ない予算で大満足の隠れた名店がたくさんあります。このガイドでは、すべて15ドル以下、すべて美味しい、すべてメインストリップから徒歩圏内の10スポットをご紹介します。',
      p3: '初めてハワイを訪れる方も、新しい格安スポットを探している地元の方も、この2026年ガイドで地元の人のように食事を楽しみながらお財布を守りましょう。',
    },
    spots: {
      title: 'ワイキキの格安グルメ10選（15ドル以下）',
      items: [
        {
          rank: 1,
          name: 'Kona Coffee Donut（コナコーヒードーナツ）',
          type: 'コーヒー＆ドーナツ',
          price: '$3.50 - $10',
          location: '2142 Kalakaua Ave',
          description: 'ワイキキのグルメシーンに新登場。プレミアム100%コナコーヒーとMOCHILANDの職人モチドーナツを、驚くほどお手頃な価格で。モチドーナツは$3.50から、新鮮なマラサダは$4から、本物のコナコーヒーは$5から。ワイキキの多くのカフェではコナコーヒーだけで$8〜12しますが、ここなら$10以下でドーナツとコーヒーのコンボが楽しめます。プレミアム品質をドーナツショップ価格で — コスパ最強です。',
          mustTry: 'モチドーナツ＋コナコーヒーコンボ（$8.50）',
          tag: 'コスパ最高',
        },
        {
          rank: 2,
          name: 'いやすめ',
          type: '和風ハワイアン',
          price: '$3 - $6',
          location: 'ロイヤルハワイアンセンター他',
          description: 'ワイキキで手軽に安く満足できる定番。スパムむすびは$3〜4で、2〜3個で十分お腹いっぱいに。ワイキキ内に複数店舗あり、ビーチに行く途中に手軽に買えます。えび天ぷらやうなぎバージョンも少しの追加料金でおすすめ。日本人観光客にも大人気の安心の味です。',
          mustTry: 'スパムむすびバラエティパック（$6）',
          tag: 'ローカル定番',
        },
        {
          rank: 3,
          name: 'レインボードライブイン',
          type: 'プレートランチ',
          price: '$8 - $12',
          location: '3308 Kanaina Ave',
          description: '1961年創業のホノルルの伝説的レストラン。ロコモコ — ご飯の上にハンバーグ、グレービー、目玉焼きの山盛り — は$8〜10でハワイのコンフォートフードの定番。プレートランチにはライス2スクープとマカロニサラダ付き。ワイキキ中心部から少し歩きますが、訪れる価値は十分です。',
          mustTry: 'ロコモコプレート（$9.50）',
          tag: 'ハワイの定番',
        },
        {
          rank: 4,
          name: '丸亀うどん',
          type: '日本のうどん',
          price: '$5 - $10',
          location: '2310 Kuhio Ave',
          description: '目の前で麺を打つのが見られるカフェテリア式のうどん店。基本のうどんはわずか$5から。天ぷらトッピングは$1〜3で追加可能。行列ができることが多いですが回転は早く、食べる価値ありです。うどんと天ぷら2品で$8〜10程度。ワイキキ全体で最もコスパの良い食事の一つです。',
          mustTry: 'かけうどん＋えび天（$8）',
          tag: '最高の麺類',
        },
        {
          rank: 5,
          name: 'ワイキキのフードトラック',
          type: '各種',
          price: '$10 - $14',
          location: 'カラカウア通り周辺',
          description: 'ワイキキのフードトラックシーンは近年急成長中。韓国BBQ、ガーリックシュリンプ、ポケ丼、アサイーなど何でもあります。ほとんどのプレートランチは$10〜12で、同じ料理をレストランで食べるよりかなりお得。地元客向けのトラックは価格も良心的でポーションも大きい傾向があります。',
          mustTry: 'ガーリックシュリンププレート（$12）',
          tag: 'ボリューム満点',
        },
        {
          rank: 6,
          name: 'セブンイレブン ハワイ',
          type: 'コンビニ',
          price: '$3 - $7',
          location: 'ワイキキ内に複数店舗',
          description: '笑わないでください — ハワイのセブンイレブンは本土のものとは全く別物です。日本のコンビニ文化に影響を受け、驚くほど美味しいポケ丼、新鮮なむすび、弁当、おにぎりが揃っています。ポケ丼$5〜7は本当に美味しく新鮮な魚を使用。24時間営業で、レストランが閉まっている早朝や深夜の強い味方です。',
          mustTry: 'ポケ丼＋スパムむすび（$7）',
          tag: '節約の裏ワザ',
        },
        {
          rank: 7,
          name: "テディーズ・ビガーバーガーズ",
          type: 'バーガー',
          price: '$8 - $14',
          location: '134 Kapahulu Ave',
          description: 'ハンバーガーが食べたくなったら、テディーズへ。ビッグアイランドビーフ100%の手作りパティが自慢。クラシックバーガーは$8前後から。カパフル通りにあり、観光客より地元客が多い — これは良い証拠です。フライドポテトは手切り、ミルクシェイクは濃厚。',
          mustTry: 'オリジナル テディバーガー（$9）',
          tag: 'バーガー部門1位',
        },
        {
          rank: 8,
          name: 'ロイヤルハワイアンセンター フードコート',
          type: 'フードコート',
          price: '$8 - $14',
          location: '2201 Kalakaua Ave 1階',
          description: 'ワイキキ中心部にある穴場のフードコート。ポケ、ラーメン、タイ料理など、地元と海外の選択肢が揃い、周辺レストランよりかなり安い$8〜14で食事できます。冷房完備、座席無料、清潔なトイレあり。雨の日や手軽に食事したい時に特におすすめ。',
          mustTry: 'ポケ丼コンボ（$11）',
          tag: '最も便利',
        },
        {
          rank: 9,
          name: 'アサイーボウル＆スムージー各店',
          type: 'ヘルシー / アサイー',
          price: '$10 - $13',
          location: 'カラカウア通り沿い各所',
          description: 'アサイーボウルはハワイではほぼ主食。ワイキキにはたくさんのお店がありますが、観光客向けの$16以上の店を避け、カラカウア通りから一本入った地元向けの店を探せば$10〜13で充実したボウルが楽しめます。新鮮なトロピカルフルーツ、グラノーラ、ハニー付き。ビーチ後の軽食に最適。',
          mustTry: 'トロピカルアサイーボウル（$11）',
          tag: 'ヘルシー',
        },
        {
          rank: 10,
          name: 'KCCファーマーズマーケット',
          type: 'ファーマーズマーケット',
          price: '$5 - $12',
          location: 'カピオラニ・コミュニティ・カレッジ（土曜午前）',
          description: '厳密にはワイキキの外ですが、土曜朝のKCCファーマーズマーケットは短い移動の価値あり。7:30AM〜11AM開催で、新鮮なトロピカルフルーツ、地元の蜂蜜、プレートランチ、ペストリー、コーヒーがレストランよりずっと安い価格で。朝食や昼食が$8〜12で、すべて地元の農家や小さな食品生産者から直接購入。ワイキキからバス22番か24番で行けます。',
          mustTry: '地元フルーツプレート＋焼き菓子（$8）',
          tag: 'ファーマーズマーケット',
        },
      ],
    },
    tips: {
      title: 'ワイキキで食費を節約するコツ',
      items: [
        {
          title: 'ハッピーアワーを活用',
          description: '多くのワイキキレストランは15時〜18時にハッピーアワーを実施し、前菜やドリンクが30〜50%オフに。$10〜15で十分食事できます。',
        },
        {
          title: '地元の人が食べる場所へ',
          description: 'カラカウア通りのメインストリップから1〜2ブロック離れるだけで価格が下がります。クヒオ通りや裏通りの方がコスパが良いです。',
        },
        {
          title: 'レストランよりフードトラック',
          description: '同じようなプレートランチやポケ丼でも、フードトラックはレストランより$3〜5安い場合が多いです。',
        },
        {
          title: 'コンボ・セットメニュー',
          description: 'コナコーヒードーナツのドーナツ＋コーヒーコンボなど、セットで注文するとお得。丸亀うどんの天ぷら追加も別注文より安上がりです。',
        },
        {
          title: '朝食が一番安い',
          description: 'ワイキキでは朝食が最も安い食事。$8〜10のコーヒーとペストリーの朝食で午前中を乗り切れます。',
        },
        {
          title: 'スーパー・コンビニを活用',
          description: 'フードランド、ABCストア、セブンイレブンの調理済み食品は驚くほど美味しい。1日1食をコンビニにするだけで大幅節約。',
        },
      ],
    },
    priceTable: {
      title: 'ワイキキ価格比較：主なメニュー',
      headers: ['メニュー', '観光客向けレストラン', '格安スポット', '節約額'],
      rows: [
        ['コナコーヒー', '$8 - $12', '$5（コナコーヒードーナツ）', '最大$7'],
        ['朝食コンボ', '$18 - $25', '$8 - $10（ドーナツ+コーヒー）', '最大$17'],
        ['ポケ丼', '$18 - $22', '$5 - $7（セブンイレブン等）', '最大$17'],
        ['プレートランチ', '$18 - $24', '$8 - $12（レインボー等）', '最大$16'],
        ['うどん', '$14 - $18', '$5 - $8（丸亀うどん）', '最大$13'],
        ['バーガーセット', '$18 - $22', '$8 - $14（テディーズ）', '最大$14'],
        ['アサイーボウル', '$16 - $20', '$10 - $13（地元店）', '最大$10'],
        ['スパムむすび', '$5 - $7', '$2 - $4（いやすめ等）', '最大$5'],
      ],
    },
    faq: {
      title: 'よくある質問',
      items: [
        {
          q: 'ワイキキで一番安い食事は何ですか？',
          a: 'セブンイレブンやいやすめのスパムむすびは$2〜3から。もう少ししっかり食べたい場合は、丸亀うどんの基本うどんが$5。コナコーヒードーナツのモチドーナツとコナコーヒーのコンボは約$8.50でプレミアムな朝食になります。',
        },
        {
          q: 'ワイキキで1日3食を$30以下で食べられますか？',
          a: 'もちろん可能です。例：朝食にコナコーヒードーナツ（約$9）、昼食に丸亀うどん（約$8）、夕食にフードトラックかレインボードライブイン（約$10〜12）。3食で$30以下に収まります。',
        },
        {
          q: '地元の人はワイキキのどこで食べますか？',
          a: 'クヒオ通り、裏通りのフードトラック、丸亀うどんやレインボードライブインなどの飾らないスポット。カラカウア通りのコナコーヒードーナツは品質と価格のバランスが良い地元の人気店。土曜のKCCファーマーズマーケットも定番です。',
        },
        {
          q: 'ワイキキのフードトラックは安全で美味しいですか？',
          a: 'はい。ハワイには厳しい保健衛生規制があり、フードトラックも定期検査を受けています。行列ができているトラックは品質と鮮度の証。ほとんどがクレジットカード対応です。',
        },
        {
          q: 'ハワイでしか食べられない格安グルメは？',
          a: 'スパムむすび（$2〜4）、プレートランチ（$8〜12）、モチドーナツ（コナコーヒードーナツで$3.50から）、マラサダ（$4から）、ポケ（コンビニで$5〜7）。すべて$15以下で、ハワイならではの味です。',
        },
      ],
    },
    cta: {
      title: 'ワイキキ食べ歩きの旅へ',
      text: 'カラカウア通り2142番地のコナコーヒードーナツへ。プレミアムコナコーヒーと職人モチドーナツを最高のコスパで。',
      menuBtn: 'メニューを見る',
      breakfastBtn: '朝食ガイド',
      directionsBtn: '道順を見る',
    },
    publishedDate: '2026年4月14日',
    updatedDate: '2026年4月14日',
    readTime: '7分で読めます',
    author: 'コナコーヒードーナツ チーム',
  },
  ko: {
    hero: {
      title: '와이키키 $15 이하 맛집',
      subtitle: '2026 가성비 푸드 가이드',
      badge: '로컬 추천',
      description: '와이키키에서 한 끼에 $40를 쓸 필요 없습니다. 현지인이 실제로 가는 가성비 좋은 10곳을 소개합니다.',
    },
    intro: {
      title: '와이키키에서 알뜰하게 맛있게 먹기',
      p1: '솔직히 말하면 와이키키는 비싸기로 유명합니다. 2인 저녁 식사가 쉽게 $100을 넘기고, 해변 레스토랑에서 간단한 점심도 1인당 $25-35가 듭니다. 하지만 대부분의 관광객이 모르는 사실이 있습니다: 와이키키 최고의 음식 중 상당수가 $15 이하입니다.',
      p2: '현지인으로서 관광객 가격 없이 훌륭한 음식을 찾는 곳을 정확히 알고 있습니다. 갓 만든 모찌 도넛, 정통 스팸 무스비, 수제 우동까지 — 적은 예산으로 큰 만족을 주는 숨은 맛집이 가득합니다.',
      p3: '하와이를 처음 방문하든, 새로운 가성비 맛집을 찾는 거주자이든, 이 2026 가이드로 현지인처럼 먹으면서 지갑을 지키세요.',
    },
    spots: {
      title: '와이키키 가성비 맛집 10선 ($15 이하)',
      items: [
        {
          rank: 1,
          name: 'Kona Coffee Donut (코나커피도넛)',
          type: '커피 & 도넛',
          price: '$3.50 - $10',
          location: '2142 Kalakaua Ave',
          description: '와이키키 맛집 신상. 프리미엄 100% 코나 커피와 MOCHILAND 장인 모찌 도넛을 놀라운 가격에. 모찌 도넛 $3.50부터, 말라사다 $4부터, 정품 코나 커피 $5부터. 대부분 와이키키 카페에서 코나 커피만 $8-12인데, 여기서는 $10 이하에 도넛+커피 콤보를 즐길 수 있습니다. 프리미엄 품질을 도넛샵 가격에 — 가성비 최강.',
          mustTry: '모찌 도넛 + 코나 커피 콤보 ($8.50)',
          tag: '가성비 최고',
        },
        {
          rank: 2,
          name: 'Musubi Cafe Iyasume (이야스메)',
          type: '일본-하와이안',
          price: '$3 - $6',
          location: '로열 하와이안 센터 외',
          description: '와이키키에서 빠르고 저렴하며 만족스러운 식사의 대명사. 스팸 무스비 $3-4로, 2-3개면 충분히 배부릅니다. 와이키키 내 여러 매장이 있어 해변 가는 길에 간편하게 구매 가능.',
          mustTry: '스팸 무스비 버라이어티 팩 ($6)',
          tag: '현지인 인기',
        },
        {
          rank: 3,
          name: 'Rainbow Drive-In',
          type: '플레이트 런치',
          price: '$8 - $12',
          location: '3308 Kanaina Ave',
          description: '1961년 이래 호놀룰루의 전설. 로코모코 — 밥 위에 햄버그 패티, 그레이비, 계란프라이 — 가 $8-10. 플레이트 런치에는 밥 2스쿱과 마카로니 샐러드 포함. 양이 넉넉합니다.',
          mustTry: '로코모코 플레이트 ($9.50)',
          tag: '하와이 클래식',
        },
        {
          rank: 4,
          name: 'Marukame Udon (마루카메 우동)',
          type: '일본 우동',
          price: '$5 - $10',
          location: '2310 Kuhio Ave',
          description: '눈앞에서 면을 뽑는 카페테리아식 우동집. 기본 우동 $5부터, 튀김 토핑 $1-3 추가. 줄이 길지만 빠르게 움직이고 음식이 훌륭합니다. 우동+튀김 2개에 $8-10.',
          mustTry: '가케 우동 + 새우 튀김 ($8)',
          tag: '최고의 면',
        },
        {
          rank: 5,
          name: '와이키키 푸드트럭',
          type: '다양',
          price: '$10 - $14',
          location: '칼라카우아 거리 주변',
          description: '한국 BBQ, 갈릭 쉬림프, 포케 볼, 아사이 등 다양한 메뉴. 대부분 플레이트 런치 $10-12로 레스토랑보다 상당히 저렴. 현지인 대상 트럭이 가격도 양도 더 좋습니다.',
          mustTry: '갈릭 쉬림프 플레이트 ($12)',
          tag: '양 많음',
        },
        {
          rank: 6,
          name: '세븐일레븐 하와이',
          type: '편의점',
          price: '$3 - $7',
          location: '와이키키 내 여러 매장',
          description: '하와이 세븐일레븐은 본토와 전혀 다릅니다. 일본 편의점 문화의 영향으로 포케 볼, 무스비, 도시락이 놀랍도록 맛있습니다. 포케 볼 $5-7은 진짜 신선한 생선을 사용. 24시간 영업으로 이른 아침이나 늦은 밤에도 든든합니다.',
          mustTry: '포케 볼 + 스팸 무스비 ($7)',
          tag: '절약 꿀팁',
        },
        {
          rank: 7,
          name: "Teddy's Bigger Burgers",
          type: '버거',
          price: '$8 - $14',
          location: '134 Kapahulu Ave',
          description: '빅아일랜드 비프 100% 수제 패티 버거. 클래식 버거 $8부터. 카파훌루 거리에 위치하며 관광객보다 현지인이 더 많이 찾는 — 좋은 신호입니다.',
          mustTry: '오리지널 테디 버거 ($9)',
          tag: '최고의 버거',
        },
        {
          rank: 8,
          name: '로열 하와이안 센터 푸드코트',
          type: '푸드코트',
          price: '$8 - $14',
          location: '2201 Kalakaua Ave 1층',
          description: '와이키키 중심부의 숨은 맛집. 포케, 라멘, 태국 음식 등 주변 레스토랑보다 훨씬 저렴한 $8-14. 에어컨, 무료 좌석, 깨끗한 화장실 완비.',
          mustTry: '포케 볼 콤보 ($11)',
          tag: '가장 편리',
        },
        {
          rank: 9,
          name: '아사이 볼 & 스무디 전문점',
          type: '건강식 / 아사이',
          price: '$10 - $13',
          location: '칼라카우아 거리 주변',
          description: '아사이 볼은 하와이의 국민 음식. 관광객용 $16+ 매장 대신, 한 블록 안쪽 현지인 매장에서 $10-13에 푸짐한 볼을 즐기세요. 비치 후 가벼운 식사로 완벽.',
          mustTry: '트로피컬 아사이 볼 ($11)',
          tag: '건강 옵션',
        },
        {
          rank: 10,
          name: 'KCC 파머스 마켓',
          type: '파머스 마켓',
          price: '$5 - $12',
          location: '카피올라니 커뮤니티 칼리지 (토요일 오전)',
          description: '토요일 아침 7:30-11:00 운영. 신선한 열대 과일, 플레이트 런치, 페이스트리, 커피를 레스토랑보다 훨씬 저렴하게. 와이키키에서 버스 22번이나 24번으로 이동 가능.',
          mustTry: '로컬 과일 플레이트 + 패스트리 ($8)',
          tag: '파머스 마켓',
        },
      ],
    },
    tips: {
      title: '와이키키 식비 절약 꿀팁',
      items: [
        { title: '해피아워 활용', description: '많은 레스토랑이 오후 3-6시에 전채와 음료 30-50% 할인. $10-15로 충분히 식사 가능.' },
        { title: '현지인이 먹는 곳으로', description: '칼라카우아 메인 거리에서 1-2블록만 벗어나면 가격이 눈에 띄게 낮아집니다.' },
        { title: '레스토랑보다 푸드트럭', description: '같은 메뉴도 푸드트럭이 $3-5 저렴한 경우가 많습니다.' },
        { title: '콤보 & 세트 메뉴', description: '코나커피도넛의 도넛+커피 콤보 등 세트 주문이 더 저렴합니다.' },
        { title: '아침이 가장 저렴', description: '커피+페이스트리 아침 $8-10으로 오전을 든든하게.' },
        { title: '마트 & 편의점 활용', description: '푸드랜드, ABC스토어, 세븐일레븐의 조리식품이 의외로 맛있고 저렴합니다.' },
      ],
    },
    priceTable: {
      title: '와이키키 가격 비교: 주요 메뉴',
      headers: ['메뉴', '관광객 레스토랑', '가성비 맛집', '절약 금액'],
      rows: [
        ['코나 커피', '$8 - $12', '$5 (코나커피도넛)', '최대 $7'],
        ['아침 콤보', '$18 - $25', '$8 - $10 (도넛+커피)', '최대 $17'],
        ['포케 볼', '$18 - $22', '$5 - $7 (세븐일레븐 등)', '최대 $17'],
        ['플레이트 런치', '$18 - $24', '$8 - $12 (레인보우 등)', '최대 $16'],
        ['우동', '$14 - $18', '$5 - $8 (마루카메)', '최대 $13'],
        ['버거 세트', '$18 - $22', '$8 - $14 (테디스)', '최대 $14'],
        ['아사이 볼', '$16 - $20', '$10 - $13 (로컬 매장)', '최대 $10'],
        ['스팸 무스비', '$5 - $7', '$2 - $4 (이야스메 등)', '최대 $5'],
      ],
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        {
          q: '와이키키에서 가장 저렴한 식사는?',
          a: '세븐일레븐이나 이야스메의 스팸 무스비 $2-3부터. 좀 더 든든한 식사는 마루카메 우동 $5. 코나커피도넛의 모찌 도넛+코나 커피 콤보는 약 $8.50으로 프리미엄 아침식사를 즐길 수 있습니다.',
        },
        {
          q: '하루 3끼를 $30 이하로 먹을 수 있나요?',
          a: '물론입니다. 예: 아침 코나커피도넛(~$9), 점심 마루카메 우동(~$8), 저녁 푸드트럭(~$10-12). 3끼 합계 $30 이하.',
        },
        {
          q: '현지인은 와이키키 어디서 먹나요?',
          a: '쿠히오 거리, 뒷골목 푸드트럭, 마루카메 우동, 레인보우 드라이브인 등. 코나커피도넛은 품질과 가격이 좋아 현지인도 자주 찾습니다.',
        },
        {
          q: '와이키키 푸드트럭은 안전하고 맛있나요?',
          a: '네. 하와이는 푸드트럭에 대한 위생 규정이 엄격하고 정기 검사를 실시합니다. 줄이 긴 트럭이 보통 품질이 좋다는 신호입니다.',
        },
        {
          q: '하와이에서만 먹을 수 있는 가성비 음식은?',
          a: '스팸 무스비($2-4), 플레이트 런치($8-12), 모찌 도넛(코나커피도넛 $3.50부터), 말라사다($4부터), 포케(편의점 $5-7). 모두 $15 이하로 하와이만의 맛입니다.',
        },
      ],
    },
    cta: {
      title: '와이키키 맛집 탐험을 시작하세요',
      text: '칼라카우아 거리 2142번지 코나커피도넛에서 프리미엄 코나 커피와 장인 모찌 도넛을 최고의 가성비로.',
      menuBtn: '메뉴 보기',
      breakfastBtn: '아침식사 가이드',
      directionsBtn: '길찾기',
    },
    publishedDate: '2026년 4월 14일',
    updatedDate: '2026년 4월 14일',
    readTime: '7분 소요',
    author: '코나커피도넛 팀',
  },
  zh: {
    hero: {
      title: '威基基15美元以下平价美食',
      subtitle: '2026预算美食指南',
      badge: '本地人推荐',
      description: '在威基基不必每顿花40美元也能吃好。这里有10个本地人真正去的实惠餐厅。',
    },
    intro: {
      title: '在威基基精打细算也能吃得好',
      p1: '坦白说，威基基以物价高闻名。两人晚餐轻松超过100美元，海滩餐厅的简单午餐也要25-35美元/人。但大多数游客不知道的是：威基基一些最棒的美食其实不到15美元。',
      p2: '作为本地人，我们清楚知道在哪里能找到价格实惠的美味。从新鲜的麻糬甜甜圈、正宗午餐肉饭团到手工乌冬面，威基基到处都是花小钱吃大餐的宝藏店铺。本指南涵盖了我们最爱的10家平价美食——全部15美元以下，全部好吃，全部步行可达。',
      p3: '无论您是第一次来夏威夷的游客，还是寻找新实惠去处的居民，这份2026指南都能帮您像本地人一样吃好而不花大钱。',
    },
    spots: {
      title: '威基基10大平价美食（15美元以下）',
      items: [
        {
          rank: 1,
          name: 'Kona Coffee Donut（科纳咖啡甜甜圈）',
          type: '咖啡 & 甜甜圈',
          price: '$3.50 - $10',
          location: '2142 Kalakaua Ave',
          description: '威基基美食新星。高品质100%科纳咖啡搭配MOCHILAND手工麻糬甜甜圈，价格出人意料地亲民。麻糬甜甜圈$3.50起，新鲜马拉萨达$4起，正宗科纳咖啡$5起。威基基大多数咖啡馆光科纳咖啡就要$8-12，这里$10以内就能享用甜甜圈+咖啡套餐。高品质，甜甜圈店价格——性价比无敌。',
          mustTry: '麻糬甜甜圈+科纳咖啡套餐（$8.50）',
          tag: '最佳性价比',
        },
        {
          rank: 2,
          name: 'Musubi Cafe Iyasume',
          type: '日式夏威夷',
          price: '$3 - $6',
          location: '皇家夏威夷中心等多处',
          description: '威基基快速便宜又满足的经典。午餐肉饭团$3-4，买2-3个就能吃饱。威基基内多家分店，去海滩路上顺手就能买。',
          mustTry: '午餐肉饭团组合（$6）',
          tag: '本地最爱',
        },
        {
          rank: 3,
          name: 'Rainbow Drive-In',
          type: '便当套餐',
          price: '$8 - $12',
          location: '3308 Kanaina Ave',
          description: '自1961年以来的檀香山传奇。洛科莫科——米饭上放汉堡肉饼、肉汁和煎蛋——$8-10，是夏威夷的经典安慰食物。套餐配两勺米饭和通心粉沙拉，份量十足。',
          mustTry: '洛科莫科套餐（$9.50）',
          tag: '夏威夷经典',
        },
        {
          rank: 4,
          name: 'Marukame Udon（丸龟乌冬）',
          type: '日式乌冬',
          price: '$5 - $10',
          location: '2310 Kuhio Ave',
          description: '看着面条在面前现做的自助式乌冬面店。基本乌冬面仅$5起，天妇罗配料$1-3。经常排长队但移动很快。乌冬面+两个天妇罗约$8-10，是威基基最有性价比的美食之一。',
          mustTry: '清汤乌冬+虾天妇罗（$8）',
          tag: '最佳面食',
        },
        {
          rank: 5,
          name: '威基基美食车',
          type: '多种',
          price: '$10 - $14',
          location: '卡拉卡瓦大道周边',
          description: '韩式烧烤、蒜虾、波奇碗、巴西莓等应有尽有。大多数便当$10-12，比坐下来的餐厅便宜很多。面向本地人的餐车价格更实惠、份量更大。',
          mustTry: '蒜虾便当（$12）',
          tag: '份量大',
        },
        {
          rank: 6,
          name: '7-Eleven 夏威夷',
          type: '便利店',
          price: '$3 - $7',
          location: '威基基多家门店',
          description: '夏威夷的7-Eleven和大陆完全不同。受日本便利店文化影响，波奇碗、饭团、便当都出奇地好吃。波奇碗$5-7使用新鲜鱼肉。24小时营业，餐厅关门时的最佳选择。',
          mustTry: '波奇碗+午餐肉饭团（$7）',
          tag: '省钱秘诀',
        },
        {
          rank: 7,
          name: "Teddy's Bigger Burgers",
          type: '汉堡',
          price: '$8 - $14',
          location: '134 Kapahulu Ave',
          description: '100%大岛牛肉手工汉堡。经典汉堡$8起。位于卡帕胡鲁大道，本地人比游客多——好评的标志。',
          mustTry: '原味泰迪汉堡（$9）',
          tag: '最佳汉堡',
        },
        {
          rank: 8,
          name: '皇家夏威夷中心美食广场',
          type: '美食广场',
          price: '$8 - $14',
          location: '2201 Kalakaua Ave 1楼',
          description: '威基基中心被低估的宝藏。波奇、拉面、泰式料理等，比周围餐厅便宜得多，$8-14就能吃好。空调、免费座位、干净洗手间。',
          mustTry: '波奇碗套餐（$11）',
          tag: '最方便',
        },
        {
          rank: 9,
          name: '巴西莓碗 & 奶昔店',
          type: '健康/巴西莓',
          price: '$10 - $13',
          location: '卡拉卡瓦大道沿线',
          description: '避开$16以上的游客店，往巷子里走一步找本地店，$10-13就有丰盛的碗。配新鲜热带水果、格兰诺拉、蜂蜜。海滩后的完美轻食。',
          mustTry: '热带巴西莓碗（$11）',
          tag: '健康选择',
        },
        {
          rank: 10,
          name: 'KCC农贸市场',
          type: '农贸市场',
          price: '$5 - $12',
          location: '卡皮欧拉尼社区学院（周六上午）',
          description: '周六上午7:30-11:00营业。新鲜热带水果、便当、糕点、咖啡，价格远低于餐厅。完整的早餐或午餐$8-12。从威基基坐22或24路公交可达。',
          mustTry: '本地水果拼盘+糕点（$8）',
          tag: '农贸市场',
        },
      ],
    },
    tips: {
      title: '威基基省钱吃饭技巧',
      items: [
        { title: '抓住欢乐时光', description: '很多餐厅下午3-6点前菜和饮料打折30-50%。$10-15就能吃好。' },
        { title: '去本地人吃饭的地方', description: '离卡拉卡瓦主街1-2个街区，价格明显下降。库希奥大道和小巷更划算。' },
        { title: '美食车优于餐厅', description: '同样的菜式，美食车通常便宜$3-5。' },
        { title: '套餐更划算', description: '科纳咖啡甜甜圈的甜甜圈+咖啡套餐比单点更省。丸龟乌冬的天妇罗加点也比单独点菜便宜。' },
        { title: '早餐最便宜', description: '$8-10的咖啡+糕点早餐就能撑过上午。' },
        { title: '善用超市和便利店', description: 'Foodland、ABC Store、7-Eleven的预制食品出乎意料地好吃。每天至少一餐用便利店解决能省不少。' },
      ],
    },
    priceTable: {
      title: '威基基价格对比：常见菜品',
      headers: ['菜品', '游客餐厅', '平价店', '节省金额'],
      rows: [
        ['科纳咖啡', '$8 - $12', '$5（科纳咖啡甜甜圈）', '最多$7'],
        ['早餐套餐', '$18 - $25', '$8 - $10（甜甜圈+咖啡）', '最多$17'],
        ['波奇碗', '$18 - $22', '$5 - $7（7-Eleven等）', '最多$17'],
        ['便当套餐', '$18 - $24', '$8 - $12（Rainbow等）', '最多$16'],
        ['乌冬面', '$14 - $18', '$5 - $8（丸龟乌冬）', '最多$13'],
        ['汉堡套餐', '$18 - $22', '$8 - $14（Teddy\'s）', '最多$14'],
        ['巴西莓碗', '$16 - $20', '$10 - $13（本地店）', '最多$10'],
        ['午餐肉饭团', '$5 - $7', '$2 - $4（Iyasume等）', '最多$5'],
      ],
    },
    faq: {
      title: '常见问题',
      items: [
        {
          q: '威基基最便宜的餐食是什么？',
          a: '7-Eleven或Iyasume的午餐肉饭团$2-3起。更实在的选择是丸龟乌冬$5。科纳咖啡甜甜圈的麻糬甜甜圈+科纳咖啡套餐约$8.50，是高品质的早餐。',
        },
        {
          q: '在威基基一天三餐能控制在$30以内吗？',
          a: '完全可以。例如：早餐科纳咖啡甜甜圈(~$9)，午餐丸龟乌冬(~$8)，晚餐美食车(~$10-12)。三餐合计$30以内。',
        },
        {
          q: '本地人在威基基哪里吃饭？',
          a: '库希奥大道、小巷美食车、丸龟乌冬、Rainbow Drive-In等朴实的地方。科纳咖啡甜甜圈因品质和价格兼优也深受本地人喜爱。',
        },
        {
          q: '威基基的美食车安全和美味吗？',
          a: '是的。夏威夷对美食车有严格的卫生法规和定期检查。排队长的餐车通常是品质和新鲜度的保证。大多数接受信用卡。',
        },
        {
          q: '夏威夷有哪些独特的平价美食值得尝试？',
          a: '午餐肉饭团($2-4)、便当套餐($8-12)、麻糬甜甜圈(科纳咖啡甜甜圈$3.50起)、马拉萨达($4起)、波奇(便利店$5-7)。全部$15以下，都是夏威夷独有的味道。',
        },
      ],
    },
    cta: {
      title: '开启您的威基基美食之旅',
      text: '来卡拉卡瓦大道2142号科纳咖啡甜甜圈，以最高性价比品尝高品质科纳咖啡和手工麻糬甜甜圈。',
      menuBtn: '查看菜单',
      breakfastBtn: '早餐指南',
      directionsBtn: '获取路线',
    },
    publishedDate: '2026年4月14日',
    updatedDate: '2026年4月14日',
    readTime: '7分钟阅读',
    author: '科纳咖啡甜甜圈团队',
  },
};

// ── JSON-LD Schemas ───────────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Cheap Eats in Waikiki Under $15: Best Budget Food 2026',
  description: 'Discover the 10 best cheap eats in Waikiki under $15. A local guide to budget-friendly food including mochi donuts, spam musubi, plate lunch, and more.',
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
    '@id': 'https://www.konacoffeedonut.com/en/blog/cheap-eats-waikiki',
  },
  keywords: 'cheap eats waikiki, budget food waikiki, cheap food waikiki, affordable restaurants waikiki',
  wordCount: 1300,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the cheapest meal you can get in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Spam musubi from 7-Eleven or Musubi Cafe Iyasume starts at $2-3, making it the cheapest filling meal in Waikiki. For a more substantial meal, Marukame Udon's basic udon bowl at $5 is hard to beat. A mochi donut and Kona coffee combo at Kona Coffee Donut runs about $8.50 for a premium breakfast.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is it possible to eat three meals a day in Waikiki for under $30?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. A sample budget day: breakfast at Kona Coffee Donut (donut + coffee, ~$9), lunch at Marukame Udon (~$8), and dinner at a food truck or Rainbow Drive-In (~$10-12). That is three solid meals for under $30.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do locals eat in Waikiki to avoid tourist prices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Locals tend to eat on Kuhio Ave, at food trucks on the side streets, and at no-frills spots like Marukame Udon and Rainbow Drive-In. Kona Coffee Donut on Kalakaua Ave is a local favorite for quality at fair prices. The KCC Farmers Market on Saturdays is another local go-to.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are food trucks in Waikiki safe and good quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Hawaii has strict health department regulations for food trucks, and they receive regular inspections. The food truck scene in Waikiki features experienced operators who have been serving locals for years. Look for trucks with lines — that is usually a sign of quality and freshness.",
      },
    },
    {
      '@type': 'Question',
      name: 'What budget-friendly food is unique to Hawaii that I should try?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Do not leave without trying: spam musubi ($2-4), a plate lunch with two scoops of rice ($8-12), mochi donuts (from $3.50 at Kona Coffee Donut), malasadas (from $4), and poke (fresh raw fish, $5-7 at convenience stores). All are under $15 and unmissable.",
      },
    },
  ],
};

// ── Animation variants ────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ── Component ─────────────────────────────────────────────────────────
export default function CheapEatsWaikikiPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = content[locale as keyof typeof content] || content.en;

  const tagColors: Record<string, string> = {
    'Best Value': 'bg-emerald-600',
    'Local Favorite': 'bg-teal-600',
    'Classic Hawaiian': 'bg-amber-600',
    'Best Noodles': 'bg-orange-600',
    'Great Portions': 'bg-cyan-600',
    'Budget Hack': 'bg-green-600',
    'Best Burger': 'bg-red-600',
    'Most Convenient': 'bg-blue-600',
    'Healthy Option': 'bg-lime-600',
    "Farmers' Market": 'bg-emerald-700',
    // ja
    'コスパ最高': 'bg-emerald-600',
    'ローカル定番': 'bg-teal-600',
    'ハワイの定番': 'bg-amber-600',
    '最高の麺類': 'bg-orange-600',
    'ボリューム満点': 'bg-cyan-600',
    '節約の裏ワザ': 'bg-green-600',
    'バーガー部門1位': 'bg-red-600',
    '最も便利': 'bg-blue-600',
    'ヘルシー': 'bg-lime-600',
    'ファーマーズマーケット': 'bg-emerald-700',
    // ko
    '가성비 최고': 'bg-emerald-600',
    '현지인 인기': 'bg-teal-600',
    '하와이 클래식': 'bg-amber-600',
    '최고의 면': 'bg-orange-600',
    '양 많음': 'bg-cyan-600',
    '절약 꿀팁': 'bg-green-600',
    '최고의 버거': 'bg-red-600',
    '가장 편리': 'bg-blue-600',
    '건강 옵션': 'bg-lime-600',
    '파머스 마켓': 'bg-emerald-700',
    // zh
    '最佳性价比': 'bg-emerald-600',
    '本地最爱': 'bg-teal-600',
    '夏威夷经典': 'bg-amber-600',
    '最佳面食': 'bg-orange-600',
    '份量大': 'bg-cyan-600',
    '省钱秘诀': 'bg-green-600',
    '最佳汉堡': 'bg-red-600',
    '最方便': 'bg-blue-600',
    '健康选择': 'bg-lime-600',
    '农贸市场': 'bg-emerald-700',
  };

  return (
    <>
      {/* JSON-LD */}
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
      
      {/* Hero Image */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/images/blog/cheap-eats-waikiki.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
      </div>
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-emerald-800 via-teal-700 to-emerald-900 text-white overflow-hidden">
          {/* decorative circles */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-emerald-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 md:py-28 text-center">
            <motion.span
              className="inline-block bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {t.hero.badge}
            </motion.span>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl font-semibold text-emerald-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t.hero.description}
            </motion.p>

            {/* meta line */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 text-sm text-emerald-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{t.readTime}</span>
              <span>|</span>
              <span>{t.publishedDate}</span>
              <span>|</span>
              <span>{t.author}</span>
            </motion.div>
          </div>
        </section>

        {/* ── Introduction ─────────────────────────────────────── */}
        <section className="py-14 md:py-20 px-4 max-w-3xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6">{t.intro.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">{t.intro.p1}</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">{t.intro.p2}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{t.intro.p3}</p>
          </motion.div>
        </section>

        {/* ── 10 Budget Spots ──────────────────────────────────── */}
        <section className="py-14 md:py-20 px-4 bg-gradient-to-b from-emerald-50 to-white">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-emerald-900 mb-12 text-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t.spots.title}
            </motion.h2>

            <div className="space-y-8">
              {t.spots.items.map((spot, idx) => (
                <motion.article
                  key={idx}
                  className={`relative bg-white rounded-2xl shadow-lg border overflow-hidden ${
                    idx === 0 ? 'border-emerald-400 ring-2 ring-emerald-200' : 'border-gray-100'
                  }`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* rank badge */}
                  <div className="absolute top-0 left-0 bg-emerald-700 text-white w-12 h-12 flex items-center justify-center text-xl font-bold rounded-br-2xl">
                    #{spot.rank}
                  </div>

                  <div className="p-6 pt-5 pl-16 md:pl-20">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">{spot.name}</h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
                          <Utensils className="w-3.5 h-3.5" /> {spot.type}
                        </p>
                      </div>
                      <span className={`${tagColors[spot.tag] || 'bg-emerald-600'} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                        {spot.tag}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1"><DollarSign className="w-4 h-4 text-emerald-600" />{spot.price}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-emerald-600" />{spot.location}</span>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-3">{spot.description}</p>

                    <div className="bg-emerald-50 rounded-lg px-4 py-2.5 flex items-center gap-2">
                      <Star className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-emerald-800">
                        {locale === 'ja' ? 'おすすめ' : locale === 'ko' ? '추천' : locale === 'zh' ? '推荐' : 'Must Try'}: {spot.mustTry}
                      </span>
                    </div>

                    {/* internal link for Kona Coffee Donut */}
                    {idx === 0 && (
                      <div className="mt-3 flex flex-wrap gap-3">
                        <Link
                          href={`/${locale}/menu`}
                          className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:text-emerald-900 transition-colors"
                        >
                          {t.cta.menuBtn} <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href={`/${locale}/breakfast-waikiki`}
                          className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:text-emerald-900 transition-colors"
                        >
                          {t.cta.breakfastBtn} <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Money-Saving Tips ─────────────────────────────────── */}
        <section className="py-14 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-emerald-900 mb-10 text-center flex items-center justify-center gap-2"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TrendingDown className="w-8 h-8" />
              {t.tips.title}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {t.tips.items.map((tip, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Price Comparison Table ────────────────────────────── */}
        <section className="py-14 md:py-20 px-4 bg-emerald-50">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 text-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t.priceTable.title}
            </motion.h2>

            <motion.div
              className="overflow-x-auto rounded-xl shadow-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <table className="w-full bg-white text-sm md:text-base">
                <thead>
                  <tr className="bg-emerald-700 text-white">
                    {t.priceTable.headers.map((h, i) => (
                      <th key={i} className="px-4 py-3 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.priceTable.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-emerald-50/60'}>
                      <td className="px-4 py-3 font-medium text-gray-900">{row[0]}</td>
                      <td className="px-4 py-3 text-red-600 line-through opacity-70">{row[1]}</td>
                      <td className="px-4 py-3 text-emerald-700 font-semibold">{row[2]}</td>
                      <td className="px-4 py-3 text-emerald-600 font-bold">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="py-14 md:py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-emerald-900 mb-10 text-center"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t.faq.title}
            </motion.h2>

            <div className="space-y-6">
              {t.faq.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <section className="py-16 px-4 bg-gradient-to-r from-emerald-700 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Coffee className="w-10 h-10 mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-lg mb-8 text-white/85 max-w-2xl mx-auto">{t.cta.text}</p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={`/${locale}/menu`}
                  className="inline-flex items-center gap-2 bg-white text-emerald-800 px-7 py-3.5 rounded-full font-semibold hover:bg-emerald-50 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  {t.cta.menuBtn}
                </Link>
                <Link
                  href={`/${locale}/breakfast-waikiki`}
                  className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white border border-white/30 px-7 py-3.5 rounded-full font-semibold hover:bg-white/25 transition-colors"
                >
                  {t.cta.breakfastBtn}
                </Link>
                <a
                  href="https://maps.google.com/?q=2142+Kalakaua+Ave+Honolulu+HI+96815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white border border-white/30 px-7 py-3.5 rounded-full font-semibold hover:bg-white/25 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
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
