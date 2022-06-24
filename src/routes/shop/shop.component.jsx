import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { setCategoryMap } from '../../store/categories/category.action';
import { getCollectionsAndDocuments } from '../../utils/firebase/firebase.utils';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import { Category } from '../category/category.component';
import { SHOP_ROUTES } from '../routes';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCollectionsAndDocuments('categories');
      console.log(categories);
      dispatch(setCategoryMap(categories));
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
