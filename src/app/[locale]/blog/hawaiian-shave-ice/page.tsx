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
      title: 'What is Hawaiian Shave Ice?',
      subtitle: 'The Island Icon — and the Creamy Korean Bingsu Upgrade in Waikiki',
      updated: 'Updated June 2026',
      readTime: '8 min read',
    },
    definition: {
      title: 'What is Hawaiian Shave Ice?',
      text: '<strong>Hawaiian shave ice</strong> is a beloved island treat made by shaving a block of ice into <strong>ultra-fine, fluffy snow</strong>, then drenching it in colorful flavored syrups — think rainbow, lilikoʻi, guava, and coconut. Unlike a mainland snow cone\'s crushed pellets, true shave ice is so soft the syrup soaks all the way through. Popular add-ons include a <strong>scoop of vanilla ice cream at the bottom</strong>, sweet azuki red beans, a <strong>"snow cap" of condensed milk</strong> drizzled on top, tangy li hing mui, and chewy mochi. It is <strong>one of Hawaiʻi\'s most iconic desserts</strong> — and today, the Korean milk-ice version known as <strong>bingsu</strong> is its creamy modern evolution.',
    },
    history: {
      title: 'The History of Hawaiian Shave Ice',
      subtitle: 'From Plantation-Era Kakigori to Rainbow Icon — and Korean Bingsu',
      p1: 'Hawaiian shave ice traces its roots to <strong>Japanese immigrants</strong> who arrived during the plantation era of the late 1800s and early 1900s. They brought with them <strong>kakigori (かき氷)</strong>, the Japanese tradition of finely shaved ice topped with sweet syrups, and it quickly took hold in the islands\' tropical heat.',
      p2: 'On the sugar and pineapple plantations, workers would <strong>shave blocks of ice with their tools and knives</strong> to create a cooling treat during long, hot days in the fields. What began as a humble way to beat the heat slowly became a cherished local custom passed between Hawaiʻi\'s many immigrant communities.',
      p3: 'Over the decades, plantation kakigori evolved into the <strong>rainbow shave ice icon</strong> recognized worldwide today — mountains of soft snow soaked in brilliant tropical syrups. Landmark shops cemented its legend: <strong>Matsumoto Shave Ice</strong> in historic Haleʻiwa on the North Shore, and <strong>Waiola Shave Ice</strong> in Honolulu, both drawing lines of locals and visitors for generations.',
      p4: 'Today the tradition is evolving once more. <strong>Korean bingsu (빙수)</strong> — shaved <em>milk</em> ice piled with fresh fruit and toppings rather than syrup-soaked water ice — is arriving in Waikiki as the modern premium evolution of shave ice. It keeps everything islanders love about a fluffy frozen treat, then makes it creamier, richer, and built for sharing.',
    },
    comparison: {
      title: 'Hawaiian Shave Ice vs Korean Bingsu vs Snow Cone',
      subtitle: 'What Makes Each One Different?',
      intro: 'Hawaiian shave ice, Korean bingsu, and the mainland snow cone all start with frozen ice — but the texture, base, and toppings set them worlds apart. Here\'s how they compare:',
      headers: {
        feature: 'Feature',
        bingsu: 'Hawaiian Shave Ice',
        shavedIce: 'Korean Bingsu',
        kakigori: 'Mainland Snow Cone',
      },
      rows: [
        {
          feature: 'Ice Base',
          bingsu: 'Plain water ice, shaved fine',
          shavedIce: 'Frozen milk ice',
          kakigori: 'Crushed ice pellets',
        },
        {
          feature: 'Texture',
          bingsu: 'Fluffy snow that soaks syrup',
          shavedIce: 'Creamy, melts on the tongue',
          kakigori: 'Crunchy, icy crystals',
        },
        {
          feature: 'Flavor Source',
          bingsu: 'Poured tropical syrups',
          shavedIce: 'Milk base + real toppings',
          kakigori: 'Poured syrup',
        },
        {
          feature: 'Toppings',
          bingsu: 'Snow cap, ice cream, azuki, li hing mui, mochi',
          shavedIce: 'Fresh fruit, red bean, condensed milk, mochi',
          kakigori: 'Just syrup',
        },
        {
          feature: 'Serving Style',
          bingsu: 'Individual cup or cone',
          shavedIce: 'Large bowl, meant for sharing',
          kakigori: 'Paper cone or cup',
        },
        {
          feature: 'Origin',
          bingsu: 'Hawaiʻi (via Japanese kakigori)',
          shavedIce: 'Korea (Joseon Dynasty)',
          kakigori: 'Mainland USA',
        },
      ],
      note: 'The key difference is the base: bingsu uses frozen milk ice topped with real ingredients like fresh fruit and red bean, while Hawaiian shave ice uses plain water ice soaked in poured syrup. That milk base is exactly why bingsu tastes creamier — like the premium, dessert-shop evolution of the shave ice you already love.',
    },
    types: {
      title: 'Types of Hawaiian Shave Ice (and the Bingsu Upgrade)',
      subtitle: 'From Classic Rainbow to the Modern Korean Evolution',
      items: [
        {
          name: 'Rainbow Shave Ice',
          korean: 'Hawaiʻi classic',
          description: 'The most iconic version: a dome of fluffy snow drenched in three brightly colored tropical syrups — classically strawberry, lemon-lime, and grape, or island flavors like lilikoʻi, guava, and coconut. Pure nostalgia and the photo every Hawaiʻi visitor wants.',
          icon: '🌈',
        },
        {
          name: 'Snow Cap + Ice Cream + Azuki',
          korean: 'Hawaiʻi classic',
          description: 'The "loaded" local favorite. A scoop of vanilla ice cream hides at the bottom, sweet azuki red beans add texture, and a "snow cap" of sweet condensed milk is drizzled over the top. Rich, creamy, and the true island way to order shave ice.',
          icon: '🍦',
        },
        {
          name: 'Li Hing Mui Shave Ice',
          korean: 'Hawaiʻi classic',
          description: 'A uniquely local twist using li hing mui — salty-sweet-sour dried plum powder beloved across Hawaiʻi. Sprinkled over shave ice (often with mango or lilikoʻi syrup), it delivers that addictive sweet-tart-salty flavor that islanders crave.',
          icon: '🥭',
        },
        {
          name: 'Matcha & Tropical Flavors',
          korean: 'Island modern',
          description: 'Modern shops layer in matcha green tea, fresh tropical fruit, mochi, and even haupia (coconut) cream. These flavors bridge the gap between old-school syrup shave ice and the premium, ingredient-forward desserts taking over Waikiki today.',
          icon: '🍵',
        },
        {
          name: 'Korean Bingsu (the Modern Evolution)',
          korean: '빙수',
          description: 'The creamy premium cousin we actually serve. Instead of plain water ice and syrup, bingsu shaves frozen milk into snow and tops it with fresh tropical fruit, red bean, mochi, and condensed milk. It is the dessert-shop upgrade of shave ice — and exactly what you\'ll find on our Waikiki menu.',
          icon: '🍧',
        },
      ],
    },
    whyHawaii: {
      title: 'Why Shave Ice Is a Hawaiʻi Icon',
      points: [
        {
          title: 'Tropical Weather Year-Round',
          description: 'Hawaiʻi\'s warm climate makes a fluffy frozen treat a year-round craving, not just a summer one. While mainland snow cones are a fair-and-festival novelty, shave ice is woven into everyday island life — an after-beach reward you can enjoy 365 days a year.',
        },
        {
          title: 'Plantation-Era Multicultural Heritage',
          description: 'Shave ice was born from Hawaiʻi\'s plantation history, when Japanese, Korean, Chinese, Filipino, and Portuguese immigrant communities shared food and traditions. That melting-pot heritage is why shave ice feels so authentically local — it belongs to everyone who calls the islands home.',
        },
        {
          title: 'Beach Culture & the After-Surf Treat',
          description: 'There is no better reward after a morning of surfing or a day at Waikiki Beach than a cup of icy, syrup-soaked snow. Shave ice is part of the rhythm of island life — sand, sun, surf, and a sweet cool-down to finish the day.',
        },
        {
          title: 'How Bingsu Elevates the Tradition',
          description: 'Korean bingsu takes everything islanders love about shave ice and makes it richer. By shaving frozen milk instead of plain water ice and crowning it with fresh fruit and toppings, bingsu turns a beloved cool-down into a shareable, premium dessert experience — the natural next chapter of Hawaiʻi\'s shave ice story.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Get Shave Ice & Bingsu in Waikiki',
      intro: 'If you\'re craving fluffy shaved ice in Waikiki, Kona Coffee Donut serves the premium Korean-style version — bingsu — right on Kalākaua Avenue.',
      shop: {
        name: 'Kona Coffee Donut',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Located in the heart of Waikiki on Kalākaua Avenue, Kona Coffee Donut serves premium Korean-style shaved ice (bingsu) made with fresh tropical fruit and silky milk ice — the creamy evolution of the shave ice Hawaiʻi loves. What makes ours special? We pair it with Honolulu Coffee, so you get icy sweetness and rich Hawaiian coffee in one stop.',
        highlights: [
          'Premium Korean-style shaved ice (bingsu) with fresh tropical fruit',
          'Paired perfectly with rich Honolulu Coffee',
          'Walking distance from Waikiki Beach',
          'Open daily — the perfect after-beach treat',
        ],
      },
      cta: 'View Our Shaved Ice Menu',
    },
    howToEat: {
      title: 'How to Eat Shave Ice Like a Local',
      subtitle: 'Tips for the Perfect Frozen Treat',
      tips: [
        {
          title: 'Eat Fast Before It Melts',
          description: 'Fine shaved ice melts the moment it\'s served, especially in the tropical heat. Don\'t wait too long for the perfect photo — snap it quick, then dig in while the snow is still fluffy and the syrup hasn\'t pooled at the bottom.',
        },
        {
          title: 'Get the Snow Cap + Ice Cream Combo',
          description: 'Locals know the secret: order it loaded. A scoop of vanilla ice cream hidden at the bottom plus a snow cap of condensed milk over the top turns a simple cup of ice into a rich, creamy treat. This is how the islands really eat shave ice.',
        },
        {
          title: 'Mix the Toppings Through',
          description: 'Don\'t just eat from the top. Use your spoon to fold the syrup, condensed milk, fruit, and beans down through the ice so every bite is balanced. With bingsu especially, mixing the milk ice and toppings together is where the magic happens.',
        },
        {
          title: 'Share It',
          description: 'A loaded shave ice or bingsu is generous — perfect for sharing with friends and family. Grab a couple of spoons, gather around one big cup or bowl, and make it the social, end-of-the-day treat it was always meant to be.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About Shave Ice',
      items: [
        {
          question: 'What\'s the difference between shave ice and a snow cone?',
          answer: 'The difference is the texture of the ice. Hawaiian shave ice is made by shaving a block of ice into ultra-fine, fluffy snow that soaks up the syrup so every bite is flavored. A mainland snow cone uses coarse, crunchy crushed ice pellets, so the syrup tends to sink straight to the bottom. Shave ice is softer, fluffier, and far more refreshing.',
        },
        {
          question: 'Is Hawaiian shave ice the same as Korean bingsu?',
          answer: 'No — they\'re cousins, not twins. Hawaiian shave ice uses plain water ice soaked in poured tropical syrups. Korean bingsu shaves frozen milk into snow and tops it with fresh fruit, red bean, mochi, and condensed milk instead of relying on syrup. Bingsu is the creamier, premium evolution, which is why it\'s the version we serve in Waikiki.',
        },
        {
          question: 'What is a "snow cap" or "ice cream shave ice"?',
          answer: 'A "snow cap" is a drizzle of sweet condensed milk poured over the top of shave ice, adding a rich, creamy finish. "Ice cream shave ice" means a scoop of vanilla ice cream is hidden at the bottom of the cup, so you get a creamy reward as you reach the end. Many locals order both add-ons together for the ultimate loaded shave ice.',
        },
        {
          question: 'What is li hing mui?',
          answer: 'Li hing mui is salty-sweet-sour dried plum powder, hugely popular across Hawaiʻi. Sprinkled over shave ice — often with mango or lilikoʻi syrup — it adds an addictive sweet-tart-salty kick that islanders love. It\'s one of the most distinctly local shave ice flavors you can try.',
        },
        {
          question: 'Where can I get shave ice or bingsu in Waikiki?',
          answer: 'Kona Coffee Donut at 2142 Kalakaua Ave serves premium Korean-style shaved ice (bingsu) made with fresh tropical fruit and silky milk ice — the creamy evolution of classic shave ice — paired with Honolulu Coffee. It\'s walking distance from Waikiki Beach and open daily, making it the perfect after-beach stop.',
        },
      ],
    },
    cta: {
      title: 'Try Shaved Ice in Waikiki',
      text: 'Visit Kona Coffee Donut at 2142 Kalakaua Ave and try our premium Korean-style shaved ice (bingsu) paired with rich Kona coffee — the creamy evolution of Hawaiian shave ice.',
      menuButton: 'View Shaved Ice Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'What is Hawaiian Shave Ice?',
    },
  },
  ja: {
    hero: {
      title: 'ハワイアンシェイブアイスとは？',
      subtitle: '島のアイコン、そしてワイキキで進化したクリーミーな韓国ビンス',
      updated: '2026年6月更新',
      readTime: '8分で読める',
    },
    definition: {
      title: 'ハワイアンシェイブアイスとは？',
      text: '<strong>ハワイアンシェイブアイス</strong>は、氷の塊を<strong>ふわふわの極細の雪</strong>のように削り、レインボー、リリコイ、グァバ、ココナッツなどカラフルなフレーバーシロップをたっぷりかけた、ハワイで愛されるアイスデザートです。本土のスノーコーンの砕いた氷と違い、本物のシェイブアイスはとても柔らかく、シロップが奥まで染み込みます。人気のトッピングは、<strong>底に隠したバニラアイスのスクープ</strong>、甘いあずき、<strong>練乳の「スノーキャップ」</strong>、甘酸っぱいリヒムイ、もちもちの餅など。<strong>ハワイを代表するデザートの一つ</strong>であり、今ではその進化系として<strong>韓国のミルク氷「ビンス」</strong>が登場しています。',
    },
    history: {
      title: 'ハワイアンシェイブアイスの歴史',
      subtitle: 'プランテーション時代のかき氷からレインボーアイコン、そして韓国ビンスへ',
      p1: 'ハワイアンシェイブアイスのルーツは、1800年代後半から1900年代初頭のプランテーション時代に渡ってきた<strong>日本人移民</strong>に遡ります。彼らが持ち込んだのが、細かく削った氷に甘いシロップをかける日本の<strong>かき氷</strong>の伝統。それはハワイのトロピカルな暑さの中で瞬く間に根付きました。',
      p2: 'サトウキビやパイナップルのプランテーションでは、労働者たちが<strong>道具やナイフで氷の塊を削り</strong>、長く暑い畑仕事の合間に涼を取る一品を作っていました。暑さをしのぐための素朴な工夫が、ハワイの多様な移民コミュニティの間で受け継がれる愛される習慣へと育っていきました。',
      p3: '数十年をかけて、プランテーションのかき氷は今や世界中で知られる<strong>レインボーシェイブアイス</strong>へと進化しました。柔らかな雪の山に、鮮やかなトロピカルシロップをたっぷり。ノースショアの歴史あるハレイワの<strong>マツモトシェイブアイス</strong>、ホノルルの<strong>ワイオラシェイブアイス</strong>などの名店が、何世代にもわたり地元の人と観光客の行列を生み、その伝説を確かなものにしました。',
      p4: '今、この伝統はさらに進化しています。<strong>韓国のビンス（빙수）</strong>は、水の氷にシロップを染み込ませるのではなく、削った<em>ミルク</em>氷に新鮮なフルーツやトッピングを山盛りにしたデザート。シェイブアイスのモダンでプレミアムな進化系として、ワイキキに登場しています。ふわふわの氷デザートの魅力はそのままに、よりクリーミーで濃厚、シェアにぴったりの一品に仕上げています。',
    },
    comparison: {
      title: 'ハワイアンシェイブアイス vs 韓国ビンス vs スノーコーン',
      subtitle: 'それぞれ何が違う？',
      intro: 'ハワイアンシェイブアイス、韓国ビンス、本土のスノーコーンはすべて凍った氷から始まりますが、食感・ベース・トッピングがまるで違います。比較してみましょう：',
      headers: {
        feature: '特徴',
        bingsu: 'ハワイアンシェイブアイス',
        shavedIce: '韓国ビンス',
        kakigori: '本土スノーコーン',
      },
      rows: [
        {
          feature: '氷のベース',
          bingsu: '普通の水の氷を細かく削る',
          shavedIce: '冷凍ミルク氷',
          kakigori: '砕いた氷の粒',
        },
        {
          feature: '食感',
          bingsu: 'シロップが染み込むふわふわの雪',
          shavedIce: 'クリーミー、舌でとろける',
          kakigori: 'シャリシャリの氷結晶',
        },
        {
          feature: '味の源',
          bingsu: 'かけたトロピカルシロップ',
          shavedIce: 'ミルクベース＋本物のトッピング',
          kakigori: 'かけたシロップ',
        },
        {
          feature: 'トッピング',
          bingsu: 'スノーキャップ、アイス、あずき、リヒムイ、餅',
          shavedIce: '新鮮なフルーツ、あずき、練乳、餅',
          kakigori: 'シロップのみ',
        },
        {
          feature: '提供スタイル',
          bingsu: '個人用カップまたはコーン',
          shavedIce: '大きなボウル、シェア向き',
          kakigori: '紙コーンまたはカップ',
        },
        {
          feature: '起源',
          bingsu: 'ハワイ（日本のかき氷経由）',
          shavedIce: '韓国（朝鮮王朝時代）',
          kakigori: 'アメリカ本土',
        },
      ],
      note: '最大の違いはベースです。ビンスは冷凍ミルク氷に新鮮なフルーツやあずきなど本物の食材をのせるのに対し、ハワイアンシェイブアイスは普通の水の氷にシロップを染み込ませます。このミルクベースこそが、ビンスがよりクリーミーな理由。あなたが大好きなシェイブアイスの、プレミアムなデザート専門店版なのです。',
    },
    types: {
      title: 'ハワイアンシェイブアイスの種類（とビンスへの進化）',
      subtitle: '定番レインボーからモダンな韓国版まで',
      items: [
        {
          name: 'レインボーシェイブアイス',
          korean: 'ハワイの定番',
          description: '最も象徴的なバージョン。ふわふわの雪のドームに、鮮やかな3色のトロピカルシロップをたっぷり。定番のストロベリー、レモンライム、グレープや、リリコイ、グァバ、ココナッツなどの島フレーバーも。ハワイを訪れる誰もが撮りたくなる、まさにノスタルジーの一杯です。',
          icon: '🌈',
        },
        {
          name: 'スノーキャップ＋アイス＋あずき',
          korean: 'ハワイの定番',
          description: '「全部のせ」の地元人気メニュー。底にバニラアイスのスクープを隠し、甘いあずきが食感を加え、上から練乳の「スノーキャップ」をたっぷり。濃厚でクリーミー、これこそ島流のシェイブアイスの頼み方です。',
          icon: '🍦',
        },
        {
          name: 'リヒムイシェイブアイス',
          korean: 'ハワイの定番',
          description: 'ハワイ中で愛される、甘塩っぱい干し梅パウダー「リヒムイ」を使った独特の一杯。シェイブアイス（多くはマンゴーやリリコイシロップと一緒に）に振りかけると、島の人々がやみつきになる甘酸っぱしょっぱい味わいに仕上がります。',
          icon: '🥭',
        },
        {
          name: '抹茶＆トロピカルフレーバー',
          korean: '島のモダン版',
          description: 'モダンな店では抹茶、新鮮なトロピカルフルーツ、餅、さらにはハウピア（ココナッツ）クリームを重ねます。これらのフレーバーは、昔ながらのシロップシェイブアイスと、今ワイキキで人気の素材重視のプレミアムデザートの架け橋となっています。',
          icon: '🍵',
        },
        {
          name: '韓国ビンス（モダンな進化系）',
          korean: '빙수',
          description: '私たちが実際に提供するクリーミーなプレミアムいとこ。水の氷とシロップの代わりに、冷凍ミルクを雪のように削り、新鮮なトロピカルフルーツ、あずき、餅、練乳をトッピング。シェイブアイスのデザート専門店版であり、私たちのワイキキメニューでまさに味わえる一品です。',
          icon: '🍧',
        },
      ],
    },
    whyHawaii: {
      title: 'なぜシェイブアイスはハワイのアイコンなのか',
      points: [
        {
          title: '年中暖かいトロピカルな気候',
          description: 'ハワイの温暖な気候は、ふわふわの氷デザートを夏だけでなく一年中の楽しみにします。本土のスノーコーンが縁日やお祭りの珍味であるのに対し、シェイブアイスは島の日常に溶け込んでいます。365日楽しめる、ビーチ帰りのご褒美です。',
        },
        {
          title: 'プランテーション時代の多文化遺産',
          description: 'シェイブアイスはハワイのプランテーションの歴史から生まれました。日本、韓国、中国、フィリピン、ポルトガルの移民コミュニティが食と伝統を分かち合った時代です。その多文化の遺産こそ、シェイブアイスが本物の地元の味と感じられる理由。島を故郷とする誰ものものなのです。',
        },
        {
          title: 'ビーチ文化とサーフィン後のご褒美',
          description: '朝のサーフィンやワイキキビーチで過ごした一日の後、シロップが染みた氷の雪ほど最高のご褒美はありません。シェイブアイスは島の生活のリズムの一部。砂、太陽、波、そして一日を締めくくる甘く冷たいひととき。',
        },
        {
          title: 'ビンスが伝統をさらに高める',
          description: '韓国のビンスは、島の人々がシェイブアイスに愛するすべてを、より濃厚に仕上げます。水の氷の代わりに冷凍ミルクを削り、新鮮なフルーツやトッピングをのせることで、愛される涼味を、シェアできるプレミアムなデザート体験へと進化させます。ハワイのシェイブアイス物語の、自然な次章です。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキでシェイブアイス＆ビンスを食べるなら',
      intro: 'ワイキキでふわふわのかき氷を楽しむなら、コナコーヒードーナツがプレミアムな韓国スタイル版「ビンス」をカラカウア通りで提供しています。',
      shop: {
        name: 'Kona Coffee Donut（コナコーヒードーナツ）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心部、カラカウア通りに位置するコナコーヒードーナツは、新鮮なトロピカルフルーツと滑らかなミルク氷で作るプレミアムな韓国スタイルのかき氷（ビンス）を提供。ハワイが愛するシェイブアイスのクリーミーな進化系です。私たちのビンスの特別なところは？ホノルルコーヒーとのペアリングで、冷たい甘さと芳醇なハワイアンコーヒーを一度に楽しめます。',
        highlights: [
          '新鮮なトロピカルフルーツのプレミアム韓国スタイルかき氷（ビンス）',
          '芳醇なホノルルコーヒーとの完璧なペアリング',
          'ワイキキビーチから徒歩圏内',
          '毎日営業 — ビーチ帰りのおやつに最適',
        ],
      },
      cta: 'かき氷メニューを見る',
    },
    howToEat: {
      title: '地元流シェイブアイスの食べ方',
      subtitle: '最高の氷デザート体験のためのコツ',
      tips: [
        {
          title: '溶ける前に素早く食べよう',
          description: '細かいシェイブアイスは、特にトロピカルな暑さの中では提供された瞬間から溶け始めます。完璧な写真を待ちすぎないで。素早く撮影したら、雪がまだふわふわで、シロップが底にたまる前にすぐ食べ始めましょう。',
        },
        {
          title: 'スノーキャップ＋アイスのコンボにしよう',
          description: '地元の人は知っています。全部のせで頼むのが正解。底に隠したバニラアイスのスクープに、上から練乳のスノーキャップを加えれば、ただの氷が濃厚でクリーミーな一品に。これが島流のシェイブアイスの食べ方です。',
        },
        {
          title: 'トッピングを混ぜ込もう',
          description: '上からだけ食べないで。スプーンでシロップ、練乳、フルーツ、あずきを氷に折り込み、一口ごとにバランスよく。特にビンスは、ミルク氷とトッピングを混ぜ合わせるところに魔法があります。',
        },
        {
          title: 'シェアしよう',
          description: '全部のせのシェイブアイスやビンスはボリュームたっぷり。友達や家族とシェアするのにぴったりです。スプーンを何本か手に取り、一つの大きなカップやボウルを囲んで、一日の締めくくりの楽しいひとときにしましょう。',
        },
      ],
    },
    faq: {
      title: 'シェイブアイスに関するよくある質問',
      items: [
        {
          question: 'シェイブアイスとスノーコーンの違いは何ですか？',
          answer: '違いは氷の食感です。ハワイアンシェイブアイスは氷の塊を極細のふわふわの雪に削るので、シロップが染み込み、どの一口にも味がつきます。本土のスノーコーンは粗くシャリシャリした砕いた氷を使うため、シロップが底に沈みがちです。シェイブアイスはより柔らかくふわふわで、ずっと爽やかです。',
        },
        {
          question: 'ハワイアンシェイブアイスと韓国ビンスは同じですか？',
          answer: 'いいえ、双子ではなくいとこのような関係です。ハワイアンシェイブアイスは普通の水の氷にトロピカルシロップを染み込ませます。韓国ビンスは冷凍ミルクを雪のように削り、シロップに頼らず新鮮なフルーツ、あずき、餅、練乳をのせます。ビンスはよりクリーミーなプレミアム進化系であり、だからこそ私たちはワイキキでこのバージョンを提供しています。',
        },
        {
          question: '「スノーキャップ」や「アイスクリームシェイブアイス」とは何ですか？',
          answer: '「スノーキャップ」は、シェイブアイスの上にかける甘い練乳のことで、濃厚でクリーミーな仕上がりを加えます。「アイスクリームシェイブアイス」は、カップの底にバニラアイスのスクープを隠したもので、食べ終わりにクリーミーなご褒美が待っています。多くの地元の人は両方を一緒に頼み、究極の全部のせシェイブアイスを楽しみます。',
        },
        {
          question: 'リヒムイとは何ですか？',
          answer: 'リヒムイは甘塩っぱい干し梅パウダーで、ハワイ中で大人気です。シェイブアイス（多くはマンゴーやリリコイシロップと一緒に）に振りかけると、島の人々がやみつきになる甘酸っぱしょっぱい味わいに。最も島らしいシェイブアイスのフレーバーの一つです。',
        },
        {
          question: 'ワイキキでシェイブアイスやビンスはどこで食べられますか？',
          answer: '2142 Kalakaua Ave のコナコーヒードーナツでは、新鮮なトロピカルフルーツと滑らかなミルク氷で作るプレミアムな韓国スタイルのかき氷（ビンス）を提供しています。クラシックなシェイブアイスのクリーミーな進化系を、ホノルルコーヒーとともに。ワイキキビーチから徒歩圏内で毎日営業しており、ビーチ帰りに立ち寄るのに最適です。',
        },
      ],
    },
    cta: {
      title: 'ワイキキでかき氷を楽しもう',
      text: '2142 Kalakaua Ave のコナコーヒードーナツで、プレミアムな韓国スタイルのかき氷（ビンス）と芳醇なコナコーヒーを。ハワイアンシェイブアイスのクリーミーな進化系をぜひお試しください。',
      menuButton: 'かき氷メニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'ハワイアンシェイブアイスとは？',
    },
  },
  ko: {
    hero: {
      title: '하와이안 셰이브 아이스란?',
      subtitle: '하와이의 아이콘, 그리고 와이키키에서 진화한 크리미한 한국 빙수',
      updated: '2026년 6월 업데이트',
      readTime: '8분 소요',
    },
    definition: {
      title: '하와이안 셰이브 아이스란?',
      text: '<strong>하와이안 셰이브 아이스(Hawaiian Shave Ice)</strong>는 얼음 덩어리를 <strong>눈처럼 곱고 폭신하게</strong> 갈아낸 뒤, 레인보우·릴리코이·구아바·코코넛 같은 형형색색의 시럽을 듬뿍 뿌린 하와이의 사랑받는 아이스 디저트입니다. 알갱이가 거친 미국 본토의 스노콘과 달리, 진짜 셰이브 아이스는 너무나 부드러워 시럽이 속까지 스며듭니다. 인기 토핑으로는 <strong>맨 아래 숨겨둔 바닐라 아이스크림 한 스쿱</strong>, 달콤한 팥, 위에 뿌리는 <strong>연유 「스노우 캡(snow cap)」</strong>, 새콤달콤한 리힝무이, 쫄깃한 모찌 등이 있습니다. <strong>하와이를 대표하는 디저트 중 하나</strong>이며, 오늘날 그 진화형으로 <strong>한국식 우유 얼음 「빙수」</strong>가 등장하고 있습니다.',
    },
    history: {
      title: '하와이안 셰이브 아이스의 역사',
      subtitle: '플랜테이션 시대의 가키고리에서 레인보우 아이콘, 그리고 한국 빙수까지',
      p1: '하와이안 셰이브 아이스의 뿌리는 1800년대 후반에서 1900년대 초, 플랜테이션 시대에 건너온 <strong>일본인 이민자들</strong>로 거슬러 올라갑니다. 이들이 가져온 것이 바로 곱게 간 얼음에 달콤한 시럽을 뿌리는 일본의 <strong>가키고리(かき氷)</strong> 전통이었고, 하와이의 열대 더위 속에서 순식간에 자리를 잡았습니다.',
      p2: '사탕수수와 파인애플 농장에서 노동자들은 <strong>연장과 칼로 얼음 덩어리를 갈아</strong> 길고 무더운 밭일 사이에 더위를 식힐 간식을 만들었습니다. 더위를 이겨내려던 소박한 방법은, 하와이의 다양한 이민자 공동체 사이에서 대대로 이어지는 소중한 지역 문화로 천천히 자라났습니다.',
      p3: '수십 년에 걸쳐 플랜테이션의 가키고리는 오늘날 전 세계가 알아보는 <strong>레인보우 셰이브 아이스 아이콘</strong>으로 진화했습니다. 부드러운 눈의 산 위에 화사한 열대 시럽이 듬뿍. 노스 쇼어 할레이바의 유서 깊은 <strong>마츠모토 셰이브 아이스(Matsumoto)</strong>, 호놀룰루의 <strong>와이올라 셰이브 아이스(Waiola)</strong> 같은 명소들이 몇 세대에 걸쳐 현지인과 관광객의 줄을 만들며 그 전설을 굳혔습니다.',
      p4: '오늘날 이 전통은 또 한 번 진화하고 있습니다. <strong>한국 빙수(빙수)</strong>는 시럽을 적신 물 얼음이 아니라, 곱게 간 <em>우유</em> 얼음 위에 신선한 과일과 토핑을 풍성하게 올린 디저트로, 셰이브 아이스의 현대적 프리미엄 진화형으로서 와이키키에 도착하고 있습니다. 폭신한 얼음 디저트의 매력은 그대로 간직하면서, 더 크리미하고 진하며 함께 나눠 먹기 좋은 한 그릇으로 완성됩니다.',
    },
    comparison: {
      title: '하와이안 셰이브 아이스 vs 한국 빙수 vs 스노콘',
      subtitle: '각각 무엇이 다를까?',
      intro: '하와이안 셰이브 아이스, 한국 빙수, 미국 본토의 스노콘은 모두 얼음에서 시작하지만, 식감·베이스·토핑이 완전히 다릅니다. 비교해 볼까요:',
      headers: {
        feature: '특징',
        bingsu: '하와이안 셰이브 아이스',
        shavedIce: '한국 빙수',
        kakigori: '본토 스노콘',
      },
      rows: [
        {
          feature: '얼음 베이스',
          bingsu: '일반 물 얼음을 곱게 갈음',
          shavedIce: '냉동 우유 얼음',
          kakigori: '거칠게 부순 얼음 알갱이',
        },
        {
          feature: '식감',
          bingsu: '시럽이 스며드는 폭신한 눈',
          shavedIce: '크리미하게 입에서 녹음',
          kakigori: '아삭아삭한 얼음 결정',
        },
        {
          feature: '맛의 원천',
          bingsu: '뿌리는 열대 시럽',
          shavedIce: '우유 베이스 + 진짜 토핑',
          kakigori: '뿌리는 시럽',
        },
        {
          feature: '토핑',
          bingsu: '스노우 캡, 아이스크림, 팥, 리힝무이, 모찌',
          shavedIce: '신선한 과일, 팥, 연유, 떡',
          kakigori: '시럽뿐',
        },
        {
          feature: '제공 방식',
          bingsu: '개인용 컵 또는 콘',
          shavedIce: '큰 그릇, 함께 나눠 먹기',
          kakigori: '종이 콘 또는 컵',
        },
        {
          feature: '기원',
          bingsu: '하와이 (일본 가키고리에서)',
          shavedIce: '한국 (조선시대)',
          kakigori: '미국 본토',
        },
      ],
      note: '가장 큰 차이는 베이스입니다. 빙수는 냉동 우유 얼음 위에 신선한 과일과 팥 같은 진짜 재료를 올리는 반면, 하와이안 셰이브 아이스는 일반 물 얼음에 시럽을 적십니다. 바로 이 우유 베이스 덕분에 빙수가 더 크리미한 것이죠. 여러분이 이미 사랑하는 셰이브 아이스의, 디저트 전문점 버전 프리미엄 진화형입니다.',
    },
    types: {
      title: '하와이안 셰이브 아이스의 종류 (그리고 빙수로의 진화)',
      subtitle: '클래식 레인보우부터 현대 한국식까지',
      items: [
        {
          name: '레인보우 셰이브 아이스',
          korean: '하와이 클래식',
          description: '가장 상징적인 버전. 폭신한 눈의 돔에 화사한 세 가지 색 열대 시럽을 듬뿍 뿌립니다. 클래식한 딸기·레몬라임·포도, 혹은 릴리코이·구아바·코코넛 같은 섬 풍미까지. 순수한 향수이자, 하와이를 찾는 모두가 찍고 싶어 하는 바로 그 한 컵입니다.',
          icon: '🌈',
        },
        {
          name: '스노우 캡 + 아이스크림 + 팥',
          korean: '하와이 클래식',
          description: '「풀 토핑」 현지 인기 메뉴. 바닐라 아이스크림 한 스쿱을 맨 아래 숨기고, 달콤한 팥이 식감을 더하며, 위에는 연유 「스노우 캡」을 듬뿍. 진하고 크리미한, 진짜 섬 스타일로 셰이브 아이스를 주문하는 방법입니다.',
          icon: '🍦',
        },
        {
          name: '리힝무이 셰이브 아이스',
          korean: '하와이 클래식',
          description: '하와이 전역에서 사랑받는 달콤짭짤한 말린 매실 가루 「리힝무이」를 사용한 독특한 한 컵. 셰이브 아이스(주로 망고나 릴리코이 시럽과 함께)에 뿌리면, 섬 사람들이 중독되는 그 새콤달콤짭짤한 맛이 완성됩니다.',
          icon: '🥭',
        },
        {
          name: '말차 & 트로피컬 풍미',
          korean: '섬의 모던 버전',
          description: '현대 매장에서는 말차 녹차, 신선한 열대 과일, 모찌, 심지어 하우피아(코코넛) 크림까지 겹겹이 올립니다. 이 풍미들은 옛날식 시럽 셰이브 아이스와, 오늘날 와이키키를 점령한 재료 중심 프리미엄 디저트 사이의 다리 역할을 합니다.',
          icon: '🍵',
        },
        {
          name: '한국 빙수 (현대적 진화형)',
          korean: '빙수',
          description: '저희가 실제로 제공하는 크리미한 프리미엄 사촌. 일반 물 얼음과 시럽 대신, 냉동 우유를 눈처럼 갈아 신선한 열대 과일, 팥, 모찌, 연유를 올립니다. 셰이브 아이스의 디저트 전문점 업그레이드 버전이자, 저희 와이키키 메뉴에서 바로 만나볼 수 있는 바로 그 디저트입니다.',
          icon: '🍧',
        },
      ],
    },
    whyHawaii: {
      title: '셰이브 아이스가 하와이의 아이콘인 이유',
      points: [
        {
          title: '일년 내내 열대 기후',
          description: '하와이의 따뜻한 기후는 폭신한 얼음 간식을 여름만이 아니라 사계절 내내 찾게 만듭니다. 본토의 스노콘이 축제나 행사에서나 보는 별미인 반면, 셰이브 아이스는 섬의 일상 속에 녹아 있죠. 365일 즐길 수 있는, 해변 다녀온 뒤의 보상입니다.',
        },
        {
          title: '플랜테이션 시대의 다문화 유산',
          description: '셰이브 아이스는 일본, 한국, 중국, 필리핀, 포르투갈 이민자 공동체가 음식과 전통을 나누던 하와이 플랜테이션 역사에서 탄생했습니다. 이 용광로 같은 유산이 바로 셰이브 아이스가 그토록 진정한 현지의 맛으로 느껴지는 이유. 섬을 고향이라 부르는 모두의 것입니다.',
        },
        {
          title: '비치 문화와 서핑 후의 보상',
          description: '아침 서핑이나 와이키키 비치에서 보낸 하루 뒤, 시럽이 스민 얼음 눈 한 컵만 한 보상은 없습니다. 셰이브 아이스는 섬 생활 리듬의 일부 — 모래, 햇살, 파도, 그리고 하루를 마무리하는 달콤하고 시원한 한순간.',
        },
        {
          title: '빙수가 전통을 한 단계 끌어올리는 법',
          description: '한국 빙수는 섬 사람들이 셰이브 아이스에 사랑하는 모든 것을 더 진하게 만듭니다. 일반 물 얼음 대신 냉동 우유를 갈고 그 위에 신선한 과일과 토핑을 올림으로써, 사랑받는 더위 식힘을 함께 나누는 프리미엄 디저트 경험으로 바꿔놓죠. 하와이 셰이브 아이스 이야기의 자연스러운 다음 장입니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 셰이브 아이스 & 빙수 먹는 곳',
      intro: '와이키키에서 폭신한 빙삭 얼음을 찾고 계시다면, 코나커피도넛이 프리미엄 한국식 버전인 빙수를 바로 칼라카우아 애비뉴에서 제공합니다.',
      shop: {
        name: 'Kona Coffee Donut (코나커피도넛)',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키의 중심, 칼라카우아 애비뉴에 위치한 코나커피도넛은 신선한 열대 과일과 부드러운 우유 얼음으로 만든 프리미엄 한국식 빙삭 얼음(빙수)을 제공합니다. 하와이가 사랑하는 셰이브 아이스의 크리미한 진화형이죠. 저희 빙수의 특별한 점은? 호놀룰루 커피와 함께 즐길 수 있다는 것. 시원한 달콤함과 풍부한 하와이안 커피를 한자리에서 경험하세요.',
        highlights: [
          '신선한 열대 과일을 올린 프리미엄 한국식 빙삭 얼음(빙수)',
          '풍부한 호놀룰루 커피와의 퍼펙트 페어링',
          '와이키키 비치에서 도보 거리',
          '매일 영업 — 해변 다녀온 뒤 간식으로 딱!',
        ],
      },
      cta: '빙수 메뉴 보기',
    },
    howToEat: {
      title: '현지인처럼 셰이브 아이스 먹는 법',
      subtitle: '완벽한 얼음 디저트를 위한 팁',
      tips: [
        {
          title: '녹기 전에 빨리 먹기',
          description: '곱게 간 셰이브 아이스는 특히 열대 더위 속에서 나오는 순간부터 녹기 시작합니다. 완벽한 사진을 너무 오래 기다리지 마세요. 얼른 한 컷 찍고, 눈이 아직 폭신하고 시럽이 바닥에 고이기 전에 바로 파먹으세요.',
        },
        {
          title: '스노우 캡 + 아이스크림 조합으로',
          description: '현지인은 비법을 압니다 — 풀 토핑으로 주문하기. 맨 아래 숨긴 바닐라 아이스크림 한 스쿱에 위에는 연유 스노우 캡까지 더하면, 단순한 얼음 한 컵이 진하고 크리미한 디저트로 변합니다. 이것이 섬에서 셰이브 아이스를 먹는 진짜 방법.',
        },
        {
          title: '토핑을 섞어 먹기',
          description: '위에서만 먹지 마세요. 숟가락으로 시럽, 연유, 과일, 팥을 얼음 속으로 섞어 내려, 한 숟가락마다 균형을 맞추세요. 특히 빙수는 우유 얼음과 토핑을 함께 섞는 데서 마법이 일어납니다.',
        },
        {
          title: '나눠 먹기',
          description: '풀 토핑 셰이브 아이스나 빙수는 양이 넉넉해 친구, 가족과 나눠 먹기 딱 좋습니다. 숟가락 몇 개를 챙겨, 큰 컵이나 그릇 하나를 가운데 두고 둘러앉아, 본래 의도된 대로 하루를 마무리하는 즐거운 간식으로 만끽하세요.',
        },
      ],
    },
    faq: {
      title: '셰이브 아이스에 대해 자주 묻는 질문',
      items: [
        {
          question: '셰이브 아이스와 스노콘의 차이는 무엇인가요?',
          answer: '차이는 얼음의 식감입니다. 하와이안 셰이브 아이스는 얼음 덩어리를 눈처럼 곱고 폭신하게 갈아 시럽이 속까지 스며들어 한 입 한 입에 맛이 배어 있습니다. 본토의 스노콘은 거칠고 아삭한 부순 얼음을 써서 시럽이 바닥으로 가라앉기 쉽죠. 셰이브 아이스가 훨씬 부드럽고 폭신하며 시원합니다.',
        },
        {
          question: '하와이안 셰이브 아이스와 한국 빙수는 같은 건가요?',
          answer: '아니요 — 쌍둥이가 아니라 사촌 같은 사이입니다. 하와이안 셰이브 아이스는 일반 물 얼음에 열대 시럽을 적십니다. 한국 빙수는 냉동 우유를 눈처럼 갈아 시럽에 의존하지 않고 신선한 과일, 팥, 모찌, 연유를 올리죠. 빙수는 더 크리미한 프리미엄 진화형이며, 그래서 저희가 와이키키에서 이 버전을 제공합니다.',
        },
        {
          question: '「스노우 캡」 또는 「아이스크림 셰이브 아이스」가 무엇인가요?',
          answer: '「스노우 캡」은 셰이브 아이스 위에 뿌리는 달콤한 연유로, 진하고 크리미한 마무리를 더합니다. 「아이스크림 셰이브 아이스」는 컵 맨 아래 바닐라 아이스크림 한 스쿱을 숨겨, 다 먹어갈 즈음 크리미한 보상이 기다리는 방식이죠. 많은 현지인이 두 토핑을 함께 주문해 궁극의 풀 토핑 셰이브 아이스를 즐깁니다.',
        },
        {
          question: '리힝무이가 무엇인가요?',
          answer: '리힝무이는 하와이 전역에서 큰 인기를 끄는 달콤짭짤한 말린 매실 가루입니다. 셰이브 아이스(주로 망고나 릴리코이 시럽과 함께)에 뿌리면, 섬 사람들이 사랑하는 중독적인 새콤달콤짭짤한 맛을 더합니다. 가장 하와이다운 셰이브 아이스 풍미 중 하나죠.',
        },
        {
          question: '와이키키에서 셰이브 아이스나 빙수는 어디서 먹을 수 있나요?',
          answer: '2142 Kalakaua Ave의 코나커피도넛에서는 신선한 열대 과일과 부드러운 우유 얼음으로 만든 프리미엄 한국식 빙삭 얼음(빙수)을 제공합니다. 클래식 셰이브 아이스의 크리미한 진화형을 호놀룰루 커피와 함께 즐기세요. 와이키키 비치에서 도보 거리이며 매일 영업해, 해변 다녀온 뒤 들르기에 완벽합니다.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 빙삭 얼음을 즐기세요',
      text: '2142 Kalakaua Ave 코나커피도넛에서 프리미엄 한국식 빙삭 얼음(빙수)과 풍부한 코나 커피를 만나보세요. 하와이안 셰이브 아이스의 크리미한 진화형입니다.',
      menuButton: '빙수 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '하와이안 셰이브 아이스란?',
    },
  },
  zh: {
    hero: {
      title: '什么是夏威夷刨冰 (Shave Ice)？',
      subtitle: '夏威夷的标志，以及在威基基进化的绵密韩式雪冰',
      updated: '2026年6月更新',
      readTime: '阅读约8分钟',
    },
    definition: {
      title: '什么是夏威夷刨冰？',
      text: '<strong>夏威夷刨冰（Hawaiian Shave Ice）</strong>是一款深受喜爱的海岛甜品，将整块冰刨成<strong>超细蓬松的雪花</strong>，再浇上彩虹、百香果、番石榴、椰子等色彩缤纷的风味糖浆。与美国本土雪锥的碎冰颗粒不同，真正的刨冰极其柔软，糖浆能浸透到底。人气配料包括<strong>藏在底部的一球香草冰淇淋</strong>、香甜红豆、淋在顶部的<strong>炼乳"雪盖（snow cap）"</strong>、酸甜的话梅粉，以及Q弹的麻糬。它是<strong>夏威夷最具标志性的甜品之一</strong>，而如今，被称为<strong>"雪冰（Bingsu）"的韩式牛奶冰</strong>正是它绵密的现代进化版。',
    },
    history: {
      title: '夏威夷刨冰的历史',
      subtitle: '从种植园时代的日式刨冰到彩虹标志，再到韩式雪冰',
      p1: '夏威夷刨冰的根源可追溯到19世纪末、20世纪初种植园时代抵达的<strong>日本移民</strong>。他们带来了<strong>日式刨冰（かき氷，kakigori）</strong>——将冰细细刨碎再浇上甜糖浆的传统，在海岛的热带气候中迅速扎根。',
      p2: '在甘蔗和菠萝种植园里，工人们会<strong>用工具和刀具刨削冰块</strong>，在田间漫长炎热的劳作间隙制作消暑小食。这一为了消暑的朴素做法，渐渐成为夏威夷众多移民社区间代代相传、备受珍视的本地习俗。',
      p3: '历经数十年，种植园的日式刨冰进化为今天全球公认的<strong>彩虹刨冰标志</strong>——蓬松雪山浇满绚丽的热带糖浆。一批地标名店奠定了它的传奇：北岸历史小镇哈雷瓦的<strong>松本刨冰（Matsumoto Shave Ice）</strong>，以及檀香山的<strong>Waiola刨冰</strong>，几代人以来都吸引着当地人和游客排起长龙。',
      p4: '如今，这一传统再度进化。<strong>韩式雪冰（빙수，Bingsu）</strong>——将<em>牛奶</em>冰刨成雪花，铺上新鲜水果和配料，而非浸满糖浆的水冰——正作为刨冰的现代高端进化版来到威基基。它保留了海岛人钟爱的蓬松冰品的一切，却更绵密、更醇厚，也更适合分享。',
    },
    comparison: {
      title: '夏威夷刨冰 vs 韩式雪冰 vs 雪锥',
      subtitle: '它们各有什么不同？',
      intro: '夏威夷刨冰、韩式雪冰和美国本土的雪锥都以冰为起点，但口感、基底和配料让它们天差地别。以下是详细对比：',
      headers: {
        feature: '特点',
        bingsu: '夏威夷刨冰',
        shavedIce: '韩式雪冰',
        kakigori: '本土雪锥',
      },
      rows: [
        {
          feature: '冰的基底',
          bingsu: '普通水冰，细细刨制',
          shavedIce: '冷冻牛奶冰',
          kakigori: '粗碎冰颗粒',
        },
        {
          feature: '口感',
          bingsu: '能吸糖浆的蓬松雪花',
          shavedIce: '绵密、入口即化',
          kakigori: '脆冰、颗粒感',
        },
        {
          feature: '风味来源',
          bingsu: '浇淋的热带糖浆',
          shavedIce: '牛奶基底 + 真实配料',
          kakigori: '浇淋的糖浆',
        },
        {
          feature: '配料',
          bingsu: '雪盖、冰淇淋、红豆、话梅、麻糬',
          shavedIce: '新鲜水果、红豆、炼乳、麻糬',
          kakigori: '仅糖浆',
        },
        {
          feature: '供应方式',
          bingsu: '个人杯或甜筒',
          shavedIce: '大碗，适合分享',
          kakigori: '纸筒或纸杯',
        },
        {
          feature: '起源',
          bingsu: '夏威夷（源自日式刨冰）',
          shavedIce: '韩国（朝鲜王朝）',
          kakigori: '美国本土',
        },
      ],
      note: '最关键的区别在于基底：雪冰使用冷冻牛奶冰，铺上新鲜水果和红豆等真实食材；而夏威夷刨冰用普通水冰浸满浇淋的糖浆。正是这层牛奶基底，让雪冰口感更绵密——堪称你早已喜爱的刨冰的高端甜品店进化版。',
    },
    types: {
      title: '夏威夷刨冰的种类（以及雪冰升级版）',
      subtitle: '从经典彩虹到现代韩式进化',
      items: [
        {
          name: '彩虹刨冰',
          korean: '夏威夷经典',
          description: '最具标志性的版本：蓬松的雪花圆顶浇上三种鲜艳的热带糖浆——经典的草莓、柠檬青柠、葡萄，或百香果、番石榴、椰子等海岛风味。纯粹的怀旧，也是每位夏威夷游客都想拍的那一杯。',
          icon: '🌈',
        },
        {
          name: '雪盖 + 冰淇淋 + 红豆',
          korean: '夏威夷经典',
          description: '"加满料"的本地人气款。底部藏着一球香草冰淇淋，香甜红豆增添口感，顶部淋上炼乳"雪盖"。浓郁绵密，这才是海岛人点刨冰的正宗方式。',
          icon: '🍦',
        },
        {
          name: '话梅刨冰',
          korean: '夏威夷经典',
          description: '使用全夏威夷钟爱的咸甜酸话梅粉（li hing mui）的独特一杯。撒在刨冰上（常搭配芒果或百香果糖浆），带来海岛人欲罢不能的那种甜酸咸风味。',
          icon: '🥭',
        },
        {
          name: '抹茶与热带风味',
          korean: '海岛现代款',
          description: '现代店铺会层层加入抹茶绿茶、新鲜热带水果、麻糬，甚至椰奶（haupia）奶油。这些风味在老式糖浆刨冰，与如今风靡威基基、注重食材的高端甜品之间架起桥梁。',
          icon: '🍵',
        },
        {
          name: '韩式雪冰（现代进化版）',
          korean: '빙수',
          description: '我们实际供应的绵密高端"表亲"。它不用普通水冰和糖浆，而是把冷冻牛奶刨成雪花，再铺上新鲜热带水果、红豆、麻糬和炼乳。这是刨冰的甜品店升级版——也正是你在我们威基基菜单上能找到的那款。',
          icon: '🍧',
        },
      ],
    },
    whyHawaii: {
      title: '为什么刨冰是夏威夷的标志',
      points: [
        {
          title: '全年热带气候',
          description: '夏威夷温暖的气候让蓬松冰品成为全年的渴望，而非夏季限定。本土雪锥不过是集市庆典上的新奇玩意，而刨冰早已融入海岛的日常生活——是365天都能享用的海滩归来奖赏。',
        },
        {
          title: '种植园时代的多元文化遗产',
          description: '刨冰诞生于夏威夷的种植园历史，那时日本、韩国、中国、菲律宾和葡萄牙移民社区彼此分享食物与传统。正是这份大熔炉般的遗产，让刨冰显得如此地道本土——它属于每一个以海岛为家的人。',
        },
        {
          title: '海滩文化与冲浪后的奖赏',
          description: '清晨冲浪或在威基基海滩玩了一天后，没有什么比一杯浸满糖浆的冰雪更好的奖赏了。刨冰是海岛生活节奏的一部分——沙滩、阳光、海浪，以及结束一天的甜蜜清凉。',
        },
        {
          title: '雪冰如何升华这一传统',
          description: '韩式雪冰把海岛人钟爱刨冰的一切变得更醇厚。用冷冻牛奶代替普通水冰，再铺上新鲜水果和配料，雪冰将这份备受喜爱的消暑小食，变成可分享的高端甜品体验——正是夏威夷刨冰故事自然的下一章。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基哪里能吃到刨冰和雪冰',
      intro: '如果你在威基基想吃蓬松的刨冰，科纳咖啡甜甜圈就在卡拉卡瓦大道上供应高端韩式版本——雪冰。',
      shop: {
        name: 'Kona Coffee Donut（科纳咖啡甜甜圈）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '位于威基基卡拉卡瓦大道中心地段，科纳咖啡甜甜圈供应以新鲜热带水果和丝滑牛奶冰制作的高端韩式刨冰（雪冰）——夏威夷钟爱的刨冰的绵密进化版。我们的雪冰有何特别？搭配檀香山咖啡，让你一站享受冰爽甜蜜与醇厚的夏威夷咖啡。',
        highlights: [
          '以新鲜热带水果制作的高端韩式刨冰（雪冰）',
          '与醇厚檀香山咖啡完美搭配',
          '距威基基海滩步行可达',
          '每天营业——海滩归来的最佳甜品',
        ],
      },
      cta: '查看刨冰菜单',
    },
    howToEat: {
      title: '像本地人一样吃刨冰',
      subtitle: '完美冰品体验小贴士',
      tips: [
        {
          title: '融化前赶快吃',
          description: '细腻的刨冰一上桌就开始融化，热带气候下尤其如此。别为了完美照片等太久——快速拍一张，趁雪花还蓬松、糖浆还没沉到底部时赶紧开吃。',
        },
        {
          title: '点雪盖 + 冰淇淋组合',
          description: '本地人知道秘诀——加满料点。底部藏一球香草冰淇淋，顶部再加炼乳雪盖，就能把简单的一杯冰变成浓郁绵密的甜品。这才是海岛吃刨冰的正确方式。',
        },
        {
          title: '把配料拌进去',
          description: '不要只从上往下吃。用勺子把糖浆、炼乳、水果和红豆拌入冰中，让每一口都均衡。尤其是雪冰，把牛奶冰和配料拌在一起，正是奇妙之处所在。',
        },
        {
          title: '分享着吃',
          description: '加满料的刨冰或雪冰份量十足，非常适合与亲友分享。拿上几把勺子，围着一个大杯或大碗，让它成为结束一天的那份社交甜点——这本就是它的初衷。',
        },
      ],
    },
    faq: {
      title: '关于刨冰的常见问题',
      items: [
        {
          question: '刨冰和雪锥有什么区别？',
          answer: '区别在于冰的口感。夏威夷刨冰把整块冰刨成超细蓬松的雪花，能吸收糖浆，所以每一口都有味道。本土雪锥用粗糙脆硬的碎冰，糖浆往往直接沉到底部。刨冰更柔软、更蓬松，也清爽得多。',
        },
        {
          question: '夏威夷刨冰和韩式雪冰一样吗？',
          answer: '不一样——它们是表亲，而非双胞胎。夏威夷刨冰用普通水冰浸满浇淋的热带糖浆。韩式雪冰把冷冻牛奶刨成雪花，不靠糖浆，而是铺上新鲜水果、红豆、麻糬和炼乳。雪冰是更绵密的高端进化版，所以我们在威基基供应的正是这个版本。',
        },
        {
          question: '什么是"雪盖"或"冰淇淋刨冰"？',
          answer: '"雪盖"是浇在刨冰顶部的甜炼乳，增添浓郁绵密的收尾。"冰淇淋刨冰"指在杯底藏一球香草冰淇淋，让你吃到最后还有一份绵密奖赏。许多本地人会把两种加料一起点，享受终极的加满料刨冰。',
        },
        {
          question: '什么是话梅（li hing mui）？',
          answer: '话梅（li hing mui）是咸甜酸的干梅粉，在全夏威夷大受欢迎。撒在刨冰上（常搭配芒果或百香果糖浆），带来海岛人欲罢不能的甜酸咸风味。它是你能尝到的最具夏威夷特色的刨冰风味之一。',
        },
        {
          question: '在威基基哪里能吃到刨冰或雪冰？',
          answer: '位于2142 Kalakaua Ave的科纳咖啡甜甜圈，供应以新鲜热带水果和丝滑牛奶冰制作的高端韩式刨冰（雪冰）——经典刨冰的绵密进化版——并搭配檀香山咖啡。它距威基基海滩步行可达，每天营业，是海滩归来歇脚的完美之选。',
        },
      ],
    },
    cta: {
      title: '来威基基品尝刨冰',
      text: '前往2142 Kalakaua Ave的科纳咖啡甜甜圈，品尝我们的高端韩式刨冰（雪冰）搭配醇厚科纳咖啡——夏威夷刨冰的绵密进化版。',
      menuButton: '查看刨冰菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '什么是夏威夷刨冰？',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What is Hawaiian Shave Ice? History, Toppings & The Korean Bingsu Upgrade',
  description: 'Learn everything about Hawaiian shave ice — its plantation-era history, classic toppings like snow cap and li hing mui, how it compares to a snow cone, and why Korean bingsu is the creamy premium version served in Waikiki.',
  image: 'https://www.konacoffeedonut.com/images/blog/hawaiian-shave-ice.jpeg',
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
    '@id': 'https://www.konacoffeedonut.com/en/blog/hawaiian-shave-ice',
  },
  keywords: 'hawaiian shave ice, what is shave ice, shave ice vs snow cone, shave ice toppings, li hing mui, snow cap, korean bingsu, shave ice waikiki',
  wordCount: 1300,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What\'s the difference between shave ice and a snow cone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The difference is the texture of the ice. Hawaiian shave ice is made by shaving a block of ice into ultra-fine, fluffy snow that soaks up the syrup so every bite is flavored. A mainland snow cone uses coarse, crunchy crushed ice pellets, so the syrup tends to sink straight to the bottom. Shave ice is softer, fluffier, and far more refreshing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Hawaiian shave ice the same as Korean bingsu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — they are cousins, not twins. Hawaiian shave ice uses plain water ice soaked in poured tropical syrups. Korean bingsu shaves frozen milk into snow and tops it with fresh fruit, red bean, mochi, and condensed milk instead of relying on syrup. Bingsu is the creamier, premium evolution, which is why it is the version we serve in Waikiki.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a "snow cap" or "ice cream shave ice"?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A "snow cap" is a drizzle of sweet condensed milk poured over the top of shave ice, adding a rich, creamy finish. "Ice cream shave ice" means a scoop of vanilla ice cream is hidden at the bottom of the cup, so you get a creamy reward as you reach the end. Many locals order both add-ons together for the ultimate loaded shave ice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is li hing mui?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Li hing mui is salty-sweet-sour dried plum powder, hugely popular across Hawaii. Sprinkled over shave ice — often with mango or lilikoi syrup — it adds an addictive sweet-tart-salty kick that islanders love. It is one of the most distinctly local shave ice flavors you can try.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I get shave ice or bingsu in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut at 2142 Kalakaua Ave serves premium Korean-style shaved ice (bingsu) made with fresh tropical fruit and silky milk ice — the creamy evolution of classic shave ice — paired with Honolulu Coffee. It is walking distance from Waikiki Beach and open daily, making it the perfect after-beach stop.',
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

export default function HawaiianShaveIcePage() {
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
          src="/images/blog/hawaiian-shave-ice.jpeg"
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

        {/* History of Hawaiian Shave Ice */}
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

        {/* Types of Shave Ice */}
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

        {/* Why Shave Ice is a Hawaii Icon */}
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

        {/* Where to Get Shave Ice in Waikiki */}
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

        {/* How to Eat Shave Ice */}
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
              → What is Bingsu? (Korean Shaved Ice)
            </Link>
            <Link
              href={`/${locale}/blog/best-bingsu-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Best Bingsu in Waikiki
            </Link>
            <Link
              href={`/${locale}/bingsu-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Bingsu in Waikiki
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
