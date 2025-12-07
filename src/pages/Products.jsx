import { products } from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";

const Products = () => {
  return (
    <div className="page">
      <div className="container section">
        <header className="section-header">
          <h1>All Products</h1>
        </header>

        {/* You can add filters/search UI here */}

        <div className="grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
