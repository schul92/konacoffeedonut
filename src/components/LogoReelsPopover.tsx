'use client';

import { useState, useRef, useCallback, ReactNode, useEffect } from 'react';
import { Instagram, Volume2, VolumeX, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

interface Reel {
  id: string;
  videoSrc?: string;
  imageSrc?: string;
  instagramUrl: string;
  caption?: string;
}

interface LogoReelsPopoverProps {
  children: ReactNode;
  reels: Reel[];
  username: string;
  profileUrl: string;
  brandName: string;
  brandColor?: string;
}

export default function LogoReelsPopover({
  children,
  reels,
  username,
  profileUrl,
  brandName,
  brandColor = 'from-purple-600 via-pink-500 to-orange-400',
}: LogoReelsPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mutedVideos, setMutedVideos] = useState<Record<string, boolean>>({});
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detect mobile/touch device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const updatePosition = useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const popoverWidth = 320;
      const popoverHeight = 450;

      // Calculate best position
      let top = rect.bottom + 10;
      let left = rect.left + (rect.width / 2) - (popoverWidth / 2);

      // Check if popover would go off-screen bottom
      if (top + popoverHeight > window.innerHeight) {
        top = rect.top - popoverHeight - 10;
      }

      // Check if popover would go off-screen left
      if (left < 10) {
        left = 10;
      }

      // Check if popover would go off-screen right
      if (left + popoverWidth > window.innerWidth - 10) {
        left = window.innerWidth - popoverWidth - 10;
      }

      setPopoverPosition({ top, left });
    }
  }, []);

  const playAllVideos = useCallback(() => {
    setTimeout(() => {
      Object.values(videoRefs.current).forEach(video => {
        if (video) {
          video.currentTime = 0;
          video.play().catch(() => {});
        }
      });
    }, 100);
  }, []);

  const pauseAllVideos = useCallback(() => {
    Object.values(videoRefs.current).forEach(video => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (isMobile) return; // Disable hover on mobile
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    updatePosition();
    setIsOpen(true);
    playAllVideos();
  }, [updatePosition, isMobile, playAllVideos]);

  const handleMouseLeave = useCallback(() => {
    if (isMobile) return; // Disable hover on mobile
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      pauseAllVideos();
    }, 300);
  }, [isMobile, pauseAllVideos]);

  const handleClick = useCallback(() => {
    if (!isMobile) return; // Only for mobile
    if (isOpen) {
      setIsOpen(false);
      pauseAllVideos();
    } else {
      updatePosition();
      setIsOpen(true);
      playAllVideos();
    }
  }, [isMobile, isOpen, updatePosition, playAllVideos, pauseAllVideos]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    pauseAllVideos();
  }, [pauseAllVideos]);

  const handlePopoverMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Resume playing all videos
    Object.values(videoRefs.current).forEach(video => {
      if (video && video.paused) {
        video.play().catch(() => {});
      }
    });
  }, []);

  // Videos auto-play when popover opens, no need for individual handlers
  // Keep them for potential future use but they don't pause on leave

  const toggleMute = useCallback((id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const video = videoRefs.current[id];
    if (video) {
      video.muted = !video.muted;
      setMutedVideos(prev => ({ ...prev, [id]: video.muted }));
    }
  }, []);

  const openInstagram = useCallback((url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  const popoverContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Mobile backdrop */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[9998]"
              onClick={handleClose}
            />
          )}

          <motion.div
            initial={isMobile
              ? { opacity: 0, y: '100%' }
              : { opacity: 0, scale: 0.9, y: -10 }
            }
            animate={isMobile
              ? { opacity: 1, y: 0 }
              : { opacity: 1, scale: 1, y: 0 }
            }
            exit={isMobile
              ? { opacity: 0, y: '100%' }
              : { opacity: 0, scale: 0.9, y: -10 }
            }
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={isMobile
              ? "fixed bottom-0 left-0 right-0 z-[9999] max-h-[85vh]"
              : "fixed z-[9999]"
            }
            style={isMobile ? undefined : { top: popoverPosition.top, left: popoverPosition.left }}
            onMouseEnter={handlePopoverMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`bg-white shadow-2xl border border-gray-100 overflow-hidden ${
              isMobile
                ? 'rounded-t-3xl w-full'
                : 'rounded-2xl w-[320px]'
            }`}>
              {/* Mobile drag handle */}
              {isMobile && (
                <div className="flex justify-center pt-3 pb-1">
                  <div className="w-10 h-1 bg-gray-300 rounded-full" />
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-r ${brandColor} p-4 ${isMobile ? 'px-5' : ''}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold">{brandName}</p>
                      <p className="text-white/80 text-xs">@{username}</p>
                    </div>
                  </div>
                  {isMobile && (
                    <button
                      onClick={handleClose}
                      className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    >
                      <X className="w-5 h-5 text-white" />
                    </button>
                  )}
                </div>
              </div>

              {/* Reels Grid */}
              <div className={`p-3 overflow-y-auto ${
                isMobile
                  ? 'max-h-[50vh] px-4'
                  : 'max-h-[300px]'
              } ${
                reels.length === 1
                  ? 'flex justify-center'
                  : 'grid grid-cols-2 gap-2'
              }`}>
                {reels.map((reel) => (
                  <div
                    key={reel.id}
                    className={`relative rounded-xl overflow-hidden cursor-pointer group bg-gray-100 ${
                      reels.length === 1
                        ? isMobile
                          ? 'w-full max-w-[200px] aspect-square'
                          : 'w-[200px] aspect-square'
                        : 'aspect-[9/16]'
                    }`}
                    onClick={(e) => openInstagram(reel.instagramUrl, e)}
                  >
                    {reel.imageSrc ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={reel.imageSrc}
                        alt={reel.caption || 'Instagram post'}
                        className="w-full h-full object-cover"
                      />
                    ) : reel.videoSrc ? (
                      <video
                        ref={(el) => { videoRefs.current[reel.id] = el; }}
                        src={reel.videoSrc}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      {!reel.imageSrc && (
                        <div className={`rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center transition-opacity ${
                          isMobile
                            ? 'w-12 h-12 opacity-100'
                            : reels.length === 1
                              ? 'w-14 h-14 opacity-0 group-hover:opacity-100'
                              : 'w-10 h-10 opacity-0 group-hover:opacity-100'
                        }`}>
                          <svg className={`text-white ml-0.5 ${isMobile ? 'w-6 h-6' : reels.length === 1 ? 'w-7 h-7' : 'w-5 h-5'}`} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    {reel.videoSrc && !reel.imageSrc && (
                      <button
                        onClick={(e) => toggleMute(reel.id, e)}
                        className={`absolute bottom-2 right-2 rounded-full bg-black/50 text-white transition-opacity hover:bg-black/70 ${
                          isMobile
                            ? 'p-2 opacity-100'
                            : reels.length === 1
                              ? 'p-2 opacity-0 group-hover:opacity-100'
                              : 'p-1.5 opacity-0 group-hover:opacity-100'
                        }`}
                      >
                        {mutedVideos[reel.id] === false ? (
                          <Volume2 className={isMobile ? 'w-4 h-4' : reels.length === 1 ? 'w-4 h-4' : 'w-3 h-3'} />
                        ) : (
                          <VolumeX className={isMobile ? 'w-4 h-4' : reels.length === 1 ? 'w-4 h-4' : 'w-3 h-3'} />
                        )}
                      </button>
                    )}
                    {reel.caption && (
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                        <p className={`text-white truncate ${isMobile ? 'text-xs' : reels.length === 1 ? 'text-sm' : 'text-[10px]'}`}>{reel.caption}</p>
                      </div>
                    )}
                    <div className={`absolute top-2 right-2 transition-opacity ${
                      isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      <ExternalLink className={`text-white drop-shadow-lg ${isMobile ? 'w-4 h-4' : reels.length === 1 ? 'w-5 h-5' : 'w-3.5 h-3.5'}`} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className={`border-t border-gray-100 p-3 ${isMobile ? 'px-4 pb-6' : ''}`}>
                <a
                  href={profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full bg-gradient-to-r ${brandColor} text-white rounded-xl font-medium hover:opacity-90 transition-opacity ${
                    isMobile ? 'py-3.5 text-base' : 'py-2.5 text-sm'
                  }`}
                >
                  <Instagram className={isMobile ? 'w-5 h-5' : 'w-4 h-4'} />
                  Follow @{username}
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <div
      ref={triggerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="cursor-pointer">
        {children}
      </div>
      {mounted && createPortal(popoverContent, document.body)}
    </div>
  );
}
