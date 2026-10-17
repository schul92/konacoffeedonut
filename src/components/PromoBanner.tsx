'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { trackEvent } from '@/lib/analytics';

// Custom event for banner visibility changes (the home nav listens to offset itself)
export const BANNER_VISIBILITY_EVENT = 'promo-banner-visibility';

const STORAGE_KEY = 'promo-banner-dismissed-sandwich-2026-10';
const PROMO = 'malasada_ice_cream_sandwich';

interface PromoBannerProps {
  locale?: string;
}

const translations = {
  en: { badge: 'NEW', text: 'Malasada Ice Cream Sandwich', detail: '8 flavors · $8.95', cta: 'See flavors' },
  ja: { badge: '新メニュー', text: 'マラサダ・アイスクリームサンド', detail: '全8種 · $8.95', cta: 'フレーバーを見る' },
  ko: { badge: '신메뉴', text: '말라사다 아이스크림 샌드위치', detail: '8가지 맛 · $8.95', cta: '맛 보러 가기' },
  zh: { badge: '新品', text: '马拉萨达冰淇淋三明治', detail: '8种口味 · $8.95', cta: '查看口味' },
  es: { badge: 'NUEVO', text: 'Sándwich de helado con malasada', detail: '8 sabores · $8.95', cta: 'Ver sabores' },
};

const dispatchBannerEvent = (visible: boolean) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(BANNER_VISIBILITY_EVENT, { detail: { visible } }));
  }
};

// Visible unless dismissed in the last 3 days
export const isBannerVisible = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    const threeDaysAgo = Date.now() - 3 * 24 * 60 * 60 * 1000;
    return !dismissed || parseInt(dismissed) < threeDaysAgo;
  } catch {
    return true;
  }
};

// The menu page already shows the sandwich section
const HIDDEN_ON_PATHS = ['/menu'];

export default function PromoBanner({ locale = 'en' }: PromoBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const t = translations[locale as keyof typeof translations] || translations.en;
  const shouldHideOnPath = HIDDEN_ON_PATHS.some(path => pathname?.includes(path));

  useEffect(() => {
    if (shouldHideOnPath) {
      setIsVisible(false);
      dispatchBannerEvent(false);
      return;
    }
    const shouldShow = isBannerVisible();
    setIsVisible(shouldShow);
    dispatchBannerEvent(shouldShow);
  }, [shouldHideOnPath]);

  const handleDismiss = useCallback(() => {
    setIsVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
    } catch {
      // storage unavailable (private mode) — just hide for this page view
    }
    dispatchBannerEvent(false);
    trackEvent('promo_banner_dismiss', { promo: PROMO, locale });
  }, [locale]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[90] bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-2.5">
        <div className="flex items-center justify-between gap-2">
          <Link
            href={`/${locale}/menu#sandwich`}
            onClick={() => trackEvent('promo_banner_click', { promo: PROMO, locale })}
            className="flex-1 flex items-center justify-center gap-2 sm:gap-3 min-w-0 hover:opacity-90 transition-opacity"
          >
            <span className="px-2 py-0.5 bg-white text-rose-600 rounded-full text-[11px] sm:text-xs font-extrabold flex-shrink-0">
              {t.badge}
            </span>
            <span className="font-bold text-sm sm:text-base truncate">🍦 {t.text}</span>
            <span className="hidden sm:inline text-white/90 text-sm">{t.detail}</span>
            <span className="hidden md:inline ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs font-bold">
              {t.cta} →
            </span>
          </Link>
          <button
            onClick={handleDismiss}
            className="p-1 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
