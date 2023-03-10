import React from 'react';
import Product from '../Product/Product';
import './ProductList.scss';

const ProductList = ({ productsData, categoryId = '', categoryTitle = '' }) => {
  return (
    <div className="product-list__wrapper">
      {productsData
        ? productsData.map((product) => (
            <Product
              product={product}
              key={product.id}
              categoryId={categoryId ? categoryId : product?.attributes?.categories?.data[0]?.id}
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
