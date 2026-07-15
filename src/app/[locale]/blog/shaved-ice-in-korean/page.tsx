'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Globe, MapPin, MessageCircle, Snowflake, Volume2 } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import SubpageNav from '@/components/SubpageNav';

// ────────────────────────────────────────────
// Translations (en, ja, ko, zh)
// ────────────────────────────────────────────
const content = {
  en: {
    hero: {
      title: 'Shaved Ice in Korean: Bingsu (빙수)',
      subtitle: 'What Korean Shaved Ice Is Called, What the Word Means & How to Say It',
      updated: 'Updated July 2026',
      readTime: '6 min read',
    },
    definition: {
      title: 'Quick Answer: What Is Shaved Ice Called in Korean?',
      text: 'Shaved ice in Korean is called <strong>bingsu (빙수)</strong> — pronounced <strong>"BING-soo"</strong>. The word comes from the Sino-Korean characters for <strong>ice (빙, bing)</strong> and <strong>water (수, su)</strong>. Unlike a snow cone, Korean bingsu is usually made from finely shaved <strong>frozen milk</strong>, giving it a creamy, snow-like texture, and it is served in a big bowl with toppings like sweet red bean, fruit, and mochi. The classic red-bean version is called <strong>patbingsu (팥빙수)</strong>.',
    },
    word: {
      title: 'The Word "Bingsu," Letter by Letter',
      subtitle: 'Meaning, Pronunciation & Spelling',
      cards: [
        {
          hangul: '빙 (bing)',
          label: 'Ice',
          description: 'From the Sino-Korean root for "ice." You will see it in other Korean words about cold things — like binggo (빙고), the royal ice houses of the Joseon Dynasty.',
        },
        {
          hangul: '수 (su)',
          label: 'Water',
          description: 'The Sino-Korean root for "water." Put together, bing + su literally means "ice water" — which is what the earliest versions of the dessert essentially were.',
        },
        {
          hangul: '팥 (pat)',
          label: 'Red Bean',
          description: 'Add pat in front and you get patbingsu (팥빙수) — shaved ice topped with sweet red beans, the original and most iconic style of Korean shaved ice.',
        },
      ],
      pronunciation: {
        title: 'How to Pronounce It',
        text: 'Say <strong>"BING-soo"</strong> — two syllables, with the stress on BING. You will also see it romanized as <strong>bingsoo</strong> or <strong>bing su</strong>; they are all the same word, 빙수. There is no "correct" English spelling, but <strong>bingsu</strong> is the standard Revised Romanization used in Korea.',
      },
    },
    glossary: {
      title: 'Korean Shaved Ice Vocabulary',
      subtitle: 'The Words You Will See on Any Bingsu Menu',
      headers: { korean: 'Korean', romanized: 'How to Say It', meaning: 'What It Means' },
      rows: [
        { korean: '빙수', romanized: 'bingsu (BING-soo)', meaning: 'Shaved ice — the general word for the dessert' },
        { korean: '팥빙수', romanized: 'patbingsu (PAT-bing-soo)', meaning: 'Red bean shaved ice — the classic original' },
        { korean: '눈꽃빙수', romanized: 'nunkkot bingsu', meaning: '"Snowflake" bingsu — ultra-fine shaved milk ice' },
        { korean: '우유빙수', romanized: 'uyu bingsu', meaning: 'Milk bingsu — made with frozen milk' },
        { korean: '망고빙수', romanized: 'mango bingsu', meaning: 'Mango bingsu — the summer favorite' },
        { korean: '인절미빙수', romanized: 'injeolmi bingsu', meaning: 'Bingsu with roasted soybean-powder rice cakes' },
        { korean: '녹차빙수', romanized: 'nokcha bingsu', meaning: 'Green tea (matcha) bingsu' },
      ],
      note: 'Spot the pattern? The topping name goes in front, and 빙수 (bingsu) stays at the end — mango bingsu, injeolmi bingsu, matcha bingsu. Once you know the word bingsu, you can read most of a Korean dessert menu.',
    },
    ordering: {
      title: 'How to Order Shaved Ice in Korean',
      subtitle: 'Three Phrases That Always Work',
      items: [
        {
          korean: '빙수 하나 주세요',
          romanized: 'Bingsu hana juseyo',
          meaning: '"One bingsu, please." The simplest way to order — works at any cafe in Korea (or Koreatown, or Waikiki).',
        },
        {
          korean: '팥빙수 있어요?',
          romanized: 'Patbingsu isseoyo?',
          meaning: '"Do you have red bean bingsu?" Use this to ask whether a shop serves the classic style.',
        },
        {
          korean: '너무 맛있어요!',
          romanized: 'Neomu masisseoyo!',
          meaning: '"It\'s so delicious!" Say it after the first spoonful — trust us, you will mean it.',
        },
      ],
    },
    difference: {
      title: 'Is Korean Shaved Ice the Same as a Snow Cone?',
      text: 'No — and the difference matters. American snow cones and Hawaiian shave ice are made from <strong>frozen water</strong> flavored with poured syrups: crisp, icy, and refreshing. Korean bingsu is usually made from <strong>frozen milk</strong>, shaved into ribbons so fine they melt on your tongue like snow. It eats closer to ice cream than to a snow cone, and it is served in a large bowl made for sharing. Japanese kakigori sits in between — fluffy like bingsu, but water-based like shave ice.',
      linkText: 'Read the full comparison: Bingsu vs Shaved Ice vs Kakigori →',
    },
    waikiki: {
      title: 'Where to Try Bingsu in Waikiki',
      subtitle: 'Taste the Word You Just Learned',
      p1: 'You do not need a flight to Seoul to put your new vocabulary to work. At <strong>Kona Coffee Donut?</strong> on Kalakaua Avenue — about five minutes from Waikiki Beach — we shave Korean-style milk ice to order and pile it with toppings like sweet red bean, fresh fruit, injeolmi, and condensed milk.',
      p2: 'Order a bowl to share after a beach day, pair it with 100% Kona coffee or a matcha latte, and say it like a local: "Bingsu hana juseyo!" We are open daily from 7AM to 9PM at 2142 Kalakaua Ave.',
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What is shaved ice called in Korean?',
          answer: 'Shaved ice in Korean is called bingsu (빙수), pronounced "BING-soo." The classic version topped with sweet red beans is called patbingsu (팥빙수).',
        },
        {
          question: 'What does "bingsu" literally mean?',
          answer: 'Bingsu (빙수) combines the Sino-Korean roots bing (빙, ice) and su (수, water) — literally "ice water." Today it refers to the whole family of Korean shaved-ice desserts, most of which are made from shaved frozen milk rather than water.',
        },
        {
          question: 'Is it spelled bingsu or bingsoo?',
          answer: 'Both spellings refer to the same Korean word, 빙수. "Bingsu" follows the official Revised Romanization system used in Korea, while "bingsoo" is a common phonetic spelling. Either way, it is pronounced "BING-soo."',
        },
        {
          question: 'Is Korean shaved ice the same as a snow cone?',
          answer: 'No. Snow cones and Hawaiian shave ice are made from frozen water with poured syrups, so they are crisp and icy. Korean bingsu is usually made from finely shaved frozen milk, giving it a creamy, snow-like texture closer to ice cream, and it is served in a big shareable bowl with toppings like red bean, fruit, and mochi.',
        },
        {
          question: 'Where can I try Korean bingsu in Waikiki?',
          answer: 'You can try authentic Korean-style bingsu at Kona Coffee Donut? at 2142 Kalakaua Ave in Waikiki, about a 5-minute walk from Waikiki Beach. We serve creamy shaved-milk bingsu with toppings like red bean, fruit, and injeolmi, open daily 7AM–9PM.',
        },
      ],
    },
    cta: {
      title: 'Say It, Then Taste It',
      text: 'Creamy Korean bingsu, 100% Kona coffee & fresh mochi donuts — in the heart of Waikiki.',
      menuButton: 'See Our Bingsu Menu',
      directionsButton: 'Get Directions',
    },
    breadcrumbs: { home: 'Home', blog: 'Blog', current: 'Shaved Ice in Korean' },
  },

  ja: {
    hero: {
      title: '韓国語でかき氷は「ビンス（빙수）」',
      subtitle: '韓国のかき氷の名前・意味・発音をやさしく解説',
      updated: '2026年7月更新',
      readTime: '読了時間 6分',
    },
    definition: {
      title: 'クイックアンサー：韓国語でかき氷は何と言う？',
      text: '韓国語でかき氷は<strong>ビンス（빙수 / bingsu）</strong>と言います。発音は<strong>「ビンス」</strong>。<strong>氷（빙・ビン）</strong>と<strong>水（수・ス）</strong>という漢字語に由来します。日本のかき氷と違い、韓国のビンスは<strong>凍らせたミルク</strong>を削るのが主流で、雪のようにきめ細かくクリーミー。あずき・フルーツ・お餅などをのせて、大きなボウルでシェアして食べます。あずきをのせた定番は<strong>パッピンス（팥빙수）</strong>と呼ばれます。',
    },
    word: {
      title: '「ビンス」という言葉を分解',
      subtitle: '意味・発音・表記',
      cards: [
        {
          hangul: '빙 (ビン)',
          label: '氷',
          description: '「氷」を意味する漢字語。朝鮮王朝時代の氷の貯蔵庫「氷庫（빙고・ビンゴ）」など、冷たいものに関する言葉に登場します。',
        },
        {
          hangul: '수 (ス)',
          label: '水',
          description: '「水」を意味する漢字語。빙＋수で文字どおり「氷水」— 初期のビンスはまさに氷水のようなデザートでした。',
        },
        {
          hangul: '팥 (パッ)',
          label: 'あずき',
          description: '前に팥（パッ）を付けるとパッピンス（팥빙수）— 甘く煮たあずきをのせた、最も伝統的で象徴的なスタイルです。',
        },
      ],
      pronunciation: {
        title: '発音のポイント',
        text: '<strong>「ビンス」</strong>と2拍で発音します。英語表記では<strong>bingsu</strong>のほか<strong>bingsoo</strong>とも書かれますが、どちらも同じ빙수です。韓国の公式ローマ字表記（文化観光部2000年式）では<strong>bingsu</strong>が標準です。',
      },
    },
    glossary: {
      title: '韓国かき氷の単語帳',
      subtitle: 'ビンスのメニューでよく見る言葉',
      headers: { korean: '韓国語', romanized: '読み方', meaning: '意味' },
      rows: [
        { korean: '빙수', romanized: 'ビンス (bingsu)', meaning: 'かき氷全般を指す言葉' },
        { korean: '팥빙수', romanized: 'パッピンス (patbingsu)', meaning: 'あずきのかき氷 — 元祖スタイル' },
        { korean: '눈꽃빙수', romanized: 'ヌンコッピンス', meaning: '「雪の花」ビンス — 極細のミルク氷' },
        { korean: '우유빙수', romanized: 'ウユピンス', meaning: 'ミルクビンス — 凍らせた牛乳を使用' },
        { korean: '망고빙수', romanized: 'マンゴービンス', meaning: 'マンゴービンス — 夏の人気No.1' },
        { korean: '인절미빙수', romanized: 'インジョルミピンス', meaning: 'きなこ餅のビンス' },
        { korean: '녹차빙수', romanized: 'ノクチャビンス', meaning: '抹茶（緑茶）ビンス' },
      ],
      note: 'パターンに気づきましたか？トッピング名が前、빙수（ビンス）が後ろ。この一語を覚えるだけで、韓国のデザートメニューはほぼ読めるようになります。',
    },
    ordering: {
      title: '韓国語でビンスを注文してみよう',
      subtitle: 'この3フレーズで完璧',
      items: [
        {
          korean: '빙수 하나 주세요',
          romanized: 'ピンス ハナ ジュセヨ',
          meaning: '「ビンスを1つください」。韓国でもコリアタウンでもワイキキでも通じる、いちばんシンプルな注文フレーズ。',
        },
        {
          korean: '팥빙수 있어요?',
          romanized: 'パッピンス イッソヨ?',
          meaning: '「パッピンスはありますか？」定番のあずきスタイルがあるか聞きたいときに。',
        },
        {
          korean: '너무 맛있어요!',
          romanized: 'ノム マシッソヨ!',
          meaning: '「すごくおいしい！」ひと口食べたらきっと言いたくなります。',
        },
      ],
    },
    difference: {
      title: '韓国のかき氷は日本のかき氷と同じ？',
      text: 'いいえ、実は大きく違います。日本のかき氷やハワイのシェイブアイスは<strong>水の氷</strong>にシロップをかけるスタイル。一方、韓国のビンスは<strong>凍らせたミルク</strong>を削るのが主流で、舌の上で雪のようにとける、アイスクリームに近いクリーミーな食感です。大きなボウルでシェアするのも特徴。日本のかき氷はふわふわ食感という点ではビンスに近く、水ベースという点ではシェイブアイス寄りの、ちょうど中間にあたります。',
      linkText: '詳しい比較はこちら：ビンス vs シェイブアイス vs かき氷 →',
    },
    waikiki: {
      title: 'ワイキキでビンスを味わうなら',
      subtitle: '覚えた言葉を、その場で使ってみよう',
      p1: '覚えたての韓国語を使うのに、ソウル行きの飛行機は必要ありません。ワイキキビーチから徒歩約5分、カラカウア通り沿いの<strong>Kona Coffee Donut?</strong>では、韓国式のミルク氷を注文ごとに削り、あずき・フレッシュフルーツ・インジョルミ・練乳などをたっぷりのせてご提供しています。',
      p2: 'ビーチ帰りにシェアして、100%コナコーヒーや抹茶ラテと合わせて、地元っ子のようにひとこと：「ピンス ハナ ジュセヨ！」 毎日7時〜21時、2142 Kalakaua Aveで営業中です。',
    },
    faq: {
      title: 'よくある質問',
      items: [
        {
          question: '韓国語でかき氷は何と言いますか？',
          answer: '韓国語でかき氷は「ビンス（빙수 / bingsu）」と言います。あずきをのせた定番スタイルは「パッピンス（팥빙수）」と呼ばれます。',
        },
        {
          question: '「ビンス」の意味は？',
          answer: 'ビンス（빙수）は「氷」を意味する빙（ビン）と「水」を意味する수（ス）を組み合わせた言葉で、直訳すると「氷水」。現在は韓国式かき氷全般を指し、多くは水ではなく凍らせたミルクを削って作られます。',
        },
        {
          question: '英語表記はbingsu？bingsoo？',
          answer: 'どちらも同じ빙수を指します。韓国の公式ローマ字表記ではbingsu、発音に忠実な表記としてbingsooもよく使われます。読み方はどちらも「ビンス」です。',
        },
        {
          question: '韓国のビンスと日本のかき氷の違いは？',
          answer: '最大の違いは氷です。日本のかき氷は水の氷にシロップをかけますが、韓国のビンスは凍らせたミルクを削るため、クリーミーでアイスクリームに近い味わいになります。大きなボウルでシェアするのも韓国スタイルの特徴です。',
        },
        {
          question: 'ワイキキでビンスはどこで食べられますか？',
          answer: 'ワイキキの2142 Kalakaua AveにあるKona Coffee Donut?で本格的な韓国式ビンスが楽しめます。ワイキキビーチから徒歩約5分、毎日7時〜21時営業。あずきやフルーツ、インジョルミなどのトッピングと、削りたてのミルク氷をどうぞ。',
        },
      ],
    },
    cta: {
      title: '言えたら、食べてみよう',
      text: 'クリーミーな韓国ビンス、100%コナコーヒー、できたてのもちドーナツ — ワイキキの中心で。',
      menuButton: 'ビンスメニューを見る',
      directionsButton: 'アクセスを見る',
    },
    breadcrumbs: { home: 'ホーム', blog: 'ブログ', current: '韓国語でかき氷は？' },
  },

  ko: {
    hero: {
      title: '빙수, 영어로 뭐라고 할까?',
      subtitle: '"Korean Shaved Ice" — 빙수라는 단어의 뜻과 유래, 외국인에게 소개하는 법',
      updated: '2026년 7월 업데이트',
      readTime: '6분 읽기',
    },
    definition: {
      title: '한눈에 보기: 빙수를 영어로 소개하면?',
      text: '외국인들이 구글에 가장 많이 검색하는 표현은 <strong>"Korean shaved ice"</strong>이고, 그 답이 바로 <strong>빙수(bingsu)</strong>입니다. 빙수는 <strong>얼음 빙(氷)</strong>과 <strong>물 수(水)</strong>에서 온 말로, 물 얼음을 쓰는 미국 스노우콘·하와이 셰이브 아이스와 달리 <strong>우유 얼음</strong>을 곱게 갈아 눈꽃처럼 부드러운 것이 특징입니다. 팥을 올린 클래식 버전은 <strong>팥빙수</strong>라고 하죠.',
    },
    word: {
      title: '빙수라는 단어, 한 글자씩',
      subtitle: '뜻 · 발음 · 로마자 표기',
      cards: [
        {
          hangul: '빙 (氷)',
          label: '얼음',
          description: '"얼음"을 뜻하는 한자어. 조선시대 왕실의 얼음 창고였던 빙고(氷庫)에서도 같은 글자를 씁니다.',
        },
        {
          hangul: '수 (水)',
          label: '물',
          description: '"물"을 뜻하는 한자어. 빙+수는 문자 그대로 "얼음물" — 초창기 빙수의 모습 그대로입니다.',
        },
        {
          hangul: '팥',
          label: 'Red Bean',
          description: '앞에 팥을 붙이면 팥빙수 — 외국인에게는 "sweet red bean shaved ice"라고 소개하면 바로 이해합니다.',
        },
      ],
      pronunciation: {
        title: '로마자 표기는?',
        text: '국립국어원 로마자 표기법 기준으로는 <strong>bingsu</strong>가 표준이고, 발음을 살린 <strong>bingsoo</strong>도 해외에서 널리 쓰입니다. 외국인에게 알려줄 때는 <strong>"빙-수(BING-soo)"</strong>라고 두 음절로 또박또박 말해 주세요.',
      },
    },
    glossary: {
      title: '빙수 메뉴판 영어로 옮기기',
      subtitle: '외국인 친구에게 소개할 때 유용한 표현들',
      headers: { korean: '한국어', romanized: '로마자', meaning: '영어로 소개하면' },
      rows: [
        { korean: '빙수', romanized: 'bingsu', meaning: 'Korean shaved ice — 총칭' },
        { korean: '팥빙수', romanized: 'patbingsu', meaning: 'Sweet red bean shaved ice — 오리지널' },
        { korean: '눈꽃빙수', romanized: 'nunkkot bingsu', meaning: 'Snowflake bingsu — 극세 우유 얼음' },
        { korean: '우유빙수', romanized: 'uyu bingsu', meaning: 'Milk bingsu — 우유 얼음 베이스' },
        { korean: '망고빙수', romanized: 'mango bingsu', meaning: 'Mango bingsu — 여름 인기 1위' },
        { korean: '인절미빙수', romanized: 'injeolmi bingsu', meaning: 'Roasted soybean rice-cake bingsu' },
        { korean: '녹차빙수', romanized: 'nokcha bingsu', meaning: 'Green tea (matcha) bingsu' },
      ],
      note: '토핑 이름 + 빙수 구조만 알려주면, 외국인 친구도 한국 디저트 메뉴판을 술술 읽을 수 있습니다.',
    },
    ordering: {
      title: '외국인 친구에게 알려줄 주문 표현',
      subtitle: '와이키키에서도, 서울에서도 통하는 세 마디',
      items: [
        {
          korean: '빙수 하나 주세요',
          romanized: 'Bingsu hana juseyo',
          meaning: '"One bingsu, please." — 가장 기본이 되는 주문 표현.',
        },
        {
          korean: '팥빙수 있어요?',
          romanized: 'Patbingsu isseoyo?',
          meaning: '"Do you have red bean bingsu?" — 클래식 팥빙수를 찾을 때.',
        },
        {
          korean: '너무 맛있어요!',
          romanized: 'Neomu masisseoyo!',
          meaning: '"It\'s so delicious!" — 한 입 먹고 나면 자연스럽게 나오는 말.',
        },
      ],
    },
    difference: {
      title: '빙수와 스노우콘, 뭐가 다를까?',
      text: '미국 스노우콘과 하와이 셰이브 아이스는 <strong>물 얼음</strong>에 시럽을 뿌리는 방식이라 아삭하고 시원한 반면, 한국 빙수는 <strong>우유 얼음</strong>을 곱게 갈아 혀에서 눈처럼 녹는 크리미한 식감이 특징입니다. 큰 그릇에 담아 나눠 먹는 문화도 한국만의 것이죠. 일본 가키고리는 식감은 빙수처럼 포슬포슬하지만 물 얼음 베이스라는 점에서 그 중간쯤에 있습니다.',
      linkText: '자세한 비교는 여기서: 빙수 vs 셰이브 아이스 vs 가키고리 →',
    },
    waikiki: {
      title: '와이키키에서 빙수가 생각날 때',
      subtitle: '하와이 한복판에서 만나는 진짜 한국 빙수',
      p1: '와이키키 비치에서 도보 5분, 칼라카우아 애비뉴의 <strong>Kona Coffee Donut?</strong>에서는 주문과 동시에 한국식 우유 얼음을 갈아 팥, 생과일, 인절미, 연유를 듬뿍 올려 드립니다.',
      p2: '해변 다녀온 뒤 시원한 빙수 한 그릇을 나누고, 100% 코나 커피나 말차 라테와 함께 즐겨 보세요. 매일 오전 7시~오후 9시, 2142 Kalakaua Ave에서 기다립니다.',
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        {
          question: '빙수를 영어로 뭐라고 하나요?',
          answer: '가장 널리 쓰이는 표현은 "Korean shaved ice"이고, 고유명사로는 bingsu(빙수)를 그대로 씁니다. 팥빙수는 "sweet red bean shaved ice"라고 소개하면 됩니다.',
        },
        {
          question: '빙수라는 말은 어디서 왔나요?',
          answer: '얼음 빙(氷)과 물 수(水)를 합친 한자어로, 문자 그대로 "얼음물"이라는 뜻입니다. 지금은 우유 얼음을 갈아 만드는 한국식 빙수 디저트 전체를 가리키는 말이 됐습니다.',
        },
        {
          question: '로마자 표기는 bingsu와 bingsoo 중 뭐가 맞나요?',
          answer: '표준 로마자 표기법으로는 bingsu가 맞고, 발음을 살린 bingsoo도 해외에서 널리 통용됩니다. 둘 다 같은 빙수를 가리킵니다.',
        },
        {
          question: '빙수와 하와이 셰이브 아이스의 차이는?',
          answer: '셰이브 아이스는 물 얼음에 과일 시럽을 뿌려 아삭하고, 빙수는 우유 얼음을 곱게 갈아 크리미합니다. 빙수는 팥·과일·떡 같은 토핑을 올려 큰 그릇에 나눠 먹는 것이 특징입니다.',
        },
        {
          question: '와이키키에서 빙수 파는 곳이 있나요?',
          answer: '네, 와이키키 2142 Kalakaua Ave의 Kona Coffee Donut?에서 한국식 우유 빙수를 맛볼 수 있습니다. 와이키키 비치에서 도보 약 5분, 매일 오전 7시~오후 9시 영업합니다.',
        },
      ],
    },
    cta: {
      title: '오늘, 와이키키에서 빙수 한 그릇',
      text: '크리미한 한국식 빙수, 100% 코나 커피, 갓 만든 모찌도넛 — 와이키키 중심에서.',
      menuButton: '빙수 메뉴 보기',
      directionsButton: '오시는 길',
    },
    breadcrumbs: { home: '홈', blog: '블로그', current: '빙수 영어로' },
  },

  zh: {
    hero: {
      title: '韩式刨冰用韩语怎么说？——雪冰（빙수）',
      subtitle: '"Bingsu"的含义、发音与正确写法，一次讲清楚',
      updated: '2026年7月更新',
      readTime: '6分钟阅读',
    },
    definition: {
      title: '快速解答：刨冰的韩语是什么？',
      text: '刨冰在韩语中叫<strong>빙수（bingsu，音"冰苏"）</strong>，中文常译作<strong>雪冰</strong>。这个词来自汉字词<strong>冰（빙）</strong>和<strong>水（수）</strong>。与用水冰制作的美式刨冰、夏威夷刨冰不同，韩式雪冰通常用<strong>冷冻牛奶</strong>刨成细雪般的冰片，口感绵密如雪，配上红豆、水果、年糕等丰富配料，用大碗盛装、适合分享。经典的红豆版本叫<strong>팥빙수（patbingsu，红豆雪冰）</strong>。',
    },
    word: {
      title: '逐字拆解"빙수"',
      subtitle: '含义 · 发音 · 拼写',
      cards: [
        {
          hangul: '빙 (bing)',
          label: '冰',
          description: '来自汉字"冰"。朝鲜王朝时期储存冬冰的皇家冰库"빙고（冰库）"用的就是同一个字。',
        },
        {
          hangul: '수 (su)',
          label: '水',
          description: '来自汉字"水"。빙+수字面意思就是"冰水"——最早的雪冰确实就是加了甜料的冰水。',
        },
        {
          hangul: '팥 (pat)',
          label: '红豆',
          description: '在前面加上팥，就是팥빙수（红豆雪冰）——铺满甜红豆的最经典、最具代表性的款式。',
        },
      ],
      pronunciation: {
        title: '怎么发音？',
        text: '读作<strong>"BING-soo"（冰-苏）</strong>，两个音节。英文写法有<strong>bingsu</strong>和<strong>bingsoo</strong>两种，都是同一个词빙수；韩国官方罗马字标准写法是<strong>bingsu</strong>。',
      },
    },
    glossary: {
      title: '韩式刨冰词汇表',
      subtitle: '看懂雪冰菜单只需这几个词',
      headers: { korean: '韩语', romanized: '读音', meaning: '含义' },
      rows: [
        { korean: '빙수', romanized: 'bingsu（冰苏）', meaning: '刨冰/雪冰的统称' },
        { korean: '팥빙수', romanized: 'patbingsu', meaning: '红豆雪冰 — 经典原版' },
        { korean: '눈꽃빙수', romanized: 'nunkkot bingsu', meaning: '"雪花"雪冰 — 极细牛奶冰' },
        { korean: '우유빙수', romanized: 'uyu bingsu', meaning: '牛奶雪冰 — 冷冻牛奶制作' },
        { korean: '망고빙수', romanized: 'mango bingsu', meaning: '芒果雪冰 — 夏日人气王' },
        { korean: '인절미빙수', romanized: 'injeolmi bingsu', meaning: '黄豆粉年糕雪冰' },
        { korean: '녹차빙수', romanized: 'nokcha bingsu', meaning: '绿茶（抹茶）雪冰' },
      ],
      note: '发现规律了吗？配料名在前，빙수在后——芒果雪冰、年糕雪冰、抹茶雪冰。记住这一个词，韩国甜品菜单就能看懂大半。',
    },
    ordering: {
      title: '用韩语点一份雪冰',
      subtitle: '三句万能点单用语',
      items: [
        {
          korean: '빙수 하나 주세요',
          romanized: 'Bingsu hana juseyo',
          meaning: '"请给我一份雪冰。"最简单实用的点单句——在首尔、韩国城或威基基都通用。',
        },
        {
          korean: '팥빙수 있어요?',
          romanized: 'Patbingsu isseoyo?',
          meaning: '"有红豆雪冰吗？"想吃经典款时就这么问。',
        },
        {
          korean: '너무 맛있어요!',
          romanized: 'Neomu masisseoyo!',
          meaning: '"太好吃了！"吃下第一口后，你一定会想说这句。',
        },
      ],
    },
    difference: {
      title: '韩式雪冰和普通刨冰一样吗？',
      text: '不一样，而且差别很大。美式刨冰和夏威夷刨冰用<strong>水冰</strong>淋糖浆，口感偏脆、偏冰；韩式雪冰通常用<strong>冷冻牛奶</strong>刨成极细的冰片，入口如雪般化开，口感更接近冰淇淋，而且用大碗盛装、适合几个人分享。日式刨冰介于两者之间——口感松软似雪冰，但用的是水冰。',
      linkText: '查看完整对比：雪冰 vs 刨冰 vs 日式刨冰 →',
    },
    waikiki: {
      title: '在威基基就能吃到正宗雪冰',
      subtitle: '学会这个词，马上用得上',
      p1: '不用飞首尔，就能用上刚学会的韩语。位于卡拉卡瓦大道、距威基基海滩步行约5分钟的<strong>Kona Coffee Donut?</strong>，现点现刨韩式牛奶冰，配上甜红豆、新鲜水果、黄豆粉年糕和炼乳。',
      p2: '海滩玩累了，点一大碗和朋友分享，再配一杯100%科纳咖啡或抹茶拿铁，像本地人一样说一句："Bingsu hana juseyo!" 地址：2142 Kalakaua Ave，每天早7点至晚9点营业。',
    },
    faq: {
      title: '常见问题',
      items: [
        {
          question: '刨冰用韩语怎么说？',
          answer: '刨冰的韩语是빙수（bingsu），中文常译作"雪冰"，发音类似"冰苏"。铺红豆的经典款叫팥빙수（patbingsu，红豆雪冰）。',
        },
        {
          question: '"빙수"这个词是什么意思？',
          answer: '빙수由汉字词"冰（빙）"和"水（수）"组成，字面意思是"冰水"。如今泛指韩式刨冰甜品，大多用冷冻牛奶而非清水制作。',
        },
        {
          question: '英文应该写bingsu还是bingsoo？',
          answer: '两种写法指的都是同一个词빙수。bingsu是韩国官方罗马字标准写法，bingsoo是更贴近发音的拼法，都可以使用。',
        },
        {
          question: '韩式雪冰和夏威夷刨冰有什么区别？',
          answer: '夏威夷刨冰用水冰淋果味糖浆，口感偏脆偏冰；韩式雪冰用冷冻牛奶刨成细雪，口感绵密如冰淇淋，并配红豆、水果、年糕等配料，用大碗分享着吃。',
        },
        {
          question: '威基基哪里能吃到韩式雪冰？',
          answer: '威基基2142 Kalakaua Ave的Kona Coffee Donut?供应正宗韩式牛奶雪冰，距威基基海滩步行约5分钟，每天早7点至晚9点营业。',
        },
      ],
    },
    cta: {
      title: '学会说，就来尝',
      text: '绵密韩式雪冰、100%科纳咖啡、新鲜麻薯甜甜圈——就在威基基中心。',
      menuButton: '查看雪冰菜单',
      directionsButton: '获取路线',
    },
    breadcrumbs: { home: '首页', blog: '博客', current: '刨冰的韩语' },
  },
};

// ────────────────────────────────────────────
// Structured Data
// ────────────────────────────────────────────
const siteUrl = 'https://www.konacoffeedonut.com';

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Shaved Ice in Korean: What It Is Called, What Bingsu (빙수) Means & How to Say It',
  description:
    'Shaved ice in Korean is called bingsu (빙수), pronounced "BING-soo" — literally "ice water." Learn the meaning, pronunciation, bingsu vs bingsoo spelling, key menu words like patbingsu, and where to try real Korean bingsu in Waikiki.',
  image: `${siteUrl}/images/blog/what-is-bingsu.png`,
  author: {
    '@type': 'Organization',
    name: 'Kona Coffee Donut?',
    url: siteUrl,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Kona Coffee Donut?',
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/images/logo.png`,
    },
  },
  datePublished: '2026-07-14',
  dateModified: '2026-07-14',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${siteUrl}/en/blog/shaved-ice-in-korean`,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is shaved ice called in Korean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shaved ice in Korean is called bingsu (빙수), pronounced "BING-soo." The classic version topped with sweet red beans is called patbingsu (팥빙수).',
      },
    },
    {
      '@type': 'Question',
      name: 'What does bingsu literally mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bingsu (빙수) combines the Sino-Korean roots bing (빙, ice) and su (수, water) — literally "ice water." Today it refers to the whole family of Korean shaved-ice desserts, most of which are made from shaved frozen milk rather than water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it spelled bingsu or bingsoo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both spellings refer to the same Korean word, 빙수. "Bingsu" follows the official Revised Romanization system used in Korea, while "bingsoo" is a common phonetic spelling. Either way, it is pronounced "BING-soo."',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Korean shaved ice the same as a snow cone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Snow cones and Hawaiian shave ice are made from frozen water with poured syrups, so they are crisp and icy. Korean bingsu is usually made from finely shaved frozen milk, giving it a creamy, snow-like texture closer to ice cream, and it is served in a big shareable bowl with toppings like red bean, fruit, and mochi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I try Korean bingsu in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can try authentic Korean-style bingsu at Kona Coffee Donut? at 2142 Kalakaua Ave in Waikiki, about a 5-minute walk from Waikiki Beach. We serve creamy shaved-milk bingsu with toppings like red bean, fruit, and injeolmi, open daily 7AM–9PM.',
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

export default function ShavedIceInKoreanPage() {
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
            src="/images/blog/what-is-bingsu.png"
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

        {/* Word Breakdown */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-sky-50">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{t.word.title}</h2>
              <p className="text-lg text-sky-700">{t.word.subtitle}</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {t.word.cards.map((card, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="text-4xl font-bold text-sky-600 mb-2">{card.hangul}</div>
                  <div className="text-sm uppercase tracking-wide text-sky-500 font-semibold mb-4">{card.label}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div {...fadeUp} className="bg-white rounded-2xl p-8 border border-sky-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-sky-500" />
                {t.word.pronunciation.title}
              </h3>
              <p
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.word.pronunciation.text }}
              />
            </motion.div>
          </div>
        </section>

        {/* Glossary Table */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{t.glossary.title}</h2>
              <p className="text-lg text-sky-700">{t.glossary.subtitle}</p>
            </motion.div>
            <motion.div {...fadeUp} className="overflow-x-auto rounded-2xl border border-sky-100 shadow-sm">
              <table className="w-full text-left bg-white">
                <thead>
                  <tr className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white">
                    <th className="px-6 py-4 font-semibold">{t.glossary.headers.korean}</th>
                    <th className="px-6 py-4 font-semibold">{t.glossary.headers.romanized}</th>
                    <th className="px-6 py-4 font-semibold">{t.glossary.headers.meaning}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.glossary.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-sky-50/50'}>
                      <td className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap">{row.korean}</td>
                      <td className="px-6 py-4 text-sky-700 whitespace-nowrap">{row.romanized}</td>
                      <td className="px-6 py-4 text-gray-600">{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            <motion.p {...fadeUp} className="mt-6 text-center text-gray-600 italic max-w-3xl mx-auto">
              {t.glossary.note}
            </motion.p>
          </div>
        </section>

        {/* Ordering Phrases */}
        <section className="py-16 px-4 bg-gradient-to-b from-sky-50 to-white">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{t.ordering.title}</h2>
              <p className="text-lg text-sky-700">{t.ordering.subtitle}</p>
            </motion.div>
            <div className="space-y-4">
              {t.ordering.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sky-100 flex flex-col md:flex-row md:items-center gap-4"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">{item.korean}</div>
                    <div className="text-sky-600 font-semibold mb-1">{item.romanized}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.meaning}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Difference */}
        <section className="py-16 px-4">
          <motion.div {...fadeUp} className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-10 border border-indigo-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Globe className="w-7 h-7 text-indigo-500" />
                {t.difference.title}
              </h2>
              <p
                className="text-gray-700 leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: t.difference.text }}
              />
              <Link
                href={`/${locale}/blog/bingsu-vs-shaved-ice-kakigori`}
                className="text-indigo-600 hover:text-indigo-800 font-semibold underline underline-offset-4 transition-colors"
              >
                {t.difference.linkText}
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Waikiki Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-sky-50">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
                <MapPin className="w-8 h-8 text-sky-500" />
                {t.waikiki.title}
              </h2>
              <p className="text-lg text-sky-700">{t.waikiki.subtitle}</p>
            </motion.div>
            <motion.div {...fadeUp} className="space-y-5 text-lg text-gray-700 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t.waikiki.p1 }} />
              <p dangerouslySetInnerHTML={{ __html: t.waikiki.p2 }} />
            </motion.div>
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
              href={`/${locale}/blog/bingsu-vs-shaved-ice-kakigori`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Bingsu vs Shaved Ice vs Kakigori
            </Link>
            <Link
              href={`/${locale}/blog/bingsu-origin-history`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Bingsu Origin & History
            </Link>
            <Link
              href={`/${locale}/blog/best-bingsu-waikiki`}
              className="text-sky-600 hover:text-sky-800 underline underline-offset-4 transition-colors"
            >
              Best Bingsu in Waikiki
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
              <Snowflake className="w-12 h-12 mx-auto mb-4 opacity-80" />
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
