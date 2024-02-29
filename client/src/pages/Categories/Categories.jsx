import React from 'react';
import { useParams } from 'react-router-dom';
// import Filters from '../../components/Filters/Filters';
import ProductList from '../../components/ProductList/ProductList';
import useFetch from '../../hooks/useFetch';

import { PRODUCTS_URL } from '../../utils';
import { _10_mins } from '../../api/api';
import LoaderCircle from '../../components/LoaderCircle/LoaderCircle';
import './Categories.scss';
import { defaultProductFilters, getQuery } from '../../api/services';
import ProductFilters from '../../components/Filters/ProductFilters';
import useHandleProductFilters from '../../components/Filters/useHandleProductFilters';

const Categories = () => {
  const categoryId = useParams();
  const { handleClickFilterItem, selectedFilters } = useHandleProductFilters();

  const query = getQuery({
    ...defaultProductFilters,
    filters: {
      categories: categoryId,
      ...selectedFilters
    }
  });

  const { data, isLoading } = useFetch(PRODUCTS_URL + query, [categoryId.id], {
    staleTime: _10_mins
  });
  console.log({ query });
  return (
    <div className="category-page__container">
      <div className="page__content">
        <div className="product-filters">
          <ProductFilters handleClickFilterItem={handleClickFilterItem} />
        </div>

        {isLoading ? <LoaderCircle /> : data && <ProductList productsData={data} />}
      </div>
    </div>
  );
};

export default Categories;
