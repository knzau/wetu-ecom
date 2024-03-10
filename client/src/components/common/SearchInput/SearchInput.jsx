import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchInput.scss';

const SearchInput = ({ onSearch, placeholder, ...props }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="search-input__container">
      <input
        type="search"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="search-input"
        {...props}
      />
      <SearchIcon className="search-icon" />
    </div>
  );
};

export default SearchInput;
