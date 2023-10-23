import React from "react";
import { Grid,LinearProgress } from "@mui/material";

const RatingProgress = ({color,value,name}) => {
  return (
    <Grid container alignItems="center" gap={2}>
      <Grid item xs={2}>
        <p>{name}</p>
      </Grid>
      <Grid item xs={7}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            backgroundColor: '#d0d0d0',
            '& .MuiLinearProgress-bar': {
              backgroundColor: `${color}`
            },
            borderRadius: 4, height: 7
          }}
        />
      </Grid>
    </Grid>
  );
};

export default RatingProgress;
