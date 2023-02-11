import { FC } from 'react';
import { addItemToCart } from '../../store/cart/cartSlice';
import { Product } from '../../store/categories/categoriesSlice';
import { useAppDispatch } from '../../store/hooks';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';

const BUTTON_TEXT = "Add to cart"

type ProductCardProps = {
  product: Product
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useAppDispatch();
  const addProductToCart = () => dispatch(addItemToCart(product));

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
