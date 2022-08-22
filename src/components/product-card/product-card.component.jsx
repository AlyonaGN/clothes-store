import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cartSlice';
import { useAppDispatch } from '../../store/hooks';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';

const BUTTON_TEXT = "Add to cart"

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useAppDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        {BUTTON_TEXT}
      </Button>
    </ProductCartContainer>
  );
};
