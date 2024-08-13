import React, { useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import Ordercard from './Ordercard';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderData } from '../../redux/User/actions';

export default function Order() {
  const orderData = useSelector((state) => state.data.orderData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderData());
  }, [dispatch]);

  return (
    <div className="p-2">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="p-4 bg-white rounded-lg h-[450px] w-[20%]" style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}>
          <h2 className="text-2xl font-semibold mb-4">Filter</h2>
          <div className="space-y-4">
            <div>
              <p className="text-lg font-bold mb-2">ORDER STATUS</p>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  On the way
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Delivered
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Pending
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Cancelled
                </label>
              </div>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">ORDER TIME</p>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Last 30 days
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  2023
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  2022
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  2021
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  OLDER
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center mb-4">
            <input className="w-[80%] p-2 border border-gray-300 rounded-l-lg" placeholder="Search your order here" />
            <button className="flex items-center bg-blue-500 text-white px-4 py-[10px] rounded-r-lg">
              <CiSearch className="text-2xl mr-2" />
              <span>Search Orders</span>
            </button>
          </div>
          <div className='flex flex-col gap-4'>
            {orderData && orderData.length > 0 ? (
              orderData.map((order, ind) => (
                <div key={order._id} className="order-item">
                  {/* <h3 className="text-xl font-bold mb-2">Order ID: {order._id}</h3>
                  <p className="text-lg mb-2">Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
                  <p className="text-lg mb-4">Total Amount: ${order.totalAmount}</p> */}

                  {order.products.map((product, index) => (
                    <Ordercard
                      key={index}
                      {...product}
                    />
                  ))}
                </div>
              ))
            ) : (
              <p>No orders found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
