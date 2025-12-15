'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowLeft, MapPin, Clock, Star, Sparkles } from 'lucide-react';

const translations = {
  en: {
    title: "Mochi Donuts",
    subtitle: "Crispy Outside, Chewy Inside",
    description: "Experience the perfect fusion of Japanese mochi and American donuts at Kona Coffee Donut in Waikiki. Our signature mochi donuts feature a unique chewy texture made with premium rice flour, creating an unforgettable treat that's crispy on the outside and delightfully chewy on the inside.",
    whatIs: {
      title: "What are Mochi Donuts?",
      content: "Mochi donuts (also known as Pon de Ring) originated in Japan and have become a beloved treat worldwide. Unlike traditional donuts, mochi donuts are made with glutinous rice flour (mochiko), giving them their signature chewy, stretchy texture. Each donut is shaped like a ring of connected balls, making them fun to pull apart and share.",
    },
    features: {
      title: "What Makes Ours Special",
      list: [
        { title: "Premium Ingredients", desc: "Made fresh daily with high-quality mochiko rice flour" },
        { title: "Perfect Texture", desc: "Crispy golden exterior with a soft, chewy center" },
        { title: "Unique Flavors", desc: "Rotating selection of glazes and toppings" },
        { title: "MOCHILAND Collaboration", desc: "Crafted in partnership with renowned mochi experts" },
      ],
    },
    flavors: {
      title: "Popular Flavors",
      list: ["Original Glaze", "Chocolate", "Strawberry", "Matcha Green Tea", "Ube Purple Yam", "Brown Sugar", "Seasonal Specials"],
    },
    cta: {
      title: "Try Our Mochi Donuts",
      location: "2142 Kalakaua Ave, Waikiki",
      hours: "Open Daily 7AM - 9PM",
      button: "Get Directions",
    },
    back: "Back to Menu",
    seoTitle: "Mochi Donuts in Waikiki | Best Japanese Donuts Hawaii",
  },
  ja: {
    title: "モチドーナツ",
    subtitle: "外はサクサク、中はもちもち",
    description: "ワイキキのKona Coffee Donutで、日本のもちとアメリカンドーナツの完璧な融合をお楽しみください。当店自慢のモチドーナツは、上質な米粉を使用した独特のもちもち食感が特徴。外はカリッと、中はもちもちの忘れられない美味しさです。",
    whatIs: {
      title: "モチドーナツとは？",
      content: "モチドーナツ（ポン・デ・リングとも呼ばれる）は日本で生まれ、世界中で愛されるスイーツになりました。従来のドーナツとは異なり、もち粉（白玉粉）を使用することで、独特のもちもちとした食感が生まれます。ボール状のリングが連なった形は、ちぎって分け合うのも楽しいです。",
    },
    features: {
      title: "当店のこだわり",
      list: [
        { title: "厳選素材", desc: "毎日新鮮な高品質もち粉を使用" },
        { title: "絶妙な食感", desc: "外はカリッと、中はもちもち" },
        { title: "豊富なフレーバー", desc: "季節限定を含む多彩なグレーズとトッピング" },
        { title: "MOCHILANDコラボ", desc: "もちの専門家との共同開発" },
      ],
    },
    flavors: {
      title: "人気フレーバー",
      list: ["オリジナルグレーズ", "チョコレート", "ストロベリー", "抹茶", "紅芋", "黒糖", "季節限定"],
    },
    cta: {
      title: "モチドーナツを食べに来てください",
      location: "2142 カラカウア通り、ワイキキ",
      hours: "毎日営業 午前7時〜午後9時",
      button: "道順を見る",
    },
    back: "メニューに戻る",
    seoTitle: "ワイキキのモチドーナツ | ハワイで人気の日本式ドーナツ",
  },
  ko: {
    title: "모찌 도넛",
    subtitle: "겉은 바삭, 속은 쫄깃",
    description: "와이키키 Kona Coffee Donut에서 일본 모찌와 미국 도넛의 완벽한 조화를 경험하세요. 프리미엄 쌀가루로 만든 시그니처 모찌 도넛은 겉은 바삭하고 속은 쫄깃한 독특한 식감으로 잊을 수 없는 맛을 선사합니다.",
    whatIs: {
      title: "모찌 도넛이란?",
      content: "모찌 도넛(폰데링이라고도 함)은 일본에서 시작되어 전 세계적으로 사랑받는 디저트가 되었습니다. 일반 도넛과 달리 찹쌀가루를 사용하여 특유의 쫄깃쫄깃한 식감을 만들어냅니다. 연결된 공 모양의 링 형태로, 떼어서 나눠 먹는 재미가 있습니다.",
    },
    features: {
      title: "우리만의 특별함",
      list: [
        { title: "프리미엄 재료", desc: "매일 신선한 고품질 찹쌀가루 사용" },
        { title: "완벽한 식감", desc: "바삭한 겉면과 쫄깃한 속" },
        { title: "다양한 맛", desc: "시즌 한정 포함 다양한 글레이즈와 토핑" },
        { title: "MOCHILAND 콜라보", desc: "모찌 전문가와의 협업" },
      ],
    },
    flavors: {
      title: "인기 맛",
      list: ["오리지널 글레이즈", "초콜릿", "딸기", "말차", "우베 (보라고구마)", "흑당", "시즌 한정"],
    },
    cta: {
      title: "모찌 도넛을 맛보세요",
      location: "2142 칼라카우아 애비뉴, 와이키키",
      hours: "매일 오전 7시 - 오후 9시",
      button: "길찾기",
    },
    back: "메뉴로 돌아가기",
    seoTitle: "와이키키 모찌 도넛 | 하와이 최고의 일본식 도넛",
  },
  zh: {
    title: "麻糬甜甜圈",
    subtitle: "外酥内软，口感独特",
    description: "在威基基的Kona Coffee Donut体验日本麻糬与美式甜甜圈的完美融合。我们的招牌麻糬甜甜圈采用优质糯米粉制作，外层酥脆，内里Q弹，带来难忘的美味体验。",
    whatIs: {
      title: "什么是麻糬甜甜圈？",
      content: "麻糬甜甜圈（又称波堤甜甜圈）起源于日本，如今已成为全球喜爱的甜点。与传统甜甜圈不同，麻糬甜甜圈使用糯米粉制作，赋予其独特的Q弹口感。环形连珠的造型，方便掰开分享。",
    },
    features: {
      title: "我们的特色",
      list: [
        { title: "优质原料", desc: "每日新鲜制作，使用高品质糯米粉" },
        { title: "完美口感", desc: "外层金黄酥脆，内里柔软Q弹" },
        { title: "多样口味", desc: "多种釉料和配料，包括季节限定" },
        { title: "MOCHILAND联名", desc: "与麻糬专家合作研发" },
      ],
    },
    flavors: {
      title: "人气口味",
      list: ["原味糖霜", "巧克力", "草莓", "抹茶", "紫薯", "黑糖", "季节限定"],
    },
    cta: {
      title: "来尝尝我们的麻糬甜甜圈",
      location: "2142 卡拉卡瓦大道，威基基",
      hours: "每日营业 早7点 - 晚9点",
      button: "获取路线",
    },
    back: "返回菜单",
    seoTitle: "威基基麻糬甜甜圈 | 夏威夷最好吃的日式甜甜圈",
  },
};

export default function MochiDonutsPage() {
  const locale = useLocale();
  const t = translations[locale as keyof typeof translations] || translations.en;

  const handleGetDirections = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=2142+Kalakaua+Ave,+Honolulu,+HI+96815', '_blank');
  };

  // Product structured data for SEO
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Mochi Donuts',
    description: t.description,
    image: 'https://www.konacoffeedonut.com/images/menu/donut.webp',
    brand: {
      '@type': 'Brand',
      name: 'Kona Coffee Donut',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      priceRange: '$3-$5',
      seller: {
        '@type': 'Organization',
        name: 'Kona Coffee Donut',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-orange-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Back Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href={`/${locale}/menu`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all text-pink-900 font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.back}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-200/50 to-transparent rounded-full -translate-y-48 translate-x-48" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/menu/donut.webp"
                  alt="Mochi Donuts at Kona Coffee Donut Waikiki"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
                <Star className="w-4 h-4 fill-current" />
                Best Seller
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full text-pink-700 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                Signature Item
              </div>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-pink-950 mb-3"
                style={{ fontFamily: 'var(--font-righteous)' }}
              >
                {t.title}
              </h1>

              <p className="text-xl text-pink-700 font-medium mb-6">{t.subtitle}</p>

              <p className="text-pink-800/80 leading-relaxed mb-8">{t.description}</p>

              <button
                onClick={handleGetDirections}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 rounded-2xl font-bold text-white transition-all shadow-lg hover:shadow-pink-500/30 hover:scale-105"
              >
                <MapPin className="w-5 h-5" />
                {t.cta.button}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is Mochi Donut */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pink-950 mb-6" style={{ fontFamily: 'var(--font-righteous)' }}>
              {t.whatIs.title}
            </h2>
            <p className="text-lg text-pink-800/80 leading-relaxed">
              {t.whatIs.content}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-100 to-rose-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-pink-950 text-center mb-12"
            style={{ fontFamily: 'var(--font-righteous)' }}
          >
            {t.features.title}
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.features.list.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-pink-900 mb-2">{feature.title}</h3>
                <p className="text-pink-700/80 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flavors */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-pink-950 mb-8"
            style={{ fontFamily: 'var(--font-righteous)' }}
          >
            {t.flavors.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {t.flavors.list.map((flavor) => (
              <span
                key={flavor}
                className="px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 rounded-full font-medium"
              >
                {flavor}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-righteous)' }}>
              {t.cta.title}
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-pink-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {t.cta.location}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {t.cta.hours}
              </div>
            </div>

            <button
              onClick={handleGetDirections}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-pink-600 hover:bg-pink-50 rounded-2xl font-bold text-lg transition-all shadow-xl hover:scale-105"
            >
              <MapPin className="w-6 h-6" />
              {t.cta.button}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-pink-950 text-center">
        <p className="text-pink-200/60 text-sm">
          © 2025 Kona Coffee Donut. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
