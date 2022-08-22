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
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path={SHOP_ROUTES.CATEGORY} element={<Category />} />
    </Routes>
  );
};

export default Shop;
