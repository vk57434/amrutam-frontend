import { Link } from "react-router-dom";
import { products } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

const Home = () => {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>Holistic Ayurvedic Wellness with Amrutam</h1>
            <p>
              Explore authentic ayurvedic products crafted to support your
              daily health and well-being.
            </p>
            <Link to="/products" className="btn btn-primary">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <section className="container section">
        <header className="section-header">
          <h2>Popular Products</h2>
        </header>
        <div className="grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
