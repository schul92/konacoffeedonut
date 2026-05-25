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

// Per-item cutouts live under /images/menu/items/ — every item has its own file.
const item = (name: string) => `/images/menu/items/${name}.webp`;

export const menuItemCategories: MenuItemCategory[] = [
  {
    id: 'donuts',
    title: 'Mochi Donuts',
    detailSlug: 'mochi-donuts',
    items: [
      { name: 'Original Glaze', image: item('donut-original-glaze') },
      { name: 'Chocolate', image: item('donut-chocolate') },
      { name: 'Strawberry', image: item('donut-strawberry') },
      { name: 'Matcha Green Tea', image: item('donut-matcha-green-tea') },
      { name: 'Ube Purple Yam', image: item('donut-ube-purple-yam') },
      { name: 'Brown Sugar', image: item('donut-brown-sugar') },
      { name: 'Seasonal Special', image: item('donut-seasonal-special') },
    ],
  },
  {
    id: 'malasada',
    title: 'Malasada',
    detailSlug: 'malasada',
    items: [
      { name: 'Original', image: item('malasada-original') },
      { name: 'Cinnamon Sugar', image: item('malasada-cinnamon-sugar') },
      { name: 'Haupia (Coconut)', image: item('malasada-haupia-coconut') },
      { name: 'Chocolate', image: item('malasada-chocolate') },
      { name: 'Custard', image: item('malasada-custard') },
      { name: 'Li Hing Mui', image: item('malasada-li-hing-mui') },
    ],
  },
  {
    id: 'coffee',
    title: 'Espresso Bar',
    detailSlug: 'kona-coffee',
    items: [
      { name: 'Kona Coffee', image: item('coffee-kona-coffee'), price: '5.00' },
      { name: 'Espresso', image: item('coffee-espresso'), price: '4.75' },
      { name: 'Americano', image: item('coffee-americano'), price: '5.35' },
      { name: 'Latte', image: item('coffee-latte'), price: '6.35 / 7.35' },
      { name: 'Cappuccino', image: item('coffee-cappuccino'), price: '6.35 / 7.35' },
      { name: 'Kona Cold Brew', image: item('coffee-kona-cold-brew'), price: '6.25 / 7.25' },
      { name: 'Kona Affogato', image: item('coffee-kona-affogato'), price: '8.50' },
      { name: 'Mocha', image: item('coffee-mocha'), price: '7.75' },
      { name: 'Ube Latte', image: item('coffee-ube-latte'), price: '7.75' },
      { name: 'Hot Chocolate', image: item('coffee-hot-chocolate'), price: '6.50' },
      { name: 'Loose Leaf Tea', image: item('coffee-loose-leaf-tea'), price: '5.75' },
    ],
  },
  {
    id: 'matcha',
    title: 'Matcha · Hojicha Lattes',
    items: [
      { name: 'Azuki Latte', image: item('matcha-azuki-latte'), price: '10.95' },
      { name: 'Strawberry Latte', image: item('matcha-strawberry-latte'), price: '10.95' },
      { name: 'Matcha Latte', image: item('matcha-latte'), price: '8.95' },
      { name: 'Hojicha Latte', image: item('matcha-hojicha-latte'), price: '8.95' },
      { name: 'Guava Matcha', image: item('matcha-guava'), price: '8.95' },
      { name: 'Lilikoi Matcha', image: item('matcha-lilikoi'), price: '8.95' },
      { name: 'Mango Matcha', image: item('matcha-mango'), price: '8.95' },
      { name: 'Coconut Matcha', image: item('matcha-coconut'), price: '8.95' },
      { name: 'Banana Matcha', image: item('matcha-banana'), price: '8.95' },
    ],
  },
  {
    id: 'smoothies',
    title: 'Smoothies',
    items: [
      { name: 'Açaí Berry', image: item('smoothie-acai-berry'), price: '10.95' },
      { name: 'Strawberry Banana', image: item('smoothie-strawberry-banana'), price: '10.95' },
      { name: 'Coconut Pineapple', image: item('smoothie-coconut-pineapple'), price: '10.95' },
      { name: 'Mango Coconut Lilikoi', image: item('smoothie-mango-coconut-lilikoi'), price: '10.95' },
    ],
  },
  {
    id: 'bingsu',
    title: 'Milk Shaved Bingsu',
    detailSlug: 'bingsu',
    items: [
      { name: 'Azuki Bean', image: item('bingsu-azuki-bean'), price: '13.95' },
      { name: 'Strawberry', image: item('bingsu-strawberry'), price: '13.95' },
      { name: 'Pineapple', image: item('bingsu-pineapple'), price: '13.95' },
      { name: 'Mango', image: item('bingsu-mango'), price: '13.95' },
      { name: 'Ube', image: item('bingsu-ube'), price: '13.95' },
      { name: 'Injeolmi', image: item('bingsu-injeolmi'), price: '13.95' },
      { name: 'Green Tea', image: item('bingsu-greentea'), price: '13.95' },
      { name: 'Black Sesame', image: item('bingsu-black-sesame'), price: '13.95' },
      { name: 'Kona Coffee', image: item('bingsu-kona-coffee'), price: '13.95' },
    ],
  },
  {
    id: 'acai',
    title: 'Hawaiian Bingsu & Açaí Bowl',
    detailSlug: 'acai-bowl',
    items: [
      { name: 'Waikiki Rainbow', image: item('bingsu-waikiki-rainbow'), price: '10.95' },
      { name: 'Paradise Lilikoi', image: item('bingsu-paradise-lilikoi'), price: '10.95' },
      { name: 'Volcano Island', image: item('bingsu-volcano-island'), price: '10.95' },
      { name: 'Coco Head', image: item('bingsu-coco-head'), price: '10.95' },
      { name: 'Tropical Jungle', image: item('bingsu-tropical-jungle'), price: '10.95' },
      { name: 'Açaí Oahu', image: item('acai-oahu'), price: '11.95 / 15.95' },
      { name: 'Açaí Paradise', image: item('acai-paradise'), price: '11.95 / 15.95' },
      { name: 'Açaí Colada', image: item('acai-colada'), price: '11.95 / 15.95' },
      { name: 'Papaya Bowl', image: item('acai-papaya'), price: '12.95' },
    ],
  },
  {
    id: 'hotdog',
    title: 'Korean Corn Dogs',
    detailSlug: 'korean-corn-dog',
    items: [
      { name: 'Classic Sausage', image: item('corn-dog-classic-sausage') },
      { name: 'Mozzarella Cheese', image: item('corn-dog-mozzarella-cheese') },
      { name: 'Half & Half', image: item('corn-dog-half-and-half') },
      { name: 'Potato Dog', image: item('corn-dog-potato') },
      { name: 'Crispy Ramen', image: item('corn-dog-crispy-ramen') },
      { name: 'Sugar Dog', image: item('corn-dog-sugar-dog') },
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
