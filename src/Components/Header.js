import React, { useState } from "react";
import "../Styles/Header.css";
import search from "../assets/search-normal.png"
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
        <div className="logo-text"> <strong>LOGO</strong> </div>

        <div className="header-right">
          <div className="icons">
            <img src={search} />
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
        <a href="#shop"> <strong>SHOP</strong> </a>
        <a href="#shop"> <strong>SKILLS</strong> </a>
        <a href="#shop"> <strong>STORIES</strong> </a>
        <a href="#shop"> <strong>ABOUT</strong> </a>
        <a href="#shop"> <strong>CONTACT US</strong> </a>
      </nav>
    </header>
  );
};

export default Header;
