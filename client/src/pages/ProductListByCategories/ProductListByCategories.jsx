import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import useFetch from '../../hooks/useFetch';
import { _10_mins } from '../../api/api';
import LoaderCircle from '../../components/LoaderCircle/LoaderCircle';
import './ProductListByCategories.scss';
import { defaultProductFilters, getQuery } from '../../api/services';
import ProductFilters from '../../components/ProductFilters/ProductFilters';
import useHandleProductFilters from '../../components/ProductFilters/useHandleProductFilters';
import { PRODUCTS_URL } from '../../components/constant';

const ProductListByCategories = () => {
  const categoryId = useParams();
  const { handleClickFilterItem, selectedFilters } = useHandleProductFilters();

  const formattedFilters = selectedFilters.reduce((acc, filter) => {
    const filterType = Object.keys(filter)[0];
    return { ...acc, [filterType]: { $in: filter[filterType] } };
  }, {});

  const query = getQuery({
    ...defaultProductFilters,
    pagination: {
      pageSize: 20
    },
    filters: {
      categories: categoryId,
      ...formattedFilters
    }
  });

  const { data, isLoading } = useFetch(PRODUCTS_URL + query, [categoryId.id, formattedFilters], {
    staleTime: _10_mins
  });

  return (
    <div className="category-page__container">
      <div className="page__content">
        <ProductFilters
          handleClickFilterItem={handleClickFilterItem}
          selectedFilters={selectedFilters}
        />
        {isLoading ? <LoaderCircle /> : data && <ProductList productsData={data} />}
      </div>
    </div>
  );
};

export default ProductListByCategories;
