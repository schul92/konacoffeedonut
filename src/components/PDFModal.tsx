'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export default function PDFModal({ isOpen, onClose, pdfUrl, title }: PDFModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
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
            className="fixed inset-0 bg-black/90 z-50"
          />

          {/* Modal - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4"
          >
            <div className="bg-white rounded-t-3xl md:rounded-2xl shadow-2xl w-full h-[90vh] md:h-[85vh] md:max-w-4xl flex flex-col overflow-hidden">
              {/* Header - Simplified */}
              <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-gray-200 shrink-0">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 truncate pr-4">{title}</h2>
                <button
                  onClick={onClose}
                  className="shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
                </button>
              </div>

              {/* PDF Viewer - Full Height */}
              <div className="flex-1 overflow-hidden bg-gray-50">
                <iframe
                  src={pdfUrl}
                  className="w-full h-full"
                  title={`${title} Menu`}
                  loading="lazy"
                />
              </div>

              {/* Footer - Mobile Friendly */}
              <div className="px-4 md:px-6 py-3 border-t border-gray-200 bg-white shrink-0">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between sm:items-center">
                  <p className="text-xs md:text-sm text-gray-500 hidden sm:block">Press ESC or tap outside to close</p>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm rounded-lg transition-colors"
                  >
                    <span>Open Full Menu</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
