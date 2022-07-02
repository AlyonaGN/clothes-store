import { Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component';
import { CartIcon } from '../../components/cart-icon/cart-icon.component';
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinksContainer,
} from './navigation.styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { toggleIsOpen } from '../../store/cart/cartSlice';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN-IN</NavLink>
          )}
          <CartIcon toggleDropdown={toggleIsOpen} />
        </NavLinksContainer>
        {isOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
