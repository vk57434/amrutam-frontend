import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="container section">
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/products" className="btn btn-primary">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container section cart-page">
        <h1>Your Cart</h1>
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item card" key={item.id}>
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>

                <div className="cart-item-actions">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, Number(e.target.value))
                    }
                  />
                  <button
                    className="btn btn-text"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="cart-summary card">
            <h2>Summary</h2>
            <p>Subtotal: ₹{subtotal}</p>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
            <Link to="/products" className="btn btn-outline">
              Continue Shopping
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Cart;
