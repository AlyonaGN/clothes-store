import { createAsyncThunk } from "@reduxjs/toolkit"
import { getCollectionsAndDocuments } from "../../utils/firebase/firebase.utils";
import { Category } from "./categoriesSlice";

const CATEGORIES_THUNKS = {
    fetch: 'categories/fetch'
}

export const fetchCategories = createAsyncThunk<Category[]>(CATEGORIES_THUNKS.fetch, 
    async () =>  getCollectionsAndDocuments())
