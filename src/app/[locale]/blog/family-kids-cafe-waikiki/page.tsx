'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'family-kids-cafe-waikiki',
  imageSrc: '/images/blog/family-kids-cafe-waikiki.jpeg',
  imageAlt:
    'Kid-friendly treats at Kona Coffee Donut in Waikiki: Waikiki Rainbow shave ice, strawberry and ube mochi donuts, a strawberry banana smoothie, a potato corn dog and a sugar malasada',
  schemaHeadline: 'Family-Friendly Cafe in Waikiki: Kid Favorites From $2.95',
  schemaDescription:
    'Where to take kids in Waikiki: Kona Coffee Donut at 2142 Kalākaua Ave has mochi donuts ($3.95), rainbow shave ice, fruit smoothies, corn dogs ($6.99) and Spam musubi ($2.95), open 7 AM to 9 PM daily.',
  datePublished: '2026-10-15',
  related: [
    {
      path: '/blog/what-is-a-mochi-donut',
      label: {
        en: 'What is a mochi donut?',
        ja: 'モチドーナツとは？',
        ko: '모찌도넛이란?',
        zh: '什么是麻糬甜甜圈？',
        es: '¿Qué es un mochi donut?',
      },
    },
    {
      path: '/blog/korean-corn-dog-waikiki-guide',
      label: {
        en: 'Korean corn dogs in Waikiki: every style explained',
        ja: 'ワイキキの韓国式ホットドッグガイド',
        ko: '와이키키 한국식 핫도그 가이드',
        zh: '威基基韩式热狗指南',
        es: 'Corn dogs coreanos en Waikiki',
      },
    },
    {
      path: '/blog/best-smoothies-waikiki',
      label: {
        en: 'Best smoothies in Waikiki',
        ja: 'ワイキキのおすすめスムージー',
        ko: '와이키키 스무디 추천',
        zh: '威基基最佳冰沙',
        es: 'Mejores smoothies en Waikiki',
      },
    },
  ],
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'A Family-Friendly Cafe in Waikiki: What Kids Actually Want',
      subtitle: 'Mochi donuts, rainbow shave ice, fruit smoothies and corn dogs — quick counter service on Kalākaua Avenue, open 7 AM to 9 PM.',
      date: 'Published October 2026',
      readTime: '5 min read',
      badge: 'Family Guide',
    },
    intro:
      "Feeding kids in Waikiki is mostly about timing: something quick before the beach, something cold after it, and something that doesn't need a sit-down reservation at 8 PM when everyone's tired. Kona Coffee Donut at 2142 Kalākaua Ave is a counter-service shop about five minutes' walk from Waikiki Beach, open 7 AM to 9 PM every day, with a menu that reads like a kids' wish list — mochi donuts, rainbow shave ice, fruit smoothies, Korean corn dogs and Spam musubi. Parents get 100% Kona coffee. Here's what to order by age and appetite, which drinks skip coffee and tea, and how to feed the whole family without overspending.",
    visitCTA: {
      headline: 'Kid Favorites From $2.95',
      body:
        'Spam musubi $2.95, mochi donuts $3.95, corn dogs from $6.99, shave ice cups $8.95. 2142 Kalākaua Ave, about 5 minutes from Waikiki Beach, open 7 AM to 9 PM daily.',
      menuLabel: 'See the Full Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'Why It Works for Families',
        body:
          "You order at the counter, so there's no table wait and no long menu to read to a hungry five-year-old. Hours run 7 AM to 9 PM, which covers the early jet-lag breakfast and the late post-sunset snack. And there's something for every kind of eater — sweet, savory, cold, or just a brightly glazed donut.",
      },
      {
        h2: 'Kid Favorites (With Prices)',
        body: 'Every price below is from our register this month:',
        bullets: [
          'Mochi donuts — $3.95 each; chewy, ring-shaped and brightly glazed',
          'Classic malasada — $3.95; sugar-rolled, no hole, an easy first Hawaii treat',
          'Shave Ice Cup — $8.95; or the Waikiki Rainbow Hawaiian-style shave ice ($12.95), big enough to share',
          'Ice cream — $6.95 for one scoop, $8.95 for two',
          'Korean rice corn dog — Original $6.99; Potato or Cheetos $7.99 for the adventurous',
          'Spam musubi — $2.95; Egg Spam musubi $3.50, a fast 7 AM breakfast',
          'Malasada Ice Cream Sandwich — $8.95, a malasada filled with a scoop of ice cream',
        ],
        pullout: {
          title: 'Parent hack',
          body: 'Get a 6-pack of mochi donuts in mixed flavors and let everyone pick one: $22.50 instead of $23.70 for six singles.',
        },
      },
      {
        h2: 'Drinks Without Coffee or Tea',
        body:
          "Plenty of the menu is caffeinated — coffee drinks, matcha, hojicha, milk teas and Thai tea all contain coffee or tea. For kids, stick to these:",
        bullets: [
          'Fruit smoothies — $10.95 (Strawberry, Mango, Lychee, Piña Colada); Strawberry Banana $12.95',
          'Lemonade — $8.95, plain or Strawberry, Mango or Lilikoi',
          'Hot Chocolate — $6.50 for cooler evenings',
          'Free filtered water — always',
        ],
      },
      {
        h2: 'Feeding the Whole Family Without Overspending',
        body:
          "Breakfast for four can be two Spam musubi, a 6-pack of mochi donuts and a Kona coffee for the adults. After the beach, one Waikiki Rainbow shave ice ($12.95) shared between two kids goes further than two separate desserts. Boxes of malasadas ($22.50 for six, $45.00 a dozen) travel back to the hotel for tomorrow morning.",
      },
      {
        h2: 'Allergies and Ingredients',
        body:
          "We don't make allergy-safe, gluten-free or vegan claims for any item. If a child has a food allergy, please ask at the counter about ingredients before ordering.",
      },
    ],
    faq: [
      {
        q: 'Is there a kid-friendly cafe in Waikiki?',
        a: 'Kona Coffee Donut at 2142 Kalākaua Ave, about 5 minutes from Waikiki Beach, is a quick counter-service stop for families: mochi donuts $3.95, shave ice cups $8.95, fruit smoothies $10.95, corn dogs from $6.99 and Spam musubi $2.95. Open 7 AM to 9 PM daily.',
      },
      {
        q: 'What drinks without coffee or tea can kids get in Waikiki?',
        a: 'At Kona Coffee Donut in Waikiki, fruit smoothies (Strawberry, Mango, Lychee, Piña Colada) are $10.95, lemonades are $8.95 and hot chocolate is $6.50. Coffee, matcha, hojicha and milk-tea drinks contain caffeine.',
      },
      {
        q: 'How much are mochi donuts at Kona Coffee Donut?',
        a: 'Mochi donuts at Kona Coffee Donut, 2142 Kalākaua Ave in Waikiki, are $3.95 each, $11.25 for 3, $22.50 for 6 and $45.00 for 12.',
      },
      {
        q: 'Is there something savory for kids, not just sweets?',
        a: 'Yes. Kona Coffee Donut in Waikiki sells Korean rice corn dogs from $6.99 (Original) and Spam musubi from $2.95, alongside the donuts and shave ice. Open 7 AM to 9 PM.',
      },
      {
        q: 'What time does Kona Coffee Donut open for breakfast?',
        a: 'Kona Coffee Donut on Kalākaua Avenue in Waikiki opens at 7 AM and closes at 9 PM every day. Call (808) 260-1835 with questions.',
      },
    ],
    finalCTA: {
      headline: 'Bring the Kids This Afternoon',
      body: 'Mochi donuts $3.95, shave ice from $8.95, corn dogs from $6.99. 2142 Kalākaua Ave, open 7 AM – 9 PM daily.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 260-1835',
    },
  },
  ja: {
    hero: { title: 'ワイキキの子連れカフェ：子どもが本当に喜ぶメニュー', subtitle: 'モチドーナツ、レインボーかき氷、フルーツスムージー、ホットドッグ。カウンター注文ですぐ。朝7時〜夜9時。', date: '2026年10月公開', readTime: '読了5分', badge: '家族向けガイド' },
    intro: '子連れのワイキキは、ビーチ前のさっと朝ごはん、ビーチ後の冷たいおやつ、疲れた夜の軽食がポイント。カラカウア通り2142のKona Coffee Donutはカウンター注文式で、ワイキキビーチから徒歩約5分、毎日朝7時〜夜9時営業。モチドーナツ、かき氷、スムージー、韓国式ホットドッグ、スパムむすびがそろい、大人は100%コナコーヒーを。',
    visitCTA: { headline: '子どもに人気のメニュー $2.95〜', body: 'スパムむすび$2.95、モチドーナツ$3.95、ホットドッグ$6.99〜、かき氷カップ$8.95。ワイキキビーチから徒歩約5分、毎日朝7時〜夜9時。', menuLabel: 'メニューを見る', directionsLabel: '行き方を確認' },
    sections: [
      { h2: '子どもに人気のメニュー', body: '今月のレジ価格です。', bullets: ['モチドーナツ $3.95（6個$22.50）', 'マラサダ $3.95', 'かき氷カップ $8.95／ワイキキレインボー $12.95', 'アイスクリーム 1スクープ$6.95', '韓国式ホットドッグ $6.99〜', 'スパムむすび $2.95'] },
      { h2: 'コーヒー・お茶なしのドリンク', body: 'フルーツスムージー（ストロベリー、マンゴー、ライチなど）$10.95、レモネード$8.95、ホットチョコレート$6.50。コーヒー、抹茶、ほうじ茶、ミルクティーにはカフェインが含まれます。' },
      { h2: 'アレルギーについて', body: 'アレルギー対応・グルテンフリーの表示はしていません。お子さまにアレルギーがある場合は、ご注文前にスタッフへ原材料をお尋ねください。' },
    ],
    faq: [
      { q: 'ワイキキで子連れに便利なカフェは？', a: 'Kona Coffee Donut（2142 Kalākaua Ave、ワイキキビーチから徒歩約5分）はカウンター注文ですぐ買えます。モチドーナツ$3.95、かき氷$8.95〜、スムージー$10.95、ホットドッグ$6.99〜。毎日朝7時〜夜9時。' },
      { q: '子ども向けのカフェインなしドリンクは？', a: 'Kona Coffee Donutではフルーツスムージー$10.95、レモネード$8.95、ホットチョコレート$6.50があります。' },
      { q: 'モチドーナツはいくらですか？', a: '1個$3.95、3個$11.25、6個$22.50、12個$45.00です（Kona Coffee Donut、ワイキキ）。' },
    ],
    finalCTA: { headline: '今日、家族でカラカウア通りへ', body: 'モチドーナツ$3.95、かき氷$8.95〜。毎日朝7時〜夜9時。', visitLabel: '今日来店', callLabel: '電話 (808) 260-1835' },
  },
  ko: {
    hero: { title: '와이키키 아이랑 가기 좋은 카페: 아이들이 진짜 좋아하는 메뉴', subtitle: '모찌도넛, 레인보우 빙수, 과일 스무디, 핫도그. 카운터 주문이라 빠르게. 아침 7시–밤 9시.', date: '2026년 10월 발행', readTime: '5분 분량', badge: '가족 가이드' },
    intro: '아이와 와이키키 여행은 타이밍이 전부입니다. 해변 가기 전 간단한 아침, 해변 후 시원한 간식, 다들 지친 밤의 가벼운 한 끼. 칼라카우아 2142 Kona Coffee Donut은 카운터 주문 매장으로 와이키키 비치에서 도보 약 5분, 매일 아침 7시–밤 9시 영업합니다. 모찌도넛, 빙수, 스무디, 한국식 핫도그, 스팸 무스비가 있고 어른은 100% 코나 커피를 즐기면 됩니다.',
    visitCTA: { headline: '아이 인기 메뉴 $2.95부터', body: '스팸 무스비 $2.95, 모찌도넛 $3.95, 핫도그 $6.99부터, 빙수 컵 $8.95. 와이키키 비치에서 도보 약 5분, 매일 아침 7시–밤 9시.', menuLabel: '메뉴 보기', directionsLabel: '길찾기' },
    sections: [
      { h2: '아이들 인기 메뉴', body: '이번 달 매장 가격입니다.', bullets: ['모찌도넛 $3.95 (6개 $22.50)', '말라사다 $3.95', '빙수 컵 $8.95 / 와이키키 레인보우 $12.95', '아이스크림 1스쿱 $6.95', '한국식 핫도그 $6.99부터', '스팸 무스비 $2.95'] },
      { h2: '커피·차 없는 음료', body: '과일 스무디(딸기, 망고, 리치 등) $10.95, 레모네이드 $8.95, 핫초코 $6.50. 커피, 말차, 호지차, 밀크티에는 카페인이 들어 있습니다.' },
      { h2: '알레르기 안내', body: '알레르기 안전·글루텐프리 표시는 하지 않습니다. 아이에게 알레르기가 있다면 주문 전 직원에게 재료를 꼭 물어봐 주세요.' },
    ],
    faq: [
      { q: '와이키키에서 아이랑 가기 좋은 카페는?', a: 'Kona Coffee Donut(2142 Kalākaua Ave, 와이키키 비치에서 도보 약 5분)은 카운터 주문이라 빠릅니다. 모찌도넛 $3.95, 빙수 $8.95부터, 스무디 $10.95, 핫도그 $6.99부터. 매일 아침 7시–밤 9시.' },
      { q: '아이용 카페인 없는 음료가 있나요?', a: 'Kona Coffee Donut에는 과일 스무디 $10.95, 레모네이드 $8.95, 핫초코 $6.50이 있습니다.' },
      { q: '모찌도넛 가격은?', a: '1개 $3.95, 3개 $11.25, 6개 $22.50, 12개 $45.00입니다(Kona Coffee Donut, 와이키키).' },
    ],
    finalCTA: { headline: '오늘 가족과 칼라카우아로', body: '모찌도넛 $3.95, 빙수 $8.95부터. 매일 아침 7시–밤 9시.', visitLabel: '오늘 방문', callLabel: '전화 (808) 260-1835' },
  },
  zh: {
    hero: { title: '威基基亲子友好咖啡店：孩子真正爱吃的', subtitle: '麻糬甜甜圈、彩虹刨冰、水果冰沙、热狗。柜台点餐，出餐快。早7点至晚9点。', date: '2026年10月发布', readTime: '5分钟', badge: '亲子指南' },
    intro: '带孩子在威基基吃东西，关键在时机：去海滩前的快速早餐、海滩后的冰品、晚上累了的小点心。卡拉考阿大道2142号的Kona Coffee Donut是柜台点餐店，距威基基海滩步行约5分钟，每天早7点至晚9点营业，有麻糬甜甜圈、刨冰、冰沙、韩式热狗和午餐肉饭团，大人可以喝100%科纳咖啡。',
    visitCTA: { headline: '孩子最爱 $2.95起', body: '午餐肉饭团$2.95、麻糬甜甜圈$3.95、热狗$6.99起、刨冰杯$8.95。距威基基海滩步行约5分钟，每天早7点至晚9点。', menuLabel: '查看菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '孩子最爱的菜单', body: '以下为本月门店价格：', bullets: ['麻糬甜甜圈 $3.95（6个$22.50）', '马拉萨达 $3.95', '刨冰杯 $8.95／威基基彩虹 $12.95', '冰淇淋一球 $6.95', '韩式热狗 $6.99起', '午餐肉饭团 $2.95'] },
      { h2: '不含咖啡和茶的饮品', body: '水果冰沙（草莓、芒果、荔枝等）$10.95、柠檬水$8.95、热巧克力$6.50。咖啡、抹茶、焙茶和奶茶含咖啡因。' },
      { h2: '过敏提示', body: '本店不作过敏安全或无麸质声明。孩子有过敏的，请在点餐前向店员询问配料。' },
    ],
    faq: [
      { q: '威基基有适合带孩子的咖啡店吗？', a: 'Kona Coffee Donut（2142 Kalākaua Ave，距威基基海滩步行约5分钟）柜台点餐，出餐快：麻糬甜甜圈$3.95、刨冰$8.95起、冰沙$10.95、热狗$6.99起，每天早7点至晚9点。' },
      { q: '有适合孩子的无咖啡因饮品吗？', a: 'Kona Coffee Donut有水果冰沙$10.95、柠檬水$8.95和热巧克力$6.50。' },
      { q: '麻糬甜甜圈多少钱？', a: '每个$3.95，3个$11.25，6个$22.50，12个$45.00（Kona Coffee Donut，威基基）。' },
    ],
    finalCTA: { headline: '今天带孩子来卡拉考阿大道', body: '麻糬甜甜圈$3.95，刨冰$8.95起。每天早7点至晚9点。', visitLabel: '立即到店', callLabel: '致电 (808) 260-1835' },
  },
  es: {
    hero: { title: 'Cafetería familiar en Waikiki: lo que de verdad quieren los niños', subtitle: 'Mochi donuts, raspado arcoíris, smoothies de fruta y corn dogs. Servicio en mostrador, de 7 AM a 9 PM.', date: 'Octubre 2026', readTime: '5 min', badge: 'Guía familiar' },
    intro: 'Con niños en Waikiki todo es cuestión de tiempo: algo rápido antes de la playa, algo frío después y algo ligero por la noche. Kona Coffee Donut, 2142 Kalākaua Ave, es un local de mostrador a unos 5 minutos de la playa, abierto de 7 AM a 9 PM, con mochi donuts, raspados, smoothies, corn dogs coreanos y Spam musubi. Los adultos, café 100% Kona.',
    visitCTA: { headline: 'Favoritos de los niños desde $2.95', body: 'Spam musubi $2.95, mochi donuts $3.95, corn dogs desde $6.99, raspado $8.95. A unos 5 minutos de la playa de Waikiki, de 7 AM a 9 PM.', menuLabel: 'Ver Menú', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Favoritos (con precios)', body: 'Precios de este mes:', bullets: ['Mochi donuts $3.95 (6 por $22.50)', 'Malasada $3.95', 'Raspado en vaso $8.95; Waikiki Rainbow $12.95', 'Helado, 1 bola $6.95', 'Corn dog coreano desde $6.99', 'Spam musubi $2.95'] },
      { h2: 'Bebidas sin café ni té', body: 'Smoothies de fruta $10.95, limonada $8.95 y chocolate caliente $6.50. Si hay alergias, pregunta por los ingredientes antes de pedir.' },
    ],
    faq: [
      { q: '¿Hay una cafetería para ir con niños en Waikiki?', a: 'Kona Coffee Donut, 2142 Kalākaua Ave, a unos 5 minutos de la playa: mochi donuts $3.95, raspados desde $8.95, smoothies $10.95 y corn dogs desde $6.99. De 7 AM a 9 PM todos los días.' },
      { q: '¿Cuánto cuestan los mochi donuts?', a: 'En Kona Coffee Donut, Waikiki: $3.95 cada uno, 3 por $11.25, 6 por $22.50 y 12 por $45.00.' },
    ],
    finalCTA: { headline: 'Trae a los niños esta tarde', body: 'Mochi donuts $3.95, raspados desde $8.95. De 7 AM a 9 PM en Kalākaua Avenue.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 260-1835' },
  },
};

export default function FamilyKidsCafeWaikikiPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
