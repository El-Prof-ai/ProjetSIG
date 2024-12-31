import React from "react";
import "../styles/SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-icon-left">≡</div>
      <input
        type="text"
        className="search-input"
        placeholder="par région, département, arrondissement, centre de votre ..."
      />
      <div className="search-icon-right">🔍</div>
    </div>
  );
}

export default SearchBar;
