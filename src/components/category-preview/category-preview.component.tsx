import { FC } from 'react';
import { Product } from '../../store/categories/categoriesSlice';
import { ProductCard } from '../product-card/product-card.component';
import {
  CategoryPreviewContainer,
  Preview,
} from './category-preview.styles';
import { CategoryLink } from '../category-link/category-link.component';

type CategoryPreviewProps = {
  title: string;
  products: Product[]
}

export const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
        <CategoryLink text={title}/> 
      <Preview>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
