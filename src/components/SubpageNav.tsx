'use client';

import Link from 'next/link';
import { ArrowLeft, Home, Menu } from 'lucide-react';

interface SubpageNavProps {
  locale: string;
}

const translations: Record<string, { home: string; menu: string }> = {
  en: { home: 'Home', menu: 'Menu' },
  ja: { home: 'ホーム', menu: 'メニュー' },
  ko: { home: '홈', menu: '메뉴' },
  zh: { home: '首页', menu: '菜单' },
  es: { home: 'Inicio', menu: 'Menú' },
};

export default function SubpageNav({ locale }: SubpageNavProps) {
  const t = translations[locale] || translations.en;

  return (
    <>
    {/* Spacer for fixed nav */}
    <div className="h-12" />
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 hover:bg-white/25 rounded-full text-white text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.home}
        </Link>
        <Link
          href={`/${locale}`}
          className="text-white font-bold text-sm tracking-wide opacity-90 hover:opacity-100 transition-opacity"
        >
          KONA COFFEE DONUT
        </Link>
        <Link
          href={`/${locale}/menu`}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 hover:bg-white/25 rounded-full text-white text-sm font-medium transition-colors"
        >
          <Menu className="w-4 h-4" />
          {t.menu}
        </Link>
      </div>
    </nav>
    </>
  );
}
