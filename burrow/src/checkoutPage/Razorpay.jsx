import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, deleteCartItemAfterOrder } from "../redux/User/actions";

function RazorpaySect() {
  const cartData1 = useSelector((state) => state.data.cart);
  const addressArr = useSelector((state) => state.data.addressData);
  const cartID = useSelector((state) => state.data.cartID);
  console.log(cartID)
  const [totalamount, setTotalamount] = useState(5000);
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [notes, setNotes] = useState(
    "Please leave the package at the front door if not at home."
  );
  console.log(cartData1);
  const addressobj = addressArr.filter((el, ind) => {
    return el.ActiveAddress == true;
  });
  const [addObj, setAddObj] = useState(addressobj[0]);
  const dispatch = useDispatch();

  const handlePayment = () => {
    // const options = {
    //   key: "rzp_test_3L44n0jcIwXbJW",
    //   amount: 20 * 100,
    //   currency: "INR",
    //   name: "Playo",
    //   description: "Test Payment",
    //   image:
    //     "https://playo-website.imgix.net/company/logo1.png?auto=compress,format",
    //   handler: function (response) {
    //     alert("Payment ID: " + response.razorpay_payment_id);
    //     alert("Order ID: " + response.razorpay_order_id);
    //     alert("Signature: " + response.razorpay_signature);
    //   },
    //   modal: {
    //     ondismiss: function () {
    //       if (window.confirm("Are you sure, you want to close the form?")) {
    //         console.log("Checkout form closed by the user");
    //       } else {
    //         console.log("Complete the Payment");
    //       }
    //     },
    //   },
    // };

    // const rzp1 = new window.Razorpay(options);
    // rzp1.open();

    dispatch(addOrder(cartData1, totalamount, addObj, paymentMethod, notes));
    dispatch(deleteCartItemAfterOrder(cartID))
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-indigo-600 text-white py-2 px-4 rounded"
    >
      Pay Now
    </button>
  );
}

export default RazorpaySect;
