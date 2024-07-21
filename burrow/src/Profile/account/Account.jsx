import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdWallet } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import ProfileInfoComp from "./ProfileInfoComp";
import Wishlist from "../../wishlist/Wishlist";
import Order from "../orderComp/Order";
import { Navigate } from "react-router-dom";
import Address from "../../address/Address";

export default function Account() {
  const [compName, setCompName] = useState("Profile Information");
  console.log(compName);

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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTY7IalweT6rzWlH1LchOCzffcQrqbdM2Vvw&s"
              alt="profile"
            />
            <div>
              <p className="text-gray-500">Hello</p>
              <p className="text-lg font-semibold text-gray-700">
                Tushar Sapate
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
                <div className="flex items-center gap-4 py-4 cursor-pointer" onClick={() => setCompName(section.title)}>
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
              <p className="text-xl font-semibold text-gray-700">LOGOUT</p>
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
          ) :  compName === "Manage Addresses" ? (
            <Address />
          ) :  null
          }
        </div>
      </div>
    </div>
  );
}
