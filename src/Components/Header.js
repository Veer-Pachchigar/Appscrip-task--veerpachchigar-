import React, { useState } from "react";
import "../Styles/Header.css";
import logo from "../assets/Logo-1.png";  // Import Logo-1.png

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the language dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      {/* <div className="top-bar">
        <p>Lorem ipsum dolor | Lorem ipsum dolor | Lorem ipsum dolor</p>
      </div> */}
      <div className="main-header">
        <div className="logo-container">
          {/* Logo Image */}
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        
        {/* Centered LOGO Text */}
        <div className="logo-text">LOGO</div>

        <div className="header-right">
          <div className="icons">
            <i className="fas fa-search"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-user"></i>
          </div>
          <div className="language" onClick={toggleDropdown}>
            <i className="fas fa-globe"></i> {/* Language Icon */}
            {isDropdownOpen && (
              <div className="dropdown">
                <a href="#">ENG</a>
                <a href="#">ESP</a>
                <a href="#">FRA</a>
                <a href="#">DEU</a>
              </div>
            )}
          </div>
        </div>
      </div>
      <nav className="nav-menu">
        <a href="#shop">SHOP</a>
        <a href="#skills">SKILLS</a>
        <a href="#stories">STORIES</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT US</a>
      </nav>
    </header>
  );
};

export default Header;
