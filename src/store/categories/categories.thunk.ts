import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    getCollectionsAndDocuments,
    getProductsByCategory,
} from '../../utils/firebase/firebase.utils'
import { Category, CategoryNames } from './categoriesSlice'

const CATEGORIES_THUNKS = {
    fetchCategories: 'categories/fetch',
    fetchCategory: 'category/fetch',
}

export const fetchCategories = createAsyncThunk<Category[]>(
    CATEGORIES_THUNKS.fetchCategories,
    async () => getCollectionsAndDocuments()
)

export const fetchCategory = createAsyncThunk<Category[]>(
    CATEGORIES_THUNKS.fetchCategory,
    async (
        category: CategoryNames,
        itemsPerPage: number,
        cursor: Maybe<DocumentSnapshot>
    ) => getProductsByCategory(category, itemsPerPage, cursor)
)
