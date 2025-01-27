import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded px-2 py-1"
        onChange={handleInputChange}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
    </div>
  );
};

export default SearchBar;