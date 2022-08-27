import { FC } from 'react';
import { CartItemType } from '../../store/cart/cartSlice';
import { CartItemContainer, ItemDetails } from './cart-item.styles';

type CartItepProps = {
  cartItem: CartItemType
}

const CartItem: FC<CartItepProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
