// Global window type extensions
declare global {
  interface Window {
    trackEvent: (eventName: string, params?: Record<string, string | number | boolean>) => void;
    dataLayer: unknown[];
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    fbq?: (
      track: string,
      event: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export {};
