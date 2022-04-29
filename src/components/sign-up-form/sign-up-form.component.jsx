import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import { FormInput } from '../form-input/form-input.component';
import './sign-up-form.styles.scss';

const defaultFields = {
  email: '',
  displayName: '',
  password: '',
  confirmPassword: '',
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, displayName, password, confirmPassword } = formFields;
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords must be the same');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (e) {
      console.log('user creation failed', e);
    }
  };
  const resetFormFields = () => {
    setFormFields(defaultFields);
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          onChange={onInputChange}
          value={displayName}
          name="displayName"
          required
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          onChange={onInputChange}
          value={confirmPassword}
          name="confirmPassword"
          required
        />
        <Button type="submit"> Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
