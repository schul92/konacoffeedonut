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
      // Location-based
      'kona coffee waikiki', 'honolulu coffee shop', 'waikiki donuts', 'kalakaua ave coffee',
      'hawaii coffee and donuts', 'oahu coffee shop', 'waikiki cafe',
      // Product-based
      'honolulu coffee', 'mochi donuts', 'artisanal donuts', 'mochiland', 'bonepi mochiland',
      'malasada hawaii', 'hawaiian malasada', 'korean corn dogs',
      'bingsu hawaii', 'korean bingsu', 'tropical smoothies',
      // Kona Coffee Experience
      'kona coffee taste', 'kona coffee flavor', 'volcanic coffee hawaii',
      'hawaiian coffee beans', 'kona district coffee', 'honolulu coffee kona',
      // Brand collaboration
      'honolulu coffee collaboration', 'mochiland waikiki', 'bonepi waikiki',
      'kona coffee donut shop', 'coffee donut pairing',
      // Experience
      'best coffee in waikiki', 'gourmet donuts hawaii', 'hawaiian cafe',
      'coffee and donuts waikiki', 'artisan pastries honolulu',
      // International
      'コナコーヒー', 'ワイキキドーナツ', 'ホノルルコーヒー', 'モチドーナツ',
      '코나 커피', '와이키키 도넛', '호놀룰루 커피', '모찌 도넛',
      '科纳咖啡', '威基基甜甜圈', '檀香山咖啡', '麻糬甜甜圈',
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
        'en': `${siteUrl}/en`,
        'en-US': `${siteUrl}/en`,
        'ja': `${siteUrl}/ja`,
        'ja-JP': `${siteUrl}/ja`,
        'ko': `${siteUrl}/ko`,
        'ko-KR': `${siteUrl}/ko`,
        'zh': `${siteUrl}/zh`,
        'zh-CN': `${siteUrl}/zh`,
      },
    },
    verification: {
      // Add your verification codes here when available
      // google: 'YOUR_GOOGLE_VERIFICATION_CODE',
      // yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
      // bing: 'YOUR_BING_VERIFICATION_CODE',
    },
    other: {
      // Rich Snippets
      'og:see_also': [
        'https://www.instagram.com/konacoffee_donut',
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

        {/* Google Verification - TODO: Add your verification code */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}

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
        <link rel="preload" href="/konacoffee.png" as="image" type="image/png" fetchPriority="high" />
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
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
