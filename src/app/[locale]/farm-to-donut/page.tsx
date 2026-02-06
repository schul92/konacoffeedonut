import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'farmToDonut' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: ['farm to cup', 'kona coffee origin', 'volcanic soil coffee', 'hawaiian coffee farms', 'authentic kona', 'bean to cup'],
  };
}

export default function FarmToDonutPage() {
  const t = useTranslations('farmToDonut');

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10" />
        {/* Placeholder for hero image */}
        <div className="absolute inset-0 bg-[url('/images/kona-farm-placeholder.jpg')] bg-cover bg-center" />
        
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-righteous">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Journey Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-righteous">
            {t('journey.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('journey.intro')}
          </p>
        </div>

        {/* Step 1: Dawn at the Farm */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <div className="bg-amber-100 rounded-lg h-64 flex items-center justify-center">
              {/* Placeholder for farm image */}
              <span className="text-gray-500">🌄 Kona Coffee Farm</span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              {t('journey.step1.label')}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('journey.step1.title')}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('journey.step1.description')}
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <p className="text-sm text-gray-700">
                ☕ <strong>{t('journey.step1.fact')}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Step 2: Hand-Harvested */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              {t('journey.step2.label')}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('journey.step2.title')}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('journey.step2.description')}
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">{t('journey.step2.point1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">{t('journey.step2.point2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">{t('journey.step2.point3')}</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="bg-green-100 rounded-lg h-64 flex items-center justify-center">
              {/* Placeholder for harvest image */}
              <span className="text-gray-500">🤲 Hand-Picking Coffee Cherries</span>
            </div>
          </div>
        </div>

        {/* Step 3: Waikiki Magic */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <div className="bg-orange-100 rounded-lg h-64 flex items-center justify-center">
              {/* Placeholder for kitchen image */}
              <span className="text-gray-500">🍩 Fresh Donut Making</span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              {t('journey.step3.label')}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('journey.step3.title')}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('journey.step3.description')}
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
              <p className="text-sm text-gray-700">
                ⏱️ <strong>{t('journey.step3.timing')}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Step 4: Your First Bite */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              {t('journey.step4.label')}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('journey.step4.title')}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('journey.step4.description')}
            </p>
            <blockquote className="border-l-4 border-pink-500 pl-4 italic text-gray-700 mb-6">
              "{t('journey.step4.quote')}"
            </blockquote>
            <a 
              href="/menu" 
              className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition"
            >
              {t('journey.step4.cta')}
            </a>
          </div>
          <div>
            <div className="bg-pink-100 rounded-lg h-64 flex items-center justify-center">
              {/* Placeholder for experience image */}
              <span className="text-gray-500">😋 Enjoying the Moment</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-4 font-righteous">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/location" 
              className="bg-white text-amber-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
            >
              {t('cta.visitUs')}
            </a>
            <a 
              href="/menu" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition"
            >
              {t('cta.seeMenu')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
