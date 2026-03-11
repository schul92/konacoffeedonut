export type SocialPlatform = 'instagram' | 'x' | 'bluesky' | 'google' | 'facebook';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
  handle: string;
  sublabel: string;
  footerHoverClassName: string;
  mobileGradientClassName: string;
  mobileIconClassName: string;
  mobileHoverTextClassName: string;
}

export const konaSocialLinks = [
  {
    platform: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/konacoffeedonut/',
    handle: '@konacoffeedonut',
    sublabel: 'Kona Coffee Donut',
    footerHoverClassName: 'hover:text-pink-400',
    mobileGradientClassName: 'bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50',
    mobileIconClassName: 'bg-gradient-to-br from-amber-500 to-orange-500',
    mobileHoverTextClassName: 'group-hover:text-orange-600',
  },
  {
    platform: 'x',
    label: 'X',
    href: 'https://x.com/konacoffeedonut',
    handle: '@konacoffeedonut',
    sublabel: 'Latest updates on X',
    footerHoverClassName: 'hover:text-white',
    mobileGradientClassName: 'bg-gradient-to-r from-zinc-50 via-slate-50 to-zinc-50',
    mobileIconClassName: 'bg-gradient-to-br from-zinc-900 to-black',
    mobileHoverTextClassName: 'group-hover:text-zinc-900',
  },
  {
    platform: 'bluesky',
    label: 'Bluesky',
    href: 'https://bsky.app/profile/konacoffeedonut.bsky.social',
    handle: '@konacoffeedonut.bsky.social',
    sublabel: 'Follow us on Bluesky',
    footerHoverClassName: 'hover:text-sky-300',
    mobileGradientClassName: 'bg-gradient-to-r from-sky-50 via-cyan-50 to-sky-50',
    mobileIconClassName: 'bg-gradient-to-br from-sky-500 to-cyan-500',
    mobileHoverTextClassName: 'group-hover:text-sky-600',
  },
  {
    platform: 'google',
    label: 'Google',
    href: 'https://share.google/kp6DjHUzBFFJBjslU',
    handle: 'Google Business Profile',
    sublabel: 'Find us on Google',
    footerHoverClassName: 'hover:text-amber-300',
    mobileGradientClassName: 'bg-gradient-to-r from-yellow-50 via-amber-50 to-yellow-50',
    mobileIconClassName: 'bg-gradient-to-br from-yellow-500 to-amber-500',
    mobileHoverTextClassName: 'group-hover:text-amber-600',
  },
  {
    platform: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61587241412264',
    handle: 'Kona Coffee Donut',
    sublabel: 'Official Facebook page',
    footerHoverClassName: 'hover:text-blue-400',
    mobileGradientClassName: 'bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50',
    mobileIconClassName: 'bg-gradient-to-br from-blue-600 to-indigo-600',
    mobileHoverTextClassName: 'group-hover:text-blue-600',
  },
] satisfies SocialLink[];

export const partnerInstagramUrls = [
  'https://www.instagram.com/mochinut_fortlee',
  'https://www.instagram.com/bonepi_mochiland',
  'https://www.instagram.com/bonepi_mochiland_official',
];

const [instagramLink, ...additionalKonaSocialLinks] = konaSocialLinks;

export const seoSameAsUrls = [
  instagramLink.href,
  ...partnerInstagramUrls,
  ...additionalKonaSocialLinks.map(({ href }) => href),
];
