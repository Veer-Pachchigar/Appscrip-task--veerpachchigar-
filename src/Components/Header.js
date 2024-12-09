import React, { useState } from "react";
import "../Styles/Header.css";
import search from "../assets/search-normal.png";
import heart from "../assets/heart.png";
import cart from "../assets/shopping-bag.png";
import profile from "../assets/profile.png";
import logo from "../assets/Logo-1.png";  // Import Logo-1.png

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the language dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="main-header">
        <div className="logo-container">
          {/* Logo Image */}
          <img src={logo} alt="Logo" className="logo-img" />
        </div>

        {/* Centered LOGO Text */}
        <div className="logo-text">
          <strong>LOGO</strong>
        </div>

        <div className="header-right">
          <div className="icons">
          <img src={search} className="icon" alt="Search icon" />
            <img src={heart} className="icon" alt="heart icon" />
            <img src={cart} className="icon" alt="cart icon"/>
            <img src={profile} className="icon" alt="profile icon"/>
            {/* Replace image with text for language */}
            <div className="language" onClick={toggleDropdown}>
              <span>ENG▼</span>
            </div>
          </div>

          {isDropdownOpen && (
            <div className="dropdown">
              <a href="eng">ENG</a>
              <a href="esp">ESP</a>
              <a href="fra">FRA</a>
              <a href="deu">DEU</a>
            </div>
          )}
        </div>
      </div>

      <nav className="nav-menu">
        <a href="#shop"><strong>SHOP</strong></a>
        <a href="#shop"><strong>SKILLS</strong></a>
        <a href="#shop"><strong>STORIES</strong></a>
        <a href="#shop"><strong>ABOUT</strong></a>
        <a href="#shop"><strong>CONTACT US</strong></a>
      </nav>
    </header>
  );
};

export default Header;
