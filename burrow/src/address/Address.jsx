import React from 'react'
import { MdAdd } from "react-icons/md";

function Address() {
  return (
    <div className='flex flex-col gap-4'>
      <div>
        <p className='text-[24px] font-[600]'>Manage Addresses</p>
      </div>

      <div className='p-4  flex gap-4 items-center border border-gray-200 text-indigo-600'>
       <MdAdd  className='text-[16px]'/>
       <p className='text-[16px'>ADD A NEW ADDRESS</p>
      </div>
    </div>
  )
}

export default Address
