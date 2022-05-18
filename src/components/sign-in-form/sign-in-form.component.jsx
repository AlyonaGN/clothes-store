import { useState } from 'react';
import {
  signInWithEmailAndPasswordFirebase,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import { FormInput } from '../form-input/form-input.component';
import './sign-in-form.styles.scss';

const defaultFields = {
  email: '',
  password: '',
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleSignInWithLoginAndPassword = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPasswordFirebase(
        formFields.email,
        formFields.password
      );

      resetFormFields();
    } catch (error) {
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
  };
  const resetFormFields = () => {
    setFormFields(defaultFields);
  };
  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={handleSignInWithGoogle}
            buttonType="google"
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
