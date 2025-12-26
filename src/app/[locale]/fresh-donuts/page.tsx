'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// SEO-optimized content for "fresh donuts" keyword (Volume: 1,900, Difficulty: 3)
const content = {
  en: {
    hero: {
      title: 'Fresh Donuts Made Daily in Waikiki',
      subtitle: 'Handcrafted Gourmet Donuts Baked Fresh Every Morning',
      cta: 'View Our Menu'
    },
    intro: {
      title: 'The Freshest Donuts in Hawaii',
      paragraph1: 'At Kona Coffee Donut in Waikiki, we believe fresh donuts taste better. That\'s why we bake our artisan mochi donuts and malasadas fresh every single day, using premium ingredients and traditional Hawaiian recipes.',
      paragraph2: 'Our fresh donuts are made with rice flour for that perfect chewy texture—crispy on the outside, soft and pillowy on the inside. Paired with our 100% Kona coffee, it\'s the ultimate Hawaiian breakfast or afternoon treat.'
    },
    whyFresh: {
      title: 'Why Our Fresh Donuts Stand Out',
      points: [
        {
          title: 'Baked Fresh Daily',
          description: 'We start baking at 5 AM every morning so you can enjoy warm, fresh donuts when our doors open at 7 AM.'
        },
        {
          title: 'Premium Ingredients',
          description: 'We use only the finest rice flour, local Hawaiian honey, and imported Japanese mochi flour for authentic taste.'
        },
        {
          title: 'Handcrafted with Aloha',
          description: 'Every donut is hand-shaped by our skilled bakers who bring years of experience and passion to their craft.'
        },
        {
          title: 'Never Frozen, Never Reheated',
          description: 'Unlike chain donut shops, we never use frozen dough or reheat old donuts. Fresh means fresh.'
        }
      ]
    },
    varieties: {
      title: 'Our Fresh Donut Selection',
      subtitle: 'Something for every taste',
      items: [
        {
          name: 'Mochi Donuts',
          description: 'Japanese-style chewy donuts made with rice flour. Available in 12+ rotating flavors including Ube, Matcha, Black Sesame, and seasonal specials.',
          link: '/menu/mochi-donuts'
        },
        {
          name: 'Malasadas',
          description: 'Traditional Hawaiian-Portuguese fried dough, light and fluffy. Choose from original, cinnamon sugar, haupia (coconut), or chocolate filled.',
          link: '/menu/malasada'
        }
      ]
    },
    pairing: {
      title: 'The Perfect Pairing: Fresh Donuts + Kona Coffee',
      description: 'There\'s nothing quite like biting into a warm, fresh donut while sipping on premium 100% Kona coffee. The rich, smooth flavors of Hawaiian coffee complement our sweet, chewy donuts perfectly.',
      cta: 'Try Our Kona Coffee'
    },
    location: {
      title: 'Get Fresh Donuts in Waikiki',
      address: '2142 Kalakaua Ave, Honolulu, HI 96815',
      hours: 'Open Daily: 7:00 AM - 9:00 PM',
      tip: 'Pro tip: Arrive early for the best selection! Our most popular flavors often sell out by noon.',
      cta: 'Get Directions'
    },
    faq: {
      title: 'Fresh Donuts FAQ',
      items: [
        {
          question: 'What time do you make fresh donuts?',
          answer: 'We start baking at 5 AM daily. Fresh donuts are ready when we open at 7 AM and we continue baking throughout the morning.'
        },
        {
          question: 'Are your donuts made fresh every day?',
          answer: 'Yes! We never serve day-old donuts. Everything is made fresh daily using premium ingredients. Any unsold donuts are donated at the end of each day.'
        },
        {
          question: 'Can I order fresh donuts for pickup?',
          answer: 'Yes! Walk-ins are welcome, or you can call ahead for larger orders. We recommend ordering 24 hours in advance for parties and events.'
        },
        {
          question: 'What makes your donuts different from other donut shops?',
          answer: 'Our mochi donuts use Japanese rice flour for a unique chewy texture you won\'t find at traditional donut shops. Combined with our fresh-daily guarantee and premium Kona coffee, it\'s a truly Hawaiian experience.'
        }
      ]
    },
    finalCta: {
      title: 'Ready for Fresh Donuts?',
      subtitle: 'Visit Kona Coffee Donut in Waikiki and taste the difference that fresh, handcrafted donuts make.',
      menuButton: 'View Full Menu',
      directionsButton: 'Get Directions'
    }
  }
};

// FAQ Schema for SEO
function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

// Product Schema for Fresh Donuts
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Fresh Donuts - Mochi Donuts & Malasadas',
  description: 'Fresh handcrafted donuts made daily in Waikiki. Artisan mochi donuts and traditional Hawaiian malasadas.',
  image: [
    'https://www.konacoffeedonut.com/images/menu/donut.webp',
    'https://www.konacoffeedonut.com/images/menu/malasada.webp'
  ],
  brand: {
    '@type': 'Brand',
    name: 'Kona Coffee Donut'
  },
  offers: {
    '@type': 'AggregateOffer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    lowPrice: '3.00',
    highPrice: '6.00',
    offerCount: '20'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '200',
    bestRating: '5',
    worstRating: '1'
  }
};

export default function FreshDonutsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = content.en; // For now, using English content

  const handleGetDirections = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=2142+Kalakaua+Ave,+Honolulu,+HI+96815', '_blank');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-amber-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(t.faq.items)) }}
      />

      {/* Back Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Back</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-amber-100/50" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* H1 - Primary keyword */}
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
              {t.hero.title}
            </h1>
            {/* H2 - Secondary keyword */}
            <h2 className="text-xl md:text-2xl text-orange-600 font-semibold mb-8">
              {t.hero.subtitle}
            </h2>
            <Link
              href={`/${locale}#menu`}
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg"
            >
              {t.hero.cta}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.intro.title}
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              {t.intro.paragraph1}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.intro.paragraph2}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Fresh Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t.whyFresh.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.whyFresh.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donut Varieties */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t.varieties.title}
            </h2>
            <p className="text-lg text-gray-600">{t.varieties.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {t.varieties.items.map((item, index) => (
              <Link key={index} href={`/${locale}${item.link}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
                >
                  <div className="relative h-48 bg-gradient-to-br from-orange-100 to-amber-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl">{index === 0 ? '🍩' : '🥯'}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-orange-500 font-semibold">
                      Learn More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Pairing */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.pairing.title}
            </h2>
            <p className="text-lg text-amber-100 mb-8 leading-relaxed">
              {t.pairing.description}
            </p>
            <Link
              href={`/${locale}/menu/kona-coffee`}
              className="inline-flex items-center gap-2 bg-white text-orange-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-100 transition-colors"
            >
              {t.pairing.cta}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t.location.title}
          </h2>
          <p className="text-xl text-gray-700 font-semibold mb-2">{t.location.address}</p>
          <p className="text-lg text-gray-600 mb-4">{t.location.hours}</p>
          <p className="text-orange-600 font-medium mb-8 italic">{t.location.tip}</p>
          <button
            onClick={handleGetDirections}
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {t.location.cta}
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t.faq.title}
          </h2>
          <div className="space-y-6">
            {t.faq.items.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-500 to-amber-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.finalCta.title}
            </h2>
            <p className="text-lg text-orange-100 mb-8">
              {t.finalCta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}#menu`}
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-100 transition-colors"
              >
                {t.finalCta.menuButton}
              </Link>
              <button
                onClick={handleGetDirections}
                className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-colors border-2 border-white/30"
              >
                {t.finalCta.directionsButton}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
