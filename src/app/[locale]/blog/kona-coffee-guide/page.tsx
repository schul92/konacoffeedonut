'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Coffee, Mountain, Hand, Shield, DollarSign, AlertTriangle, Droplets, MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Script from 'next/script';
import SubpageNav from '@/components/SubpageNav';

// SEO-optimized content for "kona coffee vs regular coffee" keyword (Volume: 1,900)
const content = {
  en: {
    hero: {
      title: 'Kona Coffee vs Regular Coffee: What Makes Hawaii\'s Famous Coffee Worth It',
      subtitle: 'A complete guide to understanding why Kona coffee stands apart from every other coffee in the world',
      breadcrumb: 'Blog',
      breadcrumbCurrent: 'Kona Coffee Guide',
    },
    quickAnswer: {
      title: 'Quick Answer',
      text: '<strong>Kona coffee is grown exclusively on the volcanic slopes of Mauna Loa and Hualalai in Hawaii\'s Kona District</strong>, representing <strong>less than 1% of the world\'s coffee production</strong>. Hand-picked and sun-dried, it delivers a <strong>uniquely smooth, low-acid flavor with chocolate and nutty notes</strong> that regular mass-produced coffee cannot replicate. Expect to pay $30-50 per pound for authentic 100% Kona.',
    },
    whatIsKona: {
      title: 'What Is Kona Coffee?',
      paragraphs: [
        'Kona coffee is a premium single-origin coffee grown exclusively in the North and South Kona Districts on the Big Island of Hawaii. The coffee belt stretches along the western slopes of two volcanic mountains — Mauna Loa and Hualalai — at elevations between 500 and 900 meters above sea level.',
        'What makes this region so special is a rare combination of natural conditions: rich volcanic soil packed with minerals, consistent cloud cover that rolls in each afternoon providing natural shade, gentle tropical rainfall, and mild temperatures that never freeze. This microclimate exists nowhere else on Earth and creates ideal growing conditions for Coffea arabica.',
        'Kona coffee has been cultivated since the 1820s, making it one of the oldest commercial coffee-growing regions in the United States. Today, approximately 800 small farms — most under 5 acres — produce the entire world\'s supply of genuine Kona coffee. Every cherry is hand-picked at peak ripeness, a labor-intensive process that ensures only the best beans make it to your cup.',
        'The Kona Coffee Council and the Hawaii Department of Agriculture enforce strict grading standards. To be labeled "100% Kona Coffee," every bean must be grown, harvested, and processed within the Kona District. This level of traceability and quality control is virtually unmatched in the coffee world.',
      ],
    },
    comparisonTable: {
      title: 'Kona Coffee vs Regular Coffee: Side-by-Side Comparison',
      headers: ['Factor', 'Kona Coffee', 'Regular Coffee'],
      rows: [
        ['Growing Region', 'Kona District, Big Island, Hawaii only', 'Worldwide (Brazil, Colombia, Vietnam, etc.)'],
        ['Altitude', '500-900 meters (volcanic slopes)', 'Varies widely (sea level to 2,000m+)'],
        ['Harvesting', 'Hand-picked at peak ripeness', 'Mostly machine-harvested'],
        ['Production Volume', 'Less than 1% of global supply', '98%+ of global supply'],
        ['Flavor Profile', 'Smooth, chocolate, nutty, low acidity', 'Varies widely by origin and processing'],
        ['Price per Pound', '$30-50 (100% Kona)', '$8-15 (commercial grade)'],
        ['Certification', 'Kona Coffee Council, Hawaii DOA grading', 'Varies (Fair Trade, Rainforest Alliance, etc.)'],
        ['Best For', 'Black coffee lovers, gifts, special occasions', 'Daily brewing, espresso blends'],
      ],
    },
    whyCostsMore: {
      title: 'Why Kona Coffee Costs More',
      intro: 'At $30 to $50 per pound, 100% Kona coffee costs significantly more than standard supermarket coffee. Here\'s why the premium price is justified:',
      reasons: [
        {
          title: 'Labor-Intensive Hand Harvesting',
          text: 'Every Kona coffee cherry is picked by hand, one at a time. Skilled pickers select only ripe cherries during multiple passes through each farm over the harvest season (August through January). Machine harvesting — used for most commercial coffee — strips all cherries at once regardless of ripeness, producing an inconsistent product.',
        },
        {
          title: 'Extremely Limited Growing Area',
          text: 'The entire Kona coffee-growing region spans roughly 30 miles long and just 2 miles wide. You cannot expand this — the volcanic soil, elevation, and microclimate conditions are fixed by geography. This natural scarcity caps supply while global demand continues to grow.',
        },
        {
          title: 'Hawaii\'s Cost of Living',
          text: 'Farm workers earn Hawaii wages, which are significantly higher than those in Central America, Africa, or Southeast Asia where most commercial coffee is grown. Land costs, equipment, and utilities in Hawaii are among the highest in the United States.',
        },
        {
          title: 'Rigorous Quality Control',
          text: 'Hawaii state law requires Kona coffee to meet strict grading standards. Beans are sorted by size, moisture content, and defect count. Only beans meeting Extra Fancy, Fancy, No. 1, Select, or Prime grades can be sold as Kona coffee. Substandard beans are rejected entirely.',
        },
      ],
    },
    spotFake: {
      title: 'How to Spot Fake Kona Coffee',
      intro: 'The biggest trap for consumers is the "Kona Blend" label. Here\'s what you need to know:',
      warning: {
        title: '"Kona Blend" Warning',
        text: 'Hawaii law allows coffee containing as little as 10% Kona beans to be marketed as a "Kona Blend." The remaining 90% is typically cheap imported coffee from Central or South America. Many tourists unknowingly buy these blends thinking they\'re getting genuine Kona coffee. Major grocery store brands frequently sell Kona blends at premium prices.',
      },
      tips: [
        'Always look for "100% Kona Coffee" on the label — not just "Kona" or "Kona Blend"',
        'Check for a specific farm name or the Kona Coffee Council certification',
        'Verify the roast date — fresh Kona coffee should be roasted within the past 2-4 weeks',
        'Be suspicious of prices under $20 per pound — genuine 100% Kona cannot be produced that cheaply',
        'Buy directly from Kona farms or reputable specialty retailers',
      ],
    },
    brewing: {
      title: 'How to Brew Kona Coffee at Home',
      intro: 'To get the most out of your Kona coffee, follow these expert brewing recommendations:',
      method: {
        title: 'Recommended: Pour-Over Method',
        text: 'Pour-over brewing is the ideal method for Kona coffee because it highlights the bean\'s natural sweetness, smooth body, and delicate flavor notes without the bitterness that over-extraction can cause.',
      },
      steps: [
        { label: 'Water Temperature', value: '195-205\u00B0F (90-96\u00B0C) — just below boiling' },
        { label: 'Grind Size', value: 'Medium grind (like sea salt consistency)' },
        { label: 'Ratio', value: '1:16 — one gram of coffee to 16 grams of water' },
        { label: 'Bloom', value: 'Pour twice the weight of coffee in water, wait 30-45 seconds' },
        { label: 'Total Brew Time', value: '3-4 minutes for optimal extraction' },
      ],
      tip: 'Pro tip: Drink Kona coffee black, at least for your first cup. Adding milk or sugar masks the subtle chocolate and nutty notes that make Kona special. If you typically need cream in your coffee, you may be surprised at how smooth Kona is on its own.',
    },
    whereTo: {
      title: 'Where to Try Real Kona Coffee in Waikiki',
      paragraphs: [
        'Finding authentic 100% Kona coffee in Waikiki can be surprisingly difficult. Many cafes and hotel restaurants serve Kona blends (remember, only 10% real Kona) or skip Kona entirely due to cost.',
        'At Kona Coffee Donut, we serve genuine 100% pure Kona coffee sourced through our partnership with Honolulu Coffee, established in 1992 and one of Hawaii\'s most respected coffee companies. Every cup we pour is made from beans grown on the volcanic slopes of the Kona District — no blends, no shortcuts.',
        'We pair our Kona coffee with freshly made mochi donuts, malasadas, and other Hawaiian-inspired pastries at our location on Kalakaua Avenue, steps from Waikiki Beach. Whether you\'re a first-time visitor or a returning coffee enthusiast, tasting real Kona coffee the way it was meant to be enjoyed — freshly brewed, pure, and served with aloha — is an experience you won\'t forget.',
      ],
      cta: 'View Our Kona Coffee Menu',
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'Is Kona coffee really better than regular coffee?',
          a: 'Yes, for most coffee drinkers. Kona coffee\'s unique growing conditions — volcanic soil, ideal altitude, and Hawaii\'s microclimate — produce beans with a distinctly smooth, low-acid flavor profile with chocolate and nutty notes. In blind taste tests, Kona consistently ranks among the world\'s top single-origin coffees. However, "better" is subjective; if you prefer bold, high-acid African coffees, Kona\'s mellow profile may not be your preference.',
        },
        {
          q: 'Why is Kona coffee so expensive?',
          a: 'Kona coffee costs $30-50 per pound due to hand harvesting (every cherry picked individually), extremely limited growing area (a 30-by-2-mile strip in Hawaii), high Hawaiian labor costs, and strict quality grading. Production accounts for less than 1% of global coffee supply, creating natural scarcity against growing worldwide demand.',
        },
        {
          q: 'What does Kona coffee taste like?',
          a: 'Kona coffee is known for its smooth, clean body with low acidity. Common tasting notes include milk chocolate, brown sugar, macadamia nut, and a subtle caramel sweetness. The finish is clean without bitterness. It is one of the most approachable and easy-to-drink black coffees in the world.',
        },
        {
          q: 'Is "Kona Blend" the same as Kona coffee?',
          a: 'No. "Kona Blend" legally only needs to contain 10% Kona beans — the other 90% is typically cheap imported coffee. Always look for "100% Kona Coffee" on the label to ensure you are getting the genuine product. The taste difference between a 10% blend and pure Kona is dramatic.',
        },
        {
          q: 'Where can I buy real 100% Kona coffee in Waikiki?',
          a: 'Kona Coffee Donut on Kalakaua Avenue in Waikiki serves authentic 100% pure Kona coffee through our partnership with Honolulu Coffee (est. 1992). You can also find genuine Kona at specialty retailers, but always verify the "100% Kona" label and check for a specific farm origin.',
        },
      ],
    },
    cta: {
      title: 'Taste the Difference at Kona Coffee Donut',
      text: 'Experience authentic 100% Kona coffee at 2142 Kalakaua Ave, Waikiki. Freshly brewed, never blended.',
      button: 'Visit Us Today',
      learnMore: 'Learn More About Our Coffee',
    },
    published: 'Published April 14, 2026',
    readTime: '7 min read',
  },
  ja: {
    hero: {
      title: 'コナコーヒー vs 普通のコーヒー：ハワイの名産コーヒーの価値とは',
      subtitle: 'コナコーヒーが世界中のコーヒーと一線を画す理由を徹底解説',
      breadcrumb: 'ブログ',
      breadcrumbCurrent: 'コナコーヒーガイド',
    },
    quickAnswer: {
      title: 'クイックアンサー',
      text: '<strong>コナコーヒーはハワイ州コナ地区のマウナロアとフアラライの火山斜面でのみ栽培</strong>され、<strong>世界のコーヒー生産量の1%未満</strong>しかありません。手摘みで天日干しされ、<strong>チョコレートやナッツの風味を持つ、まろやかで酸味の少ない独特の味わい</strong>が特徴です。本物の100%コナコーヒーは1ポンドあたり$30〜50です。',
    },
    whatIsKona: {
      title: 'コナコーヒーとは？',
      paragraphs: [
        'コナコーヒーは、ハワイ島（ビッグアイランド）のノースコナ地区とサウスコナ地区でのみ栽培されるプレミアムシングルオリジンコーヒーです。コーヒーベルトはマウナロアとフアラライという2つの火山の西側斜面、海抜500〜900メートルに広がっています。',
        'この地域が特別な理由は、ミネラル豊富な火山性土壌、毎日午後に訪れる自然な日よけとなる雲、穏やかな熱帯の降雨、そして凍結しない温暖な気温という稀有な自然条件の組み合わせです。この微気候は地球上のどこにも存在せず、アラビカ種コーヒーの理想的な栽培条件を生み出しています。',
        'コナコーヒーの栽培は1820年代に始まり、アメリカ合衆国で最も古い商業コーヒー栽培地域の一つです。現在、約800の小規模農園（ほとんどが5エーカー未満）が世界のコナコーヒー全量を生産しています。すべてのチェリーは完熟時に手摘みされ、最高の豆だけがあなたのカップに届きます。',
        '日本からハワイを訪れる旅行者の多くが、本物のコナコーヒーを求めて現地のカフェや農園を訪問します。日本のコーヒー文化の洗練された味覚を持つ方々にこそ、コナコーヒーの繊細な風味を楽しんでいただけます。コナコーヒー評議会とハワイ州農業局が厳格な等級基準を施行しており、「100%コナコーヒー」と表示するには、すべての豆がコナ地区で栽培・収穫・加工されていなければなりません。',
      ],
    },
    comparisonTable: {
      title: 'コナコーヒー vs 普通のコーヒー：比較表',
      headers: ['項目', 'コナコーヒー', '普通のコーヒー'],
      rows: [
        ['栽培地域', 'ハワイ島コナ地区のみ', '世界各地（ブラジル、コロンビア、ベトナム等）'],
        ['標高', '500-900m（火山斜面）', '様々（海面〜2,000m以上）'],
        ['収穫方法', '完熟時に手摘み', '主に機械収穫'],
        ['生産量', '世界供給量の1%未満', '世界供給量の98%以上'],
        ['風味', 'まろやか、チョコレート、ナッツ、低酸味', '産地や加工により様々'],
        ['1ポンドの価格', '$30-50（100%コナ）', '$8-15（商業グレード）'],
        ['認証', 'コナコーヒー評議会、ハワイ州農業局格付け', '様々（フェアトレード、レインフォレスト等）'],
        ['おすすめ', 'ブラックコーヒー愛好家、ギフト、特別な機会', '日常の抽出、エスプレッソブレンド'],
      ],
    },
    whyCostsMore: {
      title: 'コナコーヒーが高価な理由',
      intro: '1ポンドあたり$30〜50と、コナコーヒーは一般的なスーパーのコーヒーよりもかなり高価です。その理由をご説明します：',
      reasons: [
        {
          title: '手作業による収穫',
          text: 'すべてのコナコーヒーチェリーは一つ一つ手摘みされます。熟練した摘み取り作業者が、収穫期（8月〜1月）を通じて農園を何度も巡回し、完熟したチェリーのみを選別します。',
        },
        {
          title: '極めて限られた栽培面積',
          text: 'コナコーヒーの栽培地域全体は約48km×3.2kmに過ぎません。火山性土壌、標高、微気候条件は地理的に固定されており、拡大できません。',
        },
        {
          title: 'ハワイの高い人件費',
          text: '農園労働者はハワイの賃金水準で雇用されており、中南米やアフリカ、東南アジアよりもはるかに高い人件費がかかります。',
        },
        {
          title: '厳格な品質管理',
          text: 'ハワイ州法により、コナコーヒーは厳格な等級基準を満たす必要があります。豆はサイズ、水分含有量、欠陥数で選別されます。',
        },
      ],
    },
    spotFake: {
      title: '偽物のコナコーヒーの見分け方',
      intro: '消費者にとって最大の罠は「コナブレンド」の表示です。知っておくべきことをご紹介します：',
      warning: {
        title: '「コナブレンド」にご注意',
        text: 'ハワイ州法では、コナ豆がわずか10%しか含まれていなくても「コナブレンド」として販売することが認められています。残りの90%は通常、中南米からの安価な輸入コーヒーです。多くの日本人観光客がお土産として購入しますが、「ブレンド」表示を見落としがちです。',
      },
      tips: [
        'ラベルに「100% Kona Coffee」と記載されていることを必ず確認 —「Kona」や「Kona Blend」だけでは不十分',
        '特定の農園名またはコナコーヒー評議会の認証を確認',
        '焙煎日を確認 — 新鮮なコナコーヒーは2〜4週間以内に焙煎されたもの',
        '1ポンド$20未満の価格は疑わしい — 本物の100%コナはそれほど安く生産できません',
        'コナの農園や信頼できる専門小売店から直接購入',
      ],
    },
    brewing: {
      title: 'コナコーヒーの淹れ方',
      intro: 'コナコーヒーを最大限に楽しむための、専門家推奨の抽出方法をご紹介します：',
      method: {
        title: 'おすすめ：ハンドドリップ（プアオーバー）',
        text: 'ハンドドリップは豆本来の甘さ、滑らかなボディ、繊細な風味を引き出すのに最適な方法です。日本のコーヒー文化で馴染みのあるこの方法は、コナコーヒーとの相性が抜群です。',
      },
      steps: [
        { label: '湯温', value: '90-96\u00B0C（沸騰直前）' },
        { label: '挽き目', value: '中挽き（海塩程度の粗さ）' },
        { label: '比率', value: '1:16 — コーヒー1gに対して水16g' },
        { label: '蒸らし', value: 'コーヒーの重さの2倍のお湯を注ぎ、30〜45秒待つ' },
        { label: '総抽出時間', value: '3〜4分が最適' },
      ],
      tip: 'プロのアドバイス：最初の一杯はぜひブラックでお試しください。ミルクや砂糖を加えると、コナコーヒー特有のチョコレートやナッツの繊細な風味が隠れてしまいます。',
    },
    whereTo: {
      title: 'ワイキキで本物のコナコーヒーが飲める場所',
      paragraphs: [
        'ワイキキで本物の100%コナコーヒーを見つけるのは、意外と難しいことです。多くのカフェやホテルレストランでは、コナブレンド（実際のコナはわずか10%）を提供するか、コスト面からコナコーヒーを扱っていません。',
        'コナコーヒードーナツでは、1992年創業のハワイで最も信頼されるコーヒー会社の一つ、ホノルルコーヒーとの提携により、本物の100%純粋コナコーヒーを提供しています。私たちが淹れるすべてのカップは、コナ地区の火山斜面で栽培された豆から作られています — ブレンドなし、妥協なし。',
        '日本からハワイを訪れる多くのコーヒー愛好家が、本物のコナコーヒーを味わうためにワイキキのカフェを探します。カラカウア通りの当店では、コナコーヒーと新鮮なモチドーナツ、マラサダなどハワイアンスイーツを一緒にお楽しみいただけます。',
      ],
      cta: 'コナコーヒーメニューを見る',
    },
    faq: {
      title: 'よくある質問',
      items: [
        {
          q: 'コナコーヒーは本当に普通のコーヒーより美味しいですか？',
          a: 'はい、ほとんどのコーヒー愛好家にとってそうです。火山性土壌、理想的な標高、ハワイの微気候という独特の栽培条件が、チョコレートやナッツの風味を持つまろやかで酸味の少ない豆を生み出します。ブラインドテイスティングでは、コナは世界トップクラスのシングルオリジンコーヒーとして常に高評価を得ています。',
        },
        {
          q: 'コナコーヒーはなぜ高いのですか？',
          a: '手摘み収穫、極めて限られた栽培面積（ハワイの48km×3.2kmの地域のみ）、高いハワイの人件費、厳格な品質格付けにより、1ポンド$30〜50となっています。世界のコーヒー供給量の1%未満という自然な希少性が価格を押し上げています。',
        },
        {
          q: 'コナコーヒーの味はどんな感じですか？',
          a: 'コナコーヒーは、まろやかでクリーンなボディと低い酸味が特徴です。ミルクチョコレート、黒糖、マカダミアナッツ、そしてほのかなキャラメルの甘さが代表的なテイスティングノートです。苦みのないクリーンな後味があります。',
        },
        {
          q: '「コナブレンド」と「コナコーヒー」は同じですか？',
          a: 'いいえ。「コナブレンド」は法的にコナ豆を10%含んでいれば表示可能で、残り90%は安価な輸入コーヒーです。必ず「100% Kona Coffee」の表示を確認してください。10%ブレンドと純粋コナの味の差は歴然です。',
        },
        {
          q: 'ワイキキで本物の100%コナコーヒーはどこで買えますか？',
          a: 'カラカウア通りのコナコーヒードーナツでは、ホノルルコーヒー（1992年創業）との提携により本物の100%純粋コナコーヒーを提供しています。専門小売店でも購入できますが、必ず「100% Kona」の表示と農園名を確認してください。',
        },
      ],
    },
    cta: {
      title: 'コナコーヒードーナツで本物の味を',
      text: 'ワイキキ 2142 Kalakaua Ave で本物の100%コナコーヒーをお楽しみください。',
      button: '今すぐ訪問',
      learnMore: 'コーヒーについてもっと詳しく',
    },
    published: '2026年4月14日公開',
    readTime: '7分で読める',
  },
  ko: {
    hero: {
      title: '코나 커피 vs 일반 커피: 하와이 명품 커피의 가치',
      subtitle: '코나 커피가 세계의 모든 커피와 차별화되는 이유를 완벽하게 알아보세요',
      breadcrumb: '블로그',
      breadcrumbCurrent: '코나 커피 가이드',
    },
    quickAnswer: {
      title: '핵심 요약',
      text: '<strong>코나 커피는 하와이 코나 지구의 마우나로아와 후알라라이 화산 경사면에서만 재배</strong>되며, <strong>전 세계 커피 생산량의 1% 미만</strong>을 차지합니다. 수확부터 건조까지 모두 수작업으로 이루어지며, <strong>초콜릿과 견과류 풍미의 부드럽고 산미가 적은 독특한 맛</strong>을 제공합니다. 정품 100% 코나는 파운드당 $30-50입니다.',
    },
    whatIsKona: {
      title: '코나 커피란?',
      paragraphs: [
        '코나 커피는 하와이 빅아일랜드의 노스코나와 사우스코나 지구에서만 재배되는 프리미엄 싱글 오리진 커피입니다. 커피 벨트는 마우나로아와 후알라라이 두 화산의 서쪽 경사면을 따라 해발 500~900m에 걸쳐 있습니다.',
        '이 지역이 특별한 이유는 미네랄이 풍부한 화산 토양, 매일 오후 자연 그늘을 제공하는 구름, 온화한 열대 강우, 영하로 내려가지 않는 기온이라는 희귀한 자연 조건의 조합입니다. 이 미기후는 지구상 어디에도 없으며 아라비카 커피의 이상적인 재배 조건을 만들어냅니다.',
        '코나 커피는 1820년대부터 재배되어 미국에서 가장 오래된 상업 커피 재배 지역 중 하나입니다. 현재 약 800개의 소규모 농장(대부분 5에이커 미만)이 전 세계 코나 커피 전량을 생산합니다. 모든 체리는 최적의 숙성 시점에 수작업으로 수확됩니다.',
        '한국의 커피 문화는 세계적으로 유명하며, 스페셜티 커피에 대한 높은 안목을 가진 한국 커피 애호가들에게 코나 커피는 특별한 의미가 있습니다. 한 잔의 가격으로 따지면 스페셜티 카페에서 마시는 커피와 비슷하면서도, 세계 최고 수준의 싱글 오리진을 경험할 수 있는 탁월한 가성비를 제공합니다. 코나 커피 위원회와 하와이 농업부가 엄격한 등급 기준을 시행하고 있습니다.',
      ],
    },
    comparisonTable: {
      title: '코나 커피 vs 일반 커피: 비교표',
      headers: ['항목', '코나 커피', '일반 커피'],
      rows: [
        ['재배 지역', '하와이 빅아일랜드 코나 지구만', '전 세계 (브라질, 콜롬비아, 베트남 등)'],
        ['고도', '500-900m (화산 경사면)', '다양함 (해수면~2,000m 이상)'],
        ['수확 방법', '완숙 시 수작업 수확', '대부분 기계 수확'],
        ['생산량', '전 세계 공급량의 1% 미만', '전 세계 공급량의 98% 이상'],
        ['맛 프로필', '부드럽고, 초콜릿, 견과류, 낮은 산미', '산지와 가공 방법에 따라 다양'],
        ['파운드당 가격', '$30-50 (100% 코나)', '$8-15 (상업용 등급)'],
        ['인증', '코나 커피 위원회, 하와이 농업부 등급', '다양 (공정무역, 레인포레스트 얼라이언스 등)'],
        ['추천 대상', '블랙커피 애호가, 선물, 특별한 날', '일상 추출, 에스프레소 블렌드'],
      ],
    },
    whyCostsMore: {
      title: '코나 커피가 비싼 이유',
      intro: '파운드당 $30~50으로 코나 커피는 일반 마트 커피보다 훨씬 비쌉니다. 그 이유를 설명합니다:',
      reasons: [
        {
          title: '수작업 수확',
          text: '모든 코나 커피 체리는 하나하나 수작업으로 수확됩니다. 숙련된 작업자가 수확 시즌(8월~1월) 동안 농장을 여러 차례 돌며 완숙한 체리만 선별합니다.',
        },
        {
          title: '극히 제한된 재배 면적',
          text: '코나 커피 재배 지역 전체는 약 48km 길이에 불과 3.2km 폭입니다. 화산 토양, 고도, 미기후 조건은 지리적으로 고정되어 확장이 불가능합니다.',
        },
        {
          title: '하와이의 높은 인건비',
          text: '농장 노동자들은 하와이 임금 수준으로 고용되며, 중남미, 아프리카, 동남아시아보다 훨씬 높은 인건비가 발생합니다.',
        },
        {
          title: '엄격한 품질 관리',
          text: '하와이 주법에 따라 코나 커피는 엄격한 등급 기준을 충족해야 합니다. 원두는 크기, 수분 함량, 결함 수로 분류됩니다.',
        },
      ],
    },
    spotFake: {
      title: '가짜 코나 커피 구별법',
      intro: '소비자에게 가장 큰 함정은 "코나 블렌드" 라벨입니다. 알아야 할 사항은 다음과 같습니다:',
      warning: {
        title: '"코나 블렌드" 주의보',
        text: '하와이 법률은 코나 원두가 10%만 포함되어도 "코나 블렌드"로 판매할 수 있게 허용합니다. 나머지 90%는 보통 중남미산 저가 수입 커피입니다. 많은 관광객이 정품 코나 커피라고 생각하고 이 블렌드를 구매합니다.',
      },
      tips: [
        '라벨에 "100% Kona Coffee"가 있는지 반드시 확인 — "Kona"나 "Kona Blend"만으로는 불충분',
        '특정 농장 이름이나 코나 커피 위원회 인증 확인',
        '로스팅 날짜 확인 — 신선한 코나 커피는 2~4주 이내 로스팅',
        '파운드당 $20 미만의 가격은 의심 — 정품 100% 코나는 그렇게 저렴하게 생산 불가',
        '코나 농장이나 신뢰할 수 있는 스페셜티 매장에서 직접 구매',
      ],
    },
    brewing: {
      title: '코나 커피 홈 브루잉 가이드',
      intro: '코나 커피를 최대한 즐기기 위한 전문가 추천 추출 방법입니다:',
      method: {
        title: '추천: 핸드드립 (푸어오버)',
        text: '핸드드립은 원두 본연의 단맛, 부드러운 바디, 섬세한 풍미를 강조하는 데 가장 이상적인 방법입니다. 한국의 핸드드립 카페 문화에 익숙한 분들이라면 더욱 쉽게 즐길 수 있습니다.',
      },
      steps: [
        { label: '물 온도', value: '90-96\u00B0C (끓기 직전)' },
        { label: '분쇄도', value: '중간 분쇄 (바다 소금 정도의 굵기)' },
        { label: '비율', value: '1:16 — 커피 1g에 물 16g' },
        { label: '블루밍', value: '커피 무게의 2배 물을 부어 30~45초 대기' },
        { label: '총 추출 시간', value: '최적 추출을 위해 3~4분' },
      ],
      tip: '프로 팁: 첫 잔은 반드시 블랙으로 드셔보세요. 우유나 설탕을 넣으면 코나 커피 특유의 초콜릿과 견과류의 섬세한 풍미가 가려집니다. 한국 스페셜티 카페에서 즐기시는 것처럼 순수한 맛을 경험해보세요.',
    },
    whereTo: {
      title: '와이키키에서 진짜 코나 커피를 맛볼 수 있는 곳',
      paragraphs: [
        '와이키키에서 정품 100% 코나 커피를 찾는 것은 의외로 어렵습니다. 많은 카페와 호텔 레스토랑이 코나 블렌드(실제 코나는 10%만)를 제공하거나, 비용 때문에 코나 커피를 취급하지 않습니다.',
        '코나커피도넛에서는 1992년 설립된 하와이에서 가장 존경받는 커피 회사 중 하나인 호놀룰루 커피와의 파트너십을 통해 정품 100% 순수 코나 커피를 제공합니다. 저희가 내리는 모든 커피는 코나 지구의 화산 경사면에서 재배된 원두로 만듭니다 — 블렌드 없이, 타협 없이.',
        '칼라카우아 애비뉴의 저희 매장에서 코나 커피와 신선한 모찌 도넛, 말라사다 등 하와이안 페이스트리를 함께 즐겨보세요. 스페셜티 커피를 사랑하는 한국 여행객분들이 꼭 경험해보셔야 할 진정한 하와이 커피 문화입니다.',
      ],
      cta: '코나 커피 메뉴 보기',
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        {
          q: '코나 커피가 정말 일반 커피보다 맛있나요?',
          a: '네, 대부분의 커피 애호가에게 그렇습니다. 화산 토양, 이상적인 고도, 하와이의 미기후라는 독특한 재배 조건이 초콜릿과 견과류 풍미의 부드럽고 산미가 적은 원두를 만들어냅니다. 블라인드 테이스팅에서 코나는 항상 세계 최고의 싱글 오리진 커피로 높은 평가를 받습니다.',
        },
        {
          q: '코나 커피는 왜 비싼가요?',
          a: '수작업 수확, 극히 제한된 재배 면적(하와이의 48km x 3.2km 지역만), 높은 하와이 인건비, 엄격한 품질 등급 때문에 파운드당 $30-50입니다. 전 세계 커피 공급량의 1% 미만이라는 자연적 희소성이 가격을 높입니다.',
        },
        {
          q: '코나 커피 맛은 어떤가요?',
          a: '코나 커피는 부드럽고 깔끔한 바디와 낮은 산미가 특징입니다. 밀크 초콜릿, 흑설탕, 마카다미아 넛, 은은한 캐러멜 단맛이 대표적인 테이스팅 노트입니다. 쓴맛 없이 깨끗한 피니시가 있습니다.',
        },
        {
          q: '"코나 블렌드"와 "코나 커피"는 같은 건가요?',
          a: '아닙니다. "코나 블렌드"는 법적으로 코나 원두 10%만 포함하면 표시할 수 있으며, 나머지 90%는 저가 수입 커피입니다. 반드시 "100% Kona Coffee" 표시를 확인하세요. 10% 블렌드와 순수 코나의 맛 차이는 극명합니다.',
        },
        {
          q: '와이키키에서 진짜 100% 코나 커피는 어디서 살 수 있나요?',
          a: '칼라카우아 애비뉴의 코나커피도넛에서 호놀룰루 커피(1992년 설립)와의 파트너십을 통해 정품 100% 순수 코나 커피를 제공합니다. 스페셜티 매장에서도 구매할 수 있지만, 반드시 "100% Kona" 표시와 농장명을 확인하세요.',
        },
      ],
    },
    cta: {
      title: '코나커피도넛에서 진짜 맛을 경험하세요',
      text: '와이키키 2142 Kalakaua Ave에서 정품 100% 코나 커피를 즐겨보세요. 신선하게 추출, 블렌드 없이.',
      button: '오늘 방문하기',
      learnMore: '커피에 대해 더 알아보기',
    },
    published: '2026년 4월 14일 게시',
    readTime: '7분 소요',
  },
  zh: {
    hero: {
      title: '科纳咖啡 vs 普通咖啡：夏威夷名咖啡为何值得一试',
      subtitle: '全面了解科纳咖啡为何在全球咖啡中独树一帜',
      breadcrumb: '博客',
      breadcrumbCurrent: '科纳咖啡指南',
    },
    quickAnswer: {
      title: '快速解答',
      text: '<strong>科纳咖啡仅在夏威夷科纳地区的冒纳罗亚和华拉莱火山斜坡上种植</strong>，<strong>占全球咖啡产量不到1%</strong>。手工采摘、阳光干燥，具有<strong>独特的顺滑口感、低酸度以及巧克力和坚果风味</strong>，这是普通大规模生产的咖啡无法复制的。正宗100%科纳咖啡每磅$30-50。',
    },
    whatIsKona: {
      title: '什么是科纳咖啡？',
      paragraphs: [
        '科纳咖啡是一种优质单一产地咖啡，仅在夏威夷大岛的北科纳和南科纳地区种植。咖啡种植带沿着冒纳罗亚和华拉莱两座火山的西侧斜坡延伸，海拔在500至900米之间。',
        '这个地区之所以特别，在于其稀有的自然条件组合：富含矿物质的火山土壤、每天午后飘来的自然遮荫云层、温和的热带降雨以及从不结冰的温和气温。这种微气候在地球上独一无二，为阿拉比卡咖啡创造了理想的生长条件。',
        '科纳咖啡自1820年代开始种植，是美国最古老的商业咖啡种植区之一。目前，大约800个小型农场（大多不到5英亩）生产全球所有的科纳咖啡。每颗咖啡果都在最佳成熟时手工采摘，确保只有最好的豆子进入您的杯中。',
        '科纳咖啡委员会和夏威夷农业部执行严格的分级标准。要标注"100%科纳咖啡"，每颗豆子都必须在科纳地区种植、收获和加工。这种程度的可追溯性和质量控制在咖啡世界中几乎是无与伦比的。',
      ],
    },
    comparisonTable: {
      title: '科纳咖啡 vs 普通咖啡：对比表',
      headers: ['对比项', '科纳咖啡', '普通咖啡'],
      rows: [
        ['种植地区', '仅限夏威夷大岛科纳地区', '全球各地（巴西、哥伦比亚、越南等）'],
        ['海拔', '500-900米（火山斜坡）', '不等（海平面至2,000米以上）'],
        ['采摘方式', '成熟时手工采摘', '大多机器采摘'],
        ['产量', '全球供应量不到1%', '全球供应量98%以上'],
        ['风味', '顺滑、巧克力、坚果、低酸度', '因产地和加工方式而异'],
        ['每磅价格', '$30-50（100%科纳）', '$8-15（商业级）'],
        ['认证', '科纳咖啡委员会、夏威夷农业部分级', '不等（公平贸易、雨林联盟等）'],
        ['最适合', '黑咖啡爱好者、送礼、特殊场合', '日常冲泡、意式拼配'],
      ],
    },
    whyCostsMore: {
      title: '科纳咖啡为何更贵',
      intro: '每磅$30至$50，100%科纳咖啡比普通超市咖啡贵得多。以下是价格合理的原因：',
      reasons: [
        {
          title: '劳动密集型手工采摘',
          text: '每颗科纳咖啡果都是逐一手工采摘的。熟练的采摘工人在整个收获季节（8月至1月）多次经过每个农场，只选择成熟的果实。',
        },
        {
          title: '极其有限的种植面积',
          text: '整个科纳咖啡种植区仅约48公里长、3.2公里宽。火山土壤、海拔和微气候条件由地理决定，无法扩展。',
        },
        {
          title: '夏威夷的高生活成本',
          text: '农场工人按夏威夷工资标准获得报酬，远高于中美洲、非洲或东南亚。夏威夷的土地、设备和公用事业成本在全美名列前茅。',
        },
        {
          title: '严格的质量控制',
          text: '夏威夷州法律要求科纳咖啡达到严格的分级标准。豆子按大小、含水量和缺陷数量进行分类。只有达到特优、优良等级的豆子才能作为科纳咖啡出售。',
        },
      ],
    },
    spotFake: {
      title: '如何识别假科纳咖啡',
      intro: '消费者最大的陷阱是"科纳拼配"标签。以下是您需要知道的：',
      warning: {
        title: '"科纳拼配"警告',
        text: '夏威夷法律允许仅含10%科纳豆的咖啡以"科纳拼配"名义销售。剩余90%通常是来自中南美洲的廉价进口咖啡。许多游客在不知情的情况下购买了这些拼配产品，以为自己买到了正宗的科纳咖啡。',
      },
      tips: [
        '务必查看标签上的"100% Kona Coffee"——不仅仅是"Kona"或"Kona Blend"',
        '检查是否有特定农场名称或科纳咖啡委员会认证',
        '确认烘焙日期——新鲜的科纳咖啡应在2-4周内烘焙',
        '对每磅低于$20的价格保持警惕——正宗100%科纳无法以如此低的成本生产',
        '直接从科纳农场或有信誉的专业零售商购买',
      ],
    },
    brewing: {
      title: '如何在家冲泡科纳咖啡',
      intro: '为了充分享受科纳咖啡的美味，请遵循以下专家冲泡建议：',
      method: {
        title: '推荐：手冲（Pour-Over）',
        text: '手冲是科纳咖啡的理想冲泡方法，因为它能突出豆子天然的甜味、顺滑的口感和细腻的风味，不会因过度萃取而产生苦味。',
      },
      steps: [
        { label: '水温', value: '90-96\u00B0C（刚好低于沸腾）' },
        { label: '研磨度', value: '中等研磨（类似海盐颗粒）' },
        { label: '比例', value: '1:16——1克咖啡配16克水' },
        { label: '闷蒸', value: '倒入咖啡重量2倍的水，等待30-45秒' },
        { label: '总冲泡时间', value: '3-4分钟为最佳萃取' },
      ],
      tip: '专家建议：至少第一杯请喝黑咖啡。加牛奶或糖会掩盖科纳咖啡特有的巧克力和坚果风味。如果您通常在咖啡中加奶，您可能会惊讶于科纳咖啡本身有多么顺滑。',
    },
    whereTo: {
      title: '在威基基哪里可以品尝到正宗科纳咖啡',
      paragraphs: [
        '在威基基找到正宗的100%科纳咖啡可能出乎意料地困难。许多咖啡馆和酒店餐厅提供科纳拼配（记住，只有10%是真正的科纳），或因成本原因完全不提供科纳咖啡。',
        '在科纳咖啡甜甜圈，我们通过与1992年成立的夏威夷最受尊敬的咖啡公司之一——檀香山咖啡的合作，提供正宗的100%纯科纳咖啡。我们冲泡的每一杯都来自科纳地区火山斜坡上种植的豆子——不拼配，不妥协。',
        '在卡拉卡瓦大道的我们的门店，您可以将科纳咖啡与新鲜制作的麻糬甜甜圈、马拉萨达等夏威夷风味糕点搭配享用。无论您是首次到访还是回头客，品尝以最正宗方式冲泡的真正科纳咖啡，将是一次难忘的体验。',
      ],
      cta: '查看我们的科纳咖啡菜单',
    },
    faq: {
      title: '常见问题',
      items: [
        {
          q: '科纳咖啡真的比普通咖啡好吗？',
          a: '对大多数咖啡爱好者来说，是的。火山土壤、理想海拔和夏威夷微气候等独特种植条件，产出了具有巧克力和坚果风味、顺滑低酸的咖啡豆。在盲品测试中，科纳始终跻身世界顶级单一产地咖啡之列。',
        },
        {
          q: '科纳咖啡为什么这么贵？',
          a: '手工采摘、极其有限的种植面积（夏威夷48公里x3.2公里的区域）、高昂的夏威夷劳动力成本以及严格的质量分级，使得每磅价格达$30-50。全球咖啡供应量不到1%的天然稀缺性推高了价格。',
        },
        {
          q: '科纳咖啡是什么味道？',
          a: '科纳咖啡以顺滑、干净的口感和低酸度著称。典型的品鉴风味包括牛奶巧克力、红糖、夏威夷果和淡淡的焦糖甜味。尾韵干净，没有苦味。',
        },
        {
          q: '"科纳拼配"和科纳咖啡一样吗？',
          a: '不一样。"科纳拼配"在法律上只需含10%科纳豆——其余90%通常是廉价进口咖啡。请务必查看"100% Kona Coffee"标签。10%拼配和纯科纳之间的口感差异非常明显。',
        },
        {
          q: '在威基基哪里可以买到正宗100%科纳咖啡？',
          a: '卡拉卡瓦大道的科纳咖啡甜甜圈通过与檀香山咖啡（1992年成立）的合作提供正宗100%纯科纳咖啡。您也可以在专业零售店购买，但一定要确认"100% Kona"标签和具体的农场来源。',
        },
      ],
    },
    cta: {
      title: '在科纳咖啡甜甜圈品味不同',
      text: '在威基基2142 Kalakaua Ave体验正宗100%科纳咖啡。新鲜冲泡，绝不拼配。',
      button: '今天就来',
      learnMore: '了解更多关于我们的咖啡',
    },
    published: '2026年4月14日发布',
    readTime: '7分钟阅读',
  },
};

// BlogPosting JSON-LD
const blogPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Kona Coffee vs Regular Coffee: What Makes Hawaii\'s Famous Coffee Worth It',
  description: 'A complete guide comparing Kona coffee to regular coffee. Learn about growing conditions, flavor differences, pricing, how to spot fakes, and where to try real Kona coffee in Waikiki.',
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
    '@id': 'https://www.konacoffeedonut.com/en/blog/kona-coffee-guide',
  },
  wordCount: 1300,
  keywords: 'kona coffee, kona coffee vs regular coffee, hawaii coffee, 100% kona coffee, kona coffee guide',
};

// FAQPage JSON-LD
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Kona coffee really better than regular coffee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, for most coffee drinkers. Kona coffee\'s unique growing conditions — volcanic soil, ideal altitude, and Hawaii\'s microclimate — produce beans with a distinctly smooth, low-acid flavor profile with chocolate and nutty notes. In blind taste tests, Kona consistently ranks among the world\'s top single-origin coffees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is Kona coffee so expensive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona coffee costs $30-50 per pound due to hand harvesting, extremely limited growing area (a 30-by-2-mile strip in Hawaii), high Hawaiian labor costs, and strict quality grading. Production accounts for less than 1% of global coffee supply.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Kona coffee taste like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona coffee is known for its smooth, clean body with low acidity. Common tasting notes include milk chocolate, brown sugar, macadamia nut, and a subtle caramel sweetness. The finish is clean without bitterness.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is "Kona Blend" the same as Kona coffee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '"Kona Blend" legally only needs to contain 10% Kona beans — the other 90% is typically cheap imported coffee. Always look for "100% Kona Coffee" on the label.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I buy real 100% Kona coffee in Waikiki?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kona Coffee Donut on Kalakaua Avenue in Waikiki serves authentic 100% pure Kona coffee through their partnership with Honolulu Coffee (est. 1992). Always verify the "100% Kona" label.',
      },
    },
  ],
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export default function KonaCoffeeGuidePage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = content[locale as keyof typeof content] || content.en;

  return (
    <>
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
          src="/images/blog/kona-coffee-guide.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
      </div>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-amber-950 via-amber-900 to-yellow-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)' }} />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            {/* Breadcrumb */}
            <motion.nav
              className="flex items-center justify-center gap-2 text-amber-300/80 text-sm mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Link href={`/${locale}`} className="hover:text-amber-200 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href={`/${locale}/blog`} className="hover:text-amber-200 transition-colors">{t.hero.breadcrumb}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-amber-100">{t.hero.breadcrumbCurrent}</span>
            </motion.nav>

            <motion.div
              className="inline-flex items-center gap-2 bg-amber-800/50 text-amber-200 px-4 py-1.5 rounded-full text-sm mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Coffee className="w-4 h-4" />
              <span>{t.published} &middot; {t.readTime}</span>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-amber-100/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.hero.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Quick Answer - Featured Snippet */}
        <section className="py-12 px-4">
          <motion.div
            className="max-w-3xl mx-auto bg-amber-50 border-l-4 border-amber-600 rounded-r-2xl p-6 md:p-8 shadow-sm"
            {...fadeIn}
          >
            <h2 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
              <Coffee className="w-5 h-5" />
              {t.quickAnswer.title}
            </h2>
            <p
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.quickAnswer.text }}
            />
          </motion.div>
        </section>

        {/* What is Kona Coffee */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 flex items-center gap-3"
              {...fadeIn}
            >
              <Mountain className="w-8 h-8 text-amber-700 flex-shrink-0" />
              {t.whatIsKona.title}
            </motion.h2>
            {t.whatIsKona.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="text-gray-700 leading-relaxed mb-5 text-lg"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-amber-900 mb-10 text-center"
              {...fadeIn}
            >
              {t.comparisonTable.title}
            </motion.h2>
            <motion.div
              className="overflow-x-auto rounded-2xl shadow-lg border border-amber-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-amber-900 text-white">
                    {t.comparisonTable.headers.map((h, i) => (
                      <th key={i} className="px-5 py-4 font-semibold text-sm md:text-base">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t.comparisonTable.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-amber-50'}>
                      <td className="px-5 py-4 font-semibold text-amber-900 text-sm md:text-base border-r border-amber-100">
                        {row[0]}
                      </td>
                      <td className="px-5 py-4 text-amber-800 text-sm md:text-base border-r border-amber-100">
                        {row[1]}
                      </td>
                      <td className="px-5 py-4 text-gray-600 text-sm md:text-base">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* Why Kona Coffee Costs More */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 flex items-center gap-3"
              {...fadeIn}
            >
              <DollarSign className="w-8 h-8 text-amber-700 flex-shrink-0" />
              {t.whyCostsMore.title}
            </motion.h2>
            <motion.p className="text-gray-700 leading-relaxed mb-8 text-lg" {...fadeIn}>
              {t.whyCostsMore.intro}
            </motion.p>
            <div className="space-y-6">
              {t.whyCostsMore.reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-amber-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-amber-800 mb-2">{reason.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{reason.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Spot Fake Kona Coffee */}
        <section className="py-16 px-4 bg-red-50/50">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 flex items-center gap-3"
              {...fadeIn}
            >
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
              {t.spotFake.title}
            </motion.h2>
            <motion.p className="text-gray-700 leading-relaxed mb-8 text-lg" {...fadeIn}>
              {t.spotFake.intro}
            </motion.p>

            {/* Warning Box */}
            <motion.div
              className="bg-red-100 border border-red-300 rounded-xl p-6 mb-8"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-red-800 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                {t.spotFake.warning.title}
              </h3>
              <p className="text-red-900/80 leading-relaxed">{t.spotFake.warning.text}</p>
            </motion.div>

            {/* Tips */}
            <motion.ul className="space-y-3" {...fadeIn}>
              {t.spotFake.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* How to Brew Kona Coffee */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-amber-900 mb-4 flex items-center gap-3"
              {...fadeIn}
            >
              <Droplets className="w-8 h-8 text-amber-700 flex-shrink-0" />
              {t.brewing.title}
            </motion.h2>
            <motion.p className="text-gray-700 leading-relaxed mb-6 text-lg" {...fadeIn}>
              {t.brewing.intro}
            </motion.p>

            <motion.div
              className="bg-amber-50 rounded-xl p-6 mb-8 border border-amber-200"
              {...fadeIn}
            >
              <h3 className="text-xl font-bold text-amber-800 mb-2">{t.brewing.method.title}</h3>
              <p className="text-gray-700 leading-relaxed">{t.brewing.method.text}</p>
            </motion.div>

            <motion.div className="space-y-4 mb-8" {...fadeIn}>
              {t.brewing.steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white border border-amber-100 rounded-lg p-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-amber-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <span className="font-semibold text-amber-900">{step.label}: </span>
                    <span className="text-gray-700">{step.value}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="bg-amber-900 text-amber-50 rounded-xl p-6"
              {...fadeIn}
            >
              <p className="leading-relaxed">{t.brewing.tip}</p>
            </motion.div>
          </div>
        </section>

        {/* Where to Try Real Kona Coffee in Waikiki */}
        <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-amber-100/50">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 flex items-center gap-3"
              {...fadeIn}
            >
              <MapPin className="w-8 h-8 text-amber-700 flex-shrink-0" />
              {t.whereTo.title}
            </motion.h2>
            {t.whereTo.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="text-gray-700 leading-relaxed mb-5 text-lg"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {p}
              </motion.p>
            ))}
            <motion.div className="mt-8" {...fadeIn}>
              <Link
                href={`/${locale}/menu/kona-coffee`}
                className="inline-flex items-center gap-2 bg-amber-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-800 transition-colors"
              >
                <Coffee className="w-5 h-5" />
                {t.whereTo.cta}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-amber-900 mb-10 text-center"
              {...fadeIn}
            >
              {t.faq.title}
            </motion.h2>
            <div className="space-y-4">
              {t.faq.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-amber-100 rounded-xl overflow-hidden shadow-sm"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-amber-900 p-5 bg-amber-50/50">
                    {item.q}
                  </h3>
                  <p className="text-gray-700 leading-relaxed p-5 pt-3">
                    {item.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-8 px-4">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-4 justify-center">
            <Link
              href={`/${locale}/about-kona-coffee`}
              className="text-amber-700 hover:text-amber-900 underline underline-offset-4 transition-colors"
            >
              {t.cta.learnMore}
            </Link>
            <span className="text-amber-300">|</span>
            <Link
              href={`/${locale}/menu/kona-coffee`}
              className="text-amber-700 hover:text-amber-900 underline underline-offset-4 transition-colors"
            >
              {t.whereTo.cta}
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-amber-900 to-amber-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t.cta.title}
            </motion.h2>
            <motion.p
              className="text-xl mb-8 text-amber-100/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t.cta.text}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a
                href="https://maps.google.com/?q=2142+Kalakaua+Ave+Honolulu+HI+96815"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-amber-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-100 transition-colors"
              >
                {t.cta.button}
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
