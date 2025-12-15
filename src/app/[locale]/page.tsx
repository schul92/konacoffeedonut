'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import HiringModal from '@/components/HiringModal';

// Dynamic imports for heavy components to improve initial page load
// These components are below the fold and can be loaded lazily
const MapEmbed = dynamic(() => import('@/components/MapEmbed'), {
  loading: () => (
    <div className="w-full h-[400px] md:h-[600px] rounded-2xl bg-gray-200 animate-pulse flex items-center justify-center">
      <div className="text-gray-400 text-lg">Loading map...</div>
    </div>
  ),
  ssr: false, // Map requires client-side only
});

const MenuSection = dynamic(() => import('@/components/MenuSection'), {
  loading: () => (
    <div className="py-20 md:py-32 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="h-16 bg-gray-200 animate-pulse rounded-lg mx-auto max-w-md mb-4"></div>
          <div className="h-8 bg-gray-100 animate-pulse rounded-lg mx-auto max-w-lg"></div>
        </div>
      </div>
    </div>
  ),
  ssr: false, // Menu section has videos and client-side interactions
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        rafId = null;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
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

  // Handle video end - switch to video 2 and loop it with smooth transition
  const handleVideoEnd = () => {
    if (currentVideo === 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideo(2);
        setTimeout(() => setIsTransitioning(false), 100);
      }, 300);
    }
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    const videos = document.querySelectorAll('video') as NodeListOf<HTMLVideoElement>;
    videos.forEach(video => {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    });
    setIsPlaying(!isPlaying);

    // Track video interaction
    if (typeof window !== 'undefined' && window.trackEvent) {
      window.trackEvent('video_interaction', {
        action: isPlaying ? 'pause' : 'play',
        video_id: `waikiki_${currentVideo}`,
        location: 'hero_section',
      });
    }
  };

  // Switch between videos manually with smooth transition
  const switchVideo = (videoNumber: number) => {
    if (videoNumber === currentVideo) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentVideo(videoNumber);
      setIsPlaying(true);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 300);

    // Track video switch
    if (typeof window !== 'undefined' && window.trackEvent) {
      window.trackEvent('video_switch', {
        from_video: currentVideo,
        to_video: videoNumber,
        method: 'manual',
      });
    }
  };

  // Get video-specific content
  const getVideoContent = () => {
    if (currentVideo === 1) {
      return {
        title: "Waikiki, Hawaii",
        description: "Where Aloha Meets Artisan Craftsmanship"
      };
    } else {
      return {
        title: "Paradise Awaits",
        description: "Premium Kona Coffee × Artisan Mochi Donuts"
      };
    }
  };

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hiring Modal */}
      <HiringModal locale={locale} />

      {/* Navigation - Responsive (top-10 accounts for hiring banner height) */}
      <nav className="fixed top-10 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-between items-center gap-2">
            {/* Hamburger Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-900 p-2 flex-shrink-0"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Center Logo */}
            <button
              onClick={scrollToTop}
              className="flex-1 flex justify-center min-w-0"
            >
              <Image
                src="/konacoffee.webp"
                alt="Kona Coffee Donut"
                width={200}
                height={21}
                sizes="200px"
                priority
                fetchPriority="high"
                className="h-7 w-auto max-w-full"
              />
            </button>

            {/* Language Switcher */}
            <div className="flex-shrink-0">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:grid grid-cols-3 items-center">
            {/* Left: Menu & About Links */}
            <div className="flex gap-6 lg:gap-8 text-sm lg:text-base">
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                  if (typeof window !== 'undefined' && window.trackEvent) {
                    window.trackEvent('navigation_click', { section: 'menu', device: 'desktop' });
                  }
                }}
                className="relative text-gray-900 font-semibold transition-colors cursor-pointer group px-3 py-2 -mx-3 -my-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 group-hover:text-orange-500 transition-colors select-none">
                  Menu
                </span>
                <motion.div
                  className="absolute inset-0 bg-orange-50 rounded-lg -z-0"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ originX: 0 }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
                  if (typeof window !== 'undefined' && window.trackEvent) {
                    window.trackEvent('navigation_click', { section: 'location', device: 'desktop' });
                  }
                }}
                className="relative text-gray-900 font-semibold transition-colors cursor-pointer group px-3 py-2 -mx-3 -my-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 group-hover:text-orange-500 transition-colors select-none">
                  Location
                </span>
                <motion.div
                  className="absolute inset-0 bg-orange-50 rounded-lg -z-0"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ originX: 0 }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  if (typeof window !== 'undefined' && window.trackEvent) {
                    window.trackEvent('navigation_click', { section: 'about', device: 'desktop' });
                  }
                }}
                className="relative text-gray-900 font-semibold transition-colors cursor-pointer group px-3 py-2 -mx-3 -my-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 group-hover:text-orange-500 transition-colors select-none">
                  About
                </span>
                <motion.div
                  className="absolute inset-0 bg-orange-50 rounded-lg -z-0"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ originX: 0 }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
              <Link
                href={`/${locale}/careers`}
                className="relative text-gray-900 font-semibold transition-colors cursor-pointer group px-3 py-2 -mx-3 -my-2 rounded-lg flex items-center gap-1.5 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 group-hover:text-orange-500 transition-colors select-none">
                  Careers
                </span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              </Link>
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
                    src="/konacoffee.webp"
                    alt="Kona Coffee Donut"
                    width={450}
                    height={48}
                    sizes="(max-width: 768px) 300px, 450px"
                    priority
                    fetchPriority="high"
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

            {/* Right: Language Switcher */}
            <div className="flex justify-end">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-3 space-y-1">
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                  if (typeof window !== 'undefined' && window.trackEvent) {
                    window.trackEvent('navigation_click', { section: 'menu', device: 'mobile' });
                  }
                  setMenuOpen(false);
                }}
                className="relative block py-3 px-4 text-left w-full text-gray-900 font-semibold rounded-lg transition-all cursor-pointer group overflow-hidden"
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-orange-50"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 group-hover:text-orange-500 transition-colors select-none">
                  Menu
                </span>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
                  if (typeof window !== 'undefined' && window.trackEvent) {
                    window.trackEvent('navigation_click', { section: 'location', device: 'mobile' });
                  }
                  setMenuOpen(false);
                }}
                className="relative block py-3 px-4 text-left w-full text-gray-900 font-semibold rounded-lg transition-all cursor-pointer group overflow-hidden"
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-orange-50"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 group-hover:text-orange-500 transition-colors select-none">
                  Location
                </span>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  if (typeof window !== 'undefined' && window.trackEvent) {
                    window.trackEvent('navigation_click', { section: 'about', device: 'mobile' });
                  }
                  setMenuOpen(false);
                }}
                className="relative block py-3 px-4 text-left w-full text-gray-900 font-semibold rounded-lg transition-all cursor-pointer group overflow-hidden"
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-orange-50"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 group-hover:text-orange-500 transition-colors select-none">
                  About
                </span>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
              <Link
                href={`/${locale}/careers`}
                onClick={() => setMenuOpen(false)}
                className="relative block py-3 px-4 text-left w-full text-gray-900 font-semibold rounded-lg transition-all cursor-pointer group overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-green-50"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 group-hover:text-green-600 transition-colors select-none flex items-center gap-2">
                  Careers
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                </span>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section - pt-28 accounts for hiring banner (40px) + navbar */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 md:pt-36 lg:pt-44 pb-16 md:pb-20 gap-4 md:gap-6 lg:gap-10">
        {/* Gradient Background - Beach/Ocean Theme */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-100 via-blue-50 to-amber-50"></div>

        {/* Full Background Image Frame - Covers entire hero area */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/images/background/background.webp"
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Coming Soon Badge - Emphasized */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative z-10 mx-4"
        >
          <motion.div
            className="inline-flex items-center gap-2 md:gap-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 md:px-7 md:py-3 rounded-full font-bold text-sm md:text-base tracking-widest shadow-xl border-2 border-white/30"
            animate={{
              boxShadow: [
                "0 4px 20px rgba(251, 146, 60, 0.4)",
                "0 4px 30px rgba(251, 146, 60, 0.6)",
                "0 4px 20px rgba(251, 146, 60, 0.4)",
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full animate-pulse"></span>
            COMING SOON
          </motion.div>
        </motion.div>

        {/* Collaboration Container with Enhanced Fusion Effect */}
        <div className="relative z-10 flex flex-col items-center gap-0">
          {/* Honolulu Coffee Badge */}
          <motion.div
            className="relative inline-flex items-center gap-2 md:gap-3 bg-white/90 backdrop-blur-lg px-1.5 py-1.5 md:px-3 md:py-3 rounded-lg md:rounded-2xl border-2 border-white shadow-xl mx-auto w-[190px] md:w-[350px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)",
              borderColor: "rgba(251, 146, 60, 0.5)",
            }}
            transition={{
              opacity: { delay: 0.3, duration: 0.6 },
              y: { delay: 0.3, duration: 0.6 },
              scale: { duration: 0.3 },
              boxShadow: { duration: 0.3 }
            }}
          >
            {/* Logo with Glow Effect */}
            <motion.div
              className="relative w-8 h-8 md:w-16 md:h-16 flex-shrink-0 bg-white rounded-md md:rounded-xl p-0.5 md:p-2 shadow-lg"
              animate={{
                boxShadow: [
                  "0 5px 15px rgba(251, 146, 60, 0.3)",
                  "0 8px 25px rgba(251, 146, 60, 0.5)",
                  "0 5px 15px rgba(251, 146, 60, 0.3)",
                ]
              }}
              whileHover={{
                rotate: [0, -5, 5, -5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                rotate: { duration: 0.5 }
              }}
            >
              <Image
                src="/icons/honolulu_coffee.png"
                alt="Honolulu Coffee"
                fill
                sizes="64px"
                priority
                className="object-contain p-0.5"
              />
            </motion.div>

            {/* Text Content */}
            <div className="text-left">
              <p className="text-gray-600 font-medium text-[8px] md:text-sm mb-0 md:mb-0.5 tracking-wide">
                PROUDLY SERVING
              </p>
              <p className="font-black text-xs md:text-2xl tracking-tight leading-tight text-orange-500">
                <motion.span
                  animate={{
                    scale: [1, 1.05, 1],
                    filter: [
                      "drop-shadow(0 0 0px rgba(251, 146, 60, 0))",
                      "drop-shadow(0 0 4px rgba(251, 146, 60, 0.6))",
                      "drop-shadow(0 0 0px rgba(251, 146, 60, 0))",
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ display: 'inline-block' }}
                  className="text-orange-500"
                >
                  HONOLULU
                </motion.span>{' '}
                <span>COFFEE</span>
              </p>
              <p className="text-orange-500 font-semibold text-[8px] md:text-sm">
                Premium Kona Coffee
              </p>
            </div>
          </motion.div>

          {/* Enhanced Fusion Animation - Connecting Element */}
          <div className="relative w-full h-6 md:h-8 flex items-center justify-center my-1">
            {/* Animated Gradient Line */}
            <motion.div
              className="absolute w-px h-full bg-gradient-to-b from-orange-400 via-pink-400 to-pink-500"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: 1,
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                scaleY: { delay: 0.6, duration: 0.4 },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* Multiple Flowing Particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"
                animate={{
                  y: ['-50%', '50%'],
                  opacity: [0, 1, 0],
                  scale: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4 + 0.7,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Modern × Symbol with Enhanced Glassmorphism */}
            <motion.div
              className="relative z-10 bg-white/90 backdrop-blur-md rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center shadow-lg border border-white/60"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                y: [0, -2, 0]
              }}
              whileHover={{
                scale: 1.3,
                borderColor: "rgba(251, 146, 60, 0.6)",
                boxShadow: "0 8px 30px rgba(251, 146, 60, 0.4)"
              }}
              transition={{
                scale: { delay: 0.7, duration: 0.4, type: 'spring', stiffness: 200 },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {/* Enhanced Pulse Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-300/40 to-pink-300/40"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.span
                className="relative text-sm md:text-lg font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.15, 1]
                }}
                transition={{
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                ×
              </motion.span>
            </motion.div>

            {/* Dual Energy Rings with Stagger */}
            <motion.div
              className="absolute w-8 h-8 md:w-12 md:h-12 border border-orange-300/25 rounded-full"
              animate={{
                scale: [1, 1.4],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            <motion.div
              className="absolute w-8 h-8 md:w-12 md:h-12 border border-pink-300/25 rounded-full"
              animate={{
                scale: [1, 1.4],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1
              }}
            />
          </div>

          {/* Mochiland × Bonepi Collaboration Badge */}
          <motion.div
            className="relative inline-flex items-center gap-2 md:gap-3 bg-white/90 backdrop-blur-lg px-1.5 py-1.5 md:px-3 md:py-3 rounded-lg md:rounded-2xl border-2 border-white shadow-xl mx-auto w-[190px] md:w-[350px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)",
              borderColor: "rgba(236, 72, 153, 0.5)",
            }}
            transition={{
              opacity: { delay: 0.5, duration: 0.6 },
              y: { delay: 0.5, duration: 0.6 },
              scale: { duration: 0.3 },
              boxShadow: { duration: 0.3 }
            }}
          >
          {/* Bonepi Logo with Glow Effect */}
          <motion.div
            className="relative w-8 h-8 md:w-16 md:h-16 flex-shrink-0 bg-white rounded-md md:rounded-xl p-0.5 md:p-2 shadow-lg overflow-hidden"
            animate={{
              boxShadow: [
                "0 5px 15px rgba(236, 72, 153, 0.3)",
                "0 8px 25px rgba(236, 72, 153, 0.5)",
                "0 5px 15px rgba(236, 72, 153, 0.3)",
              ]
            }}
            whileHover={{
              rotate: [0, -5, 5, -5, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
              rotate: { duration: 0.5 }
            }}
          >
            <Image
              src="/icons/bonepi.jpeg"
              alt="Bonepi"
              fill
              sizes="64px"
              priority
              className="object-cover rounded"
            />
          </motion.div>

          {/* Text Content */}
          <div className="text-left">
            <p className="text-gray-600 font-medium text-[8px] md:text-sm mb-0 md:mb-0.5 tracking-wide">
              COLLABORATION WITH
            </p>
            <div className="font-black text-xs md:text-2xl tracking-tight leading-tight">
              <motion.span
                animate={{
                  scale: [1, 1.05, 1],
                  filter: [
                    "drop-shadow(0 0 0px rgba(236, 72, 153, 0))",
                    "drop-shadow(0 0 4px rgba(236, 72, 153, 0.6))",
                    "drop-shadow(0 0 0px rgba(236, 72, 153, 0))",
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
                style={{ display: 'inline-block' }}
              >
                <Image
                  src="/icons/mochiland.png"
                  alt="MOCHILAND"
                  width={240}
                  height={60}
                  sizes="(max-width: 768px) 64px, 240px"
                  priority
                  className="h-4 md:h-8 w-auto inline-block"
                />
              </motion.span>
            </div>
            <p className="text-pink-500 font-semibold text-[8px] md:text-sm">
              Artisan Mochi Donuts
            </p>
          </div>
        </motion.div>
        </div>

        {/* Movie Theater Video Box - Smart Responsive Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="relative z-10 w-full max-w-6xl mx-auto px-2 sm:px-4"
        >
          {/* Desktop/Tablet: Single Video */}
          <div className="hidden sm:block relative aspect-video rounded-lg md:rounded-2xl overflow-hidden shadow-2xl border-4 border-black/10 w-full">
            {/* Cinema-style gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-10 pointer-events-none"></div>

            {/* Film grain effect */}
            <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none opacity-20" style={{ mixBlendMode: 'overlay' }}>
              <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
                <feColorMatrix type="saturate" values="0"/>
              </filter>
              <rect width="100%" height="100%" filter="url(#noise)"/>
            </svg>

            {/* Video with Fade Transition */}
            <motion.video
              key={currentVideo}
              initial={{ opacity: 0 }}
              animate={{ opacity: isTransitioning ? 0 : 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              autoPlay
              loop={currentVideo === 2}
              muted
              playsInline
              preload="metadata"
              onEnded={handleVideoEnd}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={`/videos/waikiki_${currentVideo}.mp4`} type="video/mp4" />
            </motion.video>

            {/* LIVE indicator with animated sound waves */}
            <div className="absolute top-4 left-4 z-30 flex items-center gap-2 bg-red-600 text-white px-3 py-1.5 rounded-full shadow-lg">
              <div className="flex gap-0.5 items-center">
                <motion.div
                  className="w-0.5 bg-white rounded-full"
                  animate={{ height: [4, 12, 4] }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="w-0.5 bg-white rounded-full"
                  animate={{ height: [8, 4, 8] }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                />
                <motion.div
                  className="w-0.5 bg-white rounded-full"
                  animate={{ height: [6, 10, 6] }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                />
              </div>
              <span className="text-xs font-black tracking-wider">LIVE</span>
            </div>

            {/* Bottom info bar */}
            <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/90 to-transparent p-6">
              <div className="flex items-end justify-between">
                <div className="flex-1">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2">{getVideoContent().title}</h3>
                  <p className="text-white/80 text-sm md:text-base">{getVideoContent().description}</p>
                </div>

                {/* Play/Pause Button - Bottom Right */}
                <button
                  onClick={togglePlayPause}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 mb-2"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
              </div>

              {/* Video Dots - Center Bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                <button
                  onClick={() => switchVideo(1)}
                  className="p-5 group"
                  aria-label="Play video 1"
                >
                  <span className={`block w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                    currentVideo === 1
                      ? 'bg-white scale-125'
                      : 'bg-white/50 group-hover:bg-white/70'
                  }`} />
                </button>
                <button
                  onClick={() => switchVideo(2)}
                  className="p-5 group"
                  aria-label="Play video 2"
                >
                  <span className={`block w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                    currentVideo === 2
                      ? 'bg-white scale-125'
                      : 'bg-white/50 group-hover:bg-white/70'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile: Split Screen Layout */}
          <div className="sm:hidden grid grid-rows-2 gap-3 w-full">
            {/* Top: Video with Special Border Effect */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl border-2 border-orange-500/30">
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20 animate-pulse"></div>

                {/* Cinema overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10 pointer-events-none"></div>

                {/* Video with Fade Transition */}
                <motion.video
                  key={currentVideo}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isTransitioning ? 0 : 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  autoPlay
                  loop={currentVideo === 2}
                  muted
                  playsInline
                  preload="metadata"
                  onEnded={handleVideoEnd}
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={`/videos/waikiki_${currentVideo}.mp4`} type="video/mp4" />
                </motion.video>

                {/* LIVE Badge */}
                <div className="absolute top-2 left-2 z-30 flex items-center gap-1.5 bg-red-600 text-white px-2 py-1 rounded-full shadow-lg">
                  <div className="flex gap-0.5 items-center">
                    <motion.div
                      className="w-0.5 bg-white rounded-full"
                      animate={{ height: [3, 8, 3] }}
                      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="w-0.5 bg-white rounded-full"
                      animate={{ height: [6, 3, 6] }}
                      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                    />
                    <motion.div
                      className="w-0.5 bg-white rounded-full"
                      animate={{ height: [4, 7, 4] }}
                      transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    />
                  </div>
                  <span className="text-[10px] font-black tracking-wider">LIVE</span>
                </div>
              </div>
            </motion.div>

            {/* Bottom: Controls Panel with Gradient Background */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="relative rounded-lg overflow-hidden"
            >
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 rounded-lg shadow-xl border border-orange-500/20">
                {/* Animated Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: '200% 100%' }}
                />

                <div className="relative z-10">
                  {/* Title */}
                  <h3 className="text-white text-lg font-bold mb-1">{getVideoContent().title}</h3>
                  <p className="text-orange-400 text-xs font-semibold mb-3">{getVideoContent().description}</p>

                  {/* Controls */}
                  <div className="flex items-center justify-between">
                    {/* Video Dots */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => switchVideo(1)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          currentVideo === 1
                            ? 'bg-orange-500 scale-125 shadow-lg shadow-orange-500/50'
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label="Play video 1"
                      />
                      <button
                        onClick={() => switchVideo(2)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          currentVideo === 2
                            ? 'bg-orange-500 scale-125 shadow-lg shadow-orange-500/50'
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label="Play video 2"
                      />
                    </div>

                    {/* Play/Pause Button */}
                    <button
                      onClick={togglePlayPause}
                      className="w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg shadow-orange-500/30"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? (
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-gray-600 rounded-full"
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
                    src="/icons/mochi_land_circle_original.png"
                    alt="MOCHILAND - Artisan Mochi Donuts from Waikiki"
                    width={200}
                    height={200}
                    sizes="200px"
                    loading="lazy"
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
                  <div className="relative w-[200px] h-[200px] flex items-center justify-center">
                    <Image
                      src="/icons/honolulu_coffee_original.webp"
                      alt="Honolulu Coffee - Premium Kona Coffee Beans from Hawaii"
                      width={200}
                      height={200}
                      sizes="200px"
                      loading="lazy"
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
                  className="flex justify-center gap-4 text-4xl mb-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🌺 🏝️ ☀️
                </motion.div>
                <Link
                  href={`/${locale}/about-kona-coffee`}
                  className="inline-block w-full text-center bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl"
                >
                  Learn More About Kona Coffee →
                </Link>
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
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            {/* Left: Logo + Instagram */}
            <div className="flex flex-col items-start">
              <Image
                src="/konacoffee.webp"
                alt="Kona Coffee Donut"
                width={300}
                height={32}
                sizes="(max-width: 768px) 200px, 300px"
                loading="lazy"
                className="h-10 md:h-12 w-auto mb-2 brightness-0 invert"
              />
              <p className="text-white/60 text-sm md:text-base mb-4">{t('footer.tagline')}</p>

              {/* Instagram Links - Compact */}
              <div className="flex flex-col gap-2">
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wider">Follow us</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://instagram.com/konacoffeedonut"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-full transition-all text-xs"
                    aria-label="Follow Kona Coffee Donut on Instagram"
                  >
                    <svg className="w-4 h-4 text-white/60 group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-white/70 group-hover:text-pink-400 transition-colors">@konacoffeedonut</span>
                  </a>
                </div>
                <p className="text-white/60 text-[10px] mt-1">MOCHILAND:</p>
                <div className="flex flex-wrap gap-1.5 items-center">
                  <a
                    href="https://instagram.com/mochinut_fortlee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 text-white/50 hover:text-pink-400 transition-colors text-xs"
                    aria-label="Follow Mochinut Fort Lee on Instagram"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @mochinut_fortlee
                  </a>
                  <span className="text-white/30">•</span>
                  <a
                    href="https://instagram.com/bonepi_mochiland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 text-white/50 hover:text-pink-400 transition-colors text-xs"
                    aria-label="Follow Bonepi Mochiland on Instagram"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @bonepi_mochiland
                  </a>
                  <span className="text-white/30">•</span>
                  <a
                    href="https://instagram.com/bonepi_mochiland_official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1 text-white/50 hover:text-pink-400 transition-colors text-xs"
                    aria-label="Follow Bonepi Mochiland Official on Instagram"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @bonepi_mochiland_official
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Navigation */}
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
                src="/icons/honolulu_coffee.png"
                alt="Honolulu Coffee"
                width={80}
                height={64}
                sizes="(max-width: 768px) 48px, 64px"
                loading="lazy"
                className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/icons/mochi_land_circle.png"
                alt="Mochiland"
                width={80}
                height={64}
                sizes="(max-width: 768px) 48px, 64px"
                loading="lazy"
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
