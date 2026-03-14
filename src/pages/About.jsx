import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <section className="about-header">
        <div className="container">
          <h1>About Best Product Picks</h1>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="content-box">
            <h2>Our Mission</h2>
            <p>
              Best Product Picks is dedicated to helping you discover and choose the best products for your needs. 
              We provide honest, unbiased reviews and recommendations to make your shopping experience better.
            </p>

            <h2>How We Work</h2>
            <p>
              We carefully select and review products across various categories. Each product is evaluated based on 
              quality, value, and customer feedback. Our goal is to help you make informed purchasing decisions.
            </p>

            <h2>Why Trust Us?</h2>
            <ul>
              <li>Honest and unbiased reviews</li>
              <li>Carefully curated product selection</li>
              <li>Focus on quality and value</li>
              <li>Transparent affiliate relationships</li>
              <li>Regular updates and new recommendations</li>
            </ul>

          </div>
        </div>
      </section>
    </div>
  );
}
