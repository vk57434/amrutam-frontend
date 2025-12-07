import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // demo only
    navigate("/profile");
  };

  return (
    <div className="page">
      <div className="container section">
        <div className="card" style={{ maxWidth: 450, margin: "0 auto" }}>
          <h1>Create Account</h1>
          <p style={{ marginBottom: "1rem" }}>
            Join Amrutam and start your wellness journey.
          </p>
          <form onSubmit={handleSubmit} className="form">
            <label>
              Full Name
              <input type="text" required />
            </label>
            <label>
              Email
              <input type="email" required />
            </label>
            <label>
              Password
              <input type="password" required />
            </label>
            <label>
              Confirm Password
              <input type="password" required />
            </label>

            <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "0.75rem" }}>
              Sign Up
            </button>
          </form>

          <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#176b5b" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
