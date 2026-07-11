import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>See It. Tap It. Eat It</h2>
        <p>
          Craving your favorite meal? Skip the hassle and get exactly what you
          want with our app. We connect you to the best local restaurants,
          making it easier than ever to browse menus, customize your order, and
          pay securely.
        </p>
        <button>Menu</button>
      </div>
    </div>
  );
};

export default Header;
