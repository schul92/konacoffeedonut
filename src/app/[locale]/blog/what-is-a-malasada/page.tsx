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
      title: 'What is a Malasada?',
      subtitle: 'The Complete Guide to Hawaii\'s Famous Portuguese Donut',
      updated: 'Updated June 2026',
      readTime: '8 min read',
    },
    definition: {
      title: 'What is a Malasada?',
      text: 'A <strong>malasada</strong> is a <strong>Portuguese fried dough</strong> made from an egg-rich yeast dough that is deep-fried until golden, then rolled generously in granulated sugar. Unlike American donuts, a malasada has <strong>no hole and no glaze</strong> — just a crisp, sugary shell wrapped around a light, pillowy interior. In Hawaii, malasadas are often <strong>filled with haupia (coconut), custard, or li hing</strong>, and they are best enjoyed hot and fresh, straight from the fryer. Crispy outside, soft and airy inside, this beloved local-kine treat is a true Hawaiʻi icon.',
    },
    history: {
      title: 'The History of the Malasada',
      subtitle: 'From the Azores to Hawaii\'s Sugar Plantations',
      p1: 'The malasada traces its roots to the Portuguese islands of <strong>Madeira and the Azores</strong>, where this simple fried dough was a cherished homemade treat. Beginning in the <strong>1870s</strong>, waves of Portuguese immigrants left these islands to work the sugar plantations of Hawaii, bringing their language, music, and — fortunately for us — their recipes across the Pacific.',
      p2: 'Traditionally, malasadas were eaten on <strong>Terça-feira Gorda</strong> (Fat Tuesday), the day before the Christian season of Lent began. Known in Hawaii as <strong>"Malasada Day,"</strong> this was the moment to use up the rich pantry staples — lard, sugar, and eggs — that would be given up during the weeks of fasting. Families would fry up batches of golden dough and share them with neighbors, turning a humble necessity into a joyful tradition.',
      p3: 'The malasada became a statewide sensation thanks to <strong>Leonard\'s Bakery</strong>, which opened in Honolulu in <strong>1952</strong> and began selling malasadas to the general public. What had been a once-a-year homemade treat suddenly became an everyday craving, and Leonard\'s iconic pink boxes helped cement the malasada as a defining Hawaii food.',
      p4: 'Today, the malasada is a beloved <strong>local-kine treat</strong> sold across the Hawaiian Islands — from old-school bakeries to food trucks to cafes in the heart of Waikiki. Modern versions come stuffed with haupia, custard, and tropical flavors, but the heart of the malasada remains the same: hot, fresh dough rolled in sugar, shared with the people you love.',
    },
    comparison: {
      title: 'Malasada vs Mochi Donut vs Classic Donut',
      subtitle: 'What Makes a Malasada Different?',
      intro: 'Malasadas, mochi donuts, and classic American donuts are all fried dough treats, but the similarities end there. Here\'s how they compare:',
      headers: {
        feature: 'Feature',
        bingsu: 'Malasada',
        shavedIce: 'Mochi Donut',
        kakigori: 'Classic Donut',
      },
      rows: [
        {
          feature: 'Dough',
          bingsu: 'Egg-rich yeasted dough',
          shavedIce: 'Glutinous rice flour dough',
          kakigori: 'Wheat flour dough',
        },
        {
          feature: 'Texture',
          bingsu: 'Light & pillowy, crisp sugar shell',
          shavedIce: 'Chewy & stretchy',
          kakigori: 'Soft & cakey',
        },
        {
          feature: 'Shape',
          bingsu: 'Round, no hole',
          shavedIce: 'Pon-de-ring of 8 connected balls',
          kakigori: 'Ring with a hole',
        },
        {
          feature: 'Coating / Filling',
          bingsu: 'Rolled in sugar, often filled',
          shavedIce: 'Light glaze or dusting',
          kakigori: 'Glazed, frosted, or sprinkled',
        },
        {
          feature: 'Origin',
          bingsu: 'Portugal, via Hawaii',
          shavedIce: 'Japan-Hawaii fusion',
          kakigori: 'USA / Europe',
        },
        {
          feature: 'Best Eaten',
          bingsu: 'Hot & fresh from the fryer',
          shavedIce: 'Fresh, slightly warm',
          kakigori: 'Anytime with coffee',
        },
      ],
      note: 'The signature of a malasada is its hot, fresh, sugar-rolled exterior — a crisp shell of granulated sugar wrapped around a cloud-like center that you simply cannot replicate once it has cooled down.',
    },
    types: {
      title: 'Types of Malasada',
      subtitle: 'From Classic Sugar to Tropical Hawaiian Fillings',
      items: [
        {
          name: 'Original Sugar Malasada',
          korean: 'Açúcar',
          description: 'The classic and most traditional version. A puffy, golden ball of fried dough rolled generously in granulated sugar — no filling, no glaze, just pure pillowy goodness. This is the malasada in its purest form: crisp on the outside, airy on the inside, and best eaten while still warm. The one that started it all.',
          icon: '🍩',
        },
        {
          name: 'Haupia (Coconut) Filled',
          korean: 'Haupia',
          description: 'A true taste of Hawaii. The malasada is injected with haupia — a silky Hawaiian coconut custard made from coconut milk. The tropical coconut cream pairs beautifully with the warm, sugary dough, making this one of the most popular island-style fillings and a must-try for visitors.',
          icon: '🥥',
        },
        {
          name: 'Custard / Vanilla Cream',
          korean: 'Creme',
          description: 'A rich, comforting favorite. Smooth vanilla custard or pastry cream is piped into the center of the malasada, creating a decadent contrast with the crisp sugar shell. Each bite delivers a warm rush of creamy filling — a crowd-pleaser for those who love a classic cream-filled treat.',
          icon: '🍮',
        },
        {
          name: 'Li Hing Mui Sugar',
          korean: 'Li hing',
          description: 'A uniquely Hawaiian twist. Instead of plain sugar, the malasada is rolled in li hing mui powder — the sweet, salty, and tangy dried plum seasoning that locals adore. The result is a sweet-and-sour flavor explosion that turns a simple malasada into an unmistakably island treat.',
          icon: '🔴',
        },
        {
          name: 'Dulce / Chocolate & Seasonal',
          korean: 'Sazonal',
          description: 'The creative, ever-changing category. Think dulce de leche, rich chocolate ganache, or seasonal fillings like lilikoi (passion fruit), guava, and mango. Bakeries love to rotate these limited-time flavors, giving regulars a reason to come back and try something new with every visit.',
          icon: '🍫',
        },
      ],
    },
    whyHawaii: {
      title: 'Why Malasadas Are a Hawaiʻi Icon',
      points: [
        {
          title: 'Portuguese Plantation Heritage',
          description: 'Malasadas arrived with Portuguese immigrants from Madeira and the Azores who came to work Hawaii\'s sugar plantations in the late 1800s. Over generations, this homemade island treat became woven into the islands\' multicultural food identity — a delicious legacy of Hawaii\'s plantation history.',
        },
        {
          title: 'The Malasada Day Tradition',
          description: 'Every year on Fat Tuesday — known locally as "Malasada Day" — bakeries across Hawaii fry up malasadas by the thousands and lines stretch out the door. This festive tradition, rooted in the Portuguese custom of using up lard and sugar before Lent, keeps the malasada at the heart of local culture.',
        },
        {
          title: 'Best Eaten Fresh & Hot',
          description: 'A malasada is at its absolute best straight from the fryer, when the sugar shell is still crackly and the inside is warm and pillowy. This "eat it now" magic makes a fresh malasada something you can only truly experience in person — which is exactly why visitors seek them out across the islands.',
        },
        {
          title: 'Multicultural Local Food Culture',
          description: 'Hawaii\'s food scene blends Portuguese, Japanese, Filipino, Chinese, and Native Hawaiian influences, and the malasada sits proudly at the center. Filled with haupia or rolled in li hing mui, it shows how island cooks lovingly adapt a Portuguese classic into something unmistakably Hawaiian.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Get Malasadas in Waikiki',
      intro: 'If you\'re craving fresh, hot malasadas in Waikiki, Kona Coffee Donut is your destination.',
      shop: {
        name: 'Kona Coffee Donut',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Located in the heart of Waikiki on Kalākaua Avenue, Kona Coffee Donut serves fresh hot malasadas rolled in sugar and made to order. What makes ours special? We pair them with rich Kona coffee — the perfect combination of warm, sugary dough and smooth Hawaiian coffee, just steps from the beach.',
        highlights: [
          'Fresh hot malasadas rolled in sugar',
          'Paired perfectly with rich Kona coffee',
          'Walking distance from Waikiki Beach',
          'Open daily — perfect for a morning or afternoon treat',
        ],
      },
      cta: 'View Our Malasada Menu',
    },
    howToEat: {
      title: 'How to Enjoy a Malasada',
      subtitle: 'Tips for the Perfect Malasada Experience',
      tips: [
        {
          title: 'Eat It Hot & Fresh',
          description: 'A malasada is best the moment it leaves the fryer, while the sugar shell is still crisp and the inside is warm and airy. Don\'t let it sit — the magic fades as it cools. If you can eat it within minutes of buying, you\'ll experience the malasada exactly as it\'s meant to be.',
        },
        {
          title: 'Pair It with Kona Coffee',
          description: 'The sweet, sugary malasada is the perfect match for a cup of smooth, rich Kona coffee. The slight bitterness of the coffee balances the sweetness of the dough, and the warm-and-warm pairing is a classic Hawaii café experience. It\'s how the locals do it.',
        },
        {
          title: 'Try a Filled One',
          description: 'While the original sugar malasada is a classic, don\'t leave without trying a filled version. Haupia (coconut) is a true taste of Hawaii, while custard offers rich, creamy comfort. Each filling adds a new dimension to the warm, pillowy dough — and tropical flavors are a must for visitors.',
        },
        {
          title: 'Get a Mixed Box to Share',
          description: 'Can\'t decide? Grab a mixed box and try several flavors at once. Malasadas are made for sharing, so gather your friends or family and sample the original, haupia, custard, and li hing varieties together. It\'s the best way to find your favorite.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About Malasadas',
      items: [
        {
          question: 'What is a malasada?',
          answer: 'A malasada is a Portuguese fried dough made from an egg-rich yeast dough that is deep-fried until golden and rolled in granulated sugar. Unlike a typical donut, it has no hole and no glaze — just a crisp sugar shell around a light, pillowy interior. In Hawaii, malasadas are often filled with haupia (coconut), custard, or li hing, and are best eaten hot and fresh.',
        },
        {
          question: 'Malasada vs donut — what\'s the difference?',
          answer: 'A classic American donut is usually a ring-shaped wheat dough that\'s glazed or frosted. A malasada is a round Portuguese yeast dough with no hole, rolled in granulated sugar rather than glazed, and made with an egg-rich recipe that gives it a lighter, more pillowy texture. Malasadas are also traditionally eaten hot and fresh, and are often filled with cream or haupia.',
        },
        {
          question: 'What does haupia mean?',
          answer: 'Haupia is a traditional Hawaiian coconut dessert — a silky, pudding-like coconut custard made from coconut milk. When used as a malasada filling, haupia adds a creamy, tropical coconut flavor that pairs beautifully with the warm, sugary dough. It\'s one of the most popular island-style malasada fillings.',
        },
        {
          question: 'Why are malasadas a Hawaii thing?',
          answer: 'Malasadas came to Hawaii with Portuguese immigrants from Madeira and the Azores who arrived in the 1870s to work the sugar plantations. They brought the tradition of frying malasadas on Fat Tuesday ("Malasada Day") before Lent. Leonard\'s Bakery popularized them statewide in 1952, and today malasadas are a beloved part of Hawaii\'s multicultural local food culture.',
        },
        {
          question: 'Where can I get fresh malasadas in Waikiki?',
          answer: 'Kona Coffee Donut on Kalākaua Avenue serves fresh, hot malasadas rolled in sugar, made to order and paired with rich Kona coffee. We\'re located in the heart of Waikiki, just walking distance from the beach, and open daily — making it easy to grab a warm malasada any time of day.',
        },
      ],
    },
    cta: {
      title: 'Try Fresh Malasadas in Waikiki',
      text: 'Visit Kona Coffee Donut at 2142 Kalakaua Ave and experience fresh, hot malasadas rolled in sugar and paired with premium Kona coffee.',
      menuButton: 'View Malasada Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'What is a Malasada?',
    },
  },
  ja: {
    hero: {
      title: 'マラサダとは？',
      subtitle: 'ハワイ名物・ポルトガル発祥の揚げドーナツ完全ガイド',
      updated: '2026年6月更新',
      readTime: '8分で読める',
    },
    definition: {
      title: 'マラサダとは？',
      text: '<strong>マラサダ</strong>は、卵をたっぷり使った発酵生地をきつね色になるまで揚げ、グラニュー糖をたっぷりまぶした<strong>ポルトガル発祥の揚げパン</strong>です。アメリカのドーナツと違い、<strong>穴がなくグレーズもかけません</strong>。サクサクの砂糖の衣の中に、ふわふわで軽い生地が包まれています。ハワイでは<strong>ハウピア（ココナッツ）、カスタード、リーヒン</strong>などを詰めることが多く、揚げたて熱々が一番。外はカリッ、中はふんわり、地元で愛される正真正銘のハワイ名物です。',
    },
    history: {
      title: 'マラサダの歴史',
      subtitle: 'アゾレス諸島からハワイのサトウキビ農園へ',
      p1: 'マラサダのルーツは、ポルトガルの<strong>マデイラ諸島とアゾレス諸島</strong>にあります。このシンプルな揚げパンは、家庭で作られる大切なおやつでした。<strong>1870年代</strong>から、これらの島々を離れたポルトガル移民がハワイのサトウキビ農園で働くため次々と海を渡り、言語や音楽、そして—私たちにとって幸運なことに—そのレシピを太平洋を越えて持ち込みました。',
      p2: '伝統的に、マラサダはキリスト教の四旬節（レント）が始まる前日、<strong>「謝肉の火曜日（テルサ＝フェイラ・ゴルダ）」</strong>に食べられていました。ハワイでは<strong>「マラサダ・デー」</strong>として知られ、断食期間中に控えるラード・砂糖・卵といった豊かな食材を使い切る日でした。家族で黄金色の生地をたっぷり揚げ、ご近所と分け合う—質素な習慣が喜びの伝統へと変わっていきました。',
      p3: 'マラサダがハワイ全土で大人気になったのは、1952年にホノルルで開業し一般向けにマラサダを売り始めた<strong>レナーズ・ベーカリー</strong>のおかげです。年に一度の手作りおやつだったものが、たちまち毎日でも食べたい一品となり、レナーズの象徴的なピンクの箱が、マラサダをハワイを代表する食べ物として定着させました。',
      p4: '今日、マラサダは<strong>地元で愛される名物</strong>として、昔ながらのベーカリーからフードトラック、ワイキキ中心部のカフェまで、ハワイ諸島の至る所で売られています。現代版にはハウピアやカスタード、トロピカルなフレーバーが詰められますが、マラサダの本質は変わりません—砂糖をまぶした揚げたて熱々の生地を、大切な人と分かち合うことです。',
    },
    comparison: {
      title: 'マラサダ vs モチドーナツ vs クラシックドーナツ',
      subtitle: 'マラサダはどう違う？',
      intro: 'マラサダ、モチドーナツ、クラシックなアメリカンドーナツはすべて揚げ生地のお菓子ですが、その違いは明確です。比較してみましょう：',
      headers: {
        feature: '特徴',
        bingsu: 'マラサダ',
        shavedIce: 'モチドーナツ',
        kakigori: 'クラシックドーナツ',
      },
      rows: [
        {
          feature: '生地',
          bingsu: '卵たっぷりの発酵生地',
          shavedIce: '白玉粉（もち米粉）の生地',
          kakigori: '小麦粉の生地',
        },
        {
          feature: '食感',
          bingsu: '軽くふわふわ、砂糖の衣はサクサク',
          shavedIce: 'もちもち、よく伸びる',
          kakigori: '柔らかくケーキのよう',
        },
        {
          feature: '形',
          bingsu: '丸く、穴なし',
          shavedIce: 'ポンデリング（8つの玉が連なる）',
          kakigori: '穴のあるリング型',
        },
        {
          feature: '衣・フィリング',
          bingsu: '砂糖をまぶし、フィリング入りも',
          shavedIce: '軽いグレーズや粉糖',
          kakigori: 'グレーズ、フロスティング、スプリンクル',
        },
        {
          feature: '起源',
          bingsu: 'ポルトガル発、ハワイ経由',
          shavedIce: '日本×ハワイの融合',
          kakigori: 'アメリカ／ヨーロッパ',
        },
        {
          feature: 'おすすめの食べ方',
          bingsu: '揚げたて熱々で',
          shavedIce: '作りたて、ほんのり温かく',
          kakigori: 'いつでもコーヒーと一緒に',
        },
      ],
      note: 'マラサダの真骨頂は、揚げたて熱々の砂糖をまぶした衣にあります。グラニュー糖のサクサクの衣が雲のようにふわふわの中身を包む—冷めてしまっては決して再現できない味わいです。',
    },
    types: {
      title: 'マラサダの種類',
      subtitle: '定番の砂糖からトロピカルなハワイアンフィリングまで',
      items: [
        {
          name: 'オリジナル・シュガーマラサダ',
          korean: 'Açúcar',
          description: '最も伝統的な定番。ふっくら黄金色に揚げた生地に、グラニュー糖をたっぷりまぶしただけ—フィリングもグレーズもなし、純粋なふわふわのおいしさです。外はカリッ、中はふんわり、温かいうちに食べるのが一番。すべての原点となるマラサダです。',
          icon: '🍩',
        },
        {
          name: 'ハウピア（ココナッツ）入り',
          korean: 'Haupia',
          description: 'まさにハワイの味。マラサダの中に、ココナッツミルクで作る滑らかなハワイアンココナッツカスタード「ハウピア」を注入。トロピカルなココナッツクリームが温かく甘い生地と見事に調和し、島スタイルの中でも特に人気のフィリング。旅行者には必食です。',
          icon: '🥥',
        },
        {
          name: 'カスタード／バニラクリーム',
          korean: 'Creme',
          description: '濃厚で心温まる定番の人気者。なめらかなバニラカスタードやパティシエクリームをマラサダの中心に絞り入れ、サクサクの砂糖の衣との贅沢なコントラストを生み出します。一口ごとに温かくクリーミーなフィリングがあふれ出す、クリーム好きにはたまらない一品です。',
          icon: '🍮',
        },
        {
          name: 'リーヒンムイシュガー',
          korean: 'Li hing',
          description: 'ハワイならではのひねりを効かせた一品。普通の砂糖の代わりに、地元で愛される甘酸っぱく塩気のある干し梅パウダー「リーヒンムイ」をまぶします。甘酸っぱい味の爆発が、シンプルなマラサダを紛れもない島のお菓子へと変身させます。',
          icon: '🔴',
        },
        {
          name: 'ドゥルセ／チョコ＆季節限定',
          korean: 'Sazonal',
          description: '創造的で常に変化するカテゴリー。ドゥルセ・デ・レチェ、濃厚なチョコレートガナッシュ、リリコイ（パッションフルーツ）・グァバ・マンゴーなどの季節限定フィリングも。ベーカリーはこうした期間限定フレーバーを次々と入れ替え、常連客が訪れるたびに新しい味と出会える楽しみを提供します。',
          icon: '🍫',
        },
      ],
    },
    whyHawaii: {
      title: 'マラサダがハワイの名物である理由',
      points: [
        {
          title: 'ポルトガル系農園移民の遺産',
          description: 'マラサダは、1800年代後半にハワイのサトウキビ農園で働くため、マデイラ諸島やアゾレス諸島からやって来たポルトガル移民とともに伝わりました。世代を重ねるうちに、この手作りの島のおやつはハワイの多文化な食のアイデンティティに溶け込み、ハワイの農園史が生んだおいしい遺産となりました。',
        },
        {
          title: 'マラサダ・デーの伝統',
          description: '毎年、謝肉の火曜日—地元では「マラサダ・デー」と呼ばれる日—には、ハワイ中のベーカリーが何千個ものマラサダを揚げ、店の外まで行列ができます。四旬節の前にラードと砂糖を使い切るというポルトガルの習慣に根ざしたこの祝祭の伝統が、マラサダを地元文化の中心に据え続けています。',
        },
        {
          title: '揚げたて熱々が一番',
          description: 'マラサダは、砂糖の衣がまだパリッとして中が温かくふわふわな、揚げたてが断然おいしい。この「今すぐ食べる」魔法こそ、揚げたてのマラサダが現地でしか本当に味わえない理由です。だからこそ旅行者はハワイの島々でマラサダを探し求めるのです。',
        },
        {
          title: '多文化が融合した地元の食文化',
          description: 'ハワイの食はポルトガル、日本、フィリピン、中国、ハワイ先住民の影響が混ざり合い、マラサダはその中心に堂々と存在しています。ハウピアを詰めたり、リーヒンムイをまぶしたり—島の料理人がポルトガルの定番を愛情を込めて紛れもないハワイの味へと昇華させた証です。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキでマラサダを食べるなら',
      intro: 'ワイキキで揚げたて熱々のマラサダを楽しむなら、コナコーヒードーナツへ。',
      shop: {
        name: 'Kona Coffee Donut（コナコーヒードーナツ）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心部、カラカウア通りに位置するコナコーヒードーナツは、注文を受けてから揚げる、砂糖をまぶした熱々のマラサダを提供。私たちのマラサダの特別なところは？芳醇なコナコーヒーとのペアリングです。温かく甘い生地と、なめらかなハワイアンコーヒーの組み合わせは最高—ビーチからすぐの場所で味わえます。',
        highlights: [
          '砂糖をまぶした揚げたて熱々のマラサダ',
          '芳醇なコナコーヒーとの完璧なペアリング',
          'ワイキキビーチから徒歩圏内',
          '毎日営業 — 朝食にも午後のおやつにも最適',
        ],
      },
      cta: 'マラサダメニューを見る',
    },
    howToEat: {
      title: 'マラサダの楽しみ方',
      subtitle: '最高のマラサダ体験のためのコツ',
      tips: [
        {
          title: '揚げたて熱々で食べよう',
          description: 'マラサダは、砂糖の衣がまだサクサクで中が温かくふわふわな、揚げたてが一番。置いておかないで—冷めると魔法が消えてしまいます。買ってから数分以内に食べられれば、マラサダ本来のおいしさを存分に味わえます。',
        },
        {
          title: 'コナコーヒーと一緒に',
          description: '甘く砂糖をまぶしたマラサダは、なめらかで芳醇なコナコーヒーと相性抜群。コーヒーのほのかな苦みが生地の甘さを引き立て、温かいもの同士のペアリングは、ハワイの定番カフェ体験です。地元の人はこうして楽しんでいます。',
        },
        {
          title: 'フィリング入りも試そう',
          description: 'オリジナルのシュガーマラサダも定番ですが、フィリング入りを試さずに帰るのはもったいない。ハウピア（ココナッツ）はまさにハワイの味、カスタードは濃厚でクリーミーな満足感。どのフィリングも温かくふわふわの生地に新しい次元を加えます。トロピカルな味は旅行者必食です。',
        },
        {
          title: 'ミックスボックスでシェア',
          description: '迷ったら、ミックスボックスで一度にいろんな味を試しましょう。マラサダはシェアするのにぴったり。友達や家族と集まって、オリジナル、ハウピア、カスタード、リーヒンを一緒に味わって。お気に入りを見つける一番の方法です。',
        },
      ],
    },
    faq: {
      title: 'マラサダに関するよくある質問',
      items: [
        {
          question: 'マラサダとは何ですか？',
          answer: 'マラサダは、卵をたっぷり使った発酵生地をきつね色に揚げ、グラニュー糖をまぶしたポルトガル発祥の揚げパンです。一般的なドーナツと違い、穴もグレーズもなく、サクサクの砂糖の衣の中にふわふわで軽い生地が包まれています。ハワイではハウピア（ココナッツ）、カスタード、リーヒンを詰めることが多く、揚げたて熱々で食べるのが一番です。',
        },
        {
          question: 'マラサダとドーナツの違いは何ですか？',
          answer: 'クラシックなアメリカンドーナツは通常、リング型の小麦生地にグレーズやフロスティングをかけたものです。マラサダは穴のない丸いポルトガルの発酵生地で、グレーズではなくグラニュー糖をまぶし、卵たっぷりのレシピでより軽くふわふわの食感に仕上げます。マラサダは伝統的に揚げたて熱々で食べられ、クリームやハウピアを詰めることも多いです。',
        },
        {
          question: 'ハウピアとはどういう意味ですか？',
          answer: 'ハウピアはハワイの伝統的なココナッツデザートで、ココナッツミルクで作る滑らかなプリンのようなココナッツカスタードです。マラサダのフィリングとして使うと、温かく甘い生地と見事に調和するクリーミーでトロピカルなココナッツ風味を加えます。島スタイルのマラサダフィリングの中でも特に人気です。',
        },
        {
          question: 'なぜマラサダはハワイの名物なのですか？',
          answer: 'マラサダは、1870年代にサトウキビ農園で働くためマデイラ諸島やアゾレス諸島からやって来たポルトガル移民とともにハワイに伝わりました。彼らは四旬節の前の謝肉の火曜日（「マラサダ・デー」）にマラサダを揚げる伝統を持ち込みました。1952年にレナーズ・ベーカリーがハワイ全土に広め、今日マラサダはハワイの多文化な地元食文化の愛すべき一部となっています。',
        },
        {
          question: 'ワイキキで揚げたてのマラサダはどこで買えますか？',
          answer: 'カラカウア通りのコナコーヒードーナツでは、注文を受けてから揚げる、砂糖をまぶした熱々のマラサダを、芳醇なコナコーヒーと一緒に提供しています。ワイキキの中心部、ビーチから徒歩圏内に位置し、毎日営業しているので、一日中いつでも温かいマラサダを気軽に楽しめます。',
        },
      ],
    },
    cta: {
      title: 'ワイキキで揚げたてのマラサダを',
      text: '2142 Kalakaua Ave のコナコーヒードーナツで、砂糖をまぶした揚げたて熱々のマラサダと、プレミアムコナコーヒーを体験してください。',
      menuButton: 'マラサダメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'マラサダとは？',
    },
  },
  ko: {
    hero: {
      title: '말라사다란 무엇인가?',
      subtitle: '하와이 명물, 포르투갈식 도넛의 모든 것 완벽 가이드',
      updated: '2026년 6월 업데이트',
      readTime: '8분 소요',
    },
    definition: {
      title: '말라사다란?',
      text: '<strong>말라사다(malasada)</strong>는 달걀이 풍부하게 들어간 발효 반죽을 황금빛이 돌 때까지 튀긴 뒤, 그래뉴당을 듬뿍 묻힌 <strong>포르투갈식 튀김 도넛</strong>입니다. 미국식 도넛과 달리 <strong>구멍도 없고 글레이즈도 바르지 않습니다.</strong> 바삭한 설탕 코팅 안에 가볍고 폭신한 속살이 가득 차 있죠. 하와이에서는 <strong>하우피아(코코넛), 커스터드, 리힝</strong> 등을 채워 넣는 경우가 많으며, 튀긴 직후 따끈할 때 먹는 것이 가장 맛있습니다. 겉은 바삭, 속은 부드럽고 폭신한, 현지인이 사랑하는 진정한 하와이 명물입니다.',
    },
    history: {
      title: '말라사다의 역사',
      subtitle: '아조레스 제도에서 하와이 사탕수수 농장까지',
      p1: '말라사다의 뿌리는 포르투갈의 <strong>마데이라 제도와 아조레스 제도</strong>에 있습니다. 이 소박한 튀김빵은 가정에서 만들어 먹던 소중한 간식이었죠. <strong>1870년대</strong>부터 이 섬들을 떠난 포르투갈 이민자들이 하와이의 사탕수수 농장에서 일하기 위해 줄지어 태평양을 건넜고, 그들의 언어와 음악, 그리고 — 우리에게는 다행스럽게도 — 요리법까지 함께 가지고 왔습니다.',
      p2: '전통적으로 말라사다는 기독교의 사순절이 시작되기 전날인 <strong>「참회 화요일(테르사페이라 고르다)」</strong>에 먹었습니다. 하와이에서는 <strong>"말라사다 데이(Malasada Day)"</strong>로 알려져 있는데, 금식 기간 동안 멀리해야 할 라드, 설탕, 달걀 같은 기름진 식재료를 다 쓰는 날이었습니다. 가족들은 황금빛 반죽을 잔뜩 튀겨 이웃과 나눴고, 소박한 살림의 지혜가 즐거운 전통으로 자리 잡았습니다.',
      p3: '말라사다가 하와이 전역에서 큰 인기를 끌게 된 데에는 1952년 호놀룰루에 문을 열고 일반 손님에게 말라사다를 팔기 시작한 <strong>레너드 베이커리(Leonard\'s Bakery)</strong>의 공이 큽니다. 일 년에 한 번 집에서 만들던 간식이 어느새 매일이라도 먹고 싶은 별미가 되었고, 레너드의 상징적인 분홍색 상자는 말라사다를 하와이를 대표하는 음식으로 확고히 자리매김하게 했습니다.',
      p4: '오늘날 말라사다는 옛날식 베이커리부터 푸드트럭, 와이키키 중심부의 카페까지 하와이 제도 곳곳에서 팔리는 <strong>현지인이 사랑하는 명물</strong>입니다. 현대식 버전에는 하우피아, 커스터드, 열대 과일 맛이 채워지지만, 말라사다의 본질은 변하지 않습니다 — 설탕을 묻힌 따끈한 갓 튀긴 반죽을 사랑하는 사람들과 나누는 것이죠.',
    },
    comparison: {
      title: '말라사다 vs 모찌 도넛 vs 클래식 도넛',
      subtitle: '말라사다는 무엇이 다를까?',
      intro: '말라사다, 모찌 도넛, 클래식 미국식 도넛은 모두 반죽을 튀긴 간식이지만, 그 차이는 분명합니다:',
      headers: {
        feature: '특징',
        bingsu: '말라사다',
        shavedIce: '모찌 도넛',
        kakigori: '클래식 도넛',
      },
      rows: [
        {
          feature: '반죽',
          bingsu: '달걀이 풍부한 발효 반죽',
          shavedIce: '찹쌀가루 반죽',
          kakigori: '밀가루 반죽',
        },
        {
          feature: '식감',
          bingsu: '가볍고 폭신, 설탕 코팅은 바삭',
          shavedIce: '쫄깃하고 잘 늘어남',
          kakigori: '부드럽고 케이크 같음',
        },
        {
          feature: '모양',
          bingsu: '둥글고 구멍 없음',
          shavedIce: '폰데링(8개의 공이 이어진 형태)',
          kakigori: '구멍 있는 링 모양',
        },
        {
          feature: '코팅 / 속재료',
          bingsu: '설탕 묻힘, 속을 채우기도 함',
          shavedIce: '가벼운 글레이즈 또는 슈가파우더',
          kakigori: '글레이즈, 프로스팅, 스프링클',
        },
        {
          feature: '기원',
          bingsu: '포르투갈, 하와이 경유',
          shavedIce: '일본-하와이 퓨전',
          kakigori: '미국 / 유럽',
        },
        {
          feature: '먹기 좋은 때',
          bingsu: '갓 튀긴 따끈할 때',
          shavedIce: '갓 만든, 살짝 따뜻할 때',
          kakigori: '언제든 커피와 함께',
        },
      ],
      note: '말라사다의 진수는 갓 튀겨 설탕을 묻힌 따끈한 겉면에 있습니다. 그래뉴당의 바삭한 코팅이 구름처럼 폭신한 속을 감싸는 이 맛은, 한 번 식어버리면 결코 재현할 수 없습니다.',
    },
    types: {
      title: '말라사다의 종류',
      subtitle: '클래식 설탕부터 열대 하와이안 속재료까지',
      items: [
        {
          name: '오리지널 슈가 말라사다',
          korean: 'Açúcar',
          description: '가장 전통적이고 대표적인 버전. 통통하게 황금빛으로 튀긴 반죽에 그래뉴당을 듬뿍 묻힌 것 — 속재료도 글레이즈도 없이 순수한 폭신함 그 자체입니다. 겉은 바삭, 속은 폭신, 따뜻할 때 먹는 것이 가장 맛있죠. 모든 말라사다의 시작이 된 바로 그 메뉴입니다.',
          icon: '🍩',
        },
        {
          name: '하우피아(코코넛) 필링',
          korean: 'Haupia',
          description: '진정한 하와이의 맛. 말라사다 안에 코코넛 밀크로 만든 부드러운 하와이안 코코넛 커스터드 "하우피아"를 주입합니다. 열대의 코코넛 크림이 따뜻하고 달콤한 반죽과 환상적으로 어우러져, 섬 스타일 속재료 중에서도 가장 인기 있는 메뉴이자 여행객의 필수 코스입니다.',
          icon: '🥥',
        },
        {
          name: '커스터드 / 바닐라 크림',
          korean: 'Creme',
          description: '진하고 푸근한 인기 메뉴. 부드러운 바닐라 커스터드나 패스트리 크림을 말라사다 중심에 짜 넣어, 바삭한 설탕 코팅과 호화로운 대비를 만들어냅니다. 한 입 베어 물 때마다 따뜻하고 크리미한 필링이 흘러나오는, 크림을 사랑하는 이들에게 더없이 좋은 메뉴입니다.',
          icon: '🍮',
        },
        {
          name: '리힝무이 슈가',
          korean: 'Li hing',
          description: '하와이만의 독특한 반전. 일반 설탕 대신, 현지인들이 사랑하는 달콤짭짤하고 새콤한 말린 매실 가루 "리힝무이"를 묻힙니다. 달콤새콤한 맛의 폭발이 평범한 말라사다를 틀림없는 섬의 간식으로 변신시킵니다.',
          icon: '🔴',
        },
        {
          name: '둘세 / 초콜릿 & 시즌 한정',
          korean: 'Sazonal',
          description: '창의적이고 끊임없이 변화하는 카테고리. 둘세 데 레체, 진한 초콜릿 가나슈, 또는 릴리코이(패션프루트), 구아바, 망고 같은 시즌 한정 필링을 떠올려 보세요. 베이커리는 이런 기간 한정 맛을 계속 바꿔가며, 단골손님이 방문할 때마다 새로운 맛을 즐길 이유를 선사합니다.',
          icon: '🍫',
        },
      ],
    },
    whyHawaii: {
      title: '말라사다가 하와이의 아이콘인 이유',
      points: [
        {
          title: '포르투갈 농장 이민의 유산',
          description: '말라사다는 1800년대 후반 하와이의 사탕수수 농장에서 일하기 위해 마데이라 제도와 아조레스 제도에서 온 포르투갈 이민자들과 함께 들어왔습니다. 여러 세대를 거치며 이 집에서 만든 섬의 간식은 하와이의 다문화 음식 정체성에 녹아들었고, 하와이 농장 역사가 남긴 맛있는 유산이 되었습니다.',
        },
        {
          title: '말라사다 데이 전통',
          description: '매년 참회 화요일 — 현지에서는 "말라사다 데이"라 불리는 날 — 에는 하와이 전역의 베이커리가 수천 개의 말라사다를 튀겨내고 가게 밖까지 줄이 늘어섭니다. 사순절 전에 라드와 설탕을 다 쓰던 포르투갈 풍습에서 비롯된 이 축제 같은 전통이, 말라사다를 현지 문화의 중심에 굳건히 자리하게 합니다.',
        },
        {
          title: '갓 튀긴 따끈할 때가 최고',
          description: '말라사다는 설탕 코팅이 아직 바삭하고 속이 따뜻하고 폭신한, 갓 튀긴 상태가 단연 최고입니다. 이 "지금 바로 먹어야 하는" 마법 덕분에, 갓 튀긴 말라사다는 현지에서만 제대로 경험할 수 있죠. 바로 그래서 여행객들이 하와이 섬 곳곳에서 말라사다를 찾아다니는 것입니다.',
        },
        {
          title: '다문화가 어우러진 현지 음식 문화',
          description: '하와이의 음식은 포르투갈, 일본, 필리핀, 중국, 하와이 원주민의 영향이 어우러지며, 말라사다는 그 중심에 당당히 자리합니다. 하우피아를 채우거나 리힝무이를 묻히는 것은, 섬의 요리사들이 포르투갈의 클래식을 애정 어린 손길로 틀림없는 하와이의 맛으로 재탄생시킨 증거입니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 말라사다 먹는 곳',
      intro: '와이키키에서 갓 튀긴 따끈한 말라사다를 찾고 계시다면, 코나커피도넛으로 오세요.',
      shop: {
        name: 'Kona Coffee Donut (코나커피도넛)',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키의 중심, 칼라카우아 애비뉴에 위치한 코나커피도넛은 주문 즉시 튀겨내는, 설탕을 묻힌 따끈한 말라사다를 제공합니다. 저희 말라사다의 특별한 점은? 풍부한 코나 커피와 함께 즐길 수 있다는 것. 따뜻하고 달콤한 반죽과 부드러운 하와이안 커피의 환상 조합을, 비치에서 몇 걸음 거리에서 경험해보세요.',
        highlights: [
          '설탕을 묻힌 갓 튀긴 따끈한 말라사다',
          '풍부한 코나 커피와의 퍼펙트 페어링',
          '와이키키 비치에서 도보 거리',
          '매일 영업 — 아침이나 오후 간식으로 딱!',
        ],
      },
      cta: '말라사다 메뉴 보기',
    },
    howToEat: {
      title: '말라사다 맛있게 즐기는 법',
      subtitle: '완벽한 말라사다 경험을 위한 팁',
      tips: [
        {
          title: '따끈하게, 갓 튀겼을 때 먹기',
          description: '말라사다는 설탕 코팅이 아직 바삭하고 속이 따뜻하고 폭신한, 튀긴 직후가 가장 맛있습니다. 그냥 두지 마세요 — 식으면 마법이 사라집니다. 사고 나서 몇 분 안에 먹을 수 있다면, 말라사다 본연의 맛을 제대로 경험할 수 있습니다.',
        },
        {
          title: '코나 커피와 함께 페어링',
          description: '달콤하게 설탕을 묻힌 말라사다는 부드럽고 풍부한 코나 커피 한 잔과 완벽한 짝꿍입니다. 커피의 은은한 쓴맛이 반죽의 단맛을 잡아주고, 따뜻한 것끼리의 페어링은 하와이 카페의 클래식한 경험이죠. 현지인들이 즐기는 방식입니다.',
        },
        {
          title: '속을 채운 것도 맛보기',
          description: '오리지널 슈가 말라사다도 클래식이지만, 필링 버전을 안 먹어보고 떠나는 건 아쉽습니다. 하우피아(코코넛)는 진정한 하와이의 맛이고, 커스터드는 진하고 크리미한 만족감을 줍니다. 각 필링은 따뜻하고 폭신한 반죽에 새로운 차원을 더합니다. 열대 과일 맛은 여행객 필수 코스!',
        },
        {
          title: '믹스 박스로 나눠 먹기',
          description: '고르기 어렵다면, 믹스 박스로 여러 맛을 한 번에 맛보세요. 말라사다는 나눠 먹기에 딱이니, 친구나 가족과 모여 오리지널, 하우피아, 커스터드, 리힝을 함께 맛보세요. 내 취향을 찾는 가장 좋은 방법입니다.',
        },
      ],
    },
    faq: {
      title: '말라사다에 대해 자주 묻는 질문',
      items: [
        {
          question: '말라사다란 무엇인가요?',
          answer: '말라사다는 달걀이 풍부한 발효 반죽을 황금빛으로 튀긴 뒤 그래뉴당을 묻힌 포르투갈식 튀김 도넛입니다. 일반 도넛과 달리 구멍도 글레이즈도 없이, 바삭한 설탕 코팅 안에 가볍고 폭신한 속살이 들어 있죠. 하와이에서는 하우피아(코코넛), 커스터드, 리힝을 채우는 경우가 많고, 갓 튀긴 따끈할 때 먹는 것이 가장 맛있습니다.',
        },
        {
          question: '말라사다와 도넛 — 무엇이 다른가요?',
          answer: '클래식 미국식 도넛은 보통 링 모양의 밀가루 반죽에 글레이즈나 프로스팅을 입힌 것입니다. 말라사다는 구멍 없는 둥근 포르투갈식 발효 반죽으로, 글레이즈 대신 그래뉴당을 묻히고, 달걀이 풍부한 레시피로 더 가볍고 폭신한 식감을 냅니다. 또한 말라사다는 전통적으로 갓 튀긴 따끈할 때 먹으며, 크림이나 하우피아를 채우는 경우도 많습니다.',
        },
        {
          question: '하우피아는 무슨 뜻인가요?',
          answer: '하우피아는 하와이의 전통 코코넛 디저트로, 코코넛 밀크로 만든 부드러운 푸딩 같은 코코넛 커스터드입니다. 말라사다 필링으로 사용하면 따뜻하고 달콤한 반죽과 환상적으로 어우러지는 크리미하고 열대적인 코코넛 풍미를 더합니다. 섬 스타일 말라사다 필링 중 가장 인기 있는 종류 중 하나입니다.',
        },
        {
          question: '왜 말라사다가 하와이의 명물인가요?',
          answer: '말라사다는 1870년대에 사탕수수 농장에서 일하기 위해 마데이라 제도와 아조레스 제도에서 온 포르투갈 이민자들과 함께 하와이에 들어왔습니다. 그들은 사순절 전 참회 화요일("말라사다 데이")에 말라사다를 튀기는 전통을 가지고 왔죠. 1952년 레너드 베이커리가 하와이 전역에 널리 퍼뜨렸고, 오늘날 말라사다는 하와이의 다문화 현지 음식 문화에서 사랑받는 일부가 되었습니다.',
        },
        {
          question: '와이키키에서 갓 튀긴 말라사다는 어디서 살 수 있나요?',
          answer: '칼라카우아 애비뉴의 코나커피도넛은 주문 즉시 튀겨내는, 설탕을 묻힌 따끈한 말라사다를 풍부한 코나 커피와 함께 제공합니다. 와이키키 중심부, 비치에서 도보 거리에 위치하고 매일 영업하므로, 하루 중 언제든 따뜻한 말라사다를 손쉽게 즐길 수 있습니다.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 갓 튀긴 말라사다를 즐기세요',
      text: '2142 Kalakaua Ave 코나커피도넛에서 설탕을 묻힌 갓 튀긴 따끈한 말라사다와 프리미엄 코나 커피를 경험하세요.',
      menuButton: '말라사다 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '말라사다란?',
    },
  },
  zh: {
    hero: {
      title: '什么是马拉萨达(Malasada)？',
      subtitle: '夏威夷名物·葡式甜甜圈完全指南',
      updated: '2026年6月更新',
      readTime: '阅读约8分钟',
    },
    definition: {
      title: '什么是马拉萨达？',
      text: '<strong>马拉萨达（malasada）</strong>是一种<strong>源自葡萄牙的炸面团</strong>，由蛋香浓郁的酵母面团炸至金黄，再裹满大量砂糖制成。与美式甜甜圈不同，马拉萨达<strong>没有孔洞，也不淋糖霜</strong>——只有酥脆的糖衣包裹着轻盈蓬松的内里。在夏威夷，马拉萨达常<strong>夹入haupia（椰子）、卡仕达或li hing（话梅）</strong>等内馅，趁热新鲜出锅时享用最美味。外酥内软、蓬松绵密，这款深受当地人喜爱的小吃是名副其实的夏威夷标志。',
    },
    history: {
      title: '马拉萨达的历史',
      subtitle: '从亚速尔群岛到夏威夷的甘蔗种植园',
      p1: '马拉萨达的根源可追溯到葡萄牙的<strong>马德拉群岛和亚速尔群岛</strong>，这款简单的炸面团是当地珍爱的家常点心。从<strong>19世纪70年代</strong>起，一批批葡萄牙移民离开这些岛屿，前往夏威夷的甘蔗种植园工作，把他们的语言、音乐——以及对我们来说很幸运的——食谱一并带过了太平洋。',
      p2: '传统上，马拉萨达是在基督教大斋期开始前一天的<strong>"忏悔星期二（Terça-feira Gorda）"</strong>食用的。在夏威夷被称为<strong>"马拉萨达日（Malasada Day）"</strong>，这一天要用完斋戒期间需要戒除的猪油、糖和鸡蛋等丰盛食材。家家户户炸出大批金黄面团，与邻里分享，把朴素的生活智慧变成了欢乐的传统。',
      p3: '马拉萨达风靡全州，要归功于1952年在檀香山开业、开始向大众出售马拉萨达的<strong>Leonard\'s Bakery（伦纳德面包店）</strong>。原本一年只做一次的家常点心，转眼成了人们天天都想吃的美味，而伦纳德标志性的粉色盒子，更让马拉萨达稳稳成为夏威夷的代表美食。',
      p4: '如今，马拉萨达是遍布夏威夷群岛的<strong>当地心头好</strong>——从老字号面包店到餐车，再到威基基中心地带的咖啡馆，处处都能买到。现代版本会夹入haupia、卡仕达和热带风味的内馅，但马拉萨达的核心始终如一：把裹满砂糖、新鲜出锅的热面团，与你所爱的人一同分享。',
    },
    comparison: {
      title: '马拉萨达 vs 麻糬甜甜圈 vs 经典甜甜圈',
      subtitle: '马拉萨达有什么不同？',
      intro: '马拉萨达、麻糬甜甜圈和经典美式甜甜圈都是炸面团点心，但它们的区别很大。以下是详细对比：',
      headers: {
        feature: '特点',
        bingsu: '马拉萨达',
        shavedIce: '麻糬甜甜圈',
        kakigori: '经典甜甜圈',
      },
      rows: [
        {
          feature: '面团',
          bingsu: '蛋香浓郁的酵母面团',
          shavedIce: '糯米粉面团',
          kakigori: '小麦粉面团',
        },
        {
          feature: '口感',
          bingsu: '轻盈蓬松，糖衣酥脆',
          shavedIce: 'Q弹有嚼劲',
          kakigori: '柔软如蛋糕',
        },
        {
          feature: '形状',
          bingsu: '圆形，无孔',
          shavedIce: '彭德圈（8个小球相连）',
          kakigori: '带孔的环形',
        },
        {
          feature: '裹粉 / 内馅',
          bingsu: '裹砂糖，常带内馅',
          shavedIce: '薄糖霜或撒糖粉',
          kakigori: '糖霜、糖衣或彩针',
        },
        {
          feature: '起源',
          bingsu: '葡萄牙，经由夏威夷',
          shavedIce: '日本-夏威夷融合',
          kakigori: '美国／欧洲',
        },
        {
          feature: '最佳食用时机',
          bingsu: '新鲜出锅趁热吃',
          shavedIce: '新鲜、微温时',
          kakigori: '随时搭配咖啡',
        },
      ],
      note: '马拉萨达的招牌在于它新鲜出锅、裹满砂糖的热外壳——一层酥脆的砂糖糖衣包裹着云朵般蓬松的内心，一旦放凉便再也无法复制这份美味。',
    },
    types: {
      title: '马拉萨达的种类',
      subtitle: '从经典砂糖到热带夏威夷内馅',
      items: [
        {
          name: '原味砂糖马拉萨达',
          korean: 'Açúcar',
          description: '最经典、最传统的版本。蓬松金黄的炸面团球裹满大量砂糖——无内馅、无糖霜，只有纯粹的蓬松美味。外酥内软，趁热吃最佳。这就是开创一切的元祖马拉萨达。',
          icon: '🍩',
        },
        {
          name: 'Haupia（椰子）内馅',
          korean: 'Haupia',
          description: '真正的夏威夷之味。马拉萨达内注入haupia——一种用椰奶制成的丝滑夏威夷椰子卡仕达。热带椰香奶油与温热香甜的面团完美交融，是岛屿风格内馅中最受欢迎的一款，更是游客必尝的美味。',
          icon: '🥥',
        },
        {
          name: '卡仕达 / 香草奶油',
          korean: 'Creme',
          description: '浓郁暖心的人气之选。顺滑的香草卡仕达或卡仕达奶油挤入马拉萨达中心，与酥脆糖衣形成奢华对比。每一口都涌出温热绵密的内馅——喜爱奶油夹心的人绝对无法抗拒。',
          icon: '🍮',
        },
        {
          name: '话梅粉（Li Hing Mui）',
          korean: 'Li hing',
          description: '独具夏威夷特色的创意之作。马拉萨达不裹普通砂糖，而是裹上当地人钟爱的话梅粉（li hing mui）——那种又甜又咸又酸的干梅调味料。酸甜风味的爆发，将一颗简单的马拉萨达变成了不折不扣的岛屿美食。',
          icon: '🔴',
        },
        {
          name: '焦糖 / 巧克力 & 季节限定',
          korean: 'Sazonal',
          description: '充满创意、不断变化的类别。想象一下焦糖牛奶酱、浓郁的巧克力甘纳许，或lilikoi（百香果）、番石榴、芒果等季节限定内馅。面包店喜欢轮换这些限时口味，让常客每次光顾都有理由尝试新滋味。',
          icon: '🍫',
        },
      ],
    },
    whyHawaii: {
      title: '为什么马拉萨达是夏威夷的标志',
      points: [
        {
          title: '葡萄牙种植园的传承',
          description: '马拉萨达随着19世纪末从马德拉群岛和亚速尔群岛前来夏威夷甘蔗种植园工作的葡萄牙移民而来。历经数代，这款家常岛屿点心融入了夏威夷多元的饮食身份，成为夏威夷种植园历史留下的美味遗产。',
        },
        {
          title: '马拉萨达日的传统',
          description: '每年的忏悔星期二——当地称为"马拉萨达日"——夏威夷各地的面包店都会炸出成千上万个马拉萨达，门外排起长龙。这一源自大斋期前用完猪油和糖的葡萄牙习俗的节庆传统，让马拉萨达始终处于当地文化的核心。',
        },
        {
          title: '新鲜趁热吃最佳',
          description: '马拉萨达在新鲜出锅、糖衣还酥脆、内里温热蓬松时最为美味。这种"趁现在吃"的魔力，使新鲜的马拉萨达成为只有亲临现场才能真正体验的滋味——这正是游客在夏威夷各岛四处寻觅它的原因。',
        },
        {
          title: '多元融合的当地饮食文化',
          description: '夏威夷的美食融合了葡萄牙、日本、菲律宾、中国和夏威夷原住民的影响，而马拉萨达正稳居其中心。无论是夹入haupia还是裹上话梅粉，都展现了岛上厨师如何用心地将一款葡萄牙经典演绎成不折不扣的夏威夷风味。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基哪里可以吃到马拉萨达',
      intro: '如果你在威基基想吃新鲜热腾腾的马拉萨达，科纳咖啡甜甜圈是你的首选。',
      shop: {
        name: 'Kona Coffee Donut（科纳咖啡甜甜圈）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '位于威基基卡拉卡瓦大道中心地段，科纳咖啡甜甜圈提供现点现炸、裹满砂糖的热腾腾马拉萨达。我们的马拉萨达有何特别之处？搭配醇香的科纳咖啡——温热香甜的面团与顺滑夏威夷咖啡的完美组合，离海滩仅几步之遥。',
        highlights: [
          '裹满砂糖、新鲜出锅的热腾腾马拉萨达',
          '与醇香科纳咖啡完美搭配',
          '距威基基海滩步行可达',
          '每天营业——早餐或午后甜点的最佳选择',
        ],
      },
      cta: '查看马拉萨达菜单',
    },
    howToEat: {
      title: '如何享用马拉萨达',
      subtitle: '完美马拉萨达体验小贴士',
      tips: [
        {
          title: '趁热新鲜吃',
          description: '马拉萨达在刚出锅、糖衣还酥脆、内里温热蓬松时最美味。别放着不吃——放凉后魔力就消失了。如果能在购买后几分钟内吃完，你就能体验到马拉萨达本该有的美味。',
        },
        {
          title: '搭配科纳咖啡',
          description: '香甜裹糖的马拉萨达与一杯顺滑醇香的科纳咖啡是绝配。咖啡的微苦能平衡面团的甜味，而温热与温热的搭配，正是经典的夏威夷咖啡馆体验。这就是当地人的吃法。',
        },
        {
          title: '试试夹馅款',
          description: '原味砂糖马拉萨达虽是经典，但别没尝过夹馅款就离开。Haupia（椰子）是真正的夏威夷之味，卡仕达则带来浓郁绵密的满足感。每种内馅都为温热蓬松的面团增添新的层次。热带风味更是游客必尝！',
        },
        {
          title: '买个混合盒一起分享',
          description: '难以抉择？买个混合盒，一次尝试多种口味吧。马拉萨达天生适合分享，所以和朋友或家人聚在一起，一同品尝原味、haupia、卡仕达和话梅口味。这是找到你最爱口味的最好方法。',
        },
      ],
    },
    faq: {
      title: '关于马拉萨达的常见问题',
      items: [
        {
          question: '什么是马拉萨达？',
          answer: '马拉萨达是一种源自葡萄牙的炸面团，由蛋香浓郁的酵母面团炸至金黄后裹上砂糖制成。与普通甜甜圈不同，它没有孔洞也不淋糖霜，只有酥脆的糖衣包裹着轻盈蓬松的内里。在夏威夷，马拉萨达常夹入haupia（椰子）、卡仕达或话梅，趁热新鲜出锅时食用最佳。',
        },
        {
          question: '马拉萨达和甜甜圈有什么区别？',
          answer: '经典美式甜甜圈通常是环形的小麦面团，淋上糖霜或糖衣。马拉萨达是无孔的圆形葡萄牙酵母面团，裹的是砂糖而非糖霜，并采用蛋香浓郁的配方，使其口感更轻盈蓬松。马拉萨达传统上也是趁热新鲜吃，并常夹入奶油或haupia。',
        },
        {
          question: 'haupia是什么意思？',
          answer: 'haupia是一种传统的夏威夷椰子甜点——用椰奶制成的丝滑布丁状椰子卡仕达。用作马拉萨达内馅时，haupia增添了一种与温热香甜面团完美交融的绵密热带椰香。它是最受欢迎的岛屿风格马拉萨达内馅之一。',
        },
        {
          question: '为什么马拉萨达是夏威夷的特色？',
          answer: '马拉萨达随着19世纪70年代前来甘蔗种植园工作的葡萄牙移民从马德拉群岛和亚速尔群岛来到夏威夷。他们带来了在大斋期前的忏悔星期二（"马拉萨达日"）炸马拉萨达的传统。1952年Leonard\'s Bakery让它风靡全州，如今马拉萨达已成为夏威夷多元当地饮食文化中深受喜爱的一部分。',
        },
        {
          question: '在威基基哪里能买到新鲜的马拉萨达？',
          answer: '卡拉卡瓦大道上的科纳咖啡甜甜圈提供现点现炸、裹满砂糖的热腾腾马拉萨达，并搭配醇香的科纳咖啡。我们位于威基基中心地带，离海滩仅步行可达，每天营业——让你一天中任何时候都能轻松享用温热的马拉萨达。',
        },
      ],
    },
    cta: {
      title: '来威基基品尝新鲜马拉萨达',
      text: '前往2142 Kalakaua Ave的科纳咖啡甜甜圈，体验裹满砂糖、新鲜出锅的热腾腾马拉萨达，搭配优质科纳咖啡。',
      menuButton: '查看马拉萨达菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '什么是马拉萨达？',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What is a Malasada? The Complete Guide to Hawaii\'s Famous Portuguese Donut',
  description: 'Learn everything about the malasada — Hawaii\'s beloved Portuguese fried dough. History, types, how it compares to other donuts, and where to find fresh hot malasadas in Waikiki.',
  image: 'https://www.konacoffeedonut.com/images/blog/what-is-a-malasada.jpeg',
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
    '@id': 'https://www.konacoffeedonut.com/en/blog/what-is-a-malasada',
  },
  keywords: 'malasada, what is a malasada, portuguese donut, malasada hawaii, malasada waikiki, haupia malasada',
  wordCount: 1200,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a malasada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A malasada is a Portuguese fried dough made from an egg-rich yeast dough that is deep-fried until golden and rolled in granulated sugar. Unlike a typical donut, it has no hole and no glaze — just a crisp sugar shell around a light, pillowy interior. In Hawaii, malasadas are often filled with haupia (coconut), custard, or li hing, and are best eaten hot and fresh.',
      },
    },
    {
      '@type': 'Question',
      name: 'Malasada vs donut — what\'s the difference?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A classic American donut is usually a ring-shaped wheat dough that\'s glazed or frosted. A malasada is a round Portuguese yeast dough with no hole, rolled in granulated sugar rather than glazed, and made with an egg-rich recipe that gives it a lighter, more pillowy texture. Malasadas are also traditionally eaten hot and fresh, and are often filled with cream or haupia.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does haupia mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Haupia is a traditional Hawaiian coconut dessert — a silky, pudding-like coconut custard made from coconut milk. When used as a malasada filling, haupia adds a creamy, tropical coconut flavor that pairs beautifully with the warm, sugary dough. It is one of the most popular island-style malasada fillings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are malasadas a Hawaii thing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Malasadas came to Hawaii with Portuguese immigrants from Madeira and the Azores who arrived in the 1870s to work the sugar plantations. They brought the tradition of frying malasadas on Fat Tuesday (Malasada Day) before Lent. Leonard\'s Bakery popularized them statewide in 1952, and today malasadas are a beloved part of Hawaii\'s multicultural local food culture.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I get fresh malasadas in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut on Kalakaua Avenue serves fresh, hot malasadas rolled in sugar, made to order and paired with rich Kona coffee. We are located in the heart of Waikiki, just walking distance from the beach, and open daily — making it easy to grab a warm malasada any time of day.',
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

export default function WhatIsAMalasadaPage() {
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
          src="/images/blog/what-is-a-malasada.jpeg"
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

        {/* History of Malasada */}
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

        {/* Types of Malasada */}
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

        {/* Why Malasadas are a Hawaii Icon */}
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

        {/* Where to Get Malasadas in Waikiki */}
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
                href={`/${locale}/menu/malasada`}
                className="inline-block bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-sky-100 transition-colors"
              >
                {t.whereToGet.cta}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* How to Eat Malasada */}
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
              href={`/${locale}/blog/malasada-vs-mochi-donut`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 font-semibold transition-colors"
            >
              → Malasada vs Mochi Donut
            </Link>
            <Link
              href={`/${locale}/blog/best-donuts-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Best Donuts in Waikiki
            </Link>
            <Link
              href={`/${locale}/menu/malasada`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Malasada Menu
            </Link>
            <Link
              href={`/${locale}/menu/mochi-donuts`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Mochi Donuts Menu
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
                  href={`/${locale}/menu/malasada`}
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
