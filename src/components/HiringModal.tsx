'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, Coffee, Sparkles, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { trackJobApplyClick, trackHiringModalView, trackHiringModalDismiss } from '@/lib/analytics';

const APPLICATION_URL = 'https://docs.google.com/forms/d/1GT3pewI8J-HEk0Paz1dK41NfUP7VNtJeD8Zhq0Sawu8/edit';

interface HiringModalProps {
  locale?: string;
}

const translations = {
  en: {
    badge: "NOW HIRING",
    title: "Join Our Waikiki Team",
    subtitle: "Grand Opening February 2026",
    description: "Full time & Part time positions available! Join Kona Coffee Donut in the heart of Waikiki.",
    positions: "Open Positions",
    positionList: ["Manager", "Assistant Manager", "Barista", "Counter Help / Cashier", "Baker (Donuts)", "Musubi Cook"],
    perks: "What We Offer",
    perkList: ["Flexible scheduling", "Employee discounts", "Fun team environment", "Growth opportunities"],
    location: "2142 Kalakaua Ave, Waikiki",
    applyNow: "Apply Now",
    applyDescription: "Click to fill out our application form",
    maybeLater: "Maybe Later",
  },
  ja: {
    badge: "スタッフ募集中",
    title: "ワイキキチームに参加しよう",
    subtitle: "2026年2月グランドオープン",
    description: "フルタイム・パートタイム募集中！ワイキキの中心にあるKona Coffee Donutで働きませんか。",
    positions: "募集職種",
    positionList: ["マネージャー", "アシスタントマネージャー", "バリスタ", "カウンター/キャッシャー", "ベイカー（ドーナツ）", "むすびクック"],
    perks: "待遇",
    perkList: ["柔軟なシフト", "従業員割引", "楽しいチーム環境", "キャリアアップの機会"],
    location: "2142 カラカウア通り、ワイキキ",
    applyNow: "今すぐ応募",
    applyDescription: "応募フォームに記入してください",
    maybeLater: "後で",
  },
  ko: {
    badge: "채용 중",
    title: "와이키키 팀에 합류하세요",
    subtitle: "2026년 2월 그랜드 오픈",
    description: "풀타임 & 파트타임 모집 중! 와이키키 중심부의 Kona Coffee Donut에서 함께해요.",
    positions: "모집 직종",
    positionList: ["매니저", "어시스턴트 매니저", "바리스타", "카운터/캐셔", "베이커 (도넛)", "무스비 쿡"],
    perks: "혜택",
    perkList: ["유연한 스케줄", "직원 할인", "즐거운 팀 환경", "성장 기회"],
    location: "2142 칼라카우아 애비뉴, 와이키키",
    applyNow: "지금 지원하기",
    applyDescription: "지원서를 작성해 주세요",
    maybeLater: "나중에",
  },
  zh: {
    badge: "正在招聘",
    title: "加入我们的威基基团队",
    subtitle: "2026年2月盛大开业",
    description: "全职和兼职职位招聘中！加入位于威基基中心的Kona Coffee Donut。",
    positions: "招聘职位",
    positionList: ["经理", "助理经理", "咖啡师", "柜台/收银员", "面包师（甜甜圈）", "饭团厨师"],
    perks: "我们提供",
    perkList: ["灵活排班", "员工折扣", "愉快的团队氛围", "成长机会"],
    location: "2142 卡拉卡瓦大道，威基基",
    applyNow: "立即申请",
    applyDescription: "点击填写申请表",
    maybeLater: "稍后再说",
  },
};

export default function HiringModal({ locale = 'en' }: HiringModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[locale as keyof typeof translations] || translations.en;

  useEffect(() => {
    // Check if user has dismissed the modal before
    const dismissed = localStorage.getItem('hiring-modal-dismissed');
    const dismissedTime = dismissed ? parseInt(dismissed) : 0;
    const fourHoursAgo = Date.now() - 4 * 60 * 60 * 1000;

    // Show modal if never dismissed or dismissed more than 4 hours ago
    if (!dismissed || dismissedTime < fourHoursAgo) {
      // Delay showing modal for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
        trackHiringModalView(locale);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [locale]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hiring-modal-dismissed', Date.now().toString());
    trackHiringModalDismiss(locale);
  };

  const handleApply = () => {
    // Track conversion
    trackJobApplyClick('hiring_modal', locale);
    // Open application form
    window.open(APPLICATION_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-4 pointer-events-none overflow-y-auto"
          >
            <div className="relative w-full max-w-lg pointer-events-auto my-auto">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-3xl blur-lg opacity-75 animate-pulse" />

              {/* Main card */}
              <div className="relative bg-gradient-to-br from-amber-950 via-amber-900 to-orange-950 rounded-3xl overflow-hidden shadow-2xl">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-500/20 to-transparent rounded-full -translate-y-32 translate-x-32" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full translate-y-24 -translate-x-24" />

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
                  aria-label="Close hiring modal"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                {/* Content */}
                <div className="relative p-5 sm:p-6 md:p-8 max-h-[85vh] overflow-y-auto">
                  {/* Badge */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-white text-sm font-bold mb-4 shadow-lg"
                  >
                    <Sparkles className="w-4 h-4" />
                    {t.badge}
                    <span className="flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2"
                    style={{ fontFamily: 'var(--font-righteous)' }}
                  >
                    {t.title}
                  </motion.h2>

                  {/* Subtitle with calendar */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="flex items-center gap-2 text-amber-300 font-semibold text-base sm:text-lg mb-3 sm:mb-4"
                  >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    {t.subtitle}
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-amber-100/90 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                  >
                    {t.description}
                  </motion.p>

                  {/* Two columns: Positions & Perks */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.35 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6"
                  >
                    {/* Positions */}
                    <div className="bg-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                      <div className="flex items-center gap-2 text-amber-300 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                        <Coffee className="w-4 h-4" />
                        {t.positions}
                      </div>
                      <ul className="grid grid-cols-2 sm:grid-cols-1 gap-1 sm:space-y-1.5">
                        {t.positionList.map((position, i) => (
                          <li key={i} className="text-white/90 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                            <span className="truncate">{position}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Perks */}
                    <div className="bg-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                      <div className="flex items-center gap-2 text-amber-300 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                        <Sparkles className="w-4 h-4" />
                        {t.perks}
                      </div>
                      <ul className="grid grid-cols-2 sm:grid-cols-1 gap-1 sm:space-y-1.5">
                        {t.perkList.map((perk, i) => (
                          <li key={i} className="text-white/90 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                            <span className="truncate">{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-2 text-amber-200/80 text-xs sm:text-sm mb-4 sm:mb-6"
                  >
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    {t.location}
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.45 }}
                    className="flex flex-col sm:flex-row gap-2 sm:gap-3"
                  >
                    <button
                      onClick={handleApply}
                      className="flex-1 group relative overflow-hidden px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 rounded-xl sm:rounded-2xl font-bold text-white transition-all duration-300 shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      <span className="relative flex items-center justify-center gap-2 text-sm sm:text-base">
                        {t.applyNow}
                        <ExternalLink className="w-4 h-4" />
                      </span>
                      <span className="relative block text-[10px] sm:text-xs text-white/80 mt-0.5 sm:mt-1 font-normal">
                        {t.applyDescription}
                      </span>
                    </button>

                    <button
                      onClick={handleClose}
                      className="px-4 sm:px-6 py-2.5 sm:py-4 bg-white/10 hover:bg-white/20 rounded-xl sm:rounded-2xl font-medium text-white/90 transition-all duration-300 text-sm sm:text-base"
                    >
                      {t.maybeLater}
                    </button>
                  </motion.div>
                </div>

                {/* Bottom decorative bar */}
                <div className="h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
