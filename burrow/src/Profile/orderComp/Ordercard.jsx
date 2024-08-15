import { Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { getOrderData, orderStatus } from "../../redux/User/actions";

function Ordercard({ product, quantity, deliveredAt,_id}) {
  const dispatch=useDispatch()
  const Handlestatus=(id,status)=>{
   dispatch(orderStatus(id,status)).then(()=>{
    dispatch(getOrderData())
   })
  }

  return (
    <div
      className="p-4 bg-white rounded-lg mb-4"
      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
    >
     
        <div
          className="flex flex-col sm:flex-row justify-between items-start mb-4 last:mb-0"
        >
          <div className="w-full sm:w-1/6 mb-4 sm:mb-0">
            <img
              src={product.image}
              alt={product.productName}
              className="w-[100px] h-auto rounded-lg"
            />
          </div>
          <div className="w-full sm:w-2/6 sm:ml-4 mb-4 sm:mb-0">
            <p className="font-semibold text-lg">{product.productName}</p>
            <div className="flex items-center gap-2 py-2"><p>Color :  </p>   <div className="h-4 w-4" style={{ backgroundColor: product.itemcolor }}></div></div>
          
          </div>
          <div className="w-full sm:w-1/6 mb-4 sm:mb-0">
            <p className="font-semibold text-lg text-blue-500">{`$${product.sellingPrice.toFixed(2)}`}</p>
           
          </div>
          <div className="w-full sm:w-2/6">
            <p className="font-semibold">
              Delivered On: {new Date(deliveredAt).toLocaleDateString()}
            </p>
            {
              
              product.orderStatus==="Delivered"?  <p className="text-blue-600">Your item has been delivered</p> : <p className="text-blue-600">{product.orderStatus}</p>
            }
           
          </div>

          <div>
              <Button  onClick={()=>Handlestatus(_id,"Cancelled")}>Cancle Order</Button>
            </div>
        </div>
    
    </div>
  );
}

export default Ordercard;
