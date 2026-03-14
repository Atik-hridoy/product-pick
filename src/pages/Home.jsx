import { useState } from 'react';
import { products as allProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Extract unique categories
  const categories = [...new Set(allProducts.map(p => p.category))];

  // Filter products by category
  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  const featuredProducts = allProducts.filter(p => p.featured);
  const trendingProducts = allProducts.filter(p => p.trending);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Best Product Picks</h1>
          <p>Honest product recommendations and reviews to help you make better choices</p>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="section">
          <div className="container">
            <h2>Featured Products</h2>
            <div className="grid">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trending Products */}
      {trendingProducts.length > 0 && (
        <section className="section">
          <div className="container">
            <h2>Trending Now</h2>
            <div className="grid">
              {trendingProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Products with Category Filter */}
      <section className="section">
        <div className="container">
          <h2>All Products</h2>

          <div className="category-filter">
            <button
              className={selectedCategory === 'all' ? 'active' : ''}
              onClick={() => setSelectedCategory('all')}
            >
              All Categories
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                className={selectedCategory === cat ? 'active' : ''}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center">No products found.</p>
          )}
        </div>
      </section>
    </div>
  );
}
