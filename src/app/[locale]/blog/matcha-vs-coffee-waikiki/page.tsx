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
      title: 'Matcha vs Coffee: Which Should You Drink?',
      subtitle: 'Caffeine, Calm, and Flavor Compared — Plus Where to Try Both in Waikiki (2026)',
      updated: 'Updated June 2026',
      readTime: '8 min read',
    },
    definition: {
      title: 'Matcha or Coffee: The Quick Answer',
      text: 'There\'s no universal winner — <strong>it depends on you</strong>. <strong>Matcha</strong> has less caffeine (about <strong>60–70mg per cup</strong>) and delivers a <strong>calm, steady alertness</strong> thanks to an amino acid called L-theanine, so you get focus without the jitters. <strong>Coffee</strong> has more caffeine (about <strong>95–120mg per brewed cup</strong>) and gives a <strong>faster, stronger lift</strong> — great for a real wake-up, but it can spike and crash. Both are rich in antioxidants and both are delicious. The good news in Waikiki: at <strong>Kona Coffee Donut?</strong> you can order real 100% Kona coffee <em>or</em> a full matcha line, so you don\'t actually have to choose — just try both.',
    },
    history: {
      title: 'Matcha vs Coffee: Caffeine, Explained',
      subtitle: 'How Much Caffeine, and How It Actually Feels',
      p1: 'On caffeine alone, coffee wins by the numbers. A standard <strong>brewed coffee has roughly 95–120mg per 8oz cup</strong>, while a serving of <strong>matcha lands around 60–70mg</strong>. So if your only goal is the maximum kick, coffee delivers more caffeine per cup. But caffeine content is only half the story — <strong>how that caffeine reaches you</strong> is what most people actually feel.',
      p2: 'Matcha contains <strong>L-theanine</strong>, an amino acid that slows how quickly caffeine hits your system. The result is often described as a <strong>"calm alert"</strong> — steady, focused energy that ramps up gently and fades gently, typically without the sudden jitters or the mid-morning crash. This is why a lot of people who feel anxious or shaky on coffee find matcha noticeably smoother, even though they\'re both caffeinated.',
      p3: 'Coffee, by contrast, tends to give a <strong>quick, powerful spike</strong>. Caffeine hits fast, you feel sharply awake, and for many people that\'s exactly the point first thing in the morning. The trade-off is that the lift can be followed by a <strong>dip or "crash"</strong> a few hours later, and larger amounts can bring jitters or an afternoon that ends too early for good sleep. Neither pattern is better in the abstract — it comes down to how your body responds and what you need that day.',
      p4: 'On health, it\'s largely a tie. <strong>Both are antioxidant powerhouses</strong>: matcha is loaded with catechins (especially EGCG), while coffee is one of the biggest sources of chlorogenic acids and polyphenols in most people\'s diets. Both are linked to real benefits when consumed in moderation. The honest takeaway is that <strong>"is matcha better than coffee?" has no single answer</strong> — the better drink is the one that fits your caffeine tolerance, your taste, and your moment.',
    },
    comparison: {
      title: 'Matcha vs Coffee, Side by Side',
      subtitle: 'The Key Differences at a Glance',
      intro: 'Here\'s a quick, factual comparison of matcha and brewed coffee across the things that matter most — and what you can order for each at Kona Coffee Donut?:',
      headers: {
        feature: 'Factor',
        bingsu: 'Matcha',
        shavedIce: 'Coffee',
        kakigori: 'At Kona Coffee Donut?',
      },
      rows: [
        {
          feature: 'Caffeine',
          bingsu: '~60–70mg per cup',
          shavedIce: '~95–120mg per brewed cup',
          kakigori: 'Both on the menu',
        },
        {
          feature: 'Energy curve',
          bingsu: 'Calm, steady (L-theanine)',
          shavedIce: 'Fast spike, quicker crash',
          kakigori: 'Pick your pace',
        },
        {
          feature: 'Flavor',
          bingsu: 'Grassy, umami, creamy',
          shavedIce: 'Roasty, nutty, brown-sugar (100% Kona)',
          kakigori: 'Kona or matcha',
        },
        {
          feature: 'Antioxidants',
          bingsu: 'Catechins (EGCG)',
          shavedIce: 'Chlorogenic acids, polyphenols',
          kakigori: 'Both rich',
        },
        {
          feature: 'Acidity',
          bingsu: 'Low, smooth',
          shavedIce: 'Low for Kona, smooth',
          kakigori: 'Both easy-drinking',
        },
        {
          feature: 'Best time of day',
          bingsu: 'Morning or afternoon, no crash',
          shavedIce: 'Morning kickstart',
          kakigori: 'Anytime, 7AM–9PM',
        },
      ],
      note: 'The one thing this table can\'t decide for you is taste and tolerance. If caffeine or jitters are a concern, matcha\'s gentler curve may suit you; if you want a bold, fast wake-up, coffee wins. At Kona Coffee Donut? you can taste both and let your own body cast the deciding vote.',
    },
    types: {
      title: 'Which Should You Choose?',
      subtitle: 'A Simple Guide to Picking Your Drink',
      items: [
        {
          name: 'Choose matcha if you want calm focus',
          korean: 'Steady energy, no jitters',
          description: 'If you want to feel awake and focused without a racing heartbeat, matcha\'s L-theanine gives a smoother, longer-lasting lift. It\'s ideal for study, work, or a long afternoon when you want energy that won\'t spike and crash.',
          icon: '🍵',
        },
        {
          name: 'Choose coffee if you want a strong kick',
          korean: 'Fast, powerful wake-up',
          description: 'When you need to shake off sleep fast, coffee\'s higher caffeine and quick onset are hard to beat. A cup of real 100% Kona in the morning is a classic wake-up — bold, aromatic, and satisfying.',
          icon: '☕',
        },
        {
          name: 'Choose matcha if coffee makes you jittery',
          korean: 'Gentler on sensitive systems',
          description: 'If coffee leaves you anxious, shaky, or with an upset stomach, matcha is often the friendlier option. The L-theanine tempers the caffeine, and the lower dose per cup means a softer, more even experience.',
          icon: '🧘',
        },
        {
          name: 'Choose coffee if you love bold flavor',
          korean: 'Roasty, rich, comforting',
          description: 'If your idea of a great drink is deep, roasty, brown-sugar sweetness, coffee is your match. Real 100% Kona is naturally low in acidity and smooth enough to enjoy black — a flavor experience in its own right.',
          icon: '🔥',
        },
        {
          name: 'Or just try both',
          korean: 'Different moods, different moments',
          description: 'You don\'t have to pick a side for life. Many people reach for coffee in the morning and matcha in the afternoon. The easiest way to find your favorite is to taste them back to back — which is exactly what Kona Coffee Donut? makes possible.',
          icon: '🔄',
        },
      ],
    },
    whyHawaii: {
      title: 'Matcha and Coffee: What They Share',
      points: [
        {
          title: 'Both Are Antioxidant Powerhouses',
          description: 'Matcha is packed with catechins like EGCG, while coffee is a leading source of chlorogenic acids and polyphenols. Whichever you reach for, you\'re getting a drink linked to real benefits in moderation — this isn\'t a "healthy vs. unhealthy" matchup, it\'s two genuinely good options.',
        },
        {
          title: 'Both Give Real Energy — Just Differently',
          description: 'Coffee spikes fast and strong; matcha ramps up calm and steady. Neither is objectively better — they\'re tuned for different moments. The trick is matching the drink to what your day actually needs, whether that\'s a sharp morning jolt or a smooth afternoon focus.',
        },
        {
          title: 'Both Taste Best Fresh and Well-Sourced',
          description: 'A cheap, stale version of either is a letdown. Freshly whisked, quality matcha is vibrant and creamy; freshly brewed 100% Kona is smooth and aromatic. Quality and freshness matter far more than which drink you pick — so seek out a place that does both well.',
        },
        {
          title: 'You Don\'t Have to Pick Just One',
          description: 'The matcha-versus-coffee debate assumes you must choose a team. You don\'t. At a café that pours both, you can enjoy each on its own terms — coffee when you want a kick, matcha when you want calm. Kona Coffee Donut? is built exactly for that "why not both" answer.',
        },
      ],
    },
    whereToGet: {
      title: 'Try Both Matcha and Kona Coffee in Waikiki',
      intro: 'Can\'t decide between matcha and coffee? At Kona Coffee Donut? in Waikiki, you don\'t have to — we pour both, so you can taste each and choose your favorite.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalākaua Ave, Honolulu, HI 96815',
        description: 'Right on Kalākaua Avenue in the heart of Waikiki, Kona Coffee Donut? serves real 100% Kona coffee — drip $7, latte $6.35, cold brew $6.95 — alongside a full matcha and hojicha line, including matcha and hojicha lattes at $8.95 and a strawberry matcha latte at $10.95. Whether you want a bold coffee kick or matcha\'s calm focus, you can try both here, hot or iced. We\'re about a 5-minute walk from Waikiki Beach, open daily 7AM–9PM. Call (808) 260-1835.',
        highlights: [
          '100% Kona coffee — drip $7, latte $6.35, cold brew $6.95',
          'Matcha & hojicha lattes $8.95, strawberry matcha $10.95',
          'About 5 minutes from Waikiki Beach',
          'Open daily, 7AM–9PM · (808) 260-1835',
        ],
      },
      cta: 'View Our Kona Coffee Menu',
    },
    howToEat: {
      title: 'Tips for Choosing — and Enjoying — Both',
      subtitle: 'Get the Most Out of Matcha and Coffee',
      tips: [
        {
          title: 'Match the Drink to the Moment',
          description: 'Think about what your day needs before you order. A fast, strong wake-up? Coffee. Steady focus for a long stretch with no crash? Matcha. Letting the moment decide is the easiest way to enjoy both without overthinking the "which is better" question.',
        },
        {
          title: 'Watch Your Total Caffeine',
          description: 'Because coffee has more caffeine per cup, one strong coffee can equal roughly two servings of matcha. If you\'re sensitive or drinking late in the day, matcha\'s lower dose and gentler curve are the safer bet for good sleep.',
        },
        {
          title: 'Taste Them Black (or Unsweetened) First',
          description: 'To really compare, try 100% Kona black and matcha unsweetened at least once. That\'s where you notice Kona\'s smooth, nutty low-acidity and matcha\'s grassy, umami creaminess — then sweeten or add milk however you like.',
        },
        {
          title: 'Pair Either With a Fresh Donut',
          description: 'Both drinks shine next to something sweet. A warm mochi donut or malasada balances coffee\'s roastiness and matcha\'s earthy notes alike. Order one of each drink with a donut and turn a quick stop into a proper Waikiki treat.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About Matcha vs Coffee',
      items: [
        {
          question: 'Does matcha have less caffeine than coffee?',
          answer: 'Yes. A serving of matcha has roughly 60–70mg of caffeine, while a standard brewed coffee has about 95–120mg per 8oz cup. So coffee delivers more caffeine per cup. However, matcha\'s L-theanine slows the caffeine\'s effect, giving a calmer, steadier lift that many people find smoother despite the lower dose.',
        },
        {
          question: 'Is matcha healthier than coffee?',
          answer: 'Neither is clearly "healthier" — it\'s largely a tie. Both are rich in antioxidants: matcha in catechins like EGCG, coffee in chlorogenic acids and polyphenols, and both are linked to benefits in moderation. The better choice depends on your caffeine tolerance and how each one makes you feel, not on one being objectively superior.',
        },
        {
          question: 'Can I get both matcha and Kona coffee in Waikiki?',
          answer: 'Yes. Kona Coffee Donut? at 2142 Kalākaua Ave pours real 100% Kona coffee (drip $7, latte $6.35, cold brew $6.95) and a full matcha and hojicha line (matcha and hojicha lattes $8.95, strawberry matcha $10.95). You can taste both, hot or iced, about 5 minutes from Waikiki Beach, open daily 7AM–9PM.',
        },
        {
          question: 'Which gives a calmer energy, matcha or coffee?',
          answer: 'Matcha typically gives calmer, steadier energy. It contains L-theanine, an amino acid that smooths out the caffeine, so you tend to get focused alertness without the sudden spike or crash. Coffee gives a faster, stronger lift, which is great for waking up but can bring jitters or a mid-morning dip for some people.',
        },
        {
          question: 'Should I switch from coffee to matcha?',
          answer: 'Only if it suits you. If coffee makes you anxious, jittery, or disrupts your sleep, matcha\'s lower caffeine and calmer curve may feel better. If you love coffee\'s bold flavor and strong kick, there\'s no need to switch. The easiest way to decide is to try both — at Kona Coffee Donut? you can taste real 100% Kona and matcha side by side.',
        },
      ],
    },
    cta: {
      title: 'Matcha or Coffee? Try Both in Waikiki',
      text: 'Visit Kona Coffee Donut? at 2142 Kalākaua Ave and taste real 100% Kona coffee and a full matcha line side by side — just minutes from Waikiki Beach.',
      menuButton: 'View Kona Coffee Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'Matcha vs Coffee: Which Should You Drink?',
    },
  },
  ja: {
    hero: {
      title: '抹茶 vs コーヒー：どっちを飲むべき？',
      subtitle: 'カフェイン・穏やかさ・味わいを比較 — さらにワイキキで両方試せる場所（2026年版）',
      updated: '2026年6月更新',
      readTime: '8分で読める',
    },
    definition: {
      title: '抹茶かコーヒーか：手っ取り早い答え',
      text: '万人にとっての勝者はありません — <strong>あなた次第</strong>です。<strong>抹茶</strong>はカフェインが少なく（<strong>1杯あたり約60〜70mg</strong>）、L-テアニンというアミノ酸のおかげで<strong>穏やかで安定した覚醒</strong>をもたらします。だからソワソワせずに集中できます。<strong>コーヒー</strong>はカフェインが多く（<strong>淹れた1杯で約95〜120mg</strong>）、<strong>より速く強い高揚感</strong>を与えます。しっかり目覚めたいときに最適ですが、急上昇して落ち込むことも。どちらも抗酸化物質が豊富で、どちらも美味しい。ワイキキの朗報は、<strong>Kona Coffee Donut?</strong> なら本物の100%コナコーヒー<em>も</em>充実の抹茶ラインナップ<em>も</em>注文できること。つまり選ぶ必要はなく、両方試せるのです。',
    },
    history: {
      title: '抹茶 vs コーヒー：カフェインを解説',
      subtitle: 'カフェイン量と、実際の感じ方',
      p1: 'カフェインの量だけなら、数字ではコーヒーの勝ちです。標準的な<strong>淹れたコーヒーは8オンス1杯で約95〜120mg</strong>、一方で<strong>抹茶1杯は約60〜70mg</strong>。だから最大限の刺激だけが目的なら、コーヒーの方が1杯あたりのカフェインは多い。でもカフェイン量は話の半分に過ぎません。多くの人が実際に感じるのは<strong>そのカフェインがどう届くか</strong>です。',
      p2: '抹茶には<strong>L-テアニン</strong>というアミノ酸が含まれ、カフェインが体に効くスピードを緩やかにします。その結果はよく<strong>「穏やかな覚醒」</strong>と表現されます — ゆっくり立ち上がりゆっくり引いていく、安定した集中エネルギーで、たいてい急なソワソワや午前中の失速がありません。コーヒーで不安になったり手が震えたりする人が、同じカフェイン入りでも抹茶の方が明らかにまろやかだと感じるのはこのためです。',
      p3: '対照的にコーヒーは<strong>速く力強い急上昇</strong>を与えがちです。カフェインが素早く効き、はっきり目が覚める。多くの人にとって朝一番はまさにそれが狙いです。トレードオフは、その高揚のあと数時間で<strong>落ち込みや「クラッシュ」</strong>が来ることがあり、量が多いとソワソワや、睡眠に響くほど早い午後の失速を招くことも。抽象的にはどちらのパターンが優れているわけでもなく、体の反応とその日の必要次第です。',
      p4: '健康面では、ほぼ引き分けです。<strong>どちらも抗酸化物質の宝庫</strong>で、抹茶はカテキン（特にEGCG）が豊富、コーヒーは多くの人の食生活でクロロゲン酸やポリフェノールの最大級の供給源です。どちらも適量なら実際の恩恵と結びついています。正直な結論は、<strong>「抹茶はコーヒーより優れているか？」に唯一の答えはない</strong>ということ。より良い一杯とは、あなたのカフェイン耐性、好み、そしてその瞬間に合うものです。',
    },
    comparison: {
      title: '抹茶 vs コーヒー、並べて比較',
      subtitle: '一目でわかる主な違い',
      intro: '最も大切なポイントで、抹茶と淹れたコーヒーを手早く事実ベースで比較します。そして Kona Coffee Donut? でそれぞれ何を注文できるかも：',
      headers: {
        feature: '項目',
        bingsu: '抹茶',
        shavedIce: 'コーヒー',
        kakigori: 'Kona Coffee Donut? では',
      },
      rows: [
        {
          feature: 'カフェイン',
          bingsu: '1杯あたり約60〜70mg',
          shavedIce: '淹れた1杯で約95〜120mg',
          kakigori: '両方メニューに',
        },
        {
          feature: 'エネルギーの曲線',
          bingsu: '穏やかで安定（L-テアニン）',
          shavedIce: '速い急上昇、早めのクラッシュ',
          kakigori: 'ペースはお好みで',
        },
        {
          feature: '味わい',
          bingsu: '草のような旨みとクリーミーさ',
          shavedIce: 'ローストとナッツ、黒糖（100%コナ）',
          kakigori: 'コナか抹茶か',
        },
        {
          feature: '抗酸化物質',
          bingsu: 'カテキン（EGCG）',
          shavedIce: 'クロロゲン酸、ポリフェノール',
          kakigori: 'どちらも豊富',
        },
        {
          feature: '酸味',
          bingsu: '低く、まろやか',
          shavedIce: 'コナは低く、まろやか',
          kakigori: 'どちらも飲みやすい',
        },
        {
          feature: '飲むのに良い時間',
          bingsu: '朝でも午後でも、クラッシュなし',
          shavedIce: '朝の目覚めに',
          kakigori: 'いつでも、午前7時〜午後9時',
        },
      ],
      note: 'この表があなたに決められない唯一のものが、味と耐性です。カフェインやソワソワが気になるなら抹茶の緩やかな曲線が合うかもしれませんし、力強く速い目覚めが欲しいならコーヒーの勝ち。Kona Coffee Donut? なら両方を味わって、あなた自身の体に決定票を投じてもらえます。',
    },
    types: {
      title: 'あなたはどっちを選ぶ？',
      subtitle: '自分の一杯を選ぶ簡単ガイド',
      items: [
        {
          name: '穏やかな集中が欲しいなら抹茶',
          korean: '安定したエネルギー、ソワソワなし',
          description: '心臓がバクバクせずに目覚めて集中したいなら、抹茶のL-テアニンがよりまろやかで長く続く高揚をくれます。勉強や仕事、急上昇と失速を避けたい長い午後にぴったりです。',
          icon: '🍵',
        },
        {
          name: '強い刺激が欲しいならコーヒー',
          korean: '速く力強い目覚め',
          description: '素早く眠気を振り払いたいときは、コーヒーの高いカフェインと速い立ち上がりに勝るものはありません。朝の本物の100%コナ1杯は定番の目覚め — 力強く、香り高く、満足感があります。',
          icon: '☕',
        },
        {
          name: 'コーヒーでソワソワするなら抹茶',
          korean: '敏感な体にやさしい',
          description: 'コーヒーで不安になったり手が震えたり胃が荒れたりするなら、抹茶の方がやさしい選択肢になることが多いです。L-テアニンがカフェインを和らげ、1杯あたりの量が少ないので、より柔らかく均一な体験になります。',
          icon: '🧘',
        },
        {
          name: '力強い味が好きならコーヒー',
          korean: 'ロースト感、コク、安らぎ',
          description: '深いロースト感と黒糖のような甘さが最高の一杯だと思うなら、コーヒーがぴったり。本物の100%コナは自然に酸味が低く、ブラックでも楽しめるほどまろやか — それ自体がひとつの味の体験です。',
          icon: '🔥',
        },
        {
          name: 'または、両方試す',
          korean: '違う気分、違う瞬間',
          description: '一生どちらかを選ぶ必要はありません。多くの人が朝はコーヒー、午後は抹茶に手を伸ばします。お気に入りを見つける一番簡単な方法は、続けて飲み比べること — それこそ Kona Coffee Donut? で叶うことです。',
          icon: '🔄',
        },
      ],
    },
    whyHawaii: {
      title: '抹茶とコーヒーの共通点',
      points: [
        {
          title: 'どちらも抗酸化物質の宝庫',
          description: '抹茶はEGCGのようなカテキンがたっぷり、コーヒーはクロロゲン酸とポリフェノールの主要な供給源。どちらを選んでも、適量なら実際の恩恵と結びついた一杯です — これは「健康 vs 不健康」の対決ではなく、本当に良い2つの選択肢なのです。',
        },
        {
          title: 'どちらも本物のエネルギーを — ただし違う形で',
          description: 'コーヒーは速く強く急上昇し、抹茶は穏やかに安定して立ち上がります。客観的にどちらが優れているわけでもなく、違う瞬間に合わせて調整されています。コツは、鋭い朝の刺激でも、まろやかな午後の集中でも、その日に本当に必要なものに一杯を合わせることです。',
        },
        {
          title: 'どちらも新鮮で良質なほど美味しい',
          description: '安く古いバージョンはどちらもがっかり。点てたての良質な抹茶は鮮やかでクリーミー、淹れたての100%コナはまろやかで香り高い。どちらを選ぶかより、品質と鮮度の方がずっと大切 — だから両方を上手に扱う店を探しましょう。',
        },
        {
          title: 'ひとつだけ選ぶ必要はない',
          description: '抹茶かコーヒーかの議論は、どちらかのチームを選ばなければと決めつけています。でもその必要はありません。両方を提供するカフェなら、それぞれをそのまま楽しめます — 刺激が欲しいときはコーヒー、穏やかさが欲しいときは抹茶。Kona Coffee Donut? はまさにその「両方でいいじゃない」という答えのために作られています。',
        },
      ],
    },
    whereToGet: {
      title: 'ワイキキで抹茶とコナコーヒーを両方試す',
      intro: '抹茶かコーヒーか決められない？ワイキキの Kona Coffee Donut? なら、その必要はありません — 両方をご用意しているので、それぞれ味わってお気に入りを選べます。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalākaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心、カラカウア通り沿いに位置する Kona Coffee Donut? は、本物の100%コナコーヒー（ドリップ$7、ラテ$6.35、コールドブリュー$6.95）に加え、抹茶とほうじ茶の充実したラインナップ（抹茶・ほうじ茶ラテ$8.95、ストロベリー抹茶ラテ$10.95）を提供します。力強いコーヒーの刺激でも、抹茶の穏やかな集中でも、ここでホットでもアイスでも両方試せます。ワイキキビーチから徒歩約5分、毎日午前7時〜午後9時営業。お電話は (808) 260-1835。',
        highlights: [
          '100%コナコーヒー — ドリップ$7、ラテ$6.35、コールドブリュー$6.95',
          '抹茶・ほうじ茶ラテ$8.95、ストロベリー抹茶$10.95',
          'ワイキキビーチから約5分',
          '毎日営業、午前7時〜午後9時 · (808) 260-1835',
        ],
      },
      cta: 'コナコーヒーメニューを見る',
    },
    howToEat: {
      title: '選ぶ、そして両方楽しむためのコツ',
      subtitle: '抹茶とコーヒーを最大限に楽しむために',
      tips: [
        {
          title: '瞬間に一杯を合わせる',
          description: '注文する前に、その日に何が必要かを考えましょう。速く強い目覚め？ならコーヒー。クラッシュなしで長く続く安定した集中？なら抹茶。瞬間に決めてもらうのが、「どっちが良い？」と考えすぎずに両方楽しむ一番簡単な方法です。',
        },
        {
          title: '総カフェイン量に気をつける',
          description: 'コーヒーは1杯あたりのカフェインが多いので、濃いコーヒー1杯は抹茶およそ2杯分に相当することも。敏感な方や1日の遅い時間に飲むなら、抹茶の少ない量と緩やかな曲線が良い睡眠のためのより安全な選択です。',
        },
        {
          title: 'まずブラック（または無糖）で味わう',
          description: '本当に比べるなら、100%コナをブラックで、抹茶を無糖で少なくとも一度試してみて。そこでコナのまろやかでナッツのような低酸味と、抹茶の草のような旨みとクリーミーさに気づきます — それからお好みで甘くしたりミルクを足したり。',
        },
        {
          title: 'どちらも淹れたてドーナツと合わせて',
          description: 'どちらの飲み物も甘いもののそばで輝きます。温かいモチドーナツやマラサダは、コーヒーのロースト感も抹茶の土のような風味も同じように引き立てます。両方の飲み物とドーナツを注文して、さっとの立ち寄りを本物のワイキキのご褒美に。',
        },
      ],
    },
    faq: {
      title: '抹茶 vs コーヒーに関するよくある質問',
      items: [
        {
          question: '抹茶はコーヒーよりカフェインが少ない？',
          answer: 'はい。抹茶1杯のカフェインは約60〜70mg、標準的な淹れたコーヒーは8オンス1杯で約95〜120mgです。だから1杯あたりのカフェインはコーヒーの方が多い。ただし抹茶のL-テアニンがカフェインの効きを緩やかにするため、量が少なくても多くの人がまろやかだと感じる、穏やかで安定した高揚をもたらします。',
        },
        {
          question: '抹茶はコーヒーより健康的？',
          answer: 'どちらも明確に「より健康的」というわけではなく、ほぼ引き分けです。どちらも抗酸化物質が豊富で、抹茶はEGCGのようなカテキン、コーヒーはクロロゲン酸とポリフェノール、どちらも適量なら恩恵と結びついています。より良い選択は、片方が客観的に優れているかではなく、あなたのカフェイン耐性とそれぞれがどう感じさせるか次第です。',
        },
        {
          question: 'ワイキキで抹茶とコナコーヒーの両方を飲める？',
          answer: 'はい。2142 Kalākaua Ave の Kona Coffee Donut? は、本物の100%コナコーヒー（ドリップ$7、ラテ$6.35、コールドブリュー$6.95）と、充実した抹茶・ほうじ茶ラインナップ（抹茶・ほうじ茶ラテ$8.95、ストロベリー抹茶$10.95）を提供します。ワイキキビーチから徒歩約5分、毎日午前7時〜午後9時営業で、ホットでもアイスでも両方味わえます。',
        },
        {
          question: '抹茶とコーヒー、どちらが穏やかなエネルギー？',
          answer: '抹茶の方が穏やかで安定したエネルギーをくれるのが一般的です。カフェインを和らげるアミノ酸L-テアニンを含むため、急な急上昇やクラッシュなしに集中した覚醒が得られやすい。コーヒーはより速く強い高揚を与え、目覚めには最適ですが、人によってはソワソワや午前中の失速を招くこともあります。',
        },
        {
          question: 'コーヒーから抹茶に切り替えるべき？',
          answer: 'あなたに合う場合だけです。コーヒーで不安になったりソワソワしたり睡眠が乱れたりするなら、抹茶の少ないカフェインと穏やかな曲線の方が心地よいかもしれません。コーヒーの力強い味と強い刺激が好きなら、切り替える必要はありません。一番簡単な決め方は両方試すこと — Kona Coffee Donut? なら本物の100%コナと抹茶を並べて味わえます。',
        },
      ],
    },
    cta: {
      title: '抹茶かコーヒーか？ワイキキで両方試そう',
      text: '2142 Kalākaua Ave の Kona Coffee Donut? で、本物の100%コナコーヒーと充実の抹茶ラインナップを並べて味わってください — ワイキキビーチからわずか数分です。',
      menuButton: 'コナコーヒーメニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: '抹茶 vs コーヒー：どっちを飲むべき？',
    },
  },
  ko: {
    hero: {
      title: '말차 vs 커피: 어떤 걸 마셔야 할까?',
      subtitle: '카페인·차분함·풍미 비교 — 게다가 와이키키에서 둘 다 맛보는 곳 (2026 가이드)',
      updated: '2026년 6월 업데이트',
      readTime: '8분 소요',
    },
    definition: {
      title: '말차냐 커피냐: 빠른 결론',
      text: '모두에게 통하는 승자는 없습니다 — <strong>당신에게 달렸습니다</strong>. <strong>말차</strong>는 카페인이 적고(<strong>한 잔에 약 60~70mg</strong>) L-테아닌이라는 아미노산 덕분에 <strong>차분하고 안정된 각성</strong>을 줍니다. 그래서 초조함 없이 집중할 수 있죠. <strong>커피</strong>는 카페인이 더 많고(<strong>내린 한 잔에 약 95~120mg</strong>) <strong>더 빠르고 강한 상승감</strong>을 줍니다. 확실히 깨어나기엔 좋지만 급상승 후 급하강할 수 있어요. 둘 다 항산화 물질이 풍부하고 둘 다 맛있습니다. 와이키키의 희소식: <strong>Kona Coffee Donut?</strong> 에서는 진짜 100% 코나 커피<em>도</em> 풍성한 말차 라인업<em>도</em> 주문할 수 있습니다. 즉 굳이 고를 필요 없이, 그냥 둘 다 맛보면 됩니다.',
    },
    history: {
      title: '말차 vs 커피: 카페인 완전 정리',
      subtitle: '카페인이 얼마나, 그리고 실제로 어떻게 느껴지는가',
      p1: '카페인 양만 놓고 보면 숫자로는 커피의 승리입니다. 표준적인 <strong>내린 커피는 8온스 한 잔에 약 95~120mg</strong>인 반면, <strong>말차 한 잔은 약 60~70mg</strong>입니다. 그러니 최대한의 자극만이 목적이라면 커피가 한 잔당 카페인이 더 많습니다. 하지만 카페인 함량은 이야기의 절반일 뿐 — 대부분의 사람이 실제로 느끼는 것은 <strong>그 카페인이 어떻게 전달되는가</strong>입니다.',
      p2: '말차에는 <strong>L-테아닌</strong>이라는 아미노산이 들어 있어 카페인이 몸에 작용하는 속도를 늦춥니다. 그 결과는 흔히 <strong>"차분한 각성"</strong>으로 표현됩니다 — 부드럽게 올라 부드럽게 가라앉는, 안정되고 집중된 에너지로, 대개 갑작스러운 초조함이나 오전 중의 급하강이 없습니다. 커피를 마시면 불안하거나 손이 떨리는 사람들이, 같은 카페인 음료인데도 말차를 눈에 띄게 부드럽다고 느끼는 이유가 바로 이것입니다.',
      p3: '반대로 커피는 <strong>빠르고 강력한 급상승</strong>을 주는 경향이 있습니다. 카페인이 빠르게 작용해 또렷하게 깨어나고, 많은 사람에게는 아침 첫 잔에 바로 그것이 핵심이죠. 그 대가로 상승 뒤 몇 시간 후 <strong>하강이나 "크래시"</strong>가 올 수 있고, 양이 많으면 초조함이나, 잠에 지장을 줄 만큼 이른 오후의 급하강을 부를 수 있습니다. 추상적으로는 어느 패턴도 더 낫지 않으며, 당신의 몸이 어떻게 반응하고 그날 무엇이 필요한지에 달렸습니다.',
      p4: '건강 면에서는 대체로 무승부입니다. <strong>둘 다 항산화 물질의 보고</strong>로, 말차는 카테킨(특히 EGCG)이 가득하고, 커피는 대부분의 식단에서 클로로겐산과 폴리페놀의 최대 공급원 중 하나입니다. 둘 다 적당히 마시면 실질적인 이점과 연결됩니다. 솔직한 결론은 <strong>"말차가 커피보다 나은가?"에는 단 하나의 답이 없다</strong>는 것 — 더 나은 음료란 당신의 카페인 내성, 취향, 그리고 그 순간에 맞는 것입니다.',
    },
    comparison: {
      title: '말차 vs 커피, 나란히 비교',
      subtitle: '한눈에 보는 핵심 차이',
      intro: '가장 중요한 항목들로 말차와 내린 커피를 빠르고 사실적으로 비교합니다 — 그리고 Kona Coffee Donut? 에서 각각 무엇을 주문할 수 있는지도:',
      headers: {
        feature: '항목',
        bingsu: '말차',
        shavedIce: '커피',
        kakigori: 'Kona Coffee Donut? 에서는',
      },
      rows: [
        {
          feature: '카페인',
          bingsu: '한 잔에 약 60~70mg',
          shavedIce: '내린 한 잔에 약 95~120mg',
          kakigori: '둘 다 메뉴에',
        },
        {
          feature: '에너지 곡선',
          bingsu: '차분하고 안정적 (L-테아닌)',
          shavedIce: '빠른 급상승, 빠른 크래시',
          kakigori: '속도는 취향대로',
        },
        {
          feature: '풍미',
          bingsu: '풀향, 감칠맛, 크리미함',
          shavedIce: '로스팅·고소함·흑설탕 (100% 코나)',
          kakigori: '코나 또는 말차',
        },
        {
          feature: '항산화 물질',
          bingsu: '카테킨 (EGCG)',
          shavedIce: '클로로겐산, 폴리페놀',
          kakigori: '둘 다 풍부',
        },
        {
          feature: '산미',
          bingsu: '낮고 부드러움',
          shavedIce: '코나는 낮고 부드러움',
          kakigori: '둘 다 마시기 편함',
        },
        {
          feature: '마시기 좋은 시간',
          bingsu: '아침이든 오후든, 크래시 없음',
          shavedIce: '아침 시동용',
          kakigori: '언제든, 오전 7시~오후 9시',
        },
      ],
      note: '이 표가 당신 대신 정해줄 수 없는 단 하나는 취향과 내성입니다. 카페인이나 초조함이 걱정된다면 말차의 완만한 곡선이 맞을 수 있고, 강하고 빠른 각성을 원한다면 커피의 승리입니다. Kona Coffee Donut? 에서는 둘 다 맛보고, 당신의 몸이 결정표를 던지게 할 수 있습니다.',
    },
    types: {
      title: '어떤 걸 골라야 할까?',
      subtitle: '내 음료 고르기 간단 가이드',
      items: [
        {
          name: '차분한 집중을 원하면 말차',
          korean: '안정된 에너지, 초조함 없이',
          description: '심장이 두근대지 않으면서 깨어나 집중하고 싶다면, 말차의 L-테아닌이 더 부드럽고 오래가는 상승감을 줍니다. 공부, 일, 또는 급상승과 급하강을 피하고 싶은 긴 오후에 이상적입니다.',
          icon: '🍵',
        },
        {
          name: '강한 자극을 원하면 커피',
          korean: '빠르고 강력한 각성',
          description: '빠르게 잠을 떨쳐내야 할 때는 커피의 높은 카페인과 빠른 발현을 이기기 어렵습니다. 아침의 진짜 100% 코나 한 잔은 클래식한 각성 — 진하고, 향긋하고, 만족스럽습니다.',
          icon: '☕',
        },
        {
          name: '커피가 초조하게 하면 말차',
          korean: '예민한 몸에 더 부드럽게',
          description: '커피로 불안하거나 손이 떨리거나 속이 불편하다면, 말차가 더 친절한 선택인 경우가 많습니다. L-테아닌이 카페인을 누그러뜨리고, 한 잔당 양이 적어 더 부드럽고 고른 경험을 줍니다.',
          icon: '🧘',
        },
        {
          name: '진한 풍미를 좋아하면 커피',
          korean: '로스팅·풍부함·편안함',
          description: '깊은 로스팅과 흑설탕 같은 단맛이 최고의 음료라고 생각한다면 커피가 제격입니다. 진짜 100% 코나는 자연스럽게 산미가 낮고 블랙으로도 즐길 만큼 부드러워 — 그 자체로 하나의 풍미 경험입니다.',
          icon: '🔥',
        },
        {
          name: '아니면, 그냥 둘 다',
          korean: '다른 기분, 다른 순간',
          description: '평생 한쪽 편을 정할 필요는 없습니다. 많은 사람이 아침엔 커피, 오후엔 말차에 손을 뻗습니다. 취향을 찾는 가장 쉬운 방법은 연달아 맛보는 것 — 바로 Kona Coffee Donut? 가 가능하게 해주는 일이죠.',
          icon: '🔄',
        },
      ],
    },
    whyHawaii: {
      title: '말차와 커피의 공통점',
      points: [
        {
          title: '둘 다 항산화 물질의 보고',
          description: '말차는 EGCG 같은 카테킨이 가득하고, 커피는 클로로겐산과 폴리페놀의 주요 공급원입니다. 어느 쪽을 택하든 적당히 마시면 실질적 이점과 연결된 음료입니다 — 이건 "건강 대 불건강"의 대결이 아니라, 진짜로 좋은 두 가지 선택지입니다.',
        },
        {
          title: '둘 다 진짜 에너지를 — 다만 다른 방식으로',
          description: '커피는 빠르고 강하게 급상승하고, 말차는 차분하고 안정되게 올라옵니다. 객관적으로 어느 쪽이 더 낫지 않으며, 서로 다른 순간에 맞춰져 있습니다. 요령은 날카로운 아침 각성이든 부드러운 오후 집중이든, 그날 정말 필요한 것에 음료를 맞추는 것입니다.',
        },
        {
          title: '둘 다 신선하고 잘 소싱될수록 맛있다',
          description: '싸고 오래된 버전은 어느 쪽이든 실망입니다. 갓 저은 양질의 말차는 선명하고 크리미하며, 갓 내린 100% 코나는 부드럽고 향긋합니다. 어느 음료를 고르느냐보다 품질과 신선도가 훨씬 중요 — 그러니 둘 다 잘하는 곳을 찾으세요.',
        },
        {
          title: '하나만 고를 필요는 없다',
          description: '말차 대 커피 논쟁은 한 팀을 골라야 한다고 전제합니다. 그럴 필요 없습니다. 둘 다 내리는 카페에서는 각각을 그 자체로 즐길 수 있어요 — 자극이 필요하면 커피, 차분함이 필요하면 말차. Kona Coffee Donut? 는 바로 그 "왜 둘 다 안 돼?"라는 답을 위해 만들어졌습니다.',
        },
      ],
    },
    whereToGet: {
      title: '와이키키에서 말차와 코나 커피 둘 다 맛보기',
      intro: '말차와 커피 사이에서 못 정하겠나요? 와이키키의 Kona Coffee Donut? 에서는 그럴 필요 없습니다 — 둘 다 내리니, 각각 맛보고 취향을 고르세요.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalākaua Ave, Honolulu, HI 96815',
        description: '와이키키의 중심, 칼라카우아 애비뉴에 자리한 Kona Coffee Donut? 는 진짜 100% 코나 커피(드립 $7, 라테 $6.35, 콜드브루 $6.95)와 함께 풍성한 말차·호지차 라인업(말차·호지차 라테 $8.95, 딸기 말차 라테 $10.95)을 제공합니다. 진한 커피의 자극이든 말차의 차분한 집중이든, 여기서 핫이든 아이스든 둘 다 맛볼 수 있어요. 와이키키 해변에서 도보 약 5분, 매일 오전 7시~오후 9시 영업. 전화 (808) 260-1835.',
        highlights: [
          '100% 코나 커피 — 드립 $7, 라테 $6.35, 콜드브루 $6.95',
          '말차·호지차 라테 $8.95, 딸기 말차 $10.95',
          '와이키키 해변에서 약 5분',
          '매일 영업, 오전 7시~오후 9시 · (808) 260-1835',
        ],
      },
      cta: '코나 커피 메뉴 보기',
    },
    howToEat: {
      title: '고르는 — 그리고 둘 다 즐기는 — 팁',
      subtitle: '말차와 커피를 200% 즐기는 법',
      tips: [
        {
          title: '순간에 음료를 맞추세요',
          description: '주문 전에 그날 무엇이 필요한지 생각해 보세요. 빠르고 강한 각성? 커피. 크래시 없이 오래가는 안정된 집중? 말차. 순간이 정하게 두는 것이 "뭐가 더 나아?"를 지나치게 고민하지 않고 둘 다 즐기는 가장 쉬운 방법입니다.',
        },
        {
          title: '총 카페인을 살피세요',
          description: '커피가 한 잔당 카페인이 더 많기 때문에, 진한 커피 한 잔은 말차 약 두 잔에 맞먹을 수 있습니다. 예민하거나 늦은 시간에 마신다면, 말차의 적은 양과 완만한 곡선이 좋은 잠을 위한 더 안전한 선택입니다.',
        },
        {
          title: '먼저 블랙(또는 무가당)으로 맛보세요',
          description: '제대로 비교하려면 100% 코나를 블랙으로, 말차를 무가당으로 적어도 한 번 시도해 보세요. 거기서 코나의 부드럽고 고소한 낮은 산미와 말차의 풀향·감칠맛 크리미함이 느껴집니다 — 그다음엔 취향대로 달게 하거나 우유를 더하세요.',
        },
        {
          title: '어느 쪽이든 갓 만든 도넛과 곁들이기',
          description: '두 음료 모두 달콤한 것 옆에서 빛납니다. 따뜻한 모찌 도넛이나 말라사다는 커피의 로스팅 감도, 말차의 흙 같은 노트도 똑같이 살려줍니다. 두 음료를 도넛과 함께 주문해, 잠깐의 방문을 제대로 된 와이키키의 호사로 만드세요.',
        },
      ],
    },
    faq: {
      title: '말차 vs 커피에 대해 자주 묻는 질문',
      items: [
        {
          question: '말차는 커피보다 카페인이 적나요?',
          answer: '네. 말차 한 잔의 카페인은 약 60~70mg, 표준적인 내린 커피는 8온스 한 잔에 약 95~120mg입니다. 그러니 한 잔당 카페인은 커피가 더 많습니다. 다만 말차의 L-테아닌이 카페인 작용을 늦춰서, 적은 양에도 많은 사람이 더 부드럽다고 느끼는 차분하고 안정된 상승감을 줍니다.',
        },
        {
          question: '말차가 커피보다 건강한가요?',
          answer: '어느 쪽도 명확히 "더 건강하다"고 하긴 어렵고, 대체로 무승부입니다. 둘 다 항산화 물질이 풍부해서 말차는 EGCG 같은 카테킨, 커피는 클로로겐산과 폴리페놀이 많고, 둘 다 적당히 마시면 이점과 연결됩니다. 더 나은 선택은 한쪽이 객관적으로 우월한지가 아니라, 당신의 카페인 내성과 각각이 어떻게 느껴지는지에 달렸습니다.',
        },
        {
          question: '와이키키에서 말차와 코나 커피를 둘 다 마실 수 있나요?',
          answer: '네. 2142 Kalākaua Ave 의 Kona Coffee Donut? 는 진짜 100% 코나 커피(드립 $7, 라테 $6.35, 콜드브루 $6.95)와 풍성한 말차·호지차 라인업(말차·호지차 라테 $8.95, 딸기 말차 $10.95)을 제공합니다. 와이키키 해변에서 도보 약 5분, 매일 오전 7시~오후 9시 영업하며, 핫이든 아이스든 둘 다 맛볼 수 있습니다.',
        },
        {
          question: '말차와 커피 중 어느 쪽이 더 차분한 에너지를 주나요?',
          answer: '보통 말차가 더 차분하고 안정된 에너지를 줍니다. 카페인을 누그러뜨리는 아미노산 L-테아닌이 들어 있어, 급상승이나 크래시 없이 집중된 각성을 얻기 쉽습니다. 커피는 더 빠르고 강한 상승을 주어 잠을 깨우기엔 좋지만, 사람에 따라 초조함이나 오전 중의 급하강을 부를 수 있습니다.',
        },
        {
          question: '커피에서 말차로 바꿔야 할까요?',
          answer: '당신에게 맞을 때만요. 커피로 불안하거나 초조하거나 잠이 흐트러진다면, 말차의 적은 카페인과 차분한 곡선이 더 편할 수 있습니다. 커피의 진한 풍미와 강한 자극이 좋다면 바꿀 필요는 없습니다. 가장 쉬운 결정법은 둘 다 시도하는 것 — Kona Coffee Donut? 에서는 진짜 100% 코나와 말차를 나란히 맛볼 수 있습니다.',
        },
      ],
    },
    cta: {
      title: '말차냐 커피냐? 와이키키에서 둘 다 맛보세요',
      text: '2142 Kalākaua Ave 의 Kona Coffee Donut? 에 들러 진짜 100% 코나 커피와 풍성한 말차 라인업을 나란히 맛보세요 — 와이키키 해변에서 단 몇 분 거리입니다.',
      menuButton: '코나 커피 메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '말차 vs 커피: 어떤 걸 마셔야 할까?',
    },
  },
  zh: {
    hero: {
      title: '抹茶 vs 咖啡：该喝哪一个？',
      subtitle: '咖啡因、平稳感与风味大比拼——还有在威基基两者都能试的地方（2026）',
      updated: '2026年6月更新',
      readTime: '阅读约8分钟',
    },
    definition: {
      title: '抹茶还是咖啡：快速答案',
      text: '没有放之四海皆准的赢家——<strong>取决于你自己</strong>。<strong>抹茶</strong>咖啡因较少（<strong>每杯约60～70mg</strong>），凭借一种叫L-茶氨酸的氨基酸，带来<strong>平稳、持久的清醒</strong>，让你专注却不心慌。<strong>咖啡</strong>咖啡因更多（<strong>每杯冲泡约95～120mg</strong>），提供<strong>更快、更强的提神</strong>——想彻底清醒时很棒，但可能急升又骤降。两者都富含抗氧化物，也都很好喝。威基基的好消息是：在 <strong>Kona Coffee Donut?</strong>，你既能点正宗100%科纳咖啡，<em>也</em>能点完整的抹茶系列，所以其实不必二选一——两个都试试就好。',
    },
    history: {
      title: '抹茶 vs 咖啡：说清咖啡因',
      subtitle: '咖啡因有多少，以及实际感受如何',
      p1: '只论咖啡因，数字上咖啡取胜。标准的<strong>冲泡咖啡每8盎司约95～120mg</strong>，而<strong>一份抹茶约60～70mg</strong>。所以如果你唯一的目标是最大刺激，咖啡每杯的咖啡因更多。但咖啡因含量只是故事的一半——大多数人真正感受到的是<strong>这份咖啡因如何抵达你</strong>。',
      p2: '抹茶含有<strong>L-茶氨酸</strong>，一种能减缓咖啡因起效速度的氨基酸。其结果常被形容为<strong>"平稳的清醒"</strong>——温和上升、温和退去的稳定专注能量，通常没有突然的心慌或上午的骤降。这就是为什么很多喝咖啡会焦虑或手抖的人，会觉得抹茶明显更顺，尽管两者都含咖啡因。',
      p3: '相比之下，咖啡往往带来<strong>快速而强劲的急升</strong>。咖啡因起效快，你会明显清醒，对许多人来说清晨第一杯正是要这个。代价是这份提神几小时后可能跟着<strong>低落或"骤降"</strong>，量大还可能带来心慌，或让下午过早结束而影响睡眠。抽象地说哪种模式都不更好——关键在于你的身体如何反应，以及那天你需要什么。',
      p4: '健康方面，基本打平。<strong>两者都是抗氧化物的宝库</strong>：抹茶富含儿茶素（尤其是EGCG），咖啡则是多数人饮食中绿原酸和多酚的最大来源之一。两者适量饮用都与实实在在的益处相关。诚实的结论是，<strong>"抹茶比咖啡好吗？"没有唯一答案</strong>——更好的那一杯，是契合你的咖啡因耐受度、口味和当下心情的那一杯。',
    },
    comparison: {
      title: '抹茶 vs 咖啡，并排对比',
      subtitle: '一眼看清关键差异',
      intro: '这是抹茶与冲泡咖啡在最重要方面的快速、事实性对比——以及在 Kona Coffee Donut? 各自能点到什么：',
      headers: {
        feature: '项目',
        bingsu: '抹茶',
        shavedIce: '咖啡',
        kakigori: '在 Kona Coffee Donut?',
      },
      rows: [
        {
          feature: '咖啡因',
          bingsu: '每杯约60～70mg',
          shavedIce: '每杯冲泡约95～120mg',
          kakigori: '两者都有',
        },
        {
          feature: '能量曲线',
          bingsu: '平稳持久（L-茶氨酸）',
          shavedIce: '急升快，骤降也快',
          kakigori: '节奏随你挑',
        },
        {
          feature: '风味',
          bingsu: '草本、鲜味、奶香',
          shavedIce: '烘焙、坚果、红糖（100%科纳）',
          kakigori: '科纳或抹茶',
        },
        {
          feature: '抗氧化物',
          bingsu: '儿茶素（EGCG）',
          shavedIce: '绿原酸、多酚',
          kakigori: '两者都丰富',
        },
        {
          feature: '酸度',
          bingsu: '低而顺滑',
          shavedIce: '科纳偏低，顺滑',
          kakigori: '两者都好入口',
        },
        {
          feature: '适饮时间',
          bingsu: '早晚皆宜，无骤降',
          shavedIce: '清晨启动',
          kakigori: '随时，上午7点至晚上9点',
        },
      ],
      note: '这张表唯一替你决定不了的，是口味和耐受度。若担心咖啡因或心慌，抹茶更平缓的曲线可能适合你；若想要强劲快速的清醒，咖啡取胜。在 Kona Coffee Donut?，你可以两者都尝，让自己的身体投出决定性一票。',
    },
    types: {
      title: '你该选哪一个？',
      subtitle: '挑选你那一杯的简单指南',
      items: [
        {
          name: '想要平稳专注就选抹茶',
          korean: '稳定能量，不心慌',
          description: '如果你想清醒专注又不心跳加速，抹茶的L-茶氨酸带来更顺、更持久的提神。它非常适合学习、工作，或一个不想急升骤降的漫长午后。',
          icon: '🍵',
        },
        {
          name: '想要强劲提神就选咖啡',
          korean: '快速有力的清醒',
          description: '当你需要迅速摆脱困意，咖啡更高的咖啡因和快速起效很难被超越。清晨一杯正宗100%科纳是经典的唤醒——浓郁、芳香、令人满足。',
          icon: '☕',
        },
        {
          name: '咖啡让你心慌就选抹茶',
          korean: '对敏感体质更温和',
          description: '如果咖啡让你焦虑、手抖或肠胃不适，抹茶往往是更友好的选择。L-茶氨酸缓和了咖啡因，每杯较低的剂量意味着更柔和、更平稳的体验。',
          icon: '🧘',
        },
        {
          name: '爱浓郁风味就选咖啡',
          korean: '烘焙、醇厚、慰藉',
          description: '如果你心中的好饮品是深沉的烘焙和红糖般的甜香，那咖啡就是你的菜。正宗100%科纳天然低酸，顺滑到可以纯黑品尝——本身就是一场风味体验。',
          icon: '🔥',
        },
        {
          name: '或者，干脆两个都试',
          korean: '不同心情，不同时刻',
          description: '你不必一辈子站一边。很多人早上喝咖啡、下午喝抹茶。找到最爱最简单的方法就是连着对比品尝——而这正是 Kona Coffee Donut? 能让你做到的。',
          icon: '🔄',
        },
      ],
    },
    whyHawaii: {
      title: '抹茶与咖啡的共同点',
      points: [
        {
          title: '两者都是抗氧化物宝库',
          description: '抹茶富含EGCG等儿茶素，咖啡则是绿原酸和多酚的主要来源。无论你选哪个，适量饮用都是一杯与实在益处相关的饮品——这不是"健康 vs 不健康"的对决，而是两个真正不错的选择。',
        },
        {
          title: '两者都给真实能量——只是方式不同',
          description: '咖啡又快又强地急升，抹茶平稳缓和地上升。客观上谁都不更好，它们是为不同时刻调校的。诀窍是让饮品契合你这天真正需要的，无论是清晨的锐利一击，还是午后的顺滑专注。',
        },
        {
          title: '两者都是越新鲜、越优质越好喝',
          description: '廉价陈旧的版本，哪一个都令人失望。现打的优质抹茶鲜亮而奶香，现冲的100%科纳顺滑而芳香。品质与新鲜远比你选哪种饮品更重要——所以要找一家两样都做得好的店。',
        },
        {
          title: '你不必只挑一个',
          description: '抹茶对咖啡的争论，预设了你必须选一队。其实不必。在两者都供应的咖啡馆，你可以各取所长——想提神就咖啡，想平稳就抹茶。Kona Coffee Donut? 正是为这个"为什么不都要"的答案而生。',
        },
      ],
    },
    whereToGet: {
      title: '在威基基把抹茶和科纳咖啡都试一试',
      intro: '在抹茶和咖啡之间难以取舍？在威基基的 Kona Coffee Donut?，你不必取舍——我们两样都做，你可以各尝一口，选出你的最爱。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalākaua Ave, Honolulu, HI 96815',
        description: '就在威基基中心地段的卡拉卡瓦大道上，Kona Coffee Donut? 供应正宗100%科纳咖啡（手冲 $7、拿铁 $6.35、冷萃 $6.95），同时还有完整的抹茶与焙茶系列（抹茶、焙茶拿铁 $8.95，草莓抹茶拿铁 $10.95）。无论你想要咖啡的强劲提神，还是抹茶的平稳专注，都能在这里冷热皆宜地两样都试。我们距威基基海滩步行约5分钟，每天上午7点至晚上9点营业。电话 (808) 260-1835。',
        highlights: [
          '100%科纳咖啡——手冲 $7、拿铁 $6.35、冷萃 $6.95',
          '抹茶、焙茶拿铁 $8.95，草莓抹茶 $10.95',
          '距威基基海滩约5分钟',
          '每天营业，上午7点至晚上9点 · (808) 260-1835',
        ],
      },
      cta: '查看我们的科纳咖啡菜单',
    },
    howToEat: {
      title: '选择——并同时享受——两者的小贴士',
      subtitle: '充分享受抹茶与咖啡',
      tips: [
        {
          title: '让饮品契合当下',
          description: '点单前先想想这一天需要什么。快速强劲的清醒？咖啡。不骤降、能撑很久的稳定专注？抹茶。让当下来决定，是不必纠结"哪个更好"就能享受两者的最简单方法。',
        },
        {
          title: '留意总咖啡因',
          description: '由于咖啡每杯咖啡因更多，一杯浓咖啡大约等于两份抹茶。如果你比较敏感或在一天较晚时饮用，抹茶更低的剂量和更平缓的曲线，是保证好睡眠更稳妥的选择。',
        },
        {
          title: '先纯黑（或无糖）品尝',
          description: '想真正对比，至少一次试试纯黑的100%科纳和无糖的抹茶。那里你能尝到科纳顺滑、坚果般的低酸，以及抹茶草本、鲜味的奶香——然后再随喜好加糖或加奶。',
        },
        {
          title: '两者都可配一个新鲜甜甜圈',
          description: '两种饮品在甜食旁都更出彩。温热的麻糬甜甜圈或马拉萨达，既衬托咖啡的烘焙感，也衬托抹茶的大地气息。各点一杯配上甜甜圈，把匆匆一停变成一次正经的威基基享受。',
        },
      ],
    },
    faq: {
      title: '关于抹茶 vs 咖啡的常见问题',
      items: [
        {
          question: '抹茶的咖啡因比咖啡少吗？',
          answer: '是的。一份抹茶约含60～70mg咖啡因，而标准冲泡咖啡每8盎司约95～120mg。所以每杯的咖啡因咖啡更多。不过抹茶的L-茶氨酸会减缓咖啡因起效，带来平稳持久的提神，尽管剂量更低，许多人却觉得更顺。',
        },
        {
          question: '抹茶比咖啡更健康吗？',
          answer: '两者都谈不上明显"更健康"，基本打平。二者都富含抗氧化物：抹茶有EGCG等儿茶素，咖啡有绿原酸和多酚，适量饮用都与益处相关。更好的选择取决于你的咖啡因耐受度以及各自给你的感受，而不是谁客观上更优。',
        },
        {
          question: '在威基基能同时喝到抹茶和科纳咖啡吗？',
          answer: '能。位于 2142 Kalākaua Ave 的 Kona Coffee Donut? 供应正宗100%科纳咖啡（手冲 $7、拿铁 $6.35、冷萃 $6.95）以及完整的抹茶与焙茶系列（抹茶、焙茶拿铁 $8.95，草莓抹茶 $10.95）。距威基基海滩步行约5分钟，每天上午7点至晚上9点营业，冷热皆可两样都尝。',
        },
        {
          question: '抹茶和咖啡，哪个能量更平稳？',
          answer: '抹茶通常给出更平稳、更稳定的能量。它含有能缓和咖啡因的氨基酸L-茶氨酸，让你更容易获得专注的清醒，而不会急升或骤降。咖啡带来更快更强的提神，适合唤醒，但对某些人可能带来心慌或上午的低落。',
        },
        {
          question: '我应该从咖啡换成抹茶吗？',
          answer: '只在它适合你时。如果咖啡让你焦虑、心慌或扰乱睡眠，抹茶更低的咖啡因和更平缓的曲线可能感觉更好。如果你喜欢咖啡浓郁的风味和强劲的提神，就没必要换。最简单的决定方式是两者都试——在 Kona Coffee Donut?，你可以把正宗100%科纳和抹茶并排品尝。',
        },
      ],
    },
    cta: {
      title: '抹茶还是咖啡？在威基基两个都试试',
      text: '前往 2142 Kalākaua Ave 的 Kona Coffee Donut?，把正宗100%科纳咖啡和完整的抹茶系列并排品尝——距威基基海滩仅几分钟。',
      menuButton: '查看科纳咖啡菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: '抹茶 vs 咖啡：该喝哪一个？',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Matcha vs Coffee: Which Should You Drink? (Waikiki 2026)',
  description: 'A factual comparison of matcha vs coffee — caffeine, energy, antioxidants, and flavor — plus where to try both real 100% Kona coffee and a full matcha line in Waikiki.',
  image: 'https://www.konacoffeedonut.com/images/blog/matcha-vs-coffee-waikiki.jpeg',
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
    '@id': 'https://www.konacoffeedonut.com/en/blog/matcha-vs-coffee-waikiki',
  },
  keywords: 'matcha vs coffee, matcha or coffee, is matcha better than coffee, matcha vs coffee caffeine, matcha benefits vs coffee',
  wordCount: 1500,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does matcha have less caffeine than coffee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A serving of matcha has roughly 60–70mg of caffeine, while a standard brewed coffee has about 95–120mg per 8oz cup. So coffee delivers more caffeine per cup. However, matcha\'s L-theanine slows the caffeine\'s effect, giving a calmer, steadier lift that many people find smoother despite the lower dose.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is matcha healthier than coffee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither is clearly "healthier" — it\'s largely a tie. Both are rich in antioxidants: matcha in catechins like EGCG, coffee in chlorogenic acids and polyphenols, and both are linked to benefits in moderation. The better choice depends on your caffeine tolerance and how each one makes you feel, not on one being objectively superior.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get both matcha and Kona coffee in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Kona Coffee Donut? at 2142 Kalākaua Ave pours real 100% Kona coffee (drip $7, latte $6.35, cold brew $6.95) and a full matcha and hojicha line (matcha and hojicha lattes $8.95, strawberry matcha $10.95). You can taste both, hot or iced, about 5 minutes from Waikiki Beach, open daily 7AM–9PM.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which gives a calmer energy, matcha or coffee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Matcha typically gives calmer, steadier energy. It contains L-theanine, an amino acid that smooths out the caffeine, so you tend to get focused alertness without the sudden spike or crash. Coffee gives a faster, stronger lift, which is great for waking up but can bring jitters or a mid-morning dip for some people.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I switch from coffee to matcha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only if it suits you. If coffee makes you anxious, jittery, or disrupts your sleep, matcha\'s lower caffeine and calmer curve may feel better. If you love coffee\'s bold flavor and strong kick, there\'s no need to switch. The easiest way to decide is to try both — at Kona Coffee Donut? you can taste real 100% Kona and matcha side by side.',
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
      name: 'Matcha vs Coffee: Which Should You Drink?',
      item: 'https://www.konacoffeedonut.com/en/blog/matcha-vs-coffee-waikiki',
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

export default function MatchaVsCoffeeWaikikiPage() {
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
          src="/images/blog/matcha-vs-coffee-waikiki.jpeg"
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

        {/* Caffeine, Explained */}
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

        {/* Types — Which Should You Choose */}
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

        {/* What They Share */}
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

        {/* Where to Try Both */}
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
              → Matcha in Waikiki
            </Link>
            <Link
              href={`/${locale}/blog/what-is-kona-coffee`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              What Is Kona Coffee?
            </Link>
            <Link
              href={`/${locale}/menu/kona-coffee`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Kona Coffee Menu
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
