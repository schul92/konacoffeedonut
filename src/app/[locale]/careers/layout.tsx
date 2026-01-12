import type { Metadata } from "next";

const siteUrl = 'https://www.konacoffeedonut.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  // Titles without site name - parent template adds "| Kona Coffee Donut®..."
  // Keep titles under 60 chars total (including template suffix)
  const metadata: Record<string, { title: string; description: string }> = {
    en: {
      title: "Careers - Now Hiring",
      description: "Join Kona Coffee Donut in Waikiki! Now hiring Manager, Barista, Baker, Cashier, and more. Full-time & part-time positions available. Apply today for jobs in Honolulu, Hawaii.",
    },
    ja: {
      title: "採用情報 - スタッフ募集中",
      description: "Kona Coffee Donutワイキキ店でスタッフ募集中！マネージャー、バリスタ、ベイカー、キャッシャーを募集しています。フルタイム・パートタイム勤務可能。ハワイでのお仕事をお探しの方、今すぐ応募してください！カラカウア通りのおしゃれなカフェで働きませんか？",
    },
    ko: {
      title: "채용정보 - 직원모집",
      description: "Kona Coffee Donut 와이키키점에서 직원을 모집합니다! 매니저, 바리스타, 베이커, 캐셔를 찾고 있습니다. 풀타임 및 파트타임 근무 가능합니다. 하와이 취업을 원하시는 분들 칼라카우아 거리의 카페에서 일해보세요. 지금 바로 지원하세요!",
    },
    zh: {
      title: "招聘信息 - 正在招聘",
      description: "Kona Coffee Donut威基基店正在招聘！我们正在寻找经理、咖啡师、面包师、收银员等职位。提供全职和兼职机会。在卡拉卡瓦大道的时尚咖啡店工作，享受夏威夷的阳光和海风。立即申请加入我们的团队！",
    },
    es: {
      title: "Empleos - Contratando",
      description: "¡Únete a Kona Coffee Donut en Waikiki! Estamos contratando Gerentes, Baristas, Panaderos, Cajeros y más. Posiciones de tiempo completo y parcial disponibles. Trabaja en la Avenida Kalakaua con vista al mar. ¡Solicita hoy para empleos en Honolulu, Hawaii!",
    },
  };

  const currentMeta = metadata[locale] || metadata.en;

  // Comprehensive keywords for job seekers in multiple languages
  const keywords = [
    // English - Hawaii/Waikiki job searches
    'jobs in waikiki', 'waikiki jobs', 'hiring waikiki', 'waikiki hiring now',
    'jobs in honolulu', 'honolulu jobs', 'hawaii jobs', 'oahu jobs',
    'coffee shop jobs waikiki', 'coffee shop jobs honolulu', 'coffee shop jobs hawaii',
    'barista jobs waikiki', 'barista jobs honolulu', 'barista jobs hawaii',
    'bakery jobs waikiki', 'bakery jobs honolulu', 'baker jobs hawaii',
    'restaurant jobs waikiki', 'restaurant jobs honolulu', 'food service jobs hawaii',
    'cashier jobs waikiki', 'cashier jobs honolulu', 'retail jobs waikiki',
    'part time jobs waikiki', 'part time jobs honolulu', 'part time jobs hawaii',
    'full time jobs waikiki', 'full time jobs honolulu',
    'entry level jobs waikiki', 'entry level jobs hawaii',
    'kalakaua ave jobs', 'kalakaua jobs', 'waikiki beach jobs',
    'now hiring waikiki', 'now hiring honolulu', 'help wanted waikiki',
    'donut shop jobs', 'cafe jobs waikiki', 'food and beverage jobs hawaii',
    'hospitality jobs waikiki', 'customer service jobs waikiki',
    'manager jobs waikiki', 'assistant manager jobs honolulu',
    'cook jobs waikiki', 'kitchen jobs honolulu',

    // Japanese - ワイキキ・ハワイ求人
    'ワイキキ 求人', 'ワイキキ アルバイト', 'ワイキキ 仕事',
    'ホノルル 求人', 'ホノルル アルバイト', 'ホノルル 仕事',
    'ハワイ 求人', 'ハワイ アルバイト', 'ハワイ 仕事', 'ハワイ 就職',
    'オアフ島 求人', 'オアフ 仕事',
    'カフェ 求人 ワイキキ', 'バリスタ 求人 ハワイ',
    'コーヒーショップ 求人', 'ドーナツ店 求人',
    'パートタイム ワイキキ', 'フルタイム ハワイ',
    'ワイキキ 働く', 'ハワイ 働く', 'ハワイ で 働き たい',
    '日本人 求人 ハワイ', '日本語 求人 ワイキキ',
    'ワーキングホリデー ハワイ', '海外 バイト',
    'レストラン 求人 ワイキキ', 'キッチン 求人 ハワイ',
    'マネージャー 求人 ワイキキ', 'キャッシャー 求人 ハワイ',

    // Korean - 와이키키/하와이 취업
    '와이키키 구인', '와이키키 아르바이트', '와이키키 일자리',
    '호놀룰루 구인', '호놀룰루 일자리', '호놀룰루 취업',
    '하와이 구인', '하와이 아르바이트', '하와이 일자리', '하와이 취업',
    '오아후 구인', '오아후 일자리',
    '카페 구인 와이키키', '바리스타 구인 하와이',
    '커피숍 구인', '도넛가게 구인',
    '파트타임 와이키키', '풀타임 하와이',
    '와이키키 알바', '하와이 알바', '하와이에서 일하기',
    '한국인 구인 하와이', '한국어 구인 와이키키',
    '워킹홀리데이 하와이', '해외 취업',
    '레스토랑 구인 와이키키', '주방 구인 하와이',
    '매니저 구인 와이키키', '캐셔 구인 하와이',

    // Spanish - trabajos en Waikiki (Hispanic community in Hawaii)
    'trabajos en waikiki', 'empleos waikiki', 'trabajo en honolulu',
    'empleos en hawaii', 'trabajo en hawaii', 'trabajos en oahu',
    'barista trabajo hawaii', 'panadero trabajo waikiki',
    'cajero trabajo honolulu', 'restaurante trabajo waikiki',
    'tiempo parcial waikiki', 'tiempo completo hawaii',
    'se busca empleados waikiki', 'contratando waikiki',

    // Chinese - 威基基/夏威夷工作
    '威基基 招聘', '威基基 工作', '威基基 兼职',
    '檀香山 招聘', '檀香山 工作', '夏威夷 招聘',
    '夏威夷 工作', '夏威夷 就业', '欧胡岛 工作',
    '咖啡师 招聘 夏威夷', '面包师 招聘 威基基',
    '收银员 招聘', '餐厅 招聘 威基基',

    // Brand specific
    'kona coffee donut careers', 'kona coffee donut jobs', 'kona coffee donut hiring',
    'kona coffee donut employment', 'work at kona coffee donut',

    // From external job postings (Craigslist, Vivinavi)
    'honolulu cafe jobs', 'waikiki barista positions', 'mochi donut shop hiring',
    'hawaii food service jobs', 'coffee shop employment oahu',
    'part time restaurant work honolulu', 'mochi donut jobs',
    'kona coffee cafe jobs', 'musubi cook jobs hawaii',
  ];

  return {
    title: currentMeta.title,
    description: currentMeta.description,
    keywords: keywords,
    openGraph: {
      type: 'website',
      locale: locale === 'en' ? 'en_US' : locale === 'ja' ? 'ja_JP' : locale === 'ko' ? 'ko_KR' : 'zh_CN',
      url: `${siteUrl}/${locale}/careers`,
      siteName: 'Kona Coffee Donut',
      title: currentMeta.title,
      description: currentMeta.description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Kona Coffee Donut - Now Hiring in Waikiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMeta.title,
      description: currentMeta.description,
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}/careers`,
      languages: {
        'en-US': `${siteUrl}/en/careers`,
        'ja-JP': `${siteUrl}/ja/careers`,
        'ko-KR': `${siteUrl}/ko/careers`,
        'zh-CN': `${siteUrl}/zh/careers`,
        'es-ES': `${siteUrl}/es/careers`,
        'x-default': `${siteUrl}/en/careers`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
      },
    },
    other: {
      // Job posting specific meta
      'job:location': 'Waikiki, Honolulu, Hawaii, USA',
      'job:company': 'Kona Coffee Donut',
      'job:type': 'Full-time, Part-time',
    },
  };
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
