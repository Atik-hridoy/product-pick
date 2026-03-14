import './ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.featured && <span className="featured-badge">Featured</span>}
        {product.trending && <span className="trending-badge">Trending</span>}
      </div>

      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        
        <p className="product-category">{product.category}</p>
        
        <p className="product-description">{product.description}</p>

        <a
          href={product.affiliate_link}
          target="_blank"
          rel="nofollow sponsored"
          className="check-price-btn"
        >
          Check Latest Price on Amazon
        </a>
      </div>
    </div>
  );
}
