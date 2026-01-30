'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import MenuSection from '@/components/MenuSection';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function MenuPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/konacoffee.png"
                alt="Kona Coffee Donut"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-bold text-xl text-amber-900 hidden sm:block">
                Kona Coffee Donut
              </span>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-4 sm:gap-6">
              <Link
                href="/#location"
                className="text-gray-600 hover:text-amber-600 transition-colors font-medium text-sm sm:text-base"
              >
                Location
              </Link>
              <Link
                href="/#about"
                className="text-gray-600 hover:text-amber-600 transition-colors font-medium text-sm sm:text-base"
              >
                About
              </Link>
              <Link
                href="/careers"
                className="text-gray-600 hover:text-amber-600 transition-colors font-medium text-sm sm:text-base"
              >
                Careers
              </Link>
              <LanguageSwitcher />
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-50">
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

      {/* Menu Section - Same as Landing Page */}
      <MenuSection />

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/konacoffee.png"
                alt="Kona Coffee Donut"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-semibold">Kona Coffee Donut</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Kona Coffee Donut. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Privacy
              </Link>
              <Link href="/faq" className="text-gray-400 hover:text-white text-sm">
                FAQ
              </Link>
              <a
                href="https://instagram.com/konacoffeedonut"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
