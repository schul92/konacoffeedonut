'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import LogoReelsPopover from './LogoReelsPopover';

// Mochiland/Mochinut Instagram reels (from @mochinut_fortlee)
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

// Kona Coffee Donut Instagram reels (from @konacoffeedonut)
const konaCoffeeReels = [
  {
    id: 'konacoffee-reel-1',
    videoSrc: '/videos/reels/konacoffee-reel-1.mp4',
    instagramUrl: 'https://www.instagram.com/reel/DRivouBie_x/',
    caption: 'Premium Kona Coffee',
  },
];

export default function CollaborationBanner() {
  return (
    <motion.div
      className="relative z-10 w-full max-w-5xl mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl md:rounded-3xl border-3 border-white shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 py-3 md:py-4 border-b-2 border-orange-200">
          <p className="text-center text-gray-600 font-semibold text-xs md:text-base tracking-wide">
            PROUDLY COLLABORATING WITH
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 p-6 md:p-10">
          {/* Honolulu Coffee - with Instagram Reels popover */}
          <LogoReelsPopover
            reels={konaCoffeeReels}
            username="konacoffeedonut"
            profileUrl="https://www.instagram.com/konacoffeedonut/"
            brandName="Kona Coffee Donut"
            brandColor="from-amber-600 via-orange-500 to-amber-600"
          >
            <motion.div
              className="flex flex-col items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="relative w-16 h-16 md:w-28 md:h-28 flex items-center justify-center bg-white rounded-xl md:rounded-2xl p-2 md:p-4 shadow-lg mb-3 md:mb-4"
                animate={{
                  boxShadow: [
                    '0 5px 15px rgba(251, 146, 60, 0.2)',
                    '0 8px 25px rgba(251, 146, 60, 0.4)',
                    '0 5px 15px rgba(251, 146, 60, 0.2)',
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src="/icons/honolulu_coffee.png"
                  alt="Honolulu Coffee"
                  width={112}
                  height={112}
                  className="object-contain w-full h-full"
                />
              </motion.div>
              <div className="text-center">
                <p className="font-black text-sm md:text-xl text-orange-500 leading-tight mb-1">
                  HONOLULU<br className="md:hidden" /> COFFEE
                </p>
                <p className="text-orange-500 font-medium text-[8px] md:text-xs">
                  Premium Kona Beans
                </p>
              </div>
            </motion.div>
          </LogoReelsPopover>

          {/* Bonepi */}
          <motion.div
            className="flex flex-col items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              className="relative w-16 h-16 md:w-28 md:h-28 flex items-center justify-center bg-white rounded-xl md:rounded-2xl p-2 md:p-4 shadow-lg mb-3 md:mb-4"
              animate={{
                boxShadow: [
                  '0 5px 15px rgba(251, 146, 60, 0.2)',
                  '0 8px 25px rgba(251, 146, 60, 0.4)',
                  '0 5px 15px rgba(251, 146, 60, 0.2)',
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.3,
              }}
            >
              <Image
                src="/icons/bonepi.jpeg"
                alt="Bonepi"
                width={112}
                height={112}
                className="object-contain w-full h-full rounded-lg"
              />
            </motion.div>
            <div className="text-center">
              <p className="font-black text-sm md:text-xl text-pink-500 leading-tight mb-1">
                BONEPI
              </p>
              <p className="text-pink-500 font-medium text-[8px] md:text-xs">
                Kawaii Culture
              </p>
            </div>
          </motion.div>

          {/* Mochiland - with Instagram Reels popover */}
          <LogoReelsPopover
            reels={mochilandReels}
            username="mochinut_fortlee"
            profileUrl="https://www.instagram.com/mochinut_fortlee/"
            brandName="Mochiland"
            brandColor="from-orange-500 via-amber-500 to-yellow-500"
          >
            <motion.div
              className="flex flex-col items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="relative w-16 h-16 md:w-28 md:h-28 flex items-center justify-center bg-white rounded-xl md:rounded-2xl p-2 md:p-4 shadow-lg mb-3 md:mb-4"
                animate={{
                  boxShadow: [
                    '0 5px 15px rgba(251, 146, 60, 0.2)',
                    '0 8px 25px rgba(251, 146, 60, 0.4)',
                    '0 5px 15px rgba(251, 146, 60, 0.2)',
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.6,
                }}
              >
                <Image
                  src="/icons/mochi_land_circle.png"
                  alt="Mochiland"
                  width={112}
                  height={112}
                  className="object-contain w-full h-full"
                />
              </motion.div>
              <div className="text-center">
                <p className="font-black text-sm md:text-xl text-orange-600 leading-tight mb-1">
                  MOCHILAND
                </p>
                <p className="text-orange-600 font-medium text-[8px] md:text-xs">
                  Artisan Mochi Donuts
                </p>
              </div>
            </motion.div>
          </LogoReelsPopover>
        </div>

        {/* Bottom Tagline */}
        <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 py-3 md:py-4">
          <motion.p
            className="text-center text-white font-bold text-xs md:text-lg tracking-wide"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            BRINGING YOU THE ULTIMATE KONA COFFEE × MOCHI DONUT EXPERIENCE
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
