import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import MenuPageClient from './MenuPageClient';

const siteUrl = 'https://www.konacoffeedonut.com';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'menu' });

  const title = `${t('title')} | Kona Coffee Donut?`;
  const description =
    'Mochi donuts, malasadas, Kona coffee, Hawaiian shaved ice & bingsu, Korean corn dogs, and acai bowls — handcrafted with aloha in Waikiki at 2142 Kalākaua Ave, Honolulu.';

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}/menu`,
      languages: Object.fromEntries(
        locales.map((l) => [l === 'en' ? 'en-US' : `${l}-${l.toUpperCase()}`, `${siteUrl}/${l}/menu`]),
      ),
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/menu`,
      type: 'website',
      images: [
        {
          url: '/images/menu/hawaii-menu-hero.webp',
          width: 1200,
          height: 630,
          alt: 'Kona Coffee Donut? menu — Mochi donuts, malasadas, Kona coffee, bingsu',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/menu/hawaii-menu-hero.webp'],
    },
  };
}

export default async function MenuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) {
    notFound();
  }
  return <MenuPageClient locale={locale} />;
}
