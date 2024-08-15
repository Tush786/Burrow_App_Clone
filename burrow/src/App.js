import React, { useEffect, useState } from 'react'

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
    
   },[])

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
