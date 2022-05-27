import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../routes/categories-preview/categories-preview.component';
import { Category } from '../routes/category/category.component';
import { SHOP_ROUTES } from '../routes/routes';
import './shop.styles.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path={SHOP_ROUTES.CATEGORY} element={<Category />} />
    </Routes>
  );
};

export default Shop;
