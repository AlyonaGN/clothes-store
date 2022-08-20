import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../categories/categoriesSlice';

export type CartItem = Product & { quantity: number }

type CartSlice = {
  isOpen: boolean,
  cartItems: CartItem[]
}

const initialState: CartSlice = {
  isOpen: false,
  cartItems: []
};

const deleteItemFromCart = (cartItems: CartItem[], itemId: number) => {
  return cartItems = cartItems.filter(
    ({ id }) => id !== itemId
  )
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
      addItemToCart: ({ cartItems }, { payload }: PayloadAction<Product>) => {
          const cartItemIdx = cartItems.findIndex(
              (cartItem) => cartItem.id === payload.id
          )

          if (cartItemIdx > -1) {
              cartItems[cartItemIdx].quantity++
          } else {
              cartItems.push({ ...payload, quantity: 1 })
          }
      },
      decreaseQuantityOfItemInCart: (state, { payload }: PayloadAction<CartItem>) => {
          const cartItem = state.cartItems.find(({ id }) => id === payload.id)
          if (cartItem) {
              if (cartItem.quantity === 1) {
                state.cartItems = deleteItemFromCart(state.cartItems, payload.id)
              } else {
                cartItem.quantity--
              }
          }
      },
      removeItemFromCart: (state, { payload }: PayloadAction<CartItem>) => {
        state.cartItems = deleteItemFromCart(state.cartItems, payload.id)
      },
      clearCartItem: (state, { payload }: PayloadAction<CartItem>) => {
          state.cartItems = state.cartItems.filter(
              ({ id }) => id !== payload.id
          )
      },
      setCartItems: (state, { payload }: PayloadAction<CartItem[]>) => {
          state.cartItems = payload
      },
      toggleIsOpen: (state, { payload }: PayloadAction<boolean>) => {
          state.isOpen = payload
      }
  }
})

export const {
  addItemToCart,
  removeItemFromCart,
  decreaseQuantityOfItemInCart,
  toggleIsOpen,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
