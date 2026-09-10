// Online ordering entry points. Every "Order Online" button on the site points
// here, so swapping the ordering provider later is a one-line change.
// NOTE: the public /order redirect in next.config.ts must be kept in sync.
export const ORDER_ONLINE_URL = 'https://kona-coffee-donut-honolulu.cloveronline.com';

// DoorDash storefront (store 48189997). Not linked from the site yet — kept
// next to the Clover link so both live in one place when we do.
export const DOORDASH_STORE_URL = 'https://www.doordash.com/store/kona-coffee-donut-honolulu-48189997/';

const ORDER_ONLINE_LABELS: Record<string, string> = {
  en: 'Order Online',
  ja: 'オンライン注文',
  ko: '온라인 주문',
  zh: '在线订购',
  es: 'Pedir en línea',
};

export function getOrderOnlineLabel(locale: string): string {
  return ORDER_ONLINE_LABELS[locale] ?? ORDER_ONLINE_LABELS.en;
}

// GA event so we can see which placement actually sends people to Clover.
export function trackOrderOnlineClick(placement: string) {
  if (typeof window !== 'undefined' && window.trackEvent) {
    window.trackEvent('order_online_click', { placement });
  }
}
