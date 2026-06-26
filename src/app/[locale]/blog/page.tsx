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
        slug: 'honolulu-coffee-waikiki',
        image: '/images/blog/honolulu-coffee-waikiki.jpeg',
        category: 'Coffee',
        title: 'Honolulu Coffee in Waikiki: Drink the Same 100% Kona Beans (2026)',
        excerpt: 'Love Honolulu Coffee\'s Kona? Here\'s where to drink the very same 100% Kona beans in Waikiki — freshly brewed at Kona Coffee Donut?, open late and paired with mochi donuts.',
        readTime: 7,
      },
      {
        slug: 'best-coffee-shops-waikiki',
        image: '/images/blog/best-coffee-shops-waikiki.jpeg',
        category: 'Coffee',
        title: 'Best Coffee Shops in Waikiki (2026): Real 100% Kona, Ranked',
        excerpt: 'A ranked guide to Waikiki\'s best coffee shops — from specialty 100% Kona to açaí favorites — plus where to pair real Kona coffee with a fresh mochi donut, ~5 min from the beach.',
        readTime: 8,
      },
      {
        slug: 'kona-coffee-purveyors-vs-kona-coffee-donut',
        image: '/images/blog/kona-coffee-purveyors-vs-kona-coffee-donut.jpeg',
        category: 'Coffee',
        title: 'Kona Coffee Purveyors vs Kona Coffee Donut?: Best 100% Kona in Waikiki (2026)',
        excerpt: 'Two Waikiki spots serving genuine 100% Kona, compared fairly — Purveyors\' upscale specialty experience vs Kona Coffee Donut?\'s 100% Kona with mochi donuts, open to 9PM.',
        readTime: 8,
      },
      {
        slug: 'island-vintage-vs-kona-coffee-donut',
        image: '/images/blog/island-vintage-vs-kona-coffee-donut.jpeg',
        category: 'Food Guide',
        title: 'Island Vintage Coffee vs Kona Coffee Donut?: Açaí & Kona Compared (2026)',
        excerpt: 'A fair, side-by-side look at two Waikiki favorites — Island Vintage\'s famous açaí bowls vs Kona Coffee Donut?\'s 100% Kona, açaí, mochi donuts and bingsu. Which fits your visit?',
        readTime: 8,
      },
      {
        slug: 'matcha-waikiki',
        image: '/images/blog/matcha-waikiki.jpeg',
        category: 'Coffee',
        title: 'Matcha in Waikiki (2026): What It Is, the History & Every Flavor We Pour',
        excerpt: 'A complete guide to matcha — what it is, its history, matcha vs coffee vs hojicha, and all 9 matcha & hojicha latte flavors we pour in Waikiki, ~5 min from the beach.',
        readTime: 8,
      },
      {
        slug: 'what-is-hojicha-waikiki',
        image: '/images/blog/what-is-hojicha-waikiki.jpeg',
        category: 'Coffee',
        title: 'What Is Hojicha? Roasted Green Tea Lattes in Waikiki (2026 Guide)',
        excerpt: 'Hojicha is Japanese green tea roasted until toasty, nutty, and naturally low in caffeine — here\'s hojicha vs matcha and where to get a hojicha latte in Waikiki.',
        readTime: 7,
      },
      {
        slug: 'strawberry-matcha-latte-waikiki',
        image: '/images/blog/strawberry-matcha-latte-waikiki.jpeg',
        category: 'Coffee',
        title: 'Strawberry Matcha Latte in Waikiki (2026): The Pink-and-Green Drink Everyone Wants',
        excerpt: 'The viral pink-and-green strawberry matcha latte has hit Waikiki — what it is, why strawberry and matcha work, and where to get one ($10.95) just minutes from the beach.',
        readTime: 7,
      },
      {
        slug: 'best-malasadas-waikiki',
        image: '/images/blog/best-malasadas-waikiki.jpeg',
        category: 'Food Guide',
        title: 'Best Malasadas in Waikiki (2026): Fresh Portuguese-Hawaiian Donuts',
        excerpt: 'Where to find the best malasadas in Waikiki — what makes a great one, flavors to try, and fresh malasadas paired with 100% Kona coffee about 5 minutes from Waikiki Beach.',
        readTime: 7,
      },
      {
        slug: 'matcha-mochi-donut-waikiki',
        image: '/images/blog/matcha-mochi-donut-waikiki.jpeg',
        category: 'Food Guide',
        title: 'Matcha Mochi Donut in Waikiki (2026): Where to Get the Green One',
        excerpt: 'Where to get a matcha mochi donut in Waikiki — a chewy rice-flour pon-de-ring with real green-tea glaze, paired with 100% Kona coffee about 5 minutes from the beach.',
        readTime: 7,
      },
      {
        slug: 'kona-coffee-and-donut-waikiki',
        image: '/images/blog/kona-coffee-and-donut-waikiki.jpeg',
        category: 'Coffee',
        title: 'Kona Coffee & Mochi Donut: Waikiki\'s Perfect Pairing (2026)',
        excerpt: 'Real 100% Kona coffee and fresh rice-flour mochi donuts under one roof in Waikiki — how to build the perfect coffee-and-donut combo at Kona Coffee Donut?, ~5 min from the beach.',
        readTime: 8,
      },
      {
        slug: 'best-kona-coffee-waikiki',
        image: '/images/blog/best-kona-coffee-waikiki.jpeg',
        category: 'Coffee',
        title: 'Best Kona Coffee in Waikiki (2026): Where to Drink Real 100% Kona',
        excerpt: 'A local guide to where you can drink real, freshly brewed 100% Kona coffee near Waikiki Beach — and how to tell it from a watered-down "Kona blend."',
        readTime: 7,
      },
      {
        slug: 'buy-kona-coffee-waikiki',
        image: '/images/blog/buy-kona-coffee-waikiki.jpeg',
        category: 'Coffee',
        title: 'Where to Buy Kona Coffee in Waikiki: Sip It or Take It Home (2026)',
        excerpt: 'Two ways to buy Kona coffee in Waikiki — drink real 100% Kona by the cup or take whole beans home as a gift — plus how to dodge the "Kona Blend" trap.',
        readTime: 7,
      },
      {
        slug: 'is-kona-coffee-worth-it',
        image: '/images/blog/is-kona-coffee-worth-it.jpeg',
        category: 'Coffee',
        title: 'Is Kona Coffee Worth It? 100% Kona vs. Kona Blend',
        excerpt: 'Real Kona is pricey — here\'s the honest difference between 100% Kona and a "Kona Blend" (as little as 10% Kona), and where to taste the real thing in Waikiki.',
        readTime: 8,
      },
      {
        slug: 'hawaiian-shave-ice',
        image: '/images/blog/hawaiian-shave-ice.jpeg',
        category: 'Food Guide',
        title: 'What Is Hawaiian Shave Ice? History, Toppings & the Bingsu Upgrade',
        excerpt: 'Discover Hawaiian shave ice — its plantation history, snow cap and li hing mui — then taste the creamy Korean bingsu version we serve fresh in Waikiki.',
        readTime: 8,
      },
      {
        slug: 'what-is-a-malasada',
        image: '/images/blog/what-is-a-malasada.jpeg',
        category: 'Food Guide',
        title: 'What Is a Malasada? Hawaii\'s Famous Portuguese Donut Explained',
        excerpt: 'Discover what a malasada is — Hawaii\'s Portuguese sugar-rolled donut — and where to grab one fresh and hot in Waikiki.',
        readTime: 8,
      },
      {
        slug: 'what-is-a-mochi-donut',
        image: '/images/blog/what-is-a-mochi-donut.jpeg',
        category: 'Food Guide',
        title: 'What Is a Mochi Donut?',
        excerpt: 'Discover the chewy rice-flour pon-de-ring donut — and where to grab 24 fresh flavors paired with Kona coffee in Waikiki.',
        readTime: 8,
      },
      {
        slug: 'what-is-kona-coffee',
        image: '/images/blog/what-is-kona-coffee.jpeg',
        category: 'Coffee',
        title: 'What Is Kona Coffee? Why It\'s So Rare & Expensive',
        excerpt: 'Why true Hawaiian Kona coffee costs so much, 100% Kona vs Kona Blend, and where to drink a fresh cup in Waikiki.',
        readTime: 8,
      },
      {
        slug: 'best-mochi-donuts-waikiki',
        image: '/images/blog/best-mochi-donuts-waikiki.jpeg',
        category: 'Mochi Donuts',
        title: 'Best Mochi Donuts in Waikiki: 24 Fresh Rice-Flour Flavors',
        excerpt: 'Crispy-outside, chewy-inside rice-flour mochi donuts in 24 flavors on Kalākaua Ave — what makes them special, the flavors to try, and how to order.',
        readTime: 5,
      },
      {
        slug: 'how-to-eat-bingsu',
        image: '/images/blog/best-bingsu-waikiki.jpeg',
        category: 'Korean Food',
        title: 'How to Eat Bingsu (The Korean Way)',
        excerpt: "Don't scoop from the top — mix it. A 60-second guide to eating bingsu like a Korean, plus where to try it in Waikiki.",
        readTime: 4,
      },
      {
        slug: 'best-budget-eats-waikiki',
        image: '/images/blog/cheap-eats-waikiki.png',
        category: 'Budget Guide',
        title: 'Best Places to Eat in Waikiki on a Budget (Under $15)',
        excerpt: 'Eat well in Waikiki without spending $50+ per meal. The best budget cafes, plate lunches, and snacks — all under $15.',
        readTime: 6,
      },
      {
        slug: 'best-acai-bowls-waikiki',
        image: '/images/blog/best-desserts-waikiki.png',
        category: 'Food Guide',
        title: 'Best Acai Bowls in Waikiki 2026',
        excerpt: 'Fresh-blended thick acai with banana, granola, coconut, honey. Where to find the real deal in Waikiki.',
        readTime: 5,
      },
      {
        slug: 'korean-corn-dog-waikiki-guide',
        image: '/images/blog/korean-food-waikiki.png',
        category: 'Korean Food',
        title: 'Korean Corn Dog in Waikiki: Best Mozzarella & Potato Dogs',
        excerpt: "Crispy outside, stretchy mozzarella inside, sugar-dusted. The TikTok K-food staple is in Waikiki — here's where to find it.",
        readTime: 5,
      },
      {
        slug: 'ube-mochi-donut-waikiki',
        image: '/images/blog/mochi-donut-flavors-waikiki.jpeg',
        category: 'Food Guide',
        title: "Ube Mochi Donut: Hawaii's Most Photogenic Donut",
        excerpt: 'Vibrant purple, chewy mochi texture, distinctly sweet and earthy. Where to try Hawaii\'s most Instagram-worthy donut.',
        readTime: 4,
      },
      {
        slug: 'best-bingsu-waikiki',
        image: '/images/blog/best-bingsu-waikiki.jpeg',
        category: 'Korean Food',
        title: 'Best Bingsu in Waikiki 2026: Korean Shaved Ice Worth the Trip',
        excerpt: 'Where to find authentic Korean bingsu in Waikiki \u2014 snow-soft milk ice with mango, strawberry, and matcha. Walking distance from the beach.',
        readTime: 6,
      },
      {
        slug: 'mochi-donut-flavors-waikiki',
        image: '/images/blog/mochi-donut-flavors-waikiki.jpeg',
        category: 'Food Guide',
        title: 'Mochi Donut Flavors in Waikiki: A Visual Menu Guide',
        excerpt: 'All 10+ mochi donut flavors at Kona Coffee Donut \u2014 ube, matcha, strawberry, taro, black sesame, and more. Hand-made daily on Kal\u0101kaua.',
        readTime: 5,
      },
      {
        slug: 'best-smoothies-waikiki',
        image: '/images/blog/best-smoothies-waikiki.jpeg',
        category: 'Food Guide',
        title: 'Best Smoothies in Waikiki 2026: 10 Hawaiian Flavors at Mochi Land',
        excerpt: 'Pina colada, mango, ube, brown sugar boba, and 6 more \u2014 all $8.95, blended fresh on Kal\u0101kaua. Walking distance from Waikiki Beach.',
        readTime: 5,
      },
      {
        slug: 'where-to-try-kona-coffee-waikiki',
        image: '/images/blog/where-to-try-kona-coffee-waikiki.jpeg',
        category: 'Coffee',
        title: 'Where to Try Real Kona Coffee in Waikiki 2026',
        excerpt: 'Skip the chains. Find Kona coffee in Waikiki \u2014 pour-over, espresso, lattes, and beans to take home.',
        readTime: 6,
      },
      {
        slug: 'malasada-vs-mochi-donut-waikiki',
        image: '/images/blog/malasada-vs-mochi-donut-waikiki.jpeg',
        category: 'Comparison',
        title: 'Malasada vs Mochi Donut in Waikiki: Which Should You Try First?',
        excerpt: 'A side-by-side guide to flavor, texture, and where to try both Hawaii donut traditions in one walking-distance stop.',
        readTime: 5,
      },
      {
        slug: 'kona-affogato-waikiki',
        image: '/images/blog/kona-affogato-waikiki.jpeg',
        category: 'Coffee',
        title: 'Kona Affogato in Waikiki: Why Coffee Lovers Should Try This',
        excerpt: 'Espresso poured over vanilla bean ice cream \u2014 a 4-minute Italian-Hawaiian dessert that turns Honolulu Coffee into something magical.',
        readTime: 4,
      },
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
        excerpt: 'What sets Honolulu Coffee apart from the rest? A deep dive into origin, flavor, and why it\u2019s worth every sip.',
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
        slug: 'honolulu-coffee-waikiki',
        image: '/images/blog/honolulu-coffee-waikiki.jpeg',
        category: 'コーヒー',
        title: 'ワイキキのホノルルコーヒー：同じ100%コナ豆を飲める場所（2026）',
        excerpt: 'ホノルルコーヒーのコナがお好きですか？ワイキキでまさに同じ100%コナ豆を Kona Coffee Donut? で淹れたて、モチドーナツと一緒に飲める場所をご紹介。',
        readTime: 7,
      },
      {
        slug: 'best-coffee-shops-waikiki',
        image: '/images/blog/best-coffee-shops-waikiki.jpeg',
        category: 'コーヒー',
        title: 'ワイキキで一番のコーヒーショップ（2026）：本物の100%コナを格付け',
        excerpt: 'ワイキキのおすすめコーヒーショップをランキング。スペシャルティ100%コナからアサイーの名店まで、本物のコナコーヒーとモチドーナツを楽しめる場所を紹介。',
        readTime: 8,
      },
      {
        slug: 'kona-coffee-purveyors-vs-kona-coffee-donut',
        image: '/images/blog/kona-coffee-purveyors-vs-kona-coffee-donut.jpeg',
        category: 'コーヒー',
        title: 'Kona Coffee Purveyors vs Kona Coffee Donut?：ワイキキ最高の100%コナ（2026）',
        excerpt: '本物の100%コナを出すワイキキの2店を公平に比較。Purveyorsの上質なスペシャルティ体験と、モチドーナツも楽しめて21時まで営業のKona Coffee Donut?。',
        readTime: 8,
      },
      {
        slug: 'island-vintage-vs-kona-coffee-donut',
        image: '/images/blog/island-vintage-vs-kona-coffee-donut.jpeg',
        category: 'フードガイド',
        title: 'アイランドヴィンテージ vs Kona Coffee Donut?：アサイーとコナを比較（2026）',
        excerpt: 'ワイキキの人気2店を公平に比較。アイランドヴィンテージの名物アサイーボウルと、100%コナ・アサイー・モチドーナツ・ビンスが揃うKona Coffee Donut?。あなたに合うのは？',
        readTime: 8,
      },
      {
        slug: 'matcha-waikiki',
        image: '/images/blog/matcha-waikiki.jpeg',
        category: '\u30B3\u30FC\u30D2\u30FC',
        title: '\u62B9\u8336 in \u30EF\u30A4\u30AD\u30AD\uFF082026\uFF09\uFF1A\u62B9\u8336\u3068\u306F\uFF1F\u6B74\u53F2\u3068\u5168\u30D5\u30EC\u30FC\u30D0\u30FC\u5B8C\u5168\u30AC\u30A4\u30C9',
        excerpt: '\u62B9\u8336\u3068\u306F\u4F55\u304B\u304B\u3089\u6B74\u53F2\u3001\u62B9\u8336\u30FB\u30B3\u30FC\u30D2\u30FC\u30FB\u307B\u3046\u3058\u8336\u306E\u9055\u3044\u3001\u30EF\u30A4\u30AD\u30AD\u3067\u70B9\u3066\u308B\u62B9\u8336\uFF06\u307B\u3046\u3058\u8336\u30E9\u30C6\u51689\u7A2E\u307E\u3067\u3092\u89E3\u8AAC\u3059\u308B\u5B8C\u5168\u30AC\u30A4\u30C9\u3002\u30D3\u30FC\u30C1\u304B\u3089\u5F92\u6B69\u7D045\u5206\u3002',
        readTime: 8,
      },
      {
        slug: 'what-is-hojicha-waikiki',
        image: '/images/blog/what-is-hojicha-waikiki.jpeg',
        category: '\u30B3\u30FC\u30D2\u30FC',
        title: '\u307B\u3046\u3058\u8336\u3068\u306F\uFF1F\u30EF\u30A4\u30AD\u30AD\u306E\u7119\u714E\u7DD1\u8336\u30E9\u30C6\u5B8C\u5168\u30AC\u30A4\u30C9\uFF082026\u5E74\u7248\uFF09',
        excerpt: '\u307B\u3046\u3058\u8336\u306F\u7DD1\u8336\u3092\u7119\u714E\u3057\u305F\u9999\u3070\u3057\u304F\u30AB\u30D5\u30A7\u30A4\u30F3\u63A7\u3048\u3081\u306E\u65E5\u672C\u8336\u3002\u62B9\u8336\u3068\u306E\u9055\u3044\u3068\u3001\u30EF\u30A4\u30AD\u30AD\u3067\u307B\u3046\u3058\u8336\u30E9\u30C6\u304C\u98F2\u3081\u308B\u5834\u6240\u3092\u7D39\u4ECB\u3057\u307E\u3059\u3002',
        readTime: 7,
      },
      {
        slug: 'strawberry-matcha-latte-waikiki',
        image: '/images/blog/strawberry-matcha-latte-waikiki.jpeg',
        category: '\u30B3\u30FC\u30D2\u30FC',
        title: '\u30EF\u30A4\u30AD\u30AD\u306E\u30B9\u30C8\u30ED\u30D9\u30EA\u30FC\u62B9\u8336\u30E9\u30C6\uFF082026\uFF09\uFF5C\u307F\u3093\u306A\u304C\u6B32\u3057\u304C\u308B\u30D4\u30F3\u30AF\uFF06\u30B0\u30EA\u30FC\u30F3\u306E\u4E00\u676F',
        excerpt: '\u30D0\u30BA\u3063\u305F\u30D4\u30F3\u30AF\uFF06\u30B0\u30EA\u30FC\u30F3\u306E\u30B9\u30C8\u30ED\u30D9\u30EA\u30FC\u62B9\u8336\u30E9\u30C6\u304C\u30EF\u30A4\u30AD\u30AD\u306B\u3002\u305D\u306E\u6B63\u4F53\u3068\u76F8\u6027\u306E\u7406\u7531\u3001\u30D3\u30FC\u30C1\u304B\u3089\u5F92\u6B695\u5206\u3067\u8CB7\u3048\u308B\u5834\u6240\uFF08$10.95\uFF09\u307E\u3067\u89E3\u8AAC\u3057\u307E\u3059\u3002',
        readTime: 7,
      },
      {
        slug: 'best-malasadas-waikiki',
        image: '/images/blog/best-malasadas-waikiki.jpeg',
        category: '\u30D5\u30FC\u30C9\u30AC\u30A4\u30C9',
        title: '\u30EF\u30A4\u30AD\u30AD\u3067\u7F8E\u5473\u3057\u3044\u30DE\u30E9\u30B5\u30C02026\uFF5C\u63DA\u3052\u305F\u3066\u30DD\u30EB\u30C8\u30AC\u30EB\u7CFB\u30CF\u30EF\u30A4\u30C9\u30FC\u30CA\u30C4',
        excerpt: '\u30EF\u30A4\u30AD\u30AD\u3067\u7F8E\u5473\u3057\u3044\u30DE\u30E9\u30B5\u30C0\u304C\u98DF\u3079\u3089\u308C\u308B\u5834\u6240\u3068\u3001\u6700\u9AD8\u306E\u30DE\u30E9\u30B5\u30C0\u306E\u6761\u4EF6\u30FB\u4EBA\u6C17\u30D5\u30EC\u30FC\u30D0\u30FC\u3001\u30D3\u30FC\u30C1\u304B\u3089\u7D045\u5206\u306E\u63DA\u3052\u305F\u3066\u30DE\u30E9\u30B5\u30C0\uFF0B100%\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC\u3092\u7D39\u4ECB\u3057\u307E\u3059\u3002',
        readTime: 7,
      },
      {
        slug: 'matcha-mochi-donut-waikiki',
        image: '/images/blog/matcha-mochi-donut-waikiki.jpeg',
        category: '\u30D5\u30FC\u30C9\u30AC\u30A4\u30C9',
        title: '\u30EF\u30A4\u30AD\u30AD\u306E\u62B9\u8336\u30E2\u30C1\u30C9\u30FC\u30CA\u30C4\uFF082026\uFF09\uFF1A\u3042\u306E\u7DD1\u306E\u30C9\u30FC\u30CA\u30C4\u306F\u3069\u3053\u3067\u8CB7\u3048\u308B\uFF1F',
        excerpt: '\u672C\u683C\u62B9\u8336\u30B0\u30EC\u30FC\u30BA\u306E\u3082\u3061\u3082\u3061\u7C73\u7C89\u30DD\u30F3\u30C7\u30EA\u30F3\u30B0\u3068100%\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC\u3092\u30EF\u30A4\u30AD\u30AD\u3067\u3002\u30D3\u30FC\u30C1\u304B\u3089\u5F92\u6B69\u7D045\u5206\u306EKona Coffee Donut?\u3067\u5473\u308F\u3048\u307E\u3059\u3002',
        readTime: 7,
      },
      {
        slug: 'kona-coffee-and-donut-waikiki',
        image: '/images/blog/kona-coffee-and-donut-waikiki.jpeg',
        category: '\u30B3\u30FC\u30D2\u30FC',
        title: '\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC\u00D7\u30E2\u30C1\u30C9\u30FC\u30CA\u30C4\uFF1A\u30EF\u30A4\u30AD\u30AD\u6700\u9AD8\u306E\u30DA\u30A2\u30EA\u30F3\u30B0\uFF082026\uFF09',
        excerpt: '\u672C\u7269\u306E100%\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC\u3068\u4F5C\u308A\u305F\u3066\u306E\u7C73\u7C89\u30E2\u30C1\u30C9\u30FC\u30CA\u30C4\u304C\u4E00\u3064\u306E\u5E97\u3067\u3002\u30EF\u30A4\u30AD\u30AD\u30D3\u30FC\u30C1\u304B\u3089\u5F92\u6B69\u7D045\u5206\u3001\u6700\u9AD8\u306E\u30B3\u30FC\u30D2\u30FC\uFF06\u30C9\u30FC\u30CA\u30C4\u306E\u7D44\u307F\u5408\u308F\u305B\u3092\u697D\u3057\u3082\u3046\u3002',
        readTime: 8,
      },
      {
        slug: 'best-kona-coffee-waikiki',
        image: '/images/blog/best-kona-coffee-waikiki.jpeg',
        category: '\u30B3\u30FC\u30D2\u30FC',
        title: '\u30EF\u30A4\u30AD\u30AD\u3067\u4E00\u756A\u306E\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC\uFF082026\uFF09\uFF5C\u672C\u7269\u306E100%\u30B3\u30CA\u304C\u98F2\u3081\u308B\u5834\u6240',
        excerpt: '\u30EF\u30A4\u30AD\u30AD\u30D3\u30FC\u30C1\u8FD1\u304F\u3067\u672C\u7269\u306E\u6DF9\u308C\u305F\u3066100%\u30B3\u30CA\u3092\u98F2\u3081\u308B\u5834\u6240\u3068\u3001\u8584\u307E\u3063\u305F\u300C\u30B3\u30CA\u30D6\u30EC\u30F3\u30C9\u300D\u3068\u306E\u898B\u5206\u3051\u65B9\u3092\u5730\u5143\u76EE\u7DDA\u3067\u3054\u7D39\u4ECB\u3057\u307E\u3059\u3002',
        readTime: 7,
      },
      {
        slug: 'buy-kona-coffee-waikiki',
        image: '/images/blog/buy-kona-coffee-waikiki.jpeg',
        category: '\u30B3\u30FC\u30D2\u30FC',
        title: '\u30EF\u30A4\u30AD\u30AD\u3067\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC\u3092\u8CB7\u3046\u306A\u3089\uFF1A\u30AB\u30C3\u30D7\u3067\u5473\u308F\u3046\u30FB\u8C46\u3067\u6301\u3061\u5E30\u308B\uFF082026\u5E74\u7248\uFF09',
        excerpt: '\u30EF\u30A4\u30AD\u30AD\u3067\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC\u3092\u8CB7\u30462\u3064\u306E\u65B9\u6CD5\u3068\u3001\u672C\u7269\u306E100%\u30B3\u30CA\u3092\u898B\u5206\u3051\u3066\u300C\u30B3\u30CA\u30D6\u30EC\u30F3\u30C9\u300D\u306E\u843D\u3068\u3057\u7A74\u3092\u907F\u3051\u308B\u30B3\u30C4\u3092\u89E3\u8AAC\u3057\u307E\u3059\u3002',
        readTime: 7,
      },
      {
        slug: 'is-kona-coffee-worth-it',
        image: '/images/blog/is-kona-coffee-worth-it.jpeg',
        category: '\u30B3\u30FC\u30D2\u30FC',
        title: '\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC\u306F\u4FA1\u5024\u3042\u308B\uFF1F100%\u30B3\u30CA vs \u30B3\u30CA\u30D6\u30EC\u30F3\u30C9',
        excerpt: '\u300C100%\u30B3\u30CA\u300D\u3068\u3001\u308F\u305A\u304B10%\u3057\u304B\u30B3\u30CA\u3092\u542B\u307E\u306A\u3044\u300C\u30B3\u30CA\u30D6\u30EC\u30F3\u30C9\u300D\u306E\u672C\u5F53\u306E\u9055\u3044\u3092\u6B63\u76F4\u306B\u89E3\u8AAC\u3002\u30EF\u30A4\u30AD\u30AD\u3067\u672C\u7269\u306E\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC\u304C\u5473\u308F\u3048\u308B\u5834\u6240\u3082\u3054\u6848\u5185\u3057\u307E\u3059\u3002',
        readTime: 8,
      },
      {
        slug: 'hawaiian-shave-ice',
        image: '/images/blog/hawaiian-shave-ice.jpeg',
        category: '\u30D5\u30FC\u30C9\u30AC\u30A4\u30C9',
        title: '\u30CF\u30EF\u30A4\u30A2\u30F3\u30B7\u30A7\u30A4\u30D6\u30A2\u30A4\u30B9\u3068\u306F\uFF1F\u6B74\u53F2\u30FB\u30C8\u30C3\u30D4\u30F3\u30B0\u3068\u30D3\u30F3\u30B9\u3078\u306E\u9032\u5316',
        excerpt: '\u30CF\u30EF\u30A4\u30A2\u30F3\u30B7\u30A7\u30A4\u30D6\u30A2\u30A4\u30B9\u306E\u6B74\u53F2\u3084\u30B9\u30CE\u30FC\u30AD\u30E3\u30C3\u30D7\u3001\u30EA\u30D2\u30E0\u30A4\u3092\u89E3\u8AAC\u3002\u30EF\u30A4\u30AD\u30AD\u3067\u5473\u308F\u3048\u308B\u30AF\u30EA\u30FC\u30DF\u30FC\u306A\u97D3\u56FD\u30D3\u30F3\u30B9\u3082\u3054\u7D39\u4ECB\u3057\u307E\u3059\u3002',
        readTime: 8,
      },
      {
        slug: 'what-is-a-malasada',
        image: '/images/blog/what-is-a-malasada.jpeg',
        category: '\u30D5\u30FC\u30C9\u30AC\u30A4\u30C9',
        title: '\u30DE\u30E9\u30B5\u30C0\u3068\u306F\uFF1F\u30CF\u30EF\u30A4\u540D\u7269\u30DD\u30EB\u30C8\u30AC\u30EB\u767A\u7965\u306E\u63DA\u3052\u30C9\u30FC\u30CA\u30C4',
        excerpt: '\u30CF\u30EF\u30A4\u540D\u7269\u30DE\u30E9\u30B5\u30C0\u3068\u306F\u4F55\u304B\u3092\u89E3\u8AAC\u3002\u30EF\u30A4\u30AD\u30AD\u3067\u63DA\u3052\u305F\u3066\u71B1\u3005\u306E\u30DE\u30E9\u30B5\u30C0\u3092\u5473\u308F\u3048\u308B\u5834\u6240\u3082\u3054\u7D39\u4ECB\u3057\u307E\u3059\u3002',
        readTime: 8,
      },
      {
        slug: 'what-is-a-mochi-donut',
        image: '/images/blog/what-is-a-mochi-donut.jpeg',
        category: '\u30D5\u30FC\u30C9\u30AC\u30A4\u30C9',
        title: '\u30E2\u30C1\u30C9\u30FC\u30CA\u30C4\u3068\u306F\uFF1F',
        excerpt: '\u7C73\u7C89\u306E\u3082\u3061\u3082\u3061\u30DD\u30F3\u30FB\u30C7\u30FB\u30EA\u30F3\u30B0\u3092\u5FB9\u5E95\u89E3\u8AAC\u3002\u30EF\u30A4\u30AD\u30AD\u306724\u7A2E\u985E\u306E\u4F5C\u308A\u305F\u3066\u30E2\u30C1\u30C9\u30FC\u30CA\u30C4\u3068\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC\u304C\u697D\u3057\u3081\u308B\u304A\u5E97\u3082\u3054\u7D39\u4ECB\u3002',
        readTime: 8,
      },
      {
        slug: 'what-is-kona-coffee',
        image: '/images/blog/what-is-kona-coffee.jpeg',
        category: '\u30B3\u30FC\u30D2\u30FC',
        title: '\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC\u3068\u306F\uFF1F\u5E0C\u5C11\u3067\u9AD8\u4FA1\u306A\u7406\u7531',
        excerpt: '\u672C\u7269\u306E\u30CF\u30EF\u30A4\u30A2\u30F3\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC\u304C\u9AD8\u3044\u7406\u7531\u3001100%\u30B3\u30CA\u3068\u30B3\u30CA\u30D6\u30EC\u30F3\u30C9\u306E\u9055\u3044\u3001\u305D\u3057\u3066\u30EF\u30A4\u30AD\u30AD\u3067\u4E00\u676F\u5473\u308F\u3048\u308B\u5834\u6240\u3092\u3054\u7D39\u4ECB\u3057\u307E\u3059\u3002',
        readTime: 8,
      },
      {
        slug: 'best-mochi-donuts-waikiki',
        image: '/images/blog/best-mochi-donuts-waikiki.jpeg',
        category: '\u30E2\u30C1\u30C9\u30FC\u30CA\u30C4',
        title: '\u30EF\u30A4\u30AD\u30AD\u3067\u4EBA\u6C17\u306E\u30E2\u30C1\u30C9\u30FC\u30CA\u30C4\uFF5C\u7C73\u7C89\u306E24\u30D5\u30EC\u30FC\u30D0\u30FC',
        excerpt: '\u5916\u306F\u30AB\u30EA\u30C3\u3001\u4E2D\u306F\u30E2\u30C1\u30E2\u30C1\u3002\u7C73\u7C89\u3067\u4F5C\u308B24\u7A2E\u985E\u306E\u30E2\u30C1\u30C9\u30FC\u30CA\u30C4\u306E\u9B45\u529B\u3001\u304A\u3059\u3059\u3081\u30D5\u30EC\u30FC\u30D0\u30FC\u3001\u6CE8\u6587\u65B9\u6CD5\u3092\u3054\u7D39\u4ECB\u3057\u307E\u3059\u3002',
        readTime: 5,
      },
      {
        slug: 'how-to-eat-bingsu',
        image: '/images/blog/best-bingsu-waikiki.jpeg',
        category: '\u97D3\u56FD\u30D5\u30FC\u30C9',
        title: '\u30D3\u30F3\u30B9\u306E\u6B63\u3057\u3044\u98DF\u3079\u65B9\uFF08\u97D3\u56FD\u5F0F\uFF09',
        excerpt: '\u4E0A\u304B\u3089\u3059\u304F\u308F\u305A\u6DF7\u305C\u308B\u300260\u79D2\u3067\u308F\u304B\u308B\u672C\u5834\u306E\u98DF\u3079\u65B9\u3068\u30EF\u30A4\u30AD\u30AD\u3067\u98DF\u3079\u3089\u308C\u308B\u5834\u6240\u3002',
        readTime: 4,
      },
      {
        slug: 'best-budget-eats-waikiki',
        image: '/images/blog/cheap-eats-waikiki.png',
        category: '\u7BC0\u7D04\u30AC\u30A4\u30C9',
        title: '\u30EF\u30A4\u30AD\u30AD\u3067$15\u4EE5\u4E0B\u306E\u304A\u3059\u3059\u3081\u5E97',
        excerpt: '\u30EA\u30BE\u30FC\u30C8\u4FA1\u683C\u3067\u3082\u3001$15\u4EE5\u4E0B\u3067\u7F8E\u5473\u3057\u304F\u98DF\u3079\u3089\u308C\u308B\u5834\u6240\u3092\u5730\u5143\u76EE\u7DDA\u3067\u3002',
        readTime: 6,
      },
      {
        slug: 'best-acai-bowls-waikiki',
        image: '/images/blog/best-desserts-waikiki.png',
        category: '\u30D5\u30FC\u30C9\u30AC\u30A4\u30C9',
        title: '\u30EF\u30A4\u30AD\u30AD\u3067\u7F8E\u5473\u3057\u3044\u30A2\u30B5\u30A4\u30FC\u30DC\u30A6\u30EB',
        excerpt: '\u65B0\u9BAE\u30D6\u30EC\u30F3\u30C9\u306E\u6FC3\u539A\u30A2\u30B5\u30A4\u30FC\u3068\u30C8\u30C3\u30D4\u30F3\u30B0\u3002\u672C\u7269\u306E\u898B\u5206\u3051\u65B9\u3068\u304A\u3059\u3059\u3081\u5E97\u3002',
        readTime: 5,
      },
      {
        slug: 'korean-corn-dog-waikiki-guide',
        image: '/images/blog/korean-food-waikiki.png',
        category: 'K\u30D5\u30FC\u30C9',
        title: '\u30EF\u30A4\u30AD\u30AD\u3067\u97D3\u56FD\u30B3\u30FC\u30F3\u30C9\u30C3\u30B0\uFF08\u30CF\u30C3\u30C8\u30B0\uFF09',
        excerpt: '\u30AB\u30EA\u30C3\u3068\u8863\u3001\u4F38\u3073\u308B\u30E2\u30C3\u30C4\u30A1\u30EC\u30E9\u3001\u7802\u7CD6\u304C\u3051\u3002TikTok\u8A71\u984C\u306EK-\u30D5\u30FC\u30C9\u306F\u30B3\u30B3\u3067\u3002',
        readTime: 5,
      },
      {
        slug: 'ube-mochi-donut-waikiki',
        image: '/images/blog/mochi-donut-flavors-waikiki.jpeg',
        category: '\u30D5\u30FC\u30C9\u30AC\u30A4\u30C9',
        title: '\u30A6\u30D9\u30E2\u30C1\u30C9\u30FC\u30CA\u30C4 \u2014 \u30CF\u30EF\u30A4\u3067\u6700\u3082\u6620\u3048\u308B\u30C9\u30FC\u30CA\u30C4',
        excerpt: '\u9BAE\u3084\u304B\u306A\u7D2B\u3001\u3082\u3061\u3082\u3061\u98DF\u611F\u3001\u72EC\u7279\u306E\u7518\u3055\u3002Instagram\u6620\u3048\u629C\u7FA4\u306E\u30C9\u30FC\u30CA\u30C4\u3002',
        readTime: 4,
      },
      {
        slug: 'best-bingsu-waikiki',
        image: '/images/blog/best-bingsu-waikiki.jpeg',
        category: '\u97D3\u56FD\u30D5\u30FC\u30C9',
        title: '2026 \u30EF\u30A4\u30AD\u30AD\u3067\u98DF\u3079\u3089\u308C\u308B\u7D76\u54C1\u30D3\u30F3\u30B9',
        excerpt: '\u30AB\u30E9\u30AB\u30A6\u30A2\u901A\u308A\u3067\u672C\u5834\u306E\u97D3\u56FD\u304B\u304D\u6C37\u30D3\u30F3\u30B9\u3002\u30DE\u30F3\u30B4\u30FC\u3001\u3044\u3061\u3054\u3001\u62B9\u8336\u306A\u3069\u3001\u30D3\u30FC\u30C1\u304B\u3089\u5F92\u6B69\u570F\u5185\u3067\u697D\u3057\u3081\u308B\u3002',
        readTime: 6,
      },
      {
        slug: 'mochi-donut-flavors-waikiki',
        image: '/images/blog/mochi-donut-flavors-waikiki.jpeg',
        category: '\u30D5\u30FC\u30C9\u30AC\u30A4\u30C9',
        title: '\u30EF\u30A4\u30AD\u30AD\u306E\u30E2\u30C1\u30C9\u30FC\u30CA\u30C4\u30D5\u30EC\u30FC\u30D0\u30FC\u30AC\u30A4\u30C9',
        excerpt: '\u30A6\u30D9\u3001\u62B9\u8336\u3001\u3044\u3061\u3054\u3001\u30BF\u30ED\u3001\u9ED2\u3054\u307E\u306A\u3069\u3001\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC\u30C9\u30FC\u30CA\u30C4\u306E\u516810\u7A2E\u4EE5\u4E0A\u306E\u30D5\u30EC\u30FC\u30D0\u30FC\u3092\u6BCE\u65E5\u624B\u4F5C\u308A\u3067\u3002',
        readTime: 5,
      },
      {
        slug: 'best-smoothies-waikiki',
        image: '/images/blog/best-smoothies-waikiki.jpeg',
        category: '\u30D5\u30FC\u30C9\u30AC\u30A4\u30C9',
        title: '\u30EF\u30A4\u30AD\u30AD\u3067\u7F8E\u5473\u3057\u3044\u30B9\u30E0\u30FC\u30B8\u30FC10\u9078',
        excerpt: '\u30D4\u30CB\u30E3\u30B3\u30E9\u30FC\u30C0\u3001\u30DE\u30F3\u30B4\u30FC\u3001\u30A6\u30D9\u3001\u30D6\u30E9\u30A6\u30F3\u30B7\u30E5\u30AC\u30FC\u30DC\u30D0\u306A\u3069\u3001Mochi Land\u306E\u516810\u7A2E\u985E$8.95\u5747\u4E00\u3002\u30D3\u30FC\u30C1\u304B\u3089\u5F92\u6B69\u570F\u5185\u3002',
        readTime: 5,
      },
      {
        slug: 'where-to-try-kona-coffee-waikiki',
        image: '/images/blog/where-to-try-kona-coffee-waikiki.jpeg',
        category: '\u30B3\u30FC\u30D2\u30FC',
        title: '\u30EF\u30A4\u30AD\u30AD\u3067\u672C\u7269\u306E\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC\u3092\u98F2\u3081\u308B\u5834\u6240',
        excerpt: '\u5927\u624B\u30C1\u30A7\u30FC\u30F3\u3092\u8D85\u3048\u3066\u3001\u672C\u7269\u306E100%\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC\u3092\u5473\u308F\u3046\u3002\u30D7\u30A2\u30AA\u30FC\u30D0\u30FC\u3001\u30A8\u30B9\u30D7\u30EC\u30C3\u30BD\u3001\u304A\u6301\u3061\u5E30\u308A\u8C46\u3082\u3002',
        readTime: 6,
      },
      {
        slug: 'malasada-vs-mochi-donut-waikiki',
        image: '/images/blog/malasada-vs-mochi-donut-waikiki.jpeg',
        category: '\u6BD4\u8F03',
        title: '\u30DE\u30E9\u30B5\u30C0 vs \u30E2\u30C1\u30C9\u30FC\u30CA\u30C4\uFF1A\u5FB9\u5E95\u6BD4\u8F03',
        excerpt: '\u30CF\u30EF\u30A4\u306E2\u5927\u30C9\u30FC\u30CA\u30C4\u3092\u5FB9\u5E95\u6BD4\u8F03\u3002\u30D5\u30EC\u30FC\u30D0\u30FC\u3001\u98DF\u611F\u3001\u3069\u3061\u3089\u3092\u5148\u306B\u8A66\u3059\u3079\u304D\u304B\u3002\u4E21\u65B9\u4E00\u5EA6\u306B\u5473\u308F\u3048\u308B\u5834\u6240\u3082\u3002',
        readTime: 5,
      },
      {
        slug: 'kona-affogato-waikiki',
        image: '/images/blog/kona-affogato-waikiki.jpeg',
        category: '\u30B3\u30FC\u30D2\u30FC',
        title: '\u30EF\u30A4\u30AD\u30AD\u3067\u697D\u3057\u3080\u30B3\u30CA\u30A2\u30D5\u30A9\u30AC\u30FC\u30C8',
        excerpt: '100%\u30B3\u30CA\u30A8\u30B9\u30D7\u30EC\u30C3\u30BD\u3092\u30D0\u30CB\u30E9\u30A2\u30A4\u30B9\u306B\u304B\u3051\u3066\u5373\u98DF\u3079\u308B\u3002\u30B7\u30F3\u30D7\u30EB\u306A\u306E\u306B\u6700\u9AD8\u306E\u30A4\u30BF\u30EA\u30A2\u30F3\u30C7\u30B6\u30FC\u30C8\u00D7\u30B3\u30FC\u30D2\u30FC\u4F53\u9A13\u3002',
        readTime: 4,
      },
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
        slug: 'honolulu-coffee-waikiki',
        image: '/images/blog/honolulu-coffee-waikiki.jpeg',
        category: '커피',
        title: '와이키키의 호놀룰루 커피: 같은 100% 코나 원두 마시는 곳 (2026)',
        excerpt: '호놀룰루 커피의 코나를 좋아하세요? 와이키키에서 바로 그 똑같은 100% 코나 원두를 Kona Coffee Donut? 에서 갓 내려, 모찌 도넛과 함께 마실 수 있는 곳을 소개합니다.',
        readTime: 7,
      },
      {
        slug: 'best-coffee-shops-waikiki',
        image: '/images/blog/best-coffee-shops-waikiki.jpeg',
        category: '커피',
        title: '와이키키 최고의 커피숍 (2026): 진짜 100% 코나 순위',
        excerpt: '와이키키 베스트 커피숍을 순위로 정리 — 스페셜티 100% 코나부터 아사이 맛집까지. 진짜 코나 커피와 갓 만든 모찌 도넛을 함께 즐길 곳.',
        readTime: 8,
      },
      {
        slug: 'kona-coffee-purveyors-vs-kona-coffee-donut',
        image: '/images/blog/kona-coffee-purveyors-vs-kona-coffee-donut.jpeg',
        category: '커피',
        title: 'Kona Coffee Purveyors vs Kona Coffee Donut?: 와이키키 최고의 100% 코나 (2026)',
        excerpt: '진짜 100% 코나를 내는 와이키키 두 곳을 공정 비교 — Purveyors의 고급 스페셜티 경험 vs 모찌 도넛까지 즐기고 밤 9시까지 여는 Kona Coffee Donut?.',
        readTime: 8,
      },
      {
        slug: 'island-vintage-vs-kona-coffee-donut',
        image: '/images/blog/island-vintage-vs-kona-coffee-donut.jpeg',
        category: '푸드 가이드',
        title: '아일랜드 빈티지 vs Kona Coffee Donut?: 아사이 & 코나 비교 (2026)',
        excerpt: '와이키키 인기 두 곳을 공정하게 비교 — 아일랜드 빈티지의 명물 아사이 볼 vs 100% 코나·아사이·모찌 도넛·빙수의 Kona Coffee Donut?. 당신에게 맞는 곳은?',
        readTime: 8,
      },
      {
        slug: 'matcha-waikiki',
        image: '/images/blog/matcha-waikiki.jpeg',
        category: '\uCEE4\uD53C',
        title: '\uC640\uC774\uD0A4\uD0A4 \uB9D0\uCC28(2026): \uB9D0\uCC28\uB780? \uC5ED\uC0AC\uC640 \uBAA8\uB4E0 \uD50C\uB808\uC774\uBC84 \uC644\uBCBD \uAC00\uC774\uB4DC',
        excerpt: '\uB9D0\uCC28\uB780 \uBB34\uC5C7\uC778\uC9C0\uBD80\uD130 \uC5ED\uC0AC, \uB9D0\uCC28 vs \uCEE4\uD53C vs \uD638\uC9C0\uCC28, \uC640\uC774\uD0A4\uD0A4\uC5D0\uC11C \uAC13 \uACA9\uBD88\uD558\uB294 \uB9D0\uCC28\uFF06\uD638\uC9C0\uCC28 \uB77C\uD14C 9\uAC00\uC9C0\uAE4C\uC9C0 \uB2F4\uC740 \uC644\uBCBD \uAC00\uC774\uB4DC. \uD574\uBCC0\uC5D0\uC11C \uB3C4\uBCF4 \uC57D 5\uBD84.',
        readTime: 8,
      },
      {
        slug: 'what-is-hojicha-waikiki',
        image: '/images/blog/what-is-hojicha-waikiki.jpeg',
        category: '\uCEE4\uD53C',
        title: '\uD638\uC9C0\uCC28\uB780? \uC640\uC774\uD0A4\uD0A4\uC758 \uBCF6\uC740 \uB179\uCC28 \uB77C\uB5BC \uC644\uBCBD \uAC00\uC774\uB4DC (2026)',
        excerpt: '\uD638\uC9C0\uCC28\uB294 \uB179\uCC28\uB97C \uBCF6\uC740 \uACE0\uC18C\uD558\uACE0 \uCE74\uD398\uC778 \uB0AE\uC740 \uC77C\uBCF8 \uCC28\uC785\uB2C8\uB2E4. \uB9D0\uCC28\uC640\uC758 \uCC28\uC774, \uADF8\uB9AC\uACE0 \uC640\uC774\uD0A4\uD0A4\uC5D0\uC11C \uD638\uC9C0\uCC28 \uB77C\uB5BC\uB97C \uB9C8\uC2E4 \uC218 \uC788\uB294 \uACF3\uC744 \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.',
        readTime: 7,
      },
      {
        slug: 'strawberry-matcha-latte-waikiki',
        image: '/images/blog/strawberry-matcha-latte-waikiki.jpeg',
        category: '\uCEE4\uD53C',
        title: '\uC640\uC774\uD0A4\uD0A4 \uB538\uAE30 \uB9D0\uCC28 \uB77C\uB5BC (2026) | \uBAA8\uB450\uAC00 \uCC3E\uB294 \uD551\uD06C \uC564 \uADF8\uB9B0 \uD55C \uC794',
        excerpt: '\uBC14\uC774\uB7F4 \uB41C \uD551\uD06C \uC564 \uADF8\uB9B0 \uB538\uAE30 \uB9D0\uCC28 \uB77C\uB5BC\uAC00 \uC640\uC774\uD0A4\uD0A4\uC5D0. \uC815\uCCB4\uC640 \uC5B4\uC6B8\uB9AC\uB294 \uC774\uC720, \uD574\uBCC0\uC5D0\uC11C \uB3C4\uBCF4 5\uBD84 \uAC70\uB9AC\uC5D0\uC11C \uC0AC\uB294 \uACF3($10.95)\uAE4C\uC9C0 \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.',
        readTime: 7,
      },
      {
        slug: 'best-malasadas-waikiki',
        image: '/images/blog/best-malasadas-waikiki.jpeg',
        category: '\uD478\uB4DC \uAC00\uC774\uB4DC',
        title: '\uC640\uC774\uD0A4\uD0A4 \uB9D0\uB77C\uC0AC\uB2E4 \uB9DB\uC9D1 2026\uFF5C\uAC13 \uD280\uAE34 \uD3EC\uB974\uD22C\uAC08\uC2DD \uD558\uC640\uC774 \uB3C4\uB11B',
        excerpt: '\uC640\uC774\uD0A4\uD0A4 \uB9D0\uB77C\uC0AC\uB2E4 \uB9DB\uC9D1\uACFC \uCD5C\uACE0\uC758 \uB9D0\uB77C\uC0AC\uB2E4 \uC870\uAC74\u00B7\uC778\uAE30 \uC885\uB958, \uADF8\uB9AC\uACE0 \uBE44\uCE58\uC5D0\uC11C \uC57D 5\uBD84 \uAC70\uB9AC\uC758 \uAC13 \uD280\uAE34 \uB9D0\uB77C\uC0AC\uB2E4\uC640 100% \uCF54\uB098 \uCEE4\uD53C\uB97C \uC18C\uAC1C\uD569\uB2C8\uB2E4.',
        readTime: 7,
      },
      {
        slug: 'matcha-mochi-donut-waikiki',
        image: '/images/blog/matcha-mochi-donut-waikiki.jpeg',
        category: '\uD478\uB4DC \uAC00\uC774\uB4DC',
        title: '\uC640\uC774\uD0A4\uD0A4 \uB9D0\uCC28 \uBAA8\uCC0C \uB3C4\uB11B (2026): \uADF8 \uCD08\uB85D \uB3C4\uB11B, \uC5B4\uB514\uC11C \uBA39\uC9C0?',
        excerpt: '\uC9C4\uC9DC \uB9D0\uCC28 \uAE00\uB808\uC774\uC988\uB97C \uC785\uD78C \uCAC0\uB4DD\uD55C \uC300\uAC00\uB8E8 \uD3F0\uB370\uB9C1\uACFC 100% \uCF54\uB098 \uCEE4\uD53C\uB97C \uC640\uC774\uD0A4\uD0A4\uC5D0\uC11C. \uD574\uBCC0\uC5D0\uC11C \uB3C4\uBCF4 \uC57D 5\uBD84 \uAC70\uB9AC\uC758 Kona Coffee Donut?\uC5D0\uC11C \uC990\uAE30\uC138\uC694.',
        readTime: 7,
      },
      {
        slug: 'kona-coffee-and-donut-waikiki',
        image: '/images/blog/kona-coffee-and-donut-waikiki.jpeg',
        category: '\uCEE4\uD53C',
        title: '\uCF54\uB098 \uCEE4\uD53C & \uBAA8\uCC0C \uB3C4\uB11B: \uC640\uC774\uD0A4\uD0A4 \uCD5C\uACE0\uC758 \uD398\uC5B4\uB9C1 (2026)',
        excerpt: '\uC9C4\uC9DC 100% \uCF54\uB098 \uCEE4\uD53C\uC640 \uAC13 \uAD6C\uC6B4 \uC300\uAC00\uB8E8 \uBAA8\uCC0C \uB3C4\uB11B\uC744 \uD55C\uACF3\uC5D0\uC11C \u2014 \uC640\uC774\uD0A4\uD0A4 \uBE44\uCE58\uC5D0\uC11C \uB3C4\uBCF4 \uC57D 5\uBD84, \uC644\uBCBD\uD55C \uCEE4\uD53C \uC564 \uB3C4\uB11B \uC870\uD569\uC744 \uC990\uACA8\uBCF4\uC138\uC694.',
        readTime: 8,
      },
      {
        slug: 'best-kona-coffee-waikiki',
        image: '/images/blog/best-kona-coffee-waikiki.jpeg',
        category: '\uCEE4\uD53C',
        title: '\uC640\uC774\uD0A4\uD0A4 \uCD5C\uACE0\uC758 \uCF54\uB098 \uCEE4\uD53C (2026)\uFF5C\uC9C4\uC9DC 100% \uCF54\uB098 \uB9C8\uC2DC\uB294 \uACF3',
        excerpt: '\uC640\uC774\uD0A4\uD0A4 \uD574\uBCC0 \uADFC\uCC98\uC5D0\uC11C \uAC13 \uB0B4\uB9B0 \uC9C4\uC9DC 100% \uCF54\uB098\uB97C \uB9C8\uC2E4 \uC218 \uC788\uB294 \uACF3\uACFC, \uBB3D\uC5B4\uC9C4 "\uCF54\uB098 \uBE14\uB80C\uB4DC"\uB97C \uAD6C\uBCC4\uD558\uB294 \uBC95\uC744 \uD604\uC9C0 \uC2DC\uC120\uC73C\uB85C \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.',
        readTime: 7,
      },
      {
        slug: 'buy-kona-coffee-waikiki',
        image: '/images/blog/buy-kona-coffee-waikiki.jpeg',
        category: '\uCEE4\uD53C',
        title: '\uC640\uC774\uD0A4\uD0A4 \uCF54\uB098\uCEE4\uD53C \uAD6C\uC785 \uAC00\uC774\uB4DC: \uD55C \uC794\uC73C\uB85C \uC990\uAE30\uAC70\uB098 \uC6D0\uB450\uB85C \uAC00\uC838\uAC00\uAE30 (2026)',
        excerpt: '\uC640\uC774\uD0A4\uD0A4\uC5D0\uC11C \uCF54\uB098\uCEE4\uD53C\uB97C \uC0AC\uB294 \uB450 \uAC00\uC9C0 \uBC29\uBC95\uACFC, \uC9C4\uC9DC 100% \uCF54\uB098\uB97C \uACE8\uB77C "\uCF54\uB098 \uBE14\uB80C\uB4DC" \uD568\uC815\uC744 \uD53C\uD558\uB294 \uBC95\uC744 \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.',
        readTime: 7,
      },
      {
        slug: 'is-kona-coffee-worth-it',
        image: '/images/blog/is-kona-coffee-worth-it.jpeg',
        category: '\uCEE4\uD53C',
        title: '\uCF54\uB098 \uCEE4\uD53C, \uBE44\uC2FC \uAC12\uC744 \uD560\uAE4C? 100% \uCF54\uB098 vs \uCF54\uB098 \uBE14\uB80C\uB4DC',
        excerpt: '100% \uCF54\uB098\uC640, \uCF54\uB098\uAC00 10%\uBC16\uC5D0 \uC548 \uB4E4\uC5B4\uAC04 "\uCF54\uB098 \uBE14\uB80C\uB4DC"\uC758 \uC9C4\uC9DC \uCC28\uC774\uB97C \uC815\uC9C1\uD558\uAC8C \uC54C\uB824\uB4DC\uB9AC\uACE0, \uC640\uC774\uD0A4\uD0A4\uC5D0\uC11C \uC9C4\uC9DC \uCF54\uB098 \uCEE4\uD53C\uB97C \uB9DB\uBCFC \uC218 \uC788\uB294 \uACF3\uAE4C\uC9C0 \uC548\uB0B4\uD569\uB2C8\uB2E4.',
        readTime: 8,
      },
      {
        slug: 'hawaiian-shave-ice',
        image: '/images/blog/hawaiian-shave-ice.jpeg',
        category: '\uD478\uB4DC \uAC00\uC774\uB4DC',
        title: '\uD558\uC640\uC774\uC548 \uC170\uC774\uBE0C \uC544\uC774\uC2A4\uB780? \uC5ED\uC0AC\u00B7\uD1A0\uD551\uACFC \uBE59\uC218\uB85C\uC758 \uC9C4\uD654',
        excerpt: '\uD558\uC640\uC774\uC548 \uC170\uC774\uBE0C \uC544\uC774\uC2A4\uC758 \uC5ED\uC0AC\uC640 \uC2A4\uB178\uC6B0 \uCEA1, \uB9AC\uD79D\uBB34\uC774\uB97C \uC54C\uC544\uBCF4\uACE0 \uC640\uC774\uD0A4\uD0A4\uC5D0\uC11C \uC990\uAE30\uB294 \uD06C\uB9AC\uBBF8\uD55C \uD55C\uAD6D \uBE59\uC218\uAE4C\uC9C0 \uB9CC\uB098\uBCF4\uC138\uC694.',
        readTime: 8,
      },
      {
        slug: 'what-is-a-malasada',
        image: '/images/blog/what-is-a-malasada.jpeg',
        category: '\uD478\uB4DC \uAC00\uC774\uB4DC',
        title: '\uB9D0\uB77C\uC0AC\uB2E4\uB780? \uD558\uC640\uC774 \uBA85\uBB3C \uD3EC\uB974\uD22C\uAC08\uC2DD \uB3C4\uB11B',
        excerpt: '\uD558\uC640\uC774 \uBA85\uBB3C \uB9D0\uB77C\uC0AC\uB2E4\uAC00 \uBB34\uC5C7\uC778\uC9C0 \uC54C\uC544\uBCF4\uACE0, \uC640\uC774\uD0A4\uD0A4\uC5D0\uC11C \uAC13 \uD280\uAE34 \uB530\uB048\uD55C \uB9D0\uB77C\uC0AC\uB2E4\uB97C \uB9DB\uBCFC \uC218 \uC788\uB294 \uACF3\uAE4C\uC9C0 \uD655\uC778\uD558\uC138\uC694.',
        readTime: 8,
      },
      {
        slug: 'what-is-a-mochi-donut',
        image: '/images/blog/what-is-a-mochi-donut.jpeg',
        category: '\uD478\uB4DC \uAC00\uC774\uB4DC',
        title: '\uBAA8\uCC0C \uB3C4\uB11B\uC774\uB780?',
        excerpt: '\uC300\uAC00\uB8E8\uB85C \uB9CC\uB4E0 \uCAC4\uAE43\uD55C \uD3F0\uB370\uB9C1 \uB3C4\uB11B\uC758 \uBAA8\uB4E0 \uAC83 \u2014 \uC640\uC774\uD0A4\uD0A4\uC5D0\uC11C \uAC13 \uB9CC\uB4E0 24\uAC00\uC9C0 \uB9DB\uACFC \uCF54\uB098 \uCEE4\uD53C\uB97C \uC990\uAE38 \uC218 \uC788\uB294 \uACF3\uAE4C\uC9C0.',
        readTime: 8,
      },
      {
        slug: 'what-is-kona-coffee',
        image: '/images/blog/what-is-kona-coffee.jpeg',
        category: '\uCEE4\uD53C',
        title: '\uCF54\uB098 \uCEE4\uD53C\uB780? \uD76C\uADC0\uD558\uACE0 \uBE44\uC2FC \uC774\uC720',
        excerpt: '\uC9C4\uC9DC \uD558\uC640\uC774\uC548 \uCF54\uB098 \uCEE4\uD53C\uAC00 \uBE44\uC2FC \uC774\uC720, 100% \uCF54\uB098\uC640 \uCF54\uB098 \uBE14\uB80C\uB4DC\uC758 \uCC28\uC774, \uADF8\uB9AC\uACE0 \uC640\uC774\uD0A4\uD0A4\uC5D0\uC11C \uAC13 \uB0B4\uB9B0 \uD55C \uC794\uC744 \uB9C8\uC2E4 \uC218 \uC788\uB294 \uACF3\uAE4C\uC9C0.',
        readTime: 8,
      },
      {
        slug: 'best-mochi-donuts-waikiki',
        image: '/images/blog/best-mochi-donuts-waikiki.jpeg',
        category: '\uBAA8\uCC0C\uB3C4\uB11B',
        title: '\uC640\uC774\uD0A4\uD0A4 \uBAA8\uCC0C\uB3C4\uB11B \uB9DB\uC9D1\uFF5C\uC300\uAC00\uB8E8 24\uAC00\uC9C0 \uB9DB',
        excerpt: '\uAC89\uBC14\uC18D\uCAC4, \uC300\uAC00\uB8E8\uB85C \uB9CC\uB4E0 24\uAC00\uC9C0 \uBAA8\uCC0C\uB3C4\uB11B. \uBB34\uC5C7\uC774 \uD2B9\uBCC4\uD55C\uC9C0, \uCD94\uCC9C \uB9DB, \uC8FC\uBB38 \uBC29\uBC95\uAE4C\uC9C0 \uD55C\uB208\uC5D0 \uC815\uB9AC\uD588\uC2B5\uB2C8\uB2E4.',
        readTime: 5,
      },
      {
        slug: 'how-to-eat-bingsu',
        image: '/images/blog/best-bingsu-waikiki.jpeg',
        category: '\uD55C\uAD6D \uC74C\uC2DD',
        title: '\uBE59\uC218 \uC81C\uB300\uB85C \uBA39\uB294 \uBC95',
        excerpt: '\uC704\uC5D0\uC11C \uB5A0 \uBA39\uC9C0 \uB9D0\uACE0 \uBE44\uBCBC \uBA39\uC73C\uC138\uC694. 60\uCD08 \uB9CC\uC5D0 \uBC30\uC6B0\uB294 \uC815\uD1B5 \uBE59\uC218 \uBA39\uB294 \uBC95.',
        readTime: 4,
      },
      {
        slug: 'best-budget-eats-waikiki',
        image: '/images/blog/cheap-eats-waikiki.png',
        category: '\uC808\uC57D \uAC00\uC774\uB4DC',
        title: '\uC640\uC774\uD0A4\uD0A4 \uAC00\uC131\uBE44 \uB9DB\uC9D1 ($15 \uC774\uD558)',
        excerpt: '\uB9AC\uC870\uD2B8 \uAC00\uACA9\uC758 \uC640\uC774\uD0A4\uD0A4\uC5D0\uC11C\uB3C4 $15 \uC774\uD558 \uB9DB\uC9D1\uC740 \uB9CE\uC2B5\uB2C8\uB2E4.',
        readTime: 6,
      },
      {
        slug: 'best-acai-bowls-waikiki',
        image: '/images/blog/best-desserts-waikiki.png',
        category: '\uD478\uB4DC \uAC00\uC774\uB4DC',
        title: '\uC640\uC774\uD0A4\uD0A4 \uBCA0\uC2A4\uD2B8 \uC544\uC0AC\uC774\uBCFC',
        excerpt: '\uC2E0\uC120 \uBE14\uB80C\uB529 \uC9C4\uD55C \uC544\uC0AC\uC774. \uC9C4\uC9DC\uC640 \uAC00\uC9DC \uAD6C\uBCC4\uBC95\uACFC \uCD94\uCC9C \uB9E4\uC7A5.',
        readTime: 5,
      },
      {
        slug: 'korean-corn-dog-waikiki-guide',
        image: '/images/blog/korean-food-waikiki.png',
        category: '\uD55C\uAD6D \uC74C\uC2DD',
        title: '\uC640\uC774\uD0A4\uD0A4 \uD55C\uAD6D \uD56B\uB3C4\uADF8',
        excerpt: '\uAC89\uBC14\uC18D\uCAC0, \uB298\uC5B4\uB098\uB294 \uBAA8\uC9DC\uB810\uB77C, \uC124\uD0D5 \uC194\uC194. TikTok \uD654\uC81C\uC758 K-\uD478\uB4DC.',
        readTime: 5,
      },
      {
        slug: 'ube-mochi-donut-waikiki',
        image: '/images/blog/mochi-donut-flavors-waikiki.jpeg',
        category: '\uD478\uB4DC \uAC00\uC774\uB4DC',
        title: '\uC6B0\uBCA0 \uBAA8\uCE58\uB3C4\uB11B \u2014 \uD558\uC640\uC774 \uCD5C\uACE0\uC758 \uBE44\uC8FC\uC5BC \uB3C4\uB11B',
        excerpt: '\uC120\uBA85\uD55C \uBCF4\uB77C\uC0C9, \uCAC0\uB4DD\uD55C \uC2DD\uAC10. \uC778\uC2A4\uD0C0 \uCD5C\uACE0\uC758 \uB3C4\uB11B.',
        readTime: 4,
      },
      {
        slug: 'best-bingsu-waikiki',
        image: '/images/blog/best-bingsu-waikiki.jpeg',
        category: '\uD55C\uAD6D \uC74C\uC2DD',
        title: '2026 \uC640\uC774\uD0A4\uD0A4 \uBE59\uC218 \uBCA0\uC2A4\uD2B8',
        excerpt: '\uCE7C\uB77C\uCE74\uC6B0\uC544 \uAC70\uB9AC\uC5D0\uC11C \uC815\uD1B5 \uD55C\uAD6D \uBE59\uC218\uB97C. \uB9DD\uACE0, \uB538\uAE30, \uB9D0\uCC28 \u2014 \uBE44\uCE58\uC5D0\uC11C \uB3C4\uBCF4 \uAC70\uB9AC.',
        readTime: 6,
      },
      {
        slug: 'mochi-donut-flavors-waikiki',
        image: '/images/blog/mochi-donut-flavors-waikiki.jpeg',
        category: '\uD478\uB4DC \uAC00\uC774\uB4DC',
        title: '\uC640\uC774\uD0A4\uD0A4 \uBAA8\uCE58\uB3C4\uB11B \uD50C\uB808\uC774\uBC84 \uAC00\uC774\uB4DC',
        excerpt: '\uC6B0\uBCA0, \uB9D0\uCC28, \uB538\uAE30, \uD0C0\uB85C, \uAC80\uC740\uAE68 \uB4F1 \uCF54\uB098\uCEE4\uD53C\uB3C4\uB11B\uC758 10\uC885+ \uBAA8\uCE58\uB3C4\uB11B \uBA54\uB274.',
        readTime: 5,
      },
      {
        slug: 'best-smoothies-waikiki',
        image: '/images/blog/best-smoothies-waikiki.jpeg',
        category: '\uD478\uB4DC \uAC00\uC774\uB4DC',
        title: '\uC640\uC774\uD0A4\uD0A4 \uBCA0\uC2A4\uD2B8 \uC2A4\uBB34\uB514 10\uC120',
        excerpt: 'Mochi Land\uC758 10\uAC00\uC9C0 \uD558\uC640\uC774\uC548 \uC2A4\uBB34\uB514 \u2014 \uBAA8\uB450 $8.95. \uC989\uC11D \uBE14\uB80C\uB529, \uBE44\uCE58 \uB3C4\uBCF4 \uAC70\uB9AC.',
        readTime: 5,
      },
      {
        slug: 'where-to-try-kona-coffee-waikiki',
        image: '/images/blog/where-to-try-kona-coffee-waikiki.jpeg',
        category: '\uCEE4\uD53C',
        title: '\uC640\uC774\uD0A4\uD0A4\uC5D0\uC11C \uC815\uD1B5 \uCF54\uB098\uCEE4\uD53C \uB9C8\uC2DC\uB294 \uACF3',
        excerpt: '\uB300\uD615 \uCCB4\uC778\uC744 \uB118\uC5B4 100% \uCF54\uB098\uCEE4\uD53C\uB97C. \uD478\uC5B4\uC624\uBC84, \uC5D0\uC2A4\uD504\uB808\uC18C, \uB77C\uD14C, \uC6D0\uB450 \uD310\uB9E4\uAE4C\uC9C0.',
        readTime: 6,
      },
      {
        slug: 'malasada-vs-mochi-donut-waikiki',
        image: '/images/blog/malasada-vs-mochi-donut-waikiki.jpeg',
        category: '\uBE44\uAD50',
        title: '\uB9D0\uB77C\uC0AC\uB2E4 vs \uBAA8\uCE58\uB3C4\uB11B: \uC5B4\uB5A4 \uAC83\uC744 \uBA3C\uC800?',
        excerpt: '\uD558\uC640\uC774 2\uB300 \uB3C4\uB11B \uD55C \uC790\uB9AC\uC5D0\uC11C \uBE44\uAD50. \uC2DD\uAC10, \uB9DB, \uCD94\uCC9C \uC870\uD569\uAE4C\uC9C0.',
        readTime: 5,
      },
      {
        slug: 'kona-affogato-waikiki',
        image: '/images/blog/kona-affogato-waikiki.jpeg',
        category: '\uCEE4\uD53C',
        title: '\uC640\uC774\uD0A4\uD0A4 \uCF54\uB098 \uC544\uD3EC\uAC00\uD1A0',
        excerpt: '100% \uCF54\uB098 \uC5D0\uC2A4\uD504\uB808\uC18C\uAC00 \uBC14\uB2D0\uB77C \uC544\uC774\uC2A4\uB97C \uB9CC\uB098\uB294 \uB2E8 4\uBD84\uC758 \uB9C8\uBC95.',
        readTime: 4,
      },
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
        slug: 'honolulu-coffee-waikiki',
        image: '/images/blog/honolulu-coffee-waikiki.jpeg',
        category: '咖啡',
        title: '威基基的檀香山咖啡：在哪喝到同样的100%科纳豆（2026）',
        excerpt: '喜爱檀香山咖啡的科纳？看看在威基基哪里能喝到正是同样的100%科纳豆——Kona Coffee Donut? 现冲现做，还能搭配麻糬甜甜圈。',
        readTime: 7,
      },
      {
        slug: 'best-coffee-shops-waikiki',
        image: '/images/blog/best-coffee-shops-waikiki.jpeg',
        category: '咖啡',
        title: '威基基最好的咖啡店（2026）：正宗100%科纳排名',
        excerpt: '威基基最佳咖啡店排名——从精品100%科纳到阿萨伊人气店，以及在哪里把正宗科纳咖啡与新鲜麻糬甜甜圈搭配享用。',
        readTime: 8,
      },
      {
        slug: 'kona-coffee-purveyors-vs-kona-coffee-donut',
        image: '/images/blog/kona-coffee-purveyors-vs-kona-coffee-donut.jpeg',
        category: '咖啡',
        title: 'Kona Coffee Purveyors vs Kona Coffee Donut?：威基基最佳100%科纳（2026）',
        excerpt: '公平对比供应正宗100%科纳的威基基两店——Purveyors高端精品体验 vs 提供麻糬甜甜圈、营业至晚9点的Kona Coffee Donut?。',
        readTime: 8,
      },
      {
        slug: 'island-vintage-vs-kona-coffee-donut',
        image: '/images/blog/island-vintage-vs-kona-coffee-donut.jpeg',
        category: '美食指南',
        title: 'Island Vintage vs Kona Coffee Donut?：阿萨伊与科纳对比（2026）',
        excerpt: '公平对比威基基两大人气店——Island Vintage招牌阿萨伊碗 vs 提供100%科纳、阿萨伊、麻糬甜甜圈和雪冰的Kona Coffee Donut?。哪家更适合你？',
        readTime: 8,
      },
      {
        slug: 'matcha-waikiki',
        image: '/images/blog/matcha-waikiki.jpeg',
        category: '\u5496\u5561',
        title: '\u5A01\u57FA\u57FA\u62B9\u8336\uFF082026\uFF09\uFF1A\u4EC0\u4E48\u662F\u62B9\u8336\u3001\u5386\u53F2\u4E0E\u6211\u4EEC\u4F9B\u5E94\u7684\u6BCF\u6B3E\u53E3\u5473',
        excerpt: '\u4ECE\u4EC0\u4E48\u662F\u62B9\u8336\u5230\u5386\u53F2\u3001\u62B9\u8336 vs \u5496\u5561 vs \u7119\u8336\uFF0C\u518D\u5230\u6211\u4EEC\u5728\u5A01\u57FA\u57FA\u73B0\u6253\u76849\u6B3E\u62B9\u8336\uFF06\u7119\u8336\u62FF\u94C1\u53E3\u5473\u7684\u5B8C\u5168\u6307\u5357\u3002\u8DDD\u6D77\u6EE9\u7EA65\u5206\u949F\u3002',
        readTime: 8,
      },
      {
        slug: 'what-is-hojicha-waikiki',
        image: '/images/blog/what-is-hojicha-waikiki.jpeg',
        category: '\u5496\u5561',
        title: '\u4EC0\u4E48\u662F\u7119\u8336 (Hojicha)\uFF1F\u5A01\u57FA\u57FA\u70D8\u7119\u7EFF\u8336\u62FF\u94C1\u5B8C\u5168\u6307\u5357\uFF082026\uFF09',
        excerpt: '\u7119\u8336\u662F\u7ECF\u8FC7\u70D8\u7119\u7684\u65E5\u672C\u7EFF\u8336\uFF0C\u9999\u8106\u4F3C\u575A\u679C\u3001\u5929\u7136\u4F4E\u5496\u5561\u56E0\u3002\u4E86\u89E3\u7119\u8336\u4E0E\u62B9\u8336\u7684\u533A\u522B\uFF0C\u4EE5\u53CA\u5728\u5A01\u57FA\u57FA\u54EA\u91CC\u80FD\u559D\u5230\u7119\u8336\u62FF\u94C1\u3002',
        readTime: 7,
      },
      {
        slug: 'strawberry-matcha-latte-waikiki',
        image: '/images/blog/strawberry-matcha-latte-waikiki.jpeg',
        category: '\u5496\u5561',
        title: '\u5A01\u57FA\u57FA\u8349\u8393\u62B9\u8336\u62FF\u94C1\uFF082026\uFF09\uFF5C\u4EBA\u4EBA\u90FD\u60F3\u8981\u7684\u7C89\u7EFF\u4E00\u676F',
        excerpt: '\u8D70\u7EA2\u7684\u7C89\u7EFF\u8349\u8393\u62B9\u8336\u62FF\u94C1\u6765\u5230\u5A01\u57FA\u57FA\u2014\u2014\u5B83\u662F\u4EC0\u4E48\u3001\u4E3A\u4F55\u597D\u559D\uFF0C\u4EE5\u53CA\u5728\u8DDD\u6D77\u6EE9\u51E0\u5206\u949F\u5904\u54EA\u91CC\u80FD\u4E70\u5230\uFF08$10.95\uFF09\u3002',
        readTime: 7,
      },
      {
        slug: 'best-malasadas-waikiki',
        image: '/images/blog/best-malasadas-waikiki.jpeg',
        category: '\u7F8E\u98DF\u6307\u5357',
        title: '\u5A01\u57FA\u57FA\u6700\u597D\u5403\u7684\u9A6C\u62C9\u8428\u8FBE2026\uFF5C\u73B0\u70B8\u8461\u8404\u7259\u590F\u5A01\u5937\u751C\u751C\u5708',
        excerpt: '\u5728\u5A01\u57FA\u57FA\u54EA\u91CC\u80FD\u5403\u5230\u6700\u597D\u5403\u7684\u9A6C\u62C9\u8428\u8FBE\uFF0C\u600E\u6837\u624D\u7B97\u597D\uFF0C\u503C\u5F97\u4E00\u8BD5\u7684\u53E3\u5473\uFF0C\u4EE5\u53CA\u8DDD\u6D77\u6EE9\u7EA65\u5206\u949F\u7684\u73B0\u70B8\u9A6C\u62C9\u8428\u8FBE\u642D\u914D100%\u79D1\u7EB3\u5496\u5561\u3002',
        readTime: 7,
      },
      {
        slug: 'matcha-mochi-donut-waikiki',
        image: '/images/blog/matcha-mochi-donut-waikiki.jpeg',
        category: '\u7F8E\u98DF\u6307\u5357',
        title: '\u5A01\u57FA\u57FA\u62B9\u8336\u9EBB\u7CEC\u751C\u751C\u5708\uFF082026\uFF09\uFF1A\u90A3\u9897\u7EFF\u8272\u7684\u53BB\u54EA\u4E70\uFF1F',
        excerpt: '\u5728\u5A01\u57FA\u57FA\u54C1\u5C1D\u88F9\u6709\u6B63\u5B97\u62B9\u8336\u7CD6\u971C\u7684Q\u5F39\u7C73\u7C89Pon-de-ring\uFF0C\u642D\u914D100%\u79D1\u7EB3\u5496\u5561\uFF0C\u8DDD\u6D77\u6EE9\u7EA65\u5206\u949F\u3002',
        readTime: 7,
      },
      {
        slug: 'kona-coffee-and-donut-waikiki',
        image: '/images/blog/kona-coffee-and-donut-waikiki.jpeg',
        category: '\u5496\u5561',
        title: '\u79D1\u7EB3\u5496\u5561 & \u9EBB\u7CEC\u751C\u751C\u5708\uFF1A\u5A01\u57FA\u57FA\u7684\u5B8C\u7F8E\u642D\u914D\uFF082026\uFF09',
        excerpt: '\u6B63\u5B97100%\u79D1\u7EB3\u5496\u5561\u4E0E\u73B0\u505A\u7C73\u7C89\u9EBB\u7CEC\u751C\u751C\u5708\u540C\u5728\u4E00\u5904\u2014\u2014\u8DDD\u5A01\u57FA\u57FA\u6D77\u6EE9\u7EA65\u5206\u949F\uFF0C\u6253\u9020\u5B8C\u7F8E\u7684\u5496\u5561\u914D\u751C\u751C\u5708\u7EC4\u5408\u3002',
        readTime: 8,
      },
      {
        slug: 'best-kona-coffee-waikiki',
        image: '/images/blog/best-kona-coffee-waikiki.jpeg',
        category: '\u5496\u5561',
        title: '\u5A01\u57FA\u57FA\u6700\u597D\u7684\u79D1\u7EB3\u5496\u5561\uFF082026\uFF09\uFF1A\u54EA\u91CC\u80FD\u559D\u5230\u6B63\u5B97100%\u79D1\u7EB3',
        excerpt: '\u4E00\u4EFD\u672C\u5730\u6307\u5357\uFF0C\u5E26\u4F60\u627E\u5230\u5A01\u57FA\u57FA\u6D77\u6EE9\u9644\u8FD1\u73B0\u51B2\u6B63\u5B97100%\u79D1\u7EB3\u7684\u5730\u65B9\uFF0C\u5E76\u6559\u4F60\u5206\u8FA8\u88AB\u7A00\u91CA\u7684"\u79D1\u7EB3\u6DF7\u5408"\u3002',
        readTime: 7,
      },
      {
        slug: 'buy-kona-coffee-waikiki',
        image: '/images/blog/buy-kona-coffee-waikiki.jpeg',
        category: '\u5496\u5561',
        title: '\u5728\u5A01\u57FA\u57FA\u54EA\u91CC\u4E70\u79D1\u7EB3\u5496\u5561\uFF1A\u73B0\u559D\u4E00\u676F\u6216\u5E26\u8C46\u56DE\u5BB6\uFF082026\u6307\u5357\uFF09',
        excerpt: '\u5728\u5A01\u57FA\u57FA\u8D2D\u4E70\u79D1\u7EB3\u5496\u5561\u7684\u4E24\u79CD\u65B9\u5F0F\uFF0C\u4EE5\u53CA\u5982\u4F55\u8BA4\u51C6\u771F\u6B63\u7684100%\u79D1\u7EB3\u3001\u907F\u5F00"\u79D1\u7EB3\u6DF7\u5408"\u9677\u9631\u3002',
        readTime: 7,
      },
      {
        slug: 'is-kona-coffee-worth-it',
        image: '/images/blog/is-kona-coffee-worth-it.jpeg',
        category: '\u5496\u5561',
        title: '\u79D1\u7EB3\u5496\u5561\u503C\u5F97\u4E70\u5417\uFF1F100% \u79D1\u7EB3 vs \u79D1\u7EB3\u6DF7\u5408',
        excerpt: '\u8BDA\u5B9E\u62C6\u89E3 100% \u79D1\u7EB3\u4E0E"\u79D1\u7EB3\u6DF7\u5408"\uFF08\u79D1\u7EB3\u542B\u91CF\u4F4E\u81F310%\uFF09\u7684\u771F\u6B63\u533A\u522B\uFF0C\u5E76\u544A\u8BC9\u4F60\u5728\u5A01\u57FA\u57FA\u54EA\u91CC\u80FD\u559D\u5230\u6B63\u5B97\u79D1\u7EB3\u5496\u5561\u3002',
        readTime: 8,
      },
      {
        slug: 'hawaiian-shave-ice',
        image: '/images/blog/hawaiian-shave-ice.jpeg',
        category: '\u7F8E\u98DF\u6307\u5357',
        title: '\u4EC0\u4E48\u662F\u590F\u5A01\u5937\u5228\u51B0\uFF1F\u5386\u53F2\u3001\u914D\u6599\u4E0E\u97E9\u5F0F\u96EA\u51B0\u5347\u7EA7\u7248',
        excerpt: '\u4E86\u89E3\u590F\u5A01\u5937\u5228\u51B0\u7684\u5386\u53F2\u3001\u96EA\u76D6\u4E0E\u8BDD\u6885\uFF0C\u518D\u54C1\u5C1D\u6211\u4EEC\u5728\u5A01\u57FA\u57FA\u65B0\u9C9C\u4F9B\u5E94\u7684\u7EF5\u5BC6\u97E9\u5F0F\u96EA\u51B0\u3002',
        readTime: 8,
      },
      {
        slug: 'what-is-a-malasada',
        image: '/images/blog/what-is-a-malasada.jpeg',
        category: '\u7F8E\u98DF\u6307\u5357',
        title: '\u4EC0\u4E48\u662F\u9A6C\u62C9\u8428\u8FBE\uFF1F\u590F\u5A01\u5937\u8457\u540D\u8461\u5F0F\u751C\u751C\u5708',
        excerpt: '\u4E86\u89E3\u590F\u5A01\u5937\u540D\u7269\u9A6C\u62C9\u8428\u8FBE\u7A76\u7ADF\u662F\u4EC0\u4E48\uFF0C\u4EE5\u53CA\u5728\u5A01\u57FA\u57FA\u54EA\u91CC\u80FD\u5403\u5230\u65B0\u9C9C\u70ED\u817E\u817E\u7684\u9A6C\u62C9\u8428\u8FBE\u3002',
        readTime: 8,
      },
      {
        slug: 'what-is-a-mochi-donut',
        image: '/images/blog/what-is-a-mochi-donut.jpeg',
        category: '\u7F8E\u98DF\u6307\u5357',
        title: '\u4EC0\u4E48\u662F\u9EBB\u7CEC\u751C\u751C\u5708\uFF1F',
        excerpt: '\u89E3\u6790Q\u5F39\u7C73\u7C89\u6CE2\u63D0\u751C\u751C\u5708\uFF0C\u5E76\u544A\u8BC9\u4F60\u5728\u5A01\u57FA\u57FA\u54EA\u91CC\u80FD\u5403\u5230\u642D\u914D\u79D1\u7EB3\u5496\u5561\u768424\u79CD\u65B0\u9C9C\u53E3\u5473\u3002',
        readTime: 8,
      },
      {
        slug: 'what-is-kona-coffee',
        image: '/images/blog/what-is-kona-coffee.jpeg',
        category: '\u5496\u5561',
        title: '\u4EC0\u4E48\u662F\u79D1\u7EB3\u5496\u5561\uFF1F\u4E3A\u4F55\u5982\u6B64\u7A00\u6709\u6602\u8D35',
        excerpt: '\u6B63\u5B97\u590F\u5A01\u5937\u79D1\u7EB3\u5496\u5561\u4E3A\u4F55\u8FD9\u4E48\u8D35\u3001100%\u79D1\u7EB3\u4E0E\u79D1\u7EB3\u6DF7\u5408\u7684\u533A\u522B\uFF0C\u4EE5\u53CA\u5728\u5A01\u57FA\u57FA\u54EA\u91CC\u80FD\u559D\u5230\u73B0\u716E\u7684\u4E00\u676F\u3002',
        readTime: 8,
      },
      {
        slug: 'best-mochi-donuts-waikiki',
        image: '/images/blog/best-mochi-donuts-waikiki.jpeg',
        category: '\u9EBB\u7CEC\u751C\u751C\u5708',
        title: '\u5A01\u57FA\u57FA\u6700\u597D\u5403\u7684\u9EBB\u7CEC\u751C\u751C\u5708\uFF5C\u7C73\u7C8924\u79CD\u53E3\u5473',
        excerpt: '\u5916\u9165\u5185Q\u3001\u7528\u7C73\u7C89\u5236\u4F5C\u768424\u79CD\u9EBB\u7CEC\u751C\u751C\u5708\u2014\u2014\u7279\u522B\u4E4B\u5904\u3001\u5FC5\u8BD5\u53E3\u5473\u4E0E\u70B9\u5355\u65B9\u6CD5\u4E00\u6B21\u770B\u61C2\u3002',
        readTime: 5,
      },
      {
        slug: 'how-to-eat-bingsu',
        image: '/images/blog/best-bingsu-waikiki.jpeg',
        category: '\u97E9\u56FD\u7F8E\u98DF',
        title: '\u96EA\u51B0\u7684\u6B63\u786E\u5403\u6CD5\uFF08\u97E9\u56FD\u5F0F\uFF09',
        excerpt: '\u4E0D\u8981\u4ECE\u4E0A\u9762\u6316 \u2014 \u8981\u62CC\u5300\u300260\u79D2\u5B66\u4F1A\u6B63\u5B97\u96EA\u51B0\u5403\u6CD5\u3002',
        readTime: 4,
      },
      {
        slug: 'best-budget-eats-waikiki',
        image: '/images/blog/cheap-eats-waikiki.png',
        category: '\u7701\u94B1\u6307\u5357',
        title: '\u5A01\u57FA\u57FA\u5E73\u4EF7\u7F8E\u98DF ($15\u4EE5\u4E0B)',
        excerpt: '\u5A01\u57FA\u57FA\u4E5F\u6709$15\u4EE5\u4E0B\u7684\u7F8E\u5473\u9009\u62E9\uFF0C\u672C\u6307\u5357\u4ECB\u7ECD\u5F53\u5730\u4EBA\u5149\u987E\u7684\u5B9E\u60E0\u9910\u5385\u3002',
        readTime: 6,
      },
      {
        slug: 'best-acai-bowls-waikiki',
        image: '/images/blog/best-desserts-waikiki.png',
        category: '\u7F8E\u98DF\u6307\u5357',
        title: '\u5A01\u57FA\u57FA\u6700\u4F73\u5DF4\u897F\u8393\u7897',
        excerpt: '\u65B0\u9C9C\u8C03\u5236\u7684\u6D53\u90C1\u5DF4\u897F\u8393\u3002\u8FA8\u522B\u771F\u4F2A\u4E0E\u63A8\u8350\u5E97\u5BB6\u3002',
        readTime: 5,
      },
      {
        slug: 'korean-corn-dog-waikiki-guide',
        image: '/images/blog/korean-food-waikiki.png',
        category: '\u97E9\u56FD\u7F8E\u98DF',
        title: '\u5A01\u57FA\u57FA\u7684\u97E9\u56FD\u7389\u7C73\u70ED\u72D7',
        excerpt: '\u5916\u8106\u5185\u62C9\u4E1D\uFF0C\u7CD6\u7C89\u70B9\u7F00\u3002TikTok\u7206\u7EA2\u7684\u97E9\u5F0F\u8857\u5934\u5C0F\u5403\u3002',
        readTime: 5,
      },
      {
        slug: 'ube-mochi-donut-waikiki',
        image: '/images/blog/mochi-donut-flavors-waikiki.jpeg',
        category: '\u7F8E\u98DF\u6307\u5357',
        title: '\u7D2B\u85AF\u9EBB\u7CEC\u751C\u751C\u5708 \u2014 \u590F\u5A01\u5937\u6700\u4E0A\u955C\u7684\u751C\u751C\u5708',
        excerpt: '\u9C9C\u8273\u7D2B\u8272\uFF0CQ\u5F39\u53E3\u611F\u3002Instagram\u6700\u7231\u7684\u751C\u751C\u5708\u3002',
        readTime: 4,
      },
      {
        slug: 'best-bingsu-waikiki',
        image: '/images/blog/best-bingsu-waikiki.jpeg',
        category: '\u97E9\u56FD\u7F8E\u98DF',
        title: '2026 \u5A01\u57FA\u57FA\u6700\u4F73\u96EA\u51B0',
        excerpt: '\u5728\u5361\u62C9\u8003\u963F\u5927\u9053\u627E\u5230\u6B63\u5B97\u97E9\u5F0F\u96EA\u51B0\u3002\u8292\u679C\u3001\u8349\u8393\u3001\u62B9\u8336 \u2014 \u5A01\u57FA\u57FA\u6D77\u6EE9\u6B65\u884C\u53EF\u8FBE\u3002',
        readTime: 6,
      },
      {
        slug: 'mochi-donut-flavors-waikiki',
        image: '/images/blog/mochi-donut-flavors-waikiki.jpeg',
        category: '\u7F8E\u98DF\u6307\u5357',
        title: '\u5A01\u57FA\u57FA\u9EBB\u7CEC\u751C\u751C\u5708\u53E3\u5473\u6307\u5357',
        excerpt: 'Kona Coffee Donut \u5168\u90E810+\u79CD\u9EBB\u7CEC\u751C\u751C\u5708\u53E3\u5473 \u2014 \u7D2B\u85AF\u3001\u62B9\u8336\u3001\u8349\u8393\u3001\u828B\u5934\u3001\u9ED1\u829D\u9EBB\u7B49\u3002',
        readTime: 5,
      },
      {
        slug: 'best-smoothies-waikiki',
        image: '/images/blog/best-smoothies-waikiki.jpeg',
        category: '\u7F8E\u98DF\u6307\u5357',
        title: '\u5A01\u57FA\u57FA\u6700\u4F73\u5976\u661410\u9009',
        excerpt: 'Mochi Land \u5168\u90E810\u79CD\u590F\u5A01\u5937\u5976\u6614\u5747\u4EF7$8.95\u3002\u8292\u679C\u3001\u7D2B\u85AF\u3001\u9ED1\u7CD6\u73CD\u73E0\u7B49\u3002\u6D77\u6EE9\u6B65\u884C\u53EF\u8FBE\u3002',
        readTime: 5,
      },
      {
        slug: 'where-to-try-kona-coffee-waikiki',
        image: '/images/blog/where-to-try-kona-coffee-waikiki.jpeg',
        category: '\u5496\u5561',
        title: '\u5A01\u57FA\u57FA\u54EA\u91CC\u80FD\u559D\u5230\u771F\u6B63\u7684\u79D1\u7EB3\u5496\u5561',
        excerpt: '\u8D85\u8D8A\u5927\u578B\u8FDE\u9501\uFF0C\u627E\u5230100%\u771F\u6B63\u79D1\u7EB3\u5496\u5561\u3002\u624B\u51B2\u3001\u6D53\u7F29\u3001\u62FF\u94C1\uFF0C\u5496\u5561\u8C46\u9500\u552E\u3002',
        readTime: 6,
      },
      {
        slug: 'malasada-vs-mochi-donut-waikiki',
        image: '/images/blog/malasada-vs-mochi-donut-waikiki.jpeg',
        category: '\u5BF9\u6BD4',
        title: '\u739B\u62C9\u8428\u8FBE vs \u9EBB\u7CEC\u751C\u751C\u5708\uFF1A\u5148\u5C1D\u54EA\u4E2A\uFF1F',
        excerpt: '\u590F\u5A01\u5937\u4E24\u5927\u751C\u751C\u5708\u5BF9\u6BD4\u3002\u53E3\u611F\u3001\u5473\u9053\u3001\u4E00\u7AD9\u5F0F\u54C1\u5C1D\u4E24\u79CD\u3002',
        readTime: 5,
      },
      {
        slug: 'kona-affogato-waikiki',
        image: '/images/blog/kona-affogato-waikiki.jpeg',
        category: '\u5496\u5561',
        title: '\u5A01\u57FA\u57FA\u7684\u79D1\u7EB3\u963F\u8299\u4F73\u6735',
        excerpt: '100% \u79D1\u7EB3\u6D53\u7F29\u5496\u5561\u6DCB\u5728\u9999\u8349\u51B0\u6DC7\u6DCB\u4E0A\u7684\u7B80\u5355\u5B8C\u7F8E\u751C\u54C1\u30024\u5206\u949F\u610F\u5F0F\u00B7\u590F\u5A01\u5937\u9B54\u6CD5\u4F53\u9A8C\u3002',
        readTime: 4,
      },
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
        slug: 'honolulu-coffee-waikiki',
        image: '/images/blog/honolulu-coffee-waikiki.jpeg',
        category: 'Café',
        title: 'Honolulu Coffee en Waikiki: Bebe los Mismos Granos 100% Kona (2026)',
        excerpt: '¿Te encanta el Kona de Honolulu Coffee? Descubre dónde beber esos mismos granos 100% Kona en Waikiki — recién hecho en Kona Coffee Donut?, abierto hasta tarde y con mochi donuts.',
        readTime: 7,
      },
      {
        slug: 'best-coffee-shops-waikiki',
        image: '/images/blog/best-coffee-shops-waikiki.jpeg',
        category: 'Café',
        title: 'Las Mejores Cafeterías de Waikiki (2026): Café 100% Kona, Clasificadas',
        excerpt: 'Una guía clasificada de las mejores cafeterías de Waikiki — del 100% Kona de especialidad a los favoritos de açaí — y dónde tomar café Kona real con un mochi donut.',
        readTime: 8,
      },
      {
        slug: 'kona-coffee-purveyors-vs-kona-coffee-donut',
        image: '/images/blog/kona-coffee-purveyors-vs-kona-coffee-donut.jpeg',
        category: 'Café',
        title: 'Kona Coffee Purveyors vs Kona Coffee Donut?: El Mejor 100% Kona en Waikiki (2026)',
        excerpt: 'Dos lugares de Waikiki que sirven 100% Kona genuino, comparados con justicia — la experiencia premium de Purveyors vs el 100% Kona con mochi donuts de Kona Coffee Donut?.',
        readTime: 8,
      },
      {
        slug: 'island-vintage-vs-kona-coffee-donut',
        image: '/images/blog/island-vintage-vs-kona-coffee-donut.jpeg',
        category: 'Guía Gastronómica',
        title: 'Island Vintage Coffee vs Kona Coffee Donut?: Açaí y Kona Comparados (2026)',
        excerpt: 'Una comparación justa de dos favoritos de Waikiki — los famosos açaí bowls de Island Vintage vs el 100% Kona, açaí, mochi donuts y bingsu de Kona Coffee Donut?.',
        readTime: 8,
      },
      {
        slug: 'matcha-waikiki',
        image: '/images/blog/matcha-waikiki.jpeg',
        category: 'Café',
        title: 'Matcha en Waikiki (2026): Qué es, su historia y todos los sabores que servimos',
        excerpt: 'Una guía completa del matcha: qué es, su historia, matcha vs café vs hojicha, y los 9 sabores de latte de matcha y hojicha que servimos en Waikiki, a ~5 min de la playa.',
        readTime: 8,
      },
      {
        slug: 'what-is-hojicha-waikiki',
        image: '/images/blog/what-is-hojicha-waikiki.jpeg',
        category: 'Café',
        title: '¿Qué es el Hojicha? Lattes de Té Verde Tostado en Waikiki (2026)',
        excerpt: 'El hojicha es té verde japonés tostado, a nuez y naturalmente bajo en cafeína. Hojicha vs matcha y dónde tomar un latte de hojicha en Waikiki.',
        readTime: 7,
      },
      {
        slug: 'strawberry-matcha-latte-waikiki',
        image: '/images/blog/strawberry-matcha-latte-waikiki.jpeg',
        category: 'Café',
        title: 'Latte de Matcha con Fresa en Waikiki (2026): La Bebida Rosa y Verde',
        excerpt: 'El viral latte de matcha con fresa, rosa y verde, llegó a Waikiki — qué es, por qué funciona y dónde conseguirlo ($10.95) a minutos de la playa.',
        readTime: 7,
      },
      {
        slug: 'best-malasadas-waikiki',
        image: '/images/blog/best-malasadas-waikiki.jpeg',
        category: 'Guía Gastronómica',
        title: 'Las Mejores Malasadas en Waikiki (2026): Donuts Portugueses-Hawaianos Recién Hechos',
        excerpt: 'Dónde encontrar las mejores malasadas en Waikiki: qué hace buena a una, sabores para probar y malasadas recién fritas con café 100% Kona a unos 5 minutos de la playa.',
        readTime: 7,
      },
      {
        slug: 'matcha-mochi-donut-waikiki',
        image: '/images/blog/matcha-mochi-donut-waikiki.jpeg',
        category: 'Guía Gastronómica',
        title: 'Dónut Mochi de Matcha en Waikiki (2026): Dónde Conseguir el Verde',
        excerpt: 'Dónde encontrar un dónut mochi de matcha en Waikiki: un pon-de-ring de harina de arroz con glaseado de té verde real y café 100% Kona, a unos 5 minutos de la playa.',
        readTime: 7,
      },
      {
        slug: 'kona-coffee-and-donut-waikiki',
        image: '/images/blog/kona-coffee-and-donut-waikiki.jpeg',
        category: 'Café',
        title: 'Café Kona y Mochi Donut: la combinación perfecta de Waikiki (2026)',
        excerpt: 'Auténtico café 100% Kona y mochi donuts de harina de arroz recién hechos en un mismo lugar de Waikiki, a unos 5 minutos de la playa.',
        readTime: 8,
      },
      {
        slug: 'best-kona-coffee-waikiki',
        image: '/images/blog/best-kona-coffee-waikiki.jpeg',
        category: 'Café',
        title: 'El Mejor Café Kona en Waikiki (2026): Dónde Beber 100% Kona Auténtico',
        excerpt: 'Una guía local de dónde beber café 100% Kona auténtico y recién hecho cerca de la playa de Waikiki, y cómo distinguirlo de una "mezcla Kona" diluida.',
        readTime: 7,
      },
      {
        slug: 'buy-kona-coffee-waikiki',
        image: '/images/blog/buy-kona-coffee-waikiki.jpeg',
        category: 'Café',
        title: 'Dónde Comprar Café Kona en Waikiki: Tómalo Recién Hecho o Llévatelo a Casa (2026)',
        excerpt: 'Dos formas de comprar café Kona en Waikiki — tómate un 100% Kona auténtico por taza o llévate los granos a casa de regalo — y cómo evitar la trampa del "Kona Blend".',
        readTime: 7,
      },
      {
        slug: 'is-kona-coffee-worth-it',
        image: '/images/blog/is-kona-coffee-worth-it.jpeg',
        category: 'Café',
        title: '¿Vale la pena el café Kona? 100% Kona vs. Mezcla Kona',
        excerpt: 'La diferencia honesta entre el 100% Kona y una "Mezcla Kona" (con tan solo un 10% de Kona), y dónde probar el auténtico en Waikiki.',
        readTime: 8,
      },
      {
        slug: 'hawaiian-shave-ice',
        image: '/images/blog/hawaiian-shave-ice.jpeg',
        category: 'Guía Gastronómica',
        title: '¿Qué Es el Shave Ice Hawaiano? Historia, Toppings y la Versión Bingsu',
        excerpt: 'Descubre el shave ice hawaiano —su historia, el snow cap y el li hing mui— y prueba la cremosa versión coreana (bingsu) que servimos fresca en Waikiki.',
        readTime: 8,
      },
      {
        slug: 'what-is-a-malasada',
        image: '/images/blog/what-is-a-malasada.jpeg',
        category: 'Guía Gastronómica',
        title: '¿Qué es una Malasada? El Famoso Donut Portugués de Hawái',
        excerpt: 'Descubre qué es una malasada — el donut portugués rebozado en azúcar de Hawái — y dónde probarla recién hecha y caliente en Waikiki.',
        readTime: 8,
      },
      {
        slug: 'what-is-a-mochi-donut',
        image: '/images/blog/what-is-a-mochi-donut.jpeg',
        category: 'Guía Gastronómica',
        title: '¿Qué es un Mochi Donut?',
        excerpt: 'Descubre el dónut de harina de arroz pon-de-ring y dónde probar 24 sabores recién hechos con café Kona en Waikiki.',
        readTime: 8,
      },
      {
        slug: 'what-is-kona-coffee',
        image: '/images/blog/what-is-kona-coffee.jpeg',
        category: 'Café',
        title: '¿Qué es el café Kona? Por qué es tan raro y caro',
        excerpt: 'Por qué el auténtico café Kona de Hawái cuesta tanto, 100% Kona frente a mezcla Kona, y dónde tomar una taza recién hecha en Waikiki.',
        readTime: 8,
      },
      {
        slug: 'best-mochi-donuts-waikiki',
        image: '/images/blog/best-mochi-donuts-waikiki.jpeg',
        category: 'Mochi Donuts',
        title: 'Mejores Mochi Donuts en Waikiki: 24 Sabores de Harina de Arroz',
        excerpt: 'Mochi donuts de harina de arroz, crujientes por fuera y masticables por dentro, en 24 sabores en Kalākaua Ave — qué los hace especiales y cómo pedir.',
        readTime: 5,
      },
      {
        slug: 'how-to-eat-bingsu',
        image: '/images/blog/best-bingsu-waikiki.jpeg',
        category: 'Comida Coreana',
        title: 'Cómo Comer Bingsu (Al Estilo Coreano)',
        excerpt: 'No cucharees desde arriba — mezcla. Guía rápida al estilo coreano.',
        readTime: 4,
      },
      {
        slug: 'best-budget-eats-waikiki',
        image: '/images/blog/cheap-eats-waikiki.png',
        category: 'Guía de Presupuesto',
        title: 'Comer en Waikiki con Presupuesto (Bajo $15)',
        excerpt: 'Los mejores spots económicos en Waikiki — cafés, plate lunches y snacks bajo $15.',
        readTime: 6,
      },
      {
        slug: 'best-acai-bowls-waikiki',
        image: '/images/blog/best-desserts-waikiki.png',
        category: 'Guía Gastronómica',
        title: 'Mejores Acai Bowls en Waikiki',
        excerpt: 'Acai mezclado fresco, espeso y con toppings. Cómo encontrar los reales.',
        readTime: 5,
      },
      {
        slug: 'korean-corn-dog-waikiki-guide',
        image: '/images/blog/korean-food-waikiki.png',
        category: 'Comida Coreana',
        title: 'Korean Corn Dog en Waikiki',
        excerpt: 'Crujiente afuera, mozzarella stretch adentro. El snack viral de TikTok.',
        readTime: 5,
      },
      {
        slug: 'ube-mochi-donut-waikiki',
        image: '/images/blog/mochi-donut-flavors-waikiki.jpeg',
        category: 'Guía Gastronómica',
        title: 'Ube Mochi Donut — El Donut Más Fotogénico',
        excerpt: 'Morado vibrante, textura masticable, sabor único.',
        readTime: 4,
      },
      {
        slug: 'best-bingsu-waikiki',
        image: '/images/blog/best-bingsu-waikiki.jpeg',
        category: 'Comida Coreana',
        title: 'Mejor Bingsu en Waikiki 2026',
        excerpt: 'Bingsu coreano aut\u00E9ntico en Kal\u0101kaua Avenue \u2014 mango, fresa, matcha. A pasos de la playa de Waikiki.',
        readTime: 6,
      },
      {
        slug: 'mochi-donut-flavors-waikiki',
        image: '/images/blog/mochi-donut-flavors-waikiki.jpeg',
        category: 'Gu\u00EDa Gastron\u00F3mica',
        title: 'Sabores de Mochi Donut en Waikiki',
        excerpt: 'M\u00E1s de 10 sabores en Kona Coffee Donut \u2014 ube, matcha, fresa, taro, s\u00E9samo negro. Hechos a mano cada d\u00EDa.',
        readTime: 5,
      },
      {
        slug: 'best-smoothies-waikiki',
        image: '/images/blog/best-smoothies-waikiki.jpeg',
        category: 'Gu\u00EDa Gastron\u00F3mica',
        title: 'Mejores Smoothies en Waikiki: 10 Sabores Hawaianos',
        excerpt: '10 sabores Mochi Land todos a $8.95. Pi\u00F1a colada, mango, ube, t\u00E9 con leche y boba.',
        readTime: 5,
      },
      {
        slug: 'where-to-try-kona-coffee-waikiki',
        image: '/images/blog/where-to-try-kona-coffee-waikiki.jpeg',
        category: 'Caf\u00E9',
        title: 'D\u00F3nde Probar Caf\u00E9 Kona Real en Waikiki',
        excerpt: 'M\u00E1s all\u00E1 de las cadenas \u2014 caf\u00E9 Honolulu Coffee aut\u00E9ntico en Kal\u0101kaua. Pour-over, espresso, lattes y granos para llevar.',
        readTime: 6,
      },
      {
        slug: 'malasada-vs-mochi-donut-waikiki',
        image: '/images/blog/malasada-vs-mochi-donut-waikiki.jpeg',
        category: 'Comparaci\u00F3n',
        title: 'Malasada vs Mochi Donut: \u00BFCu\u00E1l Probar Primero?',
        excerpt: 'Los dos donuts m\u00E1s famosos de Haw\u00E1i comparados. Sabor, textura y d\u00F3nde probar ambos en una visita.',
        readTime: 5,
      },
      {
        slug: 'kona-affogato-waikiki',
        image: '/images/blog/kona-affogato-waikiki.jpeg',
        category: 'Caf\u00E9',
        title: 'Affogato Kona en Waikiki',
        excerpt: 'Espresso Honolulu Coffee vertido sobre helado de vainilla \u2014 el postre italiano simple que se vuelve m\u00E1gico en Haw\u00E1i.',
        readTime: 4,
      },
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
        excerpt: '\u00BFQu\u00E9 diferencia al caf\u00E9 Honolulu Coffee del resto? Una gu\u00EDa sobre su origen, sabor y por qu\u00E9 vale cada sorbo.',
        readTime: 7,
      },
    ],
  },
};

// Category color mapping — luxury dark theme
const categoryColors: Record<string, string> = {
  'Food Guide': 'bg-amber-500/20 text-amber-700 border border-amber-500/30',
  '\u30D5\u30FC\u30C9\u30AC\u30A4\u30C9': 'bg-amber-500/20 text-amber-700 border border-amber-500/30',
  '\uD478\uB4DC \uAC00\uC774\uB4DC': 'bg-amber-500/20 text-amber-700 border border-amber-500/30',
  '\u7F8E\u98DF\u6307\u5357': 'bg-amber-500/20 text-amber-700 border border-amber-500/30',
  'Gu\u00EDa Gastron\u00F3mica': 'bg-amber-500/20 text-amber-700 border border-amber-500/30',
  'Korean Food': 'bg-rose-500/20 text-rose-700 border border-rose-500/30',
  '\u97D3\u56FD\u30D5\u30FC\u30C9': 'bg-rose-500/20 text-rose-700 border border-rose-500/30',
  '\uD55C\uAD6D \uC74C\uC2DD': 'bg-rose-500/20 text-rose-700 border border-rose-500/30',
  '\u97E9\u56FD\u7F8E\u98DF': 'bg-rose-500/20 text-rose-700 border border-rose-500/30',
  'Comida Coreana': 'bg-rose-500/20 text-rose-700 border border-rose-500/30',
  'Coffee': 'bg-orange-500/20 text-orange-700 border border-orange-500/30',
  '\u30B3\u30FC\u30D2\u30FC': 'bg-orange-500/20 text-orange-700 border border-orange-500/30',
  '\uCEE4\uD53C': 'bg-orange-500/20 text-orange-700 border border-orange-500/30',
  '\u5496\u5561': 'bg-orange-500/20 text-orange-700 border border-orange-500/30',
  'Caf\u00E9': 'bg-orange-500/20 text-orange-700 border border-orange-500/30',
  'Budget Guide': 'bg-emerald-500/20 text-emerald-700 border border-emerald-500/30',
  '\u7BC0\u7D04\u30AC\u30A4\u30C9': 'bg-emerald-500/20 text-emerald-700 border border-emerald-500/30',
  '\uC808\uC57D \uAC00\uC774\uB4DC': 'bg-emerald-500/20 text-emerald-700 border border-emerald-500/30',
  '\u7701\u94B1\u6307\u5357': 'bg-emerald-500/20 text-emerald-700 border border-emerald-500/30',
  'Comparison': 'bg-purple-500/20 text-purple-700 border border-purple-500/30',
  '\u6BD4\u8F03': 'bg-purple-500/20 text-purple-700 border border-purple-500/30',
  '\uBE44\uAD50': 'bg-purple-500/20 text-purple-700 border border-purple-500/30',
  '\u5BF9\u6BD4': 'bg-purple-500/20 text-purple-700 border border-purple-500/30',
  'Comparaci\u00F3n': 'bg-purple-500/20 text-purple-700 border border-purple-500/30',
  'K-\u7F8E\u98DF': 'bg-rose-500/20 text-rose-700 border border-rose-500/30',
  'K-\uD478\uB4DC': 'bg-rose-500/20 text-rose-700 border border-rose-500/30',
  'K\u30D5\u30FC\u30C9': 'bg-rose-500/20 text-rose-700 border border-rose-500/30',
};

export default function BlogPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = content[locale as keyof typeof content] || content.en;

  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <SubpageNav locale={locale} />

      {/* Hero Section */}
      <section className="relative py-28 md:py-36 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/50 to-amber-100/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(180,130,60,0.06),transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-block mb-6 px-4 py-1.5 border border-amber-400/50 rounded-full text-amber-700 text-xs tracking-[0.2em] uppercase bg-white/60"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Kona Coffee Donut
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-5 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-gray-900/50 max-w-xl mx-auto leading-relaxed"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <span className="inline-block text-[10px] font-semibold px-3 py-1 rounded-full mb-4 tracking-wider uppercase bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                    {t.posts[0].category}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight drop-shadow-lg" style={{textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>{t.posts[0].title}</h2>
                  <p className="text-white/80 text-sm md:text-base max-w-2xl line-clamp-2 drop-shadow-md">{t.posts[0].excerpt}</p>
                  <div className="mt-4 text-amber-300 text-sm font-semibold drop-shadow-md">{t.posts[0].readTime} {t.readTime} &middot; {t.readMore}</div>
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
                <div className="bg-[#ffffff] border border-gray-200 rounded-xl overflow-hidden hover:border-amber-300 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(180,130,50,0.06)]">
                  {/* Image */}
                  {post.image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    </div>
                  )}

                  <div className="p-5">
                    {/* Category */}
                    <span className={`inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full mb-3 tracking-wider uppercase ${categoryColors[post.category] || 'bg-white text-gray-900/60 border border-gray-200'}`}>
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2 className="text-base font-bold text-gray-900/90 mb-2 group-hover:text-amber-700 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-gray-900/40 mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                      <span className="text-[11px] text-gray-900/25">{post.readTime} {t.readTime}</span>
                      <span className="text-xs font-semibold text-amber-600 group-hover:text-amber-700 transition-colors">{t.readMore}</span>
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
