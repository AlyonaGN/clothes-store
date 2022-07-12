import { createAsyncThunk } from "@reduxjs/toolkit"
import { getCollectionsAndDocuments } from "../../utils/firebase/firebase.utils";

const CATEGORIES_THUNKS = {
    fetch: 'categories/fetch'
}

export const fetchCategories = createAsyncThunk(CATEGORIES_THUNKS.fetch, async () => {
    const categories = await getCollectionsAndDocuments('categories');
    return categories;
  })