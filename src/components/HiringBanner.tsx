'use client';

import Link from 'next/link';
import { Sparkles, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { trackJobApplyClick } from '@/lib/analytics';

interface HiringBannerProps {
  locale?: string;
}

const translations = {
  en: {
    text: "We're Hiring!",
    cta: "Join Our Waikiki Team",
    positions: "Manager, Barista, Baker & More",
  },
  ja: {
    text: "スタッフ募集中！",
    cta: "ワイキキチームに参加",
    positions: "マネージャー、バリスタ、ベイカーなど",
  },
  ko: {
    text: "채용 중!",
    cta: "와이키키 팀에 합류하세요",
    positions: "매니저, 바리스타, 베이커 등",
  },
  zh: {
    text: "正在招聘！",
    cta: "加入威基基团队",
    positions: "经理、咖啡师、面包师等",
  },
};

export default function HiringBanner({ locale = 'en' }: HiringBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[locale as keyof typeof translations] || translations.en;

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = localStorage.getItem('hiring-banner-dismissed');
    const dismissedTime = dismissed ? parseInt(dismissed) : 0;
    const threeDaysAgo = Date.now() - 3 * 24 * 60 * 60 * 1000;

    // Show if not dismissed or dismissed more than 3 days ago
    if (!dismissed || dismissedTime < threeDaysAgo) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('hiring-banner-dismissed', Date.now().toString());
  };

  const handleClick = () => {
    trackJobApplyClick('hiring_banner', locale);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[90] bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-2.5">
        <div className="flex items-center justify-between gap-2">
          <Link
            href={`/${locale}/careers`}
            onClick={handleClick}
            className="flex-1 flex items-center justify-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity"
          >
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="font-bold text-sm sm:text-base">{t.text}</span>
            </span>
            <span className="hidden sm:inline text-white/90 text-sm">|</span>
            <span className="text-sm sm:text-base font-medium">{t.cta}</span>
            <span className="hidden md:inline text-white/80 text-sm">- {t.positions}</span>
            <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs font-bold animate-pulse">
              APPLY
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
