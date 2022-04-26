import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from '../../../utils/firebase/firebase.utils';
import { getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';
import SignUpForm from '../../sign-up-form/sign-up-form.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    /* const userDocRef = await createUserDocumentFromAuth(user); */
  };
  useEffect(async () => {
    const res = await getRedirectResult(auth);
    console.log(res);
    if (res) {
      const userDocRef = await createUserDocumentFromAuth(res.user);
    }
  }, []);
  return (
    <div>
      <h1>Sign In</h1>{' '}
      <button onClick={logGoogleUser}>Signin with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Signin with Google Redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
