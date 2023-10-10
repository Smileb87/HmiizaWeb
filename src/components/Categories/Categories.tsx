// src/components/Categories/Categories.tsx

import React from "react";
import "./Categories.css";

const Categories: React.FC = () => {
  const categoryList = [
    "Montres",
    "Bijoux",
    "Sacs",
    "Vêtements",
    "Accessoires",
    // Add other categories as needed
  ];

  return (
    <div className="categories-container">
      <h2>Catégories</h2>
      <ul>
        {categoryList.map((category, index) => (
          <li key={index}>
            <a href={`/products/${category.toLowerCase()}`}>{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
