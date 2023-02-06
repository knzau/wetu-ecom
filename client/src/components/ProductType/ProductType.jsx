import React from 'react';
import TabPane from '../TabsComponent/TabPane';
import Product from '../Product/Product';
import useFetch from '../../hooks/useFetch';

const ProductType = ({ productType, categoryId, categoryTitle }) => {
  const { data, loading } = useFetch(
    `/products?populate=*&[filters][categories][id]=${categoryId}&[filters][type][$eq]=${productType.label}`
  );

  return (
    <TabPane title={productType.label} productType={productType.label} key={productType.id}>
      <div className="products_container">
        {loading
          ? 'loading'
          : data?.map((product) => (
              <Product key={product.id} product={product} categoryTitle={categoryTitle} />
            ))}
      </div>
    </TabPane>
  );
};

export default ProductType;
