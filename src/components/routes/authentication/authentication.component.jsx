import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from '../../../utils/firebase/firebase.utils';
import { getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';
import SignUpForm from '../../sign-up-form/sign-up-form.component';
import SignInForm from '../../sign-in-form/sign-in-form.component';
import './auth.styles.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
