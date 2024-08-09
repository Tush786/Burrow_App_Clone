import React, { useState, useCallback } from 'react';
import { FaTruck, FaBell } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import AddressPageContent from './AddressPageContent';

function Checkout() {
  const [activeSection, setActiveSection] = useState('login');

  const toggleSection = useCallback((section) => {
    setActiveSection((prevSection) => (prevSection === section ? '' : section));
  }, []);

  return (
    <div className='bg-gray-100 py-6'>
      <div className='flex flex-col md:flex-row w-[90%] m-auto items-start gap-6'>
        <div className='flex flex-col w-full md:w-[60%] gap-4'>
          {/* Reusable Section Component */}
          {[
            { id: 'login', title: 'Login', content: LoginContent },
            { id: 'address', title: 'Address', content: AddressContent },
            { id: 'orderSummary', title: 'Order Summary', content: OrderSummaryContent }
          ].map((section, index) => (
            <div key={section.id}>
              <div className='flex justify-between items-center py-4 shadow-md px-4 bg-white' style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}>
                <div className='flex gap-4 items-center'>
                  <p className='px-2 bg-gray-100'>{index + 1}</p>
                  <p className='text-lg font-medium'>{section.title}</p>
                </div>
                {activeSection !== section.id && (
                  <button 
                    onClick={() => toggleSection(section.id)} 
                    className='border-2 border-gray-100 text-blue-600 py-2 px-4 rounded font-semibold text-[16px]'
                  >
                    CHANGE
                  </button>
                )}
              </div>
              {activeSection === section.id && (
                <div className='Below_Box flex xl:flex-row flex-col justify-between gap-4 py-4 px-4 bg-white'>
                  <section.content toggleSection={toggleSection} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Box */}
        <div className="w-full md:w-[40%] h-[350px] bg-white p-6" style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}>
          <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
          <SummaryItem label="Subtotal" value="$400" />
          <SummaryItem label="Shipping" value="$30" />
          <SummaryItem label="Tax" value="$35" />
          <div className="flex justify-between items-center pt-5">
            <p className="text-2xl leading-normal text-gray-800">Total</p>
            <p className="text-2xl font-bold leading-normal text-right text-gray-800">$500</p>
          </div>
          <button className="w-full py-3 bg-indigo-600 text-white mt-5 rounded-md hover:bg-indigo-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

function LoginContent({ toggleSection }) {
  return (
    <>
      <div className='flex flex-col gap-2'>
        <p><span className='font-medium'>Name:</span> Tushar Sapate</p>
        <p><span className='font-medium'>Phone:</span> +91 7709499326</p>
        <p className='text-blue-600 font-semibold cursor-pointer mt-2'>Logout & Sign in to another account</p>
        <button 
          className='bg-orange-600 text-white text-lg font-semibold py-2 px-6 mt-4 rounded-lg hover:bg-orange-700 transition'
          onClick={() => toggleSection('address')}
        >
          CONTINUE TO CHECKOUT
        </button>
      </div>
      <Advantages />
    </>
  );
}

function AddressContent({ toggleSection }) {
  return (
    <>
      <div className='w-full'>
        <AddressPageContent toggleSection={toggleSection} />
        {/* <button 
          className='bg-orange-600 text-white text-lg font-semibold py-2 px-6 mt-4 rounded-lg hover:bg-orange-700 transition'
          onClick={() => toggleSection('orderSummary')}
        >
          DELIVER HERE
        </button> */}
      </div>
    </>
  );
}

function OrderSummaryContent() {
  return (
    <>
      <div className='flex flex-col gap-2'>
        <p><span className='font-medium'>Name:</span> Tushar Sapate</p>
        <p><span className='font-medium'>Phone:</span> +91 7709499326</p>
        <p className='text-blue-600 font-semibold cursor-pointer mt-2'>Logout & Sign in to another account</p>
        <button className='bg-orange-600 text-white text-lg font-semibold py-2 px-6 mt-4 rounded-lg hover:bg-orange-700 transition'>
          CONTINUE
        </button>
      </div>
      <Advantages  />
    </>
  );
}

function Advantages() {
  return (
    <div>
      <p className='font-semibold mb-2'>Advantages of our secure login</p>
      <div className='flex flex-col gap-2'>
        <AdvantageItem Icon={FaTruck} text="Easily Track Orders, Hassle free returns" />
        <AdvantageItem Icon={FaBell} text="Get Relevant Alerts and Recommendations" />
        <AdvantageItem Icon={IoStar} text="Wishlist, Reviews, Ratings, and more" />
      </div>
    </div>
  );
}

function AdvantageItem({ Icon, text }) {
  return (
    <p className='flex items-center gap-2'>
      <Icon className='text-blue-600' /> 
      <span>{text}</span>
    </p>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div className="flex justify-between items-center pt-5">
      <p className="text-base leading-none text-gray-800">{label}</p>
      <p className="text-base leading-none text-gray-800">{value}</p>
    </div>
  );
}

export default Checkout;
