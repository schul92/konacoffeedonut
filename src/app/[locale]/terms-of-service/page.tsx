'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowLeft, FileText } from 'lucide-react';

const translations = {
  en: {
    title: "Terms of Service",
    lastUpdated: "Last updated: January 2025",
    back: "Back to Home",
    sections: [
      {
        title: "Agreement to Terms",
        content: "By accessing and using the Kona Coffee Donut website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
      },
      {
        title: "Use of Our Services",
        content: "You agree to use our website and services only for lawful purposes and in accordance with these terms. You agree not to:\n\n• Use our services in any way that violates applicable laws\n• Attempt to interfere with the proper functioning of our website\n• Use automated systems to access our website without permission\n• Impersonate any person or entity"
      },
      {
        title: "Intellectual Property",
        content: "All content on this website, including text, graphics, logos, images, and software, is the property of Kona Coffee Donut or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission."
      },
      {
        title: "Products and Pricing",
        content: "All products and prices displayed on our website are subject to availability and may change without notice. We reserve the right to limit quantities and refuse service to anyone."
      },
      {
        title: "Disclaimer of Warranties",
        content: "Our website and services are provided \"as is\" without warranties of any kind, either express or implied. We do not warrant that our website will be uninterrupted, secure, or error-free."
      },
      {
        title: "Limitation of Liability",
        content: "To the fullest extent permitted by law, Kona Coffee Donut shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our website or services."
      },
      {
        title: "Changes to Terms",
        content: "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms."
      },
      {
        title: "Governing Law",
        content: "These Terms of Service shall be governed by and construed in accordance with the laws of the State of Hawaii, United States, without regard to its conflict of law provisions."
      },
      {
        title: "Contact Information",
        content: "If you have any questions about these Terms of Service, please contact us at:\n\nKona Coffee Donut\n2142 Kalakaua Ave\nHonolulu, HI 96815\nEmail: info@konacoffeedonut.com"
      },
    ],
  },
  ja: {
    title: "利用規約",
    lastUpdated: "最終更新：2025年1月",
    back: "ホームに戻る",
    sections: [
      {
        title: "規約への同意",
        content: "Kona Coffee Donutのウェブサイトおよびサービスにアクセスし使用することにより、お客様はこの利用規約に拘束されることに同意するものとします。これらの規約に同意しない場合は、当社のサービスをご利用にならないでください。"
      },
      {
        title: "サービスの利用",
        content: "お客様は、当社のウェブサイトおよびサービスを合法的な目的でのみ、この規約に従って使用することに同意します。"
      },
      {
        title: "知的財産権",
        content: "このウェブサイト上のすべてのコンテンツ（テキスト、グラフィック、ロゴ、画像、ソフトウェアを含む）は、Kona Coffee Donutまたはそのコンテンツ提供者の財産であり、知的財産法によって保護されています。"
      },
      {
        title: "お問い合わせ",
        content: "この利用規約についてご質問がある場合は、以下までご連絡ください：\n\nKona Coffee Donut\n2142 Kalakaua Ave\nHonolulu, HI 96815\nメール: info@konacoffeedonut.com"
      },
    ],
  },
  ko: {
    title: "이용약관",
    lastUpdated: "최종 업데이트: 2025년 1월",
    back: "홈으로 돌아가기",
    sections: [
      {
        title: "약관 동의",
        content: "Kona Coffee Donut 웹사이트 및 서비스에 접속하고 사용함으로써, 귀하는 본 이용약관에 구속되는 것에 동의합니다. 이 약관에 동의하지 않으시면 저희 서비스를 이용하지 마십시오."
      },
      {
        title: "서비스 이용",
        content: "귀하는 당사의 웹사이트 및 서비스를 합법적인 목적으로만, 본 약관에 따라 사용하는 것에 동의합니다."
      },
      {
        title: "문의하기",
        content: "본 이용약관에 대해 질문이 있으시면 아래로 연락해 주세요:\n\nKona Coffee Donut\n2142 Kalakaua Ave\nHonolulu, HI 96815\n이메일: info@konacoffeedonut.com"
      },
    ],
  },
  zh: {
    title: "服务条款",
    lastUpdated: "最后更新：2025年1月",
    back: "返回首页",
    sections: [
      {
        title: "条款同意",
        content: "通过访问和使用Kona Coffee Donut网站和服务，您同意受本服务条款的约束。如果您不同意这些条款，请不要使用我们的服务。"
      },
      {
        title: "服务使用",
        content: "您同意仅出于合法目的，按照本条款使用我们的网站和服务。"
      },
      {
        title: "联系我们",
        content: "如果您对本服务条款有任何疑问，请联系我们：\n\nKona Coffee Donut\n2142 Kalakaua Ave\nHonolulu, HI 96815\n电子邮件：info@konacoffeedonut.com"
      },
    ],
  },
  es: {
    title: "Términos de Servicio",
    lastUpdated: "Última actualización: Enero 2025",
    back: "Volver al Inicio",
    sections: [
      {
        title: "Aceptación de los Términos",
        content: "Al acceder y usar el sitio web y los servicios de Kona Coffee Donut, usted acepta estar sujeto a estos Términos de Servicio. Si no está de acuerdo con estos términos, por favor no utilice nuestros servicios."
      },
      {
        title: "Uso de Nuestros Servicios",
        content: "Usted acepta utilizar nuestro sitio web y servicios solo para fines legales y de acuerdo con estos términos."
      },
      {
        title: "Contáctenos",
        content: "Si tiene alguna pregunta sobre estos Términos de Servicio, contáctenos en:\n\nKona Coffee Donut\n2142 Kalakaua Ave\nHonolulu, HI 96815\nCorreo electrónico: info@konacoffeedonut.com"
      },
    ],
  },
};

export default function TermsOfServicePage() {
  const locale = useLocale();
  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50">
      {/* Back Navigation */}
      <div className="fixed top-4 left-4 z-50">
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
            <FileText className="w-4 h-4" />
            Terms
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
