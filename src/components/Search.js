import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search names..."
        onChange={handleChange}
        value={searchTerm}
      />
    </div>
  );
}

export default Search;
