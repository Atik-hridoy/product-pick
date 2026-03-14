# Static Website Setup

Your website is now completely static with no backend required!

## Quick Start (2 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open: http://localhost:5173

### 3. Done!

Your website is ready to use with 8 sample products.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
├── pages/
│   ├── Home.jsx (Featured & Trending products)
│   ├── Reviews.jsx (All products)
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Privacy.jsx
│   └── AffiliateDisclosure.jsx
├── data/
│   └── products.js (Static product data)
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

---

## Adding/Editing Products

Edit `src/data/products.js`:

```javascript
{
  id: 1,
  name: "Product Name",
  description: "Short description",
  image: "https://image-url.jpg",
  rating: 4.8,
  category: "Electronics",
  affiliate_link: "https://amazon.com/dp/ASIN?tag=yourtag-20",
  featured: true,    // Shows on home page
  trending: true     // Shows in trending section
}
```

**Save the file** → Website updates automatically!

---

## Website Pages

| Page | URL | Purpose |
|------|-----|---------|
| Home | http://localhost:5173 | Featured & Trending products |
| Reviews | http://localhost:5173/reviews | All products |
| About | http://localhost:5173/about | About page |
| Contact | http://localhost:5173/contact | Contact form |
| Privacy | http://localhost:5173/privacy | Privacy policy |
| Affiliate | http://localhost:5173/affiliate-disclosure | Affiliate disclosure |

---

## Build for Production

```bash
npm run build
```

Creates optimized build in `dist/` folder.

---

## Deploy

### Vercel (Recommended)
1. Push to GitHub
2. Go to https://vercel.com
3. Import repository
4. Click Deploy

### Netlify
1. Push to GitHub
2. Go to https://netlify.com
3. Connect repository
4. Click Deploy

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase init
firebase deploy
```

---

## What Changed?

✅ Removed Firebase backend
✅ Removed Admin panel
✅ Removed .env.local
✅ Added static products.js
✅ Simplified Home.jsx and Reviews.jsx
✅ Removed Firebase dependencies

---

## Features

✅ 7 pages ready to use
✅ 8 sample products included
✅ Category filtering
✅ Featured & Trending sections
✅ Responsive design
✅ Amazon affiliate compliant
✅ No backend required
✅ Fast loading

---

## Customization

### Change Product Data
Edit `src/data/products.js`

### Change Styling
Edit CSS files in `src/pages/` and `src/components/`

### Change Text
Edit JSX files in `src/pages/`

### Change Colors
Edit `src/styles/index.css`

---

## Tips

✅ Use HTTPS image URLs only
✅ Keep descriptions short (2-3 lines)
✅ Use good quality images
✅ Include your Amazon tag in affiliate links
✅ Set featured/trending for important products

---

## Ready to Deploy?

1. Edit products in `src/data/products.js`
2. Customize styling if needed
3. Run `npm run build`
4. Deploy to Vercel/Netlify/Firebase

**Your website is ready to go live! 🚀**
