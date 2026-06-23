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
      title: 'What is Hojicha?',
      subtitle: 'Roasted Green Tea Lattes — Low-Caffeine and Toasty — in Waikiki',
      updated: 'Updated June 2026',
      readTime: '7 min read',
    },
    definition: {
      title: 'What is Hojicha?',
      text: '<strong>Hojicha (ほうじ茶)</strong> is a <strong>Japanese green tea that has been roasted</strong> over charcoal or high heat, which turns the leaves a <strong>reddish-brown</strong> color. Unlike grassy green teas, hojicha tastes <strong>nutty, toasty, and caramel-like</strong>, with almost none of the bitterness people associate with green tea. The roasting also makes it <strong>naturally low in caffeine</strong>, so a hojicha latte is a perfect afternoon or evening drink. In the cup it pours a warm <strong>reddish-amber</strong> color rather than the vivid green of matcha.',
    },
    history: {
      title: 'The History of Hojicha',
      subtitle: 'From a 1920s Kyoto Tea Shop to Cafés Around the World',
      p1: 'Hojicha was first created in the <strong>1920s in Kyoto</strong>, Japan. As the story goes, Kyoto tea merchants were looking for a way to use up leftover leaves, stems (kukicha), and lower grades of green tea that had not sold. Rather than throw them away, they <strong>roasted them over high heat</strong> — and discovered that roasting transformed the humble leftovers into something warm, toasty, and delicious.',
      p2: 'Roasting changed the leaf completely. The high heat turns the green leaves a <strong>reddish-brown</strong>, mellows the grassy notes, and develops deep nutty, caramel-like aromas. Just as importantly, roasting <strong>burns off much of the caffeine</strong>, making hojicha gentle enough to drink late in the day. In Japan it quickly became a comforting everyday tea — served after meals, offered to children and the elderly, and poured in homes across the country.',
      p3: 'Decades later, hojicha found a second life as a <strong>café latte flavor</strong>. Baristas discovered that the toasty, caramel character of roasted green tea pairs beautifully with steamed milk, creating a creamy latte that tastes a little like toasted nuts and brown sugar. Hojicha lattes, soft-serve, and desserts spread from Kyoto tea houses to modern cafés, joining matcha as a signature Japanese tea drink.',
      p4: 'From there, hojicha crossed the Pacific. Hawaii — with its deep Japanese-American roots and love of tea — embraced the toasty roasted flavor, and today you can find hojicha lattes in <strong>Waikiki</strong> just steps from the beach. For visitors who already love matcha, hojicha is the next Japanese tea to try.',
    },
    comparison: {
      title: 'Hojicha vs Matcha vs Coffee',
      subtitle: 'How Does a Hojicha Latte Compare?',
      intro: 'Hojicha, matcha, and coffee are three very different ways to get your café drink. Here is how a hojicha latte stacks up:',
      headers: {
        feature: 'Feature',
        bingsu: 'Hojicha',
        shavedIce: 'Matcha',
        kakigori: 'Coffee',
      },
      rows: [
        {
          feature: 'Process',
          bingsu: 'Roasted green tea leaves',
          shavedIce: 'Ground green tea leaf (stone-milled)',
          kakigori: 'Roasted coffee beans',
        },
        {
          feature: 'Caffeine',
          bingsu: 'Low',
          shavedIce: 'Moderate',
          kakigori: 'High',
        },
        {
          feature: 'Taste',
          bingsu: 'Nutty, toasty, caramel-like',
          shavedIce: 'Grassy, vegetal umami',
          kakigori: 'Bitter, roasty',
        },
        {
          feature: 'Color',
          bingsu: 'Reddish-amber',
          shavedIce: 'Vivid green',
          kakigori: 'Brown',
        },
        {
          feature: 'Best time',
          bingsu: 'Afternoon or evening',
          shavedIce: 'Morning to midday',
          kakigori: 'Morning',
        },
        {
          feature: 'Who it\'s for',
          bingsu: 'Anyone wanting a cozy, low-caffeine drink',
          shavedIce: 'Fans of bright, earthy green tea',
          kakigori: 'Those who want a strong caffeine kick',
        },
      ],
      note: 'The key takeaway: hojicha is the lowest-caffeine of the three and the only one with a roasted, caramel-like flavor — which makes a hojicha latte the easy choice when you want something cozy without the jitters.',
    },
    types: {
      title: 'Ways to Enjoy Hojicha & Pairings',
      subtitle: 'Five Easy Ways to Try Roasted Green Tea',
      items: [
        {
          name: 'Hot Hojicha Latte',
          korean: '$8.95 · hot',
          description: 'The classic way to taste hojicha. Roasted green tea is whisked and poured over steamed milk, giving you a warm, creamy cup with toasty, caramel-nut flavor and almost no bitterness. Our Hojicha Latte is $8.95 and is the best introduction to roasted green tea.',
          icon: '☕',
        },
        {
          name: 'Iced Hojicha Latte',
          korean: 'iced',
          description: 'The same toasty roasted flavor, served over ice — perfect for a warm Waikiki afternoon. Iced hojicha keeps its smooth, nutty character while being wonderfully refreshing, and the reddish-amber color over milk looks beautiful in the cup.',
          icon: '🧊',
        },
        {
          name: 'Hojicha + a Mochi Donut',
          korean: 'pairing',
          description: 'Hojicha\'s caramel and toasted-nut notes are made for our chewy mochi donuts. Order a hojicha latte alongside a chocolate or ube mochi donut for a cozy afternoon treat — the roasted tea cuts through the sweetness perfectly.',
          icon: '🍩',
        },
        {
          name: 'Hojicha vs a Matcha Latte',
          korean: 'side-by-side',
          description: 'Not sure which to choose? Try a hojicha latte next to a matcha latte and taste the difference: matcha is bright, grassy, and a bit more caffeinated, while hojicha is toasty, mellow, and low-caffeine. Many guests order both to share.',
          icon: '🍵',
        },
        {
          name: 'Hojicha for Low-Caffeine Afternoons',
          korean: 'low-caffeine',
          description: 'Because roasting removes much of the caffeine, hojicha is the drink to order when you want something warm and comforting later in the day. It is gentle enough for the afternoon or evening without keeping you up at night.',
          icon: '🌙',
        },
      ],
    },
    whyHawaii: {
      title: 'Why Try Hojicha in Waikiki',
      points: [
        {
          title: 'A Toasty Flavor Most People Haven\'t Tried',
          description: 'Almost everyone has had matcha or coffee, but far fewer have tried hojicha. Its nutty, toasty, caramel-like flavor is a genuinely new experience — the kind of drink you order on vacation and then go looking for back home. Waikiki is the perfect place to discover it.',
        },
        {
          title: 'Low Caffeine = an Anytime Drink',
          description: 'Roasting removes much of the caffeine, so hojicha is gentle enough to enjoy in the afternoon or evening without disrupting your sleep. It is the ideal drink for anyone winding down their day or sensitive to caffeine.',
        },
        {
          title: 'Pairs Perfectly with Mochi Donuts',
          description: 'A toasty hojicha latte and a chewy mochi donut is one of our favorite combinations. The caramel notes of the roasted tea balance the sweetness of the donut, making it a perfect afternoon pick-me-up in Waikiki.',
        },
        {
          title: 'About 5 Minutes from the Beach',
          description: 'Kona Coffee Donut? sits right on Kalākaua Avenue, about a 5-minute walk from Waikiki Beach. Grab a hojicha latte and a mochi donut on your way to or from the sand — it is the perfect island treat.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Get a Hojicha Latte in Waikiki',
      intro: 'If you are craving a hojicha latte in Waikiki, Kona Coffee Donut? is your destination.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Located in the heart of Waikiki on Kalākaua Avenue, Kona Coffee Donut? pours hojicha and matcha lattes alongside 100% Kona coffee and chewy mochi donuts. Our Hojicha Latte ($8.95) is roasted, toasty, and naturally low in caffeine — the perfect afternoon or evening drink, about 5 minutes from Waikiki Beach.',
        highlights: [
          'Toasty, low-caffeine Hojicha Latte ($8.95)',
          'Also serving matcha lattes and 100% Kona coffee',
          'Pairs perfectly with our mochi donuts',
          'About 5 minutes from Waikiki Beach · open daily 7AM–9PM',
        ],
      },
      cta: 'See Our Matcha & Hojicha Menu',
    },
    howToEat: {
      title: 'How to Enjoy Hojicha',
      subtitle: 'Tips for Your First Hojicha Latte',
      tips: [
        {
          title: 'Try It Hot First',
          description: 'For your very first hojicha, order it hot. Steamed milk brings out the roasted, caramel-nut character beautifully, and a warm cup is the best way to appreciate why hojicha tastes so toasty and comforting compared to grassy green teas.',
        },
        {
          title: 'Go Iced for the Heat',
          description: 'On a warm Waikiki day, an iced hojicha latte is incredibly refreshing while keeping all of that smooth, nutty flavor. The reddish-amber tea swirling into cold milk is as pretty as it is delicious.',
        },
        {
          title: 'Pair It with a Mochi Donut',
          description: 'Order your hojicha latte with a chocolate or ube mochi donut. The toasty caramel notes of the roasted tea balance the sweetness of the donut perfectly, making an ideal afternoon treat.',
        },
        {
          title: 'Save It for the Afternoon or Evening',
          description: 'Because hojicha is naturally low in caffeine, it is the perfect drink for later in the day. Order one when you want something warm and cozy without the caffeine keeping you up at night.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About Hojicha',
      items: [
        {
          question: 'What is hojicha?',
          answer: 'Hojicha is a Japanese green tea that has been roasted over charcoal or high heat, which turns the leaves reddish-brown. The roasting gives it a nutty, toasty, caramel-like flavor with almost no bitterness, and naturally low caffeine. In Waikiki, you can try a hojicha latte at Kona Coffee Donut? on Kalākaua Avenue.',
        },
        {
          question: 'What\'s the difference between hojicha and matcha?',
          answer: 'Matcha is finely ground green tea leaf, bright green in color, with a grassy umami flavor and moderate caffeine. Hojicha is roasted green tea, reddish-amber in color, with a toasty, caramel-nut flavor and low caffeine. In short: matcha is green and grassy, hojicha is roasted and toasty.',
        },
        {
          question: 'Does hojicha have caffeine?',
          answer: 'Hojicha is naturally low in caffeine. The roasting process burns off much of the caffeine that green tea normally contains, so hojicha has noticeably less than matcha or coffee. That makes a hojicha latte a great choice for the afternoon or evening when you want something warm without the jitters.',
        },
        {
          question: 'What does hojicha taste like?',
          answer: 'Hojicha tastes nutty, toasty, and caramel-like, a little like toasted nuts and brown sugar. Because it is roasted, it has almost none of the grassy bitterness people associate with green tea. As a latte with steamed milk, it becomes smooth, creamy, and cozy.',
        },
        {
          question: 'Where can I get a hojicha latte in Waikiki?',
          answer: 'You can get a hojicha latte at Kona Coffee Donut?, located at 2142 Kalakaua Ave in the heart of Waikiki — about 5 minutes from Waikiki Beach. The Hojicha Latte is $8.95, and we also serve matcha lattes, 100% Kona coffee, and mochi donuts. Open daily 7AM–9PM.',
        },
      ],
    },
    cta: {
      title: 'Try a Hojicha Latte in Waikiki',
      text: 'Visit Kona Coffee Donut? at 2142 Kalakaua Ave and try our toasty, low-caffeine hojicha latte — paired perfectly with a mochi donut.',
      menuButton: 'See the Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'What is Hojicha?',
    },
  },
  ja: {
    hero: {
      title: 'ほうじ茶とは？',
      subtitle: '香ばしくてカフェイン控えめ、焙煎緑茶ラテをワイキキで',
      updated: '2026年6月更新',
      readTime: '7分で読める',
    },
    definition: {
      title: 'ほうじ茶とは？',
      text: '<strong>ほうじ茶</strong>は、<strong>緑茶を炭火や高温で焙煎した日本茶</strong>で、焙煎によって茶葉が<strong>赤みがかった茶色</strong>に変化します。青々しい緑茶とは異なり、ほうじ茶は<strong>香ばしくナッツのような、キャラメルを思わせる風味</strong>で、緑茶特有の苦みがほとんどありません。焙煎の過程で<strong>カフェインも自然と少なく</strong>なるため、ほうじ茶ラテは午後や夜にぴったりの一杯です。カップに注ぐと、抹茶の鮮やかな緑とは違う、温かみのある<strong>赤褐色（赤みがかった琥珀色）</strong>になります。',
    },
    history: {
      title: 'ほうじ茶の歴史',
      subtitle: '1920年代の京都の茶商から世界のカフェへ',
      p1: 'ほうじ茶が初めて作られたのは<strong>1920年代、京都</strong>でした。当時、京都の茶商たちは売れ残った茶葉や茎（茎茶）、等級の低い緑茶を使い切る方法を探していました。捨てる代わりに<strong>高温で焙煎したところ</strong>、地味な余り物が香ばしく美味しいお茶に生まれ変わることを発見したのです。',
      p2: '焙煎は茶葉を一変させました。高温で緑の茶葉は<strong>赤褐色</strong>になり、青臭さがやわらぎ、香ばしくキャラメルのような深い香りが生まれます。そして同じくらい重要なのは、焙煎によって<strong>カフェインの多くが飛ぶ</strong>こと。これによりほうじ茶は一日の遅い時間でも飲みやすいお茶になりました。日本では食後に出され、子どもやお年寄りにも親しまれ、各家庭で愛される日常茶として瞬く間に広まりました。',
      p3: '数十年を経て、ほうじ茶は<strong>カフェラテのフレーバー</strong>として第二の人生を歩み始めます。焙煎緑茶の香ばしくキャラメルのような風味がスチームミルクと見事に調和し、トーストしたナッツや黒糖を思わせるクリーミーなラテが誕生しました。ほうじ茶ラテやソフトクリーム、スイーツは京都の茶屋から現代のカフェへと広がり、抹茶と並ぶ日本茶の定番ドリンクになりました。',
      p4: 'やがてほうじ茶は太平洋を渡ります。日系の歴史が深く、お茶を愛するハワイは、この香ばしい焙煎の風味を受け入れました。今では<strong>ワイキキ</strong>のビーチからすぐの場所でほうじ茶ラテが楽しめます。すでに抹茶が好きな方にとって、ほうじ茶は次に試すべき日本茶です。',
    },
    comparison: {
      title: 'ほうじ茶 vs 抹茶 vs コーヒー',
      subtitle: 'ほうじ茶ラテはどう違う？',
      intro: 'ほうじ茶、抹茶、コーヒーは、カフェドリンクとしてそれぞれまったく異なる魅力があります。ほうじ茶ラテを比較してみましょう：',
      headers: {
        feature: '特徴',
        bingsu: 'ほうじ茶',
        shavedIce: '抹茶',
        kakigori: 'コーヒー',
      },
      rows: [
        {
          feature: '製法',
          bingsu: '焙煎した緑茶の茶葉',
          shavedIce: '挽いた緑茶の葉（石臼挽き）',
          kakigori: '焙煎したコーヒー豆',
        },
        {
          feature: 'カフェイン',
          bingsu: '少なめ',
          shavedIce: '中程度',
          kakigori: '多い',
        },
        {
          feature: '味わい',
          bingsu: '香ばしくナッツ・キャラメル風味',
          shavedIce: '青々しいうま味',
          kakigori: '苦く香ばしい',
        },
        {
          feature: '色',
          bingsu: '赤みがかった琥珀色',
          shavedIce: '鮮やかな緑',
          kakigori: '茶色',
        },
        {
          feature: 'おすすめの時間',
          bingsu: '午後または夜',
          shavedIce: '朝から昼',
          kakigori: '朝',
        },
        {
          feature: 'こんな人に',
          bingsu: 'ほっとできるカフェイン控えめの一杯が欲しい人',
          shavedIce: '鮮やかで土の香りの緑茶が好きな人',
          kakigori: 'しっかりカフェインを摂りたい人',
        },
      ],
      note: 'ポイントは、ほうじ茶が3つの中で最もカフェインが少なく、唯一の焙煎・キャラメル系の風味を持つこと。眠れなくなる心配なくほっと一息つきたいときは、ほうじ茶ラテが一番の選択です。',
    },
    types: {
      title: 'ほうじ茶の楽しみ方とペアリング',
      subtitle: '焙煎緑茶を味わう5つの簡単な方法',
      items: [
        {
          name: 'ホットほうじ茶ラテ',
          korean: '$8.95・ホット',
          description: 'ほうじ茶を味わう定番スタイル。焙煎緑茶を点ててスチームミルクに注ぐと、香ばしくキャラメルナッツのような風味で、苦みのほとんどない温かくクリーミーな一杯に。ほうじ茶ラテ（$8.95）は焙煎緑茶への最高の入り口です。',
          icon: '☕',
        },
        {
          name: 'アイスほうじ茶ラテ',
          korean: 'アイス',
          description: '同じ香ばしい焙煎の風味を氷の上で。暖かいワイキキの午後にぴったりです。アイスでもなめらかでナッツのような風味はそのまま、爽やかさも抜群。ミルクに広がる赤褐色の見た目も美しい一杯です。',
          icon: '🧊',
        },
        {
          name: 'ほうじ茶＋モチドーナツ',
          korean: 'ペアリング',
          description: 'ほうじ茶のキャラメルと焙煎ナッツの風味は、もちもちのモチドーナツと相性抜群。ほうじ茶ラテとチョコレートやウベのモチドーナツを一緒にどうぞ。焙煎茶の風味が甘さを引き締める、午後にうれしい組み合わせです。',
          icon: '🍩',
        },
        {
          name: 'ほうじ茶 vs 抹茶ラテ',
          korean: '飲み比べ',
          description: 'どちらにするか迷ったら、ほうじ茶ラテと抹茶ラテを飲み比べてみてください。抹茶は鮮やかで青々しく、カフェインもやや多め。ほうじ茶は香ばしくまろやかで、カフェイン控えめ。両方頼んでシェアするお客様も多いです。',
          icon: '🍵',
        },
        {
          name: 'カフェイン控えめの午後に',
          korean: 'カフェイン控えめ',
          description: '焙煎でカフェインの多くが飛ぶため、ほうじ茶は一日の遅い時間に温かくほっとしたいときにぴったり。午後や夜でも、夜の眠りを妨げない優しい一杯です。',
          icon: '🌙',
        },
      ],
    },
    whyHawaii: {
      title: 'ワイキキでほうじ茶を試すべき理由',
      points: [
        {
          title: 'まだ多くの人が知らない香ばしい味',
          description: '抹茶やコーヒーはほとんどの人が飲んだことがありますが、ほうじ茶を試したことのある人はずっと少ないもの。ナッツのように香ばしくキャラメルを思わせる風味は本当に新しい体験で、旅先で出会って帰ってからも探したくなる一杯です。ワイキキはそれを発見するのに最適な場所です。',
        },
        {
          title: 'カフェイン控えめでいつでも飲める',
          description: '焙煎でカフェインの多くが飛ぶため、ほうじ茶は睡眠を妨げずに午後や夜にも楽しめます。一日の終わりにくつろぎたい方や、カフェインに敏感な方に理想的な一杯です。',
        },
        {
          title: 'モチドーナツとの相性抜群',
          description: '香ばしいほうじ茶ラテともちもちのモチドーナツは、私たちのお気に入りの組み合わせのひとつ。焙煎茶のキャラメルの風味がドーナツの甘さを引き立て、ワイキキの午後にぴったりのおやつになります。',
        },
        {
          title: 'ビーチから約5分',
          description: 'Kona Coffee Donut? はカラカウア通り沿い、ワイキキビーチから徒歩約5分。ビーチへの行き帰りにほうじ茶ラテとモチドーナツをどうぞ。最高のアイランドトリートです。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキでほうじ茶ラテを飲むなら',
      intro: 'ワイキキでほうじ茶ラテをお探しなら、Kona Coffee Donut? へ。',
      shop: {
        name: 'Kona Coffee Donut?（コナコーヒードーナツ）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心、カラカウア通りに位置する Kona Coffee Donut? は、ほうじ茶ラテや抹茶ラテに加え、100%コナコーヒーともちもちのモチドーナツを提供しています。ほうじ茶ラテ（$8.95）は焙煎の香ばしさとカフェイン控えめが魅力で、午後や夜にぴったりの一杯。ワイキキビーチから約5分です。',
        highlights: [
          '香ばしくカフェイン控えめのほうじ茶ラテ（$8.95）',
          '抹茶ラテや100%コナコーヒーもご用意',
          'モチドーナツとの相性は抜群',
          'ワイキキビーチから約5分・毎日7時〜21時営業',
        ],
      },
      cta: '抹茶＆ほうじ茶メニューを見る',
    },
    howToEat: {
      title: 'ほうじ茶の楽しみ方',
      subtitle: '初めてのほうじ茶ラテのためのコツ',
      tips: [
        {
          title: 'まずはホットで',
          description: '初めてのほうじ茶は、まずホットで。スチームミルクが焙煎・キャラメルナッツの風味を見事に引き出します。温かい一杯こそ、青々しい緑茶とは違うほうじ茶の香ばしくほっとする美味しさを味わう最高の方法です。',
        },
        {
          title: '暑い日はアイスで',
          description: '暖かいワイキキの日には、アイスほうじ茶ラテが驚くほど爽やか。なめらかでナッツのような風味はそのままに楽しめます。冷たいミルクに広がる赤褐色のお茶は、美味しいだけでなく見た目も美しい一杯です。',
        },
        {
          title: 'モチドーナツと一緒に',
          description: 'ほうじ茶ラテはチョコレートやウベのモチドーナツと一緒にどうぞ。焙煎茶の香ばしいキャラメルの風味がドーナツの甘さをちょうどよく引き締め、午後の理想的なおやつになります。',
        },
        {
          title: '午後や夜にぴったり',
          description: 'ほうじ茶はカフェインが自然と少ないため、一日の遅い時間にぴったり。夜の眠りを妨げずに、温かくほっとしたいときにどうぞ。',
        },
      ],
    },
    faq: {
      title: 'ほうじ茶に関するよくある質問',
      items: [
        {
          question: 'ほうじ茶とは何ですか？',
          answer: 'ほうじ茶は、緑茶を炭火や高温で焙煎した日本茶で、焙煎によって茶葉が赤褐色になります。焙煎により香ばしくナッツのような、キャラメルを思わせる風味になり、苦みがほとんどなく、カフェインも自然と少なめです。ワイキキでは、カラカウア通りの Kona Coffee Donut? でほうじ茶ラテをお試しいただけます。',
        },
        {
          question: 'ほうじ茶と抹茶の違いは何ですか？',
          answer: '抹茶は緑茶の葉を細かく挽いたもので、鮮やかな緑色、青々しいうま味とやや多めのカフェインが特徴です。ほうじ茶は焙煎した緑茶で、赤褐色、香ばしくキャラメルナッツのような風味でカフェイン控えめ。ひと言で言えば、抹茶は緑で青々しく、ほうじ茶は焙煎で香ばしいお茶です。',
        },
        {
          question: 'ほうじ茶にカフェインはありますか？',
          answer: 'ほうじ茶はカフェインが自然と少ないお茶です。焙煎の過程で緑茶本来のカフェインの多くが飛ぶため、抹茶やコーヒーよりも明らかに少なくなります。だからこそ、眠れなくなる心配なく温かい一杯を楽しみたい午後や夜に、ほうじ茶ラテは最適です。',
        },
        {
          question: 'ほうじ茶はどんな味ですか？',
          answer: 'ほうじ茶は香ばしくナッツのような、キャラメルを思わせる味わいで、トーストしたナッツや黒糖を少し思わせます。焙煎されているため、緑茶特有の青臭い苦みがほとんどありません。スチームミルクと合わせたラテにすると、なめらかでクリーミー、ほっとする一杯になります。',
        },
        {
          question: 'ワイキキでほうじ茶ラテはどこで飲めますか？',
          answer: 'ほうじ茶ラテは、ワイキキの中心、2142 Kalakaua Ave にある Kona Coffee Donut? で楽しめます。ワイキキビーチから約5分。ほうじ茶ラテは$8.95で、抹茶ラテや100%コナコーヒー、モチドーナツもご用意しています。毎日7時〜21時営業です。',
        },
      ],
    },
    cta: {
      title: 'ワイキキでほうじ茶ラテを',
      text: '2142 Kalakaua Ave の Kona Coffee Donut? で、香ばしくカフェイン控えめのほうじ茶ラテを。モチドーナツとの相性は抜群です。',
      menuButton: 'メニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'ほうじ茶とは？',
    },
  },
  ko: {
    hero: {
      title: '호지차란?',
      subtitle: '고소하고 카페인 낮은 볶은 녹차 라떼를 와이키키에서',
      updated: '2026년 6월 업데이트',
      readTime: '7분 소요',
    },
    definition: {
      title: '호지차란?',
      text: '<strong>호지차(ほうじ茶)</strong>는 <strong>녹차를 숯불이나 고온에 볶은 일본 차</strong>로, 볶는 과정에서 찻잎이 <strong>붉은빛이 도는 갈색</strong>으로 변합니다. 풋내가 나는 일반 녹차와 달리, 호지차는 <strong>고소하고 구수하며 카라멜을 연상시키는 풍미</strong>를 지니고, 녹차 특유의 쓴맛이 거의 없습니다. 볶는 과정에서 <strong>카페인도 자연스럽게 낮아지기</strong> 때문에, 호지차 라떼는 오후나 저녁에 마시기 좋은 음료입니다. 잔에 따르면 말차의 선명한 초록빛이 아닌, 따뜻한 <strong>붉은 호박색(적갈색)</strong>을 띱니다.',
    },
    history: {
      title: '호지차의 역사',
      subtitle: '1920년대 교토의 찻집에서 전 세계 카페까지',
      p1: '호지차가 처음 만들어진 것은 <strong>1920년대 일본 교토</strong>였습니다. 당시 교토의 차 상인들은 팔리지 않고 남은 찻잎과 줄기(쿠키차), 등급이 낮은 녹차를 활용할 방법을 찾고 있었습니다. 버리는 대신 <strong>고온에 볶아 보았더니</strong>, 보잘것없던 남은 잎이 고소하고 맛있는 차로 다시 태어난다는 사실을 발견했습니다.',
      p2: '볶음은 찻잎을 완전히 바꿔 놓았습니다. 높은 열은 초록 찻잎을 <strong>적갈색</strong>으로 만들고, 풋내를 누그러뜨리며, 고소하고 카라멜 같은 깊은 향을 끌어냅니다. 무엇보다 중요한 것은 볶는 과정에서 <strong>카페인이 상당 부분 날아간다는</strong> 점입니다. 덕분에 호지차는 하루 늦은 시간에도 부담 없이 마실 수 있는 차가 되었습니다. 일본에서는 식후에 내어지고, 아이와 어르신에게도 권해지며, 집집마다 사랑받는 일상의 차로 빠르게 자리 잡았습니다.',
      p3: '수십 년이 지나 호지차는 <strong>카페 라떼 풍미</strong>로 제2의 전성기를 맞이합니다. 바리스타들은 볶은 녹차의 고소하고 카라멜 같은 특성이 스팀 밀크와 환상적으로 어울린다는 것을 발견했고, 볶은 견과류와 흑설탕을 연상시키는 크리미한 라떼가 탄생했습니다. 호지차 라떼와 소프트아이스크림, 디저트는 교토의 찻집에서 현대의 카페로 퍼져 나가, 말차와 더불어 일본 차를 대표하는 음료가 되었습니다.',
      p4: '그곳에서 호지차는 태평양을 건넜습니다. 일본계 이민의 역사가 깊고 차를 사랑하는 하와이는 이 고소한 볶음 풍미를 반겼고, 오늘날 <strong>와이키키</strong>에서는 해변 바로 곁에서 호지차 라떼를 즐길 수 있습니다. 이미 말차를 좋아하는 분이라면, 다음으로 꼭 시도해 볼 일본 차가 바로 호지차입니다.',
    },
    comparison: {
      title: '호지차 vs 말차 vs 커피',
      subtitle: '호지차 라떼는 무엇이 다를까?',
      intro: '호지차, 말차, 커피는 카페 음료로서 저마다 전혀 다른 매력을 지닙니다. 호지차 라떼를 비교해 볼까요:',
      headers: {
        feature: '특징',
        bingsu: '호지차',
        shavedIce: '말차',
        kakigori: '커피',
      },
      rows: [
        {
          feature: '제조 방식',
          bingsu: '볶은 녹차 찻잎',
          shavedIce: '곱게 간 녹차 잎(맷돌 제분)',
          kakigori: '볶은 커피 원두',
        },
        {
          feature: '카페인',
          bingsu: '낮음',
          shavedIce: '보통',
          kakigori: '높음',
        },
        {
          feature: '맛',
          bingsu: '고소하고 구수한 카라멜 풍미',
          shavedIce: '풋풋한 채소 같은 감칠맛',
          kakigori: '쌉싸름하고 구수함',
        },
        {
          feature: '색',
          bingsu: '붉은 호박색(적갈색)',
          shavedIce: '선명한 초록',
          kakigori: '갈색',
        },
        {
          feature: '추천 시간',
          bingsu: '오후 또는 저녁',
          shavedIce: '아침부터 점심',
          kakigori: '아침',
        },
        {
          feature: '이런 분께',
          bingsu: '편안하고 카페인 낮은 음료를 원하는 분',
          shavedIce: '선명하고 흙내음 나는 녹차를 좋아하는 분',
          kakigori: '강한 카페인을 원하는 분',
        },
      ],
      note: '핵심은 이렇습니다. 호지차는 셋 중 카페인이 가장 낮고, 유일하게 볶은 카라멜 풍미를 지녔습니다. 그래서 잠 못 들 걱정 없이 편안한 한 잔을 원할 때, 호지차 라떼가 가장 쉬운 선택입니다.',
    },
    types: {
      title: '호지차 즐기는 법과 페어링',
      subtitle: '볶은 녹차를 맛보는 다섯 가지 쉬운 방법',
      items: [
        {
          name: '따뜻한 호지차 라떼',
          korean: '$8.95 · 핫',
          description: '호지차를 맛보는 가장 클래식한 방법. 볶은 녹차를 풀어 스팀 밀크에 부으면, 고소하고 카라멜 같은 견과 풍미에 쓴맛은 거의 없는 따뜻하고 크리미한 한 잔이 됩니다. 호지차 라떼($8.95)는 볶은 녹차에 입문하기에 가장 좋은 메뉴입니다.',
          icon: '☕',
        },
        {
          name: '아이스 호지차 라떼',
          korean: '아이스',
          description: '똑같이 고소한 볶음 풍미를 얼음 위에서. 따뜻한 와이키키 오후에 안성맞춤입니다. 아이스로 마셔도 부드럽고 고소한 풍미는 그대로이면서 한결 시원하며, 우유에 번지는 적갈색은 보기에도 아름답습니다.',
          icon: '🧊',
        },
        {
          name: '호지차 + 모찌 도넛',
          korean: '페어링',
          description: '호지차의 카라멜과 볶은 견과 향은 쫄깃한 모찌 도넛과 찰떡궁합. 호지차 라떼에 초콜릿이나 우베 모찌 도넛을 곁들여 보세요. 볶은 차의 풍미가 단맛을 깔끔하게 잡아 주는, 오후에 딱 좋은 조합입니다.',
          icon: '🍩',
        },
        {
          name: '호지차 vs 말차 라떼',
          korean: '맛 비교',
          description: '무엇을 고를지 망설여진다면, 호지차 라떼와 말차 라떼를 나란히 두고 맛을 비교해 보세요. 말차는 선명하고 풋풋하며 카페인이 조금 더 많고, 호지차는 고소하고 부드러우며 카페인이 낮습니다. 두 가지를 모두 주문해 나눠 드시는 손님도 많습니다.',
          icon: '🍵',
        },
        {
          name: '카페인 낮은 오후를 위해',
          korean: '저카페인',
          description: '볶는 과정에서 카페인이 많이 날아가기 때문에, 호지차는 하루 늦은 시간에 따뜻하고 편안한 무언가를 원할 때 주문하기 좋은 음료입니다. 오후나 저녁에도 밤잠을 방해하지 않는 부드러운 한 잔입니다.',
          icon: '🌙',
        },
      ],
    },
    whyHawaii: {
      title: '와이키키에서 호지차를 마셔야 하는 이유',
      points: [
        {
          title: '대부분 못 마셔 본 고소한 풍미',
          description: '말차나 커피는 거의 모두가 마셔 봤지만, 호지차를 마셔 본 사람은 훨씬 적습니다. 고소하고 구수하며 카라멜을 연상시키는 풍미는 진짜로 새로운 경험이라, 여행지에서 마셔 보고 집에 돌아가서도 찾게 되는 그런 음료입니다. 와이키키는 그것을 발견하기에 완벽한 곳입니다.',
        },
        {
          title: '낮은 카페인 = 언제든 마시는 음료',
          description: '볶는 과정에서 카페인이 많이 날아가기 때문에, 호지차는 오후나 저녁에도 잠을 방해하지 않고 즐기기에 부담이 없습니다. 하루를 마무리하며 쉬고 싶은 분이나 카페인에 민감한 분께 이상적인 한 잔입니다.',
        },
        {
          title: '모찌 도넛과 완벽한 궁합',
          description: '고소한 호지차 라떼와 쫄깃한 모찌 도넛은 저희가 가장 좋아하는 조합 중 하나입니다. 볶은 차의 카라멜 향이 도넛의 단맛을 살려 주어, 와이키키의 오후에 완벽한 간식이 됩니다.',
        },
        {
          title: '해변에서 약 5분',
          description: 'Kona Coffee Donut? 은 칼라카우아 애비뉴 바로 위, 와이키키 비치에서 도보로 약 5분 거리입니다. 해변을 오가는 길에 호지차 라떼와 모찌 도넛을 챙겨 보세요. 더없이 좋은 하와이 간식입니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 호지차 라떼 마시는 곳',
      intro: '와이키키에서 호지차 라떼를 찾고 계신다면, Kona Coffee Donut? 으로 오세요.',
      shop: {
        name: 'Kona Coffee Donut? (코나커피도넛)',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키의 중심, 칼라카우아 애비뉴에 위치한 Kona Coffee Donut? 은 호지차 라떼와 말차 라떼는 물론, 100% 코나 커피와 쫄깃한 모찌 도넛을 함께 제공합니다. 호지차 라떼($8.95)는 볶은 고소함과 낮은 카페인이 매력으로, 오후나 저녁에 딱 좋은 한 잔. 와이키키 비치에서 약 5분 거리입니다.',
        highlights: [
          '고소하고 카페인 낮은 호지차 라떼($8.95)',
          '말차 라떼와 100% 코나 커피도 함께',
          '모찌 도넛과 완벽한 궁합',
          '와이키키 비치에서 약 5분 · 매일 오전 7시–오후 9시 영업',
        ],
      },
      cta: '말차 & 호지차 메뉴 보기',
    },
    howToEat: {
      title: '호지차 즐기는 법',
      subtitle: '첫 호지차 라떼를 위한 팁',
      tips: [
        {
          title: '처음엔 따뜻하게',
          description: '첫 호지차는 따뜻하게 주문해 보세요. 스팀 밀크가 볶은 카라멜·견과의 풍미를 아름답게 끌어냅니다. 따뜻한 한 잔이야말로 풋풋한 녹차와 다른 호지차의 고소하고 편안한 맛을 느끼는 최고의 방법입니다.',
        },
        {
          title: '더울 땐 아이스로',
          description: '따뜻한 와이키키의 날에는 아이스 호지차 라떼가 놀랍도록 시원하면서도 부드럽고 고소한 풍미를 그대로 담고 있습니다. 차가운 우유에 번지는 적갈색 차는 맛만큼이나 보기에도 예쁩니다.',
        },
        {
          title: '모찌 도넛과 함께',
          description: '호지차 라떼는 초콜릿이나 우베 모찌 도넛과 함께 주문해 보세요. 볶은 차의 고소한 카라멜 향이 도넛의 단맛을 알맞게 잡아 주어, 오후에 이상적인 간식이 됩니다.',
        },
        {
          title: '오후나 저녁을 위해 남겨 두기',
          description: '호지차는 자연스럽게 카페인이 낮기 때문에, 하루 늦은 시간에 마시기에 완벽합니다. 밤잠을 방해받지 않으면서 따뜻하고 편안한 무언가를 원할 때 한 잔 주문해 보세요.',
        },
      ],
    },
    faq: {
      title: '호지차에 대해 자주 묻는 질문',
      items: [
        {
          question: '호지차란 무엇인가요?',
          answer: '호지차는 녹차를 숯불이나 고온에 볶은 일본 차로, 볶는 과정에서 찻잎이 적갈색으로 변합니다. 볶음 덕분에 고소하고 구수하며 카라멜 같은 풍미가 나고 쓴맛이 거의 없으며, 카페인도 자연스럽게 낮습니다. 와이키키에서는 칼라카우아 애비뉴의 Kona Coffee Donut? 에서 호지차 라떼를 맛보실 수 있습니다.',
        },
        {
          question: '호지차와 말차의 차이는 무엇인가요?',
          answer: '말차는 녹차 잎을 곱게 간 것으로, 선명한 초록색에 풋풋한 감칠맛과 보통 수준의 카페인을 지닙니다. 호지차는 볶은 녹차로, 적갈색을 띠며 고소한 카라멜·견과 풍미에 카페인이 낮습니다. 한마디로, 말차는 초록빛에 풋풋하고, 호지차는 볶아서 고소한 차입니다.',
        },
        {
          question: '호지차에 카페인이 있나요?',
          answer: '호지차는 카페인이 자연스럽게 낮은 차입니다. 볶는 과정에서 녹차가 본래 지닌 카페인의 상당량이 날아가기 때문에, 말차나 커피보다 눈에 띄게 적습니다. 그래서 카페인 걱정 없이 따뜻한 한 잔을 즐기고 싶은 오후나 저녁에 호지차 라떼가 안성맞춤입니다.',
        },
        {
          question: '호지차는 어떤 맛인가요?',
          answer: '호지차는 고소하고 구수하며 카라멜 같은 맛으로, 볶은 견과와 흑설탕을 살짝 연상시킵니다. 볶은 차이기 때문에 녹차 특유의 풋내와 쓴맛이 거의 없습니다. 스팀 밀크를 더한 라떼로 만들면 부드럽고 크리미하며 편안한 한 잔이 됩니다.',
        },
        {
          question: '와이키키에서 호지차 라떼는 어디서 마실 수 있나요?',
          answer: '호지차 라떼는 와이키키의 중심, 2142 Kalakaua Ave에 있는 Kona Coffee Donut? 에서 즐기실 수 있습니다. 와이키키 비치에서 약 5분 거리입니다. 호지차 라떼는 $8.95이며, 말차 라떼와 100% 코나 커피, 모찌 도넛도 함께 제공합니다. 매일 오전 7시부터 오후 9시까지 영업합니다.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 호지차 라떼를',
      text: '2142 Kalakaua Ave의 Kona Coffee Donut? 에서 고소하고 카페인 낮은 호지차 라떼를 즐겨 보세요. 모찌 도넛과의 궁합은 완벽합니다.',
      menuButton: '메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '호지차란?',
    },
  },
  zh: {
    hero: {
      title: '什么是焙茶 (Hojicha)？',
      subtitle: '低咖啡因、香气焙煎的烘焙绿茶拿铁，就在威基基',
      updated: '2026年6月更新',
      readTime: '阅读约7分钟',
    },
    definition: {
      title: '什么是焙茶？',
      text: '<strong>焙茶（ほうじ茶，Hojicha）</strong>是一种<strong>经过炭火或高温烘焙的日本绿茶</strong>，烘焙会让茶叶变成<strong>偏红的褐色</strong>。与青草味的绿茶不同，焙茶口感<strong>香脆似坚果、带有焦糖般的风味</strong>，几乎没有人们印象中绿茶的苦涩。烘焙过程还让它<strong>天然低咖啡因</strong>，因此一杯焙茶拿铁是下午或傍晚的完美选择。倒入杯中时，它呈现温暖的<strong>红琥珀色（偏红褐色）</strong>，而非抹茶那般鲜亮的绿。',
    },
    history: {
      title: '焙茶的历史',
      subtitle: '从1920年代京都茶铺到世界各地的咖啡馆',
      p1: '焙茶最早诞生于<strong>1920年代的日本京都</strong>。相传，京都的茶商们想找办法用掉卖剩的茶叶、茶梗（茎茶）和等级较低的绿茶。他们没有丢弃，而是<strong>用高温加以烘焙</strong>，结果发现烘焙竟将不起眼的剩茶变成了温润、香脆又美味的好茶。',
      p2: '烘焙彻底改变了茶叶。高温把绿色茶叶变成<strong>偏红的褐色</strong>，柔化了青草气息，并发展出浓郁的坚果与焦糖般香气。同样重要的是，烘焙<strong>带走了大量咖啡因</strong>，让焙茶温和到可以在一天中较晚的时段饮用。在日本，它很快成为一种抚慰人心的日常茶——餐后供应，也常端给孩童与长者，走入千家万户。',
      p3: '数十年后，焙茶以<strong>咖啡馆拿铁风味</strong>迎来第二春。咖啡师们发现，烘焙绿茶的香脆焦糖风味与蒸奶搭配得天衣无缝，造就了一杯尝来略带烤坚果与黑糖味的绵密拿铁。焙茶拿铁、霜淇淋与甜点从京都茶屋走向现代咖啡馆，与抹茶并列为日本茶的招牌饮品。',
      p4: '随后，焙茶跨越了太平洋。拥有深厚日裔渊源、又热爱饮茶的夏威夷欣然接纳了这股香脆的烘焙风味，如今在<strong>威基基</strong>离海滩仅几步之遥就能喝到焙茶拿铁。对于已经爱上抹茶的人来说，焙茶正是下一款值得一试的日本茶。',
    },
    comparison: {
      title: '焙茶 vs 抹茶 vs 咖啡',
      subtitle: '焙茶拿铁有何不同？',
      intro: '焙茶、抹茶和咖啡作为咖啡馆饮品，各有截然不同的魅力。来看看焙茶拿铁的对比：',
      headers: {
        feature: '特点',
        bingsu: '焙茶',
        shavedIce: '抹茶',
        kakigori: '咖啡',
      },
      rows: [
        {
          feature: '制作方式',
          bingsu: '烘焙过的绿茶叶',
          shavedIce: '研磨的绿茶叶（石磨）',
          kakigori: '烘焙的咖啡豆',
        },
        {
          feature: '咖啡因',
          bingsu: '低',
          shavedIce: '中等',
          kakigori: '高',
        },
        {
          feature: '风味',
          bingsu: '香脆坚果、焦糖般',
          shavedIce: '青草、蔬菜般的鲜味',
          kakigori: '苦涩、烘焙香',
        },
        {
          feature: '颜色',
          bingsu: '红琥珀色（偏红褐）',
          shavedIce: '鲜亮的绿',
          kakigori: '褐色',
        },
        {
          feature: '最佳时段',
          bingsu: '下午或傍晚',
          shavedIce: '上午至中午',
          kakigori: '早晨',
        },
        {
          feature: '适合谁',
          bingsu: '想要温暖、低咖啡因饮品的人',
          shavedIce: '喜爱鲜亮、土香绿茶的人',
          kakigori: '想要强劲咖啡因提神的人',
        },
      ],
      note: '关键在于：焙茶是三者中咖啡因最低的，也是唯一带有烘焙焦糖风味的一款。所以当你想要一杯温暖舒心又不怕失眠的饮品时，焙茶拿铁就是最轻松的选择。',
    },
    types: {
      title: '焙茶的享用方式与搭配',
      subtitle: '品尝烘焙绿茶的五种简单方式',
      items: [
        {
          name: '热焙茶拿铁',
          korean: '$8.95 · 热',
          description: '品尝焙茶最经典的方式。将烘焙绿茶打匀后倒入蒸奶，便成就一杯温暖绵密、带有香脆焦糖坚果风味、几乎没有苦涩的拿铁。我们的焙茶拿铁（$8.95）是认识烘焙绿茶的最佳入门。',
          icon: '☕',
        },
        {
          name: '冰焙茶拿铁',
          korean: '冰饮',
          description: '同样香脆的烘焙风味，加冰享用——非常适合温暖的威基基午后。冰焙茶保留了顺滑的坚果风味，同时清爽宜人，偏红褐色在牛奶中晕开，杯中风景也十分好看。',
          icon: '🧊',
        },
        {
          name: '焙茶 + 麻糬甜甜圈',
          korean: '搭配',
          description: '焙茶的焦糖与烤坚果香气，天生就配我们Q弹的麻糬甜甜圈。点一杯焙茶拿铁，再配一个巧克力或紫薯麻糬甜甜圈，烘焙茶香恰好化解甜腻，是惬意午后的绝佳搭配。',
          icon: '🍩',
        },
        {
          name: '焙茶 vs 抹茶拿铁',
          korean: '对比品尝',
          description: '不知如何选择？把焙茶拿铁和抹茶拿铁放在一起品尝差异：抹茶鲜亮、青草味浓、咖啡因略高；焙茶香脆、温润、低咖啡因。许多客人会两款都点，一起分享。',
          icon: '🍵',
        },
        {
          name: '低咖啡因的午后之选',
          korean: '低咖啡因',
          description: '由于烘焙带走了大量咖啡因，焙茶非常适合在一天中较晚的时候想要温暖舒心一杯时点用。下午或傍晚都很温和，不会让你夜里难以入睡。',
          icon: '🌙',
        },
      ],
    },
    whyHawaii: {
      title: '为什么要在威基基喝焙茶',
      points: [
        {
          title: '大多数人没尝过的香脆风味',
          description: '几乎人人都喝过抹茶或咖啡，但尝过焙茶的人要少得多。它香脆似坚果、带焦糖般的风味是一种真正全新的体验——那种你在度假时点上一杯、回家后还会念念不忘的饮品。威基基正是发现它的完美之地。',
        },
        {
          title: '低咖啡因 = 随时可饮',
          description: '烘焙带走了大量咖啡因，因此焙茶足够温和，下午或傍晚饮用也不会影响睡眠。对于想在一天结束时放松，或对咖啡因敏感的人来说，都是理想之选。',
        },
        {
          title: '与麻糬甜甜圈完美搭配',
          description: '一杯香脆的焙茶拿铁配上Q弹的麻糬甜甜圈，是我们最喜欢的组合之一。烘焙茶的焦糖香气平衡了甜甜圈的甜味，成为威基基午后完美的小确幸。',
        },
        {
          title: '距海滩约5分钟',
          description: 'Kona Coffee Donut? 就在卡拉卡瓦大道上，距威基基海滩步行约5分钟。前往海滩或返程途中，带上一杯焙茶拿铁和一个麻糬甜甜圈吧——这正是完美的海岛小食。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基哪里可以喝到焙茶拿铁',
      intro: '如果你在威基基想喝一杯焙茶拿铁，Kona Coffee Donut? 就是你的首选。',
      shop: {
        name: 'Kona Coffee Donut?（科纳咖啡甜甜圈）',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '位于威基基卡拉卡瓦大道中心地段，Kona Coffee Donut? 供应焙茶拿铁与抹茶拿铁，以及100%科纳咖啡和Q弹麻糬甜甜圈。我们的焙茶拿铁（$8.95）烘焙香脆、天然低咖啡因，是下午或傍晚的完美一杯，距威基基海滩约5分钟。',
        highlights: [
          '香脆低咖啡因焙茶拿铁（$8.95）',
          '同时供应抹茶拿铁与100%科纳咖啡',
          '与麻糬甜甜圈完美搭配',
          '距威基基海滩约5分钟 · 每日上午7点至晚上9点营业',
        ],
      },
      cta: '查看抹茶与焙茶菜单',
    },
    howToEat: {
      title: '如何享用焙茶',
      subtitle: '你的第一杯焙茶拿铁小贴士',
      tips: [
        {
          title: '第一次先喝热的',
          description: '第一次喝焙茶，建议点热的。蒸奶能完美衬托出烘焙焦糖坚果的特质，而温热的一杯正是体会焙茶为何如此香脆暖心、又与青草味绿茶不同的最佳方式。',
        },
        {
          title: '炎热时来杯冰的',
          description: '在温暖的威基基，一杯冰焙茶拿铁清爽无比，又完整保留了顺滑的坚果风味。偏红褐色的茶在冰牛奶中晕开，好喝又好看。',
        },
        {
          title: '搭配一个麻糬甜甜圈',
          description: '点焙茶拿铁时，配上一个巧克力或紫薯麻糬甜甜圈。烘焙茶香脆的焦糖气息恰好平衡甜甜圈的甜味，是午后理想的小食搭配。',
        },
        {
          title: '留到下午或傍晚享用',
          description: '由于焙茶天然低咖啡因，非常适合一天中较晚的时段。当你想要温暖舒心又不怕夜里失眠时，就点上一杯吧。',
        },
      ],
    },
    faq: {
      title: '关于焙茶的常见问题',
      items: [
        {
          question: '什么是焙茶？',
          answer: '焙茶是一种经过炭火或高温烘焙的日本绿茶，烘焙会让茶叶变成偏红的褐色。烘焙赋予它香脆似坚果、带焦糖般的风味，几乎没有苦涩，并且天然低咖啡因。在威基基，你可以在卡拉卡瓦大道的 Kona Coffee Donut? 品尝焙茶拿铁。',
        },
        {
          question: '焙茶和抹茶有什么区别？',
          answer: '抹茶是研磨得很细的绿茶叶，呈鲜亮绿色，带有青草般的鲜味和中等咖啡因。焙茶是烘焙过的绿茶，呈偏红褐色，带有香脆的焦糖坚果风味且低咖啡因。简而言之：抹茶是绿色青草味，焙茶是烘焙香脆味。',
        },
        {
          question: '焙茶含咖啡因吗？',
          answer: '焙茶天然低咖啡因。烘焙过程带走了绿茶原本含有的大量咖啡因，因此它明显比抹茶或咖啡更低。这也使焙茶拿铁成为下午或傍晚想喝点温暖又不怕失眠时的绝佳选择。',
        },
        {
          question: '焙茶是什么味道？',
          answer: '焙茶味道香脆似坚果、带焦糖般风味，略带烤坚果与黑糖的气息。由于经过烘焙，它几乎没有人们印象中绿茶的青草苦涩。做成加蒸奶的拿铁后，则变得顺滑、绵密、暖心。',
        },
        {
          question: '在威基基哪里能喝到焙茶拿铁？',
          answer: '你可以在位于威基基中心地段、2142 Kalakaua Ave 的 Kona Coffee Donut? 喝到焙茶拿铁——距威基基海滩约5分钟。焙茶拿铁售价 $8.95，我们也供应抹茶拿铁、100%科纳咖啡和麻糬甜甜圈。每日上午7点至晚上9点营业。',
        },
      ],
    },
    cta: {
      title: '来威基基喝一杯焙茶拿铁',
      text: '前往 2142 Kalakaua Ave 的 Kona Coffee Donut?，品尝我们香脆低咖啡因的焙茶拿铁——与麻糬甜甜圈搭配，堪称绝配。',
      menuButton: '查看菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '什么是焙茶？',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'What Is Hojicha? Roasted Green Tea Lattes in Waikiki',
  description: 'Learn everything about hojicha — Japan\'s roasted green tea. Its history, how it compares to matcha and coffee, why it\'s low in caffeine, and where to find a hojicha latte in Waikiki.',
  image: 'https://www.konacoffeedonut.com/images/blog/what-is-hojicha-waikiki.jpeg',
  author: {
    '@type': 'Organization',
    name: 'Kona Coffee Donut?',
    url: 'https://www.konacoffeedonut.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Kona Coffee Donut?',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.konacoffeedonut.com/logo.png',
    },
  },
  datePublished: '2026-06-23',
  dateModified: '2026-06-23',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/en/blog/what-is-hojicha-waikiki',
  },
  keywords: 'hojicha, what is hojicha, hojicha latte waikiki, hojicha vs matcha, roasted green tea, houjicha waikiki',
  wordCount: 1200,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is hojicha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hojicha is a Japanese green tea that has been roasted over charcoal or high heat, which turns the leaves reddish-brown. The roasting gives it a nutty, toasty, caramel-like flavor with almost no bitterness, and naturally low caffeine. In Waikiki, you can try a hojicha latte at Kona Coffee Donut? on Kalakaua Avenue.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the difference between hojicha and matcha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Matcha is finely ground green tea leaf, bright green in color, with a grassy umami flavor and moderate caffeine. Hojicha is roasted green tea, reddish-amber in color, with a toasty, caramel-nut flavor and low caffeine. In short: matcha is green and grassy, hojicha is roasted and toasty.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does hojicha have caffeine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hojicha is naturally low in caffeine. The roasting process burns off much of the caffeine that green tea normally contains, so hojicha has noticeably less than matcha or coffee. That makes a hojicha latte a great choice for the afternoon or evening when you want something warm without the jitters.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does hojicha taste like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hojicha tastes nutty, toasty, and caramel-like, a little like toasted nuts and brown sugar. Because it is roasted, it has almost none of the grassy bitterness people associate with green tea. As a latte with steamed milk, it becomes smooth, creamy, and cozy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I get a hojicha latte in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can get a hojicha latte at Kona Coffee Donut?, located at 2142 Kalakaua Ave in the heart of Waikiki — about 5 minutes from Waikiki Beach. The Hojicha Latte is $8.95, and we also serve matcha lattes, 100% Kona coffee, and mochi donuts. Open daily 7AM–9PM.',
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

export default function WhatIsHojichaWaikikiPage() {
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
          src="/images/blog/what-is-hojicha-waikiki.jpeg"
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

        {/* History of Hojicha */}
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

        {/* Types of Hojicha */}
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

        {/* Why Try Hojicha in Waikiki */}
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

        {/* Where to Get Hojicha in Waikiki */}
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
                href={`/${locale}/menu`}
                className="inline-block bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-sky-100 transition-colors"
              >
                {t.whereToGet.cta}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* How to Enjoy Hojicha */}
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
              href={`/${locale}/blog/matcha-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 font-semibold transition-colors"
            >
              → Matcha in Waikiki
            </Link>
            <Link
              href={`/${locale}/blog/strawberry-matcha-latte-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Strawberry Matcha Latte in Waikiki
            </Link>
            <Link
              href={`/${locale}/menu`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              {t.whereToGet.cta}
            </Link>
            <Link
              href={`/${locale}/menu/kona-coffee`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Kona Coffee
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
                  href={`/${locale}/menu`}
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
