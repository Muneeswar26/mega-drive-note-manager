import React from 'react';

function SearchBar({ searchTerm, setSearchTerm, filterCategory, setFilterCategory }) {
  return (
    <div className="mb-4 d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className="form-control"
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>
    </div>
  );
}

export default SearchBar;
