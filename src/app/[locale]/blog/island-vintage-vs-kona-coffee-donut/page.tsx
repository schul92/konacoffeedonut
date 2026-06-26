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
      title: 'Island Vintage Coffee vs Kona Coffee Donut?',
      subtitle: 'Açaí Bowls & Kona Coffee in Waikiki, Compared (2026)',
      updated: 'Updated June 2026',
      readTime: '8 min read',
    },
    definition: {
      title: 'Island Vintage vs Kona Coffee Donut? — Quick Answer',
      text: 'Both are genuinely great Waikiki spots for <strong>açaí bowls and Kona coffee</strong>, and you can\'t really go wrong with either. <strong>Island Vintage Coffee</strong> is a beloved Waikiki institution famous for its açaí bowls and Kona coffee blends, with multiple locations around Waikiki and Ala Moana — lively, popular, and often with a wait. <strong>Kona Coffee Donut?</strong> at 2142 Kalākaua Ave pours <strong>100% Kona</strong> (not a blend) and serves açaí bowls <em>plus</em> mochi donuts, malasadas, Korean bingsu, and Korean corn dogs — usually with a shorter wait, great value, and about a 5-minute walk from Waikiki Beach. Choose <strong>Island Vintage</strong> for the classic açaí-institution experience; choose <strong>Kona Coffee Donut?</strong> if you want 100% Kona, more variety, and a quicker, walkable stop.',
    },
    history: {
      title: 'Açaí Bowls in Waikiki',
      subtitle: 'Two Great Ways to Enjoy a Bowl Near the Beach',
      p1: 'Açaí bowls have become one of Waikiki\'s signature treats — a cool, fruit-topped blend of açaí, banana, and granola that\'s perfect after a morning at the beach. <strong>Island Vintage Coffee</strong> helped make the açaí bowl a Waikiki icon, and it\'s well earned: their bowls are generous, photogenic, and a genuine local favorite. If you want the classic, much-loved açaí experience, Island Vintage is a safe and satisfying choice.',
      p2: 'At <strong>Kona Coffee Donut?</strong>, açaí bowls are made fresh too — <strong>$13.95 for a small and $15.95 for a large</strong> — topped with fruit and granola for the same refreshing, beach-day feel. The difference isn\'t better or worse so much as <strong>what else is on the menu</strong>: alongside your bowl you can grab a warm mochi donut, a malasada, Korean bingsu, or a Korean corn dog, so a group with different cravings can all order in one place.',
      p3: 'Both spots sit right in the heart of Waikiki, so neither requires a long trek. <strong>Island Vintage</strong> has several locations and tends to draw a crowd, which is part of its lively charm — though it can mean a wait at peak times. <strong>Kona Coffee Donut?</strong> is a single shop on Kalākaua Avenue, about <strong>5 minutes from the sand</strong>, and usually moves a little faster, which is handy when you just want to grab a bowl and go.',
      p4: 'The honest takeaway: <strong>you really can\'t lose</strong>. If you\'re already an Island Vintage fan, keep enjoying it — it\'s popular for good reason. But if you want to pair your açaí with <strong>real 100% Kona coffee</strong> and a wider mix of donuts and Korean treats, or you\'d simply rather skip a long line, Kona Coffee Donut? is an easy, walkable alternative worth trying on the same trip.',
    },
    comparison: {
      title: 'Island Vintage vs Kona Coffee Donut?',
      subtitle: 'A Fair, Side-by-Side Comparison',
      intro: 'Here\'s an honest, factual comparison to help you choose based on what you\'re after. Where a competitor detail varies by location or item, we\'ve kept it general:',
      headers: {
        feature: 'What you\'re comparing',
        bingsu: 'Kona Coffee Donut?',
        shavedIce: 'Island Vintage Coffee',
        kakigori: 'Notes',
      },
      rows: [
        {
          feature: 'Açaí bowls',
          bingsu: 'Yes — $13.95 small / $15.95 large',
          shavedIce: 'Yes — a famous signature item',
          kakigori: 'Both serve great açaí bowls',
        },
        {
          feature: 'Coffee',
          bingsu: '100% Kona (Honolulu Coffee Big Island beans)',
          shavedIce: 'Kona coffee & Kona blends',
          kakigori: '100% Kona vs a blend is a real distinction',
        },
        {
          feature: 'Other food',
          bingsu: 'Mochi donuts, malasadas, bingsu, corn dogs',
          shavedIce: 'Açaí, breakfast & lunch menu',
          kakigori: 'Different menus — pick by craving',
        },
        {
          feature: 'Price (açaí)',
          bingsu: '$13.95–$15.95',
          shavedIce: 'Varies by bowl & size',
          kakigori: 'Both are mid-range Waikiki prices',
        },
        {
          feature: 'Wait / lines',
          bingsu: 'Usually a shorter wait',
          shavedIce: 'Popular — often a wait at peak times',
          kakigori: 'Lines depend on time of day',
        },
        {
          feature: 'Locations',
          bingsu: '2142 Kalākaua Ave, Waikiki',
          shavedIce: 'Multiple Waikiki / Ala Moana spots',
          kakigori: 'Both central and walkable',
        },
        {
          feature: 'Hours',
          bingsu: '7AM–9PM daily',
          shavedIce: 'Varies by location',
          kakigori: 'Check ahead for exact hours',
        },
      ],
      note: 'Bottom line: Island Vintage is a fantastic, well-loved açaí institution, and Kona Coffee Donut? is a great pick if you also want 100% Kona, more variety, and usually a shorter wait. Both are worth a stop on the same Waikiki trip.',
    },
    types: {
      title: 'Which Should You Choose?',
      subtitle: 'What Each Place Is Best For',
      items: [
        {
          name: 'You want the classic açaí institution',
          korean: 'Choose Island Vintage',
          description: 'If you\'re after the famous, much-loved Waikiki açaí experience and don\'t mind a livelier, busier vibe, Island Vintage Coffee is a great call. It\'s popular for a reason and a genuine local favorite.',
          icon: '🍇',
        },
        {
          name: 'You want 100% Kona, not a blend',
          korean: 'Choose Kona Coffee Donut?',
          description: 'If real 100% Kona matters to you, Kona Coffee Donut? pours 100% Kona using Honolulu Coffee\'s Big Island beans — not a "Kona blend," which can legally be as little as 10% Kona. It pairs perfectly with your açaí bowl.',
          icon: '☕',
        },
        {
          name: 'You want more than just açaí',
          korean: 'Choose Kona Coffee Donut?',
          description: 'Traveling with a group that wants different things? Kona Coffee Donut? has açaí bowls plus mochi donuts, malasadas, Korean bingsu, Korean corn dogs, and matcha or hojicha lattes — so everyone orders in one stop.',
          icon: '🍩',
        },
        {
          name: 'You\'d rather skip a long line',
          korean: 'Choose Kona Coffee Donut?',
          description: 'Island Vintage is popular enough that peak hours can mean a wait. If you\'d prefer to grab your bowl and go, Kona Coffee Donut? usually moves a little faster — handy on a packed Waikiki day.',
          icon: '⏱️',
        },
        {
          name: 'You want value, walkable from the beach',
          korean: 'Choose Kona Coffee Donut?',
          description: 'With açaí bowls at $13.95–$15.95, multilingual service, and a spot about 5 minutes from Waikiki Beach, Kona Coffee Donut? is an easy, good-value stop before or after the sand.',
          icon: '🌴',
        },
      ],
    },
    whyHawaii: {
      title: '100% Kona vs Kona Blend: What\'s the Difference?',
      points: [
        {
          title: 'What "100% Kona" Means',
          description: 'Real 100% Kona is grown only on the volcanic slopes of the Big Island\'s Kona district and contains nothing but Kona beans. It\'s rare — less than 1% of the world\'s coffee — and prized for a smooth, naturally low-acid cup. When a menu clearly says "100% Kona," that\'s the genuine article.',
        },
        {
          title: 'What a "Kona Blend" Is',
          description: 'Under Hawaii labeling law, a coffee sold as a "Kona blend" only needs to contain about 10% real Kona beans — the rest can be coffee from anywhere. A blend can still taste good, but it\'s mostly other beans, which is why the exact wording on the label or menu matters more than the price.',
        },
        {
          title: 'Why It Matters for Taste',
          description: 'The reason people seek out 100% Kona is the cup itself: smooth, mellow, and naturally low in acidity, with brown-sugar and nutty notes. A blend dilutes that signature character. If you specifically want to taste real Kona, look for the "100%" — not just the word "Kona."',
        },
        {
          title: 'What Each Place Pours',
          description: 'Many well-loved Hawaii cafes — Island Vintage included — carry both Kona blends and 100% Kona lines, so it\'s worth checking the specific item you order. At Kona Coffee Donut?, the house pour is 100% Kona (Honolulu Coffee Big Island beans), brewed fresh, hot or iced.',
        },
      ],
    },
    whereToGet: {
      title: 'Try Açaí & 100% Kona at Kona Coffee Donut?',
      intro: 'If you want açaí bowls and real 100% Kona in one walkable Waikiki stop, here\'s where to find us.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'Right on Kalākaua Avenue in the heart of Waikiki, Kona Coffee Donut? serves fresh açaí bowls ($13.95 small / $15.95 large) alongside real 100% Kona coffee — we pour Honolulu Coffee\'s Big Island beans, hot or iced. Add a mochi donut, malasada, Korean bingsu, or a Korean corn dog to make it a full treat. We\'re about a 5-minute walk from Waikiki Beach, open daily, and happy to help in multiple languages.',
        highlights: [
          'Açaí bowls $13.95 small / $15.95 large',
          'Real 100% Kona coffee (Honolulu Coffee beans), hot or iced',
          'Mochi donuts, malasadas, bingsu & Korean corn dogs',
          'About 5 minutes from Waikiki Beach',
          'Open daily, 7AM–9PM · (808) 260-1835',
        ],
      },
      cta: 'View Our Kona Coffee Menu',
    },
    howToEat: {
      title: 'Tips for Your Waikiki Açaí & Coffee Run',
      subtitle: 'Get the Most Out of Either Stop',
      tips: [
        {
          title: 'Go Off-Peak to Skip the Lines',
          description: 'Açaí spots get busiest mid-morning. Whether you choose Island Vintage or Kona Coffee Donut?, going a little earlier or later usually means a shorter wait — and a more relaxed bowl by the beach.',
        },
        {
          title: 'Try the 100% Kona Black First',
          description: 'If you order coffee at Kona Coffee Donut?, sip the 100% Kona black before adding milk. That\'s where you notice its naturally low acidity and smooth, nutty-sweet finish — the difference a blend can\'t quite match.',
        },
        {
          title: 'Pair Açaí With a Mochi Donut',
          description: 'A cool açaí bowl and a warm mochi donut is a combo you can only get in one stop at Kona Coffee Donut?. It\'s a fun, crowd-pleasing way to mix something fresh with something sweet.',
        },
        {
          title: 'Both Are Walkable — Do a Taste Test',
          description: 'Since both are right in Waikiki, you don\'t have to pick just one for your whole trip. Try Island Vintage one day and Kona Coffee Donut? the next, and decide your own favorite açaí bowl.',
        },
      ],
    },
    faq: {
      title: 'Island Vintage vs Kona Coffee Donut? — FAQ',
      items: [
        {
          question: 'Is Island Vintage Coffee 100% Kona?',
          answer: 'Island Vintage Coffee is well known for both Kona coffee blends and 100% Kona offerings. Like many Hawaii cafes, they carry blends as well as 100% Kona lines, so it\'s best to check the specific drink you order. If you specifically want 100% Kona poured as the house coffee, Kona Coffee Donut? serves 100% Kona using Honolulu Coffee\'s Big Island beans, hot or iced.',
        },
        {
          question: 'Where else can I get açaí in Waikiki?',
          answer: 'Both Island Vintage Coffee and Kona Coffee Donut? serve açaí bowls in Waikiki, along with several cafes up and down Kalākaua Avenue. Kona Coffee Donut? at 2142 Kalakaua Ave makes fresh açaí bowls ($13.95 small / $15.95 large) and pairs them with mochi donuts, malasadas, bingsu, and 100% Kona coffee — all about 5 minutes from the beach.',
        },
        {
          question: 'What\'s the best açaí bowl in Waikiki?',
          answer: 'The "best" açaí bowl in Waikiki really comes down to taste. Island Vintage Coffee is a famous, much-loved institution and a fantastic choice. Kona Coffee Donut? offers fresh bowls plus more variety (donuts, bingsu, corn dogs) and 100% Kona coffee, usually with a shorter wait. The fun answer: try both and pick your own favorite.',
        },
        {
          question: 'Which has a shorter wait, Island Vintage or Kona Coffee Donut?',
          answer: 'Island Vintage Coffee is very popular and often has a wait during peak hours — part of its lively appeal. Kona Coffee Donut? on Kalākaua Avenue usually moves a little faster, so if you\'d rather grab your açaí bowl and go, it\'s a convenient option. Either way, going off-peak helps.',
        },
        {
          question: 'How far is Kona Coffee Donut? from Waikiki Beach?',
          answer: 'Kona Coffee Donut? is at 2142 Kalakaua Ave, about a 5-minute walk from Waikiki Beach. It\'s open daily from 7AM to 9PM, you can reach it at (808) 260-1835, and it serves açaí bowls, 100% Kona coffee, mochi donuts, malasadas, and Korean treats all in one stop.',
        },
      ],
    },
    cta: {
      title: 'Try Açaí & Real 100% Kona in Waikiki',
      text: 'Visit Kona Coffee Donut? at 2142 Kalakaua Ave for fresh açaí bowls and real 100% Kona coffee — plus mochi donuts and malasadas, about 5 minutes from Waikiki Beach. Open 7AM–9PM daily, (808) 260-1835.',
      menuButton: 'View Our Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: {
      home: 'Home',
      blog: 'Blog',
      current: 'Island Vintage vs Kona Coffee Donut?',
    },
  },
  ja: {
    hero: {
      title: 'アイランドヴィンテージ vs Kona Coffee Donut?',
      subtitle: 'ワイキキのアサイーボウルとコナコーヒーを徹底比較（2026年版）',
      updated: '2026年6月更新',
      readTime: '8分で読める',
    },
    definition: {
      title: 'アイランドヴィンテージ vs Kona Coffee Donut? — 結論から',
      text: 'どちらもワイキキで<strong>アサイーボウルとコナコーヒー</strong>を楽しめる本当に良いお店で、どちらを選んでも外れはありません。<strong>アイランドヴィンテージコーヒー</strong>はアサイーボウルとコナコーヒーブレンドで有名な、ワイキキで愛される名店。ワイキキやアラモアナに複数の店舗があり、活気があって人気で、行列ができることも。<strong>Kona Coffee Donut?</strong>（2142 Kalākaua Ave）は<strong>100%コナ</strong>（ブレンドではありません）を提供し、アサイーボウルに<em>加えて</em>モチドーナツ、マラサダ、韓国かき氷（ピンス）、韓国式コーンドッグも。待ち時間は短めで、コスパが良く、ワイキキビーチから徒歩約5分です。定番の名店アサイー体験なら<strong>アイランドヴィンテージ</strong>、100%コナと豊富なメニュー、そしてサッと立ち寄れる手軽さなら<strong>Kona Coffee Donut?</strong> がおすすめです。',
    },
    history: {
      title: 'ワイキキのアサイーボウル',
      subtitle: 'ビーチ近くでボウルを楽しむ、2つの良い選択肢',
      p1: 'アサイーボウルは今やワイキキの名物のひとつ。アサイー、バナナ、グラノーラを合わせ、フルーツをトッピングした冷たい一杯は、ビーチで過ごした朝の後に最高です。<strong>アイランドヴィンテージコーヒー</strong>はアサイーボウルをワイキキのアイコンにした立役者で、それも納得——ボリュームたっぷりで写真映えし、地元でも本当に人気です。定番で愛されるアサイー体験を求めるなら、アイランドヴィンテージは安心で満足のいく選択です。',
      p2: '<strong>Kona Coffee Donut?</strong> でもアサイーボウルは作りたて——<strong>スモール$13.95、ラージ$15.95</strong>——フルーツとグラノーラをのせ、同じく爽やかなビーチデイ気分が味わえます。違いは良し悪しというより<strong>他にあるメニュー</strong>。ボウルと一緒に温かいモチドーナツ、マラサダ、韓国かき氷（ピンス）、韓国式コーンドッグも頼めるので、食べたいものが違うグループでも一か所で注文できます。',
      p3: 'どちらもワイキキの中心にあるので、長い移動は不要です。<strong>アイランドヴィンテージ</strong>は複数店舗があり人が集まりがちで、それが活気ある魅力の一部——ただしピーク時には待つこともあります。<strong>Kona Coffee Donut?</strong> はカラカウア通りの1店舗で、<strong>砂浜から約5分</strong>。たいてい少し回転が速いので、サッとボウルを買って行きたいときに便利です。',
      p4: '正直なところ、<strong>どちらを選んでも失敗はありません</strong>。すでにアイランドヴィンテージのファンなら、ぜひそのまま楽しんでください——人気には理由があります。でも、アサイーを<strong>本物の100%コナコーヒー</strong>や、より幅広いドーナツや韓国系スイーツと合わせたいなら、あるいは単に長い行列を避けたいなら、Kona Coffee Donut? は同じ旅程で試す価値のある、徒歩で行ける手軽な選択肢です。',
    },
    comparison: {
      title: 'アイランドヴィンテージ vs Kona Coffee Donut?',
      subtitle: '公平な、横並び比較',
      intro: 'あなたの目的に合わせて選べるよう、正直で事実に基づいた比較をまとめました。競合店の詳細が店舗や商品で異なる場合は、一般的な表現にとどめています：',
      headers: {
        feature: '比較項目',
        bingsu: 'Kona Coffee Donut?',
        shavedIce: 'アイランドヴィンテージ',
        kakigori: '備考',
      },
      rows: [
        {
          feature: 'アサイーボウル',
          bingsu: 'あり — スモール$13.95／ラージ$15.95',
          shavedIce: 'あり — 有名な看板メニュー',
          kakigori: 'どちらも美味しいアサイーボウル',
        },
        {
          feature: 'コーヒー',
          bingsu: '100%コナ（ホノルルコーヒーのハワイ島豆）',
          shavedIce: 'コナコーヒー＆コナブレンド',
          kakigori: '100%コナとブレンドは別物',
        },
        {
          feature: 'その他の食べ物',
          bingsu: 'モチドーナツ、マラサダ、ピンス、コーンドッグ',
          shavedIce: 'アサイー、朝食＆ランチメニュー',
          kakigori: 'メニューが違う — 気分で選んで',
        },
        {
          feature: '価格（アサイー）',
          bingsu: '$13.95〜$15.95',
          shavedIce: 'ボウルとサイズによる',
          kakigori: 'どちらもワイキキの中価格帯',
        },
        {
          feature: '待ち時間／行列',
          bingsu: 'たいてい待ち時間は短め',
          shavedIce: '人気 — ピーク時は待つことも',
          kakigori: '行列は時間帯次第',
        },
        {
          feature: '店舗',
          bingsu: '2142 Kalākaua Ave, ワイキキ',
          shavedIce: 'ワイキキ／アラモアナに複数',
          kakigori: 'どちらも中心地で徒歩圏内',
        },
        {
          feature: '営業時間',
          bingsu: '毎日 午前7時〜午後9時',
          shavedIce: '店舗による',
          kakigori: '正確な時間は事前確認を',
        },
      ],
      note: '結論：アイランドヴィンテージは素晴らしく愛されるアサイーの名店、Kona Coffee Donut? は100%コナや豊富なメニュー、そしてたいてい短い待ち時間も欲しい人に最適です。どちらも同じワイキキ旅行で立ち寄る価値があります。',
    },
    types: {
      title: 'あなたはどちらを選ぶ？',
      subtitle: 'それぞれのお店が向いている人',
      items: [
        {
          name: '定番の名店アサイーを楽しみたい',
          korean: 'アイランドヴィンテージ',
          description: '有名で愛されるワイキキのアサイー体験を求め、賑やかで活気ある雰囲気も気にならないなら、アイランドヴィンテージコーヒーは良い選択。人気には理由があり、地元でも本当に愛されています。',
          icon: '🍇',
        },
        {
          name: 'ブレンドではなく100%コナがいい',
          korean: 'Kona Coffee Donut?',
          description: '本物の100%コナを大切にするなら、Kona Coffee Donut? はホノルルコーヒーのハワイ島豆を使った100%コナを提供——わずか10%でも名乗れる「コナブレンド」ではありません。アサイーボウルとの相性も抜群です。',
          icon: '☕',
        },
        {
          name: 'アサイー以外も食べたい',
          korean: 'Kona Coffee Donut?',
          description: '食べたいものがバラバラなグループ旅行なら、Kona Coffee Donut? はアサイーボウルに加えてモチドーナツ、マラサダ、韓国かき氷、韓国式コーンドッグ、抹茶やほうじ茶ラテも。みんな一か所で注文できます。',
          icon: '🍩',
        },
        {
          name: '長い行列は避けたい',
          korean: 'Kona Coffee Donut?',
          description: 'アイランドヴィンテージは人気ゆえ、ピーク時は待つことも。サッとボウルを買って行きたいなら、Kona Coffee Donut? はたいてい少し回転が速く、混雑するワイキキの日に便利です。',
          icon: '⏱️',
        },
        {
          name: 'コスパ良く、ビーチから歩いて行きたい',
          korean: 'Kona Coffee Donut?',
          description: 'アサイーボウルは$13.95〜$15.95、多言語対応、ワイキキビーチから徒歩約5分。Kona Coffee Donut? は砂浜の前後に立ち寄りやすい、お得で手軽なお店です。',
          icon: '🌴',
        },
      ],
    },
    whyHawaii: {
      title: '100%コナ vs コナブレンド：何が違う？',
      points: [
        {
          title: '「100%コナ」の意味',
          description: '本物の100%コナはハワイ島コナ地区の火山斜面だけで栽培され、コナ豆以外は一切含みません。世界のコーヒーの1%未満という希少さで、まろやかで自然に酸味の低い一杯が珍重されます。メニューに明確に「100%コナ」とあれば、それが本物です。',
        },
        {
          title: '「コナブレンド」とは',
          description: 'ハワイの表示法では、「コナブレンド」として売られるコーヒーは本物のコナ豆を約10%含んでいればよく、残りはどこの豆でも構いません。ブレンドも美味しいことはありますが、ほとんどは他の豆。だから価格より、ラベルやメニューの正確な表記が大切です。',
        },
        {
          title: '味にどう関わるか',
          description: '人々が100%コナを求める理由は、その一杯そのもの——まろやかで穏やか、自然に酸味が低く、黒糖やナッツのような風味。ブレンドはその個性を薄めます。本物のコナの味を確かめたいなら、「コナ」という言葉だけでなく「100%」を探しましょう。',
        },
        {
          title: 'それぞれが提供するもの',
          description: 'アイランドヴィンテージを含め、愛されるハワイのカフェの多くはコナブレンドと100%コナの両方を扱っているので、注文する商品を確認する価値があります。Kona Coffee Donut? の店内コーヒーは100%コナ（ホノルルコーヒーのハワイ島豆）、ホットでもアイスでも淹れたてです。',
        },
      ],
    },
    whereToGet: {
      title: 'Kona Coffee Donut? でアサイー＆100%コナを',
      intro: 'アサイーボウルと本物の100%コナを、徒歩で行けるワイキキの一か所で楽しみたいなら、ここがその場所です。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: 'ワイキキの中心、カラカウア通り沿いのKona Coffee Donut? は、作りたてのアサイーボウル（スモール$13.95／ラージ$15.95）と本物の100%コナコーヒーを提供——ホノルルコーヒーのハワイ島豆を使い、ホットでもアイスでも。モチドーナツ、マラサダ、韓国かき氷、韓国式コーンドッグを加えれば、満足の一品に。ワイキキビーチから徒歩約5分、毎日営業、多言語対応で喜んでお手伝いします。',
        highlights: [
          'アサイーボウル スモール$13.95／ラージ$15.95',
          '本物の100%コナコーヒー（ホノルルコーヒーの豆）、ホット＆アイス',
          'モチドーナツ、マラサダ、ピンス＆韓国式コーンドッグ',
          'ワイキキビーチから約5分',
          '毎日営業、午前7時〜午後9時・(808) 260-1835',
        ],
      },
      cta: 'コナコーヒーメニューを見る',
    },
    howToEat: {
      title: 'ワイキキのアサイー＆コーヒー巡りのコツ',
      subtitle: 'どちらのお店も最大限に楽しむために',
      tips: [
        {
          title: 'ピークを外して行列を回避',
          description: 'アサイー店が一番混むのは午前中。アイランドヴィンテージでもKona Coffee Donut? でも、少し早めか遅めに行けばたいてい待ち時間が短く、ビーチでゆったりボウルを楽しめます。',
        },
        {
          title: 'まず100%コナをブラックで',
          description: 'Kona Coffee Donut? でコーヒーを頼むなら、ミルクを入れる前に100%コナをブラックでひと口。そこで自然な酸味の低さと、まろやかでナッツのような後味——ブレンドでは出せない違い——に気づきます。',
        },
        {
          title: 'アサイーにモチドーナツを合わせて',
          description: '冷たいアサイーボウルと温かいモチドーナツの組み合わせは、Kona Coffee Donut? なら一か所で叶います。爽やかなものと甘いものを合わせる、楽しくて誰もが喜ぶ食べ方です。',
        },
        {
          title: 'どちらも徒歩圏内 — 食べ比べを',
          description: 'どちらもワイキキの中にあるので、旅行中ひとつに絞る必要はありません。ある日はアイランドヴィンテージ、翌日はKona Coffee Donut?——自分のお気に入りのアサイーボウルを決めましょう。',
        },
      ],
    },
    faq: {
      title: 'アイランドヴィンテージ vs Kona Coffee Donut? — よくある質問',
      items: [
        {
          question: 'アイランドヴィンテージコーヒーは100%コナ？',
          answer: 'アイランドヴィンテージコーヒーはコナコーヒーブレンドと100%コナの両方で知られています。多くのハワイのカフェ同様、ブレンドも100%コナのラインも扱っているので、注文する商品を確認するのが確実です。店内コーヒーとして100%コナをお求めなら、Kona Coffee Donut? がホノルルコーヒーのハワイ島豆を使った100%コナを、ホットでもアイスでも提供しています。',
        },
        {
          question: 'ワイキキで他にアサイーが食べられる場所は？',
          answer: 'アイランドヴィンテージコーヒーもKona Coffee Donut? もワイキキでアサイーボウルを提供しており、カラカウア通り沿いにもいくつかのカフェがあります。2142 Kalakaua AveのKona Coffee Donut? は作りたてのアサイーボウル（スモール$13.95／ラージ$15.95）を作り、モチドーナツ、マラサダ、ピンス、100%コナコーヒーと合わせられます——どれもビーチから約5分です。',
        },
        {
          question: 'ワイキキで一番美味しいアサイーボウルは？',
          answer: 'ワイキキで「一番」のアサイーボウルは、結局のところ好み次第です。アイランドヴィンテージコーヒーは有名で愛される名店で、素晴らしい選択。Kona Coffee Donut? は作りたてのボウルに加え、より豊富なメニュー（ドーナツ、ピンス、コーンドッグ）と100%コナコーヒーを、たいてい短い待ち時間で提供します。楽しい答え：両方試して、自分のお気に入りを決めましょう。',
        },
        {
          question: '待ち時間が短いのはどっち？アイランドヴィンテージかKona Coffee Donut?',
          answer: 'アイランドヴィンテージコーヒーはとても人気で、ピーク時は待つことも多く、それも活気ある魅力の一部です。カラカウア通りのKona Coffee Donut? はたいてい少し回転が速いので、サッとアサイーボウルを買って行きたいなら便利な選択肢。いずれにせよ、ピークを外すと良いでしょう。',
        },
        {
          question: 'Kona Coffee Donut? はワイキキビーチからどのくらい？',
          answer: 'Kona Coffee Donut? は2142 Kalakaua Aveにあり、ワイキキビーチから徒歩約5分です。毎日午前7時〜午後9時営業、(808) 260-1835でご連絡いただけます。アサイーボウル、100%コナコーヒー、モチドーナツ、マラサダ、韓国系スイーツを一か所で提供しています。',
        },
      ],
    },
    cta: {
      title: 'ワイキキでアサイー＆本物の100%コナを',
      text: '2142 Kalakaua AveのKona Coffee Donut? で、作りたてのアサイーボウルと本物の100%コナコーヒーを——モチドーナツやマラサダも、ワイキキビーチから約5分。毎日午前7時〜午後9時営業、(808) 260-1835。',
      menuButton: 'メニューを見る',
      directionsButton: '道順を見る',
    },
    breadcrumbs: {
      home: 'ホーム',
      blog: 'ブログ',
      current: 'アイランドヴィンテージ vs Kona Coffee Donut?',
    },
  },
  ko: {
    hero: {
      title: '아일랜드 빈티지 vs Kona Coffee Donut?',
      subtitle: '와이키키의 아사이 볼과 코나 커피 비교 (2026)',
      updated: '2026년 6월 업데이트',
      readTime: '8분 소요',
    },
    definition: {
      title: '아일랜드 빈티지 vs Kona Coffee Donut? — 결론부터',
      text: '둘 다 와이키키에서 <strong>아사이 볼과 코나 커피</strong>를 즐기기에 정말 좋은 곳이라, 어느 쪽을 골라도 후회는 없습니다. <strong>아일랜드 빈티지 커피(Island Vintage Coffee)</strong>는 아사이 볼과 코나 커피 블렌드로 유명한, 와이키키에서 사랑받는 명소입니다. 와이키키와 알라모아나에 여러 매장이 있고, 활기차고 인기가 많아 줄을 서야 할 때도 있죠. <strong>Kona Coffee Donut?</strong>(2142 Kalākaua Ave)는 <strong>100% 코나</strong>(블렌드 아님)를 내리고, 아사이 볼은 물론 <em>모찌 도넛, 말라사다, 한국식 빙수, 한국식 핫도그</em>까지 제공합니다. 대기는 보통 더 짧고, 가성비가 좋으며, 와이키키 해변에서 도보 약 5분 거리입니다. 정통 아사이 명소 경험을 원하면 <strong>아일랜드 빈티지</strong>를, 100% 코나와 다양한 메뉴, 그리고 빠르고 걸어서 들르기 좋은 곳을 원하면 <strong>Kona Coffee Donut?</strong> 를 추천합니다.',
    },
    history: {
      title: '와이키키의 아사이 볼',
      subtitle: '해변 근처에서 볼을 즐기는 두 가지 좋은 방법',
      p1: '아사이 볼은 이제 와이키키의 대표 간식 중 하나입니다. 아사이, 바나나, 그래놀라를 섞고 과일을 올린 시원한 한 그릇은 해변에서 보낸 아침 뒤에 딱이죠. <strong>아일랜드 빈티지 커피</strong>는 아사이 볼을 와이키키의 아이콘으로 만든 주역이고, 그럴 만합니다 — 푸짐하고, 사진도 잘 나오고, 현지에서도 진짜 인기예요. 정통의, 많은 사랑을 받는 아사이 경험을 원한다면 아일랜드 빈티지는 안전하고 만족스러운 선택입니다.',
      p2: '<strong>Kona Coffee Donut?</strong> 에서도 아사이 볼은 갓 만듭니다 — <strong>스몰 $13.95, 라지 $15.95</strong> — 과일과 그래놀라를 올려 똑같이 상쾌한 비치데이 기분을 줍니다. 차이는 더 낫고 못하고가 아니라 <strong>그 외에 무엇이 있느냐</strong>예요. 볼과 함께 따뜻한 모찌 도넛, 말라사다, 한국식 빙수, 한국식 핫도그도 주문할 수 있어, 먹고 싶은 게 다른 일행도 한곳에서 해결됩니다.',
      p3: '두 곳 모두 와이키키 중심에 있어 멀리 갈 필요가 없습니다. <strong>아일랜드 빈티지</strong>는 매장이 여럿이고 사람이 몰리는 편인데, 그게 활기찬 매력의 일부이기도 합니다 — 다만 피크 시간엔 대기가 생길 수 있죠. <strong>Kona Coffee Donut?</strong> 는 칼라카우아 애비뉴의 단일 매장으로, <strong>모래사장에서 약 5분</strong>, 보통 회전이 조금 더 빨라서 그냥 볼만 사서 나가고 싶을 때 편합니다.',
      p4: '솔직한 결론: <strong>어느 쪽도 실패가 아닙니다</strong>. 이미 아일랜드 빈티지 팬이라면 계속 즐기세요 — 인기에는 이유가 있으니까요. 하지만 아사이를 <strong>진짜 100% 코나 커피</strong>와, 더 다양한 도넛·한국식 간식과 곁들이고 싶거나, 그저 긴 줄을 피하고 싶다면, Kona Coffee Donut? 는 같은 여행에서 걸어서 들러볼 만한 손쉬운 대안입니다.',
    },
    comparison: {
      title: '아일랜드 빈티지 vs Kona Coffee Donut?',
      subtitle: '공정한, 나란히 비교',
      intro: '무엇을 원하느냐에 따라 고를 수 있도록 솔직하고 사실에 근거한 비교를 정리했습니다. 경쟁사 세부 내용이 매장이나 메뉴에 따라 다를 경우엔 일반적으로 표기했습니다:',
      headers: {
        feature: '비교 항목',
        bingsu: 'Kona Coffee Donut?',
        shavedIce: '아일랜드 빈티지',
        kakigori: '참고',
      },
      rows: [
        {
          feature: '아사이 볼',
          bingsu: '있음 — 스몰 $13.95 / 라지 $15.95',
          shavedIce: '있음 — 유명한 대표 메뉴',
          kakigori: '둘 다 훌륭한 아사이 볼',
        },
        {
          feature: '커피',
          bingsu: '100% 코나 (호놀룰루 커피 빅아일랜드 원두)',
          shavedIce: '코나 커피 & 코나 블렌드',
          kakigori: '100% 코나와 블렌드는 다름',
        },
        {
          feature: '그 외 음식',
          bingsu: '모찌 도넛, 말라사다, 빙수, 핫도그',
          shavedIce: '아사이, 조식 & 점심 메뉴',
          kakigori: '메뉴가 다름 — 취향대로',
        },
        {
          feature: '가격 (아사이)',
          bingsu: '$13.95–$15.95',
          shavedIce: '볼과 사이즈에 따라',
          kakigori: '둘 다 와이키키 중간 가격대',
        },
        {
          feature: '대기 / 줄',
          bingsu: '보통 더 짧은 대기',
          shavedIce: '인기 — 피크 시간엔 대기',
          kakigori: '줄은 시간대에 따라',
        },
        {
          feature: '매장',
          bingsu: '2142 Kalākaua Ave, 와이키키',
          shavedIce: '와이키키 / 알라모아나 여러 곳',
          kakigori: '둘 다 중심부, 도보 가능',
        },
        {
          feature: '영업시간',
          bingsu: '매일 오전 7시–오후 9시',
          shavedIce: '매장에 따라',
          kakigori: '정확한 시간은 사전 확인',
        },
      ],
      note: '핵심: 아일랜드 빈티지는 멋지고 사랑받는 아사이 명소이고, Kona Coffee Donut? 는 100% 코나와 다양한 메뉴, 그리고 보통 더 짧은 대기까지 원하는 분께 좋은 선택입니다. 둘 다 같은 와이키키 여행에서 들를 만합니다.',
    },
    types: {
      title: '당신은 어디를 고를까?',
      subtitle: '각 매장이 어울리는 사람',
      items: [
        {
          name: '정통 아사이 명소를 원한다',
          korean: '아일랜드 빈티지',
          description: '유명하고 사랑받는 와이키키 아사이 경험을 원하고, 더 활기차고 북적이는 분위기도 괜찮다면 아일랜드 빈티지 커피가 좋은 선택입니다. 인기에는 이유가 있고, 현지에서도 진짜 사랑받는 곳이에요.',
          icon: '🍇',
        },
        {
          name: '블렌드 말고 100% 코나가 좋다',
          korean: 'Kona Coffee Donut?',
          description: '진짜 100% 코나가 중요하다면, Kona Coffee Donut? 는 호놀룰루 커피의 빅아일랜드 원두로 100% 코나를 내립니다 — 법적으로 10%만 들어가도 되는 "코나 블렌드"가 아니에요. 아사이 볼과도 완벽하게 어울립니다.',
          icon: '☕',
        },
        {
          name: '아사이 말고도 먹고 싶다',
          korean: 'Kona Coffee Donut?',
          description: '먹고 싶은 게 제각각인 일행과 여행 중이라면, Kona Coffee Donut? 는 아사이 볼에 더해 모찌 도넛, 말라사다, 한국식 빙수, 한국식 핫도그, 말차·호지차 라테까지 — 모두 한 번에 주문할 수 있습니다.',
          icon: '🍩',
        },
        {
          name: '긴 줄은 피하고 싶다',
          korean: 'Kona Coffee Donut?',
          description: '아일랜드 빈티지는 인기가 많아 피크 시간엔 대기가 생길 수 있습니다. 볼만 사서 바로 나가고 싶다면 Kona Coffee Donut? 가 보통 회전이 조금 더 빨라, 붐비는 와이키키 날에 편리합니다.',
          icon: '⏱️',
        },
        {
          name: '가성비 좋고, 해변에서 걸어가고 싶다',
          korean: 'Kona Coffee Donut?',
          description: '아사이 볼 $13.95–$15.95, 다국어 응대, 와이키키 해변에서 도보 약 5분. Kona Coffee Donut? 는 해변 가기 전후로 들르기 좋은, 가성비 있고 손쉬운 곳입니다.',
          icon: '🌴',
        },
      ],
    },
    whyHawaii: {
      title: '100% 코나 vs 코나 블렌드: 무엇이 다를까?',
      points: [
        {
          title: '"100% 코나"의 의미',
          description: '진짜 100% 코나는 빅아일랜드 코나 지역의 화산 경사면에서만 재배되며, 코나 원두 외에는 아무것도 들어가지 않습니다. 전 세계 커피의 1% 미만일 만큼 희귀하고, 부드럽고 자연스럽게 산미가 낮은 한 잔으로 귀하게 여겨집니다. 메뉴에 분명히 "100% 코나"라고 적혀 있으면 그게 진품입니다.',
        },
        {
          title: '"코나 블렌드"란',
          description: '하와이 표시법상, "코나 블렌드"로 파는 커피는 진짜 코나 원두를 약 10%만 담으면 되고, 나머지는 어디 원두든 상관없습니다. 블렌드도 맛있을 수 있지만 대부분은 다른 원두라서, 가격보다 라벨이나 메뉴의 정확한 표기가 더 중요합니다.',
        },
        {
          title: '맛에 왜 중요한가',
          description: '사람들이 100% 코나를 찾는 이유는 그 한 잔 자체입니다 — 부드럽고 은은하며 자연스럽게 산미가 낮고, 흑설탕과 견과류 같은 풍미가 있죠. 블렌드는 그 특유의 개성을 묽게 만듭니다. 진짜 코나 맛을 보고 싶다면 "코나"라는 단어만이 아니라 "100%"를 찾으세요.',
        },
        {
          title: '각 매장이 내리는 것',
          description: '아일랜드 빈티지를 포함해 사랑받는 하와이 카페 다수는 코나 블렌드와 100% 코나 라인을 모두 취급하므로, 주문하는 메뉴를 확인할 가치가 있습니다. Kona Coffee Donut? 의 매장 기본 커피는 100% 코나(호놀룰루 커피 빅아일랜드 원두)로, 핫이든 아이스든 갓 내립니다.',
        },
      ],
    },
    whereToGet: {
      title: 'Kona Coffee Donut? 에서 아사이 & 100% 코나를',
      intro: '아사이 볼과 진짜 100% 코나를 걸어서 들를 수 있는 와이키키 한곳에서 즐기고 싶다면, 여기서 저희를 찾으세요.',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '와이키키 중심, 칼라카우아 애비뉴에 자리한 Kona Coffee Donut? 는 갓 만든 아사이 볼(스몰 $13.95 / 라지 $15.95)과 진짜 100% 코나 커피를 함께 제공합니다 — 호놀룰루 커피의 빅아일랜드 원두를 핫이든 아이스든 내리죠. 모찌 도넛, 말라사다, 한국식 빙수, 한국식 핫도그를 더하면 든든한 한 끼가 됩니다. 와이키키 해변에서 도보 약 5분, 매일 영업하며 다국어로 기꺼이 도와드립니다.',
        highlights: [
          '아사이 볼 스몰 $13.95 / 라지 $15.95',
          '진짜 100% 코나 커피 (호놀룰루 커피 원두), 핫 & 아이스',
          '모찌 도넛, 말라사다, 빙수 & 한국식 핫도그',
          '와이키키 해변에서 약 5분',
          '매일 영업, 오전 7시–오후 9시 · (808) 260-1835',
        ],
      },
      cta: '코나 커피 메뉴 보기',
    },
    howToEat: {
      title: '와이키키 아사이 & 커피 나들이 팁',
      subtitle: '어느 곳을 가도 200% 즐기는 법',
      tips: [
        {
          title: '피크를 피해 줄 건너뛰기',
          description: '아사이 가게는 오전 중반에 가장 붐빕니다. 아일랜드 빈티지든 Kona Coffee Donut? 든, 조금 일찍 또는 늦게 가면 보통 대기가 짧고 해변에서 더 여유롭게 볼을 즐길 수 있습니다.',
        },
        {
          title: '100% 코나 먼저 블랙으로',
          description: 'Kona Coffee Donut? 에서 커피를 주문하면 우유를 넣기 전에 100% 코나를 블랙으로 한 모금. 거기서 자연스럽게 낮은 산미와 부드럽고 고소한 끝맛 — 블렌드가 따라올 수 없는 차이 — 을 느낄 수 있습니다.',
        },
        {
          title: '아사이에 모찌 도넛 곁들이기',
          description: '시원한 아사이 볼과 따뜻한 모찌 도넛 조합은 Kona Coffee Donut? 에서 한곳에 해결됩니다. 상쾌한 것과 달콤한 것을 섞는, 재미있고 누구나 좋아하는 방법이죠.',
        },
        {
          title: '둘 다 도보권 — 맛 비교를',
          description: '둘 다 와이키키 안에 있으니 여행 내내 한 곳만 고를 필요는 없습니다. 하루는 아일랜드 빈티지, 다음 날은 Kona Coffee Donut? 를 가보고, 자신만의 최애 아사이 볼을 정하세요.',
        },
      ],
    },
    faq: {
      title: '아일랜드 빈티지 vs Kona Coffee Donut? — 자주 묻는 질문',
      items: [
        {
          question: '아일랜드 빈티지 커피는 100% 코나인가요?',
          answer: '아일랜드 빈티지 커피는 코나 커피 블렌드와 100% 코나 제품 모두로 잘 알려져 있습니다. 많은 하와이 카페처럼 블렌드와 100% 코나 라인을 함께 취급하므로, 주문하는 음료를 확인하는 게 가장 확실합니다. 매장 기본 커피로 100% 코나를 원한다면, Kona Coffee Donut? 가 호놀룰루 커피의 빅아일랜드 원두로 100% 코나를 핫이든 아이스든 제공합니다.',
        },
        {
          question: '와이키키에서 아사이를 또 어디서 먹을 수 있나요?',
          answer: '아일랜드 빈티지 커피와 Kona Coffee Donut? 모두 와이키키에서 아사이 볼을 제공하며, 칼라카우아 애비뉴를 따라 여러 카페가 있습니다. 2142 Kalakaua Ave의 Kona Coffee Donut? 는 갓 만든 아사이 볼(스몰 $13.95 / 라지 $15.95)을 만들고, 모찌 도넛, 말라사다, 빙수, 100% 코나 커피와 곁들입니다 — 모두 해변에서 약 5분 거리입니다.',
        },
        {
          question: '와이키키 최고의 아사이 볼은?',
          answer: '와이키키 "최고"의 아사이 볼은 결국 취향에 달렸습니다. 아일랜드 빈티지 커피는 유명하고 사랑받는 명소로 훌륭한 선택입니다. Kona Coffee Donut? 는 갓 만든 볼에 더해 더 다양한 메뉴(도넛, 빙수, 핫도그)와 100% 코나 커피를 보통 더 짧은 대기로 제공합니다. 즐거운 답: 둘 다 가보고 자신만의 최애를 정하세요.',
        },
        {
          question: '대기가 더 짧은 곳은? 아일랜드 빈티지 vs Kona Coffee Donut?',
          answer: '아일랜드 빈티지 커피는 매우 인기가 많아 피크 시간엔 대기가 생길 때가 많고, 그것도 활기찬 매력의 일부입니다. 칼라카우아 애비뉴의 Kona Coffee Donut? 는 보통 회전이 조금 더 빨라, 아사이 볼만 사서 바로 나가고 싶다면 편리한 선택입니다. 어느 쪽이든 피크를 피하면 도움이 됩니다.',
        },
        {
          question: 'Kona Coffee Donut? 는 와이키키 해변에서 얼마나 먼가요?',
          answer: 'Kona Coffee Donut? 는 2142 Kalakaua Ave에 있으며 와이키키 해변에서 도보 약 5분입니다. 매일 오전 7시부터 오후 9시까지 영업하고, (808) 260-1835로 연락할 수 있으며, 아사이 볼·100% 코나 커피·모찌 도넛·말라사다·한국식 간식을 한곳에서 제공합니다.',
        },
      ],
    },
    cta: {
      title: '와이키키에서 아사이 & 진짜 100% 코나를',
      text: '2142 Kalakaua Ave의 Kona Coffee Donut? 에 들러 갓 만든 아사이 볼과 진짜 100% 코나 커피를 — 모찌 도넛과 말라사다도, 와이키키 해변에서 약 5분. 매일 오전 7시–오후 9시 영업, (808) 260-1835.',
      menuButton: '메뉴 보기',
      directionsButton: '길찾기',
    },
    breadcrumbs: {
      home: '홈',
      blog: '블로그',
      current: '아일랜드 빈티지 vs Kona Coffee Donut?',
    },
  },
  zh: {
    hero: {
      title: 'Island Vintage vs Kona Coffee Donut?',
      subtitle: '威基基的阿萨伊碗与科纳咖啡对比（2026）',
      updated: '2026年6月更新',
      readTime: '阅读约8分钟',
    },
    definition: {
      title: 'Island Vintage vs Kona Coffee Donut? — 先说结论',
      text: '两家都是威基基喝<strong>阿萨伊碗（açaí）和科纳咖啡</strong>的真正好去处，选哪家都不会错。<strong>Island Vintage Coffee</strong>是备受喜爱的威基基名店，以阿萨伊碗和科纳咖啡混合（Kona blend）闻名，在威基基和阿拉莫阿那有多家分店——热闹、人气高，常常要排队。<strong>Kona Coffee Donut?</strong>（2142 Kalākaua Ave）冲的是<strong>100%科纳</strong>（而非混合），除了阿萨伊碗，<em>还有</em>麻糬甜甜圈、马拉萨达、韩式刨冰（빙수）和韩式热狗——通常排队更短、性价比高，距威基基海滩步行约5分钟。想要经典的阿萨伊名店体验，选<strong>Island Vintage</strong>；想要100%科纳、更多选择，以及更快、可步行抵达的一站，选<strong>Kona Coffee Donut?</strong>。',
    },
    history: {
      title: '威基基的阿萨伊碗',
      subtitle: '在海滩边享用一碗的两个好选择',
      p1: '阿萨伊碗已成为威基基的招牌之一——阿萨伊、香蕉和燕麦麦片打成的冰凉一碗，再铺上水果，海边晨游后吃最惬意。<strong>Island Vintage Coffee</strong>是把阿萨伊碗变成威基基标志的功臣，这名声实至名归：份量足、上镜，是货真价实的本地最爱。若你想要经典又广受喜爱的阿萨伊体验，Island Vintage是稳妥又令人满足的选择。',
      p2: '在<strong>Kona Coffee Donut?</strong>，阿萨伊碗同样现做——<strong>小碗$13.95、大碗$15.95</strong>——铺上水果和麦片，带来同样清爽的海滩日感觉。差别不在于谁更好，而在于<strong>菜单上还有什么</strong>：在你的碗之外，还能拿一个温热的麻糬甜甜圈、马拉萨达、韩式刨冰或韩式热狗，所以想吃的东西各不相同的一群人也能在一处搞定。',
      p3: '两家都位于威基基中心，都不用长途奔波。<strong>Island Vintage</strong>有多家分店，往往人气旺，这正是它热闹魅力的一部分——不过高峰时段可能要等。<strong>Kona Coffee Donut?</strong>是卡拉卡瓦大道上的一家店，<strong>距沙滩约5分钟</strong>，通常出餐稍快，当你只想拿了碗就走时很方便。',
      p4: '坦白说：<strong>怎么选都不亏</strong>。如果你已是Island Vintage的粉丝，尽管继续享受——人气自有道理。但若你想让阿萨伊配上<strong>正宗100%科纳咖啡</strong>，以及更丰富的甜甜圈和韩式小吃，或只是想避开长队，Kona Coffee Donut?就是同一趟行程里值得一试、步行可达的便捷之选。',
    },
    comparison: {
      title: 'Island Vintage vs Kona Coffee Donut?',
      subtitle: '公平的并排对比',
      intro: '下面是一份诚实、基于事实的对比，帮你按需选择。凡是竞品细节因门店或单品而异之处，我们都做了笼统处理：',
      headers: {
        feature: '对比项',
        bingsu: 'Kona Coffee Donut?',
        shavedIce: 'Island Vintage',
        kakigori: '备注',
      },
      rows: [
        {
          feature: '阿萨伊碗',
          bingsu: '有 — 小碗$13.95／大碗$15.95',
          shavedIce: '有 — 著名招牌单品',
          kakigori: '两家都有很棒的阿萨伊碗',
        },
        {
          feature: '咖啡',
          bingsu: '100%科纳（檀香山咖啡大岛豆）',
          shavedIce: '科纳咖啡与科纳混合',
          kakigori: '100%科纳与混合是真实区别',
        },
        {
          feature: '其他食物',
          bingsu: '麻糬甜甜圈、马拉萨达、刨冰、热狗',
          shavedIce: '阿萨伊、早餐与午餐菜单',
          kakigori: '菜单不同——按口味选',
        },
        {
          feature: '价格（阿萨伊）',
          bingsu: '$13.95–$15.95',
          shavedIce: '因碗与尺寸而异',
          kakigori: '两家都是威基基中价位',
        },
        {
          feature: '等候／排队',
          bingsu: '通常排队更短',
          shavedIce: '人气旺——高峰常需等候',
          kakigori: '排队视时段而定',
        },
        {
          feature: '门店',
          bingsu: '2142 Kalākaua Ave，威基基',
          shavedIce: '威基基／阿拉莫阿那多家',
          kakigori: '两家都在中心、可步行',
        },
        {
          feature: '营业时间',
          bingsu: '每天上午7点–晚上9点',
          shavedIce: '因门店而异',
          kakigori: '确切时间请提前确认',
        },
      ],
      note: '总结：Island Vintage是出色又广受喜爱的阿萨伊名店，而Kona Coffee Donut?适合还想要100%科纳、更多选择以及通常更短等候的你。两家都值得在同一趟威基基行程里各去一次。',
    },
    types: {
      title: '你该选哪家？',
      subtitle: '每家最适合什么样的你',
      items: [
        {
          name: '想要经典阿萨伊名店',
          korean: '选 Island Vintage',
          description: '如果你追求著名又广受喜爱的威基基阿萨伊体验，也不介意更热闹、更繁忙的氛围，Island Vintage Coffee是很好的选择。它人气有道理，是货真价实的本地最爱。',
          icon: '🍇',
        },
        {
          name: '想要100%科纳，而非混合',
          korean: '选 Kona Coffee Donut?',
          description: '如果正宗100%科纳对你很重要，Kona Coffee Donut?用檀香山咖啡的大岛豆冲100%科纳——而不是法律上可低至10%科纳的"科纳混合"。它和你的阿萨伊碗也是绝配。',
          icon: '☕',
        },
        {
          name: '想要的不只是阿萨伊',
          korean: '选 Kona Coffee Donut?',
          description: '和想吃不同东西的一群人一起旅行？Kona Coffee Donut?除了阿萨伊碗，还有麻糬甜甜圈、马拉萨达、韩式刨冰、韩式热狗，以及抹茶或焙茶拿铁——一站就能让大家都点到。',
          icon: '🍩',
        },
        {
          name: '宁愿避开长队',
          korean: '选 Kona Coffee Donut?',
          description: 'Island Vintage人气够旺，高峰时段可能要等。如果你更想拿了碗就走，Kona Coffee Donut?通常出餐稍快——在拥挤的威基基日子里很方便。',
          icon: '⏱️',
        },
        {
          name: '想要实惠、从海滩步行可达',
          korean: '选 Kona Coffee Donut?',
          description: '阿萨伊碗$13.95–$15.95、多语言服务，门店距威基基海滩约5分钟，Kona Coffee Donut?是去沙滩前后一站、实惠又便捷的好去处。',
          icon: '🌴',
        },
      ],
    },
    whyHawaii: {
      title: '100%科纳 vs 科纳混合：区别在哪？',
      points: [
        {
          title: '"100%科纳"是什么意思',
          description: '正宗100%科纳只生长在大岛科纳产区的火山斜坡上，除科纳豆外别无其他。它稀有——不到全球咖啡的1%——以顺滑、天然低酸的口感而珍贵。当菜单清楚写着"100%科纳"，那才是货真价实的。',
        },
        {
          title: '"科纳混合"是什么',
          description: '按夏威夷标签法，作为"科纳混合"出售的咖啡只需含约10%的真科纳豆，其余可以是任何产地的咖啡。混合也可能好喝，但大多是其他豆子，所以标签或菜单上的确切字眼比价格更重要。',
        },
        {
          title: '为何对风味重要',
          description: '人们专程寻找100%科纳，是为了那一杯本身：顺滑、柔和、天然低酸，带红糖与坚果香气。混合会稀释这份招牌个性。若你特别想尝到正宗科纳，就找"100%"——而不只是"科纳"二字。',
        },
        {
          title: '各家冲的是什么',
          description: '许多广受喜爱的夏威夷咖啡馆——包括Island Vintage——同时供应科纳混合与100%科纳产品线，所以值得确认你点的那一款。在Kona Coffee Donut?，店内主打咖啡是100%科纳（檀香山咖啡大岛豆），现冲，冷热皆可。',
        },
      ],
    },
    whereToGet: {
      title: '在 Kona Coffee Donut? 品尝阿萨伊 & 100%科纳',
      intro: '如果你想在威基基一处步行可达的店里同时享受阿萨伊碗和正宗100%科纳，这就是找到我们的地方。',
      shop: {
        name: 'Kona Coffee Donut?',
        address: '2142 Kalakaua Ave, Honolulu, HI 96815',
        description: '就在威基基中心地段的卡拉卡瓦大道上，Kona Coffee Donut?同时提供现做阿萨伊碗（小碗$13.95／大碗$15.95）和正宗100%科纳咖啡——我们用檀香山咖啡的大岛豆，冷热皆可现冲。再加一个麻糬甜甜圈、马拉萨达、韩式刨冰或韩式热狗，就是丰盛的一份。我们距威基基海滩步行约5分钟，每天营业，并乐意以多种语言为你服务。',
        highlights: [
          '阿萨伊碗 小碗$13.95／大碗$15.95',
          '正宗100%科纳咖啡（檀香山咖啡豆），冷热皆有',
          '麻糬甜甜圈、马拉萨达、刨冰与韩式热狗',
          '距威基基海滩约5分钟',
          '每天营业，上午7点至晚上9点 · (808) 260-1835',
        ],
      },
      cta: '查看我们的科纳咖啡菜单',
    },
    howToEat: {
      title: '威基基阿萨伊 & 咖啡之行小贴士',
      subtitle: '无论去哪家都尽兴',
      tips: [
        {
          title: '错峰前往，跳过排队',
          description: '阿萨伊店在上午中段最忙。无论你选Island Vintage还是Kona Coffee Donut?，早一点或晚一点去通常排队更短——也能在海边更悠闲地享用一碗。',
        },
        {
          title: '先纯黑尝100%科纳',
          description: '若在Kona Coffee Donut?点咖啡，加奶前先纯黑啜一口100%科纳。那里能尝到它天然的低酸和顺滑、坚果般的甜尾韵——这是混合咖啡难以企及的差别。',
        },
        {
          title: '阿萨伊配麻糬甜甜圈',
          description: '冰凉的阿萨伊碗配温热的麻糬甜甜圈，这个组合只有在Kona Coffee Donut?一站就能拿到。把清爽与甜蜜混搭，有趣又人人喜爱。',
        },
        {
          title: '两家都可步行——来场试吃',
          description: '既然两家都在威基基，整趟旅程不必只选一家。一天去Island Vintage，另一天去Kona Coffee Donut?，自己评出最爱的那碗阿萨伊。',
        },
      ],
    },
    faq: {
      title: 'Island Vintage vs Kona Coffee Donut? — 常见问题',
      items: [
        {
          question: 'Island Vintage Coffee 是100%科纳吗？',
          answer: 'Island Vintage Coffee以科纳咖啡混合和100%科纳产品都广为人知。和许多夏威夷咖啡馆一样，他们同时供应混合与100%科纳产品线，所以最好确认你点的那一款。若你想要店内主打就是100%科纳，Kona Coffee Donut?用檀香山咖啡的大岛豆提供100%科纳，冷热皆可。',
        },
        {
          question: '在威基基还能去哪里吃阿萨伊？',
          answer: 'Island Vintage Coffee和Kona Coffee Donut?都在威基基供应阿萨伊碗，卡拉卡瓦大道沿线还有好几家咖啡馆。位于2142 Kalakaua Ave的Kona Coffee Donut?现做阿萨伊碗（小碗$13.95／大碗$15.95），并搭配麻糬甜甜圈、马拉萨达、刨冰和100%科纳咖啡——都距海滩约5分钟。',
        },
        {
          question: '威基基最好的阿萨伊碗是哪家？',
          answer: '威基基"最好"的阿萨伊碗，归根结底看口味。Island Vintage Coffee是著名又广受喜爱的名店，是极好的选择。Kona Coffee Donut?提供现做碗，外加更多选择（甜甜圈、刨冰、热狗）和100%科纳咖啡，通常排队更短。有趣的答案：两家都试试，选出你自己的最爱。',
        },
        {
          question: 'Island Vintage 和 Kona Coffee Donut? 哪家排队更短？',
          answer: 'Island Vintage Coffee非常受欢迎，高峰时段常需等候——这也是它热闹魅力的一部分。卡拉卡瓦大道上的Kona Coffee Donut?通常出餐稍快，所以如果你更想拿了阿萨伊碗就走，它是方便之选。无论哪家，错峰前往都有帮助。',
        },
        {
          question: 'Kona Coffee Donut? 离威基基海滩多远？',
          answer: 'Kona Coffee Donut?位于2142 Kalakaua Ave，距威基基海滩步行约5分钟。每天上午7点至晚上9点营业，可拨打(808) 260-1835联系，一站即可享用阿萨伊碗、100%科纳咖啡、麻糬甜甜圈、马拉萨达和韩式小吃。',
        },
      ],
    },
    cta: {
      title: '在威基基品尝阿萨伊 & 正宗100%科纳',
      text: '前往2142 Kalakaua Ave的Kona Coffee Donut?，品尝现做阿萨伊碗和正宗100%科纳咖啡——还有麻糬甜甜圈和马拉萨达，距威基基海滩约5分钟。每天上午7点至晚上9点营业，(808) 260-1835。',
      menuButton: '查看我们的菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: {
      home: '首页',
      blog: '博客',
      current: 'Island Vintage vs Kona Coffee Donut?',
    },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Island Vintage Coffee vs Kona Coffee Donut? (2026): Açaí Bowls & Kona Coffee in Waikiki Compared',
  description: 'A fair, factual comparison of Island Vintage Coffee and Kona Coffee Donut? in Waikiki — açaí bowls, 100% Kona vs Kona blend, prices, waits, and which fits what you want.',
  image: 'https://www.konacoffeedonut.com/images/blog/island-vintage-vs-kona-coffee-donut.jpeg',
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
  datePublished: '2026-06-25',
  dateModified: '2026-06-25',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/en/blog/island-vintage-vs-kona-coffee-donut',
  },
  keywords: 'island vintage coffee, island vintage waikiki, acai bowl waikiki, best acai waikiki, island vintage vs, acai and kona coffee waikiki',
  wordCount: 1600,
  inLanguage: 'en-US',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Island Vintage Coffee 100% Kona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Island Vintage Coffee is well known for both Kona coffee blends and 100% Kona offerings. Like many Hawaii cafes, they carry blends as well as 100% Kona lines, so it\'s best to check the specific drink you order. If you specifically want 100% Kona poured as the house coffee, Kona Coffee Donut? serves 100% Kona using Honolulu Coffee\'s Big Island beans, hot or iced.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where else can I get açaí in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both Island Vintage Coffee and Kona Coffee Donut? serve açaí bowls in Waikiki, along with several cafes up and down Kalākaua Avenue. Kona Coffee Donut? at 2142 Kalakaua Ave makes fresh açaí bowls ($13.95 small / $15.95 large) and pairs them with mochi donuts, malasadas, bingsu, and 100% Kona coffee — all about 5 minutes from the beach.',
      },
    },
    {
      '@type': 'Question',
      name: 'What\'s the best açaí bowl in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The "best" açaí bowl in Waikiki really comes down to taste. Island Vintage Coffee is a famous, much-loved institution and a fantastic choice. Kona Coffee Donut? offers fresh bowls plus more variety (donuts, bingsu, corn dogs) and 100% Kona coffee, usually with a shorter wait. The fun answer: try both and pick your own favorite.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which has a shorter wait, Island Vintage or Kona Coffee Donut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Island Vintage Coffee is very popular and often has a wait during peak hours — part of its lively appeal. Kona Coffee Donut? on Kalākaua Avenue usually moves a little faster, so if you\'d rather grab your açaí bowl and go, it\'s a convenient option. Either way, going off-peak helps.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Kona Coffee Donut? from Waikiki Beach?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut? is at 2142 Kalakaua Ave, about a 5-minute walk from Waikiki Beach. It\'s open daily from 7AM to 9PM, you can reach it at (808) 260-1835, and it serves açaí bowls, 100% Kona coffee, mochi donuts, malasadas, and Korean treats all in one stop.',
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
      name: 'Island Vintage vs Kona Coffee Donut?',
      item: 'https://www.konacoffeedonut.com/en/blog/island-vintage-vs-kona-coffee-donut',
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

export default function IslandVintageVsKonaCoffeeDonutPage() {
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
          src="/images/blog/island-vintage-vs-kona-coffee-donut.jpeg"
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

        {/* Açaí Bowls in Waikiki */}
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

        {/* Which Should You Choose */}
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

        {/* 100% Kona vs Kona Blend */}
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

        {/* Where to Get */}
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
              href={`/${locale}/blog/best-acai-bowls-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 font-semibold transition-colors"
            >
              → Best Açaí Bowls in Waikiki
            </Link>
            <Link
              href={`/${locale}/menu/kona-coffee`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Kona Coffee Menu
            </Link>
            <Link
              href={`/${locale}/menu`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Full Menu
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
