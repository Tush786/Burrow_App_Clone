import React, { useState, useCallback } from "react";
import { FaTruck, FaBell } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import AddressPageContent from "./AddressPageContent";
import { useDispatch, useSelector } from "react-redux";
import { Button, Image } from "@chakra-ui/react";
import { addTocart, deleteCartItem, getCart } from "../redux/User/actions";
import RazorpaySect from "./Razorpay";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Checkout() {
  const [activeSection, setActiveSection] = useState("login");
  const addressArr = useSelector((state) => state.data.addressData);
  const TotalPrice = useSelector((state) => state.data.TotalPrice);
  const [pr, setPr] = useState(null);

  const toggleSection = useCallback((section) => {
    setActiveSection((prevSection) => (prevSection === section ? "" : section));
  }, []);

  return (
    <div className="bg-gray-100 py-6">
      <div className="flex flex-col md:flex-row w-[90%] m-auto items-start gap-6">
        <div className="flex flex-col w-full md:w-[60%] gap-4">
          {/* Reusable Section Component */}
          {[
            { id: "login", title: "Login", content: LoginContent },
            { id: "address", title: "Address", content: AddressContent },
            {
              id: "orderSummary",
              title: "Order Summary",
              content: OrderSummaryContent,
            },
            {
              id: "Payment",
              title: "Order Payment",
              content: Razorpay,
            },
          ].map((section, index) => (
            <div key={section.id}>
              <div
                className="flex justify-between items-center py-4 shadow-md px-4 bg-white"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
              >
                <div className="flex gap-4 items-center">
                  <p className="px-2 bg-gray-100">{index + 1}</p>
                  <p className="text-lg font-medium">{section.title}</p>
                </div>
                {activeSection !== section.id && section.title !== "Order Payment" && (
                  <button
                    onClick={() => toggleSection(section.id)}
                    className={`border-2 border-gray-100 text-blue-600 py-2 px-4 rounded font-semibold text-[16px] ${
                      section.title === "Address" && addressArr.length === 0
                        ? "hidden"
                        : "visible"
                    }`}
                  >
                    CHANGE
                  </button>
                )}
              </div>
              {activeSection === section.id && (
                <div className="Below_Box flex xl:flex-row flex-col justify-between gap-4 py-4 px-4 bg-white">
                  <section.content toggleSection={toggleSection} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Box */}
        <div
          className="w-full md:w-[40%] bg-white p-6"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
          <SummaryItem label="Subtotal" value="$400" />
          <SummaryItem label="Shipping" value="$30" />
          <SummaryItem label="Tax" value="$35" />
          <div className="flex justify-between items-center pt-5">
            <p className="text-2xl leading-normal text-gray-800">Total</p>
            <p className="text-2xl font-bold leading-normal text-right text-gray-800">
            ${TotalPrice===null ? pr + 65 : TotalPrice + 65}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginContent({ toggleSection }) {
  const Navigate=useNavigate()
  const handleLogout = async () => {
      try {
          // Make a request to the logout route
          await axios.post('http://localhost:9090/user/logout');
          Navigate('/login');
      } catch (error) {
          console.error("Error logging out:", error);
      }
    }
  return (
    <>
      <div className="flex flex-col gap-2">
        <p>
          <span className="font-medium">Name:</span> Tushar Sapate
        </p>
        <p>
          <span className="font-medium">Phone:</span> +91 7709499326
        </p>
        <p className="text-blue-600 font-semibold cursor-pointer mt-2" onClick={handleLogout}>
          Logout & Sign in to another account
        </p>
        <button
          className="bg-orange-600 text-white text-lg font-semibold py-2 px-6 mt-4 rounded-lg hover:bg-orange-700 transition"
          onClick={() => toggleSection("address")}
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
      <div className="w-full">
        <AddressPageContent toggleSection={toggleSection} />
      </div>
    </>
  );
}

function Razorpay() {
  return (
    <div>
      <RazorpaySect/>
    </div>

  );
}

function OrderSummaryContent({ toggleSection }) {
  const cartData1 = useSelector((state) => state.data.cart);
  const TotalPrice = useSelector((state) => state.data.TotalPrice);
  const currentDate = new Date();
  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + 5);
  const date = futureDate.getDate();
  const day = futureDate.toLocaleDateString("en-US", { weekday: "long" });
  const month = futureDate.toLocaleString("en-US", { month: "long" });

  const [ownerId] = useState("664eefa7e26fbe0044ccd5af");
  const dispatch = useDispatch();

  const addQty = useCallback(
    (el) => {
      const { product, quantity } = el;
      const newQty = quantity + 1;
      dispatch(addTocart(product, newQty, ownerId)).then(() => {
        dispatch(getCart(ownerId));
      });
    },
    [dispatch, ownerId]
  );

  const removeQty = useCallback(
    (el) => {
      const { product, quantity } = el;
      const newQty = quantity - 1;
      if (newQty > 0) {
        dispatch(addTocart(product, newQty, ownerId)).then(() => {
          dispatch(getCart(ownerId));
        });
      }
    },
    [dispatch, ownerId]
  );

  const removeData = useCallback(
    (id) => {
      dispatch(deleteCartItem(ownerId, id)).then(() => {
        dispatch(getCart(ownerId));
      });
    },
    [dispatch, ownerId]
  );

  return (
    <div className="flex flex-col gap-6 w-full p-4 bg-white rounded-lg shadow-md">
      {cartData1.map((el, ind) => (
        <div
          key={ind}
          className="flex flex-col md:flex-row gap-4 items-start border-b border-gray-200 pb-4 mb-4 last:border-none last:pb-0 last:mb-0"
        >
          <div className="md:w-[30%] w-full">
            <Image
              src={el.product.image}
              alt={el.product.productName}
              width="100%"
              className="rounded-lg object-cover w-full"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full gap-4">
            <div className="flex flex-col justify-between">
              <p className="text-[16px] font-semibold text-gray-800">
                {el.product.productName}
              </p>
              <p className="text-[16px] text-gray-600">Type: {el.product.type}</p>
              <p className="text-[16px] text-gray-600">Size: Medium</p>
              <p className="text-[16px] text-gray-600">Color: Light Blue</p>
              <p className="text-[16px] text-gray-600">Quantity: {el.quantity}</p>
              <p className="text-[16px] text-gray-600">
                Delivery by {day}, {date} {month}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="px-2 py-1 border border-gray-300 rounded"
                onClick={() => removeQty(el)}
              >
                -
              </button>
              <p>{el.quantity}</p>
              <button
                className="px-2 py-1 border border-gray-300 rounded"
                onClick={() => addQty(el)}
              >
                +
              </button>
              <button
                className="text-red-600"
                onClick={() => removeData(el.product._id)}
              >
                Remove
              </button>
            </div>
          </div>
          <div className="flex justify-between w-full md:w-[10%]">
            <p className="text-[16px] font-semibold text-gray-800">
              $ {el.product.sellingPrice}
            </p>
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center">
        <p className="text-[16px] font-medium text-gray-600">Total</p>
        <p className="text-[16px] font-semibold text-gray-800">
        $ {TotalPrice + 65}
        </p>
      </div>

      <button
          className="bg-orange-600 text-white text-lg font-semibold py-2 px-6 mt-4 rounded-lg hover:bg-orange-700 transition"
          onClick={() => toggleSection("Payment")}
        >
          CONTINUE TO CHECKOUT
        </button>
    </div>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div className="flex justify-between items-center pt-5">
      <p className="text-lg leading-none text-gray-600">{label}</p>
      <p className="text-lg leading-none text-gray-600">{value}</p>
    </div>
  );
}

function Advantages() {
  return (
    <div className="flex flex-col gap-2 xl:gap-6">
      {[
        {
          Icon: FaTruck,
          title: "10 minute Delivery",
          description: "Guaranteed delivery within 10 minutes",
        },
        {
          Icon: FaBell,
          title: "No fees",
          description: "Free delivery on all orders above $100",
        },
        {
          Icon: IoStar,
          title: "Highest Quality",
          description: "Best quality products guaranteed",
        },
      ].map(({ Icon, title, description }, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="p-2 bg-gray-100 rounded-lg">
            <Icon className="text-blue-600" size={24} />
          </div>
          <div>
            <p className="text-lg font-medium text-gray-800">{title}</p>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Checkout;
