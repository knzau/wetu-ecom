/* eslint-disable react/display-name */
import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import CustomButton from '../../components/Button/CustomButton';
import PaymentMethods from '../../components/PaymentMethods/PaymentMethods';
import Features from '../../components/Features/Features';
import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../utils';
import { useStoreActions, useStoreState } from 'easy-peasy';
import useHandleProductActions from '../../hooks/useHandleProductActions';
import './ProductPage.scss';

const ProductPage = React.memo(() => {
  const [imageIndex, setImageIndex] = useState(0);
  const { showCart } = useStoreState((state) => state.cartModel);
  const { addToCart, handleShowHideCart } = useStoreActions((actions) => actions.cartModel);
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`, [id]);

  const product = data?.attributes || {};
  const { image, image2, price, title, color, size, description, material, reviews, categories } =
    product;

  const category = categories?.data[0] || {};
  const productImages = [image, image2];
  const {
    selectedSize,
    handleSelectProductSize,
    selectSizeError,
    setSelectSizeError,
    handleSelectImage,
    getSelectedThumbnailClass
  } = useHandleProductActions(productImages);

  const cartProduct = { ...product, id: id, qty: 1, selectedSize: selectedSize };

  const handleAddToCart = useCallback(() => {
    if (!selectedSize.length) {
      setSelectSizeError(true);
    } else {
      addToCart({ ...cartProduct });
      !showCart && handleShowHideCart();
    }
  }, [selectedSize]);

  return loading
    ? 'Loading'
    : !error && data && (
        <div className="product-page">
          <div className="page-banner">
            <BreadCrumb
              pageTitle={title}
              categoryId={category.id}
              categoryTitle={category.attributes.title}
              productId={id}
            />
            <span className="page-banner__title">{title}</span>
            <div className="page-banner__bottom"></div>
          </div>

          <div className="product-page__product">
            <div className="product__images-wrapper">
              <div className="product__small-imgs">
                <div className="small-images__nav">
                  <KeyboardArrowUpIcon onClick={() => handleSelectImage('up')} />
                  <KeyboardArrowDownIcon onClick={() => handleSelectImage('down')} />
                </div>
                {productImages.map((image, index) => (
                  <div
                    className="product__small-img"
                    key={image.data.id}
                    onClick={() => setImageIndex(index)}>
                    <img
                      className={getSelectedThumbnailClass(index, imageIndex)}
                      src={BASE_URL + image.data.attributes.url}
                      alt={`image - ${index}`}
                    />
                  </div>
                ))}
              </div>
              <div className="product__main-img">
                <img
                  src={BASE_URL + productImages[imageIndex].data.attributes.url}
                  alt={`image - ${imageIndex}`}
                />
              </div>
            </div>
            <div className="product__details">
              <div className="product__details-item product_color">
                <p>
                  <span>color:</span>
                  {color}
                </p>
                <div className="product__details-item_img">
                  <img src={BASE_URL + image?.data?.attributes?.url} alt="product-color" />
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
                  <CustomButton
                    className="primary-btn addToCartBtn"
                    onClick={() => handleAddToCart()}>
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
                  <span>size:</span> {size.length ? size.split(',').join(', ') : ''}
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
          </div>
        </div>
      );
});

export default ProductPage;
