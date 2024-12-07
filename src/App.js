import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../src/Components/Header";
import DiscoverSection from "../src/Components/DiscoverSection";
import Sidebar from "../src/Components/Sidebar";
import ProductCard from "../src/Components/ProductCard";
import Footer from "../src/Components/Footer";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const productsWithFavorites = response.data.map((product) => ({
          ...product,
          isFavorite: Math.random() > 0.5, // Randomly assign true/false
        }));
        setProducts(productsWithFavorites);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <DiscoverSection />
      <div className="container" style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ flex: 1, paddingLeft: "20px" }}>
          <div className="grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
