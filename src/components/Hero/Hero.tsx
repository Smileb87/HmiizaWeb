// src/components/Hero/Hero.tsx

import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <h1>Découvrez le Luxe</h1>
      <p>Les meilleurs articles de luxe au Maroc.</p>
      <button className="hero-cta">Explorez maintenant</button>
    </div>
  );
};

export default Hero;
