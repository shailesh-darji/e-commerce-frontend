import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'
import { createPayment } from '../../../State/Payment/Action'

const OrderSummary = () => {
  const dispatch  = useDispatch();
  const {order} = useSelector(store=>store)
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id")

  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[orderId])

  const handleCheckout = () =>{
    dispatch(createPayment(orderId))
  }
  return (
    <div>
      <div className='m-5 p-5 shadow rounded-s-md border'>
        <AddressCard address={order.order?.shippingAddress}/>
      </div>
      <div>
      <div className="lg:grid grid-cols-3 lg:px-16">
        <div className="col-span-2 space-y-3">
          {order.order?.orderItems?.map((item)=><CartItem item={item}/>)}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 px-5 py-3">Price Details</p>
            <hr className="mx-5"/>
            <div className="space-y-2 font-semibold py-3">
              <div className="flex justify-between  text-black px-5">
                <span>Price</span>
                <span>₹{order.order?.totalPrice}</span>
              </div>
              <div className="flex justify-between  text-green-600 px-5">
                <span>Discount</span>
                <span>-₹{order.order?.discount}</span>
              </div>
              <div className="flex justify-between text-green-600 px-5 pb-3">
                <span>Delivery Charge</span>
                <span>Free</span>
              </div>
              <hr className="mx-5"/>
              <div className="flex justify-between  text-black px-5 font-bold pt-2">
                <span>Total Amount</span>
                <span>₹{order.order?.totalDiscountedPrice}</span>
              </div>
              
            </div>
            <div  className="px-5 pb-5">
            <Button
                  variant="contained"
                  className="w-full"
                  sx={{
                    py: "0.7rem",
                    mt: "1rem",
                    textTransform: "none",
                    bgcolor: "#9155fd",
                  }}
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary