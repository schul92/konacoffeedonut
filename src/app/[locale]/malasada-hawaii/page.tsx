'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Script from 'next/script';

// SEO-optimized content for "malasada hawaii" keyword (Volume: 2,600, Difficulty: 21)
const content = {
  en: {
    hero: {
      title: 'Authentic Hawaiian Malasada in Waikiki',
      subtitle: 'Fresh Portuguese Donuts Made Daily with Aloha',
      cta: 'View Our Menu'
    },
    intro: {
      title: 'Best Malasada in Hawaii',
      paragraph1: 'Experience the authentic taste of Hawaiian malasada at Kona Coffee Donut in Waikiki. Our malasadas are handcrafted fresh every morning using a traditional Portuguese recipe that has been perfected over generations in Hawaii.',
      paragraph2: 'Each malasada is deep-fried to golden perfection, coated in sweet sugar, and served warm. Pair it with our premium 100% Kona coffee for the ultimate Hawaiian breakfast experience.'
    },
    whyUs: {
      title: 'Why Our Malasada is Special',
      points: [
        {
          title: 'Made Fresh Daily',
          description: 'We prepare our malasada dough every morning using premium ingredients. No frozen dough, no reheating—just fresh, warm malasadas.'
        },
        {
          title: 'Traditional Hawaiian Recipe',
          description: 'Our recipe honors the Portuguese immigrants who brought malasadas to Hawaii in the 1800s, with a modern twist of Hawaiian flavors.'
        },
        {
          title: 'Multiple Flavors',
          description: 'Choose from classic sugar-coated, custard-filled, chocolate, haupia (coconut), or our seasonal specials.'
        },
        {
          title: 'Perfect with Kona Coffee',
          description: 'The sweetness of our malasada perfectly complements the smooth, rich flavor of our 100% Kona coffee.'
        }
      ]
    },
    history: {
      title: 'The History of Malasada in Hawaii',
      text: 'Malasada was brought to Hawaii by Portuguese immigrants from Madeira and the Azores in the late 1800s. Originally made to use up lard and sugar before Lent, malasadas became a beloved Hawaiian treat. Today, they\'re enjoyed year-round and are a must-try for any visitor to Hawaii. At Kona Coffee Donut, we continue this delicious tradition with our fresh, handmade malasadas in the heart of Waikiki.'
    },
    cta: {
      title: 'Try Our Fresh Malasada Today',
      text: 'Visit us at 2142 Kalakaua Ave in Waikiki. Open daily 7AM-9PM.',
      button: 'Get Directions'
    }
  },
  ja: {
    hero: {
      title: 'ワイキキで本格ハワイアンマラサダ',
      subtitle: '毎日手作りの新鮮なポルトガルドーナツ',
      cta: 'メニューを見る'
    },
    intro: {
      title: 'ハワイで最高のマラサダ',
      paragraph1: 'ワイキキのコナコーヒードーナツで、本格的なハワイアンマラサダをお楽しみください。私たちのマラサダは、ハワイで何世代にもわたって完成された伝統的なポルトガルのレシピを使用し、毎朝手作りしています。',
      paragraph2: '各マラサダは黄金色に揚げられ、甘い砂糖でコーティングされ、温かい状態で提供されます。プレミアム100%コナコーヒーと一緒に、究極のハワイアン朝食体験をお楽しみください。'
    },
    whyUs: {
      title: '私たちのマラサダが特別な理由',
      points: [
        {
          title: '毎日新鮮に作られる',
          description: '毎朝、プレミアム素材を使用してマラサダ生地を準備します。冷凍生地なし、再加熱なし—新鮮で温かいマラサダだけ。'
        },
        {
          title: '伝統的なハワイアンレシピ',
          description: '1800年代にマラサダをハワイに持ち込んだポルトガル移民に敬意を表し、ハワイアンフレーバーの現代的なツイストを加えています。'
        },
        {
          title: '豊富なフレーバー',
          description: 'クラシックなシュガーコート、カスタード入り、チョコレート、ハウピア（ココナッツ）、または季節のスペシャルからお選びください。'
        },
        {
          title: 'コナコーヒーとの相性抜群',
          description: 'マラサダの甘さは、100%コナコーヒーの滑らかで豊かな風味を完璧に引き立てます。'
        }
      ]
    },
    history: {
      title: 'ハワイにおけるマラサダの歴史',
      text: 'マラサダは1800年代後半にマデイラ島とアゾレス諸島からのポルトガル移民によってハワイにもたらされました。元々は四旬節前にラードと砂糖を使い切るために作られたマラサダは、愛されるハワイのお菓子になりました。今日では一年中楽しまれ、ハワイを訪れる人には必食のスイーツです。'
    },
    cta: {
      title: '今日、新鮮なマラサダをお試しください',
      text: 'ワイキキ2142 Kalakaua Aveでお待ちしております。毎日7AM-9PM営業。',
      button: '道順を見る'
    }
  },
  ko: {
    hero: {
      title: '와이키키 정통 하와이안 말라사다',
      subtitle: '매일 신선하게 만드는 포르투갈 도넛',
      cta: '메뉴 보기'
    },
    intro: {
      title: '하와이 최고의 말라사다',
      paragraph1: '와이키키 코나커피도넛에서 정통 하와이안 말라사다를 경험하세요. 저희 말라사다는 하와이에서 여러 세대에 걸쳐 완성된 전통 포르투갈 레시피로 매일 아침 수제로 만듭니다.',
      paragraph2: '각 말라사다는 황금빛으로 튀겨지고, 달콤한 설탕으로 코팅되어 따뜻하게 제공됩니다. 프리미엄 100% 코나 커피와 함께 최고의 하와이안 아침 식사를 즐기세요.'
    },
    whyUs: {
      title: '저희 말라사다가 특별한 이유',
      points: [
        {
          title: '매일 신선하게 제조',
          description: '매일 아침 프리미엄 재료로 말라사다 반죽을 준비합니다. 냉동 반죽 없이, 재가열 없이—신선하고 따뜻한 말라사다만.'
        },
        {
          title: '전통 하와이안 레시피',
          description: '1800년대에 말라사다를 하와이에 가져온 포르투갈 이민자들에게 경의를 표하며, 하와이안 풍미의 현대적인 변화를 더했습니다.'
        },
        {
          title: '다양한 맛',
          description: '클래식 슈가 코팅, 커스터드 필링, 초콜릿, 하우피아(코코넛), 또는 시즌 스페셜 중에서 선택하세요.'
        },
        {
          title: '코나 커피와 완벽한 조화',
          description: '말라사다의 달콤함은 100% 코나 커피의 부드럽고 풍부한 풍미를 완벽하게 보완합니다.'
        }
      ]
    },
    history: {
      title: '하와이 말라사다의 역사',
      text: '말라사다는 1800년대 후반 마데이라와 아조레스 제도에서 온 포르투갈 이민자들에 의해 하와이에 전해졌습니다. 원래 사순절 전에 라드와 설탕을 소진하기 위해 만들어진 말라사다는 사랑받는 하와이 간식이 되었습니다. 오늘날 연중 내내 즐기며 하와이 방문객이라면 꼭 맛봐야 할 디저트입니다.'
    },
    cta: {
      title: '오늘 신선한 말라사다를 맛보세요',
      text: '와이키키 2142 Kalakaua Ave에서 만나요. 매일 오전 7시-오후 9시 영업.',
      button: '길찾기'
    }
  },
  zh: {
    hero: {
      title: '威基基正宗夏威夷马拉萨达',
      subtitle: '每天新鲜手工制作的葡萄牙甜甜圈',
      cta: '查看菜单'
    },
    intro: {
      title: '夏威夷最好的马拉萨达',
      paragraph1: '在威基基的科纳咖啡甜甜圈体验正宗的夏威夷马拉萨达。我们的马拉萨达使用在夏威夷代代相传完善的传统葡萄牙配方，每天早晨手工制作。',
      paragraph2: '每个马拉萨达都炸至金黄完美，裹上甜蜜的糖霜，热乎乎地送到您手中。搭配我们的优质100%科纳咖啡，享受终极夏威夷早餐体验。'
    },
    whyUs: {
      title: '我们的马拉萨达为何特别',
      points: [
        {
          title: '每日新鲜制作',
          description: '我们每天早晨使用优质原料准备马拉萨达面团。没有冷冻面团，没有再加热——只有新鲜温暖的马拉萨达。'
        },
        {
          title: '传统夏威夷配方',
          description: '我们的配方向1800年代将马拉萨达带到夏威夷的葡萄牙移民致敬，并融入了现代夏威夷风味。'
        },
        {
          title: '多种口味',
          description: '可选择经典糖霜、奶油夹心、巧克力、椰奶（haupia）或季节特供。'
        },
        {
          title: '与科纳咖啡完美搭配',
          description: '马拉萨达的甜美完美地衬托出100%科纳咖啡的醇厚风味。'
        }
      ]
    },
    history: {
      title: '马拉萨达在夏威夷的历史',
      text: '马拉萨达是1800年代后期由来自马德拉和亚速尔群岛的葡萄牙移民带到夏威夷的。最初是为了在四旬期前用完猪油和糖而制作的，马拉萨达成为了备受喜爱的夏威夷美食。如今，全年都可以享用，是任何夏威夷游客必尝的美食。'
    },
    cta: {
      title: '今天就来品尝新鲜马拉萨达',
      text: '欢迎来到威基基2142 Kalakaua Ave。每日营业时间：上午7点至晚上9点。',
      button: '获取路线'
    }
  },
  es: {
    hero: {
      title: 'Auténtica Malasada Hawaiana en Waikiki',
      subtitle: 'Donuts Portugueses Frescos Hechos Diariamente con Aloha',
      cta: 'Ver Menú'
    },
    intro: {
      title: 'La Mejor Malasada de Hawaii',
      paragraph1: 'Experimenta el sabor auténtico de la malasada hawaiana en Kona Coffee Donut en Waikiki. Nuestras malasadas son artesanales, hechas frescas cada mañana usando una receta tradicional portuguesa perfeccionada durante generaciones en Hawaii.',
      paragraph2: 'Cada malasada se fríe hasta la perfección dorada, se recubre con dulce azúcar y se sirve caliente. Combínala con nuestro café 100% Kona premium para la experiencia definitiva del desayuno hawaiano.'
    },
    whyUs: {
      title: 'Por Qué Nuestra Malasada es Especial',
      points: [
        {
          title: 'Hecha Fresca Diariamente',
          description: 'Preparamos nuestra masa de malasada cada mañana con ingredientes premium. Sin masa congelada, sin recalentar—solo malasadas frescas y calientes.'
        },
        {
          title: 'Receta Tradicional Hawaiana',
          description: 'Nuestra receta honra a los inmigrantes portugueses que trajeron las malasadas a Hawaii en el siglo XIX, con un toque moderno de sabores hawaianos.'
        },
        {
          title: 'Múltiples Sabores',
          description: 'Elige entre azúcar clásico, relleno de crema, chocolate, haupia (coco) o nuestros especiales de temporada.'
        },
        {
          title: 'Perfecta con Café Kona',
          description: 'La dulzura de nuestra malasada complementa perfectamente el sabor suave y rico de nuestro café 100% Kona.'
        }
      ]
    },
    history: {
      title: 'La Historia de la Malasada en Hawaii',
      text: 'La malasada fue traída a Hawaii por inmigrantes portugueses de Madeira y las Azores a finales del siglo XIX. Originalmente hecha para usar la manteca y el azúcar antes de la Cuaresma, las malasadas se convirtieron en un querido dulce hawaiano. Hoy se disfrutan todo el año y son imprescindibles para cualquier visitante de Hawaii.'
    },
    cta: {
      title: 'Prueba Nuestra Malasada Fresca Hoy',
      text: 'Visítanos en 2142 Kalakaua Ave en Waikiki. Abierto diariamente 7AM-9PM.',
      button: 'Obtener Direcciones'
    }
  }
};

// Structured Data for Malasada page
const malasadaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Hawaiian Malasada',
  description: 'Authentic Portuguese-Hawaiian fried dough pastry, handmade fresh daily in Waikiki. Sugar-coated with optional fillings: custard, chocolate, haupia (coconut).',
  image: 'https://www.konacoffeedonut.com/images/menu/malasada.webp',
  brand: {
    '@type': 'Brand',
    name: 'Kona Coffee Donut'
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: '4.00',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'Restaurant',
      name: 'Kona Coffee Donut',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2142 Kalakaua Ave',
        addressLocality: 'Honolulu',
        addressRegion: 'HI',
        postalCode: '96815',
        addressCountry: 'US'
      }
    }
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '89'
  }
};

export default function MalasadaHawaiiPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = content[locale as keyof typeof content] || content.en;

  return (
    <>
      <Script
        id="malasada-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(malasadaSchema) }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-800 via-orange-700 to-amber-900">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute inset-0">
            <Image
              src="/images/menu/malasada.webp"
              alt="Fresh Hawaiian Malasada at Kona Coffee Donut Waikiki"
              fill
              className="object-cover opacity-60"
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
                className="inline-block bg-white text-amber-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-100 transition-colors"
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
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6 text-center">
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

        {/* Why Our Malasada */}
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-12 text-center">
              {t.whyUs.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {t.whyUs.points.map((point, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-amber-800 mb-3">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6 text-center">
              {t.history.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {t.history.text}
            </p>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
            <p className="text-xl mb-8 opacity-90">{t.cta.text}</p>
            <a 
              href="https://maps.google.com/?q=2142+Kalakaua+Ave+Honolulu+HI+96815"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-amber-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-100 transition-colors"
            >
              {t.cta.button}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
