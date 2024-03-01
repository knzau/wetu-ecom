import AccountInfo from './AccountInfo';
import MyOrders from './MyOrders';
import WishList from './WishList';

export const profileTabs = [
  { id: 1, title: 'account info', component: <AccountInfo /> },
  { id: 2, title: 'my orders', component: <MyOrders /> },
  { id: 3, title: 'wishlist', component: <WishList /> }
];
