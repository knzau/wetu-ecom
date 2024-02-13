import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequests';
import DeleteIcon from '@mui/icons-material/Delete';
import { useStoreActions, useStoreState } from 'easy-peasy';
import CustomButton from '../Button/CustomButton';
import './Cart.scss';

const Cart = () => {
  const { cartProducts, totalPrice, showCart } = useStoreState((state) => state.cartModel);

  const { increment, decrement, removeItem, handleShowHideCart, resetCart } = useStoreActions(
    (actions) => actions.cartModel
  );

  const handleDecrement = (cartProduct = {}) => {
    if (cartProduct.qty > 1) {
      decrement(cartProduct);
    } else {
      removeItem(cartProduct);
    }
  };

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post('/orders', { products: cartProducts });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id
      });
      res && res.data && resetCart();
      !!showCart && handleShowHideCart();
    } catch (error) {
      console.error(error);
    }
  };

  return cartProducts.length ? (
    <div className="cart">
      <span className="closeBtn" onClick={handleShowHideCart}>
        &#x2715;
      </span>
      <span className="cart-title">Shopping Cart</span>
      {cartProducts.map((cartProduct) => (
        <div className="cart-product" key={cartProduct.id}>
          <div className="cart-product__img-wrapper">
            <img src={cartProduct.image.data.attributes.url} alt="product-img" />
          </div>
          <div className="cart-product__info">
            <div className="cart-product__info-top">
              <div className="cart-product__info-top-right">
                <h2>{cartProduct.title}</h2>
                <p className="cart-product__price">
                  <span>{cartProduct.qty} x </span>${cartProduct.price}
                </p>
              </div>
              <DeleteIcon onClick={() => removeItem(cartProduct)} className="cart__delete-btn" />
            </div>

            <div className="cart-product__info-bottom">
              <div className="cart-product__info-attributes">
                <p>
                  Color: <span>{cartProduct.color}</span>
                </p>
                <p>
                  Size: <span className="uppercase">{cartProduct.selectedSize}</span>{' '}
                </p>
              </div>
              <div className="cart-product__info-btns">
                <span
                  className="cart-product__qty-change"
                  onClick={() => handleDecrement(cartProduct)}>
                  &#8722;
                </span>
                <span>{cartProduct.qty}</span>
                <span className="cart-product__qty-change" onClick={() => increment(cartProduct)}>
                  &#43;
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="cart-checkout">
        <div className="cart-total">
          <span>subtotal</span>
          <span>$ {totalPrice}</span>
        </div>
        <CustomButton className="primary-btn  checkout-btn" onClick={handlePayment}>
          Checkout
        </CustomButton>
      </div>
    </div>
  ) : (
    <div className="center-items cart">
      <span className="closeBtn" onClick={handleShowHideCart}>
        &#x2715;
      </span>
      <h2>Shopping Cart is Empty</h2>
    </div>
  );
};

export default Cart;
