# Clover POS Integration Guide

Complete guide for integrating online ordering with your Clover POS system.

## 🎯 Integration Overview

Clover provides robust APIs for building custom online ordering systems that sync directly with your POS.

### What We'll Build:
- ✅ Online menu synced with Clover inventory
- ✅ Real-time order creation in Clover
- ✅ Secure payment processing via Clover
- ✅ Pickup time selection
- ✅ Order status tracking
- ✅ Automatic inventory updates

---

## 📋 Prerequisites

### 1. Clover Account Setup
- ✅ Active Clover merchant account
- ✅ Clover device (Station, Mini, Flex, or Mobile)
- ✅ Admin access to Clover dashboard

### 2. Developer Account
1. Go to https://www.clover.com/developers
2. Sign up for Developer account
3. Create app in Developer Dashboard
4. Get API credentials:
   - **Merchant ID**
   - **API Token** (for single merchant)
   - **OAuth credentials** (for multi-merchant)

### 3. Required Permissions
Your Clover app needs these permissions:
- `READ_ORDERS` - Read order data
- `WRITE_ORDERS` - Create new orders
- `READ_INVENTORY` - Access menu items
- `PROCESS_PAYMENTS` - Handle payments
- `READ_MERCHANT` - Get merchant info

---

## 🏗️ Architecture

### Data Flow:
```
Customer Website → Next.js API Routes → Clover API → Clover POS
     ↓                    ↓                  ↓            ↓
 Browse Menu    →    Fetch Inventory  →  Sync Items  →  Display
 Add to Cart    →    Calculate Total  →  Validate    →  Confirm
 Checkout       →    Process Payment  →  Charge Card →  Receipt
 Place Order    →    Create Order     →  Send to POS →  Kitchen
```

### Tech Stack:
- **Frontend**: Next.js 15 (already built)
- **API Layer**: Next.js API Routes
- **Payment**: Clover Hosted Checkout or Direct API
- **Database**: Vercel Postgres (for order history)
- **Auth**: Clover OAuth 2.0

---

## 🔧 Implementation Plan

### Phase 1: API Setup (Week 1)

#### Step 1: Get Clover Credentials
```bash
# Environment variables needed:
CLOVER_MERCHANT_ID=your_merchant_id
CLOVER_API_TOKEN=your_api_token
CLOVER_APP_ID=your_app_id
CLOVER_APP_SECRET=your_app_secret
CLOVER_ENVIRONMENT=sandbox # or production
```

#### Step 2: Create API Client
```typescript
// src/lib/clover.ts
const CLOVER_BASE_URL = process.env.CLOVER_ENVIRONMENT === 'production'
  ? 'https://api.clover.com'
  : 'https://apisandbox.dev.clover.com';

export async function getCloverHeaders() {
  return {
    'Authorization': `Bearer ${process.env.CLOVER_API_TOKEN}`,
    'Content-Type': 'application/json',
  };
}
```

#### Step 3: Fetch Inventory
```typescript
// Fetch menu items from Clover
export async function getMenuItems() {
  const response = await fetch(
    `${CLOVER_BASE_URL}/v3/merchants/${process.env.CLOVER_MERCHANT_ID}/items`,
    { headers: await getCloverHeaders() }
  );
  return response.json();
}
```

---

### Phase 2: Menu Integration (Week 1-2)

#### Replace Static Menus with Clover Data

**Current**: Static menu PDFs
**New**: Dynamic menu from Clover inventory

**Features**:
- Real-time pricing
- Item availability (in stock / sold out)
- Categories (donuts, coffee, malasada, etc.)
- Modifiers (size, add-ons)
- Photos from Clover

**API Endpoints**:
```
GET /v3/merchants/{mId}/items           # All menu items
GET /v3/merchants/{mId}/categories      # Menu categories
GET /v3/merchants/{mId}/item_stocks     # Stock levels
GET /v3/merchants/{mId}/modifier_groups # Item modifiers
```

---

### Phase 3: Shopping Cart (Week 2)

**Features**:
- Add/remove items
- Quantity selection
- Modifiers (size, extras)
- Price calculation
- Tax computation (from Clover)

**Tech**:
- React Context for cart state
- LocalStorage persistence
- Real-time validation

---

### Phase 4: Checkout & Payment (Week 3)

#### Option A: Clover Hosted Checkout (Easiest)
**Pros**:
- PCI compliant (Clover handles card data)
- Quick setup
- Secure

**Flow**:
1. Customer clicks "Checkout"
2. Create checkout session via API
3. Redirect to Clover payment page
4. Customer enters card info
5. Redirect back to your site
6. Create order in Clover

**API Call**:
```typescript
POST /v1/checkout
{
  "customer": {
    "email": "customer@email.com",
    "phoneNumber": "808-XXX-XXXX"
  },
  "shoppingCart": {
    "lineItems": [
      {
        "name": "Mochi Donut",
        "price": 350, // cents
        "quantity": 2
      }
    ]
  }
}
```

#### Option B: Direct API Integration (Advanced)
**Pros**:
- Full control
- Better UX
- Custom branding

**Requires**:
- PCI compliance
- Card tokenization
- More complex setup

**Recommended**: Start with Hosted Checkout, upgrade later

---

### Phase 5: Order Creation (Week 3)

**After payment succeeds, create order in Clover**:

```typescript
POST /v3/merchants/{mId}/orders
{
  "state": "open",
  "total": 700, // cents
  "title": "Online Order - Pickup",
  "orderType": {
    "id": "pickup_type_id"
  },
  "lineItems": [
    {
      "item": {
        "id": "clover_item_id"
      },
      "name": "Mochi Donut",
      "price": 350,
      "quantity": 2,
      "note": "Extra glaze"
    }
  ],
  "note": "Pickup at 2:30 PM"
}
```

**Result**: Order appears in Clover POS, kitchen sees it, staff can fulfill

---

### Phase 6: Order Tracking (Week 4)

**Customer sees**:
- Order confirmation
- Estimated pickup time
- Order status (received → preparing → ready)

**Staff updates** via Clover POS:
- Mark as "in progress"
- Mark as "ready for pickup"
- Complete order

**Tech**: Webhook integration or polling

---

## 🎨 UI/UX Design

### New Pages Needed:

#### 1. `/order` - Online Ordering Page
- Menu categories (tabs or sections)
- Item cards with photos, prices
- "Add to Cart" buttons
- Cart summary (sticky sidebar)

#### 2. `/cart` - Shopping Cart
- Line items with quantity controls
- Modifiers shown
- Subtotal, tax, total
- "Proceed to Checkout" button

#### 3. `/checkout` - Checkout Page
- Customer info form (name, email, phone)
- Pickup time selector
- Special instructions
- Payment button (redirects to Clover)

#### 4. `/order-confirmation` - Success Page
- Order number
- Pickup time
- Items ordered
- Total paid
- "Add to Calendar" button

#### 5. `/my-orders` - Order History
- Past orders
- Reorder button
- Loyalty points (if implemented)

---

## 🔐 Security Considerations

### 1. API Token Protection
```typescript
// NEVER expose tokens in frontend
// Always use API routes as proxy
// src/app/api/clover/route.ts

export async function GET() {
  const token = process.env.CLOVER_API_TOKEN; // Server-side only
  // ... make request
}
```

### 2. Payment Security
- Use Clover Hosted Checkout (PCI compliant)
- Never store card data
- Implement HTTPS only
- Validate all inputs

### 3. Order Validation
- Verify prices server-side
- Check inventory before order
- Validate total calculation
- Prevent duplicate orders

---

## 📊 Clover API Endpoints Reference

### Inventory & Menu
```
GET /v3/merchants/{mId}/items                    # Menu items
GET /v3/merchants/{mId}/categories               # Categories
GET /v3/merchants/{mId}/modifiers                # Modifiers
GET /v3/merchants/{mId}/modifier_groups          # Modifier groups
GET /v3/merchants/{mId}/item_stocks              # Stock levels
```

### Orders
```
POST /v3/merchants/{mId}/orders                  # Create order
GET /v3/merchants/{mId}/orders                   # List orders
GET /v3/merchants/{mId}/orders/{orderId}         # Get order
POST /v3/merchants/{mId}/orders/{orderId}/pay    # Pay order
DELETE /v3/merchants/{mId}/orders/{orderId}      # Delete order
```

### Payments
```
POST /v1/checkout                                # Create checkout
POST /v1/charges                                 # Create charge
POST /v1/refunds                                 # Create refund
GET /v1/charges/{chargeId}                       # Get charge
```

### Webhooks (for real-time updates)
```
POST /apps/{appId}/webhooks                      # Create webhook
Events: ORDER_CREATED, ORDER_UPDATED, PAYMENT_CAPTURED
```

---

## 💰 Pricing & Fees

### Clover Transaction Fees
- **Card Present**: ~2.3% + $0.10
- **Card Not Present** (online): ~2.6% + $0.10
- **American Express**: +0.5%

### Monthly Costs
- Clover software: Varies by plan ($14-$60/month)
- Hardware: One-time cost (if needed)
- No additional API fees!

---

## 🧪 Testing Strategy

### Sandbox Environment
1. Use sandbox credentials
2. Test cards:
   - Visa: `4242 4242 4242 4242`
   - Mastercard: `5555 5555 5555 4444`
   - Amex: `3782 822463 10005`
3. Create test orders
4. Verify in Clover sandbox dashboard

### Production Testing
1. Small test order ($0.01)
2. Verify in live Clover POS
3. Process refund
4. Monitor webhooks

---

## 📱 Mobile Optimization

### PWA Features
- Install as app
- Offline menu viewing
- Push notifications ("Your order is ready!")
- Fast checkout (saved payment)

### Mobile UX
- Large touch targets
- Sticky cart button
- Quick reorder
- Apple Pay / Google Pay support (via Clover)

---

## 🚀 Launch Checklist

### Pre-Launch
- [ ] Clover developer account created
- [ ] API credentials obtained
- [ ] Sandbox tested
- [ ] Menu synced from Clover
- [ ] Payment flow tested
- [ ] Order creation tested
- [ ] Staff trained on receiving online orders

### Launch Day
- [ ] Switch to production API
- [ ] Update environment variables in Vercel
- [ ] Monitor first orders closely
- [ ] Have Clover support number ready
- [ ] Announce on social media

### Post-Launch
- [ ] Collect customer feedback
- [ ] Monitor order flow
- [ ] Track conversion rates
- [ ] Optimize checkout process
- [ ] Add loyalty integration

---

## 🆘 Troubleshooting

### Common Issues

#### API Returns 401 Unauthorized
- Check API token is correct
- Verify merchant ID
- Ensure token has required permissions

#### Order Not Appearing in Clover
- Check order state ("open" not "locked")
- Verify order type ID exists
- Check item IDs are valid

#### Payment Fails
- Verify Hosted Checkout URL is correct
- Check return URL is whitelisted
- Ensure HTTPS enabled

#### Inventory Not Syncing
- Check item availability in Clover
- Verify stock levels
- Ensure items are not hidden

---

## 📚 Resources

### Official Documentation
- Main Docs: https://docs.clover.com/
- API Reference: https://docs.clover.com/dev/reference/
- Sandbox: https://sandbox.dev.clover.com/
- Developer Dashboard: https://www.clover.com/developers

### Support
- Developer Forum: https://community.clover.com/
- Support Email: developer-relations@clover.com
- Status Page: https://status.clover.com/

### Useful Libraries
- `clover-ecomm-sdk` (official Node.js SDK)
- Postman collection for testing
- Webhooks validator

---

## 🎯 Timeline Estimate

### Minimal Viable Product (MVP)
**4 weeks total**

- Week 1: API setup, authentication, fetch menu
- Week 2: Shopping cart, UI components
- Week 3: Checkout integration, payment flow
- Week 4: Order creation, testing, launch

### Full Feature Set
**8 weeks total**

- MVP + order tracking
- Customer accounts
- Loyalty program
- Analytics dashboard
- Email notifications
- SMS updates

---

## 💡 Next Steps

1. **Immediate**: Get Clover developer credentials
2. **This Week**: Set up sandbox environment
3. **Next Week**: I'll build API integration layer
4. **Week 3**: Build online ordering UI
5. **Week 4**: Test and launch!

### What I Need From You:
1. Clover merchant ID
2. API access (I can guide you through setup)
3. Menu categories in Clover (organized)
4. Pickup time preferences (15 min intervals? 30 min?)
5. Special instructions you want to collect

Ready to start? Send me your Clover credentials and we'll begin! 🚀
