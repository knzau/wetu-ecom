import React from 'react';

import CheckIcon from '../../assets/icons/CheckIcon';
import './ProductFilters.scss';

const FilterItem = ({ filter, handleClickFilterItem, filterTypeKey }) => {
  return (
    <li key={filter} id={filter} className="product-filter__item">
      <button onClick={() => handleClickFilterItem(filterTypeKey, filter)}>
        <span>
          <CheckIcon />
        </span>
        <span>{filter}</span>
      </button>
    </li>
  );
};

export default FilterItem;
