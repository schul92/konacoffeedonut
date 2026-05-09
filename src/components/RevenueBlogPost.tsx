'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { useState } from 'react';
import { MapPin, Clock, Phone, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import SubpageNav from './SubpageNav';

export type Locale = 'en' | 'ja' | 'ko' | 'zh' | 'es';

export interface BlogContent {
  hero: {
    title: string;
    subtitle: string;
    date: string;
    readTime: string;
    badge?: string;
  };
  intro: string;
  visitCTA: {
    headline: string;
    body: string;
    menuLabel: string;
    directionsLabel: string;
  };
  sections: {
    h2: string;
    body: string;
    bullets?: string[];
    pullout?: { title: string; body: string };
  }[];
  faq: { q: string; a: string }[];
  finalCTA: {
    headline: string;
    body: string;
    visitLabel: string;
    callLabel: string;
  };
}

export interface BlogConfig {
  slug: string;
  imageSrc: string;
  imageAlt: string;
  schemaHeadline: string;
  schemaDescription: string;
}

const STORE = {
  name: 'Kona Coffee Donut',
  address: '2142 Kalākaua Ave, Honolulu, HI 96815',
  hoursShort: '7 AM – 9 PM Daily',
  phone: '(808) 304-1808',
  phoneTel: '+18083041808',
  mapUrl: 'https://maps.google.com/?q=2142+Kalakaua+Ave+Honolulu+HI+96815',
};

const t = (loc: Locale, key: string) => {
  const dict: Record<string, Record<Locale, string>> = {
    visit: { en: 'Visit Us', ja: '来店案内', ko: '방문 안내', zh: '到店参观', es: 'Visítanos' },
    menu: { en: 'View Full Menu', ja: 'メニューを見る', ko: '전체 메뉴 보기', zh: '查看全部菜单', es: 'Ver Menú' },
    directions: { en: 'Get Directions', ja: '行き方を確認', ko: '길찾기', zh: '获取路线', es: 'Cómo llegar' },
    call: { en: 'Call Us', ja: '電話する', ko: '전화하기', zh: '打电话', es: 'Llamar' },
    faq: { en: 'Frequently Asked Questions', ja: 'よくある質問', ko: '자주 묻는 질문', zh: '常见问题', es: 'Preguntas Frecuentes' },
    backToBlog: { en: '← All Blogs', ja: '← ブログ一覧', ko: '← 블로그 목록', zh: '← 所有博客', es: '← Todos los Blogs' },
    pickFor: { en: 'Best Pick For You', ja: 'おすすめ', ko: '추천', zh: '推荐', es: 'Recomendado' },
  };
  return dict[key]?.[loc] || dict[key]?.en || '';
};

interface Props {
  locale: Locale;
  config: BlogConfig;
  content: BlogContent;
}

export default function RevenueBlogPost({ locale, config, content }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.schemaHeadline,
    description: config.schemaDescription,
    image: `https://www.konacoffeedonut.com${config.imageSrc}`,
    author: { '@type': 'Organization', name: STORE.name },
    publisher: {
      '@type': 'Organization',
      name: STORE.name,
      logo: { '@type': 'ImageObject', url: 'https://www.konacoffeedonut.com/logo.png' },
    },
    mainEntityOfPage: `https://www.konacoffeedonut.com/${locale}/blog/${config.slug}`,
    datePublished: '2026-05-01',
    dateModified: new Date().toISOString().split('T')[0],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: STORE.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2142 Kalākaua Ave',
      addressLocality: 'Honolulu',
      addressRegion: 'HI',
      postalCode: '96815',
      addressCountry: 'US',
    },
    telephone: STORE.phone,
    url: 'https://www.konacoffeedonut.com',
    image: `https://www.konacoffeedonut.com${config.imageSrc}`,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50">
      <Script
        id={`schema-article-${config.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id={`schema-faq-${config.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id={`schema-local-${config.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <SubpageNav locale={locale} />

      <article className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href={`/${locale}/blog`}
            className="inline-block text-amber-700 hover:text-amber-900 text-sm font-medium mb-6"
          >
            {t(locale, 'backToBlog')}
          </Link>

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            {content.hero.badge && (
              <div className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                {content.hero.badge}
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 leading-tight mb-4">
              {content.hero.title}
            </h1>
            <p className="text-xl text-stone-700 mb-4">{content.hero.subtitle}</p>
            <div className="flex flex-wrap gap-3 text-sm text-stone-500">
              <span>{content.hero.date}</span>
              <span>•</span>
              <span>{content.hero.readTime}</span>
            </div>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl overflow-hidden shadow-2xl mb-10 aspect-[16/9] relative"
          >
            <Image
              src={config.imageSrc}
              alt={config.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </motion.div>

          {/* INTRO */}
          <p className="text-lg text-stone-700 leading-relaxed mb-10">{content.intro}</p>

          {/* TOP VISIT CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-500 via-rose-500 to-pink-500 text-white rounded-3xl p-8 sm:p-10 mb-12 shadow-xl"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
              {t(locale, 'pickFor')}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">{content.visitCTA.headline}</h2>
            <p className="text-white/95 text-lg mb-6">{content.visitCTA.body}</p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{STORE.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>{STORE.hoursShort}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${locale}/menu`}
                className="inline-flex items-center gap-2 bg-white text-rose-600 px-6 py-3 rounded-full font-bold hover:bg-rose-50 transition-colors"
              >
                {content.visitCTA.menuLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={STORE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-white border-2 border-white/40 px-6 py-3 rounded-full font-bold hover:bg-white/30 transition-colors"
              >
                {content.visitCTA.directionsLabel}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* SECTIONS */}
          {content.sections.map((s, i) => (
            <motion.section
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              className="mb-10"
            >
              <h2 className="text-3xl font-extrabold text-stone-900 mb-4">{s.h2}</h2>
              <p className="text-lg text-stone-700 leading-relaxed mb-4 whitespace-pre-line">{s.body}</p>
              {s.bullets && s.bullets.length > 0 && (
                <ul className="space-y-2 ml-4 mb-4">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-stone-700">
                      <span className="text-rose-500 font-bold mt-0.5">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.pullout && (
                <div className="bg-amber-100 border-l-4 border-amber-500 px-5 py-4 rounded-r-xl">
                  <div className="font-bold text-amber-900 mb-1">{s.pullout.title}</div>
                  <div className="text-stone-700">{s.pullout.body}</div>
                </div>
              )}
            </motion.section>
          ))}

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-extrabold text-stone-900 mb-6">{t(locale, 'faq')}</h2>
            <div className="space-y-3">
              {content.faq.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-amber-50 transition-colors"
                  >
                    <span className="font-bold text-stone-900 pr-4">{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-500 flex-shrink-0 transition-transform ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-stone-700 leading-relaxed">{item.a}</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* FINAL CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-3xl p-10 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">{content.finalCTA.headline}</h2>
            <p className="text-white/85 text-lg mb-6 max-w-2xl mx-auto">{content.finalCTA.body}</p>
            <div className="flex items-center justify-center gap-2 text-white/80 text-sm mb-6">
              <MapPin className="w-4 h-4" />
              <span>{STORE.address}</span>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={STORE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-colors"
              >
                {content.finalCTA.visitLabel}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${STORE.phoneTel}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white px-8 py-3 rounded-full font-bold transition-colors"
              >
                <Phone className="w-4 h-4" />
                {content.finalCTA.callLabel}
              </a>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
