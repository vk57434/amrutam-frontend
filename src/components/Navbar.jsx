import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo">
          Amrutam
        </Link>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/orders">My Orders</NavLink>
        </nav>

        <div className="nav-actions">
          <NavLink to="/cart" className="cart-link">
            Cart ({cartCount})
          </NavLink>

          {user ? (
            <>
              <span>Hi, {user.name.split(" ")[0]}</span>
              <button className="btn btn-outline" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" className="btn btn-outline">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
