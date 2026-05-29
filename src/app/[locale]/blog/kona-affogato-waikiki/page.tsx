'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'kona-affogato-waikiki',
  imageSrc: '/images/blog/kona-affogato-waikiki.jpeg',
  imageAlt: 'Kona affogato — espresso poured over vanilla bean ice cream at Kona Coffee Donut Waikiki',
  schemaHeadline: 'Kona Affogato in Waikiki: Why Coffee Lovers Should Try This',
  schemaDescription:
    'A guide to Kona affogato — Italian-style espresso over vanilla ice cream — and where to try the best version in Waikiki at Kona Coffee Donut on Kalākaua Avenue.',
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Kona Affogato in Waikiki',
      subtitle: 'The simple Italian dessert that turns Honolulu Coffee into something magical.',
      date: 'Updated May 2026',
      readTime: '4 min read',
      badge: 'Coffee Dessert',
    },
    intro:
      "Affogato is the kind of dessert that sounds too simple to be impressive: a scoop of vanilla bean ice cream, drowned in a shot of fresh hot espresso, eaten immediately while the espresso melts the cream. The simplicity is the point. When the espresso is exceptional — and at Kona Coffee Donut, ours is Honolulu Coffee — the affogato becomes one of the best coffee desserts you can order. Here's what makes a great affogato, why Kona coffee elevates it, and where to try it on Kalākaua Avenue.",
    visitCTA: {
      headline: 'Kona Affogato — A Waikiki Coffee Dessert Worth Walking For',
      body:
        "Made with Honolulu Coffee espresso, premium vanilla bean ice cream, and a small Italian-style ceramic glass. Eaten while still hot meeting cold. A perfect afternoon or after-dinner stop. Open daily 7 AM to 9 PM.",
      menuLabel: 'See Coffee Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'What Is Affogato?',
        body:
          "Affogato (Italian for \"drowned\") is a classic Italian coffee dessert. Two scoops of pure vanilla bean ice cream sit in a small glass. A fresh shot of hot espresso is poured directly over the top, immediately. The hot espresso starts melting the ice cream into a coffee-cream pool while the rest of the ice cream stays cold and intact. You eat it with a small spoon, getting espresso, melted cream, and ice cream in every bite. The contrast between hot and cold, bitter and sweet, intense and creamy is what makes affogato so addictive.",
        bullets: [
          'Two scoops of vanilla bean ice cream',
          'A single shot of fresh, hot espresso',
          'Poured at the table, eaten immediately',
          'Hot meets cold, bitter meets sweet',
          'Best Italian dessert that\'s also a coffee drink',
        ],
      },
      {
        h2: 'Why Kona Coffee Makes the Best Affogato',
        body:
          "An affogato is only as good as the espresso. Generic commodity espresso makes a generic affogato. Honolulu Coffee, with its smooth body, low bitterness, and notes of brown sugar and chocolate, makes an affogato that tastes balanced rather than bitter. The smooth Kona espresso doesn't overwhelm the vanilla; it complements it. And because Kona is naturally low in acid, the affogato finishes clean — no sour aftertaste, just creamy coffee bliss.",
        pullout: {
          title: 'Pro tip',
          body: 'Eat your affogato within 60 seconds of the espresso pour. The texture contrast is at its peak right when hot meets cold — wait too long and it becomes a coffee milkshake.',
        },
      },
      {
        h2: 'How We Build Our Affogato',
        body:
          "Two scoops of vanilla bean ice cream go into a small Italian-style glass. We pull a fresh single shot of Honolulu Coffee espresso and pour it over at the table just before serving. You eat it immediately with a small spoon. Add-ons available: an extra espresso shot for double intensity, a drizzle of caramel or chocolate, or a side of mochi donut to dip.",
      },
      {
        h2: 'When to Order Affogato',
        body:
          "Affogato hits at multiple times of day. As an afternoon pick-me-up, the espresso shot gives you a caffeine boost while the ice cream cools you down on a hot Waikiki afternoon. As an after-dinner dessert, it's lighter than a full dessert plate but more satisfying than just coffee. As a date-night moment, it's photogenic and shareable. As a beach-day reward, it's hot-cold contrast made for tropical weather.",
        bullets: [
          'Afternoon caffeine fix that doubles as dessert',
          'Light after-dinner option (no heavy cake or pie)',
          'Photogenic date-night order',
          'Beach-day cool-down with caffeine bonus',
          'Hot-cold contrast perfect for Waikiki weather',
        ],
      },
      {
        h2: 'Best Affogato Pairings',
        body:
          "Affogato is a complete dessert on its own, but if you want to extend the experience:",
        bullets: [
          'Add a Mochi Donut on the side — chocolate or black sesame works best',
          'Order a glass of cold water to cleanse the palate between bites',
          'Skip dessert and just pair it with a savory mochi donut for an Italian-Hawaiian fusion moment',
          'Take it to-go in a thermal cup if you want to walk to the beach (but eat fast)',
        ],
      },
    ],
    faq: [
      { q: 'What is affogato?', a: 'Affogato is an Italian dessert made by pouring a hot shot of espresso over vanilla bean ice cream. The hot espresso melts part of the ice cream while the rest stays cold, creating a hot-cold, bitter-sweet contrast that\'s eaten immediately with a small spoon.' },
      { q: 'Where can I get affogato in Waikiki?', a: 'Kona Coffee Donut at 2142 Kalākaua Ave serves Kona affogato — vanilla bean ice cream with a fresh shot of Honolulu Coffee espresso. Walking distance from Waikiki Beach. Open 7 AM to 9 PM.' },
      { q: 'How much does affogato cost?', a: 'Kona affogato pricing is available in-store. It\'s a premium dessert priced fairly for the quality of the Honolulu Coffee espresso and vanilla bean ice cream used.' },
      { q: 'Is affogato a coffee or a dessert?', a: 'Both! It contains a full shot of espresso (so it\'s caffeinated like a coffee drink) but is served as a dessert. Italian tradition treats it as a dessert; coffee lovers treat it as a way to enjoy espresso in dessert form.' },
      { q: 'What makes Kona affogato special?', a: 'Honolulu Coffee has a smooth body, low acidity, and notes of brown sugar and chocolate. It pairs exceptionally well with vanilla bean ice cream — balanced, not bitter, with a clean finish.' },
      { q: 'Can I order affogato in the morning?', a: 'Yes, we serve affogato all hours from 7 AM to 9 PM. Many regulars order it as a late-morning or early-afternoon coffee+dessert combo.' },
    ],
    finalCTA: {
      headline: 'Try Kona Affogato Today',
      body: 'Two scoops of vanilla bean ice cream, one shot of Honolulu Coffee espresso, eaten immediately. The simplest perfect dessert in Waikiki.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: { title: 'ワイキキで楽しむコナアフォガート', subtitle: 'ホノルルコーヒーが魔法に変わるシンプルなイタリアンデザート。', date: '2026年5月更新', readTime: '読了4分', badge: 'コーヒーデザート' },
    intro: 'アフォガートはバニラアイスに熱いエスプレッソをかけて即食べる、シンプルなのに最高のコーヒーデザート。ホノルルコーヒーエスプレッソで作ると別格の味わいに。',
    visitCTA: { headline: 'カラカウア通りで本格コナアフォガート', body: 'ホノルルコーヒーエスプレッソとプレミアムバニラビーンアイス。アツアツとひんやりが一度に楽しめる至福のデザート。毎日朝7時〜夜9時。', menuLabel: 'コーヒーメニュー', directionsLabel: '行き方を確認' },
    sections: [
      { h2: 'アフォガートとは？', body: 'イタリア語で「溺れた」の意。バニラアイスに熱いエスプレッソをかけて作るシンプルなデザート。', bullets: ['バニラアイス2スクープ', '熱々のエスプレッソショット', 'テーブルでかけてすぐに食べる', '熱と冷、苦味と甘味の対比', '最高のイタリアンデザート×コーヒー'] },
      { h2: 'なぜコナアフォガートが特別？', body: 'コナのスムースな味わい、酸味の少なさ、ブラウンシュガーのような甘み — バニラに完璧にマッチします。', pullout: { title: 'プロのコツ', body: 'エスプレッソをかけてから60秒以内に食べるのが理想。熱と冷の対比が一番美しい瞬間です。' } },
      { h2: '当店のアフォガート', body: 'バニラビーンアイス2スクープ + ホノルルコーヒーのフレッシュエスプレッソ + 本格イタリアンスタイルグラス。' },
      { h2: 'いつ食べる？', body: '午後のカフェイン補給、ディナー後のデザート、デートにも最適。ハワイの暑い気候にぴったり。' },
    ],
    faq: [
      { q: 'アフォガートとは？', a: 'バニラアイスに熱いエスプレッソをかけたイタリアン伝統デザート。' },
      { q: 'ワイキキでアフォガートは？', a: 'コナコーヒードーナツ（カラカウア通り 2142）でホノルルコーヒーアフォガート提供。' },
      { q: 'コーヒー？デザート？', a: '両方。エスプレッソショット入りなのでカフェインもあり。' },
      { q: '何が特別？', a: 'ホノルルコーヒーのスムースな味とバニラの相性が抜群。' },
    ],
    finalCTA: { headline: '今日コナアフォガートを', body: 'カラカウア通り 2142、ワイキキ中心部。', visitLabel: '今日来店', callLabel: '電話 (808) 304-1808' },
  },
  ko: {
    hero: { title: '와이키키 코나 아포가토', subtitle: '호놀룰루 커피를 마법처럼 만드는 단순한 이탈리아 디저트.', date: '2026년 5월', readTime: '4분 분량', badge: '커피 디저트' },
    intro: '아포가토는 바닐라 아이스크림에 뜨거운 에스프레소를 부어 바로 먹는 단순하지만 완벽한 디저트. 호놀룰루 커피로 만들면 차원이 다릅니다.',
    visitCTA: { headline: '칼라카우아 거리의 코나 아포가토', body: '호놀룰루 커피 에스프레소와 프리미엄 바닐라빈 아이스크림. 뜨거움과 차가움의 만남. 매일 7시–21시.', menuLabel: '커피 메뉴', directionsLabel: '길찾기' },
    sections: [
      { h2: '아포가토란?', body: '이탈리아어로 "잠긴". 바닐라 아이스크림에 뜨거운 에스프레소를 부어 즉시 먹는 디저트.', bullets: ['바닐라 아이스 2스쿱', '뜨거운 에스프레소 1샷', '즉석에서 부어 즉시 시식', '뜨거움-차가움, 쓴맛-단맛의 대비'] },
      { h2: '왜 코나가 특별한가요', body: '부드럽고 산미 낮은 코나가 바닐라와 완벽히 어울려 균형감 있는 맛.', pullout: { title: '꿀팁', body: '에스프레소를 붓고 60초 안에 드세요.' } },
      { h2: '저희 아포가토', body: '바닐라빈 아이스 2스쿱 + 호놀룰루 커피 에스프레소 + 이탈리안 스타일 글래스.' },
      { h2: '언제 먹나요?', body: '오후 카페인 보충, 디저트, 데이트, 비치데이 등 어떤 순간에도.' },
    ],
    faq: [
      { q: '아포가토란?', a: '바닐라 아이스에 뜨거운 에스프레소를 부은 이탈리안 디저트.' },
      { q: '와이키키 어디서?', a: '코나커피도넛(2142 칼라카우아)에서 호놀룰루 커피 아포가토 제공.' },
      { q: '커피인가요 디저트인가요?', a: '둘 다. 에스프레소 샷이 들어 카페인도 있음.' },
      { q: '왜 특별한가요?', a: '호놀룰루 커피의 부드러움이 바닐라와 환상의 조합.' },
    ],
    finalCTA: { headline: '오늘 코나 아포가토를', body: '와이키키 중심부 2142 칼라카우아.', visitLabel: '오늘 방문', callLabel: '전화 (808) 304-1808' },
  },
  zh: {
    hero: { title: '威基基的科纳阿芙佳朵', subtitle: '让檀香山咖啡变神奇的简单意式甜品。', date: '2026年5月', readTime: '4分钟', badge: '咖啡甜品' },
    intro: '阿芙佳朵是把热浓缩咖啡倒在香草冰淇淋上立即享用的简单完美甜品。用檀香山咖啡制作，味道升级。',
    visitCTA: { headline: '卡拉考阿大道的科纳阿芙佳朵', body: '檀香山咖啡浓缩咖啡 + 顶级香草豆冰淇淋。冷热交融的瞬间美味。每天7点–21点。', menuLabel: '咖啡菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '什么是阿芙佳朵？', body: '意大利语意为"被淹没"。香草冰淇淋上倒入热浓缩咖啡，立即享用。', bullets: ['两球香草冰淇淋', '一份热浓缩', '现场倒入立即食用', '冷热苦甜对比', '咖啡×甜品的完美结合'] },
      { h2: '为什么科纳阿芙佳朵特别', body: '科纳的顺滑、低酸、黑糖香气与香草完美匹配。', pullout: { title: '小贴士', body: '60秒内享用，体验冷热反差的最佳时刻。' } },
      { h2: '我们的阿芙佳朵', body: '香草豆冰淇淋两球 + 檀香山咖啡浓缩 + 意式玻璃杯。' },
      { h2: '什么时候点？', body: '午后提神、餐后甜品、约会、海滩奖励。' },
    ],
    faq: [
      { q: '阿芙佳朵是什么？', a: '香草冰淇淋上倒热浓缩咖啡的意式甜品。' },
      { q: '威基基哪里能吃到？', a: 'Kona Coffee Donut（卡拉考阿大道2142号）。' },
      { q: '是咖啡还是甜品？', a: '都是。含浓缩咖啡，所以有咖啡因。' },
      { q: '科纳的特别之处？', a: '檀香山咖啡顺滑低酸，与香草完美搭配。' },
    ],
    finalCTA: { headline: '今天就试试科纳阿芙佳朵', body: '威基基中心 2142 卡拉考阿。', visitLabel: '立即到店', callLabel: '致电 (808) 304-1808' },
  },
  es: {
    hero: { title: 'Affogato Kona en Waikiki', subtitle: 'El postre italiano simple que transforma el espresso Honolulu Coffee en algo mágico.', date: 'Mayo 2026', readTime: '4 min', badge: 'Postre de Café' },
    intro: 'Affogato — helado de vainilla "ahogado" en espresso caliente, comido al instante. Con espresso Honolulu Coffee, se convierte en uno de los mejores postres de café que existen.',
    visitCTA: { headline: 'Affogato Kona en Kalākaua', body: 'Espresso Honolulu Coffee y helado de vainilla premium. Caliente sobre frío. Abierto 7 AM a 9 PM.', menuLabel: 'Ver Menú', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: '¿Qué es Affogato?', body: 'Postre italiano: dos bolas de helado de vainilla con un shot de espresso caliente vertido encima.', bullets: ['Dos bolas de helado vainilla', 'Un shot de espresso caliente', 'Servido al instante', 'Contraste frío-caliente, dulce-amargo'] },
      { h2: '¿Por qué Kona es perfecto?', body: 'El cuerpo suave y baja acidez del Kona se equilibra perfectamente con el helado.', pullout: { title: 'Consejo', body: 'Cómelo en menos de 60 segundos para máximo contraste.' } },
      { h2: 'Cómo lo Hacemos', body: 'Dos bolas de helado de vainilla bourbon + shot fresco de espresso Honolulu Coffee + vaso italiano.' },
      { h2: '¿Cuándo Pedirlo?', body: 'Pick-me-up de tarde, postre después de cena, momento fotogénico, refresco de día de playa.' },
    ],
    faq: [
      { q: '¿Qué es affogato?', a: 'Helado de vainilla con espresso caliente vertido encima — postre italiano.' },
      { q: '¿Dónde encontrarlo?', a: 'Kona Coffee Donut, 2142 Kalākaua Ave, Waikiki.' },
      { q: '¿Café o postre?', a: 'Ambos. Tiene espresso, así que también es cafeína.' },
    ],
    finalCTA: { headline: 'Prueba el Affogato Kona Hoy', body: '2142 Kalākaua Ave, Waikiki.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 304-1808' },
  },
};

export default function KonaAffogatoPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
