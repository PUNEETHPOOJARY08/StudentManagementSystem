import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="btn btn-primary search-btn">
        Search
      </button>
      {searchTerm && (
        <button
          type="button"
          className="btn btn-secondary clear-btn"
          onClick={() => {
            onSearchChange('');
            onSearch('');
          }}
        >
          Clear
        </button>
      )}
    </form>
  );
};

export default SearchBar;



