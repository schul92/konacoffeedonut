import type { Metadata } from "next";
import { Geist, Geist_Mono, Righteous } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
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
    keywords: ['kona coffee', 'artisanal donuts', 'hawaiian donuts', 'coffee donuts', 'gourmet pastries', 'kona', 'coffee shop', 'コナコーヒー', 'ドーナツ', '코나 커피', '도넛', '科纳咖啡', '甜甜圈'],
    authors: [{ name: 'Kona Coffee Donut' }],
    creator: 'Kona Coffee Donut',
    publisher: 'Kona Coffee Donut',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Preconnect to Google Maps for faster loading */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${righteous.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
