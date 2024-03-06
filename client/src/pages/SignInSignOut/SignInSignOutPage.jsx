import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignIn, SignedOut, useUser } from '@clerk/clerk-react';

import './SignInSignOutPage.scss';

import ProfilePage from '../ProfilePage/ProfilePage';
import { PROFILE_PATH, SIGN_IN_PATH } from '../../api/api';

const SignInSignOutPage = () => {
  const user = useUser();
  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate(PROFILE_PATH);
  };

  useEffect(() => {
    if (user?.isSignedIn) {
      navigateToProfile();
      return;
    }
  }, [user, navigateToProfile]);

  return (
    <div className="signin__container">
      <div className="signin-image">
        <img
          src="https://res.cloudinary.com/dwtaiai3t/image/upload/v1707950787/beige_hoodie_88057cf814_c30c187873.jpg"
          alt="signin-image"
        />
      </div>
      <div>
        <SignIn path={SIGN_IN_PATH} routing="path">
          <ProfilePage />
        </SignIn>
        <SignedOut redirectUrl={PROFILE_PATH} />
      </div>
    </div>
  );
};

export default SignInSignOutPage;
