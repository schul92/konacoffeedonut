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

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="w-full group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                {/* Card Content */}
                <div className="p-8 text-center">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: selectedItem === item.id ? 1.2 : 1,
                      rotate: selectedItem === item.id ? 10 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="mb-4 flex items-center justify-center"
                  >
                    {item.iconImage ? (
                      <div className="relative w-24 h-24 md:w-28 md:h-28">
                        <Image
                          src={item.iconImage}
                          alt={t(`categories.${item.id}.name`)}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 96px, 112px"
                        />
                      </div>
                    ) : (
                      <span className="text-7xl">{item.icon}</span>
                    )}
                  </motion.div>

                  {/* Category Name */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                    {t(`categories.${item.id}.name`)}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 text-sm md:text-base">
                    {t(`categories.${item.id}.description`)}
                  </p>

                  {/* View Menu Button */}
                  <div className="inline-flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-4 transition-all">
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
                <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-2xl" />
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
