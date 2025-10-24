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

          // Enhanced User Segmentation - Detect Tourist vs Local
          const detectVisitorType = () => {
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const isHawaiiTimezone = timezone === 'Pacific/Honolulu';
            const language = navigator.language || navigator.userLanguage;

            // Detect if likely tourist
            const isTourist = !isHawaiiTimezone ||
                             language.startsWith('ja') ||
                             language.startsWith('ko') ||
                             language.startsWith('zh');

            return {
              visitor_type: isTourist ? 'tourist' : 'local',
              timezone: timezone,
              browser_language: language,
            };
          };

          // Track visitor segmentation
          gtag('event', 'visitor_segmentation', detectVisitorType());

          // Set user properties for better segmentation
          const visitorInfo = detectVisitorType();
          gtag('set', 'user_properties', {
            visitor_type: visitorInfo.visitor_type,
            device_category: /Mobile|Android|iPhone/.test(navigator.userAgent) ? 'mobile' : 'desktop',
            language_preference: navigator.language.split('-')[0],
          });

          // Track Menu Section Views (when user scrolls into view)
          const observeMenuSections = () => {
            const sections = ['menu', 'location', 'about'];
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                  gtag('event', 'view_section', {
                    section_name: entry.target.id,
                    visitor_type: visitorInfo.visitor_type,
                  });
                }
              });
            }, { threshold: 0.5 });

            sections.forEach(id => {
              const element = document.getElementById(id);
              if (element) observer.observe(element);
            });
          };

          // Wait for DOM to load before observing sections
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', observeMenuSections);
          } else {
            observeMenuSections();
          }

          // Track Video Engagement
          const trackVideoEngagement = () => {
            const videos = document.querySelectorAll('video');
            videos.forEach((video, index) => {
              let hasTrackedPlay = false;
              let hasTracked25 = false;
              let hasTracked50 = false;
              let hasTracked75 = false;
              let hasTrackedComplete = false;

              video.addEventListener('play', () => {
                if (!hasTrackedPlay) {
                  gtag('event', 'video_start', {
                    video_index: index + 1,
                    video_src: video.src || 'background_video',
                  });
                  hasTrackedPlay = true;
                }
              });

              video.addEventListener('timeupdate', () => {
                const percent = (video.currentTime / video.duration) * 100;

                if (percent >= 25 && !hasTracked25) {
                  gtag('event', 'video_progress', { percent: 25, video_index: index + 1 });
                  hasTracked25 = true;
                } else if (percent >= 50 && !hasTracked50) {
                  gtag('event', 'video_progress', { percent: 50, video_index: index + 1 });
                  hasTracked50 = true;
                } else if (percent >= 75 && !hasTracked75) {
                  gtag('event', 'video_progress', { percent: 75, video_index: index + 1 });
                  hasTracked75 = true;
                }
              });

              video.addEventListener('ended', () => {
                if (!hasTrackedComplete) {
                  gtag('event', 'video_complete', { video_index: index + 1 });
                  hasTrackedComplete = true;
                }
              });
            });
          };

          setTimeout(trackVideoEngagement, 2000);

          // Track User Intent - What are they interested in?
          const trackUserIntent = () => {
            // Track clicks on menu items
            document.addEventListener('click', (e) => {
              const target = e.target.closest('[data-menu-item]');
              if (target) {
                gtag('event', 'menu_item_interest', {
                  item_category: target.getAttribute('data-menu-item'),
                  visitor_type: visitorInfo.visitor_type,
                });
              }

              // Track "Get Directions" button clicks
              if (e.target.closest('a[href*="google.com/maps"]') ||
                  e.target.textContent?.includes('Direction') ||
                  e.target.textContent?.includes('ルート') ||
                  e.target.textContent?.includes('길찾기') ||
                  e.target.textContent?.includes('路线')) {
                gtag('event', 'conversion', {
                  conversion_type: 'directions_click',
                  visitor_type: visitorInfo.visitor_type,
                });
              }

              // Track "View Menu" clicks
              if (e.target.textContent?.includes('Menu') ||
                  e.target.textContent?.includes('メニュー') ||
                  e.target.textContent?.includes('메뉴') ||
                  e.target.textContent?.includes('菜单')) {
                gtag('event', 'conversion', {
                  conversion_type: 'menu_view',
                  visitor_type: visitorInfo.visitor_type,
                });
              }
            });
          };

          trackUserIntent();

          // Track Call-to-Action Performance
          const trackCTAClicks = () => {
            document.querySelectorAll('a, button').forEach(element => {
              element.addEventListener('click', () => {
                const text = element.textContent?.trim().toLowerCase();

                // High-value conversions
                if (text?.includes('visit') || text?.includes('come') || text?.includes('訪れる') || text?.includes('방문') || text?.includes('光临')) {
                  gtag('event', 'high_intent_cta', {
                    cta_text: element.textContent?.substring(0, 50),
                    section: element.closest('section')?.id || 'unknown',
                  });
                }
              });
            });
          };

          setTimeout(trackCTAClicks, 1000);

          // Track Customer Journey - Complete Path
          const journeySteps = [];
          const trackJourneyStep = (step) => {
            journeySteps.push({
              step,
              timestamp: Date.now(),
              scrollPosition: window.scrollY,
            });

            // Send journey after 5 steps or on page exit
            if (journeySteps.length >= 5) {
              gtag('event', 'customer_journey', {
                steps: journeySteps.map(s => s.step).join(' > '),
                visitor_type: visitorInfo.visitor_type,
              });
            }
          };

          // Track major interactions
          document.addEventListener('click', (e) => {
            const section = e.target.closest('section')?.id;
            if (section) {
              trackJourneyStep('click_' + section);
            }
          });

          // Track exit intent (when mouse leaves page)
          document.addEventListener('mouseleave', (e) => {
            if (e.clientY < 0) {
              gtag('event', 'exit_intent', {
                time_on_page: Math.round((Date.now() - pageLoadTime) / 1000),
                deepest_scroll: scrollDepth,
                visitor_type: visitorInfo.visitor_type,
                journey_steps: journeySteps.length,
              });
            }
          });

          // Track Mobile App Install Banner (if applicable)
          window.addEventListener('beforeinstallprompt', (e) => {
            gtag('event', 'pwa_installable', {
              device_type: 'mobile',
            });
          });

          // Track Copy Events (phone number, address, etc.)
          document.addEventListener('copy', () => {
            const selection = window.getSelection()?.toString();
            if (selection && selection.length > 3) {
              gtag('event', 'content_copy', {
                content_type: selection.includes('@') ? 'email' :
                             selection.includes('808') ? 'phone' :
                             selection.includes('Kalakaua') ? 'address' : 'other',
                visitor_type: visitorInfo.visitor_type,
              });
            }
          });

          // Enhanced Error Tracking
          window.addEventListener('error', (e) => {
            gtag('event', 'exception', {
              description: e.message,
              fatal: false,
              page: window.location.pathname,
            });
          });

          // Track Page Visibility (when user switches tabs)
          let visibilityStartTime = Date.now();
          document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
              const timeVisible = Math.round((Date.now() - visibilityStartTime) / 1000);
              gtag('event', 'page_visibility', {
                state: 'hidden',
                time_visible: timeVisible,
              });
            } else {
              visibilityStartTime = Date.now();
              gtag('event', 'page_visibility', {
                state: 'visible',
              });
            }
          });
        `}
      </Script>
    </>
  );
}
