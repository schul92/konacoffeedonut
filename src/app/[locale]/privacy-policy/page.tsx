'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowLeft, Shield } from 'lucide-react';

const translations = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: February 2026",
    back: "Back to Home",
    sections: [
      {
        title: "Introduction",
        content: "Welcome to Kona Coffee Donut. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or our physical location in Waikiki."
      },
      {
        title: "Information We Collect",
        content: "We may collect information you provide directly to us, such as:\n\n• Contact information (name, email, phone number) when you apply for jobs\n• Location data when you use our store locator\n• Analytics data about how you use our website\n• Cookies and similar tracking technologies"
      },
      {
        title: "How We Use Your Information",
        content: "We use the information we collect to:\n\n• Process job applications\n• Improve our website and services\n• Send promotional communications (with your consent)\n• Analyze website traffic and usage patterns\n• Comply with legal obligations"
      },
      {
        title: "Information Sharing",
        content: "We do not sell your personal information. We may share your information with:\n\n• Service providers who help us operate our business\n• Analytics partners (like Google Analytics)\n• Legal authorities when required by law"
      },
      {
        title: "Cookies",
        content: "We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser preferences."
      },
      {
        title: "Your Rights",
        content: "Depending on your location, you may have rights regarding your personal data, including:\n\n• Right to access your data\n• Right to correct inaccurate data\n• Right to delete your data\n• Right to opt-out of marketing communications"
      },
      {
        title: "Contact Us",
        content: "If you have questions about this privacy policy or our data practices, please contact us at:\n\nKona Coffee Donut\n2142 Kalakaua Ave\nHonolulu, HI 96815\nEmail: info@konacoffeedonut.com"
      },
    ],
  },
  ja: {
    title: "プライバシーポリシー",
    lastUpdated: "最終更新：2026年2月",
    back: "ホームに戻る",
    sections: [
      {
        title: "はじめに",
        content: "Kona Coffee Donutへようこそ。私たちはお客様のプライバシーを尊重し、個人データの保護に努めています。このプライバシーポリシーでは、当ウェブサイトまたはワイキキの店舗をご利用の際に、お客様の情報をどのように収集、使用、保護するかについてご説明します。"
      },
      {
        title: "収集する情報",
        content: "以下のような情報を収集する場合があります：\n\n• 求人応募時の連絡先情報（氏名、メールアドレス、電話番号）\n• 店舗検索機能使用時の位置情報\n• ウェブサイトの利用状況に関する分析データ\n• Cookieおよび類似の追跡技術"
      },
      {
        title: "情報の利用方法",
        content: "収集した情報は以下の目的で使用します：\n\n• 求人応募の処理\n• ウェブサイトおよびサービスの改善\n• プロモーション情報の送信（同意がある場合）\n• ウェブサイトのトラフィックと利用パターンの分析\n• 法的義務の遵守"
      },
      {
        title: "お問い合わせ",
        content: "このプライバシーポリシーまたはデータの取り扱いについてご質問がある場合は、以下までご連絡ください：\n\nKona Coffee Donut\n2142 Kalakaua Ave\nHonolulu, HI 96815\nメール: info@konacoffeedonut.com"
      },
    ],
  },
  ko: {
    title: "개인정보 처리방침",
    lastUpdated: "최종 업데이트: 2026년 2월",
    back: "홈으로 돌아가기",
    sections: [
      {
        title: "소개",
        content: "Kona Coffee Donut에 오신 것을 환영합니다. 저희는 고객님의 개인정보를 존중하며 개인 데이터 보호에 최선을 다하고 있습니다. 이 개인정보 처리방침은 저희 웹사이트 또는 와이키키 매장을 방문하실 때 수집, 사용, 보호하는 정보에 대해 설명합니다."
      },
      {
        title: "수집하는 정보",
        content: "다음과 같은 정보를 수집할 수 있습니다:\n\n• 채용 지원 시 연락처 정보(이름, 이메일, 전화번호)\n• 매장 검색 기능 사용 시 위치 정보\n• 웹사이트 사용에 관한 분석 데이터\n• 쿠키 및 유사 추적 기술"
      },
      {
        title: "문의하기",
        content: "이 개인정보 처리방침 또는 데이터 처리에 대해 질문이 있으시면 아래로 연락해 주세요:\n\nKona Coffee Donut\n2142 Kalakaua Ave\nHonolulu, HI 96815\n이메일: info@konacoffeedonut.com"
      },
    ],
  },
  zh: {
    title: "隐私政策",
    lastUpdated: "最后更新：2026年2月",
    back: "返回首页",
    sections: [
      {
        title: "简介",
        content: "欢迎来到Kona Coffee Donut。我们尊重您的隐私，致力于保护您的个人数据。本隐私政策说明了当您访问我们的网站或威基基实体店时，我们如何收集、使用和保护您的信息。"
      },
      {
        title: "我们收集的信息",
        content: "我们可能会收集以下信息：\n\n• 求职申请时的联系信息（姓名、电子邮件、电话号码）\n• 使用门店定位器时的位置数据\n• 关于您如何使用我们网站的分析数据\n• Cookie和类似的跟踪技术"
      },
      {
        title: "联系我们",
        content: "如果您对本隐私政策或我们的数据处理有任何疑问，请联系我们：\n\nKona Coffee Donut\n2142 Kalakaua Ave\nHonolulu, HI 96815\n电子邮件：info@konacoffeedonut.com"
      },
    ],
  },
  es: {
    title: "Política de Privacidad",
    lastUpdated: "Última actualización: Febrero 2026",
    back: "Volver al Inicio",
    sections: [
      {
        title: "Introducción",
        content: "Bienvenido a Kona Coffee Donut. Respetamos su privacidad y estamos comprometidos a proteger sus datos personales. Esta política de privacidad explica cómo recopilamos, usamos y protegemos su información cuando visita nuestro sitio web o nuestra ubicación física en Waikiki."
      },
      {
        title: "Información que Recopilamos",
        content: "Podemos recopilar información que usted nos proporciona directamente, como:\n\n• Información de contacto (nombre, correo electrónico, número de teléfono) cuando solicita empleo\n• Datos de ubicación cuando usa nuestro localizador de tiendas\n• Datos analíticos sobre cómo usa nuestro sitio web\n• Cookies y tecnologías de seguimiento similares"
      },
      {
        title: "Contáctenos",
        content: "Si tiene preguntas sobre esta política de privacidad o nuestras prácticas de datos, contáctenos en:\n\nKona Coffee Donut\n2142 Kalakaua Ave\nHonolulu, HI 96815\nCorreo electrónico: info@konacoffeedonut.com"
      },
    ],
  },
};

export default function PrivacyPolicyPage() {
  const locale = useLocale();
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50">
      {/* Back Navigation - positioned below hiring banner */}
      <div className="fixed top-14 left-4 z-50">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all text-amber-900 font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.back}
        </Link>
      </div>

      {/* Header */}
      <section className="pt-20 pb-8 md:pt-28 md:pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full text-amber-700 text-sm font-medium mb-6"
          >
            <Shield className="w-4 h-4" />
            Privacy
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-amber-950 mb-4"
            style={{ fontFamily: 'var(--font-righteous)' }}
          >
            {t.title}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-amber-600 text-sm"
          >
            {t.lastUpdated}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg border border-amber-100 p-8 space-y-8"
          >
            {t.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-bold text-amber-950 mb-4">{section.title}</h2>
                <div className="text-amber-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-amber-950 text-center">
        <p className="text-amber-200/60 text-sm">
          © 2025 Kona Coffee Donut. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
