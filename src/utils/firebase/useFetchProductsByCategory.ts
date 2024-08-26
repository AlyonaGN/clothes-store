import { useFirestore, useFirestoreCollection } from 'reactfire'

import {
    collection,
    CollectionReference,
    limit,
    orderBy,
    startAfter,
    query,
    where,
} from 'firebase/firestore'
import { GetProductsByCategoryPayload } from './firebase.utils'
import { categoriesCollection } from './utils'
import { Category } from '../../store/categories/types'

function useFetchProductsByCategory({
    cursor,
    itemsPerPage = 3,
    category,
}: GetProductsByCategoryPayload) {
    const firestore = useFirestore()

    const order = orderBy('name', 'desc')

    const path = `organizationId`
    const operator = '=='

    // create default constraints
    const constraints = [
        where(path, operator, category),
        order,
        limit(itemsPerPage),
    ]

    if (cursor) {
        constraints.push(startAfter(cursor))
    }

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
