// Analytics Event Tracking Utilities

declare global {
  interface Window {
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

// Google Analytics 4 Events
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Menu View Events
export const trackMenuView = (menuCategory: string) => {
  trackEvent('view_menu', {
    menu_category: menuCategory,
    event_category: 'engagement',
    event_label: `Menu - ${menuCategory}`,
  });

  // Also track in Meta Pixel if available
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: `Menu - ${menuCategory}`,
      content_category: 'Menu',
    });
  }
};

// Directions Click Event
export const trackDirectionsClick = () => {
  trackEvent('get_directions', {
    event_category: 'conversion',
    event_label: 'Get Directions Button',
  });

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'FindLocation');
  }
};

// Language Switch Event
export const trackLanguageSwitch = (fromLang: string, toLang: string) => {
  trackEvent('language_change', {
    previous_language: fromLang,
    new_language: toLang,
    event_category: 'engagement',
  });
};

// Scroll Depth Tracking
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    scroll_percentage: depth,
    event_category: 'engagement',
  });
};

// Video Play Event (for menu videos)
export const trackVideoPlay = (videoName: string) => {
  trackEvent('video_play', {
    video_name: videoName,
    event_category: 'engagement',
  });
};

// Outbound Link Click
export const trackOutboundLink = (url: string, linkText: string) => {
  trackEvent('click_outbound', {
    link_url: url,
    link_text: linkText,
    event_category: 'engagement',
  });
};

// Social Media Click
export const trackSocialClick = (platform: string) => {
  trackEvent('social_click', {
    social_platform: platform,
    event_category: 'social',
  });
};

// Contact Event
export const trackContact = (method: string) => {
  trackEvent('contact', {
    contact_method: method,
    event_category: 'conversion',
  });

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact');
  }
};

// Custom Conversion Events
export const trackMenuDownload = (menuType: string) => {
  trackEvent('menu_download', {
    menu_type: menuType,
    event_category: 'conversion',
  });
};

// Newsletter Signup (if you add one later)
export const trackNewsletterSignup = () => {
  trackEvent('newsletter_signup', {
    event_category: 'conversion',
  });

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead');
  }
};

// Online Order Click (if you add ordering later)
export const trackOrderClick = () => {
  trackEvent('initiate_order', {
    event_category: 'conversion',
  });

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout');
  }
};

const analytics = {
  trackEvent,
  trackMenuView,
  trackDirectionsClick,
  trackLanguageSwitch,
  trackScrollDepth,
  trackVideoPlay,
  trackOutboundLink,
  trackSocialClick,
  trackContact,
  trackMenuDownload,
  trackNewsletterSignup,
  trackOrderClick,
};

export default analytics;
