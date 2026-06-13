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
      title: 'What is a Mochi Donut?',
      subtitle: 'The Complete Guide to the Chewy, Pull-Apart Pon-de-Ring Donut',
      updated: 'Updated June 2026',
      readTime: '8 min read',
    },
    definition: {
      title: 'What is a Mochi Donut?',
      text: 'A <strong>mochi donut</strong> is a chewy donut made with <strong>glutinous rice flour (mochiko) and/or tapioca starch</strong>, which gives it a signature bouncy, stretchy <strong>"QQ" texture</strong> — crispy on the outside, soft and chewy on the inside. The iconic shape is the <strong>"pon-de-ring": eight connected dough balls</strong> that you can pull apart and share. Unlike cake or yeast donuts made from wheat flour, the rice-flour base is what gives the mochi donut its addictive, mochi-like chew.',
    },
    history: {
      title: 'The History of the Mochi Donut',
      subtitle: 'From Japan\'s Pon de Ring to Hawaii\'s Mochi Donut Boom',
      p1: 'The mochi donut traces its roots to Japan. In 2003, the Japanese chain <strong>Mister Donut</strong> launched the <strong>"Pon de Ring" (ポン・デ・リング)</strong> — a ring of connected dough balls with a uniquely chewy bite. Its name and shape were inspired by <strong>pão de queijo</strong>, the Brazilian tapioca cheese bread, and the chewy "pon de" texture quickly became a sensation across Japan.',
      p2: 'Hawaii was the perfect place for the mochi donut to take root. The islands have a deep love of <strong>mochi and mochiko (glutinous rice flour)</strong> — from New Year\'s mochi pounding to butter mochi at every potluck. Local bakers already understood the magic of rice-flour chew, so adapting it into a donut felt natural rather than novel.',
      p3: 'Over the past decade, the <strong>mochi donut boom</strong> swept across Hawaii and the US mainland. From beloved local institutions like Liliha Bakery to food trucks, farmers markets, and Asian-American bakeries, colorful rings of chewy mochi donuts began popping up everywhere — often selling out within hours and racking up millions of views on social media.',
      p4: 'What truly sets the mochi donut apart is the <strong>rice-flour chew</strong>. A classic cake donut is soft and crumbly; a yeast donut is airy and pillowy. The mochi donut is something else entirely — bouncy, stretchy, and satisfyingly dense, with a texture closer to mochi than to any Western donut. That singular bite is exactly why it has earned a permanent place in Hawaii\'s dessert scene.',
    },
    comparison: {
      title: 'Mochi Donut vs Classic Donut vs Malasada',
      subtitle: 'What Makes the Mochi Donut Different?',
      intro: 'Mochi donuts, classic American donuts, and Portuguese-Hawaiian malasadas are all fried dough treats — but the resemblance ends there. Here\'s how they compare:',
      headers: {
        feature: 'Feature',
        bingsu: 'Mochi Donut',
        shavedIce: 'Classic Donut',
        kakigori: 'Malasada',
      },
      rows: [
        {
          feature: 'Main Flour',
          bingsu: 'Rice flour & tapioca starch',
          shavedIce: 'Wheat flour',
          kakigori: 'Yeasted egg-rich wheat dough',
        },
        {
          feature: 'Texture',
          bingsu: 'Chewy, bouncy & stretchy (QQ)',
          shavedIce: 'Soft, cakey & crumbly',
          kakigori: 'Pillowy inside, crisp sugar shell',
        },
        {
          feature: 'Shape',
          bingsu: 'Pon-de-ring: 8 connected balls',
          shavedIce: 'Ring with a hole in the center',
          kakigori: 'Round, no hole',
        },
        {
          feature: 'Glaze / Coating',
          bingsu: 'Thin glaze in colorful flavors',
          shavedIce: 'Glaze, frosting or sprinkles',
          kakigori: 'Rolled in plain or li hing sugar',
        },
        {
          feature: 'Origin',
          bingsu: 'Japan → Hawaii',
          shavedIce: 'USA',
          kakigori: 'Portugal → Hawaii',
        },
        {
          feature: 'Shelf Life',
          bingsu: 'Best same day — chewy when fresh',
          shavedIce: 'Stays soft a day or two',
          kakigori: 'Best eaten warm, within hours',
        },
      ],
      note: 'The defining trait is the rice-flour chew. While classic donuts rely on wheat for a soft crumb and malasadas on yeast for an airy bite, the mochi donut\'s glutinous rice flour and tapioca starch create that one-of-a-kind bouncy, stretchy texture you simply can\'t get anywhere else.',
    },
    types: {
      title: 'Popular Mochi Donut Flavors',
      subtitle: 'From Classic Glaze to Island-Inspired Kona Coffee',
      items: [
        {
          name: 'Classic Glaze',
          korean: 'Classic',
          description: 'The everyday favorite that lets the chew shine. A pon-de-ring dipped in a thin, glossy vanilla glaze that sets to a delicate crackle. Simple, sweet, and the perfect introduction to the bouncy rice-flour texture that makes mochi donuts so addictive.',
          icon: '🍩',
        },
        {
          name: 'Ube',
          korean: 'Ube',
          description: 'Made with ube (purple yam), this vibrant violet mochi donut is as Instagram-worthy as it is delicious. The ube glaze brings a mild, nutty-vanilla sweetness that pairs beautifully with the chewy ring. A Hawaii crowd favorite and one of the most photographed flavors.',
          icon: '💜',
        },
        {
          name: 'Matcha',
          korean: 'Matcha',
          description: 'Premium Japanese green tea powder gives this mochi donut its earthy aroma and gentle bitterness, which balances the sweet glaze beautifully. A nod to the mochi donut\'s Japanese roots and a favorite for those who like their treats a little less sweet.',
          icon: '🍵',
        },
        {
          name: 'Strawberry',
          korean: 'Strawberry',
          description: 'A bright pink glaze with real strawberry flavor makes this the sweetest, most playful of the bunch. Fruity, fragrant, and cheerful — it\'s a hit with kids and anyone who loves a colorful, berry-forward bite on a chewy mochi base.',
          icon: '🍓',
        },
        {
          name: 'Kona Coffee Glaze',
          korean: 'Kona',
          description: 'Our island signature: a mochi donut finished with a glaze made from 100% Kona coffee. The rich, smooth coffee notes pair perfectly with the chewy ring — and even better with a cup of Kona coffee on the side. A true taste of Hawaii in donut form.',
          icon: '☕',
        },
      ],
    },
    whyHawaii: {
      title: 'Why Mochi Donuts Are Huge in Hawaiʻi',
      points: [
        {
          title: 'Deep Mochi & Mochiko Food Culture',
          description: 'Hawaii has a generations-deep love of mochi and mochiko (glutinous rice flour). From New Year\'s mochi pounding to butter mochi at every family gathering, the chewy rice-flour texture is already a cherished part of local life. The mochi donut simply gives that beloved chew a brand-new form.',
        },
        {
          title: 'Multicultural Asian Influence',
          description: 'Hawaii\'s food scene blends Japanese, Filipino, Korean, Chinese, and Native Hawaiian traditions. Ingredients like ube, matcha, and black sesame feel right at home here. The mochi donut, born in Japan and flavored with island favorites, fits perfectly into Hawaii\'s multicultural dessert landscape.',
        },
        {
          title: 'Instagram-Worthy Colorful Flavors',
          description: 'Few desserts are as photogenic as a tray of mochi donuts. Vibrant ube purple, matcha green, strawberry pink, and golden Kona coffee glazes make for an irresistible photo — and visitors love sharing their colorful pull-apart rings before taking the first chewy bite.',
        },
        {
          title: 'The Perfect Chewy Island Treat',
          description: 'Mochi donuts are lighter and less greasy than many fried treats, and that satisfying chew makes them feel like a special-occasion snack you can enjoy any day. Paired with Hawaii\'s easygoing, treat-yourself island pace, they\'re the ideal grab-and-go dessert.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Get Mochi Donuts in Waikiki',
      intro: 'If you\'re craving fresh, chewy mochi donuts in Waikiki, Kona Coffee Donut is your destination.',
      shop: {
        name: 'Kona Coffee Donut',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Located in the heart of Waikiki on Kalakaua Avenue, Kona Coffee Donut serves fresh, hand-made rice-flour mochi donuts in 24 rotating flavors — from classic glaze to ube, matcha, strawberry, and our signature Kona coffee glaze. What makes ours special? We pair every chewy pon-de-ring with rich, smooth Kona coffee.',
        highlights: [
          '24 rotating flavors of fresh rice-flour mochi donuts',
          'Paired perfectly with 100% Kona coffee',
          'Walking distance from Waikiki Beach',
          'Open daily — perfect for a chewy afternoon treat',
        ],
      },
      cta: 'View Our Mochi Donut Menu',
    },
    howToEat: {
      title: 'How to Enjoy a Mochi Donut',
      subtitle: 'Tips for the Perfect Chewy Bite',
      tips: [
        {
          title: 'Eat Fresh, Same-Day',
          description: 'Mochi donuts are at their absolute best the day they\'re made, when the chew is springy and the glaze is glossy. The rice-flour texture firms up over time, so don\'t save it for tomorrow — grab one fresh and enjoy that signature bounce while it lasts.',
        },
        {
          title: 'Pull Apart the Rings to Share',
          description: 'The pon-de-ring shape isn\'t just for looks. Those eight connected dough balls are made to be pulled apart, making mochi donuts perfect for sharing. Hand a ball to a friend, or sample several flavors together — it\'s a fun, social way to enjoy them.',
        },
        {
          title: 'Pair with Kona Coffee',
          description: 'The chewy sweetness of a mochi donut is the perfect match for a cup of rich Kona coffee. The smooth, slightly nutty coffee cuts through the glaze and complements flavors like classic, matcha, and of course our Kona coffee glaze beautifully.',
        },
        {
          title: 'Try a Colorful Mixed Box',
          description: 'Can\'t decide? Don\'t. With 24 rotating flavors, a mixed box lets you taste ube, matcha, strawberry, Kona coffee, and more in one sitting. It\'s the most fun way to discover your favorite — and it makes for an unbeatable photo.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About Mochi Donuts',
      items: [
        {
          question: 'What is a mochi donut made of?',
          answer: 'A mochi donut is made primarily from glutinous rice flour (mochiko) and/or tapioca starch instead of wheat flour, which is what gives it that signature chewy, bouncy texture. The dough is shaped into the iconic pon-de-ring — eight connected balls — then fried and finished with a thin glaze in flavors like classic, ube, matcha, strawberry, or Kona coffee.',
        },
        {
          question: 'What is a pon-de-ring?',
          answer: 'A pon-de-ring is the iconic mochi donut shape: a ring made of eight connected dough balls that you can pull apart and share. It was introduced by the Japanese chain Mister Donut in 2003, with its name and chewy texture inspired by pão de queijo, the Brazilian tapioca cheese bread. Today the pon-de-ring is the signature look of mochi donuts everywhere.',
        },
        {
          question: 'What\'s the difference between a mochi donut and a regular donut?',
          answer: 'The biggest difference is the flour. A regular donut is made with wheat flour, giving it a soft, cakey, or airy texture. A mochi donut uses glutinous rice flour and tapioca starch, creating a chewy, stretchy, bouncy "QQ" bite that\'s closer to mochi. Mochi donuts are also shaped as a pon-de-ring of eight connected balls rather than a single ring with a hole.',
        },
        {
          question: 'Are mochi donuts gluten-free?',
          answer: 'Not necessarily. While mochi donuts are made with rice flour and tapioca starch rather than wheat flour, they are often fried in shared fryers and may use wheat-based glazes or ingredients, so they are not guaranteed to be gluten-free. If you have a gluten allergy or celiac disease, always ask the shop about cross-contamination and specific ingredients before ordering.',
        },
        {
          question: 'Where can I get fresh mochi donuts in Waikiki?',
          answer: 'Kona Coffee Donut at 2142 Kalakaua Ave in the heart of Waikiki serves fresh, hand-made rice-flour mochi donuts in 24 rotating flavors, paired with 100% Kona coffee. We\'re open daily and within walking distance of Waikiki Beach — the perfect spot to grab a chewy treat.',
        },
      ],
    },
    cta: {
      title: 'Try Mochi Donuts in Waikiki',
      text: 'Visit Kona Coffee Donut at 2142 Kalakaua Ave and taste 24 flavors of fresh, chewy mochi donuts paired with premium Kona coffee.',
      menuButton: 'View Mochi Donut Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'What is a Mochi Donut?',
    },
  },
  ja: {
    hero: {
      title: 'モチドーナツとは？',
      subtitle: 'もちもち食感で引っぱって分けられるポン・デ・リング完全ガイド',
      updated: '2026年6月更新',
      readTime: '8分で読める',
    },
    definition: {
      title: 'モチドーナツとは？',
      text: '<strong>モチドーナツ</strong>とは、<strong>もち米粉（白玉粉・餅粉）やタピオカでんぷん</strong>を使って作るドーナツで、独特のもちもち・むにむにとした<strong>「QQ」食感</strong>が特徴です。外はカリッと、中はもっちり。象徴的な形は<strong>「ポン・デ・リング」——8つの団子がつながった形</strong>で、引っぱって分けながら食べられます。小麦粉で作るケーキドーナツやイーストドーナツとは違い、米粉ベースだからこそ生まれる、お餅のようなクセになる食感が魅力です。',
    },
    history: {
      title: 'モチドーナツの歴史',
      subtitle: '日本のポン・デ・リングからハワイのモチドーナツブームまで',
      p1: 'モチドーナツのルーツは日本にあります。2003年、日本のチェーン店<strong>ミスタードーナツ</strong>が<strong>「ポン・デ・リング」</strong>を発売しました。団子がつながった独特のもちもち食感のリング型ドーナツです。その名前と形は、ブラジルのタピオカチーズパン<strong>「ポン・デ・ケージョ」</strong>から着想を得ており、もちもちの「ポン・デ」食感はあっという間に日本中で大人気になりました。',
      p2: 'ハワイは、モチドーナツが根付くのに最適な土地でした。ハワイには<strong>餅と餅粉（もち米粉）</strong>を愛する深い文化があります。お正月の餅つきから、ポットラックの定番バターモチまで。地元のベイカーたちは米粉のもちもち食感の魅力をすでに知っていたため、それをドーナツに応用するのは目新しいというより、ごく自然なことだったのです。',
      p3: 'この10年で、<strong>モチドーナツブーム</strong>はハワイから米国本土まで広がりました。リリハベーカリーのような地元で愛される老舗から、フードトラック、ファーマーズマーケット、アジア系アメリカ人のベーカリーまで、カラフルなモチドーナツのリングが至るところに登場。数時間で売り切れることも多く、SNSでも数百万回再生される人気ぶりです。',
      p4: 'モチドーナツを真に特別なものにしているのは、<strong>米粉ならではの食感</strong>です。定番のケーキドーナツは柔らかくほろほろ、イーストドーナツは軽くふわふわ。一方モチドーナツはまったく別物で、もちもち・むにむにとした弾力があり、満足感のある食感はどんな西洋風ドーナツよりもお餅に近いのです。この唯一無二の食感こそ、ハワイのデザートシーンに確固たる地位を築いた理由です。',
    },
    comparison: {
      title: 'モチドーナツ vs クラシックドーナツ vs マラサダ',
      subtitle: 'モチドーナツはどう違う？',
      intro: 'モチドーナツ、アメリカのクラシックドーナツ、ポルトガル系ハワイのマラサダは、どれも揚げ生地のお菓子ですが、似ているのはそこまで。比較してみましょう：',
      headers: {
        feature: '特徴',
        bingsu: 'モチドーナツ',
        shavedIce: 'クラシックドーナツ',
        kakigori: 'マラサダ',
      },
      rows: [
        {
          feature: '主な粉',
          bingsu: '米粉とタピオカでんぷん',
          shavedIce: '小麦粉',
          kakigori: '卵たっぷりのイースト小麦生地',
        },
        {
          feature: '食感',
          bingsu: 'もちもち・むにむに（QQ）',
          shavedIce: '柔らかくケーキのよう、ほろほろ',
          kakigori: '中はふわふわ、外は砂糖カリカリ',
        },
        {
          feature: '形',
          bingsu: 'ポン・デ・リング：8つの団子',
          shavedIce: '中央に穴のあるリング型',
          kakigori: '丸型、穴なし',
        },
        {
          feature: 'グレーズ / コーティング',
          bingsu: 'カラフルなフレーバーの薄いグレーズ',
          shavedIce: 'グレーズ、フロスティング、スプレー',
          kakigori: 'プレーンまたはリヒン砂糖をまぶす',
        },
        {
          feature: '起源',
          bingsu: '日本 → ハワイ',
          shavedIce: 'アメリカ',
          kakigori: 'ポルトガル → ハワイ',
        },
        {
          feature: '日持ち',
          bingsu: '当日が一番 — できたてがもちもち',
          shavedIce: '1〜2日は柔らかさが続く',
          kakigori: '温かいうちに、数時間以内が最高',
        },
      ],
      note: '決定的な違いは米粉ならではの食感です。クラシックドーナツが小麦粉で柔らかいきめを、マラサダがイーストでふわふわの食感を生み出すのに対し、モチドーナツはもち米粉とタピオカでんぷんが、他では絶対に味わえない唯一無二のもちもち・むにむに食感を生み出します。',
    },
    types: {
      title: '人気のモチドーナツフレーバー',
      subtitle: '定番グレーズから島ならではのコナコーヒーまで',
      items: [
        {
          name: 'クラシックグレーズ',
          korean: 'Classic',
          description: 'もちもち食感を主役にする定番の一番人気。ポン・デ・リングを薄くツヤのあるバニラグレーズにくぐらせ、繊細にパリッと固めます。シンプルで甘く、モチドーナツのクセになる弾力を知るのに最適な入門フレーバーです。',
          icon: '🍩',
        },
        {
          name: 'ウベ',
          korean: 'Ube',
          description: 'ウベ（紫芋）を使った、鮮やかな紫色のモチドーナツ。インスタ映えするだけでなく味も格別です。ウベのグレーズはほんのりナッティでバニラのような甘さがあり、もちもちのリングと見事に調和します。ハワイで大人気、最も撮影されるフレーバーのひとつです。',
          icon: '💜',
        },
        {
          name: '抹茶',
          korean: 'Matcha',
          description: '高品質な日本の抹茶パウダーが、土の香りとほのかな苦みを与え、甘いグレーズと美しく調和します。モチドーナツの日本のルーツを感じさせるフレーバーで、甘さ控えめが好きな方に人気です。',
          icon: '🍵',
        },
        {
          name: 'ストロベリー',
          korean: 'Strawberry',
          description: '本物のいちごの風味が効いた鮮やかなピンクのグレーズで、一番甘くて遊び心のあるフレーバー。フルーティーで香り高く、明るい味わいは、お子様やカラフルでベリー感のあるもちもち食感が好きな方に大人気です。',
          icon: '🍓',
        },
        {
          name: 'コナコーヒーグレーズ',
          korean: 'Kona',
          description: '私たちの島の看板フレーバー。100%コナコーヒーで作ったグレーズで仕上げたモチドーナツです。豊かでまろやかなコーヒーの風味がもちもちのリングと完璧にマッチ。コナコーヒーを一緒に添えればさらに最高です。ドーナツで味わう本物のハワイ。',
          icon: '☕',
        },
      ],
    },
    whyHawaii: {
      title: 'なぜハワイでモチドーナツが大人気なのか',
      points: [
        {
          title: '餅と餅粉を愛する深い食文化',
          description: 'ハワイには餅と餅粉（もち米粉）を愛する、何世代にもわたる文化があります。お正月の餅つきから、家族の集まりの定番バターモチまで、もちもちの米粉食感はすでに地元の暮らしに愛されています。モチドーナツは、その愛される食感に新しい形を与えただけなのです。',
        },
        {
          title: '多文化が融合したアジアの影響',
          description: 'ハワイの食シーンは、日本、フィリピン、韓国、中国、ネイティブハワイアンの伝統が融合しています。ウベ、抹茶、黒ごまといった素材も自然に馴染みます。日本生まれで島ならではのフレーバーをまとったモチドーナツは、ハワイの多文化なデザート文化に完璧にフィットします。',
        },
        {
          title: 'インスタ映えするカラフルなフレーバー',
          description: 'モチドーナツのトレイほど写真映えするデザートはなかなかありません。鮮やかなウベの紫、抹茶の緑、ストロベリーのピンク、黄金色のコナコーヒーグレーズは、思わず撮りたくなる一枚に。観光客は最初のもちもちの一口の前に、カラフルなリングをシェアして楽しみます。',
        },
        {
          title: '島にぴったりの完璧なもちもちスイーツ',
          description: 'モチドーナツは多くの揚げ菓子より軽く、脂っこさも控えめ。満足感のあるもちもち食感は、いつ食べても特別なおやつのように感じさせてくれます。ハワイののんびりとした、自分にご褒美を、という島の空気にぴったりの手軽なデザートです。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキでモチドーナツを食べるなら',
      intro: 'ワイキキで作りたてのもちもちモチドーナツを楽しむなら、コナコーヒードーナツへ。',
      shop: {
        name: 'Kona Coffee Donut（コナコーヒードーナツ）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心部、カラカウア通りに位置するコナコーヒードーナツは、作りたて・手作りの米粉モチドーナツを24種類のローテーションフレーバーで提供。定番グレーズから、ウベ、抹茶、ストロベリー、そして看板のコナコーヒーグレーズまで。私たちのモチドーナツの特別なところは？すべてのもちもちポン・デ・リングを、豊かでまろやかなコナコーヒーと一緒に楽しめることです。',
        highlights: [
          '24種類のローテーションフレーバーの作りたて米粉モチドーナツ',
          '100%コナコーヒーとの完璧なペアリング',
          'ワイキキビーチから徒歩圏内',
          '毎日営業 — もちもちの午後のおやつに最適',
        ],
      },
      cta: 'モチドーナツメニューを見る',
    },
    howToEat: {
      title: 'モチドーナツの楽しみ方',
      subtitle: '完璧なもちもち食感を味わうコツ',
      tips: [
        {
          title: '当日、できたてを食べよう',
          description: 'モチドーナツは作られたその日が一番。もちもちの弾力があり、グレーズもツヤツヤです。米粉の食感は時間とともに固くなるので、明日まで取っておかないで。できたてを手に取って、あの独特の弾力が続くうちに楽しみましょう。',
        },
        {
          title: 'リングを引っぱってシェアしよう',
          description: 'ポン・デ・リングの形は見た目だけのものではありません。8つのつながった団子は、引っぱって分けられるように作られていて、シェアにぴったり。友達に団子を1つ渡したり、いくつものフレーバーを一緒に味見したり。楽しくて、みんなで盛り上がる食べ方です。',
        },
        {
          title: 'コナコーヒーと一緒に',
          description: 'モチドーナツのもちもちした甘さは、豊かなコナコーヒーと相性抜群です。まろやかでほんのりナッティなコーヒーがグレーズの甘さを引き締め、クラシックや抹茶、もちろんコナコーヒーグレーズとも見事に調和します。',
        },
        {
          title: 'カラフルなミックスボックスを試そう',
          description: '迷ったら、全部。24種類のローテーションフレーバーがあるので、ミックスボックスならウベ、抹茶、ストロベリー、コナコーヒーなどを一度に味わえます。お気に入りを見つける一番楽しい方法で、写真映えも抜群です。',
        },
      ],
    },
    faq: {
      title: 'モチドーナツに関するよくある質問',
      items: [
        {
          question: 'モチドーナツは何で作られていますか？',
          answer: 'モチドーナツは、小麦粉ではなく主にもち米粉（餅粉）やタピオカでんぷんで作られており、それが独特のもちもちとした弾力ある食感を生み出します。生地は象徴的なポン・デ・リング——8つのつながった団子の形——に成形して揚げ、クラシック、ウベ、抹茶、ストロベリー、コナコーヒーなどの薄いグレーズで仕上げます。',
        },
        {
          question: 'ポン・デ・リングとは何ですか？',
          answer: 'ポン・デ・リングとは、モチドーナツの象徴的な形のことです。8つのつながった団子からなるリングで、引っぱって分けてシェアできます。2003年に日本のチェーン店ミスタードーナツが発売し、その名前ともちもち食感はブラジルのタピオカチーズパン「ポン・デ・ケージョ」から着想を得ています。今ではポン・デ・リングは世界中のモチドーナツの代名詞となっています。',
        },
        {
          question: 'モチドーナツと普通のドーナツの違いは何ですか？',
          answer: '最大の違いは粉です。普通のドーナツは小麦粉で作られ、柔らかくケーキのような、またはふわふわした食感になります。モチドーナツはもち米粉とタピオカでんぷんを使い、お餅に近いもちもち・むにむにとした「QQ」食感を生み出します。また、モチドーナツは穴の開いた1つのリングではなく、8つの団子がつながったポン・デ・リングの形をしています。',
        },
        {
          question: 'モチドーナツはグルテンフリーですか？',
          answer: '必ずしもそうとは限りません。モチドーナツは小麦粉ではなく米粉とタピオカでんぷんで作られますが、共用のフライヤーで揚げられたり、小麦ベースのグレーズや材料が使われたりすることが多いため、グルテンフリーであることは保証されません。グルテンアレルギーやセリアック病の方は、注文前に必ずお店で交差汚染や具体的な材料について確認してください。',
        },
        {
          question: 'ワイキキで作りたてのモチドーナツはどこで買えますか？',
          answer: 'ワイキキの中心、2142 Kalakaua Ave にあるコナコーヒードーナツでは、作りたて・手作りの米粉モチドーナツを24種類のローテーションフレーバーで、100%コナコーヒーと一緒にお楽しみいただけます。毎日営業、ワイキキビーチから徒歩圏内。もちもちのおやつを手に入れるのに最適な場所です。',
        },
      ],
    },
    cta: {
      title: 'ワイキキでモチドーナツを楽しもう',
      text: '2142 Kalakaua Ave のコナコーヒードーナツで、作りたてもちもちモチドーナツ24種類とプレミアムコナコーヒーを味わってください。',
      menuButton: 'モチドーナツメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'モチドーナツとは？',
    },
  },
  ko: {
    hero: {
      title: '모찌 도넛이란 무엇인가?',
      subtitle: '쫄깃하고 뜯어 먹는 폰데링 도넛의 모든 것 완벽 가이드',
      updated: '2026년 6월 업데이트',
      readTime: '8분 소요',
    },
    definition: {
      title: '모찌 도넛이란?',
      text: '<strong>모찌 도넛</strong>은 <strong>찹쌀가루(모찌코)나 타피오카 전분</strong>으로 만든 쫄깃한 도넛으로, 특유의 탱글탱글 쫀득쫀득한 <strong>"QQ 식감"</strong>이 특징입니다. 겉은 바삭하고 속은 쫄깃하죠. 대표적인 모양은 <strong>"폰데링" — 8개의 반죽 볼이 서로 연결된 형태</strong>로, 하나씩 뜯어서 나눠 먹을 수 있습니다. 밀가루로 만드는 케이크 도넛이나 이스트 도넛과 달리, 쌀가루 베이스이기에 떡처럼 쫄깃하고 자꾸만 손이 가는 중독적인 식감이 탄생합니다.',
    },
    history: {
      title: '모찌 도넛의 역사',
      subtitle: '일본의 폰데링에서 하와이 모찌 도넛 열풍까지',
      p1: '모찌 도넛의 뿌리는 일본에 있습니다. 2003년, 일본의 체인점 <strong>미스터도넛</strong>이 <strong>"폰데링(ポン・デ・リング)"</strong>을 출시했습니다. 반죽 볼이 서로 연결된, 독특하게 쫄깃한 식감의 링 모양 도넛이죠. 그 이름과 모양은 브라질의 타피오카 치즈빵 <strong>"팡 지 케이주(pão de queijo)"</strong>에서 영감을 받았으며, 쫄깃한 "폰데" 식감은 순식간에 일본 전역에서 큰 인기를 끌었습니다.',
      p2: '하와이는 모찌 도넛이 뿌리내리기에 완벽한 곳이었습니다. 하와이에는 <strong>모찌와 모찌코(찹쌀가루)</strong>를 사랑하는 깊은 문화가 있습니다. 새해 떡메치기부터 모든 포트럭 모임의 단골 메뉴인 버터 모찌까지 말이죠. 현지 제빵사들은 이미 쌀가루의 쫄깃한 매력을 잘 알고 있었기에, 이를 도넛으로 응용하는 것은 새롭다기보다 아주 자연스러운 일이었습니다.',
      p3: '지난 10년간 <strong>모찌 도넛 열풍</strong>은 하와이를 넘어 미국 본토까지 휩쓸었습니다. 릴리하 베이커리 같은 현지의 사랑받는 노포부터 푸드트럭, 파머스 마켓, 아시아계 미국인 베이커리까지, 알록달록한 모찌 도넛 링이 곳곳에 등장했습니다. 몇 시간 만에 품절되는 일도 많고, SNS에서는 수백만 조회수를 기록하기도 합니다.',
      p4: '모찌 도넛을 진정으로 특별하게 만드는 것은 바로 <strong>쌀가루 특유의 쫄깃함</strong>입니다. 클래식한 케이크 도넛은 부드럽고 푸슬푸슬하고, 이스트 도넛은 가볍고 폭신하죠. 반면 모찌 도넛은 완전히 다릅니다. 탱글탱글하고 쫀득하며, 만족스러운 밀도감의 식감은 그 어떤 서양식 도넛보다 떡에 가깝습니다. 바로 이 독보적인 식감이 하와이 디저트 문화에서 확고한 자리를 차지하게 된 이유입니다.',
    },
    comparison: {
      title: '모찌 도넛 vs 클래식 도넛 vs 말라사다',
      subtitle: '모찌 도넛은 무엇이 다를까?',
      intro: '모찌 도넛, 미국식 클래식 도넛, 포르투갈계 하와이의 말라사다는 모두 튀긴 반죽으로 만든 간식이지만, 닮은 점은 거기까지입니다. 비교해 보겠습니다:',
      headers: {
        feature: '특징',
        bingsu: '모찌 도넛',
        shavedIce: '클래식 도넛',
        kakigori: '말라사다',
      },
      rows: [
        {
          feature: '주재료(가루)',
          bingsu: '쌀가루와 타피오카 전분',
          shavedIce: '밀가루',
          kakigori: '달걀이 풍부한 이스트 밀반죽',
        },
        {
          feature: '식감',
          bingsu: '쫄깃하고 탱글탱글 (QQ)',
          shavedIce: '부드럽고 케이크처럼 푸슬푸슬',
          kakigori: '속은 폭신, 겉은 설탕이 바삭',
        },
        {
          feature: '모양',
          bingsu: '폰데링: 8개의 연결된 볼',
          shavedIce: '가운데 구멍이 있는 링',
          kakigori: '둥근 모양, 구멍 없음',
        },
        {
          feature: '글레이즈 / 코팅',
          bingsu: '알록달록한 맛의 얇은 글레이즈',
          shavedIce: '글레이즈, 프로스팅, 스프링클',
          kakigori: '플레인 또는 리힝 설탕에 굴림',
        },
        {
          feature: '기원',
          bingsu: '일본 → 하와이',
          shavedIce: '미국',
          kakigori: '포르투갈 → 하와이',
        },
        {
          feature: '보관 기간',
          bingsu: '당일이 최고 — 갓 만들었을 때 쫄깃',
          shavedIce: '하루 이틀은 부드러움 유지',
          kakigori: '따뜻할 때, 몇 시간 내가 최고',
        },
      ],
      note: '결정적인 차이는 쌀가루 특유의 쫄깃함입니다. 클래식 도넛은 밀가루로 부드러운 결을, 말라사다는 이스트로 폭신한 식감을 내지만, 모찌 도넛은 찹쌀가루와 타피오카 전분이 만들어내는, 다른 어디서도 맛볼 수 없는 독보적인 탱글탱글 쫄깃한 식감을 자랑합니다.',
    },
    types: {
      title: '인기 모찌 도넛 맛',
      subtitle: '클래식 글레이즈부터 하와이 섬의 코나 커피까지',
      items: [
        {
          name: '클래식 글레이즈',
          korean: 'Classic',
          description: '쫄깃한 식감을 주인공으로 만드는 가장 인기 있는 기본 맛. 폰데링을 얇고 윤기 나는 바닐라 글레이즈에 담갔다가 살짝 바삭하게 굳힙니다. 심플하고 달콤해서, 모찌 도넛의 중독적인 탱글함을 처음 경험하기에 더없이 좋은 입문 맛입니다.',
          icon: '🍩',
        },
        {
          name: '우베',
          korean: 'Ube',
          description: '우베(자색 고구마)로 만든 선명한 보라색 모찌 도넛. 인스타 감성은 물론 맛까지 일품입니다. 우베 글레이즈는 은은하게 고소하고 바닐라 같은 단맛이 있어 쫄깃한 링과 환상적으로 어울립니다. 하와이에서 큰 사랑을 받으며 가장 많이 사진에 담기는 맛 중 하나입니다.',
          icon: '💜',
        },
        {
          name: '말차(녹차)',
          korean: 'Matcha',
          description: '고급 일본산 녹차 가루가 흙내음 같은 향과 은은한 쓴맛을 더해 달콤한 글레이즈와 아름답게 균형을 이룹니다. 모찌 도넛의 일본 뿌리를 떠올리게 하는 맛으로, 너무 달지 않은 디저트를 좋아하는 분들에게 인기입니다.',
          icon: '🍵',
        },
        {
          name: '딸기',
          korean: 'Strawberry',
          description: '진짜 딸기 풍미가 살아 있는 선명한 핑크 글레이즈로, 가장 달콤하고 사랑스러운 맛입니다. 과일 향이 가득하고 향긋하며 발랄한 맛은 아이들은 물론, 알록달록하고 베리 풍미가 살아 있는 쫄깃한 한 입을 좋아하는 누구에게나 사랑받습니다.',
          icon: '🍓',
        },
        {
          name: '코나 커피 글레이즈',
          korean: 'Kona',
          description: '하와이 섬의 시그니처 맛. 100% 코나 커피로 만든 글레이즈로 마무리한 모찌 도넛입니다. 진하고 부드러운 커피 풍미가 쫄깃한 링과 완벽하게 어우러지고, 코나 커피 한 잔과 곁들이면 더욱 환상적이죠. 도넛으로 맛보는 진정한 하와이의 맛입니다.',
          icon: '☕',
        },
      ],
    },
    whyHawaii: {
      title: '하와이에서 모찌 도넛이 인기 폭발인 이유',
      points: [
        {
          title: '모찌와 모찌코를 사랑하는 깊은 음식 문화',
          description: '하와이에는 모찌와 모찌코(찹쌀가루)를 사랑하는, 여러 세대에 걸친 깊은 문화가 있습니다. 새해 떡메치기부터 가족 모임의 단골 버터 모찌까지, 쫄깃한 쌀가루 식감은 이미 현지인의 삶에 사랑받는 일부입니다. 모찌 도넛은 그 사랑받는 식감에 완전히 새로운 형태를 입혔을 뿐입니다.',
        },
        {
          title: '다문화 아시아의 영향',
          description: '하와이의 음식 문화는 일본, 필리핀, 한국, 중국, 그리고 하와이 원주민의 전통이 어우러져 있습니다. 우베, 말차, 흑임자 같은 재료도 이곳에선 아주 자연스럽죠. 일본에서 태어나 섬의 인기 맛으로 옷을 갈아입은 모찌 도넛은 하와이의 다문화 디저트 문화에 완벽하게 녹아듭니다.',
        },
        {
          title: '인스타 감성의 알록달록한 맛',
          description: '모찌 도넛 한 판만큼 사진이 잘 받는 디저트도 드뭅니다. 선명한 우베 보라색, 말차 초록색, 딸기 핑크색, 황금빛 코나 커피 글레이즈는 절로 카메라를 들게 만듭니다. 관광객들은 첫 쫄깃한 한 입을 베어 물기 전, 알록달록한 폰데링을 나누며 사진 찍는 것을 즐깁니다.',
        },
        {
          title: '섬에 딱 어울리는 완벽한 쫄깃 간식',
          description: '모찌 도넛은 다른 튀긴 간식보다 가볍고 덜 느끼하며, 그 만족스러운 쫄깃함 덕분에 언제 먹어도 특별한 날의 간식처럼 느껴집니다. 여유롭고 나에게 작은 보상을 주는 하와이 섬의 분위기와 어우러져, 손에 들고 다니며 먹기에 딱 좋은 디저트입니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 모찌 도넛 먹는 곳',
      intro: '와이키키에서 갓 만든 쫄깃한 모찌 도넛을 찾고 계시다면, 코나커피도넛으로 오세요.',
      shop: {
        name: 'Kona Coffee Donut (코나커피도넛)',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키의 중심, 칼라카우아 애비뉴에 위치한 코나커피도넛은 갓 만든 수제 쌀가루 모찌 도넛을 24가지 로테이션 맛으로 제공합니다. 클래식 글레이즈부터 우베, 말차, 딸기, 그리고 시그니처 코나 커피 글레이즈까지. 저희 모찌 도넛의 특별한 점은? 모든 쫄깃한 폰데링을 진하고 부드러운 코나 커피와 함께 즐길 수 있다는 것입니다.',
        highlights: [
          '24가지 로테이션 맛의 갓 만든 쌀가루 모찌 도넛',
          '100% 코나 커피와의 퍼펙트 페어링',
          '와이키키 비치에서 도보 거리',
          '매일 영업 — 쫄깃한 오후 간식으로 딱!',
        ],
      },
      cta: '모찌 도넛 메뉴 보기',
    },
    howToEat: {
      title: '모찌 도넛 맛있게 즐기는 법',
      subtitle: '완벽한 쫄깃 식감을 위한 팁',
      tips: [
        {
          title: '갓 만든 당일에 드세요',
          description: '모찌 도넛은 만든 그날이 단연 최고입니다. 쫄깃한 탄력이 살아 있고 글레이즈도 윤기가 흐르죠. 쌀가루 식감은 시간이 지나면 단단해지니, 내일까지 두지 마세요. 갓 만든 것을 집어 들고 특유의 탱글함이 살아 있을 때 즐기세요.',
        },
        {
          title: '링을 뜯어서 나눠 드세요',
          description: '폰데링 모양은 보기 좋으라고만 있는 게 아닙니다. 8개의 연결된 반죽 볼은 뜯어서 나눌 수 있게 만들어져, 함께 먹기에 안성맞춤이죠. 친구에게 볼 하나를 건네거나 여러 맛을 함께 맛보세요. 즐겁고 다 같이 어울리는 먹는 방법입니다.',
        },
        {
          title: '코나 커피와 곁들이세요',
          description: '모찌 도넛의 쫄깃한 단맛은 진한 코나 커피와 환상의 궁합입니다. 부드럽고 은은하게 고소한 커피가 글레이즈의 단맛을 잡아주고, 클래식, 말차, 그리고 물론 코나 커피 글레이즈와도 멋지게 어우러집니다.',
        },
        {
          title: '알록달록한 믹스 박스를 시도해 보세요',
          description: '고민되시나요? 그럴 땐 다 드세요. 24가지 로테이션 맛이 있어, 믹스 박스로 우베, 말차, 딸기, 코나 커피 등을 한자리에서 맛볼 수 있습니다. 인생 맛을 찾는 가장 즐거운 방법이자, 사진 찍기에도 더없이 좋습니다.',
        },
      ],
    },
    faq: {
      title: '모찌 도넛에 대해 자주 묻는 질문',
      items: [
        {
          question: '모찌 도넛은 무엇으로 만드나요?',
          answer: '모찌 도넛은 밀가루 대신 주로 찹쌀가루(모찌코)나 타피오카 전분으로 만들며, 바로 이것이 특유의 쫄깃하고 탱글탱글한 식감을 만들어냅니다. 반죽을 상징적인 폰데링 — 8개의 연결된 볼 — 모양으로 빚어 튀긴 뒤, 클래식, 우베, 말차, 딸기, 코나 커피 같은 얇은 글레이즈로 마무리합니다.',
        },
        {
          question: '폰데링이 무엇인가요?',
          answer: '폰데링은 모찌 도넛의 상징적인 모양입니다. 8개의 연결된 반죽 볼로 이루어진 링으로, 하나씩 뜯어서 나눠 먹을 수 있습니다. 2003년 일본 체인점 미스터도넛이 처음 선보였으며, 그 이름과 쫄깃한 식감은 브라질의 타피오카 치즈빵 "팡 지 케이주"에서 영감을 받았습니다. 오늘날 폰데링은 전 세계 모찌 도넛의 대명사가 되었습니다.',
        },
        {
          question: '모찌 도넛과 일반 도넛의 차이는 무엇인가요?',
          answer: '가장 큰 차이는 가루입니다. 일반 도넛은 밀가루로 만들어 부드럽고 케이크 같거나 폭신한 식감을 냅니다. 모찌 도넛은 찹쌀가루와 타피오카 전분을 사용해 떡에 가까운 쫄깃하고 탱글탱글한 "QQ" 식감을 만들죠. 또한 모찌 도넛은 구멍이 하나 뚫린 링이 아니라, 8개의 볼이 연결된 폰데링 모양입니다.',
        },
        {
          question: '모찌 도넛은 글루텐 프리인가요?',
          answer: '반드시 그렇지는 않습니다. 모찌 도넛은 밀가루가 아닌 쌀가루와 타피오카 전분으로 만들지만, 공용 튀김기에서 튀기거나 밀 기반 글레이즈나 재료를 사용하는 경우가 많아 글루텐 프리가 보장되지는 않습니다. 글루텐 알레르기나 셀리악병이 있으시다면, 주문 전에 반드시 매장에 교차 오염과 구체적인 재료를 문의하세요.',
        },
        {
          question: '와이키키에서 갓 만든 모찌 도넛은 어디서 살 수 있나요?',
          answer: '와이키키 중심부 2142 Kalakaua Ave에 위치한 코나커피도넛에서는 갓 만든 수제 쌀가루 모찌 도넛을 24가지 로테이션 맛으로, 100% 코나 커피와 함께 즐기실 수 있습니다. 매일 영업하며 와이키키 비치에서 도보 거리에 있어, 쫄깃한 간식을 즐기기에 완벽한 곳입니다.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 모찌 도넛을 즐기세요',
      text: '2142 Kalakaua Ave 코나커피도넛에서 갓 만든 쫄깃한 모찌 도넛 24가지와 프리미엄 코나 커피를 맛보세요.',
      menuButton: '모찌 도넛 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '모찌 도넛이란?',
    },
  },
  zh: {
    hero: {
      title: '什么是麻糬甜甜圈？',
      subtitle: 'Q弹、可掰开分享的波提甜甜圈完全指南',
      updated: '2026年6月更新',
      readTime: '阅读约8分钟',
    },
    definition: {
      title: '什么是麻糬甜甜圈？',
      text: '<strong>麻糬甜甜圈</strong>是用<strong>糯米粉（麻糬粉）和／或木薯淀粉</strong>制成的Q弹甜甜圈，拥有标志性的弹牙、有嚼劲的<strong>"QQ"口感</strong>——外脆内软糯。最具代表性的造型是<strong>"波提（pon-de-ring）"：八颗相连的面团球</strong>，可以一颗颗掰开分享。与用小麦粉制作的蛋糕甜甜圈或酵母甜甜圈不同，正是米粉基底赋予了麻糬甜甜圈那令人上瘾、宛如麻糬般的嚼劲。',
    },
    history: {
      title: '麻糬甜甜圈的历史',
      subtitle: '从日本的波提到夏威夷的麻糬甜甜圈热潮',
      p1: '麻糬甜甜圈的根源在日本。2003年，日本连锁品牌<strong>Mister Donut（미스터도넛）</strong>推出了<strong>"波提（ポン・デ・リング，Pon de Ring）"</strong>——一种由相连面团球组成、口感独特弹牙的环形甜甜圈。它的名字和造型灵感来自<strong>巴西木薯芝士面包（pão de queijo）</strong>，这种Q弹的"波提"口感很快风靡全日本。',
      p2: '夏威夷是麻糬甜甜圈扎根的完美之地。这里的人们深爱<strong>麻糬和麻糬粉（糯米粉）</strong>——从新年捣麻糬到每次聚餐必备的奶油麻糬。当地烘焙师早已懂得米粉嚼劲的魅力，因此将它做成甜甜圈与其说是新奇，不如说是顺理成章。',
      p3: '过去十年间，<strong>麻糬甜甜圈热潮</strong>席卷了夏威夷乃至美国本土。从备受喜爱的本地老字号Liliha Bakery，到餐车、农夫市集和亚裔美式烘焙坊，色彩缤纷的麻糬甜甜圈环随处可见——常常几小时内售罄，并在社交媒体上收获数百万次观看。',
      p4: '真正让麻糬甜甜圈与众不同的，是<strong>米粉特有的嚼劲</strong>。经典蛋糕甜甜圈柔软易碎，酵母甜甜圈轻盈蓬松，而麻糬甜甜圈则完全不同——弹牙、有韧性、扎实而令人满足，口感比任何西式甜甜圈都更接近麻糬。正是这独一无二的口感，让它在夏威夷甜品界占据了不可撼动的地位。',
    },
    comparison: {
      title: '麻糬甜甜圈 vs 经典甜甜圈 vs 马拉萨达',
      subtitle: '麻糬甜甜圈有什么不同？',
      intro: '麻糬甜甜圈、美式经典甜甜圈和葡萄牙—夏威夷的马拉萨达都是油炸面团点心，但相似之处仅止于此。以下是详细对比：',
      headers: {
        feature: '特点',
        bingsu: '麻糬甜甜圈',
        shavedIce: '经典甜甜圈',
        kakigori: '马拉萨达',
      },
      rows: [
        {
          feature: '主要用粉',
          bingsu: '米粉与木薯淀粉',
          shavedIce: '小麦粉',
          kakigori: '富含鸡蛋的酵母小麦面团',
        },
        {
          feature: '口感',
          bingsu: 'Q弹有嚼劲、弹牙（QQ）',
          shavedIce: '柔软、像蛋糕、易碎',
          kakigori: '内部蓬松，外层糖壳酥脆',
        },
        {
          feature: '造型',
          bingsu: '波提：8颗相连的球',
          shavedIce: '中间有孔的环形',
          kakigori: '圆形，无孔',
        },
        {
          feature: '糖霜／外层',
          bingsu: '缤纷口味的薄糖霜',
          shavedIce: '糖霜、糖衣或彩针',
          kakigori: '裹原味或李咸梅糖',
        },
        {
          feature: '起源',
          bingsu: '日本 → 夏威夷',
          shavedIce: '美国',
          kakigori: '葡萄牙 → 夏威夷',
        },
        {
          feature: '保质期',
          bingsu: '当天最佳——新鲜时Q弹',
          shavedIce: '可保持柔软一两天',
          kakigori: '趁热吃最佳，数小时内',
        },
      ],
      note: '最具标志性的特征就是米粉的嚼劲。经典甜甜圈靠小麦粉做出柔软的组织，马拉萨达靠酵母做出蓬松的口感，而麻糬甜甜圈则用糯米粉和木薯淀粉创造出别处绝对吃不到的Q弹、弹牙独特口感。',
    },
    types: {
      title: '人气麻糬甜甜圈口味',
      subtitle: '从经典糖霜到岛屿风味科纳咖啡',
      items: [
        {
          name: '经典糖霜',
          korean: 'Classic',
          description: '让嚼劲成为主角的日常人气款。将波提浸入薄薄一层光亮的香草糖霜，凝固成细腻的脆壳。简单香甜，是认识麻糬甜甜圈那令人上瘾Q弹米粉口感的最佳入门之选。',
          icon: '🍩',
        },
        {
          name: '紫薯（Ube）',
          korean: 'Ube',
          description: '用紫薯（ube）制成，这款鲜艳紫色的麻糬甜甜圈既上镜又美味。紫薯糖霜带来温和、坚果般的香草甜味，与Q弹的圆环完美契合。它是夏威夷的人气之选，也是最常被拍照的口味之一。',
          icon: '💜',
        },
        {
          name: '抹茶',
          korean: 'Matcha',
          description: '优质日本绿茶粉赋予这款麻糬甜甜圈醇厚的香气和淡淡的苦味，与甜糖霜形成美妙的平衡。它呼应了麻糬甜甜圈的日本根源，深受喜欢甜度较低甜点的人喜爱。',
          icon: '🍵',
        },
        {
          name: '草莓',
          korean: 'Strawberry',
          description: '带有真实草莓风味的鲜艳粉色糖霜，是其中最甜美、最俏皮的一款。果香浓郁、芬芳怡人、色彩明快，深受孩子们以及所有喜欢在Q弹麻糬底上享受缤纷莓果一口的人喜爱。',
          icon: '🍓',
        },
        {
          name: '科纳咖啡糖霜',
          korean: 'Kona',
          description: '我们的岛屿招牌：以100%科纳咖啡制成的糖霜收尾的麻糬甜甜圈。浓郁顺滑的咖啡风味与Q弹的圆环完美搭配——若再配上一杯科纳咖啡更是绝妙。这是甜甜圈形态的纯正夏威夷风味。',
          icon: '☕',
        },
      ],
    },
    whyHawaii: {
      title: '为什么麻糬甜甜圈在夏威夷如此火爆',
      points: [
        {
          title: '深厚的麻糬与麻糬粉饮食文化',
          description: '夏威夷拥有世代相传、对麻糬和麻糬粉（糯米粉）的热爱。从新年捣麻糬到每次家庭聚会必备的奶油麻糬，Q弹的米粉口感早已是当地生活中珍视的一部分。麻糬甜甜圈只不过是为这份深受喜爱的嚼劲赋予了全新的形态。',
        },
        {
          title: '多元的亚洲文化影响',
          description: '夏威夷的美食融合了日本、菲律宾、韩国、中国和夏威夷原住民的传统。紫薯、抹茶、黑芝麻等食材在这里毫无违和感。诞生于日本、又融入岛屿人气风味的麻糬甜甜圈，完美契合夏威夷多元文化的甜品版图。',
        },
        {
          title: '上镜的缤纷口味',
          description: '很少有甜点能像一盘麻糬甜甜圈那样上镜。鲜艳的紫薯紫、抹茶绿、草莓粉和金黄的科纳咖啡糖霜，拼出令人无法抗拒的画面——游客们总爱在咬下第一口Q弹之前，先分享这一圈圈缤纷的波提拍照留念。',
        },
        {
          title: '完美契合岛屿的Q弹小食',
          description: '麻糬甜甜圈比许多油炸点心更轻盈、更不油腻，那令人满足的嚼劲让它即便日常享用也仿佛是特别时刻的零食。配上夏威夷悠闲、犒劳自己的岛屿节奏，它正是随手带走的理想甜点。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基哪里可以吃到麻糬甜甜圈',
      intro: '如果你在威基基想吃新鲜Q弹的麻糬甜甜圈，科纳咖啡甜甜圈是你的首选。',
      shop: {
        name: 'Kona Coffee Donut（科纳咖啡甜甜圈）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '位于威基基卡拉卡瓦大道中心地段，科纳咖啡甜甜圈提供新鲜手作的米粉麻糬甜甜圈，共有24种轮换口味——从经典糖霜到紫薯、抹茶、草莓，以及招牌科纳咖啡糖霜。我们的麻糬甜甜圈有何特别之处？每一个Q弹的波提都搭配浓郁顺滑的科纳咖啡。',
        highlights: [
          '24种轮换口味的新鲜米粉麻糬甜甜圈',
          '与100%科纳咖啡完美搭配',
          '距威基基海滩步行可达',
          '每天营业——午后Q弹甜点的最佳选择',
        ],
      },
      cta: '查看麻糬甜甜圈菜单',
    },
    howToEat: {
      title: '如何享用麻糬甜甜圈',
      subtitle: '完美Q弹一口的小贴士',
      tips: [
        {
          title: '当天新鲜吃',
          description: '麻糬甜甜圈在制作当天最美味，此时嚼劲弹牙、糖霜光亮。米粉口感会随时间变硬，所以别留到明天——拿一个新鲜的，趁那标志性的弹牙口感还在时尽情享用吧。',
        },
        {
          title: '掰开圆环一起分享',
          description: '波提造型不只是为了好看。那八颗相连的面团球本就是为掰开而生，让麻糬甜甜圈非常适合分享。递一颗给朋友，或者一起品尝多种口味——这是既有趣又能拉近彼此的享用方式。',
        },
        {
          title: '搭配科纳咖啡',
          description: '麻糬甜甜圈Q弹的甜味与一杯浓郁的科纳咖啡是绝配。顺滑、略带坚果香的咖啡能化解糖霜的甜腻，与经典、抹茶，当然还有科纳咖啡糖霜都搭配得相得益彰。',
        },
        {
          title: '试试缤纷混合礼盒',
          description: '选择困难？那就全都要。有24种轮换口味，混合礼盒让你一次就能品尝紫薯、抹茶、草莓、科纳咖啡等等。这是发现你最爱口味最有趣的方式，拍照效果也无可挑剔。',
        },
      ],
    },
    faq: {
      title: '关于麻糬甜甜圈的常见问题',
      items: [
        {
          question: '麻糬甜甜圈是用什么做的？',
          answer: '麻糬甜甜圈主要用糯米粉（麻糬粉）和／或木薯淀粉制成，而非小麦粉，这正是它标志性Q弹、弹牙口感的来源。面团被塑成标志性的波提造型——八颗相连的球——再油炸，最后裹上经典、紫薯、抹茶、草莓或科纳咖啡等口味的薄糖霜。',
        },
        {
          question: '什么是波提（pon-de-ring）？',
          answer: '波提是麻糬甜甜圈的标志性造型：由八颗相连的面团球组成的圆环，可以一颗颗掰开分享。它由日本连锁品牌Mister Donut于2003年推出，名字和Q弹口感灵感来自巴西木薯芝士面包（pão de queijo）。如今，波提已成为全球麻糬甜甜圈的代名词。',
        },
        {
          question: '麻糬甜甜圈和普通甜甜圈有什么区别？',
          answer: '最大的区别在于用粉。普通甜甜圈用小麦粉制作，口感柔软、像蛋糕或蓬松。麻糬甜甜圈则用糯米粉和木薯淀粉，造就更接近麻糬的Q弹、弹牙"QQ"口感。此外，麻糬甜甜圈是八颗相连球组成的波提造型，而非中间带孔的单一圆环。',
        },
        {
          question: '麻糬甜甜圈是无麸质的吗？',
          answer: '不一定。虽然麻糬甜甜圈用米粉和木薯淀粉而非小麦粉制作，但它们往往在共用油锅中油炸，或可能使用含小麦的糖霜或配料，因此不保证无麸质。如果你有麸质过敏或乳糜泻，点单前请务必向店家询问交叉污染情况和具体配料。',
        },
        {
          question: '在威基基哪里能买到新鲜的麻糬甜甜圈？',
          answer: '位于威基基中心地带2142 Kalakaua Ave的科纳咖啡甜甜圈提供新鲜手作的米粉麻糬甜甜圈，共24种轮换口味，并搭配100%科纳咖啡。我们每天营业，距威基基海滩步行可达——是享用Q弹甜点的完美去处。',
        },
      ],
    },
    cta: {
      title: '来威基基品尝麻糬甜甜圈',
      text: '前往2142 Kalakaua Ave的科纳咖啡甜甜圈，品尝24种新鲜Q弹的麻糬甜甜圈，搭配优质科纳咖啡。',
      menuButton: '查看麻糬甜甜圈菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '什么是麻糬甜甜圈？',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What is a Mochi Donut? The Complete Guide to the Chewy Pon-de-Ring Donut',
  description: 'Learn everything about mochi donuts — the chewy rice-flour donut with the iconic pon-de-ring shape. History, flavors, how they compare to classic donuts and malasadas, and where to find them in Waikiki.',
  image: 'https://www.konacoffeedonut.com/images/blog/what-is-a-mochi-donut.jpeg',
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
    '@id': 'https://www.konacoffeedonut.com/en/blog/what-is-a-mochi-donut',
  },
  keywords: 'mochi donut, what is a mochi donut, pon de ring, rice flour donut, mochi donut waikiki, mochi donut hawaii',
  wordCount: 1300,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a mochi donut made of?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mochi donut is made primarily from glutinous rice flour (mochiko) and/or tapioca starch instead of wheat flour, which is what gives it that signature chewy, bouncy texture. The dough is shaped into the iconic pon-de-ring — eight connected balls — then fried and finished with a thin glaze in flavors like classic, ube, matcha, strawberry, or Kona coffee.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a pon-de-ring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A pon-de-ring is the iconic mochi donut shape: a ring made of eight connected dough balls that you can pull apart and share. It was introduced by the Japanese chain Mister Donut in 2003, with its name and chewy texture inspired by pão de queijo, the Brazilian tapioca cheese bread. Today the pon-de-ring is the signature look of mochi donuts everywhere.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the difference between a mochi donut and a regular donut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The biggest difference is the flour. A regular donut is made with wheat flour, giving it a soft, cakey, or airy texture. A mochi donut uses glutinous rice flour and tapioca starch, creating a chewy, stretchy, bouncy "QQ" bite that is closer to mochi. Mochi donuts are also shaped as a pon-de-ring of eight connected balls rather than a single ring with a hole.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are mochi donuts gluten-free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. While mochi donuts are made with rice flour and tapioca starch rather than wheat flour, they are often fried in shared fryers and may use wheat-based glazes or ingredients, so they are not guaranteed to be gluten-free. If you have a gluten allergy or celiac disease, always ask the shop about cross-contamination and specific ingredients before ordering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I get fresh mochi donuts in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut at 2142 Kalakaua Ave in the heart of Waikiki serves fresh, hand-made rice-flour mochi donuts in 24 rotating flavors, paired with 100% Kona coffee. We are open daily and within walking distance of Waikiki Beach — the perfect spot to grab a chewy treat.',
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

export default function WhatIsAMochiDonutPage() {
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
          src="/images/blog/what-is-a-mochi-donut.jpeg"
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

        {/* History of Mochi Donut */}
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

        {/* Types of Mochi Donut */}
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

        {/* Why Mochi Donuts are Huge in Hawaii */}
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

        {/* Where to Get Mochi Donuts in Waikiki */}
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
                href={`/${locale}/menu/mochi-donuts`}
                className="inline-block bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-sky-100 transition-colors"
              >
                {t.whereToGet.cta}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* How to Eat Mochi Donut */}
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
              href={`/${locale}/blog/best-mochi-donuts-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 font-semibold transition-colors"
            >
              → Best Mochi Donuts in Waikiki
            </Link>
            <Link
              href={`/${locale}/blog/mochi-donut-flavors-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Mochi Donut Flavors
            </Link>
            <Link
              href={`/${locale}/blog/ube-mochi-donut-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Ube Mochi Donut
            </Link>
            <Link
              href={`/${locale}/menu/mochi-donuts`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Mochi Donut Menu
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
                  href={`/${locale}/menu/mochi-donuts`}
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
