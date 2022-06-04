import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import { Category } from '../category/category.component';
import { SHOP_ROUTES } from '../routes';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path={SHOP_ROUTES.CATEGORY} element={<Category />} />
    </Routes>
  );
};

export default Shop;
