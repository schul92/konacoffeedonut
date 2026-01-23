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
import { BANNER_VISIBILITY_EVENT, isBannerVisible } from '@/components/HiringBanner';
import InstagramReels from '@/components/InstagramReels';
import LogoReelsPopover from '@/components/LogoReelsPopover';

// Instagram reels data for logo hovers
const mochilandReels = [
  {
    id: 'mochinut-reel-1',
    videoSrc: '/videos/reels/mochinut-reel-1.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DPwUyHjDhyu/',
    caption: 'Mochi Donuts Fresh',
  },
  {
    id: 'mochinut-reel-2',
    videoSrc: '/videos/reels/mochinut-reel-2.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DNGSUQYO6Y9/',
    caption: 'Artisan Mochi Donuts',
  },
];

const konaCoffeeReels = [
  {
    id: 'konacoffee-post-1',
    imageSrc: '/images/mochiland-collab.jpg',
    instagramUrl: 'https://www.instagram.com/reel/DTy-gseCQUw/',
    caption: 'Mochi Land x Honolulu Coffee',
  },
];

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
  const [isMuted, setIsMuted] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const t = useTranslations();
  const locale = useLocale();

  // Listen for banner visibility changes
  useEffect(() => {
    // Check initial state
    setBannerVisible(isBannerVisible());

    // Listen for changes
    const handleBannerChange = (e: CustomEvent<{ visible: boolean }>) => {
      setBannerVisible(e.detail.visible);
    };

    window.addEventListener(BANNER_VISIBILITY_EVENT, handleBannerChange as EventListener);
    return () => {
      window.removeEventListener(BANNER_VISIBILITY_EVENT, handleBannerChange as EventListener);
    };
  }, []);

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
        video_id: 'waikiki_1',
        location: 'hero_section',
      });
    }
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    const videos = document.querySelectorAll('video') as NodeListOf<HTMLVideoElement>;
    videos.forEach(video => {
      video.muted = !isMuted;
    });
    setIsMuted(!isMuted);
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
      {/* SEO H1 - Visually hidden but accessible to search engines */}
      <h1 className="sr-only">
        {t('hero.welcome')} - {t('hero.subtitle')}
      </h1>

      {/* Hiring Modal */}
      <HiringModal locale={locale} />

      {/* Navigation - Responsive (position adjusts based on banner visibility) */}
      <nav className={`fixed left-0 right-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 ${bannerVisible ? 'top-10' : 'top-0'}`}>
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

            {/* Right: Instagram & Language Switcher */}
            <div className="flex justify-end items-center gap-2">
              <InstagramReels />
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
              {/* Instagram Section */}
              <div className="mt-2 pt-2 border-t border-gray-100">
                <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                  <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Follow Us
                </p>
                <a
                  href="https://www.instagram.com/konacoffeedonut/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="relative block py-2.5 px-4 text-left w-full text-gray-900 font-semibold rounded-lg transition-all cursor-pointer group overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 group-hover:text-orange-600 transition-colors select-none flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </span>
                    <div>
                      <span className="block text-sm">@konacoffeedonut</span>
                      <span className="block text-[10px] text-gray-500 font-normal">Kona Coffee Donut</span>
                    </div>
                  </span>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/mochinut_fortlee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="relative block py-2.5 px-4 text-left w-full text-gray-900 font-semibold rounded-lg transition-all cursor-pointer group overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-50 via-rose-50 to-pink-50"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 group-hover:text-pink-600 transition-colors select-none flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </span>
                    <div>
                      <span className="block text-sm">@mochinut_fortlee</span>
                      <span className="block text-[10px] text-gray-500 font-normal">Mochiland</span>
                    </div>
                  </span>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section - padding adjusts based on banner visibility */}
      <section className={`relative min-h-[100svh] sm:min-h-screen flex flex-col items-center justify-start sm:justify-center overflow-hidden pb-8 sm:pb-16 md:pb-20 gap-3 sm:gap-4 md:gap-6 lg:gap-10 transition-all duration-300 ${bannerVisible ? 'pt-36 sm:pt-28 md:pt-36 lg:pt-44' : 'pt-24 sm:pt-20 md:pt-28 lg:pt-36'}`}>
        {/* Gradient Background - Beach/Ocean Theme */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-sky-100 via-blue-50 to-amber-50"></div>

        {/* Full Background Image Frame - Covers entire hero area */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/images/background/waikiki-illustrated.png"
            alt="Illustrated Waikiki Beach scene with palm trees, pink flowers, and Diamond Head - Kona Coffee Donut Hawaiian cafe"
            fill
            sizes="100vw"
            className="object-cover opacity-40"
            priority
          />
        </div>

        {/* Coming Soon Badge - Emphasized (Hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative z-10 mx-4 hidden sm:block"
        >
          <motion.div
            className="inline-flex items-center gap-1.5 sm:gap-2 md:gap-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-7 md:py-3 rounded-full font-bold text-xs sm:text-sm md:text-base tracking-widest shadow-xl border-2 border-white/30"
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

        {/* Brand Badges Container - Hidden on mobile for cleaner layout */}
        <div className="relative z-10 hidden sm:flex flex-col items-center gap-3">
          {/* Mochiland Badge - FIRST */}
          <LogoReelsPopover
            reels={mochilandReels}
            username="mochinut_fortlee"
            profileUrl="https://www.instagram.com/mochinut_fortlee/"
            brandName="Mochiland"
            brandColor="from-pink-500 via-rose-500 to-pink-600"
          >
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
                opacity: { delay: 0.3, duration: 0.6 },
                y: { delay: 0.3, duration: 0.6 },
                scale: { duration: 0.3 },
                boxShadow: { duration: 0.3 }
              }}
            >
              {/* Logo with Glow Effect */}
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
                  PROUDLY SERVING
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
                      ease: "easeInOut"
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
          </LogoReelsPopover>

          {/* Honolulu Coffee Badge - SECOND */}
          <LogoReelsPopover
            reels={konaCoffeeReels}
            username="konacoffeedonut"
            profileUrl="https://www.instagram.com/konacoffeedonut/"
            brandName="Kona Coffee Donut"
            brandColor="from-amber-600 via-orange-500 to-amber-600"
          >
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
                opacity: { delay: 0.5, duration: 0.6 },
                y: { delay: 0.5, duration: 0.6 },
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
                  delay: 0.5,
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
                      ease: "easeInOut",
                      delay: 0.3
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
          </LogoReelsPopover>
        </div>

        {/* Movie Theater Video Box - Smart Responsive Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="relative z-10 w-full max-w-6xl mx-auto px-4"
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/waikiki_1.mp4" type="video/mp4" />
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

                {/* Video Controls - Bottom Right */}
                <div className="flex items-center gap-2 mb-2">
                  {/* Mute/Unmute Button */}
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? (
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                      </svg>
                    )}
                  </button>
                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlayPause}
                    className="w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200"
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
              </div>
            </div>
          </div>

          {/* Mobile: Full-width Video with Controls Below */}
          <div className="sm:hidden w-full flex-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full"
            >
              {/* Video Container - Full width, no cropping */}
              <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black">
                {/* Video */}
                <video
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                  className="w-full h-auto"
                >
                  <source src="/videos/waikiki_1.mp4" type="video/mp4" />
                </video>

                {/* LIVE Badge - Top Left */}
                <div className="absolute top-3 left-3 z-30 flex items-center gap-1.5 bg-red-600 text-white px-2.5 py-1 rounded-full">
                  <div className="flex gap-0.5 items-center">
                    <motion.div className="w-0.5 bg-white rounded-full" animate={{ height: [3, 8, 3] }} transition={{ duration: 0.6, repeat: Infinity }} />
                    <motion.div className="w-0.5 bg-white rounded-full" animate={{ height: [6, 3, 6] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.1 }} />
                    <motion.div className="w-0.5 bg-white rounded-full" animate={{ height: [4, 7, 4] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                  </div>
                  <span className="text-[10px] font-black tracking-wider">LIVE</span>
                </div>
              </div>

              {/* Styled Info Card Below Video */}
              <div className="mt-3">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-3 border border-orange-200/50 shadow-sm">
                  <div className="flex items-center justify-between">
                    {/* Location Info */}
                    <div className="flex items-center gap-2.5">
                      {/* Location Pin Icon */}
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-gray-900 text-sm font-bold leading-tight">{getVideoContent().title}</h3>
                        <p className="text-orange-600 text-[11px] font-semibold">{getVideoContent().description}</p>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={toggleMute}
                        className="w-8 h-8 bg-white hover:bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center transition-colors shadow-sm"
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? (
                          <svg className="w-3.5 h-3.5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                          </svg>
                        ) : (
                          <svg className="w-3.5 h-3.5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                          </svg>
                        )}
                      </button>
                      <button
                        onClick={togglePlayPause}
                        className="w-8 h-8 bg-white hover:bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center transition-colors shadow-sm"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? (
                          <svg className="w-3.5 h-3.5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                          </svg>
                        ) : (
                          <svg className="w-3.5 h-3.5 text-gray-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile: Coming Soon + Brand Badges */}
              <div className="mt-4 space-y-3">
                {/* Coming Soon Badge */}
                <motion.div
                  className="flex justify-center"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full font-bold text-xs tracking-widest shadow-lg border-2 border-white/30">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    COMING SOON
                  </div>
                </motion.div>

                {/* Brand Badges */}
                <div className="flex justify-center gap-3">
                  {/* Mochiland */}
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl border border-pink-200/50 shadow-sm">
                    <div className="w-8 h-8 relative rounded-lg overflow-hidden">
                      <Image
                        src="/icons/bonepi.jpeg"
                        alt="Mochiland"
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-medium leading-tight">PROUDLY SERVING</p>
                      <Image
                        src="/icons/mochiland.png"
                        alt="MOCHILAND"
                        width={60}
                        height={16}
                        className="h-3.5 w-auto"
                      />
                    </div>
                  </div>

                  {/* Honolulu Coffee */}
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl border border-orange-200/50 shadow-sm">
                    <div className="w-8 h-8 relative">
                      <Image
                        src="/icons/honolulu_coffee.png"
                        alt="Honolulu Coffee"
                        fill
                        sizes="32px"
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-medium leading-tight">PROUDLY SERVING</p>
                      <p className="text-[11px] font-black text-orange-600 leading-tight">HONOLULU COFFEE</p>
                    </div>
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

      {/* About Us Section */}
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

            {/* GEO: Entity Introduction Block with Citations & Data (CITABLE framework) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="entity-intro mt-8 p-6 bg-amber-50/80 rounded-2xl border border-amber-200/50 max-w-4xl mx-auto"
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              {/* Hidden semantic data for AI */}
              <meta itemProp="name" content="Kona Coffee Donut" />
              <meta itemProp="address" content="2142 Kalakaua Ave, Honolulu, HI 96815" />
              <meta itemProp="geo" content="21.2793,-157.8294" />
              <meta itemProp="priceRange" content="$$" />

              <article className="space-y-4 text-amber-900/80 text-base md:text-lg leading-relaxed">
                {locale === 'ja' ? (
                  <>
                    <p><strong>Kona Coffee Donut</strong>は、ハワイ州ホノルルのワイキキ、<span itemProp="address">カラカウア通り2142番地（郵便番号96815）</span>に位置するハワイアンカフェ＆ベーカリーです。<strong>2026年2月グランドオープン予定</strong>。ワイキキビーチから<strong>徒歩約5分（400メートル）</strong>の好立地です。</p>
                    <p>当店は<strong>ホノルルコーヒー</strong>（1992年創業、ハワイ最大のコナコーヒー専門店）と提携し、<strong>100%純粋コナコーヒー</strong>を提供します。コナコーヒーはハワイ島のマウナロア山とフアラライ山の斜面（標高500〜900メートル）で栽培され、世界のコーヒー生産量の<strong>わずか1%未満</strong>を占める希少な豆です。</p>
                    <p>また、<strong>MOCHILAND</strong>（韓国発祥、米国で50店舗以上展開）の職人技モチドーナツを提供。米粉（もち粉）を使用した独特のもちもち食感が特徴で、<strong>毎日店内で手作り</strong>しています。</p>
                  </>
                ) : locale === 'ko' ? (
                  <>
                    <p><strong>Kona Coffee Donut</strong>은 하와이 호놀룰루 와이키키 <span itemProp="address">칼라카우아 애비뉴 2142번지(우편번호 96815)</span>에 위치한 하와이안 카페 & 베이커리입니다. <strong>2026년 2월 그랜드 오픈 예정</strong>. 와이키키 비치에서 <strong>도보 약 5분(400m)</strong> 거리의 최적 위치입니다.</p>
                    <p>저희는 <strong>호놀룰루 커피</strong>(1992년 설립, 하와이 최대 코나 커피 전문점)와 제휴하여 <strong>100% 순수 코나 커피</strong>를 제공합니다. 코나 커피는 하와이 빅 아일랜드의 마우나 로아 산과 후알라라이 산 경사면(해발 500~900m)에서 재배되며, 전 세계 커피 생산량의 <strong>1% 미만</strong>을 차지하는 희귀한 원두입니다.</p>
                    <p>또한 <strong>모찌랜드</strong>(한국 발상, 미국 50개 이상 매장 운영)의 장인 모찌 도넛을 제공합니다. 쌀가루(모찌코)를 사용한 독특한 쫄깃한 식감이 특징이며 <strong>매일 매장에서 직접 제조</strong>합니다.</p>
                  </>
                ) : locale === 'zh' ? (
                  <>
                    <p><strong>Kona Coffee Donut</strong>是一家位于夏威夷檀香山威基基<span itemProp="address">卡拉卡瓦大道2142号（邮编96815）</span>的夏威夷咖啡馆和面包店。<strong>2026年2月盛大开业</strong>。距威基基海滩<strong>步行约5分钟（400米）</strong>，位置优越。</p>
                    <p>我们与<strong>檀香山咖啡</strong>（1992年成立，夏威夷最大的科纳咖啡专营店）合作，提供<strong>100%纯正科纳咖啡</strong>。科纳咖啡种植于夏威夷大岛的冒纳罗亚山和胡阿拉莱山斜坡（海拔500-900米），仅占全球咖啡产量的<strong>不到1%</strong>，极为珍贵。</p>
                    <p>我们还提供<strong>MOCHILAND</strong>（源自韩国，在美国拥有50多家门店）的手工麻糬甜甜圈。采用糯米粉制作，口感独特Q弹，<strong>每天在店内新鲜制作</strong>。</p>
                  </>
                ) : locale === 'es' ? (
                  <>
                    <p><strong>Kona Coffee Donut</strong> es un café y panadería hawaiana ubicada en <span itemProp="address">2142 Kalakaua Ave, Honolulu, HI 96815</span>, Waikiki. <strong>Gran apertura en febrero de 2026</strong>. Ubicación privilegiada a <strong>solo 5 minutos a pie (400 metros)</strong> de la playa de Waikiki.</p>
                    <p>Nos asociamos con <strong>Honolulu Coffee</strong> (fundado en 1992, la cadena de café Kona más grande de Hawái) para servir <strong>café 100% Kona puro</strong>. El café Kona se cultiva en las laderas de Mauna Loa y Hualalai en la Isla Grande de Hawái (altitud 500-900m), representando <strong>menos del 1%</strong> de la producción mundial de café.</p>
                    <p>También servimos donuts de mochi artesanales de <strong>MOCHILAND</strong> (originario de Corea, con más de 50 ubicaciones en EE.UU.). Hechos con harina de arroz (mochiko) para una textura única y masticable, <strong>preparados frescos diariamente en la tienda</strong>.</p>
                  </>
                ) : (
                  <>
                    <p><strong>Kona Coffee Donut</strong> is a Hawaiian café and bakery located at <span itemProp="address">2142 Kalakaua Ave, Honolulu, HI 96815</span> in Waikiki. <strong>Grand opening February 2026</strong>. Prime location just <strong>5 minutes walking distance (400 meters)</strong> from Waikiki Beach.</p>
                    <p>We partner with <strong>Honolulu Coffee</strong> (established 1992, Hawaii&apos;s largest Kona coffee chain) to serve <strong>100% pure Kona coffee</strong>. Kona coffee is grown on the slopes of Mauna Loa and Hualalai volcanoes on Hawaii&apos;s Big Island (elevation 500-900 meters), representing <strong>less than 1%</strong> of worldwide coffee production according to the Kona Coffee Council.</p>
                    <p>We also serve artisan mochi donuts from <strong>MOCHILAND</strong> (originated in Korea, now with 50+ US locations). Made with rice flour (mochiko) for a unique chewy texture, <strong>freshly prepared daily in-store</strong>.</p>
                  </>
                )}
              </article>
            </motion.div>
          </motion.div>

          {/* Our Brands Section */}
          <div className="relative mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-600 mb-2">Our Brands</h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
              {/* MOCHILAND */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <LogoReelsPopover
                  reels={mochilandReels}
                  username="mochinut_fortlee"
                  profileUrl="https://www.instagram.com/mochinut_fortlee/"
                  brandName="Mochiland"
                  brandColor="from-pink-500 via-rose-500 to-pink-600"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
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
                      width={180}
                      height={180}
                      sizes="180px"
                      loading="lazy"
                      className="relative rounded-full shadow-2xl"
                    />
                  </motion.div>
                </LogoReelsPopover>
                <motion.h3
                  className="text-2xl md:text-3xl font-black text-orange-600 mb-2 font-righteous"
                >
                  MOCHILAND
                </motion.h3>
                <p className="text-base text-gray-600 font-semibold">Artisan Mochi Donuts</p>
              </motion.div>

              {/* HONOLULU COFFEE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <LogoReelsPopover
                  reels={konaCoffeeReels}
                  username="konacoffeedonut"
                  profileUrl="https://www.instagram.com/konacoffeedonut/"
                  brandName="Kona Coffee Donut"
                  brandColor="from-amber-600 via-orange-500 to-amber-600"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative inline-block mb-6"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-xl opacity-50"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <div className="relative w-[180px] h-[180px] flex items-center justify-center">
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
                </LogoReelsPopover>
                <motion.h3
                  className="text-2xl md:text-3xl font-black text-amber-600 mb-2 font-righteous"
                >
                  HONOLULU COFFEE
                </motion.h3>
                <p className="text-base text-gray-600 font-semibold">Premium Kona Beans</p>
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
          {/* Top: Two columns */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            {/* Left: Brand + Instagram */}
            <div className="flex flex-col gap-3">
              <Image
                src="/konacoffee.webp"
                alt="Kona Coffee Donut"
                width={250}
                height={32}
                sizes="250px"
                loading="lazy"
                className="h-8 md:h-10 w-auto brightness-0 invert"
              />
              <a
                href="https://instagram.com/konacoffeedonut"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-pink-400 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @konacoffeedonut
              </a>
            </div>

            {/* Right: Navigation */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#menu" className="opacity-60 hover:opacity-100 transition-opacity">{t('nav.menu')}</a>
              <a href="#about" className="opacity-60 hover:opacity-100 transition-opacity">{t('nav.about')}</a>
              <a href="#location" className="opacity-60 hover:opacity-100 transition-opacity">{t('nav.location')}</a>
              <Link href={`/${locale}/faq`} className="opacity-60 hover:opacity-100 transition-opacity">FAQ</Link>
              <Link href={`/${locale}/privacy-policy`} className="opacity-60 hover:opacity-100 transition-opacity">
                {locale === 'ja' ? 'プライバシー' : locale === 'ko' ? '개인정보' : locale === 'zh' ? '隐私政策' : locale === 'es' ? 'Privacidad' : 'Privacy'}
              </Link>
            </div>
          </div>

          {/* Bottom: Logo + Copyright */}
          <div className="pt-8 border-t border-white/10 flex flex-col items-center gap-4">
            <Image
              src="/icons/bonepi_hq.png"
              alt="Bonepi Mochiland"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full"
            />
            <p className="text-white/40 text-sm">{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
