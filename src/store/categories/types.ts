import { SerializedError } from '@reduxjs/toolkit'
import { Key } from 'react'

export type Product = {
    id: number
    name: string
    price: number
    imageUrl: string
}

export enum CategoryNames {
    Hats = 'Hats',
    Jackets = 'Jackets',
    Mens = 'Mens',
    Womens = 'Womens',
    Sneakers = 'Sneakers',
}

export type Category = {
    title: CategoryNames
    items: Product[]
}

export interface CategoriesSlice {
    categories: Category[]
    isLoading: boolean
    error: SerializedError | null
}

export type CategoriesMap = {
    [key: string]: Product[]
}

export type CategoryPreview = {
    id: Key
    title: string
    imageUrl: string
    route: string
}
