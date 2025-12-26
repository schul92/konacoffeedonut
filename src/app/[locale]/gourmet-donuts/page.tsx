'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// SEO-optimized content for "gourmet donuts" keyword (Volume: 1,700, Difficulty: 1)
const content = {
  en: {
    hero: {
      title: 'Gourmet Donuts in Waikiki, Hawaii',
      subtitle: 'Artisan Mochi Donuts & Hawaiian Malasadas Crafted with Premium Ingredients',
      cta: 'Explore Our Menu'
    },
    intro: {
      title: 'Experience Hawaii\'s Finest Gourmet Donuts',
      paragraph1: 'Welcome to Kona Coffee Donut, where gourmet donuts meet Hawaiian hospitality. Our artisan mochi donuts and traditional malasadas are crafted daily using premium ingredients, time-honored recipes, and the spirit of aloha.',
      paragraph2: 'Unlike mass-produced chain donuts, our gourmet creations feature unique textures, authentic flavors, and that special touch that only handcrafted pastries can deliver. Each bite is an experience worth savoring.'
    },
    whatMakesGourmet: {
      title: 'What Makes Our Donuts Gourmet?',
      items: [
        {
          title: 'Premium Japanese Rice Flour',
          description: 'Our mochi donuts are made with imported Japanese glutinous rice flour, creating that signature chewy texture that sets us apart from ordinary donuts.'
        },
        {
          title: 'Handcrafted Daily',
          description: 'Every donut is hand-shaped by skilled artisans. We never use automated machines or pre-made dough—each piece is a work of culinary art.'
        },
        {
          title: 'Unique Flavor Profiles',
          description: 'From Ube (purple yam) to Matcha green tea, Black Sesame to Hawaiian Lilikoi—our rotating menu features flavors you won\'t find anywhere else.'
        },
        {
          title: 'Local Hawaiian Ingredients',
          description: 'We source local Hawaiian honey, coconut cream, and tropical fruits to infuse authentic island flavors into our gourmet creations.'
        },
        {
          title: 'Perfect Coffee Pairing',
          description: 'Our gourmet donuts are specifically designed to complement 100% Kona coffee—Hawaii\'s premium coffee known for its smooth, rich flavor.'
        },
        {
          title: 'Small-Batch Quality',
          description: 'We bake in small batches throughout the day to ensure every donut meets our exacting standards for freshness and flavor.'
        }
      ]
    },
    signature: {
      title: 'Our Signature Gourmet Donut Collection',
      items: [
        {
          name: 'Mochi Donuts',
          tagline: 'Japanese-Hawaiian Fusion',
          description: 'Our signature mochi donuts feature a crispy exterior and impossibly chewy interior. Made with Japanese rice flour for an authentic pon de ring texture. Available in 12+ artisan flavors.',
          features: ['Gluten-friendly option', 'Vegan options available', 'Made fresh daily'],
          link: '/menu/mochi-donuts'
        },
        {
          name: 'Malasadas',
          tagline: 'Hawaiian-Portuguese Tradition',
          description: 'Light, fluffy, and perfectly fried—our malasadas continue Hawaii\'s beloved Portuguese pastry tradition. Choose from original, cinnamon, haupia-filled, or seasonal specials.',
          features: ['Traditional recipe', 'Fresh cream fillings', 'Local favorite'],
          link: '/menu/malasada'
        }
      ]
    },
    pairing: {
      title: 'The Gourmet Experience: Donuts + Kona Coffee',
      subtitle: 'Hawaii\'s Perfect Pairing',
      description: 'Our gourmet donuts are crafted to pair perfectly with premium 100% Kona coffee. The subtle sweetness of our mochi donuts complements the smooth, chocolatey notes of authentic Hawaiian coffee. It\'s not just a snack—it\'s a culinary experience.',
      coffeeCta: 'Discover Our Kona Coffee',
      coffeeLink: '/menu/kona-coffee'
    },
    comparison: {
      title: 'Gourmet Donuts vs. Regular Donuts',
      items: [
        { feature: 'Ingredients', gourmet: 'Premium imported & local', regular: 'Standard commercial' },
        { feature: 'Texture', gourmet: 'Unique mochi chew', regular: 'Standard cake/yeast' },
        { feature: 'Preparation', gourmet: 'Handcrafted daily', regular: 'Mass-produced' },
        { feature: 'Flavors', gourmet: '12+ artisan varieties', regular: 'Basic selections' },
        { feature: 'Freshness', gourmet: 'Made throughout the day', regular: 'Often pre-made' },
        { feature: 'Experience', gourmet: 'Paired with Kona coffee', regular: 'Standard coffee' }
      ]
    },
    location: {
      title: 'Find Our Gourmet Donuts in Waikiki',
      address: '2142 Kalakaua Ave, Honolulu, HI 96815',
      hours: 'Open Daily: 7:00 AM - 9:00 PM',
      description: 'Located in the heart of Waikiki, just steps from the beach. Perfect for a morning treat before the beach or an afternoon pick-me-up while shopping on Kalakaua Avenue.',
      cta: 'Get Directions'
    },
    faq: {
      title: 'Gourmet Donuts FAQ',
      items: [
        {
          question: 'What makes a donut "gourmet"?',
          answer: 'Gourmet donuts are distinguished by premium ingredients, artisan preparation methods, unique flavor profiles, and attention to detail. Our mochi donuts use imported Japanese rice flour and are hand-shaped daily—a level of quality you won\'t find at chain donut shops.'
        },
        {
          question: 'Are your gourmet donuts suitable for dietary restrictions?',
          answer: 'Yes! Our mochi donuts are naturally gluten-friendly (made with rice flour). We also offer vegan options. Please ask our staff about specific dietary requirements.'
        },
        {
          question: 'How should I store gourmet donuts?',
          answer: 'Our donuts are best enjoyed fresh within a few hours of purchase. If storing, keep at room temperature in an airtight container for up to 24 hours. For mochi donuts, a quick 10-second microwave can restore the chewy texture.'
        },
        {
          question: 'Can I order gourmet donuts for events or parties?',
          answer: 'Absolutely! We offer catering for events, parties, and corporate functions. Please contact us at least 48 hours in advance for large orders. Custom flavor selections available.'
        },
        {
          question: 'Why are gourmet donuts more expensive than regular donuts?',
          answer: 'Our pricing reflects premium ingredients (imported Japanese flour, local Hawaiian products), handcrafted preparation, small-batch production, and the expertise of our artisan bakers. Each donut represents significantly more time, skill, and quality ingredients than mass-produced alternatives.'
        }
      ]
    },
    finalCta: {
      title: 'Ready to Taste the Difference?',
      subtitle: 'Visit Kona Coffee Donut in Waikiki and discover why our gourmet donuts are Hawaii\'s must-try treat.',
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

// Product Schema for Gourmet Donuts
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Gourmet Donuts - Artisan Mochi Donuts & Malasadas',
  description: 'Gourmet handcrafted donuts in Waikiki Hawaii. Artisan mochi donuts with premium Japanese rice flour and traditional Hawaiian malasadas.',
  image: [
    'https://www.konacoffeedonut.com/images/menu/donut.webp',
    'https://www.konacoffeedonut.com/images/menu/malasada.webp'
  ],
  brand: {
    '@type': 'Brand',
    name: 'Kona Coffee Donut'
  },
  category: 'Gourmet Donuts',
  offers: {
    '@type': 'AggregateOffer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    lowPrice: '3.50',
    highPrice: '6.00',
    offerCount: '20'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '180',
    bestRating: '5',
    worstRating: '1'
  }
};

export default function GourmetDonutsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = content.en;

  const handleGetDirections = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=2142+Kalakaua+Ave,+Honolulu,+HI+96815', '_blank');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50">
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-orange-100/50" />
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
            {/* H2 - Secondary keywords */}
            <h2 className="text-xl md:text-2xl text-amber-700 font-semibold mb-8">
              {t.hero.subtitle}
            </h2>
            <Link
              href={`/${locale}#menu`}
              className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg"
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

      {/* What Makes Gourmet */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t.whatMakesGourmet.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.whatMakesGourmet.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Collection */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t.signature.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.signature.items.map((item, index) => (
              <Link key={index} href={`/${locale}${item.link}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group h-full"
                >
                  <div className="relative h-48 bg-gradient-to-br from-amber-200 to-orange-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-7xl">{index === 0 ? '🍩' : '🥯'}</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Gourmet
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-amber-600 font-semibold text-sm mb-1">{item.tagline}</p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.features.map((feature, idx) => (
                        <span key={idx} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-amber-600 font-semibold group-hover:text-amber-700">
                      View Details
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

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t.comparison.title}
          </h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-amber-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Feature</th>
                    <th className="px-6 py-4 text-left font-bold">Our Gourmet Donuts</th>
                    <th className="px-6 py-4 text-left font-bold">Regular Donuts</th>
                  </tr>
                </thead>
                <tbody>
                  {t.comparison.items.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-amber-50'}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.feature}</td>
                      <td className="px-6 py-4 text-amber-700 font-medium">{item.gourmet}</td>
                      <td className="px-6 py-4 text-gray-500">{item.regular}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Pairing */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-800 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {t.pairing.title}
            </h2>
            <p className="text-amber-300 font-semibold mb-6">{t.pairing.subtitle}</p>
            <p className="text-lg text-amber-100 mb-8 leading-relaxed">
              {t.pairing.description}
            </p>
            <Link
              href={`/${locale}${t.pairing.coffeeLink}`}
              className="inline-flex items-center gap-2 bg-white text-amber-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-100 transition-colors"
            >
              {t.pairing.coffeeCta}
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
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{t.location.description}</p>
          <button
            onClick={handleGetDirections}
            className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-700 transition-colors shadow-lg"
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
      <section className="py-20 px-4 bg-gradient-to-br from-amber-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.finalCta.title}
            </h2>
            <p className="text-lg text-amber-100 mb-8">
              {t.finalCta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}#menu`}
                className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-100 transition-colors"
              >
                {t.finalCta.menuButton}
              </Link>
              <button
                onClick={handleGetDirections}
                className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-700 transition-colors border-2 border-white/30"
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
