import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import { BASE_ROUTES } from './routes/routes';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';

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
