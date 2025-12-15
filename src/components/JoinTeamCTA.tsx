'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';
import { trackJobApplyClick } from '@/lib/analytics';

interface JoinTeamCTAProps {
  locale?: string;
}

const translations = {
  en: {
    title: "Join Our Team!",
    description: "We're hiring for our Waikiki location. Be part of something delicious!",
    cta: "View Open Positions",
  },
  ja: {
    title: "チームに参加しよう！",
    description: "ワイキキ店でスタッフ募集中。おいしい仲間になりませんか！",
    cta: "求人を見る",
  },
  ko: {
    title: "팀에 합류하세요!",
    description: "와이키키 매장에서 채용 중입니다. 맛있는 팀의 일원이 되세요!",
    cta: "채용 정보 보기",
  },
  zh: {
    title: "加入我们的团队！",
    description: "威基基店正在招聘。成为美味团队的一员！",
    cta: "查看职位",
  },
};

export default function JoinTeamCTA({ locale = 'en' }: JoinTeamCTAProps) {
  const t = translations[locale as keyof typeof translations] || translations.en;

  const handleClick = () => {
    trackJobApplyClick('menu_page_cta', locale);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-12 px-4"
    >
      <div className="max-w-2xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 p-6 sm:p-8 shadow-xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />

          <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {t.title}
              </h3>
              <p className="text-white/90 text-sm sm:text-base">
                {t.description}
              </p>
            </div>

            <Link
              href={`/${locale}/careers`}
              onClick={handleClick}
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-white text-green-600 font-bold rounded-full hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl"
            >
              {t.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
