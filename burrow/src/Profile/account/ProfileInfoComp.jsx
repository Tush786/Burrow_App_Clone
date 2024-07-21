import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import FAQs from './AccountFaqSection';

function ProfileInfoComp() {
  const [isEditable, setIsEditable] = useState(false);
  const [isEmailEditable, setIsEmailEditable] = useState(false);
  const [isMobileNumEditable, setIsMobileNumEditable] = useState(false);

  return (
    <div className='flex flex-col gap-8'>
      {/* Personal Information Edit Functionality */}
      <div>
        <div className="flex items-center mb-8 gap-4">
          <p className="text-2xl font-semibold text-gray-800">Personal Information</p>
          <span
            className="text-lg font-semibold text-indigo-600 cursor-pointer"
            onClick={() => setIsEditable(!isEditable)}
          >
            {isEditable ? 'Cancel' : 'Edit'}
          </span>
        </div>
        <div className="flex gap-4 items-center">
          {['firstname', 'lastname'].map((field, index) => (
            <div key={index} className="relative group">
              <input
                type="text"
                name={field}
                value={field === 'firstname' ? "Tushar" : "Sapate"}
                className={`py-4 px-6 ${isEditable ? '' : 'bg-gray-100 pointer-events-none'} text-base w-[350px] border border-gray-300 rounded-md`}
                readOnly={!isEditable}
              />
            </div>
          ))}
          {isEditable && (
            <button className="py-4 px-8 bg-indigo-600 text-white rounded-md" onClick={() => setIsEditable(false)}>
              Save
            </button>
          )}
        </div>
      </div>

      {/* Email Edit Functionality */}
      <div>
        <div className="flex items-center mb-8 gap-4">
          <p className="text-2xl font-semibold text-gray-800">Email Address</p>
          <span
            className="text-lg font-semibold text-indigo-600 cursor-pointer"
            onClick={() => setIsEmailEditable(!isEmailEditable)}
          >
            {isEmailEditable ? 'Cancel' : 'Edit'}
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative group">
            <input
              type="email"
              name="email"
              value="tusharsapate34@gmail.com"
              className={`py-4 px-6 ${isEmailEditable ? '' : 'bg-gray-100 pointer-events-none'} text-base w-[350px] border border-gray-300 rounded-md`}
              readOnly={!isEmailEditable}
            />
          </div>
          {isEmailEditable && (
            <button className="py-4 px-8 bg-indigo-600 text-white rounded-md" onClick={() => setIsEmailEditable(false)}>
              Save
            </button>
          )}
        </div>
      </div>

      {/* Mobile Number Edit Functionality */}
      <div>
        <div className="flex items-center mb-8 gap-4">
          <p className="text-2xl font-semibold text-gray-800">Mobile Number</p>
          <span
            className="text-lg font-semibold text-indigo-600 cursor-pointer"
            onClick={() => setIsMobileNumEditable(!isMobileNumEditable)}
          >
            {isMobileNumEditable ? 'Cancel' : 'Edit'}
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative group">
            <input
              type="text"
              name="mobile"
              value="1234567890"
              className={`py-4 px-6 ${isMobileNumEditable ? '' : 'bg-gray-100 pointer-events-none'} text-base w-[350px] border border-gray-300 rounded-md`}
              readOnly={!isMobileNumEditable}
            />
          </div>
          {isMobileNumEditable && (
            <button className="py-4 px-8 bg-indigo-600 text-white rounded-md" onClick={() => setIsMobileNumEditable(false)}>
              Save
            </button>
          )}
        </div>
      </div>

      <FAQs />

      <div className="mt-8">
        <p className='text-xl py-4 font-semibold text-indigo-600 cursor-pointer'>Deactivate Account</p>
        <p className='text-xl py-4 text-gray-800 cursor-pointer'>Delete Account</p>
      </div>
    </div>
  );
}

export default ProfileInfoComp;
