'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function Instagram() {
  const t = useTranslations('instagram');
  const locale = useLocale();

  const accounts = [
    {
      name: t('konaCoffee.title'),
      handle: t('konaCoffee.handle'),
      description: t('konaCoffee.description'),
      url: 'https://instagram.com/konacoffee_donut',
      icon: '☕',
      color: 'from-orange-500 to-amber-500',
    },
    {
      name: t('mochinutFortLee.title'),
      handle: t('mochinutFortLee.handle'),
      description: t('mochinutFortLee.description'),
      url: 'https://instagram.com/mochinut_fortlee',
      icon: '🍩',
      color: 'from-pink-500 to-purple-500',
    },
    {
      name: t('bonepiMochiland.title'),
      handle: t('bonepiMochiland.handle'),
      description: t('bonepiMochiland.description'),
      url: 'https://instagram.com/bonepi_mochiland',
      icon: '🍩',
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: t('bonepiMochilandOfficial.title'),
      handle: t('bonepiMochilandOfficial.handle'),
      description: t('bonepiMochilandOfficial.description'),
      url: 'https://instagram.com/bonepi_mochiland_official',
      icon: '🍩',
      color: 'from-fuchsia-500 to-purple-500',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex justify-between items-center">
            <Link href={`/${locale}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-semibold text-gray-900">Back</span>
            </Link>
            <Image
              src="/konacoffee.png"
              alt="Kona Coffee Donut"
              width={150}
              height={16}
              className="h-6 w-auto"
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="pb-16 md:pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {accounts.map((account, index) => (
              <a
                key={index}
                href={account.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-gray-100"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${account.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`} />

                {/* Content */}
                <div className="relative">
                  {/* Icon Circle */}
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br ${account.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <span className="text-5xl md:text-6xl">{account.icon}</span>
                    </div>
                  </div>

                  {/* Account Info */}
                  <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-pink-500 transition-all duration-300">
                      {account.name}
                    </h2>
                    <p className={`text-lg md:text-xl font-semibold bg-gradient-to-r ${account.color} bg-clip-text text-transparent mb-3`}>
                      {account.handle}
                    </p>
                    <p className="text-sm md:text-base text-gray-500">
                      {account.description}
                    </p>
                  </div>

                  {/* Instagram Button */}
                  <div className="flex justify-center">
                    <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${account.color} text-white font-semibold shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span>Follow</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Visit Us in Waikiki
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            2142 Kalakaua Ave, Honolulu, HI 96815
          </p>
          <Link
            href={`/${locale}#location`}
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Get Directions
          </Link>
        </div>
      </section>
    </main>
  );
}
