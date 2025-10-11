'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ImageModal from './ImageModal';

interface MenuItem {
  id: string;
  image: string;
  video?: string; // Optional video file path
  icon?: string;
  iconImage?: string;
}

const menuItems: MenuItem[] = [
  { id: 'donuts', image: '/bingsu.png', video: '/videos/donuts.mp4', iconImage: '/mochi_land_circle.png' },
  { id: 'malasada', image: '/bingsu.png', video: '/videos/malasada.mp4', iconImage: '/malasada-icon.png' },
  { id: 'coffee', image: '/coffee.png', video: '/videos/coffee.mp4', iconImage: '/honolulu_coffee.webp' },
  { id: 'bingsu', image: '/bingsu.png', video: '/videos/bingsu.mp4', icon: '🍧' },
  { id: 'hotdog', image: '/bingsu.png', video: '/videos/hotdog.mp4', iconImage: '/corndog-icon.png' },
  { id: 'smoothie', image: '/smoothie.png', video: '/videos/smoothie.mp4', icon: '🥤' },
];

export default function MenuSection() {
  const t = useTranslations('menu');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{ url: string; title: string } | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const openImage = (image: string, title: string) => {
    setCurrentImage({ url: image, title });
    setModalOpen(true);
  };

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

        {/* Menu Grid - 2x3 Layout (2 columns, 3 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => {
                setSelectedItem(item.id);
                if (item.video) setHoveredVideo(item.id);
              }}
              onHoverEnd={() => {
                setSelectedItem(null);
                setHoveredVideo(null);
              }}
              className="relative"
            >
              <button
                onClick={() => openImage(item.image, t(`categories.${item.id}.name`))}
                onMouseEnter={() => item.video && setHoveredVideo(item.id)}
                onMouseLeave={() => setHoveredVideo(null)}
                className="w-full group relative overflow-hidden rounded-xl md:rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 active:scale-95 md:hover:scale-[1.02]"
              >
                {/* Video Preview Background - Movie Box Style */}
                {item.video && (
                  <div className="absolute inset-0 z-0">
                    <video
                      src={item.video}
                      className={`w-full h-full object-cover transition-opacity duration-500 ${
                        hoveredVideo === item.id ? 'opacity-30' : 'opacity-0'
                      }`}
                      autoPlay={hoveredVideo === item.id}
                      loop
                      muted
                      playsInline
                      onError={(e) => {
                        // Hide video if file doesn't exist yet
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 ${
                      hoveredVideo === item.id ? 'opacity-100' : 'opacity-0'
                    }`} />
                  </div>
                )}

                {/* Card Content */}
                <div className="relative z-10 p-4 md:p-6 lg:p-8 text-center">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: selectedItem === item.id ? 1.2 : 1,
                      rotate: selectedItem === item.id ? 10 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="mb-3 md:mb-4 flex items-center justify-center"
                  >
                    {item.iconImage ? (
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28">
                        <Image
                          src={item.iconImage}
                          alt={t(`categories.${item.id}.name`)}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                        />
                      </div>
                    ) : (
                      <span className="text-5xl sm:text-6xl md:text-7xl">{item.icon}</span>
                    )}
                  </motion.div>

                  {/* Category Name */}
                  <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3 transition-colors line-clamp-1 ${
                    hoveredVideo === item.id ? 'text-white drop-shadow-lg' : 'text-gray-900 group-hover:text-orange-500'
                  }`}>
                    {t(`categories.${item.id}.name`)}
                  </h3>

                  {/* Description */}
                  <p className={`mb-4 md:mb-6 text-xs sm:text-sm md:text-base line-clamp-2 md:line-clamp-none transition-colors ${
                    hoveredVideo === item.id ? 'text-white/90 drop-shadow' : 'text-gray-600'
                  }`}>
                    {t(`categories.${item.id}.description`)}
                  </p>

                  {/* View Menu Button */}
                  <div className={`inline-flex items-center gap-2 font-semibold text-sm md:text-base group-hover:gap-4 transition-all ${
                    hoveredVideo === item.id ? 'text-white drop-shadow-lg' : 'text-orange-500'
                  }`}>
                    <span>{t('viewMenu')}</span>
                    <motion.span
                      animate={{ x: selectedItem === item.id ? 5 : 0 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>

                {/* Hover Effect Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  initial={false}
                />

                {/* Decorative Corner */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 md:border-t-4 md:border-r-4 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-xl md:rounded-tr-2xl" />
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
