import React from "react";
import "../Styles/ProductGrid.css";

const ProductGrid = ({ products }) => (
  <div className="product-grid">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.title} className="product-image" />
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
      </div>
    ))}
  </div>
);

export default ProductGrid;
