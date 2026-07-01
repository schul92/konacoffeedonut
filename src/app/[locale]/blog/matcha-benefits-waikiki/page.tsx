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
      title: 'Matcha Benefits & Caffeine',
      subtitle: 'Is Matcha Good for You? Health Benefits & Caffeine, Explained (2026)',
      updated: 'Updated June 2026',
      readTime: '6 min read',
    },
    definition: {
      title: 'Is Matcha Good for You?',
      text: 'Yes — for most people, <strong>matcha is a genuinely good-for-you drink</strong>. Because you whisk and drink the whole stone-ground green tea leaf, matcha is <strong>rich in antioxidants (catechins, especially EGCG)</strong> and pairs caffeine with <strong>L-theanine</strong>, an amino acid that may support <strong>calm, focused energy without the crash or jitters</strong>. A matcha latte has <strong>less caffeine than a cup of coffee</strong> (roughly 60–70&nbsp;mg vs 95–120&nbsp;mg), so it\'s an easy everyday upgrade. The best part? You can taste real, freshly whisked matcha in Waikiki — steps from the beach — paired with a warm mochi donut.',
    },
    history: {
      title: 'The Benefits of Matcha, Explained',
      subtitle: 'What the Green Tea Leaf May Do for You',
      p1: 'Matcha starts with shade-grown green tea leaves that are stone-ground into a fine powder — so when you whisk and drink it, you consume the <strong>whole leaf</strong>, not just an infusion. That\'s why matcha is famously <strong>rich in antioxidants</strong>, especially a group of catechins called <strong>EGCG (epigallocatechin gallate)</strong>. Antioxidants help the body neutralize free radicals, and matcha delivers a concentrated dose in a single cup.',
      p2: 'The most loved benefit is how matcha <strong>feels</strong>. It contains caffeine, but also <strong>L-theanine</strong>, an amino acid that may support a calm, relaxed alertness. Together they create what fans describe as <strong>calm, focused energy</strong> — a steady lift <strong>without the spike, crash, or jitters</strong> that a strong coffee can bring. It\'s energy you can settle into rather than ride out.',
      p3: 'Matcha may also <strong>gently support your metabolism</strong> — the catechins in green tea have been studied for a small supportive role — and its antioxidants are why matcha is often mentioned for <strong>skin</strong>: antioxidant-rich foods and drinks may help support healthy-looking skin as part of an overall balanced diet. As always, matcha is a wholesome drink, not a medicine, and these are supportive, everyday benefits rather than cures.',
      p4: 'Add it all up and matcha gives you <strong>smooth, sustained energy</strong> that\'s easy to enjoy morning, noon, or afternoon. The simplest way to feel the difference is to drink the real thing — freshly stone-ground matcha whisked to order, not a sugary pre-mix. In Waikiki, you can do exactly that at Kona Coffee Donut?, and pair your cup with a chewy mochi donut for the perfect island treat.',
    },
    comparison: {
      title: 'How Much Caffeine Is in Matcha?',
      subtitle: 'Matcha vs Coffee vs Energy Drink',
      intro: 'A typical matcha latte has around 60–70 mg of caffeine — noticeably less than a standard coffee. But the numbers only tell part of the story; how the caffeine feels matters just as much. Here\'s how matcha stacks up:',
      headers: {
        feature: 'What you\'re comparing',
        bingsu: 'Matcha Latte',
        shavedIce: 'Brewed Coffee',
        kakigori: 'Energy Drink',
      },
      rows: [
        {
          feature: 'Typical caffeine',
          bingsu: '~60–70 mg per latte',
          shavedIce: '~95–120 mg per cup',
          kakigori: '~150–300 mg+',
        },
        {
          feature: 'How it feels',
          bingsu: 'Calm, focused, steady',
          shavedIce: 'Quick, strong lift',
          kakigori: 'Intense, sometimes wired',
        },
        {
          feature: 'The crash',
          bingsu: 'Gentle — L-theanine smooths it',
          shavedIce: 'Possible mid-day dip',
          kakigori: 'Common hard crash',
        },
        {
          feature: 'Jitters',
          bingsu: 'Rare, smooth energy',
          shavedIce: 'Possible for sensitive folks',
          kakigori: 'Common',
        },
        {
          feature: 'Extras in the cup',
          bingsu: 'Antioxidants + L-theanine',
          shavedIce: 'Antioxidants',
          kakigori: 'Added sugar & stimulants',
        },
        {
          feature: 'Best for',
          bingsu: 'Smooth all-day energy',
          shavedIce: 'A stronger morning kick',
          kakigori: 'Occasional use at best',
        },
      ],
      note: 'The takeaway: matcha gives you real, functional caffeine — just less of it, and paired with L-theanine for a calmer, jitter-free lift. If coffee sometimes leaves you wired, matcha is the easy swap. Want even less caffeine? Ask for our hojicha, a roasted green tea that\'s naturally lower in caffeine.',
    },
    types: {
      title: 'Matcha Benefits at a Glance',
      subtitle: 'Five Reasons People Reach for Matcha',
      items: [
        {
          name: 'Rich in Antioxidants',
          korean: 'Catechins & EGCG',
          description: 'Because you drink the whole stone-ground leaf, matcha is packed with catechins — especially EGCG. Antioxidants help the body neutralize free radicals, and matcha delivers a concentrated dose in every whisked cup.',
          icon: '🍵',
        },
        {
          name: 'Calm, Focused Energy',
          korean: 'L-theanine + caffeine',
          description: 'Matcha\'s signature benefit. The amino acid L-theanine works alongside caffeine to support a relaxed, focused alertness — the smooth "calm energy" matcha is loved for, without the buzz of a strong espresso.',
          icon: '🧘',
        },
        {
          name: 'May Support Metabolism',
          korean: 'Green tea catechins',
          description: 'The catechins in green tea have been studied for a small, supportive role in metabolism. Matcha is no magic bullet, but as an unsweetened, antioxidant-rich drink it\'s a smart swap for sugary alternatives.',
          icon: '🔥',
        },
        {
          name: 'Antioxidants for Skin',
          korean: 'Skin-friendly support',
          description: 'Matcha is often mentioned for skin because it\'s so antioxidant-rich. Antioxidant-rich foods and drinks may help support healthy-looking skin as part of a balanced diet — one more reason to enjoy your daily cup.',
          icon: '✨',
        },
        {
          name: 'Steady, Sustained Energy',
          korean: 'No spike, no crash',
          description: 'Thanks to L-theanine, matcha releases its lift gently rather than all at once. That means steadier energy through the morning or afternoon — and far fewer jitters and crashes than a strong coffee or energy drink.',
          icon: '⚡',
        },
      ],
    },
    whyHawaii: {
      title: 'Matcha vs Coffee for Health: Which Is Better?',
      points: [
        {
          title: 'Both Are Antioxidant-Rich',
          description: 'Good news: both matcha and coffee are legitimately healthy drinks loaded with antioxidants. Neither is "bad" for most people. The real difference isn\'t good vs bad — it\'s how each one makes you feel and how much caffeine you want.',
        },
        {
          title: 'Matcha Has Less Caffeine',
          description: 'A matcha latte (~60–70 mg) has less caffeine than a standard coffee (~95–120 mg). If coffee sometimes leaves you jittery or wired, matcha is an easy way to keep a gentle lift while dialing the caffeine back a notch.',
        },
        {
          title: 'L-Theanine Is the Difference',
          description: 'The thing coffee doesn\'t have is L-theanine. Paired with caffeine, it may support calm, focused energy instead of a spike-and-crash. That smoother feel is why many people switch their afternoon cup to matcha.',
        },
        {
          title: 'The Best Choice Is Yours',
          description: 'Enjoy coffee? Keep it — real 100% Kona is wonderful. Want a calmer lift with fewer jitters? Try matcha. Many of our regulars simply have both: a Kona coffee morning and a matcha afternoon. In moderation, you can\'t go wrong.',
        },
      ],
    },
    whereToGet: {
      title: 'Where to Drink Real Matcha in Waikiki',
      intro: 'If you want genuine, freshly whisked matcha near Waikiki Beach, Kona Coffee Donut? is an easy place to start.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalākaua Ave, Honolulu, HI 96815 · (808) 260-1835',
        description: 'Right on Kalākaua Avenue in the heart of Waikiki, Kona Coffee Donut? whisks real stone-ground matcha to order — hot or iced. Start with our classic Matcha Latte ($8.95), go fruity with the Strawberry Matcha ($10.95) or Mango, Coconut, Guava & Banana Matcha ($8.95 each), or choose our caffeine-lower Hojicha latte for a mellow, roasted alternative. Pair any of them with a warm mochi donut for the perfect Waikiki treat. We\'re about a 5-minute walk from Waikiki Beach and open daily, 7AM–9PM.',
        highlights: [
          'Real stone-ground matcha, whisked to order — hot or iced',
          'Matcha Latte $8.95 · Strawberry Matcha $10.95 · Mango / Coconut / Guava / Banana $8.95',
          'Caffeine-lower Hojicha latte available',
          'About 5 minutes from Waikiki Beach · Open daily 7AM–9PM',
        ],
      },
      cta: 'View Our Matcha & Coffee Menu',
    },
    howToEat: {
      title: 'Tips for Getting the Most From Matcha',
      subtitle: 'Enjoy It the Smart, Delicious Way',
      tips: [
        {
          title: 'Pick the Best Time to Drink It',
          description: 'Matcha\'s calm, steady lift is great in the morning and — unlike a strong coffee — gentle enough for the early afternoon. If you\'re sensitive to caffeine, keep matcha to earlier in the day, or choose our lower-caffeine hojicha for an evening cup.',
        },
        {
          title: 'Choose Real Matcha, Not Sugary Mix',
          description: 'The benefits live in the leaf, so the quality matters. Freshly whisked stone-ground matcha delivers the antioxidants, vivid green color, and smooth energy — a sweet pre-mix powder mostly delivers sugar. We whisk the real thing to order, every time.',
        },
        {
          title: 'Go Unsweetened (or Lightly Sweet)',
          description: 'To get the most out of matcha, taste the classic latte with little or no added sugar first. You\'ll notice the earthy-umami flavor and clean finish. Love a treat? Our Strawberry or fruit matcha lattes are the fun, dessert-style way to enjoy it.',
        },
        {
          title: 'Pair It With a Mochi Donut',
          description: 'Matcha and mochi are a match made in heaven. The chewy, lightly sweet donut balances matcha\'s earthy edge perfectly — and turns a healthy drink into a genuine Waikiki treat. It\'s the combo our regulars come back for.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About Matcha Benefits',
      items: [
        {
          question: 'Does matcha have caffeine?',
          answer: 'Yes. A typical matcha latte has around 60–70 mg of caffeine — less than a standard cup of coffee (~95–120 mg). What makes matcha different is L-theanine, an amino acid that pairs with the caffeine to support a calmer, more focused lift, so most people feel steady energy rather than jitters.',
        },
        {
          question: 'Is matcha healthier than coffee?',
          answer: 'Neither is simply "healthier" — both are antioxidant-rich drinks that are good for most people in moderation. The difference is how they feel: matcha has less caffeine and adds L-theanine for a calmer, crash-free lift, while coffee gives a stronger, quicker kick. Many people enjoy both — a Kona coffee morning and a matcha afternoon.',
        },
        {
          question: 'Is matcha good for your skin?',
          answer: 'Matcha is often mentioned for skin because it\'s rich in antioxidants like EGCG. Antioxidant-rich foods and drinks may help support healthy-looking skin as part of an overall balanced diet. Matcha isn\'t a treatment or a cure, but an unsweetened matcha latte is a wholesome, antioxidant-packed everyday choice.',
        },
        {
          question: 'How much matcha per day is okay?',
          answer: 'For most healthy adults, one to two cups of matcha a day is a comfortable amount and keeps caffeine in a moderate range. If you\'re sensitive to caffeine, pregnant, or managing a health condition, keep your intake lower and check with your doctor. Prefer less caffeine? Our roasted hojicha is a naturally lower-caffeine option.',
        },
        {
          question: 'Where can I try real matcha in Waikiki?',
          answer: 'Kona Coffee Donut? at 2142 Kalākaua Ave whisks real stone-ground matcha to order, hot or iced, about a 5-minute walk from Waikiki Beach. Try the classic Matcha Latte ($8.95), a Strawberry Matcha ($10.95), or a lower-caffeine hojicha — and pair it with a fresh mochi donut. Open daily, 7AM–9PM.',
        },
      ],
    },
    cta: {
      title: 'Taste Real Matcha in Waikiki',
      text: 'Visit Kona Coffee Donut? at 2142 Kalākaua Ave for freshly whisked matcha — antioxidant-rich, calm energy, and paired with a warm mochi donut, just minutes from Waikiki Beach.',
      menuButton: 'View Matcha & Coffee Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'Matcha Benefits & Caffeine',
    },
  },
  ja: {
    hero: {
      title: '抹茶の効能とカフェイン',
      subtitle: '抹茶は体にいい？健康効果とカフェインを解説（2026年版）',
      updated: '2026年6月更新',
      readTime: '6分で読める',
    },
    definition: {
      title: '抹茶は体にいいの？',
      text: 'はい——ほとんどの人にとって、<strong>抹茶は体にうれしい飲み物</strong>です。石臼で挽いた緑茶の葉を丸ごと点てて飲むため、抹茶は<strong>抗酸化物質（カテキン、特にEGCG）が豊富</strong>。さらにカフェインと<strong>L-テアニン</strong>というアミノ酸を併せ持ち、<strong>クラッシュやイライラのない、穏やかで集中できるエネルギー</strong>をサポートする可能性があります。抹茶ラテのカフェインは<strong>コーヒー1杯より少なく</strong>（およそ60〜70mg対95〜120mg）、毎日の一杯に取り入れやすいのも魅力。しかも、ワイキキではビーチのすぐそばで、点てたての本物の抹茶を——温かいモチドーナツと一緒に——味わえます。',
    },
    history: {
      title: '抹茶の効能を解説',
      subtitle: '緑茶の葉があなたにもたらすかもしれないこと',
      p1: '抹茶は、日陰で育てた緑茶の葉を石臼で細かい粉末にしたもの。点てて飲めば、抽出液だけでなく<strong>葉を丸ごと</strong>いただくことになります。だからこそ抹茶は<strong>抗酸化物質が豊富</strong>で有名——特に<strong>EGCG（エピガロカテキンガレート）</strong>と呼ばれるカテキンを多く含みます。抗酸化物質は体が活性酸素を中和するのを助け、抹茶は一杯にその凝縮した量を届けてくれます。',
      p2: '最も愛される効能は、抹茶の<strong>「感じ方」</strong>です。カフェインを含みますが、同時に<strong>L-テアニン</strong>というアミノ酸も含み、穏やかでリラックスした覚醒をサポートする可能性があります。この二つが合わさって、ファンが言う<strong>穏やかで集中できるエネルギー</strong>が生まれます——強いコーヒーにありがちな急上昇・クラッシュ・イライラ<strong>のない</strong>、安定した高まり。落ち着いて浸れるエネルギーです。',
      p3: '抹茶は<strong>代謝を穏やかにサポート</strong>する可能性もあり——緑茶のカテキンは小さな補助的役割が研究されています——その抗酸化作用ゆえに<strong>肌</strong>との関連でもよく話題になります。抗酸化物質が豊富な食べ物や飲み物は、バランスの取れた食生活の一部として健やかな肌の印象を支える助けになるかもしれません。抹茶はあくまで体にやさしい飲み物であり薬ではなく、これらは治療ではなく日々の補助的な効能です。',
      p4: 'すべてを合わせると、抹茶は朝でも昼でも午後でも楽しめる<strong>なめらかで持続的なエネルギー</strong>を与えてくれます。その違いを一番手軽に感じる方法は、本物を飲むこと——甘い既製ミックスではなく、注文ごとに点てる石臼挽きの抹茶です。ワイキキなら Kona Coffee Donut? でまさにそれができ、もちもちのモチドーナツと合わせれば完璧な島のご褒美になります。',
    },
    comparison: {
      title: '抹茶のカフェインはどれくらい？',
      subtitle: '抹茶 vs コーヒー vs エナジードリンク',
      intro: '一般的な抹茶ラテのカフェインはおよそ60〜70mg——標準的なコーヒーより明らかに少なめです。ただし数字が語るのは一部だけ。カフェインの「感じ方」も同じくらい大切です。抹茶がどう位置づけられるか見てみましょう：',
      headers: {
        feature: '比べるポイント',
        bingsu: '抹茶ラテ',
        shavedIce: 'ドリップコーヒー',
        kakigori: 'エナジードリンク',
      },
      rows: [
        {
          feature: 'カフェイン目安',
          bingsu: 'ラテ1杯 約60〜70mg',
          shavedIce: '1杯 約95〜120mg',
          kakigori: '約150〜300mg以上',
        },
        {
          feature: '感じ方',
          bingsu: '穏やか、集中、安定',
          shavedIce: '素早く強い高まり',
          kakigori: '強烈、時にソワソワ',
        },
        {
          feature: 'クラッシュ',
          bingsu: '緩やか——L-テアニンが和らげる',
          shavedIce: '昼過ぎに落ちることも',
          kakigori: '激しいクラッシュが多い',
        },
        {
          feature: 'イライラ・震え',
          bingsu: 'まれ、なめらかなエネルギー',
          shavedIce: '敏感な人には出ることも',
          kakigori: 'よくある',
        },
        {
          feature: '一杯の中身',
          bingsu: '抗酸化物質＋L-テアニン',
          shavedIce: '抗酸化物質',
          kakigori: '砂糖や刺激物の添加',
        },
        {
          feature: '向いている用途',
          bingsu: '一日中なめらかなエネルギー',
          shavedIce: '朝の強めの一杯',
          kakigori: 'たまに飲む程度に',
        },
      ],
      note: 'まとめると、抹茶は本物の機能的なカフェインを届けてくれます——ただし量は控えめで、L-テアニンと組み合わさって穏やかで震えのない高まりに。コーヒーで時々ソワソワするなら、抹茶は手軽な切り替え先です。もっとカフェインを減らしたいなら、自然にカフェインの少ない焙じ茶（ほうじ茶）をどうぞ。',
    },
    types: {
      title: '抹茶の効能ひと目でわかる',
      subtitle: '人々が抹茶を選ぶ5つの理由',
      items: [
        {
          name: '抗酸化物質が豊富',
          korean: 'カテキン＆EGCG',
          description: '石臼挽きの葉を丸ごと飲むため、抹茶はカテキン——特にEGCG——をたっぷり含みます。抗酸化物質は体が活性酸素を中和するのを助け、点てた一杯ごとにその凝縮した量を届けてくれます。',
          icon: '🍵',
        },
        {
          name: '穏やかで集中できるエネルギー',
          korean: 'L-テアニン＋カフェイン',
          description: '抹茶ならではの効能。アミノ酸のL-テアニンがカフェインと働き、リラックスした集中をサポートする可能性があります——強いエスプレッソのような高ぶりのない、なめらかな「穏やかなエネルギー」です。',
          icon: '🧘',
        },
        {
          name: '代謝をサポートするかも',
          korean: '緑茶のカテキン',
          description: '緑茶のカテキンは、代謝への小さな補助的役割が研究されています。抹茶は魔法の弾丸ではありませんが、無糖で抗酸化物質豊富な飲み物として、甘い飲み物からの賢い切り替え先です。',
          icon: '🔥',
        },
        {
          name: '肌にうれしい抗酸化',
          korean: '肌にやさしいサポート',
          description: '抹茶が肌の話題でよく登場するのは、抗酸化物質がとても豊富だから。抗酸化物質が豊富な食べ物・飲み物は、バランスの取れた食生活の一部として健やかな肌の印象を支える助けになるかもしれません。毎日の一杯を楽しむ理由がもう一つ。',
          icon: '✨',
        },
        {
          name: '安定して持続するエネルギー',
          korean: '急上昇なし、クラッシュなし',
          description: 'L-テアニンのおかげで、抹茶は一気にではなく緩やかに高まりを解き放ちます。だから朝も午後も安定したエネルギーが続き、強いコーヒーやエナジードリンクよりも震えやクラッシュがずっと少ないのです。',
          icon: '⚡',
        },
      ],
    },
    whyHawaii: {
      title: '健康面で抹茶とコーヒー、どちらがいい？',
      points: [
        {
          title: 'どちらも抗酸化物質が豊富',
          description: '朗報です。抹茶もコーヒーも、抗酸化物質をたっぷり含む立派に健康的な飲み物。ほとんどの人にとってどちらも「悪い」ものではありません。本当の違いは善し悪しではなく、感じ方と、どれだけカフェインが欲しいかです。',
        },
        {
          title: '抹茶はカフェインが少なめ',
          description: '抹茶ラテ（約60〜70mg）は標準的なコーヒー（約95〜120mg）よりカフェインが少なめ。コーヒーで時々ソワソワしたり震えたりするなら、抹茶は穏やかな高まりを保ちつつカフェインを一段控える手軽な方法です。',
        },
        {
          title: 'L-テアニンが決め手',
          description: 'コーヒーにないもの、それがL-テアニンです。カフェインと組み合わさることで、急上昇とクラッシュではなく、穏やかで集中できるエネルギーをサポートする可能性があります。そのなめらかさゆえ、午後の一杯を抹茶に替える人が多いのです。',
        },
        {
          title: '一番いい選択はあなた次第',
          description: 'コーヒーが好き？そのままで——本物の100%コナは素晴らしい。震えの少ない穏やかな高まりが欲しい？抹茶をどうぞ。常連の多くは単に両方——朝はコナコーヒー、午後は抹茶。適量なら間違いなしです。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキで本物の抹茶を飲むなら',
      intro: 'ワイキキビーチ近くで点てたての本物の抹茶をお探しなら、Kona Coffee Donut? が気軽なスタート地点です。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalākaua Ave, Honolulu, HI 96815 · (808) 260-1835',
        description: 'ワイキキの中心、カラカウア通り沿いの Kona Coffee Donut? は、石臼挽きの本物の抹茶を注文ごとに点てます——ホットでもアイスでも。定番の抹茶ラテ（$8.95）から、ストロベリー抹茶（$10.95）、マンゴー・ココナッツ・グァバ・バナナ抹茶（各$8.95）、さらにカフェイン控えめのほうじ茶ラテまで。どれも温かいモチドーナツと合わせれば完璧なワイキキのご褒美に。ワイキキビーチから徒歩約5分、毎日午前7時〜午後9時営業です。',
        highlights: [
          '石臼挽きの本物の抹茶を注文ごとに——ホット＆アイス',
          '抹茶ラテ $8.95 ・ストロベリー抹茶 $10.95 ・マンゴー/ココナッツ/グァバ/バナナ 各$8.95',
          'カフェイン控えめのほうじ茶ラテもご用意',
          'ワイキキビーチから約5分 ・毎日 午前7時〜午後9時',
        ],
      },
      cta: '抹茶＆コーヒーメニューを見る',
    },
    howToEat: {
      title: '抹茶を最大限に楽しむコツ',
      subtitle: '賢く、美味しく味わうために',
      tips: [
        {
          title: '飲むベストな時間を選ぶ',
          description: '抹茶の穏やかで安定した高まりは朝にぴったり——そして強いコーヒーと違い、午後の早い時間にもやさしい。カフェインに敏感なら抹茶は早めの時間に、または夜はカフェイン控えめのほうじ茶をどうぞ。',
        },
        {
          title: '甘い粉ではなく本物の抹茶を',
          description: '効能は葉に宿るので、品質が大切。点てたての石臼挽き抹茶は抗酸化物質、鮮やかな緑色、なめらかなエネルギーを届けます——甘い既製ミックスが届けるのはほぼ砂糖。私たちは毎回本物を注文ごとに点てます。',
        },
        {
          title: '無糖（か控えめの甘さ）で',
          description: '抹茶を最大限に味わうなら、まずは砂糖ほぼなしの定番ラテを。大地のうまみとクリーンな後味に気づきます。ご褒美が欲しい日は、ストロベリーやフルーツ抹茶ラテがデザート感覚の楽しい味わい方です。',
        },
        {
          title: 'モチドーナツと合わせる',
          description: '抹茶とモチは天国のような組み合わせ。もちもちでほんのり甘いドーナツが抹茶の大地の風味を完璧に引き立て——健康的な飲み物を本物のワイキキのご褒美に変えます。常連が何度も戻ってくる組み合わせです。',
        },
      ],
    },
    faq: {
      title: '抹茶の効能についてよくある質問',
      items: [
        {
          question: '抹茶にカフェインはある？',
          answer: 'はい。一般的な抹茶ラテのカフェインはおよそ60〜70mgで、標準的なコーヒー1杯（約95〜120mg）より少なめです。抹茶が違うのはL-テアニンというアミノ酸を含む点。カフェインと組み合わさって穏やかで集中しやすい高まりを支えるため、多くの人は震えではなく安定したエネルギーを感じます。',
        },
        {
          question: '抹茶はコーヒーより健康的？',
          answer: 'どちらが単純に「健康的」ということはありません——どちらも抗酸化物質が豊富で、適量ならほとんどの人に良い飲み物です。違いは感じ方。抹茶はカフェインが少なめでL-テアニンが加わり、クラッシュのない穏やかな高まりに。コーヒーはより強く素早い一撃。多くの人は両方楽しみます——朝はコナコーヒー、午後は抹茶。',
        },
        {
          question: '抹茶は肌にいい？',
          answer: '抹茶はEGCGなどの抗酸化物質が豊富なため、肌との関連でよく話題になります。抗酸化物質が豊富な食べ物や飲み物は、バランスの取れた食生活の一部として健やかな肌の印象を支える助けになるかもしれません。抹茶は治療や薬ではありませんが、無糖の抹茶ラテは抗酸化物質たっぷりの体にやさしい日々の選択です。',
        },
        {
          question: '1日にどれくらい抹茶を飲んでいい？',
          answer: '健康な成人の多くにとって、1日1〜2杯の抹茶は無理のない量で、カフェインも適度な範囲に収まります。カフェインに敏感な方、妊娠中の方、持病を管理中の方は量を控えめにし、医師にご相談を。カフェインを減らしたいなら、自然にカフェインの少ない焙じたほうじ茶がおすすめです。',
        },
        {
          question: 'ワイキキで本物の抹茶を試せる場所は？',
          answer: '2142 Kalākaua Ave の Kona Coffee Donut? が、石臼挽きの本物の抹茶を注文ごとにホットでもアイスでも点てます。ワイキキビーチから徒歩約5分。定番の抹茶ラテ（$8.95）、ストロベリー抹茶（$10.95）、カフェイン控えめのほうじ茶などを、点てたてのモチドーナツと一緒にどうぞ。毎日午前7時〜午後9時営業。',
        },
      ],
    },
    cta: {
      title: 'ワイキキで本物の抹茶を味わおう',
      text: '2142 Kalākaua Ave の Kona Coffee Donut? で点てたての抹茶を——抗酸化物質豊富で穏やかなエネルギー、温かいモチドーナツと一緒に。ワイキキビーチからわずか数分です。',
      menuButton: '抹茶＆コーヒーメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: '抹茶の効能とカフェイン',
    },
  },
  ko: {
    hero: {
      title: '말차의 효능과 카페인',
      subtitle: '말차는 몸에 좋을까? 건강 효능과 카페인 완벽 정리 (2026)',
      updated: '2026년 6월 업데이트',
      readTime: '6분 소요',
    },
    definition: {
      title: '말차는 몸에 좋을까?',
      text: '네 — 대부분의 사람에게 <strong>말차는 진짜 몸에 좋은 음료</strong>입니다. 맷돌로 곱게 간 녹차 잎을 통째로 격불해 마시기 때문에, 말차는 <strong>항산화 물질(카테킨, 특히 EGCG)이 풍부</strong>하고, 카페인과 함께 아미노산 <strong>L-테아닌</strong>을 지녀 <strong>크래시나 초조함 없이 차분하고 집중된 에너지</strong>를 뒷받침할 수 있습니다. 말차 라테의 카페인은 <strong>커피 한 잔보다 적어서</strong>(대략 60~70mg 대 95~120mg) 매일의 한 잔으로 부담 없이 즐기기 좋죠. 무엇보다, 와이키키에서는 해변 바로 옆에서 갓 격불한 진짜 말차를 — 따뜻한 모찌 도넛과 함께 — 맛볼 수 있습니다.',
    },
    history: {
      title: '말차의 효능, 하나씩 풀어보기',
      subtitle: '녹차 잎이 당신에게 줄 수 있는 것',
      p1: '말차는 그늘에서 재배한 녹차 잎을 맷돌로 곱게 간 가루입니다. 그래서 격불해 마시면 우려낸 물만이 아니라 <strong>잎을 통째로</strong> 섭취하게 됩니다. 이것이 말차가 <strong>항산화 물질이 풍부</strong>하기로 유명한 이유 — 특히 <strong>EGCG(에피갈로카테킨 갈레이트)</strong>라 불리는 카테킨을 많이 담고 있습니다. 항산화 물질은 몸이 활성산소를 중화하도록 돕고, 말차는 한 잔에 그 농축된 양을 담아줍니다.',
      p2: '가장 사랑받는 효능은 말차가 주는 <strong>느낌</strong>입니다. 카페인을 함유하지만 동시에 <strong>L-테아닌</strong>이라는 아미노산도 지녀, 차분하고 편안한 각성을 뒷받침할 수 있습니다. 이 둘이 어우러져 팬들이 말하는 <strong>차분하고 집중된 에너지</strong>가 생깁니다 — 진한 커피에서 오기 쉬운 급상승·크래시·초조함<strong>이 없는</strong> 안정된 상승감. 올라탔다 떨어지는 게 아니라 편안히 스며드는 에너지죠.',
      p3: '말차는 <strong>신진대사를 부드럽게 뒷받침</strong>할 가능성도 있고 — 녹차의 카테킨은 작은 보조적 역할이 연구되어 왔습니다 — 그 항산화 작용 덕에 <strong>피부</strong>와 함께 자주 언급됩니다. 항산화 물질이 풍부한 음식과 음료는 균형 잡힌 식단의 일부로서 건강해 보이는 피부를 뒷받침하는 데 도움이 될 수 있습니다. 언제나 그렇듯 말차는 몸에 좋은 음료이지 약이 아니며, 이는 치료가 아니라 일상적이고 보조적인 이점입니다.',
      p4: '이 모든 걸 합치면 말차는 아침, 점심, 오후 언제든 즐기기 좋은 <strong>부드럽고 지속적인 에너지</strong>를 줍니다. 그 차이를 가장 쉽게 느끼는 방법은 진짜를 마시는 것 — 달콤한 기성 믹스가 아니라 주문 즉시 격불하는 맷돌 간 말차입니다. 와이키키라면 Kona Coffee Donut? 에서 바로 그렇게 할 수 있고, 쫄깃한 모찌 도넛과 곁들이면 완벽한 섬의 간식이 됩니다.',
    },
    comparison: {
      title: '말차에는 카페인이 얼마나 있을까?',
      subtitle: '말차 vs 커피 vs 에너지 드링크',
      intro: '일반적인 말차 라테의 카페인은 약 60~70mg — 보통 커피보다 눈에 띄게 적습니다. 하지만 숫자는 이야기의 일부일 뿐. 카페인이 어떻게 느껴지는지도 그만큼 중요하죠. 말차가 어디쯤 자리하는지 볼까요:',
      headers: {
        feature: '비교 항목',
        bingsu: '말차 라테',
        shavedIce: '드립 커피',
        kakigori: '에너지 드링크',
      },
      rows: [
        {
          feature: '대략적 카페인',
          bingsu: '라테 한 잔 약 60~70mg',
          shavedIce: '한 잔 약 95~120mg',
          kakigori: '약 150~300mg 이상',
        },
        {
          feature: '느낌',
          bingsu: '차분, 집중, 안정',
          shavedIce: '빠르고 강한 상승',
          kakigori: '강렬, 때로 들뜸',
        },
        {
          feature: '크래시',
          bingsu: '완만 — L-테아닌이 부드럽게',
          shavedIce: '오후에 처질 수 있음',
          kakigori: '심한 크래시 흔함',
        },
        {
          feature: '초조함·떨림',
          bingsu: '드물고 부드러운 에너지',
          shavedIce: '민감한 사람은 나타날 수 있음',
          kakigori: '흔함',
        },
        {
          feature: '한 잔 속 성분',
          bingsu: '항산화 물질 + L-테아닌',
          shavedIce: '항산화 물질',
          kakigori: '첨가당과 자극 성분',
        },
        {
          feature: '어울리는 상황',
          bingsu: '하루 종일 부드러운 에너지',
          shavedIce: '아침의 강한 한 방',
          kakigori: '가끔 정도만',
        },
      ],
      note: '정리하면, 말차는 진짜 기능적인 카페인을 줍니다 — 다만 양은 더 적고, L-테아닌과 짝을 이뤄 더 차분하고 떨림 없는 상승감으로. 커피가 가끔 들뜨게 만든다면 말차가 손쉬운 대안입니다. 카페인을 더 줄이고 싶다면, 자연스럽게 카페인이 적은 호지차(볶은 녹차)를 주문해 보세요.',
    },
    types: {
      title: '말차 효능 한눈에 보기',
      subtitle: '사람들이 말차를 찾는 다섯 가지 이유',
      items: [
        {
          name: '항산화 물질 풍부',
          korean: '카테킨 & EGCG',
          description: '맷돌 간 잎을 통째로 마시기 때문에 말차는 카테킨 — 특히 EGCG — 을 가득 담고 있습니다. 항산화 물질은 몸이 활성산소를 중화하도록 돕고, 말차는 격불한 한 잔마다 그 농축된 양을 전해줍니다.',
          icon: '🍵',
        },
        {
          name: '차분하고 집중된 에너지',
          korean: 'L-테아닌 + 카페인',
          description: '말차의 대표 효능. 아미노산 L-테아닌이 카페인과 함께 작용해 편안하고 집중된 각성을 뒷받침할 수 있습니다 — 진한 에스프레소 같은 들뜸 없이, 말차가 사랑받는 부드러운 "차분한 에너지"입니다.',
          icon: '🧘',
        },
        {
          name: '신진대사 뒷받침 가능성',
          korean: '녹차 카테킨',
          description: '녹차의 카테킨은 신진대사에서 작고 보조적인 역할이 연구되어 왔습니다. 말차가 만능은 아니지만, 무가당에 항산화 물질이 풍부한 음료로서 달콤한 대안을 대체하기에 현명한 선택입니다.',
          icon: '🔥',
        },
        {
          name: '피부를 위한 항산화',
          korean: '피부에 좋은 뒷받침',
          description: '말차가 피부 이야기에 자주 등장하는 건 항산화 물질이 그만큼 풍부하기 때문. 항산화 물질이 풍부한 음식과 음료는 균형 잡힌 식단의 일부로서 건강해 보이는 피부를 뒷받침하는 데 도움이 될 수 있습니다. 매일의 한 잔을 즐길 이유가 하나 더.',
          icon: '✨',
        },
        {
          name: '안정적이고 지속되는 에너지',
          korean: '급상승도, 크래시도 없이',
          description: 'L-테아닌 덕분에 말차는 한꺼번에가 아니라 완만하게 상승감을 풀어놓습니다. 그래서 아침이나 오후 내내 더 안정된 에너지가 이어지고 — 진한 커피나 에너지 드링크보다 떨림과 크래시가 훨씬 적습니다.',
          icon: '⚡',
        },
      ],
    },
    whyHawaii: {
      title: '건강 면에서 말차 vs 커피, 무엇이 더 좋을까?',
      points: [
        {
          title: '둘 다 항산화 물질이 풍부',
          description: '좋은 소식: 말차도 커피도 항산화 물질이 가득한 어엿한 건강 음료입니다. 대부분의 사람에게 둘 다 "나쁜" 게 아니에요. 진짜 차이는 좋고 나쁨이 아니라, 각각이 주는 느낌과 원하는 카페인 양입니다.',
        },
        {
          title: '말차는 카페인이 더 적다',
          description: '말차 라테(약 60~70mg)는 보통 커피(약 95~120mg)보다 카페인이 적습니다. 커피가 가끔 들뜨거나 떨리게 한다면, 말차는 부드러운 상승감은 지키면서 카페인을 한 단계 낮추는 손쉬운 방법입니다.',
        },
        {
          title: 'L-테아닌이 결정적 차이',
          description: '커피에 없는 것, 그게 L-테아닌입니다. 카페인과 짝을 이뤄 급상승-크래시 대신 차분하고 집중된 에너지를 뒷받침할 수 있습니다. 그 부드러운 느낌 때문에 많은 사람이 오후 한 잔을 말차로 바꿉니다.',
        },
        {
          title: '가장 좋은 선택은 당신의 몫',
          description: '커피를 좋아하세요? 그대로 즐기세요 — 진짜 100% 코나는 훌륭합니다. 떨림 적은 차분한 상승감을 원하세요? 말차를 드셔 보세요. 단골 상당수는 그냥 둘 다 — 아침엔 코나 커피, 오후엔 말차. 적당히라면 실패란 없습니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 진짜 말차 마시는 곳',
      intro: '와이키키 해변 근처에서 갓 격불한 진짜 말차를 찾고 계시다면, Kona Coffee Donut? 가 시작하기 좋은 곳입니다.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalākaua Ave, Honolulu, HI 96815 · (808) 260-1835',
        description: '와이키키의 중심, 칼라카우아 애비뉴에 자리한 Kona Coffee Donut? 는 맷돌로 간 진짜 말차를 주문 즉시 격불합니다 — 핫이든 아이스든. 클래식 말차 라테($8.95)로 시작해, 딸기 말차($10.95)나 망고·코코넛·구아바·바나나 말차(각 $8.95)로 넘어가거나, 카페인이 더 적은 호지차 라테로 은은한 대안을 골라도 좋습니다. 무엇이든 따뜻한 모찌 도넛과 곁들이면 완벽한 와이키키 간식이 됩니다. 와이키키 해변에서 도보 약 5분, 매일 오전 7시~오후 9시 영업합니다.',
        highlights: [
          '맷돌로 간 진짜 말차, 주문 즉시 격불 — 핫 & 아이스',
          '말차 라테 $8.95 · 딸기 말차 $10.95 · 망고/코코넛/구아바/바나나 각 $8.95',
          '카페인 더 적은 호지차 라테 준비',
          '와이키키 해변에서 약 5분 · 매일 오전 7시~오후 9시',
        ],
      },
      cta: '말차 & 커피 메뉴 보기',
    },
    howToEat: {
      title: '말차를 200% 즐기는 팁',
      subtitle: '똑똑하고 맛있게 마시는 법',
      tips: [
        {
          title: '마시기 좋은 시간을 고르기',
          description: '말차의 차분하고 안정된 상승감은 아침에 좋고 — 진한 커피와 달리 — 이른 오후에도 부담이 적습니다. 카페인에 민감하다면 말차는 이른 시간에, 저녁에는 카페인이 더 적은 호지차를 선택하세요.',
        },
        {
          title: '달콤한 믹스 말고 진짜 말차를',
          description: '효능은 잎에 있으니 품질이 중요합니다. 갓 격불한 맷돌 간 말차는 항산화 물질, 선명한 초록빛, 부드러운 에너지를 전합니다 — 달콤한 기성 믹스가 주는 건 대부분 설탕. 우리는 매번 진짜를 주문 즉시 격불합니다.',
        },
        {
          title: '무가당(또는 약하게)으로',
          description: '말차를 제대로 즐기려면 먼저 설탕을 거의 넣지 않은 클래식 라테로 맛보세요. 흙내음 같은 감칠맛과 깔끔한 끝맛이 느껴집니다. 달달한 게 당기는 날엔 딸기나 과일 말차 라테가 디저트처럼 즐기는 재미난 방법입니다.',
        },
        {
          title: '모찌 도넛과 곁들이기',
          description: '말차와 모찌는 천생연분. 쫄깃하고 은은히 단 도넛이 말차의 흙내음을 완벽하게 잡아주고 — 건강한 음료를 진짜 와이키키 간식으로 바꿔줍니다. 단골들이 다시 찾는 바로 그 조합이죠.',
        },
      ],
    },
    faq: {
      title: '말차 효능에 대해 자주 묻는 질문',
      items: [
        {
          question: '말차에 카페인이 있나요?',
          answer: '네. 일반적인 말차 라테의 카페인은 약 60~70mg으로 보통 커피 한 잔(약 95~120mg)보다 적습니다. 말차가 다른 점은 L-테아닌이라는 아미노산. 카페인과 짝을 이뤄 더 차분하고 집중된 상승감을 뒷받침하기 때문에, 대부분은 떨림보다 안정된 에너지를 느낍니다.',
        },
        {
          question: '말차가 커피보다 건강한가요?',
          answer: '어느 쪽이 그냥 "더 건강하다"고 할 수는 없습니다 — 둘 다 항산화 물질이 풍부하고 적당히라면 대부분에게 좋은 음료입니다. 차이는 느낌. 말차는 카페인이 적고 L-테아닌이 더해져 크래시 없는 차분한 상승감을, 커피는 더 강하고 빠른 한 방을 줍니다. 많은 사람이 둘 다 즐깁니다 — 아침엔 코나 커피, 오후엔 말차.',
        },
        {
          question: '말차는 피부에 좋은가요?',
          answer: '말차는 EGCG 같은 항산화 물질이 풍부해 피부와 함께 자주 언급됩니다. 항산화 물질이 풍부한 음식과 음료는 균형 잡힌 식단의 일부로서 건강해 보이는 피부를 뒷받침하는 데 도움이 될 수 있습니다. 말차는 치료나 약이 아니지만, 무가당 말차 라테는 항산화 물질이 가득한 몸에 좋은 일상 선택입니다.',
        },
        {
          question: '하루에 말차를 얼마나 마셔도 되나요?',
          answer: '건강한 성인 대부분에게 하루 1~2잔의 말차는 무리 없는 양이며 카페인도 적당한 범위에 머뭅니다. 카페인에 민감하거나 임신 중이거나 건강 상태를 관리 중이라면 양을 줄이고 의사와 상의하세요. 카페인을 줄이고 싶다면, 볶은 호지차가 자연스럽게 카페인이 더 적은 선택입니다.',
        },
        {
          question: '와이키키에서 진짜 말차를 어디서 맛볼 수 있나요?',
          answer: '2142 Kalākaua Ave의 Kona Coffee Donut? 가 맷돌로 간 진짜 말차를 주문 즉시 핫이든 아이스든 격불합니다. 와이키키 해변에서 도보 약 5분. 클래식 말차 라테($8.95), 딸기 말차($10.95), 또는 카페인이 더 적은 호지차를 갓 만든 모찌 도넛과 곁들이세요. 매일 오전 7시~오후 9시 영업.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 진짜 말차를 맛보세요',
      text: '2142 Kalākaua Ave의 Kona Coffee Donut? 에서 갓 격불한 말차를 — 항산화 물질 풍부, 차분한 에너지, 따뜻한 모찌 도넛과 함께. 와이키키 해변에서 단 몇 분 거리입니다.',
      menuButton: '말차 & 커피 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '말차의 효능과 카페인',
    },
  },
  zh: {
    hero: {
      title: '抹茶的功效与咖啡因',
      subtitle: '抹茶对身体好吗？健康功效与咖啡因全解析（2026）',
      updated: '2026年6月更新',
      readTime: '阅读约6分钟',
    },
    definition: {
      title: '抹茶对身体好吗？',
      text: '是的——对大多数人来说，<strong>抹茶是一种真正有益的饮品</strong>。因为你把石磨研磨的整片绿茶叶打匀后饮下，抹茶<strong>富含抗氧化物质（儿茶素，尤其是EGCG）</strong>，并将咖啡因与氨基酸<strong>L-茶氨酸</strong>结合在一起，可能有助于带来<strong>平稳而专注、没有崩溃感或紧张感的能量</strong>。一杯抹茶拿铁的咖啡因<strong>比一杯咖啡少</strong>（约60~70毫克对95~120毫克），是日常轻松的升级之选。最棒的是？在威基基，你可以在离海滩几步之遥的地方，品尝现打的正宗抹茶——再配上一个温热的麻糬甜甜圈。',
    },
    history: {
      title: '抹茶的功效，逐一解读',
      subtitle: '这片绿茶叶可能为你带来什么',
      p1: '抹茶始于遮荫种植的绿茶叶，被石磨研磨成细粉——所以当你打匀饮下时，摄入的是<strong>整片叶子</strong>，而不仅是茶汤。这正是抹茶以<strong>富含抗氧化物质</strong>闻名的原因——尤其是一类名为<strong>EGCG（表没食子儿茶素没食子酸酯）</strong>的儿茶素。抗氧化物质帮助身体中和自由基，而抹茶在一杯中就送上浓缩的一份。',
      p2: '最受喜爱的功效在于抹茶带来的<strong>感受</strong>。它含有咖啡因，但同时含有<strong>L-茶氨酸</strong>这种氨基酸，可能有助于支持一种平静、放松的清醒。两者结合，造就了粉丝们所说的<strong>平稳而专注的能量</strong>——一种稳定的提升，<strong>没有</strong>浓咖啡常带来的骤升、崩溃或紧张。这是一种能让你安然沉浸、而非勉强撑过的能量。',
      p3: '抹茶还可能<strong>温和地支持你的新陈代谢</strong>——绿茶中的儿茶素在代谢中的小小辅助作用已被研究——而它的抗氧化作用，正是抹茶常与<strong>肌肤</strong>一同被提及的原因：富含抗氧化物质的食物和饮品，作为整体均衡饮食的一部分，可能有助于支持看起来健康的肌肤。一如既往，抹茶是有益的饮品而非药物，这些是日常的辅助益处，而非治疗。',
      p4: '把这一切加起来，抹茶给你<strong>顺滑而持久的能量</strong>，早晨、中午或下午都能轻松享用。感受这份差别最简单的方法，就是喝真正的抹茶——现点现打的石磨抹茶，而非含糖的预调粉。在威基基，你可以在 Kona Coffee Donut? 做到这一点，再配上一个有嚼劲的麻糬甜甜圈，就是完美的海岛小食。',
    },
    comparison: {
      title: '抹茶里有多少咖啡因？',
      subtitle: '抹茶 vs 咖啡 vs 能量饮料',
      intro: '一杯典型的抹茶拿铁咖啡因约为60~70毫克——明显少于一杯标准咖啡。但数字只说明了一部分；咖啡因“感觉如何”同样重要。看看抹茶的表现：',
      headers: {
        feature: '比较项目',
        bingsu: '抹茶拿铁',
        shavedIce: '手冲咖啡',
        kakigori: '能量饮料',
      },
      rows: [
        {
          feature: '大致咖啡因',
          bingsu: '每杯拿铁约60~70毫克',
          shavedIce: '每杯约95~120毫克',
          kakigori: '约150~300毫克以上',
        },
        {
          feature: '感觉',
          bingsu: '平稳、专注、稳定',
          shavedIce: '快速、强烈的提升',
          kakigori: '强烈，有时亢奋',
        },
        {
          feature: '崩溃感',
          bingsu: '温和——L-茶氨酸使其平缓',
          shavedIce: '午后可能低落',
          kakigori: '常见的剧烈崩溃',
        },
        {
          feature: '紧张·手抖',
          bingsu: '少见，能量顺滑',
          shavedIce: '敏感者可能出现',
          kakigori: '常见',
        },
        {
          feature: '杯中额外成分',
          bingsu: '抗氧化物质＋L-茶氨酸',
          shavedIce: '抗氧化物质',
          kakigori: '添加糖与刺激成分',
        },
        {
          feature: '最适合',
          bingsu: '全天顺滑的能量',
          shavedIce: '更强的清晨一击',
          kakigori: '最好偶尔为之',
        },
      ],
      note: '结论：抹茶给你的是真正有效的咖啡因——只是量更少，并与L-茶氨酸结合，带来更平静、无手抖的提升。如果咖啡有时让你亢奋，抹茶就是轻松的替换。想要咖啡因更少？点一杯我们的焙茶（hojicha），一种天然咖啡因更低的烘焙绿茶。',
    },
    types: {
      title: '抹茶功效一览',
      subtitle: '人们选择抹茶的五个理由',
      items: [
        {
          name: '富含抗氧化物质',
          korean: '儿茶素与EGCG',
          description: '因为你喝下的是整片石磨茶叶，抹茶富含儿茶素——尤其是EGCG。抗氧化物质帮助身体中和自由基，而抹茶在每一杯打匀的茶中都送上浓缩的一份。',
          icon: '🍵',
        },
        {
          name: '平稳而专注的能量',
          korean: 'L-茶氨酸＋咖啡因',
          description: '抹茶的招牌功效。氨基酸L-茶氨酸与咖啡因协同作用，可能有助于支持放松而专注的清醒——没有浓缩咖啡般的亢奋，正是抹茶备受喜爱的顺滑“平静能量”。',
          icon: '🧘',
        },
        {
          name: '可能支持新陈代谢',
          korean: '绿茶儿茶素',
          description: '绿茶中的儿茶素在新陈代谢中的小小辅助作用已被研究。抹茶并非灵丹妙药，但作为一种无糖、富含抗氧化物质的饮品，它是替换含糖饮料的明智之选。',
          icon: '🔥',
        },
        {
          name: '为肌肤的抗氧化',
          korean: '对肌肤友好的支持',
          description: '抹茶常在肌肤话题中出现，是因为它抗氧化物质如此丰富。富含抗氧化物质的食物和饮品，作为均衡饮食的一部分，可能有助于支持看起来健康的肌肤——这是每天享用一杯的又一个理由。',
          icon: '✨',
        },
        {
          name: '稳定而持久的能量',
          korean: '不骤升，不崩溃',
          description: '得益于L-茶氨酸，抹茶温和地释放提升，而非一下子全部释放。这意味着整个上午或下午都有更稳定的能量——手抖和崩溃也远少于浓咖啡或能量饮料。',
          icon: '⚡',
        },
      ],
    },
    whyHawaii: {
      title: '论健康，抹茶与咖啡哪个更好？',
      points: [
        {
          title: '两者都富含抗氧化物质',
          description: '好消息：抹茶和咖啡都是名副其实、富含抗氧化物质的健康饮品。对大多数人来说，两者都不“坏”。真正的差别不是好坏，而是各自带给你的感受，以及你想要多少咖啡因。',
        },
        {
          title: '抹茶咖啡因更少',
          description: '一杯抹茶拿铁（约60~70毫克）比一杯标准咖啡（约95~120毫克）咖啡因更少。如果咖啡有时让你紧张或手抖，抹茶是一种既保留温和提升、又把咖啡因往下调一档的轻松方式。',
        },
        {
          title: 'L-茶氨酸是关键差别',
          description: '咖啡没有的东西，就是L-茶氨酸。它与咖啡因结合，可能有助于带来平稳而专注的能量，而非骤升与崩溃。正是这份更顺滑的感受，让许多人把下午那杯换成抹茶。',
        },
        {
          title: '最好的选择由你决定',
          description: '喜欢咖啡？那就继续——正宗100%科纳很棒。想要更少手抖、更平稳的提升？试试抹茶。我们不少常客干脆两者都要——清晨一杯科纳咖啡，下午一杯抹茶。适量而饮，怎么选都不会错。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基喝正宗抹茶的地方',
      intro: '如果你想在威基基海滩附近喝到现打的正宗抹茶，Kona Coffee Donut? 是一个轻松的起点。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalākaua Ave, Honolulu, HI 96815 · (808) 260-1835',
        description: '就在威基基中心地段的卡拉卡瓦大道上，Kona Coffee Donut? 现点现打石磨正宗抹茶——冷热皆可。从经典抹茶拿铁（$8.95）开始，来点果味的草莓抹茶（$10.95），或芒果、椰子、番石榴、香蕉抹茶（各$8.95），也可以选择咖啡因更低的焙茶拿铁作为柔和的替代。任选其一，配上一个温热的麻糬甜甜圈，就是完美的威基基小食。我们距威基基海滩步行约5分钟，每天上午7点至晚上9点营业。',
        highlights: [
          '石磨正宗抹茶，现点现打——冷热皆有',
          '抹茶拿铁 $8.95 · 草莓抹茶 $10.95 · 芒果/椰子/番石榴/香蕉 各$8.95',
          '备有咖啡因更低的焙茶拿铁',
          '距威基基海滩约5分钟 · 每天上午7点至晚上9点',
        ],
      },
      cta: '查看抹茶与咖啡菜单',
    },
    howToEat: {
      title: '把抹茶喝到最好的小贴士',
      subtitle: '聪明又美味地享用',
      tips: [
        {
          title: '挑选最佳饮用时间',
          description: '抹茶平稳而稳定的提升，清晨很棒——而且不像浓咖啡，温和到足以在午后早些时候饮用。若你对咖啡因敏感，把抹茶留在一天较早的时段，或在晚上选择咖啡因更低的焙茶。',
        },
        {
          title: '选真抹茶，别选含糖调粉',
          description: '功效藏在叶子里，所以品质很重要。现打的石磨抹茶带来抗氧化物质、鲜亮的绿色和顺滑的能量——含糖预调粉给你的多半是糖。我们每一次都现点现打真正的抹茶。',
        },
        {
          title: '无糖（或微甜）',
          description: '想充分享受抹茶，先尝一杯几乎不加糖的经典拿铁。你会尝到那份大地般的鲜味和干净的尾韵。想来点小甜蜜？我们的草莓或水果抹茶拿铁，是甜品风格的有趣享用方式。',
        },
        {
          title: '配一个麻糬甜甜圈',
          description: '抹茶与麻糬是天作之合。有嚼劲、微甜的甜甜圈完美平衡抹茶的大地气息——把一杯健康饮品变成一份地道的威基基小食。这正是常客一再回头的组合。',
        },
      ],
    },
    faq: {
      title: '关于抹茶功效的常见问题',
      items: [
        {
          question: '抹茶含咖啡因吗？',
          answer: '含。一杯典型的抹茶拿铁咖啡因约60~70毫克——少于一杯标准咖啡（约95~120毫克）。抹茶的不同之处在于L-茶氨酸这种氨基酸，它与咖啡因结合，支持更平静、更专注的提升，所以大多数人感受到的是稳定的能量而非手抖。',
        },
        {
          question: '抹茶比咖啡更健康吗？',
          answer: '两者都谈不上单纯“更健康”——都是富含抗氧化物质的饮品，适量而饮对大多数人都有益。区别在感受：抹茶咖啡因更少，并加入L-茶氨酸带来无崩溃的平稳提升，而咖啡给的是更强、更快的一击。很多人两者都享用——清晨科纳咖啡，下午抹茶。',
        },
        {
          question: '抹茶对肌肤好吗？',
          answer: '抹茶常在肌肤话题中被提及，因为它富含EGCG等抗氧化物质。富含抗氧化物质的食物和饮品，作为整体均衡饮食的一部分，可能有助于支持看起来健康的肌肤。抹茶不是疗法或药物，但一杯无糖抹茶拿铁是富含抗氧化物质、有益身体的日常之选。',
        },
        {
          question: '每天喝多少抹茶合适？',
          answer: '对大多数健康成年人来说，每天一到两杯抹茶是舒适的量，也能把咖啡因保持在适中范围。若你对咖啡因敏感、怀孕或正在管理某种健康状况，请减少摄入并咨询医生。想要更少咖啡因？我们烘焙的焙茶是天然咖啡因更低的选择。',
        },
        {
          question: '在威基基哪里能尝到正宗抹茶？',
          answer: '位于 2142 Kalākaua Ave 的 Kona Coffee Donut? 现点现打石磨正宗抹茶，冷热皆有，距威基基海滩步行约5分钟。试试经典抹茶拿铁（$8.95）、草莓抹茶（$10.95），或咖啡因更低的焙茶——再配上一个现做麻糬甜甜圈。每天上午7点至晚上9点营业。',
        },
      ],
    },
    cta: {
      title: '在威基基品尝正宗抹茶',
      text: '前往 2142 Kalākaua Ave 的 Kona Coffee Donut?，品尝现打抹茶——富含抗氧化物质、能量平稳，还配上一个温热的麻糬甜甜圈，距威基基海滩仅几分钟。',
      menuButton: '查看抹茶与咖啡菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '抹茶的功效与咖啡因',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Matcha Benefits & Caffeine: Is Matcha Good for You? (2026)',
  description: 'Is matcha good for you? A responsible guide to matcha benefits — antioxidants (EGCG), L-theanine for calm focus, metabolism, skin, and how much caffeine matcha really has vs coffee.',
  image: 'https://www.konacoffeedonut.com/images/blog/matcha-benefits-waikiki.jpeg',
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
    '@id': 'https://www.konacoffeedonut.com/en/blog/matcha-benefits-waikiki',
  },
  keywords: 'matcha benefits, is matcha good for you, does matcha have caffeine, is matcha healthy, matcha benefits for skin, matcha caffeine, is matcha healthier than coffee',
  wordCount: 1500,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does matcha have caffeine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A typical matcha latte has around 60–70 mg of caffeine — less than a standard cup of coffee (~95–120 mg). What makes matcha different is L-theanine, an amino acid that pairs with the caffeine to support a calmer, more focused lift, so most people feel steady energy rather than jitters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is matcha healthier than coffee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither is simply "healthier" — both are antioxidant-rich drinks that are good for most people in moderation. The difference is how they feel: matcha has less caffeine and adds L-theanine for a calmer, crash-free lift, while coffee gives a stronger, quicker kick. Many people enjoy both — a Kona coffee morning and a matcha afternoon.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is matcha good for your skin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Matcha is often mentioned for skin because it\'s rich in antioxidants like EGCG. Antioxidant-rich foods and drinks may help support healthy-looking skin as part of an overall balanced diet. Matcha isn\'t a treatment or a cure, but an unsweetened matcha latte is a wholesome, antioxidant-packed everyday choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much matcha per day is okay?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For most healthy adults, one to two cups of matcha a day is a comfortable amount and keeps caffeine in a moderate range. If you\'re sensitive to caffeine, pregnant, or managing a health condition, keep your intake lower and check with your doctor. Prefer less caffeine? Our roasted hojicha is a naturally lower-caffeine option.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I try real matcha in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut? at 2142 Kalākaua Ave whisks real stone-ground matcha to order, hot or iced, about a 5-minute walk from Waikiki Beach. Try the classic Matcha Latte ($8.95), a Strawberry Matcha ($10.95), or a lower-caffeine hojicha — and pair it with a fresh mochi donut. Open daily, 7AM–9PM.',
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
      name: 'Matcha Benefits & Caffeine',
      item: 'https://www.konacoffeedonut.com/en/blog/matcha-benefits-waikiki',
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

export default function MatchaBenefitsWaikikiPage() {
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
          src="/images/blog/matcha-benefits-waikiki.jpeg"
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

        {/* Benefits, Explained */}
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

        {/* Caffeine Comparison Table */}
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

        {/* Benefits at a Glance */}
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

        {/* Matcha vs Coffee for Health */}
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

        {/* Tips */}
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
              → What Is Matcha? Waikiki Guide
            </Link>
            <Link
              href={`/${locale}/blog/what-is-hojicha-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              What Is Hojicha? (Lower Caffeine)
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
