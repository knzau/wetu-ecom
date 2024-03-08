import React from 'react';
import Product from '../Product/Product';
import './ProductList.scss';

const ProductList = ({ productsData }) => {
  return (
    <div className="product-list__wrapper">
      {productsData.length > 0
        ? productsData.map((product) => (
            <Product product={product} productId={product.id} key={product.id} />
          ))
        : ''}
    </div>
  );
};

export default ProductList;
