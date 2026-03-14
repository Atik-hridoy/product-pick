# Firebase Setup Guide

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: "product-picks"
4. Click "Create project"
5. Wait for project to be created

## Step 2: Get Firebase Credentials

1. In Firebase Console, click the gear icon (Settings)
2. Go to "Project settings"
3. Scroll down to "Your apps" section
4. Click "Web" icon to add a web app
5. Enter app name: ""
6. Copy the Firebase config object

## Step 3: Set Up Environment Variables

1. Create `.env.local` file in project root
2. Add your Firebase credentials:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Step 4: Create Firestore Database

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select region closest to you
5. Click "Create"

## Step 5: Create Products Collection

1. In Firestore, click "Start collection"
2. Collection ID: `products`
3. Click "Next"
4. Click "Auto ID" to create first document
5. Add these fields:

```
name: (string) - Product name
description: (string) - Product description
image: (string) - Image URL
rating: (number) - Rating 1-5
category: (string) - Product category
affiliate_link: (string) - Amazon affiliate link
featured: (boolean) - Is featured product
trending: (boolean) - Is trending product
created_at: (timestamp) - Creation date
```

## Step 6: Enable Firebase Storage (for image uploads)

1. Go to "Storage" in Firebase Console
2. Click "Get started"
3. Choose "Start in test mode"
4. Select region
5. Click "Done"

## Step 7: Set Firestore Security Rules

Go to Firestore → Rules and replace with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to read products
    match /products/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Allow authenticated users to write
    match /admin/{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## Step 8: Set Storage Security Rules

Go to Storage → Rules and replace with:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /products/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Step 9: Enable Authentication

1. Go to "Authentication"
2. Click "Get started"
3. Click "Email/Password"
4. Enable it
5. Add your email as a user

## Step 10: Test Connection

1. Run `npm run dev`
2. Check browser console for errors
3. If no errors, Firebase is connected!

## Adding Products via Firebase Console

1. Go to Firestore Database
2. Click on "products" collection
3. Click "Add document"
4. Fill in the fields:
   - name: "Product Name"
   - description: "Product description"
   - image: "https://image-url.jpg"
   - rating: 4.5
   - category: "Electronics"
   - affiliate_link: "https://amazon.com/dp/ASIN?tag=yourtag-20"
   - featured: true/false
   - trending: true/false
   - created_at: (auto-generated)

## Firestore Document Structure

```
products/
├── doc1/
│   ├── name: "Wireless Headphones"
│   ├── description: "High quality wireless headphones"
│   ├── image: "https://..."
│   ├── rating: 4.8
│   ├── category: "Electronics"
│   ├── affiliate_link: "https://amazon.com/..."
│   ├── featured: true
│   ├── trending: false
│   └── created_at: timestamp
├── doc2/
│   └── ...
```

## Troubleshooting

**Products not loading?**
- Check Firebase credentials in .env.local
- Verify Firestore rules allow read access
- Check browser console for errors

**Can't add products?**
- Verify you're authenticated
- Check Firestore rules allow write access
- Ensure all required fields are filled

**Images not showing?**
- Verify image URLs are correct
- Check CORS settings if using external images
- Use Firebase Storage for reliable image hosting
