# Firebase Firestore Structure

## Database Schema

```
Firestore Database
└── products (Collection)
    ├── doc1 (Document)
    │   ├── name: "Wireless Headphones" (string)
    │   ├── description: "High quality wireless headphones..." (string)
    │   ├── image: "https://images.unsplash.com/..." (string)
    │   ├── rating: 4.8 (number)
    │   ├── category: "Electronics" (string)
    │   ├── affiliate_link: "https://amazon.com/dp/B0G8J34WF5?tag=yourtag-20" (string)
    │   ├── featured: true (boolean)
    │   ├── trending: false (boolean)
    │   └── created_at: 2024-03-15T10:30:00Z (timestamp)
    │
    ├── doc2 (Document)
    │   ├── name: "Gaming Keyboard"
    │   ├── description: "Mechanical gaming keyboard..."
    │   ├── image: "https://images.unsplash.com/..."
    │   ├── rating: 4.6
    │   ├── category: "Gaming"
    │   ├── affiliate_link: "https://amazon.com/dp/B0H5K8L2M9?tag=yourtag-20"
    │   ├── featured: false
    │   ├── trending: true
    │   └── created_at: 2024-03-14T15:45:00Z
    │
    └── doc3 (Document)
        ├── name: "USB-C Cable"
        ├── description: "Fast charging USB-C cable..."
        ├── image: "https://images.unsplash.com/..."
        ├── rating: 4.5
        ├── category: "Accessories"
        ├── affiliate_link: "https://amazon.com/dp/B0J2N3P4Q5?tag=yourtag-20"
        ├── featured: true
        ├── trending: true
        └── created_at: 2024-03-13T08:20:00Z
```

## Field Descriptions

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| name | string | Product name | "Wireless Headphones" |
| description | string | Product description | "High quality wireless headphones with noise cancellation" |
| image | string | Image URL | "https://images.unsplash.com/photo-1505740420928-5e560c06d30e" |
| rating | number | Rating 1-5 | 4.8 |
| category | string | Product category | "Electronics" |
| affiliate_link | string | Amazon affiliate link | "https://amazon.com/dp/B0G8J34WF5?tag=yourtag-20" |
| featured | boolean | Show on featured section | true |
| trending | boolean | Show on trending section | false |
| created_at | timestamp | Creation date | 2024-03-15T10:30:00Z |

## How Data Flows

```
Admin Panel (Add Product)
        ↓
    Form Data
        ↓
Firebase Firestore
        ↓
React Component (Home.jsx)
        ↓
ProductCard Component
        ↓
Display on Website
```

## Firestore Queries

### Get All Products
```javascript
const q = query(collection(db, 'products'), orderBy('created_at', 'desc'));
const snapshot = await getDocs(q);
```

### Get Featured Products
```javascript
const q = query(
  collection(db, 'products'),
  where('featured', '==', true),
  orderBy('created_at', 'desc')
);
const snapshot = await getDocs(q);
```

### Get Products by Category
```javascript
const q = query(
  collection(db, 'products'),
  where('category', '==', 'Electronics'),
  orderBy('created_at', 'desc')
);
const snapshot = await getDocs(q);
```

### Add New Product
```javascript
await addDoc(collection(db, 'products'), {
  name: "Product Name",
  description: "Description",
  image: "https://...",
  rating: 4.5,
  category: "Electronics",
  affiliate_link: "https://amazon.com/...",
  featured: true,
  trending: false,
  created_at: serverTimestamp()
});
```

## Firestore Rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to read products
    match /products/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Storage Structure (Optional)

If using Firebase Storage for images:

```
Firebase Storage
└── products/
    ├── product1.jpg
    ├── product2.jpg
    ├── product3.jpg
    └── ...
```

## Example Products

### Product 1: Wireless Headphones
```json
{
  "name": "Wireless Noise-Cancelling Headphones",
  "description": "Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality.",
  "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  "rating": 4.8,
  "category": "Electronics",
  "affiliate_link": "https://amazon.com/dp/B0G8J34WF5?tag=yourtag-20",
  "featured": true,
  "trending": false,
  "created_at": "2024-03-15T10:30:00Z"
}
```

### Product 2: Gaming Keyboard
```json
{
  "name": "Mechanical Gaming Keyboard RGB",
  "description": "High-performance mechanical keyboard with customizable RGB lighting and programmable keys.",
  "image": "https://images.unsplash.com/photo-1587829191301-4b5556b1047e",
  "rating": 4.6,
  "category": "Gaming",
  "affiliate_link": "https://amazon.com/dp/B0H5K8L2M9?tag=yourtag-20",
  "featured": false,
  "trending": true,
  "created_at": "2024-03-14T15:45:00Z"
}
```

### Product 3: USB-C Cable
```json
{
  "name": "Fast Charging USB-C Cable",
  "description": "Durable USB-C cable with fast charging support and data transfer capabilities.",
  "image": "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5",
  "rating": 4.5,
  "category": "Accessories",
  "affiliate_link": "https://amazon.com/dp/B0J2N3P4Q5?tag=yourtag-20",
  "featured": true,
  "trending": true,
  "created_at": "2024-03-13T08:20:00Z"
}
```

## Data Types Reference

| Type | Example | Notes |
|------|---------|-------|
| string | "Product Name" | Text data |
| number | 4.8 | Decimal or integer |
| boolean | true/false | True or false |
| timestamp | 2024-03-15T10:30:00Z | Auto-generated by serverTimestamp() |
| array | ["tag1", "tag2"] | Not used in current schema |
| map | {nested: "data"} | Not used in current schema |

## Scaling

### Current Capacity
- Supports 1000+ products
- Real-time updates
- Fast queries with indexes

### Future Optimization
- Add indexes for category queries
- Implement pagination
- Cache frequently accessed data
- Use Cloud Functions for complex operations

## Backup & Recovery

### Automatic Backups
- Firebase automatically backs up data
- Accessible via Firebase Console

### Manual Export
1. Go to Firestore Database
2. Click menu → Export/Import
3. Choose "Export"
4. Select "products" collection
5. Download as JSON

## Monitoring

### View Database Usage
1. Go to Firebase Console
2. Click "Firestore Database"
3. Go to "Usage" tab
4. Monitor reads, writes, deletes

### Set Alerts
1. Go to Google Cloud Console
2. Set up billing alerts
3. Monitor costs

## Cost Estimation

### Free Tier (Spark Plan)
- 50,000 reads/day
- 20,000 writes/day
- 20,000 deletes/day
- 1 GB storage

### Paid Tier (Blaze Plan)
- Pay per operation
- Typical cost: $0.06 per 100,000 reads
- Suitable for production

## Next Steps

1. Create Firestore database
2. Create "products" collection
3. Add test products
4. Connect to React app
5. Start adding products via admin panel
