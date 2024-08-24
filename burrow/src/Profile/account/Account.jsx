import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdWallet } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import ProfileInfoComp from "./ProfileInfoComp";
import Wishlist from "../../wishlist/Wishlist";
import Order from "../orderComp/Order";
import {  useNavigate } from "react-router-dom";
import Address from "../../address/Address";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Cookies from 'js-cookie';

export default function Account() {
  const [compName, setCompName] = useState("Profile Information");
  const userInfo = Cookies.get('userInfo');
  const userObject = userInfo ? JSON.parse(userInfo) : null;
const dispatch=useDispatch()
  const Navigate=useNavigate()
    const handleLogout = async () => {
        try {
            // Make a request to the logout route
            await axios.post('https://burrow-app-database.onrender.com/user/logout');
            Navigate('/login');
        } catch (error) {
            console.error("Error logging out:", error);
        }
      }

  return (
    <div className="py-4 min-h-screen">
      {/* <h1 className="text-4xl font-bold mb-8 text-gray-800">Account Section</h1> */}
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/4 w-full flex flex-col gap-6">
          <div
            className="flex gap-4 p-4 items-center bg-white"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <img
              className="w-16 h-16 rounded-full"
              src={userObject.avatar}
              alt="profile"
            />
            <div>
              <p className="text-gray-500">Hello</p>
              <p className="text-lg font-semibold text-gray-700">
                {userObject.fullName}
              </p>
            </div>
          </div>
          <div
            className="bg-white p-4"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            {[
              { icon: IoIosArrowForward, title: "MY ORDER" },
              {
                icon: CgProfile,
                title: "ACCOUNT SETTING",
                items: [
                  "Profile Information",
                  "Manage Addresses",
                  "PAN Card Information",
                ],
              },
              {
                icon: IoMdWallet,
                title: "PAYMENT",
                items: ["Gift Card", "Save UPI", "Saved Cards"],
              },
              {
                icon: MdOutlinePayment,
                title: "MY STUFF",
                items: [
                  "My Coupons",
                  "My Review & Ratings",
                  "All Notifications",
                  "My Wishlist",
                ],
              },
            ].map((section, index) => (
              <div
                key={index}
                className={`border-b border-gray-200 pb-4 ${index === 0 ? "" : "mt-4"}`}
              >
                <div
                  className="flex items-center gap-4 py-4 cursor-pointer"
                  onClick={() => setCompName(section.title)}
                >
                  <section.icon className="text-xl text-indigo-600" />
                  <p className="text-xl font-semibold text-gray-700">
                    {section.title}
                  </p>
                </div>
                {section.items && (
                  <div className="flex flex-col pl-8 gap-2">
                    {section.items.map((item, i) => (
                      <p
                        key={i}
                        className="hover:bg-blue-100 p-2 rounded-md text-lg text-gray-800 cursor-pointer"
                        onClick={() => setCompName(item)}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center gap-4 py-4 cursor-pointer">
              <RiLogoutCircleRLine className="text-xl text-indigo-600" />
              <p className="text-xl font-semibold text-gray-700" onClick={handleLogout} >LOGOUT</p>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-[70%] bg-white p-6"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          {compName === "Profile Information" ? (
            <ProfileInfoComp />
          ) : compName === "My Wishlist" ? (
            <Wishlist />
          ) : compName === "Manage Addresses" ? (
            <Address />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <img
                src="https://miro.medium.com/v2/resize:fit:800/1*D4G0dWO2niImFvdyYq-C6g.jpeg"
                alt="Coming Soon"
                className="w-full mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-700">
                Feature Coming Soon!
              </h2>
              <p className="text-gray-500 mt-2">
                We're working hard to bring this feature to you. Stay tuned!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
