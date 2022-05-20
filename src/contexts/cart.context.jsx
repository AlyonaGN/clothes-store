import { createContext, useEffect, useState } from 'react';

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
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const [cartItems, setCartItems] = useState([]);
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const updatedNumberOfItems = cartItems.reduce(
      (accum, curItem) => accum + curItem.quantity,
      0
    );
    setNumberOfCartItems(updatedNumberOfItems);
  }, [cartItems]);
  useEffect(() => {
    const updatedTotalPrice = cartItems.reduce(
      (accum, curItem) => accum + curItem.price * curItem.quantity,
      0
    );
    setTotalPrice(updatedTotalPrice);
  }, [cartItems]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const decreaseQuantityOfItemInCart = (productToDecrease) => {
    setCartItems(decreaseProductQuantity(cartItems, productToDecrease));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeItem(cartItems, productToRemove));
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
