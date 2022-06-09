import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

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

const CART_ACTION_TYPES = {
  TOGGLE_IS_OPEN: 'TOGGLE_IS_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_IS_OPEN:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  isOpen: false,
  cartItems: [],
  numberOfCartItems: 0,
  totalPrice: 0,
};

export const CartContext = createContext({
  isOpen: false,
  toggleIsOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  numberOfCartItems: 0,
  totalPrice: 0,
  decreaseQuantityOfItemInCart: () => null,
  removeItemFromCart: () => null,
});

export const CartProvider = ({ children }) => {
  const [{ isOpen, cartItems, numberOfCartItems, totalPrice }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const toggleIsOpen = () => {
    dispatch(createAction(CART_ACTION_TYPES.TOGGLE_IS_OPEN));
  };

  const updateCartItemsReducer = (cartItems) => {
    const newTotalPrice = cartItems.reduce(
      (accum, curItem) => accum + curItem.price * curItem.quantity,
      0
    );
    const newNumberOfCartItems = cartItems.reduce(
      (accum, curItem) => accum + curItem.quantity,
      0
    );
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems,
        numberOfCartItems: newNumberOfCartItems,
        totalPrice: newTotalPrice,
      })
    );
  };

  const addItemToCart = (itemToAdd) => {
    const updatedCartItems = addCartItem(cartItems, itemToAdd);
    updateCartItemsReducer(updatedCartItems);
  };

  const decreaseQuantityOfItemInCart = (itemToDecrease) => {
    const updatedCartItems = decreaseProductQuantity(cartItems, itemToDecrease);
    updateCartItemsReducer(updatedCartItems);
  };

  const removeItemFromCart = (itemToRemove) => {
    const updatedCartItems = removeItem(cartItems, itemToRemove);
    updateCartItemsReducer(updatedCartItems);
  };

  const value = {
    isOpen,
    toggleIsOpen,
    addItemToCart,
    cartItems,
    numberOfCartItems,
    totalPrice,
    decreaseQuantityOfItemInCart,
    removeItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
