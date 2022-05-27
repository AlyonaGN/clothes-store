import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Home from './components/routes/home/home.component';
import Authentication from './components/routes/authentication/authentication.component';
import Shop from './components/shop/shop.component';
import Checkout from './components/routes/checkout/checkout.component';
import { BASE_ROUTES } from './components/routes/routes';

const App = () => {
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
