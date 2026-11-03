'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'what-is-lilikoi',
  imageSrc: '/images/blog/what-is-lilikoi.jpeg',
  imageAlt: 'Lilikoi (passion fruit) treats at Kona Coffee Donut in Waikiki: a lilikoi matcha latte, Paradise Lilikoi shave ice and a mango coconut lilikoi smoothie',
  schemaHeadline: 'What Is Lilikoi? Hawaii’s Passion Fruit, and Where to Taste It in Waikiki',
  schemaDescription:
    'Lilikoi is the Hawaiian name for passion fruit: tart, sweet and tropical. Taste it in Waikiki at Kona Coffee Donut, 2142 Kalākaua Ave — lilikoi matcha $9.95, lilikoi lemonade $8.95, Paradise Lilikoi bingsu $12.95.',
  datePublished: '2026-11-02',
  related: [
    {
      path: '/blog/best-iced-drinks-waikiki',
      label: { en: 'Iced drinks near Waikiki Beach', ja: 'ワイキキのアイスドリンク', ko: '와이키키 아이스 음료', zh: '威基基冰饮', es: 'Bebidas frías en Waikiki' },
    },
    {
      path: '/blog/best-matcha-drinks-waikiki',
      label: { en: 'Best matcha in Waikiki (every flavor ranked)', ja: 'ワイキキの抹茶おすすめ', ko: '와이키키 말차 맛집', zh: '威基基抹茶推荐', es: 'El mejor matcha de Waikiki' },
    },
    {
      path: '/blog/hawaiian-shave-ice',
      label: { en: 'What is Hawaiian shave ice?', ja: 'ハワイのシェイブアイスとは？', ko: '하와이안 셰이브 아이스란?', zh: '什么是夏威夷刨冰？', es: '¿Qué es el shave ice hawaiano?' },
    },
  ],
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: 'What Is Lilikoi? Hawaii’s Passion Fruit, Explained',
      subtitle: 'The tart, tropical flavor you will see on every menu in Hawaii — what it is, what it tastes like and four ways to try it on Kalākaua Avenue.',
      date: 'Published November 2026',
      readTime: '4 min read',
      badge: 'Hawaii Flavors',
    },
    intro:
      "Lilikoi is simply the Hawaiian name for passion fruit — most often the yellow variety that grows on vines all over the islands. Cut one open and you get a tangy, fragrant pulp full of crunchy black seeds that tastes like a mix of citrus, pineapple and guava. Hawaii puts it in everything: butter, chiffon pie, shave ice syrup, malasada fillings, drinks. At Kona Coffee Donut on Kalākaua Avenue you can taste it four ways, from a lilikoi lemonade ($8.95) to Paradise Lilikoi shave ice ($12.95).",
    visitCTA: {
      headline: 'Taste Lilikoi From $8.95',
      body: 'Lilikoi lemonade $8.95, lilikoi matcha $9.95, Paradise Lilikoi bingsu $12.95, Mango Coconut Lilikoi smoothie $12.95. 2142 Kalākaua Ave, open 7 AM to 9 PM daily.',
      menuLabel: 'See the Full Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'Lilikoi = Passion Fruit',
        body:
          "Same fruit, Hawaiian name. The yellow passion fruit common in Hawaii is a little larger and more tart than the purple kind sold in many mainland stores. The name is usually traced to Lilikoʻi, a gulch on Maui where the vines were first planted in the islands.",
      },
      {
        h2: 'What Does Lilikoi Taste Like?',
        body:
          'Bright and sour first, then sweet and floral — think a tropical cross between citrus, pineapple and guava. The seeds are edible and add a little crunch. Because it is so tart, lilikoi is usually sweetened or blended with creamier flavors like coconut or mango.',
        pullout: {
          title: 'First taste?',
          body: 'Start with the lilikoi lemonade ($8.95): the cleanest way to taste the fruit itself.',
        },
      },
      {
        h2: 'Four Ways to Try It in Waikiki',
        body: 'Every price below is from our register this month:',
        bullets: [
          'Lilikoi Lemonade — $8.95, tart on tart, very refreshing',
          'Lilikoi Matcha — $9.95, whisked matcha over a lilikoi layer, hot or iced',
          'Paradise Lilikoi Hawaiian bingsu — $12.95',
          'Mango Coconut Lilikoi smoothie — $12.95, the creamiest of the four',
        ],
      },
      {
        h2: 'Other Places You Will See Lilikoi in Hawaii',
        body:
          'Lilikoi butter (a sweet spread for toast), lilikoi chiffon pie, lilikoi malasada filling at some bakeries and lilikoi shave ice syrup. If you like the flavor, look for it on menus all over the islands.',
      },
    ],
    faq: [
      {
        q: 'What is lilikoi?',
        a: 'Lilikoi is the Hawaiian name for passion fruit, usually the yellow variety grown in Hawaii. In Waikiki you can taste it at Kona Coffee Donut, 2142 Kalākaua Ave, in a lilikoi lemonade ($8.95) or lilikoi matcha ($9.95).',
      },
      {
        q: 'Is lilikoi the same as passion fruit?',
        a: 'Yes. Lilikoi is passion fruit — the Hawaiian name for it. The yellow kind common in Hawaii is more tart than the purple variety.',
      },
      {
        q: 'What does lilikoi taste like?',
        a: 'Tart and tropical, a little floral, somewhere between citrus, pineapple and guava, with edible crunchy seeds.',
      },
      {
        q: 'Where can I try lilikoi in Waikiki?',
        a: 'Kona Coffee Donut on Kalākaua Avenue, about a 5-minute walk from Waikiki Beach: lilikoi lemonade $8.95, lilikoi matcha $9.95, Paradise Lilikoi bingsu $12.95 and a Mango Coconut Lilikoi smoothie $12.95, open 7 AM to 9 PM daily.',
      },
    ],
    finalCTA: {
      headline: 'Taste Lilikoi Today',
      body: 'Lilikoi lemonade $8.95, lilikoi matcha $9.95. 2142 Kalākaua Ave, open 7 AM – 9 PM daily.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 260-1835',
    },
  },
  ja: {
    hero: { title: 'リリコイとは？ハワイのパッションフルーツ', subtitle: 'ハワイのメニューでよく見る甘酸っぱい味。正体と味、カラカウア通りで試せる4つのメニュー。', date: '2026年11月公開', readTime: '読了4分', badge: 'ハワイの味' },
    intro: 'リリコイはパッションフルーツのハワイでの呼び名。ハワイでよく見るのは黄色い品種で、香り高く甘酸っぱい果肉にカリッとした種が入っています。バター、シフォンパイ、シェイブアイスのシロップなど、ハワイでは何にでも使われます。カラカウア通りのKona Coffee Donutでは、リリコイレモネード（$8.95）からパラダイスリリコイのかき氷（$12.95）まで4通りで味わえます。',
    visitCTA: { headline: 'リリコイ $8.95〜', body: 'リリコイレモネード$8.95、リリコイ抹茶$9.95、パラダイスリリコイ$12.95、マンゴーココナッツリリコイスムージー$12.95。毎日朝7時〜夜9時。', menuLabel: 'メニューを見る', directionsLabel: '行き方を確認' },
    sections: [
      { h2: 'リリコイの味', body: 'まず酸味、そのあと甘く華やか。柑橘、パイナップル、グァバを合わせたようなトロピカルな味です。種も食べられます。' },
      { h2: 'ワイキキで試せる4つのメニュー', body: '今月のレジ価格です。', bullets: ['リリコイレモネード $8.95', 'リリコイ抹茶 $9.95', 'パラダイスリリコイ（ハワイアンかき氷） $12.95', 'マンゴーココナッツリリコイスムージー $12.95'] },
    ],
    faq: [
      { q: 'リリコイとは何ですか？', a: 'パッションフルーツのハワイでの呼び名です。ワイキキのKona Coffee Donut（2142 Kalākaua Ave）ではリリコイレモネード$8.95やリリコイ抹茶$9.95で味わえます。' },
      { q: 'リリコイとパッションフルーツは同じ？', a: 'はい、同じ果物です。ハワイでよく見る黄色い品種は紫の品種より酸味が強めです。' },
    ],
    finalCTA: { headline: '今日リリコイを味わおう', body: 'リリコイレモネード$8.95、リリコイ抹茶$9.95。毎日朝7時〜夜9時。', visitLabel: '今日来店', callLabel: '電話 (808) 260-1835' },
  },
  ko: {
    hero: { title: '릴리코이란? 하와이의 패션프루트', subtitle: '하와이 메뉴마다 보이는 새콤한 열대 과일. 정체와 맛, 칼라카우아에서 맛볼 수 있는 4가지.', date: '2026년 11월 발행', readTime: '4분 분량', badge: '하와이의 맛' },
    intro: '릴리코이는 패션프루트를 하와이에서 부르는 이름입니다. 하와이에선 주로 노란 품종을 볼 수 있고, 향긋하고 새콤달콤한 과육에 바삭한 씨가 들어 있습니다. 버터, 쉬폰 파이, 셰이브 아이스 시럽까지 하와이에선 어디에나 들어가죠. 칼라카우아 거리 Kona Coffee Donut에서는 릴리코이 레모네이드($8.95)부터 파라다이스 릴리코이 빙수($12.95)까지 4가지로 맛볼 수 있습니다.',
    visitCTA: { headline: '릴리코이 $8.95부터', body: '릴리코이 레모네이드 $8.95, 릴리코이 말차 $9.95, 파라다이스 릴리코이 $12.95, 망고 코코넛 릴리코이 스무디 $12.95. 매일 아침 7시–밤 9시.', menuLabel: '메뉴 보기', directionsLabel: '길찾기' },
    sections: [
      { h2: '릴리코이 맛', body: '처음엔 새콤하고, 이어서 달콤하고 화사합니다. 시트러스·파인애플·구아바를 섞은 듯한 열대 맛이고 씨도 먹을 수 있어요.' },
      { h2: '와이키키에서 맛볼 수 있는 4가지', body: '이번 달 매장 가격입니다.', bullets: ['릴리코이 레모네이드 $8.95', '릴리코이 말차 $9.95', '파라다이스 릴리코이 (하와이안 빙수) $12.95', '망고 코코넛 릴리코이 스무디 $12.95'] },
    ],
    faq: [
      { q: '릴리코이가 뭐예요?', a: '패션프루트의 하와이식 이름입니다. 와이키키 Kona Coffee Donut(2142 Kalākaua Ave)에서 릴리코이 레모네이드 $8.95, 릴리코이 말차 $9.95로 맛볼 수 있습니다.' },
      { q: '릴리코이와 패션프루트는 같은 건가요?', a: '네, 같은 과일입니다. 하와이에서 흔한 노란 품종은 보라색 품종보다 더 새콤합니다.' },
    ],
    finalCTA: { headline: '오늘 릴리코이를 맛보세요', body: '릴리코이 레모네이드 $8.95, 릴리코이 말차 $9.95. 매일 아침 7시–밤 9시.', visitLabel: '오늘 방문', callLabel: '전화 (808) 260-1835' },
  },
  zh: {
    hero: { title: 'Lilikoi是什么？夏威夷的百香果', subtitle: '夏威夷菜单上随处可见的酸甜热带风味：它是什么、什么味道，以及在卡拉考阿大道的四种尝法。', date: '2026年11月发布', readTime: '4分钟', badge: '夏威夷风味' },
    intro: 'Lilikoi就是百香果在夏威夷的叫法，常见的是黄色品种，果肉香气浓郁、酸甜可口，带着脆脆的黑籽。夏威夷人把它用在黄油、戚风派、刨冰糖浆等各种食物里。卡拉考阿大道的Kona Coffee Donut有四种lilikoi口味，从百香果柠檬水（$8.95）到Paradise Lilikoi刨冰（$12.95）。',
    visitCTA: { headline: 'Lilikoi $8.95起', body: '百香果柠檬水$8.95，百香果抹茶$9.95，Paradise Lilikoi刨冰$12.95，芒果椰子百香果冰沙$12.95。每天早7点至晚9点。', menuLabel: '查看菜单', directionsLabel: '获取路线' },
    sections: [
      { h2: '在威基基的四种尝法', body: '以下为本月门店价格：', bullets: ['百香果柠檬水 $8.95', '百香果抹茶 $9.95', 'Paradise Lilikoi夏威夷刨冰 $12.95', '芒果椰子百香果冰沙 $12.95'] },
    ],
    faq: [
      { q: 'Lilikoi是什么？', a: 'Lilikoi是百香果在夏威夷的叫法。在威基基的Kona Coffee Donut（2142 Kalākaua Ave）可以喝到百香果柠檬水$8.95和百香果抹茶$9.95。' },
      { q: 'Lilikoi和百香果是一样的吗？', a: '是的，是同一种水果。夏威夷常见的黄色品种比紫色品种更酸。' },
    ],
    finalCTA: { headline: '今天来尝尝lilikoi', body: '百香果柠檬水$8.95，百香果抹茶$9.95。每天早7点至晚9点。', visitLabel: '立即到店', callLabel: '致电 (808) 260-1835' },
  },
  es: {
    hero: { title: '¿Qué es el lilikoi? La maracuyá de Hawái', subtitle: 'El sabor ácido y tropical de los menús hawaianos, y cuatro formas de probarlo en Kalākaua Avenue.', date: 'Noviembre 2026', readTime: '4 min', badge: 'Sabores de Hawái' },
    intro: 'Lilikoi es el nombre hawaiano de la maracuyá (fruta de la pasión), sobre todo la variedad amarilla. En Kona Coffee Donut la puedes probar en limonada ($8.95), matcha ($9.95), bingsu hawaiano ($12.95) o smoothie ($12.95).',
    visitCTA: { headline: 'Lilikoi desde $8.95', body: 'Limonada de lilikoi $8.95, matcha de lilikoi $9.95. 2142 Kalākaua Ave, de 7 AM a 9 PM.', menuLabel: 'Ver Menú', directionsLabel: 'Cómo llegar' },
    sections: [
      { h2: 'Cuatro formas de probarlo', body: 'Precios de este mes:', bullets: ['Limonada de lilikoi $8.95', 'Matcha de lilikoi $9.95', 'Paradise Lilikoi (bingsu hawaiano) $12.95', 'Smoothie de mango, coco y lilikoi $12.95'] },
    ],
    faq: [
      { q: '¿Qué es el lilikoi?', a: 'Es la maracuyá en Hawái. En Kona Coffee Donut, Waikiki, la pruebas en limonada ($8.95) o matcha ($9.95).' },
    ],
    finalCTA: { headline: 'Prueba el lilikoi hoy', body: 'Limonada $8.95, matcha $9.95. De 7 AM a 9 PM.', visitLabel: 'Visítanos', callLabel: 'Llama (808) 260-1835' },
  },
};

export default function WhatIsLilikoiPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
