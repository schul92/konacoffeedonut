import Script from 'next/script';

interface StructuredDataProps {
  locale: string;
}

export default function StructuredData({ locale }: StructuredDataProps) {
  const localeNames: Record<string, string> = {
    en: 'English',
    ja: '日本語',
    ko: '한국어',
    zh: '中文',
  };

  // Local Business Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['Restaurant', 'CafeOrCoffeeShop', 'Bakery'],
    '@id': 'https://www.konacoffeedonut.com/#restaurant',
    name: 'Kona Coffee Donut - Waikiki',
    alternateName: ['MOCHILAND x Honolulu Coffee', 'Kona Coffee Donut Waikiki', 'Kona Coffee Honolulu'],
    description: 'Best Kona coffee and mochi donuts in Waikiki, Honolulu. Featuring premium Kona coffee by Honolulu Coffee and artisan mochi donuts by MOCHILAND. Perfect for tourists visiting Hawaii.',
    image: 'https://www.konacoffeedonut.com/og-image.jpg',
    url: `https://www.konacoffeedonut.com/${locale}`,
    telephone: '+1-808-XXX-XXXX', // TODO: Add real phone number when available
    email: 'konacoffeedonut@gmail.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2142 Kalakaua Ave',
      addressLocality: 'Honolulu',
      addressRegion: 'HI',
      postalCode: '96815',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.2793,
      longitude: -157.8294,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '21:00',
      },
    ],
    servesCuisine: ['Coffee', 'Donuts', 'Desserts', 'Hawaiian'],
    menu: `https://www.konacoffeedonut.com/${locale}#menu`,
    acceptsReservations: 'False',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    currenciesAccepted: 'USD',
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Free WiFi',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Takeout',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Outdoor Seating',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Tourist Friendly',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Multilingual Staff',
        value: true,
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Walking Distance from Waikiki Beach',
        value: true,
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Honolulu',
      },
      {
        '@type': 'State',
        name: 'Hawaii',
      },
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 21.2793,
          longitude: -157.8294,
        },
        geoRadius: '5000',
      },
    ],
    keywords: 'kona coffee waikiki, coffee near me, donuts near me, mochi donuts hawaii, best coffee waikiki, honolulu coffee, waikiki breakfast, tourist cafe waikiki, kalakaua ave coffee, hawaii coffee shop',
    sameAs: [
      'https://www.instagram.com/konacoffeedonut',
      'https://www.instagram.com/mochinut_fortlee',
      'https://www.instagram.com/bonepi_mochiland',
      'https://www.instagram.com/bonepi_mochiland_official',
      'https://www.facebook.com/konacoffeedonut',
    ],
    potentialAction: {
      '@type': 'OrderAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `https://www.konacoffeedonut.com/${locale}#menu`,
        inLanguage: locale,
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
    },
  };

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.konacoffeedonut.com/#organization',
    name: 'Kona Coffee Donut',
    url: 'https://www.konacoffeedonut.com',
    logo: 'https://www.konacoffeedonut.com/konacoffee.png',
    description: 'Premium Kona coffee and artisan mochi donuts in Waikiki, Hawaii',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2142 Kalakaua Ave',
      addressLocality: 'Honolulu',
      addressRegion: 'HI',
      postalCode: '96815',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-808-XXX-XXXX',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: ['English', 'Japanese', 'Korean', 'Chinese'],
    },
    sameAs: [
      'https://www.instagram.com/konacoffeedonut',
      'https://www.instagram.com/mochinut_fortlee',
      'https://www.instagram.com/bonepi_mochiland',
      'https://www.instagram.com/bonepi_mochiland_official',
      'https://www.facebook.com/konacoffeedonut',
    ],
  };

  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.konacoffeedonut.com/#website',
    url: 'https://www.konacoffeedonut.com',
    name: 'Kona Coffee Donut',
    description: 'Authentic Hawaiian coffee and artisan mochi donuts',
    publisher: {
      '@id': 'https://www.konacoffeedonut.com/#organization',
    },
    inLanguage: localeNames[locale] || 'English',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.konacoffeedonut.com/{locale}?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // Menu Schema
  const menuSchema = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'Kona Coffee Donut Menu',
    description: 'Our selection of artisan mochi donuts, Kona coffee, malasada, bingsu, and more',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Donuts',
        description: 'Artisan mochi donuts made with rice flour',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'Mochi Donuts',
            description: 'Crispy outside, chewy inside mochi donuts',
          },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Coffee',
        description: 'Premium Kona coffee by Honolulu Coffee',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: 'Kona Coffee',
            description: "Hawaii's number one premium Kona coffee",
          },
        ],
      },
      {
        '@type': 'MenuSection',
        name: 'Malasada',
        description: 'Hawaiian-Portuguese fried dough pastries',
      },
      {
        '@type': 'MenuSection',
        name: 'Bingsu',
        description: 'Hawaiian style bingsu with fresh fruits',
      },
      {
        '@type': 'MenuSection',
        name: 'Korean Corn Dogs',
        description: 'Crispy Korean-style corn dogs',
      },
      {
        '@type': 'MenuSection',
        name: 'Smoothies',
        description: 'Fresh tropical fruit smoothies',
      },
    ],
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `https://www.konacoffeedonut.com/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Menu',
        item: `https://www.konacoffeedonut.com/${locale}#menu`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'About Us',
        item: `https://www.konacoffeedonut.com/${locale}#about`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Location',
        item: `https://www.konacoffeedonut.com/${locale}#location`,
      },
    ],
  };

  // Video Object Schema - Waikiki Experience Videos
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Waikiki Experience - Kona Coffee Donut',
    description: 'Experience the ambiance of our Waikiki location featuring premium Kona coffee and artisan mochi donuts',
    thumbnailUrl: 'https://www.konacoffeedonut.com/og-image.jpg',
    uploadDate: '2025-01-15T08:00:00+00:00',
    contentUrl: 'https://www.konacoffeedonut.com/videos/waikiki_1.mp4',
    embedUrl: `https://www.konacoffeedonut.com/${locale}`,
    duration: 'PT30S',
    publisher: {
      '@type': 'Organization',
      name: 'Kona Coffee Donut',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.konacoffeedonut.com/konacoffee.png',
      },
    },
  };

  // FAQ Schema - Common Questions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What makes Kona Coffee special?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve premium Kona coffee in partnership with Honolulu Coffee, Hawaii\'s premier coffee roaster. Kona coffee is grown on the slopes of Mauna Loa in Hawaii and is known for its smooth, rich flavor with low acidity.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are mochi donuts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mochi donuts are artisan donuts made with rice flour, giving them a unique texture that is crispy on the outside and chewy on the inside. We feature MOCHILAND mochi donuts at our Waikiki location.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Kona Coffee Donut located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are located at 2142 Kalakaua Ave, Honolulu, HI 96815 in the heart of Waikiki, Hawaii.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are your opening hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are open daily from 7:00 AM to 9:00 PM, serving fresh coffee and donuts throughout the day.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer takeout?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer takeout service. You can grab your favorite coffee and donuts to go.',
        },
      },
    ],
  };

  // Product Schema - Featured Items
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Premium Kona Coffee & Mochi Donuts',
    description: 'Authentic Hawaiian experience featuring premium Kona coffee and artisan mochi donuts',
    brand: {
      '@type': 'Brand',
      name: 'Kona Coffee Donut',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '3.00',
      highPrice: '15.00',
      offerCount: '20',
      availability: 'https://schema.org/InStock',
      url: `https://www.konacoffeedonut.com/${locale}#menu`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '250',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <>
      {/* Local Business Schema */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Website Schema */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Menu Schema */}
      <Script
        id="menu-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />

      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Video Object Schema */}
      <Script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Product Schema */}
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
