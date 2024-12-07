import React from "react";
import "../Styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* Badge Section */}
      <div className="product-badge">NEW PRODUCT</div>

      {/* Image Section */}
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>

      {/* Content Section */}
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-link">
          <a href="#">Sign in</a> or Create an account to see pricing
        </p>
      </div>

      {/* Wishlist Icon */}
      {product.isFavorite && (
        <div className="wishlist-icon">
          <i className="fas fa-heart"></i>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
