'use client';

import Link from 'next/link';
import { ArrowLeft, Menu, ShoppingBag } from 'lucide-react';
import { ORDER_ONLINE_URL, trackOrderOnlineClick } from '@/lib/orderLinks';

interface SubpageNavProps {
  locale: string;
}

const translations: Record<string, { home: string; menu: string; order: string }> = {
  en: { home: 'Home', menu: 'Menu', order: 'Order' },
  ja: { home: 'ホーム', menu: 'メニュー', order: '注文' },
  ko: { home: '홈', menu: '메뉴', order: '주문' },
  zh: { home: '首页', menu: '菜单', order: '订购' },
  es: { home: 'Inicio', menu: 'Menú', order: 'Pedir' },
};

export default function SubpageNav({ locale }: SubpageNavProps) {
  const t = translations[locale] || translations.en;

  return (
    <>
    {/* Spacer for fixed nav */}
    <div className="h-12" />
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 hover:bg-white/25 rounded-full text-white text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.home}
        </Link>
        <Link
          href={`/${locale}`}
          className="hidden sm:block text-white font-bold text-sm tracking-wide opacity-90 hover:opacity-100 transition-opacity"
        >
          KONA COFFEE DONUT
        </Link>
        <div className="flex items-center gap-2">
          <a
            href={ORDER_ONLINE_URL}
            target="_blank"
            rel="noopener"
            onClick={() => trackOrderOnlineClick('subpage-nav')}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500 hover:bg-orange-600 rounded-full text-white text-sm font-semibold transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            {t.order}
          </a>
          <Link
            href={`/${locale}/menu`}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 hover:bg-white/25 rounded-full text-white text-sm font-medium transition-colors"
          >
            <Menu className="w-4 h-4" />
            {t.menu}
          </Link>
        </div>
      </div>
    </nav>
    </>
  );
}
