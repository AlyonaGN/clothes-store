import { CategoryItem } from '../category-item/category-item.component';
import './categories-container.styles.scss';

export const CategoriesContainer = ({ categories }) => {
  return categories.map((category) => (
    <CategoryItem key={category.id} category={category} />
  ));
};
