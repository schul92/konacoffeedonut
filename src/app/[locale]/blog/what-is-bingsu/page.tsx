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
      title: 'What is Bingsu?',
      subtitle: 'The Complete Guide to Korea\'s Iconic Shaved Ice Dessert',
      updated: 'Updated April 2026',
      readTime: '8 min read',
    },
    definition: {
      title: 'What is Bingsu?',
      text: '<strong>Bingsu (빙수)</strong> is a <strong>Korean shaved ice dessert</strong> made from finely shaved milk ice topped with sweet red beans, condensed milk, rice cakes, fruits, and other toppings. Unlike regular shaved ice, bingsu uses <strong>ultra-thin, snow-like ice flakes</strong> that melt on your tongue, creating a creamy, almost ice-cream-like texture. It is <strong>Korea\'s most beloved summer dessert</strong>, enjoyed by millions every year.',
    },
    history: {
      title: 'The History of Bingsu',
      subtitle: 'From Joseon Dynasty Ice Houses to Modern Cafe Culture',
      p1: 'The origins of bingsu trace back to Korea\'s Joseon Dynasty (1392-1897), when ice was a precious luxury reserved for royalty and the aristocratic elite. The government operated special ice storage warehouses called <strong>빙고 (binggo)</strong>, built along rivers to harvest and preserve natural ice through the winter months. These ice houses were so important that they were managed by dedicated government offices, and distributing ice was considered a royal privilege.',
      p2: 'The earliest form of bingsu was simple: shaved ice topped with red bean paste (pat, 팥). This humble combination gave rise to the name <strong>patbingsu (팥빙수)</strong>, which literally translates to "red bean shaved ice." Throughout the Japanese colonial period and into the mid-20th century, patbingsu became widely available at street stalls and small shops across Korea.',
      p3: 'The 1980s and 1990s brought a bingsu revolution. Korean cafes and franchise chains began experimenting with premium ingredients — fresh fruit, condensed milk, injeolmi (rice cake coated in soybean powder), cheesecake, and even Oreo cookies. The ice itself evolved from coarsely shaved blocks to ultra-fine milk ice, creating the signature snow-like texture modern bingsu is known for.',
      p4: 'Today, bingsu has become a global phenomenon. The Korean Wave (Hallyu) carried bingsu culture to Japan, China, Southeast Asia, and beyond. Premium bingsu cafes now operate in major cities worldwide, and the dessert has become a symbol of Korean culinary innovation — transforming a simple ice treat into an Instagram-worthy art form.',
    },
    comparison: {
      title: 'Bingsu vs Shaved Ice vs Kakigori',
      subtitle: 'What Makes Bingsu Different?',
      intro: 'While bingsu, American shaved ice, and Japanese kakigori all start with frozen water, the similarities end there. Here\'s how they compare:',
      headers: {
        feature: 'Feature',
        bingsu: 'Bingsu (Korea)',
        shavedIce: 'Shaved Ice (USA)',
        kakigori: 'Kakigori (Japan)',
      },
      rows: [
        {
          feature: 'Ice Type',
          bingsu: 'Ultra-fine milk ice flakes',
          shavedIce: 'Coarsely shaved plain ice',
          kakigori: 'Finely shaved plain ice',
        },
        {
          feature: 'Base',
          bingsu: 'Frozen milk or sweet base',
          shavedIce: 'Plain water ice',
          kakigori: 'Plain water ice (some use milk)',
        },
        {
          feature: 'Texture',
          bingsu: 'Snow-like, creamy, melts on tongue',
          shavedIce: 'Crunchy, icy crystals',
          kakigori: 'Fluffy, light, powdery',
        },
        {
          feature: 'Toppings',
          bingsu: 'Red beans, rice cakes, fruits, condensed milk, cookies',
          shavedIce: 'Flavored syrups, gummy bears, li hing mui',
          kakigori: 'Matcha syrup, condensed milk, mochi, azuki beans',
        },
        {
          feature: 'Serving Style',
          bingsu: 'Large bowl, meant for sharing',
          shavedIce: 'Individual cup or cone',
          kakigori: 'Individual bowl or cup',
        },
        {
          feature: 'Origin',
          bingsu: 'Korea (Joseon Dynasty)',
          shavedIce: 'USA (Hawaiian tradition)',
          kakigori: 'Japan (Heian period)',
        },
      ],
      note: 'The key difference is that bingsu uses frozen milk rather than plain water, which gives it a richer, creamier taste and the distinctive snow-like texture that sets it apart from other shaved ice desserts around the world.',
    },
    types: {
      title: 'Types of Bingsu',
      subtitle: 'From Classic Red Bean to Creative Modern Flavors',
      items: [
        {
          name: 'Patbingsu (Classic Red Bean)',
          korean: '팥빙수',
          description: 'The original and most traditional variety. A generous mound of finely shaved milk ice is topped with sweet red beans (pat), chewy rice cakes (tteok), and a drizzle of condensed milk. Often garnished with misugaru (roasted grain powder) and ground nuts. This is the bingsu that started it all — comforting, nostalgic, and timeless.',
          icon: '🫘',
        },
        {
          name: 'Injeolmi Bingsu',
          korean: '인절미빙수',
          description: 'Named after the popular Korean rice cake coated in roasted soybean powder (konggomul). The shaved milk ice is topped with cubes of soft, chewy injeolmi rice cakes, a generous dusting of nutty soybean powder, and condensed milk. The combination of cold, creamy ice with warm, earthy soybean flavors makes this a beloved favorite at Korean cafes.',
          icon: '🍡',
        },
        {
          name: 'Fruit Bingsu',
          korean: '과일빙수',
          description: 'A refreshing take featuring seasonal fresh fruits — mango, strawberry, watermelon, melon, or mixed tropical fruits piled high on shaved ice. Often accompanied by a scoop of vanilla ice cream and a drizzle of fruit syrup or condensed milk. Mango bingsu and strawberry bingsu are especially popular during summer.',
          icon: '🍓',
        },
        {
          name: 'Oreo / Chocolate Bingsu',
          korean: '오레오빙수 / 초코빙수',
          description: 'A modern crowd-pleaser that layers crushed Oreo cookies, chocolate syrup, brownie pieces, and chocolate ice cream over milk-shaved ice. Sometimes topped with whipped cream and chocolate shavings. This indulgent variety is especially popular with younger generations and those who prefer rich, decadent flavors.',
          icon: '🍫',
        },
        {
          name: 'Matcha (Green Tea) Bingsu',
          korean: '녹차빙수',
          description: 'A fusion creation that has become hugely popular across East Asia. Premium matcha powder is folded into the shaved ice or dusted generously on top, accompanied by red bean paste, mochi, and sometimes a scoop of green tea ice cream. The slight bitterness of matcha beautifully balances the sweetness of the toppings.',
          icon: '🍵',
        },
      ],
    },
    whyHawaii: {
      title: 'Why Bingsu is Perfect for Hawaii',
      points: [
        {
          title: 'Tropical Weather Year-Round',
          description: 'Hawaii\'s warm climate makes icy desserts a year-round craving, not just a summer treat. While bingsu is seasonal in Korea (typically May through September), in Hawaii you can enjoy it 365 days a year. The tropical heat makes every spoonful even more refreshing.',
        },
        {
          title: 'Korean Food Culture in Hawaii',
          description: 'Hawaii has one of the largest Korean-American communities in the United States. Korean food culture runs deep in the islands — from plate lunch Korean BBQ to kimchi at every grocery store. Bingsu fits naturally into Hawaii\'s diverse food landscape, where Asian flavors have been part of local culture for generations.',
        },
        {
          title: 'The K-Wave Connection',
          description: 'The global Korean Wave (Hallyu) has made Korean culture more popular than ever in Hawaii. From K-pop and K-dramas to Korean skincare and food, visitors from Japan, China, and across Asia come to Hawaii already familiar with bingsu. For many tourists, trying authentic bingsu in a tropical setting is the perfect vacation experience.',
        },
        {
          title: 'Hawaii\'s Shaved Ice Tradition',
          description: 'Hawaii already has a deep love for shaved ice — it\'s practically a state treasure. Local residents and visitors alike understand and appreciate the art of finely shaved frozen treats. Bingsu takes this familiar concept and elevates it with milk ice, premium toppings, and a shareable format that\'s perfect for families and groups.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Get Bingsu in Waikiki',
      intro: 'If you\'re craving authentic bingsu in Waikiki, Kona Coffee Donut is your destination.',
      shop: {
        name: 'Kona Coffee Donut',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Located in the heart of Waikiki on Kalakaua Avenue, Kona Coffee Donut serves Hawaiian-style bingsu made with fresh tropical fruits and premium milk ice. What makes our bingsu special? We pair it with authentic 100% Kona coffee from Honolulu Coffee — the perfect combination of icy sweetness and rich Hawaiian coffee.',
        highlights: [
          'Fresh fruit bingsu with tropical Hawaiian flavors',
          'Paired perfectly with premium 100% Kona coffee',
          'Walking distance from Waikiki Beach',
          'Open daily — perfect for an afternoon treat',
        ],
      },
      cta: 'View Our Bingsu Menu',
    },
    howToEat: {
      title: 'How to Eat Bingsu Like a Korean',
      subtitle: 'Tips for the Perfect Bingsu Experience',
      tips: [
        {
          title: 'Share with Friends',
          description: 'Bingsu is traditionally a shared dessert. In Korea, it\'s common to order one large bingsu for 2-3 people. The oversized portion is part of the fun — gather around the bowl with spoons and enjoy it together. It\'s a social experience as much as a food one.',
        },
        {
          title: 'Eat Quickly Before It Melts',
          description: 'The delicate milk ice flakes begin melting the moment they\'re served. Don\'t wait for the perfect photo — snap your picture quickly, then dig in. The best bingsu experience is when the ice is still fluffy and snow-like, before it turns into a milky soup.',
        },
        {
          title: 'Mix the Toppings In',
          description: 'Don\'t just eat from the top down. Use your spoon to gently fold the toppings into the shaved ice as you eat. This ensures every bite has a balanced mix of ice, red beans (or fruit), condensed milk, and other toppings. The flavors and textures combine perfectly when mixed.',
        },
        {
          title: 'Start from the Edges',
          description: 'The edges melt first, so start eating from the outside and work your way toward the center. This keeps the middle portion cold and fluffy for longer, giving you more time to enjoy the ideal texture.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About Bingsu',
      items: [
        {
          question: 'What does bingsu taste like?',
          answer: 'Bingsu tastes like a cross between ice cream and snow cones, but lighter and creamier. The milk ice base has a subtle sweetness, and the toppings add layers of flavor — from the earthy sweetness of red beans to the bright freshness of seasonal fruit. The texture is what sets it apart: fluffy, snow-like ice that melts on your tongue.',
        },
        {
          question: 'Is bingsu gluten-free?',
          answer: 'Traditional patbingsu with red beans, condensed milk, and rice cakes is generally gluten-free, as rice cakes (tteok) are made from rice flour. However, modern variations with Oreo cookies, brownies, or cereal toppings do contain gluten. Fruit bingsu is typically the safest gluten-free option. Always check with the restaurant about specific ingredients.',
        },
        {
          question: 'How many calories are in bingsu?',
          answer: 'A standard serving of patbingsu contains approximately 350-500 calories, depending on the size and toppings. Fruit bingsu tends to be lighter (around 250-350 calories), while chocolate or Oreo bingsu can range from 500-700 calories. Since bingsu is typically shared between 2-3 people, the per-person calorie count is quite reasonable.',
        },
        {
          question: 'What is the difference between bingsu and patbingsu?',
          answer: 'Patbingsu is a specific type of bingsu. "Pat" (팥) means red bean in Korean, so patbingsu specifically refers to shaved ice topped with sweet red beans. "Bingsu" (빙수) is the general term for all Korean shaved ice desserts, including fruit bingsu, injeolmi bingsu, chocolate bingsu, and more. Patbingsu is the original and most classic variety.',
        },
        {
          question: 'Can you make bingsu at home?',
          answer: 'Yes, you can make bingsu at home with a bingsu machine or a high-quality shaved ice maker that can produce fine, snow-like flakes. Freeze sweetened milk into blocks, then shave it thinly. Top with canned sweet red beans (available at Korean grocery stores), condensed milk, rice cakes, and fresh fruit. The key is getting the ice texture right — it should be powdery and fine, not chunky.',
        },
      ],
    },
    cta: {
      title: 'Try Bingsu in Waikiki',
      text: 'Visit Kona Coffee Donut at 2142 Kalakaua Ave and experience authentic Korean bingsu paired with premium Kona coffee.',
      menuButton: 'View Bingsu Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'What is Bingsu?',
    },
  },
  ja: {
    hero: {
      title: 'ビンス(빙수)とは？',
      subtitle: '韓国発・大人気かき氷デザート完全ガイド',
      updated: '2026年4月更新',
      readTime: '8分で読める',
    },
    definition: {
      title: 'ビンスとは？',
      text: '<strong>ビンス（빙수・ピンス）</strong>は、<strong>韓国発のかき氷デザート</strong>で、きめ細かく削ったミルク氷に小豆、練乳、餅、フルーツなどをトッピングしたものです。通常のかき氷と異なり、<strong>雪のような極薄のミルク氷</strong>を使用し、舌の上でとろけるクリーミーな食感が特徴です。<strong>韓国で最も愛される夏のデザート</strong>で、新大久保をはじめ日本でもK-フードトレンドとして大人気です。',
    },
    history: {
      title: 'ビンスの歴史',
      subtitle: '朝鮮王朝の氷庫から現代カフェ文化まで',
      p1: 'ビンスの起源は朝鮮王朝時代（1392-1897年）に遡ります。当時、氷は王族や貴族にのみ許された貴重な贅沢品でした。政府は<strong>「氷庫（빙고・ビンゴ）」</strong>と呼ばれる氷の貯蔵庫を川沿いに運営し、冬の間に天然氷を採取・保存していました。これらの氷庫は専門の役所が管理するほど重要で、氷の配布は王の特権とされていました。',
      p2: '最初のビンスはシンプルなもので、削った氷にあんこ（팥・パッ）をのせたものでした。この組み合わせが<strong>パッビンス（팥빙수）</strong>の名前の由来です。文字通り「小豆のかき氷」という意味です。日本統治時代から20世紀中頃にかけて、パッビンスは韓国中の屋台や小さな店で広く親しまれるようになりました。',
      p3: '1980年代から1990年代にかけてビンスは革命的な進化を遂げます。韓国のカフェやチェーン店が、新鮮なフルーツ、練乳、インジョルミ（きな粉餅）、チーズケーキ、オレオクッキーなどプレミアム食材を使った実験を始めました。氷自体も粗削りの氷から極細のミルク氷へと進化し、現代ビンスの特徴である雪のような食感が誕生しました。',
      p4: '現在、ビンスは世界的な現象となっています。韓流（ハリュ）がビンス文化を日本、中国、東南アジアへと運びました。特に日本では新大久保のコリアンタウンを中心にビンス専門店が続々とオープンし、K-フードブームの象徴的存在となっています。夏になると行列ができる人気ぶりで、韓国の食文化イノベーションの象徴として世界に広がり続けています。',
    },
    comparison: {
      title: 'ビンス vs かき氷 vs ハワイアンシェイブアイス',
      subtitle: 'ビンスはどう違う？',
      intro: 'ビンス、日本のかき氷、ハワイアンシェイブアイスはすべて氷を削ったデザートですが、その違いは明確です。比較してみましょう：',
      headers: {
        feature: '特徴',
        bingsu: 'ビンス（韓国）',
        shavedIce: 'シェイブアイス（アメリカ）',
        kakigori: 'かき氷（日本）',
      },
      rows: [
        {
          feature: '氷の種類',
          bingsu: '極細のミルク氷フレーク',
          shavedIce: '粗く削った普通の氷',
          kakigori: 'きめ細かく削った普通の氷',
        },
        {
          feature: 'ベース',
          bingsu: '冷凍ミルクまたは甘いベース',
          shavedIce: '普通の水の氷',
          kakigori: '普通の水の氷（ミルク使用もあり）',
        },
        {
          feature: '食感',
          bingsu: '雪のよう、クリーミー、舌でとろける',
          shavedIce: 'シャリシャリ、ジャリジャリ',
          kakigori: 'ふわふわ、軽い、パウダリー',
        },
        {
          feature: 'トッピング',
          bingsu: '小豆、餅、フルーツ、練乳、クッキー',
          shavedIce: 'フレーバーシロップ、グミ',
          kakigori: '抹茶シロップ、練乳、白玉、あずき',
        },
        {
          feature: '提供スタイル',
          bingsu: '大きなボウル、シェア向き',
          shavedIce: '個人用カップまたはコーン',
          kakigori: '個人用の器',
        },
        {
          feature: '起源',
          bingsu: '韓国（朝鮮王朝時代）',
          shavedIce: 'アメリカ（ハワイの伝統）',
          kakigori: '日本（平安時代）',
        },
      ],
      note: '最大の違いは、ビンスが普通の水ではなく冷凍ミルクを使用する点です。これにより、よりリッチでクリーミーな味わいと、世界の他のかき氷デザートとは一線を画す雪のような独特の食感が生まれます。',
    },
    types: {
      title: 'ビンスの種類',
      subtitle: '定番パッビンスから最新トレンドフレーバーまで',
      items: [
        {
          name: 'パッビンス（定番小豆）',
          korean: '팥빙수',
          description: '最も伝統的な定番メニュー。きめ細かく削ったミルク氷の上に、甘い小豆（パッ）、もちもちの餅（トッ）、練乳をたっぷりかけます。ミスガル（穀物粉）やナッツをトッピングすることも。すべてのビンスの原点であり、懐かしく心温まる味わいです。',
          icon: '🫘',
        },
        {
          name: 'インジョルミビンス',
          korean: '인절미빙수',
          description: 'きな粉をまぶした韓国の餅「インジョルミ」にちなんだ名前。ミルク氷の上に、柔らかくもちもちのインジョルミ餅、たっぷりの香ばしいきな粉、練乳をトッピング。冷たくクリーミーな氷と、温かみのあるきな粉の風味の組み合わせが韓国カフェの人気メニューです。',
          icon: '🍡',
        },
        {
          name: 'フルーツビンス',
          korean: '과일빙수',
          description: '季節のフレッシュフルーツをたっぷり使った爽やかなビンス。マンゴー、イチゴ、スイカ、メロン、ミックストロピカルフルーツなどが氷の上に山盛り。バニラアイスやフルーツシロップを添えることも。マンゴービンスとイチゴビンスが夏に特に人気です。',
          icon: '🍓',
        },
        {
          name: 'オレオ / チョコビンス',
          korean: '오레오빙수 / 초코빙수',
          description: '砕いたオレオクッキー、チョコレートシロップ、ブラウニー、チョコアイスをミルク氷の上に重ねた現代的な人気メニュー。ホイップクリームやチョコレートシェービングをトッピングすることも。若い世代やリッチな味が好きな方に特に人気です。',
          icon: '🍫',
        },
        {
          name: '抹茶（緑茶）ビンス',
          korean: '녹차빙수',
          description: '東アジア全体で大人気となった融合創作。高品質な抹茶パウダーを氷に混ぜるか、たっぷりと振りかけ、あんこ、白玉、時には抹茶アイスを添えます。抹茶のほのかな苦みがトッピングの甘さと美しく調和します。',
          icon: '🍵',
        },
      ],
    },
    whyHawaii: {
      title: 'なぜハワイでビンスが最高なのか',
      points: [
        {
          title: '年中暖かいトロピカルな気候',
          description: 'ハワイの温暖な気候は、氷のデザートを夏だけでなく一年中楽しめる環境です。韓国ではビンスは季節限定（通常5月～9月）ですが、ハワイでは365日楽しめます。トロピカルな暑さの中で食べるビンスは格別の爽やかさです。',
        },
        {
          title: 'ハワイの韓国食文化',
          description: 'ハワイはアメリカ最大級の韓国系コミュニティがあります。プレートランチの韓国BBQからスーパーのキムチまで、韓国の食文化はハワイに深く根付いています。ビンスはハワイの多様な食文化に自然にフィットし、アジアの味が何世代にもわたって地元文化の一部となっています。',
        },
        {
          title: 'K-ウェーブとの繋がり',
          description: '韓流（ハリュ）は、K-pop、K-ドラマ、韓国スキンケア、K-フードまで、ハワイでも韓国文化の人気を高めています。日本、中国、アジア各国からの観光客はすでにビンスをよく知っています。トロピカルな環境で本格ビンスを楽しむことは、最高のバケーション体験です。',
        },
        {
          title: 'ハワイのシェイブアイス文化',
          description: 'ハワイにはシェイブアイスを愛する深い文化があります。地元の人も観光客も、きめ細かい氷のデザートの素晴らしさを理解しています。ビンスはこの馴染みのあるコンセプトに、ミルク氷、プレミアムトッピング、家族やグループで楽しめるシェアスタイルを加えてさらにグレードアップさせます。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキでビンスを食べるなら',
      intro: 'ワイキキで本格ビンスを楽しむなら、コナコーヒードーナツへ。',
      shop: {
        name: 'Kona Coffee Donut（コナコーヒードーナツ）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心部、カラカウア通りに位置するコナコーヒードーナツは、新鮮なトロピカルフルーツとプレミアムミルク氷で作るハワイアンスタイルビンスを提供。私たちのビンスの特別なところは、ホノルルコーヒーの100%コナコーヒーとのペアリング。冷たいビンスの甘さと、芳醇なハワイアンコーヒーの組み合わせは最高です。',
        highlights: [
          'トロピカルハワイアンフレーバーのフルーツビンス',
          'プレミアム100%コナコーヒーとの完璧なペアリング',
          'ワイキキビーチから徒歩圏内',
          '毎日営業 — 午後のおやつに最適',
        ],
      },
      cta: 'ビンスメニューを見る',
    },
    howToEat: {
      title: '韓国式ビンスの食べ方',
      subtitle: '最高のビンス体験のためのコツ',
      tips: [
        {
          title: '友達とシェアしよう',
          description: 'ビンスは伝統的にシェアするデザートです。韓国では2〜3人で1つの大きなビンスを注文するのが一般的。大きなポーションはお楽しみの一部です。ボウルを囲んでスプーンを持ち、一緒に楽しみましょう。食べる楽しさだけでなく、コミュニケーションの場でもあります。',
        },
        {
          title: '溶ける前に素早く食べよう',
          description: '繊細なミルク氷は提供された瞬間から溶け始めます。完璧な写真を待たないで！素早く撮影したら、すぐに食べ始めましょう。氷がまだふわふわで雪のような状態が最高の食感です。ミルキーなスープになる前に楽しんでください。',
        },
        {
          title: 'トッピングを混ぜ込もう',
          description: '上からだけ食べないでください。スプーンを使って、食べながらトッピングをかき氷に優しく折り込みましょう。こうすることで、一口ごとに氷、小豆（またはフルーツ）、練乳、その他のトッピングがバランスよく味わえます。混ぜることで風味と食感が完璧に融合します。',
        },
        {
          title: '端から食べ始めよう',
          description: '端の方から先に溶けるので、外側から食べ始めて中心に向かって進みましょう。これにより中央部分が冷たくふわふわな状態を長く保てます。理想的な食感をより長く楽しめます。',
        },
      ],
    },
    faq: {
      title: 'ビンスに関するよくある質問',
      items: [
        {
          question: 'ビンスはどんな味ですか？',
          answer: 'ビンスはアイスクリームとかき氷の中間のような味ですが、より軽くクリーミーです。ミルク氷のベースにほんのりとした甘さがあり、トッピングが味に奥行きを加えます。小豆の素朴な甘さからフルーツの爽やかさまで。最大の特徴はその食感で、雪のようなふわふわの氷が舌の上でとろけます。',
        },
        {
          question: 'ビンスはグルテンフリーですか？',
          answer: '伝統的なパッビンスは、小豆、練乳、餅（米粉製のトッ）を使用しており、基本的にグルテンフリーです。ただし、オレオ、ブラウニー、シリアルなどを使ったモダンなバリエーションにはグルテンが含まれます。フルーツビンスが最も安全なグルテンフリーの選択肢です。',
        },
        {
          question: 'ビンスのカロリーはどのくらいですか？',
          answer: '標準的なパッビンスは1人前約350〜500カロリーです。フルーツビンスはやや軽め（約250〜350カロリー）、チョコレートやオレオビンスは500〜700カロリーになることも。通常2〜3人でシェアするため、一人当たりのカロリーはかなり控えめです。',
        },
        {
          question: 'ビンスとパッビンスの違いは何ですか？',
          answer: 'パッビンスはビンスの一種です。「パッ（팥）」は韓国語で小豆を意味するので、パッビンスは具体的に小豆トッピングのかき氷を指します。「ビンス（빙수）」は韓国のかき氷デザート全般の総称で、フルーツビンス、インジョルミビンス、チョコビンスなどすべてを含みます。',
        },
        {
          question: '自宅でビンスを作れますか？',
          answer: 'はい、ビンス専用マシンや高品質のかき氷器があれば作れます。甘いミルクをブロック状に凍らせ、薄く削ります。缶入りの甘い小豆（韓国食品店で入手可能）、練乳、餅、新鮮なフルーツをトッピング。ポイントは氷の食感で、ゴツゴツではなく粉雪のように細かくなければなりません。',
        },
      ],
    },
    cta: {
      title: 'ワイキキでビンスを楽しもう',
      text: '2142 Kalakaua Ave のコナコーヒードーナツで、本格韓国ビンスとプレミアムコナコーヒーを体験してください。',
      menuButton: 'ビンスメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'ビンスとは？',
    },
  },
  ko: {
    hero: {
      title: '빙수란 무엇인가?',
      subtitle: '한국 대표 여름 디저트, 빙수의 모든 것 완벽 가이드',
      updated: '2026년 4월 업데이트',
      readTime: '8분 소요',
    },
    definition: {
      title: '빙수란?',
      text: '<strong>빙수(氷水)</strong>는 곱게 간 <strong>우유 얼음 위에 단팥, 연유, 떡, 과일 등 다양한 토핑</strong>을 올린 <strong>한국의 대표적인 여름 디저트</strong>입니다. 일반 빙수와 달리 <strong>눈꽃처럼 고운 우유 얼음</strong>을 사용하여 입안에서 살살 녹는 크리미한 식감이 특징입니다. 매년 여름 수백만 명의 한국인이 즐기는 <strong>대한민국 국민 디저트</strong>로, 전 세계적으로도 K-푸드의 대표 주자로 사랑받고 있습니다.',
    },
    history: {
      title: '빙수의 역사',
      subtitle: '조선시대 빙고에서 현대 카페 문화까지',
      p1: '빙수의 역사는 조선시대(1392-1897)까지 거슬러 올라갑니다. 당시 얼음은 왕족과 양반 계층만 누릴 수 있는 귀한 사치품이었습니다. 조선 정부는 <strong>「빙고(氷庫)」</strong>라 불리는 얼음 저장고를 강가에 설치하여 겨울에 채취한 천연 얼음을 보관했습니다. 빙고는 전담 관청이 관리할 정도로 중요했으며, 얼음의 분배는 왕의 특권으로 여겨졌습니다. 서빙고(西氷庫)와 동빙고(東氷庫)는 한양의 대표적인 빙고로, 그 이름이 지금도 서울의 지명으로 남아 있습니다.',
      p2: '초기 빙수의 형태는 단순했습니다. 잘게 간 얼음 위에 팥을 올린 것이 전부였죠. 이 소박한 조합에서 <strong>팥빙수(팥+氷水)</strong>라는 이름이 탄생했습니다. 말 그대로 "팥을 올린 얼음물"이라는 뜻입니다. 일제강점기를 거치며 빙수는 길거리 가판대와 작은 가게에서 대중화되었고, 해방 이후에는 여름이면 누구나 즐기는 국민 간식으로 자리 잡았습니다.',
      p3: '1980~90년대, 빙수는 혁명적인 변화를 겪습니다. 한국의 카페와 프랜차이즈들이 신선한 과일, 연유, 인절미, 치즈케이크, 오레오 쿠키 등 프리미엄 재료를 활용한 새로운 빙수를 선보이기 시작했습니다. 얼음 자체도 투박하게 간 얼음에서 극세 우유 얼음으로 진화하여, 현대 빙수의 상징인 눈꽃 같은 식감이 탄생했습니다. 설빙, 카페베네 등 빙수 전문 프랜차이즈의 등장은 빙수 문화를 한 단계 끌어올렸습니다.',
      p4: '오늘날 빙수는 한류(韓流)를 타고 세계적인 디저트가 되었습니다. 일본, 중국, 동남아시아는 물론 미국, 유럽에서도 빙수 전문점을 쉽게 찾을 수 있습니다. 빙수는 단순한 얼음 디저트를 넘어, 한국의 음식 문화 혁신을 상징하는 아이콘이 되었으며, 인스타그램에 어울리는 비주얼 디저트의 선두 주자로 자리매김하고 있습니다.',
    },
    comparison: {
      title: '빙수 vs 미국식 셰이브드아이스 vs 일본 가키고리',
      subtitle: '빙수는 무엇이 다를까?',
      intro: '빙수, 미국식 셰이브드아이스, 일본 가키고리(かき氷)는 모두 얼음을 갈아서 만든다는 공통점이 있지만, 그 차이는 분명합니다:',
      headers: {
        feature: '특징',
        bingsu: '빙수 (한국)',
        shavedIce: '셰이브드아이스 (미국)',
        kakigori: '가키고리 (일본)',
      },
      rows: [
        {
          feature: '얼음 종류',
          bingsu: '극세 우유 얼음 플레이크',
          shavedIce: '굵게 간 일반 얼음',
          kakigori: '곱게 간 일반 얼음',
        },
        {
          feature: '베이스',
          bingsu: '냉동 우유 또는 달콤한 베이스',
          shavedIce: '일반 물 얼음',
          kakigori: '일반 물 얼음 (우유 사용도 있음)',
        },
        {
          feature: '식감',
          bingsu: '눈꽃처럼 부드럽고, 크리미하게 녹음',
          shavedIce: '아삭아삭, 얼음 결정 느낌',
          kakigori: '포슬포슬, 가볍고 파우더리',
        },
        {
          feature: '토핑',
          bingsu: '팥, 떡, 과일, 연유, 쿠키 등',
          shavedIce: '과일 시럽, 구미베어 등',
          kakigori: '말차 시럽, 연유, 모찌, 팥 등',
        },
        {
          feature: '제공 방식',
          bingsu: '큰 그릇, 함께 나눠 먹기',
          shavedIce: '개인용 컵 또는 콘',
          kakigori: '개인용 그릇',
        },
        {
          feature: '기원',
          bingsu: '한국 (조선시대)',
          shavedIce: '미국 (하와이 전통)',
          kakigori: '일본 (헤이안 시대)',
        },
      ],
      note: '가장 큰 차이점은 빙수가 일반 물이 아닌 냉동 우유를 사용한다는 것입니다. 이로 인해 더 진하고 크리미한 맛과, 세계의 다른 빙수 디저트와 확실히 차별화되는 눈꽃 같은 식감이 탄생합니다.',
    },
    types: {
      title: '빙수의 종류',
      subtitle: '클래식 팥빙수부터 창의적인 현대 빙수까지',
      items: [
        {
          name: '팥빙수 (클래식)',
          korean: '팥빙수',
          description: '가장 전통적이고 대표적인 빙수입니다. 곱게 간 우유 얼음 위에 달콤한 팥, 쫄깃한 떡(경단), 연유를 듬뿍 올립니다. 미숫가루와 견과류를 곁들이기도 합니다. 모든 빙수의 시작이자 한국인에게 가장 향수 어린 맛. 어린 시절의 추억이 담긴 빙수입니다.',
          icon: '🫘',
        },
        {
          name: '인절미빙수',
          korean: '인절미빙수',
          description: '볶은 콩가루(콩고물)를 묻힌 한국 전통 떡 "인절미"에서 이름을 따왔습니다. 우유 얼음 위에 부드럽고 쫄깃한 인절미 떡 조각, 고소한 콩가루, 연유를 넉넉히 올립니다. 차갑고 크리미한 얼음과 고소한 콩가루의 조화가 한국 카페에서 꾸준한 인기를 누리는 비결입니다.',
          icon: '🍡',
        },
        {
          name: '과일빙수',
          korean: '과일빙수',
          description: '제철 신선한 과일을 듬뿍 올린 상큼한 빙수. 망고, 딸기, 수박, 메론, 열대과일 믹스 등이 우유 얼음 위에 풍성하게 올라갑니다. 바닐라 아이스크림이나 과일 시럽, 연유를 곁들이기도 합니다. 여름에는 특히 망고빙수와 딸기빙수가 폭발적인 인기를 끕니다.',
          icon: '🍓',
        },
        {
          name: '오레오빙수 / 초코빙수',
          korean: '오레오빙수 / 초코빙수',
          description: '부순 오레오 쿠키, 초콜릿 시럽, 브라우니 조각, 초콜릿 아이스크림을 우유 얼음 위에 겹겹이 쌓은 현대적 인기 메뉴. 휘핑크림과 초콜릿 쉐이빙을 토핑하기도 합니다. 진하고 달콤한 맛을 좋아하는 MZ세대에게 특히 사랑받는 빙수입니다.',
          icon: '🍫',
        },
        {
          name: '녹차빙수 (말차빙수)',
          korean: '녹차빙수',
          description: '동아시아 전역에서 큰 인기를 끌고 있는 퓨전 빙수. 고급 말차 파우더를 얼음에 섞거나 위에 넉넉히 뿌리고, 단팥, 찹쌀떡, 녹차 아이스크림을 곁들입니다. 말차의 은은한 쓴맛이 토핑의 달콤함과 아름다운 균형을 이루며, 비주얼도 빼어납니다.',
          icon: '🍵',
        },
      ],
    },
    whyHawaii: {
      title: '하와이에서 빙수가 완벽한 이유',
      points: [
        {
          title: '일년 내내 열대 기후',
          description: '하와이의 따뜻한 기후는 얼음 디저트를 여름만의 간식이 아니라 사계절 즐길 수 있게 합니다. 한국에서는 빙수가 보통 5월부터 9월까지의 시즌 메뉴지만, 하와이에서는 365일 빙수를 즐길 수 있습니다. 열대의 더위 속에서 먹는 빙수 한 숟가락의 시원함은 그야말로 꿀맛입니다.',
        },
        {
          title: '하와이의 한국 음식 문화',
          description: '하와이는 미국 내 최대 규모의 한인 커뮤니티 중 하나가 있습니다. 플레이트 런치의 한국식 BBQ부터 마트마다 있는 김치까지, 한국 음식 문화는 하와이에 깊이 뿌리내리고 있습니다. 빙수는 아시아의 맛이 세대를 이어 지역 문화의 일부가 된 하와이의 다양한 음식 문화에 자연스럽게 어울립니다.',
        },
        {
          title: '한류(K-Wave) 효과',
          description: 'K-pop, K-드라마, K-뷰티, K-푸드까지 한류 열풍은 하와이에서도 한국 문화의 인기를 높이고 있습니다. 일본, 중국, 아시아 각국에서 오는 관광객들은 이미 빙수를 잘 알고 있습니다. 열대의 파라다이스에서 즐기는 정통 빙수는 최고의 휴가 경험이 됩니다.',
        },
        {
          title: '하와이의 셰이브드아이스 전통',
          description: '하와이에는 이미 셰이브드아이스(빙수)를 사랑하는 깊은 문화가 있습니다. 하와이 주민과 관광객 모두 곱게 간 얼음 디저트의 매력을 잘 이해하고 있죠. 한국식 빙수는 이 익숙한 컨셉에 우유 얼음, 프리미엄 토핑, 가족이나 친구들과 함께 나눠 먹는 형식을 더해 한 단계 업그레이드합니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 빙수 먹는 곳',
      intro: '와이키키에서 정통 빙수를 찾고 계시다면, 코나커피도넛으로 오세요.',
      shop: {
        name: 'Kona Coffee Donut (코나커피도넛)',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키의 중심, 칼라카우아 애비뉴에 위치한 코나커피도넛은 신선한 열대과일과 프리미엄 우유 얼음으로 만든 하와이안 스타일 빙수를 제공합니다. 저희 빙수의 특별한 점은? 호놀룰루 커피의 100% 코나 커피와 함께 즐길 수 있다는 것. 시원한 빙수의 달콤함과 풍부한 하와이안 커피의 환상 조합을 경험해보세요.',
        highlights: [
          '하와이 열대 과일로 만든 신선한 과일빙수',
          '프리미엄 100% 코나 커피와의 퍼펙트 페어링',
          '와이키키 비치에서 도보 거리',
          '매일 영업 — 오후 간식으로 딱!',
        ],
      },
      cta: '빙수 메뉴 보기',
    },
    howToEat: {
      title: '한국인처럼 빙수 먹는 법',
      subtitle: '완벽한 빙수 경험을 위한 팁',
      tips: [
        {
          title: '친구들과 나눠 먹기',
          description: '빙수는 전통적으로 나눠 먹는 디저트입니다. 한국에서는 2~3명이 큰 빙수 하나를 시키는 것이 일반적이죠. 커다란 양이 바로 재미의 포인트입니다. 그릇을 가운데 놓고 수저를 들고 함께 즐기세요. 빙수는 맛있는 디저트인 동시에, 소중한 사람들과의 소통의 시간이기도 합니다.',
        },
        {
          title: '녹기 전에 빨리 먹기',
          description: '섬세한 우유 얼음은 나오는 순간부터 녹기 시작합니다. 완벽한 인생 사진을 기다리지 마세요! 빠르게 사진을 찍고 바로 파먹으세요. 얼음이 아직 포슬포슬하고 눈꽃 같을 때가 가장 맛있습니다. 우유 물이 되기 전에 즐기는 것이 핵심!',
        },
        {
          title: '토핑을 섞어 먹기',
          description: '위에서부터 순서대로 먹지 마세요. 숟가락으로 토핑을 얼음에 살살 섞어가며 먹는 것이 포인트입니다. 이렇게 하면 한 숟가락마다 얼음, 팥(또는 과일), 연유, 토핑이 골고루 어우러져 맛의 밸런스가 완벽해집니다.',
        },
        {
          title: '가장자리부터 먹기',
          description: '가장자리가 먼저 녹기 때문에, 바깥쪽부터 먹기 시작해서 가운데로 진행하세요. 이렇게 하면 중앙 부분이 차갑고 포슬포슬한 상태를 더 오래 유지할 수 있어, 이상적인 식감을 더 오래 즐길 수 있습니다.',
        },
      ],
    },
    faq: {
      title: '빙수에 대해 자주 묻는 질문',
      items: [
        {
          question: '빙수는 어떤 맛인가요?',
          answer: '빙수는 아이스크림과 빙과의 중간 같은 맛이지만, 훨씬 가볍고 크리미합니다. 우유 얼음 베이스에 은은한 단맛이 있고, 토핑이 다양한 풍미를 더합니다. 팥의 구수한 단맛부터 제철 과일의 상큼함까지. 가장 큰 매력은 식감으로, 눈꽃 같은 포슬포슬한 얼음이 입안에서 살살 녹습니다.',
        },
        {
          question: '빙수는 글루텐 프리인가요?',
          answer: '전통 팥빙수(팥, 연유, 쌀떡)는 기본적으로 글루텐 프리입니다. 떡(경단)은 쌀가루로 만들기 때문이죠. 하지만 오레오, 브라우니, 시리얼 등을 사용한 현대 빙수에는 글루텐이 포함되어 있습니다. 과일빙수가 가장 안전한 글루텐 프리 옵션입니다. 구체적인 재료는 매장에 문의하세요.',
        },
        {
          question: '빙수의 칼로리는 얼마나 되나요?',
          answer: '기본 팥빙수는 1인분 약 350~500kcal입니다. 과일빙수는 약 250~350kcal로 비교적 가볍고, 초코/오레오 빙수는 500~700kcal까지 올라갈 수 있습니다. 보통 2~3명이 나눠 먹기 때문에 1인당 칼로리는 꽤 합리적입니다.',
        },
        {
          question: '빙수와 팥빙수의 차이점은 무엇인가요?',
          answer: '팥빙수는 빙수의 한 종류입니다. "팥(팥)"은 한국어로 붉은 팥을 의미하므로, 팥빙수는 구체적으로 팥 토핑 빙수를 말합니다. "빙수(氷水)"는 한국식 빙수 디저트 전체를 아우르는 총칭으로, 과일빙수, 인절미빙수, 초코빙수 등을 모두 포함합니다. 팥빙수가 가장 원조이자 클래식한 종류입니다.',
        },
        {
          question: '집에서 빙수를 만들 수 있나요?',
          answer: '네, 빙수기나 고품질 빙삭기가 있으면 집에서도 만들 수 있습니다. 가당 우유를 블록 형태로 얼린 후 곱게 갈아주세요. 시판 통조림 팥(한국 마트에서 구매 가능), 연유, 떡, 신선한 과일을 토핑하면 됩니다. 핵심은 얼음 식감! 투박하게 갈리면 안 되고, 가루눈처럼 곱고 포슬포슬해야 진짜 빙수입니다.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 빙수를 즐기세요',
      text: '2142 Kalakaua Ave 코나커피도넛에서 정통 한국 빙수와 프리미엄 코나 커피를 경험하세요.',
      menuButton: '빙수 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '빙수란?',
    },
  },
  zh: {
    hero: {
      title: '什么是韩式刨冰(Bingsu)？',
      subtitle: '韩国经典刨冰甜品完全指南',
      updated: '2026年4月更新',
      readTime: '阅读约8分钟',
    },
    definition: {
      title: '什么是韩式刨冰？',
      text: '<strong>韩式刨冰（빙수，Bingsu）</strong>是一种<strong>韩国传统刨冰甜品</strong>，由细腻的牛奶冰沙搭配红豆、炼乳、年糕、水果等丰富配料制成。与普通刨冰不同，韩式刨冰使用<strong>超细雪花状牛奶冰片</strong>，入口即化，口感绵密如冰淇淋。它是<strong>韩国最受欢迎的夏季甜品</strong>，每年有数百万人享用。',
    },
    history: {
      title: '韩式刨冰的历史',
      subtitle: '从朝鲜王朝冰库到现代咖啡厅文化',
      p1: '韩式刨冰的起源可追溯到朝鲜王朝（1392-1897年），当时冰块是仅供皇室和贵族享用的珍贵奢侈品。政府在河岸设立了名为<strong>"冰库（빙고）"</strong>的冰块储存仓库，用于在冬季采集和保存天然冰块。这些冰库由专门的政府机构管理，冰块的分配被视为王室特权。',
      p2: '最早的韩式刨冰形式很简单：刨冰上放上红豆沙（팥）。这一朴素的组合诞生了<strong>"红豆刨冰（팥빙수）"</strong>的名字，字面意思就是"红豆刨冰"。在日据时期到20世纪中叶，红豆刨冰在韩国的街边摊和小店广泛普及。',
      p3: '20世纪80至90年代带来了刨冰的革命。韩国咖啡厅和连锁店开始尝试使用高级食材——新鲜水果、炼乳、年糕粉（인절미）、芝士蛋糕，甚至奥利奥饼干。冰本身也从粗糙的刨冰进化为超细的牛奶冰，创造出现代韩式刨冰标志性的雪花般质感。',
      p4: '如今，韩式刨冰已成为全球现象。韩流（Hallyu）将刨冰文化传播到日本、中国、东南亚及更远的地方。高端韩式刨冰咖啡厅现已遍布世界各大城市，这款甜品已成为韩国美食创新的象征——将简单的冰品变成了值得分享到社交媒体的艺术品。',
    },
    comparison: {
      title: '韩式刨冰 vs 美式刨冰 vs 日式刨冰',
      subtitle: '韩式刨冰有什么不同？',
      intro: '虽然韩式刨冰、美式刨冰和日式刨冰都是以冰为基础，但它们的区别很大。以下是详细对比：',
      headers: {
        feature: '特点',
        bingsu: '韩式刨冰 (韩国)',
        shavedIce: '刨冰 (美国)',
        kakigori: '日式刨冰 (日本)',
      },
      rows: [
        {
          feature: '冰的类型',
          bingsu: '超细牛奶冰片',
          shavedIce: '粗刨普通冰',
          kakigori: '细刨普通冰',
        },
        {
          feature: '基底',
          bingsu: '冷冻牛奶或甜味基底',
          shavedIce: '普通水冰',
          kakigori: '普通水冰（部分使用牛奶）',
        },
        {
          feature: '口感',
          bingsu: '雪花般、绵密、入口即化',
          shavedIce: '脆冰、颗粒感',
          kakigori: '蓬松、轻盈、粉状',
        },
        {
          feature: '配料',
          bingsu: '红豆、年糕、水果、炼乳、饼干',
          shavedIce: '调味糖浆、小熊软糖',
          kakigori: '抹茶糖浆、炼乳、麻糬、红豆',
        },
        {
          feature: '供应方式',
          bingsu: '大碗，适合分享',
          shavedIce: '个人杯或甜筒',
          kakigori: '个人碗',
        },
        {
          feature: '起源',
          bingsu: '韩国（朝鲜王朝）',
          shavedIce: '美国（夏威夷传统）',
          kakigori: '日本（平安时代）',
        },
      ],
      note: '最关键的区别在于韩式刨冰使用冷冻牛奶而非普通水，这赋予了它更浓郁、更绵密的口感，以及与世界其他刨冰甜品截然不同的雪花般质感。',
    },
    types: {
      title: '韩式刨冰的种类',
      subtitle: '从经典红豆到创意现代口味',
      items: [
        {
          name: '红豆刨冰（经典款）',
          korean: '팥빙수',
          description: '最传统、最经典的种类。细腻的牛奶冰沙上堆满甜红豆、Q弹年糕和炼乳，常搭配谷物粉和碎坚果。这是开创一切的元祖刨冰——温馨、怀旧、经久不衰。',
          icon: '🫘',
        },
        {
          name: '年糕粉刨冰',
          korean: '인절미빙수',
          description: '以裹有烤黄豆粉的韩国年糕"인절미"命名。牛奶冰上铺满柔软Q弹的年糕块、大量香浓的黄豆粉和炼乳。冰冷绵密的冰沙与温暖醇厚的黄豆风味的组合，使其成为韩国咖啡厅的人气之选。',
          icon: '🍡',
        },
        {
          name: '水果刨冰',
          korean: '과일빙수',
          description: '以应季新鲜水果为主角的清爽刨冰——芒果、草莓、西瓜、哈密瓜或混合热带水果堆满冰山。常配一球香草冰淇淋和果汁或炼乳。芒果刨冰和草莓刨冰在夏季尤其受欢迎。',
          icon: '🍓',
        },
        {
          name: '奥利奥/巧克力刨冰',
          korean: '오레오빙수 / 초코빙수',
          description: '层层叠加碎奥利奥饼干、巧克力酱、布朗尼块和巧克力冰淇淋的现代人气款。有时顶部还有奶油和巧克力碎屑。这款奢华口味特别受年轻一代和喜欢浓郁甜品的人欢迎。',
          icon: '🍫',
        },
        {
          name: '抹茶刨冰',
          korean: '녹차빙수',
          description: '在东亚地区大受欢迎的融合创作。高品质抹茶粉融入冰沙或慷慨撒在上方，搭配红豆沙、麻糬，有时还有抹茶冰淇淋。抹茶的微苦与配料的甜美形成优雅的平衡。',
          icon: '🍵',
        },
      ],
    },
    whyHawaii: {
      title: '为什么韩式刨冰在夏威夷堪称完美',
      points: [
        {
          title: '全年热带气候',
          description: '夏威夷温暖的气候使冰品甜点成为全年的渴望，而不仅是夏季限定。韩国的刨冰通常是季节性的（5月至9月），但在夏威夷365天都能享用。热带的炎热让每一口都更加清爽。',
        },
        {
          title: '夏威夷的韩国饮食文化',
          description: '夏威夷拥有美国最大的韩裔社区之一。从便当式韩国烤肉到超市里的泡菜，韩国饮食文化在夏威夷根深蒂固。韩式刨冰自然融入夏威夷多元的美食文化中，亚洲风味已经是当地文化的一部分。',
        },
        {
          title: '韩流效应',
          description: '全球韩流使韩国文化在夏威夷比以往更受欢迎。从K-pop、韩剧到韩国护肤和美食，来自日本、中国和亚洲各地的游客早已熟悉韩式刨冰。在热带环境中品尝正宗刨冰，是完美的度假体验。',
        },
        {
          title: '夏威夷的刨冰传统',
          description: '夏威夷本身就深爱刨冰——几乎是夏威夷的州宝。当地居民和游客都懂得欣赏精细刨冰的魅力。韩式刨冰在这一熟悉的概念基础上，用牛奶冰、高级配料和适合家庭分享的方式将其升级。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基哪里可以吃到韩式刨冰',
      intro: '如果你在威基基想吃正宗的韩式刨冰，科纳咖啡甜甜圈是你的首选。',
      shop: {
        name: 'Kona Coffee Donut（科纳咖啡甜甜圈）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '位于威基基卡拉卡瓦大道中心地段，科纳咖啡甜甜圈提供以新鲜热带水果和优质牛奶冰制作的夏威夷风格韩式刨冰。我们的刨冰有何特别之处？搭配檀香山咖啡的正宗100%科纳咖啡——冰爽甜蜜与醇厚夏威夷咖啡的完美组合。',
        highlights: [
          '热带夏威夷风味的新鲜水果刨冰',
          '与优质100%科纳咖啡完美搭配',
          '距威基基海滩步行可达',
          '每天营业——午后甜品的最佳选择',
        ],
      },
      cta: '查看刨冰菜单',
    },
    howToEat: {
      title: '像韩国人一样吃刨冰',
      subtitle: '完美刨冰体验小贴士',
      tips: [
        {
          title: '和朋友一起分享',
          description: '韩式刨冰传统上是分享的甜品。在韩国，2-3人点一份大刨冰是常见的做法。超大份量就是乐趣所在——围着碗拿着勺子一起享用吧。这不仅是美食体验，更是社交体验。',
        },
        {
          title: '融化前赶快吃',
          description: '细腻的牛奶冰片从上桌那一刻就开始融化。不要等完美照片——快速拍照就开吃。刨冰最好吃的时候是冰还蓬松如雪花，在变成奶汤之前尽情享用。',
        },
        {
          title: '把配料拌进去',
          description: '不要只从上往下吃。用勺子轻轻地把配料拌入刨冰中。这样每一口都能均匀地品尝到冰沙、红豆（或水果）、炼乳和其他配料的完美组合。',
        },
        {
          title: '从边缘开始吃',
          description: '边缘部分最先融化，所以从外围开始吃，向中心推进。这样中间部分能保持更长时间的冰凉蓬松，让你有更多时间享受理想的口感。',
        },
      ],
    },
    faq: {
      title: '关于韩式刨冰的常见问题',
      items: [
        {
          question: '韩式刨冰是什么味道？',
          answer: '韩式刨冰的味道介于冰淇淋和刨冰之间，但更轻盈、更绵密。牛奶冰基底带有淡淡的甜味，配料增添层次丰富的风味——从红豆的醇厚甜味到应季水果的清新。最独特的是口感：雪花般蓬松的冰入口即化。',
        },
        {
          question: '韩式刨冰是无麸质的吗？',
          answer: '传统红豆刨冰（红豆、炼乳、年糕）通常是无麸质的，因为年糕是用米粉制成的。但含有奥利奥饼干、布朗尼或麦片配料的现代变体含有麸质。水果刨冰通常是最安全的无麸质选择。请务必向餐厅确认具体成分。',
        },
        {
          question: '韩式刨冰的热量是多少？',
          answer: '标准红豆刨冰约含350-500卡路里，具体取决于份量和配料。水果刨冰较轻（约250-350卡路里），而巧克力或奥利奥刨冰可达500-700卡路里。由于通常2-3人分享，每人摄入的热量相当合理。',
        },
        {
          question: 'Bingsu和Patbingsu有什么区别？',
          answer: 'Patbingsu是Bingsu的一种。"Pat（팥）"在韩语中意为红豆，因此Patbingsu特指红豆刨冰。"Bingsu（빙수）"是所有韩式刨冰甜品的统称，包括水果刨冰、年糕刨冰、巧克力刨冰等。红豆刨冰是最原始、最经典的种类。',
        },
        {
          question: '可以在家自制韩式刨冰吗？',
          answer: '可以，用专用刨冰机或能制作细腻雪花冰的高品质刨冰器就能做。将加糖牛奶冻成块状后细细刨碎，配上罐装甜红豆（韩国超市有售）、炼乳、年糕和新鲜水果。关键是冰的质感——必须是粉状细腻的，而不是粗糙的冰渣。',
        },
      ],
    },
    cta: {
      title: '来威基基品尝韩式刨冰',
      text: '前往2142 Kalakaua Ave的科纳咖啡甜甜圈，体验正宗韩式刨冰搭配优质科纳咖啡。',
      menuButton: '查看刨冰菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '什么是韩式刨冰？',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What is Bingsu? The Complete Guide to Korea\'s Iconic Shaved Ice Dessert',
  description: 'Learn everything about bingsu — Korea\'s beloved shaved ice dessert. History, types, how it compares to kakigori, and where to find bingsu in Waikiki.',
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
    '@id': 'https://www.konacoffeedonut.com/en/blog/what-is-bingsu',
  },
  keywords: 'bingsu, what is bingsu, korean shaved ice, patbingsu, bingsu waikiki, korean dessert',
  wordCount: 1200,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does bingsu taste like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bingsu tastes like a cross between ice cream and snow cones, but lighter and creamier. The milk ice base has a subtle sweetness, and the toppings add layers of flavor — from the earthy sweetness of red beans to the bright freshness of seasonal fruit. The texture is what sets it apart: fluffy, snow-like ice that melts on your tongue.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is bingsu gluten-free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional patbingsu with red beans, condensed milk, and rice cakes is generally gluten-free, as rice cakes (tteok) are made from rice flour. However, modern variations with Oreo cookies, brownies, or cereal toppings do contain gluten. Fruit bingsu is typically the safest gluten-free option.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many calories are in bingsu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard serving of patbingsu contains approximately 350-500 calories. Fruit bingsu tends to be lighter (around 250-350 calories), while chocolate or Oreo bingsu can range from 500-700 calories. Since bingsu is typically shared between 2-3 people, the per-person calorie count is quite reasonable.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between bingsu and patbingsu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Patbingsu is a specific type of bingsu. "Pat" means red bean in Korean, so patbingsu specifically refers to shaved ice topped with sweet red beans. "Bingsu" is the general term for all Korean shaved ice desserts, including fruit bingsu, injeolmi bingsu, chocolate bingsu, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you make bingsu at home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can make bingsu at home with a bingsu machine or a high-quality shaved ice maker. Freeze sweetened milk into blocks, then shave it thinly. Top with canned sweet red beans, condensed milk, rice cakes, and fresh fruit. The key is getting the ice texture right — it should be powdery and fine, not chunky.',
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

export default function WhatIsBingsuPage() {
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
          src="/images/blog/what-is-bingsu.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
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
                  <tr className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white">
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

        {/* Why Bingsu is Perfect for Hawaii */}
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
              className="bg-gradient-to-br from-sky-600 to-indigo-700 rounded-3xl p-8 md:p-10 text-white"
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

        {/* How to Eat Bingsu */}
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
        <section className="py-16 px-4 bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 text-white">
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
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
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
