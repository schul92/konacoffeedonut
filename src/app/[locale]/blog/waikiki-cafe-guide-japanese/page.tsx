'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Script from 'next/script';
import SubpageNav from '@/components/SubpageNav';
import { Coffee, MapPin, Clock, Star, DollarSign, ChevronRight } from 'lucide-react';

// SEO-optimized content for Japanese tourist queries:
// コナコーヒー メニュー (22 impr), ワイキキ ドーナツ (12 impr), コナコーヒー ワイキキ, ワイキキ カフェ

const content = {
  ja: {
    hero: {
      title: 'ワイキキおすすめカフェ2026：コナコーヒーとモチドーナツの名店ガイド',
      subtitle: '日本人旅行者のためのハワイ・ワイキキ カフェ完全ガイド',
      breadcrumb: 'ブログ',
      breadcrumbCurrent: 'ワイキキカフェガイド',
    },
    intro: {
      title: 'ワイキキのカフェ事情',
      paragraphs: [
        'ハワイ・ワイキキは、世界中から観光客が集まるリゾート地であると同時に、コーヒー文化の聖地でもあります。特に日本からの旅行者にとって、ハワイのカフェ巡りは旅の楽しみのひとつ。カラカウア通りやクヒオ通り沿いには個性豊かなカフェが軒を連ね、サードウェーブコーヒーの波も押し寄せています。',
        '日本では「ドリップコーヒー」の文化が根づいており、一杯一杯を丁寧に淹れるスタイルが日常に溶け込んでいます。そんなコーヒーにこだわる日本の方々にとって、ハワイ産のコナコーヒーは特別な存在です。火山の土壌が育む豊かな風味と、希少性の高さから「世界三大コーヒー」のひとつに数えられることもあります。',
        '2026年のワイキキカフェシーンは、ローカルロースターの台頭やアジアンスイーツとの融合が進み、かつてないほどの盛り上がりを見せています。本記事では、日本人旅行者の皆さまに向けて、コナコーヒーの魅力からおすすめカフェ、モチドーナツやマラサダといったスイーツ情報まで、ワイキキのカフェ文化を徹底的にガイドいたします。',
      ],
    },
    konaSection: {
      title: 'コナコーヒーとは',
      paragraphs: [
        'コナコーヒーは、ハワイ島（ビッグアイランド）のコナ地区でのみ栽培される、世界的に希少なプレミアムコーヒーです。マウナロア山とフアラライ山の火山性斜面、標高500〜900メートルの地帯で育てられ、世界のコーヒー生産量の1%にも満たない貴重な豆です。',
        '日本のコーヒー愛好家の方々がコナコーヒーに惹かれる理由は明確です。まず、その味わいは非常にまろやかで酸味が少なく、チョコレートやナッツのような深い風味があります。日本で人気のドリップコーヒーとの相性が抜群で、ペーパーフィルターを使ったハンドドリップで淹れると、コナコーヒー本来の繊細な味わいが存分に楽しめます。',
        'また、日本のサードウェーブコーヒーブームの中で、シングルオリジン（単一産地）のコーヒーへの関心が高まっています。コナコーヒーはまさにその代表格であり、生産地から消費者までの「トレーサビリティ（追跡可能性）」が徹底されている点も、品質にこだわる日本の方々に支持される理由です。',
        '日本国内でコナコーヒーを購入すると100g 2,000〜4,000円と高価ですが、ワイキキのカフェで一杯5ドル前後から本物の100%コナコーヒーを味わえるのは、ハワイ旅行ならではの贅沢です。お土産としても非常に人気が高く、帰国後にご自宅で淹れる楽しみもあります。',
      ],
    },
    ranking: {
      title: 'おすすめカフェランキング',
      subtitle: 'ワイキキで本物のコナコーヒーとスイーツを楽しめるカフェを厳選しました',
      cafes: [
        {
          rank: 1,
          name: 'Kona Coffee Donut（コナコーヒードーナツ）',
          address: '2142 Kalakaua Ave, Honolulu, HI 96815',
          description: 'ワイキキのカラカウア通りに位置する、100%コナコーヒーとモチドーナツの専門店。日本の「もち」文化にインスパイアされたモチドーナツは、外はサクサク、中はもちもちの食感が楽しめます。紫芋（ウベ）、抹茶、黒糖きなこなど、日本人の舌にも馴染みやすいフレーバーを豊富にご用意。さらにマラサダやビンス（韓国風かき氷）もあり、一軒でハワイとアジアのスイーツを堪能できます。コナコーヒーは全て100%コナ産を使用し、ブレンドは一切ありません。Wi-Fiも完備しており、カフェ巡りの拠点としても最適です。',
          highlight: '100%コナコーヒー、モチドーナツ、マラサダ、ビンス',
          price: '$3.50〜',
          isFeatured: true,
        },
        {
          rank: 2,
          name: 'Island Vintage Coffee（アイランドヴィンテージコーヒー）',
          address: 'Royal Hawaiian Center, Waikiki',
          description: 'ロイヤルハワイアンセンター内にある人気カフェ。100%コナコーヒーのほか、アサイーボウルが名物です。日本のガイドブックにも頻繁に掲載されており、日本人観光客にとっては定番のスポット。朝食から利用でき、テラス席でワイキキの雰囲気を楽しめます。',
          highlight: 'アサイーボウル、コナコーヒー',
          price: '$6〜',
          isFeatured: false,
        },
        {
          rank: 3,
          name: 'Honolulu Coffee（ホノルルコーヒー）',
          address: 'Multiple locations in Waikiki',
          description: '1992年創業のハワイ生まれのコーヒーチェーン。自社農園で栽培したコナコーヒーを提供しており、品質管理が徹底されています。ワイキキ内に複数店舗があり、アクセスの良さが魅力。落ち着いた雰囲気の店内で、ゆっくりとコナコーヒーを楽しめます。ラテアートも人気です。',
          highlight: '自社農園コナコーヒー、ラテアート',
          price: '$5〜',
          isFeatured: false,
        },
        {
          rank: 4,
          name: 'Kai Coffee Hawaii（カイコーヒーハワイ）',
          address: 'Hyatt Regency Waikiki, 2424 Kalakaua Ave',
          description: 'ハイアットリージェンシーワイキキ内にある小さなカフェ。100%コナコーヒーを良心的な価格で提供しています。混雑が少なく、穴場的な存在。静かな環境でコーヒーを楽しみたい方におすすめです。ドリップコーヒーのクオリティが高く、日本のカフェ文化に慣れた方にも満足いただけます。',
          highlight: '穴場カフェ、良心的な価格のコナコーヒー',
          price: '$4.50〜',
          isFeatured: false,
        },
      ],
    },
    mochiDonut: {
      title: 'モチドーナツ特集',
      paragraphs: [
        'モチドーナツは、日本の「もち（餅）」の食感をドーナツに取り入れた、日本とハワイの食文化が融合したスイーツです。もち粉やタピオカ粉を使用することで、通常のドーナツとは全く異なる「もちもち」とした食感が生まれます。見た目はポンデリングのようなリング状で、8つの丸い球がつながった特徴的な形をしています。',
        '日本ではミスタードーナツの「ポン・デ・リング」でおなじみの食感ですが、ハワイのモチドーナツはさらに進化しています。外側はカリッと揚がっており、内側はもちもち。この食感のコントラストこそが、モチドーナツの最大の魅力です。',
        'Kona Coffee Donutでは、日本人の味覚を意識したフレーバーラインナップを展開しています。定番の紫芋（ウベ）や抹茶はもちろん、黒糖きなこ、ほうじ茶、季節限定のさくらフレーバーなど、日本の方々に親しみやすい味わいを取り揃えています。グレーズ（糖衣）の甘さも控えめで、日本のスイーツに慣れた方にもちょうどよい甘さです。',
        'モチドーナツとコナコーヒーの組み合わせは絶品です。コナコーヒーのまろやかな苦味ともちもちドーナツの優しい甘さが、お互いを引き立て合います。日本でのカフェ巡り（カフェ活）がお好きな方には、ぜひ試していただきたいペアリングです。',
      ],
    },
    malasada: {
      title: 'マラサダ：ハワイの伝統スイーツ',
      paragraphs: [
        'マラサダは、ポルトガル移民がハワイに持ち込んだ伝統的な揚げドーナツです。19世紀にサトウキビ農園で働くためにハワイに渡ったポルトガル人たちが、故郷の味を再現したのが始まりとされています。今ではハワイを代表するスイーツとして、地元の方々にも観光客にも愛されています。',
        'マラサダの特徴は、穴のない丸い形と、ふわふわで軽い食感です。揚げたてにグラニュー糖やシナモンシュガーをまぶして食べるのが定番。中にカスタードクリームやハウピア（ココナッツプディング）を詰めたフィリング入りもあります。日本の揚げパン（あげぱん）に近い食感で、日本人の方々にも馴染みやすいスイーツです。',
        'Kona Coffee Donutのマラサダは、毎朝店内のキッチンで一つひとつ手作りされています。外はきつね色にカリッと揚がり、中はふんわりとした理想的な食感。注文を受けてから砂糖をまぶすので、いつでも揚げたての美味しさをお楽しみいただけます。',
      ],
    },
    bingsu: {
      title: 'ビンス（韓国風かき氷）：ハワイで楽しむKフード',
      paragraphs: [
        'ビンス（빙수）は韓国発祥のかき氷デザートで、ふわふわに削った氷の上にフルーツ、あんこ、もち、練乳などをトッピングした贅沢なスイーツです。近年のKフード（韓国料理）ブームにより、日本でも新大久保をはじめとする韓国タウンで大人気となっています。',
        '日本の方々にとって、ビンスは新大久保で食べたことがあるという方も多いのではないでしょうか。ハワイには韓国系コミュニティが多く、本場さながらのクオリティのビンスを楽しむことができます。特にワイキキの温暖な気候のもとで食べるビンスは、日本の新大久保で食べるのとはまた違った格別な美味しさがあります。',
        'Kona Coffee Donutでは、マンゴービンス、ストロベリービンス、コナコーヒービンスなど、ハワイならではのフレーバーを展開しています。コナコーヒービンスは、ふわふわのミルク氷にエスプレッソシロップとコーヒーゼリーをトッピングした、当店オリジナルの人気メニュー。コーヒー好きな日本の方々に特におすすめです。ビンスの価格は$10〜$14前後で、2〜3人でシェアして食べるのにちょうどよいサイズです。',
      ],
    },
    practical: {
      title: '実用情報：ワイキキカフェ訪問ガイド',
      sections: [
        {
          subtitle: '営業時間',
          text: 'ワイキキのカフェは一般的に朝7時〜夜9時頃まで営業しています。Kona Coffee Donutも同様の時間帯で営業予定です。朝食を兼ねて訪れる場合は、混雑を避けるために朝8時前の来店がおすすめです。週末は特に混み合いますので、平日の訪問が狙い目です。',
        },
        {
          subtitle: '場所・アクセス',
          text: 'Kona Coffee Donutはカラカウア通り2142番地に位置しています。ワイキキビーチから徒歩約5分、ロイヤルハワイアンセンターからも徒歩圏内です。TheBus（ザ・バス）のワイキキ停留所からもアクセスしやすく、レンタカーがなくても気軽に訪れることができます。Googleマップで「Kona Coffee Donut」と検索すれば、すぐに場所がわかります。',
        },
        {
          subtitle: 'チップ文化について',
          text: 'アメリカではチップ（チップ）の文化があります。カフェでのテイクアウトの場合、チップは必須ではありませんが、15〜20%程度を残すのが一般的です。レジのiPadで会計する際に、チップの金額を選択する画面が表示されますので、ご希望の金額を選んでください。日本にはチップの文化がないため戸惑うかもしれませんが、サービスに満足された場合は感謝の気持ちとしてお渡しいただければ幸いです。',
        },
        {
          subtitle: '予算目安',
          text: 'コナコーヒー1杯＋スイーツ1品で$8〜$15程度が目安です。モチドーナツは$3.50〜、マラサダは$4〜、ビンスは$10〜$14程度です。日本円に換算すると約1,200〜2,200円程度（2026年4月時点の為替レート参考）。ワイキキのカフェとしては良心的な価格設定です。クレジットカード（Visa、Mastercard、AMEX）、Apple Payに対応しています。',
        },
      ],
    },
    faq: {
      title: 'よくあるご質問',
      items: [
        {
          question: 'ワイキキで本物の100%コナコーヒーが飲めるカフェはどこですか？',
          answer: 'Kona Coffee Donut（カラカウア通り2142番地）では、100%コナ産のコーヒー豆のみを使用しています。ブレンドではなく、純粋な100%コナコーヒーをお楽しみいただけます。Island Vintage Coffee、Honolulu Coffee、Kai Coffee Hawaiiでも100%コナコーヒーを提供しています。',
        },
        {
          question: 'モチドーナツとは何ですか？普通のドーナツとの違いは？',
          answer: 'モチドーナツは、もち粉やタピオカ粉を使用した日本発祥のドーナツです。通常のドーナツとの最大の違いは食感で、外はカリッとサクサク、中はもちもちとした独特の食感が特徴です。ミスタードーナツの「ポン・デ・リング」に近い食感をイメージしていただくとわかりやすいです。',
        },
        {
          question: 'ワイキキのカフェでクレジットカードは使えますか？',
          answer: 'はい、ワイキキのほとんどのカフェでクレジットカード（Visa、Mastercard、American Express）が利用可能です。Apple PayやGoogle Payなどの電子決済にも対応している店舗が多いです。現金のみの店舗はほとんどありませんのでご安心ください。',
        },
        {
          question: 'コナコーヒーをお土産として購入できますか？',
          answer: 'はい、多くのカフェやワイキキのショップで100%コナコーヒー豆をお土産用に購入できます。ただし「Kona Blend」と表記されている商品はコナ豆が10%しか含まれていない場合がありますので、必ず「100% Kona Coffee」の表記を確認してください。',
        },
        {
          question: 'ワイキキのカフェにチップは必要ですか？',
          answer: 'テイクアウトの場合、チップは義務ではありませんが、サービスに満足された場合は15〜20%程度を添えるのが一般的です。レジでの会計時にiPad等でチップの金額を選択する画面が表示されます。「No Tip」を選んでも問題ありませんが、良いサービスには感謝を示すのがアメリカの文化です。',
        },
      ],
    },
    cta: {
      title: 'ワイキキでコナコーヒーとモチドーナツを楽しもう',
      text: 'Kona Coffee Donut | 2142 Kalakaua Ave, Waikiki',
      button: 'Google マップで見る',
      menuButton: 'メニューを見る',
    },
  },
  en: {
    hero: {
      title: 'Best Cafes in Waikiki 2026: Kona Coffee & Mochi Donut Guide',
      subtitle: 'Your complete guide to the top cafes in Waikiki for coffee, donuts, and Hawaiian treats',
      breadcrumb: 'Blog',
      breadcrumbCurrent: 'Waikiki Cafe Guide',
    },
    intro: {
      title: 'The Waikiki Cafe Scene',
      paragraphs: [
        'Waikiki is not just a world-class beach destination -- it is also a thriving coffee culture hub. Along Kalakaua Avenue and Kuhio Avenue, you will find an incredible variety of cafes, from specialty Kona coffee shops to artisan donut bakeries.',
        'The third-wave coffee movement has taken hold in Waikiki, with local roasters showcasing single-origin Hawaiian coffees alongside innovative desserts. Whether you are a coffee purist or a sweets lover, Waikiki\'s cafe scene in 2026 has something special for everyone.',
        'This guide covers the best cafes for authentic Kona coffee, mochi donuts, malasadas, and more -- with practical tips on hours, locations, and budget.',
      ],
    },
    konaSection: {
      title: 'What Is Kona Coffee?',
      paragraphs: [
        'Kona coffee is a premium single-origin coffee grown exclusively in the Kona District on Hawaii\'s Big Island. Cultivated on the volcanic slopes of Mauna Loa and Hualalai at 500-900 meters elevation, it represents less than 1% of global coffee production.',
        'Its flavor profile is remarkably smooth with low acidity, featuring chocolate and nutty notes. Hand-picked and sun-dried, each batch undergoes rigorous quality control under Hawaii state law.',
        'In Waikiki, you can enjoy a cup of genuine 100% Kona coffee for around $5 -- a fraction of what it costs when imported to other countries.',
        'Be careful with "Kona Blend" labels, which may contain as little as 10% Kona beans. Always look for "100% Kona Coffee" to ensure authenticity.',
      ],
    },
    ranking: {
      title: 'Best Cafes in Waikiki',
      subtitle: 'Our curated picks for the best coffee and dessert spots in Waikiki',
      cafes: [
        {
          rank: 1,
          name: 'Kona Coffee Donut',
          address: '2142 Kalakaua Ave, Honolulu, HI 96815',
          description: 'Located on Kalakaua Avenue, this specialty cafe serves 100% Kona coffee and artisan mochi donuts. With flavors like ube, matcha, and brown sugar kinako, plus malasadas and bingsu, it is a one-stop destination for Hawaiian and Asian-inspired treats.',
          highlight: '100% Kona Coffee, Mochi Donuts, Malasadas, Bingsu',
          price: 'from $3.50',
          isFeatured: true,
        },
        {
          rank: 2,
          name: 'Island Vintage Coffee',
          address: 'Royal Hawaiian Center, Waikiki',
          description: 'A popular cafe known for its acai bowls and 100% Kona coffee. Located in the Royal Hawaiian Center with lovely terrace seating.',
          highlight: 'Acai Bowls, Kona Coffee',
          price: 'from $6',
          isFeatured: false,
        },
        {
          rank: 3,
          name: 'Honolulu Coffee',
          address: 'Multiple locations in Waikiki',
          description: 'Established in 1992, this Hawaii-born coffee chain serves Kona coffee from their own farm. Multiple convenient locations throughout Waikiki.',
          highlight: 'Estate-grown Kona Coffee, Latte Art',
          price: 'from $5',
          isFeatured: false,
        },
        {
          rank: 4,
          name: 'Kai Coffee Hawaii',
          address: 'Hyatt Regency Waikiki, 2424 Kalakaua Ave',
          description: 'A hidden gem inside the Hyatt Regency. Offers quality 100% Kona coffee at reasonable prices in a quiet, uncrowded setting.',
          highlight: 'Hidden Gem, Affordable Kona Coffee',
          price: 'from $4.50',
          isFeatured: false,
        },
      ],
    },
    mochiDonut: {
      title: 'Mochi Donuts: A Japanese-Hawaiian Fusion',
      paragraphs: [
        'Mochi donuts combine Japanese mochi rice cake texture with American donut tradition. Made with mochi flour and tapioca starch, they offer a unique crispy-outside, chewy-inside texture unlike any regular donut.',
        'Popular flavors include ube (purple sweet potato), matcha, brown sugar kinako, and seasonal specials. They pair beautifully with Kona coffee.',
        'At Kona Coffee Donut, the mochi donut lineup features over 12 flavors, with new seasonal offerings introduced regularly.',
        'The combination of Kona coffee\'s smooth flavor with a chewy mochi donut is a must-try pairing in Waikiki.',
      ],
    },
    malasada: {
      title: 'Malasadas: Hawaii\'s Beloved Portuguese Donut',
      paragraphs: [
        'Malasadas are traditional Portuguese-Hawaiian fried doughnuts brought to Hawaii by Portuguese immigrants in the 19th century. Pillowy soft with no hole, they are rolled in sugar and served hot.',
        'Fillings range from classic custard to haupia (coconut pudding). They are made fresh daily at Kona Coffee Donut and rolled in sugar to order.',
        'If you enjoy Japanese "age-pan" (fried bread), you will love malasadas -- they share a similar comforting, fluffy texture.',
      ],
    },
    bingsu: {
      title: 'Bingsu: Korean Shaved Ice in Paradise',
      paragraphs: [
        'Bingsu is a Korean shaved ice dessert topped with fruits, red bean, mochi, and condensed milk. The K-food trend has made it popular worldwide.',
        'In Waikiki\'s warm climate, bingsu is the perfect refreshing treat. Kona Coffee Donut offers unique Hawaiian-twist flavors including Mango Bingsu and a signature Kona Coffee Bingsu.',
        'Servings are generous -- perfect for sharing between 2-3 people. Priced at $10-$14, it is an affordable indulgence.',
      ],
    },
    practical: {
      title: 'Practical Information for Visitors',
      sections: [
        {
          subtitle: 'Hours',
          text: 'Most Waikiki cafes open from 7 AM to 9 PM daily. For the best experience, visit before 8 AM to avoid crowds, especially on weekends.',
        },
        {
          subtitle: 'Location & Access',
          text: 'Kona Coffee Donut is at 2142 Kalakaua Ave, a 5-minute walk from Waikiki Beach. Easily accessible by TheBus or on foot from major hotels.',
        },
        {
          subtitle: 'Tipping',
          text: 'Tipping 15-20% is customary in the US. For counter-service cafes, tipping is appreciated but not required. The payment iPad will present tip options.',
        },
        {
          subtitle: 'Budget',
          text: 'Expect to spend $8-$15 for a coffee and one dessert. Credit cards (Visa, Mastercard, AMEX) and Apple Pay are widely accepted.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'Where can I get real 100% Kona coffee in Waikiki?',
          answer: 'Kona Coffee Donut (2142 Kalakaua Ave) serves exclusively 100% Kona coffee -- no blends. Island Vintage Coffee, Honolulu Coffee, and Kai Coffee Hawaii also offer 100% Kona options.',
        },
        {
          question: 'What are mochi donuts?',
          answer: 'Mochi donuts are made with mochi (rice cake) flour, giving them a uniquely chewy texture inside with a crispy exterior. They originated from Japanese mochi culture and are a popular Hawaiian treat.',
        },
        {
          question: 'Do Waikiki cafes accept credit cards?',
          answer: 'Yes, virtually all Waikiki cafes accept Visa, Mastercard, and American Express. Most also accept Apple Pay and Google Pay.',
        },
        {
          question: 'Can I buy Kona coffee beans as souvenirs?',
          answer: 'Yes, many cafes and shops sell 100% Kona coffee beans. Always verify the label says "100% Kona Coffee" -- "Kona Blend" may contain only 10% Kona beans.',
        },
        {
          question: 'Is tipping required at cafes in Waikiki?',
          answer: 'For counter-service takeout, tipping is not mandatory but 15-20% is appreciated. The payment screen will offer tip options.',
        },
      ],
    },
    cta: {
      title: 'Experience Kona Coffee & Mochi Donuts in Waikiki',
      text: 'Kona Coffee Donut | 2142 Kalakaua Ave, Waikiki',
      button: 'View on Google Maps',
      menuButton: 'View Menu',
    },
  },
  ko: {
    hero: {
      title: '와이키키 추천 카페 2026: 코나 커피와 모찌 도넛 명소 가이드',
      subtitle: '와이키키 최고의 카페와 디저트를 소개하는 완벽 가이드',
      breadcrumb: '블로그',
      breadcrumbCurrent: '와이키키 카페 가이드',
    },
    intro: {
      title: '와이키키 카페 문화',
      paragraphs: [
        '와이키키는 세계적인 해변 리조트이자 커피 문화의 중심지입니다. 칼라카우아 애비뉴를 따라 다양한 카페가 줄지어 있으며, 스페셜티 코나 커피부터 아시안 디저트까지 풍부한 선택지를 제공합니다.',
        '2026년 와이키키 카페 씬은 로컬 로스터의 부상과 아시안 스위츠와의 융합으로 더욱 활기를 띠고 있습니다.',
        '이 가이드에서는 코나 커피, 모찌 도넛, 말라사다, 빙수 등 와이키키 최고의 카페를 소개합니다.',
      ],
    },
    konaSection: {
      title: '코나 커피란?',
      paragraphs: [
        '코나 커피는 하와이 빅아일랜드의 코나 지구에서만 재배되는 프리미엄 싱글 오리진 커피입니다. 세계 커피 생산량의 1% 미만을 차지하는 희귀한 커피입니다.',
        '부드러운 맛, 낮은 산도, 초콜릿과 견과류 같은 풍미가 특징입니다.',
        '와이키키에서는 한 잔에 약 $5부터 정통 100% 코나 커피를 즐길 수 있습니다.',
        '"코나 블렌드"는 코나 원두가 10%만 포함될 수 있으니 반드시 "100% Kona Coffee" 표기를 확인하세요.',
      ],
    },
    ranking: {
      title: '와이키키 추천 카페',
      subtitle: '와이키키에서 최고의 커피와 디저트를 즐길 수 있는 카페를 엄선했습니다',
      cafes: [
        {
          rank: 1,
          name: 'Kona Coffee Donut (코나커피도넛)',
          address: '2142 Kalakaua Ave, Honolulu, HI 96815',
          description: '칼라카우아 애비뉴에 위치한 100% 코나 커피와 모찌 도넛 전문점. 우베, 말차, 흑설탕 키나코 등 다양한 플레이버의 모찌 도넛과 말라사다, 빙수까지 한 곳에서 즐길 수 있습니다.',
          highlight: '100% 코나 커피, 모찌 도넛, 말라사다, 빙수',
          price: '$3.50~',
          isFeatured: true,
        },
        {
          rank: 2,
          name: 'Island Vintage Coffee',
          address: 'Royal Hawaiian Center, Waikiki',
          description: '로얄 하와이안 센터 내 인기 카페. 아사이 볼과 100% 코나 커피가 유명합니다.',
          highlight: '아사이 볼, 코나 커피',
          price: '$6~',
          isFeatured: false,
        },
        {
          rank: 3,
          name: 'Honolulu Coffee',
          address: 'Multiple locations in Waikiki',
          description: '1992년 설립된 하와이 토종 커피 체인. 자사 농장에서 재배한 코나 커피를 제공합니다.',
          highlight: '자사 농장 코나 커피, 라떼아트',
          price: '$5~',
          isFeatured: false,
        },
        {
          rank: 4,
          name: 'Kai Coffee Hawaii',
          address: 'Hyatt Regency Waikiki, 2424 Kalakaua Ave',
          description: '하얏트 리젠시 내 숨은 보석 카페. 합리적인 가격의 100% 코나 커피를 조용한 환경에서 즐길 수 있습니다.',
          highlight: '숨은 보석, 합리적 가격',
          price: '$4.50~',
          isFeatured: false,
        },
      ],
    },
    mochiDonut: {
      title: '모찌 도넛 특집',
      paragraphs: [
        '모찌 도넛은 일본의 떡(모찌) 식감을 도넛에 접목한 퓨전 스위츠입니다. 겉은 바삭, 속은 쫄깃한 독특한 식감이 특징입니다.',
        '인기 플레이버로는 우베, 말차, 흑설탕 키나코 등이 있으며, 코나 커피와 완벽한 페어링을 이룹니다.',
        'Kona Coffee Donut에서는 12가지 이상의 플레이버를 상시 제공하고 있습니다.',
        '코나 커피의 부드러운 쓴맛과 모찌 도넛의 은은한 단맛의 조합은 와이키키에서 꼭 시도해봐야 할 페어링입니다.',
      ],
    },
    malasada: {
      title: '말라사다: 하와이의 전통 스위츠',
      paragraphs: [
        '말라사다는 19세기 포르투갈 이민자들이 하와이에 전한 전통 튀김 도넛입니다. 구멍이 없는 동그란 모양에 설탕을 묻혀 먹습니다.',
        '커스터드, 하우피아(코코넛 푸딩) 등의 필링도 인기. Kona Coffee Donut에서는 매일 아침 수제로 만들고 있습니다.',
        '주문 후 설탕을 묻혀 드리므로 항상 갓 만든 맛을 즐기실 수 있습니다.',
      ],
    },
    bingsu: {
      title: '빙수: 파라다이스에서 즐기는 한국 디저트',
      paragraphs: [
        '빙수는 부드러운 우유 얼음 위에 과일, 팥, 떡, 연유 등을 올린 한국 대표 디저트입니다.',
        '와이키키의 따뜻한 날씨에서 먹는 빙수는 격별합니다. Kona Coffee Donut에서는 망고 빙수, 딸기 빙수, 시그니처 코나 커피 빙수를 제공합니다.',
        '2~3인이 나눠 먹기 좋은 사이즈로, $10~$14 가격대입니다.',
      ],
    },
    practical: {
      title: '실용 정보',
      sections: [
        { subtitle: '영업시간', text: '대부분의 와이키키 카페는 오전 7시~오후 9시 영업. 주말 혼잡을 피하려면 오전 8시 전 방문 추천.' },
        { subtitle: '위치', text: 'Kona Coffee Donut은 칼라카우아 애비뉴 2142번지, 와이키키 비치에서 도보 5분 거리.' },
        { subtitle: '팁 문화', text: '미국에서는 15~20% 팁이 관례. 테이크아웃 시 필수는 아니지만 감사의 표시로 남기는 것이 좋습니다.' },
        { subtitle: '예산', text: '커피 1잔 + 디저트 1개 기준 $8~$15. 신용카드, Apple Pay 사용 가능.' },
      ],
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        {
          question: '와이키키에서 진짜 100% 코나 커피를 마실 수 있는 곳은?',
          answer: 'Kona Coffee Donut(칼라카우아 2142번지)에서 100% 코나 커피만을 제공합니다. Island Vintage Coffee, Honolulu Coffee, Kai Coffee Hawaii에서도 가능합니다.',
        },
        {
          question: '모찌 도넛이란 무엇인가요?',
          answer: '모찌(떡) 가루로 만든 도넛으로, 겉은 바삭하고 속은 쫄깃한 독특한 식감이 특징입니다.',
        },
        {
          question: '와이키키 카페에서 신용카드 사용이 가능한가요?',
          answer: '네, 대부분의 와이키키 카페에서 Visa, Mastercard, AMEX를 사용할 수 있으며 Apple Pay도 가능합니다.',
        },
        {
          question: '코나 커피 원두를 선물로 살 수 있나요?',
          answer: '네, "100% Kona Coffee" 표기를 확인하세요. "코나 블렌드"는 코나 원두가 10%만 포함될 수 있습니다.',
        },
        {
          question: '카페에서 팁은 꼭 내야 하나요?',
          answer: '테이크아웃 시 필수는 아니지만 15~20% 정도가 일반적입니다. 결제 화면에서 팁 옵션을 선택할 수 있습니다.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 코나 커피와 모찌 도넛을 즐기세요',
      text: 'Kona Coffee Donut | 2142 Kalakaua Ave, Waikiki',
      button: 'Google 지도에서 보기',
      menuButton: '메뉴 보기',
    },
  },
  zh: {
    hero: {
      title: '2026威基基咖啡厅推荐：科纳咖啡与麻糬甜甜圈名店指南',
      subtitle: '威基基最佳咖啡厅和甜点的完全指南',
      breadcrumb: '博客',
      breadcrumbCurrent: '威基基咖啡厅指南',
    },
    intro: {
      title: '威基基咖啡厅文化',
      paragraphs: [
        '威基基不仅是世界级的海滩度假地，也是咖啡文化的中心。沿着卡拉卡瓦大道，各种特色咖啡厅林立。',
        '2026年的威基基咖啡厅场景更加丰富多彩，本地烘焙商和亚洲甜点的融合带来了前所未有的体验。',
        '本指南为您精选了威基基最好的咖啡厅，涵盖科纳咖啡、麻糬甜甜圈、马拉萨达和冰沙等。',
      ],
    },
    konaSection: {
      title: '什么是科纳咖啡？',
      paragraphs: [
        '科纳咖啡是产自夏威夷大岛科纳地区的顶级单一产地咖啡，占全球咖啡产量不到1%。',
        '口感顺滑、酸度低，带有巧克力和坚果的风味。',
        '在威基基，约$5就能品尝到正宗的100%科纳咖啡。',
        '注意："科纳混合"可能只含10%科纳豆，请认准"100% Kona Coffee"标签。',
      ],
    },
    ranking: {
      title: '威基基推荐咖啡厅',
      subtitle: '精选威基基最佳咖啡和甜点店',
      cafes: [
        {
          rank: 1,
          name: 'Kona Coffee Donut（科纳咖啡甜甜圈）',
          address: '2142 Kalakaua Ave, Honolulu, HI 96815',
          description: '位于卡拉卡瓦大道的100%科纳咖啡和麻糬甜甜圈专门店。提供紫薯、抹茶、黑糖黄豆粉等多种口味，还有马拉萨达和冰沙。',
          highlight: '100%科纳咖啡、麻糬甜甜圈、马拉萨达、冰沙',
          price: '$3.50起',
          isFeatured: true,
        },
        {
          rank: 2,
          name: 'Island Vintage Coffee',
          address: 'Royal Hawaiian Center, Waikiki',
          description: '位于皇家夏威夷中心的人气咖啡厅。巴西莓碗和100%科纳咖啡是招牌。',
          highlight: '巴西莓碗、科纳咖啡',
          price: '$6起',
          isFeatured: false,
        },
        {
          rank: 3,
          name: 'Honolulu Coffee',
          address: 'Multiple locations in Waikiki',
          description: '1992年创立的夏威夷本土咖啡连锁，使用自家农场种植的科纳咖啡。',
          highlight: '自家农场科纳咖啡、拉花',
          price: '$5起',
          isFeatured: false,
        },
        {
          rank: 4,
          name: 'Kai Coffee Hawaii',
          address: 'Hyatt Regency Waikiki, 2424 Kalakaua Ave',
          description: '凯悦酒店内的隐藏宝藏咖啡厅。以实惠价格提供100%科纳咖啡，环境安静。',
          highlight: '隐藏宝藏、实惠价格',
          price: '$4.50起',
          isFeatured: false,
        },
      ],
    },
    mochiDonut: {
      title: '麻糬甜甜圈特辑',
      paragraphs: [
        '麻糬甜甜圈将日本麻糬的口感与甜甜圈结合，外酥里糯，口感独特。',
        '热门口味包括紫薯、抹茶、黑糖黄豆粉等，与科纳咖啡是完美搭配。',
        'Kona Coffee Donut提供12种以上口味，定期推出季节限定款。',
        '科纳咖啡的醇厚苦味与麻糬甜甜圈的温和甜味相得益彰，不容错过。',
      ],
    },
    malasada: {
      title: '马拉萨达：夏威夷传统甜点',
      paragraphs: [
        '马拉萨达是19世纪葡萄牙移民带到夏威夷的传统炸面包圈，圆形无洞，裹上白糖食用。',
        '可选奶油、椰子布丁等馅料。Kona Coffee Donut每天早晨手工现做。',
        '点餐后现裹糖粉，确保每一个都是刚出炉的美味。',
      ],
    },
    bingsu: {
      title: '冰沙：天堂里的韩式刨冰',
      paragraphs: [
        '冰沙（Bingsu）是韩国代表性甜品，将绵密的牛奶冰配上水果、红豆、年糕和炼乳。',
        '在威基基温暖的气候中享用冰沙别有一番风味。Kona Coffee Donut提供芒果冰沙、草莓冰沙和招牌科纳咖啡冰沙。',
        '份量适合2-3人分享，价格在$10-$14之间。',
      ],
    },
    practical: {
      title: '实用信息',
      sections: [
        { subtitle: '营业时间', text: '大多数威基基咖啡厅营业时间为早7点至晚9点。避开周末高峰，建议早8点前到达。' },
        { subtitle: '位置', text: 'Kona Coffee Donut位于卡拉卡瓦大道2142号，距威基基海滩步行5分钟。' },
        { subtitle: '小费文化', text: '美国惯例为15-20%小费。外带时非强制，但表示感谢时可适当给予。' },
        { subtitle: '预算', text: '咖啡1杯+甜点1份约$8-$15。接受信用卡和Apple Pay。' },
      ],
    },
    faq: {
      title: '常见问题',
      items: [
        {
          question: '威基基哪里能喝到真正的100%科纳咖啡？',
          answer: 'Kona Coffee Donut（卡拉卡瓦大道2142号）专供100%科纳咖啡。Island Vintage Coffee、Honolulu Coffee和Kai Coffee Hawaii也提供。',
        },
        {
          question: '什么是麻糬甜甜圈？',
          answer: '用麻糬粉制作的甜甜圈，外酥里糯，口感独特。起源于日本麻糬文化。',
        },
        {
          question: '威基基咖啡厅接受信用卡吗？',
          answer: '是的，几乎所有咖啡厅都接受Visa、Mastercard和AMEX，大多也支持Apple Pay。',
        },
        {
          question: '可以购买科纳咖啡豆作为纪念品吗？',
          answer: '可以，请确认标签写的是"100% Kona Coffee"，"科纳混合"可能只含10%科纳豆。',
        },
        {
          question: '咖啡厅需要给小费吗？',
          answer: '外带不强制，但15-20%是常见做法。付款屏幕会显示小费选项。',
        },
      ],
    },
    cta: {
      title: '在威基基享受科纳咖啡与麻糬甜甜圈',
      text: 'Kona Coffee Donut | 2142 Kalakaua Ave, Waikiki',
      button: '在Google地图中查看',
      menuButton: '查看菜单',
    },
  },
};

// BlogPosting JSON-LD
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'ワイキキおすすめカフェ2026：コナコーヒーとモチドーナツの名店ガイド',
  description: 'ワイキキのおすすめカフェを厳選紹介。100%コナコーヒー、モチドーナツ、マラサダ、ビンスなど、日本人旅行者に人気のハワイグルメを徹底ガイド。',
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
    '@id': 'https://www.konacoffeedonut.com/ja/blog/waikiki-cafe-guide-japanese',
  },
  inLanguage: 'ja',
  keywords: 'コナコーヒー メニュー, ワイキキ ドーナツ, コナコーヒー ワイキキ, ワイキキ カフェ, モチドーナツ, マラサダ, ビンス',
};

// FAQPage JSON-LD
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ワイキキで本物の100%コナコーヒーが飲めるカフェはどこですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut（カラカウア通り2142番地）では、100%コナ産のコーヒー豆のみを使用しています。ブレンドではなく、純粋な100%コナコーヒーをお楽しみいただけます。Island Vintage Coffee、Honolulu Coffee、Kai Coffee Hawaiiでも100%コナコーヒーを提供しています。',
      },
    },
    {
      '@type': 'Question',
      name: 'モチドーナツとは何ですか？普通のドーナツとの違いは？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'モチドーナツは、もち粉やタピオカ粉を使用した日本発祥のドーナツです。通常のドーナツとの最大の違いは食感で、外はカリッとサクサク、中はもちもちとした独特の食感が特徴です。ミスタードーナツの「ポン・デ・リング」に近い食感をイメージしていただくとわかりやすいです。',
      },
    },
    {
      '@type': 'Question',
      name: 'ワイキキのカフェでクレジットカードは使えますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、ワイキキのほとんどのカフェでクレジットカード（Visa、Mastercard、American Express）が利用可能です。Apple PayやGoogle Payなどの電子決済にも対応している店舗が多いです。',
      },
    },
    {
      '@type': 'Question',
      name: 'コナコーヒーをお土産として購入できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、多くのカフェやワイキキのショップで100%コナコーヒー豆をお土産用に購入できます。ただし「Kona Blend」と表記されている商品はコナ豆が10%しか含まれていない場合がありますので、必ず「100% Kona Coffee」の表記を確認してください。',
      },
    },
    {
      '@type': 'Question',
      name: 'ワイキキのカフェにチップは必要ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'テイクアウトの場合、チップは義務ではありませんが、サービスに満足された場合は15〜20%程度を添えるのが一般的です。レジでの会計時にiPad等でチップの金額を選択する画面が表示されます。',
      },
    },
  ],
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function WaikikiCafeGuideJapanesePage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'ja';
  const t = content[locale as keyof typeof content] || content.ja;

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

      <main className="min-h-screen bg-[#faf8f5] text-gray-100">
        <SubpageNav locale={locale} />

        {/* Hero Section */}
        <section className="relative h-[65vh] min-h-[450px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#1a0f0a]/70 to-[#0a0a0a] z-10" />
          <div className="absolute inset-0">
            <Image
              src="/images/background/waikiki-sunrise.jpg"
              alt="Waikiki Cafe Guide - Kona Coffee and Mochi Donuts"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-20 text-center text-gray-900 px-4 max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <motion.nav
              className="flex items-center justify-center gap-2 text-sm text-amber-700/80 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Link href={`/${locale}`} className="hover:text-amber-200 transition-colors">
                KONA COFFEE DONUT
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link href={`/${locale}/blog`} className="hover:text-amber-200 transition-colors">
                {t.hero.breadcrumb}
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-gray-900/60">{t.hero.breadcrumbCurrent}</span>
            </motion.nav>

            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-amber-100/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.hero.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-8 text-center">
                {t.intro.title}
              </h2>
              {t.intro.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-300 text-lg leading-relaxed mb-5">
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Kona Coffee Section */}
        <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#12080a]">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeIn}>
              <div className="flex items-center justify-center gap-3 mb-8">
                <Coffee className="w-8 h-8 text-amber-700" />
                <h2 className="text-3xl md:text-4xl font-bold text-amber-700">
                  {t.konaSection.title}
                </h2>
              </div>
              {t.konaSection.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-300 text-lg leading-relaxed mb-5">
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Cafe Ranking Section */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-4">
                {t.ranking.title}
              </h2>
              <p className="text-gray-400 text-lg">{t.ranking.subtitle}</p>
            </motion.div>

            <div className="space-y-6">
              {t.ranking.cafes.map((cafe, index) => (
                <motion.div
                  key={index}
                  className={`rounded-2xl p-6 md:p-8 border ${
                    cafe.isFeatured
                      ? 'bg-gradient-to-r from-amber-900/40 to-amber-800/20 border-amber-500/50 shadow-lg shadow-amber-900/20'
                      : 'bg-white/80 border-gray-200 hover:border-amber-500/30'
                  } transition-all duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                        cafe.isFeatured
                          ? 'bg-amber-500 text-black'
                          : 'bg-white text-amber-700'
                      }`}
                    >
                      #{cafe.rank}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                        {cafe.name}
                        {cafe.isFeatured && (
                          <Star className="inline w-5 h-5 text-amber-700 ml-2 -mt-1" />
                        )}
                      </h3>
                      <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
                        <MapPin className="w-3.5 h-3.5" />
                        {cafe.address}
                      </div>
                      <p className="text-gray-300 leading-relaxed mb-4">{cafe.description}</p>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-700 border border-amber-500/30">
                          {cafe.highlight}
                        </span>
                        <span className="flex items-center gap-1 text-green-400">
                          <DollarSign className="w-3.5 h-3.5" />
                          {cafe.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mochi Donut Section */}
        <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#0d0a12]">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-8 text-center">
                {t.mochiDonut.title}
              </h2>
              {t.mochiDonut.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-300 text-lg leading-relaxed mb-5">
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Malasada Section */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-8 text-center">
                {t.malasada.title}
              </h2>
              {t.malasada.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-300 text-lg leading-relaxed mb-5">
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Bingsu Section */}
        <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#0a0d12]">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-8 text-center">
                {t.bingsu.title}
              </h2>
              {t.bingsu.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-300 text-lg leading-relaxed mb-5">
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Practical Info Section */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-10 text-center">
                {t.practical.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {t.practical.sections.map((section, index) => (
                  <div
                    key={index}
                    className="bg-white/80 border border-gray-200 rounded-xl p-6"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {index === 0 && <Clock className="w-5 h-5 text-amber-700" />}
                      {index === 1 && <MapPin className="w-5 h-5 text-amber-700" />}
                      {index === 2 && <DollarSign className="w-5 h-5 text-amber-700" />}
                      {index === 3 && <DollarSign className="w-5 h-5 text-amber-700" />}
                      <h3 className="text-lg font-bold text-gray-900">{section.subtitle}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-sm">{section.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#12080a]">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-700 mb-10 text-center">
                {t.faq.title}
              </h2>
              <div className="space-y-4">
                {t.faq.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/80 border border-gray-200 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Q. {item.question}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      A. {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t.cta.title}
              </h2>
              <p className="text-xl text-amber-700/80 mb-8">{t.cta.text}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://maps.google.com/?q=2142+Kalakaua+Ave+Honolulu+HI+96815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-amber-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-400 transition-colors"
                >
                  {t.cta.button}
                </a>
                <Link
                  href={`/${locale}/menu`}
                  className="inline-block bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  {t.cta.menuButton}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
