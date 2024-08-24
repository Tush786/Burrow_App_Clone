import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Home from '../home/Home';
import ProductDetails from '../product/ProductDetails';
import Shimmer from '../Shimmer';
import ErrorPage from '../admin/ErrorPage';
import AdminRoute from '../admin/AdminRoute';
import Login from '../Profile/Login';
import Signup from '../Profile/Signup';
import Profile from '../Profile/Profile';
import PrivateRoute from './Privateroute';
import Account from '../Profile/account/Account';
import Order from '../Profile/orderComp/Order';
import Carts from '../cart/Carts';
import Checkout from '../checkoutPage/Checkout';
import ForgetPassword from '../Profile/forgetpassword';

const Productpage = lazy(() => import("../product/Productpage"));

const AllRoutes = () => {
  return (
    <Suspense fallback={<Shimmer />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<AdminRoute />} />
        <Route
          path='/product'
          element={
            <Suspense fallback={<Shimmer />}>
              <Productpage />
            </Suspense>
          }
        />
        
        <Route
          path='/product/:id'
          element={
            <PrivateRoute>
              <ProductDetails />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='Profile/order' element={<Order />} />
        <Route path='Profile/account' element={<Account />} />
        <Route path='Profile/forgetpassword' element={<ForgetPassword />} />
        <Route
          path='/checkout'
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        {/* <Route path='/checkout' element={<Checkout />} /> */}
        <Route
          path='/Seating/Loveseats/Sectional Sofas'
          element={
            <Suspense fallback={<Shimmer />}>
              <Productpage />
            </Suspense>
          }
        />
        {/* <Route path='/cart' element={<Carts />} /> */}

        <Route
          path='/cart'
          element={
            <PrivateRoute>
             <Carts />
            </PrivateRoute>
          }
        />
        <Route
          path='/Profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AllRoutes;
