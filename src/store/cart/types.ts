import { Product } from '../categories/types'

export type CartItemType = Product & { quantity: number }

export type CartSlice = {
    isOpen: boolean
    cartItems: CartItemType[]
}
