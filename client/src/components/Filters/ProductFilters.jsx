import React from 'react';
import { PRODUCT_FILTERS } from '../../utils';
import FilterItem from './FilterItem';
import './ProductFilters.scss';

const FilterItems = ({ filterTypeValues, handleClickFilterItem, filterTypeKey }) => {
  return filterTypeValues.map((filter) => {
    return (
      <FilterItem
        key={filter}
        filter={filter}
        filterTypeKey={filterTypeKey}
        handleClickFilterItem={handleClickFilterItem}
      />
    );
  });
};

const ProductFilters = ({ handleClickFilterItem }) => {
  return Object.entries(PRODUCT_FILTERS).map(([filterTypeKey, filterTypeValues]) => {
    return (
      <div key={filterTypeKey} className="product-filters__container">
        <h3>{filterTypeKey}</h3>
        <ul className="filter__item__content">
          <FilterItems
            filterTypeValues={filterTypeValues}
            filterTypeKey={filterTypeKey}
            handleClickFilterItem={handleClickFilterItem}
          />
        </ul>
      </div>
    );
  });
};

export default ProductFilters;
