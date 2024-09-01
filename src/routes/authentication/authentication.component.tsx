import SignUpForm from '../../components/auth-form/sign-up-form.component'
import SignInForm from '../../components/auth-form/sign-in-form.component'
import { AuthenticationContainer } from './authentication.styles'

const Authentication = () => {
    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    )
}

export default Authentication
