# Google Analytics 4 Setup Guide

This guide will help you set up Google Analytics 4 (GA4) for your Kona Coffee Donut website.

## Step 1: Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account (konacoffeedonut@gmail.com)
3. Click **"Start measuring"** or **"Admin"** (gear icon)

## Step 2: Set Up a Property

1. Click **"Create Property"**
2. Fill in the details:
   - **Property name**: `Kona Coffee Donut`
   - **Reporting time zone**: `United States - (GMT-10:00) Hawaii Time`
   - **Currency**: `United States Dollar (USD)`
3. Click **"Next"**

## Step 3: Business Information

1. Select your industry category: **Food & Drink**
2. Select business size: **Small** (1-10 employees)
3. Select how you plan to use Google Analytics:
   - ✅ Measure customer engagement
   - ✅ Examine user behavior
   - ✅ Get insights on customers
4. Click **"Create"**
5. Accept the Terms of Service

## Step 4: Set Up Data Stream

1. Select platform: **Web**
2. Enter website details:
   - **Website URL**: `https://www.konacoffeedonut.com`
   - **Stream name**: `Kona Coffee Donut Website`
3. Enable **Enhanced measurement** (recommended)
4. Click **"Create stream"**

## Step 5: Get Your Measurement ID

1. After creating the stream, you'll see your **Measurement ID**
   - Format: `G-XXXXXXXXXX`
2. **Copy this ID** - you'll need it in the next step

## Step 6: Add Measurement ID to Your Website

1. Open the file `.env.local` in your project root
2. Replace the placeholder with your actual Measurement ID:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. Save the file

## Step 7: Deploy to Production

### For Local Testing:
```bash
pnpm dev
```

### For Production (Vercel):
1. Go to your Vercel dashboard
2. Navigate to your project settings
3. Go to **Environment Variables**
4. Add a new variable:
   - **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: `G-XXXXXXXXXX` (your measurement ID)
   - **Environment**: Production, Preview, Development
5. Click **"Save"**
6. Redeploy your site

## Step 8: Verify Installation

1. Visit your website: https://www.konacoffeedonut.com
2. In Google Analytics, go to **Reports** → **Realtime**
3. You should see yourself as an active user
4. Browse around your site and watch the real-time data update

## What Google Analytics Will Track

### Automatically Tracked (Enhanced Measurement):
- ✅ Page views
- ✅ Scrolls (90% scroll depth)
- ✅ Outbound clicks
- ✅ Site search
- ✅ Video engagement
- ✅ File downloads
- ✅ Form interactions

### Key Metrics You Can Analyze:
- **Users**: Total visitors to your site
- **Sessions**: Number of visits
- **Bounce Rate**: % of single-page visits
- **Session Duration**: How long users stay
- **Page Views**: Most popular pages
- **Traffic Sources**: Where visitors come from
- **Demographics**: Age, gender, interests
- **Devices**: Mobile vs Desktop usage
- **Location**: Geographic data (countries, cities)
- **Language**: User languages

### Useful Reports:
1. **Realtime**: See live visitor activity
2. **Acquisition**: How users find your site (Google, social media, direct)
3. **Engagement**: What users do on your site
4. **Monetization**: Track conversions and goals
5. **Retention**: User loyalty and return visits
6. **Demographics**: User age, gender, interests
7. **Tech**: Browser, OS, device info

## Setting Up Goals/Conversions

### Example Goals for Your Coffee Shop:
1. **Menu Views**: Track when users view menu PDFs
2. **Directions Clicked**: Track "Get Directions" clicks
3. **Language Selection**: Track which languages users prefer
4. **Menu Category Views**: Track which menus are most popular

To set these up:
1. Go to **Admin** → **Events**
2. Click **"Create event"**
3. Define custom events based on user actions

## Privacy & GDPR Compliance

Google Analytics 4 is designed to be privacy-friendly:
- ✅ Cookie-less tracking options
- ✅ Data retention controls
- ✅ IP anonymization
- ✅ User deletion requests

### Recommended Privacy Settings:
1. Go to **Admin** → **Data Settings** → **Data Retention**
2. Set to **14 months** (recommended for small businesses)
3. Enable **"Reset user data on new activity"**

## Tips for Kona Coffee Donut

### Track These Key Metrics:
1. **Most viewed menu items** (donuts vs coffee vs bingsu)
2. **Mobile vs Desktop traffic** (important for tourists)
3. **Language preferences** (Japanese, Korean, Chinese visitors)
4. **Peak traffic times** (optimize staffing)
5. **Geographic sources** (where tourists come from)

### Set Up Custom Alerts:
1. Traffic spikes or drops
2. Unusually high bounce rates
3. Server errors or broken pages

## Troubleshooting

### Not seeing data?
1. Wait 24-48 hours for initial data collection
2. Check that your Measurement ID is correct
3. Verify environment variable is set in production
4. Use browser dev tools to check if gtag.js is loading
5. Check for ad blockers (disable to test)

### Real-time not working?
1. Make sure you're not in Incognito/Private mode
2. Disable ad blockers
3. Check browser console for errors

## Need Help?

- [Google Analytics Help Center](https://support.google.com/analytics/)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [GA4 vs Universal Analytics](https://support.google.com/analytics/answer/11583528)

---

**Important**: Keep your Measurement ID private. It's already added to `.gitignore` to prevent it from being committed to GitHub.
