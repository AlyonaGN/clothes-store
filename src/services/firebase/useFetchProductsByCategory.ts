import { useFirestore, useFirestoreCollection } from 'reactfire'

import {
    collection,
    CollectionReference,
    query,
    where,
} from 'firebase/firestore'
import { GetProductsByCategoryPayload } from './firebase.utils'
import { Category } from '../../store/categories/types'
import { categoriesCollection } from './utils'

function useFetchProductsByCategory({
    category,
}: GetProductsByCategoryPayload) {
    const firestore = useFirestore()

    const operator = '=='

    const constraints = [where('title', operator, category)]

    const collectionRef = collection(
        firestore,
        categoriesCollection
    ) as CollectionReference<Category>

    const productsByCategoryQuery = query(collectionRef, ...constraints)

    return useFirestoreCollection(productsByCategoryQuery, {
        idField: 'id',
    })
}

export default useFetchProductsByCategory
