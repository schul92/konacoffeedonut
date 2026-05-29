'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LanguageSwitcher from '@/components/LanguageSwitcher';
import { menuItemCategories, type MenuItemCategory } from '@/lib/menuItems';

interface MenuPageClientProps {
  locale: string;
}

export default function MenuPageClient({ locale }: MenuPageClientProps) {
  const [activeId, setActiveId] = useState<MenuItemCategory['id']>(menuItemCategories[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const id = visible.target.getAttribute('data-cat-id') as MenuItemCategory['id'] | null;
          if (id) setActiveId(id);
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    menuItemCategories.forEach((c) => {
      const el = sectionRefs.current[c.id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToCategory = useCallback((id: MenuItemCategory['id']) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 132;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#FBF4E4] text-stone-900">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-[#FBF4E4]/95 backdrop-blur border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 grid grid-cols-3 items-center">
          <div className="flex items-center gap-3">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 text-stone-700 hover:text-stone-900 text-sm font-medium"
              aria-label="Back to home"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Home</span>
            </Link>
          </div>

          <Link href={`/${locale}`} className="flex justify-center" aria-label="Kona Coffee Donut? home">
            <Image
              src="/konacoffee.webp"
              alt="Kona Coffee Donut?"
              width={200}
              height={21}
              sizes="200px"
              priority
              className="h-6 md:h-7 w-auto"
            />
          </Link>

          <div className="flex justify-end">
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="relative h-[40vh] min-h-[280px] md:h-[52vh] md:min-h-[380px] w-full">
          <Image
            src="/images/menu/hawaii-menu-hero.webp"
            alt="Kona Coffee Donut? menu with Hawaiian mochi donuts, Honolulu coffee, and Waikiki ocean light"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/42 via-stone-950/24 to-stone-950/50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 [text-shadow:0_3px_18px_rgba(0,0,0,0.75)]">
            <h1 className="font-black tracking-[0.2em] text-white text-4xl sm:text-5xl md:text-6xl">
              MENU
            </h1>
            <p className="mt-3 text-white/85 text-xs sm:text-sm md:text-base tracking-wider uppercase">
              Kona Coffee Donut<span aria-hidden>?</span> · Waikiki
            </p>
            <p className="mt-2 text-white/70 text-xs sm:text-sm">
              Proudly serving Honolulu coffee
            </p>
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <nav
        className="sticky top-[57px] md:top-[65px] z-30 bg-[#FBF4E4]/95 backdrop-blur border-b border-stone-200/70"
        aria-label="Menu categories"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-2.5">
            {menuItemCategories.map((cat) => {
              const isActive = activeId === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => scrollToCategory(cat.id)}
                  className={`shrink-0 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${
                    isActive
                      ? 'text-stone-900 border-stone-900'
                      : 'text-stone-500 hover:text-stone-800 border-transparent'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Category sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {menuItemCategories.map((cat, idx) => (
          <section
            key={cat.id}
            id={cat.id}
            data-cat-id={cat.id}
            ref={(el) => {
              sectionRefs.current[cat.id] = el;
            }}
            className={idx === 0 ? '' : 'pt-12 md:pt-16'}
          >
            <div className="border-t border-stone-300/70 pt-6 md:pt-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-stone-900">
                  {cat.title}
                </h2>
                {cat.detailSlug && (
                  <Link
                    href={`/${locale}/menu/${cat.detailSlug}`}
                    className="text-xs md:text-sm font-semibold text-stone-600 hover:text-stone-900 underline-offset-4 hover:underline"
                  >
                    Learn more →
                  </Link>
                )}
              </div>

              <ul className="grid gap-x-4 gap-y-8 sm:gap-y-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {cat.items.map((it) => (
                  <li key={`${cat.id}-${it.name}`} className="flex flex-col items-center text-center">
                    <div className="relative w-full aspect-square">
                      <Image
                        src={it.image}
                        alt={it.name}
                        fill
                        loading="eager"
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 16vw"
                        // Every category now ships transparent-background photoreal cutouts
                        // (see scripts/process_menu_item_cutouts.py + process_mochi_donut_cutouts.py),
                        // so each card gets a soft warm drop-shadow to anchor the subject to
                        // the page background instead of floating in an invisible square box.
                        className="object-contain [filter:drop-shadow(0_10px_14px_rgba(120,80,30,0.18))]"
                      />
                    </div>
                    <p className="mt-2 sm:mt-3 text-sm sm:text-[15px] font-semibold text-stone-900 leading-tight">
                      {it.name}
                    </p>
                    {it.price && (
                      <p className="mt-0.5 text-xs sm:text-sm text-stone-500 tabular-nums">
                        ${it.price}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <p className="mt-16 md:mt-20 text-center text-xs sm:text-sm text-stone-500">
          Visit us at 2142 Kalākaua Ave, Honolulu, HI 96815 · Proudly serving Honolulu coffee
        </p>
      </main>

      <footer className="bg-stone-900 text-stone-300 mt-8 md:mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/konacoffee.png" alt="Kona Coffee Donut?" width={32} height={32} className="rounded-lg" />
            <span className="font-semibold text-white">Kona Coffee Donut?</span>
          </div>
          <p className="text-stone-400 text-sm">© 2026 Kona Coffee Donut? All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href={`/${locale}/privacy-policy`} className="text-stone-400 hover:text-white text-sm">
              Privacy
            </Link>
            <Link href={`/${locale}/faq`} className="text-stone-400 hover:text-white text-sm">
              FAQ
            </Link>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .no-scrollbar { scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
