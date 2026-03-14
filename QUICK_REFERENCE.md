# 📋 দ্রুত রেফারেন্স কার্ড

## 🌐 Website URLs

| পৃষ্ঠা | URL |
|------|-----|
| Home | http://localhost:5173 |
| Reviews | http://localhost:5173/reviews |
| About | http://localhost:5173/about |
| Contact | http://localhost:5173/contact |
| Privacy | http://localhost:5173/privacy |
| Affiliate Disclosure | http://localhost:5173/affiliate-disclosure |
| Admin Panel | http://localhost:5173/admin |

---

## 🔥 এখনই করার কাজ

### ১. Billing Account যুক্ত করুন
```
Firebase Console → Project Settings → Billing → Link billing account
```

### ২. Firestore Database তৈরি করুন
```
Firebase Console → Firestore Database → Create database
→ Start in test mode → Select region → Create
```

### ३. Products Collection তৈরি করুন
```
Firestore → Start collection → ID: "products" → Next → Auto ID → Save
```

### ४. প্রথম Product যোগ করুন
```
Firebase Console বা Admin Panel (http://localhost:5173/admin)
```

---

## 📝 Product Fields

```
name: String (প্রোডাক্টের নাম)
description: String (বিবরণ)
image: String (Image URL - HTTPS)
rating: Number (১-৫)
category: String (ক্যাটাগরি)
affiliate_link: String (Amazon link with tag)
featured: Boolean (Homepage এ দেখাবে?)
trending: Boolean (Trending section এ দেখাবে?)
```

---

## 🖼️ Image URLs পান

### Unsplash
```
https://unsplash.com/
→ ছবি খুঁজুন
→ ডান ক্লিক → Copy image link
```

### Pexels
```
https://www.pexels.com/
```

### Pixabay
```
https://pixabay.com/
```

---

## 🔗 Affiliate Link Format

```
https://amazon.com/dp/ASIN?tag=yourtag-20
```

**উদাহরণ:**
```
https://amazon.com/dp/B0G8J34WF5?tag=mystore-20
```

---

## 🛠️ Terminal Commands

```bash
# Development server চালু করুন
npm run dev

# Build করুন
npm build

# Preview করুন
npm preview
```

---

## 📁 Project Structure

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
│   └── Admin.jsx
├── config/
│   └── firebase.js
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

---

## 🔐 Firebase Credentials

**File:** `.env.local`

```
VITE_FIREBASE_API_KEY=AIzaSyDyYP3BpMSPYDmMRVjRga2O14DDPA3GxdM
VITE_FIREBASE_AUTH_DOMAIN=product-picks.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=product-picks
VITE_FIREBASE_STORAGE_BUCKET=product-picks.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=575417521398
VITE_FIREBASE_APP_ID=1:575417521398:web:63c4a38bba4a6ce8c188d7
```

---

## ✅ Checklist

- [ ] Billing account linked
- [ ] Firestore database created
- [ ] "products" collection created
- [ ] First product added
- [ ] Website shows products
- [ ] Admin panel works
- [ ] Images loading correctly
- [ ] Affiliate links working

---

## 🆘 Quick Troubleshooting

| সমস্যা | সমাধান |
|------|--------|
| Database তৈরি হচ্ছে না | Billing account link করুন |
| Product দেখা যাচ্ছে না | Firestore database check করুন |
| Image দেখা যাচ্ছে না | HTTPS URL ব্যবহার করুন |
| Admin panel কাজ করছে না | Browser console (F12) check করুন |
| Website slow | Region কাছাকাছি নির্বাচন করুন |

---

## 📞 Important Links

- **Firebase Console**: https://console.firebase.google.com/
- **Unsplash**: https://unsplash.com/
- **Amazon Associates**: https://affiliate-program.amazon.com/
- **Vite Docs**: https://vitejs.dev/
- **React Docs**: https://react.dev/

---

## 🎯 Next Steps

1. ✅ Billing setup করুন
2. ✅ Firestore database তৈরি করুন
3. ✅ ৫-১০টি products যোগ করুন
4. ✅ Website test করুন
5. ✅ Deploy করুন (Vercel/Firebase)

---

## 💡 Pro Tips

- **Featured products** homepage এ দেখা যায়
- **Trending products** trending section এ দেখা যায়
- **Rating** যত বেশি, তত ভালো দেখায়
- **Description** সংক্ষিপ্ত রাখুন (২-৩ লাইন)
- **Image** ভালো quality এর ব্যবহার করুন

---

**Happy affiliate marketing! 🚀**
