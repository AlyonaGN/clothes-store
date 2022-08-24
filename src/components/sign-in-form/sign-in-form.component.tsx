import { FirebaseError } from 'firebase/app';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import {
  signInWithEmailAndPasswordFirebase,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { FormInput } from '../form-input/form-input.component';
import { ButtonsContainer, SignInContainer, SignInTitle } from './sign-in-form.styles';
import './sign-in-form.styles.tsx';

const defaultFields = {
  email: '',
  password: '',
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleSignInWithLoginAndPassword: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/wrong-password':
            alert('incorrect password for email');
            break;
          case 'auth/user-not-found':
            alert('no user associated with this email');
            break;
          default:
            console.log(error);
        }
      }
      else {
        console.log(error);
      }
    }
  };
  const resetFormFields = () => {
    setFormFields(defaultFields);
  };
  return (
    <SignInContainer className="sign-in-container">
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSignInWithLoginAndPassword}>
        <FormInput
          label="Email"
          type="email"
          onChange={onInputChange}
          value={email}
          name="email"
          required
        />

        <FormInput
          label="Password"
          type="password"
          onChange={onInputChange}
          value={password}
          name="password"
          required
        />
        <ButtonsContainer className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={handleSignInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
function signInAuthUserWithEmailAndPassword(email: string, password: string) {
  throw new Error('Function not implemented.');
}

