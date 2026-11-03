import Image from 'next/image';
import Link from 'next/link';

// Home-page "New on the blog" strip. The home page is the most-crawled URL on the site, so linking the newest
// posts from here is what gets them crawled (most were "Discovered – currently not indexed" in GSC).
// Keep the newest posts first; 8 cards = two rows on desktop.
type L = 'en' | 'ja' | 'ko' | 'zh' | 'es';

const POSTS: { slug: string; title: Record<L, string> }[] = [
  { slug: 'spam-musubi-vs-onigiri', title: { en: 'Spam Musubi vs Onigiri: What’s the Difference?', ja: 'スパムむすびとおにぎりの違い', ko: '스팸 무스비와 오니기리 차이', zh: '午餐肉饭团和日式饭团的区别', es: 'Spam musubi vs onigiri' } },
  { slug: 'thai-tea-waikiki', title: { en: 'Thai Tea in Waikiki: Boba Cans & Smoothies', ja: 'ワイキキのタイティー', ko: '와이키키 타이티', zh: '威基基泰式奶茶', es: 'Té tailandés en Waikiki' } },
  { slug: 'what-is-lilikoi', title: { en: 'What Is Lilikoi? Hawaii’s Passion Fruit', ja: 'リリコイとは？', ko: '릴리코이란?', zh: 'Lilikoi是什么？', es: '¿Qué es el lilikoi?' } },
  { slug: 'waikiki-snacks-grab-and-go', title: { en: 'Grab-and-Go Beach Food in Waikiki', ja: 'ワイキキのテイクアウト', ko: '와이키키 테이크아웃 비치 간식', zh: '威基基外带海滩小吃', es: 'Comida para llevar en Waikiki' } },
  { slug: 'malasada-ice-cream-sandwich-waikiki', title: { en: 'Malasada Ice Cream Sandwich: 8 Flavors', ja: 'マラサダ・アイスクリームサンド', ko: '말라사다 아이스크림 샌드위치', zh: '马拉萨达冰淇淋三明治', es: 'Sándwich de helado con malasada' } },
  { slug: 'best-iced-drinks-waikiki', title: { en: 'Iced Drinks Near Waikiki Beach', ja: 'ワイキキのアイスドリンク', ko: '와이키키 아이스 음료', zh: '威基基冰饮', es: 'Bebidas frías en Waikiki' } },
  { slug: 'rainy-day-waikiki-cafe', title: { en: 'Rainy Day in Waikiki: Warm Up on Kalākaua', ja: 'ワイキキ雨の日の過ごし方', ko: '와이키키 비 오는 날 코스', zh: '威基基下雨天去哪', es: 'Día de lluvia en Waikiki' } },
  { slug: 'family-kids-cafe-waikiki', title: { en: 'Family-Friendly Cafe in Waikiki', ja: 'ワイキキの子連れカフェ', ko: '와이키키 아이랑 가기 좋은 카페', zh: '威基基亲子咖啡店', es: 'Cafetería familiar en Waikiki' } },
];

const HEAD: Record<L, { title: string; all: string }> = {
  en: { title: 'New on the Blog', all: 'All posts →' },
  ja: { title: 'ブログ新着', all: 'すべての記事 →' },
  ko: { title: '블로그 새 글', all: '전체 글 보기 →' },
  zh: { title: '博客最新文章', all: '查看全部 →' },
  es: { title: 'Nuevo en el blog', all: 'Ver todo →' },
};

export default function LatestBlogPosts({ locale = 'en' }: { locale?: string }) {
  const loc = (['en', 'ja', 'ko', 'zh', 'es'].includes(locale) ? locale : 'en') as L;
  const h = HEAD[loc];
  return (
    <section aria-labelledby="latest-posts" className="py-16 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between gap-4 mb-6 md:mb-8">
          <h2 id="latest-posts" className="text-2xl md:text-4xl font-black text-stone-900">{h.title}</h2>
          <Link href={`/${loc}/blog`} className="text-sm md:text-base font-semibold text-orange-600 hover:text-orange-700 whitespace-nowrap">
            {h.all}
          </Link>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {POSTS.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/${loc}/blog/${p.slug}`}
                className="group block h-full rounded-2xl overflow-hidden border border-stone-200 bg-stone-50 hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={`/images/blog/${p.slug}.jpeg`}
                    alt={p.title[loc]}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
                <p className="p-3 text-sm md:text-[15px] font-semibold leading-snug text-stone-800">{p.title[loc]}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
