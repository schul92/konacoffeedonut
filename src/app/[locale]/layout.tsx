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
    keywords: [
      // Location-based
      'kona coffee waikiki', 'honolulu coffee shop', 'waikiki donuts', 'kalakaua ave coffee',
      'hawaii coffee and donuts', 'oahu coffee shop', 'waikiki cafe',
      // Product-based
      'kona coffee', '100% kona coffee', 'premium kona beans', 'honolulu coffee',
      'mochi donuts', 'artisanal donuts', 'mochiland', 'bonepi mochiland',
      'malasada hawaii', 'hawaiian malasada', 'korean corn dogs',
      'bingsu hawaii', 'korean bingsu', 'tropical smoothies',
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
        'ja': `${siteUrl}/ja`,
        'ko': `${siteUrl}/ko`,
        'zh': `${siteUrl}/zh`,
      },
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

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Preload critical assets */}
        <link rel="preload" href="/images/background/background.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/videos/waikiki_1.mp4" as="video" type="video/mp4" />
        <link rel="preload" href="/konacoffee.png" as="image" type="image/png" />

        {/* Prefetch next video for smooth transition */}
        <link rel="prefetch" href="/videos/waikiki_2.mp4" as="video" type="video/mp4" />
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
