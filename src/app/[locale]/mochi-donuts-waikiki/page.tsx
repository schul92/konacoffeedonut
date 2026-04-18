'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Script from 'next/script';
import { MapPin, Clock, Sparkles, Cookie, Coffee, Star, ChevronRight } from 'lucide-react';
import JoinTeamCTA from '@/components/JoinTeamCTA';

const content = {
  en: {
    hero: {
      badge: 'MOCHILAND x Kona Coffee Donut',
      title: 'Mochi Donuts in Waikiki',
      subtitle: 'Freshly made daily with MOCHILAND — the viral mochi donut brand with 50+ US locations. Chewy, crispy, irresistible.',
      cta: 'View Our Menu',
    },
    whatAre: {
      title: 'What Are Mochi Donuts?',
      p1: 'Mochi donuts are a modern twist on the traditional donut, made with mochiko (sweet rice flour) that gives them their signature chewy-crispy texture. Unlike regular donuts, mochi donuts have a delightfully springy, QQ texture inside with a satisfying crunch on the outside.',
      p2: 'Born from Japanese mochi culture and Hawaiian creativity, mochi donuts represent the perfect fusion of East and West. The iconic ring shape made of connected balls has become one of the most recognizable — and Instagrammable — treats in the world.',
      p3: 'Mochi donuts went viral across social media for their unique texture and stunning flavors, and now they\'re a must-try for every visitor to Hawaii. At Kona Coffee Donut, we partner with MOCHILAND to bring you the very best mochi donuts in Waikiki.',
    },
    whyBest: {
      title: "Why Our Mochi Donuts Are Waikiki's Best",
      points: [
        {
          title: 'Powered by MOCHILAND',
          description: 'We partner with MOCHILAND, a leading mochi donut brand with 50+ locations across the US. Their perfected recipes and premium ingredients mean every donut is consistently amazing.',
        },
        {
          title: 'Made In-Store Daily',
          description: 'Our mochi donuts are made fresh every single day right here in our Waikiki kitchen. No frozen dough, no shipping from a factory — just warm, fresh mochi donuts.',
        },
        {
          title: '12+ Rotating Flavors',
          description: 'From classic favorites to seasonal surprises, we offer over 12 rotating flavors. There\'s always something new to try when you visit.',
        },
        {
          title: 'Steps from Waikiki Beach',
          description: 'Located on Kalakaua Avenue, we\'re the most convenient spot to grab mochi donuts before or after the beach.',
        },
      ],
    },
    flavors: {
      title: 'Our Mochi Donut Flavors',
      subtitle: '12+ flavors rotating daily — here are some fan favorites',
      items: [
        { name: 'Ube', description: 'Purple yam glaze — rich, earthy, and vibrant. A Filipino-Hawaiian fan favorite.', tag: 'Best Seller' },
        { name: 'Matcha', description: 'Premium Japanese green tea glaze with a bittersweet finish. Perfect with Kona coffee.', tag: 'Popular' },
        { name: 'Black Sesame', description: 'Nutty, roasted sesame glaze with deep umami flavor. Uniquely addictive.', tag: '' },
        { name: 'Strawberry', description: 'Sweet strawberry glaze with real fruit flavor. Light, fruity, and refreshing.', tag: 'Popular' },
        { name: 'Churro', description: 'Cinnamon-sugar coated with a warm, toasty crunch. Like a churro, but chewy.', tag: '' },
        { name: 'Cookies & Cream', description: 'Crushed Oreo cookie pieces on vanilla glaze. A crowd favorite for all ages.', tag: 'Best Seller' },
        { name: 'Taro', description: 'Hawaiian taro root glaze — subtly sweet with a beautiful lavender hue.', tag: '' },
        { name: 'Seasonal Specials', description: 'Limited-edition flavors that change with the seasons. Follow us for the latest drops!', tag: 'Limited' },
      ],
    },
    pairing: {
      title: 'The Perfect Pairing',
      combos: [
        {
          title: 'Mochi Donut + Kona Coffee',
          description: 'The ultimate Waikiki combo. The rich, smooth taste of 100% Kona coffee perfectly complements the sweet, chewy texture of our mochi donuts. A match made in Hawaii.',
        },
        {
          title: 'Mochi Donut + Bingsu',
          description: 'For the ultimate dessert experience, pair a mochi donut with our Korean-style shaved ice bingsu. The warm, chewy donut against the cold, fluffy bingsu is pure magic.',
        },
      ],
    },
    comparison: {
      title: 'Mochi Donuts vs Regular Donuts',
      headers: ['', 'Mochi Donut', 'Regular Donut'],
      rows: [
        ['Texture', 'Chewy & crispy (QQ)', 'Soft & fluffy'],
        ['Main flour', 'Mochiko (rice flour)', 'Wheat flour'],
        ['Shape', 'Connected ball ring', 'Classic ring or filled'],
        ['Origin', 'Japanese-Hawaiian fusion', 'European/American'],
        ['Gluten', 'Naturally gluten-friendly*', 'Contains gluten'],
        ['Viral factor', 'Highly Instagrammable', 'Classic comfort'],
      ],
      footnote: '*Made in a shared kitchen. Not certified gluten-free.',
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'What are mochi donuts made of?',
          a: 'Mochi donuts are made primarily with mochiko (sweet rice flour), which gives them their distinctive chewy texture. Combined with tapioca starch and other ingredients, they create the perfect balance of crispy outside and soft, springy inside.',
        },
        {
          q: 'Are mochi donuts gluten-free?',
          a: 'Our mochi donuts are made with rice flour rather than wheat flour, making them naturally gluten-friendly. However, they are prepared in a shared kitchen, so we cannot guarantee they are 100% gluten-free for those with severe allergies or celiac disease.',
        },
        {
          q: 'Where can I get mochi donuts in Waikiki?',
          a: 'Kona Coffee Donut at 2142 Kalakaua Ave offers the freshest mochi donuts in Waikiki, made daily in partnership with MOCHILAND. We\'re located right on Kalakaua Avenue, steps from Waikiki Beach.',
        },
        {
          q: 'How many mochi donut flavors do you have?',
          a: 'We offer 12+ rotating flavors including Ube, Matcha, Black Sesame, Strawberry, Churro, Cookies & Cream, and Taro, plus seasonal specials that change regularly.',
        },
        {
          q: 'What makes mochi donuts different from regular donuts?',
          a: 'Mochi donuts use rice flour instead of wheat flour, giving them a unique chewy-crispy "QQ" texture. They\'re shaped as connected balls in a ring and originated from Japanese mochi culture fused with Hawaiian-American donut tradition.',
        },
      ],
    },
    cta: {
      title: 'Try Waikiki\'s Best Mochi Donuts',
      address: '2142 Kalakaua Ave, Waikiki',
      opening: 'Opening Late April 2026',
      note: 'Fresh mochi donuts + premium Kona coffee — the ultimate Waikiki treat.',
      button: 'Get Directions',
    },
  },
  ja: {
    hero: {
      badge: 'MOCHILAND x コナコーヒードーナツ',
      title: 'ワイキキのモチドーナツ',
      subtitle: '全米50店舗以上を展開するMOCHILANDとのコラボレーション。毎日店内で手作り。外はカリッと、中はもちもち — 一度食べたら忘れられない食感。',
      cta: 'メニューを見る',
    },
    whatAre: {
      title: 'モチドーナツとは？',
      p1: 'モチドーナツは、もち粉（餅粉・甘い米粉）を使用した新感覚のドーナツです。従来のドーナツとは全く異なり、外はカリッと香ばしく、中はもちもちとした弾力のある「QQ食感」が特徴。日本のお餅の食感をそのままドーナツに閉じ込めました。',
      p2: '日本の餅文化とハワイのクリエイティビティが融合して生まれたモチドーナツは、東西の食文化が出会った最高傑作です。小さな球体がつながったリング型の愛らしいフォルムは、今やSNSで世界中に広がり、最もフォトジェニックなスイーツの一つとして知られています。',
      p3: 'その唯一無二の食感と映えるビジュアルでSNSを席巻したモチドーナツは、今やハワイ旅行の必食グルメ。コナコーヒードーナツでは、全米で高い評価を受けるMOCHILANDと提携し、ワイキキで最高品質のモチドーナツをお届けします。',
    },
    whyBest: {
      title: 'ワイキキ最高のモチドーナツの理由',
      points: [
        {
          title: 'MOCHILANDとの提携',
          description: '全米50店舗以上を展開する人気モチドーナツブランド「MOCHILAND」と提携。長年培われたレシピと厳選素材で、常にハイクオリティなモチドーナツをご提供します。',
        },
        {
          title: '毎日店内で手作り',
          description: 'ワイキキの店内キッチンで毎日一つひとつ丁寧に手作り。冷凍生地や工場製品は一切使用していません。焼きたて・揚げたてのモチドーナツをお楽しみください。',
        },
        {
          title: '12種類以上の豊富なフレーバー',
          description: '定番の人気フレーバーから季節限定の特別フレーバーまで、常時12種類以上をご用意。来るたびに新しい味に出会えます。',
        },
        {
          title: 'ワイキキビーチ目の前',
          description: 'カラカウア通り沿い、ワイキキビーチから徒歩すぐの好立地。ビーチの前後に気軽にお立ち寄りいただけます。',
        },
      ],
    },
    flavors: {
      title: 'モチドーナツ フレーバー',
      subtitle: '日替わりで12種類以上をご用意 — 人気フレーバーのご紹介',
      items: [
        { name: '紫芋（ウベ）', description: 'フィリピン産紫芋の濃厚なグレーズ。深い甘みと鮮やかな紫色が美しい一品。', tag: '一番人気' },
        { name: '抹茶', description: '上質な日本産抹茶を使用したグレーズ。ほろ苦い風味がコナコーヒーと絶妙にマッチ。', tag: '人気' },
        { name: '黒ごま', description: '焙煎黒ごまの香ばしいグレーズ。深い旨みとナッツのような風味が癖になる一品。', tag: '' },
        { name: 'ストロベリー', description: 'フレッシュないちごのグレーズ。甘酸っぱくて爽やかな味わい。', tag: '人気' },
        { name: 'チュロス', description: 'シナモンシュガーをまとった温かみのある味わい。チュロスの美味しさをもちもち食感で。', tag: '' },
        { name: 'クッキー＆クリーム', description: 'バニラグレーズにオレオクッキーをトッピング。お子様から大人まで大人気。', tag: '一番人気' },
        { name: 'タロ', description: 'ハワイ産タロイモのグレーズ。優しい甘さと美しいラベンダー色が特徴。', tag: '' },
        { name: '季節限定スペシャル', description: '季節ごとに変わる限定フレーバー。最新情報はSNSでチェック！', tag: '限定' },
      ],
    },
    pairing: {
      title: '至福の組み合わせ',
      combos: [
        {
          title: 'モチドーナツ + コナコーヒー',
          description: 'ワイキキ最強の組み合わせ。100%コナコーヒーの豊かでまろやかな味わいが、モチドーナツのもちもち甘い食感と絶妙にマッチ。ハワイでしか味わえない至福のペアリングです。',
        },
        {
          title: 'モチドーナツ + ビンス',
          description: '究極のデザート体験。もちもちのモチドーナツと、ふわふわの韓国式かき氷ビンスの組み合わせ。温かいドーナツと冷たいかき氷のコントラストが絶品です。',
        },
      ],
    },
    comparison: {
      title: 'モチドーナツ vs 普通のドーナツ',
      headers: ['', 'モチドーナツ', '普通のドーナツ'],
      rows: [
        ['食感', 'もちもち＆カリカリ（QQ食感）', 'ふわふわ＆柔らか'],
        ['主な粉', 'もち粉（米粉）', '小麦粉'],
        ['形状', '球体がつながったリング型', 'クラシックなリング型'],
        ['起源', '日本×ハワイのフュージョン', 'ヨーロッパ・アメリカ'],
        ['グルテン', 'グルテンフリー寄り*', 'グルテン含有'],
        ['映え度', 'SNS映え抜群', '定番の安心感'],
      ],
      footnote: '*共有キッチンで調理しています。グルテンフリー認証ではありません。',
    },
    faq: {
      title: 'よくあるご質問',
      items: [
        {
          q: 'モチドーナツの原材料は何ですか？',
          a: 'モチドーナツの主原料はもち粉（餅粉・甘い米粉）です。タピオカ澱粉などと組み合わせることで、外はカリッと中はもちもちの絶妙な食感を実現しています。日本の伝統的なお餅の食感を活かした新感覚スイーツです。',
        },
        {
          q: 'モチドーナツはグルテンフリーですか？',
          a: '当店のモチドーナツは小麦粉ではなく米粉を使用しているため、グルテンフリー寄りの製品です。ただし、共有キッチンで調理しているため、重度のアレルギーやセリアック病をお持ちの方には100%グルテンフリーを保証することはできません。',
        },
        {
          q: 'ワイキキでモチドーナツはどこで買えますか？',
          a: 'カラカウア通り2142番地のコナコーヒードーナツでは、MOCHILANDと提携して毎日新鮮なモチドーナツを手作りしています。ワイキキビーチから徒歩すぐの好立地です。',
        },
        {
          q: 'モチドーナツは何種類ありますか？',
          a: '紫芋、抹茶、黒ごま、ストロベリー、チュロス、クッキー＆クリーム、タロなど、常時12種類以上のフレーバーをご用意しています。季節限定フレーバーも定期的に登場します。',
        },
        {
          q: 'モチドーナツと普通のドーナツの違いは何ですか？',
          a: 'モチドーナツは小麦粉ではなく米粉（もち粉）を使用しているため、独特のもちもち＆カリカリの「QQ食感」が楽しめます。球体がつながったリング型のフォルムも特徴で、日本の餅文化とハワイ・アメリカのドーナツ文化が融合して生まれました。',
        },
      ],
    },
    cta: {
      title: 'ワイキキ最高のモチドーナツを体験',
      address: '2142 Kalakaua Ave, ワイキキ',
      opening: '2026年4月下旬グランドオープン',
      note: '焼きたてモチドーナツ + プレミアムコナコーヒー — ワイキキの至福スイーツ。',
      button: '道順を見る',
    },
  },
  ko: {
    hero: {
      badge: 'MOCHILAND x 코나커피도넛',
      title: '와이키키 모찌 도넛',
      subtitle: '미국 전역 50개 이상 매장의 MOCHILAND와 함께 매일 매장에서 직접 만듭니다. 쫄깃하고 바삭한 식감, 한번 먹으면 멈출 수 없는 맛.',
      cta: '메뉴 보기',
    },
    whatAre: {
      title: '모찌 도넛이란?',
      p1: '모찌 도넛은 찹쌀가루(모치코)를 사용해 만든 새로운 감각의 도넛입니다. 일반 도넛과는 완전히 다른, 겉은 바삭하고 속은 쫄깃한 독특한 식감이 특징입니다.',
      p2: '일본의 떡 문화와 하와이의 창의성이 만나 탄생한 모찌 도넛은 동서양 식문화의 완벽한 퓨전입니다. 작은 공 모양이 연결된 링 형태의 귀여운 모양은 SNS에서 전 세계적으로 화제를 모았습니다.',
      p3: '독특한 식감과 아름다운 비주얼로 SNS에서 바이럴된 모찌 도넛은 하와이 여행 필수 먹거리입니다. 코나커피도넛에서는 MOCHILAND와 파트너십을 통해 와이키키 최고의 모찌 도넛을 선보입니다.',
    },
    whyBest: {
      title: '와이키키 최고의 모찌 도넛인 이유',
      points: [
        {
          title: 'MOCHILAND 파트너십',
          description: '미국 전역 50개 이상 매장을 운영하는 인기 모찌 도넛 브랜드 MOCHILAND와 제휴. 검증된 레시피와 프리미엄 재료로 최고의 품질을 보장합니다.',
        },
        {
          title: '매일 매장에서 직접 제조',
          description: '와이키키 매장 주방에서 매일 직접 만듭니다. 냉동 반죽이나 공장 제품은 사용하지 않습니다. 갓 만든 따뜻한 모찌 도넛을 즐기세요.',
        },
        {
          title: '12가지 이상 다양한 맛',
          description: '인기 정규 맛부터 시즌 한정 맛까지, 항상 12가지 이상의 맛을 준비합니다. 방문할 때마다 새로운 맛을 발견하세요.',
        },
        {
          title: '와이키키 비치 바로 앞',
          description: '칼라카우아 애비뉴에 위치, 와이키키 비치에서 도보 거리. 해변 전후로 편하게 방문하세요.',
        },
      ],
    },
    flavors: {
      title: '모찌 도넛 맛 소개',
      subtitle: '매일 12가지 이상 로테이션 — 인기 맛을 소개합니다',
      items: [
        { name: '우베', description: '필리핀산 보라색 고구마 글레이즈. 깊은 단맛과 선명한 보라색이 매력적.', tag: '베스트셀러' },
        { name: '말차', description: '프리미엄 일본산 말차 글레이즈. 쌉싸름한 풍미가 코나 커피와 찰떡궁합.', tag: '인기' },
        { name: '흑임자', description: '볶은 검은깨 글레이즈. 고소하고 깊은 풍미가 중독성 있는 맛.', tag: '' },
        { name: '딸기', description: '상큼한 딸기 글레이즈. 달콤 새콤하고 상쾌한 맛.', tag: '인기' },
        { name: '츄러스', description: '시나몬 슈가 코팅의 따뜻한 맛. 츄러스의 맛을 쫄깃한 식감으로.', tag: '' },
        { name: '쿠키앤크림', description: '바닐라 글레이즈에 오레오 쿠키 토핑. 남녀노소 모두 좋아하는 맛.', tag: '베스트셀러' },
        { name: '타로', description: '하와이산 타로 글레이즈. 은은한 단맛과 아름다운 라벤더 색상.', tag: '' },
        { name: '시즌 스페셜', description: '계절마다 바뀌는 한정 맛. 최신 소식은 SNS에서 확인하세요!', tag: '한정' },
      ],
    },
    pairing: {
      title: '환상의 조합',
      combos: [
        {
          title: '모찌 도넛 + 코나 커피',
          description: '와이키키 최고의 조합. 100% 코나 커피의 풍부하고 부드러운 맛이 모찌 도넛의 쫄깃달콤한 식감과 완벽하게 어울립니다. 하와이에서만 즐길 수 있는 특별한 페어링.',
        },
        {
          title: '모찌 도넛 + 빙수',
          description: '궁극의 디저트 경험. 따뜻한 모찌 도넛과 차가운 한국식 빙수의 조합. 온도 대비가 만들어내는 환상적인 맛의 하모니.',
        },
      ],
    },
    comparison: {
      title: '모찌 도넛 vs 일반 도넛',
      headers: ['', '모찌 도넛', '일반 도넛'],
      rows: [
        ['식감', '쫄깃 & 바삭 (QQ식감)', '폭신 & 부드러움'],
        ['주재료', '찹쌀가루 (모치코)', '밀가루'],
        ['모양', '공 모양 연결 링', '클래식 링 또는 필링'],
        ['기원', '일본-하와이 퓨전', '유럽/미국'],
        ['글루텐', '글루텐 프리 성향*', '글루텐 함유'],
        ['SNS 인기', '인스타 감성 최고', '클래식한 편안함'],
      ],
      footnote: '*공유 주방에서 조리됩니다. 글루텐프리 인증은 아닙니다.',
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        {
          q: '모찌 도넛은 무엇으로 만드나요?',
          a: '모찌 도넛의 주재료는 모치코(찹쌀가루)입니다. 타피오카 전분 등과 결합하여 겉은 바삭하고 속은 쫄깃한 독특한 식감을 만들어냅니다.',
        },
        {
          q: '모찌 도넛은 글루텐프리인가요?',
          a: '저희 모찌 도넛은 밀가루 대신 쌀가루를 사용하여 글루텐 프리 성향의 제품입니다. 다만, 공유 주방에서 조리하므로 심각한 알레르기나 셀리악병이 있으신 분께는 100% 글루텐프리를 보장할 수 없습니다.',
        },
        {
          q: '와이키키에서 모찌 도넛은 어디서 살 수 있나요?',
          a: '칼라카우아 애비뉴 2142번지 코나커피도넛에서 MOCHILAND와 함께 매일 신선한 모찌 도넛을 만듭니다. 와이키키 비치에서 도보 거리입니다.',
        },
        {
          q: '모찌 도넛 맛은 몇 가지인가요?',
          a: '우베, 말차, 흑임자, 딸기, 츄러스, 쿠키앤크림, 타로 등 항상 12가지 이상의 맛을 준비하고 있으며, 시즌 한정 맛도 정기적으로 출시됩니다.',
        },
        {
          q: '모찌 도넛과 일반 도넛의 차이점은 무엇인가요?',
          a: '모찌 도넛은 밀가루 대신 찹쌀가루(모치코)를 사용하여 독특한 쫄깃바삭한 "QQ식감"이 특징입니다. 공 모양이 연결된 링 형태로, 일본 떡 문화와 하와이-미국 도넛 문화가 융합되어 탄생했습니다.',
        },
      ],
    },
    cta: {
      title: '와이키키 최고의 모찌 도넛을 만나보세요',
      address: '2142 Kalakaua Ave, 와이키키',
      opening: '2026년 4월 말 그랜드 오픈',
      note: '갓 만든 모찌 도넛 + 프리미엄 코나 커피 — 와이키키 최고의 디저트.',
      button: '길찾기',
    },
  },
  zh: {
    hero: {
      badge: 'MOCHILAND x 科纳咖啡甜甜圈',
      title: '威基基麻糬甜甜圈',
      subtitle: '与全美50+门店的MOCHILAND合作，每日店内新鲜手工制作。外酥内糯，一口上瘾。',
      cta: '查看菜单',
    },
    whatAre: {
      title: '什么是麻糬甜甜圈？',
      p1: '麻糬甜甜圈使用糯米粉（日本称为"餅粉"）制作，拥有独特的外酥内糯口感。与传统甜甜圈完全不同，麻糬甜甜圈内部有弹性十足的QQ口感，外层则是令人满足的酥脆。',
      p2: '麻糬甜甜圈诞生于日本麻糬文化与夏威夷创意的融合，是东西方美食的完美碰撞。由小球体串联成环形的标志性造型，已成为全球社交媒体上最受欢迎的甜点之一。',
      p3: '凭借独特口感和惊艳外观在社交媒体上爆红后，麻糬甜甜圈已成为夏威夷旅行的必尝美食。科纳咖啡甜甜圈与MOCHILAND合作，为您呈献威基基最好的麻糬甜甜圈。',
    },
    whyBest: {
      title: '为什么我们的麻糬甜甜圈是威基基最好的',
      points: [
        {
          title: 'MOCHILAND合作',
          description: '我们与在全美拥有50+门店的知名麻糬甜甜圈品牌MOCHILAND合作。经过多年打磨的配方和优质食材，保证每一个甜甜圈的卓越品质。',
        },
        {
          title: '每日店内手工制作',
          description: '在威基基店内厨房每天新鲜制作。不使用冷冻面团，不从工厂运送——只有温暖新鲜的麻糬甜甜圈。',
        },
        {
          title: '12+种口味轮换',
          description: '从经典热门到季节限定，常备12种以上口味。每次来都能尝到新惊喜。',
        },
        {
          title: '威基基海滩近在咫尺',
          description: '位于卡拉卡瓦大道，距威基基海滩步行即达。去海滩前后随时可以来一个。',
        },
      ],
    },
    flavors: {
      title: '麻糬甜甜圈口味',
      subtitle: '每日12+种口味轮换——为您介绍人气口味',
      items: [
        { name: '紫薯（Ube）', description: '菲律宾紫薯酱。浓郁甘甜，色彩艳丽。', tag: '畅销' },
        { name: '抹茶', description: '优质日本抹茶酱。微苦回甘，与科纳咖啡绝配。', tag: '人气' },
        { name: '黑芝麻', description: '烘焙黑芝麻酱。香浓醇厚，让人欲罢不能。', tag: '' },
        { name: '草莓', description: '新鲜草莓酱。酸甜可口，清新怡人。', tag: '人气' },
        { name: '吉拿棒', description: '肉桂糖衣。温暖香甜，QQ版吉拿棒。', tag: '' },
        { name: '奥利奥', description: '香草酱配奥利奥碎。老少皆宜的经典口味。', tag: '畅销' },
        { name: '芋头', description: '夏威夷芋头酱。温柔甘甜，薰衣草色泽。', tag: '' },
        { name: '季节限定', description: '随季节变换的限定口味。关注我们的社交媒体获取最新消息！', tag: '限定' },
      ],
    },
    pairing: {
      title: '完美搭配',
      combos: [
        {
          title: '麻糬甜甜圈 + 科纳咖啡',
          description: '威基基的终极组合。100%科纳咖啡的醇厚顺滑与麻糬甜甜圈的糯甜口感完美融合。只有在夏威夷才能体验的绝妙搭配。',
        },
        {
          title: '麻糬甜甜圈 + 刨冰',
          description: '终极甜点体验。温热的麻糬甜甜圈搭配冰凉的韩式刨冰。冷热交织，口感神奇。',
        },
      ],
    },
    comparison: {
      title: '麻糬甜甜圈 vs 普通甜甜圈',
      headers: ['', '麻糬甜甜圈', '普通甜甜圈'],
      rows: [
        ['口感', '外酥内糯（QQ口感）', '松软蓬松'],
        ['主要粉类', '糯米粉', '小麦粉'],
        ['形状', '球体串联环形', '经典环形或夹馅'],
        ['起源', '日本-夏威夷融合', '欧美传统'],
        ['麸质', '天然无麸质倾向*', '含麸质'],
        ['社交热度', '超级上镜', '经典舒适'],
      ],
      footnote: '*在共享厨房制作。非无麸质认证。',
    },
    faq: {
      title: '常见问题',
      items: [
        {
          q: '麻糬甜甜圈是用什么做的？',
          a: '麻糬甜甜圈主要使用糯米粉（日文称"餅粉"）制作，搭配木薯淀粉等原料，实现外酥内糯的独特口感。',
        },
        {
          q: '麻糬甜甜圈是无麸质的吗？',
          a: '我们的麻糬甜甜圈使用米粉而非小麦粉，属于天然无麸质倾向产品。但由于在共享厨房制作，无法保证对严重过敏或乳糜泻患者100%无麸质。',
        },
        {
          q: '威基基哪里可以买到麻糬甜甜圈？',
          a: '卡拉卡瓦大道2142号的科纳咖啡甜甜圈与MOCHILAND合作，每天新鲜制作麻糬甜甜圈。距离威基基海滩步行即达。',
        },
        {
          q: '你们有多少种麻糬甜甜圈口味？',
          a: '我们常备12种以上口味，包括紫薯、抹茶、黑芝麻、草莓、吉拿棒、奥利奥和芋头等，还有定期更换的季节限定口味。',
        },
        {
          q: '麻糬甜甜圈和普通甜甜圈有什么区别？',
          a: '麻糬甜甜圈使用糯米粉替代小麦粉，拥有独特的外酥内糯"QQ口感"。球体串联的环形造型也是其标志，源自日本麻糬文化与夏威夷-美国甜甜圈文化的融合。',
        },
      ],
    },
    cta: {
      title: '来威基基品尝最好的麻糬甜甜圈',
      address: '2142 Kalakaua Ave, 威基基',
      opening: '2026年4月下旬盛大开业',
      note: '新鲜麻糬甜甜圈 + 优质科纳咖啡 — 威基基终极甜点体验。',
      button: '获取路线',
    },
  },
  es: {
    hero: {
      badge: 'MOCHILAND x Kona Coffee Donut',
      title: 'Donuts de Mochi en Waikiki',
      subtitle: 'Hechos frescos diariamente con MOCHILAND — la marca viral de donuts de mochi con 50+ ubicaciones en EE.UU. Masticables, crujientes, irresistibles.',
      cta: 'Ver Nuestro Menu',
    },
    whatAre: {
      title: 'Que Son los Donuts de Mochi?',
      p1: 'Los donuts de mochi son una version moderna del donut tradicional, hechos con mochiko (harina de arroz dulce) que les da su textura unica: masticable por dentro y crujiente por fuera.',
      p2: 'Nacidos de la cultura japonesa del mochi y la creatividad hawaiana, los donuts de mochi representan la fusion perfecta entre Oriente y Occidente. Su forma iconica de anillo hecho de bolitas conectadas se ha convertido en uno de los postres mas fotografiados del mundo.',
      p3: 'Los donuts de mochi se hicieron virales en redes sociales por su textura unica y sabores impresionantes, y ahora son imprescindibles para todo visitante de Hawaii.',
    },
    whyBest: {
      title: 'Por Que Nuestros Donuts de Mochi Son los Mejores de Waikiki',
      points: [
        {
          title: 'Con MOCHILAND',
          description: 'Nos asociamos con MOCHILAND, marca lider de donuts de mochi con 50+ ubicaciones en EE.UU.',
        },
        {
          title: 'Hechos Frescos Diariamente',
          description: 'Nuestros donuts de mochi se hacen frescos todos los dias en nuestra cocina de Waikiki.',
        },
        {
          title: '12+ Sabores Rotativos',
          description: 'Desde favoritos clasicos hasta sorpresas de temporada, ofrecemos mas de 12 sabores rotativos.',
        },
        {
          title: 'Junto a Waikiki Beach',
          description: 'Ubicados en Kalakaua Avenue, a pocos pasos de Waikiki Beach.',
        },
      ],
    },
    flavors: {
      title: 'Nuestros Sabores de Mochi Donut',
      subtitle: '12+ sabores rotativos diarios',
      items: [
        { name: 'Ube', description: 'Glaseado de name purpura. Rico, terroso y vibrante.', tag: 'Mas Vendido' },
        { name: 'Matcha', description: 'Glaseado de te verde japones premium. Perfecto con cafe Kona.', tag: 'Popular' },
        { name: 'Sesamo Negro', description: 'Glaseado de sesamo tostado. Sabor umami profundo.', tag: '' },
        { name: 'Fresa', description: 'Glaseado de fresa dulce y refrescante.', tag: 'Popular' },
        { name: 'Churro', description: 'Cubierto de canela y azucar con textura masticable.', tag: '' },
        { name: 'Cookies & Cream', description: 'Trozos de galleta Oreo sobre glaseado de vainilla.', tag: 'Mas Vendido' },
        { name: 'Taro', description: 'Glaseado de raiz de taro hawaiano.', tag: '' },
        { name: 'Especiales de Temporada', description: 'Sabores de edicion limitada que cambian con las estaciones.', tag: 'Limitado' },
      ],
    },
    pairing: {
      title: 'El Maridaje Perfecto',
      combos: [
        {
          title: 'Mochi Donut + Cafe Kona',
          description: 'El combo definitivo de Waikiki. El sabor rico del cafe 100% Kona complementa perfectamente la textura dulce y masticable de nuestros donuts de mochi.',
        },
        {
          title: 'Mochi Donut + Bingsu',
          description: 'La experiencia de postre definitiva. Un donut de mochi caliente contra el bingsu helado coreano es pura magia.',
        },
      ],
    },
    comparison: {
      title: 'Donuts de Mochi vs Donuts Regulares',
      headers: ['', 'Donut de Mochi', 'Donut Regular'],
      rows: [
        ['Textura', 'Masticable y crujiente', 'Suave y esponjoso'],
        ['Harina principal', 'Mochiko (harina de arroz)', 'Harina de trigo'],
        ['Forma', 'Anillo de bolitas', 'Anillo clasico o relleno'],
        ['Origen', 'Fusion japonesa-hawaiana', 'Europeo/Americano'],
        ['Gluten', 'Naturalmente sin gluten*', 'Contiene gluten'],
        ['Factor viral', 'Muy instagrameable', 'Clasico reconfortante'],
      ],
      footnote: '*Preparado en cocina compartida. No certificado libre de gluten.',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      items: [
        {
          q: 'De que estan hechos los donuts de mochi?',
          a: 'Los donuts de mochi se hacen principalmente con mochiko (harina de arroz dulce), combinada con almidon de tapioca para crear la textura perfecta.',
        },
        {
          q: 'Son los donuts de mochi libres de gluten?',
          a: 'Nuestros donuts de mochi usan harina de arroz en lugar de trigo, pero se preparan en una cocina compartida, por lo que no podemos garantizar que sean 100% libres de gluten.',
        },
        {
          q: 'Donde puedo conseguir donuts de mochi en Waikiki?',
          a: 'Kona Coffee Donut en 2142 Kalakaua Ave ofrece los donuts de mochi mas frescos de Waikiki, hechos diariamente con MOCHILAND.',
        },
        {
          q: 'Cuantos sabores de donuts de mochi tienen?',
          a: 'Ofrecemos 12+ sabores rotativos incluyendo Ube, Matcha, Sesamo Negro, Fresa, Churro, Cookies & Cream y Taro, mas especiales de temporada.',
        },
        {
          q: 'Que hace diferentes a los donuts de mochi de los regulares?',
          a: 'Los donuts de mochi usan harina de arroz en lugar de trigo, dandoles una textura unica masticable-crujiente. Tienen forma de bolitas conectadas en anillo y se originaron de la cultura japonesa del mochi fusionada con la tradicion americana.',
        },
      ],
    },
    cta: {
      title: 'Prueba los Mejores Donuts de Mochi de Waikiki',
      address: '2142 Kalakaua Ave, Waikiki',
      opening: 'Apertura Finales de Abril 2026',
      note: 'Donuts de mochi frescos + cafe Kona premium — el postre definitivo de Waikiki.',
      button: 'Obtener Direcciones',
    },
  },
};

// FAQPage JSON-LD
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: content.en.faq.items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

// Restaurant + Product structured data
const mochiDonutSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Kona Coffee Donut - Best Mochi Donuts in Waikiki',
  description: 'Freshly made mochi donuts in Waikiki by MOCHILAND. 12+ rotating flavors including Ube, Matcha, and Black Sesame. Paired with premium 100% Kona coffee.',
  image: 'https://www.konacoffeedonut.com/og-image.jpg',
  servesCuisine: ['Mochi Donuts', 'Japanese-Hawaiian Fusion', 'Coffee', 'Desserts'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2142 Kalakaua Ave',
    addressLocality: 'Honolulu',
    addressRegion: 'HI',
    postalCode: '96815',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 21.2793,
    longitude: -157.8294,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '07:00',
    closes: '21:00',
  },
  priceRange: '$$',
  hasMenu: {
    '@type': 'Menu',
    hasMenuSection: {
      '@type': 'MenuSection',
      name: 'Mochi Donuts',
      hasMenuItem: [
        { '@type': 'MenuItem', name: 'Ube Mochi Donut', description: 'Purple yam glazed mochi donut' },
        { '@type': 'MenuItem', name: 'Matcha Mochi Donut', description: 'Japanese green tea glazed mochi donut' },
        { '@type': 'MenuItem', name: 'Black Sesame Mochi Donut', description: 'Roasted sesame glazed mochi donut' },
        { '@type': 'MenuItem', name: 'Cookies & Cream Mochi Donut', description: 'Vanilla glaze with Oreo cookie pieces' },
      ],
    },
  },
};

const flavorColors: Record<string, string> = {
  Ube: 'from-purple-500 to-purple-700',
  '紫芋（ウベ）': 'from-purple-500 to-purple-700',
  '우베': 'from-purple-500 to-purple-700',
  '紫薯（Ube）': 'from-purple-500 to-purple-700',
  Matcha: 'from-green-500 to-green-700',
  '抹茶': 'from-green-500 to-green-700',
  '말차': 'from-green-500 to-green-700',
  'Black Sesame': 'from-gray-700 to-gray-900',
  '黒ごま': 'from-gray-700 to-gray-900',
  '흑임자': 'from-gray-700 to-gray-900',
  '黑芝麻': 'from-gray-700 to-gray-900',
  Strawberry: 'from-pink-400 to-rose-500',
  'ストロベリー': 'from-pink-400 to-rose-500',
  '딸기': 'from-pink-400 to-rose-500',
  '草莓': 'from-pink-400 to-rose-500',
  Fresa: 'from-pink-400 to-rose-500',
  Churro: 'from-amber-500 to-amber-700',
  'チュロス': 'from-amber-500 to-amber-700',
  '츄러스': 'from-amber-500 to-amber-700',
  '吉拿棒': 'from-amber-500 to-amber-700',
  'Cookies & Cream': 'from-stone-400 to-stone-600',
  'クッキー＆クリーム': 'from-stone-400 to-stone-600',
  '쿠키앤크림': 'from-stone-400 to-stone-600',
  '奥利奥': 'from-stone-400 to-stone-600',
  Taro: 'from-violet-400 to-violet-600',
  'タロ': 'from-violet-400 to-violet-600',
  '타로': 'from-violet-400 to-violet-600',
  '芋头': 'from-violet-400 to-violet-600',
};

const getFlavorGradient = (name: string) => {
  return flavorColors[name] || 'from-fuchsia-400 to-pink-500';
};

export default function MochiDonutsWaikikiPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = content[locale as keyof typeof content] || content.en;

  return (
    <>
      <Script
        id="mochi-donut-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mochiDonutSchema) }}
      />
      <Script
        id="mochi-donut-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white">
        {/* Hero Section — Pink/Purple Gradient */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-300 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <motion.div
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="inline w-4 h-4 mr-2" />
              {t.hero.badge}
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href={`/${locale}/menu`}
                className="inline-block bg-white text-fuchsia-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-fuchsia-50 transition-colors shadow-lg"
              >
                {t.hero.cta}
                <ChevronRight className="inline w-5 h-5 ml-1" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What Are Mochi Donuts? */}
        <section className="py-20 px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-800 mb-8 text-center">
              {t.whatAre.title}
            </h2>
            <div className="space-y-5">
              <p className="text-lg text-gray-700 leading-relaxed">{t.whatAre.p1}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{t.whatAre.p2}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{t.whatAre.p3}</p>
            </div>
          </motion.div>
        </section>

        {/* Why Our Mochi Donuts Are the Best */}
        <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-800 mb-14 text-center">
              {t.whyBest.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {t.whyBest.points.map((point, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mb-5">
                    {index === 0 && <Star className="w-7 h-7 text-white" />}
                    {index === 1 && <Cookie className="w-7 h-7 text-white" />}
                    {index === 2 && <Sparkles className="w-7 h-7 text-white" />}
                    {index === 3 && <MapPin className="w-7 h-7 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold text-fuchsia-800 mb-3">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Flavor Showcase */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-800 mb-3 text-center">
              {t.flavors.title}
            </h2>
            <p className="text-gray-500 text-center mb-14 text-lg">{t.flavors.subtitle}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {t.flavors.items.map((flavor, index) => (
                <motion.div
                  key={index}
                  className="relative bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className={`h-3 bg-gradient-to-r ${getFlavorGradient(flavor.name)}`} />
                  <div className="p-5">
                    {flavor.tag && (
                      <span className="inline-block text-xs font-semibold text-fuchsia-600 bg-fuchsia-50 px-2 py-1 rounded-full mb-2">
                        {flavor.tag}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{flavor.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{flavor.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Perfect Pairing */}
        <section className="py-20 px-4 bg-gradient-to-b from-fuchsia-50 to-pink-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-800 mb-14 text-center">
              {t.pairing.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {t.pairing.combos.map((combo, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-pink-100"
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mb-5">
                    {index === 0 ? (
                      <Coffee className="w-6 h-6 text-white" />
                    ) : (
                      <Sparkles className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-fuchsia-800 mb-3">{combo.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{combo.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-800 mb-12 text-center">
              {t.comparison.title}
            </h2>
            <motion.div
              className="overflow-x-auto rounded-2xl shadow-lg border border-pink-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                    {t.comparison.headers.map((header, i) => (
                      <th key={i} className="px-6 py-4 text-left font-semibold text-sm">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.comparison.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-pink-50/50'}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={`px-6 py-4 text-sm ${j === 0 ? 'font-semibold text-fuchsia-800' : 'text-gray-600'}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            <p className="text-xs text-gray-400 mt-3 text-center">{t.comparison.footnote}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-pink-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-800 mb-12 text-center">
              {t.faq.title}
            </h2>
            <div className="space-y-4">
              {t.faq.items.map((item, index) => (
                <motion.details
                  key={index}
                  className="bg-white rounded-2xl shadow-md border border-pink-100 overflow-hidden group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <summary className="px-6 py-5 cursor-pointer font-semibold text-fuchsia-800 hover:bg-pink-50/50 transition-colors list-none flex items-center justify-between">
                    {item.q}
                    <ChevronRight className="w-5 h-5 text-fuchsia-400 transform group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
        <JoinTeamCTA />

        {/* Final CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
              <div className="flex items-center justify-center gap-2 mb-2 text-lg opacity-90">
                <MapPin className="w-5 h-5" />
                <span>{t.cta.address}</span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-4 text-lg">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">{t.cta.opening}</span>
              </div>
              <p className="text-lg opacity-80 mb-10">{t.cta.note}</p>
              <a
                href="https://maps.google.com/?q=2142+Kalakaua+Ave+Honolulu+HI+96815"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-fuchsia-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-fuchsia-50 transition-colors shadow-lg"
              >
                {t.cta.button}
                <ChevronRight className="inline w-5 h-5 ml-1" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
