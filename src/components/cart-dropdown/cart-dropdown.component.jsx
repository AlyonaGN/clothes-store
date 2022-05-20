import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

export const CartDropdown = () => {
  const { cartItems, toggleIsOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const handleGoToCheckoutClick = () => {
    navigate('/checkout');
    toggleIsOpen();
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <Button onClick={handleGoToCheckoutClick}>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};
