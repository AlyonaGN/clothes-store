import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from './utils/firebase/firebase.utils';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import { BASE_ROUTES } from './routes/routes';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './store/user/userSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      let userSnapshot = null
      if (user) {
        userSnapshot = await createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(userSnapshot ? userSnapshot.data() : null));
    });

    return unsubscribe;
  }, []);
  
  return (
    <Routes>
      <Route path={BASE_ROUTES.MAIN} element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path={`${BASE_ROUTES.SHOP}/*`} element={<Shop />} />
        <Route path={BASE_ROUTES.AUTH} element={<Authentication />} />
        <Route path={BASE_ROUTES.CHECKOUT} element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
