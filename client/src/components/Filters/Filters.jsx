import React, { useState } from 'react';
import FilterItem from './FilterItem';
import CloseIcon from '@mui/icons-material/Close';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import TuneIcon from '@mui/icons-material/Tune';
import useToggle from '../../hooks/useToggle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { brandFilters, colorFilters, sizeFilters } from '../../utils';
// import RadioGroup from '../../components/RadioGroup/RadioGroup';
import { getColorFilterStyles } from './filterUtils';
import './Filters.scss';
import PriceRangeSlider from '../PriceRangeSlider/PriceRangeSlider';

const Filters = ({
  // handlePriceRangeSelect,
  handleClickFilters,
  checkedSizeFilter,
  checkedBrandFilter
}) => {
  const { toggleValue, handleToggle } = useToggle();
  const [toggleIndex, setToggleIndex] = useState('');

  const filterBoxClass =
    toggleValue && toggleIndex === 'filterBox'
      ? 'show-filter-box filters__box'
      : 'hide-filter-box filters__box';

  const selectedColorFilterClass =
    toggleValue && toggleIndex === 'color' ? 'selected-color-filter' : '';

  const filterItemClass = (filterId) =>
    filterId === 'size' ? 'filter-item__size filter-item__text' : 'filter-item__text';

  const handlePriceChange = (minPrice) => {
    console.log(`Selected Min Price: ${minPrice}`);
  };

  return (
    <div className="filters__wrapper">
      <div className="filters-top">
        <div className="filters-top__items">
          {toggleValue ? (
            <CloseIcon
              onClick={() => {
                handleToggle();
                setToggleIndex('filterBox');
              }}
            />
          ) : (
            <TuneIcon
              onClick={() => {
                handleToggle();
                setToggleIndex('filterBox');
              }}
            />
          )}
          <span> Filter</span>
        </div>
        <div className="filters-top__items">
          <ViewListIcon />
          <GridViewIcon />
        </div>
        <div className="filters-top__items">
          <span>Sort by</span>
          <KeyboardArrowDownIcon />
        </div>
      </div>

      <div className={filterBoxClass}>
        <div className="filter-item">
          <h2>color</h2>
          {colorFilters.map((item, index) => (
            <div
              key={item}
              className={filterItemClass(item)}
              onClick={() => {
                handleClickFilters(item, 'color', index);
                handleToggle();
                setToggleIndex('color');
              }}>
              <span style={getColorFilterStyles(item)} className={selectedColorFilterClass} />
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="filter-item">
          <h2>size</h2>
          {sizeFilters.map((filter, index) => (
            <FilterItem
              key={filter}
              filterId="size"
              filter={filter}
              handleClickFilters={handleClickFilters}
              checkedFilter={checkedSizeFilter}
              filterItemClass={filterItemClass}
              index={index}
            />
          ))}
        </div>
        <div className="filter-item">
          <h2>size</h2>
          {brandFilters.map((item, index) => (
            <FilterItem
              key={item}
              filterId={item}
              filter={item}
              handleClickFilters={handleClickFilters}
              checkedFilter={checkedBrandFilter}
              filterItemClass={filterItemClass}
              index={index}
            />
          ))}
        </div>
        <div className="filter-item">
          <h2>price</h2>
          {/* <RadioGroup
            radioOptions={filterPriceOptions}
            groupClassName="filter-prices"
            handleChange={handlePriceRangeSelect}
          /> */}
          <PriceRangeSlider handlePriceChange={handlePriceChange} />
        </div>
      </div>
    </div>
  );
};

export default Filters;
