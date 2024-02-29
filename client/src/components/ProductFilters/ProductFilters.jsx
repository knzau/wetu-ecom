import React from 'react';
import { PRODUCT_FILTERS } from '../../utils';
import FilterItem from './FilterItem';
import useToggle from '../../hooks/useToggle';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './ProductFilters.scss';

const FilterItems = ({
  filterTypeValues,
  handleClickFilterItem,
  filterTypeKey,
  selectedFilters
}) => {
  return filterTypeValues.map((filter) => {
    return (
      <FilterItem
        key={filter}
        filter={filter}
        filterTypeKey={filterTypeKey}
        handleClickFilterItem={handleClickFilterItem}
        selectedFilters={selectedFilters}
      />
    );
  });
};

const Filters = ({ handleClickFilterItem, selectedFilters }) => {
  const { handleToggle, toggleKey } = useToggle();

  return Object.entries(PRODUCT_FILTERS).map(([filterTypeKey, filterTypeValues]) => {
    const isFilterTypeSelected = toggleKey === filterTypeKey;
    const filterOpenClass = isFilterTypeSelected ? 'filter-items__open' : '';

    return (
      <div key={filterTypeKey} className={`product-filters__container ${filterOpenClass}`}>
        <div className="filter-items__title" onClick={() => handleToggle(filterTypeKey)}>
          <p>{filterTypeKey}</p>
          {isFilterTypeSelected ? <RemoveIcon /> : <AddIcon />}
        </div>
        {isFilterTypeSelected && (
          <ul className="filter-items">
            <FilterItems
              filterTypeValues={filterTypeValues}
              filterTypeKey={filterTypeKey}
              handleClickFilterItem={handleClickFilterItem}
              selectedFilters={selectedFilters}
            />
          </ul>
        )}
      </div>
    );
  });
};

const ProductFilters = ({ handleClickFilterItem, selectedFilters }) => {
  return (
    <div className="product-filters__wrapper">
      <div className="product-filters">
        <Filters handleClickFilterItem={handleClickFilterItem} selectedFilters={selectedFilters} />
      </div>
    </div>
  );
};

export default ProductFilters;
