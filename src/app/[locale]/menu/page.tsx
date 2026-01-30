'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import MenuSection from '@/components/MenuSection';

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section - with top padding to account for fixed nav + banner */}
      <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-20 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Our Menu
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              Handcrafted with Aloha in Waikiki. Proudly serving Honolulu Coffee&apos;s premium Kona coffee and fresh MOCHILAND mochi donuts.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500">
              <span className="bg-white/80 px-3 py-1 rounded-full shadow-sm">Mochi Donuts</span>
              <span className="bg-white/80 px-3 py-1 rounded-full shadow-sm">Kona Coffee</span>
              <span className="bg-white/80 px-3 py-1 rounded-full shadow-sm">Malasadas</span>
              <span className="bg-white/80 px-3 py-1 rounded-full shadow-sm">Bingsu</span>
              <span className="bg-white/80 px-3 py-1 rounded-full shadow-sm">Acai Bowls</span>
              <span className="bg-white/80 px-3 py-1 rounded-full shadow-sm">Korean Corn Dogs</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section - hide its own header since we have hero above */}
      <MenuSection hideHeader />

      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* About Our Menu */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Fresh Daily in Waikiki
              </h2>
              <p className="text-gray-600 mb-4">
                Every item on our menu is prepared fresh daily at our Waikiki location.
                Our mochi donuts are made in-house using traditional rice flour recipes,
                and our Kona coffee is brewed to perfection by our trained baristas.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-amber-500">✓</span>
                  Made fresh daily
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-500">✓</span>
                  Premium ingredients
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-500">✓</span>
                  Handcrafted with Aloha
                </li>
              </ul>
            </motion.div>

            {/* Visit Us */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Visit Us in Waikiki
              </h2>
              <p className="text-gray-600 mb-4">
                Located just 5 minutes walk from Waikiki Beach, we&apos;re the perfect
                stop for your morning coffee, afternoon treat, or evening dessert.
              </p>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Address:</strong><br />
                  2142 Kalakaua Ave<br />
                  Honolulu, HI 96815
                </p>
                <p className="text-gray-700">
                  <strong>Hours:</strong><br />
                  Open Daily 7AM - 9PM
                </p>
                <Link
                  href="/#location"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors font-medium mt-2"
                >
                  Get Directions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Best Coffee & Donuts Menu in Waikiki, Honolulu
            </h2>
            <p className="text-gray-600 mb-4">
              Kona Coffee Donut offers the best selection of premium Kona coffee and artisan donuts
              in Waikiki, Honolulu. Our menu features a unique combination of Hawaiian favorites
              and Korean-inspired treats, all made fresh daily at our Kalakaua Avenue location.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Our Signature Offerings
            </h3>
            <p className="text-gray-600 mb-4">
              <strong>Premium Kona Coffee:</strong> We proudly serve Honolulu Coffee, Hawaii&apos;s
              premier Kona coffee roaster since 1992. Our baristas craft each cup using beans
              grown on the volcanic slopes of Mauna Loa, delivering a smooth, rich flavor
              that&apos;s uniquely Hawaiian.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>MOCHILAND Mochi Donuts:</strong> Our signature mochi donuts are made
              with rice flour (mochiko), creating a unique texture that&apos;s crispy on the
              outside and wonderfully chewy inside. Available in a variety of flavors
              including ube, matcha, and seasonal specials.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Hawaiian Malasadas:</strong> Traditional Portuguese-Hawaiian fried dough
              pastries, coated in sugar and available with various fillings like custard,
              haupia (coconut), and chocolate.
            </p>
            <p className="text-gray-600">
              <strong>Korean Favorites:</strong> Cool off with our refreshing bingsu (Korean
              shaved ice) or enjoy our crispy Korean corn dogs – perfect for a snack while
              exploring Waikiki Beach.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
