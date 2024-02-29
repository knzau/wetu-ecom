import { useState } from 'react';

const useHandleProductFilters = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleClickFilterItem = (filterType, filterValue) => {
    const existingFilterType = selectedFilters.find(
      (filter) => Object.keys(filter)[0] === filterType
    );

    if (existingFilterType) {
      handleExistingFilterType(filterType, filterValue, existingFilterType);
    } else {
      handleNewFilterType(filterType, filterValue);
    }
  };

  const handleExistingFilterType = (filterType, filterValue, existingFilterType) => {
    if (existingFilterType[filterType].includes(filterValue)) {
      removeFilterValue(filterType, filterValue);
    } else {
      addFilterValue(filterType, filterValue);
    }
  };

  const handleNewFilterType = (filterType, filterValue) => {
    setSelectedFilters([...selectedFilters, { [filterType]: [filterValue] }]);
  };

  const removeFilterValue = (filterType, filterValue) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = prevFilters.map((filter) =>
        Object.keys(filter)[0] === filterType
          ? { [filterType]: filter[filterType].filter((value) => value !== filterValue) }
          : filter
      );
      return updatedFilters.filter((filter) => filter[filterType].length > 0);
    });
  };

  const addFilterValue = (filterType, filterValue) => {
    setSelectedFilters(
      selectedFilters.map((filter) =>
        Object.keys(filter)[0] === filterType
          ? { [filterType]: [...filter[filterType], filterValue] }
          : filter
      )
    );
  };

  return { handleClickFilterItem, selectedFilters };
};

export default useHandleProductFilters;
