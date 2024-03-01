import React from 'react';

import ProfileTab from './ProfileTab';
import Tabs from '../../components/TabsComponent/Tabs';
import { profileTabs } from './profilePage.utils';
import './ProfilePage.scss';

const ProfilePage = () => {
  return (
    <Tabs
      defaultTab={0}
      categoryTitle="my profile"
      parentClassName="profile-tabs"
      sectionClassName="profile-tabs__titles-section">
      {profileTabs.map(({ id, title, component }) => (
        <ProfileTab key={id} title={title} component={component} label={title} />
      ))}
    </Tabs>
  );
};

export default ProfilePage;
