// src/pages/Home/Home.tsx

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Hero />
      <Categories />
      {/* Other sections/components as needed */}
    </div>
  );
};

export default Home;
