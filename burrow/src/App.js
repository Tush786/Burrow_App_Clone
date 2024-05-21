import React from 'react'

import AllRoutes from './home/AllRoutes'
import AdminPage from './admin/AdminPage'
import Productpage from './product/Productpage'
import Navbar from './navbar/Navbar'
import FooterComp, { Footer } from './footer/Footer'

function App() {
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
