import React, { useState } from "react";
import "../Styles/DiscoverSection.css";

const DiscoverSection = () => {
  const [selectedOption, setSelectedOption] = useState("Recommended");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section className="discover-section">
      <h1 className="discover-title">DISCOVER OUR PRODUCTS</h1>
      <p className="discover-description">
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br />
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
      <div className="dropdown-container">
        <select
          value={selectedOption}
          onChange={handleDropdownChange}
          className="dropdown-select"
        >
          <option value="recommended">RECOMMENDED</option>
          <option value="Newest First">Newest First</option>
          <option value="Popular">Popular</option>
          <option value="Price: High to Low">Price: High to Low</option>
          <option value="Price: Low to High">Price: Low to High</option>
        </select>
      </div>
    </section>
  );
};

export default DiscoverSection;
