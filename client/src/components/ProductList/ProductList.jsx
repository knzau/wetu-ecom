import React from 'react';
import Product from '../Product/Product';
import './ProductList.scss';

const ProductList = ({ productsData, categoryTitle = '' }) => {
  return (
    <div className="product-list__wrapper">
      {productsData
        ? productsData.map((product) => (
            <Product
              product={product}
              key={product.id}
              categoryTitle={
                categoryTitle
                  ? categoryTitle
                  : product?.attributes?.categories?.data[0]?.attributes?.title
              }
            />
          ))
        : ''}
    </div>
  );
};

export default ProductList;
