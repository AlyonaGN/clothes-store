import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  cartItems: [],
};

const addCartItem = (cartItems, itemToAdd) => {
  const indexOfItemToAdd = cartItems.findIndex(
    (item) => item.id === itemToAdd.id
  );
  if (indexOfItemToAdd === -1) {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
  const itemWithIncrementedQuantity = {
    ...cartItems[indexOfItemToAdd],
    quantity: cartItems[indexOfItemToAdd].quantity + 1,
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
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    addItemToCart: {
      reducer: (state, action) => {
        state.cartItems = action.payload;
      },
      prepare: (cartItems, itemToAdd) => {
        const updatedItems = addCartItem(cartItems, itemToAdd);
        return { payload: updatedItems };
      },
    },
    removeItemFromCart: {
      reducer: (state, action) => {
        state.cartItems = action.payload;
      },
      prepare: (cartItems, itemToAdd) => {
        const updatedItems = removeItem(cartItems, itemToAdd);
        return { payload: updatedItems };
      },
    },
    decreaseQuantityOfItemInCart: {
      reducer: (state, action) => {
        state.cartItems = action.payload;
      },
      prepare: (cartItems, itemToAdd) => {
        const updatedItems = decreaseProductQuantity(cartItems, itemToAdd);
        return { payload: updatedItems };
      },
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  decreaseQuantityOfItemInCart,
  toggleIsOpen,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
