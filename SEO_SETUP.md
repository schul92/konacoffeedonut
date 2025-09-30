# SEO Setup Guide for Kona Coffee Donut

## Overview
This document outlines all SEO configurations and next steps for registering with Google and other search engines.

## ✅ Completed Setup

### 1. **Metadata Configuration**
- ✅ Complete meta tags in `src/app/layout.tsx`
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card metadata
- ✅ Canonical URLs
- ✅ robots directives

### 2. **Sitemap Generation**
- ✅ Dynamic sitemap at `/sitemap.xml` (`src/app/sitemap.ts`)
- ✅ Includes all main pages with proper priorities
- ✅ Updates with lastModified dates
- ✅ Configured for additional pages (menu, about, contact)

### 3. **Robots.txt**
- ✅ Generated at `/robots.txt` (`src/app/robots.ts`)
- ✅ Allows crawling of all public pages
- ✅ Blocks API routes from indexing
- ✅ Includes sitemap reference

### 4. **Performance Optimization**
- ✅ Vercel Analytics integration
- ✅ Vercel Speed Insights
- ✅ Image optimization (AVIF/WebP)
- ✅ Font optimization with display: 'swap'
- ✅ Compression enabled
- ✅ Package imports optimization

### 5. **PWA Support**
- ✅ Web manifest (`/public/manifest.json`)
- ✅ Theme colors configured
- ✅ Mobile-optimized

## 🔧 Next Steps: Google Search Console Setup

### Step 1: Domain Verification
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property for `https://www.konacoffeedonut.com`
3. Choose verification method:
   - **HTML file upload** (recommended for Vercel)
   - **HTML tag** (already prepared in layout.tsx)
   - **DNS verification** (most reliable)

### Step 2: Update Verification Code
In `src/app/layout.tsx`, replace this line:
```typescript
google: 'your-google-verification-code',
```
With your actual verification code from Google Search Console.

### Step 3: Submit Sitemap
1. After verification, go to "Sitemaps" in Google Search Console
2. Submit: `https://www.konacoffeedonut.com/sitemap.xml`
3. Google will automatically discover and index pages

### Step 4: Request Indexing
1. Use "URL Inspection" tool
2. Enter: `https://www.konacoffeedonut.com`
3. Click "Request Indexing"

## 🎯 Additional SEO Registrations

### Bing Webmaster Tools
1. Visit [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add site and verify ownership
3. Submit sitemap: `https://www.konacoffeedonut.com/sitemap.xml`

### Google Business Profile
1. Create profile at [Google Business](https://www.google.com/business/)
2. Add business information
3. Verify location (if physical store)
4. Add photos and menu items

### Social Media Meta Tags
Already configured for:
- ✅ Facebook/Open Graph
- ✅ Twitter Cards
- ✅ LinkedIn sharing

Update Twitter handle in `layout.tsx`:
```typescript
creator: '@konacoffeedonut', // Change to actual handle
```

## 📊 Monitoring & Analytics

### Vercel Analytics (Already Integrated)
- Real-time visitor tracking
- Page performance metrics
- Web Vitals monitoring

### Google Analytics (Optional - Add if needed)
```bash
npm install @next/third-parties
```

Then add to `layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

// In component:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

## 🔍 SEO Best Practices Implemented

1. **Semantic HTML**: Proper heading hierarchy (h1, h2, h3)
2. **Mobile-First**: Responsive design with Tailwind CSS
3. **Performance**: Server-side rendering, optimized images
4. **Accessibility**: Proper alt tags, ARIA labels (add as needed)
5. **Schema Markup**: Ready for structured data (see below)

## 🏷️ Schema.org Structured Data (Recommended Next Step)

Add to a new file `src/app/schema.tsx`:
```typescript
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Kona Coffee Donut",
    "image": "https://www.konacoffeedonut.com/og-image.jpg",
    "url": "https://www.konacoffeedonut.com",
    "telephone": "+1-XXX-XXX-XXXX",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street",
      "addressLocality": "Your City",
      "addressRegion": "State",
      "postalCode": "XXXXX",
      "addressCountry": "US"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "07:00",
      "closes": "19:00"
    },
    "servesCuisine": "Bakery, Coffee",
    "menu": "https://www.konacoffeedonut.com/menu"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

Then import in `layout.tsx`:
```typescript
import { LocalBusinessSchema } from './schema';

// Add in <head> or <body>:
<LocalBusinessSchema />
```

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Replace placeholder images in `/public/`
- [ ] Add actual Google verification code
- [ ] Update Twitter handle
- [ ] Add contact information
- [ ] Create and add business photos
- [ ] Generate og-image.jpg (1200x630px)
- [ ] Test mobile responsiveness
- [ ] Run Lighthouse audit
- [ ] Set up 404 page
- [ ] Configure redirects if needed
- [ ] Set environment variables in Vercel

## 📈 Expected Timeline

- **Immediate**: Site accessible at your domain
- **1-3 days**: Google indexes homepage
- **1-2 weeks**: Full site indexed
- **2-4 weeks**: Ranking for brand name
- **2-3 months**: Ranking for competitive keywords

## 🎨 Assets Needed

Create these files in `/public/`:
- `icon-192.png` - PWA icon (192x192)
- `icon-512.png` - PWA icon (512x512)
- `favicon.ico` - Browser favicon
- `icon.svg` - Modern favicon
- `apple-touch-icon.png` - iOS icon (180x180)
- `og-image.jpg` - Social sharing image (1200x630)

## 📞 Support

For questions or issues:
1. Check Next.js documentation
2. Review Vercel deployment guides
3. Monitor Google Search Console for indexing status

---

**Current Status**: Ready for deployment and Google registration
**Domain**: www.konacoffeedonut.com
**Framework**: Next.js 15 with App Router (SSR enabled)
**Hosting**: Vercel (recommended)
