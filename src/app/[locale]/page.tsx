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
                className="relative cursor-pointer hover:opacity-80 transition-opacity focus:outline-none rounded h-12 w-[300px] flex items-center justify-center"
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
                    width={300}
                    height={50}
                    className="h-10 w-auto"
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

      {/* Location Section - Moved to Top */}
      <section id="location" className="pt-20 md:pt-24 pb-20 md:pb-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="text-center mb-16 relative overflow-visible py-12">
            {/* Animated Concentric Circles Background */}
            <motion.div
              className="absolute inset-0 -z-10 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-orange-200"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [1, 1.5 + i * 0.3],
                    opacity: [0.5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.6,
                    ease: "easeOut"
                  }}
                  style={{
                    width: '600px',
                    height: '600px',
                  }}
                />
              ))}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-100 to-transparent opacity-30"></div>
            </motion.div>

            {/* Sparkle Effects */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + (i % 2) * 60}%`,
                }}
                initial={{ scale: 0, rotate: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              >
                ✨
              </motion.div>
            ))}

            {/* Epic Badge with Multiple Animations */}
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.5
              }}
              className="inline-block mb-8 relative"
            >
              {/* Badge Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 20px 5px rgba(251, 146, 60, 0.6)',
                    '0 0 40px 10px rgba(251, 146, 60, 0.3)',
                    '0 0 20px 5px rgba(251, 146, 60, 0.6)',
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 shadow-2xl cursor-pointer"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  backgroundPosition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                <div className="flex items-center gap-3">
                  <motion.span
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-3 h-3 bg-white rounded-full shadow-lg"
                  ></motion.span>
                  <span className="text-base font-black tracking-widest uppercase text-white drop-shadow-lg">
                    {t('location.subtitle')}
                  </span>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="text-white text-xl"
                  >
                    ✨
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>

            {/* GRAND OPENING - Letter by Letter Animation */}
            <div className="mb-12 relative">
              <motion.h2
                className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter relative inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {t('location.title').split('').map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-amber-900 via-orange-600 to-red-700"
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{
                      scale: 1.2,
                      color: '#ea580c',
                      transition: { duration: 0.2 }
                    }}
                    style={{
                      display: char === ' ' ? 'inline' : 'inline-block',
                      textShadow: '0 4px 20px rgba(251, 146, 60, 0.5)',
                      perspective: '1000px',
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h2>

              {/* Animated Underline */}
              <motion.div
                className="absolute -bottom-4 left-0 right-0 mx-auto h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 1.5,
                  ease: "easeInOut"
                }}
              />

              {/* Floating Particles */}
              {[...Array(12)].map((_, i) => {
                // Deterministic positions based on index
                const positions = [
                  { left: 15, top: 20 },
                  { left: 85, top: 15 },
                  { left: 30, top: 80 },
                  { left: 70, top: 85 },
                  { left: 45, top: 30 },
                  { left: 55, top: 70 },
                  { left: 10, top: 50 },
                  { left: 90, top: 55 },
                  { left: 25, top: 40 },
                  { left: 75, top: 45 },
                  { left: 40, top: 65 },
                  { left: 60, top: 25 },
                ];
                return (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-orange-400 rounded-full"
                    style={{
                      left: `${positions[i].left}%`,
                      top: `${positions[i].top}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0]
                    }}
                    transition={{
                      duration: 2 + (i % 4) * 0.5,
                      repeat: Infinity,
                      delay: (i % 3) * 0.5,
                      ease: "easeInOut"
                    }}
                  />
                );
              })}
            </div>

            {/* Honolulu Coffee Feature Section */}
            <motion.div
              className="mb-12 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 2.2,
                type: "spring",
                bounce: 0.4
              }}
            >
              {/* Enhanced Glow Background with Multiple Layers */}
              <motion.div
                className="absolute inset-0 -z-10"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  scale: [0.95, 1.1, 0.95]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-amber-400 via-orange-400 to-transparent rounded-full blur-3xl opacity-40"></div>
              </motion.div>

              {/* Radiating Circles */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-amber-400 -z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [1, 2 + i * 0.5],
                    opacity: [0.6, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeOut"
                  }}
                  style={{
                    width: '400px',
                    height: '400px',
                  }}
                />
              ))}

              <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 px-8 py-10 rounded-3xl shadow-2xl border-2 border-orange-300 relative overflow-hidden max-w-3xl mx-auto">
                {/* Enhanced Animated Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  animate={{
                    boxShadow: [
                      '0 0 30px 4px rgba(251, 146, 60, 0.6)',
                      '0 0 60px 8px rgba(251, 146, 60, 1)',
                      '0 0 30px 4px rgba(251, 146, 60, 0.6)',
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Featured Badge - More Dynamic */}
                <motion.div
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-full mb-8 shadow-xl"
                  animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  <motion.span
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="text-xl"
                  >
                    ⭐
                  </motion.span>
                  <span className="text-sm font-black tracking-wider uppercase text-white drop-shadow-lg">
                    Featured Partnership
                  </span>
                  <motion.span
                    animate={{
                      rotate: [0, -360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.75 }
                    }}
                    className="text-xl"
                  >
                    ⭐
                  </motion.span>
                </motion.div>

                <motion.h3
                  className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-900 via-orange-600 to-amber-900 mb-6"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  Featuring Premium 100% Kona Coffee
                </motion.h3>

                {/* Honolulu Coffee Logo with MEGA Animation */}
                <div className="relative my-12">
                  {/* Multiple Glow Layers */}
                  <motion.div
                    className="absolute inset-0 -m-16 rounded-full bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 blur-3xl"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.4, 0.8, 0.4],
                      rotate: [0, 360]
                    }}
                    transition={{
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                    }}
                  />

                  {/* Spotlight Effect */}
                  <motion.div
                    className="absolute -inset-8 rounded-full"
                    animate={{
                      boxShadow: [
                        '0 0 40px 10px rgba(251, 191, 36, 0.6)',
                        '0 0 80px 20px rgba(251, 146, 60, 0.9)',
                        '0 0 40px 10px rgba(251, 191, 36, 0.6)',
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  <motion.div
                    className="relative inline-block"
                    initial={{ opacity: 0, scale: 0, rotateY: -180 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotateY: 0,
                    }}
                    transition={{
                      duration: 1.5,
                      delay: 2.5,
                      type: "spring",
                      bounce: 0.6
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.6 }
                    }}
                  >
                    {/* Animated Ring Around Logo */}
                    <motion.div
                      className="absolute -inset-4 rounded-3xl border-4 border-amber-400"
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                    />

                    <motion.div
                      className="relative bg-white p-8 md:p-10 rounded-3xl shadow-2xl"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Image
                          src="/images/menu/honolulu_coffee.webp"
                          alt="Honolulu Coffee - Hawaii's #1 Premium Kona Coffee"
                          width={300}
                          height={240}
                          className="h-28 md:h-36 w-auto object-contain"
                          priority
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Sparkle Effects Around Logo */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-3xl"
                      style={{
                        left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                        top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                      }}
                      animate={{
                        scale: [0, 1.5, 0],
                        rotate: [0, 180, 360],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    >
                      ✨
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  className="text-lg md:text-xl text-gray-800 font-bold mt-8 max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 3 }}
                >
                  Experience authentic <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 font-black">Hawaii&apos;s #1 Premium Kona Coffee</span> – now at Kona Coffee Donut!
                </motion.p>

                {/* Enhanced Floating Coffee Beans */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-4xl"
                    style={{
                      left: `${5 + i * 12}%`,
                      top: i % 2 === 0 ? '5%' : '85%',
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 180, 360],
                      opacity: [0.2, 0.7, 0.2],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 3 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    ☕
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Address with 3D Card Effect */}
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: 30, rotateX: 45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 2.8,
                type: "spring"
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              style={{ perspective: '1000px' }}
            >
              <div className="bg-gradient-to-br from-white to-orange-50 px-8 py-6 rounded-2xl shadow-xl border border-orange-100 backdrop-blur-sm">
                <motion.p
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                  animate={{
                    textShadow: [
                      '0 0 0px rgba(251, 146, 60, 0)',
                      '0 0 10px rgba(251, 146, 60, 0.5)',
                      '0 0 0px rgba(251, 146, 60, 0)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  📍 {t('location.address')}
                </motion.p>
                <p className="text-lg md:text-xl text-gray-600 font-medium">{t('location.city')}</p>
              </div>
            </motion.div>

            {/* Animated Coffee Cups - More Dynamic */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-5xl md:text-6xl opacity-10"
                style={{
                  left: i % 2 === 0 ? '-10%' : 'auto',
                  right: i % 2 === 1 ? '-10%' : 'auto',
                  top: `${20 + i * 20}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: i % 2 === 0 ? [0, 10, 0] : [0, -10, 0],
                  rotate: i % 2 === 0 ? [0, 10, 0] : [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              >
                ☕
              </motion.div>
            ))}
          </div>

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
                src="/images/menu/honolulu_coffee.webp"
                alt="Honolulu Coffee"
                width={80}
                height={64}
                className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/menu/mochi_land_circle.png"
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
