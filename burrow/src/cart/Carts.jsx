import { Button, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Carts() {
  const [listData, setListData] = useState([]);
  const navigate = useNavigate();

  const cartData = [
    {
      category_id: 1,
      title: "Stylish Backpack",
      brand: "Brand A",
      price: 45.99,
      rating: 4.5,
      category: "Bags",
      description: "A stylish backpack suitable for everyday use.",
      thumbnail: "https://via.placeholder.com/150"
    },
    {
      category_id: 2,
      title: "Running Shoes",
      brand: "Brand B",
      price: 89.99,
      rating: 4.8,
      category: "Footwear",
      description: "Comfortable and durable running shoes.",
      thumbnail: "https://via.placeholder.com/150"
    },
    {
      category_id: 3,
      title: "Casual T-Shirt",
      brand: "Brand C",
      price: 19.99,
      rating: 4.2,
      category: "Clothing",
      description: "A casual t-shirt made of soft cotton.",
      thumbnail: "https://via.placeholder.com/150"
    },
    {
      category_id: 4,
      title: "Wrist Watch",
      brand: "Brand D",
      price: 129.99,
      rating: 4.7,
      category: "Accessories",
      description: "An elegant wristwatch with a leather strap.",
      thumbnail: "https://via.placeholder.com/150"
    },
    {
      category_id: 5,
      title: "Sunglasses",
      brand: "Brand E",
      price: 59.99,
      rating: 4.3,
      category: "Accessories",
      description: "Stylish sunglasses with UV protection.",
      thumbnail: "https://via.placeholder.com/150"
    }
  ];

  const deleteData = async (id) => {
    // Uncomment and use the following when integrating with actual API
    // const apiUrl = `http://localhost:9090/cartpage/${id}`;
    // try {
    //   await axios.delete(apiUrl);
    //   fetchData1();
    // } catch (error) {
    //   console.error("Error deleting data:", error);
    // }
  };

  const [val, setVal] = useState(1);
  const [condi, setCondi] = useState(false);
  const [name, setName] = useState("");
  const [pr, setPr] = useState(null);

  let totalPrice = Math.ceil(cartData.reduce((acc, item) => acc + item.price, 0));

  const dataValue = (el) => {
    setPr(el.price * val);
    setName(el.title);
    setCondi(true);
  };

  const handleValue = () => {
    if (condi) {
      localStorage.setItem("price", pr + 65);
    } else {
      localStorage.setItem("price", totalPrice + 65);
    }
  };

  const removeData = (el) => {
    deleteData(el.category_id);
  };

  useEffect(() => {
    // Uncomment and use the following when integrating with actual API
    // fetchData1();
  }, []);

  return (
    <div className="h-full bg-gray-100 min-h-screen">
      <div className="mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <Link to="/" className="text-gray-500 hover:text-gray-600">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-left"
                width={26}
                height={26}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
              <p className="text-[24px] font-[600] pl-2 leading-none">Back</p>
            </div>
          </Link>
        </div>

        <div className="flex flex-col md:flex-col 2xl:flex-row xl:flex-row lg:flex-row mt-8 gap-8">
          <div
            className=" w-full bg-white p-6 "
            style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
          >
            {cartData.length === 0 ? (
              <div className="flex flex-col items-center py-4">
              <p className="text-[34px] font-[600] pb-4">Cart Empty</p>
                <Image src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" />
                <div onClick={(()=>{
                   navigate('/product')
                })}>
            
                  <button className="bg-indigo-600 px-16 py-4 text-[#fff] text-[16px]">Shop Now</button>
              
                </div>
                
              </div>
            ) : (
              cartData.map((el) => (
                <div
                  key={el.category_id}
                  className="flex items-center justify-between border-b border-gray-200 py-4"
                  onClick={() => dataValue(el)}
                >
                  <div className="w-1/4 h-24">
                    <img
                      src={el.thumbnail}
                      alt={el.title}
                      className="w-full h-full object-center object-cover rounded-md"
                    />
                  </div>
                  <div className="w-3/4 pl-4">
                    <p className="text-sm font-medium text-gray-800">
                      {el.brand}
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {el.title}
                    </p>
                    <p className="text-sm text-gray-600">Rating: {el.rating}</p>
                    <p className="text-sm text-gray-600">{el.category}</p>
                    <p className="text-sm text-gray-600">{el.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <select
                        className="py-1 px-2 border border-gray-300 "
                        value={val}
                        onChange={(e) => setVal(e.target.value)}
                      >
                        {[...Array(5).keys()].map((n) => (
                          <option key={n + 1} value={n + 1}>
                            {n + 1}
                          </option>
                        ))}
                      </select>
                      <button
                        className="text-red-500 hover:underline"
                        onClick={() => removeData(el)}
                      >
                        Remove
                      </button>
                      <p className="text-lg font-semibold text-gray-900">
                        ${val * el.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div
            className="2xl:w-[40%] xl:w-[30%] lg:w-[50%] md:w-full sm:w-fll h-[350px]  bg-white p-6"
            style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
          >
            <p className="text-4xl font-black leading-9 text-gray-800">
              Summary
            </p>
            <div className="flex justify-between items-center pt-5">
              <p className="text-base leading-none text-gray-800">Subtotal</p>
              <p className="text-base leading-none text-gray-800">
                ${condi ? pr : totalPrice}
              </p>
            </div>
            <div className="flex justify-between items-center pt-5">
              <p className="text-base leading-none text-gray-800">Shipping</p>
              <p className="text-base leading-none text-gray-800">$30</p>
            </div>
            <div className="flex justify-between items-center pt-5">
              <p className="text-base leading-none text-gray-800">Tax</p>
              <p className="text-base leading-none text-gray-800">$35</p>
            </div>
            <div className="flex justify-between items-center pt-5">
              <p className="text-2xl leading-normal text-gray-800">Total</p>
              <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                ${condi ? pr + 65 : totalPrice + 65}
              </p>
            </div>
            <Link to="/checkout">
              <button
                className="w-full py-3 bg-indigo-600 text-white mt-5 rounded-md hover:bg-indigo-700"
                onClick={handleValue}
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
