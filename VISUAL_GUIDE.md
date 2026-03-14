# Visual Setup Guide

## Step-by-Step Firebase Connection

### Step 1: Create Firebase Project
```
Firebase Console
    ↓
Click "Add Project"
    ↓
Enter "product-picks"
    ↓
Create Project
    ↓
Wait for completion
```

### Step 2: Get Credentials
```
Firebase Console
    ↓
Click Gear Icon (Settings)
    ↓
Project Settings
    ↓
Scroll to "Your apps"
    ↓
Click Web Icon
    ↓
Copy Config Object
```

### Step 3: Create .env.local
```
Project Root
    ↓
Create .env.local file
    ↓
Paste Firebase config:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Step 4: Create Firestore Database
```
Firebase Console
    ↓
Firestore Database
    ↓
Click "Create Database"
    ↓
Choose "Start in test mode"
    ↓
Select Region
    ↓
Click "Create"
```

### Step 5: Create Products Collection
```
Firestore Database
    ↓
Click "Start Collection"
    ↓
Collection ID: "products"
    ↓
Click "Next"
    ↓
Click "Auto ID"
    ↓
Add Test Product
```

### Step 6: Run Application
```
Terminal
    ↓
npm install
    ↓
npm run dev
    ↓
Open http://localhost:5173
```

## Adding Products - Visual Flow

### Via Admin Panel
```
http://localhost:5173/admin
    ↓
Fill Product Form
    ├─ Product Name
    ├─ Description
    ├─ Image URL
    ├─ Rating (1-5)
    ├─ Category
    ├─ Affiliate Link
    ├─ Featured (checkbox)
    └─ Trending (checkbox)
    ↓
Click "Add Product"
    ↓
Success Message
    ↓
Product appears on Home page
```

### Via Firebase Console
```
Firebase Console
    ↓
Firestore Database
    ↓
products collection
    ↓
Click "Add Document"
    ↓
Fill Fields
    ├─ name
    ├─ description
    ├─ image
    ├─ rating
    ├─ category
    ├─ affiliate_link
    ├─ featured
    ├─ trending
    └─ created_at
    ↓
Click "Save"
    ↓
Product appears on website
```

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    User Interface                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Home Page  │  │  Admin Panel  │  │ Reviews Page │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                   React Components                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ ProductCard  │  │ ProductGrid  │  │ CategoryFilter│ │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                  Firebase Config                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │  src/config/firebase.js                          │  │
│  │  - Initialize Firebase                           │  │
│  │  - Connect to Firestore                          │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│              Firestore Database                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │  products collection                             │  │
│  │  ├─ doc1: Wireless Headphones                   │  │
│  │  ├─ doc2: Gaming Keyboard                       │  │
│  │  ├─ doc3: USB-C Cable                           │  │
│  │  └─ ...                                          │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## Product Card Structure

```
┌─────────────────────────────────┐
│      Product Card               │
├─────────────────────────────────┤
│                                 │
│    ┌─────────────────────────┐  │
│    │                         │  │
│    │    Product Image        │  │
│    │                         │  │
│    │  [Featured Badge]       │  │
│    └─────────────────────────┘  │
│                                 │
│  Product Name                   │
│  Category                       │
│  Description...                 │
│                                 │
│  ★★★★★ 4.8/5                   │
│                                 │
│  [Check Latest Price on Amazon] │
│                                 │
└─────────────────────────────────┘
```

## Admin Form Layout

```
┌──────────────────────────────────────┐
│      Admin Panel - Add Products      │
├──────────────────────────────────────┤
│                                      │
│  Product Name *                      │
│  [________________]                  │
│                                      │
│  Description *                       │
│  [_____________________________]      │
│  [_____________________________]      │
│                                      │
│  Image URL *                         │
│  [________________]                  │
│  [Image Preview]                     │
│                                      │
│  Rating (1-5) *  │  Category *       │
│  [_____]         │  [_____]          │
│                                      │
│  Affiliate Link *                    │
│  [________________]                  │
│                                      │
│  ☐ Featured Product                  │
│  ☐ Trending Product                  │
│                                      │
│  [Add Product]                       │
│                                      │
└──────────────────────────────────────┘
```

## Website Navigation

```
┌─────────────────────────────────────────────────────┐
│  Best Product Picks                                 │
├─────────────────────────────────────────────────────┤
│  Home | Reviews | About | Contact | Affiliate Info │
└─────────────────────────────────────────────────────┘
                          ↓
        ┌─────────────────┼─────────────────┐
        ↓                 ↓                 ↓
    ┌────────┐        ┌────────┐      ┌────────┐
    │ Home   │        │Reviews │      │ About  │
    │        │        │        │      │        │
    │Featured│        │ All    │      │Mission │
    │Products│        │Products│      │Values  │
    │        │        │        │      │        │
    │Trending│        │Filter  │      │Affiliate│
    │Products│        │by Cat. │      │Info    │
    │        │        │        │      │        │
    │All     │        │        │      │        │
    │Products│        │        │      │        │
    └────────┘        └────────┘      └────────┘
        ↓                 ↓                 ↓
    ┌────────┐        ┌────────┐      ┌────────┐
    │Contact │        │Privacy │      │Affiliate│
    │        │        │Policy  │      │Disclosure
    │Form    │        │        │      │        │
    │        │        │        │      │        │
    └────────┘        └────────┘      └────────┘
```

## Firestore Query Examples

### Get All Products
```
Firestore
    ↓
Collection: products
    ↓
Order by: created_at (descending)
    ↓
Return: All documents
```

### Get Featured Products
```
Firestore
    ↓
Collection: products
    ↓
Where: featured == true
    ↓
Order by: created_at (descending)
    ↓
Return: Featured documents
```

### Get Products by Category
```
Firestore
    ↓
Collection: products
    ↓
Where: category == "Electronics"
    ↓
Order by: created_at (descending)
    ↓
Return: Electronics products
```

## Image URL Sources

```
Free Image Sources
    ├─ Unsplash
    │  └─ https://unsplash.com/
    │     └─ Copy image URL
    │
    ├─ Pexels
    │  └─ https://www.pexels.com/
    │     └─ Copy image URL
    │
    ├─ Pixabay
    │  └─ https://pixabay.com/
    │     └─ Copy image URL
    │
    └─ Firebase Storage
       └─ Upload image
          └─ Get download URL
```

## Deployment Flow

```
Local Development
    ↓
npm run dev
    ↓
Test on http://localhost:5173
    ↓
Push to GitHub
    ↓
Connect to Vercel/Netlify
    ↓
Add Environment Variables
    ↓
Deploy
    ↓
Live Website!
```

## Success Checklist

```
✓ Firebase project created
✓ Firestore database created
✓ Products collection created
✓ .env.local configured
✓ npm install completed
✓ npm run dev running
✓ Website accessible at localhost:5173
✓ Admin panel working
✓ First product added
✓ Product visible on home page
✓ Ready to deploy!
```
