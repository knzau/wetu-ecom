import React from 'react';
import './Cart.scss';
import { useStoreState } from 'easy-peasy';
import { BASE_URL } from '../../utils';

const Cart = () => {
  const cartProducts = useStoreState((state) => state.cartModel.cartProducts);

  return cartProducts.length ? (
    <div className="cart">
      <span className="cart-title">Shopping Cart</span>
      {cartProducts.map((cartProduct) => (
        <div className="cart-product" key={cartProduct.id}>
          <div className="cart-product__img-wrapper">
            <img src={BASE_URL + cartProduct.image.data.attributes.url} alt="product-img" />
          </div>
          <div className="cart-product__info">
            <div className="cart-product__info-top">
              <h2>{cartProduct.title}</h2>
              <p>${cartProduct.price}</p>
            </div>

            <div className="cart-product__info-bottom">
              <div className="cart-product__info-attributes">
                <p>
                  Color: <span>{cartProduct.color}</span>
                </p>
                <p>
                  Size: <span className="uppercase">{cartProduct.selectedSizes.join(', ')}</span>{' '}
                </p>
              </div>
              <div className="cart-product__info-btns">
                <span>&#8722;</span>
                <span>1</span>
                <span>&#43;</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <></>
  );
};

export default Cart;
