import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../categories/types'
import { CartItemType, CartSlice } from './types'

const initialState: CartSlice = {
    isOpen: false,
    cartItems: [],
}

const deleteItemFromCart = (cartItems: CartItemType[], itemId: number) => {
    return (cartItems = cartItems.filter(({ id }) => id !== itemId))
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
        decreaseQuantityOfItemInCart: (
            state,
            { payload }: PayloadAction<CartItemType>
        ) => {
            const cartItem = state.cartItems.find(({ id }) => id === payload.id)
            if (cartItem) {
                if (cartItem.quantity === 1) {
                    state.cartItems = deleteItemFromCart(
                        state.cartItems,
                        payload.id
                    )
                } else {
                    cartItem.quantity--
                }
            }
        },
        removeItemFromCart: (
            state,
            { payload }: PayloadAction<CartItemType>
        ) => {
            state.cartItems = deleteItemFromCart(state.cartItems, payload.id)
        },
        clearCartItem: (state, { payload }: PayloadAction<CartItemType>) => {
            state.cartItems = state.cartItems.filter(
                ({ id }) => id !== payload.id
            )
        },
        setCartItems: (state, { payload }: PayloadAction<CartItemType[]>) => {
            state.cartItems = payload
        },
        toggleIsOpen: (state) => {
            state.isOpen = !state.isOpen
        },
    },
})

export const {
    addItemToCart,
    removeItemFromCart,
    decreaseQuantityOfItemInCart,
    toggleIsOpen,
} = cartSlice.actions

export const cartReducer = cartSlice.reducer
