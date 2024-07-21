import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Product Name",
      rating: 4.3,
      reviews: 6789,
      offerprice:2999,
      sellingprice:3499,
      image:
        "https://rukminim2.flixcart.com/image/312/312/kz3118w0/dinner-set/s/t/h/yes-35-clo-scrtgrn-35-cello-original-imagb62qrazsuk5h.jpeg?q=70",
    },
    {
      id: 2,
      name: "Product Name",
      rating: 4.3,
      reviews: 6789,
      offerprice:2999,
      sellingprice:3499,
      image:
        "https://rukminim2.flixcart.com/image/312/312/kz3118w0/dinner-set/s/t/h/yes-35-clo-scrtgrn-35-cello-original-imagb62qrazsuk5h.jpeg?q=70",
    },
    {
      id: 3,
      name: "Product Name",
      rating: 4.3,
      reviews: 6789,
      offerprice:2999,
      sellingprice:3499,
      image:
        "https://rukminim2.flixcart.com/image/312/312/kz3118w0/dinner-set/s/t/h/yes-35-clo-scrtgrn-35-cello-original-imagb62qrazsuk5h.jpeg?q=70",
    },
    {
      id: 4,
      name: "Product Name",
      rating: 4.3,
      reviews: 6789,
      offerprice:2999,
      sellingprice:3499,
      image:
        "https://rukminim2.flixcart.com/image/312/312/kz3118w0/dinner-set/s/t/h/yes-35-clo-scrtgrn-35-cello-original-imagb62qrazsuk5h.jpeg?q=70",
    },
    // Add more products as needed
  ]);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col w-full p-4">
      <div className="pb-4 border-b-2 text-[24px] font-[600] border-gray-200">
        <p>Wishlist ({wishlist.length})</p>
      </div>

      {wishlist.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row items-start justify-between border-b border-gray-200 py-4"
        >
          <div className="flex items-start space-x-4 gap-6">
            <img
              src={item.image}
              alt={item.name}
              className="w-[100px] object-cover rounded-md"
            />
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="flex items-center gap-2">
                <span className="p-[4px] bg-orange-400 text-white rounded-sm">
                  {item.rating}
                </span>{" "}
                <span>({item.reviews})</span>
              </p>
              <div>
                <p className="flex items-center gap-2"><span className="text-[24px] font-[600]">{item.offerprice}</span> <span className="text-[16px] line-through">{item.sellingprice}</span> <span>{}</span>OFF</p>
              </div>
            </div>
          </div>
          <BsTrash
            className="text-[24px] text-red-500 cursor-pointer mt-4 md:mt-0"
            onClick={() => removeFromWishlist(item.id)}
          />
        </div>
      ))}

      {wishlist.length === 0 && (
        <p className="text-center py-4">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
