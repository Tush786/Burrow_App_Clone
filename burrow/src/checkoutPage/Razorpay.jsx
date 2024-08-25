import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addOrder,
  deleteCartItemAfterOrder,
  orderConfirmMail,
} from "../redux/User/actions";
import { useToast } from "@chakra-ui/react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

function RazorpaySect() {
  const cartData1 = useSelector((state) => state.data.cart);
  const addressArr = useSelector((state) => state.data.addressData);
  const cartID = useSelector((state) => state.data.cartID);
  const TotalPrice = useSelector((state) => state.data.TotalPrice);
  const [totalPrice,setTotalPrice]=useState(TotalPrice+65)
  const Order_Confirm_Status = useSelector(
    (state) => state.data.Order_Confirm_Status
  );

  const [paymentMethod, setPaymentMethod] = useState("");
  const userInfo = Cookies.get('userInfo');
  const userObject = userInfo ? JSON.parse(userInfo) : null;
  const [owner, setOwner] = useState(userObject._id);
  console.log(userInfo,owner)
  const [notes, setNotes] = useState(
    "Please leave the package at the front door if not at home."
  );
  const addressobj = addressArr.filter((el) => el.ActiveAddress === true);
  const [addObj, setAddObj] = useState(addressobj[0]);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const handlePayment = async () => {
    const options = {
      key: "rzp_test_3L44n0jcIwXbJW",
      amount: totalPrice*85,
      currency: "INR",
      name: "Burrow-Clone",
      description: "Test Payment",
      image:
        "https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg",
      handler: async function (response) {
        toast({
          title: "Payment Successful",
          description: `Payment ID: ${response.razorpay_payment_id}`,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });

        setPaymentMethod("UPI");
        try {
          // Trigger the actions in sequence
          await dispatch(
            addOrder(cartData1, TotalPrice + 65, addObj, "UPI", notes)
          );
          await dispatch(deleteCartItemAfterOrder(cartID));
          await dispatch(orderConfirmMail(owner));

          toast({
            title: "Order Placed",
            description: "Your order has been placed successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top-right",
          });

          navigate("/");
        } catch (error) {
          toast({
            title: "Order Failed",
            description: "There was an issue with placing your order.",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top-right",
          });
        }
      },
      prefill: {
        name: addObj?.name,
        email: addObj?.email,
        contact: addObj?.phone,
      },
      theme: {
        color: "#3399cc",
      },
      modal: {
        ondismiss: function () {
          toast({
            title: "Payment Cancelled",
            description:
              "You closed the payment form before completing the transaction.",
            status: "warning",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          });
        },
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handleCashPayment = async () => {
    try {
      setPaymentMethod("COD");
      await dispatch(addOrder(cartData1, TotalPrice+65, addObj, "COD", notes));
      await dispatch(deleteCartItemAfterOrder(cartID));

      await dispatch(orderConfirmMail(owner));

      toast({
        title: "Order Placed",
        description: "Your order has been placed successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });

      navigate("/");
    } catch (error) {
      toast({
        title: "Order Failed",
        description: "There was an issue with placing your order.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={handlePayment}
        className="bg-indigo-600 text-white py-2 px-4 rounded"
      >
        Online Payment
      </button>
      <button
        onClick={handleCashPayment}
        className="bg-indigo-600 text-white py-2 px-4 rounded"
      >
        Cash On Delivery
      </button>
    </div>
  );
}

export default RazorpaySect;
