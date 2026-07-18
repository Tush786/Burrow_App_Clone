import React, { useEffect } from 'react'

import AllRoutes from './route/AllRoutes'
import Navbar from './navbar/Navbar'
import FooterComp from './footer/Footer'
import { useDispatch } from 'react-redux'
import { getAddress, getCart } from './redux/User/actions'

function App() {
  const dispatch=useDispatch()
   useEffect(()=>{
    dispatch(getCart());
    dispatch(getAddress());
   },[dispatch])

  return (
    <>
   
   <Navbar/>
      {/* <AllRoutes/> */}
      {/* <Productpage/> */}
      {/* <AdminPage /> */}
      <AllRoutes/>
      {/* <AdminPage /> */}
<FooterComp/>
    </>
  )
}

export default App
