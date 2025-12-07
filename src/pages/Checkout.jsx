import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const { user, updateAddress } = useAuth();
  const navigate = useNavigate();

  // 1) If not logged in, don't allow checkout
  if (!user) {
    return (
      <div className="container section">
        <h1>Checkout</h1>
        <p>You need to login before placing an order.</p>
        <Link to="/login" className="btn btn-primary">
          Go to Login
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container section">
        <h1>Checkout</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Only save ONE address per user
    const form = e.target;
    const address = {
      fullName: form.fullName.value,
      phone: form.phone.value,
      line: form.address.value,
      city: form.city.value,
      pincode: form.pincode.value,
    };

    updateAddress(address);    // store in AuthContext
    clearCart();
    navigate("/orders/ORD-DEMO");
  };

  return (
    <div className="page">
      <div className="container section checkout-page">
        <h1>Checkout</h1>

        {/* if address already exists, show it as the ONLY address */}
        {user.address && (
          <div className="card" style={{ marginBottom: "1rem" }}>
            <h2>Saved Address</h2>
            <p>{user.address.fullName}</p>
            <p>{user.address.line}</p>
            <p>
              {user.address.city} - {user.address.pincode}
            </p>
            <p>Phone: {user.address.phone}</p>
          </div>
        )}

        <div className="checkout-layout">
          {/* If you want user to edit/change address, keep this form.
              This will always overwrite the previous one, so only ONE address exists. */}
          <form className="card" onSubmit={handleSubmit}>
            <h2>Shipping Details</h2>

            <label>
              Full Name
              <input
                name="fullName"
                type="text"
                defaultValue={user.address?.fullName || user.name}
                required
              />
            </label>

            <label>
              Phone Number
              <input
                name="phone"
                type="text"
                maxLength={10}
                required
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, "");
                }}
                defaultValue={user.address?.phone || ""}
              />
            </label>

            <label>
              Address
              <textarea
                name="address"
                required
                defaultValue={user.address?.line || ""}
              />
            </label>

            <label>
              City
              <input
                name="city"
                type="text"
                required
                defaultValue={user.address?.city || ""}
              />
            </label>

            <label>
              Pincode
              <input
                name="pincode"
                type="text"
                maxLength={6}
                required
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, "");
                }}
                defaultValue={user.address?.pincode || ""}
              />
            </label>

            <h2>Payment</h2>
            <label>
              <input type="radio" name="payment" defaultChecked /> UPI (demo)
            </label>
            <label>
              <input type="radio" name="payment" /> Card (demo)
            </label>

            <button className="btn btn-primary" type="submit">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
