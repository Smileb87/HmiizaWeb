import React from "react";
import logo from "../../assets/images/logo.png";
import "./Footer.css"; // Import the CSS file for the Footer component

const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="Hmiiza Logo" className="navbar-logo" />
      </div>
      <div>© 2023 Hmiiza. Tous les droits sont réservés.</div>
    </footer>
  );
};

export default Footer;
