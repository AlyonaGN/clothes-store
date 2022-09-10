import { AuthError, AuthErrorCodes } from 'firebase/auth'
import { FormEventHandler } from 'react'
import { ChangeEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_ROUTES } from '../../routes/routes'
import { useAppDispatch } from '../../store/hooks'
import { setCurrentUser } from '../../store/user/userSlice'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import Button from '../button/button.component'
import { FormInput } from '../form-input/form-input.component'
import { SignUpContainer, SignUpTitle } from './sign-up-form.styles'
import './sign-up-form.styles.tsx'

const defaultFields = {
    email: '',
    displayName: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [formFields, setFormFields] = useState(defaultFields)

    const { email, displayName, password, confirmPassword } = formFields
    const onInputChange: ChangeEventHandler<HTMLInputElement> = e => {
        const { name, value } = e.target
        setFormFields({ ...formFields, [name]: value })
    }
    const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert('passwords do not match')
            return
        }

        try {
            const userCredential = await createAuthUserWithEmailAndPassword(email, password)

            if (userCredential) {
                const userData = await createUserDocumentFromAuth(userCredential.user, {
                    displayName
                })
                if (userData) {
                    dispatch(setCurrentUser(userData))
                }
            }
            navigate(BASE_ROUTES.MAIN)
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
        <SignUpContainer className="sign-up-container">
            <SignUpTitle>I don't have an account</SignUpTitle>
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

                <FormInput label="Email" type="email" onChange={onInputChange} value={email} name="email" required />

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
        </SignUpContainer>
    )
}

export default SignUpForm
