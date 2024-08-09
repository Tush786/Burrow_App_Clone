import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addTocart, getCart, singleproduct } from "../redux/User/actions";
import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SwiperComp from "./SwiperComp";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [ownerId, setOwnerId] = useState("664eefa7e26fbe0044ccd5af");
  const productsarr = useSelector((state) => state.data.singleproduct);
 
  const [itemcolor, setItemcolor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(singleproduct(id));
  }, [id, dispatch]);

  const isLoading = !productsarr || !productsarr.product;
  const product = productsarr?.product || {};

  const {
    productName,
    description,
    sellingPrice,
    retailPrice,
    imagesurl,
    colorShema,
    _id
  } = product;

  const handleAddToCart = async () => {
    if (!itemcolor) {
      toast.warn("Please select a color before adding to cart.");
      return;
    }

    if (!qty) {
      toast.warn("Please select a quantity before adding to cart.");
      return;
    }

    const productitem = {
      productName,
      description,
      sellingPrice,
      retailPrice,
      itemcolor,
      image: imagesurl[0],
      _id
    };

    dispatch(addTocart(productitem, qty, ownerId, _id)).then(() => {
      dispatch(getCart(ownerId));
    });
    navigate('/cart');
  };

  return (
    <section className="text-gray-800 bg-white body-font overflow-hidden">
      <div className="py-16 mx-auto">
        <div className="w-[90%] m-auto flex">
          <Box className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded mb-4 lg:mb-0">
            {isLoading ? (
              <Skeleton height="100%" width="100%" />
            ) : (
              <SwiperComp imagesurl={imagesurl} />
            )}
          </Box>
          <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {isLoading ? (
              <SkeletonText mt="4" noOfLines={2} spacing="4" />
            ) : (
              <>
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {productName}
                </h2>
              </>
            )}
            <div className="flex mb-4">
              <span className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                ))}
                <span className="ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-300 space-x-2">
                <a>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            {isLoading ? (
              <SkeletonText mt="4" noOfLines={6} spacing="4" />
            ) : (
              <p className="leading-relaxed">{description}</p>
            )}
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-300 mb-5">
              <div className="flex items-center">
                <span className="text-[16px] font-semibold pr-4">Color</span>
                <Box display="flex" gap={2}>
                  {isLoading
                    ? [...Array(5)].map((_, i) => (
                        <Skeleton
                          key={i}
                          height="20px"
                          width="20px"
                          borderRadius="full"
                        />
                      ))
                    : colorShema.map((color, index) => (
                        <button
                          key={index}
                          style={{ backgroundColor: color }}
                          className={`rounded-full h-6 w-6 p-0 hover:opacity-80 ${itemcolor === color ? 'opacity-80' : ''}`}
                          onClick={() => setItemcolor(color)}
                        ></button>
                      ))}
                </Box>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Qty</span>
                <div className="relative">
                  {isLoading ? (
                    <Skeleton height="40px" width="80px" />
                  ) : (
                    <select
                      value={qty}
                      onChange={(e) => setQty(parseInt(e.target.value, 10))}
                      className="rounded border border-gray-300 focus:ring-2 focus:ring-indigo-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-indigo-500 text-gray-800 pl-3 pr-10"
                    >
                      <option className="text-black" value={1}>1</option>
                      <option className="text-black" value={2}>2</option>
                      <option className="text-black" value={3}>3</option>
                      <option className="text-black" value={4}>4</option>
                    </select>
                  )}
                  {!isLoading && (
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex">
              {isLoading ? (
                <Skeleton height="40px" width="120px" />
              ) : (
                <>
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${sellingPrice}
                  </span>
                  <button
                    onClick={handleAddToCart}
                    className={`flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ${!itemcolor || !qty ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!itemcolor || !qty}
                  >
                    Add to Cart
                  </button>
                </>
              )}
              <button className="rounded-full w-10 h-10 bg-gray-300 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Add ToastContainer here */}
    </section>
  );
};

export default ProductDetails;
