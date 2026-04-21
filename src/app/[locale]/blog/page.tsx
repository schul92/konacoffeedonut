'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import SubpageNav from '@/components/SubpageNav';

const content = {
  en: {
    hero: {
      title: 'Blog',
      subtitle: 'Stories, guides, and tips about Hawaiian food culture, Kona coffee, and island life in Waikiki.',
    },
    readMore: 'Read More \u2192',
    readTime: 'min read',
    posts: [
      {
        slug: 'best-donuts-waikiki',
        category: 'Food Guide',
        title: 'Best Donuts in Waikiki 2026: A Local\u2019s Guide',
        excerpt: 'From crispy mochi donuts to sugar-dusted malasadas, discover the top donut spots in Waikiki handpicked by locals.',
        readTime: 8,
      },
      {
        slug: 'what-is-bingsu',
        category: 'Korean Food',
        title: 'What is Bingsu? Your Guide to Korean Shaved Ice in Hawaii',
        excerpt: 'Learn about bingsu, Korea\u2019s beloved shaved ice dessert, and where to find the best bowls in Waikiki.',
        readTime: 6,
      },
      {
        slug: 'kona-coffee-guide',
        category: 'Coffee',
        title: 'Kona Coffee vs Regular Coffee: What Makes It Special',
        excerpt: 'What sets 100% Kona coffee apart from the rest? A deep dive into origin, flavor, and why it\u2019s worth every sip.',
        readTime: 7,
      },
    ],
  },
  ja: {
    hero: {
      title: '\u30D6\u30ED\u30B0',
      subtitle: '\u30CF\u30EF\u30A4\u306E\u30D5\u30FC\u30C9\u30AB\u30EB\u30C1\u30E3\u30FC\u3001\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC\u3001\u30EF\u30A4\u30AD\u30AD\u306E\u5CF6\u751F\u6D3B\u306B\u3064\u3044\u3066\u306E\u30B9\u30C8\u30FC\u30EA\u30FC\u3001\u30AC\u30A4\u30C9\u3001\u30D2\u30F3\u30C8\u3002',
    },
    readMore: '\u7D9A\u304D\u3092\u8AAD\u3080 \u2192',
    readTime: '\u5206\u3067\u8AAD\u3081\u308B',
    posts: [
      {
        slug: 'best-donuts-waikiki',
        category: '\u30D5\u30FC\u30C9\u30AC\u30A4\u30C9',
        title: '\u30EF\u30A4\u30AD\u30AD\u306E\u30D9\u30B9\u30C8\u30C9\u30FC\u30CA\u30C4 2026\uFF1A\u5730\u5143\u6C11\u30AC\u30A4\u30C9',
        excerpt: '\u30B5\u30AF\u30B5\u30AF\u306E\u30E2\u30C1\u30C9\u30FC\u30CA\u30C4\u304B\u3089\u7802\u7CD6\u304C\u304B\u304B\u3063\u305F\u30DE\u30E9\u30B5\u30C0\u307E\u3067\u3001\u5730\u5143\u306E\u4EBA\u304C\u9078\u3076\u30EF\u30A4\u30AD\u30AD\u306E\u30C8\u30C3\u30D7\u30C9\u30FC\u30CA\u30C4\u30B9\u30DD\u30C3\u30C8\u3002',
        readTime: 8,
      },
      {
        slug: 'what-is-bingsu',
        category: '\u97D3\u56FD\u30D5\u30FC\u30C9',
        title: '\u30D3\u30F3\u30B9\u3068\u306F\uFF1F\u30CF\u30EF\u30A4\u3067\u697D\u3057\u3080\u97D3\u56FD\u304B\u304D\u6C37\u30AC\u30A4\u30C9',
        excerpt: '\u97D3\u56FD\u3067\u611B\u3055\u308C\u3066\u3044\u308B\u304B\u304D\u6C37\u30C7\u30B6\u30FC\u30C8\u300C\u30D3\u30F3\u30B9\u300D\u306B\u3064\u3044\u3066\u3001\u305D\u3057\u3066\u30EF\u30A4\u30AD\u30AD\u3067\u6700\u9AD8\u306E\u4E00\u676F\u3092\u898B\u3064\u3051\u308B\u65B9\u6CD5\u3002',
        readTime: 6,
      },
      {
        slug: 'kona-coffee-guide',
        category: '\u30B3\u30FC\u30D2\u30FC',
        title: '\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC vs \u666E\u901A\u306E\u30B3\u30FC\u30D2\u30FC\uFF1A\u4F55\u304C\u7279\u5225\u306A\u306E\u304B',
        excerpt: '100%\u30B3\u30CA\u30B3\u30FC\u30D2\u30FC\u304C\u4ED6\u3068\u9055\u3046\u7406\u7531\u3068\u306F\uFF1F\u539F\u7523\u5730\u3001\u98A8\u5473\u3001\u305D\u306E\u4FA1\u5024\u306B\u8FEB\u308B\u8A73\u3057\u3044\u30AC\u30A4\u30C9\u3002',
        readTime: 7,
      },
    ],
  },
  ko: {
    hero: {
      title: '\uBE14\uB85C\uADF8',
      subtitle: '\uD558\uC640\uC774 \uD478\uB4DC \uBB38\uD654, \uCF54\uB098 \uCEE4\uD53C, \uC640\uC774\uD0A4\uD0A4 \uC12C \uC0DD\uD65C\uC5D0 \uB300\uD55C \uC774\uC57C\uAE30, \uAC00\uC774\uB4DC, \uD301.',
    },
    readMore: '\uB354 \uC77D\uAE30 \u2192',
    readTime: '\uBD84 \uC77D\uAE30',
    posts: [
      {
        slug: 'best-donuts-waikiki',
        category: '\uD478\uB4DC \uAC00\uC774\uB4DC',
        title: '\uC640\uC774\uD0A4\uD0A4 \uBCA0\uC2A4\uD2B8 \uB3C4\uB11B 2026: \uB85C\uCEEC \uAC00\uC774\uB4DC',
        excerpt: '\uBC14\uC0AD\uD55C \uBAA8\uCE58 \uB3C4\uB11B\uBD80\uD130 \uC124\uD0D5\uC744 \uBFCC\uB9B0 \uB9D0\uB77C\uC0AC\uB2E4\uAE4C\uC9C0, \uD604\uC9C0\uC778\uC774 \uC120\uD0DD\uD55C \uC640\uC774\uD0A4\uD0A4 \uCD5C\uACE0\uC758 \uB3C4\uB11B \uC2A4\uD31F.',
        readTime: 8,
      },
      {
        slug: 'what-is-bingsu',
        category: '\uD55C\uAD6D \uC74C\uC2DD',
        title: '\uBE59\uC218\uB780? \uD558\uC640\uC774\uC5D0\uC11C \uC990\uAE30\uB294 \uD55C\uAD6D \uBE59\uC218 \uAC00\uC774\uB4DC',
        excerpt: '\uD55C\uAD6D\uC5D0\uC11C \uC0AC\uB791\uBC1B\uB294 \uBE59\uC218 \uB514\uC800\uD2B8\uC5D0 \uB300\uD574 \uC54C\uC544\uBCF4\uACE0, \uC640\uC774\uD0A4\uD0A4\uC5D0\uC11C \uCD5C\uACE0\uC758 \uBE59\uC218\uB97C \uCC3E\uB294 \uBC29\uBC95.',
        readTime: 6,
      },
      {
        slug: 'kona-coffee-guide',
        category: '\uCEE4\uD53C',
        title: '\uCF54\uB098 \uCEE4\uD53C vs \uC77C\uBC18 \uCEE4\uD53C: \uBB34\uC5C7\uC774 \uD2B9\uBCC4\uD55C\uAC00',
        excerpt: '100% \uCF54\uB098 \uCEE4\uD53C\uAC00 \uB2E4\uB978 \uCEE4\uD53C\uC640 \uB2E4\uB978 \uC810\uC740? \uC6D0\uC0B0\uC9C0, \uD48D\uBBF8, \uADF8 \uAC00\uCE58\uC5D0 \uB300\uD55C \uC0C1\uC138 \uAC00\uC774\uB4DC.',
        readTime: 7,
      },
    ],
  },
  zh: {
    hero: {
      title: '\u535A\u5BA2',
      subtitle: '\u5173\u4E8E\u590F\u5A01\u5937\u7F8E\u98DF\u6587\u5316\u3001\u79D1\u7EB3\u5496\u5561\u548C\u5A01\u57FA\u57FA\u5C9B\u5C7F\u751F\u6D3B\u7684\u6545\u4E8B\u3001\u6307\u5357\u548C\u5C0F\u8D34\u58EB\u3002',
    },
    readMore: '\u9605\u8BFB\u66F4\u591A \u2192',
    readTime: '\u5206\u949F\u9605\u8BFB',
    posts: [
      {
        slug: 'best-donuts-waikiki',
        category: '\u7F8E\u98DF\u6307\u5357',
        title: '\u5A01\u57FA\u57FA\u6700\u4F73\u751C\u751C\u5708 2026\uFF1A\u672C\u5730\u4EBA\u6307\u5357',
        excerpt: '\u4ECE\u9165\u8106\u7684\u9EBB\u85AF\u751C\u751C\u5708\u5230\u88F9\u7740\u7CD6\u7684\u9A6C\u62C9\u8428\u8FBE\uFF0C\u63A2\u7D22\u5F53\u5730\u4EBA\u7CBE\u9009\u7684\u5A01\u57FA\u57FA\u9876\u7EA7\u751C\u751C\u5708\u5E97\u3002',
        readTime: 8,
      },
      {
        slug: 'what-is-bingsu',
        category: '\u97E9\u56FD\u7F8E\u98DF',
        title: '\u4EC0\u4E48\u662F\u5228\u51B0\uFF1F\u5728\u590F\u5A01\u5937\u54C1\u5C1D\u97E9\u56FD\u5228\u51B0\u6307\u5357',
        excerpt: '\u4E86\u89E3\u97E9\u56FD\u6700\u53D7\u6B22\u8FCE\u7684\u5228\u51B0\u7518\u54C1\uFF0C\u4EE5\u53CA\u5728\u5A01\u57FA\u57FA\u54EA\u91CC\u53EF\u4EE5\u627E\u5230\u6700\u597D\u7684\u4E00\u7897\u3002',
        readTime: 6,
      },
      {
        slug: 'kona-coffee-guide',
        category: '\u5496\u5561',
        title: '\u79D1\u7EB3\u5496\u5561 vs \u666E\u901A\u5496\u5561\uFF1A\u5B83\u4E3A\u4EC0\u4E48\u7279\u522B',
        excerpt: '100%\u79D1\u7EB3\u5496\u5561\u4E0E\u5176\u4ED6\u5496\u5561\u6709\u4EC0\u4E48\u4E0D\u540C\uFF1F\u6DF1\u5165\u4E86\u89E3\u5176\u4EA7\u5730\u3001\u98CE\u5473\u548C\u4EF7\u503C\u3002',
        readTime: 7,
      },
    ],
  },
  es: {
    hero: {
      title: 'Blog',
      subtitle: 'Historias, gu\u00EDas y consejos sobre la cultura gastron\u00F3mica hawaiana, caf\u00E9 Kona y la vida en Waikiki.',
    },
    readMore: 'Leer M\u00E1s \u2192',
    readTime: 'min de lectura',
    posts: [
      {
        slug: 'best-donuts-waikiki',
        category: 'Gu\u00EDa Gastron\u00F3mica',
        title: 'Los Mejores Donuts en Waikiki 2026: Gu\u00EDa Local',
        excerpt: 'Desde crujientes donuts de mochi hasta malasadas espolvoreadas con az\u00FAcar, descubre los mejores spots de donuts en Waikiki.',
        readTime: 8,
      },
      {
        slug: 'what-is-bingsu',
        category: 'Comida Coreana',
        title: '\u00BFQu\u00E9 es el Bingsu? Tu Gu\u00EDa del Hielo Raspado Coreano en Hawaii',
        excerpt: 'Conoce el bingsu, el postre de hielo raspado favorito de Corea, y d\u00F3nde encontrar los mejores en Waikiki.',
        readTime: 6,
      },
      {
        slug: 'kona-coffee-guide',
        category: 'Caf\u00E9',
        title: 'Caf\u00E9 Kona vs Caf\u00E9 Regular: \u00BFQu\u00E9 Lo Hace Especial?',
        excerpt: '\u00BFQu\u00E9 diferencia al caf\u00E9 100% Kona del resto? Una gu\u00EDa sobre su origen, sabor y por qu\u00E9 vale cada sorbo.',
        readTime: 7,
      },
    ],
  },
};

// Category color mapping
const categoryColors: Record<string, string> = {
  'Food Guide': 'bg-amber-100 text-amber-800',
  '\u30D5\u30FC\u30C9\u30AC\u30A4\u30C9': 'bg-amber-100 text-amber-800',
  '\uD478\uB4DC \uAC00\uC774\uB4DC': 'bg-amber-100 text-amber-800',
  '\u7F8E\u98DF\u6307\u5357': 'bg-amber-100 text-amber-800',
  'Gu\u00EDa Gastron\u00F3mica': 'bg-amber-100 text-amber-800',
  'Korean Food': 'bg-rose-100 text-rose-800',
  '\u97D3\u56FD\u30D5\u30FC\u30C9': 'bg-rose-100 text-rose-800',
  '\uD55C\uAD6D \uC74C\uC2DD': 'bg-rose-100 text-rose-800',
  '\u97E9\u56FD\u7F8E\u98DF': 'bg-rose-100 text-rose-800',
  'Comida Coreana': 'bg-rose-100 text-rose-800',
  'Coffee': 'bg-orange-100 text-orange-800',
  '\u30B3\u30FC\u30D2\u30FC': 'bg-orange-100 text-orange-800',
  '\uCEE4\uD53C': 'bg-orange-100 text-orange-800',
  '\u5496\u5561': 'bg-orange-100 text-orange-800',
  'Caf\u00E9': 'bg-orange-100 text-orange-800',
};

export default function BlogPage() {
  const params = useParams();
  const locale = (params?.locale as string) || 'en';
  const t = content[locale as keyof typeof content] || content.en;

  return (
    <main className="min-h-screen bg-white">
      <SubpageNav locale={locale} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-amber-900 via-amber-800 to-orange-900 py-20 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Blog Post Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.posts.map((post, index) => (
            <motion.article
              key={post.slug}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/${locale}/blog/${post.slug}`} className="block">
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {/* Card Top Accent */}
                  <div className="h-2 bg-gradient-to-r from-amber-500 to-orange-500" />

                  <div className="p-6">
                    {/* Category Tag */}
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
                        categoryColors[post.category] || 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-700 transition-colors leading-snug">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-400">
                        {post.readTime} {t.readTime}
                      </span>
                      <span className="text-sm font-semibold text-orange-600 group-hover:text-orange-700 transition-colors">
                        {t.readMore}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
