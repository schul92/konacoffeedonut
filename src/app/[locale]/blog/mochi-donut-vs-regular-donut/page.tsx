'use client';

import { useParams } from 'next/navigation';
import RevenueBlogPost, { BlogContent, Locale } from '@/components/RevenueBlogPost';

const config = {
  slug: 'mochi-donut-vs-regular-donut',
  imageSrc: '/images/blog/mochi-donut-vs-regular-donut.jpeg',
  imageAlt: 'Mochi donut vs regular donut side by side — a chewy 8-ball mochi donut ring next to a fluffy yeast donut at Kona Coffee Donut in Waikiki',
  schemaHeadline: "Mochi Donut vs Regular Donut: What's the Difference? (Dough, Texture, Shape, Freshness)",
  schemaDescription:
    'A mochi donut is a ring of eight connected dough balls made with glutinous rice flour or tapioca starch, giving it a chewy, bouncy bite instead of the fluffy or crumbly texture of a wheat-flour donut. Here are the six differences, how it compares to a malasada, and where to try both in Waikiki.',
  datePublished: '2026-09-15',
  dateModified: '2026-09-15',
  related: [
    { path: '/blog/best-mochi-donuts-waikiki', label: { en: 'Best mochi donuts in Waikiki', ja: 'ワイキキのモチドーナツおすすめ', ko: '와이키키 모찌도넛 추천', zh: '威基基最好的麻糬甜甜圈', es: 'Los mejores mochi donuts de Waikiki' } },
    { path: '/blog/malasada-vs-mochi-donut-waikiki', label: { en: 'Malasada vs mochi donut in Waikiki', ja: 'マラサダ vs モチドーナツ', ko: '말라사다 vs 모찌도넛', zh: '马拉萨达 vs 麻糬甜甜圈', es: 'Malasada vs mochi donut' } },
    { path: '/blog/must-try-foods-waikiki', label: { en: '10 must-try foods in Waikiki', ja: 'ワイキキで絶対食べたい10品', ko: '와이키키 필수 음식 10가지', zh: '威基基必吃10种美食', es: '10 comidas imperdibles en Waikiki' } },
  ],
};

const content: Record<Locale, BlogContent> = {
  en: {
    hero: {
      title: "Mochi Donut vs Regular Donut: What's the Difference?",
      subtitle:
        'Rice flour vs wheat, chewy vs fluffy, 8-ball ring vs classic O — the six real differences, plus how a mochi donut stacks up against a malasada and where to try both in Waikīkī.',
      date: 'September 15, 2026',
      readTime: '6 min read',
      badge: 'Explainer',
    },
    intro:
      'A mochi donut is a ring of eight small dough balls joined into a circle, made with glutinous rice flour or tapioca starch instead of wheat flour. That swap gives it a chewy, bouncy, slightly springy bite — the texture Japanese speakers call "mochi-mochi" — rather than the fluffy crumb of a yeast donut or the tender, crumbly crumb of a cake donut. It is glazed rather than heavily sweetened inside, pulls apart one ball at a time, and is at its best within hours of frying. At Kona Coffee Donut on Kalākaua Avenue we fry ours in-house every morning and never freeze them, so this guide is written from the fryer forward: what a mochi donut actually is, the six ways it differs from a regular donut, how it compares to a Hawaiian malasada, and which flavor to order first.',
    visitCTA: {
      headline: 'Try Both Side by Side in Waikīkī',
      body:
        'Twenty-four mochi donut flavors ($3.95 each, 3 for $11.25) and classic Portuguese malasadas ($3.95) fried fresh every morning at 2142 Kalākaua Ave — about five minutes from Waikiki Beach, open 7 AM to 9 PM daily, walk-in only.',
      menuLabel: 'See the Donut Menu',
      directionsLabel: 'Get Directions',
    },
    sections: [
      {
        h2: 'What Is a Mochi Donut? (Short Answer)',
        body:
          'A mochi donut is a chewy donut made from glutinous rice flour or tapioca starch rather than wheat flour, shaped as a ring of eight connected balls and finished with a thin glaze. The rice-flour dough fries into a light, bouncy, "mochi-mochi" texture that is denser than a yeast donut but far less cakey than a cake donut. The style is often traced to Japan\'s "pon de ring" and to Hawaii\'s long love of mochi, and it took off across the United States in the late 2010s. In prose you will also see it called a mochinut, a pon de ring donut, or a Hawaiian mochi donut — they all describe the same 8-ball chewy ring.',
      },
      {
        h2: 'Mochi Donut vs Regular Donut: 6 Differences',
        body:
          'The short version: a mochi donut is chewy, glaze-led and eaten one ball at a time; a regular donut is fluffy or crumbly, sweeter through the dough, and eaten in bites. Here is the full comparison:',
        bullets: [
          'Dough — Mochi donut: glutinous rice flour and/or tapioca starch, a soft batter that is piped rather than rolled. Regular donut: wheat flour, either a yeast-risen dough (raised donuts) or a chemically leavened batter (cake donuts).',
          'Texture — Mochi donut: chewy, bouncy, springs back when you press it, light in the mouth. Yeast donut: airy and pillowy. Cake donut: dense, tender, crumbly.',
          'Shape — Mochi donut: an 8-ball "pon de ring" that pulls apart. Regular donut: a solid O-ring, or a filled round with no hole.',
          'Sweetness — Mochi donut: the dough itself is only mildly sweet; nearly all the flavor comes from the glaze or topping, so the overall bite is lighter. Regular donut: the dough carries more sugar and fat, and the glaze is added on top of that.',
          'Freshness window — Mochi donut: best within a few hours of frying, because rice starch firms up faster than wheat crumb as it cools. Regular donut: still decent the next morning, especially cake donuts.',
          'How you eat it — Mochi donut: twist off one ball at a time, no knife, no crumbs. Regular donut: bite straight in.',
        ],
        pullout: {
          title: 'The two-line difference',
          body:
            'A mochi donut is made with glutinous rice flour, so it is chewy, bouncy and lightly sweet, and it comes as an 8-ball ring you pull apart. A regular donut is made with wheat flour, so it is fluffy (yeast) or crumbly (cake), sweeter through the dough, and eaten in bites.',
        },
      },
      {
        h2: 'Mochi Donut vs Malasada',
        body:
          'In Hawaii the "regular donut" you are most likely to meet is the malasada — a Portuguese yeast donut brought by Azorean plantation workers in the 1800s and now a state classic. A malasada is a hole-less ball of eggy wheat dough, fried and rolled in sugar, with a crisp shell and a soft, fluffy, faintly bready interior. A mochi donut is the opposite experience: chewy instead of fluffy, glazed instead of sugared, pull-apart instead of one big bite. Neither is "better" — they answer different cravings. We make both. Our malasadas come Original, Cinnamon or Ube at $3.95, and filled with Custard, Ube Cream, Nutella, Macadamia, Coconut or Red Bean at $4.95, so you can taste the fluffy-vs-chewy contrast in a single visit.',
      },
      {
        h2: 'Why Fresh Matters More for Mochi Donuts',
        body:
          'Gelatinized rice starch is what makes a mochi donut chewy, and it is also why the clock runs faster on it. As the donut cools past a few hours the starch retrogrades — the same thing that turns day-old mochi hard — and the bounce slowly turns to firmness. Wheat donuts stale too, but their crumb hides it better. Freezing and thawing is harder still on rice-flour dough, which is why we do not do it: every mochi donut at Kona Coffee Donut is mixed, deposited and fried in our own kitchen each morning, then glazed and racked the same day. If you want the textbook "mochi-mochi" bite, buy in the morning or early afternoon and eat within a few hours. If you are carrying them back to the hotel, keep the box out of the sun and do not refrigerate — the cold speeds up firming.',
      },
      {
        h2: 'Which Flavors to Try First in Waikīkī',
        body:
          'We run 24 mochi donut flavors, all $3.95 each, 3 for $11.25, 6 for $22.50 or a dozen for $45. If you are new to mochi donuts, order a trio that shows off the range:',
        bullets: [
          'Ube — the purple Hawaii-Filipino classic, sweet and vanilla-like; the flavor most visitors photograph first',
          'Matcha — earthy green tea glaze that plays against the mild dough',
          'Black Sesame or Injeolmi — nutty, roasted, the most "Asian bakery" of the lineup',
          'Cinnamon Sugar or Churro — the closest bridge from a regular donut, if you want the chew without a new flavor',
          'Kona Coffee — our house glaze, made to pair with the coffee in your other hand',
          'Also in the case: Nutella, Cookies & Creme, Yuzu, Taro, Milk Tea, Pistachio, Strawberry, Mango and more',
        ],
      },
      {
        h2: 'Pairing With Kona Coffee',
        body:
          'Because mochi donuts are lightly sweet, they do not need a sugary drink beside them; a clean, medium-bodied cup lets the glaze do the talking. Our 100% Kona coffee ($7) is the classic match — low acidity, nutty and smooth against a Black Sesame or Kona Coffee donut. On a hot Waikīkī afternoon the Kona cold brew ($6.95) works with the fruit glazes like Mango, Strawberry or Yuzu. And if you want the full dessert, the Kona affogato ($8.50) — espresso over ice cream — next to a pulled-apart Ube donut is the order regulars come back for.',
      },
    ],
    faq: [
      {
        q: 'What is a mochi donut?',
        a: 'A mochi donut is a chewy donut made with glutinous rice flour or tapioca starch instead of wheat flour, shaped as a ring of eight connected balls and finished with a glaze. The rice-flour dough gives it a bouncy, "mochi-mochi" texture that is lighter and less dense than a cake donut and chewier than a yeast donut.',
      },
      {
        q: 'What is the difference between a mochi donut and a regular donut?',
        a: 'Dough and texture. A mochi donut uses glutinous rice flour, so it is chewy and springy, mildly sweet, and shaped as an 8-ball ring you pull apart. A regular donut uses wheat flour, so it is fluffy (yeast-raised) or crumbly (cake-style), sweeter through the dough, and eaten in bites. Mochi donuts are also best within a few hours of frying, while wheat donuts hold up longer.',
      },
      {
        q: 'Why are mochi donuts chewy?',
        a: 'Because of the starch. Glutinous rice flour and tapioca starch gelatinize when fried into a stretchy, elastic network — the same thing that makes mochi and boba pearls chewy. Wheat flour builds a gluten and crumb structure instead, which is why wheat donuts are fluffy or cakey rather than bouncy.',
      },
      {
        q: 'Are mochi donuts gluten-free?',
        a: 'Not necessarily, and please do not assume ours are. "Glutinous" rice flour is named for its sticky, glue-like texture and contains no wheat gluten, but many mochi donut recipes still add some wheat flour, and our donuts are made in a shared kitchen alongside wheat-based malasadas and other items. We do not make any gluten-free or allergen-safety claims — if you have a wheat allergy or celiac disease, please ask our staff before ordering.',
      },
      {
        q: 'Are mochi donuts healthier or lower in calories than regular donuts?',
        a: 'We do not publish nutrition data, so we cannot give you a calorie number. What we can say is that a mochi donut is generally lighter and less dense than a cake donut and less sweet through the dough, since most of its flavor comes from the glaze. It is still a fried, glazed treat — enjoy it as one.',
      },
      {
        q: 'How do you eat a mochi donut, and how long does it stay fresh?',
        a: 'Twist off one ball at a time — the 8-ball ring is designed to pull apart, so you can share a single donut or taste several flavors without cutting. Mochi donuts are best within a few hours of frying; keep them at room temperature, out of the sun, and do not refrigerate, because cold firms up the rice starch. Ours are fried fresh every morning at 2142 Kalākaua Ave, so morning and early afternoon are the peak-texture hours.',
      },
    ],
    finalCTA: {
      headline: 'Taste the Difference on Kalākaua',
      body: '24 mochi donut flavors and classic malasadas, fried fresh every morning and never frozen. Open 7 AM – 9 PM daily, five minutes from Waikiki Beach, walk-in only.',
      visitLabel: 'Visit Us Today',
      callLabel: 'Call (808) 304-1808',
    },
  },
  ja: {
    hero: {
      title: 'モチドーナツと普通のドーナツの違いは？',
      subtitle: '米粉 vs 小麦粉、もちもち vs ふわふわ、ポンデリング型 vs リング型。違いを整理して、ワイキキで食べ比べ。',
      date: '2026年9月15日公開',
      readTime: '読了4分',
      badge: '解説',
    },
    intro:
      'モチドーナツは、小麦粉の代わりに白玉粉（もち米粉）やタピオカ粉で作る、8つの玉がつながったリング状のドーナツです。日本のポンデリングと同じ系統で、もちもち・ぷにぷにの弾力が特徴。イーストドーナツのふわふわ感やケーキドーナツのほろほろ感とはまったく別物です。Kona Coffee Donut（カラカウア通り）では毎朝店内で揚げたて、冷凍は一切していません。',
    visitCTA: {
      headline: 'ワイキキで食べ比べ',
      body: 'モチドーナツ24種（$3.95、3個$11.25）とポルトガル発祥のマラサダ（$3.95）。2142 Kalākaua Ave、ワイキキビーチから徒歩約5分。毎日7時〜21時、予約不要。',
      menuLabel: 'ドーナツメニュー',
      directionsLabel: '行き方を確認',
    },
    sections: [
      {
        h2: '普通のドーナツとの6つの違い',
        body: 'ひとことで言えば「もちもちで軽く、グレーズで味わい、1玉ずつちぎって食べる」のがモチドーナツ。',
        bullets: [
          '生地：白玉粉・タピオカ粉 vs 小麦粉（イースト or ケーキ生地）',
          '食感：もちもち・弾力 vs ふわふわ（イースト）／ほろほろ（ケーキ）',
          '形：8玉のポンデリング型 vs リング型・穴なし',
          '甘さ：生地は控えめ、グレーズが主役 vs 生地自体が甘め',
          '鮮度：揚げてから数時間が食べ頃 vs 翌日でもOK',
          '食べ方：1玉ずつちぎる vs かぶりつく',
        ],
        pullout: {
          title: '2行でまとめると',
          body: 'モチドーナツは米粉ベースで、もちもち・軽い甘さ・ちぎって食べる8玉リング。普通のドーナツは小麦粉ベースで、ふわふわかほろほろ、生地が甘く、かぶりついて食べる。',
        },
      },
      {
        h2: 'モチドーナツ vs マラサダ',
        body:
          'ハワイの「普通のドーナツ」といえばマラサダ。ポルトガル系移民が伝えたイースト生地の穴なしドーナツで、外はカリッと中はふわふわ、砂糖をまぶして食べます。もちもちのモチドーナツとは正反対の食感。当店ではマラサダもオリジナル・シナモン・ウベ（$3.95）、カスタード・ウベクリーム・ヌテラ・マカダミア・ココナッツ・あんこ入り（$4.95）を揃えているので、1回の来店で両方試せます。',
      },
      {
        h2: '揚げたてが大事な理由',
        body:
          'もちもち食感の正体は糊化した米デンプン。時間が経つと固くなる（お餅と同じ）ので、モチドーナツは小麦のドーナツより鮮度に敏感です。当店は毎朝店内で揚げ、冷凍はしません。午前〜昼過ぎに買って数時間以内に食べるのがベスト。冷蔵庫には入れないでください。',
      },
      {
        h2: 'まず試すなら',
        body: '全24種、各$3.95。初めてなら3個セット（$11.25）でウベ・抹茶・黒ごま（またはきなこ）がおすすめ。コナコーヒー（$7）やコナコールドブリュー（$6.95）との相性も抜群です。',
      },
    ],
    faq: [
      { q: 'モチドーナツとは？', a: '白玉粉やタピオカ粉で作る、8玉がつながったもちもち食感のドーナツ。ポンデリングと同じ系統で、ケーキドーナツより軽く、イーストドーナツより弾力があります。' },
      { q: 'グルテンフリーですか？', a: '断言できません。白玉粉自体に小麦グルテンは含まれませんが、当店は小麦を使うマラサダなどと同じ厨房で製造しています。アレルギーのある方は必ずスタッフにお尋ねください。' },
      { q: 'カロリーは？', a: '栄養成分は公表していません。ケーキドーナツより軽く、生地の甘さも控えめですが、揚げ菓子であることに変わりはありません。' },
      { q: 'どのくらい日持ちしますか？', a: '揚げてから数時間以内が食べ頃。常温で直射日光を避け、冷蔵はしないでください。' },
    ],
    finalCTA: {
      headline: 'カラカウア通りで食べ比べ',
      body: 'モチドーナツ24種とマラサダ、毎朝揚げたて。毎日7時〜21時、ビーチから徒歩5分。',
      visitLabel: '今日来店',
      callLabel: '電話 (808) 304-1808',
    },
  },
  ko: {
    hero: {
      title: '모찌도넛 vs 일반 도넛, 뭐가 다를까?',
      subtitle: '찹쌀가루 vs 밀가루, 쫀득 vs 폭신, 8구슬 링 vs 일반 링. 차이를 정리하고 와이키키에서 직접 비교해 보세요.',
      date: '2026년 9월 15일 발행',
      readTime: '4분 분량',
      badge: '설명',
    },
    intro:
      '모찌도넛(찹쌀도넛)은 밀가루 대신 찹쌀가루나 타피오카 전분으로 만든, 작은 구슬 8개가 이어진 링 모양 도넛입니다. 쫀득하고 탱글한 식감이 핵심으로, 이스트 도넛의 폭신함이나 케이크 도넛의 부슬거림과는 완전히 다릅니다. 칼라카우아의 Kona Coffee Donut에서는 매일 아침 매장에서 직접 튀기고, 냉동은 절대 하지 않습니다.',
    visitCTA: {
      headline: '와이키키에서 나란히 비교',
      body: '모찌도넛 24종($3.95, 3개 $11.25)과 포르투갈식 말라사다($3.95). 2142 Kalākaua Ave, 와이키키 비치에서 도보 약 5분. 매일 7시–21시, 예약 없이 방문.',
      menuLabel: '도넛 메뉴 보기',
      directionsLabel: '길찾기',
    },
    sections: [
      {
        h2: '일반 도넛과의 6가지 차이',
        body: '한 줄 요약: 모찌도넛은 쫀득하고 가볍고 글레이즈 위주이며, 한 알씩 떼어 먹습니다.',
        bullets: [
          '반죽: 찹쌀가루·타피오카 전분 vs 밀가루(이스트 또는 케이크 반죽)',
          '식감: 쫀득·탱글 vs 폭신(이스트)/부슬(케이크)',
          '모양: 8구슬 링 vs 일반 링·속 채운 원형',
          '단맛: 반죽은 은은하고 글레이즈가 주인공 vs 반죽 자체가 달콤',
          '신선도: 튀긴 뒤 몇 시간이 최고 vs 다음 날도 괜찮음',
          '먹는 법: 한 알씩 떼어서 vs 그냥 베어 물기',
        ],
        pullout: {
          title: '두 줄 요약',
          body: '모찌도넛은 찹쌀 베이스라 쫀득하고 단맛이 가벼우며 떼어 먹는 8구슬 링. 일반 도넛은 밀가루 베이스라 폭신하거나 부슬거리고, 반죽이 더 달며 베어 먹는다.',
        },
      },
      {
        h2: '모찌도넛 vs 말라사다',
        body:
          '하와이에서 만나는 "일반 도넛"은 대부분 말라사다입니다. 포르투갈 이민자들이 전한 이스트 반죽의 구멍 없는 도넛으로, 겉은 바삭하고 속은 폭신하며 설탕을 묻혀 먹습니다. 쫀득한 모찌도넛과 정반대의 식감이죠. 저희 매장은 말라사다도 오리지널·시나몬·우베($3.95), 커스터드·우베크림·누텔라·마카다미아·코코넛·팥 필링($4.95)을 갖추고 있어 한 번 방문으로 둘 다 비교할 수 있습니다.',
      },
      {
        h2: '모찌도넛은 왜 갓 튀긴 게 중요할까',
        body:
          '쫀득함의 정체는 호화된 쌀 전분인데, 식으면서 굳는 속도가 밀가루 도넛보다 빠릅니다(떡이 굳는 것과 같은 원리). 그래서 저희는 매일 아침 매장에서 튀기고 냉동하지 않습니다. 오전~이른 오후에 사서 몇 시간 안에 드시는 게 최고이고, 냉장 보관은 피하세요.',
      },
      {
        h2: '처음이라면 이 맛부터',
        body: '24종 모두 각 $3.95. 3개 세트($11.25)로 우베·말차·검은깨(또는 인절미)를 추천합니다. 코나 커피($7)나 코나 콜드브루($6.95)와 함께 드시면 글레이즈 맛이 더 살아납니다.',
      },
    ],
    faq: [
      { q: '모찌도넛이 뭔가요?', a: '찹쌀가루나 타피오카 전분으로 만든 8구슬 링 모양의 쫀득한 도넛입니다. 케이크 도넛보다 가볍고, 이스트 도넛보다 탱글합니다.' },
      { q: '글루텐프리인가요?', a: '보장할 수 없습니다. 찹쌀가루 자체에는 밀 글루텐이 없지만, 저희 주방은 밀가루를 쓰는 말라사다 등과 같은 공간입니다. 알레르기가 있다면 반드시 직원에게 문의하세요.' },
      { q: '칼로리는요?', a: '영양 정보는 공개하지 않습니다. 케이크 도넛보다 가볍고 반죽 단맛이 덜하지만, 튀긴 디저트라는 점은 같습니다.' },
      { q: '얼마나 오래 신선한가요?', a: '튀긴 뒤 몇 시간 이내가 가장 맛있습니다. 상온에서 직사광선을 피하고 냉장은 하지 마세요.' },
    ],
    finalCTA: {
      headline: '칼라카우아에서 직접 비교',
      body: '모찌도넛 24종과 말라사다, 매일 아침 갓 튀김. 매일 7시–21시, 비치에서 도보 5분.',
      visitLabel: '오늘 방문',
      callLabel: '전화 (808) 304-1808',
    },
  },
  zh: {
    hero: {
      title: '麻糬甜甜圈和普通甜甜圈有什么区别？',
      subtitle: '糯米粉 vs 小麦粉，Q弹 vs 松软，8球环 vs 普通圆环。理清差异，然后在威基基一次尝遍。',
      date: '2026年9月15日发布',
      readTime: '4分钟',
      badge: '科普',
    },
    intro:
      '麻糬甜甜圈是用糯米粉或木薯淀粉代替小麦粉制作、由8个小球连成一圈的甜甜圈。核心特点是Q弹有嚼劲的"麻糬感"，与酵母甜甜圈的松软或蛋糕甜甜圈的酥散完全不同。位于卡拉考阿大道的Kona Coffee Donut每天早晨现场现炸，从不冷冻。',
    visitCTA: {
      headline: '在威基基并排品尝',
      body: '24种麻糬甜甜圈（$3.95，3个$11.25）和葡式马拉萨达（$3.95）。2142 Kalākaua Ave，距威基基海滩步行约5分钟。每天7点–21点，无需预订。',
      menuLabel: '查看甜甜圈菜单',
      directionsLabel: '获取路线',
    },
    sections: [
      {
        h2: '与普通甜甜圈的6个区别',
        body: '一句话：麻糬甜甜圈Q弹、清爽、以糖霜提味，一次撕一颗吃。',
        bullets: [
          '面团：糯米粉·木薯淀粉 vs 小麦粉（酵母或蛋糕面糊）',
          '口感：Q弹有嚼劲 vs 松软（酵母）/酥散（蛋糕）',
          '形状：8球连环 vs 普通圆环·无孔夹心',
          '甜度：面团淡甜，糖霜是主角 vs 面团本身偏甜',
          '新鲜度：炸后几小时内最佳 vs 隔天也不错',
          '吃法：一颗颗撕开 vs 直接咬',
        ],
        pullout: {
          title: '两行总结',
          body: '麻糬甜甜圈以糯米为底，Q弹、甜度轻、可撕开的8球环。普通甜甜圈以小麦为底，松软或酥散、面团更甜、直接咬着吃。',
        },
      },
      {
        h2: '麻糬甜甜圈 vs 马拉萨达',
        body:
          '在夏威夷，最常见的"普通甜甜圈"是马拉萨达——葡萄牙移民带来的酵母面团无孔甜甜圈，外脆内松软，裹上砂糖。与Q弹的麻糬甜甜圈正好相反。我们也做马拉萨达：原味、肉桂、紫薯（$3.95），以及卡仕达、紫薯奶油、Nutella、夏威夷果、椰子、红豆夹心（$4.95），一次到店两种都能尝。',
      },
      {
        h2: '为什么麻糬甜甜圈更讲究现炸',
        body:
          'Q弹来自糊化的米淀粉，冷却后变硬的速度比小麦甜甜圈快（和麻糬放久变硬同理）。所以我们每天早晨现炸、绝不冷冻。建议上午到下午早些时候购买，几小时内吃完，不要冷藏。',
      },
      {
        h2: '第一次先试哪几种',
        body: '全部24种，每个$3.95。推荐3个装（$11.25）选紫薯、抹茶、黑芝麻（或黄豆粉）。配科纳咖啡（$7）或科纳冷萃（$6.95）更能突出糖霜风味。',
      },
    ],
    faq: [
      { q: '什么是麻糬甜甜圈？', a: '用糯米粉或木薯淀粉制作、8个小球连成一圈的Q弹甜甜圈。比蛋糕甜甜圈轻盈，比酵母甜甜圈更有嚼劲。' },
      { q: '是无麸质的吗？', a: '无法保证。糯米粉本身不含小麦麸质，但我们的厨房与使用小麦粉的马拉萨达等共用。有过敏顾虑请务必询问店员。' },
      { q: '热量多少？', a: '我们不公布营养数据。它比蛋糕甜甜圈轻、面团甜度低，但仍是油炸甜点。' },
      { q: '能放多久？', a: '炸后几小时内最佳。常温避光保存，不要冷藏。' },
    ],
    finalCTA: {
      headline: '在卡拉考阿大道亲自比较',
      body: '24种麻糬甜甜圈和马拉萨达，每天早晨现炸。每天7点–21点，海滩步行5分钟。',
      visitLabel: '立即到店',
      callLabel: '致电 (808) 304-1808',
    },
  },
  es: {
    hero: {
      title: 'Dona de mochi vs dona normal: ¿cuál es la diferencia?',
      subtitle: 'Harina de arroz vs trigo, chiclosa vs esponjosa, anillo de 8 bolitas vs anillo clásico — y dónde probar ambas en Waikiki.',
      date: '15 de septiembre de 2026',
      readTime: '4 min',
      badge: 'Guía',
    },
    intro:
      'Una dona de mochi (mochi donut) es un anillo de ocho bolitas unidas, hecho con harina de arroz glutinoso o almidón de tapioca en lugar de harina de trigo. Eso le da una textura chiclosa y elástica muy distinta de la dona esponjosa de levadura o la dona de pastel. En Kona Coffee Donut, en Kalākaua Avenue, las freímos cada mañana en nuestra cocina y nunca las congelamos.',
    visitCTA: {
      headline: 'Prueba las dos en Waikiki',
      body: '24 sabores de mochi donut ($3.95, 3 por $11.25) y malasadas portuguesas ($3.95). 2142 Kalākaua Ave, a unos 5 minutos de la playa. Abierto de 7 AM a 9 PM, sin reservación.',
      menuLabel: 'Ver Menú de Donas',
      directionsLabel: 'Cómo llegar',
    },
    sections: [
      {
        h2: '6 diferencias con una dona normal',
        body: 'En resumen: la dona de mochi es chiclosa, ligera, con el sabor en el glaseado, y se come bolita por bolita.',
        bullets: [
          'Masa: harina de arroz glutinoso o tapioca vs harina de trigo (levadura o tipo pastel)',
          'Textura: chiclosa y elástica vs esponjosa (levadura) o desmoronable (pastel)',
          'Forma: anillo de 8 bolitas vs anillo clásico o relleno sin hoyo',
          'Dulzor: masa suave, el glaseado manda vs masa más dulce por sí sola',
          'Frescura: mejor dentro de pocas horas vs aguanta hasta el día siguiente',
          'Cómo se come: se separa bolita por bolita vs a mordidas',
        ],
        pullout: {
          title: 'En dos líneas',
          body: 'La dona de mochi lleva arroz glutinoso: chiclosa, poco dulce y en anillo de 8 bolitas que se separan. La dona normal lleva trigo: esponjosa o desmoronable, más dulce en la masa y se come a mordidas.',
        },
      },
      {
        h2: 'Mochi donut vs malasada',
        body:
          'La "dona normal" de Hawái es la malasada, una dona portuguesa de levadura sin hoyo, crujiente por fuera, esponjosa por dentro y cubierta de azúcar — lo opuesto a la textura chiclosa del mochi. Hacemos las dos: malasadas Original, Canela y Ube a $3.95, y rellenas (Custard, Ube Cream, Nutella, Macadamia, Coco, Frijol rojo) a $4.95.',
      },
      {
        h2: 'Por qué importa que sea recién hecha',
        body:
          'El almidón de arroz que da la textura chiclosa se endurece más rápido que la miga de trigo. Por eso freímos cada mañana y nunca congelamos. Cómprala por la mañana o temprano en la tarde, cómela en pocas horas y no la refrigeres. Combina bien con nuestro café 100% Kona ($7) o el cold brew Kona ($6.95).',
      },
    ],
    faq: [
      { q: '¿Qué es una dona de mochi?', a: 'Una dona chiclosa hecha con harina de arroz glutinoso o tapioca, en forma de anillo de ocho bolitas. Más ligera que una dona de pastel y más elástica que una de levadura.' },
      { q: '¿Es libre de gluten?', a: 'No podemos garantizarlo. La harina de arroz glutinoso no contiene gluten de trigo, pero nuestra cocina es compartida con malasadas y otros productos con trigo. Si tienes alergia, pregunta al personal.' },
      { q: '¿Cuántas calorías tiene?', a: 'No publicamos información nutricional. Es más ligera y menos dulce en la masa que una dona de pastel, pero sigue siendo un postre frito.' },
    ],
    finalCTA: {
      headline: 'Prueba la diferencia en Kalākaua',
      body: '24 sabores de mochi donut y malasadas, recién hechas cada mañana. 7 AM – 9 PM, a 5 minutos de la playa.',
      visitLabel: 'Visítanos',
      callLabel: 'Llama (808) 304-1808',
    },
  },
};

export default function MochiDonutVsRegularDonutPage() {
  const params = useParams();
  const localeRaw = (params?.locale as string) || 'en';
  const locale = (['en', 'ja', 'ko', 'zh', 'es'].includes(localeRaw) ? localeRaw : 'en') as Locale;
  return <RevenueBlogPost locale={locale} config={config} content={content[locale]} />;
}
