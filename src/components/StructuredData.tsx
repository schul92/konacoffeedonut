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

  // GEO-Optimized Entity Introduction with Citations & Data (CITABLE framework)
  // Includes: specific statistics, authoritative sources, verifiable claims
  const entityIntro = {
    en: 'Kona Coffee Donut is a Hawaiian café and bakery at 2142 Kalakaua Ave, Honolulu, HI 96815, opening February 2026. Located 400 meters (5-minute walk) from Waikiki Beach. We partner with Honolulu Coffee (est. 1992, Hawaii\'s largest Kona coffee chain) to serve 100% pure Kona coffee—grown at 500-900m elevation on Mauna Loa and Hualalai volcanoes, representing less than 1% of global coffee production (Kona Coffee Council). We also feature MOCHILAND artisan mochi donuts (50+ US locations), freshly prepared daily in-store using rice flour (mochiko). Open 7AM-9PM daily (14 hours).',
    ja: 'Kona Coffee Donutは2142 Kalakaua Ave, Honolulu, HI 96815に位置し、2026年2月オープン。ワイキキビーチから400m（徒歩5分）。ホノルルコーヒー（1992年創業、ハワイ最大のコナコーヒーチェーン）と提携し、100%純粋コナコーヒーを提供。コナコーヒーはマウナロア山とフアラライ山の標高500-900mで栽培され、世界のコーヒー生産量の1%未満（コナコーヒー協会）。MOCHILAND（米国50店舗以上）の職人モチドーナツを毎日店内で手作り。営業時間：毎日7時〜21時（14時間）。',
    ko: 'Kona Coffee Donut은 2142 Kalakaua Ave, Honolulu, HI 96815에 위치하며, 2026년 2월 오픈. 와이키키 비치에서 400m(도보 5분). 호놀룰루 커피(1992년 설립, 하와이 최대 코나 커피 체인)와 제휴하여 100% 순수 코나 커피 제공. 코나 커피는 마우나 로아와 후알라라이 화산의 해발 500-900m에서 재배되며 전 세계 생산량의 1% 미만(코나 커피 협회). MOCHILAND(미국 50개 이상 매장)의 장인 모찌 도넛을 매일 매장에서 직접 제조. 영업시간: 매일 7시-21시(14시간).',
    zh: 'Kona Coffee Donut位于2142 Kalakaua Ave, Honolulu, HI 96815，2026年2月开业。距威基基海滩400米（步行5分钟）。与檀香山咖啡（1992年成立，夏威夷最大科纳咖啡连锁）合作提供100%纯正科纳咖啡——产自冒纳罗亚和胡阿拉莱火山海拔500-900米处，仅占全球咖啡产量不到1%（科纳咖啡协会）。提供MOCHILAND（美国50多家门店）手工麻糬甜甜圈，每天店内新鲜制作。营业时间：每天7点-21点（14小时）。',
    es: 'Kona Coffee Donut es un café hawaiano en 2142 Kalakaua Ave, Honolulu, HI 96815, apertura febrero 2026. A 400 metros (5 min a pie) de Waikiki Beach. Asociados con Honolulu Coffee (est. 1992, la cadena de café Kona más grande de Hawái) para servir café 100% Kona puro—cultivado a 500-900m de altitud en los volcanes Mauna Loa y Hualalai, representando menos del 1% de la producción mundial (Kona Coffee Council). También servimos donuts mochi artesanales de MOCHILAND (50+ ubicaciones en EE.UU.), preparados frescos diariamente. Horario: 7AM-9PM diario (14 horas).',
  };

  // Local Business Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['Restaurant', 'CafeOrCoffeeShop', 'Bakery'],
    '@id': 'https://www.konacoffeedonut.com/#restaurant',
    name: 'Kona Coffee Donut - Waikiki',
    alternateName: ['MOCHILAND x Honolulu Coffee', 'Kona Coffee Donut Waikiki', 'Kona Coffee Honolulu'],
    description: entityIntro[locale as keyof typeof entityIntro] || entityIntro.en,
    // GEO: Speakable property for voice assistants (Siri, Alexa, Google Assistant)
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.entity-intro', '.faq-answer', 'h1', 'h2'],
    },
    image: [
      'https://www.konacoffeedonut.com/og-image.jpg',
      'https://www.konacoffeedonut.com/images/menu/donut.webp',
      'https://www.konacoffeedonut.com/images/menu/coffee.webp',
    ],
    url: `https://www.konacoffeedonut.com/${locale}`,
    // telephone: '+1-808-XXX-XXXX', // TODO: Add real phone number when available
    email: 'info@konacoffeedonut.com',
    priceRange: '$$',
    // GEO: Add founding date for entity credibility
    foundingDate: '2026-02-01',
    // GEO: Add slogan for brand recognition
    slogan: 'Authentic Hawaiian Coffee & Artisan Mochi Donuts',
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
    thumbnailUrl: 'https://www.konacoffeedonut.com/videos/waikiki_1_poster.jpg',
    uploadDate: '2026-01-15T08:00:00+00:00',
    contentUrl: 'https://www.konacoffeedonut.com/videos/waikiki_1_optimized.mp4',
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

  // GEO: WebPage schema with dateModified for freshness signals
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://www.konacoffeedonut.com/${locale}/#webpage`,
    url: `https://www.konacoffeedonut.com/${locale}`,
    name: 'Kona Coffee Donut - Authentic Hawaiian Coffee & Mochi Donuts in Waikiki',
    description: entityIntro[locale as keyof typeof entityIntro] || entityIntro.en,
    // GEO: Critical freshness signals for AI engines
    datePublished: '2025-01-01T00:00:00+00:00',
    dateModified: new Date().toISOString(),
    inLanguage: locale,
    isPartOf: {
      '@id': 'https://www.konacoffeedonut.com/#website',
    },
    about: {
      '@id': 'https://www.konacoffeedonut.com/#restaurant',
    },
    // GEO: Speakable for voice search
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.entity-intro', '.hero-description', 'h1'],
    },
    // GEO: Primary entity for AI understanding
    mainEntity: {
      '@id': 'https://www.konacoffeedonut.com/#restaurant',
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

  // Product Schema - Featured Items with Citations & Data
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': 'https://www.konacoffeedonut.com/#product',
    name: 'Premium 100% Kona Coffee & Artisan Mochi Donuts',
    description: 'Authentic Hawaiian café experience featuring 100% pure Kona coffee (grown at 500-900m elevation, less than 1% of world production) from Honolulu Coffee (est. 1992) and artisan mochi donuts from MOCHILAND (50+ US locations). Freshly prepared daily using traditional rice flour (mochiko) for a unique chewy texture.',
    image: [
      'https://www.konacoffeedonut.com/images/menu/donut.webp',
      'https://www.konacoffeedonut.com/images/menu/coffee.webp',
      'https://www.konacoffeedonut.com/og-image.jpg',
    ],
    brand: {
      '@type': 'Brand',
      name: 'Kona Coffee Donut',
      logo: 'https://www.konacoffeedonut.com/konacoffee.png',
    },
    // GEO: Knowledge graph - explicit brand relationships
    manufacturer: {
      '@type': 'Organization',
      name: 'Kona Coffee Donut LLC',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2142 Kalakaua Ave',
        addressLocality: 'Honolulu',
        addressRegion: 'HI',
        postalCode: '96815',
        addressCountry: 'US',
      },
    },
    // GEO: Specific product attributes for citation readiness
    material: 'Rice flour (mochiko), 100% Kona coffee beans',
    productionDate: '2026-02-01',
    countryOfOrigin: {
      '@type': 'Country',
      name: 'United States',
      identifier: 'US-HI',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '3.50',
      highPrice: '12.00',
      offerCount: '25',
      availability: 'https://schema.org/PreOrder',
      availabilityStarts: '2026-02-01',
      url: `https://www.konacoffeedonut.com/${locale}#menu`,
      seller: {
        '@id': 'https://www.konacoffeedonut.com/#organization',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
  };

  // GEO: ItemList Schema for Menu (Knowledge Graph optimization)
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Kona Coffee Donut Menu Items',
    description: 'Complete menu of Hawaiian café items including Kona coffee, mochi donuts, malasadas, bingsu, and Korean corn dogs',
    numberOfItems: 6,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Product',
          name: '100% Kona Coffee',
          description: 'Premium single-origin Kona coffee from Honolulu Coffee, grown at 500-900m elevation on Hawaii\'s Big Island volcanic slopes. Less than 1% of world coffee production.',
          image: 'https://www.konacoffeedonut.com/images/menu/coffee.webp',
          offers: { '@type': 'Offer', priceCurrency: 'USD', price: '5.00' },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Product',
          name: 'MOCHILAND Mochi Donuts',
          description: 'Artisan mochi donuts made with rice flour (mochiko) for a unique crispy-outside, chewy-inside texture. Freshly prepared daily in-store. Flavors: ube, matcha, black sesame, seasonal.',
          image: 'https://www.konacoffeedonut.com/images/menu/donut.webp',
          offers: { '@type': 'Offer', priceCurrency: 'USD', price: '3.50' },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Product',
          name: 'Hawaiian Malasada',
          description: 'Traditional Portuguese-Hawaiian fried dough pastry, brought to Hawaii by Portuguese immigrants in the 1800s. Freshly made, sugar-coated, with optional fillings: custard, chocolate, haupia (coconut).',
          image: 'https://www.konacoffeedonut.com/images/menu/malasada.webp',
          offers: { '@type': 'Offer', priceCurrency: 'USD', price: '4.00' },
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Product',
          name: 'Korean Bingsu',
          description: 'Korean shaved ice dessert (빙수) made with finely shaved milk ice, topped with fresh tropical Hawaiian fruits, mochi, and sweet condensed milk.',
          image: 'https://www.konacoffeedonut.com/images/menu/bingsu.webp',
          offers: { '@type': 'Offer', priceCurrency: 'USD', price: '12.00' },
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'Product',
          name: 'Korean Corn Dog',
          description: 'Korean street food (핫도그) featuring mozzarella cheese or sausage coated in sweet rice flour batter with crispy potato or ramen coating. Fried to order.',
          image: 'https://www.konacoffeedonut.com/images/menu/hotdog.webp',
          offers: { '@type': 'Offer', priceCurrency: 'USD', price: '6.00' },
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'Product',
          name: 'Acai Bowl',
          description: 'Brazilian-Hawaiian superfood bowl with organic acai berry base, topped with fresh Hawaiian fruits (banana, strawberry, mango), granola, and honey.',
          image: 'https://www.konacoffeedonut.com/images/menu/acai.webp',
          offers: { '@type': 'Offer', priceCurrency: 'USD', price: '10.00' },
        },
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

      {/* Video Object Schema */}
      <Script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      {/* GEO: WebPage Schema with freshness signals */}
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
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

      {/* GEO: ItemList Schema for Knowledge Graph */}
      <Script
        id="itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  );
}
