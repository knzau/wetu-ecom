import React from 'react';
import { useNavigate } from 'react-router-dom';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import './Product.scss';

const Product = ({ product, categoryTitle }) => {
  const navigate = useNavigate();
  const navigateToProductPage = (productId) => {
    navigate(`/product/${productId}`, {
      state: { product: product, categoryTitle: categoryTitle }
    });
  };

  return (
    <div
      key={product.id}
      className="product__wrapper"
      onClick={() => navigateToProductPage(product.id)}>
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
