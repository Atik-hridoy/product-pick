# 🔧 Firebase Billing Setup - ধাপে ধাপে গাইড

## সমস্যা: "Database create করতে পারছি না"

**কারণ:** Firebase project এ billing account যুক্ত নেই।

**সমাধান:** এই গাইড অনুসরণ করুন (৫ মিনিট)

---

## ✅ ধাপ ১: Firebase Console খুলুন

1. এই লিংক খুলুন: https://console.firebase.google.com/
2. আপনার Google account দিয়ে login করুন
3. আপনার project **"product-picks"** নির্বাচন করুন

---

## ✅ ধাপ ২: Project Settings খুলুন

1. বাম পাশে নিচে **গিয়ার আইকন** (⚙️) দেখবেন
2. **"Project Settings"** ক্লিক করুন

---

## ✅ ধাপ ৩: Billing ট্যাব খুলুন

1. উপরে ট্যাবগুলো দেখবেন: General, Users and permissions, Billing...
2. **"Billing"** ট্যাব ক্লিক করুন

---

## ✅ ধাপ ৪: Billing Account যুক্ত করুন

আপনি দুটি অপশন দেখবেন:

### অপশন A: যদি কোনো Billing Account না থাকে
1. **"Create billing account"** বাটন ক্লিক করুন
2. একটি নতুন উইন্ডো খুলবে (Google Cloud Console)
3. এই তথ্য পূরণ করুন:
   - **Account name**: আপনার নাম বা ব্যবসার নাম
   - **Country**: আপনার দেশ নির্বাচন করুন
   - **Address**: আপনার ঠিকানা
   - **Payment method**: ক্রেডিট কার্ড বা ডেবিট কার্ড যোগ করুন

4. **"Create billing account"** ক্লিক করুন

### অপশন B: যদি আগে থেকে Billing Account থাকে
1. **"Link billing account"** বাটন ক্লিক করুন
2. আপনার existing billing account নির্বাচন করুন
3. **"Link"** ক্লিক করুন

---

## ✅ ধাপ ৫: Billing Account Linked হয়েছে কিনা চেক করুন

1. Project Settings → Billing এ ফিরে যান
2. আপনার billing account এর নাম দেখা যাবে
3. সবুজ চেকমার্ক থাকবে

---

## ✅ ধাপ ৬: এখন Firestore Database তৈরি করুন

1. Firebase Console এ ফিরে যান
2. বাম পাশে **"Firestore Database"** খুঁজুন
3. **"Create database"** বাটন ক্লিক করুন

---

## ✅ ধাপ ৭: Database Mode নির্বাচন করুন

আপনি দুটি অপশন দেখবেন:
- **Start in production mode** (কঠোর নিরাপত্তা)
- **Start in test mode** (সহজ, শুরুর জন্য ভালো)

**আমরা বলছি:** **"Start in test mode"** নির্বাচন করুন

---

## ✅ ধাপ ৮: Region নির্বাচন করুন

আপনার কাছাকাছি region নির্বাচন করুন:

**বাংলাদেশের জন্য সেরা:**
- **asia-south1** (ভারত - দ্রুততম)
- **asia-southeast1** (সিঙ্গাপুর)

**অন্যান্য অপশন:**
- europe-west1 (ইউরোপ)
- us-central1 (আমেরিকা)

---

## ✅ ধাপ ৯: Database তৈরি করুন

1. Region নির্বাচন করার পর **"Create"** বাটন ক্লিক করুন
2. অপেক্ষা করুন (২-৩ মিনিট)
3. সবুজ চেকমার্ক দেখা যাবে যখন সম্পন্ন হবে

---

## ✅ ধাপ ১০: Products Collection তৈরি করুন

Database তৈরি হওয়ার পর:

1. **"Start collection"** বাটন ক্লিক করুন
2. Collection ID লিখুন: **`products`** (এক্সাক্ট এই নাম)
3. **"Next"** ক্লিক করুন

---

## ✅ ধাপ ১১: প্রথম Document যোগ করুন

1. **"Auto ID"** ক্লিক করুন (Firebase নিজে ID তৈরি করবে)
2. এই ফিল্ডগুলো যোগ করুন:

| Field Name | Type | Value |
|-----------|------|-------|
| name | String | Wireless Headphones |
| description | String | High quality wireless headphones |
| image | String | https://images.unsplash.com/photo-1505740420928-5e560c06d30e |
| rating | Number | 4.8 |
| category | String | Electronics |
| affiliate_link | String | https://amazon.com/dp/B0G8J34WF5?tag=yourtag-20 |
| featured | Boolean | true |
| trending | Boolean | false |

3. **"Save"** ক্লিক করুন

---

## ✅ ধাপ ১২: Website এ Product দেখুন

1. http://localhost:5173 খুলুন
2. আপনার product দেখা যাবে!

---

## 🎉 সম্পন্ন!

এখন আপনার website সম্পূর্ণ কাজ করছে:
- ✅ Firebase connected
- ✅ Firestore database তৈরি
- ✅ Products collection তৈরি
- ✅ প্রথম product যোগ হয়েছে
- ✅ Website এ দেখা যাচ্ছে

---

## 📝 আরও Products যোগ করুন

### দ্রুত উপায়: Admin Panel
```
http://localhost:5173/admin
```

### বিস্তারিত উপায়: Firebase Console
```
Firestore Database → products collection → Add document
```

---

## 🆘 সমস্যা হলে

### "Billing account link করতে পারছি না"
- ✅ Google account এ login আছে কিনা চেক করুন
- ✅ Payment method যোগ করেছেন কিনা চেক করুন
- ✅ দেশ সঠিক নির্বাচন করেছেন কিনা চেক করুন

### "Database তৈরি হচ্ছে না"
- ✅ Billing account linked আছে কিনা চেক করুন
- ✅ Region সঠিক নির্বাচন করেছেন কিনা চেক করুন
- ✅ ২-৩ মিনিট অপেক্ষা করুন

### "Product দেখা যাচ্ছে না"
- ✅ Firestore database তৈরি হয়েছে কিনা চেক করুন
- ✅ "products" collection আছে কিনা চেক করুন
- ✅ Browser refresh করুন (F5)
- ✅ Browser console খুলুন (F12) এবং error দেখুন

---

## 💡 গুরুত্বপূর্ণ টিপস

1. **Collection ID অবশ্যই "products" হতে হবে** (ছোট হাতের অক্ষর)
2. **Image URL HTTPS হতে হবে** (HTTP নয়)
3. **Rating ১-৫ এর মধ্যে হতে হবে**
4. **Affiliate link সঠিক হতে হবে**

---

## 🚀 এর পরে কি?

1. আরও products যোগ করুন (Admin Panel দিয়ে)
2. Featured/Trending products সেট করুন
3. Categories যোগ করুন
4. Website customize করুন
5. Deploy করুন (Vercel বা Firebase Hosting)

---

**এখনই শুরু করুন! আপনার affiliate website প্রায় প্রস্তুত! 🎉**
