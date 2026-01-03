import type { Metadata } from "next";
import { Geist, Geist_Mono, Righteous } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import StructuredData from '@/components/StructuredData';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import MetaPixel from '@/components/MetaPixel';
import HiringBanner from '@/components/HiringBanner';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const righteous = Righteous({
  weight: '400',
  variable: "--font-righteous",
  subsets: ["latin"],
  display: 'swap',
});

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  // Locale mapping for OpenGraph and other standards
  const localeMap: Record<string, string> = {
    en: 'en_US',
    ja: 'ja_JP',
    ko: 'ko_KR',
    zh: 'zh_CN',
    es: 'es_ES',
  };

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`,
    },
    description: t('description'),
    applicationName: 'Kona Coffee Donut',
    referrer: 'origin-when-cross-origin',
    keywords: [
      // Kona Coffee - Primary Keywords
      'kona coffee', 'authentic kona coffee', 'hawaiian kona coffee',
      'premium kona coffee', 'kona coffee beans', 'kona coffee waikiki',
      'best kona coffee hawaii', 'where to buy kona coffee', 'kona coffee near me',
      // Location-based "Near Me" searches
      'coffee near me', 'donuts near me', 'cafe near me', 'coffee shop near me',
      'malasada near me', 'mochi donuts near me', 'bingsu near me',
      'breakfast near me waikiki', 'dessert near me hawaii',
      // Location-based
      'kona coffee waikiki', 'honolulu coffee shop', 'waikiki donuts', 'kalakaua ave coffee',
      'hawaii coffee and donuts', 'oahu coffee shop', 'waikiki cafe',
      // Product-based
      'honolulu coffee', 'mochi donuts', 'artisanal donuts', 'mochiland', 'bonepi mochiland',
      'malasada hawaii', 'hawaiian malasada', 'malasada waikiki', 'best malasada hawaii',
      'korean corn dogs', 'corn dog hawaii',
      'bingsu hawaii', 'korean bingsu', 'bingsu waikiki', 'shaved ice hawaii',
      'acai bowl waikiki', 'acai bowl near me',
      // Kona Coffee Experience
      'kona coffee taste', 'kona coffee flavor', 'volcanic coffee hawaii',
      'hawaiian coffee beans', 'kona district coffee', 'honolulu coffee kona',
      // Brand collaboration
      'honolulu coffee collaboration', 'mochiland waikiki', 'bonepi waikiki',
      'kona coffee donut shop', 'coffee donut pairing',
      // Experience & High-Priority Keywords
      'best coffee in waikiki', 'gourmet donuts hawaii', 'hawaiian cafe',
      'coffee and donuts waikiki', 'artisan pastries honolulu',
      // High-Priority Target Keywords (Low Difficulty)
      'fresh donuts', 'fresh donuts hawaii', 'fresh donuts waikiki',
      'gourmet donuts', 'gourmet donuts near me', 'gourmet coffee and donuts',
      '100% kona coffee', 'authentic kona coffee', 'best kona coffee',
      'hawaiian bakery', 'hawaiian bakery waikiki', 'hawaiian pastries',
      'kona coffee donuts', 'hawaiian coffee and donuts', 'coffee donut gift',
      // Japanese Keywords - "Near Me" searches (近くの = near me)
      'コナコーヒー', 'ワイキキドーナツ', 'ホノルルコーヒー', 'モチドーナツ',
      '近くのカフェ', '近くのドーナツ', '近くのコーヒー', 'ワイキキカフェ',
      'ハワイドーナツ', 'マラサダハワイ', 'ビングスハワイ', 'アサイーボウル',
      'ハワイコーヒーショップ', 'ワイキキおすすめカフェ', 'ハワイおすすめドーナツ',
      'モチドーナツワイキキ', 'コナコーヒーおすすめ', 'ハワイスイーツ',
      // Japanese High-Priority Keywords (揚げたてドーナツ = fresh donuts, 高級ドーナツ = gourmet donuts)
      '揚げたてドーナツ', '焼きたてドーナツ', '新鮮なドーナツ', 'できたてドーナツ',
      '高級ドーナツ', 'グルメドーナツ', 'プレミアムドーナツ', '職人ドーナツ',
      '100%コナコーヒー', '本格コナコーヒー', 'ハワイアンベーカリー',
      'ハワイアンペストリー', 'コナコーヒードーナツ', 'ハワイお土産ドーナツ',
      // Korean Keywords - "Near Me" searches (근처 = nearby, 내 근처 = near me)
      '코나 커피', '와이키키 도넛', '호놀룰루 커피', '모찌 도넛',
      '근처 카페', '근처 도넛', '내 근처 커피숍', '와이키키 카페',
      '하와이 도넛', '말라사다 하와이', '빙수 하와이', '아사이볼',
      '하와이 커피숍', '와이키키 맛집', '하와이 디저트', '와이키키 추천 카페',
      '모찌도넛 와이키키', '코나커피 추천', '하와이 스위츠',
      // Korean High-Priority Keywords (갓 구운 도넛 = fresh donuts, 고급 도넛 = gourmet donuts)
      '갓 구운 도넛', '신선한 도넛', '매일 만드는 도넛', '수제 도넛',
      '고급 도넛', '프리미엄 도넛', '장인 도넛', '아티산 도넛',
      '100% 코나 커피', '정통 코나 커피', '하와이안 베이커리',
      '하와이 빵집', '코나 커피 도넛', '하와이 선물 도넛', '하와이 기념품',
      // Chinese Keywords - "Near Me" searches (附近 = nearby)
      '科纳咖啡', '威基基甜甜圈', '檀香山咖啡', '麻糬甜甜圈',
      '附近咖啡店', '附近甜甜圈', '附近咖啡', '威基基咖啡店',
      '夏威夷甜甜圈', '马拉萨达夏威夷', '刨冰夏威夷', '巴西莓碗',
      '夏威夷咖啡店', '威基基美食', '夏威夷甜点', '威基基推荐咖啡店',
      '麻糬甜甜圈威基基', '科纳咖啡推荐', '夏威夷甜品',
      // Chinese High-Priority Keywords (新鲜甜甜圈 = fresh donuts, 高级甜甜圈 = gourmet donuts)
      '新鲜甜甜圈', '现做甜甜圈', '每日新鲜甜甜圈', '手工甜甜圈',
      '高级甜甜圈', '精品甜甜圈', '美食家甜甜圈', '工匠甜甜圈',
      '100%科纳咖啡', '正宗科纳咖啡', '夏威夷面包店', '夏威夷烘焙店',
      '夏威夷糕点', '科纳咖啡甜甜圈', '夏威夷伴手礼', '威基基特产',
      // Spanish Keywords - "Near Me" searches (cerca de mí = near me)
      'café kona', 'donuts waikiki', 'café honolulu', 'donuts de mochi',
      'café cerca de mí', 'donuts cerca de mí', 'cafetería cerca de mí',
      'donuts hawaii', 'malasada hawaii', 'bingsu hawaii', 'açaí bowl',
      'cafetería waikiki', 'mejor café hawaii', 'postres hawaii',
      'donuts artesanales', 'café hawaiano', 'dulces waikiki',
      // Spanish High-Priority Keywords (donuts frescos = fresh donuts, donuts gourmet = gourmet donuts)
      'donuts frescos', 'donuts recién hechos', 'donuts del día', 'donuts hechos a mano',
      'donuts gourmet', 'donuts premium', 'donuts de lujo', 'donuts artesanos',
      '100% café kona', 'café kona auténtico', 'panadería hawaiana',
      'repostería hawaiana', 'café kona y donuts', 'regalos de hawaii', 'souvenirs waikiki',
    ],
    authors: [{ name: 'Kona Coffee Donut', url: 'https://www.konacoffeedonut.com' }],
    creator: 'Kona Coffee Donut',
    publisher: 'Kona Coffee Donut',
    category: 'Food & Beverage',
    classification: 'Restaurant, Coffee Shop, Cafe',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: localeMap[locale] || 'en_US',
      url: `${siteUrl}/${locale}`,
      siteName: 'Kona Coffee Donut',
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Kona Coffee Donut',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/og-image.jpg'],
      creator: '@konacoffeedonut',
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
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        'en-US': `${siteUrl}/en`,
        'ja-JP': `${siteUrl}/ja`,
        'ko-KR': `${siteUrl}/ko`,
        'zh-CN': `${siteUrl}/zh`,
        'es-ES': `${siteUrl}/es`,
        'x-default': `${siteUrl}/en`,
      },
    },
    verification: {
      // Note: Google verification is in <head> at line 275
      // Add Bing/Yandex verification codes when you register with their webmaster tools:
      // - Bing: https://www.bing.com/webmasters
      // - Yandex: https://webmaster.yandex.com
      other: {
        'msvalidate.01': '', // Add Bing verification code here
        'yandex-verification': '8198509aea172f8f',
      },
    },
    other: {
      // Rich Snippets
      'og:see_also': [
        'https://www.instagram.com/konacoffeedonut',
        'https://www.instagram.com/mochinut_fortlee',
        'https://www.instagram.com/bonepi_mochiland',
        'https://www.instagram.com/bonepi_mochiland_official',
        'https://www.facebook.com/konacoffeedonut',
      ],
      // Local Business
      'business:contact_data:street_address': '2142 Kalakaua Ave',
      'business:contact_data:locality': 'Honolulu',
      'business:contact_data:region': 'HI',
      'business:contact_data:postal_code': '96815',
      'business:contact_data:country_name': 'United States',
      // Place
      'place:location:latitude': '21.2793',
      'place:location:longitude': '-157.8294',
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* SEO Meta Tags */}
        <meta name="theme-color" content="#8b4513" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />

        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="US-HI" />
        <meta name="geo.placename" content="Honolulu" />
        <meta name="geo.position" content="21.2793;-157.8294" />
        <meta name="ICBM" content="21.2793, -157.8294" />

        {/* Business Info */}
        <meta name="rating" content="General" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="revisit-after" content="7 days" />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="B_3ls-YIFDHA5XYRx9mkf_QuiFx53A2XlqSdegSRwjY" />

        {/* Ahrefs Analytics Verification */}
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="AxGEdYt3cOmhXOY0Vi16ZQ" async></script>

        {/* Viewport and Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />

        {/* Preload critical assets only - removed videos to improve LCP */}
        <link rel="preload" href="/konacoffee.webp" as="image" type="image/webp" fetchPriority="high" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${righteous.variable} antialiased overflow-x-hidden`}
      >
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <MetaPixel pixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID} />
        )}
        <StructuredData locale={locale} />
        <HiringBanner locale={locale} />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
