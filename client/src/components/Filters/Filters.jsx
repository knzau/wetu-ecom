import React from 'react';
import FilterItem from './FilterItem';
import CloseIcon from '@mui/icons-material/Close';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import TuneIcon from '@mui/icons-material/Tune';
import useToggle from '../../hooks/useToggle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { brandFilters, colorFilters, sizeFilters } from '../../utils';
import RadioGroup from '../../components/RadioGroup/RadioGroup';
import { filterPriceOptions, getColorFilterStyles } from './filterUtils';
import './Filters.scss';

const Filters = ({
  handlePriceRangeSelect,
  handleClickFilters,
  checkedSizeFilter,
  checkedBrandFilter
}) => {
  const { toggleValue, handleToggle } = useToggle();

  const filterBoxClass = toggleValue
    ? 'show-filter-box filters__box'
    : 'hide-filter-box filters__box';
  const filterItemClass = (filterId) =>
    filterId === 'size' ? 'filter-item__size filter-item__text' : 'filter-item__text';

  return (
    <div className="filters__wrapper">
      <div className="filters-top">
        <div className="filters-top__items">
          {toggleValue ? <CloseIcon onClick={handleToggle} /> : <TuneIcon onClick={handleToggle} />}
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
          {colorFilters.map((item) => (
            <div
              key={item}
              className={filterItemClass(item)}
              onClick={handleClickFilters}
              id="color">
              <span style={getColorFilterStyles(item)} />
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
          <RadioGroup
            radioOptions={filterPriceOptions}
            groupClassName="filter-prices"
            handleChange={handlePriceRangeSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
