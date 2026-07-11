import "./navbar.css";
import logo from "../../image/project_logo.png";
import cart from "../../image/cart.png";
import search from "../../image/search.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

function Navbar({ setShowlogin }) {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("Home");
  const [showDropdown, setShowDropdown] = useState(false);

  const { token, setToken } = useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <li onClick={() => setMenu("Home")}>
          <Link to="/" className={menu === "Home" ? "active" : ""}>
            Home
          </Link>
        </li>

        <li onClick={() => setMenu("Menu")}>
          <Link to="/menu" className={menu === "Menu" ? "active" : ""}>
            Menu
          </Link>
        </li>

        <li onClick={() => setMenu("Contact-Us")}>
          <Link to="/contact" className={menu === "Contact-Us" ? "active" : ""}>
            Contact-Us
          </Link>
        </li>

        <li onClick={() => setMenu("About")}>
          <Link to="/about" className={menu === "About" ? "active" : ""}>
            About
          </Link>
        </li>
      </ul>

      <div className="navbar-right">
        <div className="navbar-cart">
          <Link to="/search">
            <img src={search} alt="search" className="cart" />
          </Link>
          <div className="dot"></div>
        </div>

        <div className="navbar-cart">
          <Link to="/cart">
            <img src={cart} alt="cart" className="cart" />
          </Link>
          <div className="dot"></div>
        </div>

        {!token ? (
          <button onClick={() => setShowlogin(true)} className="loginbut">
            Signup
          </button>
        ) : (
          <div
            className="navbar-profile"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <img src={assets.profile_icon} alt="profile" />
            {showDropdown && (
              <ul className="nav-profile-dropdown">
                <li onClick={() => navigate("/myorders")}>
                  <img src={assets.bag_icon} alt="" />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <img src={assets.logout_icon} alt="" />
                  <p>Logout</p>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
