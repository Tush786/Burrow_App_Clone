import { Button, Image } from "@chakra-ui/react";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addTocart, deleteCartItem, getCart } from "../redux/User/actions";

function Carts() {
  const [ownerId, setOwnerId] = useState("664eefa7e26fbe0044ccd5af");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartData1 = useSelector((state) => state.data.cart);
  const [val, setVal] = useState(1);
  const [condi, setCondi] = useState(false);
  const [name, setName] = useState("");
  const [pr, setPr] = useState(null);

  useEffect(() => {
    dispatch(getCart(ownerId));
  }, [dispatch, ownerId]);

  const totalPrice = useMemo(() => 
    Math.ceil(cartData1.reduce((acc, item) => acc + item.product.sellingPrice * item.quantity, 0)), 
    [cartData1]
  );

  const handleValue = useCallback(() => {
    if (condi) {
      localStorage.setItem("price", pr + 65);
    } else {
      localStorage.setItem("price", totalPrice + 65);
    }
  }, [condi, pr, totalPrice]);

  const dataValue = useCallback((el) => {
    setPr(el.product.price * val);
    setName(el.product.title);
    setCondi(true);
  }, [val]);

  const removeData = useCallback((id) => {
    dispatch(deleteCartItem(ownerId, id)).then(() => {
      dispatch(getCart(ownerId));
    });
  }, [dispatch, ownerId]);

  const addQty = useCallback((el) => {
    const { product, quantity } = el;
    const newQty = quantity + 1;
    dispatch(addTocart(product, newQty, ownerId)).then(() => {
      dispatch(getCart(ownerId));
    });
  }, [dispatch, ownerId]);

  const removeQty = useCallback((el) => {
    const { product, quantity } = el;
    const newQty = quantity - 1;
    if (newQty > 0) {
      dispatch(addTocart(product, newQty, ownerId)).then(() => {
        dispatch(getCart(ownerId));
      });
    }
  }, [dispatch, ownerId]);

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
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            {cartData1.length === 0 ? (
              <div className="flex flex-col items-center py-4">
                <p className="text-[34px] font-[600] pb-4">Cart Empty</p>
                <Image src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" />
                <div
                  onClick={() => {
                    navigate("/product");
                  }}
                >
                  <button className="bg-indigo-600 px-16 py-4 text-[#fff] text-[16px]">
                    Shop Now
                  </button>
                </div>
              </div>
            ) : (
              cartData1.map((el) => (
                <div
                  key={el._id}
                  className="flex items-center justify-between border-b border-gray-200 py-4"
                  onClick={() => dataValue(el)}
                >
                  <div className="w-1/4 h-24">
                    <img
                      src={el.product.image}
                      alt={el.product.productName}
                      className="w-full h-full object-center object-cover rounded-md"
                    />
                  </div>
                  <div className="w-3/4 pl-4">
                    <p className="text-lg font-semibold text-gray-900">
                      {el.product.title}
                    </p>
                    <p className="text-[20px] text-gray-600 pb-4">{el.product.productName}</p>
                    <p className="text-sm text-gray-600">{el.product.category}</p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex gap-2">
                        <Button onClick={() => removeQty(el)} className="bg-indigo-600 font-bold text-[20px]">
                          -
                        </Button>
                        <Button>{el.quantity}</Button>
                        <Button onClick={() => addQty(el)} className="bg-indigo-600">+</Button>
                      </div>
                      <button
                        className="text-red-500 hover:underline"
                        onClick={() => removeData(el.product._id)}
                      >
                        Remove
                      </button>
                      <p className="text-lg font-semibold text-gray-900">
                        ${el.quantity * el.product.sellingPrice}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div
            className="2xl:w-[40%] xl:w-[30%] lg:w-[50%] md:w-full sm:w-full h-[350px] bg-white p-6"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
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
