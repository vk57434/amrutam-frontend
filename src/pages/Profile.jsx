import { Link } from "react-router-dom";

const Profile = () => {
  // demo user – in real app you’d get this from auth
  const user = {
    name: "Vivek Kumar",
    email: "vivek@example.com",
    phone: "+91 98765 43210",
    city: "Ahmedabad",
    state: "Gujarat",
  };

  return (
    <div className="page">
      <div className="container section">
        <h1>My Profile</h1>

        <div className="card" style={{ marginTop: "1rem" }}>
          <h2>Account Details</h2>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Location:</strong> {user.city}, {user.state}
          </p>

          <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
            <button className="btn btn-outline">Edit Profile (UI only)</button>
            <Link to="/orders" className="btn btn-primary">
              View Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
