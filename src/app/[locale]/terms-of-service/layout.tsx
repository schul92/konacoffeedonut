import type { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  // Titles without site name - parent template adds "| Kona Coffee Donut®..."
  const titles: Record<string, string> = {
    en: 'Terms of Service',
    ja: '利用規約',
    ko: '이용약관',
    zh: '服务条款',
    es: 'Términos de Servicio',
  };

  const descriptions: Record<string, string> = {
    en: 'Terms of Service for Kona Coffee Donut website. Read our terms and conditions for using our services.',
    ja: 'Kona Coffee Donutウェブサイトの利用規約。サービス利用の条件をお読みください。',
    ko: 'Kona Coffee Donut 웹사이트 이용약관. 서비스 이용 조건을 확인하세요.',
    zh: 'Kona Coffee Donut网站服务条款。请阅读使用我们服务的条款和条件。',
    es: 'Términos de Servicio del sitio web de Kona Coffee Donut. Lea nuestros términos y condiciones para usar nuestros servicios.',
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
      url: `${siteUrl}/${locale}/terms-of-service`,
      siteName: 'Kona Coffee Donut',
      locale: localeMap[locale] || 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/terms-of-service`,
      languages: {
        'en-US': `${siteUrl}/en/terms-of-service`,
        'ja-JP': `${siteUrl}/ja/terms-of-service`,
        'ko-KR': `${siteUrl}/ko/terms-of-service`,
        'zh-CN': `${siteUrl}/zh/terms-of-service`,
        'es-ES': `${siteUrl}/es/terms-of-service`,
        'x-default': `${siteUrl}/en/terms-of-service`,
      },
    },
  };
}

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
