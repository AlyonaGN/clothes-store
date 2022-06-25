import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

const addCartItem = (cartItems, itemToAdd) => {
  const indexOfItemToAdd = cartItems.findIndex(
    (item) => item.id === itemToAdd.id
  );
  if (indexOfItemToAdd === -1) {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
  const itemWithIncrementedQuantity = {
    ...cartItems[indexOfItemToAdd],
    quantity: ++cartItems[indexOfItemToAdd].quantity,
  };
  const updatedItems = [...cartItems];
  updatedItems[indexOfItemToAdd] = itemWithIncrementedQuantity;
  return updatedItems;
};

const removeItem = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

const decreaseProductQuantity = (cartItems, itemToDecrease) => {
  if (itemToDecrease.quantity <= 1)
    return removeItem(cartItems, itemToDecrease);
  return cartItems.map((item) =>
    item.id === itemToDecrease.id
      ? { ...item, quantity: --item.quantity }
      : item
  );
};

export const addItemToCart = (cartItems, itemToAdd) => {
  const updatedCartItems = addCartItem(cartItems, itemToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
};

export const decreaseQuantityOfItemInCart = (cartItems, itemToDecrease) => {
  const updatedCartItems = decreaseProductQuantity(cartItems, itemToDecrease);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const updatedCartItems = removeItem(cartItems, itemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
};

export const toggleIsOpen = () => {
  return createAction(CART_ACTION_TYPES.TOGGLE_IS_OPEN);
};
