import { Link } from "react-router-dom";
import { orders } from "../data/orders.js";

const Orders = () => {
  return (
    <div className="page">
      <div className="container section">
        <h1>My Orders</h1>

        {orders.length === 0 ? (
          <p>You have not placed any orders yet.</p>
        ) : (
          <div className="card" style={{ marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "0.5rem 0" }}>Order ID</th>
                  <th style={{ textAlign: "left", padding: "0.5rem 0" }}>Date</th>
                  <th style={{ textAlign: "left", padding: "0.5rem 0" }}>Status</th>
                  <th style={{ textAlign: "right", padding: "0.5rem 0" }}>Total</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} style={{ borderTop: "1px solid #eee" }}>
                    <td style={{ padding: "0.5rem 0" }}>{order.id}</td>
                    <td style={{ padding: "0.5rem 0" }}>{order.date}</td>
                    <td style={{ padding: "0.5rem 0" }}>{order.status}</td>
                    <td style={{ textAlign: "right", padding: "0.5rem 0" }}>
                      ₹{order.total}
                    </td>
                    <td style={{ textAlign: "right", padding: "0.5rem 0" }}>
                      <Link to={`/orders/${order.id}`} className="btn btn-outline">
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
