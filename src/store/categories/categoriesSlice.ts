import { createSlice } from '@reduxjs/toolkit'
import { fetchCategories } from './categories.thunk'
import { CategoriesSlice } from './types'

const initialState: CategoriesSlice = {
    categories: [],
    isLoading: false,
    error: null,
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload
                state.isLoading = false
            })
            .addCase(fetchCategories.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.error = action.error
                state.isLoading = false
            })
    },
})

export const categoriesReducer = categoriesSlice.reducer
