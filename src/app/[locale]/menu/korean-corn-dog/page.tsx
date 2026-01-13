'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Flame, MapPin, Clock, Star, Sparkles, ChefHat } from 'lucide-react';
import JoinTeamCTA from '@/components/JoinTeamCTA';

const translations = {
  en: {
    hero: {
      badge: "K-FOOD SENSATION",
      title: "Korean Corn Dog",
      subtitle: "Crispy, cheesy, stretchy goodness - the viral Korean street food",
    },
    intro: {
      title: "What is a Korean Corn Dog?",
      description: "Korean corn dogs (Hotdog) have taken the world by storm! Unlike American corn dogs, Korean corn dogs feature a sweeter, crispier batter and can be filled with cheese, sausage, or both. The batter often includes rice flour for extra crunch, and they're coated in various toppings like crispy potatoes, ramen noodles, or panko breadcrumbs.",
      appeal: "What makes them irresistible? The stretchy mozzarella cheese pull, the satisfying crunch, and endless topping possibilities. They're not just food—they're an experience!",
    },
    features: {
      title: "What Makes Our Corn Dogs Special",
      items: [
        { icon: "star", title: "Crispy Coating", desc: "Rice flour batter for perfect crunch" },
        { icon: "flame", title: "Stretchy Cheese", desc: "Gooey mozzarella cheese pull" },
        { icon: "chefhat", title: "Made Fresh", desc: "Fried to order, never pre-made" },
        { icon: "sparkles", title: "Fun Toppings", desc: "Potato, sugar, or crispy coatings" },
      ],
    },
    menu: {
      title: "Our Corn Dog Menu",
      items: [
        { name: "Classic Sausage", desc: "Premium hot dog in crispy sweet batter" },
        { name: "Mozzarella Cheese", desc: "All cheese for the ultimate stretch" },
        { name: "Half & Half", desc: "Half sausage, half mozzarella - best of both" },
        { name: "Potato Dog", desc: "Coated in crispy cubed potatoes" },
        { name: "Crispy Ramen", desc: "Coated in crunchy ramen noodles" },
        { name: "Sugar Dog", desc: "Rolled in sweet sugar after frying" },
      ],
    },
    cta: {
      title: "Experience the Cheese Pull",
      description: "Try Hawaii's best Korean corn dogs! Perfect with our Kona coffee for an unforgettable snack experience.",
      button: "Visit Us",
      location: "2142 Kalakaua Ave, Waikiki",
      hours: "Opening February 2026",
    },
  },
  ja: {
    hero: {
      badge: "韓国フード人気",
      title: "韓国式ホットドッグ",
      subtitle: "カリカリ、チーズたっぷり、伸び〜る！話題の韓国ストリートフード",
    },
    intro: {
      title: "韓国ホットドッグとは？",
      description: "韓国ホットドッグ（ハットグ）は世界中で大人気！アメリカンコーンドッグと違い、韓国ホットドッグは甘くてカリカリの衣が特徴で、チーズ、ソーセージ、または両方が入っています。衣には米粉が入っていて特別なカリカリ感があり、フライドポテト、ラーメン、パン粉など様々なトッピングでコーティングされます。",
      appeal: "たまらない魅力とは？伸び〜るモッツァレラチーズ、満足感あるカリカリ食感、無限のトッピングの可能性。ただの食べ物ではなく、体験です！",
    },
    features: {
      title: "当店のコーンドッグの特徴",
      items: [
        { icon: "star", title: "カリカリ衣", desc: "米粉入りで完璧なカリカリ感" },
        { icon: "flame", title: "伸びるチーズ", desc: "とろ〜りモッツァレラ" },
        { icon: "chefhat", title: "揚げたて", desc: "注文を受けてから揚げます" },
        { icon: "sparkles", title: "楽しいトッピング", desc: "ポテト、シュガー、クリスピーなど" },
      ],
    },
    menu: {
      title: "コーンドッグメニュー",
      items: [
        { name: "クラシック ソーセージ", desc: "カリカリ甘衣のプレミアムホットドッグ" },
        { name: "モッツァレラ チーズ", desc: "究極のチーズ伸び体験" },
        { name: "ハーフ＆ハーフ", desc: "半分ソーセージ、半分モッツァレラ" },
        { name: "ポテトドッグ", desc: "カリカリポテトコーティング" },
        { name: "クリスピー ラーメン", desc: "カリカリラーメンコーティング" },
        { name: "シュガードッグ", desc: "揚げた後に甘いシュガーコーティング" },
      ],
    },
    cta: {
      title: "チーズ伸び体験",
      description: "ハワイ最高の韓国ホットドッグを！コナコーヒーと一緒に忘れられないスナック体験を。",
      button: "お店を訪問",
      location: "2142 カラカウア通り、ワイキキ",
      hours: "2026年2月オープン",
    },
  },
  ko: {
    hero: {
      badge: "K-푸드 열풍",
      title: "핫도그",
      subtitle: "바삭하고 쭉쭉 늘어나는 치즈 - 바이럴 한국 길거리 음식",
    },
    intro: {
      title: "한국 핫도그란?",
      description: "한국 핫도그(하뚜)가 전 세계를 휩쓸고 있습니다! 미국식 콘도그와 달리 한국 핫도그는 더 달콤하고 바삭한 반죽이 특징이며 치즈, 소시지 또는 둘 다 들어갈 수 있습니다. 반죽에는 쌀가루가 들어가 특별한 바삭함을 주고, 감자, 라면, 빵가루 등 다양한 토핑으로 코팅됩니다.",
      appeal: "매력 포인트? 쭈욱 늘어나는 모짜렐라 치즈, 만족스러운 바삭함, 무한한 토핑 가능성. 음식이 아니라 경험입니다!",
    },
    features: {
      title: "우리 핫도그가 특별한 이유",
      items: [
        { icon: "star", title: "바삭한 코팅", desc: "쌀가루 반죽으로 완벽한 바삭함" },
        { icon: "flame", title: "늘어나는 치즈", desc: "쫀쫀한 모짜렐라 치즈" },
        { icon: "chefhat", title: "갓 튀긴", desc: "주문 후 바로 튀김" },
        { icon: "sparkles", title: "재미있는 토핑", desc: "감자, 설탕, 크리스피 등" },
      ],
    },
    menu: {
      title: "핫도그 메뉴",
      items: [
        { name: "클래식 소시지", desc: "바삭한 달콤 반죽의 프리미엄 핫도그" },
        { name: "모짜렐라 치즈", desc: "궁극의 치즈 늘림 체험" },
        { name: "하프 앤 하프", desc: "반은 소시지, 반은 모짜렐라" },
        { name: "감자 핫도그", desc: "바삭한 감자 큐브 코팅" },
        { name: "라면 핫도그", desc: "바삭한 라면 코팅" },
        { name: "슈가 핫도그", desc: "튀긴 후 달콤한 설탕 코팅" },
      ],
    },
    cta: {
      title: "치즈 늘림을 경험하세요",
      description: "하와이 최고의 한국 핫도그를 맛보세요! 코나 커피와 함께 잊을 수 없는 간식 경험을.",
      button: "매장 방문",
      location: "2142 칼라카우아 애비뉴, 와이키키",
      hours: "2026년 2월 오픈",
    },
  },
  zh: {
    hero: {
      badge: "韩食热潮",
      title: "韩式热狗",
      subtitle: "酥脆拉丝，美味无比 - 爆红韩国街头美食",
    },
    intro: {
      title: "什么是韩式热狗？",
      description: "韩式热狗风靡全球！与美式热狗不同，韩式热狗的面糊更甜更脆，可以填充奶酪、香肠或两者兼有。面糊中加入米粉增加酥脆感，外层裹有各种配料，如土豆块、拉面或面包糠。",
      appeal: "让人欲罢不能的原因？拉丝的马苏里拉奶酪、令人满足的酥脆口感、无限的配料可能。这不仅仅是食物，而是一种体验！",
    },
    features: {
      title: "我们热狗的特别之处",
      items: [
        { icon: "star", title: "酥脆外衣", desc: "米粉面糊完美酥脆" },
        { icon: "flame", title: "拉丝奶酪", desc: "浓郁马苏里拉拉丝" },
        { icon: "chefhat", title: "现做现炸", desc: "点单后新鲜油炸" },
        { icon: "sparkles", title: "趣味配料", desc: "土豆、糖粉、酥脆配料" },
      ],
    },
    menu: {
      title: "热狗菜单",
      items: [
        { name: "经典香肠", desc: "酥脆甜面糊的优质热狗" },
        { name: "马苏里拉芝士", desc: "终极芝士拉丝体验" },
        { name: "双拼", desc: "半香肠半马苏里拉" },
        { name: "土豆热狗", desc: "酥脆土豆块外衣" },
        { name: "拉面热狗", desc: "酥脆拉面外衣" },
        { name: "糖粉热狗", desc: "油炸后裹甜糖粉" },
      ],
    },
    cta: {
      title: "体验芝士拉丝",
      description: "品尝夏威夷最好的韩式热狗！搭配科纳咖啡享受难忘的美食体验。",
      button: "访问我们",
      location: "2142 卡拉卡瓦大道，威基基",
      hours: "2026年2月开业",
    },
  },
};

const IconComponent = ({ name }: { name: string }) => {
  switch (name) {
    case 'star': return <Star className="w-6 h-6" />;
    case 'flame': return <Flame className="w-6 h-6" />;
    case 'chefhat': return <ChefHat className="w-6 h-6" />;
    case 'sparkles': return <Sparkles className="w-6 h-6" />;
    default: return <Flame className="w-6 h-6" />;
  }
};

export default function KoreanCornDogPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-950 via-orange-900 to-red-950">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/menu/hotdog.webp')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/80 via-orange-900/60 to-red-950" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full text-white text-sm font-bold mb-4">
                <Flame className="w-4 h-4" />
                {t.hero.badge}
              </span>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-righteous)' }}
              >
                {t.hero.title}
              </h1>

              <p className="text-lg sm:text-xl text-orange-100/90 leading-relaxed">
                {t.hero.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 rounded-3xl blur-2xl opacity-30" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/menu/hotdog.webp"
                  alt="Korean Corn Dog"
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
            <p className="text-orange-100/80 text-lg leading-relaxed mb-6">
              {t.intro.description}
            </p>
            <p className="text-orange-200/70 leading-relaxed">
              {t.intro.appeal}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-red-900/30">
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
                className="bg-gradient-to-br from-red-800/50 to-orange-900/50 rounded-2xl p-6 text-center border border-red-700/30"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl text-white mb-4">
                  <IconComponent name={feature.icon} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-orange-100/70 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
            style={{ fontFamily: 'var(--font-righteous)' }}
          >
            {t.menu.title}
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {t.menu.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-red-800/30 rounded-xl p-5 border border-red-700/30 hover:bg-red-800/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                    <p className="text-orange-100/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-red-900/50 to-red-950">
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
            <p className="text-orange-100/80 text-lg mb-8 max-w-2xl mx-auto">
              {t.cta.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-orange-200/80">
                <MapPin className="w-5 h-5" />
                <span>{t.cta.location}</span>
              </div>
              <div className="flex items-center gap-2 text-orange-200/80">
                <Clock className="w-5 h-5" />
                <span>{t.cta.hours}</span>
              </div>
            </div>

            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/25 hover:scale-105"
            >
              {t.cta.button}
              <Flame className="w-5 h-5" />
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
            "name": "Korean Corn Dog",
            "description": "Crispy Korean-style corn dog with stretchy mozzarella cheese. Features sweet rice flour batter and various toppings like potato or sugar coating.",
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
              "reviewCount": "250"
            }
          })
        }}
      />
    </main>
  );
}
