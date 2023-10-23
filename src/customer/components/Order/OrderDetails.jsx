import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid className="space-y-5" container>

        {[1,1,1,1,1].map(()=><Grid
          item
          container
          className="shadow rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://rukminim2.flixcart.com/image/832/832/kflftzk0-0/t-shirt/y/b/n/m-aps-12-ausk-original-imafwyf9ecyzy7xn.jpeg?q=70"
                alt=""
              />
              <div className="ml-2">
                <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  <span>Color:pink</span>
                  <span>Size : M</span>
                </p>
                <p>Seller:Shailesh Darji</p>
                <p>₹199</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{color:deepPurple[500]}}>
              <StarBorderOutlinedIcon className="mr-2"/>
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>)}
      </Grid>
    </div>
  );
};

export default OrderDetails;
