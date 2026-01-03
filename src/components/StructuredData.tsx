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
    es: 'Español',
  };

  // Locale-specific descriptions for better SEO
  const descriptions: Record<string, string> = {
    en: 'Best Kona coffee and mochi donuts in Waikiki, Honolulu. Coffee near me, donuts near me. Featuring premium Kona coffee by Honolulu Coffee and artisan mochi donuts by MOCHILAND. Perfect for tourists visiting Hawaii.',
    ja: 'ワイキキで最高のコナコーヒーとモチドーナツ。近くのカフェ、近くのドーナツ。ホノルルコーヒーのプレミアムコナコーヒーとモチランドの職人モチドーナツ。ハワイ観光に最適。',
    ko: '와이키키 최고의 코나 커피와 모찌 도넛. 근처 카페, 근처 도넛. 호놀룰루 커피의 프리미엄 코나 커피와 모찌랜드의 장인 모찌 도넛. 하와이 여행객에게 완벽.',
    zh: '威基基最好的科纳咖啡和麻糬甜甜圈。附近咖啡店，附近甜甜圈。檀香山咖啡的优质科纳咖啡和MOCHILAND的手工麻糬甜甜圈。非常适合来夏威夷旅游的游客。',
    es: 'El mejor café Kona y donuts de mochi en Waikiki, Honolulu. Café cerca de mí, donuts cerca de mí. Café Kona premium de Honolulu Coffee y donuts de mochi artesanales de MOCHILAND. Perfecto para turistas que visitan Hawaii.',
  };

  // Locale-specific keywords for better local SEO
  const keywordsByLocale: Record<string, string> = {
    en: 'kona coffee waikiki, coffee near me, donuts near me, mochi donuts hawaii, best coffee waikiki, honolulu coffee, waikiki breakfast, tourist cafe waikiki, malasada near me, bingsu near me',
    ja: 'コナコーヒー ワイキキ, 近くのカフェ, 近くのドーナツ, モチドーナツ ハワイ, ワイキキ おすすめ カフェ, ホノルルコーヒー, ワイキキ 朝食, ハワイ 観光 カフェ, マラサダ ハワイ, ビングス ハワイ',
    ko: '코나 커피 와이키키, 근처 카페, 근처 도넛, 모찌 도넛 하와이, 와이키키 추천 카페, 호놀룰루 커피, 와이키키 아침식사, 하와이 관광 카페, 말라사다 하와이, 빙수 하와이',
    zh: '科纳咖啡 威基基, 附近咖啡店, 附近甜甜圈, 麻糬甜甜圈 夏威夷, 威基基 推荐 咖啡店, 檀香山咖啡, 威基基 早餐, 夏威夷 旅游 咖啡店, 马拉萨达 夏威夷, 刨冰 夏威夷',
    es: 'café kona waikiki, café cerca de mí, donuts cerca de mí, donuts mochi hawaii, mejor café waikiki, honolulu coffee, desayuno waikiki, café turístico waikiki, malasada hawaii, bingsu hawaii',
  };

  // Local Business Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['Restaurant', 'CafeOrCoffeeShop', 'Bakery'],
    '@id': 'https://www.konacoffeedonut.com/#restaurant',
    name: 'Kona Coffee Donut - Waikiki',
    alternateName: ['MOCHILAND x Honolulu Coffee', 'Kona Coffee Donut Waikiki', 'Kona Coffee Honolulu'],
    description: descriptions[locale] || descriptions.en,
    image: 'https://www.konacoffeedonut.com/og-image.jpg',
    url: `https://www.konacoffeedonut.com/${locale}`,
    // telephone: '+1-808-XXX-XXXX', // TODO: Add real phone number when available
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
    keywords: keywordsByLocale[locale] || keywordsByLocale.en,
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
      // telephone: '+1-808-XXX-XXXX', // TODO: Add real phone number when available
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: ['English', 'Japanese', 'Korean', 'Chinese', 'Spanish'],
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

  // FAQ Schema - Common Questions (15+ questions for comprehensive SEO)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What makes Kona Coffee special?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve premium Kona coffee in partnership with Honolulu Coffee, Hawaii\'s premier coffee roaster. Kona coffee is grown on the slopes of Mauna Loa in Hawaii and is known for its smooth, rich flavor with low acidity. It\'s one of the most sought-after coffees in the world due to Hawaii\'s unique volcanic soil and ideal growing conditions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are mochi donuts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mochi donuts are artisan donuts made with rice flour (mochiko), giving them a unique texture that is crispy on the outside and chewy on the inside. We feature MOCHILAND mochi donuts at our Waikiki location, offering a variety of flavors including ube, matcha, black sesame, and seasonal specials.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Kona Coffee Donut located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are located at 2142 Kalakaua Ave, Honolulu, HI 96815 in the heart of Waikiki, Hawaii. We\'re just a short walk from Waikiki Beach, making us the perfect spot for tourists and locals alike.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are your opening hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are open daily from 7:00 AM to 9:00 PM, serving fresh coffee and donuts throughout the day. We recommend visiting in the morning for the freshest selection of donuts.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer takeout?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer takeout service. You can grab your favorite coffee and donuts to go. Our donuts are packaged carefully to maintain freshness.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is malasada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Malasada is a traditional Hawaiian-Portuguese fried dough pastry that was brought to Hawaii by Portuguese immigrants. Our malasadas are freshly made, coated in sugar, and can be filled with various flavors like custard, chocolate, or haupia (coconut).',
        },
      },
      {
        '@type': 'Question',
        name: 'What is bingsu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bingsu is a popular Korean shaved ice dessert made with finely shaved milk ice and topped with various ingredients. Our Hawaiian-style bingsu features fresh tropical fruits, mochi, and sweet toppings - perfect for cooling down in the Waikiki heat.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you have vegan or gluten-free options?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While our mochi donuts contain rice flour which is naturally gluten-free, they may be prepared in facilities that handle wheat. Please inform our staff about any dietary restrictions and we\'ll do our best to accommodate you.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is parking available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Street parking and nearby parking garages are available in the Waikiki area. Many visitors also walk from nearby hotels or take public transportation to our Kalakaua Avenue location.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you accept credit cards?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we accept all major credit cards, debit cards, and cash. We also accept contactless payment methods like Apple Pay and Google Pay.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between Kona coffee and regular coffee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kona coffee is grown exclusively in the Kona district of Hawaii\'s Big Island. The unique combination of volcanic soil, tropical climate, and high altitude creates a coffee with exceptional smoothness, low acidity, and distinctive flavor notes. True 100% Kona coffee is rare and considered among the finest coffees in the world.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer Wi-Fi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer free Wi-Fi for our customers. Feel free to work or browse while enjoying your coffee and donuts.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I buy Kona coffee beans to take home?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We sell premium Kona coffee beans through our partnership with Honolulu Coffee. They make perfect souvenirs and gifts from Hawaii.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are Korean corn dogs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Korean corn dogs (also known as K-dogs) are a popular Korean street food featuring a hot dog or cheese on a stick, coated in a variety of batters, deep-fried, and topped with different seasonings. Our corn dogs are crispy on the outside and perfectly seasoned.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Kona Coffee Donut family-friendly?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! We welcome families with children. Our menu has something for everyone, from sweet mochi donuts to refreshing bingsu. We have a relaxed, friendly atmosphere perfect for families visiting Waikiki.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you hire tourists or international students?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we are always looking for enthusiastic team members! We welcome applications from individuals with valid work authorization. Please visit our careers page or stop by our store to learn about current openings.',
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
    image: [
      'https://www.konacoffeedonut.com/images/menu/donut.webp',
      'https://www.konacoffeedonut.com/images/menu/coffee.webp',
    ],
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
