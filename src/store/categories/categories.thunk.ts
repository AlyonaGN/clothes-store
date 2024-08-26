import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCollectionsAndDocuments } from '../../services/firebase/firebase.utils'
import { Category } from './types'

const CATEGORIES_THUNKS = {
    fetchCategories: 'categories/fetch',
    fetchCategory: 'category/fetch',
}

export const fetchCategories = createAsyncThunk<Category[]>(
    CATEGORIES_THUNKS.fetchCategories,
    async () => getCollectionsAndDocuments()
)

/* export const fetchCategory = createAsyncThunk<
    Category,
    GetProductsByCategoryPayload,
    {
        rejectValue: Error
    }
>(CATEGORIES_THUNKS.fetchCategory, async ({ category, itemsPerPage, cursor }) =>
    getProductsByCategory(category, itemsPerPage, cursor)
)
 */
