'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Script from 'next/script';

// SEO-optimized content for "breakfast waikiki" keyword (Volume: 1,000)
const content = {
  en: {
    hero: {
      title: 'Best Breakfast in Waikiki',
      subtitle: 'Start Your Hawaiian Morning with Kona Coffee & Fresh Donuts',
      cta: 'View Breakfast Menu'
    },
    intro: {
      title: 'Your Perfect Waikiki Breakfast Spot',
      paragraph1: 'Looking for the best breakfast in Waikiki? Kona Coffee Donut offers an unforgettable morning experience with premium 100% Kona coffee and freshly made artisan donuts. We\'re located just steps from Waikiki Beach on Kalakaua Avenue.',
      paragraph2: 'Whether you\'re an early riser catching the sunrise or looking for a mid-morning treat, our café opens at 7 AM daily with fresh coffee brewing and warm donuts coming out of the kitchen.'
    },
    menu: {
      title: 'Breakfast Menu Highlights',
      items: [
        {
          name: 'Kona Coffee',
          description: '100% pure Kona coffee from Hawaii\'s Big Island. Smooth, rich, and perfect for your morning.',
          price: 'from $5'
        },
        {
          name: 'Mochi Donuts',
          description: 'Crispy outside, chewy inside. Choose from 12+ flavors including Ube, Matcha, and seasonal specials.',
          price: 'from $3.50'
        },
        {
          name: 'Fresh Malasada',
          description: 'Traditional Hawaiian-Portuguese donuts, made fresh every morning and coated in sweet sugar.',
          price: 'from $4'
        },
        {
          name: 'Acai Bowl',
          description: 'Fresh acai topped with tropical fruits, granola, and honey. A healthy Hawaiian breakfast option.',
          price: 'from $10'
        }
      ]
    },
    whyUs: {
      title: 'Why Choose Us for Breakfast',
      points: [
        {
          title: 'Open Early at 7 AM',
          description: 'Perfect for early risers and those wanting breakfast before hitting the beach.'
        },
        {
          title: 'Walking Distance from Beach',
          description: 'Located on Kalakaua Ave, just a 5-minute walk from Waikiki Beach.'
        },
        {
          title: 'Authentic Hawaiian Coffee',
          description: 'We serve only genuine 100% Kona coffee—Hawaii\'s finest.'
        },
        {
          title: 'Fresh Made Daily',
          description: 'All our donuts and pastries are made fresh every morning.'
        }
      ]
    },
    hours: {
      title: 'Breakfast Hours',
      text: 'Open daily 7:00 AM - 9:00 PM',
      note: 'Fresh donuts available all day! Best selection in the morning.'
    },
    cta: {
      title: 'Start Your Day the Hawaiian Way',
      text: 'Visit Kona Coffee Donut at 2142 Kalakaua Ave, Waikiki',
      button: 'Get Directions'
    }
  },
  ja: {
    hero: {
      title: 'ワイキキで最高の朝食',
      subtitle: 'コナコーヒーと新鮮なドーナツでハワイアンモーニングを',
      cta: '朝食メニューを見る'
    },
    intro: {
      title: 'ワイキキの完璧な朝食スポット',
      paragraph1: 'ワイキキで最高の朝食をお探しですか？コナコーヒードーナツは、プレミアム100%コナコーヒーと新鮮な手作りドーナツで忘れられないモーニング体験を提供します。カラカウア通りのワイキキビーチからすぐの場所にあります。',
      paragraph2: '日の出を見る早起きの方も、遅めの朝のおやつをお探しの方も、毎日午前7時から新鮮なコーヒーと焼きたてのドーナツをご用意しています。'
    },
    menu: {
      title: '朝食メニューのハイライト',
      items: [
        {
          name: 'コナコーヒー',
          description: 'ハワイ島産100%純粋コナコーヒー。滑らかで豊かな朝にぴったりの一杯。',
          price: '$5から'
        },
        {
          name: 'モチドーナツ',
          description: '外はサクサク、中はもちもち。紫芋、抹茶、季節限定など12種類以上。',
          price: '$3.50から'
        },
        {
          name: '新鮮なマラサダ',
          description: '毎朝作られる伝統的なハワイアン-ポルトガルドーナツ、甘い砂糖でコーティング。',
          price: '$4から'
        },
        {
          name: 'アサイーボウル',
          description: 'トロピカルフルーツ、グラノーラ、ハニーをトッピングした新鮮なアサイー。',
          price: '$10から'
        }
      ]
    },
    whyUs: {
      title: '朝食に私たちを選ぶ理由',
      points: [
        {
          title: '午前7時から営業',
          description: '早起きの方やビーチに行く前の朝食に最適。'
        },
        {
          title: 'ビーチから徒歩圏内',
          description: 'カラカウア通りに位置し、ワイキキビーチから徒歩5分。'
        },
        {
          title: '本格ハワイアンコーヒー',
          description: '本物の100%コナコーヒーのみを提供—ハワイ最高品質。'
        },
        {
          title: '毎日新鮮に作られる',
          description: 'すべてのドーナツとペストリーは毎朝新鮮に作られます。'
        }
      ]
    },
    hours: {
      title: '朝食営業時間',
      text: '毎日午前7時〜午後9時',
      note: '新鮮なドーナツは終日利用可能！午前中が品揃え豊富。'
    },
    cta: {
      title: 'ハワイアンスタイルで一日を始めよう',
      text: 'ワイキキ 2142 Kalakaua Ave のコナコーヒードーナツへ',
      button: '道順を見る'
    }
  },
  ko: {
    hero: {
      title: '와이키키 최고의 아침식사',
      subtitle: '코나 커피와 신선한 도넛으로 하와이안 모닝을',
      cta: '아침 메뉴 보기'
    },
    intro: {
      title: '와이키키 완벽한 아침식사 장소',
      paragraph1: '와이키키에서 최고의 아침식사를 찾고 계신가요? 코나커피도넛은 프리미엄 100% 코나 커피와 신선한 수제 도넛으로 잊을 수 없는 아침 경험을 제공합니다. 칼라카우아 애비뉴의 와이키키 비치에서 가까운 곳에 위치해 있습니다.',
      paragraph2: '일출을 보는 일찍 일어나는 분이든 늦은 아침 간식을 찾는 분이든, 저희 카페는 매일 오전 7시에 신선한 커피와 따뜻한 도넛과 함께 문을 엽니다.'
    },
    menu: {
      title: '아침 메뉴 하이라이트',
      items: [
        {
          name: '코나 커피',
          description: '하와이 빅아일랜드산 100% 순수 코나 커피. 부드럽고 풍부하며 아침에 완벽.',
          price: '$5부터'
        },
        {
          name: '모찌 도넛',
          description: '겉은 바삭, 속은 쫄깃. 우베, 말차, 시즌 스페셜 등 12가지 이상의 맛.',
          price: '$3.50부터'
        },
        {
          name: '신선한 말라사다',
          description: '매일 아침 만드는 전통 하와이안-포르투갈 도넛, 달콤한 설탕 코팅.',
          price: '$4부터'
        },
        {
          name: '아사이 볼',
          description: '열대 과일, 그래놀라, 꿀을 토핑한 신선한 아사이. 건강한 하와이안 아침식사.',
          price: '$10부터'
        }
      ]
    },
    whyUs: {
      title: '아침식사로 저희를 선택하는 이유',
      points: [
        {
          title: '오전 7시부터 영업',
          description: '일찍 일어나는 분과 해변 가기 전 아침식사에 완벽.'
        },
        {
          title: '해변에서 도보 거리',
          description: '칼라카우아 애비뉴에 위치, 와이키키 비치에서 도보 5분.'
        },
        {
          title: '정통 하와이안 커피',
          description: '진짜 100% 코나 커피만 제공—하와이 최고 품질.'
        },
        {
          title: '매일 신선하게 제조',
          description: '모든 도넛과 페이스트리는 매일 아침 신선하게 만듭니다.'
        }
      ]
    },
    hours: {
      title: '아침식사 영업시간',
      text: '매일 오전 7시 - 오후 9시',
      note: '신선한 도넛 하루 종일 가능! 오전에 가장 다양한 선택.'
    },
    cta: {
      title: '하와이안 스타일로 하루를 시작하세요',
      text: '와이키키 2142 Kalakaua Ave 코나커피도넛 방문',
      button: '길찾기'
    }
  },
  zh: {
    hero: {
      title: '威基基最佳早餐',
      subtitle: '以科纳咖啡和新鲜甜甜圈开启夏威夷的早晨',
      cta: '查看早餐菜单'
    },
    intro: {
      title: '您的完美威基基早餐地点',
      paragraph1: '在威基基寻找最好的早餐？科纳咖啡甜甜圈以优质100%科纳咖啡和新鲜手工甜甜圈为您提供难忘的早晨体验。我们位于卡拉卡瓦大道，距离威基基海滩仅几步之遥。',
      paragraph2: '无论您是早起看日出还是寻找上午点心，我们的咖啡厅每天早上7点开门，新鲜咖啡和温暖的甜甜圈等着您。'
    },
    menu: {
      title: '早餐菜单精选',
      items: [
        {
          name: '科纳咖啡',
          description: '来自夏威夷大岛的100%纯正科纳咖啡。顺滑、浓郁，完美的早晨之选。',
          price: '$5起'
        },
        {
          name: '麻糬甜甜圈',
          description: '外酥里糯。12种以上口味可选，包括紫薯、抹茶和季节特供。',
          price: '$3.50起'
        },
        {
          name: '新鲜马拉萨达',
          description: '传统夏威夷-葡萄牙甜甜圈，每天早晨新鲜制作，裹上甜蜜的糖霜。',
          price: '$4起'
        },
        {
          name: '巴西莓碗',
          description: '新鲜巴西莓配热带水果、燕麦片和蜂蜜。健康的夏威夷早餐选择。',
          price: '$10起'
        }
      ]
    },
    whyUs: {
      title: '为什么选择我们的早餐',
      points: [
        {
          title: '早上7点开门',
          description: '非常适合早起的人和想在去海滩前吃早餐的人。'
        },
        {
          title: '距海滩步行即达',
          description: '位于卡拉卡瓦大道，距威基基海滩步行5分钟。'
        },
        {
          title: '正宗夏威夷咖啡',
          description: '我们只提供正宗100%科纳咖啡——夏威夷最优质。'
        },
        {
          title: '每日新鲜制作',
          description: '所有甜甜圈和糕点每天早晨新鲜制作。'
        }
      ]
    },
    hours: {
      title: '早餐营业时间',
      text: '每日上午7点至晚上9点',
      note: '新鲜甜甜圈全天供应！早晨选择最丰富。'
    },
    cta: {
      title: '以夏威夷方式开始新的一天',
      text: '访问威基基2142 Kalakaua Ave的科纳咖啡甜甜圈',
      button: '获取路线'
    }
  },
  es: {
    hero: {
      title: 'El Mejor Desayuno en Waikiki',
      subtitle: 'Comienza Tu Mañana Hawaiana con Café Kona y Donuts Frescos',
      cta: 'Ver Menú de Desayuno'
    },
    intro: {
      title: 'Tu Lugar Perfecto para Desayunar en Waikiki',
      paragraph1: '¿Buscas el mejor desayuno en Waikiki? Kona Coffee Donut ofrece una experiencia matutina inolvidable con café 100% Kona premium y donuts artesanales recién hechos. Estamos ubicados a pocos pasos de Waikiki Beach en Kalakaua Avenue.',
      paragraph2: 'Ya seas madrugador para ver el amanecer o busques un snack a media mañana, nuestro café abre a las 7 AM todos los días con café fresco y donuts calientes.'
    },
    menu: {
      title: 'Destacados del Menú de Desayuno',
      items: [
        {
          name: 'Café Kona',
          description: 'Café 100% puro Kona de la Isla Grande de Hawaii. Suave, rico y perfecto para tu mañana.',
          price: 'desde $5'
        },
        {
          name: 'Donuts de Mochi',
          description: 'Crujientes por fuera, suaves por dentro. Más de 12 sabores incluyendo Ube, Matcha y especiales de temporada.',
          price: 'desde $3.50'
        },
        {
          name: 'Malasada Fresca',
          description: 'Donuts tradicionales hawaianos-portugueses, hechos frescos cada mañana con cobertura de azúcar.',
          price: 'desde $4'
        },
        {
          name: 'Bowl de Açaí',
          description: 'Açaí fresco con frutas tropicales, granola y miel. Una opción de desayuno hawaiano saludable.',
          price: 'desde $10'
        }
      ]
    },
    whyUs: {
      title: 'Por Qué Elegirnos para el Desayuno',
      points: [
        {
          title: 'Abrimos Temprano a las 7 AM',
          description: 'Perfecto para madrugadores y quienes quieren desayunar antes de ir a la playa.'
        },
        {
          title: 'A Poca Distancia de la Playa',
          description: 'Ubicados en Kalakaua Ave, a solo 5 minutos a pie de Waikiki Beach.'
        },
        {
          title: 'Café Hawaiano Auténtico',
          description: 'Solo servimos genuino café 100% Kona—lo mejor de Hawaii.'
        },
        {
          title: 'Hecho Fresco Diariamente',
          description: 'Todos nuestros donuts y pasteles se hacen frescos cada mañana.'
        }
      ]
    },
    hours: {
      title: 'Horario de Desayuno',
      text: 'Abierto diariamente 7:00 AM - 9:00 PM',
      note: '¡Donuts frescos disponibles todo el día! Mejor selección por la mañana.'
    },
    cta: {
      title: 'Comienza Tu Día al Estilo Hawaiano',
      text: 'Visita Kona Coffee Donut en 2142 Kalakaua Ave, Waikiki',
      button: 'Obtener Direcciones'
    }
  }
};

// Structured Data
const breakfastSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Kona Coffee Donut - Best Breakfast in Waikiki',
  description: 'Best breakfast spot in Waikiki featuring premium 100% Kona coffee, fresh mochi donuts, malasadas, and acai bowls. Open daily at 7AM.',
  image: 'https://www.konacoffeedonut.com/og-image.jpg',
  servesCuisine: ['Coffee', 'Donuts', 'Breakfast', 'Hawaiian'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2142 Kalakaua Ave',
    addressLocality: 'Honolulu',
    addressRegion: 'HI',
    postalCode: '96815',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 21.2793,
    longitude: -157.8294
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '07:00',
    closes: '21:00'
  },
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '156'
  }
};

export default function BreakfastWaikikiPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = content[locale as keyof typeof content] || content.en;

  return (
    <>
      <Script
        id="breakfast-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breakfastSchema) }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/70 via-amber-800/60 to-amber-900/80 z-10" />
          <div className="absolute inset-0">
            <Image
              src="/images/background/waikiki-sunrise.jpg"
              alt="Best Breakfast in Waikiki - Sunrise Beach View Hawaii"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t.hero.title}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                href={`/${locale}/menu`}
                className="inline-block bg-white text-orange-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-100 transition-colors"
              >
                {t.hero.cta}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-6 text-center">
              {t.intro.title}
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              {t.intro.paragraph1}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t.intro.paragraph2}
            </p>
          </motion.div>
        </section>

        {/* Menu Highlights */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-12 text-center">
              {t.menu.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.menu.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg flex justify-between items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <h3 className="text-xl font-bold text-orange-800 mb-2">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <span className="text-orange-600 font-semibold whitespace-nowrap ml-4">{item.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-12 text-center">
            {t.whyUs.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whyUs.points.map((point, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">
                    {index === 0 ? '🌅' : index === 1 ? '🏖️' : index === 2 ? '☕' : '🍩'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-orange-800 mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Hours */}
        <section className="py-12 px-4 bg-orange-100">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-orange-900 mb-2">{t.hours.title}</h2>
            <p className="text-3xl font-bold text-orange-600 mb-2">{t.hours.text}</p>
            <p className="text-gray-600">{t.hours.note}</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
            <p className="text-xl mb-8 opacity-90">{t.cta.text}</p>
            <a 
              href="https://maps.google.com/?q=2142+Kalakaua+Ave+Honolulu+HI+96815"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-orange-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-100 transition-colors"
            >
              {t.cta.button}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
