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

/** An optional extra/add-on for a category (e.g. alt milk, toppings). */
export interface MenuAddOn {
  label: string;
  /** Price string exactly as printed (no $). */
  price: string;
}

// Add-on groups exactly as printed on the menu boards.
// Drinks (espresso bar, matcha/hojicha, smoothies) — the "ADDITIONS" panel.
const DRINK_ADDONS: MenuAddOn[] = [
  { label: 'Flavored Syrup', price: '0.75' },
  { label: 'Almond Milk', price: '1.00' },
  { label: 'Soy Milk', price: '1.00' },
  { label: 'Oat Milk', price: '1.00' },
  { label: 'Latte Foam', price: '1.00' },
];
// Shave ice / bingsu — the "ADDITION + 1.95" panel.
const SHAVE_ICE_ADDONS: MenuAddOn[] = [
  { label: 'Mochi', price: '1.95' },
  { label: 'Azuki Bean', price: '1.95' },
  { label: 'Condensed Milk', price: '1.95' },
  { label: 'Popping Boba', price: '1.95' },
];

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
  /** Optional add-ons/extras for this category, shown under the items grid. */
  addOns?: MenuAddOn[];
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
// Real studio product photos with the white background removed
// (see scripts/process_real_mochi_cutouts.py) — replaces the earlier
// Gemini-generated mochi renders.
const donutItem = (name: string) => `/images/menu/items/mochinut/cutouts/${name}.webp`;
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
    // Flavors and order match the printed menu board in
    // public/images/menu/donut.webp (24 mochi pon-de-ring flavors). Prices on
    // the board are pack-based — 3PC $11.25 / 6PC $22.50 / 12PC $45.00 — not
    // per-flavor, so we deliberately omit MenuItem.price here rather than
    // inventing individual prices.
    id: 'donuts',
    title: 'Mochi Donuts',
    detailSlug: 'mochi-donuts',
    items: [
      { name: 'Plain', image: donutItem('donut-plain') },
      { name: 'Cookies & Creme', image: donutItem('donut-cookies-and-creme') },
      { name: 'Nutella', image: donutItem('donut-nutella') },
      { name: 'Injeolmi', image: donutItem('donut-injeolmi') },
      { name: 'Ube', image: donutItem('donut-ube') },
      { name: 'Ube Churro', image: donutItem('donut-ube-churro') },
      { name: 'Dark Chocolate', image: donutItem('donut-dark-chocolate') },
      { name: 'Vietnamese Coffee', image: donutItem('donut-vietnamese-coffee') },
      { name: 'Yuzu', image: donutItem('donut-yuzu') },
      { name: 'Black Sesame', image: donutItem('donut-black-sesame') },
      { name: 'Matcha', image: donutItem('donut-matcha') },
      { name: 'Coconut', image: donutItem('donut-coconut') },
      { name: 'Yogurt Pebble', image: donutItem('donut-yogurt-pebble') },
      { name: 'Blueberry', image: donutItem('donut-blueberry') },
      { name: 'Churro', image: donutItem('donut-churro') },
      { name: 'Guava Pineapple', image: donutItem('donut-guava-pineapple') },
      { name: 'Taro', image: donutItem('donut-taro') },
      { name: 'Milk Tea', image: donutItem('donut-milk-tea') },
      { name: 'Peanut Butter', image: donutItem('donut-peanut-butter') },
      { name: 'Strawberry', image: donutItem('donut-strawberry') },
      { name: 'Pistachio', image: donutItem('donut-pistachio') },
      { name: 'White Choco Raspberry', image: donutItem('donut-white-choco-raspberry') },
      { name: 'Mango', image: donutItem('donut-mango') },
      { name: 'Banana', image: donutItem('donut-banana') },
    ],
  },
  {
    // Flavors and prices match the printed reference board in
    // public/images/menu/malasada.webp. Classic malasadas are whole sugar-coated
    // pastries; cream malasadas are cut open to show the filling.
    id: 'malasada',
    title: 'Malasada',
    detailSlug: 'malasada',
    items: [
      { name: 'Original', image: malasadaItem('malasada-original'), price: '1PC 3.95 / 3PC 11.25 / 6PC 22.50 / 12PC 45.00' },
      { name: 'Cinnamon', image: malasadaItem('malasada-cinnamon'), price: '1PC 3.95 / 3PC 11.25 / 6PC 22.50 / 12PC 45.00' },
      { name: 'Ube', image: malasadaItem('malasada-ube'), price: '1PC 3.95 / 3PC 11.25 / 6PC 22.50 / 12PC 45.00' },
      { name: 'Custard', image: malasadaItem('malasada-custard'), price: '1PC 4.95 / 3PC 14.25 / 6PC 28.50 / 12PC 57.00' },
      { name: 'Ube Cream', image: malasadaItem('malasada-ube-cream'), price: '1PC 4.95 / 3PC 14.25 / 6PC 28.50 / 12PC 57.00' },
      { name: 'Nutella', image: malasadaItem('malasada-nutella'), price: '1PC 4.95 / 3PC 14.25 / 6PC 28.50 / 12PC 57.00' },
      { name: 'Macadamia Nut', image: malasadaItem('malasada-macadamia-nut'), price: '1PC 4.95 / 3PC 14.25 / 6PC 28.50 / 12PC 57.00' },
      { name: 'Coconut', image: malasadaItem('malasada-coconut'), price: '1PC 4.95 / 3PC 14.25 / 6PC 28.50 / 12PC 57.00' },
      { name: 'Red Bean', image: malasadaItem('malasada-red-bean'), price: '1PC 4.95 / 3PC 14.25 / 6PC 28.50 / 12PC 57.00' },
    ],
  },
  {
    id: 'coffee',
    title: 'Espresso Bar',
    detailSlug: 'kona-coffee',
    items: [
      { name: 'Kona Coffee', image: coffeeItem('coffee-kona-coffee'), price: '7.00' },
      { name: 'Espresso', image: coffeeItem('coffee-espresso'), price: '4.75' },
      { name: 'Americano', image: coffeeItem('coffee-americano'), price: '5.35' },
      { name: 'Latte', image: coffeeItem('coffee-latte'), price: '6.35 / 7.35' },
      { name: 'Cappuccino', image: coffeeItem('coffee-cappuccino'), price: '6.35 / 7.35' },
      { name: 'Kona Cold Brew', image: coffeeItem('coffee-kona-cold-brew'), price: '6.95 / 7.95' },
      { name: 'Kona Pour Over', image: coffeeItem('coffee-kona-coffee'), price: '10.95 / 11.95' },
      { name: 'Kona Affogato', image: coffeeItem('coffee-kona-affogato'), price: '8.50' },
      { name: 'Mocha', image: coffeeItem('coffee-mocha'), price: '7.95' },
      { name: 'Ube Latte', image: coffeeItem('coffee-ube-latte'), price: '7.95' },
      { name: 'Hot Chocolate', image: coffeeItem('coffee-hot-chocolate'), price: '6.50' },
      { name: 'Loose Leaf Tea', image: coffeeItem('coffee-loose-leaf-tea'), price: '5.75' },
    ],
    addOns: DRINK_ADDONS,
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
    addOns: DRINK_ADDONS,
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
    addOns: DRINK_ADDONS,
  },
  {
    id: 'bingsu',
    title: 'Milk Shaved Bingsu',
    detailSlug: 'bingsu',
    items: [
      { name: 'Azuki Bean', image: bingsuItem('bingsu-azuki-bean'), price: '14.95' },
      { name: 'Strawberry', image: bingsuItem('bingsu-strawberry'), price: '14.95' },
      { name: 'Pineapple', image: bingsuItem('bingsu-pineapple'), price: '14.95' },
      { name: 'Mango', image: bingsuItem('bingsu-mango'), price: '14.95' },
      { name: 'Ube', image: bingsuItem('bingsu-ube'), price: '14.95' },
      { name: 'Kona Coffee', image: bingsuItem('bingsu-kona-coffee'), price: '14.95' },
      { name: 'Green Tea', image: bingsuItem('bingsu-greentea'), price: '14.95' },
    ],
    addOns: SHAVE_ICE_ADDONS,
  },
  {
    id: 'acai',
    title: 'Hawaiian Bingsu & Açaí Bowl',
    detailSlug: 'acai-bowl',
    items: [
      { name: 'Waikiki Rainbow', image: acaiItem('bingsu-waikiki-rainbow'), price: '12.95' },
      { name: 'Paradise Lilikoi', image: acaiItem('bingsu-paradise-lilikoi'), price: '12.95' },
      { name: 'Volcano Island', image: acaiItem('bingsu-volcano-island'), price: '12.95' },
      { name: 'Coco Head', image: acaiItem('bingsu-coco-head'), price: '12.95' },
      { name: 'Tropical Jungle', image: acaiItem('bingsu-tropical-jungle'), price: '12.95' },
      { name: 'Açaí Oahu', image: acaiItem('acai-oahu'), price: '13.95 / 15.95' },
      { name: 'Açaí Paradise', image: acaiItem('acai-paradise'), price: '13.95 / 15.95' },
      { name: 'Açaí Colada', image: acaiItem('acai-colada'), price: '13.95 / 15.95' },
      { name: 'Papaya Special', image: acaiItem('acai-papaya'), price: '13.95 / 15.95' },
      { name: 'Papaya', image: acaiItem('acai-papaya'), price: '7.95' },
    ],
    addOns: SHAVE_ICE_ADDONS,
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
