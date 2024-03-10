import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SearchInput from '../../common/SearchInput/SearchInput';
import './ProductSearch.scss';

const ProductSearch = ({ onSearch, handleClearSearch, handleInputFocus, isFocused }) => {
  return (
    <div className="product-search_container">
      <div className="search-title">
        <h4>Search</h4>
        {isFocused && <CloseIcon onClick={handleClearSearch} />}
      </div>
      <SearchInput onSearch={onSearch} placeholder="Enter" onFocus={handleInputFocus} />
    </div>
  );
};

export default ProductSearch;
