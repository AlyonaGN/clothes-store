import { DirectoryItem } from '../directory-item/directory-item.component';
import './categories-container.styles.scss';

export const CategoriesContainer = ({ categories }) => {
  return categories.map((category) => (
    <DirectoryItem key={category.id} category={category} />
  ));
};
