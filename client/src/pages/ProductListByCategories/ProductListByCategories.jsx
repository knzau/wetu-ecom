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
import { PRODUCTS_URL, mapCategoryById } from '../../components/constant';
import { formatSelectedFilters } from '../../utils';

const ProductListByCategories = () => {
  const pageId = useParams();
  const { handleClickFilterItem, selectedFilters } = useHandleProductFilters();

  const formattedFilters = formatSelectedFilters(selectedFilters);
  const categoryId = mapCategoryById[pageId.id];

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

  const { data, isLoading } = useFetch(PRODUCTS_URL + query, [categoryId, formattedFilters], {
    staleTime: _10_mins
  });

  return (
    <div className="category-page__container">
      <div className="page__content">
        <ProductFilters
          handleClickFilterItem={handleClickFilterItem}
          selectedFilters={selectedFilters}
        />
        {isLoading ? (
          <LoaderCircle />
        ) : (
          data && <ProductList categoryId={categoryId} productsData={data} />
        )}
      </div>
    </div>
  );
};

export default ProductListByCategories;
