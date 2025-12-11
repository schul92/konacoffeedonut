// Analytics Event Tracking Utilities
// Window interface extensions are defined in src/types/window.d.ts

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

// Job Application Click - KEY CONVERSION EVENT
export const trackJobApplyClick = (source: string, locale: string) => {
  trackEvent('job_apply_click', {
    event_category: 'conversion',
    event_label: 'Job Application',
    source: source, // 'careers_page', 'modal', 'nav_banner'
    locale: locale,
    value: 1,
  });

  // Also track as generate_lead for GA4 recommended events
  trackEvent('generate_lead', {
    currency: 'USD',
    value: 10, // Assign value to job application
    source: source,
  });

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Job Application',
      content_category: 'Careers',
    });
  }
};

// Careers Page View - Track interest
export const trackCareersPageView = (locale: string) => {
  trackEvent('careers_page_view', {
    event_category: 'engagement',
    event_label: 'Careers Page',
    locale: locale,
  });

  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: 'Careers Page',
      content_category: 'Jobs',
    });
  }
};

// Hiring Modal View
export const trackHiringModalView = (locale: string) => {
  trackEvent('hiring_modal_view', {
    event_category: 'engagement',
    event_label: 'Hiring Modal Shown',
    locale: locale,
  });
};

// Hiring Modal Dismiss
export const trackHiringModalDismiss = (locale: string) => {
  trackEvent('hiring_modal_dismiss', {
    event_category: 'engagement',
    event_label: 'Hiring Modal Dismissed',
    locale: locale,
  });
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
  trackJobApplyClick,
  trackCareersPageView,
  trackHiringModalView,
  trackHiringModalDismiss,
};

export default analytics;
