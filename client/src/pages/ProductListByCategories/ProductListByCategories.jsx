import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import ProductList from '../../components/Product/ProductList/ProductList';
import ProductFilters from '../../components/Product/ProductFilters/ProductFilters';
import useHandleProductFilters from '../../components/Product/ProductFilters/useHandleProductFilters';
import LoaderCircle from '../../components/common/LoaderCircle/LoaderCircle';
import { defaultProductFilters, getQuery } from '../../utils/api';
import { PRODUCTS_URL, mapCategoryById, _10_mins } from '../../utils/constants';
import { formatSelectedFilters } from '../../utils/helpers';
import './ProductListByCategories.scss';

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
        {isLoading ? <LoaderCircle /> : data && <ProductList productsData={data} />}
      </div>
    </div>
  );
};

export default ProductListByCategories;
