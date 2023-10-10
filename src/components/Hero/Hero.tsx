import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    // Simulate the animation duration (5 seconds in this case)
    const animationDuration = 5000; // 5 seconds in milliseconds

    // Wait for the animation to complete and then show the CTA
    const timer = setTimeout(() => {
      setShowCTA(true);
    }, animationDuration);

    // Clear the timer when the component unmounts to prevent memory leaks
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="hero-container">
      <h1>Découvrez le Luxe</h1>
      <p>Les meilleurs articles de luxe au Maroc.</p>

      {showCTA && <button className="hero-cta">Explorez maintenant</button>}
    </div>
  );
};

export default Hero;
