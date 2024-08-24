import { createSlice, SerializedError } from '@reduxjs/toolkit'
import { fetchCategories } from './categories.thunk'
import { Key } from 'react'

export type Product = {
    id: number
    name: string
    price: number
    imageUrl: string
}

export enum CategoryNames {
    Hats = "Hats",
    Jackets = "Jackets",
    Mens = "Mens",
    Womens = "Womens",
    Sneakers = "Sneakers"
}

export type Category = {
    title: CategoryNames
    items: Product[]
}

interface CategoriesSlice {
    categories: Category[]
    isLoading: boolean
    error: SerializedError | null
}

export type CategoriesMap = {
    [key: string]: Product[]
}

export type CategoryDirectory = {
    id: Key
    title: string
    imageUrl: string
    route: string
}

const initialState: CategoriesSlice = {
    categories: [],
    isLoading: false,
    error: null
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload
                state.isLoading = false
            })
            .addCase(fetchCategories.pending, state => {
                state.isLoading = true
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.error = action.error
                state.isLoading = false
            })
    }
})

export const categoriesReducer = categoriesSlice.reducer
