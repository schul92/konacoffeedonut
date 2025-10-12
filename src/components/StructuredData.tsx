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
    '@type': 'Restaurant',
    '@id': 'https://www.konacoffeedonut.com/#restaurant',
    name: 'Kona Coffee Donut',
    alternateName: 'BONEPI MOCHILAND x Honolulu Coffee',
    description: 'Authentic Hawaiian coffee and artisan mochi donuts. Collaboration between BONEPI MOCHILAND and Honolulu Coffee in Waikiki.',
    image: 'https://www.konacoffeedonut.com/og-image.jpg',
    url: `https://www.konacoffeedonut.com/${locale}`,
    telephone: '+1-808-XXX-XXXX', // TODO: Add real phone number
    email: 'info@konacoffeedonut.com', // TODO: Add real email
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
    ],
    sameAs: [
      'https://www.instagram.com/konacoffeedonut',
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
        description: '100% Kona coffee in collaboration with Honolulu Coffee',
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
    </>
  );
}
