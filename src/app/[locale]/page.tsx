'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import MapEmbed from '@/components/MapEmbed';
import MenuSection from '@/components/MenuSection';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const t = useTranslations();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scale and opacity for smooth logo transition
  // Starts transitioning at 0px, fully transitioned at 200px
  const scrollProgress = Math.min(scrollY / 200, 1);
  const isScrolled = scrollY > 10;
  const logoScale = 1 - (scrollProgress * 0.5); // Scale from 1 to 0.5
  const questionScale = 2 - scrollProgress; // Scale from 2 to 1

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4">
          {/* Desktop Navigation */}
          <div className="hidden md:grid grid-cols-3 items-center gap-4">
            {/* Left: Menu & About */}
            <div className="flex gap-8 text-base">
              <a href="#menu" className="hover:opacity-60 transition-opacity">{t('nav.menu')}</a>
              <a href="#about" className="hover:opacity-60 transition-opacity">{t('nav.about')}</a>
            </div>

            {/* Center: Logo (converts to ? when scrolled) */}
            <div className="flex justify-center items-center h-12">
              <div
                className="absolute transition-all duration-200 ease-out"
                style={{
                  opacity: 1 - scrollProgress,
                  transform: `scale(${logoScale})`,
                  pointerEvents: scrollProgress > 0.5 ? 'none' : 'auto'
                }}
              >
                <Image
                  src="/konacoffee.png"
                  alt="Kona Coffee Donut"
                  width={300}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <div
                className="absolute transition-all duration-200 ease-out font-bold"
                style={{
                  color: '#5C2E1F',
                  opacity: scrollProgress,
                  transform: `scale(${questionScale})`,
                  fontSize: '2.5rem'
                }}
              >
                ?
              </div>
            </div>

            {/* Right: Location & Language */}
            <div className="flex gap-8 text-base items-center justify-end">
              <a href="#location" className="hover:opacity-60 transition-opacity">{t('nav.location')}</a>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-between items-center">
            <button
              className="text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? '×' : '☰'}
            </button>

            <div className="flex-1 flex justify-center items-center h-10 relative">
              <div
                className="absolute transition-all duration-200 ease-out"
                style={{
                  opacity: 1 - scrollProgress,
                  transform: `scale(${logoScale})`,
                  pointerEvents: scrollProgress > 0.5 ? 'none' : 'auto'
                }}
              >
                <Image
                  src="/konacoffee.png"
                  alt="Kona Coffee Donut"
                  width={200}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <div
                className="absolute transition-all duration-200 ease-out font-bold"
                style={{
                  color: '#5C2E1F',
                  opacity: scrollProgress,
                  transform: `scale(${questionScale})`,
                  fontSize: '2rem'
                }}
              >
                ?
              </div>
            </div>

            <div className="w-8"></div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-6 space-y-4">
            <a href="#menu" className="block text-lg" onClick={() => setMenuOpen(false)}>{t('nav.menu')}</a>
            <a href="#about" className="block text-lg" onClick={() => setMenuOpen(false)}>{t('nav.about')}</a>
            <a href="#location" className="block text-lg" onClick={() => setMenuOpen(false)}>{t('nav.location')}</a>
            <div className="pt-4 border-t border-gray-200">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </nav>

      {/* Location Section - Moved to Top */}
      <section id="location" className="pt-20 md:pt-24 pb-20 md:pb-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-gradient-to-r from-amber-50 to-orange-50 px-8 py-4 rounded-2xl mb-6 shadow-md">
              <h2 className="text-4xl md:text-6xl font-bold mb-2" style={{ color: '#5C2E1F' }}>
                ☕ {t('location.title')} ☕
              </h2>
              <p className="text-xl md:text-2xl font-semibold" style={{ color: '#8B4513' }}>
                {t('location.subtitle')}
              </p>
            </div>
            <div className="text-xl md:text-2xl text-gray-800 mt-8">
              <p className="font-semibold mb-1">{t('location.address')}</p>
              <p className="text-gray-600">{t('location.city')}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <MapEmbed />
          </motion.div>

          <div className="text-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=2142+Kalakaua+Ave,+Honolulu,+HI+96815"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-full transition-colors duration-200 shadow-lg"
            >
              {t('location.directions')}
            </a>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <MenuSection />

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div>
              <h3 className="text-xl md:text-2xl font-righteous mb-2">
                KONA COFFEE <span className="inline-block" style={{ fontSize: '0.9em' }}>☕</span> DONUT ?
              </h3>
              <p className="opacity-60">{t('footer.tagline')}</p>
            </div>
            <div className="flex gap-8 text-base">
              <a href="#menu" className="opacity-60 hover:opacity-100 transition-opacity">
                {t('nav.menu')}
              </a>
              <a href="#about" className="opacity-60 hover:opacity-100 transition-opacity">
                {t('nav.about')}
              </a>
              <a href="#location" className="opacity-60 hover:opacity-100 transition-opacity">
                {t('nav.location')}
              </a>
            </div>
          </div>

          {/* Collaboration Partners */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-center text-sm opacity-60 mb-6">{t('footer.collaboration')}</p>
            <div className="flex justify-center items-center gap-8 md:gap-12 mb-8">
              <Image
                src="/honolulu_coffee.webp"
                alt="Honolulu Coffee"
                width={80}
                height={64}
                className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/mochi_land_circle.png"
                alt="Mochiland"
                width={80}
                height={64}
                className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center opacity-40 text-sm">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
