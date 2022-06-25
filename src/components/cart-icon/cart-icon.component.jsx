import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleIsOpen } from '../../store/cart/cart.action';
import { selectCartCount } from '../../store/cart/cart.selector';
import { CartIconContainer, ItemCount } from './cart-icon.styles';

export const CartIcon = () => {
  const numberOfCartItems = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const toggleCartOpen = () => dispatch(toggleIsOpen());
  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{numberOfCartItems}</ItemCount>
    </CartIconContainer>
  );
};
