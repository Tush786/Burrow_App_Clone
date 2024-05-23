import { Routes, Route } from 'react-router-dom'
import { lazy,Suspense } from 'react'
import Home from '../home/Home'
import ProductDetails from '../product/ProductDetails'
import Shimmer from '../Shimmer'
import ErrorPage from '../admin/ErrorPage'
import AdminRoute from '../admin/AdminRoute'
import Login from '../Profile/Login'
import Signup from '../Profile/Signup'
import Profile from '../Profile/Profile'
import PrivateRoute from './Privateroute'
import Order from '../Profile/Order'
import Account from '../Profile/Account'


const Productpage = lazy(() => import("../product/Productpage"))

const AllRoutes = () => {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<AdminRoute />}/>
      <Route path='/product' element={<Suspense fallback={<Shimmer/>}><Productpage /></Suspense>}/>
      <Route path='/product/:id' element={<ProductDetails />}/>
      <Route path='*' element={<ErrorPage/>} /> 
     <Route path='/Login' element={<Login/>}/>
     <Route path='/Signup' element={<Signup/>}/>
     <Route path='Profile/order' element={<Order/>}/>
     <Route path='Profile/account' element={<Account/>}/>
     <Route path='/Seating/Loveseats/Sectional Sofas' element={<Productpage/>}/>
  
     <Route
          path="/Profile"
          element={
            <PrivateRoute>
    <Profile/>
            </PrivateRoute>
          }
        />
    
    </Routes>
  )
}

export default AllRoutes
