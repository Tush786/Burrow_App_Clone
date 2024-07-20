import React from 'react'

function Ordercard({name,price,date,image}) {
  return (
    <div className="flex justify-between items-start p-4 border-t" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
    <div className="w-1/6">
      <img src={image} alt="productname" className="w-[100px] h-auto rounded-lg" />
    </div>
    <div className="w-2/6 ml-4">
      <p className="font-semibold">{name}</p>
    </div>
    <div className="w-1/6">
      <p className="font-semibold">{price}</p>
    </div>
    <div className="w-2/6">
      <p className="font-semibold">Delivered On : {date}</p>
      <p className="text-gray-500">Your item has been delivered</p>
    </div>
  </div>
  )
}

export default Ordercard
