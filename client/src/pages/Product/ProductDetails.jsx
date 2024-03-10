import React from 'react';
import CustomButton from '../../components/common/Button/CustomButton';
import PaymentMethods from '../../components/Product/PaymentMethods/PaymentMethods';
import Features from '../../components/home/Features/Features';
import './ProductPage.scss';
import { getProductSize } from '../../utils/helpers';

const ProductDetails = ({
  handleSelectProductSize,
  selectedSize,
  selectSizeError,
  handleAddToCart,
  productDetailsInfo,
  productThumbnail
}) => {
  const { description, reviews, material, color, price, size } = productDetailsInfo;

  return (
    <div className="product__details">
      <div className="product__details-item product_color">
        <p>
          <span>color:</span>
          {color}
        </p>
        <div className="product__details-item_img">
          <img src={productThumbnail} alt="product-color" />
        </div>
      </div>
      <div className="product__details-size_label">
        <p>
          <span>size:</span>
          {size.length ? size.split(',').join(', ') : ''}
        </p>

        <div className="product__details-item-size__wrapper">
          {size.length &&
            size.split(',').map((sizeLabel) => (
              <span
                key={sizeLabel}
                onClick={() => handleSelectProductSize(sizeLabel)}
                className={
                  sizeLabel === selectedSize
                    ? 'highlight-box product__details-item_size'
                    : 'product__details-item_size'
                }>
                {sizeLabel}
              </span>
            ))}
        </div>
      </div>
      <div className="product-page__price">
        <div className="product-page__price-item">
          <h2>$ {price}</h2>
          <CustomButton className="primary-btn addToCartBtn" onClick={() => handleAddToCart()}>
            Add to cart
          </CustomButton>
          {selectSizeError && <span className="error-text">Please select Size</span>}
        </div>
      </div>
      <div className="product__features">
        <Features />
      </div>
      <div className="product__payment-methods">
        <span>guaranteed safe checkout</span>
        <PaymentMethods />
      </div>
      <div className="product__description">
        <div className="product__details-item description-item">
          <p>
            <span>description:</span> {description}
          </p>
        </div>
      </div>
      <div className="product__details-item product__info">
        <p className="product__info-title">additional information</p>
        <p>
          <span>color:</span> {color}
        </p>
        <p>
          <span>size:</span> {getProductSize(size)}
        </p>
        <p>
          <span>material:</span> {material}
        </p>
      </div>
      <div className="product__details-item product__reviews">
        <p className="product__info-title">reviews:</p>
        <span>{reviews}</span>
      </div>
    </div>
  );
};

export default ProductDetails;
