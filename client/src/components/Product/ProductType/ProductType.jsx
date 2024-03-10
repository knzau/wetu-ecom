import React from 'react';
import { _10_mins, PRODUCTS_URL } from '../../../utils/constants';
import useFetch from '../../../hooks/useFetch';
import { defaultProductFilters, getQuery } from '../../../utils/api';
import LoaderCircle from '../../common/LoaderCircle/LoaderCircle';
import TabPane from '../../common/TabsComponent/TabPane';
import ProductList from '../ProductList/ProductList';

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
