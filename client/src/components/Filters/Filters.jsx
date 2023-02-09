import React from 'react';
import FilterItem from './FilterItem';
import CloseIcon from '@mui/icons-material/Close';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import TuneIcon from '@mui/icons-material/Tune';
import useToggle from '../../hooks/useToggle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Filters.scss';
import { filters } from '../../utils';
import RadioGroup from '../../components/RadioGroup/RadioGroup';

const Filters = ({ handlePriceRangeSelect }) => {
  const { toggleValue, handleToggle } = useToggle();

  const filterBoxClass = toggleValue
    ? 'show-filter-box filters__box'
    : 'hide-filter-box filters__box';

  const filterPriceOptions = [
    { id: 1, name: 'price', value: '7-50', label: '7 - 50', showLabel: true },
    { id: 2, name: 'price', value: '50-150', label: '50 - 150', showLabel: true },
    { id: 3, name: 'price', value: '150-300', label: '150 - 300', showLabel: true },
    { id: 4, name: 'price', value: '300-600', label: '300 - 600', showLabel: true },
    { id: 5, name: 'price', value: '600-1200', label: '600 - 1200', showLabel: true },
    { id: 6, name: 'price', value: '1200+', label: '1200+', showLabel: true }
  ];

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
