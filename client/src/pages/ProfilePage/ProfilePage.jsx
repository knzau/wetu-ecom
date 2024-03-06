import React from 'react';
import { SignOutButton, useUser } from '@clerk/clerk-react';
import AccountInfo from './AccountInfo';
import MyOrders from './MyOrders';
import WishList from './WishList';
import ProfileTab from './ProfileTab';
import Tabs from '../../components/TabsComponent/Tabs';
import useFetch from '../../hooks/useFetch';
import { CUSTOMERS_URL } from '../../utils';
import { _10_mins } from '../../api/api';
import './ProfilePage.scss';

const ProfilePage = () => {
  const userInfo = useUser();
  const { id, firstName } = userInfo?.user || {};

  const { data: customerData, isLoading } = useFetch(CUSTOMERS_URL, [id], {
    staleTime: _10_mins
  });

  const profileTabs = [
    { id: 1, title: 'account info', component: <AccountInfo userInfo={userInfo} /> },
    {
      id: 2,
      title: 'my orders',
      component: <MyOrders customerData={customerData} isLoading={isLoading} userInfo={userInfo} />
    },
    { id: 3, title: 'wishlist', component: <WishList /> }
  ];

  return (
    <>
      <div className="profile-banner">
        <h3>Hello {firstName}</h3>
        <SignOutButton />
      </div>
      <Tabs
        defaultTab={0}
        categoryTitle="my profile"
        parentClassName="profile-tabs"
        tabSectionClassName="profile-tabs__titles-section">
        {profileTabs.map(({ id, title, component }) => (
          <ProfileTab key={id} title={title} component={component} label={title} />
        ))}
      </Tabs>
    </>
  );
};

export default ProfilePage;
