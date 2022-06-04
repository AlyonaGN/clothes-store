import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import { CartIconContainer, ItemCount } from './cart-icon.styles';

export const CartIcon = () => {
  const { toggleIsOpen, numberOfCartItems } = useContext(CartContext);

  return (
    <CartIconContainer onClick={toggleIsOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{numberOfCartItems}</ItemCount>
    </CartIconContainer>
  );
};
