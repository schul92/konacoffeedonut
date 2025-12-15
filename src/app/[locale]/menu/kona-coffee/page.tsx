'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Coffee, MapPin, Clock, Leaf, Award, ThermometerSun } from 'lucide-react';

const translations = {
  en: {
    hero: {
      badge: "100% HAWAIIAN",
      title: "Kona Coffee",
      subtitle: "Experience the world's finest coffee from Hawaii's volcanic slopes",
    },
    intro: {
      title: "What is Kona Coffee?",
      description: "Kona coffee is grown on the slopes of Hualalai and Mauna Loa in the North and South Kona Districts of the Big Island of Hawaii. The unique microclimate—sunny mornings, cloudy afternoons, little wind, and mild nights—combined with mineral-rich volcanic soil creates coffee beans with an extraordinary smooth, rich flavor that coffee lovers worldwide cherish.",
      history: "Hawaiian coffee cultivation began in 1828 when Reverend Samuel Ruggles brought Brazilian coffee trees to Kona. Nearly 200 years later, Kona remains one of the most prestigious and sought-after coffee-growing regions in the world.",
    },
    features: {
      title: "Why Kona Coffee is Special",
      items: [
        { icon: "leaf", title: "Single Origin", desc: "100% pure Kona beans from Big Island farms" },
        { icon: "award", title: "World Renowned", desc: "Consistently rated among the world's best coffees" },
        { icon: "thermometer", title: "Perfect Climate", desc: "Ideal growing conditions on volcanic slopes" },
        { icon: "coffee", title: "Rich Flavor", desc: "Smooth, low acidity with hints of chocolate & nuts" },
      ],
    },
    menu: {
      title: "Our Coffee Menu",
      items: [
        { name: "Kona Coffee (Hot)", desc: "Classic brewed 100% Kona coffee" },
        { name: "Kona Coffee (Iced)", desc: "Cold brewed for smooth, refreshing taste" },
        { name: "Kona Latte", desc: "Espresso with steamed milk, Kona style" },
        { name: "Kona Cappuccino", desc: "Rich espresso with foamed milk" },
        { name: "Kona Americano", desc: "Espresso with hot water, pure & bold" },
        { name: "Kona Mocha", desc: "Chocolate meets Kona coffee perfection" },
      ],
    },
    cta: {
      title: "Taste the Aloha Spirit",
      description: "Visit us in Waikiki to experience authentic Kona coffee paired with our fresh mochi donuts and Hawaiian treats.",
      button: "Visit Us",
      location: "2142 Kalakaua Ave, Waikiki",
      hours: "Opening January 2025",
    },
  },
  ja: {
    hero: {
      badge: "100%ハワイ産",
      title: "コナコーヒー",
      subtitle: "ハワイの火山斜面で育つ世界最高峰のコーヒー",
    },
    intro: {
      title: "コナコーヒーとは？",
      description: "コナコーヒーはハワイ島のフアラライ山とマウナロア山の斜面、ノースコナとサウスコナ地区で栽培されています。晴れた朝、曇った午後、穏やかな風、そして温暖な夜という独特の微気候と、ミネラル豊富な火山性土壌が組み合わさり、世界中のコーヒー愛好家が愛する滑らかで豊かな風味の豆を生み出します。",
      history: "ハワイでのコーヒー栽培は1828年、サミュエル・ラグルス牧師がブラジルからコーヒーの木をコナに持ち込んだことから始まりました。約200年経った今も、コナは世界で最も権威あるコーヒー産地の一つです。",
    },
    features: {
      title: "コナコーヒーが特別な理由",
      items: [
        { icon: "leaf", title: "シングルオリジン", desc: "ビッグアイランド産100%純粋コナ豆" },
        { icon: "award", title: "世界的評価", desc: "世界最高のコーヒーとして常に評価" },
        { icon: "thermometer", title: "完璧な気候", desc: "火山斜面の理想的な栽培条件" },
        { icon: "coffee", title: "豊かな風味", desc: "チョコレートとナッツの香り、滑らかな味" },
      ],
    },
    menu: {
      title: "コーヒーメニュー",
      items: [
        { name: "コナコーヒー（ホット）", desc: "100%コナコーヒーをドリップで" },
        { name: "コナコーヒー（アイス）", desc: "水出しで滑らかな味わい" },
        { name: "コナラテ", desc: "エスプレッソとスチームミルク" },
        { name: "コナカプチーノ", desc: "リッチなエスプレッソとフォームミルク" },
        { name: "コナアメリカーノ", desc: "エスプレッソとお湯でピュアな味" },
        { name: "コナモカ", desc: "チョコレートとコナコーヒーの完璧な出会い" },
      ],
    },
    cta: {
      title: "アロハスピリットを味わう",
      description: "ワイキキの当店で、新鮮なモチドーナツとハワイアンスイーツと一緒に本格的なコナコーヒーをお楽しみください。",
      button: "お店を訪問",
      location: "2142 カラカウア通り、ワイキキ",
      hours: "2025年1月オープン",
    },
  },
  ko: {
    hero: {
      badge: "100% 하와이산",
      title: "코나 커피",
      subtitle: "하와이 화산 경사면에서 자란 세계 최고의 커피",
    },
    intro: {
      title: "코나 커피란?",
      description: "코나 커피는 하와이 빅 아일랜드의 후알라라이 산과 마우나 로아 산 경사면, 노스 코나와 사우스 코나 지역에서 재배됩니다. 맑은 아침, 흐린 오후, 잔잔한 바람, 온화한 밤이라는 독특한 미기후와 미네랄이 풍부한 화산토가 결합하여 전 세계 커피 애호가들이 사랑하는 부드럽고 풍부한 맛의 원두를 만들어냅니다.",
      history: "하와이 커피 재배는 1828년 사무엘 러글스 목사가 브라질에서 커피 나무를 코나로 가져오면서 시작되었습니다. 약 200년이 지난 지금도 코나는 세계에서 가장 권위 있는 커피 재배 지역 중 하나입니다.",
    },
    features: {
      title: "코나 커피가 특별한 이유",
      items: [
        { icon: "leaf", title: "싱글 오리진", desc: "빅 아일랜드 농장의 100% 순수 코나 원두" },
        { icon: "award", title: "세계적 명성", desc: "세계 최고의 커피로 꾸준히 평가" },
        { icon: "thermometer", title: "완벽한 기후", desc: "화산 경사면의 이상적인 재배 조건" },
        { icon: "coffee", title: "풍부한 맛", desc: "초콜릿과 견과류 향의 부드러운 맛" },
      ],
    },
    menu: {
      title: "커피 메뉴",
      items: [
        { name: "코나 커피 (핫)", desc: "클래식 드립 100% 코나 커피" },
        { name: "코나 커피 (아이스)", desc: "콜드브루로 부드럽고 상쾌한 맛" },
        { name: "코나 라떼", desc: "에스프레소와 스팀 밀크" },
        { name: "코나 카푸치노", desc: "리치한 에스프레소와 거품 밀크" },
        { name: "코나 아메리카노", desc: "에스프레소와 뜨거운 물로 순수한 맛" },
        { name: "코나 모카", desc: "초콜릿과 코나 커피의 완벽한 만남" },
      ],
    },
    cta: {
      title: "알로하 스피릿을 맛보세요",
      description: "와이키키 매장에서 신선한 모찌 도넛과 하와이안 디저트와 함께 정통 코나 커피를 즐겨보세요.",
      button: "매장 방문",
      location: "2142 칼라카우아 애비뉴, 와이키키",
      hours: "2025년 1월 오픈",
    },
  },
  zh: {
    hero: {
      badge: "100%夏威夷产",
      title: "科纳咖啡",
      subtitle: "来自夏威夷火山斜坡的世界顶级咖啡",
    },
    intro: {
      title: "什么是科纳咖啡？",
      description: "科纳咖啡生长在夏威夷大岛的胡阿拉莱山和冒纳罗亚山的斜坡上，位于北科纳和南科纳地区。独特的微气候——晴朗的早晨、多云的下午、微风和温和的夜晚——结合富含矿物质的火山土壤，创造出世界各地咖啡爱好者珍爱的、口感顺滑浓郁的咖啡豆。",
      history: "夏威夷咖啡种植始于1828年，当时塞缪尔·拉格尔斯牧师将巴西咖啡树带到科纳。近200年后，科纳仍是世界上最负盛名的咖啡产区之一。",
    },
    features: {
      title: "科纳咖啡的特别之处",
      items: [
        { icon: "leaf", title: "单一产地", desc: "来自大岛农场的100%纯科纳豆" },
        { icon: "award", title: "世界闻名", desc: "始终被评为世界顶级咖啡" },
        { icon: "thermometer", title: "完美气候", desc: "火山斜坡的理想种植条件" },
        { icon: "coffee", title: "醇厚风味", desc: "带有巧克力和坚果香气的顺滑口感" },
      ],
    },
    menu: {
      title: "咖啡菜单",
      items: [
        { name: "科纳咖啡（热）", desc: "经典滴滤100%科纳咖啡" },
        { name: "科纳咖啡（冰）", desc: "冷萃顺滑清爽" },
        { name: "科纳拿铁", desc: "浓缩咖啡配蒸奶" },
        { name: "科纳卡布奇诺", desc: "浓郁浓缩咖啡配奶泡" },
        { name: "科纳美式", desc: "浓缩咖啡配热水，纯粹醇厚" },
        { name: "科纳摩卡", desc: "巧克力与科纳咖啡的完美邂逅" },
      ],
    },
    cta: {
      title: "品味阿罗哈精神",
      description: "来威基基店品尝正宗科纳咖啡，搭配我们新鲜的麻糬甜甜圈和夏威夷美食。",
      button: "访问我们",
      location: "2142 卡拉卡瓦大道，威基基",
      hours: "2025年1月开业",
    },
  },
};

const IconComponent = ({ name }: { name: string }) => {
  switch (name) {
    case 'leaf': return <Leaf className="w-6 h-6" />;
    case 'award': return <Award className="w-6 h-6" />;
    case 'thermometer': return <ThermometerSun className="w-6 h-6" />;
    case 'coffee': return <Coffee className="w-6 h-6" />;
    default: return <Coffee className="w-6 h-6" />;
  }
};

export default function KonaCoffeePage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-950 via-amber-900 to-amber-950">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/menu/coffee.webp')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/80 via-amber-900/60 to-amber-950" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full text-white text-sm font-bold mb-4">
                <Coffee className="w-4 h-4" />
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
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-3xl blur-2xl opacity-30" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/menu/coffee.webp"
                  alt="Kona Coffee"
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
            <p className="text-amber-200/70 leading-relaxed italic">
              {t.intro.history}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-amber-900/30">
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
                className="bg-gradient-to-br from-amber-800/50 to-amber-900/50 rounded-2xl p-6 text-center border border-amber-700/30"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl text-white mb-4">
                  <IconComponent name={feature.icon} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-amber-100/70 text-sm">{feature.desc}</p>
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
                className="bg-amber-800/30 rounded-xl p-5 border border-amber-700/30 hover:bg-amber-800/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Coffee className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-amber-900/50 to-amber-950">
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-500/25 hover:scale-105"
            >
              {t.cta.button}
              <Coffee className="w-5 h-5" />
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
            "name": "Kona Coffee",
            "description": "100% Hawaiian Kona Coffee from Big Island farms. Experience the world's finest coffee with smooth, rich flavor and low acidity.",
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
              "reviewCount": "200"
            }
          })
        }}
      />
    </main>
  );
}
