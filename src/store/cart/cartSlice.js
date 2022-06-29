import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems(state, action) {
      return {
        ...state,
        cartItems: action.payload,
      };
    },
    toggleIsOpen(state) {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    },
  },
});

export const { setCategories } = cartSlice.actions;

export default cartSlice.reducer;
