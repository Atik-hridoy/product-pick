# Quick Start Guide - 5 Minutes

## Step 1: Get Firebase Credentials (2 minutes)

1. Go to https://console.firebase.google.com/
2. Click "Add project" → Enter "product-picks" → Create
3. Click gear icon → Project settings
4. Scroll to "Your apps" → Click Web icon
5. Copy the config object

## Step 2: Set Up Environment (1 minute)

1. Create `.env.local` file in project root
2. Paste your Firebase config:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Step 3: Create Firestore Database (1 minute)

1. In Firebase Console → Firestore Database
2. Click "Create database"
3. Choose "Start in test mode"
4. Select your region
5. Click "Create"

## Step 4: Create Products Collection (1 minute)

1. In Firestore → Click "Start collection"
2. Collection ID: `products`
3. Click "Next" → "Auto ID"
4. Add a test product with these fields:
   - name: "Test Product"
   - description: "Test description"
   - image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
   - rating: 5
   - category: "Electronics"
   - affiliate_link: "https://amazon.com/dp/ASIN?tag=yourtag-20"
   - featured: true
   - trending: false

## Step 5: Run the App

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Adding Products

### Via Admin Panel (Easiest)
1. Go to http://localhost:5173/admin
2. Fill the form
3. Click "Add Product"

### Via Firebase Console
1. Go to Firestore Database
2. Click "products" collection
3. Click "Add document"
4. Fill fields and save

## Image URLs

Use free images from:
- Unsplash: https://unsplash.com/
- Pexels: https://www.pexels.com/
- Pixabay: https://pixabay.com/

Example: `https://images.unsplash.com/photo-1505740420928-5e560c06d30e`

## Affiliate Link Format

```
https://amazon.com/dp/ASIN?tag=yourtag-20
```

Replace:
- `ASIN` with product ASIN (e.g., B0G8J34WF5)
- `yourtag-20` with your Amazon Associates tag

## Done!

Your website is now live with Firebase backend!

### Next Steps:
1. Add more products
2. Customize colors/text
3. Deploy to Vercel/Netlify
4. Start earning commissions!

## Troubleshooting

**Products not showing?**
- Check .env.local has correct credentials
- Verify Firestore database exists
- Check browser console for errors

**Can't add products?**
- Verify Firebase credentials
- Check Firestore rules allow write
- Ensure all fields are filled

**Images not loading?**
- Verify image URL is correct
- Use HTTPS URLs only
- Try different image source

## Need Help?

See full guides:
- [README.md](./README.md) - Full documentation
- [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) - Detailed Firebase setup
