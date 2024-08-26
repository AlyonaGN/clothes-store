import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    BackgroundImage,
    Body,
    PreviewItemContainer,
} from './category-preview-item.styles'
import { CategoryPreview } from '../../store/categories/types'

type CategoryDirectoryItemProps = {
    category: CategoryPreview
}

export const CategoryPreviewItem: FC<CategoryDirectoryItemProps> = ({
    category,
}) => {
    const { imageUrl, title, route } = category
    const navigate = useNavigate()

    const onNanigateHandler = () => navigate(route)
    return (
        <PreviewItemContainer onClick={onNanigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </PreviewItemContainer>
    )
}
