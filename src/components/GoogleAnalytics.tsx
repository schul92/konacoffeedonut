import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          // Enhanced configuration with custom dimensions
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
            send_page_view: true,
            // Track UTM parameters and referrers
            campaign_source: new URLSearchParams(window.location.search).get('utm_source') || document.referrer || 'direct',
            campaign_medium: new URLSearchParams(window.location.search).get('utm_medium') || 'organic',
            campaign_name: new URLSearchParams(window.location.search).get('utm_campaign') || 'none',
            // Enhanced measurement
            enhanced_measurement: true,
            link_attribution: true,
            allow_google_signals: true,
            allow_ad_personalization_signals: false,
          });

          // Track initial traffic source
          const getTrafficSource = () => {
            const params = new URLSearchParams(window.location.search);
            const referrer = document.referrer;
            const utmSource = params.get('utm_source');

            if (utmSource) return utmSource;
            if (!referrer) return 'direct';

            const domain = new URL(referrer).hostname;
            if (domain.includes('google')) return 'google';
            if (domain.includes('facebook') || domain.includes('fb')) return 'facebook';
            if (domain.includes('instagram')) return 'instagram';
            if (domain.includes('twitter') || domain.includes('t.co')) return 'twitter';
            if (domain.includes('yelp')) return 'yelp';
            if (domain.includes('tripadvisor')) return 'tripadvisor';

            return referrer;
          };

          // Track session start with traffic source
          gtag('event', 'session_start', {
            traffic_source: getTrafficSource(),
            landing_page: window.location.pathname,
            device_type: /Mobile|Android|iPhone/.test(navigator.userAgent) ? 'mobile' : 'desktop',
            language: navigator.language || 'unknown',
            screen_resolution: window.screen.width + 'x' + window.screen.height,
          });

          // Track scroll depth
          let scrollDepth = 0;
          const trackScrollDepth = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const depth = Math.round((scrollTop + windowHeight) / documentHeight * 100);

            if (depth > scrollDepth) {
              scrollDepth = depth;
              if (depth >= 25 && depth < 50) {
                gtag('event', 'scroll', { percent_scrolled: 25 });
              } else if (depth >= 50 && depth < 75) {
                gtag('event', 'scroll', { percent_scrolled: 50 });
              } else if (depth >= 75 && depth < 90) {
                gtag('event', 'scroll', { percent_scrolled: 75 });
              } else if (depth >= 90) {
                gtag('event', 'scroll', { percent_scrolled: 100 });
              }
            }
          };

          window.addEventListener('scroll', trackScrollDepth, { passive: true });

          // Track time on page
          let pageLoadTime = Date.now();
          window.addEventListener('beforeunload', () => {
            const timeOnPage = Math.round((Date.now() - pageLoadTime) / 1000);
            gtag('event', 'time_on_page', {
              duration_seconds: timeOnPage,
              page: window.location.pathname,
            });
          });

          // Track outbound links
          document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && link.href) {
              const isExternal = link.hostname !== window.location.hostname;

              if (isExternal) {
                gtag('event', 'click', {
                  event_category: 'outbound',
                  event_label: link.href,
                  transport_type: 'beacon',
                });
              }

              // Track specific important links
              if (link.href.includes('google.com/maps')) {
                gtag('event', 'get_directions', {
                  method: 'google_maps',
                  location: 'Waikiki',
                });
              }

              if (link.href.includes('instagram.com')) {
                gtag('event', 'social_click', {
                  platform: 'instagram',
                  location: link.closest('section')?.id || 'unknown',
                });
              }

              if (link.href.includes('facebook.com')) {
                gtag('event', 'social_click', {
                  platform: 'facebook',
                  location: link.closest('section')?.id || 'unknown',
                });
              }
            }
          });

          // Global event tracker function
          window.trackEvent = (eventName, params) => {
            gtag('event', eventName, params);
          };
        `}
      </Script>
    </>
  );
}
