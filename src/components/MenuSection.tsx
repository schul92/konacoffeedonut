'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ImageModal from './ImageModal';
import { Play } from 'lucide-react';

interface MenuItem {
  id: string;
  image: string;
  video?: string; // Optional video file path
  icon?: string;
  iconImage?: string;
}

const menuItems: MenuItem[] = [
  { id: 'donuts', image: '/images/menu/bingsu.png', video: '/videos/donut.mp4', iconImage: '/images/menu/mochi_land_circle.png' },
  { id: 'malasada', image: '/images/menu/bingsu.png', video: '/videos/malasada.mp4', iconImage: '/images/menu/malasada-icon.png' },
  { id: 'coffee', image: '/images/menu/coffee.png', video: '/videos/coffee.mp4', iconImage: '/images/menu/honolulu_coffee.webp' },
  { id: 'bingsu', image: '/images/menu/bingsu.png', video: '/videos/bingsu.mp4', icon: '🍧' },
  { id: 'hotdog', image: '/images/menu/bingsu.png', video: '/videos/hotdog.mp4', iconImage: '/images/menu/corndog-icon.png' },
  { id: 'smoothie', image: '/images/menu/smoothie.png', icon: '🥤' }, // No video yet - add smoothie.mp4 when ready
];

export default function MenuSection() {
  const t = useTranslations('menu');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{ url: string; title: string } | null>(null);
  const [playingVideos, setPlayingVideos] = useState<Record<string, boolean>>({});
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const openImage = (image: string, title: string) => {
    setCurrentImage({ url: image, title });
    setModalOpen(true);
  };

  // Auto-play videos when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoId = entry.target.getAttribute('data-video-id');
          if (videoId && videoRefs.current[videoId]) {
            if (entry.isIntersecting) {
              videoRefs.current[videoId]?.play();
              setPlayingVideos(prev => ({ ...prev, [videoId]: true }));
            } else {
              videoRefs.current[videoId]?.pause();
              setPlayingVideos(prev => ({ ...prev, [videoId]: false }));
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(videoRefs.current).forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" className="py-20 md:py-32 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">{t('title')}</h2>
          <p className="text-2xl md:text-3xl text-gray-600">{t('subtitle')}</p>
        </motion.div>

        {/* Menu Grid - 2x3 Layout - Movie Theater Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setSelectedItem(item.id)}
              onHoverEnd={() => setSelectedItem(null)}
              className="relative group"
            >
              <button
                onClick={() => openImage(item.image, t(`categories.${item.id}.name`))}
                className="w-full relative overflow-hidden rounded-2xl bg-black shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 aspect-[16/10] md:hover:scale-[1.02]"
              >
                {/* Video Background - Cinema Style - Auto-playing */}
                {item.video && (
                  <div className="absolute inset-0 z-0">
                    <video
                      ref={(el) => {
                        videoRefs.current[item.id] = el;
                      }}
                      data-video-id={item.id}
                      src={item.video}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {/* Cinematic Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
                  </div>
                )}

                {/* Fallback Image if no video */}
                {!item.video && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={item.image}
                      alt={t(`categories.${item.id}.name`)}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
                  </div>
                )}

                {/* Film Grain Effect */}
                <div className="absolute inset-0 z-[1] opacity-20 mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

                {/* Top Corner - Brand Logo */}
                <motion.div
                  className="absolute top-4 right-4 z-20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                >
                  {item.iconImage ? (
                    <div className="relative w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/20 shadow-xl">
                      <Image
                        src={item.iconImage}
                        alt={t(`categories.${item.id}.name`)}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  ) : (
                    <div className="text-3xl md:text-4xl bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/20 shadow-xl">
                      {item.icon}
                    </div>
                  )}
                </motion.div>

                {/* Bottom Info Bar - Cinema Style */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-4 md:p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {/* Category Name - Large & Bold */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 drop-shadow-2xl tracking-tight">
                      {t(`categories.${item.id}.name`)}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-white/90 drop-shadow-lg mb-4 line-clamp-2 font-medium">
                      {t(`categories.${item.id}.description`)}
                    </p>

                    {/* Action Button - Theater Style */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-3 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-full shadow-xl transition-all"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      <span className="text-white font-bold text-sm md:text-base">
                        {t('viewMenu')}
                      </span>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Playing Indicator */}
                {playingVideos[item.id] && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-red-600 rounded-full shadow-xl"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Now Playing</span>
                  </motion.div>
                )}

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none z-[2]"
                  initial={false}
                  animate={{
                    boxShadow: selectedItem === item.id
                      ? '0 0 60px rgba(251, 146, 60, 0.6) inset'
                      : '0 0 0px rgba(251, 146, 60, 0) inset'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg mb-6">
            Click any category to view the full menu
          </p>
        </motion.div>
      </div>

      {/* Image Modal */}
      {currentImage && (
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          imageUrl={currentImage.url}
          title={currentImage.title}
        />
      )}
    </section>
  );
}
