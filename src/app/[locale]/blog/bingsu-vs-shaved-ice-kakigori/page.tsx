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
      title: 'Bingsu vs Shaved Ice vs Kakigori',
      subtitle: 'Korean, Hawaiian & Japanese Iced Desserts Compared',
      updated: 'Updated June 2026',
      readTime: '8 min read',
    },
    definition: {
      title: 'Quick Answer: What Is the Difference?',
      text: 'All three are shaved-ice desserts, but the ice is what sets them apart. <strong>Bingsu (Korean, 빙수)</strong> is fluffy shaved <strong>milk ice</strong> — creamy and snow-like, topped with red bean, fruit, and mochi. <strong>Hawaiian shave ice</strong> is finely shaved <strong>water ice</strong> soaked in fruit syrups (often with a snow cap and li hing). <strong>Japanese kakigori</strong> is fluffy <strong>water ice</strong> flavored with matcha or syrup. The key term people search for: <strong>"Korean shaved ice" is called bingsu (빙수)</strong>.',
    },
    history: {
      title: 'A Short History of Three Iced Desserts',
      subtitle: 'How Korea, Hawaii & Japan Each Made Ice Their Own',
      p1: 'Bingsu has deep roots in Korea. During the Joseon Dynasty (1392–1897), ice harvested in winter was stored in royal ice houses called <strong>binggo (빙고)</strong>. The earliest version simply paired shaved ice with sweet red bean (pat, 팥), giving rise to <strong>patbingsu (팥빙수)</strong>. Over the 20th century the ice itself evolved from coarse blocks into ultra-fine shaved milk ice — the creamy, snow-like texture that defines modern bingsu.',
      p2: 'Hawaiian shave ice traces back to the Japanese plantation immigrants who arrived in the islands in the late 1800s. They brought their tradition of <strong>kakigori</strong> — shaved ice with syrup — and adapted it using the tools they had, shaving blocks of ice with knives and sword-like blades. Over time this became the rainbow-colored, fruit-syrup shave ice that is now a Hawaiian icon, finished with a "snow cap" of condensed milk and a dusting of salty-sweet li hing.',
      p3: 'Japanese kakigori (かき氷) is the oldest of the three, with references dating back to the Heian period (794–1185), when shaved ice was a rare luxury flavored with sweet vine syrup. Today kakigori is a beloved summer staple, served fluffy and light with flavors like matcha, strawberry, and condensed milk — and often topped with azuki red beans or mochi.',
      p4: 'So the three desserts share an ancestor — shaved ice — but diverged based on what each culture had on hand. Hawaii and Japan stayed with <strong>water ice</strong> and bright syrups. Korea took a different path, freezing <strong>milk</strong> into the ice itself to create a richer, creamier dessert. That single choice is the biggest reason bingsu tastes nothing like a snow cone.',
    },
    comparison: {
      title: 'Bingsu vs Shaved Ice vs Kakigori',
      subtitle: 'The Differences at a Glance',
      intro: 'They all start with shaved ice, but the base, texture, and toppings tell three very different stories. Here is how they compare side by side:',
      headers: {
        feature: 'Feature',
        bingsu: 'Bingsu (Korea)',
        shavedIce: 'Shaved Ice (Hawaii)',
        kakigori: 'Kakigori (Japan)',
      },
      rows: [
        {
          feature: 'Ice Base',
          bingsu: 'Frozen milk ice',
          shavedIce: 'Water ice + fruit syrup',
          kakigori: 'Water ice + syrup',
        },
        {
          feature: 'Texture',
          bingsu: 'Fluffy snow, creamy',
          shavedIce: 'Fine and icy',
          kakigori: 'Fluffy and light',
        },
        {
          feature: 'Toppings',
          bingsu: 'Red bean, mochi, fruit, condensed milk',
          shavedIce: 'Fruit syrup, snow cap, li hing',
          kakigori: 'Matcha, azuki, condensed milk',
        },
        {
          feature: 'Sweetness Source',
          bingsu: 'Sweet milk + toppings',
          shavedIce: 'Poured fruit syrups',
          kakigori: 'Poured syrup + condensed milk',
        },
        {
          feature: 'Served',
          bingsu: 'Big bowl, made for sharing',
          shavedIce: 'Cup or cone, one person',
          kakigori: 'Individual bowl',
        },
        {
          feature: 'Origin',
          bingsu: 'Korea (Joseon Dynasty)',
          shavedIce: 'Hawaii (plantation era)',
          kakigori: 'Japan (Heian period)',
        },
      ],
      note: 'The single biggest difference: bingsu is built on frozen milk, while Hawaiian shave ice and Japanese kakigori are built on frozen water. That is why bingsu is creamy and rich, while the other two are crisp and refreshing.',
    },
    types: {
      title: 'Which Iced Dessert Should You Get?',
      subtitle: 'A Quick Guide to Choosing Your Perfect Bowl',
      items: [
        {
          name: 'Get Bingsu',
          korean: 'creamy milk-snow',
          description: 'Choose bingsu if you want a creamy, milky, snow-like dessert that eats more like ice cream than a snow cone. The shaved milk ice melts softly on your tongue, and toppings like red bean, fresh fruit, mochi, and condensed milk make every spoonful rich and satisfying.',
          icon: '🍧',
        },
        {
          name: 'Get Hawaiian Shave Ice',
          korean: 'classic rainbow',
          description: 'Choose Hawaiian shave ice for the classic island experience — finely shaved water ice soaked in bright rainbow fruit syrups, often finished with a "snow cap" of condensed milk and a sprinkle of salty-sweet li hing. Crisp, colorful, and nostalgic.',
          icon: '🌈',
        },
        {
          name: 'Get Kakigori',
          korean: 'light + matcha',
          description: 'Choose Japanese kakigori if you want something light and fluffy with refined flavors like matcha green tea, strawberry, or condensed milk. It is airy and refreshing rather than rich — a clean, palate-cooling treat on a hot day.',
          icon: '🍵',
        },
        {
          name: 'Bingsu for Sharing',
          korean: 'best for groups',
          description: 'Bingsu is traditionally served in an oversized bowl meant for two or three people. If you are with friends or family and want one shareable, photo-worthy dessert that everyone digs into together, bingsu is the easy winner.',
          icon: '👥',
        },
        {
          name: 'Bingsu in Waikiki',
          korean: 'try it here',
          description: 'Want to taste real Korean bingsu near the beach? Kona Coffee Donut? on Kalākaua Avenue serves authentic shaved-milk bingsu — plus 100% Kona coffee and fresh mochi donuts — about a 5-minute walk from Waikiki Beach.',
          icon: '🌺',
        },
      ],
    },
    whyHawaii: {
      title: 'Why Try Korean Bingsu in Waikiki',
      points: [
        {
          title: 'Creamy Milk-Snow You Cannot Get From Shave Ice',
          description: 'Hawaiian shave ice and Japanese kakigori are made from water ice. Bingsu is made from frozen milk, so it has a creamy, snow-like texture that melts softly on your tongue — something the water-ice desserts simply cannot replicate. If you have only ever had shave ice, real bingsu is a completely different experience.',
        },
        {
          title: 'Hawaiian-Fruit Bingsu Flavors',
          description: 'In Waikiki you can enjoy bingsu topped with island-inspired tropical fruit. It blends the creamy Korean milk-snow base with the bright fruit flavors Hawaii is famous for — the best of both worlds in one bowl.',
        },
        {
          title: 'Pairs With 100% Kona Coffee',
          description: 'Cold, creamy bingsu next to a rich cup of 100% Kona coffee is a pairing you will not find at a typical shave ice stand. The sweet, icy dessert and the smooth Hawaiian-grown coffee balance each other perfectly.',
        },
        {
          title: 'About 5 Minutes From Waikiki Beach',
          description: 'You do not have to travel far for authentic Korean bingsu. Kona Coffee Donut? sits right on Kalākaua Avenue, roughly a 5-minute walk from Waikiki Beach — easy to reach before or after a day in the sun.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Get Korean Bingsu in Waikiki',
      intro: 'If this comparison left you craving the real thing, here is where to try authentic Korean bingsu in Waikiki.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Right on Kalākaua Avenue in the heart of Waikiki, Kona Coffee Donut? serves authentic Korean bingsu made with creamy shaved-milk ice — not water ice. We also pour 100% Kona coffee and make fresh mochi donuts, and we are about a 5-minute walk from Waikiki Beach. Open daily, 7AM–9PM.',
        highlights: [
          'Authentic Korean shaved-milk bingsu (not water ice)',
          'Paired perfectly with 100% Kona coffee',
          'About a 5-minute walk from Waikiki Beach',
          'Open daily, 7AM–9PM',
        ],
      },
      cta: 'See Our Bingsu Menu',
    },
    howToEat: {
      title: 'How to Enjoy Bingsu',
      subtitle: 'Get the Most Out of Every Bowl',
      tips: [
        {
          title: 'Eat Fast Before It Melts',
          description: 'Shaved milk ice starts melting the moment it is served. Snap your photo quickly, then dig in while the ice is still fluffy and snow-like. The texture is the whole point — do not let it turn into a milky soup.',
        },
        {
          title: 'Mix the Toppings In',
          description: 'Do not just eat from the top down. Use your spoon to gently fold the red bean, fruit, mochi, and condensed milk into the ice as you go, so every bite has a balanced mix of creamy ice and toppings.',
        },
        {
          title: 'Share It',
          description: 'Bingsu is traditionally served in a big bowl made for two or three people. Gather around with spoons and enjoy it together — it is as much a social moment as a dessert.',
        },
        {
          title: 'Pair It With Kona Coffee',
          description: 'A cup of 100% Kona coffee alongside your bingsu is the perfect Waikiki combination. The smooth, rich coffee balances the cold, sweet milk-snow beautifully.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What is the difference between bingsu and shaved ice?',
          answer: 'The main difference is the ice. Bingsu is Korean shaved ice made from frozen milk, giving it a creamy, snow-like texture. Hawaiian shave ice (and most American shaved ice) is made from frozen water and flavored with poured fruit syrups, so it is crisp and icy rather than creamy. Bingsu is also topped with red bean, mochi, and fresh fruit, and is usually served in a large bowl for sharing.',
        },
        {
          question: 'What is Korean shaved ice called?',
          answer: 'Korean shaved ice is called bingsu (빙수). The most classic version, topped with sweet red beans, is called patbingsu (팥빙수). So if you are looking up "what is shaved ice in Korean," the answer is bingsu (빙수).',
        },
        {
          question: 'Is bingsu the same as kakigori?',
          answer: 'No. Both are shaved-ice desserts, but bingsu (Korean) is made from frozen milk for a creamy, snow-like texture, while kakigori (Japanese) is made from frozen water and is light and fluffy. Kakigori is usually flavored with poured syrup such as matcha or strawberry, while bingsu is built around milk ice with toppings like red bean, mochi, and condensed milk.',
        },
        {
          question: 'What does "bingsu" mean?',
          answer: 'Bingsu (빙수) comes from the Korean reading of the characters meaning "ice water." Today it refers broadly to Korean shaved ice desserts. The popular red bean version is patbingsu (팥빙수), where "pat" (팥) means red bean.',
        },
        {
          question: 'Where can I get Korean bingsu in Waikiki?',
          answer: 'You can try authentic Korean bingsu at Kona Coffee Donut? at 2142 Kalakaua Ave, in the heart of Waikiki — about a 5-minute walk from Waikiki Beach. We serve creamy shaved-milk bingsu alongside 100% Kona coffee and fresh mochi donuts, open daily from 7AM to 9PM.',
        },
      ],
    },
    cta: {
      title: 'Try Real Korean Bingsu in Waikiki',
      text: 'Now that you know the difference, taste it for yourself. Visit Kona Coffee Donut? at 2142 Kalakaua Ave for authentic creamy bingsu paired with 100% Kona coffee.',
      menuButton: 'View Bingsu Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'Bingsu vs Shaved Ice vs Kakigori',
    },
  },
  ja: {
    hero: {
      title: 'ビンス vs シェイブアイス vs かき氷',
      subtitle: '韓国・ハワイ・日本の氷デザートを徹底比較',
      updated: '2026年6月更新',
      readTime: '8分で読める',
    },
    definition: {
      title: '結論：何が違うの？',
      text: '3つとも氷を削ったデザートですが、決め手は「氷そのもの」です。<strong>ビンス（韓国・빙수）</strong>はふわふわに削った<strong>ミルク氷</strong>で、クリーミーで雪のよう。あずき、フルーツ、餅をトッピングします。<strong>ハワイアンシェイブアイス</strong>は細かく削った<strong>水の氷</strong>にフルーツシロップをかけたもの（スノーキャップやリヒムイを添えることも）。<strong>日本のかき氷</strong>はふわふわの<strong>水の氷</strong>に抹茶やシロップをかけます。よく検索される答え：<strong>「韓国のかき氷」はビンス（빙수）と呼ばれます</strong>。',
    },
    history: {
      title: '3つの氷デザートの短い歴史',
      subtitle: '韓国・ハワイ・日本がそれぞれ氷を自分のものにした道のり',
      p1: 'ビンスの起源は韓国に深く根ざしています。朝鮮王朝時代（1392〜1897年）、冬に採取した氷は<strong>「氷庫（빙고・ビンゴ）」</strong>と呼ばれる王室の貯蔵庫に保管されました。最初期のビンスは、削った氷に甘いあずき（パッ・팥）を合わせただけのもので、これが<strong>パッビンス（팥빙수）</strong>の由来です。20世紀を通じて氷自体が粗いブロックから極細のミルク氷へと進化し、現代ビンスを象徴するクリーミーで雪のような食感が生まれました。',
      p2: 'ハワイアンシェイブアイスのルーツは、1800年代後半にハワイへ渡った日本人移民にあります。彼らはシロップをかけた削り氷、すなわち<strong>かき氷</strong>の文化を持ち込み、刀のような刃で氷のブロックを削って再現しました。やがてこれが、練乳の「スノーキャップ」と甘じょっぱいリヒムイを添えた、虹色のフルーツシロップシェイブアイスというハワイの象徴へと発展しました。',
      p3: '日本のかき氷（かき氷）は3つの中で最も古く、平安時代（794〜1185年）には甘いつる草のシロップをかけた贅沢品として記録に残っています。今日のかき氷は夏の定番で、ふわふわと軽く、抹茶、いちご、練乳などで味付けされ、あずきや白玉をのせることも多いです。',
      p4: 'つまり3つのデザートは「削り氷」という共通の祖先を持ちながら、各文化が手元にあったもので別々に発展しました。ハワイと日本は<strong>水の氷</strong>と鮮やかなシロップを選びました。一方、韓国は<strong>ミルク</strong>を氷そのものに凍らせ、よりリッチでクリーミーなデザートを生み出すという別の道を選んだのです。この一つの選択こそ、ビンスがかき氷とまったく違う味わいになる最大の理由です。',
    },
    comparison: {
      title: 'ビンス vs シェイブアイス vs かき氷',
      subtitle: '違いをひと目で',
      intro: 'どれも削り氷から始まりますが、ベース・食感・トッピングがまったく異なる3つの物語を語ります。並べて比較してみましょう：',
      headers: {
        feature: '特徴',
        bingsu: 'ビンス（韓国）',
        shavedIce: 'シェイブアイス（ハワイ）',
        kakigori: 'かき氷（日本）',
      },
      rows: [
        {
          feature: '氷のベース',
          bingsu: '冷凍ミルク氷',
          shavedIce: '水の氷＋フルーツシロップ',
          kakigori: '水の氷＋シロップ',
        },
        {
          feature: '食感',
          bingsu: 'ふわふわの雪、クリーミー',
          shavedIce: '細かくシャリッと',
          kakigori: 'ふわふわで軽い',
        },
        {
          feature: 'トッピング',
          bingsu: 'あずき、餅、フルーツ、練乳',
          shavedIce: 'フルーツシロップ、スノーキャップ、リヒムイ',
          kakigori: '抹茶、あずき、練乳',
        },
        {
          feature: '甘さの出どころ',
          bingsu: '甘いミルク＋トッピング',
          shavedIce: 'かけるフルーツシロップ',
          kakigori: 'かけるシロップ＋練乳',
        },
        {
          feature: '提供スタイル',
          bingsu: '大きなボウル、シェア向き',
          shavedIce: 'カップやコーン、1人用',
          kakigori: '個人用の器',
        },
        {
          feature: '起源',
          bingsu: '韓国（朝鮮王朝時代）',
          shavedIce: 'ハワイ（プランテーション時代）',
          kakigori: '日本（平安時代）',
        },
      ],
      note: '最大の違いは、ビンスが冷凍ミルクをベースにしているのに対し、ハワイアンシェイブアイスと日本のかき氷は水の氷をベースにしている点です。だからビンスはクリーミーでリッチ、他の2つはシャリッと爽やかなのです。',
    },
    types: {
      title: 'あなたが選ぶべき氷デザートは？',
      subtitle: '自分にぴったりの一杯を選ぶクイックガイド',
      items: [
        {
          name: 'ビンスを選ぶなら',
          korean: 'クリーミーなミルク雪',
          description: 'かき氷というよりアイスクリームに近い、クリーミーでミルキーな雪のようなデザートが食べたいならビンス。削ったミルク氷が舌の上でとろけ、あずき、フレッシュフルーツ、餅、練乳などのトッピングが一口ごとに濃厚な満足感を与えてくれます。',
          icon: '🍧',
        },
        {
          name: 'ハワイアンシェイブアイスを選ぶなら',
          korean: '定番の虹色',
          description: '定番のアイランド体験を求めるならハワイアンシェイブアイス。細かく削った水の氷に鮮やかな虹色のフルーツシロップをたっぷり染み込ませ、練乳の「スノーキャップ」と甘じょっぱいリヒムイを添えます。シャリッと爽やかで、カラフルで懐かしい味わいです。',
          icon: '🌈',
        },
        {
          name: 'かき氷を選ぶなら',
          korean: '軽くて抹茶',
          description: '抹茶、いちご、練乳といった上品な味わいで、軽くてふわふわなものが食べたいなら日本のかき氷。リッチというより空気のように軽く爽やか。暑い日に口をすっきり冷やしてくれる一杯です。',
          icon: '🍵',
        },
        {
          name: 'シェアするならビンス',
          korean: 'グループに最適',
          description: 'ビンスは伝統的に2〜3人で分け合う大きなボウルで提供されます。友達や家族と一緒に、みんなで突きながら楽しめる写真映えするデザートが欲しいなら、ビンスが断然おすすめです。',
          icon: '👥',
        },
        {
          name: 'ワイキキでビンスを',
          korean: 'ここで味わえる',
          description: 'ビーチの近くで本物の韓国ビンスを味わいたいなら？カラカウア通りのコナコーヒードーナツ（Kona Coffee Donut?）では、本格的なミルク削りビンスに加え、100%コナコーヒーと作りたてのモチドーナツを提供。ワイキキビーチから徒歩約5分です。',
          icon: '🌺',
        },
      ],
    },
    whyHawaii: {
      title: 'ワイキキで韓国ビンスを試すべき理由',
      points: [
        {
          title: 'シェイブアイスでは味わえないクリーミーなミルク雪',
          description: 'ハワイアンシェイブアイスも日本のかき氷も水の氷から作られます。ビンスは冷凍ミルクから作られるため、舌の上でとろけるクリーミーで雪のような食感を持ち、これは水の氷のデザートには再現できません。シェイブアイスしか食べたことがないなら、本物のビンスはまったく別の体験です。',
        },
        {
          title: 'ハワイのフルーツを使ったビンス',
          description: 'ワイキキでは、アイランド風のトロピカルフルーツをのせたビンスが楽しめます。クリーミーな韓国のミルク雪ベースと、ハワイならではの鮮やかなフルーツの味わいが融合した、一杯で両方の良さを味わえるデザートです。',
        },
        {
          title: '100%コナコーヒーとの相性',
          description: '冷たくクリーミーなビンスと、芳醇な100%コナコーヒーの組み合わせは、普通のシェイブアイス店では出会えません。甘く冷たいデザートと、まろやかなハワイ産コーヒーが互いを完璧に引き立てます。',
        },
        {
          title: 'ワイキキビーチから徒歩約5分',
          description: '本格的な韓国ビンスを味わうのに遠くまで行く必要はありません。コナコーヒードーナツ（Kona Coffee Donut?）はカラカウア通り沿い、ワイキキビーチから徒歩約5分。海で過ごす前後に立ち寄りやすい場所です。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキで韓国ビンスを食べるなら',
      intro: 'この比較を読んで本物が食べたくなったなら、ワイキキで本格韓国ビンスを味わえる場所をご紹介します。',
      shop: {
        name: 'Kona Coffee Donut?（コナコーヒードーナツ）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心、カラカウア通り沿いに位置するコナコーヒードーナツ（Kona Coffee Donut?）は、水の氷ではなくクリーミーなミルク削り氷で作る本格的な韓国ビンスを提供します。100%コナコーヒーと作りたてのモチドーナツもご用意。ワイキキビーチから徒歩約5分、毎日7時〜21時まで営業しています。',
        highlights: [
          '本格的な韓国ミルク削りビンス（水の氷ではありません）',
          '100%コナコーヒーとの完璧なペアリング',
          'ワイキキビーチから徒歩約5分',
          '毎日7時〜21時まで営業',
        ],
      },
      cta: 'ビンスメニューを見る',
    },
    howToEat: {
      title: 'ビンスの楽しみ方',
      subtitle: '一杯を最大限に味わうコツ',
      tips: [
        {
          title: '溶ける前に素早く食べよう',
          description: 'ミルク削り氷は提供された瞬間から溶け始めます。素早く写真を撮ったら、氷がまだふわふわで雪のような状態のうちに食べ始めましょう。食感こそが命。ミルキーなスープになる前に楽しんでください。',
        },
        {
          title: 'トッピングを混ぜ込もう',
          description: '上からだけ食べないで。スプーンであずき、フルーツ、餅、練乳を氷に優しく折り込みながら食べると、一口ごとにクリーミーな氷とトッピングがバランスよく味わえます。',
        },
        {
          title: 'シェアしよう',
          description: 'ビンスは伝統的に2〜3人用の大きなボウルで提供されます。スプーンを持って囲み、みんなで一緒に楽しみましょう。デザートであると同時に、コミュニケーションのひとときでもあります。',
        },
        {
          title: 'コナコーヒーと合わせよう',
          description: 'ビンスに100%コナコーヒーを添えるのが、ワイキキならではの最高の組み合わせ。まろやかでコクのあるコーヒーが、冷たく甘いミルク雪を美しく引き立てます。',
        },
      ],
    },
    faq: {
      title: 'よくある質問',
      items: [
        {
          question: 'ビンスとシェイブアイスの違いは何ですか？',
          answer: '最大の違いは氷です。ビンスは冷凍ミルクから作る韓国の削り氷で、クリーミーで雪のような食感が特徴です。ハワイアンシェイブアイス（および多くのアメリカ式シェイブアイス）は水の氷から作り、フルーツシロップをかけるため、クリーミーというよりシャリッと爽やかです。ビンスはさらにあずき、餅、フレッシュフルーツをのせ、たいてい大きなボウルでシェアして提供されます。',
        },
        {
          question: '韓国のかき氷は何と呼ばれますか？',
          answer: '韓国のかき氷はビンス（빙수）と呼ばれます。甘いあずきをのせた最も定番のものはパッビンス（팥빙수）と言います。つまり「韓国語でかき氷は何？」の答えはビンス（빙수）です。',
        },
        {
          question: 'ビンスとかき氷は同じものですか？',
          answer: 'いいえ。どちらも削り氷のデザートですが、ビンス（韓国）は冷凍ミルクから作られクリーミーで雪のような食感、かき氷（日本）は水の氷から作られ軽くてふわふわです。かき氷はたいてい抹茶やいちごなどのシロップで味付けされ、ビンスはミルク氷を中心にあずき、餅、練乳などをのせます。',
        },
        {
          question: '「ビンス」とはどういう意味ですか？',
          answer: 'ビンス（빙수）は「氷水」を意味する漢字の韓国語読みに由来します。現在では韓国の削り氷デザート全般を指します。人気のあずき版はパッビンス（팥빙수）で、「パッ（팥）」はあずきを意味します。',
        },
        {
          question: 'ワイキキで韓国ビンスはどこで食べられますか？',
          answer: 'ワイキキの中心、2142 Kalakaua Ave にあるコナコーヒードーナツ（Kona Coffee Donut?）で本格的な韓国ビンスを味わえます。ワイキキビーチから徒歩約5分。クリーミーなミルク削りビンスを100%コナコーヒーや作りたてモチドーナツと一緒に、毎日7時〜21時まで提供しています。',
        },
      ],
    },
    cta: {
      title: 'ワイキキで本物の韓国ビンスを',
      text: '違いがわかったら、あとは自分の舌で確かめるだけ。2142 Kalakaua Ave のコナコーヒードーナツ（Kona Coffee Donut?）で、本格的なクリーミービンスと100%コナコーヒーをどうぞ。',
      menuButton: 'ビンスメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'ビンス vs シェイブアイス vs かき氷',
    },
  },
  ko: {
    hero: {
      title: '빙수 vs 셰이브 아이스 vs 가키고리',
      subtitle: '한국·하와이·일본 얼음 디저트 완벽 비교',
      updated: '2026년 6월 업데이트',
      readTime: '8분 소요',
    },
    definition: {
      title: '한눈에 보는 답: 무엇이 다를까?',
      text: '세 가지 모두 얼음을 갈아 만든 디저트지만, 결정적인 차이는 바로 <strong>얼음 그 자체</strong>입니다. <strong>빙수(한국, 빙수)</strong>는 곱게 간 <strong>우유 얼음</strong>으로, 눈처럼 보드랍고 크리미하며 팥·과일·떡을 올립니다. <strong>하와이안 셰이브 아이스</strong>는 곱게 간 <strong>물 얼음</strong>에 과일 시럽을 듬뿍 적신 것(스노 캡과 리히무이를 곁들이기도 함)입니다. <strong>일본 가키고리</strong>는 포슬포슬한 <strong>물 얼음</strong>에 말차나 시럽을 뿌립니다. 사람들이 가장 많이 찾는 핵심: <strong>"한국식 셰이브 아이스"는 빙수(빙수)라고 부릅니다</strong>.',
    },
    history: {
      title: '세 가지 얼음 디저트의 짧은 역사',
      subtitle: '한국·하와이·일본이 각자의 방식으로 얼음을 만든 길',
      p1: '빙수는 한국에 깊이 뿌리내린 디저트입니다. 조선시대(1392~1897)에는 겨울에 채취한 얼음을 <strong>빙고(氷庫)</strong>라 불리는 왕실 저장고에 보관했습니다. 가장 초기의 빙수는 간 얼음에 달콤한 팥을 올린 것이 전부였고, 여기서 <strong>팥빙수(팥+氷水)</strong>라는 이름이 탄생했습니다. 20세기를 거치며 얼음 자체가 투박한 덩어리에서 극세 우유 얼음으로 진화하여, 현대 빙수를 상징하는 크리미하고 눈꽃 같은 식감이 완성되었습니다.',
      p2: '하와이안 셰이브 아이스의 뿌리는 1800년대 후반 하와이로 이주한 일본인 농장 노동자들에게 있습니다. 그들은 시럽을 뿌린 간 얼음, 즉 <strong>가키고리(かき氷)</strong> 문화를 들여왔고, 칼처럼 생긴 날로 얼음덩이를 갈아 재현했습니다. 시간이 지나면서 이것은 연유로 만든 "스노 캡"과 달콤짭짤한 리히무이를 곁들인, 무지개빛 과일 시럽 셰이브 아이스라는 하와이의 상징으로 발전했습니다.',
      p3: '일본 가키고리(かき氷)는 셋 중 가장 오래되었습니다. 헤이안 시대(794~1185)에 이미 달콤한 덩굴 시럽을 뿌린 귀한 사치품으로 기록에 남아 있습니다. 오늘날 가키고리는 사랑받는 여름 별미로, 포슬포슬하고 가볍게 제공되며 말차·딸기·연유 같은 맛으로 즐기고, 단팥이나 찹쌀떡을 올리기도 합니다.',
      p4: '결국 세 디저트는 "간 얼음"이라는 공통 조상을 가지지만, 각 문화가 가진 재료에 따라 다르게 발전했습니다. 하와이와 일본은 <strong>물 얼음</strong>과 화사한 시럽을 택했습니다. 반면 한국은 <strong>우유</strong>를 얼음 자체에 얼려 더 진하고 크리미한 디저트를 만드는 다른 길을 걸었죠. 바로 이 한 가지 선택이 빙수가 셰이브 아이스와 전혀 다른 맛을 내는 가장 큰 이유입니다.',
    },
    comparison: {
      title: '빙수 vs 셰이브 아이스 vs 가키고리',
      subtitle: '차이를 한눈에',
      intro: '셋 다 간 얼음에서 시작하지만, 베이스·식감·토핑이 완전히 다른 세 가지 이야기를 들려줍니다. 나란히 비교해 보세요:',
      headers: {
        feature: '특징',
        bingsu: '빙수 (한국)',
        shavedIce: '셰이브 아이스 (하와이)',
        kakigori: '가키고리 (일본)',
      },
      rows: [
        {
          feature: '얼음 베이스',
          bingsu: '냉동 우유 얼음',
          shavedIce: '물 얼음 + 과일 시럽',
          kakigori: '물 얼음 + 시럽',
        },
        {
          feature: '식감',
          bingsu: '눈처럼 포슬포슬, 크리미함',
          shavedIce: '곱고 아삭한 얼음',
          kakigori: '포슬포슬하고 가벼움',
        },
        {
          feature: '토핑',
          bingsu: '팥, 떡, 과일, 연유',
          shavedIce: '과일 시럽, 스노 캡, 리히무이',
          kakigori: '말차, 단팥, 연유',
        },
        {
          feature: '단맛의 출처',
          bingsu: '달콤한 우유 + 토핑',
          shavedIce: '부어주는 과일 시럽',
          kakigori: '부어주는 시럽 + 연유',
        },
        {
          feature: '제공 방식',
          bingsu: '큰 그릇, 함께 나눠 먹기',
          shavedIce: '컵·콘, 1인용',
          kakigori: '개인용 그릇',
        },
        {
          feature: '기원',
          bingsu: '한국 (조선시대)',
          shavedIce: '하와이 (농장 시대)',
          kakigori: '일본 (헤이안 시대)',
        },
      ],
      note: '가장 큰 차이는, 빙수는 냉동 우유를 베이스로 하지만 하와이안 셰이브 아이스와 일본 가키고리는 물 얼음을 베이스로 한다는 점입니다. 그래서 빙수는 크리미하고 진하며, 나머지 둘은 아삭하고 상큼합니다.',
    },
    types: {
      title: '어떤 얼음 디저트를 골라야 할까?',
      subtitle: '나에게 딱 맞는 한 그릇을 고르는 간단 가이드',
      items: [
        {
          name: '빙수를 고르세요',
          korean: '크리미한 우유 눈꽃',
          description: '셰이브 아이스보다 아이스크림에 가까운, 크리미하고 우유 풍미 가득한 눈꽃 디저트가 먹고 싶다면 빙수. 곱게 간 우유 얼음이 입안에서 살살 녹고, 팥·신선한 과일·떡·연유 같은 토핑이 한 숟가락마다 진한 만족감을 더해 줍니다.',
          icon: '🍧',
        },
        {
          name: '하와이안 셰이브 아이스를 고르세요',
          korean: '클래식한 무지개',
          description: '클래식한 하와이 감성을 원한다면 하와이안 셰이브 아이스. 곱게 간 물 얼음에 화사한 무지개빛 과일 시럽을 듬뿍 적시고, 연유 "스노 캡"과 달콤짭짤한 리히무이를 올립니다. 아삭하고 알록달록하며 추억을 부르는 맛입니다.',
          icon: '🌈',
        },
        {
          name: '가키고리를 고르세요',
          korean: '가볍고 말차',
          description: '말차, 딸기, 연유처럼 세련된 맛으로 가볍고 포슬포슬한 것을 원한다면 일본 가키고리. 진하기보다 공기처럼 가볍고 상큼해, 더운 날 입안을 산뜻하게 식혀 주는 한 그릇입니다.',
          icon: '🍵',
        },
        {
          name: '나눠 먹기엔 빙수',
          korean: '단체에 최적',
          description: '빙수는 전통적으로 2~3명이 나눠 먹는 큰 그릇에 담겨 나옵니다. 친구나 가족과 함께 다 같이 떠먹는, 사진까지 잘 나오는 디저트를 원한다면 빙수가 단연 정답입니다.',
          icon: '👥',
        },
        {
          name: '와이키키에서 빙수를',
          korean: '여기서 맛보세요',
          description: '해변 근처에서 진짜 한국 빙수를 맛보고 싶다면? 칼라카우아 애비뉴의 코나커피도넛(Kona Coffee Donut?)에서 정통 우유 빙수는 물론 100% 코나 커피와 갓 만든 모찌 도넛까지 즐길 수 있습니다. 와이키키 비치에서 도보 약 5분 거리입니다.',
          icon: '🌺',
        },
      ],
    },
    whyHawaii: {
      title: '와이키키에서 한국 빙수를 먹어봐야 하는 이유',
      points: [
        {
          title: '셰이브 아이스로는 못 내는 크리미한 우유 눈꽃',
          description: '하와이안 셰이브 아이스도, 일본 가키고리도 물 얼음으로 만듭니다. 빙수는 냉동 우유로 만들기 때문에 입안에서 살살 녹는 크리미하고 눈꽃 같은 식감을 가지며, 이는 물 얼음 디저트가 결코 흉내 낼 수 없습니다. 셰이브 아이스만 먹어봤다면, 진짜 빙수는 완전히 다른 경험입니다.',
        },
        {
          title: '하와이 과일을 더한 빙수',
          description: '와이키키에서는 섬 감성의 열대 과일을 올린 빙수를 즐길 수 있습니다. 크리미한 한국식 우유 눈꽃 베이스와 하와이 특유의 화사한 과일 맛이 어우러진, 한 그릇에서 두 가지 매력을 모두 누리는 디저트입니다.',
        },
        {
          title: '100% 코나 커피와의 환상 궁합',
          description: '차갑고 크리미한 빙수에 진한 100% 코나 커피를 곁들이는 조합은 평범한 셰이브 아이스 가게에서는 만날 수 없습니다. 달콤하고 시원한 디저트와 부드러운 하와이산 커피가 서로를 완벽하게 살려 줍니다.',
        },
        {
          title: '와이키키 비치에서 도보 약 5분',
          description: '정통 한국 빙수를 맛보러 멀리 갈 필요가 없습니다. 코나커피도넛(Kona Coffee Donut?)은 칼라카우아 애비뉴에 자리해 와이키키 비치에서 도보 약 5분 거리. 해변에서 시간을 보내기 전후로 들르기 좋습니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 한국 빙수 먹는 곳',
      intro: '이 비교를 보고 진짜가 먹고 싶어졌다면, 와이키키에서 정통 한국 빙수를 맛볼 수 있는 곳을 알려드립니다.',
      shop: {
        name: 'Kona Coffee Donut? (코나커피도넛)',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키의 중심, 칼라카우아 애비뉴에 위치한 코나커피도넛(Kona Coffee Donut?)은 물 얼음이 아닌 크리미한 우유 얼음으로 만든 정통 한국 빙수를 제공합니다. 100% 코나 커피와 갓 만든 모찌 도넛도 준비되어 있으며, 와이키키 비치에서 도보 약 5분, 매일 오전 7시부터 오후 9시까지 영업합니다.',
        highlights: [
          '정통 한국 우유 빙수 (물 얼음이 아닙니다)',
          '100% 코나 커피와의 완벽한 페어링',
          '와이키키 비치에서 도보 약 5분',
          '매일 오전 7시 ~ 오후 9시 영업',
        ],
      },
      cta: '빙수 메뉴 보기',
    },
    howToEat: {
      title: '빙수를 즐기는 법',
      subtitle: '한 그릇을 100% 즐기는 팁',
      tips: [
        {
          title: '녹기 전에 빨리 먹기',
          description: '우유 얼음은 나오는 순간부터 녹기 시작합니다. 사진은 빠르게 찍고, 얼음이 아직 포슬포슬하고 눈꽃 같을 때 바로 떠먹으세요. 식감이 전부입니다. 우유 물이 되기 전에 즐기세요.',
        },
        {
          title: '토핑을 섞어 먹기',
          description: '위에서부터만 먹지 마세요. 숟가락으로 팥·과일·떡·연유를 얼음에 살살 섞어가며 먹으면, 한 숟가락마다 크리미한 얼음과 토핑이 골고루 어우러집니다.',
        },
        {
          title: '나눠 먹기',
          description: '빙수는 전통적으로 2~3명이 먹을 수 있는 큰 그릇에 나옵니다. 숟가락을 들고 둘러앉아 함께 즐겨보세요. 디저트인 동시에 소중한 사람들과의 소통의 시간이기도 합니다.',
        },
        {
          title: '코나 커피와 함께',
          description: '빙수에 100% 코나 커피를 곁들이는 것이 와이키키만의 완벽한 조합입니다. 부드럽고 진한 커피가 차갑고 달콤한 우유 눈꽃을 아름답게 받쳐 줍니다.',
        },
      ],
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        {
          question: '빙수와 셰이브 아이스의 차이는 무엇인가요?',
          answer: '가장 큰 차이는 얼음입니다. 빙수는 냉동 우유로 만든 한국식 간 얼음으로, 크리미하고 눈꽃 같은 식감이 특징입니다. 하와이안 셰이브 아이스(그리고 대부분의 미국식 셰이브 아이스)는 물 얼음으로 만들어 과일 시럽을 부어 주기 때문에, 크리미하다기보다 아삭하고 시원합니다. 빙수는 여기에 팥, 떡, 신선한 과일을 올리고 보통 큰 그릇에 담아 나눠 먹습니다.',
        },
        {
          question: '한국식 셰이브 아이스는 뭐라고 부르나요?',
          answer: '한국식 셰이브 아이스는 빙수(빙수)라고 부릅니다. 달콤한 팥을 올린 가장 대표적인 종류는 팥빙수(팥빙수)라고 하죠. 그러니 "한국어로 셰이브 아이스가 뭐야?"의 답은 빙수(빙수)입니다.',
        },
        {
          question: '빙수와 가키고리는 같은 건가요?',
          answer: '아니요. 둘 다 간 얼음 디저트지만, 빙수(한국)는 냉동 우유로 만들어 크리미하고 눈꽃 같은 식감이고, 가키고리(일본)는 물 얼음으로 만들어 가볍고 포슬포슬합니다. 가키고리는 보통 말차나 딸기 같은 시럽을 부어 맛을 내고, 빙수는 우유 얼음을 중심으로 팥·떡·연유 같은 토핑을 올립니다.',
        },
        {
          question: '"빙수"는 무슨 뜻인가요?',
          answer: '빙수(氷水)는 "얼음물"을 뜻하는 한자에서 온 말로, 오늘날에는 한국식 간 얼음 디저트 전반을 가리킵니다. 인기 있는 팥 버전은 팥빙수(팥빙수)이며, 여기서 "팥"은 붉은 팥을 의미합니다.',
        },
        {
          question: '와이키키에서 한국 빙수는 어디서 먹을 수 있나요?',
          answer: '와이키키 중심부, 2142 Kalakaua Ave에 있는 코나커피도넛(Kona Coffee Donut?)에서 정통 한국 빙수를 맛볼 수 있습니다. 와이키키 비치에서 도보 약 5분 거리이며, 크리미한 우유 빙수를 100% 코나 커피, 갓 만든 모찌 도넛과 함께 매일 오전 7시부터 오후 9시까지 제공합니다.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 진짜 한국 빙수를',
      text: '이제 차이를 알았으니, 직접 맛볼 차례입니다. 2142 Kalakaua Ave의 코나커피도넛(Kona Coffee Donut?)에서 정통 크리미 빙수와 100% 코나 커피를 즐겨보세요.',
      menuButton: '빙수 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '빙수 vs 셰이브 아이스 vs 가키고리',
    },
  },
  zh: {
    hero: {
      title: '雪冰 vs 刨冰 vs 日式刨冰',
      subtitle: '韩国、夏威夷与日本冰品全方位对比',
      updated: '2026年6月更新',
      readTime: '阅读约8分钟',
    },
    definition: {
      title: '快速解答：到底有什么不同？',
      text: '三者都是刨冰甜品，但真正的区别在于<strong>冰本身</strong>。<strong>雪冰（韩式，빙수）</strong>是蓬松的<strong>牛奶冰</strong>，绵密如雪，上面铺红豆、水果和麻糬。<strong>夏威夷刨冰</strong>是细刨的<strong>水冰</strong>，浇上水果糖浆（常加炼乳"雪盖"和酸梅粉 li hing）。<strong>日式刨冰（kakigori）</strong>是蓬松的<strong>水冰</strong>，淋上抹茶或糖浆。大家最常搜索的答案：<strong>"韩式刨冰"就叫雪冰（빙수）</strong>。',
    },
    history: {
      title: '三种冰品的简短历史',
      subtitle: '韩国、夏威夷与日本如何各自将冰变成自己的特色',
      p1: '雪冰深深扎根于韩国。朝鲜王朝时期（1392—1897年），冬季采集的冰块被储存在名为<strong>冰库（빙고）</strong>的王室仓库中。最早的雪冰只是刨冰配上甜红豆（팥），由此诞生了<strong>红豆刨冰（팥빙수）</strong>的名字。整个20世纪，冰本身从粗糙的冰块演变为超细的刨牛奶冰——也就是定义现代雪冰的绵密雪花质感。',
      p2: '夏威夷刨冰的源头可追溯到19世纪后期来到夏威夷的日本农场移民。他们带来了浇糖浆的刨冰传统，也就是<strong>日式刨冰（kakigori）</strong>，并用刀剑般的刀刃刨削冰块加以再现。久而久之，这演变成淋上水果糖浆、配炼乳"雪盖"和咸甜酸梅粉 li hing 的彩虹刨冰，如今已是夏威夷的标志。',
      p3: '日式刨冰（かき氷）是三者中最古老的，早在平安时代（794—1185年）就有记载，当时是浇上甜藤蔓糖浆的稀有奢侈品。如今日式刨冰是深受喜爱的夏季美食，蓬松轻盈，常用抹茶、草莓、炼乳调味，并常配红豆或麻糬。',
      p4: '所以三种甜品共享同一个祖先——刨冰，却因各自文化手头的材料而走向不同方向。夏威夷和日本沿用<strong>水冰</strong>和鲜艳糖浆。而韩国选择了另一条路，把<strong>牛奶</strong>冻进冰里，做出更浓郁绵密的甜品。正是这一个选择，让雪冰的味道与普通刨冰截然不同。',
    },
    comparison: {
      title: '雪冰 vs 刨冰 vs 日式刨冰',
      subtitle: '区别一目了然',
      intro: '它们都从刨冰开始，但基底、口感和配料讲述着三个截然不同的故事。以下是并排对比：',
      headers: {
        feature: '特点',
        bingsu: '雪冰 (韩国)',
        shavedIce: '刨冰 (夏威夷)',
        kakigori: '日式刨冰 (日本)',
      },
      rows: [
        {
          feature: '冰的基底',
          bingsu: '冷冻牛奶冰',
          shavedIce: '水冰 + 水果糖浆',
          kakigori: '水冰 + 糖浆',
        },
        {
          feature: '口感',
          bingsu: '蓬松如雪、绵密',
          shavedIce: '细腻冰爽',
          kakigori: '蓬松轻盈',
        },
        {
          feature: '配料',
          bingsu: '红豆、麻糬、水果、炼乳',
          shavedIce: '水果糖浆、雪盖、酸梅粉',
          kakigori: '抹茶、红豆、炼乳',
        },
        {
          feature: '甜味来源',
          bingsu: '甜牛奶 + 配料',
          shavedIce: '浇淋的水果糖浆',
          kakigori: '浇淋的糖浆 + 炼乳',
        },
        {
          feature: '供应方式',
          bingsu: '大碗，适合分享',
          shavedIce: '杯或甜筒，单人份',
          kakigori: '个人碗',
        },
        {
          feature: '起源',
          bingsu: '韩国（朝鲜王朝）',
          shavedIce: '夏威夷（种植园时代）',
          kakigori: '日本（平安时代）',
        },
      ],
      note: '最大的区别是：雪冰以冷冻牛奶为基底，而夏威夷刨冰和日式刨冰以水冰为基底。这就是为什么雪冰绵密浓郁，而另外两者清爽冰脆。',
    },
    types: {
      title: '你该选哪种冰品？',
      subtitle: '帮你挑到那一碗的快速指南',
      items: [
        {
          name: '选雪冰',
          korean: '绵密牛奶雪',
          description: '如果你想要一份绵密、奶香、雪花般的甜品，吃起来更像冰淇淋而非刨冰，就选雪冰。刨好的牛奶冰在舌尖轻轻融化，红豆、新鲜水果、麻糬和炼乳等配料让每一勺都浓郁满足。',
          icon: '🍧',
        },
        {
          name: '选夏威夷刨冰',
          korean: '经典彩虹',
          description: '想要经典海岛体验就选夏威夷刨冰——细刨的水冰浸满鲜艳的彩虹水果糖浆，常配炼乳"雪盖"和咸甜酸梅粉。冰脆、缤纷、充满怀旧感。',
          icon: '🌈',
        },
        {
          name: '选日式刨冰',
          korean: '轻盈加抹茶',
          description: '如果你想要轻盈蓬松、口味精致的——比如抹茶、草莓或炼乳，就选日式刨冰。它轻如空气、清爽宜人，而非浓郁，是炎炎夏日里清凉爽口的一碗。',
          icon: '🍵',
        },
        {
          name: '分享首选雪冰',
          korean: '最适合多人',
          description: '雪冰传统上用可供两三人享用的大碗盛放。如果你和朋友家人一起，想要一份大家一起开动、又上镜的甜品，雪冰是轻松之选。',
          icon: '👥',
        },
        {
          name: '在威基基吃雪冰',
          korean: '来这里品尝',
          description: '想在海滩附近品尝正宗韩式雪冰？卡拉卡瓦大道上的科纳咖啡甜甜圈（Kona Coffee Donut?）供应正宗的牛奶刨冰雪冰，还有100%科纳咖啡和现做麻糬甜甜圈，距威基基海滩步行约5分钟。',
          icon: '🌺',
        },
      ],
    },
    whyHawaii: {
      title: '为什么要在威基基试试韩式雪冰',
      points: [
        {
          title: '刨冰给不了的绵密牛奶雪',
          description: '夏威夷刨冰和日式刨冰都用水冰制作。雪冰用冷冻牛奶制作，因此拥有在舌尖轻轻融化的绵密雪花质感，这是水冰甜品无法复制的。如果你只吃过刨冰，正宗雪冰会是完全不同的体验。',
        },
        {
          title: '夏威夷水果风味雪冰',
          description: '在威基基，你可以享用铺着海岛风热带水果的雪冰。它将绵密的韩式牛奶雪基底与夏威夷招牌的鲜亮水果风味融为一体——一碗尽享两种精彩。',
        },
        {
          title: '与100%科纳咖啡绝配',
          description: '冰凉绵密的雪冰配上一杯浓郁的100%科纳咖啡，是普通刨冰摊位上找不到的搭配。香甜冰爽的甜品与顺滑的夏威夷本地咖啡彼此完美衬托。',
        },
        {
          title: '距威基基海滩约5分钟',
          description: '想吃正宗韩式雪冰不必跑远。科纳咖啡甜甜圈（Kona Coffee Donut?）就在卡拉卡瓦大道上，距威基基海滩步行约5分钟，玩海前后都能轻松到达。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基哪里能吃到韩式雪冰',
      intro: '如果这篇对比让你想吃正宗的那一碗，这里就是在威基基品尝正宗韩式雪冰的地方。',
      shop: {
        name: 'Kona Coffee Donut?（科纳咖啡甜甜圈）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '位于威基基中心地段卡拉卡瓦大道上，科纳咖啡甜甜圈（Kona Coffee Donut?）供应以绵密牛奶刨冰——而非水冰——制作的正宗韩式雪冰。我们还有100%科纳咖啡和现做麻糬甜甜圈，距威基基海滩步行约5分钟，每天上午7点至晚上9点营业。',
        highlights: [
          '正宗韩式牛奶雪冰（不是水冰）',
          '与100%科纳咖啡完美搭配',
          '距威基基海滩步行约5分钟',
          '每天上午7点至晚上9点营业',
        ],
      },
      cta: '查看雪冰菜单',
    },
    howToEat: {
      title: '如何享用雪冰',
      subtitle: '把每一碗吃到极致的小贴士',
      tips: [
        {
          title: '融化前赶快吃',
          description: '牛奶刨冰从上桌那一刻就开始融化。快速拍照后，趁冰还蓬松如雪时立刻开动。口感就是一切，别让它变成一碗奶汤。',
        },
        {
          title: '把配料拌进去',
          description: '不要只从上往下吃。边吃边用勺子把红豆、水果、麻糬和炼乳轻轻拌入冰中，让每一口都能均匀尝到绵密的冰与配料。',
        },
        {
          title: '一起分享',
          description: '雪冰传统上用可供两三人享用的大碗盛放。拿起勺子围坐一起享用吧——它既是甜品，也是一段美好的社交时光。',
        },
        {
          title: '搭配科纳咖啡',
          description: '雪冰配上一杯100%科纳咖啡，是威基基独有的完美组合。顺滑浓郁的咖啡与冰凉香甜的牛奶雪相得益彰。',
        },
      ],
    },
    faq: {
      title: '常见问题',
      items: [
        {
          question: '雪冰和刨冰有什么区别？',
          answer: '主要区别在于冰。雪冰是用冷冻牛奶制作的韩式刨冰，因此口感绵密如雪。夏威夷刨冰（以及大多数美式刨冰）用水冰制作并浇上水果糖浆，所以是冰脆爽口而非绵密。雪冰还会铺上红豆、麻糬和新鲜水果，通常用大碗盛放供人分享。',
        },
        {
          question: '韩式刨冰叫什么？',
          answer: '韩式刨冰叫雪冰（빙수）。最经典的、铺甜红豆的那一种叫红豆刨冰（팥빙수）。所以如果你在查"刨冰用韩语怎么说"，答案就是雪冰（빙수）。',
        },
        {
          question: '雪冰和日式刨冰是一样的吗？',
          answer: '不一样。两者都是刨冰甜品，但雪冰（韩国）用冷冻牛奶制作，口感绵密如雪；日式刨冰（日本）用水冰制作，轻盈蓬松。日式刨冰通常用抹茶或草莓等糖浆调味，而雪冰则以牛奶冰为核心，配上红豆、麻糬、炼乳等配料。',
        },
        {
          question: '"雪冰（bingsu）"是什么意思？',
          answer: '雪冰（빙수，氷水）源自"冰水"二字的韩语读音，如今泛指韩式刨冰甜品。人气的红豆版本叫红豆刨冰（팥빙수），其中"팥"意为红豆。',
        },
        {
          question: '在威基基哪里能吃到韩式雪冰？',
          answer: '你可以在威基基中心地段、地址为2142 Kalakaua Ave的科纳咖啡甜甜圈（Kona Coffee Donut?）品尝正宗韩式雪冰，距威基基海滩步行约5分钟。我们供应绵密的牛奶雪冰，搭配100%科纳咖啡和现做麻糬甜甜圈，每天上午7点至晚上9点营业。',
        },
      ],
    },
    cta: {
      title: '来威基基品尝正宗韩式雪冰',
      text: '现在你已经知道区别了，亲口尝尝吧。前往2142 Kalakaua Ave的科纳咖啡甜甜圈（Kona Coffee Donut?），享用正宗绵密雪冰搭配100%科纳咖啡。',
      menuButton: '查看雪冰菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '雪冰 vs 刨冰 vs 日式刨冰',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Bingsu vs Shaved Ice vs Kakigori: Korean, Hawaiian & Japanese Iced Desserts Compared',
  description: 'Bingsu vs shaved ice vs kakigori explained. Korean shaved ice is called bingsu (빙수) — creamy milk ice. See how it differs from Hawaiian shave ice and Japanese kakigori, and where to try bingsu in Waikiki.',
  image: 'https://www.konacoffeedonut.com/images/blog/bingsu-vs-shaved-ice-kakigori.jpeg',
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
    '@id': 'https://www.konacoffeedonut.com/en/blog/bingsu-vs-shaved-ice-kakigori',
  },
  keywords: 'bingsu vs shaved ice, korean shaved ice name, what is shaved ice in korean, bingsu vs kakigori, shaved ice vs bingsu, is bingsu korean',
  wordCount: 1300,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between bingsu and shaved ice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main difference is the ice. Bingsu is Korean shaved ice made from frozen milk, giving it a creamy, snow-like texture. Hawaiian shave ice (and most American shaved ice) is made from frozen water and flavored with poured fruit syrups, so it is crisp and icy rather than creamy. Bingsu is also topped with red bean, mochi, and fresh fruit, and is usually served in a large bowl for sharing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Korean shaved ice called?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Korean shaved ice is called bingsu (빙수). The most classic version, topped with sweet red beans, is called patbingsu (팥빙수). So if you are looking up "what is shaved ice in Korean," the answer is bingsu (빙수).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is bingsu the same as kakigori?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Both are shaved-ice desserts, but bingsu (Korean) is made from frozen milk for a creamy, snow-like texture, while kakigori (Japanese) is made from frozen water and is light and fluffy. Kakigori is usually flavored with poured syrup such as matcha or strawberry, while bingsu is built around milk ice with toppings like red bean, mochi, and condensed milk.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does "bingsu" mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bingsu (빙수) comes from the Korean reading of the characters meaning "ice water." Today it refers broadly to Korean shaved ice desserts. The popular red bean version is patbingsu (팥빙수), where "pat" (팥) means red bean.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I get Korean bingsu in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can try authentic Korean bingsu at Kona Coffee Donut? at 2142 Kalakaua Ave, in the heart of Waikiki — about a 5-minute walk from Waikiki Beach. We serve creamy shaved-milk bingsu alongside 100% Kona coffee and fresh mochi donuts, open daily from 7AM to 9PM.',
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

export default function BingsuVsShavedIceKakigoriPage() {
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
          src="/images/blog/bingsu-vs-shaved-ice-kakigori.jpeg"
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

        {/* Types — Which Should You Get */}
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

        {/* Why Try Korean Bingsu in Waikiki */}
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

        {/* How to Enjoy Bingsu */}
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
              href={`/${locale}/blog/hawaiian-shave-ice`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Hawaiian Shave Ice
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
