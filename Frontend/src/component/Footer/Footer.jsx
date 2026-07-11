import "./Footer.css";
import logo from "../../image/project_logo.png";
import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="logo" className="logo" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ullam
            quam cumque soluta ducimus cupiditate, veniam excepturi, omnis iusto
            corporis in labore libero consequuntur animi fugiat similique.
            Ratione, nostrum. Reprehenderit!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privarcy Policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+1-211-233-3333</li>
            <li>contactus@FeastFlow.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright 2025 &copy; FeastFlow.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
