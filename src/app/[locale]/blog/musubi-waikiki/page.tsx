'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'musubi-waikiki',
  imageSrc: '/images/blog/musubi-waikiki.jpeg',
  imageAlt: 'Spam musubi in Waikiki — grilled teriyaki spam and egg musubi at Kona Coffee Donut',
  schemaHeadline: 'Spam Musubi in Waikiki from $2.95: The Hawaii Classic, Made Fresh Daily',
  schemaDescription:
    'Where to get spam musubi in Waikiki: five fresh musubi varieties from $2.95 at Kona Coffee Donut, 2142 Kalākaua Ave — spam, teriyaki, egg, shiso wakame, and shrimp avocado.',
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'Spam Musubi in Waikiki, from $2.95',
      subtitle: "Hawaii's favorite grab-and-go, made fresh daily — five varieties, steps from Waikiki Beach.",
      date: 'Published August 2026',
      readTime: '4 min read',
      badge: 'Musubi Guide',
    },
    intro:
      "If there's one food that defines everyday eating in Hawaii, it's the spam musubi: grilled spam on a block of pressed rice, wrapped in a band of nori. Locals grab them at dawn on the way to work; surfers eat them one-handed between sets. In Waikiki, though, most visitors only see them shrink-wrapped at ABC Stores. Kona Coffee Donut makes musubi fresh in-store every day, from $2.95 — one of the cheapest hot bites anywhere on Kalākaua. Here's the lineup and why this humble rice block earned its cult status.",
    visitCTA: {
      headline: 'Fresh Musubi Daily, from $2.95',
      body:
        "Five varieties made in-store: classic Spam, Teriyaki Spam, Egg Spam, Shiso Wakame, and Shrimp Avocado. Grab one with a Kona coffee and you have the most local breakfast in Waikiki. Open 7 AM – 9 PM daily.",
      menuLabel: 'See the Full Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'The Musubi Lineup',
        body: "All five are made fresh through the day — if you see them come out warm, that's the moment:",
        bullets: [
          'Spam Musubi ($2.95) — the classic: grilled spam, pressed rice, nori. The benchmark.',
          'Teriyaki Spam ($2.95) — glazed with sweet-savory teriyaki, slightly caramelized on the grill',
          'Egg Spam ($3.50) — adds a folded egg omelet layer, the breakfast build',
          'Shiso Wakame ($2.95) — rice seasoned with shiso and seaweed, the vegetarian-friendly pick',
          'Shrimp Avocado Spam ($4.50) — the deluxe: shrimp, creamy avocado, and spam in one stack',
        ],
        pullout: {
          title: 'Why $2.95 matters',
          body:
            "In a neighborhood where a plate lunch runs $18 and hotel breakfast starts at $30, a fresh, hot, filling musubi for under $3 is the best food deal on the strip. Two musubi and a coffee is a real meal for about $11.",
        },
      },
      {
        h2: 'A 5-Second History of the Musubi',
        body:
          "Musubi comes from the Japanese onigiri, brought to Hawaii by plantation workers in the late 1800s. Spam arrived with the military during WWII, and by the 1980s a Honolulu shop had put the two together with a strip of nori. It stuck — Hawaii now eats more spam per person than any other state, and the musubi is the state's unofficial sandwich. Eating one in Waikiki is as local as it gets.",
      },
      {
        h2: 'How to Eat It Like a Local',
        body: "There's no wrong way, but there is a local way:",
        bullets: [
          'Eat it warm — fresh off the grill beats refrigerated every time',
          'One hand, no utensils — the nori band is the handle',
          'Pair with coffee in the morning, or a canned boba milk tea in the afternoon',
          'Take two to the beach — they hold up perfectly in a beach bag',
        ],
      },
    ],
    faq: [
      {
        q: 'Where can I get spam musubi in Waikiki?',
        a: 'Kona Coffee Donut at 2142 Kalākaua Ave makes musubi fresh in-store daily, from $2.95 — about a 5-minute walk from Waikiki Beach, open 7 AM to 9 PM.',
      },
      {
        q: 'How much is a spam musubi?',
        a: 'At Kona Coffee Donut, classic Spam, Teriyaki Spam, and Shiso Wakame musubi are $2.95 each. Egg Spam is $3.50 and Shrimp Avocado Spam is $4.50.',
      },
      {
        q: 'What is spam musubi?',
        a: "Spam musubi is Hawaii's iconic snack: a slice of grilled spam on pressed rice, wrapped with a band of nori seaweed. It evolved from Japanese onigiri and became a Hawaii staple after WWII.",
      },
      {
        q: 'Is there a vegetarian musubi option?',
        a: 'Yes — the Shiso Wakame musubi ($2.95) is rice seasoned with shiso herb and wakame seaweed, no spam.',
      },
      {
        q: 'Is musubi good for breakfast?',
        a: 'It is the local breakfast — warm rice, grilled spam, and protein for under $3.50, ready at 7 AM. Add a coffee and you are out the door for about $10.',
      },
    ],
    finalCTA: {
      headline: 'Grab a Musubi on Kalākaua',
      body: 'Five varieties from $2.95, made fresh daily. Open 7 AM – 9 PM, steps from the beach.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: { title: 'ワイキキのスパムむすび、$2.95〜', subtitle: 'ハワイの定番を毎日店内で手作り。5種類。', date: '2026年8月公開', readTime: '読了4分', badge: 'むすびガイド' },
    intro: 'ハワイの日常食といえばスパムむすび。ワイキキではABCストアの冷たいものが主流ですが、Kona Coffee Donutでは毎日店内で作りたてを$2.95から。カラカウア通り最安級の温かい一品です。',
    visitCTA: { headline: '作りたてむすび、$2.95〜', body: 'スパム、テリヤキ、エッグ、しそわかめ、シュリンプアボカドの5種。コナコーヒーと合わせればローカル流の朝食に。毎日7時〜21時。', menuLabel: 'メニューを見る', directionsLabel: '行き方を確認' },
    sections: [
      { h2: 'むすび全5種', body: '一日を通して作りたてが並びます：', bullets: ['スパムむすび $2.95', 'テリヤキスパム $2.95', 'エッグスパム $3.50', 'しそわかめ $2.95（スパムなし）', 'シュリンプアボカドスパム $4.50'], pullout: { title: '$2.95の価値', body: 'プレートランチ$18、ホテル朝食$30のワイキキで、温かいむすび$2.95は最強のコスパです。' } },
      { h2: 'むすびの歴史を5秒で', body: '起源は日本のおにぎり。プランテーション時代に伝わり、戦後スパムと出会って今の形に。ハワイは全米一のスパム消費州です。' },
      { h2: 'ローカル流の食べ方', body: '', bullets: ['温かいうちに', '海苔を持ち手に片手で', '朝はコーヒー、午後はボバミルクティーと', 'ビーチに2個持って行く'] },
    ],
    faq: [
      { q: '価格は？', a: 'スパム・テリヤキ・しそわかめ各$2.95、エッグ$3.50、シュリンプアボカド$4.50。' },
      { q: 'ベジタリアン向けは？', a: 'しそわかめむすび($2.95)はスパムなし。' },
      { q: '何時から買える？', a: '毎日朝7時から。朝食に最適です。' },
    ],
    finalCTA: { headline: 'カラカウアでむすびを', body: '5種類$2.95〜、毎日作りたて。', visitLabel: '今日来店', callLabel: '電話 (808) 304-1808' },
  },
  ko: {
    hero: { title: '와이키키 스팸무스비, $2.95부터', subtitle: '하와이 국민 간식을 매일 매장에서 직접. 5종.', date: '2026년 8월 발행', readTime: '4분 분량', badge: '무스비 가이드' },
    intro: '하와이 일상 음식의 대표는 스팸무스비. 와이키키에선 ABC스토어 랩 포장이 대부분이지만, Kona Coffee Donut은 매일 매장에서 갓 만들어 $2.95부터 팝니다. 칼라카우아 최저가급 따뜻한 한 끼예요.',
    visitCTA: { headline: '갓 만든 무스비, $2.95부터', body: '스팸, 테리야키, 에그, 시소와카메, 쉬림프아보카도 5종. 코나커피와 함께면 가장 로컬다운 아침. 매일 7시–21시.', menuLabel: '메뉴 보기', directionsLabel: '길찾기' },
    sections: [
      { h2: '무스비 5종', body: '하루 종일 수시로 갓 만들어 나옵니다:', bullets: ['스팸무스비 $2.95', '테리야키 스팸 $2.95', '에그 스팸 $3.50', '시소와카메 $2.95 (스팸 없음)', '쉬림프 아보카도 스팸 $4.50'], pullout: { title: '$2.95의 의미', body: '플레이트런치 $18, 호텔 조식 $30인 동네에서 따뜻한 무스비 $2.95는 와이키키 최고 가성비입니다.' } },
      { h2: '무스비 역사 5초 요약', body: '뿌리는 일본 오니기리. 플랜테이션 시대에 전해졌고 전후 스팸과 만나 지금의 형태로. 하와이는 미국 스팸 소비 1위 주입니다.' },
      { h2: '로컬처럼 먹는 법', body: '', bullets: ['따뜻할 때', '김을 손잡이 삼아 한 손으로', '아침엔 커피, 오후엔 보바 밀크티와', '비치에 2개 챙겨가기'] },
    ],
    faq: [
      { q: '가격은?', a: '스팸·테리야키·시소와카메 각 $2.95, 에그 $3.50, 쉬림프아보카도 $4.50.' },
      { q: '채식 옵션은?', a: '시소와카메 무스비($2.95)는 스팸 없이 시소+미역 밥.' },
      { q: '몇 시부터?', a: '매일 아침 7시부터. 아침식사로 최고.' },
    ],
    finalCTA: { headline: '칼라카우아에서 무스비 하나', body: '5종 $2.95부터, 매일 직접 제조.', visitLabel: '오늘 방문', callLabel: '전화 (808) 304-1808' },
  },
  zh: {
    hero: { title: '威基基午餐肉饭团，$2.95起', subtitle: '夏威夷国民小吃，每天店内现做，5种口味。', date: '2026年8月发布', readTime: '4分钟', badge: '饭团指南' },
    intro: '夏威夷最有代表性的日常美食就是午餐肉饭团(Spam Musubi)。在威基基大多只能买到便利店的冷藏款，而Kona Coffee Donut每天店内现做，$2.95起——卡拉考阿大道最便宜的热食之一。',
    visitCTA: { headline: '现做饭团，$2.95起', body: '经典午餐肉、照烧、鸡蛋、紫苏海带、虾仁牛油果5种。配一杯科纳咖啡就是最地道的早餐。每天7点–21点。', menuLabel: '查看菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '饭团全5种', body: '全天不定时现做出炉：', bullets: ['午餐肉饭团 $2.95', '照烧午餐肉 $2.95', '鸡蛋午餐肉 $3.50', '紫苏海带 $2.95（素食可选）', '虾仁牛油果午餐肉 $4.50'], pullout: { title: '$2.95的意义', body: '在午餐$18、酒店早餐$30起的威基基，$2.95的热饭团是性价比之王。' } },
      { h2: '5秒了解饭团历史', body: '源自日本饭团，种植园时代传入夏威夷，二战后与午餐肉结合成现在的样子。夏威夷是全美午餐肉消费第一州。' },
      { h2: '像本地人一样吃', body: '', bullets: ['趁热吃', '海苔当把手，单手拿', '早上配咖啡，下午配珍珠奶茶', '带两个去海滩'] },
    ],
    faq: [
      { q: '价格？', a: '经典/照烧/紫苏海带各$2.95，鸡蛋$3.50，虾仁牛油果$4.50。' },
      { q: '有素食吗？', a: '紫苏海带饭团($2.95)不含午餐肉。' },
      { q: '几点开始卖？', a: '每天早7点起，早餐首选。' },
    ],
    finalCTA: { headline: '来卡拉考阿吃个饭团', body: '5种口味$2.95起，每天现做。', visitLabel: '立即到店', callLabel: '致电 (808) 304-1808' },
  },
  es: {
    hero: { title: 'Spam Musubi en Waikiki desde $2.95', subtitle: 'El snack favorito de Hawái, hecho fresco a diario — cinco variedades.', date: 'Agosto 2026', readTime: '4 min', badge: 'Guía de Musubi' },
    intro: 'El spam musubi — spam a la parrilla sobre arroz prensado, envuelto en nori — es la comida diaria de Hawái. En Kona Coffee Donut lo hacemos fresco cada día desde $2.95.',
    visitCTA: { headline: 'Musubi fresco desde $2.95', body: 'Spam clásico, teriyaki, huevo, shiso wakame y camarón-aguacate. Con un café Kona es el desayuno más local de Waikiki. 7 AM – 9 PM.', menuLabel: 'Ver Menú', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Las cinco variedades', body: 'Hechas frescas durante el día:', bullets: ['Spam Musubi $2.95', 'Teriyaki Spam $2.95', 'Huevo y Spam $3.50', 'Shiso Wakame $2.95 (vegetariano)', 'Camarón Aguacate Spam $4.50'] },
      { h2: 'Cómo comerlo como local', body: '', bullets: ['Caliente, recién hecho', 'Con una mano — el nori es el mango', 'Con café por la mañana', 'Lleva dos a la playa'] },
    ],
    faq: [
      { q: '¿Precio?', a: 'Desde $2.95; huevo $3.50; camarón-aguacate $4.50.' },
      { q: '¿Opción vegetariana?', a: 'Shiso Wakame ($2.95), sin spam.' },
    ],
    finalCTA: { headline: 'Tu musubi en Kalākaua', body: 'Cinco variedades desde $2.95, frescas a diario.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 304-1808' },
  },
};

export default function MusubiWaikikiPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
