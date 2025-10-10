'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export default function ImageModal({ isOpen, onClose, imageUrl, title }: ImageModalProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setScale(1); // Reset zoom when opening
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const zoomIn = () => setScale(prev => Math.min(prev + 0.25, 3));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/95 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25 }}
            className="fixed inset-0 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 md:px-6 py-4 bg-black/50 backdrop-blur-sm shrink-0">
              <h2 className="text-lg md:text-xl font-bold text-white truncate pr-4">{title}</h2>
              <div className="flex items-center gap-2">
                {/* Zoom Controls */}
                <button
                  onClick={zoomOut}
                  className="shrink-0 p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-5 h-5 text-white" />
                </button>
                <span className="text-white text-sm font-medium min-w-[3rem] text-center">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  onClick={zoomIn}
                  className="shrink-0 p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-5 h-5 text-white" />
                </button>
                <div className="w-px h-6 bg-white/20 mx-2" />
                <button
                  onClick={onClose}
                  className="shrink-0 p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Image Viewer */}
            <div className="flex-1 overflow-auto p-4 md:p-8">
              <div className="min-h-full flex items-center justify-center">
                <motion.div
                  animate={{ scale }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full max-w-6xl"
                  style={{ transformOrigin: 'center center' }}
                >
                  <Image
                    src={imageUrl}
                    alt={title}
                    width={2000}
                    height={2000}
                    className="w-full h-auto rounded-lg shadow-2xl"
                    priority
                    quality={100}
                  />
                </motion.div>
              </div>
            </div>

            {/* Footer Hint */}
            <div className="px-4 md:px-6 py-3 bg-black/50 backdrop-blur-sm text-center shrink-0">
              <p className="text-xs md:text-sm text-white/70">
                Tap outside or press ESC to close • Use zoom buttons to resize
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
