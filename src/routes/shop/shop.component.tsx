import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { fetchCategories } from '../../store/categories/categories.thunk';
import { useAppDispatch } from '../../store/hooks';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import { Category } from '../category/category.component';
import { SHOP_ROUTES } from '../routes';

const Shop = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getCategoriesMap = () => {
      dispatch(fetchCategories());
    };
    getCategoriesMap();
    // ignoring the eslint rule to make it clear that the useEffect should be run on mount and clean up on unmount    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path={SHOP_ROUTES.CATEGORY} element={<Category />} />
    </Routes>
  );
};

export default Shop;
