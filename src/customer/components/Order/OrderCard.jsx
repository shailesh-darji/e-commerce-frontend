import { Grid } from "@mui/material";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import React from "react";
import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const OrderCard = ({item}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/${item.id}`)}className="px-5 pt-5 pb-1 shadow hover:shadow-lg">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim2.flixcart.com/image/832/832/kflftzk0-0/t-shirt/y/b/n/m-aps-12-ausk-original-imafwyf9ecyzy7xn.jpeg?q=70"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Mens Classic Linen Kurta</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid xs={2}>
          <p>₹199</p>
        </Grid>
        <Grid xs={4}>
            {true && <div><div className="flex">
            <ModeStandbyIcon
              className="mr-2 mt-1"
              fontSize="small"
              color="success"
            />
            <p className="font-semibold">Expexted Delivery On Mar 03</p>
          </div>
          <p className="opacity-50 text-xs font-semibold">
            Your Item Has Been Delivered
          </p></div>}
          {false && <p>
            <span>Expected Delivery On Mar 03</span>
            </p>}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
