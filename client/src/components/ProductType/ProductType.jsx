import React from 'react';
import TabPane from '../TabsComponent/TabPane';
import useFetch from '../../hooks/useFetch';
import ProductList from '../ProductList/ProductList';
import { PRODUCTS_URL } from '../../utils';
import { _10_mins } from '../../api/api';
import { defaultProductFilters, getQuery } from '../../api/services';

const ProductType = ({ productType, categoryId, categoryTitle }) => {
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
      <div className="products_container">
        {loading ? (
          'loading'
        ) : (
          <ProductList productsData={data} categoryId={categoryId} categoryTitle={categoryTitle} />
        )}
      </div>
    </TabPane>
  );
};

export default ProductType;
