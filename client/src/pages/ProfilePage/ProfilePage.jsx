import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignOutButton, useUser } from '@clerk/clerk-react';
import AccountInfo from './AccountInfo';
import MyOrders from './MyOrders';
import WishList from './WishList';
import ProfileTab from './ProfileTab';
import Tabs from '../../components/TabsComponent/Tabs';
import useFetch from '../../hooks/useFetch';
import { SIGN_IN_PATH, _10_mins } from '../../api/api';
import { CUSTOMERS_URL } from '../../components/constant';
import './ProfilePage.scss';

const ProfilePage = () => {
  const userInfo = useUser();
  const { id, firstName } = userInfo?.user || {};
  const navigate = useNavigate();

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

  const navigateToProfile = () => {
    navigate(SIGN_IN_PATH);
  };

  useEffect(() => {
    if (!userInfo?.isSignedIn) {
      navigateToProfile();
      return;
    }
  }, [userInfo, navigateToProfile]);

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
