import React from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import './Product.scss';

const Product = ({ product }) => {
  return (
    <div key={product.id} className="product__wrapper">
      <div className="product__image-wrapper">
        <img src={product.imgUrl} alt={product.label} />
      </div>

      <span className="product__label">{product.label}</span>
      <div className="product__price-wrapper">
        <span className="product__price">
          <AttachMoneyIcon />
          {product.price}
        </span>
        <span className="product__rating">Rating: {product.rating}</span>
      </div>
    </div>
  );
};

export default Product;
