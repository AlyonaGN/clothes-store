import { AuthError, AuthErrorCodes } from 'firebase/auth'
import { FormEventHandler } from 'react'
import { ChangeEventHandler, useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { setCurrentUser } from '../../store/user/userSlice'
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from '../../services/firebase/firebase.utils'
import Button from '../button/button.component'
import { FormInput } from '../form-input/form-input.component'
import { AuthContainer, AuthTitle, ButtonsContainer } from './auth-form.styles'

const defaultFields = {
    email: '',
    displayName: '',
    password: '',
    confirmPassword: '',
}
const SignUpForm = () => {
    const dispatch = useAppDispatch()
    const [formFields, setFormFields] = useState(defaultFields)

    const { email, displayName, password, confirmPassword } = formFields
    const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target
        setFormFields({ ...formFields, [name]: value })
    }
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert('passwords do not match')
            return
        }

        try {
            const userCredential = await createAuthUserWithEmailAndPassword(
                email,
                password
            )

            if (userCredential) {
                const userData = await createUserDocumentFromAuth(
                    userCredential.user,
                    {
                        displayName,
                    }
                )
                if (userData) {
                    dispatch(setCurrentUser(userData))
                }
            }
            alert(
                'You successfully signed up. Now you can log in using your credentials!'
            )
            resetFormFields()
        } catch (error) {
            if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
                alert('Cannot create user, email already in use')
            } else {
                console.log('user creation encountered an error', error)
            }
        }
    }

    const resetFormFields = () => {
        setFormFields(defaultFields)
    }

    return (
        <AuthContainer className="sign-up-container">
            <AuthTitle>I don't have an account</AuthTitle>
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
                <ButtonsContainer>
                    <Button type="submit"> Sign Up</Button>
                </ButtonsContainer>
            </form>
        </AuthContainer>
    )
}

export default SignUpForm
