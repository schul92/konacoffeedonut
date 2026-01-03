import type { Metadata } from 'next';

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'Privacy Policy | Kona Coffee Donut',
    ja: 'プライバシーポリシー | Kona Coffee Donut',
    ko: '개인정보 처리방침 | Kona Coffee Donut',
    zh: '隐私政策 | Kona Coffee Donut',
    es: 'Política de Privacidad | Kona Coffee Donut',
  };

  const descriptions: Record<string, string> = {
    en: 'Privacy Policy for Kona Coffee Donut. Learn how we collect, use, and protect your personal information.',
    ja: 'Kona Coffee Donutのプライバシーポリシー。お客様の個人情報の収集、使用、保護方法についてご説明します。',
    ko: 'Kona Coffee Donut 개인정보 처리방침. 개인정보 수집, 사용 및 보호 방법에 대해 알아보세요.',
    zh: 'Kona Coffee Donut隐私政策。了解我们如何收集、使用和保护您的个人信息。',
    es: 'Política de Privacidad de Kona Coffee Donut. Conozca cómo recopilamos, usamos y protegemos su información personal.',
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
      url: `${siteUrl}/${locale}/privacy-policy`,
      siteName: 'Kona Coffee Donut',
      locale: localeMap[locale] || 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/privacy-policy`,
      languages: {
        'en-US': `${siteUrl}/en/privacy-policy`,
        'ja-JP': `${siteUrl}/ja/privacy-policy`,
        'ko-KR': `${siteUrl}/ko/privacy-policy`,
        'zh-CN': `${siteUrl}/zh/privacy-policy`,
        'es-ES': `${siteUrl}/es/privacy-policy`,
        'x-default': `${siteUrl}/en/privacy-policy`,
      },
    },
  };
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
