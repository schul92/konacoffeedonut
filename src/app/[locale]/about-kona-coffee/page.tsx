import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'What Makes Kona Coffee Special? | 100% Hawaiian Kona Coffee in Waikiki',
    description: 'Discover why Kona coffee is one of the world\'s finest coffees. Learn about premium Hawaiian Kona beans, unique flavor profiles, and where to find authentic 100% Kona coffee in Waikiki.',
    keywords: [
      'kona coffee',
      '100% kona coffee',
      'hawaiian kona coffee',
      'kona coffee beans',
      'premium kona coffee',
      'kona coffee waikiki',
      'authentic kona coffee',
      'best kona coffee',
      'honolulu coffee',
      'kona coffee taste',
      'kona coffee flavor',
      'where to buy kona coffee',
      'kona coffee hawaii',
      'kona district coffee',
      'volcanic coffee',
    ],
    openGraph: {
      title: 'What Makes Kona Coffee Special? | 100% Hawaiian Kona Coffee',
      description: 'Experience authentic 100% Kona coffee at Kona Coffee Donut in Waikiki. Learn why Kona coffee is considered one of the world\'s finest coffees.',
      type: 'article',
      locale: 'en_US',
      siteName: 'Kona Coffee Donut',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Kona Coffee Donut - Premium 100% Kona Coffee in Waikiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'What Makes Kona Coffee Special? | 100% Hawaiian Kona Coffee',
      description: 'Discover why Kona coffee is one of the world\'s finest coffees. Learn about premium Hawaiian Kona beans and authentic Kona coffee in Waikiki.',
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: 'https://konacoffeedonut.com/about-kona-coffee',
      languages: {
        'en': 'https://konacoffeedonut.com/en/about-kona-coffee',
        'ja': 'https://konacoffeedonut.com/ja/about-kona-coffee',
        'ko': 'https://konacoffeedonut.com/ko/about-kona-coffee',
        'zh': 'https://konacoffeedonut.com/zh/about-kona-coffee',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function AboutKonaCoffee() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Makes Kona Coffee Special?',
    description:
      'Discover why Kona coffee is one of the world\'s finest coffees. Learn about premium Hawaiian Kona beans, unique flavor profiles, and where to find authentic 100% Kona coffee in Waikiki.',
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
      '@id': 'https://konacoffeedonut.com/about-kona-coffee',
    },
    about: {
      '@type': 'Product',
      name: '100% Kona Coffee',
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
        name: 'About Kona Coffee',
        item: 'https://konacoffeedonut.com/about-kona-coffee',
      },
    ],
  };

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Kona coffee worth the price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Kona coffee\'s premium price reflects its limited production, hand-picking process, and exceptional quality. With less than 1% of global coffee production, genuine 100% Kona coffee offers a unique taste experience you can\'t find elsewhere.',
        },
      },
      {
        '@type': 'Question',
        name: 'What\'s the difference between "Kona blend" and "100% Kona"?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '"Kona blend" may contain as little as 10% actual Kona beans mixed with cheaper coffees. Always look for "100% Kona Coffee" to ensure you\'re getting authentic Hawaiian Kona beans. At Kona Coffee Donut, we serve only 100% Kona coffee.',
        },
      },
      {
        '@type': 'Question',
        name: 'How should I brew Kona coffee at home?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pour-over, French press, or drip methods all work beautifully with Kona coffee. Use water just below boiling (195-205°F) and a medium grind. The coffee-to-water ratio should be about 1:16 for optimal flavor extraction.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I buy Kona coffee beans to take home?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! Visit us at our Waikiki location to purchase freshly roasted Kona coffee beans. We offer various roast levels and package sizes—perfect for gifts or bringing a taste of Hawaii home with you.',
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
              What Makes Kona Coffee Special?
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Discover why Kona coffee is considered one of the world's finest coffees,
              grown exclusively on the volcanic slopes of Hawaii's Big Island.
            </p>
            <Link
              href="/#menu"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              Try Our Kona Coffee
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 md:px-8 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Gold Standard of Hawaiian Coffee
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            <strong>Kona coffee</strong> is a premium <strong>100% Hawaiian coffee</strong> grown
            exclusively in the Kona District on the Big Island of Hawaii. Known for its smooth,
            rich flavor with low acidity, Kona coffee represents less than 1% of the world's
            coffee production, making it one of the rarest and most sought-after coffees globally.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            At <strong>Kona Coffee Donut in Waikiki</strong>, we proudly serve authentic
            <strong> 100% Kona coffee</strong> in partnership with <strong>Honolulu Coffee</strong>,
            Hawaii's premier coffee roaster. Every cup delivers the genuine taste of Hawaii's
            coffee-growing heritage.
          </p>
        </section>

        {/* Why Kona Coffee is Special */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Kona Coffee Tastes Different
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                🌋 Perfect Growing Conditions
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Kona coffee thrives on the volcanic slopes of Mauna Loa and Hualalai mountains.
                The rich volcanic soil, combined with ideal elevation (800-2,500 feet), creates
                the perfect terroir for coffee cultivation. Morning sunshine, afternoon cloud cover,
                and mild nights create a microclimate found nowhere else on Earth.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                ☕ Distinctive Flavor Profile
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Premium Kona coffee beans</strong> produce a medium-bodied brew with
                low acidity and a smooth finish. Expect tasting notes of brown sugar, milk chocolate,
                subtle fruit undertones, and a hint of nuttiness. The flavor is clean, balanced,
                and never bitter—perfect for both black coffee enthusiasts and those who prefer
                cream and sugar.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                👨‍🌾 Hand-Picked & Small-Batch
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Unlike mass-produced commercial coffee, <strong>Kona coffee cherries are
                hand-picked</strong> at peak ripeness by local farmers. This labor-intensive
                process ensures only the best cherries make it to your cup. Small family farms
                dominate Kona coffee production, maintaining generations of coffee-growing expertise.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                🏝️ 100% Hawaiian Origin
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                True <strong>Kona coffee must be grown in the Kona District</strong> to carry
                the name. The "100% Kona Coffee" label is protected, ensuring authenticity.
                Beware of "Kona blends" that may contain as little as 10% actual Kona beans—at
                our Waikiki location, we serve only genuine 100% Kona coffee.
              </p>
            </div>
          </div>
        </section>

        {/* Kona Coffee vs Other Coffees */}
        <section className="mb-16 bg-orange-50 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Kona Coffee vs. Other Premium Coffees
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-orange-200">
                  <th className="pb-4 pr-4 font-bold text-gray-900">Coffee Type</th>
                  <th className="pb-4 pr-4 font-bold text-gray-900">Flavor</th>
                  <th className="pb-4 font-bold text-gray-900">Acidity</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-orange-100">
                  <td className="py-4 pr-4 font-bold text-orange-600">100% Kona Coffee</td>
                  <td className="py-4 pr-4">Smooth, balanced, chocolate notes</td>
                  <td className="py-4">Low</td>
                </tr>
                <tr className="border-b border-orange-100">
                  <td className="py-4 pr-4">Colombian Coffee</td>
                  <td className="py-4 pr-4">Bright, fruity, caramel</td>
                  <td className="py-4">Medium-High</td>
                </tr>
                <tr className="border-b border-orange-100">
                  <td className="py-4 pr-4">Ethiopian Coffee</td>
                  <td className="py-4 pr-4">Floral, wine-like, berry</td>
                  <td className="py-4">High</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4">Brazilian Coffee</td>
                  <td className="py-4 pr-4">Nutty, chocolatey, heavy body</td>
                  <td className="py-4">Low</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Kona coffee's low acidity makes it ideal for those with sensitive stomachs while
            maintaining complex flavor development.
          </p>
        </section>

        {/* Where to Buy */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Experience Authentic Kona Coffee in Waikiki
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Located in the heart of <strong>Waikiki at 2142 Kalakaua Ave</strong>,
            Kona Coffee Donut is your destination for genuine <strong>100% Kona coffee</strong>
            paired with artisan mochi donuts from MOCHILAND. We partner with
            <strong> Honolulu Coffee</strong>, Hawaii's most trusted name in premium Kona coffee
            since 1992.
          </p>

          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Kona Coffee?</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>100% certified Kona coffee beans—no blends, no compromises</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>Freshly brewed daily using traditional Hawaiian roasting methods</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>Perfect pairing with our artisan mochi donuts and malasadas</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>Convenient Waikiki location—open daily 7 AM to 9 PM</span>
              </li>
            </ul>
            <Link
              href="/#location"
              className="inline-block mt-6 bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              Visit Us in Waikiki
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions About Kona Coffee
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Is Kona coffee worth the price?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes! Kona coffee's premium price reflects its limited production, hand-picking
                process, and exceptional quality. With less than 1% of global coffee production,
                genuine 100% Kona coffee offers a unique taste experience you can't find elsewhere.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What's the difference between "Kona blend" and "100% Kona"?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                "Kona blend" may contain as little as 10% actual Kona beans mixed with cheaper
                coffees. Always look for "100% Kona Coffee" to ensure you're getting authentic
                Hawaiian Kona beans. At Kona Coffee Donut, we serve only 100% Kona coffee.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How should I brew Kona coffee at home?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Pour-over, French press, or drip methods all work beautifully with Kona coffee.
                Use water just below boiling (195-205°F) and a medium grind. The coffee-to-water
                ratio should be about 1:16 for optimal flavor extraction.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I buy Kona coffee beans to take home?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Absolutely! Visit us at our Waikiki location to purchase freshly roasted Kona
                coffee beans. We offer various roast levels and package sizes—perfect for gifts
                or bringing a taste of Hawaii home with you.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Experience Hawaii's Best Coffee?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Visit Kona Coffee Donut in Waikiki and taste the difference that 100% Kona coffee makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#menu"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors"
              >
                View Our Menu
              </Link>
              <Link
                href="/#location"
                className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold px-8 py-4 rounded-full transition-colors"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
