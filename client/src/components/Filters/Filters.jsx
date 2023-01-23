import React from 'react';
import { filters } from '../../mockData';
import FilterItem from './FilterItem';
import CloseIcon from '@mui/icons-material/Close';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import TuneIcon from '@mui/icons-material/Tune';
import useToggle from '../../hooks/useToggle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Filters.scss';

const Filters = () => {
  const { toggleValue, handleToggle } = useToggle();

  const filterBoxClass = toggleValue
    ? 'show-filter-box filters__box'
    : 'hide-filter-box filters__box';

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
        {Object.keys(filters).map((item) => (
          <FilterItem key={item} filterId={item} filterDetails={filters[item]} />
        ))}
      </div>
    </div>
  );
};

export default Filters;
