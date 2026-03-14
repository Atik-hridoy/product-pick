import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Best Product Picks</h3>
            <p>Honest product recommendations and reviews to help you make better purchasing decisions.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="affiliate-notice">
            <strong>Affiliate Disclosure:</strong> As an Amazon Associate I earn from qualifying purchases.
          </p>
          <p>&copy; {currentYear} Best Product Picks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
