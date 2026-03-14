# Setup Summary

## What You Have

✅ Complete React + Firebase affiliate website
✅ Admin panel to add products with images
✅ Firestore database backend
✅ 6 pages (Home, Reviews, About, Contact, Privacy, Affiliate Disclosure)
✅ Product cards with images and descriptions
✅ Featured and trending products
✅ Category filtering
✅ Mobile responsive design
✅ Amazon Associates compliance

## How to Connect Firebase

### 1. Create Firebase Project
- Go to https://console.firebase.google.com/
- Click "Add project"
- Name it "product-picks"
- Wait for creation

### 2. Get Credentials
- Click gear icon → Project settings
- Scroll to "Your apps"
- Click Web icon
- Copy the config

### 3. Add to .env.local
Create `.env.local` file:
```
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Create Firestore Database
- In Firebase Console → Firestore Database
- Click "Create database"
- Choose "Start in test mode"
- Select region
- Click "Create"

### 5. Create Products Collection
- Click "Start collection"
- Name: `products`
- Click "Next" → "Auto ID"
- Add test product

## How to Add Products

### Option 1: Admin Panel (Easiest)
1. Go to http://localhost:5173/admin
2. Fill the form:
   - Product Name
   - Description
   - Image URL
   - Rating (1-5)
   - Category
   - Affiliate Link
   - Check Featured/Trending if needed
3. Click "Add Product"

### Option 2: Firebase Console
1. Go to Firestore Database
2. Click "products" collection
3. Click "Add document"
4. Fill fields:
   - name: "Product Name"
   - description: "Description"
   - image: "https://image-url.jpg"
   - rating: 4.5
   - category: "Electronics"
   - affiliate_link: "https://amazon.com/dp/ASIN?tag=yourtag-20"
   - featured: true/false
   - trending: true/false

## Image URLs

Use free images from:
- **Unsplash**: https://unsplash.com/
- **Pexels**: https://www.pexels.com/
- **Pixabay**: https://pixabay.com/

Example: `https://images.unsplash.com/photo-1505740420928-5e560c06d30e`

## Affiliate Links

Format: `https://amazon.com/dp/ASIN?tag=yourtag-20`

Example: `https://amazon.com/dp/B0G8J34WF5?tag=mystore-20`

## Running the App

```bash
npm install
npm run dev
```

Open http://localhost:5173

## File Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Reviews.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Privacy.jsx
│   ├── AffiliateDisclosure.jsx
│   └── Admin.jsx (Add products here)
├── config/
│   └── firebase.js (Firebase config)
├── App.jsx
└── main.jsx
```

## Key Features

### Home Page
- Hero section
- Featured products
- Trending products
- All products with category filter

### Admin Panel (/admin)
- Add products with images
- Set rating and category
- Mark as featured/trending
- Real-time validation

### Product Card
- Product image
- Product name
- Description
- Rating
- "Check Latest Price on Amazon" button
- Featured/Trending badges

### Firestore Integration
- Automatic product loading
- Real-time updates
- Easy admin management
- Scalable to 1000+ products

## Compliance

✅ Affiliate disclosure in footer
✅ Dedicated affiliate disclosure page
✅ Privacy policy included
✅ No product prices displayed
✅ Proper affiliate link format
✅ Links open in new tab
✅ rel="nofollow sponsored" on links

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Go to vercel.com
3. Click "New Project"
4. Select your repo
5. Add environment variables
6. Click "Deploy"

### Netlify
1. Push to GitHub
2. Go to netlify.com
3. Click "New site from Git"
4. Select your repo
5. Add environment variables
6. Deploy

## Troubleshooting

### Products not loading?
- Check .env.local credentials
- Verify Firestore database exists
- Check browser console

### Can't add products?
- Verify Firebase credentials
- Check Firestore rules
- Ensure all fields filled

### Images not showing?
- Verify image URL
- Use HTTPS only
- Try different source

## Next Steps

1. ✅ Set up Firebase
2. ✅ Add .env.local
3. ✅ Create Firestore database
4. ✅ Add test product
5. ✅ Run npm run dev
6. ✅ Add more products via admin panel
7. ✅ Deploy to Vercel

## Support

- Full guide: [README.md](./README.md)
- Firebase setup: [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)
- Quick start: [QUICK_START.md](./QUICK_START.md)

## You're All Set!

Your affiliate website is ready to go. Start adding products and earning commissions!
