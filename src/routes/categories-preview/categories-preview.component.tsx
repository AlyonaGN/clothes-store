import { CategoryPreview } from '../../components/category-preview/category-preview.component';
import { Spinner } from '../../components/spinner/spinner.component';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';
import { useAppSelector } from '../../store/hooks';

const CategoriesPreview = () => {
  const categoriesMap = useAppSelector(selectCategoriesMap);
  const isLoading = useAppSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? <Spinner/> : Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
