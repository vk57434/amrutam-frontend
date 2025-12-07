import { useParams } from "react-router-dom";
import { products } from "../data/products.js";
import { useCart } from "../context/CartContext.jsx";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container section">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container section product-details">
        <div className="product-image-large">IMG</div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-price">₹{product.price}</p>
          <p>
            {/* You can expand this with real content from Figma */}
            This is a detailed description of the product. Replace this text
            according to the Figma copy.
          </p>

          <button
            className="btn btn-primary"
            onClick={() => addToCart(product, 1)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
