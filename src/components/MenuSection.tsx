'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import PDFModal from './PDFModal';

interface MenuItem {
  id: string;
  pdf: string;
  icon?: string;
  iconImage?: string;
}

const menuItems: MenuItem[] = [
  { id: 'donuts', pdf: '/donut_final.pdf', iconImage: '/mochi_land_circle.png' },
  { id: 'malasada', pdf: '/malasada_final.pdf', iconImage: '/malasada-icon.png' },
  { id: 'coffee', pdf: '/coffee_final.pdf', iconImage: '/honolulu_coffee.webp' },
  { id: 'bingsu', pdf: '/bingsu_final.pdf', icon: '🍧' },
  { id: 'hotdog', pdf: '/hotdog_final.pdf', iconImage: '/corndog-icon.png' },
  { id: 'smoothie', pdf: '/smoothie_final.pdf', icon: '🥤' },
];

export default function MenuSection() {
  const t = useTranslations('menu');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPDF, setCurrentPDF] = useState<{ url: string; title: string } | null>(null);

  const openPDF = (pdf: string, title: string) => {
    setCurrentPDF({ url: pdf, title });
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

        {/* Menu Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setSelectedItem(item.id)}
              onHoverEnd={() => setSelectedItem(null)}
              className="relative"
            >
              <button
                onClick={() => openPDF(item.pdf, t(`categories.${item.id}.name`))}
                className="w-full group relative overflow-hidden rounded-xl md:rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 active:scale-95 md:hover:scale-105"
              >
                {/* Card Content */}
                <div className="p-4 md:p-6 lg:p-8 text-center">
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
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3 group-hover:text-orange-500 transition-colors line-clamp-1">
                    {t(`categories.${item.id}.name`)}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 md:mb-6 text-xs sm:text-sm md:text-base line-clamp-2 md:line-clamp-none">
                    {t(`categories.${item.id}.description`)}
                  </p>

                  {/* View Menu Button */}
                  <div className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm md:text-base group-hover:gap-4 transition-all">
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

      {/* PDF Modal */}
      {currentPDF && (
        <PDFModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          pdfUrl={currentPDF.url}
          title={currentPDF.title}
        />
      )}
    </section>
  );
}
