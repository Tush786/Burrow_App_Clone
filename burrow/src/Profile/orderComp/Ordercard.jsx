import React from 'react'

function Ordercard({ name, price, date, image }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start p-4 border-t" style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}>
      <div className="w-full sm:w-1/6 mb-4 sm:mb-0">
        <img src={image} alt="productname" className="w-[100px] h-auto rounded-lg" />
      </div>
      <div className="w-full sm:w-2/6 sm:ml-4 mb-4 sm:mb-0">
        <p className="font-semibold">{name}</p>
      </div>
      <div className="w-full sm:w-1/6 mb-4 sm:mb-0">
        <p className="font-semibold">{price}</p>
      </div>
      <div className="w-full sm:w-2/6">
        <p className="font-semibold">Delivered On: {date}</p>
        <p className="text-gray-500">Your item has been delivered</p>
      </div>
    </div>
  )
}

export default Ordercard
