import React from 'react';
import TabPane from '../TabsComponent/TabPane';
import useFetch from '../../hooks/useFetch';
import ProductList from '../ProductList/ProductList';
import { _10_mins } from '../../api/api';
import { defaultProductFilters, getQuery } from '../../api/services';
import { PRODUCTS_URL } from '../constant';
import LoaderCircle from '../LoaderCircle/LoaderCircle';

const ProductType = ({ productType, categoryId }) => {
  const productTypeFilters = {
    categories: { id: categoryId },
    type: {
      $eq: productType.label
    }
  };

  const query = getQuery({
    ...defaultProductFilters,
    filters: productTypeFilters
  });

  const { data, loading } = useFetch(PRODUCTS_URL + query, [categoryId, productType.label], {
    staleTime: _10_mins
  });

  return (
    <TabPane title={productType.label} productType={productType.label} key={productType.id}>
      {loading ? <LoaderCircle /> : <ProductList productsData={data} />}
    </TabPane>
  );
};

export default ProductType;
