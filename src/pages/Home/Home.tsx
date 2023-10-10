// src/pages/Home/Home.tsx

import React from "react";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import logo from "../../assets/images/logo.png";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Animation */}
      <div className="home-animation">
        <img src={logo} alt="Hmiiza Logo" className="home-logo-animation" />
      </div>

      {/* Hero component */}
      <Hero />

      {/* Other content */}
      <Categories />
      <Footer />
      {/* Other sections/components as needed */}
    </div>
  );
};

export default Home;
