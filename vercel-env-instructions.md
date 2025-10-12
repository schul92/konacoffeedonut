# Add Environment Variable to Vercel

Your Google Analytics is configured locally but NOT on production yet.

## Steps:

1. Go to: https://vercel.com/dashboard
2. Select project: konacoffeedonut
3. Settings → Environment Variables
4. Add New:
   - Name: NEXT_PUBLIC_GA_MEASUREMENT_ID
   - Value: G-S2G18X8TPB
   - Environments: All (Production, Preview, Development)
5. Save
6. Redeploy your site

## Verify:
After redeploying, Google should detect the tag on www.konacoffeedonut.com
