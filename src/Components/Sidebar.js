import React, { useState } from "react";
import "../Styles/Sidebar.css";

const Sidebar = () => {
  const [filters, setFilters] = useState({
    "Ideal For": "All",
    Occasion: "All",
    Work: "All",
    Fabric: "All",
    Segment: "All",
    "Suitable For": "All",
    "Raw Materials": "All",
    Pattern: "All",
  });

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="sidebar">
      <label className="custom-checkbox">
        <input type="checkbox" />
        Customizable
      </label>
      <div className="filter">
        {Object.keys(filters).map((filter) => (
          <div key={filter} className="filter-item">
            <div
              className="filter-title"
              onClick={() => toggleSection(filter)}
            >
              {filter}
              <span className="arrow">
                {openSections[filter] ? "▲" : "▼"}
              </span>
            </div>
            {openSections[filter] && (
              <div className="filter-content">{filters[filter]}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
