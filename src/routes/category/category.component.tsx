import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../../components/product-card/product-card.component'
import { Spinner } from '../../components/spinner/spinner.component'
import {
    selectCategoriesIsLoading,
    selectCategoriesMap,
} from '../../store/categories/category.selector'
import { useAppSelector } from '../../store/hooks'
import { CategoryContainer, Title } from './category.styles'

type CategoryRouteParams = { category: string }

export const Category = () => {
    const { category } = useParams<
        keyof CategoryRouteParams
    >() as CategoryRouteParams
    const categoriesMap = useAppSelector(selectCategoriesMap)
    const isLoading = useAppSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <Title>{category.toUpperCase()}</Title>
            {isLoading ? (
                <Spinner />
            ) : (
                <CategoryContainer>
                    {products &&
                        products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </CategoryContainer>
            )}
        </>
    )
}
