'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/i18n';

const languageNames: Record<string, string> = {
  en: 'EN',
  ja: '日本語',
  ko: '한국어',
  zh: '中文',
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    // Remove the current locale from pathname and add new locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="relative group">
      <button className="px-3 py-1 rounded hover:bg-gray-100 transition-colors text-sm font-medium">
        {languageNames[locale]}
      </button>
      <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => switchLanguage(loc)}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
              locale === loc ? 'font-bold text-orange-500' : 'text-gray-700'
            }`}
          >
            {languageNames[loc]}
          </button>
        ))}
      </div>
    </div>
  );
}
