import React, { useEffect, useState } from 'react'

import AllRoutes from './route/AllRoutes'
import Navbar from './navbar/Navbar'
import FooterComp from './footer/Footer'
import { useDispatch } from 'react-redux'
import { getAddress, getCart } from './redux/User/actions'

function App() {
  const dispatch=useDispatch()
  const [ownerId, setOwnerId] = useState("664eefa7e26fbe0044ccd5af");
   useEffect(()=>{
    dispatch(getCart(ownerId));
    dispatch(getAddress(ownerId));
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
