import { CATEGORIES_ROUTES } from '../../routes/routes'
import { CategoryNames, CategoryPreview } from '../../store/categories/types'

export const categories: CategoryPreview[] = [
    {
        id: 1,
        title: CategoryNames.Hats,
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        route: CATEGORIES_ROUTES[CategoryNames.Hats],
    },
    {
        id: 2,
        title: CategoryNames.Jackets,
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        route: CATEGORIES_ROUTES[CategoryNames.Jackets],
    },
    {
        id: 3,
        title: CategoryNames.Sneakers,
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        route: CATEGORIES_ROUTES[CategoryNames.Sneakers],
    },
    {
        id: 4,
        title: CategoryNames.Womens,
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        route: CATEGORIES_ROUTES[CategoryNames.Womens],
    },
    {
        id: 5,
        title: CategoryNames.Mens,
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        route: CATEGORIES_ROUTES[CategoryNames.Mens],
    },
]
