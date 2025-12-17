'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Instagram, Volume2, VolumeX, ExternalLink, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

interface Reel {
  id: string;
  videoSrc: string;
  instagramUrl: string;
  caption?: string;
}

interface AccountSection {
  username: string;
  profileUrl: string;
  brandName: string;
  brandColor: string;
  reels: Reel[];
}

// Both Instagram accounts with their reels
const instagramAccounts: AccountSection[] = [
  {
    username: 'mochinut_fortlee',
    profileUrl: 'https://www.instagram.com/mochinut_fortlee/',
    brandName: 'Mochiland',
    brandColor: 'from-pink-500 via-rose-500 to-pink-600',
    reels: [
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
    ],
  },
  {
    username: 'konacoffeedonut',
    profileUrl: 'https://www.instagram.com/konacoffeedonut/',
    brandName: 'Kona Coffee Donut',
    brandColor: 'from-amber-600 via-orange-500 to-amber-600',
    reels: [
      {
        id: 'konacoffee-reel-1',
        videoSrc: '/videos/reels/konacoffee-reel-1.mp4',
        instagramUrl: 'https://www.instagram.com/reel/DRivouBie_x/',
        caption: 'Premium Kona Coffee',
      },
    ],
  },
];

interface InstagramReelsProps {
  className?: string;
}

export default function InstagramReels({ className = '' }: InstagramReelsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mutedVideos, setMutedVideos] = useState<Record<string, boolean>>({});
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Autoplay all videos when dropdown opens
  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure videos are mounted
      const timer = setTimeout(() => {
        Object.values(videoRefs.current).forEach(video => {
          if (video) {
            video.currentTime = 0;
            video.play().catch(() => {});
          }
        });
      }, 100);
      return () => clearTimeout(timer);
    } else {
      // Pause all videos when closing
      Object.values(videoRefs.current).forEach(video => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    }
  }, [isOpen]);

  const handleMouseEnter = useCallback((id: string) => {
    const video = videoRefs.current[id];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }, []);

  const handleMouseLeave = useCallback((id: string) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }, []);

  const toggleMute = useCallback((id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (video) {
      video.muted = !video.muted;
      setMutedVideos(prev => ({ ...prev, [id]: video.muted }));
    }
  }, []);

  const openInstagram = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  const dropdownContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[9998] ${isMobile ? 'bg-black/50' : 'bg-transparent'}`}
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={isMobile
              ? { opacity: 0, y: '100%' }
              : { opacity: 0, y: -10, scale: 0.95 }
            }
            animate={isMobile
              ? { opacity: 1, y: 0 }
              : { opacity: 1, y: 0, scale: 1 }
            }
            exit={isMobile
              ? { opacity: 0, y: '100%' }
              : { opacity: 0, y: -10, scale: 0.95 }
            }
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onMouseLeave={() => !isMobile && setIsOpen(false)}
            className={isMobile
              ? "fixed bottom-0 left-0 right-0 z-[9999] max-h-[85vh]"
              : "fixed z-[9999]"
            }
            style={isMobile ? undefined : {
              top: 'calc(var(--navbar-height, 64px) + 8px)',
              right: '16px',
            }}
          >
            <div className={`bg-white shadow-2xl border border-gray-100 overflow-hidden ${
              isMobile
                ? 'rounded-t-3xl w-full'
                : 'rounded-2xl w-[340px]'
            }`}>
              {/* Mobile drag handle */}
              {isMobile && (
                <div className="flex justify-center pt-3 pb-1">
                  <div className="w-10 h-1 bg-gray-300 rounded-full" />
                </div>
              )}

              {/* Main Header */}
              <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Our Instagram</p>
                      <p className="text-white/80 text-xs">Latest Reels</p>
                    </div>
                  </div>
                  {isMobile && (
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                  )}
                </div>
              </div>

              {/* Account Sections */}
              <div className={`overflow-y-auto ${isMobile ? 'max-h-[60vh]' : 'max-h-[70vh]'}`}>
                {instagramAccounts.map((account, index) => (
                  <div key={account.username} className={index > 0 ? 'border-t-2 border-gray-100' : ''}>
                    {/* Account Header */}
                    <div className={`bg-gradient-to-r ${account.brandColor} px-4 py-3`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-semibold text-sm">{account.brandName}</p>
                          <p className="text-white/80 text-xs">@{account.username}</p>
                        </div>
                        <a
                          href={account.profileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`bg-white/20 hover:bg-white/30 rounded-full text-white font-medium transition-colors ${
                            isMobile ? 'px-4 py-2 text-sm' : 'px-3 py-1.5 text-xs'
                          }`}
                        >
                          Follow
                        </a>
                      </div>
                    </div>

                    {/* Reels Row */}
                    <div className={`grid gap-2 ${isMobile ? 'p-4' : 'p-2'} ${
                      account.reels.length === 1
                        ? 'grid-cols-1 justify-items-center'
                        : 'grid-cols-2'
                    }`}>
                      {account.reels.map((reel) => (
                        <div
                          key={reel.id}
                          className={`relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer group bg-gray-100 ${
                            account.reels.length === 1
                              ? isMobile ? 'w-[160px]' : 'w-[140px]'
                              : 'w-full'
                          }`}
                          onMouseEnter={() => !isMobile && handleMouseEnter(reel.id)}
                          onMouseLeave={() => !isMobile && handleMouseLeave(reel.id)}
                          onClick={() => openInstagram(reel.instagramUrl)}
                        >
                          <video
                            ref={(el) => { videoRefs.current[reel.id] = el; }}
                            src={reel.videoSrc}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            autoPlay={isMobile}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <div className={`rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center transition-opacity ${
                              isMobile
                                ? 'w-10 h-10 opacity-100'
                                : account.reels.length === 1
                                  ? 'w-10 h-10 opacity-0 group-hover:opacity-100'
                                  : 'w-8 h-8 opacity-0 group-hover:opacity-100'
                            }`}>
                              <svg className={`text-white ml-0.5 ${isMobile ? 'w-5 h-5' : account.reels.length === 1 ? 'w-5 h-5' : 'w-4 h-4'}`} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                          <button
                            onClick={(e) => toggleMute(reel.id, e)}
                            className={`absolute bottom-2 right-2 rounded-full bg-black/50 text-white transition-opacity hover:bg-black/70 ${
                              isMobile
                                ? 'p-1.5 opacity-100'
                                : 'p-1 opacity-0 group-hover:opacity-100'
                            }`}
                          >
                            {mutedVideos[reel.id] === false ? (
                              <Volume2 className={isMobile ? 'w-3.5 h-3.5' : 'w-2.5 h-2.5'} />
                            ) : (
                              <VolumeX className={isMobile ? 'w-3.5 h-3.5' : 'w-2.5 h-2.5'} />
                            )}
                          </button>
                          {reel.caption && (
                            <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-gradient-to-t from-black/60 to-transparent">
                              <p className={`text-white truncate ${isMobile ? 'text-[10px]' : 'text-[8px]'}`}>{reel.caption}</p>
                            </div>
                          )}
                          <div className={`absolute top-1.5 right-1.5 transition-opacity ${
                            isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                          }`}>
                            <ExternalLink className={`text-white drop-shadow-lg ${isMobile ? 'w-4 h-4' : 'w-3 h-3'}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div className={`relative ${className}`}>
      {/* Trigger Button - Just Instagram Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => !isMobile && setIsOpen(true)}
        className="flex items-center gap-1.5 px-2 py-2 rounded-lg hover:bg-amber-50 transition-colors group"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Instagram className="w-5 h-5 text-pink-600 group-hover:scale-110 transition-transform" />
        <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Panel - rendered via portal for mobile */}
      {mounted && createPortal(dropdownContent, document.body)}
    </div>
  );
}
