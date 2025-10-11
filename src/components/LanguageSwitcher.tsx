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
    // Remove the current locale from pathname and add new locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Mobile & Desktop Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl bg-white md:bg-transparent hover:bg-gray-100 transition-all text-sm md:text-base font-medium border border-gray-200 md:border-transparent shadow-sm md:shadow-none active:scale-95"
      >
        <Globe className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
        <span className="hidden sm:inline">{languageNames[locale]}</span>
        <span className="text-lg sm:hidden">{languageFlags[locale]}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 md:w-44 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
            Select Language
          </div>
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLanguage(loc)}
              className={`flex items-center gap-3 w-full text-left px-4 py-3 text-sm md:text-base hover:bg-orange-50 active:bg-orange-100 transition-colors ${
                locale === loc
                  ? 'font-bold text-orange-600 bg-orange-50'
                  : 'text-gray-700'
              }`}
            >
              <span className="text-xl">{languageFlags[loc]}</span>
              <span className="flex-1">{languageNames[loc]}</span>
              {locale === loc && (
                <span className="text-orange-500 font-bold">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
