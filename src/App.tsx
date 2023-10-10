import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
// Assuming you have placeholders for these pages. You can add real components as you build them.
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import Account from "./pages/Account/Account";
import AddProduct from "./pages/AddProduct/AddProduct";
import Contact from "./pages/Contact/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/account" element={<Account />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/contact" element={<Contact />} />
          {/* Vous pouvez ajouter d'autres routes au fur et à mesure que votre application se développe */}
        </Routes>

        {/* You might want to add a Footer component later */}
      </div>
    </Router>
  );
}

export default App;
