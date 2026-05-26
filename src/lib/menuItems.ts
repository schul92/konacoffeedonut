// Individual menu items grouped by category, used by the Mochinut-style menu gallery
// at /[locale]/menu. Names mostly come from the existing detail pages and the
// printed menu boards in public/images/menu/*-menu-full.png. Prices are only
// included when they appear on a printed/source-of-truth board — we never invent prices.

export interface MenuItem {
  name: string;
  /** Item image. Every item points to its own unique file under /images/menu/items/. */
  image: string;
  /** Optional price string exactly as printed on the menu board. */
  price?: string;
}

export interface MenuItemCategory {
  /** Stable id used for anchor links and i18n keys */
  id:
    | 'donuts'
    | 'malasada'
    | 'coffee'
    | 'matcha'
    | 'smoothies'
    | 'bingsu'
    | 'acai'
    | 'hotdog';
  /** Display title for the section header */
  title: string;
  /** Optional category-level link to the existing detail page (slug under /menu) */
  detailSlug?: string;
  items: MenuItem[];
}

// Category-level fallback roots (only used by categoryFallbackImage map below).
const DONUT = '/images/menu/donut.webp';
const MALASADA_IMG = '/images/menu/malasada.webp';
const COFFEE = '/images/menu/coffee.webp';
const BINGSU_BASE = '/images/menu/bingsu.webp';
const HOTDOG = '/images/menu/hotdog.webp';
const ACAI_IMG = '/images/menu/acai.webp';

// Photoreal Gemini-generated product shots with the cream studio background
// removed (see scripts/process_menu_item_cutouts.py + process_mochi_donut_cutouts.py)
// so each item renders as a transparent cutout floating on the page's warm bg.
const donutItem = (name: string) => `/images/menu/items/gemini-mochi/cutouts/${name}.webp`;
const geminiItem = (category: string) => (name: string) =>
  `/images/menu/items/gemini/${category}/cutouts/${name}.webp`;
const malasadaItem = geminiItem('malasada');
const coffeeItem = geminiItem('coffee');
const matchaItem = geminiItem('matcha');
const smoothieItem = geminiItem('smoothies');
const bingsuItem = geminiItem('bingsu');
const acaiItem = geminiItem('acai');
const hotdogItem = geminiItem('hotdog');

export const menuItemCategories: MenuItemCategory[] = [
  {
    id: 'donuts',
    title: 'Mochi Donuts',
    detailSlug: 'mochi-donuts',
    items: [
      { name: 'Original Glaze', image: donutItem('donut-original-glaze') },
      { name: 'Chocolate', image: donutItem('donut-chocolate') },
      { name: 'Strawberry', image: donutItem('donut-strawberry') },
      { name: 'Matcha Green Tea', image: donutItem('donut-matcha-green-tea') },
      { name: 'Ube Purple Yam', image: donutItem('donut-ube-purple-yam') },
      { name: 'Brown Sugar', image: donutItem('donut-brown-sugar') },
      { name: 'Seasonal Special', image: donutItem('donut-seasonal-special') },
    ],
  },
  {
    id: 'malasada',
    title: 'Malasada',
    detailSlug: 'malasada',
    items: [
      { name: 'Original', image: malasadaItem('malasada-original') },
      { name: 'Cinnamon Sugar', image: malasadaItem('malasada-cinnamon-sugar') },
      { name: 'Haupia (Coconut)', image: malasadaItem('malasada-haupia-coconut') },
      { name: 'Chocolate', image: malasadaItem('malasada-chocolate') },
      { name: 'Custard', image: malasadaItem('malasada-custard') },
      { name: 'Li Hing Mui', image: malasadaItem('malasada-li-hing-mui') },
    ],
  },
  {
    id: 'coffee',
    title: 'Espresso Bar',
    detailSlug: 'kona-coffee',
    items: [
      { name: 'Kona Coffee', image: coffeeItem('coffee-kona-coffee'), price: '5.00' },
      { name: 'Espresso', image: coffeeItem('coffee-espresso'), price: '4.75' },
      { name: 'Americano', image: coffeeItem('coffee-americano'), price: '5.35' },
      { name: 'Latte', image: coffeeItem('coffee-latte'), price: '6.35 / 7.35' },
      { name: 'Cappuccino', image: coffeeItem('coffee-cappuccino'), price: '6.35 / 7.35' },
      { name: 'Kona Cold Brew', image: coffeeItem('coffee-kona-cold-brew'), price: '6.25 / 7.25' },
      { name: 'Kona Affogato', image: coffeeItem('coffee-kona-affogato'), price: '8.50' },
      { name: 'Mocha', image: coffeeItem('coffee-mocha'), price: '7.75' },
      { name: 'Ube Latte', image: coffeeItem('coffee-ube-latte'), price: '7.75' },
      { name: 'Hot Chocolate', image: coffeeItem('coffee-hot-chocolate'), price: '6.50' },
      { name: 'Loose Leaf Tea', image: coffeeItem('coffee-loose-leaf-tea'), price: '5.75' },
    ],
  },
  {
    id: 'matcha',
    title: 'Matcha · Hojicha Lattes',
    items: [
      { name: 'Azuki Latte', image: matchaItem('matcha-azuki-latte'), price: '10.95' },
      { name: 'Strawberry Latte', image: matchaItem('matcha-strawberry-latte'), price: '10.95' },
      { name: 'Matcha Latte', image: matchaItem('matcha-latte'), price: '8.95' },
      { name: 'Hojicha Latte', image: matchaItem('matcha-hojicha-latte'), price: '8.95' },
      { name: 'Guava Matcha', image: matchaItem('matcha-guava'), price: '8.95' },
      { name: 'Lilikoi Matcha', image: matchaItem('matcha-lilikoi'), price: '8.95' },
      { name: 'Mango Matcha', image: matchaItem('matcha-mango'), price: '8.95' },
      { name: 'Coconut Matcha', image: matchaItem('matcha-coconut'), price: '8.95' },
      { name: 'Banana Matcha', image: matchaItem('matcha-banana'), price: '8.95' },
    ],
  },
  {
    id: 'smoothies',
    title: 'Smoothies',
    items: [
      { name: 'Açaí Berry', image: smoothieItem('smoothie-acai-berry'), price: '10.95' },
      { name: 'Strawberry Banana', image: smoothieItem('smoothie-strawberry-banana'), price: '10.95' },
      { name: 'Coconut Pineapple', image: smoothieItem('smoothie-coconut-pineapple'), price: '10.95' },
      { name: 'Mango Coconut Lilikoi', image: smoothieItem('smoothie-mango-coconut-lilikoi'), price: '10.95' },
    ],
  },
  {
    id: 'bingsu',
    title: 'Milk Shaved Bingsu',
    detailSlug: 'bingsu',
    items: [
      { name: 'Azuki Bean', image: bingsuItem('bingsu-azuki-bean'), price: '13.95' },
      { name: 'Strawberry', image: bingsuItem('bingsu-strawberry'), price: '13.95' },
      { name: 'Pineapple', image: bingsuItem('bingsu-pineapple'), price: '13.95' },
      { name: 'Mango', image: bingsuItem('bingsu-mango'), price: '13.95' },
      { name: 'Ube', image: bingsuItem('bingsu-ube'), price: '13.95' },
      { name: 'Injeolmi', image: bingsuItem('bingsu-injeolmi'), price: '13.95' },
      { name: 'Green Tea', image: bingsuItem('bingsu-greentea'), price: '13.95' },
      { name: 'Black Sesame', image: bingsuItem('bingsu-black-sesame'), price: '13.95' },
      { name: 'Kona Coffee', image: bingsuItem('bingsu-kona-coffee'), price: '13.95' },
    ],
  },
  {
    id: 'acai',
    title: 'Hawaiian Bingsu & Açaí Bowl',
    detailSlug: 'acai-bowl',
    items: [
      { name: 'Waikiki Rainbow', image: acaiItem('bingsu-waikiki-rainbow'), price: '10.95' },
      { name: 'Paradise Lilikoi', image: acaiItem('bingsu-paradise-lilikoi'), price: '10.95' },
      { name: 'Volcano Island', image: acaiItem('bingsu-volcano-island'), price: '10.95' },
      { name: 'Coco Head', image: acaiItem('bingsu-coco-head'), price: '10.95' },
      { name: 'Tropical Jungle', image: acaiItem('bingsu-tropical-jungle'), price: '10.95' },
      { name: 'Açaí Oahu', image: acaiItem('acai-oahu'), price: '11.95 / 15.95' },
      { name: 'Açaí Paradise', image: acaiItem('acai-paradise'), price: '11.95 / 15.95' },
      { name: 'Açaí Colada', image: acaiItem('acai-colada'), price: '11.95 / 15.95' },
      { name: 'Papaya Bowl', image: acaiItem('acai-papaya'), price: '12.95' },
    ],
  },
  {
    id: 'hotdog',
    title: 'Korean Corn Dogs',
    detailSlug: 'korean-corn-dog',
    items: [
      { name: 'Classic Sausage', image: hotdogItem('corn-dog-classic-sausage') },
      { name: 'Mozzarella Cheese', image: hotdogItem('corn-dog-mozzarella-cheese') },
      { name: 'Half & Half', image: hotdogItem('corn-dog-half-and-half') },
      { name: 'Potato Dog', image: hotdogItem('corn-dog-potato') },
      { name: 'Crispy Ramen', image: hotdogItem('corn-dog-crispy-ramen') },
      { name: 'Sugar Dog', image: hotdogItem('corn-dog-sugar-dog') },
    ],
  },
];

/** Used by the gallery as a soft fallback if a per-item image is missing. */
export const categoryFallbackImage: Record<MenuItemCategory['id'], string> = {
  donuts: DONUT,
  malasada: MALASADA_IMG,
  coffee: COFFEE,
  matcha: COFFEE,
  smoothies: ACAI_IMG,
  bingsu: BINGSU_BASE,
  acai: ACAI_IMG,
  hotdog: HOTDOG,
};
