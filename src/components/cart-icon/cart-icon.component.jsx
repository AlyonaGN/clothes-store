import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';

export const CartIcon = ({ toggleDropdown }) => {
  const { numberOfCartItems } = useContext(CartContext);
  return (
    <div className="cart-icon-container" onClick={toggleDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{numberOfCartItems}</span>
    </div>
  );
};
