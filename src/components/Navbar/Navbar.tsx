// src/components/Navbar/Navbar.tsx

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <img src={logo} alt="Hmiiza Logo" className="navbar-logo" />
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/products">Produits</Link>
          </li>
          <li>
            <Link to="/account">Mon Compte</Link>
          </li>
          <li>
            <Link to="/add-product">Ajouter un produit</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
