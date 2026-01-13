'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Sparkles, MapPin, Clock, Heart, Star, Cookie } from 'lucide-react';
import JoinTeamCTA from '@/components/JoinTeamCTA';

const translations = {
  en: {
    hero: {
      badge: "PORTUGUESE TRADITION",
      title: "Malasada",
      subtitle: "Hawaii's beloved Portuguese-style fried dough, fresh and fluffy",
    },
    intro: {
      title: "What is a Malasada?",
      description: "A malasada is a traditional Portuguese fried dough pastry that became a beloved Hawaiian treat. Brought to the islands by Portuguese immigrants from Madeira and the Azores in the late 19th century, malasadas are now a quintessential part of Hawaiian food culture.",
      texture: "Our malasadas are fried to golden perfection—crispy on the outside, incredibly soft and airy on the inside. Rolled in sugar while still warm, they're best enjoyed fresh!",
    },
    features: {
      title: "What Makes Our Malasadas Special",
      items: [
        { icon: "star", title: "Made Fresh Daily", desc: "Fried to order for maximum freshness" },
        { icon: "heart", title: "Traditional Recipe", desc: "Authentic Portuguese technique passed down" },
        { icon: "cookie", title: "Perfect Texture", desc: "Crispy outside, fluffy inside" },
        { icon: "sparkles", title: "Rolled in Sugar", desc: "Generously coated while still warm" },
      ],
    },
    flavors: {
      title: "Our Flavors",
      items: [
        { name: "Original", desc: "Classic sugar-coated perfection" },
        { name: "Cinnamon Sugar", desc: "Warm spice with sweet sugar" },
        { name: "Haupia (Coconut)", desc: "Filled with creamy coconut pudding" },
        { name: "Chocolate", desc: "Rich chocolate cream filling" },
        { name: "Custard", desc: "Smooth vanilla custard inside" },
        { name: "Li Hing Mui", desc: "Sweet and salty plum powder coating" },
      ],
    },
    cta: {
      title: "Taste Hawaiian History",
      description: "Visit us in Waikiki and experience authentic malasadas paired with our famous Kona coffee and mochi donuts.",
      button: "Visit Us",
      location: "2142 Kalakaua Ave, Waikiki",
      hours: "Opening February 2026",
    },
  },
  ja: {
    hero: {
      badge: "ポルトガル伝統",
      title: "マラサダ",
      subtitle: "ハワイで愛されるポルトガル風揚げドーナツ、ふわふわで新鮮",
    },
    intro: {
      title: "マラサダとは？",
      description: "マラサダは伝統的なポルトガルの揚げドーナツで、ハワイで愛されるスイーツになりました。19世紀後半にマデイラ諸島やアゾレス諸島からのポルトガル移民によってハワイに持ち込まれ、今ではハワイの食文化に欠かせない存在です。",
      texture: "当店のマラサダは外はカリッと、中はふわふわに揚げています。温かいうちに砂糖をまぶし、出来立てをお楽しみください！",
    },
    features: {
      title: "当店のマラサダの特徴",
      items: [
        { icon: "star", title: "毎日手作り", desc: "注文を受けてから揚げたて" },
        { icon: "heart", title: "伝統レシピ", desc: "本格ポルトガル製法" },
        { icon: "cookie", title: "完璧な食感", desc: "外はカリッ、中はふわふわ" },
        { icon: "sparkles", title: "砂糖たっぷり", desc: "温かいうちにまぶします" },
      ],
    },
    flavors: {
      title: "フレーバー",
      items: [
        { name: "オリジナル", desc: "定番のシュガーコーティング" },
        { name: "シナモンシュガー", desc: "温かいスパイスと甘い砂糖" },
        { name: "ハウピア（ココナッツ）", desc: "クリーミーなココナッツプリン入り" },
        { name: "チョコレート", desc: "リッチなチョコクリーム入り" },
        { name: "カスタード", desc: "なめらかなバニラカスタード入り" },
        { name: "リヒンムイ", desc: "甘じょっぱい梅パウダー" },
      ],
    },
    cta: {
      title: "ハワイの歴史を味わう",
      description: "ワイキキの当店で、コナコーヒーやモチドーナツと一緒に本格マラサダをお楽しみください。",
      button: "お店を訪問",
      location: "2142 カラカウア通り、ワイキキ",
      hours: "2026年2月オープン",
    },
  },
  ko: {
    hero: {
      badge: "포르투갈 전통",
      title: "말라사다",
      subtitle: "하와이에서 사랑받는 포르투갈식 튀김 도넛, 신선하고 폭신폭신",
    },
    intro: {
      title: "말라사다란?",
      description: "말라사다는 전통적인 포르투갈 튀김 도넛으로, 하와이에서 사랑받는 디저트가 되었습니다. 19세기 후반 마데이라 제도와 아조레스 제도에서 온 포르투갈 이민자들이 하와이에 전파했으며, 이제는 하와이 음식 문화의 필수적인 부분입니다.",
      texture: "저희 말라사다는 겉은 바삭하고 속은 놀랍도록 부드럽고 폭신하게 튀깁니다. 따뜻할 때 설탕을 입혀 신선하게 즐기세요!",
    },
    features: {
      title: "우리 말라사다의 특별함",
      items: [
        { icon: "star", title: "매일 신선하게", desc: "주문 후 바로 튀겨요" },
        { icon: "heart", title: "전통 레시피", desc: "정통 포르투갈 기법 계승" },
        { icon: "cookie", title: "완벽한 식감", desc: "겉바속촉의 정석" },
        { icon: "sparkles", title: "설탕 코팅", desc: "따뜻할 때 듬뿍 입혀요" },
      ],
    },
    flavors: {
      title: "맛 종류",
      items: [
        { name: "오리지널", desc: "클래식 설탕 코팅" },
        { name: "시나몬 슈가", desc: "따뜻한 향신료와 달콤한 설탕" },
        { name: "하우피아 (코코넛)", desc: "크리미한 코코넛 푸딩 필링" },
        { name: "초콜릿", desc: "진한 초콜릿 크림 필링" },
        { name: "커스터드", desc: "부드러운 바닐라 커스터드" },
        { name: "리힝무이", desc: "달콤 짭짤한 매실 파우더" },
      ],
    },
    cta: {
      title: "하와이 역사를 맛보세요",
      description: "와이키키 매장에서 코나 커피와 모찌 도넛과 함께 정통 말라사다를 경험하세요.",
      button: "매장 방문",
      location: "2142 칼라카우아 애비뉴, 와이키키",
      hours: "2026년 2월 오픈",
    },
  },
  zh: {
    hero: {
      badge: "葡萄牙传统",
      title: "马拉萨达",
      subtitle: "夏威夷深受喜爱的葡萄牙式炸甜甜圈，新鲜蓬松",
    },
    intro: {
      title: "什么是马拉萨达？",
      description: "马拉萨达是传统的葡萄牙油炸面团糕点，如今已成为夏威夷深受喜爱的美食。19世纪末由来自马德拉群岛和亚速尔群岛的葡萄牙移民带到夏威夷，现在已成为夏威夷饮食文化的重要组成部分。",
      texture: "我们的马拉萨达炸至金黄完美——外酥内软。趁热裹上糖粉，新鲜出炉最美味！",
    },
    features: {
      title: "我们马拉萨达的特别之处",
      items: [
        { icon: "star", title: "每日新鲜制作", desc: "现点现炸保证新鲜" },
        { icon: "heart", title: "传统配方", desc: "正宗葡萄牙工艺传承" },
        { icon: "cookie", title: "完美口感", desc: "外酥内软" },
        { icon: "sparkles", title: "裹满糖粉", desc: "趁热慷慨裹糖" },
      ],
    },
    flavors: {
      title: "口味",
      items: [
        { name: "原味", desc: "经典糖粉裹衣" },
        { name: "肉桂糖", desc: "温暖香料配甜糖" },
        { name: "椰奶布丁", desc: "奶香椰子布丁馅" },
        { name: "巧克力", desc: "浓郁巧克力奶油馅" },
        { name: "卡仕达", desc: "顺滑香草卡仕达" },
        { name: "李子粉", desc: "甜咸梅子粉裹衣" },
      ],
    },
    cta: {
      title: "品味夏威夷历史",
      description: "来威基基店品尝正宗马拉萨达，搭配科纳咖啡和麻糬甜甜圈。",
      button: "访问我们",
      location: "2142 卡拉卡瓦大道，威基基",
      hours: "2026年2月开业",
    },
  },
};

const IconComponent = ({ name }: { name: string }) => {
  switch (name) {
    case 'star': return <Star className="w-6 h-6" />;
    case 'heart': return <Heart className="w-6 h-6" />;
    case 'cookie': return <Cookie className="w-6 h-6" />;
    case 'sparkles': return <Sparkles className="w-6 h-6" />;
    default: return <Sparkles className="w-6 h-6" />;
  }
};

export default function MalasadaPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-950 via-orange-900 to-amber-950">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/menu/malasada.webp')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/80 via-orange-900/60 to-amber-950" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-white text-sm font-bold mb-4">
                <Sparkles className="w-4 h-4" />
                {t.hero.badge}
              </span>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-righteous)' }}
              >
                {t.hero.title}
              </h1>

              <p className="text-lg sm:text-xl text-amber-100/90 leading-relaxed">
                {t.hero.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 rounded-3xl blur-2xl opacity-30" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/menu/malasada.webp"
                  alt="Malasada"
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
            <p className="text-amber-100/80 text-lg leading-relaxed mb-6">
              {t.intro.description}
            </p>
            <p className="text-amber-200/70 leading-relaxed">
              {t.intro.texture}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-orange-900/30">
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
                className="bg-gradient-to-br from-orange-800/50 to-amber-900/50 rounded-2xl p-6 text-center border border-orange-700/30"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl text-white mb-4">
                  <IconComponent name={feature.icon} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-amber-100/70 text-sm">{feature.desc}</p>
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
                className="bg-orange-800/30 rounded-xl p-5 border border-orange-700/30 hover:bg-orange-800/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Cookie className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                    <p className="text-amber-100/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-orange-900/50 to-amber-950">
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
            <p className="text-amber-100/80 text-lg mb-8 max-w-2xl mx-auto">
              {t.cta.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-amber-200/80">
                <MapPin className="w-5 h-5" />
                <span>{t.cta.location}</span>
              </div>
              <div className="flex items-center gap-2 text-amber-200/80">
                <Clock className="w-5 h-5" />
                <span>{t.cta.hours}</span>
              </div>
            </div>

            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/25 hover:scale-105"
            >
              {t.cta.button}
              <Sparkles className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Join Team CTA */}
      <JoinTeamCTA locale={locale} />

      {/* Schema.org Product Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Malasada",
            "description": "Traditional Portuguese-style fried dough pastry. Hawaii's beloved treat - crispy outside, fluffy inside, rolled in sugar.",
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
              "ratingValue": "4.8",
              "reviewCount": "150"
            }
          })
        }}
      />
    </main>
  );
}
