import React, { useMemo } from 'react';
import TabPane from '../TabsComponent/TabPane';
import useFetch from '../../hooks/useFetch';
import ProductList from '../ProductList/ProductList';
import qs from 'qs';

const ProductType = ({ productType, categoryId, categoryTitle }) => {
  const query = useMemo(
    () =>
      qs.stringify(
        {
          filters: {
            categories: { id: categoryId },
            type: {
              $eq: productType.label
            }
          },
          pagination: {
            pageSize: 8
          }
        },
        {
          encodeValuesOnly: true // prettify URL
        }
      ),
    [categoryId, productType.label]
  );

  const { data, loading } = useFetch(`/products?populate=*&${query}`, [
    categoryId,
    productType.label
  ]);

  return (
    <TabPane title={productType.label} productType={productType.label} key={productType.id}>
      <div className="products_container">
        {loading ? 'loading' : <ProductList productsData={data} categoryTitle={categoryTitle} />}
      </div>
    </TabPane>
  );
};

export default ProductType;
