'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n';
import { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const languageNames: Record<string, string> = {
  en: 'English',
  ja: '日本語',
  ko: '한국어',
  zh: '中文',
};

const languageFlags: Record<string, string> = {
  en: '🇺🇸',
  ja: '🇯🇵',
  ko: '🇰🇷',
  zh: '🇨🇳',
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const switchLanguage = (newLocale: string) => {
    // Track language change
    if (typeof window !== 'undefined' && (window as any).trackEvent) {
      (window as any).trackEvent('language_change', {
        from_language: locale,
        to_language: newLocale,
        page: pathname,
      });
    }

    // Remove the current locale from pathname and add new locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside (mobile & desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('touchstart', handleClickOutside);
      };
    }
  }, [isOpen]);

  return (
    <div className="relative z-[100]" ref={dropdownRef}>
      {/* Mobile & Desktop Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-2 px-3 md:px-4 py-2.5 rounded-lg md:rounded-xl bg-white md:bg-transparent hover:bg-gray-100 transition-all text-sm md:text-base font-medium border border-gray-200 md:border-transparent shadow-sm md:shadow-none active:scale-95 min-h-[44px] touch-manipulation"
        aria-label="Change language"
        aria-expanded={isOpen}
        type="button"
      >
        <Globe className="w-5 h-5 text-orange-500 flex-shrink-0" />
        <span className="hidden md:inline">{languageNames[locale]}</span>
        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="fixed md:absolute left-4 right-4 md:left-auto md:right-0 mt-2 py-2 w-auto md:w-44 bg-white rounded-xl shadow-2xl border border-gray-100 z-[110] max-w-sm mx-auto md:mx-0">
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
            Select Language
          </div>
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                switchLanguage(loc);
              }}
              className={`flex items-center gap-3 w-full text-left px-4 py-3.5 text-base hover:bg-orange-50 active:bg-orange-100 transition-colors min-h-[48px] touch-manipulation ${
                locale === loc
                  ? 'font-bold text-orange-600 bg-orange-50'
                  : 'text-gray-700'
              }`}
              aria-label={`Switch to ${languageNames[loc]}`}
              type="button"
            >
              <span className="text-xl flex-shrink-0">{languageFlags[loc]}</span>
              <span className="flex-1">{languageNames[loc]}</span>
              {locale === loc && (
                <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
