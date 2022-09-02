import { Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component'
import { CartIcon } from '../../components/cart-icon/cart-icon.component'
import { LogoContainer, NavigationContainer, NavLink, NavLinksContainer } from './navigation.styles'
import { selectCurrentUser } from '../../store/user/user.selector'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setCurrentUser } from '../../store/user/userSlice'

const Navigation = () => {
    const dispatch = useAppDispatch()
    const currentUser = useAppSelector(selectCurrentUser)
    const isOpen = useAppSelector(selectIsCartOpen)
    const handleSignout = () => {
        try {
            signOutUser()
            dispatch(setCurrentUser(null))
        } catch (e) {
            console.log('Sign out error', e)
        }
    }

    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrownLogo className="logo" />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to="/shop">SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as="span" onClick={handleSignout}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to="/auth">SIGN-IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinksContainer>
                {isOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navigation
