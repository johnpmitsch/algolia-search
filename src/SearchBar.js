import React from 'react';
import './SearchBar.css';

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="search-container">
      <div className="query-container">
        <input
          id="query"
          name="query"
          type="search"
          aria-label="search bar"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
