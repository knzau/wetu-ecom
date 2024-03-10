/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import LoaderCircle from '../../components/common/LoaderCircle/LoaderCircle';
import CartProduct from '../../components/Cart/CartProduct';
import './ProfilePage.scss';

const MyOrders = ({ customerData, isLoading }) => {
  const hasNoOrders = (Array.isArray(customerData) && !customerData?.length === 0) || !customerData;

  return (
    <div className="my-orders-container">
      {isLoading && <LoaderCircle />}
      <h3>Your orders</h3>
      {hasNoOrders && !isLoading ? (
        <p>You haven't placed any orders yet</p>
      ) : (
        customerData?.map((order) => {
          return order ? (
            <CartProduct
              isProfileOrder
              key={order?.id}
              cartProduct={order.attributes.customerProducts[0]}
            />
          ) : null;
        })
      )}
    </div>
  );
};

export default MyOrders;
