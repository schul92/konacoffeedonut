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
      title: 'The Story of Matcha',
      subtitle: 'From the Japanese Tea Ceremony to Your Waikiki Cup (2026)',
      updated: 'Updated June 2026',
      readTime: '8 min read',
    },
    definition: {
      title: 'What Is Matcha?',
      text: '<strong>Matcha</strong> is finely ground powder made from <strong>shade-grown green tea leaves</strong> (a type called <em>tencha</em>) that are stone-milled into a bright, vivid green powder. Unlike regular tea, where you steep leaves and throw them away, with matcha you <strong>whisk the whole leaf into water and drink it all</strong> — so you take in far more of its antioxidants, its <strong>umami</strong>-rich flavor, and its caffeine. The taste is grassy and vegetal with a natural, savory sweetness. Because it pairs <strong>caffeine with the calming amino acid L-theanine</strong>, matcha gives a smooth, "calm alert" energy without the jitters or crash of coffee — and <strong>Waikiki is a wonderful place to taste a real, freshly whisked cup</strong>.',
    },
    history: {
      title: 'The Story of Matcha',
      subtitle: 'From Zen Temples and the Tea Ceremony to a Cup by the Beach',
      p1: 'Matcha\'s story begins with <strong>powdered tea in ancient China</strong>, but it found its true home in Japan. In <strong>1191</strong>, the Zen monk <strong>Eisai</strong> is said to have carried tea seeds and the method of preparing powdered green tea back from China. In Zen monasteries, monks drank whisked tea to stay <strong>calm yet alert</strong> during long hours of meditation — the very same balance people love in matcha today.',
      p2: 'Over the centuries, sharing a bowl of matcha grew into <strong>chanoyu</strong>, the Japanese tea ceremony — an art of hospitality, mindfulness, and quiet attention to detail. In the 16th century, the tea master <strong>Sen no Rikyū</strong> shaped the ceremony around simplicity and presence, ideals still honored today. Each bowl is whisked to order with a bamboo whisk called a <strong>chasen</strong> and served in a wide tea bowl, the <strong>chawan</strong> — turning a simple drink into a moment of calm.',
      p3: 'The flavor comes from the way the leaves are grown. For a few weeks before harvest, the tea plants are <strong>covered in shade</strong>. Starved of direct sun, the leaves produce more chlorophyll (that vivid green) and more <strong>L-theanine and umami</strong>. Only the softest leaves are picked, steamed, dried, and de-veined into <em>tencha</em>, then slowly <strong>stone-ground into an ultra-fine powder</strong>. A single stone mill may produce only about 30–40 grams of matcha in an hour — which is part of why great matcha is treasured.',
      p4: 'That long journey — from Zen temples to the tea ceremony to a shop on Kalākaua Avenue — is what you\'re tasting in a modern matcha latte. Whisked fresh and poured over milk and ice, matcha has become a beloved <strong>coffee alternative</strong> around the world. And in Waikiki, you can enjoy that centuries-old craft in the most relaxed setting imaginable: <strong>a bright, freshly whisked cup, minutes from the beach, next to a warm mochi donut.</strong>',
    },
    comparison: {
      title: 'Ceremonial vs. Culinary Grade Matcha',
      subtitle: 'Not All Green Powder Is the Same',
      intro: 'Matcha is sold in different grades depending on how the leaves are grown and ground. Here\'s a simple guide to what separates true ceremonial matcha from culinary grade — and from the "matcha-flavored" powders that aren\'t really matcha at all:',
      headers: {
        feature: 'What to look for',
        bingsu: 'Ceremonial grade',
        shavedIce: 'Culinary grade',
        kakigori: '"Matcha flavored"',
      },
      rows: [
        {
          feature: 'Leaves used',
          bingsu: 'Youngest shade-grown tencha leaves',
          shavedIce: 'Later-harvest green tea leaves',
          kakigori: 'Green tea dust, sugar & coloring',
        },
        {
          feature: 'Color',
          bingsu: 'Vivid, bright jade green',
          shavedIce: 'Duller, more olive green',
          kakigori: 'Artificially bright or faded',
        },
        {
          feature: 'Flavor',
          bingsu: 'Smooth, umami, naturally sweet',
          shavedIce: 'Bolder, slightly bitter',
          kakigori: 'Sweet, flat, no real tea depth',
        },
        {
          feature: 'Best for',
          bingsu: 'Whisked on its own or in lattes',
          shavedIce: 'Lattes, baking, smoothies',
          kakigori: 'Not much — mostly sugar',
        },
        {
          feature: 'Texture',
          bingsu: 'Silky, ultra-fine, stone-ground',
          shavedIce: 'Fine but slightly coarser',
          kakigori: 'Powdery, often clumpy',
        },
        {
          feature: 'Verdict',
          bingsu: 'The real thing',
          shavedIce: 'Great in a latte',
          kakigori: 'Skip it',
        },
      ],
      note: 'The one rule that matters most: real matcha is made from <em>tencha</em> green tea leaves, not "matcha flavoring." A great matcha latte can use either ceremonial or good culinary grade — what you want to avoid is a sweet powder with no genuine tea in it. When it\'s whisked fresh from real matcha, you can taste the difference immediately.',
    },
    types: {
      title: 'The Story in Every Cup',
      subtitle: 'Five Things That Make Matcha Special',
      items: [
        {
          name: 'Shade-Grown Leaves',
          korean: 'Tencha, grown in shade',
          description: 'For weeks before harvest, the tea plants are covered to block the sun. This boosts chlorophyll and L-theanine, giving matcha its vivid green color and smooth, umami-rich taste. It\'s the first secret behind why real matcha tastes so different from ordinary green tea.',
          icon: '🍃',
        },
        {
          name: 'Stone-Ground Powder',
          korean: 'Slowly milled by stone',
          description: 'The finest leaves are dried into tencha, then ground between granite stones so slowly that one mill makes just a few grams an hour. The result is an ultra-fine powder that dissolves into a silky, whisked cup — no straining, no leaves left behind.',
          icon: '🪨',
        },
        {
          name: 'The Whisk & Bowl',
          korean: 'Chasen & chawan',
          description: 'Traditionally, matcha is whisked with a bamboo whisk (a chasen) in a wide bowl (a chawan) until it turns frothy and smooth. That simple ritual comes straight from the tea ceremony — a moment of calm attention in every cup.',
          icon: '🍵',
        },
        {
          name: 'Umami Flavor',
          korean: 'Grassy, sweet, savory',
          description: 'Great matcha tastes grassy and vegetal with a natural, savory sweetness called umami — never harshly bitter. Milk and a touch of sweetness round it out in a latte, while the earthy green depth still shines through underneath.',
          icon: '🌿',
        },
        {
          name: 'Calm-Alert Energy',
          korean: 'Caffeine + L-theanine',
          description: 'Matcha pairs caffeine with L-theanine, an amino acid that promotes calm focus. Together they give a smooth, steady "calm alert" energy — the same balance Zen monks valued for meditation, and a big reason matcha is loved as a gentler coffee alternative.',
          icon: '✨',
        },
      ],
    },
    whyHawaii: {
      title: 'Why Matcha? The Benefits',
      points: [
        {
          title: 'Rich in Antioxidants',
          description: 'Because you drink the whole ground leaf, a cup of matcha delivers a concentrated dose of antioxidants — especially catechins like EGCG. You\'re getting far more of the leaf\'s beneficial compounds than you would from a steeped-and-discarded tea bag.',
        },
        {
          title: 'Calm, Steady Energy',
          description: 'Matcha\'s caffeine comes alongside L-theanine, an amino acid that encourages relaxed focus. The combination gives a smooth "calm alert" lift without the jittery spike and crash many people feel from coffee — clear energy that lasts.',
        },
        {
          title: 'A Gentler Coffee Alternative',
          description: 'If coffee leaves you wired or anxious, matcha is a wonderful switch. It has meaningful caffeine but delivers it gently, so it\'s a favorite for anyone who wants a lift that feels calm rather than intense. It\'s the reason so many coffee drinkers keep a matcha in rotation.',
        },
        {
          title: 'Endlessly Versatile',
          description: 'Matcha shines whisked on its own, poured into a creamy latte, blended into fruit flavors, or swapped for a roasted hojicha base. That flexibility — plus its beautiful green color — is why it has become one of the most beloved drinks in cafés around the world.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Drink Real Matcha in Waikiki',
      intro: 'Once you know the story, you\'ll want to taste it. For a freshly whisked cup near Waikiki Beach, Kona Coffee Donut? is a great place to start.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Right on Kalākaua Avenue in the heart of Waikiki, Kona Coffee Donut? whisks a real Matcha Latte ($8.95) plus a full flavored-matcha lineup — strawberry, mango, coconut, guava, and banana — and you can even choose a roasted Hojicha base instead. Our Strawberry Matcha is far and away the crowd favorite: whisked green tea layered with sweet berry, it\'s the one guests keep coming back for. Pair any of them with a warm mochi donut, about a 5-minute walk from Waikiki Beach.',
        highlights: [
          'Real Matcha Latte ($8.95), whisked fresh',
          'Flavored matcha: strawberry (our bestseller), mango, coconut, guava, banana',
          'Choose a roasted Hojicha base too',
          'Open daily, 7AM–9PM · (808) 260-1835',
        ],
      },
      cta: 'See Our Matcha Menu',
    },
    howToEat: {
      title: 'How to Enjoy Your Matcha',
      subtitle: 'Simple Tips to Get the Most From Every Cup',
      tips: [
        {
          title: 'Taste It Fresh',
          description: 'Matcha is at its best whisked and poured to order. Drink it soon after it\'s made, while the color is vivid and the flavor is bright — that\'s when the smooth, grassy sweetness really shines. A freshly made cup beats one that\'s been sitting every time.',
        },
        {
          title: 'Try the Classic First',
          description: 'Before diving into fruit flavors, try a plain Matcha Latte to get to know matcha\'s real character — the umami depth and gentle green sweetness. Once you know what real matcha tastes like, the flavored versions become even more fun.',
        },
        {
          title: 'Then Explore the Flavors',
          description: 'Feeling adventurous? Our Strawberry Matcha is the runaway favorite, but mango, coconut, guava, and banana are all worth a try. Or swap in a roasted Hojicha base for a nuttier, mellower cup — a lovely change of pace from the grassy green.',
        },
        {
          title: 'Pair It With a Mochi Donut',
          description: 'Matcha\'s earthy sweetness is a perfect match for a warm, chewy mochi donut. Order both, find a seat, and let a quick drink stop become a little Waikiki ritual — a modern echo of that centuries-old habit of pairing tea with something sweet.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About Matcha',
      items: [
        {
          question: 'What is matcha?',
          answer: 'Matcha is a finely ground powder made from shade-grown green tea leaves (called tencha) that are stone-milled into a bright green powder. Unlike regular tea, you whisk the whole leaf into water and drink it all, so you take in more of its antioxidants, umami flavor, and caffeine. It tastes grassy and vegetal with a natural, savory sweetness.',
        },
        {
          question: 'Is matcha healthier than coffee?',
          answer: 'Both have their strengths. Matcha delivers antioxidants (especially catechins) because you drink the whole leaf, and it pairs caffeine with L-theanine for a calmer, steadier "calm alert" energy without the jitters or crash some people get from coffee. If coffee leaves you anxious, matcha is often a gentler choice — though the best cup is simply the one you enjoy.',
        },
        {
          question: 'Does matcha have caffeine?',
          answer: 'Yes. Matcha contains caffeine — a typical serving has a meaningful amount, though usually less than a strong coffee. What makes it special is that its caffeine comes alongside L-theanine, an amino acid that promotes calm focus, so the energy feels smooth and steady rather than sharp.',
        },
        {
          question: 'What is the difference between ceremonial and culinary grade matcha?',
          answer: 'Ceremonial grade uses the youngest shade-grown leaves, has a vivid green color, and a smooth, naturally sweet, umami taste meant for whisking on its own. Culinary grade is bolder and slightly more bitter, ideal for lattes, baking, and smoothies. Both are real matcha — the thing to avoid is a sweet "matcha-flavored" powder that contains little genuine tea.',
        },
        {
          question: 'Where can I get real matcha in Waikiki?',
          answer: 'Kona Coffee Donut? at 2142 Kalakaua Ave whisks a real Matcha Latte ($8.95) plus flavored matcha in strawberry (the bestseller), mango, coconut, guava, and banana, with an optional roasted Hojicha base. We\'re about a 5-minute walk from Waikiki Beach, open daily 7AM–9PM, (808) 260-1835 — and you can pair your matcha with a fresh mochi donut.',
        },
      ],
    },
    cta: {
      title: 'Taste the Story of Matcha in Waikiki',
      text: 'Visit Kona Coffee Donut? at 2142 Kalakaua Ave and try a real matcha latte — whisked fresh and paired with a warm mochi donut, just minutes from Waikiki Beach.',
      menuButton: 'View Matcha Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'The Story of Matcha',
    },
  },
  ja: {
    hero: {
      title: '抹茶の物語',
      subtitle: '日本の茶道から、ワイキキのあなたの一杯まで（2026年版）',
      updated: '2026年6月更新',
      readTime: '8分で読める',
    },
    definition: {
      title: '抹茶とは？',
      text: '<strong>抹茶</strong>とは、<strong>日光を遮って栽培された緑茶の葉</strong>（<em>碾茶（てんちゃ）</em>と呼ばれる種類）を石臼で挽き、鮮やかな緑色の粉にしたものです。葉を浸して捨てる普通のお茶と違い、抹茶は<strong>葉そのものを湯に溶いて丸ごといただきます</strong>。そのため、抗酸化成分や<strong>うま味</strong>豊かな風味、カフェインをより多く摂り込めます。味わいは草のような青々しさに、自然でまろやかな甘みが重なります。<strong>カフェインと、リラックスをもたらすアミノ酸L-テアニンを併せ持つ</strong>ため、抹茶はコーヒーのような神経の高ぶりや急な失速のない、なめらかな「穏やかな覚醒」をくれます。そして<strong>ワイキキは、本物の点てたての一杯を味わうのにぴったりの場所</strong>です。',
    },
    history: {
      title: '抹茶の物語',
      subtitle: '禅寺と茶道から、ビーチのそばの一杯まで',
      p1: '抹茶の物語は<strong>古代中国の粉末茶</strong>に始まりますが、真の故郷となったのは日本でした。<strong>1191年</strong>、禅僧<strong>栄西</strong>が中国から茶の種と抹茶を点てる作法を持ち帰ったと伝えられます。禅の寺院では、僧たちが長い坐禅の間<strong>穏やかでありながら冴えた状態</strong>を保つために点てた茶を飲みました——まさに今日、人々が抹茶に愛するのと同じ均衡です。',
      p2: '幾世紀もかけて、一碗の抹茶を分かち合うことは<strong>茶の湯</strong>——日本の茶道へと育っていきました。もてなし、心を静めること、細部への静かな注意を尊ぶ芸術です。16世紀には茶人<strong>千利休</strong>が、簡素さと「今この時」を軸に茶道を大成させ、その理想は今も受け継がれています。一碗ごとに<strong>茶筅（ちゃせん）</strong>と呼ばれる竹の道具で点て、<strong>茶碗（ちゃわん）</strong>という広い器で供される——単なる飲み物が、静けさのひとときへと変わります。',
      p3: '風味は葉の育て方から生まれます。収穫前の数週間、茶樹は<strong>覆いをかけて日陰で育てられます</strong>。直射日光を絶たれた葉は、より多くの葉緑素（あの鮮やかな緑）と<strong>L-テアニンやうま味</strong>を蓄えます。最も柔らかな葉だけを摘み、蒸し、乾かし、葉脈を取り除いて<em>碾茶</em>にし、それをゆっくりと<strong>石臼で極めて細かい粉に挽きます</strong>。石臼一台で1時間にわずか30〜40グラムほどしか挽けないこともあり、それが優れた抹茶が貴ばれる理由のひとつです。',
      p4: 'その長い旅——禅寺から茶道、そしてカラカウア通りの一軒の店まで——こそが、現代の抹茶ラテで味わっているものです。点てたてをミルクと氷に注いだ抹茶は、世界中で愛される<strong>コーヒーの代わりの一杯</strong>になりました。そしてワイキキでは、その何世紀もの技を、これ以上ないほどくつろいだ場で楽しめます——<strong>ビーチから数分、点てたての鮮やかな一杯を、温かいモチドーナツと共に。</strong>',
    },
    comparison: {
      title: '抹茶の等級：茶道用と製菓用',
      subtitle: '緑の粉ならすべて同じ、ではありません',
      intro: '抹茶は、葉の育て方や挽き方によっていくつかの等級で売られています。本物の茶道用（セレモニアル）と製菓用（クッキング）、そして本当は抹茶ではない「抹茶風味」の粉との違いを、簡単にご案内します：',
      headers: {
        feature: 'チェックポイント',
        bingsu: '茶道用（セレモニアル）',
        shavedIce: '製菓用（クッキング）',
        kakigori: '「抹茶風味」',
      },
      rows: [
        {
          feature: '使う葉',
          bingsu: '最も若い日陰栽培の碾茶',
          shavedIce: '遅摘みの緑茶の葉',
          kakigori: '緑茶の粉＋砂糖・着色料',
        },
        {
          feature: '色',
          bingsu: '鮮やかで明るい翡翠色',
          shavedIce: 'やや暗いオリーブ寄りの緑',
          kakigori: '人工的に鮮やか、または退色',
        },
        {
          feature: '味わい',
          bingsu: 'なめらか、うま味、自然な甘み',
          shavedIce: '力強く、やや苦め',
          kakigori: '甘いだけで茶のコクがない',
        },
        {
          feature: '向いている用途',
          bingsu: 'そのまま点てる、ラテに',
          shavedIce: 'ラテ、製菓、スムージー',
          kakigori: 'ほぼ砂糖、使い道は限定的',
        },
        {
          feature: '舌触り',
          bingsu: '絹のよう、極細、石臼挽き',
          shavedIce: '細かいがやや粗め',
          kakigori: '粉っぽく、ダマになりがち',
        },
        {
          feature: '結論',
          bingsu: '本物',
          shavedIce: 'ラテに最適',
          kakigori: '避けたい',
        },
      ],
      note: '最も大切なルールはひとつ。本物の抹茶は「抹茶風味」ではなく、<em>碾茶</em>の緑茶葉から作られます。美味しい抹茶ラテには茶道用でも良質な製菓用でも構いません——避けたいのは、本物のお茶がほとんど入っていない甘い粉です。本物の抹茶を点てたてでいただけば、その違いはすぐに分かります。',
    },
    types: {
      title: '一杯ごとに宿る物語',
      subtitle: '抹茶を特別にする5つのこと',
      items: [
        {
          name: '日陰で育つ葉',
          korean: '碾茶、日陰で栽培',
          description: '収穫前の数週間、茶樹を覆って日光を遮ります。これにより葉緑素とL-テアニンが増え、抹茶の鮮やかな緑色と、なめらかでうま味豊かな味わいが生まれます。本物の抹茶が普通の緑茶とこれほど違う、最初の秘密です。',
          icon: '🍃',
        },
        {
          name: '石臼挽きの粉',
          korean: '石臼でゆっくり',
          description: '最上の葉を碾茶に乾かし、御影石の石臼でごくゆっくり挽きます。1時間にわずか数グラムしか挽けないほど。こうして生まれる極細の粉が、絹のような点てた一杯に溶けます——濾す必要も、残る葉もありません。',
          icon: '🪨',
        },
        {
          name: '茶筅と茶碗',
          korean: '茶筅・茶碗',
          description: '伝統的に、抹茶は竹の茶筅で、広い茶碗の中でなめらかに泡立つまで点てます。この簡素な所作は茶道そのもの——一杯ごとに宿る、静かな心づかいのひとときです。',
          icon: '🍵',
        },
        {
          name: 'うま味の風味',
          korean: '青々しく、甘く、旨い',
          description: '優れた抹茶は、草のような青々しさに、うま味と呼ばれる自然で旨みのある甘さが重なり、けっしてえぐくは苦くありません。ラテではミルクとほんの少しの甘みが味を整え、その下では大地のような緑の奥行きが輝き続けます。',
          icon: '🌿',
        },
        {
          name: '穏やかな覚醒',
          korean: 'カフェイン＋L-テアニン',
          description: '抹茶はカフェインを、穏やかな集中を促すアミノ酸L-テアニンと共に届けます。両者が合わさり、なめらかで安定した「穏やかな覚醒」を生みます——禅僧が坐禅のために重んじたのと同じ均衡であり、抹茶が優しいコーヒー代替として愛される大きな理由です。',
          icon: '✨',
        },
      ],
    },
    whyHawaii: {
      title: 'なぜ抹茶？その効能',
      points: [
        {
          title: '抗酸化成分が豊富',
          description: '葉を丸ごと飲むため、一杯の抹茶は抗酸化成分——とくにEGCGなどのカテキン——を凝縮して届けます。浸して捨てるティーバッグよりも、葉の有益な成分をずっと多く摂り込めます。',
        },
        {
          title: '穏やかで持続する活力',
          description: '抹茶のカフェインは、ゆったりした集中を促すアミノ酸L-テアニンと共にあります。この組み合わせが、コーヒーで感じがちな高ぶりと急な失速のない、なめらかな「穏やかな覚醒」をもたらします——澄んだ活力が長く続くのです。',
        },
        {
          title: '優しいコーヒーの代わりに',
          description: 'コーヒーで神経が高ぶったり不安になったりする方には、抹茶は素敵な切り替えです。しっかりカフェインはありながら、それを穏やかに届けるので、激しさではなく落ち着きを感じたい方に人気です。多くのコーヒー好きが抹茶を常備する理由でもあります。',
        },
        {
          title: '限りない万能さ',
          description: '抹茶は、そのまま点てても、クリーミーなラテに注いでも、フルーツの風味と合わせても、香ばしいほうじ茶ベースに替えても輝きます。その柔軟さ——そして美しい緑色——こそ、世界中のカフェで最も愛される飲み物のひとつになった理由です。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキで本物の抹茶を飲むなら',
      intro: '物語を知れば、味わってみたくなるはず。ワイキキビーチ近くで点てたての一杯をお探しなら、Kona Coffee Donut? が最適なスタート地点です。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心、カラカウア通り沿いに位置する Kona Coffee Donut? では、本物の抹茶ラテ（$8.95）に加え、ストロベリー、マンゴー、ココナッツ、グァバ、バナナと、フレーバー抹茶を勢揃い。香ばしいほうじ茶ベースも選べます。ストロベリー抹茶は断トツの一番人気——点てた抹茶に甘いベリーを重ねた一杯で、お客様が何度も戻ってきてくださる看板メニューです。どれも温かいモチドーナツと好相性。ワイキキビーチから徒歩約5分です。',
        highlights: [
          '本物の抹茶ラテ（$8.95）、点てたて',
          'フレーバー抹茶：ストロベリー（一番人気）、マンゴー、ココナッツ、グァバ、バナナ',
          '香ばしいほうじ茶ベースも選べます',
          '毎日営業、午前7時〜午後9時 ・ (808) 260-1835',
        ],
      },
      cta: '抹茶メニューを見る',
    },
    howToEat: {
      title: '抹茶の楽しみ方',
      subtitle: '一杯を最大限に味わう簡単なコツ',
      tips: [
        {
          title: '点てたてを味わう',
          description: '抹茶は、注文ごとに点てて注いだときが最高です。色が鮮やかで風味が明るいうちに、できたてを味わいましょう——なめらかで草のような甘みが最も輝く瞬間です。時間の経った一杯より、いつだって点てたてが勝ります。',
        },
        {
          title: 'まずは定番から',
          description: 'フルーツ系に進む前に、まずプレーンな抹茶ラテで抹茶本来の個性——うま味の奥行きと穏やかな緑の甘み——を知りましょう。本物の抹茶の味を知れば、フレーバー版がいっそう楽しくなります。',
        },
        {
          title: 'それからフレーバーを',
          description: '冒険したい気分なら、断トツ人気のストロベリー抹茶をはじめ、マンゴー、ココナッツ、グァバ、バナナもぜひ。あるいは香ばしいほうじ茶ベースに替えれば、ナッツのようにまろやかな一杯に——青々しい緑からの心地よい気分転換です。',
        },
        {
          title: 'モチドーナツと合わせる',
          description: '抹茶の大地のような甘みは、温かくもちもちのモチドーナツと相性抜群。両方注文して席を見つければ、さっとの一杯がワイキキの小さな儀式に——お茶と甘いものを合わせる、何世紀もの習わしの現代版です。',
        },
      ],
    },
    faq: {
      title: '抹茶に関するよくある質問',
      items: [
        {
          question: '抹茶とは何ですか？',
          answer: '抹茶とは、日陰で育てた緑茶の葉（碾茶）を石臼で挽き、鮮やかな緑色の粉にしたものです。葉を浸して捨てる普通のお茶と違い、葉そのものを湯に溶いて丸ごと飲むため、抗酸化成分やうま味、カフェインをより多く摂り込めます。味わいは草のような青々しさに、自然でまろやかな甘みが重なります。',
        },
        {
          question: '抹茶はコーヒーより健康的ですか？',
          answer: 'どちらにも良さがあります。抹茶は葉を丸ごと飲むため抗酸化成分（とくにカテキン）を届け、カフェインを穏やかな集中を促すL-テアニンと併せ持つので、コーヒーで感じがちな高ぶりや失速のない、なめらかで安定した「穏やかな覚醒」をくれます。コーヒーで不安になりやすい方には、抹茶がより優しい選択になることが多いです——ただ、最高の一杯は結局、あなたが楽しめる一杯です。',
        },
        {
          question: '抹茶にカフェインはありますか？',
          answer: 'はい。抹茶にはカフェインが含まれます。一杯あたりしっかりした量がありますが、通常は濃いコーヒーよりは少なめです。特別なのは、そのカフェインが穏やかな集中を促すアミノ酸L-テアニンと共にある点で、活力が鋭くならず、なめらかで安定して感じられます。',
        },
        {
          question: '茶道用と製菓用の抹茶は何が違いますか？',
          answer: '茶道用（セレモニアル）は最も若い日陰栽培の葉を使い、鮮やかな緑色と、そのまま点てるためのなめらかで自然な甘み・うま味があります。製菓用（クッキング）はより力強くやや苦めで、ラテや製菓、スムージーに最適です。どちらも本物の抹茶で、避けたいのは本物のお茶がほとんど入っていない甘い「抹茶風味」の粉です。',
        },
        {
          question: 'ワイキキで本物の抹茶はどこで飲めますか？',
          answer: '2142 Kalakaua Ave の Kona Coffee Donut? では、本物の抹茶ラテ（$8.95）に加え、ストロベリー（一番人気）、マンゴー、ココナッツ、グァバ、バナナのフレーバー抹茶をご用意し、香ばしいほうじ茶ベースも選べます。ワイキキビーチから徒歩約5分、毎日午前7時〜午後9時営業、(808) 260-1835——抹茶を淹れたてのモチドーナツと合わせられます。',
        },
      ],
    },
    cta: {
      title: 'ワイキキで抹茶の物語を味わおう',
      text: '2142 Kalakaua Ave の Kona Coffee Donut? で、本物の抹茶ラテを——点てたてを、温かいモチドーナツと共に。ワイキキビーチからわずか数分です。',
      menuButton: '抹茶メニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: '抹茶の物語',
    },
  },
  ko: {
    hero: {
      title: '말차 이야기',
      subtitle: '일본 다도에서 와이키키의 당신 한 잔까지 (2026)',
      updated: '2026년 6월 업데이트',
      readTime: '8분 소요',
    },
    definition: {
      title: '말차란?',
      text: '<strong>말차(마차)</strong>는 <strong>햇빛을 가려 재배한 녹차 잎</strong>(<em>텐차</em>라 불리는 종류)을 맷돌로 갈아 밝고 선명한 초록빛 가루로 만든 것입니다. 잎을 우려내고 버리는 보통 차와 달리, 말차는 <strong>잎 자체를 물에 풀어 통째로 마십니다</strong>. 그래서 항산화 성분과 <strong>감칠맛(우마미)</strong> 가득한 풍미, 카페인을 훨씬 더 많이 섭취하게 됩니다. 맛은 풀 향 나는 채소 같은 느낌에 자연스럽고 은은한 단맛이 어우러집니다. <strong>카페인과 함께 마음을 가라앉히는 아미노산 L-테아닌</strong>을 지녀, 말차는 커피 같은 초조함이나 급격한 무기력 없이 부드러운 "차분한 각성" 에너지를 줍니다. 그리고 <strong>와이키키는 갓 저은 진짜 한 잔을 맛보기에 더없이 좋은 곳</strong>입니다.',
    },
    history: {
      title: '말차 이야기',
      subtitle: '선(禪) 사찰과 다도에서 해변 옆 한 잔까지',
      p1: '말차의 이야기는 <strong>고대 중국의 가루차</strong>에서 시작되지만, 진정한 고향이 된 곳은 일본입니다. <strong>1191년</strong>, 선승 <strong>에이사이</strong>가 중국에서 차 씨앗과 가루 녹차를 준비하는 법을 가지고 돌아왔다고 전해집니다. 선(禪) 사찰에서 승려들은 긴 명상 시간 동안 <strong>차분하면서도 또렷한</strong> 상태를 유지하기 위해 저은 차를 마셨습니다 — 바로 오늘날 사람들이 말차에서 사랑하는 그 균형입니다.',
      p2: '여러 세기에 걸쳐, 말차 한 사발을 나누는 일은 <strong>차노유</strong> — 일본 다도로 자라났습니다. 환대, 마음챙김, 그리고 세심함에 대한 고요한 주의의 예술이죠. 16세기에는 다도의 대가 <strong>센노 리큐</strong>가 간소함과 지금 이 순간을 중심으로 다도를 완성했고, 그 이상은 지금도 존중받습니다. 한 사발 한 사발을 <strong>차센(대나무 차솔)</strong>으로 저어, 넓은 <strong>차완(찻사발)</strong>에 담아냅니다 — 단순한 음료가 고요한 한때로 바뀌는 것이죠.',
      p3: '풍미는 잎을 기르는 방식에서 나옵니다. 수확 전 몇 주 동안 차나무는 <strong>그늘로 덮여</strong> 자랍니다. 직사광선이 차단된 잎은 엽록소(그 선명한 초록)와 <strong>L-테아닌, 감칠맛</strong>을 더 많이 만들어냅니다. 가장 여린 잎만 따서 찌고 말리고 잎맥을 제거해 <em>텐차</em>로 만든 뒤, 천천히 <strong>맷돌로 아주 고운 가루로 갈아냅니다</strong>. 맷돌 하나로 한 시간에 약 30~40그램밖에 갈지 못하기도 하는데, 이것이 좋은 말차가 귀하게 여겨지는 이유 중 하나입니다.',
      p4: '그 긴 여정 — 선 사찰에서 다도로, 그리고 칼라카우아 애비뉴의 한 가게까지 — 이 바로 현대의 말차 라테에서 맛보는 것입니다. 갓 저어 우유와 얼음에 부은 말차는 전 세계에서 사랑받는 <strong>커피 대안</strong>이 되었습니다. 그리고 와이키키에서는 그 수백 년의 솜씨를 가장 편안한 배경에서 즐길 수 있습니다 — <strong>해변에서 몇 분 거리, 갓 저은 선명한 한 잔을, 따뜻한 모찌 도넛과 함께.</strong>',
    },
    comparison: {
      title: '말차 등급: 의식용 vs 조리용',
      subtitle: '초록 가루라고 다 같은 건 아닙니다',
      intro: '말차는 잎을 기르고 가는 방식에 따라 여러 등급으로 팔립니다. 진짜 의식용(세리모니얼) 말차와 조리용(컬리너리), 그리고 사실은 말차가 아닌 "말차 향" 가루의 차이를 간단히 안내합니다:',
      headers: {
        feature: '확인할 점',
        bingsu: '의식용(세리모니얼)',
        shavedIce: '조리용(컬리너리)',
        kakigori: '"말차 향"',
      },
      rows: [
        {
          feature: '사용하는 잎',
          bingsu: '가장 여린 그늘 재배 텐차',
          shavedIce: '늦게 수확한 녹차 잎',
          kakigori: '녹차 분말＋설탕·색소',
        },
        {
          feature: '색',
          bingsu: '선명하고 밝은 옥빛 초록',
          shavedIce: '칙칙한 올리브 쪽 초록',
          kakigori: '인위적으로 밝거나 바랜 색',
        },
        {
          feature: '풍미',
          bingsu: '부드럽고 감칠맛, 자연스러운 단맛',
          shavedIce: '더 진하고 살짝 쌉쌀함',
          kakigori: '달기만 하고 차의 깊이 없음',
        },
        {
          feature: '적합한 용도',
          bingsu: '그대로 젓거나 라테에',
          shavedIce: '라테, 베이킹, 스무디',
          kakigori: '대부분 설탕, 용도 제한적',
        },
        {
          feature: '질감',
          bingsu: '비단결, 초미세, 맷돌 분쇄',
          shavedIce: '곱지만 약간 거친 편',
          kakigori: '가루가 날리고 잘 뭉침',
        },
        {
          feature: '결론',
          bingsu: '진짜',
          shavedIce: '라테에 제격',
          kakigori: '피하세요',
        },
      ],
      note: '가장 중요한 단 하나의 원칙: 진짜 말차는 "말차 향"이 아니라 <em>텐차</em> 녹차 잎으로 만듭니다. 훌륭한 말차 라테에는 의식용이든 좋은 조리용이든 상관없습니다 — 피해야 할 것은 진짜 차가 거의 없는 단 가루입니다. 진짜 말차를 갓 저어 마시면, 그 차이를 즉시 느낄 수 있습니다.',
    },
    types: {
      title: '한 잔마다 담긴 이야기',
      subtitle: '말차를 특별하게 만드는 다섯 가지',
      items: [
        {
          name: '그늘에서 자란 잎',
          korean: '텐차, 그늘 재배',
          description: '수확 전 몇 주 동안 차나무를 덮어 햇빛을 가립니다. 이로써 엽록소와 L-테아닌이 늘어나 말차의 선명한 초록빛과 부드럽고 감칠맛 가득한 풍미가 생깁니다. 진짜 말차가 보통 녹차와 이토록 다른 첫 번째 비밀입니다.',
          icon: '🍃',
        },
        {
          name: '맷돌로 간 가루',
          korean: '맷돌로 천천히',
          description: '가장 좋은 잎을 텐차로 말린 뒤, 화강암 맷돌로 아주 천천히 갑니다. 한 시간에 몇 그램밖에 갈지 못할 정도죠. 그렇게 나온 초미세 가루가 비단결처럼 저은 한 잔에 녹아듭니다 — 거를 필요도, 남는 잎도 없습니다.',
          icon: '🪨',
        },
        {
          name: '차솔과 찻사발',
          korean: '차센과 차완',
          description: '전통적으로 말차는 대나무 차솔(차센)로 넓은 사발(차완) 안에서 곱게 거품이 일 때까지 젓습니다. 그 단순한 의식은 다도에서 곧바로 온 것 — 한 잔마다 담긴 고요한 정성의 한때입니다.',
          icon: '🍵',
        },
        {
          name: '감칠맛 풍미',
          korean: '풀 향, 달콤, 감칠맛',
          description: '좋은 말차는 풀 향 나는 채소 같은 느낌에 우마미라 불리는 자연스럽고 감칠맛 나는 단맛이 어우러지며, 거칠게 쓰지 않습니다. 라테에서는 우유와 약간의 단맛이 맛을 다듬고, 그 아래로 흙내음 나는 초록의 깊이가 계속 빛납니다.',
          icon: '🌿',
        },
        {
          name: '차분한 각성 에너지',
          korean: '카페인 + L-테아닌',
          description: '말차는 카페인을, 차분한 집중을 돕는 아미노산 L-테아닌과 함께 전합니다. 둘이 어우러져 부드럽고 안정적인 "차분한 각성" 에너지를 만듭니다 — 선승들이 명상을 위해 소중히 여긴 바로 그 균형이자, 말차가 더 순한 커피 대안으로 사랑받는 큰 이유입니다.',
          icon: '✨',
        },
      ],
    },
    whyHawaii: {
      title: '왜 말차일까? 그 효능',
      points: [
        {
          title: '항산화 성분이 풍부',
          description: '간 잎을 통째로 마시기 때문에, 말차 한 잔은 항산화 성분 — 특히 EGCG 같은 카테킨 — 을 농축해 전합니다. 우려내고 버리는 티백보다 잎의 이로운 성분을 훨씬 많이 섭취하게 됩니다.',
        },
        {
          title: '차분하고 지속되는 에너지',
          description: '말차의 카페인은 편안한 집중을 돕는 아미노산 L-테아닌과 함께 옵니다. 이 조합이 커피에서 흔히 느끼는 초조한 급등과 무기력 없이, 부드러운 "차분한 각성"을 줍니다 — 맑은 에너지가 오래갑니다.',
        },
        {
          title: '더 순한 커피 대안',
          description: '커피가 당신을 예민하거나 불안하게 만든다면, 말차는 멋진 전환입니다. 의미 있는 카페인이 있으면서도 그것을 부드럽게 전하므로, 강렬함보다 차분함을 원하는 이들에게 사랑받습니다. 수많은 커피 애호가가 말차를 곁에 두는 이유죠.',
        },
        {
          title: '무한한 변주',
          description: '말차는 그대로 저어도, 크리미한 라테에 부어도, 과일 향과 섞어도, 고소한 호지차 베이스로 바꿔도 빛납니다. 그 유연함 — 그리고 아름다운 초록빛 — 이야말로 전 세계 카페에서 가장 사랑받는 음료 중 하나가 된 이유입니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 진짜 말차 마시는 곳',
      intro: '이야기를 알고 나면 맛보고 싶어집니다. 와이키키 해변 근처에서 갓 저은 한 잔을 찾고 계시다면, Kona Coffee Donut? 가 시작하기 좋은 곳입니다.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키의 중심, 칼라카우아 애비뉴에 자리한 Kona Coffee Donut? 는 진짜 말차 라테($8.95)에 더해 딸기, 망고, 코코넛, 구아바, 바나나까지 플레이버 말차를 두루 저어냅니다. 고소한 호지차 베이스도 고를 수 있죠. 딸기 말차는 압도적인 1위 인기 메뉴 — 저은 말차에 달콤한 베리를 겹친 한 잔으로, 손님들이 자꾸 다시 찾는 대표 메뉴입니다. 무엇이든 따뜻한 모찌 도넛과 잘 어울리고, 와이키키 해변에서 도보 약 5분입니다.',
        highlights: [
          '진짜 말차 라테($8.95), 갓 저어냄',
          '플레이버 말차: 딸기(베스트셀러), 망고, 코코넛, 구아바, 바나나',
          '고소한 호지차 베이스도 선택 가능',
          '매일 영업, 오전 7시~오후 9시 · (808) 260-1835',
        ],
      },
      cta: '말차 메뉴 보기',
    },
    howToEat: {
      title: '말차를 즐기는 법',
      subtitle: '한 잔을 200% 누리는 간단한 팁',
      tips: [
        {
          title: '갓 만든 걸로 맛보기',
          description: '말차는 주문 즉시 저어 부었을 때가 가장 좋습니다. 색이 선명하고 풍미가 밝을 때 갓 만든 걸 마시세요 — 부드럽고 풀 향 나는 단맛이 가장 빛나는 순간입니다. 시간이 지난 한 잔보다 갓 저은 한 잔이 언제나 낫습니다.',
        },
        {
          title: '먼저 클래식부터',
          description: '과일 맛으로 넘어가기 전에, 먼저 플레인 말차 라테로 말차 본연의 개성 — 감칠맛의 깊이와 은은한 초록의 단맛 — 을 알아보세요. 진짜 말차의 맛을 알고 나면 플레이버 버전이 한층 더 즐거워집니다.',
        },
        {
          title: '그다음 플레이버 탐험',
          description: '모험하고 싶다면, 압도적 인기의 딸기 말차를 비롯해 망고, 코코넛, 구아바, 바나나도 모두 시도해 볼 만합니다. 또는 고소한 호지차 베이스로 바꾸면 견과처럼 더 부드러운 한 잔이 되죠 — 풀 향 나는 초록에서의 기분 좋은 변화입니다.',
        },
        {
          title: '모찌 도넛과 곁들이기',
          description: '말차의 흙내음 나는 단맛은 따뜻하고 쫄깃한 모찌 도넛과 완벽하게 어울립니다. 둘 다 주문하고 자리를 잡으면, 잠깐의 음료가 와이키키의 작은 의식이 됩니다 — 차와 단것을 곁들이던 수백 년 습관의 현대적 메아리죠.',
        },
      ],
    },
    faq: {
      title: '말차에 대해 자주 묻는 질문',
      items: [
        {
          question: '말차란 무엇인가요?',
          answer: '말차는 그늘에서 재배한 녹차 잎(텐차)을 맷돌로 갈아 밝은 초록 가루로 만든 것입니다. 잎을 우려내고 버리는 보통 차와 달리, 잎 자체를 물에 풀어 통째로 마시기 때문에 항산화 성분과 감칠맛, 카페인을 더 많이 섭취하게 됩니다. 맛은 풀 향 나는 채소 같은 느낌에 자연스럽고 은은한 단맛이 어우러집니다.',
        },
        {
          question: '말차가 커피보다 건강에 좋나요?',
          answer: '둘 다 나름의 장점이 있습니다. 말차는 간 잎을 통째로 마시기에 항산화 성분(특히 카테킨)을 전하고, 카페인을 차분한 집중을 돕는 L-테아닌과 함께 지녀 커피에서 흔한 초조함이나 무기력 없이 부드럽고 안정적인 "차분한 각성"을 줍니다. 커피에 불안해지기 쉬운 분에게는 말차가 더 순한 선택이 되는 경우가 많습니다 — 다만 최고의 한 잔은 결국 당신이 즐기는 한 잔입니다.',
        },
        {
          question: '말차에 카페인이 있나요?',
          answer: '네. 말차에는 카페인이 들어 있습니다. 한 잔에 의미 있는 양이 있지만 대개 진한 커피보다는 적습니다. 특별한 점은 그 카페인이 차분한 집중을 돕는 아미노산 L-테아닌과 함께 온다는 것으로, 에너지가 날카롭지 않고 부드럽고 안정적으로 느껴집니다.',
        },
        {
          question: '의식용과 조리용 말차는 무엇이 다른가요?',
          answer: '의식용(세리모니얼)은 가장 여린 그늘 재배 잎을 쓰고, 선명한 초록빛에 그대로 저어 마시기 위한 부드럽고 자연스러운 단맛·감칠맛이 있습니다. 조리용(컬리너리)은 더 진하고 살짝 쌉쌀해 라테, 베이킹, 스무디에 좋습니다. 둘 다 진짜 말차이며, 피해야 할 것은 진짜 차가 거의 없는 단 "말차 향" 가루입니다.',
        },
        {
          question: '와이키키에서 진짜 말차는 어디서 마실 수 있나요?',
          answer: '2142 Kalakaua Ave의 Kona Coffee Donut? 는 진짜 말차 라테($8.95)에 더해 딸기(베스트셀러), 망고, 코코넛, 구아바, 바나나 플레이버 말차를 저어내고, 고소한 호지차 베이스도 고를 수 있습니다. 와이키키 해변에서 도보 약 5분, 매일 오전 7시~오후 9시 영업, (808) 260-1835 — 말차를 갓 만든 모찌 도넛과 곁들일 수 있습니다.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 말차의 이야기를 맛보세요',
      text: '2142 Kalakaua Ave의 Kona Coffee Donut? 에 들러 진짜 말차 라테를 즐겨보세요 — 갓 저어, 따뜻한 모찌 도넛과 함께. 와이키키 해변에서 단 몇 분 거리입니다.',
      menuButton: '말차 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '말차 이야기',
    },
  },
  zh: {
    hero: {
      title: '抹茶的故事',
      subtitle: '从日本茶道到你在威基基的那一杯（2026）',
      updated: '2026年6月更新',
      readTime: '阅读约8分钟',
    },
    definition: {
      title: '什么是抹茶？',
      text: '<strong>抹茶</strong>是用<strong>遮阴种植的绿茶叶</strong>（一种叫作<em>碾茶</em>的茶叶）经石磨研磨而成的鲜亮翠绿粉末。与浸泡后丢弃茶叶的普通茶不同，喝抹茶是<strong>把整片茶叶搅入水中一同饮下</strong>——因此你能摄入更多它的抗氧化物、<strong>鲜味（umami）</strong>风味和咖啡因。口感带有青草般的植物气息，又有天然而柔和的甘甜。由于它<strong>把咖啡因与令人平静的氨基酸L-茶氨酸</strong>结合在一起，抹茶能带来顺滑的"平静而清醒"的能量，没有咖啡那种紧张或骤降。而<strong>威基基正是品尝一杯现搅真抹茶的绝佳之地</strong>。',
    },
    history: {
      title: '抹茶的故事',
      subtitle: '从禅寺、茶道，到海滩边的一杯',
      p1: '抹茶的故事始于<strong>古代中国的粉末茶</strong>，却在日本找到了真正的归宿。<strong>1191年</strong>，禅僧<strong>荣西</strong>据说将茶种和研磨绿茶的方法从中国带回。在禅寺中，僧人在漫长的打坐时饮用搅点的茶，以保持<strong>平静而清醒</strong>——正是今天人们钟爱抹茶的那份平衡。',
      p2: '数百年间，分享一碗抹茶逐渐发展为<strong>茶之汤（茶道）</strong>——一门关于待客、正念与静心细节的艺术。16世纪，茶道大师<strong>千利休</strong>以简朴与当下为核心成就了茶道，其理想至今仍受尊崇。每一碗都用名为<strong>茶筅</strong>的竹制搅具现场搅点，盛于宽口的<strong>茶碗</strong>中——让一杯简单的饮品化为一段宁静的时光。',
      p3: '风味来自茶叶的种植方式。收获前数周，茶树被<strong>遮阴覆盖</strong>。失去直射阳光的叶片会产生更多叶绿素（那抹鲜绿）和更多<strong>L-茶氨酸与鲜味</strong>。只采最柔嫩的叶子，经蒸、干燥、去梗制成<em>碾茶</em>，再<strong>用石磨缓缓研成极细的粉末</strong>。一台石磨一小时或许只能磨出约30–40克抹茶——这也是好抹茶备受珍视的原因之一。',
      p4: '这段漫长的旅程——从禅寺到茶道，再到卡拉卡瓦大道上的一家小店——正是你在现代抹茶拿铁中品尝到的。现搅之后倒入牛奶与冰，抹茶已成为风靡全球、深受喜爱的<strong>咖啡替代品</strong>。而在威基基，你可以在最惬意的场景中享受这门数百年的手艺——<strong>离海滩几分钟，一杯现搅的鲜绿抹茶，配上一个温热的麻糬甜甜圈。</strong>',
    },
    comparison: {
      title: '抹茶等级：仪式级 vs 烘焙级',
      subtitle: '并非所有绿粉都一样',
      intro: '抹茶按茶叶的种植与研磨方式分为不同等级。下面这份简单指南，帮你分辨真正的仪式级（Ceremonial）抹茶、烘焙级（Culinary）抹茶，以及其实根本不是抹茶的"抹茶味"粉：',
      headers: {
        feature: '查看要点',
        bingsu: '仪式级',
        shavedIce: '烘焙级',
        kakigori: '"抹茶味"',
      },
      rows: [
        {
          feature: '所用茶叶',
          bingsu: '最嫩的遮阴碾茶叶',
          shavedIce: '较晚采收的绿茶叶',
          kakigori: '绿茶粉＋糖与色素',
        },
        {
          feature: '颜色',
          bingsu: '鲜亮的翡翠绿',
          shavedIce: '偏暗的橄榄绿',
          kakigori: '人工鲜艳或褪色',
        },
        {
          feature: '风味',
          bingsu: '顺滑、鲜味、天然甘甜',
          shavedIce: '更浓、略带苦味',
          kakigori: '只有甜味，无茶的深度',
        },
        {
          feature: '适合用途',
          bingsu: '单独搅点或做拿铁',
          shavedIce: '拿铁、烘焙、思慕雪',
          kakigori: '大多是糖，用途有限',
        },
        {
          feature: '质地',
          bingsu: '丝滑、极细、石磨研磨',
          shavedIce: '细腻但略粗',
          kakigori: '粉感重、易结块',
        },
        {
          feature: '结论',
          bingsu: '真材实料',
          shavedIce: '做拿铁很棒',
          kakigori: '别选',
        },
      ],
      note: '最重要的一条原则：真正的抹茶由<em>碾茶</em>绿茶叶制成，而非"抹茶香精"。一杯出色的抹茶拿铁用仪式级或优质烘焙级都可以——要避开的是几乎不含真茶的甜味粉。用真抹茶现搅的一杯，你立刻就能尝出区别。',
    },
    types: {
      title: '每一杯里的故事',
      subtitle: '让抹茶与众不同的五件事',
      items: [
        {
          name: '遮阴种植的茶叶',
          korean: '碾茶，遮阴而生',
          description: '收获前数周，茶树被覆盖以遮挡阳光。这会提升叶绿素和L-茶氨酸，赋予抹茶鲜亮的绿色和顺滑、鲜味十足的口感。这是真抹茶与普通绿茶如此不同的第一个秘密。',
          icon: '🍃',
        },
        {
          name: '石磨研磨的粉末',
          korean: '石磨慢磨',
          description: '最好的叶子被干燥成碾茶，再在花岗岩石磨间缓缓研磨，慢到一台磨一小时只出几克。由此得到的极细粉末，能溶入一杯丝滑的搅点抹茶——无需过滤，不留残叶。',
          icon: '🪨',
        },
        {
          name: '茶筅与茶碗',
          korean: '茶筅与茶碗',
          description: '传统上，抹茶用竹制茶筅在宽口茶碗中搅点，直到起沫顺滑。这个简单的仪式直接源自茶道——每一杯里都有一段宁静专注的时光。',
          icon: '🍵',
        },
        {
          name: '鲜味风味',
          korean: '青草、甘甜、鲜香',
          description: '好抹茶带有青草般的植物气息，又有一种叫作鲜味（umami）的天然鲜甜，绝不刺口发苦。在拿铁中，牛奶和一点甜味将其调和，而底下那份大地般的绿意深度依旧闪耀。',
          icon: '🌿',
        },
        {
          name: '平静而清醒的能量',
          korean: '咖啡因 + L-茶氨酸',
          description: '抹茶把咖啡因与促进平静专注的氨基酸L-茶氨酸结合。二者相辅，带来顺滑而稳定的"平静而清醒"能量——正是禅僧为打坐所看重的那份平衡，也是抹茶作为更温和咖啡替代品而备受喜爱的重要原因。',
          icon: '✨',
        },
      ],
    },
    whyHawaii: {
      title: '为什么选抹茶？它的益处',
      points: [
        {
          title: '富含抗氧化物',
          description: '因为你喝下整片研磨的茶叶，一杯抹茶能带来浓缩的抗氧化物——尤其是EGCG等儿茶素。相比浸泡后丢弃的茶包，你摄入的有益成分要多得多。',
        },
        {
          title: '平稳持久的能量',
          description: '抹茶的咖啡因伴随促进放松专注的氨基酸L-茶氨酸而来。这一组合带来顺滑的"平静而清醒"提神，而没有许多人从咖啡感受到的紧张骤升与骤降——清晰的能量更持久。',
        },
        {
          title: '更温和的咖啡替代',
          description: '如果咖啡让你紧绷或焦虑，抹茶是绝佳的替换。它含有可观的咖啡因，却以温和的方式释放，因此深受那些想要平静而非强烈提神者的喜爱。这也是许多咖啡爱好者常备一杯抹茶的原因。',
        },
        {
          title: '百搭无穷',
          description: '抹茶单独搅点出彩，倒入香浓拿铁出彩，融入水果风味出彩，换成烘焙的焙茶（Hojicha）底也出彩。这份灵活——再加上它美丽的绿色——正是它成为全球咖啡馆最受喜爱饮品之一的原因。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基喝正宗抹茶的地方',
      intro: '知道了这个故事，你会想亲口尝一尝。想在威基基海滩附近喝一杯现搅抹茶，Kona Coffee Donut? 是一个很好的起点。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '就在威基基中心地段的卡拉卡瓦大道上，Kona Coffee Donut? 现搅正宗抹茶拿铁（$8.95），还有草莓、芒果、椰子、番石榴、香蕉等一整条风味抹茶，你甚至可以换成烘焙的焙茶（Hojicha）底。我们的草莓抹茶是遥遥领先的人气之选——搅好的抹茶叠上香甜草莓，是客人一再回头点的招牌。任选一杯都能配上温热的麻糬甜甜圈，距威基基海滩步行约5分钟。',
        highlights: [
          '正宗抹茶拿铁（$8.95），现搅',
          '风味抹茶：草莓（我们的招牌）、芒果、椰子、番石榴、香蕉',
          '也可换成烘焙焙茶（Hojicha）底',
          '每天营业，上午7点至晚上9点 · (808) 260-1835',
        ],
      },
      cta: '查看我们的抹茶菜单',
    },
    howToEat: {
      title: '如何享受你的抹茶',
      subtitle: '让每一杯物尽其味的简单贴士',
      tips: [
        {
          title: '趁新鲜品尝',
          description: '抹茶在现搅现倒时最出彩。趁颜色鲜亮、风味明快时尽快饮用——那正是顺滑青草般甜味最闪耀的时刻。现做的一杯，永远胜过搁置已久的。',
        },
        {
          title: '先尝经典',
          description: '在尝试水果风味之前，先来一杯纯抹茶拿铁，认识抹茶真正的个性——鲜味的深度与温柔的绿意甘甜。知道了真抹茶的味道，风味版本会变得更有趣。',
        },
        {
          title: '再探索各种口味',
          description: '想尝鲜？我们的草莓抹茶是遥遥领先的人气之选，而芒果、椰子、番石榴和香蕉也都值得一试。或者换成烘焙焙茶底，换来一杯更坚果、更醇和的口感——是从青草绿意中的一次美妙变奏。',
        },
        {
          title: '搭配一个麻糬甜甜圈',
          description: '抹茶大地般的甜味，与温热有嚼劲的麻糬甜甜圈堪称绝配。两样都点，找个座位，让匆匆一杯变成威基基的小仪式——正是把茶与甜食相配这一数百年习惯的现代回响。',
        },
      ],
    },
    faq: {
      title: '关于抹茶的常见问题',
      items: [
        {
          question: '什么是抹茶？',
          answer: '抹茶是用遮阴种植的绿茶叶（称为碾茶）经石磨研磨成的鲜绿粉末。与浸泡后丢弃茶叶的普通茶不同，你把整片茶叶搅入水中一同饮下，因此能摄入更多抗氧化物、鲜味和咖啡因。它口感带有青草般的植物气息，又有天然而柔和的甘甜。',
        },
        {
          question: '抹茶比咖啡更健康吗？',
          answer: '两者各有所长。抹茶因为整片叶子一同饮下，能带来抗氧化物（尤其是儿茶素），并把咖啡因与促进平静专注的L-茶氨酸结合，带来顺滑稳定的"平静而清醒"能量，没有一些人从咖啡感受到的紧张与骤降。如果咖啡容易让你焦虑，抹茶往往是更温和的选择——不过最好的一杯，终究是你自己享受的那一杯。',
        },
        {
          question: '抹茶含咖啡因吗？',
          answer: '含。抹茶含有咖啡因——一份通常含量可观，但一般少于一杯浓咖啡。它的特别之处在于咖啡因伴随促进平静专注的氨基酸L-茶氨酸而来，因此提神感顺滑稳定，而非尖锐。',
        },
        {
          question: '仪式级和烘焙级抹茶有什么区别？',
          answer: '仪式级用最嫩的遮阴茶叶，颜色鲜绿，口感顺滑、天然甘甜、鲜味十足，适合单独搅点。烘焙级更浓、略带苦味，适合做拿铁、烘焙和思慕雪。两者都是真抹茶——要避开的是几乎不含真茶的甜味"抹茶味"粉。',
        },
        {
          question: '在威基基哪里能喝到正宗抹茶？',
          answer: '位于 2142 Kalakaua Ave 的 Kona Coffee Donut? 现搅正宗抹茶拿铁（$8.95），还有草莓（招牌）、芒果、椰子、番石榴和香蕉风味抹茶，并可选烘焙焙茶（Hojicha）底。我们距威基基海滩步行约5分钟，每天上午7点至晚上9点营业，电话 (808) 260-1835——还能把抹茶配上一个现做的麻糬甜甜圈。',
        },
      ],
    },
    cta: {
      title: '在威基基品味抹茶的故事',
      text: '前往 2142 Kalakaua Ave 的 Kona Coffee Donut?，尝一杯正宗抹茶拿铁——现搅现做，配上温热的麻糬甜甜圈，距威基基海滩仅几分钟。',
      menuButton: '查看抹茶菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '抹茶的故事',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'The Story of Matcha: From Japanese Tea Ceremony to Your Waikiki Cup (2026)',
  description: 'The story of matcha — what it is, its history from Zen temples and the Japanese tea ceremony, ceremonial vs culinary grade, its benefits, and where to drink a freshly whisked cup in Waikiki.',
  image: 'https://www.konacoffeedonut.com/images/blog/matcha-story-waikiki.jpeg',
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
  datePublished: '2026-06-30',
  dateModified: '2026-06-30',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/en/blog/matcha-story-waikiki',
  },
  keywords: 'what is matcha, matcha history, matcha benefits, is matcha good for you, matcha tea ceremony, matcha waikiki',
  wordCount: 1600,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is matcha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Matcha is a finely ground powder made from shade-grown green tea leaves (called tencha) that are stone-milled into a bright green powder. Unlike regular tea, you whisk the whole leaf into water and drink it all, so you take in more of its antioxidants, umami flavor, and caffeine. It tastes grassy and vegetal with a natural, savory sweetness.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is matcha healthier than coffee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both have their strengths. Matcha delivers antioxidants (especially catechins) because you drink the whole leaf, and it pairs caffeine with L-theanine for a calmer, steadier "calm alert" energy without the jitters or crash some people get from coffee. If coffee leaves you anxious, matcha is often a gentler choice — though the best cup is simply the one you enjoy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does matcha have caffeine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Matcha contains caffeine — a typical serving has a meaningful amount, though usually less than a strong coffee. What makes it special is that its caffeine comes alongside L-theanine, an amino acid that promotes calm focus, so the energy feels smooth and steady rather than sharp.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between ceremonial and culinary grade matcha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ceremonial grade uses the youngest shade-grown leaves, has a vivid green color, and a smooth, naturally sweet, umami taste meant for whisking on its own. Culinary grade is bolder and slightly more bitter, ideal for lattes, baking, and smoothies. Both are real matcha — the thing to avoid is a sweet "matcha-flavored" powder that contains little genuine tea.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I get real matcha in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut? at 2142 Kalakaua Ave whisks a real Matcha Latte ($8.95) plus flavored matcha in strawberry (the bestseller), mango, coconut, guava, and banana, with an optional roasted Hojicha base. We are about a 5-minute walk from Waikiki Beach, open daily 7AM-9PM, (808) 260-1835 — and you can pair your matcha with a fresh mochi donut.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.konacoffeedonut.com/en',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://www.konacoffeedonut.com/en/blog',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'The Story of Matcha',
      item: 'https://www.konacoffeedonut.com/en/blog/matcha-story-waikiki',
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

export default function MatchaStoryWaikikiPage() {
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
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-white">
      <SubpageNav locale={locale} />

      {/* Hero Image */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/images/blog/matcha-story-waikiki.jpeg"
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

        {/* Story of Matcha */}
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

        {/* Comparison Table — Ceremonial vs Culinary */}
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
              dangerouslySetInnerHTML={{ __html: t.comparison.note }}
            />
          </div>
        </section>

        {/* Types — The Story in Every Cup */}
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

        {/* Why Matcha — Benefits */}
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

        {/* Where to Drink Matcha in Waikiki */}
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
                href={`/${locale}/menu/kona-coffee`}
                className="inline-block bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-sky-100 transition-colors"
              >
                {t.whereToGet.cta}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Tips — How to Enjoy Matcha */}
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
              → Matcha in Waikiki: Every Flavor We Pour
            </Link>
            <Link
              href={`/${locale}/blog/what-is-hojicha-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              What Is Hojicha?
            </Link>
            <Link
              href={`/${locale}/menu/kona-coffee`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Matcha & Coffee Menu
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
                  href={`/${locale}/menu/kona-coffee`}
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
