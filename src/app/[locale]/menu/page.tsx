import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import MenuPageClient from './MenuPageClient';

const siteUrl = 'https://www.konacoffeedonut.com';
const languageAlternates = {
  'en-US': `${siteUrl}/en/menu`,
  'ja-JP': `${siteUrl}/ja/menu`,
  'ko-KR': `${siteUrl}/ko/menu`,
  'zh-CN': `${siteUrl}/zh/menu`,
  'es-ES': `${siteUrl}/es/menu`,
  'x-default': `${siteUrl}/en/menu`,
};

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

  // The [locale] layout title template appends the brand, so titles here omit it.
  const menuTitles: Record<string, string> = {
    en: 'Waikiki Menu: Mochi Donuts, Bingsu & 100% Kona Coffee',
    ja: 'ワイキキのメニュー | モチドーナツ・ビンス・100%コナコーヒー',
    ko: '와이키키 메뉴 | 모찌도넛·빙수·100% 코나커피',
    zh: '威基基菜单 | 麻糬甜甜圈・韩式雪冰・100%科纳咖啡',
    es: 'Menú en Waikiki: Mochi Donuts, Bingsu y Café 100% Kona',
  };
  const title = menuTitles[locale] || t('title');
  const menuDescriptions: Record<string, string> = {
    en: 'Browse our Waikiki menu: mochi donuts, malasadas, Korean bingsu, acai bowls, Korean corn dogs, and 100% Kona coffee available near Waikiki Beach.',
    ja: 'ワイキキのメニュー：モチドーナツ、マラサダ、韓国かき氷ビンス、アサイーボウル、韓国式ホットドッグ、100%コナコーヒー。ワイキキビーチから徒歩5分、カラカウア通り2142番地。',
    ko: '와이키키 메뉴: 모찌도넛, 말라사다, 한국 빙수, 아사이볼, 한국식 핫도그, 100% 코나커피. 와이키키 비치에서 도보 5분, 칼라카우아 거리 2142번지.',
    zh: '威基基菜单：麻糬甜甜圈、马拉萨达、韩式雪冰、巴西莓碗、韩式热狗与100%科纳咖啡。距威基基海滩步行5分钟，卡拉考阿大道2142号。',
    es: 'Nuestro menú en Waikiki: mochi donuts, malasadas, bingsu coreano, acai bowls, corn dogs coreanos y café 100% Kona, a 5 minutos a pie de la playa de Waikiki.',
  };
  const description = menuDescriptions[locale] || menuDescriptions.en;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}/menu`,
      languages: languageAlternates,
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
