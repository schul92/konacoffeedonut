'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Snowflake, MapPin, Clock, Cherry, IceCream, Sparkles } from 'lucide-react';

const translations = {
  en: {
    hero: {
      badge: "KOREAN SHAVED ICE",
      title: "Bingsu",
      subtitle: "Fluffy Korean shaved ice dessert with premium toppings",
    },
    intro: {
      title: "What is Bingsu?",
      description: "Bingsu (빙수) is a beloved Korean shaved ice dessert that has taken the world by storm. Unlike regular shaved ice, bingsu features ultra-fine, fluffy ice shavings that melt on your tongue like fresh snow. Topped with sweet red beans, condensed milk, fruit, mochi, and other delicious toppings, it's the perfect treat for Hawaii's warm weather.",
      texture: "Our bingsu is made with milk-based ice that's shaved paper-thin, creating an incredibly light and creamy texture that's simply addictive!",
    },
    features: {
      title: "Why Our Bingsu is Special",
      items: [
        { icon: "snowflake", title: "Ultra-Fine Ice", desc: "Paper-thin shavings that melt instantly" },
        { icon: "cherry", title: "Premium Toppings", desc: "Fresh fruit, mochi, and quality ingredients" },
        { icon: "icecream", title: "Milk-Based", desc: "Creamy milk ice for rich flavor" },
        { icon: "sparkles", title: "Perfect for Hawaii", desc: "Refreshing treat for island weather" },
      ],
    },
    flavors: {
      title: "Our Bingsu Menu",
      items: [
        { name: "Injeolmi Bingsu", desc: "Roasted soybean powder with mochi & condensed milk" },
        { name: "Mango Bingsu", desc: "Fresh mango chunks with mango sauce" },
        { name: "Strawberry Bingsu", desc: "Sweet strawberries with cream" },
        { name: "Oreo Bingsu", desc: "Crushed Oreos with chocolate sauce" },
        { name: "Green Tea Bingsu", desc: "Matcha powder with red bean & mochi" },
        { name: "Classic Patbingsu", desc: "Traditional red bean with rice cake" },
      ],
    },
    cta: {
      title: "Cool Down in Paradise",
      description: "Beat the Hawaii heat with our refreshing bingsu! Pair it with our Kona coffee and mochi donuts for the ultimate treat.",
      button: "Visit Us",
      location: "2142 Kalakaua Ave, Waikiki",
      hours: "Opening January 2025",
    },
  },
  ja: {
    hero: {
      badge: "韓国かき氷",
      title: "ビンス",
      subtitle: "ふわふわ韓国式かき氷デザート、プレミアムトッピング付き",
    },
    intro: {
      title: "ビンスとは？",
      description: "ビンス（빙수）は世界中で人気の韓国式かき氷デザートです。普通のかき氷と違い、ビンスは新雪のように舌の上でとろける超微細なふわふわ氷が特徴。小豆、練乳、フルーツ、餅など美味しいトッピングをのせて、ハワイの温暖な気候にぴったりのデザートです。",
      texture: "当店のビンスはミルクベースの氷を極薄に削り、とても軽くてクリーミーな食感を実現しています！",
    },
    features: {
      title: "当店のビンスの特徴",
      items: [
        { icon: "snowflake", title: "超微細な氷", desc: "瞬時にとける極薄スライス" },
        { icon: "cherry", title: "プレミアムトッピング", desc: "新鮮なフルーツ、餅、厳選素材" },
        { icon: "icecream", title: "ミルクベース", desc: "濃厚な味わいのミルク氷" },
        { icon: "sparkles", title: "ハワイにぴったり", desc: "南国の暑さにぴったりの爽やかデザート" },
      ],
    },
    flavors: {
      title: "ビンスメニュー",
      items: [
        { name: "インジョルミビンス", desc: "きな粉と餅、練乳" },
        { name: "マンゴービンス", desc: "新鮮なマンゴーとマンゴーソース" },
        { name: "いちごビンス", desc: "甘いいちごとクリーム" },
        { name: "オレオビンス", desc: "オレオとチョコレートソース" },
        { name: "抹茶ビンス", desc: "抹茶パウダーと小豆、餅" },
        { name: "パッビンス", desc: "伝統的な小豆と餅" },
      ],
    },
    cta: {
      title: "パラダイスでクールダウン",
      description: "爽やかなビンスでハワイの暑さを吹き飛ばしましょう！コナコーヒーやモチドーナツと一緒にどうぞ。",
      button: "お店を訪問",
      location: "2142 カラカウア通り、ワイキキ",
      hours: "2025年1月オープン",
    },
  },
  ko: {
    hero: {
      badge: "한국식 빙수",
      title: "빙수",
      subtitle: "부드러운 한국식 빙수 디저트, 프리미엄 토핑",
    },
    intro: {
      title: "빙수란?",
      description: "빙수(氷水)는 전 세계적으로 사랑받는 한국의 빙수 디저트입니다. 일반 빙수와 달리 빙수는 입안에서 새하얀 눈처럼 녹는 초미세 빙수가 특징입니다. 단팥, 연유, 과일, 떡 등 맛있는 토핑을 올려 하와이의 따뜻한 날씨에 딱 맞는 디저트입니다.",
      texture: "저희 빙수는 우유 얼음을 아주 얇게 갈아서 믿을 수 없이 가볍고 크리미한 식감을 만들어냅니다!",
    },
    features: {
      title: "우리 빙수가 특별한 이유",
      items: [
        { icon: "snowflake", title: "초미세 빙수", desc: "입안에서 바로 녹는 얇은 빙수" },
        { icon: "cherry", title: "프리미엄 토핑", desc: "신선한 과일, 떡, 좋은 재료" },
        { icon: "icecream", title: "우유 베이스", desc: "진한 맛의 우유 얼음" },
        { icon: "sparkles", title: "하와이에 딱", desc: "열대 더위에 시원한 디저트" },
      ],
    },
    flavors: {
      title: "빙수 메뉴",
      items: [
        { name: "인절미 빙수", desc: "콩가루와 떡, 연유" },
        { name: "망고 빙수", desc: "신선한 망고와 망고 소스" },
        { name: "딸기 빙수", desc: "달콤한 딸기와 크림" },
        { name: "오레오 빙수", desc: "오레오와 초콜릿 소스" },
        { name: "녹차 빙수", desc: "말차 가루와 단팥, 떡" },
        { name: "팥빙수", desc: "전통 단팥과 떡" },
      ],
    },
    cta: {
      title: "파라다이스에서 시원하게",
      description: "시원한 빙수로 하와이 더위를 날려보세요! 코나 커피와 모찌 도넛과 함께 즐기세요.",
      button: "매장 방문",
      location: "2142 칼라카우아 애비뉴, 와이키키",
      hours: "2025년 1월 오픈",
    },
  },
  zh: {
    hero: {
      badge: "韩式刨冰",
      title: "冰淇淋",
      subtitle: "绵密的韩式刨冰甜点，配以优质配料",
    },
    intro: {
      title: "什么是冰淇淋？",
      description: "冰淇淋（빙수）是风靡全球的韩国刨冰甜点。与普通刨冰不同，冰淇淋采用超细绵密的冰沙，入口即化如新雪。配以红豆、炼乳、水果、麻糬等美味配料，是夏威夷温暖天气的完美甜品。",
      texture: "我们的冰淇淋使用牛奶冰，刨得薄如纸片，口感轻盈细腻，令人上瘾！",
    },
    features: {
      title: "我们冰淇淋的特别之处",
      items: [
        { icon: "snowflake", title: "超细冰沙", desc: "薄如纸片，入口即化" },
        { icon: "cherry", title: "优质配料", desc: "新鲜水果、麻糬、精选食材" },
        { icon: "icecream", title: "牛奶基底", desc: "奶香浓郁的牛奶冰" },
        { icon: "sparkles", title: "夏威夷之选", desc: "热带天气的清凉甜点" },
      ],
    },
    flavors: {
      title: "冰淇淋菜单",
      items: [
        { name: "豆粉冰淇淋", desc: "烤黄豆粉配麻糬和炼乳" },
        { name: "芒果冰淇淋", desc: "新鲜芒果块配芒果酱" },
        { name: "草莓冰淇淋", desc: "甜草莓配奶油" },
        { name: "奥利奥冰淇淋", desc: "碎奥利奥配巧克力酱" },
        { name: "抹茶冰淇淋", desc: "抹茶粉配红豆和麻糬" },
        { name: "传统红豆冰", desc: "传统红豆配年糕" },
      ],
    },
    cta: {
      title: "在天堂清凉一下",
      description: "用清凉的冰淇淋打败夏威夷的炎热！搭配科纳咖啡和麻糬甜甜圈享用。",
      button: "访问我们",
      location: "2142 卡拉卡瓦大道，威基基",
      hours: "2025年1月开业",
    },
  },
};

const IconComponent = ({ name }: { name: string }) => {
  switch (name) {
    case 'snowflake': return <Snowflake className="w-6 h-6" />;
    case 'cherry': return <Cherry className="w-6 h-6" />;
    case 'icecream': return <IceCream className="w-6 h-6" />;
    case 'sparkles': return <Sparkles className="w-6 h-6" />;
    default: return <Snowflake className="w-6 h-6" />;
  }
};

export default function BingsuPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-950 via-sky-900 to-indigo-950">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/menu/bingsu.webp')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/80 via-sky-900/60 to-indigo-950" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full text-white text-sm font-bold mb-4">
                <Snowflake className="w-4 h-4" />
                {t.hero.badge}
              </span>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-righteous)' }}
              >
                {t.hero.title}
              </h1>

              <p className="text-lg sm:text-xl text-sky-100/90 leading-relaxed">
                {t.hero.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-600 rounded-3xl blur-2xl opacity-30" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/menu/bingsu.webp"
                  alt="Bingsu"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-righteous)' }}
            >
              {t.intro.title}
            </h2>
            <p className="text-sky-100/80 text-lg leading-relaxed mb-6">
              {t.intro.description}
            </p>
            <p className="text-sky-200/70 leading-relaxed">
              {t.intro.texture}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-sky-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
            style={{ fontFamily: 'var(--font-righteous)' }}
          >
            {t.features.title}
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.features.items.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-sky-800/50 to-indigo-900/50 rounded-2xl p-6 text-center border border-sky-700/30"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-xl text-white mb-4">
                  <IconComponent name={feature.icon} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sky-100/70 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flavors Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
            style={{ fontFamily: 'var(--font-righteous)' }}
          >
            {t.flavors.title}
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {t.flavors.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-sky-800/30 rounded-xl p-5 border border-sky-700/30 hover:bg-sky-800/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Snowflake className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                    <p className="text-sky-100/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-900/50 to-indigo-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-righteous)' }}
            >
              {t.cta.title}
            </h2>
            <p className="text-sky-100/80 text-lg mb-8 max-w-2xl mx-auto">
              {t.cta.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sky-200/80">
                <MapPin className="w-5 h-5" />
                <span>{t.cta.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sky-200/80">
                <Clock className="w-5 h-5" />
                <span>{t.cta.hours}</span>
              </div>
            </div>

            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-sky-500/25 hover:scale-105"
            >
              {t.cta.button}
              <Snowflake className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Schema.org Product Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Bingsu",
            "description": "Korean shaved ice dessert with fluffy milk ice and premium toppings. Perfect refreshing treat for Hawaii weather.",
            "brand": {
              "@type": "Brand",
              "name": "Kona Coffee Donut"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "120"
            }
          })
        }}
      />
    </main>
  );
}
