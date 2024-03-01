import React from 'react';
import { SignIn, SignedOut } from '@clerk/clerk-react';

import './SignInSignOutPage.scss';

import ProfilePage from '../ProfilePage/ProfilePage';
import { PROFILE_PATH, SIGN_IN_PATH } from '../../api/api';

const SignInSignOutPage = () => {
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
