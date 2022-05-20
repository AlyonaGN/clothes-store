import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;
  const { addItemToCart, decreaseQuantityOfItemInCart, removeItemFromCart } =
    useContext(CartContext);
  const increaseHandler = () => addItemToCart(item);
  const decreaseHandler = () => decreaseQuantityOfItemInCart(item);
  const removeHandler = () => removeItemFromCart(item);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <button className="arrow" onClick={decreaseHandler}>
          &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button className="arrow" onClick={increaseHandler}>
          &#10095;
        </button>
      </span>

      <span className="price">{price}</span>
      <button className="remove-button" onClick={removeHandler}>
        &#10005;
      </button>
    </div>
  );
};

export default CheckoutItem;
