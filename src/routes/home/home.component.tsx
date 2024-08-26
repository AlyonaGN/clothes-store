import { CategoryPreviewLinks } from '../../components/category-preview-link/category-preview-link.component'
import useFetchProductsByCategory from '../../services/firebase/useFetchProductsByCategory'
import { CategoryNames } from '../../store/categories/types'

const Home = () => {
    const res = useFetchProductsByCategory({ category: CategoryNames.Sneakers })
    console.log('res', res)
    return (
        <div className="categories-container">
            <CategoryPreviewLinks />
        </div>
    )
}

export default Home
