import { useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartCount } from '../../store/cart/cart.selector';
import { toggleIsOpen } from '../../store/cart/cartSlice';
import { useAppDispatch } from '../../store/hooks';
import { CartIconContainer, ItemCount } from './cart-icon.styles';

export const CartIcon = () => {
  const numberOfCartItems = useSelector(selectCartCount);
  const dispatch = useAppDispatch();
  const toggleCartOpen = () => dispatch(toggleIsOpen());
  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{numberOfCartItems}</ItemCount>
    </CartIconContainer>
  );
};
