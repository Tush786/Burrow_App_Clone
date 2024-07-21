import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

const SubscribeSection = () => {
  return (
    <div className="bg-[#514f4d] py-8">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center px-5 gap-6">
        <div className="w-full lg:w-[450px]  lg:mb-0">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full px-4 py-2 pr-20 text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-2 px-4 py-[4px] bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex 2xl:justify-center justify-between space-x-6">
          <SubscribeSection.Icon href="#" icon={BsFacebook} className="text-white" />
          <SubscribeSection.Icon href="#" icon={BsInstagram} className="text-white" />
          <SubscribeSection.Icon href="#" icon={BsTwitter} className="text-white" />
          <SubscribeSection.Icon href="#" icon={BsGithub} className="text-white" />
          <SubscribeSection.Icon href="#" icon={BsDribbble} className="text-white" />
        </div>
      </div>
    </div>
  );
};

SubscribeSection.Icon = ({ href, icon: Icon, className }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
    <Icon size={24} />
  </a>
);

export default SubscribeSection;
