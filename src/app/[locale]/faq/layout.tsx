import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  // Titles without site name - parent template adds "| Kona Coffee Donut®..."
  const titles: Record<string, string> = {
    en: 'FAQ - Frequently Asked Questions',
    ja: 'よくある質問 - FAQ',
    ko: '자주 묻는 질문 - FAQ',
    zh: '常见问题 - FAQ',
    es: 'Preguntas Frecuentes - FAQ',
  };

  const descriptions: Record<string, string> = {
    en: 'Find answers to frequently asked questions about Kona Coffee Donut in Waikiki. Learn about our mochi donuts, Kona coffee, hours, location, and more.',
    ja: 'ワイキキのKona Coffee Donutに関するよくある質問への回答をご覧ください。モチドーナツ、コナコーヒー、営業時間、場所などについて。',
    ko: '와이키키 Kona Coffee Donut에 대한 자주 묻는 질문에 대한 답변을 찾아보세요. 모찌 도넛, 코나 커피, 영업 시간, 위치 등에 대해 알아보세요.',
    zh: '查找有关威基基Kona Coffee Donut的常见问题解答。了解我们的麻糬甜甜圈、科纳咖啡、营业时间、位置等。',
    es: 'Encuentra respuestas a preguntas frecuentes sobre Kona Coffee Donut en Waikiki. Conoce nuestros donuts de mochi, café Kona, horarios, ubicación y más.',
  };

  const localeMap: Record<string, string> = {
    en: 'en_US',
    ja: 'ja_JP',
    ko: 'ko_KR',
    zh: 'zh_CN',
    es: 'es_ES',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      url: `${siteUrl}/${locale}/faq`,
      siteName: 'Kona Coffee Donut',
      locale: localeMap[locale] || 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/faq`,
      languages: {
        'en-US': `${siteUrl}/en/faq`,
        'ja-JP': `${siteUrl}/ja/faq`,
        'ko-KR': `${siteUrl}/ko/faq`,
        'zh-CN': `${siteUrl}/zh/faq`,
        'es-ES': `${siteUrl}/es/faq`,
        'x-default': `${siteUrl}/en/faq`,
      },
    },
  };
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
