import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequests';
import { useStoreActions, useStoreState } from 'easy-peasy';
import CustomButton from '../Button/CustomButton';
import { useUser, useClerk } from '@clerk/clerk-react';
import './Cart.scss';
import CartProduct from './CartProduct';

const Cart = () => {
  const { cartProducts, totalPrice, showCart } = useStoreState((state) => state.cartModel);
  const user = useUser();
  const { id, fullName, emailAddresses } = user?.user || {};
  const clerk = useClerk();

  const { increment, decrement, removeItem, toggleCartOpen, resetCart } = useStoreActions(
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
    if (!user?.isSignedIn) {
      clerk.redirectToSignIn();
    }
    try {
      const stripe = await stripePromise;
      await makeRequest.post('/customers', {
        customerId: id,
        customerName: fullName,
        customerEmail: emailAddresses[0].emailAddress,
        customerProducts: cartProducts
      });

      const res = await makeRequest.post('/orders', {
        products: cartProducts,
        userId: crypto.randomUUID()
      });

      await stripe
        .redirectToCheckout({
          sessionId: res.data.stripeSession.id
        })
        .then(() => {
          resetCart();
        });

      !!showCart && toggleCartOpen();
    } catch (error) {
      console.error(error);
    }
  };

  return cartProducts.length ? (
    <div className="cart">
      <span className="closeBtn" onClick={toggleCartOpen}>
        &#x2715;
      </span>
      <span className="cart-title">Shopping Cart</span>
      {cartProducts.map((cartProduct) => (
        <CartProduct
          key={cartProduct.id}
          cartProduct={cartProduct}
          removeItem={removeItem}
          handleDecrement={handleDecrement}
          increment={increment}
        />
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
      <span className="closeBtn" onClick={toggleCartOpen}>
        &#x2715;
      </span>
      <h2>Shopping Cart is Empty</h2>
    </div>
  );
};

export default Cart;
