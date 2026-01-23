'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ChevronDown, ArrowLeft, HelpCircle, Coffee, MapPin, Clock, CreditCard, Wifi, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

const translations = {
  en: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about Kona Coffee Donut",
    back: "Back to Home",
    categories: {
      products: "Products & Menu",
      location: "Location & Hours",
      services: "Services & Policies",
    },
    faqs: [
      {
        category: "products",
        question: "What makes Kona Coffee special?",
        answer: "We proudly serve Honolulu Coffee, Hawaii's premier coffee roaster, featuring premium Kona coffee. Kona coffee is grown on the slopes of Mauna Loa in Hawaii and is known for its smooth, rich flavor with low acidity. It's one of the most sought-after coffees in the world due to Hawaii's unique volcanic soil and ideal growing conditions."
      },
      {
        category: "products",
        question: "What are mochi donuts?",
        answer: "Mochi donuts are artisan donuts made with rice flour (mochiko), giving them a unique texture that is crispy on the outside and chewy on the inside. We feature MOCHILAND mochi donuts at our Waikiki location, offering a variety of flavors including ube, matcha, black sesame, and seasonal specials."
      },
      {
        category: "products",
        question: "What is malasada?",
        answer: "Malasada is a traditional Hawaiian-Portuguese fried dough pastry that was brought to Hawaii by Portuguese immigrants. Our malasadas are freshly made, coated in sugar, and can be filled with various flavors like custard, chocolate, or haupia (coconut)."
      },
      {
        category: "products",
        question: "What is bingsu?",
        answer: "Bingsu is a popular Korean shaved ice dessert made with finely shaved milk ice and topped with various ingredients. Our Hawaiian-style bingsu features fresh tropical fruits, mochi, and sweet toppings - perfect for cooling down in the Waikiki heat."
      },
      {
        category: "products",
        question: "What are Korean corn dogs?",
        answer: "Korean corn dogs (also known as K-dogs) are a popular Korean street food featuring a hot dog or cheese on a stick, coated in a variety of batters, deep-fried, and topped with different seasonings. Our corn dogs are crispy on the outside and perfectly seasoned."
      },
      {
        category: "products",
        question: "What is the difference between Kona coffee and regular coffee?",
        answer: "Kona coffee is grown exclusively in the Kona district of Hawaii's Big Island. The unique combination of volcanic soil, tropical climate, and high altitude creates a coffee with exceptional smoothness, low acidity, and distinctive flavor notes. True 100% Kona coffee is rare and considered among the finest coffees in the world."
      },
      {
        category: "products",
        question: "Can I buy Kona coffee beans to take home?",
        answer: "Yes! We sell premium Kona coffee beans from Honolulu Coffee. They make perfect souvenirs and gifts from Hawaii."
      },
      {
        category: "products",
        question: "Do you have vegan or gluten-free options?",
        answer: "While our mochi donuts contain rice flour which is naturally gluten-free, they may be prepared in facilities that handle wheat. Please inform our staff about any dietary restrictions and we'll do our best to accommodate you."
      },
      {
        category: "location",
        question: "Where is Kona Coffee Donut located?",
        answer: "We are located at 2142 Kalakaua Ave, Honolulu, HI 96815 in the heart of Waikiki, Hawaii. We're just a short walk from Waikiki Beach, making us the perfect spot for tourists and locals alike."
      },
      {
        category: "location",
        question: "What are your opening hours?",
        answer: "We are open daily from 7:00 AM to 9:00 PM, serving fresh coffee and donuts throughout the day. We recommend visiting in the morning for the freshest selection of donuts."
      },
      {
        category: "location",
        question: "Is parking available?",
        answer: "Street parking and nearby parking garages are available in the Waikiki area. Many visitors also walk from nearby hotels or take public transportation to our Kalakaua Avenue location."
      },
      {
        category: "location",
        question: "How do I get to Kona Coffee Donut from Waikiki Beach?",
        answer: "We're located on Kalakaua Avenue, the main shopping street in Waikiki. From Waikiki Beach, it's approximately a 5-10 minute walk. Look for us near the International Market Place."
      },
      {
        category: "services",
        question: "Do you offer takeout?",
        answer: "Yes, we offer takeout service. You can grab your favorite coffee and donuts to go. Our donuts are packaged carefully to maintain freshness."
      },
      {
        category: "services",
        question: "Do you accept credit cards?",
        answer: "Yes, we accept all major credit cards, debit cards, and cash. We also accept contactless payment methods like Apple Pay and Google Pay."
      },
      {
        category: "services",
        question: "Do you offer Wi-Fi?",
        answer: "Yes, we offer free Wi-Fi for our customers. Feel free to work or browse while enjoying your coffee and donuts."
      },
      {
        category: "services",
        question: "Is Kona Coffee Donut family-friendly?",
        answer: "Absolutely! We welcome families with children. Our menu has something for everyone, from sweet mochi donuts to refreshing bingsu. We have a relaxed, friendly atmosphere perfect for families visiting Waikiki."
      },
      {
        category: "services",
        question: "Do you cater events?",
        answer: "For large orders or catering inquiries, please contact us directly at info@konacoffeedonut.com. We'd be happy to discuss your needs."
      },
      {
        category: "services",
        question: "Are you hiring?",
        answer: "Yes, we are always looking for enthusiastic team members! We welcome applications from individuals with valid work authorization. Visit our careers page to learn about current openings."
      },
    ],
  },
  ja: {
    title: "よくある質問",
    subtitle: "Kona Coffee Donutについて知りたいことすべて",
    back: "ホームに戻る",
    categories: {
      products: "商品・メニュー",
      location: "場所・営業時間",
      services: "サービス・ポリシー",
    },
    faqs: [
      {
        category: "products",
        question: "コナコーヒーの特別な点は何ですか？",
        answer: "ハワイ屈指のコーヒーロースターであるホノルルコーヒーと提携し、プレミアムなコナコーヒーを提供しています。コナコーヒーはハワイのマウナロア山の斜面で栽培され、滑らかで豊かな風味と低い酸味で知られています。ハワイ独特の火山性土壌と理想的な栽培条件により、世界で最も求められるコーヒーの一つです。"
      },
      {
        category: "products",
        question: "モチドーナツとは何ですか？",
        answer: "モチドーナツは米粉（もち粉）で作られた職人技のドーナツで、外はカリカリ、中はもちもちとした独特の食感が特徴です。ワイキキ店ではMOCHILANDのモチドーナツを提供しており、うべ、抹茶、黒ごま、季節限定フレーバーなど様々な味をお楽しみいただけます。"
      },
      {
        category: "products",
        question: "マラサダとは何ですか？",
        answer: "マラサダはポルトガル移民によってハワイにもたらされた伝統的なハワイアン・ポルトガル風の揚げパンです。私たちのマラサダは毎日新鮮に作られ、砂糖をまぶし、カスタード、チョコレート、ハウピア（ココナッツ）など様々なフレーバーのフィリングを入れることができます。"
      },
      {
        category: "products",
        question: "ビングスとは何ですか？",
        answer: "ビングスは細かく削ったミルクアイスに様々なトッピングをのせた人気の韓国かき氷デザートです。ハワイアンスタイルのビングスは新鮮なトロピカルフルーツ、モチ、甘いトッピングが特徴で、ワイキキの暑さを冷やすのに最適です。"
      },
      {
        category: "location",
        question: "Kona Coffee Donutはどこにありますか？",
        answer: "ハワイ州ホノルル市カラカウア通り2142番地（96815）のワイキキの中心部にあります。ワイキキビーチから徒歩圏内で、観光客にも地元の方にも最適なロケーションです。"
      },
      {
        category: "location",
        question: "営業時間は？",
        answer: "毎日午前7時から午後9時まで営業しており、一日を通して新鮮なコーヒーとドーナツを提供しています。最も新鮮なドーナツを選びたい方は朝のご来店をおすすめします。"
      },
      {
        category: "services",
        question: "テイクアウトはできますか？",
        answer: "はい、テイクアウトサービスを提供しています。お気に入りのコーヒーとドーナツをお持ち帰りいただけます。ドーナツは新鮮さを保つために丁寧に包装しています。"
      },
      {
        category: "services",
        question: "クレジットカードは使えますか？",
        answer: "はい、すべての主要なクレジットカード、デビットカード、現金を受け付けています。Apple PayやGoogle Payなどの非接触決済も利用可能です。"
      },
      {
        category: "services",
        question: "Wi-Fiはありますか？",
        answer: "はい、お客様向けに無料Wi-Fiを提供しています。コーヒーとドーナツを楽しみながら、お仕事やネットサーフィンをお楽しみください。"
      },
      {
        category: "services",
        question: "採用していますか？",
        answer: "はい、熱意あるチームメンバーを常に募集しています！有効な就労許可をお持ちの方からの応募をお待ちしています。現在の求人については採用ページをご覧ください。"
      },
    ],
  },
  ko: {
    title: "자주 묻는 질문",
    subtitle: "Kona Coffee Donut에 대해 알아야 할 모든 것",
    back: "홈으로 돌아가기",
    categories: {
      products: "제품 및 메뉴",
      location: "위치 및 영업시간",
      services: "서비스 및 정책",
    },
    faqs: [
      {
        category: "products",
        question: "코나 커피의 특별한 점은 무엇인가요?",
        answer: "하와이 최고의 커피 로스터인 호놀룰루 커피와 제휴하여 프리미엄 코나 커피를 제공합니다. 코나 커피는 하와이 마우나로아 산 경사면에서 재배되며, 부드럽고 풍부한 맛과 낮은 산도로 유명합니다. 하와이의 독특한 화산토와 이상적인 재배 조건 덕분에 세계에서 가장 인기 있는 커피 중 하나입니다."
      },
      {
        category: "products",
        question: "모찌 도넛이 무엇인가요?",
        answer: "모찌 도넛은 쌀가루(모찌코)로 만든 수제 도넛으로, 겉은 바삭하고 속은 쫄깃한 독특한 식감이 특징입니다. 와이키키 매장에서는 MOCHILAND 모찌 도넛을 선보이며, 우베, 말차, 흑임자 및 계절 한정 맛 등 다양한 맛을 제공합니다."
      },
      {
        category: "location",
        question: "Kona Coffee Donut은 어디에 있나요?",
        answer: "하와이 호놀룰루 와이키키 중심부 칼라카우아 애비뉴 2142번지(96815)에 위치해 있습니다. 와이키키 비치에서 도보 거리에 있어 관광객과 현지인 모두에게 완벽한 장소입니다."
      },
      {
        category: "location",
        question: "영업시간이 어떻게 되나요?",
        answer: "매일 오전 7시부터 오후 9시까지 운영하며, 하루 종일 신선한 커피와 도넛을 제공합니다. 가장 신선한 도넛을 원하시면 아침에 방문하시는 것을 추천드립니다."
      },
      {
        category: "services",
        question: "테이크아웃이 가능한가요?",
        answer: "네, 테이크아웃 서비스를 제공합니다. 좋아하는 커피와 도넛을 가져가실 수 있습니다. 도넛은 신선함을 유지하기 위해 꼼꼼하게 포장됩니다."
      },
      {
        category: "services",
        question: "신용카드를 받나요?",
        answer: "네, 모든 주요 신용카드, 직불카드, 현금을 받습니다. Apple Pay, Google Pay와 같은 비접촉 결제도 가능합니다."
      },
      {
        category: "services",
        question: "채용 중인가요?",
        answer: "네, 항상 열정적인 팀원을 찾고 있습니다! 유효한 취업 허가를 가진 분들의 지원을 환영합니다. 현재 채용 정보는 채용 페이지를 방문해 주세요."
      },
    ],
  },
  zh: {
    title: "常见问题",
    subtitle: "关于Kona Coffee Donut您需要了解的一切",
    back: "返回首页",
    categories: {
      products: "产品和菜单",
      location: "位置和营业时间",
      services: "服务和政策",
    },
    faqs: [
      {
        category: "products",
        question: "科纳咖啡有什么特别之处？",
        answer: "我们与夏威夷首屈一指的咖啡烘焙商檀香山咖啡合作，提供优质科纳咖啡。科纳咖啡生长在夏威夷冒纳罗亚山的斜坡上，以其顺滑、浓郁的风味和低酸度而闻名。由于夏威夷独特的火山土壤和理想的种植条件，它是世界上最受欢迎的咖啡之一。"
      },
      {
        category: "products",
        question: "什么是麻糬甜甜圈？",
        answer: "麻糬甜甜圈是用糯米粉制作的手工甜甜圈，具有外脆内软的独特口感。我们在威基基店提供MOCHILAND麻糬甜甜圈，包括紫薯、抹茶、黑芝麻和季节限定口味等多种选择。"
      },
      {
        category: "location",
        question: "Kona Coffee Donut在哪里？",
        answer: "我们位于夏威夷檀香山威基基中心的卡拉卡瓦大道2142号（96815）。距离威基基海滩步行即可到达，是游客和当地人的理想选择。"
      },
      {
        category: "location",
        question: "营业时间是什么？",
        answer: "我们每天早上7点到晚上9点营业，全天供应新鲜咖啡和甜甜圈。建议早上来店可以选到最新鲜的甜甜圈。"
      },
      {
        category: "services",
        question: "可以外带吗？",
        answer: "是的，我们提供外带服务。您可以带走您喜欢的咖啡和甜甜圈。甜甜圈会精心包装以保持新鲜。"
      },
      {
        category: "services",
        question: "接受信用卡吗？",
        answer: "是的，我们接受所有主要信用卡、借记卡和现金。我们也接受Apple Pay和Google Pay等非接触式支付方式。"
      },
      {
        category: "services",
        question: "你们在招聘吗？",
        answer: "是的，我们一直在寻找热情的团队成员！欢迎持有有效工作许可的人士申请。请访问我们的招聘页面了解当前职位空缺。"
      },
    ],
  },
  es: {
    title: "Preguntas Frecuentes",
    subtitle: "Todo lo que necesitas saber sobre Kona Coffee Donut",
    back: "Volver al Inicio",
    categories: {
      products: "Productos y Menú",
      location: "Ubicación y Horarios",
      services: "Servicios y Políticas",
    },
    faqs: [
      {
        category: "products",
        question: "¿Qué hace especial al café Kona?",
        answer: "Servimos café Kona premium en asociación con Honolulu Coffee, el principal tostador de café de Hawái. El café Kona se cultiva en las laderas de Mauna Loa en Hawái y es conocido por su sabor suave y rico con baja acidez. Es uno de los cafés más buscados del mundo debido al suelo volcánico único de Hawái y las condiciones ideales de cultivo."
      },
      {
        category: "products",
        question: "¿Qué son los donuts de mochi?",
        answer: "Los donuts de mochi son donuts artesanales hechos con harina de arroz (mochiko), que les da una textura única que es crujiente por fuera y masticable por dentro. Ofrecemos donuts de mochi MOCHILAND en nuestra ubicación de Waikiki, con una variedad de sabores incluyendo ube, matcha, sésamo negro y especiales de temporada."
      },
      {
        category: "location",
        question: "¿Dónde está ubicado Kona Coffee Donut?",
        answer: "Estamos ubicados en 2142 Kalakaua Ave, Honolulu, HI 96815 en el corazón de Waikiki, Hawái. Estamos a poca distancia a pie de la playa de Waikiki, lo que nos convierte en el lugar perfecto tanto para turistas como para locales."
      },
      {
        category: "location",
        question: "¿Cuál es su horario?",
        answer: "Abrimos todos los días de 7:00 AM a 9:00 PM, sirviendo café y donuts frescos durante todo el día. Recomendamos visitar por la mañana para la selección más fresca de donuts."
      },
      {
        category: "services",
        question: "¿Ofrecen para llevar?",
        answer: "Sí, ofrecemos servicio para llevar. Puede llevarse su café y donuts favoritos. Nuestros donuts se empaquetan cuidadosamente para mantener la frescura."
      },
      {
        category: "services",
        question: "¿Aceptan tarjetas de crédito?",
        answer: "Sí, aceptamos todas las principales tarjetas de crédito, tarjetas de débito y efectivo. También aceptamos métodos de pago sin contacto como Apple Pay y Google Pay."
      },
      {
        category: "services",
        question: "¿Están contratando?",
        answer: "¡Sí, siempre estamos buscando miembros entusiastas para el equipo! Damos la bienvenida a solicitudes de personas con autorización de trabajo válida. Visite nuestra página de carreras para conocer las vacantes actuales."
      },
    ],
  },
};

const categoryIcons = {
  products: Coffee,
  location: MapPin,
  services: ShoppingBag,
};

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-amber-100 last:border-0"
    >
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left hover:bg-amber-50/50 transition-colors px-4 -mx-4 rounded-lg"
      >
        <span className="font-medium text-amber-950 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-amber-600 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-amber-700 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQPage() {
  const locale = useLocale();
  const t = translations[locale as keyof typeof translations] || translations.en;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQ structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const groupedFaqs = {
    products: t.faqs.filter(f => f.category === 'products'),
    location: t.faqs.filter(f => f.category === 'location'),
    services: t.faqs.filter(f => f.category === 'services'),
  };

  let globalIndex = 0;

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Back Navigation - positioned below hiring banner */}
      <div className="fixed top-14 left-4 z-50">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all text-amber-900 font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.back}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-6"
          >
            <HelpCircle className="w-4 h-4" />
            FAQ
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-950 mb-4"
            style={{ fontFamily: 'var(--font-righteous)' }}
          >
            {t.title}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-amber-700"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">
          {(Object.keys(groupedFaqs) as Array<keyof typeof groupedFaqs>).map((category) => {
            const Icon = categoryIcons[category];
            const faqs = groupedFaqs[category];
            if (faqs.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <Icon className="w-5 h-5 text-amber-700" />
                  </div>
                  <h2 className="text-xl font-bold text-amber-950">
                    {t.categories[category]}
                  </h2>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-amber-100 p-6">
                  {faqs.map((faq) => {
                    const currentIndex = globalIndex++;
                    return (
                      <FAQItem
                        key={currentIndex}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === currentIndex}
                        onClick={() => setOpenIndex(openIndex === currentIndex ? null : currentIndex)}
                      />
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-xl font-bold text-amber-950 mb-3">
            {locale === 'ja' ? 'まだ質問がありますか？' :
             locale === 'ko' ? '아직 질문이 있으신가요?' :
             locale === 'zh' ? '还有问题吗？' :
             locale === 'es' ? '¿Aún tienes preguntas?' :
             "Still have questions?"}
          </h3>
          <p className="text-amber-700 mb-4">
            {locale === 'ja' ? 'お気軽にお問い合わせください' :
             locale === 'ko' ? '언제든지 연락해 주세요' :
             locale === 'zh' ? '请随时与我们联系' :
             locale === 'es' ? 'No dudes en contactarnos' :
             "Feel free to reach out to us"}
          </p>
          <a
            href="mailto:info@konacoffeedonut.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-medium transition-colors"
          >
            info@konacoffeedonut.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-amber-950 text-center">
        <p className="text-amber-200/60 text-sm">
          © 2025 Kona Coffee Donut. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
