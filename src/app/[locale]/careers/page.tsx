'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Coffee,
  Heart,
  Sparkles,
  ChefHat,
  BadgeDollarSign,
  Calendar,
  ExternalLink,
  ArrowLeft
} from 'lucide-react';

const APPLICATION_URL = 'https://docs.google.com/forms/d/1GT3pewI8J-HEk0Paz1dK41NfUP7VNtJeD8Zhq0Sawu8/viewform';

const translations = {
  en: {
    hero: {
      badge: "NOW HIRING",
      title: "Join Our Waikiki Team",
      subtitle: "Grand Opening January 2025",
      description: "Be part of something special! We're building an amazing team for our new Waikiki location. Full-time and part-time positions available.",
    },
    positions: {
      title: "Open Positions",
      subtitle: "Find your perfect role",
      list: [
        {
          title: "Manager",
          type: "Full-time",
          description: "Lead our team and ensure exceptional customer experiences. Oversee daily operations, staff scheduling, and inventory management.",
          requirements: ["2+ years management experience", "Strong leadership skills", "Food service background preferred"],
        },
        {
          title: "Assistant Manager",
          type: "Full-time",
          description: "Support the manager in daily operations. Help train staff, manage shifts, and maintain quality standards.",
          requirements: ["1+ year supervisory experience", "Excellent communication", "Flexible schedule"],
        },
        {
          title: "Barista",
          type: "Full-time / Part-time",
          description: "Craft premium Kona coffee beverages and create memorable experiences for our guests. Perfect for coffee enthusiasts!",
          requirements: ["Passion for coffee", "Customer service skills", "Ability to work in fast-paced environment"],
        },
        {
          title: "Counter Help / Cashier",
          type: "Full-time / Part-time",
          description: "Be the friendly face of Kona Coffee Donut. Handle transactions, assist customers, and maintain a welcoming atmosphere.",
          requirements: ["Friendly personality", "Basic math skills", "Multilingual a plus"],
        },
        {
          title: "Baker (Donuts)",
          type: "Full-time / Part-time",
          description: "Create our signature mochi donuts and delicious pastries. Early morning shifts available for fresh daily batches.",
          requirements: ["Baking experience preferred", "Attention to detail", "Early morning availability"],
        },
        {
          title: "Musubi Cook",
          type: "Full-time / Part-time",
          description: "Prepare authentic Hawaiian musubi and other savory items. Perfect for those who love creating delicious food.",
          requirements: ["Food prep experience", "Knowledge of Hawaiian cuisine a plus", "Food safety awareness"],
        },
      ],
    },
    benefits: {
      title: "Why Join Us?",
      list: [
        { icon: "schedule", title: "Flexible Scheduling", description: "Work-life balance matters. We offer flexible shifts that fit your lifestyle." },
        { icon: "discount", title: "Employee Discounts", description: "Enjoy discounts on our premium coffee, donuts, and all menu items." },
        { icon: "team", title: "Fun Team Environment", description: "Join a supportive, diverse team in the heart of Waikiki." },
        { icon: "growth", title: "Growth Opportunities", description: "We invest in our team. Grow your career with us as we expand." },
      ],
    },
    location: {
      title: "Location",
      address: "2142 Kalakaua Ave, Honolulu, HI 96815",
      area: "Heart of Waikiki",
    },
    cta: {
      title: "Ready to Apply?",
      description: "Click below to fill out our application form. We review applications daily and will contact qualified candidates.",
      button: "Apply Now",
      note: "Applications are reviewed within 48 hours",
    },
    back: "Back to Home",
  },
  ja: {
    hero: {
      badge: "スタッフ募集中",
      title: "ワイキキチームに参加しよう",
      subtitle: "2025年1月グランドオープン",
      description: "特別な瞬間の一員になりませんか！ワイキキの新店舗で素晴らしいチームを作っています。フルタイム・パートタイム募集中。",
    },
    positions: {
      title: "募集職種",
      subtitle: "あなたにぴったりの仕事を見つけよう",
      list: [
        {
          title: "マネージャー",
          type: "フルタイム",
          description: "チームをリードし、最高のカスタマー体験を提供。日常業務、スタッフスケジュール、在庫管理を担当。",
          requirements: ["管理経験2年以上", "リーダーシップスキル", "飲食業経験優遇"],
        },
        {
          title: "アシスタントマネージャー",
          type: "フルタイム",
          description: "マネージャーの日常業務をサポート。スタッフ教育、シフト管理、品質維持を担当。",
          requirements: ["監督経験1年以上", "優れたコミュニケーション能力", "柔軟なスケジュール対応"],
        },
        {
          title: "バリスタ",
          type: "フルタイム / パートタイム",
          description: "プレミアムコナコーヒーを淹れ、お客様に思い出に残る体験を提供。コーヒー好きな方大歓迎！",
          requirements: ["コーヒーへの情熱", "接客スキル", "忙しい環境での勤務可能"],
        },
        {
          title: "カウンター / キャッシャー",
          type: "フルタイム / パートタイム",
          description: "Kona Coffee Donutの顔として接客。レジ対応、お客様サポート、居心地の良い雰囲気づくり。",
          requirements: ["明るい性格", "基本的な計算能力", "多言語話者優遇"],
        },
        {
          title: "ベイカー（ドーナツ）",
          type: "フルタイム / パートタイム",
          description: "看板商品のモチドーナツや美味しいペストリーを作成。毎日新鮮なバッチのため早朝シフトあり。",
          requirements: ["製菓経験優遇", "細部への注意", "早朝勤務可能"],
        },
        {
          title: "むすびクック",
          type: "フルタイム / パートタイム",
          description: "本格的なハワイアンむすびやその他の料理を調理。美味しい料理を作るのが好きな方に最適。",
          requirements: ["調理経験", "ハワイ料理の知識優遇", "食品衛生意識"],
        },
      ],
    },
    benefits: {
      title: "なぜ私たちと働くのか？",
      list: [
        { icon: "schedule", title: "柔軟なスケジュール", description: "ワークライフバランスを大切に。あなたのライフスタイルに合わせたシフト。" },
        { icon: "discount", title: "従業員割引", description: "プレミアムコーヒー、ドーナツ、全メニューを割引価格で。" },
        { icon: "team", title: "楽しいチーム環境", description: "ワイキキの中心で、サポート的で多様なチームに参加。" },
        { icon: "growth", title: "成長の機会", description: "チームに投資します。私たちと一緒にキャリアアップ。" },
      ],
    },
    location: {
      title: "勤務地",
      address: "2142 Kalakaua Ave, Honolulu, HI 96815",
      area: "ワイキキの中心",
    },
    cta: {
      title: "応募する準備はできましたか？",
      description: "下のボタンをクリックして応募フォームに記入してください。毎日応募を確認し、資格のある候補者に連絡します。",
      button: "今すぐ応募",
      note: "48時間以内に応募を確認します",
    },
    back: "ホームに戻る",
  },
  ko: {
    hero: {
      badge: "채용 중",
      title: "와이키키 팀에 합류하세요",
      subtitle: "2025년 1월 그랜드 오픈",
      description: "특별한 순간의 일원이 되세요! 와이키키 신규 매장을 위한 멋진 팀을 구성하고 있습니다. 풀타임 및 파트타임 모집 중.",
    },
    positions: {
      title: "모집 직종",
      subtitle: "나에게 맞는 역할을 찾아보세요",
      list: [
        {
          title: "매니저",
          type: "풀타임",
          description: "팀을 이끌고 최고의 고객 경험을 제공합니다. 일일 운영, 직원 스케줄링, 재고 관리를 담당합니다.",
          requirements: ["2년 이상 관리 경험", "뛰어난 리더십", "외식업 경력 우대"],
        },
        {
          title: "어시스턴트 매니저",
          type: "풀타임",
          description: "매니저의 일일 운영을 지원합니다. 직원 교육, 시프트 관리, 품질 기준 유지를 돕습니다.",
          requirements: ["1년 이상 감독 경험", "우수한 커뮤니케이션", "유연한 스케줄"],
        },
        {
          title: "바리스타",
          type: "풀타임 / 파트타임",
          description: "프리미엄 코나 커피 음료를 만들고 고객에게 기억에 남는 경험을 선사합니다. 커피 애호가에게 완벽한 직책!",
          requirements: ["커피에 대한 열정", "고객 서비스 스킬", "빠른 환경에서 근무 가능"],
        },
        {
          title: "카운터 / 캐셔",
          type: "풀타임 / 파트타임",
          description: "Kona Coffee Donut의 친절한 얼굴이 되어주세요. 거래 처리, 고객 지원, 환영하는 분위기 유지.",
          requirements: ["친절한 성격", "기본 수학 능력", "다국어 가능자 우대"],
        },
        {
          title: "베이커 (도넛)",
          type: "풀타임 / 파트타임",
          description: "시그니처 모찌 도넛과 맛있는 페이스트리를 만듭니다. 매일 신선한 배치를 위한 이른 아침 시프트 가능.",
          requirements: ["제빵 경험 우대", "세부 사항에 주의", "이른 아침 근무 가능"],
        },
        {
          title: "무스비 쿡",
          type: "풀타임 / 파트타임",
          description: "정통 하와이안 무스비와 기타 요리를 준비합니다. 맛있는 음식 만들기를 좋아하는 분에게 완벽한 직책.",
          requirements: ["식품 준비 경험", "하와이 요리 지식 우대", "식품 안전 의식"],
        },
      ],
    },
    benefits: {
      title: "왜 저희와 함께해야 할까요?",
      list: [
        { icon: "schedule", title: "유연한 스케줄", description: "워라밸이 중요합니다. 당신의 라이프스타일에 맞는 유연한 시프트를 제공합니다." },
        { icon: "discount", title: "직원 할인", description: "프리미엄 커피, 도넛 및 모든 메뉴 아이템을 할인받으세요." },
        { icon: "team", title: "즐거운 팀 환경", description: "와이키키 중심부에서 서로 돕는 다양한 팀에 합류하세요." },
        { icon: "growth", title: "성장 기회", description: "우리는 팀에 투자합니다. 우리와 함께 커리어를 성장시키세요." },
      ],
    },
    location: {
      title: "근무지",
      address: "2142 Kalakaua Ave, Honolulu, HI 96815",
      area: "와이키키 중심부",
    },
    cta: {
      title: "지원할 준비가 되셨나요?",
      description: "아래 버튼을 클릭하여 지원서를 작성해 주세요. 매일 지원서를 검토하고 자격을 갖춘 후보자에게 연락드립니다.",
      button: "지금 지원하기",
      note: "48시간 이내에 지원서를 검토합니다",
    },
    back: "홈으로 돌아가기",
  },
  zh: {
    hero: {
      badge: "正在招聘",
      title: "加入我们的威基基团队",
      subtitle: "2025年1月盛大开业",
      description: "成为特别时刻的一部分！我们正在为威基基新店组建一支出色的团队。全职和兼职职位招聘中。",
    },
    positions: {
      title: "招聘职位",
      subtitle: "找到适合你的角色",
      list: [
        {
          title: "经理",
          type: "全职",
          description: "领导团队，确保卓越的客户体验。负责日常运营、员工排班和库存管理。",
          requirements: ["2年以上管理经验", "出色的领导能力", "餐饮服务背景优先"],
        },
        {
          title: "助理经理",
          type: "全职",
          description: "协助经理处理日常运营。帮助培训员工、管理班次、维护质量标准。",
          requirements: ["1年以上主管经验", "优秀的沟通能力", "灵活的时间安排"],
        },
        {
          title: "咖啡师",
          type: "全职 / 兼职",
          description: "调制优质科纳咖啡饮品，为客人创造难忘的体验。咖啡爱好者的完美选择！",
          requirements: ["对咖啡的热情", "客户服务技能", "能在快节奏环境中工作"],
        },
        {
          title: "柜台 / 收银员",
          type: "全职 / 兼职",
          description: "成为Kona Coffee Donut友好的门面。处理交易、协助客户、保持热情的氛围。",
          requirements: ["性格开朗", "基本数学能力", "会多语言者优先"],
        },
        {
          title: "面包师（甜甜圈）",
          type: "全职 / 兼职",
          description: "制作我们的招牌麻糬甜甜圈和美味糕点。提供清晨班次以确保每日新鲜出炉。",
          requirements: ["烘焙经验优先", "注重细节", "可早班工作"],
        },
        {
          title: "饭团厨师",
          type: "全职 / 兼职",
          description: "制作正宗的夏威夷饭团和其他美食。热爱烹饪美食者的完美选择。",
          requirements: ["食品准备经验", "了解夏威夷美食优先", "食品安全意识"],
        },
      ],
    },
    benefits: {
      title: "为什么加入我们？",
      list: [
        { icon: "schedule", title: "灵活排班", description: "工作生活平衡很重要。我们提供适合您生活方式的灵活班次。" },
        { icon: "discount", title: "员工折扣", description: "享受优质咖啡、甜甜圈和所有菜单项目的折扣。" },
        { icon: "team", title: "愉快的团队氛围", description: "加入威基基中心一个互相支持、多元化的团队。" },
        { icon: "growth", title: "成长机会", description: "我们投资于团队。随着我们的扩展，与我们一起发展您的职业。" },
      ],
    },
    location: {
      title: "工作地点",
      address: "2142 Kalakaua Ave, Honolulu, HI 96815",
      area: "威基基中心",
    },
    cta: {
      title: "准备好申请了吗？",
      description: "点击下方按钮填写申请表。我们每天审核申请，并会联系符合条件的候选人。",
      button: "立即申请",
      note: "48小时内审核申请",
    },
    back: "返回首页",
  },
};

const benefitIcons = {
  schedule: Clock,
  discount: BadgeDollarSign,
  team: Users,
  growth: Sparkles,
};

export default function CareersPage() {
  const locale = useLocale();
  const t = translations[locale as keyof typeof translations] || translations.en;

  const handleApply = () => {
    window.open(APPLICATION_URL, '_blank', 'noopener,noreferrer');
  };

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

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-200/50 to-transparent rounded-full -translate-y-48 translate-x-48" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-orange-200/50 to-transparent rounded-full translate-y-36 -translate-x-36" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-white text-sm font-bold mb-6 shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            {t.hero.badge}
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-950 mb-4"
            style={{ fontFamily: 'var(--font-righteous)' }}
          >
            {t.hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 text-amber-700 font-semibold text-xl mb-6"
          >
            <Calendar className="w-5 h-5" />
            {t.hero.subtitle}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-amber-800/80 max-w-2xl mx-auto mb-8"
          >
            {t.hero.description}
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <button
              onClick={handleApply}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 rounded-2xl font-bold text-white text-xl transition-all duration-300 shadow-2xl hover:shadow-amber-500/40 hover:scale-105 active:scale-100"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-2xl" />
              <span className="relative">{t.cta.button}</span>
              <ExternalLink className="w-6 h-6 relative" />
            </button>
            <p className="text-amber-600 text-sm mt-4">{t.cta.note}</p>
          </motion.div>
        </div>
      </section>

      {/* Positions Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-3" style={{ fontFamily: 'var(--font-righteous)' }}>
              {t.positions.title}
            </h2>
            <p className="text-amber-700">{t.positions.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.positions.list.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl">
                    {position.title.includes('Manager') ? <Briefcase className="w-6 h-6 text-amber-700" /> :
                     position.title.includes('Barista') || position.title.includes('バリスタ') || position.title.includes('咖啡') ? <Coffee className="w-6 h-6 text-amber-700" /> :
                     position.title.includes('Baker') || position.title.includes('ベイカー') || position.title.includes('面包') ? <ChefHat className="w-6 h-6 text-amber-700" /> :
                     position.title.includes('Cook') || position.title.includes('クック') || position.title.includes('厨师') ? <ChefHat className="w-6 h-6 text-amber-700" /> :
                     <Heart className="w-6 h-6 text-amber-700" />}
                  </div>
                  <span className="text-xs font-medium px-3 py-1 bg-amber-100 text-amber-700 rounded-full">
                    {position.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-amber-950 mb-2">{position.title}</h3>
                <p className="text-amber-700/80 text-sm mb-4 leading-relaxed">{position.description}</p>

                <div className="space-y-2">
                  {position.requirements.map((req, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-amber-600">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      {req}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-amber-900 via-amber-800 to-orange-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
            style={{ fontFamily: 'var(--font-righteous)' }}
          >
            {t.benefits.title}
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.benefits.list.map((benefit, index) => {
              const IconComponent = benefitIcons[benefit.icon as keyof typeof benefitIcons];
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <div className="inline-flex p-4 bg-white/20 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-amber-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-amber-100/80 text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-amber-100 rounded-2xl px-6 py-4"
          >
            <MapPin className="w-6 h-6 text-amber-700" />
            <div className="text-left">
              <p className="text-sm text-amber-600 font-medium">{t.location.title}</p>
              <p className="text-amber-900 font-semibold">{t.location.address}</p>
              <p className="text-amber-700 text-sm">{t.location.area}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Secondary CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={handleApply}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 rounded-xl font-bold text-white transition-all duration-300 shadow-lg hover:shadow-amber-500/30 hover:scale-105 active:scale-100"
            >
              <span className="relative">{t.cta.button}</span>
              <ExternalLink className="w-5 h-5 relative" />
            </button>
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
