# Static Affiliate Website

A clean, simple affiliate-friendly product recommendation website built with React.

## Features

✅ **Static Product Data** - No backend required
✅ **7 Pages** - Home, Reviews, About, Contact, Privacy, Affiliate Disclosure
✅ **Responsive Design** - Works on all devices
✅ **Product Filtering** - Filter by category
✅ **Featured & Trending** - Highlight special products
✅ **Amazon Compliance** - Affiliate disclosure included

## Project Structure

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
│   └── AffiliateDisclosure.jsx
├── data/
│   └── products.js (Static product data)
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Website will be available at: http://localhost:5173

### 3. Build for Production
```bash
npm run build
```

## Adding Products

Edit `src/data/products.js` to add or modify products:

```javascript
{
  id: 1,
  name: "Product Name",
  description: "Product description",
  image: "https://image-url.jpg",
  rating: 4.8,
  category: "Electronics",
  affiliate_link: "https://amazon.com/dp/ASIN?tag=yourtag-20",
  featured: true,
  trending: false
}
```

## Website URLs

- **Home**: http://localhost:5173
- **Reviews**: http://localhost:5173/reviews
- **About**: http://localhost:5173/about
- **Contact**: http://localhost:5173/contact
- **Privacy**: http://localhost:5173/privacy
- **Affiliate Disclosure**: http://localhost:5173/affiliate-disclosure

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Click Deploy

### Deploy to Netlify

1. Push code to GitHub
2. Go to https://netlify.com
3. Connect your repository
4. Click Deploy

## Amazon Compliance

✅ Affiliate disclosure included
✅ No prices displayed
✅ Proper link format with tag
✅ rel="nofollow sponsored" on links
✅ Not using Amazon branding

## Technologies

- React 18.2.0
- Vite 5.0.0
- React Router 6.20.0
- CSS3 (Responsive)

## License

MIT
