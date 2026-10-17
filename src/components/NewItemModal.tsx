'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, MapPin } from 'lucide-react';
import { trackEvent, trackDirectionsClick } from '@/lib/analytics';

// Home-page "we have this now!" popup for the Malasada Ice Cream Sandwich (launched 9/29/2026).
// Image is the sandwich half of the in-store board (public/images/promo/).
const STORAGE_KEY = 'promo-modal-dismissed-sandwich-2026-10';
const PROMO = 'malasada_ice_cream_sandwich';
const MAPS_URL = 'https://maps.google.com/?q=2142+Kalakaua+Ave+Honolulu+HI+96815';

interface NewItemModalProps {
  locale?: string;
}

const translations = {
  en: {
    badge: 'NEW AT KONA',
    title: 'Malasada Ice Cream Sandwich',
    body: 'A sugar-coated malasada filled with a full scoop of ice cream. 8 flavors, $8.95, toppings +$1.50.',
    primary: 'See all 8 flavors',
    secondary: 'Get directions',
    footer: '2142 Kalākaua Ave · Open daily 7 AM – 9 PM',
    later: 'Maybe later',
    alt: 'Malasada Ice Cream Sandwich menu board: Vanilla, Strawberry, Ube, Chocolate, Coconut, Matcha, Cookies & Cream and Coffee, $8.95',
  },
  ja: {
    badge: '新メニュー',
    title: 'マラサダ・アイスクリームサンド',
    body: 'シュガーをまぶしたマラサダにアイスをたっぷり。全8種 $8.95、トッピング各$1.50。',
    primary: '8種類のフレーバーを見る',
    secondary: '行き方を見る',
    footer: '2142 Kalākaua Ave · 毎日 7:00–21:00',
    later: 'あとで',
    alt: 'マラサダ・アイスクリームサンドのメニューボード（全8種、$8.95）',
  },
  ko: {
    badge: '신메뉴',
    title: '말라사다 아이스크림 샌드위치',
    body: '설탕 입힌 말라사다에 아이스크림을 가득. 8가지 맛 $8.95, 토핑 $1.50.',
    primary: '8가지 맛 보러 가기',
    secondary: '길찾기',
    footer: '2142 Kalākaua Ave · 매일 오전 7시–밤 9시',
    later: '나중에',
    alt: '말라사다 아이스크림 샌드위치 메뉴판 (8가지 맛, $8.95)',
  },
  zh: {
    badge: '新品上市',
    title: '马拉萨达冰淇淋三明治',
    body: '裹糖马拉萨达夹满一球冰淇淋。8种口味 $8.95，配料每份 $1.50。',
    primary: '查看全部8种口味',
    secondary: '获取路线',
    footer: '2142 Kalākaua Ave · 每天 7:00–21:00',
    later: '稍后再说',
    alt: '马拉萨达冰淇淋三明治菜单（8种口味，$8.95）',
  },
  es: {
    badge: 'NUEVO',
    title: 'Sándwich de helado con malasada',
    body: 'Una malasada azucarada rellena con una bola de helado. 8 sabores a $8.95, toppings $1.50.',
    primary: 'Ver los 8 sabores',
    secondary: 'Cómo llegar',
    footer: '2142 Kalākaua Ave · Todos los días 7 AM – 9 PM',
    later: 'Más tarde',
    alt: 'Menú del sándwich de helado con malasada: 8 sabores, $8.95',
  },
};

export default function NewItemModal({ locale = 'en' }: NewItemModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[locale as keyof typeof translations] || translations.en;

  useEffect(() => {
    let dismissedAt = 0;
    try {
      dismissedAt = parseInt(localStorage.getItem(STORAGE_KEY) || '0');
    } catch {
      dismissedAt = 0;
    }
    // Show once, then stay quiet for 3 days after it's closed
    if (dismissedAt > Date.now() - 3 * 24 * 60 * 60 * 1000) return;
    const timer = setTimeout(() => {
      setIsOpen(true);
      trackEvent('promo_modal_view', { promo: PROMO, locale });
    }, 1800);
    return () => clearTimeout(timer);
  }, [locale]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close('escape');
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const remember = () => {
    try {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    } catch {
      // storage unavailable — it will simply show again next visit
    }
  };

  const close = (how: string) => {
    setIsOpen(false);
    remember();
    trackEvent('promo_modal_dismiss', { promo: PROMO, locale, how });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => close('backdrop')}
            className="fixed inset-0 bg-black/55 backdrop-blur-[2px] z-[100]"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="new-item-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="fixed inset-x-0 bottom-0 sm:inset-0 z-[101] flex items-end sm:items-center justify-center sm:p-4 pointer-events-none"
          >
            <div className="relative w-full sm:max-w-md pointer-events-auto bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <button
                onClick={() => close('close_button')}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/45 hover:bg-black/60 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <Link
                href={`/${locale}/menu#sandwich`}
                onClick={() => {
                  remember();
                  trackEvent('promo_modal_click', { promo: PROMO, locale, target: 'image' });
                }}
                className="block relative w-full aspect-[792/682] max-h-[42vh] sm:max-h-none bg-[#f7f5ee]"
              >
                <Image
                  src="/images/promo/malasada-ice-cream-sandwich-board.webp"
                  alt={t.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 448px"
                  className="object-contain"
                  priority
                />
              </Link>

              <div className="px-5 pt-4 pb-5 sm:px-6 sm:pb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-extrabold tracking-wide">
                  {t.badge}
                </span>
                <h2 id="new-item-title" className="mt-2 text-xl sm:text-2xl font-extrabold text-stone-900" style={{ fontFamily: 'var(--font-righteous)' }}>
                  {t.title}
                </h2>
                <p className="mt-1 text-sm text-stone-600 leading-relaxed">{t.body}</p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Link
                    href={`/${locale}/menu#sandwich`}
                    onClick={() => {
                      remember();
                      trackEvent('promo_modal_click', { promo: PROMO, locale, target: 'menu' });
                    }}
                    className="text-center px-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold text-sm shadow-md hover:opacity-95"
                  >
                    {t.primary}
                  </Link>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      remember();
                      trackDirectionsClick();
                      trackEvent('promo_modal_click', { promo: PROMO, locale, target: 'directions' });
                    }}
                    className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-stone-300 text-stone-800 font-semibold text-sm hover:bg-stone-50"
                  >
                    <MapPin className="w-4 h-4" />
                    {t.secondary}
                  </a>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-stone-500">
                  <span>{t.footer}</span>
                  <button onClick={() => close('later')} className="underline underline-offset-2 hover:text-stone-700">
                    {t.later}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
