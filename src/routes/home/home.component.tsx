import { CategoryPreviewLinks } from '../../components/category-preview-link/category-preview-link.component'
import useFetchProductsByCategory from '../../services/firebase/useFetchProductsByCategory'
import { CategoryNames } from '../../store/categories/types'

const Home = () => {
    const { data, status } = useFetchProductsByCategory({
        category: CategoryNames.Sneakers,
    })
    console.log('res', data?.docs?.map((doc) => doc.data()) ?? [], status)
    return (
        <div className="categories-container">
            <CategoryPreviewLinks />
        </div>
    )
}

export default Home
