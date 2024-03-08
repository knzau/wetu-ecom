/* eslint-disable react/display-name */
import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useFetch from '../../hooks/useFetch';
import useHandleProductActions from '../../hooks/useHandleProductActions';
import LoaderCircle from '../../components/LoaderCircle/LoaderCircle';
import { mapProductData } from '../../utils';
import { PRODUCT_ID_URL } from '../../components/constant';
import ProductDetails from './ProductDetails';
import './ProductPage.scss';

const ProductPage = () => {
  const { showCart } = useStoreState((state) => state.cartModel);
  const { addToCart, toggleCartOpen } = useStoreActions((actions) => actions.cartModel);
  const { id } = useParams();

  const URL = PRODUCT_ID_URL.replace('{id}', id);
  const { data, isLoading, error } = useFetch(URL, [id]);

  const productData = data?.attributes || {};
  const { imageUrl1, imageUrl2, ...productDetailsInfo } = mapProductData(data);

  const productImages = [imageUrl1, imageUrl2];

  const {
    selectedSize,
    handleSelectProductSize,
    selectSizeError,
    setSelectSizeError,
    handleSelectImage,
    getSelectedThumbnailClass,
    imageIndex,
    setImageIndex
  } = useHandleProductActions(productImages);

  const cartProduct = { ...productData, id: id, qty: 1, selectedSize: selectedSize };

  const handleAddToCart = useCallback(() => {
    if (!selectedSize.length) {
      setSelectSizeError(true);
    } else {
      addToCart({ ...cartProduct });
      !showCart && toggleCartOpen();
    }
  }, [selectedSize]);

  return isLoading ? (
    <LoaderCircle />
  ) : (
    !error && data && (
      <div className="product-page">
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
                  key={index}
                  onClick={() => setImageIndex(index)}>
                  <img
                    className={getSelectedThumbnailClass(index, imageIndex)}
                    src={image}
                    alt={`image - ${index}`}
                  />
                </div>
              ))}
            </div>
            <div className="product__main-img">
              <img src={productImages[imageIndex]} alt={`image - ${imageIndex}`} />
            </div>
          </div>

          <ProductDetails
            handleAddToCart={handleAddToCart}
            handleSelectProductSize={handleSelectProductSize}
            selectedSize={selectedSize}
            selectSizeError={selectSizeError}
            productDetailsInfo={productDetailsInfo}
            productThumbnail={productImages[imageIndex]}
          />
        </div>
      </div>
    )
  );
};

export default ProductPage;
