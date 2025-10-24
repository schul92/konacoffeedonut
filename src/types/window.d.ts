// Global window type extensions
declare global {
  interface Window {
    trackEvent: (eventName: string, params?: Record<string, string | number | boolean>) => void;
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
  }
}

export {};
