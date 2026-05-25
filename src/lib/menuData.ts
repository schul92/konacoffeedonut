// Shared menu data. Visual content (images, videos, detail-page hrefs) lives here;
// human-readable names and descriptions come from next-intl messages under "menu.categories.<id>".

export interface MenuCategory {
  /** Matches the i18n key under menu.categories.<id> */
  id: 'donuts' | 'malasada' | 'coffee' | 'shavedice' | 'hotdog' | 'acai';
  /** Full menu image to show inline + open in the lightbox */
  menuImage: string;
  /** Looping ambient video for the hero card */
  video?: string;
  /** Small still preview for cards that don't auto-load the video */
  preview?: string;
  /** Optional brand/category icon shown on the card */
  iconImage?: string;
  /** Optional emoji fallback when no iconImage */
  icon?: string;
  /** Tone for the section background gradient */
  accent: 'amber' | 'pink' | 'rose' | 'sky' | 'emerald' | 'violet';
  /** Existing localized detail page slug, if any */
  detailSlug?: string;
  /** Mark the category as Coming Soon — no detail link, no lightbox */
  comingSoon?: boolean;
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'donuts',
    menuImage: '/images/menu/donut.webp',
    video: '/videos/donut.mp4',
    preview: '/images/menu/donut.jpeg',
    iconImage: '/icons/mochi_land_circle.png',
    accent: 'pink',
    detailSlug: 'mochi-donuts',
  },
  {
    id: 'malasada',
    menuImage: '/images/menu/malasada.webp',
    video: '/videos/malasada.mp4',
    preview: '/images/menu/malasada.jpeg',
    iconImage: '/icons/mochi_land_circle.png',
    accent: 'amber',
    detailSlug: 'malasada',
  },
  {
    id: 'coffee',
    menuImage: '/images/menu/coffee-menu-full.png',
    video: '/videos/coffee.mp4',
    preview: '/images/menu/coffee.jpeg',
    iconImage: '/icons/honolulu_coffee.png',
    accent: 'rose',
    detailSlug: 'kona-coffee',
  },
  {
    id: 'shavedice',
    menuImage: '/images/menu/bingsu-menu-full.png',
    video: '/videos/bingsu.mp4',
    preview: '/images/menu/bingsu.jpeg',
    icon: '🍧',
    accent: 'sky',
    detailSlug: 'bingsu',
  },
  {
    id: 'hotdog',
    menuImage: '/images/menu/hotdog.webp',
    video: '/videos/hotdog.mp4',
    preview: '/images/menu/hotdog.jpeg',
    iconImage: '/icons/mochi_land_circle.png',
    accent: 'emerald',
    detailSlug: 'korean-corn-dog',
  },
  {
    id: 'acai',
    menuImage: '/images/menu/acai.webp',
    video: '/videos/acai.mp4',
    preview: '/images/menu/acai.jpeg',
    iconImage: '/icons/mochi_land_circle.png',
    accent: 'violet',
    comingSoon: true,
  },
];

export const comingSoonEmoji: Record<MenuCategory['id'], string> = {
  donuts: '🍩',
  malasada: '🍩',
  coffee: '☕',
  shavedice: '🍧',
  hotdog: '🌭',
  acai: '🫐',
};
