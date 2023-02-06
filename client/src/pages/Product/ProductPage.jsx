import React, { useState, useCallback, useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
// import StarRating from '../../components/StarRating/StarRating';
import CurrencyContext from '../../hooks/CurrencyContext';
import './ProductPage.scss';
import { currenciesIcons } from '../../utils';
import CustomButton from '../../components/Button/CustomButton';

const ProductPage = () => {
  const currentCurrency = useContext(CurrencyContext);
  const [imageIndex, setImageIndex] = useState(0);
  const [productSize, setProductSize] = useState('s');
  const location = useLocation();
  console.log({ currentCurrency });

  console.log({ location });

  const { categoryTitle, product } = location.state;

  const { image, image2, price, title, color, size, description, material, reviews } =
    product.attributes || {};

  const images = [image, image2];
  const productSizes = size.split(',');

  const getSelectedImageClass = (index, imageIndex) => {
    return parseInt(imageIndex) === parseInt(index) ? ' selected-product' : 'unselected-product';
  };

  const handleSelectImage = useCallback((direction) => {
    const lastImage = images.length - 1;
    const firstImage = 0;
    if (direction === 'up') {
      setImageIndex((prevImageIndex) =>
        prevImageIndex > firstImage ? prevImageIndex - 1 : lastImage
      );
    } else {
      setImageIndex((prevImageIndex) =>
        prevImageIndex < lastImage ? prevImageIndex + 1 : firstImage
      );
    }
  }, []);

  const handleClickProductSize = (size = '') => {
    setProductSize(size);
  };

  const currencyWithIcon = useMemo(
    () => currenciesIcons[currentCurrency.currentCurrency],
    [currentCurrency.currentCurrency]
  );

  // const getRating = (reviews) =>
  //   reviews.reduce((acc, currentValue) => acc + currentValue.stars || 0, 0);

  return (
    <div className="product-page">
      <div className="page-banner">
        <BreadCrumb pageTitle={title} categoryTitle={categoryTitle} productId={product.id} />
        <span className="page-banner__title">{title}</span>
        <div className="page-banner__bottom">
          {/* {reviews && <StarRating rating={getRating(reviews)} reviewsNum={reviews.length} />} */}
          {/* <div className="page-banner__availability">
            {sku && (
              <p>
                SKU: <span>{sku}</span>
              </p>
            )}
            {availability && (
              <p>
                availability: <span>{availability}</span>
              </p>
            )}
          </div> */}
        </div>
      </div>

      <div className="product-page__product">
        <div className="product__images-wrapper">
          <div className="product__small-imgs">
            <div className="small-images__nav">
              <KeyboardArrowUpIcon onClick={() => handleSelectImage('up')} />
              <KeyboardArrowDownIcon onClick={() => handleSelectImage('down')} />
            </div>
            {images.map((image, index) => (
              <div
                className="product__small-img"
                key={image.data.id}
                onClick={() => setImageIndex(index)}>
                <img
                  className={getSelectedImageClass(index, imageIndex)}
                  src={`http://localhost:1337${image.data.attributes.url}`}
                  alt={`image - ${index}`}
                />
              </div>
            ))}
          </div>
          <div className="product__main-img">
            <img
              src={`http://localhost:1337${images[imageIndex].data.attributes.url}`}
              alt={`image - ${imageIndex}`}
            />
          </div>
        </div>
        <div className="product__details">
          <div className="product__details-item">
            <p>
              <span>color:</span>
              {color}
            </p>
            <div className="product__details-item_img">
              <img
                src={`http://localhost:1337${image?.data?.attributes?.url}`}
                alt="product-color"
              />
            </div>
          </div>
          <div className="product__details-size_label">
            <p>
              <span>size:</span>
              {productSize}
            </p>

            <div className="product__details-item-size__wrapper">
              {size &&
                productSizes.map((sizeLabel) => (
                  <span
                    key={sizeLabel}
                    className="product__details-item_size"
                    onClick={() => handleClickProductSize(sizeLabel)}>
                    {sizeLabel}
                  </span>
                ))}
            </div>
          </div>

          <div className="product__price">
            <div className="product__price-item">
              <h2>
                {currencyWithIcon} {price}
              </h2>
              <CustomButton className="primary-btn addToCartBtn">Add to cart</CustomButton>
            </div>
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
              <span>size:</span> {productSizes.join(', ')}
            </p>
            <p>
              <span>material:</span> {material}
            </p>
          </div>

          <div className="product__details-item product__info">
            <p className="product__info-title">reviews</p>
            <span>{reviews}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
