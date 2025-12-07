// src/components/ProductCard.jsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  

  return (
    <div className="card product-card">
      
      {/* Display the real product image */}
      <img
        src={product.image}
        alt={product.name}
        className="product-img"
      />

      <h3 className="product-title">{product.name}</h3>
      <p className="product-price">₹{product.price}</p>
      <p className="product-desc">{product.shortDescription}</p>

      <div className="product-actions">
        <button
          className="btn btn-outline"
          onClick={() => addToCart(product, 1)}
        >
          Add to Cart
        </button>
        <Link to={`/products/${product.id}`} className="btn btn-primary">
          View
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
