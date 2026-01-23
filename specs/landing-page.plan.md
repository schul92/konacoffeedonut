# Kona Coffee & Donuts Landing Page Test Plan

## Application Overview

This test plan covers comprehensive testing of the Kona Coffee & Donuts landing page (https://www.imdonut.nyc). The website is a Next.js application with multi-language support (English, Japanese, Korean, Chinese, Spanish), featuring a dynamic hero section with video backgrounds, interactive menu displays, location information, collaboration partner showcases, and responsive design optimized for both desktop and mobile devices. The site includes analytics tracking, hiring banners, Instagram integrations, and various interactive components with smooth animations.

## Test Scenarios

### 1. Page Load and Performance

**Seed:** ``

#### 1.1. Initial Page Load

**File:** `specs/landing-page/page-load/initial-load.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Wait for the page to fully load
  3. Verify the page title contains 'Kona Coffee' or similar branding
  4. Check that the meta description is present and non-empty
  5. Verify favicon is loaded correctly

**Expected Results:**
  - Page loads within 3 seconds
  - Page title is displayed correctly
  - Meta tags are properly set for SEO
  - Favicon appears in browser tab
  - No console errors are present

#### 1.2. Critical Assets Loading

**File:** `specs/landing-page/page-load/assets-loading.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Monitor network requests for critical assets
  3. Verify main logo image (konacoffee.webp) loads
  4. Check that background image loads
  5. Verify hero video files are present
  6. Check that CSS and fonts load properly

**Expected Results:**
  - Main logo image loads successfully with proper dimensions
  - Background images are visible
  - Hero videos are available and playable
  - Page styling is applied correctly
  - Web fonts (Geist, Righteous) are loaded and rendered
  - No 404 errors for critical resources

#### 1.3. Analytics and Tracking Scripts

**File:** `specs/landing-page/page-load/analytics.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Check for Google Analytics script presence
  3. Verify Meta Pixel script is loaded
  4. Check for Ahrefs analytics script
  5. Verify Vercel Analytics and Speed Insights are initialized

**Expected Results:**
  - Google Analytics script is present if GA_MEASUREMENT_ID is set
  - Meta Pixel is initialized if META_PIXEL_ID is configured
  - Ahrefs analytics script loads with correct data-key
  - Vercel Analytics component is rendered
  - No tracking script errors in console

### 2. Navigation and Header

**Seed:** ``

#### 2.1. Desktop Navigation - Initial State

**File:** `specs/landing-page/navigation/desktop-nav-initial.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc on desktop viewport (1920x1080)
  2. Verify navigation bar is visible at the top
  3. Check that the hiring banner is visible above navigation
  4. Verify logo is centered in navigation
  5. Check Menu, Location, About, and Careers links are visible
  6. Verify Instagram icon and Language Switcher are on the right side

**Expected Results:**
  - Navigation is fixed at top with white background and backdrop blur
  - Hiring banner is positioned above navigation (40px height)
  - Logo is clearly visible and centered
  - All navigation links are properly displayed and styled
  - Instagram icon and Language Switcher are visible on right
  - Navigation has proper spacing and alignment

#### 2.2. Desktop Navigation - Scroll Behavior

**File:** `specs/landing-page/navigation/desktop-nav-scroll.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc on desktop viewport
  2. Scroll down 200px or more
  3. Observe the logo transformation
  4. Continue scrolling and note navigation position
  5. Scroll back to top and observe reverse animation

**Expected Results:**
  - Logo smoothly transitions from full logo to '?' symbol as user scrolls
  - At 0px scroll: logo is full size (scale 1)
  - At 200px scroll: logo transforms to '?' symbol (scale 0.5 for logo, scale 1 for '?')
  - Transition is smooth with 200ms duration
  - Navigation remains fixed at top during scroll
  - Reverse scroll shows smooth transition back to logo

#### 2.3. Desktop Navigation - Link Interactions

**File:** `specs/landing-page/navigation/desktop-nav-links.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc on desktop viewport
  2. Hover over 'Menu' link
  3. Hover over 'Location' link
  4. Hover over 'About' link
  5. Click on 'Menu' link
  6. Click on 'Location' link
  7. Click on 'About' link
  8. Verify smooth scroll behavior for each

**Expected Results:**
  - On hover: link scales to 1.05 with orange background appearing
  - Orange underline appears on hover with smooth transition
  - On click: page smoothly scrolls to corresponding section
  - Menu click scrolls to #menu section
  - Location click scrolls to #location section
  - About click scrolls to #about section
  - Analytics event 'navigation_click' is tracked with proper section and device

#### 2.4. Desktop Navigation - Careers Link

**File:** `specs/landing-page/navigation/desktop-careers-link.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc on desktop viewport
  2. Locate the Careers link in navigation
  3. Verify the green pulsing indicator is present
  4. Hover over the Careers link
  5. Click on the Careers link

**Expected Results:**
  - Careers link is visible with text 'Careers'
  - Green pulsing dot indicator is animated (ping effect)
  - On hover: link changes to orange color
  - On click: navigates to /[locale]/careers page
  - Link styling shows it's an active hiring indicator

#### 2.5. Desktop Navigation - Logo Click

**File:** `specs/landing-page/navigation/desktop-logo-click.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc on desktop viewport
  2. Scroll down 500px
  3. Click on the logo/'?' in navigation
  4. Observe scroll behavior

**Expected Results:**
  - Clicking logo/'?' smoothly scrolls page to top
  - Scroll behavior is smooth, not instant
  - Logo transforms back to full size as page reaches top
  - Cursor shows pointer on hover over logo

#### 2.6. Mobile Navigation - Hamburger Menu

**File:** `specs/landing-page/navigation/mobile-hamburger.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc on mobile viewport (375x667)
  2. Verify hamburger icon is visible on left
  3. Verify logo is centered
  4. Verify language switcher is on right
  5. Click hamburger menu icon
  6. Observe dropdown menu appearance

**Expected Results:**
  - Navigation shows mobile layout with 3 elements
  - Hamburger icon (3 lines) is visible on left
  - Logo is centered and properly sized
  - Language switcher is visible on right
  - Clicking hamburger opens dropdown menu with smooth animation
  - Menu items appear: Menu, Location, About, Careers, Instagram links

#### 2.7. Mobile Navigation - Menu Items

**File:** `specs/landing-page/navigation/mobile-menu-items.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc on mobile viewport
  2. Open hamburger menu
  3. Verify all menu items are present
  4. Hover/tap on each menu item
  5. Click on 'Menu' item
  6. Verify menu closes and page scrolls

**Expected Results:**
  - Menu dropdown shows: Menu, Location, About, Careers
  - Instagram section shows 'Follow Us' with @konacoffeedonut and @mochinut_fortlee
  - Each item has hover effect with orange background sliding in
  - Right arrow appears on hover for each item
  - Clicking any navigation item scrolls to section and closes menu
  - Analytics tracks mobile navigation clicks

#### 2.8. Mobile Navigation - Menu Close

**File:** `specs/landing-page/navigation/mobile-menu-close.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc on mobile viewport
  2. Open hamburger menu
  3. Click hamburger icon again (now showing X)
  4. Verify menu closes with animation

**Expected Results:**
  - Hamburger icon changes to X when menu is open
  - Clicking X closes the menu smoothly
  - Menu slides up/fades out with animation
  - Background returns to normal state
  - Hamburger icon returns to 3-line state

#### 2.9. Hiring Banner Visibility

**File:** `specs/landing-page/navigation/hiring-banner.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Verify hiring banner is visible at very top of page
  3. Check banner content and styling
  4. Click the close button on banner
  5. Verify banner disappears and navigation adjusts

**Expected Results:**
  - Hiring banner appears above navigation (40px height)
  - Banner has appropriate hiring message
  - Banner is dismissible with close button
  - After closing, navigation moves up to top: 0
  - Banner state is remembered (localStorage or similar)
  - Hero section padding adjusts when banner is hidden

#### 2.10. Language Switcher Functionality

**File:** `specs/landing-page/navigation/language-switcher.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Locate language switcher in navigation
  3. Click on language switcher
  4. Verify available languages are shown
  5. Select Japanese (ja)
  6. Verify URL changes and content translates

**Expected Results:**
  - Language switcher is visible and clickable
  - Dropdown shows: English (en), Japanese (ja), Korean (ko), Chinese (zh), Spanish (es)
  - Selecting language changes URL to /[locale] format
  - Page content translates to selected language
  - Language preference is maintained on navigation
  - Meta tags update with correct locale information

### 3. Hero Section

**Seed:** ``

#### 3.1. Hero Section - Initial Load

**File:** `specs/landing-page/hero/initial-load.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Verify hero section occupies full viewport height
  3. Check background gradient is visible
  4. Verify background image overlay is present
  5. Check 'COMING SOON' badge is displayed
  6. Verify collaboration logos are visible

**Expected Results:**
  - Hero section is min-h-screen with proper padding
  - Gradient background: sky-100, blue-50 to amber-50
  - Background image at 40% opacity is visible
  - COMING SOON badge has orange gradient with pulsing white dot
  - Honolulu Coffee logo badge is visible
  - Mochiland logo badge is visible
  - × symbol connects the two badges with animation

#### 3.2. Hero Section - Video Background

**File:** `specs/landing-page/hero/video-background.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Wait for hero video to load
  3. Verify video 1 (Waikiki) is playing initially
  4. Wait for video 1 to end
  5. Verify transition to video 2
  6. Check that video 2 loops continuously

**Expected Results:**
  - Video 1 starts playing automatically
  - Video has proper styling and positioning
  - When video 1 ends, smooth transition (300ms fade) occurs
  - Video 2 begins playing after transition
  - Video 2 loops infinitely
  - Video content changes: Video 1 shows 'Waikiki, Hawaii', Video 2 shows 'Paradise Awaits'

#### 3.3. Hero Section - Video Controls

**File:** `specs/landing-page/hero/video-controls.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Locate video play/pause button
  3. Click play/pause button to pause video
  4. Click again to resume
  5. Locate video selector buttons (1 and 2)
  6. Click video 2 button while video 1 is playing
  7. Verify video switches

**Expected Results:**
  - Play/pause button is visible and accessible
  - Clicking pause stops video playback
  - Clicking play resumes video playback
  - Video selector shows current video highlighted
  - Clicking different video number triggers smooth transition
  - Analytics tracks video interactions (play, pause, switch)
  - Transition takes 300ms with fade effect

#### 3.4. Hero Section - COMING SOON Badge

**File:** `specs/landing-page/hero/coming-soon-badge.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Locate COMING SOON badge at top of hero
  3. Observe animation effects
  4. Verify styling and positioning

**Expected Results:**
  - Badge displays 'COMING SOON' text in white
  - Background is orange-to-amber gradient
  - Badge has pulsing white dot indicator
  - Box shadow pulses with orange glow (2s infinite)
  - Badge appears with scale animation (0.9 to 1)
  - Badge is centered horizontally above logos

#### 3.5. Hero Section - Collaboration Logos

**File:** `specs/landing-page/hero/collaboration-logos.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Locate Honolulu Coffee badge
  3. Hover over Honolulu Coffee badge
  4. Locate Mochiland badge
  5. Hover over Mochiland badge
  6. Verify × symbol between badges

**Expected Results:**
  - Honolulu Coffee badge shows logo and 'PROUDLY SERVING HONOLULU COFFEE'
  - Badge has white background with glassmorphism effect
  - On hover: badge scales to 1.05 with orange shadow
  - Logo has rotating glow animation
  - Mochiland badge shows logo and brand text
  - × symbol rotates continuously (360° in 10s)
  - Connecting line pulses with particle effects
  - Both badges are clickable/hoverable

#### 3.6. Hero Section - Logo Reel Popovers

**File:** `specs/landing-page/hero/logo-reel-popovers.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc on desktop
  2. Hover over Honolulu Coffee badge
  3. Wait for popover to appear
  4. Verify Instagram reel preview appears
  5. Click on reel to play
  6. Click Instagram link in popover
  7. Repeat for Mochiland badge

**Expected Results:**
  - Hovering over logo badge triggers popover after brief delay
  - Popover shows Instagram reel preview
  - Reel video autoplays in popover
  - Popover includes Instagram link to full post
  - Clicking Instagram link opens in new tab
  - Mochiland badge shows multiple reels if available
  - Popovers dismiss on mouse leave

#### 3.7. Hero Section - Responsive Layout

**File:** `specs/landing-page/hero/responsive-layout.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc on mobile (375x667)
  2. Verify hero section adapts to mobile
  3. Check logo badge sizes are reduced
  4. Verify text sizes are appropriate
  5. Test on tablet (768x1024)
  6. Test on desktop (1920x1080)

**Expected Results:**
  - Mobile: badges are smaller (w-[190px])
  - Mobile: text is smaller and properly spaced
  - Desktop: badges are larger (w-[350px])
  - All elements remain centered and properly spaced
  - Video background covers full area on all sizes
  - Touch interactions work on mobile devices
  - No horizontal scrolling occurs

### 4. Location Section

**Seed:** ``

#### 4.1. Location Section - Basic Display

**File:** `specs/landing-page/location/basic-display.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Scroll to location section (id='location')
  3. Verify section heading is visible
  4. Check address information is displayed
  5. Verify hours of operation are shown
  6. Check contact information is present

**Expected Results:**
  - Section has gradient background (white to orange-50)
  - Heading appears with proper styling and animation
  - Address: 2142 Kalakaua Ave, Honolulu, HI 96815 is displayed
  - Hours of operation are clearly shown
  - Contact phone/email (if present) is visible and formatted
  - Content is centered and properly spaced

#### 4.2. Location Section - Google Maps Embed

**File:** `specs/landing-page/location/google-maps.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Scroll to location section
  3. Wait for map to load
  4. Verify map displays correct location
  5. Interact with map (zoom, pan)
  6. Verify map is responsive

**Expected Results:**
  - Google Maps iframe loads successfully
  - Map shows correct location: 21.2793, -157.8294 (Waikiki, Honolulu)
  - Map is interactive (zoom in/out works)
  - Map marker/pin is visible at business location
  - Map has proper dimensions: 400px height on mobile, 600px on desktop
  - Map has rounded corners (rounded-2xl)
  - Loading placeholder shows before map loads
  - Map is lazy-loaded (appears when scrolled into view)

#### 4.3. Location Section - Address Link

**File:** `specs/landing-page/location/address-link.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Scroll to location section
  3. Locate the address text/link
  4. Click on the address
  5. Verify it opens in maps application

**Expected Results:**
  - Address is clickable (if implemented as link)
  - Clicking address opens Google Maps or device maps app
  - Link opens in new tab/window
  - Correct coordinates/address is passed to maps
  - Mobile: tapping address triggers maps app

#### 4.4. Location Section - Scroll Animation

**File:** `specs/landing-page/location/scroll-animation.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Scroll down slowly toward location section
  3. Observe animations as section comes into view
  4. Verify all elements animate properly

**Expected Results:**
  - Section content fades in when scrolled into view
  - Animation triggers once (viewport: { once: true })
  - Heading and map appear with smooth transitions
  - Animation duration is appropriate (0.6s)
  - No jank or performance issues during animation

### 5. Menu Section

**Seed:** ``

#### 5.1. Menu Section - Initial Display

**File:** `specs/landing-page/menu/initial-display.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Scroll to menu section (id='menu')
  3. Verify section heading and subtitle
  4. Count the number of menu items displayed
  5. Verify menu grid layout

**Expected Results:**
  - Section has gradient background (orange-50 to white)
  - Heading displays menu title
  - Subtitle provides context
  - 6 menu items are displayed in grid
  - Grid is 2 columns on desktop, 1 column on mobile
  - Menu items: Donuts, Malasada, Coffee, Bingsu, Hot Dog, Acai Bowl

#### 5.2. Menu Section - Menu Card Display

**File:** `specs/landing-page/menu/menu-card-display.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Scroll to menu section
  3. Examine each menu card
  4. Verify images are displayed
  5. Check for partner brand icons
  6. Verify card styling

**Expected Results:**
  - Each card shows menu item image
  - Partner icons visible: Mochiland circle or Honolulu Coffee logo
  - Cards have proper rounded corners and shadows
  - Images are WebP format for performance
  - Cards appear with staggered animation (0.1s delay per item)
  - All images load without errors

#### 5.3. Menu Section - Hover Interactions

**File:** `specs/landing-page/menu/hover-interactions.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc on desktop
  2. Scroll to menu section
  3. Hover over first menu item (Donuts)
  4. Observe video playback
  5. Hover over other menu items
  6. Move mouse away and observe

**Expected Results:**
  - On hover: video overlay appears and plays
  - Video plays smoothly without lag
  - 'View Menu' button appears on hover
  - Card scales slightly on hover
  - On mouse leave: video pauses and hides
  - Hover state is tracked (selectedItem state)

#### 5.4. Menu Section - Video Autoplay

**File:** `specs/landing-page/menu/video-autoplay.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Scroll menu section into view
  3. Observe video behavior as cards enter viewport
  4. Scroll cards out of view
  5. Scroll back to verify behavior

**Expected Results:**
  - Videos autoplay when card is 50% in viewport
  - Videos pause when scrolled out of view
  - IntersectionObserver threshold is 0.5
  - Multiple videos don't conflict
  - Video state is properly managed
  - No performance issues with multiple videos

#### 5.5. Menu Section - View Menu Button

**File:** `specs/landing-page/menu/view-menu-button.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Scroll to menu section
  3. Hover over a menu item to reveal button
  4. Click 'View Menu' button
  5. Verify modal opens with menu details

**Expected Results:**
  - Button appears on hover with smooth animation
  - Button is styled with orange background
  - Clicking button opens menu modal
  - Modal displays full menu image (JPEG format)
  - Modal includes close button
  - Analytics tracks 'view_menu' event with category

#### 5.6. Menu Section - Menu Modal

**File:** `specs/landing-page/menu/menu-modal.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Open any menu item modal
  3. Verify modal content displays
  4. Try to scroll background (should be locked)
  5. Click close button or outside modal
  6. Verify modal closes properly

**Expected Results:**
  - Modal opens with animation
  - Menu image is large and readable
  - Modal title shows menu category
  - Background scroll is prevented when modal open
  - Close button (X) is visible and functional
  - Clicking outside modal closes it
  - Modal closes with exit animation
  - Background scroll is restored after close

#### 5.7. Menu Section - Mobile Experience

**File:** `specs/landing-page/menu/mobile-experience.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc on mobile (375x667)
  2. Scroll to menu section
  3. Verify single column layout
  4. Tap on a menu item
  5. Verify mobile interactions work properly

**Expected Results:**
  - Grid switches to single column on mobile
  - Cards are properly sized for mobile
  - Tap interactions work (no hover state)
  - Videos may not autoplay on mobile (browser policy)
  - Menu modal is responsive and fits screen
  - Touch scrolling works in modal
  - Pinch-to-zoom works on menu images

#### 5.8. Menu Section - Lazy Loading

**File:** `specs/landing-page/menu/lazy-loading.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Monitor network requests
  3. Note when MenuSection component loads
  4. Scroll to menu section
  5. Verify component is dynamically loaded

**Expected Results:**
  - MenuSection is lazy-loaded (dynamic import)
  - Loading placeholder shows before component loads
  - Videos are not loaded until section is near viewport
  - Component loads when user scrolls toward it
  - No SSR for menu section (ssr: false)
  - Performance is optimized with lazy loading

### 6. About Section

**Seed:** ``

#### 6.1. About Section - Content Display

**File:** `specs/landing-page/about/content-display.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Scroll to about section (id='about')
  3. Verify heading is displayed
  4. Read the collaboration story content
  5. Verify partner information is present

**Expected Results:**
  - Section has gradient background (white via orange-50 to white)
  - Heading describes the collaboration story
  - Content explains partnership between Honolulu Coffee and Mochiland
  - Text is well-formatted and readable
  - Section uses proper typography and spacing
  - Content fades in on scroll with animation

#### 6.2. About Section - Visit Button

**File:** `specs/landing-page/about/visit-button.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Scroll to about section
  3. Locate the visit/location button
  4. Hover over the button
  5. Click the button

**Expected Results:**
  - Button is visible with clear call-to-action text
  - Button has white background with orange text
  - On hover: button scales and shows orange shadow
  - Clicking button scrolls to location section or external link
  - Button animation is smooth (whileTap: scale 0.95)
  - Button text is translated based on locale

#### 6.3. About Section - Scroll Animations

**File:** `specs/landing-page/about/scroll-animations.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Scroll slowly toward about section
  3. Observe content animations
  4. Verify timing and sequencing

**Expected Results:**
  - Content animates in when section enters viewport
  - Animation is smooth with proper easing
  - Elements may have staggered entrance
  - Animation plays once (viewport: { once: true })
  - No performance issues during animation

### 7. Footer

**Seed:** ``

#### 7.1. Footer - Basic Layout

**File:** `specs/landing-page/footer/basic-layout.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Scroll to bottom of page
  3. Verify footer is displayed
  4. Check footer background and styling
  5. Verify all footer sections are present

**Expected Results:**
  - Footer has black background with white text
  - Footer contains: Logo, tagline, social links, navigation, partners, copyright
  - Layout is responsive (flexbox: column on mobile, row on desktop)
  - Proper padding: py-12 on mobile, py-16 on desktop
  - All sections are properly spaced

#### 7.2. Footer - Logo and Tagline

**File:** `specs/landing-page/footer/logo-tagline.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Scroll to footer
  3. Locate footer logo
  4. Verify tagline text
  5. Check logo styling

**Expected Results:**
  - Logo is displayed in white (inverted colors)
  - Logo dimensions: 300px width on desktop, 200px on mobile
  - Tagline appears below logo with reduced opacity
  - Logo is lazy-loaded for performance
  - Text is properly translated

#### 7.3. Footer - Social Media Links

**File:** `specs/landing-page/footer/social-links.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Scroll to footer
  3. Locate 'Follow us' section
  4. Verify Instagram links are present
  5. Click on each Instagram link

**Expected Results:**
  - Section header shows 'Follow us'
  - Instagram links displayed: @konacoffeedonut, @mochinut_fortlee, @bonepi_mochiland
  - Each link has Instagram icon
  - Links have hover effect (background changes to white/10)
  - Clicking link opens Instagram in new tab
  - Links have proper rel='noopener noreferrer' for security

#### 7.4. Footer - Navigation Links

**File:** `specs/landing-page/footer/navigation-links.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Scroll to footer
  3. Locate navigation links section
  4. Verify all links are present
  5. Click on each link

**Expected Results:**
  - Navigation links: Menu, About, Location are displayed
  - Links have reduced opacity initially
  - On hover: opacity increases to 100%
  - Clicking links scrolls to corresponding section
  - Smooth scroll behavior is applied
  - Links work correctly on all device sizes

#### 7.5. Footer - Collaboration Partners

**File:** `specs/landing-page/footer/collaboration-partners.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Scroll to footer collaboration section
  3. Verify partner logos are displayed
  4. Hover over partner logos
  5. Click on logos if they have reel popovers

**Expected Results:**
  - Section shows collaboration message
  - Honolulu Coffee logo is displayed (64px on desktop, 48px mobile)
  - Mochiland logo is displayed
  - Logos have LogoReelsPopover interaction
  - On hover: opacity increases to 100%
  - Logos are clickable and show Instagram reels
  - Logos are properly spaced with gap-8 on mobile, gap-12 on desktop

#### 7.6. Footer - Copyright

**File:** `specs/landing-page/footer/copyright.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Scroll to very bottom of footer
  3. Verify copyright text is displayed
  4. Check styling and positioning

**Expected Results:**
  - Copyright text is centered
  - Text has reduced opacity (40%)
  - Text size is small (text-sm)
  - Copyright information is current and accurate
  - Section has top border (border-white/10)
  - Proper padding above copyright (pt-8)

### 8. Interactive Components

**Seed:** ``

#### 8.1. Hiring Modal - Trigger and Display

**File:** `specs/landing-page/interactive/hiring-modal.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Wait for page load
  3. Check if hiring modal auto-appears
  4. If not, click on hiring banner or Careers link
  5. Verify modal displays correctly

**Expected Results:**
  - Modal may auto-appear based on user session
  - Modal has proper styling and backdrop
  - Modal content describes job opportunities
  - Modal is centered on screen
  - Background is dimmed/blurred when modal open
  - Modal has close button

#### 8.2. Hiring Modal - Close Functionality

**File:** `specs/landing-page/interactive/hiring-modal-close.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Open hiring modal (if not auto-opened)
  3. Click close button (X)
  4. Reopen modal
  5. Click outside modal area
  6. Press Escape key

**Expected Results:**
  - Clicking X closes modal smoothly
  - Clicking outside modal closes it
  - Pressing Escape key closes modal
  - Modal dismissal is tracked (may set cookie/localStorage)
  - Background scroll is restored after close
  - Exit animation is smooth

#### 8.3. Instagram Reels Component - Desktop

**File:** `specs/landing-page/interactive/instagram-reels-desktop.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc on desktop
  2. Locate Instagram icon in navigation (right side)
  3. Click on Instagram reels icon
  4. Verify dropdown/modal appears
  5. View available reels

**Expected Results:**
  - Instagram icon is visible in desktop navigation
  - Clicking icon opens reels viewer/dropdown
  - Recent Instagram reels are displayed
  - Reels are playable or link to Instagram
  - Component is properly styled
  - Clicking outside closes the component

#### 8.4. Language Switcher - All Languages

**File:** `specs/landing-page/interactive/language-switcher-all.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Open language switcher
  3. Select English and verify
  4. Select Japanese and verify
  5. Select Korean and verify
  6. Select Chinese and verify
  7. Select Spanish and verify

**Expected Results:**
  - All 5 languages are available: en, ja, ko, zh, es
  - Each language changes URL to /[locale]
  - Content translates correctly for each language
  - Meta tags update with correct locale
  - Alternate links in head are correct
  - Language selection persists across navigation
  - No broken translations or missing keys

#### 8.5. Smooth Scroll Behavior

**File:** `specs/landing-page/interactive/smooth-scroll.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Click navigation Menu link
  3. Observe scroll behavior
  4. Click Location link
  5. Click About link
  6. Verify all scrolls are smooth

**Expected Results:**
  - All anchor scrolling uses smooth behavior
  - Scroll duration is appropriate
  - No janky or instant jumps
  - Scroll ends at correct section position
  - Works consistently across all browsers
  - Mobile scroll is also smooth

### 9. Responsive Design

**Seed:** ``

#### 9.1. Mobile Portrait - 375x667 (iPhone SE)

**File:** `specs/landing-page/responsive/mobile-portrait-small.spec.ts`

**Steps:**
  1. Set viewport to 375x667
  2. Navigate to https://www.imdonut.nyc
  3. Verify all sections display correctly
  4. Test navigation menu
  5. Scroll through entire page
  6. Test interactive elements

**Expected Results:**
  - No horizontal scrolling occurs
  - Mobile navigation displays correctly
  - Hero section is full viewport height
  - Collaboration badges are sized appropriately (w-[190px])
  - Menu items are single column
  - Footer stacks vertically
  - All text is readable
  - Touch targets are adequately sized (min 44x44px)
  - Images scale properly

#### 9.2. Mobile Portrait - 414x896 (iPhone 11 Pro)

**File:** `specs/landing-page/responsive/mobile-portrait-large.spec.ts`

**Steps:**
  1. Set viewport to 414x896
  2. Navigate to https://www.imdonut.nyc
  3. Verify layout adapts properly
  4. Test all interactive components
  5. Verify spacing and typography

**Expected Results:**
  - Layout is optimized for larger mobile screens
  - Typography scales appropriately
  - Images maintain aspect ratios
  - Navigation is accessible
  - All features work as on smaller mobile
  - No layout breaking occurs

#### 9.3. Tablet Portrait - 768x1024 (iPad)

**File:** `specs/landing-page/responsive/tablet-portrait.spec.ts`

**Steps:**
  1. Set viewport to 768x1024
  2. Navigate to https://www.imdonut.nyc
  3. Verify layout transitions to tablet view
  4. Check if desktop or mobile navigation shows
  5. Test menu grid layout

**Expected Results:**
  - Desktop navigation appears at 768px breakpoint (md:)
  - Menu grid shows 2 columns
  - Collaboration badges are larger
  - Hero section scales properly
  - Footer shows desktop layout
  - All interactions work with touch
  - Text sizes use md: breakpoint values

#### 9.4. Tablet Landscape - 1024x768 (iPad Landscape)

**File:** `specs/landing-page/responsive/tablet-landscape.spec.ts`

**Steps:**
  1. Set viewport to 1024x768
  2. Navigate to https://www.imdonut.nyc
  3. Verify desktop experience is provided
  4. Test navigation hover states
  5. Verify all sections display optimally

**Expected Results:**
  - Full desktop navigation is shown
  - Hero content fits well in landscape
  - Menu grid is 2 columns
  - Map displays at 600px height
  - Footer uses desktop row layout
  - Hover effects work properly

#### 9.5. Desktop - 1920x1080 (Full HD)

**File:** `specs/landing-page/responsive/desktop-fullhd.spec.ts`

**Steps:**
  1. Set viewport to 1920x1080
  2. Navigate to https://www.imdonut.nyc
  3. Verify optimal desktop experience
  4. Check max-width containers
  5. Verify all animations and effects

**Expected Results:**
  - Content uses max-width containers (1400px)
  - Proper horizontal centering
  - All desktop features enabled
  - Hero video displays clearly
  - Navigation logo transformation works
  - Large collaboration badges (w-[350px])
  - Typography uses lg: breakpoint sizes
  - No wasted whitespace

#### 9.6. Ultra-wide - 2560x1440 (2K)

**File:** `specs/landing-page/responsive/desktop-2k.spec.ts`

**Steps:**
  1. Set viewport to 2560x1440
  2. Navigate to https://www.imdonut.nyc
  3. Verify content doesn't stretch excessively
  4. Check that max-width constraints work
  5. Test all functionality

**Expected Results:**
  - Content respects max-width of 1400px
  - Horizontal margins increase appropriately
  - Background gradients and images scale well
  - No layout breaking
  - All features work as on 1920px
  - Typography remains readable

#### 9.7. Orientation Change

**File:** `specs/landing-page/responsive/orientation-change.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc on mobile portrait
  2. Rotate device to landscape
  3. Verify layout adapts
  4. Rotate back to portrait
  5. Verify proper adaptation

**Expected Results:**
  - Layout immediately responds to orientation change
  - No content is cut off
  - Navigation adapts if needed
  - Hero section maintains proper height
  - Videos adjust properly
  - No layout shifting or breaking

### 10. SEO and Meta Tags

**Seed:** ``

#### 10.1. Basic Meta Tags

**File:** `specs/landing-page/seo/basic-meta-tags.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. View page source or inspect head
  3. Verify title tag
  4. Check meta description
  5. Verify keywords meta tag
  6. Check canonical link

**Expected Results:**
  - Title tag is present and descriptive
  - Meta description is compelling and within 155-160 characters
  - Keywords include: kona coffee, mochi donuts, waikiki, etc.
  - Canonical URL points to correct page
  - Meta tags are properly formatted
  - No duplicate meta tags

#### 10.2. Open Graph Tags

**File:** `specs/landing-page/seo/open-graph-tags.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Inspect Open Graph meta tags
  3. Verify og:title, og:description, og:image
  4. Check og:type and og:url
  5. Verify locale information

**Expected Results:**
  - og:title matches page title
  - og:description is present and compelling
  - og:image points to /og-image.jpg (1200x630)
  - og:type is 'website'
  - og:url is correct for current locale
  - og:locale matches selected language (en_US, ja_JP, etc.)
  - og:site_name is 'Kona Coffee Donut'

#### 10.3. Twitter Card Tags

**File:** `specs/landing-page/seo/twitter-card-tags.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Inspect Twitter Card meta tags
  3. Verify twitter:card, twitter:title, twitter:description
  4. Check twitter:image
  5. Verify twitter:creator

**Expected Results:**
  - twitter:card is 'summary_large_image'
  - twitter:title is present
  - twitter:description is present
  - twitter:image points to /og-image.jpg
  - twitter:creator is '@konacoffeedonut'
  - All required Twitter Card tags are present

#### 10.4. Structured Data (JSON-LD)

**File:** `specs/landing-page/seo/structured-data.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Find script tag with type='application/ld+json'
  3. Verify LocalBusiness schema
  4. Check Restaurant schema if present
  5. Validate JSON-LD syntax

**Expected Results:**
  - Structured data script is present in head
  - Schema type includes LocalBusiness or Restaurant
  - Business name: Kona Coffee Donut
  - Address: 2142 Kalakaua Ave, Honolulu, HI 96815
  - Geo coordinates: latitude 21.2793, longitude -157.8294
  - JSON-LD is valid and parseable
  - Schema includes hours, contact info if available

#### 10.5. Multi-language Alternate Links

**File:** `specs/landing-page/seo/alternate-links.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Inspect link tags with rel='alternate'
  3. Verify all 5 language alternates are present
  4. Check x-default link

**Expected Results:**
  - Alternate links for: en-US, ja-JP, ko-KR, zh-CN, es-ES
  - Each link has correct hreflang attribute
  - URLs follow pattern: https://www.konacoffeedonut.com/[locale]
  - x-default points to /en
  - Current page has proper hreflang=x pointing to itself
  - All alternate URLs are absolute, not relative

#### 10.6. Robots and Indexing

**File:** `specs/landing-page/seo/robots-indexing.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Check robots meta tag
  3. Verify Google-specific directives
  4. Check for robots.txt reference

**Expected Results:**
  - Robots meta allows indexing: index, follow
  - Google bot directives: max-video-preview: -1, max-image-preview: large, max-snippet: -1
  - No 'noindex' or 'nofollow' present
  - robots.txt file exists and allows crawling
  - Sitemap reference in robots.txt or meta

#### 10.7. Site Verification Tags

**File:** `specs/landing-page/seo/site-verification.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Check for google-site-verification meta tag
  3. Look for other verification tags (Bing, Yandex)

**Expected Results:**
  - Google Search Console verification tag is present
  - Verification content: B_3ls-YIFDHA5XYRx9mkf_QuiFx53A2XlqSdegSRwjY
  - Tag is in head section
  - Other verifications (Bing, Yandex) may be present if configured

#### 10.8. Semantic HTML Structure

**File:** `specs/landing-page/seo/semantic-html.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Inspect HTML structure
  3. Verify proper use of semantic elements
  4. Check heading hierarchy

**Expected Results:**
  - H1 tag is present and descriptive (even if visually hidden)
  - H2 tags used for main sections: Menu, Location, About
  - Proper heading hierarchy (no skipped levels)
  - Semantic HTML5 elements: header, nav, main, section, footer
  - Landmarks are properly defined
  - Alt text present on all images

### 11. Performance and Optimization

**Seed:** ``

#### 11.1. Image Optimization

**File:** `specs/landing-page/performance/image-optimization.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Monitor image loading
  3. Check image formats
  4. Verify lazy loading
  5. Check image dimensions

**Expected Results:**
  - Main images use WebP format
  - Images have proper width/height attributes
  - Lazy loading is applied to below-fold images
  - Critical images use priority/fetchPriority='high'
  - Next.js Image component is used throughout
  - Images are properly sized for viewport
  - No oversized images loading

#### 11.2. Video Optimization

**File:** `specs/landing-page/performance/video-optimization.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Monitor video loading
  3. Check video formats (MP4)
  4. Verify video compression
  5. Check autoplay behavior

**Expected Results:**
  - Videos use MP4 format
  - Videos are compressed for web
  - Hero videos load efficiently
  - Menu videos don't load until needed
  - Preload hints may be used for hero video
  - Videos don't block page render
  - Mobile may have different video loading strategy

#### 11.3. Code Splitting and Lazy Loading

**File:** `specs/landing-page/performance/code-splitting.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Monitor JavaScript chunks loading
  3. Verify dynamic imports
  4. Check component lazy loading

**Expected Results:**
  - MenuSection is dynamically imported
  - MapEmbed is dynamically imported
  - Heavy components load on demand
  - Initial JavaScript bundle is optimized
  - Loading placeholders shown for lazy components
  - No unnecessary JavaScript loaded upfront

#### 11.4. Font Loading

**File:** `specs/landing-page/performance/font-loading.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Monitor font loading
  3. Check for FOUT/FOIT
  4. Verify font-display strategy

**Expected Results:**
  - Fonts use font-display: swap
  - Google Fonts: Geist, Geist Mono, Righteous
  - No invisible text during font load
  - Fonts load asynchronously
  - CSS variable approach for fonts
  - Preconnect to fonts.googleapis.com

#### 11.5. Third-party Scripts

**File:** `specs/landing-page/performance/third-party-scripts.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Monitor all third-party script loads
  3. Check loading strategies
  4. Verify async/defer attributes

**Expected Results:**
  - Google Analytics loads asynchronously
  - Meta Pixel loads without blocking
  - Ahrefs analytics has async attribute
  - Vercel Analytics is optimized
  - Third-party scripts don't block initial render
  - Scripts have proper error handling

#### 11.6. Core Web Vitals - LCP

**File:** `specs/landing-page/performance/cwv-lcp.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Measure Largest Contentful Paint
  3. Identify LCP element
  4. Verify optimization

**Expected Results:**
  - LCP occurs within 2.5 seconds
  - LCP element is likely hero image or video
  - Hero image (konacoffee.webp) has priority loading
  - fetchPriority='high' on critical images
  - Preload link for hero image in head
  - No layout shifts affect LCP

#### 11.7. Core Web Vitals - CLS

**File:** `specs/landing-page/performance/cwv-cls.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Measure Cumulative Layout Shift
  3. Scroll through entire page
  4. Interact with dynamic elements

**Expected Results:**
  - CLS score is below 0.1
  - Images have explicit dimensions
  - No content shifts during load
  - Font loading doesn't cause shifts
  - Dynamic components have reserved space
  - Animations don't cause layout shifts

#### 11.8. Core Web Vitals - FID/INP

**File:** `specs/landing-page/performance/cwv-fid-inp.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Interact with navigation
  3. Click buttons and links
  4. Measure interaction latency

**Expected Results:**
  - First Input Delay is under 100ms
  - Interaction to Next Paint is under 200ms
  - Button clicks respond immediately
  - Navigation interactions are smooth
  - No long JavaScript tasks block interactions
  - Event handlers are optimized

#### 11.9. Caching Strategy

**File:** `specs/landing-page/performance/caching-strategy.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Check response headers
  3. Verify cache-control headers
  4. Test with DevTools Network panel

**Expected Results:**
  - Static assets have long cache times
  - Images have appropriate cache headers
  - HTML has reasonable cache or no-cache
  - CDN caching is utilized (Vercel)
  - Immutable assets use immutable cache-control
  - Second visit loads faster due to caching

### 12. Accessibility

**Seed:** ``

#### 12.1. Keyboard Navigation

**File:** `specs/landing-page/accessibility/keyboard-navigation.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Use Tab key to navigate through page
  3. Verify focus indicators are visible
  4. Tab through navigation menu
  5. Tab through footer links
  6. Use Enter to activate buttons

**Expected Results:**
  - All interactive elements are keyboard accessible
  - Focus indicators are clearly visible
  - Tab order is logical and intuitive
  - Navigation links can be activated with Enter
  - Menu items can be accessed via keyboard
  - Skip links may be present for navigation
  - No keyboard traps exist

#### 12.2. Screen Reader Compatibility

**File:** `specs/landing-page/accessibility/screen-reader.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc with screen reader
  2. Verify page structure is announced
  3. Check heading hierarchy
  4. Verify image alt text
  5. Check link descriptions

**Expected Results:**
  - H1 is present and descriptive (even if visually hidden)
  - All images have meaningful alt text
  - Links have descriptive text or aria-labels
  - Buttons have proper aria-labels
  - Landmarks are properly labeled
  - Navigation structure is clear
  - No unlabeled interactive elements

#### 12.3. ARIA Attributes

**File:** `specs/landing-page/accessibility/aria-attributes.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Inspect interactive components
  3. Check for proper ARIA attributes
  4. Verify aria-label usage
  5. Check dynamic content updates

**Expected Results:**
  - Hamburger menu has aria-label='Toggle menu'
  - Logo scroll button has aria-label='Scroll to top'
  - Modal dialogs have proper ARIA roles
  - aria-expanded used for expandable menus
  - aria-hidden used appropriately
  - Live regions for dynamic updates if needed
  - No ARIA misuse or conflicts

#### 12.4. Color Contrast

**File:** `specs/landing-page/accessibility/color-contrast.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Use contrast checker tool
  3. Verify text contrast ratios
  4. Check button contrast
  5. Verify link visibility

**Expected Results:**
  - Normal text has 4.5:1 contrast ratio minimum
  - Large text has 3:1 contrast ratio minimum
  - Buttons have sufficient contrast
  - Links are distinguishable from regular text
  - Focus indicators have 3:1 contrast
  - No contrast issues reported by automated tools

#### 12.5. Form Accessibility

**File:** `specs/landing-page/accessibility/form-accessibility.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Locate any forms on page
  3. Check label associations
  4. Verify error messaging
  5. Test keyboard interaction

**Expected Results:**
  - All form inputs have associated labels
  - Labels use for attribute or wrap inputs
  - Error messages are programmatically associated
  - Required fields are indicated
  - Forms are keyboard navigable
  - Autocomplete attributes where appropriate

#### 12.6. Video Accessibility

**File:** `specs/landing-page/accessibility/video-accessibility.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Check hero videos
  3. Verify controls availability
  4. Check for captions/transcripts
  5. Test pause functionality

**Expected Results:**
  - Videos can be paused by user
  - Play/pause controls are accessible
  - No automatic audio playback (videos are muted)
  - Videos don't trigger seizures (no rapid flashing)
  - Alternative text or description provided
  - Users can control video playback

#### 12.7. Mobile Accessibility

**File:** `specs/landing-page/accessibility/mobile-accessibility.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc on mobile
  2. Verify touch target sizes
  3. Test with screen reader on mobile
  4. Check zoom functionality
  5. Verify orientation support

**Expected Results:**
  - Touch targets are minimum 44x44px
  - Adequate spacing between clickable elements
  - Mobile screen readers work properly
  - Page can be zoomed to 200% without breaking
  - Content is accessible in both portrait and landscape
  - No viewport zoom disabled
  - Text remains readable when zoomed

### 13. Cross-browser Compatibility

**Seed:** ``

#### 13.1. Chrome/Chromium

**File:** `specs/landing-page/browsers/chrome.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc in Chrome
  2. Test all functionality
  3. Verify animations and transitions
  4. Check video playback
  5. Test responsive behavior

**Expected Results:**
  - All features work as expected
  - Animations are smooth
  - Videos autoplay and loop correctly
  - No console errors
  - Layout is perfect
  - WebP images display correctly

#### 13.2. Firefox

**File:** `specs/landing-page/browsers/firefox.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc in Firefox
  2. Test all interactive elements
  3. Verify CSS animations
  4. Check video compatibility
  5. Test framer-motion animations

**Expected Results:**
  - All features work correctly
  - CSS backdrop-filter works or has fallback
  - Videos play without issues
  - Smooth scroll behavior works
  - Framer Motion animations render properly
  - No Firefox-specific bugs

#### 13.3. Safari

**File:** `specs/landing-page/browsers/safari.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc in Safari
  2. Test video autoplay (may be restricted)
  3. Verify WebP support or fallback
  4. Check animations
  5. Test touch interactions on iOS

**Expected Results:**
  - Videos work (may need user interaction)
  - WebP images display or fallback to JPEG
  - Backdrop blur works (newer Safari versions)
  - Smooth animations render correctly
  - iOS touch events work properly
  - No Safari-specific layout issues
  - Date/time inputs work if present

#### 13.4. Edge

**File:** `specs/landing-page/browsers/edge.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc in Edge
  2. Verify all functionality
  3. Check for Edge-specific issues
  4. Test performance

**Expected Results:**
  - All features work identically to Chrome
  - No Edge-specific bugs
  - Performance is good
  - Layout is correct
  - Videos and animations work

#### 13.5. Mobile Safari (iOS)

**File:** `specs/landing-page/browsers/mobile-safari.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc on iPhone/iPad
  2. Test touch interactions
  3. Check video playback restrictions
  4. Verify safe area handling
  5. Test landscape orientation

**Expected Results:**
  - Touch interactions work smoothly
  - Videos may require user interaction to play
  - Safe areas are respected (notch, home indicator)
  - viewport-fit=cover is handled correctly
  - Orientation changes work smoothly
  - No iOS-specific bugs
  - Pinch-to-zoom works unless intentionally disabled

#### 13.6. Android Chrome

**File:** `specs/landing-page/browsers/android-chrome.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc on Android device
  2. Test touch gestures
  3. Check video autoplay
  4. Verify performance
  5. Test back button behavior

**Expected Results:**
  - Touch interactions are responsive
  - Videos autoplay if allowed by policy
  - Performance is acceptable
  - Back button navigates correctly
  - Address bar hide/show doesn't break layout
  - No Android-specific issues

### 14. Error Handling and Edge Cases

**Seed:** ``

#### 14.1. Slow Network Connection

**File:** `specs/landing-page/edge-cases/slow-network.spec.ts`

**Steps:**
  1. Throttle network to Slow 3G
  2. Navigate to https://www.imdonut.nyc
  3. Observe loading behavior
  4. Verify placeholders and loading states
  5. Check if page remains usable

**Expected Results:**
  - Loading placeholders appear for lazy-loaded components
  - Critical content loads first
  - Page doesn't appear broken while loading
  - Images show alt text before loading
  - Skeleton loaders or spinners indicate loading
  - Page is still navigable during load
  - No timeout errors

#### 14.2. JavaScript Disabled

**File:** `specs/landing-page/edge-cases/no-javascript.spec.ts`

**Steps:**
  1. Disable JavaScript in browser
  2. Navigate to https://www.imdonut.nyc
  3. Verify basic content is visible
  4. Check if critical information accessible

**Expected Results:**
  - Basic page content is visible (Next.js SSR)
  - Images still display
  - Text content is readable
  - Some interactive features won't work (expected)
  - Noscript tags may provide fallback content
  - SEO content is still crawlable

#### 14.3. Ad Blockers Active

**File:** `specs/landing-page/edge-cases/ad-blockers.spec.ts`

**Steps:**
  1. Enable ad blocker extension
  2. Navigate to https://www.imdonut.nyc
  3. Check if analytics are blocked
  4. Verify page still functions
  5. Check for broken layout

**Expected Results:**
  - Page loads and functions normally
  - Analytics may be blocked (expected)
  - No broken elements due to blocked scripts
  - Layout remains intact
  - Core functionality unaffected
  - No console errors from blocked scripts

#### 14.4. Missing Images

**File:** `specs/landing-page/edge-cases/missing-images.spec.ts`

**Steps:**
  1. Block image loading or simulate 404 for images
  2. Navigate to https://www.imdonut.nyc
  3. Verify alt text displays
  4. Check layout doesn't break
  5. Verify placeholder handling

**Expected Results:**
  - Alt text is displayed for missing images
  - Layout doesn't break without images
  - Explicit image dimensions prevent layout shift
  - Next.js Image component handles errors gracefully
  - Page remains usable without images

#### 14.5. Invalid Locale in URL

**File:** `specs/landing-page/edge-cases/invalid-locale.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc/fr (unsupported locale)
  2. Observe redirect or 404 behavior
  3. Try other invalid locales
  4. Verify error handling

**Expected Results:**
  - Invalid locale triggers 404 or redirects to default (en)
  - User sees helpful error message or auto-redirect
  - No broken state occurs
  - Supported locales: en, ja, ko, zh, es only
  - Proper HTTP status code (404 or 302/307)

#### 14.6. Video Load Failure

**File:** `specs/landing-page/edge-cases/video-load-failure.spec.ts`

**Steps:**
  1. Block video file loading or simulate 404
  2. Navigate to https://www.imdonut.nyc
  3. Observe hero section behavior
  4. Check menu section videos
  5. Verify fallback behavior

**Expected Results:**
  - Hero section remains usable without video
  - Background gradient is still visible
  - No infinite loading state
  - Error is handled gracefully
  - Fallback image may be shown
  - Page doesn't break or hang

#### 14.7. Map Load Failure

**File:** `specs/landing-page/edge-cases/map-load-failure.spec.ts`

**Steps:**
  1. Block Google Maps API
  2. Navigate to https://www.imdonut.nyc
  3. Scroll to location section
  4. Verify fallback behavior

**Expected Results:**
  - Map loading placeholder or error message appears
  - Address information is still visible
  - Section doesn't break
  - Link to Google Maps as fallback (if implemented)
  - Page remains functional

#### 14.8. Rapid Navigation Clicks

**File:** `specs/landing-page/edge-cases/rapid-clicks.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Rapidly click navigation links multiple times
  3. Click menu items repeatedly
  4. Click language switcher rapidly
  5. Verify no errors occur

**Expected Results:**
  - No console errors from rapid clicks
  - Animations don't break or stack
  - Event handlers are debounced if needed
  - State remains consistent
  - No memory leaks
  - Page remains responsive

#### 14.9. Browser Back/Forward

**File:** `specs/landing-page/edge-cases/browser-navigation.spec.ts`

**Steps:**
  1. Navigate to https://www.imdonut.nyc
  2. Change language via switcher
  3. Click browser back button
  4. Click forward button
  5. Verify state consistency

**Expected Results:**
  - Back button returns to previous locale
  - Forward button goes to next locale
  - Page state is preserved or properly restored
  - Scroll position may be restored
  - No duplicate loading or errors
  - URL matches page state
