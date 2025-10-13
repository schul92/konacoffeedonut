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
  const logoScale = 1 - (scrollProgress * 0.5); // Scale from 1 to 0.5
  const questionScale = 2 - scrollProgress; // Scale from 2 to 1

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              <button
                onClick={scrollToTop}
                className="relative cursor-pointer hover:opacity-80 transition-opacity focus:outline-none rounded h-12 w-[450px] flex items-center justify-center"
                aria-label="Scroll to top"
              >
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
                    width={450}
                    height={75}
                    className="h-12 w-auto"
                  />
                </div>
                <div
                  className="absolute transition-all duration-200 ease-out font-bold leading-none flex items-center justify-center"
                  style={{
                    color: '#5C2E1F',
                    opacity: scrollProgress,
                    transform: `scale(${questionScale})`,
                    fontSize: '2.5rem'
                  }}
                >
                  ?
                </div>
              </button>
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

            <button
              onClick={scrollToTop}
              className="flex-1 flex justify-center items-center h-10 relative cursor-pointer hover:opacity-80 transition-opacity focus:outline-none rounded min-w-[200px]"
              aria-label="Scroll to top"
            >
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
                className="absolute transition-all duration-200 ease-out font-bold leading-none flex items-center justify-center"
                style={{
                  color: '#5C2E1F',
                  opacity: scrollProgress,
                  transform: `scale(${questionScale})`,
                  fontSize: '2rem'
                }}
              >
                ?
              </div>
            </button>

            <div className="w-8"></div>
          </div>
        </div>

        {/* Mobile Menu - Improved */}
        <motion.div
          initial={false}
          animate={{ height: menuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden"
        >
          <div className="bg-white border-t border-gray-100 px-6 py-6 space-y-1">
            <a
              href="#menu"
              className="block py-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors rounded-lg hover:bg-orange-50 px-4 -mx-4"
              onClick={() => setMenuOpen(false)}
            >
              {t('nav.menu')}
            </a>
            <a
              href="#about"
              className="block py-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors rounded-lg hover:bg-orange-50 px-4 -mx-4"
              onClick={() => setMenuOpen(false)}
            >
              {t('nav.about')}
            </a>
            <a
              href="#location"
              className="block py-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors rounded-lg hover:bg-orange-50 px-4 -mx-4"
              onClick={() => setMenuOpen(false)}
            >
              {t('nav.location')}
            </a>
            <div className="pt-4 mt-4 border-t border-gray-200 flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section with Waikiki Video Background */}
      <section className="relative h-screen min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Video Background - Responsive */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: 'center center',
            }}
          >
            <source src="/videos/waikiki.mov" type="video/mp4" />
          </video>
          {/* Dark overlay for better text readability - stronger on mobile */}
          <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 md:from-black/30 md:to-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Badges Container - Centered & Aligned */}
            <div className="flex flex-col items-center gap-3 md:gap-4 mb-6 md:mb-8">
              {/* COMING SOON Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-orange-500 text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-black text-lg md:text-2xl tracking-wider shadow-2xl border-2 md:border-4 border-white/30">
                  🌺 COMING SOON 🌺
                </div>
              </motion.div>

              {/* Proudly Serving Honolulu Coffee - Mobile Responsive */}
              <motion.div
                className="inline-flex items-center gap-3 md:gap-4 bg-gradient-to-r from-white/20 via-white/30 to-white/20 backdrop-blur-lg px-4 py-3 md:px-10 md:py-5 rounded-xl md:rounded-2xl border-2 border-white/50 shadow-2xl max-w-[90vw]"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  opacity: { delay: 0.5 },
                  y: { delay: 0.5 },
                  scale: {
                    delay: 1.2,
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }
                }}
              >
                {/* Logo with Glow Effect */}
                <motion.div
                  className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-white rounded-lg md:rounded-xl p-1.5 md:p-2 shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 10px 25px rgba(255, 255, 255, 0.3)",
                      "0 10px 40px rgba(251, 146, 60, 0.6)",
                      "0 10px 25px rgba(255, 255, 255, 0.3)",
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src="/icons/honolulu_coffee.webp"
                    alt="Honolulu Coffee"
                    fill
                    className="object-contain p-0.5 md:p-1"
                  />
                </motion.div>

                {/* Text Content - Mobile Responsive */}
                <div className="text-left">
                  <p className="text-white/90 font-medium text-[10px] md:text-sm mb-0.5 tracking-wide">
                    PROUDLY SERVING
                  </p>
                  <motion.p
                    className="text-white font-black text-base md:text-2xl tracking-tight leading-tight"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(251, 146, 60, 0)",
                        "0 0 20px rgba(251, 146, 60, 0.8)",
                        "0 0 10px rgba(251, 146, 60, 0)",
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    HONOLULU <span className="text-orange-400">COFFEE</span>
                  </motion.p>
                  <p className="text-orange-200 font-semibold text-[10px] md:text-sm">
                    100% Premium Kona Beans
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tight"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              KONA COFFEE
              <br />
              <span className="text-orange-400">DONUT?</span>
            </motion.h1>

            {/* Waikiki Location Emphasis */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-3xl md:text-4xl lg:text-5xl text-white font-black mb-2 tracking-tight">
                📍 WAIKIKI, HAWAII
              </p>
              <p className="text-xl md:text-2xl text-orange-300 font-bold">
                2142 Kalakaua Avenue
              </p>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-white font-medium mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <a
                href="#menu"
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold rounded-full shadow-2xl transition-all transform hover:scale-105"
              >
                {t('nav.menu')}
              </a>
              <a
                href="#location"
                className="px-8 py-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white text-xl font-bold rounded-full shadow-2xl transition-all border-2 border-white/50"
              >
                {t('nav.location')}
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Location Section - Clean & Simple */}
      <section id="location" className="py-16 md:py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              📍 Visit Us
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('location.address')} <br className="sm:hidden" />
              {t('location.city')}
            </motion.p>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <MapEmbed />
          </motion.div>

          {/* Directions Button */}
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

      {/* About Us Section - Epic Collaboration Story */}
      <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-white via-orange-50 to-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% auto' }}
            >
              {t('about.title')}
            </motion.h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>

          {/* Epic Collaboration Animation */}
          <div className="relative mb-20">
            {/* Connecting Line Animation */}
            <motion.div
              className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent -translate-y-1/2 z-0"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              viewport={{ once: true }}
            />

            {/* Energy Pulse */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-orange-400/20 blur-2xl z-0"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
              {/* MOCHILAND */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative inline-block mb-6"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full blur-xl opacity-50"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <Image
                    src="/icons/mochi_land_circle.png"
                    alt="MOCHILAND"
                    width={200}
                    height={200}
                    className="relative rounded-full shadow-2xl"
                  />
                </motion.div>
                <motion.h3
                  className="text-3xl md:text-4xl font-black text-orange-600 mb-2 font-righteous"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  MOCHILAND
                </motion.h3>
                <p className="text-lg text-gray-600 font-semibold">Artisan Mochi Donuts</p>
              </motion.div>

              {/* Center: Plus Symbol with Particles */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Orbiting Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-orange-400 rounded-full"
                    style={{
                      transformOrigin: '0 0',
                    }}
                    animate={{
                      rotate: [i * 45, i * 45 + 360],
                      x: [0, Math.cos((i * 45 * Math.PI) / 180) * 60],
                      y: [0, Math.sin((i * 45 * Math.PI) / 180) * 60],
                      opacity: [1, 0.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}

                <motion.div
                  className="text-8xl md:text-9xl font-black text-orange-500"
                  animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  +
                </motion.div>
                <motion.p
                  className="text-xl md:text-2xl font-bold text-orange-600 mt-4 font-righteous"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  PERFECT COMBINATION
                </motion.p>
              </motion.div>

              {/* HONOLULU COFFEE */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="relative inline-block mb-6"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-xl opacity-50"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <div className="relative bg-white rounded-full p-6 shadow-2xl w-[200px] h-[200px] flex items-center justify-center">
                    <Image
                      src="/icons/honolulu_coffee.webp"
                      alt="Honolulu Coffee"
                      width={160}
                      height={160}
                      className="object-contain"
                    />
                  </div>
                </motion.div>
                <motion.h3
                  className="text-3xl md:text-4xl font-black text-amber-600 mb-2 font-righteous"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                >
                  HONOLULU<br />COFFEE
                </motion.h3>
                <p className="text-lg text-gray-600 font-semibold">Premium Kona Beans</p>
              </motion.div>
            </div>
          </div>

          {/* Story Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Coffee & Donut Love Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="absolute -top-4 -left-4 text-8xl opacity-10"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ☕
              </motion.div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-orange-100">
                <h3 className="text-3xl font-bold text-orange-600 mb-4">
                  Coffee ☕ + Donut 🍩 = ❤️
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {t('about.coffeeDonutStory')}
                </p>
                <motion.div
                  className="text-6xl text-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🤝
                </motion.div>
              </div>
            </motion.div>

            {/* Kona Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="absolute -top-4 -right-4 text-8xl opacity-10"
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🍩
              </motion.div>
              <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-xl border border-orange-200">
                <h3 className="text-3xl font-bold text-amber-700 mb-4">
                  The Kona Difference
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {t('about.konaStory')}
                </p>
                <motion.div
                  className="flex justify-center gap-4 text-4xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🌺 🏝️ ☀️
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Animated Background Shapes */}
            <motion.div
              className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
              transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            />

            <div className="relative z-10">
              <motion.h3
                className="text-4xl md:text-5xl font-black text-white mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {t('about.ctaTitle')}
              </motion.h3>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                {t('about.ctaText')}
              </p>
              <motion.a
                href="#location"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-orange-600 font-black text-xl px-12 py-5 rounded-full shadow-2xl hover:shadow-orange-300/50 transition-all"
              >
                {t('about.visitButton')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div className="flex flex-col items-start">
              <Image
                src="/konacoffee.png"
                alt="Kona Coffee Donut"
                width={300}
                height={50}
                className="h-10 md:h-12 w-auto mb-2 brightness-0 invert"
              />
              <p className="text-white/60 text-sm md:text-base">{t('footer.tagline')}</p>
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
                src="/icons/honolulu_coffee.webp"
                alt="Honolulu Coffee"
                width={80}
                height={64}
                className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/icons/mochi_land_circle.png"
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
