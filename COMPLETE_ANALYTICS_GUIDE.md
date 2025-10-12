# Complete Analytics & SEO Setup Guide

## 📊 Current Status

### ✅ Already Installed
1. **Google Analytics 4** - User behavior, demographics
2. **Vercel Analytics** - Traffic overview
3. **Vercel Speed Insights** - Performance monitoring
4. **JSON-LD Structured Data** - Rich snippets in Google
5. **Meta Tags** - Open Graph, Twitter Cards
6. **Sitemap & Robots.txt** - Search engine crawling
7. **Conversion Tracking Library** - Event tracking utilities

### 🔴 Need to Set Up (Action Required)

## 1. Google Search Console ⭐⭐⭐ (HIGHEST PRIORITY)

**Why**: See how you rank in Google Search, find SEO issues, track search traffic

**Setup**:
1. Go to https://search.google.com/search-console/
2. Add property: `konacoffeedonut.com`
3. Get verification meta tag
4. Send it to me to add to your site
5. Submit sitemap: `https://www.konacoffeedonut.com/sitemap.xml`

**What you'll see**:
- Search rankings for "kona coffee waikiki", "mochi donuts honolulu"
- Which pages rank best
- Mobile usability issues
- Structured data errors
- Backlinks to your site

---

## 2. Meta Pixel (Facebook/Instagram) ⭐⭐

**Why**: Track visitors from social media, run ads, retarget customers

**Setup**:
1. Go to https://business.facebook.com/events_manager
2. Create a new pixel
3. Get your Pixel ID (16-digit number)
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_META_PIXEL_ID=1234567890123456
   ```
5. Add to Vercel environment variables

**What you'll track**:
- Page views
- Menu views
- Directions clicks
- Social media clicks

---

## 3. Conversion Tracking (Already Set Up!)

I've created event tracking functions for you. Here's how to use them:

### Track Menu Views
When user opens a menu PDF:
```typescript
import { trackMenuView } from '@/lib/analytics';

// In your menu click handler:
trackMenuView('donuts'); // or 'coffee', 'malasada', etc.
```

### Track Directions Clicks
```typescript
import { trackDirectionsClick } from '@/lib/analytics';

// On "Get Directions" button:
trackDirectionsClick();
```

### Track Language Changes
```typescript
import { trackLanguageSwitch } from '@/lib/analytics';

trackLanguageSwitch('en', 'ja');
```

### More Events Available:
- `trackVideoPlay(videoName)` - Menu video plays
- `trackSocialClick(platform)` - Social media clicks
- `trackContact(method)` - Email/phone clicks
- `trackScrollDepth(percentage)` - How far users scroll

---

## 4. Optional Tools (Lower Priority)

### A. Microsoft Clarity (Free Heatmaps & Recordings) ⭐

**Why**: See how users actually use your site

**What it does**:
- Heatmaps (where users click)
- Session recordings (watch real user sessions)
- Scroll maps
- Rage clicks detection

**Setup**:
1. Go to https://clarity.microsoft.com/
2. Create project
3. Get tracking code
4. I can add it for you (send me the code)

**Perfect for**:
- See which menu items get most attention
- Find confusing UI elements
- Watch tourists navigate your site

### B. Hotjar (Heatmaps + Surveys) ⭐

**Why**: Similar to Clarity + user feedback surveys

**Cost**: Free tier available (35 sessions/day)

**Setup**:
1. Go to https://www.hotjar.com/
2. Create account
3. Get tracking code
4. I can add it

**Use cases**:
- Ask tourists what they want to see
- Survey about menu preferences
- Test new features

### C. Google Tag Manager

**Why**: Manage all tracking codes in one place

**When to use**: If you want to add/remove tracking without code changes

**Complexity**: Medium (might be overkill for now)

---

## 5. SEO Monitoring Tools

### A. Ahrefs/SEMrush (Paid - $99+/month)

**Why**: Professional SEO monitoring

**What they do**:
- Track keyword rankings
- Monitor competitors
- Find backlink opportunities
- Technical SEO audits

**Recommendation**: Wait until you're established, then consider

### B. Google Business Profile (FREE ⭐⭐⭐)

**Why**: CRITICAL for local SEO!

**Setup**:
1. Go to https://www.google.com/business/
2. Claim your business: "Kona Coffee Donut"
3. Add photos, hours, menu
4. Verify ownership

**This makes you show up in**:
- Google Maps
- "Near me" searches
- Local pack (top 3 results)

**HIGHEST ROI** for a physical location!

---

## Data Visualization Options

### Current (Built-in Dashboards):
1. **Google Analytics**: Standard reports
2. **Vercel Analytics**: Simple dashboard
3. **Search Console**: Search performance graphs

### Advanced Options:

#### A. Google Data Studio (FREE)
- Combine all data sources
- Custom dashboards
- Automated reports
- Share with team

#### B. Looker Studio (FREE - Google's version)
- Same as Data Studio
- Better integration with Google products

#### C. Tableau/Power BI (Paid)
- Enterprise-level visualization
- Overkill for small business

---

## Recommended Priority Order

### Week 1 (NOW):
1. ✅ Add GA4 to Vercel (you're doing this)
2. 🔴 Set up Google Search Console
3. 🔴 Create Google Business Profile

### Week 2:
4. Add Meta Pixel (if you plan to use Facebook/Instagram ads)
5. Implement conversion tracking in your code

### Week 3:
6. Set up Microsoft Clarity (free heatmaps)
7. Create Google Data Studio dashboard

### Optional (Later):
- Hotjar for surveys
- Paid SEO tools (when budget allows)
- Google Tag Manager (if managing many pixels)

---

## Current Analytics Stack Summary

| Tool | Status | Purpose |
|------|--------|---------|
| Google Analytics 4 | ✅ Installed | User behavior, demographics |
| Vercel Analytics | ✅ Active | Traffic overview |
| Vercel Speed Insights | ✅ Active | Performance |
| Google Search Console | 🔴 TODO | SEO monitoring |
| Google Business Profile | 🔴 TODO | Local SEO |
| Meta Pixel | ⚠️ Ready (need ID) | Social ads |
| Conversion Tracking | ✅ Code ready | Event tracking |
| Microsoft Clarity | ⚠️ Optional | Heatmaps |
| Hotjar | ⚠️ Optional | User feedback |

---

## What to Track for Your Business

### Key Metrics:
1. **Menu Popularity**:
   - Donuts vs Coffee vs Malasada vs Bingsu
   - Which menu gets most views

2. **Visitor Demographics**:
   - Countries (Japan, Korea, China, US)
   - Languages preferred
   - Mobile vs Desktop (tourists use phones!)

3. **Conversion Points**:
   - "Get Directions" clicks (most important!)
   - Menu PDF opens
   - Language switches

4. **SEO Performance**:
   - Rankings for "kona coffee waikiki"
   - "Mochi donuts honolulu"
   - "Kalakaua ave coffee"

5. **Timing**:
   - Peak traffic hours
   - Tourist season vs off-season
   - Day of week patterns

---

## Questions?

- **Google Search Console**: Send me verification code
- **Meta Pixel**: Send me Pixel ID if you create one
- **Microsoft Clarity**: Send me tracking code if you want it
- **Custom tracking**: Tell me what events to track

I can help implement any of these!
