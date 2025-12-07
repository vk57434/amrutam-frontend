import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    login({ name, email });       // set user in context
    navigate("/checkout");        // go to checkout after login
  };

  return (
    <div className="page">
      <div className="container section">
        <div className="card" style={{ maxWidth: 400, margin: "0 auto" }}>
          <h1>Login</h1>
          <form onSubmit={handleSubmit} className="form">
            <label>
              Full Name
              <input name="name" type="text" required />
            </label>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
            <label>
              Password
              <input type="password" required />
            </label>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", marginTop: "0.75rem" }}
            >
              Login
            </button>
          </form>

          <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
            Don&apos;t have an account?{" "}
            <Link to="/signup" style={{ color: "#176b5b" }}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
