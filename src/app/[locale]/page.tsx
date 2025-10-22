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
  const [currentVideo, setCurrentVideo] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
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
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent('video_interaction', {
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
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent('video_switch', {
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
      {/* Navigation - Responsive */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
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
                src="/konacoffee.png"
                alt="Kona Coffee Donut"
                width={200}
                height={33}
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
              <a
                href="#menu"
                className="text-gray-900 font-semibold hover:text-orange-500 transition-colors"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).trackEvent) {
                    (window as any).trackEvent('navigation_click', { section: 'menu', device: 'desktop' });
                  }
                }}
              >
                Menu
              </a>
              <a
                href="#location"
                className="text-gray-900 font-semibold hover:text-orange-500 transition-colors"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).trackEvent) {
                    (window as any).trackEvent('navigation_click', { section: 'location', device: 'desktop' });
                  }
                }}
              >
                Location
              </a>
              <a
                href="#about"
                className="text-gray-900 font-semibold hover:text-orange-500 transition-colors"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).trackEvent) {
                    (window as any).trackEvent('navigation_click', { section: 'about', device: 'desktop' });
                  }
                }}
              >
                About
              </a>
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
              <a
                href="#menu"
                className="block py-3 px-4 text-gray-900 font-semibold hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).trackEvent) {
                    (window as any).trackEvent('navigation_click', { section: 'menu', device: 'mobile' });
                  }
                  setMenuOpen(false);
                }}
              >
                Menu
              </a>
              <a
                href="#location"
                className="block py-3 px-4 text-gray-900 font-semibold hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).trackEvent) {
                    (window as any).trackEvent('navigation_click', { section: 'location', device: 'mobile' });
                  }
                  setMenuOpen(false);
                }}
              >
                Location
              </a>
              <a
                href="#about"
                className="block py-3 px-4 text-gray-900 font-semibold hover:bg-orange-50 hover:text-orange-500 rounded-lg transition-colors"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).trackEvent) {
                    (window as any).trackEvent('navigation_click', { section: 'about', device: 'mobile' });
                  }
                  setMenuOpen(false);
                }}
              >
                About
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-32 lg:pt-40 pb-16 md:pb-20 gap-4 md:gap-6 lg:gap-10">
        {/* Gradient Background - Beach/Ocean Theme */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-100 via-blue-50 to-amber-50"></div>

        {/* Full Background Image Frame - Covers entire hero area */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/images/background/background.jpg"
            alt="Background"
            fill
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

        {/* Honolulu Coffee Badge */}
        <motion.div
          className="relative z-10 inline-flex items-center gap-1.5 md:gap-4 bg-white/90 backdrop-blur-lg px-2.5 py-1.5 md:px-8 md:py-4 rounded-lg md:rounded-2xl border-2 border-white shadow-xl mx-4 max-w-[90vw]"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            opacity: { delay: 0.3, duration: 0.6 },
            y: { delay: 0.3, duration: 0.6 }
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
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/icons/honolulu_coffee.webp"
              alt="Honolulu Coffee"
              fill
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
              100% Premium Kona Beans
            </p>
          </div>
        </motion.div>

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
              preload="auto"
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
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5">
                <button
                  onClick={() => switchVideo(1)}
                  className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                    currentVideo === 1
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label="Play video 1"
                />
                <button
                  onClick={() => switchVideo(2)}
                  className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                    currentVideo === 2
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label="Play video 2"
                />
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
                  preload="auto"
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
                  <div className="relative w-[200px] h-[200px] flex items-center justify-center">
                    <Image
                      src="/icons/honolulu_coffee.webp"
                      alt="Honolulu Coffee"
                      width={200}
                      height={200}
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

          {/* Social Media */}
          <div className="pt-8 border-t border-white/10 flex justify-center">
            <a
              href="https://instagram.com/konacoffeedonut"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-105"
              aria-label="Follow us on Instagram"
            >
              <svg
                className="w-6 h-6 text-white group-hover:text-pink-400 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-white font-semibold group-hover:text-pink-400 transition-colors">
                @konacoffeedonut
              </span>
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 text-center opacity-40 text-sm">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
