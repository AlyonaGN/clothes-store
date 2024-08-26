import { CategoryNames } from '../store/categories/types'

export const BASE_ROUTES = {
    MAIN: '/',
    SHOP: 'shop',
    AUTH: 'auth',
    CHECKOUT: 'checkout',
}

export const CATEGORIES_ROUTES = {
    [CategoryNames.Hats]: `/${BASE_ROUTES.SHOP}/hats`,
    [CategoryNames.Jackets]: `/${BASE_ROUTES.SHOP}/jackets`,
    [CategoryNames.Sneakers]: `/${BASE_ROUTES.SHOP}/sneakers`,
    [CategoryNames.Womens]: `/${BASE_ROUTES.SHOP}/womens`,
    [CategoryNames.Mens]: `/${BASE_ROUTES.SHOP}/mens`,
}

export const SHOP_ROUTES = {
    CATEGORY: `:category`,
}
