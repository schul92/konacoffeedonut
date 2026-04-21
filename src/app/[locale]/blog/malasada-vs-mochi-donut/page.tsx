'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Script from 'next/script';
import { ArrowRight, Coffee, Star, Trophy, Utensils } from 'lucide-react';
import SubpageNav from '@/components/SubpageNav';

/* -------------------------------------------------------------------------- */
/*  Translations (en, ja, ko, zh)                                             */
/* -------------------------------------------------------------------------- */

const content = {
  en: {
    hero: {
      title: 'Malasada vs Mochi Donut',
      subtitle: 'The Ultimate Hawaiian Donut Showdown',
      updated: 'Updated April 2026',
    },
    quickAnswer: {
      title: 'Quick Answer',
      text: 'Malasadas are Portuguese fried dough \u2014 fluffy, sugar-coated, and sometimes filled with cream, custard, or haupia. Mochi donuts use rice flour (mochiko) for a crispy-chewy QQ texture with colorful glazes. Both are beloved Hawaiian treats, and at Kona Coffee Donut in Waikiki you can try them side by side.',
    },
    table: {
      title: 'Head-to-Head Comparison',
      headers: ['Category', 'Malasada', 'Mochi Donut'],
      rows: [
        ['Origin', 'Portugal via Hawaii (1800s)', 'Japan / Korea fusion (2020s)'],
        ['Flour', 'Wheat flour', 'Mochiko rice flour'],
        ['Texture', 'Fluffy, airy, pillowy', 'Crispy outside, chewy inside (QQ)'],
        ['Shape', 'Round ball', '8-ball ring'],
        ['Coating', 'Sugar rolled', 'Glaze dipped'],
        ['Filling', 'Cream, custard, haupia', 'Usually none'],
        ['Best for', 'Warm comfort food', 'Instagram-worthy snack'],
        ['Price range', '$3 \u2013 $5', '$3.50 \u2013 $5'],
      ],
    },
    malasadaCase: {
      title: 'The Case for Malasadas',
      p1: 'The malasada is more than a donut \u2014 it is a piece of Hawaiian history. Portuguese immigrants arrived in Hawaii in the late 1800s to work on sugar plantations, and they brought with them a tradition of deep-fried, sugar-rolled dough that would become one of the most iconic treats on the islands. The word "malasada" comes from the Portuguese for "under-cooked," a nod to the soft, almost molten center that makes this pastry so irresistible.',
      p2: 'Leonard\'s Bakery, which opened on Oahu in 1952, popularized the malasada in modern Hawaii and remains a pilgrimage site for tourists and locals alike. But the beauty of the malasada lies in its simplicity: flour, eggs, butter, sugar, and yeast, fried until golden and rolled in granulated sugar while still warm. The result is a treat that practically melts in your mouth, with a slight crunch on the outside giving way to an impossibly light, pillowy interior.',
      p3: 'Modern malasadas have evolved beyond the classic sugar-coated ball. At shops across Hawaii you will find them filled with haupia (coconut pudding), lilikoi (passion fruit) custard, Bavarian cream, and even ube. Eaten warm \u2014 ideally within minutes of leaving the fryer \u2014 a malasada is warm comfort in edible form. There is nothing quite like tearing into a just-fried malasada on a Waikiki morning, the sugar clinging to your fingers, the steam rising from the impossibly soft center.',
    },
    mochiCase: {
      title: 'The Case for Mochi Donuts',
      p1: 'If the malasada represents old-world tradition, the mochi donut is the new wave. Born from a fusion of Japanese mochi culture and American donut innovation, mochi donuts use glutinous rice flour (mochiko) instead of wheat. The result is a texture unlike any other donut: crispy and slightly crackly on the outside, with a stretchy, chewy interior that fans describe as "QQ" \u2014 a term borrowed from Taiwanese food culture to describe that satisfying bounce.',
      p2: 'The distinctive 8-ball shape \u2014 a ring of connected spheres \u2014 is not just for looks. Each ball is the perfect pull-apart bite, and the crevices between them catch pools of colorful glaze. Speaking of glaze: mochi donuts are a canvas for creativity. From classic flavors like original glaze and chocolate to adventurous options like ube (purple yam), matcha, black sesame, taro, and mango, there is a mochi donut for every palate.',
      p3: 'MOCHILAND, our partner brand, has elevated the mochi donut into an art form with 12+ rotating flavors that change with the seasons. Each donut is handcrafted in small batches for maximum freshness. The viral social-media appeal is undeniable \u2014 these photogenic treats practically beg to be shared on Instagram \u2014 but the real magic is in the taste. Once you experience that crispy-chewy QQ texture, you understand why mochi donuts have gone from niche trend to must-try food phenomenon across Hawaii, the mainland, and beyond.',
    },
    whyNotBoth: {
      title: 'Why Not Both?',
      p1: 'Here is the secret that only a place like Kona Coffee Donut can share: you do not have to choose. We are one of the only shops in Waikiki where you can order a warm malasada AND a freshly glazed mochi donut and enjoy them side by side. That is the whole point \u2014 these are two completely different donut experiences, and comparing them is half the fun.',
      p2: 'We suggest what we call a "Donut Flight": pick one malasada (we recommend the classic sugar or the haupia-filled) and one mochi donut (try the ube or matcha for your first time). Pair them with a cup of our 100% Kona coffee from Honolulu Coffee, and you have the ultimate Waikiki tasting experience. The rich, smooth Kona coffee cuts through the sweetness of both donuts beautifully, creating a pairing that is greater than the sum of its parts.',
      p3: 'Whether you are a first-time visitor to Hawaii or a returning local, the malasada-versus-mochi-donut debate is one you can settle for yourself at our shop. Grab a friend, order both, and discover which side you land on \u2014 or, like most of our customers, decide that both deserve a permanent spot in your life.',
    },
    verdict: {
      title: 'The Verdict',
      text: 'There is no wrong choice. The fluffy warmth of a malasada speaks to the soul, while the QQ crunch of a mochi donut delights the senses. But the REAL move? Try both side by side with a cup of Kona coffee at our Waikiki shop. That is the kind of comparison you can only make in person \u2014 and the kind of morning that makes a Hawaii vacation unforgettable.',
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'What is the difference between a malasada and a mochi donut?',
          a: 'A malasada is a Portuguese-style fried dough ball made with wheat flour, rolled in sugar, and sometimes filled with cream or custard. A mochi donut is made with glutinous rice flour (mochiko), giving it a distinctive chewy-crispy QQ texture, and is shaped like a ring of 8 connected balls dipped in colorful glaze.',
        },
        {
          q: 'Are mochi donuts gluten-free?',
          a: 'Traditional mochi donuts made with 100% mochiko (glutinous rice flour) are naturally gluten-free. However, some recipes blend rice flour with wheat flour, so always check with the shop. At Kona Coffee Donut we can advise you on ingredients for each flavor.',
        },
        {
          q: 'Where can I get both malasadas and mochi donuts in Waikiki?',
          a: 'Kona Coffee Donut at 2142 Kalakaua Ave in Waikiki serves both fresh malasadas and MOCHILAND mochi donuts alongside premium 100% Kona coffee from Honolulu Coffee. It is one of the only spots where you can try both in a single visit.',
        },
        {
          q: 'What does QQ texture mean?',
          a: 'QQ is a term from Taiwanese food culture that describes a chewy, bouncy, springy texture. In the context of mochi donuts, it refers to the satisfying chewiness created by glutinous rice flour \u2014 crispy on the outside and stretchy on the inside.',
        },
        {
          q: 'Which is more popular in Hawaii \u2014 malasadas or mochi donuts?',
          a: 'Malasadas have deeper historical roots in Hawaii dating back to the 1800s and remain a beloved classic. Mochi donuts are a newer phenomenon that has surged in popularity since the early 2020s. Both are hugely popular \u2014 it depends on whether you prefer tradition or trend.',
        },
      ],
    },
    cta: {
      title: 'Settle the Debate Yourself',
      text: 'Visit Kona Coffee Donut at 2142 Kalakaua Ave, Waikiki. Try both and decide which Hawaiian donut wins YOUR heart.',
      buttonMenu: 'View Our Menu',
      buttonDirections: 'Get Directions',
    },
    links: {
      malasadaMenu: 'Malasada Menu',
      mochiMenu: 'Mochi Donut Menu',
      malasadaHawaii: 'Malasada Hawaii Guide',
      mochiWaikiki: 'Mochi Donuts Waikiki',
    },
  },

  ja: {
    hero: {
      title: 'マラサダ vs モチドーナツ',
      subtitle: 'ハワイ究極のドーナツ対決',
      updated: '2026年4月更新',
    },
    quickAnswer: {
      title: '簡単まとめ',
      text: 'マラサダは、ポルトガルの大航海時代に起源を持つ揚げドーナツです。ふわふわの生地に砂糖をまぶし、クリームやカスタード、ハウピア（ココナッツプディング）を詰めることも。モチドーナツは日本のもち文化にルーツを持ち、もち米粉（もちこ）で作られた外はカリッ、中はもちもちのQQ食感が特徴。カラフルなグレーズが映えるSNS時代の人気スイーツです。ワイキキのコナコーヒードーナツでは、この2つを食べ比べできます。',
    },
    table: {
      title: '徹底比較表',
      headers: ['カテゴリ', 'マラサダ', 'モチドーナツ'],
      rows: [
        ['起源', 'ポルトガル → ハワイ（1800年代）', '日本・韓国フュージョン（2020年代）'],
        ['小麦粉', '小麦粉', 'もち米粉（もちこ）'],
        ['食感', 'ふわふわ、エアリー', '外サクサク、中もちもち（QQ）'],
        ['形', '丸いボール', '8連リング'],
        ['コーティング', '砂糖まぶし', 'グレーズディップ'],
        ['フィリング', 'クリーム、カスタード、ハウピア', '通常なし'],
        ['おすすめシーン', '温かいコンフォートフード', 'インスタ映えスナック'],
        ['価格帯', '$3〜$5', '$3.50〜$5'],
      ],
    },
    malasadaCase: {
      title: 'マラサダの魅力',
      p1: 'マラサダは単なるドーナツではありません。それはハワイの歴史そのものです。1800年代後半、ポルトガルからの移民がサトウキビ農園で働くためにハワイにやってきました。彼らが持ち込んだ揚げドーナツの伝統が、ハワイで最も愛されるスイーツの一つとなりました。「マラサダ」という言葉はポルトガル語の「生焼け」に由来し、あの柔らかくとろけるような中心部を表現しています。ポルトガルは15世紀の大航海時代に日本にもカステラや天ぷらをもたらした国。マラサダもまた、その豊かな食文化の贈り物なのです。',
      p2: '1952年にオアフ島でオープンしたレナーズ・ベーカリーが現代ハワイでマラサダを広め、今も観光客と地元民の聖地となっています。マラサダの魅力はそのシンプルさにあります。小麦粉、卵、バター、砂糖、イーストで作られ、黄金色になるまで揚げて、温かいうちに砂糖をまぶします。外側のわずかなカリッとした食感から、信じられないほど軽くふわふわの内側へ \u2014 口の中でとろけるような体験です。',
      p3: '現代のマラサダはクラシックな砂糖まぶしだけではありません。ハウピア（ココナッツプディング）、リリコイ（パッションフルーツ）カスタード、バイエルンクリーム、さらに紅芋フィリングまで。揚げたて \u2014 理想的にはフライヤーから出して数分以内 \u2014 のマラサダは、食べられる幸せそのもの。ワイキキの朝に揚げたてのマラサダを頬張り、指に砂糖がつき、柔らかな中心から湯気が立ち上る瞬間は格別です。',
    },
    mochiCase: {
      title: 'モチドーナツの魅力',
      p1: 'マラサダが伝統を代表するなら、モチドーナツは新しい波です。日本のもち文化とアメリカのドーナツイノベーションの融合から生まれたモチドーナツは、小麦粉の代わりにもち米粉（もちこ）を使用。日本の和菓子に使われるもちと同じ原料から、全く新しいスイーツが誕生しました。外はカリッと、中はもちもちの伸びる食感 \u2014 台湾の食文化で「QQ」と呼ばれる、あの心地よい弾力です。',
      p2: '特徴的な8連ボール型のリングは見た目だけではありません。一つずつちぎって食べるのにぴったりで、ボールの間のくぼみにカラフルなグレーズがたっぷり溜まります。グレーズの種類は無限大。定番のオリジナルやチョコレートから、紅芋（ウベ）、抹茶、黒ゴマ、タロイモ、マンゴーまで、あらゆる味覚に対応します。',
      p3: '私たちのパートナーブランドMOCHILANDは、12種類以上の季節限定フレーバーでモチドーナツを芸術の域に高めています。一つひとつ少量バッチで丁寧に手作りし、最高の新鮮さを保ちます。SNSでの映えは言うまでもありませんが、本当の魅力は味。あのサクサクもちもちのQQ食感を一度体験すれば、モチドーナツがニッチなトレンドからハワイの必食グルメへと成長した理由がわかるでしょう。',
    },
    whyNotBoth: {
      title: '両方食べればいいじゃない？',
      p1: 'コナコーヒードーナツだからこそお伝えできる秘密があります \u2014 選ぶ必要はないのです。ワイキキで温かいマラサダと新鮮なグレーズのモチドーナツの両方を注文できる数少ないお店の一つです。2つの全く異なるドーナツ体験を並べて比較すること、それ自体が楽しいのです。',
      p2: '私たちがおすすめする「ドーナツフライト」をお試しください。マラサダ1つ（クラシックシュガーかハウピアフィリングがおすすめ）とモチドーナツ1つ（初めての方は紅芋か抹茶を）を選び、ホノルルコーヒーの100%コナコーヒーとペアリング。ワイキキ究極のテイスティング体験の完成です。',
      p3: 'ハワイ初訪問の方もリピーターの方も、マラサダ対モチドーナツの論争はご自身の舌で決着をつけてください。友人を誘って、両方注文して、どちら派かを見つけましょう \u2014 あるいは、多くのお客様のように、両方とも人生のレギュラーメンバーに認定してしまいましょう。',
    },
    verdict: {
      title: '結論',
      text: 'どちらを選んでも正解です。マラサダのふわふわの温もりは心に響き、モチドーナツのQQなカリッと食感は五感を楽しませてくれます。でも、本当の正解は？ワイキキの私たちのお店でコナコーヒーと一緒に両方を食べ比べることです。それが、ハワイ旅行を忘れられないものにする朝の過ごし方です。',
    },
    faq: {
      title: 'よくある質問',
      items: [
        {
          q: 'マラサダとモチドーナツの違いは何ですか？',
          a: 'マラサダはポルトガル式の揚げドーナツで、小麦粉で作られ砂糖をまぶしたボール型。クリームやカスタードが入ることも。モチドーナツはもち米粉（もちこ）で作られ、独特のもちもちサクサクQQ食感が特徴。8連ボールのリング型でカラフルなグレーズがかかっています。',
        },
        {
          q: 'モチドーナツはグルテンフリーですか？',
          a: '100%もちこ（もち米粉）で作られた伝統的なモチドーナツはグルテンフリーです。ただし、小麦粉をブレンドするレシピもあるため、必ずお店にご確認ください。コナコーヒードーナツでは各フレーバーの原材料についてご案内できます。',
        },
        {
          q: 'ワイキキでマラサダとモチドーナツの両方を食べられる場所は？',
          a: 'ワイキキのカラカウア通り2142番地のコナコーヒードーナツでは、新鮮なマラサダとMOCHILANDのモチドーナツの両方を、ホノルルコーヒーのプレミアム100%コナコーヒーとともにお楽しみいただけます。',
        },
        {
          q: 'QQ食感とは何ですか？',
          a: 'QQは台湾の食文化から来た言葉で、もちもちと弾力のある食感を表します。モチドーナツの場合、もち米粉が生み出す外はカリッと中はもちもちの食感のことを指します。',
        },
        {
          q: 'ハワイではマラサダとモチドーナツ、どちらが人気ですか？',
          a: 'マラサダは1800年代からのハワイの歴史に深く根付いた定番スイーツ。モチドーナツは2020年代から爆発的に人気が出た新トレンド。どちらも大人気で、伝統派かトレンド派かで分かれます。',
        },
      ],
    },
    cta: {
      title: 'あなた自身で決着をつけよう',
      text: 'ワイキキ 2142 Kalakaua Ave のコナコーヒードーナツへ。両方試して、あなたのハートを掴むハワイアンドーナツを見つけてください。',
      buttonMenu: 'メニューを見る',
      buttonDirections: '道順を見る',
    },
    links: {
      malasadaMenu: 'マラサダメニュー',
      mochiMenu: 'モチドーナツメニュー',
      malasadaHawaii: 'マラサダ ハワイガイド',
      mochiWaikiki: 'モチドーナツ ワイキキ',
    },
  },

  ko: {
    hero: {
      title: '말라사다 vs 모찌 도넛',
      subtitle: '하와이 궁극의 도넛 대결',
      updated: '2026년 4월 업데이트',
    },
    quickAnswer: {
      title: '한눈에 보기',
      text: '말라사다는 포르투갈식 튀김 도넛으로 푹신하고 설탕을 굴려 코팅하며, 크림이나 커스터드, 하우피아(코코넛 푸딩)를 넣기도 합니다. 모찌 도넛은 쌀가루(모치코)로 만들어 겉은 바삭, 속은 쫄깃한 QQ 식감이 특징이며 컬러풀한 글레이즈가 올려집니다. 둘 다 하와이를 대표하는 인기 디저트이며, 와이키키 코나커피도넛에서 나란히 맛볼 수 있습니다.',
    },
    table: {
      title: '1:1 비교표',
      headers: ['카테고리', '말라사다', '모찌 도넛'],
      rows: [
        ['기원', '포르투갈 → 하와이 (1800년대)', '일본/한국 퓨전 (2020년대)'],
        ['밀가루', '밀가루', '모치코 쌀가루'],
        ['식감', '푹신하고 가벼운', '겉바속쫄 (QQ)'],
        ['모양', '둥근 볼', '8연결 링'],
        ['코팅', '설탕 롤링', '글레이즈 디핑'],
        ['필링', '크림, 커스터드, 하우피아', '보통 없음'],
        ['추천 상황', '따뜻한 컴포트 푸드', '인스타 감성 간식'],
        ['가격대', '$3 ~ $5', '$3.50 ~ $5'],
      ],
    },
    malasadaCase: {
      title: '말라사다의 매력',
      p1: '말라사다는 단순한 도넛이 아닌 하와이 역사의 한 조각입니다. 1800년대 후반, 포르투갈 이민자들이 사탕수수 농장에서 일하기 위해 하와이에 왔을 때, 설탕을 굴린 튀김 반죽의 전통을 함께 가져왔습니다. 이것이 하와이에서 가장 상징적인 디저트 중 하나가 되었습니다. "말라사다"라는 단어는 포르투갈어로 "덜 익은"이라는 뜻에서 유래했으며, 부드럽고 거의 녹는 듯한 중심부를 표현합니다.',
      p2: '1952년 오아후에서 문을 연 레너드 베이커리가 현대 하와이에서 말라사다를 대중화했으며, 여전히 관광객과 현지인 모두의 성지입니다. 말라사다의 매력은 그 단순함에 있습니다. 밀가루, 달걀, 버터, 설탕, 이스트로 만들어 황금빛이 될 때까지 튀긴 후 따뜻할 때 설탕을 굴립니다. 바깥의 살짝 바삭한 식감에서 믿을 수 없이 가볍고 푹신한 안쪽으로 이어지는 맛의 여정이 펼쳐집니다.',
      p3: '현대 말라사다는 클래식한 설탕 코팅을 넘어 진화했습니다. 하우피아(코코넛 푸딩), 릴리코이(패션프루트) 커스터드, 바이에른 크림, 심지어 우베 필링까지. 갓 튀긴 말라사다를 와이키키 아침에 한 입 베어 물면, 손가락에 설탕이 묻고, 부드러운 중심에서 김이 올라오는 그 순간은 특별합니다.',
    },
    mochiCase: {
      title: '모찌 도넛의 매력',
      p1: '말라사다가 전통을 대표한다면, 모찌 도넛은 새로운 물결입니다. 일본의 떡 문화와 미국 도넛 혁신의 퓨전에서 탄생한 모찌 도넛은 밀가루 대신 찹쌀가루(모치코)를 사용합니다. 한국의 떡과 같은 원리로, 다른 어떤 도넛과도 다른 식감을 만들어냅니다. 겉은 바삭바삭, 속은 쫀득쫀득 \u2014 팬들이 "QQ"라 부르는, 대만 음식 문화에서 빌려온 그 탱탱한 식감입니다.',
      p2: '독특한 8연결 볼 모양의 링은 단순히 예쁘기만 한 것이 아닙니다. 각 볼은 하나씩 뜯어 먹기 딱 좋고, 볼 사이의 홈에 컬러풀한 글레이즈가 고입니다. 오리지널 글레이즈와 초콜릿 같은 기본부터 우베(자색 고구마), 말차, 흑임자, 타로, 망고까지 다양한 맛이 있습니다.',
      p3: '우리의 파트너 브랜드 MOCHILAND는 12가지 이상의 시즌 한정 플레이버로 모찌 도넛을 예술의 경지로 끌어올렸습니다. 하나하나 소량 배치로 정성껏 수제작하여 최고의 신선함을 유지합니다. SNS에서의 화제성은 말할 것도 없지만, 진짜 매력은 맛에 있습니다. 바삭쫄깃한 QQ 식감을 한번 경험하면, 모찌 도넛이 하와이 필수 먹거리가 된 이유를 알게 됩니다.',
    },
    whyNotBoth: {
      title: '둘 다 먹으면 되잖아?',
      p1: '코나커피도넛만이 알려줄 수 있는 비밀이 있습니다 \u2014 굳이 하나만 선택할 필요가 없다는 것. 와이키키에서 따뜻한 말라사다와 신선한 글레이즈의 모찌 도넛을 동시에 주문할 수 있는 몇 안 되는 곳 중 하나입니다. 완전히 다른 두 가지 도넛 경험을 나란히 비교하는 것 자체가 즐거움입니다.',
      p2: '저희가 추천하는 "도넛 플라이트"를 시도해보세요. 말라사다 1개(클래식 설탕이나 하우피아 필링 추천)와 모찌 도넛 1개(처음이라면 우베나 말차 추천)를 골라 호놀룰루 커피의 100% 코나 커피와 페어링하세요. 와이키키 최고의 테이스팅 경험이 완성됩니다.',
      p3: '하와이 첫 방문이든 재방문이든, 말라사다 대 모찌 도넛 논쟁은 직접 맛보고 결정하세요. 친구와 함께 둘 다 주문하고, 어느 쪽이 당신의 마음을 사로잡는지 확인하세요 \u2014 아니면 대부분의 고객처럼, 둘 다 인생 디저트로 등극시키세요.',
    },
    verdict: {
      title: '최종 결론',
      text: '어떤 선택이든 정답입니다. 말라사다의 푹신한 따뜻함은 마음을 울리고, 모찌 도넛의 QQ한 바삭함은 감각을 즐겁게 합니다. 하지만 진짜 정답은? 와이키키 저희 매장에서 코나 커피와 함께 둘 다 나란히 맛보는 것. 직접 비교해야만 알 수 있는, 하와이 여행을 잊을 수 없게 만드는 아침입니다.',
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        {
          q: '말라사다와 모찌 도넛의 차이점은 무엇인가요?',
          a: '말라사다는 포르투갈식 튀김 도넛으로 밀가루로 만들어 설탕을 굴린 볼 모양입니다. 크림이나 커스터드를 넣기도 합니다. 모찌 도넛은 찹쌀가루(모치코)로 만들어 독특한 쫄깃바삭 QQ 식감이 특징이며, 8연결 볼 링 모양에 컬러풀한 글레이즈가 올려집니다.',
        },
        {
          q: '모찌 도넛은 글루텐 프리인가요?',
          a: '100% 모치코(찹쌀가루)로 만든 전통 모찌 도넛은 글루텐 프리입니다. 다만 밀가루를 블렌드하는 레시피도 있으니 항상 매장에 확인하세요. 코나커피도넛에서는 각 플레이버의 원재료를 안내해 드립니다.',
        },
        {
          q: '와이키키에서 말라사다와 모찌 도넛을 모두 먹을 수 있는 곳은?',
          a: '와이키키 칼라카우아 애비뉴 2142번지의 코나커피도넛에서 신선한 말라사다와 MOCHILAND 모찌 도넛을 호놀룰루 커피의 프리미엄 100% 코나 커피와 함께 즐길 수 있습니다.',
        },
        {
          q: 'QQ 식감이란 무엇인가요?',
          a: 'QQ는 대만 음식 문화에서 온 용어로 쫄깃하고 탱탱한 식감을 뜻합니다. 모찌 도넛에서는 찹쌀가루가 만들어내는 겉바삭 속쫀득 식감을 가리킵니다.',
        },
        {
          q: '하와이에서 말라사다와 모찌 도넛 중 뭐가 더 인기인가요?',
          a: '말라사다는 1800년대부터 내려오는 하와이의 역사적 디저트이고, 모찌 도넛은 2020년대부터 폭발적 인기를 얻은 신트렌드입니다. 둘 다 엄청나게 인기 있으며, 전통파인지 트렌드파인지에 따라 갈립니다.',
        },
      ],
    },
    cta: {
      title: '직접 결론을 내려보세요',
      text: '와이키키 2142 Kalakaua Ave 코나커피도넛 방문. 둘 다 맛보고 당신의 하와이안 도넛을 결정하세요.',
      buttonMenu: '메뉴 보기',
      buttonDirections: '길찾기',
    },
    links: {
      malasadaMenu: '말라사다 메뉴',
      mochiMenu: '모찌 도넛 메뉴',
      malasadaHawaii: '말라사다 하와이 가이드',
      mochiWaikiki: '모찌 도넛 와이키키',
    },
  },

  zh: {
    hero: {
      title: '马拉萨达 vs 麻糬甜甜圈',
      subtitle: '夏威夷甜甜圈终极对决',
      updated: '2026年4月更新',
    },
    quickAnswer: {
      title: '快速解答',
      text: '马拉萨达是葡萄牙式炸面团，蓬松柔软、裹着砂糖，有时会填充奶油、卡仕达或椰子布丁（haupia）。麻糬甜甜圈使用糯米粉制成，外酥内糯的QQ口感搭配缤纷的糖霜。两者都是夏威夷的人气甜点，在威基基的科纳咖啡甜甜圈店可以一站式品尝。',
    },
    table: {
      title: '对比一览表',
      headers: ['类别', '马拉萨达', '麻糬甜甜圈'],
      rows: [
        ['起源', '葡萄牙经夏威夷（1800年代）', '日本/韩国融合（2020年代）'],
        ['面粉', '小麦面粉', '糯米粉'],
        ['口感', '蓬松、轻盈', '外酥内糯（QQ）'],
        ['形状', '圆球形', '8连环形'],
        ['外层', '滚砂糖', '蘸糖霜'],
        ['内馅', '奶油、卡仕达、椰子布丁', '通常无'],
        ['适合场景', '温暖治愈的甜食', '适合拍照的潮流甜点'],
        ['价格区间', '$3 ~ $5', '$3.50 ~ $5'],
      ],
    },
    malasadaCase: {
      title: '马拉萨达的魅力',
      p1: '马拉萨达不仅仅是一个甜甜圈，它是夏威夷历史的一部分。1800年代后期，葡萄牙移民来到夏威夷在甘蔗种植园工作，带来了油炸裹糖面团的传统，这后来成为夏威夷最具标志性的甜点之一。"马拉萨达"一词源自葡萄牙语"未熟"，形容那柔软、几乎融化的中心部分。',
      p2: '1952年在瓦胡岛开业的Leonard\'s Bakery将马拉萨达在现代夏威夷发扬光大，至今仍是游客和当地人的朝圣地。马拉萨达的魅力在于它的简单：面粉、鸡蛋、黄油、糖和酵母，炸至金黄色后趁热裹上砂糖。外层轻微的酥脆过渡到令人难以置信的轻盈蓬松内部，入口即化。',
      p3: '现代马拉萨达已经超越了经典的砂糖外衣。从椰子布丁（haupia）、百香果卡仕达、巴伐利亚奶油到紫薯内馅都有。趁热吃——最好是刚出锅几分钟内——马拉萨达就是可以吃的温暖幸福。在威基基的清晨咬一口刚炸好的马拉萨达，砂糖粘在指尖，蒸汽从柔软的中心升起，这种体验无与伦比。',
    },
    mochiCase: {
      title: '麻糬甜甜圈的魅力',
      p1: '如果马拉萨达代表旧世界的传统，那麻糬甜甜圈就是新浪潮。它诞生于日本麻糬文化和美国甜甜圈创新的融合，使用糯米粉而非小麦面粉。结果是一种与众不同的口感：外面酥脆微微爆裂，内部弹牙有嚼劲——粉丝们称之为"QQ"，这是借自台湾饮食文化的词汇，形容那种令人满足的弹性。',
      p2: '独特的8连球环形不仅是为了好看。每个球都恰好是一口的大小，可以一个个掰下来吃，球与球之间的凹槽会积满缤纷的糖霜。口味方面更是创意无限：从经典原味和巧克力到紫薯（ube）、抹茶、黑芝麻、芋头、芒果，每种口味的人都能找到自己的最爱。',
      p3: '我们的合作品牌MOCHILAND以12种以上的季节限定口味将麻糬甜甜圈提升为一种艺术。每一个都是小批量手工制作，确保最佳新鲜度。社交媒体上的话题度不言而喻，但真正的魅力在于味道。一旦体验过外酥内糯的QQ口感，你就会明白为什么麻糬甜甜圈从小众潮流变成了夏威夷乃至全球的必吃美食。',
    },
    whyNotBoth: {
      title: '为什么不两个都尝？',
      p1: '这里有一个只有科纳咖啡甜甜圈才能分享的秘密——你根本不需要二选一。我们是威基基为数不多的既能点到热腾腾的马拉萨达，又能吃到新鲜糖霜麻糬甜甜圈的店铺之一。把两种完全不同的甜甜圈体验放在一起比较，本身就是最大的乐趣。',
      p2: '我们推荐"甜甜圈品鉴组合"：选一个马拉萨达（推荐经典砂糖款或椰子布丁夹心）和一个麻糬甜甜圈（第一次尝试推荐紫薯或抹茶），再搭配一杯我们的100%科纳咖啡。浓郁顺滑的科纳咖啡完美地平衡了两种甜甜圈的甜度，创造出超越总和的美妙体验。',
      p3: '无论你是第一次来夏威夷的游客还是回头客，马拉萨达对麻糬甜甜圈的争论都可以在我们店里亲自了结。叫上朋友，两种都点，看看你站哪边——或者像我们大多数顾客一样，决定两者都值得成为人生常客。',
    },
    verdict: {
      title: '最终结论',
      text: '没有错误的选择。马拉萨达蓬松的温暖触动心灵，麻糬甜甜圈QQ的酥脆愉悦感官。但真正的最佳选择？在我们威基基店里配上一杯科纳咖啡，把两种甜甜圈放在一起品尝。这是只有亲临才能进行的比较，也是让夏威夷之旅难以忘怀的那种早晨。',
    },
    faq: {
      title: '常见问题',
      items: [
        {
          q: '马拉萨达和麻糬甜甜圈有什么区别？',
          a: '马拉萨达是葡萄牙式炸面团，用小麦面粉制成，裹砂糖的球形，有时有奶油或卡仕达馅。麻糬甜甜圈用糯米粉制成，独特的外酥内糯QQ口感，8连球环形，蘸缤纷糖霜。',
        },
        {
          q: '麻糬甜甜圈是无麸质的吗？',
          a: '用100%糯米粉制作的传统麻糬甜甜圈天然无麸质。但有些配方会混合小麦面粉，请务必向店家确认。在科纳咖啡甜甜圈，我们可以为您介绍每种口味的配料。',
        },
        {
          q: '在威基基哪里可以同时吃到马拉萨达和麻糬甜甜圈？',
          a: '威基基卡拉卡瓦大道2142号的科纳咖啡甜甜圈同时供应新鲜马拉萨达和MOCHILAND麻糬甜甜圈，还有檀香山咖啡的100%科纳咖啡。是少数能一站式品尝两者的地方。',
        },
        {
          q: 'QQ口感是什么意思？',
          a: 'QQ是源自台湾饮食文化的术语，形容有嚼劲、弹牙、有弹性的口感。在麻糬甜甜圈中，指糯米粉带来的外酥内弹的独特口感。',
        },
        {
          q: '在夏威夷，马拉萨达和麻糬甜甜圈哪个更受欢迎？',
          a: '马拉萨达有着追溯到1800年代的深厚历史根基，是经久不衰的经典。麻糬甜甜圈是2020年代以来人气飙升的新现象。两者都非常受欢迎——取决于你更喜欢传统还是潮流。',
        },
      ],
    },
    cta: {
      title: '亲自来下结论吧',
      text: '访问威基基2142 Kalakaua Ave的科纳咖啡甜甜圈。两种都尝尝，看哪种夏威夷甜甜圈俘获你的心。',
      buttonMenu: '查看菜单',
      buttonDirections: '获取路线',
    },
    links: {
      malasadaMenu: '马拉萨达菜单',
      mochiMenu: '麻糬甜甜圈菜单',
      malasadaHawaii: '马拉萨达夏威夷指南',
      mochiWaikiki: '麻糬甜甜圈威基基',
    },
  },
};

/* -------------------------------------------------------------------------- */
/*  Structured Data                                                           */
/* -------------------------------------------------------------------------- */

const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Malasada vs Mochi Donut: Which Hawaiian Treat Should You Try?',
  description:
    'A side-by-side comparison of malasadas and mochi donuts — two iconic Hawaiian treats. History, texture, flavor, and where to try both in Waikiki.',
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
      url: 'https://www.konacoffeedonut.com/favicon.svg',
    },
  },
  datePublished: '2026-04-14',
  dateModified: '2026-04-14',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.konacoffeedonut.com/en/blog/malasada-vs-mochi-donut',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between a malasada and a mochi donut?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A malasada is a Portuguese-style fried dough ball made with wheat flour, rolled in sugar, and sometimes filled with cream or custard. A mochi donut is made with glutinous rice flour (mochiko), giving it a distinctive chewy-crispy QQ texture, and is shaped like a ring of 8 connected balls dipped in colorful glaze.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are mochi donuts gluten-free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional mochi donuts made with 100% mochiko (glutinous rice flour) are naturally gluten-free. However, some recipes blend rice flour with wheat flour, so always check with the shop.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I get both malasadas and mochi donuts in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut at 2142 Kalakaua Ave in Waikiki serves both fresh malasadas and MOCHILAND mochi donuts alongside premium 100% Kona coffee from Honolulu Coffee.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does QQ texture mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'QQ is a term from Taiwanese food culture that describes a chewy, bouncy, springy texture. In mochi donuts, it refers to the satisfying chewiness created by glutinous rice flour — crispy on the outside and stretchy on the inside.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is more popular in Hawaii — malasadas or mochi donuts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Malasadas have deeper historical roots in Hawaii dating back to the 1800s and remain a beloved classic. Mochi donuts are a newer phenomenon that has surged in popularity since the early 2020s. Both are hugely popular.',
      },
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Fade-in helper                                                            */
/* -------------------------------------------------------------------------- */

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55 },
  viewport: { once: true },
};

/* -------------------------------------------------------------------------- */
/*  Page Component                                                            */
/* -------------------------------------------------------------------------- */

export default function MalasadaVsMochiDonutPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = content[locale as keyof typeof content] || content.en;

  return (
    <>
      {/* ---- JSON-LD ---- */}
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

      <main className="min-h-screen bg-white">
      <SubpageNav locale={locale} />
      
      {/* Hero Image */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/images/blog/malasada-vs-mochi-donut.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      </div>
        {/* ================================================================ */}
        {/*  HERO — split amber / pink-purple                                */}
        {/* ================================================================ */}
        <section className="relative overflow-hidden">
          {/* Split background */}
          <div className="absolute inset-0 flex">
            <div className="w-1/2 bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900" />
            <div className="w-1/2 bg-gradient-to-bl from-pink-500 via-purple-600 to-purple-800" />
          </div>
          {/* Decorative diagonal line */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-px h-[120%] bg-white/20 rotate-12" />
          </div>

          <div className="relative z-10 py-20 md:py-28 px-4 text-center text-white max-w-4xl mx-auto">
            <motion.p
              className="text-sm uppercase tracking-widest opacity-70 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.5 }}
            >
              {t.hero.updated}
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {t.hero.subtitle}
            </motion.p>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  QUICK ANSWER (featured-snippet optimized)                       */}
        {/* ================================================================ */}
        <section className="py-12 px-4 max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 md:p-8">
            <h2 className="text-lg font-bold text-amber-900 mb-2 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500" />
              {t.quickAnswer.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{t.quickAnswer.text}</p>
          </motion.div>
        </section>

        {/* ================================================================ */}
        {/*  COMPARISON TABLE                                                */}
        {/* ================================================================ */}
        <section className="py-12 px-4 max-w-4xl mx-auto">
          <motion.h2
            {...fadeUp}
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900"
          >
            {t.table.title}
          </motion.h2>

          <motion.div {...fadeUp} className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
            <table className="w-full text-left text-sm md:text-base">
              <thead>
                <tr>
                  <th className="bg-gray-100 px-4 py-3 font-semibold text-gray-700">
                    {t.table.headers[0]}
                  </th>
                  <th className="bg-amber-100 px-4 py-3 font-semibold text-amber-900">
                    {t.table.headers[1]}
                  </th>
                  <th className="bg-purple-100 px-4 py-3 font-semibold text-purple-900">
                    {t.table.headers[2]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.table.rows.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-4 py-3 font-medium text-gray-800">{row[0]}</td>
                    <td className="px-4 py-3 text-amber-800">{row[1]}</td>
                    <td className="px-4 py-3 text-purple-800">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </section>

        {/* ================================================================ */}
        {/*  THE CASE FOR MALASADAS                                          */}
        {/* ================================================================ */}
        <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900">
                {t.malasadaCase.title}
              </h2>
            </motion.div>
            <motion.p {...fadeUp} className="text-gray-700 leading-relaxed mb-4">
              {t.malasadaCase.p1}
            </motion.p>
            <motion.p {...fadeUp} className="text-gray-700 leading-relaxed mb-4">
              {t.malasadaCase.p2}
            </motion.p>
            <motion.p {...fadeUp} className="text-gray-700 leading-relaxed">
              {t.malasadaCase.p3}
            </motion.p>
            <motion.div {...fadeUp} className="mt-6">
              <Link
                href={`/${locale}/menu/malasada`}
                className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-900 transition-colors"
              >
                {t.links.malasadaMenu} <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="mx-3 text-gray-300">|</span>
              <Link
                href={`/${locale}/malasada-hawaii`}
                className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:text-amber-900 transition-colors"
              >
                {t.links.malasadaHawaii} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  THE CASE FOR MOCHI DONUTS                                       */}
        {/* ================================================================ */}
        <section className="py-16 px-4 bg-gradient-to-bl from-pink-50 to-purple-50">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-purple-900">
                {t.mochiCase.title}
              </h2>
            </motion.div>
            <motion.p {...fadeUp} className="text-gray-700 leading-relaxed mb-4">
              {t.mochiCase.p1}
            </motion.p>
            <motion.p {...fadeUp} className="text-gray-700 leading-relaxed mb-4">
              {t.mochiCase.p2}
            </motion.p>
            <motion.p {...fadeUp} className="text-gray-700 leading-relaxed">
              {t.mochiCase.p3}
            </motion.p>
            <motion.div {...fadeUp} className="mt-6">
              <Link
                href={`/${locale}/menu/mochi-donuts`}
                className="inline-flex items-center gap-2 text-purple-700 font-semibold hover:text-purple-900 transition-colors"
              >
                {t.links.mochiMenu} <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="mx-3 text-gray-300">|</span>
              <Link
                href={`/${locale}/mochi-donuts-waikiki`}
                className="inline-flex items-center gap-2 text-purple-700 font-semibold hover:text-purple-900 transition-colors"
              >
                {t.links.mochiWaikiki} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  WHY NOT BOTH?                                                   */}
        {/* ================================================================ */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeUp} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-purple-500 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t.whyNotBoth.title}
              </h2>
            </motion.div>
            <motion.p {...fadeUp} className="text-gray-700 leading-relaxed mb-4">
              {t.whyNotBoth.p1}
            </motion.p>
            <motion.p {...fadeUp} className="text-gray-700 leading-relaxed mb-4">
              {t.whyNotBoth.p2}
            </motion.p>
            <motion.p {...fadeUp} className="text-gray-700 leading-relaxed">
              {t.whyNotBoth.p3}
            </motion.p>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  THE VERDICT                                                     */}
        {/* ================================================================ */}
        <section className="py-16 px-4">
          <motion.div
            {...fadeUp}
            className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="flex h-2">
              <div className="w-1/2 bg-amber-500" />
              <div className="w-1/2 bg-purple-500" />
            </div>
            <div className="bg-gray-50 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.verdict.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{t.verdict.text}</p>
            </div>
          </motion.div>
        </section>

        {/* ================================================================ */}
        {/*  FAQ                                                             */}
        {/* ================================================================ */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              {...fadeUp}
              className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10"
            >
              {t.faq.title}
            </motion.h2>
            <div className="space-y-6">
              {t.faq.items.map((item, i) => (
                <motion.details
                  key={i}
                  {...fadeUp}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 open:shadow-md transition-shadow"
                >
                  <summary className="cursor-pointer px-6 py-4 font-semibold text-gray-800 list-none flex items-start justify-between gap-4">
                    <span>{item.q}</span>
                    <ArrowRight className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0 rotate-90 transition-transform [details[open]_&]:rotate-[-90deg]" />
                  </summary>
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">{item.a}</div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/*  CTA                                                             */}
        {/* ================================================================ */}
        <section className="py-16 px-4 bg-gradient-to-r from-amber-600 via-orange-500 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              {...fadeUp}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {t.cta.title}
            </motion.h2>
            <motion.p {...fadeUp} className="text-xl mb-8 opacity-90">
              {t.cta.text}
            </motion.p>
            <motion.div {...fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/menu`}
                className="inline-block bg-white text-orange-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-100 transition-colors"
              >
                {t.cta.buttonMenu}
              </Link>
              <a
                href="https://maps.google.com/?q=2142+Kalakaua+Ave+Honolulu+HI+96815"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white/20 backdrop-blur text-white border-2 border-white/50 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-colors"
              >
                {t.cta.buttonDirections}
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
