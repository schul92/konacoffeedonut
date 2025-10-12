# Google Search Console Setup Guide

Google Search Console is **ESSENTIAL** for SEO. It shows how your site appears in Google Search.

## Step 1: Set Up Google Search Console

1. Go to https://search.google.com/search-console/
2. Sign in with **konacoffeedonut@gmail.com**
3. Click **Add Property**

## Step 2: Choose Property Type

Select **Domain** (recommended):
- Domain: `konacoffeedonut.com`
- This covers all variations: www, http, https, subdomains

OR select **URL Prefix**:
- URL: `https://www.konacoffeedonut.com`

## Step 3: Verify Ownership

### Option A: HTML Tag (Easiest for Next.js)
1. Google will give you a meta tag like:
   ```html
   <meta name="google-site-verification" content="abc123xyz..." />
   ```
2. I'll add this to your site (tell me the code)
3. Deploy to Vercel
4. Click "Verify" in Google Search Console

### Option B: DNS Verification
1. Add TXT record to your domain DNS
2. Good if you use domain property type

## Step 4: Submit Sitemap

1. In Search Console, go to **Sitemaps**
2. Add these sitemaps:
   ```
   https://www.konacoffeedonut.com/sitemap.xml
   ```
3. Click **Submit**

## Step 5: Set Up URL Inspection

Test individual pages:
1. Go to **URL Inspection** tool
2. Enter: `https://www.konacoffeedonut.com/en`
3. Click **Test Live URL**
4. Click **Request Indexing**

## What You'll See in Search Console:

### Performance Report
- **Clicks**: How many people clicked your site in Google
- **Impressions**: How many times your site appeared in search
- **CTR**: Click-through rate
- **Position**: Average ranking position
- **Top Queries**: What people searched to find you
  - Example: "kona coffee waikiki", "mochi donuts honolulu"

### Coverage Report
- Valid pages
- Errors (404s, server errors)
- Warnings
- Excluded pages

### Enhancements
- Mobile usability issues
- Core Web Vitals
- Breadcrumbs
- Structured data errors

### Links Report
- Top linked pages
- External links pointing to your site
- Internal link structure

## Key Metrics to Monitor:

### For Kona Coffee Donut:
1. **Search Queries**:
   - "kona coffee waikiki"
   - "mochi donuts honolulu"
   - "malasada near me"
   - "korean corn dogs hawaii"
   - "honolulu coffee kalakaua"

2. **Top Pages**:
   - Homepage
   - Menu page
   - Each menu category

3. **Countries**:
   - United States
   - Japan
   - South Korea
   - China

## Weekly Tasks:

✅ Check search performance (clicks, impressions)
✅ Review coverage errors
✅ Monitor Core Web Vitals
✅ Check new backlinks

## Pro Tips:

1. **Request Indexing** for new pages immediately
2. **Fix errors** as soon as they appear
3. **Monitor mobile usability** (tourists use phones!)
4. **Track seasonal trends** (tourist season vs off-season)
5. **Optimize for "near me" searches**

## Common Issues to Fix:

### Soft 404s
Pages that look like 404s but return 200 status

### Mobile Usability
- Text too small
- Clickable elements too close
- Content wider than screen

### Duplicate Content
Multiple URLs showing same content

### Missing Structured Data
If our JSON-LD isn't being read correctly

## Integration with Google Analytics

Link them together:
1. In Search Console, go to **Settings**
2. Click **Associations**
3. Link your Google Analytics property
4. Now you can see Search Console data in GA4!

---

**Action Required**: Get your verification meta tag and send it to me!
