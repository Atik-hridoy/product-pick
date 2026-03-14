# 🇧🇩 বাংলা গাইড - আপনার Website চালু করুন

## আপনার Website এর অবস্থা

✅ **95% সম্পন্ন**

আপনার affiliate website প্রায় সম্পূর্ণ প্রস্তুত। শুধু Firestore database সেটআপ করতে হবে।

---

## 🎯 এখনই করার কাজ (15 মিনিট)

### ধাপ ১: Firebase Console খুলুন
```
https://console.firebase.google.com/
```

### ধাপ ২: আপনার Project নির্বাচন করুন
```
"product-picks" project ক্লিক করুন
```

### ধাপ ३: Billing Account যুক্ত করুন

**বাম পাশে গিয়ার আইকন (⚙️) ক্লিক করুন**
```
Project Settings → Billing ট্যাব
```

**"Link billing account" ক্লিক করুন**
- নতুন billing account তৈরি করুন অথবা
- বিদ্যমান account যুক্ত করুন

**পেমেন্ট পদ্ধতি যোগ করুন** (ক্রেডিট/ডেবিট কার্ড)

### ধাপ ४: Firestore Database তৈরি করুন

**বাম পাশে "Firestore Database" খুঁজুন**
```
"Create database" ক্লিক করুন
```

**সেটিংস:**
- Mode: **"Start in test mode"** নির্বাচন করুন
- Region: **"asia-south1"** (বাংলাদেশের জন্য সেরা)
- **"Create"** ক্লিক করুন

**অপেক্ষা করুন:** ২-३ মিনিট

### ধাপ ५: Products Collection তৈরি করুন

**Database তৈরি হওয়ার পর:**
```
"Start collection" ক্লিক করুন
```

**Collection ID লিখুন:**
```
products
```

**"Next" ক্লিক করুন**

**"Auto ID" ক্লিক করুন**

### ধাপ ६: প্রথম Product যোগ করুন

**এই ফিল্ডগুলো যোগ করুন:**

```
name: "Wireless Headphones"
description: "High quality wireless headphones"
image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
rating: 4.8
category: "Electronics"
affiliate_link: "https://amazon.com/dp/B0G8J34WF5?tag=yourtag-20"
featured: true
trending: false
```

**"Save" ক্লিক করুন**

### ধাপ ७: Website এ দেখুন

```
http://localhost:5173
```

আপনার product দেখা যাবে!

---

## 📸 Image URLs পান

### Unsplash থেকে:
1. https://unsplash.com/ খুলুন
2. কোনো ছবি খুঁজুন
3. ছবিতে ডান ক্লিক করুন
4. "Copy image link" ক্লিক করুন
5. Admin panel এ paste করুন

---

## 🔗 Affiliate Link তৈরি করুন

**Format:**
```
https://amazon.com/dp/ASIN?tag=yourtag-20
```

**আপনার tag দিয়ে replace করুন**

**উদাহরণ:**
```
https://amazon.com/dp/B0G8J34WF5?tag=mystore-20
```

---

## 🛠️ Admin Panel দিয়ে আরও Products যোগ করুন

```
http://localhost:5173/admin
```

**Form ভরুন:**
- Product Name
- Description
- Image URL
- Rating (1-5)
- Category
- Affiliate Link
- Featured/Trending checkbox

**"Add Product" ক্লিক করুন**

---

## 🌐 Website এর সব পৃষ্ঠা

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

## ✅ Checklist

- [ ] Billing account যুক্ত করেছি
- [ ] Firestore database তৈরি করেছি
- [ ] "products" collection তৈরি করেছি
- [ ] প্রথম product যোগ করেছি
- [ ] Website এ product দেখা যাচ্ছে
- [ ] Admin panel কাজ করছে
- [ ] আরও products যোগ করেছি

---

## 🆘 সমস্যা হলে

**Database তৈরি হচ্ছে না?**
- Billing account linked আছে কিনা চেক করুন
- Project Settings → Billing এ যান

**Product দেখা যাচ্ছে না?**
- Firestore database তৈরি হয়েছে কিনা চেক করুন
- "products" collection আছে কিনা চেক করুন
- Browser refresh করুন (F5)

**Image দেখা যাচ্ছে না?**
- HTTPS URL ব্যবহার করুন (HTTP নয়)
- অন্য image source থেকে চেষ্টা করুন

---

## 💡 গুরুত্বপূর্ণ টিপস

✅ Collection ID অবশ্যই "products" হতে হবে
✅ Image URL HTTPS হতে হবে
✅ Rating ১-৫ এর মধ্যে হতে হবে
✅ Affiliate link সঠিক হতে হবে

---

## 🎉 সম্পন্ন!

এখন আপনার website সম্পূর্ণ প্রস্তুত:
- ✅ Firebase connected
- ✅ Firestore database তৈরি
- ✅ Products collection তৈরি
- ✅ Admin panel কাজ করছে
- ✅ Website চলছে

**Happy affiliate marketing! 🚀**
