import React from 'react';
import { UserProfile } from '@clerk/clerk-react';
import { PROFILE_PATH } from '../../api/api';

const AccountInfo = () => {
  return <UserProfile path={PROFILE_PATH} routing="path" />;
};

export default AccountInfo;
