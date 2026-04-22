'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import SubpageNav from '@/components/SubpageNav';

const content = {
  en: {
    hero: {
      title: 'Blog',
      subtitle: 'Stories, guides, and tips about Hawaiian food culture, Kona coffee, and island life in Waikiki.',
    },
    readMore: 'Read More \u2192',
    readTime: 'min read',
    posts: [
      {
        slug: 'best-donuts-waikiki',
        image: '/images/blog/best-donuts-waikiki.png',
        category: 'Food Guide',
        title: 'Best Donuts in Waikiki 2026: A Local\u2019s Guide',
        excerpt: 'From crispy mochi donuts to sugar-dusted malasadas, discover the top donut spots in Waikiki handpicked by locals.',
        readTime: 8,
      },
      {
        slug: 'what-is-bingsu',
        image: '/images/blog/what-is-bingsu.png',
        category: 'Korean Food',
        title: 'What is Bingsu? Your Guide to Korean Shaved Ice in Hawaii',
        excerpt: 'Learn about bingsu, Korea\u2019s beloved shaved ice dessert, and where to find the best bowls in Waikiki.',
        readTime: 6,
      },
      {
        slug: 'kona-coffee-guide',
        image: '/images/blog/kona-coffee-guide.png',
        category: 'Coffee',
        title: 'Kona Coffee vs Regular Coffee: What Makes It Special',
        excerpt: 'What sets 100% Kona coffee apart from the rest? A deep dive into origin, flavor, and why it\u2019s worth every sip.',
        readTime: 7,
      },
      {
        slug: 'korean-food-waikiki',
        image: '/images/blog/korean-food-waikiki.png',
        category: 'Food Guide',
        title: 'Korean Food in Waikiki 2026: The Ultimate K-Food Guide',
        excerpt: 'From corn dogs to bingsu, Korean BBQ to bibimbap \u2014 your complete guide to the K-food explosion in Waikiki.',
        readTime: 7,
      },
      {
        slug: 'cheap-eats-waikiki',
        image: '/images/blog/cheap-eats-waikiki.png',
        category: 'Budget Guide',
        title: 'Cheap Eats in Waikiki Under $15: Best Budget Food 2026',
        excerpt: 'Waikiki doesn\u2019t have to break the bank. The best affordable eats from $3 donuts to $10 plate lunches.',
        readTime: 6,
      },
      {
        slug: 'malasada-vs-mochi-donut',
        image: '/images/blog/malasada-vs-mochi-donut.png',
        category: 'Comparison',
        title: 'Malasada vs Mochi Donut: Which Hawaiian Treat Wins?',
        excerpt: 'Portuguese fluffy vs Japanese chewy \u2014 the ultimate Hawaiian donut showdown. Spoiler: you should try both.',
        readTime: 5,
      },      {
        slug: 'kona-coffee-chinese-guide',
        image: '/images/blog/kona-coffee-chinese-guide.png',
        category: 'Coffee',
        title: 'Complete Guide to Hawaiian Kona Coffee',
        excerpt: 'Flavor profile, brewing methods, and why Kona is perfect for Americano. The definitive Kona coffee guide.',
        readTime: 8,
      },
      {
        slug: 'best-desserts-waikiki',
        image: '/images/blog/best-desserts-waikiki.png',
        category: 'Food Guide',
        title: 'Best Desserts in Waikiki 2026: Sweet Spots You Can\'t Miss',
        excerpt: 'From bingsu to mochi donuts, malasadas to acai bowls — the ultimate Waikiki dessert guide.',
        readTime: 7,
      },
      {
        slug: 'waikiki-food-guide-korean',
        image: '/images/blog/waikiki-food-guide-korean.png',
        category: 'Food Guide',
        title: 'Waikiki Food Guide for Korean Travelers',
        excerpt: 'Everything Korean tourists need to know about eating in Waikiki — from Kona coffee to malasadas.',
        readTime: 8,
      },
      {
        slug: 'waikiki-cafe-guide-japanese',
        image: '/images/blog/waikiki-cafe-guide-japanese.png',
        category: 'Food Guide',
        title: 'Waikiki Cafe Guide for Japanese Travelers',
        excerpt: 'The best cafes in Waikiki for coffee lovers — Kona coffee, mochi donuts, and the aloha experience.',
        readTime: 7,
      },
    ],
  },
  ja: {
    hero: {
      title: '\u30D6\u30ED\u30B0',
      subtitle: '\u30CF\u30EF\u30A4\u306E\u30D5\u30FC\u30C9\u30AB\u30EB\u30C1\u30E3\u30FC\u3001\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC\u3001\u30EF\u30A4\u30AD\u30AD\u306E\u5CF6\u751F\u6D3B\u306B\u3064\u3044\u3066\u306E\u30B9\u30C8\u30FC\u30EA\u30FC\u3001\u30AC\u30A4\u30C9\u3001\u30D2\u30F3\u30C8\u3002',
    },
    readMore: '\u7D9A\u304D\u3092\u8AAD\u3080 \u2192',
    readTime: '\u5206\u3067\u8AAD\u3081\u308B',
    posts: [
      {
        slug: 'best-donuts-waikiki',
        image: '/images/blog/best-donuts-waikiki.png',
        category: '\u30D5\u30FC\u30C9\u30AC\u30A4\u30C9',
        title: '\u30EF\u30A4\u30AD\u30AD\u306E\u30D9\u30B9\u30C8\u30C9\u30FC\u30CA\u30C4 2026\uFF1A\u5730\u5143\u6C11\u30AC\u30A4\u30C9',
        excerpt: '\u30B5\u30AF\u30B5\u30AF\u306E\u30E2\u30C1\u30C9\u30FC\u30CA\u30C4\u304B\u3089\u7802\u7CD6\u304C\u304B\u304B\u3063\u305F\u30DE\u30E9\u30B5\u30C0\u307E\u3067\u3001\u5730\u5143\u306E\u4EBA\u304C\u9078\u3076\u30EF\u30A4\u30AD\u30AD\u306E\u30C8\u30C3\u30D7\u30C9\u30FC\u30CA\u30C4\u30B9\u30DD\u30C3\u30C8\u3002',
        readTime: 8,
      },
      {
        slug: 'what-is-bingsu',
        image: '/images/blog/what-is-bingsu.png',
        category: '\u97D3\u56FD\u30D5\u30FC\u30C9',
        title: '\u30D3\u30F3\u30B9\u3068\u306F\uFF1F\u30CF\u30EF\u30A4\u3067\u697D\u3057\u3080\u97D3\u56FD\u304B\u304D\u6C37\u30AC\u30A4\u30C9',
        excerpt: '\u97D3\u56FD\u3067\u611B\u3055\u308C\u3066\u3044\u308B\u304B\u304D\u6C37\u30C7\u30B6\u30FC\u30C8\u300C\u30D3\u30F3\u30B9\u300D\u306B\u3064\u3044\u3066\u3001\u305D\u3057\u3066\u30EF\u30A4\u30AD\u30AD\u3067\u6700\u9AD8\u306E\u4E00\u676F\u3092\u898B\u3064\u3051\u308B\u65B9\u6CD5\u3002',
        readTime: 6,
      },
      {
        slug: 'kona-coffee-guide',
        image: '/images/blog/kona-coffee-guide.png',
        category: '\u30B3\u30FC\u30D2\u30FC',
        title: '\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC vs \u666E\u901A\u306E\u30B3\u30FC\u30D2\u30FC\uFF1A\u4F55\u304C\u7279\u5225\u306A\u306E\u304B',
        excerpt: '100%\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC\u304C\u4ED6\u3068\u9055\u3046\u7406\u7531\u3068\u306F\uFF1F\u539F\u7523\u5730\u3001\u98A8\u5473\u3001\u305D\u306E\u4FA1\u5024\u306B\u8FEB\u308B\u8A73\u3057\u3044\u30AC\u30A4\u30C9\u3002',
        readTime: 7,
      },
      { slug: 'korean-food-waikiki',
        image: '/images/blog/korean-food-waikiki.png', category: 'K\u30D5\u30FC\u30C9', title: '\u30EF\u30A4\u30AD\u30AD\u306E\u97D3\u56FD\u6599\u7406 2026\uFF1AK\u30D5\u30FC\u30C9\u5B8C\u5168\u30AC\u30A4\u30C9', excerpt: '\u30B3\u30FC\u30F3\u30C9\u30C3\u30B0\u304B\u3089\u30D3\u30F3\u30B9\u3001\u97D3\u56FDBBQ\u304B\u3089\u30D3\u30D3\u30F3\u30D0\u307E\u3067\u3002\u30EF\u30A4\u30AD\u30AD\u306EK\u30D5\u30FC\u30C9\u9769\u547D\u3092\u5B8C\u5168\u7DB2\u7F85\u3002', readTime: 7 },
      { slug: 'cheap-eats-waikiki',
        image: '/images/blog/cheap-eats-waikiki.png', category: '\u7BC0\u7D04\u30AC\u30A4\u30C9', title: '\u30EF\u30A4\u30AD\u30AD\u306E\u5B89\u3046\u307E\u30B0\u30EB\u30E1 $15\u4EE5\u4E0B\uFF1A2026\u5E74\u7248', excerpt: '\u30EF\u30A4\u30AD\u30AD\u3067\u3082\u304A\u5F97\u306B\u98DF\u3079\u3089\u308C\u308B\uFF01$3\u306E\u30C9\u30FC\u30CA\u30C4\u304B\u3089$10\u306E\u30D7\u30EC\u30FC\u30C8\u30E9\u30F3\u30C1\u307E\u3067\u3002', readTime: 6 },
      { slug: 'malasada-vs-mochi-donut',
        image: '/images/blog/malasada-vs-mochi-donut.png', category: '\u6BD4\u8F03', title: '\u30DE\u30E9\u30B5\u30C0 vs \u30E2\u30C1\u30C9\u30FC\u30CA\u30C4\uFF1A\u3069\u3061\u3089\u304C\u52DD\u3064\uFF1F', excerpt: '\u30DD\u30EB\u30C8\u30AC\u30EB\u306E\u3075\u308F\u3075\u308F vs \u65E5\u672C\u306E\u3082\u3061\u3082\u3061\u3002\u30CF\u30EF\u30A4\u306E\u30C9\u30FC\u30CA\u30C4\u5BFE\u6C7A\u3002\u7D50\u8AD6\uFF1A\u4E21\u65B9\u98DF\u3079\u308B\u3079\u304D\u3002', readTime: 5 },
      { slug: 'kona-coffee-chinese-guide', image: '/images/blog/kona-coffee-chinese-guide.png', category: 'コーヒー', title: 'ハワイコナコーヒー完全ガイド', excerpt: '風味、添れ方、アメリカーノに最適な理由。コナコーヒーの決定版ガイド。', readTime: 8 },
      { slug: 'best-desserts-waikiki', image: '/images/blog/best-desserts-waikiki.png', category: 'フードガイド', title: 'ワイキキのベストデザート 2026', excerpt: 'ビンスからモチドーナツ、マラサダからアサイーボウルまで。', readTime: 7 },
      { slug: 'waikiki-food-guide-korean', image: '/images/blog/waikiki-food-guide-korean.png', category: 'Kフード', title: '韓国人旅行者向けワイキキグルメガイド', excerpt: 'コナコーヒーからマラサダまで、韓国人観光客のためのワイキキ食べ歩き。', readTime: 8 },
      { slug: 'waikiki-cafe-guide-japanese', image: '/images/blog/waikiki-cafe-guide-japanese.png', category: 'カフェ', title: 'ワイキキおすすめカフェ 2026', excerpt: 'コナコーヒー、モチドーナツ、アロハ体験。コーヒー好きのためのワイキキカフェガイド。', readTime: 7 },
    ],
  },
  ko: {
    hero: {
      title: '\uBE14\uB85C\uADF8',
      subtitle: '\uD558\uC640\uC774 \uD478\uB4DC \uBB38\uD654, \uCF54\uB098 \uCEE4\uD53C, \uC640\uC774\uD0A4\uD0A4 \uC12C \uC0DD\uD65C\uC5D0 \uB300\uD55C \uC774\uC57C\uAE30, \uAC00\uC774\uB4DC, \uD301.',
    },
    readMore: '\uB354 \uC77D\uAE30 \u2192',
    readTime: '\uBD84 \uC77D\uAE30',
    posts: [
      {
        slug: 'best-donuts-waikiki',
        image: '/images/blog/best-donuts-waikiki.png',
        category: '\uD478\uB4DC \uAC00\uC774\uB4DC',
        title: '\uC640\uC774\uD0A4\uD0A4 \uBCA0\uC2A4\uD2B8 \uB3C4\uB11B 2026: \uB85C\uCEEC \uAC00\uC774\uB4DC',
        excerpt: '\uBC14\uC0AD\uD55C \uBAA8\uCE58 \uB3C4\uB11B\uBD80\uD130 \uC124\uD0D5\uC744 \uBFCC\uB9B0 \uB9D0\uB77C\uC0AC\uB2E4\uAE4C\uC9C0, \uD604\uC9C0\uC778\uC774 \uC120\uD0DD\uD55C \uC640\uC774\uD0A4\uD0A4 \uCD5C\uACE0\uC758 \uB3C4\uB11B \uC2A4\uD31F.',
        readTime: 8,
      },
      {
        slug: 'what-is-bingsu',
        image: '/images/blog/what-is-bingsu.png',
        category: '\uD55C\uAD6D \uC74C\uC2DD',
        title: '\uBE59\uC218\uB780? \uD558\uC640\uC774\uC5D0\uC11C \uC990\uAE30\uB294 \uD55C\uAD6D \uBE59\uC218 \uAC00\uC774\uB4DC',
        excerpt: '\uD55C\uAD6D\uC5D0\uC11C \uC0AC\uB791\uBC1B\uB294 \uBE59\uC218 \uB514\uC800\uD2B8\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACE0, \uC640\uC774\uD0A4\uD0A4\uC5D0\uC11C \uCD5C\uACE0\uC758 \uBE59\uC218\uB97C \uCC3E\uB294 \uBC29\uBC95.',
        readTime: 6,
      },
      {
        slug: 'kona-coffee-guide',
        image: '/images/blog/kona-coffee-guide.png',
        category: '\uCEE4\uD53C',
        title: '\uCF54\uB098 \uCEE4\uD53C vs \uC77C\uBC18 \uCEE4\uD53C: \uBB34\uC5C7\uC774 \uD2B9\uBCC4\uD55C\uAC00',
        excerpt: '100% \uCF54\uB098 \uCEE4\uD53C\uAC00 \uB2E4\uB978 \uCEE4\uD53C\uC640 \uB2E4\uB978 \uC810\uC740? \uC6D0\uC0B0\uC9C0, \uD48D\uBBF8, \uADF8 \uAC00\uCE58\uC5D0 \uB300\uD55C \uC0C1\uC138 \uAC00\uC774\uB4DC.',
        readTime: 7,
      },
      { slug: 'korean-food-waikiki',
        image: '/images/blog/korean-food-waikiki.png', category: 'K-\uD478\uB4DC', title: '\uC640\uC774\uD0A4\uD0A4 \uD55C\uAD6D \uC74C\uC2DD 2026: K-\uD478\uB4DC \uC644\uBCBD \uAC00\uC774\uB4DC', excerpt: '\uCF58\uB3C4\uADF8\uBD80\uD130 \uBE59\uC218, \uD55C\uAD6DBBQ\uBD80\uD130 \uBE44\uBE54\uBC25\uAE4C\uC9C0. \uC640\uC774\uD0A4\uD0A4 K-\uD478\uB4DC \uD3ED\uBC1C \uC644\uBCBD \uC815\uB9AC.', readTime: 7 },
      { slug: 'cheap-eats-waikiki',
        image: '/images/blog/cheap-eats-waikiki.png', category: '\uC808\uC57D \uAC00\uC774\uB4DC', title: '\uC640\uC774\uD0A4\uD0A4 \uC54C\uB728 \uB9DB\uC9D1 $15 \uC774\uD558: 2026\uB144\uD310', excerpt: '\uC640\uC774\uD0A4\uD0A4\uB3C4 \uC800\uB834\uD558\uAC8C! $3 \uB3C4\uB11B\uBD80\uD130 $10 \uD50C\uB808\uC774\uD2B8 \uB7F0\uCE58\uAE4C\uC9C0 \uCD5C\uACE0\uC758 \uAC00\uC131\uBE44 \uB9DB\uC9D1.', readTime: 6 },
      { slug: 'malasada-vs-mochi-donut',
        image: '/images/blog/malasada-vs-mochi-donut.png', category: '\uBE44\uAD50', title: '\uB9D0\uB77C\uC0AC\uB2E4 vs \uBAA8\uCE58 \uB3C4\uB11B: \uC5B4\uB290 \uCABD\uC774 \uC2B9\uC790?', excerpt: '\uD3EC\uB974\uD22C\uAC08\uC758 \uD3ED\uC2E0 vs \uC77C\uBCF8\uC758 \uCABD\uB4DD. \uD558\uC640\uC774 \uB3C4\uB11B \uB300\uACB0. \uACB0\uB860: \uB458 \uB2E4 \uBA39\uC5B4\uBCF4\uC138\uC694.', readTime: 5 },
      { slug: 'kona-coffee-chinese-guide', image: '/images/blog/kona-coffee-chinese-guide.png', category: '커피', title: '하와이 코나 커피 완벽 가이드', excerpt: '풍미, 추출 방법, 아메리카노에 최적인 이유. 코나 커피의 모든 것.', readTime: 8 },
      { slug: 'best-desserts-waikiki', image: '/images/blog/best-desserts-waikiki.png', category: '푸드 가이드', title: '와이키키 베스트 디저트 2026', excerpt: '빙수부터 모치 도넛, 말라사다부터 아사이 볼까지 와이키키 디저트 총정리.', readTime: 7 },
      { slug: 'waikiki-food-guide-korean', image: '/images/blog/waikiki-food-guide-korean.png', category: '맛집 가이드', title: '와이키키 맛집 완벽 가이드 2026', excerpt: '코나 커피부터 말라사다까지, 한국인 여행자를 위한 와이키키 먹방 총정리.', readTime: 8 },
      { slug: 'waikiki-cafe-guide-japanese', image: '/images/blog/waikiki-cafe-guide-japanese.png', category: '카페', title: '와이키키 추천 카페 2026', excerpt: '코나 커피, 모치 도넛, 알로하 체험. 커피 러버를 위한 와이키키 카페 가이드.', readTime: 7 },
    ],
  },
  zh: {
    hero: {
      title: '\u535A\u5BA2',
      subtitle: '\u5173\u4E8E\u590F\u5A01\u5937\u7F8E\u98DF\u6587\u5316\u3001\u79D1\u7EB3\u5496\u5561\u548C\u5A01\u57FA\u57FA\u5C9B\u5C7F\u751F\u6D3B\u7684\u6545\u4E8B\u3001\u6307\u5357\u548C\u5C0F\u8D34\u58EB\u3002',
    },
    readMore: '\u9605\u8BFB\u66F4\u591A \u2192',
    readTime: '\u5206\u949F\u9605\u8BFB',
    posts: [
      {
        slug: 'best-donuts-waikiki',
        image: '/images/blog/best-donuts-waikiki.png',
        category: '\u7F8E\u98DF\u6307\u5357',
        title: '\u5A01\u57FA\u57FA\u6700\u4F73\u751C\u751C\u5708 2026\uFF1A\u672C\u5730\u4EBA\u6307\u5357',
        excerpt: '\u4ECE\u9165\u8106\u7684\u9EBB\u85AF\u751C\u751C\u5708\u5230\u88F9\u7740\u7CD6\u7684\u9A6C\u62C9\u8428\u8FBE\uFF0C\u63A2\u7D22\u5F53\u5730\u4EBA\u7CBE\u9009\u7684\u5A01\u57FA\u57FA\u9876\u7EA7\u751C\u751C\u5708\u5E97\u3002',
        readTime: 8,
      },
      {
        slug: 'what-is-bingsu',
        image: '/images/blog/what-is-bingsu.png',
        category: '\u97E9\u56FD\u7F8E\u98DF',
        title: '\u4EC0\u4E48\u662F\u5228\u51B0\uFF1F\u5728\u590F\u5A01\u5937\u54C1\u5C1D\u97E9\u56FD\u5228\u51B0\u6307\u5357',
        excerpt: '\u4E86\u89E3\u97E9\u56FD\u6700\u53D7\u6B22\u8FCE\u7684\u5228\u51B0\u7518\u54C1\uFF0C\u4EE5\u53CA\u5728\u5A01\u57FA\u57FA\u54EA\u91CC\u53EF\u4EE5\u627E\u5230\u6700\u597D\u7684\u4E00\u7897\u3002',
        readTime: 6,
      },
      {
        slug: 'kona-coffee-guide',
        image: '/images/blog/kona-coffee-guide.png',
        category: '\u5496\u5561',
        title: '\u79D1\u7EB3\u5496\u5561 vs \u666E\u901A\u5496\u5561\uFF1A\u5B83\u4E3A\u4EC0\u4E48\u7279\u522B',
        excerpt: '100%\u79D1\u7EB3\u5496\u5561\u4E0E\u5176\u4ED6\u5496\u5561\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F\u6DF1\u5165\u4E86\u89E3\u5176\u4EA7\u5730\u3001\u98CE\u5473\u548C\u4EF7\u503C\u3002',
        readTime: 7,
      },
      { slug: 'korean-food-waikiki',
        image: '/images/blog/korean-food-waikiki.png', category: 'K-\u7F8E\u98DF', title: '\u5A01\u57FA\u57FA\u97E9\u56FD\u7F8E\u98DF 2026\uFF1AK-Food\u5B8C\u5168\u6307\u5357', excerpt: '\u4ECE\u7389\u7C73\u70ED\u72D7\u5230\u5228\u51B0\uFF0C\u97E9\u5F0FBBQ\u5230\u77F3\u9505\u62CC\u996D\u3002\u5A01\u57FA\u57FA\u97E9\u98DF\u9769\u547D\u5B8C\u5168\u7F51\u7F57\u3002', readTime: 7 },
      { slug: 'cheap-eats-waikiki',
        image: '/images/blog/cheap-eats-waikiki.png', category: '\u7701\u94B1\u6307\u5357', title: '\u5A01\u57FA\u57FA$15\u4EE5\u4E0B\u5E73\u4EF7\u7F8E\u98DF\uFF1A2026\u7248', excerpt: '\u5A01\u57FA\u57FA\u4E5F\u80FD\u5403\u5F97\u5B9E\u60E0\uFF01\u4ECE$3\u751C\u751C\u5708\u5230$10\u4FBF\u5F53\uFF0C\u6700\u4F73\u6027\u4EF7\u6BD4\u7F8E\u98DF\u3002', readTime: 6 },
      { slug: 'malasada-vs-mochi-donut',
        image: '/images/blog/malasada-vs-mochi-donut.png', category: '\u5BF9\u6BD4', title: '\u9A6C\u62C9\u8428\u8FBE vs \u9EBB\u85AF\u751C\u751C\u5708\uFF1A\u54EA\u4E2A\u66F4\u80DC\u4E00\u7B79\uFF1F', excerpt: '\u8461\u8404\u7259\u7684\u8F6F\u7EF5 vs \u65E5\u672C\u7684Q\u5F39\u3002\u590F\u5A01\u5937\u751C\u751C\u5708\u5927\u5BF9\u51B3\u3002\u7ED3\u8BBA\uFF1A\u4E24\u4E2A\u90FD\u8981\u5C1D\u3002', readTime: 5 },
      { slug: 'kona-coffee-chinese-guide', image: '/images/blog/kona-coffee-chinese-guide.png', category: '咖啡', title: '夏威夷科纳咖啡完全指南', excerpt: '风味、冲泡方法、为什么科纳咖啡适合冲美式。科纳咖啡的一切。', readTime: 8 },
      { slug: 'best-desserts-waikiki', image: '/images/blog/best-desserts-waikiki.png', category: '美食指南', title: '威基基最佳甘品 2026', excerpt: '从刨冰到麻薯甜甜圈，从马拉萨达到巴西莓碗。威基基甘品总指南。', readTime: 7 },
      { slug: 'waikiki-food-guide-korean', image: '/images/blog/waikiki-food-guide-korean.png', category: '美食指南', title: '韩国游客威基基美食指南', excerpt: '从科纳咖啡到马拉萨达，韩国游客的威基基吃货攻略。', readTime: 8 },
      { slug: 'waikiki-cafe-guide-japanese', image: '/images/blog/waikiki-cafe-guide-japanese.png', category: '咖啡厅', title: '威基基推荐咖啡厅 2026', excerpt: '科纳咖啡、麻薯甜甜圈、阿罗哈体验。咖啡爱好者的威基基咖啡厅指南。', readTime: 7 },
    ],
  },
  es: {
    hero: {
      title: 'Blog',
      subtitle: 'Historias, gu\u00EDas y consejos sobre la cultura gastron\u00F3mica hawaiana, caf\u00E9 Kona y la vida en Waikiki.',
    },
    readMore: 'Leer M\u00E1s \u2192',
    readTime: 'min de lectura',
    posts: [
      {
        slug: 'best-donuts-waikiki',
        image: '/images/blog/best-donuts-waikiki.png',
        category: 'Gu\u00EDa Gastron\u00F3mica',
        title: 'Los Mejores Donuts en Waikiki 2026: Gu\u00EDa Local',
        excerpt: 'Desde crujientes donuts de mochi hasta malasadas espolvoreadas con az\u00FAcar, descubre los mejores spots de donuts en Waikiki.',
        readTime: 8,
      },
      {
        slug: 'what-is-bingsu',
        image: '/images/blog/what-is-bingsu.png',
        category: 'Comida Coreana',
        title: '\u00BFQu\u00E9 es el Bingsu? Tu Gu\u00EDa del Hielo Raspado Coreano en Hawaii',
        excerpt: 'Conoce el bingsu, el postre de hielo raspado favorito de Corea, y d\u00F3nde encontrar los mejores en Waikiki.',
        readTime: 6,
      },
      {
        slug: 'kona-coffee-guide',
        image: '/images/blog/kona-coffee-guide.png',
        category: 'Caf\u00E9',
        title: 'Caf\u00E9 Kona vs Caf\u00E9 Regular: \u00BFQu\u00E9 Lo Hace Especial?',
        excerpt: '\u00BFQu\u00E9 diferencia al caf\u00E9 100% Kona del resto? Una gu\u00EDa sobre su origen, sabor y por qu\u00E9 vale cada sorbo.',
        readTime: 7,
      },
    ],
  },
};

// Category color mapping — luxury dark theme
const categoryColors: Record<string, string> = {
  'Food Guide': 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
  '\u30D5\u30FC\u30C9\u30AC\u30A4\u30C9': 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
  '\uD478\uB4DC \uAC00\uC774\uB4DC': 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
  '\u7F8E\u98DF\u6307\u5357': 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
  'Gu\u00EDa Gastron\u00F3mica': 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
  'Korean Food': 'bg-rose-500/20 text-rose-300 border border-rose-500/30',
  '\u97D3\u56FD\u30D5\u30FC\u30C9': 'bg-rose-500/20 text-rose-300 border border-rose-500/30',
  '\uD55C\uAD6D \uC74C\uC2DD': 'bg-rose-500/20 text-rose-300 border border-rose-500/30',
  '\u97E9\u56FD\u7F8E\u98DF': 'bg-rose-500/20 text-rose-300 border border-rose-500/30',
  'Comida Coreana': 'bg-rose-500/20 text-rose-300 border border-rose-500/30',
  'Coffee': 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
  '\u30B3\u30FC\u30D2\u30FC': 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
  '\uCEE4\uD53C': 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
  '\u5496\u5561': 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
  'Caf\u00E9': 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
  'Budget Guide': 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
  '\u7BC0\u7D04\u30AC\u30A4\u30C9': 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
  '\uC808\uC57D \uAC00\uC774\uB4DC': 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
  '\u7701\u94B1\u6307\u5357': 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
  'Comparison': 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
  '\u6BD4\u8F03': 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
  '\uBE44\uAD50': 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
  '\u5BF9\u6BD4': 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
  'K-\u7F8E\u98DF': 'bg-rose-500/20 text-rose-300 border border-rose-500/30',
  'K-\uD478\uB4DC': 'bg-rose-500/20 text-rose-300 border border-rose-500/30',
  'K\u30D5\u30FC\u30C9': 'bg-rose-500/20 text-rose-300 border border-rose-500/30',
};

export default function BlogPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = content[locale as keyof typeof content] || content.en;

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <SubpageNav locale={locale} />

      {/* Hero Section — dark luxury */}
      <section className="relative py-28 md:py-36 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1208] via-[#0d0d0d] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(180,130,60,0.08),transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-block mb-6 px-4 py-1.5 border border-amber-600/30 rounded-full text-amber-400/80 text-xs tracking-[0.2em] uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Kona Coffee Donut
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-5 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Featured Post (first post large) */}
      {t.posts.length > 0 && (
        <section className="px-4 max-w-6xl mx-auto -mt-8 mb-12">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href={`/${locale}/blog/${t.posts[0].slug}`} className="group block">
              <div className="relative h-[400px] md:h-[480px] rounded-2xl overflow-hidden">
                {t.posts[0].image && (
                  <Image src={t.posts[0].image} alt={t.posts[0].title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <span className={`inline-block text-[10px] font-semibold px-3 py-1 rounded-full mb-4 tracking-wider uppercase ${categoryColors[t.posts[0].category] || 'bg-white/10 text-white/70 border border-white/20'}`}>
                    {t.posts[0].category}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">{t.posts[0].title}</h2>
                  <p className="text-white/60 text-sm md:text-base max-w-2xl line-clamp-2">{t.posts[0].excerpt}</p>
                  <div className="mt-4 text-amber-400 text-sm font-medium">{t.posts[0].readTime} {t.readTime} &middot; {t.readMore}</div>
                </div>
              </div>
            </Link>
          </motion.article>
        </section>
      )}

      {/* Blog Post Grid — remaining posts */}
      <section className="px-4 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.posts.slice(1).map((post, index) => (
            <motion.article
              key={post.slug}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Link href={`/${locale}/blog/${post.slug}`} className="block">
                <div className="bg-[#141414] border border-white/[0.06] rounded-xl overflow-hidden hover:border-amber-600/20 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(180,130,50,0.06)]">
                  {/* Image */}
                  {post.image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                    </div>
                  )}

                  <div className="p-5">
                    {/* Category */}
                    <span className={`inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full mb-3 tracking-wider uppercase ${categoryColors[post.category] || 'bg-white/10 text-white/60 border border-white/10'}`}>
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2 className="text-base font-bold text-white/90 mb-2 group-hover:text-amber-400 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-white/40 mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                      <span className="text-[11px] text-white/25">{post.readTime} {t.readTime}</span>
                      <span className="text-xs font-semibold text-amber-500/80 group-hover:text-amber-400 transition-colors">{t.readMore}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
