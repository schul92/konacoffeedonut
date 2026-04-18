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

// Server-rendered FAQ data for JSON-LD (crawlers see this without JS execution)
const faqData: Record<string, Array<{ q: string; a: string }>> = {
  en: [
    { q: "What makes Kona Coffee special?", a: "We serve Honolulu Coffee's premium 100% Kona coffee, grown on the slopes of Mauna Loa in Hawaii. Known for smooth, rich flavor with low acidity — one of the most sought-after coffees in the world." },
    { q: "What are mochi donuts?", a: "Mochi donuts are artisan donuts made with rice flour (mochiko), giving them a unique texture that is crispy on the outside and chewy on the inside. We feature MOCHILAND mochi donuts with 12+ flavors." },
    { q: "Where are you located?", a: "We're located at 2142 Kalakaua Ave, Honolulu, HI 96815, in the heart of Waikiki — just a 5-minute walk from Waikiki Beach." },
    { q: "What are your hours?", a: "We're open daily from 7:00 AM to 9:00 PM." },
    { q: "What is a malasada?", a: "A malasada is a traditional Portuguese fried dough pastry that became a beloved Hawaiian treat. Ours are made fresh daily — crispy outside, fluffy inside, rolled in sugar." },
    { q: "Do you offer bingsu?", a: "Yes! We serve Korean-style bingsu (shaved ice dessert) with flavors like injeolmi, mango, strawberry, and matcha. Perfect for Hawaii's warm weather." },
    { q: "Do you have Korean corn dogs?", a: "Yes! We offer crispy Korean corn dogs with options like mozzarella cheese, half & half, potato-coated, and more — fried to order." },
    { q: "Is there parking nearby?", a: "Street parking and paid lots are available along Kalakaua Ave. The nearest public parking is at the Waikiki Shopping Plaza garage, a short walk from our location." },
    { q: "Do you offer catering?", a: "Yes, we offer catering for events, parties, and corporate functions. Contact us for custom donut and coffee packages." },
    { q: "Is your location family-friendly?", a: "Absolutely! We welcome families and have menu items that kids love, including mochi donuts, malasadas, and acai bowls." },
  ],
  ko: [
    { q: "코나 커피가 특별한 이유는?", a: "저희는 호놀룰루 커피의 프리미엄 100% 코나 커피를 제공합니다. 하와이 마우나 로아 산 경사면에서 재배되며 부드럽고 풍부한 맛과 낮은 산도로 유명합니다." },
    { q: "모찌 도넛이란?", a: "쌀가루(모찌코)로 만든 장인 도넛으로 겉은 바삭하고 속은 쫄깃합니다. 모찌랜드 도넛 12가지 이상의 맛을 제공합니다." },
    { q: "위치가 어디인가요?", a: "2142 Kalakaua Ave, Honolulu, HI 96815, 와이키키 중심부에 위치하며 와이키키 비치에서 도보 5분 거리입니다." },
    { q: "영업시간은?", a: "매일 오전 7시~오후 9시 운영합니다." },
    { q: "빙수가 있나요?", a: "네! 인절미, 망고, 딸기, 말차 등 다양한 맛의 한국식 빙수를 제공합니다." },
    { q: "한국식 핫도그가 있나요?", a: "네! 모짜렐라, 하프앤하프, 감자 코팅 등 다양한 바삭한 한국식 핫도그를 주문 즉시 튀겨 제공합니다." },
    { q: "주차가 가능한가요?", a: "칼라카우아 거리에 노상주차 및 유료 주차장이 있습니다. 가장 가까운 주차장은 와이키키 쇼핑 플라자입니다." },
  ],
  ja: [
    { q: "コナコーヒーの特別な点は？", a: "ホノルルコーヒーのプレミアム100%コナコーヒーを提供。ハワイのマウナロア山の斜面で栽培され、滑らかで豊かな風味と低い酸味で知られています。" },
    { q: "モチドーナツとは？", a: "もち粉で作られた職人ドーナツで、外はサクサク、中はもちもち。MOCHILAND のドーナツを12種類以上提供。" },
    { q: "場所はどこですか？", a: "2142 Kalakaua Ave, Honolulu, HI 96815。ワイキキの中心部、ワイキキビーチから徒歩5分。" },
    { q: "営業時間は？", a: "毎日午前7時～午後9時営業。" },
  ],
};

export default async function FAQLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const faqs = faqData[locale] || faqData.en;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
