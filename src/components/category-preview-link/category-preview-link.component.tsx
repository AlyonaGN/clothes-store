import { CategoryPreviewItem } from '../category-preview-item/category-preview-item.component'
import { PreviewContainer } from './category-preview-link.styles'
import { categories } from './utils'

export const CategoryPreviewLinks = () => {
    return (
        <PreviewContainer>
            {categories.map((category) => (
                <CategoryPreviewItem key={category.id} category={category} />
            ))}
        </PreviewContainer>
    )
}
