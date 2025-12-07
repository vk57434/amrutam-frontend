import { useParams, Link } from "react-router-dom";
import { orders } from "../data/orders.js";

const OrderDetails = () => {
  const { id } = useParams();
  const order = orders.find((o) => o.id === id) || orders[0]; // simple fallback demo

  if (!order) {
    return (
      <div className="container section">
        <h1>Order Details</h1>
        <p>Order not found.</p>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container section">
        <h1>Order {order.id}</h1>

        <div className="card" style={{ marginTop: "1rem" }}>
          <p>
            <strong>Date:</strong> {order.date}
          </p>
          <p>
            <strong>Status:</strong> {order.status}
          </p>
          <p>
            <strong>Payment Method:</strong> {order.paymentMethod}
          </p>
          <p>
            <strong>Delivery Address:</strong> {order.address}
          </p>
        </div>

        <div className="card" style={{ marginTop: "1rem" }}>
          <h2>Items</h2>
          {order.items.map((item) => (
            <div
              key={item.productId}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0.5rem 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <p style={{ textAlign: "right", marginTop: "0.75rem" }}>
            <strong>Total: ₹{order.total}</strong>
          </p>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <Link to="/orders" className="btn btn-outline">
            Back to Orders
          </Link>{" "}
          <Link to="/products" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
