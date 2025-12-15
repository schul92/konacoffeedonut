'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Leaf, MapPin, Clock, Heart, Zap, Sun, Apple } from 'lucide-react';

const translations = {
  en: {
    hero: {
      badge: "SUPERFOOD BOWL",
      title: "Acai Bowl",
      subtitle: "Refreshing Brazilian superfood topped with fresh Hawaiian fruits",
    },
    intro: {
      title: "What is an Acai Bowl?",
      description: "An acai bowl is a thick smoothie made from frozen acai berries, a superfood from the Amazon rainforest packed with antioxidants, fiber, and heart-healthy fats. Served in a bowl and topped with fresh fruits, granola, and honey, it's become a beloved healthy breakfast and snack in Hawaii.",
      benefits: "Acai berries are known for their incredible health benefits including boosting energy, supporting brain function, and promoting healthy skin. Combined with fresh Hawaiian fruits, it's the perfect tropical treat!",
    },
    features: {
      title: "Why Our Acai Bowls are Special",
      items: [
        { icon: "leaf", title: "100% Pure Acai", desc: "Premium frozen acai from Brazil" },
        { icon: "apple", title: "Fresh Local Fruits", desc: "Hawaiian pineapple, banana, strawberries" },
        { icon: "zap", title: "Energy Boost", desc: "Perfect healthy breakfast or snack" },
        { icon: "heart", title: "Superfood Packed", desc: "Antioxidants, fiber, and healthy fats" },
      ],
    },
    menu: {
      title: "Our Acai Bowl Menu",
      items: [
        { name: "Classic Acai Bowl", desc: "Acai, banana, granola, honey, fresh berries" },
        { name: "Tropical Paradise", desc: "Acai, mango, pineapple, coconut flakes" },
        { name: "Peanut Butter Power", desc: "Acai, banana, peanut butter, granola" },
        { name: "Green Goddess", desc: "Acai, spinach, banana, almond butter" },
        { name: "Berry Blast", desc: "Acai, mixed berries, chia seeds, honey" },
        { name: "Hawaiian Sunrise", desc: "Acai, papaya, passion fruit, macadamia nuts" },
      ],
    },
    cta: {
      title: "Fuel Your Paradise Adventure",
      description: "Start your day with our refreshing acai bowls! Pair with our Kona coffee for the perfect Hawaiian breakfast.",
      button: "Visit Us",
      location: "2142 Kalakaua Ave, Waikiki",
      hours: "Opening January 2025",
    },
  },
  ja: {
    hero: {
      badge: "スーパーフードボウル",
      title: "アサイーボウル",
      subtitle: "ハワイの新鮮なフルーツをトッピングしたブラジルのスーパーフード",
    },
    intro: {
      title: "アサイーボウルとは？",
      description: "アサイーボウルは、アマゾン熱帯雨林原産のスーパーフード、冷凍アサイーベリーから作られる濃厚なスムージーです。抗酸化物質、食物繊維、心臓に良い脂肪が豊富。ボウルに盛り付け、新鮮なフルーツ、グラノーラ、蜂蜜をトッピングして、ハワイで人気のヘルシーな朝食やスナックです。",
      benefits: "アサイーベリーはエネルギー向上、脳機能サポート、健康な肌の促進など、驚くべき健康効果で知られています。ハワイの新鮮なフルーツと組み合わせて、完璧なトロピカルトリートに！",
    },
    features: {
      title: "当店のアサイーボウルの特徴",
      items: [
        { icon: "leaf", title: "100%ピュアアサイー", desc: "ブラジル産プレミアム冷凍アサイー" },
        { icon: "apple", title: "新鮮なローカルフルーツ", desc: "ハワイ産パイナップル、バナナ、いちご" },
        { icon: "zap", title: "エネルギーチャージ", desc: "完璧なヘルシー朝食やスナック" },
        { icon: "heart", title: "スーパーフード満載", desc: "抗酸化物質、食物繊維、良質な脂肪" },
      ],
    },
    menu: {
      title: "アサイーボウルメニュー",
      items: [
        { name: "クラシック アサイーボウル", desc: "アサイー、バナナ、グラノーラ、蜂蜜、フレッシュベリー" },
        { name: "トロピカル パラダイス", desc: "アサイー、マンゴー、パイナップル、ココナッツフレーク" },
        { name: "ピーナッツバター パワー", desc: "アサイー、バナナ、ピーナッツバター、グラノーラ" },
        { name: "グリーン ゴッデス", desc: "アサイー、ほうれん草、バナナ、アーモンドバター" },
        { name: "ベリー ブラスト", desc: "アサイー、ミックスベリー、チアシード、蜂蜜" },
        { name: "ハワイアン サンライズ", desc: "アサイー、パパイヤ、パッションフルーツ、マカダミアナッツ" },
      ],
    },
    cta: {
      title: "パラダイスアドベンチャーにエネルギーを",
      description: "爽やかなアサイーボウルで一日をスタート！コナコーヒーと一緒に完璧なハワイアン朝食を。",
      button: "お店を訪問",
      location: "2142 カラカウア通り、ワイキキ",
      hours: "2025年1月オープン",
    },
  },
  ko: {
    hero: {
      badge: "슈퍼푸드 볼",
      title: "아사이 볼",
      subtitle: "신선한 하와이 과일을 토핑한 브라질 슈퍼푸드",
    },
    intro: {
      title: "아사이 볼이란?",
      description: "아사이 볼은 아마존 열대우림에서 온 슈퍼푸드인 냉동 아사이 베리로 만든 걸쭉한 스무디입니다. 항산화제, 식이섬유, 심장 건강에 좋은 지방이 풍부합니다. 볼에 담아 신선한 과일, 그래놀라, 꿀을 토핑하여 하와이에서 사랑받는 건강한 아침 식사와 간식입니다.",
      benefits: "아사이 베리는 에너지 증진, 뇌 기능 지원, 건강한 피부 촉진 등 놀라운 건강 효과로 알려져 있습니다. 신선한 하와이 과일과 결합하여 완벽한 열대 간식!",
    },
    features: {
      title: "우리 아사이 볼이 특별한 이유",
      items: [
        { icon: "leaf", title: "100% 순수 아사이", desc: "브라질산 프리미엄 냉동 아사이" },
        { icon: "apple", title: "신선한 현지 과일", desc: "하와이산 파인애플, 바나나, 딸기" },
        { icon: "zap", title: "에너지 부스트", desc: "완벽한 건강 아침 또는 간식" },
        { icon: "heart", title: "슈퍼푸드 가득", desc: "항산화제, 식이섬유, 건강한 지방" },
      ],
    },
    menu: {
      title: "아사이 볼 메뉴",
      items: [
        { name: "클래식 아사이 볼", desc: "아사이, 바나나, 그래놀라, 꿀, 신선한 베리" },
        { name: "트로피컬 파라다이스", desc: "아사이, 망고, 파인애플, 코코넛 플레이크" },
        { name: "피넛버터 파워", desc: "아사이, 바나나, 땅콩버터, 그래놀라" },
        { name: "그린 가디스", desc: "아사이, 시금치, 바나나, 아몬드 버터" },
        { name: "베리 블라스트", desc: "아사이, 믹스 베리, 치아씨드, 꿀" },
        { name: "하와이안 선라이즈", desc: "아사이, 파파야, 패션프루트, 마카다미아 넛" },
      ],
    },
    cta: {
      title: "파라다이스 모험에 에너지를",
      description: "상쾌한 아사이 볼로 하루를 시작하세요! 코나 커피와 함께 완벽한 하와이안 아침을.",
      button: "매장 방문",
      location: "2142 칼라카우아 애비뉴, 와이키키",
      hours: "2025년 1월 오픈",
    },
  },
  zh: {
    hero: {
      badge: "超级食物碗",
      title: "巴西莓果碗",
      subtitle: "配以新鲜夏威夷水果的巴西超级食物",
    },
    intro: {
      title: "什么是巴西莓果碗？",
      description: "巴西莓果碗是由来自亚马逊雨林的超级食物——冷冻巴西莓制成的浓稠冰沙。富含抗氧化剂、纤维和对心脏有益的脂肪。盛在碗中，配以新鲜水果、格兰诺拉麦片和蜂蜜，已成为夏威夷深受喜爱的健康早餐和零食。",
      benefits: "巴西莓以其惊人的健康益处而闻名，包括提升能量、支持大脑功能和促进健康皮肤。与新鲜夏威夷水果结合，是完美的热带美食！",
    },
    features: {
      title: "我们巴西莓果碗的特别之处",
      items: [
        { icon: "leaf", title: "100%纯巴西莓", desc: "巴西优质冷冻巴西莓" },
        { icon: "apple", title: "新鲜当地水果", desc: "夏威夷菠萝、香蕉、草莓" },
        { icon: "zap", title: "能量提升", desc: "完美的健康早餐或零食" },
        { icon: "heart", title: "超级食物满满", desc: "抗氧化剂、纤维、健康脂肪" },
      ],
    },
    menu: {
      title: "巴西莓果碗菜单",
      items: [
        { name: "经典巴西莓碗", desc: "巴西莓、香蕉、格兰诺拉、蜂蜜、新鲜浆果" },
        { name: "热带天堂", desc: "巴西莓、芒果、菠萝、椰子片" },
        { name: "花生酱能量", desc: "巴西莓、香蕉、花生酱、格兰诺拉" },
        { name: "绿色女神", desc: "巴西莓、菠菜、香蕉、杏仁酱" },
        { name: "浆果炸弹", desc: "巴西莓、混合浆果、奇亚籽、蜂蜜" },
        { name: "夏威夷日出", desc: "巴西莓、木瓜、百香果、夏威夷果" },
      ],
    },
    cta: {
      title: "为你的天堂冒险加油",
      description: "用清爽的巴西莓果碗开启新的一天！搭配科纳咖啡享用完美的夏威夷早餐。",
      button: "访问我们",
      location: "2142 卡拉卡瓦大道，威基基",
      hours: "2025年1月开业",
    },
  },
};

const IconComponent = ({ name }: { name: string }) => {
  switch (name) {
    case 'leaf': return <Leaf className="w-6 h-6" />;
    case 'apple': return <Apple className="w-6 h-6" />;
    case 'zap': return <Zap className="w-6 h-6" />;
    case 'heart': return <Heart className="w-6 h-6" />;
    default: return <Leaf className="w-6 h-6" />;
  }
};

export default function AcaiBowlPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-fuchsia-950">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/menu/acai.webp')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-purple-900/60 to-fuchsia-950" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full text-white text-sm font-bold mb-4">
                <Sun className="w-4 h-4" />
                {t.hero.badge}
              </span>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-righteous)' }}
              >
                {t.hero.title}
              </h1>

              <p className="text-lg sm:text-xl text-purple-100/90 leading-relaxed">
                {t.hero.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-600 rounded-3xl blur-2xl opacity-30" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/menu/acai.webp"
                  alt="Acai Bowl"
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
            <p className="text-purple-100/80 text-lg leading-relaxed mb-6">
              {t.intro.description}
            </p>
            <p className="text-purple-200/70 leading-relaxed">
              {t.intro.benefits}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-purple-900/30">
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
                className="bg-gradient-to-br from-purple-800/50 to-fuchsia-900/50 rounded-2xl p-6 text-center border border-purple-700/30"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl text-white mb-4">
                  <IconComponent name={feature.icon} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-purple-100/70 text-sm">{feature.desc}</p>
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
                className="bg-purple-800/30 rounded-xl p-5 border border-purple-700/30 hover:bg-purple-800/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-fuchsia-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                    <p className="text-purple-100/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-900/50 to-fuchsia-950">
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
            <p className="text-purple-100/80 text-lg mb-8 max-w-2xl mx-auto">
              {t.cta.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-purple-200/80">
                <MapPin className="w-5 h-5" />
                <span>{t.cta.location}</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200/80">
                <Clock className="w-5 h-5" />
                <span>{t.cta.hours}</span>
              </div>
            </div>

            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-400 hover:to-fuchsia-400 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              {t.cta.button}
              <Sun className="w-5 h-5" />
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
            "name": "Acai Bowl",
            "description": "Brazilian superfood acai bowl with fresh Hawaiian fruits, granola, and toppings. Healthy breakfast and snack option.",
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
              "reviewCount": "180"
            }
          })
        }}
      />
    </main>
  );
}
