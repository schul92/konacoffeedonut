'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function AboutKonaCoffee() {
  const t = useTranslations('aboutKonaCoffee');
  const locale = useLocale();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: t('hero.title'),
    description: t('intro.paragraph1'),
    author: {
      '@type': 'Organization',
      name: 'Kona Coffee Donut',
      url: 'https://konacoffeedonut.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kona Coffee Donut',
      logo: {
        '@type': 'ImageObject',
        url: 'https://konacoffeedonut.com/logo.png',
      },
    },
    datePublished: '2025-01-24',
    dateModified: '2025-01-24',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://konacoffeedonut.com/${locale}/about-kona-coffee`,
    },
    about: {
      '@type': 'Product',
      name: 'Premium Kona Coffee',
      description: 'Premium Hawaiian Kona coffee beans grown in the Kona District',
      brand: {
        '@type': 'Brand',
        name: 'Honolulu Coffee',
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'CafeOrCoffeeShop',
          name: 'Kona Coffee Donut',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '2142 Kalakaua Ave',
            addressLocality: 'Honolulu',
            addressRegion: 'HI',
            postalCode: '96815',
            addressCountry: 'US',
          },
        },
      },
    },
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://konacoffeedonut.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('hero.title'),
        item: `https://konacoffeedonut.com/${locale}/about-kona-coffee`,
      },
    ],
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: t('faq.q1.question'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t('faq.q1.answer'),
        },
      },
      {
        '@type': 'Question',
        name: t('faq.q2.question'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t('faq.q2.answer'),
        },
      },
      {
        '@type': 'Question',
        name: t('faq.q3.question'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t('faq.q3.answer'),
        },
      },
      {
        '@type': 'Question',
        name: t('faq.q4.question'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t('faq.q4.answer'),
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              {t('hero.subtitle')}
            </p>
            <Link
              href={`/${locale}#menu`}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              {t('hero.cta')}
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('intro.title')}
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            <strong>Kona coffee</strong> {t('intro.paragraph1').replace('Kona coffee is a premium ', '')}
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            {t('intro.paragraph2')}
          </p>
        </section>

        {/* Why Kona Coffee is Special */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('whySpecial.title')}
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {t('whySpecial.growing.title')}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('whySpecial.growing.text')}
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {t('whySpecial.flavor.title')}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('whySpecial.flavor.text')}
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {t('whySpecial.handPicked.title')}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('whySpecial.handPicked.text')}
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {t('whySpecial.origin.title')}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('whySpecial.origin.text')}
              </p>
            </div>
          </div>
        </section>

        {/* Kona Coffee vs Other Coffees */}
        <section className="mb-16 bg-orange-50 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('comparison.title')}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-orange-200">
                  <th className="pb-4 pr-4 font-bold text-gray-900">{t('comparison.coffeeType')}</th>
                  <th className="pb-4 pr-4 font-bold text-gray-900">{t('comparison.flavor')}</th>
                  <th className="pb-4 font-bold text-gray-900">{t('comparison.acidity')}</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-orange-100">
                  <td className="py-4 pr-4 font-bold text-orange-600">{t('comparison.kona.name')}</td>
                  <td className="py-4 pr-4">{t('comparison.kona.flavor')}</td>
                  <td className="py-4">{t('comparison.kona.acidity')}</td>
                </tr>
                <tr className="border-b border-orange-100">
                  <td className="py-4 pr-4">{t('comparison.colombian.name')}</td>
                  <td className="py-4 pr-4">{t('comparison.colombian.flavor')}</td>
                  <td className="py-4">{t('comparison.colombian.acidity')}</td>
                </tr>
                <tr className="border-b border-orange-100">
                  <td className="py-4 pr-4">{t('comparison.ethiopian.name')}</td>
                  <td className="py-4 pr-4">{t('comparison.ethiopian.flavor')}</td>
                  <td className="py-4">{t('comparison.ethiopian.acidity')}</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4">{t('comparison.brazilian.name')}</td>
                  <td className="py-4 pr-4">{t('comparison.brazilian.flavor')}</td>
                  <td className="py-4">{t('comparison.brazilian.acidity')}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            {t('comparison.note')}
          </p>
        </section>

        {/* Where to Buy */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('experience.title')}
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {t('experience.paragraph1')}
          </p>

          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">{t('experience.whyChoose.title')}</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>{t('experience.whyChoose.point1')}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>{t('experience.whyChoose.point2')}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>{t('experience.whyChoose.point3')}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>{t('experience.whyChoose.point4')}</span>
              </li>
            </ul>
            <Link
              href={`/${locale}#location`}
              className="inline-block mt-6 bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              {t('experience.cta')}
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {t('faq.title')}
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('faq.q1.question')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('faq.q1.answer')}
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('faq.q2.question')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('faq.q2.answer')}
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('faq.q3.question')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('faq.q3.answer')}
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('faq.q4.question')}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t('faq.q4.answer')}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('finalCta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('finalCta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}#menu`}
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors"
              >
                {t('finalCta.viewMenu')}
              </Link>
              <Link
                href={`/${locale}#location`}
                className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold px-8 py-4 rounded-full transition-colors"
              >
                {t('finalCta.getDirections')}
              </Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
