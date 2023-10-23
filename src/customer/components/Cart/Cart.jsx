import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {cart}= useSelector(store=>store)
  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  useEffect(()=>{
    dispatch(getCart())
  },[cart.updateCartItem,cart.deleteCartItem])
  
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16">
        <div className="col-span-2 space-y-3">
          {cart.cart?.cartItems.map((item) => (
            <CartItem item={item}/>
          ))}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 px-5 py-3">
              Price Details
            </p>
            <hr className="mx-5" />
            <div className="space-y-2 font-semibold py-3">
              <div className="flex justify-between  text-black px-5">
                <span>Price</span>
                <span>₹{cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between  text-green-600 px-5">
                <span>Discount</span>
                <span>-₹{cart.cart?.discount}</span>
              </div>
              <div className="flex justify-between text-green-600 px-5 pb-3">
                <span>Delivery Charge</span>
                <span>Free</span>
              </div>
              <hr className="mx-5" />
              <div className="flex justify-between  text-black px-5 font-bold pt-2">
                <span>Total Amount</span>
                <span>₹{cart.cart?.totalDiscountedPrice}</span>
              </div>
            </div>
            <div className="px-5 pb-5">
              <Button
                onClick={handleCheckout}
                variant="contained"
                className="w-full"
                sx={{
                  py: "0.7rem",
                  mt: "1rem",
                  textTransform: "none",
                  bgcolor: "#9155fd",
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
