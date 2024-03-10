import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import './ProductFilters.scss';

const FilterItem = ({ filter, handleClickFilterItem, filterTypeKey, selectedFilters }) => {
  const isFilterSelected = selectedFilters.some((filterOption) =>
    filterOption[filterTypeKey]?.includes(filter)
  );

  return (
    <li key={filter} id={filter} className="product-filter__item">
      <button onClick={() => handleClickFilterItem(filterTypeKey, filter)}>
        <span className="filter-item__check-icon">{isFilterSelected && <CheckIcon />}</span>

        <span>{filter}</span>
      </button>
    </li>
  );
};

export default FilterItem;
