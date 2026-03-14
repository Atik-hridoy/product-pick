# Firebase Billing এবং Firestore Database তৈরি করুন

## সমস্যা: Database তৈরি করতে পারছেন না?

এটি সাধারণত হয় কারণ আপনার Firebase project এ billing account যুক্ত নেই।

---

## ✅ সমাধান: Billing Account যুক্ত করুন

### Step 1: Firebase Console এ যান
1. https://console.firebase.google.com/ খুলুন
2. আপনার project **"product-picks"** নির্বাচন করুন

### Step 2: Billing সেটআপ করুন
1. বাম পাশে **"Project Settings"** (গিয়ার আইকন) ক্লিক করুন
2. **"Billing"** ট্যাব খুলুন
3. **"Link billing account"** বাটন ক্লিক করুন

### Step 3: Google Cloud Billing এ যান
1. একটি নতুন উইন্ডো খুলবে
2. **"Create billing account"** ক্লিক করুন (যদি আপনার কোনো billing account না থাকে)
3. আপনার দেশ নির্বাচন করুন
4. আপনার নাম এবং ঠিকানা দিন
5. পেমেন্ট পদ্ধতি যোগ করুন (ক্রেডিট কার্ড বা ডেবিট কার্ড)

### Step 4: Firebase Project এ Billing Link করুন
1. Firebase Console এ ফিরে যান
2. **"Link billing account"** এ আপনার নতুন billing account নির্বাচন করুন
3. **"Link"** ক্লিক করুন

---

## ✅ এখন Firestore Database তৈরি করুন

### Step 1: Firestore Database খুলুন
1. Firebase Console এ যান
2. বাম পাশে **"Firestore Database"** ক্লিক করুন
3. **"Create database"** বাটন ক্লিক করুন

### Step 2: Database সেটিংস
1. **"Start in test mode"** নির্বাচন করুন (শুরুর জন্য ঠিক আছে)
2. **"Next"** ক্লিক করুন

### Step 3: Region নির্বাচন করুন
1. আপনার কাছাকাছি region নির্বাচন করুন
   - বাংলাদেশের জন্য: **asia-south1** (ভারত) বা **asia-southeast1** (সিঙ্গাপুর)
2. **"Create"** ক্লিক করুন

### Step 4: অপেক্ষা করুন
- Database তৈরি হতে ২-৩ মিনিট সময় লাগবে
- সবুজ চেকমার্ক দেখা যাবে যখন সম্পন্ন হবে

---

## ✅ Products Collection তৈরি করুন

### Step 1: Collection তৈরি করুন
1. Firestore Database খোলা থাকবে
2. **"Start collection"** বাটন ক্লিক করুন

### Step 2: Collection নাম দিন
1. Collection ID: **`products`** (এক্সাক্ট এই নাম দিন)
2. **"Next"** ক্লিক করুন

### Step 3: প্রথম Document যোগ করুন
1. **"Auto ID"** ক্লিক করুন (Firebase নিজে ID তৈরি করবে)
2. এই ফিল্ডগুলো যোগ করুন:

```
Field Name          Type      Value
name               String    "Wireless Headphones"
description        String    "High quality wireless headphones with noise cancellation"
image              String    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
rating             Number    4.8
category           String    "Electronics"
affiliate_link     String    "https://amazon.com/dp/B0G8J34WF5?tag=yourtag-20"
featured           Boolean   true
trending           Boolean   false
```

### Step 4: Save করুন
1. **"Save"** বাটন ক্লিক করুন
2. আপনার প্রথম product যোগ হয়ে গেছে!

---

## ✅ Website এ Product দেখুন

### Step 1: Development Server চালু করুন
```bash
npm run dev
```

### Step 2: Website খুলুন
1. http://localhost:5173 খুলুন
2. আপনার product দেখা যাবে!

---

## ✅ Admin Panel দিয়ে আরও Product যোগ করুন

### Step 1: Admin Panel খুলুন
1. http://localhost:5173/admin খুলুন

### Step 2: Product Form ভরুন
- Product Name
- Description
- Image URL (Unsplash থেকে কপি করুন)
- Rating (1-5)
- Category
- Affiliate Link
- Featured/Trending checkbox

### Step 3: Add Product ক্লিক করুন
- Product তাৎক্ষণিক Firestore এ যোগ হবে
- Home page এ দেখা যাবে

---

## 📸 ফ্রি Image URLs পান

### Unsplash থেকে:
1. https://unsplash.com/ খুলুন
2. কোনো ছবি খুঁজুন
3. ছবিতে ডান ক্লিক করুন → "Copy image link"
4. Admin panel এ paste করুন

### অন্যান্য সোর্স:
- **Pexels**: https://www.pexels.com/
- **Pixabay**: https://pixabay.com/

---

## 🔗 Affiliate Link Format

আপনার Amazon Associates tag দিয়ে link তৈরি করুন:

```
https://amazon.com/dp/ASIN?tag=yourtag-20
```

**উদাহরণ:**
```
https://amazon.com/dp/B0G8J34WF5?tag=mystore-20
```

---

## ❓ সমস্যা হলে

### Database তৈরি হচ্ছে না?
- ✅ Billing account linked আছে কিনা চেক করুন
- ✅ Project Settings → Billing এ যান
- ✅ Billing account দেখা যাচ্ছে কিনা চেক করুন

### Product দেখা যাচ্ছে না?
- ✅ Firestore database তৈরি হয়েছে কিনা চেক করুন
- ✅ "products" collection আছে কিনা চেক করুন
- ✅ Browser console খুলুন (F12) এবং error দেখুন
- ✅ Development server চালু আছে কিনা চেক করুন

### Image দেখা যাচ্ছে না?
- ✅ Image URL সঠিক কিনা চেক করুন
- ✅ HTTPS URL ব্যবহার করুন (HTTP নয়)
- ✅ অন্য image source থেকে চেষ্টা করুন

---

## 🎉 সব সম্পন্ন!

এখন আপনার website সম্পূর্ণ প্রস্তুত:
1. ✅ Firebase connected
2. ✅ Firestore database তৈরি
3. ✅ Products collection তৈরি
4. ✅ Admin panel কাজ করছে
5. ✅ Website চলছে

**এখন শুধু products যোগ করুন এবং আপনার affiliate website চালু করুন!**

---

## 📞 দ্রুত সাহায্য

**কোনো প্রশ্ন থাকলে:**
- README.md পড়ুন
- FIREBASE_SETUP.md দেখুন
- Browser console এ error চেক করুন (F12)

**Happy affiliate marketing! 🚀**
